(ns lokate.point
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :refer [input select-list]]
            [lokate.util :refer [display display-fade-in fdate-now floormat distance]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (:lat lat-lng)
             "lng=" (:lng lat-lng))))


(defn display-pos [hive]
  (let [pos (:pos hive)]
    (if pos
      (str
        "Lat: " (floormat "%.2f" (:lat pos))
        " Lng: " (floormat "%.2f" (:lng pos)))
      "Lat: ? Lng: ?")))

(defn display-origin [hive]
  (str "Originated: " (:origin hive)))

(defn point-view
  [data owner {:keys [collection-id id] :as opts}]
  (om/component
    (let [point (get-in data [:collections collection-id id])]
      (dom/div #js {:id "collection-info"}
        (dom/span #js {:id "name-editable"
                       :className "name ethief tditable single-line"
                       :onClick #(.log js/console "hey")
                       :data-ph "Name"
                       :dangerouslySetInnerHTML #js {:__html (:name point)}})
        (dom/div #js {:className "origin"}
          (display-origin point))
        (dom/div #js {:className "location"}
          (display-pos point))
        (dom/div #js {:id "notes-editable"
                      :className "notes editable"
                      :onClick #(.log js/console "yo")
                      :data-ph "Notes..."
                      :dangerouslySetInnerHTML #js {:__html (:notes point)}})))))
