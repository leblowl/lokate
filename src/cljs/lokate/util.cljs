(ns lokate.util
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [clojure.string :as string]
            [goog.string :as gstring]
            [goog.string.format]
            [cljs-uuid-utils :as uuid])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

;; add to system data
(def status-colors
  {"green"  "#bbf970"
   "yellow" "#ffc991"
   "red"    "#ff8e7f"})

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

(defn mmap [f m]
  (into {} (for [[k v] m]
             [k (f v)])))

(defn mfilter [f m]
  (select-keys m (for [[k v] m :when (f v)] k)))

(defn sub-go-loop [ch topic fun]
  (let [events (async/sub ch topic (async/chan))]
    (go-loop [e (<! events)]
      (fun e)
      (recur (<! events)))))

(defn ends-with? [str suffix]
  (not= (.indexOf str suffix (- (count str) (count suffix))) -1))

(defn share [owner msg]
  (async/put! (:event-bus (om/get-shared owner))
    msg))
