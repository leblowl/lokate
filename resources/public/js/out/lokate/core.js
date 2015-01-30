// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.core');
goog.require('cljs.core');
goog.require('lokate.map');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('om.core');
lokate.core.drawer_panel = (function drawer_panel(p__11449,owner){
var vec__11455 = p__11449;
var orientation = cljs.core.nth.call(null,vec__11455,(0),null);
var drawer = cljs.core.nth.call(null,vec__11455,(1),null);
var drawer_view = cljs.core.nth.call(null,vec__11455,(2),null);
if(typeof lokate.core.t11456 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.core.t11456 = (function (drawer_view,drawer,orientation,vec__11455,owner,p__11449,drawer_panel,meta11457){
this.drawer_view = drawer_view;
this.drawer = drawer;
this.orientation = orientation;
this.vec__11455 = vec__11455;
this.owner = owner;
this.p__11449 = p__11449;
this.drawer_panel = drawer_panel;
this.meta11457 = meta11457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.core.t11456.prototype.om$core$IRender$ = true;

lokate.core.t11456.prototype.om$core$IRender$render$arity$1 = ((function (vec__11455,orientation,drawer,drawer_view){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"id": "drawer-wrapper"},React.DOM.div({"className": [cljs.core.str(self__.orientation),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.drawer))?" show":" hide")),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824).cljs$core$IFn$_invoke$arity$1(self__.drawer))?" maximized":null))].join(''), "id": "drawer"},(function (){var attrs11459 = self__.drawer_view;
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11459))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drawer-content"], null),attrs11459)):{"id": "drawer-content"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11459))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11459)], null))));
})()));
});})(vec__11455,orientation,drawer,drawer_view))
;

lokate.core.t11456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11455,orientation,drawer,drawer_view){
return (function (_11458){
var self__ = this;
var _11458__$1 = this;
return self__.meta11457;
});})(vec__11455,orientation,drawer,drawer_view))
;

lokate.core.t11456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11455,orientation,drawer,drawer_view){
return (function (_11458,meta11457__$1){
var self__ = this;
var _11458__$1 = this;
return (new lokate.core.t11456(self__.drawer_view,self__.drawer,self__.orientation,self__.vec__11455,self__.owner,self__.p__11449,self__.drawer_panel,meta11457__$1));
});})(vec__11455,orientation,drawer,drawer_view))
;

lokate.core.t11456.cljs$lang$type = true;

lokate.core.t11456.cljs$lang$ctorStr = "lokate.core/t11456";

lokate.core.t11456.cljs$lang$ctorPrWriter = ((function (vec__11455,orientation,drawer,drawer_view){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.core/t11456");
});})(vec__11455,orientation,drawer,drawer_view))
;

lokate.core.__GT_t11456 = ((function (vec__11455,orientation,drawer,drawer_view){
return (function __GT_t11456(drawer_view__$1,drawer__$1,orientation__$1,vec__11455__$1,owner__$1,p__11449__$1,drawer_panel__$1,meta11457){
return (new lokate.core.t11456(drawer_view__$1,drawer__$1,orientation__$1,vec__11455__$1,owner__$1,p__11449__$1,drawer_panel__$1,meta11457));
});})(vec__11455,orientation,drawer,drawer_view))
;

}

