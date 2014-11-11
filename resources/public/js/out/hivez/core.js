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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__23828_SHARP_){return cljs.core.assoc.call(null,p1__23828_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
floormat.cljs$lang$applyTo = (function (arglist__23829){
var args = cljs.core.seq(arglist__23829);
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
return (function (p1__23830_SHARP_){return cljs.core.assoc_in.call(null,p1__23830_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.keyword.call(null,result.key)], null),cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__23831_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__23831_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.activate_hive = (function activate_hive(owner,data,path){var key = cljs.core.last.call(null,path);om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),((function (key){
return (function (p1__23832_SHARP_){if(cljs.core._EQ_.call(null,key,p1__23832_SHARP_))
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
return (function (p1__23833_SHARP_){return cljs.core.assoc.call(null,p1__23833_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_23836 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_23836){
return (function (p1__23834_SHARP_){return cljs.core.dissoc.call(null,p1__23834_SHARP_,cljs.core.last.call(null,path));
});})(hive_23836))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_23836,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__23835_SHARP_){return cljs.core.dissoc.call(null,p1__23835_SHARP_,cljs.core.last.call(null,path));
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
hivez.core.input = (function input(data,owner,p__23837){var map__23844 = p__23837;var map__23844__$1 = ((cljs.core.seq_QMARK_.call(null,map__23844))?cljs.core.apply.call(null,cljs.core.hash_map,map__23844):map__23844);var opts = map__23844__$1;var on_key_down = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__23844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t23845 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23845 = (function (input,on_key_down,owner,data,p__23837,map__23844,edit_key,className,on_edit,id,opts,meta23846){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.p__23837 = p__23837;
this.map__23844 = map__23844;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta23846 = meta23846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23845.cljs$lang$type = true;
hivez.core.t23845.cljs$lang$ctorStr = "hivez.core/t23845";
hivez.core.t23845.cljs$lang$ctorPrWriter = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23845");
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t23845.prototype.om$core$IRenderState$ = true;
hivez.core.t23845.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__23848){var self__ = this;
var map__23849 = p__23848;var map__23849__$1 = ((cljs.core.seq_QMARK_.call(null,map__23849))?cljs.core.apply.call(null,cljs.core.hash_map,map__23849):map__23849);var exit_type = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.data)}, "onBlur": ((function (___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.data,self__.edit_key,self__.owner);
});})(___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__23849,map__23849__$1,exit_type,map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t23845.prototype.om$core$IDidMount$ = true;
hivez.core.t23845.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t23845.prototype.om$core$IInitState$ = true;
hivez.core.t23845.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t23845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_23847){var self__ = this;
var _23847__$1 = this;return self__.meta23846;
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t23845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_23847,meta23846__$1){var self__ = this;
var _23847__$1 = this;return (new hivez.core.t23845(self__.input,self__.on_key_down,self__.owner,self__.data,self__.p__23837,self__.map__23844,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta23846__$1));
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t23845 = ((function (map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t23845(input__$1,on_key_down__$1,owner__$1,data__$1,p__23837__$1,map__23844__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta23846){return (new hivez.core.t23845(input__$1,on_key_down__$1,owner__$1,data__$1,p__23837__$1,map__23844__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta23846));
});})(map__23844,map__23844__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t23845(input,on_key_down,owner,data,p__23837,map__23844__$1,edit_key,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__23850){var map__23858 = p__23850;var map__23858__$1 = ((cljs.core.seq_QMARK_.call(null,map__23858))?cljs.core.apply.call(null,cljs.core.hash_map,map__23858):map__23858);var opts = map__23858__$1;var on_edit = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t23859 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23859 = (function (on_edit,opts,map__23858,p__23850,owner,hive,input_control,meta23860){
this.on_edit = on_edit;
this.opts = opts;
this.map__23858 = map__23858;
this.p__23850 = p__23850;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta23860 = meta23860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23859.cljs$lang$type = true;
hivez.core.t23859.cljs$lang$ctorStr = "hivez.core/t23859";
hivez.core.t23859.cljs$lang$ctorPrWriter = ((function (map__23858,map__23858__$1,opts,on_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23859");
});})(map__23858,map__23858__$1,opts,on_edit))
;
hivez.core.t23859.prototype.om$core$IRenderState$ = true;
hivez.core.t23859.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23858,map__23858__$1,opts,on_edit){
return (function (_,p__23862){var self__ = this;
var map__23863 = p__23862;var map__23863__$1 = ((cljs.core.seq_QMARK_.call(null,map__23863))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);var editing = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__23864 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__23864) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__23864,___$1,map__23863,map__23863__$1,editing,map__23858,map__23858__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__23864,___$1,map__23863,map__23863__$1,editing,map__23858,map__23858__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__23858,map__23858__$1,opts,on_edit))
;
hivez.core.t23859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23858,map__23858__$1,opts,on_edit){
return (function (_23861){var self__ = this;
var _23861__$1 = this;return self__.meta23860;
});})(map__23858,map__23858__$1,opts,on_edit))
;
hivez.core.t23859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23858,map__23858__$1,opts,on_edit){
return (function (_23861,meta23860__$1){var self__ = this;
var _23861__$1 = this;return (new hivez.core.t23859(self__.on_edit,self__.opts,self__.map__23858,self__.p__23850,self__.owner,self__.hive,self__.input_control,meta23860__$1));
});})(map__23858,map__23858__$1,opts,on_edit))
;
hivez.core.__GT_t23859 = ((function (map__23858,map__23858__$1,opts,on_edit){
return (function __GT_t23859(on_edit__$1,opts__$1,map__23858__$2,p__23850__$1,owner__$1,hive__$1,input_control__$1,meta23860){return (new hivez.core.t23859(on_edit__$1,opts__$1,map__23858__$2,p__23850__$1,owner__$1,hive__$1,input_control__$1,meta23860));
});})(map__23858,map__23858__$1,opts,on_edit))
;
}
return (new hivez.core.t23859(on_edit,opts,map__23858__$1,p__23850,owner,hive,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__23866){var map__23871 = p__23866;var map__23871__$1 = ((cljs.core.seq_QMARK_.call(null,map__23871))?cljs.core.apply.call(null,cljs.core.hash_map,map__23871):map__23871);var opts = map__23871__$1;var route = cljs.core.get.call(null,map__23871__$1,new cljs.core.Keyword(null,"route","route",329891309));if(typeof hivez.core.t23872 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23872 = (function (route,opts,map__23871,p__23866,owner,data,name_select,meta23873){
this.route = route;
this.opts = opts;
this.map__23871 = map__23871;
this.p__23866 = p__23866;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta23873 = meta23873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23872.cljs$lang$type = true;
hivez.core.t23872.cljs$lang$ctorStr = "hivez.core/t23872";
hivez.core.t23872.cljs$lang$ctorPrWriter = ((function (map__23871,map__23871__$1,opts,route){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23872");
});})(map__23871,map__23871__$1,opts,route))
;
hivez.core.t23872.prototype.om$core$IRender$ = true;
hivez.core.t23872.prototype.om$core$IRender$render$arity$1 = ((function (map__23871,map__23871__$1,opts,route){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__23871,map__23871__$1,opts,route){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.route,om.core.path.call(null,self__.data)], null));
});})(this__14154__auto____$1,map__23871,map__23871__$1,opts,route))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__23871,map__23871__$1,opts,route))
;
hivez.core.t23872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23871,map__23871__$1,opts,route){
return (function (_23874){var self__ = this;
var _23874__$1 = this;return self__.meta23873;
});})(map__23871,map__23871__$1,opts,route))
;
hivez.core.t23872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23871,map__23871__$1,opts,route){
return (function (_23874,meta23873__$1){var self__ = this;
var _23874__$1 = this;return (new hivez.core.t23872(self__.route,self__.opts,self__.map__23871,self__.p__23866,self__.owner,self__.data,self__.name_select,meta23873__$1));
});})(map__23871,map__23871__$1,opts,route))
;
hivez.core.__GT_t23872 = ((function (map__23871,map__23871__$1,opts,route){
return (function __GT_t23872(route__$1,opts__$1,map__23871__$2,p__23866__$1,owner__$1,data__$1,name_select__$1,meta23873){return (new hivez.core.t23872(route__$1,opts__$1,map__23871__$2,p__23866__$1,owner__$1,data__$1,name_select__$1,meta23873));
});})(map__23871,map__23871__$1,opts,route))
;
}
return (new hivez.core.t23872(route,opts,map__23871__$1,p__23866,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t23878 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23878 = (function (owner,places,places_info,meta23879){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta23879 = meta23879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23878.cljs$lang$type = true;
hivez.core.t23878.cljs$lang$ctorStr = "hivez.core/t23878";
hivez.core.t23878.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23878");
});
hivez.core.t23878.prototype.om$core$IRender$ = true;
hivez.core.t23878.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"place"], null)], null)));
});
hivez.core.t23878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23880){var self__ = this;
var _23880__$1 = this;return self__.meta23879;
});
hivez.core.t23878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23880,meta23879__$1){var self__ = this;
var _23880__$1 = this;return (new hivez.core.t23878(self__.owner,self__.places,self__.places_info,meta23879__$1));
});
hivez.core.__GT_t23878 = (function __GT_t23878(owner__$1,places__$1,places_info__$1,meta23879){return (new hivez.core.t23878(owner__$1,places__$1,places_info__$1,meta23879));
});
}
return (new hivez.core.t23878(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner){if(typeof hivez.core.t23884 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23884 = (function (owner,place,place_info,meta23885){
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta23885 = meta23885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23884.cljs$lang$type = true;
hivez.core.t23884.cljs$lang$ctorStr = "hivez.core/t23884";
hivez.core.t23884.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23884");
});
hivez.core.t23884.prototype.om$core$IRender$ = true;
hivez.core.t23884.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"className": "place-title"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),"hive"], null)], null))));
});
hivez.core.t23884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23886){var self__ = this;
var _23886__$1 = this;return self__.meta23885;
});
hivez.core.t23884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23886,meta23885__$1){var self__ = this;
var _23886__$1 = this;return (new hivez.core.t23884(self__.owner,self__.place,self__.place_info,meta23885__$1));
});
hivez.core.__GT_t23884 = (function __GT_t23884(owner__$1,place__$1,place_info__$1,meta23885){return (new hivez.core.t23884(owner__$1,place__$1,place_info__$1,meta23885));
});
}
return (new hivez.core.t23884(owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__23887){var map__23892 = p__23887;var map__23892__$1 = ((cljs.core.seq_QMARK_.call(null,map__23892))?cljs.core.apply.call(null,cljs.core.hash_map,map__23892):map__23892);var opts = map__23892__$1;var begin_edit = cljs.core.get.call(null,map__23892__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t23893 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23893 = (function (begin_edit,opts,map__23892,p__23887,owner,hive,hive_info,meta23894){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__23892 = map__23892;
this.p__23887 = p__23887;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta23894 = meta23894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23893.cljs$lang$type = true;
hivez.core.t23893.cljs$lang$ctorStr = "hivez.core/t23893";
hivez.core.t23893.cljs$lang$ctorPrWriter = ((function (map__23892,map__23892__$1,opts,begin_edit){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23893");
});})(map__23892,map__23892__$1,opts,begin_edit))
;
hivez.core.t23893.prototype.om$core$IRender$ = true;
hivez.core.t23893.prototype.om$core$IRender$render$arity$1 = ((function (map__23892,map__23892__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__23892,map__23892__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__23892,map__23892__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__23892,map__23892__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__23892,map__23892__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__23892,map__23892__$1,opts,begin_edit))
;
hivez.core.t23893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23892,map__23892__$1,opts,begin_edit){
return (function (_23895){var self__ = this;
var _23895__$1 = this;return self__.meta23894;
});})(map__23892,map__23892__$1,opts,begin_edit))
;
hivez.core.t23893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23892,map__23892__$1,opts,begin_edit){
return (function (_23895,meta23894__$1){var self__ = this;
var _23895__$1 = this;return (new hivez.core.t23893(self__.begin_edit,self__.opts,self__.map__23892,self__.p__23887,self__.owner,self__.hive,self__.hive_info,meta23894__$1));
});})(map__23892,map__23892__$1,opts,begin_edit))
;
hivez.core.__GT_t23893 = ((function (map__23892,map__23892__$1,opts,begin_edit){
return (function __GT_t23893(begin_edit__$1,opts__$1,map__23892__$2,p__23887__$1,owner__$1,hive__$1,hive_info__$1,meta23894){return (new hivez.core.t23893(begin_edit__$1,opts__$1,map__23892__$2,p__23887__$1,owner__$1,hive__$1,hive_info__$1,meta23894));
});})(map__23892,map__23892__$1,opts,begin_edit))
;
}
return (new hivez.core.t23893(begin_edit,opts,map__23892__$1,p__23887,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__23897){var map__23904 = p__23897;var map__23904__$1 = ((cljs.core.seq_QMARK_.call(null,map__23904))?cljs.core.apply.call(null,cljs.core.hash_map,map__23904):map__23904);var opts = map__23904__$1;var toggle_open = cljs.core.get.call(null,map__23904__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t23905 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23905 = (function (toggle_open,opts,map__23904,p__23897,owner,data,navicon,meta23906){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__23904 = map__23904;
this.p__23897 = p__23897;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta23906 = meta23906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23905.cljs$lang$type = true;
hivez.core.t23905.cljs$lang$ctorStr = "hivez.core/t23905";
hivez.core.t23905.cljs$lang$ctorPrWriter = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23905");
});})(map__23904,map__23904__$1,opts,toggle_open))
;
hivez.core.t23905.prototype.om$core$IRenderState$ = true;
hivez.core.t23905.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function (_,p__23908){var self__ = this;
var map__23909 = p__23908;var map__23909__$1 = ((cljs.core.seq_QMARK_.call(null,map__23909))?cljs.core.apply.call(null,cljs.core.hash_map,map__23909):map__23909);var editing = cljs.core.get.call(null,map__23909__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__23909__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__23909,map__23909__$1,editing,active,map__23904,map__23904__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__23909,map__23909__$1,editing,active,map__23904,map__23904__$1,opts,toggle_open){
return (function (p1__23896_SHARP_){return cljs.core.not.call(null,p1__23896_SHARP_);
});})(___$1,map__23909,map__23909__$1,editing,active,map__23904,map__23904__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__23909,map__23909__$1,editing,active,map__23904,map__23904__$1,opts,toggle_open))
, "style": hivez.core.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__23904,map__23904__$1,opts,toggle_open))
;
hivez.core.t23905.prototype.om$core$IInitState$ = true;
hivez.core.t23905.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__23904,map__23904__$1,opts,toggle_open))
;
hivez.core.t23905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function (_23907){var self__ = this;
var _23907__$1 = this;return self__.meta23906;
});})(map__23904,map__23904__$1,opts,toggle_open))
;
hivez.core.t23905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function (_23907,meta23906__$1){var self__ = this;
var _23907__$1 = this;return (new hivez.core.t23905(self__.toggle_open,self__.opts,self__.map__23904,self__.p__23897,self__.owner,self__.data,self__.navicon,meta23906__$1));
});})(map__23904,map__23904__$1,opts,toggle_open))
;
hivez.core.__GT_t23905 = ((function (map__23904,map__23904__$1,opts,toggle_open){
return (function __GT_t23905(toggle_open__$1,opts__$1,map__23904__$2,p__23897__$1,owner__$1,data__$1,navicon__$1,meta23906){return (new hivez.core.t23905(toggle_open__$1,opts__$1,map__23904__$2,p__23897__$1,owner__$1,data__$1,navicon__$1,meta23906));
});})(map__23904,map__23904__$1,opts,toggle_open))
;
}
return (new hivez.core.t23905(toggle_open,opts,map__23904__$1,p__23897,owner,data,navicon,null));
});
hivez.core.control_panel = (function control_panel(p__23911,owner,opts){var vec__23918 = p__23911;var route = cljs.core.nth.call(null,vec__23918,(0),null);var path = cljs.core.nth.call(null,vec__23918,(1),null);if(typeof hivez.core.t23919 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23919 = (function (path,route,vec__23918,opts,owner,p__23911,control_panel,meta23920){
this.path = path;
this.route = route;
this.vec__23918 = vec__23918;
this.opts = opts;
this.owner = owner;
this.p__23911 = p__23911;
this.control_panel = control_panel;
this.meta23920 = meta23920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23919.cljs$lang$type = true;
hivez.core.t23919.cljs$lang$ctorStr = "hivez.core/t23919";
hivez.core.t23919.cljs$lang$ctorPrWriter = ((function (vec__23918,route,path){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23919");
});})(vec__23918,route,path))
;
hivez.core.t23919.prototype.om$core$IRenderState$ = true;
hivez.core.t23919.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__23918,route,path){
return (function (_,p__23922){var self__ = this;
var map__23923 = p__23922;var map__23923__$1 = ((cljs.core.seq_QMARK_.call(null,map__23923))?cljs.core.apply.call(null,cljs.core.hash_map,map__23923):map__23923);var history = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"history","history",-247395220));var editing = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.core.display_fade_in.call(null,open), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.route))),React.DOM.div({"onClick": ((function (___$1,map__23923,map__23923__$1,history,editing,open,vec__23918,route,path){
return (function (){var new_history = cljs.core.pop.call(null,history);if(!(cljs.core.empty_QMARK_.call(null,new_history)))
{cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980)),cljs.core.peek.call(null,new_history));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),new_history);
} else
{return null;
}
});})(___$1,map__23923,map__23923__$1,history,editing,open,vec__23918,route,path))
, "className": "icon-arrow-left2", "id": "nav-back-btn"})),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(vec__23918,route,path))
;
hivez.core.t23919.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t23919.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__23918,route,path){
return (function (_,next_props){var self__ = this;
var ___$1 = this;var history_23924 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220));if(cljs.core._EQ_.call(null,cljs.core.peek.call(null,history_23924),next_props))
{} else
{om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220),((function (history_23924,___$1,vec__23918,route,path){
return (function (p1__23910_SHARP_){return cljs.core.conj.call(null,p1__23910_SHARP_,next_props);
});})(history_23924,___$1,vec__23918,route,path))
);
}
return cljs.core.println.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220)));
});})(vec__23918,route,path))
;
hivez.core.t23919.prototype.om$core$InitState$ = true;
hivez.core.t23919.prototype.om$core$InitState$init_state$arity$1 = ((function (vec__23918,route,path){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null);
});})(vec__23918,route,path))
;
hivez.core.t23919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__23918,route,path){
return (function (_23921){var self__ = this;
var _23921__$1 = this;return self__.meta23920;
});})(vec__23918,route,path))
;
hivez.core.t23919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__23918,route,path){
return (function (_23921,meta23920__$1){var self__ = this;
var _23921__$1 = this;return (new hivez.core.t23919(self__.path,self__.route,self__.vec__23918,self__.opts,self__.owner,self__.p__23911,self__.control_panel,meta23920__$1));
});})(vec__23918,route,path))
;
hivez.core.__GT_t23919 = ((function (vec__23918,route,path){
return (function __GT_t23919(path__$1,route__$1,vec__23918__$1,opts__$1,owner__$1,p__23911__$1,control_panel__$1,meta23920){return (new hivez.core.t23919(path__$1,route__$1,vec__23918__$1,opts__$1,owner__$1,p__23911__$1,control_panel__$1,meta23920));
});})(vec__23918,route,path))
;
}
return (new hivez.core.t23919(path,route,vec__23918,opts,owner,p__23911,control_panel,null));
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
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t23984 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t23984 = (function (owner,data,drawer,meta23985){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta23985 = meta23985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t23984.cljs$lang$type = true;
hivez.core.t23984.cljs$lang$ctorStr = "hivez.core/t23984";
hivez.core.t23984.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t23984");
});
hivez.core.t23984.prototype.om$core$IRenderState$ = true;
hivez.core.t23984.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__23987){var self__ = this;
var map__23988 = p__23987;var map__23988__$1 = ((cljs.core.seq_QMARK_.call(null,map__23988))?cljs.core.apply.call(null,cljs.core.hash_map,map__23988):map__23988);var child_opts = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704));var child_ks = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428));var child = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"child","child",623967545));var route = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"route","route",329891309));var nav_chan = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var editing = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,child_ks], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner)], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__23988,map__23988__$1,child_opts,child_ks,child,route,nav_chan,editing,open){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__23988,map__23988__$1,child_opts,child_ks,child,route,nav_chan,editing,open))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12535__auto__ = open;if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12535__auto__;
}
})())?" show":" hide"))), "id": "drawer"},(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,child_ks))?om.core.build.call(null,child,cljs.core.get_in.call(null,self__.data,child_ks),child_opts):null)));
});
hivez.core.t23984.prototype.om$core$IWillMount$ = true;
hivez.core.t23984.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,___$1){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,___$1){
return (function (state_24022){var state_val_24023 = (state_24022[(1)]);if((state_val_24023 === (8)))
{var inst_23992 = (state_24022[(7)]);var inst_24001 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),true);var inst_24002 = cljs.core.second.call(null,inst_23992);var inst_24003 = cljs.core.last.call(null,inst_24002);var inst_24004 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),inst_24003);var inst_24005 = cljs.core.second.call(null,inst_23992);var inst_24006 = [new cljs.core.Keyword(null,"opts","opts",155075701)];var inst_24007 = [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107)];var inst_24008 = cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner);var inst_24009 = [inst_24008];var inst_24010 = cljs.core.PersistentHashMap.fromArrays(inst_24007,inst_24009);var inst_24011 = [inst_24010];var inst_24012 = cljs.core.PersistentHashMap.fromArrays(inst_24006,inst_24011);var inst_24013 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.hive_info,inst_24005,inst_24012);var state_24022__$1 = (function (){var statearr_24024 = state_24022;(statearr_24024[(8)] = inst_24001);
(statearr_24024[(9)] = inst_24004);
return statearr_24024;
})();var statearr_24025_24043 = state_24022__$1;(statearr_24025_24043[(2)] = inst_24013);
(statearr_24025_24043[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24023 === (7)))
{var inst_23992 = (state_24022[(7)]);var inst_23998 = cljs.core.second.call(null,inst_23992);var inst_23999 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.place_info,inst_23998);var state_24022__$1 = state_24022;var statearr_24026_24044 = state_24022__$1;(statearr_24026_24044[(2)] = inst_23999);
(statearr_24026_24044[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24023 === (6)))
{var inst_23992 = (state_24022[(7)]);var inst_23995 = cljs.core.second.call(null,inst_23992);var inst_23996 = hivez.core.route_BANG_.call(null,self__.owner,hivez.core.places_info,inst_23995);var state_24022__$1 = state_24022;var statearr_24027_24045 = state_24022__$1;(statearr_24027_24045[(2)] = inst_23996);
(statearr_24027_24045[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24023 === (5)))
{var inst_24017 = (state_24022[(2)]);var state_24022__$1 = (function (){var statearr_24028 = state_24022;(statearr_24028[(10)] = inst_24017);
return statearr_24028;
})();var statearr_24029_24046 = state_24022__$1;(statearr_24029_24046[(2)] = null);
(statearr_24029_24046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24023 === (4)))
{var inst_23992 = (state_24022[(7)]);var inst_23992__$1 = (state_24022[(2)]);var inst_23993 = cljs.core.first.call(null,inst_23992__$1);var inst_23994 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"route","route",329891309),inst_23993);var inst_24015 = cljs.core.first.call(null,inst_23992__$1);var state_24022__$1 = (function (){var statearr_24030 = state_24022;(statearr_24030[(7)] = inst_23992__$1);
(statearr_24030[(11)] = inst_23994);
return statearr_24030;
})();var G__24031_24047 = inst_24015;switch (G__24031_24047) {
case "places":
var statearr_24032_24049 = state_24022__$1;(statearr_24032_24049[(1)] = (6));

break;
case "place":
var statearr_24033_24050 = state_24022__$1;(statearr_24033_24050[(1)] = (7));

break;
case "hive":
var statearr_24034_24051 = state_24022__$1;(statearr_24034_24051[(1)] = (8));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24015))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24023 === (3)))
{var inst_24020 = (state_24022[(2)]);var state_24022__$1 = state_24022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24022__$1,inst_24020);
} else
{if((state_val_24023 === (2)))
{var inst_23990 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var state_24022__$1 = state_24022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(4),inst_23990);
} else
{if((state_val_24023 === (1)))
{var state_24022__$1 = state_24022;var statearr_24035_24052 = state_24022__$1;(statearr_24035_24052[(2)] = null);
(statearr_24035_24052[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_24039 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24039[(0)] = state_machine__15073__auto__);
(statearr_24039[(1)] = (1));
return statearr_24039;
});
var state_machine__15073__auto____1 = (function (state_24022){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_24022);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e24040){if((e24040 instanceof Object))
{var ex__15076__auto__ = e24040;var statearr_24041_24053 = state_24022;(statearr_24041_24053[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24022);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24054 = state_24022;
state_24022 = G__24054;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_24022){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_24022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,___$1))
})();var state__15089__auto__ = (function (){var statearr_24042 = f__15088__auto__.call(null);(statearr_24042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_24042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,___$1))
);
return c__15087__auto__;
});
hivez.core.t23984.prototype.om$core$IInitState$ = true;
hivez.core.t23984.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null,new cljs.core.Keyword(null,"route","route",329891309),"places",new cljs.core.Keyword(null,"child","child",623967545),hivez.core.places_info,new cljs.core.Keyword(null,"child-ks","child-ks",1822837428),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),cljs.core.PersistentArrayMap.EMPTY], null);
});
hivez.core.t23984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23986){var self__ = this;
var _23986__$1 = this;return self__.meta23985;
});
hivez.core.t23984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23986,meta23985__$1){var self__ = this;
var _23986__$1 = this;return (new hivez.core.t23984(self__.owner,self__.data,self__.drawer,meta23985__$1));
});
hivez.core.__GT_t23984 = (function __GT_t23984(owner__$1,data__$1,drawer__$1,meta23985){return (new hivez.core.t23984(owner__$1,data__$1,drawer__$1,meta23985));
});
}
return (new hivez.core.t23984(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t24058 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t24058 = (function (owner,data,app,meta24059){
this.owner = owner;
this.data = data;
this.app = app;
this.meta24059 = meta24059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t24058.cljs$lang$type = true;
hivez.core.t24058.cljs$lang$ctorStr = "hivez.core/t24058";
hivez.core.t24058.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.core/t24058");
});
hivez.core.t24058.prototype.om$core$IRender$ = true;
hivez.core.t24058.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t24058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24060){var self__ = this;
var _24060__$1 = this;return self__.meta24059;
});
hivez.core.t24058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24060,meta24059__$1){var self__ = this;
var _24060__$1 = this;return (new hivez.core.t24058(self__.owner,self__.data,self__.app,meta24059__$1));
});
hivez.core.__GT_t24058 = (function __GT_t24058(owner__$1,data__$1,app__$1,meta24059){return (new hivez.core.t24058(owner__$1,data__$1,app__$1,meta24059));
});
}
return (new hivez.core.t24058(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return hivez.core.db_new.call(null,(function (){return hivez.core.db_get_all.call(null,(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map