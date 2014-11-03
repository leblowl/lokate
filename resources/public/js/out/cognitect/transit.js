// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv(other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__27784 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27784) : com.cognitect.transit.eq.hashCode.call(null,G__27784));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__27785 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27785) : com.cognitect.transit.eq.hashCode.call(null,G__27785));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__27786 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27786) : com.cognitect.transit.eq.hashCode.call(null,G__27786));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__27791_27795 = cljs.core.seq(cljs.core.js_keys(b));var chunk__27792_27796 = null;var count__27793_27797 = (0);var i__27794_27798 = (0);while(true){
if((i__27794_27798 < count__27793_27797))
{var k_27799 = chunk__27792_27796.cljs$core$IIndexed$_nth$arity$2(null,i__27794_27798);var v_27800 = (b[k_27799]);(a[k_27799] = v_27800);
{
var G__27801 = seq__27791_27795;
var G__27802 = chunk__27792_27796;
var G__27803 = count__27793_27797;
var G__27804 = (i__27794_27798 + (1));
seq__27791_27795 = G__27801;
chunk__27792_27796 = G__27802;
count__27793_27797 = G__27803;
i__27794_27798 = G__27804;
continue;
}
} else
{var temp__4126__auto___27805 = cljs.core.seq(seq__27791_27795);if(temp__4126__auto___27805)
{var seq__27791_27806__$1 = temp__4126__auto___27805;if(cljs.core.chunked_seq_QMARK_(seq__27791_27806__$1))
{var c__4410__auto___27807 = cljs.core.chunk_first(seq__27791_27806__$1);{
var G__27808 = cljs.core.chunk_rest(seq__27791_27806__$1);
var G__27809 = c__4410__auto___27807;
var G__27810 = cljs.core.count(c__4410__auto___27807);
var G__27811 = (0);
seq__27791_27795 = G__27808;
chunk__27792_27796 = G__27809;
count__27793_27797 = G__27810;
i__27794_27798 = G__27811;
continue;
}
} else
{var k_27812 = cljs.core.first(seq__27791_27806__$1);var v_27813 = (b[k_27812]);(a[k_27812] = v_27813);
{
var G__27814 = cljs.core.next(seq__27791_27806__$1);
var G__27815 = null;
var G__27816 = (0);
var G__27817 = (0);
seq__27791_27795 = G__27814;
chunk__27792_27796 = G__27815;
count__27793_27797 = G__27816;
i__27794_27798 = G__27817;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__27818 = arr;var G__27819 = true;var G__27820 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__27818,G__27819,G__27820) : cljs.core.PersistentArrayMap.fromArray.call(null,G__27818,G__27819,G__27820));
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__27821 = arr;var G__27822 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__27821,G__27822) : cljs.core.PersistentVector.fromArray.call(null,G__27821,G__27822));
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__27827 = cljs.core.name(type);var G__27828 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__27827){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__27827))
,":",((function (G__27827){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__27827))
,"set",((function (G__27827){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__27827))
,"list",((function (G__27827){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__27827))
,"cmap",((function (G__27827){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__27829 = (i + (2));
var G__27830 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__27829;
ret = G__27830;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__27827))
], null),cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$96)));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__27827,G__27828) : com.cognitect.transit.reader.call(null,G__27827,G__27828));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__27831_27837 = cljs.core.seq(v);var chunk__27832_27838 = null;var count__27833_27839 = (0);var i__27834_27840 = (0);while(true){
if((i__27834_27840 < count__27833_27839))
{var x_27841 = chunk__27832_27838.cljs$core$IIndexed$_nth$arity$2(null,i__27834_27840);ret.push(x_27841);
{
var G__27842 = seq__27831_27837;
var G__27843 = chunk__27832_27838;
var G__27844 = count__27833_27839;
var G__27845 = (i__27834_27840 + (1));
seq__27831_27837 = G__27842;
chunk__27832_27838 = G__27843;
count__27833_27839 = G__27844;
i__27834_27840 = G__27845;
continue;
}
} else
{var temp__4126__auto___27846 = cljs.core.seq(seq__27831_27837);if(temp__4126__auto___27846)
{var seq__27831_27847__$1 = temp__4126__auto___27846;if(cljs.core.chunked_seq_QMARK_(seq__27831_27847__$1))
{var c__4410__auto___27848 = cljs.core.chunk_first(seq__27831_27847__$1);{
var G__27849 = cljs.core.chunk_rest(seq__27831_27847__$1);
var G__27850 = c__4410__auto___27848;
var G__27851 = cljs.core.count(c__4410__auto___27848);
var G__27852 = (0);
seq__27831_27837 = G__27849;
chunk__27832_27838 = G__27850;
count__27833_27839 = G__27851;
i__27834_27840 = G__27852;
continue;
}
} else
{var x_27853 = cljs.core.first(seq__27831_27847__$1);ret.push(x_27853);
{
var G__27854 = cljs.core.next(seq__27831_27847__$1);
var G__27855 = null;
var G__27856 = (0);
var G__27857 = (0);
seq__27831_27837 = G__27854;
chunk__27832_27838 = G__27855;
count__27833_27839 = G__27856;
i__27834_27840 = G__27857;
continue;
}
}
} else
{}
}
break;
}
var G__27835 = "array";var G__27836 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__27835,G__27836) : com.cognitect.transit.tagged.call(null,G__27835,G__27836));
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__27858_27864 = cljs.core.seq(v);var chunk__27859_27865 = null;var count__27860_27866 = (0);var i__27861_27867 = (0);while(true){
if((i__27861_27867 < count__27860_27866))
{var x_27868 = chunk__27859_27865.cljs$core$IIndexed$_nth$arity$2(null,i__27861_27867);ret.push(x_27868);
{
var G__27869 = seq__27858_27864;
var G__27870 = chunk__27859_27865;
var G__27871 = count__27860_27866;
var G__27872 = (i__27861_27867 + (1));
seq__27858_27864 = G__27869;
chunk__27859_27865 = G__27870;
count__27860_27866 = G__27871;
i__27861_27867 = G__27872;
continue;
}
} else
{var temp__4126__auto___27873 = cljs.core.seq(seq__27858_27864);if(temp__4126__auto___27873)
{var seq__27858_27874__$1 = temp__4126__auto___27873;if(cljs.core.chunked_seq_QMARK_(seq__27858_27874__$1))
{var c__4410__auto___27875 = cljs.core.chunk_first(seq__27858_27874__$1);{
var G__27876 = cljs.core.chunk_rest(seq__27858_27874__$1);
var G__27877 = c__4410__auto___27875;
var G__27878 = cljs.core.count(c__4410__auto___27875);
var G__27879 = (0);
seq__27858_27864 = G__27876;
chunk__27859_27865 = G__27877;
count__27860_27866 = G__27878;
i__27861_27867 = G__27879;
continue;
}
} else
{var x_27880 = cljs.core.first(seq__27858_27874__$1);ret.push(x_27880);
{
var G__27881 = cljs.core.next(seq__27858_27874__$1);
var G__27882 = null;
var G__27883 = (0);
var G__27884 = (0);
seq__27858_27864 = G__27881;
chunk__27859_27865 = G__27882;
count__27860_27866 = G__27883;
i__27861_27867 = G__27884;
continue;
}
}
} else
{}
}
break;
}
var G__27862 = "array";var G__27863 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__27862,G__27863) : com.cognitect.transit.tagged.call(null,G__27862,G__27863));
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__27885_27889 = cljs.core.seq(v);var chunk__27886_27890 = null;var count__27887_27891 = (0);var i__27888_27892 = (0);while(true){
if((i__27888_27892 < count__27887_27891))
{var x_27893 = chunk__27886_27890.cljs$core$IIndexed$_nth$arity$2(null,i__27888_27892);ret.push(x_27893);
{
var G__27894 = seq__27885_27889;
var G__27895 = chunk__27886_27890;
var G__27896 = count__27887_27891;
var G__27897 = (i__27888_27892 + (1));
seq__27885_27889 = G__27894;
chunk__27886_27890 = G__27895;
count__27887_27891 = G__27896;
i__27888_27892 = G__27897;
continue;
}
} else
{var temp__4126__auto___27898 = cljs.core.seq(seq__27885_27889);if(temp__4126__auto___27898)
{var seq__27885_27899__$1 = temp__4126__auto___27898;if(cljs.core.chunked_seq_QMARK_(seq__27885_27899__$1))
{var c__4410__auto___27900 = cljs.core.chunk_first(seq__27885_27899__$1);{
var G__27901 = cljs.core.chunk_rest(seq__27885_27899__$1);
var G__27902 = c__4410__auto___27900;
var G__27903 = cljs.core.count(c__4410__auto___27900);
var G__27904 = (0);
seq__27885_27889 = G__27901;
chunk__27886_27890 = G__27902;
count__27887_27891 = G__27903;
i__27888_27892 = G__27904;
continue;
}
} else
{var x_27905 = cljs.core.first(seq__27885_27899__$1);ret.push(x_27905);
{
var G__27906 = cljs.core.next(seq__27885_27899__$1);
var G__27907 = null;
var G__27908 = (0);
var G__27909 = (0);
seq__27885_27889 = G__27906;
chunk__27886_27890 = G__27907;
count__27887_27891 = G__27908;
i__27888_27892 = G__27909;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__27928 = cljs.core.name(type);var G__27929 = cognitect.transit.opts_merge({"unpack": ((function (G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27933 = cljs.core.clone(handlers);x27933.forEach = ((function (x27933,G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__27934 = cljs.core.seq(coll);var chunk__27935 = null;var count__27936 = (0);var i__27937 = (0);while(true){
if((i__27937 < count__27936))
{var vec__27938 = chunk__27935.cljs$core$IIndexed$_nth$arity$2(null,i__27937);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(1),null);var G__27939_27944 = v;var G__27940_27945 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27939_27944,G__27940_27945) : f.call(null,G__27939_27944,G__27940_27945));
{
var G__27946 = seq__27934;
var G__27947 = chunk__27935;
var G__27948 = count__27936;
var G__27949 = (i__27937 + (1));
seq__27934 = G__27946;
chunk__27935 = G__27947;
count__27936 = G__27948;
i__27937 = G__27949;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__27934);if(temp__4126__auto__)
{var seq__27934__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27934__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__27934__$1);{
var G__27950 = cljs.core.chunk_rest(seq__27934__$1);
var G__27951 = c__4410__auto__;
var G__27952 = cljs.core.count(c__4410__auto__);
var G__27953 = (0);
seq__27934 = G__27950;
chunk__27935 = G__27951;
count__27936 = G__27952;
i__27937 = G__27953;
continue;
}
} else
{var vec__27941 = cljs.core.first(seq__27934__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,(1),null);var G__27942_27954 = v;var G__27943_27955 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27942_27954,G__27943_27955) : f.call(null,G__27942_27954,G__27943_27955));
{
var G__27956 = cljs.core.next(seq__27934__$1);
var G__27957 = null;
var G__27958 = (0);
var G__27959 = (0);
seq__27934 = G__27956;
chunk__27935 = G__27957;
count__27936 = G__27958;
i__27937 = G__27959;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x27933,G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x27933;
})(), "objectBuilder": ((function (G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__27930 = obj;G__27930.push((function (){var G__27931 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__27931) : kfn.call(null,G__27931));
})(),(function (){var G__27932 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__27932) : vfn.call(null,G__27932));
})());
return G__27930;
});})(G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__27928,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$96)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__27928,G__27929) : com.cognitect.transit.writer.call(null,G__27928,G__27929));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t27974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t27974 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta27975){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta27975 = meta27975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t27974.cljs$lang$type = true;
cognitect.transit.t27974.cljs$lang$ctorStr = "cognitect.transit/t27974";
cognitect.transit.t27974.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t27974");
});
cognitect.transit.t27974.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__27977 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__27977) : self__.tag_fn.call(null,G__27977));
});
cognitect.transit.t27974.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__27978 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__27978) : self__.rep_fn.call(null,G__27978));
});
cognitect.transit.t27974.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__27979 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__27979) : self__.str_rep_fn.call(null,G__27979));
} else
{return null;
}
});
cognitect.transit.t27974.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t27974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27976){var self__ = this;
var _27976__$1 = this;return self__.meta27975;
});
cognitect.transit.t27974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27976,meta27975__$1){var self__ = this;
var _27976__$1 = this;return (new cognitect.transit.t27974(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta27975__$1));
});
cognitect.transit.__GT_t27974 = (function __GT_t27974(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27975){return (new cognitect.transit.t27974(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27975));
});
}
return (new cognitect.transit.t27974(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__27982 = tag;var G__27983 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__27982,G__27983) : com.cognitect.transit.types.taggedValue.call(null,G__27982,G__27983));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__27985 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__27985) : com.cognitect.transit.types.isTaggedValue.call(null,G__27985));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__27987 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__27987) : com.cognitect.transit.types.integer.call(null,G__27987));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__27989 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__27989) : com.cognitect.transit.types.isInteger.call(null,G__27989));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__27991 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__27991) : com.cognitect.transit.types.bigInteger.call(null,G__27991));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__27993 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__27993) : com.cognitect.transit.types.isBigInteger.call(null,G__27993));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__27995 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__27995) : com.cognitect.transit.types.bigDecimalValue.call(null,G__27995));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__27997 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__27997) : com.cognitect.transit.types.isBigDecimal.call(null,G__27997));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__27999 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__27999) : com.cognitect.transit.types.uri.call(null,G__27999));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__28001 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__28001) : com.cognitect.transit.types.isURI.call(null,G__28001));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__28003 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__28003) : com.cognitect.transit.types.uuid.call(null,G__28003));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__28005 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__28005) : com.cognitect.transit.types.isUUID.call(null,G__28005));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__28007 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__28007) : com.cognitect.transit.types.binary.call(null,G__28007));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__28009 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__28009) : com.cognitect.transit.types.isBinary.call(null,G__28009));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__28011 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__28011) : com.cognitect.transit.types.quoted.call(null,G__28011));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__28013 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__28013) : com.cognitect.transit.types.isQuoted.call(null,G__28013));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__28015 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__28015) : com.cognitect.transit.types.link.call(null,G__28015));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__28017 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__28017) : com.cognitect.transit.types.isLink.call(null,G__28017));
});
