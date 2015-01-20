(ns lokate.resources
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.components :as c]
            [lokate.db :as db]))

(defn update-rsc [rsc k v]
  (om/transact! rsc [] (fn [m] (assoc m k v)) :resource))

(defn rsc-types-nav-view
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["resources"
                                 #(async/put! (:event-bus (om/get-shared owner))
                                    [:set-path :app :home])])
       [[:div#add-resource-btn
         {:class "btn icon-flow-line"
          :on-click #(async/put! (:event-bus (om/get-shared owner))
                       [:add-resource])}]
        [:div#add-resource-cluster-btn
         {:class "btn icon-flow-tree"}]]])))

(defn rsc-types-drawer-view
  [[view-data resources] owner]
  (om/component
    (html [:div.resources
           (om/build c/link-list (vals resources)
             {:opts {:class "btn-"
                     :action #(om/update! view-data :selected (:id %))
                     :keyfn #(-> % :title (str/upper-case))}})])))

(defn rsc-type-nav-view
  [[drawer view-data] owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["resources"
                                 #(om/transact! view-data
                                    (fn [m] (dissoc m :selected)))])])))

(defn rsc-type-drawer-view
  [resource owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(c/display-input
                          "Resource name"
                          "Untitled resource"
                          (:title resource)
                          (partial update-rsc resource :title))}
            [:span.editable-title
             {:data-ph "Untitled Resource"}
             (:title resource)]]
           [:div.info-content]])))

(defn resource-types-views [drawer view-data resources]
  (if-let [id (:selected view-data)]
    [(om/build rsc-type-nav-view [drawer view-data])
     (om/build rsc-type-drawer-view (get resources id))]
    [(om/build rsc-types-nav-view drawer)
     (om/build rsc-types-drawer-view [view-data resources])]))
