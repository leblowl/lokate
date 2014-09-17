(defproject hivez "0.1.0-SNAPSHOT"
  :description "Bee hive tracker app"
  :url "hivez.herokuapp.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.9"]
                 [http-kit "2.1.16"]
                 [ring/ring-core "1.3.1"]
                 [ring/ring-json "0.3.1"]
                 [javax.servlet/servlet-api "2.5"]
                 [cljs-http "0.1.16"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.3"]]
  :main hivez.handler
  :min-lein-version "2.0.0"
  :source-paths ["src/clj"]
  :resource-paths ["resources"]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-pdo "0.1.1"]]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "run" "4455"]}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]})
