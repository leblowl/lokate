// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.resources');
goog.require('cljs.core');
goog.require('lokate.components');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
lokate.resources.update_rsc = (function update_rsc(rsc,k,v){
return om.core.transact_BANG_.call(null,rsc,cljs.core.PersistentVector.EMPTY,(function (m){
return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.Keyword(null,"resource","resource",251898836));
});
lokate.resources.rsc_types_nav_view = (function rsc_types_nav_view(drawer,owner){
if(typeof lokate.resources.t11487 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.resources.t11487 = (function (owner,drawer,rsc_types_nav_view,meta11488){
this.owner = owner;
this.drawer = drawer;
this.rsc_types_nav_view = rsc_types_nav_view;
this.meta11488 = meta11488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.resources.t11487.prototype.om$core$IRender$ = true;

lokate.resources.t11487.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawer,lokate.components.title_return_banner.call(null,"resources",((function (this__10258__auto____$1){
return (function (p1__11481_SHARP_){
return lokate.util.route_BANG_.call(null,p1__11481_SHARP_,new cljs.core.Keyword(null,"home","home",-74557309));
});})(this__10258__auto____$1))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-flow-line rsc-btn",((function (this__10258__auto____$1){
return (function (p1__11482_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11482_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-resource","add-resource",2132885707)], null));
});})(this__10258__auto____$1))
], null)),om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-flow-tree rsc-btn",((function (this__10258__auto____$1){
return (function (p1__11483_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11483_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-resource-cluster","add-resource-cluster",2021383776)], null));
});})(this__10258__auto____$1))
], null))], null)], null));
});

lokate.resources.t11487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11489){
var self__ = this;
var _11489__$1 = this;
return self__.meta11488;
});

lokate.resources.t11487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11489,meta11488__$1){
var self__ = this;
var _11489__$1 = this;
return (new lokate.resources.t11487(self__.owner,self__.drawer,self__.rsc_types_nav_view,meta11488__$1));
});

lokate.resources.t11487.cljs$lang$type = true;

lokate.resources.t11487.cljs$lang$ctorStr = "lokate.resources/t11487";

lokate.resources.t11487.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.resources/t11487");
});

lokate.resources.__GT_t11487 = (function __GT_t11487(owner__$1,drawer__$1,rsc_types_nav_view__$1,meta11488){
return (new lokate.resources.t11487(owner__$1,drawer__$1,rsc_types_nav_view__$1,meta11488));
});

}

return (new lokate.resources.t11487(owner,drawer,rsc_types_nav_view,null));
});
lokate.resources.rsc_types_drawer_view = (function rsc_types_drawer_view(p__11491,owner){
var vec__11497 = p__11491;
var view_data = cljs.core.nth.call(null,vec__11497,(0),null);
var resources = cljs.core.nth.call(null,vec__11497,(1),null);
if(typeof lokate.resources.t11498 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.resources.t11498 = (function (resources,view_data,vec__11497,owner,p__11491,rsc_types_drawer_view,meta11499){
this.resources = resources;
this.view_data = view_data;
this.vec__11497 = vec__11497;
this.owner = owner;
this.p__11491 = p__11491;
this.rsc_types_drawer_view = rsc_types_drawer_view;
this.meta11499 = meta11499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.resources.t11498.prototype.om$core$IRender$ = true;

lokate.resources.t11498.prototype.om$core$IRender$render$arity$1 = ((function (vec__11497,view_data,resources){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var attrs11501 = lokate.components.r_item_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (this__10258__auto____$1,vec__11497,view_data,resources){
return (function (p1__11490_SHARP_){
return om.core.update_BANG_.call(null,self__.view_data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11490_SHARP_));
});})(this__10258__auto____$1,vec__11497,view_data,resources))
,new cljs.core.Keyword(null,"remove-action","remove-action",-1169550252),((function (this__10258__auto____$1,vec__11497,view_data,resources){
return (function (x,evt_bus){
return cljs.core.async.put_BANG_.call(null,evt_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-resource","delete-resource",804001097),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x)], null));
});})(this__10258__auto____$1,vec__11497,view_data,resources))
], null),cljs.core.vals.call(null,self__.resources));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11501))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["info"], null)], null),attrs11501)):{"className": "info"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11501)], null))));
});})(vec__11497,view_data,resources))
;

