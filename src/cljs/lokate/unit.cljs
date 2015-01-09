(ns lokate.unit
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! sub chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.routing :refer [get-route]]
            [lokate.components :refer [banner control-panel tip simple-list
                                       select-list dropdown-select-list
                                       render-overlay modal-input]]
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

(defn reset-active [next-route pages]
  (map #(assoc % :active (= (:route-name %) next-route)) pages))

(defn unit-nav
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

(defn unit-banner
  [data owner opts]
  (om/component
    (om/build banner data
      {:opts
       {:children [(om/build unit-nav data {:opts opts})]}})))

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
                                   :onClick #(put! (:nav (om/get-shared owner))
                                               (get-route :unit-resources-config
                                                 {:c-id c-id :u-id u-id}))})]})})))

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

(defn unit-resource
  [resource owner opts]
  (om/component
    (dom/div #js {:className "unit-resource"}
      (dom/span #js {:className "unit-resource-title"} (:name resource))
      (dom/div #js {:className "unit-resource-count-box"}
        (dom/span #js {:className "unit-resource-count"} (:count resource))))))

(defn unit-resources
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [collection (get-in data [:collections c-id])
          unit (get-in collection [:units u-id])]
      (if (empty? (:resources unit))
        (om/build tip data
          {:opts
           {:children [(dom/p nil
                         "Click "
                         (dom/span #js {:className "img icon-settings"})
                         " to add resources to your unit!")]}})
        (om/build simple-list (vals (:resources unit)) {:opts {:item-comp unit-resource}})))))

(defn done!-btn
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (dom/div #js {:id "done-btn-wrapper"}
      (dom/div #js {:id "done-btn"
                    :className "btn icon-done"
                    :onClick (fn []
                               (om/update! data [:drawer :maximized] false)
                               (put! (:nav (om/get-shared owner))
                                 (get-route :unit-resources
                                   {:c-id c-id :u-id u-id})))}))))

(defn unit-resources-config
  [data owner {:keys [c-id u-id] :as opts}]
  (om/component
    (let [unit-resources (-> data :collections c-id :units u-id :resources)
          resources (into {}
                      (for [[k v] (:resources data)]
                        [k (assoc v :active (contains? unit-resources k))]))]
      (om/build select-list (vals resources)
        {:opts {:class "btn-"
                :action (fn [rsc]
                          (let [k (-> rsc :id (keyword))]
                            (if (:active rsc)
                              (om/transact! unit-resources
                                #(dissoc % k))
                              (om/transact! unit-resources
                                #(assoc % k (assoc (-> data :resources k) :count 0))))))}}))))
