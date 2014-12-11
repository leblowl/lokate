(ns lokate.collections
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn add-collection-btn [collections owner]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "icon-plus"
                  :onClick #(put! (om/get-shared owner :nav) [:route "/collections/new"])})))

(defn collections-view [collections owner]
  (println collections)
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "collections"}
        (om/build parts/select-list
          collections {:opts {:name-default "Untitled_Collection"
                              :path-fn #(str "/collections/" (:id %))}})))))

(defn render [app-state nav-chan]
  (om/root add-collection-btn (:places @app-state)
    {:target (.getElementById js/document "nav-control")
     :shared {:nav nav-chan}})
  (om/root collections-view (:places @app-state)
    {:target (.getElementById js/document "drawer")
     :shared {:nav nav-chan}}))
