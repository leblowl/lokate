(ns lokate.routing
  (:require [domkm.silk :as silk]
            [domkm.silk.serve :as serve]))

(defrecord IDKey [k]
  silk/Pattern
  (-match [_ s]
    (hash-map k (keyword s)))
  (-unmatch [_ params]
    (name (get params k)))
  (-match-validator [_]
    string?)
  (-unmatch-validators [_]
    {k keyword?}))

(defn id-key [k] (IDKey. k))

(def routes
  (silk/routes [[:home           [["home"]]]
                [:collections    [["collections"]]]
                [:collection-new [["collection" "new"]]]
                [:collection     [["collection" (id-key :c-id)]]]
                [:unit-new       [["collection" (id-key :c-id) "unit" "new"]]]
                [:unit           [["collection" (id-key :c-id) "unit" (id-key :u-id)]]]
                [:resources      [["resources"]]]
                [:resource       [["resource" (id-key :r-id)]]]]))

(defn unmatch*
  ([routes name]
     (unmatch* routes name {}))
  ([routes name margs]
     (silk/unmatch routes (merge {:domkm.silk/name name} margs))))

(defn get-route
  ([name]
     (unmatch* routes name))
  ([name opts]
     (unmatch* routes name opts)))

(defn route! [x handler]
  (silk/arrive routes x #(when % (handler %))))
