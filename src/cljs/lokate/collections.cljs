(ns lokate.collections
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn add-collection-btn
  [collections owner]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "icon-plus"
                  :onClick #(put! (om/get-shared owner :nav) [:route :collections:new])})))

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
        (om/build parts/select-list
          collections {:opts {:name-default "Untitled_Collection"
                              :path-fn (fn [_] [:route :collection {:id (:id _)}])}})))))
