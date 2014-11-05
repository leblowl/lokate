(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [goog.string :as gstring]
            [goog.string.format]
            [cognitect.transit :as t]
            [hivez.map :as map]
            [secretary.core :as secretary :include-macros true :refer [defroute]]))

(enable-console-print!)

(def app-state
  (atom {:orientation nil
         :hives {}
         :active nil
         :places [{:name "Angels Camp"
                   :bounds {:northeast {:lat 0 :lng 0}
                            :southwest {:lat 5 :lng 5}}
                   :hives {}}]}))

(def db (atom nil))

(defn orientation []
  (if (> (.-height (.-screen js/window))
         (.-width (.-screen js/window)))
    "portrait"
    "landscape"))

(defn handleOrientation []
  (swap! app-state #(assoc % :orientation (orientation))))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

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

(defn floormat [& args]
  (apply gstring/format args))

(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn db-error [e]
  (.error js/console "An IndexedDB error has occured!" e))

(defn db-new [cb]
  (let [version 1
        request (.open js/indexedDB "hivez" version)]
    (set! (.-onupgradeneeded request) (fn [e]
                                        (reset! db (.. e -target -result))
                                        (set! (.. e -target -transaction -onerror) db-error)
                                        (.createObjectStore @db "hive" #js {:keyPath "key"})))
    (set! (.-onsuccess request) (fn [e]
                                  (reset! db (.. e -target -result))
                                  (cb)))
    (set! (.-onerror request) db-error)))

(defn db-add-hive [hive]
  (let [transaction (.transaction @db #js ["hive"] "readwrite")
        store (.objectStore transaction "hive")
        request (.put store (clj->js hive))]
    (set! (.-onerror request) db-error)))

(defn db-delete-hive [key]
  (let [transaction (.transaction @db #js ["hive"] "readwrite")
        store (.objectStore transaction "hive")
        request (.delete store (name key))]
    (set! (.-onerror request) db-error)))

(defn db-get-all [cb]
  (let [transaction (.transaction @db #js ["hive"] "readonly")
        store (.objectStore transaction "hive")
        keyRange (.lowerBound js/IDBKeyRange 0)
        cursorRequest (.openCursor store keyRange)]
    (set! (.-onsuccess cursorRequest)
      (fn [e]
        (if-let [result (.. e -target -result)]
          (do
            (swap! app-state #(assoc-in %
                                [:places 0 :hives (keyword (.-key result))]
                                (js->clj (.-value result) :keywordize-keys true)))
              (.continue result))
          (cb))))))

(defn new-hive [pos]
  {:key (pos-key pos)
   :name ""
   :origin (fdate-now)
   :pos {:lat (.lat pos)
         :lng (.lng pos)}
   :notes ""})

(defn nearest [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn add-hive [data pos]
  (let [hive (new-hive pos)]
    (om/transact! data :hives #(assoc % (:key hive) hive))
    (om/update! data :active (:key hive))
    (db-add-hive hive)))

(defn activate-hive [data key]
  (om/transact! data :active #(if (= key %) nil key)))

(defn delete-hive [data key]
  (if (= key (:active @data))
    (let [hive (key (:hives @data))]
      (om/transact! data :hives #(dissoc % key))
      (om/update! data :active (first (nearest hive (:hives @data)))))
    (om/transact! data :hives #(dissoc % key)))
  (db-delete-hive key))

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
  (om/update! hive key
    (gstring/unescapeEntities (.-innerHTML (om/get-node owner key))))
  (db-add-hive @hive)
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

(defn name-select [data owner {:keys [route] :as opts}]
  (om/component
    (dom/div #js {:className "name-select"
                  :onClick #(put! (om/get-shared owner :route-chan) [route data])}
      (dom/span #js {:className "name-select-title"} (:name data)))))

(defn places-info [places owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className "select-list"}
        (om/build-all name-select places {:opts {:route "place"}})))))

(defn place-info [place owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "place-info"}
        (dom/span #js {:className "place-title"})
        (apply dom/div #js {:className "select-list"}
          (om/build-all name-select (vals (:hives place)) {:opts {:route "hive"}}))))))

(defn root [root-id owner comp data opts]
  (om/root comp data
    (into {:target (.getElementById js/document root-id)
           :shared {:route-chan (om/get-state owner :route-chan)}}
      opts)))

(defn navicon [data owner {:keys [route-chan] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:active false})

    om/IRenderState
    (render-state [_ {:keys [active]}]
      (dom/div #js {:className (str "navicon" (when active " active"))
                    :onClick (fn []
                               (om/update-state! owner :active #(not %))
                               (put! route-chan ["open"]))}))))

(defn control-panel [data owner {:keys [route-chan] :as opts}]
  (om/component
    (dom/div #js {:className "control-panel"}
      (om/build navicon data {:opts opts}))))

(defn drawer [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:open false
       :editing nil
       :route-chan (chan)})

    om/IWillMount
    (will-mount [_]
      (go-loop []
        (let [route (<! (om/get-state owner :route-chan))
              route! (partial root "drawer" owner)]
          (case (first route)
            "open" (om/update-state! owner :open #(not %))
            "places" (route! places-info (:places @data) {})
            "place" (route! place-info (second route) {})
            "hive" (route! hive-info (second route)
                     {:opts {:begin-edit (partial begin-edit owner)}})))
        (recur)))

    om/IDidMount
    (did-mount [_]
      (put! (om/get-state owner :route-chan) ["places"]))

    om/IRenderState
    (render-state [_ {:keys [open editing route-chan]}]
      (dom/div #js {:id "drawer-wrapper"}
        (om/build control-panel data {:opts {:route-chan route-chan}})
        (when (:active data)
          (om/build input-control
            ((:active data) (:hives data))
            {:state {:editing editing}
             :opts {:on-edit (partial on-edit #(end-edit owner))}}))
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (and open (not editing)) " show" " hide"))})))))

(defn to-save []
  (om/build places-info (:places data))
  (when (:active data)
    (om/build hive-info
      ((:active data) (:hives data))
      {:opts {:begin-edit (partial begin-edit owner)}})))

(defn app [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className (str "flex-container " (:orientation data))}
        (dom/div #js {:className "flex-content"}
          (om/build map/goog-map data {:opts {:add (partial add-hive data)
                                              :activate (partial activate-hive data)
                                              :delete (partial delete-hive data)}}))
        (om/build drawer data)))))

(defn render []
  (handleOrientation)
  (.addEventListener js/window "resize" handleOrientation)
  (db-new
    #(db-get-all (fn []
                   (om/root app app-state {:target (.getElementById js/document "content")})))))
