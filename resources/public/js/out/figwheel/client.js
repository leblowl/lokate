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
var log__delegate = function (p__22630,args){var map__22632 = p__22630;var map__22632__$1 = ((cljs.core.seq_QMARK_.call(null,map__22632))?cljs.core.apply.call(null,cljs.core.hash_map,map__22632):map__22632);var debug = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__22630,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__22630,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__22633){
var p__22630 = cljs.core.first(arglist__22633);
var args = cljs.core.rest(arglist__22633);
return log__delegate(p__22630,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__22634){var map__22636 = p__22634;var map__22636__$1 = ((cljs.core.seq_QMARK_.call(null,map__22636))?cljs.core.apply.call(null,cljs.core.hash_map,map__22636):map__22636);var websocket_url = cljs.core.get.call(null,map__22636__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__22637,callback){var map__22639 = p__22637;var map__22639__$1 = ((cljs.core.seq_QMARK_.call(null,map__22639))?cljs.core.apply.call(null,cljs.core.hash_map,map__22639):map__22639);var msg = map__22639__$1;var dependency_file = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__22639,map__22639__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__22639,map__22639__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__22640,p__22641){var map__22644 = p__22640;var map__22644__$1 = ((cljs.core.seq_QMARK_.call(null,map__22644))?cljs.core.apply.call(null,cljs.core.hash_map,map__22644):map__22644);var opts = map__22644__$1;var url_rewriter = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__22645 = p__22641;var map__22645__$1 = ((cljs.core.seq_QMARK_.call(null,map__22645))?cljs.core.apply.call(null,cljs.core.hash_map,map__22645):map__22645);var d = map__22645__$1;var file = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__22646,p__22647){var map__22689 = p__22646;var map__22689__$1 = ((cljs.core.seq_QMARK_.call(null,map__22689))?cljs.core.apply.call(null,cljs.core.hash_map,map__22689):map__22689);var opts = map__22689__$1;var on_jsload = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__22689__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__22690 = p__22647;var map__22690__$1 = ((cljs.core.seq_QMARK_.call(null,map__22690))?cljs.core.apply.call(null,cljs.core.hash_map,map__22690):map__22690);var files = cljs.core.get.call(null,map__22690__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files){
return (function (state_22713){var state_val_22714 = (state_22713[(1)]);if((state_val_22714 === (6)))
{var inst_22695 = (state_22713[(7)]);var inst_22704 = (state_22713[(2)]);var inst_22705 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22706 = [inst_22695];var inst_22707 = (new cljs.core.PersistentVector(null,1,(5),inst_22705,inst_22706,null));var inst_22708 = cljs.core.apply.call(null,on_jsload,inst_22707);var state_22713__$1 = (function (){var statearr_22715 = state_22713;(statearr_22715[(8)] = inst_22704);
return statearr_22715;
})();var statearr_22716_22730 = state_22713__$1;(statearr_22716_22730[(2)] = inst_22708);
(statearr_22716_22730[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22714 === (5)))
{var inst_22711 = (state_22713[(2)]);var state_22713__$1 = state_22713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22713__$1,inst_22711);
} else
{if((state_val_22714 === (4)))
{var state_22713__$1 = state_22713;var statearr_22717_22731 = state_22713__$1;(statearr_22717_22731[(2)] = null);
(statearr_22717_22731[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22714 === (3)))
{var inst_22695 = (state_22713[(7)]);var inst_22698 = console.debug("Figwheel: loaded these files");var inst_22699 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22695);var inst_22700 = cljs.core.prn_str.call(null,inst_22699);var inst_22701 = console.log(inst_22700);var inst_22702 = cljs.core.async.timeout.call(null,(10));var state_22713__$1 = (function (){var statearr_22718 = state_22713;(statearr_22718[(9)] = inst_22701);
(statearr_22718[(10)] = inst_22698);
return statearr_22718;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22713__$1,(6),inst_22702);
} else
{if((state_val_22714 === (2)))
{var inst_22695 = (state_22713[(7)]);var inst_22695__$1 = (state_22713[(2)]);var inst_22696 = cljs.core.not_empty.call(null,inst_22695__$1);var state_22713__$1 = (function (){var statearr_22719 = state_22713;(statearr_22719[(7)] = inst_22695__$1);
return statearr_22719;
})();if(cljs.core.truth_(inst_22696))
{var statearr_22720_22732 = state_22713__$1;(statearr_22720_22732[(1)] = (3));
} else
{var statearr_22721_22733 = state_22713__$1;(statearr_22721_22733[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22714 === (1)))
{var inst_22691 = before_jsload.call(null,files);var inst_22692 = figwheel.client.add_request_urls.call(null,opts,files);var inst_22693 = figwheel.client.load_all_js_files.call(null,inst_22692);var state_22713__$1 = (function (){var statearr_22722 = state_22713;(statearr_22722[(11)] = inst_22691);
return statearr_22722;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22713__$1,(2),inst_22693);
} else
{return null;
}
}
}
}
}
}
});})(c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files))
;return ((function (switch__15974__auto__,c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22726 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22726[(0)] = state_machine__15975__auto__);
(statearr_22726[(1)] = (1));
return statearr_22726;
});
var state_machine__15975__auto____1 = (function (state_22713){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22713);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22727){if((e22727 instanceof Object))
{var ex__15978__auto__ = e22727;var statearr_22728_22734 = state_22713;(statearr_22728_22734[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22727;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22735 = state_22713;
state_22713 = G__22735;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22713){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files))
})();var state__15991__auto__ = (function (){var statearr_22729 = f__15990__auto__.call(null);(statearr_22729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__22689,map__22689__$1,opts,on_jsload,before_jsload,map__22690,map__22690__$1,files))
);
return c__15989__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__22736,link_href){var map__22738 = p__22736;var map__22738__$1 = ((cljs.core.seq_QMARK_.call(null,map__22738))?cljs.core.apply.call(null,cljs.core.hash_map,map__22738):map__22738);var request_url = cljs.core.get.call(null,map__22738__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__22738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_22759){var state_val_22760 = (state_22759[(1)]);if((state_val_22760 === (2)))
{var inst_22756 = (state_22759[(2)]);var inst_22757 = parent.removeChild(orig_link);var state_22759__$1 = (function (){var statearr_22761 = state_22759;(statearr_22761[(7)] = inst_22756);
return statearr_22761;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22759__$1,inst_22757);
} else
{if((state_val_22760 === (1)))
{var inst_22754 = cljs.core.async.timeout.call(null,(200));var state_22759__$1 = state_22759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22759__$1,(2),inst_22754);
} else
{return null;
}
}
});})(c__15989__auto__,parent))
;return ((function (switch__15974__auto__,c__15989__auto__,parent){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22765 = [null,null,null,null,null,null,null,null];(statearr_22765[(0)] = state_machine__15975__auto__);
(statearr_22765[(1)] = (1));
return statearr_22765;
});
var state_machine__15975__auto____1 = (function (state_22759){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22759);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22766){if((e22766 instanceof Object))
{var ex__15978__auto__ = e22766;var statearr_22767_22769 = state_22759;(statearr_22767_22769[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22770 = state_22759;
state_22759 = G__22770;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22759){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,parent))
})();var state__15991__auto__ = (function (){var statearr_22768 = f__15990__auto__.call(null);(statearr_22768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22768;
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
figwheel.client.reload_css_file = (function reload_css_file(p__22771){var map__22773 = p__22771;var map__22773__$1 = ((cljs.core.seq_QMARK_.call(null,map__22773))?cljs.core.apply.call(null,cljs.core.hash_map,map__22773):map__22773);var f_data = map__22773__$1;var request_url = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__22774,files_msg){var map__22796 = p__22774;var map__22796__$1 = ((cljs.core.seq_QMARK_.call(null,map__22796))?cljs.core.apply.call(null,cljs.core.hash_map,map__22796):map__22796);var opts = map__22796__$1;var on_cssload = cljs.core.get.call(null,map__22796__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__22797_22817 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__22798_22818 = null;var count__22799_22819 = (0);var i__22800_22820 = (0);while(true){
if((i__22800_22820 < count__22799_22819))
{var f_22821 = cljs.core._nth.call(null,chunk__22798_22818,i__22800_22820);figwheel.client.reload_css_file.call(null,f_22821);
{
var G__22822 = seq__22797_22817;
var G__22823 = chunk__22798_22818;
var G__22824 = count__22799_22819;
var G__22825 = (i__22800_22820 + (1));
seq__22797_22817 = G__22822;
chunk__22798_22818 = G__22823;
count__22799_22819 = G__22824;
i__22800_22820 = G__22825;
continue;
}
} else
{var temp__4126__auto___22826 = cljs.core.seq.call(null,seq__22797_22817);if(temp__4126__auto___22826)
{var seq__22797_22827__$1 = temp__4126__auto___22826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22797_22827__$1))
{var c__13316__auto___22828 = cljs.core.chunk_first.call(null,seq__22797_22827__$1);{
var G__22829 = cljs.core.chunk_rest.call(null,seq__22797_22827__$1);
var G__22830 = c__13316__auto___22828;
var G__22831 = cljs.core.count.call(null,c__13316__auto___22828);
var G__22832 = (0);
seq__22797_22817 = G__22829;
chunk__22798_22818 = G__22830;
count__22799_22819 = G__22831;
i__22800_22820 = G__22832;
continue;
}
} else
{var f_22833 = cljs.core.first.call(null,seq__22797_22827__$1);figwheel.client.reload_css_file.call(null,f_22833);
{
var G__22834 = cljs.core.next.call(null,seq__22797_22827__$1);
var G__22835 = null;
var G__22836 = (0);
var G__22837 = (0);
seq__22797_22817 = G__22834;
chunk__22798_22818 = G__22835;
count__22799_22819 = G__22836;
i__22800_22820 = G__22837;
continue;
}
}
} else
{}
}
break;
}
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload){
return (function (state_22807){var state_val_22808 = (state_22807[(1)]);if((state_val_22808 === (2)))
{var inst_22803 = (state_22807[(2)]);var inst_22804 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_22805 = on_cssload.call(null,inst_22804);var state_22807__$1 = (function (){var statearr_22809 = state_22807;(statearr_22809[(7)] = inst_22803);
return statearr_22809;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22807__$1,inst_22805);
} else
{if((state_val_22808 === (1)))
{var inst_22801 = cljs.core.async.timeout.call(null,(100));var state_22807__$1 = state_22807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22807__$1,(2),inst_22801);
} else
{return null;
}
}
});})(c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload))
;return ((function (switch__15974__auto__,c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22813 = [null,null,null,null,null,null,null,null];(statearr_22813[(0)] = state_machine__15975__auto__);
(statearr_22813[(1)] = (1));
return statearr_22813;
});
var state_machine__15975__auto____1 = (function (state_22807){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22807);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22814){if((e22814 instanceof Object))
{var ex__15978__auto__ = e22814;var statearr_22815_22838 = state_22807;(statearr_22815_22838[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22814;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22839 = state_22807;
state_22807 = G__22839;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22807){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload))
})();var state__15991__auto__ = (function (){var statearr_22816 = f__15990__auto__.call(null);(statearr_22816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,map__22796,map__22796__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__22840){var map__22845 = p__22840;var map__22845__$1 = ((cljs.core.seq_QMARK_.call(null,map__22845))?cljs.core.apply.call(null,cljs.core.hash_map,map__22845):map__22845);var opts = map__22845__$1;var on_compile_fail = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__22846 = cljs.core._EQ_;var expr__22847 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__22846.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__22847)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__22846.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__22847)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__22846.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22847)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__22845,map__22845__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj22852 = {"detail":url};return obj22852;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__22853){var map__22855 = p__22853;var map__22855__$1 = ((cljs.core.seq_QMARK_.call(null,map__22855))?cljs.core.apply.call(null,cljs.core.hash_map,map__22855):map__22855);var class$ = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__22856){var map__22862 = p__22856;var map__22862__$1 = ((cljs.core.seq_QMARK_.call(null,map__22862))?cljs.core.apply.call(null,cljs.core.hash_map,map__22862):map__22862);var ed = map__22862__$1;var exception_data = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__22863_22867 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__22864_22868 = null;var count__22865_22869 = (0);var i__22866_22870 = (0);while(true){
if((i__22866_22870 < count__22865_22869))
{var msg_22871 = cljs.core._nth.call(null,chunk__22864_22868,i__22866_22870);console.log(msg_22871);
{
var G__22872 = seq__22863_22867;
var G__22873 = chunk__22864_22868;
var G__22874 = count__22865_22869;
var G__22875 = (i__22866_22870 + (1));
seq__22863_22867 = G__22872;
chunk__22864_22868 = G__22873;
count__22865_22869 = G__22874;
i__22866_22870 = G__22875;
continue;
}
} else
{var temp__4126__auto___22876 = cljs.core.seq.call(null,seq__22863_22867);if(temp__4126__auto___22876)
{var seq__22863_22877__$1 = temp__4126__auto___22876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22863_22877__$1))
{var c__13316__auto___22878 = cljs.core.chunk_first.call(null,seq__22863_22877__$1);{
var G__22879 = cljs.core.chunk_rest.call(null,seq__22863_22877__$1);
var G__22880 = c__13316__auto___22878;
var G__22881 = cljs.core.count.call(null,c__13316__auto___22878);
var G__22882 = (0);
seq__22863_22867 = G__22879;
chunk__22864_22868 = G__22880;
count__22865_22869 = G__22881;
i__22866_22870 = G__22882;
continue;
}
} else
{var msg_22883 = cljs.core.first.call(null,seq__22863_22877__$1);console.log(msg_22883);
{
var G__22884 = cljs.core.next.call(null,seq__22863_22877__$1);
var G__22885 = null;
var G__22886 = (0);
var G__22887 = (0);
seq__22863_22867 = G__22884;
chunk__22864_22868 = G__22885;
count__22865_22869 = G__22886;
i__22866_22870 = G__22887;
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
var watch_and_reload__delegate = function (p__22888){var map__22890 = p__22888;var map__22890__$1 = ((cljs.core.seq_QMARK_.call(null,map__22890))?cljs.core.apply.call(null,cljs.core.hash_map,map__22890):map__22890);var opts = map__22890__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__22888 = null;if (arguments.length > 0) {
  p__22888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__22888);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__22891){
var p__22888 = cljs.core.seq(arglist__22891);
return watch_and_reload__delegate(p__22888);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map