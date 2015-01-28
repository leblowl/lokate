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

(defn check-in-rscs-view
  [unit owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (async/put! (:event-bus (om/get-shared owner))
        [:drawer :set :maximized? true]))

    om/IRender
    (render [_]
      (om/build c/input-list [{:item-comp unit-resource-editable}
                              (vals (:resources unit))]))))

(defn check-in-commit-view
  [unit owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (async/put! (:event-bus (om/get-shared owner))
        [:drawer :set :maximized? true]))

    om/IWillUnmount
    (will-unmount [_]
      (async/put! (:event-bus (om/get-shared owner))
        [:drawer :set :maximized? false]))

    om/IRender
    (render [_]
      (html [:div#commit-wrapper
             [:div#commit
              [:div#commit-status-wrapper
               (om/build-all status-select [{:color "green"}
                                            {:color "yellow"}
                                            {:color "red"}]
                 {:state {:active (:status unit)}})]]]))))

(defn check-in-rscs-nav [unit]
  (om/build c/simple-nav-panel
    [(c/done!-btn
       #(async/put! %
          [:set-path :check-in (:cid unit) (:id unit) :commit]))]))

(defn check-in-commit-nav [unit]
  (om/build c/simple-nav-panel
    [(c/done!-btn
       #(async/put! %
          [:set-path :unit (:cid unit) (:id unit) :info]))]))

(defn check-in-views
  [page unit]
  (case page
    :resources [(check-in-rscs-nav unit)
                (om/build check-in-rscs-view unit)]
    :commit    [(check-in-commit-nav unit)
                (om/build check-in-commit-view unit)]))
