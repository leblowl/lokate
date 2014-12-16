(ns lokate.map
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.set :as set]
            [clojure.string :as string]
            [goog.string :as gstring]
            [goog.string.format]
            [lokate.db :as db :refer [db-add]]))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (.lat lat-lng)
             "lng=" (.lng lat-lng))))

(-> js/L .-AwesomeMarkers .-Icon .-prototype .-options .-prefix (set! "ion"))
(def green-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                     :markerColor "green"
                                                     :iconColor "#fff"})))
(def yellow-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                      :markerColor "orange"})))
(def red-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                   :markerColor "red"})))
(defn reset-ico [icon]
  (-> icon .-options .-icon (set! "ion-ios-circle-outline"))
  icon)

(defn activate-ico [icon]
  (-> icon .-options .-icon (set! "ion-ios-circle-filled"))
  icon)

(defn activate-marker
  [owner id]
  (let [l-map (om/get-state owner :map)
        markers (om/get-state owner :markers)
        active (om/get-state owner [:markers id])]
    (dorun
      (map #(.setIcon (:marker %) (reset-ico (:icon %))) markers))
    (when active
      (do (.setIcon (:marker active) (activate-ico (:icon active)))
          (.panTo l-map (.getLatLng (:marker active)))))))

(defn path-to-route
  [path]
  (str "/" (string/join "/" (map #(if (keyword? %) (name %) (str %)) path))))

(defn mark-it!
  [data owner map point]
  (let [pos (:pos point)
        icon green-ico
        marker (-> js/L
                 (.marker (clj->js pos) #js {:icon icon})
                 (.addTo map))]

    (.on marker "click"
      (fn []
        (.log js/console (path-to-route (om/path point)))
        (om/update! data [:drawer :open] true)
        (put! (om/get-shared owner :nav)
          [:route (path-to-route (om/path point))])))

    (.on marker "contextmenu"
      #(put! (om/get-shared owner :nav)
         [:route :point {:id (:id point)}]))

    {:marker marker :icon icon :pos pos :id (:id point)}))

(defn add-markers [data owner units]
  (let [map (om/get-state owner :map)]
    (om/update-state! owner :markers
      #(into % (for [unit units]
                 (when-not (empty? (:pos unit))
                   (mark-it! data owner map unit)))))))

(defn add-group [owner places opts]
  (map #({:name (:name %) :group (js/L.MarkerClusterGroup.)})))

(defn delete-markers [owner units]
  (let [l-map (om/get-state owner :map)]
    (dorun
     (map #(.removeLayer l-map (om/get-state owner [:markers % :marker]))
       (map :id units))))
  (om/update-state! owner :markers #(apply dissoc % (map first units))))

(defn cancel-action [owner]
  (js/clearTimeout (om/get-state owner :evt-timeout))
  (om/set-state! owner :evt-timeout nil))

(defn l-map [{:keys [collections] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js [0 0]
       :evt-timeout nil
       :markers []
       :map nil})

    om/IWillReceiveProps
    (will-receive-props [this {:keys [collections] :as next-props}]
      (let [next-units (reduce into #{} (map :points collections))
            current-units (reduce into #{} (map :points (:collections (om/get-props owner))))
            to-add (set/difference next-units current-units)
            to-delete (set/difference current-units next-units)]

        ;(delete-markers owner to-delete)
        (add-markers data owner to-add)
        (when (re-matches #"/collections/(\d+)/points/(\d+)" (:route-name next-props))
          (let [point-id (get-in next-props [:route-opts :point-id])]
            (activate-marker owner point-id)))))

    om/IDidMount
    (did-mount [_]
      (let [tile-url "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            tile-attr "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            l-map (-> js/L
                    (.map "map" #js {:zoomControl false})
                    (.setView (om/get-state owner :center) 9))]

        (-> js/L
          (.tileLayer tile-url #js {:attribution tile-attr})
          (.addTo l-map))

        (.on l-map "contextmenu"
          (fn [e]
            ;; Convert this into an api call to /edit @ app.cljs
            (let [collection-id (get-in @data [:route-opts :collection-id])
                  point-id (get-in @data [:route-opts :point-id])]
             (when (re-matches #"/collections/(\d+)/points/(\d+)" (:route-name @data))
               (om/update! data [:collections collection-id :points point-id :pos]
                 (select-keys
                   (js->clj (.-latlng e) :keywordize-keys true)
                   [:lat :lng]))
               (db-add (get-in @data [:collections collection-id]))))))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc #js [(.-coords.latitude pos)
                                   (.-coords.longitude pos)]]
               (.setView l-map initialLoc 9))))
          (println "Hey, where'd you go!? Geolocation Disabled"))


        (om/set-state! owner :map l-map)
        (add-markers data owner (reduce into [] (map :points collections)))))

    om/IRenderState
    (render-state [_ {:keys [markers]}]
      (dom/div #js {:id "map"}))))
