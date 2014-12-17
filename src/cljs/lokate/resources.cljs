(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [blankf]]
            [lokate.components :refer [select-list]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn on-edit [app-data data edit-key id res]
  (om/update! data edit-key (blankf (gstring/unescapeEntities res)))
  (db-add (get-in @app-data [:collections id]))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn name-input
  [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (.select (om/get-node owner "input")))
    om/IRender
    (render [_]
     (dom/div #js {:className "name-input"}
       (dom/span #js {:className "name-input-title"}
         "Resource name")
       (dom/div #js {:className "name-input-wrap"}
         (dom/input #js {:className "name-input-input"
                         :ref "input"
                         :type "text"
                         :placeholder "New resource"})
         (dom/div #js {:className "name-input-ok btn icon-checkmark"}))))))

(defn overlay
  [data owner {:keys [child child-opts] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build child data {:opts child-opts}))))

(defn display-input [app-data data id]
  (om/root overlay data {:target (.getElementById js/document "overlay-root")
                         :opts {:child name-input
                                :child-opts {:edit-key :name
                                             :on-edit (partial on-edit app-data data :name id)}}}))

(defn resources-controls
  [data owner]
  (om/component
    (dom/div #js {:id "resources-controls"}
      (dom/div #js {:id "add-resource-btn"
                    :className "btn icon-flow-line"
                    :onClick display-input})
      (dom/div #js {:id "add-resource-cluster-btn"
                    :className "btn icon-flow-tree"}))))

(defn resources-view
  [data owner]
  (om/component
    (dom/div #js {:className "resources"}
      (om/build select-list (:resources data)))))
