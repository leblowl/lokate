(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.unit :as unit]))

(defn selected? [items]
  (first (filter :selected items)))

(def add-unit-btn
  [:div#add-point-btn
   {:class "btn icon-pin"
    :onClick #()}])

(def collection-tip
  [:p.collection-tip-msg
   "Right click or long press on the map to add a unit to your collection!"])

(defn collection-nav-view
  [[drawer collection] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["collection"
                                 (fn [] (om/transact! collection #(dissoc % :selected)))])])))

(defn collection-drawer-view
  [collection owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:ref "editable"
             :on-click (fn []
                         (.log js/console (om/get-node owner "editable"))
                         (.blur (om/get-node owner "editable"))
                         (c/render-input-overlay
                           "Collection name"
                           "Untitled collection"
                           (:title collection)
                           (fn [title]
                             (om/transact! collection #(assoc % :title title))
                             (om/detach-root (.getElementById js/document "overlay-root")))))}
            [:span.editable-title
             {:data-ph "Collection Name"} (:title collection)]]
           [:div.info-content
            (if (empty? (:units collection))
              (c/tip collection-tip)
              (om/build c/link-list (vals (:units collection))
                {:opts {:class "btn-"
                        :name-default "Untitled_Unit"
                        :action #(assoc % :selected true)
                        :keyfn #(-> % :title (str/upper-case))}}))]])))

(defn add-collection-btn
  [owner]
  (om/build c/cdiv
    {:id "nav-add-btn"
    :class "btn icon-plus"
    :on-click #(async/put! (:event-bus (om/get-shared owner))
                 [:add-collection])}))

(defn collections-nav-view
  [data owner]
  (om/component
    (om/build c/drawer-nav-panel
      [(-> data :view :drawer)
       (om/build c/title-banner
         ["collections"
          #(async/put! (:event-bus (om/get-shared owner))
             [:set-app-path :home])])
       [(add-collection-btn owner)]])))

(defn collections-drawer-view
  [collections owner]
  (om/component
    (html [:div#collections
           (om/build c/link-list
             collections
             {:opts {:class "btn-"
                     :name-default "Untitled_Collection"
                     :action #(om/update! % :selected true)
                     :keyfn #(-> % :title (str/upper-case))}})])))

(defn collections-views [data]
  (let [collections (-> data :model :collections vals)]
    (if-let [collection (selected? collections)]
      (if-let [unit (selected? (-> collection :units vals))]
        (do
          (.log js/console "selected")
          [])
        [(om/build collection-nav-view [(-> data :view :drawer) collection])
         (om/build collection-drawer-view collection)])
      [(om/build collections-nav-view data)
       (om/build collections-drawer-view collections)])))
