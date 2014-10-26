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
var log__delegate = function (p__29638,args){var map__29640 = p__29638;var map__29640__$1 = ((cljs.core.seq_QMARK_.call(null,map__29640))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);var debug = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__29638,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__29638,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__29641){
var p__29638 = cljs.core.first(arglist__29641);
var args = cljs.core.rest(arglist__29641);
return log__delegate(p__29638,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__29642){var map__29644 = p__29642;var map__29644__$1 = ((cljs.core.seq_QMARK_.call(null,map__29644))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);var websocket_url = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__29645,callback){var map__29647 = p__29645;var map__29647__$1 = ((cljs.core.seq_QMARK_.call(null,map__29647))?cljs.core.apply.call(null,cljs.core.hash_map,map__29647):map__29647);var msg = map__29647__$1;var dependency_file = cljs.core.get.call(null,map__29647__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__29647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__29647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__29647,map__29647__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__29647,map__29647__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__29648,p__29649){var map__29652 = p__29648;var map__29652__$1 = ((cljs.core.seq_QMARK_.call(null,map__29652))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);var opts = map__29652__$1;var url_rewriter = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__29653 = p__29649;var map__29653__$1 = ((cljs.core.seq_QMARK_.call(null,map__29653))?cljs.core.apply.call(null,cljs.core.hash_map,map__29653):map__29653);var d = map__29653__$1;var file = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__29654,p__29655){var map__29697 = p__29654;var map__29697__$1 = ((cljs.core.seq_QMARK_.call(null,map__29697))?cljs.core.apply.call(null,cljs.core.hash_map,map__29697):map__29697);var opts = map__29697__$1;var on_jsload = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__29698 = p__29655;var map__29698__$1 = ((cljs.core.seq_QMARK_.call(null,map__29698))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);var files = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files){
return (function (state_29721){var state_val_29722 = (state_29721[(1)]);if((state_val_29722 === (6)))
{var inst_29703 = (state_29721[(7)]);var inst_29712 = (state_29721[(2)]);var inst_29713 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29714 = [inst_29703];var inst_29715 = (new cljs.core.PersistentVector(null,1,(5),inst_29713,inst_29714,null));var inst_29716 = cljs.core.apply.call(null,on_jsload,inst_29715);var state_29721__$1 = (function (){var statearr_29723 = state_29721;(statearr_29723[(8)] = inst_29712);
return statearr_29723;
})();var statearr_29724_29738 = state_29721__$1;(statearr_29724_29738[(2)] = inst_29716);
(statearr_29724_29738[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (5)))
{var inst_29719 = (state_29721[(2)]);var state_29721__$1 = state_29721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29721__$1,inst_29719);
} else
{if((state_val_29722 === (4)))
{var state_29721__$1 = state_29721;var statearr_29725_29739 = state_29721__$1;(statearr_29725_29739[(2)] = null);
(statearr_29725_29739[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (3)))
{var inst_29703 = (state_29721[(7)]);var inst_29706 = console.debug("Figwheel: loaded these files");var inst_29707 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29703);var inst_29708 = cljs.core.prn_str.call(null,inst_29707);var inst_29709 = console.log(inst_29708);var inst_29710 = cljs.core.async.timeout.call(null,(10));var state_29721__$1 = (function (){var statearr_29726 = state_29721;(statearr_29726[(9)] = inst_29706);
(statearr_29726[(10)] = inst_29709);
return statearr_29726;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29721__$1,(6),inst_29710);
} else
{if((state_val_29722 === (2)))
{var inst_29703 = (state_29721[(7)]);var inst_29703__$1 = (state_29721[(2)]);var inst_29704 = cljs.core.not_empty.call(null,inst_29703__$1);var state_29721__$1 = (function (){var statearr_29727 = state_29721;(statearr_29727[(7)] = inst_29703__$1);
return statearr_29727;
})();if(cljs.core.truth_(inst_29704))
{var statearr_29728_29740 = state_29721__$1;(statearr_29728_29740[(1)] = (3));
} else
{var statearr_29729_29741 = state_29721__$1;(statearr_29729_29741[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (1)))
{var inst_29699 = before_jsload.call(null,files);var inst_29700 = figwheel.client.add_request_urls.call(null,opts,files);var inst_29701 = figwheel.client.load_all_js_files.call(null,inst_29700);var state_29721__$1 = (function (){var statearr_29730 = state_29721;(statearr_29730[(11)] = inst_29699);
return statearr_29730;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29721__$1,(2),inst_29701);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29734 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29734[(0)] = state_machine__15975__auto__);
(statearr_29734[(1)] = (1));
return statearr_29734;
});
var state_machine__15975__auto____1 = (function (state_29721){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29721);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29735){if((e29735 instanceof Object))
{var ex__15978__auto__ = e29735;var statearr_29736_29742 = state_29721;(statearr_29736_29742[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29743 = state_29721;
state_29721 = G__29743;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29721){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files))
})();var state__15991__auto__ = (function (){var statearr_29737 = f__15990__auto__.call(null);(statearr_29737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_29737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__29697,map__29697__$1,opts,on_jsload,before_jsload,map__29698,map__29698__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__29744,link_href){var map__29746 = p__29744;var map__29746__$1 = ((cljs.core.seq_QMARK_.call(null,map__29746))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);var request_url = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_29767){var state_val_29768 = (state_29767[(1)]);if((state_val_29768 === (2)))
{var inst_29764 = (state_29767[(2)]);var inst_29765 = parent.removeChild(orig_link);var state_29767__$1 = (function (){var statearr_29769 = state_29767;(statearr_29769[(7)] = inst_29764);
return statearr_29769;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29767__$1,inst_29765);
} else
{if((state_val_29768 === (1)))
{var inst_29762 = cljs.core.async.timeout.call(null,(200));var state_29767__$1 = state_29767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29767__$1,(2),inst_29762);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29773 = [null,null,null,null,null,null,null,null];(statearr_29773[(0)] = state_machine__15975__auto__);
(statearr_29773[(1)] = (1));
return statearr_29773;
});
var state_machine__15975__auto____1 = (function (state_29767){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29767);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29774){if((e29774 instanceof Object))
{var ex__15978__auto__ = e29774;var statearr_29775_29777 = state_29767;(statearr_29775_29777[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29774;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29778 = state_29767;
state_29767 = G__29778;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29767){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_29776 = f__15990__auto__.call(null);(statearr_29776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_29776;
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
figwheel.client.reload_css_file = (function reload_css_file(p__29779){var map__29781 = p__29779;var map__29781__$1 = ((cljs.core.seq_QMARK_.call(null,map__29781))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);var f_data = map__29781__$1;var request_url = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__29782,files_msg){var map__29804 = p__29782;var map__29804__$1 = ((cljs.core.seq_QMARK_.call(null,map__29804))?cljs.core.apply.call(null,cljs.core.hash_map,map__29804):map__29804);var opts = map__29804__$1;var on_cssload = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__29805_29825 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__29806_29826 = null;var count__29807_29827 = (0);var i__29808_29828 = (0);while(true){
if((i__29808_29828 < count__29807_29827))
{var f_29829 = cljs.core._nth.call(null,chunk__29806_29826,i__29808_29828);figwheel.client.reload_css_file.call(null,f_29829);
{
var G__29830 = seq__29805_29825;
var G__29831 = chunk__29806_29826;
var G__29832 = count__29807_29827;
var G__29833 = (i__29808_29828 + (1));
seq__29805_29825 = G__29830;
chunk__29806_29826 = G__29831;
count__29807_29827 = G__29832;
i__29808_29828 = G__29833;
continue;
}
} else
{var temp__4126__auto___29834 = cljs.core.seq.call(null,seq__29805_29825);if(temp__4126__auto___29834)
{var seq__29805_29835__$1 = temp__4126__auto___29834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29805_29835__$1))
{var c__13316__auto___29836 = cljs.core.chunk_first.call(null,seq__29805_29835__$1);{
var G__29837 = cljs.core.chunk_rest.call(null,seq__29805_29835__$1);
var G__29838 = c__13316__auto___29836;
var G__29839 = cljs.core.count.call(null,c__13316__auto___29836);
var G__29840 = (0);
seq__29805_29825 = G__29837;
chunk__29806_29826 = G__29838;
count__29807_29827 = G__29839;
i__29808_29828 = G__29840;
continue;
}
} else
{var f_29841 = cljs.core.first.call(null,seq__29805_29835__$1);figwheel.client.reload_css_file.call(null,f_29841);
{
var G__29842 = cljs.core.next.call(null,seq__29805_29835__$1);
var G__29843 = null;
var G__29844 = (0);
var G__29845 = (0);
seq__29805_29825 = G__29842;
chunk__29806_29826 = G__29843;
count__29807_29827 = G__29844;
i__29808_29828 = G__29845;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload){
return (function (state_29815){var state_val_29816 = (state_29815[(1)]);if((state_val_29816 === (2)))
{var inst_29811 = (state_29815[(2)]);var inst_29812 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_29813 = on_cssload.call(null,inst_29812);var state_29815__$1 = (function (){var statearr_29817 = state_29815;(statearr_29817[(7)] = inst_29811);
return statearr_29817;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29815__$1,inst_29813);
} else
{if((state_val_29816 === (1)))
{var inst_29809 = cljs.core.async.timeout.call(null,(100));var state_29815__$1 = state_29815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29815__$1,(2),inst_29809);
} else
{return null;
}
}
});})(c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29821 = [null,null,null,null,null,null,null,null];(statearr_29821[(0)] = state_machine__15975__auto__);
(statearr_29821[(1)] = (1));
return statearr_29821;
});
var state_machine__15975__auto____1 = (function (state_29815){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29815);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29822){if((e29822 instanceof Object))
{var ex__15978__auto__ = e29822;var statearr_29823_29846 = state_29815;(statearr_29823_29846[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29815);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29822;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29847 = state_29815;
state_29815 = G__29847;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29815){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_29824 = f__15990__auto__.call(null);(statearr_29824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_29824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__29804,map__29804__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__29848){var map__29853 = p__29848;var map__29853__$1 = ((cljs.core.seq_QMARK_.call(null,map__29853))?cljs.core.apply.call(null,cljs.core.hash_map,map__29853):map__29853);var opts = map__29853__$1;var on_compile_fail = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__29854 = cljs.core._EQ_;var expr__29855 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__29854.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__29855)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__29854.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__29855)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__29854.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29855)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__29853,map__29853__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj29860 = {"detail":url};return obj29860;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__29861){var map__29863 = p__29861;var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);var class$ = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__29864){var map__29870 = p__29864;var map__29870__$1 = ((cljs.core.seq_QMARK_.call(null,map__29870))?cljs.core.apply.call(null,cljs.core.hash_map,map__29870):map__29870);var ed = map__29870__$1;var exception_data = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__29871_29875 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__29872_29876 = null;var count__29873_29877 = (0);var i__29874_29878 = (0);while(true){
if((i__29874_29878 < count__29873_29877))
{var msg_29879 = cljs.core._nth.call(null,chunk__29872_29876,i__29874_29878);console.log(msg_29879);
{
var G__29880 = seq__29871_29875;
var G__29881 = chunk__29872_29876;
var G__29882 = count__29873_29877;
var G__29883 = (i__29874_29878 + (1));
seq__29871_29875 = G__29880;
chunk__29872_29876 = G__29881;
count__29873_29877 = G__29882;
i__29874_29878 = G__29883;
continue;
}
} else
{var temp__4126__auto___29884 = cljs.core.seq.call(null,seq__29871_29875);if(temp__4126__auto___29884)
{var seq__29871_29885__$1 = temp__4126__auto___29884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29871_29885__$1))
{var c__13316__auto___29886 = cljs.core.chunk_first.call(null,seq__29871_29885__$1);{
var G__29887 = cljs.core.chunk_rest.call(null,seq__29871_29885__$1);
var G__29888 = c__13316__auto___29886;
var G__29889 = cljs.core.count.call(null,c__13316__auto___29886);
var G__29890 = (0);
seq__29871_29875 = G__29887;
chunk__29872_29876 = G__29888;
count__29873_29877 = G__29889;
i__29874_29878 = G__29890;
continue;
}
} else
{var msg_29891 = cljs.core.first.call(null,seq__29871_29885__$1);console.log(msg_29891);
{
var G__29892 = cljs.core.next.call(null,seq__29871_29885__$1);
var G__29893 = null;
var G__29894 = (0);
var G__29895 = (0);
seq__29871_29875 = G__29892;
chunk__29872_29876 = G__29893;
count__29873_29877 = G__29894;
i__29874_29878 = G__29895;
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
var watch_and_reload__delegate = function (p__29896){var map__29898 = p__29896;var map__29898__$1 = ((cljs.core.seq_QMARK_.call(null,map__29898))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);var opts = map__29898__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__29896 = null;if (arguments.length > 0) {
  p__29896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__29896);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__29899){
var p__29896 = cljs.core.seq(arglist__29899);
return watch_and_reload__delegate(p__29896);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map