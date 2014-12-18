(ns lokate.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as linda :include-macros true]
            [cljs-uuid-utils :as uuid]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [lokate.util :refer [distance fdate-now]]
            [lokate.core :as core]
            [lokate.map :as map]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.unit :as unit]
            [lokate.resources :as resources]))

(declare home collections collection point resources resource)

(def app-state
  (atom {:orientation nil
         :drawer {:open false}
         :collections {}
         :resources {}
         :route-name nil
         :route-opts {}
         :route-views {}
         :return-to nil}))

(def nav-chan (chan))

(defn init-app-state [key result]
  (swap! app-state
    (fn [m]
      (assoc-in m [key (.-key result)]
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
   :pos []
   :resources []
   :notes nil
   :id (str (uuid/make-random-uuid))})

(defn add-collection
  [data]
  (let [to-add (new-collection)]
    (om/update! data [:collections (:id to-add)] to-add)
    (db-add "collection" to-add)
    (:id to-add)))

(defn add-unit
  [data collection-id]
  (let [to-add (new-unit)]
    (om/update! data
      [:collections collection-id :units (:id to-add)] to-add)
    (db-add "collection" (get-in @data [:collections collection-id]))
    (:id to-add)))

(defn nearest
  [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn delete
  [data type-key select-path]
  (om/transact! data (pop select-path) #(dissoc % (peek select-path)))
  (om/update! data type-key nil))

(defn route!
  ([data route-name route-views return-to]
     (route! data route-name route-views return-to nil))
  ([data route-name route-views return-to route-opts]
     (.log js/console (str "history: " (:history (:drawer @data))))
     (.log js/console (str "route: " route-name))
     (om/update! data [:route-name] route-name)
     (om/update! data [:route-views] route-views)
     (om/update! data [:route-opts] route-opts)
     (om/update! data [:return-to] return-to)))

(defn return! [data]
  (linda/dispatch! (:return-to @data)))

(defn app [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      ; do named routes support regex???
      (linda/defroute home "/home"
        []
        (route! data
          "/home"
          {:drawer home/home-view}
          nil))

      (linda/defroute collections "/collections"
        []
        (route! data
          (collections)
          {:controls collections/collections-controls
           :drawer collections/collections-view}
          (home)))

      (linda/defroute "/collections/new"
        []
        (linda/dispatch! (str "/collections/" (add-collection data))))

      (linda/defroute collection "/collections/:collection-id"
        [collection-id]
        (route! data
          (collection {:collection-id collection-id})
          {:controls collections/collection-controls
           :drawer collections/collection-view}
          (collections)
          {:id collection-id}))

      (linda/defroute add-new-point "/collections/:collection-id/points/new"
        [collection-id]
        (linda/dispatch! (point {:collection-id collection-id
                                 :point-id (add-unit data collection-id)})))

      (linda/defroute point "/collections/:collection-id/points/:point-id"
        [collection-id point-id]
        (route! data
          (point {:collection-id collection-id
                  :point-id point-id})
          {:controls unit/unit-controls
           :drawer unit/unit-view}
          (collection {:collection-id collection-id})
          {:collection-id collection-id
           :point-id point-id}))

      (linda/defroute resources "/resources" []
        (route! data
          (resources)
          {:controls resources/resources-controls
           :drawer resources/resources-view}
          (home)))

      (linda/defroute resource "/resources/:id" [id]
        (route! data
          (resource {:id id})
          {:drawer resources/resource-view}
          (resources)
          {:id id}))

      (linda/defroute "*" []
        (.log js/console "Route not found... >.< !"))

      (let [nav (om/get-shared owner :nav)]
        (go-loop []
          (let [cmd (<! nav)]
            (case (first cmd)
              :route (linda/dispatch! (second cmd))
              :return (return! data)))
          (recur))))

    om/IDidMount
    (did-mount [_]
      (put! (om/get-shared owner :nav) [:route "/home"]))

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
    (fn []
      (db-get-all "collection" (partial init-app-state :collections)
        #(db-get-all "resource" (partial init-app-state :resources) render)))))

(go!)
