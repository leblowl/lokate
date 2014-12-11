(ns lokate.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(def home-state
  (atom {:home-selects [{:name "Collections"
                         :path "/collections"}
                        {:name "Resources"
                         :path "/resources"}
                        {:name "Tasks"
                         :path "/tasks"}]}))

(defn home-view [data owner]
  (om/component
    (dom/div #js {:id "home"}
      (om/build parts/select-list (:home-selects data)))))

(defn render [nav-chan]
  (om/detach-root (.getElementById js/document "nav-control"))
  (om/root home-view home-state {:target (.getElementById js/document "drawer")
                                 :shared {:nav nav-chan}}))
