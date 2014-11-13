// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('hivez.util');
goog.require('cljs.core.async');
goog.require('hivez.db');
goog.require('hivez.input');
goog.require('goog.string');
goog.require('hivez.map');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hivez.input');
goog.require('hivez.util');
goog.require('om.core');
goog.require('om.core');
goog.require('hivez.map');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('hivez.db');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
hivez.core.orientation = (function orientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__43052_SHARP_){return cljs.core.assoc.call(null,p1__43052_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(lat_lng))));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__43053_SHARP_){return hivez.util.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__43053_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.new_place = (function new_place(id){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
hivez.core.add_place = (function add_place(places){om.core.transact_BANG_.call(null,places,(function (places__$1){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__43054_SHARP_){return cljs.core.assoc.call(null,p1__43054_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),false);
}),places__$1));
}));
var id = cljs.core.count.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hivez.core.app_state)));var new$ = hivez.core.new_place.call(null,id);om.core.transact_BANG_.call(null,places,((function (id,new$){
return (function (p1__43055_SHARP_){return cljs.core.conj.call(null,p1__43055_SHARP_,new$);
});})(id,new$))
);
return hivez.db.db_add.call(null,new$);
});
hivez.core.activate_place = (function activate_place(places,place){om.core.transact_BANG_.call(null,places,(function (places__$1){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__43056_SHARP_){return cljs.core.assoc.call(null,p1__43056_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),false);
}),places__$1));
}));
return om.core.update_BANG_.call(null,place,new cljs.core.Keyword(null,"active","active",1895962068),true);
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),hivez.core.pos_key.call(null,pos),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.util.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"notes","notes",-1039600523),"",new cljs.core.Keyword(null,"active","active",1895962068),true], null);
});
hivez.core.add_hive = (function add_hive(owner,data,pos){var temp__4126__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));if(cljs.core.truth_(temp__4126__auto__))
{var active = temp__4126__auto__;var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),active,new cljs.core.Keyword(null,"hives","hives",-1303225483)], null),((function (hive,active,temp__4126__auto__){
return (function (p1__43057_SHARP_){return cljs.core.assoc.call(null,p1__43057_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive,active,temp__4126__auto__))
);
return hivez.db.db_add.call(null,active.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
} else
{return null;
}
});
hivez.core.activate_hive = (function activate_hive(place,hive){om.core.transact_BANG_.call(null,place,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (hives){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13285__auto__ = (function iter__43066(s__43067){return (new cljs.core.LazySeq(null,(function (){var s__43067__$1 = s__43067;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__43067__$1);if(temp__4126__auto__)
{var s__43067__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43067__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__43067__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__43069 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__43068 = (0);while(true){
if((i__43068 < size__13284__auto__))
{var vec__43072 = cljs.core._nth.call(null,c__13283__auto__,i__43068);var k = cljs.core.nth.call(null,vec__43072,(0),null);var v = cljs.core.nth.call(null,vec__43072,(1),null);cljs.core.chunk_append.call(null,b__43069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"active","active",1895962068),false)], null));
{
var G__43074 = (i__43068 + (1));
i__43068 = G__43074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43069),iter__43066.call(null,cljs.core.chunk_rest.call(null,s__43067__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43069),null);
}
} else
{var vec__43073 = cljs.core.first.call(null,s__43067__$2);var k = cljs.core.nth.call(null,vec__43073,(0),null);var v = cljs.core.nth.call(null,vec__43073,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"active","active",1895962068),false)], null),iter__43066.call(null,cljs.core.rest.call(null,s__43067__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__13285__auto__.call(null,hives);
})());
}));
return om.core.update_BANG_.call(null,hive,new cljs.core.Keyword(null,"active","active",1895962068),true);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_43077 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_43077){
return (function (p1__43075_SHARP_){return cljs.core.dissoc.call(null,p1__43075_SHARP_,cljs.core.last.call(null,path));
});})(hive_43077))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_43077,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__43076_SHARP_){return cljs.core.dissoc.call(null,p1__43076_SHARP_,cljs.core.last.call(null,path));
}));
}
return hivez.core.db_delete_hive.call(null,cljs.core.last.call(null,path));
});
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
hivez.core.on_edit = (function on_edit(cb,data,key,owner){om.core.update_BANG_.call(null,data,key,goog.string.unescapeEntities(om.core.get_node.call(null,owner,key).innerHTML));
hivez.db.db_add.call(null,cljs.core.dissoc.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hivez.core.app_state)))),new cljs.core.Keyword(null,"active","active",1895962068)));
return cb.call(null);
});
hivez.core.input_control = (function input_control(data,owner,p__43078){var map__43086 = p__43078;var map__43086__$1 = ((cljs.core.seq_QMARK_.call(null,map__43086))?cljs.core.apply.call(null,cljs.core.hash_map,map__43086):map__43086);var opts = map__43086__$1;var on_edit = cljs.core.get.call(null,map__43086__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t43087 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43087 = (function (on_edit,opts,map__43086,p__43078,owner,data,input_control,meta43088){
this.on_edit = on_edit;
this.opts = opts;
this.map__43086 = map__43086;
this.p__43078 = p__43078;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta43088 = meta43088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43087.cljs$lang$type = true;
hivez.core.t43087.cljs$lang$ctorStr = "hivez.core/t43087";
hivez.core.t43087.cljs$lang$ctorPrWriter = ((function (map__43086,map__43086__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43087");
});})(map__43086,map__43086__$1,opts,on_edit))
;
hivez.core.t43087.prototype.om$core$IRenderState$ = true;
hivez.core.t43087.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__43086,map__43086__$1,opts,on_edit){
return (function (_,p__43090){var self__ = this;
var map__43091 = p__43090;var map__43091__$1 = ((cljs.core.seq_QMARK_.call(null,map__43091))?cljs.core.apply.call(null,cljs.core.hash_map,map__43091):map__43091);var editing = cljs.core.get.call(null,map__43091__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__43092 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__43092) {
case "notes":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__43092,___$1,map__43091,map__43091__$1,editing,map__43086,map__43086__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__43092,___$1,map__43091,map__43091__$1,editing,map__43086,map__43086__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__43086,map__43086__$1,opts,on_edit))
;
hivez.core.t43087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43086,map__43086__$1,opts,on_edit){
return (function (_43089){var self__ = this;
var _43089__$1 = this;return self__.meta43088;
});})(map__43086,map__43086__$1,opts,on_edit))
;
hivez.core.t43087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43086,map__43086__$1,opts,on_edit){
return (function (_43089,meta43088__$1){var self__ = this;
var _43089__$1 = this;return (new hivez.core.t43087(self__.on_edit,self__.opts,self__.map__43086,self__.p__43078,self__.owner,self__.data,self__.input_control,meta43088__$1));
});})(map__43086,map__43086__$1,opts,on_edit))
;
hivez.core.__GT_t43087 = ((function (map__43086,map__43086__$1,opts,on_edit){
return (function __GT_t43087(on_edit__$1,opts__$1,map__43086__$2,p__43078__$1,owner__$1,data__$1,input_control__$1,meta43088){return (new hivez.core.t43087(on_edit__$1,opts__$1,map__43086__$2,p__43078__$1,owner__$1,data__$1,input_control__$1,meta43088));
});})(map__43086,map__43086__$1,opts,on_edit))
;
}
return (new hivez.core.t43087(on_edit,opts,map__43086__$1,p__43078,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__43094){var map__43099 = p__43094;var map__43099__$1 = ((cljs.core.seq_QMARK_.call(null,map__43099))?cljs.core.apply.call(null,cljs.core.hash_map,map__43099):map__43099);var opts = map__43099__$1;var action = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"action","action",-811238024));if(typeof hivez.core.t43100 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43100 = (function (action,opts,map__43099,p__43094,owner,data,name_select,meta43101){
this.action = action;
this.opts = opts;
this.map__43099 = map__43099;
this.p__43094 = p__43094;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta43101 = meta43101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43100.cljs$lang$type = true;
hivez.core.t43100.cljs$lang$ctorStr = "hivez.core/t43100";
hivez.core.t43100.cljs$lang$ctorPrWriter = ((function (map__43099,map__43099__$1,opts,action){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43100");
});})(map__43099,map__43099__$1,opts,action))
;
hivez.core.t43100.prototype.om$core$IRender$ = true;
hivez.core.t43100.prototype.om$core$IRender$render$arity$1 = ((function (map__43099,map__43099__$1,opts,action){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__43099,map__43099__$1,opts,action){
return (function (){return self__.action.call(null,self__.data);
});})(this__14154__auto____$1,map__43099,map__43099__$1,opts,action))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__43099,map__43099__$1,opts,action))
;
hivez.core.t43100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43099,map__43099__$1,opts,action){
return (function (_43102){var self__ = this;
var _43102__$1 = this;return self__.meta43101;
});})(map__43099,map__43099__$1,opts,action))
;
hivez.core.t43100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43099,map__43099__$1,opts,action){
return (function (_43102,meta43101__$1){var self__ = this;
var _43102__$1 = this;return (new hivez.core.t43100(self__.action,self__.opts,self__.map__43099,self__.p__43094,self__.owner,self__.data,self__.name_select,meta43101__$1));
});})(map__43099,map__43099__$1,opts,action))
;
hivez.core.__GT_t43100 = ((function (map__43099,map__43099__$1,opts,action){
return (function __GT_t43100(action__$1,opts__$1,map__43099__$2,p__43094__$1,owner__$1,data__$1,name_select__$1,meta43101){return (new hivez.core.t43100(action__$1,opts__$1,map__43099__$2,p__43094__$1,owner__$1,data__$1,name_select__$1,meta43101));
});})(map__43099,map__43099__$1,opts,action))
;
}
return (new hivez.core.t43100(action,opts,map__43099__$1,p__43094,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t43106 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43106 = (function (owner,places,places_info,meta43107){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta43107 = meta43107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43106.cljs$lang$type = true;
hivez.core.t43106.cljs$lang$ctorStr = "hivez.core/t43106";
hivez.core.t43106.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43106");
});
hivez.core.t43106.prototype.om$core$IRender$ = true;
hivez.core.t43106.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "places"},cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},hivez.core.k,om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.call(null,hivez.core.activate_place,self__.places)], null)], null))));
});
hivez.core.t43106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43108){var self__ = this;
var _43108__$1 = this;return self__.meta43107;
});
hivez.core.t43106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43108,meta43107__$1){var self__ = this;
var _43108__$1 = this;return (new hivez.core.t43106(self__.owner,self__.places,self__.places_info,meta43107__$1));
});
hivez.core.__GT_t43106 = (function __GT_t43106(owner__$1,places__$1,places_info__$1,meta43107){return (new hivez.core.t43106(owner__$1,places__$1,places_info__$1,meta43107));
});
}
return (new hivez.core.t43106(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__43109){var map__43114 = p__43109;var map__43114__$1 = ((cljs.core.seq_QMARK_.call(null,map__43114))?cljs.core.apply.call(null,cljs.core.hash_map,map__43114):map__43114);var opts = map__43114__$1;var begin_edit = cljs.core.get.call(null,map__43114__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t43115 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43115 = (function (begin_edit,opts,map__43114,p__43109,owner,place,place_info,meta43116){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__43114 = map__43114;
this.p__43109 = p__43109;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta43116 = meta43116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43115.cljs$lang$type = true;
hivez.core.t43115.cljs$lang$ctorStr = "hivez.core/t43115";
hivez.core.t43115.cljs$lang$ctorPrWriter = ((function (map__43114,map__43114__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43115");
});})(map__43114,map__43114__$1,opts,begin_edit))
;
hivez.core.t43115.prototype.om$core$IRender$ = true;
hivez.core.t43115.prototype.om$core$IRender$render$arity$1 = ((function (map__43114,map__43114__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (___$1,map__43114,map__43114__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__43114,map__43114__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},React.DOM.span(null,"hives: "),om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.call(null,hivez.core.activate_hive,self__.place)], null)], null))));
});})(map__43114,map__43114__$1,opts,begin_edit))
;
hivez.core.t43115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43114,map__43114__$1,opts,begin_edit){
return (function (_43117){var self__ = this;
var _43117__$1 = this;return self__.meta43116;
});})(map__43114,map__43114__$1,opts,begin_edit))
;
hivez.core.t43115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43114,map__43114__$1,opts,begin_edit){
return (function (_43117,meta43116__$1){var self__ = this;
var _43117__$1 = this;return (new hivez.core.t43115(self__.begin_edit,self__.opts,self__.map__43114,self__.p__43109,self__.owner,self__.place,self__.place_info,meta43116__$1));
});})(map__43114,map__43114__$1,opts,begin_edit))
;
hivez.core.__GT_t43115 = ((function (map__43114,map__43114__$1,opts,begin_edit){
return (function __GT_t43115(begin_edit__$1,opts__$1,map__43114__$2,p__43109__$1,owner__$1,place__$1,place_info__$1,meta43116){return (new hivez.core.t43115(begin_edit__$1,opts__$1,map__43114__$2,p__43109__$1,owner__$1,place__$1,place_info__$1,meta43116));
});})(map__43114,map__43114__$1,opts,begin_edit))
;
}
return (new hivez.core.t43115(begin_edit,opts,map__43114__$1,p__43109,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__43118){var map__43123 = p__43118;var map__43123__$1 = ((cljs.core.seq_QMARK_.call(null,map__43123))?cljs.core.apply.call(null,cljs.core.hash_map,map__43123):map__43123);var opts = map__43123__$1;var begin_edit = cljs.core.get.call(null,map__43123__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t43124 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43124 = (function (begin_edit,opts,map__43123,p__43118,owner,hive,hive_info,meta43125){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__43123 = map__43123;
this.p__43118 = p__43118;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta43125 = meta43125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43124.cljs$lang$type = true;
hivez.core.t43124.cljs$lang$ctorStr = "hivez.core/t43124";
hivez.core.t43124.cljs$lang$ctorPrWriter = ((function (map__43123,map__43123__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43124");
});})(map__43123,map__43123__$1,opts,begin_edit))
;
hivez.core.t43124.prototype.om$core$IRender$ = true;
hivez.core.t43124.prototype.om$core$IRender$render$arity$1 = ((function (map__43123,map__43123__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__43123,map__43123__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__43123,map__43123__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__43123,map__43123__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__43123,map__43123__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__43123,map__43123__$1,opts,begin_edit))
;
hivez.core.t43124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43123,map__43123__$1,opts,begin_edit){
return (function (_43126){var self__ = this;
var _43126__$1 = this;return self__.meta43125;
});})(map__43123,map__43123__$1,opts,begin_edit))
;
hivez.core.t43124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43123,map__43123__$1,opts,begin_edit){
return (function (_43126,meta43125__$1){var self__ = this;
var _43126__$1 = this;return (new hivez.core.t43124(self__.begin_edit,self__.opts,self__.map__43123,self__.p__43118,self__.owner,self__.hive,self__.hive_info,meta43125__$1));
});})(map__43123,map__43123__$1,opts,begin_edit))
;
hivez.core.__GT_t43124 = ((function (map__43123,map__43123__$1,opts,begin_edit){
return (function __GT_t43124(begin_edit__$1,opts__$1,map__43123__$2,p__43118__$1,owner__$1,hive__$1,hive_info__$1,meta43125){return (new hivez.core.t43124(begin_edit__$1,opts__$1,map__43123__$2,p__43118__$1,owner__$1,hive__$1,hive_info__$1,meta43125));
});})(map__43123,map__43123__$1,opts,begin_edit))
;
}
return (new hivez.core.t43124(begin_edit,opts,map__43123__$1,p__43118,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__43128){var map__43135 = p__43128;var map__43135__$1 = ((cljs.core.seq_QMARK_.call(null,map__43135))?cljs.core.apply.call(null,cljs.core.hash_map,map__43135):map__43135);var opts = map__43135__$1;var toggle_open = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t43136 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43136 = (function (toggle_open,opts,map__43135,p__43128,owner,data,navicon,meta43137){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__43135 = map__43135;
this.p__43128 = p__43128;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta43137 = meta43137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43136.cljs$lang$type = true;
hivez.core.t43136.cljs$lang$ctorStr = "hivez.core/t43136";
hivez.core.t43136.cljs$lang$ctorPrWriter = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43136");
});})(map__43135,map__43135__$1,opts,toggle_open))
;
hivez.core.t43136.prototype.om$core$IRenderState$ = true;
hivez.core.t43136.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function (_,p__43139){var self__ = this;
var map__43140 = p__43139;var map__43140__$1 = ((cljs.core.seq_QMARK_.call(null,map__43140))?cljs.core.apply.call(null,cljs.core.hash_map,map__43140):map__43140);var editing = cljs.core.get.call(null,map__43140__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__43140__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__43140,map__43140__$1,editing,active,map__43135,map__43135__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__43140,map__43140__$1,editing,active,map__43135,map__43135__$1,opts,toggle_open){
return (function (p1__43127_SHARP_){return cljs.core.not.call(null,p1__43127_SHARP_);
});})(___$1,map__43140,map__43140__$1,editing,active,map__43135,map__43135__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__43140,map__43140__$1,editing,active,map__43135,map__43135__$1,opts,toggle_open))
, "style": hivez.util.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__43135,map__43135__$1,opts,toggle_open))
;
hivez.core.t43136.prototype.om$core$IInitState$ = true;
hivez.core.t43136.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__43135,map__43135__$1,opts,toggle_open))
;
hivez.core.t43136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function (_43138){var self__ = this;
var _43138__$1 = this;return self__.meta43137;
});})(map__43135,map__43135__$1,opts,toggle_open))
;
hivez.core.t43136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function (_43138,meta43137__$1){var self__ = this;
var _43138__$1 = this;return (new hivez.core.t43136(self__.toggle_open,self__.opts,self__.map__43135,self__.p__43128,self__.owner,self__.data,self__.navicon,meta43137__$1));
});})(map__43135,map__43135__$1,opts,toggle_open))
;
hivez.core.__GT_t43136 = ((function (map__43135,map__43135__$1,opts,toggle_open){
return (function __GT_t43136(toggle_open__$1,opts__$1,map__43135__$2,p__43128__$1,owner__$1,data__$1,navicon__$1,meta43137){return (new hivez.core.t43136(toggle_open__$1,opts__$1,map__43135__$2,p__43128__$1,owner__$1,data__$1,navicon__$1,meta43137));
});})(map__43135,map__43135__$1,opts,toggle_open))
;
}
return (new hivez.core.t43136(toggle_open,opts,map__43135__$1,p__43128,owner,data,navicon,null));
});
hivez.core.back_btn = (function back_btn(active,owner){if(typeof hivez.core.t43144 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43144 = (function (owner,active,back_btn,meta43145){
this.owner = owner;
this.active = active;
this.back_btn = back_btn;
this.meta43145 = meta43145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43144.cljs$lang$type = true;
hivez.core.t43144.cljs$lang$ctorStr = "hivez.core/t43144";
hivez.core.t43144.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43144");
});
hivez.core.t43144.prototype.om$core$IRender$ = true;
hivez.core.t43144.prototype.om$core$IRender$render$arity$1 = (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14154__auto____$1){
return (function (){return om.core.update_BANG_.call(null,self__.active,new cljs.core.Keyword(null,"active","active",1895962068),false);
});})(this__14154__auto____$1))
, "className": "icon-arrow-left2", "id": "nav-back-btn"});
});
hivez.core.t43144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43146){var self__ = this;
var _43146__$1 = this;return self__.meta43145;
});
hivez.core.t43144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43146,meta43145__$1){var self__ = this;
var _43146__$1 = this;return (new hivez.core.t43144(self__.owner,self__.active,self__.back_btn,meta43145__$1));
});
hivez.core.__GT_t43144 = (function __GT_t43144(owner__$1,active__$1,back_btn__$1,meta43145){return (new hivez.core.t43144(owner__$1,active__$1,back_btn__$1,meta43145));
});
}
return (new hivez.core.t43144(owner,active,back_btn,null));
});
hivez.core.add_place_btn = (function add_place_btn(places,owner){if(typeof hivez.core.t43150 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43150 = (function (owner,places,add_place_btn,meta43151){
this.owner = owner;
this.places = places;
this.add_place_btn = add_place_btn;
this.meta43151 = meta43151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43150.cljs$lang$type = true;
hivez.core.t43150.cljs$lang$ctorStr = "hivez.core/t43150";
hivez.core.t43150.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43150");
});
hivez.core.t43150.prototype.om$core$IRender$ = true;
hivez.core.t43150.prototype.om$core$IRender$render$arity$1 = (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14154__auto____$1){
return (function (){return hivez.core.add_place.call(null,self__.places);
});})(this__14154__auto____$1))
, "className": "icon-plus", "id": "nav-add-btn"});
});
hivez.core.t43150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43152){var self__ = this;
var _43152__$1 = this;return self__.meta43151;
});
hivez.core.t43150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43152,meta43151__$1){var self__ = this;
var _43152__$1 = this;return (new hivez.core.t43150(self__.owner,self__.places,self__.add_place_btn,meta43151__$1));
});
hivez.core.__GT_t43150 = (function __GT_t43150(owner__$1,places__$1,add_place_btn__$1,meta43151){return (new hivez.core.t43150(owner__$1,places__$1,add_place_btn__$1,meta43151));
});
}
return (new hivez.core.t43150(owner,places,add_place_btn,null));
});
hivez.core.control_panel = (function control_panel(active,owner,p__43154){var map__43161 = p__43154;var map__43161__$1 = ((cljs.core.seq_QMARK_.call(null,map__43161))?cljs.core.apply.call(null,cljs.core.hash_map,map__43161):map__43161);var opts = map__43161__$1;var path = cljs.core.get.call(null,map__43161__$1,new cljs.core.Keyword(null,"path","path",-188191168));var control_fn = cljs.core.get.call(null,map__43161__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));if(typeof hivez.core.t43162 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43162 = (function (control_fn,path,opts,map__43161,p__43154,owner,active,control_panel,meta43163){
this.control_fn = control_fn;
this.path = path;
this.opts = opts;
this.map__43161 = map__43161;
this.p__43154 = p__43154;
this.owner = owner;
this.active = active;
this.control_panel = control_panel;
this.meta43163 = meta43163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43162.cljs$lang$type = true;
hivez.core.t43162.cljs$lang$ctorStr = "hivez.core/t43162";
hivez.core.t43162.cljs$lang$ctorPrWriter = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43162");
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.t43162.prototype.om$core$IRenderState$ = true;
hivez.core.t43162.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (_,p__43165){var self__ = this;
var map__43166 = p__43165;var map__43166__$1 = ((cljs.core.seq_QMARK_.call(null,map__43166))?cljs.core.apply.call(null,cljs.core.hash_map,map__43166):map__43166);var path_str = cljs.core.get.call(null,map__43166__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var editing = cljs.core.get.call(null,map__43166__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__43166__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.util.display_fade_in.call(null,(function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),om.core.build.call(null,self__.control_fn,self__.active)),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.t43162.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t43162.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (___$1,map__43161,map__43161__$1,opts,path,control_fn){
return (function (p1__43153_SHARP_){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,hivez.core.app_state),p1__43153_SHARP_));
});})(___$1,map__43161,map__43161__$1,opts,path,control_fn))
,(function (){var ks = om.core.path.call(null,next_props);var result = cljs.core.List.EMPTY;while(true){
if(!(cljs.core.empty_QMARK_.call(null,ks)))
{{
var G__43167 = cljs.core.drop_last.call(null,(2),ks);
var G__43168 = cljs.core.conj.call(null,result,ks);
ks = G__43167;
result = G__43168;
continue;
}
} else
{return result;
}
break;
}
})())));
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.t43162.prototype.om$core$InitState$ = true;
hivez.core.t43162.prototype.om$core$InitState$init_state$arity$1 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.t43162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (_43164){var self__ = this;
var _43164__$1 = this;return self__.meta43163;
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.t43162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function (_43164,meta43163__$1){var self__ = this;
var _43164__$1 = this;return (new hivez.core.t43162(self__.control_fn,self__.path,self__.opts,self__.map__43161,self__.p__43154,self__.owner,self__.active,self__.control_panel,meta43163__$1));
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
hivez.core.__GT_t43162 = ((function (map__43161,map__43161__$1,opts,path,control_fn){
return (function __GT_t43162(control_fn__$1,path__$1,opts__$1,map__43161__$2,p__43154__$1,owner__$1,active__$1,control_panel__$1,meta43163){return (new hivez.core.t43162(control_fn__$1,path__$1,opts__$1,map__43161__$2,p__43154__$1,owner__$1,active__$1,control_panel__$1,meta43163));
});})(map__43161,map__43161__$1,opts,path,control_fn))
;
}
return (new hivez.core.t43162(control_fn,path,opts,map__43161__$1,p__43154,owner,active,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.drawer = (function drawer(active,owner,p__43169){var map__43176 = p__43169;var map__43176__$1 = ((cljs.core.seq_QMARK_.call(null,map__43176))?cljs.core.apply.call(null,cljs.core.hash_map,map__43176):map__43176);var opts = map__43176__$1;var path = cljs.core.get.call(null,map__43176__$1,new cljs.core.Keyword(null,"path","path",-188191168));var control_fn = cljs.core.get.call(null,map__43176__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));var child_fn = cljs.core.get.call(null,map__43176__$1,new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481));if(typeof hivez.core.t43177 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43177 = (function (child_fn,control_fn,path,opts,map__43176,p__43169,owner,active,drawer,meta43178){
this.child_fn = child_fn;
this.control_fn = control_fn;
this.path = path;
this.opts = opts;
this.map__43176 = map__43176;
this.p__43169 = p__43169;
this.owner = owner;
this.active = active;
this.drawer = drawer;
this.meta43178 = meta43178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43177.cljs$lang$type = true;
hivez.core.t43177.cljs$lang$ctorStr = "hivez.core/t43177";
hivez.core.t43177.cljs$lang$ctorPrWriter = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43177");
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
hivez.core.t43177.prototype.om$core$IRenderState$ = true;
hivez.core.t43177.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (_,p__43180){var self__ = this;
var map__43181 = p__43180;var map__43181__$1 = ((cljs.core.seq_QMARK_.call(null,map__43181))?cljs.core.apply.call(null,cljs.core.hash_map,map__43181):map__43181);var orientation = cljs.core.get.call(null,map__43181__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));var editing = cljs.core.get.call(null,map__43181__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__43181__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner),new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),self__.control_fn,new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(editing)?om.core.build.call(null,hivez.core.input_control,self__.active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__43181,map__43181__$1,orientation,editing,open,map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__43181,map__43181__$1,orientation,editing,open,map__43176,map__43176__$1,opts,path,control_fn,child_fn))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orientation)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},om.core.build.call(null,self__.child_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null))));
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
hivez.core.t43177.prototype.om$core$IInitState$ = true;
hivez.core.t43177.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
hivez.core.t43177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (_43179){var self__ = this;
var _43179__$1 = this;return self__.meta43178;
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
hivez.core.t43177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function (_43179,meta43178__$1){var self__ = this;
var _43179__$1 = this;return (new hivez.core.t43177(self__.child_fn,self__.control_fn,self__.path,self__.opts,self__.map__43176,self__.p__43169,self__.owner,self__.active,self__.drawer,meta43178__$1));
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
hivez.core.__GT_t43177 = ((function (map__43176,map__43176__$1,opts,path,control_fn,child_fn){
return (function __GT_t43177(child_fn__$1,control_fn__$1,path__$1,opts__$1,map__43176__$2,p__43169__$1,owner__$1,active__$1,drawer__$1,meta43178){return (new hivez.core.t43177(child_fn__$1,control_fn__$1,path__$1,opts__$1,map__43176__$2,p__43169__$1,owner__$1,active__$1,drawer__$1,meta43178));
});})(map__43176,map__43176__$1,opts,path,control_fn,child_fn))
;
}
return (new hivez.core.t43177(child_fn,control_fn,path,opts,map__43176__$1,p__43169,owner,active,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t43185 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t43185 = (function (owner,data,app,meta43186){
this.owner = owner;
this.data = data;
this.app = app;
this.meta43186 = meta43186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t43185.cljs$lang$type = true;
hivez.core.t43185.cljs$lang$ctorStr = "hivez.core/t43185";
hivez.core.t43185.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t43185");
});
hivez.core.t43185.prototype.om$core$IRender$ = true;
hivez.core.t43185.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),(function (){var active_place = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data)));var active_hive = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(active_place))));if(cljs.core.truth_(active_hive))
{return om.core.build.call(null,hivez.core.drawer,active_hive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.hive_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"path","path",-188191168),":hive"], null)], null));
} else
{if(cljs.core.truth_(active_place))
{return om.core.build.call(null,hivez.core.drawer,active_place,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.place_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"path","path",-188191168),":place"], null)], null));
} else
{return om.core.build.call(null,hivez.core.drawer,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.places_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.add_place_btn,new cljs.core.Keyword(null,"path","path",-188191168),":places"], null)], null));

}
}
})());
});
hivez.core.t43185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43187){var self__ = this;
var _43187__$1 = this;return self__.meta43186;
});
hivez.core.t43185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43187,meta43186__$1){var self__ = this;
var _43187__$1 = this;return (new hivez.core.t43185(self__.owner,self__.data,self__.app,meta43186__$1));
});
hivez.core.__GT_t43185 = (function __GT_t43185(owner__$1,data__$1,app__$1,meta43186){return (new hivez.core.t43185(owner__$1,data__$1,app__$1,meta43186));
});
}
return (new hivez.core.t43185(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.orientation.call(null);
window.addEventListener("resize",hivez.core.orientation);
return hivez.db.db_new.call(null,(function (){return hivez.db.db_get_all.call(null,(function (result){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (m){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),(function (p1__43188_SHARP_){return cljs.core.conj.call(null,p1__43188_SHARP_,cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
}));
}),(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map