// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.unit');
goog.require('cljs.core');
goog.require('lokate.components');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
lokate.unit.format_timestamp = (function format_timestamp(timestamp){
return [cljs.core.str("Created: "),cljs.core.str((new Date(timestamp)).toJSON().slice((0),(10)))].join('');
});
lokate.unit.format_latlng = (function format_latlng(latlng){
return cljs.core.apply.call(null,lokate.util.format,"Location: %1.2f %2.2f",latlng);
});
lokate.unit.set_unit = (function set_unit(unit,k,v){
return om.core.transact_BANG_.call(null,unit,cljs.core.PersistentVector.EMPTY,(function (m){
return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.Keyword(null,"unit","unit",375175175));
});
lokate.unit.update_unit = (function update_unit(unit,k,fun){
return om.core.transact_BANG_.call(null,unit,cljs.core.PersistentVector.EMPTY,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),fun);
}),new cljs.core.Keyword(null,"unit","unit",375175175));
});
lokate.unit.check_in_btn = (function check_in_btn(unit){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-system-update-tv",(function (p1__11322_SHARP_){
return lokate.util.route_BANG_.call(null,p1__11322_SHARP_,new cljs.core.Keyword(null,"check-in","check-in",-1982167818),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit));
})], null));
});
lokate.unit.edit_resources_btn = (function edit_resources_btn(unit){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-settings",(function (p1__11323_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11323_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null));
})], null));
});
lokate.unit.unit_nav_menu = (function unit_nav_menu(p__11324,owner){
var vec__11329 = p__11324;
var page = cljs.core.nth.call(null,vec__11329,(0),null);
var unit = cljs.core.nth.call(null,vec__11329,(1),null);
if(typeof lokate.unit.t11330 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11330 = (function (unit,page,vec__11329,owner,p__11324,unit_nav_menu,meta11331){
this.unit = unit;
this.page = page;
this.vec__11329 = vec__11329;
this.owner = owner;
this.p__11324 = p__11324;
this.unit_nav_menu = unit_nav_menu;
this.meta11331 = meta11331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11330.prototype.om$core$IRender$ = true;

lokate.unit.t11330.prototype.om$core$IRender$render$arity$1 = ((function (vec__11329,page,unit){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.dropdown_select_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"unit :info",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"info","info",-317069002),self__.page)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"unit :rscs",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),self__.page)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"page-select",new cljs.core.Keyword(null,"class","class",-2030961996),"title-select-",new cljs.core.Keyword(null,"action","action",-811238024),((function (this__10258__auto____$1,vec__11329,page,unit){
return (function (x,evt_bus){
return cljs.core.async.put_BANG_.call(null,evt_bus,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(x)], null));
});})(this__10258__auto____$1,vec__11329,page,unit))
], null)], null));
});})(vec__11329,page,unit))
;

lokate.unit.t11330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11329,page,unit){
return (function (_11332){
var self__ = this;
var _11332__$1 = this;
return self__.meta11331;
});})(vec__11329,page,unit))
;

lokate.unit.t11330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11329,page,unit){
return (function (_11332,meta11331__$1){
var self__ = this;
var _11332__$1 = this;
return (new lokate.unit.t11330(self__.unit,self__.page,self__.vec__11329,self__.owner,self__.p__11324,self__.unit_nav_menu,meta11331__$1));
});})(vec__11329,page,unit))
;

lokate.unit.t11330.cljs$lang$type = true;

lokate.unit.t11330.cljs$lang$ctorStr = "lokate.unit/t11330";

lokate.unit.t11330.cljs$lang$ctorPrWriter = ((function (vec__11329,page,unit){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11330");
});})(vec__11329,page,unit))
;

lokate.unit.__GT_t11330 = ((function (vec__11329,page,unit){
return (function __GT_t11330(unit__$1,page__$1,vec__11329__$1,owner__$1,p__11324__$1,unit_nav_menu__$1,meta11331){
return (new lokate.unit.t11330(unit__$1,page__$1,vec__11329__$1,owner__$1,p__11324__$1,unit_nav_menu__$1,meta11331));
});})(vec__11329,page,unit))
;

}

