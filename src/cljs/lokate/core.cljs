(ns lokate.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [goog.string :as gstring]
            [lokate.util :as u :refer [display display-fade-in]]
            [lokate.components :as components]))

(defn lokate-control-panel
  [[db open? maximized?] owner]
  (om/component
    (html [:div.navigation-container
           [:div.banner-container
            (om/build components/home-icon db)
            [:span.banner-title "lokate"]]
           (om/build components/control-panel [db open? maximized?])])))

(defn control-panel
  [db owner]
  (om/component
    (html
      (om/build lokate-control-panel
        (concat [db] (u/system-attr db :system.drawer/open :system.drawer/maximized))))))

(defn drawer
  [[db view] owner]
  (om/component
    (html
      [:div#drawer-wrapper
       [:div#drawer
        {:class (str (u/system-attr db :system.app/orientation)
                  (if (u/system-attr db :system.drawer/open) " show" " hide")
                  (when (u/system-attr db :system.drawer/maximized) " maximized"))}
        (om/build view db)]])))
