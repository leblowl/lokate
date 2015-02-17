(ns lokate.db
  (:require [goog.object :as gobject]
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
           :type "object"}))

      (clj->js
        {:exports
         {:put (fn [type k v]
                 (let [path (str type "/" (if (keyword? k) (name k) k))]
                   (.storeObject privClient type path (clj->js v))))

          :get (fn [path pass fail]
                 (if (u/ends-with? path "/")
                   (-> privClient (.getAll path) (.then pass fail))
                   (-> privClient (.getObject path) (.then pass fail))))

          :delete (fn [path] (.remove privClient path))}}))))

(defn init []
  (def-lokate)
  (-> js/remoteStorage .-access (.claim "lokate" "rw"))
  (.on js/remoteStorage "error" log-error)
  (.connect js/remoteStorage "lucas@192.168.1.146:10555"))

(defn fetch
  ([path pass]
   (fetch path pass #()))
  ([path pass fail]
   (-> js/remoteStorage
       .-lokate
       (.get path pass fail))))
