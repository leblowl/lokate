(ns lokate.collections
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.util :as u]
            [lokate.components :as c]
            [lokate.unit :as unit]))

(def collection-tip
  [:p.collection-tip-msg
   "Right click or long press on the map to add a unit to your collection!"])

(defn collection-nav-view
  [[drawer collection] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["collection"
                                 #(async/put! (:event-bus (om/get-shared owner))
                                    [:set-path :collections])])])))

(defn collection-drawer-view
  [collection owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:ref "editable"
             :on-click (fn []
                         (c/display-input
                           "Collection name"
                           "Untitled collection"
                           (:title collection)
                           (fn [res]
                             (om/transact! collection [] #(assoc % :title res) :collection))))}
            [:span.editable-title
             {:data-ph "Collection Name"} (:title collection)]]
           [:div.info-content
            (if (empty? (:units collection))
              (c/tip collection-tip)
              (om/build c/link-list (vals (:units collection))
                {:opts {:class "btn-"
                        :name-default "Untitled_Unit"
                        :action #(async/put! (:event-bus (om/get-shared owner))
                                   [:set-path :unit (:cid %) (:id %) :info])
                        :keyfn #(-> % :title (str/upper-case))}}))]])))

(defn add-collection-btn
  [owner]
  (om/build c/btn ["icon-add"
                   #(async/put! % [:add-collection])]))

(defn collections-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner
         ["collections"
          #(async/put! (:event-bus (om/get-shared owner))
             [:set-path :home])])
       [(add-collection-btn owner)]])))

(defn set-status [owner status]
  (om/set-state! owner :status status))

(defn warn-or-delete [owner status collection]
  (case status
    :ok (set-status owner :warn)
    :warn (do
            (set-status owner :delete)
            (.setTimeout js/window
              (fn []
                (u/share owner [:delete-collection (:id collection)])
                (set-status owner :ok))
              500))))

(defn clink
  [collection owner]
  (reify
    om/IInitState
    (init-state [_]
      {:status :ok})

    om/IRenderState
    (render-state [_ {:keys [status]}]
      (html [:a {:class (str "btn-link " (name status))
                 :on-click #(u/share owner [:set-path :collection (:id collection)])
                 :on-context-menu (fn [e]
                                    (warn-or-delete owner status collection)
                                    (.preventDefault e))}
             [:span.link-title
              (or (u/blankf (:title collection)) "Untitled_Collection")]]))))

(defn collections-drawer-view
  [collections owner]
  (om/component
    (html [:div#collections
           (om/build c/simple-list (vals collections) {:opts {:item-comp clink}})])))

(defn collections-views [drawer collections]
  [(om/build collections-nav-view drawer)
   (om/build collections-drawer-view collections)])

(defn collection-views [drawer collection]
  [(om/build collection-nav-view [drawer collection])
   (om/build collection-drawer-view collection)])
