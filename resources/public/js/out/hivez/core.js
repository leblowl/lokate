// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('secretary.core');
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
goog.require('secretary.core');
goog.require('hivez.map');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Angels Camp",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(5),new cljs.core.Keyword(null,"lng","lng",1667213918),(5)], null)], null),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__47265_SHARP_){return cljs.core.assoc.call(null,p1__47265_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
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
floormat.cljs$lang$applyTo = (function (arglist__47266){
var args = cljs.core.seq(arglist__47266);
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
return (function (p1__47267_SHARP_){return cljs.core.assoc_in.call(null,p1__47267_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__47268_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__47268_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive){
return (function (p1__47269_SHARP_){return cljs.core.assoc.call(null,p1__47269_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(data,key){return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),(function (p1__47270_SHARP_){if(cljs.core._EQ_.call(null,key,p1__47270_SHARP_))
{return null;
} else
{return key;
}
}));
});
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_47273 = key.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive_47273){
return (function (p1__47271_SHARP_){return cljs.core.dissoc.call(null,p1__47271_SHARP_,key);
});})(hive_47273))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_47273,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
} else
{om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (p1__47272_SHARP_){return cljs.core.dissoc.call(null,p1__47272_SHARP_,key);
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
hivez.core.db_add_hive.call(null,cljs.core.deref.call(null,hive));
return cb.call(null);
});
hivez.core.input = (function input(hive,owner,p__47274){var map__47281 = p__47274;var map__47281__$1 = ((cljs.core.seq_QMARK_.call(null,map__47281))?cljs.core.apply.call(null,cljs.core.hash_map,map__47281):map__47281);var opts = map__47281__$1;var on_key_down = cljs.core.get.call(null,map__47281__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__47281__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__47281__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__47281__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__47281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t47282 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47282 = (function (input,on_key_down,owner,hive,p__47274,map__47281,edit_key,className,on_edit,id,opts,meta47283){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.p__47274 = p__47274;
this.map__47281 = map__47281;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta47283 = meta47283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47282.cljs$lang$type = true;
hivez.core.t47282.cljs$lang$ctorStr = "hivez.core/t47282";
hivez.core.t47282.cljs$lang$ctorPrWriter = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47282");
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t47282.prototype.om$core$IRenderState$ = true;
hivez.core.t47282.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__47285){var self__ = this;
var map__47286 = p__47285;var map__47286__$1 = ((cljs.core.seq_QMARK_.call(null,map__47286))?cljs.core.apply.call(null,cljs.core.hash_map,map__47286):map__47286);var exit_type = cljs.core.get.call(null,map__47286__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__47286,map__47286__$1,exit_type,map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t47282.prototype.om$core$IDidMount$ = true;
hivez.core.t47282.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t47282.prototype.om$core$IInitState$ = true;
hivez.core.t47282.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t47282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_47284){var self__ = this;
var _47284__$1 = this;return self__.meta47283;
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t47282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_47284,meta47283__$1){var self__ = this;
var _47284__$1 = this;return (new hivez.core.t47282(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.p__47274,self__.map__47281,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta47283__$1));
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t47282 = ((function (map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t47282(input__$1,on_key_down__$1,owner__$1,hive__$1,p__47274__$1,map__47281__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta47283){return (new hivez.core.t47282(input__$1,on_key_down__$1,owner__$1,hive__$1,p__47274__$1,map__47281__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta47283));
});})(map__47281,map__47281__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t47282(input,on_key_down,owner,hive,p__47274,map__47281__$1,edit_key,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__47287){var map__47295 = p__47287;var map__47295__$1 = ((cljs.core.seq_QMARK_.call(null,map__47295))?cljs.core.apply.call(null,cljs.core.hash_map,map__47295):map__47295);var opts = map__47295__$1;var on_edit = cljs.core.get.call(null,map__47295__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t47296 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47296 = (function (on_edit,opts,map__47295,p__47287,owner,hive,input_control,meta47297){
this.on_edit = on_edit;
this.opts = opts;
this.map__47295 = map__47295;
this.p__47287 = p__47287;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta47297 = meta47297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47296.cljs$lang$type = true;
hivez.core.t47296.cljs$lang$ctorStr = "hivez.core/t47296";
hivez.core.t47296.cljs$lang$ctorPrWriter = ((function (map__47295,map__47295__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47296");
});})(map__47295,map__47295__$1,opts,on_edit))
;
hivez.core.t47296.prototype.om$core$IRenderState$ = true;
hivez.core.t47296.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47295,map__47295__$1,opts,on_edit){
return (function (_,p__47299){var self__ = this;
var map__47300 = p__47299;var map__47300__$1 = ((cljs.core.seq_QMARK_.call(null,map__47300))?cljs.core.apply.call(null,cljs.core.hash_map,map__47300):map__47300);var editing = cljs.core.get.call(null,map__47300__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__47301 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__47301) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__47301,___$1,map__47300,map__47300__$1,editing,map__47295,map__47295__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__47301,___$1,map__47300,map__47300__$1,editing,map__47295,map__47295__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__47295,map__47295__$1,opts,on_edit))
;
hivez.core.t47296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47295,map__47295__$1,opts,on_edit){
return (function (_47298){var self__ = this;
var _47298__$1 = this;return self__.meta47297;
});})(map__47295,map__47295__$1,opts,on_edit))
;
hivez.core.t47296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47295,map__47295__$1,opts,on_edit){
return (function (_47298,meta47297__$1){var self__ = this;
var _47298__$1 = this;return (new hivez.core.t47296(self__.on_edit,self__.opts,self__.map__47295,self__.p__47287,self__.owner,self__.hive,self__.input_control,meta47297__$1));
});})(map__47295,map__47295__$1,opts,on_edit))
;
hivez.core.__GT_t47296 = ((function (map__47295,map__47295__$1,opts,on_edit){
return (function __GT_t47296(on_edit__$1,opts__$1,map__47295__$2,p__47287__$1,owner__$1,hive__$1,input_control__$1,meta47297){return (new hivez.core.t47296(on_edit__$1,opts__$1,map__47295__$2,p__47287__$1,owner__$1,hive__$1,input_control__$1,meta47297));
});})(map__47295,map__47295__$1,opts,on_edit))
;
}
return (new hivez.core.t47296(on_edit,opts,map__47295__$1,p__47287,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__47303){var map__47308 = p__47303;var map__47308__$1 = ((cljs.core.seq_QMARK_.call(null,map__47308))?cljs.core.apply.call(null,cljs.core.hash_map,map__47308):map__47308);var opts = map__47308__$1;var begin_edit = cljs.core.get.call(null,map__47308__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t47309 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47309 = (function (begin_edit,opts,map__47308,p__47303,owner,hive,hive_info,meta47310){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__47308 = map__47308;
this.p__47303 = p__47303;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta47310 = meta47310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47309.cljs$lang$type = true;
hivez.core.t47309.cljs$lang$ctorStr = "hivez.core/t47309";
hivez.core.t47309.cljs$lang$ctorPrWriter = ((function (map__47308,map__47308__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47309");
});})(map__47308,map__47308__$1,opts,begin_edit))
;
hivez.core.t47309.prototype.om$core$IRender$ = true;
hivez.core.t47309.prototype.om$core$IRender$render$arity$1 = ((function (map__47308,map__47308__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__47308,map__47308__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__47308,map__47308__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__47308,map__47308__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__47308,map__47308__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__47308,map__47308__$1,opts,begin_edit))
;
hivez.core.t47309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47308,map__47308__$1,opts,begin_edit){
return (function (_47311){var self__ = this;
var _47311__$1 = this;return self__.meta47310;
});})(map__47308,map__47308__$1,opts,begin_edit))
;
hivez.core.t47309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47308,map__47308__$1,opts,begin_edit){
return (function (_47311,meta47310__$1){var self__ = this;
var _47311__$1 = this;return (new hivez.core.t47309(self__.begin_edit,self__.opts,self__.map__47308,self__.p__47303,self__.owner,self__.hive,self__.hive_info,meta47310__$1));
});})(map__47308,map__47308__$1,opts,begin_edit))
;
hivez.core.__GT_t47309 = ((function (map__47308,map__47308__$1,opts,begin_edit){
return (function __GT_t47309(begin_edit__$1,opts__$1,map__47308__$2,p__47303__$1,owner__$1,hive__$1,hive_info__$1,meta47310){return (new hivez.core.t47309(begin_edit__$1,opts__$1,map__47308__$2,p__47303__$1,owner__$1,hive__$1,hive_info__$1,meta47310));
});})(map__47308,map__47308__$1,opts,begin_edit))
;
}
return (new hivez.core.t47309(begin_edit,opts,map__47308__$1,p__47303,owner,hive,hive_info,null));
});
hivez.core.name_select = (function name_select(data,owner,p__47312){var map__47317 = p__47312;var map__47317__$1 = ((cljs.core.seq_QMARK_.call(null,map__47317))?cljs.core.apply.call(null,cljs.core.hash_map,map__47317):map__47317);var opts = map__47317__$1;var route = cljs.core.get.call(null,map__47317__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t47318 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47318 = (function (route,opts,map__47317,p__47312,owner,data,name_select,meta47319){
this.route = route;
this.opts = opts;
this.map__47317 = map__47317;
this.p__47312 = p__47312;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta47319 = meta47319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47318.cljs$lang$type = true;
hivez.core.t47318.cljs$lang$ctorStr = "hivez.core/t47318";
hivez.core.t47318.cljs$lang$ctorPrWriter = ((function (map__47317,map__47317__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47318");
});})(map__47317,map__47317__$1,opts,route))
;
hivez.core.t47318.prototype.om$core$IRender$ = true;
hivez.core.t47318.prototype.om$core$IRender$render$arity$1 = ((function (map__47317,map__47317__$1,opts,route){
return (function (this__14153__auto__){var self__ = this;
var this__14153__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14153__auto____$1,map__47317,map__47317__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,self__.data], null));
});})(this__14153__auto____$1,map__47317,map__47317__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__47317,map__47317__$1,opts,route))
;
hivez.core.t47318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47317,map__47317__$1,opts,route){
return (function (_47320){var self__ = this;
var _47320__$1 = this;return self__.meta47319;
});})(map__47317,map__47317__$1,opts,route))
;
hivez.core.t47318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47317,map__47317__$1,opts,route){
return (function (_47320,meta47319__$1){var self__ = this;
var _47320__$1 = this;return (new hivez.core.t47318(self__.route,self__.opts,self__.map__47317,self__.p__47312,self__.owner,self__.data,self__.name_select,meta47319__$1));
});})(map__47317,map__47317__$1,opts,route))
;
hivez.core.__GT_t47318 = ((function (map__47317,map__47317__$1,opts,route){
return (function __GT_t47318(route__$1,opts__$1,map__47317__$2,p__47312__$1,owner__$1,data__$1,name_select__$1,meta47319){return (new hivez.core.t47318(route__$1,opts__$1,map__47317__$2,p__47312__$1,owner__$1,data__$1,name_select__$1,meta47319));
});})(map__47317,map__47317__$1,opts,route))
;
}
return (new hivez.core.t47318(route,opts,map__47317__$1,p__47312,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t47324 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47324 = (function (owner,places,places_info,meta47325){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta47325 = meta47325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47324.cljs$lang$type = true;
hivez.core.t47324.cljs$lang$ctorStr = "hivez.core/t47324";
hivez.core.t47324.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47324");
});
hivez.core.t47324.prototype.om$core$IRender$ = true;
hivez.core.t47324.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t47324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47326){var self__ = this;
var _47326__$1 = this;return self__.meta47325;
});
hivez.core.t47324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47326,meta47325__$1){var self__ = this;
var _47326__$1 = this;return (new hivez.core.t47324(self__.owner,self__.places,self__.places_info,meta47325__$1));
});
hivez.core.__GT_t47324 = (function __GT_t47324(owner__$1,places__$1,places_info__$1,meta47325){return (new hivez.core.t47324(owner__$1,places__$1,places_info__$1,meta47325));
});
}
return (new hivez.core.t47324(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t47330 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47330 = (function (owner,place,place_info,meta47331){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta47331 = meta47331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47330.cljs$lang$type = true;
hivez.core.t47330.cljs$lang$ctorStr = "hivez.core/t47330";
hivez.core.t47330.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47330");
});
hivez.core.t47330.prototype.om$core$IRender$ = true;
hivez.core.t47330.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t47330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47332){var self__ = this;
var _47332__$1 = this;return self__.meta47331;
});
hivez.core.t47330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47332,meta47331__$1){var self__ = this;
var _47332__$1 = this;return (new hivez.core.t47330(self__.owner,self__.place,self__.place_info,meta47331__$1));
});
hivez.core.__GT_t47330 = (function __GT_t47330(owner__$1,place__$1,place_info__$1,meta47331){return (new hivez.core.t47330(owner__$1,place__$1,place_info__$1,meta47331));
});
}
return (new hivez.core.t47330(owner,place,place_info,null));
});
hivez.core.root = (function root(root_id,owner,comp,data,opts){return om.core.root.call(null,comp,data,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(root_id),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250))], null)], null),opts));
});
hivez.core.navicon = (function navicon(data,owner,p__47334){var map__47341 = p__47334;var map__47341__$1 = ((cljs.core.seq_QMARK_.call(null,map__47341))?cljs.core.apply.call(null,cljs.core.hash_map,map__47341):map__47341);var opts = map__47341__$1;var route_chan = cljs.core.get.call(null,map__47341__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));if(typeof hivez.core.t47342 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47342 = (function (route_chan,opts,map__47341,p__47334,owner,data,navicon,meta47343){
this.route_chan = route_chan;
this.opts = opts;
this.map__47341 = map__47341;
this.p__47334 = p__47334;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta47343 = meta47343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47342.cljs$lang$type = true;
hivez.core.t47342.cljs$lang$ctorStr = "hivez.core/t47342";
hivez.core.t47342.cljs$lang$ctorPrWriter = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47342");
});})(map__47341,map__47341__$1,opts,route_chan))
;
hivez.core.t47342.prototype.om$core$IRenderState$ = true;
hivez.core.t47342.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function (_,p__47345){var self__ = this;
var map__47346 = p__47345;var map__47346__$1 = ((cljs.core.seq_QMARK_.call(null,map__47346))?cljs.core.apply.call(null,cljs.core.hash_map,map__47346):map__47346);var active = cljs.core.get.call(null,map__47346__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__47346,map__47346__$1,active,map__47341,map__47341__$1,opts,route_chan){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__47346,map__47346__$1,active,map__47341,map__47341__$1,opts,route_chan){
return (function (p1__47333_SHARP_){return cljs.core.not.call(null,p1__47333_SHARP_);
});})(___$1,map__47346,map__47346__$1,active,map__47341,map__47341__$1,opts,route_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.route_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["open"], null));
});})(___$1,map__47346,map__47346__$1,active,map__47341,map__47341__$1,opts,route_chan))
, "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__47341,map__47341__$1,opts,route_chan))
;
hivez.core.t47342.prototype.om$core$IInitState$ = true;
hivez.core.t47342.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__47341,map__47341__$1,opts,route_chan))
;
hivez.core.t47342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function (_47344){var self__ = this;
var _47344__$1 = this;return self__.meta47343;
});})(map__47341,map__47341__$1,opts,route_chan))
;
hivez.core.t47342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function (_47344,meta47343__$1){var self__ = this;
var _47344__$1 = this;return (new hivez.core.t47342(self__.route_chan,self__.opts,self__.map__47341,self__.p__47334,self__.owner,self__.data,self__.navicon,meta47343__$1));
});})(map__47341,map__47341__$1,opts,route_chan))
;
hivez.core.__GT_t47342 = ((function (map__47341,map__47341__$1,opts,route_chan){
return (function __GT_t47342(route_chan__$1,opts__$1,map__47341__$2,p__47334__$1,owner__$1,data__$1,navicon__$1,meta47343){return (new hivez.core.t47342(route_chan__$1,opts__$1,map__47341__$2,p__47334__$1,owner__$1,data__$1,navicon__$1,meta47343));
});})(map__47341,map__47341__$1,opts,route_chan))
;
}
return (new hivez.core.t47342(route_chan,opts,map__47341__$1,p__47334,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,p__47347){var map__47352 = p__47347;var map__47352__$1 = ((cljs.core.seq_QMARK_.call(null,map__47352))?cljs.core.apply.call(null,cljs.core.hash_map,map__47352):map__47352);var opts = map__47352__$1;var route_chan = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));if(typeof hivez.core.t47353 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47353 = (function (route_chan,opts,map__47352,p__47347,owner,data,control_panel,meta47354){
this.route_chan = route_chan;
this.opts = opts;
this.map__47352 = map__47352;
this.p__47347 = p__47347;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta47354 = meta47354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47353.cljs$lang$type = true;
hivez.core.t47353.cljs$lang$ctorStr = "hivez.core/t47353";
hivez.core.t47353.cljs$lang$ctorPrWriter = ((function (map__47352,map__47352__$1,opts,route_chan){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47353");
});})(map__47352,map__47352__$1,opts,route_chan))
;
hivez.core.t47353.prototype.om$core$IRender$ = true;
hivez.core.t47353.prototype.om$core$IRender$render$arity$1 = ((function (map__47352,map__47352__$1,opts,route_chan){
return (function (this__14153__auto__){var self__ = this;
var this__14153__auto____$1 = this;return React.DOM.div({"className": "control-panel"},om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)));
});})(map__47352,map__47352__$1,opts,route_chan))
;
hivez.core.t47353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47352,map__47352__$1,opts,route_chan){
return (function (_47355){var self__ = this;
var _47355__$1 = this;return self__.meta47354;
});})(map__47352,map__47352__$1,opts,route_chan))
;
hivez.core.t47353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47352,map__47352__$1,opts,route_chan){
return (function (_47355,meta47354__$1){var self__ = this;
var _47355__$1 = this;return (new hivez.core.t47353(self__.route_chan,self__.opts,self__.map__47352,self__.p__47347,self__.owner,self__.data,self__.control_panel,meta47354__$1));
});})(map__47352,map__47352__$1,opts,route_chan))
;
hivez.core.__GT_t47353 = ((function (map__47352,map__47352__$1,opts,route_chan){
return (function __GT_t47353(route_chan__$1,opts__$1,map__47352__$2,p__47347__$1,owner__$1,data__$1,control_panel__$1,meta47354){return (new hivez.core.t47353(route_chan__$1,opts__$1,map__47352__$2,p__47347__$1,owner__$1,data__$1,control_panel__$1,meta47354));
});})(map__47352,map__47352__$1,opts,route_chan))
;
}
return (new hivez.core.t47353(route_chan,opts,map__47352__$1,p__47347,owner,data,control_panel,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t47418 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47418 = (function (owner,data,drawer,meta47419){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta47419 = meta47419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47418.cljs$lang$type = true;
hivez.core.t47418.cljs$lang$ctorStr = "hivez.core/t47418";
hivez.core.t47418.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47418");
});
hivez.core.t47418.prototype.om$core$IRenderState$ = true;
hivez.core.t47418.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__47421){var self__ = this;
var map__47422 = p__47421;var map__47422__$1 = ((cljs.core.seq_QMARK_.call(null,map__47422))?cljs.core.apply.call(null,cljs.core.hash_map,map__47422):map__47422);var route_chan = cljs.core.get.call(null,map__47422__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));var editing = cljs.core.get.call(null,map__47422__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__47422__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),route_chan], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__47422,map__47422__$1,route_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__47422,map__47422__$1,route_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"}));
});
hivez.core.t47418.prototype.om$core$IDidMount$ = true;
hivez.core.t47418.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["places"], null));
});
hivez.core.t47418.prototype.om$core$IWillMount$ = true;
hivez.core.t47418.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,___$1){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,___$1){
return (function (state_47457){var state_val_47458 = (state_47457[(1)]);if((state_val_47458 === (9)))
{var inst_47427 = (state_47457[(7)]);var inst_47426 = (state_47457[(8)]);var inst_47440 = cljs.core.second.call(null,inst_47426);var inst_47441 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_47442 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_47443 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_47444 = [inst_47443];var inst_47445 = cljs.core.PersistentHashMap.fromArrays(inst_47442,inst_47444);var inst_47446 = [inst_47445];var inst_47447 = cljs.core.PersistentHashMap.fromArrays(inst_47441,inst_47446);var inst_47448 = inst_47427.call(null,hivez.core.hive_info,inst_47440,inst_47447);var state_47457__$1 = state_47457;var statearr_47459_47479 = state_47457__$1;(statearr_47459_47479[(2)] = inst_47448);
(statearr_47459_47479[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (8)))
{var inst_47427 = (state_47457[(7)]);var inst_47426 = (state_47457[(8)]);var inst_47436 = cljs.core.second.call(null,inst_47426);var inst_47437 = cljs.core.PersistentHashMap.EMPTY;var inst_47438 = inst_47427.call(null,hivez.core.place_info,inst_47436,inst_47437);var state_47457__$1 = state_47457;var statearr_47460_47480 = state_47457__$1;(statearr_47460_47480[(2)] = inst_47438);
(statearr_47460_47480[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (7)))
{var inst_47427 = (state_47457[(7)]);var inst_47431 = cljs.core.deref.call(null,self__.data);var inst_47432 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(inst_47431);var inst_47433 = cljs.core.PersistentHashMap.EMPTY;var inst_47434 = inst_47427.call(null,hivez.core.places_info,inst_47432,inst_47433);var state_47457__$1 = state_47457;var statearr_47461_47481 = state_47457__$1;(statearr_47461_47481[(2)] = inst_47434);
(statearr_47461_47481[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (6)))
{var inst_47427 = (state_47457[(7)]);var inst_47426 = (state_47457[(8)]);var inst_47428 = (function (){var route_BANG_ = inst_47427;var route = inst_47426;return ((function (route_BANG_,route,inst_47427,inst_47426,state_val_47458,c__15086__auto__,___$1){
return (function (p1__47356_SHARP_){return cljs.core.not.call(null,p1__47356_SHARP_);
});
;})(route_BANG_,route,inst_47427,inst_47426,state_val_47458,c__15086__auto__,___$1))
})();var inst_47429 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),inst_47428);var state_47457__$1 = state_47457;var statearr_47462_47482 = state_47457__$1;(statearr_47462_47482[(2)] = inst_47429);
(statearr_47462_47482[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (5)))
{var inst_47452 = (state_47457[(2)]);var state_47457__$1 = (function (){var statearr_47463 = state_47457;(statearr_47463[(9)] = inst_47452);
return statearr_47463;
})();var statearr_47464_47483 = state_47457__$1;(statearr_47464_47483[(2)] = null);
(statearr_47464_47483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (4)))
{var inst_47426 = (state_47457[(8)]);var inst_47426__$1 = (state_47457[(2)]);var inst_47427 = cljs.core.partial.call(null,hivez.core.root,"drawer",self__.owner);var inst_47450 = cljs.core.first.call(null,inst_47426__$1);var state_47457__$1 = (function (){var statearr_47465 = state_47457;(statearr_47465[(7)] = inst_47427);
(statearr_47465[(8)] = inst_47426__$1);
return statearr_47465;
})();var G__47466_47484 = inst_47450;switch (G__47466_47484) {
case "open":
var statearr_47467_47486 = state_47457__$1;(statearr_47467_47486[(1)] = (6));

break;
case "places":
var statearr_47468_47487 = state_47457__$1;(statearr_47468_47487[(1)] = (7));

break;
case "place":
var statearr_47469_47488 = state_47457__$1;(statearr_47469_47488[(1)] = (8));

break;
case "hive":
var statearr_47470_47489 = state_47457__$1;(statearr_47470_47489[(1)] = (9));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47450))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47458 === (3)))
{var inst_47455 = (state_47457[(2)]);var state_47457__$1 = state_47457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47457__$1,inst_47455);
} else
{if((state_val_47458 === (2)))
{var inst_47424 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));var state_47457__$1 = state_47457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47457__$1,(4),inst_47424);
} else
{if((state_val_47458 === (1)))
{var state_47457__$1 = state_47457;var statearr_47471_47490 = state_47457__$1;(statearr_47471_47490[(2)] = null);
(statearr_47471_47490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__15086__auto__,___$1))
;return ((function (switch__15071__auto__,c__15086__auto__,___$1){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_47475 = [null,null,null,null,null,null,null,null,null,null];(statearr_47475[(0)] = state_machine__15072__auto__);
(statearr_47475[(1)] = (1));
return statearr_47475;
});
var state_machine__15072__auto____1 = (function (state_47457){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_47457);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e47476){if((e47476 instanceof Object))
{var ex__15075__auto__ = e47476;var statearr_47477_47491 = state_47457;(statearr_47477_47491[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47476;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47492 = state_47457;
state_47457 = G__47492;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_47457){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_47457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,___$1))
})();var state__15088__auto__ = (function (){var statearr_47478 = f__15087__auto__.call(null);(statearr_47478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_47478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,___$1))
);
return c__15086__auto__;
});
hivez.core.t47418.prototype.om$core$IInitState$ = true;
hivez.core.t47418.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),cljs.core.async.chan.call(null)], null);
});
hivez.core.t47418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47420){var self__ = this;
var _47420__$1 = this;return self__.meta47419;
});
hivez.core.t47418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47420,meta47419__$1){var self__ = this;
var _47420__$1 = this;return (new hivez.core.t47418(self__.owner,self__.data,self__.drawer,meta47419__$1));
});
hivez.core.__GT_t47418 = (function __GT_t47418(owner__$1,data__$1,drawer__$1,meta47419){return (new hivez.core.t47418(owner__$1,data__$1,drawer__$1,meta47419));
});
}
return (new hivez.core.t47418(owner,data,drawer,null));
});
hivez.core.to_save = (function to_save(){om.core.build.call(null,hivez.core.places_info,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(hivez.core.data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data)))
{return om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(hivez.core.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,hivez.core.owner)], null)], null));
} else
{return null;
}
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t47496 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t47496 = (function (owner,data,app,meta47497){
this.owner = owner;
this.data = data;
this.app = app;
this.meta47497 = meta47497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t47496.cljs$lang$type = true;
hivez.core.t47496.cljs$lang$ctorStr = "hivez.core/t47496";
hivez.core.t47496.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t47496");
});
hivez.core.t47496.prototype.om$core$IRender$ = true;
hivez.core.t47496.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t47496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47498){var self__ = this;
var _47498__$1 = this;return self__.meta47497;
});
hivez.core.t47496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47498,meta47497__$1){var self__ = this;
var _47498__$1 = this;return (new hivez.core.t47496(self__.owner,self__.data,self__.app,meta47497__$1));
});
hivez.core.__GT_t47496 = (function __GT_t47496(owner__$1,data__$1,app__$1,meta47497){return (new hivez.core.t47496(owner__$1,data__$1,app__$1,meta47497));
});
}
return (new hivez.core.t47496(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map