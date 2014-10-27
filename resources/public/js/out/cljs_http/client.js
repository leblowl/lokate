// Compiled by ClojureScript 0.0-2371
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3628__auto__ = v;if(cljs.core.truth_(and__3628__auto__))
{return (v > (0));
} else
{return and__3628__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23234_SHARP_,p2__23233_SHARP_){var vec__23236 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23233_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23236,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23236,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23234_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23238 = url;return goog.Uri.parse(G__23238);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$74,uri.getDomain(),cljs.core.constant$keyword$75,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$76,uri.getPath(),cljs.core.constant$keyword$78,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$62,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23239_SHARP_){return cljs_http.client.encode_val(k,p1__23239_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23240){var vec__23242 = p__23240;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23243_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23243_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$107,request_method);if(and__3628__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23246 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23246) : client.call(null,G__23246));
} else
{var G__23247 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23247) : client.call(null,G__23247));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23286,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23286,channel){
return (function (state_23275){var state_val_23276 = (state_23275[(1)]);if((state_val_23276 === (2)))
{var inst_23269 = (state_23275[(2)]);var inst_23270 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23271 = cljs_http.client.decode_body(inst_23269,cljs.reader.read_string,"application/edn",inst_23270);var inst_23272 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23271);var inst_23273 = cljs.core.async.close_BANG_(channel);var state_23275__$1 = (function (){var statearr_23277 = state_23275;(statearr_23277[(7)] = inst_23272);
return statearr_23277;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23275__$1,inst_23273);
} else
{if((state_val_23276 === (1)))
{var inst_23267 = (function (){var G__23278 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23278) : client.call(null,G__23278));
})();var state_23275__$1 = state_23275;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23275__$1,(2),inst_23267);
} else
{return null;
}
}
});})(c__12292__auto___23286,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23286,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23282 = [null,null,null,null,null,null,null,null];(statearr_23282[(0)] = state_machine__12278__auto__);
(statearr_23282[(1)] = (1));
return statearr_23282;
});
var state_machine__12278__auto____1 = (function (state_23275){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23275);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23283){if((e23283 instanceof Object))
{var ex__12281__auto__ = e23283;var statearr_23284_23287 = state_23275;(statearr_23284_23287[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23275);
return cljs.core.constant$keyword$82;
} else
{throw e23283;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23288 = state_23275;
state_23275 = G__23288;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23275){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23286,channel))
})();var state__12294__auto__ = (function (){var statearr_23285 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23286);
return statearr_23285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23286,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23289){var vec__23293 = p__23289;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23293,(0),null);return ((function (vec__23293,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23294 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23294) : client.call(null,G__23294));
} else
{var G__23295 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23295) : client.call(null,G__23295));
}
});
;})(vec__23293,accept))
};
var wrap_accept = function (client,var_args){
var p__23289 = null;if (arguments.length > 1) {
  p__23289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23289);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23296){
var client = cljs.core.first(arglist__23296);
var p__23289 = cljs.core.rest(arglist__23296);
return wrap_accept__delegate(client,p__23289);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23297){var vec__23301 = p__23297;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(0),null);return ((function (vec__23301,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23302 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23302) : client.call(null,G__23302));
} else
{var G__23303 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23303) : client.call(null,G__23303));
}
});
;})(vec__23301,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23297 = null;if (arguments.length > 1) {
  p__23297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23297);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23304){
var client = cljs.core.first(arglist__23304);
var p__23297 = cljs.core.rest(arglist__23304);
return wrap_content_type__delegate(client,p__23297);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$111,cljs.core.constant$keyword$115,cljs.core.constant$keyword$112,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$113,cljs.core.constant$keyword$115,cljs.core.constant$keyword$114,cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__23308 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23308__$1 = ((cljs.core.seq_QMARK_(map__23308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23308):map__23308);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23308__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23308__$1,cljs.core.constant$keyword$111);var G__23309 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23309) : client.call(null,G__23309));
} else
{var G__23310 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23310) : client.call(null,G__23310));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23333 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23333__$1 = ((cljs.core.seq_QMARK_(map__23333))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23333):map__23333);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,cljs.core.constant$keyword$113);var c__12292__auto___23354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding){
return (function (state_23343){var state_val_23344 = (state_23343[(1)]);if((state_val_23344 === (2)))
{var inst_23336 = (state_23343[(2)]);var inst_23337 = (function (){var response = inst_23336;return ((function (response,inst_23336,state_val_23344,c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding){
return (function (p1__23311_SHARP_){return cljs_http.util.transit_decode(p1__23311_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23336,state_val_23344,c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding))
})();var inst_23338 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23339 = cljs_http.client.decode_body(inst_23336,inst_23337,"application/transit+json",inst_23338);var inst_23340 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23339);var inst_23341 = cljs.core.async.close_BANG_(channel);var state_23343__$1 = (function (){var statearr_23345 = state_23343;(statearr_23345[(7)] = inst_23340);
return statearr_23345;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23343__$1,inst_23341);
} else
{if((state_val_23344 === (1)))
{var inst_23334 = (function (){var G__23346 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23346) : client.call(null,G__23346));
})();var state_23343__$1 = state_23343;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23343__$1,(2),inst_23334);
} else
{return null;
}
}
});})(c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding))
;return ((function (switch__12277__auto__,c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23350 = [null,null,null,null,null,null,null,null];(statearr_23350[(0)] = state_machine__12278__auto__);
(statearr_23350[(1)] = (1));
return statearr_23350;
});
var state_machine__12278__auto____1 = (function (state_23343){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23343);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23351){if((e23351 instanceof Object))
{var ex__12281__auto__ = e23351;var statearr_23352_23355 = state_23343;(statearr_23352_23355[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23343);
return cljs.core.constant$keyword$82;
} else
{throw e23351;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23356 = state_23343;
state_23343 = G__23356;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23343){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding))
})();var state__12294__auto__ = (function (){var statearr_23353 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23354);
return statearr_23353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23354,channel,map__23333,map__23333__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23359 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23359) : client.call(null,G__23359));
} else
{var G__23360 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23360) : client.call(null,G__23360));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23399,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23399,channel){
return (function (state_23388){var state_val_23389 = (state_23388[(1)]);if((state_val_23389 === (2)))
{var inst_23382 = (state_23388[(2)]);var inst_23383 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23384 = cljs_http.client.decode_body(inst_23382,cljs_http.util.json_decode,"application/json",inst_23383);var inst_23385 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23384);var inst_23386 = cljs.core.async.close_BANG_(channel);var state_23388__$1 = (function (){var statearr_23390 = state_23388;(statearr_23390[(7)] = inst_23385);
return statearr_23390;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23388__$1,inst_23386);
} else
{if((state_val_23389 === (1)))
{var inst_23380 = (function (){var G__23391 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23391) : client.call(null,G__23391));
})();var state_23388__$1 = state_23388;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23388__$1,(2),inst_23380);
} else
{return null;
}
}
});})(c__12292__auto___23399,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23399,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23395 = [null,null,null,null,null,null,null,null];(statearr_23395[(0)] = state_machine__12278__auto__);
(statearr_23395[(1)] = (1));
return statearr_23395;
});
var state_machine__12278__auto____1 = (function (state_23388){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23388);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23396){if((e23396 instanceof Object))
{var ex__12281__auto__ = e23396;var statearr_23397_23400 = state_23388;(statearr_23397_23400[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23388);
return cljs.core.constant$keyword$82;
} else
{throw e23396;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23401 = state_23388;
state_23388 = G__23401;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23399,channel))
})();var state__12294__auto__ = (function (){var statearr_23398 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23399);
return statearr_23398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23399,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23406){var map__23407 = p__23406;var map__23407__$1 = ((cljs.core.seq_QMARK_(map__23407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23407):map__23407);var req = map__23407__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23407__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(query_params))
{var G__23408 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$62),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23408) : client.call(null,G__23408));
} else
{var G__23409 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23409) : client.call(null,G__23409));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23414){var map__23415 = p__23414;var map__23415__$1 = ((cljs.core.seq_QMARK_(map__23415))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23415):map__23415);var request = map__23415__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23415__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__23416 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23416) : client.call(null,G__23416));
} else
{var G__23417 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23417) : client.call(null,G__23417));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23419 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$124], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23419) : client.call(null,G__23419));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23422 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$125),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23422) : client.call(null,G__23422));
} else
{var G__23423 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23423) : client.call(null,G__23423));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23424_SHARP_){var G__23426 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23424_SHARP_,cljs.core.constant$keyword$74,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23426) : client.call(null,G__23426));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23432){var map__23433 = p__23432;var map__23433__$1 = ((cljs.core.seq_QMARK_(map__23433))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23433):map__23433);var req = map__23433__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23433__$1,cljs.core.constant$keyword$62);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23434 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),((function (spec,temp__4124__auto__,map__23433,map__23433__$1,req,query_params){
return (function (p1__23427_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23427_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23433,map__23433__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23434) : client.call(null,G__23434));
} else
{var G__23435 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23435) : client.call(null,G__23435));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23436){var vec__23440 = p__23436;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23440,(0),null);return ((function (vec__23440,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23441 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23441) : client.call(null,G__23441));
} else
{var G__23442 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23442) : client.call(null,G__23442));
}
});
;})(vec__23440,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23436 = null;if (arguments.length > 1) {
  p__23436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23436);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23443){
var client = cljs.core.first(arglist__23443);
var p__23436 = cljs.core.rest(arglist__23443);
return wrap_basic_auth__delegate(client,p__23436);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23446 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23446) : client.call(null,G__23446));
} else
{var G__23447 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23447) : client.call(null,G__23447));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_android_cors_bugfix(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__23448){var vec__23451 = p__23448;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23451,(0),null);var G__23452 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$121,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23452) : cljs_http.client.request.call(null,G__23452));
};
var delete$ = function (url,var_args){
var p__23448 = null;if (arguments.length > 1) {
  p__23448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23448);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23453){
var url = cljs.core.first(arglist__23453);
var p__23448 = cljs.core.rest(arglist__23453);
return delete$__delegate(url,p__23448);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__23454){var vec__23457 = p__23454;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23457,(0),null);var G__23458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$102,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23458) : cljs_http.client.request.call(null,G__23458));
};
var get = function (url,var_args){
var p__23454 = null;if (arguments.length > 1) {
  p__23454 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23454);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23459){
var url = cljs.core.first(arglist__23459);
var p__23454 = cljs.core.rest(arglist__23459);
return get__delegate(url,p__23454);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__23460){var vec__23463 = p__23460;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);var G__23464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$107,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23464) : cljs_http.client.request.call(null,G__23464));
};
var head = function (url,var_args){
var p__23460 = null;if (arguments.length > 1) {
  p__23460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23460);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23465){
var url = cljs.core.first(arglist__23465);
var p__23460 = cljs.core.rest(arglist__23465);
return head__delegate(url,p__23460);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__23466){var vec__23469 = p__23466;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469,(0),null);var G__23470 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23470) : cljs_http.client.request.call(null,G__23470));
};
var move = function (url,var_args){
var p__23466 = null;if (arguments.length > 1) {
  p__23466 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23466);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23471){
var url = cljs.core.first(arglist__23471);
var p__23466 = cljs.core.rest(arglist__23471);
return move__delegate(url,p__23466);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__23472){var vec__23475 = p__23472;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23475,(0),null);var G__23476 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23476) : cljs_http.client.request.call(null,G__23476));
};
var options = function (url,var_args){
var p__23472 = null;if (arguments.length > 1) {
  p__23472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23472);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23477){
var url = cljs.core.first(arglist__23477);
var p__23472 = cljs.core.rest(arglist__23477);
return options__delegate(url,p__23472);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__23478){var vec__23481 = p__23478;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23481,(0),null);var G__23482 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$120,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23482) : cljs_http.client.request.call(null,G__23482));
};
var patch = function (url,var_args){
var p__23478 = null;if (arguments.length > 1) {
  p__23478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23478);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23483){
var url = cljs.core.first(arglist__23483);
var p__23478 = cljs.core.rest(arglist__23483);
return patch__delegate(url,p__23478);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__23484){var vec__23487 = p__23484;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487,(0),null);var G__23488 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$122,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23488) : cljs_http.client.request.call(null,G__23488));
};
var post = function (url,var_args){
var p__23484 = null;if (arguments.length > 1) {
  p__23484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23484);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23489){
var url = cljs.core.first(arglist__23489);
var p__23484 = cljs.core.rest(arglist__23489);
return post__delegate(url,p__23484);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__23490){var vec__23493 = p__23490;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(0),null);var G__23494 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$123,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23494) : cljs_http.client.request.call(null,G__23494));
};
var put = function (url,var_args){
var p__23490 = null;if (arguments.length > 1) {
  p__23490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23490);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23495){
var url = cljs.core.first(arglist__23495);
var p__23490 = cljs.core.rest(arglist__23495);
return put__delegate(url,p__23490);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
