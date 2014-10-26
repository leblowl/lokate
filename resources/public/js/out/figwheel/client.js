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
var log__delegate = function (p__36335,args){var map__36337 = p__36335;var map__36337__$1 = ((cljs.core.seq_QMARK_.call(null,map__36337))?cljs.core.apply.call(null,cljs.core.hash_map,map__36337):map__36337);var debug = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__36335,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__36335,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__36338){
var p__36335 = cljs.core.first(arglist__36338);
var args = cljs.core.rest(arglist__36338);
return log__delegate(p__36335,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__36339){var map__36341 = p__36339;var map__36341__$1 = ((cljs.core.seq_QMARK_.call(null,map__36341))?cljs.core.apply.call(null,cljs.core.hash_map,map__36341):map__36341);var websocket_url = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__36342,callback){var map__36344 = p__36342;var map__36344__$1 = ((cljs.core.seq_QMARK_.call(null,map__36344))?cljs.core.apply.call(null,cljs.core.hash_map,map__36344):map__36344);var msg = map__36344__$1;var dependency_file = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__36344,map__36344__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__36344,map__36344__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__36345,p__36346){var map__36349 = p__36345;var map__36349__$1 = ((cljs.core.seq_QMARK_.call(null,map__36349))?cljs.core.apply.call(null,cljs.core.hash_map,map__36349):map__36349);var opts = map__36349__$1;var url_rewriter = cljs.core.get.call(null,map__36349__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__36350 = p__36346;var map__36350__$1 = ((cljs.core.seq_QMARK_.call(null,map__36350))?cljs.core.apply.call(null,cljs.core.hash_map,map__36350):map__36350);var d = map__36350__$1;var file = cljs.core.get.call(null,map__36350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__36351,p__36352){var map__36394 = p__36351;var map__36394__$1 = ((cljs.core.seq_QMARK_.call(null,map__36394))?cljs.core.apply.call(null,cljs.core.hash_map,map__36394):map__36394);var opts = map__36394__$1;var on_jsload = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__36395 = p__36352;var map__36395__$1 = ((cljs.core.seq_QMARK_.call(null,map__36395))?cljs.core.apply.call(null,cljs.core.hash_map,map__36395):map__36395);var files = cljs.core.get.call(null,map__36395__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files){
return (function (state_36418){var state_val_36419 = (state_36418[(1)]);if((state_val_36419 === (6)))
{var inst_36400 = (state_36418[(7)]);var inst_36409 = (state_36418[(2)]);var inst_36410 = cljs.core.PersistentVector.EMPTY_NODE;var inst_36411 = [inst_36400];var inst_36412 = (new cljs.core.PersistentVector(null,1,(5),inst_36410,inst_36411,null));var inst_36413 = cljs.core.apply.call(null,on_jsload,inst_36412);var state_36418__$1 = (function (){var statearr_36420 = state_36418;(statearr_36420[(8)] = inst_36409);
return statearr_36420;
})();var statearr_36421_36435 = state_36418__$1;(statearr_36421_36435[(2)] = inst_36413);
(statearr_36421_36435[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36419 === (5)))
{var inst_36416 = (state_36418[(2)]);var state_36418__$1 = state_36418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36418__$1,inst_36416);
} else
{if((state_val_36419 === (4)))
{var state_36418__$1 = state_36418;var statearr_36422_36436 = state_36418__$1;(statearr_36422_36436[(2)] = null);
(statearr_36422_36436[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36419 === (3)))
{var inst_36400 = (state_36418[(7)]);var inst_36403 = console.debug("Figwheel: loaded these files");var inst_36404 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36400);var inst_36405 = cljs.core.prn_str.call(null,inst_36404);var inst_36406 = console.log(inst_36405);var inst_36407 = cljs.core.async.timeout.call(null,(10));var state_36418__$1 = (function (){var statearr_36423 = state_36418;(statearr_36423[(9)] = inst_36403);
(statearr_36423[(10)] = inst_36406);
return statearr_36423;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36418__$1,(6),inst_36407);
} else
{if((state_val_36419 === (2)))
{var inst_36400 = (state_36418[(7)]);var inst_36400__$1 = (state_36418[(2)]);var inst_36401 = cljs.core.not_empty.call(null,inst_36400__$1);var state_36418__$1 = (function (){var statearr_36424 = state_36418;(statearr_36424[(7)] = inst_36400__$1);
return statearr_36424;
})();if(cljs.core.truth_(inst_36401))
{var statearr_36425_36437 = state_36418__$1;(statearr_36425_36437[(1)] = (3));
} else
{var statearr_36426_36438 = state_36418__$1;(statearr_36426_36438[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36419 === (1)))
{var inst_36396 = before_jsload.call(null,files);var inst_36397 = figwheel.client.add_request_urls.call(null,opts,files);var inst_36398 = figwheel.client.load_all_js_files.call(null,inst_36397);var state_36418__$1 = (function (){var statearr_36427 = state_36418;(statearr_36427[(11)] = inst_36396);
return statearr_36427;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36418__$1,(2),inst_36398);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_36431 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36431[(0)] = state_machine__15975__auto__);
(statearr_36431[(1)] = (1));
return statearr_36431;
});
var state_machine__15975__auto____1 = (function (state_36418){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_36418);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e36432){if((e36432 instanceof Object))
{var ex__15978__auto__ = e36432;var statearr_36433_36439 = state_36418;(statearr_36433_36439[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36432;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36440 = state_36418;
state_36418 = G__36440;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_36418){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_36418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files))
})();var state__15991__auto__ = (function (){var statearr_36434 = f__15990__auto__.call(null);(statearr_36434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_36434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__36394,map__36394__$1,opts,on_jsload,before_jsload,map__36395,map__36395__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__36441,link_href){var map__36443 = p__36441;var map__36443__$1 = ((cljs.core.seq_QMARK_.call(null,map__36443))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);var request_url = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_36464){var state_val_36465 = (state_36464[(1)]);if((state_val_36465 === (2)))
{var inst_36461 = (state_36464[(2)]);var inst_36462 = parent.removeChild(orig_link);var state_36464__$1 = (function (){var statearr_36466 = state_36464;(statearr_36466[(7)] = inst_36461);
return statearr_36466;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36464__$1,inst_36462);
} else
{if((state_val_36465 === (1)))
{var inst_36459 = cljs.core.async.timeout.call(null,(200));var state_36464__$1 = state_36464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36464__$1,(2),inst_36459);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_36470 = [null,null,null,null,null,null,null,null];(statearr_36470[(0)] = state_machine__15975__auto__);
(statearr_36470[(1)] = (1));
return statearr_36470;
});
var state_machine__15975__auto____1 = (function (state_36464){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_36464);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e36471){if((e36471 instanceof Object))
{var ex__15978__auto__ = e36471;var statearr_36472_36474 = state_36464;(statearr_36472_36474[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36471;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36475 = state_36464;
state_36464 = G__36475;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_36464){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_36464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_36473 = f__15990__auto__.call(null);(statearr_36473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_36473;
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
figwheel.client.reload_css_file = (function reload_css_file(p__36476){var map__36478 = p__36476;var map__36478__$1 = ((cljs.core.seq_QMARK_.call(null,map__36478))?cljs.core.apply.call(null,cljs.core.hash_map,map__36478):map__36478);var f_data = map__36478__$1;var request_url = cljs.core.get.call(null,map__36478__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__36478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__36479,files_msg){var map__36501 = p__36479;var map__36501__$1 = ((cljs.core.seq_QMARK_.call(null,map__36501))?cljs.core.apply.call(null,cljs.core.hash_map,map__36501):map__36501);var opts = map__36501__$1;var on_cssload = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__36502_36522 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__36503_36523 = null;var count__36504_36524 = (0);var i__36505_36525 = (0);while(true){
if((i__36505_36525 < count__36504_36524))
{var f_36526 = cljs.core._nth.call(null,chunk__36503_36523,i__36505_36525);figwheel.client.reload_css_file.call(null,f_36526);
{
var G__36527 = seq__36502_36522;
var G__36528 = chunk__36503_36523;
var G__36529 = count__36504_36524;
var G__36530 = (i__36505_36525 + (1));
seq__36502_36522 = G__36527;
chunk__36503_36523 = G__36528;
count__36504_36524 = G__36529;
i__36505_36525 = G__36530;
continue;
}
} else
{var temp__4126__auto___36531 = cljs.core.seq.call(null,seq__36502_36522);if(temp__4126__auto___36531)
{var seq__36502_36532__$1 = temp__4126__auto___36531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36502_36532__$1))
{var c__13316__auto___36533 = cljs.core.chunk_first.call(null,seq__36502_36532__$1);{
var G__36534 = cljs.core.chunk_rest.call(null,seq__36502_36532__$1);
var G__36535 = c__13316__auto___36533;
var G__36536 = cljs.core.count.call(null,c__13316__auto___36533);
var G__36537 = (0);
seq__36502_36522 = G__36534;
chunk__36503_36523 = G__36535;
count__36504_36524 = G__36536;
i__36505_36525 = G__36537;
continue;
}
} else
{var f_36538 = cljs.core.first.call(null,seq__36502_36532__$1);figwheel.client.reload_css_file.call(null,f_36538);
{
var G__36539 = cljs.core.next.call(null,seq__36502_36532__$1);
var G__36540 = null;
var G__36541 = (0);
var G__36542 = (0);
seq__36502_36522 = G__36539;
chunk__36503_36523 = G__36540;
count__36504_36524 = G__36541;
i__36505_36525 = G__36542;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload){
return (function (state_36512){var state_val_36513 = (state_36512[(1)]);if((state_val_36513 === (2)))
{var inst_36508 = (state_36512[(2)]);var inst_36509 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_36510 = on_cssload.call(null,inst_36509);var state_36512__$1 = (function (){var statearr_36514 = state_36512;(statearr_36514[(7)] = inst_36508);
return statearr_36514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36512__$1,inst_36510);
} else
{if((state_val_36513 === (1)))
{var inst_36506 = cljs.core.async.timeout.call(null,(100));var state_36512__$1 = state_36512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36512__$1,(2),inst_36506);
} else
{return null;
}
}
});})(c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_36518 = [null,null,null,null,null,null,null,null];(statearr_36518[(0)] = state_machine__15975__auto__);
(statearr_36518[(1)] = (1));
return statearr_36518;
});
var state_machine__15975__auto____1 = (function (state_36512){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_36512);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e36519){if((e36519 instanceof Object))
{var ex__15978__auto__ = e36519;var statearr_36520_36543 = state_36512;(statearr_36520_36543[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36519;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36544 = state_36512;
state_36512 = G__36544;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_36512){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_36512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_36521 = f__15990__auto__.call(null);(statearr_36521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_36521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__36501,map__36501__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__36545){var map__36550 = p__36545;var map__36550__$1 = ((cljs.core.seq_QMARK_.call(null,map__36550))?cljs.core.apply.call(null,cljs.core.hash_map,map__36550):map__36550);var opts = map__36550__$1;var on_compile_fail = cljs.core.get.call(null,map__36550__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__36550__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__36550__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__36550__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__36551 = cljs.core._EQ_;var expr__36552 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__36551.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__36552)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__36551.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__36552)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__36551.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36552)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__36550,map__36550__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj36557 = {"detail":url};return obj36557;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__36558){var map__36560 = p__36558;var map__36560__$1 = ((cljs.core.seq_QMARK_.call(null,map__36560))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);var class$ = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__36561){var map__36567 = p__36561;var map__36567__$1 = ((cljs.core.seq_QMARK_.call(null,map__36567))?cljs.core.apply.call(null,cljs.core.hash_map,map__36567):map__36567);var ed = map__36567__$1;var exception_data = cljs.core.get.call(null,map__36567__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__36567__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__36568_36572 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__36569_36573 = null;var count__36570_36574 = (0);var i__36571_36575 = (0);while(true){
if((i__36571_36575 < count__36570_36574))
{var msg_36576 = cljs.core._nth.call(null,chunk__36569_36573,i__36571_36575);console.log(msg_36576);
{
var G__36577 = seq__36568_36572;
var G__36578 = chunk__36569_36573;
var G__36579 = count__36570_36574;
var G__36580 = (i__36571_36575 + (1));
seq__36568_36572 = G__36577;
chunk__36569_36573 = G__36578;
count__36570_36574 = G__36579;
i__36571_36575 = G__36580;
continue;
}
} else
{var temp__4126__auto___36581 = cljs.core.seq.call(null,seq__36568_36572);if(temp__4126__auto___36581)
{var seq__36568_36582__$1 = temp__4126__auto___36581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36568_36582__$1))
{var c__13316__auto___36583 = cljs.core.chunk_first.call(null,seq__36568_36582__$1);{
var G__36584 = cljs.core.chunk_rest.call(null,seq__36568_36582__$1);
var G__36585 = c__13316__auto___36583;
var G__36586 = cljs.core.count.call(null,c__13316__auto___36583);
var G__36587 = (0);
seq__36568_36572 = G__36584;
chunk__36569_36573 = G__36585;
count__36570_36574 = G__36586;
i__36571_36575 = G__36587;
continue;
}
} else
{var msg_36588 = cljs.core.first.call(null,seq__36568_36582__$1);console.log(msg_36588);
{
var G__36589 = cljs.core.next.call(null,seq__36568_36582__$1);
var G__36590 = null;
var G__36591 = (0);
var G__36592 = (0);
seq__36568_36572 = G__36589;
chunk__36569_36573 = G__36590;
count__36570_36574 = G__36591;
i__36571_36575 = G__36592;
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
var watch_and_reload__delegate = function (p__36593){var map__36595 = p__36593;var map__36595__$1 = ((cljs.core.seq_QMARK_.call(null,map__36595))?cljs.core.apply.call(null,cljs.core.hash_map,map__36595):map__36595);var opts = map__36595__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__36593 = null;if (arguments.length > 0) {
  p__36593 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__36593);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__36596){
var p__36593 = cljs.core.seq(arglist__36596);
return watch_and_reload__delegate(p__36593);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map