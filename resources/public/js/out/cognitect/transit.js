// Compiled by ClojureScript 0.0-2277
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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__11579_11583 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__11580_11584 = null;var count__11581_11585 = (0);var i__11582_11586 = (0);while(true){
if((i__11582_11586 < count__11581_11585))
{var k_11587 = cljs.core._nth.call(null,chunk__11580_11584,i__11582_11586);var v_11588 = (b[k_11587]);(a[k_11587] = v_11588);
{
var G__11589 = seq__11579_11583;
var G__11590 = chunk__11580_11584;
var G__11591 = count__11581_11585;
var G__11592 = (i__11582_11586 + (1));
seq__11579_11583 = G__11589;
chunk__11580_11584 = G__11590;
count__11581_11585 = G__11591;
i__11582_11586 = G__11592;
continue;
}
} else
{var temp__4126__auto___11593 = cljs.core.seq.call(null,seq__11579_11583);if(temp__4126__auto___11593)
{var seq__11579_11594__$1 = temp__4126__auto___11593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11579_11594__$1))
{var c__4309__auto___11595 = cljs.core.chunk_first.call(null,seq__11579_11594__$1);{
var G__11596 = cljs.core.chunk_rest.call(null,seq__11579_11594__$1);
var G__11597 = c__4309__auto___11595;
var G__11598 = cljs.core.count.call(null,c__4309__auto___11595);
var G__11599 = (0);
seq__11579_11583 = G__11596;
chunk__11580_11584 = G__11597;
count__11581_11585 = G__11598;
i__11582_11586 = G__11599;
continue;
}
} else
{var k_11600 = cljs.core.first.call(null,seq__11579_11594__$1);var v_11601 = (b[k_11600]);(a[k_11600] = v_11601);
{
var G__11602 = cljs.core.next.call(null,seq__11579_11594__$1);
var G__11603 = null;
var G__11604 = (0);
var G__11605 = (0);
seq__11579_11583 = G__11602;
chunk__11580_11584 = G__11603;
count__11581_11585 = G__11604;
i__11582_11586 = G__11605;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapBuilder");
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorBuilder");
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
var G__11606 = (i + (2));
var G__11607 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11606;
ret = G__11607;
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11608_11612 = cljs.core.seq.call(null,v);var chunk__11609_11613 = null;var count__11610_11614 = (0);var i__11611_11615 = (0);while(true){
if((i__11611_11615 < count__11610_11614))
{var x_11616 = cljs.core._nth.call(null,chunk__11609_11613,i__11611_11615);ret.push(x_11616);
{
var G__11617 = seq__11608_11612;
var G__11618 = chunk__11609_11613;
var G__11619 = count__11610_11614;
var G__11620 = (i__11611_11615 + (1));
seq__11608_11612 = G__11617;
chunk__11609_11613 = G__11618;
count__11610_11614 = G__11619;
i__11611_11615 = G__11620;
continue;
}
} else
{var temp__4126__auto___11621 = cljs.core.seq.call(null,seq__11608_11612);if(temp__4126__auto___11621)
{var seq__11608_11622__$1 = temp__4126__auto___11621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11608_11622__$1))
{var c__4309__auto___11623 = cljs.core.chunk_first.call(null,seq__11608_11622__$1);{
var G__11624 = cljs.core.chunk_rest.call(null,seq__11608_11622__$1);
var G__11625 = c__4309__auto___11623;
var G__11626 = cljs.core.count.call(null,c__4309__auto___11623);
var G__11627 = (0);
seq__11608_11612 = G__11624;
chunk__11609_11613 = G__11625;
count__11610_11614 = G__11626;
i__11611_11615 = G__11627;
continue;
}
} else
{var x_11628 = cljs.core.first.call(null,seq__11608_11622__$1);ret.push(x_11628);
{
var G__11629 = cljs.core.next.call(null,seq__11608_11622__$1);
var G__11630 = null;
var G__11631 = (0);
var G__11632 = (0);
seq__11608_11612 = G__11629;
chunk__11609_11613 = G__11630;
count__11610_11614 = G__11631;
i__11611_11615 = G__11632;
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11633_11637 = cljs.core.seq.call(null,v);var chunk__11634_11638 = null;var count__11635_11639 = (0);var i__11636_11640 = (0);while(true){
if((i__11636_11640 < count__11635_11639))
{var x_11641 = cljs.core._nth.call(null,chunk__11634_11638,i__11636_11640);ret.push(x_11641);
{
var G__11642 = seq__11633_11637;
var G__11643 = chunk__11634_11638;
var G__11644 = count__11635_11639;
var G__11645 = (i__11636_11640 + (1));
seq__11633_11637 = G__11642;
chunk__11634_11638 = G__11643;
count__11635_11639 = G__11644;
i__11636_11640 = G__11645;
continue;
}
} else
{var temp__4126__auto___11646 = cljs.core.seq.call(null,seq__11633_11637);if(temp__4126__auto___11646)
{var seq__11633_11647__$1 = temp__4126__auto___11646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11633_11647__$1))
{var c__4309__auto___11648 = cljs.core.chunk_first.call(null,seq__11633_11647__$1);{
var G__11649 = cljs.core.chunk_rest.call(null,seq__11633_11647__$1);
var G__11650 = c__4309__auto___11648;
var G__11651 = cljs.core.count.call(null,c__4309__auto___11648);
var G__11652 = (0);
seq__11633_11637 = G__11649;
chunk__11634_11638 = G__11650;
count__11635_11639 = G__11651;
i__11636_11640 = G__11652;
continue;
}
} else
{var x_11653 = cljs.core.first.call(null,seq__11633_11647__$1);ret.push(x_11653);
{
var G__11654 = cljs.core.next.call(null,seq__11633_11647__$1);
var G__11655 = null;
var G__11656 = (0);
var G__11657 = (0);
seq__11633_11637 = G__11654;
chunk__11634_11638 = G__11655;
count__11635_11639 = G__11656;
i__11636_11640 = G__11657;
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11658_11662 = cljs.core.seq.call(null,v);var chunk__11659_11663 = null;var count__11660_11664 = (0);var i__11661_11665 = (0);while(true){
if((i__11661_11665 < count__11660_11664))
{var x_11666 = cljs.core._nth.call(null,chunk__11659_11663,i__11661_11665);ret.push(x_11666);
{
var G__11667 = seq__11658_11662;
var G__11668 = chunk__11659_11663;
var G__11669 = count__11660_11664;
var G__11670 = (i__11661_11665 + (1));
seq__11658_11662 = G__11667;
chunk__11659_11663 = G__11668;
count__11660_11664 = G__11669;
i__11661_11665 = G__11670;
continue;
}
} else
{var temp__4126__auto___11671 = cljs.core.seq.call(null,seq__11658_11662);if(temp__4126__auto___11671)
{var seq__11658_11672__$1 = temp__4126__auto___11671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11658_11672__$1))
{var c__4309__auto___11673 = cljs.core.chunk_first.call(null,seq__11658_11672__$1);{
var G__11674 = cljs.core.chunk_rest.call(null,seq__11658_11672__$1);
var G__11675 = c__4309__auto___11673;
var G__11676 = cljs.core.count.call(null,c__4309__auto___11673);
var G__11677 = (0);
seq__11658_11662 = G__11674;
chunk__11659_11663 = G__11675;
count__11660_11664 = G__11676;
i__11661_11665 = G__11677;
continue;
}
} else
{var x_11678 = cljs.core.first.call(null,seq__11658_11672__$1);ret.push(x_11678);
{
var G__11679 = cljs.core.next.call(null,seq__11658_11672__$1);
var G__11680 = null;
var G__11681 = (0);
var G__11682 = (0);
seq__11658_11662 = G__11679;
chunk__11659_11663 = G__11680;
count__11660_11664 = G__11681;
i__11661_11665 = G__11682;
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
, "handlers": (function (){var x11692 = cljs.core.clone.call(null,handlers);x11692.forEach = ((function (x11692,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__11693 = cljs.core.seq.call(null,coll);var chunk__11694 = null;var count__11695 = (0);var i__11696 = (0);while(true){
if((i__11696 < count__11695))
{var vec__11697 = cljs.core._nth.call(null,chunk__11694,i__11696);var k = cljs.core.nth.call(null,vec__11697,(0),null);var v = cljs.core.nth.call(null,vec__11697,(1),null);f.call(null,v,k);
{
var G__11699 = seq__11693;
var G__11700 = chunk__11694;
var G__11701 = count__11695;
var G__11702 = (i__11696 + (1));
seq__11693 = G__11699;
chunk__11694 = G__11700;
count__11695 = G__11701;
i__11696 = G__11702;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11693);if(temp__4126__auto__)
{var seq__11693__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11693__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__11693__$1);{
var G__11703 = cljs.core.chunk_rest.call(null,seq__11693__$1);
var G__11704 = c__4309__auto__;
var G__11705 = cljs.core.count.call(null,c__4309__auto__);
var G__11706 = (0);
seq__11693 = G__11703;
chunk__11694 = G__11704;
count__11695 = G__11705;
i__11696 = G__11706;
continue;
}
} else
{var vec__11698 = cljs.core.first.call(null,seq__11693__$1);var k = cljs.core.nth.call(null,vec__11698,(0),null);var v = cljs.core.nth.call(null,vec__11698,(1),null);f.call(null,v,k);
{
var G__11707 = cljs.core.next.call(null,seq__11693__$1);
var G__11708 = null;
var G__11709 = (0);
var G__11710 = (0);
seq__11693 = G__11707;
chunk__11694 = G__11708;
count__11695 = G__11709;
i__11696 = G__11710;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x11692,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x11692;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__11691 = obj;G__11691.push(kfn.call(null,k),vfn.call(null,v));
return G__11691;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t11714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t11714 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta11715){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta11715 = meta11715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t11714.cljs$lang$type = true;
cognitect.transit.t11714.cljs$lang$ctorStr = "cognitect.transit/t11714";
cognitect.transit.t11714.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t11714");
});
cognitect.transit.t11714.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t11714.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t11714.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t11714.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t11714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11716){var self__ = this;
var _11716__$1 = this;return self__.meta11715;
});
cognitect.transit.t11714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11716,meta11715__$1){var self__ = this;
var _11716__$1 = this;return (new cognitect.transit.t11714(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta11715__$1));
});
cognitect.transit.__GT_t11714 = (function __GT_t11714(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11715){return (new cognitect.transit.t11714(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta11715));
});
}
return (new cognitect.transit.t11714(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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