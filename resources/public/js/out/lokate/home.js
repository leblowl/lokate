// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.home');
goog.require('cljs.core');
goog.require('lokate.components');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
lokate.home.home_drawer_view = (function home_drawer_view(menu_items,owner){
if(typeof lokate.home.t11685 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.home.t11685 = (function (owner,menu_items,home_drawer_view,meta11686){
this.owner = owner;
this.menu_items = menu_items;
this.home_drawer_view = home_drawer_view;
this.meta11686 = meta11686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.home.t11685.prototype.om$core$IRender$ = true;

lokate.home.t11685.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var attrs11688 = lokate.components.item_list.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (this__10258__auto____$1){
return (function (x,evt_bus){
return lokate.util.route_BANG_.call(null,evt_bus,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(x));
});})(this__10258__auto____$1))
], null),self__.menu_items);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11688))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["info"], null)], null),attrs11688)):{"className": "info"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11688))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11688)], null))));
});

lokate.home.t11685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11687){
var self__ = this;
var _11687__$1 = this;
return self__.meta11686;
});

lokate.home.t11685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11687,meta11686__$1){
var self__ = this;
var _11687__$1 = this;
return (new lokate.home.t11685(self__.owner,self__.menu_items,self__.home_drawer_view,meta11686__$1));
});

lokate.home.t11685.cljs$lang$type = true;

lokate.home.t11685.cljs$lang$ctorStr = "lokate.home/t11685";

lokate.home.t11685.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.home/t11685");
});

lokate.home.__GT_t11685 = (function __GT_t11685(owner__$1,menu_items__$1,home_drawer_view__$1,meta11686){
return (new lokate.home.t11685(owner__$1,menu_items__$1,home_drawer_view__$1,meta11686));
});

}

return (new lokate.home.t11685(owner,menu_items,home_drawer_view,null));
});
lokate.home.home_views = (function home_views(p__11689,data,state){
var map__11691 = p__11689;
var map__11691__$1 = ((cljs.core.seq_QMARK_.call(null,map__11691))?cljs.core.apply.call(null,cljs.core.hash_map,map__11691):map__11691);
var drawer = cljs.core.get.call(null,map__11691__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,lokate.components.drawer_nav_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer,lokate.components.title_banner.call(null,"home",lokate.components.home_icon)], null)),om.core.build.call(null,lokate.home.home_drawer_view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Collections",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Resources",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"resources","resources",1632806811)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Settings",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null))], null);
});
