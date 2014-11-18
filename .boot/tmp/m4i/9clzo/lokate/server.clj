(ns lokate.server
  (:require [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api site]]
            [ring.middleware.reload :as reload]
            [ring.util.response :as resp]
            [org.httpkit.server :refer [run-server]]))

(defn app [req]
  (file-response "index.html" {:root "html"}))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (GET "/" req app))

(def http-handler
  (reload/wrap-reload (site #'routes))
  (site routes))

(defn run [& [port]]
  (defonce ^:private server
    (do
      (let [port (Integer. (or port (env :port) 10555))]
        (print "Starting web server on port" port ".\n")
        (run-server http-handler {:port port
                                  :join? false}))))
  server)

(defn -main [& [port]]
  (run port))
