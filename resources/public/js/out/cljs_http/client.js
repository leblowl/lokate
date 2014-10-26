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
{return cljs.core.reduce.call(null,(function (p1__32606_SHARP_,p2__32605_SHARP_){var vec__32608 = clojure.string.split.call(null,p2__32605_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__32608,(0),null);var v = cljs.core.nth.call(null,vec__32608,(1),null);return cljs.core.assoc.call(null,p1__32606_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__32609_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__32609_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__32610){var vec__32612 = p__32610;var k = cljs.core.nth.call(null,vec__32612,(0),null);var v = cljs.core.nth.call(null,vec__32612,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__32613_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32613_SHARP_));
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__15989__auto___32650 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___32650,channel){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___32650,channel){
return (function (state_32640){var state_val_32641 = (state_32640[(1)]);if((state_val_32641 === (2)))
{var inst_32634 = (state_32640[(2)]);var inst_32635 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_32636 = cljs_http.client.decode_body.call(null,inst_32634,cljs.reader.read_string,"application/edn",inst_32635);var inst_32637 = cljs.core.async.put_BANG_.call(null,channel,inst_32636);var inst_32638 = cljs.core.async.close_BANG_.call(null,channel);var state_32640__$1 = (function (){var statearr_32642 = state_32640;(statearr_32642[(7)] = inst_32637);
return statearr_32642;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32640__$1,inst_32638);
} else
{if((state_val_32641 === (1)))
{var inst_32632 = client.call(null,request);var state_32640__$1 = state_32640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32640__$1,(2),inst_32632);
} else
{return null;
}
}
});})(c__15989__auto___32650,channel))
;return ((function (switch__15974__auto__,c__15989__auto___32650,channel){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_32646 = [null,null,null,null,null,null,null,null];(statearr_32646[(0)] = state_machine__15975__auto__);
(statearr_32646[(1)] = (1));
return statearr_32646;
});
var state_machine__15975__auto____1 = (function (state_32640){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_32640);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e32647){if((e32647 instanceof Object))
{var ex__15978__auto__ = e32647;var statearr_32648_32651 = state_32640;(statearr_32648_32651[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32652 = state_32640;
state_32640 = G__32652;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_32640){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_32640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___32650,channel))
})();var state__15991__auto__ = (function (){var statearr_32649 = f__15990__auto__.call(null);(statearr_32649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___32650);
return statearr_32649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___32650,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__32653){var vec__32655 = p__32653;var accept = cljs.core.nth.call(null,vec__32655,(0),null);return ((function (vec__32655,accept){
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
;})(vec__32655,accept))
};
var wrap_accept = function (client,var_args){
var p__32653 = null;if (arguments.length > 1) {
  p__32653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__32653);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__32656){
var client = cljs.core.first(arglist__32656);
var p__32653 = cljs.core.rest(arglist__32656);
return wrap_accept__delegate(client,p__32653);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__32657){var vec__32659 = p__32657;var content_type = cljs.core.nth.call(null,vec__32659,(0),null);return ((function (vec__32659,content_type){
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
;})(vec__32659,content_type))
};
var wrap_content_type = function (client,var_args){
var p__32657 = null;if (arguments.length > 1) {
  p__32657 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__32657);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__32660){
var client = cljs.core.first(arglist__32660);
var p__32657 = cljs.core.rest(arglist__32660);
return wrap_content_type__delegate(client,p__32657);
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
{var params = temp__4124__auto__;var map__32662 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__32662__$1 = ((cljs.core.seq_QMARK_.call(null,map__32662))?cljs.core.apply.call(null,cljs.core.hash_map,map__32662):map__32662);var encoding_opts = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__32684 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__32684__$1 = ((cljs.core.seq_QMARK_.call(null,map__32684))?cljs.core.apply.call(null,cljs.core.hash_map,map__32684):map__32684);var decoding_opts = cljs.core.get.call(null,map__32684__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__32684__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__15989__auto___32704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding){
return (function (state_32694){var state_val_32695 = (state_32694[(1)]);if((state_val_32695 === (2)))
{var inst_32687 = (state_32694[(2)]);var inst_32688 = (function (){var response = inst_32687;return ((function (response,inst_32687,state_val_32695,c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding){
return (function (p1__32663_SHARP_){return cljs_http.util.transit_decode.call(null,p1__32663_SHARP_,decoding,decoding_opts);
});
;})(response,inst_32687,state_val_32695,c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding))
})();var inst_32689 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_32690 = cljs_http.client.decode_body.call(null,inst_32687,inst_32688,"application/transit+json",inst_32689);var inst_32691 = cljs.core.async.put_BANG_.call(null,channel,inst_32690);var inst_32692 = cljs.core.async.close_BANG_.call(null,channel);var state_32694__$1 = (function (){var statearr_32696 = state_32694;(statearr_32696[(7)] = inst_32691);
return statearr_32696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32694__$1,inst_32692);
} else
{if((state_val_32695 === (1)))
{var inst_32685 = client.call(null,request);var state_32694__$1 = state_32694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32694__$1,(2),inst_32685);
} else
{return null;
}
}
});})(c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding))
;return ((function (switch__15974__auto__,c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_32700 = [null,null,null,null,null,null,null,null];(statearr_32700[(0)] = state_machine__15975__auto__);
(statearr_32700[(1)] = (1));
return statearr_32700;
});
var state_machine__15975__auto____1 = (function (state_32694){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_32694);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e32701){if((e32701 instanceof Object))
{var ex__15978__auto__ = e32701;var statearr_32702_32705 = state_32694;(statearr_32702_32705[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32706 = state_32694;
state_32694 = G__32706;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding))
})();var state__15991__auto__ = (function (){var statearr_32703 = f__15990__auto__.call(null);(statearr_32703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___32704);
return statearr_32703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___32704,channel,map__32684,map__32684__$1,decoding_opts,decoding))
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__15989__auto___32743 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___32743,channel){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___32743,channel){
return (function (state_32733){var state_val_32734 = (state_32733[(1)]);if((state_val_32734 === (2)))
{var inst_32727 = (state_32733[(2)]);var inst_32728 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_32729 = cljs_http.client.decode_body.call(null,inst_32727,cljs_http.util.json_decode,"application/json",inst_32728);var inst_32730 = cljs.core.async.put_BANG_.call(null,channel,inst_32729);var inst_32731 = cljs.core.async.close_BANG_.call(null,channel);var state_32733__$1 = (function (){var statearr_32735 = state_32733;(statearr_32735[(7)] = inst_32730);
return statearr_32735;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32733__$1,inst_32731);
} else
{if((state_val_32734 === (1)))
{var inst_32725 = client.call(null,request);var state_32733__$1 = state_32733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32733__$1,(2),inst_32725);
} else
{return null;
}
}
});})(c__15989__auto___32743,channel))
;return ((function (switch__15974__auto__,c__15989__auto___32743,channel){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_32739 = [null,null,null,null,null,null,null,null];(statearr_32739[(0)] = state_machine__15975__auto__);
(statearr_32739[(1)] = (1));
return statearr_32739;
});
var state_machine__15975__auto____1 = (function (state_32733){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_32733);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e32740){if((e32740 instanceof Object))
{var ex__15978__auto__ = e32740;var statearr_32741_32744 = state_32733;(statearr_32741_32744[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32740;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32745 = state_32733;
state_32733 = G__32745;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___32743,channel))
})();var state__15991__auto__ = (function (){var statearr_32742 = f__15990__auto__.call(null);(statearr_32742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___32743);
return statearr_32742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___32743,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__32748){var map__32749 = p__32748;var map__32749__$1 = ((cljs.core.seq_QMARK_.call(null,map__32749))?cljs.core.apply.call(null,cljs.core.hash_map,map__32749):map__32749);var req = map__32749__$1;var query_params = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__32752){var map__32753 = p__32752;var map__32753__$1 = ((cljs.core.seq_QMARK_.call(null,map__32753))?cljs.core.apply.call(null,cljs.core.hash_map,map__32753):map__32753);var request = map__32753__$1;var request_method = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__12534__auto__ = form_params;if(cljs.core.truth_(and__12534__auto__))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__32754_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__32754_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__32758){var map__32759 = p__32758;var map__32759__$1 = ((cljs.core.seq_QMARK_.call(null,map__32759))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);var req = map__32759__$1;var query_params = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__32759,map__32759__$1,req,query_params){
return (function (p1__32755_SHARP_){return cljs.core.merge.call(null,p1__32755_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__32759,map__32759__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__32760){var vec__32762 = p__32760;var credentials = cljs.core.nth.call(null,vec__32762,(0),null);return ((function (vec__32762,credentials){
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
;})(vec__32762,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__32760 = null;if (arguments.length > 1) {
  p__32760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__32760);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__32763){
var client = cljs.core.first(arglist__32763);
var p__32760 = cljs.core.rest(arglist__32763);
return wrap_basic_auth__delegate(client,p__32760);
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
var delete$__delegate = function (url,p__32764){var vec__32766 = p__32764;var req = cljs.core.nth.call(null,vec__32766,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__32764 = null;if (arguments.length > 1) {
  p__32764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__32764);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__32767){
var url = cljs.core.first(arglist__32767);
var p__32764 = cljs.core.rest(arglist__32767);
return delete$__delegate(url,p__32764);
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
var get__delegate = function (url,p__32768){var vec__32770 = p__32768;var req = cljs.core.nth.call(null,vec__32770,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__32768 = null;if (arguments.length > 1) {
  p__32768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__32768);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__32771){
var url = cljs.core.first(arglist__32771);
var p__32768 = cljs.core.rest(arglist__32771);
return get__delegate(url,p__32768);
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
var head__delegate = function (url,p__32772){var vec__32774 = p__32772;var req = cljs.core.nth.call(null,vec__32774,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__32772 = null;if (arguments.length > 1) {
  p__32772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__32772);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__32775){
var url = cljs.core.first(arglist__32775);
var p__32772 = cljs.core.rest(arglist__32775);
return head__delegate(url,p__32772);
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
var move__delegate = function (url,p__32776){var vec__32778 = p__32776;var req = cljs.core.nth.call(null,vec__32778,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__32776 = null;if (arguments.length > 1) {
  p__32776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__32776);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__32779){
var url = cljs.core.first(arglist__32779);
var p__32776 = cljs.core.rest(arglist__32779);
return move__delegate(url,p__32776);
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
var options__delegate = function (url,p__32780){var vec__32782 = p__32780;var req = cljs.core.nth.call(null,vec__32782,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__32780 = null;if (arguments.length > 1) {
  p__32780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__32780);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__32783){
var url = cljs.core.first(arglist__32783);
var p__32780 = cljs.core.rest(arglist__32783);
return options__delegate(url,p__32780);
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
var patch__delegate = function (url,p__32784){var vec__32786 = p__32784;var req = cljs.core.nth.call(null,vec__32786,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__32784 = null;if (arguments.length > 1) {
  p__32784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__32784);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__32787){
var url = cljs.core.first(arglist__32787);
var p__32784 = cljs.core.rest(arglist__32787);
return patch__delegate(url,p__32784);
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
var post__delegate = function (url,p__32788){var vec__32790 = p__32788;var req = cljs.core.nth.call(null,vec__32790,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__32788 = null;if (arguments.length > 1) {
  p__32788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__32788);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__32791){
var url = cljs.core.first(arglist__32791);
var p__32788 = cljs.core.rest(arglist__32791);
return post__delegate(url,p__32788);
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
var put__delegate = function (url,p__32792){var vec__32794 = p__32792;var req = cljs.core.nth.call(null,vec__32794,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__32792 = null;if (arguments.length > 1) {
  p__32792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__32792);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__32795){
var url = cljs.core.first(arglist__32795);
var p__32792 = cljs.core.rest(arglist__32795);
return put__delegate(url,p__32792);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map