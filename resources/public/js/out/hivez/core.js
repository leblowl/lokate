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
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),null], null));
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return "portrait";
} else
{return "landscape";
}
});
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__26657_SHARP_){return cljs.core.assoc.call(null,p1__26657_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.new_hive = (function new_hive(marker){var pos = marker.getPosition();return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__26658_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__26658_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
if(cljs.core.truth_(marker))
{return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
} else
{return null;
}
});
hivez.core.add_hive = (function add_hive(data,marker){var key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (key){
return (function (p1__26659_SHARP_){return cljs.core.assoc.call(null,p1__26659_SHARP_,key,hivez.core.new_hive.call(null,marker));
});})(key))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),key);
return hivez.core.activate_marker.call(null,data,marker);
});
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
/**
* Euclidean distance between 2 points
*/
hivez.core.distance = (function distance(pos1,pos2){return Math.pow.call(null,(Math.pow.call(null,(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos2)),(2)) + Math.pow.call(null,(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos2)),(2))),0.5);
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__26660_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26660_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t26665 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26665 = (function (owner,data,goog_map,meta26666){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta26666 = meta26666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26665.cljs$lang$type = true;
hivez.core.t26665.cljs$lang$ctorStr = "hivez.core/t26665";
hivez.core.t26665.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26665");
});
hivez.core.t26665.prototype.om$core$IRender$ = true;
hivez.core.t26665.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t26665.prototype.om$core$IDidMount$ = true;
hivez.core.t26665.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1){
return (function (evt){var marker = hivez.core.mark_pos.call(null,map,evt.latLng);hivez.core.add_hive.call(null,self__.data,marker);
map.panTo(marker.getPosition());
google.maps.event.addListener.call(null,marker,"click",((function (marker,map_options,map,___$1){
return (function (___$2){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),hivez.core.pos_key.call(null,marker.getPosition())))
{om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),null);
return hivez.core.activate_marker.call(null,self__.data,null);
} else
{om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.pos_key.call(null,marker.getPosition()));
hivez.core.activate_marker.call(null,self__.data,marker);
return map.panTo(marker.getPosition());
}
});})(marker,map_options,map,___$1))
);
return google.maps.event.addListener.call(null,marker,"rightclick",((function (marker,map_options,map,___$1){
return (function (___$2){marker.setMap(null);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data));var fallen_key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (active,fallen_key,marker,map_options,map,___$1){
return (function (p1__26661_SHARP_){return cljs.core.dissoc.call(null,p1__26661_SHARP_,fallen_key);
});})(active,fallen_key,marker,map_options,map,___$1))
);
if(cljs.core._EQ_.call(null,fallen_key,active))
{var new_active = cljs.core.first.call(null,hivez.core.nearest.call(null,fallen_key,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),new_active);
if(cljs.core.truth_(new_active))
{hivez.core.activate_marker.call(null,self__.data,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(new_active.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)))));
return map.panTo(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(new_active.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)))).getPosition());
} else
{return null;
}
} else
{return null;
}
});})(marker,map_options,map,___$1))
);
});})(map_options,map,___$1))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
google.maps.event.addListener.call(null,map,"idle",((function (map_options,map,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368),map.getCenter());
});})(map_options,map,___$1))
);
return window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){google.maps.event.trigger.call(null,map,"resize");
return map.setCenter(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)));
});})(map_options,map,___$1))
);
});
hivez.core.t26665.prototype.om$core$IInitState$ = true;
hivez.core.t26665.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)}], null);
});
hivez.core.t26665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26667){var self__ = this;
var _26667__$1 = this;return self__.meta26666;
});
hivez.core.t26665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26667,meta26666__$1){var self__ = this;
var _26667__$1 = this;return (new hivez.core.t26665(self__.owner,self__.data,self__.goog_map,meta26666__$1));
});
hivez.core.__GT_t26665 = (function __GT_t26665(owner__$1,data__$1,goog_map__$1,meta26666){return (new hivez.core.t26665(owner__$1,data__$1,goog_map__$1,meta26666));
});
}
return (new hivez.core.t26665(owner,data,goog_map,null));
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
var floormat__delegate = function (args){return cljs.core.apply.call(null,goog.string.format,args);
};
var floormat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return floormat__delegate.call(this,args);};
floormat.cljs$lang$maxFixedArity = 0;
floormat.cljs$lang$applyTo = (function (arglist__26668){
var args = cljs.core.seq(arglist__26668);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.call(null,hive,key,goog.string.unescapeEntities(om.core.get_node.call(null,owner,key).innerHTML));
return cb.call(null);
});
hivez.core.input = (function input(hive,owner,p__26669){var map__26676 = p__26669;var map__26676__$1 = ((cljs.core.seq_QMARK_.call(null,map__26676))?cljs.core.apply.call(null,cljs.core.hash_map,map__26676):map__26676);var opts = map__26676__$1;var on_key_down = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t26677 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26677 = (function (input,on_key_down,owner,hive,edit_key,p__26669,className,map__26676,on_edit,id,opts,meta26678){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.p__26669 = p__26669;
this.className = className;
this.map__26676 = map__26676;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta26678 = meta26678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26677.cljs$lang$type = true;
hivez.core.t26677.cljs$lang$ctorStr = "hivez.core/t26677";
hivez.core.t26677.cljs$lang$ctorPrWriter = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26677");
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t26677.prototype.om$core$IRenderState$ = true;
hivez.core.t26677.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__26680){var self__ = this;
var map__26681 = p__26680;var map__26681__$1 = ((cljs.core.seq_QMARK_.call(null,map__26681))?cljs.core.apply.call(null,cljs.core.hash_map,map__26681):map__26681);var exit_type = cljs.core.get.call(null,map__26681__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__26681,map__26681__$1,exit_type,map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t26677.prototype.om$core$IDidMount$ = true;
hivez.core.t26677.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t26677.prototype.om$core$IInitState$ = true;
hivez.core.t26677.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t26677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_26679){var self__ = this;
var _26679__$1 = this;return self__.meta26678;
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t26677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_26679,meta26678__$1){var self__ = this;
var _26679__$1 = this;return (new hivez.core.t26677(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.p__26669,self__.className,self__.map__26676,self__.on_edit,self__.id,self__.opts,meta26678__$1));
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t26677 = ((function (map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t26677(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,p__26669__$1,className__$1,map__26676__$2,on_edit__$1,id__$1,opts__$1,meta26678){return (new hivez.core.t26677(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,p__26669__$1,className__$1,map__26676__$2,on_edit__$1,id__$1,opts__$1,meta26678));
});})(map__26676,map__26676__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t26677(input,on_key_down,owner,hive,edit_key,p__26669,className,map__26676__$1,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__26682){var map__26690 = p__26682;var map__26690__$1 = ((cljs.core.seq_QMARK_.call(null,map__26690))?cljs.core.apply.call(null,cljs.core.hash_map,map__26690):map__26690);var opts = map__26690__$1;var on_edit = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t26691 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26691 = (function (on_edit,opts,map__26690,p__26682,owner,hive,input_control,meta26692){
this.on_edit = on_edit;
this.opts = opts;
this.map__26690 = map__26690;
this.p__26682 = p__26682;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta26692 = meta26692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26691.cljs$lang$type = true;
hivez.core.t26691.cljs$lang$ctorStr = "hivez.core/t26691";
hivez.core.t26691.cljs$lang$ctorPrWriter = ((function (map__26690,map__26690__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26691");
});})(map__26690,map__26690__$1,opts,on_edit))
;
hivez.core.t26691.prototype.om$core$IRenderState$ = true;
hivez.core.t26691.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26690,map__26690__$1,opts,on_edit){
return (function (_,p__26694){var self__ = this;
var map__26695 = p__26694;var map__26695__$1 = ((cljs.core.seq_QMARK_.call(null,map__26695))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);var editing = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__26696 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__26696) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__26696,___$1,map__26695,map__26695__$1,editing,map__26690,map__26690__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__26696,___$1,map__26695,map__26695__$1,editing,map__26690,map__26690__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__26690,map__26690__$1,opts,on_edit))
;
hivez.core.t26691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26690,map__26690__$1,opts,on_edit){
return (function (_26693){var self__ = this;
var _26693__$1 = this;return self__.meta26692;
});})(map__26690,map__26690__$1,opts,on_edit))
;
hivez.core.t26691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26690,map__26690__$1,opts,on_edit){
return (function (_26693,meta26692__$1){var self__ = this;
var _26693__$1 = this;return (new hivez.core.t26691(self__.on_edit,self__.opts,self__.map__26690,self__.p__26682,self__.owner,self__.hive,self__.input_control,meta26692__$1));
});})(map__26690,map__26690__$1,opts,on_edit))
;
hivez.core.__GT_t26691 = ((function (map__26690,map__26690__$1,opts,on_edit){
return (function __GT_t26691(on_edit__$1,opts__$1,map__26690__$2,p__26682__$1,owner__$1,hive__$1,input_control__$1,meta26692){return (new hivez.core.t26691(on_edit__$1,opts__$1,map__26690__$2,p__26682__$1,owner__$1,hive__$1,input_control__$1,meta26692));
});})(map__26690,map__26690__$1,opts,on_edit))
;
}
return (new hivez.core.t26691(on_edit,opts,map__26690__$1,p__26682,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__26698){var map__26703 = p__26698;var map__26703__$1 = ((cljs.core.seq_QMARK_.call(null,map__26703))?cljs.core.apply.call(null,cljs.core.hash_map,map__26703):map__26703);var opts = map__26703__$1;var begin_edit = cljs.core.get.call(null,map__26703__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t26704 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26704 = (function (begin_edit,opts,map__26703,p__26698,owner,hive,hive_info,meta26705){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__26703 = map__26703;
this.p__26698 = p__26698;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta26705 = meta26705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26704.cljs$lang$type = true;
hivez.core.t26704.cljs$lang$ctorStr = "hivez.core/t26704";
hivez.core.t26704.cljs$lang$ctorPrWriter = ((function (map__26703,map__26703__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26704");
});})(map__26703,map__26703__$1,opts,begin_edit))
;
hivez.core.t26704.prototype.om$core$IRender$ = true;
hivez.core.t26704.prototype.om$core$IRender$render$arity$1 = ((function (map__26703,map__26703__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__26703,map__26703__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__26703,map__26703__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__26703,map__26703__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__26703,map__26703__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__26703,map__26703__$1,opts,begin_edit))
;
hivez.core.t26704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26703,map__26703__$1,opts,begin_edit){
return (function (_26706){var self__ = this;
var _26706__$1 = this;return self__.meta26705;
});})(map__26703,map__26703__$1,opts,begin_edit))
;
hivez.core.t26704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26703,map__26703__$1,opts,begin_edit){
return (function (_26706,meta26705__$1){var self__ = this;
var _26706__$1 = this;return (new hivez.core.t26704(self__.begin_edit,self__.opts,self__.map__26703,self__.p__26698,self__.owner,self__.hive,self__.hive_info,meta26705__$1));
});})(map__26703,map__26703__$1,opts,begin_edit))
;
hivez.core.__GT_t26704 = ((function (map__26703,map__26703__$1,opts,begin_edit){
return (function __GT_t26704(begin_edit__$1,opts__$1,map__26703__$2,p__26698__$1,owner__$1,hive__$1,hive_info__$1,meta26705){return (new hivez.core.t26704(begin_edit__$1,opts__$1,map__26703__$2,p__26698__$1,owner__$1,hive__$1,hive_info__$1,meta26705));
});})(map__26703,map__26703__$1,opts,begin_edit))
;
}
return (new hivez.core.t26704(begin_edit,opts,map__26703__$1,p__26698,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t26712 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26712 = (function (owner,data,drawer,meta26713){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta26713 = meta26713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26712.cljs$lang$type = true;
hivez.core.t26712.cljs$lang$ctorStr = "hivez.core/t26712";
hivez.core.t26712.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26712");
});
hivez.core.t26712.prototype.om$core$IRenderState$ = true;
hivez.core.t26712.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__26715){var self__ = this;
var map__26716 = p__26715;var map__26716__$1 = ((cljs.core.seq_QMARK_.call(null,map__26716))?cljs.core.apply.call(null,cljs.core.hash_map,map__26716):map__26716);var editing = cljs.core.get.call(null,map__26716__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__26716,map__26716__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__26716,map__26716__$1,editing))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__12546__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data));if(or__12546__auto__)
{return or__12546__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null)):null)));
});
hivez.core.t26712.prototype.om$core$IInitState$ = true;
hivez.core.t26712.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});
hivez.core.t26712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26714){var self__ = this;
var _26714__$1 = this;return self__.meta26713;
});
hivez.core.t26712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26714,meta26713__$1){var self__ = this;
var _26714__$1 = this;return (new hivez.core.t26712(self__.owner,self__.data,self__.drawer,meta26713__$1));
});
hivez.core.__GT_t26712 = (function __GT_t26712(owner__$1,data__$1,drawer__$1,meta26713){return (new hivez.core.t26712(owner__$1,data__$1,drawer__$1,meta26713));
});
}
return (new hivez.core.t26712(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t26720 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t26720 = (function (owner,data,app,meta26721){
this.owner = owner;
this.data = data;
this.app = app;
this.meta26721 = meta26721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t26720.cljs$lang$type = true;
hivez.core.t26720.cljs$lang$ctorStr = "hivez.core/t26720";
hivez.core.t26720.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t26720");
});
hivez.core.t26720.prototype.om$core$IRender$ = true;
hivez.core.t26720.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.core.goog_map,self__.data)),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t26720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26722){var self__ = this;
var _26722__$1 = this;return self__.meta26721;
});
hivez.core.t26720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26722,meta26721__$1){var self__ = this;
var _26722__$1 = this;return (new hivez.core.t26720(self__.owner,self__.data,self__.app,meta26721__$1));
});
hivez.core.__GT_t26720 = (function __GT_t26720(owner__$1,data__$1,app__$1,meta26721){return (new hivez.core.t26720(owner__$1,data__$1,app__$1,meta26721));
});
}
return (new hivez.core.t26720(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render.call(null);
hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
});

//# sourceMappingURL=core.js.map