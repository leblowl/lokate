(ns lokate.db)

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
                                        (.createObjectStore @db "resource-type" #js {:keyPath "id"})))
    (set! (.-onsuccess request) (fn [e]
                                  (reset! db (.. e -target -result))
                                  (cb)))
    (set! (.-onerror request) error)))

(defn add [db-name data]
  (let [transaction (.transaction @db #js [db-name] "readwrite")
        store (.objectStore transaction db-name)
        request (.put store (clj->js data))]
    (set! (.-onerror request) error)))

(defn delete [db-name key]
  (let [transaction (.transaction @db #js [db-name] "readwrite")
        store (.objectStore transaction db-name)
        request (.delete store key)]
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
