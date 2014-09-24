// Compiled by ClojureScript 0.0-2322
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hey",new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(333),new cljs.core.Keyword(null,"lng","lng",1667213918),(999)], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"test","test",577538877)], null));
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
hivez.core.handleOrientation = (function handleOrientation(evt){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__10742_SHARP_){return cljs.core.assoc.call(null,p1__10742_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)));
}));
});
hivez.core.lat_lng_key = (function lat_lng_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.core.add_hive = (function add_hive(data,marker){om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (_){var pos = marker.getPosition();return cljs.core.assoc.call(null,_,hivez.core.lat_lng_key.call(null,pos),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),pos.lat(),new cljs.core.Keyword(null,"lng","lng",1667213918),pos.lng()], null),new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null));
}));
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.lat_lng_key.call(null,marker.getPosition()));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t10746 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10746 = (function (owner,data,goog_map,meta10747){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta10747 = meta10747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10746.cljs$lang$type = true;
hivez.core.t10746.cljs$lang$ctorStr = "hivez.core/t10746";
hivez.core.t10746.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10746");
});
hivez.core.t10746.prototype.om$core$IRender$ = true;
hivez.core.t10746.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "map-canvas"});
});
hivez.core.t10746.prototype.om$core$IDidMount$ = true;
hivez.core.t10746.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(document.getElementById("map-canvas"),map_options));google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,this$__$1){
return (function (evt){var marker = hivez.core.mark_pos.call(null,map,evt.latLng);hivez.core.add_hive.call(null,self__.data,marker);
google.maps.event.addListener.call(null,marker,"click",((function (marker,map_options,map,this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"active","active",1895962068),hivez.core.lat_lng_key.call(null,marker.getPosition()));
});})(marker,map_options,map,this$__$1))
);
return google.maps.event.addListener.call(null,marker,"rightclick",((function (marker,map_options,map,this$__$1){
return (function (){return marker.setMap(null);
});})(marker,map_options,map,this$__$1))
);
});})(map_options,map,this$__$1))
);
if(cljs.core.truth_(navigator.geolocation))
{return navigator.geolocation.getCurrentPosition(((function (map_options,map,this$__$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,this$__$1))
);
} else
{return cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
});
hivez.core.t10746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10748){var self__ = this;
var _10748__$1 = this;return self__.meta10747;
});
hivez.core.t10746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10748,meta10747__$1){var self__ = this;
var _10748__$1 = this;return (new hivez.core.t10746(self__.owner,self__.data,self__.goog_map,meta10747__$1));
});
hivez.core.__GT_t10746 = (function __GT_t10746(owner__$1,data__$1,goog_map__$1,meta10747){return (new hivez.core.t10746(owner__$1,data__$1,goog_map__$1,meta10747));
});
}
return (new hivez.core.t10746(owner,data,goog_map,null));
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
floormat.cljs$lang$applyTo = (function (arglist__10749){
var args = cljs.core.seq(arglist__10749);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
hivez.core.display_name = (function display_name(data){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(data)));
});
hivez.core.display_pos = (function display_pos(data){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(data)));return ("lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.core.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.hive_info = (function hive_info(data,owner){if(typeof hivez.core.t10753 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10753 = (function (owner,data,hive_info,meta10754){
this.owner = owner;
this.data = data;
this.hive_info = hive_info;
this.meta10754 = meta10754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10753.cljs$lang$type = true;
hivez.core.t10753.cljs$lang$ctorStr = "hivez.core/t10753";
hivez.core.t10753.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10753");
});
hivez.core.t10753.prototype.om$core$IRender$ = true;
hivez.core.t10753.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "info"},React.DOM.div({"data-ph": "Name", "onBlur": ((function (this$__$1){
return (function (_){om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),new cljs.core.Keyword(null,"name","name",1843675177)], null),om.core.get_node.call(null,self__.owner,"hive-name").innerHTML);
return console.log(om.core.get_node.call(null,self__.owner,"hive-name").innerHTML);
});})(this$__$1))
, "contentEditable": "true", "ref": "hive-name", "className": "name single-line"},hivez.core.display_name.call(null,self__.data)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.data)),om.dom.input.call(null,{"placeholder": "Wazzzup?", "ref": "hive-notes", "type": "text", "className": "notes"}));
});
hivez.core.t10753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10755){var self__ = this;
var _10755__$1 = this;return self__.meta10754;
});
hivez.core.t10753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10755,meta10754__$1){var self__ = this;
var _10755__$1 = this;return (new hivez.core.t10753(self__.owner,self__.data,self__.hive_info,meta10754__$1));
});
hivez.core.__GT_t10753 = (function __GT_t10753(owner__$1,data__$1,hive_info__$1,meta10754){return (new hivez.core.t10753(owner__$1,data__$1,hive_info__$1,meta10754));
});
}
return (new hivez.core.t10753(owner,data,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t10759 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10759 = (function (owner,data,app,meta10760){
this.owner = owner;
this.data = data;
this.app = app;
this.meta10760 = meta10760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10759.cljs$lang$type = true;
hivez.core.t10759.cljs$lang$ctorStr = "hivez.core/t10759";
hivez.core.t10759.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10759");
});
hivez.core.t10759.prototype.om$core$IRender$ = true;
hivez.core.t10759.prototype.om$core$IRender$render$arity$1 = (function (this__5153__auto__){var self__ = this;
var this__5153__auto____$1 = this;return React.DOM.div({"className": "content-liner"},React.DOM.div({"className": ("flex-container"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" column":" row")))},React.DOM.div({"className": ("one"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" vert":" flat")))},om.core.build.call(null,hivez.core.goog_map,self__.data)),React.DOM.div({"className": "two"},om.core.build.call(null,hivez.core.hive_info,self__.data))));
});
hivez.core.t10759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10761){var self__ = this;
var _10761__$1 = this;return self__.meta10760;
});
hivez.core.t10759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10761,meta10760__$1){var self__ = this;
var _10761__$1 = this;return (new hivez.core.t10759(self__.owner,self__.data,self__.app,meta10760__$1));
});
hivez.core.__GT_t10759 = (function __GT_t10759(owner__$1,data__$1,app__$1,meta10760){return (new hivez.core.t10759(owner__$1,data__$1,app__$1,meta10760));
});
}
return (new hivez.core.t10759(owner,data,app,null));
});
window.addEventListener("resize",hivez.core.handleOrientation);
om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map