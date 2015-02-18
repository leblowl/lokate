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

(defn collection-nav-view [drawer]
  (om/build c/drawer-nav-panel [drawer (collection-banner)]))

(defn edit-collection-name [collection]
  (c/display-input
    "Collection name"
    "Untitled collection"
    (:title collection)
    #(om/update! collection :title % :collection)))

(defn collection-drawer-view [collection]
  [:div.flex-col.full
   (c/title1 (:title collection)
     "Collection Name"
     #(edit-collection-name collection))
   (if (empty? (:units collection))
     (c/tip collection-tip)
     (c/r-item-list {:action (fn [x evt-bus]
                               (u/route! evt-bus :unit (:cid x) (:id x)))
                     :remove-action (fn [x evt-bus]
                                      (om/transact! collection []
                                        #(update-in % [:units]
                                           dissoc (:id x)) :collection))
                     :placeholder "Untitled_Unit"}
       (->> collection :units vals (sort-by :timestamp))))])

(defn collections-banner []
  (c/title-return-banner "collections" #(u/route! % :home)))

(defn add-collection-btn []
  (om/build c/btn ["icon-add" #(async/put! % [:app :add-collection])]))

(defn collections-nav-view [drawer]
  (om/build c/drawer-nav-panel
    [drawer (collections-banner) [(add-collection-btn)]]))

(defn collections-drawer-view [collections]
  (c/r-item-list
    {:action (fn [x evt-bus] (u/route! evt-bus :collection (:id x)))
     :remove-action (fn [x evt-bus]
                      (async/put! evt-bus [:app :delete-collection (:id x)]))
     :placeholder "Untitled_Collection"}
    collections))

(defn collections-views [{:keys [drawer]} data state]
  (let [collections (->> data
                         u/get-collections
                         vals
                         (sort-by :timestamp))]
    [(collections-nav-view drawer)
     (collections-drawer-view collections)]))

(defn collection-views [{:keys [location drawer]} data state]
  (let [collection (apply u/get-collection data (second location))]
    [(collection-nav-view drawer)
     (collection-drawer-view collection)]))
