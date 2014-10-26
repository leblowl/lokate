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

(defn orientation []
  (if (> (.-height (.-screen js/window))
         (.-width (.-screen js/window)))
    :portrait
    :landscape))

(def app-state
  (atom {:orientation (orientation)
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
  (println (str "screen height "(.-height (.-screen js/window))))

  (swap! app-state #(assoc % :orientation (orientation))))

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
          (println "Hey, where'd you go!? Geolocation Disabled"))

        (.addEventListener js/window "resize" (fn [e]
                                                (google.maps.event.trigger map "resize")))))

    om/IRender
    (render [this]
      (dom/div #js {:id "map-canvas"}))))

(defn floormat [& args]
  (apply gstring/format args))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn visible [show]
  (if show
    #js {:visibility "visible"}
    #js {:visibility "hidden"}))

(defn display-pos [hive]
  (let [pos (:pos hive)]
    (str
      "Lat: " (floormat "%.2f" (:lat pos))
      " Lng: " (floormat "%.2f" (:lng pos)))))

(defn display-origin [hive]
  (str "Originated: " (:origin hive)))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn begin-edit [owner edit-key]
  (om/set-state! owner :editing edit-key))

(defn end-edit [owner]
  (om/set-state! owner :editing nil))

(defn on-edit [cb hive key owner]
  (om/update! hive key (gstring/unescapeEntities (.-innerHTML (om/get-node owner key))))
  (cb))

(defn input [hive owner {:keys [id className edit-key on-edit on-key-down] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:exit-type nil})

    om/IDidMount
    (did-mount [_]
      (.focus (om/get-node owner edit-key)))

    om/IRenderState
    (render-state [_ {:keys [exit-type]}]
      (dom/div #js {:id "input-wrapper"}
        (dom/div #js {:id id
                      :ref edit-key
                      :className className
                      :style (display (not exit-type))
                      :contentEditable "true"
                      :onKeyDown on-key-down
                      :onBlur (fn []
                                (om/set-state! owner :exit-type "out")
                                (js/setTimeout #(on-edit hive edit-key owner) 100))
                      :dangerouslySetInnerHTML #js {:__html (edit-key hive)}})
        (dom/div #js {:id "input-ok"
                      :style (display (not (= exit-type "out")))
                      :onClick (fn []
                                 (om/set-state! owner :exit-type "btn")
                                 (js/setTimeout #(on-edit hive edit-key owner) 100))}
          (dom/span #js {:id "input-ok-mark"
                         :style style}
            (gstring/unescapeEntities "&#10003;")))))))

(defn hive-info [hive owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing nil})

    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/div #js {:id "info-wrapper"}
        (case editing
          :name (om/build input hive {:opts {:id "name-input"
                                             :className "name input single-line"
                                             :edit-key :name
                                             :on-edit
                                             (partial on-edit #(end-edit owner))
                                             :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}})
          :notes (om/build input hive {:opts {:id "notes-input"
                                              :className "notes input"
                                              :edit-key :notes
                                              :on-edit
                                              (partial on-edit #(end-edit owner))}})
          nil)
        (dom/div #js {:id "info"
                      :className (if editing "hide" "show")}
          (dom/span #js {:id "name-editable"
                         :className "name editable single-line"
                         :onClick #(begin-edit owner :name)
                         :data-ph "Name"
                         :dangerouslySetInnerHTML #js {:__html (:name hive)}})
          (dom/div #js {:className "origin"}
            (display-origin hive))
          (dom/div #js {:className "location"}
            (display-pos hive))
          (dom/div #js {:id "notes-editable"
                        :className "notes editable"
                        :onClick #(begin-edit owner :notes)
                        :data-ph "Notes..."
                        :dangerouslySetInnerHTML #js {:__html (:notes hive)}}
            )
)))))

(defn app [data owner]
  (om/component
    (dom/div #js {:className (str "flex-container"
                               (if (= (:orientation data) :portrait)
                                 " column"
                                 " row"))}
      (dom/div #js {:className "one"}
        (om/build goog-map data))
      (dom/div #js {:className (str "two"
                                 (if (= (:orientation data) :portrait)
                                   " vert"
                                   " flat"))}
        (om/build hive-info (get (:hives data) (:active data)))))))

(defn main []
  (nav/render)
  (.addEventListener js/window "resize" handleOrientation)
  (om/root app app-state {:target (.getElementById js/document "content")}))
