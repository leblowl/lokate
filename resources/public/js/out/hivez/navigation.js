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
var action__18754__auto___41933 = (function (params__18755__auto__){if(cljs.core.map_QMARK_.call(null,params__18755__auto__))
{var map__41931 = params__18755__auto__;var map__41931__$1 = ((cljs.core.seq_QMARK_.call(null,map__41931))?cljs.core.apply.call(null,cljs.core.hash_map,map__41931):map__41931);return hivez.core.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__18755__auto__))
{var vec__41932 = params__18755__auto__;return hivez.core.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/*",action__18754__auto___41933);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__41934_SHARP_){return cljs.core.map.call(null,set_active,p1__41934_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__41935,owner){var map__41940 = p__41935;var map__41940__$1 = ((cljs.core.seq_QMARK_.call(null,map__41940))?cljs.core.apply.call(null,cljs.core.hash_map,map__41940):map__41940);var active = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t41941 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t41941 = (function (id,name,path,active,map__41940,owner,p__41935,navigation_item_view,meta41942){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__41940 = map__41940;
this.owner = owner;
this.p__41935 = p__41935;
this.navigation_item_view = navigation_item_view;
this.meta41942 = meta41942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t41941.cljs$lang$type = true;
hivez.navigation.t41941.cljs$lang$ctorStr = "hivez.navigation/t41941";
hivez.navigation.t41941.cljs$lang$ctorPrWriter = ((function (map__41940,map__41940__$1,active,path,name,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t41941");
});})(map__41940,map__41940__$1,active,path,name,id))
;
hivez.navigation.t41941.prototype.om$core$IRender$ = true;
hivez.navigation.t41941.prototype.om$core$IRender$render$arity$1 = ((function (map__41940,map__41940__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__41940,map__41940__$1,active,path,name,id))
;
hivez.navigation.t41941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__41940,map__41940__$1,active,path,name,id){
return (function (_41943){var self__ = this;
var _41943__$1 = this;return self__.meta41942;
});})(map__41940,map__41940__$1,active,path,name,id))
;
hivez.navigation.t41941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__41940,map__41940__$1,active,path,name,id){
return (function (_41943,meta41942__$1){var self__ = this;
var _41943__$1 = this;return (new hivez.navigation.t41941(self__.id,self__.name,self__.path,self__.active,self__.map__41940,self__.owner,self__.p__41935,self__.navigation_item_view,meta41942__$1));
});})(map__41940,map__41940__$1,active,path,name,id))
;
hivez.navigation.__GT_t41941 = ((function (map__41940,map__41940__$1,active,path,name,id){
return (function __GT_t41941(id__$1,name__$1,path__$1,active__$1,map__41940__$2,owner__$1,p__41935__$1,navigation_item_view__$1,meta41942){return (new hivez.navigation.t41941(id__$1,name__$1,path__$1,active__$1,map__41940__$2,owner__$1,p__41935__$1,navigation_item_view__$1,meta41942));
});})(map__41940,map__41940__$1,active,path,name,id))
;
}
return (new hivez.navigation.t41941(id,name,path,active,map__41940__$1,owner,p__41935,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t41948 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t41948 = (function (owner,app,navigation_view,meta41949){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta41949 = meta41949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t41948.cljs$lang$type = true;
hivez.navigation.t41948.cljs$lang$ctorStr = "hivez.navigation/t41948";
hivez.navigation.t41948.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t41948");
});
hivez.navigation.t41948.prototype.om$core$IRender$ = true;
hivez.navigation.t41948.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")));
});
hivez.navigation.t41948.prototype.om$core$IWillMount$ = true;
hivez.navigation.t41948.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__41951 = hivez.navigation.history;goog.events.listen(G__41951,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__41951.setEnabled(true);
return G__41951;
});
hivez.navigation.t41948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41950){var self__ = this;
var _41950__$1 = this;return self__.meta41949;
});
hivez.navigation.t41948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41950,meta41949__$1){var self__ = this;
var _41950__$1 = this;return (new hivez.navigation.t41948(self__.owner,self__.app,self__.navigation_view,meta41949__$1));
});
hivez.navigation.__GT_t41948 = (function __GT_t41948(owner__$1,app__$1,navigation_view__$1,meta41949){return (new hivez.navigation.t41948(owner__$1,app__$1,navigation_view__$1,meta41949));
});
}
return (new hivez.navigation.t41948(owner,app,navigation_view,null));
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