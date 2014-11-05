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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__53995_SHARP_){return cljs.core.assoc.call(null,p1__53995_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__53996){
var args = cljs.core.seq(arglist__53996);
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
return (function (p1__53997_SHARP_){return cljs.core.assoc_in.call(null,p1__53997_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__53998_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__53998_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive){
return (function (p1__53999_SHARP_){return cljs.core.assoc.call(null,p1__53999_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(data,key){return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),(function (p1__54000_SHARP_){if(cljs.core._EQ_.call(null,key,p1__54000_SHARP_))
{return null;
} else
{return key;
}
}));
});
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_54003 = key.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive_54003){
return (function (p1__54001_SHARP_){return cljs.core.dissoc.call(null,p1__54001_SHARP_,key);
});})(hive_54003))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_54003,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
} else
{om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (p1__54002_SHARP_){return cljs.core.dissoc.call(null,p1__54002_SHARP_,key);
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
hivez.core.input = (function input(hive,owner,p__54004){var map__54011 = p__54004;var map__54011__$1 = ((cljs.core.seq_QMARK_.call(null,map__54011))?cljs.core.apply.call(null,cljs.core.hash_map,map__54011):map__54011);var opts = map__54011__$1;var on_key_down = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t54012 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54012 = (function (input,on_key_down,owner,hive,edit_key,map__54011,className,on_edit,id,opts,p__54004,meta54013){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.map__54011 = map__54011;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.p__54004 = p__54004;
this.meta54013 = meta54013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54012.cljs$lang$type = true;
hivez.core.t54012.cljs$lang$ctorStr = "hivez.core/t54012";
hivez.core.t54012.cljs$lang$ctorPrWriter = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54012");
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t54012.prototype.om$core$IRenderState$ = true;
hivez.core.t54012.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__54015){var self__ = this;
var map__54016 = p__54015;var map__54016__$1 = ((cljs.core.seq_QMARK_.call(null,map__54016))?cljs.core.apply.call(null,cljs.core.hash_map,map__54016):map__54016);var exit_type = cljs.core.get.call(null,map__54016__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__54016,map__54016__$1,exit_type,map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t54012.prototype.om$core$IDidMount$ = true;
hivez.core.t54012.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t54012.prototype.om$core$IInitState$ = true;
hivez.core.t54012.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t54012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_54014){var self__ = this;
var _54014__$1 = this;return self__.meta54013;
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t54012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_54014,meta54013__$1){var self__ = this;
var _54014__$1 = this;return (new hivez.core.t54012(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.map__54011,self__.className,self__.on_edit,self__.id,self__.opts,self__.p__54004,meta54013__$1));
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t54012 = ((function (map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t54012(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,map__54011__$2,className__$1,on_edit__$1,id__$1,opts__$1,p__54004__$1,meta54013){return (new hivez.core.t54012(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,map__54011__$2,className__$1,on_edit__$1,id__$1,opts__$1,p__54004__$1,meta54013));
});})(map__54011,map__54011__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t54012(input,on_key_down,owner,hive,edit_key,map__54011__$1,className,on_edit,id,opts,p__54004,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__54017){var map__54025 = p__54017;var map__54025__$1 = ((cljs.core.seq_QMARK_.call(null,map__54025))?cljs.core.apply.call(null,cljs.core.hash_map,map__54025):map__54025);var opts = map__54025__$1;var on_edit = cljs.core.get.call(null,map__54025__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t54026 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54026 = (function (on_edit,opts,map__54025,p__54017,owner,hive,input_control,meta54027){
this.on_edit = on_edit;
this.opts = opts;
this.map__54025 = map__54025;
this.p__54017 = p__54017;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta54027 = meta54027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54026.cljs$lang$type = true;
hivez.core.t54026.cljs$lang$ctorStr = "hivez.core/t54026";
hivez.core.t54026.cljs$lang$ctorPrWriter = ((function (map__54025,map__54025__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54026");
});})(map__54025,map__54025__$1,opts,on_edit))
;
hivez.core.t54026.prototype.om$core$IRenderState$ = true;
hivez.core.t54026.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__54025,map__54025__$1,opts,on_edit){
return (function (_,p__54029){var self__ = this;
var map__54030 = p__54029;var map__54030__$1 = ((cljs.core.seq_QMARK_.call(null,map__54030))?cljs.core.apply.call(null,cljs.core.hash_map,map__54030):map__54030);var editing = cljs.core.get.call(null,map__54030__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__54031 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__54031) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__54031,___$1,map__54030,map__54030__$1,editing,map__54025,map__54025__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__54031,___$1,map__54030,map__54030__$1,editing,map__54025,map__54025__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__54025,map__54025__$1,opts,on_edit))
;
hivez.core.t54026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54025,map__54025__$1,opts,on_edit){
return (function (_54028){var self__ = this;
var _54028__$1 = this;return self__.meta54027;
});})(map__54025,map__54025__$1,opts,on_edit))
;
hivez.core.t54026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54025,map__54025__$1,opts,on_edit){
return (function (_54028,meta54027__$1){var self__ = this;
var _54028__$1 = this;return (new hivez.core.t54026(self__.on_edit,self__.opts,self__.map__54025,self__.p__54017,self__.owner,self__.hive,self__.input_control,meta54027__$1));
});})(map__54025,map__54025__$1,opts,on_edit))
;
hivez.core.__GT_t54026 = ((function (map__54025,map__54025__$1,opts,on_edit){
return (function __GT_t54026(on_edit__$1,opts__$1,map__54025__$2,p__54017__$1,owner__$1,hive__$1,input_control__$1,meta54027){return (new hivez.core.t54026(on_edit__$1,opts__$1,map__54025__$2,p__54017__$1,owner__$1,hive__$1,input_control__$1,meta54027));
});})(map__54025,map__54025__$1,opts,on_edit))
;
}
return (new hivez.core.t54026(on_edit,opts,map__54025__$1,p__54017,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__54033){var map__54038 = p__54033;var map__54038__$1 = ((cljs.core.seq_QMARK_.call(null,map__54038))?cljs.core.apply.call(null,cljs.core.hash_map,map__54038):map__54038);var opts = map__54038__$1;var begin_edit = cljs.core.get.call(null,map__54038__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t54039 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54039 = (function (begin_edit,opts,map__54038,p__54033,owner,hive,hive_info,meta54040){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__54038 = map__54038;
this.p__54033 = p__54033;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta54040 = meta54040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54039.cljs$lang$type = true;
hivez.core.t54039.cljs$lang$ctorStr = "hivez.core/t54039";
hivez.core.t54039.cljs$lang$ctorPrWriter = ((function (map__54038,map__54038__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54039");
});})(map__54038,map__54038__$1,opts,begin_edit))
;
hivez.core.t54039.prototype.om$core$IRender$ = true;
hivez.core.t54039.prototype.om$core$IRender$render$arity$1 = ((function (map__54038,map__54038__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__54038,map__54038__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__54038,map__54038__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__54038,map__54038__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__54038,map__54038__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__54038,map__54038__$1,opts,begin_edit))
;
hivez.core.t54039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54038,map__54038__$1,opts,begin_edit){
return (function (_54041){var self__ = this;
var _54041__$1 = this;return self__.meta54040;
});})(map__54038,map__54038__$1,opts,begin_edit))
;
hivez.core.t54039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54038,map__54038__$1,opts,begin_edit){
return (function (_54041,meta54040__$1){var self__ = this;
var _54041__$1 = this;return (new hivez.core.t54039(self__.begin_edit,self__.opts,self__.map__54038,self__.p__54033,self__.owner,self__.hive,self__.hive_info,meta54040__$1));
});})(map__54038,map__54038__$1,opts,begin_edit))
;
hivez.core.__GT_t54039 = ((function (map__54038,map__54038__$1,opts,begin_edit){
return (function __GT_t54039(begin_edit__$1,opts__$1,map__54038__$2,p__54033__$1,owner__$1,hive__$1,hive_info__$1,meta54040){return (new hivez.core.t54039(begin_edit__$1,opts__$1,map__54038__$2,p__54033__$1,owner__$1,hive__$1,hive_info__$1,meta54040));
});})(map__54038,map__54038__$1,opts,begin_edit))
;
}
return (new hivez.core.t54039(begin_edit,opts,map__54038__$1,p__54033,owner,hive,hive_info,null));
});
hivez.core.name_select = (function name_select(data,owner,p__54042){var map__54047 = p__54042;var map__54047__$1 = ((cljs.core.seq_QMARK_.call(null,map__54047))?cljs.core.apply.call(null,cljs.core.hash_map,map__54047):map__54047);var opts = map__54047__$1;var route = cljs.core.get.call(null,map__54047__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t54048 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54048 = (function (route,opts,map__54047,p__54042,owner,data,name_select,meta54049){
this.route = route;
this.opts = opts;
this.map__54047 = map__54047;
this.p__54042 = p__54042;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta54049 = meta54049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54048.cljs$lang$type = true;
hivez.core.t54048.cljs$lang$ctorStr = "hivez.core/t54048";
hivez.core.t54048.cljs$lang$ctorPrWriter = ((function (map__54047,map__54047__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54048");
});})(map__54047,map__54047__$1,opts,route))
;
hivez.core.t54048.prototype.om$core$IRender$ = true;
hivez.core.t54048.prototype.om$core$IRender$render$arity$1 = ((function (map__54047,map__54047__$1,opts,route){
return (function (this__14153__auto__){var self__ = this;
var this__14153__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14153__auto____$1,map__54047,map__54047__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,self__.data], null));
});})(this__14153__auto____$1,map__54047,map__54047__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__54047,map__54047__$1,opts,route))
;
hivez.core.t54048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54047,map__54047__$1,opts,route){
return (function (_54050){var self__ = this;
var _54050__$1 = this;return self__.meta54049;
});})(map__54047,map__54047__$1,opts,route))
;
hivez.core.t54048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54047,map__54047__$1,opts,route){
return (function (_54050,meta54049__$1){var self__ = this;
var _54050__$1 = this;return (new hivez.core.t54048(self__.route,self__.opts,self__.map__54047,self__.p__54042,self__.owner,self__.data,self__.name_select,meta54049__$1));
});})(map__54047,map__54047__$1,opts,route))
;
hivez.core.__GT_t54048 = ((function (map__54047,map__54047__$1,opts,route){
return (function __GT_t54048(route__$1,opts__$1,map__54047__$2,p__54042__$1,owner__$1,data__$1,name_select__$1,meta54049){return (new hivez.core.t54048(route__$1,opts__$1,map__54047__$2,p__54042__$1,owner__$1,data__$1,name_select__$1,meta54049));
});})(map__54047,map__54047__$1,opts,route))
;
}
return (new hivez.core.t54048(route,opts,map__54047__$1,p__54042,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t54054 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54054 = (function (owner,places,places_info,meta54055){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta54055 = meta54055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54054.cljs$lang$type = true;
hivez.core.t54054.cljs$lang$ctorStr = "hivez.core/t54054";
hivez.core.t54054.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54054");
});
hivez.core.t54054.prototype.om$core$IRender$ = true;
hivez.core.t54054.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t54054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54056){var self__ = this;
var _54056__$1 = this;return self__.meta54055;
});
hivez.core.t54054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54056,meta54055__$1){var self__ = this;
var _54056__$1 = this;return (new hivez.core.t54054(self__.owner,self__.places,self__.places_info,meta54055__$1));
});
hivez.core.__GT_t54054 = (function __GT_t54054(owner__$1,places__$1,places_info__$1,meta54055){return (new hivez.core.t54054(owner__$1,places__$1,places_info__$1,meta54055));
});
}
return (new hivez.core.t54054(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t54060 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54060 = (function (owner,place,place_info,meta54061){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta54061 = meta54061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54060.cljs$lang$type = true;
hivez.core.t54060.cljs$lang$ctorStr = "hivez.core/t54060";
hivez.core.t54060.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54060");
});
hivez.core.t54060.prototype.om$core$IRender$ = true;
hivez.core.t54060.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t54060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54062){var self__ = this;
var _54062__$1 = this;return self__.meta54061;
});
hivez.core.t54060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54062,meta54061__$1){var self__ = this;
var _54062__$1 = this;return (new hivez.core.t54060(self__.owner,self__.place,self__.place_info,meta54061__$1));
});
hivez.core.__GT_t54060 = (function __GT_t54060(owner__$1,place__$1,place_info__$1,meta54061){return (new hivez.core.t54060(owner__$1,place__$1,place_info__$1,meta54061));
});
}
return (new hivez.core.t54060(owner,place,place_info,null));
});
hivez.core.root = (function root(root_id,owner,comp,data,opts){return om.core.root.call(null,comp,data,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(root_id),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250))], null)], null),opts));
});
hivez.core.navicon = (function navicon(data,owner,p__54064){var map__54071 = p__54064;var map__54071__$1 = ((cljs.core.seq_QMARK_.call(null,map__54071))?cljs.core.apply.call(null,cljs.core.hash_map,map__54071):map__54071);var opts = map__54071__$1;var route_chan = cljs.core.get.call(null,map__54071__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));if(typeof hivez.core.t54072 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54072 = (function (route_chan,opts,map__54071,p__54064,owner,data,navicon,meta54073){
this.route_chan = route_chan;
this.opts = opts;
this.map__54071 = map__54071;
this.p__54064 = p__54064;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta54073 = meta54073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54072.cljs$lang$type = true;
hivez.core.t54072.cljs$lang$ctorStr = "hivez.core/t54072";
hivez.core.t54072.cljs$lang$ctorPrWriter = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54072");
});})(map__54071,map__54071__$1,opts,route_chan))
;
hivez.core.t54072.prototype.om$core$IRenderState$ = true;
hivez.core.t54072.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function (_,p__54075){var self__ = this;
var map__54076 = p__54075;var map__54076__$1 = ((cljs.core.seq_QMARK_.call(null,map__54076))?cljs.core.apply.call(null,cljs.core.hash_map,map__54076):map__54076);var editing = cljs.core.get.call(null,map__54076__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__54076__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__54076,map__54076__$1,editing,active,map__54071,map__54071__$1,opts,route_chan){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__54076,map__54076__$1,editing,active,map__54071,map__54071__$1,opts,route_chan){
return (function (p1__54063_SHARP_){return cljs.core.not.call(null,p1__54063_SHARP_);
});})(___$1,map__54076,map__54076__$1,editing,active,map__54071,map__54071__$1,opts,route_chan))
);
return cljs.core.async.put_BANG_.call(null,self__.route_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["open"], null));
});})(___$1,map__54076,map__54076__$1,editing,active,map__54071,map__54071__$1,opts,route_chan))
, "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null))), "style": hivez.core.display.call(null,(editing == null))});
});})(map__54071,map__54071__$1,opts,route_chan))
;
hivez.core.t54072.prototype.om$core$IInitState$ = true;
hivez.core.t54072.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__54071,map__54071__$1,opts,route_chan))
;
hivez.core.t54072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function (_54074){var self__ = this;
var _54074__$1 = this;return self__.meta54073;
});})(map__54071,map__54071__$1,opts,route_chan))
;
hivez.core.t54072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function (_54074,meta54073__$1){var self__ = this;
var _54074__$1 = this;return (new hivez.core.t54072(self__.route_chan,self__.opts,self__.map__54071,self__.p__54064,self__.owner,self__.data,self__.navicon,meta54073__$1));
});})(map__54071,map__54071__$1,opts,route_chan))
;
hivez.core.__GT_t54072 = ((function (map__54071,map__54071__$1,opts,route_chan){
return (function __GT_t54072(route_chan__$1,opts__$1,map__54071__$2,p__54064__$1,owner__$1,data__$1,navicon__$1,meta54073){return (new hivez.core.t54072(route_chan__$1,opts__$1,map__54071__$2,p__54064__$1,owner__$1,data__$1,navicon__$1,meta54073));
});})(map__54071,map__54071__$1,opts,route_chan))
;
}
return (new hivez.core.t54072(route_chan,opts,map__54071__$1,p__54064,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(data,owner,p__54077){var map__54084 = p__54077;var map__54084__$1 = ((cljs.core.seq_QMARK_.call(null,map__54084))?cljs.core.apply.call(null,cljs.core.hash_map,map__54084):map__54084);var opts = map__54084__$1;var route_chan = cljs.core.get.call(null,map__54084__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));if(typeof hivez.core.t54085 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54085 = (function (route_chan,opts,map__54084,p__54077,owner,data,control_panel,meta54086){
this.route_chan = route_chan;
this.opts = opts;
this.map__54084 = map__54084;
this.p__54077 = p__54077;
this.owner = owner;
this.data = data;
this.control_panel = control_panel;
this.meta54086 = meta54086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54085.cljs$lang$type = true;
hivez.core.t54085.cljs$lang$ctorStr = "hivez.core/t54085";
hivez.core.t54085.cljs$lang$ctorPrWriter = ((function (map__54084,map__54084__$1,opts,route_chan){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54085");
});})(map__54084,map__54084__$1,opts,route_chan))
;
hivez.core.t54085.prototype.om$core$IRenderState$ = true;
hivez.core.t54085.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__54084,map__54084__$1,opts,route_chan){
return (function (_,p__54088){var self__ = this;
var map__54089 = p__54088;var map__54089__$1 = ((cljs.core.seq_QMARK_.call(null,map__54089))?cljs.core.apply.call(null,cljs.core.hash_map,map__54089):map__54089);var editing = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"className": "control-panel"},om.core.build.call(null,hivez.core.navicon,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(map__54084,map__54084__$1,opts,route_chan))
;
hivez.core.t54085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54084,map__54084__$1,opts,route_chan){
return (function (_54087){var self__ = this;
var _54087__$1 = this;return self__.meta54086;
});})(map__54084,map__54084__$1,opts,route_chan))
;
hivez.core.t54085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54084,map__54084__$1,opts,route_chan){
return (function (_54087,meta54086__$1){var self__ = this;
var _54087__$1 = this;return (new hivez.core.t54085(self__.route_chan,self__.opts,self__.map__54084,self__.p__54077,self__.owner,self__.data,self__.control_panel,meta54086__$1));
});})(map__54084,map__54084__$1,opts,route_chan))
;
hivez.core.__GT_t54085 = ((function (map__54084,map__54084__$1,opts,route_chan){
return (function __GT_t54085(route_chan__$1,opts__$1,map__54084__$2,p__54077__$1,owner__$1,data__$1,control_panel__$1,meta54086){return (new hivez.core.t54085(route_chan__$1,opts__$1,map__54084__$2,p__54077__$1,owner__$1,data__$1,control_panel__$1,meta54086));
});})(map__54084,map__54084__$1,opts,route_chan))
;
}
return (new hivez.core.t54085(route_chan,opts,map__54084__$1,p__54077,owner,data,control_panel,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t54158 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54158 = (function (owner,data,drawer,meta54159){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta54159 = meta54159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54158.cljs$lang$type = true;
hivez.core.t54158.cljs$lang$ctorStr = "hivez.core/t54158";
hivez.core.t54158.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54158");
});
hivez.core.t54158.prototype.om$core$IRenderState$ = true;
hivez.core.t54158.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__54161){var self__ = this;
var map__54162 = p__54161;var map__54162__$1 = ((cljs.core.seq_QMARK_.call(null,map__54162))?cljs.core.apply.call(null,cljs.core.hash_map,map__54162):map__54162);var route_chan = cljs.core.get.call(null,map__54162__$1,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));var editing = cljs.core.get.call(null,map__54162__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__54162__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;cljs.core.println.call(null,editing);
cljs.core.println.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data));
return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),route_chan], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__54162,map__54162__$1,route_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__54162,map__54162__$1,route_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"}));
});
hivez.core.t54158.prototype.om$core$IDidMount$ = true;
hivez.core.t54158.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["places"], null));
});
hivez.core.t54158.prototype.om$core$IWillMount$ = true;
hivez.core.t54158.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,___$1){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,___$1){
return (function (state_54202){var state_val_54203 = (state_54202[(1)]);if((state_val_54203 === (9)))
{var inst_54167 = (state_54202[(7)]);var inst_54166 = (state_54202[(8)]);var inst_54180 = cljs.core.second.call(null,inst_54166);var inst_54181 = cljs.core.deref.call(null,inst_54180);var inst_54182 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_54181);var inst_54183 = cljs.core.keyword.call(null,inst_54182);var inst_54184 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_54183);var inst_54185 = cljs.core.second.call(null,inst_54166);var inst_54186 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_54187 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_54188 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_54189 = [inst_54188];var inst_54190 = cljs.core.PersistentHashMap.fromArrays(inst_54187,inst_54189);var inst_54191 = [inst_54190];var inst_54192 = cljs.core.PersistentHashMap.fromArrays(inst_54186,inst_54191);var inst_54193 = inst_54167.call(null,hivez.core.hive_info,inst_54185,inst_54192);var state_54202__$1 = (function (){var statearr_54204 = state_54202;(statearr_54204[(9)] = inst_54184);
return statearr_54204;
})();var statearr_54205_54225 = state_54202__$1;(statearr_54205_54225[(2)] = inst_54193);
(statearr_54205_54225[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (8)))
{var inst_54167 = (state_54202[(7)]);var inst_54166 = (state_54202[(8)]);var inst_54176 = cljs.core.second.call(null,inst_54166);var inst_54177 = cljs.core.PersistentHashMap.EMPTY;var inst_54178 = inst_54167.call(null,hivez.core.place_info,inst_54176,inst_54177);var state_54202__$1 = state_54202;var statearr_54206_54226 = state_54202__$1;(statearr_54206_54226[(2)] = inst_54178);
(statearr_54206_54226[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (7)))
{var inst_54167 = (state_54202[(7)]);var inst_54171 = cljs.core.deref.call(null,self__.data);var inst_54172 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(inst_54171);var inst_54173 = cljs.core.PersistentHashMap.EMPTY;var inst_54174 = inst_54167.call(null,hivez.core.places_info,inst_54172,inst_54173);var state_54202__$1 = state_54202;var statearr_54207_54227 = state_54202__$1;(statearr_54207_54227[(2)] = inst_54174);
(statearr_54207_54227[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (6)))
{var inst_54167 = (state_54202[(7)]);var inst_54166 = (state_54202[(8)]);var inst_54168 = (function (){var route_BANG_ = inst_54167;var route = inst_54166;return ((function (route_BANG_,route,inst_54167,inst_54166,state_val_54203,c__15086__auto__,___$1){
return (function (p1__54090_SHARP_){return cljs.core.not.call(null,p1__54090_SHARP_);
});
;})(route_BANG_,route,inst_54167,inst_54166,state_val_54203,c__15086__auto__,___$1))
})();var inst_54169 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),inst_54168);var state_54202__$1 = state_54202;var statearr_54208_54228 = state_54202__$1;(statearr_54208_54228[(2)] = inst_54169);
(statearr_54208_54228[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (5)))
{var inst_54197 = (state_54202[(2)]);var state_54202__$1 = (function (){var statearr_54209 = state_54202;(statearr_54209[(10)] = inst_54197);
return statearr_54209;
})();var statearr_54210_54229 = state_54202__$1;(statearr_54210_54229[(2)] = null);
(statearr_54210_54229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (4)))
{var inst_54166 = (state_54202[(8)]);var inst_54166__$1 = (state_54202[(2)]);var inst_54167 = cljs.core.partial.call(null,hivez.core.root,"drawer",self__.owner);var inst_54195 = cljs.core.first.call(null,inst_54166__$1);var state_54202__$1 = (function (){var statearr_54211 = state_54202;(statearr_54211[(7)] = inst_54167);
(statearr_54211[(8)] = inst_54166__$1);
return statearr_54211;
})();var G__54212_54230 = inst_54195;switch (G__54212_54230) {
case "open":
var statearr_54213_54232 = state_54202__$1;(statearr_54213_54232[(1)] = (6));

break;
case "places":
var statearr_54214_54233 = state_54202__$1;(statearr_54214_54233[(1)] = (7));

break;
case "place":
var statearr_54215_54234 = state_54202__$1;(statearr_54215_54234[(1)] = (8));

break;
case "hive":
var statearr_54216_54235 = state_54202__$1;(statearr_54216_54235[(1)] = (9));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54195))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54203 === (3)))
{var inst_54200 = (state_54202[(2)]);var state_54202__$1 = state_54202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54202__$1,inst_54200);
} else
{if((state_val_54203 === (2)))
{var inst_54164 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));var state_54202__$1 = state_54202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54202__$1,(4),inst_54164);
} else
{if((state_val_54203 === (1)))
{var state_54202__$1 = state_54202;var statearr_54217_54236 = state_54202__$1;(statearr_54217_54236[(2)] = null);
(statearr_54217_54236[(1)] = (2));
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
var state_machine__15072__auto____0 = (function (){var statearr_54221 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54221[(0)] = state_machine__15072__auto__);
(statearr_54221[(1)] = (1));
return statearr_54221;
});
var state_machine__15072__auto____1 = (function (state_54202){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_54202);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e54222){if((e54222 instanceof Object))
{var ex__15075__auto__ = e54222;var statearr_54223_54237 = state_54202;(statearr_54223_54237[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54238 = state_54202;
state_54202 = G__54238;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_54202){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_54202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,___$1))
})();var state__15088__auto__ = (function (){var statearr_54224 = f__15087__auto__.call(null);(statearr_54224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_54224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,___$1))
);
return c__15086__auto__;
});
hivez.core.t54158.prototype.om$core$IInitState$ = true;
hivez.core.t54158.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),cljs.core.async.chan.call(null)], null);
});
hivez.core.t54158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54160){var self__ = this;
var _54160__$1 = this;return self__.meta54159;
});
hivez.core.t54158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54160,meta54159__$1){var self__ = this;
var _54160__$1 = this;return (new hivez.core.t54158(self__.owner,self__.data,self__.drawer,meta54159__$1));
});
hivez.core.__GT_t54158 = (function __GT_t54158(owner__$1,data__$1,drawer__$1,meta54159){return (new hivez.core.t54158(owner__$1,data__$1,drawer__$1,meta54159));
});
}
return (new hivez.core.t54158(owner,data,drawer,null));
});
hivez.core.to_save = (function to_save(){om.core.build.call(null,hivez.core.places_info,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(hivez.core.data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data)))
{return om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(hivez.core.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,hivez.core.owner)], null)], null));
} else
{return null;
}
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t54242 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t54242 = (function (owner,data,app,meta54243){
this.owner = owner;
this.data = data;
this.app = app;
this.meta54243 = meta54243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t54242.cljs$lang$type = true;
hivez.core.t54242.cljs$lang$ctorStr = "hivez.core/t54242";
hivez.core.t54242.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t54242");
});
hivez.core.t54242.prototype.om$core$IRender$ = true;
hivez.core.t54242.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t54242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54244){var self__ = this;
var _54244__$1 = this;return self__.meta54243;
});
hivez.core.t54242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54244,meta54243__$1){var self__ = this;
var _54244__$1 = this;return (new hivez.core.t54242(self__.owner,self__.data,self__.app,meta54243__$1));
});
hivez.core.__GT_t54242 = (function __GT_t54242(owner__$1,data__$1,app__$1,meta54243){return (new hivez.core.t54242(owner__$1,data__$1,app__$1,meta54243));
});
}
return (new hivez.core.t54242(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map