return (new lokate.unit.t11330(unit,page,vec__11329,owner,p__11324,unit_nav_menu,null));
});
lokate.unit.unit_nav_view = (function unit_nav_view(p__11334,owner){
var vec__11339 = p__11334;
var drawer = cljs.core.nth.call(null,vec__11339,(0),null);
var page = cljs.core.nth.call(null,vec__11339,(1),null);
var unit = cljs.core.nth.call(null,vec__11339,(2),null);
var controls = cljs.core.nth.call(null,vec__11339,(3),null);
if(typeof lokate.unit.t11340 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11340 = (function (controls,unit,page,drawer,vec__11339,owner,p__11334,unit_nav_view,meta11341){
this.controls = controls;
this.unit = unit;
this.page = page;
this.drawer = drawer;
this.vec__11339 = vec__11339;
this.owner = owner;
this.p__11334 = p__11334;
this.unit_nav_view = unit_nav_view;
this.meta11341 = meta11341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11340.prototype.om$core$IRender$ = true;

lokate.unit.t11340.prototype.om$core$IRender$render$arity$1 = ((function (vec__11339,drawer,page,unit,controls){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawer,om.core.build.call(null,lokate.components.return_banner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.unit.unit_nav_menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.page,self__.unit], null)),((function (this__10258__auto____$1,vec__11339,drawer,page,unit,controls){
return (function (p1__11333_SHARP_){
return lokate.util.route_BANG_.call(null,p1__11333_SHARP_,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(self__.unit));
});})(this__10258__auto____$1,vec__11339,drawer,page,unit,controls))
], null)),self__.controls], null));
});})(vec__11339,drawer,page,unit,controls))
;

lokate.unit.t11340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11339,drawer,page,unit,controls){
return (function (_11342){
var self__ = this;
var _11342__$1 = this;
return self__.meta11341;
});})(vec__11339,drawer,page,unit,controls))
;

lokate.unit.t11340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11339,drawer,page,unit,controls){
return (function (_11342,meta11341__$1){
var self__ = this;
var _11342__$1 = this;
return (new lokate.unit.t11340(self__.controls,self__.unit,self__.page,self__.drawer,self__.vec__11339,self__.owner,self__.p__11334,self__.unit_nav_view,meta11341__$1));
});})(vec__11339,drawer,page,unit,controls))
;

lokate.unit.t11340.cljs$lang$type = true;

lokate.unit.t11340.cljs$lang$ctorStr = "lokate.unit/t11340";

lokate.unit.t11340.cljs$lang$ctorPrWriter = ((function (vec__11339,drawer,page,unit,controls){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11340");
});})(vec__11339,drawer,page,unit,controls))
;

lokate.unit.__GT_t11340 = ((function (vec__11339,drawer,page,unit,controls){
return (function __GT_t11340(controls__$1,unit__$1,page__$1,drawer__$1,vec__11339__$1,owner__$1,p__11334__$1,unit_nav_view__$1,meta11341){
return (new lokate.unit.t11340(controls__$1,unit__$1,page__$1,drawer__$1,vec__11339__$1,owner__$1,p__11334__$1,unit_nav_view__$1,meta11341));
});})(vec__11339,drawer,page,unit,controls))
;

}

return (new lokate.unit.t11340(controls,unit,page,drawer,vec__11339,owner,p__11334,unit_nav_view,null));
});
lokate.unit.unit_info_view = (function unit_info_view(unit,owner){
if(typeof lokate.unit.t11351 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11351 = (function (owner,unit,unit_info_view,meta11352){
this.owner = owner;
this.unit = unit;
this.unit_info_view = unit_info_view;
this.meta11352 = meta11352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11351.prototype.om$core$IRender$ = true;

lokate.unit.t11351.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "info", "id": "unit-info"},React.DOM.div({"className": "editable", "id": "name-editable", "onClick": ((function (this__10258__auto____$1){
return (function (){
return lokate.components.display_input.call(null,"Collection name","Untitled collection",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.unit),((function (this__10258__auto____$1){
return (function (p1__11343_SHARP_){
return lokate.unit.set_unit.call(null,self__.unit,new cljs.core.Keyword(null,"title","title",636505583),p1__11343_SHARP_);
});})(this__10258__auto____$1))
);
});})(this__10258__auto____$1))
},React.DOM.span({"className": "editable-title", "data-ph": "Unit Name"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.unit)))),React.DOM.div({"className": "info-content"},(function (){var attrs11354 = lokate.unit.format_timestamp.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(self__.unit));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11354))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["origin"], null)], null),attrs11354)):{"className": "origin"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11354)], null))));
})(),React.DOM.div({"className": "location"},React.DOM.span({"className": "img icon-pin status", "style": cljs.core.clj__GT_js.call(null,{"color": cljs.core.get.call(null,lokate.util.status_colors,"green")})}),(function (){var attrs11357 = lokate.unit.format_latlng.call(null,new cljs.core.Keyword(null,"latlng","latlng",-199468611).cljs$core$IFn$_invoke$arity$1(self__.unit));
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11357))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["location-lat-lng"], null)], null),attrs11357)):{"className": "location-lat-lng"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11357)], null))));
})())));
});

