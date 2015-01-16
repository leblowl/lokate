(ns lokate.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.map :as map]
            [lokate.home :as home]
            [lokate.collections :as collections]))

(defn drawer-panel
  [[app drawer drawer-view] owner]
  (om/component
    (html [:div#drawer-wrapper
           [:div#drawer
            {:class (str (:orientation app)
                      (if (:open? drawer) " show" " hide")
                      (when (:maximized? drawer) " maximized"))}
            [:div#drawer-content drawer-view]]])))

(defn window
  [data owner]
  (om/component
    (let [app (-> data :view :app)
          drawer (-> data :view :drawer)
          [nav-view drawer-view] (case (-> app :path)
                                   :home (home/home-views data)
                                   :collections (collections/collections-views data))]
      (html [:div#app
             nav-view
             [:div {:class (str "flex-container " (:orientation app))}
              [:div.flex-content
               (om/build map/l-map data)
               (om/build drawer-panel [app drawer drawer-view])]]]))))
