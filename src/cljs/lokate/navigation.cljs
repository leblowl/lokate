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

(linda/defroute "/" []
  (home/render))

(linda/defroute "/Collections" [])

(linda/defroute "/Resources" [])

(linda/defroute "/Tasks" [])

(linda/defroute "*" []
  (set! (.-location js/window) "/"))

(defn enable-nav []
  (doto history
    (events/listen EventType/NAVIGATE on-navigate)
    (.setEnabled true)))

(defn render []
  (core/render enable-nav))

(render)
