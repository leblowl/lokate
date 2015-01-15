(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.routing :refer [get-route]]
            [lokate.util :refer [blankf]]
            [lokate.components :refer [title-banner control-panel link-list render-overlay modal-input]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn new-resource [name]
  {:name name})

(defn update-resource [data res]
  (om/update! data [:name] res)
  (db-new #(db-add "resource" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn add-resource [data res]
  (let [to-add (new-resource res)]
    (om/update! data [:resources (keyword (:id to-add))] to-add)
    (db-new #(db-add "resource" to-add)))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn resources-banner
  [data owner opts]
  (om/component
    (om/build title-banner data {:opts {:title "resources"}})))

(defn resources-controls
  [data owner {:keys [id] :as opts}]
  (om/component
    (om/build control-panel data
      {:opts
       {:children [(dom/div #js {:id "add-resource-btn"
                                 :className "btn icon-flow-line"
                                 :onClick #(render-overlay
                                             modal-input data
                                             {:title "Resource name"
                                              :placeholder "Untitled resource"
                                              :on-edit add-resource})})
                   (dom/div #js {:id "add-resource-cluster-btn"
                                 :className "btn icon-flow-tree"})]}})))

(defn resources-view
  [data owner]
  (om/component
    (dom/div #js {:className "resources"}
      (om/build link-list (vals (:resources data))
        {:opts {:class "btn-"
                :action #(put! (:nav (om/get-shared owner))
                           (get-route :resource
                             {:r-id (keyword (:id %))}))
                :keyfn #(-> % :name (str/upper-case))}}))))

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
