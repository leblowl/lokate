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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__27638_27642 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__27639_27643 = null;var count__27640_27644 = (0);var i__27641_27645 = (0);while(true){
if((i__27641_27645 < count__27640_27644))
{var k_27646 = cljs.core._nth.call(null,chunk__27639_27643,i__27641_27645);var v_27647 = (b[k_27646]);(a[k_27646] = v_27647);
{
var G__27648 = seq__27638_27642;
var G__27649 = chunk__27639_27643;
var G__27650 = count__27640_27644;
var G__27651 = (i__27641_27645 + (1));
seq__27638_27642 = G__27648;
chunk__27639_27643 = G__27649;
count__27640_27644 = G__27650;
i__27641_27645 = G__27651;
continue;
}
} else
{var temp__4126__auto___27652 = cljs.core.seq.call(null,seq__27638_27642);if(temp__4126__auto___27652)
{var seq__27638_27653__$1 = temp__4126__auto___27652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27638_27653__$1))
{var c__13316__auto___27654 = cljs.core.chunk_first.call(null,seq__27638_27653__$1);{
var G__27655 = cljs.core.chunk_rest.call(null,seq__27638_27653__$1);
var G__27656 = c__13316__auto___27654;
var G__27657 = cljs.core.count.call(null,c__13316__auto___27654);
var G__27658 = (0);
seq__27638_27642 = G__27655;
chunk__27639_27643 = G__27656;
count__27640_27644 = G__27657;
i__27641_27645 = G__27658;
continue;
}
} else
{var k_27659 = cljs.core.first.call(null,seq__27638_27653__$1);var v_27660 = (b[k_27659]);(a[k_27659] = v_27660);
{
var G__27661 = cljs.core.next.call(null,seq__27638_27653__$1);
var G__27662 = null;
var G__27663 = (0);
var G__27664 = (0);
seq__27638_27642 = G__27661;
chunk__27639_27643 = G__27662;
count__27640_27644 = G__27663;
i__27641_27645 = G__27664;
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
var G__27665 = (i + (2));
var G__27666 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27665;
ret = G__27666;
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
var _ = this;var ret = [];var seq__27667_27671 = cljs.core.seq.call(null,v);var chunk__27668_27672 = null;var count__27669_27673 = (0);var i__27670_27674 = (0);while(true){
if((i__27670_27674 < count__27669_27673))
{var x_27675 = cljs.core._nth.call(null,chunk__27668_27672,i__27670_27674);ret.push(x_27675);
{
var G__27676 = seq__27667_27671;
var G__27677 = chunk__27668_27672;
var G__27678 = count__27669_27673;
var G__27679 = (i__27670_27674 + (1));
seq__27667_27671 = G__27676;
chunk__27668_27672 = G__27677;
count__27669_27673 = G__27678;
i__27670_27674 = G__27679;
continue;
}
} else
{var temp__4126__auto___27680 = cljs.core.seq.call(null,seq__27667_27671);if(temp__4126__auto___27680)
{var seq__27667_27681__$1 = temp__4126__auto___27680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27667_27681__$1))
{var c__13316__auto___27682 = cljs.core.chunk_first.call(null,seq__27667_27681__$1);{
var G__27683 = cljs.core.chunk_rest.call(null,seq__27667_27681__$1);
var G__27684 = c__13316__auto___27682;
var G__27685 = cljs.core.count.call(null,c__13316__auto___27682);
var G__27686 = (0);
seq__27667_27671 = G__27683;
chunk__27668_27672 = G__27684;
count__27669_27673 = G__27685;
i__27670_27674 = G__27686;
continue;
}
} else
{var x_27687 = cljs.core.first.call(null,seq__27667_27681__$1);ret.push(x_27687);
{
var G__27688 = cljs.core.next.call(null,seq__27667_27681__$1);
var G__27689 = null;
var G__27690 = (0);
var G__27691 = (0);
seq__27667_27671 = G__27688;
chunk__27668_27672 = G__27689;
count__27669_27673 = G__27690;
i__27670_27674 = G__27691;
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
var _ = this;var ret = [];var seq__27692_27696 = cljs.core.seq.call(null,v);var chunk__27693_27697 = null;var count__27694_27698 = (0);var i__27695_27699 = (0);while(true){
if((i__27695_27699 < count__27694_27698))
{var x_27700 = cljs.core._nth.call(null,chunk__27693_27697,i__27695_27699);ret.push(x_27700);
{
var G__27701 = seq__27692_27696;
var G__27702 = chunk__27693_27697;
var G__27703 = count__27694_27698;
var G__27704 = (i__27695_27699 + (1));
seq__27692_27696 = G__27701;
chunk__27693_27697 = G__27702;
count__27694_27698 = G__27703;
i__27695_27699 = G__27704;
continue;
}
} else
{var temp__4126__auto___27705 = cljs.core.seq.call(null,seq__27692_27696);if(temp__4126__auto___27705)
{var seq__27692_27706__$1 = temp__4126__auto___27705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27692_27706__$1))
{var c__13316__auto___27707 = cljs.core.chunk_first.call(null,seq__27692_27706__$1);{
var G__27708 = cljs.core.chunk_rest.call(null,seq__27692_27706__$1);
var G__27709 = c__13316__auto___27707;
var G__27710 = cljs.core.count.call(null,c__13316__auto___27707);
var G__27711 = (0);
seq__27692_27696 = G__27708;
chunk__27693_27697 = G__27709;
count__27694_27698 = G__27710;
i__27695_27699 = G__27711;
continue;
}
} else
{var x_27712 = cljs.core.first.call(null,seq__27692_27706__$1);ret.push(x_27712);
{
var G__27713 = cljs.core.next.call(null,seq__27692_27706__$1);
var G__27714 = null;
var G__27715 = (0);
var G__27716 = (0);
seq__27692_27696 = G__27713;
chunk__27693_27697 = G__27714;
count__27694_27698 = G__27715;
i__27695_27699 = G__27716;
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
var _ = this;var ret = [];var seq__27717_27721 = cljs.core.seq.call(null,v);var chunk__27718_27722 = null;var count__27719_27723 = (0);var i__27720_27724 = (0);while(true){
if((i__27720_27724 < count__27719_27723))
{var x_27725 = cljs.core._nth.call(null,chunk__27718_27722,i__27720_27724);ret.push(x_27725);
{
var G__27726 = seq__27717_27721;
var G__27727 = chunk__27718_27722;
var G__27728 = count__27719_27723;
var G__27729 = (i__27720_27724 + (1));
seq__27717_27721 = G__27726;
chunk__27718_27722 = G__27727;
count__27719_27723 = G__27728;
i__27720_27724 = G__27729;
continue;
}
} else
{var temp__4126__auto___27730 = cljs.core.seq.call(null,seq__27717_27721);if(temp__4126__auto___27730)
{var seq__27717_27731__$1 = temp__4126__auto___27730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27717_27731__$1))
{var c__13316__auto___27732 = cljs.core.chunk_first.call(null,seq__27717_27731__$1);{
var G__27733 = cljs.core.chunk_rest.call(null,seq__27717_27731__$1);
var G__27734 = c__13316__auto___27732;
var G__27735 = cljs.core.count.call(null,c__13316__auto___27732);
var G__27736 = (0);
seq__27717_27721 = G__27733;
chunk__27718_27722 = G__27734;
count__27719_27723 = G__27735;
i__27720_27724 = G__27736;
continue;
}
} else
{var x_27737 = cljs.core.first.call(null,seq__27717_27731__$1);ret.push(x_27737);
{
var G__27738 = cljs.core.next.call(null,seq__27717_27731__$1);
var G__27739 = null;
var G__27740 = (0);
var G__27741 = (0);
seq__27717_27721 = G__27738;
chunk__27718_27722 = G__27739;
count__27719_27723 = G__27740;
i__27720_27724 = G__27741;
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
, "handlers": (function (){var x27751 = cljs.core.clone.call(null,handlers);x27751.forEach = ((function (x27751,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__27752 = cljs.core.seq.call(null,coll);var chunk__27753 = null;var count__27754 = (0);var i__27755 = (0);while(true){
if((i__27755 < count__27754))
{var vec__27756 = cljs.core._nth.call(null,chunk__27753,i__27755);var k = cljs.core.nth.call(null,vec__27756,(0),null);var v = cljs.core.nth.call(null,vec__27756,(1),null);f.call(null,v,k);
{
var G__27758 = seq__27752;
var G__27759 = chunk__27753;
var G__27760 = count__27754;
var G__27761 = (i__27755 + (1));
seq__27752 = G__27758;
chunk__27753 = G__27759;
count__27754 = G__27760;
i__27755 = G__27761;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27752);if(temp__4126__auto__)
{var seq__27752__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27752__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__27752__$1);{
var G__27762 = cljs.core.chunk_rest.call(null,seq__27752__$1);
var G__27763 = c__13316__auto__;
var G__27764 = cljs.core.count.call(null,c__13316__auto__);
var G__27765 = (0);
seq__27752 = G__27762;
chunk__27753 = G__27763;
count__27754 = G__27764;
i__27755 = G__27765;
continue;
}
} else
{var vec__27757 = cljs.core.first.call(null,seq__27752__$1);var k = cljs.core.nth.call(null,vec__27757,(0),null);var v = cljs.core.nth.call(null,vec__27757,(1),null);f.call(null,v,k);
{
var G__27766 = cljs.core.next.call(null,seq__27752__$1);
var G__27767 = null;
var G__27768 = (0);
var G__27769 = (0);
seq__27752 = G__27766;
chunk__27753 = G__27767;
count__27754 = G__27768;
i__27755 = G__27769;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x27751,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x27751;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__27750 = obj;G__27750.push(kfn.call(null,k),vfn.call(null,v));
return G__27750;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t27773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t27773 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta27774){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta27774 = meta27774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t27773.cljs$lang$type = true;
cognitect.transit.t27773.cljs$lang$ctorStr = "cognitect.transit/t27773";
cognitect.transit.t27773.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t27773");
});
cognitect.transit.t27773.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t27773.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t27773.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t27773.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t27773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27775){var self__ = this;
var _27775__$1 = this;return self__.meta27774;
});
cognitect.transit.t27773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27775,meta27774__$1){var self__ = this;
var _27775__$1 = this;return (new cognitect.transit.t27773(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta27774__$1));
});
cognitect.transit.__GT_t27773 = (function __GT_t27773(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27774){return (new cognitect.transit.t27773(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27774));
});
}
return (new cognitect.transit.t27773(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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