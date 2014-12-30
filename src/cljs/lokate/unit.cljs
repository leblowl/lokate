(ns lokate.unit
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [select select-list render-overlay modal-input]]
            [lokate.util :refer [fdate-now floormat distance]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn status-color [status]
  (case status
    "green"  "#bbf970"
    "yellow" "#ffc991"
    "red"    "#ff8e7f"))

(defn display-pos [pos]
  (str
    "Lat: " (floormat "%.2f" (:lat pos))
    " Lng: " (floormat "%.2f" (:lng pos))))

(defn display-origin [point]
  (str "Originated: " (:origin point)))

(defn update-unit [unit-id data res]
  (om/update! data [:units unit-id :name] res)
  (db-new #(db-add "collection" @data))
  (om/detach-root (.getElementById js/document "overlay-root")))

(defn unit-controls
  [data owner {:keys [collection-id point-id] :as opts}]
  (om/component
    (let [unit (get-in data [:collections collection-id :units point-id])]
      (when (-> unit :pos (comp not empty?))
        (dom/div #js {:id "check-in-btn"
                      :className "btn icon-in-alt"
                      :onClick #(put! (om/get-shared owner :nav)
                                  [:route (str "/collections/" collection-id "/points/" point-id)])})))))

(defn page-select
  [data owner {:keys [c-id u-id] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:pages [{:name "info"
                :route (get-route :unit-info {:c-id c-id :u-id u-id})}
               {:name "resources"
                :route (get-route :unit-resources {:c-id c-id :u-id u-id})}]})

    om/IRenderState
    (render-state [_ {:keys [pages]}]
      (apply dom/div #js {:className "dropdown-select-list"}
        (om/build-all select pages)))))

(defn unit-view
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [collection (get-in data [:collections c-id])
          unit (get-in collection [:units u-id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(render-overlay
                                    modal-input collection {:title "Unit name"
                                                            :placeholder "Untitled unit"
                                                            :value (:name unit)
                                                            :on-edit (partial update-unit u-id)})}
          (dom/span #js {:className "editable-title"
                         :data-ph "Unit Name"
                         :dangerouslySetInnerHTML #js {:__html (:name unit)}}))
        (dom/div #js {:id "point-content"
                      :className "info-content"}
          (dom/div #js {:className "origin"}
            (display-origin unit))
          (if-not (:pos unit)
            (dom/div #js {:className "location-tip-wrapper"}
              (dom/div #js {:className "location-tip"}
                (dom/span #js {:className "img icon-pin"})
                (dom/span #js {:className "location-tip-msg"}
                  "Right click or long press on the map to add a location to your unit!")))
            (dom/div #js {:className "location"}
              (dom/span #js {:className "img icon-pin status"
                             :style #js {:color (status-color "green")}})
              (dom/span #js {:className "location-lat-lng"} (display-pos (:pos unit))))))))))
