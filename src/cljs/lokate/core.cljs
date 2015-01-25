(ns lokate.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.map :as map]))

(defn get-units [collections]
  (reduce into {}
    (map :units (vals collections))))

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
  [[data nav-view drawer-view] owner]
  (om/component
    (let [app (-> data :view :app)
          drawer (-> data :view :drawer)]
      (html [:div#app
             nav-view
             [:div {:class (str "flex-container " (:orientation app))}
              [:div.flex-content
               (om/build map/l-map [drawer
                                    (-> data :view :app :path)
                                    (get-units (-> data :model :collections))])
               (om/build drawer-panel [app drawer drawer-view])]]]))))
