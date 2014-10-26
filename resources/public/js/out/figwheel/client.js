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
var log__delegate = function (p__31051,args){var map__31053 = p__31051;var map__31053__$1 = ((cljs.core.seq_QMARK_.call(null,map__31053))?cljs.core.apply.call(null,cljs.core.hash_map,map__31053):map__31053);var debug = cljs.core.get.call(null,map__31053__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31051,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31051,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31054){
var p__31051 = cljs.core.first(arglist__31054);
var args = cljs.core.rest(arglist__31054);
return log__delegate(p__31051,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31055){var map__31057 = p__31055;var map__31057__$1 = ((cljs.core.seq_QMARK_.call(null,map__31057))?cljs.core.apply.call(null,cljs.core.hash_map,map__31057):map__31057);var websocket_url = cljs.core.get.call(null,map__31057__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31058,callback){var map__31060 = p__31058;var map__31060__$1 = ((cljs.core.seq_QMARK_.call(null,map__31060))?cljs.core.apply.call(null,cljs.core.hash_map,map__31060):map__31060);var msg = map__31060__$1;var dependency_file = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31060,map__31060__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31060,map__31060__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31061,p__31062){var map__31065 = p__31061;var map__31065__$1 = ((cljs.core.seq_QMARK_.call(null,map__31065))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);var opts = map__31065__$1;var url_rewriter = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31066 = p__31062;var map__31066__$1 = ((cljs.core.seq_QMARK_.call(null,map__31066))?cljs.core.apply.call(null,cljs.core.hash_map,map__31066):map__31066);var d = map__31066__$1;var file = cljs.core.get.call(null,map__31066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31067,p__31068){var map__31110 = p__31067;var map__31110__$1 = ((cljs.core.seq_QMARK_.call(null,map__31110))?cljs.core.apply.call(null,cljs.core.hash_map,map__31110):map__31110);var opts = map__31110__$1;var on_jsload = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31111 = p__31068;var map__31111__$1 = ((cljs.core.seq_QMARK_.call(null,map__31111))?cljs.core.apply.call(null,cljs.core.hash_map,map__31111):map__31111);var files = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files){
return (function (state_31134){var state_val_31135 = (state_31134[(1)]);if((state_val_31135 === (6)))
{var inst_31116 = (state_31134[(7)]);var inst_31125 = (state_31134[(2)]);var inst_31126 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31127 = [inst_31116];var inst_31128 = (new cljs.core.PersistentVector(null,1,(5),inst_31126,inst_31127,null));var inst_31129 = cljs.core.apply.call(null,on_jsload,inst_31128);var state_31134__$1 = (function (){var statearr_31136 = state_31134;(statearr_31136[(8)] = inst_31125);
return statearr_31136;
})();var statearr_31137_31151 = state_31134__$1;(statearr_31137_31151[(2)] = inst_31129);
(statearr_31137_31151[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31135 === (5)))
{var inst_31132 = (state_31134[(2)]);var state_31134__$1 = state_31134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31134__$1,inst_31132);
} else
{if((state_val_31135 === (4)))
{var state_31134__$1 = state_31134;var statearr_31138_31152 = state_31134__$1;(statearr_31138_31152[(2)] = null);
(statearr_31138_31152[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31135 === (3)))
{var inst_31116 = (state_31134[(7)]);var inst_31119 = console.debug("Figwheel: loaded these files");var inst_31120 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31116);var inst_31121 = cljs.core.prn_str.call(null,inst_31120);var inst_31122 = console.log(inst_31121);var inst_31123 = cljs.core.async.timeout.call(null,(10));var state_31134__$1 = (function (){var statearr_31139 = state_31134;(statearr_31139[(9)] = inst_31122);
(statearr_31139[(10)] = inst_31119);
return statearr_31139;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31134__$1,(6),inst_31123);
} else
{if((state_val_31135 === (2)))
{var inst_31116 = (state_31134[(7)]);var inst_31116__$1 = (state_31134[(2)]);var inst_31117 = cljs.core.not_empty.call(null,inst_31116__$1);var state_31134__$1 = (function (){var statearr_31140 = state_31134;(statearr_31140[(7)] = inst_31116__$1);
return statearr_31140;
})();if(cljs.core.truth_(inst_31117))
{var statearr_31141_31153 = state_31134__$1;(statearr_31141_31153[(1)] = (3));
} else
{var statearr_31142_31154 = state_31134__$1;(statearr_31142_31154[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31135 === (1)))
{var inst_31112 = before_jsload.call(null,files);var inst_31113 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31114 = figwheel.client.load_all_js_files.call(null,inst_31113);var state_31134__$1 = (function (){var statearr_31143 = state_31134;(statearr_31143[(11)] = inst_31112);
return statearr_31143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31134__$1,(2),inst_31114);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31147 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31147[(0)] = state_machine__15975__auto__);
(statearr_31147[(1)] = (1));
return statearr_31147;
});
var state_machine__15975__auto____1 = (function (state_31134){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31134);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31148){if((e31148 instanceof Object))
{var ex__15978__auto__ = e31148;var statearr_31149_31155 = state_31134;(statearr_31149_31155[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31134);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31148;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31156 = state_31134;
state_31134 = G__31156;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31134){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files))
})();var state__15991__auto__ = (function (){var statearr_31150 = f__15990__auto__.call(null);(statearr_31150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__31110,map__31110__$1,opts,on_jsload,before_jsload,map__31111,map__31111__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31157,link_href){var map__31159 = p__31157;var map__31159__$1 = ((cljs.core.seq_QMARK_.call(null,map__31159))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);var request_url = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31180){var state_val_31181 = (state_31180[(1)]);if((state_val_31181 === (2)))
{var inst_31177 = (state_31180[(2)]);var inst_31178 = parent.removeChild(orig_link);var state_31180__$1 = (function (){var statearr_31182 = state_31180;(statearr_31182[(7)] = inst_31177);
return statearr_31182;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31180__$1,inst_31178);
} else
{if((state_val_31181 === (1)))
{var inst_31175 = cljs.core.async.timeout.call(null,(200));var state_31180__$1 = state_31180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31180__$1,(2),inst_31175);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31186 = [null,null,null,null,null,null,null,null];(statearr_31186[(0)] = state_machine__15975__auto__);
(statearr_31186[(1)] = (1));
return statearr_31186;
});
var state_machine__15975__auto____1 = (function (state_31180){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31180);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31187){if((e31187 instanceof Object))
{var ex__15978__auto__ = e31187;var statearr_31188_31190 = state_31180;(statearr_31188_31190[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31187;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31191 = state_31180;
state_31180 = G__31191;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31180){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_31189 = f__15990__auto__.call(null);(statearr_31189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31189;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31192){var map__31194 = p__31192;var map__31194__$1 = ((cljs.core.seq_QMARK_.call(null,map__31194))?cljs.core.apply.call(null,cljs.core.hash_map,map__31194):map__31194);var f_data = map__31194__$1;var request_url = cljs.core.get.call(null,map__31194__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31194__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31195,files_msg){var map__31217 = p__31195;var map__31217__$1 = ((cljs.core.seq_QMARK_.call(null,map__31217))?cljs.core.apply.call(null,cljs.core.hash_map,map__31217):map__31217);var opts = map__31217__$1;var on_cssload = cljs.core.get.call(null,map__31217__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31218_31238 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31219_31239 = null;var count__31220_31240 = (0);var i__31221_31241 = (0);while(true){
if((i__31221_31241 < count__31220_31240))
{var f_31242 = cljs.core._nth.call(null,chunk__31219_31239,i__31221_31241);figwheel.client.reload_css_file.call(null,f_31242);
{
var G__31243 = seq__31218_31238;
var G__31244 = chunk__31219_31239;
var G__31245 = count__31220_31240;
var G__31246 = (i__31221_31241 + (1));
seq__31218_31238 = G__31243;
chunk__31219_31239 = G__31244;
count__31220_31240 = G__31245;
i__31221_31241 = G__31246;
continue;
}
} else
{var temp__4126__auto___31247 = cljs.core.seq.call(null,seq__31218_31238);if(temp__4126__auto___31247)
{var seq__31218_31248__$1 = temp__4126__auto___31247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31218_31248__$1))
{var c__13316__auto___31249 = cljs.core.chunk_first.call(null,seq__31218_31248__$1);{
var G__31250 = cljs.core.chunk_rest.call(null,seq__31218_31248__$1);
var G__31251 = c__13316__auto___31249;
var G__31252 = cljs.core.count.call(null,c__13316__auto___31249);
var G__31253 = (0);
seq__31218_31238 = G__31250;
chunk__31219_31239 = G__31251;
count__31220_31240 = G__31252;
i__31221_31241 = G__31253;
continue;
}
} else
{var f_31254 = cljs.core.first.call(null,seq__31218_31248__$1);figwheel.client.reload_css_file.call(null,f_31254);
{
var G__31255 = cljs.core.next.call(null,seq__31218_31248__$1);
var G__31256 = null;
var G__31257 = (0);
var G__31258 = (0);
seq__31218_31238 = G__31255;
chunk__31219_31239 = G__31256;
count__31220_31240 = G__31257;
i__31221_31241 = G__31258;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload){
return (function (state_31228){var state_val_31229 = (state_31228[(1)]);if((state_val_31229 === (2)))
{var inst_31224 = (state_31228[(2)]);var inst_31225 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31226 = on_cssload.call(null,inst_31225);var state_31228__$1 = (function (){var statearr_31230 = state_31228;(statearr_31230[(7)] = inst_31224);
return statearr_31230;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31228__$1,inst_31226);
} else
{if((state_val_31229 === (1)))
{var inst_31222 = cljs.core.async.timeout.call(null,(100));var state_31228__$1 = state_31228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31228__$1,(2),inst_31222);
} else
{return null;
}
}
});})(c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_31234 = [null,null,null,null,null,null,null,null];(statearr_31234[(0)] = state_machine__15975__auto__);
(statearr_31234[(1)] = (1));
return statearr_31234;
});
var state_machine__15975__auto____1 = (function (state_31228){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_31228);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e31235){if((e31235 instanceof Object))
{var ex__15978__auto__ = e31235;var statearr_31236_31259 = state_31228;(statearr_31236_31259[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31260 = state_31228;
state_31228 = G__31260;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_31228){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_31228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_31237 = f__15990__auto__.call(null);(statearr_31237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_31237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__31217,map__31217__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31261){var map__31266 = p__31261;var map__31266__$1 = ((cljs.core.seq_QMARK_.call(null,map__31266))?cljs.core.apply.call(null,cljs.core.hash_map,map__31266):map__31266);var opts = map__31266__$1;var on_compile_fail = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31267 = cljs.core._EQ_;var expr__31268 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31267.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31268)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31267.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31268)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31267.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31268)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31266,map__31266__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31273 = {"detail":url};return obj31273;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31274){var map__31276 = p__31274;var map__31276__$1 = ((cljs.core.seq_QMARK_.call(null,map__31276))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);var class$ = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31277){var map__31283 = p__31277;var map__31283__$1 = ((cljs.core.seq_QMARK_.call(null,map__31283))?cljs.core.apply.call(null,cljs.core.hash_map,map__31283):map__31283);var ed = map__31283__$1;var exception_data = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31283__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31284_31288 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31285_31289 = null;var count__31286_31290 = (0);var i__31287_31291 = (0);while(true){
if((i__31287_31291 < count__31286_31290))
{var msg_31292 = cljs.core._nth.call(null,chunk__31285_31289,i__31287_31291);console.log(msg_31292);
{
var G__31293 = seq__31284_31288;
var G__31294 = chunk__31285_31289;
var G__31295 = count__31286_31290;
var G__31296 = (i__31287_31291 + (1));
seq__31284_31288 = G__31293;
chunk__31285_31289 = G__31294;
count__31286_31290 = G__31295;
i__31287_31291 = G__31296;
continue;
}
} else
{var temp__4126__auto___31297 = cljs.core.seq.call(null,seq__31284_31288);if(temp__4126__auto___31297)
{var seq__31284_31298__$1 = temp__4126__auto___31297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31284_31298__$1))
{var c__13316__auto___31299 = cljs.core.chunk_first.call(null,seq__31284_31298__$1);{
var G__31300 = cljs.core.chunk_rest.call(null,seq__31284_31298__$1);
var G__31301 = c__13316__auto___31299;
var G__31302 = cljs.core.count.call(null,c__13316__auto___31299);
var G__31303 = (0);
seq__31284_31288 = G__31300;
chunk__31285_31289 = G__31301;
count__31286_31290 = G__31302;
i__31287_31291 = G__31303;
continue;
}
} else
{var msg_31304 = cljs.core.first.call(null,seq__31284_31298__$1);console.log(msg_31304);
{
var G__31305 = cljs.core.next.call(null,seq__31284_31298__$1);
var G__31306 = null;
var G__31307 = (0);
var G__31308 = (0);
seq__31284_31288 = G__31305;
chunk__31285_31289 = G__31306;
count__31286_31290 = G__31307;
i__31287_31291 = G__31308;
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
var watch_and_reload__delegate = function (p__31309){var map__31311 = p__31309;var map__31311__$1 = ((cljs.core.seq_QMARK_.call(null,map__31311))?cljs.core.apply.call(null,cljs.core.hash_map,map__31311):map__31311);var opts = map__31311__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31309 = null;if (arguments.length > 0) {
  p__31309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31309);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31312){
var p__31309 = cljs.core.seq(arglist__31312);
return watch_and_reload__delegate(p__31309);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map