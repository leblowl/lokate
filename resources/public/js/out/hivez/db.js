// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.db');
goog.require('cljs.core');
hivez.db.db = cljs.core.atom.call(null,null);
hivez.db.db_error = (function db_error(e){return console.error("An IndexedDB error has occured!",e);
});
hivez.db.db_new = (function db_new(cb){var version = (1);var request = indexedDB.open("hivez",version);request.onupgradeneeded = ((function (version,request){
return (function (e){cljs.core.reset_BANG_.call(null,hivez.db.db,e.target.result);
e.target.transaction.onerror = hivez.db.db_error;
return cljs.core.deref.call(null,hivez.db.db).createObjectStore("place",{"autoIncrement": true, "keyPath": "id"});
});})(version,request))
;
request.onsuccess = ((function (version,request){
return (function (e){cljs.core.reset_BANG_.call(null,hivez.db.db,e.target.result);
return cb.call(null);
});})(version,request))
;
return request.onerror = hivez.db.db_error;
});
hivez.db.db_add = (function db_add(data){var transaction = cljs.core.deref.call(null,hivez.db.db).transaction(["place"],"readwrite");var store = transaction.objectStore("place");var request = store.put(cljs.core.clj__GT_js.call(null,data));return request.onerror = hivez.db.db_error;
});
hivez.db.db_delete = (function db_delete(key){var transaction = cljs.core.deref.call(null,hivez.db.db).transaction(["place"],"readwrite");var store = transaction.objectStore("place");var request = store.delete(key);return request.onerror = hivez.db.db_error;
});
hivez.db.db_get_all = (function db_get_all(for_each,cb){var transaction = cljs.core.deref.call(null,hivez.db.db).transaction(["place"],"readonly");var store = transaction.objectStore("place");var keyRange = IDBKeyRange.lowerBound((0));var cursorRequest = store.openCursor(keyRange);return cursorRequest.onsuccess = ((function (transaction,store,keyRange,cursorRequest){
return (function (e){var temp__4124__auto__ = e.target.result;if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;for_each.call(null,result);
return result.continue();
} else
{return cb.call(null);
}
});})(transaction,store,keyRange,cursorRequest))
;
});

//# sourceMappingURL=db.js.map