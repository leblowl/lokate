// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.goog_map');
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
hivez.goog_map.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lat())+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat_lng.lng())));
});
/**
* Euclidean distance between 2 points
*/
hivez.goog_map.distance = (function distance(pos1,pos2){return Math.pow.call(null,(Math.pow.call(null,(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos2)),(2)) + Math.pow.call(null,(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos2)),(2))),0.5);
});
hivez.goog_map.nearest = (function nearest(marker,markers){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__25421_SHARP_){return hivez.goog_map.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(marker),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__25421_SHARP_)));
}),cljs.core.seq.call(null,markers));
});
hivez.goog_map.activate_marker = (function activate_marker(owner,map,key){om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693)], null),(function (p1__25422_SHARP_){var vals = cljs.core.vals.call(null,p1__25422_SHARP_);return null;
}));
if(cljs.core.truth_(key))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null),true);
} else
{}
var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));return cljs.core.dorun.call(null,map.call(null,((function (markers){
return (function (p1__25423_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__25423_SHARP_)))
{new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25423_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
return map.panTo(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25423_SHARP_).getPosition());
} else
{return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25423_SHARP_).setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
}
});})(markers))
,cljs.core.vals.call(null,markers)));
});
hivez.goog_map.render_markers = (function render_markers(owner){var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (markers){
return (function (p1__25424_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__25424_SHARP_).setIcon((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__25424_SHARP_))?"http://maps.google.com/mapfiles/ms/icons/green-dot.png":"http://maps.google.com/mapfiles/ms/icons/red-dot.png"));
});})(markers))
,cljs.core.vals.call(null,markers)));
});
hivez.goog_map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,pos){var marker = (new google.maps.Marker({"title": "hive", "map": map, "position": cljs.core.clj__GT_js.call(null,pos)}));google.maps.event.addListener.call(null,marker,"click",((function (marker){
return (function (_){var key = hivez.goog_map.pos_key.call(null,marker.getPosition());if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null))))
{return hivez.goog_map.activate_marker.call(null,owner,map,null);
} else
{return hivez.goog_map.activate_marker.call(null,owner,map,key);
}
});})(marker))
);
google.maps.event.addListener.call(null,marker,"rightclick",((function (marker){
return (function (_){var key = hivez.goog_map.pos_key.call(null,marker.getPosition());if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"active","active",1895962068)], null))))
{hivez.goog_map.activate_marker.call(null,owner,map,cljs.core.first.call(null,hivez.goog_map.nearest.call(null,marker,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693)))));
} else
{}
marker.setMap(null);
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (key,marker){
return (function (p1__25425_SHARP_){return cljs.core.dissoc.call(null,p1__25425_SHARP_,key);
});})(key,marker))
);
});})(marker))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.goog_map.add_marker = (function add_marker(owner,map,pos){var key = hivez.goog_map.pos_key.call(null,pos);var marker = hivez.goog_map.mark_it_BANG_.call(null,owner,map,pos);om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (key,marker){
return (function (p1__25426_SHARP_){return cljs.core.assoc.call(null,p1__25426_SHARP_,key,marker);
});})(key,marker))
);
return hivez.goog_map.activate_marker.call(null,owner,map,key);
});
hivez.goog_map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.goog_map.goog_map = (function goog_map(hives,owner){if(typeof hivez.goog_map.t25439 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.goog_map.t25439 = (function (owner,hives,goog_map,meta25440){
this.owner = owner;
this.hives = hives;
this.goog_map = goog_map;
this.meta25440 = meta25440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.goog_map.t25439.cljs$lang$type = true;
hivez.goog_map.t25439.cljs$lang$ctorStr = "hivez.goog-map/t25439";
hivez.goog_map.t25439.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.goog-map/t25439");
});
hivez.goog_map.t25439.prototype.om$core$IRenderState$ = true;
hivez.goog_map.t25439.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__25442){var self__ = this;
var map__25443 = p__25442;var map__25443__$1 = ((cljs.core.seq_QMARK_.call(null,map__25443))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);var markers = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;cljs.core.println.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,markers),cljs.core.map.call(null,((function (___$1,map__25443,map__25443__$1,markers){
return (function (p1__25427_SHARP_){return cljs.core.assoc.call(null,p1__25427_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),true);
});})(___$1,map__25443,map__25443__$1,markers))
,cljs.core.vals.call(null,markers))));
return React.DOM.div({"id": "map-canvas"});
});
hivez.goog_map.t25439.prototype.om$core$IDidMount$ = true;
hivez.goog_map.t25439.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var map = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,map,"mousedown",((function (map_options,map,___$1){
return (function (evt){var temp__4124__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606));if(cljs.core.truth_(temp__4124__auto__))
{var timeout = temp__4124__auto__;clearTimeout(timeout);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
} else
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),setTimeout(((function (temp__4124__auto__,map_options,map,___$1){
return (function (){return hivez.goog_map.add_marker.call(null,self__.owner,map,evt.latLng);
});})(temp__4124__auto__,map_options,map,___$1))
,(1000)));
}
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mouseup",((function (map_options,map,___$1){
return (function (evt){return hivez.goog_map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"mousemove",((function (map_options,map,___$1){
return (function (evt){return hivez.goog_map.cancel_action.call(null,self__.owner);
});})(map_options,map,___$1))
);
google.maps.event.addListener.call(null,map,"rightclick",((function (map_options,map,___$1){
return (function (evt){return hivez.goog_map.add_marker.call(null,self__.owner,map,evt.latLng);
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
return (function iter__25444(s__25445){return (new cljs.core.LazySeq(null,((function (map_options,map,___$1){
return (function (){var s__25445__$1 = s__25445;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25445__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var key = cljs.core.first.call(null,xs__4624__auto__);var iterys__13282__auto__ = ((function (s__25445__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1){
return (function iter__25446(s__25447){return (new cljs.core.LazySeq(null,((function (s__25445__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1){
return (function (){var s__25447__$1 = s__25447;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__25447__$1);if(temp__4126__auto____$1)
{var s__25447__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25447__$2))
{var c__13284__auto__ = cljs.core.chunk_first.call(null,s__25447__$2);var size__13285__auto__ = cljs.core.count.call(null,c__13284__auto__);var b__25449 = cljs.core.chunk_buffer.call(null,size__13285__auto__);if((function (){var i__25448 = (0);while(true){
if((i__25448 < size__13285__auto__))
{var val = cljs.core._nth.call(null,c__13284__auto__,i__25448);cljs.core.chunk_append.call(null,b__25449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,hivez.goog_map.mark_it_BANG_.call(null,self__.owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(val))], null));
{
var G__25450 = (i__25448 + (1));
i__25448 = G__25450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25449),iter__25446.call(null,cljs.core.chunk_rest.call(null,s__25447__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25449),null);
}
} else
{var val = cljs.core.first.call(null,s__25447__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,hivez.goog_map.mark_it_BANG_.call(null,self__.owner,map,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(val))], null),iter__25446.call(null,cljs.core.rest.call(null,s__25447__$2)));
}
} else
{return null;
}
break;
}
});})(s__25445__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1))
,null,null));
});})(s__25445__$1,key,xs__4624__auto__,temp__4126__auto__,map_options,map,___$1))
;var fs__13283__auto__ = cljs.core.seq.call(null,iterys__13282__auto__.call(null,cljs.core.vals.call(null,self__.hives)));if(fs__13283__auto__)
{return cljs.core.concat.call(null,fs__13283__auto__,iter__25444.call(null,cljs.core.rest.call(null,s__25445__$1)));
} else
{{
var G__25451 = cljs.core.rest.call(null,s__25445__$1);
s__25445__$1 = G__25451;
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
hivez.goog_map.t25439.prototype.om$core$IInitState$ = true;
hivez.goog_map.t25439.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)},new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentVector.EMPTY], null);
});
hivez.goog_map.t25439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25441){var self__ = this;
var _25441__$1 = this;return self__.meta25440;
});
hivez.goog_map.t25439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25441,meta25440__$1){var self__ = this;
var _25441__$1 = this;return (new hivez.goog_map.t25439(self__.owner,self__.hives,self__.goog_map,meta25440__$1));
});
hivez.goog_map.__GT_t25439 = (function __GT_t25439(owner__$1,hives__$1,goog_map__$1,meta25440){return (new hivez.goog_map.t25439(owner__$1,hives__$1,goog_map__$1,meta25440));
});
}
return (new hivez.goog_map.t25439(owner,hives,goog_map,null));
});

//# sourceMappingURL=goog_map.js.map