lokate.resources.t11498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11497,view_data,resources){
return (function (_11500){
var self__ = this;
var _11500__$1 = this;
return self__.meta11499;
});})(vec__11497,view_data,resources))
;

lokate.resources.t11498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11497,view_data,resources){
return (function (_11500,meta11499__$1){
var self__ = this;
var _11500__$1 = this;
return (new lokate.resources.t11498(self__.resources,self__.view_data,self__.vec__11497,self__.owner,self__.p__11491,self__.rsc_types_drawer_view,meta11499__$1));
});})(vec__11497,view_data,resources))
;

lokate.resources.t11498.cljs$lang$type = true;

lokate.resources.t11498.cljs$lang$ctorStr = "lokate.resources/t11498";

lokate.resources.t11498.cljs$lang$ctorPrWriter = ((function (vec__11497,view_data,resources){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.resources/t11498");
});})(vec__11497,view_data,resources))
;

lokate.resources.__GT_t11498 = ((function (vec__11497,view_data,resources){
return (function __GT_t11498(resources__$1,view_data__$1,vec__11497__$1,owner__$1,p__11491__$1,rsc_types_drawer_view__$1,meta11499){
return (new lokate.resources.t11498(resources__$1,view_data__$1,vec__11497__$1,owner__$1,p__11491__$1,rsc_types_drawer_view__$1,meta11499));
});})(vec__11497,view_data,resources))
;

}

return (new lokate.resources.t11498(resources,view_data,vec__11497,owner,p__11491,rsc_types_drawer_view,null));
});
lokate.resources.rsc_type_nav_view = (function rsc_type_nav_view(p__11502,owner){
var vec__11507 = p__11502;
var drawer = cljs.core.nth.call(null,vec__11507,(0),null);
var state = cljs.core.nth.call(null,vec__11507,(1),null);
if(typeof lokate.resources.t11508 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.resources.t11508 = (function (state,drawer,vec__11507,owner,p__11502,rsc_type_nav_view,meta11509){
this.state = state;
this.drawer = drawer;
this.vec__11507 = vec__11507;
this.owner = owner;
this.p__11502 = p__11502;
this.rsc_type_nav_view = rsc_type_nav_view;
this.meta11509 = meta11509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.resources.t11508.prototype.om$core$IRender$ = true;

lokate.resources.t11508.prototype.om$core$IRender$render$arity$1 = ((function (vec__11507,drawer,state){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawer,lokate.components.title_return_banner.call(null,"resources",((function (this__10258__auto____$1,vec__11507,drawer,state){
return (function (){
return om.core.transact_BANG_.call(null,self__.state,((function (this__10258__auto____$1,vec__11507,drawer,state){
return (function (m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"selected","selected",574897764));
});})(this__10258__auto____$1,vec__11507,drawer,state))
);
});})(this__10258__auto____$1,vec__11507,drawer,state))
)], null));
});})(vec__11507,drawer,state))
;

lokate.resources.t11508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11507,drawer,state){
return (function (_11510){
var self__ = this;
var _11510__$1 = this;
return self__.meta11509;
});})(vec__11507,drawer,state))
;

lokate.resources.t11508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11507,drawer,state){
return (function (_11510,meta11509__$1){
var self__ = this;
var _11510__$1 = this;
return (new lokate.resources.t11508(self__.state,self__.drawer,self__.vec__11507,self__.owner,self__.p__11502,self__.rsc_type_nav_view,meta11509__$1));
});})(vec__11507,drawer,state))
;

lokate.resources.t11508.cljs$lang$type = true;

