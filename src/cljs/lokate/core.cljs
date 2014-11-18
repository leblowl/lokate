(ns lokate.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [clojure.string :as str]
            [lokate.map :as map]
            [lokate.input :refer [input]]
            [lokate.util :refer [display display-fade-in fdate-now floormat distance]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(enable-console-print!)

(def app-state
  (atom {:orientation nil
         :active nil
         :places []
         :active-place nil
         :active-hive nil}))

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
   :id id})

(defn new-hive [pos]
  {:key (pos-key pos)
   :name ""
   :origin (fdate-now)
   :pos pos
   :notes ""})

(defn tselect [data type-key select-path]
  (when (= type-key :active-hive)
    (om/update! data :active-place (into [] (drop-last 2 select-path))))
  (om/transact! data type-key #(if-not (= % select-path) select-path nil)))

(defn delete [data type-key select-path]
  (om/transact! data (pop select-path) #(dissoc % (peek select-path)))
  (om/update! data type-key nil))

(defn add-hive [data pos]
  (when-let [select-path (:active-place @data)]
    (let [hive (new-hive pos)]
      (om/transact! data select-path #(assoc-in % [:hives (:key hive)] hive))
     (om/update! data :active-hive (conj select-path :hives (:key hive)))
     (db-add (get-in @data select-path)))))

(defn add-place [data]
  (let [id (count (:places @data))]
    (om/transact! data :places #(conj % (new-place id)))
    (om/update! data :active-place [:places id])
    (db-add (get-in @data (:active-place @data)))))

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
  (db-add (get-in @app-state (:active-place @app-state)))
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

(defn name-select [data owner {:keys [type-key] :as opts}]
  (om/component
    (dom/a #js {:className "name-select"
                :onClick #(put! (om/get-shared owner :action-chan)
                            [:select type-key (om/path data)])}
      (dom/span #js {:className "name-select-title"} (:name data)))))

(defn places-info [places owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "places"}
        (apply dom/div #js {:className "select-list"}
          (om/build-all name-select places {:opts {:type-key :active-place}}))))))

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
          (om/build-all name-select (vals (:hives place)) {:opts {:type-key :active-hive}}))))))

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
    om/IRenderState
    (render-state [_ {:keys [open editing]}]
      (dom/div #js {:className (str "navicon" (when open " active"))
                    :style (display-fade-in (nil? editing))
                    :onClick (fn []
                               (toggle-open))}))))

(defn back-btn [active owner {:keys [type-key] :as opts}]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left2"
                  :onClick #(put! (om/get-shared owner :action-chan)
                              [:select type-key (om/path active)])})))

(defn add-place-btn [places owner {:keys [type-key] :as opts}]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "icon-plus"
                  :onClick #(put! (om/get-shared owner :action-chan)
                              [:add-place])})))

(defn control-panel [active owner {:keys [control-fn type-key] :as opts}]
  (reify
    om/IInitState
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
          (dom/span #js {:id "nav-label"} (str (str/replace (str type-key) #"active-" "") " " path-str))
          (om/build control-fn active {:opts opts}))
        (om/build navicon active {:opts opts
                                  :state {:open open
                                          :editing editing}})))))

(defn toggle-open [owner]
  (om/update-state! owner :open not))

(defn drawer [active owner {:keys [child-fn control-fn type-key] :as opts}]
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
                  :type-key type-key}
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
    om/IWillMount
    (will-mount [_]
      (go-loop []
        (let [action (<! (om/get-shared owner :action-chan))]
          (case (first action)
            :select (apply tselect data (rest action))
            :delete (apply delete data (rest action))
            :add-hive (add-hive data (second action))
            :add-place (add-place data)))
        (recur)))

    om/IRender
    (render [_]
      (dom/div #js {:className (str "flex-container " (:orientation data))}
        (dom/div #js {:className "flex-content"}
          (om/build map/l-map data))

        (let [active-place (:active-place data)
              active-hive  (:active-hive data)]
          (cond
            active-hive (om/build drawer
                          (get-in data active-hive) {:state {:orientation (:orientation data)
                                                             :open true}
                                                     :opts {:child-fn hive-info
                                                            :control-fn back-btn
                                                            :type-key :active-hive}})

            active-place (om/build drawer
                           (get-in data active-place) {:state {:orientation (:orientation data)
                                                               :open true}
                                                       :opts {:child-fn place-info
                                                              :control-fn back-btn
                                                              :type-key :active-place}})

            :else (om/build drawer (:places data) {:state {:orientation (:orientation data)}
                                                   :opts {:child-fn places-info
                                                          :control-fn add-place-btn
                                                          :type-key :places}})))))))

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
          (om/root app app-state {:target (.getElementById js/document "content")
                                  :shared {:action-chan (chan)}}))))))
