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
var log__delegate = function (p__31150,args){var map__31152 = p__31150;var map__31152__$1 = ((cljs.core.seq_QMARK_.call(null,map__31152))?cljs.core.apply.call(null,cljs.core.hash_map,map__31152):map__31152);var debug = cljs.core.get.call(null,map__31152__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31150,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31150,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31153){
var p__31150 = cljs.core.first(arglist__31153);
var args = cljs.core.rest(arglist__31153);
return log__delegate(p__31150,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31154){var map__31156 = p__31154;var map__31156__$1 = ((cljs.core.seq_QMARK_.call(null,map__31156))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);var websocket_url = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31157,callback){var map__31159 = p__31157;var map__31159__$1 = ((cljs.core.seq_QMARK_.call(null,map__31159))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);var msg = map__31159__$1;var dependency_file = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31159,map__31159__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31159,map__31159__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31160,p__31161){var map__31164 = p__31160;var map__31164__$1 = ((cljs.core.seq_QMARK_.call(null,map__31164))?cljs.core.apply.call(null,cljs.core.hash_map,map__31164):map__31164);var opts = map__31164__$1;var url_rewriter = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31165 = p__31161;var map__31165__$1 = ((cljs.core.seq_QMARK_.call(null,map__31165))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);var d = map__31165__$1;var file = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31166,p__31167){var map__31209 = p__31166;var map__31209__$1 = ((cljs.core.seq_QMARK_.call(null,map__31209))?cljs.core.apply.call(null,cljs.core.hash_map,map__31209):map__31209);var opts = map__31209__$1;var on_jsload = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31210 = p__31167;var map__31210__$1 = ((cljs.core.seq_QMARK_.call(null,map__31210))?cljs.core.apply.call(null,cljs.core.hash_map,map__31210):map__31210);var files = cljs.core.get.call(null,map__31210__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files){
return (function (state_31233){var state_val_31234 = (state_31233[(1)]);if((state_val_31234 === (6)))
{var inst_31215 = (state_31233[(7)]);var inst_31224 = (state_31233[(2)]);var inst_31225 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31226 = [inst_31215];var inst_31227 = (new cljs.core.PersistentVector(null,1,(5),inst_31225,inst_31226,null));var inst_31228 = cljs.core.apply.call(null,on_jsload,inst_31227);var state_31233__$1 = (function (){var statearr_31235 = state_31233;(statearr_31235[(8)] = inst_31224);
return statearr_31235;
})();var statearr_31236_31250 = state_31233__$1;(statearr_31236_31250[(2)] = inst_31228);
(statearr_31236_31250[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31234 === (5)))
{var inst_31231 = (state_31233[(2)]);var state_31233__$1 = state_31233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31233__$1,inst_31231);
} else
{if((state_val_31234 === (4)))
{var state_31233__$1 = state_31233;var statearr_31237_31251 = state_31233__$1;(statearr_31237_31251[(2)] = null);
(statearr_31237_31251[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31234 === (3)))
{var inst_31215 = (state_31233[(7)]);var inst_31218 = console.debug("Figwheel: loaded these files");var inst_31219 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31215);var inst_31220 = cljs.core.prn_str.call(null,inst_31219);var inst_31221 = console.log(inst_31220);var inst_31222 = cljs.core.async.timeout.call(null,(10));var state_31233__$1 = (function (){var statearr_31238 = state_31233;(statearr_31238[(9)] = inst_31218);
(statearr_31238[(10)] = inst_31221);
return statearr_31238;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31233__$1,(6),inst_31222);
} else
{if((state_val_31234 === (2)))
{var inst_31215 = (state_31233[(7)]);var inst_31215__$1 = (state_31233[(2)]);var inst_31216 = cljs.core.not_empty.call(null,inst_31215__$1);var state_31233__$1 = (function (){var statearr_31239 = state_31233;(statearr_31239[(7)] = inst_31215__$1);
return statearr_31239;
})();if(cljs.core.truth_(inst_31216))
{var statearr_31240_31252 = state_31233__$1;(statearr_31240_31252[(1)] = (3));
} else
{var statearr_31241_31253 = state_31233__$1;(statearr_31241_31253[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31234 === (1)))
{var inst_31211 = before_jsload.call(null,files);var inst_31212 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31213 = figwheel.client.load_all_js_files.call(null,inst_31212);var state_31233__$1 = (function (){var statearr_31242 = state_31233;(statearr_31242[(11)] = inst_31211);
return statearr_31242;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31233__$1,(2),inst_31213);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31246 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31246[(0)] = state_machine__15975__auto__);
(statearr_31246[(1)] = (1));
return statearr_31246;
});
var state_machine__15975__auto____1 = (function (state_31233){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31233);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object))
{var ex__15978__auto__ = e31247;var statearr_31248_31254 = state_31233;(statearr_31248_31254[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31247;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31255 = state_31233;
state_31233 = G__31255;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31233){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files))
})();var state__15991__auto__ = (function (){var statearr_31249 = f__15990__auto__.call(null);(statearr_31249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__31209,map__31209__$1,opts,on_jsload,before_jsload,map__31210,map__31210__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31256,link_href){var map__31258 = p__31256;var map__31258__$1 = ((cljs.core.seq_QMARK_.call(null,map__31258))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);var request_url = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31279){var state_val_31280 = (state_31279[(1)]);if((state_val_31280 === (2)))
{var inst_31276 = (state_31279[(2)]);var inst_31277 = parent.removeChild(orig_link);var state_31279__$1 = (function (){var statearr_31281 = state_31279;(statearr_31281[(7)] = inst_31276);
return statearr_31281;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31279__$1,inst_31277);
} else
{if((state_val_31280 === (1)))
{var inst_31274 = cljs.core.async.timeout.call(null,(200));var state_31279__$1 = state_31279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31279__$1,(2),inst_31274);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31285 = [null,null,null,null,null,null,null,null];(statearr_31285[(0)] = state_machine__15975__auto__);
(statearr_31285[(1)] = (1));
return statearr_31285;
});
var state_machine__15975__auto____1 = (function (state_31279){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31279);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31286){if((e31286 instanceof Object))
{var ex__15978__auto__ = e31286;var statearr_31287_31289 = state_31279;(statearr_31287_31289[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31290 = state_31279;
state_31279 = G__31290;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31279){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_31288 = f__15990__auto__.call(null);(statearr_31288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31288;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31291){var map__31293 = p__31291;var map__31293__$1 = ((cljs.core.seq_QMARK_.call(null,map__31293))?cljs.core.apply.call(null,cljs.core.hash_map,map__31293):map__31293);var f_data = map__31293__$1;var request_url = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31294,files_msg){var map__31316 = p__31294;var map__31316__$1 = ((cljs.core.seq_QMARK_.call(null,map__31316))?cljs.core.apply.call(null,cljs.core.hash_map,map__31316):map__31316);var opts = map__31316__$1;var on_cssload = cljs.core.get.call(null,map__31316__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31317_31337 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31318_31338 = null;var count__31319_31339 = (0);var i__31320_31340 = (0);while(true){
if((i__31320_31340 < count__31319_31339))
{var f_31341 = cljs.core._nth.call(null,chunk__31318_31338,i__31320_31340);figwheel.client.reload_css_file.call(null,f_31341);
{
var G__31342 = seq__31317_31337;
var G__31343 = chunk__31318_31338;
var G__31344 = count__31319_31339;
var G__31345 = (i__31320_31340 + (1));
seq__31317_31337 = G__31342;
chunk__31318_31338 = G__31343;
count__31319_31339 = G__31344;
i__31320_31340 = G__31345;
continue;
}
} else
{var temp__4126__auto___31346 = cljs.core.seq.call(null,seq__31317_31337);if(temp__4126__auto___31346)
{var seq__31317_31347__$1 = temp__4126__auto___31346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31317_31347__$1))
{var c__13316__auto___31348 = cljs.core.chunk_first.call(null,seq__31317_31347__$1);{
var G__31349 = cljs.core.chunk_rest.call(null,seq__31317_31347__$1);
var G__31350 = c__13316__auto___31348;
var G__31351 = cljs.core.count.call(null,c__13316__auto___31348);
var G__31352 = (0);
seq__31317_31337 = G__31349;
chunk__31318_31338 = G__31350;
count__31319_31339 = G__31351;
i__31320_31340 = G__31352;
continue;
}
} else
{var f_31353 = cljs.core.first.call(null,seq__31317_31347__$1);figwheel.client.reload_css_file.call(null,f_31353);
{
var G__31354 = cljs.core.next.call(null,seq__31317_31347__$1);
var G__31355 = null;
var G__31356 = (0);
var G__31357 = (0);
seq__31317_31337 = G__31354;
chunk__31318_31338 = G__31355;
count__31319_31339 = G__31356;
i__31320_31340 = G__31357;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload){
return (function (state_31327){var state_val_31328 = (state_31327[(1)]);if((state_val_31328 === (2)))
{var inst_31323 = (state_31327[(2)]);var inst_31324 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31325 = on_cssload.call(null,inst_31324);var state_31327__$1 = (function (){var statearr_31329 = state_31327;(statearr_31329[(7)] = inst_31323);
return statearr_31329;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31327__$1,inst_31325);
} else
{if((state_val_31328 === (1)))
{var inst_31321 = cljs.core.async.timeout.call(null,(100));var state_31327__$1 = state_31327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31327__$1,(2),inst_31321);
} else
{return null;
}
}
});})(c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31333 = [null,null,null,null,null,null,null,null];(statearr_31333[(0)] = state_machine__15975__auto__);
(statearr_31333[(1)] = (1));
return statearr_31333;
});
var state_machine__15975__auto____1 = (function (state_31327){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31327);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31334){if((e31334 instanceof Object))
{var ex__15978__auto__ = e31334;var statearr_31335_31358 = state_31327;(statearr_31335_31358[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31334;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31359 = state_31327;
state_31327 = G__31359;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_31336 = f__15990__auto__.call(null);(statearr_31336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__31316,map__31316__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31360){var map__31365 = p__31360;var map__31365__$1 = ((cljs.core.seq_QMARK_.call(null,map__31365))?cljs.core.apply.call(null,cljs.core.hash_map,map__31365):map__31365);var opts = map__31365__$1;var on_compile_fail = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31366 = cljs.core._EQ_;var expr__31367 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31366.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31367)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31366.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31367)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31366.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31367)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31365,map__31365__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31372 = {"detail":url};return obj31372;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31373){var map__31375 = p__31373;var map__31375__$1 = ((cljs.core.seq_QMARK_.call(null,map__31375))?cljs.core.apply.call(null,cljs.core.hash_map,map__31375):map__31375);var class$ = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31376){var map__31382 = p__31376;var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);var ed = map__31382__$1;var exception_data = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31383_31387 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31384_31388 = null;var count__31385_31389 = (0);var i__31386_31390 = (0);while(true){
if((i__31386_31390 < count__31385_31389))
{var msg_31391 = cljs.core._nth.call(null,chunk__31384_31388,i__31386_31390);console.log(msg_31391);
{
var G__31392 = seq__31383_31387;
var G__31393 = chunk__31384_31388;
var G__31394 = count__31385_31389;
var G__31395 = (i__31386_31390 + (1));
seq__31383_31387 = G__31392;
chunk__31384_31388 = G__31393;
count__31385_31389 = G__31394;
i__31386_31390 = G__31395;
continue;
}
} else
{var temp__4126__auto___31396 = cljs.core.seq.call(null,seq__31383_31387);if(temp__4126__auto___31396)
{var seq__31383_31397__$1 = temp__4126__auto___31396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31383_31397__$1))
{var c__13316__auto___31398 = cljs.core.chunk_first.call(null,seq__31383_31397__$1);{
var G__31399 = cljs.core.chunk_rest.call(null,seq__31383_31397__$1);
var G__31400 = c__13316__auto___31398;
var G__31401 = cljs.core.count.call(null,c__13316__auto___31398);
var G__31402 = (0);
seq__31383_31387 = G__31399;
chunk__31384_31388 = G__31400;
count__31385_31389 = G__31401;
i__31386_31390 = G__31402;
continue;
}
} else
{var msg_31403 = cljs.core.first.call(null,seq__31383_31397__$1);console.log(msg_31403);
{
var G__31404 = cljs.core.next.call(null,seq__31383_31397__$1);
var G__31405 = null;
var G__31406 = (0);
var G__31407 = (0);
seq__31383_31387 = G__31404;
chunk__31384_31388 = G__31405;
count__31385_31389 = G__31406;
i__31386_31390 = G__31407;
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
var watch_and_reload__delegate = function (p__31408){var map__31410 = p__31408;var map__31410__$1 = ((cljs.core.seq_QMARK_.call(null,map__31410))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);var opts = map__31410__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31408 = null;if (arguments.length > 0) {
  p__31408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31408);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31411){
var p__31408 = cljs.core.seq(arglist__31411);
return watch_and_reload__delegate(p__31408);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map