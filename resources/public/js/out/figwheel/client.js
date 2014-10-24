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
var log__delegate = function (p__27141,args){var map__27143 = p__27141;var map__27143__$1 = ((cljs.core.seq_QMARK_.call(null,map__27143))?cljs.core.apply.call(null,cljs.core.hash_map,map__27143):map__27143);var debug = cljs.core.get.call(null,map__27143__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__27141,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__27141,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__27144){
var p__27141 = cljs.core.first(arglist__27144);
var args = cljs.core.rest(arglist__27144);
return log__delegate(p__27141,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__27145){var map__27147 = p__27145;var map__27147__$1 = ((cljs.core.seq_QMARK_.call(null,map__27147))?cljs.core.apply.call(null,cljs.core.hash_map,map__27147):map__27147);var websocket_url = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__27148,callback){var map__27150 = p__27148;var map__27150__$1 = ((cljs.core.seq_QMARK_.call(null,map__27150))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);var msg = map__27150__$1;var dependency_file = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12547__auto__ = dependency_file;if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__27150,map__27150__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__27150,map__27150__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__27151,p__27152){var map__27155 = p__27151;var map__27155__$1 = ((cljs.core.seq_QMARK_.call(null,map__27155))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);var opts = map__27155__$1;var url_rewriter = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__27156 = p__27152;var map__27156__$1 = ((cljs.core.seq_QMARK_.call(null,map__27156))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);var d = map__27156__$1;var file = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__27157,p__27158){var map__27200 = p__27157;var map__27200__$1 = ((cljs.core.seq_QMARK_.call(null,map__27200))?cljs.core.apply.call(null,cljs.core.hash_map,map__27200):map__27200);var opts = map__27200__$1;var on_jsload = cljs.core.get.call(null,map__27200__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__27200__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__27201 = p__27158;var map__27201__$1 = ((cljs.core.seq_QMARK_.call(null,map__27201))?cljs.core.apply.call(null,cljs.core.hash_map,map__27201):map__27201);var files = cljs.core.get.call(null,map__27201__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files){
return (function (state_27224){var state_val_27225 = (state_27224[(1)]);if((state_val_27225 === (6)))
{var inst_27206 = (state_27224[(7)]);var inst_27215 = (state_27224[(2)]);var inst_27216 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27217 = [inst_27206];var inst_27218 = (new cljs.core.PersistentVector(null,1,(5),inst_27216,inst_27217,null));var inst_27219 = cljs.core.apply.call(null,on_jsload,inst_27218);var state_27224__$1 = (function (){var statearr_27226 = state_27224;(statearr_27226[(8)] = inst_27215);
return statearr_27226;
})();var statearr_27227_27241 = state_27224__$1;(statearr_27227_27241[(2)] = inst_27219);
(statearr_27227_27241[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27225 === (5)))
{var inst_27222 = (state_27224[(2)]);var state_27224__$1 = state_27224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else
{if((state_val_27225 === (4)))
{var state_27224__$1 = state_27224;var statearr_27228_27242 = state_27224__$1;(statearr_27228_27242[(2)] = null);
(statearr_27228_27242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27225 === (3)))
{var inst_27206 = (state_27224[(7)]);var inst_27209 = console.debug("Figwheel: loaded these files");var inst_27210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27206);var inst_27211 = cljs.core.prn_str.call(null,inst_27210);var inst_27212 = console.log(inst_27211);var inst_27213 = cljs.core.async.timeout.call(null,(10));var state_27224__$1 = (function (){var statearr_27229 = state_27224;(statearr_27229[(9)] = inst_27209);
(statearr_27229[(10)] = inst_27212);
return statearr_27229;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(6),inst_27213);
} else
{if((state_val_27225 === (2)))
{var inst_27206 = (state_27224[(7)]);var inst_27206__$1 = (state_27224[(2)]);var inst_27207 = cljs.core.not_empty.call(null,inst_27206__$1);var state_27224__$1 = (function (){var statearr_27230 = state_27224;(statearr_27230[(7)] = inst_27206__$1);
return statearr_27230;
})();if(cljs.core.truth_(inst_27207))
{var statearr_27231_27243 = state_27224__$1;(statearr_27231_27243[(1)] = (3));
} else
{var statearr_27232_27244 = state_27224__$1;(statearr_27232_27244[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27225 === (1)))
{var inst_27202 = before_jsload.call(null,files);var inst_27203 = figwheel.client.add_request_urls.call(null,opts,files);var inst_27204 = figwheel.client.load_all_js_files.call(null,inst_27203);var state_27224__$1 = (function (){var statearr_27233 = state_27224;(statearr_27233[(11)] = inst_27202);
return statearr_27233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(2),inst_27204);
} else
{return null;
}
}
}
}
}
}
});})(c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files))
;return ((function (switch__15710__auto__,c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_27237 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27237[(0)] = state_machine__15711__auto__);
(statearr_27237[(1)] = (1));
return statearr_27237;
});
var state_machine__15711__auto____1 = (function (state_27224){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_27224);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e27238){if((e27238 instanceof Object))
{var ex__15714__auto__ = e27238;var statearr_27239_27245 = state_27224;(statearr_27239_27245[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27238;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27246 = state_27224;
state_27224 = G__27246;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files))
})();var state__15768__auto__ = (function (){var statearr_27240 = f__15767__auto__.call(null);(statearr_27240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_27240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__,map__27200,map__27200__$1,opts,on_jsload,before_jsload,map__27201,map__27201__$1,files))
);
return c__15766__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__27247,link_href){var map__27249 = p__27247;var map__27249__$1 = ((cljs.core.seq_QMARK_.call(null,map__27249))?cljs.core.apply.call(null,cljs.core.hash_map,map__27249):map__27249);var request_url = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__,parent){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__,parent){
return (function (state_27270){var state_val_27271 = (state_27270[(1)]);if((state_val_27271 === (2)))
{var inst_27267 = (state_27270[(2)]);var inst_27268 = parent.removeChild(orig_link);var state_27270__$1 = (function (){var statearr_27272 = state_27270;(statearr_27272[(7)] = inst_27267);
return statearr_27272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27270__$1,inst_27268);
} else
{if((state_val_27271 === (1)))
{var inst_27265 = cljs.core.async.timeout.call(null,(200));var state_27270__$1 = state_27270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27270__$1,(2),inst_27265);
} else
{return null;
}
}
});})(c__15766__auto__,parent))
;return ((function (switch__15710__auto__,c__15766__auto__,parent){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_27276 = [null,null,null,null,null,null,null,null];(statearr_27276[(0)] = state_machine__15711__auto__);
(statearr_27276[(1)] = (1));
return statearr_27276;
});
var state_machine__15711__auto____1 = (function (state_27270){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_27270);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e27277){if((e27277 instanceof Object))
{var ex__15714__auto__ = e27277;var statearr_27278_27280 = state_27270;(statearr_27278_27280[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27277;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27281 = state_27270;
state_27270 = G__27281;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_27270){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_27270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__,parent))
})();var state__15768__auto__ = (function (){var statearr_27279 = f__15767__auto__.call(null);(statearr_27279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_27279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__,parent))
);
return c__15766__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__27282){var map__27284 = p__27282;var map__27284__$1 = ((cljs.core.seq_QMARK_.call(null,map__27284))?cljs.core.apply.call(null,cljs.core.hash_map,map__27284):map__27284);var f_data = map__27284__$1;var request_url = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__27285,files_msg){var map__27307 = p__27285;var map__27307__$1 = ((cljs.core.seq_QMARK_.call(null,map__27307))?cljs.core.apply.call(null,cljs.core.hash_map,map__27307):map__27307);var opts = map__27307__$1;var on_cssload = cljs.core.get.call(null,map__27307__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__27308_27328 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__27309_27329 = null;var count__27310_27330 = (0);var i__27311_27331 = (0);while(true){
if((i__27311_27331 < count__27310_27330))
{var f_27332 = cljs.core._nth.call(null,chunk__27309_27329,i__27311_27331);figwheel.client.reload_css_file.call(null,f_27332);
{
var G__27333 = seq__27308_27328;
var G__27334 = chunk__27309_27329;
var G__27335 = count__27310_27330;
var G__27336 = (i__27311_27331 + (1));
seq__27308_27328 = G__27333;
chunk__27309_27329 = G__27334;
count__27310_27330 = G__27335;
i__27311_27331 = G__27336;
continue;
}
} else
{var temp__4126__auto___27337 = cljs.core.seq.call(null,seq__27308_27328);if(temp__4126__auto___27337)
{var seq__27308_27338__$1 = temp__4126__auto___27337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27308_27338__$1))
{var c__13317__auto___27339 = cljs.core.chunk_first.call(null,seq__27308_27338__$1);{
var G__27340 = cljs.core.chunk_rest.call(null,seq__27308_27338__$1);
var G__27341 = c__13317__auto___27339;
var G__27342 = cljs.core.count.call(null,c__13317__auto___27339);
var G__27343 = (0);
seq__27308_27328 = G__27340;
chunk__27309_27329 = G__27341;
count__27310_27330 = G__27342;
i__27311_27331 = G__27343;
continue;
}
} else
{var f_27344 = cljs.core.first.call(null,seq__27308_27338__$1);figwheel.client.reload_css_file.call(null,f_27344);
{
var G__27345 = cljs.core.next.call(null,seq__27308_27338__$1);
var G__27346 = null;
var G__27347 = (0);
var G__27348 = (0);
seq__27308_27328 = G__27345;
chunk__27309_27329 = G__27346;
count__27310_27330 = G__27347;
i__27311_27331 = G__27348;
continue;
}
}
} else
{}
}
break;
}
var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload){
return (function (state_27318){var state_val_27319 = (state_27318[(1)]);if((state_val_27319 === (2)))
{var inst_27314 = (state_27318[(2)]);var inst_27315 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_27316 = on_cssload.call(null,inst_27315);var state_27318__$1 = (function (){var statearr_27320 = state_27318;(statearr_27320[(7)] = inst_27314);
return statearr_27320;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27318__$1,inst_27316);
} else
{if((state_val_27319 === (1)))
{var inst_27312 = cljs.core.async.timeout.call(null,(100));var state_27318__$1 = state_27318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27318__$1,(2),inst_27312);
} else
{return null;
}
}
});})(c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload))
;return ((function (switch__15710__auto__,c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_27324 = [null,null,null,null,null,null,null,null];(statearr_27324[(0)] = state_machine__15711__auto__);
(statearr_27324[(1)] = (1));
return statearr_27324;
});
var state_machine__15711__auto____1 = (function (state_27318){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_27318);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e27325){if((e27325 instanceof Object))
{var ex__15714__auto__ = e27325;var statearr_27326_27349 = state_27318;(statearr_27326_27349[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27325;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27350 = state_27318;
state_27318 = G__27350;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_27318){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_27318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload))
})();var state__15768__auto__ = (function (){var statearr_27327 = f__15767__auto__.call(null);(statearr_27327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_27327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__,map__27307,map__27307__$1,opts,on_cssload))
);
return c__15766__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__27351){var map__27356 = p__27351;var map__27356__$1 = ((cljs.core.seq_QMARK_.call(null,map__27356))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);var opts = map__27356__$1;var on_compile_fail = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__27357 = cljs.core._EQ_;var expr__27358 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__27357.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__27358)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27357.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__27358)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27357.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27358)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__27356,map__27356__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27363 = {"detail":url};return obj27363;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__27364){var map__27366 = p__27364;var map__27366__$1 = ((cljs.core.seq_QMARK_.call(null,map__27366))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);var class$ = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__27367){var map__27373 = p__27367;var map__27373__$1 = ((cljs.core.seq_QMARK_.call(null,map__27373))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);var ed = map__27373__$1;var exception_data = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__27373__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__27374_27378 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__27375_27379 = null;var count__27376_27380 = (0);var i__27377_27381 = (0);while(true){
if((i__27377_27381 < count__27376_27380))
{var msg_27382 = cljs.core._nth.call(null,chunk__27375_27379,i__27377_27381);console.log(msg_27382);
{
var G__27383 = seq__27374_27378;
var G__27384 = chunk__27375_27379;
var G__27385 = count__27376_27380;
var G__27386 = (i__27377_27381 + (1));
seq__27374_27378 = G__27383;
chunk__27375_27379 = G__27384;
count__27376_27380 = G__27385;
i__27377_27381 = G__27386;
continue;
}
} else
{var temp__4126__auto___27387 = cljs.core.seq.call(null,seq__27374_27378);if(temp__4126__auto___27387)
{var seq__27374_27388__$1 = temp__4126__auto___27387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27374_27388__$1))
{var c__13317__auto___27389 = cljs.core.chunk_first.call(null,seq__27374_27388__$1);{
var G__27390 = cljs.core.chunk_rest.call(null,seq__27374_27388__$1);
var G__27391 = c__13317__auto___27389;
var G__27392 = cljs.core.count.call(null,c__13317__auto___27389);
var G__27393 = (0);
seq__27374_27378 = G__27390;
chunk__27375_27379 = G__27391;
count__27376_27380 = G__27392;
i__27377_27381 = G__27393;
continue;
}
} else
{var msg_27394 = cljs.core.first.call(null,seq__27374_27388__$1);console.log(msg_27394);
{
var G__27395 = cljs.core.next.call(null,seq__27374_27388__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__27374_27378 = G__27395;
chunk__27375_27379 = G__27396;
count__27376_27380 = G__27397;
i__27377_27381 = G__27398;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__12547__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
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
var watch_and_reload__delegate = function (p__27399){var map__27401 = p__27399;var map__27401__$1 = ((cljs.core.seq_QMARK_.call(null,map__27401))?cljs.core.apply.call(null,cljs.core.hash_map,map__27401):map__27401);var opts = map__27401__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__27399 = null;if (arguments.length > 0) {
  p__27399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__27399);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__27402){
var p__27399 = cljs.core.seq(arglist__27402);
return watch_and_reload__delegate(p__27399);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map