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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__26225_26229 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__26226_26230 = null;var count__26227_26231 = (0);var i__26228_26232 = (0);while(true){
if((i__26228_26232 < count__26227_26231))
{var k_26233 = cljs.core._nth.call(null,chunk__26226_26230,i__26228_26232);var v_26234 = (b[k_26233]);(a[k_26233] = v_26234);
{
var G__26235 = seq__26225_26229;
var G__26236 = chunk__26226_26230;
var G__26237 = count__26227_26231;
var G__26238 = (i__26228_26232 + (1));
seq__26225_26229 = G__26235;
chunk__26226_26230 = G__26236;
count__26227_26231 = G__26237;
i__26228_26232 = G__26238;
continue;
}
} else
{var temp__4126__auto___26239 = cljs.core.seq.call(null,seq__26225_26229);if(temp__4126__auto___26239)
{var seq__26225_26240__$1 = temp__4126__auto___26239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26225_26240__$1))
{var c__13316__auto___26241 = cljs.core.chunk_first.call(null,seq__26225_26240__$1);{
var G__26242 = cljs.core.chunk_rest.call(null,seq__26225_26240__$1);
var G__26243 = c__13316__auto___26241;
var G__26244 = cljs.core.count.call(null,c__13316__auto___26241);
var G__26245 = (0);
seq__26225_26229 = G__26242;
chunk__26226_26230 = G__26243;
count__26227_26231 = G__26244;
i__26228_26232 = G__26245;
continue;
}
} else
{var k_26246 = cljs.core.first.call(null,seq__26225_26240__$1);var v_26247 = (b[k_26246]);(a[k_26246] = v_26247);
{
var G__26248 = cljs.core.next.call(null,seq__26225_26240__$1);
var G__26249 = null;
var G__26250 = (0);
var G__26251 = (0);
seq__26225_26229 = G__26248;
chunk__26226_26230 = G__26249;
count__26227_26231 = G__26250;
i__26228_26232 = G__26251;
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
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__26252 = (i + (2));
var G__26253 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__26252;
ret = G__26253;
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
var _ = this;var ret = [];var seq__26254_26258 = cljs.core.seq.call(null,v);var chunk__26255_26259 = null;var count__26256_26260 = (0);var i__26257_26261 = (0);while(true){
if((i__26257_26261 < count__26256_26260))
{var x_26262 = cljs.core._nth.call(null,chunk__26255_26259,i__26257_26261);ret.push(x_26262);
{
var G__26263 = seq__26254_26258;
var G__26264 = chunk__26255_26259;
var G__26265 = count__26256_26260;
var G__26266 = (i__26257_26261 + (1));
seq__26254_26258 = G__26263;
chunk__26255_26259 = G__26264;
count__26256_26260 = G__26265;
i__26257_26261 = G__26266;
continue;
}
} else
{var temp__4126__auto___26267 = cljs.core.seq.call(null,seq__26254_26258);if(temp__4126__auto___26267)
{var seq__26254_26268__$1 = temp__4126__auto___26267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26254_26268__$1))
{var c__13316__auto___26269 = cljs.core.chunk_first.call(null,seq__26254_26268__$1);{
var G__26270 = cljs.core.chunk_rest.call(null,seq__26254_26268__$1);
var G__26271 = c__13316__auto___26269;
var G__26272 = cljs.core.count.call(null,c__13316__auto___26269);
var G__26273 = (0);
seq__26254_26258 = G__26270;
chunk__26255_26259 = G__26271;
count__26256_26260 = G__26272;
i__26257_26261 = G__26273;
continue;
}
} else
{var x_26274 = cljs.core.first.call(null,seq__26254_26268__$1);ret.push(x_26274);
{
var G__26275 = cljs.core.next.call(null,seq__26254_26268__$1);
var G__26276 = null;
var G__26277 = (0);
var G__26278 = (0);
seq__26254_26258 = G__26275;
chunk__26255_26259 = G__26276;
count__26256_26260 = G__26277;
i__26257_26261 = G__26278;
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
var _ = this;var ret = [];var seq__26279_26283 = cljs.core.seq.call(null,v);var chunk__26280_26284 = null;var count__26281_26285 = (0);var i__26282_26286 = (0);while(true){
if((i__26282_26286 < count__26281_26285))
{var x_26287 = cljs.core._nth.call(null,chunk__26280_26284,i__26282_26286);ret.push(x_26287);
{
var G__26288 = seq__26279_26283;
var G__26289 = chunk__26280_26284;
var G__26290 = count__26281_26285;
var G__26291 = (i__26282_26286 + (1));
seq__26279_26283 = G__26288;
chunk__26280_26284 = G__26289;
count__26281_26285 = G__26290;
i__26282_26286 = G__26291;
continue;
}
} else
{var temp__4126__auto___26292 = cljs.core.seq.call(null,seq__26279_26283);if(temp__4126__auto___26292)
{var seq__26279_26293__$1 = temp__4126__auto___26292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26279_26293__$1))
{var c__13316__auto___26294 = cljs.core.chunk_first.call(null,seq__26279_26293__$1);{
var G__26295 = cljs.core.chunk_rest.call(null,seq__26279_26293__$1);
var G__26296 = c__13316__auto___26294;
var G__26297 = cljs.core.count.call(null,c__13316__auto___26294);
var G__26298 = (0);
seq__26279_26283 = G__26295;
chunk__26280_26284 = G__26296;
count__26281_26285 = G__26297;
i__26282_26286 = G__26298;
continue;
}
} else
{var x_26299 = cljs.core.first.call(null,seq__26279_26293__$1);ret.push(x_26299);
{
var G__26300 = cljs.core.next.call(null,seq__26279_26293__$1);
var G__26301 = null;
var G__26302 = (0);
var G__26303 = (0);
seq__26279_26283 = G__26300;
chunk__26280_26284 = G__26301;
count__26281_26285 = G__26302;
i__26282_26286 = G__26303;
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
var _ = this;var ret = [];var seq__26304_26308 = cljs.core.seq.call(null,v);var chunk__26305_26309 = null;var count__26306_26310 = (0);var i__26307_26311 = (0);while(true){
if((i__26307_26311 < count__26306_26310))
{var x_26312 = cljs.core._nth.call(null,chunk__26305_26309,i__26307_26311);ret.push(x_26312);
{
var G__26313 = seq__26304_26308;
var G__26314 = chunk__26305_26309;
var G__26315 = count__26306_26310;
var G__26316 = (i__26307_26311 + (1));
seq__26304_26308 = G__26313;
chunk__26305_26309 = G__26314;
count__26306_26310 = G__26315;
i__26307_26311 = G__26316;
continue;
}
} else
{var temp__4126__auto___26317 = cljs.core.seq.call(null,seq__26304_26308);if(temp__4126__auto___26317)
{var seq__26304_26318__$1 = temp__4126__auto___26317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26304_26318__$1))
{var c__13316__auto___26319 = cljs.core.chunk_first.call(null,seq__26304_26318__$1);{
var G__26320 = cljs.core.chunk_rest.call(null,seq__26304_26318__$1);
var G__26321 = c__13316__auto___26319;
var G__26322 = cljs.core.count.call(null,c__13316__auto___26319);
var G__26323 = (0);
seq__26304_26308 = G__26320;
chunk__26305_26309 = G__26321;
count__26306_26310 = G__26322;
i__26307_26311 = G__26323;
continue;
}
} else
{var x_26324 = cljs.core.first.call(null,seq__26304_26318__$1);ret.push(x_26324);
{
var G__26325 = cljs.core.next.call(null,seq__26304_26318__$1);
var G__26326 = null;
var G__26327 = (0);
var G__26328 = (0);
seq__26304_26308 = G__26325;
chunk__26305_26309 = G__26326;
count__26306_26310 = G__26327;
i__26307_26311 = G__26328;
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
, "handlers": (function (){var x26338 = cljs.core.clone.call(null,handlers);x26338.forEach = ((function (x26338,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__26339 = cljs.core.seq.call(null,coll);var chunk__26340 = null;var count__26341 = (0);var i__26342 = (0);while(true){
if((i__26342 < count__26341))
{var vec__26343 = cljs.core._nth.call(null,chunk__26340,i__26342);var k = cljs.core.nth.call(null,vec__26343,(0),null);var v = cljs.core.nth.call(null,vec__26343,(1),null);f.call(null,v,k);
{
var G__26345 = seq__26339;
var G__26346 = chunk__26340;
var G__26347 = count__26341;
var G__26348 = (i__26342 + (1));
seq__26339 = G__26345;
chunk__26340 = G__26346;
count__26341 = G__26347;
i__26342 = G__26348;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26339);if(temp__4126__auto__)
{var seq__26339__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26339__$1))
{var c__13316__auto__ = cljs.core.chunk_first.call(null,seq__26339__$1);{
var G__26349 = cljs.core.chunk_rest.call(null,seq__26339__$1);
var G__26350 = c__13316__auto__;
var G__26351 = cljs.core.count.call(null,c__13316__auto__);
var G__26352 = (0);
seq__26339 = G__26349;
chunk__26340 = G__26350;
count__26341 = G__26351;
i__26342 = G__26352;
continue;
}
} else
{var vec__26344 = cljs.core.first.call(null,seq__26339__$1);var k = cljs.core.nth.call(null,vec__26344,(0),null);var v = cljs.core.nth.call(null,vec__26344,(1),null);f.call(null,v,k);
{
var G__26353 = cljs.core.next.call(null,seq__26339__$1);
var G__26354 = null;
var G__26355 = (0);
var G__26356 = (0);
seq__26339 = G__26353;
chunk__26340 = G__26354;
count__26341 = G__26355;
i__26342 = G__26356;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x26338,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x26338;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__26337 = obj;G__26337.push(kfn.call(null,k),vfn.call(null,v));
return G__26337;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t26360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t26360 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta26361){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta26361 = meta26361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t26360.cljs$lang$type = true;
cognitect.transit.t26360.cljs$lang$ctorStr = "cognitect.transit/t26360";
cognitect.transit.t26360.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cognitect.transit/t26360");
});
cognitect.transit.t26360.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t26360.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t26360.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t26360.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t26360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26362){var self__ = this;
var _26362__$1 = this;return self__.meta26361;
});
cognitect.transit.t26360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26362,meta26361__$1){var self__ = this;
var _26362__$1 = this;return (new cognitect.transit.t26360(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta26361__$1));
});
cognitect.transit.__GT_t26360 = (function __GT_t26360(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26361){return (new cognitect.transit.t26360(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26361));
});
}
return (new cognitect.transit.t26360(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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