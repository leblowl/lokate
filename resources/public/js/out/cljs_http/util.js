// Compiled by ClojureScript 0.0-2277
goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('goog.userAgent');
goog.require('goog.userAgent');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('goog.Uri');
/**
* Returns the value of the HTTP basic authentication header for
* `credentials`.
*/
cljs_http.util.basic_auth = (function basic_auth(credentials){if(cljs.core.truth_(credentials))
{var vec__11565 = ((cljs.core.map_QMARK_.call(null,credentials))?cljs.core.map.call(null,credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)], null)):credentials);var username = cljs.core.nth.call(null,vec__11565,(0),null);var password = cljs.core.nth.call(null,vec__11565,(1),null);return ("Basic "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.base64_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)))));
} else
{return null;
}
});
/**
* Build the url from the request map.
*/
cljs_http.util.build_url = (function build_url(p__11566){var map__11569 = p__11566;var map__11569__$1 = ((cljs.core.seq_QMARK_.call(null,map__11569))?cljs.core.apply.call(null,cljs.core.hash_map,map__11569):map__11569);var query_string = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));var uri = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var server_port = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));var server_name = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword(null,"server-name","server-name",-1012104295));var scheme = cljs.core.get.call(null,map__11569__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11570 = (new goog.Uri());G__11570.setScheme(cljs.core.name.call(null,(function (){var or__3553__auto__ = scheme;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return new cljs.core.Keyword(null,"http","http",382524695);
}
})()));
G__11570.setDomain(server_name);
G__11570.setPort(server_port);
G__11570.setPath(uri);
G__11570.setQuery(query_string,true);
return G__11570;
})()));
});
/**
* Returns dash separeted string `s` in camel case.
*/
cljs_http.util.camelize = (function camelize(s){return clojure.string.join.call(null,"-",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/-/)));
});
/**
* Build the headers from the map.
*/
cljs_http.util.build_headers = (function build_headers(m){return cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,m)),cljs.core.vals.call(null,m)));
});
/**
* Returns the user agent.
*/
cljs_http.util.user_agent = (function user_agent(){return goog.userAgent.getUserAgentString();
});
/**
* Returns true if the user agent is an Android client.
*/
cljs_http.util.android_QMARK_ = (function android_QMARK_(){return cljs.core.re_matches.call(null,/.*android.*/i,cljs_http.util.user_agent.call(null));
});
/**
* Transit decode an object from `s`.
*/
cljs_http.util.transit_decode = (function transit_decode(s,type,opts){var rdr = cognitect.transit.reader.call(null,type,opts);return cognitect.transit.read.call(null,rdr,s);
});
/**
* Transit encode `x` into a String.
*/
cljs_http.util.transit_encode = (function transit_encode(x,type,opts){var wrtr = cognitect.transit.writer.call(null,type,opts);return cognitect.transit.write.call(null,wrtr,x);
});
/**
* JSON decode an object from `s`.
*/
cljs_http.util.json_decode = (function json_decode(s){var temp__4124__auto__ = JSON.parse(s);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;return cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
} else
{return null;
}
});
/**
* JSON encode `x` into a String.
*/
cljs_http.util.json_encode = (function json_encode(x){return JSON.stringify(cljs.core.clj__GT_js.call(null,x));
});
cljs_http.util.parse_headers = (function parse_headers(headers){return cljs.core.reduce.call(null,(function (p1__11572_SHARP_,p2__11571_SHARP_){var vec__11574 = clojure.string.split.call(null,p2__11571_SHARP_,/:\s+/);var k = cljs.core.nth.call(null,vec__11574,(0),null);var v = cljs.core.nth.call(null,vec__11574,(1),null);if(cljs.core.truth_((function (){var or__3553__auto__ = clojure.string.blank_QMARK_.call(null,k);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return clojure.string.blank_QMARK_.call(null,v);
}
})()))
{return p1__11572_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11572_SHARP_,clojure.string.lower_case.call(null,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(function (){var or__3553__auto__ = headers;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});

//# sourceMappingURL=util.js.map