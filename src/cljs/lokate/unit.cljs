(ns lokate.unit
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn format-latlng [latlng]
  (str
    "Lat: "  (u/format "%.2f" (:lat latlng))
    " Lng: " (u/format "%.2f" (:lng latlng))))

(defn unit-nav
  [[unit-data] owner]
  (om/component
    (om/build c/dropdown-select-list [{:name "unit :info"
                                       :path :info
                                       :active (= :info (:path unit-data))}
                                      {:name "unit :resources"
                                       :path :resources
                                       :active (= :resources (:path unit-data))}]
      {:opts {:id "page-select"
              :action #(async/put! (:event-bus (om/get-shared owner))
                         [:set-unit-path (:path %)])}})))

(defn check-in-btn
  [owner]
  [:div
   {:id "check-in-btn"
    :className "btn icon-in-alt"
    :onClick #(async/put! (:event-bus (om/get-shared owner))
                [:check-in])}])

(defn configure-resources-btn
  [owner]
  [:div
   {:id "configure-resources-btn"
    :className "btn icon-settings"
    :onClick #(async/put! (:event-bus (om/get-shared owner))
                [:configure-resources])}])

(defn unit-nav-view
  [[data unit-data unit] owner]
  (om/build c/drawer-nav-panel
    [(-> data :view :drawer)
     (om/build c/banner [(om/build unit-nav unit-data)
                         (fn [] (om/transact! unit #(dissoc % :selected)))])
     (case (:path unit-data)
       :info      [(check-in-btn owner)]
       :resources [(configure-resources-btn owner)
                   (check-in-btn owner)])]))

(defn unit-view
  [[unit-view-data unit] owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(async/put! (:event-bus (om/get-shared owner))
                          [:edit-unit-title])}
            [:span.editable-title
             {:data-ph "Unit Name"}
             (:title unit)]]

           [:div#point-content.info-content
            [:div.origin (:timestamp unit)]
            [:div.location
             [:span
              {:class "img icon-pin status"
               :style #js {:color (get u/status-colors "green")}}]
             [:span.location-lat-lng
              (format-latlng (:latlng unit))]]]])))

(defn unit-resource
  [resource owner]
  (om/component
    (html [:div.unit-resources
           [:span.unit-resource-type (:type resource)]
           [:div.unit-resource-count-box
            [:span.unit-resource-count (:count resource)]]])))

(defn unit-resources
  [[unit] owner]
  (om/component
    (html
      (om/build c/simple-list (vals (:resources unit))
        {:opts {:item-comp unit-resource
                :keyfn #(-> % :name (str/upper-case))}}))))

(defn unit-resources-config-controls
  [[resources] owner]
  (om/component
    (html (c/done!-btn #(async/put! (:event-bus (om/get-shared owner))
                          [:return-to-resources])))))

(defn unit-resources-config
  [[resource-types unit-resources] owner]
  (om/component
    (let [resources (map #(assoc % :active (contains? unit-resources (:id %)))
                      (vals resource-types))]
      (om/build c/select-list (vals unit-resources)
        {:opts {:class "btn-"
                :action (fn [rsc-type] (async/put! (:event-bus (om/get-shared owner))
                                         [:update-unit :resources rsc-type]))
                :keyfn #(-> % :title (str/upper-case))}}))))
