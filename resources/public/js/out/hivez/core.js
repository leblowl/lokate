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
goog.require('goog.history.EventType');
goog.require('goog.string');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('hivez.map');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('cljs_http.client');
hivez.core.history = (new goog.History());
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"All",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(5),new cljs.core.Keyword(null,"lng","lng",1667213918),(5)], null)], null),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__19372_SHARP_){return cljs.core.assoc.call(null,p1__19372_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
hivez.core.display_fade_in = (function display_fade_in(show){if(cljs.core.truth_(show))
{return {"transition": "opacity .3s", "opacity": (1)};
} else
{return {"opacity": (0)};
}
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(lat_lng))));
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
floormat.cljs$lang$applyTo = (function (arglist__19373){
var args = cljs.core.seq(arglist__19373);
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
return (function (p1__19374_SHARP_){return cljs.core.assoc_in.call(null,p1__19374_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(result,temp__4124__auto__,transaction,store,keyRange,cursorRequest))
);
return result.continue();
} else
{return cb.call(null);
}
});})(transaction,store,keyRange,cursorRequest))
;
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),hivez.core.pos_key.call(null,pos),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__19375_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__19375_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__19376_SHARP_){if(cljs.core._EQ_.call(null,key,p1__19376_SHARP_))
{return null;
} else
{return key;
}
});})(key))
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hive",path], null));
} else
{return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["place",cljs.core.take.call(null,(2),path)], null));
}
});
hivez.core.add_hive = (function add_hive(owner,data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483)], null),((function (hive){
return (function (p1__19377_SHARP_){return cljs.core.assoc.call(null,p1__19377_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_19380 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_19380){
return (function (p1__19378_SHARP_){return cljs.core.dissoc.call(null,p1__19378_SHARP_,cljs.core.last.call(null,path));
});})(hive_19380))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_19380,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__19379_SHARP_){return cljs.core.dissoc.call(null,p1__19379_SHARP_,cljs.core.last.call(null,path));
}));
}
return hivez.core.db_delete_hive.call(null,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__19381){var map__19388 = p__19381;var map__19388__$1 = ((cljs.core.seq_QMARK_.call(null,map__19388))?cljs.core.apply.call(null,cljs.core.hash_map,map__19388):map__19388);var opts = map__19388__$1;var on_key_down = cljs.core.get.call(null,map__19388__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__19388__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__19388__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__19388__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__19388__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t19389 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19389 = (function (input,map__19388,on_key_down,owner,data,edit_key,p__19381,className,on_edit,id,opts,meta19390){
this.input = input;
this.map__19388 = map__19388;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.edit_key = edit_key;
this.p__19381 = p__19381;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta19390 = meta19390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19389.cljs$lang$type = true;
hivez.core.t19389.cljs$lang$ctorStr = "hivez.core/t19389";
hivez.core.t19389.cljs$lang$ctorPrWriter = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19389");
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t19389.prototype.om$core$IRenderState$ = true;
hivez.core.t19389.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__19392){var self__ = this;
var map__19393 = p__19392;var map__19393__$1 = ((cljs.core.seq_QMARK_.call(null,map__19393))?cljs.core.apply.call(null,cljs.core.hash_map,map__19393):map__19393);var exit_type = cljs.core.get.call(null,map__19393__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__19393,map__19393__$1,exit_type,map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t19389.prototype.om$core$IDidMount$ = true;
hivez.core.t19389.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t19389.prototype.om$core$IInitState$ = true;
hivez.core.t19389.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t19389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_19391){var self__ = this;
var _19391__$1 = this;return self__.meta19390;
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t19389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_19391,meta19390__$1){var self__ = this;
var _19391__$1 = this;return (new hivez.core.t19389(self__.input,self__.map__19388,self__.on_key_down,self__.owner,self__.data,self__.edit_key,self__.p__19381,self__.className,self__.on_edit,self__.id,self__.opts,meta19390__$1));
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t19389 = ((function (map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t19389(input__$1,map__19388__$2,on_key_down__$1,owner__$1,data__$1,edit_key__$1,p__19381__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta19390){return (new hivez.core.t19389(input__$1,map__19388__$2,on_key_down__$1,owner__$1,data__$1,edit_key__$1,p__19381__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta19390));
});})(map__19388,map__19388__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t19389(input,map__19388__$1,on_key_down,owner,data,edit_key,p__19381,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__19394){var map__19402 = p__19394;var map__19402__$1 = ((cljs.core.seq_QMARK_.call(null,map__19402))?cljs.core.apply.call(null,cljs.core.hash_map,map__19402):map__19402);var opts = map__19402__$1;var on_edit = cljs.core.get.call(null,map__19402__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t19403 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19403 = (function (on_edit,opts,map__19402,p__19394,owner,hive,input_control,meta19404){
this.on_edit = on_edit;
this.opts = opts;
this.map__19402 = map__19402;
this.p__19394 = p__19394;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta19404 = meta19404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19403.cljs$lang$type = true;
hivez.core.t19403.cljs$lang$ctorStr = "hivez.core/t19403";
hivez.core.t19403.cljs$lang$ctorPrWriter = ((function (map__19402,map__19402__$1,opts,on_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19403");
});})(map__19402,map__19402__$1,opts,on_edit))
;
hivez.core.t19403.prototype.om$core$IRenderState$ = true;
hivez.core.t19403.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__19402,map__19402__$1,opts,on_edit){
return (function (_,p__19406){var self__ = this;
var map__19407 = p__19406;var map__19407__$1 = ((cljs.core.seq_QMARK_.call(null,map__19407))?cljs.core.apply.call(null,cljs.core.hash_map,map__19407):map__19407);var editing = cljs.core.get.call(null,map__19407__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__19408 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__19408) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__19408,___$1,map__19407,map__19407__$1,editing,map__19402,map__19402__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__19408,___$1,map__19407,map__19407__$1,editing,map__19402,map__19402__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__19402,map__19402__$1,opts,on_edit))
;
hivez.core.t19403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19402,map__19402__$1,opts,on_edit){
return (function (_19405){var self__ = this;
var _19405__$1 = this;return self__.meta19404;
});})(map__19402,map__19402__$1,opts,on_edit))
;
hivez.core.t19403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19402,map__19402__$1,opts,on_edit){
return (function (_19405,meta19404__$1){var self__ = this;
var _19405__$1 = this;return (new hivez.core.t19403(self__.on_edit,self__.opts,self__.map__19402,self__.p__19394,self__.owner,self__.hive,self__.input_control,meta19404__$1));
});})(map__19402,map__19402__$1,opts,on_edit))
;
hivez.core.__GT_t19403 = ((function (map__19402,map__19402__$1,opts,on_edit){
return (function __GT_t19403(on_edit__$1,opts__$1,map__19402__$2,p__19394__$1,owner__$1,hive__$1,input_control__$1,meta19404){return (new hivez.core.t19403(on_edit__$1,opts__$1,map__19402__$2,p__19394__$1,owner__$1,hive__$1,input_control__$1,meta19404));
});})(map__19402,map__19402__$1,opts,on_edit))
;
}
return (new hivez.core.t19403(on_edit,opts,map__19402__$1,p__19394,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__19410){var map__19415 = p__19410;var map__19415__$1 = ((cljs.core.seq_QMARK_.call(null,map__19415))?cljs.core.apply.call(null,cljs.core.hash_map,map__19415):map__19415);var opts = map__19415__$1;var route = cljs.core.get.call(null,map__19415__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t19416 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19416 = (function (route,opts,map__19415,p__19410,owner,data,name_select,meta19417){
this.route = route;
this.opts = opts;
this.map__19415 = map__19415;
this.p__19410 = p__19410;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta19417 = meta19417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19416.cljs$lang$type = true;
hivez.core.t19416.cljs$lang$ctorStr = "hivez.core/t19416";
hivez.core.t19416.cljs$lang$ctorPrWriter = ((function (map__19415,map__19415__$1,opts,route){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19416");
});})(map__19415,map__19415__$1,opts,route))
;
hivez.core.t19416.prototype.om$core$IRender$ = true;
hivez.core.t19416.prototype.om$core$IRender$render$arity$1 = ((function (map__19415,map__19415__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__19415,map__19415__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__19415,map__19415__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__19415,map__19415__$1,opts,route))
;
hivez.core.t19416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19415,map__19415__$1,opts,route){
return (function (_19418){var self__ = this;
var _19418__$1 = this;return self__.meta19417;
});})(map__19415,map__19415__$1,opts,route))
;
hivez.core.t19416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19415,map__19415__$1,opts,route){
return (function (_19418,meta19417__$1){var self__ = this;
var _19418__$1 = this;return (new hivez.core.t19416(self__.route,self__.opts,self__.map__19415,self__.p__19410,self__.owner,self__.data,self__.name_select,meta19417__$1));
});})(map__19415,map__19415__$1,opts,route))
;
hivez.core.__GT_t19416 = ((function (map__19415,map__19415__$1,opts,route){
return (function __GT_t19416(route__$1,opts__$1,map__19415__$2,p__19410__$1,owner__$1,data__$1,name_select__$1,meta19417){return (new hivez.core.t19416(route__$1,opts__$1,map__19415__$2,p__19410__$1,owner__$1,data__$1,name_select__$1,meta19417));
});})(map__19415,map__19415__$1,opts,route))
;
}
return (new hivez.core.t19416(route,opts,map__19415__$1,p__19410,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t19422 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19422 = (function (owner,places,places_info,meta19423){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta19423 = meta19423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19422.cljs$lang$type = true;
hivez.core.t19422.cljs$lang$ctorStr = "hivez.core/t19422";
hivez.core.t19422.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19422");
});
hivez.core.t19422.prototype.om$core$IRender$ = true;
hivez.core.t19422.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t19422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19424){var self__ = this;
var _19424__$1 = this;return self__.meta19423;
});
hivez.core.t19422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19424,meta19423__$1){var self__ = this;
var _19424__$1 = this;return (new hivez.core.t19422(self__.owner,self__.places,self__.places_info,meta19423__$1));
});
hivez.core.__GT_t19422 = (function __GT_t19422(owner__$1,places__$1,places_info__$1,meta19423){return (new hivez.core.t19422(owner__$1,places__$1,places_info__$1,meta19423));
});
}
return (new hivez.core.t19422(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t19428 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19428 = (function (owner,place,place_info,meta19429){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta19429 = meta19429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19428.cljs$lang$type = true;
hivez.core.t19428.cljs$lang$ctorStr = "hivez.core/t19428";
hivez.core.t19428.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19428");
});
hivez.core.t19428.prototype.om$core$IRender$ = true;
hivez.core.t19428.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t19428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19430){var self__ = this;
var _19430__$1 = this;return self__.meta19429;
});
hivez.core.t19428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19430,meta19429__$1){var self__ = this;
var _19430__$1 = this;return (new hivez.core.t19428(self__.owner,self__.place,self__.place_info,meta19429__$1));
});
hivez.core.__GT_t19428 = (function __GT_t19428(owner__$1,place__$1,place_info__$1,meta19429){return (new hivez.core.t19428(owner__$1,place__$1,place_info__$1,meta19429));
});
}
return (new hivez.core.t19428(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__19431){var map__19436 = p__19431;var map__19436__$1 = ((cljs.core.seq_QMARK_.call(null,map__19436))?cljs.core.apply.call(null,cljs.core.hash_map,map__19436):map__19436);var opts = map__19436__$1;var begin_edit = cljs.core.get.call(null,map__19436__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t19437 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19437 = (function (begin_edit,opts,map__19436,p__19431,owner,hive,hive_info,meta19438){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__19436 = map__19436;
this.p__19431 = p__19431;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta19438 = meta19438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19437.cljs$lang$type = true;
hivez.core.t19437.cljs$lang$ctorStr = "hivez.core/t19437";
hivez.core.t19437.cljs$lang$ctorPrWriter = ((function (map__19436,map__19436__$1,opts,begin_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19437");
});})(map__19436,map__19436__$1,opts,begin_edit))
;
hivez.core.t19437.prototype.om$core$IRender$ = true;
hivez.core.t19437.prototype.om$core$IRender$render$arity$1 = ((function (map__19436,map__19436__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__19436,map__19436__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__19436,map__19436__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__19436,map__19436__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__19436,map__19436__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__19436,map__19436__$1,opts,begin_edit))
;
hivez.core.t19437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19436,map__19436__$1,opts,begin_edit){
return (function (_19439){var self__ = this;
var _19439__$1 = this;return self__.meta19438;
});})(map__19436,map__19436__$1,opts,begin_edit))
;
hivez.core.t19437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19436,map__19436__$1,opts,begin_edit){
return (function (_19439,meta19438__$1){var self__ = this;
var _19439__$1 = this;return (new hivez.core.t19437(self__.begin_edit,self__.opts,self__.map__19436,self__.p__19431,self__.owner,self__.hive,self__.hive_info,meta19438__$1));
});})(map__19436,map__19436__$1,opts,begin_edit))
;
hivez.core.__GT_t19437 = ((function (map__19436,map__19436__$1,opts,begin_edit){
return (function __GT_t19437(begin_edit__$1,opts__$1,map__19436__$2,p__19431__$1,owner__$1,hive__$1,hive_info__$1,meta19438){return (new hivez.core.t19437(begin_edit__$1,opts__$1,map__19436__$2,p__19431__$1,owner__$1,hive__$1,hive_info__$1,meta19438));
});})(map__19436,map__19436__$1,opts,begin_edit))
;
}
return (new hivez.core.t19437(begin_edit,opts,map__19436__$1,p__19431,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__19441){var map__19448 = p__19441;var map__19448__$1 = ((cljs.core.seq_QMARK_.call(null,map__19448))?cljs.core.apply.call(null,cljs.core.hash_map,map__19448):map__19448);var opts = map__19448__$1;var toggle_open = cljs.core.get.call(null,map__19448__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t19449 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19449 = (function (toggle_open,opts,map__19448,p__19441,owner,data,navicon,meta19450){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__19448 = map__19448;
this.p__19441 = p__19441;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta19450 = meta19450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19449.cljs$lang$type = true;
hivez.core.t19449.cljs$lang$ctorStr = "hivez.core/t19449";
hivez.core.t19449.cljs$lang$ctorPrWriter = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19449");
});})(map__19448,map__19448__$1,opts,toggle_open))
;
hivez.core.t19449.prototype.om$core$IRenderState$ = true;
hivez.core.t19449.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function (_,p__19452){var self__ = this;
var map__19453 = p__19452;var map__19453__$1 = ((cljs.core.seq_QMARK_.call(null,map__19453))?cljs.core.apply.call(null,cljs.core.hash_map,map__19453):map__19453);var editing = cljs.core.get.call(null,map__19453__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__19453__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__19453,map__19453__$1,editing,active,map__19448,map__19448__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__19453,map__19453__$1,editing,active,map__19448,map__19448__$1,opts,toggle_open){
return (function (p1__19440_SHARP_){return cljs.core.not.call(null,p1__19440_SHARP_);
});})(___$1,map__19453,map__19453__$1,editing,active,map__19448,map__19448__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__19453,map__19453__$1,editing,active,map__19448,map__19448__$1,opts,toggle_open))
, "style": hivez.core.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__19448,map__19448__$1,opts,toggle_open))
;
hivez.core.t19449.prototype.om$core$IInitState$ = true;
hivez.core.t19449.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__19448,map__19448__$1,opts,toggle_open))
;
hivez.core.t19449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function (_19451){var self__ = this;
var _19451__$1 = this;return self__.meta19450;
});})(map__19448,map__19448__$1,opts,toggle_open))
;
hivez.core.t19449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function (_19451,meta19450__$1){var self__ = this;
var _19451__$1 = this;return (new hivez.core.t19449(self__.toggle_open,self__.opts,self__.map__19448,self__.p__19441,self__.owner,self__.data,self__.navicon,meta19450__$1));
});})(map__19448,map__19448__$1,opts,toggle_open))
;
hivez.core.__GT_t19449 = ((function (map__19448,map__19448__$1,opts,toggle_open){
return (function __GT_t19449(toggle_open__$1,opts__$1,map__19448__$2,p__19441__$1,owner__$1,data__$1,navicon__$1,meta19450){return (new hivez.core.t19449(toggle_open__$1,opts__$1,map__19448__$2,p__19441__$1,owner__$1,data__$1,navicon__$1,meta19450));
});})(map__19448,map__19448__$1,opts,toggle_open))
;
}
return (new hivez.core.t19449(toggle_open,opts,map__19448__$1,p__19441,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(p__19455,owner,opts){var vec__19462 = p__19455;var route = cljs.core.nth.call(null,vec__19462,(0),null);var path = cljs.core.nth.call(null,vec__19462,(1),null);if(typeof hivez.core.t19463 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19463 = (function (path,route,vec__19462,opts,owner,p__19455,control_panel,meta19464){
this.path = path;
this.route = route;
this.vec__19462 = vec__19462;
this.opts = opts;
this.owner = owner;
this.p__19455 = p__19455;
this.control_panel = control_panel;
this.meta19464 = meta19464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19463.cljs$lang$type = true;
hivez.core.t19463.cljs$lang$ctorStr = "hivez.core/t19463";
hivez.core.t19463.cljs$lang$ctorPrWriter = ((function (vec__19462,route,path){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19463");
});})(vec__19462,route,path))
;
hivez.core.t19463.prototype.om$core$IRenderState$ = true;
hivez.core.t19463.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__19462,route,path){
return (function (_,p__19466){var self__ = this;
var map__19467 = p__19466;var map__19467__$1 = ((cljs.core.seq_QMARK_.call(null,map__19467))?cljs.core.apply.call(null,cljs.core.hash_map,map__19467):map__19467);var path_str = cljs.core.get.call(null,map__19467__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var history = cljs.core.get.call(null,map__19467__$1,new cljs.core.Keyword(null,"history","history",-247395220));var editing = cljs.core.get.call(null,map__19467__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__19467__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.core.display_fade_in.call(null,(function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.route)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),React.DOM.div({"onClick": ((function (___$1,map__19467,map__19467__$1,path_str,history,editing,open,vec__19462,route,path){
return (function (){var new_history = cljs.core.pop.call(null,history);if(!(cljs.core.empty_QMARK_.call(null,new_history)))
{cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),cljs.core.peek.call(null,new_history));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),new_history);
} else
{return null;
}
});})(___$1,map__19467,map__19467__$1,path_str,history,editing,open,vec__19462,route,path))
, "className": "icon-arrow-left2", "id": "nav-back-btn"})),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(vec__19462,route,path))
;
hivez.core.t19463.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t19463.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__19462,route,path){
return (function (_,next_props){var self__ = this;
var ___$1 = this;var history_19468 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220));if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,history_19468),next_props))
{} else
{om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),((function (history_19468,___$1,vec__19462,route,path){
return (function (p1__19454_SHARP_){return cljs.core.conj.call(null,p1__19454_SHARP_,next_props);
});})(history_19468,___$1,vec__19462,route,path))
);
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.last,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220)))))));
});})(vec__19462,route,path))
;
hivez.core.t19463.prototype.om$core$InitState$ = true;
hivez.core.t19463.prototype.om$core$InitState$init_state$arity$1 = ((function (vec__19462,route,path){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(vec__19462,route,path))
;
hivez.core.t19463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__19462,route,path){
return (function (_19465){var self__ = this;
var _19465__$1 = this;return self__.meta19464;
});})(vec__19462,route,path))
;
hivez.core.t19463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__19462,route,path){
return (function (_19465,meta19464__$1){var self__ = this;
var _19465__$1 = this;return (new hivez.core.t19463(self__.path,self__.route,self__.vec__19462,self__.opts,self__.owner,self__.p__19455,self__.control_panel,meta19464__$1));
});})(vec__19462,route,path))
;
hivez.core.__GT_t19463 = ((function (vec__19462,route,path){
return (function __GT_t19463(path__$1,route__$1,vec__19462__$1,opts__$1,owner__$1,p__19455__$1,control_panel__$1,meta19464){return (new hivez.core.t19463(path__$1,route__$1,vec__19462__$1,opts__$1,owner__$1,p__19455__$1,control_panel__$1,meta19464));
});})(vec__19462,route,path))
;
}
return (new hivez.core.t19463(path,route,vec__19462,opts,owner,p__19455,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.route_BANG_ = (function route_BANG_(owner,child,child_ks,child_opts){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child","child",623967545),child);
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),child_ks);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),(function (){var or__12547__auto__ = child_opts;if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t19528 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19528 = (function (owner,data,drawer,meta19529){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta19529 = meta19529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19528.cljs$lang$type = true;
hivez.core.t19528.cljs$lang$ctorStr = "hivez.core/t19528";
hivez.core.t19528.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19528");
});
hivez.core.t19528.prototype.om$core$IRenderState$ = true;
hivez.core.t19528.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19531){var self__ = this;
var map__19532 = p__19531;var map__19532__$1 = ((cljs.core.seq_QMARK_.call(null,map__19532))?cljs.core.apply.call(null,cljs.core.hash_map,map__19532):map__19532);var child_opts = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"child","child",623967545));var route = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"route","route",329891309));var nav_chan = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__19532__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,child_ks,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,child_ks))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__19532,map__19532__$1,child_opts,child_ks,child,route,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__19532,map__19532__$1,child_opts,child_ks,child,route,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t19528.prototype.om$core$IWillMount$ = true;
hivez.core.t19528.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_19566){var state_val_19567 = (state_19566[(1)]);if((state_val_19567 === (8)))
{var inst_19536 = (state_19566[(7)]);var inst_19545 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_19546 = cljs.core.second.call(null,inst_19536);var inst_19547 = cljs.core.last.call(null,inst_19546);var inst_19548 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_19547);var inst_19549 = cljs.core.second.call(null,inst_19536);var inst_19550 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_19551 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_19552 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_19553 = [inst_19552];var inst_19554 = cljs.core.PersistentHashMap.fromArrays(inst_19551,inst_19553);var inst_19555 = [inst_19554];var inst_19556 = cljs.core.PersistentHashMap.fromArrays(inst_19550,inst_19555);var inst_19557 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_19549,inst_19556);var state_19566__$1 = (function (){var statearr_19568 = state_19566;(statearr_19568[(8)] = inst_19548);
(statearr_19568[(9)] = inst_19545);
return statearr_19568;
})();var statearr_19569_19587 = state_19566__$1;(statearr_19569_19587[(2)] = inst_19557);
(statearr_19569_19587[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19567 === (7)))
{var inst_19536 = (state_19566[(7)]);var inst_19542 = cljs.core.second.call(null,inst_19536);var inst_19543 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_19542);var state_19566__$1 = state_19566;var statearr_19570_19588 = state_19566__$1;(statearr_19570_19588[(2)] = inst_19543);
(statearr_19570_19588[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19567 === (6)))
{var inst_19536 = (state_19566[(7)]);var inst_19539 = cljs.core.second.call(null,inst_19536);var inst_19540 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_19539);var state_19566__$1 = state_19566;var statearr_19571_19589 = state_19566__$1;(statearr_19571_19589[(2)] = inst_19540);
(statearr_19571_19589[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19567 === (5)))
{var inst_19561 = (state_19566[(2)]);var state_19566__$1 = (function (){var statearr_19572 = state_19566;(statearr_19572[(10)] = inst_19561);
return statearr_19572;
})();var statearr_19573_19590 = state_19566__$1;(statearr_19573_19590[(2)] = null);
(statearr_19573_19590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19567 === (4)))
{var inst_19536 = (state_19566[(7)]);var inst_19536__$1 = (state_19566[(2)]);var inst_19537 = cljs.core.first.call(null,inst_19536__$1);var inst_19538 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"route","route",329891309),inst_19537);var inst_19559 = cljs.core.first.call(null,inst_19536__$1);var state_19566__$1 = (function (){var statearr_19574 = state_19566;(statearr_19574[(11)] = inst_19538);
(statearr_19574[(7)] = inst_19536__$1);
return statearr_19574;
})();var G__19575_19591 = inst_19559;switch (G__19575_19591) {
case "places":
var statearr_19576_19593 = state_19566__$1;(statearr_19576_19593[(1)] = (6));

break;
case "place":
var statearr_19577_19594 = state_19566__$1;(statearr_19577_19594[(1)] = (7));

break;
case "hive":
var statearr_19578_19595 = state_19566__$1;(statearr_19578_19595[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19559))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19567 === (3)))
{var inst_19564 = (state_19566[(2)]);var state_19566__$1 = state_19566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19566__$1,inst_19564);
} else
{if((state_val_19567 === (2)))
{var inst_19534 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_19566__$1 = state_19566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19566__$1,(4),inst_19534);
} else
{if((state_val_19567 === (1)))
{var state_19566__$1 = state_19566;var statearr_19579_19596 = state_19566__$1;(statearr_19579_19596[(2)] = null);
(statearr_19579_19596[(1)] = (2));
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
});})(c__15087__auto__,___$1))
;return ((function (switch__15072__auto__,c__15087__auto__,___$1){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_19583 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19583[(0)] = state_machine__15073__auto__);
(statearr_19583[(1)] = (1));
return statearr_19583;
});
var state_machine__15073__auto____1 = (function (state_19566){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_19566);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e19584){if((e19584 instanceof Object))
{var ex__15076__auto__ = e19584;var statearr_19585_19597 = state_19566;(statearr_19585_19597[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19566);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19598 = state_19566;
state_19566 = G__19598;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_19566){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_19566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_19586 = f__15088__auto__.call(null);(statearr_19586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_19586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t19528.prototype.om$core$IInitState$ = true;
hivez.core.t19528.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route","route",329891309),"places",new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t19528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19530){var self__ = this;
var _19530__$1 = this;return self__.meta19529;
});
hivez.core.t19528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19530,meta19529__$1){var self__ = this;
var _19530__$1 = this;return (new hivez.core.t19528(self__.owner,self__.data,self__.drawer,meta19529__$1));
});
hivez.core.__GT_t19528 = (function __GT_t19528(owner__$1,data__$1,drawer__$1,meta19529){return (new hivez.core.t19528(owner__$1,data__$1,drawer__$1,meta19529));
});
}
return (new hivez.core.t19528(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t19602 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t19602 = (function (owner,data,app,meta19603){
this.owner = owner;
this.data = data;
this.app = app;
this.meta19603 = meta19603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t19602.cljs$lang$type = true;
hivez.core.t19602.cljs$lang$ctorStr = "hivez.core/t19602";
hivez.core.t19602.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t19602");
});
hivez.core.t19602.prototype.om$core$IRender$ = true;
hivez.core.t19602.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t19602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19604){var self__ = this;
var _19604__$1 = this;return self__.meta19603;
});
hivez.core.t19602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19604,meta19603__$1){var self__ = this;
var _19604__$1 = this;return (new hivez.core.t19602(self__.owner,self__.data,self__.app,meta19603__$1));
});
hivez.core.__GT_t19602 = (function __GT_t19602(owner__$1,data__$1,app__$1,meta19603){return (new hivez.core.t19602(owner__$1,data__$1,app__$1,meta19603));
});
}
return (new hivez.core.t19602(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map