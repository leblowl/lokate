(ns hivez.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [clojure.string :as str]
            [hivez.map :as map]
            [hivez.input :refer [input]]
            [hivez.util :refer [display display-fade-in fdate-now floormat distance]]
            [hivez.db :refer [db-new db-add db-delete db-get-all]]))

(enable-console-print!)

(def app-state
  (atom {:orientation nil
         :active nil
         :places []}))

(defn orientation []
  (swap! app-state #(assoc % :orientation
                           (if (> (.-height (.-screen js/window))
                                  (.-width (.-screen js/window)))
                             "portrait"
                             "landscape"))))

(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (:lat lat-lng)
             "lng=" (:lng lat-lng))))

(defn nearest [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn new-place [id]
  {:name ""
   :hives {}
   :active true
   :id id})

(defn add-place [places]
  (om/transact! places (fn [places]
                         (into [] (map #(assoc % :active false) places))))
  (let [id (count (:places @app-state))
        new (new-place id)]
    (om/transact! places #(conj % new))
    (db-add new)))

(defn activate-place [places place]
    (om/transact! places (fn [places]
                           (into [] (map #(assoc % :active false) places))))
    (om/update! place :active true))

(defn new-hive [pos]
  {:key (pos-key pos)
   :name ""
   :origin (fdate-now)
   :pos pos
   :notes ""
   :active true})

(defn add-hive [owner data pos]
  (when-let [active (:id (first (filter :active (:places @data))))]
    (let [hive (new-hive pos)]
      (om/transact! data [:places active :hives] #(assoc % (:key hive) hive))
      (db-add (active (:places @data))))))

(defn activate-hive [place hive]
  (om/transact! place :hives (fn [hives]
                               (into {} (for [[k v] hives] [k (assoc v :active false)]))))
  (om/update! hive :active true))

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

(defn on-edit [cb data key owner]
  (om/update! data key
    (gstring/unescapeEntities (.-innerHTML (om/get-node owner key))))
  (db-add (dissoc (first (filter :active (:places @app-state))) :active))
  (cb))

(defn input-control [data owner {:keys [on-edit] :as opts}]
  (reify
    om/IRenderState
    (render-state [_ {:keys [editing]}]
      (dom/div #js {:id "input-ctrl"}
        (case editing
          :name (om/build input data {:opts {:id "name-input"
                                             :className "name input single-line"
                                             :edit-key :name
                                             :on-edit on-edit
                                             :on-key-down (fn [e] (if (= (.-keyCode e) 13) false))}})
          :notes (om/build input data {:opts {:id "notes-input"
                                              :className "notes input"
                                              :edit-key :notes
                                              :on-edit on-edit}})
          nil)))))

(defn name-select [data owner {:keys [action] :as opts}]
  (om/component
    (dom/a #js {:className "name-select"
                :onClick #(action data)}
      (dom/span #js {:className "name-select-title"} (:name data)))))

(defn places-info [places owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "places"}
        (apply dom/div #js {:className "select-list"}
k         (om/build-all name-select places {:opts {:action (partial activate-place places)}}))))))

(defn place-info [place owner {:keys [begin-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "place-info"}
        (dom/span #js {:id "name-editable"
                       :className "name editable single-line"
                       :onClick #(begin-edit :name)
                       :data-ph "Name"
                       :dangerouslySetInnerHTML #js {:__html (:name place)}})
        (apply dom/div #js {:className "select-list"}
          (dom/span nil "hives: ")
          (om/build-all name-select (vals (:hives place)) {:opts {:action (partial activate-hive place)}}))))))

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

(defn back-btn [active owner]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left2"
                  :onClick (fn []
                             (om/update! active :active false))})))

(defn add-place-btn [places owner]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "icon-plus"
                  :onClick #(add-place places)})))

(defn control-panel [active owner {:keys [control-fn path] :as opts}]
  (reify
    om/InitState
    (init-state [_]
      {:path-str ""})

    om/IWillReceiveProps
    (will-receive-props [_ next-props]
      (om/set-state! owner :path-str
        (str/join "/" (map #(:name (get-in @app-state %))
                        (loop [ks (om/path next-props)
                               result '()]
                          (if-not (empty? ks)
                            (recur (drop-last 2 ks) (conj result ks))
                            result))))))

    om/IRenderState
    (render-state [_ {:keys [open editing path-str]}]
      (dom/div #js {:className "control-panel"}
        (dom/div #js {:id "nav-control"
                      :style (display-fade-in (and open (not editing)))}
          (dom/span #js {:id "nav-label"} (str path " " path-str))
          (om/build control-fn active))
        (om/build navicon data {:opts opts
                                :state {:editing editing}})))))

(defn toggle-open [owner]
  (om/update-state! owner :open not))

(defn drawer [active owner {:keys [child-fn control-fn path] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:open false
       :editing nil})

    om/IRenderState
    (render-state [_ {:keys [open editing orientation]}]
      (dom/div #js {:id "drawer-wrapper"}
        (om/build control-panel
          active
          {:opts {:toggle-open (partial toggle-open owner)
                  :control-fn control-fn
                  :path path}
           :init-state {:editing editing}
           :state {:open open
                   :editing editing}})

        (when editing
          (om/build input-control
            active
            {:state {:editing editing}
             :opts {:on-edit (partial on-edit #(end-edit owner))}}))

        (dom/div #js {:id "drawer"
                      :className (str orientation
                                   (if (and open (not editing)) " show" " hide"))}
          (om/build child-fn active {:opts {:begin-edit (partial begin-edit owner)}}))))))

(defn app [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className (str "flex-container " (:orientation data))}
        (dom/div #js {:className "flex-content"}
          (om/build map/l-map data {:opts {:add (partial add-hive owner data)
                                           :activate (partial activate-hive owner data)
                                           :delete (partial delete-hive owner data)}}))

        (let [active-place (first (filter :active (:places data)))
              active-hive  (first (filter :active (vals (:hives active-place))))]
          (cond
            active-hive (om/build drawer active-hive {:state {:orientation (:orientation data)}
                                                      :opts {:child-fn hive-info
                                                             :control-fn back-btn
                                                             :path ":hive"}})

            active-place (om/build drawer active-place {:state {:orientation (:orientation data)}
                                                        :opts {:child-fn place-info
                                                               :control-fn back-btn
                                                               :path ":place"}})

            :else (om/build drawer (:places data) {:state {:orientation (:orientation data)}
                                                   :opts {:child-fn places-info
                                                          :control-fn add-place-btn
                                                          :path ":places"}})))))))

(defn render []
  (orientation)
  (.addEventListener js/window "resize" orientation)
  (db-new
    (fn []
      (db-get-all
        (fn [result] (swap! app-state
                      (fn [m]
                        (update-in m [:places]
                          #(conj % (js->clj (.-value result) :keywordize-keys true))))))
        (fn []
          (om/root app app-state {:target (.getElementById js/document "content")}))))))
