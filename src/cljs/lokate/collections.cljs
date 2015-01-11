(ns lokate.collections
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [lokate.db :refer [db-new db-add]]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [tip link-list render-overlay modal-input control-panel title-banner]]))

(defn collections-banner [data owner]
  (om/component
    (om/build title-banner data {:opts {:title "collections"}})))

(defn collection-banner [data owner]
  (om/component
    (om/build title-banner data {:opts {:title "collection"}})))

(defn collections-controls
  [{:keys [collections] :as data} owner]
  (om/component
    (om/build control-panel data
      {:opts
       {:children [(dom/div #js {:id "nav-add-btn"
                                 :className "btn icon-plus"
                                 :onClick #(put! (om/get-shared owner :nav)
                                             (get-route :collection-new))})]}})))

(defn collection-controls
  [data owner {:keys [c-id] :as opts}]
  (om/component
    (om/build control-panel data
      {:opts
       {:children [(dom/div #js {:id "collection-controls"}
                     (dom/div #js {:id "add-point-btn"
                                   :className "btn icon-pin"
                                   :onClick #(put! (:nav (om/get-shared owner))
                                               (get-route :unit-new {:c-id c-id}))})
                     (dom/div #js {:id "add-sector-btn"
                                   :className "btn icon-googleplus"}))]}})))

(defn collections-view
  [{:keys [collections] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "collections"}
        (om/build link-list
          (vals collections)
          {:opts {:class "btn-"
                  :name-default "Untitled_Collection"
                  :action #(put! (:nav (om/get-shared owner))
                             (get-route :collection
                               {:c-id (keyword (:id %))}))
                  :keyfn #(-> % :name (str/upper-case))}})))))

(defn update-collection [data res]
  (om/update! data [:name] res)
  (db-new #(db-add "collection" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn collection-view
  [data owner {:keys [c-id] :as opts}]
  (om/component
    (let [collection (get-in data [:collections c-id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(render-overlay
                                  modal-input collection
                                  {:title "Collection name"
                                   :placeholder "Untitled collection"
                                   :value (:name collection)
                                   :on-edit update-collection})}

          (dom/span #js {:className "editable-title"
                         :data-ph "Collection Name"
                         :dangerouslySetInnerHTML #js {:__html (:name collection)}}))
        (dom/div #js {:className "info-content"}
          (if (empty? (:units collection))
            (om/build tip data
              {:opts
               {:children [(dom/p #js {:className "collection-tip-msg"}
                             "Click "
                             (dom/span #js {:className "img icon-pin"})
                             " or "
                             (dom/span #js {:className "gplus-img img icon-googleplus"})
                             " to add a unit or unit sector to your collection!")]}})
            (om/build
              link-list (vals (:units collection))
              {:opts {:class "btn-"
                      :name-default "Untitled_Unit"
                      :action #(put! (:nav (om/get-shared owner))
                                 (get-route :unit-info
                                   {:c-id c-id :u-id (keyword (:id %))}))
                      :keyfn #(-> % :name (str/upper-case))}})))))))
