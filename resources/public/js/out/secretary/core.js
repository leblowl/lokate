// Compiled by ClojureScript 0.0-2371
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj26704 = {};return obj26704;
})();
secretary.core.route_matches = (function route_matches(this$,route){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (secretary.core.route_matches[(function (){var G__26708 = x__4277__auto__;return goog.typeOf(G__26708);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (secretary.core.route_matches["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRouteValue = (function (){var obj26710 = {};return obj26710;
})();
secretary.core.route_value = (function route_value(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.secretary$core$IRouteValue$route_value$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (secretary.core.route_value[(function (){var G__26714 = x__4277__auto__;return goog.typeOf(G__26714);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (secretary.core.route_value["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});
secretary.core.IRenderRoute = (function (){var obj26716 = {};return obj26716;
})();
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (secretary.core.render_route[(function (){var G__26722 = x__4277__auto__;return goog.typeOf(G__26722);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (secretary.core.render_route["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (secretary.core.render_route[(function (){var G__26724 = x__4277__auto__;return goog.typeOf(G__26724);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (secretary.core.render_route["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;
secretary.core._STAR_config_STAR_ = (function (){var G__26725 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$108,""], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26725) : cljs.core.atom.call(null,G__26725));
})();
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26727 = secretary.core._STAR_config_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26727) : cljs.core.deref.call(null,G__26727));
})(),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
* Given a key and a value return and encoded key-value pair.
*/
secretary.core.encode_pair = (function (){var method_table__4520__auto__ = (function (){var G__26728 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26728) : cljs.core.atom.call(null,G__26728));
})();var prefer_table__4521__auto__ = (function (){var G__26729 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26729) : cljs.core.atom.call(null,G__26729));
})();var method_cache__4522__auto__ = (function (){var G__26730 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26730) : cljs.core.atom.call(null,G__26730));
})();var cached_hierarchy__4523__auto__ = (function (){var G__26731 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26731) : cljs.core.atom.call(null,G__26731));
})();var hierarchy__4524__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$109,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("encode-pair",((function (method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__){
return (function (p__26732){var vec__26733 = p__26732;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26733,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26733,(1),null);if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))
{return cljs.core.constant$keyword$110;
} else
{if((function (){var or__3640__auto__ = cljs.core.map_QMARK_(v);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var G__26735 = v;if(G__26735)
{var bit__4304__auto__ = (G__26735.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__4304__auto__) || (G__26735.cljs$core$IRecord$))
{return true;
} else
{if((!G__26735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__26735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__26735);
}
}
})())
{return cljs.core.constant$keyword$111;
} else
{return null;
}
}
});})(method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__))
,cljs.core.constant$keyword$7,hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
secretary.core.key_index = (function() {
var key_index = null;
var key_index__1 = (function (k){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"[]");
});
var key_index__2 = (function (k,index){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"]");
});
key_index = function(k,index){
switch(arguments.length){
case 1:
return key_index__1.call(this,k);
case 2:
return key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
key_index.cljs$core$IFn$_invoke$arity$1 = key_index__1;
key_index.cljs$core$IFn$_invoke$arity$2 = key_index__2;
return key_index;
})()
;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$110,(function (p__26736){var vec__26737 = p__26736;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);var encoded = cljs.core.map_indexed(((function (vec__26737,k,v){
return (function (i,x){var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));var G__26738 = pair;return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__26738) : secretary.core.encode_pair.call(null,G__26738));
});})(vec__26737,k,v))
,v);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$111,(function (p__26739){var vec__26740 = p__26739;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26740,(1),null);var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26740,k,v){
return (function (p__26741){var vec__26742 = p__26741;var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(0),null);var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(1),null);var G__26743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__26743) : secretary.core.encode_pair.call(null,G__26743));
});})(vec__26740,k,v))
,v);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (p__26744){var vec__26745 = p__26744;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__26746 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__26746) : secretary.core.encode.call(null,G__26746));
})()));
}));
/**
* Convert a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
* Like js/encodeURIComponent excepts ignore slashes.
*/
secretary.core.encode_uri = (function encode_uri(uri){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
* Parse a value from a serialized query-string key index. If the
* index value is empty 0 is returned, if it's a digit it returns the
* js/parseInt value, otherwise it returns the extracted index.
*/
secretary.core.parse_path = (function parse_path(path){var index_re = /\[([^\]]*)\]*/;var parts = cljs.core.re_seq(index_re,path);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__26750){var vec__26751 = p__26750;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751,(0),null);var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751,(1),null);if(cljs.core.empty_QMARK_(part))
{return (0);
} else
{if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part)))
{var G__26752 = part;return parseInt(G__26752);
} else
{return part;

}
}
});})(index_re,parts))
,parts);
});
/**
* Return a key path for a serialized query-string entry.
* 
* Ex.
* 
* (key-parse "foo[][a][][b]")
* ;; => ("foo" 0 "a" 0 "b")
* 
*/
secretary.core.key_parse = (function key_parse(k){var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;var vec__26754 = cljs.core.re_matches(re,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26754,(0),null);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26754,(1),null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26754,(2),null);var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);return cljs.core.cons(key,parsed_path);
});
/**
* Like assoc-in but numbers in path create vectors instead of maps.
* 
* Ex.
* 
* (assoc-in-query-params {} ["foo" 0] 1)
* ;; => {"foo" [1]}
* 
* (assoc-in-query-params {} ["foo" 0 "a"] 1)
* ;; => {"foo" [{"a" 1}]}
* 
*/
secretary.core.assoc_in_query_params = (function assoc_in_query_params(m,path,v){var heads = (function (xs){return cljs.core.map_indexed((function (i,_){return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});var hs = heads(path);var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h))))))
{return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else
{return m__$1;
}
});})(heads,hs))
,m,hs);if((cljs.core.last(path) === (0)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else
{return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){var vec__26757 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26757,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26757,(1),null);return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__26758 = v;return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__26758) : secretary.core.decode.call(null,G__26758));
})());
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);var params__$1 = clojure.walk.keywordize_keys(params);return params__$1;
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches(re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_(ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){if(cljs.core.truth_((function (){var G__26760 = c;return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__26760) : secretary.core.re_escape_chars.call(null,G__26760));
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some((function (p__26765){var vec__26766 = p__26765;var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(1),null);var temp__4126__auto__ = cljs.core.re_find(re,s);if(cljs.core.truth_(temp__4126__auto__))
{var vec__26767 = temp__4126__auto__;var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26767,(0),null);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26767,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__26768 = c;return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__26768) : action.call(null,G__26768));
})()], null);
} else
{return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){var s__$1 = s;var pattern = "";var params = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.seq(s__$1))
{var vec__26771 = secretary.core.lex_STAR_(s__$1,clauses);var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26771,(0),null);var vec__26772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26771,(1),null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(1),null);{
var G__26773 = s__$2;
var G__26774 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
var G__26775 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__26773;
pattern = G__26774;
params = G__26775;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+"$")),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(orig_route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$112);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;?/]+)";var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape(v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__26781 = secretary.core.lex_route(orig_route,clauses);var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26781,(0),null);var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26781,(1),null);if(typeof secretary.core.t26782 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t26782 = (function (params,re,vec__26781,clauses,orig_route,compile_route,meta26783){
this.params = params;
this.re = re;
this.vec__26781 = vec__26781;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta26783 = meta26783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t26782.cljs$lang$type = true;
secretary.core.t26782.cljs$lang$ctorStr = "secretary.core/t26782";
secretary.core.t26782.cljs$lang$ctorPrWriter = ((function (clauses,vec__26781,re,params){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"secretary.core/t26782");
});})(clauses,vec__26781,re,params))
;
secretary.core.t26782.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t26782.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__26781,re,params){
return (function (_,route){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_(self__.re,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__26785 = temp__4126__auto__;var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26785,(0),null);var ms = cljs.core.nthnext(vec__26785,(1));return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else
{return null;
}
});})(clauses,vec__26781,re,params))
;
secretary.core.t26782.prototype.secretary$core$IRouteValue$ = true;
secretary.core.t26782.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__26781,re,params){
return (function (this$){var self__ = this;
var this$__$1 = this;return self__.orig_route;
});})(clauses,vec__26781,re,params))
;
secretary.core.t26782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__26781,re,params){
return (function (_26784){var self__ = this;
var _26784__$1 = this;return self__.meta26783;
});})(clauses,vec__26781,re,params))
;
secretary.core.t26782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__26781,re,params){
return (function (_26784,meta26783__$1){var self__ = this;
var _26784__$1 = this;return (new secretary.core.t26782(self__.params,self__.re,self__.vec__26781,self__.clauses,self__.orig_route,self__.compile_route,meta26783__$1));
});})(clauses,vec__26781,re,params))
;
secretary.core.__GT_t26782 = ((function (clauses,vec__26781,re,params){
return (function __GT_t26782(params__$1,re__$1,vec__26781__$1,clauses__$1,orig_route__$1,compile_route__$1,meta26783){return (new secretary.core.t26782(params__$1,re__$1,vec__26781__$1,clauses__$1,orig_route__$1,compile_route__$1,meta26783));
});})(clauses,vec__26781,re,params))
;
}
return (new secretary.core.t26782(params,re,vec__26781,clauses,orig_route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__26787 = obj;if(G__26787)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26787.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__26787.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__26787);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__26787);
}
})())
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__26788){
var obj = cljs.core.first(arglist__26788);
var args = cljs.core.rest(arglist__26788);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = (function (){var G__26789 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26789) : cljs.core.atom.call(null,G__26789));
})();
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv((function (p__26792){var vec__26793 = p__26792;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26793,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26793,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){var G__26796 = secretary.core._STAR_routes_STAR_;var G__26797 = cljs.core.PersistentVector.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26796,G__26797) : cljs.core.reset_BANG_.call(null,G__26796,G__26797));
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some((function (p__26801){var vec__26802 = p__26801;var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26802,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26802,(1),null);var temp__4126__auto__ = secretary.core.route_matches(compiled_route,route);if(cljs.core.truth_(temp__4126__auto__))
{var params = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$113,action,cljs.core.constant$keyword$114,params,cljs.core.constant$keyword$115,compiled_route], null);
} else
{return null;
}
}),(function (){var G__26803 = secretary.core._STAR_routes_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26803) : cljs.core.deref.call(null,G__26803));
})());
});
/**
* Returns original route value as set in defroute when passed a URI path.
*/
secretary.core.locate_route_value = (function locate_route_value(uri){return secretary.core.route_value(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function prefix(){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108], null))));
});
secretary.core.uri_without_prefix = (function uri_without_prefix(uri){return clojure.string.replace(uri,cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.prefix()))),"");
});
/**
* Ensures that the uri has a leading slash
*/
secretary.core.uri_with_leading_slash = (function uri_with_leading_slash(uri){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri)))
{return uri;
} else
{return ("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));
}
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__26807 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(0),null);var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26807,(1),null);var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,secretary.core.decode_query_params(query_string)], null):null);var map__26808 = secretary.core.locate_route(uri_path__$1);var map__26808__$1 = ((cljs.core.seq_QMARK_(map__26808))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26808):map__26808);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,cljs.core.constant$keyword$114);var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,cljs.core.constant$keyword$113);var action__$1 = (function (){var or__3640__auto__ = action;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));var G__26809 = params__$1;return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__26809) : action__$1.call(null,G__26809));
});
secretary.core.invalid_params = (function invalid_params(params,validations){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26812){var vec__26813 = p__26812;var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813,(0),null);var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813,(1),null);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);if(cljs.core.truth_(cljs.core.re_matches(validation,value)))
{return m;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function params_valid_QMARK_(params,validations){return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__26814,route){var vec__26815 = p__26814;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(0),null);var validations = cljs.core.nthnext(vec__26815,(1));var vec__26816 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816,(0),null);var validations__$1 = cljs.core.nthnext(vec__26816,(1));var params = secretary.core.compile_route(route_string__$1).secretary$core$IRouteMatches$route_matches$arity$2(null,route);if(secretary.core.params_valid_QMARK_(params,validations__$1))
{return params;
} else
{return null;
}
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__26817 = temp__4126__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26817,(0),null);var ms = cljs.core.nthnext(vec__26817,(1));return cljs.core.vec(ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.compile_route(this$).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__26818){var vec__26819 = p__26818;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26819,(0),null);var validations = cljs.core.nthnext(vec__26819,(1));var vec__26820 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26820,(0),null);var validations__$1 = cljs.core.nthnext(vec__26820,(1));return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
RegExp.prototype.secretary$core$IRouteValue$ = true;
RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
(secretary.core.IRouteValue["string"] = true);
(secretary.core.route_value["string"] = (function (this$){return secretary.core.compile_route(this$).secretary$core$IRouteValue$route_value$arity$1(null);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){var this$__$1 = this;return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__26821,params){var vec__26822 = p__26821;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26822,(0),null);var validations = cljs.core.nthnext(vec__26822,(1));var vec__26823 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26823,(0),null);var validations__$1 = cljs.core.nthnext(vec__26823,(1));var invalid = secretary.core.invalid_params(params,validations__$1);if(cljs.core.empty_QMARK_(invalid))
{return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__26824 = params;var map__26824__$1 = ((cljs.core.seq_QMARK_(map__26824))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26824):map__26824);var m = map__26824__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,cljs.core.constant$keyword$116);var a = (function (){var G__26825 = m;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26825) : cljs.core.atom.call(null,G__26825));
})();var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__26824,map__26824__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26826 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26826) : cljs.core.deref.call(null,G__26826));
})(),lookup);var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));
return secretary.core.encode_uri(cljs.core.first(v));
})():(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));return replacement;
});})(map__26824,map__26824__$1,m,query_params,a))
);var path__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108], null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));var temp__4124__auto__ = (function (){var and__3628__auto__ = query_params;if(cljs.core.truth_(and__3628__auto__))
{return secretary.core.encode_query_params(query_params);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var query_string = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string));
} else
{return path__$1;
}
}));
