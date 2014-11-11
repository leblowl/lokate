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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__28488_SHARP_){return cljs.core.assoc.call(null,p1__28488_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__28489){
var args = cljs.core.seq(arglist__28489);
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
return (function (p1__28490_SHARP_){return cljs.core.assoc_in.call(null,p1__28490_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__28491_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28491_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__28492_SHARP_){if(cljs.core._EQ_.call(null,key,p1__28492_SHARP_))
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
return (function (p1__28493_SHARP_){return cljs.core.assoc.call(null,p1__28493_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_28496 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_28496){
return (function (p1__28494_SHARP_){return cljs.core.dissoc.call(null,p1__28494_SHARP_,cljs.core.last.call(null,path));
});})(hive_28496))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_28496,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__28495_SHARP_){return cljs.core.dissoc.call(null,p1__28495_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__28497){var map__28504 = p__28497;var map__28504__$1 = ((cljs.core.seq_QMARK_.call(null,map__28504))?cljs.core.apply.call(null,cljs.core.hash_map,map__28504):map__28504);var opts = map__28504__$1;var on_key_down = cljs.core.get.call(null,map__28504__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__28504__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__28504__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__28504__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__28504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t28505 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28505 = (function (input,on_key_down,p__28497,owner,map__28504,data,edit_key,className,on_edit,id,opts,meta28506){
this.input = input;
this.on_key_down = on_key_down;
this.p__28497 = p__28497;
this.owner = owner;
this.map__28504 = map__28504;
this.data = data;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta28506 = meta28506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28505.cljs$lang$type = true;
hivez.core.t28505.cljs$lang$ctorStr = "hivez.core/t28505";
hivez.core.t28505.cljs$lang$ctorPrWriter = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28505");
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t28505.prototype.om$core$IRenderState$ = true;
hivez.core.t28505.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__28508){var self__ = this;
var map__28509 = p__28508;var map__28509__$1 = ((cljs.core.seq_QMARK_.call(null,map__28509))?cljs.core.apply.call(null,cljs.core.hash_map,map__28509):map__28509);var exit_type = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__28509,map__28509__$1,exit_type,map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t28505.prototype.om$core$IDidMount$ = true;
hivez.core.t28505.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t28505.prototype.om$core$IInitState$ = true;
hivez.core.t28505.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t28505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_28507){var self__ = this;
var _28507__$1 = this;return self__.meta28506;
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t28505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_28507,meta28506__$1){var self__ = this;
var _28507__$1 = this;return (new hivez.core.t28505(self__.input,self__.on_key_down,self__.p__28497,self__.owner,self__.map__28504,self__.data,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta28506__$1));
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t28505 = ((function (map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t28505(input__$1,on_key_down__$1,p__28497__$1,owner__$1,map__28504__$2,data__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta28506){return (new hivez.core.t28505(input__$1,on_key_down__$1,p__28497__$1,owner__$1,map__28504__$2,data__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta28506));
});})(map__28504,map__28504__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t28505(input,on_key_down,p__28497,owner,map__28504__$1,data,edit_key,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__28510){var map__28518 = p__28510;var map__28518__$1 = ((cljs.core.seq_QMARK_.call(null,map__28518))?cljs.core.apply.call(null,cljs.core.hash_map,map__28518):map__28518);var opts = map__28518__$1;var on_edit = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t28519 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28519 = (function (on_edit,opts,map__28518,p__28510,owner,hive,input_control,meta28520){
this.on_edit = on_edit;
this.opts = opts;
this.map__28518 = map__28518;
this.p__28510 = p__28510;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta28520 = meta28520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28519.cljs$lang$type = true;
hivez.core.t28519.cljs$lang$ctorStr = "hivez.core/t28519";
hivez.core.t28519.cljs$lang$ctorPrWriter = ((function (map__28518,map__28518__$1,opts,on_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28519");
});})(map__28518,map__28518__$1,opts,on_edit))
;
hivez.core.t28519.prototype.om$core$IRenderState$ = true;
hivez.core.t28519.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28518,map__28518__$1,opts,on_edit){
return (function (_,p__28522){var self__ = this;
var map__28523 = p__28522;var map__28523__$1 = ((cljs.core.seq_QMARK_.call(null,map__28523))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);var editing = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__28524 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__28524) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__28524,___$1,map__28523,map__28523__$1,editing,map__28518,map__28518__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__28524,___$1,map__28523,map__28523__$1,editing,map__28518,map__28518__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__28518,map__28518__$1,opts,on_edit))
;
hivez.core.t28519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28518,map__28518__$1,opts,on_edit){
return (function (_28521){var self__ = this;
var _28521__$1 = this;return self__.meta28520;
});})(map__28518,map__28518__$1,opts,on_edit))
;
hivez.core.t28519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28518,map__28518__$1,opts,on_edit){
return (function (_28521,meta28520__$1){var self__ = this;
var _28521__$1 = this;return (new hivez.core.t28519(self__.on_edit,self__.opts,self__.map__28518,self__.p__28510,self__.owner,self__.hive,self__.input_control,meta28520__$1));
});})(map__28518,map__28518__$1,opts,on_edit))
;
hivez.core.__GT_t28519 = ((function (map__28518,map__28518__$1,opts,on_edit){
return (function __GT_t28519(on_edit__$1,opts__$1,map__28518__$2,p__28510__$1,owner__$1,hive__$1,input_control__$1,meta28520){return (new hivez.core.t28519(on_edit__$1,opts__$1,map__28518__$2,p__28510__$1,owner__$1,hive__$1,input_control__$1,meta28520));
});})(map__28518,map__28518__$1,opts,on_edit))
;
}
return (new hivez.core.t28519(on_edit,opts,map__28518__$1,p__28510,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__28526){var map__28531 = p__28526;var map__28531__$1 = ((cljs.core.seq_QMARK_.call(null,map__28531))?cljs.core.apply.call(null,cljs.core.hash_map,map__28531):map__28531);var opts = map__28531__$1;var route = cljs.core.get.call(null,map__28531__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t28532 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28532 = (function (route,opts,map__28531,p__28526,owner,data,name_select,meta28533){
this.route = route;
this.opts = opts;
this.map__28531 = map__28531;
this.p__28526 = p__28526;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta28533 = meta28533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28532.cljs$lang$type = true;
hivez.core.t28532.cljs$lang$ctorStr = "hivez.core/t28532";
hivez.core.t28532.cljs$lang$ctorPrWriter = ((function (map__28531,map__28531__$1,opts,route){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28532");
});})(map__28531,map__28531__$1,opts,route))
;
hivez.core.t28532.prototype.om$core$IRender$ = true;
hivez.core.t28532.prototype.om$core$IRender$render$arity$1 = ((function (map__28531,map__28531__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__28531,map__28531__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__28531,map__28531__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__28531,map__28531__$1,opts,route))
;
hivez.core.t28532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28531,map__28531__$1,opts,route){
return (function (_28534){var self__ = this;
var _28534__$1 = this;return self__.meta28533;
});})(map__28531,map__28531__$1,opts,route))
;
hivez.core.t28532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28531,map__28531__$1,opts,route){
return (function (_28534,meta28533__$1){var self__ = this;
var _28534__$1 = this;return (new hivez.core.t28532(self__.route,self__.opts,self__.map__28531,self__.p__28526,self__.owner,self__.data,self__.name_select,meta28533__$1));
});})(map__28531,map__28531__$1,opts,route))
;
hivez.core.__GT_t28532 = ((function (map__28531,map__28531__$1,opts,route){
return (function __GT_t28532(route__$1,opts__$1,map__28531__$2,p__28526__$1,owner__$1,data__$1,name_select__$1,meta28533){return (new hivez.core.t28532(route__$1,opts__$1,map__28531__$2,p__28526__$1,owner__$1,data__$1,name_select__$1,meta28533));
});})(map__28531,map__28531__$1,opts,route))
;
}
return (new hivez.core.t28532(route,opts,map__28531__$1,p__28526,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t28538 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28538 = (function (owner,places,places_info,meta28539){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta28539 = meta28539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28538.cljs$lang$type = true;
hivez.core.t28538.cljs$lang$ctorStr = "hivez.core/t28538";
hivez.core.t28538.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28538");
});
hivez.core.t28538.prototype.om$core$IRender$ = true;
hivez.core.t28538.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t28538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28540){var self__ = this;
var _28540__$1 = this;return self__.meta28539;
});
hivez.core.t28538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28540,meta28539__$1){var self__ = this;
var _28540__$1 = this;return (new hivez.core.t28538(self__.owner,self__.places,self__.places_info,meta28539__$1));
});
hivez.core.__GT_t28538 = (function __GT_t28538(owner__$1,places__$1,places_info__$1,meta28539){return (new hivez.core.t28538(owner__$1,places__$1,places_info__$1,meta28539));
});
}
return (new hivez.core.t28538(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t28544 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28544 = (function (owner,place,place_info,meta28545){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta28545 = meta28545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28544.cljs$lang$type = true;
hivez.core.t28544.cljs$lang$ctorStr = "hivez.core/t28544";
hivez.core.t28544.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28544");
});
hivez.core.t28544.prototype.om$core$IRender$ = true;
hivez.core.t28544.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t28544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28546){var self__ = this;
var _28546__$1 = this;return self__.meta28545;
});
hivez.core.t28544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28546,meta28545__$1){var self__ = this;
var _28546__$1 = this;return (new hivez.core.t28544(self__.owner,self__.place,self__.place_info,meta28545__$1));
});
hivez.core.__GT_t28544 = (function __GT_t28544(owner__$1,place__$1,place_info__$1,meta28545){return (new hivez.core.t28544(owner__$1,place__$1,place_info__$1,meta28545));
});
}
return (new hivez.core.t28544(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__28547){var map__28552 = p__28547;var map__28552__$1 = ((cljs.core.seq_QMARK_.call(null,map__28552))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);var opts = map__28552__$1;var begin_edit = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t28553 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28553 = (function (begin_edit,opts,map__28552,p__28547,owner,hive,hive_info,meta28554){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__28552 = map__28552;
this.p__28547 = p__28547;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta28554 = meta28554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28553.cljs$lang$type = true;
hivez.core.t28553.cljs$lang$ctorStr = "hivez.core/t28553";
hivez.core.t28553.cljs$lang$ctorPrWriter = ((function (map__28552,map__28552__$1,opts,begin_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28553");
});})(map__28552,map__28552__$1,opts,begin_edit))
;
hivez.core.t28553.prototype.om$core$IRender$ = true;
hivez.core.t28553.prototype.om$core$IRender$render$arity$1 = ((function (map__28552,map__28552__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__28552,map__28552__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__28552,map__28552__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__28552,map__28552__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__28552,map__28552__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__28552,map__28552__$1,opts,begin_edit))
;
hivez.core.t28553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28552,map__28552__$1,opts,begin_edit){
return (function (_28555){var self__ = this;
var _28555__$1 = this;return self__.meta28554;
});})(map__28552,map__28552__$1,opts,begin_edit))
;
hivez.core.t28553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28552,map__28552__$1,opts,begin_edit){
return (function (_28555,meta28554__$1){var self__ = this;
var _28555__$1 = this;return (new hivez.core.t28553(self__.begin_edit,self__.opts,self__.map__28552,self__.p__28547,self__.owner,self__.hive,self__.hive_info,meta28554__$1));
});})(map__28552,map__28552__$1,opts,begin_edit))
;
hivez.core.__GT_t28553 = ((function (map__28552,map__28552__$1,opts,begin_edit){
return (function __GT_t28553(begin_edit__$1,opts__$1,map__28552__$2,p__28547__$1,owner__$1,hive__$1,hive_info__$1,meta28554){return (new hivez.core.t28553(begin_edit__$1,opts__$1,map__28552__$2,p__28547__$1,owner__$1,hive__$1,hive_info__$1,meta28554));
});})(map__28552,map__28552__$1,opts,begin_edit))
;
}
return (new hivez.core.t28553(begin_edit,opts,map__28552__$1,p__28547,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__28557){var map__28564 = p__28557;var map__28564__$1 = ((cljs.core.seq_QMARK_.call(null,map__28564))?cljs.core.apply.call(null,cljs.core.hash_map,map__28564):map__28564);var opts = map__28564__$1;var toggle_open = cljs.core.get.call(null,map__28564__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t28565 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28565 = (function (toggle_open,opts,map__28564,p__28557,owner,data,navicon,meta28566){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__28564 = map__28564;
this.p__28557 = p__28557;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta28566 = meta28566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28565.cljs$lang$type = true;
hivez.core.t28565.cljs$lang$ctorStr = "hivez.core/t28565";
hivez.core.t28565.cljs$lang$ctorPrWriter = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28565");
});})(map__28564,map__28564__$1,opts,toggle_open))
;
hivez.core.t28565.prototype.om$core$IRenderState$ = true;
hivez.core.t28565.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function (_,p__28568){var self__ = this;
var map__28569 = p__28568;var map__28569__$1 = ((cljs.core.seq_QMARK_.call(null,map__28569))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);var editing = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__28569,map__28569__$1,editing,active,map__28564,map__28564__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__28569,map__28569__$1,editing,active,map__28564,map__28564__$1,opts,toggle_open){
return (function (p1__28556_SHARP_){return cljs.core.not.call(null,p1__28556_SHARP_);
});})(___$1,map__28569,map__28569__$1,editing,active,map__28564,map__28564__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__28569,map__28569__$1,editing,active,map__28564,map__28564__$1,opts,toggle_open))
, "style": hivez.core.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__28564,map__28564__$1,opts,toggle_open))
;
hivez.core.t28565.prototype.om$core$IInitState$ = true;
hivez.core.t28565.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__28564,map__28564__$1,opts,toggle_open))
;
hivez.core.t28565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function (_28567){var self__ = this;
var _28567__$1 = this;return self__.meta28566;
});})(map__28564,map__28564__$1,opts,toggle_open))
;
hivez.core.t28565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function (_28567,meta28566__$1){var self__ = this;
var _28567__$1 = this;return (new hivez.core.t28565(self__.toggle_open,self__.opts,self__.map__28564,self__.p__28557,self__.owner,self__.data,self__.navicon,meta28566__$1));
});})(map__28564,map__28564__$1,opts,toggle_open))
;
hivez.core.__GT_t28565 = ((function (map__28564,map__28564__$1,opts,toggle_open){
return (function __GT_t28565(toggle_open__$1,opts__$1,map__28564__$2,p__28557__$1,owner__$1,data__$1,navicon__$1,meta28566){return (new hivez.core.t28565(toggle_open__$1,opts__$1,map__28564__$2,p__28557__$1,owner__$1,data__$1,navicon__$1,meta28566));
});})(map__28564,map__28564__$1,opts,toggle_open))
;
}
return (new hivez.core.t28565(toggle_open,opts,map__28564__$1,p__28557,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(p__28571,owner,opts){var vec__28578 = p__28571;var route = cljs.core.nth.call(null,vec__28578,(0),null);var path = cljs.core.nth.call(null,vec__28578,(1),null);if(typeof hivez.core.t28579 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28579 = (function (path,route,vec__28578,opts,owner,p__28571,control_panel,meta28580){
this.path = path;
this.route = route;
this.vec__28578 = vec__28578;
this.opts = opts;
this.owner = owner;
this.p__28571 = p__28571;
this.control_panel = control_panel;
this.meta28580 = meta28580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28579.cljs$lang$type = true;
hivez.core.t28579.cljs$lang$ctorStr = "hivez.core/t28579";
hivez.core.t28579.cljs$lang$ctorPrWriter = ((function (vec__28578,route,path){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28579");
});})(vec__28578,route,path))
;
hivez.core.t28579.prototype.om$core$IRenderState$ = true;
hivez.core.t28579.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__28578,route,path){
return (function (_,p__28582){var self__ = this;
var map__28583 = p__28582;var map__28583__$1 = ((cljs.core.seq_QMARK_.call(null,map__28583))?cljs.core.apply.call(null,cljs.core.hash_map,map__28583):map__28583);var path_str = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var history = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"history","history",-247395220));var editing = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.core.display_fade_in.call(null,open), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.route)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),React.DOM.div({"onClick": ((function (___$1,map__28583,map__28583__$1,path_str,history,editing,open,vec__28578,route,path){
return (function (){var new_history = cljs.core.pop.call(null,history);if(!(cljs.core.empty_QMARK_.call(null,new_history)))
{cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),cljs.core.peek.call(null,new_history));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),new_history);
} else
{return null;
}
});})(___$1,map__28583,map__28583__$1,path_str,history,editing,open,vec__28578,route,path))
, "className": "icon-arrow-left2", "id": "nav-back-btn"})),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(vec__28578,route,path))
;
hivez.core.t28579.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t28579.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__28578,route,path){
return (function (_,next_props){var self__ = this;
var ___$1 = this;var history_28584 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220));if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,history_28584),next_props))
{} else
{om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),((function (history_28584,___$1,vec__28578,route,path){
return (function (p1__28570_SHARP_){return cljs.core.conj.call(null,p1__28570_SHARP_,next_props);
});})(history_28584,___$1,vec__28578,route,path))
);
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.last,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220)))))));
});})(vec__28578,route,path))
;
hivez.core.t28579.prototype.om$core$InitState$ = true;
hivez.core.t28579.prototype.om$core$InitState$init_state$arity$1 = ((function (vec__28578,route,path){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(vec__28578,route,path))
;
hivez.core.t28579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__28578,route,path){
return (function (_28581){var self__ = this;
var _28581__$1 = this;return self__.meta28580;
});})(vec__28578,route,path))
;
hivez.core.t28579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__28578,route,path){
return (function (_28581,meta28580__$1){var self__ = this;
var _28581__$1 = this;return (new hivez.core.t28579(self__.path,self__.route,self__.vec__28578,self__.opts,self__.owner,self__.p__28571,self__.control_panel,meta28580__$1));
});})(vec__28578,route,path))
;
hivez.core.__GT_t28579 = ((function (vec__28578,route,path){
return (function __GT_t28579(path__$1,route__$1,vec__28578__$1,opts__$1,owner__$1,p__28571__$1,control_panel__$1,meta28580){return (new hivez.core.t28579(path__$1,route__$1,vec__28578__$1,opts__$1,owner__$1,p__28571__$1,control_panel__$1,meta28580));
});})(vec__28578,route,path))
;
}
return (new hivez.core.t28579(path,route,vec__28578,opts,owner,p__28571,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t28644 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28644 = (function (owner,data,drawer,meta28645){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta28645 = meta28645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28644.cljs$lang$type = true;
hivez.core.t28644.cljs$lang$ctorStr = "hivez.core/t28644";
hivez.core.t28644.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28644");
});
hivez.core.t28644.prototype.om$core$IRenderState$ = true;
hivez.core.t28644.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28647){var self__ = this;
var map__28648 = p__28647;var map__28648__$1 = ((cljs.core.seq_QMARK_.call(null,map__28648))?cljs.core.apply.call(null,cljs.core.hash_map,map__28648):map__28648);var child_opts = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"child","child",623967545));var route = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"route","route",329891309));var nav_chan = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,child_ks,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,child_ks))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__28648,map__28648__$1,child_opts,child_ks,child,route,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__28648,map__28648__$1,child_opts,child_ks,child,route,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t28644.prototype.om$core$IWillMount$ = true;
hivez.core.t28644.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_28682){var state_val_28683 = (state_28682[(1)]);if((state_val_28683 === (8)))
{var inst_28652 = (state_28682[(7)]);var inst_28661 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_28662 = cljs.core.second.call(null,inst_28652);var inst_28663 = cljs.core.last.call(null,inst_28662);var inst_28664 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_28663);var inst_28665 = cljs.core.second.call(null,inst_28652);var inst_28666 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_28667 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_28668 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_28669 = [inst_28668];var inst_28670 = cljs.core.PersistentHashMap.fromArrays(inst_28667,inst_28669);var inst_28671 = [inst_28670];var inst_28672 = cljs.core.PersistentHashMap.fromArrays(inst_28666,inst_28671);var inst_28673 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_28665,inst_28672);var state_28682__$1 = (function (){var statearr_28684 = state_28682;(statearr_28684[(8)] = inst_28664);
(statearr_28684[(9)] = inst_28661);
return statearr_28684;
})();var statearr_28685_28703 = state_28682__$1;(statearr_28685_28703[(2)] = inst_28673);
(statearr_28685_28703[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28683 === (7)))
{var inst_28652 = (state_28682[(7)]);var inst_28658 = cljs.core.second.call(null,inst_28652);var inst_28659 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_28658);var state_28682__$1 = state_28682;var statearr_28686_28704 = state_28682__$1;(statearr_28686_28704[(2)] = inst_28659);
(statearr_28686_28704[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28683 === (6)))
{var inst_28652 = (state_28682[(7)]);var inst_28655 = cljs.core.second.call(null,inst_28652);var inst_28656 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_28655);var state_28682__$1 = state_28682;var statearr_28687_28705 = state_28682__$1;(statearr_28687_28705[(2)] = inst_28656);
(statearr_28687_28705[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28683 === (5)))
{var inst_28677 = (state_28682[(2)]);var state_28682__$1 = (function (){var statearr_28688 = state_28682;(statearr_28688[(10)] = inst_28677);
return statearr_28688;
})();var statearr_28689_28706 = state_28682__$1;(statearr_28689_28706[(2)] = null);
(statearr_28689_28706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28683 === (4)))
{var inst_28652 = (state_28682[(7)]);var inst_28652__$1 = (state_28682[(2)]);var inst_28653 = cljs.core.first.call(null,inst_28652__$1);var inst_28654 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"route","route",329891309),inst_28653);var inst_28675 = cljs.core.first.call(null,inst_28652__$1);var state_28682__$1 = (function (){var statearr_28690 = state_28682;(statearr_28690[(11)] = inst_28654);
(statearr_28690[(7)] = inst_28652__$1);
return statearr_28690;
})();var G__28691_28707 = inst_28675;switch (G__28691_28707) {
case "places":
var statearr_28692_28709 = state_28682__$1;(statearr_28692_28709[(1)] = (6));

break;
case "place":
var statearr_28693_28710 = state_28682__$1;(statearr_28693_28710[(1)] = (7));

break;
case "hive":
var statearr_28694_28711 = state_28682__$1;(statearr_28694_28711[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28675))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28683 === (3)))
{var inst_28680 = (state_28682[(2)]);var state_28682__$1 = state_28682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28682__$1,inst_28680);
} else
{if((state_val_28683 === (2)))
{var inst_28650 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_28682__$1 = state_28682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28682__$1,(4),inst_28650);
} else
{if((state_val_28683 === (1)))
{var state_28682__$1 = state_28682;var statearr_28695_28712 = state_28682__$1;(statearr_28695_28712[(2)] = null);
(statearr_28695_28712[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_28699 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28699[(0)] = state_machine__15073__auto__);
(statearr_28699[(1)] = (1));
return statearr_28699;
});
var state_machine__15073__auto____1 = (function (state_28682){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_28682);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e28700){if((e28700 instanceof Object))
{var ex__15076__auto__ = e28700;var statearr_28701_28713 = state_28682;(statearr_28701_28713[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28714 = state_28682;
state_28682 = G__28714;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_28682){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_28682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_28702 = f__15088__auto__.call(null);(statearr_28702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_28702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t28644.prototype.om$core$IInitState$ = true;
hivez.core.t28644.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route","route",329891309),"places",new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t28644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28646){var self__ = this;
var _28646__$1 = this;return self__.meta28645;
});
hivez.core.t28644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28646,meta28645__$1){var self__ = this;
var _28646__$1 = this;return (new hivez.core.t28644(self__.owner,self__.data,self__.drawer,meta28645__$1));
});
hivez.core.__GT_t28644 = (function __GT_t28644(owner__$1,data__$1,drawer__$1,meta28645){return (new hivez.core.t28644(owner__$1,data__$1,drawer__$1,meta28645));
});
}
return (new hivez.core.t28644(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t28718 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t28718 = (function (owner,data,app,meta28719){
this.owner = owner;
this.data = data;
this.app = app;
this.meta28719 = meta28719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t28718.cljs$lang$type = true;
hivez.core.t28718.cljs$lang$ctorStr = "hivez.core/t28718";
hivez.core.t28718.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t28718");
});
hivez.core.t28718.prototype.om$core$IRender$ = true;
hivez.core.t28718.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t28718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28720){var self__ = this;
var _28720__$1 = this;return self__.meta28719;
});
hivez.core.t28718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28720,meta28719__$1){var self__ = this;
var _28720__$1 = this;return (new hivez.core.t28718(self__.owner,self__.data,self__.app,meta28719__$1));
});
hivez.core.__GT_t28718 = (function __GT_t28718(owner__$1,data__$1,app__$1,meta28719){return (new hivez.core.t28718(owner__$1,data__$1,app__$1,meta28719));
});
}
return (new hivez.core.t28718(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map