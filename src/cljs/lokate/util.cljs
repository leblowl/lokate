(ns lokate.util
  (:require
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [clojure.string :as string]
   [goog.string :as gstring]
   [cljs-uuid-utils :as uuid]
   [lokate.components :as c]))

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

(defn render-overlay
  [overlay]
  (om/root (fn [overlay owner]
             (om/component
               (html [:div#overlay overlay])))
    overlay
    {:target (.getElementById js/document "overlay-root")}))

(defn render-input-overlay
  [title placeholder value on-edit]
  (render-overlay (om/build c/modal-input [title placeholder value on-edit])))

; switch to haversine
(defn distance
 "Euclidean distance between 2 points"
 [pos1 pos2]
 (Math/pow (+ (Math/pow (- (:lat pos1) (:lat pos2)) 2)
              (Math/pow (- (:lng pos1) (:lng pos2)) 2))
   0.5))

(defn blankf [s]
  (when (not (string/blank? s)) s))
