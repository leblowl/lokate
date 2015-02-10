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

(defn unit-nav-menu [page unit]
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
                        [:window :set :page (:page x)]))}}))

(defn unit-nav-view [drawer page unit controls]
  (om/build c/drawer-nav-panel
    [drawer
     (om/build c/return-banner [(unit-nav-menu page unit)
                                #(u/route! % :collection (:cid unit))])
     controls]))

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
    (when-let [msg (u/blankf (:message last-commit))]
      [:div.last-commit-msg [:span.hilight "> "] msg])]])

(defn unit-info-view [unit last-commit]
  [:div.flex-col
   (c/title1 (:title unit)
     "Unit Name"
     #(edit-unit-name unit))
   (origin (:timestamp unit))
   (location (:latlng unit) (:status unit))
   (when last-commit (last-check-in last-commit))])

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

(defn unit-resources-view [unit rscs]
  (let [resources (->> unit :resources vals (sort-by :timestamp))]
    (om/build c/simple-list [{:id "unit-rscs"
                              :item-comp unit-resource
                              :placeholder "Untitled_Resource"}
                             resources])))

(defn unit-rsc [rsc]
  (-> rsc (dissoc :active) (merge {:count 0})))

(defn update-unit-rsc [unit rsc active?]
  (update-unit unit :resources
    (if active?
      #(dissoc % (:id rsc))
      #(if-not (contains? % (:id rsc))
         (assoc % (:id rsc) (unit-rsc rsc))
         %))))

(defn rsc-block
  [[{:keys [action]} block] owner]
  (om/component
    (html [:div {:class (str (when (:active block) "active ")
                             "border-block frame2 clickable")
                 :on-click (fn [] (dorun (map #(action % (:active block))
                                           (vals (:resources block)))))}
           [:div.block-title.txt-wrap.clickable
            [:span.item-title (-> block :title u/blankf (or "Untitled_Resource_Block"))]]
           (c/select-list {:class (str (when (:active block) "active ")
                                    "border-select-")
                           :action (fn [x evt-bus] (action x (:active x)))
                           :placeholder "Untitled_Resource"}
             (->> block :resources vals (sort-by :timestamp)))])))

(defn selectable-rsc
  [[{:keys [class action]} rsc] owner]
  (om/component
    (if (= (:type rsc) "block")
      (om/build rsc-block [{:action action} rsc])
      (om/build c/item [{:class (str (when (:active rsc) "active ") class)
                         :action (fn [x evt-bus] (action x (:active x)))
                         :placeholder "Untitled_Resource"}
                        rsc]))))

(defn filter-dups [resources]
  (->> resources
       vals
       (map (comp keys :resources))
       flatten
       (remove nil?)
       (apply dissoc resources)))

(defn block? [rsc]
  (= (:type rsc) "block"))

(defn filter-empty-blocks [resources]
  (filter #(or
             (not (block? %))
             (and (block? %) (not (empty? (:resources %)))))
    resources))

(defn contains-all? [coll keys]
  (not-any? false? (map #(contains? coll %) keys)))

(defn active? [unit-rscs rsc]
  (if (= (:type rsc) "block")
    (->> rsc :resources keys (contains-all? unit-rscs))
    (contains? unit-rscs (:id rsc))))

(defn activate-rsc [unit-rscs rsc]
  (let [activate #(assoc % :active (active? unit-rscs %))
        rsc (activate rsc)]
    (if (= (:type rsc) "block")
      (update-in rsc [:resources] #(u/mmap activate %))
      rsc)))

(defn activate-rscs [unit-rscs resources]
  (map (partial activate-rsc unit-rscs) resources))

(defn unit-edit-view
  [[unit rscs] owner]
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
      (let [resources (->> rscs
                           filter-dups
                           vals
                           filter-empty-blocks
                           (sort-by :timestamp)
                           (activate-rscs (:resources unit)))]
        (om/build c/simple-list [{:id "unit-edit-rscs"
                                  :class "border-select-"
                                  :item-comp selectable-rsc
                                  :action #(update-unit-rsc unit %1 %2)}
                                 resources])))))

(defn unit-views
  [{:keys [drawer location]} data {:keys [page]}]
  (let [unit    (apply u/get-unit data (second location))
        rscs    (u/get-resources data)
        history (u/get-unit-history data (:id unit))]
    (case page
      :info      [(unit-nav-view drawer page unit [(check-in-btn unit)])
                  (unit-info-view unit (peek history))]

      :resources [(unit-nav-view drawer page unit [(check-in-btn unit)
                                                   (edit-resources-btn unit)])
                  (unit-resources-view unit rscs)]

      :edit      [(om/build c/simple-nav-panel
                    [(c/done!-btn
                       #(async/put! % [:window :set :page :resources]))])
                  (om/build unit-edit-view [unit rscs])])))
