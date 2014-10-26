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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23125_SHARP_,p2__23124_SHARP_){var vec__23127 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23124_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23127,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23127,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23125_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23129 = url;return goog.Uri.parse(G__23129);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$74,uri.getDomain(),cljs.core.constant$keyword$75,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$76,uri.getPath(),cljs.core.constant$keyword$78,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$62,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23130_SHARP_){return cljs_http.client.encode_val(k,p1__23130_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23131){var vec__23133 = p__23131;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23134_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23134_SHARP_));
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
{var params = temp__4124__auto__;var G__23137 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23137) : client.call(null,G__23137));
} else
{var G__23138 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23138) : client.call(null,G__23138));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23177,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23177,channel){
return (function (state_23166){var state_val_23167 = (state_23166[(1)]);if((state_val_23167 === (2)))
{var inst_23160 = (state_23166[(2)]);var inst_23161 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23162 = cljs_http.client.decode_body(inst_23160,cljs.reader.read_string,"application/edn",inst_23161);var inst_23163 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23162);var inst_23164 = cljs.core.async.close_BANG_(channel);var state_23166__$1 = (function (){var statearr_23168 = state_23166;(statearr_23168[(7)] = inst_23163);
return statearr_23168;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23166__$1,inst_23164);
} else
{if((state_val_23167 === (1)))
{var inst_23158 = (function (){var G__23169 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23169) : client.call(null,G__23169));
})();var state_23166__$1 = state_23166;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23166__$1,(2),inst_23158);
} else
{return null;
}
}
});})(c__12292__auto___23177,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23177,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23173 = [null,null,null,null,null,null,null,null];(statearr_23173[(0)] = state_machine__12278__auto__);
(statearr_23173[(1)] = (1));
return statearr_23173;
});
var state_machine__12278__auto____1 = (function (state_23166){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23166);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23174){if((e23174 instanceof Object))
{var ex__12281__auto__ = e23174;var statearr_23175_23178 = state_23166;(statearr_23175_23178[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23166);
return cljs.core.constant$keyword$82;
} else
{throw e23174;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23179 = state_23166;
state_23166 = G__23179;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23166){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23177,channel))
})();var state__12294__auto__ = (function (){var statearr_23176 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23177);
return statearr_23176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23177,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23180){var vec__23184 = p__23180;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23184,(0),null);return ((function (vec__23184,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23185 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23185) : client.call(null,G__23185));
} else
{var G__23186 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23186) : client.call(null,G__23186));
}
});
;})(vec__23184,accept))
};
var wrap_accept = function (client,var_args){
var p__23180 = null;if (arguments.length > 1) {
  p__23180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23180);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23187){
var client = cljs.core.first(arglist__23187);
var p__23180 = cljs.core.rest(arglist__23187);
return wrap_accept__delegate(client,p__23180);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23188){var vec__23192 = p__23188;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192,(0),null);return ((function (vec__23192,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23193 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23193) : client.call(null,G__23193));
} else
{var G__23194 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23194) : client.call(null,G__23194));
}
});
;})(vec__23192,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23188 = null;if (arguments.length > 1) {
  p__23188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23188);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23195){
var client = cljs.core.first(arglist__23195);
var p__23188 = cljs.core.rest(arglist__23195);
return wrap_content_type__delegate(client,p__23188);
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
{var params = temp__4124__auto__;var map__23199 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23199__$1 = ((cljs.core.seq_QMARK_(map__23199))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23199):map__23199);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23199__$1,cljs.core.constant$keyword$111);var G__23200 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23200) : client.call(null,G__23200));
} else
{var G__23201 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23201) : client.call(null,G__23201));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23224__$1 = ((cljs.core.seq_QMARK_(map__23224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23224):map__23224);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23224__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23224__$1,cljs.core.constant$keyword$113);var c__12292__auto___23245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding){
return (function (state_23234){var state_val_23235 = (state_23234[(1)]);if((state_val_23235 === (2)))
{var inst_23227 = (state_23234[(2)]);var inst_23228 = (function (){var response = inst_23227;return ((function (response,inst_23227,state_val_23235,c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding){
return (function (p1__23202_SHARP_){return cljs_http.util.transit_decode(p1__23202_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23227,state_val_23235,c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding))
})();var inst_23229 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23230 = cljs_http.client.decode_body(inst_23227,inst_23228,"application/transit+json",inst_23229);var inst_23231 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23230);var inst_23232 = cljs.core.async.close_BANG_(channel);var state_23234__$1 = (function (){var statearr_23236 = state_23234;(statearr_23236[(7)] = inst_23231);
return statearr_23236;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23234__$1,inst_23232);
} else
{if((state_val_23235 === (1)))
{var inst_23225 = (function (){var G__23237 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23237) : client.call(null,G__23237));
})();var state_23234__$1 = state_23234;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23234__$1,(2),inst_23225);
} else
{return null;
}
}
});})(c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding))
;return ((function (switch__12277__auto__,c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23241 = [null,null,null,null,null,null,null,null];(statearr_23241[(0)] = state_machine__12278__auto__);
(statearr_23241[(1)] = (1));
return statearr_23241;
});
var state_machine__12278__auto____1 = (function (state_23234){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23234);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23242){if((e23242 instanceof Object))
{var ex__12281__auto__ = e23242;var statearr_23243_23246 = state_23234;(statearr_23243_23246[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23234);
return cljs.core.constant$keyword$82;
} else
{throw e23242;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23247 = state_23234;
state_23234 = G__23247;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23234){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding))
})();var state__12294__auto__ = (function (){var statearr_23244 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23245);
return statearr_23244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23245,channel,map__23224,map__23224__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23250 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23250) : client.call(null,G__23250));
} else
{var G__23251 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23251) : client.call(null,G__23251));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23290,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23290,channel){
return (function (state_23279){var state_val_23280 = (state_23279[(1)]);if((state_val_23280 === (2)))
{var inst_23273 = (state_23279[(2)]);var inst_23274 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23275 = cljs_http.client.decode_body(inst_23273,cljs_http.util.json_decode,"application/json",inst_23274);var inst_23276 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23275);var inst_23277 = cljs.core.async.close_BANG_(channel);var state_23279__$1 = (function (){var statearr_23281 = state_23279;(statearr_23281[(7)] = inst_23276);
return statearr_23281;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23279__$1,inst_23277);
} else
{if((state_val_23280 === (1)))
{var inst_23271 = (function (){var G__23282 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23282) : client.call(null,G__23282));
})();var state_23279__$1 = state_23279;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23279__$1,(2),inst_23271);
} else
{return null;
}
}
});})(c__12292__auto___23290,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23290,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23286 = [null,null,null,null,null,null,null,null];(statearr_23286[(0)] = state_machine__12278__auto__);
(statearr_23286[(1)] = (1));
return statearr_23286;
});
var state_machine__12278__auto____1 = (function (state_23279){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23279);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23287){if((e23287 instanceof Object))
{var ex__12281__auto__ = e23287;var statearr_23288_23291 = state_23279;(statearr_23288_23291[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23279);
return cljs.core.constant$keyword$82;
} else
{throw e23287;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23292 = state_23279;
state_23279 = G__23292;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23279){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23290,channel))
})();var state__12294__auto__ = (function (){var statearr_23289 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23290);
return statearr_23289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23290,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23297){var map__23298 = p__23297;var map__23298__$1 = ((cljs.core.seq_QMARK_(map__23298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23298):map__23298);var req = map__23298__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23298__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(query_params))
{var G__23299 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$62),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23299) : client.call(null,G__23299));
} else
{var G__23300 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23300) : client.call(null,G__23300));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23305){var map__23306 = p__23305;var map__23306__$1 = ((cljs.core.seq_QMARK_(map__23306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23306):map__23306);var request = map__23306__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__23307 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23307) : client.call(null,G__23307));
} else
{var G__23308 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23308) : client.call(null,G__23308));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23310 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$124], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23310) : client.call(null,G__23310));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$125),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23313) : client.call(null,G__23313));
} else
{var G__23314 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23314) : client.call(null,G__23314));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23315_SHARP_){var G__23317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23315_SHARP_,cljs.core.constant$keyword$74,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23317) : client.call(null,G__23317));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23323){var map__23324 = p__23323;var map__23324__$1 = ((cljs.core.seq_QMARK_(map__23324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23324):map__23324);var req = map__23324__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,cljs.core.constant$keyword$62);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23325 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),((function (spec,temp__4124__auto__,map__23324,map__23324__$1,req,query_params){
return (function (p1__23318_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23318_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23324,map__23324__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23325) : client.call(null,G__23325));
} else
{var G__23326 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23326) : client.call(null,G__23326));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23327){var vec__23331 = p__23327;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23331,(0),null);return ((function (vec__23331,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23332 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23332) : client.call(null,G__23332));
} else
{var G__23333 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23333) : client.call(null,G__23333));
}
});
;})(vec__23331,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23327 = null;if (arguments.length > 1) {
  p__23327 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23327);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23334){
var client = cljs.core.first(arglist__23334);
var p__23327 = cljs.core.rest(arglist__23334);
return wrap_basic_auth__delegate(client,p__23327);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23337 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23337) : client.call(null,G__23337));
} else
{var G__23338 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23338) : client.call(null,G__23338));
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
var delete$__delegate = function (url,p__23339){var vec__23342 = p__23339;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342,(0),null);var G__23343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$121,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23343) : cljs_http.client.request.call(null,G__23343));
};
var delete$ = function (url,var_args){
var p__23339 = null;if (arguments.length > 1) {
  p__23339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23339);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23344){
var url = cljs.core.first(arglist__23344);
var p__23339 = cljs.core.rest(arglist__23344);
return delete$__delegate(url,p__23339);
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
var get__delegate = function (url,p__23345){var vec__23348 = p__23345;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(0),null);var G__23349 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$102,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23349) : cljs_http.client.request.call(null,G__23349));
};
var get = function (url,var_args){
var p__23345 = null;if (arguments.length > 1) {
  p__23345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23345);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23350){
var url = cljs.core.first(arglist__23350);
var p__23345 = cljs.core.rest(arglist__23350);
return get__delegate(url,p__23345);
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
var head__delegate = function (url,p__23351){var vec__23354 = p__23351;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23354,(0),null);var G__23355 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$107,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23355) : cljs_http.client.request.call(null,G__23355));
};
var head = function (url,var_args){
var p__23351 = null;if (arguments.length > 1) {
  p__23351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23351);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23356){
var url = cljs.core.first(arglist__23356);
var p__23351 = cljs.core.rest(arglist__23356);
return head__delegate(url,p__23351);
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
var move__delegate = function (url,p__23357){var vec__23360 = p__23357;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23360,(0),null);var G__23361 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23361) : cljs_http.client.request.call(null,G__23361));
};
var move = function (url,var_args){
var p__23357 = null;if (arguments.length > 1) {
  p__23357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23357);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23362){
var url = cljs.core.first(arglist__23362);
var p__23357 = cljs.core.rest(arglist__23362);
return move__delegate(url,p__23357);
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
var options__delegate = function (url,p__23363){var vec__23366 = p__23363;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(0),null);var G__23367 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23367) : cljs_http.client.request.call(null,G__23367));
};
var options = function (url,var_args){
var p__23363 = null;if (arguments.length > 1) {
  p__23363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23363);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23368){
var url = cljs.core.first(arglist__23368);
var p__23363 = cljs.core.rest(arglist__23368);
return options__delegate(url,p__23363);
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
var patch__delegate = function (url,p__23369){var vec__23372 = p__23369;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(0),null);var G__23373 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$120,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23373) : cljs_http.client.request.call(null,G__23373));
};
var patch = function (url,var_args){
var p__23369 = null;if (arguments.length > 1) {
  p__23369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23369);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23374){
var url = cljs.core.first(arglist__23374);
var p__23369 = cljs.core.rest(arglist__23374);
return patch__delegate(url,p__23369);
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
var post__delegate = function (url,p__23375){var vec__23378 = p__23375;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23378,(0),null);var G__23379 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$122,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23379) : cljs_http.client.request.call(null,G__23379));
};
var post = function (url,var_args){
var p__23375 = null;if (arguments.length > 1) {
  p__23375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23375);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23380){
var url = cljs.core.first(arglist__23380);
var p__23375 = cljs.core.rest(arglist__23380);
return post__delegate(url,p__23375);
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
var put__delegate = function (url,p__23381){var vec__23384 = p__23381;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23384,(0),null);var G__23385 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$123,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23385) : cljs_http.client.request.call(null,G__23385));
};
var put = function (url,var_args){
var p__23381 = null;if (arguments.length > 1) {
  p__23381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23381);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23386){
var url = cljs.core.first(arglist__23386);
var p__23381 = cljs.core.rest(arglist__23386);
return put__delegate(url,p__23381);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
