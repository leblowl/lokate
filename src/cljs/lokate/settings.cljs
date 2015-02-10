(ns lokate.settings
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]))

(defn edit-setting [title setting owner]
  (c/display-input
    title
    ""
    (:value setting)
    #(async/put! (om/get-shared owner :event-bus)
       [:add-setting (:id setting) %])))

(defn map-settings [settings owner]
  (om/component
    (html [:div.border-block.frame
           [:div.settings-block-title.txt-wrap
            [:span "map"]]
           [:div.flex-col
            (c/title2
              "Tile url: "
              (:value (:tile-url settings))
              ""
              #(edit-setting "Tile url" (:tile-url settings) owner))
            (c/title2
              "Tile attr: "
              (:value (:tile-attr settings))
              ""
              #(edit-setting "Tile attr" (:tile-attr settings) owner))]])))

(defn settings-drawer-view [settings owner]
  (om/component
    (html [:div.flex-col
           (om/build map-settings settings)])))

(defn settings-views [{:keys [drawer]} data state]
  [(om/build c/drawer-nav-panel [drawer
                                 (c/title-return-banner "settings" #(u/route! % :home))])
   (om/build settings-drawer-view (u/get-settings data))])
