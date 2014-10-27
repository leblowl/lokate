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
cljs.core.enable_console_print_BANG_();
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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23735 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23735) : com.cognitect.transit.eq.hashCode.call(null,G__23735));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23736 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23736) : com.cognitect.transit.eq.hashCode.call(null,G__23736));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23737 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23737) : com.cognitect.transit.eq.hashCode.call(null,G__23737));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23742_23746 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23743_23747 = null;var count__23744_23748 = (0);var i__23745_23749 = (0);while(true){
if((i__23745_23749 < count__23744_23748))
{var k_23750 = chunk__23743_23747.cljs$core$IIndexed$_nth$arity$2(null,i__23745_23749);var v_23751 = (b[k_23750]);(a[k_23750] = v_23751);
{
var G__23752 = seq__23742_23746;
var G__23753 = chunk__23743_23747;
var G__23754 = count__23744_23748;
var G__23755 = (i__23745_23749 + (1));
seq__23742_23746 = G__23752;
chunk__23743_23747 = G__23753;
count__23744_23748 = G__23754;
i__23745_23749 = G__23755;
continue;
}
} else
{var temp__4126__auto___23756 = cljs.core.seq(seq__23742_23746);if(temp__4126__auto___23756)
{var seq__23742_23757__$1 = temp__4126__auto___23756;if(cljs.core.chunked_seq_QMARK_(seq__23742_23757__$1))
{var c__4410__auto___23758 = cljs.core.chunk_first(seq__23742_23757__$1);{
var G__23759 = cljs.core.chunk_rest(seq__23742_23757__$1);
var G__23760 = c__4410__auto___23758;
var G__23761 = cljs.core.count(c__4410__auto___23758);
var G__23762 = (0);
seq__23742_23746 = G__23759;
chunk__23743_23747 = G__23760;
count__23744_23748 = G__23761;
i__23745_23749 = G__23762;
continue;
}
} else
{var k_23763 = cljs.core.first(seq__23742_23757__$1);var v_23764 = (b[k_23763]);(a[k_23763] = v_23764);
{
var G__23765 = cljs.core.next(seq__23742_23757__$1);
var G__23766 = null;
var G__23767 = (0);
var G__23768 = (0);
seq__23742_23746 = G__23765;
chunk__23743_23747 = G__23766;
count__23744_23748 = G__23767;
i__23745_23749 = G__23768;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__23769 = arr;var G__23770 = true;var G__23771 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23769,G__23770,G__23771) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23769,G__23770,G__23771));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__23772 = arr;var G__23773 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23772,G__23773) : cljs.core.PersistentVector.fromArray.call(null,G__23772,G__23773));
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
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__23778 = cljs.core.name(type);var G__23779 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23778){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23780 = (i + (2));
var G__23781 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23780;
ret = G__23781;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23778))
, "list": ((function (G__23778){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23778))
, "set": ((function (G__23778){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23778))
, ":": ((function (G__23778){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23778))
, "$": ((function (G__23778){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23778))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23778,G__23779) : com.cognitect.transit.reader.call(null,G__23778,G__23779));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23782_23788 = cljs.core.seq(v);var chunk__23783_23789 = null;var count__23784_23790 = (0);var i__23785_23791 = (0);while(true){
if((i__23785_23791 < count__23784_23790))
{var x_23792 = chunk__23783_23789.cljs$core$IIndexed$_nth$arity$2(null,i__23785_23791);ret.push(x_23792);
{
var G__23793 = seq__23782_23788;
var G__23794 = chunk__23783_23789;
var G__23795 = count__23784_23790;
var G__23796 = (i__23785_23791 + (1));
seq__23782_23788 = G__23793;
chunk__23783_23789 = G__23794;
count__23784_23790 = G__23795;
i__23785_23791 = G__23796;
continue;
}
} else
{var temp__4126__auto___23797 = cljs.core.seq(seq__23782_23788);if(temp__4126__auto___23797)
{var seq__23782_23798__$1 = temp__4126__auto___23797;if(cljs.core.chunked_seq_QMARK_(seq__23782_23798__$1))
{var c__4410__auto___23799 = cljs.core.chunk_first(seq__23782_23798__$1);{
var G__23800 = cljs.core.chunk_rest(seq__23782_23798__$1);
var G__23801 = c__4410__auto___23799;
var G__23802 = cljs.core.count(c__4410__auto___23799);
var G__23803 = (0);
seq__23782_23788 = G__23800;
chunk__23783_23789 = G__23801;
count__23784_23790 = G__23802;
i__23785_23791 = G__23803;
continue;
}
} else
{var x_23804 = cljs.core.first(seq__23782_23798__$1);ret.push(x_23804);
{
var G__23805 = cljs.core.next(seq__23782_23798__$1);
var G__23806 = null;
var G__23807 = (0);
var G__23808 = (0);
seq__23782_23788 = G__23805;
chunk__23783_23789 = G__23806;
count__23784_23790 = G__23807;
i__23785_23791 = G__23808;
continue;
}
}
} else
{}
}
break;
}
var G__23786 = "array";var G__23787 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23786,G__23787) : com.cognitect.transit.tagged.call(null,G__23786,G__23787));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23809_23815 = cljs.core.seq(v);var chunk__23810_23816 = null;var count__23811_23817 = (0);var i__23812_23818 = (0);while(true){
if((i__23812_23818 < count__23811_23817))
{var x_23819 = chunk__23810_23816.cljs$core$IIndexed$_nth$arity$2(null,i__23812_23818);ret.push(x_23819);
{
var G__23820 = seq__23809_23815;
var G__23821 = chunk__23810_23816;
var G__23822 = count__23811_23817;
var G__23823 = (i__23812_23818 + (1));
seq__23809_23815 = G__23820;
chunk__23810_23816 = G__23821;
count__23811_23817 = G__23822;
i__23812_23818 = G__23823;
continue;
}
} else
{var temp__4126__auto___23824 = cljs.core.seq(seq__23809_23815);if(temp__4126__auto___23824)
{var seq__23809_23825__$1 = temp__4126__auto___23824;if(cljs.core.chunked_seq_QMARK_(seq__23809_23825__$1))
{var c__4410__auto___23826 = cljs.core.chunk_first(seq__23809_23825__$1);{
var G__23827 = cljs.core.chunk_rest(seq__23809_23825__$1);
var G__23828 = c__4410__auto___23826;
var G__23829 = cljs.core.count(c__4410__auto___23826);
var G__23830 = (0);
seq__23809_23815 = G__23827;
chunk__23810_23816 = G__23828;
count__23811_23817 = G__23829;
i__23812_23818 = G__23830;
continue;
}
} else
{var x_23831 = cljs.core.first(seq__23809_23825__$1);ret.push(x_23831);
{
var G__23832 = cljs.core.next(seq__23809_23825__$1);
var G__23833 = null;
var G__23834 = (0);
var G__23835 = (0);
seq__23809_23815 = G__23832;
chunk__23810_23816 = G__23833;
count__23811_23817 = G__23834;
i__23812_23818 = G__23835;
continue;
}
}
} else
{}
}
break;
}
var G__23813 = "array";var G__23814 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23813,G__23814) : com.cognitect.transit.tagged.call(null,G__23813,G__23814));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23836_23840 = cljs.core.seq(v);var chunk__23837_23841 = null;var count__23838_23842 = (0);var i__23839_23843 = (0);while(true){
if((i__23839_23843 < count__23838_23842))
{var x_23844 = chunk__23837_23841.cljs$core$IIndexed$_nth$arity$2(null,i__23839_23843);ret.push(x_23844);
{
var G__23845 = seq__23836_23840;
var G__23846 = chunk__23837_23841;
var G__23847 = count__23838_23842;
var G__23848 = (i__23839_23843 + (1));
seq__23836_23840 = G__23845;
chunk__23837_23841 = G__23846;
count__23838_23842 = G__23847;
i__23839_23843 = G__23848;
continue;
}
} else
{var temp__4126__auto___23849 = cljs.core.seq(seq__23836_23840);if(temp__4126__auto___23849)
{var seq__23836_23850__$1 = temp__4126__auto___23849;if(cljs.core.chunked_seq_QMARK_(seq__23836_23850__$1))
{var c__4410__auto___23851 = cljs.core.chunk_first(seq__23836_23850__$1);{
var G__23852 = cljs.core.chunk_rest(seq__23836_23850__$1);
var G__23853 = c__4410__auto___23851;
var G__23854 = cljs.core.count(c__4410__auto___23851);
var G__23855 = (0);
seq__23836_23840 = G__23852;
chunk__23837_23841 = G__23853;
count__23838_23842 = G__23854;
i__23839_23843 = G__23855;
continue;
}
} else
{var x_23856 = cljs.core.first(seq__23836_23850__$1);ret.push(x_23856);
{
var G__23857 = cljs.core.next(seq__23836_23850__$1);
var G__23858 = null;
var G__23859 = (0);
var G__23860 = (0);
seq__23836_23840 = G__23857;
chunk__23837_23841 = G__23858;
count__23838_23842 = G__23859;
i__23839_23843 = G__23860;
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
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23879 = cljs.core.name(type);var G__23880 = cognitect.transit.opts_merge({"unpack": ((function (G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23884 = cljs.core.clone(handlers);x23884.forEach = ((function (x23884,G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23885 = cljs.core.seq(coll);var chunk__23886 = null;var count__23887 = (0);var i__23888 = (0);while(true){
if((i__23888 < count__23887))
{var vec__23889 = chunk__23886.cljs$core$IIndexed$_nth$arity$2(null,i__23888);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23889,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23889,(1),null);var G__23890_23895 = v;var G__23891_23896 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23890_23895,G__23891_23896) : f.call(null,G__23890_23895,G__23891_23896));
{
var G__23897 = seq__23885;
var G__23898 = chunk__23886;
var G__23899 = count__23887;
var G__23900 = (i__23888 + (1));
seq__23885 = G__23897;
chunk__23886 = G__23898;
count__23887 = G__23899;
i__23888 = G__23900;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23885);if(temp__4126__auto__)
{var seq__23885__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23885__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23885__$1);{
var G__23901 = cljs.core.chunk_rest(seq__23885__$1);
var G__23902 = c__4410__auto__;
var G__23903 = cljs.core.count(c__4410__auto__);
var G__23904 = (0);
seq__23885 = G__23901;
chunk__23886 = G__23902;
count__23887 = G__23903;
i__23888 = G__23904;
continue;
}
} else
{var vec__23892 = cljs.core.first(seq__23885__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(1),null);var G__23893_23905 = v;var G__23894_23906 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23893_23905,G__23894_23906) : f.call(null,G__23893_23905,G__23894_23906));
{
var G__23907 = cljs.core.next(seq__23885__$1);
var G__23908 = null;
var G__23909 = (0);
var G__23910 = (0);
seq__23885 = G__23907;
chunk__23886 = G__23908;
count__23887 = G__23909;
i__23888 = G__23910;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23884,G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23884;
})(), "objectBuilder": ((function (G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23881 = obj;G__23881.push((function (){var G__23882 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23882) : kfn.call(null,G__23882));
})(),(function (){var G__23883 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23883) : vfn.call(null,G__23883));
})());
return G__23881;
});})(G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23879,G__23880) : com.cognitect.transit.writer.call(null,G__23879,G__23880));
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
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23925 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23926){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23926 = meta23926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23925.cljs$lang$type = true;
cognitect.transit.t23925.cljs$lang$ctorStr = "cognitect.transit/t23925";
cognitect.transit.t23925.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23925");
});
cognitect.transit.t23925.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23928 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23928) : self__.tag_fn.call(null,G__23928));
});
cognitect.transit.t23925.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23929 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23929) : self__.rep_fn.call(null,G__23929));
});
cognitect.transit.t23925.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23930 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23930) : self__.str_rep_fn.call(null,G__23930));
} else
{return null;
}
});
cognitect.transit.t23925.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23927){var self__ = this;
var _23927__$1 = this;return self__.meta23926;
});
cognitect.transit.t23925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23927,meta23926__$1){var self__ = this;
var _23927__$1 = this;return (new cognitect.transit.t23925(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23926__$1));
});
cognitect.transit.__GT_t23925 = (function __GT_t23925(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23926){return (new cognitect.transit.t23925(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23926));
});
}
return (new cognitect.transit.t23925(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23933 = tag;var G__23934 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23933,G__23934) : com.cognitect.transit.types.taggedValue.call(null,G__23933,G__23934));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23936 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23936) : com.cognitect.transit.types.isTaggedValue.call(null,G__23936));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23938 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23938) : com.cognitect.transit.types.integer.call(null,G__23938));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23940 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23940) : com.cognitect.transit.types.isInteger.call(null,G__23940));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23942 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23942) : com.cognitect.transit.types.bigInteger.call(null,G__23942));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23944 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23944) : com.cognitect.transit.types.isBigInteger.call(null,G__23944));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23946 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23946) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23946));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23948 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23948) : com.cognitect.transit.types.isBigDecimal.call(null,G__23948));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23950 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23950) : com.cognitect.transit.types.uri.call(null,G__23950));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23952 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23952) : com.cognitect.transit.types.isURI.call(null,G__23952));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23954 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23954) : com.cognitect.transit.types.uuid.call(null,G__23954));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23956 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23956) : com.cognitect.transit.types.isUUID.call(null,G__23956));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23958 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23958) : com.cognitect.transit.types.binary.call(null,G__23958));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23960 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23960) : com.cognitect.transit.types.isBinary.call(null,G__23960));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23962 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23962) : com.cognitect.transit.types.quoted.call(null,G__23962));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23964 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23964) : com.cognitect.transit.types.isQuoted.call(null,G__23964));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23966 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23966) : com.cognitect.transit.types.link.call(null,G__23966));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23968 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23968) : com.cognitect.transit.types.isLink.call(null,G__23968));
});
