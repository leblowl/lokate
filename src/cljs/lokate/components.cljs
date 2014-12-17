(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [display blankf]]
            [lokate.db :refer [db-add]]))

(defn input [data owner {:keys [id className edit-key on-edit on-key-down] :as opts}]
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

(defn edit [data owner {:keys [edit-key on-edit] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build input data {:opts {:id "name-input"
                                   :className "name input single-line"
                                   :edit-key edit-key
                                   :on-edit on-edit
                                   :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}}))))

(defn on-edit [app-data data edit-key id res]
  (om/update! data edit-key (blankf (gstring/unescapeEntities res)))
  (db-add (get-in @app-data [:collections id]))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn begin-edit [app-data data id]
  (om/root edit data {:target (.getElementById js/document "overlay-root")
                      :opts {:edit-key :name
                             :on-edit (partial on-edit app-data data :name id)}}))
