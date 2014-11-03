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
var log__delegate = function (p__27391,args){var map__27393 = p__27391;var map__27393__$1 = ((cljs.core.seq_QMARK_.call(null,map__27393))?cljs.core.apply.call(null,cljs.core.hash_map,map__27393):map__27393);var debug = cljs.core.get.call(null,map__27393__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__27391,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__27391,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__27394){
var p__27391 = cljs.core.first(arglist__27394);
var args = cljs.core.rest(arglist__27394);
return log__delegate(p__27391,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__27395){var map__27397 = p__27395;var map__27397__$1 = ((cljs.core.seq_QMARK_.call(null,map__27397))?cljs.core.apply.call(null,cljs.core.hash_map,map__27397):map__27397);var websocket_url = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__27398,callback){var map__27400 = p__27398;var map__27400__$1 = ((cljs.core.seq_QMARK_.call(null,map__27400))?cljs.core.apply.call(null,cljs.core.hash_map,map__27400):map__27400);var msg = map__27400__$1;var dependency_file = cljs.core.get.call(null,map__27400__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__27400__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__27400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__27400,map__27400__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__27400,map__27400__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__27401,p__27402){var map__27405 = p__27401;var map__27405__$1 = ((cljs.core.seq_QMARK_.call(null,map__27405))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);var opts = map__27405__$1;var url_rewriter = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__27406 = p__27402;var map__27406__$1 = ((cljs.core.seq_QMARK_.call(null,map__27406))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);var d = map__27406__$1;var file = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__27407,p__27408){var map__27450 = p__27407;var map__27450__$1 = ((cljs.core.seq_QMARK_.call(null,map__27450))?cljs.core.apply.call(null,cljs.core.hash_map,map__27450):map__27450);var opts = map__27450__$1;var on_jsload = cljs.core.get.call(null,map__27450__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__27450__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__27451 = p__27408;var map__27451__$1 = ((cljs.core.seq_QMARK_.call(null,map__27451))?cljs.core.apply.call(null,cljs.core.hash_map,map__27451):map__27451);var files = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files){
return (function (state_27474){var state_val_27475 = (state_27474[(1)]);if((state_val_27475 === (6)))
{var inst_27456 = (state_27474[(7)]);var inst_27465 = (state_27474[(2)]);var inst_27466 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27467 = [inst_27456];var inst_27468 = (new cljs.core.PersistentVector(null,1,(5),inst_27466,inst_27467,null));var inst_27469 = cljs.core.apply.call(null,on_jsload,inst_27468);var state_27474__$1 = (function (){var statearr_27476 = state_27474;(statearr_27476[(8)] = inst_27465);
return statearr_27476;
})();var statearr_27477_27491 = state_27474__$1;(statearr_27477_27491[(2)] = inst_27469);
(statearr_27477_27491[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27475 === (5)))
{var inst_27472 = (state_27474[(2)]);var state_27474__$1 = state_27474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27474__$1,inst_27472);
} else
{if((state_val_27475 === (4)))
{var state_27474__$1 = state_27474;var statearr_27478_27492 = state_27474__$1;(statearr_27478_27492[(2)] = null);
(statearr_27478_27492[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27475 === (3)))
{var inst_27456 = (state_27474[(7)]);var inst_27459 = console.debug("Figwheel: loaded these files");var inst_27460 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27456);var inst_27461 = cljs.core.prn_str.call(null,inst_27460);var inst_27462 = console.log(inst_27461);var inst_27463 = cljs.core.async.timeout.call(null,(10));var state_27474__$1 = (function (){var statearr_27479 = state_27474;(statearr_27479[(9)] = inst_27459);
(statearr_27479[(10)] = inst_27462);
return statearr_27479;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27474__$1,(6),inst_27463);
} else
{if((state_val_27475 === (2)))
{var inst_27456 = (state_27474[(7)]);var inst_27456__$1 = (state_27474[(2)]);var inst_27457 = cljs.core.not_empty.call(null,inst_27456__$1);var state_27474__$1 = (function (){var statearr_27480 = state_27474;(statearr_27480[(7)] = inst_27456__$1);
return statearr_27480;
})();if(cljs.core.truth_(inst_27457))
{var statearr_27481_27493 = state_27474__$1;(statearr_27481_27493[(1)] = (3));
} else
{var statearr_27482_27494 = state_27474__$1;(statearr_27482_27494[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27475 === (1)))
{var inst_27452 = before_jsload.call(null,files);var inst_27453 = figwheel.client.add_request_urls.call(null,opts,files);var inst_27454 = figwheel.client.load_all_js_files.call(null,inst_27453);var state_27474__$1 = (function (){var statearr_27483 = state_27474;(statearr_27483[(11)] = inst_27452);
return statearr_27483;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27474__$1,(2),inst_27454);
} else
{return null;
}
}
}
}
}
}
});})(c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files))
;return ((function (switch__15071__auto__,c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_27487 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27487[(0)] = state_machine__15072__auto__);
(statearr_27487[(1)] = (1));
return statearr_27487;
});
var state_machine__15072__auto____1 = (function (state_27474){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_27474);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e27488){if((e27488 instanceof Object))
{var ex__15075__auto__ = e27488;var statearr_27489_27495 = state_27474;(statearr_27489_27495[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27474);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27488;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27496 = state_27474;
state_27474 = G__27496;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_27474){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_27474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files))
})();var state__15088__auto__ = (function (){var statearr_27490 = f__15087__auto__.call(null);(statearr_27490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_27490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,map__27450,map__27450__$1,opts,on_jsload,before_jsload,map__27451,map__27451__$1,files))
);
return c__15086__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__27497,link_href){var map__27499 = p__27497;var map__27499__$1 = ((cljs.core.seq_QMARK_.call(null,map__27499))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499):map__27499);var request_url = cljs.core.get.call(null,map__27499__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,parent){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,parent){
return (function (state_27520){var state_val_27521 = (state_27520[(1)]);if((state_val_27521 === (2)))
{var inst_27517 = (state_27520[(2)]);var inst_27518 = parent.removeChild(orig_link);var state_27520__$1 = (function (){var statearr_27522 = state_27520;(statearr_27522[(7)] = inst_27517);
return statearr_27522;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27520__$1,inst_27518);
} else
{if((state_val_27521 === (1)))
{var inst_27515 = cljs.core.async.timeout.call(null,(200));var state_27520__$1 = state_27520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27520__$1,(2),inst_27515);
} else
{return null;
}
}
});})(c__15086__auto__,parent))
;return ((function (switch__15071__auto__,c__15086__auto__,parent){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_27526 = [null,null,null,null,null,null,null,null];(statearr_27526[(0)] = state_machine__15072__auto__);
(statearr_27526[(1)] = (1));
return statearr_27526;
});
var state_machine__15072__auto____1 = (function (state_27520){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_27520);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object))
{var ex__15075__auto__ = e27527;var statearr_27528_27530 = state_27520;(statearr_27528_27530[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27527;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27531 = state_27520;
state_27520 = G__27531;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_27520){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_27520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,parent))
})();var state__15088__auto__ = (function (){var statearr_27529 = f__15087__auto__.call(null);(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_27529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,parent))
);
return c__15086__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__27532){var map__27534 = p__27532;var map__27534__$1 = ((cljs.core.seq_QMARK_.call(null,map__27534))?cljs.core.apply.call(null,cljs.core.hash_map,map__27534):map__27534);var f_data = map__27534__$1;var request_url = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__27535,files_msg){var map__27557 = p__27535;var map__27557__$1 = ((cljs.core.seq_QMARK_.call(null,map__27557))?cljs.core.apply.call(null,cljs.core.hash_map,map__27557):map__27557);var opts = map__27557__$1;var on_cssload = cljs.core.get.call(null,map__27557__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__27558_27578 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__27559_27579 = null;var count__27560_27580 = (0);var i__27561_27581 = (0);while(true){
if((i__27561_27581 < count__27560_27580))
{var f_27582 = cljs.core._nth.call(null,chunk__27559_27579,i__27561_27581);figwheel.client.reload_css_file.call(null,f_27582);
{
var G__27583 = seq__27558_27578;
var G__27584 = chunk__27559_27579;
var G__27585 = count__27560_27580;
var G__27586 = (i__27561_27581 + (1));
seq__27558_27578 = G__27583;
chunk__27559_27579 = G__27584;
count__27560_27580 = G__27585;
i__27561_27581 = G__27586;
continue;
}
} else
{var temp__4126__auto___27587 = cljs.core.seq.call(null,seq__27558_27578);if(temp__4126__auto___27587)
{var seq__27558_27588__$1 = temp__4126__auto___27587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27558_27588__$1))
{var c__13316__auto___27589 = cljs.core.chunk_first.call(null,seq__27558_27588__$1);{
var G__27590 = cljs.core.chunk_rest.call(null,seq__27558_27588__$1);
var G__27591 = c__13316__auto___27589;
var G__27592 = cljs.core.count.call(null,c__13316__auto___27589);
var G__27593 = (0);
seq__27558_27578 = G__27590;
chunk__27559_27579 = G__27591;
count__27560_27580 = G__27592;
i__27561_27581 = G__27593;
continue;
}
} else
{var f_27594 = cljs.core.first.call(null,seq__27558_27588__$1);figwheel.client.reload_css_file.call(null,f_27594);
{
var G__27595 = cljs.core.next.call(null,seq__27558_27588__$1);
var G__27596 = null;
var G__27597 = (0);
var G__27598 = (0);
seq__27558_27578 = G__27595;
chunk__27559_27579 = G__27596;
count__27560_27580 = G__27597;
i__27561_27581 = G__27598;
continue;
}
}
} else
{}
}
break;
}
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload){
return (function (state_27568){var state_val_27569 = (state_27568[(1)]);if((state_val_27569 === (2)))
{var inst_27564 = (state_27568[(2)]);var inst_27565 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_27566 = on_cssload.call(null,inst_27565);var state_27568__$1 = (function (){var statearr_27570 = state_27568;(statearr_27570[(7)] = inst_27564);
return statearr_27570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27568__$1,inst_27566);
} else
{if((state_val_27569 === (1)))
{var inst_27562 = cljs.core.async.timeout.call(null,(100));var state_27568__$1 = state_27568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(2),inst_27562);
} else
{return null;
}
}
});})(c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload))
;return ((function (switch__15071__auto__,c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_27574 = [null,null,null,null,null,null,null,null];(statearr_27574[(0)] = state_machine__15072__auto__);
(statearr_27574[(1)] = (1));
return statearr_27574;
});
var state_machine__15072__auto____1 = (function (state_27568){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_27568);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e27575){if((e27575 instanceof Object))
{var ex__15075__auto__ = e27575;var statearr_27576_27599 = state_27568;(statearr_27576_27599[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27600 = state_27568;
state_27568 = G__27600;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload))
})();var state__15088__auto__ = (function (){var statearr_27577 = f__15087__auto__.call(null);(statearr_27577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_27577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,map__27557,map__27557__$1,opts,on_cssload))
);
return c__15086__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__27601){var map__27606 = p__27601;var map__27606__$1 = ((cljs.core.seq_QMARK_.call(null,map__27606))?cljs.core.apply.call(null,cljs.core.hash_map,map__27606):map__27606);var opts = map__27606__$1;var on_compile_fail = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__27607 = cljs.core._EQ_;var expr__27608 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__27607.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__27608)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27607.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__27608)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__27607.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27608)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__27606,map__27606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27613 = {"detail":url};return obj27613;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__27614){var map__27616 = p__27614;var map__27616__$1 = ((cljs.core.seq_QMARK_.call(null,map__27616))?cljs.core.apply.call(null,cljs.core.hash_map,map__27616):map__27616);var class$ = cljs.core.get.call(null,map__27616__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__27616__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__27617){var map__27623 = p__27617;var map__27623__$1 = ((cljs.core.seq_QMARK_.call(null,map__27623))?cljs.core.apply.call(null,cljs.core.hash_map,map__27623):map__27623);var ed = map__27623__$1;var exception_data = cljs.core.get.call(null,map__27623__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__27623__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__27624_27628 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__27625_27629 = null;var count__27626_27630 = (0);var i__27627_27631 = (0);while(true){
if((i__27627_27631 < count__27626_27630))
{var msg_27632 = cljs.core._nth.call(null,chunk__27625_27629,i__27627_27631);console.log(msg_27632);
{
var G__27633 = seq__27624_27628;
var G__27634 = chunk__27625_27629;
var G__27635 = count__27626_27630;
var G__27636 = (i__27627_27631 + (1));
seq__27624_27628 = G__27633;
chunk__27625_27629 = G__27634;
count__27626_27630 = G__27635;
i__27627_27631 = G__27636;
continue;
}
} else
{var temp__4126__auto___27637 = cljs.core.seq.call(null,seq__27624_27628);if(temp__4126__auto___27637)
{var seq__27624_27638__$1 = temp__4126__auto___27637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27624_27638__$1))
{var c__13316__auto___27639 = cljs.core.chunk_first.call(null,seq__27624_27638__$1);{
var G__27640 = cljs.core.chunk_rest.call(null,seq__27624_27638__$1);
var G__27641 = c__13316__auto___27639;
var G__27642 = cljs.core.count.call(null,c__13316__auto___27639);
var G__27643 = (0);
seq__27624_27628 = G__27640;
chunk__27625_27629 = G__27641;
count__27626_27630 = G__27642;
i__27627_27631 = G__27643;
continue;
}
} else
{var msg_27644 = cljs.core.first.call(null,seq__27624_27638__$1);console.log(msg_27644);
{
var G__27645 = cljs.core.next.call(null,seq__27624_27638__$1);
var G__27646 = null;
var G__27647 = (0);
var G__27648 = (0);
seq__27624_27628 = G__27645;
chunk__27625_27629 = G__27646;
count__27626_27630 = G__27647;
i__27627_27631 = G__27648;
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
var watch_and_reload__delegate = function (p__27649){var map__27651 = p__27649;var map__27651__$1 = ((cljs.core.seq_QMARK_.call(null,map__27651))?cljs.core.apply.call(null,cljs.core.hash_map,map__27651):map__27651);var opts = map__27651__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__27649 = null;if (arguments.length > 0) {
  p__27649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__27649);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__27652){
var p__27649 = cljs.core.seq(arglist__27652);
return watch_and_reload__delegate(p__27649);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map