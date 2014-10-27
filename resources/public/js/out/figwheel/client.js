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
var log__delegate = function (p__25136,args){var map__25138 = p__25136;var map__25138__$1 = ((cljs.core.seq_QMARK_.call(null,map__25138))?cljs.core.apply.call(null,cljs.core.hash_map,map__25138):map__25138);var debug = cljs.core.get.call(null,map__25138__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__25136,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__25136,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25139){
var p__25136 = cljs.core.first(arglist__25139);
var args = cljs.core.rest(arglist__25139);
return log__delegate(p__25136,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25140){var map__25142 = p__25140;var map__25142__$1 = ((cljs.core.seq_QMARK_.call(null,map__25142))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);var websocket_url = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__25143,callback){var map__25145 = p__25143;var map__25145__$1 = ((cljs.core.seq_QMARK_.call(null,map__25145))?cljs.core.apply.call(null,cljs.core.hash_map,map__25145):map__25145);var msg = map__25145__$1;var dependency_file = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25145,map__25145__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25145,map__25145__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__25146,p__25147){var map__25150 = p__25146;var map__25150__$1 = ((cljs.core.seq_QMARK_.call(null,map__25150))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);var opts = map__25150__$1;var url_rewriter = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__25151 = p__25147;var map__25151__$1 = ((cljs.core.seq_QMARK_.call(null,map__25151))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);var d = map__25151__$1;var file = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25152,p__25153){var map__25195 = p__25152;var map__25195__$1 = ((cljs.core.seq_QMARK_.call(null,map__25195))?cljs.core.apply.call(null,cljs.core.hash_map,map__25195):map__25195);var opts = map__25195__$1;var on_jsload = cljs.core.get.call(null,map__25195__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__25195__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__25196 = p__25153;var map__25196__$1 = ((cljs.core.seq_QMARK_.call(null,map__25196))?cljs.core.apply.call(null,cljs.core.hash_map,map__25196):map__25196);var files = cljs.core.get.call(null,map__25196__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files){
return (function (state_25219){var state_val_25220 = (state_25219[(1)]);if((state_val_25220 === (6)))
{var inst_25201 = (state_25219[(7)]);var inst_25210 = (state_25219[(2)]);var inst_25211 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25212 = [inst_25201];var inst_25213 = (new cljs.core.PersistentVector(null,1,(5),inst_25211,inst_25212,null));var inst_25214 = cljs.core.apply.call(null,on_jsload,inst_25213);var state_25219__$1 = (function (){var statearr_25221 = state_25219;(statearr_25221[(8)] = inst_25210);
return statearr_25221;
})();var statearr_25222_25236 = state_25219__$1;(statearr_25222_25236[(2)] = inst_25214);
(statearr_25222_25236[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (5)))
{var inst_25217 = (state_25219[(2)]);var state_25219__$1 = state_25219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25219__$1,inst_25217);
} else
{if((state_val_25220 === (4)))
{var state_25219__$1 = state_25219;var statearr_25223_25237 = state_25219__$1;(statearr_25223_25237[(2)] = null);
(statearr_25223_25237[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (3)))
{var inst_25201 = (state_25219[(7)]);var inst_25204 = console.debug("Figwheel: loaded these files");var inst_25205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25201);var inst_25206 = cljs.core.prn_str.call(null,inst_25205);var inst_25207 = console.log(inst_25206);var inst_25208 = cljs.core.async.timeout.call(null,(10));var state_25219__$1 = (function (){var statearr_25224 = state_25219;(statearr_25224[(9)] = inst_25207);
(statearr_25224[(10)] = inst_25204);
return statearr_25224;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(6),inst_25208);
} else
{if((state_val_25220 === (2)))
{var inst_25201 = (state_25219[(7)]);var inst_25201__$1 = (state_25219[(2)]);var inst_25202 = cljs.core.not_empty.call(null,inst_25201__$1);var state_25219__$1 = (function (){var statearr_25225 = state_25219;(statearr_25225[(7)] = inst_25201__$1);
return statearr_25225;
})();if(cljs.core.truth_(inst_25202))
{var statearr_25226_25238 = state_25219__$1;(statearr_25226_25238[(1)] = (3));
} else
{var statearr_25227_25239 = state_25219__$1;(statearr_25227_25239[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25220 === (1)))
{var inst_25197 = before_jsload.call(null,files);var inst_25198 = figwheel.client.add_request_urls.call(null,opts,files);var inst_25199 = figwheel.client.load_all_js_files.call(null,inst_25198);var state_25219__$1 = (function (){var statearr_25228 = state_25219;(statearr_25228[(11)] = inst_25197);
return statearr_25228;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(2),inst_25199);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25232 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25232[(0)] = state_machine__15975__auto__);
(statearr_25232[(1)] = (1));
return statearr_25232;
});
var state_machine__15975__auto____1 = (function (state_25219){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25219);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25233){if((e25233 instanceof Object))
{var ex__15978__auto__ = e25233;var statearr_25234_25240 = state_25219;(statearr_25234_25240[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25233;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25241 = state_25219;
state_25219 = G__25241;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files))
})();var state__15991__auto__ = (function (){var statearr_25235 = f__15990__auto__.call(null);(statearr_25235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__25195,map__25195__$1,opts,on_jsload,before_jsload,map__25196,map__25196__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25242,link_href){var map__25244 = p__25242;var map__25244__$1 = ((cljs.core.seq_QMARK_.call(null,map__25244))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);var request_url = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,parent){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,parent){
return (function (state_25265){var state_val_25266 = (state_25265[(1)]);if((state_val_25266 === (2)))
{var inst_25262 = (state_25265[(2)]);var inst_25263 = parent.removeChild(orig_link);var state_25265__$1 = (function (){var statearr_25267 = state_25265;(statearr_25267[(7)] = inst_25262);
return statearr_25267;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25265__$1,inst_25263);
} else
{if((state_val_25266 === (1)))
{var inst_25260 = cljs.core.async.timeout.call(null,(200));var state_25265__$1 = state_25265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(2),inst_25260);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25271 = [null,null,null,null,null,null,null,null];(statearr_25271[(0)] = state_machine__15975__auto__);
(statearr_25271[(1)] = (1));
return statearr_25271;
});
var state_machine__15975__auto____1 = (function (state_25265){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25265);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25272){if((e25272 instanceof Object))
{var ex__15978__auto__ = e25272;var statearr_25273_25275 = state_25265;(statearr_25273_25275[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25276 = state_25265;
state_25265 = G__25276;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25265){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_25274 = f__15990__auto__.call(null);(statearr_25274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,parent))
);
return c__15989__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__25277){var map__25279 = p__25277;var map__25279__$1 = ((cljs.core.seq_QMARK_.call(null,map__25279))?cljs.core.apply.call(null,cljs.core.hash_map,map__25279):map__25279);var f_data = map__25279__$1;var request_url = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25280,files_msg){var map__25302 = p__25280;var map__25302__$1 = ((cljs.core.seq_QMARK_.call(null,map__25302))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);var opts = map__25302__$1;var on_cssload = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25303_25323 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25304_25324 = null;var count__25305_25325 = (0);var i__25306_25326 = (0);while(true){
if((i__25306_25326 < count__25305_25325))
{var f_25327 = cljs.core._nth.call(null,chunk__25304_25324,i__25306_25326);figwheel.client.reload_css_file.call(null,f_25327);
{
var G__25328 = seq__25303_25323;
var G__25329 = chunk__25304_25324;
var G__25330 = count__25305_25325;
var G__25331 = (i__25306_25326 + (1));
seq__25303_25323 = G__25328;
chunk__25304_25324 = G__25329;
count__25305_25325 = G__25330;
i__25306_25326 = G__25331;
continue;
}
} else
{var temp__4126__auto___25332 = cljs.core.seq.call(null,seq__25303_25323);if(temp__4126__auto___25332)
{var seq__25303_25333__$1 = temp__4126__auto___25332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25303_25333__$1))
{var c__13316__auto___25334 = cljs.core.chunk_first.call(null,seq__25303_25333__$1);{
var G__25335 = cljs.core.chunk_rest.call(null,seq__25303_25333__$1);
var G__25336 = c__13316__auto___25334;
var G__25337 = cljs.core.count.call(null,c__13316__auto___25334);
var G__25338 = (0);
seq__25303_25323 = G__25335;
chunk__25304_25324 = G__25336;
count__25305_25325 = G__25337;
i__25306_25326 = G__25338;
continue;
}
} else
{var f_25339 = cljs.core.first.call(null,seq__25303_25333__$1);figwheel.client.reload_css_file.call(null,f_25339);
{
var G__25340 = cljs.core.next.call(null,seq__25303_25333__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__25303_25323 = G__25340;
chunk__25304_25324 = G__25341;
count__25305_25325 = G__25342;
i__25306_25326 = G__25343;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload){
return (function (state_25313){var state_val_25314 = (state_25313[(1)]);if((state_val_25314 === (2)))
{var inst_25309 = (state_25313[(2)]);var inst_25310 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25311 = on_cssload.call(null,inst_25310);var state_25313__$1 = (function (){var statearr_25315 = state_25313;(statearr_25315[(7)] = inst_25309);
return statearr_25315;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25313__$1,inst_25311);
} else
{if((state_val_25314 === (1)))
{var inst_25307 = cljs.core.async.timeout.call(null,(100));var state_25313__$1 = state_25313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25313__$1,(2),inst_25307);
} else
{return null;
}
}
});})(c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25319 = [null,null,null,null,null,null,null,null];(statearr_25319[(0)] = state_machine__15975__auto__);
(statearr_25319[(1)] = (1));
return statearr_25319;
});
var state_machine__15975__auto____1 = (function (state_25313){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25313);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25320){if((e25320 instanceof Object))
{var ex__15978__auto__ = e25320;var statearr_25321_25344 = state_25313;(statearr_25321_25344[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25345 = state_25313;
state_25313 = G__25345;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25313){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_25322 = f__15990__auto__.call(null);(statearr_25322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__25302,map__25302__$1,opts,on_cssload))
);
return c__15989__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25346){var map__25351 = p__25346;var map__25351__$1 = ((cljs.core.seq_QMARK_.call(null,map__25351))?cljs.core.apply.call(null,cljs.core.hash_map,map__25351):map__25351);var opts = map__25351__$1;var on_compile_fail = cljs.core.get.call(null,map__25351__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25351__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25351__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25351__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25352 = cljs.core._EQ_;var expr__25353 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25352.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25353)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25352.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25353)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25352.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25353)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25351,map__25351__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25358 = {"detail":url};return obj25358;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25359){var map__25361 = p__25359;var map__25361__$1 = ((cljs.core.seq_QMARK_.call(null,map__25361))?cljs.core.apply.call(null,cljs.core.hash_map,map__25361):map__25361);var class$ = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25361__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25362){var map__25368 = p__25362;var map__25368__$1 = ((cljs.core.seq_QMARK_.call(null,map__25368))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);var ed = map__25368__$1;var exception_data = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25369_25373 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25370_25374 = null;var count__25371_25375 = (0);var i__25372_25376 = (0);while(true){
if((i__25372_25376 < count__25371_25375))
{var msg_25377 = cljs.core._nth.call(null,chunk__25370_25374,i__25372_25376);console.log(msg_25377);
{
var G__25378 = seq__25369_25373;
var G__25379 = chunk__25370_25374;
var G__25380 = count__25371_25375;
var G__25381 = (i__25372_25376 + (1));
seq__25369_25373 = G__25378;
chunk__25370_25374 = G__25379;
count__25371_25375 = G__25380;
i__25372_25376 = G__25381;
continue;
}
} else
{var temp__4126__auto___25382 = cljs.core.seq.call(null,seq__25369_25373);if(temp__4126__auto___25382)
{var seq__25369_25383__$1 = temp__4126__auto___25382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25369_25383__$1))
{var c__13316__auto___25384 = cljs.core.chunk_first.call(null,seq__25369_25383__$1);{
var G__25385 = cljs.core.chunk_rest.call(null,seq__25369_25383__$1);
var G__25386 = c__13316__auto___25384;
var G__25387 = cljs.core.count.call(null,c__13316__auto___25384);
var G__25388 = (0);
seq__25369_25373 = G__25385;
chunk__25370_25374 = G__25386;
count__25371_25375 = G__25387;
i__25372_25376 = G__25388;
continue;
}
} else
{var msg_25389 = cljs.core.first.call(null,seq__25369_25383__$1);console.log(msg_25389);
{
var G__25390 = cljs.core.next.call(null,seq__25369_25383__$1);
var G__25391 = null;
var G__25392 = (0);
var G__25393 = (0);
seq__25369_25373 = G__25390;
chunk__25370_25374 = G__25391;
count__25371_25375 = G__25392;
i__25372_25376 = G__25393;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__12546__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
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
var watch_and_reload__delegate = function (p__25394){var map__25396 = p__25394;var map__25396__$1 = ((cljs.core.seq_QMARK_.call(null,map__25396))?cljs.core.apply.call(null,cljs.core.hash_map,map__25396):map__25396);var opts = map__25396__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25394 = null;if (arguments.length > 0) {
  p__25394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25394);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25397){
var p__25394 = cljs.core.seq(arglist__25397);
return watch_and_reload__delegate(p__25394);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map