// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__25140,args){var map__25142 = p__25140;var map__25142__$1 = ((cljs.core.seq_QMARK_.call(null,map__25142))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);var debug = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__25140,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__25140,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25143){
var p__25140 = cljs.core.first(arglist__25143);
var args = cljs.core.rest(arglist__25143);
return log__delegate(p__25140,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25144){var map__25146 = p__25144;var map__25146__$1 = ((cljs.core.seq_QMARK_.call(null,map__25146))?cljs.core.apply.call(null,cljs.core.hash_map,map__25146):map__25146);var websocket_url = cljs.core.get.call(null,map__25146__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__25147,callback){var map__25149 = p__25147;var map__25149__$1 = ((cljs.core.seq_QMARK_.call(null,map__25149))?cljs.core.apply.call(null,cljs.core.hash_map,map__25149):map__25149);var msg = map__25149__$1;var dependency_file = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12548__auto__ = dependency_file;if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25149,map__25149__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25149,map__25149__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__25150,p__25151){var map__25154 = p__25150;var map__25154__$1 = ((cljs.core.seq_QMARK_.call(null,map__25154))?cljs.core.apply.call(null,cljs.core.hash_map,map__25154):map__25154);var opts = map__25154__$1;var url_rewriter = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__25155 = p__25151;var map__25155__$1 = ((cljs.core.seq_QMARK_.call(null,map__25155))?cljs.core.apply.call(null,cljs.core.hash_map,map__25155):map__25155);var d = map__25155__$1;var file = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25156,p__25157){var map__25199 = p__25156;var map__25199__$1 = ((cljs.core.seq_QMARK_.call(null,map__25199))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);var opts = map__25199__$1;var on_jsload = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__25200 = p__25157;var map__25200__$1 = ((cljs.core.seq_QMARK_.call(null,map__25200))?cljs.core.apply.call(null,cljs.core.hash_map,map__25200):map__25200);var files = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files){
return (function (state_25223){var state_val_25224 = (state_25223[(1)]);if((state_val_25224 === (6)))
{var inst_25205 = (state_25223[(7)]);var inst_25214 = (state_25223[(2)]);var inst_25215 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25216 = [inst_25205];var inst_25217 = (new cljs.core.PersistentVector(null,1,(5),inst_25215,inst_25216,null));var inst_25218 = cljs.core.apply.call(null,on_jsload,inst_25217);var state_25223__$1 = (function (){var statearr_25225 = state_25223;(statearr_25225[(8)] = inst_25214);
return statearr_25225;
})();var statearr_25226_25240 = state_25223__$1;(statearr_25226_25240[(2)] = inst_25218);
(statearr_25226_25240[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25224 === (5)))
{var inst_25221 = (state_25223[(2)]);var state_25223__$1 = state_25223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25223__$1,inst_25221);
} else
{if((state_val_25224 === (4)))
{var state_25223__$1 = state_25223;var statearr_25227_25241 = state_25223__$1;(statearr_25227_25241[(2)] = null);
(statearr_25227_25241[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25224 === (3)))
{var inst_25205 = (state_25223[(7)]);var inst_25208 = console.debug("Figwheel: loaded these files");var inst_25209 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25205);var inst_25210 = cljs.core.prn_str.call(null,inst_25209);var inst_25211 = console.log(inst_25210);var inst_25212 = cljs.core.async.timeout.call(null,(10));var state_25223__$1 = (function (){var statearr_25228 = state_25223;(statearr_25228[(9)] = inst_25211);
(statearr_25228[(10)] = inst_25208);
return statearr_25228;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(6),inst_25212);
} else
{if((state_val_25224 === (2)))
{var inst_25205 = (state_25223[(7)]);var inst_25205__$1 = (state_25223[(2)]);var inst_25206 = cljs.core.not_empty.call(null,inst_25205__$1);var state_25223__$1 = (function (){var statearr_25229 = state_25223;(statearr_25229[(7)] = inst_25205__$1);
return statearr_25229;
})();if(cljs.core.truth_(inst_25206))
{var statearr_25230_25242 = state_25223__$1;(statearr_25230_25242[(1)] = (3));
} else
{var statearr_25231_25243 = state_25223__$1;(statearr_25231_25243[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25224 === (1)))
{var inst_25201 = before_jsload.call(null,files);var inst_25202 = figwheel.client.add_request_urls.call(null,opts,files);var inst_25203 = figwheel.client.load_all_js_files.call(null,inst_25202);var state_25223__$1 = (function (){var statearr_25232 = state_25223;(statearr_25232[(11)] = inst_25201);
return statearr_25232;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(2),inst_25203);
} else
{return null;
}
}
}
}
}
}
});})(c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files))
;return ((function (switch__15977__auto__,c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_25236 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25236[(0)] = state_machine__15978__auto__);
(statearr_25236[(1)] = (1));
return statearr_25236;
});
var state_machine__15978__auto____1 = (function (state_25223){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_25223);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e25237){if((e25237 instanceof Object))
{var ex__15981__auto__ = e25237;var statearr_25238_25244 = state_25223;(statearr_25238_25244[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25237;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25245 = state_25223;
state_25223 = G__25245;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files))
})();var state__15994__auto__ = (function (){var statearr_25239 = f__15993__auto__.call(null);(statearr_25239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_25239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__,map__25199,map__25199__$1,opts,on_jsload,before_jsload,map__25200,map__25200__$1,files))
);
return c__15992__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25246,link_href){var map__25248 = p__25246;var map__25248__$1 = ((cljs.core.seq_QMARK_.call(null,map__25248))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);var request_url = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__,parent){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__,parent){
return (function (state_25269){var state_val_25270 = (state_25269[(1)]);if((state_val_25270 === (2)))
{var inst_25266 = (state_25269[(2)]);var inst_25267 = parent.removeChild(orig_link);var state_25269__$1 = (function (){var statearr_25271 = state_25269;(statearr_25271[(7)] = inst_25266);
return statearr_25271;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25269__$1,inst_25267);
} else
{if((state_val_25270 === (1)))
{var inst_25264 = cljs.core.async.timeout.call(null,(200));var state_25269__$1 = state_25269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25269__$1,(2),inst_25264);
} else
{return null;
}
}
});})(c__15992__auto__,parent))
;return ((function (switch__15977__auto__,c__15992__auto__,parent){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_25275 = [null,null,null,null,null,null,null,null];(statearr_25275[(0)] = state_machine__15978__auto__);
(statearr_25275[(1)] = (1));
return statearr_25275;
});
var state_machine__15978__auto____1 = (function (state_25269){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_25269);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e25276){if((e25276 instanceof Object))
{var ex__15981__auto__ = e25276;var statearr_25277_25279 = state_25269;(statearr_25277_25279[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25276;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25280 = state_25269;
state_25269 = G__25280;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__,parent))
})();var state__15994__auto__ = (function (){var statearr_25278 = f__15993__auto__.call(null);(statearr_25278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_25278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__,parent))
);
return c__15992__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__25281){var map__25283 = p__25281;var map__25283__$1 = ((cljs.core.seq_QMARK_.call(null,map__25283))?cljs.core.apply.call(null,cljs.core.hash_map,map__25283):map__25283);var f_data = map__25283__$1;var request_url = cljs.core.get.call(null,map__25283__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25284,files_msg){var map__25306 = p__25284;var map__25306__$1 = ((cljs.core.seq_QMARK_.call(null,map__25306))?cljs.core.apply.call(null,cljs.core.hash_map,map__25306):map__25306);var opts = map__25306__$1;var on_cssload = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25307_25327 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25308_25328 = null;var count__25309_25329 = (0);var i__25310_25330 = (0);while(true){
if((i__25310_25330 < count__25309_25329))
{var f_25331 = cljs.core._nth.call(null,chunk__25308_25328,i__25310_25330);figwheel.client.reload_css_file.call(null,f_25331);
{
var G__25332 = seq__25307_25327;
var G__25333 = chunk__25308_25328;
var G__25334 = count__25309_25329;
var G__25335 = (i__25310_25330 + (1));
seq__25307_25327 = G__25332;
chunk__25308_25328 = G__25333;
count__25309_25329 = G__25334;
i__25310_25330 = G__25335;
continue;
}
} else
{var temp__4126__auto___25336 = cljs.core.seq.call(null,seq__25307_25327);if(temp__4126__auto___25336)
{var seq__25307_25337__$1 = temp__4126__auto___25336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25307_25337__$1))
{var c__13318__auto___25338 = cljs.core.chunk_first.call(null,seq__25307_25337__$1);{
var G__25339 = cljs.core.chunk_rest.call(null,seq__25307_25337__$1);
var G__25340 = c__13318__auto___25338;
var G__25341 = cljs.core.count.call(null,c__13318__auto___25338);
var G__25342 = (0);
seq__25307_25327 = G__25339;
chunk__25308_25328 = G__25340;
count__25309_25329 = G__25341;
i__25310_25330 = G__25342;
continue;
}
} else
{var f_25343 = cljs.core.first.call(null,seq__25307_25337__$1);figwheel.client.reload_css_file.call(null,f_25343);
{
var G__25344 = cljs.core.next.call(null,seq__25307_25337__$1);
var G__25345 = null;
var G__25346 = (0);
var G__25347 = (0);
seq__25307_25327 = G__25344;
chunk__25308_25328 = G__25345;
count__25309_25329 = G__25346;
i__25310_25330 = G__25347;
continue;
}
}
} else
{}
}
break;
}
var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload){
return (function (state_25317){var state_val_25318 = (state_25317[(1)]);if((state_val_25318 === (2)))
{var inst_25313 = (state_25317[(2)]);var inst_25314 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25315 = on_cssload.call(null,inst_25314);var state_25317__$1 = (function (){var statearr_25319 = state_25317;(statearr_25319[(7)] = inst_25313);
return statearr_25319;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25317__$1,inst_25315);
} else
{if((state_val_25318 === (1)))
{var inst_25311 = cljs.core.async.timeout.call(null,(100));var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25317__$1,(2),inst_25311);
} else
{return null;
}
}
});})(c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload))
;return ((function (switch__15977__auto__,c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_25323 = [null,null,null,null,null,null,null,null];(statearr_25323[(0)] = state_machine__15978__auto__);
(statearr_25323[(1)] = (1));
return statearr_25323;
});
var state_machine__15978__auto____1 = (function (state_25317){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_25317);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e25324){if((e25324 instanceof Object))
{var ex__15981__auto__ = e25324;var statearr_25325_25348 = state_25317;(statearr_25325_25348[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25349 = state_25317;
state_25317 = G__25349;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload))
})();var state__15994__auto__ = (function (){var statearr_25326 = f__15993__auto__.call(null);(statearr_25326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_25326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__,map__25306,map__25306__$1,opts,on_cssload))
);
return c__15992__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25350){var map__25355 = p__25350;var map__25355__$1 = ((cljs.core.seq_QMARK_.call(null,map__25355))?cljs.core.apply.call(null,cljs.core.hash_map,map__25355):map__25355);var opts = map__25355__$1;var on_compile_fail = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25356 = cljs.core._EQ_;var expr__25357 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25356.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25357)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25356.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25357)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25356.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25357)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25355,map__25355__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25362 = {"detail":url};return obj25362;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25363){var map__25365 = p__25363;var map__25365__$1 = ((cljs.core.seq_QMARK_.call(null,map__25365))?cljs.core.apply.call(null,cljs.core.hash_map,map__25365):map__25365);var class$ = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25366){var map__25372 = p__25366;var map__25372__$1 = ((cljs.core.seq_QMARK_.call(null,map__25372))?cljs.core.apply.call(null,cljs.core.hash_map,map__25372):map__25372);var ed = map__25372__$1;var exception_data = cljs.core.get.call(null,map__25372__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25372__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25373_25377 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25374_25378 = null;var count__25375_25379 = (0);var i__25376_25380 = (0);while(true){
if((i__25376_25380 < count__25375_25379))
{var msg_25381 = cljs.core._nth.call(null,chunk__25374_25378,i__25376_25380);console.log(msg_25381);
{
var G__25382 = seq__25373_25377;
var G__25383 = chunk__25374_25378;
var G__25384 = count__25375_25379;
var G__25385 = (i__25376_25380 + (1));
seq__25373_25377 = G__25382;
chunk__25374_25378 = G__25383;
count__25375_25379 = G__25384;
i__25376_25380 = G__25385;
continue;
}
} else
{var temp__4126__auto___25386 = cljs.core.seq.call(null,seq__25373_25377);if(temp__4126__auto___25386)
{var seq__25373_25387__$1 = temp__4126__auto___25386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25373_25387__$1))
{var c__13318__auto___25388 = cljs.core.chunk_first.call(null,seq__25373_25387__$1);{
var G__25389 = cljs.core.chunk_rest.call(null,seq__25373_25387__$1);
var G__25390 = c__13318__auto___25388;
var G__25391 = cljs.core.count.call(null,c__13318__auto___25388);
var G__25392 = (0);
seq__25373_25377 = G__25389;
chunk__25374_25378 = G__25390;
count__25375_25379 = G__25391;
i__25376_25380 = G__25392;
continue;
}
} else
{var msg_25393 = cljs.core.first.call(null,seq__25373_25387__$1);console.log(msg_25393);
{
var G__25394 = cljs.core.next.call(null,seq__25373_25387__$1);
var G__25395 = null;
var G__25396 = (0);
var G__25397 = (0);
seq__25373_25377 = G__25394;
chunk__25374_25378 = G__25395;
count__25375_25379 = G__25396;
i__25376_25380 = G__25397;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__12548__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__25398){var map__25400 = p__25398;var map__25400__$1 = ((cljs.core.seq_QMARK_.call(null,map__25400))?cljs.core.apply.call(null,cljs.core.hash_map,map__25400):map__25400);var opts = map__25400__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25398 = null;if (arguments.length > 0) {
  p__25398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25398);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25401){
var p__25398 = cljs.core.seq(arglist__25401);
return watch_and_reload__delegate(p__25398);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map