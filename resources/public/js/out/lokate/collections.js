// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.collections');
goog.require('cljs.core');
goog.require('lokate.components');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
lokate.collections.collection_tip = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.collection-tip-msg","p.collection-tip-msg",-1175948929),"Right click or long press on the map to add a unit to your collection!"], null);
lokate.collections.collection_banner = (function collection_banner(){
return lokate.components.title_return_banner.call(null,"collection",(function (p1__11405_SHARP_){
return lokate.util.route_BANG_.call(null,p1__11405_SHARP_,new cljs.core.Keyword(null,"collections","collections",-2114643505));
}));
});
lokate.collections.collection_nav_view = (function collection_nav_view(p__11406,owner){
var vec__11411 = p__11406;
var drawer = cljs.core.nth.call(null,vec__11411,(0),null);
var collection = cljs.core.nth.call(null,vec__11411,(1),null);
if(typeof lokate.collections.t11412 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.collections.t11412 = (function (collection,drawer,vec__11411,owner,p__11406,collection_nav_view,meta11413){
this.collection = collection;
this.drawer = drawer;
this.vec__11411 = vec__11411;
this.owner = owner;
this.p__11406 = p__11406;
this.collection_nav_view = collection_nav_view;
this.meta11413 = meta11413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.collections.t11412.prototype.om$core$IRender$ = true;

lokate.collections.t11412.prototype.om$core$IRender$render$arity$1 = ((function (vec__11411,drawer,collection){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawer,lokate.collections.collection_banner.call(null)], null));
});})(vec__11411,drawer,collection))
;

lokate.collections.t11412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11411,drawer,collection){
return (function (_11414){
var self__ = this;
var _11414__$1 = this;
return self__.meta11413;
});})(vec__11411,drawer,collection))
;

lokate.collections.t11412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11411,drawer,collection){
return (function (_11414,meta11413__$1){
var self__ = this;
var _11414__$1 = this;
return (new lokate.collections.t11412(self__.collection,self__.drawer,self__.vec__11411,self__.owner,self__.p__11406,self__.collection_nav_view,meta11413__$1));
});})(vec__11411,drawer,collection))
;

lokate.collections.t11412.cljs$lang$type = true;

lokate.collections.t11412.cljs$lang$ctorStr = "lokate.collections/t11412";

lokate.collections.t11412.cljs$lang$ctorPrWriter = ((function (vec__11411,drawer,collection){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.collections/t11412");
});})(vec__11411,drawer,collection))
;

lokate.collections.__GT_t11412 = ((function (vec__11411,drawer,collection){
return (function __GT_t11412(collection__$1,drawer__$1,vec__11411__$1,owner__$1,p__11406__$1,collection_nav_view__$1,meta11413){
return (new lokate.collections.t11412(collection__$1,drawer__$1,vec__11411__$1,owner__$1,p__11406__$1,collection_nav_view__$1,meta11413));
});})(vec__11411,drawer,collection))
;

}

return (new lokate.collections.t11412(collection,drawer,vec__11411,owner,p__11406,collection_nav_view,null));
});
lokate.collections.edit_collection_name = (function edit_collection_name(collection){
return lokate.components.display_input.call(null,"Collection name","Untitled collection",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection),(function (p1__11415_SHARP_){
return om.core.update_BANG_.call(null,collection,new cljs.core.Keyword(null,"title","title",636505583),p1__11415_SHARP_,new cljs.core.Keyword(null,"collection","collection",-683361892));
}));
});
lokate.collections.collection_drawer_view = (function collection_drawer_view(collection,owner){
if(typeof lokate.collections.t11421 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.collections.t11421 = (function (owner,collection,collection_drawer_view,meta11422){
this.owner = owner;
this.collection = collection;
this.collection_drawer_view = collection_drawer_view;
this.meta11422 = meta11422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.collections.t11421.prototype.om$core$IRender$ = true;

lokate.collections.t11421.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "info"},React.DOM.div({"className": "editable", "id": "name-editable", "onClick": ((function (this__10258__auto____$1){
return (function (){
return lokate.collections.edit_collection_name.call(null,self__.collection);
});})(this__10258__auto____$1))
},React.DOM.span({"className": "editable-title", "data-ph": "Collection Name"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.collection)))),(function (){var attrs11424 = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(self__.collection)))?lokate.components.tip.call(null,lokate.collections.collection_tip):lokate.components.r_item_list.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),((function (this__10258__auto____$1){
return (function (x,evt_bus){
return lokate.util.route_BANG_.call(null,evt_bus,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
});})(this__10258__auto____$1))
,new cljs.core.Keyword(null,"remove-action","remove-action",-1169550252),((function (this__10258__auto____$1){
return (function (x,evt_bus){
return om.core.transact_BANG_.call(null,self__.collection,new cljs.core.Keyword(null,"units","units",-533089095),((function (this__10258__auto____$1){
return (function (p1__11416_SHARP_){
return cljs.core.dissoc.call(null,p1__11416_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
});})(this__10258__auto____$1))
,new cljs.core.Keyword(null,"unit","unit",375175175));
});})(this__10258__auto____$1))
,new cljs.core.Keyword(null,"name-default","name-default",-679814522),"Untitled_Unit"], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(self__.collection))));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11424))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["info-content"], null)], null),attrs11424)):{"className": "info-content"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11424))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11424)], null))));
})());
});

lokate.collections.t11421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11423){
var self__ = this;
var _11423__$1 = this;
return self__.meta11422;
});

lokate.collections.t11421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11423,meta11422__$1){
var self__ = this;
var _11423__$1 = this;
return (new lokate.collections.t11421(self__.owner,self__.collection,self__.collection_drawer_view,meta11422__$1));
});

