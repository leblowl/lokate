(ns lokate.app
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.core :as core])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def app-state
  (atom {:model {:collections    {}
                 :resources      {}
                 :resource-types {}}
         :view  {:app    {:orientation ""
                          :path        :home}
                 :drawer {:open?       false
                          :maximized?  false}
                 :unit   {:path        :info}}}))

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

(defn collection-name-input [on-edit]
  (c/render-input-overlay
    "Collection name"
    "Untitled collection"
    nil
    on-edit))

(defn add-collection [title]
  (let [collection {:id (u/uuid)
                    :title title
                    :timestamp (u/now)
                    :units {}
                    :selected true}]
    (swap! app-state
      #(assoc-in % [:model :collections (:id collection)]
         collection))))

(let [events (async/sub event-bus-pub :add-collection (async/chan))]
  (go-loop [e (<! events)]
    (collection-name-input (fn [title]
                             (add-collection title)
                             (om/detach-root (.getElementById js/document "overlay-root"))))
    (recur (<! events))))


(defn unit-name-input [on-edit]
  (c/render-input-overlay
    "Unit name"
    "Untitled unit"
    nil
    on-edit))

(defn add-unit [title latlng cid]
  (let [unit {:id (u/uuid)
              :title title
              :timestamp (u/now)
              :latlng latlng
              :status "green"
              :resources {}
              :cid cid
              :selected true}]
    (swap! app-state
      #(assoc-in % [:model :collections cid :units]
         unit))
    (.log js/console cid)
    (.log js/console (get-in @app-state [:model :collections cid :units]))))

(let [events (async/sub event-bus-pub :add-unit (async/chan))]
  (go-loop [e (<! events)]
    (unit-name-input (fn [title]
                       (add-unit title (second e) (:id (u/get-selected (-> @app-state :model :collections))))
                       (om/detach-root (.getElementById js/document "overlay-root"))))
    (recur (<! events))))

(let [events (async/sub event-bus-pub :set-app-path (async/chan))]
  (go-loop [e (<! events)]
    (swap! app-state
      #(assoc-in % [:view :app :path] (second e)))
    (recur (<! events))))

(defn app [data owner]
  (om/component
    (om/build core/window data)))

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
