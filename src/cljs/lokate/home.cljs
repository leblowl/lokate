(ns lokate.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as gear]))

(def home-state
  (atom {:home-selects [{:name "Collections"
                         :href "#/Collections"}
                        {:name "Resources"
                         :href "#/Resources"}
                        {:name "Tasks"
                         :href "#/Tasks"}]}))

(defn home-view [data owner]
  (om/component
    (dom/div #js {:id "home"}
      (om/build gear/select-list (:home-selects data)))))


(defn render []
  (om/root home-view home-state {:target (.getElementById js/document "drawer")}))
