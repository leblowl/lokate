(ns lokate.unit
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [dropdown-select-list render-overlay modal-input]]
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
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [unit (get-in data [:collections c-id :units u-id])]
      (when (-> unit :pos (comp not empty?))
        (dom/div #js {:id "check-in-btn"
                      :className "btn icon-in-alt"
                      :onClick #()})))))

(defn unit-resources-controls
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (dom/div #js {:className "inline-list"}
      (dom/div #js {:id "configure-resources-btn"
                    :className "btn icon-settings"
                    :onClick #()})
      (om/build unit-controls data {:opts opts}))))

(defn reset-active [next-route pages]
  (map #(assoc % :active (= (:route-name %) next-route)) pages))

(defn page-select
  [data owner {:keys [c-id u-id] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      (let [current-route (-> @data :route :domkm.silk/name)]
       {:pages [{:name "info"
                 :route-name :unit-info
                 :active (= :unit-info current-route)}
                {:name "resources"
                 :route-name :unit-resources
                 :active (= :unit-resources current-route)}]}))

    om/IWillReceiveProps
    (will-receive-props [_ next-props]
      (let [next-route (-> @next-props :route :domkm.silk/name)]
        (om/update-state! owner :pages (partial reset-active next-route))))

    om/IRenderState
    (render-state [_ {:keys [pages]}]
      (om/build dropdown-select-list pages
        {:opts {:action #(put! (om/get-shared owner :nav)
                           (get-route (:route-name %) {:c-id c-id :u-id u-id}))}}))))

(defn unit-view
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [collection (get-in data [:collections c-id])
          unit (get-in collection [:units u-id])]
      (dom/div #js {:className "info"}
        (dom/div #js {:id "name-editable"
                      :className "editable"
                      :onClick #(render-overlay
                                  modal-input collection
                                  {:title "Unit name"
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

(defn unit-resources-tip
  [data owner]
  (om/component
    (dom/div #js {:className "tip-wrapper"}
      (dom/div #js {:className "tip"}
        (dom/div #js {:className "tip-msg"}
          "Click "
          (dom/span #js {:className "img icon-settings"})
          " to add resources to your unit!")))))

(defn unit-resources-view
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [collection (get-in data [:collections c-id])
          unit (get-in collection [:units u-id])]
      (if (empty? (:resources unit))
        (om/build unit-resources-tip collection)
        (om/build list (vals (:resources unit)))))))
