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
return (function (p1__21990_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__21990_SHARP_).setIcon(hivez.map.red_dot);
});})(goog_map,markers,active))
,cljs.core.vals.call(null,markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_dot);
return goog_map.panTo(active.getPosition());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,hive,p__21991){var map__21993 = p__21991;var map__21993__$1 = ((cljs.core.seq_QMARK_.call(null,map__21993))?cljs.core.apply.call(null,cljs.core.hash_map,map__21993):map__21993);var opts = map__21993__$1;var delete$ = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__21993__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);var marker = (new google.maps.Marker({"icon": hivez.map.red_dot, "title": "hive", "map": map, "position": cljs.core.clj__GT_js.call(null,pos)}));google.maps.event.addListener.call(null,marker,"click",((function (pos,marker,map__21993,map__21993__$1,opts,delete$,activate){
return (function (_){return activate.call(null,om.core.path.call(null,hive));
});})(pos,marker,map__21993,map__21993__$1,opts,delete$,activate))
);
google.maps.event.addListener.call(null,marker,"rightclick",((function (pos,marker,map__21993,map__21993__$1,opts,delete$,activate){
return (function (_){return delete$.call(null,hivez.map.pos_key.call(null,marker.getPosition()));
});})(pos,marker,map__21993,map__21993__$1,opts,delete$,activate))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives,opts){var map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (map){
return (function (p1__21994_SHARP_){return cljs.core.into.call(null,p1__21994_SHARP_,(function (){var iter__13285__auto__ = ((function (map){
return (function iter__22003(s__22004){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__22004__$1 = s__22004;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22004__$1);if(temp__4126__auto__)
{var s__22004__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22004__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__22004__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__22006 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__22005 = (0);while(true){
if((i__22005 < size__13284__auto__))
{var vec__22009 = cljs.core._nth.call(null,c__13283__auto__,i__22005);var k = cljs.core.nth.call(null,vec__22009,(0),null);var v = cljs.core.nth.call(null,vec__22009,(1),null);cljs.core.chunk_append.call(null,b__22006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v,opts)], null));
{
var G__22011 = (i__22005 + (1));
i__22005 = G__22011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22006),iter__22003.call(null,cljs.core.chunk_rest.call(null,s__22004__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22006),null);
}
} else
{var vec__22010 = cljs.core.first.call(null,s__22004__$2);var k = cljs.core.nth.call(null,vec__22010,(0),null);var v = cljs.core.nth.call(null,vec__22010,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v,opts)], null),iter__22003.call(null,cljs.core.rest.call(null,s__22004__$2)));
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
hivez.map.delete_markers = (function delete_markers(owner,hives){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__22012_SHARP_){return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),p1__22012_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313)], null)).setMap(null);
}),cljs.core.map.call(null,cljs.core.first,hives)));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (p1__22013_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__22013_SHARP_,cljs.core.map.call(null,cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.map.goog_map = (function goog_map(p__22014,owner,p__22015){var map__22023 = p__22014;var map__22023__$1 = ((cljs.core.seq_QMARK_.call(null,map__22023))?cljs.core.apply.call(null,cljs.core.hash_map,map__22023):map__22023);var data = map__22023__$1;var active = cljs.core.get.call(null,map__22023__$1,new cljs.core.Keyword(null,"active","active",1895962068));var places = cljs.core.get.call(null,map__22023__$1,new cljs.core.Keyword(null,"places","places",1043491706));var map__22024 = p__22015;var map__22024__$1 = ((cljs.core.seq_QMARK_.call(null,map__22024))?cljs.core.apply.call(null,cljs.core.hash_map,map__22024):map__22024);var opts = map__22024__$1;var delete$ = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var add = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword(null,"add","add",235287739));if(typeof hivez.map.t22025 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t22025 = (function (places,add,owner,activate,data,p__22014,map__22023,p__22015,goog_map,delete$,map__22024,active,opts,meta22026){
this.places = places;
this.add = add;
this.owner = owner;
this.activate = activate;
this.data = data;
this.p__22014 = p__22014;
this.map__22023 = map__22023;
this.p__22015 = p__22015;
this.goog_map = goog_map;
this.delete$ = delete$;
this.map__22024 = map__22024;
this.active = active;
this.opts = opts;
this.meta22026 = meta22026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t22025.cljs$lang$type = true;
hivez.map.t22025.cljs$lang$ctorStr = "hivez.map/t22025";
hivez.map.t22025.cljs$lang$ctorPrWriter = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.map/t22025");
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.om$core$IRenderState$ = true;
hivez.map.t22025.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (_,p__22028){var self__ = this;
var map__22029 = p__22028;var map__22029__$1 = ((cljs.core.seq_QMARK_.call(null,map__22029))?cljs.core.apply.call(null,cljs.core.hash_map,map__22029):map__22029);var markers = cljs.core.get.call(null,map__22029__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;return React.DOM.div({"id": "map-canvas"});
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.om$core$IDidMount$ = true;
hivez.map.t22025.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;var map_options = {"streetViewControl": false, "scaleControl": true, "zoomControl": false, "panControl": false, "zoom": (6), "center": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368))};var goog_map__$2 = (new google.maps.Map(om.core.get_node.call(null,self__.owner),map_options));google.maps.event.addListener.call(null,goog_map__$2,"mousedown",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (evt){google.maps.event.addListener.call(null,goog_map__$2,"mouseup",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
google.maps.event.addListener.call(null,goog_map__$2,"mousemove",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (evt__$1){return hivez.map.cancel_action.call(null,self__.owner);
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
var temp__4124__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606));if(cljs.core.truth_(temp__4124__auto__))
{var timeout = temp__4124__auto__;clearTimeout(timeout);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
} else
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),setTimeout(((function (temp__4124__auto__,map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (){return self__.add.call(null,evt.latLng);
});})(temp__4124__auto__,map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
,(1000)));
}
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
google.maps.event.addListener.call(null,goog_map__$2,hivez.map.Dude,"rightclick",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (evt){return self__.add.call(null,evt.latLng);
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (pos){var initialLoc = (new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));return goog_map__$2.setCenter(initialLoc);
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
google.maps.event.addListener.call(null,goog_map__$2,"idle",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368),goog_map__$2.getCenter());
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
window.addEventListener("resize",((function (map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (e){google.maps.event.trigger.call(null,goog_map__$2,"resize");
return goog_map__$2.setCenter(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)));
});})(map_options,goog_map__$2,___$1,map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),goog_map__$2);
return hivez.map.add_markers.call(null,self__.owner,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),self__.places)),self__.opts);
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t22025.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;var next_hives = cljs.core.set.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(next_props));var current_hives = cljs.core.set.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner)));var to_add = clojure.set.difference.call(null,next_hives,current_hives);var to_delete = clojure.set.difference.call(null,current_hives,next_hives);hivez.map.delete_markers.call(null,self__.owner,to_delete);
hivez.map.add_markers.call(null,self__.owner,to_add,self__.opts);
return hivez.map.activate_marker.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(next_props));
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.om$core$IInitState$ = true;
hivez.map.t22025.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),{"lng": (0), "lat": (0)},new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (_22027){var self__ = this;
var _22027__$1 = this;return self__.meta22026;
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.t22025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function (_22027,meta22026__$1){var self__ = this;
var _22027__$1 = this;return (new hivez.map.t22025(self__.places,self__.add,self__.owner,self__.activate,self__.data,self__.p__22014,self__.map__22023,self__.p__22015,self__.goog_map,self__.delete$,self__.map__22024,self__.active,self__.opts,meta22026__$1));
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
hivez.map.__GT_t22025 = ((function (map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add){
return (function __GT_t22025(places__$1,add__$1,owner__$1,activate__$1,data__$1,p__22014__$1,map__22023__$2,p__22015__$1,goog_map__$1,delete$__$1,map__22024__$2,active__$1,opts__$1,meta22026){return (new hivez.map.t22025(places__$1,add__$1,owner__$1,activate__$1,data__$1,p__22014__$1,map__22023__$2,p__22015__$1,goog_map__$1,delete$__$1,map__22024__$2,active__$1,opts__$1,meta22026));
});})(map__22023,map__22023__$1,data,active,places,map__22024,map__22024__$1,opts,delete$,activate,add))
;
}
return (new hivez.map.t22025(places,add,owner,activate,data,p__22014,map__22023__$1,p__22015,goog_map,delete$,map__22024__$1,active,opts,null));
});

//# sourceMappingURL=map.js.map