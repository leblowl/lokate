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
hivez.core.orientation = (function orientation(){if((window.screen.height > window.screen.width))
{return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else
{return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),"12/21/2012",new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(0),new cljs.core.Keyword(null,"lng","lng",1667213918),(0)], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"none","none",1333468478)], null));
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
hivez.core.activate_marker = (function activate_marker(data,marker){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__21566_SHARP_){if(!((new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__21566_SHARP_) == null)))
{return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__21566_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
} else
{return null;
}
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))));
return marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
});
hivez.core.handleOrientation = (function handleOrientation(evt){cljs.core.println.call(null,window.innerHeight);
cljs.core.println.call(null,window.innerWidth);
cljs.core.println.call(null,window.outerHeight);
cljs.core.println.call(null,window.outerWidth);
cljs.core.println.call(null,("screen height "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.screen.height)));
return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__21567_SHARP_){return cljs.core.assoc.call(null,p1__21567_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),hivez.core.orientation.call(null));
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
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t21571 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21571 = (function (owner,data,goog_map,meta21572){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta21572 = meta21572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21571.cljs$lang$type = true;
hivez.core.t21571.cljs$lang$ctorStr = "hivez.core/t21571";
hivez.core.t21571.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"hivez.core/t21571");
});
hivez.core.t21571.prototype.om$core$IRender$ = true;
hivez.core.t21571.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t21571.prototype.om$core$IDidMount$ = true;
hivez.core.t21571.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
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
return (function (e){return google.maps.event.trigger.call(null,map,"resize");
});})(map_options,map,this$__$1))
);
});
hivez.core.t21571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21573){var self__ = this;
var _21573__$1 = this;return self__.meta21572;
});
hivez.core.t21571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21573,meta21572__$1){var self__ = this;
var _21573__$1 = this;return (new hivez.core.t21571(self__.owner,self__.data,self__.goog_map,meta21572__$1));
});
hivez.core.__GT_t21571 = (function __GT_t21571(owner__$1,data__$1,goog_map__$1,meta21572){return (new hivez.core.t21571(owner__$1,data__$1,goog_map__$1,meta21572));
});
}
return (new hivez.core.t21571(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__21574){
var args = cljs.core.seq(arglist__21574);
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
hivez.core.visible = (function visible(show){if(cljs.core.truth_(show))
{return {"visibility": "visible"};
} else
{return {"visibility": "hidden"};
}
});
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
hivez.core.on_edit = (function on_edit(cb,hive,key,owner){om.core.update_BANG_.call(null,hive,key,om.core.get_node.call(null,owner,key).innerHTML);
return cb.call(null);
});
hivez.core.input = (function input(hive,owner,p__21575){var map__21580 = p__21575;var map__21580__$1 = ((cljs.core.seq_QMARK_.call(null,map__21580))?cljs.core.apply.call(null,cljs.core.hash_map,map__21580):map__21580);var opts = map__21580__$1;var on_edit = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));var edit_key = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727));var className = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var id = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.core.t21581 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21581 = (function (input,owner,map__21580,hive,p__21575,edit_key,className,on_edit,id,opts,meta21582){
this.input = input;
this.owner = owner;
this.map__21580 = map__21580;
this.hive = hive;
this.p__21575 = p__21575;
this.edit_key = edit_key;
this.className = className;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta21582 = meta21582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21581.cljs$lang$type = true;
hivez.core.t21581.cljs$lang$ctorStr = "hivez.core/t21581";
hivez.core.t21581.cljs$lang$ctorPrWriter = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"hivez.core/t21581");
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t21581.prototype.om$core$IRender$ = true;
hivez.core.t21581.prototype.om$core$IRender$render$arity$1 = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "input-wrapper"},React.DOM.div({"onBlur": ((function (___$1,map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (){return self__.on_edit.call(null,self__.hive,self__.edit_key,self__.owner);
});})(___$1,map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
, "contentEditable": "true", "className": self__.className, "ref": self__.edit_key, "id": self__.id},self__.edit_key.call(null,self__.hive)),React.DOM.div({"onClick": ((function (___$1,map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (){return om.core.get_node.call(null,self__.owner,self__.edit_key).blur();
});})(___$1,map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
, "id": "input-ok"}));
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t21581.prototype.om$core$IDidMount$ = true;
hivez.core.t21581.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.call(null,self__.owner,self__.edit_key).focus();
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t21581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (_21583){var self__ = this;
var _21583__$1 = this;return self__.meta21582;
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.t21581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function (_21583,meta21582__$1){var self__ = this;
var _21583__$1 = this;return (new hivez.core.t21581(self__.input,self__.owner,self__.map__21580,self__.hive,self__.p__21575,self__.edit_key,self__.className,self__.on_edit,self__.id,self__.opts,meta21582__$1));
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
hivez.core.__GT_t21581 = ((function (map__21580,map__21580__$1,opts,on_edit,edit_key,className,id){
return (function __GT_t21581(input__$1,owner__$1,map__21580__$2,hive__$1,p__21575__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta21582){return (new hivez.core.t21581(input__$1,owner__$1,map__21580__$2,hive__$1,p__21575__$1,edit_key__$1,className__$1,on_edit__$1,id__$1,opts__$1,meta21582));
});})(map__21580,map__21580__$1,opts,on_edit,edit_key,className,id))
;
}
return (new hivez.core.t21581(input,owner,map__21580__$1,hive,p__21575,edit_key,className,on_edit,id,opts,null));
});
hivez.core.hive_info = (function hive_info(hive,owner){if(typeof hivez.core.t21590 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21590 = (function (owner,hive,hive_info,meta21591){
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta21591 = meta21591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21590.cljs$lang$type = true;
hivez.core.t21590.cljs$lang$ctorStr = "hivez.core/t21590";
hivez.core.t21590.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"hivez.core/t21590");
});
hivez.core.t21590.prototype.om$core$IRenderState$ = true;
hivez.core.t21590.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__21593){var self__ = this;
var map__21594 = p__21593;var map__21594__$1 = ((cljs.core.seq_QMARK_.call(null,map__21594))?cljs.core.apply.call(null,cljs.core.hash_map,map__21594):map__21594);var editing = cljs.core.get.call(null,map__21594__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "info-wrapper"},(function (){var G__21595 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__21595) {
case "notes":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (G__21595,___$1,map__21594,map__21594__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(G__21595,___$1,map__21594,map__21594__$1,editing))
)], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.core.input,self__.hive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (G__21595,___$1,map__21594,map__21594__$1,editing){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(G__21595,___$1,map__21594,map__21594__$1,editing))
)], null)], null));

