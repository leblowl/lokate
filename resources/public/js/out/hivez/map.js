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
hivez.map.blue_ico = L.spriteIcon();
hivez.map.green_ico = L.spriteIcon("green");
hivez.map.activate_marker = (function activate_marker(owner,key){var l_map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));var markers = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693));var active = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),key,new cljs.core.Keyword(null,"marker","marker",865118313)], null));cljs.core.dorun.call(null,cljs.core.map.call(null,((function (l_map,markers,active){
return (function (p1__37751_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__37751_SHARP_).setIcon(L.spriteIcon());
});})(l_map,markers,active))
,cljs.core.vals.call(null,markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_ico);
return l_map.panTo(active.getLatLng());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);var marker = L.marker(cljs.core.clj__GT_js.call(null,pos),{"icon": hivez.map.blue_ico}).addTo(map);marker.on("click",((function (pos,marker){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"active-hive","active-hive",1634241639),om.core.path.call(null,hive)], null));
});})(pos,marker))
);
marker.on("contextmenu",((function (pos,marker){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"active-hive","active-hive",1634241639),om.core.path.call(null,hive)], null));
});})(pos,marker))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives){var map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (map){
return (function (p1__37752_SHARP_){return cljs.core.into.call(null,p1__37752_SHARP_,(function (){var iter__13289__auto__ = ((function (map){
return (function iter__37761(s__37762){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__37762__$1 = s__37762;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37762__$1);if(temp__4126__auto__)
{var s__37762__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37762__$2))
{var c__13287__auto__ = cljs.core.chunk_first.call(null,s__37762__$2);var size__13288__auto__ = cljs.core.count.call(null,c__13287__auto__);var b__37764 = cljs.core.chunk_buffer.call(null,size__13288__auto__);if((function (){var i__37763 = (0);while(true){
if((i__37763 < size__13288__auto__))
{var vec__37767 = cljs.core._nth.call(null,c__13287__auto__,i__37763);var k = cljs.core.nth.call(null,vec__37767,(0),null);var v = cljs.core.nth.call(null,vec__37767,(1),null);cljs.core.chunk_append.call(null,b__37764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v)], null));
{
var G__37769 = (i__37763 + (1));
i__37763 = G__37769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37764),iter__37761.call(null,cljs.core.chunk_rest.call(null,s__37762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37764),null);
}
} else
{var vec__37768 = cljs.core.first.call(null,s__37762__$2);var k = cljs.core.nth.call(null,vec__37768,(0),null);var v = cljs.core.nth.call(null,vec__37768,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v)], null),iter__37761.call(null,cljs.core.rest.call(null,s__37762__$2)));
}
} else
{return null;
}
break;
}
});})(map))
,null,null));
});})(map))
;return iter__13289__auto__.call(null,hives);
})());
});})(map))
);
});
hivez.map.add_group = (function add_group(owner,places,opts){return cljs.core.map.call(null,(function (p1__37770_SHARP_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__37770_SHARP_),new cljs.core.Keyword(null,"group","group",582596132),(new L.MarkerClusterGroup())], null).call(null);
}));
});
hivez.map.delete_markers = (function delete_markers(owner,hives){var l_map_37773 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));cljs.core.dorun.call(null,cljs.core.map.call(null,((function (l_map_37773){
return (function (p1__37771_SHARP_){return l_map_37773.removeLayer(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),p1__37771_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313)], null)));
});})(l_map_37773))
,cljs.core.map.call(null,cljs.core.first,hives)));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (p1__37772_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__37772_SHARP_,cljs.core.map.call(null,cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.map.l_map = (function l_map(p__37774,owner){var map__37783 = p__37774;var map__37783__$1 = ((cljs.core.seq_QMARK_.call(null,map__37783))?cljs.core.apply.call(null,cljs.core.hash_map,map__37783):map__37783);var data = map__37783__$1;var active_hive = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639));var active_place = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"active-place","active-place",279041385));var places = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"places","places",1043491706));if(typeof hivez.map.t37784 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t37784 = (function (places,active_place,active_hive,data,map__37783,owner,p__37774,l_map,meta37785){
this.places = places;
this.active_place = active_place;
this.active_hive = active_hive;
this.data = data;
this.map__37783 = map__37783;
this.owner = owner;
this.p__37774 = p__37774;
this.l_map = l_map;
this.meta37785 = meta37785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t37784.cljs$lang$type = true;
hivez.map.t37784.cljs$lang$ctorStr = "hivez.map/t37784";
hivez.map.t37784.cljs$lang$ctorPrWriter = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.map/t37784");
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.om$core$IRenderState$ = true;
hivez.map.t37784.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (_,p__37787){var self__ = this;
var map__37788 = p__37787;var map__37788__$1 = ((cljs.core.seq_QMARK_.call(null,map__37788))?cljs.core.apply.call(null,cljs.core.hash_map,map__37788):map__37788);var markers = cljs.core.get.call(null,map__37788__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;return React.DOM.div({"id": "map"});
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.om$core$IDidMount$ = true;
hivez.map.t37784.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (_){var self__ = this;
var ___$1 = this;var tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";var tile_attr = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors";var l_map__$2 = L.map("map").setView(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)),(9));L.tileLayer(tile_url,{"attribution": tile_attr}).addTo(l_map__$2);
l_map__$2.on("contextmenu",((function (tile_url,tile_attr,l_map__$2,___$1,map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (e){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-hive","add-hive",-1654633965),cljs.core.select_keys.call(null,cljs.core.js__GT_clj.call(null,e.latlng,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lng","lng",1667213918)], null))], null));
});})(tile_url,tile_attr,l_map__$2,___$1,map__37783,map__37783__$1,data,active_hive,active_place,places))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (tile_url,tile_attr,l_map__$2,___$1,map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (pos){var initialLoc = [pos.coords.latitude,pos.coords.longitude];return l_map__$2.setView(initialLoc,(9));
});})(tile_url,tile_attr,l_map__$2,___$1,map__37783,map__37783__$1,data,active_hive,active_place,places))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),l_map__$2);
return hivez.map.add_markers.call(null,self__.owner,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),self__.places)));
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t37784.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (this$,p__37789){var self__ = this;
var map__37790 = p__37789;var map__37790__$1 = ((cljs.core.seq_QMARK_.call(null,map__37790))?cljs.core.apply.call(null,cljs.core.hash_map,map__37790):map__37790);var next_props = map__37790__$1;var active_hive__$2 = cljs.core.get.call(null,map__37790__$1,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639));var active_place__$2 = cljs.core.get.call(null,map__37790__$1,new cljs.core.Keyword(null,"active-place","active-place",279041385));var places__$2 = cljs.core.get.call(null,map__37790__$1,new cljs.core.Keyword(null,"places","places",1043491706));var this$__$1 = this;var next_hives = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),places__$2));var current_hives = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner))));var to_add = clojure.set.difference.call(null,next_hives,current_hives);var to_delete = clojure.set.difference.call(null,current_hives,next_hives);hivez.map.delete_markers.call(null,self__.owner,to_delete);
hivez.map.add_markers.call(null,self__.owner,to_add);
return hivez.map.activate_marker.call(null,self__.owner,cljs.core.last.call(null,active_hive__$2));
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.om$core$IInitState$ = true;
hivez.map.t37784.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),[(0),(0)],new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (_37786){var self__ = this;
var _37786__$1 = this;return self__.meta37785;
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.t37784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function (_37786,meta37785__$1){var self__ = this;
var _37786__$1 = this;return (new hivez.map.t37784(self__.places,self__.active_place,self__.active_hive,self__.data,self__.map__37783,self__.owner,self__.p__37774,self__.l_map,meta37785__$1));
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
hivez.map.__GT_t37784 = ((function (map__37783,map__37783__$1,data,active_hive,active_place,places){
return (function __GT_t37784(places__$1,active_place__$1,active_hive__$1,data__$1,map__37783__$2,owner__$1,p__37774__$1,l_map__$1,meta37785){return (new hivez.map.t37784(places__$1,active_place__$1,active_hive__$1,data__$1,map__37783__$2,owner__$1,p__37774__$1,l_map__$1,meta37785));
});})(map__37783,map__37783__$1,data,active_hive,active_place,places))
;
}
return (new hivez.map.t37784(places,active_place,active_hive,data,map__37783__$1,owner,p__37774,l_map,null));
});

//# sourceMappingURL=map.js.map