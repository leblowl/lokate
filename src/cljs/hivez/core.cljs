(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [hivez.navigation :as nav]
            [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [goog.string :as gstring]
            [goog.string.format]))

(enable-console-print!)

(def app-state
  (atom {:orientation (if (> (.-innerHeight js/window)
                            (.-innerWidth js/window))
                        :portrait
                        :landscape)
         :hives {:none {:name ""
                        :origin "12/21/2012"
                        :pos {:lat -0
                              :lng -0}
                        :notes ""}}
         :active :none}))

(defn mark-pos [map pos]
  (google.maps.Marker. #js {:position pos
                            :map map
                            :title "hive"}))

(defn activate-marker [data marker]
  (dorun (map #(when (not (nil? (:marker %)))
                 (.setIcon (:marker %) "http://maps.google.com/mapfiles/ms/icons/red-dot.png"))
           (vals (:hives @data))))
  (.setIcon marker "http://maps.google.com/mapfiles/ms/icons/green-dot.png"))

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

(defn fdate-now []
  (let [d (js/Date.)
        date (.getDate d)
        month (+ (.getMonth d) 1)
        year (.getFullYear d)]
    (str month "/" date "/" year)))

(defn add-hive [data marker]
  (om/transact! data
    :hives
    (fn [_] (let [pos (.getPosition marker)]
            (assoc _ (lat-lng-key pos)
                   {:marker marker
                    :name ""
                    :origin (fdate-now)
                    :pos {:lat (.lat pos)
                          :lng (.lng pos)}
                    :notes ""}))))
  (om/update! data
    :active (lat-lng-key (.getPosition marker)))

  (activate-marker data marker))

(defn goog-map [data owner]
  (reify
    om/IDidMount
    (did-mount [this]
      (let [map-options #js {:center #js {:lat 0 :lng 0}
                             :zoom 6}
            map (google.maps.Map. (om/get-node owner)
                                  map-options)]

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (let [marker (mark-pos map (.-latLng evt))]
              (add-hive data marker)
              (google.maps.event.addListener marker
                "click"
                (fn [_]
                  (om/update! data :active (lat-lng-key (.getPosition marker)))
                  (activate-marker data marker)))
              (google.maps.event.addListener marker
                "rightclick"
                (fn [_]
                  (.setMap marker nil)
                  (om/update! data :active :none))))))

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

(defn floormat [& args]
  (apply gstring/format args))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn display-name [hive]
  (:name hive))

(defn display-pos [hive]
  (let [pos (:pos hive)]
    (str
      "Lat: " (floormat "%.2f" (:lat pos))
      " Lng: " (floormat "%.2f" (:lng pos)))))

(defn display-origin [hive]
  (str "Originated: " (:origin hive)))

(defn display-notes [hive]
  (:notes hive))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))

(defn editable [data owner {:keys [edit-key on-edit] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})

    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (let [text (get data edit-key)]
        (dom/div nil
          (dom/span #js {:style (display (not editing))
                         :onClick #(om/set-state! owner :editing true)} text)
          (dom/input
            #js {:style (display editing)
                 :value text
                 :onChange #(handle-change % data edit-key owner)
                 :onKeyPress #(when (== (.-keyCode %) 13)
                                (end-edit text owner on-edit))
                 :onBlur (fn [e]
                           (when (om/get-state owner :editing)
                             (end-edit text owner on-edit)))}))))))

(defn hive-info [hive owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "info"
                    :className "info"}
        (om/build editable hive
          {:opts {:edit-key :name
                  :on-edit handle-change}})
        (dom/div #js {:className "origin"}
          (display-origin hive))
        (dom/div #js {:className "location"}
          (display-pos hive))
        (om/build editable hive
          {:opts {:edit-key :name
                  :on-edit handle-change}})))))

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
        (dom/div #js {:className (str "two"
                                   (if (= (:orientation data) :portrait)
                                     " vert"
                                     " flat"))}
          (om/build hive-info (get (:hives data) (:active data))))))))

(defn main []
  (nav/render)
  (.addEventListener js/window "resize" handleOrientation)
  (om/root app app-state {:target (.getElementById js/document "content")}))