lokate.unit.t11351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11353){
var self__ = this;
var _11353__$1 = this;
return self__.meta11352;
});

lokate.unit.t11351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11353,meta11352__$1){
var self__ = this;
var _11353__$1 = this;
return (new lokate.unit.t11351(self__.owner,self__.unit,self__.unit_info_view,meta11352__$1));
});

lokate.unit.t11351.cljs$lang$type = true;

lokate.unit.t11351.cljs$lang$ctorStr = "lokate.unit/t11351";

lokate.unit.t11351.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11351");
});

lokate.unit.__GT_t11351 = (function __GT_t11351(owner__$1,unit__$1,unit_info_view__$1,meta11352){
return (new lokate.unit.t11351(owner__$1,unit__$1,unit_info_view__$1,meta11352));
});

}

return (new lokate.unit.t11351(owner,unit,unit_info_view,null));
});
lokate.unit.unit_resource = (function unit_resource(p__11358,owner){
var vec__11365 = p__11358;
var props = cljs.core.nth.call(null,vec__11365,(0),null);
var resource = cljs.core.nth.call(null,vec__11365,(1),null);
if(typeof lokate.unit.t11366 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11366 = (function (resource,props,vec__11365,owner,p__11358,unit_resource,meta11367){
this.resource = resource;
this.props = props;
this.vec__11365 = vec__11365;
this.owner = owner;
this.p__11358 = p__11358;
this.unit_resource = unit_resource;
this.meta11367 = meta11367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11366.prototype.om$core$IRender$ = true;

lokate.unit.t11366.prototype.om$core$IRender$render$arity$1 = ((function (vec__11365,props,resource){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "unit-resource"},(function (){var attrs11369 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.resource);
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11369))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unit-resource-title"], null)], null),attrs11369)):{"className": "unit-resource-title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11369))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11369)], null))));
})(),React.DOM.div({"className": "unit-resource-count-box"},(function (){var attrs11370 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.resource);
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11370))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unit-resource-count"], null)], null),attrs11370)):{"className": "unit-resource-count"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11370)], null))));
})()));
});})(vec__11365,props,resource))
;

lokate.unit.t11366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11365,props,resource){
return (function (_11368){
var self__ = this;
var _11368__$1 = this;
return self__.meta11367;
});})(vec__11365,props,resource))
;

lokate.unit.t11366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11365,props,resource){
return (function (_11368,meta11367__$1){
var self__ = this;
var _11368__$1 = this;
return (new lokate.unit.t11366(self__.resource,self__.props,self__.vec__11365,self__.owner,self__.p__11358,self__.unit_resource,meta11367__$1));
});})(vec__11365,props,resource))
;

lokate.unit.t11366.cljs$lang$type = true;

lokate.unit.t11366.cljs$lang$ctorStr = "lokate.unit/t11366";

lokate.unit.t11366.cljs$lang$ctorPrWriter = ((function (vec__11365,props,resource){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11366");
});})(vec__11365,props,resource))
;

lokate.unit.__GT_t11366 = ((function (vec__11365,props,resource){
return (function __GT_t11366(resource__$1,props__$1,vec__11365__$1,owner__$1,p__11358__$1,unit_resource__$1,meta11367){
return (new lokate.unit.t11366(resource__$1,props__$1,vec__11365__$1,owner__$1,p__11358__$1,unit_resource__$1,meta11367));
});})(vec__11365,props,resource))
;

}

