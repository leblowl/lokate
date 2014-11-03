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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23048 = (function (f,fn_handler,meta23049){
this.f = f;
this.fn_handler = fn_handler;
this.meta23049 = meta23049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23048.cljs$lang$type = true;
cljs.core.async.t23048.cljs$lang$ctorStr = "cljs.core.async/t23048";
cljs.core.async.t23048.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23048");
});
cljs.core.async.t23048.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23050){var self__ = this;
var _23050__$1 = this;return self__.meta23049;
});
cljs.core.async.t23048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23050,meta23049__$1){var self__ = this;
var _23050__$1 = this;return (new cljs.core.async.t23048(self__.f,self__.fn_handler,meta23049__$1));
});
cljs.core.async.__GT_t23048 = (function __GT_t23048(f__$1,fn_handler__$1,meta23049){return (new cljs.core.async.t23048(f__$1,fn_handler__$1,meta23049));
});
}
return (new cljs.core.async.t23048(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23052 = buff;if(G__23052)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__23052.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23052.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23052);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23052);
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
{var val_23053 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23053);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23053,ret){
return (function (){return fn1.call(null,val_23053);
});})(val_23053,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___23054 = n;var x_23055 = (0);while(true){
if((x_23055 < n__13416__auto___23054))
{(a[x_23055] = (0));
{
var G__23056 = (x_23055 + (1));
x_23055 = G__23056;
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
var G__23057 = (i + (1));
i = G__23057;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23061 = (function (flag,alt_flag,meta23062){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23062 = meta23062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23061.cljs$lang$type = true;
cljs.core.async.t23061.cljs$lang$ctorStr = "cljs.core.async/t23061";
cljs.core.async.t23061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23061");
});})(flag))
;
cljs.core.async.t23061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23063){var self__ = this;
var _23063__$1 = this;return self__.meta23062;
});})(flag))
;
cljs.core.async.t23061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23063,meta23062__$1){var self__ = this;
var _23063__$1 = this;return (new cljs.core.async.t23061(self__.flag,self__.alt_flag,meta23062__$1));
});})(flag))
;
cljs.core.async.__GT_t23061 = ((function (flag){
return (function __GT_t23061(flag__$1,alt_flag__$1,meta23062){return (new cljs.core.async.t23061(flag__$1,alt_flag__$1,meta23062));
});})(flag))
;
}
return (new cljs.core.async.t23061(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23067 = (function (cb,flag,alt_handler,meta23068){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23068 = meta23068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23067.cljs$lang$type = true;
cljs.core.async.t23067.cljs$lang$ctorStr = "cljs.core.async/t23067";
cljs.core.async.t23067.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23067");
});
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23069){var self__ = this;
var _23069__$1 = this;return self__.meta23068;
});
cljs.core.async.t23067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23069,meta23068__$1){var self__ = this;
var _23069__$1 = this;return (new cljs.core.async.t23067(self__.cb,self__.flag,self__.alt_handler,meta23068__$1));
});
cljs.core.async.__GT_t23067 = (function __GT_t23067(cb__$1,flag__$1,alt_handler__$1,meta23068){return (new cljs.core.async.t23067(cb__$1,flag__$1,alt_handler__$1,meta23068));
});
}
return (new cljs.core.async.t23067(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23070_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23070_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23071_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23071_SHARP_,port], null));
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
var G__23072 = (i + (1));
i = G__23072;
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
var alts_BANG___delegate = function (ports,p__23073){var map__23075 = p__23073;var map__23075__$1 = ((cljs.core.seq_QMARK_.call(null,map__23075))?cljs.core.apply.call(null,cljs.core.hash_map,map__23075):map__23075);var opts = map__23075__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23073 = null;if (arguments.length > 1) {
  p__23073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23073);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23076){
var ports = cljs.core.first(arglist__23076);
var p__23073 = cljs.core.rest(arglist__23076);
return alts_BANG___delegate(ports,p__23073);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15086__auto___23171 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23171){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23171){
return (function (state_23147){var state_val_23148 = (state_23147[(1)]);if((state_val_23148 === (7)))
{var inst_23143 = (state_23147[(2)]);var state_23147__$1 = state_23147;var statearr_23149_23172 = state_23147__$1;(statearr_23149_23172[(2)] = inst_23143);
(statearr_23149_23172[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (1)))
{var state_23147__$1 = state_23147;var statearr_23150_23173 = state_23147__$1;(statearr_23150_23173[(2)] = null);
(statearr_23150_23173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (4)))
{var inst_23126 = (state_23147[(7)]);var inst_23126__$1 = (state_23147[(2)]);var inst_23127 = (inst_23126__$1 == null);var state_23147__$1 = (function (){var statearr_23151 = state_23147;(statearr_23151[(7)] = inst_23126__$1);
return statearr_23151;
})();if(cljs.core.truth_(inst_23127))
{var statearr_23152_23174 = state_23147__$1;(statearr_23152_23174[(1)] = (5));
} else
{var statearr_23153_23175 = state_23147__$1;(statearr_23153_23175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (13)))
{var state_23147__$1 = state_23147;var statearr_23154_23176 = state_23147__$1;(statearr_23154_23176[(2)] = null);
(statearr_23154_23176[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (6)))
{var inst_23126 = (state_23147[(7)]);var state_23147__$1 = state_23147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23147__$1,(11),to,inst_23126);
} else
{if((state_val_23148 === (3)))
{var inst_23145 = (state_23147[(2)]);var state_23147__$1 = state_23147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23147__$1,inst_23145);
} else
{if((state_val_23148 === (12)))
{var state_23147__$1 = state_23147;var statearr_23155_23177 = state_23147__$1;(statearr_23155_23177[(2)] = null);
(statearr_23155_23177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (2)))
{var state_23147__$1 = state_23147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23147__$1,(4),from);
} else
{if((state_val_23148 === (11)))
{var inst_23136 = (state_23147[(2)]);var state_23147__$1 = state_23147;if(cljs.core.truth_(inst_23136))
{var statearr_23156_23178 = state_23147__$1;(statearr_23156_23178[(1)] = (12));
} else
{var statearr_23157_23179 = state_23147__$1;(statearr_23157_23179[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (9)))
{var state_23147__$1 = state_23147;var statearr_23158_23180 = state_23147__$1;(statearr_23158_23180[(2)] = null);
(statearr_23158_23180[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (5)))
{var state_23147__$1 = state_23147;if(cljs.core.truth_(close_QMARK_))
{var statearr_23159_23181 = state_23147__$1;(statearr_23159_23181[(1)] = (8));
} else
{var statearr_23160_23182 = state_23147__$1;(statearr_23160_23182[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (14)))
{var inst_23141 = (state_23147[(2)]);var state_23147__$1 = state_23147;var statearr_23161_23183 = state_23147__$1;(statearr_23161_23183[(2)] = inst_23141);
(statearr_23161_23183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (10)))
{var inst_23133 = (state_23147[(2)]);var state_23147__$1 = state_23147;var statearr_23162_23184 = state_23147__$1;(statearr_23162_23184[(2)] = inst_23133);
(statearr_23162_23184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23148 === (8)))
{var inst_23130 = cljs.core.async.close_BANG_.call(null,to);var state_23147__$1 = state_23147;var statearr_23163_23185 = state_23147__$1;(statearr_23163_23185[(2)] = inst_23130);
(statearr_23163_23185[(1)] = (10));
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
});})(c__15086__auto___23171))
;return ((function (switch__15071__auto__,c__15086__auto___23171){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23167 = [null,null,null,null,null,null,null,null];(statearr_23167[(0)] = state_machine__15072__auto__);
(statearr_23167[(1)] = (1));
return statearr_23167;
});
var state_machine__15072__auto____1 = (function (state_23147){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23147);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object))
{var ex__15075__auto__ = e23168;var statearr_23169_23186 = state_23147;(statearr_23169_23186[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23187 = state_23147;
state_23147 = G__23187;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23147){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23171))
})();var state__15088__auto__ = (function (){var statearr_23170 = f__15087__auto__.call(null);(statearr_23170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23171);
return statearr_23170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23171))
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
return (function (p__23371){var vec__23372 = p__23371;var v = cljs.core.nth.call(null,vec__23372,(0),null);var p = cljs.core.nth.call(null,vec__23372,(1),null);var job = vec__23372;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15086__auto___23554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results){
return (function (state_23377){var state_val_23378 = (state_23377[(1)]);if((state_val_23378 === (2)))
{var inst_23374 = (state_23377[(2)]);var inst_23375 = cljs.core.async.close_BANG_.call(null,res);var state_23377__$1 = (function (){var statearr_23379 = state_23377;(statearr_23379[(7)] = inst_23374);
return statearr_23379;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else
{if((state_val_23378 === (1)))
{var state_23377__$1 = state_23377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23377__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results))
;return ((function (switch__15071__auto__,c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23383 = [null,null,null,null,null,null,null,null];(statearr_23383[(0)] = state_machine__15072__auto__);
(statearr_23383[(1)] = (1));
return statearr_23383;
});
var state_machine__15072__auto____1 = (function (state_23377){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23377);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23384){if((e23384 instanceof Object))
{var ex__15075__auto__ = e23384;var statearr_23385_23555 = state_23377;(statearr_23385_23555[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23384;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23556 = state_23377;
state_23377 = G__23556;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results))
})();var state__15088__auto__ = (function (){var statearr_23386 = f__15087__auto__.call(null);(statearr_23386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23554);
return statearr_23386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23554,res,vec__23372,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23387){var vec__23388 = p__23387;var v = cljs.core.nth.call(null,vec__23388,(0),null);var p = cljs.core.nth.call(null,vec__23388,(1),null);var job = vec__23388;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___23557 = n;var __23558 = (0);while(true){
if((__23558 < n__13416__auto___23557))
{var G__23389_23559 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23389_23559) {
case "async":
var c__15086__auto___23561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23558,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__23558,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function (state_23402){var state_val_23403 = (state_23402[(1)]);if((state_val_23403 === (7)))
{var inst_23398 = (state_23402[(2)]);var state_23402__$1 = state_23402;var statearr_23404_23562 = state_23402__$1;(statearr_23404_23562[(2)] = inst_23398);
(statearr_23404_23562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23403 === (6)))
{var state_23402__$1 = state_23402;var statearr_23405_23563 = state_23402__$1;(statearr_23405_23563[(2)] = null);
(statearr_23405_23563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23403 === (5)))
{var state_23402__$1 = state_23402;var statearr_23406_23564 = state_23402__$1;(statearr_23406_23564[(2)] = null);
(statearr_23406_23564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23403 === (4)))
{var inst_23392 = (state_23402[(2)]);var inst_23393 = async.call(null,inst_23392);var state_23402__$1 = state_23402;if(cljs.core.truth_(inst_23393))
{var statearr_23407_23565 = state_23402__$1;(statearr_23407_23565[(1)] = (5));
} else
{var statearr_23408_23566 = state_23402__$1;(statearr_23408_23566[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23403 === (3)))
{var inst_23400 = (state_23402[(2)]);var state_23402__$1 = state_23402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23402__$1,inst_23400);
} else
{if((state_val_23403 === (2)))
{var state_23402__$1 = state_23402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23402__$1,(4),jobs);
} else
{if((state_val_23403 === (1)))
{var state_23402__$1 = state_23402;var statearr_23409_23567 = state_23402__$1;(statearr_23409_23567[(2)] = null);
(statearr_23409_23567[(1)] = (2));
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
});})(__23558,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
;return ((function (__23558,switch__15071__auto__,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23413 = [null,null,null,null,null,null,null];(statearr_23413[(0)] = state_machine__15072__auto__);
(statearr_23413[(1)] = (1));
return statearr_23413;
});
var state_machine__15072__auto____1 = (function (state_23402){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23402);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23414){if((e23414 instanceof Object))
{var ex__15075__auto__ = e23414;var statearr_23415_23568 = state_23402;(statearr_23415_23568[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23402);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23414;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23569 = state_23402;
state_23402 = G__23569;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23402){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__23558,switch__15071__auto__,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_23416 = f__15087__auto__.call(null);(statearr_23416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23561);
return statearr_23416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__23558,c__15086__auto___23561,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
);

break;
case "compute":
var c__15086__auto___23570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23558,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__23558,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function (state_23429){var state_val_23430 = (state_23429[(1)]);if((state_val_23430 === (7)))
{var inst_23425 = (state_23429[(2)]);var state_23429__$1 = state_23429;var statearr_23431_23571 = state_23429__$1;(statearr_23431_23571[(2)] = inst_23425);
(statearr_23431_23571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23430 === (6)))
{var state_23429__$1 = state_23429;var statearr_23432_23572 = state_23429__$1;(statearr_23432_23572[(2)] = null);
(statearr_23432_23572[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23430 === (5)))
{var state_23429__$1 = state_23429;var statearr_23433_23573 = state_23429__$1;(statearr_23433_23573[(2)] = null);
(statearr_23433_23573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23430 === (4)))
{var inst_23419 = (state_23429[(2)]);var inst_23420 = process.call(null,inst_23419);var state_23429__$1 = state_23429;if(cljs.core.truth_(inst_23420))
{var statearr_23434_23574 = state_23429__$1;(statearr_23434_23574[(1)] = (5));
} else
{var statearr_23435_23575 = state_23429__$1;(statearr_23435_23575[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23430 === (3)))
{var inst_23427 = (state_23429[(2)]);var state_23429__$1 = state_23429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23429__$1,inst_23427);
} else
{if((state_val_23430 === (2)))
{var state_23429__$1 = state_23429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23429__$1,(4),jobs);
} else
{if((state_val_23430 === (1)))
{var state_23429__$1 = state_23429;var statearr_23436_23576 = state_23429__$1;(statearr_23436_23576[(2)] = null);
(statearr_23436_23576[(1)] = (2));
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
});})(__23558,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
;return ((function (__23558,switch__15071__auto__,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23440 = [null,null,null,null,null,null,null];(statearr_23440[(0)] = state_machine__15072__auto__);
(statearr_23440[(1)] = (1));
return statearr_23440;
});
var state_machine__15072__auto____1 = (function (state_23429){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23429);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23441){if((e23441 instanceof Object))
{var ex__15075__auto__ = e23441;var statearr_23442_23577 = state_23429;(statearr_23442_23577[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23441;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23578 = state_23429;
state_23429 = G__23578;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23429){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__23558,switch__15071__auto__,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_23443 = f__15087__auto__.call(null);(statearr_23443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23570);
return statearr_23443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__23558,c__15086__auto___23570,G__23389_23559,n__13416__auto___23557,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23579 = (__23558 + (1));
__23558 = G__23579;
continue;
}
} else
{}
break;
}
var c__15086__auto___23580 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23580,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23580,jobs,results,process,async){
return (function (state_23465){var state_val_23466 = (state_23465[(1)]);if((state_val_23466 === (9)))
{var inst_23458 = (state_23465[(2)]);var state_23465__$1 = (function (){var statearr_23467 = state_23465;(statearr_23467[(7)] = inst_23458);
return statearr_23467;
})();var statearr_23468_23581 = state_23465__$1;(statearr_23468_23581[(2)] = null);
(statearr_23468_23581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23466 === (8)))
{var inst_23451 = (state_23465[(8)]);var inst_23456 = (state_23465[(2)]);var state_23465__$1 = (function (){var statearr_23469 = state_23465;(statearr_23469[(9)] = inst_23456);
return statearr_23469;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23465__$1,(9),results,inst_23451);
} else
{if((state_val_23466 === (7)))
{var inst_23461 = (state_23465[(2)]);var state_23465__$1 = state_23465;var statearr_23470_23582 = state_23465__$1;(statearr_23470_23582[(2)] = inst_23461);
(statearr_23470_23582[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23466 === (6)))
{var inst_23451 = (state_23465[(8)]);var inst_23446 = (state_23465[(10)]);var inst_23451__$1 = cljs.core.async.chan.call(null,(1));var inst_23452 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23453 = [inst_23446,inst_23451__$1];var inst_23454 = (new cljs.core.PersistentVector(null,2,(5),inst_23452,inst_23453,null));var state_23465__$1 = (function (){var statearr_23471 = state_23465;(statearr_23471[(8)] = inst_23451__$1);
return statearr_23471;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23465__$1,(8),jobs,inst_23454);
} else
{if((state_val_23466 === (5)))
{var inst_23449 = cljs.core.async.close_BANG_.call(null,jobs);var state_23465__$1 = state_23465;var statearr_23472_23583 = state_23465__$1;(statearr_23472_23583[(2)] = inst_23449);
(statearr_23472_23583[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23466 === (4)))
{var inst_23446 = (state_23465[(10)]);var inst_23446__$1 = (state_23465[(2)]);var inst_23447 = (inst_23446__$1 == null);var state_23465__$1 = (function (){var statearr_23473 = state_23465;(statearr_23473[(10)] = inst_23446__$1);
return statearr_23473;
})();if(cljs.core.truth_(inst_23447))
{var statearr_23474_23584 = state_23465__$1;(statearr_23474_23584[(1)] = (5));
} else
{var statearr_23475_23585 = state_23465__$1;(statearr_23475_23585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23466 === (3)))
{var inst_23463 = (state_23465[(2)]);var state_23465__$1 = state_23465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23465__$1,inst_23463);
} else
{if((state_val_23466 === (2)))
{var state_23465__$1 = state_23465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23465__$1,(4),from);
} else
{if((state_val_23466 === (1)))
{var state_23465__$1 = state_23465;var statearr_23476_23586 = state_23465__$1;(statearr_23476_23586[(2)] = null);
(statearr_23476_23586[(1)] = (2));
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
});})(c__15086__auto___23580,jobs,results,process,async))
;return ((function (switch__15071__auto__,c__15086__auto___23580,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23480 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23480[(0)] = state_machine__15072__auto__);
(statearr_23480[(1)] = (1));
return statearr_23480;
});
var state_machine__15072__auto____1 = (function (state_23465){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23465);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23481){if((e23481 instanceof Object))
{var ex__15075__auto__ = e23481;var statearr_23482_23587 = state_23465;(statearr_23482_23587[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23481;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23588 = state_23465;
state_23465 = G__23588;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23465){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23580,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_23483 = f__15087__auto__.call(null);(statearr_23483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23580);
return statearr_23483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23580,jobs,results,process,async))
);
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,jobs,results,process,async){
return (function (state_23521){var state_val_23522 = (state_23521[(1)]);if((state_val_23522 === (7)))
{var inst_23517 = (state_23521[(2)]);var state_23521__$1 = state_23521;var statearr_23523_23589 = state_23521__$1;(statearr_23523_23589[(2)] = inst_23517);
(statearr_23523_23589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (20)))
{var state_23521__$1 = state_23521;var statearr_23524_23590 = state_23521__$1;(statearr_23524_23590[(2)] = null);
(statearr_23524_23590[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (1)))
{var state_23521__$1 = state_23521;var statearr_23525_23591 = state_23521__$1;(statearr_23525_23591[(2)] = null);
(statearr_23525_23591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (4)))
{var inst_23486 = (state_23521[(7)]);var inst_23486__$1 = (state_23521[(2)]);var inst_23487 = (inst_23486__$1 == null);var state_23521__$1 = (function (){var statearr_23526 = state_23521;(statearr_23526[(7)] = inst_23486__$1);
return statearr_23526;
})();if(cljs.core.truth_(inst_23487))
{var statearr_23527_23592 = state_23521__$1;(statearr_23527_23592[(1)] = (5));
} else
{var statearr_23528_23593 = state_23521__$1;(statearr_23528_23593[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (15)))
{var inst_23499 = (state_23521[(8)]);var state_23521__$1 = state_23521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23521__$1,(18),to,inst_23499);
} else
{if((state_val_23522 === (21)))
{var inst_23512 = (state_23521[(2)]);var state_23521__$1 = state_23521;var statearr_23529_23594 = state_23521__$1;(statearr_23529_23594[(2)] = inst_23512);
(statearr_23529_23594[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (13)))
{var inst_23514 = (state_23521[(2)]);var state_23521__$1 = (function (){var statearr_23530 = state_23521;(statearr_23530[(9)] = inst_23514);
return statearr_23530;
})();var statearr_23531_23595 = state_23521__$1;(statearr_23531_23595[(2)] = null);
(statearr_23531_23595[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (6)))
{var inst_23486 = (state_23521[(7)]);var state_23521__$1 = state_23521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23521__$1,(11),inst_23486);
} else
{if((state_val_23522 === (17)))
{var inst_23507 = (state_23521[(2)]);var state_23521__$1 = state_23521;if(cljs.core.truth_(inst_23507))
{var statearr_23532_23596 = state_23521__$1;(statearr_23532_23596[(1)] = (19));
} else
{var statearr_23533_23597 = state_23521__$1;(statearr_23533_23597[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (3)))
{var inst_23519 = (state_23521[(2)]);var state_23521__$1 = state_23521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23521__$1,inst_23519);
} else
{if((state_val_23522 === (12)))
{var inst_23496 = (state_23521[(10)]);var state_23521__$1 = state_23521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23521__$1,(14),inst_23496);
} else
{if((state_val_23522 === (2)))
{var state_23521__$1 = state_23521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23521__$1,(4),results);
} else
{if((state_val_23522 === (19)))
{var state_23521__$1 = state_23521;var statearr_23534_23598 = state_23521__$1;(statearr_23534_23598[(2)] = null);
(statearr_23534_23598[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (11)))
{var inst_23496 = (state_23521[(2)]);var state_23521__$1 = (function (){var statearr_23535 = state_23521;(statearr_23535[(10)] = inst_23496);
return statearr_23535;
})();var statearr_23536_23599 = state_23521__$1;(statearr_23536_23599[(2)] = null);
(statearr_23536_23599[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (9)))
{var state_23521__$1 = state_23521;var statearr_23537_23600 = state_23521__$1;(statearr_23537_23600[(2)] = null);
(statearr_23537_23600[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (5)))
{var state_23521__$1 = state_23521;if(cljs.core.truth_(close_QMARK_))
{var statearr_23538_23601 = state_23521__$1;(statearr_23538_23601[(1)] = (8));
} else
{var statearr_23539_23602 = state_23521__$1;(statearr_23539_23602[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (14)))
{var inst_23501 = (state_23521[(11)]);var inst_23499 = (state_23521[(8)]);var inst_23499__$1 = (state_23521[(2)]);var inst_23500 = (inst_23499__$1 == null);var inst_23501__$1 = cljs.core.not.call(null,inst_23500);var state_23521__$1 = (function (){var statearr_23540 = state_23521;(statearr_23540[(11)] = inst_23501__$1);
(statearr_23540[(8)] = inst_23499__$1);
return statearr_23540;
})();if(inst_23501__$1)
{var statearr_23541_23603 = state_23521__$1;(statearr_23541_23603[(1)] = (15));
} else
{var statearr_23542_23604 = state_23521__$1;(statearr_23542_23604[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (16)))
{var inst_23501 = (state_23521[(11)]);var state_23521__$1 = state_23521;var statearr_23543_23605 = state_23521__$1;(statearr_23543_23605[(2)] = inst_23501);
(statearr_23543_23605[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (10)))
{var inst_23493 = (state_23521[(2)]);var state_23521__$1 = state_23521;var statearr_23544_23606 = state_23521__$1;(statearr_23544_23606[(2)] = inst_23493);
(statearr_23544_23606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (18)))
{var inst_23504 = (state_23521[(2)]);var state_23521__$1 = state_23521;var statearr_23545_23607 = state_23521__$1;(statearr_23545_23607[(2)] = inst_23504);
(statearr_23545_23607[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23522 === (8)))
{var inst_23490 = cljs.core.async.close_BANG_.call(null,to);var state_23521__$1 = state_23521;var statearr_23546_23608 = state_23521__$1;(statearr_23546_23608[(2)] = inst_23490);
(statearr_23546_23608[(1)] = (10));
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
});})(c__15086__auto__,jobs,results,process,async))
;return ((function (switch__15071__auto__,c__15086__auto__,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23550 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23550[(0)] = state_machine__15072__auto__);
(statearr_23550[(1)] = (1));
return statearr_23550;
});
var state_machine__15072__auto____1 = (function (state_23521){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23521);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23551){if((e23551 instanceof Object))
{var ex__15075__auto__ = e23551;var statearr_23552_23609 = state_23521;(statearr_23552_23609[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23610 = state_23521;
state_23521 = G__23610;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23521){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_23553 = f__15087__auto__.call(null);(statearr_23553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_23553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,jobs,results,process,async))
);
return c__15086__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15086__auto___23711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23711,tc,fc){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23711,tc,fc){
return (function (state_23686){var state_val_23687 = (state_23686[(1)]);if((state_val_23687 === (7)))
{var inst_23682 = (state_23686[(2)]);var state_23686__$1 = state_23686;var statearr_23688_23712 = state_23686__$1;(statearr_23688_23712[(2)] = inst_23682);
(statearr_23688_23712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (1)))
{var state_23686__$1 = state_23686;var statearr_23689_23713 = state_23686__$1;(statearr_23689_23713[(2)] = null);
(statearr_23689_23713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (4)))
{var inst_23663 = (state_23686[(7)]);var inst_23663__$1 = (state_23686[(2)]);var inst_23664 = (inst_23663__$1 == null);var state_23686__$1 = (function (){var statearr_23690 = state_23686;(statearr_23690[(7)] = inst_23663__$1);
return statearr_23690;
})();if(cljs.core.truth_(inst_23664))
{var statearr_23691_23714 = state_23686__$1;(statearr_23691_23714[(1)] = (5));
} else
{var statearr_23692_23715 = state_23686__$1;(statearr_23692_23715[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (13)))
{var state_23686__$1 = state_23686;var statearr_23693_23716 = state_23686__$1;(statearr_23693_23716[(2)] = null);
(statearr_23693_23716[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (6)))
{var inst_23663 = (state_23686[(7)]);var inst_23669 = p.call(null,inst_23663);var state_23686__$1 = state_23686;if(cljs.core.truth_(inst_23669))
{var statearr_23694_23717 = state_23686__$1;(statearr_23694_23717[(1)] = (9));
} else
{var statearr_23695_23718 = state_23686__$1;(statearr_23695_23718[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (3)))
{var inst_23684 = (state_23686[(2)]);var state_23686__$1 = state_23686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23686__$1,inst_23684);
} else
{if((state_val_23687 === (12)))
{var state_23686__$1 = state_23686;var statearr_23696_23719 = state_23686__$1;(statearr_23696_23719[(2)] = null);
(statearr_23696_23719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (2)))
{var state_23686__$1 = state_23686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23686__$1,(4),ch);
} else
{if((state_val_23687 === (11)))
{var inst_23663 = (state_23686[(7)]);var inst_23673 = (state_23686[(2)]);var state_23686__$1 = state_23686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23686__$1,(8),inst_23673,inst_23663);
} else
{if((state_val_23687 === (9)))
{var state_23686__$1 = state_23686;var statearr_23697_23720 = state_23686__$1;(statearr_23697_23720[(2)] = tc);
(statearr_23697_23720[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (5)))
{var inst_23666 = cljs.core.async.close_BANG_.call(null,tc);var inst_23667 = cljs.core.async.close_BANG_.call(null,fc);var state_23686__$1 = (function (){var statearr_23698 = state_23686;(statearr_23698[(8)] = inst_23666);
return statearr_23698;
})();var statearr_23699_23721 = state_23686__$1;(statearr_23699_23721[(2)] = inst_23667);
(statearr_23699_23721[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (14)))
{var inst_23680 = (state_23686[(2)]);var state_23686__$1 = state_23686;var statearr_23700_23722 = state_23686__$1;(statearr_23700_23722[(2)] = inst_23680);
(statearr_23700_23722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (10)))
{var state_23686__$1 = state_23686;var statearr_23701_23723 = state_23686__$1;(statearr_23701_23723[(2)] = fc);
(statearr_23701_23723[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23687 === (8)))
{var inst_23675 = (state_23686[(2)]);var state_23686__$1 = state_23686;if(cljs.core.truth_(inst_23675))
{var statearr_23702_23724 = state_23686__$1;(statearr_23702_23724[(1)] = (12));
} else
{var statearr_23703_23725 = state_23686__$1;(statearr_23703_23725[(1)] = (13));
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
});})(c__15086__auto___23711,tc,fc))
;return ((function (switch__15071__auto__,c__15086__auto___23711,tc,fc){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23707 = [null,null,null,null,null,null,null,null,null];(statearr_23707[(0)] = state_machine__15072__auto__);
(statearr_23707[(1)] = (1));
return statearr_23707;
});
var state_machine__15072__auto____1 = (function (state_23686){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23686);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23708){if((e23708 instanceof Object))
{var ex__15075__auto__ = e23708;var statearr_23709_23726 = state_23686;(statearr_23709_23726[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23727 = state_23686;
state_23686 = G__23727;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23686){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23711,tc,fc))
})();var state__15088__auto__ = (function (){var statearr_23710 = f__15087__auto__.call(null);(statearr_23710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23711);
return statearr_23710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23711,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_23774){var state_val_23775 = (state_23774[(1)]);if((state_val_23775 === (7)))
{var inst_23770 = (state_23774[(2)]);var state_23774__$1 = state_23774;var statearr_23776_23792 = state_23774__$1;(statearr_23776_23792[(2)] = inst_23770);
(statearr_23776_23792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (6)))
{var inst_23763 = (state_23774[(7)]);var inst_23760 = (state_23774[(8)]);var inst_23767 = f.call(null,inst_23760,inst_23763);var inst_23760__$1 = inst_23767;var state_23774__$1 = (function (){var statearr_23777 = state_23774;(statearr_23777[(8)] = inst_23760__$1);
return statearr_23777;
})();var statearr_23778_23793 = state_23774__$1;(statearr_23778_23793[(2)] = null);
(statearr_23778_23793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (5)))
{var inst_23760 = (state_23774[(8)]);var state_23774__$1 = state_23774;var statearr_23779_23794 = state_23774__$1;(statearr_23779_23794[(2)] = inst_23760);
(statearr_23779_23794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (4)))
{var inst_23763 = (state_23774[(7)]);var inst_23763__$1 = (state_23774[(2)]);var inst_23764 = (inst_23763__$1 == null);var state_23774__$1 = (function (){var statearr_23780 = state_23774;(statearr_23780[(7)] = inst_23763__$1);
return statearr_23780;
})();if(cljs.core.truth_(inst_23764))
{var statearr_23781_23795 = state_23774__$1;(statearr_23781_23795[(1)] = (5));
} else
{var statearr_23782_23796 = state_23774__$1;(statearr_23782_23796[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23775 === (3)))
{var inst_23772 = (state_23774[(2)]);var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23774__$1,inst_23772);
} else
{if((state_val_23775 === (2)))
{var state_23774__$1 = state_23774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(4),ch);
} else
{if((state_val_23775 === (1)))
{var inst_23760 = init;var state_23774__$1 = (function (){var statearr_23783 = state_23774;(statearr_23783[(8)] = inst_23760);
return statearr_23783;
})();var statearr_23784_23797 = state_23774__$1;(statearr_23784_23797[(2)] = null);
(statearr_23784_23797[(1)] = (2));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23788 = [null,null,null,null,null,null,null,null,null];(statearr_23788[(0)] = state_machine__15072__auto__);
(statearr_23788[(1)] = (1));
return statearr_23788;
});
var state_machine__15072__auto____1 = (function (state_23774){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23774);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object))
{var ex__15075__auto__ = e23789;var statearr_23790_23798 = state_23774;(statearr_23790_23798[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23799 = state_23774;
state_23774 = G__23799;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23774){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_23791 = f__15087__auto__.call(null);(statearr_23791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_23791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_23873){var state_val_23874 = (state_23873[(1)]);if((state_val_23874 === (7)))
{var inst_23855 = (state_23873[(2)]);var state_23873__$1 = state_23873;var statearr_23875_23898 = state_23873__$1;(statearr_23875_23898[(2)] = inst_23855);
(statearr_23875_23898[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (1)))
{var inst_23849 = cljs.core.seq.call(null,coll);var inst_23850 = inst_23849;var state_23873__$1 = (function (){var statearr_23876 = state_23873;(statearr_23876[(7)] = inst_23850);
return statearr_23876;
})();var statearr_23877_23899 = state_23873__$1;(statearr_23877_23899[(2)] = null);
(statearr_23877_23899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (4)))
{var inst_23850 = (state_23873[(7)]);var inst_23853 = cljs.core.first.call(null,inst_23850);var state_23873__$1 = state_23873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23873__$1,(7),ch,inst_23853);
} else
{if((state_val_23874 === (13)))
{var inst_23867 = (state_23873[(2)]);var state_23873__$1 = state_23873;var statearr_23878_23900 = state_23873__$1;(statearr_23878_23900[(2)] = inst_23867);
(statearr_23878_23900[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (6)))
{var inst_23858 = (state_23873[(2)]);var state_23873__$1 = state_23873;if(cljs.core.truth_(inst_23858))
{var statearr_23879_23901 = state_23873__$1;(statearr_23879_23901[(1)] = (8));
} else
{var statearr_23880_23902 = state_23873__$1;(statearr_23880_23902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (3)))
{var inst_23871 = (state_23873[(2)]);var state_23873__$1 = state_23873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23873__$1,inst_23871);
} else
{if((state_val_23874 === (12)))
{var state_23873__$1 = state_23873;var statearr_23881_23903 = state_23873__$1;(statearr_23881_23903[(2)] = null);
(statearr_23881_23903[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (2)))
{var inst_23850 = (state_23873[(7)]);var state_23873__$1 = state_23873;if(cljs.core.truth_(inst_23850))
{var statearr_23882_23904 = state_23873__$1;(statearr_23882_23904[(1)] = (4));
} else
{var statearr_23883_23905 = state_23873__$1;(statearr_23883_23905[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (11)))
{var inst_23864 = cljs.core.async.close_BANG_.call(null,ch);var state_23873__$1 = state_23873;var statearr_23884_23906 = state_23873__$1;(statearr_23884_23906[(2)] = inst_23864);
(statearr_23884_23906[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (9)))
{var state_23873__$1 = state_23873;if(cljs.core.truth_(close_QMARK_))
{var statearr_23885_23907 = state_23873__$1;(statearr_23885_23907[(1)] = (11));
} else
{var statearr_23886_23908 = state_23873__$1;(statearr_23886_23908[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (5)))
{var inst_23850 = (state_23873[(7)]);var state_23873__$1 = state_23873;var statearr_23887_23909 = state_23873__$1;(statearr_23887_23909[(2)] = inst_23850);
(statearr_23887_23909[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (10)))
{var inst_23869 = (state_23873[(2)]);var state_23873__$1 = state_23873;var statearr_23888_23910 = state_23873__$1;(statearr_23888_23910[(2)] = inst_23869);
(statearr_23888_23910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23874 === (8)))
{var inst_23850 = (state_23873[(7)]);var inst_23860 = cljs.core.next.call(null,inst_23850);var inst_23850__$1 = inst_23860;var state_23873__$1 = (function (){var statearr_23889 = state_23873;(statearr_23889[(7)] = inst_23850__$1);
return statearr_23889;
})();var statearr_23890_23911 = state_23873__$1;(statearr_23890_23911[(2)] = null);
(statearr_23890_23911[(1)] = (2));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23894 = [null,null,null,null,null,null,null,null];(statearr_23894[(0)] = state_machine__15072__auto__);
(statearr_23894[(1)] = (1));
return statearr_23894;
});
var state_machine__15072__auto____1 = (function (state_23873){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23873);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object))
{var ex__15075__auto__ = e23895;var statearr_23896_23912 = state_23873;(statearr_23896_23912[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23913 = state_23873;
state_23873 = G__23913;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23873){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_23897 = f__15087__auto__.call(null);(statearr_23897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_23897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
cljs.core.async.Mux = (function (){var obj23915 = {};return obj23915;
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
cljs.core.async.Mult = (function (){var obj23917 = {};return obj23917;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24139 = (function (cs,ch,mult,meta24140){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24140 = meta24140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24139.cljs$lang$type = true;
cljs.core.async.t24139.cljs$lang$ctorStr = "cljs.core.async/t24139";
cljs.core.async.t24139.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24139");
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24139.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24141){var self__ = this;
var _24141__$1 = this;return self__.meta24140;
});})(cs))
;
cljs.core.async.t24139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24141,meta24140__$1){var self__ = this;
var _24141__$1 = this;return (new cljs.core.async.t24139(self__.cs,self__.ch,self__.mult,meta24140__$1));
});})(cs))
;
cljs.core.async.__GT_t24139 = ((function (cs){
return (function __GT_t24139(cs__$1,ch__$1,mult__$1,meta24140){return (new cljs.core.async.t24139(cs__$1,ch__$1,mult__$1,meta24140));
});})(cs))
;
}
return (new cljs.core.async.t24139(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15086__auto___24360 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___24360,cs,m,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___24360,cs,m,dchan,dctr,done){
return (function (state_24272){var state_val_24273 = (state_24272[(1)]);if((state_val_24273 === (7)))
{var inst_24268 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24274_24361 = state_24272__$1;(statearr_24274_24361[(2)] = inst_24268);
(statearr_24274_24361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (20)))
{var inst_24173 = (state_24272[(7)]);var inst_24183 = cljs.core.first.call(null,inst_24173);var inst_24184 = cljs.core.nth.call(null,inst_24183,(0),null);var inst_24185 = cljs.core.nth.call(null,inst_24183,(1),null);var state_24272__$1 = (function (){var statearr_24275 = state_24272;(statearr_24275[(8)] = inst_24184);
return statearr_24275;
})();if(cljs.core.truth_(inst_24185))
{var statearr_24276_24362 = state_24272__$1;(statearr_24276_24362[(1)] = (22));
} else
{var statearr_24277_24363 = state_24272__$1;(statearr_24277_24363[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (27)))
{var inst_24220 = (state_24272[(9)]);var inst_24215 = (state_24272[(10)]);var inst_24144 = (state_24272[(11)]);var inst_24213 = (state_24272[(12)]);var inst_24220__$1 = cljs.core._nth.call(null,inst_24213,inst_24215);var inst_24221 = cljs.core.async.put_BANG_.call(null,inst_24220__$1,inst_24144,done);var state_24272__$1 = (function (){var statearr_24278 = state_24272;(statearr_24278[(9)] = inst_24220__$1);
return statearr_24278;
})();if(cljs.core.truth_(inst_24221))
{var statearr_24279_24364 = state_24272__$1;(statearr_24279_24364[(1)] = (30));
} else
{var statearr_24280_24365 = state_24272__$1;(statearr_24280_24365[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (1)))
{var state_24272__$1 = state_24272;var statearr_24281_24366 = state_24272__$1;(statearr_24281_24366[(2)] = null);
(statearr_24281_24366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (24)))
{var inst_24173 = (state_24272[(7)]);var inst_24190 = (state_24272[(2)]);var inst_24191 = cljs.core.next.call(null,inst_24173);var inst_24153 = inst_24191;var inst_24154 = null;var inst_24155 = (0);var inst_24156 = (0);var state_24272__$1 = (function (){var statearr_24282 = state_24272;(statearr_24282[(13)] = inst_24190);
(statearr_24282[(14)] = inst_24155);
(statearr_24282[(15)] = inst_24153);
(statearr_24282[(16)] = inst_24156);
(statearr_24282[(17)] = inst_24154);
return statearr_24282;
})();var statearr_24283_24367 = state_24272__$1;(statearr_24283_24367[(2)] = null);
(statearr_24283_24367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (39)))
{var state_24272__$1 = state_24272;var statearr_24287_24368 = state_24272__$1;(statearr_24287_24368[(2)] = null);
(statearr_24287_24368[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (4)))
{var inst_24144 = (state_24272[(11)]);var inst_24144__$1 = (state_24272[(2)]);var inst_24145 = (inst_24144__$1 == null);var state_24272__$1 = (function (){var statearr_24288 = state_24272;(statearr_24288[(11)] = inst_24144__$1);
return statearr_24288;
})();if(cljs.core.truth_(inst_24145))
{var statearr_24289_24369 = state_24272__$1;(statearr_24289_24369[(1)] = (5));
} else
{var statearr_24290_24370 = state_24272__$1;(statearr_24290_24370[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (15)))
{var inst_24155 = (state_24272[(14)]);var inst_24153 = (state_24272[(15)]);var inst_24156 = (state_24272[(16)]);var inst_24154 = (state_24272[(17)]);var inst_24169 = (state_24272[(2)]);var inst_24170 = (inst_24156 + (1));var tmp24284 = inst_24155;var tmp24285 = inst_24153;var tmp24286 = inst_24154;var inst_24153__$1 = tmp24285;var inst_24154__$1 = tmp24286;var inst_24155__$1 = tmp24284;var inst_24156__$1 = inst_24170;var state_24272__$1 = (function (){var statearr_24291 = state_24272;(statearr_24291[(14)] = inst_24155__$1);
(statearr_24291[(15)] = inst_24153__$1);
(statearr_24291[(16)] = inst_24156__$1);
(statearr_24291[(18)] = inst_24169);
(statearr_24291[(17)] = inst_24154__$1);
return statearr_24291;
})();var statearr_24292_24371 = state_24272__$1;(statearr_24292_24371[(2)] = null);
(statearr_24292_24371[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (21)))
{var inst_24194 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24296_24372 = state_24272__$1;(statearr_24296_24372[(2)] = inst_24194);
(statearr_24296_24372[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (31)))
{var inst_24220 = (state_24272[(9)]);var inst_24224 = done.call(null,null);var inst_24225 = cljs.core.async.untap_STAR_.call(null,m,inst_24220);var state_24272__$1 = (function (){var statearr_24297 = state_24272;(statearr_24297[(19)] = inst_24224);
return statearr_24297;
})();var statearr_24298_24373 = state_24272__$1;(statearr_24298_24373[(2)] = inst_24225);
(statearr_24298_24373[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (32)))
{var inst_24212 = (state_24272[(20)]);var inst_24215 = (state_24272[(10)]);var inst_24213 = (state_24272[(12)]);var inst_24214 = (state_24272[(21)]);var inst_24227 = (state_24272[(2)]);var inst_24228 = (inst_24215 + (1));var tmp24293 = inst_24212;var tmp24294 = inst_24213;var tmp24295 = inst_24214;var inst_24212__$1 = tmp24293;var inst_24213__$1 = tmp24294;var inst_24214__$1 = tmp24295;var inst_24215__$1 = inst_24228;var state_24272__$1 = (function (){var statearr_24299 = state_24272;(statearr_24299[(20)] = inst_24212__$1);
(statearr_24299[(10)] = inst_24215__$1);
(statearr_24299[(22)] = inst_24227);
(statearr_24299[(12)] = inst_24213__$1);
(statearr_24299[(21)] = inst_24214__$1);
return statearr_24299;
})();var statearr_24300_24374 = state_24272__$1;(statearr_24300_24374[(2)] = null);
(statearr_24300_24374[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (40)))
{var inst_24240 = (state_24272[(23)]);var inst_24244 = done.call(null,null);var inst_24245 = cljs.core.async.untap_STAR_.call(null,m,inst_24240);var state_24272__$1 = (function (){var statearr_24301 = state_24272;(statearr_24301[(24)] = inst_24244);
return statearr_24301;
})();var statearr_24302_24375 = state_24272__$1;(statearr_24302_24375[(2)] = inst_24245);
(statearr_24302_24375[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (33)))
{var inst_24231 = (state_24272[(25)]);var inst_24233 = cljs.core.chunked_seq_QMARK_.call(null,inst_24231);var state_24272__$1 = state_24272;if(inst_24233)
{var statearr_24303_24376 = state_24272__$1;(statearr_24303_24376[(1)] = (36));
} else
{var statearr_24304_24377 = state_24272__$1;(statearr_24304_24377[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (13)))
{var inst_24163 = (state_24272[(26)]);var inst_24166 = cljs.core.async.close_BANG_.call(null,inst_24163);var state_24272__$1 = state_24272;var statearr_24305_24378 = state_24272__$1;(statearr_24305_24378[(2)] = inst_24166);
(statearr_24305_24378[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (22)))
{var inst_24184 = (state_24272[(8)]);var inst_24187 = cljs.core.async.close_BANG_.call(null,inst_24184);var state_24272__$1 = state_24272;var statearr_24306_24379 = state_24272__$1;(statearr_24306_24379[(2)] = inst_24187);
(statearr_24306_24379[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (36)))
{var inst_24231 = (state_24272[(25)]);var inst_24235 = cljs.core.chunk_first.call(null,inst_24231);var inst_24236 = cljs.core.chunk_rest.call(null,inst_24231);var inst_24237 = cljs.core.count.call(null,inst_24235);var inst_24212 = inst_24236;var inst_24213 = inst_24235;var inst_24214 = inst_24237;var inst_24215 = (0);var state_24272__$1 = (function (){var statearr_24307 = state_24272;(statearr_24307[(20)] = inst_24212);
(statearr_24307[(10)] = inst_24215);
(statearr_24307[(12)] = inst_24213);
(statearr_24307[(21)] = inst_24214);
return statearr_24307;
})();var statearr_24308_24380 = state_24272__$1;(statearr_24308_24380[(2)] = null);
(statearr_24308_24380[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (41)))
{var inst_24231 = (state_24272[(25)]);var inst_24247 = (state_24272[(2)]);var inst_24248 = cljs.core.next.call(null,inst_24231);var inst_24212 = inst_24248;var inst_24213 = null;var inst_24214 = (0);var inst_24215 = (0);var state_24272__$1 = (function (){var statearr_24309 = state_24272;(statearr_24309[(20)] = inst_24212);
(statearr_24309[(10)] = inst_24215);
(statearr_24309[(27)] = inst_24247);
(statearr_24309[(12)] = inst_24213);
(statearr_24309[(21)] = inst_24214);
return statearr_24309;
})();var statearr_24310_24381 = state_24272__$1;(statearr_24310_24381[(2)] = null);
(statearr_24310_24381[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (43)))
{var state_24272__$1 = state_24272;var statearr_24311_24382 = state_24272__$1;(statearr_24311_24382[(2)] = null);
(statearr_24311_24382[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (29)))
{var inst_24256 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24312_24383 = state_24272__$1;(statearr_24312_24383[(2)] = inst_24256);
(statearr_24312_24383[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (44)))
{var inst_24265 = (state_24272[(2)]);var state_24272__$1 = (function (){var statearr_24313 = state_24272;(statearr_24313[(28)] = inst_24265);
return statearr_24313;
})();var statearr_24314_24384 = state_24272__$1;(statearr_24314_24384[(2)] = null);
(statearr_24314_24384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (6)))
{var inst_24204 = (state_24272[(29)]);var inst_24203 = cljs.core.deref.call(null,cs);var inst_24204__$1 = cljs.core.keys.call(null,inst_24203);var inst_24205 = cljs.core.count.call(null,inst_24204__$1);var inst_24206 = cljs.core.reset_BANG_.call(null,dctr,inst_24205);var inst_24211 = cljs.core.seq.call(null,inst_24204__$1);var inst_24212 = inst_24211;var inst_24213 = null;var inst_24214 = (0);var inst_24215 = (0);var state_24272__$1 = (function (){var statearr_24315 = state_24272;(statearr_24315[(30)] = inst_24206);
(statearr_24315[(20)] = inst_24212);
(statearr_24315[(10)] = inst_24215);
(statearr_24315[(29)] = inst_24204__$1);
(statearr_24315[(12)] = inst_24213);
(statearr_24315[(21)] = inst_24214);
return statearr_24315;
})();var statearr_24316_24385 = state_24272__$1;(statearr_24316_24385[(2)] = null);
(statearr_24316_24385[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (28)))
{var inst_24212 = (state_24272[(20)]);var inst_24231 = (state_24272[(25)]);var inst_24231__$1 = cljs.core.seq.call(null,inst_24212);var state_24272__$1 = (function (){var statearr_24317 = state_24272;(statearr_24317[(25)] = inst_24231__$1);
return statearr_24317;
})();if(inst_24231__$1)
{var statearr_24318_24386 = state_24272__$1;(statearr_24318_24386[(1)] = (33));
} else
{var statearr_24319_24387 = state_24272__$1;(statearr_24319_24387[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (25)))
{var inst_24215 = (state_24272[(10)]);var inst_24214 = (state_24272[(21)]);var inst_24217 = (inst_24215 < inst_24214);var inst_24218 = inst_24217;var state_24272__$1 = state_24272;if(cljs.core.truth_(inst_24218))
{var statearr_24320_24388 = state_24272__$1;(statearr_24320_24388[(1)] = (27));
} else
{var statearr_24321_24389 = state_24272__$1;(statearr_24321_24389[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (34)))
{var state_24272__$1 = state_24272;var statearr_24322_24390 = state_24272__$1;(statearr_24322_24390[(2)] = null);
(statearr_24322_24390[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (17)))
{var state_24272__$1 = state_24272;var statearr_24323_24391 = state_24272__$1;(statearr_24323_24391[(2)] = null);
(statearr_24323_24391[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (3)))
{var inst_24270 = (state_24272[(2)]);var state_24272__$1 = state_24272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else
{if((state_val_24273 === (12)))
{var inst_24199 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24324_24392 = state_24272__$1;(statearr_24324_24392[(2)] = inst_24199);
(statearr_24324_24392[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (2)))
{var state_24272__$1 = state_24272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(4),ch);
} else
{if((state_val_24273 === (23)))
{var state_24272__$1 = state_24272;var statearr_24325_24393 = state_24272__$1;(statearr_24325_24393[(2)] = null);
(statearr_24325_24393[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (35)))
{var inst_24254 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24326_24394 = state_24272__$1;(statearr_24326_24394[(2)] = inst_24254);
(statearr_24326_24394[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (19)))
{var inst_24173 = (state_24272[(7)]);var inst_24177 = cljs.core.chunk_first.call(null,inst_24173);var inst_24178 = cljs.core.chunk_rest.call(null,inst_24173);var inst_24179 = cljs.core.count.call(null,inst_24177);var inst_24153 = inst_24178;var inst_24154 = inst_24177;var inst_24155 = inst_24179;var inst_24156 = (0);var state_24272__$1 = (function (){var statearr_24327 = state_24272;(statearr_24327[(14)] = inst_24155);
(statearr_24327[(15)] = inst_24153);
(statearr_24327[(16)] = inst_24156);
(statearr_24327[(17)] = inst_24154);
return statearr_24327;
})();var statearr_24328_24395 = state_24272__$1;(statearr_24328_24395[(2)] = null);
(statearr_24328_24395[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (11)))
{var inst_24173 = (state_24272[(7)]);var inst_24153 = (state_24272[(15)]);var inst_24173__$1 = cljs.core.seq.call(null,inst_24153);var state_24272__$1 = (function (){var statearr_24329 = state_24272;(statearr_24329[(7)] = inst_24173__$1);
return statearr_24329;
})();if(inst_24173__$1)
{var statearr_24330_24396 = state_24272__$1;(statearr_24330_24396[(1)] = (16));
} else
{var statearr_24331_24397 = state_24272__$1;(statearr_24331_24397[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (9)))
{var inst_24201 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24332_24398 = state_24272__$1;(statearr_24332_24398[(2)] = inst_24201);
(statearr_24332_24398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (5)))
{var inst_24151 = cljs.core.deref.call(null,cs);var inst_24152 = cljs.core.seq.call(null,inst_24151);var inst_24153 = inst_24152;var inst_24154 = null;var inst_24155 = (0);var inst_24156 = (0);var state_24272__$1 = (function (){var statearr_24333 = state_24272;(statearr_24333[(14)] = inst_24155);
(statearr_24333[(15)] = inst_24153);
(statearr_24333[(16)] = inst_24156);
(statearr_24333[(17)] = inst_24154);
return statearr_24333;
})();var statearr_24334_24399 = state_24272__$1;(statearr_24334_24399[(2)] = null);
(statearr_24334_24399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (14)))
{var state_24272__$1 = state_24272;var statearr_24335_24400 = state_24272__$1;(statearr_24335_24400[(2)] = null);
(statearr_24335_24400[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (45)))
{var inst_24262 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24336_24401 = state_24272__$1;(statearr_24336_24401[(2)] = inst_24262);
(statearr_24336_24401[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (26)))
{var inst_24204 = (state_24272[(29)]);var inst_24258 = (state_24272[(2)]);var inst_24259 = cljs.core.seq.call(null,inst_24204);var state_24272__$1 = (function (){var statearr_24337 = state_24272;(statearr_24337[(31)] = inst_24258);
return statearr_24337;
})();if(inst_24259)
{var statearr_24338_24402 = state_24272__$1;(statearr_24338_24402[(1)] = (42));
} else
{var statearr_24339_24403 = state_24272__$1;(statearr_24339_24403[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (16)))
{var inst_24173 = (state_24272[(7)]);var inst_24175 = cljs.core.chunked_seq_QMARK_.call(null,inst_24173);var state_24272__$1 = state_24272;if(inst_24175)
{var statearr_24340_24404 = state_24272__$1;(statearr_24340_24404[(1)] = (19));
} else
{var statearr_24341_24405 = state_24272__$1;(statearr_24341_24405[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (38)))
{var inst_24251 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24342_24406 = state_24272__$1;(statearr_24342_24406[(2)] = inst_24251);
(statearr_24342_24406[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (30)))
{var state_24272__$1 = state_24272;var statearr_24343_24407 = state_24272__$1;(statearr_24343_24407[(2)] = null);
(statearr_24343_24407[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (10)))
{var inst_24156 = (state_24272[(16)]);var inst_24154 = (state_24272[(17)]);var inst_24162 = cljs.core._nth.call(null,inst_24154,inst_24156);var inst_24163 = cljs.core.nth.call(null,inst_24162,(0),null);var inst_24164 = cljs.core.nth.call(null,inst_24162,(1),null);var state_24272__$1 = (function (){var statearr_24344 = state_24272;(statearr_24344[(26)] = inst_24163);
return statearr_24344;
})();if(cljs.core.truth_(inst_24164))
{var statearr_24345_24408 = state_24272__$1;(statearr_24345_24408[(1)] = (13));
} else
{var statearr_24346_24409 = state_24272__$1;(statearr_24346_24409[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (18)))
{var inst_24197 = (state_24272[(2)]);var state_24272__$1 = state_24272;var statearr_24347_24410 = state_24272__$1;(statearr_24347_24410[(2)] = inst_24197);
(statearr_24347_24410[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (42)))
{var state_24272__$1 = state_24272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(45),dchan);
} else
{if((state_val_24273 === (37)))
{var inst_24240 = (state_24272[(23)]);var inst_24144 = (state_24272[(11)]);var inst_24231 = (state_24272[(25)]);var inst_24240__$1 = cljs.core.first.call(null,inst_24231);var inst_24241 = cljs.core.async.put_BANG_.call(null,inst_24240__$1,inst_24144,done);var state_24272__$1 = (function (){var statearr_24348 = state_24272;(statearr_24348[(23)] = inst_24240__$1);
return statearr_24348;
})();if(cljs.core.truth_(inst_24241))
{var statearr_24349_24411 = state_24272__$1;(statearr_24349_24411[(1)] = (39));
} else
{var statearr_24350_24412 = state_24272__$1;(statearr_24350_24412[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24273 === (8)))
{var inst_24155 = (state_24272[(14)]);var inst_24156 = (state_24272[(16)]);var inst_24158 = (inst_24156 < inst_24155);var inst_24159 = inst_24158;var state_24272__$1 = state_24272;if(cljs.core.truth_(inst_24159))
{var statearr_24351_24413 = state_24272__$1;(statearr_24351_24413[(1)] = (10));
} else
{var statearr_24352_24414 = state_24272__$1;(statearr_24352_24414[(1)] = (11));
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
});})(c__15086__auto___24360,cs,m,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___24360,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24356[(0)] = state_machine__15072__auto__);
(statearr_24356[(1)] = (1));
return statearr_24356;
});
var state_machine__15072__auto____1 = (function (state_24272){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24272);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object))
{var ex__15075__auto__ = e24357;var statearr_24358_24415 = state_24272;(statearr_24358_24415[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24357;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24416 = state_24272;
state_24272 = G__24416;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___24360,cs,m,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_24359 = f__15087__auto__.call(null);(statearr_24359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___24360);
return statearr_24359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___24360,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24418 = {};return obj24418;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24419){var map__24424 = p__24419;var map__24424__$1 = ((cljs.core.seq_QMARK_.call(null,map__24424))?cljs.core.apply.call(null,cljs.core.hash_map,map__24424):map__24424);var opts = map__24424__$1;var statearr_24425_24428 = state;(statearr_24425_24428[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24424,map__24424__$1,opts){
return (function (val){var statearr_24426_24429 = state;(statearr_24426_24429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24424,map__24424__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24427_24430 = state;(statearr_24427_24430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24419 = null;if (arguments.length > 3) {
  p__24419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24419);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24431){
var state = cljs.core.first(arglist__24431);
arglist__24431 = cljs.core.next(arglist__24431);
var cont_block = cljs.core.first(arglist__24431);
arglist__24431 = cljs.core.next(arglist__24431);
var ports = cljs.core.first(arglist__24431);
var p__24419 = cljs.core.rest(arglist__24431);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24419);
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
;var m = (function (){if(typeof cljs.core.async.t24551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24551 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24552){
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
this.meta24552 = meta24552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24551.cljs$lang$type = true;
cljs.core.async.t24551.cljs$lang$ctorStr = "cljs.core.async/t24551";
cljs.core.async.t24551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24553){var self__ = this;
var _24553__$1 = this;return self__.meta24552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24553,meta24552__$1){var self__ = this;
var _24553__$1 = this;return (new cljs.core.async.t24551(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24552){return (new cljs.core.async.t24551(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24551(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15086__auto___24670 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24623){var state_val_24624 = (state_24623[(1)]);if((state_val_24624 === (7)))
{var inst_24567 = (state_24623[(7)]);var inst_24572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24567);var state_24623__$1 = state_24623;var statearr_24625_24671 = state_24623__$1;(statearr_24625_24671[(2)] = inst_24572);
(statearr_24625_24671[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (20)))
{var inst_24582 = (state_24623[(8)]);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24623__$1,(23),out,inst_24582);
} else
{if((state_val_24624 === (1)))
{var inst_24557 = (state_24623[(9)]);var inst_24557__$1 = calc_state.call(null);var inst_24558 = cljs.core.seq_QMARK_.call(null,inst_24557__$1);var state_24623__$1 = (function (){var statearr_24626 = state_24623;(statearr_24626[(9)] = inst_24557__$1);
return statearr_24626;
})();if(inst_24558)
{var statearr_24627_24672 = state_24623__$1;(statearr_24627_24672[(1)] = (2));
} else
{var statearr_24628_24673 = state_24623__$1;(statearr_24628_24673[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (24)))
{var inst_24575 = (state_24623[(10)]);var inst_24567 = inst_24575;var state_24623__$1 = (function (){var statearr_24629 = state_24623;(statearr_24629[(7)] = inst_24567);
return statearr_24629;
})();var statearr_24630_24674 = state_24623__$1;(statearr_24630_24674[(2)] = null);
(statearr_24630_24674[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (4)))
{var inst_24557 = (state_24623[(9)]);var inst_24563 = (state_24623[(2)]);var inst_24564 = cljs.core.get.call(null,inst_24563,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24565 = cljs.core.get.call(null,inst_24563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24566 = cljs.core.get.call(null,inst_24563,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24567 = inst_24557;var state_24623__$1 = (function (){var statearr_24631 = state_24623;(statearr_24631[(11)] = inst_24564);
(statearr_24631[(7)] = inst_24567);
(statearr_24631[(12)] = inst_24565);
(statearr_24631[(13)] = inst_24566);
return statearr_24631;
})();var statearr_24632_24675 = state_24623__$1;(statearr_24632_24675[(2)] = null);
(statearr_24632_24675[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (15)))
{var state_24623__$1 = state_24623;var statearr_24633_24676 = state_24623__$1;(statearr_24633_24676[(2)] = null);
(statearr_24633_24676[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (21)))
{var inst_24575 = (state_24623[(10)]);var inst_24567 = inst_24575;var state_24623__$1 = (function (){var statearr_24634 = state_24623;(statearr_24634[(7)] = inst_24567);
return statearr_24634;
})();var statearr_24635_24677 = state_24623__$1;(statearr_24635_24677[(2)] = null);
(statearr_24635_24677[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (13)))
{var inst_24619 = (state_24623[(2)]);var state_24623__$1 = state_24623;var statearr_24636_24678 = state_24623__$1;(statearr_24636_24678[(2)] = inst_24619);
(statearr_24636_24678[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (22)))
{var inst_24617 = (state_24623[(2)]);var state_24623__$1 = state_24623;var statearr_24637_24679 = state_24623__$1;(statearr_24637_24679[(2)] = inst_24617);
(statearr_24637_24679[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (6)))
{var inst_24621 = (state_24623[(2)]);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24623__$1,inst_24621);
} else
{if((state_val_24624 === (25)))
{var state_24623__$1 = state_24623;var statearr_24638_24680 = state_24623__$1;(statearr_24638_24680[(2)] = null);
(statearr_24638_24680[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (17)))
{var inst_24597 = (state_24623[(14)]);var state_24623__$1 = state_24623;var statearr_24639_24681 = state_24623__$1;(statearr_24639_24681[(2)] = inst_24597);
(statearr_24639_24681[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (3)))
{var inst_24557 = (state_24623[(9)]);var state_24623__$1 = state_24623;var statearr_24640_24682 = state_24623__$1;(statearr_24640_24682[(2)] = inst_24557);
(statearr_24640_24682[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (12)))
{var inst_24583 = (state_24623[(15)]);var inst_24597 = (state_24623[(14)]);var inst_24578 = (state_24623[(16)]);var inst_24597__$1 = inst_24578.call(null,inst_24583);var state_24623__$1 = (function (){var statearr_24641 = state_24623;(statearr_24641[(14)] = inst_24597__$1);
return statearr_24641;
})();if(cljs.core.truth_(inst_24597__$1))
{var statearr_24642_24683 = state_24623__$1;(statearr_24642_24683[(1)] = (17));
} else
{var statearr_24643_24684 = state_24623__$1;(statearr_24643_24684[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (2)))
{var inst_24557 = (state_24623[(9)]);var inst_24560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24557);var state_24623__$1 = state_24623;var statearr_24644_24685 = state_24623__$1;(statearr_24644_24685[(2)] = inst_24560);
(statearr_24644_24685[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (23)))
{var inst_24608 = (state_24623[(2)]);var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24608))
{var statearr_24645_24686 = state_24623__$1;(statearr_24645_24686[(1)] = (24));
} else
{var statearr_24646_24687 = state_24623__$1;(statearr_24646_24687[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (19)))
{var inst_24605 = (state_24623[(2)]);var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24605))
{var statearr_24647_24688 = state_24623__$1;(statearr_24647_24688[(1)] = (20));
} else
{var statearr_24648_24689 = state_24623__$1;(statearr_24648_24689[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (11)))
{var inst_24582 = (state_24623[(8)]);var inst_24588 = (inst_24582 == null);var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24588))
{var statearr_24649_24690 = state_24623__$1;(statearr_24649_24690[(1)] = (14));
} else
{var statearr_24650_24691 = state_24623__$1;(statearr_24650_24691[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (9)))
{var inst_24575 = (state_24623[(10)]);var inst_24575__$1 = (state_24623[(2)]);var inst_24576 = cljs.core.get.call(null,inst_24575__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24577 = cljs.core.get.call(null,inst_24575__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24578 = cljs.core.get.call(null,inst_24575__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24623__$1 = (function (){var statearr_24651 = state_24623;(statearr_24651[(10)] = inst_24575__$1);
(statearr_24651[(17)] = inst_24577);
(statearr_24651[(16)] = inst_24578);
return statearr_24651;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24623__$1,(10),inst_24576);
} else
{if((state_val_24624 === (5)))
{var inst_24567 = (state_24623[(7)]);var inst_24570 = cljs.core.seq_QMARK_.call(null,inst_24567);var state_24623__$1 = state_24623;if(inst_24570)
{var statearr_24652_24692 = state_24623__$1;(statearr_24652_24692[(1)] = (7));
} else
{var statearr_24653_24693 = state_24623__$1;(statearr_24653_24693[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (14)))
{var inst_24583 = (state_24623[(15)]);var inst_24590 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24583);var state_24623__$1 = state_24623;var statearr_24654_24694 = state_24623__$1;(statearr_24654_24694[(2)] = inst_24590);
(statearr_24654_24694[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (26)))
{var inst_24613 = (state_24623[(2)]);var state_24623__$1 = state_24623;var statearr_24655_24695 = state_24623__$1;(statearr_24655_24695[(2)] = inst_24613);
(statearr_24655_24695[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (16)))
{var inst_24593 = (state_24623[(2)]);var inst_24594 = calc_state.call(null);var inst_24567 = inst_24594;var state_24623__$1 = (function (){var statearr_24656 = state_24623;(statearr_24656[(7)] = inst_24567);
(statearr_24656[(18)] = inst_24593);
return statearr_24656;
})();var statearr_24657_24696 = state_24623__$1;(statearr_24657_24696[(2)] = null);
(statearr_24657_24696[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (10)))
{var inst_24583 = (state_24623[(15)]);var inst_24582 = (state_24623[(8)]);var inst_24581 = (state_24623[(2)]);var inst_24582__$1 = cljs.core.nth.call(null,inst_24581,(0),null);var inst_24583__$1 = cljs.core.nth.call(null,inst_24581,(1),null);var inst_24584 = (inst_24582__$1 == null);var inst_24585 = cljs.core._EQ_.call(null,inst_24583__$1,change);var inst_24586 = (inst_24584) || (inst_24585);var state_24623__$1 = (function (){var statearr_24658 = state_24623;(statearr_24658[(15)] = inst_24583__$1);
(statearr_24658[(8)] = inst_24582__$1);
return statearr_24658;
})();if(cljs.core.truth_(inst_24586))
{var statearr_24659_24697 = state_24623__$1;(statearr_24659_24697[(1)] = (11));
} else
{var statearr_24660_24698 = state_24623__$1;(statearr_24660_24698[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (18)))
{var inst_24583 = (state_24623[(15)]);var inst_24577 = (state_24623[(17)]);var inst_24578 = (state_24623[(16)]);var inst_24600 = cljs.core.empty_QMARK_.call(null,inst_24578);var inst_24601 = inst_24577.call(null,inst_24583);var inst_24602 = cljs.core.not.call(null,inst_24601);var inst_24603 = (inst_24600) && (inst_24602);var state_24623__$1 = state_24623;var statearr_24661_24699 = state_24623__$1;(statearr_24661_24699[(2)] = inst_24603);
(statearr_24661_24699[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24624 === (8)))
{var inst_24567 = (state_24623[(7)]);var state_24623__$1 = state_24623;var statearr_24662_24700 = state_24623__$1;(statearr_24662_24700[(2)] = inst_24567);
(statearr_24662_24700[(1)] = (9));
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
});})(c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15071__auto__,c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24666[(0)] = state_machine__15072__auto__);
(statearr_24666[(1)] = (1));
return statearr_24666;
});
var state_machine__15072__auto____1 = (function (state_24623){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24623);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object))
{var ex__15075__auto__ = e24667;var statearr_24668_24701 = state_24623;(statearr_24668_24701[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24667;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24702 = state_24623;
state_24623 = G__24702;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24623){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15088__auto__ = (function (){var statearr_24669 = f__15087__auto__.call(null);(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___24670);
return statearr_24669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___24670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24704 = {};return obj24704;
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
return (function (p1__24705_SHARP_){if(cljs.core.truth_(p1__24705_SHARP_.call(null,topic)))
{return p1__24705_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24828 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24829){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24829 = meta24829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24828.cljs$lang$type = true;
cljs.core.async.t24828.cljs$lang$ctorStr = "cljs.core.async/t24828";
cljs.core.async.t24828.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24828");
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24828.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24830){var self__ = this;
var _24830__$1 = this;return self__.meta24829;
});})(mults,ensure_mult))
;
cljs.core.async.t24828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24830,meta24829__$1){var self__ = this;
var _24830__$1 = this;return (new cljs.core.async.t24828(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24829__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24828 = ((function (mults,ensure_mult){
return (function __GT_t24828(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24829){return (new cljs.core.async.t24828(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24829));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24828(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15086__auto___24950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___24950,mults,ensure_mult,p){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___24950,mults,ensure_mult,p){
return (function (state_24902){var state_val_24903 = (state_24902[(1)]);if((state_val_24903 === (7)))
{var inst_24898 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24904_24951 = state_24902__$1;(statearr_24904_24951[(2)] = inst_24898);
(statearr_24904_24951[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (20)))
{var state_24902__$1 = state_24902;var statearr_24905_24952 = state_24902__$1;(statearr_24905_24952[(2)] = null);
(statearr_24905_24952[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (1)))
{var state_24902__$1 = state_24902;var statearr_24906_24953 = state_24902__$1;(statearr_24906_24953[(2)] = null);
(statearr_24906_24953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (24)))
{var inst_24881 = (state_24902[(7)]);var inst_24890 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24881);var state_24902__$1 = state_24902;var statearr_24907_24954 = state_24902__$1;(statearr_24907_24954[(2)] = inst_24890);
(statearr_24907_24954[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (4)))
{var inst_24833 = (state_24902[(8)]);var inst_24833__$1 = (state_24902[(2)]);var inst_24834 = (inst_24833__$1 == null);var state_24902__$1 = (function (){var statearr_24908 = state_24902;(statearr_24908[(8)] = inst_24833__$1);
return statearr_24908;
})();if(cljs.core.truth_(inst_24834))
{var statearr_24909_24955 = state_24902__$1;(statearr_24909_24955[(1)] = (5));
} else
{var statearr_24910_24956 = state_24902__$1;(statearr_24910_24956[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (15)))
{var inst_24875 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24911_24957 = state_24902__$1;(statearr_24911_24957[(2)] = inst_24875);
(statearr_24911_24957[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (21)))
{var inst_24895 = (state_24902[(2)]);var state_24902__$1 = (function (){var statearr_24912 = state_24902;(statearr_24912[(9)] = inst_24895);
return statearr_24912;
})();var statearr_24913_24958 = state_24902__$1;(statearr_24913_24958[(2)] = null);
(statearr_24913_24958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (13)))
{var inst_24857 = (state_24902[(10)]);var inst_24859 = cljs.core.chunked_seq_QMARK_.call(null,inst_24857);var state_24902__$1 = state_24902;if(inst_24859)
{var statearr_24914_24959 = state_24902__$1;(statearr_24914_24959[(1)] = (16));
} else
{var statearr_24915_24960 = state_24902__$1;(statearr_24915_24960[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (22)))
{var inst_24887 = (state_24902[(2)]);var state_24902__$1 = state_24902;if(cljs.core.truth_(inst_24887))
{var statearr_24916_24961 = state_24902__$1;(statearr_24916_24961[(1)] = (23));
} else
{var statearr_24917_24962 = state_24902__$1;(statearr_24917_24962[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (6)))
{var inst_24833 = (state_24902[(8)]);var inst_24881 = (state_24902[(7)]);var inst_24883 = (state_24902[(11)]);var inst_24881__$1 = topic_fn.call(null,inst_24833);var inst_24882 = cljs.core.deref.call(null,mults);var inst_24883__$1 = cljs.core.get.call(null,inst_24882,inst_24881__$1);var state_24902__$1 = (function (){var statearr_24918 = state_24902;(statearr_24918[(7)] = inst_24881__$1);
(statearr_24918[(11)] = inst_24883__$1);
return statearr_24918;
})();if(cljs.core.truth_(inst_24883__$1))
{var statearr_24919_24963 = state_24902__$1;(statearr_24919_24963[(1)] = (19));
} else
{var statearr_24920_24964 = state_24902__$1;(statearr_24920_24964[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (25)))
{var inst_24892 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24921_24965 = state_24902__$1;(statearr_24921_24965[(2)] = inst_24892);
(statearr_24921_24965[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (17)))
{var inst_24857 = (state_24902[(10)]);var inst_24866 = cljs.core.first.call(null,inst_24857);var inst_24867 = cljs.core.async.muxch_STAR_.call(null,inst_24866);var inst_24868 = cljs.core.async.close_BANG_.call(null,inst_24867);var inst_24869 = cljs.core.next.call(null,inst_24857);var inst_24843 = inst_24869;var inst_24844 = null;var inst_24845 = (0);var inst_24846 = (0);var state_24902__$1 = (function (){var statearr_24922 = state_24902;(statearr_24922[(12)] = inst_24844);
(statearr_24922[(13)] = inst_24845);
(statearr_24922[(14)] = inst_24846);
(statearr_24922[(15)] = inst_24843);
(statearr_24922[(16)] = inst_24868);
return statearr_24922;
})();var statearr_24923_24966 = state_24902__$1;(statearr_24923_24966[(2)] = null);
(statearr_24923_24966[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (3)))
{var inst_24900 = (state_24902[(2)]);var state_24902__$1 = state_24902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24902__$1,inst_24900);
} else
{if((state_val_24903 === (12)))
{var inst_24877 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24924_24967 = state_24902__$1;(statearr_24924_24967[(2)] = inst_24877);
(statearr_24924_24967[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (2)))
{var state_24902__$1 = state_24902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24902__$1,(4),ch);
} else
{if((state_val_24903 === (23)))
{var state_24902__$1 = state_24902;var statearr_24925_24968 = state_24902__$1;(statearr_24925_24968[(2)] = null);
(statearr_24925_24968[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (19)))
{var inst_24833 = (state_24902[(8)]);var inst_24883 = (state_24902[(11)]);var inst_24885 = cljs.core.async.muxch_STAR_.call(null,inst_24883);var state_24902__$1 = state_24902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24902__$1,(22),inst_24885,inst_24833);
} else
{if((state_val_24903 === (11)))
{var inst_24857 = (state_24902[(10)]);var inst_24843 = (state_24902[(15)]);var inst_24857__$1 = cljs.core.seq.call(null,inst_24843);var state_24902__$1 = (function (){var statearr_24926 = state_24902;(statearr_24926[(10)] = inst_24857__$1);
return statearr_24926;
})();if(inst_24857__$1)
{var statearr_24927_24969 = state_24902__$1;(statearr_24927_24969[(1)] = (13));
} else
{var statearr_24928_24970 = state_24902__$1;(statearr_24928_24970[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (9)))
{var inst_24879 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24929_24971 = state_24902__$1;(statearr_24929_24971[(2)] = inst_24879);
(statearr_24929_24971[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (5)))
{var inst_24840 = cljs.core.deref.call(null,mults);var inst_24841 = cljs.core.vals.call(null,inst_24840);var inst_24842 = cljs.core.seq.call(null,inst_24841);var inst_24843 = inst_24842;var inst_24844 = null;var inst_24845 = (0);var inst_24846 = (0);var state_24902__$1 = (function (){var statearr_24930 = state_24902;(statearr_24930[(12)] = inst_24844);
(statearr_24930[(13)] = inst_24845);
(statearr_24930[(14)] = inst_24846);
(statearr_24930[(15)] = inst_24843);
return statearr_24930;
})();var statearr_24931_24972 = state_24902__$1;(statearr_24931_24972[(2)] = null);
(statearr_24931_24972[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (14)))
{var state_24902__$1 = state_24902;var statearr_24935_24973 = state_24902__$1;(statearr_24935_24973[(2)] = null);
(statearr_24935_24973[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (16)))
{var inst_24857 = (state_24902[(10)]);var inst_24861 = cljs.core.chunk_first.call(null,inst_24857);var inst_24862 = cljs.core.chunk_rest.call(null,inst_24857);var inst_24863 = cljs.core.count.call(null,inst_24861);var inst_24843 = inst_24862;var inst_24844 = inst_24861;var inst_24845 = inst_24863;var inst_24846 = (0);var state_24902__$1 = (function (){var statearr_24936 = state_24902;(statearr_24936[(12)] = inst_24844);
(statearr_24936[(13)] = inst_24845);
(statearr_24936[(14)] = inst_24846);
(statearr_24936[(15)] = inst_24843);
return statearr_24936;
})();var statearr_24937_24974 = state_24902__$1;(statearr_24937_24974[(2)] = null);
(statearr_24937_24974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (10)))
{var inst_24844 = (state_24902[(12)]);var inst_24845 = (state_24902[(13)]);var inst_24846 = (state_24902[(14)]);var inst_24843 = (state_24902[(15)]);var inst_24851 = cljs.core._nth.call(null,inst_24844,inst_24846);var inst_24852 = cljs.core.async.muxch_STAR_.call(null,inst_24851);var inst_24853 = cljs.core.async.close_BANG_.call(null,inst_24852);var inst_24854 = (inst_24846 + (1));var tmp24932 = inst_24844;var tmp24933 = inst_24845;var tmp24934 = inst_24843;var inst_24843__$1 = tmp24934;var inst_24844__$1 = tmp24932;var inst_24845__$1 = tmp24933;var inst_24846__$1 = inst_24854;var state_24902__$1 = (function (){var statearr_24938 = state_24902;(statearr_24938[(12)] = inst_24844__$1);
(statearr_24938[(17)] = inst_24853);
(statearr_24938[(13)] = inst_24845__$1);
(statearr_24938[(14)] = inst_24846__$1);
(statearr_24938[(15)] = inst_24843__$1);
return statearr_24938;
})();var statearr_24939_24975 = state_24902__$1;(statearr_24939_24975[(2)] = null);
(statearr_24939_24975[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (18)))
{var inst_24872 = (state_24902[(2)]);var state_24902__$1 = state_24902;var statearr_24940_24976 = state_24902__$1;(statearr_24940_24976[(2)] = inst_24872);
(statearr_24940_24976[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24903 === (8)))
{var inst_24845 = (state_24902[(13)]);var inst_24846 = (state_24902[(14)]);var inst_24848 = (inst_24846 < inst_24845);var inst_24849 = inst_24848;var state_24902__$1 = state_24902;if(cljs.core.truth_(inst_24849))
{var statearr_24941_24977 = state_24902__$1;(statearr_24941_24977[(1)] = (10));
} else
{var statearr_24942_24978 = state_24902__$1;(statearr_24942_24978[(1)] = (11));
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
});})(c__15086__auto___24950,mults,ensure_mult,p))
;return ((function (switch__15071__auto__,c__15086__auto___24950,mults,ensure_mult,p){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24946[(0)] = state_machine__15072__auto__);
(statearr_24946[(1)] = (1));
return statearr_24946;
});
var state_machine__15072__auto____1 = (function (state_24902){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24902);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24947){if((e24947 instanceof Object))
{var ex__15075__auto__ = e24947;var statearr_24948_24979 = state_24902;(statearr_24948_24979[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24947;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24980 = state_24902;
state_24902 = G__24980;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24902){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___24950,mults,ensure_mult,p))
})();var state__15088__auto__ = (function (){var statearr_24949 = f__15087__auto__.call(null);(statearr_24949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___24950);
return statearr_24949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___24950,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15086__auto___25117 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25087){var state_val_25088 = (state_25087[(1)]);if((state_val_25088 === (7)))
{var state_25087__$1 = state_25087;var statearr_25089_25118 = state_25087__$1;(statearr_25089_25118[(2)] = null);
(statearr_25089_25118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (1)))
{var state_25087__$1 = state_25087;var statearr_25090_25119 = state_25087__$1;(statearr_25090_25119[(2)] = null);
(statearr_25090_25119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (4)))
{var inst_25051 = (state_25087[(7)]);var inst_25053 = (inst_25051 < cnt);var state_25087__$1 = state_25087;if(cljs.core.truth_(inst_25053))
{var statearr_25091_25120 = state_25087__$1;(statearr_25091_25120[(1)] = (6));
} else
{var statearr_25092_25121 = state_25087__$1;(statearr_25092_25121[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (15)))
{var inst_25083 = (state_25087[(2)]);var state_25087__$1 = state_25087;var statearr_25093_25122 = state_25087__$1;(statearr_25093_25122[(2)] = inst_25083);
(statearr_25093_25122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (13)))
{var inst_25076 = cljs.core.async.close_BANG_.call(null,out);var state_25087__$1 = state_25087;var statearr_25094_25123 = state_25087__$1;(statearr_25094_25123[(2)] = inst_25076);
(statearr_25094_25123[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (6)))
{var state_25087__$1 = state_25087;var statearr_25095_25124 = state_25087__$1;(statearr_25095_25124[(2)] = null);
(statearr_25095_25124[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (3)))
{var inst_25085 = (state_25087[(2)]);var state_25087__$1 = state_25087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25087__$1,inst_25085);
} else
{if((state_val_25088 === (12)))
{var inst_25073 = (state_25087[(8)]);var inst_25073__$1 = (state_25087[(2)]);var inst_25074 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25073__$1);var state_25087__$1 = (function (){var statearr_25096 = state_25087;(statearr_25096[(8)] = inst_25073__$1);
return statearr_25096;
})();if(cljs.core.truth_(inst_25074))
{var statearr_25097_25125 = state_25087__$1;(statearr_25097_25125[(1)] = (13));
} else
{var statearr_25098_25126 = state_25087__$1;(statearr_25098_25126[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (2)))
{var inst_25050 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25051 = (0);var state_25087__$1 = (function (){var statearr_25099 = state_25087;(statearr_25099[(7)] = inst_25051);
(statearr_25099[(9)] = inst_25050);
return statearr_25099;
})();var statearr_25100_25127 = state_25087__$1;(statearr_25100_25127[(2)] = null);
(statearr_25100_25127[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (11)))
{var inst_25051 = (state_25087[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25087,(10),Object,null,(9));var inst_25060 = chs__$1.call(null,inst_25051);var inst_25061 = done.call(null,inst_25051);var inst_25062 = cljs.core.async.take_BANG_.call(null,inst_25060,inst_25061);var state_25087__$1 = state_25087;var statearr_25101_25128 = state_25087__$1;(statearr_25101_25128[(2)] = inst_25062);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25087__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (9)))
{var inst_25051 = (state_25087[(7)]);var inst_25064 = (state_25087[(2)]);var inst_25065 = (inst_25051 + (1));var inst_25051__$1 = inst_25065;var state_25087__$1 = (function (){var statearr_25102 = state_25087;(statearr_25102[(10)] = inst_25064);
(statearr_25102[(7)] = inst_25051__$1);
return statearr_25102;
})();var statearr_25103_25129 = state_25087__$1;(statearr_25103_25129[(2)] = null);
(statearr_25103_25129[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (5)))
{var inst_25071 = (state_25087[(2)]);var state_25087__$1 = (function (){var statearr_25104 = state_25087;(statearr_25104[(11)] = inst_25071);
return statearr_25104;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25087__$1,(12),dchan);
} else
{if((state_val_25088 === (14)))
{var inst_25073 = (state_25087[(8)]);var inst_25078 = cljs.core.apply.call(null,f,inst_25073);var state_25087__$1 = state_25087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25087__$1,(16),out,inst_25078);
} else
{if((state_val_25088 === (16)))
{var inst_25080 = (state_25087[(2)]);var state_25087__$1 = (function (){var statearr_25105 = state_25087;(statearr_25105[(12)] = inst_25080);
return statearr_25105;
})();var statearr_25106_25130 = state_25087__$1;(statearr_25106_25130[(2)] = null);
(statearr_25106_25130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (10)))
{var inst_25055 = (state_25087[(2)]);var inst_25056 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25087__$1 = (function (){var statearr_25107 = state_25087;(statearr_25107[(13)] = inst_25055);
return statearr_25107;
})();var statearr_25108_25131 = state_25087__$1;(statearr_25108_25131[(2)] = inst_25056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25087__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25088 === (8)))
{var inst_25069 = (state_25087[(2)]);var state_25087__$1 = state_25087;var statearr_25109_25132 = state_25087__$1;(statearr_25109_25132[(2)] = inst_25069);
(statearr_25109_25132[(1)] = (5));
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
});})(c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25113[(0)] = state_machine__15072__auto__);
(statearr_25113[(1)] = (1));
return statearr_25113;
});
var state_machine__15072__auto____1 = (function (state_25087){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25087);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object))
{var ex__15075__auto__ = e25114;var statearr_25115_25133 = state_25087;(statearr_25115_25133[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25134 = state_25087;
state_25087 = G__25134;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25087){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_25116 = f__15087__auto__.call(null);(statearr_25116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25117);
return statearr_25116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25117,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___25242 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25242,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25242,out){
return (function (state_25218){var state_val_25219 = (state_25218[(1)]);if((state_val_25219 === (7)))
{var inst_25197 = (state_25218[(7)]);var inst_25198 = (state_25218[(8)]);var inst_25197__$1 = (state_25218[(2)]);var inst_25198__$1 = cljs.core.nth.call(null,inst_25197__$1,(0),null);var inst_25199 = cljs.core.nth.call(null,inst_25197__$1,(1),null);var inst_25200 = (inst_25198__$1 == null);var state_25218__$1 = (function (){var statearr_25220 = state_25218;(statearr_25220[(9)] = inst_25199);
(statearr_25220[(7)] = inst_25197__$1);
(statearr_25220[(8)] = inst_25198__$1);
return statearr_25220;
})();if(cljs.core.truth_(inst_25200))
{var statearr_25221_25243 = state_25218__$1;(statearr_25221_25243[(1)] = (8));
} else
{var statearr_25222_25244 = state_25218__$1;(statearr_25222_25244[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (1)))
{var inst_25189 = cljs.core.vec.call(null,chs);var inst_25190 = inst_25189;var state_25218__$1 = (function (){var statearr_25223 = state_25218;(statearr_25223[(10)] = inst_25190);
return statearr_25223;
})();var statearr_25224_25245 = state_25218__$1;(statearr_25224_25245[(2)] = null);
(statearr_25224_25245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (4)))
{var inst_25190 = (state_25218[(10)]);var state_25218__$1 = state_25218;return cljs.core.async.ioc_alts_BANG_.call(null,state_25218__$1,(7),inst_25190);
} else
{if((state_val_25219 === (6)))
{var inst_25214 = (state_25218[(2)]);var state_25218__$1 = state_25218;var statearr_25225_25246 = state_25218__$1;(statearr_25225_25246[(2)] = inst_25214);
(statearr_25225_25246[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (3)))
{var inst_25216 = (state_25218[(2)]);var state_25218__$1 = state_25218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25218__$1,inst_25216);
} else
{if((state_val_25219 === (2)))
{var inst_25190 = (state_25218[(10)]);var inst_25192 = cljs.core.count.call(null,inst_25190);var inst_25193 = (inst_25192 > (0));var state_25218__$1 = state_25218;if(cljs.core.truth_(inst_25193))
{var statearr_25227_25247 = state_25218__$1;(statearr_25227_25247[(1)] = (4));
} else
{var statearr_25228_25248 = state_25218__$1;(statearr_25228_25248[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (11)))
{var inst_25190 = (state_25218[(10)]);var inst_25207 = (state_25218[(2)]);var tmp25226 = inst_25190;var inst_25190__$1 = tmp25226;var state_25218__$1 = (function (){var statearr_25229 = state_25218;(statearr_25229[(10)] = inst_25190__$1);
(statearr_25229[(11)] = inst_25207);
return statearr_25229;
})();var statearr_25230_25249 = state_25218__$1;(statearr_25230_25249[(2)] = null);
(statearr_25230_25249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (9)))
{var inst_25198 = (state_25218[(8)]);var state_25218__$1 = state_25218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25218__$1,(11),out,inst_25198);
} else
{if((state_val_25219 === (5)))
{var inst_25212 = cljs.core.async.close_BANG_.call(null,out);var state_25218__$1 = state_25218;var statearr_25231_25250 = state_25218__$1;(statearr_25231_25250[(2)] = inst_25212);
(statearr_25231_25250[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (10)))
{var inst_25210 = (state_25218[(2)]);var state_25218__$1 = state_25218;var statearr_25232_25251 = state_25218__$1;(statearr_25232_25251[(2)] = inst_25210);
(statearr_25232_25251[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25219 === (8)))
{var inst_25190 = (state_25218[(10)]);var inst_25199 = (state_25218[(9)]);var inst_25197 = (state_25218[(7)]);var inst_25198 = (state_25218[(8)]);var inst_25202 = (function (){var c = inst_25199;var v = inst_25198;var vec__25195 = inst_25197;var cs = inst_25190;return ((function (c,v,vec__25195,cs,inst_25190,inst_25199,inst_25197,inst_25198,state_val_25219,c__15086__auto___25242,out){
return (function (p1__25135_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25135_SHARP_);
});
;})(c,v,vec__25195,cs,inst_25190,inst_25199,inst_25197,inst_25198,state_val_25219,c__15086__auto___25242,out))
})();var inst_25203 = cljs.core.filterv.call(null,inst_25202,inst_25190);var inst_25190__$1 = inst_25203;var state_25218__$1 = (function (){var statearr_25233 = state_25218;(statearr_25233[(10)] = inst_25190__$1);
return statearr_25233;
})();var statearr_25234_25252 = state_25218__$1;(statearr_25234_25252[(2)] = null);
(statearr_25234_25252[(1)] = (2));
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
});})(c__15086__auto___25242,out))
;return ((function (switch__15071__auto__,c__15086__auto___25242,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25238 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25238[(0)] = state_machine__15072__auto__);
(statearr_25238[(1)] = (1));
return statearr_25238;
});
var state_machine__15072__auto____1 = (function (state_25218){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25218);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25239){if((e25239 instanceof Object))
{var ex__15075__auto__ = e25239;var statearr_25240_25253 = state_25218;(statearr_25240_25253[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25239;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25254 = state_25218;
state_25218 = G__25254;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25218){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25242,out))
})();var state__15088__auto__ = (function (){var statearr_25241 = f__15087__auto__.call(null);(statearr_25241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25242);
return statearr_25241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25242,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___25347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25347,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25347,out){
return (function (state_25324){var state_val_25325 = (state_25324[(1)]);if((state_val_25325 === (7)))
{var inst_25306 = (state_25324[(7)]);var inst_25306__$1 = (state_25324[(2)]);var inst_25307 = (inst_25306__$1 == null);var inst_25308 = cljs.core.not.call(null,inst_25307);var state_25324__$1 = (function (){var statearr_25326 = state_25324;(statearr_25326[(7)] = inst_25306__$1);
return statearr_25326;
})();if(inst_25308)
{var statearr_25327_25348 = state_25324__$1;(statearr_25327_25348[(1)] = (8));
} else
{var statearr_25328_25349 = state_25324__$1;(statearr_25328_25349[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (1)))
{var inst_25301 = (0);var state_25324__$1 = (function (){var statearr_25329 = state_25324;(statearr_25329[(8)] = inst_25301);
return statearr_25329;
})();var statearr_25330_25350 = state_25324__$1;(statearr_25330_25350[(2)] = null);
(statearr_25330_25350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (4)))
{var state_25324__$1 = state_25324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25324__$1,(7),ch);
} else
{if((state_val_25325 === (6)))
{var inst_25319 = (state_25324[(2)]);var state_25324__$1 = state_25324;var statearr_25331_25351 = state_25324__$1;(statearr_25331_25351[(2)] = inst_25319);
(statearr_25331_25351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (3)))
{var inst_25321 = (state_25324[(2)]);var inst_25322 = cljs.core.async.close_BANG_.call(null,out);var state_25324__$1 = (function (){var statearr_25332 = state_25324;(statearr_25332[(9)] = inst_25321);
return statearr_25332;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25324__$1,inst_25322);
} else
{if((state_val_25325 === (2)))
{var inst_25301 = (state_25324[(8)]);var inst_25303 = (inst_25301 < n);var state_25324__$1 = state_25324;if(cljs.core.truth_(inst_25303))
{var statearr_25333_25352 = state_25324__$1;(statearr_25333_25352[(1)] = (4));
} else
{var statearr_25334_25353 = state_25324__$1;(statearr_25334_25353[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (11)))
{var inst_25301 = (state_25324[(8)]);var inst_25311 = (state_25324[(2)]);var inst_25312 = (inst_25301 + (1));var inst_25301__$1 = inst_25312;var state_25324__$1 = (function (){var statearr_25335 = state_25324;(statearr_25335[(8)] = inst_25301__$1);
(statearr_25335[(10)] = inst_25311);
return statearr_25335;
})();var statearr_25336_25354 = state_25324__$1;(statearr_25336_25354[(2)] = null);
(statearr_25336_25354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (9)))
{var state_25324__$1 = state_25324;var statearr_25337_25355 = state_25324__$1;(statearr_25337_25355[(2)] = null);
(statearr_25337_25355[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (5)))
{var state_25324__$1 = state_25324;var statearr_25338_25356 = state_25324__$1;(statearr_25338_25356[(2)] = null);
(statearr_25338_25356[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (10)))
{var inst_25316 = (state_25324[(2)]);var state_25324__$1 = state_25324;var statearr_25339_25357 = state_25324__$1;(statearr_25339_25357[(2)] = inst_25316);
(statearr_25339_25357[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25325 === (8)))
{var inst_25306 = (state_25324[(7)]);var state_25324__$1 = state_25324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25324__$1,(11),out,inst_25306);
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
});})(c__15086__auto___25347,out))
;return ((function (switch__15071__auto__,c__15086__auto___25347,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25343 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25343[(0)] = state_machine__15072__auto__);
(statearr_25343[(1)] = (1));
return statearr_25343;
});
var state_machine__15072__auto____1 = (function (state_25324){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25324);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25344){if((e25344 instanceof Object))
{var ex__15075__auto__ = e25344;var statearr_25345_25358 = state_25324;(statearr_25345_25358[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25344;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25359 = state_25324;
state_25324 = G__25359;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25324){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25347,out))
})();var state__15088__auto__ = (function (){var statearr_25346 = f__15087__auto__.call(null);(statearr_25346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25347);
return statearr_25346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25347,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25367 = (function (ch,f,map_LT_,meta25368){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25368 = meta25368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25367.cljs$lang$type = true;
cljs.core.async.t25367.cljs$lang$ctorStr = "cljs.core.async/t25367";
cljs.core.async.t25367.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t25367");
});
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25370 = (function (fn1,_,meta25368,ch,f,map_LT_,meta25371){
this.fn1 = fn1;
this._ = _;
this.meta25368 = meta25368;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25371 = meta25371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25370.cljs$lang$type = true;
cljs.core.async.t25370.cljs$lang$ctorStr = "cljs.core.async/t25370";
cljs.core.async.t25370.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t25370");
});})(___$1))
;
cljs.core.async.t25370.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25360_SHARP_){return f1.call(null,(((p1__25360_SHARP_ == null))?null:self__.f.call(null,p1__25360_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25372){var self__ = this;
var _25372__$1 = this;return self__.meta25371;
});})(___$1))
;
cljs.core.async.t25370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25372,meta25371__$1){var self__ = this;
var _25372__$1 = this;return (new cljs.core.async.t25370(self__.fn1,self__._,self__.meta25368,self__.ch,self__.f,self__.map_LT_,meta25371__$1));
});})(___$1))
;
cljs.core.async.__GT_t25370 = ((function (___$1){
return (function __GT_t25370(fn1__$1,___$2,meta25368__$1,ch__$2,f__$2,map_LT___$2,meta25371){return (new cljs.core.async.t25370(fn1__$1,___$2,meta25368__$1,ch__$2,f__$2,map_LT___$2,meta25371));
});})(___$1))
;
}
return (new cljs.core.async.t25370(fn1,___$1,self__.meta25368,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25369){var self__ = this;
var _25369__$1 = this;return self__.meta25368;
});
cljs.core.async.t25367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25369,meta25368__$1){var self__ = this;
var _25369__$1 = this;return (new cljs.core.async.t25367(self__.ch,self__.f,self__.map_LT_,meta25368__$1));
});
cljs.core.async.__GT_t25367 = (function __GT_t25367(ch__$1,f__$1,map_LT___$1,meta25368){return (new cljs.core.async.t25367(ch__$1,f__$1,map_LT___$1,meta25368));
});
}
return (new cljs.core.async.t25367(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25376 = (function (ch,f,map_GT_,meta25377){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25377 = meta25377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25376.cljs$lang$type = true;
cljs.core.async.t25376.cljs$lang$ctorStr = "cljs.core.async/t25376";
cljs.core.async.t25376.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t25376");
});
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25378){var self__ = this;
var _25378__$1 = this;return self__.meta25377;
});
cljs.core.async.t25376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25378,meta25377__$1){var self__ = this;
var _25378__$1 = this;return (new cljs.core.async.t25376(self__.ch,self__.f,self__.map_GT_,meta25377__$1));
});
cljs.core.async.__GT_t25376 = (function __GT_t25376(ch__$1,f__$1,map_GT___$1,meta25377){return (new cljs.core.async.t25376(ch__$1,f__$1,map_GT___$1,meta25377));
});
}
return (new cljs.core.async.t25376(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25382 = (function (ch,p,filter_GT_,meta25383){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25383 = meta25383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25382.cljs$lang$type = true;
cljs.core.async.t25382.cljs$lang$ctorStr = "cljs.core.async/t25382";
cljs.core.async.t25382.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t25382");
});
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25382.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25384){var self__ = this;
var _25384__$1 = this;return self__.meta25383;
});
cljs.core.async.t25382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25384,meta25383__$1){var self__ = this;
var _25384__$1 = this;return (new cljs.core.async.t25382(self__.ch,self__.p,self__.filter_GT_,meta25383__$1));
});
cljs.core.async.__GT_t25382 = (function __GT_t25382(ch__$1,p__$1,filter_GT___$1,meta25383){return (new cljs.core.async.t25382(ch__$1,p__$1,filter_GT___$1,meta25383));
});
}
return (new cljs.core.async.t25382(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___25467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25467,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25467,out){
return (function (state_25446){var state_val_25447 = (state_25446[(1)]);if((state_val_25447 === (7)))
{var inst_25442 = (state_25446[(2)]);var state_25446__$1 = state_25446;var statearr_25448_25468 = state_25446__$1;(statearr_25448_25468[(2)] = inst_25442);
(statearr_25448_25468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (1)))
{var state_25446__$1 = state_25446;var statearr_25449_25469 = state_25446__$1;(statearr_25449_25469[(2)] = null);
(statearr_25449_25469[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (4)))
{var inst_25428 = (state_25446[(7)]);var inst_25428__$1 = (state_25446[(2)]);var inst_25429 = (inst_25428__$1 == null);var state_25446__$1 = (function (){var statearr_25450 = state_25446;(statearr_25450[(7)] = inst_25428__$1);
return statearr_25450;
})();if(cljs.core.truth_(inst_25429))
{var statearr_25451_25470 = state_25446__$1;(statearr_25451_25470[(1)] = (5));
} else
{var statearr_25452_25471 = state_25446__$1;(statearr_25452_25471[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (6)))
{var inst_25428 = (state_25446[(7)]);var inst_25433 = p.call(null,inst_25428);var state_25446__$1 = state_25446;if(cljs.core.truth_(inst_25433))
{var statearr_25453_25472 = state_25446__$1;(statearr_25453_25472[(1)] = (8));
} else
{var statearr_25454_25473 = state_25446__$1;(statearr_25454_25473[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (3)))
{var inst_25444 = (state_25446[(2)]);var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25446__$1,inst_25444);
} else
{if((state_val_25447 === (2)))
{var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25446__$1,(4),ch);
} else
{if((state_val_25447 === (11)))
{var inst_25436 = (state_25446[(2)]);var state_25446__$1 = state_25446;var statearr_25455_25474 = state_25446__$1;(statearr_25455_25474[(2)] = inst_25436);
(statearr_25455_25474[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (9)))
{var state_25446__$1 = state_25446;var statearr_25456_25475 = state_25446__$1;(statearr_25456_25475[(2)] = null);
(statearr_25456_25475[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (5)))
{var inst_25431 = cljs.core.async.close_BANG_.call(null,out);var state_25446__$1 = state_25446;var statearr_25457_25476 = state_25446__$1;(statearr_25457_25476[(2)] = inst_25431);
(statearr_25457_25476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (10)))
{var inst_25439 = (state_25446[(2)]);var state_25446__$1 = (function (){var statearr_25458 = state_25446;(statearr_25458[(8)] = inst_25439);
return statearr_25458;
})();var statearr_25459_25477 = state_25446__$1;(statearr_25459_25477[(2)] = null);
(statearr_25459_25477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (8)))
{var inst_25428 = (state_25446[(7)]);var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25446__$1,(11),out,inst_25428);
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
});})(c__15086__auto___25467,out))
;return ((function (switch__15071__auto__,c__15086__auto___25467,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25463 = [null,null,null,null,null,null,null,null,null];(statearr_25463[(0)] = state_machine__15072__auto__);
(statearr_25463[(1)] = (1));
return statearr_25463;
});
var state_machine__15072__auto____1 = (function (state_25446){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25446);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25464){if((e25464 instanceof Object))
{var ex__15075__auto__ = e25464;var statearr_25465_25478 = state_25446;(statearr_25465_25478[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25464;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25479 = state_25446;
state_25446 = G__25479;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25446){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25467,out))
})();var state__15088__auto__ = (function (){var statearr_25466 = f__15087__auto__.call(null);(statearr_25466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25467);
return statearr_25466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25467,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_25645){var state_val_25646 = (state_25645[(1)]);if((state_val_25646 === (7)))
{var inst_25641 = (state_25645[(2)]);var state_25645__$1 = state_25645;var statearr_25647_25688 = state_25645__$1;(statearr_25647_25688[(2)] = inst_25641);
(statearr_25647_25688[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (20)))
{var inst_25611 = (state_25645[(7)]);var inst_25622 = (state_25645[(2)]);var inst_25623 = cljs.core.next.call(null,inst_25611);var inst_25597 = inst_25623;var inst_25598 = null;var inst_25599 = (0);var inst_25600 = (0);var state_25645__$1 = (function (){var statearr_25648 = state_25645;(statearr_25648[(8)] = inst_25622);
(statearr_25648[(9)] = inst_25598);
(statearr_25648[(10)] = inst_25600);
(statearr_25648[(11)] = inst_25597);
(statearr_25648[(12)] = inst_25599);
return statearr_25648;
})();var statearr_25649_25689 = state_25645__$1;(statearr_25649_25689[(2)] = null);
(statearr_25649_25689[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (1)))
{var state_25645__$1 = state_25645;var statearr_25650_25690 = state_25645__$1;(statearr_25650_25690[(2)] = null);
(statearr_25650_25690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (4)))
{var inst_25586 = (state_25645[(13)]);var inst_25586__$1 = (state_25645[(2)]);var inst_25587 = (inst_25586__$1 == null);var state_25645__$1 = (function (){var statearr_25651 = state_25645;(statearr_25651[(13)] = inst_25586__$1);
return statearr_25651;
})();if(cljs.core.truth_(inst_25587))
{var statearr_25652_25691 = state_25645__$1;(statearr_25652_25691[(1)] = (5));
} else
{var statearr_25653_25692 = state_25645__$1;(statearr_25653_25692[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (15)))
{var state_25645__$1 = state_25645;var statearr_25657_25693 = state_25645__$1;(statearr_25657_25693[(2)] = null);
(statearr_25657_25693[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (21)))
{var state_25645__$1 = state_25645;var statearr_25658_25694 = state_25645__$1;(statearr_25658_25694[(2)] = null);
(statearr_25658_25694[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (13)))
{var inst_25598 = (state_25645[(9)]);var inst_25600 = (state_25645[(10)]);var inst_25597 = (state_25645[(11)]);var inst_25599 = (state_25645[(12)]);var inst_25607 = (state_25645[(2)]);var inst_25608 = (inst_25600 + (1));var tmp25654 = inst_25598;var tmp25655 = inst_25597;var tmp25656 = inst_25599;var inst_25597__$1 = tmp25655;var inst_25598__$1 = tmp25654;var inst_25599__$1 = tmp25656;var inst_25600__$1 = inst_25608;var state_25645__$1 = (function (){var statearr_25659 = state_25645;(statearr_25659[(9)] = inst_25598__$1);
(statearr_25659[(10)] = inst_25600__$1);
(statearr_25659[(11)] = inst_25597__$1);
(statearr_25659[(14)] = inst_25607);
(statearr_25659[(12)] = inst_25599__$1);
return statearr_25659;
})();var statearr_25660_25695 = state_25645__$1;(statearr_25660_25695[(2)] = null);
(statearr_25660_25695[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (22)))
{var state_25645__$1 = state_25645;var statearr_25661_25696 = state_25645__$1;(statearr_25661_25696[(2)] = null);
(statearr_25661_25696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (6)))
{var inst_25586 = (state_25645[(13)]);var inst_25595 = f.call(null,inst_25586);var inst_25596 = cljs.core.seq.call(null,inst_25595);var inst_25597 = inst_25596;var inst_25598 = null;var inst_25599 = (0);var inst_25600 = (0);var state_25645__$1 = (function (){var statearr_25662 = state_25645;(statearr_25662[(9)] = inst_25598);
(statearr_25662[(10)] = inst_25600);
(statearr_25662[(11)] = inst_25597);
(statearr_25662[(12)] = inst_25599);
return statearr_25662;
})();var statearr_25663_25697 = state_25645__$1;(statearr_25663_25697[(2)] = null);
(statearr_25663_25697[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (17)))
{var inst_25611 = (state_25645[(7)]);var inst_25615 = cljs.core.chunk_first.call(null,inst_25611);var inst_25616 = cljs.core.chunk_rest.call(null,inst_25611);var inst_25617 = cljs.core.count.call(null,inst_25615);var inst_25597 = inst_25616;var inst_25598 = inst_25615;var inst_25599 = inst_25617;var inst_25600 = (0);var state_25645__$1 = (function (){var statearr_25664 = state_25645;(statearr_25664[(9)] = inst_25598);
(statearr_25664[(10)] = inst_25600);
(statearr_25664[(11)] = inst_25597);
(statearr_25664[(12)] = inst_25599);
return statearr_25664;
})();var statearr_25665_25698 = state_25645__$1;(statearr_25665_25698[(2)] = null);
(statearr_25665_25698[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (3)))
{var inst_25643 = (state_25645[(2)]);var state_25645__$1 = state_25645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25645__$1,inst_25643);
} else
{if((state_val_25646 === (12)))
{var inst_25631 = (state_25645[(2)]);var state_25645__$1 = state_25645;var statearr_25666_25699 = state_25645__$1;(statearr_25666_25699[(2)] = inst_25631);
(statearr_25666_25699[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (2)))
{var state_25645__$1 = state_25645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25645__$1,(4),in$);
} else
{if((state_val_25646 === (23)))
{var inst_25639 = (state_25645[(2)]);var state_25645__$1 = state_25645;var statearr_25667_25700 = state_25645__$1;(statearr_25667_25700[(2)] = inst_25639);
(statearr_25667_25700[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (19)))
{var inst_25626 = (state_25645[(2)]);var state_25645__$1 = state_25645;var statearr_25668_25701 = state_25645__$1;(statearr_25668_25701[(2)] = inst_25626);
(statearr_25668_25701[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (11)))
{var inst_25597 = (state_25645[(11)]);var inst_25611 = (state_25645[(7)]);var inst_25611__$1 = cljs.core.seq.call(null,inst_25597);var state_25645__$1 = (function (){var statearr_25669 = state_25645;(statearr_25669[(7)] = inst_25611__$1);
return statearr_25669;
})();if(inst_25611__$1)
{var statearr_25670_25702 = state_25645__$1;(statearr_25670_25702[(1)] = (14));
} else
{var statearr_25671_25703 = state_25645__$1;(statearr_25671_25703[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (9)))
{var inst_25633 = (state_25645[(2)]);var inst_25634 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25645__$1 = (function (){var statearr_25672 = state_25645;(statearr_25672[(15)] = inst_25633);
return statearr_25672;
})();if(cljs.core.truth_(inst_25634))
{var statearr_25673_25704 = state_25645__$1;(statearr_25673_25704[(1)] = (21));
} else
{var statearr_25674_25705 = state_25645__$1;(statearr_25674_25705[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (5)))
{var inst_25589 = cljs.core.async.close_BANG_.call(null,out);var state_25645__$1 = state_25645;var statearr_25675_25706 = state_25645__$1;(statearr_25675_25706[(2)] = inst_25589);
(statearr_25675_25706[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (14)))
{var inst_25611 = (state_25645[(7)]);var inst_25613 = cljs.core.chunked_seq_QMARK_.call(null,inst_25611);var state_25645__$1 = state_25645;if(inst_25613)
{var statearr_25676_25707 = state_25645__$1;(statearr_25676_25707[(1)] = (17));
} else
{var statearr_25677_25708 = state_25645__$1;(statearr_25677_25708[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (16)))
{var inst_25629 = (state_25645[(2)]);var state_25645__$1 = state_25645;var statearr_25678_25709 = state_25645__$1;(statearr_25678_25709[(2)] = inst_25629);
(statearr_25678_25709[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25646 === (10)))
{var inst_25598 = (state_25645[(9)]);var inst_25600 = (state_25645[(10)]);var inst_25605 = cljs.core._nth.call(null,inst_25598,inst_25600);var state_25645__$1 = state_25645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25645__$1,(13),out,inst_25605);
} else
{if((state_val_25646 === (18)))
{var inst_25611 = (state_25645[(7)]);var inst_25620 = cljs.core.first.call(null,inst_25611);var state_25645__$1 = state_25645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25645__$1,(20),out,inst_25620);
} else
{if((state_val_25646 === (8)))
{var inst_25600 = (state_25645[(10)]);var inst_25599 = (state_25645[(12)]);var inst_25602 = (inst_25600 < inst_25599);var inst_25603 = inst_25602;var state_25645__$1 = state_25645;if(cljs.core.truth_(inst_25603))
{var statearr_25679_25710 = state_25645__$1;(statearr_25679_25710[(1)] = (10));
} else
{var statearr_25680_25711 = state_25645__$1;(statearr_25680_25711[(1)] = (11));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25684[(0)] = state_machine__15072__auto__);
(statearr_25684[(1)] = (1));
return statearr_25684;
});
var state_machine__15072__auto____1 = (function (state_25645){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25645);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25685){if((e25685 instanceof Object))
{var ex__15075__auto__ = e25685;var statearr_25686_25712 = state_25645;(statearr_25686_25712[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25645);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25685;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25713 = state_25645;
state_25645 = G__25713;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25645){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_25687 = f__15087__auto__.call(null);(statearr_25687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_25687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___25810 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25810,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25810,out){
return (function (state_25785){var state_val_25786 = (state_25785[(1)]);if((state_val_25786 === (7)))
{var inst_25780 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25787_25811 = state_25785__$1;(statearr_25787_25811[(2)] = inst_25780);
(statearr_25787_25811[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (1)))
{var inst_25762 = null;var state_25785__$1 = (function (){var statearr_25788 = state_25785;(statearr_25788[(7)] = inst_25762);
return statearr_25788;
})();var statearr_25789_25812 = state_25785__$1;(statearr_25789_25812[(2)] = null);
(statearr_25789_25812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (4)))
{var inst_25765 = (state_25785[(8)]);var inst_25765__$1 = (state_25785[(2)]);var inst_25766 = (inst_25765__$1 == null);var inst_25767 = cljs.core.not.call(null,inst_25766);var state_25785__$1 = (function (){var statearr_25790 = state_25785;(statearr_25790[(8)] = inst_25765__$1);
return statearr_25790;
})();if(inst_25767)
{var statearr_25791_25813 = state_25785__$1;(statearr_25791_25813[(1)] = (5));
} else
{var statearr_25792_25814 = state_25785__$1;(statearr_25792_25814[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (6)))
{var state_25785__$1 = state_25785;var statearr_25793_25815 = state_25785__$1;(statearr_25793_25815[(2)] = null);
(statearr_25793_25815[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (3)))
{var inst_25782 = (state_25785[(2)]);var inst_25783 = cljs.core.async.close_BANG_.call(null,out);var state_25785__$1 = (function (){var statearr_25794 = state_25785;(statearr_25794[(9)] = inst_25782);
return statearr_25794;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25785__$1,inst_25783);
} else
{if((state_val_25786 === (2)))
{var state_25785__$1 = state_25785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(4),ch);
} else
{if((state_val_25786 === (11)))
{var inst_25765 = (state_25785[(8)]);var inst_25774 = (state_25785[(2)]);var inst_25762 = inst_25765;var state_25785__$1 = (function (){var statearr_25795 = state_25785;(statearr_25795[(7)] = inst_25762);
(statearr_25795[(10)] = inst_25774);
return statearr_25795;
})();var statearr_25796_25816 = state_25785__$1;(statearr_25796_25816[(2)] = null);
(statearr_25796_25816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (9)))
{var inst_25765 = (state_25785[(8)]);var state_25785__$1 = state_25785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25785__$1,(11),out,inst_25765);
} else
{if((state_val_25786 === (5)))
{var inst_25762 = (state_25785[(7)]);var inst_25765 = (state_25785[(8)]);var inst_25769 = cljs.core._EQ_.call(null,inst_25765,inst_25762);var state_25785__$1 = state_25785;if(inst_25769)
{var statearr_25798_25817 = state_25785__$1;(statearr_25798_25817[(1)] = (8));
} else
{var statearr_25799_25818 = state_25785__$1;(statearr_25799_25818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (10)))
{var inst_25777 = (state_25785[(2)]);var state_25785__$1 = state_25785;var statearr_25800_25819 = state_25785__$1;(statearr_25800_25819[(2)] = inst_25777);
(statearr_25800_25819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25786 === (8)))
{var inst_25762 = (state_25785[(7)]);var tmp25797 = inst_25762;var inst_25762__$1 = tmp25797;var state_25785__$1 = (function (){var statearr_25801 = state_25785;(statearr_25801[(7)] = inst_25762__$1);
return statearr_25801;
})();var statearr_25802_25820 = state_25785__$1;(statearr_25802_25820[(2)] = null);
(statearr_25802_25820[(1)] = (2));
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
});})(c__15086__auto___25810,out))
;return ((function (switch__15071__auto__,c__15086__auto___25810,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25806 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25806[(0)] = state_machine__15072__auto__);
(statearr_25806[(1)] = (1));
return statearr_25806;
});
var state_machine__15072__auto____1 = (function (state_25785){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25785);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25807){if((e25807 instanceof Object))
{var ex__15075__auto__ = e25807;var statearr_25808_25821 = state_25785;(statearr_25808_25821[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25807;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25822 = state_25785;
state_25785 = G__25822;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25810,out))
})();var state__15088__auto__ = (function (){var statearr_25809 = f__15087__auto__.call(null);(statearr_25809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25810);
return statearr_25809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25810,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___25957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___25957,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___25957,out){
return (function (state_25927){var state_val_25928 = (state_25927[(1)]);if((state_val_25928 === (7)))
{var inst_25923 = (state_25927[(2)]);var state_25927__$1 = state_25927;var statearr_25929_25958 = state_25927__$1;(statearr_25929_25958[(2)] = inst_25923);
(statearr_25929_25958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (1)))
{var inst_25890 = (new Array(n));var inst_25891 = inst_25890;var inst_25892 = (0);var state_25927__$1 = (function (){var statearr_25930 = state_25927;(statearr_25930[(7)] = inst_25892);
(statearr_25930[(8)] = inst_25891);
return statearr_25930;
})();var statearr_25931_25959 = state_25927__$1;(statearr_25931_25959[(2)] = null);
(statearr_25931_25959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (4)))
{var inst_25895 = (state_25927[(9)]);var inst_25895__$1 = (state_25927[(2)]);var inst_25896 = (inst_25895__$1 == null);var inst_25897 = cljs.core.not.call(null,inst_25896);var state_25927__$1 = (function (){var statearr_25932 = state_25927;(statearr_25932[(9)] = inst_25895__$1);
return statearr_25932;
})();if(inst_25897)
{var statearr_25933_25960 = state_25927__$1;(statearr_25933_25960[(1)] = (5));
} else
{var statearr_25934_25961 = state_25927__$1;(statearr_25934_25961[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (15)))
{var inst_25917 = (state_25927[(2)]);var state_25927__$1 = state_25927;var statearr_25935_25962 = state_25927__$1;(statearr_25935_25962[(2)] = inst_25917);
(statearr_25935_25962[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (13)))
{var state_25927__$1 = state_25927;var statearr_25936_25963 = state_25927__$1;(statearr_25936_25963[(2)] = null);
(statearr_25936_25963[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (6)))
{var inst_25892 = (state_25927[(7)]);var inst_25913 = (inst_25892 > (0));var state_25927__$1 = state_25927;if(cljs.core.truth_(inst_25913))
{var statearr_25937_25964 = state_25927__$1;(statearr_25937_25964[(1)] = (12));
} else
{var statearr_25938_25965 = state_25927__$1;(statearr_25938_25965[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (3)))
{var inst_25925 = (state_25927[(2)]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25927__$1,inst_25925);
} else
{if((state_val_25928 === (12)))
{var inst_25891 = (state_25927[(8)]);var inst_25915 = cljs.core.vec.call(null,inst_25891);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25927__$1,(15),out,inst_25915);
} else
{if((state_val_25928 === (2)))
{var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25927__$1,(4),ch);
} else
{if((state_val_25928 === (11)))
{var inst_25907 = (state_25927[(2)]);var inst_25908 = (new Array(n));var inst_25891 = inst_25908;var inst_25892 = (0);var state_25927__$1 = (function (){var statearr_25939 = state_25927;(statearr_25939[(7)] = inst_25892);
(statearr_25939[(10)] = inst_25907);
(statearr_25939[(8)] = inst_25891);
return statearr_25939;
})();var statearr_25940_25966 = state_25927__$1;(statearr_25940_25966[(2)] = null);
(statearr_25940_25966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (9)))
{var inst_25891 = (state_25927[(8)]);var inst_25905 = cljs.core.vec.call(null,inst_25891);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25927__$1,(11),out,inst_25905);
} else
{if((state_val_25928 === (5)))
{var inst_25892 = (state_25927[(7)]);var inst_25895 = (state_25927[(9)]);var inst_25891 = (state_25927[(8)]);var inst_25900 = (state_25927[(11)]);var inst_25899 = (inst_25891[inst_25892] = inst_25895);var inst_25900__$1 = (inst_25892 + (1));var inst_25901 = (inst_25900__$1 < n);var state_25927__$1 = (function (){var statearr_25941 = state_25927;(statearr_25941[(12)] = inst_25899);
(statearr_25941[(11)] = inst_25900__$1);
return statearr_25941;
})();if(cljs.core.truth_(inst_25901))
{var statearr_25942_25967 = state_25927__$1;(statearr_25942_25967[(1)] = (8));
} else
{var statearr_25943_25968 = state_25927__$1;(statearr_25943_25968[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (14)))
{var inst_25920 = (state_25927[(2)]);var inst_25921 = cljs.core.async.close_BANG_.call(null,out);var state_25927__$1 = (function (){var statearr_25945 = state_25927;(statearr_25945[(13)] = inst_25920);
return statearr_25945;
})();var statearr_25946_25969 = state_25927__$1;(statearr_25946_25969[(2)] = inst_25921);
(statearr_25946_25969[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (10)))
{var inst_25911 = (state_25927[(2)]);var state_25927__$1 = state_25927;var statearr_25947_25970 = state_25927__$1;(statearr_25947_25970[(2)] = inst_25911);
(statearr_25947_25970[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25928 === (8)))
{var inst_25891 = (state_25927[(8)]);var inst_25900 = (state_25927[(11)]);var tmp25944 = inst_25891;var inst_25891__$1 = tmp25944;var inst_25892 = inst_25900;var state_25927__$1 = (function (){var statearr_25948 = state_25927;(statearr_25948[(7)] = inst_25892);
(statearr_25948[(8)] = inst_25891__$1);
return statearr_25948;
})();var statearr_25949_25971 = state_25927__$1;(statearr_25949_25971[(2)] = null);
(statearr_25949_25971[(1)] = (2));
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
});})(c__15086__auto___25957,out))
;return ((function (switch__15071__auto__,c__15086__auto___25957,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_25953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25953[(0)] = state_machine__15072__auto__);
(statearr_25953[(1)] = (1));
return statearr_25953;
});
var state_machine__15072__auto____1 = (function (state_25927){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_25927);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e25954){if((e25954 instanceof Object))
{var ex__15075__auto__ = e25954;var statearr_25955_25972 = state_25927;(statearr_25955_25972[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25973 = state_25927;
state_25927 = G__25973;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_25927){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_25927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___25957,out))
})();var state__15088__auto__ = (function (){var statearr_25956 = f__15087__auto__.call(null);(statearr_25956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___25957);
return statearr_25956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___25957,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___26116 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___26116,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___26116,out){
return (function (state_26086){var state_val_26087 = (state_26086[(1)]);if((state_val_26087 === (7)))
{var inst_26082 = (state_26086[(2)]);var state_26086__$1 = state_26086;var statearr_26088_26117 = state_26086__$1;(statearr_26088_26117[(2)] = inst_26082);
(statearr_26088_26117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (1)))
{var inst_26045 = [];var inst_26046 = inst_26045;var inst_26047 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26086__$1 = (function (){var statearr_26089 = state_26086;(statearr_26089[(7)] = inst_26047);
(statearr_26089[(8)] = inst_26046);
return statearr_26089;
})();var statearr_26090_26118 = state_26086__$1;(statearr_26090_26118[(2)] = null);
(statearr_26090_26118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (4)))
{var inst_26050 = (state_26086[(9)]);var inst_26050__$1 = (state_26086[(2)]);var inst_26051 = (inst_26050__$1 == null);var inst_26052 = cljs.core.not.call(null,inst_26051);var state_26086__$1 = (function (){var statearr_26091 = state_26086;(statearr_26091[(9)] = inst_26050__$1);
return statearr_26091;
})();if(inst_26052)
{var statearr_26092_26119 = state_26086__$1;(statearr_26092_26119[(1)] = (5));
} else
{var statearr_26093_26120 = state_26086__$1;(statearr_26093_26120[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (15)))
{var inst_26076 = (state_26086[(2)]);var state_26086__$1 = state_26086;var statearr_26094_26121 = state_26086__$1;(statearr_26094_26121[(2)] = inst_26076);
(statearr_26094_26121[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (13)))
{var state_26086__$1 = state_26086;var statearr_26095_26122 = state_26086__$1;(statearr_26095_26122[(2)] = null);
(statearr_26095_26122[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (6)))
{var inst_26046 = (state_26086[(8)]);var inst_26071 = inst_26046.length;var inst_26072 = (inst_26071 > (0));var state_26086__$1 = state_26086;if(cljs.core.truth_(inst_26072))
{var statearr_26096_26123 = state_26086__$1;(statearr_26096_26123[(1)] = (12));
} else
{var statearr_26097_26124 = state_26086__$1;(statearr_26097_26124[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (3)))
{var inst_26084 = (state_26086[(2)]);var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26086__$1,inst_26084);
} else
{if((state_val_26087 === (12)))
{var inst_26046 = (state_26086[(8)]);var inst_26074 = cljs.core.vec.call(null,inst_26046);var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26086__$1,(15),out,inst_26074);
} else
{if((state_val_26087 === (2)))
{var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(4),ch);
} else
{if((state_val_26087 === (11)))
{var inst_26054 = (state_26086[(10)]);var inst_26050 = (state_26086[(9)]);var inst_26064 = (state_26086[(2)]);var inst_26065 = [];var inst_26066 = inst_26065.push(inst_26050);var inst_26046 = inst_26065;var inst_26047 = inst_26054;var state_26086__$1 = (function (){var statearr_26098 = state_26086;(statearr_26098[(11)] = inst_26066);
(statearr_26098[(7)] = inst_26047);
(statearr_26098[(8)] = inst_26046);
(statearr_26098[(12)] = inst_26064);
return statearr_26098;
})();var statearr_26099_26125 = state_26086__$1;(statearr_26099_26125[(2)] = null);
(statearr_26099_26125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (9)))
{var inst_26046 = (state_26086[(8)]);var inst_26062 = cljs.core.vec.call(null,inst_26046);var state_26086__$1 = state_26086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26086__$1,(11),out,inst_26062);
} else
{if((state_val_26087 === (5)))
{var inst_26054 = (state_26086[(10)]);var inst_26050 = (state_26086[(9)]);var inst_26047 = (state_26086[(7)]);var inst_26054__$1 = f.call(null,inst_26050);var inst_26055 = cljs.core._EQ_.call(null,inst_26054__$1,inst_26047);var inst_26056 = cljs.core.keyword_identical_QMARK_.call(null,inst_26047,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26057 = (inst_26055) || (inst_26056);var state_26086__$1 = (function (){var statearr_26100 = state_26086;(statearr_26100[(10)] = inst_26054__$1);
return statearr_26100;
})();if(cljs.core.truth_(inst_26057))
{var statearr_26101_26126 = state_26086__$1;(statearr_26101_26126[(1)] = (8));
} else
{var statearr_26102_26127 = state_26086__$1;(statearr_26102_26127[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (14)))
{var inst_26079 = (state_26086[(2)]);var inst_26080 = cljs.core.async.close_BANG_.call(null,out);var state_26086__$1 = (function (){var statearr_26104 = state_26086;(statearr_26104[(13)] = inst_26079);
return statearr_26104;
})();var statearr_26105_26128 = state_26086__$1;(statearr_26105_26128[(2)] = inst_26080);
(statearr_26105_26128[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (10)))
{var inst_26069 = (state_26086[(2)]);var state_26086__$1 = state_26086;var statearr_26106_26129 = state_26086__$1;(statearr_26106_26129[(2)] = inst_26069);
(statearr_26106_26129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26087 === (8)))
{var inst_26054 = (state_26086[(10)]);var inst_26050 = (state_26086[(9)]);var inst_26046 = (state_26086[(8)]);var inst_26059 = inst_26046.push(inst_26050);var tmp26103 = inst_26046;var inst_26046__$1 = tmp26103;var inst_26047 = inst_26054;var state_26086__$1 = (function (){var statearr_26107 = state_26086;(statearr_26107[(14)] = inst_26059);
(statearr_26107[(7)] = inst_26047);
(statearr_26107[(8)] = inst_26046__$1);
return statearr_26107;
})();var statearr_26108_26130 = state_26086__$1;(statearr_26108_26130[(2)] = null);
(statearr_26108_26130[(1)] = (2));
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
});})(c__15086__auto___26116,out))
;return ((function (switch__15071__auto__,c__15086__auto___26116,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_26112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26112[(0)] = state_machine__15072__auto__);
(statearr_26112[(1)] = (1));
return statearr_26112;
});
var state_machine__15072__auto____1 = (function (state_26086){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_26086);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e26113){if((e26113 instanceof Object))
{var ex__15075__auto__ = e26113;var statearr_26114_26131 = state_26086;(statearr_26114_26131[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26132 = state_26086;
state_26086 = G__26132;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_26086){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_26086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___26116,out))
})();var state__15088__auto__ = (function (){var statearr_26115 = f__15087__auto__.call(null);(statearr_26115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___26116);
return statearr_26115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___26116,out))
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