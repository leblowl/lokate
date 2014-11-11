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
goog.require('goog.events');
goog.require('cljs_http.client');
hivez.core.history = (new goog.History());
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Angels Camp",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(5),new cljs.core.Keyword(null,"lng","lng",1667213918),(5)], null)], null),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__20066_SHARP_){return cljs.core.assoc.call(null,p1__20066_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__20067){
var args = cljs.core.seq(arglist__20067);
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
return (function (p1__20068_SHARP_){return cljs.core.assoc_in.call(null,p1__20068_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__20069_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20069_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__20070_SHARP_){if(cljs.core._EQ_.call(null,key,p1__20070_SHARP_))
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
return (function (p1__20071_SHARP_){return cljs.core.assoc.call(null,p1__20071_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_20074 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_20074){
return (function (p1__20072_SHARP_){return cljs.core.dissoc.call(null,p1__20072_SHARP_,cljs.core.last.call(null,path));
});})(hive_20074))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_20074,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__20073_SHARP_){return cljs.core.dissoc.call(null,p1__20073_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__20075){var map__20082 = p__20075;var map__20082__$1 = ((cljs.core.seq_QMARK_.call(null,map__20082))?cljs.core.apply.call(null,cljs.core.hash_map,map__20082):map__20082);var opts = map__20082__$1;var on_key_down = cljs.core.get.call(null,map__20082__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__20082__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__20082__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__20082__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__20082__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t20083 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20083 = (function (input,on_key_down,owner,data,map__20082,edit_key,p__20075,className,on_edit,id,opts,meta20084){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.map__20082 = map__20082;
this.edit_key = edit_key;
this.p__20075 = p__20075;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta20084 = meta20084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20083.cljs$lang$type = true;
hivez.core.t20083.cljs$lang$ctorStr = "hivez.core/t20083";
hivez.core.t20083.cljs$lang$ctorPrWriter = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20083");
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20083.prototype.om$core$IRenderState$ = true;
hivez.core.t20083.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__20086){var self__ = this;
var map__20087 = p__20086;var map__20087__$1 = ((cljs.core.seq_QMARK_.call(null,map__20087))?cljs.core.apply.call(null,cljs.core.hash_map,map__20087):map__20087);var exit_type = cljs.core.get.call(null,map__20087__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__20087,map__20087__$1,exit_type,map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20083.prototype.om$core$IDidMount$ = true;
hivez.core.t20083.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20083.prototype.om$core$IInitState$ = true;
hivez.core.t20083.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_20085){var self__ = this;
var _20085__$1 = this;return self__.meta20084;
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_20085,meta20084__$1){var self__ = this;
var _20085__$1 = this;return (new hivez.core.t20083(self__.input,self__.on_key_down,self__.owner,self__.data,self__.map__20082,self__.edit_key,self__.p__20075,self__.className,self__.on_edit,self__.id,self__.opts,meta20084__$1));
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t20083 = ((function (map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t20083(input__$1,on_key_down__$1,owner__$1,data__$1,map__20082__$2,edit_key__$1,p__20075__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta20084){return (new hivez.core.t20083(input__$1,on_key_down__$1,owner__$1,data__$1,map__20082__$2,edit_key__$1,p__20075__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta20084));
});})(map__20082,map__20082__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t20083(input,on_key_down,owner,data,map__20082__$1,edit_key,p__20075,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__20088){var map__20096 = p__20088;var map__20096__$1 = ((cljs.core.seq_QMARK_.call(null,map__20096))?cljs.core.apply.call(null,cljs.core.hash_map,map__20096):map__20096);var opts = map__20096__$1;var on_edit = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t20097 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20097 = (function (on_edit,opts,map__20096,p__20088,owner,hive,input_control,meta20098){
this.on_edit = on_edit;
this.opts = opts;
this.map__20096 = map__20096;
this.p__20088 = p__20088;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta20098 = meta20098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20097.cljs$lang$type = true;
hivez.core.t20097.cljs$lang$ctorStr = "hivez.core/t20097";
hivez.core.t20097.cljs$lang$ctorPrWriter = ((function (map__20096,map__20096__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20097");
});})(map__20096,map__20096__$1,opts,on_edit))
;
hivez.core.t20097.prototype.om$core$IRenderState$ = true;
hivez.core.t20097.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20096,map__20096__$1,opts,on_edit){
return (function (_,p__20100){var self__ = this;
var map__20101 = p__20100;var map__20101__$1 = ((cljs.core.seq_QMARK_.call(null,map__20101))?cljs.core.apply.call(null,cljs.core.hash_map,map__20101):map__20101);var editing = cljs.core.get.call(null,map__20101__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__20102 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__20102) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__20102,___$1,map__20101,map__20101__$1,editing,map__20096,map__20096__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__20102,___$1,map__20101,map__20101__$1,editing,map__20096,map__20096__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__20096,map__20096__$1,opts,on_edit))
;
hivez.core.t20097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20096,map__20096__$1,opts,on_edit){
return (function (_20099){var self__ = this;
var _20099__$1 = this;return self__.meta20098;
});})(map__20096,map__20096__$1,opts,on_edit))
;
hivez.core.t20097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20096,map__20096__$1,opts,on_edit){
return (function (_20099,meta20098__$1){var self__ = this;
var _20099__$1 = this;return (new hivez.core.t20097(self__.on_edit,self__.opts,self__.map__20096,self__.p__20088,self__.owner,self__.hive,self__.input_control,meta20098__$1));
});})(map__20096,map__20096__$1,opts,on_edit))
;
hivez.core.__GT_t20097 = ((function (map__20096,map__20096__$1,opts,on_edit){
return (function __GT_t20097(on_edit__$1,opts__$1,map__20096__$2,p__20088__$1,owner__$1,hive__$1,input_control__$1,meta20098){return (new hivez.core.t20097(on_edit__$1,opts__$1,map__20096__$2,p__20088__$1,owner__$1,hive__$1,input_control__$1,meta20098));
});})(map__20096,map__20096__$1,opts,on_edit))
;
}
return (new hivez.core.t20097(on_edit,opts,map__20096__$1,p__20088,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__20104){var map__20109 = p__20104;var map__20109__$1 = ((cljs.core.seq_QMARK_.call(null,map__20109))?cljs.core.apply.call(null,cljs.core.hash_map,map__20109):map__20109);var opts = map__20109__$1;var route = cljs.core.get.call(null,map__20109__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t20110 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20110 = (function (route,opts,map__20109,p__20104,owner,data,name_select,meta20111){
this.route = route;
this.opts = opts;
this.map__20109 = map__20109;
this.p__20104 = p__20104;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta20111 = meta20111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20110.cljs$lang$type = true;
hivez.core.t20110.cljs$lang$ctorStr = "hivez.core/t20110";
hivez.core.t20110.cljs$lang$ctorPrWriter = ((function (map__20109,map__20109__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20110");
});})(map__20109,map__20109__$1,opts,route))
;
hivez.core.t20110.prototype.om$core$IRender$ = true;
hivez.core.t20110.prototype.om$core$IRender$render$arity$1 = ((function (map__20109,map__20109__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__20109,map__20109__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__20109,map__20109__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__20109,map__20109__$1,opts,route))
;
hivez.core.t20110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20109,map__20109__$1,opts,route){
return (function (_20112){var self__ = this;
var _20112__$1 = this;return self__.meta20111;
});})(map__20109,map__20109__$1,opts,route))
;
hivez.core.t20110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20109,map__20109__$1,opts,route){
return (function (_20112,meta20111__$1){var self__ = this;
var _20112__$1 = this;return (new hivez.core.t20110(self__.route,self__.opts,self__.map__20109,self__.p__20104,self__.owner,self__.data,self__.name_select,meta20111__$1));
});})(map__20109,map__20109__$1,opts,route))
;
hivez.core.__GT_t20110 = ((function (map__20109,map__20109__$1,opts,route){
return (function __GT_t20110(route__$1,opts__$1,map__20109__$2,p__20104__$1,owner__$1,data__$1,name_select__$1,meta20111){return (new hivez.core.t20110(route__$1,opts__$1,map__20109__$2,p__20104__$1,owner__$1,data__$1,name_select__$1,meta20111));
});})(map__20109,map__20109__$1,opts,route))
;
}
return (new hivez.core.t20110(route,opts,map__20109__$1,p__20104,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t20116 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20116 = (function (owner,places,places_info,meta20117){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta20117 = meta20117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20116.cljs$lang$type = true;
hivez.core.t20116.cljs$lang$ctorStr = "hivez.core/t20116";
hivez.core.t20116.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20116");
});
hivez.core.t20116.prototype.om$core$IRender$ = true;
hivez.core.t20116.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t20116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20118){var self__ = this;
var _20118__$1 = this;return self__.meta20117;
});
hivez.core.t20116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20118,meta20117__$1){var self__ = this;
var _20118__$1 = this;return (new hivez.core.t20116(self__.owner,self__.places,self__.places_info,meta20117__$1));
});
hivez.core.__GT_t20116 = (function __GT_t20116(owner__$1,places__$1,places_info__$1,meta20117){return (new hivez.core.t20116(owner__$1,places__$1,places_info__$1,meta20117));
});
}
return (new hivez.core.t20116(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t20122 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20122 = (function (owner,place,place_info,meta20123){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta20123 = meta20123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20122.cljs$lang$type = true;
hivez.core.t20122.cljs$lang$ctorStr = "hivez.core/t20122";
hivez.core.t20122.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20122");
});
hivez.core.t20122.prototype.om$core$IRender$ = true;
hivez.core.t20122.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t20122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20124){var self__ = this;
var _20124__$1 = this;return self__.meta20123;
});
hivez.core.t20122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20124,meta20123__$1){var self__ = this;
var _20124__$1 = this;return (new hivez.core.t20122(self__.owner,self__.place,self__.place_info,meta20123__$1));
});
hivez.core.__GT_t20122 = (function __GT_t20122(owner__$1,place__$1,place_info__$1,meta20123){return (new hivez.core.t20122(owner__$1,place__$1,place_info__$1,meta20123));
});
}
return (new hivez.core.t20122(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__20125){var map__20130 = p__20125;var map__20130__$1 = ((cljs.core.seq_QMARK_.call(null,map__20130))?cljs.core.apply.call(null,cljs.core.hash_map,map__20130):map__20130);var opts = map__20130__$1;var begin_edit = cljs.core.get.call(null,map__20130__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t20131 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20131 = (function (begin_edit,opts,map__20130,p__20125,owner,hive,hive_info,meta20132){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__20130 = map__20130;
this.p__20125 = p__20125;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta20132 = meta20132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20131.cljs$lang$type = true;
hivez.core.t20131.cljs$lang$ctorStr = "hivez.core/t20131";
hivez.core.t20131.cljs$lang$ctorPrWriter = ((function (map__20130,map__20130__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20131");
});})(map__20130,map__20130__$1,opts,begin_edit))
;
hivez.core.t20131.prototype.om$core$IRender$ = true;
hivez.core.t20131.prototype.om$core$IRender$render$arity$1 = ((function (map__20130,map__20130__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__20130,map__20130__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__20130,map__20130__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__20130,map__20130__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__20130,map__20130__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__20130,map__20130__$1,opts,begin_edit))
;
hivez.core.t20131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20130,map__20130__$1,opts,begin_edit){
return (function (_20133){var self__ = this;
var _20133__$1 = this;return self__.meta20132;
});})(map__20130,map__20130__$1,opts,begin_edit))
;
hivez.core.t20131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20130,map__20130__$1,opts,begin_edit){
return (function (_20133,meta20132__$1){var self__ = this;
var _20133__$1 = this;return (new hivez.core.t20131(self__.begin_edit,self__.opts,self__.map__20130,self__.p__20125,self__.owner,self__.hive,self__.hive_info,meta20132__$1));
});})(map__20130,map__20130__$1,opts,begin_edit))
;
hivez.core.__GT_t20131 = ((function (map__20130,map__20130__$1,opts,begin_edit){
return (function __GT_t20131(begin_edit__$1,opts__$1,map__20130__$2,p__20125__$1,owner__$1,hive__$1,hive_info__$1,meta20132){return (new hivez.core.t20131(begin_edit__$1,opts__$1,map__20130__$2,p__20125__$1,owner__$1,hive__$1,hive_info__$1,meta20132));
});})(map__20130,map__20130__$1,opts,begin_edit))
;
}
return (new hivez.core.t20131(begin_edit,opts,map__20130__$1,p__20125,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__20135){var map__20142 = p__20135;var map__20142__$1 = ((cljs.core.seq_QMARK_.call(null,map__20142))?cljs.core.apply.call(null,cljs.core.hash_map,map__20142):map__20142);var opts = map__20142__$1;var toggle_open = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t20143 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20143 = (function (toggle_open,opts,map__20142,p__20135,owner,data,navicon,meta20144){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__20142 = map__20142;
this.p__20135 = p__20135;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta20144 = meta20144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20143.cljs$lang$type = true;
hivez.core.t20143.cljs$lang$ctorStr = "hivez.core/t20143";
hivez.core.t20143.cljs$lang$ctorPrWriter = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20143");
});})(map__20142,map__20142__$1,opts,toggle_open))
;
hivez.core.t20143.prototype.om$core$IRenderState$ = true;
hivez.core.t20143.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function (_,p__20146){var self__ = this;
var map__20147 = p__20146;var map__20147__$1 = ((cljs.core.seq_QMARK_.call(null,map__20147))?cljs.core.apply.call(null,cljs.core.hash_map,map__20147):map__20147);var editing = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__20147,map__20147__$1,editing,active,map__20142,map__20142__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__20147,map__20147__$1,editing,active,map__20142,map__20142__$1,opts,toggle_open){
return (function (p1__20134_SHARP_){return cljs.core.not.call(null,p1__20134_SHARP_);
});})(___$1,map__20147,map__20147__$1,editing,active,map__20142,map__20142__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__20147,map__20147__$1,editing,active,map__20142,map__20142__$1,opts,toggle_open))
, "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null))), "style": hivez.core.display_fade_in.call(null,(editing == null))});
});})(map__20142,map__20142__$1,opts,toggle_open))
;
hivez.core.t20143.prototype.om$core$IInitState$ = true;
hivez.core.t20143.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__20142,map__20142__$1,opts,toggle_open))
;
hivez.core.t20143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function (_20145){var self__ = this;
var _20145__$1 = this;return self__.meta20144;
});})(map__20142,map__20142__$1,opts,toggle_open))
;
hivez.core.t20143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function (_20145,meta20144__$1){var self__ = this;
var _20145__$1 = this;return (new hivez.core.t20143(self__.toggle_open,self__.opts,self__.map__20142,self__.p__20135,self__.owner,self__.data,self__.navicon,meta20144__$1));
});})(map__20142,map__20142__$1,opts,toggle_open))
;
hivez.core.__GT_t20143 = ((function (map__20142,map__20142__$1,opts,toggle_open){
return (function __GT_t20143(toggle_open__$1,opts__$1,map__20142__$2,p__20135__$1,owner__$1,data__$1,navicon__$1,meta20144){return (new hivez.core.t20143(toggle_open__$1,opts__$1,map__20142__$2,p__20135__$1,owner__$1,data__$1,navicon__$1,meta20144));
});})(map__20142,map__20142__$1,opts,toggle_open))
;
}
return (new hivez.core.t20143(toggle_open,opts,map__20142__$1,p__20135,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,opts){if(typeof hivez.core.t20153 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20153 = (function (opts,owner,data,control_panel,meta20154){
this.opts = opts;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta20154 = meta20154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20153.cljs$lang$type = true;
hivez.core.t20153.cljs$lang$ctorStr = "hivez.core/t20153";
hivez.core.t20153.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20153");
});
hivez.core.t20153.prototype.om$core$IRenderState$ = true;
hivez.core.t20153.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20156){var self__ = this;
var map__20157 = p__20156;var map__20157__$1 = ((cljs.core.seq_QMARK_.call(null,map__20157))?cljs.core.apply.call(null,cljs.core.hash_map,map__20157):map__20157);var editing = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"className": "control-panel"},om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});
hivez.core.t20153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20155){var self__ = this;
var _20155__$1 = this;return self__.meta20154;
});
hivez.core.t20153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20155,meta20154__$1){var self__ = this;
var _20155__$1 = this;return (new hivez.core.t20153(self__.opts,self__.owner,self__.data,self__.control_panel,meta20154__$1));
});
hivez.core.__GT_t20153 = (function __GT_t20153(opts__$1,owner__$1,data__$1,control_panel__$1,meta20154){return (new hivez.core.t20153(opts__$1,owner__$1,data__$1,control_panel__$1,meta20154));
});
}
return (new hivez.core.t20153(opts,owner,data,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.route_BANG_ = (function route_BANG_(owner,child,child_ks,child_opts){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child","child",623967545),child);
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),child_ks);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),(function (){var or__12546__auto__ = child_opts;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t20214 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20214 = (function (owner,data,drawer,meta20215){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta20215 = meta20215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20214.cljs$lang$type = true;
hivez.core.t20214.cljs$lang$ctorStr = "hivez.core/t20214";
hivez.core.t20214.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20214");
});
hivez.core.t20214.prototype.om$core$IRenderState$ = true;
hivez.core.t20214.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20217){var self__ = this;
var map__20218 = p__20217;var map__20218__$1 = ((cljs.core.seq_QMARK_.call(null,map__20218))?cljs.core.apply.call(null,cljs.core.hash_map,map__20218):map__20218);var child_opts = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"child","child",623967545));var nav_chan = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__20218,map__20218__$1,child_opts,child_ks,child,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__20218,map__20218__$1,child_opts,child_ks,child,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t20214.prototype.om$core$IWillMount$ = true;
hivez.core.t20214.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_20249){var state_val_20250 = (state_20249[(1)]);if((state_val_20250 === (8)))
{var inst_20222 = (state_20249[(7)]);var inst_20229 = cljs.core.second.call(null,inst_20222);var inst_20230 = cljs.core.last.call(null,inst_20229);var inst_20231 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_20230);var inst_20232 = cljs.core.second.call(null,inst_20222);var inst_20233 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_20234 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_20235 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_20236 = [inst_20235];var inst_20237 = cljs.core.PersistentHashMap.fromArrays(inst_20234,inst_20236);var inst_20238 = [inst_20237];var inst_20239 = cljs.core.PersistentHashMap.fromArrays(inst_20233,inst_20238);var inst_20240 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_20232,inst_20239);var state_20249__$1 = (function (){var statearr_20251 = state_20249;(statearr_20251[(8)] = inst_20231);
return statearr_20251;
})();var statearr_20252_20270 = state_20249__$1;(statearr_20252_20270[(2)] = inst_20240);
(statearr_20252_20270[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20250 === (7)))
{var inst_20222 = (state_20249[(7)]);var inst_20226 = cljs.core.second.call(null,inst_20222);var inst_20227 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_20226);var state_20249__$1 = state_20249;var statearr_20253_20271 = state_20249__$1;(statearr_20253_20271[(2)] = inst_20227);
(statearr_20253_20271[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20250 === (6)))
{var inst_20222 = (state_20249[(7)]);var inst_20223 = cljs.core.second.call(null,inst_20222);var inst_20224 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_20223);var state_20249__$1 = state_20249;var statearr_20254_20272 = state_20249__$1;(statearr_20254_20272[(2)] = inst_20224);
(statearr_20254_20272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20250 === (5)))
{var inst_20244 = (state_20249[(2)]);var state_20249__$1 = (function (){var statearr_20255 = state_20249;(statearr_20255[(9)] = inst_20244);
return statearr_20255;
})();var statearr_20256_20273 = state_20249__$1;(statearr_20256_20273[(2)] = null);
(statearr_20256_20273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20250 === (4)))
{var inst_20222 = (state_20249[(7)]);var inst_20222__$1 = (state_20249[(2)]);var inst_20242 = cljs.core.first.call(null,inst_20222__$1);var state_20249__$1 = (function (){var statearr_20257 = state_20249;(statearr_20257[(7)] = inst_20222__$1);
return statearr_20257;
})();var G__20258_20274 = inst_20242;switch (G__20258_20274) {
case "places":
var statearr_20259_20276 = state_20249__$1;(statearr_20259_20276[(1)] = (6));

break;
case "place":
var statearr_20260_20277 = state_20249__$1;(statearr_20260_20277[(1)] = (7));

break;
case "hive":
var statearr_20261_20278 = state_20249__$1;(statearr_20261_20278[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20242))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20250 === (3)))
{var inst_20247 = (state_20249[(2)]);var state_20249__$1 = state_20249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20249__$1,inst_20247);
} else
{if((state_val_20250 === (2)))
{var inst_20220 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_20249__$1 = state_20249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20249__$1,(4),inst_20220);
} else
{if((state_val_20250 === (1)))
{var state_20249__$1 = state_20249;var statearr_20262_20279 = state_20249__$1;(statearr_20262_20279[(2)] = null);
(statearr_20262_20279[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_20266 = [null,null,null,null,null,null,null,null,null,null];(statearr_20266[(0)] = state_machine__15073__auto__);
(statearr_20266[(1)] = (1));
return statearr_20266;
});
var state_machine__15073__auto____1 = (function (state_20249){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_20249);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e20267){if((e20267 instanceof Object))
{var ex__15076__auto__ = e20267;var statearr_20268_20280 = state_20249;(statearr_20268_20280[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20281 = state_20249;
state_20249 = G__20281;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_20249){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_20249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_20269 = f__15088__auto__.call(null);(statearr_20269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_20269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t20214.prototype.om$core$IInitState$ = true;
hivez.core.t20214.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t20214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20216){var self__ = this;
var _20216__$1 = this;return self__.meta20215;
});
hivez.core.t20214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20216,meta20215__$1){var self__ = this;
var _20216__$1 = this;return (new hivez.core.t20214(self__.owner,self__.data,self__.drawer,meta20215__$1));
});
hivez.core.__GT_t20214 = (function __GT_t20214(owner__$1,data__$1,drawer__$1,meta20215){return (new hivez.core.t20214(owner__$1,data__$1,drawer__$1,meta20215));
});
}
return (new hivez.core.t20214(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t20285 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20285 = (function (owner,data,app,meta20286){
this.owner = owner;
this.data = data;
this.app = app;
this.meta20286 = meta20286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20285.cljs$lang$type = true;
hivez.core.t20285.cljs$lang$ctorStr = "hivez.core/t20285";
hivez.core.t20285.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20285");
});
hivez.core.t20285.prototype.om$core$IRender$ = true;
hivez.core.t20285.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t20285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20287){var self__ = this;
var _20287__$1 = this;return self__.meta20286;
});
hivez.core.t20285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20287,meta20286__$1){var self__ = this;
var _20287__$1 = this;return (new hivez.core.t20285(self__.owner,self__.data,self__.app,meta20286__$1));
});
hivez.core.__GT_t20285 = (function __GT_t20285(owner__$1,data__$1,app__$1,meta20286){return (new hivez.core.t20285(owner__$1,data__$1,app__$1,meta20286));
});
}
return (new hivez.core.t20285(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map