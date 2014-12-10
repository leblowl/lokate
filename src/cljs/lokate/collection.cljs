(ns lokate.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :as parts]))

(defn new-place [id]
  {:name nil
   :hives {}
   :id id})

(defn add-place [app-state]
  (let [id (count (:places @app-state))]
    (swap! app-state :places #(conj % (new-place id)))
    ;(db-add (get-in @data (:active-place @data)))
    ))


(defn collection-info [collection owner {:keys [begin-edit] :as opts}]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "place-info"}
        (dom/span #js {:id "name-editable"
                       :className "name editable single-line"
                       :onClick #(begin-edit :name)
                       :data-ph "Collection Name"
                       :dangerouslySetInnerHTML #js {:__html (:name collection)}})
        (om/build parts/select-list (:hives collection))))))

(defn render [app-state id]
  (when (= (count (:places app-state)) id)
    (add-place app-state))
  (om/root collection-info (get (:places app-state) id) {:target (.getElementById js/document "drawer")}))
