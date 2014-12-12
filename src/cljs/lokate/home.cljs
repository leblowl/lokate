(ns lokate.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn home-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:home-selects [{:name "Collections"
                       :path [:route :collections]}
                      {:name "Resources"
                       :path [:route :resources]}
                      {:name "Tasks"
                       :path [:route :tasks]}]})
    om/IRenderState
    (render-state [_ {:keys [home-selects]}]
     (dom/div #js {:id "home"}
       (om/build parts/select-list home-selects)))))
