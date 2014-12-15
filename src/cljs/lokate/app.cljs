(ns lokate.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [lokate.util :refer [distance fdate-now]]
            [lokate.core :as core]
            [lokate.map :as map]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.collection :as collection]
            [lokate.point :as point]))

(def app-state
  (atom {:orientation nil
         :drawer {:open false
                  :history []}
         :collections []
         :route-name nil
         :route-opts {}
         :route-views {}}))

(def nav-chan (chan))

(defn init-app-state [result]
  (swap! app-state
    (fn [m]
      (update-in m [:collections]
        #(conj % (js->clj (.-value result) :keywordize-keys true))))))

(defn on-resize []
  (swap! app-state #(assoc % :orientation
                           (if (> (.-height (.-screen js/window))
                                  (.-width (.-screen js/window)))
                             "portrait"
                             "landscape"))))

(defn new-collection [id]
  {:name nil
   :points []
   :id id})

(defn new-point [id]
  {:name nil
   :origin (fdate-now)
   :pos []
   :resources []
   :notes nil
   :id id})

(defn add-collection
  [data]
  (let [id (count (:collections @data))
        to-add (new-collection id)]
    (om/transact! data [:collections] #(conj % to-add))
    (db-add to-add)
    id))

(defn add-point
  [data collection-id]
  (let [ks [:collections collection-id :points]
        id (count (get-in @data ks))
        point (new-point id)]
    (om/transact! data ks #(conj % point))
    (db-add (get-in @data [:collections collection-id]))
    id))

(defn nearest
  [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn delete
  [data type-key select-path]
  (om/transact! data (pop select-path) #(dissoc % (peek select-path)))
  (om/update! data type-key nil))

(defn dispatch!
  [data route-name route-opts route-views]
  (om/update! data :route-name route-name)
  (om/update! data :route-opts route-opts)
  (om/update! data :route-views route-views))

(defn route!
  [data [route-name route-opts]]
  (let [dispatch! (partial dispatch! data route-name route-opts)]
    (case route-name
      :home        (dispatch! {:drawer home/home-view})
      :collections (dispatch! {:controls collections/collections-controls
                               :drawer collections/collections-view})
      :collections:new (route! data [:collection {:id (add-collection data)}])
      :collection  (dispatch! {:controls collection/collection-controls
                               :drawer collection/collection-view})
      :point:new (route! data [:point {:collection-id (:collection-id route-opts)
                                       :id (add-point data (:collection-id route-opts))}])
      :point (dispatch! {:drawer point/point-view}))))

(defn dispatch-route [data route]
  (route! data route)
  (swap! app-state update-in [:drawer :history]
    #(if (not= (last %) route) (conj % route) %)))

(defn dispatch-return [data]
  (swap! app-state update-in [:drawer :history] pop)
  (let [return-to (last (:history (:drawer @app-state)))]
    (route! data return-to)))

(defn app [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [nav (om/get-shared owner :nav)]
        (go-loop []
          (let [cmd (<! nav)]
            (case (first cmd)
              :route  (dispatch-route data (rest cmd))
              :return (dispatch-return data)))
          (recur))))

    om/IDidMount
    (did-mount [_]
      (put! (om/get-shared owner :nav) [:route :home]))

    om/IRender
    (render [_]
      (dom/div #js {:id "app"}
        (om/build core/control-panel data)
        (dom/div #js {:className (str "flex-container " (:orientation data))}
          (dom/div #js {:className "flex-content"}
            (om/build map/l-map data))
          (om/build core/drawer data))))))

(defn render []
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:nav nav-chan}}))

(defn go! []
  (.addEventListener js/window "resize" on-resize)
  (on-resize)
  (db-new
    #(db-get-all init-app-state render)))

(go!)
