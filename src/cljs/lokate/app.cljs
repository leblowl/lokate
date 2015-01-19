(ns lokate.app
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.core :as core]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.unit :as unit])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def app-state
  (atom {:model {:collections    {}
                 :resources      {}
                 :resource-types {}}
         :view  {:app        {:orientation ""
                              :path        [:home]}
                 :drawer     {:open?       false
                              :maximized?  false}
                 :unit       {:path        :info}}}))

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

(defn set-orientation []
  (swap! app-state
    #(assoc-in % [:view :app :orientation]
       (if (> (.-height (.-screen js/window))
              (.-width (.-screen js/window)))
         "portrait"
         "landscape"))))

(defn toggle-drawer-open []
  (swap! app-state
    #(update-in % [:view :drawer :open?] not)))

(defn toggle-drawer-maximized []
  (swap! app-state
    #(update-in % [:view :drawer :maximized?] not)))

(let [events (async/sub event-bus-pub :toggle-drawer (async/chan))]
  (go-loop [e (async/<! events)]
    (case (second e)
      :open (toggle-drawer-open)
      :maximized (toggle-drawer-maximized))
    (recur (<! events))))

(defn set-path
  ([path & args]
   (swap! app-state
     #(assoc-in % [:view :app :path] [path args]))))

(let [events (async/sub event-bus-pub :set-path (async/chan))]
  (go-loop [e (<! events)]
    (apply set-path (rest e))
    (recur (<! events))))

(defn add-collection [title]
  (let [collection {:id (u/uuid)
                    :title title
                    :timestamp (u/now)
                    :units {}}]
    (swap! app-state
      #(assoc-in % [:model :collections (:id collection)]
         collection))
    collection))

(let [events (async/sub event-bus-pub :add-collection (async/chan))]
  (go-loop [e (<! events)]
    (c/display-input
      "Collection name"
      "Untitled collection"
      #(let [collection (add-collection %)]
         (set-path :collection (:id collection))))
    (recur (<! events))))

(defn add-unit [cid latlng title]
  (let [unit {:id (u/uuid)
              :title title
              :timestamp (u/now)
              :latlng latlng
              :status "green"
              :resources {}
              :cid cid}]
    (swap! app-state
      #(assoc-in % [:model :collections cid :units (:id unit)]
         unit))
    unit))

; adds unit to the currently selected collection
(let [events (async/sub event-bus-pub :add-unit (async/chan))]
  (go-loop [[topic latlng] (<! events)]
    (c/display-input
      "Unit name"
      "Untitled unit"
      #(let [selected-cid (-> @app-state :view :app :path second first)
             unit (add-unit selected-cid latlng %)]
         (set-path :unit selected-cid (:id unit))))
    (recur (<! events))))

(defn get-collections [data]
  (get-in data [:model :collections]))

(defn get-collection [data cid]
  (get-in data [:model :collections cid]))

(defn get-unit [data cid uid]
  (get-in data [:model :collections cid :units uid]))

(defn get-views [data]
  (let [drawer (-> data :view :drawer)
        [path args] (-> data :view :app :path)]
    (case path
      :home        (home/home-views drawer)
      :collections (collections/collections-views drawer
                     (get-collections data))
      :collection  (collections/collection-views drawer
                     (apply get-collection data args))
      :unit        (unit/unit-views drawer
                     (-> data :view :unit)
                     (apply get-unit data args))
      :resources   "do something"
      :settings    "do something")))

(defn app [data owner]
  (om/component
    (let [[nav-view drawer-view] (get-views data)]
      (om/build core/window [data nav-view drawer-view]))))

(defn render []
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:event-bus event-bus}}))

(defn init []
  (set-orientation)
  (.addEventListener js/window "resize" set-orientation))

(defn go! []
  (init)
  (render))

(go!)
