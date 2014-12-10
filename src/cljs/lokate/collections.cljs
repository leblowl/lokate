(ns lokate.collections
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn new-place [id]
  {:name nil
   :hives {}
   :id id})

(defn add-place [data]
  (let [id (count (:places @data))]
    (om/transact! data :places #(conj % (new-place id)))
    (om/update! data :active-place [:places id])
    ;(db-add (get-in @data (:active-place @data)))
    ))

(defn add-place-btn [places owner {:keys [type-key] :as opts}]
  (om/component
    (dom/div #js {:id "nav-add-btn"
                  :className "icon-plus"
                  :onClick #(put! (om/get-shared owner :action-chan)
                              [:add-place])})))

(defn places-info [places owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "places"}
        (om/build parts/select-list places {:opts {:type-key :active-place
                                             :default "Untitled_Collection"}})))))
