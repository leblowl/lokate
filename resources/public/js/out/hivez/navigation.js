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
var action__18694__auto___19139 = (function (params__18695__auto__){if(cljs.core.map_QMARK_.call(null,params__18695__auto__))
{var map__19137 = params__18695__auto__;var map__19137__$1 = ((cljs.core.seq_QMARK_.call(null,map__19137))?cljs.core.apply.call(null,cljs.core.hash_map,map__19137):map__19137);return hivez.core.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__18695__auto__))
{var vec__19138 = params__18695__auto__;return hivez.core.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/*",action__18694__auto___19139);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__19140_SHARP_){return cljs.core.map.call(null,set_active,p1__19140_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__19141,owner){var map__19146 = p__19141;var map__19146__$1 = ((cljs.core.seq_QMARK_.call(null,map__19146))?cljs.core.apply.call(null,cljs.core.hash_map,map__19146):map__19146);var active = cljs.core.get.call(null,map__19146__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__19146__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__19146__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__19146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t19147 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t19147 = (function (id,name,path,active,map__19146,owner,p__19141,navigation_item_view,meta19148){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__19146 = map__19146;
this.owner = owner;
this.p__19141 = p__19141;
this.navigation_item_view = navigation_item_view;
this.meta19148 = meta19148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t19147.cljs$lang$type = true;
hivez.navigation.t19147.cljs$lang$ctorStr = "hivez.navigation/t19147";
hivez.navigation.t19147.cljs$lang$ctorPrWriter = ((function (map__19146,map__19146__$1,active,path,name,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.navigation/t19147");
});})(map__19146,map__19146__$1,active,path,name,id))
;
hivez.navigation.t19147.prototype.om$core$IRender$ = true;
hivez.navigation.t19147.prototype.om$core$IRender$render$arity$1 = ((function (map__19146,map__19146__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__19146,map__19146__$1,active,path,name,id))
;
hivez.navigation.t19147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19146,map__19146__$1,active,path,name,id){
return (function (_19149){var self__ = this;
var _19149__$1 = this;return self__.meta19148;
});})(map__19146,map__19146__$1,active,path,name,id))
;
hivez.navigation.t19147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19146,map__19146__$1,active,path,name,id){
return (function (_19149,meta19148__$1){var self__ = this;
var _19149__$1 = this;return (new hivez.navigation.t19147(self__.id,self__.name,self__.path,self__.active,self__.map__19146,self__.owner,self__.p__19141,self__.navigation_item_view,meta19148__$1));
});})(map__19146,map__19146__$1,active,path,name,id))
;
hivez.navigation.__GT_t19147 = ((function (map__19146,map__19146__$1,active,path,name,id){
return (function __GT_t19147(id__$1,name__$1,path__$1,active__$1,map__19146__$2,owner__$1,p__19141__$1,navigation_item_view__$1,meta19148){return (new hivez.navigation.t19147(id__$1,name__$1,path__$1,active__$1,map__19146__$2,owner__$1,p__19141__$1,navigation_item_view__$1,meta19148));
});})(map__19146,map__19146__$1,active,path,name,id))
;
}
return (new hivez.navigation.t19147(id,name,path,active,map__19146__$1,owner,p__19141,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t19154 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t19154 = (function (owner,app,navigation_view,meta19155){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta19155 = meta19155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t19154.cljs$lang$type = true;
hivez.navigation.t19154.cljs$lang$ctorStr = "hivez.navigation/t19154";
hivez.navigation.t19154.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.navigation/t19154");
});
hivez.navigation.t19154.prototype.om$core$IRender$ = true;
hivez.navigation.t19154.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,hivez.navigation.navigation_item_view,self__.app)));
});
hivez.navigation.t19154.prototype.om$core$IWillMount$ = true;
hivez.navigation.t19154.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__19157 = hivez.navigation.history;goog.events.listen(G__19157,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__19157.setEnabled(true);
return G__19157;
});
hivez.navigation.t19154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19156){var self__ = this;
var _19156__$1 = this;return self__.meta19155;
});
hivez.navigation.t19154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19156,meta19155__$1){var self__ = this;
var _19156__$1 = this;return (new hivez.navigation.t19154(self__.owner,self__.app,self__.navigation_view,meta19155__$1));
});
hivez.navigation.__GT_t19154 = (function __GT_t19154(owner__$1,app__$1,navigation_view__$1,meta19155){return (new hivez.navigation.t19154(owner__$1,app__$1,navigation_view__$1,meta19155));
});
}
return (new hivez.navigation.t19154(owner,app,navigation_view,null));
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