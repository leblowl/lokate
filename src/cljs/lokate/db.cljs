(ns lokate.db)

(def db (atom nil))

(defn db-error [e]
  (.error js/console "An IndexedDB error has occured!" e))

(defn db-new [cb]
  (let [version 1
        request (.open js/indexedDB "lokate" version)]
    (set! (.-onupgradeneeded request) (fn [e]
                                        (reset! db (.. e -target -result))
                                        (set! (.. e -target -transaction -onerror) db-error)
                                        (.createObjectStore @db "collection" #js {:keyPath "id" :autoIncrement true})))
    (set! (.-onsuccess request) (fn [e]
                                  (reset! db (.. e -target -result))
                                  (cb)))
    (set! (.-onerror request) db-error)))

(defn db-add [data]
  (let [transaction (.transaction @db #js ["collection"] "readwrite")
        store (.objectStore transaction "collection")
        request (.put store (clj->js data))]
    (set! (.-onerror request) db-error)))

(defn db-delete [key]
  (let [transaction (.transaction @db #js ["collection"] "readwrite")
        store (.objectStore transaction "collection")
        request (.delete store key)]
    (set! (.-onerror request) db-error)))

(defn db-get-all [for-each cb]
  (let [transaction (.transaction @db #js ["collection"] "readonly")
        store (.objectStore transaction "collection")
        keyRange (.lowerBound js/IDBKeyRange 0)
        cursorRequest (.openCursor store keyRange)]
    (set! (.-onsuccess cursorRequest)
      (fn [e]
        (if-let [result (.. e -target -result)]
          (do
            (for-each result)
            (.continue result))
          (cb))))))
