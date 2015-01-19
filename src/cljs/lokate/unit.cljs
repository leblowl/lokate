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

(defn unit-nav-menu
  [path owner]
  (om/component
    (om/build c/dropdown-select-list [{:name "unit :info"
                                       :path :info
                                       :active (= :info path)}
                                      {:name "unit :resources"
                                       :path :resources
                                       :active (= :resources path)}]
      {:opts {:id "page-select"
              :action #(async/put! (:event-bus (om/get-shared owner))
                         [:set-path :unit (:path %)])}})))

(defn unit-info-view
  [unit owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(async/put! (:event-bus (om/get-shared owner))
                          [:edit-unit-title])}
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
    (html [:div.unit-resources
           [:span.unit-resource-type (:type resource)]
           [:div.unit-resource-count-box
            [:span.unit-resource-count (:count resource)]]])))

(defn unit-resources-view
  [unit owner]
  (om/component
    (html
      (om/build c/simple-list (vals (:resources unit))
        {:opts {:item-comp unit-resource
                :keyfn #(-> % :name (str/upper-case))}}))))

(defn unit-resources-edit-nav-view
  [[resources] owner]
  (om/component
    (html (c/done!-btn #(async/put! (:event-bus (om/get-shared owner))
                          [:return-to-resources])))))

(defn unit-resources-edit-view
  [[resource-types unit-resources] owner]
  (om/component
    (let [resources (map #(assoc % :active (contains? unit-resources (:id %)))
                      (vals resource-types))]
      (om/build c/select-list (vals unit-resources)
        {:opts {:class "btn-"
                :action (fn [rsc-type] (async/put! (:event-bus (om/get-shared owner))
                                         [:update-unit :resources rsc-type]))
                :keyfn #(-> % :title (str/upper-case))}}))))

(defn unit-nav-view
  [[drawer path unit] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/banner [(om/build unit-nav-menu path)
                           #(async/put! (:event-bus (om/get-shared owner))
                              [:set-path :app :collection (:cid unit)])])
       (case path
         :info      [(check-in-btn owner)]
         :resources [(configure-resources-btn owner)
                     (check-in-btn owner)])])))

(defn unit-view
  [path unit]
  (case path
    :info      (om/build unit-info-view unit)
    :resources (om/build unit-resources-view unit)))

(defn unit-views
  [drawer path unit]
  [(om/build unit-nav-view [drawer path unit])
   (unit-view path unit)])
