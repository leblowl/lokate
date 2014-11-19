(ns lokate.server
  (:require [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api site]]
            [ring.util.response :as resp]))

(defn app [req]
  (resp/file-response "index.html" {:root "html"}))

(defroutes handler
  (GET "/" [] "<!DOCTYPE html><html><h1>Fitacular</h1></html>\n"))
