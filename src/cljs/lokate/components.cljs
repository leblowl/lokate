(ns lokate.components
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :refer [display blankf]]
            [lokate.db :refer [db-add]]))

(defn list-item
  [item owner {:keys [item-comp] :as opts}]
  (om/component
    (dom/li #js {:className "list-item"}
      (om/build item-comp item {:opts opts}))))

(defn simple-list
  [items owner {:keys [id class item-comp action] :as opts}]
  (om/component
    (apply dom/ol #js {:id id
                       :className (str class "list")}
      (om/build-all list-item items {:opts opts}))))

(defn link
  [item owner {:keys [class name-default action] :as opts}]
  (om/component
    (dom/a #js {:className (str class "link")
                :onClick #(action item)}
      (dom/span #js {:className "link-title"}
        (or (blankf (:name item)) name-default)))))

(defn select
  [item owner {:keys [class name-default action] :as opts}]
  (om/component
    (dom/div #js {:className (str class "select"
                               (when (:active item) " active"))
                  :onClick #(action item)}
      (dom/span #js {:className "select-title"}
        (or (blankf (:name item)) name-default)))))

; TODO: sorted list

(defn link-list
  [items owner {:keys [id class name-default action] :as opts}]
  (om/component
    (om/build simple-list items {:opts (merge opts {:item-comp link})})))

(defn select-list
  [items owner {:keys [id class name-default action] :as opts}]
  (om/component
    (om/build simple-list items {:opts (merge opts {:item-comp select})})))

(defn dropdown-select-list
  [items owner {:keys [id class item-comp action] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:open false})

    om/IRenderState
    (render-state [_ {:keys [open]}]
      (dom/div #js {:id id}
        (dom/a #js {:className "current-select"
                    :onClick #(om/update-state! owner :open not)}
          (dom/span #js {:className (str class " current-select-title")}
            (:name (first (filter :active items)))))
        (when open
          (om/build select-list items
            {:opts (update-in opts [:action]
                     #(fn [sel]
                        (om/set-state! owner :open false)
                        (% sel)))}))))))

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
         (dom/div #js {:className "name-input-ok btn icon-done"
                       :onClick #(on-edit data (.-value (om/get-node owner "input")))}))))))

(defn overlay
  [data owner {:keys [child child-opts] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build child data {:opts child-opts}))))

(defn render-overlay
  [child data child-opts]
  (om/root overlay data {:target (.getElementById js/document "overlay-root")
                         :opts {:child child
                                :child-opts child-opts}}))

(defn tip
  [data owner {:keys [children] :as opts}]
  (om/component
    (dom/div #js {:className "tip-wrapper"}
      (apply dom/div #js {:className "tip"}
        children))))
