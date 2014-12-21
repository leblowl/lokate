(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.routing :refer [get-route]]
            [lokate.util :refer [blankf]]
            [lokate.components :refer [select-list render-overlay modal-input]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [cljs-uuid-utils :as uuid]))

(defn new-resource [name]
  {:name name
   :id (str (uuid/make-random-uuid))})

(defn update-resource [data res]
  (om/update! data [:name] res)
  (db-new #(db-add "resource" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn add-resource [data res]
  (let [to-add (new-resource res)]
    (om/update! data [:resources (:id to-add)] to-add)
    (db-new #(db-add "resource" to-add)))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn resources-controls
  [data owner {:keys [id] :as opts}]
  (om/component
    (dom/div #js {:id "resources-controls"}
      (dom/div #js {:id "add-resource-btn"
                    :className "btn icon-flow-line"
                    :onClick #(render-overlay
                                modal-input data {:title "Resource name"
                                                  :placeholder "Untitled resource"
                                                  :on-edit add-resource})})
      (dom/div #js {:id "add-resource-cluster-btn"
                    :className "btn icon-flow-tree"}))))

(defn resources-view
  [data owner]
  (om/component
    (dom/div #js {:className "resources"}
      (om/build select-list (vals (:resources data))
        {:opts {:route-fn #(get-route :resource {:r-id (keyword (:id %))})}}))))

(defn resource-view
  [data owner {:keys [r-id] :as opts}]
  (om/component
    (let [resource (get-in data [:resources r-id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(render-overlay
                                  modal-input (get-in data [:resources r-id])
                                  {:title "Resource name"
                                   :placeholder "Untitled resource"
                                   :value (:name resource)
                                   :on-edit update-resource})}
          (dom/span #js {:className "editable-title"
                         :data-ph "Untitled Resource"
                         :dangerouslySetInnerHTML #js {:__html (:name resource)}}))
        (dom/div #js {:className "info-content"})))))
