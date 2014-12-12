(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [display]]))

(defn input [data owner {:keys [id className edit-key on-edit on-key-down] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:exit-type nil})

    om/IDidMount
    (did-mount [_]
      (.focus (om/get-node owner edit-key)))

    om/IRenderState
    (render-state [_ {:keys [exit-type]}]
      (dom/div #js {:id "input-wrapper"}
        (dom/div #js {:id id
                      :ref edit-key
                      :className className
                      :style (display (not exit-type))
                      :contentEditable "true"
                      :onKeyDown on-key-down
                      :onBlur (fn []
                                (om/set-state! owner :exit-type "out")
                                (js/setTimeout
                                  #(on-edit (.-innerHTML (om/get-node owner edit-key))) 100))
                      :dangerouslySetInnerHTML #js {:__html (edit-key data)}})
        (dom/div #js {:id "input-ok"
                      :style (display (not (= exit-type "out")))
                      :onClick (fn []
                                 (om/set-state! owner :exit-type "btn")
                                 (js/setTimeout
                                   #(on-edit (.-innerHTML (om/get-node owner edit-key))) 100))}
          (dom/span #js {:id "input-ok-mark"}
            (gstring/unescapeEntities "&#10003;")))))))

(defn select [selectable owner {:keys [name-default path-fn] :as opts}]
  (om/component
    (dom/li #js {:className "select-list-item"}
      (dom/a #js {:className "select"
                  :onClick #(put! (om/get-shared owner :nav) (or (:path selectable)
                                                               (path-fn selectable)))}
        (dom/span #js {:className "select-title"} (or (:name selectable) name-default))))))

(defn select-list [selectables owner opts]
  (om/component
    (apply dom/ol #js {:className "select-list"}
        (om/build-all select selectables {:opts opts}))))
