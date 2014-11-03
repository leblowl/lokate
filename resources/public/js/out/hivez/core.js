// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.string');
goog.require('hivez.map');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('hivez.map');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_();
hivez.core.app_state = (function (){var G__16505 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$130,null,cljs.core.constant$keyword$79,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$77,null], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16505) : cljs.core.atom.call(null,G__16505));
})();
hivez.core.db = (function (){var G__16506 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16506) : cljs.core.atom.call(null,G__16506));
})();
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,(function (p1__16507_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16507_SHARP_,cljs.core.constant$keyword$130,hivez.core.orientation());
}));
});
hivez.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
/**
* @param {...*} var_args
*/
hivez.core.floormat = (function() { 
var floormat__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.string.format,args);
};
var floormat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return floormat__delegate.call(this,args);};
floormat.cljs$lang$maxFixedArity = 0;
floormat.cljs$lang$applyTo = (function (arglist__16508){
var args = cljs.core.seq(arglist__16508);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
/**
* Euclidean distance between 2 points
*/
hivez.core.distance = (function distance(pos1,pos2){var G__16515 = ((function (){var G__16517 = (cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(pos2));var G__16518 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16517,G__16518) : Math.pow.call(null,G__16517,G__16518));
})() + (function (){var G__16519 = (cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(pos2));var G__16520 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16519,G__16520) : Math.pow.call(null,G__16519,G__16520));
})());var G__16516 = 0.5;return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16515,G__16516) : Math.pow.call(null,G__16515,G__16516));
});
hivez.core.db_error = (function db_error(e){return console.error("An IndexedDB error has occured!",e);
});
hivez.core.db_new = (function db_new(cb){var version = (1);var request = indexedDB.open("hivez",version);request.onupgradeneeded = ((function (version,request){
return (function (e){var G__16526_16531 = hivez.core.db;var G__16527_16532 = e.target.result;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16526_16531,G__16527_16532) : cljs.core.reset_BANG_.call(null,G__16526_16531,G__16527_16532));
e.target.transaction.onerror = hivez.core.db_error;
return (function (){var G__16528 = hivez.core.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16528) : cljs.core.deref.call(null,G__16528));
})().createObjectStore("hive",{"keyPath": "key"});
});})(version,request))
;
request.onsuccess = ((function (version,request){
return (function (e){var G__16529_16533 = hivez.core.db;var G__16530_16534 = e.target.result;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16529_16533,G__16530_16534) : cljs.core.reset_BANG_.call(null,G__16529_16533,G__16530_16534));
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});})(version,request))
;
return request.onerror = hivez.core.db_error;
});
hivez.core.db_add_hive = (function db_add_hive(hive){var transaction = (function (){var G__16536 = hivez.core.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16536) : cljs.core.deref.call(null,G__16536));
})().transaction(["hive"],"readwrite");var store = transaction.objectStore("hive");var request = store.put(cljs.core.clj__GT_js(hive));return request.onerror = hivez.core.db_error;
});
hivez.core.db_delete_hive = (function db_delete_hive(key){var transaction = (function (){var G__16538 = hivez.core.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16538) : cljs.core.deref.call(null,G__16538));
})().transaction(["hive"],"readwrite");var store = transaction.objectStore("hive");var request = store.delete(cljs.core.name(key));return request.onerror = hivez.core.db_error;
});
hivez.core.db_get_all = (function db_get_all(cb){var transaction = (function (){var G__16541 = hivez.core.db;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16541) : cljs.core.deref.call(null,G__16541));
})().transaction(["hive"],"readonly");var store = transaction.objectStore("hive");var keyRange = IDBKeyRange.lowerBound((0));var cursorRequest = store.openCursor(keyRange);return cursorRequest.onsuccess = ((function (transaction,store,keyRange,cursorRequest){
return (function (e){var temp__4124__auto__ = e.target.result;if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,((function (result,temp__4124__auto__,transaction,store,keyRange,cursorRequest){
return (function (p1__16539_SHARP_){return cljs.core.assoc_in(p1__16539_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(result.key)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result.value,cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0)));
});})(result,temp__4124__auto__,transaction,store,keyRange,cursorRequest))
);
return result.continue();
} else
{return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(transaction,store,keyRange,cursorRequest))
;
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$59,hivez.core.pos_key(pos),cljs.core.constant$keyword$133,"",cljs.core.constant$keyword$134,hivez.core.fdate_now(),cljs.core.constant$keyword$76,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,pos.lat(),cljs.core.constant$keyword$132,pos.lng()], null),cljs.core.constant$keyword$135,""], null);
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__16542_SHARP_){return hivez.core.distance(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(hive),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16542_SHARP_)));
}),cljs.core.seq(hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive(pos);om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$79,((function (hive){
return (function (p1__16543_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16543_SHARP_,cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$77,cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive(hive);
});
hivez.core.activate_hive = (function activate_hive(data,key){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$77,(function (p1__16544_SHARP_){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__16544_SHARP_))
{return null;
} else
{return key;
}
}));
});
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1((function (){var G__16551 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16551) : cljs.core.deref.call(null,G__16551));
})())))
{var hive_16555 = (function (){var G__16552 = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1((function (){var G__16553 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16553) : cljs.core.deref.call(null,G__16553));
})());return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__16552) : key.call(null,G__16552));
})();om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$79,((function (hive_16555){
return (function (p1__16545_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16545_SHARP_,key);
});})(hive_16555))
);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$77,cljs.core.first(hivez.core.nearest(hive_16555,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1((function (){var G__16554 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16554) : cljs.core.deref.call(null,G__16554));
})()))));
} else
{om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$79,(function (p1__16546_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16546_SHARP_,key);
}));
}
return hivez.core.db_delete_hive(key);
});
hivez.core.display_pos = (function display_pos(hive){var pos = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(pos)], 0)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(pos)], 0))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$134.cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$136,edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$136,null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(hive,key,(function (){var G__16558 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,key).innerHTML;return goog.string.unescapeEntities(G__16558);
})());
hivez.core.db_add_hive((function (){var G__16559 = hive;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16559) : cljs.core.deref.call(null,G__16559));
})());
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
hivez.core.input = (function input(hive,owner,p__16560){var map__16587 = p__16560;var map__16587__$1 = ((cljs.core.seq_QMARK_(map__16587))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16587):map__16587);var opts = map__16587__$1;var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16587__$1,cljs.core.constant$keyword$137);var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16587__$1,cljs.core.constant$keyword$138);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16587__$1,cljs.core.constant$keyword$139);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16587__$1,cljs.core.constant$keyword$140);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16587__$1,cljs.core.constant$keyword$141);if(typeof hivez.core.t16588 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16588 = (function (input,on_key_down,owner,hive,map__16587,edit_key,className,on_edit,id,opts,p__16560,meta16589){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.map__16587 = map__16587;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.p__16560 = p__16560;
this.meta16589 = meta16589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16588.cljs$lang$type = true;
hivez.core.t16588.cljs$lang$ctorStr = "hivez.core/t16588";
hivez.core.t16588.cljs$lang$ctorPrWriter = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16588");
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16588.prototype.om$core$IRenderState$ = true;
hivez.core.t16588.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__16591){var self__ = this;
var map__16592 = p__16591;var map__16592__$1 = ((cljs.core.seq_QMARK_(map__16592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16592):map__16592);var exit_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16592__$1,cljs.core.constant$keyword$142);var ___$1 = this;var G__16593 = {"id": "input-wrapper"};var G__16594 = (function (){var G__16596 = {"dangerouslySetInnerHTML": {"__html": (function (){var G__16602 = self__.hive;return (self__.edit_key.cljs$core$IFn$_invoke$arity$1 ? self__.edit_key.cljs$core$IFn$_invoke$arity$1(G__16602) : self__.edit_key.call(null,G__16602));
})()}, "onBlur": ((function (G__16593,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$142,"out");
var G__16597 = ((function (G__16593,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16599 = self__.hive;var G__16600 = self__.edit_key;var G__16601 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16599,G__16600,G__16601) : self__.on_edit.call(null,G__16599,G__16600,G__16601));
});})(G__16593,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16598 = (100);return setTimeout(G__16597,G__16598);
});})(G__16593,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display(cljs.core.not(exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id};return React.DOM.div(G__16596);
})();var G__16595 = (function (){var G__16603 = {"onClick": ((function (G__16593,G__16594,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$142,"btn");
var G__16605 = ((function (G__16593,G__16594,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16607 = self__.hive;var G__16608 = self__.edit_key;var G__16609 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16607,G__16608,G__16609) : self__.on_edit.call(null,G__16607,G__16608,G__16609));
});})(G__16593,G__16594,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16606 = (100);return setTimeout(G__16605,G__16606);
});})(G__16593,G__16594,___$1,map__16592,map__16592__$1,exit_type,map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exit_type,"out"))), "id": "input-ok"};var G__16604 = (function (){var G__16610 = {"id": "input-ok-mark"};var G__16611 = (function (){var G__16612 = "&#10003;";return goog.string.unescapeEntities(G__16612);
})();return React.DOM.span(G__16610,G__16611);
})();return React.DOM.div(G__16603,G__16604);
})();return React.DOM.div(G__16593,G__16594,G__16595);
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16588.prototype.om$core$IDidMount$ = true;
hivez.core.t16588.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,self__.edit_key).focus();
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16588.prototype.om$core$IInitState$ = true;
hivez.core.t16588.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,null], null);
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16590){var self__ = this;
var _16590__$1 = this;return self__.meta16589;
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16590,meta16589__$1){var self__ = this;
var _16590__$1 = this;return (new hivez.core.t16588(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.map__16587,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,self__.p__16560,meta16589__$1));
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t16588 = ((function (map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t16588(input__$1,on_key_down__$1,owner__$1,hive__$1,map__16587__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__16560__$1,meta16589){return (new hivez.core.t16588(input__$1,on_key_down__$1,owner__$1,hive__$1,map__16587__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__16560__$1,meta16589));
});})(map__16587,map__16587__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t16588(input,on_key_down,owner,hive,map__16587__$1,edit_key,className,on_edit,id,opts,p__16560,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__16613){var map__16623 = p__16613;var map__16623__$1 = ((cljs.core.seq_QMARK_(map__16623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16623):map__16623);var opts = map__16623__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16623__$1,cljs.core.constant$keyword$138);if(typeof hivez.core.t16624 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16624 = (function (on_edit,opts,map__16623,p__16613,owner,hive,input_control,meta16625){
this.on_edit = on_edit;
this.opts = opts;
this.map__16623 = map__16623;
this.p__16613 = p__16613;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta16625 = meta16625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16624.cljs$lang$type = true;
hivez.core.t16624.cljs$lang$ctorStr = "hivez.core/t16624";
hivez.core.t16624.cljs$lang$ctorPrWriter = ((function (map__16623,map__16623__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16624");
});})(map__16623,map__16623__$1,opts,on_edit))
;
hivez.core.t16624.prototype.om$core$IRenderState$ = true;
hivez.core.t16624.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16623,map__16623__$1,opts,on_edit){
return (function (_,p__16627){var self__ = this;
var map__16628 = p__16627;var map__16628__$1 = ((cljs.core.seq_QMARK_(map__16628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16628):map__16628);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16628__$1,cljs.core.constant$keyword$136);var ___$1 = this;var G__16629 = {"id": "input-ctrl"};var G__16630 = (function (){var G__16631 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__16631) {
case "notes":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$141,"notes-input",cljs.core.constant$keyword$140,"notes input",cljs.core.constant$keyword$139,cljs.core.constant$keyword$135,cljs.core.constant$keyword$138,self__.on_edit], null)], null));

break;
case "name":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"name-input",cljs.core.constant$keyword$140,"name input single-line",cljs.core.constant$keyword$139,cljs.core.constant$keyword$133,cljs.core.constant$keyword$138,self__.on_edit,cljs.core.constant$keyword$137,((function (G__16631,G__16629,___$1,map__16628,map__16628__$1,editing,map__16623,map__16623__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__16631,G__16629,___$1,map__16628,map__16628__$1,editing,map__16623,map__16623__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})();return React.DOM.div(G__16629,G__16630);
});})(map__16623,map__16623__$1,opts,on_edit))
;
hivez.core.t16624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16623,map__16623__$1,opts,on_edit){
return (function (_16626){var self__ = this;
var _16626__$1 = this;return self__.meta16625;
});})(map__16623,map__16623__$1,opts,on_edit))
;
hivez.core.t16624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16623,map__16623__$1,opts,on_edit){
return (function (_16626,meta16625__$1){var self__ = this;
var _16626__$1 = this;return (new hivez.core.t16624(self__.on_edit,self__.opts,self__.map__16623,self__.p__16613,self__.owner,self__.hive,self__.input_control,meta16625__$1));
});})(map__16623,map__16623__$1,opts,on_edit))
;
hivez.core.__GT_t16624 = ((function (map__16623,map__16623__$1,opts,on_edit){
return (function __GT_t16624(on_edit__$1,opts__$1,map__16623__$2,p__16613__$1,owner__$1,hive__$1,input_control__$1,meta16625){return (new hivez.core.t16624(on_edit__$1,opts__$1,map__16623__$2,p__16613__$1,owner__$1,hive__$1,input_control__$1,meta16625));
});})(map__16623,map__16623__$1,opts,on_edit))
;
}
return (new hivez.core.t16624(on_edit,opts,map__16623__$1,p__16613,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__16633){var map__16651 = p__16633;var map__16651__$1 = ((cljs.core.seq_QMARK_(map__16651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16651):map__16651);var opts = map__16651__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16651__$1,cljs.core.constant$keyword$143);if(typeof hivez.core.t16652 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16652 = (function (begin_edit,opts,map__16651,p__16633,owner,hive,hive_info,meta16653){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16651 = map__16651;
this.p__16633 = p__16633;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16653 = meta16653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16652.cljs$lang$type = true;
hivez.core.t16652.cljs$lang$ctorStr = "hivez.core/t16652";
hivez.core.t16652.cljs$lang$ctorPrWriter = ((function (map__16651,map__16651__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16652");
});})(map__16651,map__16651__$1,opts,begin_edit))
;
hivez.core.t16652.prototype.om$core$IRender$ = true;
hivez.core.t16652.prototype.om$core$IRender$render$arity$1 = ((function (map__16651,map__16651__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16655 = {"id": "info"};var G__16656 = (function (){var G__16660 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (G__16655,___$1,map__16651,map__16651__$1,opts,begin_edit){
return (function (){var G__16661 = cljs.core.constant$keyword$133;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16661) : self__.begin_edit.call(null,G__16661));
});})(G__16655,___$1,map__16651,map__16651__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16660);
})();var G__16657 = (function (){var G__16662 = {"className": "origin"};var G__16663 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16662,G__16663);
})();var G__16658 = (function (){var G__16664 = {"className": "location"};var G__16665 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16664,G__16665);
})();var G__16659 = (function (){var G__16666 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (G__16655,G__16656,G__16657,G__16658,___$1,map__16651,map__16651__$1,opts,begin_edit){
return (function (){var G__16667 = cljs.core.constant$keyword$135;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16667) : self__.begin_edit.call(null,G__16667));
});})(G__16655,G__16656,G__16657,G__16658,___$1,map__16651,map__16651__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"};return React.DOM.div(G__16666);
})();return React.DOM.div(G__16655,G__16656,G__16657,G__16658,G__16659);
});})(map__16651,map__16651__$1,opts,begin_edit))
;
hivez.core.t16652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16651,map__16651__$1,opts,begin_edit){
return (function (_16654){var self__ = this;
var _16654__$1 = this;return self__.meta16653;
});})(map__16651,map__16651__$1,opts,begin_edit))
;
hivez.core.t16652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16651,map__16651__$1,opts,begin_edit){
return (function (_16654,meta16653__$1){var self__ = this;
var _16654__$1 = this;return (new hivez.core.t16652(self__.begin_edit,self__.opts,self__.map__16651,self__.p__16633,self__.owner,self__.hive,self__.hive_info,meta16653__$1));
});})(map__16651,map__16651__$1,opts,begin_edit))
;
hivez.core.__GT_t16652 = ((function (map__16651,map__16651__$1,opts,begin_edit){
return (function __GT_t16652(begin_edit__$1,opts__$1,map__16651__$2,p__16633__$1,owner__$1,hive__$1,hive_info__$1,meta16653){return (new hivez.core.t16652(begin_edit__$1,opts__$1,map__16651__$2,p__16633__$1,owner__$1,hive__$1,hive_info__$1,meta16653));
});})(map__16651,map__16651__$1,opts,begin_edit))
;
}
return (new hivez.core.t16652(begin_edit,opts,map__16651__$1,p__16633,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t16678 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16678 = (function (owner,data,drawer,meta16679){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16678.cljs$lang$type = true;
hivez.core.t16678.cljs$lang$ctorStr = "hivez.core/t16678";
hivez.core.t16678.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16678");
});
hivez.core.t16678.prototype.om$core$IRenderState$ = true;
hivez.core.t16678.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16681){var self__ = this;
var map__16682 = p__16681;var map__16682__$1 = ((cljs.core.seq_QMARK_(map__16682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16682):map__16682);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16682__$1,cljs.core.constant$keyword$136);var ___$1 = this;var G__16683 = {"id": "drawer-wrapper"};var G__16684 = (cljs.core.truth_(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input_control,cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,editing], null),cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.on_edit,((function (G__16683,___$1,map__16682,map__16682__$1,editing){
return (function (){return hivez.core.end_edit(self__.owner);
});})(G__16683,___$1,map__16682,map__16682__$1,editing))
)], null)], null)):null);var G__16685 = (function (){var G__16686 = {"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3640__auto__ = cljs.core.not(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data));if(or__3640__auto__)
{return or__3640__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"};var G__16687 = (cljs.core.truth_(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.hive_info,cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.begin_edit,self__.owner)], null)], null)):null);return React.DOM.div(G__16686,G__16687);
})();return React.DOM.div(G__16683,G__16684,G__16685);
});
hivez.core.t16678.prototype.om$core$IInitState$ = true;
hivez.core.t16678.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,null], null);
});
hivez.core.t16678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16680){var self__ = this;
var _16680__$1 = this;return self__.meta16679;
});
hivez.core.t16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16680,meta16679__$1){var self__ = this;
var _16680__$1 = this;return (new hivez.core.t16678(self__.owner,self__.data,self__.drawer,meta16679__$1));
});
hivez.core.__GT_t16678 = (function __GT_t16678(owner__$1,data__$1,drawer__$1,meta16679){return (new hivez.core.t16678(owner__$1,data__$1,drawer__$1,meta16679));
});
}
return (new hivez.core.t16678(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16696 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16696 = (function (owner,data,app,meta16697){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16697 = meta16697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16696.cljs$lang$type = true;
hivez.core.t16696.cljs$lang$ctorStr = "hivez.core/t16696";
hivez.core.t16696.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16696");
});
hivez.core.t16696.prototype.om$core$IRender$ = true;
hivez.core.t16696.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16699 = {"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(self__.data)))};var G__16700 = (function (){var G__16702 = {"className": "flex-content"};var G__16703 = om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.add_hive,self__.data),cljs.core.constant$keyword$75,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.activate_hive,self__.data),cljs.core.constant$keyword$74,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.delete_hive,self__.data)], null)], null));return React.DOM.div(G__16702,G__16703);
})();var G__16701 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.drawer,self__.data);return React.DOM.div(G__16699,G__16700,G__16701);
});
hivez.core.t16696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16698){var self__ = this;
var _16698__$1 = this;return self__.meta16697;
});
hivez.core.t16696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16698,meta16697__$1){var self__ = this;
var _16698__$1 = this;return (new hivez.core.t16696(self__.owner,self__.data,self__.app,meta16697__$1));
});
hivez.core.__GT_t16696 = (function __GT_t16696(owner__$1,data__$1,app__$1,meta16697){return (new hivez.core.t16696(owner__$1,data__$1,app__$1,meta16697));
});
}
return (new hivez.core.t16696(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation();
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new((function (){return hivez.core.db_get_all((function (){return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,document.getElementById("content")], null));
}));
}));
});
