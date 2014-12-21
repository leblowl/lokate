(ns lokate.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [select-list]]))

(defn home-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:home-selects [{:name "Collections"
                       :route (get-route :collections)}
                      {:name "Resources"
                       :route (get-route :resources)}
                      {:name "Tasks"
                       :route nil}]})
    om/IRenderState
    (render-state [_ {:keys [home-selects]}]
     (dom/div #js {:id "home"}
       (om/build select-list home-selects)))))
