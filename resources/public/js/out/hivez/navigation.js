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
var action__18990__auto___25673 = (function (params__18991__auto__){if(cljs.core.map_QMARK_.call(null,params__18991__auto__))
{var map__25671 = params__18991__auto__;var map__25671__$1 = ((cljs.core.seq_QMARK_.call(null,map__25671))?cljs.core.apply.call(null,cljs.core.hash_map,map__25671):map__25671);hivez.login.render.call(null);
return hivez.core.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__18991__auto__))
{var vec__25672 = params__18991__auto__;hivez.login.render.call(null);
return hivez.core.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/*",action__18990__auto___25673);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__25674_SHARP_){return cljs.core.map.call(null,set_active,p1__25674_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__25675,owner){var map__25680 = p__25675;var map__25680__$1 = ((cljs.core.seq_QMARK_.call(null,map__25680))?cljs.core.apply.call(null,cljs.core.hash_map,map__25680):map__25680);var active = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t25681 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t25681 = (function (id,name,path,active,map__25680,owner,p__25675,navigation_item_view,meta25682){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__25680 = map__25680;
this.owner = owner;
this.p__25675 = p__25675;
this.navigation_item_view = navigation_item_view;
this.meta25682 = meta25682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t25681.cljs$lang$type = true;
hivez.navigation.t25681.cljs$lang$ctorStr = "hivez.navigation/t25681";
hivez.navigation.t25681.cljs$lang$ctorPrWriter = ((function (map__25680,map__25680__$1,active,path,name,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t25681");
});})(map__25680,map__25680__$1,active,path,name,id))
;
hivez.navigation.t25681.prototype.om$core$IRender$ = true;
hivez.navigation.t25681.prototype.om$core$IRender$render$arity$1 = ((function (map__25680,map__25680__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__25680,map__25680__$1,active,path,name,id))
;
hivez.navigation.t25681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25680,map__25680__$1,active,path,name,id){
return (function (_25683){var self__ = this;
var _25683__$1 = this;return self__.meta25682;
});})(map__25680,map__25680__$1,active,path,name,id))
;
hivez.navigation.t25681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25680,map__25680__$1,active,path,name,id){
return (function (_25683,meta25682__$1){var self__ = this;
var _25683__$1 = this;return (new hivez.navigation.t25681(self__.id,self__.name,self__.path,self__.active,self__.map__25680,self__.owner,self__.p__25675,self__.navigation_item_view,meta25682__$1));
});})(map__25680,map__25680__$1,active,path,name,id))
;
hivez.navigation.__GT_t25681 = ((function (map__25680,map__25680__$1,active,path,name,id){
return (function __GT_t25681(id__$1,name__$1,path__$1,active__$1,map__25680__$2,owner__$1,p__25675__$1,navigation_item_view__$1,meta25682){return (new hivez.navigation.t25681(id__$1,name__$1,path__$1,active__$1,map__25680__$2,owner__$1,p__25675__$1,navigation_item_view__$1,meta25682));
});})(map__25680,map__25680__$1,active,path,name,id))
;
}
return (new hivez.navigation.t25681(id,name,path,active,map__25680__$1,owner,p__25675,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t25688 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t25688 = (function (owner,app,navigation_view,meta25689){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta25689 = meta25689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t25688.cljs$lang$type = true;
hivez.navigation.t25688.cljs$lang$ctorStr = "hivez.navigation/t25688";
hivez.navigation.t25688.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t25688");
});
hivez.navigation.t25688.prototype.om$core$IRender$ = true;
hivez.navigation.t25688.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,hivez.navigation.navigation_item_view,self__.app)));
});
hivez.navigation.t25688.prototype.om$core$IWillMount$ = true;
hivez.navigation.t25688.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__25691 = hivez.navigation.history;goog.events.listen(G__25691,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__25691.setEnabled(true);
return G__25691;
});
hivez.navigation.t25688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25690){var self__ = this;
var _25690__$1 = this;return self__.meta25689;
});
hivez.navigation.t25688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25690,meta25689__$1){var self__ = this;
var _25690__$1 = this;return (new hivez.navigation.t25688(self__.owner,self__.app,self__.navigation_view,meta25689__$1));
});
hivez.navigation.__GT_t25688 = (function __GT_t25688(owner__$1,app__$1,navigation_view__$1,meta25689){return (new hivez.navigation.t25688(owner__$1,app__$1,navigation_view__$1,meta25689));
});
}
return (new hivez.navigation.t25688(owner,app,navigation_view,null));
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