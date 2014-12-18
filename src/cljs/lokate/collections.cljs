(ns lokate.collections
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.db :refer [db-new db-add]]
            [lokate.components :refer [select-list render-overlay modal-input]]))

(defn add-collection-btn
  [collections owner]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "btn icon-plus"
                  :onClick #(put! (om/get-shared owner :nav) [:route "/collections/new"])})))

(defn collections-controls
  [{:keys [collections] :as data} owner]
  (om/component
    (om/build add-collection-btn collections)))

(defn collections-view
  [{:keys [collections] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "collections"}
        (om/build select-list
          (vals collections) {:opts {:name-default "Untitled_Collection"
                                     :path-fn (fn [_] [:route (str "/collections/" (:id _))])}})))))

(defn update-collection [data res]
  (om/update! data [:name] res)
  (db-new #(db-add "collection" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn collection-controls
  [data owner {:keys [id] :as opts}]
  (om/component
    (dom/div #js {:id "collection-controls"}
      (dom/div #js {:id "add-point-btn"
                    :className "btn icon-pin"
                    :onClick #(put! (om/get-shared owner :nav)
                                [:route (str "/collections/" id "/points/new")])})
      (dom/div #js {:id "add-sector-btn"
                    :className "btn icon-googleplus"}))))

(defn collection-tip
  [data owner]
  (om/component
    (dom/div #js {:className "collection-tip"}
      (dom/div #js {:className "collection-tip-msg"}
        "Click "
        (dom/span #js {:className "img icon-pin"})
        " or "
        (dom/span #js {:className "gplus-img img icon-googleplus"})
        " to add a unit or unit sector to your collection!"))))

(defn collection-view
  [data owner {:keys [id] :as opts}]
  (reify
    om/IRender
    (render [_]
      (let [collection (get (:collections data) id)]
        (dom/div #js {:className "info"}
          (dom/div #js {:id "name-editable"
                        :className "editable"
                        :onClick #(render-overlay
                                    modal-input collection {:title "Collection name"
                                                            :placeholder "Untitled collection"
                                                            :value (:name collection)
                                                            :on-edit update-collection})}
            (dom/span #js {:className "editable-title"
                           :data-ph "Collection Name"
                           :dangerouslySetInnerHTML #js {:__html (:name collection)}}))
          (dom/div #js {:className "info-content"}
            (if (empty? (:points collection))
              (om/build collection-tip collection)
              (om/build
                select-list (:points collection)
                {:opts {:name-default "Untitled_Unit"
                        :path-fn (fn [_] [:route (str "/collections/" id
                                                  "/points/" (:id _))])
                        :props {:onContextMenu #(false)}}}))))))))
