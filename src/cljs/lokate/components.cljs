(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :as u]
            [lokate.db :refer [db-add]]))

;; div with effect on click

(defn set-effect [owner]
  (om/set-state! owner :effect true))

(defn release-effect [owner]
  (om/set-state! owner :effect false))

(defn cdiv
  [props owner]
  (reify
    om/IInitState
    (init-state [_]
      {:effect false})
    om/IRenderState
    (render-state [_ {:keys [effect]}]
      (html [:div
             (merge
               (update-in props [:class] #(str % (when effect " effect")))
               {:on-touch-start #(set-effect owner)
                :on-touch-move  #(release-effect owner)
                :on-touch-end   #(release-effect owner)
                :on-mouse-down  #(set-effect owner)
                :on-mouse-up    #(release-effect owner)
                :on-mouse-out   #(release-effect owner)})]))))

;; lists && list-items

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
        (or (u/blankf (:title item)) name-default)))))

(defn select
  [item owner {:keys [class name-default action] :as opts}]
  (om/component
    (dom/div #js {:className (str class "select"
                               (when (:active item) " active"))
                  :onClick #(action item)}
      (dom/span #js {:className "select-title"}
        (or (u/blankf (:name item)) name-default)))))

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

;; modals

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
        (om/build cdiv
          {:id "input-ok"
           :onClick #(on-edit (.-innerHTML (om/get-node owner (str edit-key))))}
          (dom/span #js {:id "input-ok-mark"}
            (gstring/unescapeEntities "&#10003;")))))))

(defn modal-input
  [[title placeholder value on-edit] owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (.select (om/get-node owner "input")))

    om/IRender
    (render [_]
      (html [:div.name-input
             [:span.name-input-title title]
             [:div.name-input-wrap
              [:input.name-input-input
               {:ref "input"
                :type "text"
                :placeholder placeholder
                :value value
                :on-key-down #(when (= (.-keyCode %) 13)
                               (on-edit (.-value (om/get-node owner "input")))
                               (.preventDefault %))
                ; empty onChange allows uncontrolled input
                :onChange #()}]
              (om/build cdiv
                {:class "name-input-ok btn icon-done"
                 :on-click #(on-edit (.-value (om/get-node owner "input")))})]]))))

(defn render-overlay
  [overlay]
  (om/root (fn [overlay owner]
             (om/component
               (html [:div#overlay overlay])))
    overlay
    {:target (.getElementById js/document "overlay-root")}))

(defn render-input-overlay
  [title placeholder value on-edit]
  (render-overlay (om/build modal-input [title placeholder value on-edit])))

;; navigation panel components

(defn back-btn [back-action]
  [:div#nav-back-btn.icon-arrow-left
   {:on-click back-action}])

(def home-icon
  [:span.banner-icon
   (gstring/unescapeEntities "&#11041;")])

(defn resize-btn [maximized? owner]
  (om/build cdiv
    {:id "resize-btn"
     :class (str "btn icon-resize-" (if maximized? "shrink" "enlarge"))
     :on-click #(put! (:event-bus (om/get-shared owner))
                  [:toggle-drawer :maximized])}))

(defn navicon [open? owner]
  [:div
   {:class (str "navicon" (when open? " active"))
    :on-click #(put! (:event-bus (om/get-shared owner))
                 [:toggle-drawer :open])}])

(defn banner
  [[child back-action] owner]
  (om/component
    (html [:div.banner-container
           (if back-action
             (back-btn back-action)
             home-icon)
           child])))

(defn title-banner
  [[title back-action] owner]
  (om/component
    (om/build banner [[:span.banner-title title] back-action])))

(defn drawer-nav-panel
  [[drawer banner controls] owner]
  (om/component
    (let [open? (:open? drawer)]
      (html [:div.navigation-container
             (if open?
               banner
               (om/build title-banner ["lokate"]))
             [:div.control-panel
              [:div#drawer-control
               {:style (u/fade-in open?)}
               (when open?
                 [:div#drawer-sub-control.inline-control-group
                  (for [control controls] control)
                  (resize-btn (:maximized? drawer) owner)])]
              (navicon open? owner)]]))))

;; etc

(defn tip [tip-msg]
  [:div.tip-wrapper [:div.tip tip-msg]])

(defn cancel-btn [action]
  [:div#cancel-btn-wrapper
   [:div#cancel-btn
    {:className "btn icon-cancel"
     :onClick action}]])

(defn done!-btn [action]
  [:div#done-btn-wrapper
   [:div#done-btn
    {:className "btn icon-done"
     :onClick action}]])
