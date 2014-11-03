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
var log__delegate = function (p__25159,args){var map__25161 = p__25159;var map__25161__$1 = ((cljs.core.seq_QMARK_.call(null,map__25161))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);var debug = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__25159,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__25159,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25162){
var p__25159 = cljs.core.first(arglist__25162);
var args = cljs.core.rest(arglist__25162);
return log__delegate(p__25159,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25163){var map__25165 = p__25163;var map__25165__$1 = ((cljs.core.seq_QMARK_.call(null,map__25165))?cljs.core.apply.call(null,cljs.core.hash_map,map__25165):map__25165);var websocket_url = cljs.core.get.call(null,map__25165__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__25166,callback){var map__25168 = p__25166;var map__25168__$1 = ((cljs.core.seq_QMARK_.call(null,map__25168))?cljs.core.apply.call(null,cljs.core.hash_map,map__25168):map__25168);var msg = map__25168__$1;var dependency_file = cljs.core.get.call(null,map__25168__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__25168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__25168__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25168,map__25168__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25168,map__25168__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__25169,p__25170){var map__25173 = p__25169;var map__25173__$1 = ((cljs.core.seq_QMARK_.call(null,map__25173))?cljs.core.apply.call(null,cljs.core.hash_map,map__25173):map__25173);var opts = map__25173__$1;var url_rewriter = cljs.core.get.call(null,map__25173__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__25174 = p__25170;var map__25174__$1 = ((cljs.core.seq_QMARK_.call(null,map__25174))?cljs.core.apply.call(null,cljs.core.hash_map,map__25174):map__25174);var d = map__25174__$1;var file = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25175,p__25176){var map__25218 = p__25175;var map__25218__$1 = ((cljs.core.seq_QMARK_.call(null,map__25218))?cljs.core.apply.call(null,cljs.core.hash_map,map__25218):map__25218);var opts = map__25218__$1;var on_jsload = cljs.core.get.call(null,map__25218__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__25218__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__25219 = p__25176;var map__25219__$1 = ((cljs.core.seq_QMARK_.call(null,map__25219))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219):map__25219);var files = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files){
return (function (state_25242){var state_val_25243 = (state_25242[(1)]);if((state_val_25243 === (6)))
{var inst_25224 = (state_25242[(7)]);var inst_25233 = (state_25242[(2)]);var inst_25234 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25235 = [inst_25224];var inst_25236 = (new cljs.core.PersistentVector(null,1,(5),inst_25234,inst_25235,null));var inst_25237 = cljs.core.apply.call(null,on_jsload,inst_25236);var state_25242__$1 = (function (){var statearr_25244 = state_25242;(statearr_25244[(8)] = inst_25233);
return statearr_25244;
})();var statearr_25245_25259 = state_25242__$1;(statearr_25245_25259[(2)] = inst_25237);
(statearr_25245_25259[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (5)))
{var inst_25240 = (state_25242[(2)]);var state_25242__$1 = state_25242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25242__$1,inst_25240);
} else
{if((state_val_25243 === (4)))
{var state_25242__$1 = state_25242;var statearr_25246_25260 = state_25242__$1;(statearr_25246_25260[(2)] = null);
(statearr_25246_25260[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (3)))
{var inst_25224 = (state_25242[(7)]);var inst_25227 = console.debug("Figwheel: loaded these files");var inst_25228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25224);var inst_25229 = cljs.core.prn_str.call(null,inst_25228);var inst_25230 = console.log(inst_25229);var inst_25231 = cljs.core.async.timeout.call(null,(10));var state_25242__$1 = (function (){var statearr_25247 = state_25242;(statearr_25247[(9)] = inst_25227);
(statearr_25247[(10)] = inst_25230);
return statearr_25247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(6),inst_25231);
} else
{if((state_val_25243 === (2)))
{var inst_25224 = (state_25242[(7)]);var inst_25224__$1 = (state_25242[(2)]);var inst_25225 = cljs.core.not_empty.call(null,inst_25224__$1);var state_25242__$1 = (function (){var statearr_25248 = state_25242;(statearr_25248[(7)] = inst_25224__$1);
return statearr_25248;
})();if(cljs.core.truth_(inst_25225))
{var statearr_25249_25261 = state_25242__$1;(statearr_25249_25261[(1)] = (3));
} else
{var statearr_25250_25262 = state_25242__$1;(statearr_25250_25262[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25243 === (1)))
{var inst_25220 = before_jsload.call(null,files);var inst_25221 = figwheel.client.add_request_urls.call(null,opts,files);var inst_25222 = figwheel.client.load_all_js_files.call(null,inst_25221);var state_25242__$1 = (function (){var statearr_25251 = state_25242;(statearr_25251[(11)] = inst_25220);
return statearr_25251;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(2),inst_25222);
} else
{return null;
}
}
}
}
}
}
});})(c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files))
;return ((function (switch__15072__auto__,c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25255 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25255[(0)] = state_machine__15073__auto__);
(statearr_25255[(1)] = (1));
return statearr_25255;
});
var state_machine__15073__auto____1 = (function (state_25242){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25242);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object))
{var ex__15076__auto__ = e25256;var statearr_25257_25263 = state_25242;(statearr_25257_25263[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25256;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25264 = state_25242;
state_25242 = G__25264;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files))
})();var state__15089__auto__ = (function (){var statearr_25258 = f__15088__auto__.call(null);(statearr_25258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,map__25218,map__25218__$1,opts,on_jsload,before_jsload,map__25219,map__25219__$1,files))
);
return c__15087__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25265,link_href){var map__25267 = p__25265;var map__25267__$1 = ((cljs.core.seq_QMARK_.call(null,map__25267))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267):map__25267);var request_url = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,parent){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,parent){
return (function (state_25288){var state_val_25289 = (state_25288[(1)]);if((state_val_25289 === (2)))
{var inst_25285 = (state_25288[(2)]);var inst_25286 = parent.removeChild(orig_link);var state_25288__$1 = (function (){var statearr_25290 = state_25288;(statearr_25290[(7)] = inst_25285);
return statearr_25290;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25288__$1,inst_25286);
} else
{if((state_val_25289 === (1)))
{var inst_25283 = cljs.core.async.timeout.call(null,(200));var state_25288__$1 = state_25288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25288__$1,(2),inst_25283);
} else
{return null;
}
}
});})(c__15087__auto__,parent))
;return ((function (switch__15072__auto__,c__15087__auto__,parent){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25294 = [null,null,null,null,null,null,null,null];(statearr_25294[(0)] = state_machine__15073__auto__);
(statearr_25294[(1)] = (1));
return statearr_25294;
});
var state_machine__15073__auto____1 = (function (state_25288){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25288);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25295){if((e25295 instanceof Object))
{var ex__15076__auto__ = e25295;var statearr_25296_25298 = state_25288;(statearr_25296_25298[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25299 = state_25288;
state_25288 = G__25299;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25288){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,parent))
})();var state__15089__auto__ = (function (){var statearr_25297 = f__15088__auto__.call(null);(statearr_25297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,parent))
);
return c__15087__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__25300){var map__25302 = p__25300;var map__25302__$1 = ((cljs.core.seq_QMARK_.call(null,map__25302))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);var f_data = map__25302__$1;var request_url = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25303,files_msg){var map__25325 = p__25303;var map__25325__$1 = ((cljs.core.seq_QMARK_.call(null,map__25325))?cljs.core.apply.call(null,cljs.core.hash_map,map__25325):map__25325);var opts = map__25325__$1;var on_cssload = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25326_25346 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25327_25347 = null;var count__25328_25348 = (0);var i__25329_25349 = (0);while(true){
if((i__25329_25349 < count__25328_25348))
{var f_25350 = cljs.core._nth.call(null,chunk__25327_25347,i__25329_25349);figwheel.client.reload_css_file.call(null,f_25350);
{
var G__25351 = seq__25326_25346;
var G__25352 = chunk__25327_25347;
var G__25353 = count__25328_25348;
var G__25354 = (i__25329_25349 + (1));
seq__25326_25346 = G__25351;
chunk__25327_25347 = G__25352;
count__25328_25348 = G__25353;
i__25329_25349 = G__25354;
continue;
}
} else
{var temp__4126__auto___25355 = cljs.core.seq.call(null,seq__25326_25346);if(temp__4126__auto___25355)
{var seq__25326_25356__$1 = temp__4126__auto___25355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25326_25356__$1))
{var c__13317__auto___25357 = cljs.core.chunk_first.call(null,seq__25326_25356__$1);{
var G__25358 = cljs.core.chunk_rest.call(null,seq__25326_25356__$1);
var G__25359 = c__13317__auto___25357;
var G__25360 = cljs.core.count.call(null,c__13317__auto___25357);
var G__25361 = (0);
seq__25326_25346 = G__25358;
chunk__25327_25347 = G__25359;
count__25328_25348 = G__25360;
i__25329_25349 = G__25361;
continue;
}
} else
{var f_25362 = cljs.core.first.call(null,seq__25326_25356__$1);figwheel.client.reload_css_file.call(null,f_25362);
{
var G__25363 = cljs.core.next.call(null,seq__25326_25356__$1);
var G__25364 = null;
var G__25365 = (0);
var G__25366 = (0);
seq__25326_25346 = G__25363;
chunk__25327_25347 = G__25364;
count__25328_25348 = G__25365;
i__25329_25349 = G__25366;
continue;
}
}
} else
{}
}
break;
}
var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload){
return (function (state_25336){var state_val_25337 = (state_25336[(1)]);if((state_val_25337 === (2)))
{var inst_25332 = (state_25336[(2)]);var inst_25333 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25334 = on_cssload.call(null,inst_25333);var state_25336__$1 = (function (){var statearr_25338 = state_25336;(statearr_25338[(7)] = inst_25332);
return statearr_25338;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25336__$1,inst_25334);
} else
{if((state_val_25337 === (1)))
{var inst_25330 = cljs.core.async.timeout.call(null,(100));var state_25336__$1 = state_25336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25336__$1,(2),inst_25330);
} else
{return null;
}
}
});})(c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload))
;return ((function (switch__15072__auto__,c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25342 = [null,null,null,null,null,null,null,null];(statearr_25342[(0)] = state_machine__15073__auto__);
(statearr_25342[(1)] = (1));
return statearr_25342;
});
var state_machine__15073__auto____1 = (function (state_25336){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25336);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25343){if((e25343 instanceof Object))
{var ex__15076__auto__ = e25343;var statearr_25344_25367 = state_25336;(statearr_25344_25367[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25343;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25368 = state_25336;
state_25336 = G__25368;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25336){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload))
})();var state__15089__auto__ = (function (){var statearr_25345 = f__15088__auto__.call(null);(statearr_25345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,map__25325,map__25325__$1,opts,on_cssload))
);
return c__15087__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25369){var map__25374 = p__25369;var map__25374__$1 = ((cljs.core.seq_QMARK_.call(null,map__25374))?cljs.core.apply.call(null,cljs.core.hash_map,map__25374):map__25374);var opts = map__25374__$1;var on_compile_fail = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25375 = cljs.core._EQ_;var expr__25376 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25375.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25376)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25375.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25376)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25375.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25376)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25374,map__25374__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25381 = {"detail":url};return obj25381;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25382){var map__25384 = p__25382;var map__25384__$1 = ((cljs.core.seq_QMARK_.call(null,map__25384))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);var class$ = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25385){var map__25391 = p__25385;var map__25391__$1 = ((cljs.core.seq_QMARK_.call(null,map__25391))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);var ed = map__25391__$1;var exception_data = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25392_25396 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25393_25397 = null;var count__25394_25398 = (0);var i__25395_25399 = (0);while(true){
if((i__25395_25399 < count__25394_25398))
{var msg_25400 = cljs.core._nth.call(null,chunk__25393_25397,i__25395_25399);console.log(msg_25400);
{
var G__25401 = seq__25392_25396;
var G__25402 = chunk__25393_25397;
var G__25403 = count__25394_25398;
var G__25404 = (i__25395_25399 + (1));
seq__25392_25396 = G__25401;
chunk__25393_25397 = G__25402;
count__25394_25398 = G__25403;
i__25395_25399 = G__25404;
continue;
}
} else
{var temp__4126__auto___25405 = cljs.core.seq.call(null,seq__25392_25396);if(temp__4126__auto___25405)
{var seq__25392_25406__$1 = temp__4126__auto___25405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25392_25406__$1))
{var c__13317__auto___25407 = cljs.core.chunk_first.call(null,seq__25392_25406__$1);{
var G__25408 = cljs.core.chunk_rest.call(null,seq__25392_25406__$1);
var G__25409 = c__13317__auto___25407;
var G__25410 = cljs.core.count.call(null,c__13317__auto___25407);
var G__25411 = (0);
seq__25392_25396 = G__25408;
chunk__25393_25397 = G__25409;
count__25394_25398 = G__25410;
i__25395_25399 = G__25411;
continue;
}
} else
{var msg_25412 = cljs.core.first.call(null,seq__25392_25406__$1);console.log(msg_25412);
{
var G__25413 = cljs.core.next.call(null,seq__25392_25406__$1);
var G__25414 = null;
var G__25415 = (0);
var G__25416 = (0);
seq__25392_25396 = G__25413;
chunk__25393_25397 = G__25414;
count__25394_25398 = G__25415;
i__25395_25399 = G__25416;
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
var watch_and_reload__delegate = function (p__25417){var map__25419 = p__25417;var map__25419__$1 = ((cljs.core.seq_QMARK_.call(null,map__25419))?cljs.core.apply.call(null,cljs.core.hash_map,map__25419):map__25419);var opts = map__25419__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25417 = null;if (arguments.length > 0) {
  p__25417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25417);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25420){
var p__25417 = cljs.core.seq(arglist__25420);
return watch_and_reload__delegate(p__25417);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map