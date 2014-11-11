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
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.history.EventType :as EventType])
  (:import goog.History))

(def history (History.))

(enable-console-print!)

(def app-state
  (atom {:orientation nil
         :active nil
         :places [{:name "All"
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

(defn display-fade-in [show]
  (if show
    #js {:opacity 1
         :transition "opacity .3s"}
    #js {:opacity 0}))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (:lat lat-lng)
             "lng=" (:lng lat-lng))))

(defn fdate-now []
  (let [d (js/Date.)
        date (.getDate d)
        month (+ (.getMonth d) 1)
        year (.getFullYear d)]
    (str month "/" date "/" year)))

(defn floormat [& args]
  (apply gstring/format args))

; switch to haversine
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
   :pos pos
   :notes ""})

(defn nearest [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn activate-hive [owner data path]
  (let [key (last path)]
    (om/transact! data :active #(if (= key %) nil key))
    (if (:active @data)
      (put! (om/get-shared owner :nav-chan) ["hive" path])
      (put! (om/get-shared owner :nav-chan) ["place" (take 2 path)]))))

;have hive only render from active to bypass having to check for nil on drawer child
(defn add-hive [owner data pos]
  (let [hive (new-hive pos)]
    (om/transact! data [:places 0 :hives] #(assoc % (:key hive) hive))
    (activate-hive owner data [:places 0 :hives (:key hive)])
    (db-add-hive hive)))

(defn delete-hive [owner data path]
  (if (= (last path) (:active @data))
    (let [hive (get-in @data path)]
      (om/transact! data (butlast path) #(dissoc % (last path)))
      (activate-hive owner data (conj (vec (butlast path)) (first (nearest hive (get-in @data (butlast path)))))))
    (om/transact! data (butlast path) #(dissoc % (last path))))
  (db-delete-hive (last path)))

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

(defn input [data owner {:keys [id className edit-key on-edit on-key-down] :as opts}]
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
                                (js/setTimeout #(on-edit data edit-key owner) 100))
                      :dangerouslySetInnerHTML #js {:__html (edit-key data)}})
        (dom/div #js {:id "input-ok"
                      :style (display (not (= exit-type "out")))
                      :onClick (fn []
                                 (om/set-state! owner :exit-type "btn")
                                 (js/setTimeout #(on-edit data edit-key owner) 100))}
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

(defn name-select [data owner {:keys [route] :as opts}]
  (om/component
    (dom/a #js {:className "name-select"
                :onClick #(put! (om/get-shared owner :nav-chan) [route (om/path data)])}
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

(defn navicon [data owner {:keys [toggle-open] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:active false})

    om/IRenderState
    (render-state [_ {:keys [active editing]}]
      (dom/div #js {:className (str "navicon" (when active " active"))
                    :style (display-fade-in (nil? editing))
                    :onClick (fn []
                               (om/update-state! owner :active #(not %))
                               (toggle-open))}))))

(defn control-panel [data owner opts]
  (reify
    om/IRenderState
    (render-state [_ {:keys [open editing]}]
      (dom/div #js {:className "control-panel"}
        (dom/div #js {:id "nav-control"
                      :style (display-fade-in open)}
          (dom/span #js {:id "nav-label"} ":hive all/Cat!")
          (dom/div #js {:id "nav-back-btn"
                        :className "icon-arrow-left2"}))
        ;(dom/div #js {:id "divide"})
        (om/build navicon data {:opts opts
                                :state {:editing editing}})))))

(defn toggle-open [owner]
  (om/update-state! owner :open not))

(defn route! [owner child child-ks child-opts]
  (om/set-state! owner :child child)
  (om/set-state! owner :child-ks child-ks)
  (om/set-state! owner :child-opts (or child-opts {})))

(defn drawer [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:open false
       :editing nil
       :child places-info
       :child-ks [:places]
       :child-opts {}})

    om/IWillMount
    (will-mount [_]
      (go-loop []
        (let [route (<! (om/get-shared owner :nav-chan))]
          (case (first route)
            "places" (route! owner places-info (second route))
            "place"  (route! owner place-info (second route))
            "hive"   (do
                       (om/set-state! owner :open true)
                       (om/update! data :active (last (second route)))
                       (route! owner hive-info (second route)
                         {:opts {:begin-edit (partial begin-edit owner)}}))))
        (recur)))

    om/IRenderState
    (render-state [_ {:keys [open editing nav-chan child child-ks child-opts]}]
      (dom/div #js {:id "drawer-wrapper"}
        (om/build control-panel data {:opts {:toggle-open (partial toggle-open owner)}
                                      :init-state {:editing editing}
                                      :state {:open open
                                              :editing editing}})
        (when (:active data)
          (om/build input-control
            ((:active data)  (:hives (get (:places data) 0)))
            {:state {:editing editing}
             :opts {:on-edit (partial on-edit #(end-edit owner))}}))
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (and open (not editing)) " show" " hide"))}
          (when (get-in data child-ks)
           (om/build child (get-in data child-ks) child-opts)))))))

(defn app [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className (str "flex-container " (:orientation data))}
        (dom/div #js {:className "flex-content"}
          (om/build map/l-map data {:opts {:add (partial add-hive owner data)
                                              :activate (partial activate-hive owner data)
                                              :delete (partial delete-hive owner data)}}))
        (om/build drawer data)))))

(defn render []
  (handleOrientation)
  (.addEventListener js/window "resize" handleOrientation)
  (db-new
    #(db-get-all (fn []
                   (om/root app app-state {:target (.getElementById js/document "content")
                                           :shared {:nav-chan (chan)}})))))
