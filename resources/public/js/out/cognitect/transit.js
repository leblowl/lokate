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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__24812_24816 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__24813_24817 = null;var count__24814_24818 = (0);var i__24815_24819 = (0);while(true){
if((i__24815_24819 < count__24814_24818))
{var k_24820 = cljs.core._nth.call(null,chunk__24813_24817,i__24815_24819);var v_24821 = (b[k_24820]);(a[k_24820] = v_24821);
{
var G__24822 = seq__24812_24816;
var G__24823 = chunk__24813_24817;
var G__24824 = count__24814_24818;
var G__24825 = (i__24815_24819 + (1));
seq__24812_24816 = G__24822;
chunk__24813_24817 = G__24823;
count__24814_24818 = G__24824;
i__24815_24819 = G__24825;
continue;
}
} else
{var temp__4126__auto___24826 = cljs.core.seq.call(null,seq__24812_24816);if(temp__4126__auto___24826)
{var seq__24812_24827__$1 = temp__4126__auto___24826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24812_24827__$1))
{var c__13318__auto___24828 = cljs.core.chunk_first.call(null,seq__24812_24827__$1);{
var G__24829 = cljs.core.chunk_rest.call(null,seq__24812_24827__$1);
var G__24830 = c__13318__auto___24828;
var G__24831 = cljs.core.count.call(null,c__13318__auto___24828);
var G__24832 = (0);
seq__24812_24816 = G__24829;
chunk__24813_24817 = G__24830;
count__24814_24818 = G__24831;
i__24815_24819 = G__24832;
continue;
}
} else
{var k_24833 = cljs.core.first.call(null,seq__24812_24827__$1);var v_24834 = (b[k_24833]);(a[k_24833] = v_24834);
{
var G__24835 = cljs.core.next.call(null,seq__24812_24827__$1);
var G__24836 = null;
var G__24837 = (0);
var G__24838 = (0);
seq__24812_24816 = G__24835;
chunk__24813_24817 = G__24836;
count__24814_24818 = G__24837;
i__24815_24819 = G__24838;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/MapBuilder");
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/VectorBuilder");
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
var G__24839 = (i + (2));
var G__24840 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24839;
ret = G__24840;
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__24841_24845 = cljs.core.seq.call(null,v);var chunk__24842_24846 = null;var count__24843_24847 = (0);var i__24844_24848 = (0);while(true){
if((i__24844_24848 < count__24843_24847))
{var x_24849 = cljs.core._nth.call(null,chunk__24842_24846,i__24844_24848);ret.push(x_24849);
{
var G__24850 = seq__24841_24845;
var G__24851 = chunk__24842_24846;
var G__24852 = count__24843_24847;
var G__24853 = (i__24844_24848 + (1));
seq__24841_24845 = G__24850;
chunk__24842_24846 = G__24851;
count__24843_24847 = G__24852;
i__24844_24848 = G__24853;
continue;
}
} else
{var temp__4126__auto___24854 = cljs.core.seq.call(null,seq__24841_24845);if(temp__4126__auto___24854)
{var seq__24841_24855__$1 = temp__4126__auto___24854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24841_24855__$1))
{var c__13318__auto___24856 = cljs.core.chunk_first.call(null,seq__24841_24855__$1);{
var G__24857 = cljs.core.chunk_rest.call(null,seq__24841_24855__$1);
var G__24858 = c__13318__auto___24856;
var G__24859 = cljs.core.count.call(null,c__13318__auto___24856);
var G__24860 = (0);
seq__24841_24845 = G__24857;
chunk__24842_24846 = G__24858;
count__24843_24847 = G__24859;
i__24844_24848 = G__24860;
continue;
}
} else
{var x_24861 = cljs.core.first.call(null,seq__24841_24855__$1);ret.push(x_24861);
{
var G__24862 = cljs.core.next.call(null,seq__24841_24855__$1);
var G__24863 = null;
var G__24864 = (0);
var G__24865 = (0);
seq__24841_24845 = G__24862;
chunk__24842_24846 = G__24863;
count__24843_24847 = G__24864;
i__24844_24848 = G__24865;
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__24866_24870 = cljs.core.seq.call(null,v);var chunk__24867_24871 = null;var count__24868_24872 = (0);var i__24869_24873 = (0);while(true){
if((i__24869_24873 < count__24868_24872))
{var x_24874 = cljs.core._nth.call(null,chunk__24867_24871,i__24869_24873);ret.push(x_24874);
{
var G__24875 = seq__24866_24870;
var G__24876 = chunk__24867_24871;
var G__24877 = count__24868_24872;
var G__24878 = (i__24869_24873 + (1));
seq__24866_24870 = G__24875;
chunk__24867_24871 = G__24876;
count__24868_24872 = G__24877;
i__24869_24873 = G__24878;
continue;
}
} else
{var temp__4126__auto___24879 = cljs.core.seq.call(null,seq__24866_24870);if(temp__4126__auto___24879)
{var seq__24866_24880__$1 = temp__4126__auto___24879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24866_24880__$1))
{var c__13318__auto___24881 = cljs.core.chunk_first.call(null,seq__24866_24880__$1);{
var G__24882 = cljs.core.chunk_rest.call(null,seq__24866_24880__$1);
var G__24883 = c__13318__auto___24881;
var G__24884 = cljs.core.count.call(null,c__13318__auto___24881);
var G__24885 = (0);
seq__24866_24870 = G__24882;
chunk__24867_24871 = G__24883;
count__24868_24872 = G__24884;
i__24869_24873 = G__24885;
continue;
}
} else
{var x_24886 = cljs.core.first.call(null,seq__24866_24880__$1);ret.push(x_24886);
{
var G__24887 = cljs.core.next.call(null,seq__24866_24880__$1);
var G__24888 = null;
var G__24889 = (0);
var G__24890 = (0);
seq__24866_24870 = G__24887;
chunk__24867_24871 = G__24888;
count__24868_24872 = G__24889;
i__24869_24873 = G__24890;
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__24891_24895 = cljs.core.seq.call(null,v);var chunk__24892_24896 = null;var count__24893_24897 = (0);var i__24894_24898 = (0);while(true){
if((i__24894_24898 < count__24893_24897))
{var x_24899 = cljs.core._nth.call(null,chunk__24892_24896,i__24894_24898);ret.push(x_24899);
{
var G__24900 = seq__24891_24895;
var G__24901 = chunk__24892_24896;
var G__24902 = count__24893_24897;
var G__24903 = (i__24894_24898 + (1));
seq__24891_24895 = G__24900;
chunk__24892_24896 = G__24901;
count__24893_24897 = G__24902;
i__24894_24898 = G__24903;
continue;
}
} else
{var temp__4126__auto___24904 = cljs.core.seq.call(null,seq__24891_24895);if(temp__4126__auto___24904)
{var seq__24891_24905__$1 = temp__4126__auto___24904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24891_24905__$1))
{var c__13318__auto___24906 = cljs.core.chunk_first.call(null,seq__24891_24905__$1);{
var G__24907 = cljs.core.chunk_rest.call(null,seq__24891_24905__$1);
var G__24908 = c__13318__auto___24906;
var G__24909 = cljs.core.count.call(null,c__13318__auto___24906);
var G__24910 = (0);
seq__24891_24895 = G__24907;
chunk__24892_24896 = G__24908;
count__24893_24897 = G__24909;
i__24894_24898 = G__24910;
continue;
}
} else
{var x_24911 = cljs.core.first.call(null,seq__24891_24905__$1);ret.push(x_24911);
{
var G__24912 = cljs.core.next.call(null,seq__24891_24905__$1);
var G__24913 = null;
var G__24914 = (0);
var G__24915 = (0);
seq__24891_24895 = G__24912;
chunk__24892_24896 = G__24913;
count__24893_24897 = G__24914;
i__24894_24898 = G__24915;
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
, "handlers": (function (){var x24925 = cljs.core.clone.call(null,handlers);x24925.forEach = ((function (x24925,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__24926 = cljs.core.seq.call(null,coll);var chunk__24927 = null;var count__24928 = (0);var i__24929 = (0);while(true){
if((i__24929 < count__24928))
{var vec__24930 = cljs.core._nth.call(null,chunk__24927,i__24929);var k = cljs.core.nth.call(null,vec__24930,(0),null);var v = cljs.core.nth.call(null,vec__24930,(1),null);f.call(null,v,k);
{
var G__24932 = seq__24926;
var G__24933 = chunk__24927;
var G__24934 = count__24928;
var G__24935 = (i__24929 + (1));
seq__24926 = G__24932;
chunk__24927 = G__24933;
count__24928 = G__24934;
i__24929 = G__24935;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24926);if(temp__4126__auto__)
{var seq__24926__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24926__$1))
{var c__13318__auto__ = cljs.core.chunk_first.call(null,seq__24926__$1);{
var G__24936 = cljs.core.chunk_rest.call(null,seq__24926__$1);
var G__24937 = c__13318__auto__;
var G__24938 = cljs.core.count.call(null,c__13318__auto__);
var G__24939 = (0);
seq__24926 = G__24936;
chunk__24927 = G__24937;
count__24928 = G__24938;
i__24929 = G__24939;
continue;
}
} else
{var vec__24931 = cljs.core.first.call(null,seq__24926__$1);var k = cljs.core.nth.call(null,vec__24931,(0),null);var v = cljs.core.nth.call(null,vec__24931,(1),null);f.call(null,v,k);
{
var G__24940 = cljs.core.next.call(null,seq__24926__$1);
var G__24941 = null;
var G__24942 = (0);
var G__24943 = (0);
seq__24926 = G__24940;
chunk__24927 = G__24941;
count__24928 = G__24942;
i__24929 = G__24943;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x24925,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x24925;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__24924 = obj;G__24924.push(kfn.call(null,k),vfn.call(null,v));
return G__24924;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t24947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t24947 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta24948){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta24948 = meta24948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t24947.cljs$lang$type = true;
cognitect.transit.t24947.cljs$lang$ctorStr = "cognitect.transit/t24947";
cognitect.transit.t24947.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/t24947");
});
cognitect.transit.t24947.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t24947.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t24947.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t24947.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t24947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24949){var self__ = this;
var _24949__$1 = this;return self__.meta24948;
});
cognitect.transit.t24947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24949,meta24948__$1){var self__ = this;
var _24949__$1 = this;return (new cognitect.transit.t24947(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta24948__$1));
});
cognitect.transit.__GT_t24947 = (function __GT_t24947(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24948){return (new cognitect.transit.t24947(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24948));
});
}
return (new cognitect.transit.t24947(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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