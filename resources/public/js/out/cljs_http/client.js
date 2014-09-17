// Compiled by ClojureScript 0.0-2322
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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3558__auto__ = v;if(cljs.core.truth_(and__3558__auto__))
{return (v > (0));
} else
{return and__3558__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__11362_SHARP_,p2__11361_SHARP_){var vec__11364 = clojure.string.split.call(null,p2__11361_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__11364,(0),null);var v = cljs.core.nth.call(null,vec__11364,(1),null);return cljs.core.assoc.call(null,p1__11362_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11365_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__11365_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__11366){var vec__11368 = p__11366;var k = cljs.core.nth.call(null,vec__11368,(0),null);var v = cljs.core.nth.call(null,vec__11368,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__11369_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11369_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3558__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3558__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3558__auto__;
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6391__auto___11406 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___11406,channel){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___11406,channel){
return (function (state_11396){var state_val_11397 = (state_11396[(1)]);if((state_val_11397 === (2)))
{var inst_11390 = (state_11396[(2)]);var inst_11391 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11392 = cljs_http.client.decode_body.call(null,inst_11390,cljs.reader.read_string,"application/edn",inst_11391);var inst_11393 = cljs.core.async.put_BANG_.call(null,channel,inst_11392);var inst_11394 = cljs.core.async.close_BANG_.call(null,channel);var state_11396__$1 = (function (){var statearr_11398 = state_11396;(statearr_11398[(7)] = inst_11393);
return statearr_11398;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11396__$1,inst_11394);
} else
{if((state_val_11397 === (1)))
{var inst_11388 = client.call(null,request);var state_11396__$1 = state_11396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11396__$1,(2),inst_11388);
} else
{return null;
}
}
});})(c__6391__auto___11406,channel))
;return ((function (switch__6376__auto__,c__6391__auto___11406,channel){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_11402 = [null,null,null,null,null,null,null,null];(statearr_11402[(0)] = state_machine__6377__auto__);
(statearr_11402[(1)] = (1));
return statearr_11402;
});
var state_machine__6377__auto____1 = (function (state_11396){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_11396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e11403){if((e11403 instanceof Object))
{var ex__6380__auto__ = e11403;var statearr_11404_11407 = state_11396;(statearr_11404_11407[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11408 = state_11396;
state_11396 = G__11408;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_11396){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_11396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___11406,channel))
})();var state__6393__auto__ = (function (){var statearr_11405 = f__6392__auto__.call(null);(statearr_11405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___11406);
return statearr_11405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___11406,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__11409){var vec__11411 = p__11409;var accept = cljs.core.nth.call(null,vec__11411,(0),null);return ((function (vec__11411,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3570__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11411,accept))
};
var wrap_accept = function (client,var_args){
var p__11409 = null;if (arguments.length > 1) {
  p__11409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__11409);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__11412){
var client = cljs.core.first(arglist__11412);
var p__11409 = cljs.core.rest(arglist__11412);
return wrap_accept__delegate(client,p__11409);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__11413){var vec__11415 = p__11413;var content_type = cljs.core.nth.call(null,vec__11415,(0),null);return ((function (vec__11415,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3570__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11415,content_type))
};
var wrap_content_type = function (client,var_args){
var p__11413 = null;if (arguments.length > 1) {
  p__11413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__11413);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__11416){
var client = cljs.core.first(arglist__11416);
var p__11413 = cljs.core.rest(arglist__11416);
return wrap_content_type__delegate(client,p__11413);
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
{var params = temp__4124__auto__;var map__11418 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__11418__$1 = ((cljs.core.seq_QMARK_.call(null,map__11418))?cljs.core.apply.call(null,cljs.core.hash_map,map__11418):map__11418);var encoding_opts = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__11440 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__11440__$1 = ((cljs.core.seq_QMARK_.call(null,map__11440))?cljs.core.apply.call(null,cljs.core.hash_map,map__11440):map__11440);var decoding_opts = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__6391__auto___11460 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding){
return (function (state_11450){var state_val_11451 = (state_11450[(1)]);if((state_val_11451 === (2)))
{var inst_11443 = (state_11450[(2)]);var inst_11444 = (function (){var response = inst_11443;return ((function (response,inst_11443,state_val_11451,c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding){
return (function (p1__11419_SHARP_){return cljs_http.util.transit_decode.call(null,p1__11419_SHARP_,decoding,decoding_opts);
});
;})(response,inst_11443,state_val_11451,c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding))
})();var inst_11445 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11446 = cljs_http.client.decode_body.call(null,inst_11443,inst_11444,"application/transit+json",inst_11445);var inst_11447 = cljs.core.async.put_BANG_.call(null,channel,inst_11446);var inst_11448 = cljs.core.async.close_BANG_.call(null,channel);var state_11450__$1 = (function (){var statearr_11452 = state_11450;(statearr_11452[(7)] = inst_11447);
return statearr_11452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11450__$1,inst_11448);
} else
{if((state_val_11451 === (1)))
{var inst_11441 = client.call(null,request);var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11450__$1,(2),inst_11441);
} else
{return null;
}
}
});})(c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding))
;return ((function (switch__6376__auto__,c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_11456 = [null,null,null,null,null,null,null,null];(statearr_11456[(0)] = state_machine__6377__auto__);
(statearr_11456[(1)] = (1));
return statearr_11456;
});
var state_machine__6377__auto____1 = (function (state_11450){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_11450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e11457){if((e11457 instanceof Object))
{var ex__6380__auto__ = e11457;var statearr_11458_11461 = state_11450;(statearr_11458_11461[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11462 = state_11450;
state_11450 = G__11462;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding))
})();var state__6393__auto__ = (function (){var statearr_11459 = f__6392__auto__.call(null);(statearr_11459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___11460);
return statearr_11459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___11460,channel,map__11440,map__11440__$1,decoding_opts,decoding))
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6391__auto___11499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___11499,channel){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___11499,channel){
return (function (state_11489){var state_val_11490 = (state_11489[(1)]);if((state_val_11490 === (2)))
{var inst_11483 = (state_11489[(2)]);var inst_11484 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_11485 = cljs_http.client.decode_body.call(null,inst_11483,cljs_http.util.json_decode,"application/json",inst_11484);var inst_11486 = cljs.core.async.put_BANG_.call(null,channel,inst_11485);var inst_11487 = cljs.core.async.close_BANG_.call(null,channel);var state_11489__$1 = (function (){var statearr_11491 = state_11489;(statearr_11491[(7)] = inst_11486);
return statearr_11491;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11489__$1,inst_11487);
} else
{if((state_val_11490 === (1)))
{var inst_11481 = client.call(null,request);var state_11489__$1 = state_11489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11489__$1,(2),inst_11481);
} else
{return null;
}
}
});})(c__6391__auto___11499,channel))
;return ((function (switch__6376__auto__,c__6391__auto___11499,channel){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_11495 = [null,null,null,null,null,null,null,null];(statearr_11495[(0)] = state_machine__6377__auto__);
(statearr_11495[(1)] = (1));
return statearr_11495;
});
var state_machine__6377__auto____1 = (function (state_11489){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_11489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e11496){if((e11496 instanceof Object))
{var ex__6380__auto__ = e11496;var statearr_11497_11500 = state_11489;(statearr_11497_11500[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11501 = state_11489;
state_11489 = G__11501;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_11489){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_11489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___11499,channel))
})();var state__6393__auto__ = (function (){var statearr_11498 = f__6392__auto__.call(null);(statearr_11498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___11499);
return statearr_11498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___11499,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__11504){var map__11505 = p__11504;var map__11505__$1 = ((cljs.core.seq_QMARK_.call(null,map__11505))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505):map__11505);var req = map__11505__$1;var query_params = cljs.core.get.call(null,map__11505__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__11508){var map__11509 = p__11508;var map__11509__$1 = ((cljs.core.seq_QMARK_.call(null,map__11509))?cljs.core.apply.call(null,cljs.core.hash_map,map__11509):map__11509);var request = map__11509__$1;var request_method = cljs.core.get.call(null,map__11509__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__11509__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3558__auto__ = form_params;if(cljs.core.truth_(and__3558__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3558__auto__;
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__11510_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__11510_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__11514){var map__11515 = p__11514;var map__11515__$1 = ((cljs.core.seq_QMARK_.call(null,map__11515))?cljs.core.apply.call(null,cljs.core.hash_map,map__11515):map__11515);var req = map__11515__$1;var query_params = cljs.core.get.call(null,map__11515__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__11515,map__11515__$1,req,query_params){
return (function (p1__11511_SHARP_){return cljs.core.merge.call(null,p1__11511_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__11515,map__11515__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__11516){var vec__11518 = p__11516;var credentials = cljs.core.nth.call(null,vec__11518,(0),null);return ((function (vec__11518,credentials){
return (function (req){var credentials__$1 = (function (){var or__3570__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__11518,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__11516 = null;if (arguments.length > 1) {
  p__11516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__11516);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__11519){
var client = cljs.core.first(arglist__11519);
var p__11516 = cljs.core.rest(arglist__11519);
return wrap_basic_auth__delegate(client,p__11516);
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
var delete$__delegate = function (url,p__11520){var vec__11522 = p__11520;var req = cljs.core.nth.call(null,vec__11522,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__11520 = null;if (arguments.length > 1) {
  p__11520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__11520);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__11523){
var url = cljs.core.first(arglist__11523);
var p__11520 = cljs.core.rest(arglist__11523);
return delete$__delegate(url,p__11520);
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
var get__delegate = function (url,p__11524){var vec__11526 = p__11524;var req = cljs.core.nth.call(null,vec__11526,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__11524 = null;if (arguments.length > 1) {
  p__11524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__11524);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__11527){
var url = cljs.core.first(arglist__11527);
var p__11524 = cljs.core.rest(arglist__11527);
return get__delegate(url,p__11524);
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
var head__delegate = function (url,p__11528){var vec__11530 = p__11528;var req = cljs.core.nth.call(null,vec__11530,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__11528 = null;if (arguments.length > 1) {
  p__11528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__11528);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__11531){
var url = cljs.core.first(arglist__11531);
var p__11528 = cljs.core.rest(arglist__11531);
return head__delegate(url,p__11528);
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
var move__delegate = function (url,p__11532){var vec__11534 = p__11532;var req = cljs.core.nth.call(null,vec__11534,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__11532 = null;if (arguments.length > 1) {
  p__11532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__11532);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__11535){
var url = cljs.core.first(arglist__11535);
var p__11532 = cljs.core.rest(arglist__11535);
return move__delegate(url,p__11532);
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
var options__delegate = function (url,p__11536){var vec__11538 = p__11536;var req = cljs.core.nth.call(null,vec__11538,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__11536 = null;if (arguments.length > 1) {
  p__11536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__11536);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__11539){
var url = cljs.core.first(arglist__11539);
var p__11536 = cljs.core.rest(arglist__11539);
return options__delegate(url,p__11536);
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
var patch__delegate = function (url,p__11540){var vec__11542 = p__11540;var req = cljs.core.nth.call(null,vec__11542,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__11540 = null;if (arguments.length > 1) {
  p__11540 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__11540);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__11543){
var url = cljs.core.first(arglist__11543);
var p__11540 = cljs.core.rest(arglist__11543);
return patch__delegate(url,p__11540);
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
var post__delegate = function (url,p__11544){var vec__11546 = p__11544;var req = cljs.core.nth.call(null,vec__11546,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__11544 = null;if (arguments.length > 1) {
  p__11544 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__11544);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__11547){
var url = cljs.core.first(arglist__11547);
var p__11544 = cljs.core.rest(arglist__11547);
return post__delegate(url,p__11544);
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
var put__delegate = function (url,p__11548){var vec__11550 = p__11548;var req = cljs.core.nth.call(null,vec__11550,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__11548 = null;if (arguments.length > 1) {
  p__11548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__11548);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__11551){
var url = cljs.core.first(arglist__11551);
var p__11548 = cljs.core.rest(arglist__11551);
return put__delegate(url,p__11548);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map