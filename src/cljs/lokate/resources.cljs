(ns lokate.resources
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]
            [lokate.components :as c]
            [lokate.db :as db]))

(defn resources-controls
  [drawer owner]
  (om/component
    (om/build c/drawer-nav-panel
      [drawer
       (om/build c/title-banner ["resources" #()])
       [[:div#add-resource-btn
         {:class "btn icon-flow-line"
          :on-click #(async/put! (:event-bus (om/get-shared owner))
                       [:add-resource])}]
        [:div#add-resource-cluster-btn
         {:class "btn icon-flow-tree"}]]])))

(defn resources-view
  [resources owner]
  (om/component
    (html [:div.resources
           (om/build c/link-list (vals resources)
             {:opts {:class "btn-"
                     :action #()
                     :keyfn #(-> % :name (str/upper-case))}})])))

(defn resource-view
  [resource owner]
  (om/component
    (html [:div.info
           [:div#name-editable.editable
            {:on-click #(async/put! (:event-bus (om/get-shared owner))
                          [:update-resource (:id resource) :title])}
            [:span.editable-title
             {:data-ph "Untitled Resource"}
             (:title resource)]
            [:div.info-content]]])))
