// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__25448_SHARP_){return cljs.core.assoc.call(null,p1__25448_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.new_hive = (function new_hive(marker){var pos = marker.getPosition();return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__25449_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25449_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
if(cljs.core.truth_(marker))
{return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
} else
{return null;
}
});
hivez.core.add_hive = (function add_hive(data,marker){var key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (key){
return (function (p1__25450_SHARP_){return cljs.core.assoc.call(null,p1__25450_SHARP_,key,hivez.core.new_hive.call(null,marker));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__25451_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__25451_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.init_marker = (function init_marker(data,map,marker){hivez.core.add_hive.call(null,data,marker);
map.panTo(marker.getPosition());
google.maps.event.addListener.call(null,marker,"click",(function (_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),hivez.core.pos_key.call(null,marker.getPosition())))
{om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),null);
return hivez.core.activate_marker.call(null,data,null);
} else
{om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.pos_key.call(null,marker.getPosition()));
hivez.core.activate_marker.call(null,data,marker);
return map.panTo(marker.getPosition());
}
}));
return google.maps.event.addListener.call(null,marker,"rightclick",(function (_){marker.setMap(null);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));var fallen_key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (active,fallen_key){
return (function (p1__25452_SHARP_){return cljs.core.dissoc.call(null,p1__25452_SHARP_,fallen_key);
});})(active,fallen_key))
);
if(cljs.core._EQ_.call(null,fallen_key,active))
{var new_active = cljs.core.first.call(null,hivez.core.nearest.call(null,fallen_key,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),new_active);
if(cljs.core.truth_(new_active))
{hivez.core.activate_marker.call(null,data,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(new_active.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
return map.panTo(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(new_active.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))).getPosition());
} else
{return null;
}
} else
{return null;
}
}));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t25456 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25456 = (function (owner,data,goog_map,meta25457){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta25457 = meta25457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25456.cljs$lang$type = true;
hivez.core.t25456.cljs$lang$ctorStr = "hivez.core/t25456";
hivez.core.t25456.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25456");
});
hivez.core.t25456.prototype.om$core$IRender$ = true;
hivez.core.t25456.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t25456.prototype.om$core$IDidMount$ = true;
hivez.core.t25456.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"mousedown",((function (map_options,map,___$1){
return (function (evt){if(cljs.core.empty_QMARK_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968))))
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [setTimeout(((function (map_options,map,___$1){
return (function (){return hivez.core.init_marker.call(null,self__.data,map,hivez.core.mark_pos.call(null,map,evt.latLng));
});})(map_options,map,___$1))
,(1000))], null));
} else
{clearTimeout(om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),(0)], null)));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),cljs.core.PersistentVector.EMPTY);
}
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mouseup",((function (map_options,map,___$1){
return (function (evt){clearTimeout(om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),(0)], null)));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),cljs.core.PersistentVector.EMPTY);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mousemove",((function (map_options,map,___$1){
return (function (evt){clearTimeout(om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),(0)], null)));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),cljs.core.PersistentVector.EMPTY);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1){
return (function (evt){clearTimeout(om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),(0)], null)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),cljs.core.PersistentVector.EMPTY);
return hivez.core.init_marker.call(null,self__.data,map,hivez.core.mark_pos.call(null,map,evt.latLng));
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
hivez.core.t25456.prototype.om$core$IInitState$ = true;
hivez.core.t25456.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)},new cljs.core.Keyword(null,"evt-timeouts","evt-timeouts",-2131377968),cljs.core.PersistentVector.EMPTY], null);
});
hivez.core.t25456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25458){var self__ = this;
var _25458__$1 = this;return self__.meta25457;
});
hivez.core.t25456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25458,meta25457__$1){var self__ = this;
var _25458__$1 = this;return (new hivez.core.t25456(self__.owner,self__.data,self__.goog_map,meta25457__$1));
});
hivez.core.__GT_t25456 = (function __GT_t25456(owner__$1,data__$1,goog_map__$1,meta25457){return (new hivez.core.t25456(owner__$1,data__$1,goog_map__$1,meta25457));
});
}
return (new hivez.core.t25456(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__25459){
var args = cljs.core.seq(arglist__25459);
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
hivez.core.input = (function input(hive,owner,p__25460){var map__25467 = p__25460;var map__25467__$1 = ((cljs.core.seq_QMARK_.call(null,map__25467))?cljs.core.apply.call(null,cljs.core.hash_map,map__25467):map__25467);var opts = map__25467__$1;var on_key_down = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t25468 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25468 = (function (input,on_key_down,owner,hive,map__25467,edit_key,className,on_edit,id,opts,p__25460,meta25469){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.map__25467 = map__25467;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.p__25460 = p__25460;
this.meta25469 = meta25469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25468.cljs$lang$type = true;
hivez.core.t25468.cljs$lang$ctorStr = "hivez.core/t25468";
hivez.core.t25468.cljs$lang$ctorPrWriter = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25468");
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25468.prototype.om$core$IRenderState$ = true;
hivez.core.t25468.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__25471){var self__ = this;
var map__25472 = p__25471;var map__25472__$1 = ((cljs.core.seq_QMARK_.call(null,map__25472))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);var exit_type = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__25472,map__25472__$1,exit_type,map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25468.prototype.om$core$IDidMount$ = true;
hivez.core.t25468.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25468.prototype.om$core$IInitState$ = true;
hivez.core.t25468.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_25470){var self__ = this;
var _25470__$1 = this;return self__.meta25469;
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t25468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_25470,meta25469__$1){var self__ = this;
var _25470__$1 = this;return (new hivez.core.t25468(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.map__25467,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,self__.p__25460,meta25469__$1));
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t25468 = ((function (map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t25468(input__$1,on_key_down__$1,owner__$1,hive__$1,map__25467__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__25460__$1,meta25469){return (new hivez.core.t25468(input__$1,on_key_down__$1,owner__$1,hive__$1,map__25467__$2,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,p__25460__$1,meta25469));
});})(map__25467,map__25467__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t25468(input,on_key_down,owner,hive,map__25467__$1,edit_key,className,on_edit,id,opts,p__25460,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__25473){var map__25481 = p__25473;var map__25481__$1 = ((cljs.core.seq_QMARK_.call(null,map__25481))?cljs.core.apply.call(null,cljs.core.hash_map,map__25481):map__25481);var opts = map__25481__$1;var on_edit = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t25482 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25482 = (function (on_edit,opts,map__25481,p__25473,owner,hive,input_control,meta25483){
this.on_edit = on_edit;
this.opts = opts;
this.map__25481 = map__25481;
this.p__25473 = p__25473;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta25483 = meta25483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25482.cljs$lang$type = true;
hivez.core.t25482.cljs$lang$ctorStr = "hivez.core/t25482";
hivez.core.t25482.cljs$lang$ctorPrWriter = ((function (map__25481,map__25481__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25482");
});})(map__25481,map__25481__$1,opts,on_edit))
;
hivez.core.t25482.prototype.om$core$IRenderState$ = true;
hivez.core.t25482.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25481,map__25481__$1,opts,on_edit){
return (function (_,p__25485){var self__ = this;
var map__25486 = p__25485;var map__25486__$1 = ((cljs.core.seq_QMARK_.call(null,map__25486))?cljs.core.apply.call(null,cljs.core.hash_map,map__25486):map__25486);var editing = cljs.core.get.call(null,map__25486__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__25487 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__25487) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__25487,___$1,map__25486,map__25486__$1,editing,map__25481,map__25481__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__25487,___$1,map__25486,map__25486__$1,editing,map__25481,map__25481__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__25481,map__25481__$1,opts,on_edit))
;
hivez.core.t25482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25481,map__25481__$1,opts,on_edit){
return (function (_25484){var self__ = this;
var _25484__$1 = this;return self__.meta25483;
});})(map__25481,map__25481__$1,opts,on_edit))
;
hivez.core.t25482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25481,map__25481__$1,opts,on_edit){
return (function (_25484,meta25483__$1){var self__ = this;
var _25484__$1 = this;return (new hivez.core.t25482(self__.on_edit,self__.opts,self__.map__25481,self__.p__25473,self__.owner,self__.hive,self__.input_control,meta25483__$1));
});})(map__25481,map__25481__$1,opts,on_edit))
;
hivez.core.__GT_t25482 = ((function (map__25481,map__25481__$1,opts,on_edit){
return (function __GT_t25482(on_edit__$1,opts__$1,map__25481__$2,p__25473__$1,owner__$1,hive__$1,input_control__$1,meta25483){return (new hivez.core.t25482(on_edit__$1,opts__$1,map__25481__$2,p__25473__$1,owner__$1,hive__$1,input_control__$1,meta25483));
});})(map__25481,map__25481__$1,opts,on_edit))
;
}
return (new hivez.core.t25482(on_edit,opts,map__25481__$1,p__25473,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__25489){var map__25494 = p__25489;var map__25494__$1 = ((cljs.core.seq_QMARK_.call(null,map__25494))?cljs.core.apply.call(null,cljs.core.hash_map,map__25494):map__25494);var opts = map__25494__$1;var begin_edit = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t25495 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25495 = (function (begin_edit,opts,map__25494,p__25489,owner,hive,hive_info,meta25496){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__25494 = map__25494;
this.p__25489 = p__25489;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta25496 = meta25496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25495.cljs$lang$type = true;
hivez.core.t25495.cljs$lang$ctorStr = "hivez.core/t25495";
hivez.core.t25495.cljs$lang$ctorPrWriter = ((function (map__25494,map__25494__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25495");
});})(map__25494,map__25494__$1,opts,begin_edit))
;
hivez.core.t25495.prototype.om$core$IRender$ = true;
hivez.core.t25495.prototype.om$core$IRender$render$arity$1 = ((function (map__25494,map__25494__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__25494,map__25494__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__25494,map__25494__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__25494,map__25494__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__25494,map__25494__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__25494,map__25494__$1,opts,begin_edit))
;
hivez.core.t25495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25494,map__25494__$1,opts,begin_edit){
return (function (_25497){var self__ = this;
var _25497__$1 = this;return self__.meta25496;
});})(map__25494,map__25494__$1,opts,begin_edit))
;
hivez.core.t25495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25494,map__25494__$1,opts,begin_edit){
return (function (_25497,meta25496__$1){var self__ = this;
var _25497__$1 = this;return (new hivez.core.t25495(self__.begin_edit,self__.opts,self__.map__25494,self__.p__25489,self__.owner,self__.hive,self__.hive_info,meta25496__$1));
});})(map__25494,map__25494__$1,opts,begin_edit))
;
hivez.core.__GT_t25495 = ((function (map__25494,map__25494__$1,opts,begin_edit){
return (function __GT_t25495(begin_edit__$1,opts__$1,map__25494__$2,p__25489__$1,owner__$1,hive__$1,hive_info__$1,meta25496){return (new hivez.core.t25495(begin_edit__$1,opts__$1,map__25494__$2,p__25489__$1,owner__$1,hive__$1,hive_info__$1,meta25496));
});})(map__25494,map__25494__$1,opts,begin_edit))
;
}
return (new hivez.core.t25495(begin_edit,opts,map__25494__$1,p__25489,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t25503 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25503 = (function (owner,data,drawer,meta25504){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta25504 = meta25504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25503.cljs$lang$type = true;
hivez.core.t25503.cljs$lang$ctorStr = "hivez.core/t25503";
hivez.core.t25503.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25503");
});
hivez.core.t25503.prototype.om$core$IRenderState$ = true;
hivez.core.t25503.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__25506){var self__ = this;
var map__25507 = p__25506;var map__25507__$1 = ((cljs.core.seq_QMARK_.call(null,map__25507))?cljs.core.apply.call(null,cljs.core.hash_map,map__25507):map__25507);var editing = cljs.core.get.call(null,map__25507__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__25507,map__25507__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__25507,map__25507__$1,editing))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__12546__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data));if(or__12546__auto__)
{return or__12546__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null)):null)));
});
hivez.core.t25503.prototype.om$core$IInitState$ = true;
hivez.core.t25503.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});
hivez.core.t25503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25505){var self__ = this;
var _25505__$1 = this;return self__.meta25504;
});
hivez.core.t25503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25505,meta25504__$1){var self__ = this;
var _25505__$1 = this;return (new hivez.core.t25503(self__.owner,self__.data,self__.drawer,meta25504__$1));
});
hivez.core.__GT_t25503 = (function __GT_t25503(owner__$1,data__$1,drawer__$1,meta25504){return (new hivez.core.t25503(owner__$1,data__$1,drawer__$1,meta25504));
});
}
return (new hivez.core.t25503(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t25511 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25511 = (function (owner,data,app,meta25512){
this.owner = owner;
this.data = data;
this.app = app;
this.meta25512 = meta25512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25511.cljs$lang$type = true;
hivez.core.t25511.cljs$lang$ctorStr = "hivez.core/t25511";
hivez.core.t25511.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25511");
});
hivez.core.t25511.prototype.om$core$IRender$ = true;
hivez.core.t25511.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.core.goog_map,self__.data)),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t25511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25513){var self__ = this;
var _25513__$1 = this;return self__.meta25512;
});
hivez.core.t25511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25513,meta25512__$1){var self__ = this;
var _25513__$1 = this;return (new hivez.core.t25511(self__.owner,self__.data,self__.app,meta25512__$1));
});
hivez.core.__GT_t25511 = (function __GT_t25511(owner__$1,data__$1,app__$1,meta25512){return (new hivez.core.t25511(owner__$1,data__$1,app__$1,meta25512));
});
}
return (new hivez.core.t25511(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
});

//# sourceMappingURL=core.js.map