(ns lokate.server
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [org.httpkit.server :refer [run-server]]
            [clojure.java.io :as io]
            [ring.middleware.file-info :as file-info])
  (:gen-class))

(defroutes routes
  (GET "/" [] (io/resource "index.html"))
  (route/resources "/" {:root "public"})
  (route/not-found "Page not found."))

(defn run [handler & [port]]
  (defonce ^:private server
    (let [port (Integer. (or port 10333))]
      (print "Starting web server on port" port ".\n")
      (run-server handler {:port port})))
  server)

(def handler #'routes)

(defn -main [& [port]]
  (run handler port))
