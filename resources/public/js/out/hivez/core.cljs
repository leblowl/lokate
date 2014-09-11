(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

(def app-state
  (atom {}))

(defn goog-map [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "map"} "map"))))

(defn hive-info [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "info"} "info"))))

(defn app [data owner]
  (om/component
   (dom/div #js {:className "content-liner"}
     (dom/div #js {:className "row map-row"}
       (dom/div #js {:className "map-column small-1 small-centered column"}
         (om/build goog-map data)))
     (dom/div #js {:className "row info-row"}
       (dom/div #js {:className "info-column small-1 small-centered column"}
         (om/build hive-info data))))))

(om/root app app-state {:target (.getElementById js/document "content")})
