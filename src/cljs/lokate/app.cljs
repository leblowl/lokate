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

(def tile-url "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
(def tile-attr "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors")

(def app-state
  (atom {:model {:collections      {}
                 :resources        {}
                 :settings         {:tile-url  {:id :tile-url
                                                :value tile-url}
                                    :tile-attr {:id :tile-attr
                                                :value tile-attr}}
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
    collection))

(defn add-unit [data cid latlng title]
  (let [unit {:id (keyword (u/uuid))
              :title title
              :timestamp (u/now)
              :latlng latlng
              :status "green"
              :resources {}
              :cid cid}]
    (om/update! data [:model :collections cid :units (:id unit)] unit :collection)
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

(defn new-collection [data]
  (c/display-input
    "Collection name"
    "Untitled collection"
    #(let [collection (add-collection data %)]
       (set-route :collection (:id collection)))))

(defn delete-collection [data id]
  (om/transact! data [:model :collections] #(dissoc % id) :collection))

(defn new-unit [data latlng]
  (c/display-input
    "Unit name"
    "Untitled unit"
    #(let [selected-cid (-> @app-state :view :window :location second first)
           unit (add-unit data selected-cid latlng %)]
       (set-route :unit selected-cid (:id unit)))))

(defn new-resource [data type]
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
      #(add-resource data %))))

(defn delete-resource [data id]
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
    :collection))

(defn add-setting [data k v]
  (om/update! data [:model :settings k] {:id k :value v} :setting))

(defn commit! [data cid uid commit]
  (om/transact! data [:model :history uid]
    #(conj % commit) :history)
  (om/transact! data [:model :collections cid :units uid]
    #(merge % (:data commit)) :collection))

(defn handle-event [data [cmd & args]]
  (case cmd
    :add-collection (new-collection data)
    :delete-collection (apply delete-collection data args)
    :add-unit (apply new-unit data args)
    :add-resource (apply new-resource data args)
    :delete-resource (apply delete-resource data args)
    :add-setting (apply add-setting data args)
    :commit! (apply commit! data args)))

(defn init-model [data k v]
  (om/transact! data [:model k]
    #(merge % (-> v (js->clj :keywordize-keys true) u/keywordize-ids))))

(defn init-app-model [data]
  (db/fetch "collection/" (partial init-model data :collections))
  (db/fetch "resource/"   (partial init-model data :resources))
  (db/fetch "setting/"    (partial init-model data :settings))
  (db/fetch "history/"    (partial init-model data :history)))

(defn app [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (init-app-model data)
      (u/sub-go-loop event-bus-pub :app
        #(handle-event data (rest %))))

    om/IRender
    (render [_]
      (om/build core/window [(-> data :view :window) data]))))

(defn update-db [type old new]
  (let [to-add (set/difference (set new) (set old))
        to-delete (set/difference (u/keyset old) (u/keyset new))]
    (dorun (map #(db/delete type %) to-delete))
    (dorun (map #(db/put type (first %) (second %)) to-add))))

(defn tx-listen [m root-cursor]
  (case (:tag m)
    :collection (update-db "collection"
                  (-> m :old-state u/get-collections)
                  (-> m :new-state u/get-collections))
    :resource   (update-db "resource"
                  (-> m :old-state u/get-resources)
                  (-> m :new-state u/get-resources))
    :setting    (update-db "setting"
                  (-> m :old-state u/get-settings)
                  (-> m :new-state u/get-settings))
    :history    (update-db "history"
                  (-> m :old-state u/get-history)
                  (-> m :new-state u/get-history))
    nil))

(defn render []
  (om/root app app-state {:target (.getElementById js/document "root")
                          :shared {:event-bus event-bus
                                   :event-bus-pub event-bus-pub}
                          :tx-listen tx-listen}))

(defn go! []
  (set-orientation)
  (.addEventListener js/window "resize" set-orientation)
  (db/init)
  (render))

(go!)
