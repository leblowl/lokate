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
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Name",new cljs.core.Keyword(null,"origin","origin",1037372088),"12/21/2012",new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Notes..."], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"none","none",1333468478)], null));
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__25410_SHARP_){if(!((new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25410_SHARP_) == null)))
{return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25410_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
} else
{return null;
}
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
});
hivez.core.handleOrientation = (function handleOrientation(evt){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__25411_SHARP_){return cljs.core.assoc.call(null,p1__25411_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)));
}));
});
hivez.core.lat_lng_key = (function lat_lng_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
hivez.core.add_hive = (function add_hive(data,marker){om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (_){var pos = marker.getPosition();return cljs.core.assoc.call(null,_,hivez.core.lat_lng_key.call(null,pos),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.core.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null));
}));
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.lat_lng_key.call(null,marker.getPosition()));
return hivez.core.activate_marker.call(null,data,marker);
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t25415 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25415 = (function (owner,data,goog_map,meta25416){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta25416 = meta25416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25415.cljs$lang$type = true;
hivez.core.t25415.cljs$lang$ctorStr = "hivez.core/t25415";
hivez.core.t25415.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25415");
});
hivez.core.t25415.prototype.om$core$IRender$ = true;
hivez.core.t25415.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t25415.prototype.om$core$IDidMount$ = true;
hivez.core.t25415.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,this$__$1){
return (function (evt){var marker = hivez.core.mark_pos.call(null,map,evt.latLng);hivez.core.add_hive.call(null,self__.data,marker);
google.maps.event.addListener.call(null,marker,"click",((function (marker,map_options,map,this$__$1){
return (function (_){om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.lat_lng_key.call(null,marker.getPosition()));
return hivez.core.activate_marker.call(null,self__.data,marker);
});})(marker,map_options,map,this$__$1))
);
return google.maps.event.addListener.call(null,marker,"rightclick",((function (marker,map_options,map,this$__$1){
return (function (_){marker.setMap(null);
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"none","none",1333468478));
});})(marker,map_options,map,this$__$1))
);
});})(map_options,map,this$__$1))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,this$__$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,this$__$1))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
return window.addEventListener("resize",((function (map_options,map,this$__$1){
return (function (e){cljs.core.println.call(null,"hey");
return google.maps.event.trigger.call(null,map,"resize");
});})(map_options,map,this$__$1))
);
});
hivez.core.t25415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25417){var self__ = this;
var _25417__$1 = this;return self__.meta25416;
});
hivez.core.t25415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25417,meta25416__$1){var self__ = this;
var _25417__$1 = this;return (new hivez.core.t25415(self__.owner,self__.data,self__.goog_map,meta25416__$1));
});
hivez.core.__GT_t25415 = (function __GT_t25415(owner__$1,data__$1,goog_map__$1,meta25416){return (new hivez.core.t25415(owner__$1,data__$1,goog_map__$1,meta25416));
});
}
return (new hivez.core.t25415(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__25418){
var args = cljs.core.seq(arglist__25418);
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
hivez.core.display_name = (function display_name(hive){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hive);
});
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.display_notes = (function display_notes(hive){return new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(hive);
});
hivez.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
hivez.core.begin_edit = (function begin_edit(owner){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
return om.core.get_node.call(null,owner,"input").focus();
});
hivez.core.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
if(cljs.core.truth_(cb))
{return cb.call(null,text);
} else
{return null;
}
});
hivez.core.editable = (function editable(data,owner,p__25419){var map__25426 = p__25419;var map__25426__$1 = ((cljs.core.seq_QMARK_.call(null,map__25426))?cljs.core.apply.call(null,cljs.core.hash_map,map__25426):map__25426);var opts = map__25426__$1;var on_edit = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__25426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t25427 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25427 = (function (owner,data,editable,edit_key,map__25426,className,on_edit,id,opts,p__25419,meta25428){
this.owner = owner;
this.data = data;
this.editable = editable;
this.edit_key = edit_key;
this.map__25426 = map__25426;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.p__25419 = p__25419;
this.meta25428 = meta25428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25427.cljs$lang$type = true;
hivez.core.t25427.cljs$lang$ctorStr = "hivez.core/t25427";
hivez.core.t25427.cljs$lang$ctorPrWriter = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25427");
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t25427.prototype.om$core$IRenderState$ = true;
hivez.core.t25427.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (_,p__25430){var self__ = this;
var map__25431 = p__25430;var map__25431__$1 = ((cljs.core.seq_QMARK_.call(null,map__25431))?cljs.core.apply.call(null,cljs.core.hash_map,map__25431):map__25431);var editing = cljs.core.get.call(null,map__25431__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;var text = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.div({"onBlur": ((function (text,___$1,map__25431,map__25431__$1,editing,map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (e){return hivez.core.end_edit.call(null,text,self__.owner,self__.on_edit);
});})(text,___$1,map__25431,map__25431__$1,editing,map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
, "className": self__.className, "id": self__.id});
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t25427.prototype.om$core$IInitState$ = true;
hivez.core.t25427.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t25427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (_25429){var self__ = this;
var _25429__$1 = this;return self__.meta25428;
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t25427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function (_25429,meta25428__$1){var self__ = this;
var _25429__$1 = this;return (new hivez.core.t25427(self__.owner,self__.data,self__.editable,self__.edit_key,self__.map__25426,self__.className,self__.on_edit,self__.id,self__.opts,self__.p__25419,meta25428__$1));
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.__GT_t25427 = ((function (map__25426,map__25426__$1,opts,on_edit,edit_key,className,id){
return (function __GT_t25427(owner__$1,data__$1,editable__$1,edit_key__$1,map__25426__$2,className__$1,on_edit__$1,id__$1,opts__$1,p__25419__$1,meta25428){return (new hivez.core.t25427(owner__$1,data__$1,editable__$1,edit_key__$1,map__25426__$2,className__$1,on_edit__$1,id__$1,opts__$1,p__25419__$1,meta25428));
});})(map__25426,map__25426__$1,opts,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t25427(owner,data,editable,edit_key,map__25426__$1,className,on_edit,id,opts,p__25419,null));
});
hivez.core.hive_info = (function hive_info(hive,owner){if(typeof hivez.core.t25435 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25435 = (function (owner,hive,hive_info,meta25436){
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta25436 = meta25436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25435.cljs$lang$type = true;
hivez.core.t25435.cljs$lang$ctorStr = "hivez.core/t25435";
hivez.core.t25435.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25435");
});
hivez.core.t25435.prototype.om$core$IRender$ = true;
hivez.core.t25435.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "info", "id": "info"},React.DOM.div({"data-ph": "Name", "onBlur": ((function (this$__$1){
return (function (_){return om.core.update_BANG_.call(null,self__.hive,new cljs.core.Keyword(null,"name","name",1843675177),om.core.get_node.call(null,self__.owner,"hive-name").innerHTML);
});})(this$__$1))
, "contentEditable": "true", "ref": "hive-name", "className": "name single-line", "id": "name"},hivez.core.display_name.call(null,self__.hive)),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"data-ph": "Notes...", "onBlur": ((function (this$__$1){
return (function (_){return om.core.update_BANG_.call(null,self__.hive,new cljs.core.Keyword(null,"notes","notes",-1039600523),om.core.get_node.call(null,self__.owner,"hive-notes").innerHTML);
});})(this$__$1))
, "contentEditable": "true", "ref": "hive-notes", "className": "notes", "id": "notes"},hivez.core.display_notes.call(null,self__.hive)));
});
hivez.core.t25435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25437){var self__ = this;
var _25437__$1 = this;return self__.meta25436;
});
hivez.core.t25435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25437,meta25436__$1){var self__ = this;
var _25437__$1 = this;return (new hivez.core.t25435(self__.owner,self__.hive,self__.hive_info,meta25436__$1));
});
hivez.core.__GT_t25435 = (function __GT_t25435(owner__$1,hive__$1,hive_info__$1,meta25436){return (new hivez.core.t25435(owner__$1,hive__$1,hive_info__$1,meta25436));
});
}
return (new hivez.core.t25435(owner,hive,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t25441 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t25441 = (function (owner,data,app,meta25442){
this.owner = owner;
this.data = data;
this.app = app;
this.meta25442 = meta25442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t25441.cljs$lang$type = true;
hivez.core.t25441.cljs$lang$ctorStr = "hivez.core/t25441";
hivez.core.t25441.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t25441");
});
hivez.core.t25441.prototype.om$core$IRender$ = true;
hivez.core.t25441.prototype.om$core$IRender$render$arity$1 = (function (this__14153__auto__){var self__ = this;
var this__14153__auto____$1 = this;return React.DOM.div({"className": ("flex-container"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" column":" row")))},React.DOM.div({"className": "one"},om.core.build.call(null,hivez.core.goog_map,self__.data)),React.DOM.div({"className": ("two"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" vert":" flat")))},om.core.build.call(null,hivez.core.hive_info,cljs.core.get.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
hivez.core.t25441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25443){var self__ = this;
var _25443__$1 = this;return self__.meta25442;
});
hivez.core.t25441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25443,meta25442__$1){var self__ = this;
var _25443__$1 = this;return (new hivez.core.t25441(self__.owner,self__.data,self__.app,meta25442__$1));
});
hivez.core.__GT_t25441 = (function __GT_t25441(owner__$1,data__$1,app__$1,meta25442){return (new hivez.core.t25441(owner__$1,data__$1,app__$1,meta25442));
});
}
return (new hivez.core.t25441(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
});

//# sourceMappingURL=core.js.map