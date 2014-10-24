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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23618 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23618) : com.cognitect.transit.eq.hashCode.call(null,G__23618));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23619 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23619) : com.cognitect.transit.eq.hashCode.call(null,G__23619));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23620 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23620) : com.cognitect.transit.eq.hashCode.call(null,G__23620));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23625_23629 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23626_23630 = null;var count__23627_23631 = (0);var i__23628_23632 = (0);while(true){
if((i__23628_23632 < count__23627_23631))
{var k_23633 = chunk__23626_23630.cljs$core$IIndexed$_nth$arity$2(null,i__23628_23632);var v_23634 = (b[k_23633]);(a[k_23633] = v_23634);
{
var G__23635 = seq__23625_23629;
var G__23636 = chunk__23626_23630;
var G__23637 = count__23627_23631;
var G__23638 = (i__23628_23632 + (1));
seq__23625_23629 = G__23635;
chunk__23626_23630 = G__23636;
count__23627_23631 = G__23637;
i__23628_23632 = G__23638;
continue;
}
} else
{var temp__4126__auto___23639 = cljs.core.seq(seq__23625_23629);if(temp__4126__auto___23639)
{var seq__23625_23640__$1 = temp__4126__auto___23639;if(cljs.core.chunked_seq_QMARK_(seq__23625_23640__$1))
{var c__4410__auto___23641 = cljs.core.chunk_first(seq__23625_23640__$1);{
var G__23642 = cljs.core.chunk_rest(seq__23625_23640__$1);
var G__23643 = c__4410__auto___23641;
var G__23644 = cljs.core.count(c__4410__auto___23641);
var G__23645 = (0);
seq__23625_23629 = G__23642;
chunk__23626_23630 = G__23643;
count__23627_23631 = G__23644;
i__23628_23632 = G__23645;
continue;
}
} else
{var k_23646 = cljs.core.first(seq__23625_23640__$1);var v_23647 = (b[k_23646]);(a[k_23646] = v_23647);
{
var G__23648 = cljs.core.next(seq__23625_23640__$1);
var G__23649 = null;
var G__23650 = (0);
var G__23651 = (0);
seq__23625_23629 = G__23648;
chunk__23626_23630 = G__23649;
count__23627_23631 = G__23650;
i__23628_23632 = G__23651;
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
var _ = this;var G__23652 = arr;var G__23653 = true;var G__23654 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23652,G__23653,G__23654) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23652,G__23653,G__23654));
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
var _ = this;var G__23655 = arr;var G__23656 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23655,G__23656) : cljs.core.PersistentVector.fromArray.call(null,G__23655,G__23656));
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
var reader__2 = (function (type,opts){var G__23661 = cljs.core.name(type);var G__23662 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23661){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23663 = (i + (2));
var G__23664 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23663;
ret = G__23664;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23661))
, "list": ((function (G__23661){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23661))
, "set": ((function (G__23661){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23661))
, ":": ((function (G__23661){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23661))
, "$": ((function (G__23661){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23661))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23661,G__23662) : com.cognitect.transit.reader.call(null,G__23661,G__23662));
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
var _ = this;var ret = [];var seq__23665_23671 = cljs.core.seq(v);var chunk__23666_23672 = null;var count__23667_23673 = (0);var i__23668_23674 = (0);while(true){
if((i__23668_23674 < count__23667_23673))
{var x_23675 = chunk__23666_23672.cljs$core$IIndexed$_nth$arity$2(null,i__23668_23674);ret.push(x_23675);
{
var G__23676 = seq__23665_23671;
var G__23677 = chunk__23666_23672;
var G__23678 = count__23667_23673;
var G__23679 = (i__23668_23674 + (1));
seq__23665_23671 = G__23676;
chunk__23666_23672 = G__23677;
count__23667_23673 = G__23678;
i__23668_23674 = G__23679;
continue;
}
} else
{var temp__4126__auto___23680 = cljs.core.seq(seq__23665_23671);if(temp__4126__auto___23680)
{var seq__23665_23681__$1 = temp__4126__auto___23680;if(cljs.core.chunked_seq_QMARK_(seq__23665_23681__$1))
{var c__4410__auto___23682 = cljs.core.chunk_first(seq__23665_23681__$1);{
var G__23683 = cljs.core.chunk_rest(seq__23665_23681__$1);
var G__23684 = c__4410__auto___23682;
var G__23685 = cljs.core.count(c__4410__auto___23682);
var G__23686 = (0);
seq__23665_23671 = G__23683;
chunk__23666_23672 = G__23684;
count__23667_23673 = G__23685;
i__23668_23674 = G__23686;
continue;
}
} else
{var x_23687 = cljs.core.first(seq__23665_23681__$1);ret.push(x_23687);
{
var G__23688 = cljs.core.next(seq__23665_23681__$1);
var G__23689 = null;
var G__23690 = (0);
var G__23691 = (0);
seq__23665_23671 = G__23688;
chunk__23666_23672 = G__23689;
count__23667_23673 = G__23690;
i__23668_23674 = G__23691;
continue;
}
}
} else
{}
}
break;
}
var G__23669 = "array";var G__23670 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23669,G__23670) : com.cognitect.transit.tagged.call(null,G__23669,G__23670));
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
var _ = this;var ret = [];var seq__23692_23698 = cljs.core.seq(v);var chunk__23693_23699 = null;var count__23694_23700 = (0);var i__23695_23701 = (0);while(true){
if((i__23695_23701 < count__23694_23700))
{var x_23702 = chunk__23693_23699.cljs$core$IIndexed$_nth$arity$2(null,i__23695_23701);ret.push(x_23702);
{
var G__23703 = seq__23692_23698;
var G__23704 = chunk__23693_23699;
var G__23705 = count__23694_23700;
var G__23706 = (i__23695_23701 + (1));
seq__23692_23698 = G__23703;
chunk__23693_23699 = G__23704;
count__23694_23700 = G__23705;
i__23695_23701 = G__23706;
continue;
}
} else
{var temp__4126__auto___23707 = cljs.core.seq(seq__23692_23698);if(temp__4126__auto___23707)
{var seq__23692_23708__$1 = temp__4126__auto___23707;if(cljs.core.chunked_seq_QMARK_(seq__23692_23708__$1))
{var c__4410__auto___23709 = cljs.core.chunk_first(seq__23692_23708__$1);{
var G__23710 = cljs.core.chunk_rest(seq__23692_23708__$1);
var G__23711 = c__4410__auto___23709;
var G__23712 = cljs.core.count(c__4410__auto___23709);
var G__23713 = (0);
seq__23692_23698 = G__23710;
chunk__23693_23699 = G__23711;
count__23694_23700 = G__23712;
i__23695_23701 = G__23713;
continue;
}
} else
{var x_23714 = cljs.core.first(seq__23692_23708__$1);ret.push(x_23714);
{
var G__23715 = cljs.core.next(seq__23692_23708__$1);
var G__23716 = null;
var G__23717 = (0);
var G__23718 = (0);
seq__23692_23698 = G__23715;
chunk__23693_23699 = G__23716;
count__23694_23700 = G__23717;
i__23695_23701 = G__23718;
continue;
}
}
} else
{}
}
break;
}
var G__23696 = "array";var G__23697 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23696,G__23697) : com.cognitect.transit.tagged.call(null,G__23696,G__23697));
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
var _ = this;var ret = [];var seq__23719_23723 = cljs.core.seq(v);var chunk__23720_23724 = null;var count__23721_23725 = (0);var i__23722_23726 = (0);while(true){
if((i__23722_23726 < count__23721_23725))
{var x_23727 = chunk__23720_23724.cljs$core$IIndexed$_nth$arity$2(null,i__23722_23726);ret.push(x_23727);
{
var G__23728 = seq__23719_23723;
var G__23729 = chunk__23720_23724;
var G__23730 = count__23721_23725;
var G__23731 = (i__23722_23726 + (1));
seq__23719_23723 = G__23728;
chunk__23720_23724 = G__23729;
count__23721_23725 = G__23730;
i__23722_23726 = G__23731;
continue;
}
} else
{var temp__4126__auto___23732 = cljs.core.seq(seq__23719_23723);if(temp__4126__auto___23732)
{var seq__23719_23733__$1 = temp__4126__auto___23732;if(cljs.core.chunked_seq_QMARK_(seq__23719_23733__$1))
{var c__4410__auto___23734 = cljs.core.chunk_first(seq__23719_23733__$1);{
var G__23735 = cljs.core.chunk_rest(seq__23719_23733__$1);
var G__23736 = c__4410__auto___23734;
var G__23737 = cljs.core.count(c__4410__auto___23734);
var G__23738 = (0);
seq__23719_23723 = G__23735;
chunk__23720_23724 = G__23736;
count__23721_23725 = G__23737;
i__23722_23726 = G__23738;
continue;
}
} else
{var x_23739 = cljs.core.first(seq__23719_23733__$1);ret.push(x_23739);
{
var G__23740 = cljs.core.next(seq__23719_23733__$1);
var G__23741 = null;
var G__23742 = (0);
var G__23743 = (0);
seq__23719_23723 = G__23740;
chunk__23720_23724 = G__23741;
count__23721_23725 = G__23742;
i__23722_23726 = G__23743;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23762 = cljs.core.name(type);var G__23763 = cognitect.transit.opts_merge({"unpack": ((function (G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23767 = cljs.core.clone(handlers);x23767.forEach = ((function (x23767,G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23768 = cljs.core.seq(coll);var chunk__23769 = null;var count__23770 = (0);var i__23771 = (0);while(true){
if((i__23771 < count__23770))
{var vec__23772 = chunk__23769.cljs$core$IIndexed$_nth$arity$2(null,i__23771);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(1),null);var G__23773_23778 = v;var G__23774_23779 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23773_23778,G__23774_23779) : f.call(null,G__23773_23778,G__23774_23779));
{
var G__23780 = seq__23768;
var G__23781 = chunk__23769;
var G__23782 = count__23770;
var G__23783 = (i__23771 + (1));
seq__23768 = G__23780;
chunk__23769 = G__23781;
count__23770 = G__23782;
i__23771 = G__23783;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23768);if(temp__4126__auto__)
{var seq__23768__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23768__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__23768__$1);{
var G__23784 = cljs.core.chunk_rest(seq__23768__$1);
var G__23785 = c__4410__auto__;
var G__23786 = cljs.core.count(c__4410__auto__);
var G__23787 = (0);
seq__23768 = G__23784;
chunk__23769 = G__23785;
count__23770 = G__23786;
i__23771 = G__23787;
continue;
}
} else
{var vec__23775 = cljs.core.first(seq__23768__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23775,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23775,(1),null);var G__23776_23788 = v;var G__23777_23789 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23776_23788,G__23777_23789) : f.call(null,G__23776_23788,G__23777_23789));
{
var G__23790 = cljs.core.next(seq__23768__$1);
var G__23791 = null;
var G__23792 = (0);
var G__23793 = (0);
seq__23768 = G__23790;
chunk__23769 = G__23791;
count__23770 = G__23792;
i__23771 = G__23793;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23767,G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23767;
})(), "objectBuilder": ((function (G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23764 = obj;G__23764.push((function (){var G__23765 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23765) : kfn.call(null,G__23765));
})(),(function (){var G__23766 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23766) : vfn.call(null,G__23766));
})());
return G__23764;
});})(G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23762,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$79)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23762,G__23763) : com.cognitect.transit.writer.call(null,G__23762,G__23763));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23808 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23809){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23809 = meta23809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23808.cljs$lang$type = true;
cognitect.transit.t23808.cljs$lang$ctorStr = "cognitect.transit/t23808";
cognitect.transit.t23808.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23808");
});
cognitect.transit.t23808.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23811 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23811) : self__.tag_fn.call(null,G__23811));
});
cognitect.transit.t23808.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23812 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23812) : self__.rep_fn.call(null,G__23812));
});
cognitect.transit.t23808.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23813 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23813) : self__.str_rep_fn.call(null,G__23813));
} else
{return null;
}
});
cognitect.transit.t23808.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23810){var self__ = this;
var _23810__$1 = this;return self__.meta23809;
});
cognitect.transit.t23808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23810,meta23809__$1){var self__ = this;
var _23810__$1 = this;return (new cognitect.transit.t23808(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23809__$1));
});
cognitect.transit.__GT_t23808 = (function __GT_t23808(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23809){return (new cognitect.transit.t23808(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23809));
});
}
return (new cognitect.transit.t23808(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23816 = tag;var G__23817 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23816,G__23817) : com.cognitect.transit.types.taggedValue.call(null,G__23816,G__23817));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23819 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23819) : com.cognitect.transit.types.isTaggedValue.call(null,G__23819));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23821 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23821) : com.cognitect.transit.types.integer.call(null,G__23821));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23823 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23823) : com.cognitect.transit.types.isInteger.call(null,G__23823));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23825 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23825) : com.cognitect.transit.types.bigInteger.call(null,G__23825));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23827 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23827) : com.cognitect.transit.types.isBigInteger.call(null,G__23827));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23829 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23829) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23829));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23831 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23831) : com.cognitect.transit.types.isBigDecimal.call(null,G__23831));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23833 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23833) : com.cognitect.transit.types.uri.call(null,G__23833));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23835 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23835) : com.cognitect.transit.types.isURI.call(null,G__23835));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23837 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23837) : com.cognitect.transit.types.uuid.call(null,G__23837));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23839 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23839) : com.cognitect.transit.types.isUUID.call(null,G__23839));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23841 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23841) : com.cognitect.transit.types.binary.call(null,G__23841));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23843 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23843) : com.cognitect.transit.types.isBinary.call(null,G__23843));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23845 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23845) : com.cognitect.transit.types.quoted.call(null,G__23845));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23847 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23847) : com.cognitect.transit.types.isQuoted.call(null,G__23847));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23849 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23849) : com.cognitect.transit.types.link.call(null,G__23849));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23851 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23851) : com.cognitect.transit.types.isLink.call(null,G__23851));
});
