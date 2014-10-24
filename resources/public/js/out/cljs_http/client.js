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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23082_SHARP_,p2__23081_SHARP_){var vec__23084 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23081_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23082_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23086 = url;return goog.Uri.parse(G__23086);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$74,uri.getDomain(),cljs.core.constant$keyword$75,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$76,uri.getPath(),cljs.core.constant$keyword$78,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$62,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23087_SHARP_){return cljs_http.client.encode_val(k,p1__23087_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23088){var vec__23090 = p__23088;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23091_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23091_SHARP_));
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
{var params = temp__4124__auto__;var G__23094 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23094) : client.call(null,G__23094));
} else
{var G__23095 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23095) : client.call(null,G__23095));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23134,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23134,channel){
return (function (state_23123){var state_val_23124 = (state_23123[(1)]);if((state_val_23124 === (2)))
{var inst_23117 = (state_23123[(2)]);var inst_23118 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23119 = cljs_http.client.decode_body(inst_23117,cljs.reader.read_string,"application/edn",inst_23118);var inst_23120 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23119);var inst_23121 = cljs.core.async.close_BANG_(channel);var state_23123__$1 = (function (){var statearr_23125 = state_23123;(statearr_23125[(7)] = inst_23120);
return statearr_23125;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23123__$1,inst_23121);
} else
{if((state_val_23124 === (1)))
{var inst_23115 = (function (){var G__23126 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23126) : client.call(null,G__23126));
})();var state_23123__$1 = state_23123;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23123__$1,(2),inst_23115);
} else
{return null;
}
}
});})(c__12292__auto___23134,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23134,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23130 = [null,null,null,null,null,null,null,null];(statearr_23130[(0)] = state_machine__12278__auto__);
(statearr_23130[(1)] = (1));
return statearr_23130;
});
var state_machine__12278__auto____1 = (function (state_23123){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23123);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23131){if((e23131 instanceof Object))
{var ex__12281__auto__ = e23131;var statearr_23132_23135 = state_23123;(statearr_23132_23135[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23123);
return cljs.core.constant$keyword$82;
} else
{throw e23131;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23136 = state_23123;
state_23123 = G__23136;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23123){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23134,channel))
})();var state__12294__auto__ = (function (){var statearr_23133 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23134);
return statearr_23133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23134,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23137){var vec__23141 = p__23137;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141,(0),null);return ((function (vec__23141,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23142 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23142) : client.call(null,G__23142));
} else
{var G__23143 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23143) : client.call(null,G__23143));
}
});
;})(vec__23141,accept))
};
var wrap_accept = function (client,var_args){
var p__23137 = null;if (arguments.length > 1) {
  p__23137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23137);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23144){
var client = cljs.core.first(arglist__23144);
var p__23137 = cljs.core.rest(arglist__23144);
return wrap_accept__delegate(client,p__23137);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23145){var vec__23149 = p__23145;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149,(0),null);return ((function (vec__23149,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23150 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23150) : client.call(null,G__23150));
} else
{var G__23151 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23151) : client.call(null,G__23151));
}
});
;})(vec__23149,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23145 = null;if (arguments.length > 1) {
  p__23145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23145);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23152){
var client = cljs.core.first(arglist__23152);
var p__23145 = cljs.core.rest(arglist__23152);
return wrap_content_type__delegate(client,p__23145);
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
{var params = temp__4124__auto__;var map__23156 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23156__$1 = ((cljs.core.seq_QMARK_(map__23156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23156):map__23156);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23156__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23156__$1,cljs.core.constant$keyword$111);var G__23157 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23157) : client.call(null,G__23157));
} else
{var G__23158 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23158) : client.call(null,G__23158));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23181 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23181__$1 = ((cljs.core.seq_QMARK_(map__23181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23181):map__23181);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$113);var c__12292__auto___23202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding){
return (function (state_23191){var state_val_23192 = (state_23191[(1)]);if((state_val_23192 === (2)))
{var inst_23184 = (state_23191[(2)]);var inst_23185 = (function (){var response = inst_23184;return ((function (response,inst_23184,state_val_23192,c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding){
return (function (p1__23159_SHARP_){return cljs_http.util.transit_decode(p1__23159_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23184,state_val_23192,c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding))
})();var inst_23186 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23187 = cljs_http.client.decode_body(inst_23184,inst_23185,"application/transit+json",inst_23186);var inst_23188 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23187);var inst_23189 = cljs.core.async.close_BANG_(channel);var state_23191__$1 = (function (){var statearr_23193 = state_23191;(statearr_23193[(7)] = inst_23188);
return statearr_23193;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23191__$1,inst_23189);
} else
{if((state_val_23192 === (1)))
{var inst_23182 = (function (){var G__23194 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23194) : client.call(null,G__23194));
})();var state_23191__$1 = state_23191;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23191__$1,(2),inst_23182);
} else
{return null;
}
}
});})(c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding))
;return ((function (switch__12277__auto__,c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23198 = [null,null,null,null,null,null,null,null];(statearr_23198[(0)] = state_machine__12278__auto__);
(statearr_23198[(1)] = (1));
return statearr_23198;
});
var state_machine__12278__auto____1 = (function (state_23191){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23191);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23199){if((e23199 instanceof Object))
{var ex__12281__auto__ = e23199;var statearr_23200_23203 = state_23191;(statearr_23200_23203[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23191);
return cljs.core.constant$keyword$82;
} else
{throw e23199;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23204 = state_23191;
state_23191 = G__23204;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23191){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding))
})();var state__12294__auto__ = (function (){var statearr_23201 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23202);
return statearr_23201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23202,channel,map__23181,map__23181__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23207 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23207) : client.call(null,G__23207));
} else
{var G__23208 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23208) : client.call(null,G__23208));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23247,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23247,channel){
return (function (state_23236){var state_val_23237 = (state_23236[(1)]);if((state_val_23237 === (2)))
{var inst_23230 = (state_23236[(2)]);var inst_23231 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23232 = cljs_http.client.decode_body(inst_23230,cljs_http.util.json_decode,"application/json",inst_23231);var inst_23233 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23232);var inst_23234 = cljs.core.async.close_BANG_(channel);var state_23236__$1 = (function (){var statearr_23238 = state_23236;(statearr_23238[(7)] = inst_23233);
return statearr_23238;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23236__$1,inst_23234);
} else
{if((state_val_23237 === (1)))
{var inst_23228 = (function (){var G__23239 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23239) : client.call(null,G__23239));
})();var state_23236__$1 = state_23236;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23236__$1,(2),inst_23228);
} else
{return null;
}
}
});})(c__12292__auto___23247,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23247,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23243 = [null,null,null,null,null,null,null,null];(statearr_23243[(0)] = state_machine__12278__auto__);
(statearr_23243[(1)] = (1));
return statearr_23243;
});
var state_machine__12278__auto____1 = (function (state_23236){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23236);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23244){if((e23244 instanceof Object))
{var ex__12281__auto__ = e23244;var statearr_23245_23248 = state_23236;(statearr_23245_23248[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23236);
return cljs.core.constant$keyword$82;
} else
{throw e23244;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23249 = state_23236;
state_23236 = G__23249;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23236){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23247,channel))
})();var state__12294__auto__ = (function (){var statearr_23246 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23247);
return statearr_23246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23247,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23254){var map__23255 = p__23254;var map__23255__$1 = ((cljs.core.seq_QMARK_(map__23255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23255):map__23255);var req = map__23255__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(query_params))
{var G__23256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$62),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23256) : client.call(null,G__23256));
} else
{var G__23257 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23257) : client.call(null,G__23257));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23262){var map__23263 = p__23262;var map__23263__$1 = ((cljs.core.seq_QMARK_(map__23263))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23263):map__23263);var request = map__23263__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23263__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23263__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__23264 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23264) : client.call(null,G__23264));
} else
{var G__23265 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23265) : client.call(null,G__23265));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23267 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$124], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23267) : client.call(null,G__23267));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23270 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$125),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23270) : client.call(null,G__23270));
} else
{var G__23271 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23271) : client.call(null,G__23271));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23272_SHARP_){var G__23274 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23272_SHARP_,cljs.core.constant$keyword$74,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23274) : client.call(null,G__23274));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23280){var map__23281 = p__23280;var map__23281__$1 = ((cljs.core.seq_QMARK_(map__23281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23281):map__23281);var req = map__23281__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281__$1,cljs.core.constant$keyword$62);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23282 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),((function (spec,temp__4124__auto__,map__23281,map__23281__$1,req,query_params){
return (function (p1__23275_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23275_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23281,map__23281__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23282) : client.call(null,G__23282));
} else
{var G__23283 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23283) : client.call(null,G__23283));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23284){var vec__23288 = p__23284;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23288,(0),null);return ((function (vec__23288,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23289 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23289) : client.call(null,G__23289));
} else
{var G__23290 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23290) : client.call(null,G__23290));
}
});
;})(vec__23288,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23284 = null;if (arguments.length > 1) {
  p__23284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23284);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23291){
var client = cljs.core.first(arglist__23291);
var p__23284 = cljs.core.rest(arglist__23291);
return wrap_basic_auth__delegate(client,p__23284);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23294 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23294) : client.call(null,G__23294));
} else
{var G__23295 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23295) : client.call(null,G__23295));
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
var delete$__delegate = function (url,p__23296){var vec__23299 = p__23296;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(0),null);var G__23300 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$121,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23300) : cljs_http.client.request.call(null,G__23300));
};
var delete$ = function (url,var_args){
var p__23296 = null;if (arguments.length > 1) {
  p__23296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23296);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23301){
var url = cljs.core.first(arglist__23301);
var p__23296 = cljs.core.rest(arglist__23301);
return delete$__delegate(url,p__23296);
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
var get__delegate = function (url,p__23302){var vec__23305 = p__23302;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23305,(0),null);var G__23306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$102,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23306) : cljs_http.client.request.call(null,G__23306));
};
var get = function (url,var_args){
var p__23302 = null;if (arguments.length > 1) {
  p__23302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23302);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23307){
var url = cljs.core.first(arglist__23307);
var p__23302 = cljs.core.rest(arglist__23307);
return get__delegate(url,p__23302);
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
var head__delegate = function (url,p__23308){var vec__23311 = p__23308;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(0),null);var G__23312 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$107,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23312) : cljs_http.client.request.call(null,G__23312));
};
var head = function (url,var_args){
var p__23308 = null;if (arguments.length > 1) {
  p__23308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23308);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23313){
var url = cljs.core.first(arglist__23313);
var p__23308 = cljs.core.rest(arglist__23313);
return head__delegate(url,p__23308);
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
var move__delegate = function (url,p__23314){var vec__23317 = p__23314;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317,(0),null);var G__23318 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23318) : cljs_http.client.request.call(null,G__23318));
};
var move = function (url,var_args){
var p__23314 = null;if (arguments.length > 1) {
  p__23314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23314);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23319){
var url = cljs.core.first(arglist__23319);
var p__23314 = cljs.core.rest(arglist__23319);
return move__delegate(url,p__23314);
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
var options__delegate = function (url,p__23320){var vec__23323 = p__23320;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(0),null);var G__23324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23324) : cljs_http.client.request.call(null,G__23324));
};
var options = function (url,var_args){
var p__23320 = null;if (arguments.length > 1) {
  p__23320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23320);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23325){
var url = cljs.core.first(arglist__23325);
var p__23320 = cljs.core.rest(arglist__23325);
return options__delegate(url,p__23320);
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
var patch__delegate = function (url,p__23326){var vec__23329 = p__23326;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23329,(0),null);var G__23330 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$120,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23330) : cljs_http.client.request.call(null,G__23330));
};
var patch = function (url,var_args){
var p__23326 = null;if (arguments.length > 1) {
  p__23326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23326);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23331){
var url = cljs.core.first(arglist__23331);
var p__23326 = cljs.core.rest(arglist__23331);
return patch__delegate(url,p__23326);
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
var post__delegate = function (url,p__23332){var vec__23335 = p__23332;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23335,(0),null);var G__23336 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$122,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23336) : cljs_http.client.request.call(null,G__23336));
};
var post = function (url,var_args){
var p__23332 = null;if (arguments.length > 1) {
  p__23332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23332);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23337){
var url = cljs.core.first(arglist__23337);
var p__23332 = cljs.core.rest(arglist__23337);
return post__delegate(url,p__23332);
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
var put__delegate = function (url,p__23338){var vec__23341 = p__23338;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(0),null);var G__23342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$123,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23342) : cljs_http.client.request.call(null,G__23342));
};
var put = function (url,var_args){
var p__23338 = null;if (arguments.length > 1) {
  p__23338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23338);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23343){
var url = cljs.core.first(arglist__23343);
var p__23338 = cljs.core.rest(arglist__23343);
return put__delegate(url,p__23338);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
