(ns lokate.navigation
  (:require [goog.events :as events]
            [goog.string :as gstring]
            [goog.history.EventType :as EventType]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as linda :include-macros true]
            [lokate.core :as core]
            [lokate.home :as home])
  (:import goog.History))

(def history (History.))

(def navigation-state
  (atom []))

(defn on-navigate [event]
  (linda/dispatch! (if (nil? (.-token event)) "/" (.-token event))))

(defn navigation-view [app owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (linda/defroute "/" []
        (home/render))

      (linda/defroute "/Collections" [])

      (linda/defroute "/Resources" [])

      (linda/defroute "/Tasks" [])

      (linda/defroute "*" []
        (set! (.-location js/window) "/")))

    om/IRender
    (render [this]
      (dom/div #js {:className "navigation-container"}
        (dom/div #js {:className "banner-container"}
          (dom/span #js {:className "banner-icon"}
            (gstring/unescapeEntities "&#11041;"))
          (dom/span #js {:className "banner-title"}
            "lokate"))))))

(defn enable-nav []
  (doto history
    (events/listen EventType/NAVIGATE on-navigate)
    (.setEnabled true)))

(core/render)
