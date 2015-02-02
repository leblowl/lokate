(ns lokate.resources
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn update-rsc [rsc k v]
  (om/transact! rsc [] (fn [m] (assoc m k v)) :resource))

(defn rsc-types-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (c/title-return-banner "resources" #(u/route! % :home))
       [(om/build c/btn ["icon-flow-tree rsc-btn"
                         #(async/put! % [:add-resource-cluster])])
        (om/build c/btn ["icon-flow-line rsc-btn"
                         #(async/put! % [:add-resource])])]])))

(defn rsc-types-drawer-view
  [[view-data resources] owner]
  (om/component
    (html [:div.info
           (c/r-item-list
             {:action #(om/update! view-data :selected (:id %))
              :remove-action (fn [x evt-bus]
                               (async/put! evt-bus [:delete-resource (:id x)]))}
             resources)])))

(defn rsc-type-nav-view
  [[drawer state] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (c/title-return-banner "resources" #(om/transact! state
                                             (fn [m] (dissoc m :selected))))])))

(defn rsc-type-drawer-view
  [resource owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(c/display-input
                          "Resource name"
                          "Untitled resource"
                          (:title resource)
                          (partial update-rsc resource :title))}
            [:span.editable-title
             {:data-ph "Untitled Resource"}
             (:title resource)]]
           [:div.info-content]])))

(defn resource-types-views [{:keys [drawer]} data {:keys [selected] :as state}]
  (if selected
    [(om/build rsc-type-nav-view [drawer state])
     (om/build rsc-type-drawer-view (u/get-resource-type data selected))]
    [(om/build rsc-types-nav-view drawer)
     (om/build rsc-types-drawer-view [state (->> data
                                                 u/get-resource-types
                                                 vals
                                                 (sort-by :timestamp))])]))
