(ns lokate.home
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.components :as c]))

(defn set-path [owner path]
  (async/put! (:event-bus (om/get-shared owner))
    [:set-path path]))

(defn home-drawer-view [menu-items owner]
  (om/component
    (html [:div#home
           (om/build c/link-list menu-items
             {:opts {:class "btn-"
                     :action #(set-path owner (:path %))}})])))

(defn home-views [drawer]
  [(om/build c/drawer-nav-panel [drawer
                                 (om/build c/title-banner ["home"])])
   (om/build home-drawer-view [{:title "Collections"
                                :path  :collections}
                               {:title "Resources"
                                :path  :resources}
                               {:title "Settings"
                                :path  :settings}])])
