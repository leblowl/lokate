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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__21727_21731 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__21728_21732 = null;var count__21729_21733 = (0);var i__21730_21734 = (0);while(true){
if((i__21730_21734 < count__21729_21733))
{var k_21735 = cljs.core._nth.call(null,chunk__21728_21732,i__21730_21734);var v_21736 = (b[k_21735]);(a[k_21735] = v_21736);
{
var G__21737 = seq__21727_21731;
var G__21738 = chunk__21728_21732;
var G__21739 = count__21729_21733;
var G__21740 = (i__21730_21734 + (1));
seq__21727_21731 = G__21737;
chunk__21728_21732 = G__21738;
count__21729_21733 = G__21739;
i__21730_21734 = G__21740;
continue;
}
} else
{var temp__4126__auto___21741 = cljs.core.seq.call(null,seq__21727_21731);if(temp__4126__auto___21741)
{var seq__21727_21742__$1 = temp__4126__auto___21741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21727_21742__$1))
{var c__13318__auto___21743 = cljs.core.chunk_first.call(null,seq__21727_21742__$1);{
var G__21744 = cljs.core.chunk_rest.call(null,seq__21727_21742__$1);
var G__21745 = c__13318__auto___21743;
var G__21746 = cljs.core.count.call(null,c__13318__auto___21743);
var G__21747 = (0);
seq__21727_21731 = G__21744;
chunk__21728_21732 = G__21745;
count__21729_21733 = G__21746;
i__21730_21734 = G__21747;
continue;
}
} else
{var k_21748 = cljs.core.first.call(null,seq__21727_21742__$1);var v_21749 = (b[k_21748]);(a[k_21748] = v_21749);
{
var G__21750 = cljs.core.next.call(null,seq__21727_21742__$1);
var G__21751 = null;
var G__21752 = (0);
var G__21753 = (0);
seq__21727_21731 = G__21750;
chunk__21728_21732 = G__21751;
count__21729_21733 = G__21752;
i__21730_21734 = G__21753;
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
var G__21754 = (i + (2));
var G__21755 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21754;
ret = G__21755;
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
var _ = this;var ret = [];var seq__21756_21760 = cljs.core.seq.call(null,v);var chunk__21757_21761 = null;var count__21758_21762 = (0);var i__21759_21763 = (0);while(true){
if((i__21759_21763 < count__21758_21762))
{var x_21764 = cljs.core._nth.call(null,chunk__21757_21761,i__21759_21763);ret.push(x_21764);
{
var G__21765 = seq__21756_21760;
var G__21766 = chunk__21757_21761;
var G__21767 = count__21758_21762;
var G__21768 = (i__21759_21763 + (1));
seq__21756_21760 = G__21765;
chunk__21757_21761 = G__21766;
count__21758_21762 = G__21767;
i__21759_21763 = G__21768;
continue;
}
} else
{var temp__4126__auto___21769 = cljs.core.seq.call(null,seq__21756_21760);if(temp__4126__auto___21769)
{var seq__21756_21770__$1 = temp__4126__auto___21769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21756_21770__$1))
{var c__13318__auto___21771 = cljs.core.chunk_first.call(null,seq__21756_21770__$1);{
var G__21772 = cljs.core.chunk_rest.call(null,seq__21756_21770__$1);
var G__21773 = c__13318__auto___21771;
var G__21774 = cljs.core.count.call(null,c__13318__auto___21771);
var G__21775 = (0);
seq__21756_21760 = G__21772;
chunk__21757_21761 = G__21773;
count__21758_21762 = G__21774;
i__21759_21763 = G__21775;
continue;
}
} else
{var x_21776 = cljs.core.first.call(null,seq__21756_21770__$1);ret.push(x_21776);
{
var G__21777 = cljs.core.next.call(null,seq__21756_21770__$1);
var G__21778 = null;
var G__21779 = (0);
var G__21780 = (0);
seq__21756_21760 = G__21777;
chunk__21757_21761 = G__21778;
count__21758_21762 = G__21779;
i__21759_21763 = G__21780;
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
var _ = this;var ret = [];var seq__21781_21785 = cljs.core.seq.call(null,v);var chunk__21782_21786 = null;var count__21783_21787 = (0);var i__21784_21788 = (0);while(true){
if((i__21784_21788 < count__21783_21787))
{var x_21789 = cljs.core._nth.call(null,chunk__21782_21786,i__21784_21788);ret.push(x_21789);
{
var G__21790 = seq__21781_21785;
var G__21791 = chunk__21782_21786;
var G__21792 = count__21783_21787;
var G__21793 = (i__21784_21788 + (1));
seq__21781_21785 = G__21790;
chunk__21782_21786 = G__21791;
count__21783_21787 = G__21792;
i__21784_21788 = G__21793;
continue;
}
} else
{var temp__4126__auto___21794 = cljs.core.seq.call(null,seq__21781_21785);if(temp__4126__auto___21794)
{var seq__21781_21795__$1 = temp__4126__auto___21794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21781_21795__$1))
{var c__13318__auto___21796 = cljs.core.chunk_first.call(null,seq__21781_21795__$1);{
var G__21797 = cljs.core.chunk_rest.call(null,seq__21781_21795__$1);
var G__21798 = c__13318__auto___21796;
var G__21799 = cljs.core.count.call(null,c__13318__auto___21796);
var G__21800 = (0);
seq__21781_21785 = G__21797;
chunk__21782_21786 = G__21798;
count__21783_21787 = G__21799;
i__21784_21788 = G__21800;
continue;
}
} else
{var x_21801 = cljs.core.first.call(null,seq__21781_21795__$1);ret.push(x_21801);
{
var G__21802 = cljs.core.next.call(null,seq__21781_21795__$1);
var G__21803 = null;
var G__21804 = (0);
var G__21805 = (0);
seq__21781_21785 = G__21802;
chunk__21782_21786 = G__21803;
count__21783_21787 = G__21804;
i__21784_21788 = G__21805;
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
var _ = this;var ret = [];var seq__21806_21810 = cljs.core.seq.call(null,v);var chunk__21807_21811 = null;var count__21808_21812 = (0);var i__21809_21813 = (0);while(true){
if((i__21809_21813 < count__21808_21812))
{var x_21814 = cljs.core._nth.call(null,chunk__21807_21811,i__21809_21813);ret.push(x_21814);
{
var G__21815 = seq__21806_21810;
var G__21816 = chunk__21807_21811;
var G__21817 = count__21808_21812;
var G__21818 = (i__21809_21813 + (1));
seq__21806_21810 = G__21815;
chunk__21807_21811 = G__21816;
count__21808_21812 = G__21817;
i__21809_21813 = G__21818;
continue;
}
} else
{var temp__4126__auto___21819 = cljs.core.seq.call(null,seq__21806_21810);if(temp__4126__auto___21819)
{var seq__21806_21820__$1 = temp__4126__auto___21819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21806_21820__$1))
{var c__13318__auto___21821 = cljs.core.chunk_first.call(null,seq__21806_21820__$1);{
var G__21822 = cljs.core.chunk_rest.call(null,seq__21806_21820__$1);
var G__21823 = c__13318__auto___21821;
var G__21824 = cljs.core.count.call(null,c__13318__auto___21821);
var G__21825 = (0);
seq__21806_21810 = G__21822;
chunk__21807_21811 = G__21823;
count__21808_21812 = G__21824;
i__21809_21813 = G__21825;
continue;
}
} else
{var x_21826 = cljs.core.first.call(null,seq__21806_21820__$1);ret.push(x_21826);
{
var G__21827 = cljs.core.next.call(null,seq__21806_21820__$1);
var G__21828 = null;
var G__21829 = (0);
var G__21830 = (0);
seq__21806_21810 = G__21827;
chunk__21807_21811 = G__21828;
count__21808_21812 = G__21829;
i__21809_21813 = G__21830;
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
, "handlers": (function (){var x21840 = cljs.core.clone.call(null,handlers);x21840.forEach = ((function (x21840,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__21841 = cljs.core.seq.call(null,coll);var chunk__21842 = null;var count__21843 = (0);var i__21844 = (0);while(true){
if((i__21844 < count__21843))
{var vec__21845 = cljs.core._nth.call(null,chunk__21842,i__21844);var k = cljs.core.nth.call(null,vec__21845,(0),null);var v = cljs.core.nth.call(null,vec__21845,(1),null);f.call(null,v,k);
{
var G__21847 = seq__21841;
var G__21848 = chunk__21842;
var G__21849 = count__21843;
var G__21850 = (i__21844 + (1));
seq__21841 = G__21847;
chunk__21842 = G__21848;
count__21843 = G__21849;
i__21844 = G__21850;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21841);if(temp__4126__auto__)
{var seq__21841__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21841__$1))
{var c__13318__auto__ = cljs.core.chunk_first.call(null,seq__21841__$1);{
var G__21851 = cljs.core.chunk_rest.call(null,seq__21841__$1);
var G__21852 = c__13318__auto__;
var G__21853 = cljs.core.count.call(null,c__13318__auto__);
var G__21854 = (0);
seq__21841 = G__21851;
chunk__21842 = G__21852;
count__21843 = G__21853;
i__21844 = G__21854;
continue;
}
} else
{var vec__21846 = cljs.core.first.call(null,seq__21841__$1);var k = cljs.core.nth.call(null,vec__21846,(0),null);var v = cljs.core.nth.call(null,vec__21846,(1),null);f.call(null,v,k);
{
var G__21855 = cljs.core.next.call(null,seq__21841__$1);
var G__21856 = null;
var G__21857 = (0);
var G__21858 = (0);
seq__21841 = G__21855;
chunk__21842 = G__21856;
count__21843 = G__21857;
i__21844 = G__21858;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x21840,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x21840;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__21839 = obj;G__21839.push(kfn.call(null,k),vfn.call(null,v));
return G__21839;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t21862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t21862 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21863){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21863 = meta21863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21862.cljs$lang$type = true;
cognitect.transit.t21862.cljs$lang$ctorStr = "cognitect.transit/t21862";
cognitect.transit.t21862.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cognitect.transit/t21862");
});
cognitect.transit.t21862.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t21862.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t21862.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t21862.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t21862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21864){var self__ = this;
var _21864__$1 = this;return self__.meta21863;
});
cognitect.transit.t21862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21864,meta21863__$1){var self__ = this;
var _21864__$1 = this;return (new cognitect.transit.t21862(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21863__$1));
});
cognitect.transit.__GT_t21862 = (function __GT_t21862(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21863){return (new cognitect.transit.t21862(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21863));
});
}
return (new cognitect.transit.t21862(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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