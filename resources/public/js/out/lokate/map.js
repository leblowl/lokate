// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.map');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('lokate.util');
goog.require('cljs.core.async');
goog.require('om.core');
L.AwesomeMarkers.Icon.prototype.options.prefix = "icon";
lokate.map.green_ico = L.AwesomeMarkers.icon({"iconColor": "#444444", "markerColor": "lightgreen", "icon": "radio-button-off"});
lokate.map.yellow_ico = L.AwesomeMarkers.icon({"iconColor": "#444444", "markerColor": "beige", "icon": "radio-button-off"});
lokate.map.red_ico = L.AwesomeMarkers.icon({"iconColor": "#444444", "markerColor": "lightred", "icon": "radio-button-off"});
lokate.map.reset_ico = (function reset_ico(icon){
icon.options.icon = "radio-button-off";

return icon;
});
lokate.map.activate_ico = (function activate_ico(icon){
icon.options.icon = "radio-button-on";

return icon;
});
lokate.map.reset_markers = (function reset_markers(owner){
var units = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"units","units",-533089095));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (units){
return (function (p1__10348_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__10348_SHARP_).setIcon(lokate.map.reset_ico.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(p1__10348_SHARP_)));
});})(units))
,cljs.core.vals.call(null,units)));
});
lokate.map.activate_marker = (function activate_marker(owner,id){
var l_map = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));
var active = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),id], null));
if(cljs.core.truth_(active)){
new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(active).setIcon(lokate.map.activate_ico.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(active)));

return l_map.panTo(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(active).getLatLng());
} else {
return null;
}
});
lokate.map.mark_it_BANG_ = (function mark_it_BANG_(unit,lmap,evt_bus){
var icon = lokate.map.green_ico;
var marker = L.marker(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"latlng","latlng",-199468611).cljs$core$IFn$_invoke$arity$1(unit)),{"icon": icon}).addTo(lmap);
marker.on("click",((function (icon,marker){
return (function (){
cljs.core.async.put_BANG_.call(null,evt_bus,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));

return lokate.util.route_BANG_.call(null,evt_bus,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"info","info",-317069002));
});})(icon,marker))
);

return cljs.core.assoc.call(null,unit,new cljs.core.Keyword(null,"marker","marker",865118313),marker,new cljs.core.Keyword(null,"icon","icon",1679606541),icon);
});
lokate.map.add_markers = (function add_markers(units,owner){
var lmap = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));
var evt_bus = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"units","units",-533089095),((function (lmap,evt_bus){
return (function (m){
return cljs.core.merge.call(null,m,lokate.util.mmap.call(null,((function (lmap,evt_bus){
return (function (p1__10349_SHARP_){
return lokate.map.mark_it_BANG_.call(null,p1__10349_SHARP_,lmap,evt_bus);
});})(lmap,evt_bus))
,units));
});})(lmap,evt_bus))
);
});
lokate.map.delete_markers = (function delete_markers(owner,keys){
var l_map_10352 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"map","map",1371690461));
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (l_map_10352){
return (function (p1__10350_SHARP_){
return l_map_10352.removeLayer(om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),p1__10350_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313)], null)));
});})(l_map_10352))
,keys));

return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (p1__10351_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__10351_SHARP_,keys);
}));
});
lokate.map.add_group = (function add_group(owner,places,opts){
return cljs.core.map.call(null,(function (p1__10353_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__10353_SHARP_),new cljs.core.Keyword(null,"group","group",582596132),(new L.MarkerClusterGroup())], null).call(null);
}));
});
lokate.map.add_unit = (function add_unit(evt_bus,evt){
return cljs.core.async.put_BANG_.call(null,evt_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-unit","add-unit",-1676495671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evt.latlng.lat,evt.latlng.lng], null)], null));
});
lokate.map.l_map = (function l_map(p__10355,owner){
var vec__10366 = p__10355;
var path = cljs.core.nth.call(null,vec__10366,(0),null);
var units = cljs.core.nth.call(null,vec__10366,(1),null);
if(typeof lokate.map.t10367 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.map.t10367 = (function (units,path,vec__10366,owner,p__10355,l_map,meta10368){
this.units = units;
this.path = path;
this.vec__10366 = vec__10366;
this.owner = owner;
this.p__10355 = p__10355;
this.l_map = l_map;
this.meta10368 = meta10368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.map.t10367.prototype.om$core$IRenderState$ = true;

lokate.map.t10367.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__10366,path,units){
return (function (_,p__10370){
var self__ = this;
var map__10371 = p__10370;
var map__10371__$1 = ((cljs.core.seq_QMARK_.call(null,map__10371))?cljs.core.apply.call(null,cljs.core.hash_map,map__10371):map__10371);
var markers = cljs.core.get.call(null,map__10371__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));
var ___$1 = this;
return React.DOM.div({"id": "map"});
});})(vec__10366,path,units))
;

lokate.map.t10367.prototype.om$core$IDidMount$ = true;

lokate.map.t10367.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (vec__10366,path,units){
return (function (_){
var self__ = this;
var ___$1 = this;
var tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
var tile_attr = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors";
var l_map__$1 = L.map("map",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),true,new cljs.core.Keyword(null,"contextmenuWidth","contextmenuWidth",299430553),(140),new cljs.core.Keyword(null,"contextmenuAnchor","contextmenuAnchor",-566372429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-70),(-35)], null),new cljs.core.Keyword(null,"contextmenuItems","contextmenuItems",702987758),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add unit",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (tile_url,tile_attr,___$1,vec__10366,path,units){
return (function (p1__10354_SHARP_){
return lokate.map.add_unit.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251)),p1__10354_SHARP_);
});})(tile_url,tile_attr,___$1,vec__10366,path,units))
], null)], null)], null))).setView(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"center","center",-748944368)),(9));
l_map__$1.contextmenu.removeHooks();

