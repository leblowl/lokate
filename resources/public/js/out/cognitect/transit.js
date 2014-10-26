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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23669 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23669) : com.cognitect.transit.eq.hashCode.call(null,G__23669));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23670 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23670) : com.cognitect.transit.eq.hashCode.call(null,G__23670));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23671 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23671) : com.cognitect.transit.eq.hashCode.call(null,G__23671));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23676_23680 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23677_23681 = null;var count__23678_23682 = (0);var i__23679_23683 = (0);while(true){
if((i__23679_23683 < count__23678_23682))
{var k_23684 = chunk__23677_23681.cljs$core$IIndexed$_nth$arity$2(null,i__23679_23683);var v_23685 = (b[k_23684]);(a[k_23684] = v_23685);
{
var G__23686 = seq__23676_23680;
var G__23687 = chunk__23677_23681;
var G__23688 = count__23678_23682;
var G__23689 = (i__23679_23683 + (1));
seq__23676_23680 = G__23686;
chunk__23677_23681 = G__23687;
count__23678_23682 = G__23688;
i__23679_23683 = G__23689;
continue;
}
} else
{var temp__4126__auto___23690 = cljs.core.seq(seq__23676_23680);if(temp__4126__auto___23690)
{var seq__23676_23691__$1 = temp__4126__auto___23690;if(cljs.core.chunked_seq_QMARK_(seq__23676_23691__$1))
{var c__4410__auto___23692 = cljs.core.chunk_first(seq__23676_23691__$1);{
var G__23693 = cljs.core.chunk_rest(seq__23676_23691__$1);
var G__23694 = c__4410__auto___23692;
var G__23695 = cljs.core.count(c__4410__auto___23692);
var G__23696 = (0);
seq__23676_23680 = G__23693;
chunk__23677_23681 = G__23694;
count__23678_23682 = G__23695;
i__23679_23683 = G__23696;
continue;
}
} else
{var k_23697 = cljs.core.first(seq__23676_23691__$1);var v_23698 = (b[k_23697]);(a[k_23697] = v_23698);
{
var G__23699 = cljs.core.next(seq__23676_23691__$1);
var G__23700 = null;
var G__23701 = (0);
var G__23702 = (0);
seq__23676_23680 = G__23699;
chunk__23677_23681 = G__23700;
count__23678_23682 = G__23701;
i__23679_23683 = G__23702;
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
var _ = this;var G__23703 = arr;var G__23704 = true;var G__23705 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23703,G__23704,G__23705) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23703,G__23704,G__23705));
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
var _ = this;var G__23706 = arr;var G__23707 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23706,G__23707) : cljs.core.PersistentVector.fromArray.call(null,G__23706,G__23707));
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
var reader__2 = (function (type,opts){var G__23712 = cljs.core.name(type);var G__23713 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23712){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23714 = (i + (2));
var G__23715 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23714;
ret = G__23715;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23712))
, "list": ((function (G__23712){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23712))
, "set": ((function (G__23712){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23712))
, ":": ((function (G__23712){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23712))
, "$": ((function (G__23712){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23712))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23712,G__23713) : com.cognitect.transit.reader.call(null,G__23712,G__23713));
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
var _ = this;var ret = [];var seq__23716_23722 = cljs.core.seq(v);var chunk__23717_23723 = null;var count__23718_23724 = (0);var i__23719_23725 = (0);while(true){
if((i__23719_23725 < count__23718_23724))
{var x_23726 = chunk__23717_23723.cljs$core$IIndexed$_nth$arity$2(null,i__23719_23725);ret.push(x_23726);
{
var G__23727 = seq__23716_23722;
var G__23728 = chunk__23717_23723;
var G__23729 = count__23718_23724;
var G__23730 = (i__23719_23725 + (1));
seq__23716_23722 = G__23727;
chunk__23717_23723 = G__23728;
count__23718_23724 = G__23729;
i__23719_23725 = G__23730;
continue;
}
} else
{var temp__4126__auto___23731 = cljs.core.seq(seq__23716_23722);if(temp__4126__auto___23731)
{var seq__23716_23732__$1 = temp__4126__auto___23731;if(cljs.core.chunked_seq_QMARK_(seq__23716_23732__$1))
{var c__4410__auto___23733 = cljs.core.chunk_first(seq__23716_23732__$1);{
var G__23734 = cljs.core.chunk_rest(seq__23716_23732__$1);
var G__23735 = c__4410__auto___23733;
var G__23736 = cljs.core.count(c__4410__auto___23733);
var G__23737 = (0);
seq__23716_23722 = G__23734;
chunk__23717_23723 = G__23735;
count__23718_23724 = G__23736;
i__23719_23725 = G__23737;
continue;
}
} else
{var x_23738 = cljs.core.first(seq__23716_23732__$1);ret.push(x_23738);
{
var G__23739 = cljs.core.next(seq__23716_23732__$1);
var G__23740 = null;
var G__23741 = (0);
var G__23742 = (0);
seq__23716_23722 = G__23739;
chunk__23717_23723 = G__23740;
count__23718_23724 = G__23741;
i__23719_23725 = G__23742;
continue;
}
}
} else
{}
}
break;
}
var G__23720 = "array";var G__23721 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23720,G__23721) : com.cognitect.transit.tagged.call(null,G__23720,G__23721));
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
var _ = this;var ret = [];var seq__23743_23749 = cljs.core.seq(v);var chunk__23744_23750 = null;var count__23745_23751 = (0);var i__23746_23752 = (0);while(true){
if((i__23746_23752 < count__23745_23751))
{var x_23753 = chunk__23744_23750.cljs$core$IIndexed$_nth$arity$2(null,i__23746_23752);ret.push(x_23753);
{
var G__23754 = seq__23743_23749;
var G__23755 = chunk__23744_23750;
var G__23756 = count__23745_23751;
var G__23757 = (i__23746_23752 + (1));
seq__23743_23749 = G__23754;
chunk__23744_23750 = G__23755;
count__23745_23751 = G__23756;
i__23746_23752 = G__23757;
continue;
}
} else
{var temp__4126__auto___23758 = cljs.core.seq(seq__23743_23749);if(temp__4126__auto___23758)
{var seq__23743_23759__$1 = temp__4126__auto___23758;if(cljs.core.chunked_seq_QMARK_(seq__23743_23759__$1))
{var c__4410__auto___23760 = cljs.core.chunk_first(seq__23743_23759__$1);{
var G__23761 = cljs.core.chunk_rest(seq__23743_23759__$1);
var G__23762 = c__4410__auto___23760;
var G__23763 = cljs.core.count(c__4410__auto___23760);
var G__23764 = (0);
seq__23743_23749 = G__23761;
chunk__23744_23750 = G__23762;
count__23745_23751 = G__23763;
i__23746_23752 = G__23764;
continue;
}
} else
{var x_23765 = cljs.core.first(seq__23743_23759__$1);ret.push(x_23765);
{
var G__23766 = cljs.core.next(seq__23743_23759__$1);
var G__23767 = null;
var G__23768 = (0);
var G__23769 = (0);
seq__23743_23749 = G__23766;
chunk__23744_23750 = G__23767;
count__23745_23751 = G__23768;
i__23746_23752 = G__23769;
continue;
}
}
} else
{}
}
break;
}
var G__23747 = "array";var G__23748 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23747,G__23748) : com.cognitect.transit.tagged.call(null,G__23747,G__23748));
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
var _ = this;var ret = [];var seq__23770_23774 = cljs.core.seq(v);var chunk__23771_23775 = null;var count__23772_23776 = (0);var i__23773_23777 = (0);while(true){
if((i__23773_23777 < count__23772_23776))
{var x_23778 = chunk__23771_23775.cljs$core$IIndexed$_nth$arity$2(null,i__23773_23777);ret.push(x_23778);
{
var G__23779 = seq__23770_23774;
var G__23780 = chunk__23771_23775;
var G__23781 = count__23772_23776;
var G__23782 = (i__23773_23777 + (1));
seq__23770_23774 = G__23779;
chunk__23771_23775 = G__23780;
count__23772_23776 = G__23781;
i__23773_23777 = G__23782;
continue;
}
} else
{var temp__4126__auto___23783 = cljs.core.seq(seq__23770_23774);if(temp__4126__auto___23783)
{var seq__23770_23784__$1 = temp__4126__auto___23783;if(cljs.core.chunked_seq_QMARK_(seq__23770_23784__$1))
{var c__4410__auto___23785 = cljs.core.chunk_first(seq__23770_23784__$1);{
var G__23786 = cljs.core.chunk_rest(seq__23770_23784__$1);
var G__23787 = c__4410__auto___23785;
var G__23788 = cljs.core.count(c__4410__auto___23785);
var G__23789 = (0);
seq__23770_23774 = G__23786;
chunk__23771_23775 = G__23787;
count__23772_23776 = G__23788;
i__23773_23777 = G__23789;
continue;
}
} else
{var x_23790 = cljs.core.first(seq__23770_23784__$1);ret.push(x_23790);
{
var G__23791 = cljs.core.next(seq__23770_23784__$1);
var G__23792 = null;
var G__23793 = (0);
var G__23794 = (0);
seq__23770_23774 = G__23791;
chunk__23771_23775 = G__23792;
count__23772_23776 = G__23793;
i__23773_23777 = G__23794;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23813 = cljs.core.name(type);var G__23814 = cognitect.transit.opts_merge({"unpack": ((function (G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23818 = cljs.core.clone(handlers);x23818.forEach = ((function (x23818,G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23819 = cljs.core.seq(coll);var chunk__23820 = null;var count__23821 = (0);var i__23822 = (0);while(true){
if((i__23822 < count__23821))
{var vec__23823 = chunk__23820.cljs$core$IIndexed$_nth$arity$2(null,i__23822);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(1),null);var G__23824_23829 = v;var G__23825_23830 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23824_23829,G__23825_23830) : f.call(null,G__23824_23829,G__23825_23830));
{
var G__23831 = seq__23819;
var G__23832 = chunk__23820;
var G__23833 = count__23821;
var G__23834 = (i__23822 + (1));
seq__23819 = G__23831;
chunk__23820 = G__23832;
count__23821 = G__23833;
i__23822 = G__23834;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23819);if(temp__4126__auto__)
{var seq__23819__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23819__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23819__$1);{
var G__23835 = cljs.core.chunk_rest(seq__23819__$1);
var G__23836 = c__4410__auto__;
var G__23837 = cljs.core.count(c__4410__auto__);
var G__23838 = (0);
seq__23819 = G__23835;
chunk__23820 = G__23836;
count__23821 = G__23837;
i__23822 = G__23838;
continue;
}
} else
{var vec__23826 = cljs.core.first(seq__23819__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23826,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23826,(1),null);var G__23827_23839 = v;var G__23828_23840 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23827_23839,G__23828_23840) : f.call(null,G__23827_23839,G__23828_23840));
{
var G__23841 = cljs.core.next(seq__23819__$1);
var G__23842 = null;
var G__23843 = (0);
var G__23844 = (0);
seq__23819 = G__23841;
chunk__23820 = G__23842;
count__23821 = G__23843;
i__23822 = G__23844;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23818,G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23818;
})(), "objectBuilder": ((function (G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23815 = obj;G__23815.push((function (){var G__23816 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23816) : kfn.call(null,G__23816));
})(),(function (){var G__23817 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23817) : vfn.call(null,G__23817));
})());
return G__23815;
});})(G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23813,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23813,G__23814) : com.cognitect.transit.writer.call(null,G__23813,G__23814));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23859 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23860){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23860 = meta23860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23859.cljs$lang$type = true;
cognitect.transit.t23859.cljs$lang$ctorStr = "cognitect.transit/t23859";
cognitect.transit.t23859.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23859");
});
cognitect.transit.t23859.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23862 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23862) : self__.tag_fn.call(null,G__23862));
});
cognitect.transit.t23859.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23863 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23863) : self__.rep_fn.call(null,G__23863));
});
cognitect.transit.t23859.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23864 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23864) : self__.str_rep_fn.call(null,G__23864));
} else
{return null;
}
});
cognitect.transit.t23859.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23861){var self__ = this;
var _23861__$1 = this;return self__.meta23860;
});
cognitect.transit.t23859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23861,meta23860__$1){var self__ = this;
var _23861__$1 = this;return (new cognitect.transit.t23859(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23860__$1));
});
cognitect.transit.__GT_t23859 = (function __GT_t23859(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23860){return (new cognitect.transit.t23859(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23860));
});
}
return (new cognitect.transit.t23859(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23867 = tag;var G__23868 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23867,G__23868) : com.cognitect.transit.types.taggedValue.call(null,G__23867,G__23868));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23870 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23870) : com.cognitect.transit.types.isTaggedValue.call(null,G__23870));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23872 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23872) : com.cognitect.transit.types.integer.call(null,G__23872));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23874 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23874) : com.cognitect.transit.types.isInteger.call(null,G__23874));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23876 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23876) : com.cognitect.transit.types.bigInteger.call(null,G__23876));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23878 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23878) : com.cognitect.transit.types.isBigInteger.call(null,G__23878));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23880 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23880) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23880));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23882 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23882) : com.cognitect.transit.types.isBigDecimal.call(null,G__23882));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23884 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23884) : com.cognitect.transit.types.uri.call(null,G__23884));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23886 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23886) : com.cognitect.transit.types.isURI.call(null,G__23886));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23888 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23888) : com.cognitect.transit.types.uuid.call(null,G__23888));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23890 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23890) : com.cognitect.transit.types.isUUID.call(null,G__23890));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23892 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23892) : com.cognitect.transit.types.binary.call(null,G__23892));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23894 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23894) : com.cognitect.transit.types.isBinary.call(null,G__23894));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23896 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23896) : com.cognitect.transit.types.quoted.call(null,G__23896));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23898 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23898) : com.cognitect.transit.types.isQuoted.call(null,G__23898));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23900 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23900) : com.cognitect.transit.types.link.call(null,G__23900));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23902 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23902) : com.cognitect.transit.types.isLink.call(null,G__23902));
});
