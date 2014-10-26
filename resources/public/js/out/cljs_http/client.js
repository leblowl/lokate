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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__12534__auto__ = v;if(cljs.core.truth_(and__12534__auto__))
{return (v > (0));
} else
{return and__12534__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__25909_SHARP_,p2__25908_SHARP_){var vec__25911 = clojure.string.split.call(null,p2__25908_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__25911,(0),null);var v = cljs.core.nth.call(null,vec__25911,(1),null);return cljs.core.assoc.call(null,p1__25909_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__25912_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__25912_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__25913){var vec__25915 = p__25913;var k = cljs.core.nth.call(null,vec__25915,(0),null);var v = cljs.core.nth.call(null,vec__25915,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__25916_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25916_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__12534__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__12534__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__12534__auto__;
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__15989__auto___25953 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___25953,channel){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___25953,channel){
return (function (state_25943){var state_val_25944 = (state_25943[(1)]);if((state_val_25944 === (2)))
{var inst_25937 = (state_25943[(2)]);var inst_25938 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_25939 = cljs_http.client.decode_body.call(null,inst_25937,cljs.reader.read_string,"application/edn",inst_25938);var inst_25940 = cljs.core.async.put_BANG_.call(null,channel,inst_25939);var inst_25941 = cljs.core.async.close_BANG_.call(null,channel);var state_25943__$1 = (function (){var statearr_25945 = state_25943;(statearr_25945[(7)] = inst_25940);
return statearr_25945;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25943__$1,inst_25941);
} else
{if((state_val_25944 === (1)))
{var inst_25935 = client.call(null,request);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25943__$1,(2),inst_25935);
} else
{return null;
}
}
});})(c__15989__auto___25953,channel))
;return ((function (switch__15974__auto__,c__15989__auto___25953,channel){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25949 = [null,null,null,null,null,null,null,null];(statearr_25949[(0)] = state_machine__15975__auto__);
(statearr_25949[(1)] = (1));
return statearr_25949;
});
var state_machine__15975__auto____1 = (function (state_25943){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25943);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25950){if((e25950 instanceof Object))
{var ex__15978__auto__ = e25950;var statearr_25951_25954 = state_25943;(statearr_25951_25954[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25955 = state_25943;
state_25943 = G__25955;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25943){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___25953,channel))
})();var state__15991__auto__ = (function (){var statearr_25952 = f__15990__auto__.call(null);(statearr_25952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___25953);
return statearr_25952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___25953,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__25956){var vec__25958 = p__25956;var accept = cljs.core.nth.call(null,vec__25958,(0),null);return ((function (vec__25958,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__12546__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__25958,accept))
};
var wrap_accept = function (client,var_args){
var p__25956 = null;if (arguments.length > 1) {
  p__25956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__25956);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__25959){
var client = cljs.core.first(arglist__25959);
var p__25956 = cljs.core.rest(arglist__25959);
return wrap_accept__delegate(client,p__25956);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__25960){var vec__25962 = p__25960;var content_type = cljs.core.nth.call(null,vec__25962,(0),null);return ((function (vec__25962,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__12546__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__25962,content_type))
};
var wrap_content_type = function (client,var_args){
var p__25960 = null;if (arguments.length > 1) {
  p__25960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__25960);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__25963){
var client = cljs.core.first(arglist__25963);
var p__25960 = cljs.core.rest(arglist__25963);
return wrap_content_type__delegate(client,p__25960);
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
{var params = temp__4124__auto__;var map__25965 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__25965__$1 = ((cljs.core.seq_QMARK_.call(null,map__25965))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);var encoding_opts = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__25987 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__25987__$1 = ((cljs.core.seq_QMARK_.call(null,map__25987))?cljs.core.apply.call(null,cljs.core.hash_map,map__25987):map__25987);var decoding_opts = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__15989__auto___26007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding){
return (function (state_25997){var state_val_25998 = (state_25997[(1)]);if((state_val_25998 === (2)))
{var inst_25990 = (state_25997[(2)]);var inst_25991 = (function (){var response = inst_25990;return ((function (response,inst_25990,state_val_25998,c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding){
return (function (p1__25966_SHARP_){return cljs_http.util.transit_decode.call(null,p1__25966_SHARP_,decoding,decoding_opts);
});
;})(response,inst_25990,state_val_25998,c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding))
})();var inst_25992 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_25993 = cljs_http.client.decode_body.call(null,inst_25990,inst_25991,"application/transit+json",inst_25992);var inst_25994 = cljs.core.async.put_BANG_.call(null,channel,inst_25993);var inst_25995 = cljs.core.async.close_BANG_.call(null,channel);var state_25997__$1 = (function (){var statearr_25999 = state_25997;(statearr_25999[(7)] = inst_25994);
return statearr_25999;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25997__$1,inst_25995);
} else
{if((state_val_25998 === (1)))
{var inst_25988 = client.call(null,request);var state_25997__$1 = state_25997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25997__$1,(2),inst_25988);
} else
{return null;
}
}
});})(c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding))
;return ((function (switch__15974__auto__,c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26003 = [null,null,null,null,null,null,null,null];(statearr_26003[(0)] = state_machine__15975__auto__);
(statearr_26003[(1)] = (1));
return statearr_26003;
});
var state_machine__15975__auto____1 = (function (state_25997){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25997);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26004){if((e26004 instanceof Object))
{var ex__15978__auto__ = e26004;var statearr_26005_26008 = state_25997;(statearr_26005_26008[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26009 = state_25997;
state_25997 = G__26009;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25997){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding))
})();var state__15991__auto__ = (function (){var statearr_26006 = f__15990__auto__.call(null);(statearr_26006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26007);
return statearr_26006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___26007,channel,map__25987,map__25987__$1,decoding_opts,decoding))
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__15989__auto___26046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___26046,channel){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___26046,channel){
return (function (state_26036){var state_val_26037 = (state_26036[(1)]);if((state_val_26037 === (2)))
{var inst_26030 = (state_26036[(2)]);var inst_26031 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_26032 = cljs_http.client.decode_body.call(null,inst_26030,cljs_http.util.json_decode,"application/json",inst_26031);var inst_26033 = cljs.core.async.put_BANG_.call(null,channel,inst_26032);var inst_26034 = cljs.core.async.close_BANG_.call(null,channel);var state_26036__$1 = (function (){var statearr_26038 = state_26036;(statearr_26038[(7)] = inst_26033);
return statearr_26038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26036__$1,inst_26034);
} else
{if((state_val_26037 === (1)))
{var inst_26028 = client.call(null,request);var state_26036__$1 = state_26036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26036__$1,(2),inst_26028);
} else
{return null;
}
}
});})(c__15989__auto___26046,channel))
;return ((function (switch__15974__auto__,c__15989__auto___26046,channel){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26042 = [null,null,null,null,null,null,null,null];(statearr_26042[(0)] = state_machine__15975__auto__);
(statearr_26042[(1)] = (1));
return statearr_26042;
});
var state_machine__15975__auto____1 = (function (state_26036){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26036);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26043){if((e26043 instanceof Object))
{var ex__15978__auto__ = e26043;var statearr_26044_26047 = state_26036;(statearr_26044_26047[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26043;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26048 = state_26036;
state_26036 = G__26048;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26036){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___26046,channel))
})();var state__15991__auto__ = (function (){var statearr_26045 = f__15990__auto__.call(null);(statearr_26045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26046);
return statearr_26045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___26046,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__26051){var map__26052 = p__26051;var map__26052__$1 = ((cljs.core.seq_QMARK_.call(null,map__26052))?cljs.core.apply.call(null,cljs.core.hash_map,map__26052):map__26052);var req = map__26052__$1;var query_params = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__26055){var map__26056 = p__26055;var map__26056__$1 = ((cljs.core.seq_QMARK_.call(null,map__26056))?cljs.core.apply.call(null,cljs.core.hash_map,map__26056):map__26056);var request = map__26056__$1;var request_method = cljs.core.get.call(null,map__26056__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__26056__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__12534__auto__ = form_params;if(cljs.core.truth_(and__12534__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__12534__auto__;
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__26057_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__26057_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__26061){var map__26062 = p__26061;var map__26062__$1 = ((cljs.core.seq_QMARK_.call(null,map__26062))?cljs.core.apply.call(null,cljs.core.hash_map,map__26062):map__26062);var req = map__26062__$1;var query_params = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__26062,map__26062__$1,req,query_params){
return (function (p1__26058_SHARP_){return cljs.core.merge.call(null,p1__26058_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__26062,map__26062__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__26063){var vec__26065 = p__26063;var credentials = cljs.core.nth.call(null,vec__26065,(0),null);return ((function (vec__26065,credentials){
return (function (req){var credentials__$1 = (function (){var or__12546__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__26065,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26063 = null;if (arguments.length > 1) {
  p__26063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__26063);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26066){
var client = cljs.core.first(arglist__26066);
var p__26063 = cljs.core.rest(arglist__26066);
return wrap_basic_auth__delegate(client,p__26063);
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
var delete$__delegate = function (url,p__26067){var vec__26069 = p__26067;var req = cljs.core.nth.call(null,vec__26069,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__26067 = null;if (arguments.length > 1) {
  p__26067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__26067);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26070){
var url = cljs.core.first(arglist__26070);
var p__26067 = cljs.core.rest(arglist__26070);
return delete$__delegate(url,p__26067);
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
var get__delegate = function (url,p__26071){var vec__26073 = p__26071;var req = cljs.core.nth.call(null,vec__26073,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__26071 = null;if (arguments.length > 1) {
  p__26071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__26071);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26074){
var url = cljs.core.first(arglist__26074);
var p__26071 = cljs.core.rest(arglist__26074);
return get__delegate(url,p__26071);
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
var head__delegate = function (url,p__26075){var vec__26077 = p__26075;var req = cljs.core.nth.call(null,vec__26077,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__26075 = null;if (arguments.length > 1) {
  p__26075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__26075);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26078){
var url = cljs.core.first(arglist__26078);
var p__26075 = cljs.core.rest(arglist__26078);
return head__delegate(url,p__26075);
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
var move__delegate = function (url,p__26079){var vec__26081 = p__26079;var req = cljs.core.nth.call(null,vec__26081,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__26079 = null;if (arguments.length > 1) {
  p__26079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__26079);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26082){
var url = cljs.core.first(arglist__26082);
var p__26079 = cljs.core.rest(arglist__26082);
return move__delegate(url,p__26079);
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
var options__delegate = function (url,p__26083){var vec__26085 = p__26083;var req = cljs.core.nth.call(null,vec__26085,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__26083 = null;if (arguments.length > 1) {
  p__26083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__26083);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26086){
var url = cljs.core.first(arglist__26086);
var p__26083 = cljs.core.rest(arglist__26086);
return options__delegate(url,p__26083);
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
var patch__delegate = function (url,p__26087){var vec__26089 = p__26087;var req = cljs.core.nth.call(null,vec__26089,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__26087 = null;if (arguments.length > 1) {
  p__26087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__26087);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26090){
var url = cljs.core.first(arglist__26090);
var p__26087 = cljs.core.rest(arglist__26090);
return patch__delegate(url,p__26087);
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
var post__delegate = function (url,p__26091){var vec__26093 = p__26091;var req = cljs.core.nth.call(null,vec__26093,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__26091 = null;if (arguments.length > 1) {
  p__26091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__26091);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26094){
var url = cljs.core.first(arglist__26094);
var p__26091 = cljs.core.rest(arglist__26094);
return post__delegate(url,p__26091);
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
var put__delegate = function (url,p__26095){var vec__26097 = p__26095;var req = cljs.core.nth.call(null,vec__26097,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__26095 = null;if (arguments.length > 1) {
  p__26095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__26095);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26098){
var url = cljs.core.first(arglist__26098);
var p__26095 = cljs.core.rest(arglist__26098);
return put__delegate(url,p__26095);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map