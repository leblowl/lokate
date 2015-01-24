(ns lokate.unit
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn format-timestamp [timestamp]
  (str "Created: "
    (-> timestamp
      (js/Date.)
      (.toJSON)
      (.slice 0 10))))

(defn format-latlng [latlng]
  (apply u/format "Location: %1.2f %2.2f" latlng))

(defn set-unit [unit k v]
  (om/transact! unit [] (fn [m] (assoc m k v)) :unit))

(defn update-unit [unit k fun]
  (om/transact! unit [] (fn [m] (update-in m [k] fun)) :unit))

(defn check-in-btn
  [unit owner]
  (om/component
    (html [:div
           {:id "check-in-btn"
            :class "btn icon-in-alt"
            :on-click #(async/put! (:event-bus (om/get-shared owner))
                         [:set-path :check-in (:cid unit) (:id unit)])}])))

(defn edit-resources-btn
  [unit owner]
  (om/component
    (html [:div
           {:id "configure-resources-btn"
            :class "btn icon-settings"
            :on-click #(async/put! (:event-bus (om/get-shared owner))
                         [:set-path :unit (:cid unit) (:id unit) :edit])}])))

(defn unit-nav-menu
  [[path unit] owner]
  (om/component
    (om/build c/dropdown-select-list [{:title "unit :info"
                                       :path :info
                                       :active (= :info path)}
                                      {:title "unit :resources"
                                       :path :resources
                                       :active (= :resources path)}]
      {:opts {:id "page-select"
              :action (fn [x evt-bus]
                        (async/put! evt-bus
                          [:set-path :unit (:cid unit) (:id unit) (:path x)]))}})))

(defn unit-nav-view
  [[drawer path unit controls] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/banner [(om/build unit-nav-menu [path unit])
                           (fn [evt-bus]
                             (async/put! evt-bus
                               [:set-path :collection (:cid unit)]))])
       controls])))

(defn unit-info-view
  [unit owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click (fn []
                         (c/display-input
                           "Collection name"
                           "Untitled collection"
                           (:title unit)
                           #(set-unit unit :title %)))}
            [:span.editable-title
             {:data-ph "Unit Name"}
             (:title unit)]]

           [:div#point-content.info-content
            [:div.origin
             (format-timestamp (:timestamp unit))]
            [:div.location
             [:span
              {:class "img icon-pin status"
               :style #js {:color (get u/status-colors "green")}}]
             [:span.location-lat-lng
              (format-latlng (:latlng unit))]]]])))

(defn unit-resource
  [resource owner]
  (om/component
    (html [:div.unit-resource
           [:span.unit-resource-title (:title resource)]
           [:div.unit-resource-count-box
            [:span.unit-resource-count (:count resource)]]])))

(defn unit-resources-view
  [unit owner]
  (om/component
    (om/build c/simple-list (vals (:resources unit))
      {:opts {:item-comp unit-resource
              :keyfn #(-> % :name (str/upper-case))}})))

(defn toggle-drawer-maximized [owner]
  (async/put! (:event-bus (om/get-shared owner))
    [:toggle-drawer :maximized]))

(defn unit-edit-view
  [[rsc-types unit] owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (toggle-drawer-maximized owner))

    om/IWillUnmount
    (will-unmount [_]
      (toggle-drawer-maximized owner))

    om/IRender
    (render [_]
      (let [resources (map #(assoc % :active (contains? (:resources unit) (:id %)))
                        (vals rsc-types))]
        (om/build c/select-list resources
          {:opts {:class "btn-"
                  :action (fn [x evt-bus]
                            (if (:active x)
                              (update-unit unit :resources
                                #(dissoc % (:id x)))
                              (update-unit unit :resources
                                #(assoc % (:id x)
                                   (merge x {:count 0})))))
                  :keyfn #(-> % :title (str/upper-case))}})))))

(defn unit-views
  [drawer path unit rsc-types]
  (case path
    :info      [(om/build unit-nav-view
                  [drawer path unit [(om/build check-in-btn unit)]])
                (om/build unit-info-view unit)]

    :resources [(om/build unit-nav-view
                  [drawer path unit [(om/build edit-resources-btn unit)
                                     (om/build check-in-btn unit)]])
                (om/build unit-resources-view unit)]

    ;; need nav panel css
    :edit      [(om/build c/simple-nav-panel
                  [(om/build c/done!-btn
                     (fn [evt-bus]
                       (async/put! evt-bus
                         [:set-path :unit (:cid unit) (:id unit) :resources])))])
                (om/build unit-edit-view [rsc-types unit])]))
