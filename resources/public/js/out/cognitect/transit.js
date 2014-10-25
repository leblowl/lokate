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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__27737_27741 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__27738_27742 = null;var count__27739_27743 = (0);var i__27740_27744 = (0);while(true){
if((i__27740_27744 < count__27739_27743))
{var k_27745 = cljs.core._nth.call(null,chunk__27738_27742,i__27740_27744);var v_27746 = (b[k_27745]);(a[k_27745] = v_27746);
{
var G__27747 = seq__27737_27741;
var G__27748 = chunk__27738_27742;
var G__27749 = count__27739_27743;
var G__27750 = (i__27740_27744 + (1));
seq__27737_27741 = G__27747;
chunk__27738_27742 = G__27748;
count__27739_27743 = G__27749;
i__27740_27744 = G__27750;
continue;
}
} else
{var temp__4126__auto___27751 = cljs.core.seq.call(null,seq__27737_27741);if(temp__4126__auto___27751)
{var seq__27737_27752__$1 = temp__4126__auto___27751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27737_27752__$1))
{var c__13316__auto___27753 = cljs.core.chunk_first.call(null,seq__27737_27752__$1);{
var G__27754 = cljs.core.chunk_rest.call(null,seq__27737_27752__$1);
var G__27755 = c__13316__auto___27753;
var G__27756 = cljs.core.count.call(null,c__13316__auto___27753);
var G__27757 = (0);
seq__27737_27741 = G__27754;
chunk__27738_27742 = G__27755;
count__27739_27743 = G__27756;
i__27740_27744 = G__27757;
continue;
}
} else
{var k_27758 = cljs.core.first.call(null,seq__27737_27752__$1);var v_27759 = (b[k_27758]);(a[k_27758] = v_27759);
{
var G__27760 = cljs.core.next.call(null,seq__27737_27752__$1);
var G__27761 = null;
var G__27762 = (0);
var G__27763 = (0);
seq__27737_27741 = G__27760;
chunk__27738_27742 = G__27761;
count__27739_27743 = G__27762;
i__27740_27744 = G__27763;
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
var G__27764 = (i + (2));
var G__27765 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27764;
ret = G__27765;
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
var _ = this;var ret = [];var seq__27766_27770 = cljs.core.seq.call(null,v);var chunk__27767_27771 = null;var count__27768_27772 = (0);var i__27769_27773 = (0);while(true){
if((i__27769_27773 < count__27768_27772))
{var x_27774 = cljs.core._nth.call(null,chunk__27767_27771,i__27769_27773);ret.push(x_27774);
{
var G__27775 = seq__27766_27770;
var G__27776 = chunk__27767_27771;
var G__27777 = count__27768_27772;
var G__27778 = (i__27769_27773 + (1));
seq__27766_27770 = G__27775;
chunk__27767_27771 = G__27776;
count__27768_27772 = G__27777;
i__27769_27773 = G__27778;
continue;
}
} else
{var temp__4126__auto___27779 = cljs.core.seq.call(null,seq__27766_27770);if(temp__4126__auto___27779)
{var seq__27766_27780__$1 = temp__4126__auto___27779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27766_27780__$1))
{var c__13316__auto___27781 = cljs.core.chunk_first.call(null,seq__27766_27780__$1);{
var G__27782 = cljs.core.chunk_rest.call(null,seq__27766_27780__$1);
var G__27783 = c__13316__auto___27781;
var G__27784 = cljs.core.count.call(null,c__13316__auto___27781);
var G__27785 = (0);
seq__27766_27770 = G__27782;
chunk__27767_27771 = G__27783;
count__27768_27772 = G__27784;
i__27769_27773 = G__27785;
continue;
}
} else
{var x_27786 = cljs.core.first.call(null,seq__27766_27780__$1);ret.push(x_27786);
{
var G__27787 = cljs.core.next.call(null,seq__27766_27780__$1);
var G__27788 = null;
var G__27789 = (0);
var G__27790 = (0);
seq__27766_27770 = G__27787;
chunk__27767_27771 = G__27788;
count__27768_27772 = G__27789;
i__27769_27773 = G__27790;
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
var _ = this;var ret = [];var seq__27791_27795 = cljs.core.seq.call(null,v);var chunk__27792_27796 = null;var count__27793_27797 = (0);var i__27794_27798 = (0);while(true){
if((i__27794_27798 < count__27793_27797))
{var x_27799 = cljs.core._nth.call(null,chunk__27792_27796,i__27794_27798);ret.push(x_27799);
{
var G__27800 = seq__27791_27795;
var G__27801 = chunk__27792_27796;
var G__27802 = count__27793_27797;
var G__27803 = (i__27794_27798 + (1));
seq__27791_27795 = G__27800;
chunk__27792_27796 = G__27801;
count__27793_27797 = G__27802;
i__27794_27798 = G__27803;
continue;
}
} else
{var temp__4126__auto___27804 = cljs.core.seq.call(null,seq__27791_27795);if(temp__4126__auto___27804)
{var seq__27791_27805__$1 = temp__4126__auto___27804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27791_27805__$1))
{var c__13316__auto___27806 = cljs.core.chunk_first.call(null,seq__27791_27805__$1);{
var G__27807 = cljs.core.chunk_rest.call(null,seq__27791_27805__$1);
var G__27808 = c__13316__auto___27806;
var G__27809 = cljs.core.count.call(null,c__13316__auto___27806);
var G__27810 = (0);
seq__27791_27795 = G__27807;
chunk__27792_27796 = G__27808;
count__27793_27797 = G__27809;
i__27794_27798 = G__27810;
continue;
}
} else
{var x_27811 = cljs.core.first.call(null,seq__27791_27805__$1);ret.push(x_27811);
{
var G__27812 = cljs.core.next.call(null,seq__27791_27805__$1);
var G__27813 = null;
var G__27814 = (0);
var G__27815 = (0);
seq__27791_27795 = G__27812;
chunk__27792_27796 = G__27813;
count__27793_27797 = G__27814;
i__27794_27798 = G__27815;
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
var _ = this;var ret = [];var seq__27816_27820 = cljs.core.seq.call(null,v);var chunk__27817_27821 = null;var count__27818_27822 = (0);var i__27819_27823 = (0);while(true){
if((i__27819_27823 < count__27818_27822))
{var x_27824 = cljs.core._nth.call(null,chunk__27817_27821,i__27819_27823);ret.push(x_27824);
{
var G__27825 = seq__27816_27820;
var G__27826 = chunk__27817_27821;
var G__27827 = count__27818_27822;
var G__27828 = (i__27819_27823 + (1));
seq__27816_27820 = G__27825;
chunk__27817_27821 = G__27826;
count__27818_27822 = G__27827;
i__27819_27823 = G__27828;
continue;
}
} else
{var temp__4126__auto___27829 = cljs.core.seq.call(null,seq__27816_27820);if(temp__4126__auto___27829)
{var seq__27816_27830__$1 = temp__4126__auto___27829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27816_27830__$1))
{var c__13316__auto___27831 = cljs.core.chunk_first.call(null,seq__27816_27830__$1);{
var G__27832 = cljs.core.chunk_rest.call(null,seq__27816_27830__$1);
var G__27833 = c__13316__auto___27831;
var G__27834 = cljs.core.count.call(null,c__13316__auto___27831);
var G__27835 = (0);
seq__27816_27820 = G__27832;
chunk__27817_27821 = G__27833;
count__27818_27822 = G__27834;
i__27819_27823 = G__27835;
continue;
}
} else
{var x_27836 = cljs.core.first.call(null,seq__27816_27830__$1);ret.push(x_27836);
{
var G__27837 = cljs.core.next.call(null,seq__27816_27830__$1);
var G__27838 = null;
var G__27839 = (0);
var G__27840 = (0);
seq__27816_27820 = G__27837;
chunk__27817_27821 = G__27838;
count__27818_27822 = G__27839;
i__27819_27823 = G__27840;
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
, "handlers": (function (){var x27850 = cljs.core.clone.call(null,handlers);x27850.forEach = ((function (x27850,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__27851 = cljs.core.seq.call(null,coll);var chunk__27852 = null;var count__27853 = (0);var i__27854 = (0);while(true){
if((i__27854 < count__27853))
{var vec__27855 = cljs.core._nth.call(null,chunk__27852,i__27854);var k = cljs.core.nth.call(null,vec__27855,(0),null);var v = cljs.core.nth.call(null,vec__27855,(1),null);f.call(null,v,k);
{
var G__27857 = seq__27851;
var G__27858 = chunk__27852;
var G__27859 = count__27853;
var G__27860 = (i__27854 + (1));
seq__27851 = G__27857;
chunk__27852 = G__27858;
count__27853 = G__27859;
i__27854 = G__27860;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27851);if(temp__4126__auto__)
{var seq__27851__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27851__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__27851__$1);{
var G__27861 = cljs.core.chunk_rest.call(null,seq__27851__$1);
var G__27862 = c__13316__auto__;
var G__27863 = cljs.core.count.call(null,c__13316__auto__);
var G__27864 = (0);
seq__27851 = G__27861;
chunk__27852 = G__27862;
count__27853 = G__27863;
i__27854 = G__27864;
continue;
}
} else
{var vec__27856 = cljs.core.first.call(null,seq__27851__$1);var k = cljs.core.nth.call(null,vec__27856,(0),null);var v = cljs.core.nth.call(null,vec__27856,(1),null);f.call(null,v,k);
{
var G__27865 = cljs.core.next.call(null,seq__27851__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27851 = G__27865;
chunk__27852 = G__27866;
count__27853 = G__27867;
i__27854 = G__27868;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x27850,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x27850;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__27849 = obj;G__27849.push(kfn.call(null,k),vfn.call(null,v));
return G__27849;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t27872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t27872 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta27873){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta27873 = meta27873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t27872.cljs$lang$type = true;
cognitect.transit.t27872.cljs$lang$ctorStr = "cognitect.transit/t27872";
cognitect.transit.t27872.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t27872");
});
cognitect.transit.t27872.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t27872.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t27872.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t27872.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t27872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27874){var self__ = this;
var _27874__$1 = this;return self__.meta27873;
});
cognitect.transit.t27872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27874,meta27873__$1){var self__ = this;
var _27874__$1 = this;return (new cognitect.transit.t27872(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta27873__$1));
});
cognitect.transit.__GT_t27872 = (function __GT_t27872(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27873){return (new cognitect.transit.t27872(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27873));
});
}
return (new cognitect.transit.t27872(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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