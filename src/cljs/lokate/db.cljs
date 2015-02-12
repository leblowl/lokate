(ns lokate.db
  (:require [goog.object :as gobject]))

(def db (atom nil))

(defn error [e]
  (.error js/console "An IndexedDB error has occured!" e))

(defn new [cb]
  (let [version 1
        request (.open js/indexedDB "lokate" version)]
    (set! (.-onupgradeneeded request) (fn [e]
                                        (reset! db (.. e -target -result))
                                        (set! (.. e -target -transaction -onerror) error)
                                        (.createObjectStore @db "collection" #js {:keyPath "id"})
                                        (.createObjectStore @db "resource" #js {:keyPath "id"})
                                        (.createObjectStore @db "setting" #js {:keyPath "id"})
                                        (.createObjectStore @db "history")))
    (set! (.-onsuccess request) (fn [e]
                                  (reset! db (.. e -target -result))
                                  (cb)))
    (set! (.-onerror request) error)))

(defn add
  ([db-name data]
   (add db-name data nil))
  ([db-name data key]
   (let [transaction (.transaction @db #js [db-name] "readwrite")
         store (.objectStore transaction db-name)
         request (if key
                   (.put store (clj->js data) key)
                   (.put store (clj->js data)))]
     (set! (.-onerror request) error))))

(defn delete [db-name key]
  (let [transaction (.transaction @db #js [db-name] "readwrite")
        store (.objectStore transaction db-name)
        request (.delete store (if (keyword? key) (name key) key))]
    (set! (.-onerror request) error)))

(defn get-all [db-name for-each cb]
  (let [transaction (.transaction @db #js [db-name] "readonly")
        store (.objectStore transaction db-name)
        keyRange (.lowerBound js/IDBKeyRange 0)
        cursorRequest (.openCursor store keyRange)]
    (set! (.-onsuccess cursorRequest)
      (fn [e]
        (if-let [result (.. e -target -result)]
          (do
            (for-each result)
            (.continue result))
          (cb))))))

(defn init-remoteStorage []
  (.defineModule js/RemoteStorage "collections"
    (fn [privClient pubClient]

      (.declareType privClient "collection"
        (clj->js
          {:description "a collection of units"
           :type "object"
           :properties {:id {:type "string"
                             :format "id"}
                        :title {:type "string"}}}))
      (clj->js
        {:exports
         {:addCollection (fn [collection]
                            (.storeObject privClient "collection"
                              (name (:id collection)) (clj->js collection)))
          :getCollections (fn []
                            (-> privClient
                              (.getAll "")
                              (.then
                                #(.log js/console (pr-str (js->clj %)))
                                #(.log js/console (str "error " %)))))}})))

  (-> js/remoteStorage .-access (.claim "collections" "rw"))
  (.on js/remoteStorage "connecting" #(.log js/console "connecting"))
  (.on js/remoteStorage "authing" #(.log js/console "authing"))
  (.on js/remoteStorage "error" #(.log js/console (str "error " %)))
  (.on js/remoteStorage "connected" #(.log js/console "connected"))
  (.connect js/remoteStorage "leblowl@5apps.com"))
