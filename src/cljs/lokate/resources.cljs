(ns lokate.resources
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn rscs-nav-view [drawer]
  (om/build c/drawer-nav-panel
    [drawer
     (c/title-return-banner "resources" #(u/route! % :home))
     [(om/build c/btn ["icon-flow-tree rsc-btn"
                       #(async/put! % [:add-resource "block"])])
      (om/build c/btn ["icon-flow-line rsc-btn"
                       #(async/put! % [:add-resource])])]]))

(defn get-rsc-view-data [rsc]
  (if (= (:type rsc) "block")
    {:icon "icon-flow-tree"
     :title (or (u/blankf (:title rsc)) "Untitled_Resource_Block")}
    {:icon "icon-flow-line"
     :title (or (u/blankf (:title rsc)) "Untitled_Resource")}))

(defn rscs-drawer-view [view-data rscs]
  (let [rscs (map #(->> % get-rsc-view-data (merge %)) rscs)]
    (c/r-item-list
      {:action #(om/update! view-data :selected (:id %))
       :icon-class "icon-flow-line item-icon"
       :remove-action (fn [x evt-bus]
                        (async/put! evt-bus [:delete-resource (:id x)]))}
      rscs)))

(defn rsc-nav-view [drawer view-data]
  (om/build c/drawer-nav-panel
    [drawer
     (c/title-return-banner "resources" #(om/transact! view-data
                                           (fn [m] (dissoc m :selected))))]))

(defn rsc-drawer-view [resource]
  (c/title1 (:title resource) "Untitled Resource"))

(defn toggle-rsc [rsc-block rsc evt-bus]
  (om/transact! rsc-block [:resources]
    (if (:active rsc)
      #(dissoc % (:id rsc))
      #(assoc % (:id rsc) rsc)) :resource))

(defn toggle-rsc [rscs rsc]
  (if (:active rsc)
    (dissoc rscs (:id rsc))
    (assoc rscs (:id rsc) (dissoc rsc :active))))

(defn rsc-block-drawer-view [rsc-block rscs]
  (let [active? #(contains? (:resources rsc-block) (:id %))
        rscs (map #(assoc % :active (active? %)) rscs)]
    [:div.flex-col
     (c/title1 (:title rsc-block) "Untitled Resource Block")
     (c/select-list
       {:id "unit-edit-rscs"
        :class "border-select-"
        :action (fn [x evt-bus]
                  (om/transact! rsc-block [:resources]
                    #(toggle-rsc % x) :resource))
        :placeholder "Untitled_Resource"}
       rscs)]))

(defn resources-views [{:keys [drawer]} data {:keys [selected] :as state}]
  (let [rscs (u/get-resources data)]
    (if-let [rsc (get rscs selected)]
      (if (= (:type rsc) "block")
        [(rsc-nav-view drawer state)
         (rsc-block-drawer-view rsc (->> (dissoc rscs (:id rsc))
                                         vals
                                         (filter (comp not :type))
                                         (sort-by :timestamp)))]
        [(rsc-nav-view drawer state)
         (rsc-drawer-view rsc)])
     [(rscs-nav-view drawer)
      (rscs-drawer-view state (->> rscs
                                   vals
                                   (sort-by :timestamp)))])))
