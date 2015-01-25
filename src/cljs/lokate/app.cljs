(ns lokate.app
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.db :as db]
            [lokate.components :as c]
            [lokate.core :as core]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.unit :as unit]
            [lokate.resources :as resources])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def app-state
  (atom {:model {:collections    {}
                 :resource-types {}}
         :view  {:app        {:orientation ""
                              :path        [:home]}
                 :drawer     {:open?       false
                              :maximized?  false}
                 :resources  {:selected    nil}}}))

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

(defn set-orientation []
  (swap! app-state
    #(assoc-in % [:view :app :orientation]
       (if (> (.-height (.-screen js/window))
              (.-width (.-screen js/window)))
         "portrait"
         "landscape"))))

(defn set-drawer [k v]
  (swap! app-state
    #(assoc-in % [:view :drawer k] v)))

(defn update-drawer [k fun]
  (swap! app-state
    #(update-in % [:view :drawer k] fun)))

(let [events (async/sub event-bus-pub :drawer (async/chan))]
  (go-loop [e (async/<! events)]
    (case (second e)
      :set (apply set-drawer (drop 2 e))
      :update (apply update-drawer (drop 2 e)))
    (recur (<! events))))

(defn set-path
  ([path & args]
   (swap! app-state
     #(assoc-in % [:view :app :path] [path args]))))

(let [events (async/sub event-bus-pub :set-path (async/chan))]
  (go-loop [e (<! events)]
    (apply set-path (rest e))
    (recur (<! events))))

(defn add-collection [data title]
  (let [collection {:id (keyword (u/uuid))
                    :title title
                    :timestamp (u/now)
                    :units {}}]
    (om/update! data [:model :collections (:id collection)] collection :collection)
    collection))

(defn add-unit [data cid latlng title]
  (let [unit {:id (keyword (u/uuid))
              :title title
              :timestamp (u/now)
              :latlng latlng
              :status "green"
              :resources {}
              :cid cid}]
    (om/update! data [:model :collections cid :units (:id unit)] unit :unit)
    unit))

(defn add-resource-type [data title]
  (let [resource-type {:id (keyword (u/uuid))
                       :title title}]
    (om/update! data [:model :resource-types (:id resource-type)] resource-type :resource)))

(defn get-collections [data]
  (get-in data [:model :collections]))

(defn get-collection [data cid]
  (get-in data [:model :collections cid]))

(defn get-unit [data cid uid]
  (get-in data [:model :collections cid :units uid]))

(defn get-resource-types [data]
  (get-in data [:model :resource-types]))

(defn get-views [data]
  (let [drawer (-> data :view :drawer)
        [path args] (-> data :view :app :path)]
    (case path
      :home        (home/home-views drawer)
      :collections (collections/collections-views drawer
                     (get-collections data))
      :collection  (collections/collection-views drawer
                     (apply get-collection data args))
      :unit        (unit/unit-views drawer
                     (-> data :view :app :path second last)
                     (apply get-unit data args)
                     (get-resource-types data))
      :resources   (resources/resource-types-views drawer
                     (-> data :view :resources)
                     (get-resource-types data))
      :settings    "do something")))

(defn app [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (u/sub-go-loop event-bus-pub :add-collection
        (fn [e]
          (c/display-input
            "Collection name"
            "Untitled collection"
            #(let [collection (add-collection data %)]
               (set-path :app :collection (:id collection))))))

      ; adds unit to the currently selected collection
      (u/sub-go-loop event-bus-pub :add-unit
        (fn [e]
          (c/display-input
            "Unit name"
            "Untitled unit"
            #(let [selected-cid (-> @app-state :view :app :path second first)
                   unit (add-unit data selected-cid (second e) %)]
               (set-path :app :unit selected-cid (:id unit))))))

      (u/sub-go-loop event-bus-pub :add-resource
        (fn [e]
          (c/display-input
            "Resource name"
            "Untitled resource"
            #(add-resource-type data %)))))

    om/IRender
    (render [_]
      (let [[nav-view drawer-view] (get-views data)]
        (om/build core/window [data nav-view drawer-view])))))

(defn keywordize-ids
  "Recursively transforms all ids from strings to keywords."
  [m]
  (let [f (fn [[k v]] (if (u/ends-with? (name k) "id") [k (keyword v)] [k v]))]
    ;; only apply to maps
    (clojure.walk.postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))

(defn populate-model [key result]
  (swap! app-state
    (fn [m]
      (assoc-in m [:model key (keyword (.-key result))]
        (keywordize-ids (js->clj (.-value result) :keywordize-keys true))))))

(defn init-app-state [cb]
 (db/new
   (->> cb
     (partial db/get-all "resource-type" #(populate-model :resource-types %))
     (partial db/get-all "collection" #(populate-model :collections %)))))

(defn render []
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:event-bus event-bus
                                   :event-bus-pub event-bus-pub}
                          :tx-listen (fn [m root-cursor]
                                       (case (:tag m)
                                         :unit (let [collection (get-in @app-state
                                                                  [:model :collections (-> m :new-value :cid)])]
                                                 (db/add "collection" collection))
                                         :collection (db/add "collection" (-> m :new-value))
                                         :resource (db/add "resource-type" (-> m :new-value))
                                         nil))}))

(defn go! []
  (set-orientation)
  (.addEventListener js/window "resize" set-orientation)
  (init-app-state render))

(go!)
