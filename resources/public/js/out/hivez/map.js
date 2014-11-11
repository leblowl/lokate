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
return (function (p1__20927_SHARP_){return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__20927_SHARP_).setIcon(L.spriteIcon());
});})(l_map,markers,active))
,cljs.core.vals.call(null,markers)));
if(cljs.core.truth_(active))
{active.setIcon(hivez.map.green_ico);
return l_map.panTo(active.getLatLng());
} else
{return null;
}
});
hivez.map.mark_it_BANG_ = (function mark_it_BANG_(owner,map,hive,p__20928){var map__20930 = p__20928;var map__20930__$1 = ((cljs.core.seq_QMARK_.call(null,map__20930))?cljs.core.apply.call(null,cljs.core.hash_map,map__20930):map__20930);var opts = map__20930__$1;var delete$ = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);var marker = L.marker(cljs.core.clj__GT_js.call(null,pos),{"icon": hivez.map.blue_ico}).addTo(map);marker.on("click",((function (pos,marker,map__20930,map__20930__$1,opts,delete$,activate){
return (function (){return activate.call(null,om.core.path.call(null,hive));
});})(pos,marker,map__20930,map__20930__$1,opts,delete$,activate))
);
marker.on("contextmenu",((function (pos,marker,map__20930,map__20930__$1,opts,delete$,activate){
return (function (_){return delete$.call(null,om.core.path.call(null,hive));
});})(pos,marker,map__20930,map__20930__$1,opts,delete$,activate))
);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});
hivez.map.add_markers = (function add_markers(owner,hives,opts){var map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),((function (map){
return (function (p1__20931_SHARP_){return cljs.core.into.call(null,p1__20931_SHARP_,(function (){var iter__13286__auto__ = ((function (map){
return (function iter__20940(s__20941){return (new cljs.core.LazySeq(null,((function (map){
return (function (){var s__20941__$1 = s__20941;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20941__$1);if(temp__4126__auto__)
{var s__20941__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20941__$2))
{var c__13284__auto__ = cljs.core.chunk_first.call(null,s__20941__$2);var size__13285__auto__ = cljs.core.count.call(null,c__13284__auto__);var b__20943 = cljs.core.chunk_buffer.call(null,size__13285__auto__);if((function (){var i__20942 = (0);while(true){
if((i__20942 < size__13285__auto__))
{var vec__20946 = cljs.core._nth.call(null,c__13284__auto__,i__20942);var k = cljs.core.nth.call(null,vec__20946,(0),null);var v = cljs.core.nth.call(null,vec__20946,(1),null);cljs.core.chunk_append.call(null,b__20943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v,opts)], null));
{
var G__20948 = (i__20942 + (1));
i__20942 = G__20948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20943),iter__20940.call(null,cljs.core.chunk_rest.call(null,s__20941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20943),null);
}
} else
{var vec__20947 = cljs.core.first.call(null,s__20941__$2);var k = cljs.core.nth.call(null,vec__20947,(0),null);var v = cljs.core.nth.call(null,vec__20947,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,hivez.map.mark_it_BANG_.call(null,owner,map,v,opts)], null),iter__20940.call(null,cljs.core.rest.call(null,s__20941__$2)));
}
} else
{return null;
}
break;
}
});})(map))
,null,null));
});})(map))
;return iter__13286__auto__.call(null,hives);
})());
});})(map))
);
});
hivez.map.add_group = (function add_group(owner,places,opts){return cljs.core.map.call(null,(function (p1__20949_SHARP_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20949_SHARP_),new cljs.core.Keyword(null,"group","group",582596132),(new L.MarkerClusterGroup())], null).call(null);
}));
});
hivez.map.delete_markers = (function delete_markers(owner,hives){var l_map_20952 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));cljs.core.dorun.call(null,cljs.core.map.call(null,((function (l_map_20952){
return (function (p1__20950_SHARP_){return l_map_20952.removeLayer(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693),p1__20950_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313)], null)));
});})(l_map_20952))
,cljs.core.map.call(null,cljs.core.first,hives)));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (p1__20951_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__20951_SHARP_,cljs.core.map.call(null,cljs.core.first,hives));
}));
});
hivez.map.cancel_action = (function cancel_action(owner){clearTimeout(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606)));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null);
});
hivez.map.l_map = (function l_map(p__20953,owner,p__20954){var map__20964 = p__20953;var map__20964__$1 = ((cljs.core.seq_QMARK_.call(null,map__20964))?cljs.core.apply.call(null,cljs.core.hash_map,map__20964):map__20964);var data = map__20964__$1;var active = cljs.core.get.call(null,map__20964__$1,new cljs.core.Keyword(null,"active","active",1895962068));var places = cljs.core.get.call(null,map__20964__$1,new cljs.core.Keyword(null,"places","places",1043491706));var map__20965 = p__20954;var map__20965__$1 = ((cljs.core.seq_QMARK_.call(null,map__20965))?cljs.core.apply.call(null,cljs.core.hash_map,map__20965):map__20965);var opts = map__20965__$1;var delete$ = cljs.core.get.call(null,map__20965__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));var activate = cljs.core.get.call(null,map__20965__$1,new cljs.core.Keyword(null,"activate","activate",441219614));var add = cljs.core.get.call(null,map__20965__$1,new cljs.core.Keyword(null,"add","add",235287739));if(typeof hivez.map.t20966 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.map.t20966 = (function (places,add,owner,activate,p__20953,data,map__20964,delete$,active,p__20954,opts,map__20965,l_map,meta20967){
this.places = places;
this.add = add;
this.owner = owner;
this.activate = activate;
this.p__20953 = p__20953;
this.data = data;
this.map__20964 = map__20964;
this.delete$ = delete$;
this.active = active;
this.p__20954 = p__20954;
this.opts = opts;
this.map__20965 = map__20965;
this.l_map = l_map;
this.meta20967 = meta20967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.map.t20966.cljs$lang$type = true;
hivez.map.t20966.cljs$lang$ctorStr = "hivez.map/t20966";
hivez.map.t20966.cljs$lang$ctorPrWriter = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.map/t20966");
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.om$core$IRenderState$ = true;
hivez.map.t20966.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (_,p__20969){var self__ = this;
var map__20970 = p__20969;var map__20970__$1 = ((cljs.core.seq_QMARK_.call(null,map__20970))?cljs.core.apply.call(null,cljs.core.hash_map,map__20970):map__20970);var markers = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var ___$1 = this;return React.DOM.div({"id": "map"});
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.om$core$IDidMount$ = true;
hivez.map.t20966.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;var tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";var tile_attr = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors";var l_map__$2 = L.map("map").setView(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)),(9));L.tileLayer(tile_url,{"attribution": tile_attr}).addTo(l_map__$2);
l_map__$2.on("contextmenu",((function (tile_url,tile_attr,l_map__$2,___$1,map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (e){return self__.add.call(null,cljs.core.select_keys.call(null,cljs.core.js__GT_clj.call(null,e.latlng,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lng","lng",1667213918)], null)));
});})(tile_url,tile_attr,l_map__$2,___$1,map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
);
if(cljs.core.truth_(navigator.geolocation))
{navigator.geolocation.getCurrentPosition(((function (tile_url,tile_attr,l_map__$2,___$1,map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (pos){var initialLoc = [pos.coords.latitude,pos.coords.longitude];return l_map__$2.setView(initialLoc,(9));
});})(tile_url,tile_attr,l_map__$2,___$1,map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
);
} else
{cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),l_map__$2);
return hivez.map.add_markers.call(null,self__.owner,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),self__.places)),self__.opts);
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.om$core$IWillReceiveProps$ = true;
hivez.map.t20966.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (this$,p__20971){var self__ = this;
var map__20972 = p__20971;var map__20972__$1 = ((cljs.core.seq_QMARK_.call(null,map__20972))?cljs.core.apply.call(null,cljs.core.hash_map,map__20972):map__20972);var next_props = map__20972__$1;var active__$2 = cljs.core.get.call(null,map__20972__$1,new cljs.core.Keyword(null,"active","active",1895962068));var places__$2 = cljs.core.get.call(null,map__20972__$1,new cljs.core.Keyword(null,"places","places",1043491706));var this$__$1 = this;var next_hives = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),places__$2));var current_hives = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner))));var to_add = clojure.set.difference.call(null,next_hives,current_hives);var to_delete = clojure.set.difference.call(null,current_hives,next_hives);hivez.map.delete_markers.call(null,self__.owner,to_delete);
hivez.map.add_markers.call(null,self__.owner,to_add,self__.opts);
return hivez.map.activate_marker.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(next_props));
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.om$core$IInitState$ = true;
hivez.map.t20966.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),[(0),(0)],new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (_20968){var self__ = this;
var _20968__$1 = this;return self__.meta20967;
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.t20966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function (_20968,meta20967__$1){var self__ = this;
var _20968__$1 = this;return (new hivez.map.t20966(self__.places,self__.add,self__.owner,self__.activate,self__.p__20953,self__.data,self__.map__20964,self__.delete$,self__.active,self__.p__20954,self__.opts,self__.map__20965,self__.l_map,meta20967__$1));
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
hivez.map.__GT_t20966 = ((function (map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add){
return (function __GT_t20966(places__$1,add__$1,owner__$1,activate__$1,p__20953__$1,data__$1,map__20964__$2,delete$__$1,active__$1,p__20954__$1,opts__$1,map__20965__$2,l_map__$1,meta20967){return (new hivez.map.t20966(places__$1,add__$1,owner__$1,activate__$1,p__20953__$1,data__$1,map__20964__$2,delete$__$1,active__$1,p__20954__$1,opts__$1,map__20965__$2,l_map__$1,meta20967));
});})(map__20964,map__20964__$1,data,active,places,map__20965,map__20965__$1,opts,delete$,activate,add))
;
}
return (new hivez.map.t20966(places,add,owner,activate,p__20953,data,map__20964__$1,delete$,active,p__20954,opts,map__20965__$1,l_map,null));
});

//# sourceMappingURL=map.js.map