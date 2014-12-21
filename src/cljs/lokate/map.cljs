(ns lokate.map
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.set :as set]
            [clojure.data :refer [diff]]
            [clojure.string :as string]
            [goog.string :as gstring]
            [goog.string.format]
            [lokate.db :as db :refer [db-add]]
            [lokate.routing :refer [get-route]]))

(defn mmap [f m]
  (into {} (for [[k v] m]
             [k (f v)])))

(defn mfilter [f m]
  (select-keys m (for [[k v] m :when (f v)] k)))

(-> js/L .-AwesomeMarkers .-Icon .-prototype .-options .-prefix (set! "ion"))
(def green-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                     :markerColor "lightgreen"
                                                     :iconColor "#212121"})))
(def yellow-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                      :markerColor "beige"})))
(def red-ico (-> js/L .-AwesomeMarkers (.icon #js {:icon "ion-ios-circle-outline"
                                                   :markerColor "lightred"})))
(defn reset-ico [icon]
  (-> icon .-options .-icon (set! "ion-ios-circle-outline"))
  icon)

(defn activate-ico [icon]
  (-> icon .-options .-icon (set! "ion-ios-circle-filled"))
  icon)

(defn reset-markers [owner]
  (let [markers (om/get-state owner :markers)]
    (dorun
      (map #(.setIcon (:marker %) (reset-ico (:icon %))) (vals markers)))))

(defn activate-marker
  [owner id]
  (let [l-map (om/get-state owner :map)
        active (om/get-state owner [:markers id])]
    (when active
      (do (.setIcon (:marker active) (activate-ico (:icon active)))
          (.panTo l-map (.getLatLng (:marker active)))))))

(defn path-to-route
  [path]
  (->
    (into {} (for [[k v] (partition 2 path)] [k v]))
    (set/rename-keys {:collections :c-id :units :u-id})
    ((partial get-route :unit))))

(defn mark-it!
  [data owner map unit]
  (let [pos (:pos unit)
        icon green-ico
        marker (-> js/L
                 (.marker (clj->js pos) #js {:icon icon})
                 (.addTo map))]

    (.on marker "click"
      (fn []
        (om/update! data [:drawer :open] true)
        (put! (om/get-shared owner :nav)
          (path-to-route (om/path unit)))))

    (.on marker "contextmenu"
      #(put! (om/get-shared owner :nav)
         [:route :point {:id (:id unit)}]))

    (assoc unit :marker marker :icon icon)))

(defn add-markers [data owner units]
  (let [map (om/get-state owner :map)]
    (om/update-state! owner :markers
      #(merge % (mmap (partial mark-it! data owner map) units)))))

(defn add-group [owner places opts]
  (map #({:name (:name %) :group (js/L.MarkerClusterGroup.)})))

(defn delete-markers [owner keys]
  (let [l-map (om/get-state owner :map)]
    (dorun
      (map #(->>
              (om/get-state owner [:markers % :marker])
              (.removeLayer l-map))
        keys)))
  (om/update-state! owner :markers
    #(apply dissoc % keys)))

(defn cancel-action [owner]
  (js/clearTimeout (om/get-state owner :evt-timeout))
  (om/set-state! owner :evt-timeout nil))

(defn get-units [collections]
  (reduce into {}
    (map :units (vals collections))))

(defn l-map [{:keys [collections] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js [0 0]
       :evt-timeout nil
       :markers {}
       :map nil})

    om/IWillReceiveProps
    (will-receive-props [this {:keys [collections] :as next-props}]
      (let [next-units    (set (mfilter :pos
                                 (get-units collections)))
            current-units (set (mfilter :pos
                                 (get-units (:collections (om/get-props owner)))))
            to-add (set/difference next-units current-units)
            to-delete (set/difference current-units next-units)]


        (delete-markers owner (keys to-delete))
        (add-markers data owner to-add)
        (reset-markers owner)
        (when-let [u-id (-> next-props :route :opts :u-id)]
          (activate-marker owner u-id))))

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
            (let [c-id (-> @data :route :opts :c-id)
                  u-id (-> @data :route :opts :u-id)]
              (when (= :unit (-> @data :route :domkm.silk/name))
               (om/update! data [:collections c-id :units u-id :pos]
                 (select-keys
                   (js->clj (.-latlng e) :keywordize-keys true)
                   [:lat :lng]))
               (db-add "collection" (get-in @data [:collections c-id]))))))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc #js [(.-coords.latitude pos)
                                   (.-coords.longitude pos)]]
               (.setView l-map initialLoc 9))))
          (println "Hey, where'd you go!? Geolocation Disabled"))


        (om/set-state! owner :map l-map)
        (add-markers data owner (mfilter :pos
                                  (get-units collections)))))

    om/IRenderState
    (render-state [_ {:keys [markers]}]
      (dom/div #js {:id "map"}))))
