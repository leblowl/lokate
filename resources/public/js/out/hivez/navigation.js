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
hivez.navigation.navigation_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var action__18753__auto___21626 = (function (params__18754__auto__){if(cljs.core.map_QMARK_.call(null,params__18754__auto__))
{var map__21624 = params__18754__auto__;var map__21624__$1 = ((cljs.core.seq_QMARK_.call(null,map__21624))?cljs.core.apply.call(null,cljs.core.hash_map,map__21624):map__21624);return hivez.core.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__18754__auto__))
{var vec__21625 = params__18754__auto__;return hivez.core.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/*",action__18753__auto___21626);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__21627_SHARP_){return cljs.core.map.call(null,set_active,p1__21627_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__21628,owner){var map__21633 = p__21628;var map__21633__$1 = ((cljs.core.seq_QMARK_.call(null,map__21633))?cljs.core.apply.call(null,cljs.core.hash_map,map__21633):map__21633);var active = cljs.core.get.call(null,map__21633__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__21633__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__21633__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__21633__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t21634 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t21634 = (function (id,name,path,active,map__21633,owner,p__21628,navigation_item_view,meta21635){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__21633 = map__21633;
this.owner = owner;
this.p__21628 = p__21628;
this.navigation_item_view = navigation_item_view;
this.meta21635 = meta21635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t21634.cljs$lang$type = true;
hivez.navigation.t21634.cljs$lang$ctorStr = "hivez.navigation/t21634";
hivez.navigation.t21634.cljs$lang$ctorPrWriter = ((function (map__21633,map__21633__$1,active,path,name,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t21634");
});})(map__21633,map__21633__$1,active,path,name,id))
;
hivez.navigation.t21634.prototype.om$core$IRender$ = true;
hivez.navigation.t21634.prototype.om$core$IRender$render$arity$1 = ((function (map__21633,map__21633__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__21633,map__21633__$1,active,path,name,id))
;
hivez.navigation.t21634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21633,map__21633__$1,active,path,name,id){
return (function (_21636){var self__ = this;
var _21636__$1 = this;return self__.meta21635;
});})(map__21633,map__21633__$1,active,path,name,id))
;
hivez.navigation.t21634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21633,map__21633__$1,active,path,name,id){
return (function (_21636,meta21635__$1){var self__ = this;
var _21636__$1 = this;return (new hivez.navigation.t21634(self__.id,self__.name,self__.path,self__.active,self__.map__21633,self__.owner,self__.p__21628,self__.navigation_item_view,meta21635__$1));
});})(map__21633,map__21633__$1,active,path,name,id))
;
hivez.navigation.__GT_t21634 = ((function (map__21633,map__21633__$1,active,path,name,id){
return (function __GT_t21634(id__$1,name__$1,path__$1,active__$1,map__21633__$2,owner__$1,p__21628__$1,navigation_item_view__$1,meta21635){return (new hivez.navigation.t21634(id__$1,name__$1,path__$1,active__$1,map__21633__$2,owner__$1,p__21628__$1,navigation_item_view__$1,meta21635));
});})(map__21633,map__21633__$1,active,path,name,id))
;
}
return (new hivez.navigation.t21634(id,name,path,active,map__21633__$1,owner,p__21628,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t21641 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t21641 = (function (owner,app,navigation_view,meta21642){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta21642 = meta21642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t21641.cljs$lang$type = true;
hivez.navigation.t21641.cljs$lang$ctorStr = "hivez.navigation/t21641";
hivez.navigation.t21641.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t21641");
});
hivez.navigation.t21641.prototype.om$core$IRender$ = true;
hivez.navigation.t21641.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,hivez.navigation.navigation_item_view,self__.app)));
});
hivez.navigation.t21641.prototype.om$core$IWillMount$ = true;
hivez.navigation.t21641.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__21644 = hivez.navigation.history;goog.events.listen(G__21644,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__21644.setEnabled(true);
return G__21644;
});
hivez.navigation.t21641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21643){var self__ = this;
var _21643__$1 = this;return self__.meta21642;
});
hivez.navigation.t21641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21643,meta21642__$1){var self__ = this;
var _21643__$1 = this;return (new hivez.navigation.t21641(self__.owner,self__.app,self__.navigation_view,meta21642__$1));
});
hivez.navigation.__GT_t21641 = (function __GT_t21641(owner__$1,app__$1,navigation_view__$1,meta21642){return (new hivez.navigation.t21641(owner__$1,app__$1,navigation_view__$1,meta21642));
});
}
return (new hivez.navigation.t21641(owner,app,navigation_view,null));
});
hivez.navigation.authorize_cb = (function authorize_cb(authResult){if(cljs.core.truth_((authResult["status"]["signed_in"])))
{return hivez.core.render.call(null);
} else
{return null;
}
});
goog.exportSymbol('hivez.navigation.authorize_cb', hivez.navigation.authorize_cb);
(window["authorize-cb"] = hivez.navigation.authorize_cb);
hivez.navigation.render = (function render(){return om.core.root.call(null,hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));
});

//# sourceMappingURL=navigation.js.map