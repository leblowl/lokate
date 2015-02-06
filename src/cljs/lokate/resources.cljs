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

(defn get-rsc-view-data [rsc]
  (if (= (:type rsc) "block")
    {:icon "icon-flow-tree"
     :title (or (u/blankf (:title rsc)) "Untitled_Resource_Block")}
    {:icon "icon-flow-line"
     :title (or (u/blankf (:title rsc)) "Untitled_Resource")}))

(defn rscs-drawer-view
  [[view-data rscs] owner]
  (let [rscs* (map #(->> % get-rsc-view-data (merge %)) rscs)]
    (om/component
      (html [:div#resources.flex-col.frame
             (c/r-item-list
               {:action #(om/update! view-data :selected (:id %))
                :icon-class "icon-flow-line item-icon"
                :remove-action (fn [x evt-bus]
                                 (async/put! evt-bus [:delete-resource (:id x)]))}
               rscs*)]))))

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

(defn toggle-rsc [rsc-block rsc evt-bus]
  (om/transact! rsc-block [:resources]
    (if (:active rsc)
      #(dissoc % (:id rsc))
      #(assoc % (:id rsc) rsc)) :resource))

(defn rsc-block-drawer-view
  [[rsc-block rscs] owner]
  (let [active? #(contains? (:resources rsc-block) (:id %))
        rscs* (map #(assoc % :active (active? %)) rscs)]
    (om/component
      (html [:div.flex-col.frame
             (c/title1 (:title rsc-block) "Untitled Resource Block")
             [:div.top-div
              (c/select-list
                {:id "unit-edit-rscs"
                 :class "border-select-"
                 :action (fn [x evt-bus]
                           (async/put! evt-bus
                             [:update-resource-block (:id rsc-block) x]))
                 :placeholder "Untitled_Resource"}
                rscs*)]]))))

(defn resources-views [{:keys [drawer]} data {:keys [selected] :as state}]
  (let [rscs (u/get-resources data)]
    (if-let [rsc (get rscs selected)]
      (if (= (:type rsc) "block")
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-block-drawer-view [rsc
                                          (->> (dissoc rscs (:id rsc))
                                               vals
                                               (filter (comp not :type))
                                               (sort-by :timestamp))])]
        [(om/build rsc-nav-view [drawer state])
         (om/build rsc-drawer-view rsc)])
     [(om/build rscs-nav-view drawer)
      (om/build rscs-drawer-view [state (->> rscs
                                             vals
                                             (sort-by :timestamp))])])))
