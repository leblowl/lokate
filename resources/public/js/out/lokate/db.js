// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.db');
goog.require('cljs.core');
lokate.db.db = cljs.core.atom.call(null,null);
lokate.db.error = (function error(e){
return console.error("An IndexedDB error has occured!",e);
});
lokate.db.new$ = (function new$(cb){
var version = (1);
var request = indexedDB.open("lokate",version);
request.onupgradeneeded = ((function (version,request){
return (function (e){
cljs.core.reset_BANG_.call(null,lokate.db.db,e.target.result);

e.target.transaction.onerror = lokate.db.error;

cljs.core.deref.call(null,lokate.db.db).createObjectStore("collection",{"keyPath": "id"});

return cljs.core.deref.call(null,lokate.db.db).createObjectStore("resource-type",{"keyPath": "id"});
});})(version,request))
;

request.onsuccess = ((function (version,request){
return (function (e){
cljs.core.reset_BANG_.call(null,lokate.db.db,e.target.result);

return cb.call(null);
});})(version,request))
;

return request.onerror = lokate.db.error;
});
lokate.db.add = (function add(db_name,data){
var transaction = cljs.core.deref.call(null,lokate.db.db).transaction([db_name],"readwrite");
var store = transaction.objectStore(db_name);
var request = store.put(cljs.core.clj__GT_js.call(null,data));
return request.onerror = lokate.db.error;
});
lokate.db.delete$ = (function delete$(db_name,key){
var transaction = cljs.core.deref.call(null,lokate.db.db).transaction([db_name],"readwrite");
var store = transaction.objectStore(db_name);
var request = store.delete((((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key));
return request.onerror = lokate.db.error;
});
lokate.db.get_all = (function get_all(db_name,for_each,cb){
var transaction = cljs.core.deref.call(null,lokate.db.db).transaction([db_name],"readonly");
var store = transaction.objectStore(db_name);
var keyRange = IDBKeyRange.lowerBound((0));
var cursorRequest = store.openCursor(keyRange);
return cursorRequest.onsuccess = ((function (transaction,store,keyRange,cursorRequest){
return (function (e){
var temp__4124__auto__ = e.target.result;
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
for_each.call(null,result);

return result.continue();
} else {
return cb.call(null);
}
});})(transaction,store,keyRange,cursorRequest))
;
});
