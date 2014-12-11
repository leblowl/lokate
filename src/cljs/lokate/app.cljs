(ns lokate.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
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
            [lokate.collections :as collections]
            [lokate.collection :as collection]))

(def app-state
  (atom {:orientation nil
         :drawer {:open false
                  :history []}}))

(def nav-chan (chan))

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
  (home/render nav-chan))

(linda/defroute "/collections" []
  (collections/render app-state))

(linda/defroute #"/collection/(\d+)" [id]
  (if (<= id (count (:places @app-state)))
    (collection/render app-state id)
    (linda/dispatch! "/")))

(linda/defroute "/resources" [])

(linda/defroute "/tasks" [])

(linda/defroute "*" []
  (set! (.-location js/window) "/"))

(defn as-route [hash]
  (str/replace-first hash #"#" ""))

(defn dispatch-route [route]
  (swap! app-state update-in [:drawer :history] conj route)
  (linda/dispatch! route))

(defn dispatch-return []
  (swap! app-state update-in [:drawer :history] pop)
  (let [return-to (last (:history (:drawer @app-state)))]
    (linda/dispatch! return-to)))

(defn enable-nav []
  (go-loop []
    (let [cmd (<! nav-chan)]
      (case (first cmd)
        :route  (dispatch-route (second cmd))
        :return (dispatch-return)))
    (recur)))

(defn go! []
  (on-resize)
  (.addEventListener js/window "resize" on-resize)
  (enable-nav)
  (db-new
    #(db-get-all init-app-state
       (partial core/render app-state nav-chan))))

(go!)
