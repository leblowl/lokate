(ns lokate.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [display display-fade-in]]))

(enable-console-print!)

(defn open?
  [drawer]
  (true? (:open drawer)))

(defn toggle-open
  [drawer]
  (om/transact! drawer :open not))

(defn maximized?
  [drawer]
  (true? (:maximized drawer)))

(defn toggle-maximized
  [drawer]
  (om/transact! drawer :maximized not))

(defn back-btn
  [{{:keys [return-to]} :route} owner]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left"
                  :style (display return-to)
                  :onClick #(put! (om/get-shared owner :nav) @return-to)})))

(defn resize-btn
  [data owner]
  (om/component
    (dom/div #js {:id "resize-btn"
                  :className (str "btn " (if (-> data :drawer maximized?)
                                           "icon-resize-shrink"
                                           "icon-resize-enlarge"))
                  :onClick #(toggle-maximized (:drawer data))})))

(defn navicon
  [data owner]
  (om/component
    (dom/div #js {:className (str "navicon"
                               (when (open? (:drawer data)) " active"))
                  :onClick (fn [] (toggle-open (:drawer data)))})))

(defn home-icon
  [data owner]
  (om/component
    (dom/span #js {:className "banner-icon"}
      (gstring/unescapeEntities "&#11041;"))))

(defn home-banner
  [data owner]
  (om/component
    (dom/div #js {:className "banner-container"}
      (om/build home-icon data)
      (dom/span #js {:className "banner-title"}
        "lokate"))))

(defn drawer-banner
  [{{:keys [views opts return-to]} :route :as data} owner]
  (om/component
    (dom/div #js {:className "banner-container"}
      (if return-to
        (om/build back-btn data)
        (om/build home-icon data))
      (when (:banner views)
        (om/build (:banner views) data {:opts opts})))))

(defn control-panel
  [{{:keys [views opts return-to]} :route :as data} owner]
  (om/component
    (dom/div #js {:className "navigation-container"}
      (if (open? (:drawer data))
        (om/build drawer-banner data)
        (om/build home-banner data))

      (dom/div #js {:className "control-panel"}
        (dom/div #js {:id "drawer-control"
                      :style (display-fade-in (open? (:drawer data)))}
          (when (open? (:drawer data))
            (om/build resize-btn data))
          (dom/div #js {:id "drawer-sub-control"}
            (when-let [sub-view (:controls views)]
              (when (open? (:drawer data))
                (om/build sub-view data {:opts opts})))))
        (om/build navicon data)))))

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
