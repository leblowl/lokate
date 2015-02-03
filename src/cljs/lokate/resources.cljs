(ns lokate.resources
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn update-rsc [rsc k v]
  (om/transact! rsc [] (fn [m] (assoc m k v)) :resource))

(defn rscs-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (c/title-return-banner "resources" #(u/route! % :home))
       [(om/build c/btn ["icon-flow-tree rsc-btn"
                         #(async/put! % [:add-resource "block"])])
        (om/build c/btn ["icon-flow-line rsc-btn"
                         #(async/put! % [:add-resource])])]])))

(defn rscs-drawer-view
  [[view-data resources] owner]
  (om/component
    (html [:div.info
           (c/r-item-list
             {:action #(om/update! view-data :selected (:id %))
              :remove-action (fn [x evt-bus]
                               (async/put! evt-bus [:delete-resource (:id x)]))}
             resources)])))

(defn rsc-nav-view
  [[drawer state] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (c/title-return-banner "resources" #(om/transact! state
                                             (fn [m] (dissoc m :selected))))])))

(defn rsc-drawer-view
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

(defn rsc-block-drawer-view
  [[rsc-block rscs] owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(c/display-input
                          "Resource block name"
                          "Untitled resource block"
                          (:title rsc-block)
                          (partial update-rsc rsc-block :title))}
            [:span.editable-title
             {:data-ph "Untitled Resource Block"}
             (:title rsc-block)]]
           [:div.info-content
            (c/select-list
              {:id "unit-edit-rscs"
               :class "border-select-"
               :action #(.log js/console "hey")}
              rscs)]])))

(defn resources-views [{:keys [drawer]} data {:keys [selected] :as state}]
  (if selected
    (let [rsc (u/get-resource data selected)]
      (if (= (:type rsc) "block")
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-block-drawer-view [(u/get-resource data selected)
                                          (->> data
                                               u/get-resources
                                               vals
                                               (sort-by :timestamp))])]
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-drawer-view (u/get-resource data selected))]))
    [(om/build rscs-nav-view drawer)
     (om/build rscs-drawer-view [state (->> data
                                            u/get-resources
                                            vals
                                            (sort-by :timestamp))])]))
