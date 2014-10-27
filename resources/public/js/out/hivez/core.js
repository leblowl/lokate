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
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t16157 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16157 = (function (owner,data,goog_map,meta16158){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta16158 = meta16158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16157.cljs$lang$type = true;
hivez.core.t16157.cljs$lang$ctorStr = "hivez.core/t16157";
hivez.core.t16157.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16157");
});
hivez.core.t16157.prototype.om$core$IRender$ = true;
hivez.core.t16157.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16160 = {"id": "map-canvas"};return React.DOM.div(G__16160);
});
hivez.core.t16157.prototype.om$core$IDidMount$ = true;
hivez.core.t16157.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$139)};var map = (new google.maps.Map(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),map_options));var G__16161_16182 = map;var G__16162_16183 = "rightclick";var G__16163_16184 = ((function (G__16161_16182,G__16162_16183,map_options,map,___$1){
return (function (evt){var marker = hivez.core.mark_pos(map,evt.latLng);hivez.core.add_hive(self__.data,marker);
map.panTo(marker.getPosition());
var G__16164_16185 = marker;var G__16165_16186 = "click";var G__16166_16187 = ((function (G__16164_16185,G__16165_16186,marker,G__16161_16182,G__16162_16183,map_options,map,___$1){
return (function (___$2){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__16167 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16167) : cljs.core.deref.call(null,G__16167));
})()),hivez.core.pos_key(marker.getPosition())))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,null);
return hivez.core.activate_marker(self__.data,null);
} else
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,hivez.core.pos_key(marker.getPosition()));
hivez.core.activate_marker(self__.data,marker);
return map.panTo(marker.getPosition());
}
});})(G__16164_16185,G__16165_16186,marker,G__16161_16182,G__16162_16183,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16164_16185,G__16165_16186,G__16166_16187) : google.maps.event.addListener.call(null,G__16164_16185,G__16165_16186,G__16166_16187));
var G__16168 = marker;var G__16169 = "rightclick";var G__16170 = ((function (G__16168,G__16169,marker,G__16161_16182,G__16162_16183,map_options,map,___$1){
return (function (___$2){marker.setMap(null);
var active = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__16171 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16171) : cljs.core.deref.call(null,G__16171));
})());var fallen_key = hivez.core.pos_key(marker.getPosition());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$132,((function (active,fallen_key,G__16168,G__16169,marker,G__16161_16182,G__16162_16183,map_options,map,___$1){
return (function (p1__16131_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16131_SHARP_,fallen_key);
});})(active,fallen_key,G__16168,G__16169,marker,G__16161_16182,G__16162_16183,map_options,map,___$1))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fallen_key,active))
{var new_active = cljs.core.first(hivez.core.nearest(fallen_key,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16172 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16172) : cljs.core.deref.call(null,G__16172));
})())));om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,new_active);
if(cljs.core.truth_(new_active))
{hivez.core.activate_marker(self__.data,cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1((function (){var G__16173 = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16174 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16174) : cljs.core.deref.call(null,G__16174));
})());return (new_active.cljs$core$IFn$_invoke$arity$1 ? new_active.cljs$core$IFn$_invoke$arity$1(G__16173) : new_active.call(null,G__16173));
})()));
return map.panTo(cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1((function (){var G__16175 = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16176 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16176) : cljs.core.deref.call(null,G__16176));
})());return (new_active.cljs$core$IFn$_invoke$arity$1 ? new_active.cljs$core$IFn$_invoke$arity$1(G__16175) : new_active.call(null,G__16175));
})()).getPosition());
} else
{return null;
}
} else
{return null;
}
});})(G__16168,G__16169,marker,G__16161_16182,G__16162_16183,map_options,map,___$1))
;return (google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16168,G__16169,G__16170) : google.maps.event.addListener.call(null,G__16168,G__16169,G__16170));
});})(G__16161_16182,G__16162_16183,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16161_16182,G__16162_16183,G__16163_16184) : google.maps.event.addListener.call(null,G__16161_16182,G__16162_16183,G__16163_16184));
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1))
);
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
var G__16177_16188 = map;var G__16178_16189 = "idle";var G__16179_16190 = ((function (G__16177_16188,G__16178_16189,map_options,map,___$1){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$139,map.getCenter());
});})(G__16177_16188,G__16178_16189,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16177_16188,G__16178_16189,G__16179_16190) : google.maps.event.addListener.call(null,G__16177_16188,G__16178_16189,G__16179_16190));
return window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){var G__16180_16191 = map;var G__16181_16192 = "resize";(google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2 ? google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2(G__16180_16191,G__16181_16192) : google.maps.event.trigger.call(null,G__16180_16191,G__16181_16192));
return map.setCenter(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$139));
});})(map_options,map,___$1))
);
});
hivez.core.t16157.prototype.om$core$IInitState$ = true;
hivez.core.t16157.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,{"lng": (0), "lat": (0)}], null);
});
hivez.core.t16157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16159){var self__ = this;
var _16159__$1 = this;return self__.meta16158;
});
hivez.core.t16157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16159,meta16158__$1){var self__ = this;
var _16159__$1 = this;return (new hivez.core.t16157(self__.owner,self__.data,self__.goog_map,meta16158__$1));
});
hivez.core.__GT_t16157 = (function __GT_t16157(owner__$1,data__$1,goog_map__$1,meta16158){return (new hivez.core.t16157(owner__$1,data__$1,goog_map__$1,meta16158));
});
}
return (new hivez.core.t16157(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__16193){
var args = cljs.core.seq(arglist__16193);
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
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$140,edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$140,null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(hive,key,(function (){var G__16195 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,key).innerHTML;return goog.string.unescapeEntities(G__16195);
})());
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
hivez.core.input = (function input(hive,owner,p__16196){var map__16223 = p__16196;var map__16223__$1 = ((cljs.core.seq_QMARK_(map__16223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16223):map__16223);var opts = map__16223__$1;var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,cljs.core.constant$keyword$141);var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,cljs.core.constant$keyword$142);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,cljs.core.constant$keyword$143);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,cljs.core.constant$keyword$144);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,cljs.core.constant$keyword$65);if(typeof hivez.core.t16224 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16224 = (function (input,on_key_down,owner,p__16196,hive,edit_key,className,on_edit,id,map__16223,opts,meta16225){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.p__16196 = p__16196;
this.hive = hive;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.map__16223 = map__16223;
this.opts = opts;
this.meta16225 = meta16225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16224.cljs$lang$type = true;
hivez.core.t16224.cljs$lang$ctorStr = "hivez.core/t16224";
hivez.core.t16224.cljs$lang$ctorPrWriter = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16224");
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16224.prototype.om$core$IRenderState$ = true;
hivez.core.t16224.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__16227){var self__ = this;
var map__16228 = p__16227;var map__16228__$1 = ((cljs.core.seq_QMARK_(map__16228))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16228):map__16228);var exit_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16228__$1,cljs.core.constant$keyword$145);var ___$1 = this;var G__16229 = {"id": "input-wrapper"};var G__16230 = (function (){var G__16232 = {"dangerouslySetInnerHTML": {"__html": (function (){var G__16238 = self__.hive;return (self__.edit_key.cljs$core$IFn$_invoke$arity$1 ? self__.edit_key.cljs$core$IFn$_invoke$arity$1(G__16238) : self__.edit_key.call(null,G__16238));
})()}, "onBlur": ((function (G__16229,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$145,"out");
var G__16233 = ((function (G__16229,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16235 = self__.hive;var G__16236 = self__.edit_key;var G__16237 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16235,G__16236,G__16237) : self__.on_edit.call(null,G__16235,G__16236,G__16237));
});})(G__16229,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16234 = (100);return setTimeout(G__16233,G__16234);
});})(G__16229,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display(cljs.core.not(exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id};return React.DOM.div(G__16232);
})();var G__16231 = (function (){var G__16239 = {"onClick": ((function (G__16229,G__16230,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$145,"btn");
var G__16241 = ((function (G__16229,G__16230,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16243 = self__.hive;var G__16244 = self__.edit_key;var G__16245 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16243,G__16244,G__16245) : self__.on_edit.call(null,G__16243,G__16244,G__16245));
});})(G__16229,G__16230,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16242 = (100);return setTimeout(G__16241,G__16242);
});})(G__16229,G__16230,___$1,map__16228,map__16228__$1,exit_type,map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exit_type,"out"))), "id": "input-ok"};var G__16240 = (function (){var G__16246 = {"id": "input-ok-mark"};var G__16247 = (function (){var G__16248 = "&#10003;";return goog.string.unescapeEntities(G__16248);
})();return React.DOM.span(G__16246,G__16247);
})();return React.DOM.div(G__16239,G__16240);
})();return React.DOM.div(G__16229,G__16230,G__16231);
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16224.prototype.om$core$IDidMount$ = true;
hivez.core.t16224.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,self__.edit_key).focus();
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16224.prototype.om$core$IInitState$ = true;
hivez.core.t16224.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,null], null);
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16226){var self__ = this;
var _16226__$1 = this;return self__.meta16225;
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16226,meta16225__$1){var self__ = this;
var _16226__$1 = this;return (new hivez.core.t16224(self__.input,self__.on_key_down,self__.owner,self__.p__16196,self__.hive,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.map__16223,self__.opts,meta16225__$1));
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t16224 = ((function (map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t16224(input__$1,on_key_down__$1,owner__$1,p__16196__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,map__16223__$2,opts__$1,meta16225){return (new hivez.core.t16224(input__$1,on_key_down__$1,owner__$1,p__16196__$1,hive__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,map__16223__$2,opts__$1,meta16225));
});})(map__16223,map__16223__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t16224(input,on_key_down,owner,p__16196,hive,edit_key,className,on_edit,id,map__16223__$1,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__16249){var map__16259 = p__16249;var map__16259__$1 = ((cljs.core.seq_QMARK_(map__16259))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16259):map__16259);var opts = map__16259__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16259__$1,cljs.core.constant$keyword$142);if(typeof hivez.core.t16260 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16260 = (function (on_edit,opts,map__16259,p__16249,owner,hive,input_control,meta16261){
this.on_edit = on_edit;
this.opts = opts;
this.map__16259 = map__16259;
this.p__16249 = p__16249;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta16261 = meta16261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16260.cljs$lang$type = true;
hivez.core.t16260.cljs$lang$ctorStr = "hivez.core/t16260";
hivez.core.t16260.cljs$lang$ctorPrWriter = ((function (map__16259,map__16259__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16260");
});})(map__16259,map__16259__$1,opts,on_edit))
;
hivez.core.t16260.prototype.om$core$IRenderState$ = true;
hivez.core.t16260.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16259,map__16259__$1,opts,on_edit){
return (function (_,p__16263){var self__ = this;
var map__16264 = p__16263;var map__16264__$1 = ((cljs.core.seq_QMARK_(map__16264))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16264):map__16264);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16264__$1,cljs.core.constant$keyword$140);var ___$1 = this;var G__16265 = {"id": "input-ctrl"};var G__16266 = (function (){var G__16267 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__16267) {
case "notes":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"notes-input",cljs.core.constant$keyword$144,"notes input",cljs.core.constant$keyword$143,cljs.core.constant$keyword$136,cljs.core.constant$keyword$142,self__.on_edit], null)], null));

