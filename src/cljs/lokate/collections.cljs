(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.unit :as unit]))

(def collection-tip
  [:p.collection-tip-msg
   "Right click or long press on the map to add a unit to your collection!"])

(defn collection-nav-view
  [[drawer collection] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["collection"
                                 #(async/put! (:event-bus (om/get-shared owner))
                                    [:set-path :app :collections])])])))

(defn collection-drawer-view
  [collection owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:ref "editable"
             :on-click (fn []
                         (c/display-input
                           "Collection name"
                           "Untitled collection"
                           (:title collection)
                           (fn [res]
                             (om/transact! collection #(assoc % :title res)))))}
            [:span.editable-title
             {:data-ph "Collection Name"} (:title collection)]]
           [:div.info-content
            (if (empty? (:units collection))
              (c/tip collection-tip)
              (om/build c/link-list (vals (:units collection))
                {:opts {:class "btn-"
                        :name-default "Untitled_Unit"
                        :action #(async/put! (:event-bus (om/get-shared owner))
                                   [:set-path :app :unit (:cid %) (:id %)])
                        :keyfn #(-> % :title (str/upper-case))}}))]])))

(defn add-collection-btn
  [owner]
  (om/build c/cdiv
    {:id "nav-add-btn"
    :class "btn icon-plus"
    :on-click #(async/put! (:event-bus (om/get-shared owner))
                 [:add-collection])}))

(defn collections-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner
         ["collections"
          #(async/put! (:event-bus (om/get-shared owner))
             [:set-path :app :home])])
       [(add-collection-btn owner)]])))

(defn collections-drawer-view
  [collections owner]
  (om/component
    (html [:div#collections
           (om/build c/link-list
             (vals collections)
             {:opts {:class "btn-"
                     :name-default "Untitled_Collection"
                     :action #(async/put! (:event-bus (om/get-shared owner))
                                [:set-path :app :collection (:id %)])
                     :keyfn #(-> % :title (str/upper-case))}})])))

(defn collections-views [drawer collections]
  [(om/build collections-nav-view drawer)
   (om/build collections-drawer-view collections)])

(defn collection-views [drawer collection]
  [(om/build collection-nav-view [drawer collection])
   (om/build collection-drawer-view collection)])
