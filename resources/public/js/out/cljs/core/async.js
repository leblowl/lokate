// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11989 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11989 = (function (f,fn_handler,meta11990){
this.f = f;
this.fn_handler = fn_handler;
this.meta11990 = meta11990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11989.cljs$lang$type = true;
cljs.core.async.t11989.cljs$lang$ctorStr = "cljs.core.async/t11989";
cljs.core.async.t11989.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t11989");
});
cljs.core.async.t11989.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11991){var self__ = this;
var _11991__$1 = this;return self__.meta11990;
});
cljs.core.async.t11989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11991,meta11990__$1){var self__ = this;
var _11991__$1 = this;return (new cljs.core.async.t11989(self__.f,self__.fn_handler,meta11990__$1));
});
cljs.core.async.__GT_t11989 = (function __GT_t11989(f__$1,fn_handler__$1,meta11990){return (new cljs.core.async.t11989(f__$1,fn_handler__$1,meta11990));
});
}
return (new cljs.core.async.t11989(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11993 = buff;if(G__11993)
{var bit__4220__auto__ = null;if(cljs.core.truth_((function (){var or__3570__auto__ = bit__4220__auto__;if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return G__11993.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11993.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11993);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11994 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11994);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11994,ret){
return (function (){return fn1.call(null,val_11994);
});})(val_11994,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4426__auto___11995 = n;var x_11996 = (0);while(true){
if((x_11996 < n__4426__auto___11995))
{(a[x_11996] = (0));
{
var G__11997 = (x_11996 + (1));
x_11996 = G__11997;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11998 = (i + (1));
i = G__11998;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12002 = (function (flag,alt_flag,meta12003){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12003 = meta12003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12002.cljs$lang$type = true;
cljs.core.async.t12002.cljs$lang$ctorStr = "cljs.core.async/t12002";
cljs.core.async.t12002.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t12002");
});})(flag))
;
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12004){var self__ = this;
var _12004__$1 = this;return self__.meta12003;
});})(flag))
;
cljs.core.async.t12002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12004,meta12003__$1){var self__ = this;
var _12004__$1 = this;return (new cljs.core.async.t12002(self__.flag,self__.alt_flag,meta12003__$1));
});})(flag))
;
cljs.core.async.__GT_t12002 = ((function (flag){
return (function __GT_t12002(flag__$1,alt_flag__$1,meta12003){return (new cljs.core.async.t12002(flag__$1,alt_flag__$1,meta12003));
});})(flag))
;
}
return (new cljs.core.async.t12002(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12008 = (function (cb,flag,alt_handler,meta12009){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12009 = meta12009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12008.cljs$lang$type = true;
cljs.core.async.t12008.cljs$lang$ctorStr = "cljs.core.async/t12008";
cljs.core.async.t12008.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t12008");
});
cljs.core.async.t12008.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12010){var self__ = this;
var _12010__$1 = this;return self__.meta12009;
});
cljs.core.async.t12008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12010,meta12009__$1){var self__ = this;
var _12010__$1 = this;return (new cljs.core.async.t12008(self__.cb,self__.flag,self__.alt_handler,meta12009__$1));
});
cljs.core.async.__GT_t12008 = (function __GT_t12008(cb__$1,flag__$1,alt_handler__$1,meta12009){return (new cljs.core.async.t12008(cb__$1,flag__$1,alt_handler__$1,meta12009));
});
}
return (new cljs.core.async.t12008(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12011_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12011_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12012_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12012_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3570__auto__ = wport;if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12013 = (i + (1));
i = G__12013;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3570__auto__ = ret;if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3558__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3558__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3558__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12014){var map__12016 = p__12014;var map__12016__$1 = ((cljs.core.seq_QMARK_.call(null,map__12016))?cljs.core.apply.call(null,cljs.core.hash_map,map__12016):map__12016);var opts = map__12016__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12014 = null;if (arguments.length > 1) {
  p__12014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12014);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12017){
var ports = cljs.core.first(arglist__12017);
var p__12014 = cljs.core.rest(arglist__12017);
return alts_BANG___delegate(ports,p__12014);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6391__auto___12112 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12112){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___12112){
return (function (state_12088){var state_val_12089 = (state_12088[(1)]);if((state_val_12089 === (7)))
{var inst_12084 = (state_12088[(2)]);var state_12088__$1 = state_12088;var statearr_12090_12113 = state_12088__$1;(statearr_12090_12113[(2)] = inst_12084);
(statearr_12090_12113[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (1)))
{var state_12088__$1 = state_12088;var statearr_12091_12114 = state_12088__$1;(statearr_12091_12114[(2)] = null);
(statearr_12091_12114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (4)))
{var inst_12067 = (state_12088[(7)]);var inst_12067__$1 = (state_12088[(2)]);var inst_12068 = (inst_12067__$1 == null);var state_12088__$1 = (function (){var statearr_12092 = state_12088;(statearr_12092[(7)] = inst_12067__$1);
return statearr_12092;
})();if(cljs.core.truth_(inst_12068))
{var statearr_12093_12115 = state_12088__$1;(statearr_12093_12115[(1)] = (5));
} else
{var statearr_12094_12116 = state_12088__$1;(statearr_12094_12116[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (13)))
{var state_12088__$1 = state_12088;var statearr_12095_12117 = state_12088__$1;(statearr_12095_12117[(2)] = null);
(statearr_12095_12117[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (6)))
{var inst_12067 = (state_12088[(7)]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12088__$1,(11),to,inst_12067);
} else
{if((state_val_12089 === (3)))
{var inst_12086 = (state_12088[(2)]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12088__$1,inst_12086);
} else
{if((state_val_12089 === (12)))
{var state_12088__$1 = state_12088;var statearr_12096_12118 = state_12088__$1;(statearr_12096_12118[(2)] = null);
(statearr_12096_12118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (2)))
{var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12088__$1,(4),from);
} else
{if((state_val_12089 === (11)))
{var inst_12077 = (state_12088[(2)]);var state_12088__$1 = state_12088;if(cljs.core.truth_(inst_12077))
{var statearr_12097_12119 = state_12088__$1;(statearr_12097_12119[(1)] = (12));
} else
{var statearr_12098_12120 = state_12088__$1;(statearr_12098_12120[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (9)))
{var state_12088__$1 = state_12088;var statearr_12099_12121 = state_12088__$1;(statearr_12099_12121[(2)] = null);
(statearr_12099_12121[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (5)))
{var state_12088__$1 = state_12088;if(cljs.core.truth_(close_QMARK_))
{var statearr_12100_12122 = state_12088__$1;(statearr_12100_12122[(1)] = (8));
} else
{var statearr_12101_12123 = state_12088__$1;(statearr_12101_12123[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (14)))
{var inst_12082 = (state_12088[(2)]);var state_12088__$1 = state_12088;var statearr_12102_12124 = state_12088__$1;(statearr_12102_12124[(2)] = inst_12082);
(statearr_12102_12124[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (10)))
{var inst_12074 = (state_12088[(2)]);var state_12088__$1 = state_12088;var statearr_12103_12125 = state_12088__$1;(statearr_12103_12125[(2)] = inst_12074);
(statearr_12103_12125[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12089 === (8)))
{var inst_12071 = cljs.core.async.close_BANG_.call(null,to);var state_12088__$1 = state_12088;var statearr_12104_12126 = state_12088__$1;(statearr_12104_12126[(2)] = inst_12071);
(statearr_12104_12126[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___12112))
;return ((function (switch__6376__auto__,c__6391__auto___12112){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12108 = [null,null,null,null,null,null,null,null];(statearr_12108[(0)] = state_machine__6377__auto__);
(statearr_12108[(1)] = (1));
return statearr_12108;
});
var state_machine__6377__auto____1 = (function (state_12088){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12109){if((e12109 instanceof Object))
{var ex__6380__auto__ = e12109;var statearr_12110_12127 = state_12088;(statearr_12110_12127[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12128 = state_12088;
state_12088 = G__12128;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12088){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___12112))
})();var state__6393__auto__ = (function (){var statearr_12111 = f__6392__auto__.call(null);(statearr_12111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12112);
return statearr_12111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12112))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12312){var vec__12313 = p__12312;var v = cljs.core.nth.call(null,vec__12313,(0),null);var p = cljs.core.nth.call(null,vec__12313,(1),null);var job = vec__12313;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6391__auto___12495 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results){
return (function (state_12318){var state_val_12319 = (state_12318[(1)]);if((state_val_12319 === (2)))
{var inst_12315 = (state_12318[(2)]);var inst_12316 = cljs.core.async.close_BANG_.call(null,res);var state_12318__$1 = (function (){var statearr_12320 = state_12318;(statearr_12320[(7)] = inst_12315);
return statearr_12320;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12318__$1,inst_12316);
} else
{if((state_val_12319 === (1)))
{var state_12318__$1 = state_12318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12318__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results))
;return ((function (switch__6376__auto__,c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12324 = [null,null,null,null,null,null,null,null];(statearr_12324[(0)] = state_machine__6377__auto__);
(statearr_12324[(1)] = (1));
return statearr_12324;
});
var state_machine__6377__auto____1 = (function (state_12318){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12318);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12325){if((e12325 instanceof Object))
{var ex__6380__auto__ = e12325;var statearr_12326_12496 = state_12318;(statearr_12326_12496[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12325;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12497 = state_12318;
state_12318 = G__12497;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12318){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results))
})();var state__6393__auto__ = (function (){var statearr_12327 = f__6392__auto__.call(null);(statearr_12327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12495);
return statearr_12327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12495,res,vec__12313,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12328){var vec__12329 = p__12328;var v = cljs.core.nth.call(null,vec__12329,(0),null);var p = cljs.core.nth.call(null,vec__12329,(1),null);var job = vec__12329;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4426__auto___12498 = n;var __12499 = (0);while(true){
if((__12499 < n__4426__auto___12498))
{var G__12330_12500 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12330_12500) {
case "async":
var c__6391__auto___12502 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12499,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (__12499,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function (state_12343){var state_val_12344 = (state_12343[(1)]);if((state_val_12344 === (7)))
{var inst_12339 = (state_12343[(2)]);var state_12343__$1 = state_12343;var statearr_12345_12503 = state_12343__$1;(statearr_12345_12503[(2)] = inst_12339);
(statearr_12345_12503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12344 === (6)))
{var state_12343__$1 = state_12343;var statearr_12346_12504 = state_12343__$1;(statearr_12346_12504[(2)] = null);
(statearr_12346_12504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12344 === (5)))
{var state_12343__$1 = state_12343;var statearr_12347_12505 = state_12343__$1;(statearr_12347_12505[(2)] = null);
(statearr_12347_12505[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12344 === (4)))
{var inst_12333 = (state_12343[(2)]);var inst_12334 = async.call(null,inst_12333);var state_12343__$1 = state_12343;if(cljs.core.truth_(inst_12334))
{var statearr_12348_12506 = state_12343__$1;(statearr_12348_12506[(1)] = (5));
} else
{var statearr_12349_12507 = state_12343__$1;(statearr_12349_12507[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12344 === (3)))
{var inst_12341 = (state_12343[(2)]);var state_12343__$1 = state_12343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12343__$1,inst_12341);
} else
{if((state_val_12344 === (2)))
{var state_12343__$1 = state_12343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12343__$1,(4),jobs);
} else
{if((state_val_12344 === (1)))
{var state_12343__$1 = state_12343;var statearr_12350_12508 = state_12343__$1;(statearr_12350_12508[(2)] = null);
(statearr_12350_12508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12499,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
;return ((function (__12499,switch__6376__auto__,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12354 = [null,null,null,null,null,null,null];(statearr_12354[(0)] = state_machine__6377__auto__);
(statearr_12354[(1)] = (1));
return statearr_12354;
});
var state_machine__6377__auto____1 = (function (state_12343){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12355){if((e12355 instanceof Object))
{var ex__6380__auto__ = e12355;var statearr_12356_12509 = state_12343;(statearr_12356_12509[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12355;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12510 = state_12343;
state_12343 = G__12510;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12343){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(__12499,switch__6376__auto__,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
})();var state__6393__auto__ = (function (){var statearr_12357 = f__6392__auto__.call(null);(statearr_12357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12502);
return statearr_12357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(__12499,c__6391__auto___12502,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
);

break;
case "compute":
var c__6391__auto___12511 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12499,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (__12499,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function (state_12370){var state_val_12371 = (state_12370[(1)]);if((state_val_12371 === (7)))
{var inst_12366 = (state_12370[(2)]);var state_12370__$1 = state_12370;var statearr_12372_12512 = state_12370__$1;(statearr_12372_12512[(2)] = inst_12366);
(statearr_12372_12512[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (6)))
{var state_12370__$1 = state_12370;var statearr_12373_12513 = state_12370__$1;(statearr_12373_12513[(2)] = null);
(statearr_12373_12513[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (5)))
{var state_12370__$1 = state_12370;var statearr_12374_12514 = state_12370__$1;(statearr_12374_12514[(2)] = null);
(statearr_12374_12514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (4)))
{var inst_12360 = (state_12370[(2)]);var inst_12361 = process.call(null,inst_12360);var state_12370__$1 = state_12370;if(cljs.core.truth_(inst_12361))
{var statearr_12375_12515 = state_12370__$1;(statearr_12375_12515[(1)] = (5));
} else
{var statearr_12376_12516 = state_12370__$1;(statearr_12376_12516[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (3)))
{var inst_12368 = (state_12370[(2)]);var state_12370__$1 = state_12370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12370__$1,inst_12368);
} else
{if((state_val_12371 === (2)))
{var state_12370__$1 = state_12370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12370__$1,(4),jobs);
} else
{if((state_val_12371 === (1)))
{var state_12370__$1 = state_12370;var statearr_12377_12517 = state_12370__$1;(statearr_12377_12517[(2)] = null);
(statearr_12377_12517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12499,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
;return ((function (__12499,switch__6376__auto__,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12381 = [null,null,null,null,null,null,null];(statearr_12381[(0)] = state_machine__6377__auto__);
(statearr_12381[(1)] = (1));
return statearr_12381;
});
var state_machine__6377__auto____1 = (function (state_12370){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12382){if((e12382 instanceof Object))
{var ex__6380__auto__ = e12382;var statearr_12383_12518 = state_12370;(statearr_12383_12518[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12519 = state_12370;
state_12370 = G__12519;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12370){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(__12499,switch__6376__auto__,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
})();var state__6393__auto__ = (function (){var statearr_12384 = f__6392__auto__.call(null);(statearr_12384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12511);
return statearr_12384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(__12499,c__6391__auto___12511,G__12330_12500,n__4426__auto___12498,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12520 = (__12499 + (1));
__12499 = G__12520;
continue;
}
} else
{}
break;
}
var c__6391__auto___12521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12521,jobs,results,process,async){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___12521,jobs,results,process,async){
return (function (state_12406){var state_val_12407 = (state_12406[(1)]);if((state_val_12407 === (9)))
{var inst_12399 = (state_12406[(2)]);var state_12406__$1 = (function (){var statearr_12408 = state_12406;(statearr_12408[(7)] = inst_12399);
return statearr_12408;
})();var statearr_12409_12522 = state_12406__$1;(statearr_12409_12522[(2)] = null);
(statearr_12409_12522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12407 === (8)))
{var inst_12392 = (state_12406[(8)]);var inst_12397 = (state_12406[(2)]);var state_12406__$1 = (function (){var statearr_12410 = state_12406;(statearr_12410[(9)] = inst_12397);
return statearr_12410;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12406__$1,(9),results,inst_12392);
} else
{if((state_val_12407 === (7)))
{var inst_12402 = (state_12406[(2)]);var state_12406__$1 = state_12406;var statearr_12411_12523 = state_12406__$1;(statearr_12411_12523[(2)] = inst_12402);
(statearr_12411_12523[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12407 === (6)))
{var inst_12392 = (state_12406[(8)]);var inst_12387 = (state_12406[(10)]);var inst_12392__$1 = cljs.core.async.chan.call(null,(1));var inst_12393 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12394 = [inst_12387,inst_12392__$1];var inst_12395 = (new cljs.core.PersistentVector(null,2,(5),inst_12393,inst_12394,null));var state_12406__$1 = (function (){var statearr_12412 = state_12406;(statearr_12412[(8)] = inst_12392__$1);
return statearr_12412;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12406__$1,(8),jobs,inst_12395);
} else
{if((state_val_12407 === (5)))
{var inst_12390 = cljs.core.async.close_BANG_.call(null,jobs);var state_12406__$1 = state_12406;var statearr_12413_12524 = state_12406__$1;(statearr_12413_12524[(2)] = inst_12390);
(statearr_12413_12524[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12407 === (4)))
{var inst_12387 = (state_12406[(10)]);var inst_12387__$1 = (state_12406[(2)]);var inst_12388 = (inst_12387__$1 == null);var state_12406__$1 = (function (){var statearr_12414 = state_12406;(statearr_12414[(10)] = inst_12387__$1);
return statearr_12414;
})();if(cljs.core.truth_(inst_12388))
{var statearr_12415_12525 = state_12406__$1;(statearr_12415_12525[(1)] = (5));
} else
{var statearr_12416_12526 = state_12406__$1;(statearr_12416_12526[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12407 === (3)))
{var inst_12404 = (state_12406[(2)]);var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12406__$1,inst_12404);
} else
{if((state_val_12407 === (2)))
{var state_12406__$1 = state_12406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12406__$1,(4),from);
} else
{if((state_val_12407 === (1)))
{var state_12406__$1 = state_12406;var statearr_12417_12527 = state_12406__$1;(statearr_12417_12527[(2)] = null);
(statearr_12417_12527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___12521,jobs,results,process,async))
;return ((function (switch__6376__auto__,c__6391__auto___12521,jobs,results,process,async){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12421 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12421[(0)] = state_machine__6377__auto__);
(statearr_12421[(1)] = (1));
return statearr_12421;
});
var state_machine__6377__auto____1 = (function (state_12406){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12422){if((e12422 instanceof Object))
{var ex__6380__auto__ = e12422;var statearr_12423_12528 = state_12406;(statearr_12423_12528[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12422;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12529 = state_12406;
state_12406 = G__12529;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12406){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___12521,jobs,results,process,async))
})();var state__6393__auto__ = (function (){var statearr_12424 = f__6392__auto__.call(null);(statearr_12424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12521);
return statearr_12424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12521,jobs,results,process,async))
);
var c__6391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto__,jobs,results,process,async){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto__,jobs,results,process,async){
return (function (state_12462){var state_val_12463 = (state_12462[(1)]);if((state_val_12463 === (7)))
{var inst_12458 = (state_12462[(2)]);var state_12462__$1 = state_12462;var statearr_12464_12530 = state_12462__$1;(statearr_12464_12530[(2)] = inst_12458);
(statearr_12464_12530[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (20)))
{var state_12462__$1 = state_12462;var statearr_12465_12531 = state_12462__$1;(statearr_12465_12531[(2)] = null);
(statearr_12465_12531[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (1)))
{var state_12462__$1 = state_12462;var statearr_12466_12532 = state_12462__$1;(statearr_12466_12532[(2)] = null);
(statearr_12466_12532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (4)))
{var inst_12427 = (state_12462[(7)]);var inst_12427__$1 = (state_12462[(2)]);var inst_12428 = (inst_12427__$1 == null);var state_12462__$1 = (function (){var statearr_12467 = state_12462;(statearr_12467[(7)] = inst_12427__$1);
return statearr_12467;
})();if(cljs.core.truth_(inst_12428))
{var statearr_12468_12533 = state_12462__$1;(statearr_12468_12533[(1)] = (5));
} else
{var statearr_12469_12534 = state_12462__$1;(statearr_12469_12534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (15)))
{var inst_12440 = (state_12462[(8)]);var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12462__$1,(18),to,inst_12440);
} else
{if((state_val_12463 === (21)))
{var inst_12453 = (state_12462[(2)]);var state_12462__$1 = state_12462;var statearr_12470_12535 = state_12462__$1;(statearr_12470_12535[(2)] = inst_12453);
(statearr_12470_12535[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (13)))
{var inst_12455 = (state_12462[(2)]);var state_12462__$1 = (function (){var statearr_12471 = state_12462;(statearr_12471[(9)] = inst_12455);
return statearr_12471;
})();var statearr_12472_12536 = state_12462__$1;(statearr_12472_12536[(2)] = null);
(statearr_12472_12536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (6)))
{var inst_12427 = (state_12462[(7)]);var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,(11),inst_12427);
} else
{if((state_val_12463 === (17)))
{var inst_12448 = (state_12462[(2)]);var state_12462__$1 = state_12462;if(cljs.core.truth_(inst_12448))
{var statearr_12473_12537 = state_12462__$1;(statearr_12473_12537[(1)] = (19));
} else
{var statearr_12474_12538 = state_12462__$1;(statearr_12474_12538[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (3)))
{var inst_12460 = (state_12462[(2)]);var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12462__$1,inst_12460);
} else
{if((state_val_12463 === (12)))
{var inst_12437 = (state_12462[(10)]);var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,(14),inst_12437);
} else
{if((state_val_12463 === (2)))
{var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,(4),results);
} else
{if((state_val_12463 === (19)))
{var state_12462__$1 = state_12462;var statearr_12475_12539 = state_12462__$1;(statearr_12475_12539[(2)] = null);
(statearr_12475_12539[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (11)))
{var inst_12437 = (state_12462[(2)]);var state_12462__$1 = (function (){var statearr_12476 = state_12462;(statearr_12476[(10)] = inst_12437);
return statearr_12476;
})();var statearr_12477_12540 = state_12462__$1;(statearr_12477_12540[(2)] = null);
(statearr_12477_12540[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (9)))
{var state_12462__$1 = state_12462;var statearr_12478_12541 = state_12462__$1;(statearr_12478_12541[(2)] = null);
(statearr_12478_12541[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (5)))
{var state_12462__$1 = state_12462;if(cljs.core.truth_(close_QMARK_))
{var statearr_12479_12542 = state_12462__$1;(statearr_12479_12542[(1)] = (8));
} else
{var statearr_12480_12543 = state_12462__$1;(statearr_12480_12543[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (14)))
{var inst_12442 = (state_12462[(11)]);var inst_12440 = (state_12462[(8)]);var inst_12440__$1 = (state_12462[(2)]);var inst_12441 = (inst_12440__$1 == null);var inst_12442__$1 = cljs.core.not.call(null,inst_12441);var state_12462__$1 = (function (){var statearr_12481 = state_12462;(statearr_12481[(11)] = inst_12442__$1);
(statearr_12481[(8)] = inst_12440__$1);
return statearr_12481;
})();if(inst_12442__$1)
{var statearr_12482_12544 = state_12462__$1;(statearr_12482_12544[(1)] = (15));
} else
{var statearr_12483_12545 = state_12462__$1;(statearr_12483_12545[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (16)))
{var inst_12442 = (state_12462[(11)]);var state_12462__$1 = state_12462;var statearr_12484_12546 = state_12462__$1;(statearr_12484_12546[(2)] = inst_12442);
(statearr_12484_12546[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (10)))
{var inst_12434 = (state_12462[(2)]);var state_12462__$1 = state_12462;var statearr_12485_12547 = state_12462__$1;(statearr_12485_12547[(2)] = inst_12434);
(statearr_12485_12547[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (18)))
{var inst_12445 = (state_12462[(2)]);var state_12462__$1 = state_12462;var statearr_12486_12548 = state_12462__$1;(statearr_12486_12548[(2)] = inst_12445);
(statearr_12486_12548[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12463 === (8)))
{var inst_12431 = cljs.core.async.close_BANG_.call(null,to);var state_12462__$1 = state_12462;var statearr_12487_12549 = state_12462__$1;(statearr_12487_12549[(2)] = inst_12431);
(statearr_12487_12549[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto__,jobs,results,process,async))
;return ((function (switch__6376__auto__,c__6391__auto__,jobs,results,process,async){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12491 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12491[(0)] = state_machine__6377__auto__);
(statearr_12491[(1)] = (1));
return statearr_12491;
});
var state_machine__6377__auto____1 = (function (state_12462){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12462);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12492){if((e12492 instanceof Object))
{var ex__6380__auto__ = e12492;var statearr_12493_12550 = state_12462;(statearr_12493_12550[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12551 = state_12462;
state_12462 = G__12551;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12462){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto__,jobs,results,process,async))
})();var state__6393__auto__ = (function (){var statearr_12494 = f__6392__auto__.call(null);(statearr_12494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto__);
return statearr_12494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto__,jobs,results,process,async))
);
return c__6391__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6391__auto___12652 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12652,tc,fc){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___12652,tc,fc){
return (function (state_12627){var state_val_12628 = (state_12627[(1)]);if((state_val_12628 === (7)))
{var inst_12623 = (state_12627[(2)]);var state_12627__$1 = state_12627;var statearr_12629_12653 = state_12627__$1;(statearr_12629_12653[(2)] = inst_12623);
(statearr_12629_12653[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (1)))
{var state_12627__$1 = state_12627;var statearr_12630_12654 = state_12627__$1;(statearr_12630_12654[(2)] = null);
(statearr_12630_12654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (4)))
{var inst_12604 = (state_12627[(7)]);var inst_12604__$1 = (state_12627[(2)]);var inst_12605 = (inst_12604__$1 == null);var state_12627__$1 = (function (){var statearr_12631 = state_12627;(statearr_12631[(7)] = inst_12604__$1);
return statearr_12631;
})();if(cljs.core.truth_(inst_12605))
{var statearr_12632_12655 = state_12627__$1;(statearr_12632_12655[(1)] = (5));
} else
{var statearr_12633_12656 = state_12627__$1;(statearr_12633_12656[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (13)))
{var state_12627__$1 = state_12627;var statearr_12634_12657 = state_12627__$1;(statearr_12634_12657[(2)] = null);
(statearr_12634_12657[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (6)))
{var inst_12604 = (state_12627[(7)]);var inst_12610 = p.call(null,inst_12604);var state_12627__$1 = state_12627;if(cljs.core.truth_(inst_12610))
{var statearr_12635_12658 = state_12627__$1;(statearr_12635_12658[(1)] = (9));
} else
{var statearr_12636_12659 = state_12627__$1;(statearr_12636_12659[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (3)))
{var inst_12625 = (state_12627[(2)]);var state_12627__$1 = state_12627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12627__$1,inst_12625);
} else
{if((state_val_12628 === (12)))
{var state_12627__$1 = state_12627;var statearr_12637_12660 = state_12627__$1;(statearr_12637_12660[(2)] = null);
(statearr_12637_12660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (2)))
{var state_12627__$1 = state_12627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12627__$1,(4),ch);
} else
{if((state_val_12628 === (11)))
{var inst_12604 = (state_12627[(7)]);var inst_12614 = (state_12627[(2)]);var state_12627__$1 = state_12627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12627__$1,(8),inst_12614,inst_12604);
} else
{if((state_val_12628 === (9)))
{var state_12627__$1 = state_12627;var statearr_12638_12661 = state_12627__$1;(statearr_12638_12661[(2)] = tc);
(statearr_12638_12661[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (5)))
{var inst_12607 = cljs.core.async.close_BANG_.call(null,tc);var inst_12608 = cljs.core.async.close_BANG_.call(null,fc);var state_12627__$1 = (function (){var statearr_12639 = state_12627;(statearr_12639[(8)] = inst_12607);
return statearr_12639;
})();var statearr_12640_12662 = state_12627__$1;(statearr_12640_12662[(2)] = inst_12608);
(statearr_12640_12662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (14)))
{var inst_12621 = (state_12627[(2)]);var state_12627__$1 = state_12627;var statearr_12641_12663 = state_12627__$1;(statearr_12641_12663[(2)] = inst_12621);
(statearr_12641_12663[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (10)))
{var state_12627__$1 = state_12627;var statearr_12642_12664 = state_12627__$1;(statearr_12642_12664[(2)] = fc);
(statearr_12642_12664[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12628 === (8)))
{var inst_12616 = (state_12627[(2)]);var state_12627__$1 = state_12627;if(cljs.core.truth_(inst_12616))
{var statearr_12643_12665 = state_12627__$1;(statearr_12643_12665[(1)] = (12));
} else
{var statearr_12644_12666 = state_12627__$1;(statearr_12644_12666[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___12652,tc,fc))
;return ((function (switch__6376__auto__,c__6391__auto___12652,tc,fc){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12648 = [null,null,null,null,null,null,null,null,null];(statearr_12648[(0)] = state_machine__6377__auto__);
(statearr_12648[(1)] = (1));
return statearr_12648;
});
var state_machine__6377__auto____1 = (function (state_12627){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12649){if((e12649 instanceof Object))
{var ex__6380__auto__ = e12649;var statearr_12650_12667 = state_12627;(statearr_12650_12667[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12668 = state_12627;
state_12627 = G__12668;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12627){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___12652,tc,fc))
})();var state__6393__auto__ = (function (){var statearr_12651 = f__6392__auto__.call(null);(statearr_12651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12652);
return statearr_12651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12652,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto__){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto__){
return (function (state_12715){var state_val_12716 = (state_12715[(1)]);if((state_val_12716 === (7)))
{var inst_12711 = (state_12715[(2)]);var state_12715__$1 = state_12715;var statearr_12717_12733 = state_12715__$1;(statearr_12717_12733[(2)] = inst_12711);
(statearr_12717_12733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (6)))
{var inst_12704 = (state_12715[(7)]);var inst_12701 = (state_12715[(8)]);var inst_12708 = f.call(null,inst_12701,inst_12704);var inst_12701__$1 = inst_12708;var state_12715__$1 = (function (){var statearr_12718 = state_12715;(statearr_12718[(8)] = inst_12701__$1);
return statearr_12718;
})();var statearr_12719_12734 = state_12715__$1;(statearr_12719_12734[(2)] = null);
(statearr_12719_12734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (5)))
{var inst_12701 = (state_12715[(8)]);var state_12715__$1 = state_12715;var statearr_12720_12735 = state_12715__$1;(statearr_12720_12735[(2)] = inst_12701);
(statearr_12720_12735[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (4)))
{var inst_12704 = (state_12715[(7)]);var inst_12704__$1 = (state_12715[(2)]);var inst_12705 = (inst_12704__$1 == null);var state_12715__$1 = (function (){var statearr_12721 = state_12715;(statearr_12721[(7)] = inst_12704__$1);
return statearr_12721;
})();if(cljs.core.truth_(inst_12705))
{var statearr_12722_12736 = state_12715__$1;(statearr_12722_12736[(1)] = (5));
} else
{var statearr_12723_12737 = state_12715__$1;(statearr_12723_12737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12716 === (3)))
{var inst_12713 = (state_12715[(2)]);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,inst_12713);
} else
{if((state_val_12716 === (2)))
{var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12715__$1,(4),ch);
} else
{if((state_val_12716 === (1)))
{var inst_12701 = init;var state_12715__$1 = (function (){var statearr_12724 = state_12715;(statearr_12724[(8)] = inst_12701);
return statearr_12724;
})();var statearr_12725_12738 = state_12715__$1;(statearr_12725_12738[(2)] = null);
(statearr_12725_12738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6391__auto__))
;return ((function (switch__6376__auto__,c__6391__auto__){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12729 = [null,null,null,null,null,null,null,null,null];(statearr_12729[(0)] = state_machine__6377__auto__);
(statearr_12729[(1)] = (1));
return statearr_12729;
});
var state_machine__6377__auto____1 = (function (state_12715){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12730){if((e12730 instanceof Object))
{var ex__6380__auto__ = e12730;var statearr_12731_12739 = state_12715;(statearr_12731_12739[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12740 = state_12715;
state_12715 = G__12740;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto__))
})();var state__6393__auto__ = (function (){var statearr_12732 = f__6392__auto__.call(null);(statearr_12732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto__);
return statearr_12732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto__))
);
return c__6391__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto__){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto__){
return (function (state_12814){var state_val_12815 = (state_12814[(1)]);if((state_val_12815 === (7)))
{var inst_12796 = (state_12814[(2)]);var state_12814__$1 = state_12814;var statearr_12816_12839 = state_12814__$1;(statearr_12816_12839[(2)] = inst_12796);
(statearr_12816_12839[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (1)))
{var inst_12790 = cljs.core.seq.call(null,coll);var inst_12791 = inst_12790;var state_12814__$1 = (function (){var statearr_12817 = state_12814;(statearr_12817[(7)] = inst_12791);
return statearr_12817;
})();var statearr_12818_12840 = state_12814__$1;(statearr_12818_12840[(2)] = null);
(statearr_12818_12840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (4)))
{var inst_12791 = (state_12814[(7)]);var inst_12794 = cljs.core.first.call(null,inst_12791);var state_12814__$1 = state_12814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12814__$1,(7),ch,inst_12794);
} else
{if((state_val_12815 === (13)))
{var inst_12808 = (state_12814[(2)]);var state_12814__$1 = state_12814;var statearr_12819_12841 = state_12814__$1;(statearr_12819_12841[(2)] = inst_12808);
(statearr_12819_12841[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (6)))
{var inst_12799 = (state_12814[(2)]);var state_12814__$1 = state_12814;if(cljs.core.truth_(inst_12799))
{var statearr_12820_12842 = state_12814__$1;(statearr_12820_12842[(1)] = (8));
} else
{var statearr_12821_12843 = state_12814__$1;(statearr_12821_12843[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (3)))
{var inst_12812 = (state_12814[(2)]);var state_12814__$1 = state_12814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12814__$1,inst_12812);
} else
{if((state_val_12815 === (12)))
{var state_12814__$1 = state_12814;var statearr_12822_12844 = state_12814__$1;(statearr_12822_12844[(2)] = null);
(statearr_12822_12844[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (2)))
{var inst_12791 = (state_12814[(7)]);var state_12814__$1 = state_12814;if(cljs.core.truth_(inst_12791))
{var statearr_12823_12845 = state_12814__$1;(statearr_12823_12845[(1)] = (4));
} else
{var statearr_12824_12846 = state_12814__$1;(statearr_12824_12846[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (11)))
{var inst_12805 = cljs.core.async.close_BANG_.call(null,ch);var state_12814__$1 = state_12814;var statearr_12825_12847 = state_12814__$1;(statearr_12825_12847[(2)] = inst_12805);
(statearr_12825_12847[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (9)))
{var state_12814__$1 = state_12814;if(cljs.core.truth_(close_QMARK_))
{var statearr_12826_12848 = state_12814__$1;(statearr_12826_12848[(1)] = (11));
} else
{var statearr_12827_12849 = state_12814__$1;(statearr_12827_12849[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (5)))
{var inst_12791 = (state_12814[(7)]);var state_12814__$1 = state_12814;var statearr_12828_12850 = state_12814__$1;(statearr_12828_12850[(2)] = inst_12791);
(statearr_12828_12850[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (10)))
{var inst_12810 = (state_12814[(2)]);var state_12814__$1 = state_12814;var statearr_12829_12851 = state_12814__$1;(statearr_12829_12851[(2)] = inst_12810);
(statearr_12829_12851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12815 === (8)))
{var inst_12791 = (state_12814[(7)]);var inst_12801 = cljs.core.next.call(null,inst_12791);var inst_12791__$1 = inst_12801;var state_12814__$1 = (function (){var statearr_12830 = state_12814;(statearr_12830[(7)] = inst_12791__$1);
return statearr_12830;
})();var statearr_12831_12852 = state_12814__$1;(statearr_12831_12852[(2)] = null);
(statearr_12831_12852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto__))
;return ((function (switch__6376__auto__,c__6391__auto__){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_12835 = [null,null,null,null,null,null,null,null];(statearr_12835[(0)] = state_machine__6377__auto__);
(statearr_12835[(1)] = (1));
return statearr_12835;
});
var state_machine__6377__auto____1 = (function (state_12814){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_12814);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object))
{var ex__6380__auto__ = e12836;var statearr_12837_12853 = state_12814;(statearr_12837_12853[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12854 = state_12814;
state_12814 = G__12854;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_12814){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_12814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto__))
})();var state__6393__auto__ = (function (){var statearr_12838 = f__6392__auto__.call(null);(statearr_12838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto__);
return statearr_12838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto__))
);
return c__6391__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12856 = {};return obj12856;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3558__auto__ = _;if(and__3558__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3558__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4197__auto__ = (((_ == null))?null:_);return (function (){var or__3570__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12858 = {};return obj12858;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13080 = (function (cs,ch,mult,meta13081){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13081 = meta13081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13080.cljs$lang$type = true;
cljs.core.async.t13080.cljs$lang$ctorStr = "cljs.core.async/t13080";
cljs.core.async.t13080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t13080");
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13082){var self__ = this;
var _13082__$1 = this;return self__.meta13081;
});})(cs))
;
cljs.core.async.t13080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13082,meta13081__$1){var self__ = this;
var _13082__$1 = this;return (new cljs.core.async.t13080(self__.cs,self__.ch,self__.mult,meta13081__$1));
});})(cs))
;
cljs.core.async.__GT_t13080 = ((function (cs){
return (function __GT_t13080(cs__$1,ch__$1,mult__$1,meta13081){return (new cljs.core.async.t13080(cs__$1,ch__$1,mult__$1,meta13081));
});})(cs))
;
}
return (new cljs.core.async.t13080(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6391__auto___13301 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___13301,cs,m,dchan,dctr,done){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___13301,cs,m,dchan,dctr,done){
return (function (state_13213){var state_val_13214 = (state_13213[(1)]);if((state_val_13214 === (7)))
{var inst_13209 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13215_13302 = state_13213__$1;(statearr_13215_13302[(2)] = inst_13209);
(statearr_13215_13302[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (20)))
{var inst_13114 = (state_13213[(7)]);var inst_13124 = cljs.core.first.call(null,inst_13114);var inst_13125 = cljs.core.nth.call(null,inst_13124,(0),null);var inst_13126 = cljs.core.nth.call(null,inst_13124,(1),null);var state_13213__$1 = (function (){var statearr_13216 = state_13213;(statearr_13216[(8)] = inst_13125);
return statearr_13216;
})();if(cljs.core.truth_(inst_13126))
{var statearr_13217_13303 = state_13213__$1;(statearr_13217_13303[(1)] = (22));
} else
{var statearr_13218_13304 = state_13213__$1;(statearr_13218_13304[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (27)))
{var inst_13161 = (state_13213[(9)]);var inst_13156 = (state_13213[(10)]);var inst_13085 = (state_13213[(11)]);var inst_13154 = (state_13213[(12)]);var inst_13161__$1 = cljs.core._nth.call(null,inst_13154,inst_13156);var inst_13162 = cljs.core.async.put_BANG_.call(null,inst_13161__$1,inst_13085,done);var state_13213__$1 = (function (){var statearr_13219 = state_13213;(statearr_13219[(9)] = inst_13161__$1);
return statearr_13219;
})();if(cljs.core.truth_(inst_13162))
{var statearr_13220_13305 = state_13213__$1;(statearr_13220_13305[(1)] = (30));
} else
{var statearr_13221_13306 = state_13213__$1;(statearr_13221_13306[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (1)))
{var state_13213__$1 = state_13213;var statearr_13222_13307 = state_13213__$1;(statearr_13222_13307[(2)] = null);
(statearr_13222_13307[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (24)))
{var inst_13114 = (state_13213[(7)]);var inst_13131 = (state_13213[(2)]);var inst_13132 = cljs.core.next.call(null,inst_13114);var inst_13094 = inst_13132;var inst_13095 = null;var inst_13096 = (0);var inst_13097 = (0);var state_13213__$1 = (function (){var statearr_13223 = state_13213;(statearr_13223[(13)] = inst_13096);
(statearr_13223[(14)] = inst_13097);
(statearr_13223[(15)] = inst_13131);
(statearr_13223[(16)] = inst_13095);
(statearr_13223[(17)] = inst_13094);
return statearr_13223;
})();var statearr_13224_13308 = state_13213__$1;(statearr_13224_13308[(2)] = null);
(statearr_13224_13308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (39)))
{var state_13213__$1 = state_13213;var statearr_13228_13309 = state_13213__$1;(statearr_13228_13309[(2)] = null);
(statearr_13228_13309[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (4)))
{var inst_13085 = (state_13213[(11)]);var inst_13085__$1 = (state_13213[(2)]);var inst_13086 = (inst_13085__$1 == null);var state_13213__$1 = (function (){var statearr_13229 = state_13213;(statearr_13229[(11)] = inst_13085__$1);
return statearr_13229;
})();if(cljs.core.truth_(inst_13086))
{var statearr_13230_13310 = state_13213__$1;(statearr_13230_13310[(1)] = (5));
} else
{var statearr_13231_13311 = state_13213__$1;(statearr_13231_13311[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (15)))
{var inst_13096 = (state_13213[(13)]);var inst_13097 = (state_13213[(14)]);var inst_13095 = (state_13213[(16)]);var inst_13094 = (state_13213[(17)]);var inst_13110 = (state_13213[(2)]);var inst_13111 = (inst_13097 + (1));var tmp13225 = inst_13096;var tmp13226 = inst_13095;var tmp13227 = inst_13094;var inst_13094__$1 = tmp13227;var inst_13095__$1 = tmp13226;var inst_13096__$1 = tmp13225;var inst_13097__$1 = inst_13111;var state_13213__$1 = (function (){var statearr_13232 = state_13213;(statearr_13232[(13)] = inst_13096__$1);
(statearr_13232[(14)] = inst_13097__$1);
(statearr_13232[(16)] = inst_13095__$1);
(statearr_13232[(17)] = inst_13094__$1);
(statearr_13232[(18)] = inst_13110);
return statearr_13232;
})();var statearr_13233_13312 = state_13213__$1;(statearr_13233_13312[(2)] = null);
(statearr_13233_13312[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (21)))
{var inst_13135 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13237_13313 = state_13213__$1;(statearr_13237_13313[(2)] = inst_13135);
(statearr_13237_13313[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (31)))
{var inst_13161 = (state_13213[(9)]);var inst_13165 = done.call(null,null);var inst_13166 = cljs.core.async.untap_STAR_.call(null,m,inst_13161);var state_13213__$1 = (function (){var statearr_13238 = state_13213;(statearr_13238[(19)] = inst_13165);
return statearr_13238;
})();var statearr_13239_13314 = state_13213__$1;(statearr_13239_13314[(2)] = inst_13166);
(statearr_13239_13314[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (32)))
{var inst_13153 = (state_13213[(20)]);var inst_13156 = (state_13213[(10)]);var inst_13155 = (state_13213[(21)]);var inst_13154 = (state_13213[(12)]);var inst_13168 = (state_13213[(2)]);var inst_13169 = (inst_13156 + (1));var tmp13234 = inst_13153;var tmp13235 = inst_13155;var tmp13236 = inst_13154;var inst_13153__$1 = tmp13234;var inst_13154__$1 = tmp13236;var inst_13155__$1 = tmp13235;var inst_13156__$1 = inst_13169;var state_13213__$1 = (function (){var statearr_13240 = state_13213;(statearr_13240[(20)] = inst_13153__$1);
(statearr_13240[(10)] = inst_13156__$1);
(statearr_13240[(21)] = inst_13155__$1);
(statearr_13240[(22)] = inst_13168);
(statearr_13240[(12)] = inst_13154__$1);
return statearr_13240;
})();var statearr_13241_13315 = state_13213__$1;(statearr_13241_13315[(2)] = null);
(statearr_13241_13315[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (40)))
{var inst_13181 = (state_13213[(23)]);var inst_13185 = done.call(null,null);var inst_13186 = cljs.core.async.untap_STAR_.call(null,m,inst_13181);var state_13213__$1 = (function (){var statearr_13242 = state_13213;(statearr_13242[(24)] = inst_13185);
return statearr_13242;
})();var statearr_13243_13316 = state_13213__$1;(statearr_13243_13316[(2)] = inst_13186);
(statearr_13243_13316[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (33)))
{var inst_13172 = (state_13213[(25)]);var inst_13174 = cljs.core.chunked_seq_QMARK_.call(null,inst_13172);var state_13213__$1 = state_13213;if(inst_13174)
{var statearr_13244_13317 = state_13213__$1;(statearr_13244_13317[(1)] = (36));
} else
{var statearr_13245_13318 = state_13213__$1;(statearr_13245_13318[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (13)))
{var inst_13104 = (state_13213[(26)]);var inst_13107 = cljs.core.async.close_BANG_.call(null,inst_13104);var state_13213__$1 = state_13213;var statearr_13246_13319 = state_13213__$1;(statearr_13246_13319[(2)] = inst_13107);
(statearr_13246_13319[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (22)))
{var inst_13125 = (state_13213[(8)]);var inst_13128 = cljs.core.async.close_BANG_.call(null,inst_13125);var state_13213__$1 = state_13213;var statearr_13247_13320 = state_13213__$1;(statearr_13247_13320[(2)] = inst_13128);
(statearr_13247_13320[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (36)))
{var inst_13172 = (state_13213[(25)]);var inst_13176 = cljs.core.chunk_first.call(null,inst_13172);var inst_13177 = cljs.core.chunk_rest.call(null,inst_13172);var inst_13178 = cljs.core.count.call(null,inst_13176);var inst_13153 = inst_13177;var inst_13154 = inst_13176;var inst_13155 = inst_13178;var inst_13156 = (0);var state_13213__$1 = (function (){var statearr_13248 = state_13213;(statearr_13248[(20)] = inst_13153);
(statearr_13248[(10)] = inst_13156);
(statearr_13248[(21)] = inst_13155);
(statearr_13248[(12)] = inst_13154);
return statearr_13248;
})();var statearr_13249_13321 = state_13213__$1;(statearr_13249_13321[(2)] = null);
(statearr_13249_13321[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (41)))
{var inst_13172 = (state_13213[(25)]);var inst_13188 = (state_13213[(2)]);var inst_13189 = cljs.core.next.call(null,inst_13172);var inst_13153 = inst_13189;var inst_13154 = null;var inst_13155 = (0);var inst_13156 = (0);var state_13213__$1 = (function (){var statearr_13250 = state_13213;(statearr_13250[(27)] = inst_13188);
(statearr_13250[(20)] = inst_13153);
(statearr_13250[(10)] = inst_13156);
(statearr_13250[(21)] = inst_13155);
(statearr_13250[(12)] = inst_13154);
return statearr_13250;
})();var statearr_13251_13322 = state_13213__$1;(statearr_13251_13322[(2)] = null);
(statearr_13251_13322[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (43)))
{var state_13213__$1 = state_13213;var statearr_13252_13323 = state_13213__$1;(statearr_13252_13323[(2)] = null);
(statearr_13252_13323[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (29)))
{var inst_13197 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13253_13324 = state_13213__$1;(statearr_13253_13324[(2)] = inst_13197);
(statearr_13253_13324[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (44)))
{var inst_13206 = (state_13213[(2)]);var state_13213__$1 = (function (){var statearr_13254 = state_13213;(statearr_13254[(28)] = inst_13206);
return statearr_13254;
})();var statearr_13255_13325 = state_13213__$1;(statearr_13255_13325[(2)] = null);
(statearr_13255_13325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (6)))
{var inst_13145 = (state_13213[(29)]);var inst_13144 = cljs.core.deref.call(null,cs);var inst_13145__$1 = cljs.core.keys.call(null,inst_13144);var inst_13146 = cljs.core.count.call(null,inst_13145__$1);var inst_13147 = cljs.core.reset_BANG_.call(null,dctr,inst_13146);var inst_13152 = cljs.core.seq.call(null,inst_13145__$1);var inst_13153 = inst_13152;var inst_13154 = null;var inst_13155 = (0);var inst_13156 = (0);var state_13213__$1 = (function (){var statearr_13256 = state_13213;(statearr_13256[(20)] = inst_13153);
(statearr_13256[(10)] = inst_13156);
(statearr_13256[(29)] = inst_13145__$1);
(statearr_13256[(21)] = inst_13155);
(statearr_13256[(30)] = inst_13147);
(statearr_13256[(12)] = inst_13154);
return statearr_13256;
})();var statearr_13257_13326 = state_13213__$1;(statearr_13257_13326[(2)] = null);
(statearr_13257_13326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (28)))
{var inst_13153 = (state_13213[(20)]);var inst_13172 = (state_13213[(25)]);var inst_13172__$1 = cljs.core.seq.call(null,inst_13153);var state_13213__$1 = (function (){var statearr_13258 = state_13213;(statearr_13258[(25)] = inst_13172__$1);
return statearr_13258;
})();if(inst_13172__$1)
{var statearr_13259_13327 = state_13213__$1;(statearr_13259_13327[(1)] = (33));
} else
{var statearr_13260_13328 = state_13213__$1;(statearr_13260_13328[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (25)))
{var inst_13156 = (state_13213[(10)]);var inst_13155 = (state_13213[(21)]);var inst_13158 = (inst_13156 < inst_13155);var inst_13159 = inst_13158;var state_13213__$1 = state_13213;if(cljs.core.truth_(inst_13159))
{var statearr_13261_13329 = state_13213__$1;(statearr_13261_13329[(1)] = (27));
} else
{var statearr_13262_13330 = state_13213__$1;(statearr_13262_13330[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (34)))
{var state_13213__$1 = state_13213;var statearr_13263_13331 = state_13213__$1;(statearr_13263_13331[(2)] = null);
(statearr_13263_13331[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (17)))
{var state_13213__$1 = state_13213;var statearr_13264_13332 = state_13213__$1;(statearr_13264_13332[(2)] = null);
(statearr_13264_13332[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (3)))
{var inst_13211 = (state_13213[(2)]);var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13213__$1,inst_13211);
} else
{if((state_val_13214 === (12)))
{var inst_13140 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13265_13333 = state_13213__$1;(statearr_13265_13333[(2)] = inst_13140);
(statearr_13265_13333[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (2)))
{var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13213__$1,(4),ch);
} else
{if((state_val_13214 === (23)))
{var state_13213__$1 = state_13213;var statearr_13266_13334 = state_13213__$1;(statearr_13266_13334[(2)] = null);
(statearr_13266_13334[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (35)))
{var inst_13195 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13267_13335 = state_13213__$1;(statearr_13267_13335[(2)] = inst_13195);
(statearr_13267_13335[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (19)))
{var inst_13114 = (state_13213[(7)]);var inst_13118 = cljs.core.chunk_first.call(null,inst_13114);var inst_13119 = cljs.core.chunk_rest.call(null,inst_13114);var inst_13120 = cljs.core.count.call(null,inst_13118);var inst_13094 = inst_13119;var inst_13095 = inst_13118;var inst_13096 = inst_13120;var inst_13097 = (0);var state_13213__$1 = (function (){var statearr_13268 = state_13213;(statearr_13268[(13)] = inst_13096);
(statearr_13268[(14)] = inst_13097);
(statearr_13268[(16)] = inst_13095);
(statearr_13268[(17)] = inst_13094);
return statearr_13268;
})();var statearr_13269_13336 = state_13213__$1;(statearr_13269_13336[(2)] = null);
(statearr_13269_13336[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (11)))
{var inst_13094 = (state_13213[(17)]);var inst_13114 = (state_13213[(7)]);var inst_13114__$1 = cljs.core.seq.call(null,inst_13094);var state_13213__$1 = (function (){var statearr_13270 = state_13213;(statearr_13270[(7)] = inst_13114__$1);
return statearr_13270;
})();if(inst_13114__$1)
{var statearr_13271_13337 = state_13213__$1;(statearr_13271_13337[(1)] = (16));
} else
{var statearr_13272_13338 = state_13213__$1;(statearr_13272_13338[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (9)))
{var inst_13142 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13273_13339 = state_13213__$1;(statearr_13273_13339[(2)] = inst_13142);
(statearr_13273_13339[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (5)))
{var inst_13092 = cljs.core.deref.call(null,cs);var inst_13093 = cljs.core.seq.call(null,inst_13092);var inst_13094 = inst_13093;var inst_13095 = null;var inst_13096 = (0);var inst_13097 = (0);var state_13213__$1 = (function (){var statearr_13274 = state_13213;(statearr_13274[(13)] = inst_13096);
(statearr_13274[(14)] = inst_13097);
(statearr_13274[(16)] = inst_13095);
(statearr_13274[(17)] = inst_13094);
return statearr_13274;
})();var statearr_13275_13340 = state_13213__$1;(statearr_13275_13340[(2)] = null);
(statearr_13275_13340[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (14)))
{var state_13213__$1 = state_13213;var statearr_13276_13341 = state_13213__$1;(statearr_13276_13341[(2)] = null);
(statearr_13276_13341[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (45)))
{var inst_13203 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13277_13342 = state_13213__$1;(statearr_13277_13342[(2)] = inst_13203);
(statearr_13277_13342[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (26)))
{var inst_13145 = (state_13213[(29)]);var inst_13199 = (state_13213[(2)]);var inst_13200 = cljs.core.seq.call(null,inst_13145);var state_13213__$1 = (function (){var statearr_13278 = state_13213;(statearr_13278[(31)] = inst_13199);
return statearr_13278;
})();if(inst_13200)
{var statearr_13279_13343 = state_13213__$1;(statearr_13279_13343[(1)] = (42));
} else
{var statearr_13280_13344 = state_13213__$1;(statearr_13280_13344[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (16)))
{var inst_13114 = (state_13213[(7)]);var inst_13116 = cljs.core.chunked_seq_QMARK_.call(null,inst_13114);var state_13213__$1 = state_13213;if(inst_13116)
{var statearr_13281_13345 = state_13213__$1;(statearr_13281_13345[(1)] = (19));
} else
{var statearr_13282_13346 = state_13213__$1;(statearr_13282_13346[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (38)))
{var inst_13192 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13283_13347 = state_13213__$1;(statearr_13283_13347[(2)] = inst_13192);
(statearr_13283_13347[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (30)))
{var state_13213__$1 = state_13213;var statearr_13284_13348 = state_13213__$1;(statearr_13284_13348[(2)] = null);
(statearr_13284_13348[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (10)))
{var inst_13097 = (state_13213[(14)]);var inst_13095 = (state_13213[(16)]);var inst_13103 = cljs.core._nth.call(null,inst_13095,inst_13097);var inst_13104 = cljs.core.nth.call(null,inst_13103,(0),null);var inst_13105 = cljs.core.nth.call(null,inst_13103,(1),null);var state_13213__$1 = (function (){var statearr_13285 = state_13213;(statearr_13285[(26)] = inst_13104);
return statearr_13285;
})();if(cljs.core.truth_(inst_13105))
{var statearr_13286_13349 = state_13213__$1;(statearr_13286_13349[(1)] = (13));
} else
{var statearr_13287_13350 = state_13213__$1;(statearr_13287_13350[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (18)))
{var inst_13138 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13288_13351 = state_13213__$1;(statearr_13288_13351[(2)] = inst_13138);
(statearr_13288_13351[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (42)))
{var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13213__$1,(45),dchan);
} else
{if((state_val_13214 === (37)))
{var inst_13181 = (state_13213[(23)]);var inst_13172 = (state_13213[(25)]);var inst_13085 = (state_13213[(11)]);var inst_13181__$1 = cljs.core.first.call(null,inst_13172);var inst_13182 = cljs.core.async.put_BANG_.call(null,inst_13181__$1,inst_13085,done);var state_13213__$1 = (function (){var statearr_13289 = state_13213;(statearr_13289[(23)] = inst_13181__$1);
return statearr_13289;
})();if(cljs.core.truth_(inst_13182))
{var statearr_13290_13352 = state_13213__$1;(statearr_13290_13352[(1)] = (39));
} else
{var statearr_13291_13353 = state_13213__$1;(statearr_13291_13353[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (8)))
{var inst_13096 = (state_13213[(13)]);var inst_13097 = (state_13213[(14)]);var inst_13099 = (inst_13097 < inst_13096);var inst_13100 = inst_13099;var state_13213__$1 = state_13213;if(cljs.core.truth_(inst_13100))
{var statearr_13292_13354 = state_13213__$1;(statearr_13292_13354[(1)] = (10));
} else
{var statearr_13293_13355 = state_13213__$1;(statearr_13293_13355[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___13301,cs,m,dchan,dctr,done))
;return ((function (switch__6376__auto__,c__6391__auto___13301,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_13297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13297[(0)] = state_machine__6377__auto__);
(statearr_13297[(1)] = (1));
return statearr_13297;
});
var state_machine__6377__auto____1 = (function (state_13213){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_13213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e13298){if((e13298 instanceof Object))
{var ex__6380__auto__ = e13298;var statearr_13299_13356 = state_13213;(statearr_13299_13356[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13298;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13357 = state_13213;
state_13213 = G__13357;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_13213){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_13213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___13301,cs,m,dchan,dctr,done))
})();var state__6393__auto__ = (function (){var statearr_13300 = f__6392__auto__.call(null);(statearr_13300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___13301);
return statearr_13300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___13301,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13359 = {};return obj13359;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3558__auto__ = m;if(and__3558__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4197__auto__ = (((m == null))?null:m);return (function (){var or__3570__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13479 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13480){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13480 = meta13480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13479.cljs$lang$type = true;
cljs.core.async.t13479.cljs$lang$ctorStr = "cljs.core.async/t13479";
cljs.core.async.t13479.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t13479");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13481){var self__ = this;
var _13481__$1 = this;return self__.meta13480;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13481,meta13480__$1){var self__ = this;
var _13481__$1 = this;return (new cljs.core.async.t13479(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13480__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13479 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13479(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13480){return (new cljs.core.async.t13479(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13480));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13479(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6391__auto___13598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13551){var state_val_13552 = (state_13551[(1)]);if((state_val_13552 === (7)))
{var inst_13495 = (state_13551[(7)]);var inst_13500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13495);var state_13551__$1 = state_13551;var statearr_13553_13599 = state_13551__$1;(statearr_13553_13599[(2)] = inst_13500);
(statearr_13553_13599[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (20)))
{var inst_13510 = (state_13551[(8)]);var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13551__$1,(23),out,inst_13510);
} else
{if((state_val_13552 === (1)))
{var inst_13485 = (state_13551[(9)]);var inst_13485__$1 = calc_state.call(null);var inst_13486 = cljs.core.seq_QMARK_.call(null,inst_13485__$1);var state_13551__$1 = (function (){var statearr_13554 = state_13551;(statearr_13554[(9)] = inst_13485__$1);
return statearr_13554;
})();if(inst_13486)
{var statearr_13555_13600 = state_13551__$1;(statearr_13555_13600[(1)] = (2));
} else
{var statearr_13556_13601 = state_13551__$1;(statearr_13556_13601[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (24)))
{var inst_13503 = (state_13551[(10)]);var inst_13495 = inst_13503;var state_13551__$1 = (function (){var statearr_13557 = state_13551;(statearr_13557[(7)] = inst_13495);
return statearr_13557;
})();var statearr_13558_13602 = state_13551__$1;(statearr_13558_13602[(2)] = null);
(statearr_13558_13602[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (4)))
{var inst_13485 = (state_13551[(9)]);var inst_13491 = (state_13551[(2)]);var inst_13492 = cljs.core.get.call(null,inst_13491,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13493 = cljs.core.get.call(null,inst_13491,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13494 = cljs.core.get.call(null,inst_13491,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13495 = inst_13485;var state_13551__$1 = (function (){var statearr_13559 = state_13551;(statearr_13559[(11)] = inst_13492);
(statearr_13559[(12)] = inst_13493);
(statearr_13559[(13)] = inst_13494);
(statearr_13559[(7)] = inst_13495);
return statearr_13559;
})();var statearr_13560_13603 = state_13551__$1;(statearr_13560_13603[(2)] = null);
(statearr_13560_13603[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (15)))
{var state_13551__$1 = state_13551;var statearr_13561_13604 = state_13551__$1;(statearr_13561_13604[(2)] = null);
(statearr_13561_13604[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (21)))
{var inst_13503 = (state_13551[(10)]);var inst_13495 = inst_13503;var state_13551__$1 = (function (){var statearr_13562 = state_13551;(statearr_13562[(7)] = inst_13495);
return statearr_13562;
})();var statearr_13563_13605 = state_13551__$1;(statearr_13563_13605[(2)] = null);
(statearr_13563_13605[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (13)))
{var inst_13547 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13564_13606 = state_13551__$1;(statearr_13564_13606[(2)] = inst_13547);
(statearr_13564_13606[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (22)))
{var inst_13545 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13565_13607 = state_13551__$1;(statearr_13565_13607[(2)] = inst_13545);
(statearr_13565_13607[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (6)))
{var inst_13549 = (state_13551[(2)]);var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13551__$1,inst_13549);
} else
{if((state_val_13552 === (25)))
{var state_13551__$1 = state_13551;var statearr_13566_13608 = state_13551__$1;(statearr_13566_13608[(2)] = null);
(statearr_13566_13608[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (17)))
{var inst_13525 = (state_13551[(14)]);var state_13551__$1 = state_13551;var statearr_13567_13609 = state_13551__$1;(statearr_13567_13609[(2)] = inst_13525);
(statearr_13567_13609[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (3)))
{var inst_13485 = (state_13551[(9)]);var state_13551__$1 = state_13551;var statearr_13568_13610 = state_13551__$1;(statearr_13568_13610[(2)] = inst_13485);
(statearr_13568_13610[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (12)))
{var inst_13506 = (state_13551[(15)]);var inst_13511 = (state_13551[(16)]);var inst_13525 = (state_13551[(14)]);var inst_13525__$1 = inst_13506.call(null,inst_13511);var state_13551__$1 = (function (){var statearr_13569 = state_13551;(statearr_13569[(14)] = inst_13525__$1);
return statearr_13569;
})();if(cljs.core.truth_(inst_13525__$1))
{var statearr_13570_13611 = state_13551__$1;(statearr_13570_13611[(1)] = (17));
} else
{var statearr_13571_13612 = state_13551__$1;(statearr_13571_13612[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (2)))
{var inst_13485 = (state_13551[(9)]);var inst_13488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13485);var state_13551__$1 = state_13551;var statearr_13572_13613 = state_13551__$1;(statearr_13572_13613[(2)] = inst_13488);
(statearr_13572_13613[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (23)))
{var inst_13536 = (state_13551[(2)]);var state_13551__$1 = state_13551;if(cljs.core.truth_(inst_13536))
{var statearr_13573_13614 = state_13551__$1;(statearr_13573_13614[(1)] = (24));
} else
{var statearr_13574_13615 = state_13551__$1;(statearr_13574_13615[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (19)))
{var inst_13533 = (state_13551[(2)]);var state_13551__$1 = state_13551;if(cljs.core.truth_(inst_13533))
{var statearr_13575_13616 = state_13551__$1;(statearr_13575_13616[(1)] = (20));
} else
{var statearr_13576_13617 = state_13551__$1;(statearr_13576_13617[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (11)))
{var inst_13510 = (state_13551[(8)]);var inst_13516 = (inst_13510 == null);var state_13551__$1 = state_13551;if(cljs.core.truth_(inst_13516))
{var statearr_13577_13618 = state_13551__$1;(statearr_13577_13618[(1)] = (14));
} else
{var statearr_13578_13619 = state_13551__$1;(statearr_13578_13619[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (9)))
{var inst_13503 = (state_13551[(10)]);var inst_13503__$1 = (state_13551[(2)]);var inst_13504 = cljs.core.get.call(null,inst_13503__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13505 = cljs.core.get.call(null,inst_13503__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13506 = cljs.core.get.call(null,inst_13503__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13551__$1 = (function (){var statearr_13579 = state_13551;(statearr_13579[(17)] = inst_13505);
(statearr_13579[(15)] = inst_13506);
(statearr_13579[(10)] = inst_13503__$1);
return statearr_13579;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13551__$1,(10),inst_13504);
} else
{if((state_val_13552 === (5)))
{var inst_13495 = (state_13551[(7)]);var inst_13498 = cljs.core.seq_QMARK_.call(null,inst_13495);var state_13551__$1 = state_13551;if(inst_13498)
{var statearr_13580_13620 = state_13551__$1;(statearr_13580_13620[(1)] = (7));
} else
{var statearr_13581_13621 = state_13551__$1;(statearr_13581_13621[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (14)))
{var inst_13511 = (state_13551[(16)]);var inst_13518 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13511);var state_13551__$1 = state_13551;var statearr_13582_13622 = state_13551__$1;(statearr_13582_13622[(2)] = inst_13518);
(statearr_13582_13622[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (26)))
{var inst_13541 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13583_13623 = state_13551__$1;(statearr_13583_13623[(2)] = inst_13541);
(statearr_13583_13623[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (16)))
{var inst_13521 = (state_13551[(2)]);var inst_13522 = calc_state.call(null);var inst_13495 = inst_13522;var state_13551__$1 = (function (){var statearr_13584 = state_13551;(statearr_13584[(7)] = inst_13495);
(statearr_13584[(18)] = inst_13521);
return statearr_13584;
})();var statearr_13585_13624 = state_13551__$1;(statearr_13585_13624[(2)] = null);
(statearr_13585_13624[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (10)))
{var inst_13510 = (state_13551[(8)]);var inst_13511 = (state_13551[(16)]);var inst_13509 = (state_13551[(2)]);var inst_13510__$1 = cljs.core.nth.call(null,inst_13509,(0),null);var inst_13511__$1 = cljs.core.nth.call(null,inst_13509,(1),null);var inst_13512 = (inst_13510__$1 == null);var inst_13513 = cljs.core._EQ_.call(null,inst_13511__$1,change);var inst_13514 = (inst_13512) || (inst_13513);var state_13551__$1 = (function (){var statearr_13586 = state_13551;(statearr_13586[(8)] = inst_13510__$1);
(statearr_13586[(16)] = inst_13511__$1);
return statearr_13586;
})();if(cljs.core.truth_(inst_13514))
{var statearr_13587_13625 = state_13551__$1;(statearr_13587_13625[(1)] = (11));
} else
{var statearr_13588_13626 = state_13551__$1;(statearr_13588_13626[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (18)))
{var inst_13505 = (state_13551[(17)]);var inst_13506 = (state_13551[(15)]);var inst_13511 = (state_13551[(16)]);var inst_13528 = cljs.core.empty_QMARK_.call(null,inst_13506);var inst_13529 = inst_13505.call(null,inst_13511);var inst_13530 = cljs.core.not.call(null,inst_13529);var inst_13531 = (inst_13528) && (inst_13530);var state_13551__$1 = state_13551;var statearr_13589_13627 = state_13551__$1;(statearr_13589_13627[(2)] = inst_13531);
(statearr_13589_13627[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (8)))
{var inst_13495 = (state_13551[(7)]);var state_13551__$1 = state_13551;var statearr_13590_13628 = state_13551__$1;(statearr_13590_13628[(2)] = inst_13495);
(statearr_13590_13628[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6376__auto__,c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_13594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13594[(0)] = state_machine__6377__auto__);
(statearr_13594[(1)] = (1));
return statearr_13594;
});
var state_machine__6377__auto____1 = (function (state_13551){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_13551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e13595){if((e13595 instanceof Object))
{var ex__6380__auto__ = e13595;var statearr_13596_13629 = state_13551;(statearr_13596_13629[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13595;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13630 = state_13551;
state_13551 = G__13630;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_13551){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_13551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6393__auto__ = (function (){var statearr_13597 = f__6392__auto__.call(null);(statearr_13597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___13598);
return statearr_13597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___13598,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13632 = {};return obj13632;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3558__auto__ = p;if(and__3558__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3558__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4197__auto__ = (((p == null))?null:p);return (function (){var or__3570__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3558__auto__ = p;if(and__3558__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3558__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4197__auto__ = (((p == null))?null:p);return (function (){var or__3570__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3558__auto__ = p;if(and__3558__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3558__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4197__auto__ = (((p == null))?null:p);return (function (){var or__3570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3558__auto__ = p;if(and__3558__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3558__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4197__auto__ = (((p == null))?null:p);return (function (){var or__3570__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4197__auto__)]);if(or__3570__auto__)
{return or__3570__auto__;
} else
{var or__3570__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3570__auto____$1)
{return or__3570__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3570__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3570__auto__))
{return or__3570__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3570__auto__,mults){
return (function (p1__13633_SHARP_){if(cljs.core.truth_(p1__13633_SHARP_.call(null,topic)))
{return p1__13633_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13633_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3570__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13756 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13757){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13757 = meta13757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13756.cljs$lang$type = true;
cljs.core.async.t13756.cljs$lang$ctorStr = "cljs.core.async/t13756";
cljs.core.async.t13756.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t13756");
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13758){var self__ = this;
var _13758__$1 = this;return self__.meta13757;
});})(mults,ensure_mult))
;
cljs.core.async.t13756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13758,meta13757__$1){var self__ = this;
var _13758__$1 = this;return (new cljs.core.async.t13756(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13757__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13756 = ((function (mults,ensure_mult){
return (function __GT_t13756(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13757){return (new cljs.core.async.t13756(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13757));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13756(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6391__auto___13878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___13878,mults,ensure_mult,p){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___13878,mults,ensure_mult,p){
return (function (state_13830){var state_val_13831 = (state_13830[(1)]);if((state_val_13831 === (7)))
{var inst_13826 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13832_13879 = state_13830__$1;(statearr_13832_13879[(2)] = inst_13826);
(statearr_13832_13879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (20)))
{var state_13830__$1 = state_13830;var statearr_13833_13880 = state_13830__$1;(statearr_13833_13880[(2)] = null);
(statearr_13833_13880[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (1)))
{var state_13830__$1 = state_13830;var statearr_13834_13881 = state_13830__$1;(statearr_13834_13881[(2)] = null);
(statearr_13834_13881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (24)))
{var inst_13809 = (state_13830[(7)]);var inst_13818 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13809);var state_13830__$1 = state_13830;var statearr_13835_13882 = state_13830__$1;(statearr_13835_13882[(2)] = inst_13818);
(statearr_13835_13882[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (4)))
{var inst_13761 = (state_13830[(8)]);var inst_13761__$1 = (state_13830[(2)]);var inst_13762 = (inst_13761__$1 == null);var state_13830__$1 = (function (){var statearr_13836 = state_13830;(statearr_13836[(8)] = inst_13761__$1);
return statearr_13836;
})();if(cljs.core.truth_(inst_13762))
{var statearr_13837_13883 = state_13830__$1;(statearr_13837_13883[(1)] = (5));
} else
{var statearr_13838_13884 = state_13830__$1;(statearr_13838_13884[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (15)))
{var inst_13803 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13839_13885 = state_13830__$1;(statearr_13839_13885[(2)] = inst_13803);
(statearr_13839_13885[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (21)))
{var inst_13823 = (state_13830[(2)]);var state_13830__$1 = (function (){var statearr_13840 = state_13830;(statearr_13840[(9)] = inst_13823);
return statearr_13840;
})();var statearr_13841_13886 = state_13830__$1;(statearr_13841_13886[(2)] = null);
(statearr_13841_13886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (13)))
{var inst_13785 = (state_13830[(10)]);var inst_13787 = cljs.core.chunked_seq_QMARK_.call(null,inst_13785);var state_13830__$1 = state_13830;if(inst_13787)
{var statearr_13842_13887 = state_13830__$1;(statearr_13842_13887[(1)] = (16));
} else
{var statearr_13843_13888 = state_13830__$1;(statearr_13843_13888[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (22)))
{var inst_13815 = (state_13830[(2)]);var state_13830__$1 = state_13830;if(cljs.core.truth_(inst_13815))
{var statearr_13844_13889 = state_13830__$1;(statearr_13844_13889[(1)] = (23));
} else
{var statearr_13845_13890 = state_13830__$1;(statearr_13845_13890[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (6)))
{var inst_13761 = (state_13830[(8)]);var inst_13809 = (state_13830[(7)]);var inst_13811 = (state_13830[(11)]);var inst_13809__$1 = topic_fn.call(null,inst_13761);var inst_13810 = cljs.core.deref.call(null,mults);var inst_13811__$1 = cljs.core.get.call(null,inst_13810,inst_13809__$1);var state_13830__$1 = (function (){var statearr_13846 = state_13830;(statearr_13846[(7)] = inst_13809__$1);
(statearr_13846[(11)] = inst_13811__$1);
return statearr_13846;
})();if(cljs.core.truth_(inst_13811__$1))
{var statearr_13847_13891 = state_13830__$1;(statearr_13847_13891[(1)] = (19));
} else
{var statearr_13848_13892 = state_13830__$1;(statearr_13848_13892[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (25)))
{var inst_13820 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13849_13893 = state_13830__$1;(statearr_13849_13893[(2)] = inst_13820);
(statearr_13849_13893[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (17)))
{var inst_13785 = (state_13830[(10)]);var inst_13794 = cljs.core.first.call(null,inst_13785);var inst_13795 = cljs.core.async.muxch_STAR_.call(null,inst_13794);var inst_13796 = cljs.core.async.close_BANG_.call(null,inst_13795);var inst_13797 = cljs.core.next.call(null,inst_13785);var inst_13771 = inst_13797;var inst_13772 = null;var inst_13773 = (0);var inst_13774 = (0);var state_13830__$1 = (function (){var statearr_13850 = state_13830;(statearr_13850[(12)] = inst_13773);
(statearr_13850[(13)] = inst_13772);
(statearr_13850[(14)] = inst_13774);
(statearr_13850[(15)] = inst_13771);
(statearr_13850[(16)] = inst_13796);
return statearr_13850;
})();var statearr_13851_13894 = state_13830__$1;(statearr_13851_13894[(2)] = null);
(statearr_13851_13894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (3)))
{var inst_13828 = (state_13830[(2)]);var state_13830__$1 = state_13830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13830__$1,inst_13828);
} else
{if((state_val_13831 === (12)))
{var inst_13805 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13852_13895 = state_13830__$1;(statearr_13852_13895[(2)] = inst_13805);
(statearr_13852_13895[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (2)))
{var state_13830__$1 = state_13830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13830__$1,(4),ch);
} else
{if((state_val_13831 === (23)))
{var state_13830__$1 = state_13830;var statearr_13853_13896 = state_13830__$1;(statearr_13853_13896[(2)] = null);
(statearr_13853_13896[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (19)))
{var inst_13761 = (state_13830[(8)]);var inst_13811 = (state_13830[(11)]);var inst_13813 = cljs.core.async.muxch_STAR_.call(null,inst_13811);var state_13830__$1 = state_13830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13830__$1,(22),inst_13813,inst_13761);
} else
{if((state_val_13831 === (11)))
{var inst_13785 = (state_13830[(10)]);var inst_13771 = (state_13830[(15)]);var inst_13785__$1 = cljs.core.seq.call(null,inst_13771);var state_13830__$1 = (function (){var statearr_13854 = state_13830;(statearr_13854[(10)] = inst_13785__$1);
return statearr_13854;
})();if(inst_13785__$1)
{var statearr_13855_13897 = state_13830__$1;(statearr_13855_13897[(1)] = (13));
} else
{var statearr_13856_13898 = state_13830__$1;(statearr_13856_13898[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (9)))
{var inst_13807 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13857_13899 = state_13830__$1;(statearr_13857_13899[(2)] = inst_13807);
(statearr_13857_13899[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (5)))
{var inst_13768 = cljs.core.deref.call(null,mults);var inst_13769 = cljs.core.vals.call(null,inst_13768);var inst_13770 = cljs.core.seq.call(null,inst_13769);var inst_13771 = inst_13770;var inst_13772 = null;var inst_13773 = (0);var inst_13774 = (0);var state_13830__$1 = (function (){var statearr_13858 = state_13830;(statearr_13858[(12)] = inst_13773);
(statearr_13858[(13)] = inst_13772);
(statearr_13858[(14)] = inst_13774);
(statearr_13858[(15)] = inst_13771);
return statearr_13858;
})();var statearr_13859_13900 = state_13830__$1;(statearr_13859_13900[(2)] = null);
(statearr_13859_13900[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (14)))
{var state_13830__$1 = state_13830;var statearr_13863_13901 = state_13830__$1;(statearr_13863_13901[(2)] = null);
(statearr_13863_13901[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (16)))
{var inst_13785 = (state_13830[(10)]);var inst_13789 = cljs.core.chunk_first.call(null,inst_13785);var inst_13790 = cljs.core.chunk_rest.call(null,inst_13785);var inst_13791 = cljs.core.count.call(null,inst_13789);var inst_13771 = inst_13790;var inst_13772 = inst_13789;var inst_13773 = inst_13791;var inst_13774 = (0);var state_13830__$1 = (function (){var statearr_13864 = state_13830;(statearr_13864[(12)] = inst_13773);
(statearr_13864[(13)] = inst_13772);
(statearr_13864[(14)] = inst_13774);
(statearr_13864[(15)] = inst_13771);
return statearr_13864;
})();var statearr_13865_13902 = state_13830__$1;(statearr_13865_13902[(2)] = null);
(statearr_13865_13902[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (10)))
{var inst_13773 = (state_13830[(12)]);var inst_13772 = (state_13830[(13)]);var inst_13774 = (state_13830[(14)]);var inst_13771 = (state_13830[(15)]);var inst_13779 = cljs.core._nth.call(null,inst_13772,inst_13774);var inst_13780 = cljs.core.async.muxch_STAR_.call(null,inst_13779);var inst_13781 = cljs.core.async.close_BANG_.call(null,inst_13780);var inst_13782 = (inst_13774 + (1));var tmp13860 = inst_13773;var tmp13861 = inst_13772;var tmp13862 = inst_13771;var inst_13771__$1 = tmp13862;var inst_13772__$1 = tmp13861;var inst_13773__$1 = tmp13860;var inst_13774__$1 = inst_13782;var state_13830__$1 = (function (){var statearr_13866 = state_13830;(statearr_13866[(12)] = inst_13773__$1);
(statearr_13866[(13)] = inst_13772__$1);
(statearr_13866[(14)] = inst_13774__$1);
(statearr_13866[(17)] = inst_13781);
(statearr_13866[(15)] = inst_13771__$1);
return statearr_13866;
})();var statearr_13867_13903 = state_13830__$1;(statearr_13867_13903[(2)] = null);
(statearr_13867_13903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (18)))
{var inst_13800 = (state_13830[(2)]);var state_13830__$1 = state_13830;var statearr_13868_13904 = state_13830__$1;(statearr_13868_13904[(2)] = inst_13800);
(statearr_13868_13904[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13831 === (8)))
{var inst_13773 = (state_13830[(12)]);var inst_13774 = (state_13830[(14)]);var inst_13776 = (inst_13774 < inst_13773);var inst_13777 = inst_13776;var state_13830__$1 = state_13830;if(cljs.core.truth_(inst_13777))
{var statearr_13869_13905 = state_13830__$1;(statearr_13869_13905[(1)] = (10));
} else
{var statearr_13870_13906 = state_13830__$1;(statearr_13870_13906[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___13878,mults,ensure_mult,p))
;return ((function (switch__6376__auto__,c__6391__auto___13878,mults,ensure_mult,p){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_13874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13874[(0)] = state_machine__6377__auto__);
(statearr_13874[(1)] = (1));
return statearr_13874;
});
var state_machine__6377__auto____1 = (function (state_13830){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_13830);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e13875){if((e13875 instanceof Object))
{var ex__6380__auto__ = e13875;var statearr_13876_13907 = state_13830;(statearr_13876_13907[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13908 = state_13830;
state_13830 = G__13908;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_13830){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_13830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___13878,mults,ensure_mult,p))
})();var state__6393__auto__ = (function (){var statearr_13877 = f__6392__auto__.call(null);(statearr_13877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___13878);
return statearr_13877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___13878,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6391__auto___14045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14015){var state_val_14016 = (state_14015[(1)]);if((state_val_14016 === (7)))
{var state_14015__$1 = state_14015;var statearr_14017_14046 = state_14015__$1;(statearr_14017_14046[(2)] = null);
(statearr_14017_14046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (1)))
{var state_14015__$1 = state_14015;var statearr_14018_14047 = state_14015__$1;(statearr_14018_14047[(2)] = null);
(statearr_14018_14047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (4)))
{var inst_13979 = (state_14015[(7)]);var inst_13981 = (inst_13979 < cnt);var state_14015__$1 = state_14015;if(cljs.core.truth_(inst_13981))
{var statearr_14019_14048 = state_14015__$1;(statearr_14019_14048[(1)] = (6));
} else
{var statearr_14020_14049 = state_14015__$1;(statearr_14020_14049[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (15)))
{var inst_14011 = (state_14015[(2)]);var state_14015__$1 = state_14015;var statearr_14021_14050 = state_14015__$1;(statearr_14021_14050[(2)] = inst_14011);
(statearr_14021_14050[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (13)))
{var inst_14004 = cljs.core.async.close_BANG_.call(null,out);var state_14015__$1 = state_14015;var statearr_14022_14051 = state_14015__$1;(statearr_14022_14051[(2)] = inst_14004);
(statearr_14022_14051[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (6)))
{var state_14015__$1 = state_14015;var statearr_14023_14052 = state_14015__$1;(statearr_14023_14052[(2)] = null);
(statearr_14023_14052[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (3)))
{var inst_14013 = (state_14015[(2)]);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14015__$1,inst_14013);
} else
{if((state_val_14016 === (12)))
{var inst_14001 = (state_14015[(8)]);var inst_14001__$1 = (state_14015[(2)]);var inst_14002 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14001__$1);var state_14015__$1 = (function (){var statearr_14024 = state_14015;(statearr_14024[(8)] = inst_14001__$1);
return statearr_14024;
})();if(cljs.core.truth_(inst_14002))
{var statearr_14025_14053 = state_14015__$1;(statearr_14025_14053[(1)] = (13));
} else
{var statearr_14026_14054 = state_14015__$1;(statearr_14026_14054[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (2)))
{var inst_13978 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13979 = (0);var state_14015__$1 = (function (){var statearr_14027 = state_14015;(statearr_14027[(9)] = inst_13978);
(statearr_14027[(7)] = inst_13979);
return statearr_14027;
})();var statearr_14028_14055 = state_14015__$1;(statearr_14028_14055[(2)] = null);
(statearr_14028_14055[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (11)))
{var inst_13979 = (state_14015[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14015,(10),Object,null,(9));var inst_13988 = chs__$1.call(null,inst_13979);var inst_13989 = done.call(null,inst_13979);var inst_13990 = cljs.core.async.take_BANG_.call(null,inst_13988,inst_13989);var state_14015__$1 = state_14015;var statearr_14029_14056 = state_14015__$1;(statearr_14029_14056[(2)] = inst_13990);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (9)))
{var inst_13979 = (state_14015[(7)]);var inst_13992 = (state_14015[(2)]);var inst_13993 = (inst_13979 + (1));var inst_13979__$1 = inst_13993;var state_14015__$1 = (function (){var statearr_14030 = state_14015;(statearr_14030[(10)] = inst_13992);
(statearr_14030[(7)] = inst_13979__$1);
return statearr_14030;
})();var statearr_14031_14057 = state_14015__$1;(statearr_14031_14057[(2)] = null);
(statearr_14031_14057[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (5)))
{var inst_13999 = (state_14015[(2)]);var state_14015__$1 = (function (){var statearr_14032 = state_14015;(statearr_14032[(11)] = inst_13999);
return statearr_14032;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14015__$1,(12),dchan);
} else
{if((state_val_14016 === (14)))
{var inst_14001 = (state_14015[(8)]);var inst_14006 = cljs.core.apply.call(null,f,inst_14001);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14015__$1,(16),out,inst_14006);
} else
{if((state_val_14016 === (16)))
{var inst_14008 = (state_14015[(2)]);var state_14015__$1 = (function (){var statearr_14033 = state_14015;(statearr_14033[(12)] = inst_14008);
return statearr_14033;
})();var statearr_14034_14058 = state_14015__$1;(statearr_14034_14058[(2)] = null);
(statearr_14034_14058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (10)))
{var inst_13983 = (state_14015[(2)]);var inst_13984 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14015__$1 = (function (){var statearr_14035 = state_14015;(statearr_14035[(13)] = inst_13983);
return statearr_14035;
})();var statearr_14036_14059 = state_14015__$1;(statearr_14036_14059[(2)] = inst_13984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14016 === (8)))
{var inst_13997 = (state_14015[(2)]);var state_14015__$1 = state_14015;var statearr_14037_14060 = state_14015__$1;(statearr_14037_14060[(2)] = inst_13997);
(statearr_14037_14060[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6376__auto__,c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14041[(0)] = state_machine__6377__auto__);
(statearr_14041[(1)] = (1));
return statearr_14041;
});
var state_machine__6377__auto____1 = (function (state_14015){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14042){if((e14042 instanceof Object))
{var ex__6380__auto__ = e14042;var statearr_14043_14061 = state_14015;(statearr_14043_14061[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14062 = state_14015;
state_14015 = G__14062;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6393__auto__ = (function (){var statearr_14044 = f__6392__auto__.call(null);(statearr_14044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14045);
return statearr_14044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14045,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___14170 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14170,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14170,out){
return (function (state_14146){var state_val_14147 = (state_14146[(1)]);if((state_val_14147 === (7)))
{var inst_14126 = (state_14146[(7)]);var inst_14125 = (state_14146[(8)]);var inst_14125__$1 = (state_14146[(2)]);var inst_14126__$1 = cljs.core.nth.call(null,inst_14125__$1,(0),null);var inst_14127 = cljs.core.nth.call(null,inst_14125__$1,(1),null);var inst_14128 = (inst_14126__$1 == null);var state_14146__$1 = (function (){var statearr_14148 = state_14146;(statearr_14148[(7)] = inst_14126__$1);
(statearr_14148[(9)] = inst_14127);
(statearr_14148[(8)] = inst_14125__$1);
return statearr_14148;
})();if(cljs.core.truth_(inst_14128))
{var statearr_14149_14171 = state_14146__$1;(statearr_14149_14171[(1)] = (8));
} else
{var statearr_14150_14172 = state_14146__$1;(statearr_14150_14172[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (1)))
{var inst_14117 = cljs.core.vec.call(null,chs);var inst_14118 = inst_14117;var state_14146__$1 = (function (){var statearr_14151 = state_14146;(statearr_14151[(10)] = inst_14118);
return statearr_14151;
})();var statearr_14152_14173 = state_14146__$1;(statearr_14152_14173[(2)] = null);
(statearr_14152_14173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (4)))
{var inst_14118 = (state_14146[(10)]);var state_14146__$1 = state_14146;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14146__$1,(7),inst_14118);
} else
{if((state_val_14147 === (6)))
{var inst_14142 = (state_14146[(2)]);var state_14146__$1 = state_14146;var statearr_14153_14174 = state_14146__$1;(statearr_14153_14174[(2)] = inst_14142);
(statearr_14153_14174[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (3)))
{var inst_14144 = (state_14146[(2)]);var state_14146__$1 = state_14146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14146__$1,inst_14144);
} else
{if((state_val_14147 === (2)))
{var inst_14118 = (state_14146[(10)]);var inst_14120 = cljs.core.count.call(null,inst_14118);var inst_14121 = (inst_14120 > (0));var state_14146__$1 = state_14146;if(cljs.core.truth_(inst_14121))
{var statearr_14155_14175 = state_14146__$1;(statearr_14155_14175[(1)] = (4));
} else
{var statearr_14156_14176 = state_14146__$1;(statearr_14156_14176[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (11)))
{var inst_14118 = (state_14146[(10)]);var inst_14135 = (state_14146[(2)]);var tmp14154 = inst_14118;var inst_14118__$1 = tmp14154;var state_14146__$1 = (function (){var statearr_14157 = state_14146;(statearr_14157[(11)] = inst_14135);
(statearr_14157[(10)] = inst_14118__$1);
return statearr_14157;
})();var statearr_14158_14177 = state_14146__$1;(statearr_14158_14177[(2)] = null);
(statearr_14158_14177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (9)))
{var inst_14126 = (state_14146[(7)]);var state_14146__$1 = state_14146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14146__$1,(11),out,inst_14126);
} else
{if((state_val_14147 === (5)))
{var inst_14140 = cljs.core.async.close_BANG_.call(null,out);var state_14146__$1 = state_14146;var statearr_14159_14178 = state_14146__$1;(statearr_14159_14178[(2)] = inst_14140);
(statearr_14159_14178[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (10)))
{var inst_14138 = (state_14146[(2)]);var state_14146__$1 = state_14146;var statearr_14160_14179 = state_14146__$1;(statearr_14160_14179[(2)] = inst_14138);
(statearr_14160_14179[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (8)))
{var inst_14126 = (state_14146[(7)]);var inst_14127 = (state_14146[(9)]);var inst_14125 = (state_14146[(8)]);var inst_14118 = (state_14146[(10)]);var inst_14130 = (function (){var c = inst_14127;var v = inst_14126;var vec__14123 = inst_14125;var cs = inst_14118;return ((function (c,v,vec__14123,cs,inst_14126,inst_14127,inst_14125,inst_14118,state_val_14147,c__6391__auto___14170,out){
return (function (p1__14063_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14063_SHARP_);
});
;})(c,v,vec__14123,cs,inst_14126,inst_14127,inst_14125,inst_14118,state_val_14147,c__6391__auto___14170,out))
})();var inst_14131 = cljs.core.filterv.call(null,inst_14130,inst_14118);var inst_14118__$1 = inst_14131;var state_14146__$1 = (function (){var statearr_14161 = state_14146;(statearr_14161[(10)] = inst_14118__$1);
return statearr_14161;
})();var statearr_14162_14180 = state_14146__$1;(statearr_14162_14180[(2)] = null);
(statearr_14162_14180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14170,out))
;return ((function (switch__6376__auto__,c__6391__auto___14170,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14166 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14166[(0)] = state_machine__6377__auto__);
(statearr_14166[(1)] = (1));
return statearr_14166;
});
var state_machine__6377__auto____1 = (function (state_14146){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14146);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14167){if((e14167 instanceof Object))
{var ex__6380__auto__ = e14167;var statearr_14168_14181 = state_14146;(statearr_14168_14181[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14167;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14182 = state_14146;
state_14146 = G__14182;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14146){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14170,out))
})();var state__6393__auto__ = (function (){var statearr_14169 = f__6392__auto__.call(null);(statearr_14169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14170);
return statearr_14169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14170,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___14275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14275,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14275,out){
return (function (state_14252){var state_val_14253 = (state_14252[(1)]);if((state_val_14253 === (7)))
{var inst_14234 = (state_14252[(7)]);var inst_14234__$1 = (state_14252[(2)]);var inst_14235 = (inst_14234__$1 == null);var inst_14236 = cljs.core.not.call(null,inst_14235);var state_14252__$1 = (function (){var statearr_14254 = state_14252;(statearr_14254[(7)] = inst_14234__$1);
return statearr_14254;
})();if(inst_14236)
{var statearr_14255_14276 = state_14252__$1;(statearr_14255_14276[(1)] = (8));
} else
{var statearr_14256_14277 = state_14252__$1;(statearr_14256_14277[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (1)))
{var inst_14229 = (0);var state_14252__$1 = (function (){var statearr_14257 = state_14252;(statearr_14257[(8)] = inst_14229);
return statearr_14257;
})();var statearr_14258_14278 = state_14252__$1;(statearr_14258_14278[(2)] = null);
(statearr_14258_14278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (4)))
{var state_14252__$1 = state_14252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14252__$1,(7),ch);
} else
{if((state_val_14253 === (6)))
{var inst_14247 = (state_14252[(2)]);var state_14252__$1 = state_14252;var statearr_14259_14279 = state_14252__$1;(statearr_14259_14279[(2)] = inst_14247);
(statearr_14259_14279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (3)))
{var inst_14249 = (state_14252[(2)]);var inst_14250 = cljs.core.async.close_BANG_.call(null,out);var state_14252__$1 = (function (){var statearr_14260 = state_14252;(statearr_14260[(9)] = inst_14249);
return statearr_14260;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14252__$1,inst_14250);
} else
{if((state_val_14253 === (2)))
{var inst_14229 = (state_14252[(8)]);var inst_14231 = (inst_14229 < n);var state_14252__$1 = state_14252;if(cljs.core.truth_(inst_14231))
{var statearr_14261_14280 = state_14252__$1;(statearr_14261_14280[(1)] = (4));
} else
{var statearr_14262_14281 = state_14252__$1;(statearr_14262_14281[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (11)))
{var inst_14229 = (state_14252[(8)]);var inst_14239 = (state_14252[(2)]);var inst_14240 = (inst_14229 + (1));var inst_14229__$1 = inst_14240;var state_14252__$1 = (function (){var statearr_14263 = state_14252;(statearr_14263[(8)] = inst_14229__$1);
(statearr_14263[(10)] = inst_14239);
return statearr_14263;
})();var statearr_14264_14282 = state_14252__$1;(statearr_14264_14282[(2)] = null);
(statearr_14264_14282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (9)))
{var state_14252__$1 = state_14252;var statearr_14265_14283 = state_14252__$1;(statearr_14265_14283[(2)] = null);
(statearr_14265_14283[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (5)))
{var state_14252__$1 = state_14252;var statearr_14266_14284 = state_14252__$1;(statearr_14266_14284[(2)] = null);
(statearr_14266_14284[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (10)))
{var inst_14244 = (state_14252[(2)]);var state_14252__$1 = state_14252;var statearr_14267_14285 = state_14252__$1;(statearr_14267_14285[(2)] = inst_14244);
(statearr_14267_14285[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14253 === (8)))
{var inst_14234 = (state_14252[(7)]);var state_14252__$1 = state_14252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14252__$1,(11),out,inst_14234);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14275,out))
;return ((function (switch__6376__auto__,c__6391__auto___14275,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14271 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14271[(0)] = state_machine__6377__auto__);
(statearr_14271[(1)] = (1));
return statearr_14271;
});
var state_machine__6377__auto____1 = (function (state_14252){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14272){if((e14272 instanceof Object))
{var ex__6380__auto__ = e14272;var statearr_14273_14286 = state_14252;(statearr_14273_14286[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14287 = state_14252;
state_14252 = G__14287;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14252){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14275,out))
})();var state__6393__auto__ = (function (){var statearr_14274 = f__6392__auto__.call(null);(statearr_14274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14275);
return statearr_14274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14275,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14295 = (function (ch,f,map_LT_,meta14296){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14296 = meta14296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14295.cljs$lang$type = true;
cljs.core.async.t14295.cljs$lang$ctorStr = "cljs.core.async/t14295";
cljs.core.async.t14295.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t14295");
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14298 = (function (fn1,_,meta14296,ch,f,map_LT_,meta14299){
this.fn1 = fn1;
this._ = _;
this.meta14296 = meta14296;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14299 = meta14299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14298.cljs$lang$type = true;
cljs.core.async.t14298.cljs$lang$ctorStr = "cljs.core.async/t14298";
cljs.core.async.t14298.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t14298");
});})(___$1))
;
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14288_SHARP_){return f1.call(null,(((p1__14288_SHARP_ == null))?null:self__.f.call(null,p1__14288_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14300){var self__ = this;
var _14300__$1 = this;return self__.meta14299;
});})(___$1))
;
cljs.core.async.t14298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14300,meta14299__$1){var self__ = this;
var _14300__$1 = this;return (new cljs.core.async.t14298(self__.fn1,self__._,self__.meta14296,self__.ch,self__.f,self__.map_LT_,meta14299__$1));
});})(___$1))
;
cljs.core.async.__GT_t14298 = ((function (___$1){
return (function __GT_t14298(fn1__$1,___$2,meta14296__$1,ch__$2,f__$2,map_LT___$2,meta14299){return (new cljs.core.async.t14298(fn1__$1,___$2,meta14296__$1,ch__$2,f__$2,map_LT___$2,meta14299));
});})(___$1))
;
}
return (new cljs.core.async.t14298(fn1,___$1,self__.meta14296,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3558__auto__ = ret;if(cljs.core.truth_(and__3558__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3558__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14297){var self__ = this;
var _14297__$1 = this;return self__.meta14296;
});
cljs.core.async.t14295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14297,meta14296__$1){var self__ = this;
var _14297__$1 = this;return (new cljs.core.async.t14295(self__.ch,self__.f,self__.map_LT_,meta14296__$1));
});
cljs.core.async.__GT_t14295 = (function __GT_t14295(ch__$1,f__$1,map_LT___$1,meta14296){return (new cljs.core.async.t14295(ch__$1,f__$1,map_LT___$1,meta14296));
});
}
return (new cljs.core.async.t14295(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14304 = (function (ch,f,map_GT_,meta14305){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14305 = meta14305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14304.cljs$lang$type = true;
cljs.core.async.t14304.cljs$lang$ctorStr = "cljs.core.async/t14304";
cljs.core.async.t14304.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t14304");
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14306){var self__ = this;
var _14306__$1 = this;return self__.meta14305;
});
cljs.core.async.t14304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14306,meta14305__$1){var self__ = this;
var _14306__$1 = this;return (new cljs.core.async.t14304(self__.ch,self__.f,self__.map_GT_,meta14305__$1));
});
cljs.core.async.__GT_t14304 = (function __GT_t14304(ch__$1,f__$1,map_GT___$1,meta14305){return (new cljs.core.async.t14304(ch__$1,f__$1,map_GT___$1,meta14305));
});
}
return (new cljs.core.async.t14304(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14310 = (function (ch,p,filter_GT_,meta14311){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14311 = meta14311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14310.cljs$lang$type = true;
cljs.core.async.t14310.cljs$lang$ctorStr = "cljs.core.async/t14310";
cljs.core.async.t14310.cljs$lang$ctorPrWriter = (function (this__4137__auto__,writer__4138__auto__,opt__4139__auto__){return cljs.core._write.call(null,writer__4138__auto__,"cljs.core.async/t14310");
});
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14312){var self__ = this;
var _14312__$1 = this;return self__.meta14311;
});
cljs.core.async.t14310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14312,meta14311__$1){var self__ = this;
var _14312__$1 = this;return (new cljs.core.async.t14310(self__.ch,self__.p,self__.filter_GT_,meta14311__$1));
});
cljs.core.async.__GT_t14310 = (function __GT_t14310(ch__$1,p__$1,filter_GT___$1,meta14311){return (new cljs.core.async.t14310(ch__$1,p__$1,filter_GT___$1,meta14311));
});
}
return (new cljs.core.async.t14310(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___14395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14395,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14395,out){
return (function (state_14374){var state_val_14375 = (state_14374[(1)]);if((state_val_14375 === (7)))
{var inst_14370 = (state_14374[(2)]);var state_14374__$1 = state_14374;var statearr_14376_14396 = state_14374__$1;(statearr_14376_14396[(2)] = inst_14370);
(statearr_14376_14396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (1)))
{var state_14374__$1 = state_14374;var statearr_14377_14397 = state_14374__$1;(statearr_14377_14397[(2)] = null);
(statearr_14377_14397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (4)))
{var inst_14356 = (state_14374[(7)]);var inst_14356__$1 = (state_14374[(2)]);var inst_14357 = (inst_14356__$1 == null);var state_14374__$1 = (function (){var statearr_14378 = state_14374;(statearr_14378[(7)] = inst_14356__$1);
return statearr_14378;
})();if(cljs.core.truth_(inst_14357))
{var statearr_14379_14398 = state_14374__$1;(statearr_14379_14398[(1)] = (5));
} else
{var statearr_14380_14399 = state_14374__$1;(statearr_14380_14399[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (6)))
{var inst_14356 = (state_14374[(7)]);var inst_14361 = p.call(null,inst_14356);var state_14374__$1 = state_14374;if(cljs.core.truth_(inst_14361))
{var statearr_14381_14400 = state_14374__$1;(statearr_14381_14400[(1)] = (8));
} else
{var statearr_14382_14401 = state_14374__$1;(statearr_14382_14401[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (3)))
{var inst_14372 = (state_14374[(2)]);var state_14374__$1 = state_14374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14374__$1,inst_14372);
} else
{if((state_val_14375 === (2)))
{var state_14374__$1 = state_14374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14374__$1,(4),ch);
} else
{if((state_val_14375 === (11)))
{var inst_14364 = (state_14374[(2)]);var state_14374__$1 = state_14374;var statearr_14383_14402 = state_14374__$1;(statearr_14383_14402[(2)] = inst_14364);
(statearr_14383_14402[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (9)))
{var state_14374__$1 = state_14374;var statearr_14384_14403 = state_14374__$1;(statearr_14384_14403[(2)] = null);
(statearr_14384_14403[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (5)))
{var inst_14359 = cljs.core.async.close_BANG_.call(null,out);var state_14374__$1 = state_14374;var statearr_14385_14404 = state_14374__$1;(statearr_14385_14404[(2)] = inst_14359);
(statearr_14385_14404[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (10)))
{var inst_14367 = (state_14374[(2)]);var state_14374__$1 = (function (){var statearr_14386 = state_14374;(statearr_14386[(8)] = inst_14367);
return statearr_14386;
})();var statearr_14387_14405 = state_14374__$1;(statearr_14387_14405[(2)] = null);
(statearr_14387_14405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14375 === (8)))
{var inst_14356 = (state_14374[(7)]);var state_14374__$1 = state_14374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14374__$1,(11),out,inst_14356);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14395,out))
;return ((function (switch__6376__auto__,c__6391__auto___14395,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14391 = [null,null,null,null,null,null,null,null,null];(statearr_14391[(0)] = state_machine__6377__auto__);
(statearr_14391[(1)] = (1));
return statearr_14391;
});
var state_machine__6377__auto____1 = (function (state_14374){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14392){if((e14392 instanceof Object))
{var ex__6380__auto__ = e14392;var statearr_14393_14406 = state_14374;(statearr_14393_14406[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14392;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14407 = state_14374;
state_14374 = G__14407;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14374){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14395,out))
})();var state__6393__auto__ = (function (){var statearr_14394 = f__6392__auto__.call(null);(statearr_14394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14395);
return statearr_14394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14395,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto__){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto__){
return (function (state_14573){var state_val_14574 = (state_14573[(1)]);if((state_val_14574 === (7)))
{var inst_14569 = (state_14573[(2)]);var state_14573__$1 = state_14573;var statearr_14575_14616 = state_14573__$1;(statearr_14575_14616[(2)] = inst_14569);
(statearr_14575_14616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (20)))
{var inst_14539 = (state_14573[(7)]);var inst_14550 = (state_14573[(2)]);var inst_14551 = cljs.core.next.call(null,inst_14539);var inst_14525 = inst_14551;var inst_14526 = null;var inst_14527 = (0);var inst_14528 = (0);var state_14573__$1 = (function (){var statearr_14576 = state_14573;(statearr_14576[(8)] = inst_14525);
(statearr_14576[(9)] = inst_14528);
(statearr_14576[(10)] = inst_14526);
(statearr_14576[(11)] = inst_14527);
(statearr_14576[(12)] = inst_14550);
return statearr_14576;
})();var statearr_14577_14617 = state_14573__$1;(statearr_14577_14617[(2)] = null);
(statearr_14577_14617[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (1)))
{var state_14573__$1 = state_14573;var statearr_14578_14618 = state_14573__$1;(statearr_14578_14618[(2)] = null);
(statearr_14578_14618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (4)))
{var inst_14514 = (state_14573[(13)]);var inst_14514__$1 = (state_14573[(2)]);var inst_14515 = (inst_14514__$1 == null);var state_14573__$1 = (function (){var statearr_14579 = state_14573;(statearr_14579[(13)] = inst_14514__$1);
return statearr_14579;
})();if(cljs.core.truth_(inst_14515))
{var statearr_14580_14619 = state_14573__$1;(statearr_14580_14619[(1)] = (5));
} else
{var statearr_14581_14620 = state_14573__$1;(statearr_14581_14620[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (15)))
{var state_14573__$1 = state_14573;var statearr_14585_14621 = state_14573__$1;(statearr_14585_14621[(2)] = null);
(statearr_14585_14621[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (21)))
{var state_14573__$1 = state_14573;var statearr_14586_14622 = state_14573__$1;(statearr_14586_14622[(2)] = null);
(statearr_14586_14622[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (13)))
{var inst_14525 = (state_14573[(8)]);var inst_14528 = (state_14573[(9)]);var inst_14526 = (state_14573[(10)]);var inst_14527 = (state_14573[(11)]);var inst_14535 = (state_14573[(2)]);var inst_14536 = (inst_14528 + (1));var tmp14582 = inst_14525;var tmp14583 = inst_14526;var tmp14584 = inst_14527;var inst_14525__$1 = tmp14582;var inst_14526__$1 = tmp14583;var inst_14527__$1 = tmp14584;var inst_14528__$1 = inst_14536;var state_14573__$1 = (function (){var statearr_14587 = state_14573;(statearr_14587[(8)] = inst_14525__$1);
(statearr_14587[(9)] = inst_14528__$1);
(statearr_14587[(10)] = inst_14526__$1);
(statearr_14587[(14)] = inst_14535);
(statearr_14587[(11)] = inst_14527__$1);
return statearr_14587;
})();var statearr_14588_14623 = state_14573__$1;(statearr_14588_14623[(2)] = null);
(statearr_14588_14623[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (22)))
{var state_14573__$1 = state_14573;var statearr_14589_14624 = state_14573__$1;(statearr_14589_14624[(2)] = null);
(statearr_14589_14624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (6)))
{var inst_14514 = (state_14573[(13)]);var inst_14523 = f.call(null,inst_14514);var inst_14524 = cljs.core.seq.call(null,inst_14523);var inst_14525 = inst_14524;var inst_14526 = null;var inst_14527 = (0);var inst_14528 = (0);var state_14573__$1 = (function (){var statearr_14590 = state_14573;(statearr_14590[(8)] = inst_14525);
(statearr_14590[(9)] = inst_14528);
(statearr_14590[(10)] = inst_14526);
(statearr_14590[(11)] = inst_14527);
return statearr_14590;
})();var statearr_14591_14625 = state_14573__$1;(statearr_14591_14625[(2)] = null);
(statearr_14591_14625[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (17)))
{var inst_14539 = (state_14573[(7)]);var inst_14543 = cljs.core.chunk_first.call(null,inst_14539);var inst_14544 = cljs.core.chunk_rest.call(null,inst_14539);var inst_14545 = cljs.core.count.call(null,inst_14543);var inst_14525 = inst_14544;var inst_14526 = inst_14543;var inst_14527 = inst_14545;var inst_14528 = (0);var state_14573__$1 = (function (){var statearr_14592 = state_14573;(statearr_14592[(8)] = inst_14525);
(statearr_14592[(9)] = inst_14528);
(statearr_14592[(10)] = inst_14526);
(statearr_14592[(11)] = inst_14527);
return statearr_14592;
})();var statearr_14593_14626 = state_14573__$1;(statearr_14593_14626[(2)] = null);
(statearr_14593_14626[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (3)))
{var inst_14571 = (state_14573[(2)]);var state_14573__$1 = state_14573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14573__$1,inst_14571);
} else
{if((state_val_14574 === (12)))
{var inst_14559 = (state_14573[(2)]);var state_14573__$1 = state_14573;var statearr_14594_14627 = state_14573__$1;(statearr_14594_14627[(2)] = inst_14559);
(statearr_14594_14627[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (2)))
{var state_14573__$1 = state_14573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14573__$1,(4),in$);
} else
{if((state_val_14574 === (23)))
{var inst_14567 = (state_14573[(2)]);var state_14573__$1 = state_14573;var statearr_14595_14628 = state_14573__$1;(statearr_14595_14628[(2)] = inst_14567);
(statearr_14595_14628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (19)))
{var inst_14554 = (state_14573[(2)]);var state_14573__$1 = state_14573;var statearr_14596_14629 = state_14573__$1;(statearr_14596_14629[(2)] = inst_14554);
(statearr_14596_14629[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (11)))
{var inst_14525 = (state_14573[(8)]);var inst_14539 = (state_14573[(7)]);var inst_14539__$1 = cljs.core.seq.call(null,inst_14525);var state_14573__$1 = (function (){var statearr_14597 = state_14573;(statearr_14597[(7)] = inst_14539__$1);
return statearr_14597;
})();if(inst_14539__$1)
{var statearr_14598_14630 = state_14573__$1;(statearr_14598_14630[(1)] = (14));
} else
{var statearr_14599_14631 = state_14573__$1;(statearr_14599_14631[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (9)))
{var inst_14561 = (state_14573[(2)]);var inst_14562 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14573__$1 = (function (){var statearr_14600 = state_14573;(statearr_14600[(15)] = inst_14561);
return statearr_14600;
})();if(cljs.core.truth_(inst_14562))
{var statearr_14601_14632 = state_14573__$1;(statearr_14601_14632[(1)] = (21));
} else
{var statearr_14602_14633 = state_14573__$1;(statearr_14602_14633[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (5)))
{var inst_14517 = cljs.core.async.close_BANG_.call(null,out);var state_14573__$1 = state_14573;var statearr_14603_14634 = state_14573__$1;(statearr_14603_14634[(2)] = inst_14517);
(statearr_14603_14634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (14)))
{var inst_14539 = (state_14573[(7)]);var inst_14541 = cljs.core.chunked_seq_QMARK_.call(null,inst_14539);var state_14573__$1 = state_14573;if(inst_14541)
{var statearr_14604_14635 = state_14573__$1;(statearr_14604_14635[(1)] = (17));
} else
{var statearr_14605_14636 = state_14573__$1;(statearr_14605_14636[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (16)))
{var inst_14557 = (state_14573[(2)]);var state_14573__$1 = state_14573;var statearr_14606_14637 = state_14573__$1;(statearr_14606_14637[(2)] = inst_14557);
(statearr_14606_14637[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14574 === (10)))
{var inst_14528 = (state_14573[(9)]);var inst_14526 = (state_14573[(10)]);var inst_14533 = cljs.core._nth.call(null,inst_14526,inst_14528);var state_14573__$1 = state_14573;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14573__$1,(13),out,inst_14533);
} else
{if((state_val_14574 === (18)))
{var inst_14539 = (state_14573[(7)]);var inst_14548 = cljs.core.first.call(null,inst_14539);var state_14573__$1 = state_14573;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14573__$1,(20),out,inst_14548);
} else
{if((state_val_14574 === (8)))
{var inst_14528 = (state_14573[(9)]);var inst_14527 = (state_14573[(11)]);var inst_14530 = (inst_14528 < inst_14527);var inst_14531 = inst_14530;var state_14573__$1 = state_14573;if(cljs.core.truth_(inst_14531))
{var statearr_14607_14638 = state_14573__$1;(statearr_14607_14638[(1)] = (10));
} else
{var statearr_14608_14639 = state_14573__$1;(statearr_14608_14639[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto__))
;return ((function (switch__6376__auto__,c__6391__auto__){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14612[(0)] = state_machine__6377__auto__);
(statearr_14612[(1)] = (1));
return statearr_14612;
});
var state_machine__6377__auto____1 = (function (state_14573){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14573);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14613){if((e14613 instanceof Object))
{var ex__6380__auto__ = e14613;var statearr_14614_14640 = state_14573;(statearr_14614_14640[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14641 = state_14573;
state_14573 = G__14641;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14573){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto__))
})();var state__6393__auto__ = (function (){var statearr_14615 = f__6392__auto__.call(null);(statearr_14615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto__);
return statearr_14615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto__))
);
return c__6391__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___14738 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14738,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14738,out){
return (function (state_14713){var state_val_14714 = (state_14713[(1)]);if((state_val_14714 === (7)))
{var inst_14708 = (state_14713[(2)]);var state_14713__$1 = state_14713;var statearr_14715_14739 = state_14713__$1;(statearr_14715_14739[(2)] = inst_14708);
(statearr_14715_14739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (1)))
{var inst_14690 = null;var state_14713__$1 = (function (){var statearr_14716 = state_14713;(statearr_14716[(7)] = inst_14690);
return statearr_14716;
})();var statearr_14717_14740 = state_14713__$1;(statearr_14717_14740[(2)] = null);
(statearr_14717_14740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (4)))
{var inst_14693 = (state_14713[(8)]);var inst_14693__$1 = (state_14713[(2)]);var inst_14694 = (inst_14693__$1 == null);var inst_14695 = cljs.core.not.call(null,inst_14694);var state_14713__$1 = (function (){var statearr_14718 = state_14713;(statearr_14718[(8)] = inst_14693__$1);
return statearr_14718;
})();if(inst_14695)
{var statearr_14719_14741 = state_14713__$1;(statearr_14719_14741[(1)] = (5));
} else
{var statearr_14720_14742 = state_14713__$1;(statearr_14720_14742[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (6)))
{var state_14713__$1 = state_14713;var statearr_14721_14743 = state_14713__$1;(statearr_14721_14743[(2)] = null);
(statearr_14721_14743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (3)))
{var inst_14710 = (state_14713[(2)]);var inst_14711 = cljs.core.async.close_BANG_.call(null,out);var state_14713__$1 = (function (){var statearr_14722 = state_14713;(statearr_14722[(9)] = inst_14710);
return statearr_14722;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14713__$1,inst_14711);
} else
{if((state_val_14714 === (2)))
{var state_14713__$1 = state_14713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14713__$1,(4),ch);
} else
{if((state_val_14714 === (11)))
{var inst_14693 = (state_14713[(8)]);var inst_14702 = (state_14713[(2)]);var inst_14690 = inst_14693;var state_14713__$1 = (function (){var statearr_14723 = state_14713;(statearr_14723[(10)] = inst_14702);
(statearr_14723[(7)] = inst_14690);
return statearr_14723;
})();var statearr_14724_14744 = state_14713__$1;(statearr_14724_14744[(2)] = null);
(statearr_14724_14744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (9)))
{var inst_14693 = (state_14713[(8)]);var state_14713__$1 = state_14713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14713__$1,(11),out,inst_14693);
} else
{if((state_val_14714 === (5)))
{var inst_14693 = (state_14713[(8)]);var inst_14690 = (state_14713[(7)]);var inst_14697 = cljs.core._EQ_.call(null,inst_14693,inst_14690);var state_14713__$1 = state_14713;if(inst_14697)
{var statearr_14726_14745 = state_14713__$1;(statearr_14726_14745[(1)] = (8));
} else
{var statearr_14727_14746 = state_14713__$1;(statearr_14727_14746[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (10)))
{var inst_14705 = (state_14713[(2)]);var state_14713__$1 = state_14713;var statearr_14728_14747 = state_14713__$1;(statearr_14728_14747[(2)] = inst_14705);
(statearr_14728_14747[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14714 === (8)))
{var inst_14690 = (state_14713[(7)]);var tmp14725 = inst_14690;var inst_14690__$1 = tmp14725;var state_14713__$1 = (function (){var statearr_14729 = state_14713;(statearr_14729[(7)] = inst_14690__$1);
return statearr_14729;
})();var statearr_14730_14748 = state_14713__$1;(statearr_14730_14748[(2)] = null);
(statearr_14730_14748[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14738,out))
;return ((function (switch__6376__auto__,c__6391__auto___14738,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14734 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14734[(0)] = state_machine__6377__auto__);
(statearr_14734[(1)] = (1));
return statearr_14734;
});
var state_machine__6377__auto____1 = (function (state_14713){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14713);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14735){if((e14735 instanceof Object))
{var ex__6380__auto__ = e14735;var statearr_14736_14749 = state_14713;(statearr_14736_14749[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14750 = state_14713;
state_14713 = G__14750;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14713){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14738,out))
})();var state__6393__auto__ = (function (){var statearr_14737 = f__6392__auto__.call(null);(statearr_14737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14738);
return statearr_14737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14738,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___14885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___14885,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___14885,out){
return (function (state_14855){var state_val_14856 = (state_14855[(1)]);if((state_val_14856 === (7)))
{var inst_14851 = (state_14855[(2)]);var state_14855__$1 = state_14855;var statearr_14857_14886 = state_14855__$1;(statearr_14857_14886[(2)] = inst_14851);
(statearr_14857_14886[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (1)))
{var inst_14818 = (new Array(n));var inst_14819 = inst_14818;var inst_14820 = (0);var state_14855__$1 = (function (){var statearr_14858 = state_14855;(statearr_14858[(7)] = inst_14820);
(statearr_14858[(8)] = inst_14819);
return statearr_14858;
})();var statearr_14859_14887 = state_14855__$1;(statearr_14859_14887[(2)] = null);
(statearr_14859_14887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (4)))
{var inst_14823 = (state_14855[(9)]);var inst_14823__$1 = (state_14855[(2)]);var inst_14824 = (inst_14823__$1 == null);var inst_14825 = cljs.core.not.call(null,inst_14824);var state_14855__$1 = (function (){var statearr_14860 = state_14855;(statearr_14860[(9)] = inst_14823__$1);
return statearr_14860;
})();if(inst_14825)
{var statearr_14861_14888 = state_14855__$1;(statearr_14861_14888[(1)] = (5));
} else
{var statearr_14862_14889 = state_14855__$1;(statearr_14862_14889[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (15)))
{var inst_14845 = (state_14855[(2)]);var state_14855__$1 = state_14855;var statearr_14863_14890 = state_14855__$1;(statearr_14863_14890[(2)] = inst_14845);
(statearr_14863_14890[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (13)))
{var state_14855__$1 = state_14855;var statearr_14864_14891 = state_14855__$1;(statearr_14864_14891[(2)] = null);
(statearr_14864_14891[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (6)))
{var inst_14820 = (state_14855[(7)]);var inst_14841 = (inst_14820 > (0));var state_14855__$1 = state_14855;if(cljs.core.truth_(inst_14841))
{var statearr_14865_14892 = state_14855__$1;(statearr_14865_14892[(1)] = (12));
} else
{var statearr_14866_14893 = state_14855__$1;(statearr_14866_14893[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (3)))
{var inst_14853 = (state_14855[(2)]);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14853);
} else
{if((state_val_14856 === (12)))
{var inst_14819 = (state_14855[(8)]);var inst_14843 = cljs.core.vec.call(null,inst_14819);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,(15),out,inst_14843);
} else
{if((state_val_14856 === (2)))
{var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,(4),ch);
} else
{if((state_val_14856 === (11)))
{var inst_14835 = (state_14855[(2)]);var inst_14836 = (new Array(n));var inst_14819 = inst_14836;var inst_14820 = (0);var state_14855__$1 = (function (){var statearr_14867 = state_14855;(statearr_14867[(7)] = inst_14820);
(statearr_14867[(8)] = inst_14819);
(statearr_14867[(10)] = inst_14835);
return statearr_14867;
})();var statearr_14868_14894 = state_14855__$1;(statearr_14868_14894[(2)] = null);
(statearr_14868_14894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (9)))
{var inst_14819 = (state_14855[(8)]);var inst_14833 = cljs.core.vec.call(null,inst_14819);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,(11),out,inst_14833);
} else
{if((state_val_14856 === (5)))
{var inst_14820 = (state_14855[(7)]);var inst_14823 = (state_14855[(9)]);var inst_14819 = (state_14855[(8)]);var inst_14828 = (state_14855[(11)]);var inst_14827 = (inst_14819[inst_14820] = inst_14823);var inst_14828__$1 = (inst_14820 + (1));var inst_14829 = (inst_14828__$1 < n);var state_14855__$1 = (function (){var statearr_14869 = state_14855;(statearr_14869[(12)] = inst_14827);
(statearr_14869[(11)] = inst_14828__$1);
return statearr_14869;
})();if(cljs.core.truth_(inst_14829))
{var statearr_14870_14895 = state_14855__$1;(statearr_14870_14895[(1)] = (8));
} else
{var statearr_14871_14896 = state_14855__$1;(statearr_14871_14896[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (14)))
{var inst_14848 = (state_14855[(2)]);var inst_14849 = cljs.core.async.close_BANG_.call(null,out);var state_14855__$1 = (function (){var statearr_14873 = state_14855;(statearr_14873[(13)] = inst_14848);
return statearr_14873;
})();var statearr_14874_14897 = state_14855__$1;(statearr_14874_14897[(2)] = inst_14849);
(statearr_14874_14897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (10)))
{var inst_14839 = (state_14855[(2)]);var state_14855__$1 = state_14855;var statearr_14875_14898 = state_14855__$1;(statearr_14875_14898[(2)] = inst_14839);
(statearr_14875_14898[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14856 === (8)))
{var inst_14819 = (state_14855[(8)]);var inst_14828 = (state_14855[(11)]);var tmp14872 = inst_14819;var inst_14819__$1 = tmp14872;var inst_14820 = inst_14828;var state_14855__$1 = (function (){var statearr_14876 = state_14855;(statearr_14876[(7)] = inst_14820);
(statearr_14876[(8)] = inst_14819__$1);
return statearr_14876;
})();var statearr_14877_14899 = state_14855__$1;(statearr_14877_14899[(2)] = null);
(statearr_14877_14899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___14885,out))
;return ((function (switch__6376__auto__,c__6391__auto___14885,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_14881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14881[(0)] = state_machine__6377__auto__);
(statearr_14881[(1)] = (1));
return statearr_14881;
});
var state_machine__6377__auto____1 = (function (state_14855){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_14855);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e14882){if((e14882 instanceof Object))
{var ex__6380__auto__ = e14882;var statearr_14883_14900 = state_14855;(statearr_14883_14900[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14882;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14901 = state_14855;
state_14855 = G__14901;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___14885,out))
})();var state__6393__auto__ = (function (){var statearr_14884 = f__6392__auto__.call(null);(statearr_14884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___14885);
return statearr_14884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___14885,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6391__auto___15044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___15044,out){
return (function (){var f__6392__auto__ = (function (){var switch__6376__auto__ = ((function (c__6391__auto___15044,out){
return (function (state_15014){var state_val_15015 = (state_15014[(1)]);if((state_val_15015 === (7)))
{var inst_15010 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15016_15045 = state_15014__$1;(statearr_15016_15045[(2)] = inst_15010);
(statearr_15016_15045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (1)))
{var inst_14973 = [];var inst_14974 = inst_14973;var inst_14975 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15014__$1 = (function (){var statearr_15017 = state_15014;(statearr_15017[(7)] = inst_14974);
(statearr_15017[(8)] = inst_14975);
return statearr_15017;
})();var statearr_15018_15046 = state_15014__$1;(statearr_15018_15046[(2)] = null);
(statearr_15018_15046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (4)))
{var inst_14978 = (state_15014[(9)]);var inst_14978__$1 = (state_15014[(2)]);var inst_14979 = (inst_14978__$1 == null);var inst_14980 = cljs.core.not.call(null,inst_14979);var state_15014__$1 = (function (){var statearr_15019 = state_15014;(statearr_15019[(9)] = inst_14978__$1);
return statearr_15019;
})();if(inst_14980)
{var statearr_15020_15047 = state_15014__$1;(statearr_15020_15047[(1)] = (5));
} else
{var statearr_15021_15048 = state_15014__$1;(statearr_15021_15048[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (15)))
{var inst_15004 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15022_15049 = state_15014__$1;(statearr_15022_15049[(2)] = inst_15004);
(statearr_15022_15049[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (13)))
{var state_15014__$1 = state_15014;var statearr_15023_15050 = state_15014__$1;(statearr_15023_15050[(2)] = null);
(statearr_15023_15050[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (6)))
{var inst_14974 = (state_15014[(7)]);var inst_14999 = inst_14974.length;var inst_15000 = (inst_14999 > (0));var state_15014__$1 = state_15014;if(cljs.core.truth_(inst_15000))
{var statearr_15024_15051 = state_15014__$1;(statearr_15024_15051[(1)] = (12));
} else
{var statearr_15025_15052 = state_15014__$1;(statearr_15025_15052[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (3)))
{var inst_15012 = (state_15014[(2)]);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15014__$1,inst_15012);
} else
{if((state_val_15015 === (12)))
{var inst_14974 = (state_15014[(7)]);var inst_15002 = cljs.core.vec.call(null,inst_14974);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(15),out,inst_15002);
} else
{if((state_val_15015 === (2)))
{var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15014__$1,(4),ch);
} else
{if((state_val_15015 === (11)))
{var inst_14982 = (state_15014[(10)]);var inst_14978 = (state_15014[(9)]);var inst_14992 = (state_15014[(2)]);var inst_14993 = [];var inst_14994 = inst_14993.push(inst_14978);var inst_14974 = inst_14993;var inst_14975 = inst_14982;var state_15014__$1 = (function (){var statearr_15026 = state_15014;(statearr_15026[(7)] = inst_14974);
(statearr_15026[(11)] = inst_14994);
(statearr_15026[(8)] = inst_14975);
(statearr_15026[(12)] = inst_14992);
return statearr_15026;
})();var statearr_15027_15053 = state_15014__$1;(statearr_15027_15053[(2)] = null);
(statearr_15027_15053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (9)))
{var inst_14974 = (state_15014[(7)]);var inst_14990 = cljs.core.vec.call(null,inst_14974);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(11),out,inst_14990);
} else
{if((state_val_15015 === (5)))
{var inst_14982 = (state_15014[(10)]);var inst_14975 = (state_15014[(8)]);var inst_14978 = (state_15014[(9)]);var inst_14982__$1 = f.call(null,inst_14978);var inst_14983 = cljs.core._EQ_.call(null,inst_14982__$1,inst_14975);var inst_14984 = cljs.core.keyword_identical_QMARK_.call(null,inst_14975,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14985 = (inst_14983) || (inst_14984);var state_15014__$1 = (function (){var statearr_15028 = state_15014;(statearr_15028[(10)] = inst_14982__$1);
return statearr_15028;
})();if(cljs.core.truth_(inst_14985))
{var statearr_15029_15054 = state_15014__$1;(statearr_15029_15054[(1)] = (8));
} else
{var statearr_15030_15055 = state_15014__$1;(statearr_15030_15055[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (14)))
{var inst_15007 = (state_15014[(2)]);var inst_15008 = cljs.core.async.close_BANG_.call(null,out);var state_15014__$1 = (function (){var statearr_15032 = state_15014;(statearr_15032[(13)] = inst_15007);
return statearr_15032;
})();var statearr_15033_15056 = state_15014__$1;(statearr_15033_15056[(2)] = inst_15008);
(statearr_15033_15056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (10)))
{var inst_14997 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15034_15057 = state_15014__$1;(statearr_15034_15057[(2)] = inst_14997);
(statearr_15034_15057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (8)))
{var inst_14982 = (state_15014[(10)]);var inst_14974 = (state_15014[(7)]);var inst_14978 = (state_15014[(9)]);var inst_14987 = inst_14974.push(inst_14978);var tmp15031 = inst_14974;var inst_14974__$1 = tmp15031;var inst_14975 = inst_14982;var state_15014__$1 = (function (){var statearr_15035 = state_15014;(statearr_15035[(14)] = inst_14987);
(statearr_15035[(7)] = inst_14974__$1);
(statearr_15035[(8)] = inst_14975);
return statearr_15035;
})();var statearr_15036_15058 = state_15014__$1;(statearr_15036_15058[(2)] = null);
(statearr_15036_15058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6391__auto___15044,out))
;return ((function (switch__6376__auto__,c__6391__auto___15044,out){
return (function() {
var state_machine__6377__auto__ = null;
var state_machine__6377__auto____0 = (function (){var statearr_15040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15040[(0)] = state_machine__6377__auto__);
(statearr_15040[(1)] = (1));
return statearr_15040;
});
var state_machine__6377__auto____1 = (function (state_15014){while(true){
var ret_value__6378__auto__ = (function (){try{while(true){
var result__6379__auto__ = switch__6376__auto__.call(null,state_15014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6379__auto__;
}
break;
}
}catch (e15041){if((e15041 instanceof Object))
{var ex__6380__auto__ = e15041;var statearr_15042_15059 = state_15014;(statearr_15042_15059[(5)] = ex__6380__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15060 = state_15014;
state_15014 = G__15060;
continue;
}
} else
{return ret_value__6378__auto__;
}
break;
}
});
state_machine__6377__auto__ = function(state_15014){
switch(arguments.length){
case 0:
return state_machine__6377__auto____0.call(this);
case 1:
return state_machine__6377__auto____1.call(this,state_15014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6377__auto____0;
state_machine__6377__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6377__auto____1;
return state_machine__6377__auto__;
})()
;})(switch__6376__auto__,c__6391__auto___15044,out))
})();var state__6393__auto__ = (function (){var statearr_15043 = f__6392__auto__.call(null);(statearr_15043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___15044);
return statearr_15043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___15044,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map