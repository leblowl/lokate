// Compiled by ClojureScript 0.0-2371
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27814 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27814 = (function (f,fn_handler,meta27815){
this.f = f;
this.fn_handler = fn_handler;
this.meta27815 = meta27815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27814.cljs$lang$type = true;
cljs.core.async.t27814.cljs$lang$ctorStr = "cljs.core.async/t27814";
cljs.core.async.t27814.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27814");
});
cljs.core.async.t27814.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27816){var self__ = this;
var _27816__$1 = this;return self__.meta27815;
});
cljs.core.async.t27814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27816,meta27815__$1){var self__ = this;
var _27816__$1 = this;return (new cljs.core.async.t27814(self__.f,self__.fn_handler,meta27815__$1));
});
cljs.core.async.__GT_t27814 = (function __GT_t27814(f__$1,fn_handler__$1,meta27815){return (new cljs.core.async.t27814(f__$1,fn_handler__$1,meta27815));
});
}
return (new cljs.core.async.t27814(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27818 = buff;if(G__27818)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__27818.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27818.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27818);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27818);
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
{var val_27819 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27819);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27819,ret){
return (function (){return fn1.call(null,val_27819);
});})(val_27819,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___27820 = n;var x_27821 = (0);while(true){
if((x_27821 < n__13416__auto___27820))
{(a[x_27821] = (0));
{
var G__27822 = (x_27821 + (1));
x_27821 = G__27822;
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
var G__27823 = (i + (1));
i = G__27823;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27827 = (function (flag,alt_flag,meta27828){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27828 = meta27828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27827.cljs$lang$type = true;
cljs.core.async.t27827.cljs$lang$ctorStr = "cljs.core.async/t27827";
cljs.core.async.t27827.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27827");
});})(flag))
;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27829){var self__ = this;
var _27829__$1 = this;return self__.meta27828;
});})(flag))
;
cljs.core.async.t27827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27829,meta27828__$1){var self__ = this;
var _27829__$1 = this;return (new cljs.core.async.t27827(self__.flag,self__.alt_flag,meta27828__$1));
});})(flag))
;
cljs.core.async.__GT_t27827 = ((function (flag){
return (function __GT_t27827(flag__$1,alt_flag__$1,meta27828){return (new cljs.core.async.t27827(flag__$1,alt_flag__$1,meta27828));
});})(flag))
;
}
return (new cljs.core.async.t27827(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27833 = (function (cb,flag,alt_handler,meta27834){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27834 = meta27834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27833.cljs$lang$type = true;
cljs.core.async.t27833.cljs$lang$ctorStr = "cljs.core.async/t27833";
cljs.core.async.t27833.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27833");
});
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27835){var self__ = this;
var _27835__$1 = this;return self__.meta27834;
});
cljs.core.async.t27833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27835,meta27834__$1){var self__ = this;
var _27835__$1 = this;return (new cljs.core.async.t27833(self__.cb,self__.flag,self__.alt_handler,meta27834__$1));
});
cljs.core.async.__GT_t27833 = (function __GT_t27833(cb__$1,flag__$1,alt_handler__$1,meta27834){return (new cljs.core.async.t27833(cb__$1,flag__$1,alt_handler__$1,meta27834));
});
}
return (new cljs.core.async.t27833(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27836_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27837_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12546__auto__ = wport;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__27838 = (i + (1));
i = G__27838;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12546__auto__ = ret;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__12534__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12534__auto__;
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
var alts_BANG___delegate = function (ports,p__27839){var map__27841 = p__27839;var map__27841__$1 = ((cljs.core.seq_QMARK_.call(null,map__27841))?cljs.core.apply.call(null,cljs.core.hash_map,map__27841):map__27841);var opts = map__27841__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27839 = null;if (arguments.length > 1) {
  p__27839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27839);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27842){
var ports = cljs.core.first(arglist__27842);
var p__27839 = cljs.core.rest(arglist__27842);
return alts_BANG___delegate(ports,p__27839);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___27937 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___27937){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___27937){
return (function (state_27913){var state_val_27914 = (state_27913[(1)]);if((state_val_27914 === (7)))
{var inst_27909 = (state_27913[(2)]);var state_27913__$1 = state_27913;var statearr_27915_27938 = state_27913__$1;(statearr_27915_27938[(2)] = inst_27909);
(statearr_27915_27938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (1)))
{var state_27913__$1 = state_27913;var statearr_27916_27939 = state_27913__$1;(statearr_27916_27939[(2)] = null);
(statearr_27916_27939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (4)))
{var inst_27892 = (state_27913[(7)]);var inst_27892__$1 = (state_27913[(2)]);var inst_27893 = (inst_27892__$1 == null);var state_27913__$1 = (function (){var statearr_27917 = state_27913;(statearr_27917[(7)] = inst_27892__$1);
return statearr_27917;
})();if(cljs.core.truth_(inst_27893))
{var statearr_27918_27940 = state_27913__$1;(statearr_27918_27940[(1)] = (5));
} else
{var statearr_27919_27941 = state_27913__$1;(statearr_27919_27941[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (13)))
{var state_27913__$1 = state_27913;var statearr_27920_27942 = state_27913__$1;(statearr_27920_27942[(2)] = null);
(statearr_27920_27942[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (6)))
{var inst_27892 = (state_27913[(7)]);var state_27913__$1 = state_27913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27913__$1,(11),to,inst_27892);
} else
{if((state_val_27914 === (3)))
{var inst_27911 = (state_27913[(2)]);var state_27913__$1 = state_27913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else
{if((state_val_27914 === (12)))
{var state_27913__$1 = state_27913;var statearr_27921_27943 = state_27913__$1;(statearr_27921_27943[(2)] = null);
(statearr_27921_27943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (2)))
{var state_27913__$1 = state_27913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(4),from);
} else
{if((state_val_27914 === (11)))
{var inst_27902 = (state_27913[(2)]);var state_27913__$1 = state_27913;if(cljs.core.truth_(inst_27902))
{var statearr_27922_27944 = state_27913__$1;(statearr_27922_27944[(1)] = (12));
} else
{var statearr_27923_27945 = state_27913__$1;(statearr_27923_27945[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (9)))
{var state_27913__$1 = state_27913;var statearr_27924_27946 = state_27913__$1;(statearr_27924_27946[(2)] = null);
(statearr_27924_27946[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (5)))
{var state_27913__$1 = state_27913;if(cljs.core.truth_(close_QMARK_))
{var statearr_27925_27947 = state_27913__$1;(statearr_27925_27947[(1)] = (8));
} else
{var statearr_27926_27948 = state_27913__$1;(statearr_27926_27948[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (14)))
{var inst_27907 = (state_27913[(2)]);var state_27913__$1 = state_27913;var statearr_27927_27949 = state_27913__$1;(statearr_27927_27949[(2)] = inst_27907);
(statearr_27927_27949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (10)))
{var inst_27899 = (state_27913[(2)]);var state_27913__$1 = state_27913;var statearr_27928_27950 = state_27913__$1;(statearr_27928_27950[(2)] = inst_27899);
(statearr_27928_27950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (8)))
{var inst_27896 = cljs.core.async.close_BANG_.call(null,to);var state_27913__$1 = state_27913;var statearr_27929_27951 = state_27913__$1;(statearr_27929_27951[(2)] = inst_27896);
(statearr_27929_27951[(1)] = (10));
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
});})(c__15989__auto___27937))
;return ((function (switch__15974__auto__,c__15989__auto___27937){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_27933 = [null,null,null,null,null,null,null,null];(statearr_27933[(0)] = state_machine__15975__auto__);
(statearr_27933[(1)] = (1));
return statearr_27933;
});
var state_machine__15975__auto____1 = (function (state_27913){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27913);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e27934){if((e27934 instanceof Object))
{var ex__15978__auto__ = e27934;var statearr_27935_27952 = state_27913;(statearr_27935_27952[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27953 = state_27913;
state_27913 = G__27953;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___27937))
})();var state__15991__auto__ = (function (){var statearr_27936 = f__15990__auto__.call(null);(statearr_27936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___27937);
return statearr_27936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___27937))
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
return (function (p__28137){var vec__28138 = p__28137;var v = cljs.core.nth.call(null,vec__28138,(0),null);var p = cljs.core.nth.call(null,vec__28138,(1),null);var job = vec__28138;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___28320 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results){
return (function (state_28143){var state_val_28144 = (state_28143[(1)]);if((state_val_28144 === (2)))
{var inst_28140 = (state_28143[(2)]);var inst_28141 = cljs.core.async.close_BANG_.call(null,res);var state_28143__$1 = (function (){var statearr_28145 = state_28143;(statearr_28145[(7)] = inst_28140);
return statearr_28145;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28143__$1,inst_28141);
} else
{if((state_val_28144 === (1)))
{var state_28143__$1 = state_28143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28143__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28149 = [null,null,null,null,null,null,null,null];(statearr_28149[(0)] = state_machine__15975__auto__);
(statearr_28149[(1)] = (1));
return statearr_28149;
});
var state_machine__15975__auto____1 = (function (state_28143){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28143);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object))
{var ex__15978__auto__ = e28150;var statearr_28151_28321 = state_28143;(statearr_28151_28321[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28322 = state_28143;
state_28143 = G__28322;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28143){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_28152 = f__15990__auto__.call(null);(statearr_28152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28320);
return statearr_28152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28320,res,vec__28138,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__28153){var vec__28154 = p__28153;var v = cljs.core.nth.call(null,vec__28154,(0),null);var p = cljs.core.nth.call(null,vec__28154,(1),null);var job = vec__28154;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___28323 = n;var __28324 = (0);while(true){
if((__28324 < n__13416__auto___28323))
{var G__28155_28325 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__28155_28325) {
case "async":
var c__15989__auto___28327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28324,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__28324,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function (state_28168){var state_val_28169 = (state_28168[(1)]);if((state_val_28169 === (7)))
{var inst_28164 = (state_28168[(2)]);var state_28168__$1 = state_28168;var statearr_28170_28328 = state_28168__$1;(statearr_28170_28328[(2)] = inst_28164);
(statearr_28170_28328[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28169 === (6)))
{var state_28168__$1 = state_28168;var statearr_28171_28329 = state_28168__$1;(statearr_28171_28329[(2)] = null);
(statearr_28171_28329[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28169 === (5)))
{var state_28168__$1 = state_28168;var statearr_28172_28330 = state_28168__$1;(statearr_28172_28330[(2)] = null);
(statearr_28172_28330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28169 === (4)))
{var inst_28158 = (state_28168[(2)]);var inst_28159 = async.call(null,inst_28158);var state_28168__$1 = state_28168;if(cljs.core.truth_(inst_28159))
{var statearr_28173_28331 = state_28168__$1;(statearr_28173_28331[(1)] = (5));
} else
{var statearr_28174_28332 = state_28168__$1;(statearr_28174_28332[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28169 === (3)))
{var inst_28166 = (state_28168[(2)]);var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28168__$1,inst_28166);
} else
{if((state_val_28169 === (2)))
{var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28168__$1,(4),jobs);
} else
{if((state_val_28169 === (1)))
{var state_28168__$1 = state_28168;var statearr_28175_28333 = state_28168__$1;(statearr_28175_28333[(2)] = null);
(statearr_28175_28333[(1)] = (2));
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
});})(__28324,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
;return ((function (__28324,switch__15974__auto__,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28179 = [null,null,null,null,null,null,null];(statearr_28179[(0)] = state_machine__15975__auto__);
(statearr_28179[(1)] = (1));
return statearr_28179;
});
var state_machine__15975__auto____1 = (function (state_28168){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28168);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object))
{var ex__15978__auto__ = e28180;var statearr_28181_28334 = state_28168;(statearr_28181_28334[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28180;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28335 = state_28168;
state_28168 = G__28335;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28168){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__28324,switch__15974__auto__,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28182 = f__15990__auto__.call(null);(statearr_28182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28327);
return statearr_28182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__28324,c__15989__auto___28327,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___28336 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28324,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__28324,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function (state_28195){var state_val_28196 = (state_28195[(1)]);if((state_val_28196 === (7)))
{var inst_28191 = (state_28195[(2)]);var state_28195__$1 = state_28195;var statearr_28197_28337 = state_28195__$1;(statearr_28197_28337[(2)] = inst_28191);
(statearr_28197_28337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28196 === (6)))
{var state_28195__$1 = state_28195;var statearr_28198_28338 = state_28195__$1;(statearr_28198_28338[(2)] = null);
(statearr_28198_28338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28196 === (5)))
{var state_28195__$1 = state_28195;var statearr_28199_28339 = state_28195__$1;(statearr_28199_28339[(2)] = null);
(statearr_28199_28339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28196 === (4)))
{var inst_28185 = (state_28195[(2)]);var inst_28186 = process.call(null,inst_28185);var state_28195__$1 = state_28195;if(cljs.core.truth_(inst_28186))
{var statearr_28200_28340 = state_28195__$1;(statearr_28200_28340[(1)] = (5));
} else
{var statearr_28201_28341 = state_28195__$1;(statearr_28201_28341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28196 === (3)))
{var inst_28193 = (state_28195[(2)]);var state_28195__$1 = state_28195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28195__$1,inst_28193);
} else
{if((state_val_28196 === (2)))
{var state_28195__$1 = state_28195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28195__$1,(4),jobs);
} else
{if((state_val_28196 === (1)))
{var state_28195__$1 = state_28195;var statearr_28202_28342 = state_28195__$1;(statearr_28202_28342[(2)] = null);
(statearr_28202_28342[(1)] = (2));
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
});})(__28324,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
;return ((function (__28324,switch__15974__auto__,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28206 = [null,null,null,null,null,null,null];(statearr_28206[(0)] = state_machine__15975__auto__);
(statearr_28206[(1)] = (1));
return statearr_28206;
});
var state_machine__15975__auto____1 = (function (state_28195){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28195);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28207){if((e28207 instanceof Object))
{var ex__15978__auto__ = e28207;var statearr_28208_28343 = state_28195;(statearr_28208_28343[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28207;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28344 = state_28195;
state_28195 = G__28344;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28195){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__28324,switch__15974__auto__,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28209 = f__15990__auto__.call(null);(statearr_28209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28336);
return statearr_28209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__28324,c__15989__auto___28336,G__28155_28325,n__13416__auto___28323,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__28345 = (__28324 + (1));
__28324 = G__28345;
continue;
}
} else
{}
break;
}
var c__15989__auto___28346 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28346,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28346,jobs,results,process,async){
return (function (state_28231){var state_val_28232 = (state_28231[(1)]);if((state_val_28232 === (9)))
{var inst_28224 = (state_28231[(2)]);var state_28231__$1 = (function (){var statearr_28233 = state_28231;(statearr_28233[(7)] = inst_28224);
return statearr_28233;
})();var statearr_28234_28347 = state_28231__$1;(statearr_28234_28347[(2)] = null);
(statearr_28234_28347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (8)))
{var inst_28217 = (state_28231[(8)]);var inst_28222 = (state_28231[(2)]);var state_28231__$1 = (function (){var statearr_28235 = state_28231;(statearr_28235[(9)] = inst_28222);
return statearr_28235;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(9),results,inst_28217);
} else
{if((state_val_28232 === (7)))
{var inst_28227 = (state_28231[(2)]);var state_28231__$1 = state_28231;var statearr_28236_28348 = state_28231__$1;(statearr_28236_28348[(2)] = inst_28227);
(statearr_28236_28348[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (6)))
{var inst_28212 = (state_28231[(10)]);var inst_28217 = (state_28231[(8)]);var inst_28217__$1 = cljs.core.async.chan.call(null,(1));var inst_28218 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28219 = [inst_28212,inst_28217__$1];var inst_28220 = (new cljs.core.PersistentVector(null,2,(5),inst_28218,inst_28219,null));var state_28231__$1 = (function (){var statearr_28237 = state_28231;(statearr_28237[(8)] = inst_28217__$1);
return statearr_28237;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(8),jobs,inst_28220);
} else
{if((state_val_28232 === (5)))
{var inst_28215 = cljs.core.async.close_BANG_.call(null,jobs);var state_28231__$1 = state_28231;var statearr_28238_28349 = state_28231__$1;(statearr_28238_28349[(2)] = inst_28215);
(statearr_28238_28349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (4)))
{var inst_28212 = (state_28231[(10)]);var inst_28212__$1 = (state_28231[(2)]);var inst_28213 = (inst_28212__$1 == null);var state_28231__$1 = (function (){var statearr_28239 = state_28231;(statearr_28239[(10)] = inst_28212__$1);
return statearr_28239;
})();if(cljs.core.truth_(inst_28213))
{var statearr_28240_28350 = state_28231__$1;(statearr_28240_28350[(1)] = (5));
} else
{var statearr_28241_28351 = state_28231__$1;(statearr_28241_28351[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (3)))
{var inst_28229 = (state_28231[(2)]);var state_28231__$1 = state_28231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else
{if((state_val_28232 === (2)))
{var state_28231__$1 = state_28231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),from);
} else
{if((state_val_28232 === (1)))
{var state_28231__$1 = state_28231;var statearr_28242_28352 = state_28231__$1;(statearr_28242_28352[(2)] = null);
(statearr_28242_28352[(1)] = (2));
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
});})(c__15989__auto___28346,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___28346,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28246 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28246[(0)] = state_machine__15975__auto__);
(statearr_28246[(1)] = (1));
return statearr_28246;
});
var state_machine__15975__auto____1 = (function (state_28231){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28231);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28247){if((e28247 instanceof Object))
{var ex__15978__auto__ = e28247;var statearr_28248_28353 = state_28231;(statearr_28248_28353[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28247;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28354 = state_28231;
state_28231 = G__28354;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28346,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28249 = f__15990__auto__.call(null);(statearr_28249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28346);
return statearr_28249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28346,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_28287){var state_val_28288 = (state_28287[(1)]);if((state_val_28288 === (7)))
{var inst_28283 = (state_28287[(2)]);var state_28287__$1 = state_28287;var statearr_28289_28355 = state_28287__$1;(statearr_28289_28355[(2)] = inst_28283);
(statearr_28289_28355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (20)))
{var state_28287__$1 = state_28287;var statearr_28290_28356 = state_28287__$1;(statearr_28290_28356[(2)] = null);
(statearr_28290_28356[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (1)))
{var state_28287__$1 = state_28287;var statearr_28291_28357 = state_28287__$1;(statearr_28291_28357[(2)] = null);
(statearr_28291_28357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (4)))
{var inst_28252 = (state_28287[(7)]);var inst_28252__$1 = (state_28287[(2)]);var inst_28253 = (inst_28252__$1 == null);var state_28287__$1 = (function (){var statearr_28292 = state_28287;(statearr_28292[(7)] = inst_28252__$1);
return statearr_28292;
})();if(cljs.core.truth_(inst_28253))
{var statearr_28293_28358 = state_28287__$1;(statearr_28293_28358[(1)] = (5));
} else
{var statearr_28294_28359 = state_28287__$1;(statearr_28294_28359[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (15)))
{var inst_28265 = (state_28287[(8)]);var state_28287__$1 = state_28287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28287__$1,(18),to,inst_28265);
} else
{if((state_val_28288 === (21)))
{var inst_28278 = (state_28287[(2)]);var state_28287__$1 = state_28287;var statearr_28295_28360 = state_28287__$1;(statearr_28295_28360[(2)] = inst_28278);
(statearr_28295_28360[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (13)))
{var inst_28280 = (state_28287[(2)]);var state_28287__$1 = (function (){var statearr_28296 = state_28287;(statearr_28296[(9)] = inst_28280);
return statearr_28296;
})();var statearr_28297_28361 = state_28287__$1;(statearr_28297_28361[(2)] = null);
(statearr_28297_28361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (6)))
{var inst_28252 = (state_28287[(7)]);var state_28287__$1 = state_28287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28287__$1,(11),inst_28252);
} else
{if((state_val_28288 === (17)))
{var inst_28273 = (state_28287[(2)]);var state_28287__$1 = state_28287;if(cljs.core.truth_(inst_28273))
{var statearr_28298_28362 = state_28287__$1;(statearr_28298_28362[(1)] = (19));
} else
{var statearr_28299_28363 = state_28287__$1;(statearr_28299_28363[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (3)))
{var inst_28285 = (state_28287[(2)]);var state_28287__$1 = state_28287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28287__$1,inst_28285);
} else
{if((state_val_28288 === (12)))
{var inst_28262 = (state_28287[(10)]);var state_28287__$1 = state_28287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28287__$1,(14),inst_28262);
} else
{if((state_val_28288 === (2)))
{var state_28287__$1 = state_28287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28287__$1,(4),results);
} else
{if((state_val_28288 === (19)))
{var state_28287__$1 = state_28287;var statearr_28300_28364 = state_28287__$1;(statearr_28300_28364[(2)] = null);
(statearr_28300_28364[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (11)))
{var inst_28262 = (state_28287[(2)]);var state_28287__$1 = (function (){var statearr_28301 = state_28287;(statearr_28301[(10)] = inst_28262);
return statearr_28301;
})();var statearr_28302_28365 = state_28287__$1;(statearr_28302_28365[(2)] = null);
(statearr_28302_28365[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (9)))
{var state_28287__$1 = state_28287;var statearr_28303_28366 = state_28287__$1;(statearr_28303_28366[(2)] = null);
(statearr_28303_28366[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (5)))
{var state_28287__$1 = state_28287;if(cljs.core.truth_(close_QMARK_))
{var statearr_28304_28367 = state_28287__$1;(statearr_28304_28367[(1)] = (8));
} else
{var statearr_28305_28368 = state_28287__$1;(statearr_28305_28368[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (14)))
{var inst_28267 = (state_28287[(11)]);var inst_28265 = (state_28287[(8)]);var inst_28265__$1 = (state_28287[(2)]);var inst_28266 = (inst_28265__$1 == null);var inst_28267__$1 = cljs.core.not.call(null,inst_28266);var state_28287__$1 = (function (){var statearr_28306 = state_28287;(statearr_28306[(11)] = inst_28267__$1);
(statearr_28306[(8)] = inst_28265__$1);
return statearr_28306;
})();if(inst_28267__$1)
{var statearr_28307_28369 = state_28287__$1;(statearr_28307_28369[(1)] = (15));
} else
{var statearr_28308_28370 = state_28287__$1;(statearr_28308_28370[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (16)))
{var inst_28267 = (state_28287[(11)]);var state_28287__$1 = state_28287;var statearr_28309_28371 = state_28287__$1;(statearr_28309_28371[(2)] = inst_28267);
(statearr_28309_28371[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (10)))
{var inst_28259 = (state_28287[(2)]);var state_28287__$1 = state_28287;var statearr_28310_28372 = state_28287__$1;(statearr_28310_28372[(2)] = inst_28259);
(statearr_28310_28372[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (18)))
{var inst_28270 = (state_28287[(2)]);var state_28287__$1 = state_28287;var statearr_28311_28373 = state_28287__$1;(statearr_28311_28373[(2)] = inst_28270);
(statearr_28311_28373[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28288 === (8)))
{var inst_28256 = cljs.core.async.close_BANG_.call(null,to);var state_28287__$1 = state_28287;var statearr_28312_28374 = state_28287__$1;(statearr_28312_28374[(2)] = inst_28256);
(statearr_28312_28374[(1)] = (10));
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
});})(c__15989__auto__,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto__,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28316 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28316[(0)] = state_machine__15975__auto__);
(statearr_28316[(1)] = (1));
return statearr_28316;
});
var state_machine__15975__auto____1 = (function (state_28287){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28287);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28317){if((e28317 instanceof Object))
{var ex__15978__auto__ = e28317;var statearr_28318_28375 = state_28287;(statearr_28318_28375[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28317;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28376 = state_28287;
state_28287 = G__28376;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28287){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28319 = f__15990__auto__.call(null);(statearr_28319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,jobs,results,process,async))
);
return c__15989__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___28477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28477,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28477,tc,fc){
return (function (state_28452){var state_val_28453 = (state_28452[(1)]);if((state_val_28453 === (7)))
{var inst_28448 = (state_28452[(2)]);var state_28452__$1 = state_28452;var statearr_28454_28478 = state_28452__$1;(statearr_28454_28478[(2)] = inst_28448);
(statearr_28454_28478[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (1)))
{var state_28452__$1 = state_28452;var statearr_28455_28479 = state_28452__$1;(statearr_28455_28479[(2)] = null);
(statearr_28455_28479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (4)))
{var inst_28429 = (state_28452[(7)]);var inst_28429__$1 = (state_28452[(2)]);var inst_28430 = (inst_28429__$1 == null);var state_28452__$1 = (function (){var statearr_28456 = state_28452;(statearr_28456[(7)] = inst_28429__$1);
return statearr_28456;
})();if(cljs.core.truth_(inst_28430))
{var statearr_28457_28480 = state_28452__$1;(statearr_28457_28480[(1)] = (5));
} else
{var statearr_28458_28481 = state_28452__$1;(statearr_28458_28481[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (13)))
{var state_28452__$1 = state_28452;var statearr_28459_28482 = state_28452__$1;(statearr_28459_28482[(2)] = null);
(statearr_28459_28482[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (6)))
{var inst_28429 = (state_28452[(7)]);var inst_28435 = p.call(null,inst_28429);var state_28452__$1 = state_28452;if(cljs.core.truth_(inst_28435))
{var statearr_28460_28483 = state_28452__$1;(statearr_28460_28483[(1)] = (9));
} else
{var statearr_28461_28484 = state_28452__$1;(statearr_28461_28484[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (3)))
{var inst_28450 = (state_28452[(2)]);var state_28452__$1 = state_28452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28452__$1,inst_28450);
} else
{if((state_val_28453 === (12)))
{var state_28452__$1 = state_28452;var statearr_28462_28485 = state_28452__$1;(statearr_28462_28485[(2)] = null);
(statearr_28462_28485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (2)))
{var state_28452__$1 = state_28452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28452__$1,(4),ch);
} else
{if((state_val_28453 === (11)))
{var inst_28429 = (state_28452[(7)]);var inst_28439 = (state_28452[(2)]);var state_28452__$1 = state_28452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28452__$1,(8),inst_28439,inst_28429);
} else
{if((state_val_28453 === (9)))
{var state_28452__$1 = state_28452;var statearr_28463_28486 = state_28452__$1;(statearr_28463_28486[(2)] = tc);
(statearr_28463_28486[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (5)))
{var inst_28432 = cljs.core.async.close_BANG_.call(null,tc);var inst_28433 = cljs.core.async.close_BANG_.call(null,fc);var state_28452__$1 = (function (){var statearr_28464 = state_28452;(statearr_28464[(8)] = inst_28432);
return statearr_28464;
})();var statearr_28465_28487 = state_28452__$1;(statearr_28465_28487[(2)] = inst_28433);
(statearr_28465_28487[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (14)))
{var inst_28446 = (state_28452[(2)]);var state_28452__$1 = state_28452;var statearr_28466_28488 = state_28452__$1;(statearr_28466_28488[(2)] = inst_28446);
(statearr_28466_28488[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (10)))
{var state_28452__$1 = state_28452;var statearr_28467_28489 = state_28452__$1;(statearr_28467_28489[(2)] = fc);
(statearr_28467_28489[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28453 === (8)))
{var inst_28441 = (state_28452[(2)]);var state_28452__$1 = state_28452;if(cljs.core.truth_(inst_28441))
{var statearr_28468_28490 = state_28452__$1;(statearr_28468_28490[(1)] = (12));
} else
{var statearr_28469_28491 = state_28452__$1;(statearr_28469_28491[(1)] = (13));
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
});})(c__15989__auto___28477,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___28477,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28473 = [null,null,null,null,null,null,null,null,null];(statearr_28473[(0)] = state_machine__15975__auto__);
(statearr_28473[(1)] = (1));
return statearr_28473;
});
var state_machine__15975__auto____1 = (function (state_28452){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28452);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object))
{var ex__15978__auto__ = e28474;var statearr_28475_28492 = state_28452;(statearr_28475_28492[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28474;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28493 = state_28452;
state_28452 = G__28493;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28452){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28477,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_28476 = f__15990__auto__.call(null);(statearr_28476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28477);
return statearr_28476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28477,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_28540){var state_val_28541 = (state_28540[(1)]);if((state_val_28541 === (7)))
{var inst_28536 = (state_28540[(2)]);var state_28540__$1 = state_28540;var statearr_28542_28558 = state_28540__$1;(statearr_28542_28558[(2)] = inst_28536);
(statearr_28542_28558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28541 === (6)))
{var inst_28529 = (state_28540[(7)]);var inst_28526 = (state_28540[(8)]);var inst_28533 = f.call(null,inst_28526,inst_28529);var inst_28526__$1 = inst_28533;var state_28540__$1 = (function (){var statearr_28543 = state_28540;(statearr_28543[(8)] = inst_28526__$1);
return statearr_28543;
})();var statearr_28544_28559 = state_28540__$1;(statearr_28544_28559[(2)] = null);
(statearr_28544_28559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28541 === (5)))
{var inst_28526 = (state_28540[(8)]);var state_28540__$1 = state_28540;var statearr_28545_28560 = state_28540__$1;(statearr_28545_28560[(2)] = inst_28526);
(statearr_28545_28560[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28541 === (4)))
{var inst_28529 = (state_28540[(7)]);var inst_28529__$1 = (state_28540[(2)]);var inst_28530 = (inst_28529__$1 == null);var state_28540__$1 = (function (){var statearr_28546 = state_28540;(statearr_28546[(7)] = inst_28529__$1);
return statearr_28546;
})();if(cljs.core.truth_(inst_28530))
{var statearr_28547_28561 = state_28540__$1;(statearr_28547_28561[(1)] = (5));
} else
{var statearr_28548_28562 = state_28540__$1;(statearr_28548_28562[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28541 === (3)))
{var inst_28538 = (state_28540[(2)]);var state_28540__$1 = state_28540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else
{if((state_val_28541 === (2)))
{var state_28540__$1 = state_28540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28540__$1,(4),ch);
} else
{if((state_val_28541 === (1)))
{var inst_28526 = init;var state_28540__$1 = (function (){var statearr_28549 = state_28540;(statearr_28549[(8)] = inst_28526);
return statearr_28549;
})();var statearr_28550_28563 = state_28540__$1;(statearr_28550_28563[(2)] = null);
(statearr_28550_28563[(1)] = (2));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28554 = [null,null,null,null,null,null,null,null,null];(statearr_28554[(0)] = state_machine__15975__auto__);
(statearr_28554[(1)] = (1));
return statearr_28554;
});
var state_machine__15975__auto____1 = (function (state_28540){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28540);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28555){if((e28555 instanceof Object))
{var ex__15978__auto__ = e28555;var statearr_28556_28564 = state_28540;(statearr_28556_28564[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28565 = state_28540;
state_28540 = G__28565;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_28557 = f__15990__auto__.call(null);(statearr_28557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_28639){var state_val_28640 = (state_28639[(1)]);if((state_val_28640 === (7)))
{var inst_28621 = (state_28639[(2)]);var state_28639__$1 = state_28639;var statearr_28641_28664 = state_28639__$1;(statearr_28641_28664[(2)] = inst_28621);
(statearr_28641_28664[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (1)))
{var inst_28615 = cljs.core.seq.call(null,coll);var inst_28616 = inst_28615;var state_28639__$1 = (function (){var statearr_28642 = state_28639;(statearr_28642[(7)] = inst_28616);
return statearr_28642;
})();var statearr_28643_28665 = state_28639__$1;(statearr_28643_28665[(2)] = null);
(statearr_28643_28665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (4)))
{var inst_28616 = (state_28639[(7)]);var inst_28619 = cljs.core.first.call(null,inst_28616);var state_28639__$1 = state_28639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28639__$1,(7),ch,inst_28619);
} else
{if((state_val_28640 === (13)))
{var inst_28633 = (state_28639[(2)]);var state_28639__$1 = state_28639;var statearr_28644_28666 = state_28639__$1;(statearr_28644_28666[(2)] = inst_28633);
(statearr_28644_28666[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (6)))
{var inst_28624 = (state_28639[(2)]);var state_28639__$1 = state_28639;if(cljs.core.truth_(inst_28624))
{var statearr_28645_28667 = state_28639__$1;(statearr_28645_28667[(1)] = (8));
} else
{var statearr_28646_28668 = state_28639__$1;(statearr_28646_28668[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (3)))
{var inst_28637 = (state_28639[(2)]);var state_28639__$1 = state_28639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28639__$1,inst_28637);
} else
{if((state_val_28640 === (12)))
{var state_28639__$1 = state_28639;var statearr_28647_28669 = state_28639__$1;(statearr_28647_28669[(2)] = null);
(statearr_28647_28669[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (2)))
{var inst_28616 = (state_28639[(7)]);var state_28639__$1 = state_28639;if(cljs.core.truth_(inst_28616))
{var statearr_28648_28670 = state_28639__$1;(statearr_28648_28670[(1)] = (4));
} else
{var statearr_28649_28671 = state_28639__$1;(statearr_28649_28671[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (11)))
{var inst_28630 = cljs.core.async.close_BANG_.call(null,ch);var state_28639__$1 = state_28639;var statearr_28650_28672 = state_28639__$1;(statearr_28650_28672[(2)] = inst_28630);
(statearr_28650_28672[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (9)))
{var state_28639__$1 = state_28639;if(cljs.core.truth_(close_QMARK_))
{var statearr_28651_28673 = state_28639__$1;(statearr_28651_28673[(1)] = (11));
} else
{var statearr_28652_28674 = state_28639__$1;(statearr_28652_28674[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (5)))
{var inst_28616 = (state_28639[(7)]);var state_28639__$1 = state_28639;var statearr_28653_28675 = state_28639__$1;(statearr_28653_28675[(2)] = inst_28616);
(statearr_28653_28675[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (10)))
{var inst_28635 = (state_28639[(2)]);var state_28639__$1 = state_28639;var statearr_28654_28676 = state_28639__$1;(statearr_28654_28676[(2)] = inst_28635);
(statearr_28654_28676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (8)))
{var inst_28616 = (state_28639[(7)]);var inst_28626 = cljs.core.next.call(null,inst_28616);var inst_28616__$1 = inst_28626;var state_28639__$1 = (function (){var statearr_28655 = state_28639;(statearr_28655[(7)] = inst_28616__$1);
return statearr_28655;
})();var statearr_28656_28677 = state_28639__$1;(statearr_28656_28677[(2)] = null);
(statearr_28656_28677[(1)] = (2));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28660 = [null,null,null,null,null,null,null,null];(statearr_28660[(0)] = state_machine__15975__auto__);
(statearr_28660[(1)] = (1));
return statearr_28660;
});
var state_machine__15975__auto____1 = (function (state_28639){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28639);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object))
{var ex__15978__auto__ = e28661;var statearr_28662_28678 = state_28639;(statearr_28662_28678[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28679 = state_28639;
state_28639 = G__28679;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28639){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_28663 = f__15990__auto__.call(null);(statearr_28663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
cljs.core.async.Mux = (function (){var obj28681 = {};return obj28681;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12534__auto__ = _;if(and__12534__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13183__auto__ = (((_ == null))?null:_);return (function (){var or__12546__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj28683 = {};return obj28683;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28905 = (function (cs,ch,mult,meta28906){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28905.cljs$lang$type = true;
cljs.core.async.t28905.cljs$lang$ctorStr = "cljs.core.async/t28905";
cljs.core.async.t28905.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28905");
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28905.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28907){var self__ = this;
var _28907__$1 = this;return self__.meta28906;
});})(cs))
;
cljs.core.async.t28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28907,meta28906__$1){var self__ = this;
var _28907__$1 = this;return (new cljs.core.async.t28905(self__.cs,self__.ch,self__.mult,meta28906__$1));
});})(cs))
;
cljs.core.async.__GT_t28905 = ((function (cs){
return (function __GT_t28905(cs__$1,ch__$1,mult__$1,meta28906){return (new cljs.core.async.t28905(cs__$1,ch__$1,mult__$1,meta28906));
});})(cs))
;
}
return (new cljs.core.async.t28905(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___29126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29126,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29126,cs,m,dchan,dctr,done){
return (function (state_29038){var state_val_29039 = (state_29038[(1)]);if((state_val_29039 === (7)))
{var inst_29034 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29040_29127 = state_29038__$1;(statearr_29040_29127[(2)] = inst_29034);
(statearr_29040_29127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (20)))
{var inst_28939 = (state_29038[(7)]);var inst_28949 = cljs.core.first.call(null,inst_28939);var inst_28950 = cljs.core.nth.call(null,inst_28949,(0),null);var inst_28951 = cljs.core.nth.call(null,inst_28949,(1),null);var state_29038__$1 = (function (){var statearr_29041 = state_29038;(statearr_29041[(8)] = inst_28950);
return statearr_29041;
})();if(cljs.core.truth_(inst_28951))
{var statearr_29042_29128 = state_29038__$1;(statearr_29042_29128[(1)] = (22));
} else
{var statearr_29043_29129 = state_29038__$1;(statearr_29043_29129[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (27)))
{var inst_28986 = (state_29038[(9)]);var inst_28910 = (state_29038[(10)]);var inst_28979 = (state_29038[(11)]);var inst_28981 = (state_29038[(12)]);var inst_28986__$1 = cljs.core._nth.call(null,inst_28979,inst_28981);var inst_28987 = cljs.core.async.put_BANG_.call(null,inst_28986__$1,inst_28910,done);var state_29038__$1 = (function (){var statearr_29044 = state_29038;(statearr_29044[(9)] = inst_28986__$1);
return statearr_29044;
})();if(cljs.core.truth_(inst_28987))
{var statearr_29045_29130 = state_29038__$1;(statearr_29045_29130[(1)] = (30));
} else
{var statearr_29046_29131 = state_29038__$1;(statearr_29046_29131[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (1)))
{var state_29038__$1 = state_29038;var statearr_29047_29132 = state_29038__$1;(statearr_29047_29132[(2)] = null);
(statearr_29047_29132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (24)))
{var inst_28939 = (state_29038[(7)]);var inst_28956 = (state_29038[(2)]);var inst_28957 = cljs.core.next.call(null,inst_28939);var inst_28919 = inst_28957;var inst_28920 = null;var inst_28921 = (0);var inst_28922 = (0);var state_29038__$1 = (function (){var statearr_29048 = state_29038;(statearr_29048[(13)] = inst_28921);
(statearr_29048[(14)] = inst_28920);
(statearr_29048[(15)] = inst_28919);
(statearr_29048[(16)] = inst_28922);
(statearr_29048[(17)] = inst_28956);
return statearr_29048;
})();var statearr_29049_29133 = state_29038__$1;(statearr_29049_29133[(2)] = null);
(statearr_29049_29133[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (39)))
{var state_29038__$1 = state_29038;var statearr_29053_29134 = state_29038__$1;(statearr_29053_29134[(2)] = null);
(statearr_29053_29134[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (4)))
{var inst_28910 = (state_29038[(10)]);var inst_28910__$1 = (state_29038[(2)]);var inst_28911 = (inst_28910__$1 == null);var state_29038__$1 = (function (){var statearr_29054 = state_29038;(statearr_29054[(10)] = inst_28910__$1);
return statearr_29054;
})();if(cljs.core.truth_(inst_28911))
{var statearr_29055_29135 = state_29038__$1;(statearr_29055_29135[(1)] = (5));
} else
{var statearr_29056_29136 = state_29038__$1;(statearr_29056_29136[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (15)))
{var inst_28921 = (state_29038[(13)]);var inst_28920 = (state_29038[(14)]);var inst_28919 = (state_29038[(15)]);var inst_28922 = (state_29038[(16)]);var inst_28935 = (state_29038[(2)]);var inst_28936 = (inst_28922 + (1));var tmp29050 = inst_28921;var tmp29051 = inst_28920;var tmp29052 = inst_28919;var inst_28919__$1 = tmp29052;var inst_28920__$1 = tmp29051;var inst_28921__$1 = tmp29050;var inst_28922__$1 = inst_28936;var state_29038__$1 = (function (){var statearr_29057 = state_29038;(statearr_29057[(13)] = inst_28921__$1);
(statearr_29057[(14)] = inst_28920__$1);
(statearr_29057[(15)] = inst_28919__$1);
(statearr_29057[(18)] = inst_28935);
(statearr_29057[(16)] = inst_28922__$1);
return statearr_29057;
})();var statearr_29058_29137 = state_29038__$1;(statearr_29058_29137[(2)] = null);
(statearr_29058_29137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (21)))
{var inst_28960 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29062_29138 = state_29038__$1;(statearr_29062_29138[(2)] = inst_28960);
(statearr_29062_29138[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (31)))
{var inst_28986 = (state_29038[(9)]);var inst_28990 = done.call(null,null);var inst_28991 = cljs.core.async.untap_STAR_.call(null,m,inst_28986);var state_29038__$1 = (function (){var statearr_29063 = state_29038;(statearr_29063[(19)] = inst_28990);
return statearr_29063;
})();var statearr_29064_29139 = state_29038__$1;(statearr_29064_29139[(2)] = inst_28991);
(statearr_29064_29139[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (32)))
{var inst_28978 = (state_29038[(20)]);var inst_28980 = (state_29038[(21)]);var inst_28979 = (state_29038[(11)]);var inst_28981 = (state_29038[(12)]);var inst_28993 = (state_29038[(2)]);var inst_28994 = (inst_28981 + (1));var tmp29059 = inst_28978;var tmp29060 = inst_28980;var tmp29061 = inst_28979;var inst_28978__$1 = tmp29059;var inst_28979__$1 = tmp29061;var inst_28980__$1 = tmp29060;var inst_28981__$1 = inst_28994;var state_29038__$1 = (function (){var statearr_29065 = state_29038;(statearr_29065[(20)] = inst_28978__$1);
(statearr_29065[(22)] = inst_28993);
(statearr_29065[(21)] = inst_28980__$1);
(statearr_29065[(11)] = inst_28979__$1);
(statearr_29065[(12)] = inst_28981__$1);
return statearr_29065;
})();var statearr_29066_29140 = state_29038__$1;(statearr_29066_29140[(2)] = null);
(statearr_29066_29140[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (40)))
{var inst_29006 = (state_29038[(23)]);var inst_29010 = done.call(null,null);var inst_29011 = cljs.core.async.untap_STAR_.call(null,m,inst_29006);var state_29038__$1 = (function (){var statearr_29067 = state_29038;(statearr_29067[(24)] = inst_29010);
return statearr_29067;
})();var statearr_29068_29141 = state_29038__$1;(statearr_29068_29141[(2)] = inst_29011);
(statearr_29068_29141[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (33)))
{var inst_28997 = (state_29038[(25)]);var inst_28999 = cljs.core.chunked_seq_QMARK_.call(null,inst_28997);var state_29038__$1 = state_29038;if(inst_28999)
{var statearr_29069_29142 = state_29038__$1;(statearr_29069_29142[(1)] = (36));
} else
{var statearr_29070_29143 = state_29038__$1;(statearr_29070_29143[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (13)))
{var inst_28929 = (state_29038[(26)]);var inst_28932 = cljs.core.async.close_BANG_.call(null,inst_28929);var state_29038__$1 = state_29038;var statearr_29071_29144 = state_29038__$1;(statearr_29071_29144[(2)] = inst_28932);
(statearr_29071_29144[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (22)))
{var inst_28950 = (state_29038[(8)]);var inst_28953 = cljs.core.async.close_BANG_.call(null,inst_28950);var state_29038__$1 = state_29038;var statearr_29072_29145 = state_29038__$1;(statearr_29072_29145[(2)] = inst_28953);
(statearr_29072_29145[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (36)))
{var inst_28997 = (state_29038[(25)]);var inst_29001 = cljs.core.chunk_first.call(null,inst_28997);var inst_29002 = cljs.core.chunk_rest.call(null,inst_28997);var inst_29003 = cljs.core.count.call(null,inst_29001);var inst_28978 = inst_29002;var inst_28979 = inst_29001;var inst_28980 = inst_29003;var inst_28981 = (0);var state_29038__$1 = (function (){var statearr_29073 = state_29038;(statearr_29073[(20)] = inst_28978);
(statearr_29073[(21)] = inst_28980);
(statearr_29073[(11)] = inst_28979);
(statearr_29073[(12)] = inst_28981);
return statearr_29073;
})();var statearr_29074_29146 = state_29038__$1;(statearr_29074_29146[(2)] = null);
(statearr_29074_29146[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (41)))
{var inst_28997 = (state_29038[(25)]);var inst_29013 = (state_29038[(2)]);var inst_29014 = cljs.core.next.call(null,inst_28997);var inst_28978 = inst_29014;var inst_28979 = null;var inst_28980 = (0);var inst_28981 = (0);var state_29038__$1 = (function (){var statearr_29075 = state_29038;(statearr_29075[(20)] = inst_28978);
(statearr_29075[(21)] = inst_28980);
(statearr_29075[(27)] = inst_29013);
(statearr_29075[(11)] = inst_28979);
(statearr_29075[(12)] = inst_28981);
return statearr_29075;
})();var statearr_29076_29147 = state_29038__$1;(statearr_29076_29147[(2)] = null);
(statearr_29076_29147[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (43)))
{var state_29038__$1 = state_29038;var statearr_29077_29148 = state_29038__$1;(statearr_29077_29148[(2)] = null);
(statearr_29077_29148[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (29)))
{var inst_29022 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29078_29149 = state_29038__$1;(statearr_29078_29149[(2)] = inst_29022);
(statearr_29078_29149[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (44)))
{var inst_29031 = (state_29038[(2)]);var state_29038__$1 = (function (){var statearr_29079 = state_29038;(statearr_29079[(28)] = inst_29031);
return statearr_29079;
})();var statearr_29080_29150 = state_29038__$1;(statearr_29080_29150[(2)] = null);
(statearr_29080_29150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (6)))
{var inst_28970 = (state_29038[(29)]);var inst_28969 = cljs.core.deref.call(null,cs);var inst_28970__$1 = cljs.core.keys.call(null,inst_28969);var inst_28971 = cljs.core.count.call(null,inst_28970__$1);var inst_28972 = cljs.core.reset_BANG_.call(null,dctr,inst_28971);var inst_28977 = cljs.core.seq.call(null,inst_28970__$1);var inst_28978 = inst_28977;var inst_28979 = null;var inst_28980 = (0);var inst_28981 = (0);var state_29038__$1 = (function (){var statearr_29081 = state_29038;(statearr_29081[(20)] = inst_28978);
(statearr_29081[(29)] = inst_28970__$1);
(statearr_29081[(30)] = inst_28972);
(statearr_29081[(21)] = inst_28980);
(statearr_29081[(11)] = inst_28979);
(statearr_29081[(12)] = inst_28981);
return statearr_29081;
})();var statearr_29082_29151 = state_29038__$1;(statearr_29082_29151[(2)] = null);
(statearr_29082_29151[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (28)))
{var inst_28978 = (state_29038[(20)]);var inst_28997 = (state_29038[(25)]);var inst_28997__$1 = cljs.core.seq.call(null,inst_28978);var state_29038__$1 = (function (){var statearr_29083 = state_29038;(statearr_29083[(25)] = inst_28997__$1);
return statearr_29083;
})();if(inst_28997__$1)
{var statearr_29084_29152 = state_29038__$1;(statearr_29084_29152[(1)] = (33));
} else
{var statearr_29085_29153 = state_29038__$1;(statearr_29085_29153[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (25)))
{var inst_28980 = (state_29038[(21)]);var inst_28981 = (state_29038[(12)]);var inst_28983 = (inst_28981 < inst_28980);var inst_28984 = inst_28983;var state_29038__$1 = state_29038;if(cljs.core.truth_(inst_28984))
{var statearr_29086_29154 = state_29038__$1;(statearr_29086_29154[(1)] = (27));
} else
{var statearr_29087_29155 = state_29038__$1;(statearr_29087_29155[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (34)))
{var state_29038__$1 = state_29038;var statearr_29088_29156 = state_29038__$1;(statearr_29088_29156[(2)] = null);
(statearr_29088_29156[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (17)))
{var state_29038__$1 = state_29038;var statearr_29089_29157 = state_29038__$1;(statearr_29089_29157[(2)] = null);
(statearr_29089_29157[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (3)))
{var inst_29036 = (state_29038[(2)]);var state_29038__$1 = state_29038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29038__$1,inst_29036);
} else
{if((state_val_29039 === (12)))
{var inst_28965 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29090_29158 = state_29038__$1;(statearr_29090_29158[(2)] = inst_28965);
(statearr_29090_29158[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (2)))
{var state_29038__$1 = state_29038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29038__$1,(4),ch);
} else
{if((state_val_29039 === (23)))
{var state_29038__$1 = state_29038;var statearr_29091_29159 = state_29038__$1;(statearr_29091_29159[(2)] = null);
(statearr_29091_29159[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (35)))
{var inst_29020 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29092_29160 = state_29038__$1;(statearr_29092_29160[(2)] = inst_29020);
(statearr_29092_29160[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (19)))
{var inst_28939 = (state_29038[(7)]);var inst_28943 = cljs.core.chunk_first.call(null,inst_28939);var inst_28944 = cljs.core.chunk_rest.call(null,inst_28939);var inst_28945 = cljs.core.count.call(null,inst_28943);var inst_28919 = inst_28944;var inst_28920 = inst_28943;var inst_28921 = inst_28945;var inst_28922 = (0);var state_29038__$1 = (function (){var statearr_29093 = state_29038;(statearr_29093[(13)] = inst_28921);
(statearr_29093[(14)] = inst_28920);
(statearr_29093[(15)] = inst_28919);
(statearr_29093[(16)] = inst_28922);
return statearr_29093;
})();var statearr_29094_29161 = state_29038__$1;(statearr_29094_29161[(2)] = null);
(statearr_29094_29161[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (11)))
{var inst_28919 = (state_29038[(15)]);var inst_28939 = (state_29038[(7)]);var inst_28939__$1 = cljs.core.seq.call(null,inst_28919);var state_29038__$1 = (function (){var statearr_29095 = state_29038;(statearr_29095[(7)] = inst_28939__$1);
return statearr_29095;
})();if(inst_28939__$1)
{var statearr_29096_29162 = state_29038__$1;(statearr_29096_29162[(1)] = (16));
} else
{var statearr_29097_29163 = state_29038__$1;(statearr_29097_29163[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (9)))
{var inst_28967 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29098_29164 = state_29038__$1;(statearr_29098_29164[(2)] = inst_28967);
(statearr_29098_29164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (5)))
{var inst_28917 = cljs.core.deref.call(null,cs);var inst_28918 = cljs.core.seq.call(null,inst_28917);var inst_28919 = inst_28918;var inst_28920 = null;var inst_28921 = (0);var inst_28922 = (0);var state_29038__$1 = (function (){var statearr_29099 = state_29038;(statearr_29099[(13)] = inst_28921);
(statearr_29099[(14)] = inst_28920);
(statearr_29099[(15)] = inst_28919);
(statearr_29099[(16)] = inst_28922);
return statearr_29099;
})();var statearr_29100_29165 = state_29038__$1;(statearr_29100_29165[(2)] = null);
(statearr_29100_29165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (14)))
{var state_29038__$1 = state_29038;var statearr_29101_29166 = state_29038__$1;(statearr_29101_29166[(2)] = null);
(statearr_29101_29166[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (45)))
{var inst_29028 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29102_29167 = state_29038__$1;(statearr_29102_29167[(2)] = inst_29028);
(statearr_29102_29167[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (26)))
{var inst_28970 = (state_29038[(29)]);var inst_29024 = (state_29038[(2)]);var inst_29025 = cljs.core.seq.call(null,inst_28970);var state_29038__$1 = (function (){var statearr_29103 = state_29038;(statearr_29103[(31)] = inst_29024);
return statearr_29103;
})();if(inst_29025)
{var statearr_29104_29168 = state_29038__$1;(statearr_29104_29168[(1)] = (42));
} else
{var statearr_29105_29169 = state_29038__$1;(statearr_29105_29169[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (16)))
{var inst_28939 = (state_29038[(7)]);var inst_28941 = cljs.core.chunked_seq_QMARK_.call(null,inst_28939);var state_29038__$1 = state_29038;if(inst_28941)
{var statearr_29106_29170 = state_29038__$1;(statearr_29106_29170[(1)] = (19));
} else
{var statearr_29107_29171 = state_29038__$1;(statearr_29107_29171[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (38)))
{var inst_29017 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29108_29172 = state_29038__$1;(statearr_29108_29172[(2)] = inst_29017);
(statearr_29108_29172[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (30)))
{var state_29038__$1 = state_29038;var statearr_29109_29173 = state_29038__$1;(statearr_29109_29173[(2)] = null);
(statearr_29109_29173[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (10)))
{var inst_28920 = (state_29038[(14)]);var inst_28922 = (state_29038[(16)]);var inst_28928 = cljs.core._nth.call(null,inst_28920,inst_28922);var inst_28929 = cljs.core.nth.call(null,inst_28928,(0),null);var inst_28930 = cljs.core.nth.call(null,inst_28928,(1),null);var state_29038__$1 = (function (){var statearr_29110 = state_29038;(statearr_29110[(26)] = inst_28929);
return statearr_29110;
})();if(cljs.core.truth_(inst_28930))
{var statearr_29111_29174 = state_29038__$1;(statearr_29111_29174[(1)] = (13));
} else
{var statearr_29112_29175 = state_29038__$1;(statearr_29112_29175[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (18)))
{var inst_28963 = (state_29038[(2)]);var state_29038__$1 = state_29038;var statearr_29113_29176 = state_29038__$1;(statearr_29113_29176[(2)] = inst_28963);
(statearr_29113_29176[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (42)))
{var state_29038__$1 = state_29038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29038__$1,(45),dchan);
} else
{if((state_val_29039 === (37)))
{var inst_28997 = (state_29038[(25)]);var inst_28910 = (state_29038[(10)]);var inst_29006 = (state_29038[(23)]);var inst_29006__$1 = cljs.core.first.call(null,inst_28997);var inst_29007 = cljs.core.async.put_BANG_.call(null,inst_29006__$1,inst_28910,done);var state_29038__$1 = (function (){var statearr_29114 = state_29038;(statearr_29114[(23)] = inst_29006__$1);
return statearr_29114;
})();if(cljs.core.truth_(inst_29007))
{var statearr_29115_29177 = state_29038__$1;(statearr_29115_29177[(1)] = (39));
} else
{var statearr_29116_29178 = state_29038__$1;(statearr_29116_29178[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29039 === (8)))
{var inst_28921 = (state_29038[(13)]);var inst_28922 = (state_29038[(16)]);var inst_28924 = (inst_28922 < inst_28921);var inst_28925 = inst_28924;var state_29038__$1 = state_29038;if(cljs.core.truth_(inst_28925))
{var statearr_29117_29179 = state_29038__$1;(statearr_29117_29179[(1)] = (10));
} else
{var statearr_29118_29180 = state_29038__$1;(statearr_29118_29180[(1)] = (11));
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
});})(c__15989__auto___29126,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___29126,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29122[(0)] = state_machine__15975__auto__);
(statearr_29122[(1)] = (1));
return statearr_29122;
});
var state_machine__15975__auto____1 = (function (state_29038){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29038);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29123){if((e29123 instanceof Object))
{var ex__15978__auto__ = e29123;var statearr_29124_29181 = state_29038;(statearr_29124_29181[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29123;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29182 = state_29038;
state_29038 = G__29182;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29038){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29126,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_29125 = f__15990__auto__.call(null);(statearr_29125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29126);
return statearr_29125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29126,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29184 = {};return obj29184;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29185){var map__29190 = p__29185;var map__29190__$1 = ((cljs.core.seq_QMARK_.call(null,map__29190))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);var opts = map__29190__$1;var statearr_29191_29194 = state;(statearr_29191_29194[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29190,map__29190__$1,opts){
return (function (val){var statearr_29192_29195 = state;(statearr_29192_29195[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29190,map__29190__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_29193_29196 = state;(statearr_29193_29196[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29185 = null;if (arguments.length > 3) {
  p__29185 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29185);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29197){
var state = cljs.core.first(arglist__29197);
arglist__29197 = cljs.core.next(arglist__29197);
var cont_block = cljs.core.first(arglist__29197);
arglist__29197 = cljs.core.next(arglist__29197);
var ports = cljs.core.first(arglist__29197);
var p__29185 = cljs.core.rest(arglist__29197);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29185);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
;var m = (function (){if(typeof cljs.core.async.t29317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29317 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29318){
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
this.meta29318 = meta29318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29317.cljs$lang$type = true;
cljs.core.async.t29317.cljs$lang$ctorStr = "cljs.core.async/t29317";
cljs.core.async.t29317.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t29317");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29319){var self__ = this;
var _29319__$1 = this;return self__.meta29318;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29319,meta29318__$1){var self__ = this;
var _29319__$1 = this;return (new cljs.core.async.t29317(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29318__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29317 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29317(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29318){return (new cljs.core.async.t29317(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29318));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29317(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___29436 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29389){var state_val_29390 = (state_29389[(1)]);if((state_val_29390 === (7)))
{var inst_29333 = (state_29389[(7)]);var inst_29338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29333);var state_29389__$1 = state_29389;var statearr_29391_29437 = state_29389__$1;(statearr_29391_29437[(2)] = inst_29338);
(statearr_29391_29437[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (20)))
{var inst_29348 = (state_29389[(8)]);var state_29389__$1 = state_29389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29389__$1,(23),out,inst_29348);
} else
{if((state_val_29390 === (1)))
{var inst_29323 = (state_29389[(9)]);var inst_29323__$1 = calc_state.call(null);var inst_29324 = cljs.core.seq_QMARK_.call(null,inst_29323__$1);var state_29389__$1 = (function (){var statearr_29392 = state_29389;(statearr_29392[(9)] = inst_29323__$1);
return statearr_29392;
})();if(inst_29324)
{var statearr_29393_29438 = state_29389__$1;(statearr_29393_29438[(1)] = (2));
} else
{var statearr_29394_29439 = state_29389__$1;(statearr_29394_29439[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (24)))
{var inst_29341 = (state_29389[(10)]);var inst_29333 = inst_29341;var state_29389__$1 = (function (){var statearr_29395 = state_29389;(statearr_29395[(7)] = inst_29333);
return statearr_29395;
})();var statearr_29396_29440 = state_29389__$1;(statearr_29396_29440[(2)] = null);
(statearr_29396_29440[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (4)))
{var inst_29323 = (state_29389[(9)]);var inst_29329 = (state_29389[(2)]);var inst_29330 = cljs.core.get.call(null,inst_29329,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29331 = cljs.core.get.call(null,inst_29329,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29332 = cljs.core.get.call(null,inst_29329,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29333 = inst_29323;var state_29389__$1 = (function (){var statearr_29397 = state_29389;(statearr_29397[(11)] = inst_29331);
(statearr_29397[(7)] = inst_29333);
(statearr_29397[(12)] = inst_29332);
(statearr_29397[(13)] = inst_29330);
return statearr_29397;
})();var statearr_29398_29441 = state_29389__$1;(statearr_29398_29441[(2)] = null);
(statearr_29398_29441[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (15)))
{var state_29389__$1 = state_29389;var statearr_29399_29442 = state_29389__$1;(statearr_29399_29442[(2)] = null);
(statearr_29399_29442[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (21)))
{var inst_29341 = (state_29389[(10)]);var inst_29333 = inst_29341;var state_29389__$1 = (function (){var statearr_29400 = state_29389;(statearr_29400[(7)] = inst_29333);
return statearr_29400;
})();var statearr_29401_29443 = state_29389__$1;(statearr_29401_29443[(2)] = null);
(statearr_29401_29443[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (13)))
{var inst_29385 = (state_29389[(2)]);var state_29389__$1 = state_29389;var statearr_29402_29444 = state_29389__$1;(statearr_29402_29444[(2)] = inst_29385);
(statearr_29402_29444[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (22)))
{var inst_29383 = (state_29389[(2)]);var state_29389__$1 = state_29389;var statearr_29403_29445 = state_29389__$1;(statearr_29403_29445[(2)] = inst_29383);
(statearr_29403_29445[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (6)))
{var inst_29387 = (state_29389[(2)]);var state_29389__$1 = state_29389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else
{if((state_val_29390 === (25)))
{var state_29389__$1 = state_29389;var statearr_29404_29446 = state_29389__$1;(statearr_29404_29446[(2)] = null);
(statearr_29404_29446[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (17)))
{var inst_29363 = (state_29389[(14)]);var state_29389__$1 = state_29389;var statearr_29405_29447 = state_29389__$1;(statearr_29405_29447[(2)] = inst_29363);
(statearr_29405_29447[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (3)))
{var inst_29323 = (state_29389[(9)]);var state_29389__$1 = state_29389;var statearr_29406_29448 = state_29389__$1;(statearr_29406_29448[(2)] = inst_29323);
(statearr_29406_29448[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (12)))
{var inst_29344 = (state_29389[(15)]);var inst_29349 = (state_29389[(16)]);var inst_29363 = (state_29389[(14)]);var inst_29363__$1 = inst_29344.call(null,inst_29349);var state_29389__$1 = (function (){var statearr_29407 = state_29389;(statearr_29407[(14)] = inst_29363__$1);
return statearr_29407;
})();if(cljs.core.truth_(inst_29363__$1))
{var statearr_29408_29449 = state_29389__$1;(statearr_29408_29449[(1)] = (17));
} else
{var statearr_29409_29450 = state_29389__$1;(statearr_29409_29450[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (2)))
{var inst_29323 = (state_29389[(9)]);var inst_29326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29323);var state_29389__$1 = state_29389;var statearr_29410_29451 = state_29389__$1;(statearr_29410_29451[(2)] = inst_29326);
(statearr_29410_29451[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (23)))
{var inst_29374 = (state_29389[(2)]);var state_29389__$1 = state_29389;if(cljs.core.truth_(inst_29374))
{var statearr_29411_29452 = state_29389__$1;(statearr_29411_29452[(1)] = (24));
} else
{var statearr_29412_29453 = state_29389__$1;(statearr_29412_29453[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (19)))
{var inst_29371 = (state_29389[(2)]);var state_29389__$1 = state_29389;if(cljs.core.truth_(inst_29371))
{var statearr_29413_29454 = state_29389__$1;(statearr_29413_29454[(1)] = (20));
} else
{var statearr_29414_29455 = state_29389__$1;(statearr_29414_29455[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (11)))
{var inst_29348 = (state_29389[(8)]);var inst_29354 = (inst_29348 == null);var state_29389__$1 = state_29389;if(cljs.core.truth_(inst_29354))
{var statearr_29415_29456 = state_29389__$1;(statearr_29415_29456[(1)] = (14));
} else
{var statearr_29416_29457 = state_29389__$1;(statearr_29416_29457[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (9)))
{var inst_29341 = (state_29389[(10)]);var inst_29341__$1 = (state_29389[(2)]);var inst_29342 = cljs.core.get.call(null,inst_29341__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29343 = cljs.core.get.call(null,inst_29341__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29344 = cljs.core.get.call(null,inst_29341__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29389__$1 = (function (){var statearr_29417 = state_29389;(statearr_29417[(10)] = inst_29341__$1);
(statearr_29417[(15)] = inst_29344);
(statearr_29417[(17)] = inst_29343);
return statearr_29417;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_29389__$1,(10),inst_29342);
} else
{if((state_val_29390 === (5)))
{var inst_29333 = (state_29389[(7)]);var inst_29336 = cljs.core.seq_QMARK_.call(null,inst_29333);var state_29389__$1 = state_29389;if(inst_29336)
{var statearr_29418_29458 = state_29389__$1;(statearr_29418_29458[(1)] = (7));
} else
{var statearr_29419_29459 = state_29389__$1;(statearr_29419_29459[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (14)))
{var inst_29349 = (state_29389[(16)]);var inst_29356 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29349);var state_29389__$1 = state_29389;var statearr_29420_29460 = state_29389__$1;(statearr_29420_29460[(2)] = inst_29356);
(statearr_29420_29460[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (26)))
{var inst_29379 = (state_29389[(2)]);var state_29389__$1 = state_29389;var statearr_29421_29461 = state_29389__$1;(statearr_29421_29461[(2)] = inst_29379);
(statearr_29421_29461[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (16)))
{var inst_29359 = (state_29389[(2)]);var inst_29360 = calc_state.call(null);var inst_29333 = inst_29360;var state_29389__$1 = (function (){var statearr_29422 = state_29389;(statearr_29422[(7)] = inst_29333);
(statearr_29422[(18)] = inst_29359);
return statearr_29422;
})();var statearr_29423_29462 = state_29389__$1;(statearr_29423_29462[(2)] = null);
(statearr_29423_29462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (10)))
{var inst_29348 = (state_29389[(8)]);var inst_29349 = (state_29389[(16)]);var inst_29347 = (state_29389[(2)]);var inst_29348__$1 = cljs.core.nth.call(null,inst_29347,(0),null);var inst_29349__$1 = cljs.core.nth.call(null,inst_29347,(1),null);var inst_29350 = (inst_29348__$1 == null);var inst_29351 = cljs.core._EQ_.call(null,inst_29349__$1,change);var inst_29352 = (inst_29350) || (inst_29351);var state_29389__$1 = (function (){var statearr_29424 = state_29389;(statearr_29424[(8)] = inst_29348__$1);
(statearr_29424[(16)] = inst_29349__$1);
return statearr_29424;
})();if(cljs.core.truth_(inst_29352))
{var statearr_29425_29463 = state_29389__$1;(statearr_29425_29463[(1)] = (11));
} else
{var statearr_29426_29464 = state_29389__$1;(statearr_29426_29464[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (18)))
{var inst_29344 = (state_29389[(15)]);var inst_29343 = (state_29389[(17)]);var inst_29349 = (state_29389[(16)]);var inst_29366 = cljs.core.empty_QMARK_.call(null,inst_29344);var inst_29367 = inst_29343.call(null,inst_29349);var inst_29368 = cljs.core.not.call(null,inst_29367);var inst_29369 = (inst_29366) && (inst_29368);var state_29389__$1 = state_29389;var statearr_29427_29465 = state_29389__$1;(statearr_29427_29465[(2)] = inst_29369);
(statearr_29427_29465[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (8)))
{var inst_29333 = (state_29389[(7)]);var state_29389__$1 = state_29389;var statearr_29428_29466 = state_29389__$1;(statearr_29428_29466[(2)] = inst_29333);
(statearr_29428_29466[(1)] = (9));
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
});})(c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29432[(0)] = state_machine__15975__auto__);
(statearr_29432[(1)] = (1));
return statearr_29432;
});
var state_machine__15975__auto____1 = (function (state_29389){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29389);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29433){if((e29433 instanceof Object))
{var ex__15978__auto__ = e29433;var statearr_29434_29467 = state_29389;(statearr_29434_29467[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29468 = state_29389;
state_29389 = G__29468;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_29435 = f__15990__auto__.call(null);(statearr_29435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29436);
return statearr_29435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29436,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29470 = {};return obj29470;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
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
return (function (topic){var or__12546__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12546__auto__,mults){
return (function (p1__29471_SHARP_){if(cljs.core.truth_(p1__29471_SHARP_.call(null,topic)))
{return p1__29471_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29471_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29594 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29595){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29595 = meta29595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29594.cljs$lang$type = true;
cljs.core.async.t29594.cljs$lang$ctorStr = "cljs.core.async/t29594";
cljs.core.async.t29594.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t29594");
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29596){var self__ = this;
var _29596__$1 = this;return self__.meta29595;
});})(mults,ensure_mult))
;
cljs.core.async.t29594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29596,meta29595__$1){var self__ = this;
var _29596__$1 = this;return (new cljs.core.async.t29594(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29595__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29594 = ((function (mults,ensure_mult){
return (function __GT_t29594(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29595){return (new cljs.core.async.t29594(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29595));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29594(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___29716 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29716,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29716,mults,ensure_mult,p){
return (function (state_29668){var state_val_29669 = (state_29668[(1)]);if((state_val_29669 === (7)))
{var inst_29664 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29670_29717 = state_29668__$1;(statearr_29670_29717[(2)] = inst_29664);
(statearr_29670_29717[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (20)))
{var state_29668__$1 = state_29668;var statearr_29671_29718 = state_29668__$1;(statearr_29671_29718[(2)] = null);
(statearr_29671_29718[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (1)))
{var state_29668__$1 = state_29668;var statearr_29672_29719 = state_29668__$1;(statearr_29672_29719[(2)] = null);
(statearr_29672_29719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (24)))
{var inst_29647 = (state_29668[(7)]);var inst_29656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29647);var state_29668__$1 = state_29668;var statearr_29673_29720 = state_29668__$1;(statearr_29673_29720[(2)] = inst_29656);
(statearr_29673_29720[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (4)))
{var inst_29599 = (state_29668[(8)]);var inst_29599__$1 = (state_29668[(2)]);var inst_29600 = (inst_29599__$1 == null);var state_29668__$1 = (function (){var statearr_29674 = state_29668;(statearr_29674[(8)] = inst_29599__$1);
return statearr_29674;
})();if(cljs.core.truth_(inst_29600))
{var statearr_29675_29721 = state_29668__$1;(statearr_29675_29721[(1)] = (5));
} else
{var statearr_29676_29722 = state_29668__$1;(statearr_29676_29722[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (15)))
{var inst_29641 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29677_29723 = state_29668__$1;(statearr_29677_29723[(2)] = inst_29641);
(statearr_29677_29723[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (21)))
{var inst_29661 = (state_29668[(2)]);var state_29668__$1 = (function (){var statearr_29678 = state_29668;(statearr_29678[(9)] = inst_29661);
return statearr_29678;
})();var statearr_29679_29724 = state_29668__$1;(statearr_29679_29724[(2)] = null);
(statearr_29679_29724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (13)))
{var inst_29623 = (state_29668[(10)]);var inst_29625 = cljs.core.chunked_seq_QMARK_.call(null,inst_29623);var state_29668__$1 = state_29668;if(inst_29625)
{var statearr_29680_29725 = state_29668__$1;(statearr_29680_29725[(1)] = (16));
} else
{var statearr_29681_29726 = state_29668__$1;(statearr_29681_29726[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (22)))
{var inst_29653 = (state_29668[(2)]);var state_29668__$1 = state_29668;if(cljs.core.truth_(inst_29653))
{var statearr_29682_29727 = state_29668__$1;(statearr_29682_29727[(1)] = (23));
} else
{var statearr_29683_29728 = state_29668__$1;(statearr_29683_29728[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (6)))
{var inst_29649 = (state_29668[(11)]);var inst_29599 = (state_29668[(8)]);var inst_29647 = (state_29668[(7)]);var inst_29647__$1 = topic_fn.call(null,inst_29599);var inst_29648 = cljs.core.deref.call(null,mults);var inst_29649__$1 = cljs.core.get.call(null,inst_29648,inst_29647__$1);var state_29668__$1 = (function (){var statearr_29684 = state_29668;(statearr_29684[(11)] = inst_29649__$1);
(statearr_29684[(7)] = inst_29647__$1);
return statearr_29684;
})();if(cljs.core.truth_(inst_29649__$1))
{var statearr_29685_29729 = state_29668__$1;(statearr_29685_29729[(1)] = (19));
} else
{var statearr_29686_29730 = state_29668__$1;(statearr_29686_29730[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (25)))
{var inst_29658 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29687_29731 = state_29668__$1;(statearr_29687_29731[(2)] = inst_29658);
(statearr_29687_29731[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (17)))
{var inst_29623 = (state_29668[(10)]);var inst_29632 = cljs.core.first.call(null,inst_29623);var inst_29633 = cljs.core.async.muxch_STAR_.call(null,inst_29632);var inst_29634 = cljs.core.async.close_BANG_.call(null,inst_29633);var inst_29635 = cljs.core.next.call(null,inst_29623);var inst_29609 = inst_29635;var inst_29610 = null;var inst_29611 = (0);var inst_29612 = (0);var state_29668__$1 = (function (){var statearr_29688 = state_29668;(statearr_29688[(12)] = inst_29609);
(statearr_29688[(13)] = inst_29612);
(statearr_29688[(14)] = inst_29611);
(statearr_29688[(15)] = inst_29634);
(statearr_29688[(16)] = inst_29610);
return statearr_29688;
})();var statearr_29689_29732 = state_29668__$1;(statearr_29689_29732[(2)] = null);
(statearr_29689_29732[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (3)))
{var inst_29666 = (state_29668[(2)]);var state_29668__$1 = state_29668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29668__$1,inst_29666);
} else
{if((state_val_29669 === (12)))
{var inst_29643 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29690_29733 = state_29668__$1;(statearr_29690_29733[(2)] = inst_29643);
(statearr_29690_29733[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (2)))
{var state_29668__$1 = state_29668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29668__$1,(4),ch);
} else
{if((state_val_29669 === (23)))
{var state_29668__$1 = state_29668;var statearr_29691_29734 = state_29668__$1;(statearr_29691_29734[(2)] = null);
(statearr_29691_29734[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (19)))
{var inst_29649 = (state_29668[(11)]);var inst_29599 = (state_29668[(8)]);var inst_29651 = cljs.core.async.muxch_STAR_.call(null,inst_29649);var state_29668__$1 = state_29668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29668__$1,(22),inst_29651,inst_29599);
} else
{if((state_val_29669 === (11)))
{var inst_29609 = (state_29668[(12)]);var inst_29623 = (state_29668[(10)]);var inst_29623__$1 = cljs.core.seq.call(null,inst_29609);var state_29668__$1 = (function (){var statearr_29692 = state_29668;(statearr_29692[(10)] = inst_29623__$1);
return statearr_29692;
})();if(inst_29623__$1)
{var statearr_29693_29735 = state_29668__$1;(statearr_29693_29735[(1)] = (13));
} else
{var statearr_29694_29736 = state_29668__$1;(statearr_29694_29736[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (9)))
{var inst_29645 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29695_29737 = state_29668__$1;(statearr_29695_29737[(2)] = inst_29645);
(statearr_29695_29737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (5)))
{var inst_29606 = cljs.core.deref.call(null,mults);var inst_29607 = cljs.core.vals.call(null,inst_29606);var inst_29608 = cljs.core.seq.call(null,inst_29607);var inst_29609 = inst_29608;var inst_29610 = null;var inst_29611 = (0);var inst_29612 = (0);var state_29668__$1 = (function (){var statearr_29696 = state_29668;(statearr_29696[(12)] = inst_29609);
(statearr_29696[(13)] = inst_29612);
(statearr_29696[(14)] = inst_29611);
(statearr_29696[(16)] = inst_29610);
return statearr_29696;
})();var statearr_29697_29738 = state_29668__$1;(statearr_29697_29738[(2)] = null);
(statearr_29697_29738[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (14)))
{var state_29668__$1 = state_29668;var statearr_29701_29739 = state_29668__$1;(statearr_29701_29739[(2)] = null);
(statearr_29701_29739[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (16)))
{var inst_29623 = (state_29668[(10)]);var inst_29627 = cljs.core.chunk_first.call(null,inst_29623);var inst_29628 = cljs.core.chunk_rest.call(null,inst_29623);var inst_29629 = cljs.core.count.call(null,inst_29627);var inst_29609 = inst_29628;var inst_29610 = inst_29627;var inst_29611 = inst_29629;var inst_29612 = (0);var state_29668__$1 = (function (){var statearr_29702 = state_29668;(statearr_29702[(12)] = inst_29609);
(statearr_29702[(13)] = inst_29612);
(statearr_29702[(14)] = inst_29611);
(statearr_29702[(16)] = inst_29610);
return statearr_29702;
})();var statearr_29703_29740 = state_29668__$1;(statearr_29703_29740[(2)] = null);
(statearr_29703_29740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (10)))
{var inst_29609 = (state_29668[(12)]);var inst_29612 = (state_29668[(13)]);var inst_29611 = (state_29668[(14)]);var inst_29610 = (state_29668[(16)]);var inst_29617 = cljs.core._nth.call(null,inst_29610,inst_29612);var inst_29618 = cljs.core.async.muxch_STAR_.call(null,inst_29617);var inst_29619 = cljs.core.async.close_BANG_.call(null,inst_29618);var inst_29620 = (inst_29612 + (1));var tmp29698 = inst_29609;var tmp29699 = inst_29611;var tmp29700 = inst_29610;var inst_29609__$1 = tmp29698;var inst_29610__$1 = tmp29700;var inst_29611__$1 = tmp29699;var inst_29612__$1 = inst_29620;var state_29668__$1 = (function (){var statearr_29704 = state_29668;(statearr_29704[(12)] = inst_29609__$1);
(statearr_29704[(13)] = inst_29612__$1);
(statearr_29704[(14)] = inst_29611__$1);
(statearr_29704[(17)] = inst_29619);
(statearr_29704[(16)] = inst_29610__$1);
return statearr_29704;
})();var statearr_29705_29741 = state_29668__$1;(statearr_29705_29741[(2)] = null);
(statearr_29705_29741[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (18)))
{var inst_29638 = (state_29668[(2)]);var state_29668__$1 = state_29668;var statearr_29706_29742 = state_29668__$1;(statearr_29706_29742[(2)] = inst_29638);
(statearr_29706_29742[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29669 === (8)))
{var inst_29612 = (state_29668[(13)]);var inst_29611 = (state_29668[(14)]);var inst_29614 = (inst_29612 < inst_29611);var inst_29615 = inst_29614;var state_29668__$1 = state_29668;if(cljs.core.truth_(inst_29615))
{var statearr_29707_29743 = state_29668__$1;(statearr_29707_29743[(1)] = (10));
} else
{var statearr_29708_29744 = state_29668__$1;(statearr_29708_29744[(1)] = (11));
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
});})(c__15989__auto___29716,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___29716,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29712[(0)] = state_machine__15975__auto__);
(statearr_29712[(1)] = (1));
return statearr_29712;
});
var state_machine__15975__auto____1 = (function (state_29668){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29668);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29713){if((e29713 instanceof Object))
{var ex__15978__auto__ = e29713;var statearr_29714_29745 = state_29668;(statearr_29714_29745[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29713;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29746 = state_29668;
state_29668 = G__29746;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29668){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29716,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_29715 = f__15990__auto__.call(null);(statearr_29715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29716);
return statearr_29715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29716,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___29883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29853){var state_val_29854 = (state_29853[(1)]);if((state_val_29854 === (7)))
{var state_29853__$1 = state_29853;var statearr_29855_29884 = state_29853__$1;(statearr_29855_29884[(2)] = null);
(statearr_29855_29884[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (1)))
{var state_29853__$1 = state_29853;var statearr_29856_29885 = state_29853__$1;(statearr_29856_29885[(2)] = null);
(statearr_29856_29885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (4)))
{var inst_29817 = (state_29853[(7)]);var inst_29819 = (inst_29817 < cnt);var state_29853__$1 = state_29853;if(cljs.core.truth_(inst_29819))
{var statearr_29857_29886 = state_29853__$1;(statearr_29857_29886[(1)] = (6));
} else
{var statearr_29858_29887 = state_29853__$1;(statearr_29858_29887[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (15)))
{var inst_29849 = (state_29853[(2)]);var state_29853__$1 = state_29853;var statearr_29859_29888 = state_29853__$1;(statearr_29859_29888[(2)] = inst_29849);
(statearr_29859_29888[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (13)))
{var inst_29842 = cljs.core.async.close_BANG_.call(null,out);var state_29853__$1 = state_29853;var statearr_29860_29889 = state_29853__$1;(statearr_29860_29889[(2)] = inst_29842);
(statearr_29860_29889[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (6)))
{var state_29853__$1 = state_29853;var statearr_29861_29890 = state_29853__$1;(statearr_29861_29890[(2)] = null);
(statearr_29861_29890[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (3)))
{var inst_29851 = (state_29853[(2)]);var state_29853__$1 = state_29853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29853__$1,inst_29851);
} else
{if((state_val_29854 === (12)))
{var inst_29839 = (state_29853[(8)]);var inst_29839__$1 = (state_29853[(2)]);var inst_29840 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29839__$1);var state_29853__$1 = (function (){var statearr_29862 = state_29853;(statearr_29862[(8)] = inst_29839__$1);
return statearr_29862;
})();if(cljs.core.truth_(inst_29840))
{var statearr_29863_29891 = state_29853__$1;(statearr_29863_29891[(1)] = (13));
} else
{var statearr_29864_29892 = state_29853__$1;(statearr_29864_29892[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (2)))
{var inst_29816 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29817 = (0);var state_29853__$1 = (function (){var statearr_29865 = state_29853;(statearr_29865[(9)] = inst_29816);
(statearr_29865[(7)] = inst_29817);
return statearr_29865;
})();var statearr_29866_29893 = state_29853__$1;(statearr_29866_29893[(2)] = null);
(statearr_29866_29893[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (11)))
{var inst_29817 = (state_29853[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29853,(10),Object,null,(9));var inst_29826 = chs__$1.call(null,inst_29817);var inst_29827 = done.call(null,inst_29817);var inst_29828 = cljs.core.async.take_BANG_.call(null,inst_29826,inst_29827);var state_29853__$1 = state_29853;var statearr_29867_29894 = state_29853__$1;(statearr_29867_29894[(2)] = inst_29828);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29853__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (9)))
{var inst_29817 = (state_29853[(7)]);var inst_29830 = (state_29853[(2)]);var inst_29831 = (inst_29817 + (1));var inst_29817__$1 = inst_29831;var state_29853__$1 = (function (){var statearr_29868 = state_29853;(statearr_29868[(7)] = inst_29817__$1);
(statearr_29868[(10)] = inst_29830);
return statearr_29868;
})();var statearr_29869_29895 = state_29853__$1;(statearr_29869_29895[(2)] = null);
(statearr_29869_29895[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (5)))
{var inst_29837 = (state_29853[(2)]);var state_29853__$1 = (function (){var statearr_29870 = state_29853;(statearr_29870[(11)] = inst_29837);
return statearr_29870;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29853__$1,(12),dchan);
} else
{if((state_val_29854 === (14)))
{var inst_29839 = (state_29853[(8)]);var inst_29844 = cljs.core.apply.call(null,f,inst_29839);var state_29853__$1 = state_29853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29853__$1,(16),out,inst_29844);
} else
{if((state_val_29854 === (16)))
{var inst_29846 = (state_29853[(2)]);var state_29853__$1 = (function (){var statearr_29871 = state_29853;(statearr_29871[(12)] = inst_29846);
return statearr_29871;
})();var statearr_29872_29896 = state_29853__$1;(statearr_29872_29896[(2)] = null);
(statearr_29872_29896[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (10)))
{var inst_29821 = (state_29853[(2)]);var inst_29822 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29853__$1 = (function (){var statearr_29873 = state_29853;(statearr_29873[(13)] = inst_29821);
return statearr_29873;
})();var statearr_29874_29897 = state_29853__$1;(statearr_29874_29897[(2)] = inst_29822);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29853__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29854 === (8)))
{var inst_29835 = (state_29853[(2)]);var state_29853__$1 = state_29853;var statearr_29875_29898 = state_29853__$1;(statearr_29875_29898[(2)] = inst_29835);
(statearr_29875_29898[(1)] = (5));
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
});})(c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29879[(0)] = state_machine__15975__auto__);
(statearr_29879[(1)] = (1));
return statearr_29879;
});
var state_machine__15975__auto____1 = (function (state_29853){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29853);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29880){if((e29880 instanceof Object))
{var ex__15978__auto__ = e29880;var statearr_29881_29899 = state_29853;(statearr_29881_29899[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29880;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29900 = state_29853;
state_29853 = G__29900;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29853){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_29882 = f__15990__auto__.call(null);(statearr_29882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29883);
return statearr_29882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29883,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30008,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30008,out){
return (function (state_29984){var state_val_29985 = (state_29984[(1)]);if((state_val_29985 === (7)))
{var inst_29964 = (state_29984[(7)]);var inst_29963 = (state_29984[(8)]);var inst_29963__$1 = (state_29984[(2)]);var inst_29964__$1 = cljs.core.nth.call(null,inst_29963__$1,(0),null);var inst_29965 = cljs.core.nth.call(null,inst_29963__$1,(1),null);var inst_29966 = (inst_29964__$1 == null);var state_29984__$1 = (function (){var statearr_29986 = state_29984;(statearr_29986[(7)] = inst_29964__$1);
(statearr_29986[(9)] = inst_29965);
(statearr_29986[(8)] = inst_29963__$1);
return statearr_29986;
})();if(cljs.core.truth_(inst_29966))
{var statearr_29987_30009 = state_29984__$1;(statearr_29987_30009[(1)] = (8));
} else
{var statearr_29988_30010 = state_29984__$1;(statearr_29988_30010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (1)))
{var inst_29955 = cljs.core.vec.call(null,chs);var inst_29956 = inst_29955;var state_29984__$1 = (function (){var statearr_29989 = state_29984;(statearr_29989[(10)] = inst_29956);
return statearr_29989;
})();var statearr_29990_30011 = state_29984__$1;(statearr_29990_30011[(2)] = null);
(statearr_29990_30011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (4)))
{var inst_29956 = (state_29984[(10)]);var state_29984__$1 = state_29984;return cljs.core.async.ioc_alts_BANG_.call(null,state_29984__$1,(7),inst_29956);
} else
{if((state_val_29985 === (6)))
{var inst_29980 = (state_29984[(2)]);var state_29984__$1 = state_29984;var statearr_29991_30012 = state_29984__$1;(statearr_29991_30012[(2)] = inst_29980);
(statearr_29991_30012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (3)))
{var inst_29982 = (state_29984[(2)]);var state_29984__$1 = state_29984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else
{if((state_val_29985 === (2)))
{var inst_29956 = (state_29984[(10)]);var inst_29958 = cljs.core.count.call(null,inst_29956);var inst_29959 = (inst_29958 > (0));var state_29984__$1 = state_29984;if(cljs.core.truth_(inst_29959))
{var statearr_29993_30013 = state_29984__$1;(statearr_29993_30013[(1)] = (4));
} else
{var statearr_29994_30014 = state_29984__$1;(statearr_29994_30014[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (11)))
{var inst_29956 = (state_29984[(10)]);var inst_29973 = (state_29984[(2)]);var tmp29992 = inst_29956;var inst_29956__$1 = tmp29992;var state_29984__$1 = (function (){var statearr_29995 = state_29984;(statearr_29995[(10)] = inst_29956__$1);
(statearr_29995[(11)] = inst_29973);
return statearr_29995;
})();var statearr_29996_30015 = state_29984__$1;(statearr_29996_30015[(2)] = null);
(statearr_29996_30015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (9)))
{var inst_29964 = (state_29984[(7)]);var state_29984__$1 = state_29984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(11),out,inst_29964);
} else
{if((state_val_29985 === (5)))
{var inst_29978 = cljs.core.async.close_BANG_.call(null,out);var state_29984__$1 = state_29984;var statearr_29997_30016 = state_29984__$1;(statearr_29997_30016[(2)] = inst_29978);
(statearr_29997_30016[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (10)))
{var inst_29976 = (state_29984[(2)]);var state_29984__$1 = state_29984;var statearr_29998_30017 = state_29984__$1;(statearr_29998_30017[(2)] = inst_29976);
(statearr_29998_30017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29985 === (8)))
{var inst_29956 = (state_29984[(10)]);var inst_29964 = (state_29984[(7)]);var inst_29965 = (state_29984[(9)]);var inst_29963 = (state_29984[(8)]);var inst_29968 = (function (){var c = inst_29965;var v = inst_29964;var vec__29961 = inst_29963;var cs = inst_29956;return ((function (c,v,vec__29961,cs,inst_29956,inst_29964,inst_29965,inst_29963,state_val_29985,c__15989__auto___30008,out){
return (function (p1__29901_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29901_SHARP_);
});
;})(c,v,vec__29961,cs,inst_29956,inst_29964,inst_29965,inst_29963,state_val_29985,c__15989__auto___30008,out))
})();var inst_29969 = cljs.core.filterv.call(null,inst_29968,inst_29956);var inst_29956__$1 = inst_29969;var state_29984__$1 = (function (){var statearr_29999 = state_29984;(statearr_29999[(10)] = inst_29956__$1);
return statearr_29999;
})();var statearr_30000_30018 = state_29984__$1;(statearr_30000_30018[(2)] = null);
(statearr_30000_30018[(1)] = (2));
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
});})(c__15989__auto___30008,out))
;return ((function (switch__15974__auto__,c__15989__auto___30008,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30004 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30004[(0)] = state_machine__15975__auto__);
(statearr_30004[(1)] = (1));
return statearr_30004;
});
var state_machine__15975__auto____1 = (function (state_29984){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29984);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30005){if((e30005 instanceof Object))
{var ex__15978__auto__ = e30005;var statearr_30006_30019 = state_29984;(statearr_30006_30019[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30005;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30020 = state_29984;
state_29984 = G__30020;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30008,out))
})();var state__15991__auto__ = (function (){var statearr_30007 = f__15990__auto__.call(null);(statearr_30007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30008);
return statearr_30007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30008,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30113 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30113,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30113,out){
return (function (state_30090){var state_val_30091 = (state_30090[(1)]);if((state_val_30091 === (7)))
{var inst_30072 = (state_30090[(7)]);var inst_30072__$1 = (state_30090[(2)]);var inst_30073 = (inst_30072__$1 == null);var inst_30074 = cljs.core.not.call(null,inst_30073);var state_30090__$1 = (function (){var statearr_30092 = state_30090;(statearr_30092[(7)] = inst_30072__$1);
return statearr_30092;
})();if(inst_30074)
{var statearr_30093_30114 = state_30090__$1;(statearr_30093_30114[(1)] = (8));
} else
{var statearr_30094_30115 = state_30090__$1;(statearr_30094_30115[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (1)))
{var inst_30067 = (0);var state_30090__$1 = (function (){var statearr_30095 = state_30090;(statearr_30095[(8)] = inst_30067);
return statearr_30095;
})();var statearr_30096_30116 = state_30090__$1;(statearr_30096_30116[(2)] = null);
(statearr_30096_30116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (4)))
{var state_30090__$1 = state_30090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30090__$1,(7),ch);
} else
{if((state_val_30091 === (6)))
{var inst_30085 = (state_30090[(2)]);var state_30090__$1 = state_30090;var statearr_30097_30117 = state_30090__$1;(statearr_30097_30117[(2)] = inst_30085);
(statearr_30097_30117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (3)))
{var inst_30087 = (state_30090[(2)]);var inst_30088 = cljs.core.async.close_BANG_.call(null,out);var state_30090__$1 = (function (){var statearr_30098 = state_30090;(statearr_30098[(9)] = inst_30087);
return statearr_30098;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30090__$1,inst_30088);
} else
{if((state_val_30091 === (2)))
{var inst_30067 = (state_30090[(8)]);var inst_30069 = (inst_30067 < n);var state_30090__$1 = state_30090;if(cljs.core.truth_(inst_30069))
{var statearr_30099_30118 = state_30090__$1;(statearr_30099_30118[(1)] = (4));
} else
{var statearr_30100_30119 = state_30090__$1;(statearr_30100_30119[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (11)))
{var inst_30067 = (state_30090[(8)]);var inst_30077 = (state_30090[(2)]);var inst_30078 = (inst_30067 + (1));var inst_30067__$1 = inst_30078;var state_30090__$1 = (function (){var statearr_30101 = state_30090;(statearr_30101[(8)] = inst_30067__$1);
(statearr_30101[(10)] = inst_30077);
return statearr_30101;
})();var statearr_30102_30120 = state_30090__$1;(statearr_30102_30120[(2)] = null);
(statearr_30102_30120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (9)))
{var state_30090__$1 = state_30090;var statearr_30103_30121 = state_30090__$1;(statearr_30103_30121[(2)] = null);
(statearr_30103_30121[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (5)))
{var state_30090__$1 = state_30090;var statearr_30104_30122 = state_30090__$1;(statearr_30104_30122[(2)] = null);
(statearr_30104_30122[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (10)))
{var inst_30082 = (state_30090[(2)]);var state_30090__$1 = state_30090;var statearr_30105_30123 = state_30090__$1;(statearr_30105_30123[(2)] = inst_30082);
(statearr_30105_30123[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30091 === (8)))
{var inst_30072 = (state_30090[(7)]);var state_30090__$1 = state_30090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30090__$1,(11),out,inst_30072);
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
});})(c__15989__auto___30113,out))
;return ((function (switch__15974__auto__,c__15989__auto___30113,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30109 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30109[(0)] = state_machine__15975__auto__);
(statearr_30109[(1)] = (1));
return statearr_30109;
});
var state_machine__15975__auto____1 = (function (state_30090){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30090);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30110){if((e30110 instanceof Object))
{var ex__15978__auto__ = e30110;var statearr_30111_30124 = state_30090;(statearr_30111_30124[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30125 = state_30090;
state_30090 = G__30125;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30113,out))
})();var state__15991__auto__ = (function (){var statearr_30112 = f__15990__auto__.call(null);(statearr_30112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30113);
return statearr_30112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30113,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30133 = (function (ch,f,map_LT_,meta30134){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30134 = meta30134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30133.cljs$lang$type = true;
cljs.core.async.t30133.cljs$lang$ctorStr = "cljs.core.async/t30133";
cljs.core.async.t30133.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30133");
});
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30136 = (function (fn1,_,meta30134,ch,f,map_LT_,meta30137){
this.fn1 = fn1;
this._ = _;
this.meta30134 = meta30134;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30137 = meta30137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30136.cljs$lang$type = true;
cljs.core.async.t30136.cljs$lang$ctorStr = "cljs.core.async/t30136";
cljs.core.async.t30136.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30136");
});})(___$1))
;
cljs.core.async.t30136.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t30136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__30126_SHARP_){return f1.call(null,(((p1__30126_SHARP_ == null))?null:self__.f.call(null,p1__30126_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t30136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30138){var self__ = this;
var _30138__$1 = this;return self__.meta30137;
});})(___$1))
;
cljs.core.async.t30136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30138,meta30137__$1){var self__ = this;
var _30138__$1 = this;return (new cljs.core.async.t30136(self__.fn1,self__._,self__.meta30134,self__.ch,self__.f,self__.map_LT_,meta30137__$1));
});})(___$1))
;
cljs.core.async.__GT_t30136 = ((function (___$1){
return (function __GT_t30136(fn1__$1,___$2,meta30134__$1,ch__$2,f__$2,map_LT___$2,meta30137){return (new cljs.core.async.t30136(fn1__$1,___$2,meta30134__$1,ch__$2,f__$2,map_LT___$2,meta30137));
});})(___$1))
;
}
return (new cljs.core.async.t30136(fn1,___$1,self__.meta30134,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12534__auto__ = ret;if(cljs.core.truth_(and__12534__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12534__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30135){var self__ = this;
var _30135__$1 = this;return self__.meta30134;
});
cljs.core.async.t30133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30135,meta30134__$1){var self__ = this;
var _30135__$1 = this;return (new cljs.core.async.t30133(self__.ch,self__.f,self__.map_LT_,meta30134__$1));
});
cljs.core.async.__GT_t30133 = (function __GT_t30133(ch__$1,f__$1,map_LT___$1,meta30134){return (new cljs.core.async.t30133(ch__$1,f__$1,map_LT___$1,meta30134));
});
}
return (new cljs.core.async.t30133(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30142 = (function (ch,f,map_GT_,meta30143){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30143 = meta30143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30142.cljs$lang$type = true;
cljs.core.async.t30142.cljs$lang$ctorStr = "cljs.core.async/t30142";
cljs.core.async.t30142.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30142");
});
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30144){var self__ = this;
var _30144__$1 = this;return self__.meta30143;
});
cljs.core.async.t30142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30144,meta30143__$1){var self__ = this;
var _30144__$1 = this;return (new cljs.core.async.t30142(self__.ch,self__.f,self__.map_GT_,meta30143__$1));
});
cljs.core.async.__GT_t30142 = (function __GT_t30142(ch__$1,f__$1,map_GT___$1,meta30143){return (new cljs.core.async.t30142(ch__$1,f__$1,map_GT___$1,meta30143));
});
}
return (new cljs.core.async.t30142(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30148 = (function (ch,p,filter_GT_,meta30149){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30149 = meta30149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30148.cljs$lang$type = true;
cljs.core.async.t30148.cljs$lang$ctorStr = "cljs.core.async/t30148";
cljs.core.async.t30148.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30148");
});
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30150){var self__ = this;
var _30150__$1 = this;return self__.meta30149;
});
cljs.core.async.t30148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30150,meta30149__$1){var self__ = this;
var _30150__$1 = this;return (new cljs.core.async.t30148(self__.ch,self__.p,self__.filter_GT_,meta30149__$1));
});
cljs.core.async.__GT_t30148 = (function __GT_t30148(ch__$1,p__$1,filter_GT___$1,meta30149){return (new cljs.core.async.t30148(ch__$1,p__$1,filter_GT___$1,meta30149));
});
}
return (new cljs.core.async.t30148(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30233 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30233,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30233,out){
return (function (state_30212){var state_val_30213 = (state_30212[(1)]);if((state_val_30213 === (7)))
{var inst_30208 = (state_30212[(2)]);var state_30212__$1 = state_30212;var statearr_30214_30234 = state_30212__$1;(statearr_30214_30234[(2)] = inst_30208);
(statearr_30214_30234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (1)))
{var state_30212__$1 = state_30212;var statearr_30215_30235 = state_30212__$1;(statearr_30215_30235[(2)] = null);
(statearr_30215_30235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (4)))
{var inst_30194 = (state_30212[(7)]);var inst_30194__$1 = (state_30212[(2)]);var inst_30195 = (inst_30194__$1 == null);var state_30212__$1 = (function (){var statearr_30216 = state_30212;(statearr_30216[(7)] = inst_30194__$1);
return statearr_30216;
})();if(cljs.core.truth_(inst_30195))
{var statearr_30217_30236 = state_30212__$1;(statearr_30217_30236[(1)] = (5));
} else
{var statearr_30218_30237 = state_30212__$1;(statearr_30218_30237[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (6)))
{var inst_30194 = (state_30212[(7)]);var inst_30199 = p.call(null,inst_30194);var state_30212__$1 = state_30212;if(cljs.core.truth_(inst_30199))
{var statearr_30219_30238 = state_30212__$1;(statearr_30219_30238[(1)] = (8));
} else
{var statearr_30220_30239 = state_30212__$1;(statearr_30220_30239[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (3)))
{var inst_30210 = (state_30212[(2)]);var state_30212__$1 = state_30212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30212__$1,inst_30210);
} else
{if((state_val_30213 === (2)))
{var state_30212__$1 = state_30212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(4),ch);
} else
{if((state_val_30213 === (11)))
{var inst_30202 = (state_30212[(2)]);var state_30212__$1 = state_30212;var statearr_30221_30240 = state_30212__$1;(statearr_30221_30240[(2)] = inst_30202);
(statearr_30221_30240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (9)))
{var state_30212__$1 = state_30212;var statearr_30222_30241 = state_30212__$1;(statearr_30222_30241[(2)] = null);
(statearr_30222_30241[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (5)))
{var inst_30197 = cljs.core.async.close_BANG_.call(null,out);var state_30212__$1 = state_30212;var statearr_30223_30242 = state_30212__$1;(statearr_30223_30242[(2)] = inst_30197);
(statearr_30223_30242[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (10)))
{var inst_30205 = (state_30212[(2)]);var state_30212__$1 = (function (){var statearr_30224 = state_30212;(statearr_30224[(8)] = inst_30205);
return statearr_30224;
})();var statearr_30225_30243 = state_30212__$1;(statearr_30225_30243[(2)] = null);
(statearr_30225_30243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30213 === (8)))
{var inst_30194 = (state_30212[(7)]);var state_30212__$1 = state_30212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30212__$1,(11),out,inst_30194);
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
});})(c__15989__auto___30233,out))
;return ((function (switch__15974__auto__,c__15989__auto___30233,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30229 = [null,null,null,null,null,null,null,null,null];(statearr_30229[(0)] = state_machine__15975__auto__);
(statearr_30229[(1)] = (1));
return statearr_30229;
});
var state_machine__15975__auto____1 = (function (state_30212){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30212);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30230){if((e30230 instanceof Object))
{var ex__15978__auto__ = e30230;var statearr_30231_30244 = state_30212;(statearr_30231_30244[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30230;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30245 = state_30212;
state_30212 = G__30245;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30212){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30233,out))
})();var state__15991__auto__ = (function (){var statearr_30232 = f__15990__auto__.call(null);(statearr_30232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30233);
return statearr_30232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30233,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_30411){var state_val_30412 = (state_30411[(1)]);if((state_val_30412 === (7)))
{var inst_30407 = (state_30411[(2)]);var state_30411__$1 = state_30411;var statearr_30413_30454 = state_30411__$1;(statearr_30413_30454[(2)] = inst_30407);
(statearr_30413_30454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (20)))
{var inst_30377 = (state_30411[(7)]);var inst_30388 = (state_30411[(2)]);var inst_30389 = cljs.core.next.call(null,inst_30377);var inst_30363 = inst_30389;var inst_30364 = null;var inst_30365 = (0);var inst_30366 = (0);var state_30411__$1 = (function (){var statearr_30414 = state_30411;(statearr_30414[(8)] = inst_30388);
(statearr_30414[(9)] = inst_30365);
(statearr_30414[(10)] = inst_30363);
(statearr_30414[(11)] = inst_30364);
(statearr_30414[(12)] = inst_30366);
return statearr_30414;
})();var statearr_30415_30455 = state_30411__$1;(statearr_30415_30455[(2)] = null);
(statearr_30415_30455[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (1)))
{var state_30411__$1 = state_30411;var statearr_30416_30456 = state_30411__$1;(statearr_30416_30456[(2)] = null);
(statearr_30416_30456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (4)))
{var inst_30352 = (state_30411[(13)]);var inst_30352__$1 = (state_30411[(2)]);var inst_30353 = (inst_30352__$1 == null);var state_30411__$1 = (function (){var statearr_30417 = state_30411;(statearr_30417[(13)] = inst_30352__$1);
return statearr_30417;
})();if(cljs.core.truth_(inst_30353))
{var statearr_30418_30457 = state_30411__$1;(statearr_30418_30457[(1)] = (5));
} else
{var statearr_30419_30458 = state_30411__$1;(statearr_30419_30458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (15)))
{var state_30411__$1 = state_30411;var statearr_30423_30459 = state_30411__$1;(statearr_30423_30459[(2)] = null);
(statearr_30423_30459[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (21)))
{var state_30411__$1 = state_30411;var statearr_30424_30460 = state_30411__$1;(statearr_30424_30460[(2)] = null);
(statearr_30424_30460[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (13)))
{var inst_30365 = (state_30411[(9)]);var inst_30363 = (state_30411[(10)]);var inst_30364 = (state_30411[(11)]);var inst_30366 = (state_30411[(12)]);var inst_30373 = (state_30411[(2)]);var inst_30374 = (inst_30366 + (1));var tmp30420 = inst_30365;var tmp30421 = inst_30363;var tmp30422 = inst_30364;var inst_30363__$1 = tmp30421;var inst_30364__$1 = tmp30422;var inst_30365__$1 = tmp30420;var inst_30366__$1 = inst_30374;var state_30411__$1 = (function (){var statearr_30425 = state_30411;(statearr_30425[(9)] = inst_30365__$1);
(statearr_30425[(10)] = inst_30363__$1);
(statearr_30425[(11)] = inst_30364__$1);
(statearr_30425[(12)] = inst_30366__$1);
(statearr_30425[(14)] = inst_30373);
return statearr_30425;
})();var statearr_30426_30461 = state_30411__$1;(statearr_30426_30461[(2)] = null);
(statearr_30426_30461[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (22)))
{var state_30411__$1 = state_30411;var statearr_30427_30462 = state_30411__$1;(statearr_30427_30462[(2)] = null);
(statearr_30427_30462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (6)))
{var inst_30352 = (state_30411[(13)]);var inst_30361 = f.call(null,inst_30352);var inst_30362 = cljs.core.seq.call(null,inst_30361);var inst_30363 = inst_30362;var inst_30364 = null;var inst_30365 = (0);var inst_30366 = (0);var state_30411__$1 = (function (){var statearr_30428 = state_30411;(statearr_30428[(9)] = inst_30365);
(statearr_30428[(10)] = inst_30363);
(statearr_30428[(11)] = inst_30364);
(statearr_30428[(12)] = inst_30366);
return statearr_30428;
})();var statearr_30429_30463 = state_30411__$1;(statearr_30429_30463[(2)] = null);
(statearr_30429_30463[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (17)))
{var inst_30377 = (state_30411[(7)]);var inst_30381 = cljs.core.chunk_first.call(null,inst_30377);var inst_30382 = cljs.core.chunk_rest.call(null,inst_30377);var inst_30383 = cljs.core.count.call(null,inst_30381);var inst_30363 = inst_30382;var inst_30364 = inst_30381;var inst_30365 = inst_30383;var inst_30366 = (0);var state_30411__$1 = (function (){var statearr_30430 = state_30411;(statearr_30430[(9)] = inst_30365);
(statearr_30430[(10)] = inst_30363);
(statearr_30430[(11)] = inst_30364);
(statearr_30430[(12)] = inst_30366);
return statearr_30430;
})();var statearr_30431_30464 = state_30411__$1;(statearr_30431_30464[(2)] = null);
(statearr_30431_30464[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (3)))
{var inst_30409 = (state_30411[(2)]);var state_30411__$1 = state_30411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30411__$1,inst_30409);
} else
{if((state_val_30412 === (12)))
{var inst_30397 = (state_30411[(2)]);var state_30411__$1 = state_30411;var statearr_30432_30465 = state_30411__$1;(statearr_30432_30465[(2)] = inst_30397);
(statearr_30432_30465[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (2)))
{var state_30411__$1 = state_30411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30411__$1,(4),in$);
} else
{if((state_val_30412 === (23)))
{var inst_30405 = (state_30411[(2)]);var state_30411__$1 = state_30411;var statearr_30433_30466 = state_30411__$1;(statearr_30433_30466[(2)] = inst_30405);
(statearr_30433_30466[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (19)))
{var inst_30392 = (state_30411[(2)]);var state_30411__$1 = state_30411;var statearr_30434_30467 = state_30411__$1;(statearr_30434_30467[(2)] = inst_30392);
(statearr_30434_30467[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (11)))
{var inst_30377 = (state_30411[(7)]);var inst_30363 = (state_30411[(10)]);var inst_30377__$1 = cljs.core.seq.call(null,inst_30363);var state_30411__$1 = (function (){var statearr_30435 = state_30411;(statearr_30435[(7)] = inst_30377__$1);
return statearr_30435;
})();if(inst_30377__$1)
{var statearr_30436_30468 = state_30411__$1;(statearr_30436_30468[(1)] = (14));
} else
{var statearr_30437_30469 = state_30411__$1;(statearr_30437_30469[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (9)))
{var inst_30399 = (state_30411[(2)]);var inst_30400 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_30411__$1 = (function (){var statearr_30438 = state_30411;(statearr_30438[(15)] = inst_30399);
return statearr_30438;
})();if(cljs.core.truth_(inst_30400))
{var statearr_30439_30470 = state_30411__$1;(statearr_30439_30470[(1)] = (21));
} else
{var statearr_30440_30471 = state_30411__$1;(statearr_30440_30471[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (5)))
{var inst_30355 = cljs.core.async.close_BANG_.call(null,out);var state_30411__$1 = state_30411;var statearr_30441_30472 = state_30411__$1;(statearr_30441_30472[(2)] = inst_30355);
(statearr_30441_30472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (14)))
{var inst_30377 = (state_30411[(7)]);var inst_30379 = cljs.core.chunked_seq_QMARK_.call(null,inst_30377);var state_30411__$1 = state_30411;if(inst_30379)
{var statearr_30442_30473 = state_30411__$1;(statearr_30442_30473[(1)] = (17));
} else
{var statearr_30443_30474 = state_30411__$1;(statearr_30443_30474[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (16)))
{var inst_30395 = (state_30411[(2)]);var state_30411__$1 = state_30411;var statearr_30444_30475 = state_30411__$1;(statearr_30444_30475[(2)] = inst_30395);
(statearr_30444_30475[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30412 === (10)))
{var inst_30364 = (state_30411[(11)]);var inst_30366 = (state_30411[(12)]);var inst_30371 = cljs.core._nth.call(null,inst_30364,inst_30366);var state_30411__$1 = state_30411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30411__$1,(13),out,inst_30371);
} else
{if((state_val_30412 === (18)))
{var inst_30377 = (state_30411[(7)]);var inst_30386 = cljs.core.first.call(null,inst_30377);var state_30411__$1 = state_30411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30411__$1,(20),out,inst_30386);
} else
{if((state_val_30412 === (8)))
{var inst_30365 = (state_30411[(9)]);var inst_30366 = (state_30411[(12)]);var inst_30368 = (inst_30366 < inst_30365);var inst_30369 = inst_30368;var state_30411__$1 = state_30411;if(cljs.core.truth_(inst_30369))
{var statearr_30445_30476 = state_30411__$1;(statearr_30445_30476[(1)] = (10));
} else
{var statearr_30446_30477 = state_30411__$1;(statearr_30446_30477[(1)] = (11));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30450[(0)] = state_machine__15975__auto__);
(statearr_30450[(1)] = (1));
return statearr_30450;
});
var state_machine__15975__auto____1 = (function (state_30411){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30411);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30451){if((e30451 instanceof Object))
{var ex__15978__auto__ = e30451;var statearr_30452_30478 = state_30411;(statearr_30452_30478[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30411);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30451;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30479 = state_30411;
state_30411 = G__30479;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_30453 = f__15990__auto__.call(null);(statearr_30453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_30453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30576 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30576,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30576,out){
return (function (state_30551){var state_val_30552 = (state_30551[(1)]);if((state_val_30552 === (7)))
{var inst_30546 = (state_30551[(2)]);var state_30551__$1 = state_30551;var statearr_30553_30577 = state_30551__$1;(statearr_30553_30577[(2)] = inst_30546);
(statearr_30553_30577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (1)))
{var inst_30528 = null;var state_30551__$1 = (function (){var statearr_30554 = state_30551;(statearr_30554[(7)] = inst_30528);
return statearr_30554;
})();var statearr_30555_30578 = state_30551__$1;(statearr_30555_30578[(2)] = null);
(statearr_30555_30578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (4)))
{var inst_30531 = (state_30551[(8)]);var inst_30531__$1 = (state_30551[(2)]);var inst_30532 = (inst_30531__$1 == null);var inst_30533 = cljs.core.not.call(null,inst_30532);var state_30551__$1 = (function (){var statearr_30556 = state_30551;(statearr_30556[(8)] = inst_30531__$1);
return statearr_30556;
})();if(inst_30533)
{var statearr_30557_30579 = state_30551__$1;(statearr_30557_30579[(1)] = (5));
} else
{var statearr_30558_30580 = state_30551__$1;(statearr_30558_30580[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (6)))
{var state_30551__$1 = state_30551;var statearr_30559_30581 = state_30551__$1;(statearr_30559_30581[(2)] = null);
(statearr_30559_30581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (3)))
{var inst_30548 = (state_30551[(2)]);var inst_30549 = cljs.core.async.close_BANG_.call(null,out);var state_30551__$1 = (function (){var statearr_30560 = state_30551;(statearr_30560[(9)] = inst_30548);
return statearr_30560;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30551__$1,inst_30549);
} else
{if((state_val_30552 === (2)))
{var state_30551__$1 = state_30551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30551__$1,(4),ch);
} else
{if((state_val_30552 === (11)))
{var inst_30531 = (state_30551[(8)]);var inst_30540 = (state_30551[(2)]);var inst_30528 = inst_30531;var state_30551__$1 = (function (){var statearr_30561 = state_30551;(statearr_30561[(7)] = inst_30528);
(statearr_30561[(10)] = inst_30540);
return statearr_30561;
})();var statearr_30562_30582 = state_30551__$1;(statearr_30562_30582[(2)] = null);
(statearr_30562_30582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (9)))
{var inst_30531 = (state_30551[(8)]);var state_30551__$1 = state_30551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30551__$1,(11),out,inst_30531);
} else
{if((state_val_30552 === (5)))
{var inst_30528 = (state_30551[(7)]);var inst_30531 = (state_30551[(8)]);var inst_30535 = cljs.core._EQ_.call(null,inst_30531,inst_30528);var state_30551__$1 = state_30551;if(inst_30535)
{var statearr_30564_30583 = state_30551__$1;(statearr_30564_30583[(1)] = (8));
} else
{var statearr_30565_30584 = state_30551__$1;(statearr_30565_30584[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (10)))
{var inst_30543 = (state_30551[(2)]);var state_30551__$1 = state_30551;var statearr_30566_30585 = state_30551__$1;(statearr_30566_30585[(2)] = inst_30543);
(statearr_30566_30585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30552 === (8)))
{var inst_30528 = (state_30551[(7)]);var tmp30563 = inst_30528;var inst_30528__$1 = tmp30563;var state_30551__$1 = (function (){var statearr_30567 = state_30551;(statearr_30567[(7)] = inst_30528__$1);
return statearr_30567;
})();var statearr_30568_30586 = state_30551__$1;(statearr_30568_30586[(2)] = null);
(statearr_30568_30586[(1)] = (2));
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
});})(c__15989__auto___30576,out))
;return ((function (switch__15974__auto__,c__15989__auto___30576,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30572 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30572[(0)] = state_machine__15975__auto__);
(statearr_30572[(1)] = (1));
return statearr_30572;
});
var state_machine__15975__auto____1 = (function (state_30551){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30551);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30573){if((e30573 instanceof Object))
{var ex__15978__auto__ = e30573;var statearr_30574_30587 = state_30551;(statearr_30574_30587[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30573;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30588 = state_30551;
state_30551 = G__30588;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30551){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30576,out))
})();var state__15991__auto__ = (function (){var statearr_30575 = f__15990__auto__.call(null);(statearr_30575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30576);
return statearr_30575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30576,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30723 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30723,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30723,out){
return (function (state_30693){var state_val_30694 = (state_30693[(1)]);if((state_val_30694 === (7)))
{var inst_30689 = (state_30693[(2)]);var state_30693__$1 = state_30693;var statearr_30695_30724 = state_30693__$1;(statearr_30695_30724[(2)] = inst_30689);
(statearr_30695_30724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (1)))
{var inst_30656 = (new Array(n));var inst_30657 = inst_30656;var inst_30658 = (0);var state_30693__$1 = (function (){var statearr_30696 = state_30693;(statearr_30696[(7)] = inst_30658);
(statearr_30696[(8)] = inst_30657);
return statearr_30696;
})();var statearr_30697_30725 = state_30693__$1;(statearr_30697_30725[(2)] = null);
(statearr_30697_30725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (4)))
{var inst_30661 = (state_30693[(9)]);var inst_30661__$1 = (state_30693[(2)]);var inst_30662 = (inst_30661__$1 == null);var inst_30663 = cljs.core.not.call(null,inst_30662);var state_30693__$1 = (function (){var statearr_30698 = state_30693;(statearr_30698[(9)] = inst_30661__$1);
return statearr_30698;
})();if(inst_30663)
{var statearr_30699_30726 = state_30693__$1;(statearr_30699_30726[(1)] = (5));
} else
{var statearr_30700_30727 = state_30693__$1;(statearr_30700_30727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (15)))
{var inst_30683 = (state_30693[(2)]);var state_30693__$1 = state_30693;var statearr_30701_30728 = state_30693__$1;(statearr_30701_30728[(2)] = inst_30683);
(statearr_30701_30728[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (13)))
{var state_30693__$1 = state_30693;var statearr_30702_30729 = state_30693__$1;(statearr_30702_30729[(2)] = null);
(statearr_30702_30729[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (6)))
{var inst_30658 = (state_30693[(7)]);var inst_30679 = (inst_30658 > (0));var state_30693__$1 = state_30693;if(cljs.core.truth_(inst_30679))
{var statearr_30703_30730 = state_30693__$1;(statearr_30703_30730[(1)] = (12));
} else
{var statearr_30704_30731 = state_30693__$1;(statearr_30704_30731[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (3)))
{var inst_30691 = (state_30693[(2)]);var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30693__$1,inst_30691);
} else
{if((state_val_30694 === (12)))
{var inst_30657 = (state_30693[(8)]);var inst_30681 = cljs.core.vec.call(null,inst_30657);var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30693__$1,(15),out,inst_30681);
} else
{if((state_val_30694 === (2)))
{var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30693__$1,(4),ch);
} else
{if((state_val_30694 === (11)))
{var inst_30673 = (state_30693[(2)]);var inst_30674 = (new Array(n));var inst_30657 = inst_30674;var inst_30658 = (0);var state_30693__$1 = (function (){var statearr_30705 = state_30693;(statearr_30705[(7)] = inst_30658);
(statearr_30705[(8)] = inst_30657);
(statearr_30705[(10)] = inst_30673);
return statearr_30705;
})();var statearr_30706_30732 = state_30693__$1;(statearr_30706_30732[(2)] = null);
(statearr_30706_30732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (9)))
{var inst_30657 = (state_30693[(8)]);var inst_30671 = cljs.core.vec.call(null,inst_30657);var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30693__$1,(11),out,inst_30671);
} else
{if((state_val_30694 === (5)))
{var inst_30661 = (state_30693[(9)]);var inst_30666 = (state_30693[(11)]);var inst_30658 = (state_30693[(7)]);var inst_30657 = (state_30693[(8)]);var inst_30665 = (inst_30657[inst_30658] = inst_30661);var inst_30666__$1 = (inst_30658 + (1));var inst_30667 = (inst_30666__$1 < n);var state_30693__$1 = (function (){var statearr_30707 = state_30693;(statearr_30707[(11)] = inst_30666__$1);
(statearr_30707[(12)] = inst_30665);
return statearr_30707;
})();if(cljs.core.truth_(inst_30667))
{var statearr_30708_30733 = state_30693__$1;(statearr_30708_30733[(1)] = (8));
} else
{var statearr_30709_30734 = state_30693__$1;(statearr_30709_30734[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (14)))
{var inst_30686 = (state_30693[(2)]);var inst_30687 = cljs.core.async.close_BANG_.call(null,out);var state_30693__$1 = (function (){var statearr_30711 = state_30693;(statearr_30711[(13)] = inst_30686);
return statearr_30711;
})();var statearr_30712_30735 = state_30693__$1;(statearr_30712_30735[(2)] = inst_30687);
(statearr_30712_30735[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (10)))
{var inst_30677 = (state_30693[(2)]);var state_30693__$1 = state_30693;var statearr_30713_30736 = state_30693__$1;(statearr_30713_30736[(2)] = inst_30677);
(statearr_30713_30736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (8)))
{var inst_30666 = (state_30693[(11)]);var inst_30657 = (state_30693[(8)]);var tmp30710 = inst_30657;var inst_30657__$1 = tmp30710;var inst_30658 = inst_30666;var state_30693__$1 = (function (){var statearr_30714 = state_30693;(statearr_30714[(7)] = inst_30658);
(statearr_30714[(8)] = inst_30657__$1);
return statearr_30714;
})();var statearr_30715_30737 = state_30693__$1;(statearr_30715_30737[(2)] = null);
(statearr_30715_30737[(1)] = (2));
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
});})(c__15989__auto___30723,out))
;return ((function (switch__15974__auto__,c__15989__auto___30723,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30719[(0)] = state_machine__15975__auto__);
(statearr_30719[(1)] = (1));
return statearr_30719;
});
var state_machine__15975__auto____1 = (function (state_30693){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30693);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30720){if((e30720 instanceof Object))
{var ex__15978__auto__ = e30720;var statearr_30721_30738 = state_30693;(statearr_30721_30738[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30693);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30739 = state_30693;
state_30693 = G__30739;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30693){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30723,out))
})();var state__15991__auto__ = (function (){var statearr_30722 = f__15990__auto__.call(null);(statearr_30722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30723);
return statearr_30722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30723,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30882,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30882,out){
return (function (state_30852){var state_val_30853 = (state_30852[(1)]);if((state_val_30853 === (7)))
{var inst_30848 = (state_30852[(2)]);var state_30852__$1 = state_30852;var statearr_30854_30883 = state_30852__$1;(statearr_30854_30883[(2)] = inst_30848);
(statearr_30854_30883[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (1)))
{var inst_30811 = [];var inst_30812 = inst_30811;var inst_30813 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30852__$1 = (function (){var statearr_30855 = state_30852;(statearr_30855[(7)] = inst_30812);
(statearr_30855[(8)] = inst_30813);
return statearr_30855;
})();var statearr_30856_30884 = state_30852__$1;(statearr_30856_30884[(2)] = null);
(statearr_30856_30884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (4)))
{var inst_30816 = (state_30852[(9)]);var inst_30816__$1 = (state_30852[(2)]);var inst_30817 = (inst_30816__$1 == null);var inst_30818 = cljs.core.not.call(null,inst_30817);var state_30852__$1 = (function (){var statearr_30857 = state_30852;(statearr_30857[(9)] = inst_30816__$1);
return statearr_30857;
})();if(inst_30818)
{var statearr_30858_30885 = state_30852__$1;(statearr_30858_30885[(1)] = (5));
} else
{var statearr_30859_30886 = state_30852__$1;(statearr_30859_30886[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (15)))
{var inst_30842 = (state_30852[(2)]);var state_30852__$1 = state_30852;var statearr_30860_30887 = state_30852__$1;(statearr_30860_30887[(2)] = inst_30842);
(statearr_30860_30887[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (13)))
{var state_30852__$1 = state_30852;var statearr_30861_30888 = state_30852__$1;(statearr_30861_30888[(2)] = null);
(statearr_30861_30888[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (6)))
{var inst_30812 = (state_30852[(7)]);var inst_30837 = inst_30812.length;var inst_30838 = (inst_30837 > (0));var state_30852__$1 = state_30852;if(cljs.core.truth_(inst_30838))
{var statearr_30862_30889 = state_30852__$1;(statearr_30862_30889[(1)] = (12));
} else
{var statearr_30863_30890 = state_30852__$1;(statearr_30863_30890[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (3)))
{var inst_30850 = (state_30852[(2)]);var state_30852__$1 = state_30852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30852__$1,inst_30850);
} else
{if((state_val_30853 === (12)))
{var inst_30812 = (state_30852[(7)]);var inst_30840 = cljs.core.vec.call(null,inst_30812);var state_30852__$1 = state_30852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30852__$1,(15),out,inst_30840);
} else
{if((state_val_30853 === (2)))
{var state_30852__$1 = state_30852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30852__$1,(4),ch);
} else
{if((state_val_30853 === (11)))
{var inst_30816 = (state_30852[(9)]);var inst_30820 = (state_30852[(10)]);var inst_30830 = (state_30852[(2)]);var inst_30831 = [];var inst_30832 = inst_30831.push(inst_30816);var inst_30812 = inst_30831;var inst_30813 = inst_30820;var state_30852__$1 = (function (){var statearr_30864 = state_30852;(statearr_30864[(11)] = inst_30830);
(statearr_30864[(7)] = inst_30812);
(statearr_30864[(8)] = inst_30813);
(statearr_30864[(12)] = inst_30832);
return statearr_30864;
})();var statearr_30865_30891 = state_30852__$1;(statearr_30865_30891[(2)] = null);
(statearr_30865_30891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (9)))
{var inst_30812 = (state_30852[(7)]);var inst_30828 = cljs.core.vec.call(null,inst_30812);var state_30852__$1 = state_30852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30852__$1,(11),out,inst_30828);
} else
{if((state_val_30853 === (5)))
{var inst_30816 = (state_30852[(9)]);var inst_30813 = (state_30852[(8)]);var inst_30820 = (state_30852[(10)]);var inst_30820__$1 = f.call(null,inst_30816);var inst_30821 = cljs.core._EQ_.call(null,inst_30820__$1,inst_30813);var inst_30822 = cljs.core.keyword_identical_QMARK_.call(null,inst_30813,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30823 = (inst_30821) || (inst_30822);var state_30852__$1 = (function (){var statearr_30866 = state_30852;(statearr_30866[(10)] = inst_30820__$1);
return statearr_30866;
})();if(cljs.core.truth_(inst_30823))
{var statearr_30867_30892 = state_30852__$1;(statearr_30867_30892[(1)] = (8));
} else
{var statearr_30868_30893 = state_30852__$1;(statearr_30868_30893[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (14)))
{var inst_30845 = (state_30852[(2)]);var inst_30846 = cljs.core.async.close_BANG_.call(null,out);var state_30852__$1 = (function (){var statearr_30870 = state_30852;(statearr_30870[(13)] = inst_30845);
return statearr_30870;
})();var statearr_30871_30894 = state_30852__$1;(statearr_30871_30894[(2)] = inst_30846);
(statearr_30871_30894[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (10)))
{var inst_30835 = (state_30852[(2)]);var state_30852__$1 = state_30852;var statearr_30872_30895 = state_30852__$1;(statearr_30872_30895[(2)] = inst_30835);
(statearr_30872_30895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30853 === (8)))
{var inst_30812 = (state_30852[(7)]);var inst_30816 = (state_30852[(9)]);var inst_30820 = (state_30852[(10)]);var inst_30825 = inst_30812.push(inst_30816);var tmp30869 = inst_30812;var inst_30812__$1 = tmp30869;var inst_30813 = inst_30820;var state_30852__$1 = (function (){var statearr_30873 = state_30852;(statearr_30873[(14)] = inst_30825);
(statearr_30873[(7)] = inst_30812__$1);
(statearr_30873[(8)] = inst_30813);
return statearr_30873;
})();var statearr_30874_30896 = state_30852__$1;(statearr_30874_30896[(2)] = null);
(statearr_30874_30896[(1)] = (2));
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
});})(c__15989__auto___30882,out))
;return ((function (switch__15974__auto__,c__15989__auto___30882,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30878[(0)] = state_machine__15975__auto__);
(statearr_30878[(1)] = (1));
return statearr_30878;
});
var state_machine__15975__auto____1 = (function (state_30852){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30852);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30879){if((e30879 instanceof Object))
{var ex__15978__auto__ = e30879;var statearr_30880_30897 = state_30852;(statearr_30880_30897[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30879;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30898 = state_30852;
state_30852 = G__30898;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30852){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30882,out))
})();var state__15991__auto__ = (function (){var statearr_30881 = f__15990__auto__.call(null);(statearr_30881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30882);
return statearr_30881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30882,out))
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