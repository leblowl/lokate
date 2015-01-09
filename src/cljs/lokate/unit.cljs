(ns lokate.unit
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! sub chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [control-panel tip dropdown-select-list
                                       select-list render-overlay modal-input]]
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
  [data owner {:keys [c-id u-id children] :as opts}]
  (om/component
    (om/build control-panel data
      {:opts
       {:children (concat children
                    [(let [unit (get-in data [:collections c-id :units u-id])]
                       (when-not (-> unit :pos empty?)
                         (dom/div #js {:id "check-in-btn"
                                       :className "btn icon-in-alt"
                                       :onClick #()})))])}})))

(defn unit-resources-controls
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (om/build unit-controls data
      {:opts
       (merge
         opts
         {:children [(dom/div #js {:id "configure-resources-btn"
                                   :className "btn icon-settings"
                                   :onClick #(put! (:pub-chan (om/get-shared owner))
                                               {:topic :unit-resources-mode :data :configure})})]})})))

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
        {:opts {:id "page-select"
                :action #(put! (om/get-shared owner :nav)
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
            (om/build tip data
              {:opts
               {:children [(dom/p nil
                             "Right click or long press on the map to add a location to your unit!")]}})
            (dom/div #js {:className "location"}
              (dom/span #js {:className "img icon-pin status"
                             :style #js {:color (status-color "green")}})
              (dom/span #js {:className "location-lat-lng"} (display-pos (:pos unit))))))))))

(defn unit-resources
  [data owner {:keys [c-id u-id] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:mode :view})

    om/IDidMount
    (did-mount [_]
      (let [control (sub (:notif-chan (om/get-shared owner)) :unit-resources-mode (chan))]
        (go-loop [action (<! control)]
          (om/set-state! owner :mode (:data action))
          (recur (<! control)))))

    om/IRenderState
    (render-state [_ {:keys [mode]}]
      (let [collection (get-in data [:collections c-id])
            unit (get-in collection [:units u-id])]
        (case mode
          :view
          (if (empty? (:resources unit))
            (om/build tip data
              {:opts
               {:children [(dom/p nil
                             "Click "
                             (dom/span #js {:className "img icon-settings"})
                             " to add resources to your unit!")]}})
            (om/build list (vals (:resources unit))))

          :configure
          (om/build select-list (vals (:resources data))
            {:opts {:class "btn-"
                    :action #(.log js/console "activate!")}}))))))
