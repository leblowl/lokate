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
return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
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
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t16151 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16151 = (function (owner,data,goog_map,meta16152){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta16152 = meta16152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16151.cljs$lang$type = true;
hivez.core.t16151.cljs$lang$ctorStr = "hivez.core/t16151";
hivez.core.t16151.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16151");
});
hivez.core.t16151.prototype.om$core$IRender$ = true;
hivez.core.t16151.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16154 = {"id": "map-canvas"};return React.DOM.div(G__16154);
});
hivez.core.t16151.prototype.om$core$IDidMount$ = true;
hivez.core.t16151.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),map_options));var G__16155_16170 = map;var G__16156_16171 = "rightclick";var G__16157_16172 = ((function (G__16155_16170,G__16156_16171,map_options,map,___$1){
return (function (evt){var marker = hivez.core.mark_pos(map,evt.latLng);hivez.core.add_hive(self__.data,marker);
var G__16158_16173 = marker;var G__16159_16174 = "click";var G__16160_16175 = ((function (G__16158_16173,G__16159_16174,marker,G__16155_16170,G__16156_16171,map_options,map,___$1){
return (function (___$2){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,hivez.core.pos_key(marker.getPosition()));
return hivez.core.activate_marker(self__.data,marker);
});})(G__16158_16173,G__16159_16174,marker,G__16155_16170,G__16156_16171,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16158_16173,G__16159_16174,G__16160_16175) : google.maps.event.addListener.call(null,G__16158_16173,G__16159_16174,G__16160_16175));
var G__16161 = marker;var G__16162 = "rightclick";var G__16163 = ((function (G__16161,G__16162,marker,G__16155_16170,G__16156_16171,map_options,map,___$1){
return (function (___$2){marker.setMap(null);
var active = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__16164 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16164) : cljs.core.deref.call(null,G__16164));
})());var fallen_key = hivez.core.pos_key(marker.getPosition());om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$132,((function (active,fallen_key,G__16161,G__16162,marker,G__16155_16170,G__16156_16171,map_options,map,___$1){
return (function (p1__16131_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16131_SHARP_,fallen_key);
});})(active,fallen_key,G__16161,G__16162,marker,G__16155_16170,G__16156_16171,map_options,map,___$1))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fallen_key,active))
{var new_active = cljs.core.first(hivez.core.nearest(fallen_key,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16165 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16165) : cljs.core.deref.call(null,G__16165));
})())));om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,new_active);
if(cljs.core.truth_(new_active))
{return hivez.core.activate_marker(self__.data,cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1((function (){var G__16166 = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16167 = self__.data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16167) : cljs.core.deref.call(null,G__16167));
})());return (new_active.cljs$core$IFn$_invoke$arity$1 ? new_active.cljs$core$IFn$_invoke$arity$1(G__16166) : new_active.call(null,G__16166));
})()));
} else
{return null;
}
} else
{return null;
}
});})(G__16161,G__16162,marker,G__16155_16170,G__16156_16171,map_options,map,___$1))
;return (google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16161,G__16162,G__16163) : google.maps.event.addListener.call(null,G__16161,G__16162,G__16163));
});})(G__16155_16170,G__16156_16171,map_options,map,___$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16155_16170,G__16156_16171,G__16157_16172) : google.maps.event.addListener.call(null,G__16155_16170,G__16156_16171,G__16157_16172));
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1))
);
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
return window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){var G__16168 = map;var G__16169 = "resize";return (google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2 ? google.maps.event.trigger.cljs$core$IFn$_invoke$arity$2(G__16168,G__16169) : google.maps.event.trigger.call(null,G__16168,G__16169));
});})(map_options,map,___$1))
);
});
hivez.core.t16151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16153){var self__ = this;
var _16153__$1 = this;return self__.meta16152;
});
hivez.core.t16151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16153,meta16152__$1){var self__ = this;
var _16153__$1 = this;return (new hivez.core.t16151(self__.owner,self__.data,self__.goog_map,meta16152__$1));
});
hivez.core.__GT_t16151 = (function __GT_t16151(owner__$1,data__$1,goog_map__$1,meta16152){return (new hivez.core.t16151(owner__$1,data__$1,goog_map__$1,meta16152));
});
}
return (new hivez.core.t16151(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__16176){
var args = cljs.core.seq(arglist__16176);
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
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$139,edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$139,null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(hive,key,(function (){var G__16178 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,key).innerHTML;return goog.string.unescapeEntities(G__16178);
})());
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
hivez.core.input = (function input(hive,owner,p__16179){var map__16206 = p__16179;var map__16206__$1 = ((cljs.core.seq_QMARK_(map__16206))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16206):map__16206);var opts = map__16206__$1;var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16206__$1,cljs.core.constant$keyword$140);var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16206__$1,cljs.core.constant$keyword$141);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16206__$1,cljs.core.constant$keyword$142);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16206__$1,cljs.core.constant$keyword$143);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16206__$1,cljs.core.constant$keyword$65);if(typeof hivez.core.t16207 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16207 = (function (input,on_key_down,owner,hive,edit_key,map__16206,className,p__16179,on_edit,id,opts,meta16208){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.map__16206 = map__16206;
this.className = className;
this.p__16179 = p__16179;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta16208 = meta16208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16207.cljs$lang$type = true;
hivez.core.t16207.cljs$lang$ctorStr = "hivez.core/t16207";
hivez.core.t16207.cljs$lang$ctorPrWriter = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16207");
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16207.prototype.om$core$IRenderState$ = true;
hivez.core.t16207.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__16210){var self__ = this;
var map__16211 = p__16210;var map__16211__$1 = ((cljs.core.seq_QMARK_(map__16211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16211):map__16211);var exit_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16211__$1,cljs.core.constant$keyword$144);var ___$1 = this;var G__16212 = {"id": "input-wrapper"};var G__16213 = (function (){var G__16215 = {"dangerouslySetInnerHTML": {"__html": (function (){var G__16221 = self__.hive;return (self__.edit_key.cljs$core$IFn$_invoke$arity$1 ? self__.edit_key.cljs$core$IFn$_invoke$arity$1(G__16221) : self__.edit_key.call(null,G__16221));
})()}, "onBlur": ((function (G__16212,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$144,"out");
var G__16216 = ((function (G__16212,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16218 = self__.hive;var G__16219 = self__.edit_key;var G__16220 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16218,G__16219,G__16220) : self__.on_edit.call(null,G__16218,G__16219,G__16220));
});})(G__16212,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16217 = (100);return setTimeout(G__16216,G__16217);
});})(G__16212,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display(cljs.core.not(exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id};return React.DOM.div(G__16215);
})();var G__16214 = (function (){var G__16222 = {"onClick": ((function (G__16212,G__16213,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$144,"btn");
var G__16224 = ((function (G__16212,G__16213,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16226 = self__.hive;var G__16227 = self__.edit_key;var G__16228 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16226,G__16227,G__16228) : self__.on_edit.call(null,G__16226,G__16227,G__16228));
});})(G__16212,G__16213,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16225 = (100);return setTimeout(G__16224,G__16225);
});})(G__16212,G__16213,___$1,map__16211,map__16211__$1,exit_type,map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exit_type,"out"))), "id": "input-ok"};var G__16223 = (function (){var G__16229 = {"id": "input-ok-mark"};var G__16230 = (function (){var G__16231 = "&#10003;";return goog.string.unescapeEntities(G__16231);
})();return React.DOM.span(G__16229,G__16230);
})();return React.DOM.div(G__16222,G__16223);
})();return React.DOM.div(G__16212,G__16213,G__16214);
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16207.prototype.om$core$IDidMount$ = true;
hivez.core.t16207.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,self__.edit_key).focus();
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16207.prototype.om$core$IInitState$ = true;
hivez.core.t16207.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,null], null);
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16209){var self__ = this;
var _16209__$1 = this;return self__.meta16208;
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t16207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16209,meta16208__$1){var self__ = this;
var _16209__$1 = this;return (new hivez.core.t16207(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.map__16206,self__.className,self__.p__16179,self__.on_edit,self__.id,self__.opts,meta16208__$1));
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t16207 = ((function (map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t16207(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,map__16206__$2,className__$1,p__16179__$1,on_edit__$1,id__$1,opts__$1,meta16208){return (new hivez.core.t16207(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,map__16206__$2,className__$1,p__16179__$1,on_edit__$1,id__$1,opts__$1,meta16208));
});})(map__16206,map__16206__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t16207(input,on_key_down,owner,hive,edit_key,map__16206__$1,className,p__16179,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__16232){var map__16242 = p__16232;var map__16242__$1 = ((cljs.core.seq_QMARK_(map__16242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16242):map__16242);var opts = map__16242__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16242__$1,cljs.core.constant$keyword$141);if(typeof hivez.core.t16243 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16243 = (function (on_edit,opts,map__16242,p__16232,owner,hive,input_control,meta16244){
this.on_edit = on_edit;
this.opts = opts;
this.map__16242 = map__16242;
this.p__16232 = p__16232;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta16244 = meta16244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16243.cljs$lang$type = true;
hivez.core.t16243.cljs$lang$ctorStr = "hivez.core/t16243";
hivez.core.t16243.cljs$lang$ctorPrWriter = ((function (map__16242,map__16242__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16243");
});})(map__16242,map__16242__$1,opts,on_edit))
;
hivez.core.t16243.prototype.om$core$IRenderState$ = true;
hivez.core.t16243.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16242,map__16242__$1,opts,on_edit){
return (function (_,p__16246){var self__ = this;
var map__16247 = p__16246;var map__16247__$1 = ((cljs.core.seq_QMARK_(map__16247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16247):map__16247);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16247__$1,cljs.core.constant$keyword$139);var ___$1 = this;var G__16248 = {"id": "input-ctrl"};var G__16249 = (function (){var G__16250 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__16250) {
case "notes":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"notes-input",cljs.core.constant$keyword$143,"notes input",cljs.core.constant$keyword$142,cljs.core.constant$keyword$136,cljs.core.constant$keyword$141,self__.on_edit], null)], null));

break;
case "name":
return om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$65,"name-input",cljs.core.constant$keyword$143,"name input single-line",cljs.core.constant$keyword$142,cljs.core.constant$keyword$64,cljs.core.constant$keyword$141,self__.on_edit,cljs.core.constant$keyword$140,((function (G__16250,G__16248,___$1,map__16247,map__16247__$1,editing,map__16242,map__16242__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__16250,G__16248,___$1,map__16247,map__16247__$1,editing,map__16242,map__16242__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})();return React.DOM.div(G__16248,G__16249);
});})(map__16242,map__16242__$1,opts,on_edit))
;
hivez.core.t16243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16242,map__16242__$1,opts,on_edit){
return (function (_16245){var self__ = this;
var _16245__$1 = this;return self__.meta16244;
});})(map__16242,map__16242__$1,opts,on_edit))
;
hivez.core.t16243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16242,map__16242__$1,opts,on_edit){
return (function (_16245,meta16244__$1){var self__ = this;
var _16245__$1 = this;return (new hivez.core.t16243(self__.on_edit,self__.opts,self__.map__16242,self__.p__16232,self__.owner,self__.hive,self__.input_control,meta16244__$1));
});})(map__16242,map__16242__$1,opts,on_edit))
;
hivez.core.__GT_t16243 = ((function (map__16242,map__16242__$1,opts,on_edit){
return (function __GT_t16243(on_edit__$1,opts__$1,map__16242__$2,p__16232__$1,owner__$1,hive__$1,input_control__$1,meta16244){return (new hivez.core.t16243(on_edit__$1,opts__$1,map__16242__$2,p__16232__$1,owner__$1,hive__$1,input_control__$1,meta16244));
});})(map__16242,map__16242__$1,opts,on_edit))
;
}
return (new hivez.core.t16243(on_edit,opts,map__16242__$1,p__16232,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__16252){var map__16270 = p__16252;var map__16270__$1 = ((cljs.core.seq_QMARK_(map__16270))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16270):map__16270);var opts = map__16270__$1;var begin_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16270__$1,cljs.core.constant$keyword$145);if(typeof hivez.core.t16271 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16271 = (function (begin_edit,opts,map__16270,p__16252,owner,hive,hive_info,meta16272){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__16270 = map__16270;
this.p__16252 = p__16252;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16272 = meta16272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16271.cljs$lang$type = true;
hivez.core.t16271.cljs$lang$ctorStr = "hivez.core/t16271";
hivez.core.t16271.cljs$lang$ctorPrWriter = ((function (map__16270,map__16270__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16271");
});})(map__16270,map__16270__$1,opts,begin_edit))
;
hivez.core.t16271.prototype.om$core$IRender$ = true;
hivez.core.t16271.prototype.om$core$IRender$render$arity$1 = ((function (map__16270,map__16270__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;var G__16274 = {"id": "info"};var G__16275 = (function (){var G__16279 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (G__16274,___$1,map__16270,map__16270__$1,opts,begin_edit){
return (function (){var G__16280 = cljs.core.constant$keyword$64;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16280) : self__.begin_edit.call(null,G__16280));
});})(G__16274,___$1,map__16270,map__16270__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"};return React.DOM.span(G__16279);
})();var G__16276 = (function (){var G__16281 = {"className": "origin"};var G__16282 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16281,G__16282);
})();var G__16277 = (function (){var G__16283 = {"className": "location"};var G__16284 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16283,G__16284);
})();var G__16278 = (function (){var G__16285 = {"dangerouslySetInnerHTML": {"__html": cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (G__16274,G__16275,G__16276,G__16277,___$1,map__16270,map__16270__$1,opts,begin_edit){
return (function (){var G__16286 = cljs.core.constant$keyword$136;return (self__.begin_edit.cljs$core$IFn$_invoke$arity$1 ? self__.begin_edit.cljs$core$IFn$_invoke$arity$1(G__16286) : self__.begin_edit.call(null,G__16286));
});})(G__16274,G__16275,G__16276,G__16277,___$1,map__16270,map__16270__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"};return React.DOM.div(G__16285);
})();return React.DOM.div(G__16274,G__16275,G__16276,G__16277,G__16278);
});})(map__16270,map__16270__$1,opts,begin_edit))
;
hivez.core.t16271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16270,map__16270__$1,opts,begin_edit){
return (function (_16273){var self__ = this;
var _16273__$1 = this;return self__.meta16272;
});})(map__16270,map__16270__$1,opts,begin_edit))
;
hivez.core.t16271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16270,map__16270__$1,opts,begin_edit){
return (function (_16273,meta16272__$1){var self__ = this;
var _16273__$1 = this;return (new hivez.core.t16271(self__.begin_edit,self__.opts,self__.map__16270,self__.p__16252,self__.owner,self__.hive,self__.hive_info,meta16272__$1));
});})(map__16270,map__16270__$1,opts,begin_edit))
;
hivez.core.__GT_t16271 = ((function (map__16270,map__16270__$1,opts,begin_edit){
return (function __GT_t16271(begin_edit__$1,opts__$1,map__16270__$2,p__16252__$1,owner__$1,hive__$1,hive_info__$1,meta16272){return (new hivez.core.t16271(begin_edit__$1,opts__$1,map__16270__$2,p__16252__$1,owner__$1,hive__$1,hive_info__$1,meta16272));
});})(map__16270,map__16270__$1,opts,begin_edit))
;
}
return (new hivez.core.t16271(begin_edit,opts,map__16270__$1,p__16252,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t16297 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16297 = (function (owner,data,drawer,meta16298){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta16298 = meta16298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16297.cljs$lang$type = true;
hivez.core.t16297.cljs$lang$ctorStr = "hivez.core/t16297";
hivez.core.t16297.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16297");
});
hivez.core.t16297.prototype.om$core$IRenderState$ = true;
hivez.core.t16297.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16300){var self__ = this;
var map__16301 = p__16300;var map__16301__$1 = ((cljs.core.seq_QMARK_(map__16301))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16301):map__16301);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16301__$1,cljs.core.constant$keyword$139);var ___$1 = this;var G__16302 = {"id": "drawer-wrapper"};var G__16303 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.input_control,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,editing], null),cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.on_edit,((function (G__16302,___$1,map__16301,map__16301__$1,editing){
return (function (){return hivez.core.end_edit(self__.owner);
});})(G__16302,___$1,map__16301,map__16301__$1,editing))
)], null)], null)):null);var G__16304 = (function (){var G__16305 = {"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3640__auto__ = cljs.core.not(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data));if(or__3640__auto__)
{return or__3640__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"};var G__16306 = (cljs.core.truth_(cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.hive_info,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data).call(null,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hivez.core.begin_edit,self__.owner)], null)], null)):null);return React.DOM.div(G__16305,G__16306);
})();return React.DOM.div(G__16302,G__16303,G__16304);
});
hivez.core.t16297.prototype.om$core$IInitState$ = true;
hivez.core.t16297.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,null], null);
});
hivez.core.t16297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16299){var self__ = this;
var _16299__$1 = this;return self__.meta16298;
});
hivez.core.t16297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16299,meta16298__$1){var self__ = this;
var _16299__$1 = this;return (new hivez.core.t16297(self__.owner,self__.data,self__.drawer,meta16298__$1));
});
hivez.core.__GT_t16297 = (function __GT_t16297(owner__$1,data__$1,drawer__$1,meta16298){return (new hivez.core.t16297(owner__$1,data__$1,drawer__$1,meta16298));
});
}
return (new hivez.core.t16297(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16315 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16315 = (function (owner,data,app,meta16316){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16316 = meta16316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16315.cljs$lang$type = true;
hivez.core.t16315.cljs$lang$ctorStr = "hivez.core/t16315";
hivez.core.t16315.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16315");
});
hivez.core.t16315.prototype.om$core$IRender$ = true;
hivez.core.t16315.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16318 = {"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data)))};var G__16319 = (function (){var G__16321 = {"className": "flex-content"};var G__16322 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.goog_map,self__.data);return React.DOM.div(G__16321,G__16322);
})();var G__16320 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.drawer,self__.data);return React.DOM.div(G__16318,G__16319,G__16320);
});
hivez.core.t16315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16317){var self__ = this;
var _16317__$1 = this;return self__.meta16316;
});
hivez.core.t16315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16317,meta16316__$1){var self__ = this;
var _16317__$1 = this;return (new hivez.core.t16315(self__.owner,self__.data,self__.app,meta16316__$1));
});
hivez.core.__GT_t16315 = (function __GT_t16315(owner__$1,data__$1,app__$1,meta16316){return (new hivez.core.t16315(owner__$1,data__$1,app__$1,meta16316));
});
}
return (new hivez.core.t16315(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render();
hivez.core.handleOrientation();
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,document.getElementById("content")], null));
});
