(ns lokate.collections
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn new-place [id]
  {:name nil
   :hives {}
   :id id})

(defn add-place [data]
  (let [id (count (:places @data))]
    (om/transact! data :places #(conj % (new-place id)))
    (om/update! data :active-place [:places id])
    ;(db-add (get-in @data (:active-place @data)))
    ))

(defn add-collection-btn [collections owner]
  (om/component
    (dom/a #js {:href "/collections/new"}
      (dom/div #js {:id "nav-add-btn"
                   :className "icon-plus"}))))

(defn collections-view [collections owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "collections"}
        (om/build parts/select-list collections {:opts {:default "Untitled_Collection"}})))))

(defn render [app-state]
  (om/root collections-view (:places app-state) {:target (.getElementById js/document "drawer")}))
