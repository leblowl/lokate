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
hivez.navigation.init_nav = (function init_nav(){var G__10473_10474 = hivez.navigation.history;goog.events.listen(G__10473_10474,goog.history.EventType.NAVIGATE,hivez.navigation.on_navigate);
G__10473_10474.setEnabled(true);
return hivez.navigation.nav_chan;
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t10478 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t10478 = (function (owner,app,navigation_view,meta10479){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta10479 = meta10479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t10478.cljs$lang$type = true;
hivez.navigation.t10478.cljs$lang$ctorStr = "hivez.navigation/t10478";
hivez.navigation.t10478.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.navigation/t10478");
});
hivez.navigation.t10478.prototype.om$core$IRender$ = true;
hivez.navigation.t10478.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.span({"className": "banner-icon"},goog.string.unescapeEntities("&#11041;")),React.DOM.span({"className": "banner-title"},"hivez")));
});
hivez.navigation.t10478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10480){var self__ = this;
var _10480__$1 = this;return self__.meta10479;
});
hivez.navigation.t10478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10480,meta10479__$1){var self__ = this;
var _10480__$1 = this;return (new hivez.navigation.t10478(self__.owner,self__.app,self__.navigation_view,meta10479__$1));
});
hivez.navigation.__GT_t10478 = (function __GT_t10478(owner__$1,app__$1,navigation_view__$1,meta10479){return (new hivez.navigation.t10478(owner__$1,app__$1,navigation_view__$1,meta10479));
});
}
return (new hivez.navigation.t10478(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){om.core.root.call(null,hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));
return hivez.core.render.call(null);
});

//# sourceMappingURL=navigation.js.map