(ns lokate.home
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn home-drawer-view [menu-items owner]
  (om/component
    (html [:div.flex-col.frame
           (c/item-list {:action (fn [x evt-bus] (u/route! evt-bus (:path x)))}
             menu-items)])))

(defn home-views [{:keys [drawer]} data state]
  [(om/build c/drawer-nav-panel [drawer
                                 (c/title-banner "home" c/home-icon)])
   (om/build home-drawer-view [{:title "Collections"
                                :path  :collections}
                               {:title "Resources"
                                :path  :resources}
                               {:title "Settings"
                                :path  :settings}])])
