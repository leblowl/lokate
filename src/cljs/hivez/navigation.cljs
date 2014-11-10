(ns hivez.navigation
  (:require [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.string :as gstring]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [hivez.core :as core]
            [cljs.core.async :refer [put! <! >! chan timeout]])
  (:import goog.History))

(def history (History.))

(def navigation-state
  (atom []))

(def nav-chan (chan))

(defn on-navigate [event]
  (secretary/dispatch! (if (nil? (.-token event)) "/" (.-token event))))

(defn init-nav []
  (doto history
    (events/listen EventType/NAVIGATE on-navigate)
    (.setEnabled true))
  nav-chan)

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "navigation-container"}
        (dom/div #js {:className "banner-container"}
          (dom/span #js {:className "banner-icon"}
            (gstring/unescapeEntities "&#11041;"))
          (dom/span #js {:className "banner-title"}
            "hivez"))))))

(defn render []
  (om/root navigation-view
    navigation-state
    {:target (. js/document (getElementById "static-header"))})
  (core/render))
