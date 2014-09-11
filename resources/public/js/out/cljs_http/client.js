// Compiled by ClojureScript 0.0-2277
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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3541__auto__ = v;if(cljs.core.truth_(and__3541__auto__))
{return (v > (0));
} else
{return and__3541__auto__;
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
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__11249_SHARP_,p2__11248_SHARP_){var vec__11251 = clojure.string.split.call(null,p2__11248_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__11251,(0),null);var v = cljs.core.nth.call(null,vec__11251,(1),null);return cljs.core.assoc.call(null,p1__11249_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11252_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__11252_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__11253){var vec__11255 = p__11253;var k = cljs.core.nth.call(null,vec__11255,(0),null);var v = cljs.core.nth.call(null,vec__11255,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__11256_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11256_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3541__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6369__auto___11293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___11293,channel){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___11293,channel){
return (function (state_11283){var state_val_11284 = (state_11283[(1)]);if((state_val_11284 === (2)))
{var inst_11277 = (state_11283[(2)]);var inst_11278 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11279 = cljs_http.client.decode_body.call(null,inst_11277,cljs.reader.read_string,"application/edn",inst_11278);var inst_11280 = cljs.core.async.put_BANG_.call(null,channel,inst_11279);var inst_11281 = cljs.core.async.close_BANG_.call(null,channel);var state_11283__$1 = (function (){var statearr_11285 = state_11283;(statearr_11285[(7)] = inst_11280);
return statearr_11285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11283__$1,inst_11281);
} else
{if((state_val_11284 === (1)))
{var inst_11275 = client.call(null,request);var state_11283__$1 = state_11283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11283__$1,(2),inst_11275);
} else
{return null;
}
}
});})(c__6369__auto___11293,channel))
;return ((function (switch__6354__auto__,c__6369__auto___11293,channel){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_11289 = [null,null,null,null,null,null,null,null];(statearr_11289[(0)] = state_machine__6355__auto__);
(statearr_11289[(1)] = (1));
return statearr_11289;
});
var state_machine__6355__auto____1 = (function (state_11283){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_11283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e11290){if((e11290 instanceof Object))
{var ex__6358__auto__ = e11290;var statearr_11291_11294 = state_11283;(statearr_11291_11294[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11295 = state_11283;
state_11283 = G__11295;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_11283){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_11283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___11293,channel))
})();var state__6371__auto__ = (function (){var statearr_11292 = f__6370__auto__.call(null);(statearr_11292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___11293);
return statearr_11292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___11293,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__11296){var vec__11298 = p__11296;var accept = cljs.core.nth.call(null,vec__11298,(0),null);return ((function (vec__11298,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11298,accept))
};
var wrap_accept = function (client,var_args){
var p__11296 = null;if (arguments.length > 1) {
  p__11296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__11296);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__11299){
var client = cljs.core.first(arglist__11299);
var p__11296 = cljs.core.rest(arglist__11299);
return wrap_accept__delegate(client,p__11296);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__11300){var vec__11302 = p__11300;var content_type = cljs.core.nth.call(null,vec__11302,(0),null);return ((function (vec__11302,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11302,content_type))
};
var wrap_content_type = function (client,var_args){
var p__11300 = null;if (arguments.length > 1) {
  p__11300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__11300);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__11303){
var client = cljs.core.first(arglist__11303);
var p__11300 = cljs.core.rest(arglist__11303);
return wrap_content_type__delegate(client,p__11300);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__11305 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__11305__$1 = ((cljs.core.seq_QMARK_.call(null,map__11305))?cljs.core.apply.call(null,cljs.core.hash_map,map__11305):map__11305);var encoding_opts = cljs.core.get.call(null,map__11305__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__11305__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__11327 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__11327__$1 = ((cljs.core.seq_QMARK_.call(null,map__11327))?cljs.core.apply.call(null,cljs.core.hash_map,map__11327):map__11327);var decoding_opts = cljs.core.get.call(null,map__11327__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__11327__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__6369__auto___11347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding){
return (function (state_11337){var state_val_11338 = (state_11337[(1)]);if((state_val_11338 === (2)))
{var inst_11330 = (state_11337[(2)]);var inst_11331 = (function (){var response = inst_11330;return ((function (response,inst_11330,state_val_11338,c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding){
return (function (p1__11306_SHARP_){return cljs_http.util.transit_decode.call(null,p1__11306_SHARP_,decoding,decoding_opts);
});
;})(response,inst_11330,state_val_11338,c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding))
})();var inst_11332 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11333 = cljs_http.client.decode_body.call(null,inst_11330,inst_11331,"application/transit+json",inst_11332);var inst_11334 = cljs.core.async.put_BANG_.call(null,channel,inst_11333);var inst_11335 = cljs.core.async.close_BANG_.call(null,channel);var state_11337__$1 = (function (){var statearr_11339 = state_11337;(statearr_11339[(7)] = inst_11334);
return statearr_11339;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11337__$1,inst_11335);
} else
{if((state_val_11338 === (1)))
{var inst_11328 = client.call(null,request);var state_11337__$1 = state_11337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11337__$1,(2),inst_11328);
} else
{return null;
}
}
});})(c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding))
;return ((function (switch__6354__auto__,c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_11343 = [null,null,null,null,null,null,null,null];(statearr_11343[(0)] = state_machine__6355__auto__);
(statearr_11343[(1)] = (1));
return statearr_11343;
});
var state_machine__6355__auto____1 = (function (state_11337){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_11337);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e11344){if((e11344 instanceof Object))
{var ex__6358__auto__ = e11344;var statearr_11345_11348 = state_11337;(statearr_11345_11348[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11349 = state_11337;
state_11337 = G__11349;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_11337){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_11337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding))
})();var state__6371__auto__ = (function (){var statearr_11346 = f__6370__auto__.call(null);(statearr_11346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___11347);
return statearr_11346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___11347,channel,map__11327,map__11327__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6369__auto___11386 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___11386,channel){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___11386,channel){
return (function (state_11376){var state_val_11377 = (state_11376[(1)]);if((state_val_11377 === (2)))
{var inst_11370 = (state_11376[(2)]);var inst_11371 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11372 = cljs_http.client.decode_body.call(null,inst_11370,cljs_http.util.json_decode,"application/json",inst_11371);var inst_11373 = cljs.core.async.put_BANG_.call(null,channel,inst_11372);var inst_11374 = cljs.core.async.close_BANG_.call(null,channel);var state_11376__$1 = (function (){var statearr_11378 = state_11376;(statearr_11378[(7)] = inst_11373);
return statearr_11378;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11376__$1,inst_11374);
} else
{if((state_val_11377 === (1)))
{var inst_11368 = client.call(null,request);var state_11376__$1 = state_11376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11376__$1,(2),inst_11368);
} else
{return null;
}
}
});})(c__6369__auto___11386,channel))
;return ((function (switch__6354__auto__,c__6369__auto___11386,channel){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_11382 = [null,null,null,null,null,null,null,null];(statearr_11382[(0)] = state_machine__6355__auto__);
(statearr_11382[(1)] = (1));
return statearr_11382;
});
var state_machine__6355__auto____1 = (function (state_11376){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_11376);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e11383){if((e11383 instanceof Object))
{var ex__6358__auto__ = e11383;var statearr_11384_11387 = state_11376;(statearr_11384_11387[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11388 = state_11376;
state_11376 = G__11388;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_11376){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_11376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___11386,channel))
})();var state__6371__auto__ = (function (){var statearr_11385 = f__6370__auto__.call(null);(statearr_11385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___11386);
return statearr_11385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___11386,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__11391){var map__11392 = p__11391;var map__11392__$1 = ((cljs.core.seq_QMARK_.call(null,map__11392))?cljs.core.apply.call(null,cljs.core.hash_map,map__11392):map__11392);var req = map__11392__$1;var query_params = cljs.core.get.call(null,map__11392__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__11395){var map__11396 = p__11395;var map__11396__$1 = ((cljs.core.seq_QMARK_.call(null,map__11396))?cljs.core.apply.call(null,cljs.core.hash_map,map__11396):map__11396);var request = map__11396__$1;var request_method = cljs.core.get.call(null,map__11396__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__11396__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3541__auto__ = form_params;if(cljs.core.truth_(and__3541__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3541__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__11397_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__11397_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__11401){var map__11402 = p__11401;var map__11402__$1 = ((cljs.core.seq_QMARK_.call(null,map__11402))?cljs.core.apply.call(null,cljs.core.hash_map,map__11402):map__11402);var req = map__11402__$1;var query_params = cljs.core.get.call(null,map__11402__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__11402,map__11402__$1,req,query_params){
return (function (p1__11398_SHARP_){return cljs.core.merge.call(null,p1__11398_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__11402,map__11402__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__11403){var vec__11405 = p__11403;var credentials = cljs.core.nth.call(null,vec__11405,(0),null);return ((function (vec__11405,credentials){
return (function (req){var credentials__$1 = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__11405,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__11403 = null;if (arguments.length > 1) {
  p__11403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__11403);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__11406){
var client = cljs.core.first(arglist__11406);
var p__11403 = cljs.core.rest(arglist__11406);
return wrap_basic_auth__delegate(client,p__11403);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__11407){var vec__11409 = p__11407;var req = cljs.core.nth.call(null,vec__11409,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__11407 = null;if (arguments.length > 1) {
  p__11407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__11407);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__11410){
var url = cljs.core.first(arglist__11410);
var p__11407 = cljs.core.rest(arglist__11410);
return delete$__delegate(url,p__11407);
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
var get__delegate = function (url,p__11411){var vec__11413 = p__11411;var req = cljs.core.nth.call(null,vec__11413,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__11411 = null;if (arguments.length > 1) {
  p__11411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__11411);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__11414){
var url = cljs.core.first(arglist__11414);
var p__11411 = cljs.core.rest(arglist__11414);
return get__delegate(url,p__11411);
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
var head__delegate = function (url,p__11415){var vec__11417 = p__11415;var req = cljs.core.nth.call(null,vec__11417,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__11415 = null;if (arguments.length > 1) {
  p__11415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__11415);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__11418){
var url = cljs.core.first(arglist__11418);
var p__11415 = cljs.core.rest(arglist__11418);
return head__delegate(url,p__11415);
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
var move__delegate = function (url,p__11419){var vec__11421 = p__11419;var req = cljs.core.nth.call(null,vec__11421,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__11419 = null;if (arguments.length > 1) {
  p__11419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__11419);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__11422){
var url = cljs.core.first(arglist__11422);
var p__11419 = cljs.core.rest(arglist__11422);
return move__delegate(url,p__11419);
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
var options__delegate = function (url,p__11423){var vec__11425 = p__11423;var req = cljs.core.nth.call(null,vec__11425,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__11423 = null;if (arguments.length > 1) {
  p__11423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__11423);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__11426){
var url = cljs.core.first(arglist__11426);
var p__11423 = cljs.core.rest(arglist__11426);
return options__delegate(url,p__11423);
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
var patch__delegate = function (url,p__11427){var vec__11429 = p__11427;var req = cljs.core.nth.call(null,vec__11429,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__11427 = null;if (arguments.length > 1) {
  p__11427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__11427);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__11430){
var url = cljs.core.first(arglist__11430);
var p__11427 = cljs.core.rest(arglist__11430);
return patch__delegate(url,p__11427);
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
var post__delegate = function (url,p__11431){var vec__11433 = p__11431;var req = cljs.core.nth.call(null,vec__11433,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__11431 = null;if (arguments.length > 1) {
  p__11431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__11431);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__11434){
var url = cljs.core.first(arglist__11434);
var p__11431 = cljs.core.rest(arglist__11434);
return post__delegate(url,p__11431);
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
var put__delegate = function (url,p__11435){var vec__11437 = p__11435;var req = cljs.core.nth.call(null,vec__11437,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__11435 = null;if (arguments.length > 1) {
  p__11435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__11435);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__11438){
var url = cljs.core.first(arglist__11438);
var p__11435 = cljs.core.rest(arglist__11438);
return put__delegate(url,p__11435);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map