return (new lokate.unit.t11366(resource,props,vec__11365,owner,p__11358,unit_resource,null));
});
lokate.unit.unit_resources_view = (function unit_resources_view(p__11372,owner){
var vec__11377 = p__11372;
var unit = cljs.core.nth.call(null,vec__11377,(0),null);
var rsc_types = cljs.core.nth.call(null,vec__11377,(1),null);
if(typeof lokate.unit.t11378 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11378 = (function (rsc_types,unit,vec__11377,owner,p__11372,unit_resources_view,meta11379){
this.rsc_types = rsc_types;
this.unit = unit;
this.vec__11377 = vec__11377;
this.owner = owner;
this.p__11372 = p__11372;
this.unit_resources_view = unit_resources_view;
this.meta11379 = meta11379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11378.prototype.om$core$IRender$ = true;

lokate.unit.t11378.prototype.om$core$IRender$render$arity$1 = ((function (vec__11377,unit,rsc_types){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var resources = cljs.core.map.call(null,((function (this__10258__auto____$1,vec__11377,unit,rsc_types){
return (function (p1__11371_SHARP_){
return cljs.core.merge.call(null,p1__11371_SHARP_,cljs.core.get.call(null,self__.rsc_types,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11371_SHARP_)));
});})(this__10258__auto____$1,vec__11377,unit,rsc_types))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(self__.unit)));
return om.core.build.call(null,lokate.components.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177),lokate.unit.unit_resource], null),resources], null));
});})(vec__11377,unit,rsc_types))
;

lokate.unit.t11378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11377,unit,rsc_types){
return (function (_11380){
var self__ = this;
var _11380__$1 = this;
return self__.meta11379;
});})(vec__11377,unit,rsc_types))
;

lokate.unit.t11378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11377,unit,rsc_types){
return (function (_11380,meta11379__$1){
var self__ = this;
var _11380__$1 = this;
return (new lokate.unit.t11378(self__.rsc_types,self__.unit,self__.vec__11377,self__.owner,self__.p__11372,self__.unit_resources_view,meta11379__$1));
});})(vec__11377,unit,rsc_types))
;

lokate.unit.t11378.cljs$lang$type = true;

lokate.unit.t11378.cljs$lang$ctorStr = "lokate.unit/t11378";

lokate.unit.t11378.cljs$lang$ctorPrWriter = ((function (vec__11377,unit,rsc_types){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11378");
});})(vec__11377,unit,rsc_types))
;

lokate.unit.__GT_t11378 = ((function (vec__11377,unit,rsc_types){
return (function __GT_t11378(rsc_types__$1,unit__$1,vec__11377__$1,owner__$1,p__11372__$1,unit_resources_view__$1,meta11379){
return (new lokate.unit.t11378(rsc_types__$1,unit__$1,vec__11377__$1,owner__$1,p__11372__$1,unit_resources_view__$1,meta11379));
});})(vec__11377,unit,rsc_types))
;

}

return (new lokate.unit.t11378(rsc_types,unit,vec__11377,owner,p__11372,unit_resources_view,null));
});
lokate.unit.update_unit_rscs = (function update_unit_rscs(unit,x,evt_bus){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(x))){
return lokate.unit.update_unit.call(null,unit,new cljs.core.Keyword(null,"resources","resources",1632806811),(function (p1__11381_SHARP_){
return cljs.core.dissoc.call(null,p1__11381_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
}));
} else {
return lokate.unit.update_unit.call(null,unit,new cljs.core.Keyword(null,"resources","resources",1632806811),(function (p1__11382_SHARP_){
return cljs.core.assoc.call(null,p1__11382_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),cljs.core.merge.call(null,cljs.core.select_keys.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null)));
}));
}
});
lokate.unit.unit_edit_view = (function unit_edit_view(p__11384,owner){
var vec__11389 = p__11384;
var unit = cljs.core.nth.call(null,vec__11389,(0),null);
var rsc_types = cljs.core.nth.call(null,vec__11389,(1),null);
if(typeof lokate.unit.t11390 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.unit.t11390 = (function (rsc_types,unit,vec__11389,owner,p__11384,unit_edit_view,meta11391){
this.rsc_types = rsc_types;
this.unit = unit;
this.vec__11389 = vec__11389;
this.owner = owner;
this.p__11384 = p__11384;
this.unit_edit_view = unit_edit_view;
this.meta11391 = meta11391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.unit.t11390.prototype.om$core$IRender$ = true;

lokate.unit.t11390.prototype.om$core$IRender$render$arity$1 = ((function (vec__11389,unit,rsc_types){
return (function (_){
var self__ = this;
var ___$1 = this;
var resources = cljs.core.map.call(null,((function (___$1,vec__11389,unit,rsc_types){
return (function (p1__11383_SHARP_){
return cljs.core.assoc.call(null,p1__11383_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(self__.unit),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11383_SHARP_)));
});})(___$1,vec__11389,unit,rsc_types))
,cljs.core.vals.call(null,self__.rsc_types));
return lokate.components.select_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-select-",new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.call(null,lokate.unit.update_unit_rscs,self__.unit)], null),resources);
});})(vec__11389,unit,rsc_types))
;

lokate.unit.t11390.prototype.om$core$IWillUnmount$ = true;

lokate.unit.t11390.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__11389,unit,rsc_types){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),false], null));
});})(vec__11389,unit,rsc_types))
;

