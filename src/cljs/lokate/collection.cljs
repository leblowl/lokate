(ns lokate.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn collection-info [collection owner {:keys [begin-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "collection-info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(begin-edit collection)}
          (dom/span #js {:className "editable-title"
                         :data-ph "Collection Name"
                         :dangerouslySetInnerHTML #js {:__html (:name collection)}}))
        (om/build parts/select-list (:hives collection))))))

(defn edit-name [data owner {:keys [on-edit] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build parts/input data {:opts {:id "name-input"
                                         :className "name input single-line"
                                         :edit-key :name
                                         :on-edit on-edit
                                         :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}}))))

(defn begin-edit [data]
  (let [target (.getElementById js/document "overlay-root")]
   (om/root edit-name data {:target target
                            :opts {:on-edit #(om/detach-root target)}})))



(defn render [app-state id]
  (om/detach-root (.getElementById js/document "nav-control"))
  (om/root collection-info (get (:places app-state) id)
    {:target (.getElementById js/document "drawer")
     :opts {:begin-edit begin-edit}}))
