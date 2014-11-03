(ns hivez.goog-map
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [goog.string.format]))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (.lat lat-lng)
             "lng=" (.lng lat-lng))))

(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn nearest [marker markers]
  (apply min-key #(distance (:pos marker) (:pos (second %))) (seq markers)))

(defn activate-marker [owner map key]
  (om/update-state! owner [:markers] #(let [vals (vals %)]))
  (when key
    (om/set-state! owner [:markers key :active] true))

  (let [markers (om/get-state owner :markers)]
   (dorun (map #(if (:active %)
                  (do
                    (.setIcon (:marker %) "http://maps.google.com/mapfiles/ms/icons/green-dot.png")
                    (.panTo map (.getPosition (:marker %))))
                  (.setIcon (:marker %) "http://maps.google.com/mapfiles/ms/icons/red-dot.png"))
            (vals markers)))))

(defn render-markers [owner]
  (let [markers (om/get-state owner :markers)]
   (dorun (map #(.setIcon (:marker %)
                  (if (:active %)
                    "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                    "http://maps.google.com/mapfiles/ms/icons/red-dot.png"))
            (vals markers)))))

;(.panTo map (.getPosition marker))

(defn mark-it! [owner map pos]
  (let [marker (google.maps.Marker. #js {:position (clj->js pos)
                                         :map map
                                         :title "hive"})]
    (google.maps.event.addListener marker
      "click"
      (fn [_]
        (let [key (pos-key (.getPosition marker))]
          (if (om/get-state owner [:markers key :active])
            (activate-marker owner map nil)
            (activate-marker owner map key)))))

    (google.maps.event.addListener marker
      "rightclick"
      (fn [_]
        (let [key (pos-key (.getPosition marker))]
          (when (om/get-state owner [:markers key :active])
            (activate-marker owner map (first (nearest marker (om/get-state owner :markers)))))
          (.setMap marker nil)
          (om/update-state! owner :markers #(dissoc % key)))))
    {:marker marker :pos pos :active false}))

(defn add-marker [owner map pos]
  (let [key (pos-key pos)
        marker (mark-it! owner map pos)]
    (om/update-state! owner :markers #(assoc % key marker))
    (activate-marker owner map key)))

(defn cancel-action [owner]
  (js/clearTimeout (om/get-state owner :evt-timeout))
  (om/set-state! owner :evt-timeout nil))

(defn goog-map [hives owner]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js {:lat 0 :lng 0}
       :evt-timeout nil
       :markers []})

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
            (if-let [timeout (om/get-state owner :evt-timeout)]
              (do
                (js/clearTimeout timeout)
                (om/set-state! owner :evt-timeout nil))
              (om/set-state! owner :evt-timeout (js/setTimeout #(add-marker owner map (.-latLng evt)) 1000)))))

        (google.maps.event.addListener
          map
          "mouseup"
          (fn [evt] (cancel-action owner)))

        (google.maps.event.addListener
          map
          "mousemove"
          (fn [evt] (cancel-action owner)))

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (add-marker owner map (.-latLng evt))))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc (google.maps.LatLng. (.-coords.latitude pos)
                                                   (.-coords.longitude pos))]
               (.setCenter map initialLoc))))
          (println "Hey, where'd you go!? Geolocation Disabled"))

        (google.maps.event.addListener map "idle" #(om/set-state! owner :center (.getCenter map)))
        (.addEventListener js/window "resize" (fn [e]
                                                (google.maps.event.trigger map "resize")
                                                (.setCenter map (om/get-state owner :center))))

        (om/set-state! owner :markers
          (into {} (for [key (keys hives)
                         val (vals hives)]
                     [key (mark-it! owner map (:pos val))])))))

    om/IRenderState
    (render-state [_ {:keys [markers]}]
      (println (zipmap (keys markers) (map #(assoc % :active true) (vals markers))))
      (dom/div #js {:id "map-canvas"}))))
