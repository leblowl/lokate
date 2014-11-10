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
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Angels Camp",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(5),new cljs.core.Keyword(null,"lng","lng",1667213918),(5)], null)], null),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null));
hivez.core.db = cljs.core.atom.call(null,null);
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__22476_SHARP_){return cljs.core.assoc.call(null,p1__22476_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__22477){
var args = cljs.core.seq(arglist__22477);
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
return (function (p1__22478_SHARP_){return cljs.core.assoc_in.call(null,p1__22478_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__22479_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22479_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive){
return (function (p1__22480_SHARP_){return cljs.core.assoc.call(null,p1__22480_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__22481_SHARP_){if(cljs.core._EQ_.call(null,key,p1__22481_SHARP_))
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
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_22484 = key.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive_22484){
return (function (p1__22482_SHARP_){return cljs.core.dissoc.call(null,p1__22482_SHARP_,key);
});})(hive_22484))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_22484,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
} else
{om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (p1__22483_SHARP_){return cljs.core.dissoc.call(null,p1__22483_SHARP_,key);
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
hivez.core.input = (function input(data,owner,p__22485){var map__22492 = p__22485;var map__22492__$1 = ((cljs.core.seq_QMARK_.call(null,map__22492))?cljs.core.apply.call(null,cljs.core.hash_map,map__22492):map__22492);var opts = map__22492__$1;var on_key_down = cljs.core.get.call(null,map__22492__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__22492__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__22492__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__22492__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__22492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t22493 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22493 = (function (input,on_key_down,owner,map__22492,data,p__22485,edit_key,className,on_edit,id,opts,meta22494){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.map__22492 = map__22492;
this.data = data;
this.p__22485 = p__22485;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta22494 = meta22494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22493.cljs$lang$type = true;
hivez.core.t22493.cljs$lang$ctorStr = "hivez.core/t22493";
hivez.core.t22493.cljs$lang$ctorPrWriter = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22493");
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22493.prototype.om$core$IRenderState$ = true;
hivez.core.t22493.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__22496){var self__ = this;
var map__22497 = p__22496;var map__22497__$1 = ((cljs.core.seq_QMARK_.call(null,map__22497))?cljs.core.apply.call(null,cljs.core.hash_map,map__22497):map__22497);var exit_type = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__22497,map__22497__$1,exit_type,map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22493.prototype.om$core$IDidMount$ = true;
hivez.core.t22493.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22493.prototype.om$core$IInitState$ = true;
hivez.core.t22493.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_22495){var self__ = this;
var _22495__$1 = this;return self__.meta22494;
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_22495,meta22494__$1){var self__ = this;
var _22495__$1 = this;return (new hivez.core.t22493(self__.input,self__.on_key_down,self__.owner,self__.map__22492,self__.data,self__.p__22485,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta22494__$1));
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t22493 = ((function (map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t22493(input__$1,on_key_down__$1,owner__$1,map__22492__$2,data__$1,p__22485__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta22494){return (new hivez.core.t22493(input__$1,on_key_down__$1,owner__$1,map__22492__$2,data__$1,p__22485__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta22494));
});})(map__22492,map__22492__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t22493(input,on_key_down,owner,map__22492__$1,data,p__22485,edit_key,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__22498){var map__22506 = p__22498;var map__22506__$1 = ((cljs.core.seq_QMARK_.call(null,map__22506))?cljs.core.apply.call(null,cljs.core.hash_map,map__22506):map__22506);var opts = map__22506__$1;var on_edit = cljs.core.get.call(null,map__22506__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t22507 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22507 = (function (on_edit,opts,map__22506,p__22498,owner,hive,input_control,meta22508){
this.on_edit = on_edit;
this.opts = opts;
this.map__22506 = map__22506;
this.p__22498 = p__22498;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta22508 = meta22508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22507.cljs$lang$type = true;
hivez.core.t22507.cljs$lang$ctorStr = "hivez.core/t22507";
hivez.core.t22507.cljs$lang$ctorPrWriter = ((function (map__22506,map__22506__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22507");
});})(map__22506,map__22506__$1,opts,on_edit))
;
hivez.core.t22507.prototype.om$core$IRenderState$ = true;
hivez.core.t22507.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22506,map__22506__$1,opts,on_edit){
return (function (_,p__22510){var self__ = this;
var map__22511 = p__22510;var map__22511__$1 = ((cljs.core.seq_QMARK_.call(null,map__22511))?cljs.core.apply.call(null,cljs.core.hash_map,map__22511):map__22511);var editing = cljs.core.get.call(null,map__22511__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__22512 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__22512) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__22512,___$1,map__22511,map__22511__$1,editing,map__22506,map__22506__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__22512,___$1,map__22511,map__22511__$1,editing,map__22506,map__22506__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__22506,map__22506__$1,opts,on_edit))
;
hivez.core.t22507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22506,map__22506__$1,opts,on_edit){
return (function (_22509){var self__ = this;
var _22509__$1 = this;return self__.meta22508;
});})(map__22506,map__22506__$1,opts,on_edit))
;
hivez.core.t22507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22506,map__22506__$1,opts,on_edit){
return (function (_22509,meta22508__$1){var self__ = this;
var _22509__$1 = this;return (new hivez.core.t22507(self__.on_edit,self__.opts,self__.map__22506,self__.p__22498,self__.owner,self__.hive,self__.input_control,meta22508__$1));
});})(map__22506,map__22506__$1,opts,on_edit))
;
hivez.core.__GT_t22507 = ((function (map__22506,map__22506__$1,opts,on_edit){
return (function __GT_t22507(on_edit__$1,opts__$1,map__22506__$2,p__22498__$1,owner__$1,hive__$1,input_control__$1,meta22508){return (new hivez.core.t22507(on_edit__$1,opts__$1,map__22506__$2,p__22498__$1,owner__$1,hive__$1,input_control__$1,meta22508));
});})(map__22506,map__22506__$1,opts,on_edit))
;
}
return (new hivez.core.t22507(on_edit,opts,map__22506__$1,p__22498,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__22514){var map__22519 = p__22514;var map__22519__$1 = ((cljs.core.seq_QMARK_.call(null,map__22519))?cljs.core.apply.call(null,cljs.core.hash_map,map__22519):map__22519);var opts = map__22519__$1;var route = cljs.core.get.call(null,map__22519__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t22520 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22520 = (function (route,opts,map__22519,p__22514,owner,data,name_select,meta22521){
this.route = route;
this.opts = opts;
this.map__22519 = map__22519;
this.p__22514 = p__22514;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta22521 = meta22521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22520.cljs$lang$type = true;
hivez.core.t22520.cljs$lang$ctorStr = "hivez.core/t22520";
hivez.core.t22520.cljs$lang$ctorPrWriter = ((function (map__22519,map__22519__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22520");
});})(map__22519,map__22519__$1,opts,route))
;
hivez.core.t22520.prototype.om$core$IRender$ = true;
hivez.core.t22520.prototype.om$core$IRender$render$arity$1 = ((function (map__22519,map__22519__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__22519,map__22519__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__22519,map__22519__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__22519,map__22519__$1,opts,route))
;
hivez.core.t22520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22519,map__22519__$1,opts,route){
return (function (_22522){var self__ = this;
var _22522__$1 = this;return self__.meta22521;
});})(map__22519,map__22519__$1,opts,route))
;
hivez.core.t22520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22519,map__22519__$1,opts,route){
return (function (_22522,meta22521__$1){var self__ = this;
var _22522__$1 = this;return (new hivez.core.t22520(self__.route,self__.opts,self__.map__22519,self__.p__22514,self__.owner,self__.data,self__.name_select,meta22521__$1));
});})(map__22519,map__22519__$1,opts,route))
;
hivez.core.__GT_t22520 = ((function (map__22519,map__22519__$1,opts,route){
return (function __GT_t22520(route__$1,opts__$1,map__22519__$2,p__22514__$1,owner__$1,data__$1,name_select__$1,meta22521){return (new hivez.core.t22520(route__$1,opts__$1,map__22519__$2,p__22514__$1,owner__$1,data__$1,name_select__$1,meta22521));
});})(map__22519,map__22519__$1,opts,route))
;
}
return (new hivez.core.t22520(route,opts,map__22519__$1,p__22514,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t22526 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22526 = (function (owner,places,places_info,meta22527){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta22527 = meta22527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22526.cljs$lang$type = true;
hivez.core.t22526.cljs$lang$ctorStr = "hivez.core/t22526";
hivez.core.t22526.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22526");
});
hivez.core.t22526.prototype.om$core$IRender$ = true;
hivez.core.t22526.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t22526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22528){var self__ = this;
var _22528__$1 = this;return self__.meta22527;
});
hivez.core.t22526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22528,meta22527__$1){var self__ = this;
var _22528__$1 = this;return (new hivez.core.t22526(self__.owner,self__.places,self__.places_info,meta22527__$1));
});
hivez.core.__GT_t22526 = (function __GT_t22526(owner__$1,places__$1,places_info__$1,meta22527){return (new hivez.core.t22526(owner__$1,places__$1,places_info__$1,meta22527));
});
}
return (new hivez.core.t22526(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t22532 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22532 = (function (owner,place,place_info,meta22533){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta22533 = meta22533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22532.cljs$lang$type = true;
hivez.core.t22532.cljs$lang$ctorStr = "hivez.core/t22532";
hivez.core.t22532.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22532");
});
hivez.core.t22532.prototype.om$core$IRender$ = true;
hivez.core.t22532.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t22532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22534){var self__ = this;
var _22534__$1 = this;return self__.meta22533;
});
hivez.core.t22532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22534,meta22533__$1){var self__ = this;
var _22534__$1 = this;return (new hivez.core.t22532(self__.owner,self__.place,self__.place_info,meta22533__$1));
});
hivez.core.__GT_t22532 = (function __GT_t22532(owner__$1,place__$1,place_info__$1,meta22533){return (new hivez.core.t22532(owner__$1,place__$1,place_info__$1,meta22533));
});
}
return (new hivez.core.t22532(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__22535){var map__22540 = p__22535;var map__22540__$1 = ((cljs.core.seq_QMARK_.call(null,map__22540))?cljs.core.apply.call(null,cljs.core.hash_map,map__22540):map__22540);var opts = map__22540__$1;var begin_edit = cljs.core.get.call(null,map__22540__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t22541 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22541 = (function (begin_edit,opts,map__22540,p__22535,owner,hive,hive_info,meta22542){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__22540 = map__22540;
this.p__22535 = p__22535;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta22542 = meta22542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22541.cljs$lang$type = true;
hivez.core.t22541.cljs$lang$ctorStr = "hivez.core/t22541";
hivez.core.t22541.cljs$lang$ctorPrWriter = ((function (map__22540,map__22540__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22541");
});})(map__22540,map__22540__$1,opts,begin_edit))
;
hivez.core.t22541.prototype.om$core$IRender$ = true;
hivez.core.t22541.prototype.om$core$IRender$render$arity$1 = ((function (map__22540,map__22540__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__22540,map__22540__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__22540,map__22540__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__22540,map__22540__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__22540,map__22540__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__22540,map__22540__$1,opts,begin_edit))
;
hivez.core.t22541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22540,map__22540__$1,opts,begin_edit){
return (function (_22543){var self__ = this;
var _22543__$1 = this;return self__.meta22542;
});})(map__22540,map__22540__$1,opts,begin_edit))
;
hivez.core.t22541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22540,map__22540__$1,opts,begin_edit){
return (function (_22543,meta22542__$1){var self__ = this;
var _22543__$1 = this;return (new hivez.core.t22541(self__.begin_edit,self__.opts,self__.map__22540,self__.p__22535,self__.owner,self__.hive,self__.hive_info,meta22542__$1));
});})(map__22540,map__22540__$1,opts,begin_edit))
;
hivez.core.__GT_t22541 = ((function (map__22540,map__22540__$1,opts,begin_edit){
return (function __GT_t22541(begin_edit__$1,opts__$1,map__22540__$2,p__22535__$1,owner__$1,hive__$1,hive_info__$1,meta22542){return (new hivez.core.t22541(begin_edit__$1,opts__$1,map__22540__$2,p__22535__$1,owner__$1,hive__$1,hive_info__$1,meta22542));
});})(map__22540,map__22540__$1,opts,begin_edit))
;
}
return (new hivez.core.t22541(begin_edit,opts,map__22540__$1,p__22535,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__22545){var map__22552 = p__22545;var map__22552__$1 = ((cljs.core.seq_QMARK_.call(null,map__22552))?cljs.core.apply.call(null,cljs.core.hash_map,map__22552):map__22552);var opts = map__22552__$1;var toggle_open = cljs.core.get.call(null,map__22552__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t22553 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22553 = (function (toggle_open,opts,map__22552,p__22545,owner,data,navicon,meta22554){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__22552 = map__22552;
this.p__22545 = p__22545;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta22554 = meta22554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22553.cljs$lang$type = true;
hivez.core.t22553.cljs$lang$ctorStr = "hivez.core/t22553";
hivez.core.t22553.cljs$lang$ctorPrWriter = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22553");
});})(map__22552,map__22552__$1,opts,toggle_open))
;
hivez.core.t22553.prototype.om$core$IRenderState$ = true;
hivez.core.t22553.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function (_,p__22556){var self__ = this;
var map__22557 = p__22556;var map__22557__$1 = ((cljs.core.seq_QMARK_.call(null,map__22557))?cljs.core.apply.call(null,cljs.core.hash_map,map__22557):map__22557);var editing = cljs.core.get.call(null,map__22557__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__22557__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__22557,map__22557__$1,editing,active,map__22552,map__22552__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__22557,map__22557__$1,editing,active,map__22552,map__22552__$1,opts,toggle_open){
return (function (p1__22544_SHARP_){return cljs.core.not.call(null,p1__22544_SHARP_);
});})(___$1,map__22557,map__22557__$1,editing,active,map__22552,map__22552__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__22557,map__22557__$1,editing,active,map__22552,map__22552__$1,opts,toggle_open))
, "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null))), "style": hivez.core.display_fade_in.call(null,(editing == null))});
});})(map__22552,map__22552__$1,opts,toggle_open))
;
hivez.core.t22553.prototype.om$core$IInitState$ = true;
hivez.core.t22553.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__22552,map__22552__$1,opts,toggle_open))
;
hivez.core.t22553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function (_22555){var self__ = this;
var _22555__$1 = this;return self__.meta22554;
});})(map__22552,map__22552__$1,opts,toggle_open))
;
hivez.core.t22553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function (_22555,meta22554__$1){var self__ = this;
var _22555__$1 = this;return (new hivez.core.t22553(self__.toggle_open,self__.opts,self__.map__22552,self__.p__22545,self__.owner,self__.data,self__.navicon,meta22554__$1));
});})(map__22552,map__22552__$1,opts,toggle_open))
;
hivez.core.__GT_t22553 = ((function (map__22552,map__22552__$1,opts,toggle_open){
return (function __GT_t22553(toggle_open__$1,opts__$1,map__22552__$2,p__22545__$1,owner__$1,data__$1,navicon__$1,meta22554){return (new hivez.core.t22553(toggle_open__$1,opts__$1,map__22552__$2,p__22545__$1,owner__$1,data__$1,navicon__$1,meta22554));
});})(map__22552,map__22552__$1,opts,toggle_open))
;
}
return (new hivez.core.t22553(toggle_open,opts,map__22552__$1,p__22545,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,opts){if(typeof hivez.core.t22563 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22563 = (function (opts,owner,data,control_panel,meta22564){
this.opts = opts;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta22564 = meta22564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22563.cljs$lang$type = true;
hivez.core.t22563.cljs$lang$ctorStr = "hivez.core/t22563";
hivez.core.t22563.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22563");
});
hivez.core.t22563.prototype.om$core$IRenderState$ = true;
hivez.core.t22563.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22566){var self__ = this;
var map__22567 = p__22566;var map__22567__$1 = ((cljs.core.seq_QMARK_.call(null,map__22567))?cljs.core.apply.call(null,cljs.core.hash_map,map__22567):map__22567);var editing = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"className": "control-panel"},om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});
hivez.core.t22563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22565){var self__ = this;
var _22565__$1 = this;return self__.meta22564;
});
hivez.core.t22563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22565,meta22564__$1){var self__ = this;
var _22565__$1 = this;return (new hivez.core.t22563(self__.opts,self__.owner,self__.data,self__.control_panel,meta22564__$1));
});
hivez.core.__GT_t22563 = (function __GT_t22563(opts__$1,owner__$1,data__$1,control_panel__$1,meta22564){return (new hivez.core.t22563(opts__$1,owner__$1,data__$1,control_panel__$1,meta22564));
});
}
return (new hivez.core.t22563(opts,owner,data,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t22624 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22624 = (function (owner,data,drawer,meta22625){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta22625 = meta22625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22624.cljs$lang$type = true;
hivez.core.t22624.cljs$lang$ctorStr = "hivez.core/t22624";
hivez.core.t22624.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22624");
});
hivez.core.t22624.prototype.om$core$IRenderState$ = true;
hivez.core.t22624.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22627){var self__ = this;
var map__22628 = p__22627;var map__22628__$1 = ((cljs.core.seq_QMARK_.call(null,map__22628))?cljs.core.apply.call(null,cljs.core.hash_map,map__22628):map__22628);var child_opts = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"child","child",623967545));var nav_chan = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__22628,map__22628__$1,child_opts,child_ks,child,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__22628,map__22628__$1,child_opts,child_ks,child,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts)));
});
hivez.core.t22624.prototype.om$core$IWillMount$ = true;
hivez.core.t22624.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_22659){var state_val_22660 = (state_22659[(1)]);if((state_val_22660 === (8)))
{var inst_22632 = (state_22659[(7)]);var inst_22639 = cljs.core.second.call(null,inst_22632);var inst_22640 = cljs.core.last.call(null,inst_22639);var inst_22641 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_22640);var inst_22642 = cljs.core.second.call(null,inst_22632);var inst_22643 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_22644 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_22645 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_22646 = [inst_22645];var inst_22647 = cljs.core.PersistentHashMap.fromArrays(inst_22644,inst_22646);var inst_22648 = [inst_22647];var inst_22649 = cljs.core.PersistentHashMap.fromArrays(inst_22643,inst_22648);var inst_22650 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_22642,inst_22649);var state_22659__$1 = (function (){var statearr_22661 = state_22659;(statearr_22661[(8)] = inst_22641);
return statearr_22661;
})();var statearr_22662_22680 = state_22659__$1;(statearr_22662_22680[(2)] = inst_22650);
(statearr_22662_22680[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22660 === (7)))
{var inst_22632 = (state_22659[(7)]);var inst_22636 = cljs.core.second.call(null,inst_22632);var inst_22637 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_22636);var state_22659__$1 = state_22659;var statearr_22663_22681 = state_22659__$1;(statearr_22663_22681[(2)] = inst_22637);
(statearr_22663_22681[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22660 === (6)))
{var inst_22632 = (state_22659[(7)]);var inst_22633 = cljs.core.second.call(null,inst_22632);var inst_22634 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_22633);var state_22659__$1 = state_22659;var statearr_22664_22682 = state_22659__$1;(statearr_22664_22682[(2)] = inst_22634);
(statearr_22664_22682[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22660 === (5)))
{var inst_22654 = (state_22659[(2)]);var state_22659__$1 = (function (){var statearr_22665 = state_22659;(statearr_22665[(9)] = inst_22654);
return statearr_22665;
})();var statearr_22666_22683 = state_22659__$1;(statearr_22666_22683[(2)] = null);
(statearr_22666_22683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22660 === (4)))
{var inst_22632 = (state_22659[(7)]);var inst_22632__$1 = (state_22659[(2)]);var inst_22652 = cljs.core.first.call(null,inst_22632__$1);var state_22659__$1 = (function (){var statearr_22667 = state_22659;(statearr_22667[(7)] = inst_22632__$1);
return statearr_22667;
})();var G__22668_22684 = inst_22652;switch (G__22668_22684) {
case "places":
var statearr_22669_22686 = state_22659__$1;(statearr_22669_22686[(1)] = (6));

break;
case "place":
var statearr_22670_22687 = state_22659__$1;(statearr_22670_22687[(1)] = (7));

break;
case "hive":
var statearr_22671_22688 = state_22659__$1;(statearr_22671_22688[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22652))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22660 === (3)))
{var inst_22657 = (state_22659[(2)]);var state_22659__$1 = state_22659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22659__$1,inst_22657);
} else
{if((state_val_22660 === (2)))
{var inst_22630 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_22659__$1 = state_22659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22659__$1,(4),inst_22630);
} else
{if((state_val_22660 === (1)))
{var state_22659__$1 = state_22659;var statearr_22672_22689 = state_22659__$1;(statearr_22672_22689[(2)] = null);
(statearr_22672_22689[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_22676 = [null,null,null,null,null,null,null,null,null,null];(statearr_22676[(0)] = state_machine__15073__auto__);
(statearr_22676[(1)] = (1));
return statearr_22676;
});
var state_machine__15073__auto____1 = (function (state_22659){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22659);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22677){if((e22677 instanceof Object))
{var ex__15076__auto__ = e22677;var statearr_22678_22690 = state_22659;(statearr_22678_22690[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22691 = state_22659;
state_22659 = G__22691;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22659){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_22679 = f__15088__auto__.call(null);(statearr_22679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_22679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t22624.prototype.om$core$IInitState$ = true;
hivez.core.t22624.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t22624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22626){var self__ = this;
var _22626__$1 = this;return self__.meta22625;
});
hivez.core.t22624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22626,meta22625__$1){var self__ = this;
var _22626__$1 = this;return (new hivez.core.t22624(self__.owner,self__.data,self__.drawer,meta22625__$1));
});
hivez.core.__GT_t22624 = (function __GT_t22624(owner__$1,data__$1,drawer__$1,meta22625){return (new hivez.core.t22624(owner__$1,data__$1,drawer__$1,meta22625));
});
}
return (new hivez.core.t22624(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t22695 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22695 = (function (owner,data,app,meta22696){
this.owner = owner;
this.data = data;
this.app = app;
this.meta22696 = meta22696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22695.cljs$lang$type = true;
hivez.core.t22695.cljs$lang$ctorStr = "hivez.core/t22695";
hivez.core.t22695.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22695");
});
hivez.core.t22695.prototype.om$core$IRender$ = true;
hivez.core.t22695.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t22695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22697){var self__ = this;
var _22697__$1 = this;return self__.meta22696;
});
hivez.core.t22695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22697,meta22696__$1){var self__ = this;
var _22697__$1 = this;return (new hivez.core.t22695(self__.owner,self__.data,self__.app,meta22696__$1));
});
hivez.core.__GT_t22695 = (function __GT_t22695(owner__$1,data__$1,app__$1,meta22696){return (new hivez.core.t22695(owner__$1,data__$1,app__$1,meta22696));
});
}
return (new hivez.core.t22695(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map