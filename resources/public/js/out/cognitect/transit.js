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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23728_23732 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__23729_23733 = null;var count__23730_23734 = (0);var i__23731_23735 = (0);while(true){
if((i__23731_23735 < count__23730_23734))
{var k_23736 = cljs.core._nth.call(null,chunk__23729_23733,i__23731_23735);var v_23737 = (b[k_23736]);(a[k_23736] = v_23737);
{
var G__23738 = seq__23728_23732;
var G__23739 = chunk__23729_23733;
var G__23740 = count__23730_23734;
var G__23741 = (i__23731_23735 + (1));
seq__23728_23732 = G__23738;
chunk__23729_23733 = G__23739;
count__23730_23734 = G__23740;
i__23731_23735 = G__23741;
continue;
}
} else
{var temp__4126__auto___23742 = cljs.core.seq.call(null,seq__23728_23732);if(temp__4126__auto___23742)
{var seq__23728_23743__$1 = temp__4126__auto___23742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23728_23743__$1))
{var c__13317__auto___23744 = cljs.core.chunk_first.call(null,seq__23728_23743__$1);{
var G__23745 = cljs.core.chunk_rest.call(null,seq__23728_23743__$1);
var G__23746 = c__13317__auto___23744;
var G__23747 = cljs.core.count.call(null,c__13317__auto___23744);
var G__23748 = (0);
seq__23728_23732 = G__23745;
chunk__23729_23733 = G__23746;
count__23730_23734 = G__23747;
i__23731_23735 = G__23748;
continue;
}
} else
{var k_23749 = cljs.core.first.call(null,seq__23728_23743__$1);var v_23750 = (b[k_23749]);(a[k_23749] = v_23750);
{
var G__23751 = cljs.core.next.call(null,seq__23728_23743__$1);
var G__23752 = null;
var G__23753 = (0);
var G__23754 = (0);
seq__23728_23732 = G__23751;
chunk__23729_23733 = G__23752;
count__23730_23734 = G__23753;
i__23731_23735 = G__23754;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/MapBuilder");
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/VectorBuilder");
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
var G__23755 = (i + (2));
var G__23756 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23755;
ret = G__23756;
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23757_23761 = cljs.core.seq.call(null,v);var chunk__23758_23762 = null;var count__23759_23763 = (0);var i__23760_23764 = (0);while(true){
if((i__23760_23764 < count__23759_23763))
{var x_23765 = cljs.core._nth.call(null,chunk__23758_23762,i__23760_23764);ret.push(x_23765);
{
var G__23766 = seq__23757_23761;
var G__23767 = chunk__23758_23762;
var G__23768 = count__23759_23763;
var G__23769 = (i__23760_23764 + (1));
seq__23757_23761 = G__23766;
chunk__23758_23762 = G__23767;
count__23759_23763 = G__23768;
i__23760_23764 = G__23769;
continue;
}
} else
{var temp__4126__auto___23770 = cljs.core.seq.call(null,seq__23757_23761);if(temp__4126__auto___23770)
{var seq__23757_23771__$1 = temp__4126__auto___23770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23757_23771__$1))
{var c__13317__auto___23772 = cljs.core.chunk_first.call(null,seq__23757_23771__$1);{
var G__23773 = cljs.core.chunk_rest.call(null,seq__23757_23771__$1);
var G__23774 = c__13317__auto___23772;
var G__23775 = cljs.core.count.call(null,c__13317__auto___23772);
var G__23776 = (0);
seq__23757_23761 = G__23773;
chunk__23758_23762 = G__23774;
count__23759_23763 = G__23775;
i__23760_23764 = G__23776;
continue;
}
} else
{var x_23777 = cljs.core.first.call(null,seq__23757_23771__$1);ret.push(x_23777);
{
var G__23778 = cljs.core.next.call(null,seq__23757_23771__$1);
var G__23779 = null;
var G__23780 = (0);
var G__23781 = (0);
seq__23757_23761 = G__23778;
chunk__23758_23762 = G__23779;
count__23759_23763 = G__23780;
i__23760_23764 = G__23781;
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23782_23786 = cljs.core.seq.call(null,v);var chunk__23783_23787 = null;var count__23784_23788 = (0);var i__23785_23789 = (0);while(true){
if((i__23785_23789 < count__23784_23788))
{var x_23790 = cljs.core._nth.call(null,chunk__23783_23787,i__23785_23789);ret.push(x_23790);
{
var G__23791 = seq__23782_23786;
var G__23792 = chunk__23783_23787;
var G__23793 = count__23784_23788;
var G__23794 = (i__23785_23789 + (1));
seq__23782_23786 = G__23791;
chunk__23783_23787 = G__23792;
count__23784_23788 = G__23793;
i__23785_23789 = G__23794;
continue;
}
} else
{var temp__4126__auto___23795 = cljs.core.seq.call(null,seq__23782_23786);if(temp__4126__auto___23795)
{var seq__23782_23796__$1 = temp__4126__auto___23795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23782_23796__$1))
{var c__13317__auto___23797 = cljs.core.chunk_first.call(null,seq__23782_23796__$1);{
var G__23798 = cljs.core.chunk_rest.call(null,seq__23782_23796__$1);
var G__23799 = c__13317__auto___23797;
var G__23800 = cljs.core.count.call(null,c__13317__auto___23797);
var G__23801 = (0);
seq__23782_23786 = G__23798;
chunk__23783_23787 = G__23799;
count__23784_23788 = G__23800;
i__23785_23789 = G__23801;
continue;
}
} else
{var x_23802 = cljs.core.first.call(null,seq__23782_23796__$1);ret.push(x_23802);
{
var G__23803 = cljs.core.next.call(null,seq__23782_23796__$1);
var G__23804 = null;
var G__23805 = (0);
var G__23806 = (0);
seq__23782_23786 = G__23803;
chunk__23783_23787 = G__23804;
count__23784_23788 = G__23805;
i__23785_23789 = G__23806;
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23807_23811 = cljs.core.seq.call(null,v);var chunk__23808_23812 = null;var count__23809_23813 = (0);var i__23810_23814 = (0);while(true){
if((i__23810_23814 < count__23809_23813))
{var x_23815 = cljs.core._nth.call(null,chunk__23808_23812,i__23810_23814);ret.push(x_23815);
{
var G__23816 = seq__23807_23811;
var G__23817 = chunk__23808_23812;
var G__23818 = count__23809_23813;
var G__23819 = (i__23810_23814 + (1));
seq__23807_23811 = G__23816;
chunk__23808_23812 = G__23817;
count__23809_23813 = G__23818;
i__23810_23814 = G__23819;
continue;
}
} else
{var temp__4126__auto___23820 = cljs.core.seq.call(null,seq__23807_23811);if(temp__4126__auto___23820)
{var seq__23807_23821__$1 = temp__4126__auto___23820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23807_23821__$1))
{var c__13317__auto___23822 = cljs.core.chunk_first.call(null,seq__23807_23821__$1);{
var G__23823 = cljs.core.chunk_rest.call(null,seq__23807_23821__$1);
var G__23824 = c__13317__auto___23822;
var G__23825 = cljs.core.count.call(null,c__13317__auto___23822);
var G__23826 = (0);
seq__23807_23811 = G__23823;
chunk__23808_23812 = G__23824;
count__23809_23813 = G__23825;
i__23810_23814 = G__23826;
continue;
}
} else
{var x_23827 = cljs.core.first.call(null,seq__23807_23821__$1);ret.push(x_23827);
{
var G__23828 = cljs.core.next.call(null,seq__23807_23821__$1);
var G__23829 = null;
var G__23830 = (0);
var G__23831 = (0);
seq__23807_23811 = G__23828;
chunk__23808_23812 = G__23829;
count__23809_23813 = G__23830;
i__23810_23814 = G__23831;
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
, "handlers": (function (){var x23841 = cljs.core.clone.call(null,handlers);x23841.forEach = ((function (x23841,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23842 = cljs.core.seq.call(null,coll);var chunk__23843 = null;var count__23844 = (0);var i__23845 = (0);while(true){
if((i__23845 < count__23844))
{var vec__23846 = cljs.core._nth.call(null,chunk__23843,i__23845);var k = cljs.core.nth.call(null,vec__23846,(0),null);var v = cljs.core.nth.call(null,vec__23846,(1),null);f.call(null,v,k);
{
var G__23848 = seq__23842;
var G__23849 = chunk__23843;
var G__23850 = count__23844;
var G__23851 = (i__23845 + (1));
seq__23842 = G__23848;
chunk__23843 = G__23849;
count__23844 = G__23850;
i__23845 = G__23851;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23842);if(temp__4126__auto__)
{var seq__23842__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23842__$1))
{var c__13317__auto__ = cljs.core.chunk_first.call(null,seq__23842__$1);{
var G__23852 = cljs.core.chunk_rest.call(null,seq__23842__$1);
var G__23853 = c__13317__auto__;
var G__23854 = cljs.core.count.call(null,c__13317__auto__);
var G__23855 = (0);
seq__23842 = G__23852;
chunk__23843 = G__23853;
count__23844 = G__23854;
i__23845 = G__23855;
continue;
}
} else
{var vec__23847 = cljs.core.first.call(null,seq__23842__$1);var k = cljs.core.nth.call(null,vec__23847,(0),null);var v = cljs.core.nth.call(null,vec__23847,(1),null);f.call(null,v,k);
{
var G__23856 = cljs.core.next.call(null,seq__23842__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23842 = G__23856;
chunk__23843 = G__23857;
count__23844 = G__23858;
i__23845 = G__23859;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23841,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23841;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23840 = obj;G__23840.push(kfn.call(null,k),vfn.call(null,v));
return G__23840;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23863 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23864){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23864 = meta23864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23863.cljs$lang$type = true;
cognitect.transit.t23863.cljs$lang$ctorStr = "cognitect.transit/t23863";
cognitect.transit.t23863.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cognitect.transit/t23863");
});
cognitect.transit.t23863.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t23863.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t23863.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t23863.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t23863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23865){var self__ = this;
var _23865__$1 = this;return self__.meta23864;
});
cognitect.transit.t23863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23865,meta23864__$1){var self__ = this;
var _23865__$1 = this;return (new cognitect.transit.t23863(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23864__$1));
});
cognitect.transit.__GT_t23863 = (function __GT_t23863(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23864){return (new cognitect.transit.t23863(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23864));
});
}
return (new cognitect.transit.t23863(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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