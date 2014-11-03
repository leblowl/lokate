// Compiled by ClojureScript 0.0-2371
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__26049_SHARP_){return (max === p1__26049_SHARP_);
});})(max))
,coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){return s1;
});
var union__2 = (function (s1,s2){if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__26050__delegate = function (s1,s2,sets){var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__26050 = function (s1,s2,var_args){
var sets = null;if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26050__delegate.call(this,s1,s2,sets);};
G__26050.cljs$lang$maxFixedArity = 2;
G__26050.cljs$lang$applyTo = (function (arglist__26051){
var s1 = cljs.core.first(arglist__26051);
arglist__26051 = cljs.core.next(arglist__26051);
var s2 = cljs.core.first(arglist__26051);
var sets = cljs.core.rest(arglist__26051);
return G__26050__delegate(s1,s2,sets);
});
G__26050.cljs$core$IFn$_invoke$arity$variadic = G__26050__delegate;
return G__26050;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){return s1;
});
var intersection__2 = (function (s1,s2){while(true){
if((cljs.core.count(s2) < cljs.core.count(s1)))
{{
var G__26053 = s2;
var G__26054 = s1;
s1 = G__26053;
s2 = G__26054;
continue;
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){if(cljs.core.contains_QMARK_(s2,item))
{return result;
} else
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__26055__delegate = function (s1,s2,sets){var bubbled_sets = clojure.set.bubble_max_key((function (p1__26052_SHARP_){return (- cljs.core.count(p1__26052_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__26055 = function (s1,s2,var_args){
var sets = null;if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26055__delegate.call(this,s1,s2,sets);};
G__26055.cljs$lang$maxFixedArity = 2;
G__26055.cljs$lang$applyTo = (function (arglist__26056){
var s1 = cljs.core.first(arglist__26056);
arglist__26056 = cljs.core.next(arglist__26056);
var s2 = cljs.core.first(arglist__26056);
var sets = cljs.core.rest(arglist__26056);
return G__26055__delegate(s1,s2,sets);
});
G__26055.cljs$core$IFn$_invoke$arity$variadic = G__26055__delegate;
return G__26055;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){return s1;
});
var difference__2 = (function (s1,s2){if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){if(cljs.core.contains_QMARK_(s2,item))
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__26057__delegate = function (s1,s2,sets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
};
var G__26057 = function (s1,s2,var_args){
var sets = null;if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26057__delegate.call(this,s1,s2,sets);};
G__26057.cljs$lang$maxFixedArity = 2;
G__26057.cljs$lang$applyTo = (function (arglist__26058){
var s1 = cljs.core.first(arglist__26058);
arglist__26058 = cljs.core.next(arglist__26058);
var s2 = cljs.core.first(arglist__26058);
var sets = cljs.core.rest(arglist__26058);
return G__26057__delegate(s1,s2,sets);
});
G__26057.cljs$core$IFn$_invoke$arity$variadic = G__26057__delegate;
return G__26057;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){if(cljs.core.truth_((function (){var G__26060 = k;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__26060) : pred.call(null,G__26060));
})()))
{return s;
} else
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26061_SHARP_){return cljs.core.select_keys(p1__26061_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26064){var vec__26065 = p__26064;var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(0),null);var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(1),null);if(cljs.core.contains_QMARK_(map,old))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else
{return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26066_SHARP_){return clojure.set.rename_keys(p1__26066_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){var ik = cljs.core.select_keys(x,ks);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__26069){var vec__26070 = p__26069;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel)))
{var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));var vec__26079 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(0),null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(1),null);var idx = clojure.set.index(r,ks);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__26079,r,s,idx){
return (function (ret,x){var found = (function (){var G__26080 = cljs.core.select_keys(x,ks);return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__26080) : idx.call(null,G__26080));
})();if(cljs.core.truth_(found))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__26079,r,s,idx){
return (function (p1__26071_SHARP_,p2__26072_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26071_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__26072_SHARP_,x], 0)));
});})(found,ks,vec__26079,r,s,idx))
,ret,found);
} else
{return ret;
}
});})(ks,vec__26079,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){var vec__26081 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(0),null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(1),null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(2),null);var idx = clojure.set.index(r,cljs.core.vals(k));return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__26081,r,s,k,idx){
return (function (ret,x){var found = (function (){var G__26082 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__26082) : idx.call(null,G__26082));
})();if(cljs.core.truth_(found))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__26081,r,s,k,idx){
return (function (p1__26073_SHARP_,p2__26074_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26073_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__26074_SHARP_,x], 0)));
});})(found,vec__26081,r,s,k,idx))
,ret,found);
} else
{return ret;
}
});})(vec__26081,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__26083_SHARP_){return cljs.core.contains_QMARK_(set2,p1__26083_SHARP_);
}),set1));
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__26084_SHARP_){return cljs.core.contains_QMARK_(set1,p1__26084_SHARP_);
}),set2));
});
