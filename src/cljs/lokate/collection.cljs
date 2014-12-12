(ns lokate.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [blankf]]
            [lokate.components :as parts]))

(defn edit [data owner {:keys [edit-key on-edit] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build parts/input data {:opts {:id "name-input"
                                         :className "name input single-line"
                                         :edit-key edit-key
                                         :on-edit on-edit
                                         :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}}))))

(defn on-edit [data edit-key res]
  (om/update! data edit-key (blankf (gstring/unescapeEntities res)))
  ;(db-add (get-in @app-state (:active-place @app-state)))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn begin-edit [data]
  (om/root edit data {:target (.getElementById js/document "overlay-root")
                      :opts {:edit-key :name
                             :on-edit (partial on-edit data :name)}}))

(defn collection-view
  [data owner {:keys [id] :as opts}]
  (reify
    om/IRender
    (render [_]
      (let [collection (get (:collections data) id)]
        (dom/div #js {:className "collection-info"}
          (dom/div #js {:id "name-editable"
                        :className "editable"
                        :onClick #(begin-edit collection)}
            (dom/span #js {:className "editable-title"
                           :data-ph "Collection Name"
                           :dangerouslySetInnerHTML #js {:__html (:name collection)}}))
          (om/build parts/select-list (:hives collection)))))))
