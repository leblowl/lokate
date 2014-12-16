(ns lokate.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [lokate.db :refer [db-add]]
            [lokate.util :refer [blankf fdate-now]]
            [lokate.components :as parts :refer [begin-edit]]))

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
                        :onClick #(begin-edit collection)}
            (dom/span #js {:className "editable-title"
                           :data-ph "Collection Name"
                           :dangerouslySetInnerHTML #js {:__html (:name collection)}}))
          (dom/div #js {:className "info-content"}
            (if (empty? (:points collection))
              (om/build collection-tip collection)
              (om/build parts/select-list (:points collection) {:opts {:name-default "Untitled_Unit"
                                                                       :path-fn (fn [_] [:route (str "/collections/" id
                                                                                                 "/points/"(:id _))])
                                                                       :props {:onContextMenu #(false)}}}))))))))
