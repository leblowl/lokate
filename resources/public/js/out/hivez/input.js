// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.input');
goog.require('cljs.core');
goog.require('hivez.util');
goog.require('hivez.util');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
hivez.input.input = (function input(data,owner,p__16338){var map__16365 = p__16338;var map__16365__$1 = ((cljs.core.seq_QMARK_(map__16365))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16365):map__16365);var opts = map__16365__$1;var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,cljs.core.constant$keyword$90);var on_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,cljs.core.constant$keyword$91);var edit_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,cljs.core.constant$keyword$92);var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,cljs.core.constant$keyword$93);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,cljs.core.constant$keyword$94);if(typeof hivez.input.t16366 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.input.t16366 = (function (input,on_key_down,owner,data,edit_key,map__16365,className,p__16338,on_edit,id,opts,meta16367){
this.input = input;
this.on_key_down = on_key_down;
this.owner = owner;
this.data = data;
this.edit_key = edit_key;
this.map__16365 = map__16365;
this.className = className;
this.p__16338 = p__16338;
this.on_edit = on_edit;
this.id = id;
this.opts = opts;
this.meta16367 = meta16367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.input.t16366.cljs$lang$type = true;
hivez.input.t16366.cljs$lang$ctorStr = "hivez.input/t16366";
hivez.input.t16366.cljs$lang$ctorPrWriter = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"hivez.input/t16366");
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.t16366.prototype.om$core$IRenderState$ = true;
hivez.input.t16366.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_,p__16369){var self__ = this;
var map__16370 = p__16369;var map__16370__$1 = ((cljs.core.seq_QMARK_(map__16370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16370):map__16370);var exit_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16370__$1,cljs.core.constant$keyword$95);var ___$1 = this;var G__16371 = {"id": "input-wrapper"};var G__16372 = (function (){var G__16374 = {"dangerouslySetInnerHTML": {"__html": (function (){var G__16380 = self__.data;return (self__.edit_key.cljs$core$IFn$_invoke$arity$1 ? self__.edit_key.cljs$core$IFn$_invoke$arity$1(G__16380) : self__.edit_key.call(null,G__16380));
})()}, "onBlur": ((function (G__16371,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$95,"out");
var G__16375 = ((function (G__16371,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16377 = self__.data;var G__16378 = self__.edit_key;var G__16379 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16377,G__16378,G__16379) : self__.on_edit.call(null,G__16377,G__16378,G__16379));
});})(G__16371,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16376 = (100);return setTimeout(G__16375,G__16376);
});})(G__16371,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "onKeyDown": self__.on_key_down, "contentEditable": "true", "style": hivez.util.display(cljs.core.not(exit_type)), "className": self__.className, "ref": self__.edit_key, "id": self__.id};return React.DOM.div(G__16374);
})();var G__16373 = (function (){var G__16381 = {"onClick": ((function (G__16371,G__16372,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$95,"btn");
var G__16383 = ((function (G__16371,G__16372,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (){var G__16385 = self__.data;var G__16386 = self__.edit_key;var G__16387 = self__.owner;return (self__.on_edit.cljs$core$IFn$_invoke$arity$3 ? self__.on_edit.cljs$core$IFn$_invoke$arity$3(G__16385,G__16386,G__16387) : self__.on_edit.call(null,G__16385,G__16386,G__16387));
});})(G__16371,G__16372,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;var G__16384 = (100);return setTimeout(G__16383,G__16384);
});})(G__16371,G__16372,___$1,map__16370,map__16370__$1,exit_type,map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
, "style": hivez.util.display(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exit_type,"out"))), "id": "input-ok"};var G__16382 = (function (){var G__16388 = {"id": "input-ok-mark"};var G__16389 = (function (){var G__16390 = "&#10003;";return goog.string.unescapeEntities(G__16390);
})();return React.DOM.span(G__16388,G__16389);
})();return React.DOM.div(G__16381,G__16382);
})();return React.DOM.div(G__16371,G__16372,G__16373);
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.t16366.prototype.om$core$IDidMount$ = true;
hivez.input.t16366.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,self__.edit_key).focus();
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.t16366.prototype.om$core$IInitState$ = true;
hivez.input.t16366.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$95,null], null);
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.t16366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16368){var self__ = this;
var _16368__$1 = this;return self__.meta16367;
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.t16366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function (_16368,meta16367__$1){var self__ = this;
var _16368__$1 = this;return (new hivez.input.t16366(self__.input,self__.on_key_down,self__.owner,self__.data,self__.edit_key,self__.map__16365,self__.className,self__.p__16338,self__.on_edit,self__.id,self__.opts,meta16367__$1));
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
hivez.input.__GT_t16366 = ((function (map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id){
return (function __GT_t16366(input__$1,on_key_down__$1,owner__$1,data__$1,edit_key__$1,map__16365__$2,className__$1,p__16338__$1,on_edit__$1,id__$1,opts__$1,meta16367){return (new hivez.input.t16366(input__$1,on_key_down__$1,owner__$1,data__$1,edit_key__$1,map__16365__$2,className__$1,p__16338__$1,on_edit__$1,id__$1,opts__$1,meta16367));
});})(map__16365,map__16365__$1,opts,on_key_down,on_edit,edit_key,className,id))
;
}
return (new hivez.input.t16366(input,on_key_down,owner,data,edit_key,map__16365__$1,className,p__16338,on_edit,id,opts,null));
});
