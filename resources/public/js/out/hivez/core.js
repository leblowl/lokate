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
cljs.core.enable_console_print_BANG_();
hivez.core.app_state = (function (){var G__15989 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$84,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$77,null], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15989) : cljs.core.atom.call(null,G__15989));
})();
hivez.core.orientation = (function orientation(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,(function (p1__15990_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15990_SHARP_,cljs.core.constant$keyword$96,(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(lat_lng))));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__15991_SHARP_){return hivez.util.distance(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(hive),cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__15991_SHARP_)));
}),cljs.core.seq(hives));
});
hivez.core.new_place = (function new_place(id){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,"",cljs.core.constant$keyword$89,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$94,id], null);
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$59,hivez.core.pos_key(pos),cljs.core.constant$keyword$80,"",cljs.core.constant$keyword$97,hivez.util.fdate_now(),cljs.core.constant$keyword$74,pos,cljs.core.constant$keyword$98,""], null);
});
hivez.core.tselect = (function tselect(data,type_key,select_path){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_key,cljs.core.constant$keyword$77))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$83,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),select_path)));
} else
{}
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,type_key,(function (p1__15992_SHARP_){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15992_SHARP_,select_path)))
{return select_path;
} else
{return null;
}
}));
});
hivez.core.delete$ = (function delete$(data,type_key,select_path){om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.pop(select_path),(function (p1__15993_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15993_SHARP_,cljs.core.peek(select_path));
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,type_key,null);
});
hivez.core.add_hive = (function add_hive(data,pos){var temp__4126__auto__ = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((function (){var G__15997 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15997) : cljs.core.deref.call(null,G__15997));
})());if(cljs.core.truth_(temp__4126__auto__))
{var select_path = temp__4126__auto__;var hive = hivez.core.new_hive(pos);om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,select_path,((function (hive,select_path,temp__4126__auto__){
return (function (p1__15994_SHARP_){return cljs.core.assoc_in(p1__15994_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(hive)], null),hive);
});})(hive,select_path,temp__4126__auto__))
);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$77,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(select_path,cljs.core.constant$keyword$89,cljs.core.array_seq([cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(hive)], 0)));
return hivez.db.db_add(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__15998 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15998) : cljs.core.deref.call(null,G__15998));
})(),select_path));
} else
{return null;
}
});
hivez.core.add_place = (function add_place(data){var id = cljs.core.count(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1((function (){var G__16003 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16003) : cljs.core.deref.call(null,G__16003));
})()));om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$84,((function (id){
return (function (p1__15999_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15999_SHARP_,hivez.core.new_place(id));
});})(id))
);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$83,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,id], null));
return hivez.db.db_add(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16004 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16004) : cljs.core.deref.call(null,G__16004));
})(),cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((function (){var G__16005 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16005) : cljs.core.deref.call(null,G__16005));
})())));
});
hivez.core.display_pos = (function display_pos(hive){var pos = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(pos)], 0)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(pos)], 0))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$99,edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$99,null);
});
hivez.core.on_edit = (function on_edit(cb,data,key,owner){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,key,(function (){var G__16009 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,key).innerHTML;return goog.string.unescapeEntities(G__16009);
})());
hivez.db.db_add(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16010 = hivez.core.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16010) : cljs.core.deref.call(null,G__16010));
})(),cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1((function (){var G__16011 = hivez.core.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16011) : cljs.core.deref.call(null,G__16011));
})())));
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
hivez.core.input_control = (function input_control(data,owner,p__16012){var map__16022 = p__16012;var map__16022__$1 = ((cljs.core.seq_QMARK_(map__16022))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16022):map__16022);var opts = map__16022__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16022__$1,cljs.core.constant$keyword$91);if(typeof hivez.core.t16023 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16023 = (function (on_edit,opts,map__16022,p__16012,owner,data,input_control,meta16024){
this.on_edit = on_edit;
this.opts = opts;
this.map__16022 = map__16022;
this.p__16012 = p__16012;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta16024 = meta16024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16023.cljs$lang$type = true;
hivez.core.t16023.cljs$lang$ctorStr = "hivez.core/t16023";
hivez.core.t16023.cljs$lang$ctorPrWriter = ((function (map__16022,map__16022__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16023");
});})(map__16022,map__16022__$1,opts,on_edit))
;
hivez.core.t16023.prototype.om$core$IRenderState$ = true;
hivez.core.t16023.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16022,map__16022__$1,opts,on_edit){
return (function (_,p__16026){var self__ = this;
var map__16027 = p__16026;var map__16027__$1 = ((cljs.core.seq_QMARK_(map__16027))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16027):map__16027);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16027__$1,cljs.core.constant$keyword$99);var ___$1 = this;var G__16028 = {"id": "input-ctrl"};var G__16029 = (function (){var G__16030 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__16030) {
case "notes":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$94,"notes-input",cljs.core.constant$keyword$93,"notes input",cljs.core.constant$keyword$92,cljs.core.constant$keyword$98,cljs.core.constant$keyword$91,self__.on_edit], null)], null));

