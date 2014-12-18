(ns lokate.collections
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :refer [select-list]]))

(defn add-collection-btn
  [collections owner]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "btn icon-plus"
                  :onClick #(put! (om/get-shared owner :nav) [:route "/collections/new"])})))

(defn collections-controls
  [{:keys [collections] :as data} owner]
  (om/component
    (om/build add-collection-btn collections)))

(defn collections-view
  [{:keys [collections] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "collections"}
        (om/build select-list
          (vals collections) {:opts {:name-default "Untitled_Collection"
                                     :path-fn (fn [_] [:route (str "/collections/" (:id _))])}})))))
