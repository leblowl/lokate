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
  [[props resource] owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (def timer)
      (.addEventListener js/window "resize"
        (fn []
          ;; wait until we have stopped resizing
          (and timer (.clearTimeout js/window timer))
          (def timer (.setTimeout js/window
                       scroll-to-active
                       100)))))

    om/IDidMount
    (did-mount [_]
      ((:on-mount props)))

    om/IWillUnmount
    (will-unmount [_]
      (.removeEventListener js/window "resize" scroll-to-active))

    om/IRender
    (render [_]
      (html [:div.unit-resource
             [:span.unit-resource-title (-> resource :title)]
             [:div.unit-resource-count-box
              [:input.unit-resource-count-input
               {:ref "input"
                :type "number"
                :min 0
                :max 100
                :value 0
                :onChange #(async/put! (:event-bus (om/get-shared owner))
                             [:window :update :commit (fn [m]
                                                        (assoc-in m [:resources (:id resource)]
                                                          (assoc resource :count (.-value (om/get-node owner "input")))))])}]]]))))

(defn check-in-rscs-view
  [[unit rsc-types] owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (async/put! (:event-bus (om/get-shared owner))
        [:drawer :set :maximized? true]))

    om/IRender
    (render [_]
      (let [resources (map #(merge % (get rsc-types (:id %)))
                        (vals (:resources unit)))]
        (om/build c/input-list [{:id "check-in-rscs"
                                 :item-comp unit-resource-editable}
                                resources])))))

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
               (om/build-all status-select [{:color "red"}
                                            {:color "yellow"}
                                            {:color "green"}]
                 {:state {:active (:status unit)}})]
              [:textarea.multi-line-input
               {:placeholder "Add and optional commit message..."}]]]))))

(defn check-in-rscs-nav [unit]
  (om/build c/simple-nav-panel
    [(c/done!-btn
       (fn [evt-bus]
         (async/put! evt-bus [:window :set :commit {}])
         (async/put! evt-bus [:window :set :page :commit])))]))

(defn check-in-commit-nav [unit]
  (om/build c/simple-nav-panel
    [(om/build c/btn ["icon-done-all" #(u/route! % :unit (:cid unit) (:id unit))])]))

(defn check-in-views
  [{:keys [location]} data {:keys [page commit]}]
  (.log js/console (pr-str commit))
  (let [unit (apply u/get-unit data (second location))
        rsc-types (u/get-resource-types data)]
    (case page
      :resources [(check-in-rscs-nav unit)
                  (om/build check-in-rscs-view [unit rsc-types])]
      :commit    [(check-in-commit-nav unit)
                  (om/build check-in-commit-view unit)])))
