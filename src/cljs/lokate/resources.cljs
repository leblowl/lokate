(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.util :refer [blankf]]
            [lokate.components :refer [select-list]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn new-resource [name id]
  {:name name
   :id id})

(defn on-edit [data owner]
  (let [id (count (:resources @data))
        to-add (-> (om/get-node owner "input")
                 (.-value)
                 (new-resource id))]
    (om/transact! data [:resources] #(conj % to-add))
    (db-new #(db-add "resource" to-add)))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn name-input
  [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (.select (om/get-node owner "input")))
    om/IRender
    (render [_]
     (dom/div #js {:className "name-input"}
       (dom/span #js {:className "name-input-title"}
         "Resource name")
       (dom/div #js {:className "name-input-wrap"}
         (dom/input #js {:className "name-input-input"
                         :ref "input"
                         :type "text"
                         :placeholder "New resource"})
         (dom/div #js {:className "name-input-ok btn icon-checkmark"
                       :onClick #(on-edit data owner)}))))))

(defn overlay
  [data owner {:keys [child child-opts] :as opts}]
  (om/component
    (dom/div #js {:id "overlay"}
      (om/build child data {:opts child-opts}))))

(defn display-input [data]
  (om/root overlay data {:target (.getElementById js/document "overlay-root")
                         :opts {:child name-input}}))

(defn resources-controls
  [data owner]
  (om/component
    (dom/div #js {:id "resources-controls"}
      (dom/div #js {:id "add-resource-btn"
                    :className "btn icon-flow-line"
                    :onClick #(display-input data)})
      (dom/div #js {:id "add-resource-cluster-btn"
                    :className "btn icon-flow-tree"}))))

(defn resources-view
  [data owner]
  (om/component
    (.log js/console (pr-str (:resources data)))
    (dom/div #js {:className "resources"}
      (om/build select-list (:resources data) {:opts {:path-fn (fn [_] [:route (str "/resources/" (:id _))])}}))))