lokate.resources.t11508.cljs$lang$ctorStr = "lokate.resources/t11508";

lokate.resources.t11508.cljs$lang$ctorPrWriter = ((function (vec__11507,drawer,state){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.resources/t11508");
});})(vec__11507,drawer,state))
;

lokate.resources.__GT_t11508 = ((function (vec__11507,drawer,state){
return (function __GT_t11508(state__$1,drawer__$1,vec__11507__$1,owner__$1,p__11502__$1,rsc_type_nav_view__$1,meta11509){
return (new lokate.resources.t11508(state__$1,drawer__$1,vec__11507__$1,owner__$1,p__11502__$1,rsc_type_nav_view__$1,meta11509));
});})(vec__11507,drawer,state))
;

}

return (new lokate.resources.t11508(state,drawer,vec__11507,owner,p__11502,rsc_type_nav_view,null));
});
lokate.resources.rsc_type_drawer_view = (function rsc_type_drawer_view(resource,owner){
if(typeof lokate.resources.t11516 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.resources.t11516 = (function (owner,resource,rsc_type_drawer_view,meta11517){
this.owner = owner;
this.resource = resource;
this.rsc_type_drawer_view = rsc_type_drawer_view;
this.meta11517 = meta11517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.resources.t11516.prototype.om$core$IRender$ = true;

lokate.resources.t11516.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "info"},React.DOM.div({"className": "editable", "id": "name-editable", "onClick": ((function (this__10258__auto____$1){
return (function (){
return lokate.components.display_input.call(null,"Resource name","Untitled resource",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.resource),cljs.core.partial.call(null,lokate.resources.update_rsc,self__.resource,new cljs.core.Keyword(null,"title","title",636505583)));
});})(this__10258__auto____$1))
},React.DOM.span({"className": "editable-title", "data-ph": "Untitled Resource"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.resource)))),React.DOM.div({"className": "info-content"}));
});

lokate.resources.t11516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11518){
var self__ = this;
var _11518__$1 = this;
return self__.meta11517;
});

lokate.resources.t11516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11518,meta11517__$1){
var self__ = this;
var _11518__$1 = this;
return (new lokate.resources.t11516(self__.owner,self__.resource,self__.rsc_type_drawer_view,meta11517__$1));
});

lokate.resources.t11516.cljs$lang$type = true;

lokate.resources.t11516.cljs$lang$ctorStr = "lokate.resources/t11516";

lokate.resources.t11516.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.resources/t11516");
});

lokate.resources.__GT_t11516 = (function __GT_t11516(owner__$1,resource__$1,rsc_type_drawer_view__$1,meta11517){
return (new lokate.resources.t11516(owner__$1,resource__$1,rsc_type_drawer_view__$1,meta11517));
});

}

return (new lokate.resources.t11516(owner,resource,rsc_type_drawer_view,null));
});
lokate.resources.resource_types_views = (function resource_types_views(p__11521,data,p__11522){
var map__11525 = p__11521;
var map__11525__$1 = ((cljs.core.seq_QMARK_.call(null,map__11525))?cljs.core.apply.call(null,cljs.core.hash_map,map__11525):map__11525);
var drawer = cljs.core.get.call(null,map__11525__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
var map__11526 = p__11522;
var map__11526__$1 = ((cljs.core.seq_QMARK_.call(null,map__11526))?cljs.core.apply.call(null,cljs.core.hash_map,map__11526):map__11526);
var state = map__11526__$1;
var selected = cljs.core.get.call(null,map__11526__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core.truth_(selected)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.resources.rsc_type_nav_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer,state], null)),om.core.build.call(null,lokate.resources.rsc_type_drawer_view,lokate.util.get_resource_type.call(null,data,selected))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.resources.rsc_types_nav_view,drawer),om.core.build.call(null,lokate.resources.rsc_types_drawer_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,lokate.util.get_resource_types.call(null,data)], null))], null);
}
});
