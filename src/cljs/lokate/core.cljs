(ns lokate.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [clojure.string :as str]
            [lokate.map :as map]
            [lokate.components :refer [input select-list]]
            [lokate.util :refer [display display-fade-in fdate-now floormat distance]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(enable-console-print!)


(defn pos-key [lat-lng]
  (keyword (str
             "lat=" (:lat lat-lng)
             "lng=" (:lng lat-lng))))

(defn nearest [hive hives]
  (apply min-key #(distance (:pos hive) (:pos (second %))) (seq hives)))

(defn new-hive [pos]
  {:key (pos-key pos)
   :name nil
   :origin (fdate-now)
   :pos pos
   :notes nil})

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
;  (db-add (get-in @app-state (:active-place @app-state)))
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

(defn back-btn [data owner {:keys [type-key] :as opts}]
  (om/component
    (dom/div #js {:id "nav-back-btn"
                  :className "icon-arrow-left2"
                  :style (display (not (= 1 (count (:history (:drawer data))))))
                  :onClick #(put! (om/get-shared owner :nav) [:return])})))


(defn open? [drawer]
  (true? (:open drawer)))

(defn toggle-open [drawer]
  (om/transact! drawer :open not))

(defn navicon [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className (str "navicon" (when (open? (:drawer data)) " active"))
                    :onClick (fn []
                               (toggle-open (:drawer data)))}))))

(defn control-panel [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:path-str "hello universe!"})

    om/IRenderState
    (render-state [_ {:keys [path-str]}]
      (dom/div #js {:className "navigation-container"}
        (dom/div #js {:className "banner-container"}
          (dom/span #js {:className "banner-icon"}
            (gstring/unescapeEntities "&#11041;"))
          (dom/span #js {:className "banner-title"}
            "lokate"))
        (dom/div #js {:className "control-panel"}
          (dom/div #js {:id "nav-control"
                        :style (display-fade-in (open? (:drawer data)))})
          (om/build back-btn data)
          (om/build navicon data))))))

(defn drawer [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "drawer-wrapper"}
        (dom/div #js {:id "drawer"
                      :className (str (:orientation data)
                                   (if (open? (:drawer data)) " show" " hide"))})))))

(defn app [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (put! (om/get-shared owner :nav) [:route "/"]))
    om/IRender
    (render [_]
      (dom/div #js {:id "app"}
        (om/build control-panel data)
        (dom/div #js {:className (str "flex-container " (:orientation data))}
          (dom/div #js {:className "flex-content"}
            (om/build map/l-map data))
          (om/build drawer data))))))

(defn render [app-state nav-chan]
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:nav nav-chan}}))
