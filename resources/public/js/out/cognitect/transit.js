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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23718 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23718) : com.cognitect.transit.eq.hashCode.call(null,G__23718));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23719 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23719) : com.cognitect.transit.eq.hashCode.call(null,G__23719));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23720 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23720) : com.cognitect.transit.eq.hashCode.call(null,G__23720));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23725_23729 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23726_23730 = null;var count__23727_23731 = (0);var i__23728_23732 = (0);while(true){
if((i__23728_23732 < count__23727_23731))
{var k_23733 = chunk__23726_23730.cljs$core$IIndexed$_nth$arity$2(null,i__23728_23732);var v_23734 = (b[k_23733]);(a[k_23733] = v_23734);
{
var G__23735 = seq__23725_23729;
var G__23736 = chunk__23726_23730;
var G__23737 = count__23727_23731;
var G__23738 = (i__23728_23732 + (1));
seq__23725_23729 = G__23735;
chunk__23726_23730 = G__23736;
count__23727_23731 = G__23737;
i__23728_23732 = G__23738;
continue;
}
} else
{var temp__4126__auto___23739 = cljs.core.seq(seq__23725_23729);if(temp__4126__auto___23739)
{var seq__23725_23740__$1 = temp__4126__auto___23739;if(cljs.core.chunked_seq_QMARK_(seq__23725_23740__$1))
{var c__4410__auto___23741 = cljs.core.chunk_first(seq__23725_23740__$1);{
var G__23742 = cljs.core.chunk_rest(seq__23725_23740__$1);
var G__23743 = c__4410__auto___23741;
var G__23744 = cljs.core.count(c__4410__auto___23741);
var G__23745 = (0);
seq__23725_23729 = G__23742;
chunk__23726_23730 = G__23743;
count__23727_23731 = G__23744;
i__23728_23732 = G__23745;
continue;
}
} else
{var k_23746 = cljs.core.first(seq__23725_23740__$1);var v_23747 = (b[k_23746]);(a[k_23746] = v_23747);
{
var G__23748 = cljs.core.next(seq__23725_23740__$1);
var G__23749 = null;
var G__23750 = (0);
var G__23751 = (0);
seq__23725_23729 = G__23748;
chunk__23726_23730 = G__23749;
count__23727_23731 = G__23750;
i__23728_23732 = G__23751;
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
var _ = this;var G__23752 = arr;var G__23753 = true;var G__23754 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23752,G__23753,G__23754) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23752,G__23753,G__23754));
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
var _ = this;var G__23755 = arr;var G__23756 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23755,G__23756) : cljs.core.PersistentVector.fromArray.call(null,G__23755,G__23756));
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
var reader__2 = (function (type,opts){var G__23761 = cljs.core.name(type);var G__23762 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23761){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23763 = (i + (2));
var G__23764 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23763;
ret = G__23764;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23761))
, "list": ((function (G__23761){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23761))
, "set": ((function (G__23761){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23761))
, ":": ((function (G__23761){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23761))
, "$": ((function (G__23761){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23761))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23761,G__23762) : com.cognitect.transit.reader.call(null,G__23761,G__23762));
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
var _ = this;var ret = [];var seq__23765_23771 = cljs.core.seq(v);var chunk__23766_23772 = null;var count__23767_23773 = (0);var i__23768_23774 = (0);while(true){
if((i__23768_23774 < count__23767_23773))
{var x_23775 = chunk__23766_23772.cljs$core$IIndexed$_nth$arity$2(null,i__23768_23774);ret.push(x_23775);
{
var G__23776 = seq__23765_23771;
var G__23777 = chunk__23766_23772;
var G__23778 = count__23767_23773;
var G__23779 = (i__23768_23774 + (1));
seq__23765_23771 = G__23776;
chunk__23766_23772 = G__23777;
count__23767_23773 = G__23778;
i__23768_23774 = G__23779;
continue;
}
} else
{var temp__4126__auto___23780 = cljs.core.seq(seq__23765_23771);if(temp__4126__auto___23780)
{var seq__23765_23781__$1 = temp__4126__auto___23780;if(cljs.core.chunked_seq_QMARK_(seq__23765_23781__$1))
{var c__4410__auto___23782 = cljs.core.chunk_first(seq__23765_23781__$1);{
var G__23783 = cljs.core.chunk_rest(seq__23765_23781__$1);
var G__23784 = c__4410__auto___23782;
var G__23785 = cljs.core.count(c__4410__auto___23782);
var G__23786 = (0);
seq__23765_23771 = G__23783;
chunk__23766_23772 = G__23784;
count__23767_23773 = G__23785;
i__23768_23774 = G__23786;
continue;
}
} else
{var x_23787 = cljs.core.first(seq__23765_23781__$1);ret.push(x_23787);
{
var G__23788 = cljs.core.next(seq__23765_23781__$1);
var G__23789 = null;
var G__23790 = (0);
var G__23791 = (0);
seq__23765_23771 = G__23788;
chunk__23766_23772 = G__23789;
count__23767_23773 = G__23790;
i__23768_23774 = G__23791;
continue;
}
}
} else
{}
}
break;
}
var G__23769 = "array";var G__23770 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23769,G__23770) : com.cognitect.transit.tagged.call(null,G__23769,G__23770));
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
var _ = this;var ret = [];var seq__23792_23798 = cljs.core.seq(v);var chunk__23793_23799 = null;var count__23794_23800 = (0);var i__23795_23801 = (0);while(true){
if((i__23795_23801 < count__23794_23800))
{var x_23802 = chunk__23793_23799.cljs$core$IIndexed$_nth$arity$2(null,i__23795_23801);ret.push(x_23802);
{
var G__23803 = seq__23792_23798;
var G__23804 = chunk__23793_23799;
var G__23805 = count__23794_23800;
var G__23806 = (i__23795_23801 + (1));
seq__23792_23798 = G__23803;
chunk__23793_23799 = G__23804;
count__23794_23800 = G__23805;
i__23795_23801 = G__23806;
continue;
}
} else
{var temp__4126__auto___23807 = cljs.core.seq(seq__23792_23798);if(temp__4126__auto___23807)
{var seq__23792_23808__$1 = temp__4126__auto___23807;if(cljs.core.chunked_seq_QMARK_(seq__23792_23808__$1))
{var c__4410__auto___23809 = cljs.core.chunk_first(seq__23792_23808__$1);{
var G__23810 = cljs.core.chunk_rest(seq__23792_23808__$1);
var G__23811 = c__4410__auto___23809;
var G__23812 = cljs.core.count(c__4410__auto___23809);
var G__23813 = (0);
seq__23792_23798 = G__23810;
chunk__23793_23799 = G__23811;
count__23794_23800 = G__23812;
i__23795_23801 = G__23813;
continue;
}
} else
{var x_23814 = cljs.core.first(seq__23792_23808__$1);ret.push(x_23814);
{
var G__23815 = cljs.core.next(seq__23792_23808__$1);
var G__23816 = null;
var G__23817 = (0);
var G__23818 = (0);
seq__23792_23798 = G__23815;
chunk__23793_23799 = G__23816;
count__23794_23800 = G__23817;
i__23795_23801 = G__23818;
continue;
}
}
} else
{}
}
break;
}
var G__23796 = "array";var G__23797 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23796,G__23797) : com.cognitect.transit.tagged.call(null,G__23796,G__23797));
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
var _ = this;var ret = [];var seq__23819_23823 = cljs.core.seq(v);var chunk__23820_23824 = null;var count__23821_23825 = (0);var i__23822_23826 = (0);while(true){
if((i__23822_23826 < count__23821_23825))
{var x_23827 = chunk__23820_23824.cljs$core$IIndexed$_nth$arity$2(null,i__23822_23826);ret.push(x_23827);
{
var G__23828 = seq__23819_23823;
var G__23829 = chunk__23820_23824;
var G__23830 = count__23821_23825;
var G__23831 = (i__23822_23826 + (1));
seq__23819_23823 = G__23828;
chunk__23820_23824 = G__23829;
count__23821_23825 = G__23830;
i__23822_23826 = G__23831;
continue;
}
} else
{var temp__4126__auto___23832 = cljs.core.seq(seq__23819_23823);if(temp__4126__auto___23832)
{var seq__23819_23833__$1 = temp__4126__auto___23832;if(cljs.core.chunked_seq_QMARK_(seq__23819_23833__$1))
{var c__4410__auto___23834 = cljs.core.chunk_first(seq__23819_23833__$1);{
var G__23835 = cljs.core.chunk_rest(seq__23819_23833__$1);
var G__23836 = c__4410__auto___23834;
var G__23837 = cljs.core.count(c__4410__auto___23834);
var G__23838 = (0);
seq__23819_23823 = G__23835;
chunk__23820_23824 = G__23836;
count__23821_23825 = G__23837;
i__23822_23826 = G__23838;
continue;
}
} else
{var x_23839 = cljs.core.first(seq__23819_23833__$1);ret.push(x_23839);
{
var G__23840 = cljs.core.next(seq__23819_23833__$1);
var G__23841 = null;
var G__23842 = (0);
var G__23843 = (0);
seq__23819_23823 = G__23840;
chunk__23820_23824 = G__23841;
count__23821_23825 = G__23842;
i__23822_23826 = G__23843;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23862 = cljs.core.name(type);var G__23863 = cognitect.transit.opts_merge({"unpack": ((function (G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23867 = cljs.core.clone(handlers);x23867.forEach = ((function (x23867,G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23868 = cljs.core.seq(coll);var chunk__23869 = null;var count__23870 = (0);var i__23871 = (0);while(true){
if((i__23871 < count__23870))
{var vec__23872 = chunk__23869.cljs$core$IIndexed$_nth$arity$2(null,i__23871);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872,(1),null);var G__23873_23878 = v;var G__23874_23879 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23873_23878,G__23874_23879) : f.call(null,G__23873_23878,G__23874_23879));
{
var G__23880 = seq__23868;
var G__23881 = chunk__23869;
var G__23882 = count__23870;
var G__23883 = (i__23871 + (1));
seq__23868 = G__23880;
chunk__23869 = G__23881;
count__23870 = G__23882;
i__23871 = G__23883;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23868);if(temp__4126__auto__)
{var seq__23868__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23868__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23868__$1);{
var G__23884 = cljs.core.chunk_rest(seq__23868__$1);
var G__23885 = c__4410__auto__;
var G__23886 = cljs.core.count(c__4410__auto__);
var G__23887 = (0);
seq__23868 = G__23884;
chunk__23869 = G__23885;
count__23870 = G__23886;
i__23871 = G__23887;
continue;
}
} else
{var vec__23875 = cljs.core.first(seq__23868__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23875,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23875,(1),null);var G__23876_23888 = v;var G__23877_23889 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23876_23888,G__23877_23889) : f.call(null,G__23876_23888,G__23877_23889));
{
var G__23890 = cljs.core.next(seq__23868__$1);
var G__23891 = null;
var G__23892 = (0);
var G__23893 = (0);
seq__23868 = G__23890;
chunk__23869 = G__23891;
count__23870 = G__23892;
i__23871 = G__23893;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23867,G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23867;
})(), "objectBuilder": ((function (G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23864 = obj;G__23864.push((function (){var G__23865 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23865) : kfn.call(null,G__23865));
})(),(function (){var G__23866 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23866) : vfn.call(null,G__23866));
})());
return G__23864;
});})(G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23862,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23862,G__23863) : com.cognitect.transit.writer.call(null,G__23862,G__23863));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23908 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23909){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23909 = meta23909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23908.cljs$lang$type = true;
cognitect.transit.t23908.cljs$lang$ctorStr = "cognitect.transit/t23908";
cognitect.transit.t23908.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23908");
});
cognitect.transit.t23908.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23911 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23911) : self__.tag_fn.call(null,G__23911));
});
cognitect.transit.t23908.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23912 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23912) : self__.rep_fn.call(null,G__23912));
});
cognitect.transit.t23908.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23913 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23913) : self__.str_rep_fn.call(null,G__23913));
} else
{return null;
}
});
cognitect.transit.t23908.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23910){var self__ = this;
var _23910__$1 = this;return self__.meta23909;
});
cognitect.transit.t23908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23910,meta23909__$1){var self__ = this;
var _23910__$1 = this;return (new cognitect.transit.t23908(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23909__$1));
});
cognitect.transit.__GT_t23908 = (function __GT_t23908(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23909){return (new cognitect.transit.t23908(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23909));
});
}
return (new cognitect.transit.t23908(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23916 = tag;var G__23917 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23916,G__23917) : com.cognitect.transit.types.taggedValue.call(null,G__23916,G__23917));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23919 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23919) : com.cognitect.transit.types.isTaggedValue.call(null,G__23919));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23921 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23921) : com.cognitect.transit.types.integer.call(null,G__23921));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23923 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23923) : com.cognitect.transit.types.isInteger.call(null,G__23923));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23925 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23925) : com.cognitect.transit.types.bigInteger.call(null,G__23925));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23927 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23927) : com.cognitect.transit.types.isBigInteger.call(null,G__23927));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23929 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23929) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23929));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23931 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23931) : com.cognitect.transit.types.isBigDecimal.call(null,G__23931));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23933 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23933) : com.cognitect.transit.types.uri.call(null,G__23933));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23935 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23935) : com.cognitect.transit.types.isURI.call(null,G__23935));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23937 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23937) : com.cognitect.transit.types.uuid.call(null,G__23937));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23939 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23939) : com.cognitect.transit.types.isUUID.call(null,G__23939));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23941 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23941) : com.cognitect.transit.types.binary.call(null,G__23941));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23943 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23943) : com.cognitect.transit.types.isBinary.call(null,G__23943));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23945 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23945) : com.cognitect.transit.types.quoted.call(null,G__23945));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23947 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23947) : com.cognitect.transit.types.isQuoted.call(null,G__23947));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23949 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23949) : com.cognitect.transit.types.link.call(null,G__23949));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23951 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23951) : com.cognitect.transit.types.isLink.call(null,G__23951));
});
