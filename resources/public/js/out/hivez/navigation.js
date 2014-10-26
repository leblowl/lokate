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
hivez.navigation.navigation_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hivez.navigation.refresh_navigation = (function refresh_navigation(){var token = hivez.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,hivez.navigation.navigation_state,((function (token,set_active){
return (function (p1__23926_SHARP_){return cljs.core.map.call(null,set_active,p1__23926_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__23927,owner){var map__23932 = p__23927;var map__23932__$1 = ((cljs.core.seq_QMARK_.call(null,map__23932))?cljs.core.apply.call(null,cljs.core.hash_map,map__23932):map__23932);var active = cljs.core.get.call(null,map__23932__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__23932__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__23932__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__23932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t23933 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t23933 = (function (id,name,path,active,map__23932,owner,p__23927,navigation_item_view,meta23934){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__23932 = map__23932;
this.owner = owner;
this.p__23927 = p__23927;
this.navigation_item_view = navigation_item_view;
this.meta23934 = meta23934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t23933.cljs$lang$type = true;
hivez.navigation.t23933.cljs$lang$ctorStr = "hivez.navigation/t23933";
hivez.navigation.t23933.cljs$lang$ctorPrWriter = ((function (map__23932,map__23932__$1,active,path,name,id){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t23933");
});})(map__23932,map__23932__$1,active,path,name,id))
;
hivez.navigation.t23933.prototype.om$core$IRender$ = true;
hivez.navigation.t23933.prototype.om$core$IRender$render$arity$1 = ((function (map__23932,map__23932__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__23932,map__23932__$1,active,path,name,id))
;
hivez.navigation.t23933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23932,map__23932__$1,active,path,name,id){
return (function (_23935){var self__ = this;
var _23935__$1 = this;return self__.meta23934;
});})(map__23932,map__23932__$1,active,path,name,id))
;
hivez.navigation.t23933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23932,map__23932__$1,active,path,name,id){
return (function (_23935,meta23934__$1){var self__ = this;
var _23935__$1 = this;return (new hivez.navigation.t23933(self__.id,self__.name,self__.path,self__.active,self__.map__23932,self__.owner,self__.p__23927,self__.navigation_item_view,meta23934__$1));
});})(map__23932,map__23932__$1,active,path,name,id))
;
hivez.navigation.__GT_t23933 = ((function (map__23932,map__23932__$1,active,path,name,id){
return (function __GT_t23933(id__$1,name__$1,path__$1,active__$1,map__23932__$2,owner__$1,p__23927__$1,navigation_item_view__$1,meta23934){return (new hivez.navigation.t23933(id__$1,name__$1,path__$1,active__$1,map__23932__$2,owner__$1,p__23927__$1,navigation_item_view__$1,meta23934));
});})(map__23932,map__23932__$1,active,path,name,id))
;
}
return (new hivez.navigation.t23933(id,name,path,active,map__23932__$1,owner,p__23927,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t23940 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t23940 = (function (owner,app,navigation_view,meta23941){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta23941 = meta23941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t23940.cljs$lang$type = true;
hivez.navigation.t23940.cljs$lang$ctorStr = "hivez.navigation/t23940";
hivez.navigation.t23940.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t23940");
});
hivez.navigation.t23940.prototype.om$core$IRender$ = true;
hivez.navigation.t23940.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,hivez.navigation.navigation_item_view,self__.app)));
});
hivez.navigation.t23940.prototype.om$core$IWillMount$ = true;
hivez.navigation.t23940.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__23943 = hivez.navigation.history;goog.events.listen(G__23943,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__23943.setEnabled(true);
return G__23943;
});
hivez.navigation.t23940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23942){var self__ = this;
var _23942__$1 = this;return self__.meta23941;
});
hivez.navigation.t23940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23942,meta23941__$1){var self__ = this;
var _23942__$1 = this;return (new hivez.navigation.t23940(self__.owner,self__.app,self__.navigation_view,meta23941__$1));
});
hivez.navigation.__GT_t23940 = (function __GT_t23940(owner__$1,app__$1,navigation_view__$1,meta23941){return (new hivez.navigation.t23940(owner__$1,app__$1,navigation_view__$1,meta23941));
});
}
return (new hivez.navigation.t23940(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){return om.core.root.call(null,hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));
});

//# sourceMappingURL=navigation.js.map