break;
default:
return null;

}
})(),React.DOM.div({"className": (cljs.core.truth_(editing)?"hide":"show"), "id": "info"},React.DOM.div({"data-ph": "Name", "onClick": ((function (___$1,map__21594,map__21594__$1,editing){
return (function (){return hivez.core.begin_edit.call(null,self__.owner,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__21594,map__21594__$1,editing))
, "className": "name editable", "id": "name-editable"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"data-ph": "Notes...", "onClick": ((function (___$1,map__21594,map__21594__$1,editing){
return (function (){return hivez.core.begin_edit.call(null,self__.owner,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__21594,map__21594__$1,editing))
, "className": "notes editable", "id": "notes-editable"},new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive))));
});
hivez.core.t21590.prototype.om$core$IInitState$ = true;
hivez.core.t21590.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});
hivez.core.t21590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21592){var self__ = this;
var _21592__$1 = this;return self__.meta21591;
});
hivez.core.t21590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21592,meta21591__$1){var self__ = this;
var _21592__$1 = this;return (new hivez.core.t21590(self__.owner,self__.hive,self__.hive_info,meta21591__$1));
});
hivez.core.__GT_t21590 = (function __GT_t21590(owner__$1,hive__$1,hive_info__$1,meta21591){return (new hivez.core.t21590(owner__$1,hive__$1,hive_info__$1,meta21591));
});
}
return (new hivez.core.t21590(owner,hive,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t21600 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t21600 = (function (owner,data,app,meta21601){
this.owner = owner;
this.data = data;
this.app = app;
this.meta21601 = meta21601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t21600.cljs$lang$type = true;
hivez.core.t21600.cljs$lang$ctorStr = "hivez.core/t21600";
hivez.core.t21600.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"hivez.core/t21600");
});
hivez.core.t21600.prototype.om$core$IRender$ = true;
hivez.core.t21600.prototype.om$core$IRender$render$arity$1 = (function (this__14155__auto__){var self__ = this;
var this__14155__auto____$1 = this;return React.DOM.div({"className": ("flex-container"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" column":" row")))},React.DOM.div({"className": "one"},om.core.build.call(null,hivez.core.goog_map,self__.data)),React.DOM.div({"className": ("two"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" vert":" flat")))},om.core.build.call(null,hivez.core.hive_info,cljs.core.get.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});
hivez.core.t21600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21602){var self__ = this;
var _21602__$1 = this;return self__.meta21601;
});
hivez.core.t21600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21602,meta21601__$1){var self__ = this;
var _21602__$1 = this;return (new hivez.core.t21600(self__.owner,self__.data,self__.app,meta21601__$1));
});
hivez.core.__GT_t21600 = (function __GT_t21600(owner__$1,data__$1,app__$1,meta21601){return (new hivez.core.t21600(owner__$1,data__$1,app__$1,meta21601));
});
}
return (new hivez.core.t21600(owner,data,app,null));
});
hivez.core.main = (function main(){hivez.navigation.render.call(null);
window.addEventListener("resize",hivez.core.handleOrientation);
return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
});

//# sourceMappingURL=core.js.map