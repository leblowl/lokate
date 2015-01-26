(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :as u]))

;; div with effect on click

(defn set-effect [owner]
  (om/set-state! owner :effect true))

(defn release-effect [owner]
  (om/set-state! owner :effect false))

(defn cdiv
  [[props contents] owner]
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
                :on-mouse-out   #(release-effect owner)})
             contents]))))

(defn btn
  [[icon-class action] owner]
  (om/component
    (om/build cdiv [{:class "btn"}
                    [:div {:class (str "btn-icon " icon-class)
                           :on-click #(-> (om/get-shared owner)
                                          :event-bus
                                          action)}]])))

;; lists && list-items

(defn list-item
  [item owner {:keys [item-comp] :as opts}]
  (om/component
    (html [:li.list-item
           (om/build item-comp item {:opts opts})])))

(defn simple-list
  [items owner {:keys [id class item-comp action] :as opts}]
  (om/component
    (html [:ol {:id id
                :class (str class "list")}
           (om/build-all list-item items {:opts opts})])))

(defn link
  [item owner {:keys [class name-default action] :as opts}]
  (om/component
    (html [:a {:class (str class "link")
               :on-click #(action item (:event-bus (om/get-shared owner)))}
           [:span.link-title
            (or (u/blankf (:title item)) name-default)]])))

(defn select
  [item owner {:keys [class name-default action] :as opts}]
  (om/component
    (html [:div {:class (str class "select"
                          (when (:active item) " active"))
                 :on-click #(action item (:event-bus (om/get-shared owner)))}
           [:span.select-title
            (or (u/blankf (:title item)) name-default)]])))

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
  [items owner opts]
  (om/component
    (om/build simple-list items {:opts (merge opts {:item-comp link})})))

(defn select-list
  [items owner opts]
  (om/component
    (om/build simple-list items {:opts (merge opts {:item-comp select})})))

(defn dropdown-select-list
  [items owner {:keys [id class action] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:open false})

    om/IRenderState
    (render-state [_ {:keys [open]}]
      (html [:div {:id id}
             [:div.current-select-wrap
              [:a.current-select
               {:on-click #(om/update-state! owner :open not)}
               [:span {:class (str class " current-select-title")}
                (:title (first (filter :active items)))]]
              [:div.drop-down]]
             (when open
               (om/build select-list items
                 {:opts (update-in opts [:action]
                          #(fn [x evt-bus]
                             (om/set-state! owner :open false)
                             (% x evt-bus)))}))]))))

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
                :on-change #()}]
              (om/build btn
                ["icon-done"
                 #(on-edit (.-value (om/get-node owner "input")))])]]))))

(defn mount-overlay [overlay]
  (om/root (fn [overlay owner]
             (om/component
               (html [:div#overlay overlay])))
    overlay
    {:target (.getElementById js/document "overlay-root")}))

(defn unmount-overlay []
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn display-input
  ([title placeholder on-edit]
   (display-input title placeholder nil on-edit))
  ([title placeholder initial-value on-edit]
   (let [on-edit* (fn [res]
                    (on-edit res)
                    (unmount-overlay))]
     (mount-overlay (om/build modal-input [title placeholder
                                           initial-value on-edit*])))))

;; navigation panel components

(defn back-btn [back-action]
  (om/build btn ["icon-navigate-before back-btn"
                 back-action]))

(def home-icon
  [:span.banner-icon
   (gstring/unescapeEntities "&#11041;")])

(defn resize-btn [drawer owner]
  (om/build btn [(str "icon-fullscreen" (when (:maximized? drawer) "-exit"))
                 #(om/transact! drawer :maximized? not)]))

(defn navicon [drawer owner]
  (om/build btn [(str "navicon icon-menu" (when (:open? drawer) " active"))
                 #(om/transact! drawer :open? not)]))

(defn banner
  [[child back-action] owner]
  (om/component
    (html [:div.banner-container
           (if back-action
             (back-btn #(-> (om/get-shared owner)
                            :event-bus
                            back-action))
             home-icon)
           child])))

(defn title-banner
  [[title back-action] owner]
  (om/component
    (om/build banner [[:span.banner-title title] back-action])))

(defn simple-nav-panel
  [controls owner]
  (om/component
    (html [:div.navigation-container
           [:div.control-panel
            (for [control controls] control)]])))

(defn drawer-nav-panel
  [[drawer banner controls] owner]
  (om/component
    (let [open? (:open? drawer)]
      (html [:div.navigation-container
             (if open?
               banner
               (om/build title-banner ["lokate"]))
             [:div.control-panel
              (when open?
                [:div#drawer-control
                 (resize-btn drawer owner)
                 (for [control controls] control)])
              (navicon drawer owner)]]))))

;; etc

(defn tip [tip-msg]
  [:div.tip-wrapper [:div.tip tip-msg]])

(defn cancel-btn
  [action owner]
  (om/component
    (html [:div#cancel-btn-wrapper
           [:div#cancel-btn
            {:class "btn icon-cancel"
             :on-click #(action (:event-bus (om/get-shared owner)))}]])))

(defn done!-btn
  [action owner]
  (om/component
    (html [:div#done-btn-wrapper
           [:div#done-btn
            {:class "btn icon-done"
             :on-click #(action (:event-bus (om/get-shared owner)))}]])))
