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
cljs.core.enable_console_print_BANG_();
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23778 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23778) : com.cognitect.transit.eq.hashCode.call(null,G__23778));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23779 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23779) : com.cognitect.transit.eq.hashCode.call(null,G__23779));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23780 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23780) : com.cognitect.transit.eq.hashCode.call(null,G__23780));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23785_23789 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23786_23790 = null;var count__23787_23791 = (0);var i__23788_23792 = (0);while(true){
if((i__23788_23792 < count__23787_23791))
{var k_23793 = chunk__23786_23790.cljs$core$IIndexed$_nth$arity$2(null,i__23788_23792);var v_23794 = (b[k_23793]);(a[k_23793] = v_23794);
{
var G__23795 = seq__23785_23789;
var G__23796 = chunk__23786_23790;
var G__23797 = count__23787_23791;
var G__23798 = (i__23788_23792 + (1));
seq__23785_23789 = G__23795;
chunk__23786_23790 = G__23796;
count__23787_23791 = G__23797;
i__23788_23792 = G__23798;
continue;
}
} else
{var temp__4126__auto___23799 = cljs.core.seq(seq__23785_23789);if(temp__4126__auto___23799)
{var seq__23785_23800__$1 = temp__4126__auto___23799;if(cljs.core.chunked_seq_QMARK_(seq__23785_23800__$1))
{var c__4410__auto___23801 = cljs.core.chunk_first(seq__23785_23800__$1);{
var G__23802 = cljs.core.chunk_rest(seq__23785_23800__$1);
var G__23803 = c__4410__auto___23801;
var G__23804 = cljs.core.count(c__4410__auto___23801);
var G__23805 = (0);
seq__23785_23789 = G__23802;
chunk__23786_23790 = G__23803;
count__23787_23791 = G__23804;
i__23788_23792 = G__23805;
continue;
}
} else
{var k_23806 = cljs.core.first(seq__23785_23800__$1);var v_23807 = (b[k_23806]);(a[k_23806] = v_23807);
{
var G__23808 = cljs.core.next(seq__23785_23800__$1);
var G__23809 = null;
var G__23810 = (0);
var G__23811 = (0);
seq__23785_23789 = G__23808;
chunk__23786_23790 = G__23809;
count__23787_23791 = G__23810;
i__23788_23792 = G__23811;
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
var _ = this;var G__23812 = arr;var G__23813 = true;var G__23814 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23812,G__23813,G__23814) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23812,G__23813,G__23814));
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
var _ = this;var G__23815 = arr;var G__23816 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23815,G__23816) : cljs.core.PersistentVector.fromArray.call(null,G__23815,G__23816));
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
var reader__2 = (function (type,opts){var G__23821 = cljs.core.name(type);var G__23822 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23821){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23823 = (i + (2));
var G__23824 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23823;
ret = G__23824;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23821))
, "list": ((function (G__23821){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23821))
, "set": ((function (G__23821){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23821))
, ":": ((function (G__23821){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23821))
, "$": ((function (G__23821){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23821))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23821,G__23822) : com.cognitect.transit.reader.call(null,G__23821,G__23822));
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
var _ = this;var ret = [];var seq__23825_23831 = cljs.core.seq(v);var chunk__23826_23832 = null;var count__23827_23833 = (0);var i__23828_23834 = (0);while(true){
if((i__23828_23834 < count__23827_23833))
{var x_23835 = chunk__23826_23832.cljs$core$IIndexed$_nth$arity$2(null,i__23828_23834);ret.push(x_23835);
{
var G__23836 = seq__23825_23831;
var G__23837 = chunk__23826_23832;
var G__23838 = count__23827_23833;
var G__23839 = (i__23828_23834 + (1));
seq__23825_23831 = G__23836;
chunk__23826_23832 = G__23837;
count__23827_23833 = G__23838;
i__23828_23834 = G__23839;
continue;
}
} else
{var temp__4126__auto___23840 = cljs.core.seq(seq__23825_23831);if(temp__4126__auto___23840)
{var seq__23825_23841__$1 = temp__4126__auto___23840;if(cljs.core.chunked_seq_QMARK_(seq__23825_23841__$1))
{var c__4410__auto___23842 = cljs.core.chunk_first(seq__23825_23841__$1);{
var G__23843 = cljs.core.chunk_rest(seq__23825_23841__$1);
var G__23844 = c__4410__auto___23842;
var G__23845 = cljs.core.count(c__4410__auto___23842);
var G__23846 = (0);
seq__23825_23831 = G__23843;
chunk__23826_23832 = G__23844;
count__23827_23833 = G__23845;
i__23828_23834 = G__23846;
continue;
}
} else
{var x_23847 = cljs.core.first(seq__23825_23841__$1);ret.push(x_23847);
{
var G__23848 = cljs.core.next(seq__23825_23841__$1);
var G__23849 = null;
var G__23850 = (0);
var G__23851 = (0);
seq__23825_23831 = G__23848;
chunk__23826_23832 = G__23849;
count__23827_23833 = G__23850;
i__23828_23834 = G__23851;
continue;
}
}
} else
{}
}
break;
}
var G__23829 = "array";var G__23830 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23829,G__23830) : com.cognitect.transit.tagged.call(null,G__23829,G__23830));
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
var _ = this;var ret = [];var seq__23852_23858 = cljs.core.seq(v);var chunk__23853_23859 = null;var count__23854_23860 = (0);var i__23855_23861 = (0);while(true){
if((i__23855_23861 < count__23854_23860))
{var x_23862 = chunk__23853_23859.cljs$core$IIndexed$_nth$arity$2(null,i__23855_23861);ret.push(x_23862);
{
var G__23863 = seq__23852_23858;
var G__23864 = chunk__23853_23859;
var G__23865 = count__23854_23860;
var G__23866 = (i__23855_23861 + (1));
seq__23852_23858 = G__23863;
chunk__23853_23859 = G__23864;
count__23854_23860 = G__23865;
i__23855_23861 = G__23866;
continue;
}
} else
{var temp__4126__auto___23867 = cljs.core.seq(seq__23852_23858);if(temp__4126__auto___23867)
{var seq__23852_23868__$1 = temp__4126__auto___23867;if(cljs.core.chunked_seq_QMARK_(seq__23852_23868__$1))
{var c__4410__auto___23869 = cljs.core.chunk_first(seq__23852_23868__$1);{
var G__23870 = cljs.core.chunk_rest(seq__23852_23868__$1);
var G__23871 = c__4410__auto___23869;
var G__23872 = cljs.core.count(c__4410__auto___23869);
var G__23873 = (0);
seq__23852_23858 = G__23870;
chunk__23853_23859 = G__23871;
count__23854_23860 = G__23872;
i__23855_23861 = G__23873;
continue;
}
} else
{var x_23874 = cljs.core.first(seq__23852_23868__$1);ret.push(x_23874);
{
var G__23875 = cljs.core.next(seq__23852_23868__$1);
var G__23876 = null;
var G__23877 = (0);
var G__23878 = (0);
seq__23852_23858 = G__23875;
chunk__23853_23859 = G__23876;
count__23854_23860 = G__23877;
i__23855_23861 = G__23878;
continue;
}
}
} else
{}
}
break;
}
var G__23856 = "array";var G__23857 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23856,G__23857) : com.cognitect.transit.tagged.call(null,G__23856,G__23857));
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
var _ = this;var ret = [];var seq__23879_23883 = cljs.core.seq(v);var chunk__23880_23884 = null;var count__23881_23885 = (0);var i__23882_23886 = (0);while(true){
if((i__23882_23886 < count__23881_23885))
{var x_23887 = chunk__23880_23884.cljs$core$IIndexed$_nth$arity$2(null,i__23882_23886);ret.push(x_23887);
{
var G__23888 = seq__23879_23883;
var G__23889 = chunk__23880_23884;
var G__23890 = count__23881_23885;
var G__23891 = (i__23882_23886 + (1));
seq__23879_23883 = G__23888;
chunk__23880_23884 = G__23889;
count__23881_23885 = G__23890;
i__23882_23886 = G__23891;
continue;
}
} else
{var temp__4126__auto___23892 = cljs.core.seq(seq__23879_23883);if(temp__4126__auto___23892)
{var seq__23879_23893__$1 = temp__4126__auto___23892;if(cljs.core.chunked_seq_QMARK_(seq__23879_23893__$1))
{var c__4410__auto___23894 = cljs.core.chunk_first(seq__23879_23893__$1);{
var G__23895 = cljs.core.chunk_rest(seq__23879_23893__$1);
var G__23896 = c__4410__auto___23894;
var G__23897 = cljs.core.count(c__4410__auto___23894);
var G__23898 = (0);
seq__23879_23883 = G__23895;
chunk__23880_23884 = G__23896;
count__23881_23885 = G__23897;
i__23882_23886 = G__23898;
continue;
}
} else
{var x_23899 = cljs.core.first(seq__23879_23893__$1);ret.push(x_23899);
{
var G__23900 = cljs.core.next(seq__23879_23893__$1);
var G__23901 = null;
var G__23902 = (0);
var G__23903 = (0);
seq__23879_23883 = G__23900;
chunk__23880_23884 = G__23901;
count__23881_23885 = G__23902;
i__23882_23886 = G__23903;
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
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23922 = cljs.core.name(type);var G__23923 = cognitect.transit.opts_merge({"unpack": ((function (G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23927 = cljs.core.clone(handlers);x23927.forEach = ((function (x23927,G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23928 = cljs.core.seq(coll);var chunk__23929 = null;var count__23930 = (0);var i__23931 = (0);while(true){
if((i__23931 < count__23930))
{var vec__23932 = chunk__23929.cljs$core$IIndexed$_nth$arity$2(null,i__23931);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(1),null);var G__23933_23938 = v;var G__23934_23939 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23933_23938,G__23934_23939) : f.call(null,G__23933_23938,G__23934_23939));
{
var G__23940 = seq__23928;
var G__23941 = chunk__23929;
var G__23942 = count__23930;
var G__23943 = (i__23931 + (1));
seq__23928 = G__23940;
chunk__23929 = G__23941;
count__23930 = G__23942;
i__23931 = G__23943;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23928);if(temp__4126__auto__)
{var seq__23928__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23928__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23928__$1);{
var G__23944 = cljs.core.chunk_rest(seq__23928__$1);
var G__23945 = c__4410__auto__;
var G__23946 = cljs.core.count(c__4410__auto__);
var G__23947 = (0);
seq__23928 = G__23944;
chunk__23929 = G__23945;
count__23930 = G__23946;
i__23931 = G__23947;
continue;
}
} else
{var vec__23935 = cljs.core.first(seq__23928__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23935,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23935,(1),null);var G__23936_23948 = v;var G__23937_23949 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23936_23948,G__23937_23949) : f.call(null,G__23936_23948,G__23937_23949));
{
var G__23950 = cljs.core.next(seq__23928__$1);
var G__23951 = null;
var G__23952 = (0);
var G__23953 = (0);
seq__23928 = G__23950;
chunk__23929 = G__23951;
count__23930 = G__23952;
i__23931 = G__23953;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23927,G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23927;
})(), "objectBuilder": ((function (G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23924 = obj;G__23924.push((function (){var G__23925 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23925) : kfn.call(null,G__23925));
})(),(function (){var G__23926 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23926) : vfn.call(null,G__23926));
})());
return G__23924;
});})(G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23922,G__23923) : com.cognitect.transit.writer.call(null,G__23922,G__23923));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23968 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23969){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23969 = meta23969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23968.cljs$lang$type = true;
cognitect.transit.t23968.cljs$lang$ctorStr = "cognitect.transit/t23968";
cognitect.transit.t23968.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23968");
});
cognitect.transit.t23968.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23971 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23971) : self__.tag_fn.call(null,G__23971));
});
cognitect.transit.t23968.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23972 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23972) : self__.rep_fn.call(null,G__23972));
});
cognitect.transit.t23968.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23973 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23973) : self__.str_rep_fn.call(null,G__23973));
} else
{return null;
}
});
cognitect.transit.t23968.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23970){var self__ = this;
var _23970__$1 = this;return self__.meta23969;
});
cognitect.transit.t23968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23970,meta23969__$1){var self__ = this;
var _23970__$1 = this;return (new cognitect.transit.t23968(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23969__$1));
});
cognitect.transit.__GT_t23968 = (function __GT_t23968(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23969){return (new cognitect.transit.t23968(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23969));
});
}
return (new cognitect.transit.t23968(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23976 = tag;var G__23977 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23976,G__23977) : com.cognitect.transit.types.taggedValue.call(null,G__23976,G__23977));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23979 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23979) : com.cognitect.transit.types.isTaggedValue.call(null,G__23979));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23981 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23981) : com.cognitect.transit.types.integer.call(null,G__23981));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23983 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23983) : com.cognitect.transit.types.isInteger.call(null,G__23983));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23985 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23985) : com.cognitect.transit.types.bigInteger.call(null,G__23985));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23987 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23987) : com.cognitect.transit.types.isBigInteger.call(null,G__23987));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23989 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23989) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23989));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23991 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23991) : com.cognitect.transit.types.isBigDecimal.call(null,G__23991));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23993 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23993) : com.cognitect.transit.types.uri.call(null,G__23993));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23995 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23995) : com.cognitect.transit.types.isURI.call(null,G__23995));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23997 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23997) : com.cognitect.transit.types.uuid.call(null,G__23997));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23999 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23999) : com.cognitect.transit.types.isUUID.call(null,G__23999));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__24001 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__24001) : com.cognitect.transit.types.binary.call(null,G__24001));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__24003 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__24003) : com.cognitect.transit.types.isBinary.call(null,G__24003));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__24005 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__24005) : com.cognitect.transit.types.quoted.call(null,G__24005));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__24007 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__24007) : com.cognitect.transit.types.isQuoted.call(null,G__24007));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__24009 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__24009) : com.cognitect.transit.types.link.call(null,G__24009));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__24011 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__24011) : com.cognitect.transit.types.isLink.call(null,G__24011));
});
