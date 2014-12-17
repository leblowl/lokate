(ns lokate.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [lokate.components :refer [select-list]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]))

(defn resources-controls
  [data owner]
  (om/component
    (dom/div #js {:id "resources-controls"}
      (dom/div #js {:id "add-resource-btn"
                    :className "btn icon-flow-line"})
      (dom/div #js {:id "add-resource-cluster-btn"
                    :className "btn icon-flow-tree"}))))

(defn resources-view
  [data owner]
  (om/component
    (dom/div #js {:className "resources"}
      (om/build select-list (:resources data)))))
