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
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__27212_27216 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__27213_27217 = null;var count__27214_27218 = (0);var i__27215_27219 = (0);while(true){
if((i__27215_27219 < count__27214_27218))
{var k_27220 = cljs.core._nth.call(null,chunk__27213_27217,i__27215_27219);var v_27221 = (b[k_27220]);(a[k_27220] = v_27221);
{
var G__27222 = seq__27212_27216;
var G__27223 = chunk__27213_27217;
var G__27224 = count__27214_27218;
var G__27225 = (i__27215_27219 + (1));
seq__27212_27216 = G__27222;
chunk__27213_27217 = G__27223;
count__27214_27218 = G__27224;
i__27215_27219 = G__27225;
continue;
}
} else
{var temp__4126__auto___27226 = cljs.core.seq.call(null,seq__27212_27216);if(temp__4126__auto___27226)
{var seq__27212_27227__$1 = temp__4126__auto___27226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212_27227__$1))
{var c__13316__auto___27228 = cljs.core.chunk_first.call(null,seq__27212_27227__$1);{
var G__27229 = cljs.core.chunk_rest.call(null,seq__27212_27227__$1);
var G__27230 = c__13316__auto___27228;
var G__27231 = cljs.core.count.call(null,c__13316__auto___27228);
var G__27232 = (0);
seq__27212_27216 = G__27229;
chunk__27213_27217 = G__27230;
count__27214_27218 = G__27231;
i__27215_27219 = G__27232;
continue;
}
} else
{var k_27233 = cljs.core.first.call(null,seq__27212_27227__$1);var v_27234 = (b[k_27233]);(a[k_27233] = v_27234);
{
var G__27235 = cljs.core.next.call(null,seq__27212_27227__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27212_27216 = G__27235;
chunk__27213_27217 = G__27236;
count__27214_27218 = G__27237;
i__27215_27219 = G__27238;
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
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__27239 = (i + (2));
var G__27240 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27239;
ret = G__27240;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var _ = this;var ret = [];var seq__27241_27245 = cljs.core.seq.call(null,v);var chunk__27242_27246 = null;var count__27243_27247 = (0);var i__27244_27248 = (0);while(true){
if((i__27244_27248 < count__27243_27247))
{var x_27249 = cljs.core._nth.call(null,chunk__27242_27246,i__27244_27248);ret.push(x_27249);
{
var G__27250 = seq__27241_27245;
var G__27251 = chunk__27242_27246;
var G__27252 = count__27243_27247;
var G__27253 = (i__27244_27248 + (1));
seq__27241_27245 = G__27250;
chunk__27242_27246 = G__27251;
count__27243_27247 = G__27252;
i__27244_27248 = G__27253;
continue;
}
} else
{var temp__4126__auto___27254 = cljs.core.seq.call(null,seq__27241_27245);if(temp__4126__auto___27254)
{var seq__27241_27255__$1 = temp__4126__auto___27254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27241_27255__$1))
{var c__13316__auto___27256 = cljs.core.chunk_first.call(null,seq__27241_27255__$1);{
var G__27257 = cljs.core.chunk_rest.call(null,seq__27241_27255__$1);
var G__27258 = c__13316__auto___27256;
var G__27259 = cljs.core.count.call(null,c__13316__auto___27256);
var G__27260 = (0);
seq__27241_27245 = G__27257;
chunk__27242_27246 = G__27258;
count__27243_27247 = G__27259;
i__27244_27248 = G__27260;
continue;
}
} else
{var x_27261 = cljs.core.first.call(null,seq__27241_27255__$1);ret.push(x_27261);
{
var G__27262 = cljs.core.next.call(null,seq__27241_27255__$1);
var G__27263 = null;
var G__27264 = (0);
var G__27265 = (0);
seq__27241_27245 = G__27262;
chunk__27242_27246 = G__27263;
count__27243_27247 = G__27264;
i__27244_27248 = G__27265;
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
var _ = this;var ret = [];var seq__27266_27270 = cljs.core.seq.call(null,v);var chunk__27267_27271 = null;var count__27268_27272 = (0);var i__27269_27273 = (0);while(true){
if((i__27269_27273 < count__27268_27272))
{var x_27274 = cljs.core._nth.call(null,chunk__27267_27271,i__27269_27273);ret.push(x_27274);
{
var G__27275 = seq__27266_27270;
var G__27276 = chunk__27267_27271;
var G__27277 = count__27268_27272;
var G__27278 = (i__27269_27273 + (1));
seq__27266_27270 = G__27275;
chunk__27267_27271 = G__27276;
count__27268_27272 = G__27277;
i__27269_27273 = G__27278;
continue;
}
} else
{var temp__4126__auto___27279 = cljs.core.seq.call(null,seq__27266_27270);if(temp__4126__auto___27279)
{var seq__27266_27280__$1 = temp__4126__auto___27279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27266_27280__$1))
{var c__13316__auto___27281 = cljs.core.chunk_first.call(null,seq__27266_27280__$1);{
var G__27282 = cljs.core.chunk_rest.call(null,seq__27266_27280__$1);
var G__27283 = c__13316__auto___27281;
var G__27284 = cljs.core.count.call(null,c__13316__auto___27281);
var G__27285 = (0);
seq__27266_27270 = G__27282;
chunk__27267_27271 = G__27283;
count__27268_27272 = G__27284;
i__27269_27273 = G__27285;
continue;
}
} else
{var x_27286 = cljs.core.first.call(null,seq__27266_27280__$1);ret.push(x_27286);
{
var G__27287 = cljs.core.next.call(null,seq__27266_27280__$1);
var G__27288 = null;
var G__27289 = (0);
var G__27290 = (0);
seq__27266_27270 = G__27287;
chunk__27267_27271 = G__27288;
count__27268_27272 = G__27289;
i__27269_27273 = G__27290;
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
var _ = this;var ret = [];var seq__27291_27295 = cljs.core.seq.call(null,v);var chunk__27292_27296 = null;var count__27293_27297 = (0);var i__27294_27298 = (0);while(true){
if((i__27294_27298 < count__27293_27297))
{var x_27299 = cljs.core._nth.call(null,chunk__27292_27296,i__27294_27298);ret.push(x_27299);
{
var G__27300 = seq__27291_27295;
var G__27301 = chunk__27292_27296;
var G__27302 = count__27293_27297;
var G__27303 = (i__27294_27298 + (1));
seq__27291_27295 = G__27300;
chunk__27292_27296 = G__27301;
count__27293_27297 = G__27302;
i__27294_27298 = G__27303;
continue;
}
} else
{var temp__4126__auto___27304 = cljs.core.seq.call(null,seq__27291_27295);if(temp__4126__auto___27304)
{var seq__27291_27305__$1 = temp__4126__auto___27304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27291_27305__$1))
{var c__13316__auto___27306 = cljs.core.chunk_first.call(null,seq__27291_27305__$1);{
var G__27307 = cljs.core.chunk_rest.call(null,seq__27291_27305__$1);
var G__27308 = c__13316__auto___27306;
var G__27309 = cljs.core.count.call(null,c__13316__auto___27306);
var G__27310 = (0);
seq__27291_27295 = G__27307;
chunk__27292_27296 = G__27308;
count__27293_27297 = G__27309;
i__27294_27298 = G__27310;
continue;
}
} else
{var x_27311 = cljs.core.first.call(null,seq__27291_27305__$1);ret.push(x_27311);
{
var G__27312 = cljs.core.next.call(null,seq__27291_27305__$1);
var G__27313 = null;
var G__27314 = (0);
var G__27315 = (0);
seq__27291_27295 = G__27312;
chunk__27292_27296 = G__27313;
count__27293_27297 = G__27314;
i__27294_27298 = G__27315;
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
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27325 = cljs.core.clone.call(null,handlers);x27325.forEach = ((function (x27325,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__27326 = cljs.core.seq.call(null,coll);var chunk__27327 = null;var count__27328 = (0);var i__27329 = (0);while(true){
if((i__27329 < count__27328))
{var vec__27330 = cljs.core._nth.call(null,chunk__27327,i__27329);var k = cljs.core.nth.call(null,vec__27330,(0),null);var v = cljs.core.nth.call(null,vec__27330,(1),null);f.call(null,v,k);
{
var G__27332 = seq__27326;
var G__27333 = chunk__27327;
var G__27334 = count__27328;
var G__27335 = (i__27329 + (1));
seq__27326 = G__27332;
chunk__27327 = G__27333;
count__27328 = G__27334;
i__27329 = G__27335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27326);if(temp__4126__auto__)
{var seq__27326__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27326__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__27326__$1);{
var G__27336 = cljs.core.chunk_rest.call(null,seq__27326__$1);
var G__27337 = c__13316__auto__;
var G__27338 = cljs.core.count.call(null,c__13316__auto__);
var G__27339 = (0);
seq__27326 = G__27336;
chunk__27327 = G__27337;
count__27328 = G__27338;
i__27329 = G__27339;
continue;
}
} else
{var vec__27331 = cljs.core.first.call(null,seq__27326__$1);var k = cljs.core.nth.call(null,vec__27331,(0),null);var v = cljs.core.nth.call(null,vec__27331,(1),null);f.call(null,v,k);
{
var G__27340 = cljs.core.next.call(null,seq__27326__$1);
var G__27341 = null;
var G__27342 = (0);
var G__27343 = (0);
seq__27326 = G__27340;
chunk__27327 = G__27341;
count__27328 = G__27342;
i__27329 = G__27343;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x27325,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x27325;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__27324 = obj;G__27324.push(kfn.call(null,k),vfn.call(null,v));
return G__27324;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t27347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t27347 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta27348){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta27348 = meta27348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t27347.cljs$lang$type = true;
cognitect.transit.t27347.cljs$lang$ctorStr = "cognitect.transit/t27347";
cognitect.transit.t27347.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t27347");
});
cognitect.transit.t27347.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t27347.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t27347.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t27347.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t27347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27349){var self__ = this;
var _27349__$1 = this;return self__.meta27348;
});
cognitect.transit.t27347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27349,meta27348__$1){var self__ = this;
var _27349__$1 = this;return (new cognitect.transit.t27347(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta27348__$1));
});
cognitect.transit.__GT_t27347 = (function __GT_t27347(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27348){return (new cognitect.transit.t27347(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27348));
});
}
return (new cognitect.transit.t27347(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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