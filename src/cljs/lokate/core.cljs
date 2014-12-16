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

(defn back-btn
  [data owner {:keys [type-key] :as opts}]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left2"
                  :style (display (:return-to data))
                  :onClick #(put! (om/get-shared owner :nav) [:return])})))

(defn navicon
  [data owner]
  (om/component
    (dom/div #js {:className (str "navicon" (when (open? (:drawer data)) " active"))
                  :onClick (fn [] (toggle-open (:drawer data)))})))

(defn control-panel
  [{:keys [route-views route-opts] :as data} owner]
  (om/component
    (dom/div #js {:className "navigation-container"}
      (dom/div #js {:className "banner-container"}
        (dom/span #js {:className "banner-icon"}
          (gstring/unescapeEntities "&#11041;"))
        (dom/span #js {:className "banner-title"}
          "lokate"))
      (dom/div #js {:className "control-panel"}
        (dom/div #js {:id "drawer-control"
                      :style (display-fade-in (open? (:drawer data)))}
          (when (open? (:drawer data))
            (om/build back-btn data))
          (dom/div #js {:id "drawer-sub-control"}
            (when-let [sub-view (:controls route-views)]
              (when (open? (:drawer data))
                (om/build sub-view data {:opts route-opts})))))
        (om/build navicon data)))))

(defn drawer
  [{:keys [route-views route-opts] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "drawer-wrapper"}
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (open? (:drawer data)) " show" " hide"))}
          (when-let [sub-view (:drawer route-views)]
            (om/build sub-view data {:opts route-opts})))))))
