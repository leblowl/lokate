// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.util');
goog.require('cljs.core');
goog.require('cljs_uuid_utils');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('om.core');
lokate.util.status_colors = new cljs.core.PersistentArrayMap(null, 3, ["green","#bbf970","yellow","#ffc991","red","#ff8e7f"], null);
lokate.util.uuid = (function uuid(){
return [cljs.core.str(cljs_uuid_utils.make_random_uuid.call(null))].join('');
});
lokate.util.now = (function now(){
return Date.now();
});
/**
* @param {...*} var_args
*/
lokate.util.format = (function() { 
var format__delegate = function (args){
return cljs.core.apply.call(null,goog.string.format,args);
};
var format = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11952__i = 0, G__11952__a = new Array(arguments.length -  0);
while (G__11952__i < G__11952__a.length) {G__11952__a[G__11952__i] = arguments[G__11952__i + 0]; ++G__11952__i;}
  args = new cljs.core.IndexedSeq(G__11952__a,0);
} 
return format__delegate.call(this,args);};
format.cljs$lang$maxFixedArity = 0;
format.cljs$lang$applyTo = (function (arglist__11953){
var args = cljs.core.seq(arglist__11953);
return format__delegate(args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
lokate.util.display = (function display(show){
if(cljs.core.truth_(show)){
return {};
} else {
return {"display": "none"};
}
});
lokate.util.fade_in = (function fade_in(show){
if(cljs.core.truth_(show)){
return {"transition": "opacity .3s", "opacity": (1)};
} else {
return {"opacity": (0)};
}
});
/**
* Euclidean distance between 2 points
*/
lokate.util.distance = (function distance(pos1,pos2){
return Math.pow.call(null,(Math.pow.call(null,(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos2)),(2)) + Math.pow.call(null,(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos1) - new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos2)),(2))),0.5);
});
lokate.util.blankf = (function blankf(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return s;
} else {
return null;
}
});
lokate.util.mmap = (function mmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__11962(s__11963){
return (new cljs.core.LazySeq(null,(function (){
var s__11963__$1 = s__11963;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11963__$1);
if(temp__4126__auto__){
var s__11963__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11963__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11963__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11965 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11964 = (0);
while(true){
if((i__11964 < size__4513__auto__)){
var vec__11968 = cljs.core._nth.call(null,c__4512__auto__,i__11964);
var k = cljs.core.nth.call(null,vec__11968,(0),null);
var v = cljs.core.nth.call(null,vec__11968,(1),null);
cljs.core.chunk_append.call(null,b__11965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__11970 = (i__11964 + (1));
i__11964 = G__11970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11965),iter__11962.call(null,cljs.core.chunk_rest.call(null,s__11963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11965),null);
}
} else {
var vec__11969 = cljs.core.first.call(null,s__11963__$2);
var k = cljs.core.nth.call(null,vec__11969,(0),null);
var v = cljs.core.nth.call(null,vec__11969,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),iter__11962.call(null,cljs.core.rest.call(null,s__11963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,m);
})());
});
lokate.util.mfilter = (function mfilter(f,m){
return cljs.core.select_keys.call(null,m,(function (){var iter__4514__auto__ = (function iter__11979(s__11980){
return (new cljs.core.LazySeq(null,(function (){
var s__11980__$1 = s__11980;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11980__$1);
if(temp__4126__auto__){
var s__11980__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11980__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11980__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11982 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11981 = (0);
while(true){
if((i__11981 < size__4513__auto__)){
var vec__11985 = cljs.core._nth.call(null,c__4512__auto__,i__11981);
var k = cljs.core.nth.call(null,vec__11985,(0),null);
var v = cljs.core.nth.call(null,vec__11985,(1),null);
if(cljs.core.truth_(f.call(null,v))){
cljs.core.chunk_append.call(null,b__11982,k);

var G__11987 = (i__11981 + (1));
i__11981 = G__11987;
continue;
} else {
var G__11988 = (i__11981 + (1));
i__11981 = G__11988;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),iter__11979.call(null,cljs.core.chunk_rest.call(null,s__11980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),null);
}
} else {
var vec__11986 = cljs.core.first.call(null,s__11980__$2);
var k = cljs.core.nth.call(null,vec__11986,(0),null);
var v = cljs.core.nth.call(null,vec__11986,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return cljs.core.cons.call(null,k,iter__11979.call(null,cljs.core.rest.call(null,s__11980__$2)));
} else {
var G__11989 = cljs.core.rest.call(null,s__11980__$2);
s__11980__$1 = G__11989;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,m);
})());
});
lokate.util.sub_go_loop = (function sub_go_loop(ch,topic,fun){
var events = cljs.core.async.sub.call(null,ch,topic,cljs.core.async.chan.call(null));
var c__7172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto__,events){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto__,events){
return (function (state_12026){
var state_val_12027 = (state_12026[(1)]);
if((state_val_12027 === (5))){
var inst_12021 = (state_12026[(2)]);
var inst_12017 = inst_12021;
var state_12026__$1 = (function (){var statearr_12028 = state_12026;
(statearr_12028[(7)] = inst_12017);

return statearr_12028;
})();
var statearr_12029_12040 = state_12026__$1;
(statearr_12029_12040[(2)] = null);

(statearr_12029_12040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (4))){
var inst_12024 = (state_12026[(2)]);
var state_12026__$1 = state_12026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12026__$1,inst_12024);
} else {
if((state_val_12027 === (3))){
var inst_12017 = (state_12026[(7)]);
var inst_12019 = fun.call(null,inst_12017);
var state_12026__$1 = (function (){var statearr_12030 = state_12026;
(statearr_12030[(8)] = inst_12019);

return statearr_12030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(5),events);
} else {
if((state_val_12027 === (2))){
var inst_12016 = (state_12026[(2)]);
var inst_12017 = inst_12016;
var state_12026__$1 = (function (){var statearr_12031 = state_12026;
(statearr_12031[(7)] = inst_12017);

return statearr_12031;
})();
var statearr_12032_12041 = state_12026__$1;
(statearr_12032_12041[(2)] = null);

(statearr_12032_12041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12027 === (1))){
var state_12026__$1 = state_12026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(2),events);
} else {
return null;
}
}
}
}
}
});})(c__7172__auto__,events))
;
return ((function (switch__7116__auto__,c__7172__auto__,events){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_12036 = [null,null,null,null,null,null,null,null,null];
(statearr_12036[(0)] = state_machine__7117__auto__);

(statearr_12036[(1)] = (1));

return statearr_12036;
});
var state_machine__7117__auto____1 = (function (state_12026){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_12026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e12037){if((e12037 instanceof Object)){
var ex__7120__auto__ = e12037;
var statearr_12038_12042 = state_12026;
(statearr_12038_12042[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12043 = state_12026;
state_12026 = G__12043;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_12026){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_12026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto__,events))
})();
var state__7174__auto__ = (function (){var statearr_12039 = f__7173__auto__.call(null);
(statearr_12039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto__);

return statearr_12039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto__,events))
);

return c__7172__auto__;
});
lokate.util.ends_with_QMARK_ = (function ends_with_QMARK_(str,suffix){
return cljs.core.not_EQ_.call(null,str.indexOf(suffix,(cljs.core.count.call(null,str) - cljs.core.count.call(null,suffix))),(-1));
});
lokate.util.share = (function share(owner,msg){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),msg);
});
lokate.util.get_collections = (function get_collections(data){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));
});
lokate.util.get_collection = (function get_collection(data,cid){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505),cid], null));
});
lokate.util.get_units = (function get_units(collections){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.vals.call(null,collections)));
});
lokate.util.get_unit = (function get_unit(data,cid,uid){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505),cid,new cljs.core.Keyword(null,"units","units",-533089095),uid], null));
});
lokate.util.get_resource_types = (function get_resource_types(data){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"resource-types","resource-types",1520646353)], null));
});
lokate.util.get_resource_type = (function get_resource_type(data,rid){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"resource-types","resource-types",1520646353),rid], null));
});
/**
* @param {...*} var_args
*/
lokate.util.route_BANG_ = (function() { 
var route_BANG___delegate = function (evt_bus,route){
return cljs.core.async.put_BANG_.call(null,evt_bus,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-route","set-route",-1886203891)], null),route));
};
var route_BANG_ = function (evt_bus,var_args){
var route = null;
if (arguments.length > 1) {
var G__12044__i = 0, G__12044__a = new Array(arguments.length -  1);
while (G__12044__i < G__12044__a.length) {G__12044__a[G__12044__i] = arguments[G__12044__i + 1]; ++G__12044__i;}
  route = new cljs.core.IndexedSeq(G__12044__a,0);
} 
return route_BANG___delegate.call(this,evt_bus,route);};
route_BANG_.cljs$lang$maxFixedArity = 1;
route_BANG_.cljs$lang$applyTo = (function (arglist__12045){
var evt_bus = cljs.core.first(arglist__12045);
var route = cljs.core.rest(arglist__12045);
return route_BANG___delegate(evt_bus,route);
});
route_BANG_.cljs$core$IFn$_invoke$arity$variadic = route_BANG___delegate;
return route_BANG_;
})()
;
