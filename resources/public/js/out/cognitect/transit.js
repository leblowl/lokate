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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__20813_20817 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__20814_20818 = null;var count__20815_20819 = (0);var i__20816_20820 = (0);while(true){
if((i__20816_20820 < count__20815_20819))
{var k_20821 = cljs.core._nth.call(null,chunk__20814_20818,i__20816_20820);var v_20822 = (b[k_20821]);(a[k_20821] = v_20822);
{
var G__20823 = seq__20813_20817;
var G__20824 = chunk__20814_20818;
var G__20825 = count__20815_20819;
var G__20826 = (i__20816_20820 + (1));
seq__20813_20817 = G__20823;
chunk__20814_20818 = G__20824;
count__20815_20819 = G__20825;
i__20816_20820 = G__20826;
continue;
}
} else
{var temp__4126__auto___20827 = cljs.core.seq.call(null,seq__20813_20817);if(temp__4126__auto___20827)
{var seq__20813_20828__$1 = temp__4126__auto___20827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20813_20828__$1))
{var c__13316__auto___20829 = cljs.core.chunk_first.call(null,seq__20813_20828__$1);{
var G__20830 = cljs.core.chunk_rest.call(null,seq__20813_20828__$1);
var G__20831 = c__13316__auto___20829;
var G__20832 = cljs.core.count.call(null,c__13316__auto___20829);
var G__20833 = (0);
seq__20813_20817 = G__20830;
chunk__20814_20818 = G__20831;
count__20815_20819 = G__20832;
i__20816_20820 = G__20833;
continue;
}
} else
{var k_20834 = cljs.core.first.call(null,seq__20813_20828__$1);var v_20835 = (b[k_20834]);(a[k_20834] = v_20835);
{
var G__20836 = cljs.core.next.call(null,seq__20813_20828__$1);
var G__20837 = null;
var G__20838 = (0);
var G__20839 = (0);
seq__20813_20817 = G__20836;
chunk__20814_20818 = G__20837;
count__20815_20819 = G__20838;
i__20816_20820 = G__20839;
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
var G__20840 = (i + (2));
var G__20841 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20840;
ret = G__20841;
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
var _ = this;var ret = [];var seq__20842_20846 = cljs.core.seq.call(null,v);var chunk__20843_20847 = null;var count__20844_20848 = (0);var i__20845_20849 = (0);while(true){
if((i__20845_20849 < count__20844_20848))
{var x_20850 = cljs.core._nth.call(null,chunk__20843_20847,i__20845_20849);ret.push(x_20850);
{
var G__20851 = seq__20842_20846;
var G__20852 = chunk__20843_20847;
var G__20853 = count__20844_20848;
var G__20854 = (i__20845_20849 + (1));
seq__20842_20846 = G__20851;
chunk__20843_20847 = G__20852;
count__20844_20848 = G__20853;
i__20845_20849 = G__20854;
continue;
}
} else
{var temp__4126__auto___20855 = cljs.core.seq.call(null,seq__20842_20846);if(temp__4126__auto___20855)
{var seq__20842_20856__$1 = temp__4126__auto___20855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20842_20856__$1))
{var c__13316__auto___20857 = cljs.core.chunk_first.call(null,seq__20842_20856__$1);{
var G__20858 = cljs.core.chunk_rest.call(null,seq__20842_20856__$1);
var G__20859 = c__13316__auto___20857;
var G__20860 = cljs.core.count.call(null,c__13316__auto___20857);
var G__20861 = (0);
seq__20842_20846 = G__20858;
chunk__20843_20847 = G__20859;
count__20844_20848 = G__20860;
i__20845_20849 = G__20861;
continue;
}
} else
{var x_20862 = cljs.core.first.call(null,seq__20842_20856__$1);ret.push(x_20862);
{
var G__20863 = cljs.core.next.call(null,seq__20842_20856__$1);
var G__20864 = null;
var G__20865 = (0);
var G__20866 = (0);
seq__20842_20846 = G__20863;
chunk__20843_20847 = G__20864;
count__20844_20848 = G__20865;
i__20845_20849 = G__20866;
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
var _ = this;var ret = [];var seq__20867_20871 = cljs.core.seq.call(null,v);var chunk__20868_20872 = null;var count__20869_20873 = (0);var i__20870_20874 = (0);while(true){
if((i__20870_20874 < count__20869_20873))
{var x_20875 = cljs.core._nth.call(null,chunk__20868_20872,i__20870_20874);ret.push(x_20875);
{
var G__20876 = seq__20867_20871;
var G__20877 = chunk__20868_20872;
var G__20878 = count__20869_20873;
var G__20879 = (i__20870_20874 + (1));
seq__20867_20871 = G__20876;
chunk__20868_20872 = G__20877;
count__20869_20873 = G__20878;
i__20870_20874 = G__20879;
continue;
}
} else
{var temp__4126__auto___20880 = cljs.core.seq.call(null,seq__20867_20871);if(temp__4126__auto___20880)
{var seq__20867_20881__$1 = temp__4126__auto___20880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20867_20881__$1))
{var c__13316__auto___20882 = cljs.core.chunk_first.call(null,seq__20867_20881__$1);{
var G__20883 = cljs.core.chunk_rest.call(null,seq__20867_20881__$1);
var G__20884 = c__13316__auto___20882;
var G__20885 = cljs.core.count.call(null,c__13316__auto___20882);
var G__20886 = (0);
seq__20867_20871 = G__20883;
chunk__20868_20872 = G__20884;
count__20869_20873 = G__20885;
i__20870_20874 = G__20886;
continue;
}
} else
{var x_20887 = cljs.core.first.call(null,seq__20867_20881__$1);ret.push(x_20887);
{
var G__20888 = cljs.core.next.call(null,seq__20867_20881__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20867_20871 = G__20888;
chunk__20868_20872 = G__20889;
count__20869_20873 = G__20890;
i__20870_20874 = G__20891;
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
var _ = this;var ret = [];var seq__20892_20896 = cljs.core.seq.call(null,v);var chunk__20893_20897 = null;var count__20894_20898 = (0);var i__20895_20899 = (0);while(true){
if((i__20895_20899 < count__20894_20898))
{var x_20900 = cljs.core._nth.call(null,chunk__20893_20897,i__20895_20899);ret.push(x_20900);
{
var G__20901 = seq__20892_20896;
var G__20902 = chunk__20893_20897;
var G__20903 = count__20894_20898;
var G__20904 = (i__20895_20899 + (1));
seq__20892_20896 = G__20901;
chunk__20893_20897 = G__20902;
count__20894_20898 = G__20903;
i__20895_20899 = G__20904;
continue;
}
} else
{var temp__4126__auto___20905 = cljs.core.seq.call(null,seq__20892_20896);if(temp__4126__auto___20905)
{var seq__20892_20906__$1 = temp__4126__auto___20905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20892_20906__$1))
{var c__13316__auto___20907 = cljs.core.chunk_first.call(null,seq__20892_20906__$1);{
var G__20908 = cljs.core.chunk_rest.call(null,seq__20892_20906__$1);
var G__20909 = c__13316__auto___20907;
var G__20910 = cljs.core.count.call(null,c__13316__auto___20907);
var G__20911 = (0);
seq__20892_20896 = G__20908;
chunk__20893_20897 = G__20909;
count__20894_20898 = G__20910;
i__20895_20899 = G__20911;
continue;
}
} else
{var x_20912 = cljs.core.first.call(null,seq__20892_20906__$1);ret.push(x_20912);
{
var G__20913 = cljs.core.next.call(null,seq__20892_20906__$1);
var G__20914 = null;
var G__20915 = (0);
var G__20916 = (0);
seq__20892_20896 = G__20913;
chunk__20893_20897 = G__20914;
count__20894_20898 = G__20915;
i__20895_20899 = G__20916;
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
, "handlers": (function (){var x20926 = cljs.core.clone.call(null,handlers);x20926.forEach = ((function (x20926,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__20927 = cljs.core.seq.call(null,coll);var chunk__20928 = null;var count__20929 = (0);var i__20930 = (0);while(true){
if((i__20930 < count__20929))
{var vec__20931 = cljs.core._nth.call(null,chunk__20928,i__20930);var k = cljs.core.nth.call(null,vec__20931,(0),null);var v = cljs.core.nth.call(null,vec__20931,(1),null);f.call(null,v,k);
{
var G__20933 = seq__20927;
var G__20934 = chunk__20928;
var G__20935 = count__20929;
var G__20936 = (i__20930 + (1));
seq__20927 = G__20933;
chunk__20928 = G__20934;
count__20929 = G__20935;
i__20930 = G__20936;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20927);if(temp__4126__auto__)
{var seq__20927__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20927__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__20927__$1);{
var G__20937 = cljs.core.chunk_rest.call(null,seq__20927__$1);
var G__20938 = c__13316__auto__;
var G__20939 = cljs.core.count.call(null,c__13316__auto__);
var G__20940 = (0);
seq__20927 = G__20937;
chunk__20928 = G__20938;
count__20929 = G__20939;
i__20930 = G__20940;
continue;
}
} else
{var vec__20932 = cljs.core.first.call(null,seq__20927__$1);var k = cljs.core.nth.call(null,vec__20932,(0),null);var v = cljs.core.nth.call(null,vec__20932,(1),null);f.call(null,v,k);
{
var G__20941 = cljs.core.next.call(null,seq__20927__$1);
var G__20942 = null;
var G__20943 = (0);
var G__20944 = (0);
seq__20927 = G__20941;
chunk__20928 = G__20942;
count__20929 = G__20943;
i__20930 = G__20944;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x20926,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x20926;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__20925 = obj;G__20925.push(kfn.call(null,k),vfn.call(null,v));
return G__20925;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t20948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t20948 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta20949){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta20949 = meta20949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t20948.cljs$lang$type = true;
cognitect.transit.t20948.cljs$lang$ctorStr = "cognitect.transit/t20948";
cognitect.transit.t20948.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t20948");
});
cognitect.transit.t20948.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t20948.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t20948.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t20948.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t20948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20950){var self__ = this;
var _20950__$1 = this;return self__.meta20949;
});
cognitect.transit.t20948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20950,meta20949__$1){var self__ = this;
var _20950__$1 = this;return (new cognitect.transit.t20948(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta20949__$1));
});
cognitect.transit.__GT_t20948 = (function __GT_t20948(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20949){return (new cognitect.transit.t20948(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20949));
});
}
return (new cognitect.transit.t20948(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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