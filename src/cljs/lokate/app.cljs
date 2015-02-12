(ns lokate.app
  (:require [cljs.core.async :as async]
            [clojure.set :as set]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [lokate.util :as u]
            [lokate.db :as db]
            [lokate.components :as c]
            [lokate.core :as core]
            [lokate.home :as home]
            [lokate.collections :as collections]
            [lokate.unit :as unit]
            [lokate.check-in :as check-in]
            [lokate.resources :as resources]
            [lokate.settings :as settings])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def app-state
  (atom {:model {:collections      {}
                 :resources        {}
                 :settings         {}
                 :default-settings {}
                 :history          {}}
         :view  {:window {:orientation ""
                          :location    []
                          :views-fn    home/home-views
                          :views-state {}
                          :drawer      {:open?       false
                                        :maximized?  false}}}}))

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

(defn set-orientation []
  (swap! app-state
    #(assoc-in % [:view :window :orientation]
       (if (> (.-height (.-screen js/window))
              (.-width (.-screen js/window)))
         "portrait"
         "landscape"))))

(defn set-drawer [k v]
  (swap! app-state
    #(assoc-in % [:view :window :drawer k] v)))

(defn update-drawer [k fun]
  (swap! app-state
    #(update-in % [:view :window :drawer k] fun)))

(u/sub-go-loop event-bus-pub :drawer
  (fn [[topic cmd & args]]
    (case cmd
      :set (apply set-drawer args)
      :update (apply update-drawer args))))

(defn add-collection [data title]
  (let [collection {:id (keyword (u/uuid))
                    :title title
                    :timestamp (u/now)
                    :units {}}]
    (om/transact! data [:model :collections] #(assoc % (:id collection) collection) :collection)
    (-> js/remoteStorage
        .-collections
        (.addCollection collection)
        (.then #(.log js/console "success!") #(.log js/console (str "error: "%)))
        )
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

(defn add-resource [data title]
  (let [resource {:id (keyword (u/uuid))
                  :title title
                  :timestamp (u/now)}]
    (om/update! data [:model :resources (:id resource)] resource :resource)))

(defn add-resource-block [data title]
  (let [rsc-block {:id (keyword (u/uuid))
                   :type "block"
                   :title title
                   :timestamp (u/now)
                   :resources {}}]
    (om/update! data [:model :resources (:id rsc-block)] rsc-block :resource)
    rsc-block))

(defn prep-commit-data [unit]
  ;; only commit tracked data
  (select-keys unit [:id :status :resources]))

(defn new-commit [unit]
  {:id (keyword (u/uuid))
   :timestamp (u/now)
   :message ""
   :data (prep-commit-data unit)})

(defn init-default-settings []
  (swap! app-state
    #(assoc-in % [:model :settings]
       {:tile-url {:id :tile-url
                   :value "http://{s}.tile.osm.org/{z}/{x}/{y}.png"}
        :tile-attr {:id :tile-attr
                    :value "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"}})))

(defn set-location [route]
  (swap! app-state
    #(assoc-in % [:view :window :location] route)))

(defn get-views-data [[path args]]
  (case path
    :home        [home/home-views]
    :collections [collections/collections-views]
    :collection  [collections/collection-views]
    :unit        [unit/unit-views {:page :info}]
    :check-in    [check-in/check-in-views
                  {:page :resources
                   :commit (new-commit
                             (apply u/get-unit @app-state args))}]
    :resources   [resources/resources-views {:selected nil}]
    :settings    [settings/settings-views]))

(defn set-views
  ([fn]
   (set-views fn {}))
  ([fn state]
   (swap! app-state
     #(update-in % [:view :window] merge {:views-fn fn
                                          :views-state state}))))
(defn set-route [path & args]
  (set-location [path args])
  (apply set-views (get-views-data [path args])))

(u/sub-go-loop event-bus-pub :set-route
  (fn [[topic route]]
    (apply set-route route)))

(u/sub-go-loop event-bus-pub :window
  (fn [[topic cmd k vorfn]]
    (case cmd
      :set (swap! app-state #(assoc-in % [:view :window :views-state k] vorfn))
      :update (swap! app-state #(update-in % [:view :window :views-state k] vorfn)))))

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
               (set-route :collection (:id collection))))))

      (u/sub-go-loop event-bus-pub :delete-collection
        (fn [[topic id]]
          (om/transact! data [:model :collections] #(dissoc % id) :collection)))

      ; adds unit to the currently selected collection
      (u/sub-go-loop event-bus-pub :add-unit
        (fn [e]
          (c/display-input
            "Unit name"
            "Untitled unit"
            #(let [selected-cid (-> @app-state :view :window :location second first)
                   unit (add-unit data selected-cid (second e) %)]
               (set-route :unit selected-cid (:id unit))))))

      (u/sub-go-loop event-bus-pub :add-resource
        (fn [[topic type]]
          (if (= type "block")
            (c/display-input
              "Resource block name"
              "Untitled resource block"
              #(let [rsc-block (add-resource-block data %)]
                 (om/update! data [:view :window :views-state :selected]
                   (:id rsc-block))))
            (c/display-input
              "Resource name"
              "Untitled resource"
              #(add-resource data %)))))

      (u/sub-go-loop event-bus-pub :delete-resource
        (fn [[topic id]]
          (om/transact! data [:model :resources] #(dissoc % id) :resource)

          ;; remove all instances from blocks
          (om/transact! data [:model :resources]
            #(u/mmap (fn [rsc]
                       (if (u/block? rsc)
                         (update-in rsc [:resources] dissoc id)
                         rsc))
               %) :resource)

          ;; remove all instances of deleted resource in units
          (om/transact! data [:model :collections]
            (fn [colls]
              (u/mmap (fn [coll]
                        (update-in coll [:units]
                          #(u/mmap (fn [unit]
                                     (update-in unit [:resources] dissoc id))
                             %)))
                colls))
            :collection)))

      (u/sub-go-loop event-bus-pub :add-setting
        (fn [[topic k v]]
          (om/update! data [:model :settings k] {:id k :value v} :setting)))

      (u/sub-go-loop event-bus-pub :commit!
        (fn [[topic cid uid commit]]
          (om/transact! data [:model :history uid]
            #(conj % commit) :history)
          (om/transact! data [:model :collections cid :units uid]
            #(merge % (-> commit :data)) :unit))))

    om/IRender
    (render [_]
      (om/build core/window [(-> data :view :window) data]))))

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
  (init-default-settings)
  (db/init-remoteStorage)
  (db/new
    (->> cb
      (partial db/get-all "resource" #(populate-model :resources %))
      (partial db/get-all "collection" #(populate-model :collections %))
      (partial db/get-all "setting" #(populate-model :settings %))
      (partial db/get-all "history" #(populate-model :history %)))))

(defn update-db [db-name old new]
  (let [to-add (set/difference (set new) (set old))
        to-delete (set/difference (u/keyset old) (u/keyset new))]
    (dorun (map #(db/delete db-name %) to-delete))
    (dorun (map #(db/add db-name (second %)) to-add))))

(defn tx-listen [m root-cursor]
  (case (:tag m)
    :unit (let [collection (get-in @app-state
                             [:model :collections (-> m :new-value :cid)])]
            (db/add "collection" collection))
    :collection (update-db "collection"
                  (-> m :old-state u/get-collections)
                  (-> m :new-state u/get-collections))
    :resource (update-db "resource"
                (-> m :old-state u/get-resources)
                (-> m :new-state u/get-resources))
    :setting (update-db "setting"
               (-> m :old-state u/get-settings)
               (-> m :new-state u/get-settings))
    :history (db/add "history" (:new-value m) (-> m :new-value first :data :id name))
    nil))

(defn render []
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:event-bus event-bus
                                   :event-bus-pub event-bus-pub}
                          :tx-listen tx-listen}))

(defn go! []
  (set-orientation)
  (.addEventListener js/window "resize" set-orientation)
  (init-app-state render))

(go!)
