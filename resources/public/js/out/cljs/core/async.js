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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21111 = (function (f,fn_handler,meta21112){
this.f = f;
this.fn_handler = fn_handler;
this.meta21112 = meta21112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21111.cljs$lang$type = true;
cljs.core.async.t21111.cljs$lang$ctorStr = "cljs.core.async/t21111";
cljs.core.async.t21111.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21111");
});
cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21113){var self__ = this;
var _21113__$1 = this;return self__.meta21112;
});
cljs.core.async.t21111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21113,meta21112__$1){var self__ = this;
var _21113__$1 = this;return (new cljs.core.async.t21111(self__.f,self__.fn_handler,meta21112__$1));
});
cljs.core.async.__GT_t21111 = (function __GT_t21111(f__$1,fn_handler__$1,meta21112){return (new cljs.core.async.t21111(f__$1,fn_handler__$1,meta21112));
});
}
return (new cljs.core.async.t21111(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21115 = buff;if(G__21115)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__21115.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21115.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21115);
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
{var val_21116 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21116);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21116,ret){
return (function (){return fn1.call(null,val_21116);
});})(val_21116,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___21117 = n;var x_21118 = (0);while(true){
if((x_21118 < n__13416__auto___21117))
{(a[x_21118] = (0));
{
var G__21119 = (x_21118 + (1));
x_21118 = G__21119;
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
var G__21120 = (i + (1));
i = G__21120;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21124 = (function (flag,alt_flag,meta21125){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21125 = meta21125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21124.cljs$lang$type = true;
cljs.core.async.t21124.cljs$lang$ctorStr = "cljs.core.async/t21124";
cljs.core.async.t21124.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21124");
});})(flag))
;
cljs.core.async.t21124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21126){var self__ = this;
var _21126__$1 = this;return self__.meta21125;
});})(flag))
;
cljs.core.async.t21124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21126,meta21125__$1){var self__ = this;
var _21126__$1 = this;return (new cljs.core.async.t21124(self__.flag,self__.alt_flag,meta21125__$1));
});})(flag))
;
cljs.core.async.__GT_t21124 = ((function (flag){
return (function __GT_t21124(flag__$1,alt_flag__$1,meta21125){return (new cljs.core.async.t21124(flag__$1,alt_flag__$1,meta21125));
});})(flag))
;
}
return (new cljs.core.async.t21124(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21130 = (function (cb,flag,alt_handler,meta21131){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21131 = meta21131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21130.cljs$lang$type = true;
cljs.core.async.t21130.cljs$lang$ctorStr = "cljs.core.async/t21130";
cljs.core.async.t21130.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21130");
});
cljs.core.async.t21130.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21132){var self__ = this;
var _21132__$1 = this;return self__.meta21131;
});
cljs.core.async.t21130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21132,meta21131__$1){var self__ = this;
var _21132__$1 = this;return (new cljs.core.async.t21130(self__.cb,self__.flag,self__.alt_handler,meta21131__$1));
});
cljs.core.async.__GT_t21130 = (function __GT_t21130(cb__$1,flag__$1,alt_handler__$1,meta21131){return (new cljs.core.async.t21130(cb__$1,flag__$1,alt_handler__$1,meta21131));
});
}
return (new cljs.core.async.t21130(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21133_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21133_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21134_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21134_SHARP_,port], null));
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
var G__21135 = (i + (1));
i = G__21135;
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
var alts_BANG___delegate = function (ports,p__21136){var map__21138 = p__21136;var map__21138__$1 = ((cljs.core.seq_QMARK_.call(null,map__21138))?cljs.core.apply.call(null,cljs.core.hash_map,map__21138):map__21138);var opts = map__21138__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21136 = null;if (arguments.length > 1) {
  p__21136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21136);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21139){
var ports = cljs.core.first(arglist__21139);
var p__21136 = cljs.core.rest(arglist__21139);
return alts_BANG___delegate(ports,p__21136);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15086__auto___21234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21234){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21234){
return (function (state_21210){var state_val_21211 = (state_21210[(1)]);if((state_val_21211 === (7)))
{var inst_21206 = (state_21210[(2)]);var state_21210__$1 = state_21210;var statearr_21212_21235 = state_21210__$1;(statearr_21212_21235[(2)] = inst_21206);
(statearr_21212_21235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (1)))
{var state_21210__$1 = state_21210;var statearr_21213_21236 = state_21210__$1;(statearr_21213_21236[(2)] = null);
(statearr_21213_21236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (4)))
{var inst_21189 = (state_21210[(7)]);var inst_21189__$1 = (state_21210[(2)]);var inst_21190 = (inst_21189__$1 == null);var state_21210__$1 = (function (){var statearr_21214 = state_21210;(statearr_21214[(7)] = inst_21189__$1);
return statearr_21214;
})();if(cljs.core.truth_(inst_21190))
{var statearr_21215_21237 = state_21210__$1;(statearr_21215_21237[(1)] = (5));
} else
{var statearr_21216_21238 = state_21210__$1;(statearr_21216_21238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (13)))
{var state_21210__$1 = state_21210;var statearr_21217_21239 = state_21210__$1;(statearr_21217_21239[(2)] = null);
(statearr_21217_21239[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (6)))
{var inst_21189 = (state_21210[(7)]);var state_21210__$1 = state_21210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21210__$1,(11),to,inst_21189);
} else
{if((state_val_21211 === (3)))
{var inst_21208 = (state_21210[(2)]);var state_21210__$1 = state_21210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21210__$1,inst_21208);
} else
{if((state_val_21211 === (12)))
{var state_21210__$1 = state_21210;var statearr_21218_21240 = state_21210__$1;(statearr_21218_21240[(2)] = null);
(statearr_21218_21240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (2)))
{var state_21210__$1 = state_21210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(4),from);
} else
{if((state_val_21211 === (11)))
{var inst_21199 = (state_21210[(2)]);var state_21210__$1 = state_21210;if(cljs.core.truth_(inst_21199))
{var statearr_21219_21241 = state_21210__$1;(statearr_21219_21241[(1)] = (12));
} else
{var statearr_21220_21242 = state_21210__$1;(statearr_21220_21242[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (9)))
{var state_21210__$1 = state_21210;var statearr_21221_21243 = state_21210__$1;(statearr_21221_21243[(2)] = null);
(statearr_21221_21243[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (5)))
{var state_21210__$1 = state_21210;if(cljs.core.truth_(close_QMARK_))
{var statearr_21222_21244 = state_21210__$1;(statearr_21222_21244[(1)] = (8));
} else
{var statearr_21223_21245 = state_21210__$1;(statearr_21223_21245[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (14)))
{var inst_21204 = (state_21210[(2)]);var state_21210__$1 = state_21210;var statearr_21224_21246 = state_21210__$1;(statearr_21224_21246[(2)] = inst_21204);
(statearr_21224_21246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (10)))
{var inst_21196 = (state_21210[(2)]);var state_21210__$1 = state_21210;var statearr_21225_21247 = state_21210__$1;(statearr_21225_21247[(2)] = inst_21196);
(statearr_21225_21247[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (8)))
{var inst_21193 = cljs.core.async.close_BANG_.call(null,to);var state_21210__$1 = state_21210;var statearr_21226_21248 = state_21210__$1;(statearr_21226_21248[(2)] = inst_21193);
(statearr_21226_21248[(1)] = (10));
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
});})(c__15086__auto___21234))
;return ((function (switch__15071__auto__,c__15086__auto___21234){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21230 = [null,null,null,null,null,null,null,null];(statearr_21230[(0)] = state_machine__15072__auto__);
(statearr_21230[(1)] = (1));
return statearr_21230;
});
var state_machine__15072__auto____1 = (function (state_21210){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21210);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21231){if((e21231 instanceof Object))
{var ex__15075__auto__ = e21231;var statearr_21232_21249 = state_21210;(statearr_21232_21249[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21231;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21250 = state_21210;
state_21210 = G__21250;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21210){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21234))
})();var state__15088__auto__ = (function (){var statearr_21233 = f__15087__auto__.call(null);(statearr_21233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21234);
return statearr_21233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21234))
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
return (function (p__21434){var vec__21435 = p__21434;var v = cljs.core.nth.call(null,vec__21435,(0),null);var p = cljs.core.nth.call(null,vec__21435,(1),null);var job = vec__21435;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15086__auto___21617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results){
return (function (state_21440){var state_val_21441 = (state_21440[(1)]);if((state_val_21441 === (2)))
{var inst_21437 = (state_21440[(2)]);var inst_21438 = cljs.core.async.close_BANG_.call(null,res);var state_21440__$1 = (function (){var statearr_21442 = state_21440;(statearr_21442[(7)] = inst_21437);
return statearr_21442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21440__$1,inst_21438);
} else
{if((state_val_21441 === (1)))
{var state_21440__$1 = state_21440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21440__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results))
;return ((function (switch__15071__auto__,c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21446 = [null,null,null,null,null,null,null,null];(statearr_21446[(0)] = state_machine__15072__auto__);
(statearr_21446[(1)] = (1));
return statearr_21446;
});
var state_machine__15072__auto____1 = (function (state_21440){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21440);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21447){if((e21447 instanceof Object))
{var ex__15075__auto__ = e21447;var statearr_21448_21618 = state_21440;(statearr_21448_21618[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21447;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21619 = state_21440;
state_21440 = G__21619;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21440){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results))
})();var state__15088__auto__ = (function (){var statearr_21449 = f__15087__auto__.call(null);(statearr_21449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21617);
return statearr_21449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21617,res,vec__21435,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21450){var vec__21451 = p__21450;var v = cljs.core.nth.call(null,vec__21451,(0),null);var p = cljs.core.nth.call(null,vec__21451,(1),null);var job = vec__21451;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___21620 = n;var __21621 = (0);while(true){
if((__21621 < n__13416__auto___21620))
{var G__21452_21622 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21452_21622) {
case "async":
var c__15086__auto___21624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21621,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__21621,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function (state_21465){var state_val_21466 = (state_21465[(1)]);if((state_val_21466 === (7)))
{var inst_21461 = (state_21465[(2)]);var state_21465__$1 = state_21465;var statearr_21467_21625 = state_21465__$1;(statearr_21467_21625[(2)] = inst_21461);
(statearr_21467_21625[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21466 === (6)))
{var state_21465__$1 = state_21465;var statearr_21468_21626 = state_21465__$1;(statearr_21468_21626[(2)] = null);
(statearr_21468_21626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21466 === (5)))
{var state_21465__$1 = state_21465;var statearr_21469_21627 = state_21465__$1;(statearr_21469_21627[(2)] = null);
(statearr_21469_21627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21466 === (4)))
{var inst_21455 = (state_21465[(2)]);var inst_21456 = async.call(null,inst_21455);var state_21465__$1 = state_21465;if(cljs.core.truth_(inst_21456))
{var statearr_21470_21628 = state_21465__$1;(statearr_21470_21628[(1)] = (5));
} else
{var statearr_21471_21629 = state_21465__$1;(statearr_21471_21629[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21466 === (3)))
{var inst_21463 = (state_21465[(2)]);var state_21465__$1 = state_21465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21465__$1,inst_21463);
} else
{if((state_val_21466 === (2)))
{var state_21465__$1 = state_21465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21465__$1,(4),jobs);
} else
{if((state_val_21466 === (1)))
{var state_21465__$1 = state_21465;var statearr_21472_21630 = state_21465__$1;(statearr_21472_21630[(2)] = null);
(statearr_21472_21630[(1)] = (2));
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
});})(__21621,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
;return ((function (__21621,switch__15071__auto__,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21476 = [null,null,null,null,null,null,null];(statearr_21476[(0)] = state_machine__15072__auto__);
(statearr_21476[(1)] = (1));
return statearr_21476;
});
var state_machine__15072__auto____1 = (function (state_21465){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21465);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21477){if((e21477 instanceof Object))
{var ex__15075__auto__ = e21477;var statearr_21478_21631 = state_21465;(statearr_21478_21631[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21477;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21632 = state_21465;
state_21465 = G__21632;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21465){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__21621,switch__15071__auto__,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21479 = f__15087__auto__.call(null);(statearr_21479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21624);
return statearr_21479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__21621,c__15086__auto___21624,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
);

break;
case "compute":
var c__15086__auto___21633 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21621,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__21621,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function (state_21492){var state_val_21493 = (state_21492[(1)]);if((state_val_21493 === (7)))
{var inst_21488 = (state_21492[(2)]);var state_21492__$1 = state_21492;var statearr_21494_21634 = state_21492__$1;(statearr_21494_21634[(2)] = inst_21488);
(statearr_21494_21634[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (6)))
{var state_21492__$1 = state_21492;var statearr_21495_21635 = state_21492__$1;(statearr_21495_21635[(2)] = null);
(statearr_21495_21635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (5)))
{var state_21492__$1 = state_21492;var statearr_21496_21636 = state_21492__$1;(statearr_21496_21636[(2)] = null);
(statearr_21496_21636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (4)))
{var inst_21482 = (state_21492[(2)]);var inst_21483 = process.call(null,inst_21482);var state_21492__$1 = state_21492;if(cljs.core.truth_(inst_21483))
{var statearr_21497_21637 = state_21492__$1;(statearr_21497_21637[(1)] = (5));
} else
{var statearr_21498_21638 = state_21492__$1;(statearr_21498_21638[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (3)))
{var inst_21490 = (state_21492[(2)]);var state_21492__$1 = state_21492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21492__$1,inst_21490);
} else
{if((state_val_21493 === (2)))
{var state_21492__$1 = state_21492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21492__$1,(4),jobs);
} else
{if((state_val_21493 === (1)))
{var state_21492__$1 = state_21492;var statearr_21499_21639 = state_21492__$1;(statearr_21499_21639[(2)] = null);
(statearr_21499_21639[(1)] = (2));
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
});})(__21621,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
;return ((function (__21621,switch__15071__auto__,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21503 = [null,null,null,null,null,null,null];(statearr_21503[(0)] = state_machine__15072__auto__);
(statearr_21503[(1)] = (1));
return statearr_21503;
});
var state_machine__15072__auto____1 = (function (state_21492){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21492);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21504){if((e21504 instanceof Object))
{var ex__15075__auto__ = e21504;var statearr_21505_21640 = state_21492;(statearr_21505_21640[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21504;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21641 = state_21492;
state_21492 = G__21641;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21492){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__21621,switch__15071__auto__,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21506 = f__15087__auto__.call(null);(statearr_21506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21633);
return statearr_21506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__21621,c__15086__auto___21633,G__21452_21622,n__13416__auto___21620,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21642 = (__21621 + (1));
__21621 = G__21642;
continue;
}
} else
{}
break;
}
var c__15086__auto___21643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21643,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21643,jobs,results,process,async){
return (function (state_21528){var state_val_21529 = (state_21528[(1)]);if((state_val_21529 === (9)))
{var inst_21521 = (state_21528[(2)]);var state_21528__$1 = (function (){var statearr_21530 = state_21528;(statearr_21530[(7)] = inst_21521);
return statearr_21530;
})();var statearr_21531_21644 = state_21528__$1;(statearr_21531_21644[(2)] = null);
(statearr_21531_21644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21529 === (8)))
{var inst_21514 = (state_21528[(8)]);var inst_21519 = (state_21528[(2)]);var state_21528__$1 = (function (){var statearr_21532 = state_21528;(statearr_21532[(9)] = inst_21519);
return statearr_21532;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21528__$1,(9),results,inst_21514);
} else
{if((state_val_21529 === (7)))
{var inst_21524 = (state_21528[(2)]);var state_21528__$1 = state_21528;var statearr_21533_21645 = state_21528__$1;(statearr_21533_21645[(2)] = inst_21524);
(statearr_21533_21645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21529 === (6)))
{var inst_21509 = (state_21528[(10)]);var inst_21514 = (state_21528[(8)]);var inst_21514__$1 = cljs.core.async.chan.call(null,(1));var inst_21515 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21516 = [inst_21509,inst_21514__$1];var inst_21517 = (new cljs.core.PersistentVector(null,2,(5),inst_21515,inst_21516,null));var state_21528__$1 = (function (){var statearr_21534 = state_21528;(statearr_21534[(8)] = inst_21514__$1);
return statearr_21534;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21528__$1,(8),jobs,inst_21517);
} else
{if((state_val_21529 === (5)))
{var inst_21512 = cljs.core.async.close_BANG_.call(null,jobs);var state_21528__$1 = state_21528;var statearr_21535_21646 = state_21528__$1;(statearr_21535_21646[(2)] = inst_21512);
(statearr_21535_21646[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21529 === (4)))
{var inst_21509 = (state_21528[(10)]);var inst_21509__$1 = (state_21528[(2)]);var inst_21510 = (inst_21509__$1 == null);var state_21528__$1 = (function (){var statearr_21536 = state_21528;(statearr_21536[(10)] = inst_21509__$1);
return statearr_21536;
})();if(cljs.core.truth_(inst_21510))
{var statearr_21537_21647 = state_21528__$1;(statearr_21537_21647[(1)] = (5));
} else
{var statearr_21538_21648 = state_21528__$1;(statearr_21538_21648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21529 === (3)))
{var inst_21526 = (state_21528[(2)]);var state_21528__$1 = state_21528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21528__$1,inst_21526);
} else
{if((state_val_21529 === (2)))
{var state_21528__$1 = state_21528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21528__$1,(4),from);
} else
{if((state_val_21529 === (1)))
{var state_21528__$1 = state_21528;var statearr_21539_21649 = state_21528__$1;(statearr_21539_21649[(2)] = null);
(statearr_21539_21649[(1)] = (2));
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
});})(c__15086__auto___21643,jobs,results,process,async))
;return ((function (switch__15071__auto__,c__15086__auto___21643,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21543 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21543[(0)] = state_machine__15072__auto__);
(statearr_21543[(1)] = (1));
return statearr_21543;
});
var state_machine__15072__auto____1 = (function (state_21528){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21528);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21544){if((e21544 instanceof Object))
{var ex__15075__auto__ = e21544;var statearr_21545_21650 = state_21528;(statearr_21545_21650[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21544;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21651 = state_21528;
state_21528 = G__21651;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21528){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21643,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21546 = f__15087__auto__.call(null);(statearr_21546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21643);
return statearr_21546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21643,jobs,results,process,async))
);
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,jobs,results,process,async){
return (function (state_21584){var state_val_21585 = (state_21584[(1)]);if((state_val_21585 === (7)))
{var inst_21580 = (state_21584[(2)]);var state_21584__$1 = state_21584;var statearr_21586_21652 = state_21584__$1;(statearr_21586_21652[(2)] = inst_21580);
(statearr_21586_21652[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (20)))
{var state_21584__$1 = state_21584;var statearr_21587_21653 = state_21584__$1;(statearr_21587_21653[(2)] = null);
(statearr_21587_21653[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (1)))
{var state_21584__$1 = state_21584;var statearr_21588_21654 = state_21584__$1;(statearr_21588_21654[(2)] = null);
(statearr_21588_21654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (4)))
{var inst_21549 = (state_21584[(7)]);var inst_21549__$1 = (state_21584[(2)]);var inst_21550 = (inst_21549__$1 == null);var state_21584__$1 = (function (){var statearr_21589 = state_21584;(statearr_21589[(7)] = inst_21549__$1);
return statearr_21589;
})();if(cljs.core.truth_(inst_21550))
{var statearr_21590_21655 = state_21584__$1;(statearr_21590_21655[(1)] = (5));
} else
{var statearr_21591_21656 = state_21584__$1;(statearr_21591_21656[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (15)))
{var inst_21562 = (state_21584[(8)]);var state_21584__$1 = state_21584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21584__$1,(18),to,inst_21562);
} else
{if((state_val_21585 === (21)))
{var inst_21575 = (state_21584[(2)]);var state_21584__$1 = state_21584;var statearr_21592_21657 = state_21584__$1;(statearr_21592_21657[(2)] = inst_21575);
(statearr_21592_21657[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (13)))
{var inst_21577 = (state_21584[(2)]);var state_21584__$1 = (function (){var statearr_21593 = state_21584;(statearr_21593[(9)] = inst_21577);
return statearr_21593;
})();var statearr_21594_21658 = state_21584__$1;(statearr_21594_21658[(2)] = null);
(statearr_21594_21658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (6)))
{var inst_21549 = (state_21584[(7)]);var state_21584__$1 = state_21584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(11),inst_21549);
} else
{if((state_val_21585 === (17)))
{var inst_21570 = (state_21584[(2)]);var state_21584__$1 = state_21584;if(cljs.core.truth_(inst_21570))
{var statearr_21595_21659 = state_21584__$1;(statearr_21595_21659[(1)] = (19));
} else
{var statearr_21596_21660 = state_21584__$1;(statearr_21596_21660[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (3)))
{var inst_21582 = (state_21584[(2)]);var state_21584__$1 = state_21584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21584__$1,inst_21582);
} else
{if((state_val_21585 === (12)))
{var inst_21559 = (state_21584[(10)]);var state_21584__$1 = state_21584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(14),inst_21559);
} else
{if((state_val_21585 === (2)))
{var state_21584__$1 = state_21584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(4),results);
} else
{if((state_val_21585 === (19)))
{var state_21584__$1 = state_21584;var statearr_21597_21661 = state_21584__$1;(statearr_21597_21661[(2)] = null);
(statearr_21597_21661[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (11)))
{var inst_21559 = (state_21584[(2)]);var state_21584__$1 = (function (){var statearr_21598 = state_21584;(statearr_21598[(10)] = inst_21559);
return statearr_21598;
})();var statearr_21599_21662 = state_21584__$1;(statearr_21599_21662[(2)] = null);
(statearr_21599_21662[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (9)))
{var state_21584__$1 = state_21584;var statearr_21600_21663 = state_21584__$1;(statearr_21600_21663[(2)] = null);
(statearr_21600_21663[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (5)))
{var state_21584__$1 = state_21584;if(cljs.core.truth_(close_QMARK_))
{var statearr_21601_21664 = state_21584__$1;(statearr_21601_21664[(1)] = (8));
} else
{var statearr_21602_21665 = state_21584__$1;(statearr_21602_21665[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (14)))
{var inst_21562 = (state_21584[(8)]);var inst_21564 = (state_21584[(11)]);var inst_21562__$1 = (state_21584[(2)]);var inst_21563 = (inst_21562__$1 == null);var inst_21564__$1 = cljs.core.not.call(null,inst_21563);var state_21584__$1 = (function (){var statearr_21603 = state_21584;(statearr_21603[(8)] = inst_21562__$1);
(statearr_21603[(11)] = inst_21564__$1);
return statearr_21603;
})();if(inst_21564__$1)
{var statearr_21604_21666 = state_21584__$1;(statearr_21604_21666[(1)] = (15));
} else
{var statearr_21605_21667 = state_21584__$1;(statearr_21605_21667[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (16)))
{var inst_21564 = (state_21584[(11)]);var state_21584__$1 = state_21584;var statearr_21606_21668 = state_21584__$1;(statearr_21606_21668[(2)] = inst_21564);
(statearr_21606_21668[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (10)))
{var inst_21556 = (state_21584[(2)]);var state_21584__$1 = state_21584;var statearr_21607_21669 = state_21584__$1;(statearr_21607_21669[(2)] = inst_21556);
(statearr_21607_21669[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (18)))
{var inst_21567 = (state_21584[(2)]);var state_21584__$1 = state_21584;var statearr_21608_21670 = state_21584__$1;(statearr_21608_21670[(2)] = inst_21567);
(statearr_21608_21670[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21585 === (8)))
{var inst_21553 = cljs.core.async.close_BANG_.call(null,to);var state_21584__$1 = state_21584;var statearr_21609_21671 = state_21584__$1;(statearr_21609_21671[(2)] = inst_21553);
(statearr_21609_21671[(1)] = (10));
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
var state_machine__15072__auto____0 = (function (){var statearr_21613 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21613[(0)] = state_machine__15072__auto__);
(statearr_21613[(1)] = (1));
return statearr_21613;
});
var state_machine__15072__auto____1 = (function (state_21584){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21584);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object))
{var ex__15075__auto__ = e21614;var statearr_21615_21672 = state_21584;(statearr_21615_21672[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21673 = state_21584;
state_21584 = G__21673;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21584){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21616 = f__15087__auto__.call(null);(statearr_21616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21616;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15086__auto___21774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21774,tc,fc){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21774,tc,fc){
return (function (state_21749){var state_val_21750 = (state_21749[(1)]);if((state_val_21750 === (7)))
{var inst_21745 = (state_21749[(2)]);var state_21749__$1 = state_21749;var statearr_21751_21775 = state_21749__$1;(statearr_21751_21775[(2)] = inst_21745);
(statearr_21751_21775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (1)))
{var state_21749__$1 = state_21749;var statearr_21752_21776 = state_21749__$1;(statearr_21752_21776[(2)] = null);
(statearr_21752_21776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (4)))
{var inst_21726 = (state_21749[(7)]);var inst_21726__$1 = (state_21749[(2)]);var inst_21727 = (inst_21726__$1 == null);var state_21749__$1 = (function (){var statearr_21753 = state_21749;(statearr_21753[(7)] = inst_21726__$1);
return statearr_21753;
})();if(cljs.core.truth_(inst_21727))
{var statearr_21754_21777 = state_21749__$1;(statearr_21754_21777[(1)] = (5));
} else
{var statearr_21755_21778 = state_21749__$1;(statearr_21755_21778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (13)))
{var state_21749__$1 = state_21749;var statearr_21756_21779 = state_21749__$1;(statearr_21756_21779[(2)] = null);
(statearr_21756_21779[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (6)))
{var inst_21726 = (state_21749[(7)]);var inst_21732 = p.call(null,inst_21726);var state_21749__$1 = state_21749;if(cljs.core.truth_(inst_21732))
{var statearr_21757_21780 = state_21749__$1;(statearr_21757_21780[(1)] = (9));
} else
{var statearr_21758_21781 = state_21749__$1;(statearr_21758_21781[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (3)))
{var inst_21747 = (state_21749[(2)]);var state_21749__$1 = state_21749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21749__$1,inst_21747);
} else
{if((state_val_21750 === (12)))
{var state_21749__$1 = state_21749;var statearr_21759_21782 = state_21749__$1;(statearr_21759_21782[(2)] = null);
(statearr_21759_21782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (2)))
{var state_21749__$1 = state_21749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21749__$1,(4),ch);
} else
{if((state_val_21750 === (11)))
{var inst_21726 = (state_21749[(7)]);var inst_21736 = (state_21749[(2)]);var state_21749__$1 = state_21749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21749__$1,(8),inst_21736,inst_21726);
} else
{if((state_val_21750 === (9)))
{var state_21749__$1 = state_21749;var statearr_21760_21783 = state_21749__$1;(statearr_21760_21783[(2)] = tc);
(statearr_21760_21783[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (5)))
{var inst_21729 = cljs.core.async.close_BANG_.call(null,tc);var inst_21730 = cljs.core.async.close_BANG_.call(null,fc);var state_21749__$1 = (function (){var statearr_21761 = state_21749;(statearr_21761[(8)] = inst_21729);
return statearr_21761;
})();var statearr_21762_21784 = state_21749__$1;(statearr_21762_21784[(2)] = inst_21730);
(statearr_21762_21784[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (14)))
{var inst_21743 = (state_21749[(2)]);var state_21749__$1 = state_21749;var statearr_21763_21785 = state_21749__$1;(statearr_21763_21785[(2)] = inst_21743);
(statearr_21763_21785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (10)))
{var state_21749__$1 = state_21749;var statearr_21764_21786 = state_21749__$1;(statearr_21764_21786[(2)] = fc);
(statearr_21764_21786[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21750 === (8)))
{var inst_21738 = (state_21749[(2)]);var state_21749__$1 = state_21749;if(cljs.core.truth_(inst_21738))
{var statearr_21765_21787 = state_21749__$1;(statearr_21765_21787[(1)] = (12));
} else
{var statearr_21766_21788 = state_21749__$1;(statearr_21766_21788[(1)] = (13));
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
});})(c__15086__auto___21774,tc,fc))
;return ((function (switch__15071__auto__,c__15086__auto___21774,tc,fc){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21770 = [null,null,null,null,null,null,null,null,null];(statearr_21770[(0)] = state_machine__15072__auto__);
(statearr_21770[(1)] = (1));
return statearr_21770;
});
var state_machine__15072__auto____1 = (function (state_21749){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21749);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21771){if((e21771 instanceof Object))
{var ex__15075__auto__ = e21771;var statearr_21772_21789 = state_21749;(statearr_21772_21789[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21790 = state_21749;
state_21749 = G__21790;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21749){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21774,tc,fc))
})();var state__15088__auto__ = (function (){var statearr_21773 = f__15087__auto__.call(null);(statearr_21773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21774);
return statearr_21773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21774,tc,fc))
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
return (function (state_21837){var state_val_21838 = (state_21837[(1)]);if((state_val_21838 === (7)))
{var inst_21833 = (state_21837[(2)]);var state_21837__$1 = state_21837;var statearr_21839_21855 = state_21837__$1;(statearr_21839_21855[(2)] = inst_21833);
(statearr_21839_21855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21838 === (6)))
{var inst_21826 = (state_21837[(7)]);var inst_21823 = (state_21837[(8)]);var inst_21830 = f.call(null,inst_21823,inst_21826);var inst_21823__$1 = inst_21830;var state_21837__$1 = (function (){var statearr_21840 = state_21837;(statearr_21840[(8)] = inst_21823__$1);
return statearr_21840;
})();var statearr_21841_21856 = state_21837__$1;(statearr_21841_21856[(2)] = null);
(statearr_21841_21856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21838 === (5)))
{var inst_21823 = (state_21837[(8)]);var state_21837__$1 = state_21837;var statearr_21842_21857 = state_21837__$1;(statearr_21842_21857[(2)] = inst_21823);
(statearr_21842_21857[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21838 === (4)))
{var inst_21826 = (state_21837[(7)]);var inst_21826__$1 = (state_21837[(2)]);var inst_21827 = (inst_21826__$1 == null);var state_21837__$1 = (function (){var statearr_21843 = state_21837;(statearr_21843[(7)] = inst_21826__$1);
return statearr_21843;
})();if(cljs.core.truth_(inst_21827))
{var statearr_21844_21858 = state_21837__$1;(statearr_21844_21858[(1)] = (5));
} else
{var statearr_21845_21859 = state_21837__$1;(statearr_21845_21859[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21838 === (3)))
{var inst_21835 = (state_21837[(2)]);var state_21837__$1 = state_21837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21837__$1,inst_21835);
} else
{if((state_val_21838 === (2)))
{var state_21837__$1 = state_21837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21837__$1,(4),ch);
} else
{if((state_val_21838 === (1)))
{var inst_21823 = init;var state_21837__$1 = (function (){var statearr_21846 = state_21837;(statearr_21846[(8)] = inst_21823);
return statearr_21846;
})();var statearr_21847_21860 = state_21837__$1;(statearr_21847_21860[(2)] = null);
(statearr_21847_21860[(1)] = (2));
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
var state_machine__15072__auto____0 = (function (){var statearr_21851 = [null,null,null,null,null,null,null,null,null];(statearr_21851[(0)] = state_machine__15072__auto__);
(statearr_21851[(1)] = (1));
return statearr_21851;
});
var state_machine__15072__auto____1 = (function (state_21837){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21837);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21852){if((e21852 instanceof Object))
{var ex__15075__auto__ = e21852;var statearr_21853_21861 = state_21837;(statearr_21853_21861[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21852;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21862 = state_21837;
state_21837 = G__21862;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21837){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_21854 = f__15087__auto__.call(null);(statearr_21854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21854;
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
return (function (state_21936){var state_val_21937 = (state_21936[(1)]);if((state_val_21937 === (7)))
{var inst_21918 = (state_21936[(2)]);var state_21936__$1 = state_21936;var statearr_21938_21961 = state_21936__$1;(statearr_21938_21961[(2)] = inst_21918);
(statearr_21938_21961[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (1)))
{var inst_21912 = cljs.core.seq.call(null,coll);var inst_21913 = inst_21912;var state_21936__$1 = (function (){var statearr_21939 = state_21936;(statearr_21939[(7)] = inst_21913);
return statearr_21939;
})();var statearr_21940_21962 = state_21936__$1;(statearr_21940_21962[(2)] = null);
(statearr_21940_21962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (4)))
{var inst_21913 = (state_21936[(7)]);var inst_21916 = cljs.core.first.call(null,inst_21913);var state_21936__$1 = state_21936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21936__$1,(7),ch,inst_21916);
} else
{if((state_val_21937 === (13)))
{var inst_21930 = (state_21936[(2)]);var state_21936__$1 = state_21936;var statearr_21941_21963 = state_21936__$1;(statearr_21941_21963[(2)] = inst_21930);
(statearr_21941_21963[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (6)))
{var inst_21921 = (state_21936[(2)]);var state_21936__$1 = state_21936;if(cljs.core.truth_(inst_21921))
{var statearr_21942_21964 = state_21936__$1;(statearr_21942_21964[(1)] = (8));
} else
{var statearr_21943_21965 = state_21936__$1;(statearr_21943_21965[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (3)))
{var inst_21934 = (state_21936[(2)]);var state_21936__$1 = state_21936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21936__$1,inst_21934);
} else
{if((state_val_21937 === (12)))
{var state_21936__$1 = state_21936;var statearr_21944_21966 = state_21936__$1;(statearr_21944_21966[(2)] = null);
(statearr_21944_21966[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (2)))
{var inst_21913 = (state_21936[(7)]);var state_21936__$1 = state_21936;if(cljs.core.truth_(inst_21913))
{var statearr_21945_21967 = state_21936__$1;(statearr_21945_21967[(1)] = (4));
} else
{var statearr_21946_21968 = state_21936__$1;(statearr_21946_21968[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (11)))
{var inst_21927 = cljs.core.async.close_BANG_.call(null,ch);var state_21936__$1 = state_21936;var statearr_21947_21969 = state_21936__$1;(statearr_21947_21969[(2)] = inst_21927);
(statearr_21947_21969[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (9)))
{var state_21936__$1 = state_21936;if(cljs.core.truth_(close_QMARK_))
{var statearr_21948_21970 = state_21936__$1;(statearr_21948_21970[(1)] = (11));
} else
{var statearr_21949_21971 = state_21936__$1;(statearr_21949_21971[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (5)))
{var inst_21913 = (state_21936[(7)]);var state_21936__$1 = state_21936;var statearr_21950_21972 = state_21936__$1;(statearr_21950_21972[(2)] = inst_21913);
(statearr_21950_21972[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (10)))
{var inst_21932 = (state_21936[(2)]);var state_21936__$1 = state_21936;var statearr_21951_21973 = state_21936__$1;(statearr_21951_21973[(2)] = inst_21932);
(statearr_21951_21973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21937 === (8)))
{var inst_21913 = (state_21936[(7)]);var inst_21923 = cljs.core.next.call(null,inst_21913);var inst_21913__$1 = inst_21923;var state_21936__$1 = (function (){var statearr_21952 = state_21936;(statearr_21952[(7)] = inst_21913__$1);
return statearr_21952;
})();var statearr_21953_21974 = state_21936__$1;(statearr_21953_21974[(2)] = null);
(statearr_21953_21974[(1)] = (2));
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
var state_machine__15072__auto____0 = (function (){var statearr_21957 = [null,null,null,null,null,null,null,null];(statearr_21957[(0)] = state_machine__15072__auto__);
(statearr_21957[(1)] = (1));
return statearr_21957;
});
var state_machine__15072__auto____1 = (function (state_21936){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21936);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21958){if((e21958 instanceof Object))
{var ex__15075__auto__ = e21958;var statearr_21959_21975 = state_21936;(statearr_21959_21975[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21976 = state_21936;
state_21936 = G__21976;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21936){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_21960 = f__15087__auto__.call(null);(statearr_21960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21960;
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
cljs.core.async.Mux = (function (){var obj21978 = {};return obj21978;
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
cljs.core.async.Mult = (function (){var obj21980 = {};return obj21980;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22202 = (function (cs,ch,mult,meta22203){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22203 = meta22203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22202.cljs$lang$type = true;
cljs.core.async.t22202.cljs$lang$ctorStr = "cljs.core.async/t22202";
cljs.core.async.t22202.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22202");
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22202.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22204){var self__ = this;
var _22204__$1 = this;return self__.meta22203;
});})(cs))
;
cljs.core.async.t22202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22204,meta22203__$1){var self__ = this;
var _22204__$1 = this;return (new cljs.core.async.t22202(self__.cs,self__.ch,self__.mult,meta22203__$1));
});})(cs))
;
cljs.core.async.__GT_t22202 = ((function (cs){
return (function __GT_t22202(cs__$1,ch__$1,mult__$1,meta22203){return (new cljs.core.async.t22202(cs__$1,ch__$1,mult__$1,meta22203));
});})(cs))
;
}
return (new cljs.core.async.t22202(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15086__auto___22423 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22423,cs,m,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22423,cs,m,dchan,dctr,done){
return (function (state_22335){var state_val_22336 = (state_22335[(1)]);if((state_val_22336 === (7)))
{var inst_22331 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22337_22424 = state_22335__$1;(statearr_22337_22424[(2)] = inst_22331);
(statearr_22337_22424[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (20)))
{var inst_22236 = (state_22335[(7)]);var inst_22246 = cljs.core.first.call(null,inst_22236);var inst_22247 = cljs.core.nth.call(null,inst_22246,(0),null);var inst_22248 = cljs.core.nth.call(null,inst_22246,(1),null);var state_22335__$1 = (function (){var statearr_22338 = state_22335;(statearr_22338[(8)] = inst_22247);
return statearr_22338;
})();if(cljs.core.truth_(inst_22248))
{var statearr_22339_22425 = state_22335__$1;(statearr_22339_22425[(1)] = (22));
} else
{var statearr_22340_22426 = state_22335__$1;(statearr_22340_22426[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (27)))
{var inst_22283 = (state_22335[(9)]);var inst_22207 = (state_22335[(10)]);var inst_22276 = (state_22335[(11)]);var inst_22278 = (state_22335[(12)]);var inst_22283__$1 = cljs.core._nth.call(null,inst_22276,inst_22278);var inst_22284 = cljs.core.async.put_BANG_.call(null,inst_22283__$1,inst_22207,done);var state_22335__$1 = (function (){var statearr_22341 = state_22335;(statearr_22341[(9)] = inst_22283__$1);
return statearr_22341;
})();if(cljs.core.truth_(inst_22284))
{var statearr_22342_22427 = state_22335__$1;(statearr_22342_22427[(1)] = (30));
} else
{var statearr_22343_22428 = state_22335__$1;(statearr_22343_22428[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (1)))
{var state_22335__$1 = state_22335;var statearr_22344_22429 = state_22335__$1;(statearr_22344_22429[(2)] = null);
(statearr_22344_22429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (24)))
{var inst_22236 = (state_22335[(7)]);var inst_22253 = (state_22335[(2)]);var inst_22254 = cljs.core.next.call(null,inst_22236);var inst_22216 = inst_22254;var inst_22217 = null;var inst_22218 = (0);var inst_22219 = (0);var state_22335__$1 = (function (){var statearr_22345 = state_22335;(statearr_22345[(13)] = inst_22219);
(statearr_22345[(14)] = inst_22216);
(statearr_22345[(15)] = inst_22218);
(statearr_22345[(16)] = inst_22217);
(statearr_22345[(17)] = inst_22253);
return statearr_22345;
})();var statearr_22346_22430 = state_22335__$1;(statearr_22346_22430[(2)] = null);
(statearr_22346_22430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (39)))
{var state_22335__$1 = state_22335;var statearr_22350_22431 = state_22335__$1;(statearr_22350_22431[(2)] = null);
(statearr_22350_22431[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (4)))
{var inst_22207 = (state_22335[(10)]);var inst_22207__$1 = (state_22335[(2)]);var inst_22208 = (inst_22207__$1 == null);var state_22335__$1 = (function (){var statearr_22351 = state_22335;(statearr_22351[(10)] = inst_22207__$1);
return statearr_22351;
})();if(cljs.core.truth_(inst_22208))
{var statearr_22352_22432 = state_22335__$1;(statearr_22352_22432[(1)] = (5));
} else
{var statearr_22353_22433 = state_22335__$1;(statearr_22353_22433[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (15)))
{var inst_22219 = (state_22335[(13)]);var inst_22216 = (state_22335[(14)]);var inst_22218 = (state_22335[(15)]);var inst_22217 = (state_22335[(16)]);var inst_22232 = (state_22335[(2)]);var inst_22233 = (inst_22219 + (1));var tmp22347 = inst_22216;var tmp22348 = inst_22218;var tmp22349 = inst_22217;var inst_22216__$1 = tmp22347;var inst_22217__$1 = tmp22349;var inst_22218__$1 = tmp22348;var inst_22219__$1 = inst_22233;var state_22335__$1 = (function (){var statearr_22354 = state_22335;(statearr_22354[(18)] = inst_22232);
(statearr_22354[(13)] = inst_22219__$1);
(statearr_22354[(14)] = inst_22216__$1);
(statearr_22354[(15)] = inst_22218__$1);
(statearr_22354[(16)] = inst_22217__$1);
return statearr_22354;
})();var statearr_22355_22434 = state_22335__$1;(statearr_22355_22434[(2)] = null);
(statearr_22355_22434[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (21)))
{var inst_22257 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22359_22435 = state_22335__$1;(statearr_22359_22435[(2)] = inst_22257);
(statearr_22359_22435[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (31)))
{var inst_22283 = (state_22335[(9)]);var inst_22287 = done.call(null,null);var inst_22288 = cljs.core.async.untap_STAR_.call(null,m,inst_22283);var state_22335__$1 = (function (){var statearr_22360 = state_22335;(statearr_22360[(19)] = inst_22287);
return statearr_22360;
})();var statearr_22361_22436 = state_22335__$1;(statearr_22361_22436[(2)] = inst_22288);
(statearr_22361_22436[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (32)))
{var inst_22275 = (state_22335[(20)]);var inst_22277 = (state_22335[(21)]);var inst_22276 = (state_22335[(11)]);var inst_22278 = (state_22335[(12)]);var inst_22290 = (state_22335[(2)]);var inst_22291 = (inst_22278 + (1));var tmp22356 = inst_22275;var tmp22357 = inst_22277;var tmp22358 = inst_22276;var inst_22275__$1 = tmp22356;var inst_22276__$1 = tmp22358;var inst_22277__$1 = tmp22357;var inst_22278__$1 = inst_22291;var state_22335__$1 = (function (){var statearr_22362 = state_22335;(statearr_22362[(20)] = inst_22275__$1);
(statearr_22362[(22)] = inst_22290);
(statearr_22362[(21)] = inst_22277__$1);
(statearr_22362[(11)] = inst_22276__$1);
(statearr_22362[(12)] = inst_22278__$1);
return statearr_22362;
})();var statearr_22363_22437 = state_22335__$1;(statearr_22363_22437[(2)] = null);
(statearr_22363_22437[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (40)))
{var inst_22303 = (state_22335[(23)]);var inst_22307 = done.call(null,null);var inst_22308 = cljs.core.async.untap_STAR_.call(null,m,inst_22303);var state_22335__$1 = (function (){var statearr_22364 = state_22335;(statearr_22364[(24)] = inst_22307);
return statearr_22364;
})();var statearr_22365_22438 = state_22335__$1;(statearr_22365_22438[(2)] = inst_22308);
(statearr_22365_22438[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (33)))
{var inst_22294 = (state_22335[(25)]);var inst_22296 = cljs.core.chunked_seq_QMARK_.call(null,inst_22294);var state_22335__$1 = state_22335;if(inst_22296)
{var statearr_22366_22439 = state_22335__$1;(statearr_22366_22439[(1)] = (36));
} else
{var statearr_22367_22440 = state_22335__$1;(statearr_22367_22440[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (13)))
{var inst_22226 = (state_22335[(26)]);var inst_22229 = cljs.core.async.close_BANG_.call(null,inst_22226);var state_22335__$1 = state_22335;var statearr_22368_22441 = state_22335__$1;(statearr_22368_22441[(2)] = inst_22229);
(statearr_22368_22441[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (22)))
{var inst_22247 = (state_22335[(8)]);var inst_22250 = cljs.core.async.close_BANG_.call(null,inst_22247);var state_22335__$1 = state_22335;var statearr_22369_22442 = state_22335__$1;(statearr_22369_22442[(2)] = inst_22250);
(statearr_22369_22442[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (36)))
{var inst_22294 = (state_22335[(25)]);var inst_22298 = cljs.core.chunk_first.call(null,inst_22294);var inst_22299 = cljs.core.chunk_rest.call(null,inst_22294);var inst_22300 = cljs.core.count.call(null,inst_22298);var inst_22275 = inst_22299;var inst_22276 = inst_22298;var inst_22277 = inst_22300;var inst_22278 = (0);var state_22335__$1 = (function (){var statearr_22370 = state_22335;(statearr_22370[(20)] = inst_22275);
(statearr_22370[(21)] = inst_22277);
(statearr_22370[(11)] = inst_22276);
(statearr_22370[(12)] = inst_22278);
return statearr_22370;
})();var statearr_22371_22443 = state_22335__$1;(statearr_22371_22443[(2)] = null);
(statearr_22371_22443[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (41)))
{var inst_22294 = (state_22335[(25)]);var inst_22310 = (state_22335[(2)]);var inst_22311 = cljs.core.next.call(null,inst_22294);var inst_22275 = inst_22311;var inst_22276 = null;var inst_22277 = (0);var inst_22278 = (0);var state_22335__$1 = (function (){var statearr_22372 = state_22335;(statearr_22372[(20)] = inst_22275);
(statearr_22372[(27)] = inst_22310);
(statearr_22372[(21)] = inst_22277);
(statearr_22372[(11)] = inst_22276);
(statearr_22372[(12)] = inst_22278);
return statearr_22372;
})();var statearr_22373_22444 = state_22335__$1;(statearr_22373_22444[(2)] = null);
(statearr_22373_22444[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (43)))
{var state_22335__$1 = state_22335;var statearr_22374_22445 = state_22335__$1;(statearr_22374_22445[(2)] = null);
(statearr_22374_22445[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (29)))
{var inst_22319 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22375_22446 = state_22335__$1;(statearr_22375_22446[(2)] = inst_22319);
(statearr_22375_22446[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (44)))
{var inst_22328 = (state_22335[(2)]);var state_22335__$1 = (function (){var statearr_22376 = state_22335;(statearr_22376[(28)] = inst_22328);
return statearr_22376;
})();var statearr_22377_22447 = state_22335__$1;(statearr_22377_22447[(2)] = null);
(statearr_22377_22447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (6)))
{var inst_22267 = (state_22335[(29)]);var inst_22266 = cljs.core.deref.call(null,cs);var inst_22267__$1 = cljs.core.keys.call(null,inst_22266);var inst_22268 = cljs.core.count.call(null,inst_22267__$1);var inst_22269 = cljs.core.reset_BANG_.call(null,dctr,inst_22268);var inst_22274 = cljs.core.seq.call(null,inst_22267__$1);var inst_22275 = inst_22274;var inst_22276 = null;var inst_22277 = (0);var inst_22278 = (0);var state_22335__$1 = (function (){var statearr_22378 = state_22335;(statearr_22378[(29)] = inst_22267__$1);
(statearr_22378[(20)] = inst_22275);
(statearr_22378[(30)] = inst_22269);
(statearr_22378[(21)] = inst_22277);
(statearr_22378[(11)] = inst_22276);
(statearr_22378[(12)] = inst_22278);
return statearr_22378;
})();var statearr_22379_22448 = state_22335__$1;(statearr_22379_22448[(2)] = null);
(statearr_22379_22448[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (28)))
{var inst_22275 = (state_22335[(20)]);var inst_22294 = (state_22335[(25)]);var inst_22294__$1 = cljs.core.seq.call(null,inst_22275);var state_22335__$1 = (function (){var statearr_22380 = state_22335;(statearr_22380[(25)] = inst_22294__$1);
return statearr_22380;
})();if(inst_22294__$1)
{var statearr_22381_22449 = state_22335__$1;(statearr_22381_22449[(1)] = (33));
} else
{var statearr_22382_22450 = state_22335__$1;(statearr_22382_22450[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (25)))
{var inst_22277 = (state_22335[(21)]);var inst_22278 = (state_22335[(12)]);var inst_22280 = (inst_22278 < inst_22277);var inst_22281 = inst_22280;var state_22335__$1 = state_22335;if(cljs.core.truth_(inst_22281))
{var statearr_22383_22451 = state_22335__$1;(statearr_22383_22451[(1)] = (27));
} else
{var statearr_22384_22452 = state_22335__$1;(statearr_22384_22452[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (34)))
{var state_22335__$1 = state_22335;var statearr_22385_22453 = state_22335__$1;(statearr_22385_22453[(2)] = null);
(statearr_22385_22453[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (17)))
{var state_22335__$1 = state_22335;var statearr_22386_22454 = state_22335__$1;(statearr_22386_22454[(2)] = null);
(statearr_22386_22454[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (3)))
{var inst_22333 = (state_22335[(2)]);var state_22335__$1 = state_22335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else
{if((state_val_22336 === (12)))
{var inst_22262 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22387_22455 = state_22335__$1;(statearr_22387_22455[(2)] = inst_22262);
(statearr_22387_22455[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (2)))
{var state_22335__$1 = state_22335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),ch);
} else
{if((state_val_22336 === (23)))
{var state_22335__$1 = state_22335;var statearr_22388_22456 = state_22335__$1;(statearr_22388_22456[(2)] = null);
(statearr_22388_22456[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (35)))
{var inst_22317 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22389_22457 = state_22335__$1;(statearr_22389_22457[(2)] = inst_22317);
(statearr_22389_22457[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (19)))
{var inst_22236 = (state_22335[(7)]);var inst_22240 = cljs.core.chunk_first.call(null,inst_22236);var inst_22241 = cljs.core.chunk_rest.call(null,inst_22236);var inst_22242 = cljs.core.count.call(null,inst_22240);var inst_22216 = inst_22241;var inst_22217 = inst_22240;var inst_22218 = inst_22242;var inst_22219 = (0);var state_22335__$1 = (function (){var statearr_22390 = state_22335;(statearr_22390[(13)] = inst_22219);
(statearr_22390[(14)] = inst_22216);
(statearr_22390[(15)] = inst_22218);
(statearr_22390[(16)] = inst_22217);
return statearr_22390;
})();var statearr_22391_22458 = state_22335__$1;(statearr_22391_22458[(2)] = null);
(statearr_22391_22458[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (11)))
{var inst_22236 = (state_22335[(7)]);var inst_22216 = (state_22335[(14)]);var inst_22236__$1 = cljs.core.seq.call(null,inst_22216);var state_22335__$1 = (function (){var statearr_22392 = state_22335;(statearr_22392[(7)] = inst_22236__$1);
return statearr_22392;
})();if(inst_22236__$1)
{var statearr_22393_22459 = state_22335__$1;(statearr_22393_22459[(1)] = (16));
} else
{var statearr_22394_22460 = state_22335__$1;(statearr_22394_22460[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (9)))
{var inst_22264 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22395_22461 = state_22335__$1;(statearr_22395_22461[(2)] = inst_22264);
(statearr_22395_22461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (5)))
{var inst_22214 = cljs.core.deref.call(null,cs);var inst_22215 = cljs.core.seq.call(null,inst_22214);var inst_22216 = inst_22215;var inst_22217 = null;var inst_22218 = (0);var inst_22219 = (0);var state_22335__$1 = (function (){var statearr_22396 = state_22335;(statearr_22396[(13)] = inst_22219);
(statearr_22396[(14)] = inst_22216);
(statearr_22396[(15)] = inst_22218);
(statearr_22396[(16)] = inst_22217);
return statearr_22396;
})();var statearr_22397_22462 = state_22335__$1;(statearr_22397_22462[(2)] = null);
(statearr_22397_22462[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (14)))
{var state_22335__$1 = state_22335;var statearr_22398_22463 = state_22335__$1;(statearr_22398_22463[(2)] = null);
(statearr_22398_22463[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (45)))
{var inst_22325 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22399_22464 = state_22335__$1;(statearr_22399_22464[(2)] = inst_22325);
(statearr_22399_22464[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (26)))
{var inst_22267 = (state_22335[(29)]);var inst_22321 = (state_22335[(2)]);var inst_22322 = cljs.core.seq.call(null,inst_22267);var state_22335__$1 = (function (){var statearr_22400 = state_22335;(statearr_22400[(31)] = inst_22321);
return statearr_22400;
})();if(inst_22322)
{var statearr_22401_22465 = state_22335__$1;(statearr_22401_22465[(1)] = (42));
} else
{var statearr_22402_22466 = state_22335__$1;(statearr_22402_22466[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (16)))
{var inst_22236 = (state_22335[(7)]);var inst_22238 = cljs.core.chunked_seq_QMARK_.call(null,inst_22236);var state_22335__$1 = state_22335;if(inst_22238)
{var statearr_22403_22467 = state_22335__$1;(statearr_22403_22467[(1)] = (19));
} else
{var statearr_22404_22468 = state_22335__$1;(statearr_22404_22468[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (38)))
{var inst_22314 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22405_22469 = state_22335__$1;(statearr_22405_22469[(2)] = inst_22314);
(statearr_22405_22469[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (30)))
{var state_22335__$1 = state_22335;var statearr_22406_22470 = state_22335__$1;(statearr_22406_22470[(2)] = null);
(statearr_22406_22470[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (10)))
{var inst_22219 = (state_22335[(13)]);var inst_22217 = (state_22335[(16)]);var inst_22225 = cljs.core._nth.call(null,inst_22217,inst_22219);var inst_22226 = cljs.core.nth.call(null,inst_22225,(0),null);var inst_22227 = cljs.core.nth.call(null,inst_22225,(1),null);var state_22335__$1 = (function (){var statearr_22407 = state_22335;(statearr_22407[(26)] = inst_22226);
return statearr_22407;
})();if(cljs.core.truth_(inst_22227))
{var statearr_22408_22471 = state_22335__$1;(statearr_22408_22471[(1)] = (13));
} else
{var statearr_22409_22472 = state_22335__$1;(statearr_22409_22472[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (18)))
{var inst_22260 = (state_22335[(2)]);var state_22335__$1 = state_22335;var statearr_22410_22473 = state_22335__$1;(statearr_22410_22473[(2)] = inst_22260);
(statearr_22410_22473[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (42)))
{var state_22335__$1 = state_22335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(45),dchan);
} else
{if((state_val_22336 === (37)))
{var inst_22303 = (state_22335[(23)]);var inst_22207 = (state_22335[(10)]);var inst_22294 = (state_22335[(25)]);var inst_22303__$1 = cljs.core.first.call(null,inst_22294);var inst_22304 = cljs.core.async.put_BANG_.call(null,inst_22303__$1,inst_22207,done);var state_22335__$1 = (function (){var statearr_22411 = state_22335;(statearr_22411[(23)] = inst_22303__$1);
return statearr_22411;
})();if(cljs.core.truth_(inst_22304))
{var statearr_22412_22474 = state_22335__$1;(statearr_22412_22474[(1)] = (39));
} else
{var statearr_22413_22475 = state_22335__$1;(statearr_22413_22475[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22336 === (8)))
{var inst_22219 = (state_22335[(13)]);var inst_22218 = (state_22335[(15)]);var inst_22221 = (inst_22219 < inst_22218);var inst_22222 = inst_22221;var state_22335__$1 = state_22335;if(cljs.core.truth_(inst_22222))
{var statearr_22414_22476 = state_22335__$1;(statearr_22414_22476[(1)] = (10));
} else
{var statearr_22415_22477 = state_22335__$1;(statearr_22415_22477[(1)] = (11));
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
});})(c__15086__auto___22423,cs,m,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___22423,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22419[(0)] = state_machine__15072__auto__);
(statearr_22419[(1)] = (1));
return statearr_22419;
});
var state_machine__15072__auto____1 = (function (state_22335){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22335);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22420){if((e22420 instanceof Object))
{var ex__15075__auto__ = e22420;var statearr_22421_22478 = state_22335;(statearr_22421_22478[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22420;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22479 = state_22335;
state_22335 = G__22479;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22423,cs,m,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_22422 = f__15087__auto__.call(null);(statearr_22422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22423);
return statearr_22422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22423,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj22481 = {};return obj22481;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22482){var map__22487 = p__22482;var map__22487__$1 = ((cljs.core.seq_QMARK_.call(null,map__22487))?cljs.core.apply.call(null,cljs.core.hash_map,map__22487):map__22487);var opts = map__22487__$1;var statearr_22488_22491 = state;(statearr_22488_22491[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22487,map__22487__$1,opts){
return (function (val){var statearr_22489_22492 = state;(statearr_22489_22492[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22487,map__22487__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_22490_22493 = state;(statearr_22490_22493[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22482 = null;if (arguments.length > 3) {
  p__22482 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22482);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22494){
var state = cljs.core.first(arglist__22494);
arglist__22494 = cljs.core.next(arglist__22494);
var cont_block = cljs.core.first(arglist__22494);
arglist__22494 = cljs.core.next(arglist__22494);
var ports = cljs.core.first(arglist__22494);
var p__22482 = cljs.core.rest(arglist__22494);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22482);
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
;var m = (function (){if(typeof cljs.core.async.t22614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22614 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22615){
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
this.meta22615 = meta22615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22614.cljs$lang$type = true;
cljs.core.async.t22614.cljs$lang$ctorStr = "cljs.core.async/t22614";
cljs.core.async.t22614.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22614");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22616){var self__ = this;
var _22616__$1 = this;return self__.meta22615;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22616,meta22615__$1){var self__ = this;
var _22616__$1 = this;return (new cljs.core.async.t22614(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22615__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22614 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22614(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22615){return (new cljs.core.async.t22614(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22615));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22614(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15086__auto___22733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22686){var state_val_22687 = (state_22686[(1)]);if((state_val_22687 === (7)))
{var inst_22630 = (state_22686[(7)]);var inst_22635 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22630);var state_22686__$1 = state_22686;var statearr_22688_22734 = state_22686__$1;(statearr_22688_22734[(2)] = inst_22635);
(statearr_22688_22734[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (20)))
{var inst_22645 = (state_22686[(8)]);var state_22686__$1 = state_22686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22686__$1,(23),out,inst_22645);
} else
{if((state_val_22687 === (1)))
{var inst_22620 = (state_22686[(9)]);var inst_22620__$1 = calc_state.call(null);var inst_22621 = cljs.core.seq_QMARK_.call(null,inst_22620__$1);var state_22686__$1 = (function (){var statearr_22689 = state_22686;(statearr_22689[(9)] = inst_22620__$1);
return statearr_22689;
})();if(inst_22621)
{var statearr_22690_22735 = state_22686__$1;(statearr_22690_22735[(1)] = (2));
} else
{var statearr_22691_22736 = state_22686__$1;(statearr_22691_22736[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (24)))
{var inst_22638 = (state_22686[(10)]);var inst_22630 = inst_22638;var state_22686__$1 = (function (){var statearr_22692 = state_22686;(statearr_22692[(7)] = inst_22630);
return statearr_22692;
})();var statearr_22693_22737 = state_22686__$1;(statearr_22693_22737[(2)] = null);
(statearr_22693_22737[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (4)))
{var inst_22620 = (state_22686[(9)]);var inst_22626 = (state_22686[(2)]);var inst_22627 = cljs.core.get.call(null,inst_22626,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22628 = cljs.core.get.call(null,inst_22626,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22629 = cljs.core.get.call(null,inst_22626,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22630 = inst_22620;var state_22686__$1 = (function (){var statearr_22694 = state_22686;(statearr_22694[(11)] = inst_22629);
(statearr_22694[(12)] = inst_22627);
(statearr_22694[(13)] = inst_22628);
(statearr_22694[(7)] = inst_22630);
return statearr_22694;
})();var statearr_22695_22738 = state_22686__$1;(statearr_22695_22738[(2)] = null);
(statearr_22695_22738[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (15)))
{var state_22686__$1 = state_22686;var statearr_22696_22739 = state_22686__$1;(statearr_22696_22739[(2)] = null);
(statearr_22696_22739[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (21)))
{var inst_22638 = (state_22686[(10)]);var inst_22630 = inst_22638;var state_22686__$1 = (function (){var statearr_22697 = state_22686;(statearr_22697[(7)] = inst_22630);
return statearr_22697;
})();var statearr_22698_22740 = state_22686__$1;(statearr_22698_22740[(2)] = null);
(statearr_22698_22740[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (13)))
{var inst_22682 = (state_22686[(2)]);var state_22686__$1 = state_22686;var statearr_22699_22741 = state_22686__$1;(statearr_22699_22741[(2)] = inst_22682);
(statearr_22699_22741[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (22)))
{var inst_22680 = (state_22686[(2)]);var state_22686__$1 = state_22686;var statearr_22700_22742 = state_22686__$1;(statearr_22700_22742[(2)] = inst_22680);
(statearr_22700_22742[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (6)))
{var inst_22684 = (state_22686[(2)]);var state_22686__$1 = state_22686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22686__$1,inst_22684);
} else
{if((state_val_22687 === (25)))
{var state_22686__$1 = state_22686;var statearr_22701_22743 = state_22686__$1;(statearr_22701_22743[(2)] = null);
(statearr_22701_22743[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (17)))
{var inst_22660 = (state_22686[(14)]);var state_22686__$1 = state_22686;var statearr_22702_22744 = state_22686__$1;(statearr_22702_22744[(2)] = inst_22660);
(statearr_22702_22744[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (3)))
{var inst_22620 = (state_22686[(9)]);var state_22686__$1 = state_22686;var statearr_22703_22745 = state_22686__$1;(statearr_22703_22745[(2)] = inst_22620);
(statearr_22703_22745[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (12)))
{var inst_22646 = (state_22686[(15)]);var inst_22660 = (state_22686[(14)]);var inst_22641 = (state_22686[(16)]);var inst_22660__$1 = inst_22641.call(null,inst_22646);var state_22686__$1 = (function (){var statearr_22704 = state_22686;(statearr_22704[(14)] = inst_22660__$1);
return statearr_22704;
})();if(cljs.core.truth_(inst_22660__$1))
{var statearr_22705_22746 = state_22686__$1;(statearr_22705_22746[(1)] = (17));
} else
{var statearr_22706_22747 = state_22686__$1;(statearr_22706_22747[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (2)))
{var inst_22620 = (state_22686[(9)]);var inst_22623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22620);var state_22686__$1 = state_22686;var statearr_22707_22748 = state_22686__$1;(statearr_22707_22748[(2)] = inst_22623);
(statearr_22707_22748[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (23)))
{var inst_22671 = (state_22686[(2)]);var state_22686__$1 = state_22686;if(cljs.core.truth_(inst_22671))
{var statearr_22708_22749 = state_22686__$1;(statearr_22708_22749[(1)] = (24));
} else
{var statearr_22709_22750 = state_22686__$1;(statearr_22709_22750[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (19)))
{var inst_22668 = (state_22686[(2)]);var state_22686__$1 = state_22686;if(cljs.core.truth_(inst_22668))
{var statearr_22710_22751 = state_22686__$1;(statearr_22710_22751[(1)] = (20));
} else
{var statearr_22711_22752 = state_22686__$1;(statearr_22711_22752[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (11)))
{var inst_22645 = (state_22686[(8)]);var inst_22651 = (inst_22645 == null);var state_22686__$1 = state_22686;if(cljs.core.truth_(inst_22651))
{var statearr_22712_22753 = state_22686__$1;(statearr_22712_22753[(1)] = (14));
} else
{var statearr_22713_22754 = state_22686__$1;(statearr_22713_22754[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (9)))
{var inst_22638 = (state_22686[(10)]);var inst_22638__$1 = (state_22686[(2)]);var inst_22639 = cljs.core.get.call(null,inst_22638__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22640 = cljs.core.get.call(null,inst_22638__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22641 = cljs.core.get.call(null,inst_22638__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22686__$1 = (function (){var statearr_22714 = state_22686;(statearr_22714[(10)] = inst_22638__$1);
(statearr_22714[(17)] = inst_22640);
(statearr_22714[(16)] = inst_22641);
return statearr_22714;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_22686__$1,(10),inst_22639);
} else
{if((state_val_22687 === (5)))
{var inst_22630 = (state_22686[(7)]);var inst_22633 = cljs.core.seq_QMARK_.call(null,inst_22630);var state_22686__$1 = state_22686;if(inst_22633)
{var statearr_22715_22755 = state_22686__$1;(statearr_22715_22755[(1)] = (7));
} else
{var statearr_22716_22756 = state_22686__$1;(statearr_22716_22756[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (14)))
{var inst_22646 = (state_22686[(15)]);var inst_22653 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22646);var state_22686__$1 = state_22686;var statearr_22717_22757 = state_22686__$1;(statearr_22717_22757[(2)] = inst_22653);
(statearr_22717_22757[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (26)))
{var inst_22676 = (state_22686[(2)]);var state_22686__$1 = state_22686;var statearr_22718_22758 = state_22686__$1;(statearr_22718_22758[(2)] = inst_22676);
(statearr_22718_22758[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (16)))
{var inst_22656 = (state_22686[(2)]);var inst_22657 = calc_state.call(null);var inst_22630 = inst_22657;var state_22686__$1 = (function (){var statearr_22719 = state_22686;(statearr_22719[(18)] = inst_22656);
(statearr_22719[(7)] = inst_22630);
return statearr_22719;
})();var statearr_22720_22759 = state_22686__$1;(statearr_22720_22759[(2)] = null);
(statearr_22720_22759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (10)))
{var inst_22646 = (state_22686[(15)]);var inst_22645 = (state_22686[(8)]);var inst_22644 = (state_22686[(2)]);var inst_22645__$1 = cljs.core.nth.call(null,inst_22644,(0),null);var inst_22646__$1 = cljs.core.nth.call(null,inst_22644,(1),null);var inst_22647 = (inst_22645__$1 == null);var inst_22648 = cljs.core._EQ_.call(null,inst_22646__$1,change);var inst_22649 = (inst_22647) || (inst_22648);var state_22686__$1 = (function (){var statearr_22721 = state_22686;(statearr_22721[(15)] = inst_22646__$1);
(statearr_22721[(8)] = inst_22645__$1);
return statearr_22721;
})();if(cljs.core.truth_(inst_22649))
{var statearr_22722_22760 = state_22686__$1;(statearr_22722_22760[(1)] = (11));
} else
{var statearr_22723_22761 = state_22686__$1;(statearr_22723_22761[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (18)))
{var inst_22646 = (state_22686[(15)]);var inst_22640 = (state_22686[(17)]);var inst_22641 = (state_22686[(16)]);var inst_22663 = cljs.core.empty_QMARK_.call(null,inst_22641);var inst_22664 = inst_22640.call(null,inst_22646);var inst_22665 = cljs.core.not.call(null,inst_22664);var inst_22666 = (inst_22663) && (inst_22665);var state_22686__$1 = state_22686;var statearr_22724_22762 = state_22686__$1;(statearr_22724_22762[(2)] = inst_22666);
(statearr_22724_22762[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22687 === (8)))
{var inst_22630 = (state_22686[(7)]);var state_22686__$1 = state_22686;var statearr_22725_22763 = state_22686__$1;(statearr_22725_22763[(2)] = inst_22630);
(statearr_22725_22763[(1)] = (9));
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
});})(c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15071__auto__,c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22729[(0)] = state_machine__15072__auto__);
(statearr_22729[(1)] = (1));
return statearr_22729;
});
var state_machine__15072__auto____1 = (function (state_22686){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22686);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object))
{var ex__15075__auto__ = e22730;var statearr_22731_22764 = state_22686;(statearr_22731_22764[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22765 = state_22686;
state_22686 = G__22765;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22686){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15088__auto__ = (function (){var statearr_22732 = f__15087__auto__.call(null);(statearr_22732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22733);
return statearr_22732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22733,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj22767 = {};return obj22767;
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
return (function (p1__22768_SHARP_){if(cljs.core.truth_(p1__22768_SHARP_.call(null,topic)))
{return p1__22768_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22768_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22891 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22892){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22892 = meta22892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22891.cljs$lang$type = true;
cljs.core.async.t22891.cljs$lang$ctorStr = "cljs.core.async/t22891";
cljs.core.async.t22891.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22891");
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22891.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22893){var self__ = this;
var _22893__$1 = this;return self__.meta22892;
});})(mults,ensure_mult))
;
cljs.core.async.t22891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22893,meta22892__$1){var self__ = this;
var _22893__$1 = this;return (new cljs.core.async.t22891(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22892__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22891 = ((function (mults,ensure_mult){
return (function __GT_t22891(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22892){return (new cljs.core.async.t22891(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22892));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22891(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15086__auto___23013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23013,mults,ensure_mult,p){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23013,mults,ensure_mult,p){
return (function (state_22965){var state_val_22966 = (state_22965[(1)]);if((state_val_22966 === (7)))
{var inst_22961 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_22967_23014 = state_22965__$1;(statearr_22967_23014[(2)] = inst_22961);
(statearr_22967_23014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (20)))
{var state_22965__$1 = state_22965;var statearr_22968_23015 = state_22965__$1;(statearr_22968_23015[(2)] = null);
(statearr_22968_23015[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (1)))
{var state_22965__$1 = state_22965;var statearr_22969_23016 = state_22965__$1;(statearr_22969_23016[(2)] = null);
(statearr_22969_23016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (24)))
{var inst_22944 = (state_22965[(7)]);var inst_22953 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22944);var state_22965__$1 = state_22965;var statearr_22970_23017 = state_22965__$1;(statearr_22970_23017[(2)] = inst_22953);
(statearr_22970_23017[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (4)))
{var inst_22896 = (state_22965[(8)]);var inst_22896__$1 = (state_22965[(2)]);var inst_22897 = (inst_22896__$1 == null);var state_22965__$1 = (function (){var statearr_22971 = state_22965;(statearr_22971[(8)] = inst_22896__$1);
return statearr_22971;
})();if(cljs.core.truth_(inst_22897))
{var statearr_22972_23018 = state_22965__$1;(statearr_22972_23018[(1)] = (5));
} else
{var statearr_22973_23019 = state_22965__$1;(statearr_22973_23019[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (15)))
{var inst_22938 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_22974_23020 = state_22965__$1;(statearr_22974_23020[(2)] = inst_22938);
(statearr_22974_23020[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (21)))
{var inst_22958 = (state_22965[(2)]);var state_22965__$1 = (function (){var statearr_22975 = state_22965;(statearr_22975[(9)] = inst_22958);
return statearr_22975;
})();var statearr_22976_23021 = state_22965__$1;(statearr_22976_23021[(2)] = null);
(statearr_22976_23021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (13)))
{var inst_22920 = (state_22965[(10)]);var inst_22922 = cljs.core.chunked_seq_QMARK_.call(null,inst_22920);var state_22965__$1 = state_22965;if(inst_22922)
{var statearr_22977_23022 = state_22965__$1;(statearr_22977_23022[(1)] = (16));
} else
{var statearr_22978_23023 = state_22965__$1;(statearr_22978_23023[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (22)))
{var inst_22950 = (state_22965[(2)]);var state_22965__$1 = state_22965;if(cljs.core.truth_(inst_22950))
{var statearr_22979_23024 = state_22965__$1;(statearr_22979_23024[(1)] = (23));
} else
{var statearr_22980_23025 = state_22965__$1;(statearr_22980_23025[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (6)))
{var inst_22944 = (state_22965[(7)]);var inst_22896 = (state_22965[(8)]);var inst_22946 = (state_22965[(11)]);var inst_22944__$1 = topic_fn.call(null,inst_22896);var inst_22945 = cljs.core.deref.call(null,mults);var inst_22946__$1 = cljs.core.get.call(null,inst_22945,inst_22944__$1);var state_22965__$1 = (function (){var statearr_22981 = state_22965;(statearr_22981[(7)] = inst_22944__$1);
(statearr_22981[(11)] = inst_22946__$1);
return statearr_22981;
})();if(cljs.core.truth_(inst_22946__$1))
{var statearr_22982_23026 = state_22965__$1;(statearr_22982_23026[(1)] = (19));
} else
{var statearr_22983_23027 = state_22965__$1;(statearr_22983_23027[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (25)))
{var inst_22955 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_22984_23028 = state_22965__$1;(statearr_22984_23028[(2)] = inst_22955);
(statearr_22984_23028[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (17)))
{var inst_22920 = (state_22965[(10)]);var inst_22929 = cljs.core.first.call(null,inst_22920);var inst_22930 = cljs.core.async.muxch_STAR_.call(null,inst_22929);var inst_22931 = cljs.core.async.close_BANG_.call(null,inst_22930);var inst_22932 = cljs.core.next.call(null,inst_22920);var inst_22906 = inst_22932;var inst_22907 = null;var inst_22908 = (0);var inst_22909 = (0);var state_22965__$1 = (function (){var statearr_22985 = state_22965;(statearr_22985[(12)] = inst_22907);
(statearr_22985[(13)] = inst_22909);
(statearr_22985[(14)] = inst_22931);
(statearr_22985[(15)] = inst_22908);
(statearr_22985[(16)] = inst_22906);
return statearr_22985;
})();var statearr_22986_23029 = state_22965__$1;(statearr_22986_23029[(2)] = null);
(statearr_22986_23029[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (3)))
{var inst_22963 = (state_22965[(2)]);var state_22965__$1 = state_22965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22965__$1,inst_22963);
} else
{if((state_val_22966 === (12)))
{var inst_22940 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_22987_23030 = state_22965__$1;(statearr_22987_23030[(2)] = inst_22940);
(statearr_22987_23030[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (2)))
{var state_22965__$1 = state_22965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22965__$1,(4),ch);
} else
{if((state_val_22966 === (23)))
{var state_22965__$1 = state_22965;var statearr_22988_23031 = state_22965__$1;(statearr_22988_23031[(2)] = null);
(statearr_22988_23031[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (19)))
{var inst_22896 = (state_22965[(8)]);var inst_22946 = (state_22965[(11)]);var inst_22948 = cljs.core.async.muxch_STAR_.call(null,inst_22946);var state_22965__$1 = state_22965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22965__$1,(22),inst_22948,inst_22896);
} else
{if((state_val_22966 === (11)))
{var inst_22920 = (state_22965[(10)]);var inst_22906 = (state_22965[(16)]);var inst_22920__$1 = cljs.core.seq.call(null,inst_22906);var state_22965__$1 = (function (){var statearr_22989 = state_22965;(statearr_22989[(10)] = inst_22920__$1);
return statearr_22989;
})();if(inst_22920__$1)
{var statearr_22990_23032 = state_22965__$1;(statearr_22990_23032[(1)] = (13));
} else
{var statearr_22991_23033 = state_22965__$1;(statearr_22991_23033[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (9)))
{var inst_22942 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_22992_23034 = state_22965__$1;(statearr_22992_23034[(2)] = inst_22942);
(statearr_22992_23034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (5)))
{var inst_22903 = cljs.core.deref.call(null,mults);var inst_22904 = cljs.core.vals.call(null,inst_22903);var inst_22905 = cljs.core.seq.call(null,inst_22904);var inst_22906 = inst_22905;var inst_22907 = null;var inst_22908 = (0);var inst_22909 = (0);var state_22965__$1 = (function (){var statearr_22993 = state_22965;(statearr_22993[(12)] = inst_22907);
(statearr_22993[(13)] = inst_22909);
(statearr_22993[(15)] = inst_22908);
(statearr_22993[(16)] = inst_22906);
return statearr_22993;
})();var statearr_22994_23035 = state_22965__$1;(statearr_22994_23035[(2)] = null);
(statearr_22994_23035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (14)))
{var state_22965__$1 = state_22965;var statearr_22998_23036 = state_22965__$1;(statearr_22998_23036[(2)] = null);
(statearr_22998_23036[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (16)))
{var inst_22920 = (state_22965[(10)]);var inst_22924 = cljs.core.chunk_first.call(null,inst_22920);var inst_22925 = cljs.core.chunk_rest.call(null,inst_22920);var inst_22926 = cljs.core.count.call(null,inst_22924);var inst_22906 = inst_22925;var inst_22907 = inst_22924;var inst_22908 = inst_22926;var inst_22909 = (0);var state_22965__$1 = (function (){var statearr_22999 = state_22965;(statearr_22999[(12)] = inst_22907);
(statearr_22999[(13)] = inst_22909);
(statearr_22999[(15)] = inst_22908);
(statearr_22999[(16)] = inst_22906);
return statearr_22999;
})();var statearr_23000_23037 = state_22965__$1;(statearr_23000_23037[(2)] = null);
(statearr_23000_23037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (10)))
{var inst_22907 = (state_22965[(12)]);var inst_22909 = (state_22965[(13)]);var inst_22908 = (state_22965[(15)]);var inst_22906 = (state_22965[(16)]);var inst_22914 = cljs.core._nth.call(null,inst_22907,inst_22909);var inst_22915 = cljs.core.async.muxch_STAR_.call(null,inst_22914);var inst_22916 = cljs.core.async.close_BANG_.call(null,inst_22915);var inst_22917 = (inst_22909 + (1));var tmp22995 = inst_22907;var tmp22996 = inst_22908;var tmp22997 = inst_22906;var inst_22906__$1 = tmp22997;var inst_22907__$1 = tmp22995;var inst_22908__$1 = tmp22996;var inst_22909__$1 = inst_22917;var state_22965__$1 = (function (){var statearr_23001 = state_22965;(statearr_23001[(12)] = inst_22907__$1);
(statearr_23001[(13)] = inst_22909__$1);
(statearr_23001[(17)] = inst_22916);
(statearr_23001[(15)] = inst_22908__$1);
(statearr_23001[(16)] = inst_22906__$1);
return statearr_23001;
})();var statearr_23002_23038 = state_22965__$1;(statearr_23002_23038[(2)] = null);
(statearr_23002_23038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (18)))
{var inst_22935 = (state_22965[(2)]);var state_22965__$1 = state_22965;var statearr_23003_23039 = state_22965__$1;(statearr_23003_23039[(2)] = inst_22935);
(statearr_23003_23039[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22966 === (8)))
{var inst_22909 = (state_22965[(13)]);var inst_22908 = (state_22965[(15)]);var inst_22911 = (inst_22909 < inst_22908);var inst_22912 = inst_22911;var state_22965__$1 = state_22965;if(cljs.core.truth_(inst_22912))
{var statearr_23004_23040 = state_22965__$1;(statearr_23004_23040[(1)] = (10));
} else
{var statearr_23005_23041 = state_22965__$1;(statearr_23005_23041[(1)] = (11));
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
});})(c__15086__auto___23013,mults,ensure_mult,p))
;return ((function (switch__15071__auto__,c__15086__auto___23013,mults,ensure_mult,p){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23009[(0)] = state_machine__15072__auto__);
(statearr_23009[(1)] = (1));
return statearr_23009;
});
var state_machine__15072__auto____1 = (function (state_22965){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22965);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23010){if((e23010 instanceof Object))
{var ex__15075__auto__ = e23010;var statearr_23011_23042 = state_22965;(statearr_23011_23042[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23010;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23043 = state_22965;
state_22965 = G__23043;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22965){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23013,mults,ensure_mult,p))
})();var state__15088__auto__ = (function (){var statearr_23012 = f__15087__auto__.call(null);(statearr_23012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23013);
return statearr_23012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23013,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15086__auto___23180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23150){var state_val_23151 = (state_23150[(1)]);if((state_val_23151 === (7)))
{var state_23150__$1 = state_23150;var statearr_23152_23181 = state_23150__$1;(statearr_23152_23181[(2)] = null);
(statearr_23152_23181[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (1)))
{var state_23150__$1 = state_23150;var statearr_23153_23182 = state_23150__$1;(statearr_23153_23182[(2)] = null);
(statearr_23153_23182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (4)))
{var inst_23114 = (state_23150[(7)]);var inst_23116 = (inst_23114 < cnt);var state_23150__$1 = state_23150;if(cljs.core.truth_(inst_23116))
{var statearr_23154_23183 = state_23150__$1;(statearr_23154_23183[(1)] = (6));
} else
{var statearr_23155_23184 = state_23150__$1;(statearr_23155_23184[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (15)))
{var inst_23146 = (state_23150[(2)]);var state_23150__$1 = state_23150;var statearr_23156_23185 = state_23150__$1;(statearr_23156_23185[(2)] = inst_23146);
(statearr_23156_23185[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (13)))
{var inst_23139 = cljs.core.async.close_BANG_.call(null,out);var state_23150__$1 = state_23150;var statearr_23157_23186 = state_23150__$1;(statearr_23157_23186[(2)] = inst_23139);
(statearr_23157_23186[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (6)))
{var state_23150__$1 = state_23150;var statearr_23158_23187 = state_23150__$1;(statearr_23158_23187[(2)] = null);
(statearr_23158_23187[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (3)))
{var inst_23148 = (state_23150[(2)]);var state_23150__$1 = state_23150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23150__$1,inst_23148);
} else
{if((state_val_23151 === (12)))
{var inst_23136 = (state_23150[(8)]);var inst_23136__$1 = (state_23150[(2)]);var inst_23137 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23136__$1);var state_23150__$1 = (function (){var statearr_23159 = state_23150;(statearr_23159[(8)] = inst_23136__$1);
return statearr_23159;
})();if(cljs.core.truth_(inst_23137))
{var statearr_23160_23188 = state_23150__$1;(statearr_23160_23188[(1)] = (13));
} else
{var statearr_23161_23189 = state_23150__$1;(statearr_23161_23189[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (2)))
{var inst_23113 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23114 = (0);var state_23150__$1 = (function (){var statearr_23162 = state_23150;(statearr_23162[(9)] = inst_23113);
(statearr_23162[(7)] = inst_23114);
return statearr_23162;
})();var statearr_23163_23190 = state_23150__$1;(statearr_23163_23190[(2)] = null);
(statearr_23163_23190[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (11)))
{var inst_23114 = (state_23150[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23150,(10),Object,null,(9));var inst_23123 = chs__$1.call(null,inst_23114);var inst_23124 = done.call(null,inst_23114);var inst_23125 = cljs.core.async.take_BANG_.call(null,inst_23123,inst_23124);var state_23150__$1 = state_23150;var statearr_23164_23191 = state_23150__$1;(statearr_23164_23191[(2)] = inst_23125);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23150__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (9)))
{var inst_23114 = (state_23150[(7)]);var inst_23127 = (state_23150[(2)]);var inst_23128 = (inst_23114 + (1));var inst_23114__$1 = inst_23128;var state_23150__$1 = (function (){var statearr_23165 = state_23150;(statearr_23165[(7)] = inst_23114__$1);
(statearr_23165[(10)] = inst_23127);
return statearr_23165;
})();var statearr_23166_23192 = state_23150__$1;(statearr_23166_23192[(2)] = null);
(statearr_23166_23192[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (5)))
{var inst_23134 = (state_23150[(2)]);var state_23150__$1 = (function (){var statearr_23167 = state_23150;(statearr_23167[(11)] = inst_23134);
return statearr_23167;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23150__$1,(12),dchan);
} else
{if((state_val_23151 === (14)))
{var inst_23136 = (state_23150[(8)]);var inst_23141 = cljs.core.apply.call(null,f,inst_23136);var state_23150__$1 = state_23150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23150__$1,(16),out,inst_23141);
} else
{if((state_val_23151 === (16)))
{var inst_23143 = (state_23150[(2)]);var state_23150__$1 = (function (){var statearr_23168 = state_23150;(statearr_23168[(12)] = inst_23143);
return statearr_23168;
})();var statearr_23169_23193 = state_23150__$1;(statearr_23169_23193[(2)] = null);
(statearr_23169_23193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (10)))
{var inst_23118 = (state_23150[(2)]);var inst_23119 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23150__$1 = (function (){var statearr_23170 = state_23150;(statearr_23170[(13)] = inst_23118);
return statearr_23170;
})();var statearr_23171_23194 = state_23150__$1;(statearr_23171_23194[(2)] = inst_23119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23150__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23151 === (8)))
{var inst_23132 = (state_23150[(2)]);var state_23150__$1 = state_23150;var statearr_23172_23195 = state_23150__$1;(statearr_23172_23195[(2)] = inst_23132);
(statearr_23172_23195[(1)] = (5));
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
});})(c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23176[(0)] = state_machine__15072__auto__);
(statearr_23176[(1)] = (1));
return statearr_23176;
});
var state_machine__15072__auto____1 = (function (state_23150){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23150);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23177){if((e23177 instanceof Object))
{var ex__15075__auto__ = e23177;var statearr_23178_23196 = state_23150;(statearr_23178_23196[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23197 = state_23150;
state_23150 = G__23197;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23150){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_23179 = f__15087__auto__.call(null);(statearr_23179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23180);
return statearr_23179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23180,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23305 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23305,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23305,out){
return (function (state_23281){var state_val_23282 = (state_23281[(1)]);if((state_val_23282 === (7)))
{var inst_23260 = (state_23281[(7)]);var inst_23261 = (state_23281[(8)]);var inst_23260__$1 = (state_23281[(2)]);var inst_23261__$1 = cljs.core.nth.call(null,inst_23260__$1,(0),null);var inst_23262 = cljs.core.nth.call(null,inst_23260__$1,(1),null);var inst_23263 = (inst_23261__$1 == null);var state_23281__$1 = (function (){var statearr_23283 = state_23281;(statearr_23283[(7)] = inst_23260__$1);
(statearr_23283[(8)] = inst_23261__$1);
(statearr_23283[(9)] = inst_23262);
return statearr_23283;
})();if(cljs.core.truth_(inst_23263))
{var statearr_23284_23306 = state_23281__$1;(statearr_23284_23306[(1)] = (8));
} else
{var statearr_23285_23307 = state_23281__$1;(statearr_23285_23307[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (1)))
{var inst_23252 = cljs.core.vec.call(null,chs);var inst_23253 = inst_23252;var state_23281__$1 = (function (){var statearr_23286 = state_23281;(statearr_23286[(10)] = inst_23253);
return statearr_23286;
})();var statearr_23287_23308 = state_23281__$1;(statearr_23287_23308[(2)] = null);
(statearr_23287_23308[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (4)))
{var inst_23253 = (state_23281[(10)]);var state_23281__$1 = state_23281;return cljs.core.async.ioc_alts_BANG_.call(null,state_23281__$1,(7),inst_23253);
} else
{if((state_val_23282 === (6)))
{var inst_23277 = (state_23281[(2)]);var state_23281__$1 = state_23281;var statearr_23288_23309 = state_23281__$1;(statearr_23288_23309[(2)] = inst_23277);
(statearr_23288_23309[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (3)))
{var inst_23279 = (state_23281[(2)]);var state_23281__$1 = state_23281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23281__$1,inst_23279);
} else
{if((state_val_23282 === (2)))
{var inst_23253 = (state_23281[(10)]);var inst_23255 = cljs.core.count.call(null,inst_23253);var inst_23256 = (inst_23255 > (0));var state_23281__$1 = state_23281;if(cljs.core.truth_(inst_23256))
{var statearr_23290_23310 = state_23281__$1;(statearr_23290_23310[(1)] = (4));
} else
{var statearr_23291_23311 = state_23281__$1;(statearr_23291_23311[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (11)))
{var inst_23253 = (state_23281[(10)]);var inst_23270 = (state_23281[(2)]);var tmp23289 = inst_23253;var inst_23253__$1 = tmp23289;var state_23281__$1 = (function (){var statearr_23292 = state_23281;(statearr_23292[(11)] = inst_23270);
(statearr_23292[(10)] = inst_23253__$1);
return statearr_23292;
})();var statearr_23293_23312 = state_23281__$1;(statearr_23293_23312[(2)] = null);
(statearr_23293_23312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (9)))
{var inst_23261 = (state_23281[(8)]);var state_23281__$1 = state_23281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23281__$1,(11),out,inst_23261);
} else
{if((state_val_23282 === (5)))
{var inst_23275 = cljs.core.async.close_BANG_.call(null,out);var state_23281__$1 = state_23281;var statearr_23294_23313 = state_23281__$1;(statearr_23294_23313[(2)] = inst_23275);
(statearr_23294_23313[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (10)))
{var inst_23273 = (state_23281[(2)]);var state_23281__$1 = state_23281;var statearr_23295_23314 = state_23281__$1;(statearr_23295_23314[(2)] = inst_23273);
(statearr_23295_23314[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23282 === (8)))
{var inst_23260 = (state_23281[(7)]);var inst_23253 = (state_23281[(10)]);var inst_23261 = (state_23281[(8)]);var inst_23262 = (state_23281[(9)]);var inst_23265 = (function (){var c = inst_23262;var v = inst_23261;var vec__23258 = inst_23260;var cs = inst_23253;return ((function (c,v,vec__23258,cs,inst_23260,inst_23253,inst_23261,inst_23262,state_val_23282,c__15086__auto___23305,out){
return (function (p1__23198_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23198_SHARP_);
});
;})(c,v,vec__23258,cs,inst_23260,inst_23253,inst_23261,inst_23262,state_val_23282,c__15086__auto___23305,out))
})();var inst_23266 = cljs.core.filterv.call(null,inst_23265,inst_23253);var inst_23253__$1 = inst_23266;var state_23281__$1 = (function (){var statearr_23296 = state_23281;(statearr_23296[(10)] = inst_23253__$1);
return statearr_23296;
})();var statearr_23297_23315 = state_23281__$1;(statearr_23297_23315[(2)] = null);
(statearr_23297_23315[(1)] = (2));
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
});})(c__15086__auto___23305,out))
;return ((function (switch__15071__auto__,c__15086__auto___23305,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23301 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23301[(0)] = state_machine__15072__auto__);
(statearr_23301[(1)] = (1));
return statearr_23301;
});
var state_machine__15072__auto____1 = (function (state_23281){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23281);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23302){if((e23302 instanceof Object))
{var ex__15075__auto__ = e23302;var statearr_23303_23316 = state_23281;(statearr_23303_23316[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23317 = state_23281;
state_23281 = G__23317;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23281){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23305,out))
})();var state__15088__auto__ = (function (){var statearr_23304 = f__15087__auto__.call(null);(statearr_23304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23305);
return statearr_23304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23305,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23410,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23410,out){
return (function (state_23387){var state_val_23388 = (state_23387[(1)]);if((state_val_23388 === (7)))
{var inst_23369 = (state_23387[(7)]);var inst_23369__$1 = (state_23387[(2)]);var inst_23370 = (inst_23369__$1 == null);var inst_23371 = cljs.core.not.call(null,inst_23370);var state_23387__$1 = (function (){var statearr_23389 = state_23387;(statearr_23389[(7)] = inst_23369__$1);
return statearr_23389;
})();if(inst_23371)
{var statearr_23390_23411 = state_23387__$1;(statearr_23390_23411[(1)] = (8));
} else
{var statearr_23391_23412 = state_23387__$1;(statearr_23391_23412[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (1)))
{var inst_23364 = (0);var state_23387__$1 = (function (){var statearr_23392 = state_23387;(statearr_23392[(8)] = inst_23364);
return statearr_23392;
})();var statearr_23393_23413 = state_23387__$1;(statearr_23393_23413[(2)] = null);
(statearr_23393_23413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (4)))
{var state_23387__$1 = state_23387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23387__$1,(7),ch);
} else
{if((state_val_23388 === (6)))
{var inst_23382 = (state_23387[(2)]);var state_23387__$1 = state_23387;var statearr_23394_23414 = state_23387__$1;(statearr_23394_23414[(2)] = inst_23382);
(statearr_23394_23414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (3)))
{var inst_23384 = (state_23387[(2)]);var inst_23385 = cljs.core.async.close_BANG_.call(null,out);var state_23387__$1 = (function (){var statearr_23395 = state_23387;(statearr_23395[(9)] = inst_23384);
return statearr_23395;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23387__$1,inst_23385);
} else
{if((state_val_23388 === (2)))
{var inst_23364 = (state_23387[(8)]);var inst_23366 = (inst_23364 < n);var state_23387__$1 = state_23387;if(cljs.core.truth_(inst_23366))
{var statearr_23396_23415 = state_23387__$1;(statearr_23396_23415[(1)] = (4));
} else
{var statearr_23397_23416 = state_23387__$1;(statearr_23397_23416[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (11)))
{var inst_23364 = (state_23387[(8)]);var inst_23374 = (state_23387[(2)]);var inst_23375 = (inst_23364 + (1));var inst_23364__$1 = inst_23375;var state_23387__$1 = (function (){var statearr_23398 = state_23387;(statearr_23398[(8)] = inst_23364__$1);
(statearr_23398[(10)] = inst_23374);
return statearr_23398;
})();var statearr_23399_23417 = state_23387__$1;(statearr_23399_23417[(2)] = null);
(statearr_23399_23417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (9)))
{var state_23387__$1 = state_23387;var statearr_23400_23418 = state_23387__$1;(statearr_23400_23418[(2)] = null);
(statearr_23400_23418[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (5)))
{var state_23387__$1 = state_23387;var statearr_23401_23419 = state_23387__$1;(statearr_23401_23419[(2)] = null);
(statearr_23401_23419[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (10)))
{var inst_23379 = (state_23387[(2)]);var state_23387__$1 = state_23387;var statearr_23402_23420 = state_23387__$1;(statearr_23402_23420[(2)] = inst_23379);
(statearr_23402_23420[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23388 === (8)))
{var inst_23369 = (state_23387[(7)]);var state_23387__$1 = state_23387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23387__$1,(11),out,inst_23369);
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
});})(c__15086__auto___23410,out))
;return ((function (switch__15071__auto__,c__15086__auto___23410,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23406 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23406[(0)] = state_machine__15072__auto__);
(statearr_23406[(1)] = (1));
return statearr_23406;
});
var state_machine__15072__auto____1 = (function (state_23387){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23387);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23407){if((e23407 instanceof Object))
{var ex__15075__auto__ = e23407;var statearr_23408_23421 = state_23387;(statearr_23408_23421[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23422 = state_23387;
state_23387 = G__23422;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23410,out))
})();var state__15088__auto__ = (function (){var statearr_23409 = f__15087__auto__.call(null);(statearr_23409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23410);
return statearr_23409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23410,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23430 = (function (ch,f,map_LT_,meta23431){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23431 = meta23431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23430.cljs$lang$type = true;
cljs.core.async.t23430.cljs$lang$ctorStr = "cljs.core.async/t23430";
cljs.core.async.t23430.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23430");
});
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23433 = (function (fn1,_,meta23431,ch,f,map_LT_,meta23434){
this.fn1 = fn1;
this._ = _;
this.meta23431 = meta23431;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23434 = meta23434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23433.cljs$lang$type = true;
cljs.core.async.t23433.cljs$lang$ctorStr = "cljs.core.async/t23433";
cljs.core.async.t23433.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23433");
});})(___$1))
;
cljs.core.async.t23433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23423_SHARP_){return f1.call(null,(((p1__23423_SHARP_ == null))?null:self__.f.call(null,p1__23423_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23435){var self__ = this;
var _23435__$1 = this;return self__.meta23434;
});})(___$1))
;
cljs.core.async.t23433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23435,meta23434__$1){var self__ = this;
var _23435__$1 = this;return (new cljs.core.async.t23433(self__.fn1,self__._,self__.meta23431,self__.ch,self__.f,self__.map_LT_,meta23434__$1));
});})(___$1))
;
cljs.core.async.__GT_t23433 = ((function (___$1){
return (function __GT_t23433(fn1__$1,___$2,meta23431__$1,ch__$2,f__$2,map_LT___$2,meta23434){return (new cljs.core.async.t23433(fn1__$1,___$2,meta23431__$1,ch__$2,f__$2,map_LT___$2,meta23434));
});})(___$1))
;
}
return (new cljs.core.async.t23433(fn1,___$1,self__.meta23431,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23430.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23432){var self__ = this;
var _23432__$1 = this;return self__.meta23431;
});
cljs.core.async.t23430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23432,meta23431__$1){var self__ = this;
var _23432__$1 = this;return (new cljs.core.async.t23430(self__.ch,self__.f,self__.map_LT_,meta23431__$1));
});
cljs.core.async.__GT_t23430 = (function __GT_t23430(ch__$1,f__$1,map_LT___$1,meta23431){return (new cljs.core.async.t23430(ch__$1,f__$1,map_LT___$1,meta23431));
});
}
return (new cljs.core.async.t23430(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23439 = (function (ch,f,map_GT_,meta23440){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23440 = meta23440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23439.cljs$lang$type = true;
cljs.core.async.t23439.cljs$lang$ctorStr = "cljs.core.async/t23439";
cljs.core.async.t23439.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23439");
});
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23441){var self__ = this;
var _23441__$1 = this;return self__.meta23440;
});
cljs.core.async.t23439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23441,meta23440__$1){var self__ = this;
var _23441__$1 = this;return (new cljs.core.async.t23439(self__.ch,self__.f,self__.map_GT_,meta23440__$1));
});
cljs.core.async.__GT_t23439 = (function __GT_t23439(ch__$1,f__$1,map_GT___$1,meta23440){return (new cljs.core.async.t23439(ch__$1,f__$1,map_GT___$1,meta23440));
});
}
return (new cljs.core.async.t23439(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23445 = (function (ch,p,filter_GT_,meta23446){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23446 = meta23446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23445.cljs$lang$type = true;
cljs.core.async.t23445.cljs$lang$ctorStr = "cljs.core.async/t23445";
cljs.core.async.t23445.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23445");
});
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23447){var self__ = this;
var _23447__$1 = this;return self__.meta23446;
});
cljs.core.async.t23445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23447,meta23446__$1){var self__ = this;
var _23447__$1 = this;return (new cljs.core.async.t23445(self__.ch,self__.p,self__.filter_GT_,meta23446__$1));
});
cljs.core.async.__GT_t23445 = (function __GT_t23445(ch__$1,p__$1,filter_GT___$1,meta23446){return (new cljs.core.async.t23445(ch__$1,p__$1,filter_GT___$1,meta23446));
});
}
return (new cljs.core.async.t23445(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23530,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23530,out){
return (function (state_23509){var state_val_23510 = (state_23509[(1)]);if((state_val_23510 === (7)))
{var inst_23505 = (state_23509[(2)]);var state_23509__$1 = state_23509;var statearr_23511_23531 = state_23509__$1;(statearr_23511_23531[(2)] = inst_23505);
(statearr_23511_23531[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (1)))
{var state_23509__$1 = state_23509;var statearr_23512_23532 = state_23509__$1;(statearr_23512_23532[(2)] = null);
(statearr_23512_23532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (4)))
{var inst_23491 = (state_23509[(7)]);var inst_23491__$1 = (state_23509[(2)]);var inst_23492 = (inst_23491__$1 == null);var state_23509__$1 = (function (){var statearr_23513 = state_23509;(statearr_23513[(7)] = inst_23491__$1);
return statearr_23513;
})();if(cljs.core.truth_(inst_23492))
{var statearr_23514_23533 = state_23509__$1;(statearr_23514_23533[(1)] = (5));
} else
{var statearr_23515_23534 = state_23509__$1;(statearr_23515_23534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (6)))
{var inst_23491 = (state_23509[(7)]);var inst_23496 = p.call(null,inst_23491);var state_23509__$1 = state_23509;if(cljs.core.truth_(inst_23496))
{var statearr_23516_23535 = state_23509__$1;(statearr_23516_23535[(1)] = (8));
} else
{var statearr_23517_23536 = state_23509__$1;(statearr_23517_23536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (3)))
{var inst_23507 = (state_23509[(2)]);var state_23509__$1 = state_23509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23509__$1,inst_23507);
} else
{if((state_val_23510 === (2)))
{var state_23509__$1 = state_23509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23509__$1,(4),ch);
} else
{if((state_val_23510 === (11)))
{var inst_23499 = (state_23509[(2)]);var state_23509__$1 = state_23509;var statearr_23518_23537 = state_23509__$1;(statearr_23518_23537[(2)] = inst_23499);
(statearr_23518_23537[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (9)))
{var state_23509__$1 = state_23509;var statearr_23519_23538 = state_23509__$1;(statearr_23519_23538[(2)] = null);
(statearr_23519_23538[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (5)))
{var inst_23494 = cljs.core.async.close_BANG_.call(null,out);var state_23509__$1 = state_23509;var statearr_23520_23539 = state_23509__$1;(statearr_23520_23539[(2)] = inst_23494);
(statearr_23520_23539[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (10)))
{var inst_23502 = (state_23509[(2)]);var state_23509__$1 = (function (){var statearr_23521 = state_23509;(statearr_23521[(8)] = inst_23502);
return statearr_23521;
})();var statearr_23522_23540 = state_23509__$1;(statearr_23522_23540[(2)] = null);
(statearr_23522_23540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23510 === (8)))
{var inst_23491 = (state_23509[(7)]);var state_23509__$1 = state_23509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23509__$1,(11),out,inst_23491);
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
});})(c__15086__auto___23530,out))
;return ((function (switch__15071__auto__,c__15086__auto___23530,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23526 = [null,null,null,null,null,null,null,null,null];(statearr_23526[(0)] = state_machine__15072__auto__);
(statearr_23526[(1)] = (1));
return statearr_23526;
});
var state_machine__15072__auto____1 = (function (state_23509){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23509);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23527){if((e23527 instanceof Object))
{var ex__15075__auto__ = e23527;var statearr_23528_23541 = state_23509;(statearr_23528_23541[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23509);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23527;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23542 = state_23509;
state_23509 = G__23542;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23509){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23530,out))
})();var state__15088__auto__ = (function (){var statearr_23529 = f__15087__auto__.call(null);(statearr_23529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23530);
return statearr_23529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23530,out))
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
return (function (state_23708){var state_val_23709 = (state_23708[(1)]);if((state_val_23709 === (7)))
{var inst_23704 = (state_23708[(2)]);var state_23708__$1 = state_23708;var statearr_23710_23751 = state_23708__$1;(statearr_23710_23751[(2)] = inst_23704);
(statearr_23710_23751[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (20)))
{var inst_23674 = (state_23708[(7)]);var inst_23685 = (state_23708[(2)]);var inst_23686 = cljs.core.next.call(null,inst_23674);var inst_23660 = inst_23686;var inst_23661 = null;var inst_23662 = (0);var inst_23663 = (0);var state_23708__$1 = (function (){var statearr_23711 = state_23708;(statearr_23711[(8)] = inst_23662);
(statearr_23711[(9)] = inst_23661);
(statearr_23711[(10)] = inst_23663);
(statearr_23711[(11)] = inst_23685);
(statearr_23711[(12)] = inst_23660);
return statearr_23711;
})();var statearr_23712_23752 = state_23708__$1;(statearr_23712_23752[(2)] = null);
(statearr_23712_23752[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (1)))
{var state_23708__$1 = state_23708;var statearr_23713_23753 = state_23708__$1;(statearr_23713_23753[(2)] = null);
(statearr_23713_23753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (4)))
{var inst_23649 = (state_23708[(13)]);var inst_23649__$1 = (state_23708[(2)]);var inst_23650 = (inst_23649__$1 == null);var state_23708__$1 = (function (){var statearr_23714 = state_23708;(statearr_23714[(13)] = inst_23649__$1);
return statearr_23714;
})();if(cljs.core.truth_(inst_23650))
{var statearr_23715_23754 = state_23708__$1;(statearr_23715_23754[(1)] = (5));
} else
{var statearr_23716_23755 = state_23708__$1;(statearr_23716_23755[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (15)))
{var state_23708__$1 = state_23708;var statearr_23720_23756 = state_23708__$1;(statearr_23720_23756[(2)] = null);
(statearr_23720_23756[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (21)))
{var state_23708__$1 = state_23708;var statearr_23721_23757 = state_23708__$1;(statearr_23721_23757[(2)] = null);
(statearr_23721_23757[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (13)))
{var inst_23662 = (state_23708[(8)]);var inst_23661 = (state_23708[(9)]);var inst_23663 = (state_23708[(10)]);var inst_23660 = (state_23708[(12)]);var inst_23670 = (state_23708[(2)]);var inst_23671 = (inst_23663 + (1));var tmp23717 = inst_23662;var tmp23718 = inst_23661;var tmp23719 = inst_23660;var inst_23660__$1 = tmp23719;var inst_23661__$1 = tmp23718;var inst_23662__$1 = tmp23717;var inst_23663__$1 = inst_23671;var state_23708__$1 = (function (){var statearr_23722 = state_23708;(statearr_23722[(8)] = inst_23662__$1);
(statearr_23722[(9)] = inst_23661__$1);
(statearr_23722[(10)] = inst_23663__$1);
(statearr_23722[(14)] = inst_23670);
(statearr_23722[(12)] = inst_23660__$1);
return statearr_23722;
})();var statearr_23723_23758 = state_23708__$1;(statearr_23723_23758[(2)] = null);
(statearr_23723_23758[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (22)))
{var state_23708__$1 = state_23708;var statearr_23724_23759 = state_23708__$1;(statearr_23724_23759[(2)] = null);
(statearr_23724_23759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (6)))
{var inst_23649 = (state_23708[(13)]);var inst_23658 = f.call(null,inst_23649);var inst_23659 = cljs.core.seq.call(null,inst_23658);var inst_23660 = inst_23659;var inst_23661 = null;var inst_23662 = (0);var inst_23663 = (0);var state_23708__$1 = (function (){var statearr_23725 = state_23708;(statearr_23725[(8)] = inst_23662);
(statearr_23725[(9)] = inst_23661);
(statearr_23725[(10)] = inst_23663);
(statearr_23725[(12)] = inst_23660);
return statearr_23725;
})();var statearr_23726_23760 = state_23708__$1;(statearr_23726_23760[(2)] = null);
(statearr_23726_23760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (17)))
{var inst_23674 = (state_23708[(7)]);var inst_23678 = cljs.core.chunk_first.call(null,inst_23674);var inst_23679 = cljs.core.chunk_rest.call(null,inst_23674);var inst_23680 = cljs.core.count.call(null,inst_23678);var inst_23660 = inst_23679;var inst_23661 = inst_23678;var inst_23662 = inst_23680;var inst_23663 = (0);var state_23708__$1 = (function (){var statearr_23727 = state_23708;(statearr_23727[(8)] = inst_23662);
(statearr_23727[(9)] = inst_23661);
(statearr_23727[(10)] = inst_23663);
(statearr_23727[(12)] = inst_23660);
return statearr_23727;
})();var statearr_23728_23761 = state_23708__$1;(statearr_23728_23761[(2)] = null);
(statearr_23728_23761[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (3)))
{var inst_23706 = (state_23708[(2)]);var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23708__$1,inst_23706);
} else
{if((state_val_23709 === (12)))
{var inst_23694 = (state_23708[(2)]);var state_23708__$1 = state_23708;var statearr_23729_23762 = state_23708__$1;(statearr_23729_23762[(2)] = inst_23694);
(statearr_23729_23762[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (2)))
{var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23708__$1,(4),in$);
} else
{if((state_val_23709 === (23)))
{var inst_23702 = (state_23708[(2)]);var state_23708__$1 = state_23708;var statearr_23730_23763 = state_23708__$1;(statearr_23730_23763[(2)] = inst_23702);
(statearr_23730_23763[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (19)))
{var inst_23689 = (state_23708[(2)]);var state_23708__$1 = state_23708;var statearr_23731_23764 = state_23708__$1;(statearr_23731_23764[(2)] = inst_23689);
(statearr_23731_23764[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (11)))
{var inst_23674 = (state_23708[(7)]);var inst_23660 = (state_23708[(12)]);var inst_23674__$1 = cljs.core.seq.call(null,inst_23660);var state_23708__$1 = (function (){var statearr_23732 = state_23708;(statearr_23732[(7)] = inst_23674__$1);
return statearr_23732;
})();if(inst_23674__$1)
{var statearr_23733_23765 = state_23708__$1;(statearr_23733_23765[(1)] = (14));
} else
{var statearr_23734_23766 = state_23708__$1;(statearr_23734_23766[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (9)))
{var inst_23696 = (state_23708[(2)]);var inst_23697 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23708__$1 = (function (){var statearr_23735 = state_23708;(statearr_23735[(15)] = inst_23696);
return statearr_23735;
})();if(cljs.core.truth_(inst_23697))
{var statearr_23736_23767 = state_23708__$1;(statearr_23736_23767[(1)] = (21));
} else
{var statearr_23737_23768 = state_23708__$1;(statearr_23737_23768[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (5)))
{var inst_23652 = cljs.core.async.close_BANG_.call(null,out);var state_23708__$1 = state_23708;var statearr_23738_23769 = state_23708__$1;(statearr_23738_23769[(2)] = inst_23652);
(statearr_23738_23769[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (14)))
{var inst_23674 = (state_23708[(7)]);var inst_23676 = cljs.core.chunked_seq_QMARK_.call(null,inst_23674);var state_23708__$1 = state_23708;if(inst_23676)
{var statearr_23739_23770 = state_23708__$1;(statearr_23739_23770[(1)] = (17));
} else
{var statearr_23740_23771 = state_23708__$1;(statearr_23740_23771[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (16)))
{var inst_23692 = (state_23708[(2)]);var state_23708__$1 = state_23708;var statearr_23741_23772 = state_23708__$1;(statearr_23741_23772[(2)] = inst_23692);
(statearr_23741_23772[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23709 === (10)))
{var inst_23661 = (state_23708[(9)]);var inst_23663 = (state_23708[(10)]);var inst_23668 = cljs.core._nth.call(null,inst_23661,inst_23663);var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23708__$1,(13),out,inst_23668);
} else
{if((state_val_23709 === (18)))
{var inst_23674 = (state_23708[(7)]);var inst_23683 = cljs.core.first.call(null,inst_23674);var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23708__$1,(20),out,inst_23683);
} else
{if((state_val_23709 === (8)))
{var inst_23662 = (state_23708[(8)]);var inst_23663 = (state_23708[(10)]);var inst_23665 = (inst_23663 < inst_23662);var inst_23666 = inst_23665;var state_23708__$1 = state_23708;if(cljs.core.truth_(inst_23666))
{var statearr_23742_23773 = state_23708__$1;(statearr_23742_23773[(1)] = (10));
} else
{var statearr_23743_23774 = state_23708__$1;(statearr_23743_23774[(1)] = (11));
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
var state_machine__15072__auto____0 = (function (){var statearr_23747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23747[(0)] = state_machine__15072__auto__);
(statearr_23747[(1)] = (1));
return statearr_23747;
});
var state_machine__15072__auto____1 = (function (state_23708){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23708);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object))
{var ex__15075__auto__ = e23748;var statearr_23749_23775 = state_23708;(statearr_23749_23775[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23776 = state_23708;
state_23708 = G__23776;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23708){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_23750 = f__15087__auto__.call(null);(statearr_23750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_23750;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23873 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23873,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23873,out){
return (function (state_23848){var state_val_23849 = (state_23848[(1)]);if((state_val_23849 === (7)))
{var inst_23843 = (state_23848[(2)]);var state_23848__$1 = state_23848;var statearr_23850_23874 = state_23848__$1;(statearr_23850_23874[(2)] = inst_23843);
(statearr_23850_23874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (1)))
{var inst_23825 = null;var state_23848__$1 = (function (){var statearr_23851 = state_23848;(statearr_23851[(7)] = inst_23825);
return statearr_23851;
})();var statearr_23852_23875 = state_23848__$1;(statearr_23852_23875[(2)] = null);
(statearr_23852_23875[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (4)))
{var inst_23828 = (state_23848[(8)]);var inst_23828__$1 = (state_23848[(2)]);var inst_23829 = (inst_23828__$1 == null);var inst_23830 = cljs.core.not.call(null,inst_23829);var state_23848__$1 = (function (){var statearr_23853 = state_23848;(statearr_23853[(8)] = inst_23828__$1);
return statearr_23853;
})();if(inst_23830)
{var statearr_23854_23876 = state_23848__$1;(statearr_23854_23876[(1)] = (5));
} else
{var statearr_23855_23877 = state_23848__$1;(statearr_23855_23877[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (6)))
{var state_23848__$1 = state_23848;var statearr_23856_23878 = state_23848__$1;(statearr_23856_23878[(2)] = null);
(statearr_23856_23878[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (3)))
{var inst_23845 = (state_23848[(2)]);var inst_23846 = cljs.core.async.close_BANG_.call(null,out);var state_23848__$1 = (function (){var statearr_23857 = state_23848;(statearr_23857[(9)] = inst_23845);
return statearr_23857;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23848__$1,inst_23846);
} else
{if((state_val_23849 === (2)))
{var state_23848__$1 = state_23848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23848__$1,(4),ch);
} else
{if((state_val_23849 === (11)))
{var inst_23828 = (state_23848[(8)]);var inst_23837 = (state_23848[(2)]);var inst_23825 = inst_23828;var state_23848__$1 = (function (){var statearr_23858 = state_23848;(statearr_23858[(7)] = inst_23825);
(statearr_23858[(10)] = inst_23837);
return statearr_23858;
})();var statearr_23859_23879 = state_23848__$1;(statearr_23859_23879[(2)] = null);
(statearr_23859_23879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (9)))
{var inst_23828 = (state_23848[(8)]);var state_23848__$1 = state_23848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23848__$1,(11),out,inst_23828);
} else
{if((state_val_23849 === (5)))
{var inst_23825 = (state_23848[(7)]);var inst_23828 = (state_23848[(8)]);var inst_23832 = cljs.core._EQ_.call(null,inst_23828,inst_23825);var state_23848__$1 = state_23848;if(inst_23832)
{var statearr_23861_23880 = state_23848__$1;(statearr_23861_23880[(1)] = (8));
} else
{var statearr_23862_23881 = state_23848__$1;(statearr_23862_23881[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (10)))
{var inst_23840 = (state_23848[(2)]);var state_23848__$1 = state_23848;var statearr_23863_23882 = state_23848__$1;(statearr_23863_23882[(2)] = inst_23840);
(statearr_23863_23882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23849 === (8)))
{var inst_23825 = (state_23848[(7)]);var tmp23860 = inst_23825;var inst_23825__$1 = tmp23860;var state_23848__$1 = (function (){var statearr_23864 = state_23848;(statearr_23864[(7)] = inst_23825__$1);
return statearr_23864;
})();var statearr_23865_23883 = state_23848__$1;(statearr_23865_23883[(2)] = null);
(statearr_23865_23883[(1)] = (2));
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
});})(c__15086__auto___23873,out))
;return ((function (switch__15071__auto__,c__15086__auto___23873,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23869 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23869[(0)] = state_machine__15072__auto__);
(statearr_23869[(1)] = (1));
return statearr_23869;
});
var state_machine__15072__auto____1 = (function (state_23848){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23848);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23870){if((e23870 instanceof Object))
{var ex__15075__auto__ = e23870;var statearr_23871_23884 = state_23848;(statearr_23871_23884[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23885 = state_23848;
state_23848 = G__23885;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23873,out))
})();var state__15088__auto__ = (function (){var statearr_23872 = f__15087__auto__.call(null);(statearr_23872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23873);
return statearr_23872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23873,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___24020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___24020,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___24020,out){
return (function (state_23990){var state_val_23991 = (state_23990[(1)]);if((state_val_23991 === (7)))
{var inst_23986 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_23992_24021 = state_23990__$1;(statearr_23992_24021[(2)] = inst_23986);
(statearr_23992_24021[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (1)))
{var inst_23953 = (new Array(n));var inst_23954 = inst_23953;var inst_23955 = (0);var state_23990__$1 = (function (){var statearr_23993 = state_23990;(statearr_23993[(7)] = inst_23954);
(statearr_23993[(8)] = inst_23955);
return statearr_23993;
})();var statearr_23994_24022 = state_23990__$1;(statearr_23994_24022[(2)] = null);
(statearr_23994_24022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (4)))
{var inst_23958 = (state_23990[(9)]);var inst_23958__$1 = (state_23990[(2)]);var inst_23959 = (inst_23958__$1 == null);var inst_23960 = cljs.core.not.call(null,inst_23959);var state_23990__$1 = (function (){var statearr_23995 = state_23990;(statearr_23995[(9)] = inst_23958__$1);
return statearr_23995;
})();if(inst_23960)
{var statearr_23996_24023 = state_23990__$1;(statearr_23996_24023[(1)] = (5));
} else
{var statearr_23997_24024 = state_23990__$1;(statearr_23997_24024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (15)))
{var inst_23980 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_23998_24025 = state_23990__$1;(statearr_23998_24025[(2)] = inst_23980);
(statearr_23998_24025[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (13)))
{var state_23990__$1 = state_23990;var statearr_23999_24026 = state_23990__$1;(statearr_23999_24026[(2)] = null);
(statearr_23999_24026[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (6)))
{var inst_23955 = (state_23990[(8)]);var inst_23976 = (inst_23955 > (0));var state_23990__$1 = state_23990;if(cljs.core.truth_(inst_23976))
{var statearr_24000_24027 = state_23990__$1;(statearr_24000_24027[(1)] = (12));
} else
{var statearr_24001_24028 = state_23990__$1;(statearr_24001_24028[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (3)))
{var inst_23988 = (state_23990[(2)]);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23990__$1,inst_23988);
} else
{if((state_val_23991 === (12)))
{var inst_23954 = (state_23990[(7)]);var inst_23978 = cljs.core.vec.call(null,inst_23954);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23990__$1,(15),out,inst_23978);
} else
{if((state_val_23991 === (2)))
{var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(4),ch);
} else
{if((state_val_23991 === (11)))
{var inst_23970 = (state_23990[(2)]);var inst_23971 = (new Array(n));var inst_23954 = inst_23971;var inst_23955 = (0);var state_23990__$1 = (function (){var statearr_24002 = state_23990;(statearr_24002[(7)] = inst_23954);
(statearr_24002[(8)] = inst_23955);
(statearr_24002[(10)] = inst_23970);
return statearr_24002;
})();var statearr_24003_24029 = state_23990__$1;(statearr_24003_24029[(2)] = null);
(statearr_24003_24029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (9)))
{var inst_23954 = (state_23990[(7)]);var inst_23968 = cljs.core.vec.call(null,inst_23954);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23990__$1,(11),out,inst_23968);
} else
{if((state_val_23991 === (5)))
{var inst_23954 = (state_23990[(7)]);var inst_23963 = (state_23990[(11)]);var inst_23958 = (state_23990[(9)]);var inst_23955 = (state_23990[(8)]);var inst_23962 = (inst_23954[inst_23955] = inst_23958);var inst_23963__$1 = (inst_23955 + (1));var inst_23964 = (inst_23963__$1 < n);var state_23990__$1 = (function (){var statearr_24004 = state_23990;(statearr_24004[(11)] = inst_23963__$1);
(statearr_24004[(12)] = inst_23962);
return statearr_24004;
})();if(cljs.core.truth_(inst_23964))
{var statearr_24005_24030 = state_23990__$1;(statearr_24005_24030[(1)] = (8));
} else
{var statearr_24006_24031 = state_23990__$1;(statearr_24006_24031[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (14)))
{var inst_23983 = (state_23990[(2)]);var inst_23984 = cljs.core.async.close_BANG_.call(null,out);var state_23990__$1 = (function (){var statearr_24008 = state_23990;(statearr_24008[(13)] = inst_23983);
return statearr_24008;
})();var statearr_24009_24032 = state_23990__$1;(statearr_24009_24032[(2)] = inst_23984);
(statearr_24009_24032[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (10)))
{var inst_23974 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_24010_24033 = state_23990__$1;(statearr_24010_24033[(2)] = inst_23974);
(statearr_24010_24033[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (8)))
{var inst_23954 = (state_23990[(7)]);var inst_23963 = (state_23990[(11)]);var tmp24007 = inst_23954;var inst_23954__$1 = tmp24007;var inst_23955 = inst_23963;var state_23990__$1 = (function (){var statearr_24011 = state_23990;(statearr_24011[(7)] = inst_23954__$1);
(statearr_24011[(8)] = inst_23955);
return statearr_24011;
})();var statearr_24012_24034 = state_23990__$1;(statearr_24012_24034[(2)] = null);
(statearr_24012_24034[(1)] = (2));
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
});})(c__15086__auto___24020,out))
;return ((function (switch__15071__auto__,c__15086__auto___24020,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24016[(0)] = state_machine__15072__auto__);
(statearr_24016[(1)] = (1));
return statearr_24016;
});
var state_machine__15072__auto____1 = (function (state_23990){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23990);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24017){if((e24017 instanceof Object))
{var ex__15075__auto__ = e24017;var statearr_24018_24035 = state_23990;(statearr_24018_24035[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24036 = state_23990;
state_23990 = G__24036;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23990){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___24020,out))
})();var state__15088__auto__ = (function (){var statearr_24019 = f__15087__auto__.call(null);(statearr_24019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___24020);
return statearr_24019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___24020,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___24179 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___24179,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___24179,out){
return (function (state_24149){var state_val_24150 = (state_24149[(1)]);if((state_val_24150 === (7)))
{var inst_24145 = (state_24149[(2)]);var state_24149__$1 = state_24149;var statearr_24151_24180 = state_24149__$1;(statearr_24151_24180[(2)] = inst_24145);
(statearr_24151_24180[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (1)))
{var inst_24108 = [];var inst_24109 = inst_24108;var inst_24110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_24149__$1 = (function (){var statearr_24152 = state_24149;(statearr_24152[(7)] = inst_24110);
(statearr_24152[(8)] = inst_24109);
return statearr_24152;
})();var statearr_24153_24181 = state_24149__$1;(statearr_24153_24181[(2)] = null);
(statearr_24153_24181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (4)))
{var inst_24113 = (state_24149[(9)]);var inst_24113__$1 = (state_24149[(2)]);var inst_24114 = (inst_24113__$1 == null);var inst_24115 = cljs.core.not.call(null,inst_24114);var state_24149__$1 = (function (){var statearr_24154 = state_24149;(statearr_24154[(9)] = inst_24113__$1);
return statearr_24154;
})();if(inst_24115)
{var statearr_24155_24182 = state_24149__$1;(statearr_24155_24182[(1)] = (5));
} else
{var statearr_24156_24183 = state_24149__$1;(statearr_24156_24183[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (15)))
{var inst_24139 = (state_24149[(2)]);var state_24149__$1 = state_24149;var statearr_24157_24184 = state_24149__$1;(statearr_24157_24184[(2)] = inst_24139);
(statearr_24157_24184[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (13)))
{var state_24149__$1 = state_24149;var statearr_24158_24185 = state_24149__$1;(statearr_24158_24185[(2)] = null);
(statearr_24158_24185[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (6)))
{var inst_24109 = (state_24149[(8)]);var inst_24134 = inst_24109.length;var inst_24135 = (inst_24134 > (0));var state_24149__$1 = state_24149;if(cljs.core.truth_(inst_24135))
{var statearr_24159_24186 = state_24149__$1;(statearr_24159_24186[(1)] = (12));
} else
{var statearr_24160_24187 = state_24149__$1;(statearr_24160_24187[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (3)))
{var inst_24147 = (state_24149[(2)]);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24149__$1,inst_24147);
} else
{if((state_val_24150 === (12)))
{var inst_24109 = (state_24149[(8)]);var inst_24137 = cljs.core.vec.call(null,inst_24109);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24149__$1,(15),out,inst_24137);
} else
{if((state_val_24150 === (2)))
{var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24149__$1,(4),ch);
} else
{if((state_val_24150 === (11)))
{var inst_24117 = (state_24149[(10)]);var inst_24113 = (state_24149[(9)]);var inst_24127 = (state_24149[(2)]);var inst_24128 = [];var inst_24129 = inst_24128.push(inst_24113);var inst_24109 = inst_24128;var inst_24110 = inst_24117;var state_24149__$1 = (function (){var statearr_24161 = state_24149;(statearr_24161[(7)] = inst_24110);
(statearr_24161[(8)] = inst_24109);
(statearr_24161[(11)] = inst_24127);
(statearr_24161[(12)] = inst_24129);
return statearr_24161;
})();var statearr_24162_24188 = state_24149__$1;(statearr_24162_24188[(2)] = null);
(statearr_24162_24188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (9)))
{var inst_24109 = (state_24149[(8)]);var inst_24125 = cljs.core.vec.call(null,inst_24109);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24149__$1,(11),out,inst_24125);
} else
{if((state_val_24150 === (5)))
{var inst_24110 = (state_24149[(7)]);var inst_24117 = (state_24149[(10)]);var inst_24113 = (state_24149[(9)]);var inst_24117__$1 = f.call(null,inst_24113);var inst_24118 = cljs.core._EQ_.call(null,inst_24117__$1,inst_24110);var inst_24119 = cljs.core.keyword_identical_QMARK_.call(null,inst_24110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_24120 = (inst_24118) || (inst_24119);var state_24149__$1 = (function (){var statearr_24163 = state_24149;(statearr_24163[(10)] = inst_24117__$1);
return statearr_24163;
})();if(cljs.core.truth_(inst_24120))
{var statearr_24164_24189 = state_24149__$1;(statearr_24164_24189[(1)] = (8));
} else
{var statearr_24165_24190 = state_24149__$1;(statearr_24165_24190[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (14)))
{var inst_24142 = (state_24149[(2)]);var inst_24143 = cljs.core.async.close_BANG_.call(null,out);var state_24149__$1 = (function (){var statearr_24167 = state_24149;(statearr_24167[(13)] = inst_24142);
return statearr_24167;
})();var statearr_24168_24191 = state_24149__$1;(statearr_24168_24191[(2)] = inst_24143);
(statearr_24168_24191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (10)))
{var inst_24132 = (state_24149[(2)]);var state_24149__$1 = state_24149;var statearr_24169_24192 = state_24149__$1;(statearr_24169_24192[(2)] = inst_24132);
(statearr_24169_24192[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24150 === (8)))
{var inst_24109 = (state_24149[(8)]);var inst_24117 = (state_24149[(10)]);var inst_24113 = (state_24149[(9)]);var inst_24122 = inst_24109.push(inst_24113);var tmp24166 = inst_24109;var inst_24109__$1 = tmp24166;var inst_24110 = inst_24117;var state_24149__$1 = (function (){var statearr_24170 = state_24149;(statearr_24170[(7)] = inst_24110);
(statearr_24170[(8)] = inst_24109__$1);
(statearr_24170[(14)] = inst_24122);
return statearr_24170;
})();var statearr_24171_24193 = state_24149__$1;(statearr_24171_24193[(2)] = null);
(statearr_24171_24193[(1)] = (2));
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
});})(c__15086__auto___24179,out))
;return ((function (switch__15071__auto__,c__15086__auto___24179,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_24175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24175[(0)] = state_machine__15072__auto__);
(statearr_24175[(1)] = (1));
return statearr_24175;
});
var state_machine__15072__auto____1 = (function (state_24149){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_24149);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e24176){if((e24176 instanceof Object))
{var ex__15075__auto__ = e24176;var statearr_24177_24194 = state_24149;(statearr_24177_24194[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24195 = state_24149;
state_24149 = G__24195;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_24149){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_24149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___24179,out))
})();var state__15088__auto__ = (function (){var statearr_24178 = f__15087__auto__.call(null);(statearr_24178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___24179);
return statearr_24178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___24179,out))
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