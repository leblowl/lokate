(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

(def app-state
  (atom {:orientation :portrait
         :hives {}
         :active "DUDE!"}))

(defn mark-pos [map pos]
  (google.maps.Marker. #js {:position pos
                            :map map
                            :title "hive"}))

(defn display-info [hive]
  (:title (:info hive)))

(defn goog-map [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [map-options #js {:center #js {:lat 0 :lng 0}
                             :zoom 8}
            map (google.maps.Map. (.getElementById js/document "map-canvas")
                                  map-options)]

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (let [marker (mark-pos map (.-latLng evt))]
              (om/transact! data
                :hives
                (fn [_]
                  (assoc _ (keyword (.-title marker)) {:obj marker
                                                       :info {:title (.-title marker)}})))

              (google.maps.event.addListener marker
                "click"
                #(om/update! data [:active] ((keyword (.-title marker)) (:hives @data))))
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
      (dom/div #js {:className "info"} (display-info (:active data))))))

(defn handleOrientation []
  (om/update! app-state [:orientation] (if (= (.-orientation js/window) 0)
                                         :portrait
                                         :landscape)))

(defn app [data owner]
  (om/component
    (dom/div #js {:className "content-liner"}
      (if (= (:orientation data) :portrait)
        (dom/div #js {:className "small-12 small-centered column" :role "content"}
          (dom/div #js {:className "row map-row"}
            (dom/div #js {:className "map-column small-12 small-centered column"}
              (om/build goog-map data)))
          (dom/div #js {:className "row info-row"}
            (dom/div #js {:className "info-column small-12 small-centered column"}
              (om/build hive-info data))))
        (dom/div nil "landscape!!!")))))

(.addEventListener js/window "orientationchange" handleOrientation)
(om/root app app-state {:target (.getElementById js/document "content")})
