(ns lokate.settings
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.components :as c]))

; just copy name modal input
(defn input-setting [])

(defn map-settings [settings owner]
  (om/component
    (html [:div.settings-frame])))

(defn settings-drawer-view [settings owner]
  (om/component
    (html [:div.flex-col.frame])))

(defn settings-views [{:keys [drawer]} data state]
  [(om/build c/drawer-nav-panel [drawer
                                 (c/title-return-banner "settings" #(u/route! % :home))])
   (om/build settings-drawer-view [])])
