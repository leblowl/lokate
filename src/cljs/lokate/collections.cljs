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
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(edit-collection-name collection)}
            [:span.editable-title
             {:data-ph "Collection Name"} (:title collection)]]
           [:div.info-content
            (if (empty? (:units collection))
              (c/tip collection-tip)
              (c/r-item-list
                {:action (fn [x evt-bus]
                           (u/route! evt-bus :unit (:cid x) (:id x)))
                 :remove-action (fn [x evt-bus]
                                  (om/transact! collection :units
                                    #(dissoc % (:id x)) :unit))
                 :name-default "Untitled_Unit"}
                (vals (:units collection))))]])))

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
    (html [:div.info
           (c/r-item-list
             {:action (fn [x evt-bus] (u/route! evt-bus :collection (:id x)))
              :remove-action (fn [x evt-bus]
                               (async/put! evt-bus [:delete-collection (:id x)]))
              :name-default "Untitled_Collection"}
             (vals collections))])))

(defn collections-views [{:keys [drawer]} data state]
  (let [collections (u/get-collections data)]
    [(om/build collections-nav-view drawer)
     (om/build collections-drawer-view collections)]))

(defn collection-views [{:keys [location drawer]} data state]
  (let [collection (apply u/get-collection data (second location))]
    [(om/build collection-nav-view [drawer collection])
     (om/build collection-drawer-view collection)]))
