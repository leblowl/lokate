(set-env!
        :src-paths #{"src/clj"}
        :rsc-paths #{"html"}
        :dependencies '[[adzerk/boot-cljs "0.0-2371-25"]
                        [adzerk/boot-reload    "0.1.6"]
                        [org.clojure/clojure "1.6.0"]
                        [org.clojure/clojurescript "0.0-2371"]
                        [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                        [om "0.8.0-alpha2"]
                        [ring "1.3.1"]
                        [compojure "1.2.0"]
                        [http-kit "2.1.19"]])

(require
  '[adzerk.boot-cljs      :refer :all]
  '[adzerk.boot-reload    :refer :all])

(deftask dev
  "Build cljs for development."
[]
(comp (watch)
      (speak)
      (cljs :unified true
            :source-map true
            :optimizations :none)
      (reload)))
