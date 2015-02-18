(ns lokate.db
  (:require [goog.object :as gobject]
            [clojure.string :as str]
            [lokate.util :as u]))

(defn log-error [err]
  (.log js/console (str "[error] " err)))

(defn def-lokate []
  (.defineModule js/RemoteStorage "lokate"
    (fn [privClient pubClient]
      (.declareType privClient "collection"
        (clj->js
          {:description "a collection of units"
           :type "object"}))

      (.declareType privClient "resource"
        (clj->js
          {:description "something that can be tracked by total count. ex: '# of beers in the fridge'"
           :type "object"}))

      (.declareType privClient "setting"
        (clj->js
          {:description "an app setting"
           :type "object"}))

      (.declareType privClient "history"
        (clj->js
          {:description "the commit stack for a particular unit"
           :type "array"}))

      (clj->js
        {:exports
         {:put (fn [type k v pass fail]
                 (let [path (str type "/" (if (keyword? k) (name k) k))]
                   (.storeObject privClient type path (clj->js v))))

          :get (fn [path pass fail]
                 (if (u/ends-with? path "/")
                   (-> privClient (.getAll path) (.then pass fail))
                   (-> privClient (.getObject path) (.then pass fail))))

          :delete (fn [type k pass fail]
                    (let [path (str type "/" (if (keyword? k) (name k) k))]
                      (-> privClient (.remove path) (.then pass fail))))}}))))

(defn connect [user-address]
  (if (str/blank? user-address)
    (.disconnect js/remoteStorage)
    (do
      (.disconnect js/remoteStorage)
      (.connect js/remoteStorage user-address))))

(defn init []
  (def-lokate)
  (-> js/remoteStorage .-access (.claim "lokate" "rw")))

(defn put [type k v]
  (-> js/remoteStorage
      .-lokate
      (.put type k v #() log-error)))

(defn fetch
  ([path pass]
   (fetch path pass #()))
  ([path pass fail]
   (-> js/remoteStorage
       .-lokate
       (.get path pass fail))))

(defn delete [type k]
  (-> js/remoteStorage
      .-lokate
      (.delete type k #() log-error)))
