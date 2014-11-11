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
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"All",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(5),new cljs.core.Keyword(null,"lng","lng",1667213918),(5)], null)], null),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__25597_SHARP_){return cljs.core.assoc.call(null,p1__25597_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__25598){
var args = cljs.core.seq(arglist__25598);
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
return (function (p1__25599_SHARP_){return cljs.core.assoc_in.call(null,p1__25599_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__25600_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__25600_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__25601_SHARP_){if(cljs.core._EQ_.call(null,key,p1__25601_SHARP_))
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
return (function (p1__25602_SHARP_){return cljs.core.assoc.call(null,p1__25602_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_25605 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_25605){
return (function (p1__25603_SHARP_){return cljs.core.dissoc.call(null,p1__25603_SHARP_,cljs.core.last.call(null,path));
});})(hive_25605))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_25605,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__25604_SHARP_){return cljs.core.dissoc.call(null,p1__25604_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__25606){var map__25613 = p__25606;var map__25613__$1 = ((cljs.core.seq_QMARK_.call(null,map__25613))?cljs.core.apply.call(null,cljs.core.hash_map,map__25613):map__25613);var opts = map__25613__$1;var on_key_down = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t25614 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25614 = (function (input,on_key_down,map__25613,owner,data,edit_key,className,p__25606,on_edit,id,opts,meta25615){
this.input = input;
this.on_key_down = on_key_down;
this.map__25613 = map__25613;
this.owner = owner;
this.data = data;
this.edit_key = edit_key;
this.className = className;
this.p__25606 = p__25606;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta25615 = meta25615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25614.cljs$lang$type = true;
hivez.core.t25614.cljs$lang$ctorStr = "hivez.core/t25614";
hivez.core.t25614.cljs$lang$ctorPrWriter = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25614");
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25614.prototype.om$core$IRenderState$ = true;
hivez.core.t25614.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__25617){var self__ = this;
var map__25618 = p__25617;var map__25618__$1 = ((cljs.core.seq_QMARK_.call(null,map__25618))?cljs.core.apply.call(null,cljs.core.hash_map,map__25618):map__25618);var exit_type = cljs.core.get.call(null,map__25618__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__25618,map__25618__$1,exit_type,map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25614.prototype.om$core$IDidMount$ = true;
hivez.core.t25614.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25614.prototype.om$core$IInitState$ = true;
hivez.core.t25614.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_25616){var self__ = this;
var _25616__$1 = this;return self__.meta25615;
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_25616,meta25615__$1){var self__ = this;
var _25616__$1 = this;return (new hivez.core.t25614(self__.input,self__.on_key_down,self__.map__25613,self__.owner,self__.data,self__.edit_key,self__.className,self__.p__25606,self__.on_edit,self__.id,self__.opts,meta25615__$1));
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t25614 = ((function (map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t25614(input__$1,on_key_down__$1,map__25613__$2,owner__$1,data__$1,edit_key__$1,className__$1,p__25606__$1,on_edit__$1,id__$1,opts__$1,meta25615){return (new hivez.core.t25614(input__$1,on_key_down__$1,map__25613__$2,owner__$1,data__$1,edit_key__$1,className__$1,p__25606__$1,on_edit__$1,id__$1,opts__$1,meta25615));
});})(map__25613,map__25613__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t25614(input,on_key_down,map__25613__$1,owner,data,edit_key,className,p__25606,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__25619){var map__25627 = p__25619;var map__25627__$1 = ((cljs.core.seq_QMARK_.call(null,map__25627))?cljs.core.apply.call(null,cljs.core.hash_map,map__25627):map__25627);var opts = map__25627__$1;var on_edit = cljs.core.get.call(null,map__25627__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t25628 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25628 = (function (on_edit,opts,map__25627,p__25619,owner,hive,input_control,meta25629){
this.on_edit = on_edit;
this.opts = opts;
this.map__25627 = map__25627;
this.p__25619 = p__25619;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta25629 = meta25629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25628.cljs$lang$type = true;
hivez.core.t25628.cljs$lang$ctorStr = "hivez.core/t25628";
hivez.core.t25628.cljs$lang$ctorPrWriter = ((function (map__25627,map__25627__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25628");
});})(map__25627,map__25627__$1,opts,on_edit))
;
hivez.core.t25628.prototype.om$core$IRenderState$ = true;
hivez.core.t25628.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25627,map__25627__$1,opts,on_edit){
return (function (_,p__25631){var self__ = this;
var map__25632 = p__25631;var map__25632__$1 = ((cljs.core.seq_QMARK_.call(null,map__25632))?cljs.core.apply.call(null,cljs.core.hash_map,map__25632):map__25632);var editing = cljs.core.get.call(null,map__25632__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__25633 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__25633) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__25633,___$1,map__25632,map__25632__$1,editing,map__25627,map__25627__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__25633,___$1,map__25632,map__25632__$1,editing,map__25627,map__25627__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__25627,map__25627__$1,opts,on_edit))
;
hivez.core.t25628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25627,map__25627__$1,opts,on_edit){
return (function (_25630){var self__ = this;
var _25630__$1 = this;return self__.meta25629;
});})(map__25627,map__25627__$1,opts,on_edit))
;
hivez.core.t25628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25627,map__25627__$1,opts,on_edit){
return (function (_25630,meta25629__$1){var self__ = this;
var _25630__$1 = this;return (new hivez.core.t25628(self__.on_edit,self__.opts,self__.map__25627,self__.p__25619,self__.owner,self__.hive,self__.input_control,meta25629__$1));
});})(map__25627,map__25627__$1,opts,on_edit))
;
hivez.core.__GT_t25628 = ((function (map__25627,map__25627__$1,opts,on_edit){
return (function __GT_t25628(on_edit__$1,opts__$1,map__25627__$2,p__25619__$1,owner__$1,hive__$1,input_control__$1,meta25629){return (new hivez.core.t25628(on_edit__$1,opts__$1,map__25627__$2,p__25619__$1,owner__$1,hive__$1,input_control__$1,meta25629));
});})(map__25627,map__25627__$1,opts,on_edit))
;
}
return (new hivez.core.t25628(on_edit,opts,map__25627__$1,p__25619,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__25635){var map__25640 = p__25635;var map__25640__$1 = ((cljs.core.seq_QMARK_.call(null,map__25640))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);var opts = map__25640__$1;var route = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t25641 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25641 = (function (route,opts,map__25640,p__25635,owner,data,name_select,meta25642){
this.route = route;
this.opts = opts;
this.map__25640 = map__25640;
this.p__25635 = p__25635;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta25642 = meta25642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25641.cljs$lang$type = true;
hivez.core.t25641.cljs$lang$ctorStr = "hivez.core/t25641";
hivez.core.t25641.cljs$lang$ctorPrWriter = ((function (map__25640,map__25640__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25641");
});})(map__25640,map__25640__$1,opts,route))
;
hivez.core.t25641.prototype.om$core$IRender$ = true;
hivez.core.t25641.prototype.om$core$IRender$render$arity$1 = ((function (map__25640,map__25640__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__25640,map__25640__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__25640,map__25640__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__25640,map__25640__$1,opts,route))
;
hivez.core.t25641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25640,map__25640__$1,opts,route){
return (function (_25643){var self__ = this;
var _25643__$1 = this;return self__.meta25642;
});})(map__25640,map__25640__$1,opts,route))
;
hivez.core.t25641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25640,map__25640__$1,opts,route){
return (function (_25643,meta25642__$1){var self__ = this;
var _25643__$1 = this;return (new hivez.core.t25641(self__.route,self__.opts,self__.map__25640,self__.p__25635,self__.owner,self__.data,self__.name_select,meta25642__$1));
});})(map__25640,map__25640__$1,opts,route))
;
hivez.core.__GT_t25641 = ((function (map__25640,map__25640__$1,opts,route){
return (function __GT_t25641(route__$1,opts__$1,map__25640__$2,p__25635__$1,owner__$1,data__$1,name_select__$1,meta25642){return (new hivez.core.t25641(route__$1,opts__$1,map__25640__$2,p__25635__$1,owner__$1,data__$1,name_select__$1,meta25642));
});})(map__25640,map__25640__$1,opts,route))
;
}
return (new hivez.core.t25641(route,opts,map__25640__$1,p__25635,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t25647 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25647 = (function (owner,places,places_info,meta25648){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta25648 = meta25648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25647.cljs$lang$type = true;
hivez.core.t25647.cljs$lang$ctorStr = "hivez.core/t25647";
hivez.core.t25647.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25647");
});
hivez.core.t25647.prototype.om$core$IRender$ = true;
hivez.core.t25647.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t25647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25649){var self__ = this;
var _25649__$1 = this;return self__.meta25648;
});
hivez.core.t25647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25649,meta25648__$1){var self__ = this;
var _25649__$1 = this;return (new hivez.core.t25647(self__.owner,self__.places,self__.places_info,meta25648__$1));
});
hivez.core.__GT_t25647 = (function __GT_t25647(owner__$1,places__$1,places_info__$1,meta25648){return (new hivez.core.t25647(owner__$1,places__$1,places_info__$1,meta25648));
});
}
return (new hivez.core.t25647(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t25653 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25653 = (function (owner,place,place_info,meta25654){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta25654 = meta25654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25653.cljs$lang$type = true;
hivez.core.t25653.cljs$lang$ctorStr = "hivez.core/t25653";
hivez.core.t25653.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25653");
});
hivez.core.t25653.prototype.om$core$IRender$ = true;
hivez.core.t25653.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t25653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25655){var self__ = this;
var _25655__$1 = this;return self__.meta25654;
});
hivez.core.t25653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25655,meta25654__$1){var self__ = this;
var _25655__$1 = this;return (new hivez.core.t25653(self__.owner,self__.place,self__.place_info,meta25654__$1));
});
hivez.core.__GT_t25653 = (function __GT_t25653(owner__$1,place__$1,place_info__$1,meta25654){return (new hivez.core.t25653(owner__$1,place__$1,place_info__$1,meta25654));
});
}
return (new hivez.core.t25653(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__25656){var map__25661 = p__25656;var map__25661__$1 = ((cljs.core.seq_QMARK_.call(null,map__25661))?cljs.core.apply.call(null,cljs.core.hash_map,map__25661):map__25661);var opts = map__25661__$1;var begin_edit = cljs.core.get.call(null,map__25661__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t25662 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25662 = (function (begin_edit,opts,map__25661,p__25656,owner,hive,hive_info,meta25663){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__25661 = map__25661;
this.p__25656 = p__25656;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta25663 = meta25663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25662.cljs$lang$type = true;
hivez.core.t25662.cljs$lang$ctorStr = "hivez.core/t25662";
hivez.core.t25662.cljs$lang$ctorPrWriter = ((function (map__25661,map__25661__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25662");
});})(map__25661,map__25661__$1,opts,begin_edit))
;
hivez.core.t25662.prototype.om$core$IRender$ = true;
hivez.core.t25662.prototype.om$core$IRender$render$arity$1 = ((function (map__25661,map__25661__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__25661,map__25661__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__25661,map__25661__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__25661,map__25661__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__25661,map__25661__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__25661,map__25661__$1,opts,begin_edit))
;
hivez.core.t25662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25661,map__25661__$1,opts,begin_edit){
return (function (_25664){var self__ = this;
var _25664__$1 = this;return self__.meta25663;
});})(map__25661,map__25661__$1,opts,begin_edit))
;
hivez.core.t25662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25661,map__25661__$1,opts,begin_edit){
return (function (_25664,meta25663__$1){var self__ = this;
var _25664__$1 = this;return (new hivez.core.t25662(self__.begin_edit,self__.opts,self__.map__25661,self__.p__25656,self__.owner,self__.hive,self__.hive_info,meta25663__$1));
});})(map__25661,map__25661__$1,opts,begin_edit))
;
hivez.core.__GT_t25662 = ((function (map__25661,map__25661__$1,opts,begin_edit){
return (function __GT_t25662(begin_edit__$1,opts__$1,map__25661__$2,p__25656__$1,owner__$1,hive__$1,hive_info__$1,meta25663){return (new hivez.core.t25662(begin_edit__$1,opts__$1,map__25661__$2,p__25656__$1,owner__$1,hive__$1,hive_info__$1,meta25663));
});})(map__25661,map__25661__$1,opts,begin_edit))
;
}
return (new hivez.core.t25662(begin_edit,opts,map__25661__$1,p__25656,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__25666){var map__25673 = p__25666;var map__25673__$1 = ((cljs.core.seq_QMARK_.call(null,map__25673))?cljs.core.apply.call(null,cljs.core.hash_map,map__25673):map__25673);var opts = map__25673__$1;var toggle_open = cljs.core.get.call(null,map__25673__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t25674 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25674 = (function (toggle_open,opts,map__25673,p__25666,owner,data,navicon,meta25675){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__25673 = map__25673;
this.p__25666 = p__25666;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta25675 = meta25675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25674.cljs$lang$type = true;
hivez.core.t25674.cljs$lang$ctorStr = "hivez.core/t25674";
hivez.core.t25674.cljs$lang$ctorPrWriter = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25674");
});})(map__25673,map__25673__$1,opts,toggle_open))
;
hivez.core.t25674.prototype.om$core$IRenderState$ = true;
hivez.core.t25674.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function (_,p__25677){var self__ = this;
var map__25678 = p__25677;var map__25678__$1 = ((cljs.core.seq_QMARK_.call(null,map__25678))?cljs.core.apply.call(null,cljs.core.hash_map,map__25678):map__25678);var editing = cljs.core.get.call(null,map__25678__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__25678__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__25678,map__25678__$1,editing,active,map__25673,map__25673__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__25678,map__25678__$1,editing,active,map__25673,map__25673__$1,opts,toggle_open){
return (function (p1__25665_SHARP_){return cljs.core.not.call(null,p1__25665_SHARP_);
});})(___$1,map__25678,map__25678__$1,editing,active,map__25673,map__25673__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__25678,map__25678__$1,editing,active,map__25673,map__25673__$1,opts,toggle_open))
, "style": hivez.core.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__25673,map__25673__$1,opts,toggle_open))
;
hivez.core.t25674.prototype.om$core$IInitState$ = true;
hivez.core.t25674.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__25673,map__25673__$1,opts,toggle_open))
;
hivez.core.t25674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function (_25676){var self__ = this;
var _25676__$1 = this;return self__.meta25675;
});})(map__25673,map__25673__$1,opts,toggle_open))
;
hivez.core.t25674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function (_25676,meta25675__$1){var self__ = this;
var _25676__$1 = this;return (new hivez.core.t25674(self__.toggle_open,self__.opts,self__.map__25673,self__.p__25666,self__.owner,self__.data,self__.navicon,meta25675__$1));
});})(map__25673,map__25673__$1,opts,toggle_open))
;
hivez.core.__GT_t25674 = ((function (map__25673,map__25673__$1,opts,toggle_open){
return (function __GT_t25674(toggle_open__$1,opts__$1,map__25673__$2,p__25666__$1,owner__$1,data__$1,navicon__$1,meta25675){return (new hivez.core.t25674(toggle_open__$1,opts__$1,map__25673__$2,p__25666__$1,owner__$1,data__$1,navicon__$1,meta25675));
});})(map__25673,map__25673__$1,opts,toggle_open))
;
}
return (new hivez.core.t25674(toggle_open,opts,map__25673__$1,p__25666,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,opts){if(typeof hivez.core.t25684 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25684 = (function (opts,owner,data,control_panel,meta25685){
this.opts = opts;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta25685 = meta25685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25684.cljs$lang$type = true;
hivez.core.t25684.cljs$lang$ctorStr = "hivez.core/t25684";
hivez.core.t25684.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25684");
});
hivez.core.t25684.prototype.om$core$IRenderState$ = true;
hivez.core.t25684.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__25687){var self__ = this;
var map__25688 = p__25687;var map__25688__$1 = ((cljs.core.seq_QMARK_.call(null,map__25688))?cljs.core.apply.call(null,cljs.core.hash_map,map__25688):map__25688);var route = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"route","route",329891309));var editing = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.core.display_fade_in.call(null,open), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(route))),React.DOM.div({"className": "icon-arrow-left2", "id": "nav-back-btn"})),om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});
hivez.core.t25684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25686){var self__ = this;
var _25686__$1 = this;return self__.meta25685;
});
hivez.core.t25684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25686,meta25685__$1){var self__ = this;
var _25686__$1 = this;return (new hivez.core.t25684(self__.opts,self__.owner,self__.data,self__.control_panel,meta25685__$1));
});
hivez.core.__GT_t25684 = (function __GT_t25684(opts__$1,owner__$1,data__$1,control_panel__$1,meta25685){return (new hivez.core.t25684(opts__$1,owner__$1,data__$1,control_panel__$1,meta25685));
});
}
return (new hivez.core.t25684(opts,owner,data,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t25748 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25748 = (function (owner,data,drawer,meta25749){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta25749 = meta25749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25748.cljs$lang$type = true;
hivez.core.t25748.cljs$lang$ctorStr = "hivez.core/t25748";
hivez.core.t25748.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25748");
});
hivez.core.t25748.prototype.om$core$IRenderState$ = true;
hivez.core.t25748.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__25751){var self__ = this;
var map__25752 = p__25751;var map__25752__$1 = ((cljs.core.seq_QMARK_.call(null,map__25752))?cljs.core.apply.call(null,cljs.core.hash_map,map__25752):map__25752);var child_opts = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"child","child",623967545));var route = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"route","route",329891309));var nav_chan = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing,new cljs.core.Keyword(null,"route","route",329891309),route], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__25752,map__25752__$1,child_opts,child_ks,child,route,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__25752,map__25752__$1,child_opts,child_ks,child,route,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t25748.prototype.om$core$IWillMount$ = true;
hivez.core.t25748.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_25786){var state_val_25787 = (state_25786[(1)]);if((state_val_25787 === (8)))
{var inst_25756 = (state_25786[(7)]);var inst_25765 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_25766 = cljs.core.second.call(null,inst_25756);var inst_25767 = cljs.core.last.call(null,inst_25766);var inst_25768 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_25767);var inst_25769 = cljs.core.second.call(null,inst_25756);var inst_25770 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_25771 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_25772 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_25773 = [inst_25772];var inst_25774 = cljs.core.PersistentHashMap.fromArrays(inst_25771,inst_25773);var inst_25775 = [inst_25774];var inst_25776 = cljs.core.PersistentHashMap.fromArrays(inst_25770,inst_25775);var inst_25777 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_25769,inst_25776);var state_25786__$1 = (function (){var statearr_25788 = state_25786;(statearr_25788[(8)] = inst_25768);
(statearr_25788[(9)] = inst_25765);
return statearr_25788;
})();var statearr_25789_25807 = state_25786__$1;(statearr_25789_25807[(2)] = inst_25777);
(statearr_25789_25807[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (7)))
{var inst_25756 = (state_25786[(7)]);var inst_25762 = cljs.core.second.call(null,inst_25756);var inst_25763 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_25762);var state_25786__$1 = state_25786;var statearr_25790_25808 = state_25786__$1;(statearr_25790_25808[(2)] = inst_25763);
(statearr_25790_25808[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (6)))
{var inst_25756 = (state_25786[(7)]);var inst_25759 = cljs.core.second.call(null,inst_25756);var inst_25760 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_25759);var state_25786__$1 = state_25786;var statearr_25791_25809 = state_25786__$1;(statearr_25791_25809[(2)] = inst_25760);
(statearr_25791_25809[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (5)))
{var inst_25781 = (state_25786[(2)]);var state_25786__$1 = (function (){var statearr_25792 = state_25786;(statearr_25792[(10)] = inst_25781);
return statearr_25792;
})();var statearr_25793_25810 = state_25786__$1;(statearr_25793_25810[(2)] = null);
(statearr_25793_25810[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (4)))
{var inst_25756 = (state_25786[(7)]);var inst_25756__$1 = (state_25786[(2)]);var inst_25757 = cljs.core.first.call(null,inst_25756__$1);var inst_25758 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"route","route",329891309),inst_25757);var inst_25779 = cljs.core.first.call(null,inst_25756__$1);var state_25786__$1 = (function (){var statearr_25794 = state_25786;(statearr_25794[(7)] = inst_25756__$1);
(statearr_25794[(11)] = inst_25758);
return statearr_25794;
})();var G__25795_25811 = inst_25779;switch (G__25795_25811) {
case "places":
var statearr_25796_25813 = state_25786__$1;(statearr_25796_25813[(1)] = (6));

break;
case "place":
var statearr_25797_25814 = state_25786__$1;(statearr_25797_25814[(1)] = (7));

break;
case "hive":
var statearr_25798_25815 = state_25786__$1;(statearr_25798_25815[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25779))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25787 === (3)))
{var inst_25784 = (state_25786[(2)]);var state_25786__$1 = state_25786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25786__$1,inst_25784);
} else
{if((state_val_25787 === (2)))
{var inst_25754 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_25786__$1 = state_25786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25786__$1,(4),inst_25754);
} else
{if((state_val_25787 === (1)))
{var state_25786__$1 = state_25786;var statearr_25799_25816 = state_25786__$1;(statearr_25799_25816[(2)] = null);
(statearr_25799_25816[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_25803 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25803[(0)] = state_machine__15073__auto__);
(statearr_25803[(1)] = (1));
return statearr_25803;
});
var state_machine__15073__auto____1 = (function (state_25786){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25786);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25804){if((e25804 instanceof Object))
{var ex__15076__auto__ = e25804;var statearr_25805_25817 = state_25786;(statearr_25805_25817[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25818 = state_25786;
state_25786 = G__25818;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25786){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_25806 = f__15088__auto__.call(null);(statearr_25806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t25748.prototype.om$core$IInitState$ = true;
hivez.core.t25748.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route","route",329891309),"places",new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t25748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25750){var self__ = this;
var _25750__$1 = this;return self__.meta25749;
});
hivez.core.t25748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25750,meta25749__$1){var self__ = this;
var _25750__$1 = this;return (new hivez.core.t25748(self__.owner,self__.data,self__.drawer,meta25749__$1));
});
hivez.core.__GT_t25748 = (function __GT_t25748(owner__$1,data__$1,drawer__$1,meta25749){return (new hivez.core.t25748(owner__$1,data__$1,drawer__$1,meta25749));
});
}
return (new hivez.core.t25748(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t25822 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25822 = (function (owner,data,app,meta25823){
this.owner = owner;
this.data = data;
this.app = app;
this.meta25823 = meta25823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25822.cljs$lang$type = true;
hivez.core.t25822.cljs$lang$ctorStr = "hivez.core/t25822";
hivez.core.t25822.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25822");
});
hivez.core.t25822.prototype.om$core$IRender$ = true;
hivez.core.t25822.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t25822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25824){var self__ = this;
var _25824__$1 = this;return self__.meta25823;
});
hivez.core.t25822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25824,meta25823__$1){var self__ = this;
var _25824__$1 = this;return (new hivez.core.t25822(self__.owner,self__.data,self__.app,meta25823__$1));
});
hivez.core.__GT_t25822 = (function __GT_t25822(owner__$1,data__$1,app__$1,meta25823){return (new hivez.core.t25822(owner__$1,data__$1,app__$1,meta25823));
});
}
return (new hivez.core.t25822(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map