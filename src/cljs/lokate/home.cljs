(ns lokate.home
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.components :as c]
            [lokate.core :as core]))

(defn set-drawer-path! [owner path]
  (async/put! (:event-bus (om/get-shared owner))
    [:set-drawer-path path]))

(defn home-drawer-view [menu-items owner]
  (om/component
    (html [:div#home
           (om/build c/link-list menu-items
             {:opts {:class "btn-"
                     :action #(set-drawer-path! owner (:route %))}})])))

(defn home-view
  [data owner]
  (om/component
    (om/build core/window
      [data
       (om/build c/drawer-nav-panel [(-> data :view :drawer)
                                     (om/build c/title-banner "home")])
       (om/build home-drawer-view [{:title "Collections"
                                    :route :collections}
                                   {:title "Resources"
                                    :route :resources}
                                   {:title "Settings"
                                    :route :settings}])])))
