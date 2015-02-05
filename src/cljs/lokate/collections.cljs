(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(def collection-tip
  [:p.collection-tip-msg
   "Right click or long press on the map to add a unit to your collection!"])

(defn collection-banner []
  (c/title-return-banner "collection" #(u/route! % :collections)))

(defn collection-nav-view
  [[drawer collection] owner]
  (om/component
    (om/build c/drawer-nav-panel [drawer (collection-banner)])))

(defn edit-collection-name [collection]
  (c/display-input
    "Collection name"
    "Untitled collection"
    (:title collection)
    #(om/update! collection :title % :collection)))

(defn collection-drawer-view
  [collection owner]
  (om/component
    (html [:div.flex-col.frame
           (c/title1 (:title collection)
                     "Collection Name"
                     #(edit-collection-name collection))
           [:div.top-div
            (if (empty? (:units collection))
              (c/tip collection-tip)
              (c/r-item-list
                {:action (fn [x evt-bus]
                           (u/route! evt-bus :unit (:cid x) (:id x)))
                 :remove-action (fn [x evt-bus]
                                  (om/transact! collection []
                                    #(update-in % [:units]
                                       dissoc (:id x)) :collection))
                 :name-default "Untitled_Unit"}
                (->> collection
                     :units
                     vals
                     (sort-by :timestamp))))]])))

(defn collections-banner []
  (c/title-return-banner "collections" #(u/route! % :home)))

(defn add-collection-btn []
  (om/build c/btn ["icon-add" #(async/put! % [:add-collection])]))

(defn collections-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer (collections-banner) [(add-collection-btn)]])))

(defn collections-drawer-view
  [collections owner]
  (om/component
    (html [:div.flex-col.frame
           (c/r-item-list
             {:action (fn [x evt-bus] (u/route! evt-bus :collection (:id x)))
              :remove-action (fn [x evt-bus]
                               (async/put! evt-bus [:delete-collection (:id x)]))
              :name-default "Untitled_Collection"}
             collections)])))

(defn collections-views [{:keys [drawer]} data state]
  (let [collections (->> data
                         u/get-collections
                         vals
                         (sort-by :timestamp))]
    [(om/build collections-nav-view drawer)
     (om/build collections-drawer-view collections)]))

(defn collection-views [{:keys [location drawer]} data state]
  (let [collection (apply u/get-collection data (second location))]
    [(om/build collection-nav-view [drawer collection])
     (om/build collection-drawer-view collection)]))
