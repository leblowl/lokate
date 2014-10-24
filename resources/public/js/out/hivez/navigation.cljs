(ns hivez.navigation
  (:require [hivez.core :as core]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [goog.string :as gstring]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import goog.History))

(def history (History.))

(def navigation-state
  (atom []))

(defn refresh-navigation []
  (let [token (.getToken history)
        set-active (fn [nav]
                     (assoc nav :active (= (:path nav) token)))]
    (swap! navigation-state #(map set-active %))))

(defn on-navigate [event]
  (refresh-navigation)
  (secretary/dispatch! (if (nil? (.-token event)) "/" (.-token event))))

(defn navigation-item-view [{:keys [id name path active]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:id id :className (if active "active" "")}
        (dom/a #js {:href (str "#" path)} name)))))

(defn navigation-view [app owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (doto history
        (events/listen EventType/NAVIGATE on-navigate)
        (.setEnabled true)))

    om/IRender
    (render [this]
      (dom/div #js {:className "navigation-container"}
        (dom/div #js {:className "banner-container"}
          (dom/span #js {:className "banner-icon"}
            (gstring/unescapeEntities "&#11041;"))
          (dom/span #js {:className "banner-title"}
            "hivez"))
        (apply dom/ul #js {:className "nav nav-tabs"}
          (om/build-all navigation-item-view app))))))

(defn render []
  (om/root navigation-view
    navigation-state
    {:target (. js/document (getElementById "static-header"))}))
