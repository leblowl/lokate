// Compiled by ClojureScript 0.0-2277
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t15367 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t15367 = (function (owner,data,app,meta15368){
this.owner = owner;
this.data = data;
this.app = app;
this.meta15368 = meta15368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t15367.cljs$lang$type = true;
hivez.core.t15367.cljs$lang$ctorStr = "hivez.core/t15367";
hivez.core.t15367.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hivez.core/t15367");
});
hivez.core.t15367.prototype.om$core$IRender$ = true;
hivez.core.t15367.prototype.om$core$IRender$render$arity$1 = (function (this__5131__auto__){var self__ = this;
var this__5131__auto____$1 = this;return React.DOM.div({"className": "content"},React.DOM.div({"className": "row"},React.DOM.div({"className": "map-container small-1 small-centered column"},"map")),React.DOM.div({"className": "row"},React.DOM.div({"className": "info-container small-1 small-centered column"},"info")));
});
hivez.core.t15367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15369){var self__ = this;
var _15369__$1 = this;return self__.meta15368;
});
hivez.core.t15367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15369,meta15368__$1){var self__ = this;
var _15369__$1 = this;return (new hivez.core.t15367(self__.owner,self__.data,self__.app,meta15368__$1));
});
hivez.core.__GT_t15367 = (function __GT_t15367(owner__$1,data__$1,app__$1,meta15368){return (new hivez.core.t15367(owner__$1,data__$1,app__$1,meta15368));
});
}
return (new hivez.core.t15367(owner,data,app,null));
});
om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map