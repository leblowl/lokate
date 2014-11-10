// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.navigation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('hivez.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('hivez.core');
hivez.navigation.history = (new goog.History());
hivez.navigation.navigation_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hivez.navigation.nav_chan = cljs.core.async.chan.call(null);
hivez.navigation.on_navigate = (function on_navigate(event){return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
hivez.navigation.init_nav = (function init_nav(){var G__26458_26459 = hivez.navigation.history;goog.events.listen(G__26458_26459,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__26458_26459.setEnabled(true);
return hivez.navigation.nav_chan;
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t26463 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t26463 = (function (owner,app,navigation_view,meta26464){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta26464 = meta26464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t26463.cljs$lang$type = true;
hivez.navigation.t26463.cljs$lang$ctorStr = "hivez.navigation/t26463";
hivez.navigation.t26463.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.navigation/t26463");
});
hivez.navigation.t26463.prototype.om$core$IRender$ = true;
hivez.navigation.t26463.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")));
});
hivez.navigation.t26463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26465){var self__ = this;
var _26465__$1 = this;return self__.meta26464;
});
hivez.navigation.t26463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26465,meta26464__$1){var self__ = this;
var _26465__$1 = this;return (new hivez.navigation.t26463(self__.owner,self__.app,self__.navigation_view,meta26464__$1));
});
hivez.navigation.__GT_t26463 = (function __GT_t26463(owner__$1,app__$1,navigation_view__$1,meta26464){return (new hivez.navigation.t26463(owner__$1,app__$1,navigation_view__$1,meta26464));
});
}
return (new hivez.navigation.t26463(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){om.core.root.call(null,hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));
return hivez.core.render.call(null);
});

//# sourceMappingURL=navigation.js.map