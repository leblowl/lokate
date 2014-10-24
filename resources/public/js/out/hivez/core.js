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
hivez.core.app_state = (function (){var G__16112 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$131,(((window.innerHeight > window.innerWidth))?cljs.core.constant$keyword$133:cljs.core.constant$keyword$134),cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$64,"Name",cljs.core.constant$keyword$136,"12/21/2012",cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,(0),cljs.core.constant$keyword$140,(0)], null),cljs.core.constant$keyword$138,"Notes..."], null)], null),cljs.core.constant$keyword$63,cljs.core.constant$keyword$135], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16112) : cljs.core.atom.call(null,G__16112));
})();
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16113_SHARP_){if(!((cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(p1__16113_SHARP_) == null)))
{return cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(p1__16113_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
} else
{return null;
}
}),cljs.core.vals(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1((function (){var G__16115 = data;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16115) : cljs.core.deref.call(null,G__16115));
})()))));
return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
});
hivez.core.handleOrientation = (function handleOrientation(evt){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.core.app_state,(function (p1__16116_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16116_SHARP_,cljs.core.constant$keyword$131,(((window.innerHeight > window.innerWidth))?cljs.core.constant$keyword$133:cljs.core.constant$keyword$134));
}));
});
hivez.core.lat_lng_key = (function lat_lng_key(lat_lng){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.add_hive = (function add_hive(data,marker){om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$132,(function (_){var pos = marker.getPosition();return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_,hivez.core.lat_lng_key(pos),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,marker,cljs.core.constant$keyword$64,"",cljs.core.constant$keyword$136,hivez.core.fdate_now(),cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,pos.lat(),cljs.core.constant$keyword$140,pos.lng()], null),cljs.core.constant$keyword$138,""], null));
}));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$63,hivez.core.lat_lng_key(marker.getPosition()));
return hivez.core.activate_marker(data,marker);
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t16130 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16130 = (function (owner,data,goog_map,meta16131){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16130.cljs$lang$type = true;
hivez.core.t16130.cljs$lang$ctorStr = "hivez.core/t16130";
hivez.core.t16130.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16130");
});
hivez.core.t16130.prototype.om$core$IRender$ = true;
hivez.core.t16130.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16133 = {"id": "map-canvas"};return React.DOM.div(G__16133);
});
hivez.core.t16130.prototype.om$core$IDidMount$ = true;
hivez.core.t16130.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner),map_options));var G__16134_16143 = map;var G__16135_16144 = "rightclick";var G__16136_16145 = ((function (G__16134_16143,G__16135_16144,map_options,map,this$__$1){
return (function (evt){var marker = hivez.core.mark_pos(map,evt.latLng);hivez.core.add_hive(self__.data,marker);
var G__16137_16146 = marker;var G__16138_16147 = "click";var G__16139_16148 = ((function (G__16137_16146,G__16138_16147,marker,G__16134_16143,G__16135_16144,map_options,map,this$__$1){
return (function (_){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,hivez.core.lat_lng_key(marker.getPosition()));
return hivez.core.activate_marker(self__.data,marker);
});})(G__16137_16146,G__16138_16147,marker,G__16134_16143,G__16135_16144,map_options,map,this$__$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16137_16146,G__16138_16147,G__16139_16148) : google.maps.event.addListener.call(null,G__16137_16146,G__16138_16147,G__16139_16148));
var G__16140 = marker;var G__16141 = "rightclick";var G__16142 = ((function (G__16140,G__16141,marker,G__16134_16143,G__16135_16144,map_options,map,this$__$1){
return (function (_){marker.setMap(null);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.constant$keyword$63,cljs.core.constant$keyword$135);
});})(G__16140,G__16141,marker,G__16134_16143,G__16135_16144,map_options,map,this$__$1))
;return (google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16140,G__16141,G__16142) : google.maps.event.addListener.call(null,G__16140,G__16141,G__16142));
});})(G__16134_16143,G__16135_16144,map_options,map,this$__$1))
;(google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3 ? google.maps.event.addListener.cljs$core$IFn$_invoke$arity$3(G__16134_16143,G__16135_16144,G__16136_16145) : google.maps.event.addListener.call(null,G__16134_16143,G__16135_16144,G__16136_16145));
if(cljs.core.truth_(navigator.geolocation))
{return navigator.geolocation.getCurrentPosition(((function (map_options,map,this$__$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,this$__$1))
);
} else
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hey, where'd you go!? Geolocation Disabled"], 0));
}
});
hivez.core.t16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){var self__ = this;
var _16132__$1 = this;return self__.meta16131;
});
hivez.core.t16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){var self__ = this;
var _16132__$1 = this;return (new hivez.core.t16130(self__.owner,self__.data,self__.goog_map,meta16131__$1));
});
hivez.core.__GT_t16130 = (function __GT_t16130(owner__$1,data__$1,goog_map__$1,meta16131){return (new hivez.core.t16130(owner__$1,data__$1,goog_map__$1,meta16131));
});
}
return (new hivez.core.t16130(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__16149){
var args = cljs.core.seq(arglist__16149);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
hivez.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
hivez.core.display_name = (function display_name(hive){return cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(hive);
});
hivez.core.display_pos = (function display_pos(hive){var pos = cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(pos)], 0)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["%.2f",cljs.core.constant$keyword$140.cljs$core$IFn$_invoke$arity$1(pos)], 0))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.display_notes = (function display_notes(hive){return cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(hive);
});
hivez.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,edit_key,(function (_){return e.target.value;
}));
});
hivez.core.begin_edit = (function begin_edit(owner){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$142,true);
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input").focus();
});
hivez.core.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$142,false);
if(cljs.core.truth_(cb))
{var G__16151 = text;return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__16151) : cb.call(null,G__16151));
} else
{return null;
}
});
hivez.core.editable = (function editable(data,owner,p__16154){var map__16167 = p__16154;var map__16167__$1 = ((cljs.core.seq_QMARK_(map__16167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16167):map__16167);var opts = map__16167__$1;var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16167__$1,cljs.core.constant$keyword$143);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16167__$1,cljs.core.constant$keyword$144);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16167__$1,cljs.core.constant$keyword$145);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16167__$1,cljs.core.constant$keyword$65);if(typeof hivez.core.t16168 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16168 = (function (owner,data,editable,p__16154,edit_key,map__16167,className,on_edit,id,opts,meta16169){
this.owner = owner;
this.data = data;
this.editable = editable;
this.p__16154 = p__16154;
this.edit_key = edit_key;
this.map__16167 = map__16167;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta16169 = meta16169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16168.cljs$lang$type = true;
hivez.core.t16168.cljs$lang$ctorStr = "hivez.core/t16168";
hivez.core.t16168.cljs$lang$ctorPrWriter = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16168");
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t16168.prototype.om$core$IRenderState$ = true;
hivez.core.t16168.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (_,p__16171){var self__ = this;
var map__16172 = p__16171;var map__16172__$1 = ((cljs.core.seq_QMARK_(map__16172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16172):map__16172);var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,cljs.core.constant$keyword$142);var ___$1 = this;var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,self__.edit_key);var G__16173 = {"onBlur": ((function (text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (e){return hivez.core.end_edit(text,self__.owner,self__.on_edit);
});})(text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
, "className": self__.className, "id": self__.id};var G__16174 = (function (){var G__16176 = {"onClick": ((function (G__16173,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (){return hivez.core.begin_edit(self__.owner);
});})(G__16173,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
, "style": hivez.core.display(cljs.core.not(editing))};var G__16177 = text;return React.DOM.span(G__16176,G__16177);
})();var G__16175 = (function (){var G__16178 = {"onBlur": ((function (G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (e){if(cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$142)))
{return hivez.core.end_edit(text,self__.owner,self__.on_edit);
} else
{return null;
}
});})(G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
, "onKeyPress": ((function (G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (p1__16153_SHARP_){if((p1__16153_SHARP_.keyCode === (13)))
{return hivez.core.end_edit(text,self__.owner,self__.on_edit);
} else
{return null;
}
});})(G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
, "onChange": ((function (G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (p1__16152_SHARP_){return hivez.core.handle_change(p1__16152_SHARP_,self__.data,self__.edit_key,self__.owner);
});})(G__16173,G__16174,text,___$1,map__16172,map__16172__$1,editing,map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
, "value": text, "style": hivez.core.display(editing), "ref": "input"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__16178) : om.dom.input.call(null,G__16178));
})();return React.DOM.div(G__16173,G__16174,G__16175);
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t16168.prototype.om$core$IInitState$ = true;
hivez.core.t16168.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,false], null);
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t16168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (_16170){var self__ = this;
var _16170__$1 = this;return self__.meta16169;
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t16168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function (_16170,meta16169__$1){var self__ = this;
var _16170__$1 = this;return (new hivez.core.t16168(self__.owner,self__.data,self__.editable,self__.p__16154,self__.edit_key,self__.map__16167,self__.className,self__.on_edit,self__.id,self__.opts,meta16169__$1));
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.__GT_t16168 = ((function (map__16167,map__16167__$1,opts,on_edit,edit_key,className,id){
return (function __GT_t16168(owner__$1,data__$1,editable__$1,p__16154__$1,edit_key__$1,map__16167__$2,className__$1,on_edit__$1,id__$1,opts__$1,meta16169){return (new hivez.core.t16168(owner__$1,data__$1,editable__$1,p__16154__$1,edit_key__$1,map__16167__$2,className__$1,on_edit__$1,id__$1,opts__$1,meta16169));
});})(map__16167,map__16167__$1,opts,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t16168(owner,data,editable,p__16154,edit_key,map__16167__$1,className,on_edit,id,opts,null));
});
hivez.core.hive_info = (function hive_info(hive,owner){if(typeof hivez.core.t16191 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16191 = (function (owner,hive,hive_info,meta16192){
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta16192 = meta16192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16191.cljs$lang$type = true;
hivez.core.t16191.cljs$lang$ctorStr = "hivez.core/t16191";
hivez.core.t16191.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16191");
});
hivez.core.t16191.prototype.om$core$IRender$ = true;
hivez.core.t16191.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16194 = {"className": "info", "id": "info"};var G__16195 = om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.editable,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"name",cljs.core.constant$keyword$145,"editable-input",cljs.core.constant$keyword$144,cljs.core.constant$keyword$64,cljs.core.constant$keyword$143,null], null)], null));var G__16196 = (function (){var G__16199 = {"className": "origin"};var G__16200 = hivez.core.display_origin(self__.hive);return React.DOM.div(G__16199,G__16200);
})();var G__16197 = (function (){var G__16201 = {"className": "location"};var G__16202 = hivez.core.display_pos(self__.hive);return React.DOM.div(G__16201,G__16202);
})();var G__16198 = om.core.build.cljs$core$IFn$_invoke$arity$3(hivez.core.editable,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,"notes",cljs.core.constant$keyword$145,"editable-input",cljs.core.constant$keyword$144,cljs.core.constant$keyword$138,cljs.core.constant$keyword$143,null], null)], null));return React.DOM.div(G__16194,G__16195,G__16196,G__16197,G__16198);
});
hivez.core.t16191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16193){var self__ = this;
var _16193__$1 = this;return self__.meta16192;
});
hivez.core.t16191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16193,meta16192__$1){var self__ = this;
var _16193__$1 = this;return (new hivez.core.t16191(self__.owner,self__.hive,self__.hive_info,meta16192__$1));
});
hivez.core.__GT_t16191 = (function __GT_t16191(owner__$1,hive__$1,hive_info__$1,meta16192){return (new hivez.core.t16191(owner__$1,hive__$1,hive_info__$1,meta16192));
});
}
return (new hivez.core.t16191(owner,hive,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t16213 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t16213 = (function (owner,data,app,meta16214){
this.owner = owner;
this.data = data;
this.app = app;
this.meta16214 = meta16214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t16213.cljs$lang$type = true;
hivez.core.t16213.cljs$lang$ctorStr = "hivez.core/t16213";
hivez.core.t16213.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.core/t16213");
});
hivez.core.t16213.prototype.om$core$IRender$ = true;
hivez.core.t16213.prototype.om$core$IRender$render$arity$1 = (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;var G__16216 = {"className": ("flex-container"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$133))?" column":" row")))};var G__16217 = (function (){var G__16219 = {"className": ("one"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$133))?" vert":" flat")))};var G__16220 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.goog_map,self__.data);return React.DOM.div(G__16219,G__16220);
})();var G__16218 = (function (){var G__16221 = {"className": ("two"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$133))?" vert":" flat")))};var G__16222 = om.core.build.cljs$core$IFn$_invoke$arity$2(hivez.core.hive_info,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(self__.data)));return React.DOM.div(G__16221,G__16222);
})();return React.DOM.div(G__16216,G__16217,G__16218);
});
hivez.core.t16213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16215){var self__ = this;
var _16215__$1 = this;return self__.meta16214;
});
hivez.core.t16213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16215,meta16214__$1){var self__ = this;
var _16215__$1 = this;return (new hivez.core.t16213(self__.owner,self__.data,self__.app,meta16214__$1));
});
hivez.core.__GT_t16213 = (function __GT_t16213(owner__$1,data__$1,app__$1,meta16214){return (new hivez.core.t16213(owner__$1,data__$1,app__$1,meta16214));
});
}
return (new hivez.core.t16213(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render();
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root(hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,document.getElementById("content")], null));
});
