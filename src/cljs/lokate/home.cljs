(ns lokate.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(def home-state
  (atom {:home-selects [{:name "Collections"
                         :href "#/collections"}
                        {:name "Resources"
                         :href "#/resources"}
                        {:name "Tasks"
                         :href "#/tasks"}]}))

(defn home-view [data owner]
  (om/component
    (dom/div #js {:id "home"}
      (om/build parts/select-list (:home-selects data)))))


(defn render []
  (om/root home-view home-state {:target (.getElementById js/document "drawer")}))
