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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27172_SHARP_,p2__27171_SHARP_){var vec__27174 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__27171_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27172_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__27176 = url;return goog.Uri.parse(G__27176);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$88,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$91,uri.getDomain(),cljs.core.constant$keyword$92,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$93,uri.getPath(),cljs.core.constant$keyword$95,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$87,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27177_SHARP_){return cljs_http.client.encode_val(k,p1__27177_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__27178){var vec__27180 = p__27178;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__27181_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27181_SHARP_));
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
{var params = temp__4124__auto__;var G__27184 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27184) : client.call(null,G__27184));
} else
{var G__27185 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27185) : client.call(null,G__27185));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6485__auto___27224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___27224,channel){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___27224,channel){
return (function (state_27213){var state_val_27214 = (state_27213[(1)]);if((state_val_27214 === (2)))
{var inst_27207 = (state_27213[(2)]);var inst_27208 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_27209 = cljs_http.client.decode_body(inst_27207,cljs.reader.read_string,"application/edn",inst_27208);var inst_27210 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_27209);var inst_27211 = cljs.core.async.close_BANG_(channel);var state_27213__$1 = (function (){var statearr_27215 = state_27213;(statearr_27215[(7)] = inst_27210);
return statearr_27215;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27213__$1,inst_27211);
} else
{if((state_val_27214 === (1)))
{var inst_27205 = (function (){var G__27216 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27216) : client.call(null,G__27216));
})();var state_27213__$1 = state_27213;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27213__$1,(2),inst_27205);
} else
{return null;
}
}
});})(c__6485__auto___27224,channel))
;return ((function (switch__6470__auto__,c__6485__auto___27224,channel){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_27220 = [null,null,null,null,null,null,null,null];(statearr_27220[(0)] = state_machine__6471__auto__);
(statearr_27220[(1)] = (1));
return statearr_27220;
});
var state_machine__6471__auto____1 = (function (state_27213){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_27213);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object))
{var ex__6474__auto__ = e27221;var statearr_27222_27225 = state_27213;(statearr_27222_27225[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27213);
return cljs.core.constant$keyword$16;
} else
{throw e27221;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__27226 = state_27213;
state_27213 = G__27226;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_27213){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_27213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___27224,channel))
})();var state__6487__auto__ = (function (){var statearr_27223 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_27223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___27224);
return statearr_27223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___27224,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__27227){var vec__27231 = p__27227;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27231,(0),null);return ((function (vec__27231,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__27232 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27232) : client.call(null,G__27232));
} else
{var G__27233 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27233) : client.call(null,G__27233));
}
});
;})(vec__27231,accept))
};
var wrap_accept = function (client,var_args){
var p__27227 = null;if (arguments.length > 1) {
  p__27227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__27227);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__27234){
var client = cljs.core.first(arglist__27234);
var p__27227 = cljs.core.rest(arglist__27234);
return wrap_accept__delegate(client,p__27227);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__27235){var vec__27239 = p__27235;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27239,(0),null);return ((function (vec__27239,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__27240 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27240) : client.call(null,G__27240));
} else
{var G__27241 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27241) : client.call(null,G__27241));
}
});
;})(vec__27239,content_type))
};
var wrap_content_type = function (client,var_args){
var p__27235 = null;if (arguments.length > 1) {
  p__27235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__27235);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__27242){
var client = cljs.core.first(arglist__27242);
var p__27235 = cljs.core.rest(arglist__27242);
return wrap_content_type__delegate(client,p__27235);
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
{var params = temp__4124__auto__;var map__27246 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__27246__$1 = ((cljs.core.seq_QMARK_(map__27246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27246):map__27246);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27246__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27246__$1,cljs.core.constant$keyword$111);var G__27247 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27247) : client.call(null,G__27247));
} else
{var G__27248 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27248) : client.call(null,G__27248));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__27271 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__27271__$1 = ((cljs.core.seq_QMARK_(map__27271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27271):map__27271);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27271__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27271__$1,cljs.core.constant$keyword$113);var c__6485__auto___27292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding){
return (function (state_27281){var state_val_27282 = (state_27281[(1)]);if((state_val_27282 === (2)))
{var inst_27274 = (state_27281[(2)]);var inst_27275 = (function (){var response = inst_27274;return ((function (response,inst_27274,state_val_27282,c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding){
return (function (p1__27249_SHARP_){return cljs_http.util.transit_decode(p1__27249_SHARP_,decoding,decoding_opts);
});
;})(response,inst_27274,state_val_27282,c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding))
})();var inst_27276 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_27277 = cljs_http.client.decode_body(inst_27274,inst_27275,"application/transit+json",inst_27276);var inst_27278 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_27277);var inst_27279 = cljs.core.async.close_BANG_(channel);var state_27281__$1 = (function (){var statearr_27283 = state_27281;(statearr_27283[(7)] = inst_27278);
return statearr_27283;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27281__$1,inst_27279);
} else
{if((state_val_27282 === (1)))
{var inst_27272 = (function (){var G__27284 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27284) : client.call(null,G__27284));
})();var state_27281__$1 = state_27281;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27281__$1,(2),inst_27272);
} else
{return null;
}
}
});})(c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding))
;return ((function (switch__6470__auto__,c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_27288 = [null,null,null,null,null,null,null,null];(statearr_27288[(0)] = state_machine__6471__auto__);
(statearr_27288[(1)] = (1));
return statearr_27288;
});
var state_machine__6471__auto____1 = (function (state_27281){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_27281);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e27289){if((e27289 instanceof Object))
{var ex__6474__auto__ = e27289;var statearr_27290_27293 = state_27281;(statearr_27290_27293[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27281);
return cljs.core.constant$keyword$16;
} else
{throw e27289;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__27294 = state_27281;
state_27281 = G__27294;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_27281){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_27281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding))
})();var state__6487__auto__ = (function (){var statearr_27291 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_27291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___27292);
return statearr_27291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___27292,channel,map__27271,map__27271__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__27297 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27297) : client.call(null,G__27297));
} else
{var G__27298 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27298) : client.call(null,G__27298));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6485__auto___27337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___27337,channel){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___27337,channel){
return (function (state_27326){var state_val_27327 = (state_27326[(1)]);if((state_val_27327 === (2)))
{var inst_27320 = (state_27326[(2)]);var inst_27321 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_27322 = cljs_http.client.decode_body(inst_27320,cljs_http.util.json_decode,"application/json",inst_27321);var inst_27323 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_27322);var inst_27324 = cljs.core.async.close_BANG_(channel);var state_27326__$1 = (function (){var statearr_27328 = state_27326;(statearr_27328[(7)] = inst_27323);
return statearr_27328;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27326__$1,inst_27324);
} else
{if((state_val_27327 === (1)))
{var inst_27318 = (function (){var G__27329 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27329) : client.call(null,G__27329));
})();var state_27326__$1 = state_27326;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27326__$1,(2),inst_27318);
} else
{return null;
}
}
});})(c__6485__auto___27337,channel))
;return ((function (switch__6470__auto__,c__6485__auto___27337,channel){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_27333 = [null,null,null,null,null,null,null,null];(statearr_27333[(0)] = state_machine__6471__auto__);
(statearr_27333[(1)] = (1));
return statearr_27333;
});
var state_machine__6471__auto____1 = (function (state_27326){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_27326);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e27334){if((e27334 instanceof Object))
{var ex__6474__auto__ = e27334;var statearr_27335_27338 = state_27326;(statearr_27335_27338[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27326);
return cljs.core.constant$keyword$16;
} else
{throw e27334;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__27339 = state_27326;
state_27326 = G__27339;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_27326){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_27326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___27337,channel))
})();var state__6487__auto__ = (function (){var statearr_27336 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_27336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___27337);
return statearr_27336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___27337,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__27344){var map__27345 = p__27344;var map__27345__$1 = ((cljs.core.seq_QMARK_(map__27345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27345):map__27345);var req = map__27345__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27345__$1,cljs.core.constant$keyword$87);if(cljs.core.truth_(query_params))
{var G__27346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$87),cljs.core.constant$keyword$95,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27346) : client.call(null,G__27346));
} else
{var G__27347 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27347) : client.call(null,G__27347));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__27352){var map__27353 = p__27352;var map__27353__$1 = ((cljs.core.seq_QMARK_(map__27353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27353):map__27353);var request = map__27353__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$74,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__27354 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27354) : client.call(null,G__27354));
} else
{var G__27355 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27355) : client.call(null,G__27355));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__27357 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$123], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27357) : client.call(null,G__27357));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__27360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$124),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27360) : client.call(null,G__27360));
} else
{var G__27361 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27361) : client.call(null,G__27361));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__27362_SHARP_){var G__27364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27362_SHARP_,cljs.core.constant$keyword$91,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27364) : client.call(null,G__27364));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__27370){var map__27371 = p__27370;var map__27371__$1 = ((cljs.core.seq_QMARK_(map__27371))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27371):map__27371);var req = map__27371__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27371__$1,cljs.core.constant$keyword$87);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__27372 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87], null),((function (spec,temp__4124__auto__,map__27371,map__27371__$1,req,query_params){
return (function (p1__27365_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__27365_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__27371,map__27371__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27372) : client.call(null,G__27372));
} else
{var G__27373 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27373) : client.call(null,G__27373));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__27374){var vec__27378 = p__27374;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(0),null);return ((function (vec__27378,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__27379 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27379) : client.call(null,G__27379));
} else
{var G__27380 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27380) : client.call(null,G__27380));
}
});
;})(vec__27378,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__27374 = null;if (arguments.length > 1) {
  p__27374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__27374);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__27381){
var client = cljs.core.first(arglist__27381);
var p__27374 = cljs.core.rest(arglist__27381);
return wrap_basic_auth__delegate(client,p__27374);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__27384 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27384) : client.call(null,G__27384));
} else
{var G__27385 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27385) : client.call(null,G__27385));
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
var delete$__delegate = function (url,p__27386){var vec__27389 = p__27386;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(0),null);var G__27390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$74,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27390) : cljs_http.client.request.call(null,G__27390));
};
var delete$ = function (url,var_args){
var p__27386 = null;if (arguments.length > 1) {
  p__27386 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__27386);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__27391){
var url = cljs.core.first(arglist__27391);
var p__27386 = cljs.core.rest(arglist__27391);
return delete$__delegate(url,p__27386);
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
var get__delegate = function (url,p__27392){var vec__27395 = p__27392;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27395,(0),null);var G__27396 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$102,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27396) : cljs_http.client.request.call(null,G__27396));
};
var get = function (url,var_args){
var p__27392 = null;if (arguments.length > 1) {
  p__27392 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__27392);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__27397){
var url = cljs.core.first(arglist__27397);
var p__27392 = cljs.core.rest(arglist__27397);
return get__delegate(url,p__27392);
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
var head__delegate = function (url,p__27398){var vec__27401 = p__27398;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(0),null);var G__27402 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$107,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27402) : cljs_http.client.request.call(null,G__27402));
};
var head = function (url,var_args){
var p__27398 = null;if (arguments.length > 1) {
  p__27398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__27398);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__27403){
var url = cljs.core.first(arglist__27403);
var p__27398 = cljs.core.rest(arglist__27403);
return head__delegate(url,p__27398);
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
var move__delegate = function (url,p__27404){var vec__27407 = p__27404;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27407,(0),null);var G__27408 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$128,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27408) : cljs_http.client.request.call(null,G__27408));
};
var move = function (url,var_args){
var p__27404 = null;if (arguments.length > 1) {
  p__27404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__27404);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__27409){
var url = cljs.core.first(arglist__27409);
var p__27404 = cljs.core.rest(arglist__27409);
return move__delegate(url,p__27404);
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
var options__delegate = function (url,p__27410){var vec__27413 = p__27410;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27413,(0),null);var G__27414 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$129,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27414) : cljs_http.client.request.call(null,G__27414));
};
var options = function (url,var_args){
var p__27410 = null;if (arguments.length > 1) {
  p__27410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__27410);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__27415){
var url = cljs.core.first(arglist__27415);
var p__27410 = cljs.core.rest(arglist__27415);
return options__delegate(url,p__27410);
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
var patch__delegate = function (url,p__27416){var vec__27419 = p__27416;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419,(0),null);var G__27420 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$120,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27420) : cljs_http.client.request.call(null,G__27420));
};
var patch = function (url,var_args){
var p__27416 = null;if (arguments.length > 1) {
  p__27416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__27416);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__27421){
var url = cljs.core.first(arglist__27421);
var p__27416 = cljs.core.rest(arglist__27421);
return patch__delegate(url,p__27416);
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
var post__delegate = function (url,p__27422){var vec__27425 = p__27422;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27425,(0),null);var G__27426 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$121,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27426) : cljs_http.client.request.call(null,G__27426));
};
var post = function (url,var_args){
var p__27422 = null;if (arguments.length > 1) {
  p__27422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__27422);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__27427){
var url = cljs.core.first(arglist__27427);
var p__27422 = cljs.core.rest(arglist__27427);
return post__delegate(url,p__27422);
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
var put__delegate = function (url,p__27428){var vec__27431 = p__27428;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431,(0),null);var G__27432 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$122,cljs.core.constant$keyword$125,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__27432) : cljs_http.client.request.call(null,G__27432));
};
var put = function (url,var_args){
var p__27428 = null;if (arguments.length > 1) {
  p__27428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__27428);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__27433){
var url = cljs.core.first(arglist__27433);
var p__27428 = cljs.core.rest(arglist__27433);
return put__delegate(url,p__27428);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
