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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__24124_SHARP_){return cljs.core.assoc.call(null,p1__24124_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__24125){
var args = cljs.core.seq(arglist__24125);
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
return (function (p1__24126_SHARP_){return cljs.core.assoc_in.call(null,p1__24126_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__24127_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24127_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__24128_SHARP_){if(cljs.core._EQ_.call(null,key,p1__24128_SHARP_))
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
return (function (p1__24129_SHARP_){return cljs.core.assoc.call(null,p1__24129_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_24132 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_24132){
return (function (p1__24130_SHARP_){return cljs.core.dissoc.call(null,p1__24130_SHARP_,cljs.core.last.call(null,path));
});})(hive_24132))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_24132,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__24131_SHARP_){return cljs.core.dissoc.call(null,p1__24131_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__24133){var map__24140 = p__24133;var map__24140__$1 = ((cljs.core.seq_QMARK_.call(null,map__24140))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);var opts = map__24140__$1;var on_key_down = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t24141 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24141 = (function (input,on_key_down,owner,data,map__24140,edit_key,className,p__24133,on_edit,id,opts,meta24142){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.map__24140 = map__24140;
this.edit_key = edit_key;
this.className = className;
this.p__24133 = p__24133;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta24142 = meta24142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24141.cljs$lang$type = true;
hivez.core.t24141.cljs$lang$ctorStr = "hivez.core/t24141";
hivez.core.t24141.cljs$lang$ctorPrWriter = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24141");
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t24141.prototype.om$core$IRenderState$ = true;
hivez.core.t24141.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__24144){var self__ = this;
var map__24145 = p__24144;var map__24145__$1 = ((cljs.core.seq_QMARK_.call(null,map__24145))?cljs.core.apply.call(null,cljs.core.hash_map,map__24145):map__24145);var exit_type = cljs.core.get.call(null,map__24145__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__24145,map__24145__$1,exit_type,map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t24141.prototype.om$core$IDidMount$ = true;
hivez.core.t24141.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t24141.prototype.om$core$IInitState$ = true;
hivez.core.t24141.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t24141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_24143){var self__ = this;
var _24143__$1 = this;return self__.meta24142;
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t24141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_24143,meta24142__$1){var self__ = this;
var _24143__$1 = this;return (new hivez.core.t24141(self__.input,self__.on_key_down,self__.owner,self__.data,self__.map__24140,self__.edit_key,self__.className,self__.p__24133,self__.on_edit,self__.id,self__.opts,meta24142__$1));
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t24141 = ((function (map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t24141(input__$1,on_key_down__$1,owner__$1,data__$1,map__24140__$2,edit_key__$1,className__$1,p__24133__$1,on_edit__$1,id__$1,opts__$1,meta24142){return (new hivez.core.t24141(input__$1,on_key_down__$1,owner__$1,data__$1,map__24140__$2,edit_key__$1,className__$1,p__24133__$1,on_edit__$1,id__$1,opts__$1,meta24142));
});})(map__24140,map__24140__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t24141(input,on_key_down,owner,data,map__24140__$1,edit_key,className,p__24133,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(data,owner,p__24146){var map__24154 = p__24146;var map__24154__$1 = ((cljs.core.seq_QMARK_.call(null,map__24154))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);var opts = map__24154__$1;var on_edit = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t24155 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24155 = (function (on_edit,opts,map__24154,p__24146,owner,data,input_control,meta24156){
this.on_edit = on_edit;
this.opts = opts;
this.map__24154 = map__24154;
this.p__24146 = p__24146;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta24156 = meta24156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24155.cljs$lang$type = true;
hivez.core.t24155.cljs$lang$ctorStr = "hivez.core/t24155";
hivez.core.t24155.cljs$lang$ctorPrWriter = ((function (map__24154,map__24154__$1,opts,on_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24155");
});})(map__24154,map__24154__$1,opts,on_edit))
;
hivez.core.t24155.prototype.om$core$IRenderState$ = true;
hivez.core.t24155.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24154,map__24154__$1,opts,on_edit){
return (function (_,p__24158){var self__ = this;
var map__24159 = p__24158;var map__24159__$1 = ((cljs.core.seq_QMARK_.call(null,map__24159))?cljs.core.apply.call(null,cljs.core.hash_map,map__24159):map__24159);var editing = cljs.core.get.call(null,map__24159__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},cljs.core.println.call(null,editing),cljs.core.println.call(null,self__.data),(function (){var G__24160 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__24160) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__24160,___$1,map__24159,map__24159__$1,editing,map__24154,map__24154__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__24160,___$1,map__24159,map__24159__$1,editing,map__24154,map__24154__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__24154,map__24154__$1,opts,on_edit))
;
hivez.core.t24155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24154,map__24154__$1,opts,on_edit){
return (function (_24157){var self__ = this;
var _24157__$1 = this;return self__.meta24156;
});})(map__24154,map__24154__$1,opts,on_edit))
;
hivez.core.t24155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24154,map__24154__$1,opts,on_edit){
return (function (_24157,meta24156__$1){var self__ = this;
var _24157__$1 = this;return (new hivez.core.t24155(self__.on_edit,self__.opts,self__.map__24154,self__.p__24146,self__.owner,self__.data,self__.input_control,meta24156__$1));
});})(map__24154,map__24154__$1,opts,on_edit))
;
hivez.core.__GT_t24155 = ((function (map__24154,map__24154__$1,opts,on_edit){
return (function __GT_t24155(on_edit__$1,opts__$1,map__24154__$2,p__24146__$1,owner__$1,data__$1,input_control__$1,meta24156){return (new hivez.core.t24155(on_edit__$1,opts__$1,map__24154__$2,p__24146__$1,owner__$1,data__$1,input_control__$1,meta24156));
});})(map__24154,map__24154__$1,opts,on_edit))
;
}
return (new hivez.core.t24155(on_edit,opts,map__24154__$1,p__24146,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__24162){var map__24167 = p__24162;var map__24167__$1 = ((cljs.core.seq_QMARK_.call(null,map__24167))?cljs.core.apply.call(null,cljs.core.hash_map,map__24167):map__24167);var opts = map__24167__$1;var route = cljs.core.get.call(null,map__24167__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t24168 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24168 = (function (route,opts,map__24167,p__24162,owner,data,name_select,meta24169){
this.route = route;
this.opts = opts;
this.map__24167 = map__24167;
this.p__24162 = p__24162;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta24169 = meta24169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24168.cljs$lang$type = true;
hivez.core.t24168.cljs$lang$ctorStr = "hivez.core/t24168";
hivez.core.t24168.cljs$lang$ctorPrWriter = ((function (map__24167,map__24167__$1,opts,route){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24168");
});})(map__24167,map__24167__$1,opts,route))
;
hivez.core.t24168.prototype.om$core$IRender$ = true;
hivez.core.t24168.prototype.om$core$IRender$render$arity$1 = ((function (map__24167,map__24167__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__24167,map__24167__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__24167,map__24167__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__24167,map__24167__$1,opts,route))
;
hivez.core.t24168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24167,map__24167__$1,opts,route){
return (function (_24170){var self__ = this;
var _24170__$1 = this;return self__.meta24169;
});})(map__24167,map__24167__$1,opts,route))
;
hivez.core.t24168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24167,map__24167__$1,opts,route){
return (function (_24170,meta24169__$1){var self__ = this;
var _24170__$1 = this;return (new hivez.core.t24168(self__.route,self__.opts,self__.map__24167,self__.p__24162,self__.owner,self__.data,self__.name_select,meta24169__$1));
});})(map__24167,map__24167__$1,opts,route))
;
hivez.core.__GT_t24168 = ((function (map__24167,map__24167__$1,opts,route){
return (function __GT_t24168(route__$1,opts__$1,map__24167__$2,p__24162__$1,owner__$1,data__$1,name_select__$1,meta24169){return (new hivez.core.t24168(route__$1,opts__$1,map__24167__$2,p__24162__$1,owner__$1,data__$1,name_select__$1,meta24169));
});})(map__24167,map__24167__$1,opts,route))
;
}
return (new hivez.core.t24168(route,opts,map__24167__$1,p__24162,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t24174 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24174 = (function (owner,places,places_info,meta24175){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta24175 = meta24175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24174.cljs$lang$type = true;
hivez.core.t24174.cljs$lang$ctorStr = "hivez.core/t24174";
hivez.core.t24174.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24174");
});
hivez.core.t24174.prototype.om$core$IRender$ = true;
hivez.core.t24174.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "places"},cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null))));
});
hivez.core.t24174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24176){var self__ = this;
var _24176__$1 = this;return self__.meta24175;
});
hivez.core.t24174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24176,meta24175__$1){var self__ = this;
var _24176__$1 = this;return (new hivez.core.t24174(self__.owner,self__.places,self__.places_info,meta24175__$1));
});
hivez.core.__GT_t24174 = (function __GT_t24174(owner__$1,places__$1,places_info__$1,meta24175){return (new hivez.core.t24174(owner__$1,places__$1,places_info__$1,meta24175));
});
}
return (new hivez.core.t24174(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__24177){var map__24182 = p__24177;var map__24182__$1 = ((cljs.core.seq_QMARK_.call(null,map__24182))?cljs.core.apply.call(null,cljs.core.hash_map,map__24182):map__24182);var opts = map__24182__$1;var begin_edit = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t24183 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24183 = (function (begin_edit,opts,map__24182,p__24177,owner,place,place_info,meta24184){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__24182 = map__24182;
this.p__24177 = p__24177;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta24184 = meta24184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24183.cljs$lang$type = true;
hivez.core.t24183.cljs$lang$ctorStr = "hivez.core/t24183";
hivez.core.t24183.cljs$lang$ctorPrWriter = ((function (map__24182,map__24182__$1,opts,begin_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24183");
});})(map__24182,map__24182__$1,opts,begin_edit))
;
hivez.core.t24183.prototype.om$core$IRender$ = true;
hivez.core.t24183.prototype.om$core$IRender$render$arity$1 = ((function (map__24182,map__24182__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (___$1,map__24182,map__24182__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__24182,map__24182__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},React.DOM.span(null,"hives: "),om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});})(map__24182,map__24182__$1,opts,begin_edit))
;
hivez.core.t24183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24182,map__24182__$1,opts,begin_edit){
return (function (_24185){var self__ = this;
var _24185__$1 = this;return self__.meta24184;
});})(map__24182,map__24182__$1,opts,begin_edit))
;
hivez.core.t24183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24182,map__24182__$1,opts,begin_edit){
return (function (_24185,meta24184__$1){var self__ = this;
var _24185__$1 = this;return (new hivez.core.t24183(self__.begin_edit,self__.opts,self__.map__24182,self__.p__24177,self__.owner,self__.place,self__.place_info,meta24184__$1));
});})(map__24182,map__24182__$1,opts,begin_edit))
;
hivez.core.__GT_t24183 = ((function (map__24182,map__24182__$1,opts,begin_edit){
return (function __GT_t24183(begin_edit__$1,opts__$1,map__24182__$2,p__24177__$1,owner__$1,place__$1,place_info__$1,meta24184){return (new hivez.core.t24183(begin_edit__$1,opts__$1,map__24182__$2,p__24177__$1,owner__$1,place__$1,place_info__$1,meta24184));
});})(map__24182,map__24182__$1,opts,begin_edit))
;
}
return (new hivez.core.t24183(begin_edit,opts,map__24182__$1,p__24177,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__24186){var map__24191 = p__24186;var map__24191__$1 = ((cljs.core.seq_QMARK_.call(null,map__24191))?cljs.core.apply.call(null,cljs.core.hash_map,map__24191):map__24191);var opts = map__24191__$1;var begin_edit = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t24192 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24192 = (function (begin_edit,opts,map__24191,p__24186,owner,hive,hive_info,meta24193){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__24191 = map__24191;
this.p__24186 = p__24186;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta24193 = meta24193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24192.cljs$lang$type = true;
hivez.core.t24192.cljs$lang$ctorStr = "hivez.core/t24192";
hivez.core.t24192.cljs$lang$ctorPrWriter = ((function (map__24191,map__24191__$1,opts,begin_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24192");
});})(map__24191,map__24191__$1,opts,begin_edit))
;
hivez.core.t24192.prototype.om$core$IRender$ = true;
hivez.core.t24192.prototype.om$core$IRender$render$arity$1 = ((function (map__24191,map__24191__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__24191,map__24191__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__24191,map__24191__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__24191,map__24191__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__24191,map__24191__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__24191,map__24191__$1,opts,begin_edit))
;
hivez.core.t24192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24191,map__24191__$1,opts,begin_edit){
return (function (_24194){var self__ = this;
var _24194__$1 = this;return self__.meta24193;
});})(map__24191,map__24191__$1,opts,begin_edit))
;
hivez.core.t24192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24191,map__24191__$1,opts,begin_edit){
return (function (_24194,meta24193__$1){var self__ = this;
var _24194__$1 = this;return (new hivez.core.t24192(self__.begin_edit,self__.opts,self__.map__24191,self__.p__24186,self__.owner,self__.hive,self__.hive_info,meta24193__$1));
});})(map__24191,map__24191__$1,opts,begin_edit))
;
hivez.core.__GT_t24192 = ((function (map__24191,map__24191__$1,opts,begin_edit){
return (function __GT_t24192(begin_edit__$1,opts__$1,map__24191__$2,p__24186__$1,owner__$1,hive__$1,hive_info__$1,meta24193){return (new hivez.core.t24192(begin_edit__$1,opts__$1,map__24191__$2,p__24186__$1,owner__$1,hive__$1,hive_info__$1,meta24193));
});})(map__24191,map__24191__$1,opts,begin_edit))
;
}
return (new hivez.core.t24192(begin_edit,opts,map__24191__$1,p__24186,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__24196){var map__24203 = p__24196;var map__24203__$1 = ((cljs.core.seq_QMARK_.call(null,map__24203))?cljs.core.apply.call(null,cljs.core.hash_map,map__24203):map__24203);var opts = map__24203__$1;var toggle_open = cljs.core.get.call(null,map__24203__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t24204 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24204 = (function (toggle_open,opts,map__24203,p__24196,owner,data,navicon,meta24205){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__24203 = map__24203;
this.p__24196 = p__24196;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta24205 = meta24205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24204.cljs$lang$type = true;
hivez.core.t24204.cljs$lang$ctorStr = "hivez.core/t24204";
hivez.core.t24204.cljs$lang$ctorPrWriter = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24204");
});})(map__24203,map__24203__$1,opts,toggle_open))
;
hivez.core.t24204.prototype.om$core$IRenderState$ = true;
hivez.core.t24204.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function (_,p__24207){var self__ = this;
var map__24208 = p__24207;var map__24208__$1 = ((cljs.core.seq_QMARK_.call(null,map__24208))?cljs.core.apply.call(null,cljs.core.hash_map,map__24208):map__24208);var editing = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__24208,map__24208__$1,editing,active,map__24203,map__24203__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__24208,map__24208__$1,editing,active,map__24203,map__24203__$1,opts,toggle_open){
return (function (p1__24195_SHARP_){return cljs.core.not.call(null,p1__24195_SHARP_);
});})(___$1,map__24208,map__24208__$1,editing,active,map__24203,map__24203__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__24208,map__24208__$1,editing,active,map__24203,map__24203__$1,opts,toggle_open))
, "style": hivez.core.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__24203,map__24203__$1,opts,toggle_open))
;
hivez.core.t24204.prototype.om$core$IInitState$ = true;
hivez.core.t24204.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__24203,map__24203__$1,opts,toggle_open))
;
hivez.core.t24204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function (_24206){var self__ = this;
var _24206__$1 = this;return self__.meta24205;
});})(map__24203,map__24203__$1,opts,toggle_open))
;
hivez.core.t24204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function (_24206,meta24205__$1){var self__ = this;
var _24206__$1 = this;return (new hivez.core.t24204(self__.toggle_open,self__.opts,self__.map__24203,self__.p__24196,self__.owner,self__.data,self__.navicon,meta24205__$1));
});})(map__24203,map__24203__$1,opts,toggle_open))
;
hivez.core.__GT_t24204 = ((function (map__24203,map__24203__$1,opts,toggle_open){
return (function __GT_t24204(toggle_open__$1,opts__$1,map__24203__$2,p__24196__$1,owner__$1,data__$1,navicon__$1,meta24205){return (new hivez.core.t24204(toggle_open__$1,opts__$1,map__24203__$2,p__24196__$1,owner__$1,data__$1,navicon__$1,meta24205));
});})(map__24203,map__24203__$1,opts,toggle_open))
;
}
return (new hivez.core.t24204(toggle_open,opts,map__24203__$1,p__24196,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(p__24210,owner,opts){var vec__24217 = p__24210;var route = cljs.core.nth.call(null,vec__24217,(0),null);var path = cljs.core.nth.call(null,vec__24217,(1),null);if(typeof hivez.core.t24218 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24218 = (function (path,route,vec__24217,opts,owner,p__24210,control_panel,meta24219){
this.path = path;
this.route = route;
this.vec__24217 = vec__24217;
this.opts = opts;
this.owner = owner;
this.p__24210 = p__24210;
this.control_panel = control_panel;
this.meta24219 = meta24219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24218.cljs$lang$type = true;
hivez.core.t24218.cljs$lang$ctorStr = "hivez.core/t24218";
hivez.core.t24218.cljs$lang$ctorPrWriter = ((function (vec__24217,route,path){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24218");
});})(vec__24217,route,path))
;
hivez.core.t24218.prototype.om$core$IRenderState$ = true;
hivez.core.t24218.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__24217,route,path){
return (function (_,p__24221){var self__ = this;
var map__24222 = p__24221;var map__24222__$1 = ((cljs.core.seq_QMARK_.call(null,map__24222))?cljs.core.apply.call(null,cljs.core.hash_map,map__24222):map__24222);var path_str = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var history = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"history","history",-247395220));var editing = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.core.display_fade_in.call(null,(function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.route)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),React.DOM.div({"onClick": ((function (___$1,map__24222,map__24222__$1,path_str,history,editing,open,vec__24217,route,path){
return (function (){return null;
});})(___$1,map__24222,map__24222__$1,path_str,history,editing,open,vec__24217,route,path))
, "style": hivez.core.display.call(null,cljs.core._EQ_.call(null,cljs.core.count.call(null,history),(1))), "className": "icon-plus", "id": "nav-add-btn"}),React.DOM.div({"onClick": ((function (___$1,map__24222,map__24222__$1,path_str,history,editing,open,vec__24217,route,path){
return (function (){var new_history = cljs.core.pop.call(null,history);if(!(cljs.core.empty_QMARK_.call(null,new_history)))
{cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),cljs.core.peek.call(null,new_history));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),new_history);
} else
{return null;
}
});})(___$1,map__24222,map__24222__$1,path_str,history,editing,open,vec__24217,route,path))
, "style": hivez.core.display.call(null,(cljs.core.count.call(null,history) > (1))), "className": "icon-arrow-left2", "id": "nav-back-btn"})),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(vec__24217,route,path))
;
hivez.core.t24218.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t24218.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__24217,route,path){
return (function (_,next_props){var self__ = this;
var ___$1 = this;var history_24223 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220));if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,history_24223),next_props))
{} else
{om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),((function (history_24223,___$1,vec__24217,route,path){
return (function (p1__24209_SHARP_){return cljs.core.conj.call(null,p1__24209_SHARP_,next_props);
});})(history_24223,___$1,vec__24217,route,path))
);
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.last,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220)))))));
});})(vec__24217,route,path))
;
hivez.core.t24218.prototype.om$core$InitState$ = true;
hivez.core.t24218.prototype.om$core$InitState$init_state$arity$1 = ((function (vec__24217,route,path){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(vec__24217,route,path))
;
hivez.core.t24218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__24217,route,path){
return (function (_24220){var self__ = this;
var _24220__$1 = this;return self__.meta24219;
});})(vec__24217,route,path))
;
hivez.core.t24218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__24217,route,path){
return (function (_24220,meta24219__$1){var self__ = this;
var _24220__$1 = this;return (new hivez.core.t24218(self__.path,self__.route,self__.vec__24217,self__.opts,self__.owner,self__.p__24210,self__.control_panel,meta24219__$1));
});})(vec__24217,route,path))
;
hivez.core.__GT_t24218 = ((function (vec__24217,route,path){
return (function __GT_t24218(path__$1,route__$1,vec__24217__$1,opts__$1,owner__$1,p__24210__$1,control_panel__$1,meta24219){return (new hivez.core.t24218(path__$1,route__$1,vec__24217__$1,opts__$1,owner__$1,p__24210__$1,control_panel__$1,meta24219));
});})(vec__24217,route,path))
;
}
return (new hivez.core.t24218(path,route,vec__24217,opts,owner,p__24210,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t24290 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24290 = (function (owner,data,drawer,meta24291){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta24291 = meta24291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24290.cljs$lang$type = true;
hivez.core.t24290.cljs$lang$ctorStr = "hivez.core/t24290";
hivez.core.t24290.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24290");
});
hivez.core.t24290.prototype.om$core$IRenderState$ = true;
hivez.core.t24290.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__24293){var self__ = this;
var map__24294 = p__24293;var map__24294__$1 = ((cljs.core.seq_QMARK_.call(null,map__24294))?cljs.core.apply.call(null,cljs.core.hash_map,map__24294):map__24294);var child_opts = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"child","child",623967545));var route = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"route","route",329891309));var nav_chan = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,child_ks,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.data,child_ks))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(editing)?om.core.build.call(null,hivez.core.input_control,cljs.core.get_in.call(null,self__.data,child_ks,child_opts),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__24294,map__24294__$1,child_opts,child_ks,child,route,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__24294,map__24294__$1,child_opts,child_ks,child,route,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t24290.prototype.om$core$IWillMount$ = true;
hivez.core.t24290.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_24335){var state_val_24336 = (state_24335[(1)]);if((state_val_24336 === (8)))
{var inst_24298 = (state_24335[(7)]);var inst_24314 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_24315 = cljs.core.second.call(null,inst_24298);var inst_24316 = cljs.core.last.call(null,inst_24315);var inst_24317 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_24316);var inst_24318 = cljs.core.second.call(null,inst_24298);var inst_24319 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_24320 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_24321 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_24322 = [inst_24321];var inst_24323 = cljs.core.PersistentHashMap.fromArrays(inst_24320,inst_24322);var inst_24324 = [inst_24323];var inst_24325 = cljs.core.PersistentHashMap.fromArrays(inst_24319,inst_24324);var inst_24326 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_24318,inst_24325);var state_24335__$1 = (function (){var statearr_24337 = state_24335;(statearr_24337[(8)] = inst_24314);
(statearr_24337[(9)] = inst_24317);
return statearr_24337;
})();var statearr_24338_24356 = state_24335__$1;(statearr_24338_24356[(2)] = inst_24326);
(statearr_24338_24356[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24336 === (7)))
{var inst_24298 = (state_24335[(7)]);var inst_24304 = cljs.core.second.call(null,inst_24298);var inst_24305 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_24306 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_24307 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_24308 = [inst_24307];var inst_24309 = cljs.core.PersistentHashMap.fromArrays(inst_24306,inst_24308);var inst_24310 = [inst_24309];var inst_24311 = cljs.core.PersistentHashMap.fromArrays(inst_24305,inst_24310);var inst_24312 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_24304,inst_24311);var state_24335__$1 = state_24335;var statearr_24339_24357 = state_24335__$1;(statearr_24339_24357[(2)] = inst_24312);
(statearr_24339_24357[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24336 === (6)))
{var inst_24298 = (state_24335[(7)]);var inst_24301 = cljs.core.second.call(null,inst_24298);var inst_24302 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_24301);var state_24335__$1 = state_24335;var statearr_24340_24358 = state_24335__$1;(statearr_24340_24358[(2)] = inst_24302);
(statearr_24340_24358[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24336 === (5)))
{var inst_24330 = (state_24335[(2)]);var state_24335__$1 = (function (){var statearr_24341 = state_24335;(statearr_24341[(10)] = inst_24330);
return statearr_24341;
})();var statearr_24342_24359 = state_24335__$1;(statearr_24342_24359[(2)] = null);
(statearr_24342_24359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24336 === (4)))
{var inst_24298 = (state_24335[(7)]);var inst_24298__$1 = (state_24335[(2)]);var inst_24299 = cljs.core.first.call(null,inst_24298__$1);var inst_24300 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"route","route",329891309),inst_24299);var inst_24328 = cljs.core.first.call(null,inst_24298__$1);var state_24335__$1 = (function (){var statearr_24343 = state_24335;(statearr_24343[(11)] = inst_24300);
(statearr_24343[(7)] = inst_24298__$1);
return statearr_24343;
})();var G__24344_24360 = inst_24328;switch (G__24344_24360) {
case "places":
var statearr_24345_24362 = state_24335__$1;(statearr_24345_24362[(1)] = (6));

break;
case "place":
var statearr_24346_24363 = state_24335__$1;(statearr_24346_24363[(1)] = (7));

break;
case "hive":
var statearr_24347_24364 = state_24335__$1;(statearr_24347_24364[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24328))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24336 === (3)))
{var inst_24333 = (state_24335[(2)]);var state_24335__$1 = state_24335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24335__$1,inst_24333);
} else
{if((state_val_24336 === (2)))
{var inst_24296 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_24335__$1 = state_24335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24335__$1,(4),inst_24296);
} else
{if((state_val_24336 === (1)))
{var state_24335__$1 = state_24335;var statearr_24348_24365 = state_24335__$1;(statearr_24348_24365[(2)] = null);
(statearr_24348_24365[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_24352 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24352[(0)] = state_machine__15073__auto__);
(statearr_24352[(1)] = (1));
return statearr_24352;
});
var state_machine__15073__auto____1 = (function (state_24335){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_24335);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e24353){if((e24353 instanceof Object))
{var ex__15076__auto__ = e24353;var statearr_24354_24366 = state_24335;(statearr_24354_24366[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24367 = state_24335;
state_24335 = G__24367;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_24335){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_24335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_24355 = f__15088__auto__.call(null);(statearr_24355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_24355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t24290.prototype.om$core$IInitState$ = true;
hivez.core.t24290.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route","route",329891309),"places",new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t24290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24292){var self__ = this;
var _24292__$1 = this;return self__.meta24291;
});
hivez.core.t24290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24292,meta24291__$1){var self__ = this;
var _24292__$1 = this;return (new hivez.core.t24290(self__.owner,self__.data,self__.drawer,meta24291__$1));
});
hivez.core.__GT_t24290 = (function __GT_t24290(owner__$1,data__$1,drawer__$1,meta24291){return (new hivez.core.t24290(owner__$1,data__$1,drawer__$1,meta24291));
});
}
return (new hivez.core.t24290(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t24371 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24371 = (function (owner,data,app,meta24372){
this.owner = owner;
this.data = data;
this.app = app;
this.meta24372 = meta24372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24371.cljs$lang$type = true;
hivez.core.t24371.cljs$lang$ctorStr = "hivez.core/t24371";
hivez.core.t24371.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24371");
});
hivez.core.t24371.prototype.om$core$IRender$ = true;
hivez.core.t24371.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t24371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24373){var self__ = this;
var _24373__$1 = this;return self__.meta24372;
});
hivez.core.t24371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24373,meta24372__$1){var self__ = this;
var _24373__$1 = this;return (new hivez.core.t24371(self__.owner,self__.data,self__.app,meta24372__$1));
});
hivez.core.__GT_t24371 = (function __GT_t24371(owner__$1,data__$1,app__$1,meta24372){return (new hivez.core.t24371(owner__$1,data__$1,app__$1,meta24372));
});
}
return (new hivez.core.t24371(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map