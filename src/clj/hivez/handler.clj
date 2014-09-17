(ns hivez.handler
  (:require [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [compojure.handler :refer [api]]
            [compojure.route :as route]
            [ring.util.response :refer [file-response]]
            [ring.middleware.json :as middleware]
            [org.httpkit.server :as srv]))

(defonce server (atom nil))

(defroutes app-routes
  (GET "/" [] (fn [req] (file-response "public/app.html" {:root "resources"})))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))

(defn start [port]
  (reset! server (srv/run-server #'app {:port port})))

(defn -main [& args]
  (start (Integer. (first args))))
