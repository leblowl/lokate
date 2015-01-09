(ns lokate.home
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [link-list title-banner]]))

(defn home-banner [data owner]
  (om/component
    (om/build title-banner data
      {:opts {:title "home"}})))

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
       (om/build link-list home-selects
         {:opts {:class "btn-"
                 :action #(put! (:nav (om/get-shared owner))
                            (:route %))}})))))
