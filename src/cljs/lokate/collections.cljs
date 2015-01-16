(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(def add-collection-btn
  [:div#nav-add-btn.btn
   {:class "btn icon-plus"
    :on-click #()}])

(defn collections-nav-view
  [data owner]
  (om/component
    (om/build c/drawer-nav-panel
      [(u/get-view-attr data :drawer :open?)
       (u/get-view-attr data :drawer :maximized?)
       (om/build c/title-banner "collections")
       [add-collection-btn]])))

(defn collections-view
  [collections owner]
  (om/component
    [:div#collections
     (om/build c/link-list
       (vals collections)
       {:opts {:class "btn-"
               :name-default "Untitled_Collection"
               :action #(assoc % :selected true)
               :keyfn #(-> % :name (str/upper-case))}})]))

(def add-unit-btn
  [:div#add-point-btn
   {:class "btn icon-pin"
    :onClick #()}])

(def collection-tip
  [:p.collection-tip-msg
   "Click "
   [:span {:class "img icon-pin"}]
   " or "
   [:span {:class "gplus-img img icon-googleplus"}]
   " to add a unit or unit sector to your collection!"])

(defn collection-nav-view
  [data owner]
  (om/component
    (om/build c/drawer-nav-panel
      [(u/get-view-attr data :drawer :open?)
       (u/get-view-attr data :drawer :maximized?)
       (om/build c/title-banner "collections" #())
       [add-collection-btn]])))

(defn collection-view
  [collection owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(u/render-input-overlay
                          "Collection name"
                          "Untitled collection"
                          (:name collection)
                          (fn [coll] (assoc collection :title coll)))}
            [:span.editable-title
             {:data-ph "Collection Name"} (:title collection)]
            [:div #js {:className "info-content"}
             (if (empty? (:units collection))
               (c/tip collection-tip)
               (om/build c/link-list (vals (:units collection))
                 {:opts {:class "btn-"
                         :name-default "Untitled_Unit"
                         :action #(assoc % :selected true)
                         :keyfn #(-> % :name (str/upper-case))}}))]]])))
