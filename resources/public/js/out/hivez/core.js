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
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),null], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__21320_SHARP_){return cljs.core.assoc.call(null,p1__21320_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
/**
* @param {...*} var_args
*/
hivez.core.floormat = (function() { 
var floormat__delegate = function (args){return cljs.core.apply.call(null,goog.string.format,args);
};
var floormat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return floormat__delegate.call(this,args);};
floormat.cljs$lang$maxFixedArity = 0;
floormat.cljs$lang$applyTo = (function (arglist__21321){
var args = cljs.core.seq(arglist__21321);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
/**
* Euclidean distance between 2 points
*/
hivez.core.distance = (function distance(pos1,pos2){return Math.pow.call(null,(Math.pow.call(null,(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos2)),(2)) + Math.pow.call(null,(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos2)),(2))),0.5);
});
hivez.core.db_error = (function db_error(e){return console.error("An IndexedDB error has occured!",e);
});
hivez.core.db_new = (function db_new(cb){var version = (1);var request = indexedDB.open("hivez",version);request.onupgradeneeded = ((function (version,request){
return (function (e){cljs.core.reset_BANG_.call(null,hivez.core.db,e.target.result);
e.target.transaction.onerror = hivez.core.db_error;
return cljs.core.deref.call(null,hivez.core.db).createObjectStore("hive",{"keyPath": "key"});
});})(version,request))
;
request.onsuccess = ((function (version,request){
return (function (e){cljs.core.reset_BANG_.call(null,hivez.core.db,e.target.result);
return cb.call(null);
});})(version,request))
;
return request.onerror = hivez.core.db_error;
});
hivez.core.db_add_hive = (function db_add_hive(hive){var transaction = cljs.core.deref.call(null,hivez.core.db).transaction(["hive"],"readwrite");var store = transaction.objectStore("hive");var request = store.put(cljs.core.clj__GT_js.call(null,hive));return request.onerror = hivez.core.db_error;
});
hivez.core.db_delete_hive = (function db_delete_hive(key){var transaction = cljs.core.deref.call(null,hivez.core.db).transaction(["hive"],"readwrite");var store = transaction.objectStore("hive");var request = store.delete(cljs.core.name.call(null,key));return request.onerror = hivez.core.db_error;
});
hivez.core.db_get_all = (function db_get_all(cb){var transaction = cljs.core.deref.call(null,hivez.core.db).transaction(["hive"],"readonly");var store = transaction.objectStore("hive");var keyRange = IDBKeyRange.lowerBound((0));var cursorRequest = store.openCursor(keyRange);return cursorRequest.onsuccess = ((function (transaction,store,keyRange,cursorRequest){
return (function (e){var temp__4124__auto__ = e.target.result;if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;cljs.core.swap_BANG_.call(null,hivez.core.app_state,((function (result,temp__4124__auto__,transaction,store,keyRange,cursorRequest){
return (function (p1__21322_SHARP_){return cljs.core.assoc_in.call(null,p1__21322_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(result,temp__4124__auto__,transaction,store,keyRange,cursorRequest))
);
return result.continue();
} else
{return cb.call(null);
}
});})(transaction,store,keyRange,cursorRequest))
;
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),hivez.core.pos_key.call(null,pos),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__21323_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__21323_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive){
return (function (p1__21324_SHARP_){return cljs.core.assoc.call(null,p1__21324_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(data,key){return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),(function (p1__21325_SHARP_){if(cljs.core._EQ_.call(null,key,p1__21325_SHARP_))
{return null;
} else
{return key;
}
}));
});
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_21328 = key.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive_21328){
return (function (p1__21326_SHARP_){return cljs.core.dissoc.call(null,p1__21326_SHARP_,key);
});})(hive_21328))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_21328,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
} else
{om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (p1__21327_SHARP_){return cljs.core.dissoc.call(null,p1__21327_SHARP_,key);
}));
}
return hivez.core.db_delete_hive.call(null,key);
});
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.call(null,hive,key,goog.string.unescapeEntities(om.core.get_node.call(null,owner,key).innerHTML));
return cb.call(null);
});
hivez.core.input = (function input(hive,owner,p__21329){var map__21336 = p__21329;var map__21336__$1 = ((cljs.core.seq_QMARK_.call(null,map__21336))?cljs.core.apply.call(null,cljs.core.hash_map,map__21336):map__21336);var opts = map__21336__$1;var on_key_down = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__21336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t21337 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21337 = (function (input,map__21336,on_key_down,owner,hive,edit_key,className,on_edit,id,opts,p__21329,meta21338){
this.input = input;
this.map__21336 = map__21336;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.p__21329 = p__21329;
this.meta21338 = meta21338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21337.cljs$lang$type = true;
hivez.core.t21337.cljs$lang$ctorStr = "hivez.core/t21337";
hivez.core.t21337.cljs$lang$ctorPrWriter = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t21337");
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t21337.prototype.om$core$IRenderState$ = true;
hivez.core.t21337.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__21340){var self__ = this;
var map__21341 = p__21340;var map__21341__$1 = ((cljs.core.seq_QMARK_.call(null,map__21341))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);var exit_type = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__21341,map__21341__$1,exit_type,map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t21337.prototype.om$core$IDidMount$ = true;
hivez.core.t21337.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t21337.prototype.om$core$IInitState$ = true;
hivez.core.t21337.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t21337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_21339){var self__ = this;
var _21339__$1 = this;return self__.meta21338;
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t21337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_21339,meta21338__$1){var self__ = this;
var _21339__$1 = this;return (new hivez.core.t21337(self__.input,self__.map__21336,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,self__.p__21329,meta21338__$1));
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t21337 = ((function (map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t21337(input__$1,map__21336__$2,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__21329__$1,meta21338){return (new hivez.core.t21337(input__$1,map__21336__$2,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__21329__$1,meta21338));
});})(map__21336,map__21336__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t21337(input,map__21336__$1,on_key_down,owner,hive,edit_key,className,on_edit,id,opts,p__21329,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__21342){var map__21350 = p__21342;var map__21350__$1 = ((cljs.core.seq_QMARK_.call(null,map__21350))?cljs.core.apply.call(null,cljs.core.hash_map,map__21350):map__21350);var opts = map__21350__$1;var on_edit = cljs.core.get.call(null,map__21350__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t21351 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21351 = (function (on_edit,opts,map__21350,p__21342,owner,hive,input_control,meta21352){
this.on_edit = on_edit;
this.opts = opts;
this.map__21350 = map__21350;
this.p__21342 = p__21342;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta21352 = meta21352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21351.cljs$lang$type = true;
hivez.core.t21351.cljs$lang$ctorStr = "hivez.core/t21351";
hivez.core.t21351.cljs$lang$ctorPrWriter = ((function (map__21350,map__21350__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t21351");
});})(map__21350,map__21350__$1,opts,on_edit))
;
hivez.core.t21351.prototype.om$core$IRenderState$ = true;
hivez.core.t21351.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21350,map__21350__$1,opts,on_edit){
return (function (_,p__21354){var self__ = this;
var map__21355 = p__21354;var map__21355__$1 = ((cljs.core.seq_QMARK_.call(null,map__21355))?cljs.core.apply.call(null,cljs.core.hash_map,map__21355):map__21355);var editing = cljs.core.get.call(null,map__21355__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__21356 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__21356) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__21356,___$1,map__21355,map__21355__$1,editing,map__21350,map__21350__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__21356,___$1,map__21355,map__21355__$1,editing,map__21350,map__21350__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__21350,map__21350__$1,opts,on_edit))
;
hivez.core.t21351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21350,map__21350__$1,opts,on_edit){
return (function (_21353){var self__ = this;
var _21353__$1 = this;return self__.meta21352;
});})(map__21350,map__21350__$1,opts,on_edit))
;
hivez.core.t21351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21350,map__21350__$1,opts,on_edit){
return (function (_21353,meta21352__$1){var self__ = this;
var _21353__$1 = this;return (new hivez.core.t21351(self__.on_edit,self__.opts,self__.map__21350,self__.p__21342,self__.owner,self__.hive,self__.input_control,meta21352__$1));
});})(map__21350,map__21350__$1,opts,on_edit))
;
hivez.core.__GT_t21351 = ((function (map__21350,map__21350__$1,opts,on_edit){
return (function __GT_t21351(on_edit__$1,opts__$1,map__21350__$2,p__21342__$1,owner__$1,hive__$1,input_control__$1,meta21352){return (new hivez.core.t21351(on_edit__$1,opts__$1,map__21350__$2,p__21342__$1,owner__$1,hive__$1,input_control__$1,meta21352));
});})(map__21350,map__21350__$1,opts,on_edit))
;
}
return (new hivez.core.t21351(on_edit,opts,map__21350__$1,p__21342,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__21358){var map__21363 = p__21358;var map__21363__$1 = ((cljs.core.seq_QMARK_.call(null,map__21363))?cljs.core.apply.call(null,cljs.core.hash_map,map__21363):map__21363);var opts = map__21363__$1;var begin_edit = cljs.core.get.call(null,map__21363__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t21364 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21364 = (function (begin_edit,opts,map__21363,p__21358,owner,hive,hive_info,meta21365){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__21363 = map__21363;
this.p__21358 = p__21358;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta21365 = meta21365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21364.cljs$lang$type = true;
hivez.core.t21364.cljs$lang$ctorStr = "hivez.core/t21364";
hivez.core.t21364.cljs$lang$ctorPrWriter = ((function (map__21363,map__21363__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t21364");
});})(map__21363,map__21363__$1,opts,begin_edit))
;
hivez.core.t21364.prototype.om$core$IRender$ = true;
hivez.core.t21364.prototype.om$core$IRender$render$arity$1 = ((function (map__21363,map__21363__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__21363,map__21363__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__21363,map__21363__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__21363,map__21363__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__21363,map__21363__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__21363,map__21363__$1,opts,begin_edit))
;
hivez.core.t21364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21363,map__21363__$1,opts,begin_edit){
return (function (_21366){var self__ = this;
var _21366__$1 = this;return self__.meta21365;
});})(map__21363,map__21363__$1,opts,begin_edit))
;
hivez.core.t21364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21363,map__21363__$1,opts,begin_edit){
return (function (_21366,meta21365__$1){var self__ = this;
var _21366__$1 = this;return (new hivez.core.t21364(self__.begin_edit,self__.opts,self__.map__21363,self__.p__21358,self__.owner,self__.hive,self__.hive_info,meta21365__$1));
});})(map__21363,map__21363__$1,opts,begin_edit))
;
hivez.core.__GT_t21364 = ((function (map__21363,map__21363__$1,opts,begin_edit){
return (function __GT_t21364(begin_edit__$1,opts__$1,map__21363__$2,p__21358__$1,owner__$1,hive__$1,hive_info__$1,meta21365){return (new hivez.core.t21364(begin_edit__$1,opts__$1,map__21363__$2,p__21358__$1,owner__$1,hive__$1,hive_info__$1,meta21365));
});})(map__21363,map__21363__$1,opts,begin_edit))
;
}
return (new hivez.core.t21364(begin_edit,opts,map__21363__$1,p__21358,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t21372 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21372 = (function (owner,data,drawer,meta21373){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta21373 = meta21373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21372.cljs$lang$type = true;
hivez.core.t21372.cljs$lang$ctorStr = "hivez.core/t21372";
hivez.core.t21372.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t21372");
});
hivez.core.t21372.prototype.om$core$IRenderState$ = true;
hivez.core.t21372.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__21375){var self__ = this;
var map__21376 = p__21375;var map__21376__$1 = ((cljs.core.seq_QMARK_.call(null,map__21376))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);var editing = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__21376,map__21376__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__21376,map__21376__$1,editing))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__12546__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data));if(or__12546__auto__)
{return or__12546__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null)):null)));
});
hivez.core.t21372.prototype.om$core$IInitState$ = true;
hivez.core.t21372.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});
hivez.core.t21372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21374){var self__ = this;
var _21374__$1 = this;return self__.meta21373;
});
hivez.core.t21372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21374,meta21373__$1){var self__ = this;
var _21374__$1 = this;return (new hivez.core.t21372(self__.owner,self__.data,self__.drawer,meta21373__$1));
});
hivez.core.__GT_t21372 = (function __GT_t21372(owner__$1,data__$1,drawer__$1,meta21373){return (new hivez.core.t21372(owner__$1,data__$1,drawer__$1,meta21373));
});
}
return (new hivez.core.t21372(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t21380 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21380 = (function (owner,data,app,meta21381){
this.owner = owner;
this.data = data;
this.app = app;
this.meta21381 = meta21381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21380.cljs$lang$type = true;
hivez.core.t21380.cljs$lang$ctorStr = "hivez.core/t21380";
hivez.core.t21380.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t21380");
});
hivez.core.t21380.prototype.om$core$IRender$ = true;
hivez.core.t21380.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t21380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21382){var self__ = this;
var _21382__$1 = this;return self__.meta21381;
});
hivez.core.t21380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21382,meta21381__$1){var self__ = this;
var _21382__$1 = this;return (new hivez.core.t21380(self__.owner,self__.data,self__.app,meta21381__$1));
});
hivez.core.__GT_t21380 = (function __GT_t21380(owner__$1,data__$1,app__$1,meta21381){return (new hivez.core.t21380(owner__$1,data__$1,app__$1,meta21381));
});
}
return (new hivez.core.t21380(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map