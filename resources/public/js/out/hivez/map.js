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
hivez.map.red_dot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
hivez.map.green_dot = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
hivez.map.activate_marker = (function activate_marker(owner,key){var goog_map = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$71);var markers = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$72);var active = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,key,cljs.core.constant$keyword$73], null));cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (goog_map,markers,active){
return (function (p1__15257_SHARP_){return cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(p1__15257_SHARP_).setIcon(hivez.map.red_dot);
});})(goog_map,markers,active))
,cljs.core.vals(markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_dot);
return goog_map.panTo(active.getPosition());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,pos,p__15258){var map__15268 = p__15258;var map__15268__$1 = ((cljs.core.seq_QMARK_(map__15268))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15268):map__15268);var opts = map__15268__$1;var delete$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15268__$1,cljs.core.constant$keyword$74);var activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15268__$1,cljs.core.constant$keyword$75);var marker = (new google.maps.Marker({"icon": hivez.map.red_dot, "title": "hive", "map": map, "position": cljs.core.clj__GT_js(pos)}));var G__15269_15277 = marker;var G__15270_15278 = "click";var G__15271_15279 = ((function (G__15269_15277,G__15270_15278,marker,map__15268,map__15268__$1,opts,delete$,activate){
return (function (_){var G__15272 = hivez.map.pos_key(marker.getPosition());return (activate.cljs$core$IFn$_invoke$arity$1 ? activate.cljs$core$IFn$_invoke$arity$1(G__15272) : activate.call(null,G__15272));
});})(G__15269_15277,G__15270_15278,marker,map__15268,map__15268__$1,opts,delete$,activate))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15269_15277,G__15270_15278,G__15271_15279) : google.maps.event.addListener.call(null,G__15269_15277,G__15270_15278,G__15271_15279));
var G__15273_15280 = marker;var G__15274_15281 = "rightclick";var G__15275_15282 = ((function (G__15273_15280,G__15274_15281,marker,map__15268,map__15268__$1,opts,delete$,activate){
return (function (_){var G__15276 = hivez.map.pos_key(marker.getPosition());return (delete$.cljs$core$IFn$_invoke$arity$1 ? delete$.cljs$core$IFn$_invoke$arity$1(G__15276) : delete$.call(null,G__15276));
});})(G__15273_15280,G__15274_15281,marker,map__15268,map__15268__$1,opts,delete$,activate))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15273_15280,G__15274_15281,G__15275_15282) : google.maps.event.addListener.call(null,G__15273_15280,G__15274_15281,G__15275_15282));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,marker,cljs.core.constant$keyword$76,pos,cljs.core.constant$keyword$77,false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives,opts){var map = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$71);return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$72,((function (map){
return (function (p1__15283_SHARP_){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__15283_SHARP_,(function (){var iter__4379__auto__ = ((function (map){
return (function iter__15294(s__15295){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__15295__$1 = s__15295;while(true){
var temp__4126__auto__ = cljs.core.seq(s__15295__$1);if(temp__4126__auto__)
{var s__15295__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__15295__$2))
{var c__4377__auto__ = cljs.core.chunk_first(s__15295__$2);var size__4378__auto__ = cljs.core.count(c__4377__auto__);var b__15297 = cljs.core.chunk_buffer(size__4378__auto__);if((function (){var i__15296 = (0);while(true){
if((i__15296 < size__4378__auto__))
{var vec__15302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4377__auto__,i__15296);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15302,(1),null);cljs.core.chunk_append(b__15297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_(owner,map,cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(v),opts)], null));
{
var G__15304 = (i__15296 + (1));
i__15296 = G__15304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15297),iter__15294(cljs.core.chunk_rest(s__15295__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15297),null);
}
} else
{var vec__15303 = cljs.core.first(s__15295__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_(owner,map,cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(v),opts)], null),iter__15294(cljs.core.rest(s__15295__$2)));
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
hivez.map.delete_markers = (function delete_markers(owner,hives){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15305_SHARP_){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,p1__15305_SHARP_,cljs.core.constant$keyword$73], null)).setMap(null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hives)));
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$72,(function (p1__15306_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__15306_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){var G__15308_15309 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$78);clearTimeout(G__15308_15309);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$78,null);
});
hivez.map.goog_map = (function goog_map(p__15310,owner,p__15311){var map__15342 = p__15310;var map__15342__$1 = ((cljs.core.seq_QMARK_(map__15342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15342):map__15342);var data = map__15342__$1;var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15342__$1,cljs.core.constant$keyword$77);var hives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15342__$1,cljs.core.constant$keyword$79);var map__15343 = p__15311;var map__15343__$1 = ((cljs.core.seq_QMARK_(map__15343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15343):map__15343);var opts = map__15343__$1;var delete$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15343__$1,cljs.core.constant$keyword$74);var activate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15343__$1,cljs.core.constant$keyword$75);var add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15343__$1,cljs.core.constant$keyword$80);if(typeof hivez.map.t15344 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t15344 = (function (p__15310,add,owner,activate,data,map__15343,map__15342,p__15311,goog_map,delete$,active,hives,opts,meta15345){
this.p__15310 = p__15310;
this.add = add;
this.owner = owner;
this.activate = activate;
this.data = data;
this.map__15343 = map__15343;
this.map__15342 = map__15342;
this.p__15311 = p__15311;
this.goog_map = goog_map;
this.delete$ = delete$;
this.active = active;
this.hives = hives;
this.opts = opts;
this.meta15345 = meta15345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t15344.cljs$lang$type = true;
hivez.map.t15344.cljs$lang$ctorStr = "hivez.map/t15344";
hivez.map.t15344.cljs$lang$ctorPrWriter = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.map/t15344");
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.om$core$IRenderState$ = true;
hivez.map.t15344.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (_,p__15347){var self__ = this;
var map__15348 = p__15347;var map__15348__$1 = ((cljs.core.seq_QMARK_(map__15348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15348):map__15348);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15348__$1,cljs.core.constant$keyword$72);var ___$1 = this;var G__15349 = {"id": "map-canvas"};return React.DOM.div(G__15349);
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.om$core$IDidMount$ = true;
hivez.map.t15344.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$81)};var map = (new google.maps.Map(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),map_options));var G__15350_15372 = map;var G__15351_15373 = "mousedown";var G__15352_15374 = ((function (G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (evt){var G__15353_15375 = map;var G__15354_15376 = "mouseup";var G__15355_15377 = ((function (G__15353_15375,G__15354_15376,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action(self__.owner);
});})(G__15353_15375,G__15354_15376,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15353_15375,G__15354_15376,G__15355_15377) : google.maps.event.addListener.call(null,G__15353_15375,G__15354_15376,G__15355_15377));
var G__15356_15378 = map;var G__15357_15379 = "mousemove";var G__15358_15380 = ((function (G__15356_15378,G__15357_15379,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action(self__.owner);
});})(G__15356_15378,G__15357_15379,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15356_15378,G__15357_15379,G__15358_15380) : google.maps.event.addListener.call(null,G__15356_15378,G__15357_15379,G__15358_15380));
var temp__4124__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$78);if(cljs.core.truth_(temp__4124__auto__))
{var timeout = temp__4124__auto__;var G__15359_15381 = timeout;clearTimeout(G__15359_15381);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$78,null);
} else
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$78,(function (){var G__15360 = ((function (temp__4124__auto__,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (){var G__15362 = evt.latLng;return (self__.add.cljs$core$IFn$_invoke$arity$1 ? self__.add.cljs$core$IFn$_invoke$arity$1(G__15362) : self__.add.call(null,G__15362));
});})(temp__4124__auto__,G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;var G__15361 = (1000);return setTimeout(G__15360,G__15361);
})());
}
});})(G__15350_15372,G__15351_15373,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15350_15372,G__15351_15373,G__15352_15374) : google.maps.event.addListener.call(null,G__15350_15372,G__15351_15373,G__15352_15374));
var G__15363_15382 = map;var G__15364_15383 = "rightclick";var G__15365_15384 = ((function (G__15363_15382,G__15364_15383,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (evt){var G__15366 = evt.latLng;return (self__.add.cljs$core$IFn$_invoke$arity$1 ? self__.add.cljs$core$IFn$_invoke$arity$1(G__15366) : self__.add.call(null,G__15366));
});})(G__15363_15382,G__15364_15383,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15363_15382,G__15364_15383,G__15365_15384) : google.maps.event.addListener.call(null,G__15363_15382,G__15364_15383,G__15365_15384));
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
);
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
var G__15367_15385 = map;var G__15368_15386 = "idle";var G__15369_15387 = ((function (G__15367_15385,G__15368_15386,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$81,map.getCenter());
});})(G__15367_15385,G__15368_15386,map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__15367_15385,G__15368_15386,G__15369_15387) : google.maps.event.addListener.call(null,G__15367_15385,G__15368_15386,G__15369_15387));
window.addEventListener("resize",((function (map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (e){var G__15370_15388 = map;var G__15371_15389 = "resize";(google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2 ? google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2(G__15370_15388,G__15371_15389) : google.maps.event.trigger.call(null,G__15370_15388,G__15371_15389));
return map.setCenter(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$81));
});})(map_options,map,___$1,map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$71,map);
return hivez.map.add_markers(self__.owner,self__.hives,self__.opts);
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t15344.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;var next_hives = cljs.core.set(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(next_props));var current_hives = cljs.core.set(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(om.core.get_props(self__.owner)));var to_add = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_hives,current_hives);var to_delete = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_hives,next_hives);hivez.map.delete_markers(self__.owner,to_delete);
hivez.map.add_markers(self__.owner,to_add,self__.opts);
return hivez.map.activate_marker(self__.owner,cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(next_props));
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.om$core$IInitState$ = true;
hivez.map.t15344.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$81,{"lng": (0), "lat": (0)},cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$72,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$71,null], null);
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (_15346){var self__ = this;
var _15346__$1 = this;return self__.meta15345;
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.t15344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function (_15346,meta15345__$1){var self__ = this;
var _15346__$1 = this;return (new hivez.map.t15344(self__.p__15310,self__.add,self__.owner,self__.activate,self__.data,self__.map__15343,self__.map__15342,self__.p__15311,self__.goog_map,self__.delete$,self__.active,self__.hives,self__.opts,meta15345__$1));
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
hivez.map.__GT_t15344 = ((function (map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add){
return (function __GT_t15344(p__15310__$1,add__$1,owner__$1,activate__$1,data__$1,map__15343__$2,map__15342__$2,p__15311__$1,goog_map__$1,delete$__$1,active__$1,hives__$1,opts__$1,meta15345){return (new hivez.map.t15344(p__15310__$1,add__$1,owner__$1,activate__$1,data__$1,map__15343__$2,map__15342__$2,p__15311__$1,goog_map__$1,delete$__$1,active__$1,hives__$1,opts__$1,meta15345));
});})(map__15342,map__15342__$1,data,active,hives,map__15343,map__15343__$1,opts,delete$,activate,add))
;
}
return (new hivez.map.t15344(p__15310,add,owner,activate,data,map__15343__$1,map__15342__$1,p__15311,goog_map,delete$,active,hives,opts,null));
});
