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
hivez.login.app_state = (function (){var G__15390 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15390) : cljs.core.atom.call(null,G__15390));
})();
hivez.login.login = (function login(data,owner){if(typeof hivez.login.t15409 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.login.t15409 = (function (owner,data,login,meta15410){
this.owner = owner;
this.data = data;
this.login = login;
this.meta15410 = meta15410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.login.t15409.cljs$lang$type = true;
hivez.login.t15409.cljs$lang$ctorStr = "hivez.login/t15409";
hivez.login.t15409.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.login/t15409");
});
hivez.login.t15409.prototype.om$core$IRender$ = true;
hivez.login.t15409.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__15412 = {"id": "login-panel"};var G__15413 = (function (){var G__15414 = {"id": "login-control"};var G__15415 = (function (){var G__15418 = {"id": "gSignInWrapper"};var G__15419 = (function (){var G__15420 = {"data-scope": "profile", "data-cookiepolicy": "single_host_origin", "data-clientid": "306741676689-b5ptq17cq0953l3002dgqtrkqvkhk1g6.apps.googleusercontent.com", "data-callback": "authorize-cb", "className": "g-signin"};return React.DOM.div(G__15420);
})();return React.DOM.div(G__15418,G__15419);
})();var G__15416 = (function (){var G__15421 = {"id": "or"};var G__15422 = "or";return React.DOM.div(G__15421,G__15422);
})();var G__15417 = (function (){var G__15423 = {"onClick": ((function (G__15414,G__15415,G__15416,G__15412,___$1){
return (function (){return om.core.detach_root(document.getElementById("content-overlay"));
});})(G__15414,G__15415,G__15416,G__15412,___$1))
, "id": "play-btn"};var G__15424 = (function (){var G__15425 = {"id": "play-label"};var G__15426 = "play";return React.DOM.span(G__15425,G__15426);
})();return React.DOM.div(G__15423,G__15424);
})();return React.DOM.div(G__15414,G__15415,G__15416,G__15417);
})();return React.DOM.div(G__15412,G__15413);
});
hivez.login.t15409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15411){var self__ = this;
var _15411__$1 = this;return self__.meta15410;
});
hivez.login.t15409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15411,meta15410__$1){var self__ = this;
var _15411__$1 = this;return (new hivez.login.t15409(self__.owner,self__.data,self__.login,meta15410__$1));
});
hivez.login.__GT_t15409 = (function __GT_t15409(owner__$1,data__$1,login__$1,meta15410){return (new hivez.login.t15409(owner__$1,data__$1,login__$1,meta15410));
});
}
return (new hivez.login.t15409(owner,data,login,null));
});
hivez.login.render = (function render(){return om.core.root(hivez.login.login,hivez.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,document.getElementById("content-overlay")], null));
});
