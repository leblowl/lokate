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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23191_SHARP_,p2__23190_SHARP_){var vec__23193 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23190_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23191_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23195 = url;return goog.Uri.parse(G__23195);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$71,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$74,uri.getDomain(),cljs.core.constant$keyword$75,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$76,uri.getPath(),cljs.core.constant$keyword$78,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$62,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23196_SHARP_){return cljs_http.client.encode_val(k,p1__23196_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23197){var vec__23199 = p__23197;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23199,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23199,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23200_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23200_SHARP_));
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
{var params = temp__4124__auto__;var G__23203 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$99,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23203) : client.call(null,G__23203));
} else
{var G__23204 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23204) : client.call(null,G__23204));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23243,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23243,channel){
return (function (state_23232){var state_val_23233 = (state_23232[(1)]);if((state_val_23233 === (2)))
{var inst_23226 = (state_23232[(2)]);var inst_23227 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23228 = cljs_http.client.decode_body(inst_23226,cljs.reader.read_string,"application/edn",inst_23227);var inst_23229 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23228);var inst_23230 = cljs.core.async.close_BANG_(channel);var state_23232__$1 = (function (){var statearr_23234 = state_23232;(statearr_23234[(7)] = inst_23229);
return statearr_23234;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23232__$1,inst_23230);
} else
{if((state_val_23233 === (1)))
{var inst_23224 = (function (){var G__23235 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23235) : client.call(null,G__23235));
})();var state_23232__$1 = state_23232;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23232__$1,(2),inst_23224);
} else
{return null;
}
}
});})(c__12292__auto___23243,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23243,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23239 = [null,null,null,null,null,null,null,null];(statearr_23239[(0)] = state_machine__12278__auto__);
(statearr_23239[(1)] = (1));
return statearr_23239;
});
var state_machine__12278__auto____1 = (function (state_23232){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23232);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23240){if((e23240 instanceof Object))
{var ex__12281__auto__ = e23240;var statearr_23241_23244 = state_23232;(statearr_23241_23244[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23232);
return cljs.core.constant$keyword$82;
} else
{throw e23240;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23245 = state_23232;
state_23232 = G__23245;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23232){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23243,channel))
})();var state__12294__auto__ = (function (){var statearr_23242 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23243);
return statearr_23242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23243,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23246){var vec__23250 = p__23246;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(0),null);return ((function (vec__23250,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23251 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23251) : client.call(null,G__23251));
} else
{var G__23252 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23252) : client.call(null,G__23252));
}
});
;})(vec__23250,accept))
};
var wrap_accept = function (client,var_args){
var p__23246 = null;if (arguments.length > 1) {
  p__23246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23246);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23253){
var client = cljs.core.first(arglist__23253);
var p__23246 = cljs.core.rest(arglist__23253);
return wrap_accept__delegate(client,p__23246);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23254){var vec__23258 = p__23254;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23258,(0),null);return ((function (vec__23258,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23259 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23259) : client.call(null,G__23259));
} else
{var G__23260 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23260) : client.call(null,G__23260));
}
});
;})(vec__23258,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23254 = null;if (arguments.length > 1) {
  p__23254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23254);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23261){
var client = cljs.core.first(arglist__23261);
var p__23254 = cljs.core.rest(arglist__23261);
return wrap_content_type__delegate(client,p__23254);
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
{var params = temp__4124__auto__;var map__23265 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23265__$1 = ((cljs.core.seq_QMARK_(map__23265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23265):map__23265);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23265__$1,cljs.core.constant$keyword$112);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23265__$1,cljs.core.constant$keyword$111);var G__23266 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$116),cljs.core.constant$keyword$99,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23266) : client.call(null,G__23266));
} else
{var G__23267 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23267) : client.call(null,G__23267));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23290__$1 = ((cljs.core.seq_QMARK_(map__23290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23290):map__23290);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,cljs.core.constant$keyword$114);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,cljs.core.constant$keyword$113);var c__12292__auto___23311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding){
return (function (state_23300){var state_val_23301 = (state_23300[(1)]);if((state_val_23301 === (2)))
{var inst_23293 = (state_23300[(2)]);var inst_23294 = (function (){var response = inst_23293;return ((function (response,inst_23293,state_val_23301,c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding){
return (function (p1__23268_SHARP_){return cljs_http.util.transit_decode(p1__23268_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23293,state_val_23301,c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding))
})();var inst_23295 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23296 = cljs_http.client.decode_body(inst_23293,inst_23294,"application/transit+json",inst_23295);var inst_23297 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23296);var inst_23298 = cljs.core.async.close_BANG_(channel);var state_23300__$1 = (function (){var statearr_23302 = state_23300;(statearr_23302[(7)] = inst_23297);
return statearr_23302;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23300__$1,inst_23298);
} else
{if((state_val_23301 === (1)))
{var inst_23291 = (function (){var G__23303 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23303) : client.call(null,G__23303));
})();var state_23300__$1 = state_23300;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23300__$1,(2),inst_23291);
} else
{return null;
}
}
});})(c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding))
;return ((function (switch__12277__auto__,c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23307 = [null,null,null,null,null,null,null,null];(statearr_23307[(0)] = state_machine__12278__auto__);
(statearr_23307[(1)] = (1));
return statearr_23307;
});
var state_machine__12278__auto____1 = (function (state_23300){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23300);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object))
{var ex__12281__auto__ = e23308;var statearr_23309_23312 = state_23300;(statearr_23309_23312[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23300);
return cljs.core.constant$keyword$82;
} else
{throw e23308;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23313 = state_23300;
state_23300 = G__23313;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23300){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding))
})();var state__12294__auto__ = (function (){var statearr_23310 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23311);
return statearr_23310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23311,channel,map__23290,map__23290__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23316 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$118),cljs.core.constant$keyword$99,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23316) : client.call(null,G__23316));
} else
{var G__23317 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23317) : client.call(null,G__23317));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12292__auto___23356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___23356,channel){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___23356,channel){
return (function (state_23345){var state_val_23346 = (state_23345[(1)]);if((state_val_23346 === (2)))
{var inst_23339 = (state_23345[(2)]);var inst_23340 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request);var inst_23341 = cljs_http.client.decode_body(inst_23339,cljs_http.util.json_decode,"application/json",inst_23340);var inst_23342 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23341);var inst_23343 = cljs.core.async.close_BANG_(channel);var state_23345__$1 = (function (){var statearr_23347 = state_23345;(statearr_23347[(7)] = inst_23342);
return statearr_23347;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23345__$1,inst_23343);
} else
{if((state_val_23346 === (1)))
{var inst_23337 = (function (){var G__23348 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23348) : client.call(null,G__23348));
})();var state_23345__$1 = state_23345;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23345__$1,(2),inst_23337);
} else
{return null;
}
}
});})(c__12292__auto___23356,channel))
;return ((function (switch__12277__auto__,c__12292__auto___23356,channel){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_23352 = [null,null,null,null,null,null,null,null];(statearr_23352[(0)] = state_machine__12278__auto__);
(statearr_23352[(1)] = (1));
return statearr_23352;
});
var state_machine__12278__auto____1 = (function (state_23345){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_23345);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object))
{var ex__12281__auto__ = e23353;var statearr_23354_23357 = state_23345;(statearr_23354_23357[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23345);
return cljs.core.constant$keyword$82;
} else
{throw e23353;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__23358 = state_23345;
state_23345 = G__23358;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_23345){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_23345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___23356,channel))
})();var state__12294__auto__ = (function (){var statearr_23355 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___23356);
return statearr_23355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___23356,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23363){var map__23364 = p__23363;var map__23364__$1 = ((cljs.core.seq_QMARK_(map__23364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23364):map__23364);var req = map__23364__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364__$1,cljs.core.constant$keyword$62);if(cljs.core.truth_(query_params))
{var G__23365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$62),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23365) : client.call(null,G__23365));
} else
{var G__23366 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23366) : client.call(null,G__23366));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23371){var map__23372 = p__23371;var map__23372__$1 = ((cljs.core.seq_QMARK_(map__23372))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23372):map__23372);var request = map__23372__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,cljs.core.constant$keyword$101);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23372__$1,cljs.core.constant$keyword$119);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$120,null,cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__23373 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$99,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23373) : client.call(null,G__23373));
} else
{var G__23374 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23374) : client.call(null,G__23374));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23376 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$124], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23376) : client.call(null,G__23376));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23379 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$125),cljs.core.constant$keyword$101,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23379) : client.call(null,G__23379));
} else
{var G__23380 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23380) : client.call(null,G__23380));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23381_SHARP_){var G__23383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23381_SHARP_,cljs.core.constant$keyword$74,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23383) : client.call(null,G__23383));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23389){var map__23390 = p__23389;var map__23390__$1 = ((cljs.core.seq_QMARK_(map__23390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23390):map__23390);var req = map__23390__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23390__$1,cljs.core.constant$keyword$62);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23391 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),((function (spec,temp__4124__auto__,map__23390,map__23390__$1,req,query_params){
return (function (p1__23384_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23384_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23390,map__23390__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23391) : client.call(null,G__23391));
} else
{var G__23392 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23392) : client.call(null,G__23392));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23393){var vec__23397 = p__23393;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23397,(0),null);return ((function (vec__23397,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23398 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23398) : client.call(null,G__23398));
} else
{var G__23399 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23399) : client.call(null,G__23399));
}
});
;})(vec__23397,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23393 = null;if (arguments.length > 1) {
  p__23393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23393);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23400){
var client = cljs.core.first(arglist__23400);
var p__23393 = cljs.core.rest(arglist__23400);
return wrap_basic_auth__delegate(client,p__23393);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23403 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23403) : client.call(null,G__23403));
} else
{var G__23404 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23404) : client.call(null,G__23404));
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
var delete$__delegate = function (url,p__23405){var vec__23408 = p__23405;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23408,(0),null);var G__23409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$121,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23409) : cljs_http.client.request.call(null,G__23409));
};
var delete$ = function (url,var_args){
var p__23405 = null;if (arguments.length > 1) {
  p__23405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23405);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23410){
var url = cljs.core.first(arglist__23410);
var p__23405 = cljs.core.rest(arglist__23410);
return delete$__delegate(url,p__23405);
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
var get__delegate = function (url,p__23411){var vec__23414 = p__23411;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23414,(0),null);var G__23415 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$102,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23415) : cljs_http.client.request.call(null,G__23415));
};
var get = function (url,var_args){
var p__23411 = null;if (arguments.length > 1) {
  p__23411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23411);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23416){
var url = cljs.core.first(arglist__23416);
var p__23411 = cljs.core.rest(arglist__23416);
return get__delegate(url,p__23411);
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
var head__delegate = function (url,p__23417){var vec__23420 = p__23417;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23420,(0),null);var G__23421 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$107,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23421) : cljs_http.client.request.call(null,G__23421));
};
var head = function (url,var_args){
var p__23417 = null;if (arguments.length > 1) {
  p__23417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23417);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23422){
var url = cljs.core.first(arglist__23422);
var p__23417 = cljs.core.rest(arglist__23422);
return head__delegate(url,p__23417);
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
var move__delegate = function (url,p__23423){var vec__23426 = p__23423;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23426,(0),null);var G__23427 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23427) : cljs_http.client.request.call(null,G__23427));
};
var move = function (url,var_args){
var p__23423 = null;if (arguments.length > 1) {
  p__23423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23423);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23428){
var url = cljs.core.first(arglist__23428);
var p__23423 = cljs.core.rest(arglist__23428);
return move__delegate(url,p__23423);
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
var options__delegate = function (url,p__23429){var vec__23432 = p__23429;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(0),null);var G__23433 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23433) : cljs_http.client.request.call(null,G__23433));
};
var options = function (url,var_args){
var p__23429 = null;if (arguments.length > 1) {
  p__23429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23429);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23434){
var url = cljs.core.first(arglist__23434);
var p__23429 = cljs.core.rest(arglist__23434);
return options__delegate(url,p__23429);
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
var patch__delegate = function (url,p__23435){var vec__23438 = p__23435;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(0),null);var G__23439 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$120,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23439) : cljs_http.client.request.call(null,G__23439));
};
var patch = function (url,var_args){
var p__23435 = null;if (arguments.length > 1) {
  p__23435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23435);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23440){
var url = cljs.core.first(arglist__23440);
var p__23435 = cljs.core.rest(arglist__23440);
return patch__delegate(url,p__23435);
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
var post__delegate = function (url,p__23441){var vec__23444 = p__23441;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23444,(0),null);var G__23445 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$122,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23445) : cljs_http.client.request.call(null,G__23445));
};
var post = function (url,var_args){
var p__23441 = null;if (arguments.length > 1) {
  p__23441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23441);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23446){
var url = cljs.core.first(arglist__23446);
var p__23441 = cljs.core.rest(arglist__23446);
return post__delegate(url,p__23441);
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
var put__delegate = function (url,p__23447){var vec__23450 = p__23447;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23450,(0),null);var G__23451 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,cljs.core.constant$keyword$123,cljs.core.constant$keyword$126,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23451) : cljs_http.client.request.call(null,G__23451));
};
var put = function (url,var_args){
var p__23447 = null;if (arguments.length > 1) {
  p__23447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23447);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23452){
var url = cljs.core.first(arglist__23452);
var p__23447 = cljs.core.rest(arglist__23452);
return put__delegate(url,p__23447);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