lokate.collections.t11421.cljs$lang$type = true;

lokate.collections.t11421.cljs$lang$ctorStr = "lokate.collections/t11421";

lokate.collections.t11421.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.collections/t11421");
});

lokate.collections.__GT_t11421 = (function __GT_t11421(owner__$1,collection__$1,collection_drawer_view__$1,meta11422){
return (new lokate.collections.t11421(owner__$1,collection__$1,collection_drawer_view__$1,meta11422));
});

}

return (new lokate.collections.t11421(owner,collection,collection_drawer_view,null));
});
lokate.collections.collections_banner = (function collections_banner(){
return lokate.components.title_return_banner.call(null,"collections",(function (p1__11425_SHARP_){
return lokate.util.route_BANG_.call(null,p1__11425_SHARP_,new cljs.core.Keyword(null,"home","home",-74557309));
}));
});
lokate.collections.add_collection_btn = (function add_collection_btn(){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-add",(function (p1__11426_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11426_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-collection","add-collection",-577117339)], null));
})], null));
});
lokate.collections.collections_nav_view = (function collections_nav_view(drawer,owner){
if(typeof lokate.collections.t11430 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.collections.t11430 = (function (owner,drawer,collections_nav_view,meta11431){
this.owner = owner;
this.drawer = drawer;
this.collections_nav_view = collections_nav_view;
this.meta11431 = meta11431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.collections.t11430.prototype.om$core$IRender$ = true;

lokate.collections.t11430.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawer,lokate.collections.collections_banner.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.collections.add_collection_btn.call(null)], null)], null));
});

lokate.collections.t11430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11432){
var self__ = this;
var _11432__$1 = this;
return self__.meta11431;
});

lokate.collections.t11430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11432,meta11431__$1){
var self__ = this;
var _11432__$1 = this;
return (new lokate.collections.t11430(self__.owner,self__.drawer,self__.collections_nav_view,meta11431__$1));
});

lokate.collections.t11430.cljs$lang$type = true;

lokate.collections.t11430.cljs$lang$ctorStr = "lokate.collections/t11430";

lokate.collections.t11430.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.collections/t11430");
});

lokate.collections.__GT_t11430 = (function __GT_t11430(owner__$1,drawer__$1,collections_nav_view__$1,meta11431){
return (new lokate.collections.t11430(owner__$1,drawer__$1,collections_nav_view__$1,meta11431));
});

}

return (new lokate.collections.t11430(owner,drawer,collections_nav_view,null));
});
lokate.collections.collections_drawer_view = (function collections_drawer_view(collections,owner){
if(typeof lokate.collections.t11437 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.collections.t11437 = (function (owner,collections,collections_drawer_view,meta11438){
this.owner = owner;
this.collections = collections;
this.collections_drawer_view = collections_drawer_view;
this.meta11438 = meta11438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.collections.t11437.prototype.om$core$IRender$ = true;

lokate.collections.t11437.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var attrs11440 = lokate.components.r_item_list.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),((function (this__10258__auto____$1){
return (function (x,evt_bus){
return lokate.util.route_BANG_.call(null,evt_bus,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
});})(this__10258__auto____$1))
,new cljs.core.Keyword(null,"remove-action","remove-action",-1169550252),((function (this__10258__auto____$1){
return (function (x,evt_bus){
return cljs.core.async.put_BANG_.call(null,evt_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-collection","delete-collection",-2081461940),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x)], null));
});})(this__10258__auto____$1))
,new cljs.core.Keyword(null,"name-default","name-default",-679814522),"Untitled_Collection"], null),cljs.core.vals.call(null,self__.collections));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11440))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["info"], null)], null),attrs11440)):{"className": "info"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11440)], null))));
});

lokate.collections.t11437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11439){
var self__ = this;
var _11439__$1 = this;
return self__.meta11438;
});

lokate.collections.t11437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11439,meta11438__$1){
var self__ = this;
var _11439__$1 = this;
return (new lokate.collections.t11437(self__.owner,self__.collections,self__.collections_drawer_view,meta11438__$1));
});

lokate.collections.t11437.cljs$lang$type = true;

lokate.collections.t11437.cljs$lang$ctorStr = "lokate.collections/t11437";

lokate.collections.t11437.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.collections/t11437");
});

lokate.collections.__GT_t11437 = (function __GT_t11437(owner__$1,collections__$1,collections_drawer_view__$1,meta11438){
return (new lokate.collections.t11437(owner__$1,collections__$1,collections_drawer_view__$1,meta11438));
});

}

return (new lokate.collections.t11437(owner,collections,collections_drawer_view,null));
});
lokate.collections.collections_views = (function collections_views(p__11441,data,state){
var map__11443 = p__11441;
var map__11443__$1 = ((cljs.core.seq_QMARK_.call(null,map__11443))?cljs.core.apply.call(null,cljs.core.hash_map,map__11443):map__11443);
var drawer = cljs.core.get.call(null,map__11443__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
var collections = lokate.util.get_collections.call(null,data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.collections.collections_nav_view,drawer),om.core.build.call(null,lokate.collections.collections_drawer_view,collections)], null);
});
lokate.collections.collection_views = (function collection_views(p__11444,data,state){
var map__11446 = p__11444;
var map__11446__$1 = ((cljs.core.seq_QMARK_.call(null,map__11446))?cljs.core.apply.call(null,cljs.core.hash_map,map__11446):map__11446);
var drawer = cljs.core.get.call(null,map__11446__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
var location = cljs.core.get.call(null,map__11446__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var collection = cljs.core.apply.call(null,lokate.util.get_collection,data,cljs.core.second.call(null,location));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.collections.collection_nav_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer,collection], null)),om.core.build.call(null,lokate.collections.collection_drawer_view,collection)], null);
});
