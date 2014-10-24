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
var log__delegate = function (p__24833,args){var map__24835 = p__24833;var map__24835__$1 = ((cljs.core.seq_QMARK_.call(null,map__24835))?cljs.core.apply.call(null,cljs.core.hash_map,map__24835):map__24835);var debug = cljs.core.get.call(null,map__24835__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24833,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24833,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24836){
var p__24833 = cljs.core.first(arglist__24836);
var args = cljs.core.rest(arglist__24836);
return log__delegate(p__24833,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24837){var map__24839 = p__24837;var map__24839__$1 = ((cljs.core.seq_QMARK_.call(null,map__24839))?cljs.core.apply.call(null,cljs.core.hash_map,map__24839):map__24839);var websocket_url = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24840,callback){var map__24842 = p__24840;var map__24842__$1 = ((cljs.core.seq_QMARK_.call(null,map__24842))?cljs.core.apply.call(null,cljs.core.hash_map,map__24842):map__24842);var msg = map__24842__$1;var dependency_file = cljs.core.get.call(null,map__24842__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__24842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__24842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__12546__auto__ = dependency_file;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24842,map__24842__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24842,map__24842__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__24843,p__24844){var map__24847 = p__24843;var map__24847__$1 = ((cljs.core.seq_QMARK_.call(null,map__24847))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);var opts = map__24847__$1;var url_rewriter = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__24848 = p__24844;var map__24848__$1 = ((cljs.core.seq_QMARK_.call(null,map__24848))?cljs.core.apply.call(null,cljs.core.hash_map,map__24848):map__24848);var d = map__24848__$1;var file = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24849,p__24850){var map__24892 = p__24849;var map__24892__$1 = ((cljs.core.seq_QMARK_.call(null,map__24892))?cljs.core.apply.call(null,cljs.core.hash_map,map__24892):map__24892);var opts = map__24892__$1;var on_jsload = cljs.core.get.call(null,map__24892__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__24892__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__24893 = p__24850;var map__24893__$1 = ((cljs.core.seq_QMARK_.call(null,map__24893))?cljs.core.apply.call(null,cljs.core.hash_map,map__24893):map__24893);var files = cljs.core.get.call(null,map__24893__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files){
return (function (state_24916){var state_val_24917 = (state_24916[(1)]);if((state_val_24917 === (6)))
{var inst_24898 = (state_24916[(7)]);var inst_24907 = (state_24916[(2)]);var inst_24908 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24909 = [inst_24898];var inst_24910 = (new cljs.core.PersistentVector(null,1,(5),inst_24908,inst_24909,null));var inst_24911 = cljs.core.apply.call(null,on_jsload,inst_24910);var state_24916__$1 = (function (){var statearr_24918 = state_24916;(statearr_24918[(8)] = inst_24907);
return statearr_24918;
})();var statearr_24919_24933 = state_24916__$1;(statearr_24919_24933[(2)] = inst_24911);
(statearr_24919_24933[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24917 === (5)))
{var inst_24914 = (state_24916[(2)]);var state_24916__$1 = state_24916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24916__$1,inst_24914);
} else
{if((state_val_24917 === (4)))
{var state_24916__$1 = state_24916;var statearr_24920_24934 = state_24916__$1;(statearr_24920_24934[(2)] = null);
(statearr_24920_24934[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24917 === (3)))
{var inst_24898 = (state_24916[(7)]);var inst_24901 = console.debug("Figwheel: loaded these files");var inst_24902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24898);var inst_24903 = cljs.core.prn_str.call(null,inst_24902);var inst_24904 = console.log(inst_24903);var inst_24905 = cljs.core.async.timeout.call(null,(10));var state_24916__$1 = (function (){var statearr_24921 = state_24916;(statearr_24921[(9)] = inst_24901);
(statearr_24921[(10)] = inst_24904);
return statearr_24921;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24916__$1,(6),inst_24905);
} else
{if((state_val_24917 === (2)))
{var inst_24898 = (state_24916[(7)]);var inst_24898__$1 = (state_24916[(2)]);var inst_24899 = cljs.core.not_empty.call(null,inst_24898__$1);var state_24916__$1 = (function (){var statearr_24922 = state_24916;(statearr_24922[(7)] = inst_24898__$1);
return statearr_24922;
})();if(cljs.core.truth_(inst_24899))
{var statearr_24923_24935 = state_24916__$1;(statearr_24923_24935[(1)] = (3));
} else
{var statearr_24924_24936 = state_24916__$1;(statearr_24924_24936[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24917 === (1)))
{var inst_24894 = before_jsload.call(null,files);var inst_24895 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24896 = figwheel.client.load_all_js_files.call(null,inst_24895);var state_24916__$1 = (function (){var statearr_24925 = state_24916;(statearr_24925[(11)] = inst_24894);
return statearr_24925;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24916__$1,(2),inst_24896);
} else
{return null;
}
}
}
}
}
}
});})(c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files))
;return ((function (switch__15071__auto__,c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24929 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24929[(0)] = state_machine__15072__auto__);
(statearr_24929[(1)] = (1));
return statearr_24929;
});
var state_machine__15072__auto____1 = (function (state_24916){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24916);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24930){if((e24930 instanceof Object))
{var ex__15075__auto__ = e24930;var statearr_24931_24937 = state_24916;(statearr_24931_24937[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24930;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24938 = state_24916;
state_24916 = G__24938;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24916){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files))
})();var state__15088__auto__ = (function (){var statearr_24932 = f__15087__auto__.call(null);(statearr_24932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_24932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,map__24892,map__24892__$1,opts,on_jsload,before_jsload,map__24893,map__24893__$1,files))
);
return c__15086__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24939,link_href){var map__24941 = p__24939;var map__24941__$1 = ((cljs.core.seq_QMARK_.call(null,map__24941))?cljs.core.apply.call(null,cljs.core.hash_map,map__24941):map__24941);var request_url = cljs.core.get.call(null,map__24941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_24962){var state_val_24963 = (state_24962[(1)]);if((state_val_24963 === (2)))
{var inst_24959 = (state_24962[(2)]);var inst_24960 = parent.removeChild(orig_link);var state_24962__$1 = (function (){var statearr_24964 = state_24962;(statearr_24964[(7)] = inst_24959);
return statearr_24964;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24962__$1,inst_24960);
} else
{if((state_val_24963 === (1)))
{var inst_24957 = cljs.core.async.timeout.call(null,(200));var state_24962__$1 = state_24962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24962__$1,(2),inst_24957);
} else
{return null;
}
}
});})(c__15086__auto__,parent))
;return ((function (switch__15071__auto__,c__15086__auto__,parent){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24968 = [null,null,null,null,null,null,null,null];(statearr_24968[(0)] = state_machine__15072__auto__);
(statearr_24968[(1)] = (1));
return statearr_24968;
});
var state_machine__15072__auto____1 = (function (state_24962){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24962);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24969){if((e24969 instanceof Object))
{var ex__15075__auto__ = e24969;var statearr_24970_24972 = state_24962;(statearr_24970_24972[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24973 = state_24962;
state_24962 = G__24973;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24962){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,parent))
})();var state__15088__auto__ = (function (){var statearr_24971 = f__15087__auto__.call(null);(statearr_24971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_24971;
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
figwheel.client.reload_css_file = (function reload_css_file(p__24974){var map__24976 = p__24974;var map__24976__$1 = ((cljs.core.seq_QMARK_.call(null,map__24976))?cljs.core.apply.call(null,cljs.core.hash_map,map__24976):map__24976);var f_data = map__24976__$1;var request_url = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24977,files_msg){var map__24999 = p__24977;var map__24999__$1 = ((cljs.core.seq_QMARK_.call(null,map__24999))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);var opts = map__24999__$1;var on_cssload = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__25000_25020 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__25001_25021 = null;var count__25002_25022 = (0);var i__25003_25023 = (0);while(true){
if((i__25003_25023 < count__25002_25022))
{var f_25024 = cljs.core._nth.call(null,chunk__25001_25021,i__25003_25023);figwheel.client.reload_css_file.call(null,f_25024);
{
var G__25025 = seq__25000_25020;
var G__25026 = chunk__25001_25021;
var G__25027 = count__25002_25022;
var G__25028 = (i__25003_25023 + (1));
seq__25000_25020 = G__25025;
chunk__25001_25021 = G__25026;
count__25002_25022 = G__25027;
i__25003_25023 = G__25028;
continue;
}
} else
{var temp__4126__auto___25029 = cljs.core.seq.call(null,seq__25000_25020);if(temp__4126__auto___25029)
{var seq__25000_25030__$1 = temp__4126__auto___25029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25000_25030__$1))
{var c__13316__auto___25031 = cljs.core.chunk_first.call(null,seq__25000_25030__$1);{
var G__25032 = cljs.core.chunk_rest.call(null,seq__25000_25030__$1);
var G__25033 = c__13316__auto___25031;
var G__25034 = cljs.core.count.call(null,c__13316__auto___25031);
var G__25035 = (0);
seq__25000_25020 = G__25032;
chunk__25001_25021 = G__25033;
count__25002_25022 = G__25034;
i__25003_25023 = G__25035;
continue;
}
} else
{var f_25036 = cljs.core.first.call(null,seq__25000_25030__$1);figwheel.client.reload_css_file.call(null,f_25036);
{
var G__25037 = cljs.core.next.call(null,seq__25000_25030__$1);
var G__25038 = null;
var G__25039 = (0);
var G__25040 = (0);
seq__25000_25020 = G__25037;
chunk__25001_25021 = G__25038;
count__25002_25022 = G__25039;
i__25003_25023 = G__25040;
continue;
}
}
} else
{}
}
break;
}
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload){
return (function (state_25010){var state_val_25011 = (state_25010[(1)]);if((state_val_25011 === (2)))
{var inst_25006 = (state_25010[(2)]);var inst_25007 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_25008 = on_cssload.call(null,inst_25007);var state_25010__$1 = (function (){var statearr_25012 = state_25010;(statearr_25012[(7)] = inst_25006);
return statearr_25012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25010__$1,inst_25008);
} else
{if((state_val_25011 === (1)))
{var inst_25004 = cljs.core.async.timeout.call(null,(100));var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25010__$1,(2),inst_25004);
} else
{return null;
}
}
});})(c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload))
;return ((function (switch__15071__auto__,c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25016 = [null,null,null,null,null,null,null,null];(statearr_25016[(0)] = state_machine__15072__auto__);
(statearr_25016[(1)] = (1));
return statearr_25016;
});
var state_machine__15072__auto____1 = (function (state_25010){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25010);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object))
{var ex__15075__auto__ = e25017;var statearr_25018_25041 = state_25010;(statearr_25018_25041[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25042 = state_25010;
state_25010 = G__25042;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25010){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload))
})();var state__15088__auto__ = (function (){var statearr_25019 = f__15087__auto__.call(null);(statearr_25019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_25019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,map__24999,map__24999__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25043){var map__25048 = p__25043;var map__25048__$1 = ((cljs.core.seq_QMARK_.call(null,map__25048))?cljs.core.apply.call(null,cljs.core.hash_map,map__25048):map__25048);var opts = map__25048__$1;var on_compile_fail = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__25049 = cljs.core._EQ_;var expr__25050 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__25049.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25050)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25049.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25050)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__25049.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25050)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25048,map__25048__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25055 = {"detail":url};return obj25055;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25056){var map__25058 = p__25056;var map__25058__$1 = ((cljs.core.seq_QMARK_.call(null,map__25058))?cljs.core.apply.call(null,cljs.core.hash_map,map__25058):map__25058);var class$ = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25059){var map__25065 = p__25059;var map__25065__$1 = ((cljs.core.seq_QMARK_.call(null,map__25065))?cljs.core.apply.call(null,cljs.core.hash_map,map__25065):map__25065);var ed = map__25065__$1;var exception_data = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__25066_25070 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__25067_25071 = null;var count__25068_25072 = (0);var i__25069_25073 = (0);while(true){
if((i__25069_25073 < count__25068_25072))
{var msg_25074 = cljs.core._nth.call(null,chunk__25067_25071,i__25069_25073);console.log(msg_25074);
{
var G__25075 = seq__25066_25070;
var G__25076 = chunk__25067_25071;
var G__25077 = count__25068_25072;
var G__25078 = (i__25069_25073 + (1));
seq__25066_25070 = G__25075;
chunk__25067_25071 = G__25076;
count__25068_25072 = G__25077;
i__25069_25073 = G__25078;
continue;
}
} else
{var temp__4126__auto___25079 = cljs.core.seq.call(null,seq__25066_25070);if(temp__4126__auto___25079)
{var seq__25066_25080__$1 = temp__4126__auto___25079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25066_25080__$1))
{var c__13316__auto___25081 = cljs.core.chunk_first.call(null,seq__25066_25080__$1);{
var G__25082 = cljs.core.chunk_rest.call(null,seq__25066_25080__$1);
var G__25083 = c__13316__auto___25081;
var G__25084 = cljs.core.count.call(null,c__13316__auto___25081);
var G__25085 = (0);
seq__25066_25070 = G__25082;
chunk__25067_25071 = G__25083;
count__25068_25072 = G__25084;
i__25069_25073 = G__25085;
continue;
}
} else
{var msg_25086 = cljs.core.first.call(null,seq__25066_25080__$1);console.log(msg_25086);
{
var G__25087 = cljs.core.next.call(null,seq__25066_25080__$1);
var G__25088 = null;
var G__25089 = (0);
var G__25090 = (0);
seq__25066_25070 = G__25087;
chunk__25067_25071 = G__25088;
count__25068_25072 = G__25089;
i__25069_25073 = G__25090;
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
var watch_and_reload__delegate = function (p__25091){var map__25093 = p__25091;var map__25093__$1 = ((cljs.core.seq_QMARK_.call(null,map__25093))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);var opts = map__25093__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25091 = null;if (arguments.length > 0) {
  p__25091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__25091);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25094){
var p__25091 = cljs.core.seq(arglist__25094);
return watch_and_reload__delegate(p__25091);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map