// Compiled by ClojureScript 0.0-2277
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
hivez.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
hivez.core.goog_map = (function goog_map(data,owner){if(typeof hivez.core.t10463 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10463 = (function (owner,data,goog_map,meta10464){
this.owner = owner;
this.data = data;
this.goog_map = goog_map;
this.meta10464 = meta10464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10463.cljs$lang$type = true;
hivez.core.t10463.cljs$lang$ctorStr = "hivez.core/t10463";
hivez.core.t10463.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hivez.core/t10463");
});
hivez.core.t10463.prototype.om$core$IRender$ = true;
hivez.core.t10463.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map"},React.DOM.div({"id": "map-canvas"}));
});
hivez.core.t10463.prototype.om$core$IDidMount$ = true;
hivez.core.t10463.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_options = {"zoom": (8), "center": {"lng": (0), "lat": (0)}};var map = (new google.maps.Map(document.getElementById("map-canvas"),map_options));if(cljs.core.truth_(navigator.geolocation))
{return navigator.geolocation.getCurrentPosition(((function (map_options,map,this$__$1){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,this$__$1))
);
} else
{return cljs.core.println.call(null,"no location!");
}
});
hivez.core.t10463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10465){var self__ = this;
var _10465__$1 = this;return self__.meta10464;
});
hivez.core.t10463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10465,meta10464__$1){var self__ = this;
var _10465__$1 = this;return (new hivez.core.t10463(self__.owner,self__.data,self__.goog_map,meta10464__$1));
});
hivez.core.__GT_t10463 = (function __GT_t10463(owner__$1,data__$1,goog_map__$1,meta10464){return (new hivez.core.t10463(owner__$1,data__$1,goog_map__$1,meta10464));
});
}
return (new hivez.core.t10463(owner,data,goog_map,null));
});
hivez.core.hive_info = (function hive_info(data,owner){if(typeof hivez.core.t10469 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10469 = (function (owner,data,hive_info,meta10470){
this.owner = owner;
this.data = data;
this.hive_info = hive_info;
this.meta10470 = meta10470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10469.cljs$lang$type = true;
hivez.core.t10469.cljs$lang$ctorStr = "hivez.core/t10469";
hivez.core.t10469.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hivez.core/t10469");
});
hivez.core.t10469.prototype.om$core$IRender$ = true;
hivez.core.t10469.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "info"},"info");
});
hivez.core.t10469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10471){var self__ = this;
var _10471__$1 = this;return self__.meta10470;
});
hivez.core.t10469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10471,meta10470__$1){var self__ = this;
var _10471__$1 = this;return (new hivez.core.t10469(self__.owner,self__.data,self__.hive_info,meta10470__$1));
});
hivez.core.__GT_t10469 = (function __GT_t10469(owner__$1,data__$1,hive_info__$1,meta10470){return (new hivez.core.t10469(owner__$1,data__$1,hive_info__$1,meta10470));
});
}
return (new hivez.core.t10469(owner,data,hive_info,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t10475 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10475 = (function (owner,data,app,meta10476){
this.owner = owner;
this.data = data;
this.app = app;
this.meta10476 = meta10476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10475.cljs$lang$type = true;
hivez.core.t10475.cljs$lang$ctorStr = "hivez.core/t10475";
hivez.core.t10475.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hivez.core/t10475");
});
hivez.core.t10475.prototype.om$core$IRender$ = true;
hivez.core.t10475.prototype.om$core$IRender$render$arity$1 = (function (this__5131__auto__){var self__ = this;
var this__5131__auto____$1 = this;return React.DOM.div({"className": "content-liner"},React.DOM.div({"className": "row map-row"},React.DOM.div({"className": "map-column small-1 small-centered column"},om.core.build.call(null,hivez.core.goog_map,self__.data))),React.DOM.div({"className": "row info-row"},React.DOM.div({"className": "info-column small-1 small-centered column"},om.core.build.call(null,hivez.core.hive_info,self__.data))));
});
hivez.core.t10475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10477){var self__ = this;
var _10477__$1 = this;return self__.meta10476;
});
hivez.core.t10475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10477,meta10476__$1){var self__ = this;
var _10477__$1 = this;return (new hivez.core.t10475(self__.owner,self__.data,self__.app,meta10476__$1));
});
hivez.core.__GT_t10475 = (function __GT_t10475(owner__$1,data__$1,app__$1,meta10476){return (new hivez.core.t10475(owner__$1,data__$1,app__$1,meta10476));
});
}
return (new hivez.core.t10475(owner,data,app,null));
});
om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map