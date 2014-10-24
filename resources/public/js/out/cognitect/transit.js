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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__21627_21631 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__21628_21632 = null;var count__21629_21633 = (0);var i__21630_21634 = (0);while(true){
if((i__21630_21634 < count__21629_21633))
{var k_21635 = cljs.core._nth.call(null,chunk__21628_21632,i__21630_21634);var v_21636 = (b[k_21635]);(a[k_21635] = v_21636);
{
var G__21637 = seq__21627_21631;
var G__21638 = chunk__21628_21632;
var G__21639 = count__21629_21633;
var G__21640 = (i__21630_21634 + (1));
seq__21627_21631 = G__21637;
chunk__21628_21632 = G__21638;
count__21629_21633 = G__21639;
i__21630_21634 = G__21640;
continue;
}
} else
{var temp__4126__auto___21641 = cljs.core.seq.call(null,seq__21627_21631);if(temp__4126__auto___21641)
{var seq__21627_21642__$1 = temp__4126__auto___21641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21627_21642__$1))
{var c__13316__auto___21643 = cljs.core.chunk_first.call(null,seq__21627_21642__$1);{
var G__21644 = cljs.core.chunk_rest.call(null,seq__21627_21642__$1);
var G__21645 = c__13316__auto___21643;
var G__21646 = cljs.core.count.call(null,c__13316__auto___21643);
var G__21647 = (0);
seq__21627_21631 = G__21644;
chunk__21628_21632 = G__21645;
count__21629_21633 = G__21646;
i__21630_21634 = G__21647;
continue;
}
} else
{var k_21648 = cljs.core.first.call(null,seq__21627_21642__$1);var v_21649 = (b[k_21648]);(a[k_21648] = v_21649);
{
var G__21650 = cljs.core.next.call(null,seq__21627_21642__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__21627_21631 = G__21650;
chunk__21628_21632 = G__21651;
count__21629_21633 = G__21652;
i__21630_21634 = G__21653;
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
var G__21654 = (i + (2));
var G__21655 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21654;
ret = G__21655;
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
var _ = this;var ret = [];var seq__21656_21660 = cljs.core.seq.call(null,v);var chunk__21657_21661 = null;var count__21658_21662 = (0);var i__21659_21663 = (0);while(true){
if((i__21659_21663 < count__21658_21662))
{var x_21664 = cljs.core._nth.call(null,chunk__21657_21661,i__21659_21663);ret.push(x_21664);
{
var G__21665 = seq__21656_21660;
var G__21666 = chunk__21657_21661;
var G__21667 = count__21658_21662;
var G__21668 = (i__21659_21663 + (1));
seq__21656_21660 = G__21665;
chunk__21657_21661 = G__21666;
count__21658_21662 = G__21667;
i__21659_21663 = G__21668;
continue;
}
} else
{var temp__4126__auto___21669 = cljs.core.seq.call(null,seq__21656_21660);if(temp__4126__auto___21669)
{var seq__21656_21670__$1 = temp__4126__auto___21669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21656_21670__$1))
{var c__13316__auto___21671 = cljs.core.chunk_first.call(null,seq__21656_21670__$1);{
var G__21672 = cljs.core.chunk_rest.call(null,seq__21656_21670__$1);
var G__21673 = c__13316__auto___21671;
var G__21674 = cljs.core.count.call(null,c__13316__auto___21671);
var G__21675 = (0);
seq__21656_21660 = G__21672;
chunk__21657_21661 = G__21673;
count__21658_21662 = G__21674;
i__21659_21663 = G__21675;
continue;
}
} else
{var x_21676 = cljs.core.first.call(null,seq__21656_21670__$1);ret.push(x_21676);
{
var G__21677 = cljs.core.next.call(null,seq__21656_21670__$1);
var G__21678 = null;
var G__21679 = (0);
var G__21680 = (0);
seq__21656_21660 = G__21677;
chunk__21657_21661 = G__21678;
count__21658_21662 = G__21679;
i__21659_21663 = G__21680;
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
var _ = this;var ret = [];var seq__21681_21685 = cljs.core.seq.call(null,v);var chunk__21682_21686 = null;var count__21683_21687 = (0);var i__21684_21688 = (0);while(true){
if((i__21684_21688 < count__21683_21687))
{var x_21689 = cljs.core._nth.call(null,chunk__21682_21686,i__21684_21688);ret.push(x_21689);
{
var G__21690 = seq__21681_21685;
var G__21691 = chunk__21682_21686;
var G__21692 = count__21683_21687;
var G__21693 = (i__21684_21688 + (1));
seq__21681_21685 = G__21690;
chunk__21682_21686 = G__21691;
count__21683_21687 = G__21692;
i__21684_21688 = G__21693;
continue;
}
} else
{var temp__4126__auto___21694 = cljs.core.seq.call(null,seq__21681_21685);if(temp__4126__auto___21694)
{var seq__21681_21695__$1 = temp__4126__auto___21694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21681_21695__$1))
{var c__13316__auto___21696 = cljs.core.chunk_first.call(null,seq__21681_21695__$1);{
var G__21697 = cljs.core.chunk_rest.call(null,seq__21681_21695__$1);
var G__21698 = c__13316__auto___21696;
var G__21699 = cljs.core.count.call(null,c__13316__auto___21696);
var G__21700 = (0);
seq__21681_21685 = G__21697;
chunk__21682_21686 = G__21698;
count__21683_21687 = G__21699;
i__21684_21688 = G__21700;
continue;
}
} else
{var x_21701 = cljs.core.first.call(null,seq__21681_21695__$1);ret.push(x_21701);
{
var G__21702 = cljs.core.next.call(null,seq__21681_21695__$1);
var G__21703 = null;
var G__21704 = (0);
var G__21705 = (0);
seq__21681_21685 = G__21702;
chunk__21682_21686 = G__21703;
count__21683_21687 = G__21704;
i__21684_21688 = G__21705;
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
var _ = this;var ret = [];var seq__21706_21710 = cljs.core.seq.call(null,v);var chunk__21707_21711 = null;var count__21708_21712 = (0);var i__21709_21713 = (0);while(true){
if((i__21709_21713 < count__21708_21712))
{var x_21714 = cljs.core._nth.call(null,chunk__21707_21711,i__21709_21713);ret.push(x_21714);
{
var G__21715 = seq__21706_21710;
var G__21716 = chunk__21707_21711;
var G__21717 = count__21708_21712;
var G__21718 = (i__21709_21713 + (1));
seq__21706_21710 = G__21715;
chunk__21707_21711 = G__21716;
count__21708_21712 = G__21717;
i__21709_21713 = G__21718;
continue;
}
} else
{var temp__4126__auto___21719 = cljs.core.seq.call(null,seq__21706_21710);if(temp__4126__auto___21719)
{var seq__21706_21720__$1 = temp__4126__auto___21719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21706_21720__$1))
{var c__13316__auto___21721 = cljs.core.chunk_first.call(null,seq__21706_21720__$1);{
var G__21722 = cljs.core.chunk_rest.call(null,seq__21706_21720__$1);
var G__21723 = c__13316__auto___21721;
var G__21724 = cljs.core.count.call(null,c__13316__auto___21721);
var G__21725 = (0);
seq__21706_21710 = G__21722;
chunk__21707_21711 = G__21723;
count__21708_21712 = G__21724;
i__21709_21713 = G__21725;
continue;
}
} else
{var x_21726 = cljs.core.first.call(null,seq__21706_21720__$1);ret.push(x_21726);
{
var G__21727 = cljs.core.next.call(null,seq__21706_21720__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21706_21710 = G__21727;
chunk__21707_21711 = G__21728;
count__21708_21712 = G__21729;
i__21709_21713 = G__21730;
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
, "handlers": (function (){var x21740 = cljs.core.clone.call(null,handlers);x21740.forEach = ((function (x21740,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__21741 = cljs.core.seq.call(null,coll);var chunk__21742 = null;var count__21743 = (0);var i__21744 = (0);while(true){
if((i__21744 < count__21743))
{var vec__21745 = cljs.core._nth.call(null,chunk__21742,i__21744);var k = cljs.core.nth.call(null,vec__21745,(0),null);var v = cljs.core.nth.call(null,vec__21745,(1),null);f.call(null,v,k);
{
var G__21747 = seq__21741;
var G__21748 = chunk__21742;
var G__21749 = count__21743;
var G__21750 = (i__21744 + (1));
seq__21741 = G__21747;
chunk__21742 = G__21748;
count__21743 = G__21749;
i__21744 = G__21750;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21741);if(temp__4126__auto__)
{var seq__21741__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21741__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__21741__$1);{
var G__21751 = cljs.core.chunk_rest.call(null,seq__21741__$1);
var G__21752 = c__13316__auto__;
var G__21753 = cljs.core.count.call(null,c__13316__auto__);
var G__21754 = (0);
seq__21741 = G__21751;
chunk__21742 = G__21752;
count__21743 = G__21753;
i__21744 = G__21754;
continue;
}
} else
{var vec__21746 = cljs.core.first.call(null,seq__21741__$1);var k = cljs.core.nth.call(null,vec__21746,(0),null);var v = cljs.core.nth.call(null,vec__21746,(1),null);f.call(null,v,k);
{
var G__21755 = cljs.core.next.call(null,seq__21741__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21741 = G__21755;
chunk__21742 = G__21756;
count__21743 = G__21757;
i__21744 = G__21758;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x21740,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x21740;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__21739 = obj;G__21739.push(kfn.call(null,k),vfn.call(null,v));
return G__21739;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t21762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t21762 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21763){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21763 = meta21763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21762.cljs$lang$type = true;
cognitect.transit.t21762.cljs$lang$ctorStr = "cognitect.transit/t21762";
cognitect.transit.t21762.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t21762");
});
cognitect.transit.t21762.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t21762.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t21762.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t21762.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t21762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21764){var self__ = this;
var _21764__$1 = this;return self__.meta21763;
});
cognitect.transit.t21762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21764,meta21763__$1){var self__ = this;
var _21764__$1 = this;return (new cognitect.transit.t21762(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21763__$1));
});
cognitect.transit.__GT_t21762 = (function __GT_t21762(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21763){return (new cognitect.transit.t21762(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21763));
});
}
return (new cognitect.transit.t21762(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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