break;
case "name":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$94,"name-input",cljs.core.constant$keyword$93,"name input single-line",cljs.core.constant$keyword$92,cljs.core.constant$keyword$80,cljs.core.constant$keyword$91,self__.on_edit,cljs.core.constant$keyword$90,((function (G__16030,G__16028,___$1,map__16027,map__16027__$1,editing,map__16022,map__16022__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__16030,G__16028,___$1,map__16027,map__16027__$1,editing,map__16022,map__16022__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})();return React.DOM.div(G__16028,G__16029);
});})(map__16022,map__16022__$1,opts,on_edit))
;
hivez.core.t16023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16022,map__16022__$1,opts,on_edit){
return (function (_16025){var self__ = this;
var _16025__$1 = this;return self__.meta16024;
});})(map__16022,map__16022__$1,opts,on_edit))
;
hivez.core.t16023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16022,map__16022__$1,opts,on_edit){
return (function (_16025,meta16024__$1){var self__ = this;
var _16025__$1 = this;return (new hivez.core.t16023(self__.on_edit,self__.opts,self__.map__16022,self__.p__16012,self__.owner,self__.data,self__.input_control,meta16024__$1));
});})(map__16022,map__16022__$1,opts,on_edit))
;
hivez.core.__GT_t16023 = ((function (map__16022,map__16022__$1,opts,on_edit){
return (function __GT_t16023(on_edit__$1,opts__$1,map__16022__$2,p__16012__$1,owner__$1,data__$1,input_control__$1,meta16024){return (new hivez.core.t16023(on_edit__$1,opts__$1,map__16022__$2,p__16012__$1,owner__$1,data__$1,input_control__$1,meta16024));
});})(map__16022,map__16022__$1,opts,on_edit))
;
}
return (new hivez.core.t16023(on_edit,opts,map__16022__$1,p__16012,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__16032){var map__16042 = p__16032;var map__16042__$1 = ((cljs.core.seq_QMARK_(map__16042))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16042):map__16042);var opts = map__16042__$1;var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16042__$1,cljs.core.constant$keyword$100);if(typeof hivez.core.t16043 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16043 = (function (type_key,opts,map__16042,p__16032,owner,data,name_select,meta16044){
this.type_key = type_key;
this.opts = opts;
this.map__16042 = map__16042;
this.p__16032 = p__16032;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta16044 = meta16044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16043.cljs$lang$type = true;
hivez.core.t16043.cljs$lang$ctorStr = "hivez.core/t16043";
hivez.core.t16043.cljs$lang$ctorPrWriter = ((function (map__16042,map__16042__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16043");
});})(map__16042,map__16042__$1,opts,type_key))
;
hivez.core.t16043.prototype.om$core$IRender$ = true;
hivez.core.t16043.prototype.om$core$IRender$render$arity$1 = ((function (map__16042,map__16042__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;var G__16046 = {"onClick": ((function (this__5247__auto____$1,map__16042,map__16042__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,self__.type_key,(function (){var G__16048 = self__.data;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__16048) : om.core.path.call(null,G__16048));
})()], null));
});})(this__5247__auto____$1,map__16042,map__16042__$1,opts,type_key))
, "className": "name-select"};var G__16047 = (function (){var G__16049 = {"className": "name-select-title"};var G__16050 = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.span(G__16049,G__16050);
})();return React.DOM.a(G__16046,G__16047);
});})(map__16042,map__16042__$1,opts,type_key))
;
hivez.core.t16043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16042,map__16042__$1,opts,type_key){
return (function (_16045){var self__ = this;
var _16045__$1 = this;return self__.meta16044;
});})(map__16042,map__16042__$1,opts,type_key))
;
hivez.core.t16043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16042,map__16042__$1,opts,type_key){
return (function (_16045,meta16044__$1){var self__ = this;
var _16045__$1 = this;return (new hivez.core.t16043(self__.type_key,self__.opts,self__.map__16042,self__.p__16032,self__.owner,self__.data,self__.name_select,meta16044__$1));
});})(map__16042,map__16042__$1,opts,type_key))
;
hivez.core.__GT_t16043 = ((function (map__16042,map__16042__$1,opts,type_key){
return (function __GT_t16043(type_key__$1,opts__$1,map__16042__$2,p__16032__$1,owner__$1,data__$1,name_select__$1,meta16044){return (new hivez.core.t16043(type_key__$1,opts__$1,map__16042__$2,p__16032__$1,owner__$1,data__$1,name_select__$1,meta16044));
});})(map__16042,map__16042__$1,opts,type_key))
;
}
return (new hivez.core.t16043(type_key,opts,map__16042__$1,p__16032,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t16056 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16056 = (function (owner,places,places_info,meta16057){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta16057 = meta16057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16056.cljs$lang$type = true;
hivez.core.t16056.cljs$lang$ctorStr = "hivez.core/t16056";
hivez.core.t16056.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16056");
});
hivez.core.t16056.prototype.om$core$IRender$ = true;
hivez.core.t16056.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16059 = {"id": "places"};var G__16060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "select-list"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$100,cljs.core.constant$keyword$83], null)], null)));return React.DOM.div(G__16059,G__16060);
});
hivez.core.t16056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16058){var self__ = this;
var _16058__$1 = this;return self__.meta16057;
});
hivez.core.t16056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16058,meta16057__$1){var self__ = this;
var _16058__$1 = this;return (new hivez.core.t16056(self__.owner,self__.places,self__.places_info,meta16057__$1));
});
hivez.core.__GT_t16056 = (function __GT_t16056(owner__$1,places__$1,places_info__$1,meta16057){return (new hivez.core.t16056(owner__$1,places__$1,places_info__$1,meta16057));
});
}
return (new hivez.core.t16056(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__16061){var map__16073 = p__16061;var map__16073__$1 = ((cljs.core.seq_QMARK_(map__16073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16073):map__16073);var opts = map__16073__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16073__$1,cljs.core.constant$keyword$101);if(typeof hivez.core.t16074 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16074 = (function (begin_edit,opts,map__16073,p__16061,owner,place,place_info,meta16075){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16073 = map__16073;
this.p__16061 = p__16061;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta16075 = meta16075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16074.cljs$lang$type = true;
hivez.core.t16074.cljs$lang$ctorStr = "hivez.core/t16074";
hivez.core.t16074.cljs$lang$ctorPrWriter = ((function (map__16073,map__16073__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16074");
});})(map__16073,map__16073__$1,opts,begin_edit))
;
hivez.core.t16074.prototype.om$core$IRender$ = true;
hivez.core.t16074.prototype.om$core$IRender$render$arity$1 = ((function (map__16073,map__16073__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16077 = {"className": "place-info"};var G__16078 = (function (){var G__16080 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (G__16077,___$1,map__16073,map__16073__$1,opts,begin_edit){
return (function (){var G__16081 = cljs.core.constant$keyword$80;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16081) : self__.begin_edit.call(null,G__16081));
});})(G__16077,___$1,map__16073,map__16073__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16080);
})();var G__16079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(om.dom.div,{"className": "select-list"},(function (){var G__16082 = null;var G__16083 = "hives: ";return React.DOM.span(G__16082,G__16083);
})(),om.core.build_all.cljs$core$IFn$_invoke$arity$3(hivez.core.name_select,cljs.core.vals(cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$100,cljs.core.constant$keyword$77], null)], null)));return React.DOM.div(G__16077,G__16078,G__16079);
});})(map__16073,map__16073__$1,opts,begin_edit))
;
hivez.core.t16074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16073,map__16073__$1,opts,begin_edit){
return (function (_16076){var self__ = this;
var _16076__$1 = this;return self__.meta16075;
});})(map__16073,map__16073__$1,opts,begin_edit))
;
hivez.core.t16074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16073,map__16073__$1,opts,begin_edit){
return (function (_16076,meta16075__$1){var self__ = this;
var _16076__$1 = this;return (new hivez.core.t16074(self__.begin_edit,self__.opts,self__.map__16073,self__.p__16061,self__.owner,self__.place,self__.place_info,meta16075__$1));
});})(map__16073,map__16073__$1,opts,begin_edit))
;
hivez.core.__GT_t16074 = ((function (map__16073,map__16073__$1,opts,begin_edit){
return (function __GT_t16074(begin_edit__$1,opts__$1,map__16073__$2,p__16061__$1,owner__$1,place__$1,place_info__$1,meta16075){return (new hivez.core.t16074(begin_edit__$1,opts__$1,map__16073__$2,p__16061__$1,owner__$1,place__$1,place_info__$1,meta16075));
});})(map__16073,map__16073__$1,opts,begin_edit))
;
}
return (new hivez.core.t16074(begin_edit,opts,map__16073__$1,p__16061,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__16084){var map__16102 = p__16084;var map__16102__$1 = ((cljs.core.seq_QMARK_(map__16102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16102):map__16102);var opts = map__16102__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.constant$keyword$101);if(typeof hivez.core.t16103 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16103 = (function (begin_edit,opts,map__16102,p__16084,owner,hive,hive_info,meta16104){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16102 = map__16102;
this.p__16084 = p__16084;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16104 = meta16104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16103.cljs$lang$type = true;
hivez.core.t16103.cljs$lang$ctorStr = "hivez.core/t16103";
hivez.core.t16103.cljs$lang$ctorPrWriter = ((function (map__16102,map__16102__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16103");
});})(map__16102,map__16102__$1,opts,begin_edit))
;
hivez.core.t16103.prototype.om$core$IRender$ = true;
hivez.core.t16103.prototype.om$core$IRender$render$arity$1 = ((function (map__16102,map__16102__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16106 = {"id": "info"};var G__16107 = (function (){var G__16111 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (G__16106,___$1,map__16102,map__16102__$1,opts,begin_edit){
return (function (){var G__16112 = cljs.core.constant$keyword$80;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16112) : self__.begin_edit.call(null,G__16112));
});})(G__16106,___$1,map__16102,map__16102__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16111);
})();var G__16108 = (function (){var G__16113 = {"className": "origin"};var G__16114 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16113,G__16114);
})();var G__16109 = (function (){var G__16115 = {"className": "location"};var G__16116 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16115,G__16116);
})();var G__16110 = (function (){var G__16117 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (G__16106,G__16107,G__16108,G__16109,___$1,map__16102,map__16102__$1,opts,begin_edit){
return (function (){var G__16118 = cljs.core.constant$keyword$98;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16118) : self__.begin_edit.call(null,G__16118));
});})(G__16106,G__16107,G__16108,G__16109,___$1,map__16102,map__16102__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"};return React.DOM.div(G__16117);
})();return React.DOM.div(G__16106,G__16107,G__16108,G__16109,G__16110);
});})(map__16102,map__16102__$1,opts,begin_edit))
;
hivez.core.t16103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16102,map__16102__$1,opts,begin_edit){
return (function (_16105){var self__ = this;
var _16105__$1 = this;return self__.meta16104;
});})(map__16102,map__16102__$1,opts,begin_edit))
;
hivez.core.t16103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16102,map__16102__$1,opts,begin_edit){
return (function (_16105,meta16104__$1){var self__ = this;
var _16105__$1 = this;return (new hivez.core.t16103(self__.begin_edit,self__.opts,self__.map__16102,self__.p__16084,self__.owner,self__.hive,self__.hive_info,meta16104__$1));
});})(map__16102,map__16102__$1,opts,begin_edit))
;
hivez.core.__GT_t16103 = ((function (map__16102,map__16102__$1,opts,begin_edit){
return (function __GT_t16103(begin_edit__$1,opts__$1,map__16102__$2,p__16084__$1,owner__$1,hive__$1,hive_info__$1,meta16104){return (new hivez.core.t16103(begin_edit__$1,opts__$1,map__16102__$2,p__16084__$1,owner__$1,hive__$1,hive_info__$1,meta16104));
});})(map__16102,map__16102__$1,opts,begin_edit))
;
}
return (new hivez.core.t16103(begin_edit,opts,map__16102__$1,p__16084,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__16119){var map__16127 = p__16119;var map__16127__$1 = ((cljs.core.seq_QMARK_(map__16127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16127):map__16127);var opts = map__16127__$1;var toggle_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,cljs.core.constant$keyword$102);if(typeof hivez.core.t16128 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16128 = (function (toggle_open,opts,map__16127,p__16119,owner,data,navicon,meta16129){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__16127 = map__16127;
this.p__16119 = p__16119;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta16129 = meta16129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16128.cljs$lang$type = true;
hivez.core.t16128.cljs$lang$ctorStr = "hivez.core/t16128";
hivez.core.t16128.cljs$lang$ctorPrWriter = ((function (map__16127,map__16127__$1,opts,toggle_open){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16128");
});})(map__16127,map__16127__$1,opts,toggle_open))
;
hivez.core.t16128.prototype.om$core$IRenderState$ = true;
hivez.core.t16128.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16127,map__16127__$1,opts,toggle_open){
return (function (_,p__16131){var self__ = this;
var map__16132 = p__16131;var map__16132__$1 = ((cljs.core.seq_QMARK_(map__16132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16132):map__16132);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16132__$1,cljs.core.constant$keyword$99);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16132__$1,cljs.core.constant$keyword$103);var ___$1 = this;var G__16133 = {"onClick": ((function (___$1,map__16132,map__16132__$1,editing,open,map__16127,map__16127__$1,opts,toggle_open){
return (function (){return (self__.toggle_open.cljs$core$IFn$_invoke$arity$0 ? self__.toggle_open.cljs$core$IFn$_invoke$arity$0() : self__.toggle_open.call(null));
});})(___$1,map__16132,map__16132__$1,editing,open,map__16127,map__16127__$1,opts,toggle_open))
, "style": hivez.util.display_fade_in((editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(open)?" active":null)))};return React.DOM.div(G__16133);
});})(map__16127,map__16127__$1,opts,toggle_open))
;
hivez.core.t16128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16127,map__16127__$1,opts,toggle_open){
return (function (_16130){var self__ = this;
var _16130__$1 = this;return self__.meta16129;
});})(map__16127,map__16127__$1,opts,toggle_open))
;
hivez.core.t16128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16127,map__16127__$1,opts,toggle_open){
return (function (_16130,meta16129__$1){var self__ = this;
var _16130__$1 = this;return (new hivez.core.t16128(self__.toggle_open,self__.opts,self__.map__16127,self__.p__16119,self__.owner,self__.data,self__.navicon,meta16129__$1));
});})(map__16127,map__16127__$1,opts,toggle_open))
;
hivez.core.__GT_t16128 = ((function (map__16127,map__16127__$1,opts,toggle_open){
return (function __GT_t16128(toggle_open__$1,opts__$1,map__16127__$2,p__16119__$1,owner__$1,data__$1,navicon__$1,meta16129){return (new hivez.core.t16128(toggle_open__$1,opts__$1,map__16127__$2,p__16119__$1,owner__$1,data__$1,navicon__$1,meta16129));
});})(map__16127,map__16127__$1,opts,toggle_open))
;
}
return (new hivez.core.t16128(toggle_open,opts,map__16127__$1,p__16119,owner,data,navicon,null));
});
hivez.core.back_btn = (function back_btn(active,owner,p__16134){var map__16141 = p__16134;var map__16141__$1 = ((cljs.core.seq_QMARK_(map__16141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16141):map__16141);var opts = map__16141__$1;var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16141__$1,cljs.core.constant$keyword$100);if(typeof hivez.core.t16142 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16142 = (function (type_key,opts,map__16141,p__16134,owner,active,back_btn,meta16143){
this.type_key = type_key;
this.opts = opts;
this.map__16141 = map__16141;
this.p__16134 = p__16134;
this.owner = owner;
this.active = active;
this.back_btn = back_btn;
this.meta16143 = meta16143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16142.cljs$lang$type = true;
hivez.core.t16142.cljs$lang$ctorStr = "hivez.core/t16142";
hivez.core.t16142.cljs$lang$ctorPrWriter = ((function (map__16141,map__16141__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16142");
});})(map__16141,map__16141__$1,opts,type_key))
;
hivez.core.t16142.prototype.om$core$IRender$ = true;
hivez.core.t16142.prototype.om$core$IRender$render$arity$1 = ((function (map__16141,map__16141__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;var G__16145 = {"onClick": ((function (this__5247__auto____$1,map__16141,map__16141__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,self__.type_key,(function (){var G__16146 = self__.active;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__16146) : om.core.path.call(null,G__16146));
})()], null));
});})(this__5247__auto____$1,map__16141,map__16141__$1,opts,type_key))
, "className": "icon-arrow-left2", "id": "nav-back-btn"};return React.DOM.div(G__16145);
});})(map__16141,map__16141__$1,opts,type_key))
;
hivez.core.t16142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16141,map__16141__$1,opts,type_key){
return (function (_16144){var self__ = this;
var _16144__$1 = this;return self__.meta16143;
});})(map__16141,map__16141__$1,opts,type_key))
;
hivez.core.t16142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16141,map__16141__$1,opts,type_key){
return (function (_16144,meta16143__$1){var self__ = this;
var _16144__$1 = this;return (new hivez.core.t16142(self__.type_key,self__.opts,self__.map__16141,self__.p__16134,self__.owner,self__.active,self__.back_btn,meta16143__$1));
});})(map__16141,map__16141__$1,opts,type_key))
;
hivez.core.__GT_t16142 = ((function (map__16141,map__16141__$1,opts,type_key){
return (function __GT_t16142(type_key__$1,opts__$1,map__16141__$2,p__16134__$1,owner__$1,active__$1,back_btn__$1,meta16143){return (new hivez.core.t16142(type_key__$1,opts__$1,map__16141__$2,p__16134__$1,owner__$1,active__$1,back_btn__$1,meta16143));
});})(map__16141,map__16141__$1,opts,type_key))
;
}
return (new hivez.core.t16142(type_key,opts,map__16141__$1,p__16134,owner,active,back_btn,null));
});
hivez.core.add_place_btn = (function add_place_btn(places,owner,p__16147){var map__16153 = p__16147;var map__16153__$1 = ((cljs.core.seq_QMARK_(map__16153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16153):map__16153);var opts = map__16153__$1;var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16153__$1,cljs.core.constant$keyword$100);if(typeof hivez.core.t16154 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16154 = (function (type_key,opts,map__16153,p__16147,owner,places,add_place_btn,meta16155){
this.type_key = type_key;
this.opts = opts;
this.map__16153 = map__16153;
this.p__16147 = p__16147;
this.owner = owner;
this.places = places;
this.add_place_btn = add_place_btn;
this.meta16155 = meta16155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16154.cljs$lang$type = true;
hivez.core.t16154.cljs$lang$ctorStr = "hivez.core/t16154";
hivez.core.t16154.cljs$lang$ctorPrWriter = ((function (map__16153,map__16153__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16154");
});})(map__16153,map__16153__$1,opts,type_key))
;
hivez.core.t16154.prototype.om$core$IRender$ = true;
hivez.core.t16154.prototype.om$core$IRender$render$arity$1 = ((function (map__16153,map__16153__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;var G__16157 = {"onClick": ((function (this__5247__auto____$1,map__16153,map__16153__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104], null));
});})(this__5247__auto____$1,map__16153,map__16153__$1,opts,type_key))
, "className": "icon-plus", "id": "nav-add-btn"};return React.DOM.div(G__16157);
});})(map__16153,map__16153__$1,opts,type_key))
;
hivez.core.t16154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16153,map__16153__$1,opts,type_key){
return (function (_16156){var self__ = this;
var _16156__$1 = this;return self__.meta16155;
});})(map__16153,map__16153__$1,opts,type_key))
;
hivez.core.t16154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16153,map__16153__$1,opts,type_key){
return (function (_16156,meta16155__$1){var self__ = this;
var _16156__$1 = this;return (new hivez.core.t16154(self__.type_key,self__.opts,self__.map__16153,self__.p__16147,self__.owner,self__.places,self__.add_place_btn,meta16155__$1));
});})(map__16153,map__16153__$1,opts,type_key))
;
hivez.core.__GT_t16154 = ((function (map__16153,map__16153__$1,opts,type_key){
return (function __GT_t16154(type_key__$1,opts__$1,map__16153__$2,p__16147__$1,owner__$1,places__$1,add_place_btn__$1,meta16155){return (new hivez.core.t16154(type_key__$1,opts__$1,map__16153__$2,p__16147__$1,owner__$1,places__$1,add_place_btn__$1,meta16155));
});})(map__16153,map__16153__$1,opts,type_key))
;
}
return (new hivez.core.t16154(type_key,opts,map__16153__$1,p__16147,owner,places,add_place_btn,null));
});
hivez.core.control_panel = (function control_panel(active,owner,p__16159){var map__16176 = p__16159;var map__16176__$1 = ((cljs.core.seq_QMARK_(map__16176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16176):map__16176);var opts = map__16176__$1;var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16176__$1,cljs.core.constant$keyword$100);var control_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16176__$1,cljs.core.constant$keyword$105);if(typeof hivez.core.t16177 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16177 = (function (control_fn,type_key,opts,map__16176,p__16159,owner,active,control_panel,meta16178){
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__16176 = map__16176;
this.p__16159 = p__16159;
this.owner = owner;
this.active = active;
this.control_panel = control_panel;
this.meta16178 = meta16178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16177.cljs$lang$type = true;
hivez.core.t16177.cljs$lang$ctorStr = "hivez.core/t16177";
hivez.core.t16177.cljs$lang$ctorPrWriter = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16177");
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.t16177.prototype.om$core$IRenderState$ = true;
hivez.core.t16177.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (_,p__16180){var self__ = this;
var map__16181 = p__16180;var map__16181__$1 = ((cljs.core.seq_QMARK_(map__16181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16181):map__16181);var path_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16181__$1,cljs.core.constant$keyword$106);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16181__$1,cljs.core.constant$keyword$99);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16181__$1,cljs.core.constant$keyword$103);var ___$1 = this;var G__16182 = {"className": "control-panel"};var G__16183 = (function (){var G__16185 = {"style": hivez.util.display_fade_in((function (){var and__3628__auto__ = open;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not(editing);
} else
{return and__3628__auto__;
}
})()), "id": "nav-control"};var G__16186 = (function (){var G__16188 = {"id": "nav-label"};var G__16189 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type_key)),/active-/,""))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str));return React.DOM.span(G__16188,G__16189);
})();var G__16187 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.control_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,self__.opts], null));return React.DOM.div(G__16185,G__16186,G__16187);
})();var G__16184 = om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,self__.opts,cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$103,open,cljs.core.constant$keyword$99,editing], null)], null));return React.DOM.div(G__16182,G__16183,G__16184);
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.t16177.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t16177.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$106,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (p1__16158_SHARP_){return cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16190 = hivez.core.app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16190) : cljs.core.deref.call(null,G__16190));
})(),p1__16158_SHARP_));
});})(___$1,map__16176,map__16176__$1,opts,type_key,control_fn))
,(function (){var ks = (function (){var G__16191 = next_props;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__16191) : om.core.path.call(null,G__16191));
})();var result = cljs.core.List.EMPTY;while(true){
if(!(cljs.core.empty_QMARK_(ks)))
{{
var G__16192 = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),ks);
var G__16193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,ks);
ks = G__16192;
result = G__16193;
continue;
}
} else
{return result;
}
break;
}
})())));
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.t16177.prototype.om$core$InitState$ = true;
hivez.core.t16177.prototype.om$core$InitState$init_state$arity$1 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$106,""], null);
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.t16177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (_16179){var self__ = this;
var _16179__$1 = this;return self__.meta16178;
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.t16177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function (_16179,meta16178__$1){var self__ = this;
var _16179__$1 = this;return (new hivez.core.t16177(self__.control_fn,self__.type_key,self__.opts,self__.map__16176,self__.p__16159,self__.owner,self__.active,self__.control_panel,meta16178__$1));
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
hivez.core.__GT_t16177 = ((function (map__16176,map__16176__$1,opts,type_key,control_fn){
return (function __GT_t16177(control_fn__$1,type_key__$1,opts__$1,map__16176__$2,p__16159__$1,owner__$1,active__$1,control_panel__$1,meta16178){return (new hivez.core.t16177(control_fn__$1,type_key__$1,opts__$1,map__16176__$2,p__16159__$1,owner__$1,active__$1,control_panel__$1,meta16178));
});})(map__16176,map__16176__$1,opts,type_key,control_fn))
;
}
return (new hivez.core.t16177(control_fn,type_key,opts,map__16176__$1,p__16159,owner,active,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$103,cljs.core.not);
});
hivez.core.drawer = (function drawer(active,owner,p__16194){var map__16207 = p__16194;var map__16207__$1 = ((cljs.core.seq_QMARK_(map__16207))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16207):map__16207);var opts = map__16207__$1;var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16207__$1,cljs.core.constant$keyword$100);var control_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16207__$1,cljs.core.constant$keyword$105);var child_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16207__$1,cljs.core.constant$keyword$107);if(typeof hivez.core.t16208 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16208 = (function (child_fn,control_fn,type_key,opts,map__16207,p__16194,owner,active,drawer,meta16209){
this.child_fn = child_fn;
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__16207 = map__16207;
this.p__16194 = p__16194;
this.owner = owner;
this.active = active;
this.drawer = drawer;
this.meta16209 = meta16209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16208.cljs$lang$type = true;
hivez.core.t16208.cljs$lang$ctorStr = "hivez.core/t16208";
hivez.core.t16208.cljs$lang$ctorPrWriter = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16208");
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t16208.prototype.om$core$IRenderState$ = true;
hivez.core.t16208.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (_,p__16211){var self__ = this;
var map__16212 = p__16211;var map__16212__$1 = ((cljs.core.seq_QMARK_(map__16212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16212):map__16212);var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16212__$1,cljs.core.constant$keyword$96);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16212__$1,cljs.core.constant$keyword$99);var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16212__$1,cljs.core.constant$keyword$103);var ___$1 = this;var G__16213 = {"id": "drawer-wrapper"};var G__16214 = om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.control_panel,self__.active,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$102,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.toggle_open,self__.owner),cljs.core.constant$keyword$105,self__.control_fn,cljs.core.constant$keyword$100,self__.type_key], null),cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$99,editing], null),cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$103,open,cljs.core.constant$keyword$99,editing], null)], null));var G__16215 = (cljs.core.truth_(editing)?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input_control,self__.active,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$99,editing], null),cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$91,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.on_edit,((function (G__16213,G__16214,___$1,map__16212,map__16212__$1,orientation,editing,open,map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (){return hivez.core.end_edit(self__.owner);
});})(G__16213,G__16214,___$1,map__16212,map__16212__$1,orientation,editing,open,map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
)], null)], null)):null);var G__16216 = (function (){var G__16217 = {"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orientation)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3628__auto__ = open;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not(editing);
} else
{return and__3628__auto__;
}
})())?" show":" hide"))), "id": "drawer"};var G__16218 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.child_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$101,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.begin_edit,self__.owner)], null)], null));return React.DOM.div(G__16217,G__16218);
})();return React.DOM.div(G__16213,G__16214,G__16215,G__16216);
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t16208.prototype.om$core$IInitState$ = true;
hivez.core.t16208.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$103,false,cljs.core.constant$keyword$99,null], null);
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t16208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (_16210){var self__ = this;
var _16210__$1 = this;return self__.meta16209;
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t16208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function (_16210,meta16209__$1){var self__ = this;
var _16210__$1 = this;return (new hivez.core.t16208(self__.child_fn,self__.control_fn,self__.type_key,self__.opts,self__.map__16207,self__.p__16194,self__.owner,self__.active,self__.drawer,meta16209__$1));
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.__GT_t16208 = ((function (map__16207,map__16207__$1,opts,type_key,control_fn,child_fn){
return (function __GT_t16208(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__16207__$2,p__16194__$1,owner__$1,active__$1,drawer__$1,meta16209){return (new hivez.core.t16208(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__16207__$2,p__16194__$1,owner__$1,active__$1,drawer__$1,meta16209));
});})(map__16207,map__16207__$1,opts,type_key,control_fn,child_fn))
;
}
return (new hivez.core.t16208(child_fn,control_fn,type_key,opts,map__16207__$1,p__16194,owner,active,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16271 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16271 = (function (owner,data,app,meta16272){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16272 = meta16272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16271.cljs$lang$type = true;
hivez.core.t16271.cljs$lang$ctorStr = "hivez.core/t16271";
hivez.core.t16271.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16271");
});
hivez.core.t16271.prototype.om$core$IRender$ = true;
hivez.core.t16271.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16274 = {"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.data)))};var G__16275 = (function (){var G__16277 = {"className": "flex-content"};var G__16278 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.map.l_map,self__.data);return React.DOM.div(G__16277,G__16278);
})();var G__16276 = (function (){var active_place = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(self__.data);var active_hive = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(active_hive))
{return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.drawer,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.data,active_hive),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$96,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$103,true], null),cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$107,hivez.core.hive_info,cljs.core.constant$keyword$105,hivez.core.back_btn,cljs.core.constant$keyword$100,cljs.core.constant$keyword$77], null)], null));
} else
{if(cljs.core.truth_(active_place))
{return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.drawer,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.data,active_place),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$96,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$103,true], null),cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$107,hivez.core.place_info,cljs.core.constant$keyword$105,hivez.core.back_btn,cljs.core.constant$keyword$100,cljs.core.constant$keyword$83], null)], null));
} else
{return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.drawer,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.data)], null),cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$107,hivez.core.places_info,cljs.core.constant$keyword$105,hivez.core.add_place_btn,cljs.core.constant$keyword$100,cljs.core.constant$keyword$84], null)], null));

}
}
})();return React.DOM.div(G__16274,G__16275,G__16276);
});
hivez.core.t16271.prototype.om$core$IWillMount$ = true;
hivez.core.t16271.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__,___$1){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__,___$1){
return (function (state_16301){var state_val_16302 = (state_16301[(1)]);if((state_val_16302 === (9)))
{var inst_16292 = hivez.core.add_place(self__.data);var state_16301__$1 = state_16301;var statearr_16303_16323 = state_16301__$1;(statearr_16303_16323[(2)] = inst_16292);
(statearr_16303_16323[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (8)))
{var inst_16282 = (state_16301[(7)]);var inst_16289 = cljs.core.second(inst_16282);var inst_16290 = hivez.core.add_hive(self__.data,inst_16289);var state_16301__$1 = state_16301;var statearr_16304_16324 = state_16301__$1;(statearr_16304_16324[(2)] = inst_16290);
(statearr_16304_16324[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (7)))
{var inst_16282 = (state_16301[(7)]);var inst_16286 = cljs.core.rest(inst_16282);var inst_16287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hivez.core.delete$,self__.data,inst_16286);var state_16301__$1 = state_16301;var statearr_16305_16325 = state_16301__$1;(statearr_16305_16325[(2)] = inst_16287);
(statearr_16305_16325[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (6)))
{var inst_16282 = (state_16301[(7)]);var inst_16283 = cljs.core.rest(inst_16282);var inst_16284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hivez.core.tselect,self__.data,inst_16283);var state_16301__$1 = state_16301;var statearr_16306_16326 = state_16301__$1;(statearr_16306_16326[(2)] = inst_16284);
(statearr_16306_16326[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (5)))
{var inst_16296 = (state_16301[(2)]);var state_16301__$1 = (function (){var statearr_16307 = state_16301;(statearr_16307[(8)] = inst_16296);
return statearr_16307;
})();var statearr_16308_16327 = state_16301__$1;(statearr_16308_16327[(2)] = null);
(statearr_16308_16327[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (4)))
{var inst_16282 = (state_16301[(7)]);var inst_16282__$1 = (state_16301[(2)]);var inst_16294 = cljs.core.first(inst_16282__$1);var state_16301__$1 = (function (){var statearr_16309 = state_16301;(statearr_16309[(7)] = inst_16282__$1);
return statearr_16309;
})();var G__16310_16328 = (((inst_16294 instanceof cljs.core.Keyword))?inst_16294.fqn:null);switch (G__16310_16328) {
case "add-place":
var statearr_16311_16330 = state_16301__$1;(statearr_16311_16330[(1)] = (9));

break;
case "add-hive":
var statearr_16312_16331 = state_16301__$1;(statearr_16312_16331[(1)] = (8));

break;
case "delete":
var statearr_16313_16332 = state_16301__$1;(statearr_16313_16332[(1)] = (7));

break;
case "select":
var statearr_16314_16333 = state_16301__$1;(statearr_16314_16333[(1)] = (6));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16294))));

}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16302 === (3)))
{var inst_16299 = (state_16301[(2)]);var state_16301__$1 = state_16301;return cljs.core.async.impl.ioc_helpers.return_chan(state_16301__$1,inst_16299);
} else
{if((state_val_16302 === (2)))
{var inst_16280 = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75);var state_16301__$1 = state_16301;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16301__$1,(4),inst_16280);
} else
{if((state_val_16302 === (1)))
{var state_16301__$1 = state_16301;var statearr_16315_16334 = state_16301__$1;(statearr_16315_16334[(2)] = null);
(statearr_16315_16334[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto__,___$1))
;return ((function (switch__6470__auto__,c__6485__auto__,___$1){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_16319 = [null,null,null,null,null,null,null,null,null];(statearr_16319[(0)] = state_machine__6471__auto__);
(statearr_16319[(1)] = (1));
return statearr_16319;
});
var state_machine__6471__auto____1 = (function (state_16301){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_16301);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e16320){if((e16320 instanceof Object))
{var ex__6474__auto__ = e16320;var statearr_16321_16335 = state_16301;(statearr_16321_16335[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16301);
return cljs.core.constant$keyword$16;
} else
{throw e16320;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__16336 = state_16301;
state_16301 = G__16336;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_16301){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_16301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__,___$1))
})();var state__6487__auto__ = (function (){var statearr_16322 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_16322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_16322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto__,___$1))
);
return c__6485__auto__;
});
hivez.core.t16271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16273){var self__ = this;
var _16273__$1 = this;return self__.meta16272;
});
hivez.core.t16271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16273,meta16272__$1){var self__ = this;
var _16273__$1 = this;return (new hivez.core.t16271(self__.owner,self__.data,self__.app,meta16272__$1));
});
hivez.core.__GT_t16271 = (function __GT_t16271(owner__$1,data__$1,app__$1,meta16272){return (new hivez.core.t16271(owner__$1,data__$1,app__$1,meta16272));
});
}
return (new hivez.core.t16271(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.orientation();
window.addEventListener("resize",hivez.core.orientation);
return hivez.db.db_new((function (){return hivez.db.db_get_all((function (result){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,(function (m){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84], null),(function (p1__16337_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16337_SHARP_,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result.value,cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0)));
}));
}));
}),(function (){return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,document.getElementById("content"),cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null)], null));
}));
}));
});