return (new lokate.core.t11456(drawer_view,drawer,orientation,vec__11455,owner,p__11449,drawer_panel,null));
});
lokate.core.window = (function window__$1(p__11460,owner){
var vec__11470 = p__11460;
var map__11471 = cljs.core.nth.call(null,vec__11470,(0),null);
var map__11471__$1 = ((cljs.core.seq_QMARK_.call(null,map__11471))?cljs.core.apply.call(null,cljs.core.hash_map,map__11471):map__11471);
var window__$1 = map__11471__$1;
var views_state = cljs.core.get.call(null,map__11471__$1,new cljs.core.Keyword(null,"views-state","views-state",-602645309));
var views_fn = cljs.core.get.call(null,map__11471__$1,new cljs.core.Keyword(null,"views-fn","views-fn",1430844512));
var drawer = cljs.core.get.call(null,map__11471__$1,new cljs.core.Keyword(null,"drawer","drawer",-1346127858));
var location = cljs.core.get.call(null,map__11471__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var orientation = cljs.core.get.call(null,map__11471__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var data = cljs.core.nth.call(null,vec__11470,(1),null);
if(typeof lokate.core.t11472 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.core.t11472 = (function (location,owner,map__11471,p__11460,data,views_fn,views_state,orientation,window,drawer,vec__11470,meta11473){
this.location = location;
this.owner = owner;
this.map__11471 = map__11471;
this.p__11460 = p__11460;
this.data = data;
this.views_fn = views_fn;
this.views_state = views_state;
this.orientation = orientation;
this.window = window;
this.drawer = drawer;
this.vec__11470 = vec__11470;
this.meta11473 = meta11473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.core.t11472.prototype.om$core$IRender$ = true;

lokate.core.t11472.prototype.om$core$IRender$render$arity$1 = ((function (vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var vec__11475 = self__.views_fn.call(null,self__.window,self__.data,self__.views_state);
var nav_view = cljs.core.nth.call(null,vec__11475,(0),null);
var drawer_view = cljs.core.nth.call(null,vec__11475,(1),null);
var attrs11476 = nav_view;
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11476))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"app"], null),attrs11476)):{"id": "app"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11476))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": [cljs.core.str("flex-container "),cljs.core.str(self__.orientation)].join('')},(function (){var attrs11477 = om.core.build.call(null,lokate.map.l_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.location,lokate.util.get_units.call(null,lokate.util.get_collections.call(null,self__.data))], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11477))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-content"], null)], null),attrs11477)):{"className": "flex-content"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11477))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,lokate.core.drawer_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.orientation,self__.drawer,drawer_view], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11477),sablono.interpreter.interpret.call(null,om.core.build.call(null,lokate.core.drawer_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.orientation,self__.drawer,drawer_view], null)))], null))));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11476),React.DOM.div({"className": [cljs.core.str("flex-container "),cljs.core.str(self__.orientation)].join('')},(function (){var attrs11478 = om.core.build.call(null,lokate.map.l_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.location,lokate.util.get_units.call(null,lokate.util.get_collections.call(null,self__.data))], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11478))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-content"], null)], null),attrs11478)):{"className": "flex-content"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11478))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,lokate.core.drawer_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.orientation,self__.drawer,drawer_view], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11478),sablono.interpreter.interpret.call(null,om.core.build.call(null,lokate.core.drawer_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.orientation,self__.drawer,drawer_view], null)))], null))));
})())], null))));
});})(vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data))
;

lokate.core.t11472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data){
return (function (_11474){
var self__ = this;
var _11474__$1 = this;
return self__.meta11473;
});})(vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data))
;

lokate.core.t11472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data){
return (function (_11474,meta11473__$1){
var self__ = this;
var _11474__$1 = this;
return (new lokate.core.t11472(self__.location,self__.owner,self__.map__11471,self__.p__11460,self__.data,self__.views_fn,self__.views_state,self__.orientation,self__.window,self__.drawer,self__.vec__11470,meta11473__$1));
});})(vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data))
;

lokate.core.t11472.cljs$lang$type = true;

lokate.core.t11472.cljs$lang$ctorStr = "lokate.core/t11472";

lokate.core.t11472.cljs$lang$ctorPrWriter = ((function (vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.core/t11472");
});})(vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data))
;

lokate.core.__GT_t11472 = ((function (vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data){
return (function __GT_t11472(location__$1,owner__$1,map__11471__$2,p__11460__$1,data__$1,views_fn__$1,views_state__$1,orientation__$1,window__$2,drawer__$1,vec__11470__$1,meta11473){
return (new lokate.core.t11472(location__$1,owner__$1,map__11471__$2,p__11460__$1,data__$1,views_fn__$1,views_state__$1,orientation__$1,window__$2,drawer__$1,vec__11470__$1,meta11473));
});})(vec__11470,map__11471,map__11471__$1,window__$1,views_state,views_fn,drawer,location,orientation,data))
;

}

return (new lokate.core.t11472(location,owner,map__11471__$1,p__11460,data,views_fn,views_state,orientation,window__$1,drawer,vec__11470,null));
});
