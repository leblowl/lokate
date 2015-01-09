(ns lokate.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! pub chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.set :refer [rename-keys]]
            [cljs-uuid-utils :as uuid]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [lokate.routing :refer [routes get-route route!]]
            [lokate.util :refer [distance fdate-now]]
            [lokate.core :as core]
            [lokate.map :as map]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.unit :as unit]
            [lokate.resources :as resources]))

(enable-console-print!)

(def handle)

(def app-state
  (atom {:orientation nil
         :drawer {:open false
                  :maximized false}
         :collections {}
         :resources {}
         :route nil}))

(def nav-chan (chan))
(def pub-chan (chan))
(def notif-chan (pub pub-chan :topic))

(defn init-app-state [key result]
  (swap! app-state
    (fn [m]
      (assoc-in m [key (keyword (.-key result))]
        (js->clj (.-value result) :keywordize-keys true)))))

(defn on-resize []
  (swap! app-state #(assoc % :orientation
                           (if (> (.-height (.-screen js/window))
                                  (.-width (.-screen js/window)))
                             "portrait"
                             "landscape"))))

(defn new-collection []
  {:name nil
   :units {}
   :id (str (uuid/make-random-uuid))})

(defn new-unit []
  {:name nil
   :origin (fdate-now)
   :pos nil
   :resources []
   :notes nil
   :id (str (uuid/make-random-uuid))})

(defn add-collection
  [data]
  (let [to-add (new-collection)]
    (om/update! data [:collections (keyword (:id to-add))] to-add)
    (db-add "collection" to-add)
    (keyword (:id to-add))))

(defn add-unit
  [data collection-id]
  (let [to-add (new-unit)]
    (om/update! data
      [:collections collection-id :units (keyword (:id to-add))] to-add)
    (db-add "collection" (get-in @data [:collections collection-id]))
    (keyword (:id to-add))))

(defn nearest
  [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn delete
  [data type-key select-path]
  (om/transact! data (pop select-path) #(dissoc % (peek select-path)))
  (om/update! data type-key nil))

(defn dispatchR
  ([data route views]
     (dispatchR data route views nil))
  ([data route views return-to]
     (dispatchR data route views return-to nil))
  ([data route views return-to opts]
     (om/update! data [:route]
       (merge route {:views views
                     :return-to return-to
                     :opts opts}))))

(def handlers
  {:home           (fn [data route]
                     (dispatchR data route
                       {:banner home/home-banner
                        :drawer home/home-view}))

   :collections    (fn [data route]
                     (dispatchR data route
                       {:banner collections/collections-banner
                        :controls collections/collections-controls
                        :drawer collections/collections-view}
                       (get-route :home)))

   :collection-new (fn [data route]
                     (route!
                       (get-route :collection {:c-id (add-collection data)})
                       (partial handle data)))

   :collection     (fn [data route]
                     (dispatchR data route
                       {:banner collections/collection-banner
                        :controls collections/collection-controls
                        :drawer collections/collection-view}
                       (get-route :collections)
                       (select-keys route [:c-id])))

   :unit-new       (fn [data route]
                     (let [c-id (:c-id route)]
                       (route!
                         (get-route :unit-info {:c-id c-id
                                                :u-id (add-unit data c-id)})
                         (partial handle data))))

   :unit-info      (fn [data route]
                     (dispatchR data route
                       {:banner unit/unit-banner
                        :controls unit/unit-controls
                        :drawer unit/unit-view}
                       (get-route :collection (select-keys route [:c-id]))
                       (select-keys route [:c-id :u-id])))

   :unit-resources (fn [data route]
                     (dispatchR data route
                       {:banner unit/unit-banner
                        :controls unit/unit-resources-controls
                        :drawer unit/unit-resources}
                       (get-route :collection (select-keys route [:c-id]))
                       (select-keys route [:c-id :u-id])))

   :unit-resources-config (fn [data route]
                            (om/update! data [:drawer :maximized] true)
                            (dispatchR data route
                              {:controls unit/done!-btn
                               :drawer unit/unit-resources-config}
                              nil
                              (select-keys route [:c-id :u-id])))

   :resources      (fn [data route]
                     (dispatchR data route
                       {:controls resources/resources-controls
                        :drawer resources/resources-view}
                       (get-route :home)
                       (select-keys route [:c-id :u-id])))

   :resource       (fn [data route]
                     (dispatchR data route
                       {:drawer resources/resource-view}
                       (get-route :resources)
                       (select-keys route [:r-id])))})

(defn handle [data x]
  (if-let [handler (get handlers (:domkm.silk/name x))]
    (handler data x)
    (println "No matching handler found for route " (:domkm.silk/name x) "... >.< !")))

(defn app [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [nav (om/get-shared owner :nav)]
        (go-loop []
          (let [route (<! nav)]
            (route! route (partial handle data)))
          (recur))))

    om/IDidMount
    (did-mount [_]
      (put! (om/get-shared owner :nav) (get-route :home)))

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
                          :shared {:nav nav-chan
                                   :pub-chan pub-chan
                                   :notif-chan notif-chan}}))

(defn go! []
  (.addEventListener js/window "resize" on-resize)
  (on-resize)
  (db-new
    (fn []
      (db-get-all "collection" (partial init-app-state :collections)
        #(db-get-all "resource" (partial init-app-state :resources) render)))))

(go!)
