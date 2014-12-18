(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [blankf]]
            [lokate.components :refer [select-list]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [cljs-uuid-utils :as uuid]))

(defn new-resource [name]
  {:name name
   :id (keyword (str (uuid/make-random-uuid)))})

(defn update-resource [data res]
  (om/update! data [:name] res)
  (db-new #(db-add "resource" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn add-resource [data res]
  (let [to-add (new-resource res)]
    (om/transact! data [:resources (:id to-add)] to-add)
    (db-new #(db-add "resource" to-add)))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn modal-input
  [data owner {:keys [title placeholder value on-edit] :as opts}]
  (reify
    om/IDidMount
    (did-mount [_]
      (.select (om/get-node owner "input")))
    om/IRender
    (render [_]
     (dom/div #js {:className "name-input"}
       (dom/span #js {:className "name-input-title"} title)
       (dom/div #js {:className "name-input-wrap"}
         (dom/input #js {:className "name-input-input"
                         :ref "input"
                         :type "text"
                         :placeholder placeholder
                         :value value
                         ;default empty onChange allows you to enter input, all that's needed here
                         :onChange #()})
         (dom/div #js {:className "name-input-ok btn icon-checkmark"
                       :onClick #(on-edit data (.-value (om/get-node owner "input")))}))))))

(defn overlay
  [data owner {:keys [child child-opts] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build child data {:opts child-opts}))))

(defn render-overlay [child data child-opts]
  (om/root overlay data {:target (.getElementById js/document "overlay-root")
                         :opts {:child child
                                :child-opts child-opts}}))

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
        {:opts {:path-fn (fn [_] [:route (str "/resources/" (:id _))])}}))))

(defn resource-view
  [data owner {:keys [id] :as opts}]
  (om/component
    (let [resource (get-in data [:resources id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(render-overlay
                                  modal-input (get-in data [:resources id]) {:title "Resource name"
                                                                             :placeholder "Untitled resource"
                                                                             :value (:name resource)
                                                                             :on-edit update-resource})}
          (dom/span #js {:className "editable-title"
                         :data-ph "Untitled Resource"
                         :dangerouslySetInnerHTML #js {:__html (:name resource)}}))
        (dom/div #js {:className "info-content"})))))
