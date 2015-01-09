(ns lokate.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [display display-fade-in]]
            [lokate.components :as components]))

(enable-console-print!)

(defn open?
  [drawer]
  (true? (:open drawer)))

(defn maximized?
  [drawer]
  (true? (:maximized drawer)))

(defn lokate-banner
  [data owner]
  (om/component
    (dom/div #js {:className "banner-container"}
      (om/build components/home-icon data)
      (dom/span #js {:className "banner-title"}
        "lokate"))))

(defn control-panel
  [{{:keys [views opts return-to]} :route :as data} owner]
  (om/component
    (dom/div #js {:className "navigation-container"}
      (if (open? (:drawer data))
        (when-let [banner (:banner views)]
          (om/build banner data {:opts opts}))
        (om/build lokate-banner data))
      (let [controls (or (:controls views) components/control-panel)]
        (om/build controls data {:opts opts})))))

(defn drawer
  [{{:keys [views opts]} :route :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "drawer-wrapper"}
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (open? (:drawer data)) " show" " hide")
                                   (when (maximized? (:drawer data)) " maximized"))}
          (dom/div #js {:id "drawer-content"}
            (when-let [sub-view (:drawer views)]
              (om/build sub-view data {:opts opts}))))))))
