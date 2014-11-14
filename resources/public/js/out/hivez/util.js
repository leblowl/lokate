// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.util');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
hivez.util.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
hivez.util.display_fade_in = (function display_fade_in(show){if(cljs.core.truth_(show))
{return {"transition": "opacity .3s", "opacity": (1)};
} else
{return {"opacity": (0)};
}
});
hivez.util.fdate_now = (function fdate_now(){var d = (new Date());var date = d.getDate();var month = (d.getMonth() + (1));var year = d.getFullYear();return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year));
});
/**
* @param {...*} var_args
*/
hivez.util.floormat = (function() { 
var floormat__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.string.format,args);
};
var floormat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return floormat__delegate.call(this,args);};
floormat.cljs$lang$maxFixedArity = 0;
floormat.cljs$lang$applyTo = (function (arglist__15347){
var args = cljs.core.seq(arglist__15347);
return floormat__delegate(args);
});
floormat.cljs$core$IFn$_invoke$arity$variadic = floormat__delegate;
return floormat;
})()
;
/**
* Euclidean distance between 2 points
*/
hivez.util.distance = (function distance(pos1,pos2){var G__15354 = ((function (){var G__15356 = (cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(pos2));var G__15357 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__15356,G__15357) : Math.pow.call(null,G__15356,G__15357));
})() + (function (){var G__15358 = (cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(pos1) - cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(pos2));var G__15359 = (2);return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__15358,G__15359) : Math.pow.call(null,G__15358,G__15359));
})());var G__15355 = 0.5;return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__15354,G__15355) : Math.pow.call(null,G__15354,G__15355));
});
