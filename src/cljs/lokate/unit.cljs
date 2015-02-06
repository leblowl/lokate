(ns lokate.unit
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [cljs-time.coerce :refer [from-long to-local-date-time]]
            [cljs-time.format :as format]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn format-date [timestamp]
  (->> timestamp
    from-long
    to-local-date-time
    (format/unparse (format/formatter "dd/MM/yyyy"))))

(defn format-time [timestamp]
  (->> timestamp
    from-long
    to-local-date-time
    (format/unparse (format/formatter "HH:mm:ss"))))

(defn format-latlng [latlng]
  (apply u/format "%1.2f %2.2f" latlng))

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
       {:title "unit :rscs"
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

(defn edit-unit-name [unit]
  (c/display-input
    "Unit name"
    "Untitled unit"
    (:title unit)
    #(set-unit unit :title %)))

(defn origin [timestamp]
  [:div.origin
   [:span.info-title "Created: "]
   (format-date timestamp)])

(defn location [latlng status]
  [:div.location
   [:span.location-lat-lng
    [:span.info-title "Location: "]
    (format-latlng latlng)]
   [:span
    {:class "img icon-pin status"
     :style #js {:color (get u/status-colors status)}}]])

(defn last-check-in [last-commit]
  [:div.last-check-in
   [:span.info-title "Last check-in: "]
   [:div.last-check-in-data
    [:div.last-commit-time
     [:span.info-title " Authored on "]
     (format-date (:timestamp last-commit))
     [:span.info-title " @ "]
     (format-time (:timestamp last-commit))]
    [:div.last-commit-msg
     [:span.hilight "> "]
     (:message last-commit)]]])

(defn unit-info-view
  [[unit last-commit] owner]
  (om/component
    (html [:div.flex-col.frame
           (c/title1 (:title unit)
                     "Unit Name"
                     #(edit-unit-name unit))
           [:div.top-div
            (origin (:timestamp unit))
            (location (:latlng unit) (:status unit))
            (when last-commit (last-check-in last-commit))]])))

(defn unit-resource
  [[props resource] owner]
  (om/component
    (html [:div.unit-resource
           [:span.unit-resource-title (-> resource
                                          :title
                                          u/blankf
                                          (or (:placeholder props)))]
           [:div.unit-resource-count-box
            [:span.unit-resource-count (:count resource)]]])))

(defn block? [rsc]
  (-> rsc
      :type
      (= "block")))

(defn get-resources [unit-rscs]
  (->> unit-rscs
       (map #(if (block? %) (-> % :resources vals) %))
       flatten
       (remove nil?)))

(defn unit-resources-view
  [[unit rscs] owner]
  (om/component
    (.log js/console (-> unit :resources vals pr-str))
    (let [resources (->> unit :resources vals get-resources (sort-by :timestamp))]
      (.log js/console (pr-str resources))
      (html [:div.flex-col.frame
             (om/build c/simple-list [{:id "unit-rscs"
                                       :item-comp unit-resource
                                       :placeholder "Untitled_Resource"}
                                      resources])]))))

(defn unit-rsc [rsc]
  (-> rsc (dissoc :active) (merge {:count 0})))

(defn update-unit-rsc [unit rsc evt-bus]
  (update-unit unit :resources
    (if (:active rsc)
      #(dissoc % (:id rsc))
      (if (= (:type rsc) "block")
        #(assoc % (:id rsc) (update-in rsc [:resources]
                              (partial u/mmap unit-rsc)))
        #(assoc % (:id rsc) (unit-rsc rsc))))))

(defn unit-edit-view
  [[unit rsc-types] owner]
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
      (let [resources (->> rsc-types
                           vals
                           (sort-by :timestamp)
                           (map #(assoc % :active (contains? (:resources unit) (:id %)))))]
        (html [:div.flex-col.frame
               (c/select-list
                 {:id "unit-edit-rscs"
                  :class "border-select-"
                  :action (partial update-unit-rsc unit)
                  :placeholder "Untitled_Resource"}
                 resources)])))))

(defn unit-views
  [{:keys [drawer location]} data {:keys [page]}]
  (let [unit (apply u/get-unit data (second location))
        rsc-types (u/get-resources data)
        history (u/get-unit-history data (:id unit))]
    (case page
      :info      [(om/build unit-nav-view
                    [drawer page unit [(check-in-btn unit)]])
                  (om/build unit-info-view [unit (peek history)])]

      :resources [(om/build unit-nav-view
                    [drawer page unit [(check-in-btn unit)
                                       (edit-resources-btn unit)]])
                  (om/build unit-resources-view [unit rsc-types])]

      :edit      [(om/build c/simple-nav-panel
                    [(c/done!-btn
                       #(async/put! % [:window :set :page :resources]))])
                  (om/build unit-edit-view [unit rsc-types])])))
