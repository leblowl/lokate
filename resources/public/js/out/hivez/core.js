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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__41733_SHARP_){return cljs.core.assoc.call(null,p1__41733_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__41734){
var args = cljs.core.seq(arglist__41734);
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
return (function (p1__41735_SHARP_){return cljs.core.assoc_in.call(null,p1__41735_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__41736_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__41736_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.add_hive = (function add_hive(data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive){
return (function (p1__41737_SHARP_){return cljs.core.assoc.call(null,p1__41737_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(data,key){return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),(function (p1__41738_SHARP_){if(cljs.core._EQ_.call(null,key,p1__41738_SHARP_))
{return null;
} else
{return key;
}
}));
});
hivez.core.delete_hive = (function delete_hive(data,key){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_41741 = key.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (hive_41741){
return (function (p1__41739_SHARP_){return cljs.core.dissoc.call(null,p1__41739_SHARP_,key);
});})(hive_41741))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_41741,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
} else
{om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (p1__41740_SHARP_){return cljs.core.dissoc.call(null,p1__41740_SHARP_,key);
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
hivez.core.input = (function input(hive,owner,p__41742){var map__41749 = p__41742;var map__41749__$1 = ((cljs.core.seq_QMARK_.call(null,map__41749))?cljs.core.apply.call(null,cljs.core.hash_map,map__41749):map__41749);var opts = map__41749__$1;var on_key_down = cljs.core.get.call(null,map__41749__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__41749__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__41749__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__41749__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__41749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t41750 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41750 = (function (input,on_key_down,owner,p__41742,hive,edit_key,className,on_edit,id,opts,map__41749,meta41751){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.p__41742 = p__41742;
this.hive = hive;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.map__41749 = map__41749;
this.meta41751 = meta41751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41750.cljs$lang$type = true;
hivez.core.t41750.cljs$lang$ctorStr = "hivez.core/t41750";
hivez.core.t41750.cljs$lang$ctorPrWriter = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41750");
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t41750.prototype.om$core$IRenderState$ = true;
hivez.core.t41750.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__41753){var self__ = this;
var map__41754 = p__41753;var map__41754__$1 = ((cljs.core.seq_QMARK_.call(null,map__41754))?cljs.core.apply.call(null,cljs.core.hash_map,map__41754):map__41754);var exit_type = cljs.core.get.call(null,map__41754__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__41754,map__41754__$1,exit_type,map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t41750.prototype.om$core$IDidMount$ = true;
hivez.core.t41750.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t41750.prototype.om$core$IInitState$ = true;
hivez.core.t41750.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t41750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_41752){var self__ = this;
var _41752__$1 = this;return self__.meta41751;
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t41750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_41752,meta41751__$1){var self__ = this;
var _41752__$1 = this;return (new hivez.core.t41750(self__.input,self__.on_key_down,self__.owner,self__.p__41742,self__.hive,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,self__.map__41749,meta41751__$1));
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t41750 = ((function (map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t41750(input__$1,on_key_down__$1,owner__$1,p__41742__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,map__41749__$2,meta41751){return (new hivez.core.t41750(input__$1,on_key_down__$1,owner__$1,p__41742__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,map__41749__$2,meta41751));
});})(map__41749,map__41749__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t41750(input,on_key_down,owner,p__41742,hive,edit_key,className,on_edit,id,opts,map__41749__$1,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__41755){var map__41763 = p__41755;var map__41763__$1 = ((cljs.core.seq_QMARK_.call(null,map__41763))?cljs.core.apply.call(null,cljs.core.hash_map,map__41763):map__41763);var opts = map__41763__$1;var on_edit = cljs.core.get.call(null,map__41763__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t41764 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41764 = (function (on_edit,opts,map__41763,p__41755,owner,hive,input_control,meta41765){
this.on_edit = on_edit;
this.opts = opts;
this.map__41763 = map__41763;
this.p__41755 = p__41755;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta41765 = meta41765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41764.cljs$lang$type = true;
hivez.core.t41764.cljs$lang$ctorStr = "hivez.core/t41764";
hivez.core.t41764.cljs$lang$ctorPrWriter = ((function (map__41763,map__41763__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41764");
});})(map__41763,map__41763__$1,opts,on_edit))
;
hivez.core.t41764.prototype.om$core$IRenderState$ = true;
hivez.core.t41764.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__41763,map__41763__$1,opts,on_edit){
return (function (_,p__41767){var self__ = this;
var map__41768 = p__41767;var map__41768__$1 = ((cljs.core.seq_QMARK_.call(null,map__41768))?cljs.core.apply.call(null,cljs.core.hash_map,map__41768):map__41768);var editing = cljs.core.get.call(null,map__41768__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__41769 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__41769) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__41769,___$1,map__41768,map__41768__$1,editing,map__41763,map__41763__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__41769,___$1,map__41768,map__41768__$1,editing,map__41763,map__41763__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__41763,map__41763__$1,opts,on_edit))
;
hivez.core.t41764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__41763,map__41763__$1,opts,on_edit){
return (function (_41766){var self__ = this;
var _41766__$1 = this;return self__.meta41765;
});})(map__41763,map__41763__$1,opts,on_edit))
;
hivez.core.t41764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__41763,map__41763__$1,opts,on_edit){
return (function (_41766,meta41765__$1){var self__ = this;
var _41766__$1 = this;return (new hivez.core.t41764(self__.on_edit,self__.opts,self__.map__41763,self__.p__41755,self__.owner,self__.hive,self__.input_control,meta41765__$1));
});})(map__41763,map__41763__$1,opts,on_edit))
;
hivez.core.__GT_t41764 = ((function (map__41763,map__41763__$1,opts,on_edit){
return (function __GT_t41764(on_edit__$1,opts__$1,map__41763__$2,p__41755__$1,owner__$1,hive__$1,input_control__$1,meta41765){return (new hivez.core.t41764(on_edit__$1,opts__$1,map__41763__$2,p__41755__$1,owner__$1,hive__$1,input_control__$1,meta41765));
});})(map__41763,map__41763__$1,opts,on_edit))
;
}
return (new hivez.core.t41764(on_edit,opts,map__41763__$1,p__41755,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__41771){var map__41776 = p__41771;var map__41776__$1 = ((cljs.core.seq_QMARK_.call(null,map__41776))?cljs.core.apply.call(null,cljs.core.hash_map,map__41776):map__41776);var opts = map__41776__$1;var begin_edit = cljs.core.get.call(null,map__41776__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t41777 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41777 = (function (begin_edit,opts,map__41776,p__41771,owner,hive,hive_info,meta41778){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__41776 = map__41776;
this.p__41771 = p__41771;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta41778 = meta41778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41777.cljs$lang$type = true;
hivez.core.t41777.cljs$lang$ctorStr = "hivez.core/t41777";
hivez.core.t41777.cljs$lang$ctorPrWriter = ((function (map__41776,map__41776__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41777");
});})(map__41776,map__41776__$1,opts,begin_edit))
;
hivez.core.t41777.prototype.om$core$IRender$ = true;
hivez.core.t41777.prototype.om$core$IRender$render$arity$1 = ((function (map__41776,map__41776__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__41776,map__41776__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__41776,map__41776__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__41776,map__41776__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__41776,map__41776__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__41776,map__41776__$1,opts,begin_edit))
;
hivez.core.t41777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__41776,map__41776__$1,opts,begin_edit){
return (function (_41779){var self__ = this;
var _41779__$1 = this;return self__.meta41778;
});})(map__41776,map__41776__$1,opts,begin_edit))
;
hivez.core.t41777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__41776,map__41776__$1,opts,begin_edit){
return (function (_41779,meta41778__$1){var self__ = this;
var _41779__$1 = this;return (new hivez.core.t41777(self__.begin_edit,self__.opts,self__.map__41776,self__.p__41771,self__.owner,self__.hive,self__.hive_info,meta41778__$1));
});})(map__41776,map__41776__$1,opts,begin_edit))
;
hivez.core.__GT_t41777 = ((function (map__41776,map__41776__$1,opts,begin_edit){
return (function __GT_t41777(begin_edit__$1,opts__$1,map__41776__$2,p__41771__$1,owner__$1,hive__$1,hive_info__$1,meta41778){return (new hivez.core.t41777(begin_edit__$1,opts__$1,map__41776__$2,p__41771__$1,owner__$1,hive__$1,hive_info__$1,meta41778));
});})(map__41776,map__41776__$1,opts,begin_edit))
;
}
return (new hivez.core.t41777(begin_edit,opts,map__41776__$1,p__41771,owner,hive,hive_info,null));
});
hivez.core.name_select = (function name_select(data,owner,p__41780){var map__41785 = p__41780;var map__41785__$1 = ((cljs.core.seq_QMARK_.call(null,map__41785))?cljs.core.apply.call(null,cljs.core.hash_map,map__41785):map__41785);var opts = map__41785__$1;var route = cljs.core.get.call(null,map__41785__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t41786 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41786 = (function (route,opts,map__41785,p__41780,owner,data,name_select,meta41787){
this.route = route;
this.opts = opts;
this.map__41785 = map__41785;
this.p__41780 = p__41780;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta41787 = meta41787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41786.cljs$lang$type = true;
hivez.core.t41786.cljs$lang$ctorStr = "hivez.core/t41786";
hivez.core.t41786.cljs$lang$ctorPrWriter = ((function (map__41785,map__41785__$1,opts,route){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41786");
});})(map__41785,map__41785__$1,opts,route))
;
hivez.core.t41786.prototype.om$core$IRender$ = true;
hivez.core.t41786.prototype.om$core$IRender$render$arity$1 = ((function (map__41785,map__41785__$1,opts,route){
return (function (this__14153__auto__){var self__ = this;
var this__14153__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14153__auto____$1,map__41785,map__41785__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,self__.data], null));
});})(this__14153__auto____$1,map__41785,map__41785__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__41785,map__41785__$1,opts,route))
;
hivez.core.t41786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__41785,map__41785__$1,opts,route){
return (function (_41788){var self__ = this;
var _41788__$1 = this;return self__.meta41787;
});})(map__41785,map__41785__$1,opts,route))
;
hivez.core.t41786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__41785,map__41785__$1,opts,route){
return (function (_41788,meta41787__$1){var self__ = this;
var _41788__$1 = this;return (new hivez.core.t41786(self__.route,self__.opts,self__.map__41785,self__.p__41780,self__.owner,self__.data,self__.name_select,meta41787__$1));
});})(map__41785,map__41785__$1,opts,route))
;
hivez.core.__GT_t41786 = ((function (map__41785,map__41785__$1,opts,route){
return (function __GT_t41786(route__$1,opts__$1,map__41785__$2,p__41780__$1,owner__$1,data__$1,name_select__$1,meta41787){return (new hivez.core.t41786(route__$1,opts__$1,map__41785__$2,p__41780__$1,owner__$1,data__$1,name_select__$1,meta41787));
});})(map__41785,map__41785__$1,opts,route))
;
}
return (new hivez.core.t41786(route,opts,map__41785__$1,p__41780,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t41792 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41792 = (function (owner,places,places_info,meta41793){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta41793 = meta41793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41792.cljs$lang$type = true;
hivez.core.t41792.cljs$lang$ctorStr = "hivez.core/t41792";
hivez.core.t41792.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41792");
});
hivez.core.t41792.prototype.om$core$IRender$ = true;
hivez.core.t41792.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t41792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41794){var self__ = this;
var _41794__$1 = this;return self__.meta41793;
});
hivez.core.t41792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41794,meta41793__$1){var self__ = this;
var _41794__$1 = this;return (new hivez.core.t41792(self__.owner,self__.places,self__.places_info,meta41793__$1));
});
hivez.core.__GT_t41792 = (function __GT_t41792(owner__$1,places__$1,places_info__$1,meta41793){return (new hivez.core.t41792(owner__$1,places__$1,places_info__$1,meta41793));
});
}
return (new hivez.core.t41792(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t41798 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41798 = (function (owner,place,place_info,meta41799){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta41799 = meta41799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41798.cljs$lang$type = true;
hivez.core.t41798.cljs$lang$ctorStr = "hivez.core/t41798";
hivez.core.t41798.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41798");
});
hivez.core.t41798.prototype.om$core$IRender$ = true;
hivez.core.t41798.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t41798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41800){var self__ = this;
var _41800__$1 = this;return self__.meta41799;
});
hivez.core.t41798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41800,meta41799__$1){var self__ = this;
var _41800__$1 = this;return (new hivez.core.t41798(self__.owner,self__.place,self__.place_info,meta41799__$1));
});
hivez.core.__GT_t41798 = (function __GT_t41798(owner__$1,place__$1,place_info__$1,meta41799){return (new hivez.core.t41798(owner__$1,place__$1,place_info__$1,meta41799));
});
}
return (new hivez.core.t41798(owner,place,place_info,null));
});
hivez.core.root = (function root(root_id,owner,comp,data,opts){return om.core.root.call(null,comp,data,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(root_id),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250))], null)], null),opts));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t41857 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41857 = (function (owner,data,drawer,meta41858){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta41858 = meta41858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41857.cljs$lang$type = true;
hivez.core.t41857.cljs$lang$ctorStr = "hivez.core/t41857";
hivez.core.t41857.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41857");
});
hivez.core.t41857.prototype.om$core$IRenderState$ = true;
hivez.core.t41857.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__41860){var self__ = this;
var map__41861 = p__41860;var map__41861__$1 = ((cljs.core.seq_QMARK_.call(null,map__41861))?cljs.core.apply.call(null,cljs.core.hash_map,map__41861):map__41861);var editing = cljs.core.get.call(null,map__41861__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__41861,map__41861__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__41861,map__41861__$1,editing))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(editing)?" hide":" show"))), "id": "drawer"}));
});
hivez.core.t41857.prototype.om$core$IDidMount$ = true;
hivez.core.t41857.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["places"], null));
});
hivez.core.t41857.prototype.om$core$IWillMount$ = true;
hivez.core.t41857.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,___$1){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,___$1){
return (function (state_41893){var state_val_41894 = (state_41893[(1)]);if((state_val_41894 === (8)))
{var inst_41865 = (state_41893[(7)]);var inst_41866 = (state_41893[(8)]);var inst_41876 = cljs.core.second.call(null,inst_41865);var inst_41877 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_41878 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_41879 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_41880 = [inst_41879];var inst_41881 = cljs.core.PersistentHashMap.fromArrays(inst_41878,inst_41880);var inst_41882 = [inst_41881];var inst_41883 = cljs.core.PersistentHashMap.fromArrays(inst_41877,inst_41882);var inst_41884 = inst_41866.call(null,hivez.core.hive_info,inst_41876,inst_41883);var state_41893__$1 = state_41893;var statearr_41895_41913 = state_41893__$1;(statearr_41895_41913[(2)] = inst_41884);
(statearr_41895_41913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41894 === (7)))
{var inst_41865 = (state_41893[(7)]);var inst_41866 = (state_41893[(8)]);var inst_41872 = cljs.core.second.call(null,inst_41865);var inst_41873 = cljs.core.PersistentHashMap.EMPTY;var inst_41874 = inst_41866.call(null,hivez.core.place_info,inst_41872,inst_41873);var state_41893__$1 = state_41893;var statearr_41896_41914 = state_41893__$1;(statearr_41896_41914[(2)] = inst_41874);
(statearr_41896_41914[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41894 === (6)))
{var inst_41866 = (state_41893[(8)]);var inst_41867 = cljs.core.deref.call(null,self__.data);var inst_41868 = new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(inst_41867);var inst_41869 = cljs.core.PersistentHashMap.EMPTY;var inst_41870 = inst_41866.call(null,hivez.core.places_info,inst_41868,inst_41869);var state_41893__$1 = state_41893;var statearr_41897_41915 = state_41893__$1;(statearr_41897_41915[(2)] = inst_41870);
(statearr_41897_41915[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41894 === (5)))
{var inst_41888 = (state_41893[(2)]);var state_41893__$1 = (function (){var statearr_41898 = state_41893;(statearr_41898[(9)] = inst_41888);
return statearr_41898;
})();var statearr_41899_41916 = state_41893__$1;(statearr_41899_41916[(2)] = null);
(statearr_41899_41916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41894 === (4)))
{var inst_41865 = (state_41893[(7)]);var inst_41865__$1 = (state_41893[(2)]);var inst_41866 = cljs.core.partial.call(null,hivez.core.root,"drawer",self__.owner);var inst_41886 = cljs.core.first.call(null,inst_41865__$1);var state_41893__$1 = (function (){var statearr_41900 = state_41893;(statearr_41900[(7)] = inst_41865__$1);
(statearr_41900[(8)] = inst_41866);
return statearr_41900;
})();var G__41901_41917 = inst_41886;switch (G__41901_41917) {
case "places":
var statearr_41902_41919 = state_41893__$1;(statearr_41902_41919[(1)] = (6));

break;
case "place":
var statearr_41903_41920 = state_41893__$1;(statearr_41903_41920[(1)] = (7));

break;
case "hive":
var statearr_41904_41921 = state_41893__$1;(statearr_41904_41921[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41886))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41894 === (3)))
{var inst_41891 = (state_41893[(2)]);var state_41893__$1 = state_41893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41893__$1,inst_41891);
} else
{if((state_val_41894 === (2)))
{var inst_41863 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250));var state_41893__$1 = state_41893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41893__$1,(4),inst_41863);
} else
{if((state_val_41894 === (1)))
{var state_41893__$1 = state_41893;var statearr_41905_41922 = state_41893__$1;(statearr_41905_41922[(2)] = null);
(statearr_41905_41922[(1)] = (2));
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
});})(c__15086__auto__,___$1))
;return ((function (switch__15071__auto__,c__15086__auto__,___$1){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_41909 = [null,null,null,null,null,null,null,null,null,null];(statearr_41909[(0)] = state_machine__15072__auto__);
(statearr_41909[(1)] = (1));
return statearr_41909;
});
var state_machine__15072__auto____1 = (function (state_41893){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_41893);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e41910){if((e41910 instanceof Object))
{var ex__15075__auto__ = e41910;var statearr_41911_41923 = state_41893;(statearr_41911_41923[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41910;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41924 = state_41893;
state_41893 = G__41924;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_41893){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_41893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,___$1))
})();var state__15088__auto__ = (function (){var statearr_41912 = f__15087__auto__.call(null);(statearr_41912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_41912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,___$1))
);
return c__15086__auto__;
});
hivez.core.t41857.prototype.om$core$IInitState$ = true;
hivez.core.t41857.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route-chan","route-chan",1651359250),cljs.core.async.chan.call(null)], null);
});
hivez.core.t41857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41859){var self__ = this;
var _41859__$1 = this;return self__.meta41858;
});
hivez.core.t41857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41859,meta41858__$1){var self__ = this;
var _41859__$1 = this;return (new hivez.core.t41857(self__.owner,self__.data,self__.drawer,meta41858__$1));
});
hivez.core.__GT_t41857 = (function __GT_t41857(owner__$1,data__$1,drawer__$1,meta41858){return (new hivez.core.t41857(owner__$1,data__$1,drawer__$1,meta41858));
});
}
return (new hivez.core.t41857(owner,data,drawer,null));
});
hivez.core.to_save = (function to_save(){om.core.build.call(null,hivez.core.places_info,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(hivez.core.data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data)))
{return om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(hivez.core.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(hivez.core.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,hivez.core.owner)], null)], null));
} else
{return null;
}
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t41928 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t41928 = (function (owner,data,app,meta41929){
this.owner = owner;
this.data = data;
this.app = app;
this.meta41929 = meta41929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t41928.cljs$lang$type = true;
hivez.core.t41928.cljs$lang$ctorStr = "hivez.core/t41928";
hivez.core.t41928.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t41928");
});
hivez.core.t41928.prototype.om$core$IRender$ = true;
hivez.core.t41928.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.goog_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t41928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41930){var self__ = this;
var _41930__$1 = this;return self__.meta41929;
});
hivez.core.t41928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41930,meta41929__$1){var self__ = this;
var _41930__$1 = this;return (new hivez.core.t41928(self__.owner,self__.data,self__.app,meta41929__$1));
});
hivez.core.__GT_t41928 = (function __GT_t41928(owner__$1,data__$1,app__$1,meta41929){return (new hivez.core.t41928(owner__$1,data__$1,app__$1,meta41929));
});
}
return (new hivez.core.t41928(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map