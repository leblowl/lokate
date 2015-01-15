(ns lokate.app
  (:require [cljs.core.async :as async]
            [om.core :as om :include-macros true]
            [datascript :as d]
            [datascript.core :as dc]
            [sablono.core :as html :refer-macros [html]]
            [lokate.db :refer [db-new db-add db-delete db-get-all]]
            [lokate.util :as u :refer [distance fdate-now]]
            [lokate.core :as core]
            [lokate.map :as map]
            [lokate.home :as home])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def conn (d/create-conn
  {:collection/title    {}

   :unit/title          {}
   :unit/timestamp      {}
   :unit/pos            {}
   :unit/status         {}
   :unit/collection     {:db/valueType :db.type/ref}

   :resource-type/title {}
   :resource/type       {:db/valueType :db.type/ref}
   :resource/count      {}
   :resource/unit       {:db/valueType :db.type/ref}

   :system.app/orientation    {}
   :system.drawer/open        {}
   :system.drawer/maximized   {}
   :system.home/view          {}
   :system.unit/view          {}}))

(def app-state
  {:model {:collections {}
           :resources {}}
   :view {:app {:orientation "landscape"}
          :drawer {:open false
                   :maximized false}
          :home {:view :default}
          :unit {:view :info}}})

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

;; prevent cursor-ification
(extend-type dc/DB
  om/IToCursor
  (-to-cursor
    ([this _] this)
    ([this _ _] this)))

(defn set-system-attrs! [& args]
  (d/transact! conn
    (for [[attr value] (partition 2 args)]
      (if value
        [:db/add 0 attr value]
        [:db.fn/retractAttribute 0 attr]))))

(defn set-orientation []
  (set-system-attrs! :system.app/orientation
    (if (> (.-height (.-screen js/window))
           (.-width (.-screen js/window)))
      "portrait"
      "landscape")))

(defn system-tx [db attr fun]
  (let [val (attr (d/entity db 0))]
    [[:db/add 0 attr (fun val)]]))

(defn toggle-drawer-open []
  (d/transact! conn
    [[:db.fn/call system-tx :system.drawer/open not]]))

(defn toggle-drawer-maximized []
  (d/transact! conn
    [[:db.fn/call system-tx :system.drawer/maximized not]]))

(let [events (async/sub event-bus-pub :toggle-drawer (async/chan))]
  (go-loop [e (async/<! events)]
    (case (second e)
      :open (toggle-drawer-open)
      :maximized (toggle-drawer-maximized))
    (recur (<! events))))

(defn add-collection
  [title]
  (d/transact! conn {:collection/title title}))

(let [events (async/sub event-bus-pub :add-collection (async/chan))]
  (go-loop [e (async/<! events)]
    (add-collection (:data e))
    (recur (<! events))))

(defn add-unit
  [title timestamp pos status cid]
  (d/transact! conn {:unit/title          title
                     :unit/timestamp      timestamp
                     :unit/pos            pos
                     :unit/status         status
                     :unit/collection     cid}))

(defn- prepare-ui [db]
  {:collections (let [collections (->> (u/qes-by db :collection/title)
                                       (sort-by :collection/title))]
                  (for [{cid :db/id :as collection} collections]
                    {:collection collection
                     :units (let [units (->> (u/qes-by db :unit/title)
                                          (sort-by :unit/title))]
                              (for [{uid :db/id :as unit} units]
                                {:unit unit
                                 :resources (let [resources (->> (u/qes-by db))])}))}))})

(defn app [db owner]
  (om/component

    (.log js/console (u/system-attr db :system.drawer/open))
    (.log js/console (pr-str (u/qes-by db :collection/title)))
    (html [:div#app
           (om/build core/control-panel db)
           [:div {:class (str "flex-container " "landscape")}
            [:div.flex-content
             (om/build map/l-map db)
             (om/build core/drawer [db home/home-view ])]]])))

(defn render []
  (om/root app conn {:target (.getElementById js/document "root")
                     :shared {:event-bus event-bus}}))

(defn init []
  (set-system-attrs! :system.drawer/open true)
  (set-orientation)
  (.addEventListener js/window "resize" set-orientation))

(defn go! []
  (init)
  (render))

(go!)
