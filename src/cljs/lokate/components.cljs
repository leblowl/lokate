(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :refer [display blankf]]
            [lokate.db :refer [db-add]]))

(defn link-list-item
  [selectable owner {:keys [class name-default route-fn] :as opts}]
  (om/component
    (dom/li #js {:className "link-list-item"}
      (dom/a #js {:className (str "link " class)
                  :onClick #(put! (om/get-shared owner :nav)
                              (or (:route selectable)
                                (route-fn selectable)))}
        (dom/span #js {:className "link-title"}
          (or (blankf (:name selectable)) name-default))))))

; todo: sort by creation order
(defn link-list
  [links owner opts]
  (om/component
    (apply dom/ol #js {:className "link-list"}
      (om/build-all link-list-item links {:opts (merge opts {:class "btn-link"})}))))

(defn select
  [sel owner {:keys [class name-default action] :as opts}]
  (om/component
    (dom/div #js {:className (str "select " class
                               (when (:active sel) "active"))
                  :onClick #(action sel)}
      (dom/span #js {:className "select-title"}
        (or (blankf (:name sel)) name-default)))))

(defn select-list-item
  [sel owner {:keys [class name-default action] :as opts}]
  (om/component
    (dom/li #js {:className "select-list-item"}
      (om/build select sel {:opts opts}))))

(defn nav! [owner route]
  (put! (om/get-shared owner :nav) route))

(defn select-list
  [sels owner {:keys [class name-default action] :as opts}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (let [sels* (map #(assoc % :active (= selected %)) sels)]
        (apply dom/ol #js {:className "select-list"}
          (om/build-all select-list-item sels* {:opts opts}))))))

(defn dropdown-select-list
  [sels owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:open false
       :selected nil})

    om/IRenderState
    (render-state [_ {:keys [open selected]}]
      (dom/div nil
        (dom/a #js {:className "current-select"
                    :onClick #(om/update-state! owner :open not)}
          (dom/span #js {:className "banner-title"} (:name selected)))
        (when open
          (om/build select-list sels
            {:opts  {:action (fn [sel]
                               (om/set-state! owner :open false)
                               (om/set-state! owner :selected sel)
                               (nav! owner (:route sel)))}
             :state {:selected selected}}))))))

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
