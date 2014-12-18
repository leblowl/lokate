(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [display blankf]]
            [lokate.db :refer [db-add]]))

(defn select [selectable owner {:keys [name-default path-fn] :as opts}]
  (om/component
    (dom/li #js {:className "select-list-item"}
      (dom/a #js {:className "select"
                  :onClick #(put! (om/get-shared owner :nav)
                              (or (:path selectable)
                                (path-fn selectable)))}
        (dom/span #js {:className "select-title"} (or (:name selectable) name-default))))))

(defn select-list [selectables owner opts]
  (om/component
    (apply dom/ol #js {:className "select-list"}
        (om/build-all select selectables {:opts opts}))))

(defn modal-editable
  [data owner {:keys [id className edit-key on-edit on-key-down] :as opts}]
  (reify
    om/IDidMount
    (did-mount [_]
      (.focus (om/get-node owner (str edit-key))))

    om/IRender
    (render [_]
      (dom/div #js {:id "input-wrapper"}
        (dom/div #js {:id id
                      :ref (str edit-key)
                      :className className
                      :contentEditable "true"
                      :onKeyDown on-key-down
                      :dangerouslySetInnerHTML #js {:__html (edit-key data)}})
        (dom/div #js {:id "input-ok"
                      :onClick #(on-edit (.-innerHTML (om/get-node owner (str edit-key))))}
          (dom/span #js {:id "input-ok-mark"}
            (gstring/unescapeEntities "&#10003;")))))))

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
