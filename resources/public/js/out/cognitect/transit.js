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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__21657_21661 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__21658_21662 = null;var count__21659_21663 = (0);var i__21660_21664 = (0);while(true){
if((i__21660_21664 < count__21659_21663))
{var k_21665 = cljs.core._nth.call(null,chunk__21658_21662,i__21660_21664);var v_21666 = (b[k_21665]);(a[k_21665] = v_21666);
{
var G__21667 = seq__21657_21661;
var G__21668 = chunk__21658_21662;
var G__21669 = count__21659_21663;
var G__21670 = (i__21660_21664 + (1));
seq__21657_21661 = G__21667;
chunk__21658_21662 = G__21668;
count__21659_21663 = G__21669;
i__21660_21664 = G__21670;
continue;
}
} else
{var temp__4126__auto___21671 = cljs.core.seq.call(null,seq__21657_21661);if(temp__4126__auto___21671)
{var seq__21657_21672__$1 = temp__4126__auto___21671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21657_21672__$1))
{var c__13316__auto___21673 = cljs.core.chunk_first.call(null,seq__21657_21672__$1);{
var G__21674 = cljs.core.chunk_rest.call(null,seq__21657_21672__$1);
var G__21675 = c__13316__auto___21673;
var G__21676 = cljs.core.count.call(null,c__13316__auto___21673);
var G__21677 = (0);
seq__21657_21661 = G__21674;
chunk__21658_21662 = G__21675;
count__21659_21663 = G__21676;
i__21660_21664 = G__21677;
continue;
}
} else
{var k_21678 = cljs.core.first.call(null,seq__21657_21672__$1);var v_21679 = (b[k_21678]);(a[k_21678] = v_21679);
{
var G__21680 = cljs.core.next.call(null,seq__21657_21672__$1);
var G__21681 = null;
var G__21682 = (0);
var G__21683 = (0);
seq__21657_21661 = G__21680;
chunk__21658_21662 = G__21681;
count__21659_21663 = G__21682;
i__21660_21664 = G__21683;
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
var G__21684 = (i + (2));
var G__21685 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21684;
ret = G__21685;
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
var _ = this;var ret = [];var seq__21686_21690 = cljs.core.seq.call(null,v);var chunk__21687_21691 = null;var count__21688_21692 = (0);var i__21689_21693 = (0);while(true){
if((i__21689_21693 < count__21688_21692))
{var x_21694 = cljs.core._nth.call(null,chunk__21687_21691,i__21689_21693);ret.push(x_21694);
{
var G__21695 = seq__21686_21690;
var G__21696 = chunk__21687_21691;
var G__21697 = count__21688_21692;
var G__21698 = (i__21689_21693 + (1));
seq__21686_21690 = G__21695;
chunk__21687_21691 = G__21696;
count__21688_21692 = G__21697;
i__21689_21693 = G__21698;
continue;
}
} else
{var temp__4126__auto___21699 = cljs.core.seq.call(null,seq__21686_21690);if(temp__4126__auto___21699)
{var seq__21686_21700__$1 = temp__4126__auto___21699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21686_21700__$1))
{var c__13316__auto___21701 = cljs.core.chunk_first.call(null,seq__21686_21700__$1);{
var G__21702 = cljs.core.chunk_rest.call(null,seq__21686_21700__$1);
var G__21703 = c__13316__auto___21701;
var G__21704 = cljs.core.count.call(null,c__13316__auto___21701);
var G__21705 = (0);
seq__21686_21690 = G__21702;
chunk__21687_21691 = G__21703;
count__21688_21692 = G__21704;
i__21689_21693 = G__21705;
continue;
}
} else
{var x_21706 = cljs.core.first.call(null,seq__21686_21700__$1);ret.push(x_21706);
{
var G__21707 = cljs.core.next.call(null,seq__21686_21700__$1);
var G__21708 = null;
var G__21709 = (0);
var G__21710 = (0);
seq__21686_21690 = G__21707;
chunk__21687_21691 = G__21708;
count__21688_21692 = G__21709;
i__21689_21693 = G__21710;
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
var _ = this;var ret = [];var seq__21711_21715 = cljs.core.seq.call(null,v);var chunk__21712_21716 = null;var count__21713_21717 = (0);var i__21714_21718 = (0);while(true){
if((i__21714_21718 < count__21713_21717))
{var x_21719 = cljs.core._nth.call(null,chunk__21712_21716,i__21714_21718);ret.push(x_21719);
{
var G__21720 = seq__21711_21715;
var G__21721 = chunk__21712_21716;
var G__21722 = count__21713_21717;
var G__21723 = (i__21714_21718 + (1));
seq__21711_21715 = G__21720;
chunk__21712_21716 = G__21721;
count__21713_21717 = G__21722;
i__21714_21718 = G__21723;
continue;
}
} else
{var temp__4126__auto___21724 = cljs.core.seq.call(null,seq__21711_21715);if(temp__4126__auto___21724)
{var seq__21711_21725__$1 = temp__4126__auto___21724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21711_21725__$1))
{var c__13316__auto___21726 = cljs.core.chunk_first.call(null,seq__21711_21725__$1);{
var G__21727 = cljs.core.chunk_rest.call(null,seq__21711_21725__$1);
var G__21728 = c__13316__auto___21726;
var G__21729 = cljs.core.count.call(null,c__13316__auto___21726);
var G__21730 = (0);
seq__21711_21715 = G__21727;
chunk__21712_21716 = G__21728;
count__21713_21717 = G__21729;
i__21714_21718 = G__21730;
continue;
}
} else
{var x_21731 = cljs.core.first.call(null,seq__21711_21725__$1);ret.push(x_21731);
{
var G__21732 = cljs.core.next.call(null,seq__21711_21725__$1);
var G__21733 = null;
var G__21734 = (0);
var G__21735 = (0);
seq__21711_21715 = G__21732;
chunk__21712_21716 = G__21733;
count__21713_21717 = G__21734;
i__21714_21718 = G__21735;
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
var _ = this;var ret = [];var seq__21736_21740 = cljs.core.seq.call(null,v);var chunk__21737_21741 = null;var count__21738_21742 = (0);var i__21739_21743 = (0);while(true){
if((i__21739_21743 < count__21738_21742))
{var x_21744 = cljs.core._nth.call(null,chunk__21737_21741,i__21739_21743);ret.push(x_21744);
{
var G__21745 = seq__21736_21740;
var G__21746 = chunk__21737_21741;
var G__21747 = count__21738_21742;
var G__21748 = (i__21739_21743 + (1));
seq__21736_21740 = G__21745;
chunk__21737_21741 = G__21746;
count__21738_21742 = G__21747;
i__21739_21743 = G__21748;
continue;
}
} else
{var temp__4126__auto___21749 = cljs.core.seq.call(null,seq__21736_21740);if(temp__4126__auto___21749)
{var seq__21736_21750__$1 = temp__4126__auto___21749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21736_21750__$1))
{var c__13316__auto___21751 = cljs.core.chunk_first.call(null,seq__21736_21750__$1);{
var G__21752 = cljs.core.chunk_rest.call(null,seq__21736_21750__$1);
var G__21753 = c__13316__auto___21751;
var G__21754 = cljs.core.count.call(null,c__13316__auto___21751);
var G__21755 = (0);
seq__21736_21740 = G__21752;
chunk__21737_21741 = G__21753;
count__21738_21742 = G__21754;
i__21739_21743 = G__21755;
continue;
}
} else
{var x_21756 = cljs.core.first.call(null,seq__21736_21750__$1);ret.push(x_21756);
{
var G__21757 = cljs.core.next.call(null,seq__21736_21750__$1);
var G__21758 = null;
var G__21759 = (0);
var G__21760 = (0);
seq__21736_21740 = G__21757;
chunk__21737_21741 = G__21758;
count__21738_21742 = G__21759;
i__21739_21743 = G__21760;
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
, "handlers": (function (){var x21770 = cljs.core.clone.call(null,handlers);x21770.forEach = ((function (x21770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__21771 = cljs.core.seq.call(null,coll);var chunk__21772 = null;var count__21773 = (0);var i__21774 = (0);while(true){
if((i__21774 < count__21773))
{var vec__21775 = cljs.core._nth.call(null,chunk__21772,i__21774);var k = cljs.core.nth.call(null,vec__21775,(0),null);var v = cljs.core.nth.call(null,vec__21775,(1),null);f.call(null,v,k);
{
var G__21777 = seq__21771;
var G__21778 = chunk__21772;
var G__21779 = count__21773;
var G__21780 = (i__21774 + (1));
seq__21771 = G__21777;
chunk__21772 = G__21778;
count__21773 = G__21779;
i__21774 = G__21780;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21771);if(temp__4126__auto__)
{var seq__21771__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21771__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__21771__$1);{
var G__21781 = cljs.core.chunk_rest.call(null,seq__21771__$1);
var G__21782 = c__13316__auto__;
var G__21783 = cljs.core.count.call(null,c__13316__auto__);
var G__21784 = (0);
seq__21771 = G__21781;
chunk__21772 = G__21782;
count__21773 = G__21783;
i__21774 = G__21784;
continue;
}
} else
{var vec__21776 = cljs.core.first.call(null,seq__21771__$1);var k = cljs.core.nth.call(null,vec__21776,(0),null);var v = cljs.core.nth.call(null,vec__21776,(1),null);f.call(null,v,k);
{
var G__21785 = cljs.core.next.call(null,seq__21771__$1);
var G__21786 = null;
var G__21787 = (0);
var G__21788 = (0);
seq__21771 = G__21785;
chunk__21772 = G__21786;
count__21773 = G__21787;
i__21774 = G__21788;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x21770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x21770;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__21769 = obj;G__21769.push(kfn.call(null,k),vfn.call(null,v));
return G__21769;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t21792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t21792 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21793){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21793 = meta21793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21792.cljs$lang$type = true;
cognitect.transit.t21792.cljs$lang$ctorStr = "cognitect.transit/t21792";
cognitect.transit.t21792.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t21792");
});
cognitect.transit.t21792.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t21792.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t21792.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t21792.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t21792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21794){var self__ = this;
var _21794__$1 = this;return self__.meta21793;
});
cognitect.transit.t21792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21794,meta21793__$1){var self__ = this;
var _21794__$1 = this;return (new cognitect.transit.t21792(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21793__$1));
});
cognitect.transit.__GT_t21792 = (function __GT_t21792(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21793){return (new cognitect.transit.t21792(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21793));
});
}
return (new cognitect.transit.t21792(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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