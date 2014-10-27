// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.navigation');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
hivez.navigation.history = (new goog.History());
hivez.navigation.navigation_state = (function (){var G__11012 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11012) : cljs.core.atom.call(null,G__11012));
})();
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,cljs.core.constant$keyword$63,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__11013_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(set_active,p1__11013_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation();
return secretary.core.dispatch_BANG_((((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__11014,owner){var map__11023 = p__11014;var map__11023__$1 = ((cljs.core.seq_QMARK_(map__11023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11023):map__11023);var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.constant$keyword$63);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.constant$keyword$16);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.constant$keyword$64);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.constant$keyword$65);if(typeof hivez.navigation.t11024 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t11024 = (function (id,name,path,active,map__11023,owner,p__11014,navigation_item_view,meta11025){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__11023 = map__11023;
this.owner = owner;
this.p__11014 = p__11014;
this.navigation_item_view = navigation_item_view;
this.meta11025 = meta11025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t11024.cljs$lang$type = true;
hivez.navigation.t11024.cljs$lang$ctorStr = "hivez.navigation/t11024";
hivez.navigation.t11024.cljs$lang$ctorPrWriter = ((function (map__11023,map__11023__$1,active,path,name,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.navigation/t11024");
});})(map__11023,map__11023__$1,active,path,name,id))
;
hivez.navigation.t11024.prototype.om$core$IRender$ = true;
hivez.navigation.t11024.prototype.om$core$IRender$render$arity$1 = ((function (map__11023,map__11023__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var G__11027 = {"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id};var G__11028 = (function (){var G__11029 = {"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))};var G__11030 = self__.name;return React.DOM.a(G__11029,G__11030);
})();return React.DOM.li(G__11027,G__11028);
});})(map__11023,map__11023__$1,active,path,name,id))
;
hivez.navigation.t11024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11023,map__11023__$1,active,path,name,id){
return (function (_11026){var self__ = this;
var _11026__$1 = this;return self__.meta11025;
});})(map__11023,map__11023__$1,active,path,name,id))
;
hivez.navigation.t11024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11023,map__11023__$1,active,path,name,id){
return (function (_11026,meta11025__$1){var self__ = this;
var _11026__$1 = this;return (new hivez.navigation.t11024(self__.id,self__.name,self__.path,self__.active,self__.map__11023,self__.owner,self__.p__11014,self__.navigation_item_view,meta11025__$1));
});})(map__11023,map__11023__$1,active,path,name,id))
;
hivez.navigation.__GT_t11024 = ((function (map__11023,map__11023__$1,active,path,name,id){
return (function __GT_t11024(id__$1,name__$1,path__$1,active__$1,map__11023__$2,owner__$1,p__11014__$1,navigation_item_view__$1,meta11025){return (new hivez.navigation.t11024(id__$1,name__$1,path__$1,active__$1,map__11023__$2,owner__$1,p__11014__$1,navigation_item_view__$1,meta11025));
});})(map__11023,map__11023__$1,active,path,name,id))
;
}
return (new hivez.navigation.t11024(id,name,path,active,map__11023__$1,owner,p__11014,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t11049 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t11049 = (function (owner,app,navigation_view,meta11050){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta11050 = meta11050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t11049.cljs$lang$type = true;
hivez.navigation.t11049.cljs$lang$ctorStr = "hivez.navigation/t11049";
hivez.navigation.t11049.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.navigation/t11049");
});
hivez.navigation.t11049.prototype.om$core$IRender$ = true;
hivez.navigation.t11049.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__11052 = {"className": "navigation-container"};var G__11053 = (function (){var G__11055 = {"className": "banner-container"};var G__11056 = (function (){var G__11058 = {"className": "banner-icon"};var G__11059 = (function (){var G__11060 = "&#11041;";return goog.string.unescapeEntities(G__11060);
})();return React.DOM.span(G__11058,G__11059);
})();var G__11057 = (function (){var G__11061 = {"className": "banner-title"};var G__11062 = "hivez";return React.DOM.span(G__11061,G__11062);
})();return React.DOM.div(G__11055,G__11056,G__11057);
})();var G__11054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(hivez.navigation.navigation_item_view,self__.app));return React.DOM.div(G__11052,G__11053,G__11054);
});
hivez.navigation.t11049.prototype.om$core$IWillMount$ = true;
hivez.navigation.t11049.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__11063 = hivez.navigation.history;var G__11064_11067 = G__11063;var G__11065_11068 = goog.history.EventType.NAVIGATE;var G__11066_11069 = hivez.navigation.on_navigate;goog.events.listen(G__11064_11067,G__11065_11068,G__11066_11069);
G__11063.setEnabled(true);
return G__11063;
});
hivez.navigation.t11049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11051){var self__ = this;
var _11051__$1 = this;return self__.meta11050;
});
hivez.navigation.t11049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11051,meta11050__$1){var self__ = this;
var _11051__$1 = this;return (new hivez.navigation.t11049(self__.owner,self__.app,self__.navigation_view,meta11050__$1));
});
hivez.navigation.__GT_t11049 = (function __GT_t11049(owner__$1,app__$1,navigation_view__$1,meta11050){return (new hivez.navigation.t11049(owner__$1,app__$1,navigation_view__$1,meta11050));
});
}
return (new hivez.navigation.t11049(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){return om.core.root(hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$51,document.getElementById("static-header")], null));
});
