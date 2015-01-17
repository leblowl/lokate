(ns lokate.check-in
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn status-select
  [data owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:active "green"})

    om/IRenderState
    (render-state [_ {:keys [active]}]
      (dom/div #js {:className (str "status-select-wrapper"
                                 (when (= active (:color data)) " active"))}
        (dom/div #js {:className "status-select icon-pin"
                      :style #js {:color (get u/status-colors (:color data))}
                      :onClick #(om/set-state! owner :active (:color data))})))))

(defn check-in-controls
  [[check-in-view-data] owner]
  (om/component
    (html
      (case (:path check-in-view-data)
        :resources (c/done!-btn #())

        :commit    (c/done!-btn #())))))

(defn scroll-to-active []
  (let [active (.-activeElement js/document)]
    (when (= (.-tagName active) "input")
      (set! (.-scrollTop (.-offsetParent active)) (- (.-offsetTop active) 14)))))

(defn unit-resource-editable
  [resource owner]
  (reify
    om/IWillMount
    (will-mount [_]

      ;;add these to list
      (def timer)
      (.addEventListener js/window "resize"
        (fn []
          ;; wait until we have stopped resizing
          (and timer (.clearTimeout js/window timer))
          (def timer (.setTimeout js/window
                       scroll-to-active
                       100)))))

    om/IWillUnmount
    (will-unmount [_]
      (.removeEventListener js/window "resize" scroll-to-active))

    om/IRender
    (render [_]
      (html [:div.unit-resource
             [:span.unit-resource-title (-> resource :type :title)]
             [:div.unit-resource-count-box
              [:input.unit-resource-count-input
               {:type "number"
                :min 0
                :max 100
                :value 0
                :onChange #()}]]]))))

(defn check-in
  [[check-in-view-data unit] owner {:keys [c-id u-id] :as opts}]
  (om/component
    (dom/div #js {:id "check-in"}
      (case (:path check-in-view-data)
        :resources (om/build c/input-list (vals (:resources unit))
                     {:opts {:item-comp unit-resource-editable
                             :keyfn #(-> % :name (str/upper-case))}})

        :commit    (dom/div #js {:id "commit-wrapper"}
                     (dom/div #js {:id "commit"}
                       (apply dom/div #js {:id "commit-status-wrapper"}
                         (om/build-all status-select [{:color "green"}
                                                      {:color "yellow"}
                                                      {:color "red"}]
                           {:state {:active (:status unit)}}))))))()))
