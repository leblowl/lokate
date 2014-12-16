(ns lokate.point
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :refer [select-list edit begin-edit]]
            [lokate.util :refer [display display-fade-in fdate-now floormat distance]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (:lat lat-lng)
             "lng=" (:lng lat-lng))))

(defn display-pos [point]
  (let [pos (:pos point)]
    (if-not (empty? pos)
      (str
        "Lat: " (floormat "%.2f" (:lat pos))
        " Lng: " (floormat "%.2f" (:lng pos)))
      "Lat: ? Lng: ?")))

(defn display-origin [point]
  (str "Originated: " (:origin point)))

(defn point-view
  [data owner {:keys [collection-id point-id] :as opts}]
  (om/component
    (let [point (get-in data [:collections collection-id :points point-id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(begin-edit point)}
          (dom/span #js {:className "editable-title"
                         :data-ph "Point Name"
                         :dangerouslySetInnerHTML #js {:__html (:name point)}}))
        (dom/div #js {:className "info-content"}
          (dom/div #js {:className "origin"}
            (display-origin point))
          (dom/div #js {:className "location"}
            (display-pos point)))))))

(defn notes-save []
  (dom/div #js {:id "notes-editable"
                :className "notes editable"
                :onClick #(.log js/console "yo")
                :data-ph "Notes..."
                :dangerouslySetInnerHTML #js {:__html (:notes ;point
                                                       )}}))
