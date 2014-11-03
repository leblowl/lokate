// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.string.format');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
hivez.map.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
/**
* Euclidean distance between 2 points
*/
hivez.map.distance = (function distance(pos1,pos2){return Math.pow.call(null,(Math.pow.call(null,(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos2)),(2)) + Math.pow.call(null,(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos2)),(2))),0.5);
});
hivez.map.nearest = (function nearest(marker,markers){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__25606_SHARP_){return hivez.map.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(marker),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__25606_SHARP_)));
}),cljs.core.seq.call(null,markers));
});
hivez.map.activate_marker = (function activate_marker(owner,map,key){om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693)], null),(function (p1__25607_SHARP_){var vals = cljs.core.vals.call(null,p1__25607_SHARP_);return null;
}));
if(cljs.core.truth_(key))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null),true);
} else
{}
var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));return cljs.core.dorun.call(null,map.call(null,((function (markers){
return (function (p1__25608_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__25608_SHARP_)))
{new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25608_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
return map.panTo(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25608_SHARP_).getPosition());
} else
{return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25608_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}
});})(markers))
,cljs.core.vals.call(null,markers)));
});
hivez.map.render_markers = (function render_markers(owner){var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (markers){
return (function (p1__25609_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25609_SHARP_).setIcon((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__25609_SHARP_))?"http://maps.google.com/mapfiles/ms/icons/green-dot.png":"http://maps.google.com/mapfiles/ms/icons/red-dot.png"));
});})(markers))
,cljs.core.vals.call(null,markers)));
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,pos){var marker = (new google.maps.Marker({"title": "hive", "map": map, "position": cljs.core.clj__GT_js.call(null,pos)}));google.maps.event.addListener.call(null,marker,"click",((function (marker){
return (function (_){var key = hivez.map.pos_key.call(null,marker.getPosition());if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null))))
{return hivez.map.activate_marker.call(null,owner,map,null);
} else
{return hivez.map.activate_marker.call(null,owner,map,key);
}
});})(marker))
);
google.maps.event.addListener.call(null,marker,"rightclick",((function (marker){
return (function (_){var key = hivez.map.pos_key.call(null,marker.getPosition());if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null))))
{hivez.map.activate_marker.call(null,owner,map,cljs.core.first.call(null,hivez.map.nearest.call(null,marker,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693)))));
} else
{}
marker.setMap(null);
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (key,marker){
return (function (p1__25610_SHARP_){return cljs.core.dissoc.call(null,p1__25610_SHARP_,key);
});})(key,marker))
);
});})(marker))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.map.add_marker = (function add_marker(owner,map,pos){var key = hivez.map.pos_key.call(null,pos);var marker = hivez.map.mark_it_BANG_.call(null,owner,map,pos);om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (key,marker){
return (function (p1__25611_SHARP_){return cljs.core.assoc.call(null,p1__25611_SHARP_,key,marker);
});})(key,marker))
);
return hivez.map.activate_marker.call(null,owner,map,key);
});
hivez.map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.map.goog_map = (function goog_map(hives,owner){if(typeof hivez.map.t25624 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t25624 = (function (owner,hives,goog_map,meta25625){
this.owner = owner;
this.hives = hives;
this.goog_map = goog_map;
this.meta25625 = meta25625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t25624.cljs$lang$type = true;
hivez.map.t25624.cljs$lang$ctorStr = "hivez.map/t25624";
hivez.map.t25624.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.map/t25624");
});
hivez.map.t25624.prototype.om$core$IRenderState$ = true;
hivez.map.t25624.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__25627){var self__ = this;
var map__25628 = p__25627;var map__25628__$1 = ((cljs.core.seq_QMARK_.call(null,map__25628))?cljs.core.apply.call(null,cljs.core.hash_map,map__25628):map__25628);var markers = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;cljs.core.println.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,markers),cljs.core.map.call(null,((function (___$1,map__25628,map__25628__$1,markers){
return (function (p1__25612_SHARP_){return cljs.core.assoc.call(null,p1__25612_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),true);
});})(___$1,map__25628,map__25628__$1,markers))
,cljs.core.vals.call(null,markers))));
return React.DOM.div({"id": "map-canvas"});
});
hivez.map.t25624.prototype.om$core$IDidMount$ = true;
hivez.map.t25624.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"mousedown",((function (map_options,map,___$1){
return (function (evt){var temp__4124__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606));if(cljs.core.truth_(temp__4124__auto__))
{var timeout = temp__4124__auto__;clearTimeout(timeout);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
} else
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),setTimeout(((function (temp__4124__auto__,map_options,map,___$1){
return (function (){return hivez.map.add_marker.call(null,self__.owner,map,evt.latLng);
});})(temp__4124__auto__,map_options,map,___$1))
,(1000)));
}
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mouseup",((function (map_options,map,___$1){
return (function (evt){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mousemove",((function (map_options,map,___$1){
return (function (evt){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1){
return (function (evt){return hivez.map.add_marker.call(null,self__.owner,map,evt.latLng);
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
window.addEventListener("resize",((function (map_options,map,___$1){
return (function (e){google.maps.event.trigger.call(null,map,"resize");
return map.setCenter(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)));
});})(map_options,map,___$1))
);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13286__auto__ = ((function (map_options,map,___$1){
return (function iter__25629(s__25630){return (new cljs.core.LazySeq(null,((function (map_options,map,___$1){
return (function (){var s__25630__$1 = s__25630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25630__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var key = cljs.core.first.call(null,xs__4624__auto__);var iterys__13282__auto__ = ((function (s__25630__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1){
return (function iter__25631(s__25632){return (new cljs.core.LazySeq(null,((function (s__25630__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1){
return (function (){var s__25632__$1 = s__25632;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__25632__$1);if(temp__4126__auto____$1)
{var s__25632__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25632__$2))
{var c__13284__auto__ = cljs.core.chunk_first.call(null,s__25632__$2);var size__13285__auto__ = cljs.core.count.call(null,c__13284__auto__);var b__25634 = cljs.core.chunk_buffer.call(null,size__13285__auto__);if((function (){var i__25633 = (0);while(true){
if((i__25633 < size__13285__auto__))
{var val = cljs.core._nth.call(null,c__13284__auto__,i__25633);cljs.core.chunk_append.call(null,b__25634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,hivez.map.mark_it_BANG_.call(null,self__.owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(val))], null));
{
var G__25635 = (i__25633 + (1));
i__25633 = G__25635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25634),iter__25631.call(null,cljs.core.chunk_rest.call(null,s__25632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25634),null);
}
} else
{var val = cljs.core.first.call(null,s__25632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,hivez.map.mark_it_BANG_.call(null,self__.owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(val))], null),iter__25631.call(null,cljs.core.rest.call(null,s__25632__$2)));
}
} else
{return null;
}
break;
}
});})(s__25630__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1))
,null,null));
});})(s__25630__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1))
;var fs__13283__auto__ = cljs.core.seq.call(null,iterys__13282__auto__.call(null,cljs.core.vals.call(null,self__.hives)));if(fs__13283__auto__)
{return cljs.core.concat.call(null,fs__13283__auto__,iter__25629.call(null,cljs.core.rest.call(null,s__25630__$1)));
} else
{{
var G__25636 = cljs.core.rest.call(null,s__25630__$1);
s__25630__$1 = G__25636;
continue;
}
}
} else
{return null;
}
break;
}
});})(map_options,map,___$1))
,null,null));
});})(map_options,map,___$1))
;return iter__13286__auto__.call(null,cljs.core.keys.call(null,self__.hives));
})()));
});
hivez.map.t25624.prototype.om$core$IInitState$ = true;
hivez.map.t25624.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)},new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentVector.EMPTY], null);
});
hivez.map.t25624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25626){var self__ = this;
var _25626__$1 = this;return self__.meta25625;
});
hivez.map.t25624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25626,meta25625__$1){var self__ = this;
var _25626__$1 = this;return (new hivez.map.t25624(self__.owner,self__.hives,self__.goog_map,meta25625__$1));
});
hivez.map.__GT_t25624 = (function __GT_t25624(owner__$1,hives__$1,goog_map__$1,meta25625){return (new hivez.map.t25624(owner__$1,hives__$1,goog_map__$1,meta25625));
});
}
return (new hivez.map.t25624(owner,hives,goog_map,null));
});

//# sourceMappingURL=himap.js.map