break;
case "name":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$65,"name-input",cljs.core.constant$keyword$144,"name input single-line",cljs.core.constant$keyword$143,cljs.core.constant$keyword$64,cljs.core.constant$keyword$142,self__.on_edit,cljs.core.constant$keyword$141,((function (G__16267,G__16265,___$1,map__16264,map__16264__$1,editing,map__16259,map__16259__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__16267,G__16265,___$1,map__16264,map__16264__$1,editing,map__16259,map__16259__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})();return React.DOM.div(G__16265,G__16266);
});})(map__16259,map__16259__$1,opts,on_edit))
;
hivez.core.t16260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16259,map__16259__$1,opts,on_edit){
return (function (_16262){var self__ = this;
var _16262__$1 = this;return self__.meta16261;
});})(map__16259,map__16259__$1,opts,on_edit))
;
hivez.core.t16260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16259,map__16259__$1,opts,on_edit){
return (function (_16262,meta16261__$1){var self__ = this;
var _16262__$1 = this;return (new hivez.core.t16260(self__.on_edit,self__.opts,self__.map__16259,self__.p__16249,self__.owner,self__.hive,self__.input_control,meta16261__$1));
});})(map__16259,map__16259__$1,opts,on_edit))
;
hivez.core.__GT_t16260 = ((function (map__16259,map__16259__$1,opts,on_edit){
return (function __GT_t16260(on_edit__$1,opts__$1,map__16259__$2,p__16249__$1,owner__$1,hive__$1,input_control__$1,meta16261){return (new hivez.core.t16260(on_edit__$1,opts__$1,map__16259__$2,p__16249__$1,owner__$1,hive__$1,input_control__$1,meta16261));
});})(map__16259,map__16259__$1,opts,on_edit))
;
}
return (new hivez.core.t16260(on_edit,opts,map__16259__$1,p__16249,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__16269){var map__16287 = p__16269;var map__16287__$1 = ((cljs.core.seq_QMARK_(map__16287))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16287):map__16287);var opts = map__16287__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,cljs.core.constant$keyword$146);if(typeof hivez.core.t16288 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16288 = (function (begin_edit,opts,map__16287,p__16269,owner,hive,hive_info,meta16289){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16287 = map__16287;
this.p__16269 = p__16269;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16289 = meta16289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16288.cljs$lang$type = true;
hivez.core.t16288.cljs$lang$ctorStr = "hivez.core/t16288";
hivez.core.t16288.cljs$lang$ctorPrWriter = ((function (map__16287,map__16287__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16288");
});})(map__16287,map__16287__$1,opts,begin_edit))
;
hivez.core.t16288.prototype.om$core$IRender$ = true;
hivez.core.t16288.prototype.om$core$IRender$render$arity$1 = ((function (map__16287,map__16287__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16291 = {"id": "info"};var G__16292 = (function (){var G__16296 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (G__16291,___$1,map__16287,map__16287__$1,opts,begin_edit){
return (function (){var G__16297 = cljs.core.constant$keyword$64;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16297) : self__.begin_edit.call(null,G__16297));
});})(G__16291,___$1,map__16287,map__16287__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16296);
})();var G__16293 = (function (){var G__16298 = {"className": "origin"};var G__16299 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16298,G__16299);
})();var G__16294 = (function (){var G__16300 = {"className": "location"};var G__16301 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16300,G__16301);
})();var G__16295 = (function (){var G__16302 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (G__16291,G__16292,G__16293,G__16294,___$1,map__16287,map__16287__$1,opts,begin_edit){
return (function (){var G__16303 = cljs.core.constant$keyword$136;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16303) : self__.begin_edit.call(null,G__16303));
});})(G__16291,G__16292,G__16293,G__16294,___$1,map__16287,map__16287__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"};return React.DOM.div(G__16302);
})();return React.DOM.div(G__16291,G__16292,G__16293,G__16294,G__16295);
});})(map__16287,map__16287__$1,opts,begin_edit))
;
hivez.core.t16288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16287,map__16287__$1,opts,begin_edit){
return (function (_16290){var self__ = this;
var _16290__$1 = this;return self__.meta16289;
});})(map__16287,map__16287__$1,opts,begin_edit))
;
hivez.core.t16288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16287,map__16287__$1,opts,begin_edit){
return (function (_16290,meta16289__$1){var self__ = this;
var _16290__$1 = this;return (new hivez.core.t16288(self__.begin_edit,self__.opts,self__.map__16287,self__.p__16269,self__.owner,self__.hive,self__.hive_info,meta16289__$1));
});})(map__16287,map__16287__$1,opts,begin_edit))
;
hivez.core.__GT_t16288 = ((function (map__16287,map__16287__$1,opts,begin_edit){
return (function __GT_t16288(begin_edit__$1,opts__$1,map__16287__$2,p__16269__$1,owner__$1,hive__$1,hive_info__$1,meta16289){return (new hivez.core.t16288(begin_edit__$1,opts__$1,map__16287__$2,p__16269__$1,owner__$1,hive__$1,hive_info__$1,meta16289));
});})(map__16287,map__16287__$1,opts,begin_edit))
;
}
return (new hivez.core.t16288(begin_edit,opts,map__16287__$1,p__16269,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t16314 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16314 = (function (owner,data,drawer,meta16315){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta16315 = meta16315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16314.cljs$lang$type = true;
hivez.core.t16314.cljs$lang$ctorStr = "hivez.core/t16314";
hivez.core.t16314.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16314");
});
hivez.core.t16314.prototype.om$core$IRenderState$ = true;
hivez.core.t16314.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16317){var self__ = this;
var map__16318 = p__16317;var map__16318__$1 = ((cljs.core.seq_QMARK_(map__16318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16318):map__16318);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16318__$1,cljs.core.constant$keyword$140);var ___$1 = this;var G__16319 = {"id": "drawer-wrapper"};var G__16320 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input_control,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,editing], null),cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.on_edit,((function (G__16319,___$1,map__16318,map__16318__$1,editing){
return (function (){return hivez.core.end_edit(self__.owner);
});})(G__16319,___$1,map__16318,map__16318__$1,editing))
)], null)], null)):null);var G__16321 = (function (){var G__16322 = {"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3640__auto__ = cljs.core.not(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data));if(or__3640__auto__)
{return or__3640__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"};var G__16323 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.hive_info,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$146,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.begin_edit,self__.owner)], null)], null)):null);return React.DOM.div(G__16322,G__16323);
})();return React.DOM.div(G__16319,G__16320,G__16321);
});
hivez.core.t16314.prototype.om$core$IInitState$ = true;
hivez.core.t16314.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,null], null);
});
hivez.core.t16314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16316){var self__ = this;
var _16316__$1 = this;return self__.meta16315;
});
hivez.core.t16314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16316,meta16315__$1){var self__ = this;
var _16316__$1 = this;return (new hivez.core.t16314(self__.owner,self__.data,self__.drawer,meta16315__$1));
});
hivez.core.__GT_t16314 = (function __GT_t16314(owner__$1,data__$1,drawer__$1,meta16315){return (new hivez.core.t16314(owner__$1,data__$1,drawer__$1,meta16315));
});
}
return (new hivez.core.t16314(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16332 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16332 = (function (owner,data,app,meta16333){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16333 = meta16333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16332.cljs$lang$type = true;
hivez.core.t16332.cljs$lang$ctorStr = "hivez.core/t16332";
hivez.core.t16332.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16332");
});
hivez.core.t16332.prototype.om$core$IRender$ = true;
hivez.core.t16332.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16335 = {"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data)))};var G__16336 = (function (){var G__16338 = {"className": "flex-content"};var G__16339 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.goog_map,self__.data);return React.DOM.div(G__16338,G__16339);
})();var G__16337 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.drawer,self__.data);return React.DOM.div(G__16335,G__16336,G__16337);
});
hivez.core.t16332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16334){var self__ = this;
var _16334__$1 = this;return self__.meta16333;
});
hivez.core.t16332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16334,meta16333__$1){var self__ = this;
var _16334__$1 = this;return (new hivez.core.t16332(self__.owner,self__.data,self__.app,meta16333__$1));
});
hivez.core.__GT_t16332 = (function __GT_t16332(owner__$1,data__$1,app__$1,meta16333){return (new hivez.core.t16332(owner__$1,data__$1,app__$1,meta16333));
});
}
return (new hivez.core.t16332(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render();
hivez.core.handleOrientation();
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,document.getElementById("content")], null));
});
