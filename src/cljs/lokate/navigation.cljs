(ns lokate.navigation
  (:require [goog.events :as events]
            [goog.string :as gstring]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.core :as core]
            [cljs.core.async :refer [put! <! >! chan timeout]])
  (:import goog.History))

(def navigation-state
  (atom []))

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "navigation-container"}
        (dom/div #js {:className "banner-container"}
          (dom/span #js {:className "banner-icon"}
            (gstring/unescapeEntities "&#11041;"))
          (dom/span #js {:className "banner-title"}
            "lokate"))))))

(defn render []
  (om/root navigation-view
    navigation-state
    {:target (. js/document (getElementById "static-header"))})
  (core/render))
