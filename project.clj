(defproject lokate "0.1.0-SNAPSHOT"
  :description "track resources on a map!"
  :url "http://lokate-demo.herokuapp.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.0"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2727"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.6"]
                 [sablono "0.3.1"]
                 [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                 [ring "1.3.1"]
                 [compojure "1.2.1"]
                 [http-kit "2.1.19"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src/clj" "src/cljs"]
  :uberjar-name "lokate.jar"
  :main lokate.server

  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:main          lokate.app
                                   :output-to     "resources/public/js/main.js"
                                   :optimizations :none
                                   :pretty-print  false}}]}

  :profiles {:uberjar {:hooks [leiningen.cljsbuild]
                       :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                             :compiler {:main lokate.app
                                                        :output-to "resources/public/js/main.js"
                                                        :optimizations :none
                                                        :pretty-print false}}]}
                       :omit-source true
                       :aot :all }})
