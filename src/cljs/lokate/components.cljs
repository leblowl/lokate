(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :refer [display display-fade-in blankf]]
            [lokate.db :refer [db-add]]))

(defn list-item
  [item owner {:keys [item-comp] :as opts}]
  (om/component
    (dom/li #js {:className "list-item"}
      (om/build item-comp item {:opts opts}))))

(defn simple-list
  [items owner {:keys [id class item-comp action keyfn fn] :as opts}]
  (om/component
    (apply dom/ol #js {:id id
                       :className (str class "list")}
      (om/build-all list-item (if keyfn (sort-by keyfn items) items)
        {:opts opts
         :fn fn}))))

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

(defn input-list
  [items owner {:keys [id class item-comp] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:children-loaded 0})

    om/IRender
    (render [_]
      (om/build simple-list items
        {:opts (merge opts
                 {:item-comp item-comp
                  :on-mount (fn []
                             (om/update-state! owner :children-mounted inc)
                             (when (= (om/get-state owner :children-mounted) (count items))
                               (let [children (.getElementsByTagName (om/get-node owner) "input")]
                                 (.select (.item children 0))
                                 ; also could have tab direct to next page or add hover effect to done!-btn
                                 (.addEventListener (.item children (dec (count items))) "keydown"
                                   (fn [e]
                                     (when (= (.-keyCode e) 9)
                                       (.select (.item children 0))
                                       (.preventDefault e)
                                       false))))))})}))))

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
        (dom/div #js {:className "current-select-wrap"}
          (dom/a #js {:className "current-select"
                      :onClick #(om/update-state! owner :open not)}
           (dom/span #js {:className (str class " current-select-title")}
             (:name (first (filter :active items)))))
          (dom/div #js {:className "drop-down"}))
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
                         :onKeyDown #(when (= (.-keyCode %) 13)
                                       (on-edit data (.-value (om/get-node owner "input")))
                                       (.preventDefault %)
                                       false)
                         ; empty onChange allows uncontrolled input
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

;remove duplication of these two functions
(defn open?
  [drawer]
  (true? (:open drawer)))

(defn maximized?
  [drawer]
  (true? (:maximized drawer)))

(defn toggle-open
  [drawer]
  (om/transact! drawer :open not))

(defn toggle-maximized
  [drawer]
  (om/transact! drawer :maximized not))

(defn resize-btn
  [data owner]
  (om/component
    (dom/div #js {:id "resize-btn"
                  :className (str "btn " (if (-> data :drawer maximized?)
                                           "icon-resize-shrink"
                                           "icon-resize-enlarge"))
                  :onClick #(toggle-maximized (:drawer data))})))

(defn navicon
  [data owner]
  (om/component
    (dom/div #js {:className (str "navicon"
                               (when (open? (:drawer data)) " active"))
                  :onClick (fn [] (toggle-open (:drawer data)))})))

(defn control-panel
  [data owner {:keys [children] :as opts}]
  (om/component
    (dom/div #js {:className "control-panel"}
      (dom/div #js {:id "drawer-control"
                    :style (display-fade-in (open? (:drawer data)))}
        (when (open? (:drawer data))
          (om/build resize-btn data))
        (when (open? (:drawer data))
          (apply dom/div #js {:id "drawer-sub-control"
                              :className "inline-control-group"}
            children)))
      (om/build navicon data))))

(defn back-btn
  [{{:keys [return-to]} :route} owner]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left"
                  :style (display return-to)
                  :onClick #(put! (:nav (om/get-shared owner))
                              @return-to)})))

(defn home-icon
  [data owner]
  (om/component
    (dom/span #js {:className "banner-icon"}
      (gstring/unescapeEntities "&#11041;"))))

(defn banner
  [{{:keys [return-to]} :route :as data} owner {:keys [children] :as opts}]
  (om/component
    (apply dom/div #js {:className "banner-container"}
      (if return-to
        (om/build back-btn data)
        (om/build home-icon data))
      children)))

(defn title-banner
  [data owner {:keys [title] :as opts}]
  (om/component
    (om/build banner data
      {:opts
       {:children [(dom/span #js {:className "banner-title"} title)]}})))
