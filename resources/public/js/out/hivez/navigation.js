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
hivez.navigation.navigation_state = (function (){var G__15950 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15950) : cljs.core.atom.call(null,G__15950));
})();
hivez.navigation.nav_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
hivez.navigation.on_navigate = (function on_navigate(event){return secretary.core.dispatch_BANG_((((event.token == null))?"/":event.token));
});
hivez.navigation.init_nav = (function init_nav(){var G__15955_15959 = hivez.navigation.history;var G__15956_15960 = G__15955_15959;var G__15957_15961 = goog.history.EventType.NAVIGATE;var G__15958_15962 = hivez.navigation.on_navigate;goog.events.listen(G__15956_15960,G__15957_15961,G__15958_15962);
G__15955_15959.setEnabled(true);
return hivez.navigation.nav_chan;
});
hivez.navigation.navigation_view = (function navigation_view(app,owner){if(typeof hivez.navigation.t15976 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.navigation.t15976 = (function (owner,app,navigation_view,meta15977){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta15977 = meta15977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.navigation.t15976.cljs$lang$type = true;
hivez.navigation.t15976.cljs$lang$ctorStr = "hivez.navigation/t15976";
hivez.navigation.t15976.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.navigation/t15976");
});
hivez.navigation.t15976.prototype.om$core$IRender$ = true;
hivez.navigation.t15976.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15979 = {"className": "navigation-container"};var G__15980 = (function (){var G__15981 = {"className": "banner-container"};var G__15982 = (function (){var G__15984 = {"className": "banner-icon"};var G__15985 = (function (){var G__15986 = "&#11041;";return goog.string.unescapeEntities(G__15986);
})();return React.DOM.span(G__15984,G__15985);
})();var G__15983 = (function (){var G__15987 = {"className": "banner-title"};var G__15988 = "hivez";return React.DOM.span(G__15987,G__15988);
})();return React.DOM.div(G__15981,G__15982,G__15983);
})();return React.DOM.div(G__15979,G__15980);
});
hivez.navigation.t15976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15978){var self__ = this;
var _15978__$1 = this;return self__.meta15977;
});
hivez.navigation.t15976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15978,meta15977__$1){var self__ = this;
var _15978__$1 = this;return (new hivez.navigation.t15976(self__.owner,self__.app,self__.navigation_view,meta15977__$1));
});
hivez.navigation.__GT_t15976 = (function __GT_t15976(owner__$1,app__$1,navigation_view__$1,meta15977){return (new hivez.navigation.t15976(owner__$1,app__$1,navigation_view__$1,meta15977));
});
}
return (new hivez.navigation.t15976(owner,app,navigation_view,null));
});
hivez.navigation.render = (function render(){om.core.root(hivez.navigation.navigation_view,hivez.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,document.getElementById("static-header")], null));
return hivez.core.render();
});
