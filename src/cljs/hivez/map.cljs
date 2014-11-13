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

(def blue-ico (.spriteIcon js/L))
(def green-ico (.spriteIcon js/L "green"))

(defn activate-marker [owner key]
  (let [l-map (om/get-state owner :map)
        markers (om/get-state owner :markers)
        active (om/get-state owner [:markers key :marker])]

    (dorun
      (map #(.setIcon (:marker %) (.spriteIcon js/L)) (vals markers)))
    (when active
      (do (.setIcon active green-ico)
          (.panTo l-map (.getLatLng active))))))

(defn mark-it! [owner map hive]
  (let [pos (:pos hive)
        marker (-> js/L
                 (.marker (clj->js pos) #js {:icon blue-ico})
                 (.addTo map))]

    (.on marker "click"
      #(put! (om/get-shared owner :action-chan)
         [:select :active-hive (om/path hive)]))

    (.on marker "contextmenu"
      #(put! (om/get-shared owner :action-chan)
         [:delete :active-hive (om/path hive)]))

    {:marker marker :pos pos :active false}))

(defn add-markers [owner hives]
  (let [map (om/get-state owner :map)]
    (om/update-state! owner :markers
      #(into % (for [[k v] hives]
                 [k (mark-it! owner map v)])))))

(defn add-group [owner places opts]
  (map #({:name (:name %) :group (js/L.MarkerClusterGroup.)})))

(defn delete-markers [owner hives]
  (let [l-map (om/get-state owner :map)]
    (dorun
     (map #(.removeLayer l-map (om/get-state owner [:markers % :marker]))
       (map first hives))))
  (om/update-state! owner :markers #(apply dissoc % (map first hives))))

(defn cancel-action [owner]
  (js/clearTimeout (om/get-state owner :evt-timeout))
  (om/set-state! owner :evt-timeout nil))

(defn l-map [{:keys [places active-place active-hive] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:center #js [0 0]
       :evt-timeout nil
       :markers {}
       :map nil})

    om/IWillReceiveProps
    (will-receive-props [this {:keys [places active-place active-hive] :as next-props}]
      (let [next-hives (reduce into #{} (map :hives places))
            current-hives (reduce into #{} (map :hives (:places (om/get-props owner))))
            to-add (set/difference next-hives current-hives)
            to-delete (set/difference current-hives next-hives)]

        (delete-markers owner to-delete)
        (add-markers owner to-add)
        (activate-marker owner (last active-hive))
        ))

    om/IDidMount
    (did-mount [_]
      (let [tile-url "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            tile-attr "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            l-map (-> js/L
                    (.map "map")
                    (.setView (om/get-state owner :center) 9))]

        (-> js/L
          (.tileLayer tile-url #js {:attribution tile-attr})
          (.addTo l-map))

        (.on l-map "contextmenu"
          (fn [e]
            (put! (om/get-shared owner :action-chan)
              [:add-hive
               (select-keys
                 (js->clj (.-latlng e) :keywordize-keys true)
                 [:lat :lng])])))

        (if navigator.geolocation
          (.getCurrentPosition navigator.geolocation
           (fn [pos]
             (let [initialLoc #js [(.-coords.latitude pos)
                                   (.-coords.longitude pos)]]
               (.setView l-map initialLoc 9))))
          (println "Hey, where'd you go!? Geolocation Disabled"))


        (om/set-state! owner :map l-map)
        (add-markers owner (reduce into {} (map :hives places)))))

    om/IRenderState
    (render-state [_ {:keys [markers]}]
      (dom/div #js {:id "map"}))))
