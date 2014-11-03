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
hivez.login.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
hivez.login.login = (function login(data,owner){if(typeof hivez.login.t18680 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.login.t18680 = (function (owner,data,login,meta18681){
this.owner = owner;
this.data = data;
this.login = login;
this.meta18681 = meta18681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.login.t18680.cljs$lang$type = true;
hivez.login.t18680.cljs$lang$ctorStr = "hivez.login/t18680";
hivez.login.t18680.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"hivez.login/t18680");
});
hivez.login.t18680.prototype.om$core$IRender$ = true;
hivez.login.t18680.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "login-panel"},React.DOM.div({"id": "login-control"},React.DOM.div({"id": "gSignInWrapper"},React.DOM.div({"data-scope": "profile", "data-cookiepolicy": "single_host_origin", "data-clientid": "306741676689-b5ptq17cq0953l3002dgqtrkqvkhk1g6.apps.googleusercontent.com", "data-callback": "authorize-cb", "className": "g-signin"})),React.DOM.div({"id": "or"},"or"),React.DOM.div({"onClick": ((function (___$1){
return (function (){return om.core.detach_root.call(null,document.getElementById("content-overlay"));
});})(___$1))
, "id": "play-btn"},React.DOM.span({"id": "play-label"},"play"))));
});
hivez.login.t18680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18682){var self__ = this;
var _18682__$1 = this;return self__.meta18681;
});
hivez.login.t18680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18682,meta18681__$1){var self__ = this;
var _18682__$1 = this;return (new hivez.login.t18680(self__.owner,self__.data,self__.login,meta18681__$1));
});
hivez.login.__GT_t18680 = (function __GT_t18680(owner__$1,data__$1,login__$1,meta18681){return (new hivez.login.t18680(owner__$1,data__$1,login__$1,meta18681));
});
}
return (new hivez.login.t18680(owner,data,login,null));
});
hivez.login.render = (function render(){return om.core.root.call(null,hivez.login.login,hivez.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content-overlay")], null));
});

//# sourceMappingURL=login.js.map