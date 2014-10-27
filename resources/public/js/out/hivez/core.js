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
hivez.core.handleOrientation = (function handleOrientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__22308_SHARP_){return cljs.core.assoc.call(null,p1__22308_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.new_hive = (function new_hive(marker){var pos = marker.getPosition();return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__22309_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__22309_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
});
hivez.core.add_hive = (function add_hive(data,marker){var key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (key){
return (function (p1__22310_SHARP_){return cljs.core.assoc.call(null,p1__22310_SHARP_,key,hivez.core.new_hive.call(null,marker));
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
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__22311_SHARP_){return hivez.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22311_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t22316 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22316 = (function (owner,data,goog_map,meta22317){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta22317 = meta22317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22316.cljs$lang$type = true;
hivez.core.t22316.cljs$lang$ctorStr = "hivez.core/t22316";
hivez.core.t22316.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22316");
});
hivez.core.t22316.prototype.om$core$IRender$ = true;
hivez.core.t22316.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t22316.prototype.om$core$IDidMount$ = true;
hivez.core.t22316.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1){
return (function (evt){var marker = hivez.core.mark_pos.call(null,map,evt.latLng);hivez.core.add_hive.call(null,self__.data,marker);
google.maps.event.addListener.call(null,marker,"click",((function (marker,map_options,map,___$1){
return (function (___$2){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.pos_key.call(null,marker.getPosition()));
return hivez.core.activate_marker.call(null,self__.data,marker);
});})(marker,map_options,map,___$1))
);
return google.maps.event.addListener.call(null,marker,"rightclick",((function (marker,map_options,map,___$1){
return (function (___$2){marker.setMap(null);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data));var fallen_key = hivez.core.pos_key.call(null,marker.getPosition());om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (active,fallen_key,marker,map_options,map,___$1){
return (function (p1__22312_SHARP_){return cljs.core.dissoc.call(null,p1__22312_SHARP_,fallen_key);
});})(active,fallen_key,marker,map_options,map,___$1))
);
if(cljs.core._EQ_.call(null,fallen_key,active))
{var new_active = cljs.core.first.call(null,hivez.core.nearest.call(null,fallen_key,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),new_active);
if(cljs.core.truth_(new_active))
{return hivez.core.activate_marker.call(null,self__.data,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(new_active.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)))));
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
return window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){return google.maps.event.trigger.call(null,map,"resize");
});})(map_options,map,___$1))
);
});
hivez.core.t22316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22318){var self__ = this;
var _22318__$1 = this;return self__.meta22317;
});
hivez.core.t22316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22318,meta22317__$1){var self__ = this;
var _22318__$1 = this;return (new hivez.core.t22316(self__.owner,self__.data,self__.goog_map,meta22317__$1));
});
hivez.core.__GT_t22316 = (function __GT_t22316(owner__$1,data__$1,goog_map__$1,meta22317){return (new hivez.core.t22316(owner__$1,data__$1,goog_map__$1,meta22317));
});
}
return (new hivez.core.t22316(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__22319){
var args = cljs.core.seq(arglist__22319);
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
hivez.core.input = (function input(hive,owner,p__22320){var map__22327 = p__22320;var map__22327__$1 = ((cljs.core.seq_QMARK_.call(null,map__22327))?cljs.core.apply.call(null,cljs.core.hash_map,map__22327):map__22327);var opts = map__22327__$1;var on_key_down = cljs.core.get.call(null,map__22327__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));var on_edit = cljs.core.get.call(null,map__22327__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__22327__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__22327__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__22327__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t22328 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22328 = (function (input,on_key_down,owner,hive,edit_key,className,p__22320,map__22327,on_edit,id,opts,meta22329){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.hive = hive;
this.edit_key = edit_key;
this.className = className;
this.p__22320 = p__22320;
this.map__22327 = map__22327;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta22329 = meta22329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22328.cljs$lang$type = true;
hivez.core.t22328.cljs$lang$ctorStr = "hivez.core/t22328";
hivez.core.t22328.cljs$lang$ctorPrWriter = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22328");
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22328.prototype.om$core$IRenderState$ = true;
hivez.core.t22328.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__22331){var self__ = this;
var map__22332 = p__22331;var map__22332__$1 = ((cljs.core.seq_QMARK_.call(null,map__22332))?cljs.core.apply.call(null,cljs.core.hash_map,map__22332):map__22332);var exit_type = cljs.core.get.call(null,map__22332__$1,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934));var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.edit_key.call(null,self__.hive)}, "onBlur": ((function (___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"out");
return setTimeout(((function (___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.core.display.call(null,cljs.core.not.call(null,exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id}),React.DOM.div({"onClick": ((function (___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),"btn");
return setTimeout(((function (___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
,(100));
});})(___$1,map__22332,map__22332__$1,exit_type,map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.core.display.call(null,!(cljs.core._EQ_.call(null,exit_type,"out"))), "id": "input-ok"},React.DOM.span({"id": "input-ok-mark"},goog.string.unescapeEntities("&#10003;"))));
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22328.prototype.om$core$IDidMount$ = true;
hivez.core.t22328.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22328.prototype.om$core$IInitState$ = true;
hivez.core.t22328.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-type","exit-type",-252538934),null], null);
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_22330){var self__ = this;
var _22330__$1 = this;return self__.meta22329;
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.t22328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_22330,meta22329__$1){var self__ = this;
var _22330__$1 = this;return (new hivez.core.t22328(self__.input,self__.on_key_down,self__.owner,self__.hive,self__.edit_key,self__.className,self__.p__22320,self__.map__22327,self__.on_edit,self__.id,self__.opts,meta22329__$1));
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.core.__GT_t22328 = ((function (map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t22328(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,p__22320__$1,map__22327__$2,on_edit__$1,id__$1,opts__$1,meta22329){return (new hivez.core.t22328(input__$1,on_key_down__$1,owner__$1,hive__$1,edit_key__$1,className__$1,p__22320__$1,map__22327__$2,on_edit__$1,id__$1,opts__$1,meta22329));
});})(map__22327,map__22327__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t22328(input,on_key_down,owner,hive,edit_key,className,p__22320,map__22327__$1,on_edit,id,opts,null));
});
hivez.core.input_control = (function input_control(hive,owner,p__22333){var map__22341 = p__22333;var map__22341__$1 = ((cljs.core.seq_QMARK_.call(null,map__22341))?cljs.core.apply.call(null,cljs.core.hash_map,map__22341):map__22341);var opts = map__22341__$1;var on_edit = cljs.core.get.call(null,map__22341__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t22342 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22342 = (function (on_edit,opts,map__22341,p__22333,owner,hive,input_control,meta22343){
this.on_edit = on_edit;
this.opts = opts;
this.map__22341 = map__22341;
this.p__22333 = p__22333;
this.owner = owner;
this.hive = hive;
this.input_control = input_control;
this.meta22343 = meta22343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22342.cljs$lang$type = true;
hivez.core.t22342.cljs$lang$ctorStr = "hivez.core/t22342";
hivez.core.t22342.cljs$lang$ctorPrWriter = ((function (map__22341,map__22341__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22342");
});})(map__22341,map__22341__$1,opts,on_edit))
;
hivez.core.t22342.prototype.om$core$IRenderState$ = true;
hivez.core.t22342.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22341,map__22341__$1,opts,on_edit){
return (function (_,p__22345){var self__ = this;
var map__22346 = p__22345;var map__22346__$1 = ((cljs.core.seq_QMARK_.call(null,map__22346))?cljs.core.apply.call(null,cljs.core.hash_map,map__22346):map__22346);var editing = cljs.core.get.call(null,map__22346__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__22347 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__22347) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__22347,___$1,map__22346,map__22346__$1,editing,map__22341,map__22341__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__22347,___$1,map__22346,map__22346__$1,editing,map__22341,map__22341__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__22341,map__22341__$1,opts,on_edit))
;
hivez.core.t22342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22341,map__22341__$1,opts,on_edit){
return (function (_22344){var self__ = this;
var _22344__$1 = this;return self__.meta22343;
});})(map__22341,map__22341__$1,opts,on_edit))
;
hivez.core.t22342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22341,map__22341__$1,opts,on_edit){
return (function (_22344,meta22343__$1){var self__ = this;
var _22344__$1 = this;return (new hivez.core.t22342(self__.on_edit,self__.opts,self__.map__22341,self__.p__22333,self__.owner,self__.hive,self__.input_control,meta22343__$1));
});})(map__22341,map__22341__$1,opts,on_edit))
;
hivez.core.__GT_t22342 = ((function (map__22341,map__22341__$1,opts,on_edit){
return (function __GT_t22342(on_edit__$1,opts__$1,map__22341__$2,p__22333__$1,owner__$1,hive__$1,input_control__$1,meta22343){return (new hivez.core.t22342(on_edit__$1,opts__$1,map__22341__$2,p__22333__$1,owner__$1,hive__$1,input_control__$1,meta22343));
});})(map__22341,map__22341__$1,opts,on_edit))
;
}
return (new hivez.core.t22342(on_edit,opts,map__22341__$1,p__22333,owner,hive,input_control,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__22349){var map__22354 = p__22349;var map__22354__$1 = ((cljs.core.seq_QMARK_.call(null,map__22354))?cljs.core.apply.call(null,cljs.core.hash_map,map__22354):map__22354);var opts = map__22354__$1;var begin_edit = cljs.core.get.call(null,map__22354__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t22355 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22355 = (function (begin_edit,opts,map__22354,p__22349,owner,hive,hive_info,meta22356){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__22354 = map__22354;
this.p__22349 = p__22349;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta22356 = meta22356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22355.cljs$lang$type = true;
hivez.core.t22355.cljs$lang$ctorStr = "hivez.core/t22355";
hivez.core.t22355.cljs$lang$ctorPrWriter = ((function (map__22354,map__22354__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22355");
});})(map__22354,map__22354__$1,opts,begin_edit))
;
hivez.core.t22355.prototype.om$core$IRender$ = true;
hivez.core.t22355.prototype.om$core$IRender$render$arity$1 = ((function (map__22354,map__22354__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__22354,map__22354__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__22354,map__22354__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__22354,map__22354__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__22354,map__22354__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__22354,map__22354__$1,opts,begin_edit))
;
hivez.core.t22355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22354,map__22354__$1,opts,begin_edit){
return (function (_22357){var self__ = this;
var _22357__$1 = this;return self__.meta22356;
});})(map__22354,map__22354__$1,opts,begin_edit))
;
hivez.core.t22355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22354,map__22354__$1,opts,begin_edit){
return (function (_22357,meta22356__$1){var self__ = this;
var _22357__$1 = this;return (new hivez.core.t22355(self__.begin_edit,self__.opts,self__.map__22354,self__.p__22349,self__.owner,self__.hive,self__.hive_info,meta22356__$1));
});})(map__22354,map__22354__$1,opts,begin_edit))
;
hivez.core.__GT_t22355 = ((function (map__22354,map__22354__$1,opts,begin_edit){
return (function __GT_t22355(begin_edit__$1,opts__$1,map__22354__$2,p__22349__$1,owner__$1,hive__$1,hive_info__$1,meta22356){return (new hivez.core.t22355(begin_edit__$1,opts__$1,map__22354__$2,p__22349__$1,owner__$1,hive__$1,hive_info__$1,meta22356));
});})(map__22354,map__22354__$1,opts,begin_edit))
;
}
return (new hivez.core.t22355(begin_edit,opts,map__22354__$1,p__22349,owner,hive,hive_info,null));
});
hivez.core.drawer = (function drawer(data,owner){if(typeof hivez.core.t22363 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22363 = (function (owner,data,drawer,meta22364){
this.owner = owner;
this.data = data;
this.drawer = drawer;
this.meta22364 = meta22364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22363.cljs$lang$type = true;
hivez.core.t22363.cljs$lang$ctorStr = "hivez.core/t22363";
hivez.core.t22363.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22363");
});
hivez.core.t22363.prototype.om$core$IRenderState$ = true;
hivez.core.t22363.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22366){var self__ = this;
var map__22367 = p__22366;var map__22367__$1 = ((cljs.core.seq_QMARK_.call(null,map__22367))?cljs.core.apply.call(null,cljs.core.hash_map,map__22367):map__22367);var editing = cljs.core.get.call(null,map__22367__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.input_control,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__22367,map__22367__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__22367,map__22367__$1,editing))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__12546__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data));if(or__12546__auto__)
{return or__12546__auto__;
} else
{return editing;
}
})())?" hide":" show"))), "id": "drawer"},(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,hivez.core.hive_info,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null)):null)));
});
hivez.core.t22363.prototype.om$core$IInitState$ = true;
hivez.core.t22363.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});
hivez.core.t22363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22365){var self__ = this;
var _22365__$1 = this;return self__.meta22364;
});
hivez.core.t22363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22365,meta22364__$1){var self__ = this;
var _22365__$1 = this;return (new hivez.core.t22363(self__.owner,self__.data,self__.drawer,meta22364__$1));
});
hivez.core.__GT_t22363 = (function __GT_t22363(owner__$1,data__$1,drawer__$1,meta22364){return (new hivez.core.t22363(owner__$1,data__$1,drawer__$1,meta22364));
});
}
return (new hivez.core.t22363(owner,data,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t22371 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t22371 = (function (owner,data,app,meta22372){
this.owner = owner;
this.data = data;
this.app = app;
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t22371.cljs$lang$type = true;
hivez.core.t22371.cljs$lang$ctorStr = "hivez.core/t22371";
hivez.core.t22371.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t22371");
});
hivez.core.t22371.prototype.om$core$IRender$ = true;
hivez.core.t22371.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.core.goog_map,self__.data)),om.core.build.call(null,hivez.core.drawer,self__.data));
});
hivez.core.t22371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22373){var self__ = this;
var _22373__$1 = this;return self__.meta22372;
});
hivez.core.t22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22373,meta22372__$1){var self__ = this;
var _22373__$1 = this;return (new hivez.core.t22371(self__.owner,self__.data,self__.app,meta22372__$1));
});
hivez.core.__GT_t22371 = (function __GT_t22371(owner__$1,data__$1,app__$1,meta22372){return (new hivez.core.t22371(owner__$1,data__$1,app__$1,meta22372));
});
}
return (new hivez.core.t22371(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render.call(null);
hivez.core.handleOrientation.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
});

//# sourceMappingURL=core.js.map