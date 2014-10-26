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
cljs.core.enable_console_print_BANG_.call(null);
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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__32922_32926 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__32923_32927 = null;var count__32924_32928 = (0);var i__32925_32929 = (0);while(true){
if((i__32925_32929 < count__32924_32928))
{var k_32930 = cljs.core._nth.call(null,chunk__32923_32927,i__32925_32929);var v_32931 = (b[k_32930]);(a[k_32930] = v_32931);
{
var G__32932 = seq__32922_32926;
var G__32933 = chunk__32923_32927;
var G__32934 = count__32924_32928;
var G__32935 = (i__32925_32929 + (1));
seq__32922_32926 = G__32932;
chunk__32923_32927 = G__32933;
count__32924_32928 = G__32934;
i__32925_32929 = G__32935;
continue;
}
} else
{var temp__4126__auto___32936 = cljs.core.seq.call(null,seq__32922_32926);if(temp__4126__auto___32936)
{var seq__32922_32937__$1 = temp__4126__auto___32936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32922_32937__$1))
{var c__13316__auto___32938 = cljs.core.chunk_first.call(null,seq__32922_32937__$1);{
var G__32939 = cljs.core.chunk_rest.call(null,seq__32922_32937__$1);
var G__32940 = c__13316__auto___32938;
var G__32941 = cljs.core.count.call(null,c__13316__auto___32938);
var G__32942 = (0);
seq__32922_32926 = G__32939;
chunk__32923_32927 = G__32940;
count__32924_32928 = G__32941;
i__32925_32929 = G__32942;
continue;
}
} else
{var k_32943 = cljs.core.first.call(null,seq__32922_32937__$1);var v_32944 = (b[k_32943]);(a[k_32943] = v_32944);
{
var G__32945 = cljs.core.next.call(null,seq__32922_32937__$1);
var G__32946 = null;
var G__32947 = (0);
var G__32948 = (0);
seq__32922_32926 = G__32945;
chunk__32923_32927 = G__32946;
count__32924_32928 = G__32947;
i__32925_32929 = G__32948;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
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
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__32949 = (i + (2));
var G__32950 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32949;
ret = G__32950;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__32951_32955 = cljs.core.seq.call(null,v);var chunk__32952_32956 = null;var count__32953_32957 = (0);var i__32954_32958 = (0);while(true){
if((i__32954_32958 < count__32953_32957))
{var x_32959 = cljs.core._nth.call(null,chunk__32952_32956,i__32954_32958);ret.push(x_32959);
{
var G__32960 = seq__32951_32955;
var G__32961 = chunk__32952_32956;
var G__32962 = count__32953_32957;
var G__32963 = (i__32954_32958 + (1));
seq__32951_32955 = G__32960;
chunk__32952_32956 = G__32961;
count__32953_32957 = G__32962;
i__32954_32958 = G__32963;
continue;
}
} else
{var temp__4126__auto___32964 = cljs.core.seq.call(null,seq__32951_32955);if(temp__4126__auto___32964)
{var seq__32951_32965__$1 = temp__4126__auto___32964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32951_32965__$1))
{var c__13316__auto___32966 = cljs.core.chunk_first.call(null,seq__32951_32965__$1);{
var G__32967 = cljs.core.chunk_rest.call(null,seq__32951_32965__$1);
var G__32968 = c__13316__auto___32966;
var G__32969 = cljs.core.count.call(null,c__13316__auto___32966);
var G__32970 = (0);
seq__32951_32955 = G__32967;
chunk__32952_32956 = G__32968;
count__32953_32957 = G__32969;
i__32954_32958 = G__32970;
continue;
}
} else
{var x_32971 = cljs.core.first.call(null,seq__32951_32965__$1);ret.push(x_32971);
{
var G__32972 = cljs.core.next.call(null,seq__32951_32965__$1);
var G__32973 = null;
var G__32974 = (0);
var G__32975 = (0);
seq__32951_32955 = G__32972;
chunk__32952_32956 = G__32973;
count__32953_32957 = G__32974;
i__32954_32958 = G__32975;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__32976_32980 = cljs.core.seq.call(null,v);var chunk__32977_32981 = null;var count__32978_32982 = (0);var i__32979_32983 = (0);while(true){
if((i__32979_32983 < count__32978_32982))
{var x_32984 = cljs.core._nth.call(null,chunk__32977_32981,i__32979_32983);ret.push(x_32984);
{
var G__32985 = seq__32976_32980;
var G__32986 = chunk__32977_32981;
var G__32987 = count__32978_32982;
var G__32988 = (i__32979_32983 + (1));
seq__32976_32980 = G__32985;
chunk__32977_32981 = G__32986;
count__32978_32982 = G__32987;
i__32979_32983 = G__32988;
continue;
}
} else
{var temp__4126__auto___32989 = cljs.core.seq.call(null,seq__32976_32980);if(temp__4126__auto___32989)
{var seq__32976_32990__$1 = temp__4126__auto___32989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32976_32990__$1))
{var c__13316__auto___32991 = cljs.core.chunk_first.call(null,seq__32976_32990__$1);{
var G__32992 = cljs.core.chunk_rest.call(null,seq__32976_32990__$1);
var G__32993 = c__13316__auto___32991;
var G__32994 = cljs.core.count.call(null,c__13316__auto___32991);
var G__32995 = (0);
seq__32976_32980 = G__32992;
chunk__32977_32981 = G__32993;
count__32978_32982 = G__32994;
i__32979_32983 = G__32995;
continue;
}
} else
{var x_32996 = cljs.core.first.call(null,seq__32976_32990__$1);ret.push(x_32996);
{
var G__32997 = cljs.core.next.call(null,seq__32976_32990__$1);
var G__32998 = null;
var G__32999 = (0);
var G__33000 = (0);
seq__32976_32980 = G__32997;
chunk__32977_32981 = G__32998;
count__32978_32982 = G__32999;
i__32979_32983 = G__33000;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__33001_33005 = cljs.core.seq.call(null,v);var chunk__33002_33006 = null;var count__33003_33007 = (0);var i__33004_33008 = (0);while(true){
if((i__33004_33008 < count__33003_33007))
{var x_33009 = cljs.core._nth.call(null,chunk__33002_33006,i__33004_33008);ret.push(x_33009);
{
var G__33010 = seq__33001_33005;
var G__33011 = chunk__33002_33006;
var G__33012 = count__33003_33007;
var G__33013 = (i__33004_33008 + (1));
seq__33001_33005 = G__33010;
chunk__33002_33006 = G__33011;
count__33003_33007 = G__33012;
i__33004_33008 = G__33013;
continue;
}
} else
{var temp__4126__auto___33014 = cljs.core.seq.call(null,seq__33001_33005);if(temp__4126__auto___33014)
{var seq__33001_33015__$1 = temp__4126__auto___33014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33001_33015__$1))
{var c__13316__auto___33016 = cljs.core.chunk_first.call(null,seq__33001_33015__$1);{
var G__33017 = cljs.core.chunk_rest.call(null,seq__33001_33015__$1);
var G__33018 = c__13316__auto___33016;
var G__33019 = cljs.core.count.call(null,c__13316__auto___33016);
var G__33020 = (0);
seq__33001_33005 = G__33017;
chunk__33002_33006 = G__33018;
count__33003_33007 = G__33019;
i__33004_33008 = G__33020;
continue;
}
} else
{var x_33021 = cljs.core.first.call(null,seq__33001_33015__$1);ret.push(x_33021);
{
var G__33022 = cljs.core.next.call(null,seq__33001_33015__$1);
var G__33023 = null;
var G__33024 = (0);
var G__33025 = (0);
seq__33001_33005 = G__33022;
chunk__33002_33006 = G__33023;
count__33003_33007 = G__33024;
i__33004_33008 = G__33025;
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
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x33035 = cljs.core.clone.call(null,handlers);x33035.forEach = ((function (x33035,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__33036 = cljs.core.seq.call(null,coll);var chunk__33037 = null;var count__33038 = (0);var i__33039 = (0);while(true){
if((i__33039 < count__33038))
{var vec__33040 = cljs.core._nth.call(null,chunk__33037,i__33039);var k = cljs.core.nth.call(null,vec__33040,(0),null);var v = cljs.core.nth.call(null,vec__33040,(1),null);f.call(null,v,k);
{
var G__33042 = seq__33036;
var G__33043 = chunk__33037;
var G__33044 = count__33038;
var G__33045 = (i__33039 + (1));
seq__33036 = G__33042;
chunk__33037 = G__33043;
count__33038 = G__33044;
i__33039 = G__33045;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33036);if(temp__4126__auto__)
{var seq__33036__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33036__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__33036__$1);{
var G__33046 = cljs.core.chunk_rest.call(null,seq__33036__$1);
var G__33047 = c__13316__auto__;
var G__33048 = cljs.core.count.call(null,c__13316__auto__);
var G__33049 = (0);
seq__33036 = G__33046;
chunk__33037 = G__33047;
count__33038 = G__33048;
i__33039 = G__33049;
continue;
}
} else
{var vec__33041 = cljs.core.first.call(null,seq__33036__$1);var k = cljs.core.nth.call(null,vec__33041,(0),null);var v = cljs.core.nth.call(null,vec__33041,(1),null);f.call(null,v,k);
{
var G__33050 = cljs.core.next.call(null,seq__33036__$1);
var G__33051 = null;
var G__33052 = (0);
var G__33053 = (0);
seq__33036 = G__33050;
chunk__33037 = G__33051;
count__33038 = G__33052;
i__33039 = G__33053;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x33035,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x33035;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__33034 = obj;G__33034.push(kfn.call(null,k),vfn.call(null,v));
return G__33034;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t33057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t33057 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta33058){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta33058 = meta33058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t33057.cljs$lang$type = true;
cognitect.transit.t33057.cljs$lang$ctorStr = "cognitect.transit/t33057";
cognitect.transit.t33057.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t33057");
});
cognitect.transit.t33057.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t33057.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t33057.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t33057.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t33057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33059){var self__ = this;
var _33059__$1 = this;return self__.meta33058;
});
cognitect.transit.t33057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33059,meta33058__$1){var self__ = this;
var _33059__$1 = this;return (new cognitect.transit.t33057(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta33058__$1));
});
cognitect.transit.__GT_t33057 = (function __GT_t33057(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33058){return (new cognitect.transit.t33057(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33058));
});
}
return (new cognitect.transit.t33057(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map