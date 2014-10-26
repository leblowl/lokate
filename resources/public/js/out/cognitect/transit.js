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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23665 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23665) : com.cognitect.transit.eq.hashCode.call(null,G__23665));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23666 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23666) : com.cognitect.transit.eq.hashCode.call(null,G__23666));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23667 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23667) : com.cognitect.transit.eq.hashCode.call(null,G__23667));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23672_23676 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23673_23677 = null;var count__23674_23678 = (0);var i__23675_23679 = (0);while(true){
if((i__23675_23679 < count__23674_23678))
{var k_23680 = chunk__23673_23677.cljs$core$IIndexed$_nth$arity$2(null,i__23675_23679);var v_23681 = (b[k_23680]);(a[k_23680] = v_23681);
{
var G__23682 = seq__23672_23676;
var G__23683 = chunk__23673_23677;
var G__23684 = count__23674_23678;
var G__23685 = (i__23675_23679 + (1));
seq__23672_23676 = G__23682;
chunk__23673_23677 = G__23683;
count__23674_23678 = G__23684;
i__23675_23679 = G__23685;
continue;
}
} else
{var temp__4126__auto___23686 = cljs.core.seq(seq__23672_23676);if(temp__4126__auto___23686)
{var seq__23672_23687__$1 = temp__4126__auto___23686;if(cljs.core.chunked_seq_QMARK_(seq__23672_23687__$1))
{var c__4410__auto___23688 = cljs.core.chunk_first(seq__23672_23687__$1);{
var G__23689 = cljs.core.chunk_rest(seq__23672_23687__$1);
var G__23690 = c__4410__auto___23688;
var G__23691 = cljs.core.count(c__4410__auto___23688);
var G__23692 = (0);
seq__23672_23676 = G__23689;
chunk__23673_23677 = G__23690;
count__23674_23678 = G__23691;
i__23675_23679 = G__23692;
continue;
}
} else
{var k_23693 = cljs.core.first(seq__23672_23687__$1);var v_23694 = (b[k_23693]);(a[k_23693] = v_23694);
{
var G__23695 = cljs.core.next(seq__23672_23687__$1);
var G__23696 = null;
var G__23697 = (0);
var G__23698 = (0);
seq__23672_23676 = G__23695;
chunk__23673_23677 = G__23696;
count__23674_23678 = G__23697;
i__23675_23679 = G__23698;
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
var _ = this;var G__23699 = arr;var G__23700 = true;var G__23701 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23699,G__23700,G__23701) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23699,G__23700,G__23701));
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
var _ = this;var G__23702 = arr;var G__23703 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23702,G__23703) : cljs.core.PersistentVector.fromArray.call(null,G__23702,G__23703));
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
var reader__2 = (function (type,opts){var G__23708 = cljs.core.name(type);var G__23709 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23708){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23710 = (i + (2));
var G__23711 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23710;
ret = G__23711;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23708))
, "list": ((function (G__23708){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23708))
, "set": ((function (G__23708){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23708))
, ":": ((function (G__23708){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23708))
, "$": ((function (G__23708){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23708))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23708,G__23709) : com.cognitect.transit.reader.call(null,G__23708,G__23709));
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
var _ = this;var ret = [];var seq__23712_23718 = cljs.core.seq(v);var chunk__23713_23719 = null;var count__23714_23720 = (0);var i__23715_23721 = (0);while(true){
if((i__23715_23721 < count__23714_23720))
{var x_23722 = chunk__23713_23719.cljs$core$IIndexed$_nth$arity$2(null,i__23715_23721);ret.push(x_23722);
{
var G__23723 = seq__23712_23718;
var G__23724 = chunk__23713_23719;
var G__23725 = count__23714_23720;
var G__23726 = (i__23715_23721 + (1));
seq__23712_23718 = G__23723;
chunk__23713_23719 = G__23724;
count__23714_23720 = G__23725;
i__23715_23721 = G__23726;
continue;
}
} else
{var temp__4126__auto___23727 = cljs.core.seq(seq__23712_23718);if(temp__4126__auto___23727)
{var seq__23712_23728__$1 = temp__4126__auto___23727;if(cljs.core.chunked_seq_QMARK_(seq__23712_23728__$1))
{var c__4410__auto___23729 = cljs.core.chunk_first(seq__23712_23728__$1);{
var G__23730 = cljs.core.chunk_rest(seq__23712_23728__$1);
var G__23731 = c__4410__auto___23729;
var G__23732 = cljs.core.count(c__4410__auto___23729);
var G__23733 = (0);
seq__23712_23718 = G__23730;
chunk__23713_23719 = G__23731;
count__23714_23720 = G__23732;
i__23715_23721 = G__23733;
continue;
}
} else
{var x_23734 = cljs.core.first(seq__23712_23728__$1);ret.push(x_23734);
{
var G__23735 = cljs.core.next(seq__23712_23728__$1);
var G__23736 = null;
var G__23737 = (0);
var G__23738 = (0);
seq__23712_23718 = G__23735;
chunk__23713_23719 = G__23736;
count__23714_23720 = G__23737;
i__23715_23721 = G__23738;
continue;
}
}
} else
{}
}
break;
}
var G__23716 = "array";var G__23717 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23716,G__23717) : com.cognitect.transit.tagged.call(null,G__23716,G__23717));
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
var _ = this;var ret = [];var seq__23739_23745 = cljs.core.seq(v);var chunk__23740_23746 = null;var count__23741_23747 = (0);var i__23742_23748 = (0);while(true){
if((i__23742_23748 < count__23741_23747))
{var x_23749 = chunk__23740_23746.cljs$core$IIndexed$_nth$arity$2(null,i__23742_23748);ret.push(x_23749);
{
var G__23750 = seq__23739_23745;
var G__23751 = chunk__23740_23746;
var G__23752 = count__23741_23747;
var G__23753 = (i__23742_23748 + (1));
seq__23739_23745 = G__23750;
chunk__23740_23746 = G__23751;
count__23741_23747 = G__23752;
i__23742_23748 = G__23753;
continue;
}
} else
{var temp__4126__auto___23754 = cljs.core.seq(seq__23739_23745);if(temp__4126__auto___23754)
{var seq__23739_23755__$1 = temp__4126__auto___23754;if(cljs.core.chunked_seq_QMARK_(seq__23739_23755__$1))
{var c__4410__auto___23756 = cljs.core.chunk_first(seq__23739_23755__$1);{
var G__23757 = cljs.core.chunk_rest(seq__23739_23755__$1);
var G__23758 = c__4410__auto___23756;
var G__23759 = cljs.core.count(c__4410__auto___23756);
var G__23760 = (0);
seq__23739_23745 = G__23757;
chunk__23740_23746 = G__23758;
count__23741_23747 = G__23759;
i__23742_23748 = G__23760;
continue;
}
} else
{var x_23761 = cljs.core.first(seq__23739_23755__$1);ret.push(x_23761);
{
var G__23762 = cljs.core.next(seq__23739_23755__$1);
var G__23763 = null;
var G__23764 = (0);
var G__23765 = (0);
seq__23739_23745 = G__23762;
chunk__23740_23746 = G__23763;
count__23741_23747 = G__23764;
i__23742_23748 = G__23765;
continue;
}
}
} else
{}
}
break;
}
var G__23743 = "array";var G__23744 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23743,G__23744) : com.cognitect.transit.tagged.call(null,G__23743,G__23744));
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
var _ = this;var ret = [];var seq__23766_23770 = cljs.core.seq(v);var chunk__23767_23771 = null;var count__23768_23772 = (0);var i__23769_23773 = (0);while(true){
if((i__23769_23773 < count__23768_23772))
{var x_23774 = chunk__23767_23771.cljs$core$IIndexed$_nth$arity$2(null,i__23769_23773);ret.push(x_23774);
{
var G__23775 = seq__23766_23770;
var G__23776 = chunk__23767_23771;
var G__23777 = count__23768_23772;
var G__23778 = (i__23769_23773 + (1));
seq__23766_23770 = G__23775;
chunk__23767_23771 = G__23776;
count__23768_23772 = G__23777;
i__23769_23773 = G__23778;
continue;
}
} else
{var temp__4126__auto___23779 = cljs.core.seq(seq__23766_23770);if(temp__4126__auto___23779)
{var seq__23766_23780__$1 = temp__4126__auto___23779;if(cljs.core.chunked_seq_QMARK_(seq__23766_23780__$1))
{var c__4410__auto___23781 = cljs.core.chunk_first(seq__23766_23780__$1);{
var G__23782 = cljs.core.chunk_rest(seq__23766_23780__$1);
var G__23783 = c__4410__auto___23781;
var G__23784 = cljs.core.count(c__4410__auto___23781);
var G__23785 = (0);
seq__23766_23770 = G__23782;
chunk__23767_23771 = G__23783;
count__23768_23772 = G__23784;
i__23769_23773 = G__23785;
continue;
}
} else
{var x_23786 = cljs.core.first(seq__23766_23780__$1);ret.push(x_23786);
{
var G__23787 = cljs.core.next(seq__23766_23780__$1);
var G__23788 = null;
var G__23789 = (0);
var G__23790 = (0);
seq__23766_23770 = G__23787;
chunk__23767_23771 = G__23788;
count__23768_23772 = G__23789;
i__23769_23773 = G__23790;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23809 = cljs.core.name(type);var G__23810 = cognitect.transit.opts_merge({"unpack": ((function (G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23814 = cljs.core.clone(handlers);x23814.forEach = ((function (x23814,G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23815 = cljs.core.seq(coll);var chunk__23816 = null;var count__23817 = (0);var i__23818 = (0);while(true){
if((i__23818 < count__23817))
{var vec__23819 = chunk__23816.cljs$core$IIndexed$_nth$arity$2(null,i__23818);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23819,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23819,(1),null);var G__23820_23825 = v;var G__23821_23826 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23820_23825,G__23821_23826) : f.call(null,G__23820_23825,G__23821_23826));
{
var G__23827 = seq__23815;
var G__23828 = chunk__23816;
var G__23829 = count__23817;
var G__23830 = (i__23818 + (1));
seq__23815 = G__23827;
chunk__23816 = G__23828;
count__23817 = G__23829;
i__23818 = G__23830;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23815);if(temp__4126__auto__)
{var seq__23815__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23815__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23815__$1);{
var G__23831 = cljs.core.chunk_rest(seq__23815__$1);
var G__23832 = c__4410__auto__;
var G__23833 = cljs.core.count(c__4410__auto__);
var G__23834 = (0);
seq__23815 = G__23831;
chunk__23816 = G__23832;
count__23817 = G__23833;
i__23818 = G__23834;
continue;
}
} else
{var vec__23822 = cljs.core.first(seq__23815__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822,(1),null);var G__23823_23835 = v;var G__23824_23836 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23823_23835,G__23824_23836) : f.call(null,G__23823_23835,G__23824_23836));
{
var G__23837 = cljs.core.next(seq__23815__$1);
var G__23838 = null;
var G__23839 = (0);
var G__23840 = (0);
seq__23815 = G__23837;
chunk__23816 = G__23838;
count__23817 = G__23839;
i__23818 = G__23840;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23814,G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23814;
})(), "objectBuilder": ((function (G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23811 = obj;G__23811.push((function (){var G__23812 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23812) : kfn.call(null,G__23812));
})(),(function (){var G__23813 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23813) : vfn.call(null,G__23813));
})());
return G__23811;
});})(G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23809,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23809,G__23810) : com.cognitect.transit.writer.call(null,G__23809,G__23810));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23855 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23856){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23856 = meta23856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23855.cljs$lang$type = true;
cognitect.transit.t23855.cljs$lang$ctorStr = "cognitect.transit/t23855";
cognitect.transit.t23855.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23855");
});
cognitect.transit.t23855.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23858 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23858) : self__.tag_fn.call(null,G__23858));
});
cognitect.transit.t23855.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23859 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23859) : self__.rep_fn.call(null,G__23859));
});
cognitect.transit.t23855.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23860 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23860) : self__.str_rep_fn.call(null,G__23860));
} else
{return null;
}
});
cognitect.transit.t23855.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23857){var self__ = this;
var _23857__$1 = this;return self__.meta23856;
});
cognitect.transit.t23855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23857,meta23856__$1){var self__ = this;
var _23857__$1 = this;return (new cognitect.transit.t23855(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23856__$1));
});
cognitect.transit.__GT_t23855 = (function __GT_t23855(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23856){return (new cognitect.transit.t23855(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23856));
});
}
return (new cognitect.transit.t23855(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23863 = tag;var G__23864 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23863,G__23864) : com.cognitect.transit.types.taggedValue.call(null,G__23863,G__23864));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23866 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23866) : com.cognitect.transit.types.isTaggedValue.call(null,G__23866));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23868 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23868) : com.cognitect.transit.types.integer.call(null,G__23868));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23870 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23870) : com.cognitect.transit.types.isInteger.call(null,G__23870));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23872 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23872) : com.cognitect.transit.types.bigInteger.call(null,G__23872));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23874 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23874) : com.cognitect.transit.types.isBigInteger.call(null,G__23874));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23876 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23876) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23876));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23878 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23878) : com.cognitect.transit.types.isBigDecimal.call(null,G__23878));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23880 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23880) : com.cognitect.transit.types.uri.call(null,G__23880));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23882 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23882) : com.cognitect.transit.types.isURI.call(null,G__23882));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23884 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23884) : com.cognitect.transit.types.uuid.call(null,G__23884));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23886 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23886) : com.cognitect.transit.types.isUUID.call(null,G__23886));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23888 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23888) : com.cognitect.transit.types.binary.call(null,G__23888));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23890 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23890) : com.cognitect.transit.types.isBinary.call(null,G__23890));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23892 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23892) : com.cognitect.transit.types.quoted.call(null,G__23892));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23894 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23894) : com.cognitect.transit.types.isQuoted.call(null,G__23894));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23896 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23896) : com.cognitect.transit.types.link.call(null,G__23896));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23898 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23898) : com.cognitect.transit.types.isLink.call(null,G__23898));
});
