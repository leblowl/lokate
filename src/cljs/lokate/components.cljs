(ns lokate.components
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [goog.string :as gstring]
            [lokate.util :as u]))

;; clickables

(defn set-effect [owner]
  (om/set-state! owner :effect true))

(defn release-effect [owner]
  (om/set-state! owner :effect false))

;; div with effect on click
;; for some reason this doesn't re-render inside modal input
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
  [[icon-class action] owner opts]
  (om/component
    (om/build cdiv [(merge {:class "btn"} opts)
                    [:div {:class (str "btn-icon clickable " icon-class)
                           :on-click #(-> (om/get-shared owner)
                                          :event-bus
                                          action)}]])))

;; lists && list-items

(defn list-item
  [[{:keys [item-comp] :as props} item]]
  (om/component
    (html [:li.list-item
           (om/build item-comp [props item])])))

(defn simple-list
  [[{:keys [id class] :as props} items] owner]
  (om/component
    (html [:ol {:id id
                :class (str class "list")}
           (om/build-all list-item items {:fn #(conj [props] %)})])))

;; generic item, has some action on click and optional right click
(defn item
  [[{:keys [class icon-class action alt-action name-default]} item] owner]
  (let [evt-bus (:event-bus (om/get-shared owner))]
    (om/component
      (html [:div
             {:class (str class "item clickable")
              :on-click #(action item evt-bus)
              :on-context-menu (fn [e]
                                 (when alt-action
                                   (alt-action item evt-bus))
                                 (.preventDefault e))}
             [:div.txt-wrap.clickable
              [:span.item-title
               (or (u/blankf (:title item)) name-default)]]
             [:div {:class icon-class}]]))))

(defn set-status [owner status]
  (om/set-state! owner :status status))

(defn warn-or-remove [owner remove-action item evt-bus]
  (case (om/get-state owner :status)
    :ok (set-status owner :warn)
    :warn (do
            (set-status owner :remove)
            (.setTimeout js/window
              (fn []
                (remove-action item evt-bus)
                (set-status owner :ok))
              500))))

;; removable item that calls a remove-action on 2nd right click
(defn removable-item
  [[{:keys [icon-class action remove-action name-default]} r-item] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:status :ok})

    om/IRenderState
    (render-state [_ {:keys [status]}]
      (om/build item [{:class (str (name status) " removable ")
                       :icon-class icon-class
                       :action action
                       :alt-action (partial warn-or-remove owner remove-action)
                       :name-default name-default}
                      r-item]))))

;; selectable item that has active/inactive state
(defn selectable-item
  [[{:keys [class action name-default]} s-item] owner]
  (om/component
    (om/build item [{:class (str (when (:active s-item) "active ") class)
                     :action action
                     :name-default name-default}
                    s-item])))

(defn item-list
  [props items]
  (om/build simple-list [(assoc props :item-comp item) items]))

(defn r-item-list
  [props r-items]
  (om/build simple-list [(assoc props :item-comp removable-item) r-items]))

(defn select-list
  [props s-items]
  (om/build simple-list [(assoc props :item-comp selectable-item) s-items]))

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
              [:a.current-select.clickable
               {:on-click #(om/update-state! owner :open not)}
               [:span.current-select-title
                (:title (first (filter :active items)))]]
              [:div.drop-down]]
             (when open
               (select-list (update-in opts [:action]
                              #(fn [x evt-bus]
                                 (om/set-state! owner :open false)
                                 (% x evt-bus)))
                 items))]))))

(defn input-list
  [[props items] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:children-loaded 0})

    om/IRender
    (render [_]
      (om/build simple-list
        [(merge props
           {:on-mount (fn []
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
                                  false))))))})
         items]))))

;; modal

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
                 #(on-edit (.-value (om/get-node owner "input")))]
                {:opts {:id "ok-btn"}})]]))))

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

(defn icon
  [icon-class]
  [:div.icon-wrapper
   [:div {:class (str "icon " icon-class)}
    [:div {:class (str "icon " icon-class)}]]])

(def home-icon
  (icon "icon-home"))

(defn back-btn [back-action]
  (om/build btn ["icon-navigate-before back-btn"
                 back-action]))

(defn resize-btn [drawer]
  (om/build btn [(str "icon-fullscreen" (when (:maximized? drawer) "-exit"))
                 #(om/transact! drawer :maximized? not)]))

(defn navicon [drawer]
  (om/build btn [(str "navicon icon-menu" (when (:open? drawer) " active"))
                 #(om/transact! drawer :open? not)]))

(defn cancel-btn [action]
  (om/build btn ["icon-cancel"
                 action]))

(defn done!-btn [action]
  (om/build btn ["icon-done"
                 action]))

(defn banner
  [children owner]
  (om/component
    (html [:div.banner-container
           (for [child children] child)])))

(defn title-banner
  [title child]
  (om/build banner [child [:span.banner-title title]]))

(defn return-banner
  [[child return-action] owner]
  (om/component
    (om/build banner [(back-btn #(-> (om/get-shared owner)
                                     :event-bus
                                     return-action))
                      child])))

(defn title-return-banner
  [title return-action]
  (om/build return-banner
    [[:span.banner-title title] return-action]))

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
               (title-banner "lokate" home-icon))
             [:div.control-panel
              (when open?
                [:div.drawer-control
                 (resize-btn drawer)
                 (for [control controls] control)])
              (navicon drawer)]]))))

;; etc

(defn title1
  ([title placeholder]
   (title1 title placeholder nil))
  ([title placeholder action]
   [:div.title1-container
    [:div
     {:class (str "txt-wrap" (when action " clickable"))
      :on-click action}
     [:span.title1-txt
      {:data-ph placeholder} title]]]))

(defn tip [tip-msg]
  [:div.tip-wrapper [:div.tip tip-msg]])
