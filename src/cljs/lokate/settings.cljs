(ns lokate.settings
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn edit-setting [title k v]
  (c/display-input
    title
    ""
    v
    #(.log js/console %)))

(defn map-settings [settings owner]
  (om/component
    (html [:div.border-block.frame
           [:div.settings-block-title.txt-wrap
            [:span "map"]]
           [:div.flex-col
            (c/title2
              "Tile url: "
              (:tile-url settings)
              ""
              #(edit-setting "Tile url" :tile-url (:tile-url settings)))
            (c/title2
              "Tile attr: "
              (:tile-attr settings)
              ""
              #(edit-setting "Tile attr" :tile-attr (:tile-attr settings)))]])))

(defn settings-drawer-view [settings owner]
  (om/component
    (html [:div.flex-col
           (om/build map-settings settings)])))

(defn settings-views [{:keys [drawer]} data state]
  [(om/build c/drawer-nav-panel [drawer
                                 (c/title-return-banner "settings" #(u/route! % :home))])
   (om/build settings-drawer-view (u/get-settings data))])
