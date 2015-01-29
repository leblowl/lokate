(ns lokate.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.map :as map]))

(defn drawer-panel
  [[orientation drawer drawer-view] owner]
  (om/component
    (html [:div#drawer-wrapper
           [:div#drawer
            {:class (str orientation
                      (if (:open? drawer) " show" " hide")
                      (when (:maximized? drawer) " maximized"))}
            [:div#drawer-content drawer-view]]])))

(defn window
  [[{:keys [orientation location drawer views-fn views-state] :as window} data] owner]
  (om/component
    (let [[nav-view drawer-view] (views-fn window data views-state)]
      (html [:div#app
             nav-view
             [:div {:class (str "flex-container " orientation)}
              [:div.flex-content
               (om/build map/l-map [location (-> data u/get-collections u/get-units)])
               (om/build drawer-panel [orientation drawer drawer-view])]]]))))
