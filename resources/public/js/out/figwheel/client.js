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
var log__delegate = function (p__25011,args){var map__25013 = p__25011;var map__25013__$1 = ((cljs.core.seq_QMARK_.call(null,map__25013))?cljs.core.apply.call(null,cljs.core.hash_map,map__25013):map__25013);var debug = cljs.core.get.call(null,map__25013__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__25011,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__25011,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25014){
var p__25011 = cljs.core.first(arglist__25014);
var args = cljs.core.rest(arglist__25014);
return log__delegate(p__25011,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25015){var map__25017 = p__25015;var map__25017__$1 = ((cljs.core.seq_QMARK_.call(null,map__25017))?cljs.core.apply.call(null,cljs.core.hash_map,map__25017):map__25017);var websocket_url = cljs.core.get.call(null,map__25017__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__25018,callback){var map__25020 = p__25018;var map__25020__$1 = ((cljs.core.seq_QMARK_.call(null,map__25020))?cljs.core.apply.call(null,cljs.core.hash_map,map__25020):map__25020);var msg = map__25020__$1;var dependency_file = cljs.core.get.call(null,map__25020__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__25020__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__25020__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25020,map__25020__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25020,map__25020__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__25021,p__25022){var map__25025 = p__25021;var map__25025__$1 = ((cljs.core.seq_QMARK_.call(null,map__25025))?cljs.core.apply.call(null,cljs.core.hash_map,map__25025):map__25025);var opts = map__25025__$1;var url_rewriter = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__25026 = p__25022;var map__25026__$1 = ((cljs.core.seq_QMARK_.call(null,map__25026))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);var d = map__25026__$1;var file = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25027,p__25028){var map__25070 = p__25027;var map__25070__$1 = ((cljs.core.seq_QMARK_.call(null,map__25070))?cljs.core.apply.call(null,cljs.core.hash_map,map__25070):map__25070);var opts = map__25070__$1;var on_jsload = cljs.core.get.call(null,map__25070__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__25070__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__25071 = p__25028;var map__25071__$1 = ((cljs.core.seq_QMARK_.call(null,map__25071))?cljs.core.apply.call(null,cljs.core.hash_map,map__25071):map__25071);var files = cljs.core.get.call(null,map__25071__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files){
return (function (state_25094){var state_val_25095 = (state_25094[(1)]);if((state_val_25095 === (6)))
{var inst_25076 = (state_25094[(7)]);var inst_25085 = (state_25094[(2)]);var inst_25086 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25087 = [inst_25076];var inst_25088 = (new cljs.core.PersistentVector(null,1,(5),inst_25086,inst_25087,null));var inst_25089 = cljs.core.apply.call(null,on_jsload,inst_25088);var state_25094__$1 = (function (){var statearr_25096 = state_25094;(statearr_25096[(8)] = inst_25085);
return statearr_25096;
})();var statearr_25097_25111 = state_25094__$1;(statearr_25097_25111[(2)] = inst_25089);
(statearr_25097_25111[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25095 === (5)))
{var inst_25092 = (state_25094[(2)]);var state_25094__$1 = state_25094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25094__$1,inst_25092);
} else
{if((state_val_25095 === (4)))
{var state_25094__$1 = state_25094;var statearr_25098_25112 = state_25094__$1;(statearr_25098_25112[(2)] = null);
(statearr_25098_25112[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25095 === (3)))
{var inst_25076 = (state_25094[(7)]);var inst_25079 = console.debug("Figwheel: loaded these files");var inst_25080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25076);var inst_25081 = cljs.core.prn_str.call(null,inst_25080);var inst_25082 = console.log(inst_25081);var inst_25083 = cljs.core.async.timeout.call(null,(10));var state_25094__$1 = (function (){var statearr_25099 = state_25094;(statearr_25099[(9)] = inst_25079);
(statearr_25099[(10)] = inst_25082);
return statearr_25099;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(6),inst_25083);
} else
{if((state_val_25095 === (2)))
{var inst_25076 = (state_25094[(7)]);var inst_25076__$1 = (state_25094[(2)]);var inst_25077 = cljs.core.not_empty.call(null,inst_25076__$1);var state_25094__$1 = (function (){var statearr_25100 = state_25094;(statearr_25100[(7)] = inst_25076__$1);
return statearr_25100;
})();if(cljs.core.truth_(inst_25077))
{var statearr_25101_25113 = state_25094__$1;(statearr_25101_25113[(1)] = (3));
} else
{var statearr_25102_25114 = state_25094__$1;(statearr_25102_25114[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25095 === (1)))
{var inst_25072 = before_jsload.call(null,files);var inst_25073 = figwheel.client.add_request_urls.call(null,opts,files);var inst_25074 = figwheel.client.load_all_js_files.call(null,inst_25073);var state_25094__$1 = (function (){var statearr_25103 = state_25094;(statearr_25103[(11)] = inst_25072);
return statearr_25103;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(2),inst_25074);
} else
{return null;
}
}
}
}
}
}
});})(c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files))
;return ((function (switch__15072__auto__,c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25107[(0)] = state_machine__15073__auto__);
(statearr_25107[(1)] = (1));
return statearr_25107;
});
var state_machine__15073__auto____1 = (function (state_25094){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25094);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25108){if((e25108 instanceof Object))
{var ex__15076__auto__ = e25108;var statearr_25109_25115 = state_25094;(statearr_25109_25115[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25108;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25116 = state_25094;
state_25094 = G__25116;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25094){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files))
})();var state__15089__auto__ = (function (){var statearr_25110 = f__15088__auto__.call(null);(statearr_25110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,map__25070,map__25070__$1,opts,on_jsload,before_jsload,map__25071,map__25071__$1,files))
);
return c__15087__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25117,link_href){var map__25119 = p__25117;var map__25119__$1 = ((cljs.core.seq_QMARK_.call(null,map__25119))?cljs.core.apply.call(null,cljs.core.hash_map,map__25119):map__25119);var request_url = cljs.core.get.call(null,map__25119__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25119__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_25140){var state_val_25141 = (state_25140[(1)]);if((state_val_25141 === (2)))
{var inst_25137 = (state_25140[(2)]);var inst_25138 = parent.removeChild(orig_link);var state_25140__$1 = (function (){var statearr_25142 = state_25140;(statearr_25142[(7)] = inst_25137);
return statearr_25142;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25140__$1,inst_25138);
} else
{if((state_val_25141 === (1)))
{var inst_25135 = cljs.core.async.timeout.call(null,(200));var state_25140__$1 = state_25140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25140__$1,(2),inst_25135);
} else
{return null;
}
}
});})(c__15087__auto__,parent))
;return ((function (switch__15072__auto__,c__15087__auto__,parent){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25146 = [null,null,null,null,null,null,null,null];(statearr_25146[(0)] = state_machine__15073__auto__);
(statearr_25146[(1)] = (1));
return statearr_25146;
});
var state_machine__15073__auto____1 = (function (state_25140){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25140);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25147){if((e25147 instanceof Object))
{var ex__15076__auto__ = e25147;var statearr_25148_25150 = state_25140;(statearr_25148_25150[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25147;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25151 = state_25140;
state_25140 = G__25151;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25140){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,parent))
})();var state__15089__auto__ = (function (){var statearr_25149 = f__15088__auto__.call(null);(statearr_25149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25149;
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
figwheel.client.reload_css_file = (function reload_css_file(p__25152){var map__25154 = p__25152;var map__25154__$1 = ((cljs.core.seq_QMARK_.call(null,map__25154))?cljs.core.apply.call(null,cljs.core.hash_map,map__25154):map__25154);var f_data = map__25154__$1;var request_url = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25155,files_msg){var map__25177 = p__25155;var map__25177__$1 = ((cljs.core.seq_QMARK_.call(null,map__25177))?cljs.core.apply.call(null,cljs.core.hash_map,map__25177):map__25177);var opts = map__25177__$1;var on_cssload = cljs.core.get.call(null,map__25177__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25178_25198 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25179_25199 = null;var count__25180_25200 = (0);var i__25181_25201 = (0);while(true){
if((i__25181_25201 < count__25180_25200))
{var f_25202 = cljs.core._nth.call(null,chunk__25179_25199,i__25181_25201);figwheel.client.reload_css_file.call(null,f_25202);
{
var G__25203 = seq__25178_25198;
var G__25204 = chunk__25179_25199;
var G__25205 = count__25180_25200;
var G__25206 = (i__25181_25201 + (1));
seq__25178_25198 = G__25203;
chunk__25179_25199 = G__25204;
count__25180_25200 = G__25205;
i__25181_25201 = G__25206;
continue;
}
} else
{var temp__4126__auto___25207 = cljs.core.seq.call(null,seq__25178_25198);if(temp__4126__auto___25207)
{var seq__25178_25208__$1 = temp__4126__auto___25207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25178_25208__$1))
{var c__13316__auto___25209 = cljs.core.chunk_first.call(null,seq__25178_25208__$1);{
var G__25210 = cljs.core.chunk_rest.call(null,seq__25178_25208__$1);
var G__25211 = c__13316__auto___25209;
var G__25212 = cljs.core.count.call(null,c__13316__auto___25209);
var G__25213 = (0);
seq__25178_25198 = G__25210;
chunk__25179_25199 = G__25211;
count__25180_25200 = G__25212;
i__25181_25201 = G__25213;
continue;
}
} else
{var f_25214 = cljs.core.first.call(null,seq__25178_25208__$1);figwheel.client.reload_css_file.call(null,f_25214);
{
var G__25215 = cljs.core.next.call(null,seq__25178_25208__$1);
var G__25216 = null;
var G__25217 = (0);
var G__25218 = (0);
seq__25178_25198 = G__25215;
chunk__25179_25199 = G__25216;
count__25180_25200 = G__25217;
i__25181_25201 = G__25218;
continue;
}
}
} else
{}
}
break;
}
var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload){
return (function (state_25188){var state_val_25189 = (state_25188[(1)]);if((state_val_25189 === (2)))
{var inst_25184 = (state_25188[(2)]);var inst_25185 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25186 = on_cssload.call(null,inst_25185);var state_25188__$1 = (function (){var statearr_25190 = state_25188;(statearr_25190[(7)] = inst_25184);
return statearr_25190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else
{if((state_val_25189 === (1)))
{var inst_25182 = cljs.core.async.timeout.call(null,(100));var state_25188__$1 = state_25188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(2),inst_25182);
} else
{return null;
}
}
});})(c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload))
;return ((function (switch__15072__auto__,c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_25194 = [null,null,null,null,null,null,null,null];(statearr_25194[(0)] = state_machine__15073__auto__);
(statearr_25194[(1)] = (1));
return statearr_25194;
});
var state_machine__15073__auto____1 = (function (state_25188){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_25188);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e25195){if((e25195 instanceof Object))
{var ex__15076__auto__ = e25195;var statearr_25196_25219 = state_25188;(statearr_25196_25219[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25195;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25220 = state_25188;
state_25188 = G__25220;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload))
})();var state__15089__auto__ = (function (){var statearr_25197 = f__15088__auto__.call(null);(statearr_25197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_25197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,map__25177,map__25177__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25221){var map__25226 = p__25221;var map__25226__$1 = ((cljs.core.seq_QMARK_.call(null,map__25226))?cljs.core.apply.call(null,cljs.core.hash_map,map__25226):map__25226);var opts = map__25226__$1;var on_compile_fail = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25227 = cljs.core._EQ_;var expr__25228 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25227.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25228)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25227.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25228)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25227.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25228)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25226,map__25226__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25233 = {"detail":url};return obj25233;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25234){var map__25236 = p__25234;var map__25236__$1 = ((cljs.core.seq_QMARK_.call(null,map__25236))?cljs.core.apply.call(null,cljs.core.hash_map,map__25236):map__25236);var class$ = cljs.core.get.call(null,map__25236__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25236__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25237){var map__25243 = p__25237;var map__25243__$1 = ((cljs.core.seq_QMARK_.call(null,map__25243))?cljs.core.apply.call(null,cljs.core.hash_map,map__25243):map__25243);var ed = map__25243__$1;var exception_data = cljs.core.get.call(null,map__25243__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25243__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25244_25248 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25245_25249 = null;var count__25246_25250 = (0);var i__25247_25251 = (0);while(true){
if((i__25247_25251 < count__25246_25250))
{var msg_25252 = cljs.core._nth.call(null,chunk__25245_25249,i__25247_25251);console.log(msg_25252);
{
var G__25253 = seq__25244_25248;
var G__25254 = chunk__25245_25249;
var G__25255 = count__25246_25250;
var G__25256 = (i__25247_25251 + (1));
seq__25244_25248 = G__25253;
chunk__25245_25249 = G__25254;
count__25246_25250 = G__25255;
i__25247_25251 = G__25256;
continue;
}
} else
{var temp__4126__auto___25257 = cljs.core.seq.call(null,seq__25244_25248);if(temp__4126__auto___25257)
{var seq__25244_25258__$1 = temp__4126__auto___25257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25244_25258__$1))
{var c__13316__auto___25259 = cljs.core.chunk_first.call(null,seq__25244_25258__$1);{
var G__25260 = cljs.core.chunk_rest.call(null,seq__25244_25258__$1);
var G__25261 = c__13316__auto___25259;
var G__25262 = cljs.core.count.call(null,c__13316__auto___25259);
var G__25263 = (0);
seq__25244_25248 = G__25260;
chunk__25245_25249 = G__25261;
count__25246_25250 = G__25262;
i__25247_25251 = G__25263;
continue;
}
} else
{var msg_25264 = cljs.core.first.call(null,seq__25244_25258__$1);console.log(msg_25264);
{
var G__25265 = cljs.core.next.call(null,seq__25244_25258__$1);
var G__25266 = null;
var G__25267 = (0);
var G__25268 = (0);
seq__25244_25248 = G__25265;
chunk__25245_25249 = G__25266;
count__25246_25250 = G__25267;
i__25247_25251 = G__25268;
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
var watch_and_reload__delegate = function (p__25269){var map__25271 = p__25269;var map__25271__$1 = ((cljs.core.seq_QMARK_.call(null,map__25271))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271):map__25271);var opts = map__25271__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25269 = null;if (arguments.length > 0) {
  p__25269 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25269);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25272){
var p__25269 = cljs.core.seq(arglist__25272);
return watch_and_reload__delegate(p__25269);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map