L.tileLayer(tile_url,{"attribution": tile_attr}).addTo(l_map__$1);

l_map__$1.on("contextmenu",((function (tile_url,tile_attr,l_map__$1,___$1,vec__10366,path,units){
return (function (){
return cljs.core.List.EMPTY;
});})(tile_url,tile_attr,l_map__$1,___$1,vec__10366,path,units))
);

if(cljs.core.truth_(navigator.geolocation)){
navigator.geolocation.getCurrentPosition(((function (tile_url,tile_attr,l_map__$1,___$1,vec__10366,path,units){
return (function (pos){
var initialLoc = [pos.coords.latitude,pos.coords.longitude];
return l_map__$1.setView(initialLoc,(9));
});})(tile_url,tile_attr,l_map__$1,___$1,vec__10366,path,units))
);
} else {
cljs.core.println.call(null,"Hey, where'd you go!? Geolocation Disabled");
}

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),l_map__$1);

return lokate.map.add_markers.call(null,self__.units,self__.owner);
});})(vec__10366,path,units))
;

lokate.map.t10367.prototype.om$core$IWillReceiveProps$ = true;

lokate.map.t10367.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__10366,path,units){
return (function (this$,p__10372){
var self__ = this;
var vec__10373 = p__10372;
var path__$1 = cljs.core.nth.call(null,vec__10373,(0),null);
var units__$1 = cljs.core.nth.call(null,vec__10373,(1),null);
var this$__$1 = this;
var next_units = cljs.core.set.call(null,units__$1);
var current_units = cljs.core.set.call(null,cljs.core.second.call(null,om.core.get_props.call(null,self__.owner)));
var to_add = clojure.set.difference.call(null,next_units,current_units);
var to_delete = clojure.set.difference.call(null,current_units,next_units);
lokate.map.delete_markers.call(null,self__.owner,cljs.core.keys.call(null,to_delete));

lokate.map.add_markers.call(null,to_add,self__.owner);

lokate.map.reset_markers.call(null,self__.owner);

var vec__10374_10376 = path__$1;
var route_10377 = cljs.core.nth.call(null,vec__10374_10376,(0),null);
var args_10378 = cljs.core.nth.call(null,vec__10374_10376,(1),null);
if(cljs.core._EQ_.call(null,route_10377,new cljs.core.Keyword(null,"unit","unit",375175175))){
var vec__10375_10379 = args_10378;
var cid_10380 = cljs.core.nth.call(null,vec__10375_10379,(0),null);
var uid_10381 = cljs.core.nth.call(null,vec__10375_10379,(1),null);
var page_10382 = cljs.core.nth.call(null,vec__10375_10379,(2),null);
lokate.map.activate_marker.call(null,self__.owner,uid_10381);
} else {
}

var cm = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461)).contextmenu;
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,path__$1),new cljs.core.Keyword(null,"collection","collection",-683361892))){
return cm.addHooks();
} else {
return cm.removeHooks();
}
});})(vec__10366,path,units))
;

lokate.map.t10367.prototype.om$core$IInitState$ = true;

lokate.map.t10367.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__10366,path,units){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),[(0),(0)],new cljs.core.Keyword(null,"evt-timeout","evt-timeout",-1758878606),null,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),null], null);
});})(vec__10366,path,units))
;

lokate.map.t10367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__10366,path,units){
return (function (_10369){
var self__ = this;
var _10369__$1 = this;
return self__.meta10368;
});})(vec__10366,path,units))
;

lokate.map.t10367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__10366,path,units){
return (function (_10369,meta10368__$1){
var self__ = this;
var _10369__$1 = this;
return (new lokate.map.t10367(self__.units,self__.path,self__.vec__10366,self__.owner,self__.p__10355,self__.l_map,meta10368__$1));
});})(vec__10366,path,units))
;

lokate.map.t10367.cljs$lang$type = true;

lokate.map.t10367.cljs$lang$ctorStr = "lokate.map/t10367";

lokate.map.t10367.cljs$lang$ctorPrWriter = ((function (vec__10366,path,units){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.map/t10367");
});})(vec__10366,path,units))
;

lokate.map.__GT_t10367 = ((function (vec__10366,path,units){
return (function __GT_t10367(units__$1,path__$1,vec__10366__$1,owner__$1,p__10355__$1,l_map__$1,meta10368){
return (new lokate.map.t10367(units__$1,path__$1,vec__10366__$1,owner__$1,p__10355__$1,l_map__$1,meta10368));
});})(vec__10366,path,units))
;

}

return (new lokate.map.t10367(units,path,vec__10366,owner,p__10355,l_map,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),147,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),79,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/map.cljs"], null)));
});
