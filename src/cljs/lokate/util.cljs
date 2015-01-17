(ns lokate.util
  (:require
   [clojure.string :as string]
   [goog.string :as gstring]
   [cljs-uuid-utils :as uuid]))

(defn uuid []
  (str (uuid/make-random-uuid)))

(defn now []
  (.now js/Date))

(defn format [& args]
  (apply gstring/format args))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn fade-in [show]
  (if show
    #js {:opacity 1
         :transition "opacity .3s"}
    #js {:opacity 0}))

; switch to haversine
(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn blankf [s]
  (when (not (string/blank? s)) s))

(defn get-units [collections]
  (reduce into {}
    (map :units (vals collections))))

(defn get-selected [data]
  (first (filter :selected (vals data))))
