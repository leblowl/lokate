(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.unit :as unit]))

(defn update-collection [collection k v]
  (om/transact! collection [] #(assoc % k v) :collection))

(def collection-tip
  [:p.collection-tip-msg
   "Right click or long press on the map to add a unit to your collection!"])

(defn collection-banner []
  (om/build c/return-title-banner ["collection" #(async/put! % [:set-path :collections])]))

(defn collection-nav-view
  [[drawer collection] owner]
  (om/component
    (om/build c/drawer-nav-panel [drawer (collection-banner)])))

(defn edit-collection-name [collection]
  (c/display-input
    "Collection name"
    "Untitled collection"
    (:title collection)
    (partial update-collection collection :title)))

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
                           (async/put! evt-bus
                             [:set-path :unit (:cid x) (:id x) :info]))
                 :name-default "Untitled_Unit"}
                (vals (:units collection))))]])))

(defn collections-banner []
  (om/build c/return-title-banner
    ["collections" #(async/put! % [:set-path :home])]))

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
    (html [:div#collections
           (c/r-item-list
             {:action (fn [x evt-bus]
                        (async/put! evt-bus
                          [:set-path :collection (:id x)]))
              :remove-action (fn [x evt-bus]
                               (async/put! evt-bus
                                 [:delete-collection (:id x)]))
              :name-default "Untitled_Collection"}
             (vals collections))])))

(defn collections-views [drawer collections]
  [(om/build collections-nav-view drawer)
   (om/build collections-drawer-view collections)])

(defn collection-views [drawer collection]
  [(om/build collection-nav-view [drawer collection])
   (om/build collection-drawer-view collection)])
