// Compiled by ClojureScript 0.0-2322
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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__11692_11696 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__11693_11697 = null;var count__11694_11698 = (0);var i__11695_11699 = (0);while(true){
if((i__11695_11699 < count__11694_11698))
{var k_11700 = cljs.core._nth.call(null,chunk__11693_11697,i__11695_11699);var v_11701 = (b[k_11700]);(a[k_11700] = v_11701);
{
var G__11702 = seq__11692_11696;
var G__11703 = chunk__11693_11697;
var G__11704 = count__11694_11698;
var G__11705 = (i__11695_11699 + (1));
seq__11692_11696 = G__11702;
chunk__11693_11697 = G__11703;
count__11694_11698 = G__11704;
i__11695_11699 = G__11705;
continue;
}
} else
{var temp__4126__auto___11706 = cljs.core.seq.call(null,seq__11692_11696);if(temp__4126__auto___11706)
{var seq__11692_11707__$1 = temp__4126__auto___11706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11692_11707__$1))
{var c__4326__auto___11708 = cljs.core.chunk_first.call(null,seq__11692_11707__$1);{
var G__11709 = cljs.core.chunk_rest.call(null,seq__11692_11707__$1);
var G__11710 = c__4326__auto___11708;
var G__11711 = cljs.core.count.call(null,c__4326__auto___11708);
var G__11712 = (0);
seq__11692_11696 = G__11709;
chunk__11693_11697 = G__11710;
count__11694_11698 = G__11711;
i__11695_11699 = G__11712;
continue;
}
} else
{var k_11713 = cljs.core.first.call(null,seq__11692_11707__$1);var v_11714 = (b[k_11713]);(a[k_11713] = v_11714);
{
var G__11715 = cljs.core.next.call(null,seq__11692_11707__$1);
var G__11716 = null;
var G__11717 = (0);
var G__11718 = (0);
seq__11692_11696 = G__11715;
chunk__11693_11697 = G__11716;
count__11694_11698 = G__11717;
i__11695_11699 = G__11718;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/MapBuilder");
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/VectorBuilder");
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
var G__11719 = (i + (2));
var G__11720 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11719;
ret = G__11720;
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11721_11725 = cljs.core.seq.call(null,v);var chunk__11722_11726 = null;var count__11723_11727 = (0);var i__11724_11728 = (0);while(true){
if((i__11724_11728 < count__11723_11727))
{var x_11729 = cljs.core._nth.call(null,chunk__11722_11726,i__11724_11728);ret.push(x_11729);
{
var G__11730 = seq__11721_11725;
var G__11731 = chunk__11722_11726;
var G__11732 = count__11723_11727;
var G__11733 = (i__11724_11728 + (1));
seq__11721_11725 = G__11730;
chunk__11722_11726 = G__11731;
count__11723_11727 = G__11732;
i__11724_11728 = G__11733;
continue;
}
} else
{var temp__4126__auto___11734 = cljs.core.seq.call(null,seq__11721_11725);if(temp__4126__auto___11734)
{var seq__11721_11735__$1 = temp__4126__auto___11734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11721_11735__$1))
{var c__4326__auto___11736 = cljs.core.chunk_first.call(null,seq__11721_11735__$1);{
var G__11737 = cljs.core.chunk_rest.call(null,seq__11721_11735__$1);
var G__11738 = c__4326__auto___11736;
var G__11739 = cljs.core.count.call(null,c__4326__auto___11736);
var G__11740 = (0);
seq__11721_11725 = G__11737;
chunk__11722_11726 = G__11738;
count__11723_11727 = G__11739;
i__11724_11728 = G__11740;
continue;
}
} else
{var x_11741 = cljs.core.first.call(null,seq__11721_11735__$1);ret.push(x_11741);
{
var G__11742 = cljs.core.next.call(null,seq__11721_11735__$1);
var G__11743 = null;
var G__11744 = (0);
var G__11745 = (0);
seq__11721_11725 = G__11742;
chunk__11722_11726 = G__11743;
count__11723_11727 = G__11744;
i__11724_11728 = G__11745;
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11746_11750 = cljs.core.seq.call(null,v);var chunk__11747_11751 = null;var count__11748_11752 = (0);var i__11749_11753 = (0);while(true){
if((i__11749_11753 < count__11748_11752))
{var x_11754 = cljs.core._nth.call(null,chunk__11747_11751,i__11749_11753);ret.push(x_11754);
{
var G__11755 = seq__11746_11750;
var G__11756 = chunk__11747_11751;
var G__11757 = count__11748_11752;
var G__11758 = (i__11749_11753 + (1));
seq__11746_11750 = G__11755;
chunk__11747_11751 = G__11756;
count__11748_11752 = G__11757;
i__11749_11753 = G__11758;
continue;
}
} else
{var temp__4126__auto___11759 = cljs.core.seq.call(null,seq__11746_11750);if(temp__4126__auto___11759)
{var seq__11746_11760__$1 = temp__4126__auto___11759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11746_11760__$1))
{var c__4326__auto___11761 = cljs.core.chunk_first.call(null,seq__11746_11760__$1);{
var G__11762 = cljs.core.chunk_rest.call(null,seq__11746_11760__$1);
var G__11763 = c__4326__auto___11761;
var G__11764 = cljs.core.count.call(null,c__4326__auto___11761);
var G__11765 = (0);
seq__11746_11750 = G__11762;
chunk__11747_11751 = G__11763;
count__11748_11752 = G__11764;
i__11749_11753 = G__11765;
continue;
}
} else
{var x_11766 = cljs.core.first.call(null,seq__11746_11760__$1);ret.push(x_11766);
{
var G__11767 = cljs.core.next.call(null,seq__11746_11760__$1);
var G__11768 = null;
var G__11769 = (0);
var G__11770 = (0);
seq__11746_11750 = G__11767;
chunk__11747_11751 = G__11768;
count__11748_11752 = G__11769;
i__11749_11753 = G__11770;
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11771_11775 = cljs.core.seq.call(null,v);var chunk__11772_11776 = null;var count__11773_11777 = (0);var i__11774_11778 = (0);while(true){
if((i__11774_11778 < count__11773_11777))
{var x_11779 = cljs.core._nth.call(null,chunk__11772_11776,i__11774_11778);ret.push(x_11779);
{
var G__11780 = seq__11771_11775;
var G__11781 = chunk__11772_11776;
var G__11782 = count__11773_11777;
var G__11783 = (i__11774_11778 + (1));
seq__11771_11775 = G__11780;
chunk__11772_11776 = G__11781;
count__11773_11777 = G__11782;
i__11774_11778 = G__11783;
continue;
}
} else
{var temp__4126__auto___11784 = cljs.core.seq.call(null,seq__11771_11775);if(temp__4126__auto___11784)
{var seq__11771_11785__$1 = temp__4126__auto___11784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771_11785__$1))
{var c__4326__auto___11786 = cljs.core.chunk_first.call(null,seq__11771_11785__$1);{
var G__11787 = cljs.core.chunk_rest.call(null,seq__11771_11785__$1);
var G__11788 = c__4326__auto___11786;
var G__11789 = cljs.core.count.call(null,c__4326__auto___11786);
var G__11790 = (0);
seq__11771_11775 = G__11787;
chunk__11772_11776 = G__11788;
count__11773_11777 = G__11789;
i__11774_11778 = G__11790;
continue;
}
} else
{var x_11791 = cljs.core.first.call(null,seq__11771_11785__$1);ret.push(x_11791);
{
var G__11792 = cljs.core.next.call(null,seq__11771_11785__$1);
var G__11793 = null;
var G__11794 = (0);
var G__11795 = (0);
seq__11771_11775 = G__11792;
chunk__11772_11776 = G__11793;
count__11773_11777 = G__11794;
i__11774_11778 = G__11795;
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
, "handlers": (function (){var x11805 = cljs.core.clone.call(null,handlers);x11805.forEach = ((function (x11805,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__11806 = cljs.core.seq.call(null,coll);var chunk__11807 = null;var count__11808 = (0);var i__11809 = (0);while(true){
if((i__11809 < count__11808))
{var vec__11810 = cljs.core._nth.call(null,chunk__11807,i__11809);var k = cljs.core.nth.call(null,vec__11810,(0),null);var v = cljs.core.nth.call(null,vec__11810,(1),null);f.call(null,v,k);
{
var G__11812 = seq__11806;
var G__11813 = chunk__11807;
var G__11814 = count__11808;
var G__11815 = (i__11809 + (1));
seq__11806 = G__11812;
chunk__11807 = G__11813;
count__11808 = G__11814;
i__11809 = G__11815;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11806);if(temp__4126__auto__)
{var seq__11806__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11806__$1))
{var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__11806__$1);{
var G__11816 = cljs.core.chunk_rest.call(null,seq__11806__$1);
var G__11817 = c__4326__auto__;
var G__11818 = cljs.core.count.call(null,c__4326__auto__);
var G__11819 = (0);
seq__11806 = G__11816;
chunk__11807 = G__11817;
count__11808 = G__11818;
i__11809 = G__11819;
continue;
}
} else
{var vec__11811 = cljs.core.first.call(null,seq__11806__$1);var k = cljs.core.nth.call(null,vec__11811,(0),null);var v = cljs.core.nth.call(null,vec__11811,(1),null);f.call(null,v,k);
{
var G__11820 = cljs.core.next.call(null,seq__11806__$1);
var G__11821 = null;
var G__11822 = (0);
var G__11823 = (0);
seq__11806 = G__11820;
chunk__11807 = G__11821;
count__11808 = G__11822;
i__11809 = G__11823;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x11805,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x11805;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__11804 = obj;G__11804.push(kfn.call(null,k),vfn.call(null,v));
return G__11804;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t11827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t11827 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta11828){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta11828 = meta11828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t11827.cljs$lang$type = true;
cognitect.transit.t11827.cljs$lang$ctorStr = "cognitect.transit/t11827";
cognitect.transit.t11827.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cognitect.transit/t11827");
});
cognitect.transit.t11827.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t11827.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t11827.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t11827.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t11827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11829){var self__ = this;
var _11829__$1 = this;return self__.meta11828;
});
cognitect.transit.t11827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11829,meta11828__$1){var self__ = this;
var _11829__$1 = this;return (new cognitect.transit.t11827(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta11828__$1));
});
cognitect.transit.__GT_t11827 = (function __GT_t11827(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11828){return (new cognitect.transit.t11827(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11828));
});
}
return (new cognitect.transit.t11827(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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