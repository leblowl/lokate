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

(defn check-in-btn [unit]
  (om/build c/btn ["icon-system-update-tv"
                   #(u/route! % :check-in (:cid unit) (:id unit))]))

(defn edit-resources-btn [unit]
  (om/build c/btn ["icon-settings"
                   #(async/put! % [:window :set :page :edit])]))

(defn unit-nav-menu
  [[page unit] owner]
  (om/component
    (om/build c/dropdown-select-list
      [{:title "unit :info"
        :page :info
        :active (= :info page)}
       {:title "unit :resources"
        :page :resources
        :active (= :resources page)}]
      {:opts {:id "page-select"
              :class "title-select-"
              :action (fn [x evt-bus]
                        (async/put! evt-bus
                          [:window :set :page (:page x)]))}})))

(defn unit-nav-view
  [[drawer page unit controls] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/return-banner [(om/build unit-nav-menu [page unit])
                                  #(u/route! % :collection (:cid unit))])
       controls])))

(defn unit-info-view
  [unit owner]
  (om/component
    (html [:div#unit-info.info
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

           [:div.info-content
            [:div.origin
             (format-timestamp (:timestamp unit))]
            [:div.location
             [:span
              {:class "img icon-pin status"
               :style #js {:color (get u/status-colors "green")}}]
             [:span.location-lat-lng
              (format-latlng (:latlng unit))]]]])))

(defn unit-resource
  [[props resource] owner]
  (om/component
    (html [:div.unit-resource
           [:span.unit-resource-title (:title resource)]
           [:div.unit-resource-count-box
            [:span.unit-resource-count (:count resource)]]])))

(defn unit-resources-view
  [unit owner]
  (om/component
    (om/build c/simple-list
      [{:item-comp unit-resource}
       (vals (:resources unit))])))

(defn update-unit-rscs [unit x evt-bus]
  (if (:active x)
    (update-unit unit :resources
      #(dissoc % (:id x)))
    (update-unit unit :resources
      #(assoc % (:id x)
         (merge (select-keys x [:id :title])
           {:count 0})))))

(defn unit-edit-view
  [[rsc-types unit] owner]
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
      (let [resources (map #(assoc % :active (contains? (:resources unit) (:id %)))
                        (vals rsc-types))]
        (c/select-list
          {:class "border-select-"
           :action (partial update-unit-rscs unit)}
          resources)))))

(defn unit-views
  [{:keys [drawer location]} data {:keys [page]}]
  (let [unit (apply u/get-unit data (second location))
        rsc-types (u/get-resource-types data)]
    (case page
      :info      [(om/build unit-nav-view
                    [drawer page unit [(check-in-btn unit)]])
                  (om/build unit-info-view unit)]

      :resources [(om/build unit-nav-view
                    [drawer page unit [(check-in-btn unit)
                                       (edit-resources-btn unit)]])
                  (om/build unit-resources-view unit)]

      :edit      [(om/build c/simple-nav-panel
                    [(c/done!-btn
                       #(async/put! % [:window :set :page :resources]))])
                  (om/build unit-edit-view [rsc-types unit])])))
