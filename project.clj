(defproject lokate "0.2.0-SNAPSHOT"
  :description "track resources on a map!"
  :url "http://lokate-demo.herokuapp.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.0"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.518"]
                 [org.clojure/core.async "0.3.442"]
                 [org.omcljs/om "0.8.6"]
                 [sablono "0.3.1"]
                 [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [ring "1.6.0-RC2"]
                 [compojure "1.5.2"]
                 [http-kit "2.2.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]]

  :source-paths ["src/clj" "src/cljs"]
  :uberjar-name "lokate.jar"
  :main lokate.server

  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to     "resources/public/js/main.js"
                                   :output-dir    "resources/public/js/out"
                                   :optimizations :none
                                   :pretty-print  false}}]}

  :profiles {:uberjar {:hooks [leiningen.cljsbuild]
                       :omit-source true
                       :aot :all}})
