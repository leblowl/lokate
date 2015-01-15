(ns lokate.util
  (:require
   [clojure.string :as string]
   [goog.string :as gstring]
   [datascript :as d]))

(defn system-attr
  ([db attr]
   (get (d/entity db 0) attr))
  ([db attr & attrs]
   (mapv #(system-attr db %) (concat [attr] attrs))))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn display-fade-in [show]
  (if show
    #js {:opacity 1
         :transition "opacity .3s"}
    #js {:opacity 0}))

(defn fdate-now []
  (let [d (js/Date.)
        date (.getDate d)
        month (+ (.getMonth d) 1)
        year (.getFullYear d)]
    (str month "/" date "/" year)))

(defn floormat [& args]
  (apply gstring/format args))

; switch to haversine
(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn blankf [s]
  (when (not (string/blank? s))
    s))
