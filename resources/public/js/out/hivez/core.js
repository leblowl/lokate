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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__20734_SHARP_){return cljs.core.assoc.call(null,p1__20734_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__20735){
var args = cljs.core.seq(arglist__20735);
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
return (function (p1__20736_SHARP_){return cljs.core.assoc_in.call(null,p1__20736_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__20737_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20737_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__20738_SHARP_){if(cljs.core._EQ_.call(null,key,p1__20738_SHARP_))
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
return (function (p1__20739_SHARP_){return cljs.core.assoc.call(null,p1__20739_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_20742 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_20742){
return (function (p1__20740_SHARP_){return cljs.core.dissoc.call(null,p1__20740_SHARP_,cljs.core.last.call(null,path));
});})(hive_20742))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_20742,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__20741_SHARP_){return cljs.core.dissoc.call(null,p1__20741_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__20743){var map__20750 = p__20743;var map__20750__$1 = ((cljs.core.seq_QMARK_.call(null,map__20750))?cljs.core.apply.call(null,cljs.core.hash_map,map__20750):map__20750);var opts = map__20750__$1;var on_key_down = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t20751 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20751 = (function (input,on_key_down,owner,data,map__20750,edit_key,p__20743,className,on_edit,id,opts,meta20752){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.map__20750 = map__20750;
this.edit_key = edit_key;
this.p__20743 = p__20743;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta20752 = meta20752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20751.cljs$lang$type = true;
hivez.core.t20751.cljs$lang$ctorStr = "hivez.core/t20751";
hivez.core.t20751.cljs$lang$ctorPrWriter = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20751");
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20751.prototype.om$core$IRenderState$ = true;
hivez.core.t20751.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__20754){var self__ = this;
var map__20755 = p__20754;var map__20755__$1 = ((cljs.core.seq_QMARK_.call(null,map__20755))?cljs.core.apply.call(null,cljs.core.hash_map,map__20755):map__20755);var exit_type = cljs.core.get.call(null,map__20755__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__20755,map__20755__$1,exit_type,map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20751.prototype.om$core$IDidMount$ = true;
hivez.core.t20751.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20751.prototype.om$core$IInitState$ = true;
hivez.core.t20751.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_20753){var self__ = this;
var _20753__$1 = this;return self__.meta20752;
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t20751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_20753,meta20752__$1){var self__ = this;
var _20753__$1 = this;return (new hivez.core.t20751(self__.input,self__.on_key_down,self__.owner,self__.data,self__.map__20750,self__.edit_key,self__.p__20743,self__.className,self__.on_edit,self__.id,self__.opts,meta20752__$1));
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t20751 = ((function (map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t20751(input__$1,on_key_down__$1,owner__$1,data__$1,map__20750__$2,edit_key__$1,p__20743__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta20752){return (new hivez.core.t20751(input__$1,on_key_down__$1,owner__$1,data__$1,map__20750__$2,edit_key__$1,p__20743__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta20752));
});})(map__20750,map__20750__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t20751(input,on_key_down,owner,data,map__20750__$1,edit_key,p__20743,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__20756){var map__20764 = p__20756;var map__20764__$1 = ((cljs.core.seq_QMARK_.call(null,map__20764))?cljs.core.apply.call(null,cljs.core.hash_map,map__20764):map__20764);var opts = map__20764__$1;var on_edit = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t20765 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20765 = (function (on_edit,opts,map__20764,p__20756,owner,hive,input_control,meta20766){
this.on_edit = on_edit;
this.opts = opts;
this.map__20764 = map__20764;
this.p__20756 = p__20756;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta20766 = meta20766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20765.cljs$lang$type = true;
hivez.core.t20765.cljs$lang$ctorStr = "hivez.core/t20765";
hivez.core.t20765.cljs$lang$ctorPrWriter = ((function (map__20764,map__20764__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20765");
});})(map__20764,map__20764__$1,opts,on_edit))
;
hivez.core.t20765.prototype.om$core$IRenderState$ = true;
hivez.core.t20765.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20764,map__20764__$1,opts,on_edit){
return (function (_,p__20768){var self__ = this;
var map__20769 = p__20768;var map__20769__$1 = ((cljs.core.seq_QMARK_.call(null,map__20769))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);var editing = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__20770 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__20770) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__20770,___$1,map__20769,map__20769__$1,editing,map__20764,map__20764__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__20770,___$1,map__20769,map__20769__$1,editing,map__20764,map__20764__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__20764,map__20764__$1,opts,on_edit))
;
hivez.core.t20765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20764,map__20764__$1,opts,on_edit){
return (function (_20767){var self__ = this;
var _20767__$1 = this;return self__.meta20766;
});})(map__20764,map__20764__$1,opts,on_edit))
;
hivez.core.t20765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20764,map__20764__$1,opts,on_edit){
return (function (_20767,meta20766__$1){var self__ = this;
var _20767__$1 = this;return (new hivez.core.t20765(self__.on_edit,self__.opts,self__.map__20764,self__.p__20756,self__.owner,self__.hive,self__.input_control,meta20766__$1));
});})(map__20764,map__20764__$1,opts,on_edit))
;
hivez.core.__GT_t20765 = ((function (map__20764,map__20764__$1,opts,on_edit){
return (function __GT_t20765(on_edit__$1,opts__$1,map__20764__$2,p__20756__$1,owner__$1,hive__$1,input_control__$1,meta20766){return (new hivez.core.t20765(on_edit__$1,opts__$1,map__20764__$2,p__20756__$1,owner__$1,hive__$1,input_control__$1,meta20766));
});})(map__20764,map__20764__$1,opts,on_edit))
;
}
return (new hivez.core.t20765(on_edit,opts,map__20764__$1,p__20756,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__20772){var map__20777 = p__20772;var map__20777__$1 = ((cljs.core.seq_QMARK_.call(null,map__20777))?cljs.core.apply.call(null,cljs.core.hash_map,map__20777):map__20777);var opts = map__20777__$1;var route = cljs.core.get.call(null,map__20777__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t20778 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20778 = (function (route,opts,map__20777,p__20772,owner,data,name_select,meta20779){
this.route = route;
this.opts = opts;
this.map__20777 = map__20777;
this.p__20772 = p__20772;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta20779 = meta20779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20778.cljs$lang$type = true;
hivez.core.t20778.cljs$lang$ctorStr = "hivez.core/t20778";
hivez.core.t20778.cljs$lang$ctorPrWriter = ((function (map__20777,map__20777__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20778");
});})(map__20777,map__20777__$1,opts,route))
;
hivez.core.t20778.prototype.om$core$IRender$ = true;
hivez.core.t20778.prototype.om$core$IRender$render$arity$1 = ((function (map__20777,map__20777__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__20777,map__20777__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__20777,map__20777__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__20777,map__20777__$1,opts,route))
;
hivez.core.t20778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20777,map__20777__$1,opts,route){
return (function (_20780){var self__ = this;
var _20780__$1 = this;return self__.meta20779;
});})(map__20777,map__20777__$1,opts,route))
;
hivez.core.t20778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20777,map__20777__$1,opts,route){
return (function (_20780,meta20779__$1){var self__ = this;
var _20780__$1 = this;return (new hivez.core.t20778(self__.route,self__.opts,self__.map__20777,self__.p__20772,self__.owner,self__.data,self__.name_select,meta20779__$1));
});})(map__20777,map__20777__$1,opts,route))
;
hivez.core.__GT_t20778 = ((function (map__20777,map__20777__$1,opts,route){
return (function __GT_t20778(route__$1,opts__$1,map__20777__$2,p__20772__$1,owner__$1,data__$1,name_select__$1,meta20779){return (new hivez.core.t20778(route__$1,opts__$1,map__20777__$2,p__20772__$1,owner__$1,data__$1,name_select__$1,meta20779));
});})(map__20777,map__20777__$1,opts,route))
;
}
return (new hivez.core.t20778(route,opts,map__20777__$1,p__20772,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t20784 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20784 = (function (owner,places,places_info,meta20785){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta20785 = meta20785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20784.cljs$lang$type = true;
hivez.core.t20784.cljs$lang$ctorStr = "hivez.core/t20784";
hivez.core.t20784.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20784");
});
hivez.core.t20784.prototype.om$core$IRender$ = true;
hivez.core.t20784.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t20784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20786){var self__ = this;
var _20786__$1 = this;return self__.meta20785;
});
hivez.core.t20784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20786,meta20785__$1){var self__ = this;
var _20786__$1 = this;return (new hivez.core.t20784(self__.owner,self__.places,self__.places_info,meta20785__$1));
});
hivez.core.__GT_t20784 = (function __GT_t20784(owner__$1,places__$1,places_info__$1,meta20785){return (new hivez.core.t20784(owner__$1,places__$1,places_info__$1,meta20785));
});
}
return (new hivez.core.t20784(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t20790 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20790 = (function (owner,place,place_info,meta20791){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta20791 = meta20791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20790.cljs$lang$type = true;
hivez.core.t20790.cljs$lang$ctorStr = "hivez.core/t20790";
hivez.core.t20790.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20790");
});
hivez.core.t20790.prototype.om$core$IRender$ = true;
hivez.core.t20790.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t20790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20792){var self__ = this;
var _20792__$1 = this;return self__.meta20791;
});
hivez.core.t20790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20792,meta20791__$1){var self__ = this;
var _20792__$1 = this;return (new hivez.core.t20790(self__.owner,self__.place,self__.place_info,meta20791__$1));
});
hivez.core.__GT_t20790 = (function __GT_t20790(owner__$1,place__$1,place_info__$1,meta20791){return (new hivez.core.t20790(owner__$1,place__$1,place_info__$1,meta20791));
});
}
return (new hivez.core.t20790(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__20793){var map__20798 = p__20793;var map__20798__$1 = ((cljs.core.seq_QMARK_.call(null,map__20798))?cljs.core.apply.call(null,cljs.core.hash_map,map__20798):map__20798);var opts = map__20798__$1;var begin_edit = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t20799 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20799 = (function (begin_edit,opts,map__20798,p__20793,owner,hive,hive_info,meta20800){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__20798 = map__20798;
this.p__20793 = p__20793;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta20800 = meta20800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20799.cljs$lang$type = true;
hivez.core.t20799.cljs$lang$ctorStr = "hivez.core/t20799";
hivez.core.t20799.cljs$lang$ctorPrWriter = ((function (map__20798,map__20798__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20799");
});})(map__20798,map__20798__$1,opts,begin_edit))
;
hivez.core.t20799.prototype.om$core$IRender$ = true;
hivez.core.t20799.prototype.om$core$IRender$render$arity$1 = ((function (map__20798,map__20798__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__20798,map__20798__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__20798,map__20798__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__20798,map__20798__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__20798,map__20798__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__20798,map__20798__$1,opts,begin_edit))
;
hivez.core.t20799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20798,map__20798__$1,opts,begin_edit){
return (function (_20801){var self__ = this;
var _20801__$1 = this;return self__.meta20800;
});})(map__20798,map__20798__$1,opts,begin_edit))
;
hivez.core.t20799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20798,map__20798__$1,opts,begin_edit){
return (function (_20801,meta20800__$1){var self__ = this;
var _20801__$1 = this;return (new hivez.core.t20799(self__.begin_edit,self__.opts,self__.map__20798,self__.p__20793,self__.owner,self__.hive,self__.hive_info,meta20800__$1));
});})(map__20798,map__20798__$1,opts,begin_edit))
;
hivez.core.__GT_t20799 = ((function (map__20798,map__20798__$1,opts,begin_edit){
return (function __GT_t20799(begin_edit__$1,opts__$1,map__20798__$2,p__20793__$1,owner__$1,hive__$1,hive_info__$1,meta20800){return (new hivez.core.t20799(begin_edit__$1,opts__$1,map__20798__$2,p__20793__$1,owner__$1,hive__$1,hive_info__$1,meta20800));
});})(map__20798,map__20798__$1,opts,begin_edit))
;
}
return (new hivez.core.t20799(begin_edit,opts,map__20798__$1,p__20793,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__20803){var map__20810 = p__20803;var map__20810__$1 = ((cljs.core.seq_QMARK_.call(null,map__20810))?cljs.core.apply.call(null,cljs.core.hash_map,map__20810):map__20810);var opts = map__20810__$1;var toggle_open = cljs.core.get.call(null,map__20810__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t20811 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20811 = (function (toggle_open,opts,map__20810,p__20803,owner,data,navicon,meta20812){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__20810 = map__20810;
this.p__20803 = p__20803;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta20812 = meta20812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20811.cljs$lang$type = true;
hivez.core.t20811.cljs$lang$ctorStr = "hivez.core/t20811";
hivez.core.t20811.cljs$lang$ctorPrWriter = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20811");
});})(map__20810,map__20810__$1,opts,toggle_open))
;
hivez.core.t20811.prototype.om$core$IRenderState$ = true;
hivez.core.t20811.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function (_,p__20814){var self__ = this;
var map__20815 = p__20814;var map__20815__$1 = ((cljs.core.seq_QMARK_.call(null,map__20815))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);var editing = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__20815,map__20815__$1,editing,active,map__20810,map__20810__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__20815,map__20815__$1,editing,active,map__20810,map__20810__$1,opts,toggle_open){
return (function (p1__20802_SHARP_){return cljs.core.not.call(null,p1__20802_SHARP_);
});})(___$1,map__20815,map__20815__$1,editing,active,map__20810,map__20810__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__20815,map__20815__$1,editing,active,map__20810,map__20810__$1,opts,toggle_open))
, "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null))), "style": hivez.core.display_fade_in.call(null,(editing == null))});
});})(map__20810,map__20810__$1,opts,toggle_open))
;
hivez.core.t20811.prototype.om$core$IInitState$ = true;
hivez.core.t20811.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__20810,map__20810__$1,opts,toggle_open))
;
hivez.core.t20811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function (_20813){var self__ = this;
var _20813__$1 = this;return self__.meta20812;
});})(map__20810,map__20810__$1,opts,toggle_open))
;
hivez.core.t20811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function (_20813,meta20812__$1){var self__ = this;
var _20813__$1 = this;return (new hivez.core.t20811(self__.toggle_open,self__.opts,self__.map__20810,self__.p__20803,self__.owner,self__.data,self__.navicon,meta20812__$1));
});})(map__20810,map__20810__$1,opts,toggle_open))
;
hivez.core.__GT_t20811 = ((function (map__20810,map__20810__$1,opts,toggle_open){
return (function __GT_t20811(toggle_open__$1,opts__$1,map__20810__$2,p__20803__$1,owner__$1,data__$1,navicon__$1,meta20812){return (new hivez.core.t20811(toggle_open__$1,opts__$1,map__20810__$2,p__20803__$1,owner__$1,data__$1,navicon__$1,meta20812));
});})(map__20810,map__20810__$1,opts,toggle_open))
;
}
return (new hivez.core.t20811(toggle_open,opts,map__20810__$1,p__20803,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,opts){if(typeof hivez.core.t20821 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20821 = (function (opts,owner,data,control_panel,meta20822){
this.opts = opts;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta20822 = meta20822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20821.cljs$lang$type = true;
hivez.core.t20821.cljs$lang$ctorStr = "hivez.core/t20821";
hivez.core.t20821.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20821");
});
hivez.core.t20821.prototype.om$core$IRenderState$ = true;
hivez.core.t20821.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20824){var self__ = this;
var map__20825 = p__20824;var map__20825__$1 = ((cljs.core.seq_QMARK_.call(null,map__20825))?cljs.core.apply.call(null,cljs.core.hash_map,map__20825):map__20825);var editing = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"className": "control-panel"},om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});
hivez.core.t20821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20823){var self__ = this;
var _20823__$1 = this;return self__.meta20822;
});
hivez.core.t20821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20823,meta20822__$1){var self__ = this;
var _20823__$1 = this;return (new hivez.core.t20821(self__.opts,self__.owner,self__.data,self__.control_panel,meta20822__$1));
});
hivez.core.__GT_t20821 = (function __GT_t20821(opts__$1,owner__$1,data__$1,control_panel__$1,meta20822){return (new hivez.core.t20821(opts__$1,owner__$1,data__$1,control_panel__$1,meta20822));
});
}
return (new hivez.core.t20821(opts,owner,data,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t20883 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20883 = (function (owner,data,drawer,meta20884){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta20884 = meta20884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20883.cljs$lang$type = true;
hivez.core.t20883.cljs$lang$ctorStr = "hivez.core/t20883";
hivez.core.t20883.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20883");
});
hivez.core.t20883.prototype.om$core$IRenderState$ = true;
hivez.core.t20883.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20886){var self__ = this;
var map__20887 = p__20886;var map__20887__$1 = ((cljs.core.seq_QMARK_.call(null,map__20887))?cljs.core.apply.call(null,cljs.core.hash_map,map__20887):map__20887);var child_opts = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"child","child",623967545));var nav_chan = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__20887__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__20887,map__20887__$1,child_opts,child_ks,child,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__20887,map__20887__$1,child_opts,child_ks,child,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t20883.prototype.om$core$IWillMount$ = true;
hivez.core.t20883.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_20919){var state_val_20920 = (state_20919[(1)]);if((state_val_20920 === (8)))
{var inst_20891 = (state_20919[(7)]);var inst_20898 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_20899 = cljs.core.second.call(null,inst_20891);var inst_20900 = cljs.core.last.call(null,inst_20899);var inst_20901 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_20900);var inst_20902 = cljs.core.second.call(null,inst_20891);var inst_20903 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_20904 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_20905 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_20906 = [inst_20905];var inst_20907 = cljs.core.PersistentHashMap.fromArrays(inst_20904,inst_20906);var inst_20908 = [inst_20907];var inst_20909 = cljs.core.PersistentHashMap.fromArrays(inst_20903,inst_20908);var inst_20910 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_20902,inst_20909);var state_20919__$1 = (function (){var statearr_20921 = state_20919;(statearr_20921[(8)] = inst_20901);
(statearr_20921[(9)] = inst_20898);
return statearr_20921;
})();var statearr_20922_20940 = state_20919__$1;(statearr_20922_20940[(2)] = inst_20910);
(statearr_20922_20940[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20920 === (7)))
{var inst_20891 = (state_20919[(7)]);var inst_20895 = cljs.core.second.call(null,inst_20891);var inst_20896 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_20895);var state_20919__$1 = state_20919;var statearr_20923_20941 = state_20919__$1;(statearr_20923_20941[(2)] = inst_20896);
(statearr_20923_20941[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20920 === (6)))
{var inst_20891 = (state_20919[(7)]);var inst_20892 = cljs.core.second.call(null,inst_20891);var inst_20893 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_20892);var state_20919__$1 = state_20919;var statearr_20924_20942 = state_20919__$1;(statearr_20924_20942[(2)] = inst_20893);
(statearr_20924_20942[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20920 === (5)))
{var inst_20914 = (state_20919[(2)]);var state_20919__$1 = (function (){var statearr_20925 = state_20919;(statearr_20925[(10)] = inst_20914);
return statearr_20925;
})();var statearr_20926_20943 = state_20919__$1;(statearr_20926_20943[(2)] = null);
(statearr_20926_20943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20920 === (4)))
{var inst_20891 = (state_20919[(7)]);var inst_20891__$1 = (state_20919[(2)]);var inst_20912 = cljs.core.first.call(null,inst_20891__$1);var state_20919__$1 = (function (){var statearr_20927 = state_20919;(statearr_20927[(7)] = inst_20891__$1);
return statearr_20927;
})();var G__20928_20944 = inst_20912;switch (G__20928_20944) {
case "places":
var statearr_20929_20946 = state_20919__$1;(statearr_20929_20946[(1)] = (6));

break;
case "place":
var statearr_20930_20947 = state_20919__$1;(statearr_20930_20947[(1)] = (7));

break;
case "hive":
var statearr_20931_20948 = state_20919__$1;(statearr_20931_20948[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20912))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20920 === (3)))
{var inst_20917 = (state_20919[(2)]);var state_20919__$1 = state_20919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20919__$1,inst_20917);
} else
{if((state_val_20920 === (2)))
{var inst_20889 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_20919__$1 = state_20919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20919__$1,(4),inst_20889);
} else
{if((state_val_20920 === (1)))
{var state_20919__$1 = state_20919;var statearr_20932_20949 = state_20919__$1;(statearr_20932_20949[(2)] = null);
(statearr_20932_20949[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_20936 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20936[(0)] = state_machine__15073__auto__);
(statearr_20936[(1)] = (1));
return statearr_20936;
});
var state_machine__15073__auto____1 = (function (state_20919){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_20919);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object))
{var ex__15076__auto__ = e20937;var statearr_20938_20950 = state_20919;(statearr_20938_20950[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20951 = state_20919;
state_20919 = G__20951;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_20919){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_20919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_20939 = f__15088__auto__.call(null);(statearr_20939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_20939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t20883.prototype.om$core$IInitState$ = true;
hivez.core.t20883.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t20883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20885){var self__ = this;
var _20885__$1 = this;return self__.meta20884;
});
hivez.core.t20883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20885,meta20884__$1){var self__ = this;
var _20885__$1 = this;return (new hivez.core.t20883(self__.owner,self__.data,self__.drawer,meta20884__$1));
});
hivez.core.__GT_t20883 = (function __GT_t20883(owner__$1,data__$1,drawer__$1,meta20884){return (new hivez.core.t20883(owner__$1,data__$1,drawer__$1,meta20884));
});
}
return (new hivez.core.t20883(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t20955 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t20955 = (function (owner,data,app,meta20956){
this.owner = owner;
this.data = data;
this.app = app;
this.meta20956 = meta20956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t20955.cljs$lang$type = true;
hivez.core.t20955.cljs$lang$ctorStr = "hivez.core/t20955";
hivez.core.t20955.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t20955");
});
hivez.core.t20955.prototype.om$core$IRender$ = true;
hivez.core.t20955.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t20955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20957){var self__ = this;
var _20957__$1 = this;return self__.meta20956;
});
hivez.core.t20955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20957,meta20956__$1){var self__ = this;
var _20957__$1 = this;return (new hivez.core.t20955(self__.owner,self__.data,self__.app,meta20956__$1));
});
hivez.core.__GT_t20955 = (function __GT_t20955(owner__$1,data__$1,app__$1,meta20956){return (new hivez.core.t20955(owner__$1,data__$1,app__$1,meta20956));
});
}
return (new hivez.core.t20955(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map