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
    (html [:div#resources.flex-col.frame
           (c/r-item-list
             {:action #(om/update! view-data :selected (:id %))
              :icon-class "icon-flow-line item-icon"
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
    (html [:div.frame
           (c/title1 (:title resource) "Untitled Resource")
           [:div.top-div]])))

(defn rsc-block-drawer-view
  [[rsc-block rscs] owner]
  (let [active? #(contains? (:resources rsc-block) (:id %))
        rscs* (map #(assoc % :active (active? %)) rscs)]
    (om/component
      (html [:div.flex-col.frame
             (c/title1 (:title rsc-block)
                       "Untitled Resource Block")
             [:div.top-div
              (c/select-list
                {:id "unit-edit-rscs"
                 :class "border-select-"
                 :action (fn [x evt-bus]
                           (om/transact! rsc-block [:resources]
                             (if (:active x)
                               #(dissoc % (:id x))
                               #(assoc % (:id x) x)) :resource))}
                rscs*)]]))))

(defn resources-views [{:keys [drawer]} data {:keys [selected] :as state}]
  (let [rscs (u/get-resources data)]
    (if-let [rsc (get rscs selected)]
      (if (= (:type rsc) "block")
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-block-drawer-view [rsc
                                          (->> (dissoc rscs (:id rsc))
                                               vals
                                               (sort-by :timestamp))])]
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-drawer-view rsc)])
     [(om/build rscs-nav-view drawer)
      (om/build rscs-drawer-view [state (->> rscs
                                             vals
                                             (sort-by :timestamp))])])))
