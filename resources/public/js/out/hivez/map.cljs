(ns hivez.map
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [goog.string.format]
            [clojure.set :as set]))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (.lat lat-lng)
             "lng=" (.lng lat-lng))))

(def red-dot "http://maps.google.com/mapfiles/ms/icons/red-dot.png")
(def green-dot "http://maps.google.com/mapfiles/ms/icons/green-dot.png")

(defn activate-marker [owner key]
  (let [goog-map (om/get-state owner :map)
        markers (om/get-state owner :markers)
        active (om/get-state owner [:markers key :marker])]
    (dorun
      (map #(.setIcon (:marker %) red-dot) (vals markers)))
    (when active
      (do (.setIcon active green-dot)
          (.panTo goog-map (.getPosition active))))))

(defn mark-it! [owner map pos {:keys [activate delete] :as opts}]
  (let [marker (google.maps.Marker. #js {:position (clj->js pos)
                                         :map map
                                         :title "hive"
                                         :icon red-dot})]
    (google.maps.event.addListener marker
      "click"
      (fn [_]
        (activate (pos-key (.getPosition marker)))))

    (google.maps.event.addListener marker
      "rightclick"
      (fn [_]
        (delete (pos-key (.getPosition marker)))))
    {:marker marker :pos pos :active false}))

(defn add-markers [owner hives opts]
  (let [map (om/get-state owner :map)]
    (om/update-state! owner :markers
      #(into % (for [[k v] hives]
                 [k (mark-it! owner map (:pos v) opts)])))))

(defn delete-markers [owner hives]
  (dorun
    (map #(.setMap (om/get-state owner [:markers % :marker]) nil)
      (map first hives)))
  (om/update-state! owner :markers #(apply dissoc % (map first hives))))

(defn cancel-action [owner]
  (js/clearTimeout (om/get-state owner :evt-timeout))
  (om/set-state! owner :evt-timeout nil))

(defn goog-map [{:keys [hives active] :as data} owner {:keys [add activate delete] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js {:lat 0 :lng 0}
       :evt-timeout nil
       :markers {}
       :map nil})

    om/IWillReceiveProps
    (will-receive-props [this next-props]
      (let [next-hives (set (:hives next-props))
            current-hives (set (:hives (om/get-props owner)))
            to-add (set/difference next-hives current-hives)
            to-delete (set/difference current-hives next-hives)]
        (add-markers owner to-add opts)
        (delete-markers owner to-delete)
        (activate-marker owner (:active next-props))))

    om/IDidMount
    (did-mount [_]
      (let [map-options #js {:center (om/get-state owner :center)
                             :zoom 6
                             :panControl false
                             :zoomControl false
                             :scaleControl true
                             :streetViewControl false}
            map (google.maps.Map. (om/get-node owner) map-options)]

        (google.maps.event.addListener
          map
          "mousedown"
          (fn [evt]

            (google.maps.event.addListener
              map
              "mouseup"
              (fn [evt] (cancel-action owner)))

            (google.maps.event.addListener
              map
              "mousemove"
              (fn [evt] (cancel-action owner)))

            (if-let [timeout (om/get-state owner :evt-timeout)]
              (do
                (js/clearTimeout timeout)
                (om/set-state! owner :evt-timeout nil))
              (om/set-state! owner :evt-timeout
                (js/setTimeout (fn [] (add (.-latLng evt))) 1000)))))

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (add (.-latLng evt))))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc (google.maps.LatLng. (.-coords.latitude pos)
                                                   (.-coords.longitude pos))]
               (.setCenter map initialLoc))))
          (println "Hey, where'd you go!? Geolocation Disabled"))

        (google.maps.event.addListener map
          "idle" #(om/set-state! owner :center (.getCenter map)))
        (.addEventListener js/window
          "resize" (fn [e]
                     (google.maps.event.trigger map "resize")
                     (.setCenter map (om/get-state owner :center))))

        (om/set-state! owner :map map)
        (add-markers owner hives opts)))

    om/IRenderState
    (render-state [_ {:keys [markers]}]
      (dom/div #js {:id "map-canvas"}))))
