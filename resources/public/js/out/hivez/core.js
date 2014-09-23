// Compiled by ClojureScript 0.0-2322
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),"DUDE!"], null));
hivez.core.mark_pos = (function mark_pos(map,pos){return (new google.maps.Marker({"title": "hive", "map": map, "position": pos}));
});
hivez.core.display_info = (function display_info(hive){return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(hive));
});
hivez.core.handleOrientation = (function handleOrientation(evt){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__10217_SHARP_){return cljs.core.assoc.call(null,p1__10217_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.innerHeight > window.innerWidth))?new cljs.core.Keyword(null,"portrait","portrait",-9810007):new cljs.core.Keyword(null,"landscape","landscape",1519839253)));
}));
});
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t10221 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10221 = (function (owner,data,goog_map,meta10222){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta10222 = meta10222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10221.cljs$lang$type = true;
hivez.core.t10221.cljs$lang$ctorStr = "hivez.core/t10221";
hivez.core.t10221.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10221");
});
hivez.core.t10221.prototype.om$core$IRender$ = true;
hivez.core.t10221.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map-canvas-wrapper"},React.DOM.div({"id": "map-canvas"}));
});
hivez.core.t10221.prototype.om$core$IDidMount$ = true;
hivez.core.t10221.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_options = {"zoom": (6), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(document.getElementById("map-canvas"),map_options));google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,this$__$1){
return (function (evt){var marker = hivez.core.mark_pos.call(null,map,evt.latLng);om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"hives","hives",-1303225483),((function (marker,map_options,map,this$__$1){
return (function (_){return cljs.core.assoc.call(null,_,cljs.core.keyword.call(null,marker.title),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),marker,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),marker.title], null)], null));
});})(marker,map_options,map,this$__$1))
);
google.maps.event.addListener.call(null,marker,"click",((function (marker,map_options,map,this$__$1){
return (function (){return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.keyword.call(null,marker.title).call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
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
hivez.core.t10221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10223){var self__ = this;
var _10223__$1 = this;return self__.meta10222;
});
hivez.core.t10221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10223,meta10222__$1){var self__ = this;
var _10223__$1 = this;return (new hivez.core.t10221(self__.owner,self__.data,self__.goog_map,meta10222__$1));
});
hivez.core.__GT_t10221 = (function __GT_t10221(owner__$1,data__$1,goog_map__$1,meta10222){return (new hivez.core.t10221(owner__$1,data__$1,goog_map__$1,meta10222));
});
}
return (new hivez.core.t10221(owner,data,goog_map,null));
});
hivez.core.hive_info = (function hive_info(data,owner){if(typeof hivez.core.t10227 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10227 = (function (owner,data,hive_info,meta10228){
this.owner = owner;
this.data = data;
this.hive_info = hive_info;
this.meta10228 = meta10228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10227.cljs$lang$type = true;
hivez.core.t10227.cljs$lang$ctorStr = "hivez.core/t10227";
hivez.core.t10227.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10227");
});
hivez.core.t10227.prototype.om$core$IRender$ = true;
hivez.core.t10227.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "info"},om.dom.input.call(null,{"placeholder": hivez.core.display_info.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.data)), "ref": "hive-name", "type": "text", "className": "name"}),React.DOM.div({"className": "location"},"Lat 32.5, Lng 666"),om.dom.input.call(null,{"placeholder": "Wazzzup?", "ref": "hive-notes", "type": "text", "className": "notes"}));
});
hivez.core.t10227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10229){var self__ = this;
var _10229__$1 = this;return self__.meta10228;
});
hivez.core.t10227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10229,meta10228__$1){var self__ = this;
var _10229__$1 = this;return (new hivez.core.t10227(self__.owner,self__.data,self__.hive_info,meta10228__$1));
});
hivez.core.__GT_t10227 = (function __GT_t10227(owner__$1,data__$1,hive_info__$1,meta10228){return (new hivez.core.t10227(owner__$1,data__$1,hive_info__$1,meta10228));
});
}
return (new hivez.core.t10227(owner,data,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t10233 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10233 = (function (owner,data,app,meta10234){
this.owner = owner;
this.data = data;
this.app = app;
this.meta10234 = meta10234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10233.cljs$lang$type = true;
hivez.core.t10233.cljs$lang$ctorStr = "hivez.core/t10233";
hivez.core.t10233.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"hivez.core/t10233");
});
hivez.core.t10233.prototype.om$core$IRender$ = true;
hivez.core.t10233.prototype.om$core$IRender$render$arity$1 = (function (this__5153__auto__){var self__ = this;
var this__5153__auto____$1 = this;return React.DOM.div({"className": "content-liner"},React.DOM.div({"className": ("flex-container"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" column":" row")))},React.DOM.div({"className": ("one"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"portrait","portrait",-9810007)))?" vert":" flat")))},om.core.build.call(null,hivez.core.goog_map,self__.data)),React.DOM.div({"className": "two"},om.core.build.call(null,hivez.core.hive_info,self__.data))));
});
hivez.core.t10233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10235){var self__ = this;
var _10235__$1 = this;return self__.meta10234;
});
hivez.core.t10233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10235,meta10234__$1){var self__ = this;
var _10235__$1 = this;return (new hivez.core.t10233(self__.owner,self__.data,self__.app,meta10234__$1));
});
hivez.core.__GT_t10233 = (function __GT_t10233(owner__$1,data__$1,app__$1,meta10234){return (new hivez.core.t10233(owner__$1,data__$1,app__$1,meta10234));
});
}
return (new hivez.core.t10233(owner,data,app,null));
});
window.addEventListener("resize",hivez.core.handleOrientation);
om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map