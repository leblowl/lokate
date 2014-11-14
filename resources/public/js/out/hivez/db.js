// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.db');
goog.require('cljs.core');
hivez.db.db = (function (){var G__16391 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16391) : cljs.core.atom.call(null,G__16391));
})();
hivez.db.db_error = (function db_error(e){return console.error("An IndexedDB error has occured!",e);
});
hivez.db.db_new = (function db_new(cb){var version = (1);var request = indexedDB.open("hivez",version);request.onupgradeneeded = ((function (version,request){
return (function (e){var G__16397_16402 = hivez.db.db;var G__16398_16403 = e.target.result;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16397_16402,G__16398_16403) : cljs.core.reset_BANG_.call(null,G__16397_16402,G__16398_16403));
e.target.transaction.onerror = hivez.db.db_error;
return (function (){var G__16399 = hivez.db.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16399) : cljs.core.deref.call(null,G__16399));
})().createObjectStore("place",{"autoIncrement": true, "keyPath": "id"});
});})(version,request))
;
request.onsuccess = ((function (version,request){
return (function (e){var G__16400_16404 = hivez.db.db;var G__16401_16405 = e.target.result;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16400_16404,G__16401_16405) : cljs.core.reset_BANG_.call(null,G__16400_16404,G__16401_16405));
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});})(version,request))
;
return request.onerror = hivez.db.db_error;
});
hivez.db.db_add = (function db_add(data){var transaction = (function (){var G__16407 = hivez.db.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16407) : cljs.core.deref.call(null,G__16407));
})().transaction(["place"],"readwrite");var store = transaction.objectStore("place");var request = store.put(cljs.core.clj__GT_js(data));return request.onerror = hivez.db.db_error;
});
hivez.db.db_delete = (function db_delete(key){var transaction = (function (){var G__16409 = hivez.db.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16409) : cljs.core.deref.call(null,G__16409));
})().transaction(["place"],"readwrite");var store = transaction.objectStore("place");var request = store.delete(key);return request.onerror = hivez.db.db_error;
});
hivez.db.db_get_all = (function db_get_all(for_each,cb){var transaction = (function (){var G__16412 = hivez.db.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16412) : cljs.core.deref.call(null,G__16412));
})().transaction(["place"],"readonly");var store = transaction.objectStore("place");var keyRange = IDBKeyRange.lowerBound((0));var cursorRequest = store.openCursor(keyRange);return cursorRequest.onsuccess = ((function (transaction,store,keyRange,cursorRequest){
return (function (e){var temp__4124__auto__ = e.target.result;if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;var G__16413_16414 = result;(for_each.cljs$core$IFn$_invoke$arity$1 ? for_each.cljs$core$IFn$_invoke$arity$1(G__16413_16414) : for_each.call(null,G__16413_16414));
return result.continue();
} else
{return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(transaction,store,keyRange,cursorRequest))
;
});
