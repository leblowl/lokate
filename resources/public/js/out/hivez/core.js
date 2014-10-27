// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('hivez.navigation');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('hivez.navigation');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_();
hivez.core.app_state = (function (){var G__16112 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$131,null,cljs.core.constant$keyword$132,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$63,null], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16112) : cljs.core.atom.call(null,G__16112));
})();
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,(function (p1__16113_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16113_SHARP_,cljs.core.constant$keyword$131,hivez.core.orientation());
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.new_hive = (function new_hive(marker){var pos = marker.getPosition();return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$133,marker,cljs.core.constant$keyword$64,"",cljs.core.constant$keyword$134,hivez.core.fdate_now(),cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,pos.lat(),cljs.core.constant$keyword$138,pos.lng()], null),cljs.core.constant$keyword$136,""], null);
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16114_SHARP_){return cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(p1__16114_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}),cljs.core.vals(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16116 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16116) : cljs.core.deref.call(null,G__16116));
})()))));
if(cljs.core.truth_(marker))
{return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
} else
{return null;
}
});
hivez.core.add_hive = (function add_hive(data,marker){var key = hivez.core.pos_key(marker.getPosition());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$132,((function (key){
return (function (p1__16117_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16117_SHARP_,key,hivez.core.new_hive(marker));
});})(key))
);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$63,key);
return hivez.core.activate_marker(data,marker);
});
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
/**
* Euclidean distance between 2 points
*/
hivez.core.distance = (function distance(pos1,pos2){var G__16124 = ((function (){var G__16126 = (cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(pos2));var G__16127 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16126,G__16127) : Math.pow.call(null,G__16126,G__16127));
})() + (function (){var G__16128 = (cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(pos2));var G__16129 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16128,G__16129) : Math.pow.call(null,G__16128,G__16129));
})());var G__16125 = 0.5;return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__16124,G__16125) : Math.pow.call(null,G__16124,G__16125));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__16130_SHARP_){return hivez.core.distance(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(hive),cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16130_SHARP_)));
}),cljs.core.seq(hives));
});
hivez.core.init_marker = (function init_marker(data,map,marker){hivez.core.add_hive(data,marker);
map.panTo(marker.getPosition());
var G__16145_16158 = marker;var G__16146_16159 = "click";var G__16147_16160 = ((function (G__16145_16158,G__16146_16159){
return (function (_){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__16148 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16148) : cljs.core.deref.call(null,G__16148));
})()),hivez.core.pos_key(marker.getPosition())))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$63,null);
return hivez.core.activate_marker(data,null);
} else
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$63,hivez.core.pos_key(marker.getPosition()));
hivez.core.activate_marker(data,marker);
return map.panTo(marker.getPosition());
}
});})(G__16145_16158,G__16146_16159))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16145_16158,G__16146_16159,G__16147_16160) : google.maps.event.addListener.call(null,G__16145_16158,G__16146_16159,G__16147_16160));
var G__16149 = marker;var G__16150 = "rightclick";var G__16151 = ((function (G__16149,G__16150){
return (function (_){marker.setMap(null);
var active = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__16152 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16152) : cljs.core.deref.call(null,G__16152));
})());var fallen_key = hivez.core.pos_key(marker.getPosition());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$132,((function (active,fallen_key,G__16149,G__16150){
return (function (p1__16131_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16131_SHARP_,fallen_key);
});})(active,fallen_key,G__16149,G__16150))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fallen_key,active))
{var new_active = cljs.core.first(hivez.core.nearest(fallen_key,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16153 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16153) : cljs.core.deref.call(null,G__16153));
})())));om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$63,new_active);
if(cljs.core.truth_(new_active))
{hivez.core.activate_marker(data,cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1((function (){var G__16154 = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16155 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16155) : cljs.core.deref.call(null,G__16155));
})());return (new_active.cljs$core$IFn$_invoke$arity$1 ? new_active.cljs$core$IFn$_invoke$arity$1(G__16154) : new_active.call(null,G__16154));
})()));
return map.panTo(cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1((function (){var G__16156 = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16157 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16157) : cljs.core.deref.call(null,G__16157));
})());return (new_active.cljs$core$IFn$_invoke$arity$1 ? new_active.cljs$core$IFn$_invoke$arity$1(G__16156) : new_active.call(null,G__16156));
})()).getPosition());
} else
{return null;
}
} else
{return null;
}
});})(G__16149,G__16150))
;return (google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16149,G__16150,G__16151) : google.maps.event.addListener.call(null,G__16149,G__16150,G__16151));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t16188 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16188 = (function (owner,data,goog_map,meta16189){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta16189 = meta16189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16188.cljs$lang$type = true;
hivez.core.t16188.cljs$lang$ctorStr = "hivez.core/t16188";
hivez.core.t16188.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16188");
});
hivez.core.t16188.prototype.om$core$IRender$ = true;
hivez.core.t16188.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16191 = {"id": "map-canvas"};return React.DOM.div(G__16191);
});
hivez.core.t16188.prototype.om$core$IDidMount$ = true;
hivez.core.t16188.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$139)};var map = (new google.maps.Map(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),map_options));var G__16192_16215 = map;var G__16193_16216 = "mousedown";var G__16194_16217 = ((function (G__16192_16215,G__16193_16216,map_options,map,___$1){
return (function (evt){if(cljs.core.empty_QMARK_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$140)))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16195 = ((function (G__16192_16215,G__16193_16216,map_options,map,___$1){
return (function (){return hivez.core.init_marker(self__.data,map,hivez.core.mark_pos(map,evt.latLng));
});})(G__16192_16215,G__16193_16216,map_options,map,___$1))
;var G__16196 = (1000);return setTimeout(G__16195,G__16196);
})()], null));
} else
{var G__16197_16218 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,(0)], null));clearTimeout(G__16197_16218);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$140,cljs.core.PersistentVector.EMPTY);
}
});})(G__16192_16215,G__16193_16216,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16192_16215,G__16193_16216,G__16194_16217) : google.maps.event.addListener.call(null,G__16192_16215,G__16193_16216,G__16194_16217));
var G__16198_16219 = map;var G__16199_16220 = "mouseup";var G__16200_16221 = ((function (G__16198_16219,G__16199_16220,map_options,map,___$1){
return (function (evt){var G__16201_16222 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,(0)], null));clearTimeout(G__16201_16222);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$140,cljs.core.PersistentVector.EMPTY);
});})(G__16198_16219,G__16199_16220,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16198_16219,G__16199_16220,G__16200_16221) : google.maps.event.addListener.call(null,G__16198_16219,G__16199_16220,G__16200_16221));
var G__16202_16223 = map;var G__16203_16224 = "mousemove";var G__16204_16225 = ((function (G__16202_16223,G__16203_16224,map_options,map,___$1){
return (function (evt){var G__16205_16226 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,(0)], null));clearTimeout(G__16205_16226);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$140,cljs.core.PersistentVector.EMPTY);
});})(G__16202_16223,G__16203_16224,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16202_16223,G__16203_16224,G__16204_16225) : google.maps.event.addListener.call(null,G__16202_16223,G__16203_16224,G__16204_16225));
var G__16206_16227 = map;var G__16207_16228 = "rightclick";var G__16208_16229 = ((function (G__16206_16227,G__16207_16228,map_options,map,___$1){
return (function (evt){var G__16209_16230 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,(0)], null));clearTimeout(G__16209_16230);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$140,cljs.core.PersistentVector.EMPTY);
return hivez.core.init_marker(self__.data,map,hivez.core.mark_pos(map,evt.latLng));
});})(G__16206_16227,G__16207_16228,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16206_16227,G__16207_16228,G__16208_16229) : google.maps.event.addListener.call(null,G__16206_16227,G__16207_16228,G__16208_16229));
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1))
);
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
var G__16210_16231 = map;var G__16211_16232 = "idle";var G__16212_16233 = ((function (G__16210_16231,G__16211_16232,map_options,map,___$1){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$139,map.getCenter());
});})(G__16210_16231,G__16211_16232,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16210_16231,G__16211_16232,G__16212_16233) : google.maps.event.addListener.call(null,G__16210_16231,G__16211_16232,G__16212_16233));
return window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){var G__16213_16234 = map;var G__16214_16235 = "resize";(google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2 ? google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2(G__16213_16234,G__16214_16235) : google.maps.event.trigger.call(null,G__16213_16234,G__16214_16235));
return map.setCenter(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$139));
});})(map_options,map,___$1))
);
});
hivez.core.t16188.prototype.om$core$IInitState$ = true;
hivez.core.t16188.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,{"lng": (0), "lat": (0)},cljs.core.constant$keyword$140,cljs.core.PersistentVector.EMPTY], null);
});
hivez.core.t16188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16190){var self__ = this;
var _16190__$1 = this;return self__.meta16189;
});
hivez.core.t16188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16190,meta16189__$1){var self__ = this;
var _16190__$1 = this;return (new hivez.core.t16188(self__.owner,self__.data,self__.goog_map,meta16189__$1));
});
hivez.core.__GT_t16188 = (function __GT_t16188(owner__$1,data__$1,goog_map__$1,meta16189){return (new hivez.core.t16188(owner__$1,data__$1,goog_map__$1,meta16189));
});
}
return (new hivez.core.t16188(owner,data,goog_map,null));
});
hivez.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
/**
* @param {...*} var_args
*/
hivez.core.floormat = (function() { 
var floormat__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.string.format,args);
};
var floormat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return floormat__delegate.call(this,args);};
floormat.cljs$lang$maxFixedArity = 0;
floormat.cljs$lang$applyTo = (function (arglist__16236){
var args = cljs.core.seq(arglist__16236);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
hivez.core.display_pos = (function display_pos(hive){var pos = cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(pos)], 0)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(pos)], 0))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$134.cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$141,edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$141,null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(hive,key,(function (){var G__16238 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,key).innerHTML;return goog.string.unescapeEntities(G__16238);
})());
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
hivez.core.input = (function input(hive,owner,p__16239){var map__16266 = p__16239;var map__16266__$1 = ((cljs.core.seq_QMARK_(map__16266))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16266):map__16266);var opts = map__16266__$1;var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,cljs.core.constant$keyword$142);var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,cljs.core.constant$keyword$143);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,cljs.core.constant$keyword$144);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,cljs.core.constant$keyword$145);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,cljs.core.constant$keyword$65);if(typeof hivez.core.t16267 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16267 = (function (input,p__16239,map__16266,on_key_down,owner,hive,edit_key,className,on_edit,id,opts,meta16268){
this.input = input;
this.p__16239 = p__16239;
this.map__16266 = map__16266;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta16268 = meta16268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16267.cljs$lang$type = true;
hivez.core.t16267.cljs$lang$ctorStr = "hivez.core/t16267";
hivez.core.t16267.cljs$lang$ctorPrWriter = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16267");
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16267.prototype.om$core$IRenderState$ = true;
hivez.core.t16267.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__16270){var self__ = this;
var map__16271 = p__16270;var map__16271__$1 = ((cljs.core.seq_QMARK_(map__16271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16271):map__16271);var exit_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16271__$1,cljs.core.constant$keyword$146);var ___$1 = this;var G__16272 = {"id": "input-wrapper"};var G__16273 = (function (){var G__16275 = {"dangerouslySetInnerHTML": {"__html": (function (){var G__16281 = self__.hive;return (self__.edit_key.cljs$core$IFn$_invoke$arity$1 ? self__.edit_key.cljs$core$IFn$_invoke$arity$1(G__16281) : self__.edit_key.call(null,G__16281));
})()}, "onBlur": ((function (G__16272,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$146,"out");
var G__16276 = ((function (G__16272,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16278 = self__.hive;var G__16279 = self__.edit_key;var G__16280 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16278,G__16279,G__16280) : self__.on_edit.call(null,G__16278,G__16279,G__16280));
});})(G__16272,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16277 = (100);return setTimeout(G__16276,G__16277);
});})(G__16272,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display(cljs.core.not(exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id};return React.DOM.div(G__16275);
})();var G__16274 = (function (){var G__16282 = {"onClick": ((function (G__16272,G__16273,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$146,"btn");
var G__16284 = ((function (G__16272,G__16273,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16286 = self__.hive;var G__16287 = self__.edit_key;var G__16288 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16286,G__16287,G__16288) : self__.on_edit.call(null,G__16286,G__16287,G__16288));
});})(G__16272,G__16273,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16285 = (100);return setTimeout(G__16284,G__16285);
});})(G__16272,G__16273,___$1,map__16271,map__16271__$1,exit_type,map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exit_type,"out"))), "id": "input-ok"};var G__16283 = (function (){var G__16289 = {"id": "input-ok-mark"};var G__16290 = (function (){var G__16291 = "&#10003;";return goog.string.unescapeEntities(G__16291);
})();return React.DOM.span(G__16289,G__16290);
})();return React.DOM.div(G__16282,G__16283);
})();return React.DOM.div(G__16272,G__16273,G__16274);
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16267.prototype.om$core$IDidMount$ = true;
hivez.core.t16267.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,self__.edit_key).focus();
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16267.prototype.om$core$IInitState$ = true;
hivez.core.t16267.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$146,null], null);
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16269){var self__ = this;
var _16269__$1 = this;return self__.meta16268;
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16269,meta16268__$1){var self__ = this;
var _16269__$1 = this;return (new hivez.core.t16267(self__.input,self__.p__16239,self__.map__16266,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta16268__$1));
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t16267 = ((function (map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t16267(input__$1,p__16239__$1,map__16266__$2,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta16268){return (new hivez.core.t16267(input__$1,p__16239__$1,map__16266__$2,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta16268));
});})(map__16266,map__16266__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t16267(input,p__16239,map__16266__$1,on_key_down,owner,hive,edit_key,className,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__16292){var map__16302 = p__16292;var map__16302__$1 = ((cljs.core.seq_QMARK_(map__16302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16302):map__16302);var opts = map__16302__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16302__$1,cljs.core.constant$keyword$143);if(typeof hivez.core.t16303 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16303 = (function (on_edit,opts,map__16302,p__16292,owner,hive,input_control,meta16304){
this.on_edit = on_edit;
this.opts = opts;
this.map__16302 = map__16302;
this.p__16292 = p__16292;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta16304 = meta16304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16303.cljs$lang$type = true;
hivez.core.t16303.cljs$lang$ctorStr = "hivez.core/t16303";
hivez.core.t16303.cljs$lang$ctorPrWriter = ((function (map__16302,map__16302__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16303");
});})(map__16302,map__16302__$1,opts,on_edit))
;
hivez.core.t16303.prototype.om$core$IRenderState$ = true;
hivez.core.t16303.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16302,map__16302__$1,opts,on_edit){
return (function (_,p__16306){var self__ = this;
var map__16307 = p__16306;var map__16307__$1 = ((cljs.core.seq_QMARK_(map__16307))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16307):map__16307);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16307__$1,cljs.core.constant$keyword$141);var ___$1 = this;var G__16308 = {"id": "input-ctrl"};var G__16309 = (function (){var G__16310 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__16310) {
case "notes":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"notes-input",cljs.core.constant$keyword$145,"notes input",cljs.core.constant$keyword$144,cljs.core.constant$keyword$136,cljs.core.constant$keyword$143,self__.on_edit], null)], null));

break;
case "name":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$65,"name-input",cljs.core.constant$keyword$145,"name input single-line",cljs.core.constant$keyword$144,cljs.core.constant$keyword$64,cljs.core.constant$keyword$143,self__.on_edit,cljs.core.constant$keyword$142,((function (G__16310,G__16308,___$1,map__16307,map__16307__$1,editing,map__16302,map__16302__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__16310,G__16308,___$1,map__16307,map__16307__$1,editing,map__16302,map__16302__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})();return React.DOM.div(G__16308,G__16309);
});})(map__16302,map__16302__$1,opts,on_edit))
;
hivez.core.t16303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16302,map__16302__$1,opts,on_edit){
return (function (_16305){var self__ = this;
var _16305__$1 = this;return self__.meta16304;
});})(map__16302,map__16302__$1,opts,on_edit))
;
hivez.core.t16303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16302,map__16302__$1,opts,on_edit){
return (function (_16305,meta16304__$1){var self__ = this;
var _16305__$1 = this;return (new hivez.core.t16303(self__.on_edit,self__.opts,self__.map__16302,self__.p__16292,self__.owner,self__.hive,self__.input_control,meta16304__$1));
});})(map__16302,map__16302__$1,opts,on_edit))
;
hivez.core.__GT_t16303 = ((function (map__16302,map__16302__$1,opts,on_edit){
return (function __GT_t16303(on_edit__$1,opts__$1,map__16302__$2,p__16292__$1,owner__$1,hive__$1,input_control__$1,meta16304){return (new hivez.core.t16303(on_edit__$1,opts__$1,map__16302__$2,p__16292__$1,owner__$1,hive__$1,input_control__$1,meta16304));
});})(map__16302,map__16302__$1,opts,on_edit))
;
}
return (new hivez.core.t16303(on_edit,opts,map__16302__$1,p__16292,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__16312){var map__16330 = p__16312;var map__16330__$1 = ((cljs.core.seq_QMARK_(map__16330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16330):map__16330);var opts = map__16330__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16330__$1,cljs.core.constant$keyword$147);if(typeof hivez.core.t16331 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16331 = (function (begin_edit,opts,map__16330,p__16312,owner,hive,hive_info,meta16332){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16330 = map__16330;
this.p__16312 = p__16312;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16332 = meta16332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16331.cljs$lang$type = true;
hivez.core.t16331.cljs$lang$ctorStr = "hivez.core/t16331";
hivez.core.t16331.cljs$lang$ctorPrWriter = ((function (map__16330,map__16330__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16331");
});})(map__16330,map__16330__$1,opts,begin_edit))
;
hivez.core.t16331.prototype.om$core$IRender$ = true;
hivez.core.t16331.prototype.om$core$IRender$render$arity$1 = ((function (map__16330,map__16330__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16334 = {"id": "info"};var G__16335 = (function (){var G__16339 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (G__16334,___$1,map__16330,map__16330__$1,opts,begin_edit){
return (function (){var G__16340 = cljs.core.constant$keyword$64;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16340) : self__.begin_edit.call(null,G__16340));
});})(G__16334,___$1,map__16330,map__16330__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16339);
})();var G__16336 = (function (){var G__16341 = {"className": "origin"};var G__16342 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16341,G__16342);
})();var G__16337 = (function (){var G__16343 = {"className": "location"};var G__16344 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16343,G__16344);
})();var G__16338 = (function (){var G__16345 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (G__16334,G__16335,G__16336,G__16337,___$1,map__16330,map__16330__$1,opts,begin_edit){
return (function (){var G__16346 = cljs.core.constant$keyword$136;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16346) : self__.begin_edit.call(null,G__16346));
});})(G__16334,G__16335,G__16336,G__16337,___$1,map__16330,map__16330__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"};return React.DOM.div(G__16345);
})();return React.DOM.div(G__16334,G__16335,G__16336,G__16337,G__16338);
});})(map__16330,map__16330__$1,opts,begin_edit))
;
hivez.core.t16331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16330,map__16330__$1,opts,begin_edit){
return (function (_16333){var self__ = this;
var _16333__$1 = this;return self__.meta16332;
});})(map__16330,map__16330__$1,opts,begin_edit))
;
hivez.core.t16331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16330,map__16330__$1,opts,begin_edit){
return (function (_16333,meta16332__$1){var self__ = this;
var _16333__$1 = this;return (new hivez.core.t16331(self__.begin_edit,self__.opts,self__.map__16330,self__.p__16312,self__.owner,self__.hive,self__.hive_info,meta16332__$1));
});})(map__16330,map__16330__$1,opts,begin_edit))
;
hivez.core.__GT_t16331 = ((function (map__16330,map__16330__$1,opts,begin_edit){
return (function __GT_t16331(begin_edit__$1,opts__$1,map__16330__$2,p__16312__$1,owner__$1,hive__$1,hive_info__$1,meta16332){return (new hivez.core.t16331(begin_edit__$1,opts__$1,map__16330__$2,p__16312__$1,owner__$1,hive__$1,hive_info__$1,meta16332));
});})(map__16330,map__16330__$1,opts,begin_edit))
;
}
return (new hivez.core.t16331(begin_edit,opts,map__16330__$1,p__16312,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t16357 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16357 = (function (owner,data,drawer,meta16358){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta16358 = meta16358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16357.cljs$lang$type = true;
hivez.core.t16357.cljs$lang$ctorStr = "hivez.core/t16357";
hivez.core.t16357.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16357");
});
hivez.core.t16357.prototype.om$core$IRenderState$ = true;
hivez.core.t16357.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16360){var self__ = this;
var map__16361 = p__16360;var map__16361__$1 = ((cljs.core.seq_QMARK_(map__16361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16361):map__16361);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16361__$1,cljs.core.constant$keyword$141);var ___$1 = this;var G__16362 = {"id": "drawer-wrapper"};var G__16363 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input_control,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,editing], null),cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.on_edit,((function (G__16362,___$1,map__16361,map__16361__$1,editing){
return (function (){return hivez.core.end_edit(self__.owner);
});})(G__16362,___$1,map__16361,map__16361__$1,editing))
)], null)], null)):null);var G__16364 = (function (){var G__16365 = {"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3640__auto__ = cljs.core.not(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data));if(or__3640__auto__)
{return or__3640__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"};var G__16366 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.hive_info,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$147,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.begin_edit,self__.owner)], null)], null)):null);return React.DOM.div(G__16365,G__16366);
})();return React.DOM.div(G__16362,G__16363,G__16364);
});
hivez.core.t16357.prototype.om$core$IInitState$ = true;
hivez.core.t16357.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,null], null);
});
hivez.core.t16357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16359){var self__ = this;
var _16359__$1 = this;return self__.meta16358;
});
hivez.core.t16357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16359,meta16358__$1){var self__ = this;
var _16359__$1 = this;return (new hivez.core.t16357(self__.owner,self__.data,self__.drawer,meta16358__$1));
});
hivez.core.__GT_t16357 = (function __GT_t16357(owner__$1,data__$1,drawer__$1,meta16358){return (new hivez.core.t16357(owner__$1,data__$1,drawer__$1,meta16358));
});
}
return (new hivez.core.t16357(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16375 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16375 = (function (owner,data,app,meta16376){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16376 = meta16376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16375.cljs$lang$type = true;
hivez.core.t16375.cljs$lang$ctorStr = "hivez.core/t16375";
hivez.core.t16375.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16375");
});
hivez.core.t16375.prototype.om$core$IRender$ = true;
hivez.core.t16375.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16378 = {"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data)))};var G__16379 = (function (){var G__16381 = {"className": "flex-content"};var G__16382 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.goog_map,self__.data);return React.DOM.div(G__16381,G__16382);
})();var G__16380 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.drawer,self__.data);return React.DOM.div(G__16378,G__16379,G__16380);
});
hivez.core.t16375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16377){var self__ = this;
var _16377__$1 = this;return self__.meta16376;
});
hivez.core.t16375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16377,meta16376__$1){var self__ = this;
var _16377__$1 = this;return (new hivez.core.t16375(self__.owner,self__.data,self__.app,meta16376__$1));
});
hivez.core.__GT_t16375 = (function __GT_t16375(owner__$1,data__$1,app__$1,meta16376){return (new hivez.core.t16375(owner__$1,data__$1,app__$1,meta16376));
});
}
return (new hivez.core.t16375(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render();
hivez.core.handleOrientation();
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,document.getElementById("content")], null));
});
