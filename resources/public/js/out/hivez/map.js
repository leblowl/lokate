// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
hivez.map.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.map.blue_ico = L.spriteIcon();
hivez.map.green_ico = L.spriteIcon("green");
hivez.map.activate_marker = (function activate_marker(owner,key){var l_map = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$71);var markers = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$72);var active = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,key,cljs.core.constant$keyword$73], null));cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (l_map,markers,active){
return (function (p1__15257_SHARP_){return cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(p1__15257_SHARP_).setIcon(L.spriteIcon());
});})(l_map,markers,active))
,cljs.core.vals(markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_ico);
return l_map.panTo(active.getLatLng());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,hive){var pos = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(hive);var marker = L.marker(cljs.core.clj__GT_js(pos),{"icon": hivez.map.blue_ico}).addTo(map);marker.on("click",((function (pos,marker){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$77,(function (){var G__15260 = hive;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__15260) : om.core.path.call(null,G__15260));
})()], null));
});})(pos,marker))
);
marker.on("contextmenu",((function (pos,marker){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$77,(function (){var G__15261 = hive;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__15261) : om.core.path.call(null,G__15261));
})()], null));
});})(pos,marker))
);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,marker,cljs.core.constant$keyword$74,pos,cljs.core.constant$keyword$79,false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives){var map = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$71);return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$72,((function (map){
return (function (p1__15262_SHARP_){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__15262_SHARP_,(function (){var iter__4379__auto__ = ((function (map){
return (function iter__15273(s__15274){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__15274__$1 = s__15274;while(true){
var temp__4126__auto__ = cljs.core.seq(s__15274__$1);if(temp__4126__auto__)
{var s__15274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__15274__$2))
{var c__4377__auto__ = cljs.core.chunk_first(s__15274__$2);var size__4378__auto__ = cljs.core.count(c__4377__auto__);var b__15276 = cljs.core.chunk_buffer(size__4378__auto__);if((function (){var i__15275 = (0);while(true){
if((i__15275 < size__4378__auto__))
{var vec__15281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4377__auto__,i__15275);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(1),null);cljs.core.chunk_append(b__15276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_(owner,map,v)], null));
{
var G__15283 = (i__15275 + (1));
i__15275 = G__15283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15276),iter__15273(cljs.core.chunk_rest(s__15274__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15276),null);
}
} else
{var vec__15282 = cljs.core.first(s__15274__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_(owner,map,v)], null),iter__15273(cljs.core.rest(s__15274__$2)));
}
} else
{return null;
}
break;
}
});})(map))
,null,null));
});})(map))
;return iter__4379__auto__(hives);
})());
});})(map))
);
});
hivez.map.add_group = (function add_group(owner,places,opts){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15284_SHARP_){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(p1__15284_SHARP_),cljs.core.constant$keyword$81,(new L.MarkerClusterGroup())], null).call(null);
}));
});
hivez.map.delete_markers = (function delete_markers(owner,hives){var l_map_15287 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$71);cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (l_map_15287){
return (function (p1__15285_SHARP_){return l_map_15287.removeLayer(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,p1__15285_SHARP_,cljs.core.constant$keyword$73], null)));
});})(l_map_15287))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hives)));
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$72,(function (p1__15286_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__15286_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){var G__15289_15290 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$82);clearTimeout(G__15289_15290);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$82,null);
});
hivez.map.l_map = (function l_map(p__15291,owner){var map__15301 = p__15291;var map__15301__$1 = ((cljs.core.seq_QMARK_(map__15301))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15301):map__15301);var data = map__15301__$1;var active_hive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15301__$1,cljs.core.constant$keyword$77);var active_place = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15301__$1,cljs.core.constant$keyword$83);var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15301__$1,cljs.core.constant$keyword$84);if(typeof hivez.map.t15302 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t15302 = (function (places,active_place,active_hive,data,map__15301,owner,p__15291,l_map,meta15303){
this.places = places;
this.active_place = active_place;
this.active_hive = active_hive;
this.data = data;
this.map__15301 = map__15301;
this.owner = owner;
this.p__15291 = p__15291;
this.l_map = l_map;
this.meta15303 = meta15303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t15302.cljs$lang$type = true;
hivez.map.t15302.cljs$lang$ctorStr = "hivez.map/t15302";
hivez.map.t15302.cljs$lang$ctorPrWriter = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.map/t15302");
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.om$core$IRenderState$ = true;
hivez.map.t15302.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (_,p__15305){var self__ = this;
var map__15306 = p__15305;var map__15306__$1 = ((cljs.core.seq_QMARK_(map__15306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15306):map__15306);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15306__$1,cljs.core.constant$keyword$72);var ___$1 = this;var G__15307 = {"id": "map"};return React.DOM.div(G__15307);
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.om$core$IDidMount$ = true;
hivez.map.t15302.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (_){var self__ = this;
var ___$1 = this;var tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";var tile_attr = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors";var l_map__$2 = L.map("map").setView(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$85),(9));L.tileLayer(tile_url,{"attribution": tile_attr}).addTo(l_map__$2);
l_map__$2.on("contextmenu",((function (tile_url,tile_attr,l_map__$2,___$1,map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,cljs.core.select_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.latlng,cljs.core.array_seq([cljs.core.constant$keyword$11,true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$88], null))], null));
});})(tile_url,tile_attr,l_map__$2,___$1,map__15301,map__15301__$1,data,active_hive,active_place,places))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (tile_url,tile_attr,l_map__$2,___$1,map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (pos){var initialLoc = [pos.coords.latitude,pos.coords.longitude];return l_map__$2.setView(initialLoc,(9));
});})(tile_url,tile_attr,l_map__$2,___$1,map__15301,map__15301__$1,data,active_hive,active_place,places))
);
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$71,l_map__$2);
return hivez.map.add_markers(self__.owner,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,self__.places)));
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t15302.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (this$,p__15308){var self__ = this;
var map__15309 = p__15308;var map__15309__$1 = ((cljs.core.seq_QMARK_(map__15309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15309):map__15309);var next_props = map__15309__$1;var active_hive__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15309__$1,cljs.core.constant$keyword$77);var active_place__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15309__$1,cljs.core.constant$keyword$83);var places__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15309__$1,cljs.core.constant$keyword$84);var this$__$1 = this;var next_hives = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,places__$2));var current_hives = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(om.core.get_props(self__.owner))));var to_add = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_hives,current_hives);var to_delete = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_hives,next_hives);hivez.map.delete_markers(self__.owner,to_delete);
hivez.map.add_markers(self__.owner,to_add);
return hivez.map.activate_marker(self__.owner,cljs.core.last(active_hive__$2));
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.om$core$IInitState$ = true;
hivez.map.t15302.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$85,[(0),(0)],cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$72,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$71,null], null);
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (_15304){var self__ = this;
var _15304__$1 = this;return self__.meta15303;
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.t15302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function (_15304,meta15303__$1){var self__ = this;
var _15304__$1 = this;return (new hivez.map.t15302(self__.places,self__.active_place,self__.active_hive,self__.data,self__.map__15301,self__.owner,self__.p__15291,self__.l_map,meta15303__$1));
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
hivez.map.__GT_t15302 = ((function (map__15301,map__15301__$1,data,active_hive,active_place,places){
return (function __GT_t15302(places__$1,active_place__$1,active_hive__$1,data__$1,map__15301__$2,owner__$1,p__15291__$1,l_map__$1,meta15303){return (new hivez.map.t15302(places__$1,active_place__$1,active_hive__$1,data__$1,map__15301__$2,owner__$1,p__15291__$1,l_map__$1,meta15303));
});})(map__15301,map__15301__$1,data,active_hive,active_place,places))
;
}
return (new hivez.map.t15302(places,active_place,active_hive,data,map__15301__$1,owner,p__15291,l_map,null));
});
