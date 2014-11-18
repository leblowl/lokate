(ns lokate.login
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {}))

(defn login [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "login-panel"}
        (dom/div #js {:id "login-control"}

          (dom/div #js {:id "gSignInWrapper"}
            (dom/div #js {:className "g-signin"
                          :data-callback "authorize-cb"
                          :data-clientid "306741676689-b5ptq17cq0953l3002dgqtrkqvkhk1g6.apps.googleusercontent.com"
                          :data-cookiepolicy "single_host_origin"
                          :data-scope "profile"}))
          (dom/div #js {:id "or"} "or")
          (dom/div #js {:id "play-btn"
                        :onClick #(om/detach-root (.getElementById js/document "content-overlay"))}
            (dom/span #js {:id "play-label"} "play")))))))


(defn render []
    (om/root login app-state {:target (.getElementById js/document "content-overlay")}))
