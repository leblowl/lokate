(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

(def app-state
  (atom {:orientation (if (> (.-innerHeight js/window)
                            (.-innerWidth js/window))
                        :portrait
                        :landscape)
         :hives {}
         :active "DUDE!"}))

(defn mark-pos [map pos]
  (google.maps.Marker. #js {:position pos
                            :map map
                            :title "hive"}))

(defn handleOrientation [evt]
  (swap! app-state #(assoc % :orientation
                           (if (> (.-innerHeight js/window)
                                 (.-innerWidth js/window))
                             :portrait
                             :landscape))))

(defn lat-lng-key [lat-lng]
  (keyword (str
             "lat=" (.lat lat-lng)
             "lng=" (.lng lat-lng))))

(defn add-hive [data marker]
  (om/transact! data
    :hives
    (fn [_] (let [pos (.getPosition marker)]
            (assoc _ (lat-lng-key pos)
                   {:marker marker
                    :name ""
                    :pos {:lat (.lat pos)
                          :lng (.lng pos)}
                    :notes ""}))))
  (om/update! data
    :active (lat-lng-key (.getPosition marker))))

(defn goog-map [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [map-options #js {:center #js {:lat 0 :lng 0}
                             :zoom 6}
            map (google.maps.Map. (.getElementById js/document "map-canvas")
                                  map-options)]

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (let [marker (mark-pos map (.-latLng evt))]
              (add-hive data marker)
              (google.maps.event.addListener marker
                "click"
                #(om/update! data :active (lat-lng-key (.getPosition marker))))
              (google.maps.event.addListener marker
                "rightclick"
                #(.setMap marker nil)))))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc (google.maps.LatLng. (.-coords.latitude pos)
                                                   (.-coords.longitude pos))]
               (.setCenter map initialLoc))))
          (println "Hey, where'd you go!? Geolocation Disabled"))))

    om/IRender
    (render [this]
       (dom/div #js {:id "map-canvas"}))))

(defn hive-info [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "info"}
        (dom/div #js {:className "name single-line"
                      :ref "hive-name"
                      :contentEditable "true"
                      :onKeyDown #(.log js/console "dude")
                      :onBlur #(.log js/console "hey") }
          (let [key (:active data)]
            (.log js/console key)
            (get (:hives data) key)))
        (dom/div #js {:className "location"} "Lat 32.5, Lng 666")
        (dom/input #js {:className "notes"
                        :type "text"
                        :ref "hive-notes"
                        :placeholder "Wazzzup?"})))))

(defn app [data owner]
  (om/component
    (dom/div #js {:className "content-liner"}
      (dom/div #js {:className (str "flex-container"
                                 (if (= (:orientation data) :portrait)
                                   " column"
                                   " row"))}
        (dom/div #js {:className (str "one"
                                   (if (= (:orientation data) :portrait)
                                     " vert"
                                     " flat"))}
          (om/build goog-map data))
        (dom/div #js {:className "two"}
          (om/build hive-info data))))))

(.addEventListener js/window "resize" handleOrientation)
(om/root app app-state {:target (.getElementById js/document "content")})
