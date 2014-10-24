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
return (function (p1__21434_SHARP_){return cljs.core.map.call(null,set_active,p1__21434_SHARP_);
});})(token,set_active))
);
});
hivez.navigation.on_navigate = (function on_navigate(event){hivez.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.navigation_item_view = (function navigation_item_view(p__21435,owner){var map__21440 = p__21435;var map__21440__$1 = ((cljs.core.seq_QMARK_.call(null,map__21440))?cljs.core.apply.call(null,cljs.core.hash_map,map__21440):map__21440);var active = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof hivez.navigation.t21441 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t21441 = (function (id,name,path,active,map__21440,owner,p__21435,navigation_item_view,meta21442){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__21440 = map__21440;
this.owner = owner;
this.p__21435 = p__21435;
this.navigation_item_view = navigation_item_view;
this.meta21442 = meta21442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t21441.cljs$lang$type = true;
hivez.navigation.t21441.cljs$lang$ctorStr = "hivez.navigation/t21441";
hivez.navigation.t21441.cljs$lang$ctorPrWriter = ((function (map__21440,map__21440__$1,active,path,name,id){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.navigation/t21441");
});})(map__21440,map__21440__$1,active,path,name,id))
;
hivez.navigation.t21441.prototype.om$core$IRender$ = true;
hivez.navigation.t21441.prototype.om$core$IRender$render$arity$1 = ((function (map__21440,map__21440__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__21440,map__21440__$1,active,path,name,id))
;
hivez.navigation.t21441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21440,map__21440__$1,active,path,name,id){
return (function (_21443){var self__ = this;
var _21443__$1 = this;return self__.meta21442;
});})(map__21440,map__21440__$1,active,path,name,id))
;
hivez.navigation.t21441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21440,map__21440__$1,active,path,name,id){
return (function (_21443,meta21442__$1){var self__ = this;
var _21443__$1 = this;return (new hivez.navigation.t21441(self__.id,self__.name,self__.path,self__.active,self__.map__21440,self__.owner,self__.p__21435,self__.navigation_item_view,meta21442__$1));
});})(map__21440,map__21440__$1,active,path,name,id))
;
hivez.navigation.__GT_t21441 = ((function (map__21440,map__21440__$1,active,path,name,id){
return (function __GT_t21441(id__$1,name__$1,path__$1,active__$1,map__21440__$2,owner__$1,p__21435__$1,navigation_item_view__$1,meta21442){return (new hivez.navigation.t21441(id__$1,name__$1,path__$1,active__$1,map__21440__$2,owner__$1,p__21435__$1,navigation_item_view__$1,meta21442));
});})(map__21440,map__21440__$1,active,path,name,id))
;
}
return (new hivez.navigation.t21441(id,name,path,active,map__21440__$1,owner,p__21435,navigation_item_view,null));
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t21448 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t21448 = (function (owner,app,navigation_view,meta21449){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta21449 = meta21449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t21448.cljs$lang$type = true;
hivez.navigation.t21448.cljs$lang$ctorStr = "hivez.navigation/t21448";
hivez.navigation.t21448.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.navigation/t21448");
});
hivez.navigation.t21448.prototype.om$core$IRender$ = true;
hivez.navigation.t21448.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,hivez.navigation.navigation_item_view,self__.app)));
});
hivez.navigation.t21448.prototype.om$core$IWillMount$ = true;
hivez.navigation.t21448.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__21451 = hivez.navigation.history;goog.events.listen(G__21451,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__21451.setEnabled(true);
return G__21451;
});
hivez.navigation.t21448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21450){var self__ = this;
var _21450__$1 = this;return self__.meta21449;
});
hivez.navigation.t21448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21450,meta21449__$1){var self__ = this;
var _21450__$1 = this;return (new hivez.navigation.t21448(self__.owner,self__.app,self__.navigation_view,meta21449__$1));
});
hivez.navigation.__GT_t21448 = (function __GT_t21448(owner__$1,app__$1,navigation_view__$1,meta21449){return (new hivez.navigation.t21448(owner__$1,app__$1,navigation_view__$1,meta21449));
});
}
return (new hivez.navigation.t21448(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){return om.core.root.call(null,hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));
});

//# sourceMappingURL=navigation.js.map