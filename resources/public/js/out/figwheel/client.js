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
var log__delegate = function (p__25040,args){var map__25042 = p__25040;var map__25042__$1 = ((cljs.core.seq_QMARK_.call(null,map__25042))?cljs.core.apply.call(null,cljs.core.hash_map,map__25042):map__25042);var debug = cljs.core.get.call(null,map__25042__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__25040,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__25040,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25043){
var p__25040 = cljs.core.first(arglist__25043);
var args = cljs.core.rest(arglist__25043);
return log__delegate(p__25040,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25044){var map__25046 = p__25044;var map__25046__$1 = ((cljs.core.seq_QMARK_.call(null,map__25046))?cljs.core.apply.call(null,cljs.core.hash_map,map__25046):map__25046);var websocket_url = cljs.core.get.call(null,map__25046__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__25047,callback){var map__25049 = p__25047;var map__25049__$1 = ((cljs.core.seq_QMARK_.call(null,map__25049))?cljs.core.apply.call(null,cljs.core.hash_map,map__25049):map__25049);var msg = map__25049__$1;var dependency_file = cljs.core.get.call(null,map__25049__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__25049__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__25049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25049,map__25049__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25049,map__25049__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__25050,p__25051){var map__25054 = p__25050;var map__25054__$1 = ((cljs.core.seq_QMARK_.call(null,map__25054))?cljs.core.apply.call(null,cljs.core.hash_map,map__25054):map__25054);var opts = map__25054__$1;var url_rewriter = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__25055 = p__25051;var map__25055__$1 = ((cljs.core.seq_QMARK_.call(null,map__25055))?cljs.core.apply.call(null,cljs.core.hash_map,map__25055):map__25055);var d = map__25055__$1;var file = cljs.core.get.call(null,map__25055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25056,p__25057){var map__25099 = p__25056;var map__25099__$1 = ((cljs.core.seq_QMARK_.call(null,map__25099))?cljs.core.apply.call(null,cljs.core.hash_map,map__25099):map__25099);var opts = map__25099__$1;var on_jsload = cljs.core.get.call(null,map__25099__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__25099__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__25100 = p__25057;var map__25100__$1 = ((cljs.core.seq_QMARK_.call(null,map__25100))?cljs.core.apply.call(null,cljs.core.hash_map,map__25100):map__25100);var files = cljs.core.get.call(null,map__25100__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files){
return (function (state_25123){var state_val_25124 = (state_25123[(1)]);if((state_val_25124 === (6)))
{var inst_25105 = (state_25123[(7)]);var inst_25114 = (state_25123[(2)]);var inst_25115 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25116 = [inst_25105];var inst_25117 = (new cljs.core.PersistentVector(null,1,(5),inst_25115,inst_25116,null));var inst_25118 = cljs.core.apply.call(null,on_jsload,inst_25117);var state_25123__$1 = (function (){var statearr_25125 = state_25123;(statearr_25125[(8)] = inst_25114);
return statearr_25125;
})();var statearr_25126_25140 = state_25123__$1;(statearr_25126_25140[(2)] = inst_25118);
(statearr_25126_25140[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25124 === (5)))
{var inst_25121 = (state_25123[(2)]);var state_25123__$1 = state_25123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25123__$1,inst_25121);
} else
{if((state_val_25124 === (4)))
{var state_25123__$1 = state_25123;var statearr_25127_25141 = state_25123__$1;(statearr_25127_25141[(2)] = null);
(statearr_25127_25141[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25124 === (3)))
{var inst_25105 = (state_25123[(7)]);var inst_25108 = console.debug("Figwheel: loaded these files");var inst_25109 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25105);var inst_25110 = cljs.core.prn_str.call(null,inst_25109);var inst_25111 = console.log(inst_25110);var inst_25112 = cljs.core.async.timeout.call(null,(10));var state_25123__$1 = (function (){var statearr_25128 = state_25123;(statearr_25128[(9)] = inst_25108);
(statearr_25128[(10)] = inst_25111);
return statearr_25128;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25123__$1,(6),inst_25112);
} else
{if((state_val_25124 === (2)))
{var inst_25105 = (state_25123[(7)]);var inst_25105__$1 = (state_25123[(2)]);var inst_25106 = cljs.core.not_empty.call(null,inst_25105__$1);var state_25123__$1 = (function (){var statearr_25129 = state_25123;(statearr_25129[(7)] = inst_25105__$1);
return statearr_25129;
})();if(cljs.core.truth_(inst_25106))
{var statearr_25130_25142 = state_25123__$1;(statearr_25130_25142[(1)] = (3));
} else
{var statearr_25131_25143 = state_25123__$1;(statearr_25131_25143[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25124 === (1)))
{var inst_25101 = before_jsload.call(null,files);var inst_25102 = figwheel.client.add_request_urls.call(null,opts,files);var inst_25103 = figwheel.client.load_all_js_files.call(null,inst_25102);var state_25123__$1 = (function (){var statearr_25132 = state_25123;(statearr_25132[(11)] = inst_25101);
return statearr_25132;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25123__$1,(2),inst_25103);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25136 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25136[(0)] = state_machine__15975__auto__);
(statearr_25136[(1)] = (1));
return statearr_25136;
});
var state_machine__15975__auto____1 = (function (state_25123){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25123);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25137){if((e25137 instanceof Object))
{var ex__15978__auto__ = e25137;var statearr_25138_25144 = state_25123;(statearr_25138_25144[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25145 = state_25123;
state_25123 = G__25145;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25123){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files))
})();var state__15991__auto__ = (function (){var statearr_25139 = f__15990__auto__.call(null);(statearr_25139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__25099,map__25099__$1,opts,on_jsload,before_jsload,map__25100,map__25100__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25146,link_href){var map__25148 = p__25146;var map__25148__$1 = ((cljs.core.seq_QMARK_.call(null,map__25148))?cljs.core.apply.call(null,cljs.core.hash_map,map__25148):map__25148);var request_url = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_25169){var state_val_25170 = (state_25169[(1)]);if((state_val_25170 === (2)))
{var inst_25166 = (state_25169[(2)]);var inst_25167 = parent.removeChild(orig_link);var state_25169__$1 = (function (){var statearr_25171 = state_25169;(statearr_25171[(7)] = inst_25166);
return statearr_25171;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25169__$1,inst_25167);
} else
{if((state_val_25170 === (1)))
{var inst_25164 = cljs.core.async.timeout.call(null,(200));var state_25169__$1 = state_25169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25169__$1,(2),inst_25164);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25175 = [null,null,null,null,null,null,null,null];(statearr_25175[(0)] = state_machine__15975__auto__);
(statearr_25175[(1)] = (1));
return statearr_25175;
});
var state_machine__15975__auto____1 = (function (state_25169){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25169);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object))
{var ex__15978__auto__ = e25176;var statearr_25177_25179 = state_25169;(statearr_25177_25179[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25180 = state_25169;
state_25169 = G__25180;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25169){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_25178 = f__15990__auto__.call(null);(statearr_25178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25178;
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
figwheel.client.reload_css_file = (function reload_css_file(p__25181){var map__25183 = p__25181;var map__25183__$1 = ((cljs.core.seq_QMARK_.call(null,map__25183))?cljs.core.apply.call(null,cljs.core.hash_map,map__25183):map__25183);var f_data = map__25183__$1;var request_url = cljs.core.get.call(null,map__25183__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__25183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25184,files_msg){var map__25206 = p__25184;var map__25206__$1 = ((cljs.core.seq_QMARK_.call(null,map__25206))?cljs.core.apply.call(null,cljs.core.hash_map,map__25206):map__25206);var opts = map__25206__$1;var on_cssload = cljs.core.get.call(null,map__25206__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25207_25227 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25208_25228 = null;var count__25209_25229 = (0);var i__25210_25230 = (0);while(true){
if((i__25210_25230 < count__25209_25229))
{var f_25231 = cljs.core._nth.call(null,chunk__25208_25228,i__25210_25230);figwheel.client.reload_css_file.call(null,f_25231);
{
var G__25232 = seq__25207_25227;
var G__25233 = chunk__25208_25228;
var G__25234 = count__25209_25229;
var G__25235 = (i__25210_25230 + (1));
seq__25207_25227 = G__25232;
chunk__25208_25228 = G__25233;
count__25209_25229 = G__25234;
i__25210_25230 = G__25235;
continue;
}
} else
{var temp__4126__auto___25236 = cljs.core.seq.call(null,seq__25207_25227);if(temp__4126__auto___25236)
{var seq__25207_25237__$1 = temp__4126__auto___25236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25207_25237__$1))
{var c__13316__auto___25238 = cljs.core.chunk_first.call(null,seq__25207_25237__$1);{
var G__25239 = cljs.core.chunk_rest.call(null,seq__25207_25237__$1);
var G__25240 = c__13316__auto___25238;
var G__25241 = cljs.core.count.call(null,c__13316__auto___25238);
var G__25242 = (0);
seq__25207_25227 = G__25239;
chunk__25208_25228 = G__25240;
count__25209_25229 = G__25241;
i__25210_25230 = G__25242;
continue;
}
} else
{var f_25243 = cljs.core.first.call(null,seq__25207_25237__$1);figwheel.client.reload_css_file.call(null,f_25243);
{
var G__25244 = cljs.core.next.call(null,seq__25207_25237__$1);
var G__25245 = null;
var G__25246 = (0);
var G__25247 = (0);
seq__25207_25227 = G__25244;
chunk__25208_25228 = G__25245;
count__25209_25229 = G__25246;
i__25210_25230 = G__25247;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload){
return (function (state_25217){var state_val_25218 = (state_25217[(1)]);if((state_val_25218 === (2)))
{var inst_25213 = (state_25217[(2)]);var inst_25214 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25215 = on_cssload.call(null,inst_25214);var state_25217__$1 = (function (){var statearr_25219 = state_25217;(statearr_25219[(7)] = inst_25213);
return statearr_25219;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25217__$1,inst_25215);
} else
{if((state_val_25218 === (1)))
{var inst_25211 = cljs.core.async.timeout.call(null,(100));var state_25217__$1 = state_25217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25217__$1,(2),inst_25211);
} else
{return null;
}
}
});})(c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_25223 = [null,null,null,null,null,null,null,null];(statearr_25223[(0)] = state_machine__15975__auto__);
(statearr_25223[(1)] = (1));
return statearr_25223;
});
var state_machine__15975__auto____1 = (function (state_25217){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_25217);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e25224){if((e25224 instanceof Object))
{var ex__15978__auto__ = e25224;var statearr_25225_25248 = state_25217;(statearr_25225_25248[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25249 = state_25217;
state_25217 = G__25249;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_25217){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_25217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_25226 = f__15990__auto__.call(null);(statearr_25226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_25226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__25206,map__25206__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25250){var map__25255 = p__25250;var map__25255__$1 = ((cljs.core.seq_QMARK_.call(null,map__25255))?cljs.core.apply.call(null,cljs.core.hash_map,map__25255):map__25255);var opts = map__25255__$1;var on_compile_fail = cljs.core.get.call(null,map__25255__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25255__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25255__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25255__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25256 = cljs.core._EQ_;var expr__25257 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25256.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25257)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25256.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25257)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25256.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25257)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25255,map__25255__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25262 = {"detail":url};return obj25262;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25263){var map__25265 = p__25263;var map__25265__$1 = ((cljs.core.seq_QMARK_.call(null,map__25265))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265):map__25265);var class$ = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25266){var map__25272 = p__25266;var map__25272__$1 = ((cljs.core.seq_QMARK_.call(null,map__25272))?cljs.core.apply.call(null,cljs.core.hash_map,map__25272):map__25272);var ed = map__25272__$1;var exception_data = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25273_25277 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25274_25278 = null;var count__25275_25279 = (0);var i__25276_25280 = (0);while(true){
if((i__25276_25280 < count__25275_25279))
{var msg_25281 = cljs.core._nth.call(null,chunk__25274_25278,i__25276_25280);console.log(msg_25281);
{
var G__25282 = seq__25273_25277;
var G__25283 = chunk__25274_25278;
var G__25284 = count__25275_25279;
var G__25285 = (i__25276_25280 + (1));
seq__25273_25277 = G__25282;
chunk__25274_25278 = G__25283;
count__25275_25279 = G__25284;
i__25276_25280 = G__25285;
continue;
}
} else
{var temp__4126__auto___25286 = cljs.core.seq.call(null,seq__25273_25277);if(temp__4126__auto___25286)
{var seq__25273_25287__$1 = temp__4126__auto___25286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25273_25287__$1))
{var c__13316__auto___25288 = cljs.core.chunk_first.call(null,seq__25273_25287__$1);{
var G__25289 = cljs.core.chunk_rest.call(null,seq__25273_25287__$1);
var G__25290 = c__13316__auto___25288;
var G__25291 = cljs.core.count.call(null,c__13316__auto___25288);
var G__25292 = (0);
seq__25273_25277 = G__25289;
chunk__25274_25278 = G__25290;
count__25275_25279 = G__25291;
i__25276_25280 = G__25292;
continue;
}
} else
{var msg_25293 = cljs.core.first.call(null,seq__25273_25287__$1);console.log(msg_25293);
{
var G__25294 = cljs.core.next.call(null,seq__25273_25287__$1);
var G__25295 = null;
var G__25296 = (0);
var G__25297 = (0);
seq__25273_25277 = G__25294;
chunk__25274_25278 = G__25295;
count__25275_25279 = G__25296;
i__25276_25280 = G__25297;
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
var watch_and_reload__delegate = function (p__25298){var map__25300 = p__25298;var map__25300__$1 = ((cljs.core.seq_QMARK_.call(null,map__25300))?cljs.core.apply.call(null,cljs.core.hash_map,map__25300):map__25300);var opts = map__25300__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25298 = null;if (arguments.length > 0) {
  p__25298 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25298);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25301){
var p__25298 = cljs.core.seq(arglist__25301);
return watch_and_reload__delegate(p__25298);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map