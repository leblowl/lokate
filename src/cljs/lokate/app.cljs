(ns lokate.app
  (:require [goog.events :as events]
            [goog.string :as gstring]
            [goog.history.EventType :as EventType]
            [clojure.string :as str]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as linda :include-macros true]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [lokate.core :as core]
            [lokate.home :as home]
            [lokate.collections :as collections])
  (:import goog.History))

(def history (History.))
(def app-state
  (atom {:orientation nil
         :drawer {:open false}
         :places []}))

(defn init-app-state [result]
  (swap! app-state
    (fn [m]
      (update-in m [:places]
        #(conj % (js->clj (.-value result) :keywordize-keys true))))))

(defn on-resize []
  (swap! app-state #(assoc % :orientation
                           (if (> (.-height (.-screen js/window))
                                  (.-width (.-screen js/window)))
                             "portrait"
                             "landscape"))))


(defn on-navigate [event]
  (linda/dispatch! (if (nil? (.-token event)) "/" (.-token event))))

(linda/defroute "/" []
  (home/render))

(linda/defroute "/collections" []
  (collections/render app-state))

(linda/defroute "/resources" [])

(linda/defroute "/tasks" [])

(linda/defroute "*" []
  (set! (.-location js/window) "/"))

(defn as-route [hash]
  (str/replace-first hash #"#" ""))

(defn enable-nav []
  (doto history
    (events/unlisten EventType/NAVIGATE on-navigate)
    (events/listen EventType/NAVIGATE on-navigate)
    (.setEnabled true))
  (linda/dispatch! (as-route (.-hash (.-location js/window)))))

(defn go! []
  (on-resize)
  (.addEventListener js/window "resize" on-resize)
  (db-new
    #(db-get-all init-app-state
       (partial core/render app-state enable-nav))))

(go!)
