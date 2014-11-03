// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
hivez.map.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
hivez.map.red_dot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
hivez.map.green_dot = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
hivez.map.activate_marker = (function activate_marker(owner,key){var goog_map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));var active = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"marker","marker",865118313)], null));cljs.core.dorun.call(null,cljs.core.map.call(null,((function (goog_map,markers,active){
return (function (p1__20900_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__20900_SHARP_).setIcon(hivez.map.red_dot);
});})(goog_map,markers,active))
,cljs.core.vals.call(null,markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_dot);
return goog_map.panTo(active.getPosition());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,pos,p__20901){var map__20903 = p__20901;var map__20903__$1 = ((cljs.core.seq_QMARK_.call(null,map__20903))?cljs.core.apply.call(null,cljs.core.hash_map,map__20903):map__20903);var opts = map__20903__$1;var delete$ = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var marker = (new google.maps.Marker({"icon": hivez.map.red_dot, "title": "hive", "map": map, "position": cljs.core.clj__GT_js.call(null,pos)}));google.maps.event.addListener.call(null,marker,"click",((function (marker,map__20903,map__20903__$1,opts,delete$,activate){
return (function (_){return activate.call(null,hivez.map.pos_key.call(null,marker.getPosition()));
});})(marker,map__20903,map__20903__$1,opts,delete$,activate))
);
google.maps.event.addListener.call(null,marker,"rightclick",((function (marker,map__20903,map__20903__$1,opts,delete$,activate){
return (function (_){return delete$.call(null,hivez.map.pos_key.call(null,marker.getPosition()));
});})(marker,map__20903,map__20903__$1,opts,delete$,activate))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives,opts){var map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (map){
return (function (p1__20904_SHARP_){return cljs.core.into.call(null,p1__20904_SHARP_,(function (){var iter__13285__auto__ = ((function (map){
return (function iter__20913(s__20914){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__20914__$1 = s__20914;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20914__$1);if(temp__4126__auto__)
{var s__20914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20914__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__20914__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__20916 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__20915 = (0);while(true){
if((i__20915 < size__13284__auto__))
{var vec__20919 = cljs.core._nth.call(null,c__13283__auto__,i__20915);var k = cljs.core.nth.call(null,vec__20919,(0),null);var v = cljs.core.nth.call(null,vec__20919,(1),null);cljs.core.chunk_append.call(null,b__20916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(v),opts)], null));
{
var G__20921 = (i__20915 + (1));
i__20915 = G__20921;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20916),iter__20913.call(null,cljs.core.chunk_rest.call(null,s__20914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20916),null);
}
} else
{var vec__20920 = cljs.core.first.call(null,s__20914__$2);var k = cljs.core.nth.call(null,vec__20920,(0),null);var v = cljs.core.nth.call(null,vec__20920,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(v),opts)], null),iter__20913.call(null,cljs.core.rest.call(null,s__20914__$2)));
}
} else
{return null;
}
break;
}
});})(map))
,null,null));
});})(map))
;return iter__13285__auto__.call(null,hives);
})());
});})(map))
);
});
hivez.map.delete_markers = (function delete_markers(owner,hives){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__20922_SHARP_){return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),p1__20922_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313)], null)).setMap(null);
}),cljs.core.map.call(null,cljs.core.first,hives)));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (p1__20923_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__20923_SHARP_,cljs.core.map.call(null,cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.map.goog_map = (function goog_map(p__20924,owner,p__20925){var map__20933 = p__20924;var map__20933__$1 = ((cljs.core.seq_QMARK_.call(null,map__20933))?cljs.core.apply.call(null,cljs.core.hash_map,map__20933):map__20933);var data = map__20933__$1;var active = cljs.core.get.call(null,map__20933__$1,new cljs.core.Keyword(null,"active","active",1895962068));var hives = cljs.core.get.call(null,map__20933__$1,new cljs.core.Keyword(null,"hives","hives",-1303225483));var map__20934 = p__20925;var map__20934__$1 = ((cljs.core.seq_QMARK_.call(null,map__20934))?cljs.core.apply.call(null,cljs.core.hash_map,map__20934):map__20934);var opts = map__20934__$1;var delete$ = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var add = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"add","add",235287739));if(typeof hivez.map.t20935 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t20935 = (function (p__20925,add,owner,activate,data,p__20924,map__20933,goog_map,delete$,active,hives,opts,map__20934,meta20936){
this.p__20925 = p__20925;
this.add = add;
this.owner = owner;
this.activate = activate;
this.data = data;
this.p__20924 = p__20924;
this.map__20933 = map__20933;
this.goog_map = goog_map;
this.delete$ = delete$;
this.active = active;
this.hives = hives;
this.opts = opts;
this.map__20934 = map__20934;
this.meta20936 = meta20936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t20935.cljs$lang$type = true;
hivez.map.t20935.cljs$lang$ctorStr = "hivez.map/t20935";
hivez.map.t20935.cljs$lang$ctorPrWriter = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.map/t20935");
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.om$core$IRenderState$ = true;
hivez.map.t20935.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (_,p__20938){var self__ = this;
var map__20939 = p__20938;var map__20939__$1 = ((cljs.core.seq_QMARK_.call(null,map__20939))?cljs.core.apply.call(null,cljs.core.hash_map,map__20939):map__20939);var markers = cljs.core.get.call(null,map__20939__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;return React.DOM.div({"id": "map-canvas"});
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.om$core$IDidMount$ = true;
hivez.map.t20935.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"mousedown",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (evt){google.maps.event.addListener.call(null,map,"mouseup",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
google.maps.event.addListener.call(null,map,"mousemove",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
var temp__4124__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606));if(cljs.core.truth_(temp__4124__auto__))
{var timeout = temp__4124__auto__;clearTimeout(timeout);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
} else
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),setTimeout(((function (temp__4124__auto__,map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (){return self__.add.call(null,evt.latLng);
});})(temp__4124__auto__,map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
,(1000)));
}
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (evt){return self__.add.call(null,evt.latLng);
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return map.setCenter(initialLoc);
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
google.maps.event.addListener.call(null,map,"idle",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368),map.getCenter());
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
window.addEventListener("resize",((function (map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (e){google.maps.event.trigger.call(null,map,"resize");
return map.setCenter(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)));
});})(map_options,map,___$1,map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
return hivez.map.add_markers.call(null,self__.owner,self__.hives,self__.opts);
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t20935.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;var next_hives = cljs.core.set.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(next_props));var current_hives = cljs.core.set.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner)));var to_add = clojure.set.difference.call(null,next_hives,current_hives);var to_delete = clojure.set.difference.call(null,current_hives,next_hives);hivez.map.add_markers.call(null,self__.owner,to_add,self__.opts);
hivez.map.delete_markers.call(null,self__.owner,to_delete);
return hivez.map.activate_marker.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(next_props));
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.om$core$IInitState$ = true;
hivez.map.t20935.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)},new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (_20937){var self__ = this;
var _20937__$1 = this;return self__.meta20936;
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.t20935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function (_20937,meta20936__$1){var self__ = this;
var _20937__$1 = this;return (new hivez.map.t20935(self__.p__20925,self__.add,self__.owner,self__.activate,self__.data,self__.p__20924,self__.map__20933,self__.goog_map,self__.delete$,self__.active,self__.hives,self__.opts,self__.map__20934,meta20936__$1));
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
hivez.map.__GT_t20935 = ((function (map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add){
return (function __GT_t20935(p__20925__$1,add__$1,owner__$1,activate__$1,data__$1,p__20924__$1,map__20933__$2,goog_map__$1,delete$__$1,active__$1,hives__$1,opts__$1,map__20934__$2,meta20936){return (new hivez.map.t20935(p__20925__$1,add__$1,owner__$1,activate__$1,data__$1,p__20924__$1,map__20933__$2,goog_map__$1,delete$__$1,active__$1,hives__$1,opts__$1,map__20934__$2,meta20936));
});})(map__20933,map__20933__$1,data,active,hives,map__20934,map__20934__$1,opts,delete$,activate,add))
;
}
return (new hivez.map.t20935(p__20925,add,owner,activate,data,p__20924,map__20933__$1,goog_map,delete$,active,hives,opts,map__20934__$1,null));
});

//# sourceMappingURL=map.js.map