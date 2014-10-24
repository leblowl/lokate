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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23074_SHARP_,p2__23073_SHARP_){var vec__23076 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23073_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23074_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23078 = url;return goog.Uri.parse(G__23078);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$74,uri.getDomain(),cljs.core.constant$keyword$75,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$76,uri.getPath(),cljs.core.constant$keyword$78,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$62,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23079_SHARP_){return cljs_http.client.encode_val(k,p1__23079_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23080){var vec__23082 = p__23080;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23082,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23082,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23083_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23083_SHARP_));
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
{var params = temp__4124__auto__;var G__23086 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23086) : client.call(null,G__23086));
} else
{var G__23087 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23087) : client.call(null,G__23087));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23126,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23126,channel){
return (function (state_23115){var state_val_23116 = (state_23115[(1)]);if((state_val_23116 === (2)))
{var inst_23109 = (state_23115[(2)]);var inst_23110 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23111 = cljs_http.client.decode_body(inst_23109,cljs.reader.read_string,"application/edn",inst_23110);var inst_23112 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23111);var inst_23113 = cljs.core.async.close_BANG_(channel);var state_23115__$1 = (function (){var statearr_23117 = state_23115;(statearr_23117[(7)] = inst_23112);
return statearr_23117;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23115__$1,inst_23113);
} else
{if((state_val_23116 === (1)))
{var inst_23107 = (function (){var G__23118 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23118) : client.call(null,G__23118));
})();var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23115__$1,(2),inst_23107);
} else
{return null;
}
}
});})(c__12292__auto___23126,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23126,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23122 = [null,null,null,null,null,null,null,null];(statearr_23122[(0)] = state_machine__12278__auto__);
(statearr_23122[(1)] = (1));
return statearr_23122;
});
var state_machine__12278__auto____1 = (function (state_23115){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23115);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23123){if((e23123 instanceof Object))
{var ex__12281__auto__ = e23123;var statearr_23124_23127 = state_23115;(statearr_23124_23127[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23115);
return cljs.core.constant$keyword$82;
} else
{throw e23123;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23128 = state_23115;
state_23115 = G__23128;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23126,channel))
})();var state__12294__auto__ = (function (){var statearr_23125 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23126);
return statearr_23125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23126,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23129){var vec__23133 = p__23129;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(0),null);return ((function (vec__23133,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23134 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23134) : client.call(null,G__23134));
} else
{var G__23135 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23135) : client.call(null,G__23135));
}
});
;})(vec__23133,accept))
};
var wrap_accept = function (client,var_args){
var p__23129 = null;if (arguments.length > 1) {
  p__23129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23129);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23136){
var client = cljs.core.first(arglist__23136);
var p__23129 = cljs.core.rest(arglist__23136);
return wrap_accept__delegate(client,p__23129);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23137){var vec__23141 = p__23137;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23141,(0),null);return ((function (vec__23141,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23142 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23142) : client.call(null,G__23142));
} else
{var G__23143 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23143) : client.call(null,G__23143));
}
});
;})(vec__23141,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23137 = null;if (arguments.length > 1) {
  p__23137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23137);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23144){
var client = cljs.core.first(arglist__23144);
var p__23137 = cljs.core.rest(arglist__23144);
return wrap_content_type__delegate(client,p__23137);
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
{var params = temp__4124__auto__;var map__23148 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23148__$1 = ((cljs.core.seq_QMARK_(map__23148))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23148):map__23148);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23148__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23148__$1,cljs.core.constant$keyword$111);var G__23149 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23149) : client.call(null,G__23149));
} else
{var G__23150 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23150) : client.call(null,G__23150));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23173 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23173__$1 = ((cljs.core.seq_QMARK_(map__23173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23173):map__23173);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,cljs.core.constant$keyword$113);var c__12292__auto___23194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding){
return (function (state_23183){var state_val_23184 = (state_23183[(1)]);if((state_val_23184 === (2)))
{var inst_23176 = (state_23183[(2)]);var inst_23177 = (function (){var response = inst_23176;return ((function (response,inst_23176,state_val_23184,c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding){
return (function (p1__23151_SHARP_){return cljs_http.util.transit_decode(p1__23151_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23176,state_val_23184,c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding))
})();var inst_23178 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23179 = cljs_http.client.decode_body(inst_23176,inst_23177,"application/transit+json",inst_23178);var inst_23180 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23179);var inst_23181 = cljs.core.async.close_BANG_(channel);var state_23183__$1 = (function (){var statearr_23185 = state_23183;(statearr_23185[(7)] = inst_23180);
return statearr_23185;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23183__$1,inst_23181);
} else
{if((state_val_23184 === (1)))
{var inst_23174 = (function (){var G__23186 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23186) : client.call(null,G__23186));
})();var state_23183__$1 = state_23183;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23183__$1,(2),inst_23174);
} else
{return null;
}
}
});})(c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding))
;return ((function (switch__12277__auto__,c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23190 = [null,null,null,null,null,null,null,null];(statearr_23190[(0)] = state_machine__12278__auto__);
(statearr_23190[(1)] = (1));
return statearr_23190;
});
var state_machine__12278__auto____1 = (function (state_23183){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23183);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23191){if((e23191 instanceof Object))
{var ex__12281__auto__ = e23191;var statearr_23192_23195 = state_23183;(statearr_23192_23195[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23183);
return cljs.core.constant$keyword$82;
} else
{throw e23191;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23196 = state_23183;
state_23183 = G__23196;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23183){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding))
})();var state__12294__auto__ = (function (){var statearr_23193 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23194);
return statearr_23193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23194,channel,map__23173,map__23173__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23199 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23199) : client.call(null,G__23199));
} else
{var G__23200 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23200) : client.call(null,G__23200));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23239,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23239,channel){
return (function (state_23228){var state_val_23229 = (state_23228[(1)]);if((state_val_23229 === (2)))
{var inst_23222 = (state_23228[(2)]);var inst_23223 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23224 = cljs_http.client.decode_body(inst_23222,cljs_http.util.json_decode,"application/json",inst_23223);var inst_23225 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23224);var inst_23226 = cljs.core.async.close_BANG_(channel);var state_23228__$1 = (function (){var statearr_23230 = state_23228;(statearr_23230[(7)] = inst_23225);
return statearr_23230;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23228__$1,inst_23226);
} else
{if((state_val_23229 === (1)))
{var inst_23220 = (function (){var G__23231 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23231) : client.call(null,G__23231));
})();var state_23228__$1 = state_23228;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23228__$1,(2),inst_23220);
} else
{return null;
}
}
});})(c__12292__auto___23239,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23239,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23235 = [null,null,null,null,null,null,null,null];(statearr_23235[(0)] = state_machine__12278__auto__);
(statearr_23235[(1)] = (1));
return statearr_23235;
});
var state_machine__12278__auto____1 = (function (state_23228){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23228);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23236){if((e23236 instanceof Object))
{var ex__12281__auto__ = e23236;var statearr_23237_23240 = state_23228;(statearr_23237_23240[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23228);
return cljs.core.constant$keyword$82;
} else
{throw e23236;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23241 = state_23228;
state_23228 = G__23241;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23228){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23239,channel))
})();var state__12294__auto__ = (function (){var statearr_23238 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23239);
return statearr_23238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23239,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23246){var map__23247 = p__23246;var map__23247__$1 = ((cljs.core.seq_QMARK_(map__23247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23247):map__23247);var req = map__23247__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(query_params))
{var G__23248 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$62),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23248) : client.call(null,G__23248));
} else
{var G__23249 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23249) : client.call(null,G__23249));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23254){var map__23255 = p__23254;var map__23255__$1 = ((cljs.core.seq_QMARK_(map__23255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23255):map__23255);var request = map__23255__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__23256 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23256) : client.call(null,G__23256));
} else
{var G__23257 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23257) : client.call(null,G__23257));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23259 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$124], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23259) : client.call(null,G__23259));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23262 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$125),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23262) : client.call(null,G__23262));
} else
{var G__23263 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23263) : client.call(null,G__23263));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23264_SHARP_){var G__23266 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23264_SHARP_,cljs.core.constant$keyword$74,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23266) : client.call(null,G__23266));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23272){var map__23273 = p__23272;var map__23273__$1 = ((cljs.core.seq_QMARK_(map__23273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23273):map__23273);var req = map__23273__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273__$1,cljs.core.constant$keyword$62);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23274 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),((function (spec,temp__4124__auto__,map__23273,map__23273__$1,req,query_params){
return (function (p1__23267_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23267_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23273,map__23273__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23274) : client.call(null,G__23274));
} else
{var G__23275 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23275) : client.call(null,G__23275));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23276){var vec__23280 = p__23276;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(0),null);return ((function (vec__23280,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23281 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23281) : client.call(null,G__23281));
} else
{var G__23282 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23282) : client.call(null,G__23282));
}
});
;})(vec__23280,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23276 = null;if (arguments.length > 1) {
  p__23276 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23276);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23283){
var client = cljs.core.first(arglist__23283);
var p__23276 = cljs.core.rest(arglist__23283);
return wrap_basic_auth__delegate(client,p__23276);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23286 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23286) : client.call(null,G__23286));
} else
{var G__23287 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23287) : client.call(null,G__23287));
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
var delete$__delegate = function (url,p__23288){var vec__23291 = p__23288;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23291,(0),null);var G__23292 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$121,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23292) : cljs_http.client.request.call(null,G__23292));
};
var delete$ = function (url,var_args){
var p__23288 = null;if (arguments.length > 1) {
  p__23288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23288);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23293){
var url = cljs.core.first(arglist__23293);
var p__23288 = cljs.core.rest(arglist__23293);
return delete$__delegate(url,p__23288);
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
var get__delegate = function (url,p__23294){var vec__23297 = p__23294;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23297,(0),null);var G__23298 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$102,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23298) : cljs_http.client.request.call(null,G__23298));
};
var get = function (url,var_args){
var p__23294 = null;if (arguments.length > 1) {
  p__23294 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23294);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23299){
var url = cljs.core.first(arglist__23299);
var p__23294 = cljs.core.rest(arglist__23299);
return get__delegate(url,p__23294);
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
var head__delegate = function (url,p__23300){var vec__23303 = p__23300;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(0),null);var G__23304 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$107,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23304) : cljs_http.client.request.call(null,G__23304));
};
var head = function (url,var_args){
var p__23300 = null;if (arguments.length > 1) {
  p__23300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23300);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23305){
var url = cljs.core.first(arglist__23305);
var p__23300 = cljs.core.rest(arglist__23305);
return head__delegate(url,p__23300);
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
var move__delegate = function (url,p__23306){var vec__23309 = p__23306;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(0),null);var G__23310 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23310) : cljs_http.client.request.call(null,G__23310));
};
var move = function (url,var_args){
var p__23306 = null;if (arguments.length > 1) {
  p__23306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23306);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23311){
var url = cljs.core.first(arglist__23311);
var p__23306 = cljs.core.rest(arglist__23311);
return move__delegate(url,p__23306);
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
var options__delegate = function (url,p__23312){var vec__23315 = p__23312;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23315,(0),null);var G__23316 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23316) : cljs_http.client.request.call(null,G__23316));
};
var options = function (url,var_args){
var p__23312 = null;if (arguments.length > 1) {
  p__23312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23312);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23317){
var url = cljs.core.first(arglist__23317);
var p__23312 = cljs.core.rest(arglist__23317);
return options__delegate(url,p__23312);
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
var patch__delegate = function (url,p__23318){var vec__23321 = p__23318;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23321,(0),null);var G__23322 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$120,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23322) : cljs_http.client.request.call(null,G__23322));
};
var patch = function (url,var_args){
var p__23318 = null;if (arguments.length > 1) {
  p__23318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23318);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23323){
var url = cljs.core.first(arglist__23323);
var p__23318 = cljs.core.rest(arglist__23323);
return patch__delegate(url,p__23318);
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
var post__delegate = function (url,p__23324){var vec__23327 = p__23324;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327,(0),null);var G__23328 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$122,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23328) : cljs_http.client.request.call(null,G__23328));
};
var post = function (url,var_args){
var p__23324 = null;if (arguments.length > 1) {
  p__23324 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23324);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23329){
var url = cljs.core.first(arglist__23329);
var p__23324 = cljs.core.rest(arglist__23329);
return post__delegate(url,p__23324);
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
var put__delegate = function (url,p__23330){var vec__23333 = p__23330;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(0),null);var G__23334 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$123,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23334) : cljs_http.client.request.call(null,G__23334));
};
var put = function (url,var_args){
var p__23330 = null;if (arguments.length > 1) {
  p__23330 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23330);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23335){
var url = cljs.core.first(arglist__23335);
var p__23330 = cljs.core.rest(arglist__23335);
return put__delegate(url,p__23330);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