lokate.unit.t11390.prototype.om$core$IWillMount$ = true;

lokate.unit.t11390.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__11389,unit,rsc_types){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),true], null));
});})(vec__11389,unit,rsc_types))
;

lokate.unit.t11390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11389,unit,rsc_types){
return (function (_11392){
var self__ = this;
var _11392__$1 = this;
return self__.meta11391;
});})(vec__11389,unit,rsc_types))
;

lokate.unit.t11390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11389,unit,rsc_types){
return (function (_11392,meta11391__$1){
var self__ = this;
var _11392__$1 = this;
return (new lokate.unit.t11390(self__.rsc_types,self__.unit,self__.vec__11389,self__.owner,self__.p__11384,self__.unit_edit_view,meta11391__$1));
});})(vec__11389,unit,rsc_types))
;

lokate.unit.t11390.cljs$lang$type = true;

lokate.unit.t11390.cljs$lang$ctorStr = "lokate.unit/t11390";

lokate.unit.t11390.cljs$lang$ctorPrWriter = ((function (vec__11389,unit,rsc_types){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.unit/t11390");
});})(vec__11389,unit,rsc_types))
;

lokate.unit.__GT_t11390 = ((function (vec__11389,unit,rsc_types){
return (function __GT_t11390(rsc_types__$1,unit__$1,vec__11389__$1,owner__$1,p__11384__$1,unit_edit_view__$1,meta11391){
return (new lokate.unit.t11390(rsc_types__$1,unit__$1,vec__11389__$1,owner__$1,p__11384__$1,unit_edit_view__$1,meta11391));
});})(vec__11389,unit,rsc_types))
;

}

return (new lokate.unit.t11390(rsc_types,unit,vec__11389,owner,p__11384,unit_edit_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),24,new cljs.core.Keyword(null,"end-line","end-line",1837326455),130,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),112,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/unit.cljs"], null)));
});
lokate.unit.unit_views = (function unit_views(p__11394,data,p__11395){
var map__11399 = p__11394;
var map__11399__$1 = ((cljs.core.seq_QMARK_.call(null,map__11399))?cljs.core.apply.call(null,cljs.core.hash_map,map__11399):map__11399);
var location = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var drawer = cljs.core.get.call(null,map__11399__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
var map__11400 = p__11395;
var map__11400__$1 = ((cljs.core.seq_QMARK_.call(null,map__11400))?cljs.core.apply.call(null,cljs.core.hash_map,map__11400):map__11400);
var page = cljs.core.get.call(null,map__11400__$1,new cljs.core.Keyword(null,"page","page",849072397));
var unit = cljs.core.apply.call(null,lokate.util.get_unit,data,cljs.core.second.call(null,location));
var rsc_types = lokate.util.get_resource_types.call(null,data);
var G__11401 = (((page instanceof cljs.core.Keyword))?page.fqn:null);
switch (G__11401) {
case "edit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.components.simple_nav_panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.components.done_BANG__btn.call(null,((function (G__11401,unit,rsc_types,map__11399,map__11399__$1,location,drawer,map__11400,map__11400__$1,page){
return (function (p1__11393_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11393_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});})(G__11401,unit,rsc_types,map__11399,map__11399__$1,location,drawer,map__11400,map__11400__$1,page))
)], null)),om.core.build.call(null,lokate.unit.unit_edit_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,rsc_types], null))], null);

break;
case "resources":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.unit.unit_nav_view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer,page,unit,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.unit.check_in_btn.call(null,unit),lokate.unit.edit_resources_btn.call(null,unit)], null)], null)),om.core.build.call(null,lokate.unit.unit_resources_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit,rsc_types], null))], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.unit.unit_nav_view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer,page,unit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.unit.check_in_btn.call(null,unit)], null)], null)),om.core.build.call(null,lokate.unit.unit_info_view,unit)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(page)].join('')));

}
});
