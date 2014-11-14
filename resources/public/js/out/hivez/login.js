// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.login');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
hivez.login.app_state = (function (){var G__15310 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15310) : cljs.core.atom.call(null,G__15310));
})();
hivez.login.login = (function login(data,owner){if(typeof hivez.login.t15329 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.login.t15329 = (function (owner,data,login,meta15330){
this.owner = owner;
this.data = data;
this.login = login;
this.meta15330 = meta15330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.login.t15329.cljs$lang$type = true;
hivez.login.t15329.cljs$lang$ctorStr = "hivez.login/t15329";
hivez.login.t15329.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.login/t15329");
});
hivez.login.t15329.prototype.om$core$IRender$ = true;
hivez.login.t15329.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__15332 = {"id": "login-panel"};var G__15333 = (function (){var G__15334 = {"id": "login-control"};var G__15335 = (function (){var G__15338 = {"id": "gSignInWrapper"};var G__15339 = (function (){var G__15340 = {"data-scope": "profile", "data-cookiepolicy": "single_host_origin", "data-clientid": "306741676689-b5ptq17cq0953l3002dgqtrkqvkhk1g6.apps.googleusercontent.com", "data-callback": "authorize-cb", "className": "g-signin"};return React.DOM.div(G__15340);
})();return React.DOM.div(G__15338,G__15339);
})();var G__15336 = (function (){var G__15341 = {"id": "or"};var G__15342 = "or";return React.DOM.div(G__15341,G__15342);
})();var G__15337 = (function (){var G__15343 = {"onClick": ((function (G__15334,G__15335,G__15336,G__15332,___$1){
return (function (){return om.core.detach_root(document.getElementById("content-overlay"));
});})(G__15334,G__15335,G__15336,G__15332,___$1))
, "id": "play-btn"};var G__15344 = (function (){var G__15345 = {"id": "play-label"};var G__15346 = "play";return React.DOM.span(G__15345,G__15346);
})();return React.DOM.div(G__15343,G__15344);
})();return React.DOM.div(G__15334,G__15335,G__15336,G__15337);
})();return React.DOM.div(G__15332,G__15333);
});
hivez.login.t15329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15331){var self__ = this;
var _15331__$1 = this;return self__.meta15330;
});
hivez.login.t15329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15331,meta15330__$1){var self__ = this;
var _15331__$1 = this;return (new hivez.login.t15329(self__.owner,self__.data,self__.login,meta15330__$1));
});
hivez.login.__GT_t15329 = (function __GT_t15329(owner__$1,data__$1,login__$1,meta15330){return (new hivez.login.t15329(owner__$1,data__$1,login__$1,meta15330));
});
}
return (new hivez.login.t15329(owner,data,login,null));
});
hivez.login.render = (function render(){return om.core.root(hivez.login.login,hivez.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,document.getElementById("content-overlay")], null));
});
