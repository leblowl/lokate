(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [goog.string :as gstring]
            [goog.string.format]
            [cognitect.transit :as t]))

(enable-console-print!)

(def app-state
  (atom {:orientation nil
         :hives {}
         :active nil}))

(defn orientation []
  (if (> (.-height (.-screen js/window))
         (.-width (.-screen js/window)))
    "portrait"
    "landscape"))

(defn handleOrientation []
  (swap! app-state #(assoc % :orientation (orientation))))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (.lat lat-lng)
             "lng=" (.lng lat-lng))))

(defn fdate-now []
  (let [d (js/Date.)
        date (.getDate d)
        month (+ (.getMonth d) 1)
        year (.getFullYear d)]
    (str month "/" date "/" year)))

(defn new-hive [marker]
  (let [pos (.getPosition marker)]
    {:marker marker
     :name ""
     :origin (fdate-now)
     :pos {:lat (.lat pos)
           :lng (.lng pos)}
     :notes ""}))

(defn activate-marker [data marker]
  (dorun (map #(.setIcon (:marker %) "http://maps.google.com/mapfiles/ms/icons/red-dot.png")
           (vals (:hives @data))))
  (when marker
    (.setIcon marker "http://maps.google.com/mapfiles/ms/icons/green-dot.png")))

(defn add-hive [data marker]
  (let [key (pos-key (.getPosition marker))]
    (om/transact! data :hives #(assoc % key (new-hive marker)))
    (om/update! data :active key)
    (activate-marker data marker)))

(defn mark-pos [map pos]
  (google.maps.Marker. #js {:position pos
                            :map map
                            :title "hive"}))

(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn nearest [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn init-marker [data map marker]
  (add-hive data marker)
  (.panTo map (.getPosition marker))
  (google.maps.event.addListener marker
    "click"
    (fn [_]
      (if (= (:active @data) (pos-key (.getPosition marker)))
        (do (om/update! data :active nil)
            (activate-marker data nil))
        (do
          (om/update! data :active (pos-key (.getPosition marker)))
          (activate-marker data marker)
          (.panTo map (.getPosition marker))))))
  (google.maps.event.addListener marker
    "rightclick"
    (fn [_]
      (.setMap marker nil)
      (let [active (:active @data)
            fallen-key (pos-key (.getPosition marker))]
        (om/transact! data :hives #(dissoc % fallen-key))
        (if (= fallen-key active)
          (do
            (let [new-active (first (nearest fallen-key (:hives @data)))]
              (om/update! data :active new-active)
              (when new-active
                (activate-marker data (:marker (new-active (:hives @data))))
                (.panTo map (.getPosition (:marker (new-active (:hives @data)))))))))))))

(defn goog-map [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js {:lat 0 :lng 0}
       :evt-timeouts []})

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
            (if (empty? (om/get-state owner :evt-timeouts))
              (om/set-state! owner :evt-timeouts [(js/setTimeout #(init-marker data map (mark-pos map (.-latLng evt))) 1000)])
              (do
                (js/clearTimeout (om/get-state owner [:evt-timeouts 0]))
                (om/set-state! owner :evt-timeouts [])))))

        (google.maps.event.addListener
          map
          "mouseup"
          (fn [evt]
            (js/clearTimeout (om/get-state owner [:evt-timeouts 0]))
            (om/set-state! owner :evt-timeouts [])))

        (google.maps.event.addListener
          map
          "mousemove"
          (fn [evt]
            (js/clearTimeout (om/get-state owner [:evt-timeouts 0]))
            (om/set-state! owner :evt-timeouts [])))

        (google.maps.event.addListener
          map
          "rightclick"
          (fn [evt]
            (js/clearTimeout (om/get-state owner [:evt-timeouts 0]))
            (om/set-state! owner :evt-timeouts [])
            (init-marker data map (mark-pos map (.-latLng evt)))))

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
                                                (.setCenter map (om/get-state owner :center))))))

    om/IRender
    (render [_]
      (dom/div #js {:id "map-canvas"}))))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn floormat [& args]
  (apply gstring/format args))

(defn display-pos [hive]
  (let [pos (:pos hive)]
    (str
      "Lat: " (floormat "%.2f" (:lat pos))
      " Lng: " (floormat "%.2f" (:lng pos)))))

(defn display-origin [hive]
  (str "Originated: " (:origin hive)))

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
          (dom/span #js {:id "input-ok-mark"}
            (gstring/unescapeEntities "&#10003;")))))))

(defn input-control [hive owner {:keys [on-edit] :as opts}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/div #js {:id "input-ctrl"}
        (case editing
          :name (om/build input hive {:opts {:id "name-input"
                                             :className "name input single-line"
                                             :edit-key :name
                                             :on-edit on-edit
                                             :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}})
          :notes (om/build input hive {:opts {:id "notes-input"
                                              :className "notes input"
                                              :edit-key :notes
                                              :on-edit on-edit}})
          nil)))))

(defn hive-info [hive owner {:keys [begin-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "info"}
        (dom/span #js {:id "name-editable"
                       :className "name editable single-line"
                       :onClick #(begin-edit :name)
                       :data-ph "Name"
                       :dangerouslySetInnerHTML #js {:__html (:name hive)}})
        (dom/div #js {:className "origin"}
          (display-origin hive))
        (dom/div #js {:className "location"}
          (display-pos hive))
        (dom/div #js {:id "notes-editable"
                      :className "notes editable"
                      :onClick #(begin-edit :notes)
                      :data-ph "Notes..."
                      :dangerouslySetInnerHTML #js {:__html (:notes hive)}})))))

(defn drawer [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing nil})

    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/div #js {:id "drawer-wrapper"}
        (when (:active data)
          (om/build input-control
            ((:active data) (:hives data))
            {:state {:editing editing}
             :opts {:on-edit (partial on-edit #(end-edit owner))}}))
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (or (not (:active data)) editing) " hide" " show"))}
          (when (:active data)
            (om/build hive-info
              ((:active data) (:hives data))
              {:opts {:begin-edit (partial begin-edit owner)}})))))))

(defn app [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className (str "flex-container " (:orientation data))}
        (dom/div #js {:className "flex-content"}
          (om/build goog-map data))
        (om/build drawer data)))))

(defn render []
  (handleOrientation)
  (.addEventListener js/window "resize" handleOrientation)
  (om/root app app-state {:target (.getElementById js/document "content")}))
