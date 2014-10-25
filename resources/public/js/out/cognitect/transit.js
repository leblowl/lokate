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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23626 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23626) : com.cognitect.transit.eq.hashCode.call(null,G__23626));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23627 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23627) : com.cognitect.transit.eq.hashCode.call(null,G__23627));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23628 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23628) : com.cognitect.transit.eq.hashCode.call(null,G__23628));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23633_23637 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23634_23638 = null;var count__23635_23639 = (0);var i__23636_23640 = (0);while(true){
if((i__23636_23640 < count__23635_23639))
{var k_23641 = chunk__23634_23638.cljs$core$IIndexed$_nth$arity$2(null,i__23636_23640);var v_23642 = (b[k_23641]);(a[k_23641] = v_23642);
{
var G__23643 = seq__23633_23637;
var G__23644 = chunk__23634_23638;
var G__23645 = count__23635_23639;
var G__23646 = (i__23636_23640 + (1));
seq__23633_23637 = G__23643;
chunk__23634_23638 = G__23644;
count__23635_23639 = G__23645;
i__23636_23640 = G__23646;
continue;
}
} else
{var temp__4126__auto___23647 = cljs.core.seq(seq__23633_23637);if(temp__4126__auto___23647)
{var seq__23633_23648__$1 = temp__4126__auto___23647;if(cljs.core.chunked_seq_QMARK_(seq__23633_23648__$1))
{var c__4410__auto___23649 = cljs.core.chunk_first(seq__23633_23648__$1);{
var G__23650 = cljs.core.chunk_rest(seq__23633_23648__$1);
var G__23651 = c__4410__auto___23649;
var G__23652 = cljs.core.count(c__4410__auto___23649);
var G__23653 = (0);
seq__23633_23637 = G__23650;
chunk__23634_23638 = G__23651;
count__23635_23639 = G__23652;
i__23636_23640 = G__23653;
continue;
}
} else
{var k_23654 = cljs.core.first(seq__23633_23648__$1);var v_23655 = (b[k_23654]);(a[k_23654] = v_23655);
{
var G__23656 = cljs.core.next(seq__23633_23648__$1);
var G__23657 = null;
var G__23658 = (0);
var G__23659 = (0);
seq__23633_23637 = G__23656;
chunk__23634_23638 = G__23657;
count__23635_23639 = G__23658;
i__23636_23640 = G__23659;
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
var _ = this;var G__23660 = arr;var G__23661 = true;var G__23662 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23660,G__23661,G__23662) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23660,G__23661,G__23662));
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
var _ = this;var G__23663 = arr;var G__23664 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23663,G__23664) : cljs.core.PersistentVector.fromArray.call(null,G__23663,G__23664));
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
var reader__2 = (function (type,opts){var G__23669 = cljs.core.name(type);var G__23670 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23669){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23671 = (i + (2));
var G__23672 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23671;
ret = G__23672;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23669))
, "list": ((function (G__23669){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23669))
, "set": ((function (G__23669){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23669))
, ":": ((function (G__23669){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23669))
, "$": ((function (G__23669){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23669))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23669,G__23670) : com.cognitect.transit.reader.call(null,G__23669,G__23670));
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
var _ = this;var ret = [];var seq__23673_23679 = cljs.core.seq(v);var chunk__23674_23680 = null;var count__23675_23681 = (0);var i__23676_23682 = (0);while(true){
if((i__23676_23682 < count__23675_23681))
{var x_23683 = chunk__23674_23680.cljs$core$IIndexed$_nth$arity$2(null,i__23676_23682);ret.push(x_23683);
{
var G__23684 = seq__23673_23679;
var G__23685 = chunk__23674_23680;
var G__23686 = count__23675_23681;
var G__23687 = (i__23676_23682 + (1));
seq__23673_23679 = G__23684;
chunk__23674_23680 = G__23685;
count__23675_23681 = G__23686;
i__23676_23682 = G__23687;
continue;
}
} else
{var temp__4126__auto___23688 = cljs.core.seq(seq__23673_23679);if(temp__4126__auto___23688)
{var seq__23673_23689__$1 = temp__4126__auto___23688;if(cljs.core.chunked_seq_QMARK_(seq__23673_23689__$1))
{var c__4410__auto___23690 = cljs.core.chunk_first(seq__23673_23689__$1);{
var G__23691 = cljs.core.chunk_rest(seq__23673_23689__$1);
var G__23692 = c__4410__auto___23690;
var G__23693 = cljs.core.count(c__4410__auto___23690);
var G__23694 = (0);
seq__23673_23679 = G__23691;
chunk__23674_23680 = G__23692;
count__23675_23681 = G__23693;
i__23676_23682 = G__23694;
continue;
}
} else
{var x_23695 = cljs.core.first(seq__23673_23689__$1);ret.push(x_23695);
{
var G__23696 = cljs.core.next(seq__23673_23689__$1);
var G__23697 = null;
var G__23698 = (0);
var G__23699 = (0);
seq__23673_23679 = G__23696;
chunk__23674_23680 = G__23697;
count__23675_23681 = G__23698;
i__23676_23682 = G__23699;
continue;
}
}
} else
{}
}
break;
}
var G__23677 = "array";var G__23678 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23677,G__23678) : com.cognitect.transit.tagged.call(null,G__23677,G__23678));
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
var _ = this;var ret = [];var seq__23700_23706 = cljs.core.seq(v);var chunk__23701_23707 = null;var count__23702_23708 = (0);var i__23703_23709 = (0);while(true){
if((i__23703_23709 < count__23702_23708))
{var x_23710 = chunk__23701_23707.cljs$core$IIndexed$_nth$arity$2(null,i__23703_23709);ret.push(x_23710);
{
var G__23711 = seq__23700_23706;
var G__23712 = chunk__23701_23707;
var G__23713 = count__23702_23708;
var G__23714 = (i__23703_23709 + (1));
seq__23700_23706 = G__23711;
chunk__23701_23707 = G__23712;
count__23702_23708 = G__23713;
i__23703_23709 = G__23714;
continue;
}
} else
{var temp__4126__auto___23715 = cljs.core.seq(seq__23700_23706);if(temp__4126__auto___23715)
{var seq__23700_23716__$1 = temp__4126__auto___23715;if(cljs.core.chunked_seq_QMARK_(seq__23700_23716__$1))
{var c__4410__auto___23717 = cljs.core.chunk_first(seq__23700_23716__$1);{
var G__23718 = cljs.core.chunk_rest(seq__23700_23716__$1);
var G__23719 = c__4410__auto___23717;
var G__23720 = cljs.core.count(c__4410__auto___23717);
var G__23721 = (0);
seq__23700_23706 = G__23718;
chunk__23701_23707 = G__23719;
count__23702_23708 = G__23720;
i__23703_23709 = G__23721;
continue;
}
} else
{var x_23722 = cljs.core.first(seq__23700_23716__$1);ret.push(x_23722);
{
var G__23723 = cljs.core.next(seq__23700_23716__$1);
var G__23724 = null;
var G__23725 = (0);
var G__23726 = (0);
seq__23700_23706 = G__23723;
chunk__23701_23707 = G__23724;
count__23702_23708 = G__23725;
i__23703_23709 = G__23726;
continue;
}
}
} else
{}
}
break;
}
var G__23704 = "array";var G__23705 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23704,G__23705) : com.cognitect.transit.tagged.call(null,G__23704,G__23705));
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
var _ = this;var ret = [];var seq__23727_23731 = cljs.core.seq(v);var chunk__23728_23732 = null;var count__23729_23733 = (0);var i__23730_23734 = (0);while(true){
if((i__23730_23734 < count__23729_23733))
{var x_23735 = chunk__23728_23732.cljs$core$IIndexed$_nth$arity$2(null,i__23730_23734);ret.push(x_23735);
{
var G__23736 = seq__23727_23731;
var G__23737 = chunk__23728_23732;
var G__23738 = count__23729_23733;
var G__23739 = (i__23730_23734 + (1));
seq__23727_23731 = G__23736;
chunk__23728_23732 = G__23737;
count__23729_23733 = G__23738;
i__23730_23734 = G__23739;
continue;
}
} else
{var temp__4126__auto___23740 = cljs.core.seq(seq__23727_23731);if(temp__4126__auto___23740)
{var seq__23727_23741__$1 = temp__4126__auto___23740;if(cljs.core.chunked_seq_QMARK_(seq__23727_23741__$1))
{var c__4410__auto___23742 = cljs.core.chunk_first(seq__23727_23741__$1);{
var G__23743 = cljs.core.chunk_rest(seq__23727_23741__$1);
var G__23744 = c__4410__auto___23742;
var G__23745 = cljs.core.count(c__4410__auto___23742);
var G__23746 = (0);
seq__23727_23731 = G__23743;
chunk__23728_23732 = G__23744;
count__23729_23733 = G__23745;
i__23730_23734 = G__23746;
continue;
}
} else
{var x_23747 = cljs.core.first(seq__23727_23741__$1);ret.push(x_23747);
{
var G__23748 = cljs.core.next(seq__23727_23741__$1);
var G__23749 = null;
var G__23750 = (0);
var G__23751 = (0);
seq__23727_23731 = G__23748;
chunk__23728_23732 = G__23749;
count__23729_23733 = G__23750;
i__23730_23734 = G__23751;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23770 = cljs.core.name(type);var G__23771 = cognitect.transit.opts_merge({"unpack": ((function (G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23775 = cljs.core.clone(handlers);x23775.forEach = ((function (x23775,G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23776 = cljs.core.seq(coll);var chunk__23777 = null;var count__23778 = (0);var i__23779 = (0);while(true){
if((i__23779 < count__23778))
{var vec__23780 = chunk__23777.cljs$core$IIndexed$_nth$arity$2(null,i__23779);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23780,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23780,(1),null);var G__23781_23786 = v;var G__23782_23787 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23781_23786,G__23782_23787) : f.call(null,G__23781_23786,G__23782_23787));
{
var G__23788 = seq__23776;
var G__23789 = chunk__23777;
var G__23790 = count__23778;
var G__23791 = (i__23779 + (1));
seq__23776 = G__23788;
chunk__23777 = G__23789;
count__23778 = G__23790;
i__23779 = G__23791;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23776);if(temp__4126__auto__)
{var seq__23776__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23776__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23776__$1);{
var G__23792 = cljs.core.chunk_rest(seq__23776__$1);
var G__23793 = c__4410__auto__;
var G__23794 = cljs.core.count(c__4410__auto__);
var G__23795 = (0);
seq__23776 = G__23792;
chunk__23777 = G__23793;
count__23778 = G__23794;
i__23779 = G__23795;
continue;
}
} else
{var vec__23783 = cljs.core.first(seq__23776__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23783,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23783,(1),null);var G__23784_23796 = v;var G__23785_23797 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23784_23796,G__23785_23797) : f.call(null,G__23784_23796,G__23785_23797));
{
var G__23798 = cljs.core.next(seq__23776__$1);
var G__23799 = null;
var G__23800 = (0);
var G__23801 = (0);
seq__23776 = G__23798;
chunk__23777 = G__23799;
count__23778 = G__23800;
i__23779 = G__23801;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23775,G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23775;
})(), "objectBuilder": ((function (G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23772 = obj;G__23772.push((function (){var G__23773 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23773) : kfn.call(null,G__23773));
})(),(function (){var G__23774 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23774) : vfn.call(null,G__23774));
})());
return G__23772;
});})(G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23770,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23770,G__23771) : com.cognitect.transit.writer.call(null,G__23770,G__23771));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23816 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23816 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23817){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23817 = meta23817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23816.cljs$lang$type = true;
cognitect.transit.t23816.cljs$lang$ctorStr = "cognitect.transit/t23816";
cognitect.transit.t23816.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23816");
});
cognitect.transit.t23816.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23819 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23819) : self__.tag_fn.call(null,G__23819));
});
cognitect.transit.t23816.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23820 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23820) : self__.rep_fn.call(null,G__23820));
});
cognitect.transit.t23816.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23821 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23821) : self__.str_rep_fn.call(null,G__23821));
} else
{return null;
}
});
cognitect.transit.t23816.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23818){var self__ = this;
var _23818__$1 = this;return self__.meta23817;
});
cognitect.transit.t23816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23818,meta23817__$1){var self__ = this;
var _23818__$1 = this;return (new cognitect.transit.t23816(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23817__$1));
});
cognitect.transit.__GT_t23816 = (function __GT_t23816(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23817){return (new cognitect.transit.t23816(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23817));
});
}
return (new cognitect.transit.t23816(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23824 = tag;var G__23825 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23824,G__23825) : com.cognitect.transit.types.taggedValue.call(null,G__23824,G__23825));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23827 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23827) : com.cognitect.transit.types.isTaggedValue.call(null,G__23827));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23829 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23829) : com.cognitect.transit.types.integer.call(null,G__23829));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23831 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23831) : com.cognitect.transit.types.isInteger.call(null,G__23831));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23833 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23833) : com.cognitect.transit.types.bigInteger.call(null,G__23833));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23835 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23835) : com.cognitect.transit.types.isBigInteger.call(null,G__23835));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23837 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23837) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23837));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23839 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23839) : com.cognitect.transit.types.isBigDecimal.call(null,G__23839));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23841 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23841) : com.cognitect.transit.types.uri.call(null,G__23841));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23843 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23843) : com.cognitect.transit.types.isURI.call(null,G__23843));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23845 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23845) : com.cognitect.transit.types.uuid.call(null,G__23845));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23847 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23847) : com.cognitect.transit.types.isUUID.call(null,G__23847));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23849 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23849) : com.cognitect.transit.types.binary.call(null,G__23849));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23851 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23851) : com.cognitect.transit.types.isBinary.call(null,G__23851));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23853 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23853) : com.cognitect.transit.types.quoted.call(null,G__23853));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23855 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23855) : com.cognitect.transit.types.isQuoted.call(null,G__23855));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23857 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23857) : com.cognitect.transit.types.link.call(null,G__23857));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23859 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23859) : com.cognitect.transit.types.isLink.call(null,G__23859));
});
