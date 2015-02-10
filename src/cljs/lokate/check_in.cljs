(ns lokate.check-in
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn status-select
  [{:keys [color]} owner opts]
  (reify
    om/IRenderState
    (render-state [_ {:keys [active]}]
      (html [:div {:class (str "status-select-wrapper"
                            (when (= active color) " active"))}
             [:div {:class "status-select clickable icon-pin"
                    :style #js {:color (get u/status-colors color)}
                    :on-click #(async/put! (:event-bus (om/get-shared owner))
                                 [:window :update :commit (fn [m]
                                                            (assoc-in m [:data :status] color))])}]]))))

(defn scroll-to-active []
  (let [active (.-activeElement js/document)]
    (when (= (str/lower-case (.-tagName active)) "input")
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
      ((:on-mount props))
      (.addEventListener (om/get-node owner "input") "focus" scroll-to-active))

    om/IWillUnmount
    (will-unmount [_]
      (.removeEventListener js/window "resize" scroll-to-active))

    om/IRender
    (render [_]
      (html [:div.unit-resource
             [:span.unit-resource-title (:title resource)]
             [:div.unit-resource-count-box
              [:input.unit-resource-count-input
               {:ref "input"
                :type "number"
                :min 0
                :max 100
                :value (:count resource)
                :on-change #(async/put! (:event-bus (om/get-shared owner))
                              [:window :update :commit (fn [m]
                                                         (assoc-in m [:data :resources (:id resource) :count]
                                                           (.-value (om/get-node owner "input"))))])}]]]))))

(defn check-in-rscs-view
  [resources owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (async/put! (:event-bus (om/get-shared owner))
        [:drawer :set :maximized? true]))

    om/IRender
    (render [_]
      (let [resources (->> resources vals (sort-by :timestamp))]
        (om/build c/input-list [{:id "check-in-rscs-list"
                                 :item-comp unit-resource-editable}
                                resources])))))

(defn check-in-commit-view
  [commit owner]
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
      (html [:div.flex-col.full.frame
             [:div#commit
              [:div#commit-status-wrapper
               (om/build-all status-select [{:color "red"}
                                            {:color "yellow"}
                                            {:color "green"}]
                 {:state {:active (-> commit :data :status)}})]
              [:textarea.multi-line-input
               {:ref "input"
                :placeholder "Add an optional commit message..."
                :on-change #(om/update! commit :message
                              (.-value (om/get-node owner "input")))}]]]))))

(defn check-in-rscs-nav [unit]
  (om/build c/simple-nav-panel
    [(c/done!-btn
       (fn [evt-bus]
         (async/put! evt-bus [:window :set :page :commit])))]))

(defn check-in-commit-nav [unit commit]
  (om/build c/simple-nav-panel
    [(om/build c/btn ["icon-done-all" (fn [evt-bus]
                                        (async/put! evt-bus [:commit! (:cid unit) (:id unit) @commit])
                                        (u/route! evt-bus :unit (:cid unit) (:id unit)))])]))

(defn check-in-views
  [{:keys [location]} data {:keys [page commit]}]
  (let [unit (apply u/get-unit data (second location))
        rsc-types (u/get-resources data)]
    (case page
      :resources [(check-in-rscs-nav unit)
                  (om/build check-in-rscs-view (-> commit :data :resources))]
      :commit    [(check-in-commit-nav unit commit)
                  (om/build check-in-commit-view commit)])))
