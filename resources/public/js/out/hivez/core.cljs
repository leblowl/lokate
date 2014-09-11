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

(defn app [data owner]
  (om/component
   (dom/div #js {:className "content"}
     (dom/div #js {:className "row"}
       (dom/div #js {:className "map-container small-1 small-centered column"}
                "map"))
     (dom/div #js {:className "row"}
       (dom/div #js {:className "info-container small-1 small-centered column"}
                "info")))))

(om/root app app-state {:target (.getElementById js/document "content")})
