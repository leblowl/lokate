// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.navigation');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('hivez.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('hivez.login');
goog.require('om.core');
goog.require('hivez.login');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('hivez.core');
hivez.navigation.history = (new goog.History());
hivez.navigation.navigation_state = (function (){var G__16444 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16444) : cljs.core.atom.call(null,G__16444));
})();
var action__15438__auto___16447 = (function (params__15439__auto__){if(cljs.core.map_QMARK_(params__15439__auto__))
{var map__16445 = params__15439__auto__;var map__16445__$1 = ((cljs.core.seq_QMARK_(map__16445))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16445):map__16445);return hivez.core.render();
} else
{if(cljs.core.vector_QMARK_(params__15439__auto__))
{var vec__16446 = params__15439__auto__;return hivez.core.render();
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/*",action__15438__auto___16447);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nav,cljs.core.constant$keyword$77,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__16448_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(set_active,p1__16448_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation();
return secretary.core.dispatch_BANG_((((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__16449,owner){var map__16458 = p__16449;var map__16458__$1 = ((cljs.core.seq_QMARK_(map__16458))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16458):map__16458);var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16458__$1,cljs.core.constant$keyword$77);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16458__$1,cljs.core.constant$keyword$33);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16458__$1,cljs.core.constant$keyword$133);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16458__$1,cljs.core.constant$keyword$141);if(typeof hivez.navigation.t16459 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t16459 = (function (id,name,path,active,map__16458,owner,p__16449,navigation_item_view,meta16460){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__16458 = map__16458;
this.owner = owner;
this.p__16449 = p__16449;
this.navigation_item_view = navigation_item_view;
this.meta16460 = meta16460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t16459.cljs$lang$type = true;
hivez.navigation.t16459.cljs$lang$ctorStr = "hivez.navigation/t16459";
hivez.navigation.t16459.cljs$lang$ctorPrWriter = ((function (map__16458,map__16458__$1,active,path,name,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.navigation/t16459");
});})(map__16458,map__16458__$1,active,path,name,id))
;
hivez.navigation.t16459.prototype.om$core$IRender$ = true;
hivez.navigation.t16459.prototype.om$core$IRender$render$arity$1 = ((function (map__16458,map__16458__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var G__16462 = {"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id};var G__16463 = (function (){var G__16464 = {"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))};var G__16465 = self__.name;return React.DOM.a(G__16464,G__16465);
})();return React.DOM.li(G__16462,G__16463);
});})(map__16458,map__16458__$1,active,path,name,id))
;
hivez.navigation.t16459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16458,map__16458__$1,active,path,name,id){
return (function (_16461){var self__ = this;
var _16461__$1 = this;return self__.meta16460;
});})(map__16458,map__16458__$1,active,path,name,id))
;
hivez.navigation.t16459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16458,map__16458__$1,active,path,name,id){
return (function (_16461,meta16460__$1){var self__ = this;
var _16461__$1 = this;return (new hivez.navigation.t16459(self__.id,self__.name,self__.path,self__.active,self__.map__16458,self__.owner,self__.p__16449,self__.navigation_item_view,meta16460__$1));
});})(map__16458,map__16458__$1,active,path,name,id))
;
hivez.navigation.__GT_t16459 = ((function (map__16458,map__16458__$1,active,path,name,id){
return (function __GT_t16459(id__$1,name__$1,path__$1,active__$1,map__16458__$2,owner__$1,p__16449__$1,navigation_item_view__$1,meta16460){return (new hivez.navigation.t16459(id__$1,name__$1,path__$1,active__$1,map__16458__$2,owner__$1,p__16449__$1,navigation_item_view__$1,meta16460));
});})(map__16458,map__16458__$1,active,path,name,id))
;
}
return (new hivez.navigation.t16459(id,name,path,active,map__16458__$1,owner,p__16449,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t16484 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t16484 = (function (owner,app,navigation_view,meta16485){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta16485 = meta16485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t16484.cljs$lang$type = true;
hivez.navigation.t16484.cljs$lang$ctorStr = "hivez.navigation/t16484";
hivez.navigation.t16484.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.navigation/t16484");
});
hivez.navigation.t16484.prototype.om$core$IRender$ = true;
hivez.navigation.t16484.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16487 = {"className": "navigation-container"};var G__16488 = (function (){var G__16490 = {"className": "banner-container"};var G__16491 = (function (){var G__16493 = {"className": "banner-icon"};var G__16494 = (function (){var G__16495 = "&#11041;";return goog.string.unescapeEntities(G__16495);
})();return React.DOM.span(G__16493,G__16494);
})();var G__16492 = (function (){var G__16496 = {"className": "banner-title"};var G__16497 = "hivez";return React.DOM.span(G__16496,G__16497);
})();return React.DOM.div(G__16490,G__16491,G__16492);
})();var G__16489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(hivez.navigation.navigation_item_view,self__.app));return React.DOM.div(G__16487,G__16488,G__16489);
});
hivez.navigation.t16484.prototype.om$core$IWillMount$ = true;
hivez.navigation.t16484.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16498 = hivez.navigation.history;var G__16499_16502 = G__16498;var G__16500_16503 = goog.history.EventType.NAVIGATE;var G__16501_16504 = hivez.navigation.on_navigate;goog.events.listen(G__16499_16502,G__16500_16503,G__16501_16504);
G__16498.setEnabled(true);
return G__16498;
});
hivez.navigation.t16484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16486){var self__ = this;
var _16486__$1 = this;return self__.meta16485;
});
hivez.navigation.t16484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16486,meta16485__$1){var self__ = this;
var _16486__$1 = this;return (new hivez.navigation.t16484(self__.owner,self__.app,self__.navigation_view,meta16485__$1));
});
hivez.navigation.__GT_t16484 = (function __GT_t16484(owner__$1,app__$1,navigation_view__$1,meta16485){return (new hivez.navigation.t16484(owner__$1,app__$1,navigation_view__$1,meta16485));
});
}
return (new hivez.navigation.t16484(owner,app,navigation_view,null));
});
hivez.navigation.authorize_cb = (function authorize_cb(authResult){if(cljs.core.truth_((authResult["status"]["signed_in"])))
{return hivez.core.render();
} else
{return null;
}
});
goog.exportSymbol('hivez.navigation.authorize_cb', hivez.navigation.authorize_cb);
(window["authorize-cb"] = hivez.navigation.authorize_cb);
hivez.navigation.render = (function render(){return om.core.root(hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,document.getElementById("static-header")], null));
});
