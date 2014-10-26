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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33098 = (function (f,fn_handler,meta33099){
this.f = f;
this.fn_handler = fn_handler;
this.meta33099 = meta33099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33098.cljs$lang$type = true;
cljs.core.async.t33098.cljs$lang$ctorStr = "cljs.core.async/t33098";
cljs.core.async.t33098.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t33098");
});
cljs.core.async.t33098.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33100){var self__ = this;
var _33100__$1 = this;return self__.meta33099;
});
cljs.core.async.t33098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33100,meta33099__$1){var self__ = this;
var _33100__$1 = this;return (new cljs.core.async.t33098(self__.f,self__.fn_handler,meta33099__$1));
});
cljs.core.async.__GT_t33098 = (function __GT_t33098(f__$1,fn_handler__$1,meta33099){return (new cljs.core.async.t33098(f__$1,fn_handler__$1,meta33099));
});
}
return (new cljs.core.async.t33098(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33102 = buff;if(G__33102)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__33102.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33102.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33102);
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
{var val_33103 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33103);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_33103,ret){
return (function (){return fn1.call(null,val_33103);
});})(val_33103,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___33104 = n;var x_33105 = (0);while(true){
if((x_33105 < n__13416__auto___33104))
{(a[x_33105] = (0));
{
var G__33106 = (x_33105 + (1));
x_33105 = G__33106;
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
var G__33107 = (i + (1));
i = G__33107;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33111 = (function (flag,alt_flag,meta33112){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33112 = meta33112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33111.cljs$lang$type = true;
cljs.core.async.t33111.cljs$lang$ctorStr = "cljs.core.async/t33111";
cljs.core.async.t33111.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t33111");
});})(flag))
;
cljs.core.async.t33111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t33111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t33111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33113){var self__ = this;
var _33113__$1 = this;return self__.meta33112;
});})(flag))
;
cljs.core.async.t33111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33113,meta33112__$1){var self__ = this;
var _33113__$1 = this;return (new cljs.core.async.t33111(self__.flag,self__.alt_flag,meta33112__$1));
});})(flag))
;
cljs.core.async.__GT_t33111 = ((function (flag){
return (function __GT_t33111(flag__$1,alt_flag__$1,meta33112){return (new cljs.core.async.t33111(flag__$1,alt_flag__$1,meta33112));
});})(flag))
;
}
return (new cljs.core.async.t33111(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33117 = (function (cb,flag,alt_handler,meta33118){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33118 = meta33118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33117.cljs$lang$type = true;
cljs.core.async.t33117.cljs$lang$ctorStr = "cljs.core.async/t33117";
cljs.core.async.t33117.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t33117");
});
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33119){var self__ = this;
var _33119__$1 = this;return self__.meta33118;
});
cljs.core.async.t33117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33119,meta33118__$1){var self__ = this;
var _33119__$1 = this;return (new cljs.core.async.t33117(self__.cb,self__.flag,self__.alt_handler,meta33118__$1));
});
cljs.core.async.__GT_t33117 = (function __GT_t33117(cb__$1,flag__$1,alt_handler__$1,meta33118){return (new cljs.core.async.t33117(cb__$1,flag__$1,alt_handler__$1,meta33118));
});
}
return (new cljs.core.async.t33117(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33120_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33120_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33121_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33121_SHARP_,port], null));
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
var G__33122 = (i + (1));
i = G__33122;
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
var alts_BANG___delegate = function (ports,p__33123){var map__33125 = p__33123;var map__33125__$1 = ((cljs.core.seq_QMARK_.call(null,map__33125))?cljs.core.apply.call(null,cljs.core.hash_map,map__33125):map__33125);var opts = map__33125__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__33123 = null;if (arguments.length > 1) {
  p__33123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33123);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33126){
var ports = cljs.core.first(arglist__33126);
var p__33123 = cljs.core.rest(arglist__33126);
return alts_BANG___delegate(ports,p__33123);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___33221 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___33221){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___33221){
return (function (state_33197){var state_val_33198 = (state_33197[(1)]);if((state_val_33198 === (7)))
{var inst_33193 = (state_33197[(2)]);var state_33197__$1 = state_33197;var statearr_33199_33222 = state_33197__$1;(statearr_33199_33222[(2)] = inst_33193);
(statearr_33199_33222[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (1)))
{var state_33197__$1 = state_33197;var statearr_33200_33223 = state_33197__$1;(statearr_33200_33223[(2)] = null);
(statearr_33200_33223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (4)))
{var inst_33176 = (state_33197[(7)]);var inst_33176__$1 = (state_33197[(2)]);var inst_33177 = (inst_33176__$1 == null);var state_33197__$1 = (function (){var statearr_33201 = state_33197;(statearr_33201[(7)] = inst_33176__$1);
return statearr_33201;
})();if(cljs.core.truth_(inst_33177))
{var statearr_33202_33224 = state_33197__$1;(statearr_33202_33224[(1)] = (5));
} else
{var statearr_33203_33225 = state_33197__$1;(statearr_33203_33225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (13)))
{var state_33197__$1 = state_33197;var statearr_33204_33226 = state_33197__$1;(statearr_33204_33226[(2)] = null);
(statearr_33204_33226[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (6)))
{var inst_33176 = (state_33197[(7)]);var state_33197__$1 = state_33197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33197__$1,(11),to,inst_33176);
} else
{if((state_val_33198 === (3)))
{var inst_33195 = (state_33197[(2)]);var state_33197__$1 = state_33197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33197__$1,inst_33195);
} else
{if((state_val_33198 === (12)))
{var state_33197__$1 = state_33197;var statearr_33205_33227 = state_33197__$1;(statearr_33205_33227[(2)] = null);
(statearr_33205_33227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (2)))
{var state_33197__$1 = state_33197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33197__$1,(4),from);
} else
{if((state_val_33198 === (11)))
{var inst_33186 = (state_33197[(2)]);var state_33197__$1 = state_33197;if(cljs.core.truth_(inst_33186))
{var statearr_33206_33228 = state_33197__$1;(statearr_33206_33228[(1)] = (12));
} else
{var statearr_33207_33229 = state_33197__$1;(statearr_33207_33229[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (9)))
{var state_33197__$1 = state_33197;var statearr_33208_33230 = state_33197__$1;(statearr_33208_33230[(2)] = null);
(statearr_33208_33230[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (5)))
{var state_33197__$1 = state_33197;if(cljs.core.truth_(close_QMARK_))
{var statearr_33209_33231 = state_33197__$1;(statearr_33209_33231[(1)] = (8));
} else
{var statearr_33210_33232 = state_33197__$1;(statearr_33210_33232[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (14)))
{var inst_33191 = (state_33197[(2)]);var state_33197__$1 = state_33197;var statearr_33211_33233 = state_33197__$1;(statearr_33211_33233[(2)] = inst_33191);
(statearr_33211_33233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (10)))
{var inst_33183 = (state_33197[(2)]);var state_33197__$1 = state_33197;var statearr_33212_33234 = state_33197__$1;(statearr_33212_33234[(2)] = inst_33183);
(statearr_33212_33234[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33198 === (8)))
{var inst_33180 = cljs.core.async.close_BANG_.call(null,to);var state_33197__$1 = state_33197;var statearr_33213_33235 = state_33197__$1;(statearr_33213_33235[(2)] = inst_33180);
(statearr_33213_33235[(1)] = (10));
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
});})(c__15989__auto___33221))
;return ((function (switch__15974__auto__,c__15989__auto___33221){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33217 = [null,null,null,null,null,null,null,null];(statearr_33217[(0)] = state_machine__15975__auto__);
(statearr_33217[(1)] = (1));
return statearr_33217;
});
var state_machine__15975__auto____1 = (function (state_33197){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33197);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33218){if((e33218 instanceof Object))
{var ex__15978__auto__ = e33218;var statearr_33219_33236 = state_33197;(statearr_33219_33236[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33237 = state_33197;
state_33197 = G__33237;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33197){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___33221))
})();var state__15991__auto__ = (function (){var statearr_33220 = f__15990__auto__.call(null);(statearr_33220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33221);
return statearr_33220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___33221))
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
return (function (p__33421){var vec__33422 = p__33421;var v = cljs.core.nth.call(null,vec__33422,(0),null);var p = cljs.core.nth.call(null,vec__33422,(1),null);var job = vec__33422;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___33604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results){
return (function (state_33427){var state_val_33428 = (state_33427[(1)]);if((state_val_33428 === (2)))
{var inst_33424 = (state_33427[(2)]);var inst_33425 = cljs.core.async.close_BANG_.call(null,res);var state_33427__$1 = (function (){var statearr_33429 = state_33427;(statearr_33429[(7)] = inst_33424);
return statearr_33429;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33427__$1,inst_33425);
} else
{if((state_val_33428 === (1)))
{var state_33427__$1 = state_33427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33427__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33433 = [null,null,null,null,null,null,null,null];(statearr_33433[(0)] = state_machine__15975__auto__);
(statearr_33433[(1)] = (1));
return statearr_33433;
});
var state_machine__15975__auto____1 = (function (state_33427){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33427);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33434){if((e33434 instanceof Object))
{var ex__15978__auto__ = e33434;var statearr_33435_33605 = state_33427;(statearr_33435_33605[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33434;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33606 = state_33427;
state_33427 = G__33606;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33427){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_33436 = f__15990__auto__.call(null);(statearr_33436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33604);
return statearr_33436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___33604,res,vec__33422,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__33437){var vec__33438 = p__33437;var v = cljs.core.nth.call(null,vec__33438,(0),null);var p = cljs.core.nth.call(null,vec__33438,(1),null);var job = vec__33438;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___33607 = n;var __33608 = (0);while(true){
if((__33608 < n__13416__auto___33607))
{var G__33439_33609 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__33439_33609) {
case "async":
var c__15989__auto___33611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__33608,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__33608,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function (state_33452){var state_val_33453 = (state_33452[(1)]);if((state_val_33453 === (7)))
{var inst_33448 = (state_33452[(2)]);var state_33452__$1 = state_33452;var statearr_33454_33612 = state_33452__$1;(statearr_33454_33612[(2)] = inst_33448);
(statearr_33454_33612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33453 === (6)))
{var state_33452__$1 = state_33452;var statearr_33455_33613 = state_33452__$1;(statearr_33455_33613[(2)] = null);
(statearr_33455_33613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33453 === (5)))
{var state_33452__$1 = state_33452;var statearr_33456_33614 = state_33452__$1;(statearr_33456_33614[(2)] = null);
(statearr_33456_33614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33453 === (4)))
{var inst_33442 = (state_33452[(2)]);var inst_33443 = async.call(null,inst_33442);var state_33452__$1 = state_33452;if(cljs.core.truth_(inst_33443))
{var statearr_33457_33615 = state_33452__$1;(statearr_33457_33615[(1)] = (5));
} else
{var statearr_33458_33616 = state_33452__$1;(statearr_33458_33616[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33453 === (3)))
{var inst_33450 = (state_33452[(2)]);var state_33452__$1 = state_33452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33452__$1,inst_33450);
} else
{if((state_val_33453 === (2)))
{var state_33452__$1 = state_33452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33452__$1,(4),jobs);
} else
{if((state_val_33453 === (1)))
{var state_33452__$1 = state_33452;var statearr_33459_33617 = state_33452__$1;(statearr_33459_33617[(2)] = null);
(statearr_33459_33617[(1)] = (2));
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
});})(__33608,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
;return ((function (__33608,switch__15974__auto__,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33463 = [null,null,null,null,null,null,null];(statearr_33463[(0)] = state_machine__15975__auto__);
(statearr_33463[(1)] = (1));
return statearr_33463;
});
var state_machine__15975__auto____1 = (function (state_33452){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33452);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33464){if((e33464 instanceof Object))
{var ex__15978__auto__ = e33464;var statearr_33465_33618 = state_33452;(statearr_33465_33618[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33464;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33619 = state_33452;
state_33452 = G__33619;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33452){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__33608,switch__15974__auto__,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_33466 = f__15990__auto__.call(null);(statearr_33466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33611);
return statearr_33466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__33608,c__15989__auto___33611,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___33620 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__33608,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__33608,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function (state_33479){var state_val_33480 = (state_33479[(1)]);if((state_val_33480 === (7)))
{var inst_33475 = (state_33479[(2)]);var state_33479__$1 = state_33479;var statearr_33481_33621 = state_33479__$1;(statearr_33481_33621[(2)] = inst_33475);
(statearr_33481_33621[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33480 === (6)))
{var state_33479__$1 = state_33479;var statearr_33482_33622 = state_33479__$1;(statearr_33482_33622[(2)] = null);
(statearr_33482_33622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33480 === (5)))
{var state_33479__$1 = state_33479;var statearr_33483_33623 = state_33479__$1;(statearr_33483_33623[(2)] = null);
(statearr_33483_33623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33480 === (4)))
{var inst_33469 = (state_33479[(2)]);var inst_33470 = process.call(null,inst_33469);var state_33479__$1 = state_33479;if(cljs.core.truth_(inst_33470))
{var statearr_33484_33624 = state_33479__$1;(statearr_33484_33624[(1)] = (5));
} else
{var statearr_33485_33625 = state_33479__$1;(statearr_33485_33625[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33480 === (3)))
{var inst_33477 = (state_33479[(2)]);var state_33479__$1 = state_33479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33479__$1,inst_33477);
} else
{if((state_val_33480 === (2)))
{var state_33479__$1 = state_33479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33479__$1,(4),jobs);
} else
{if((state_val_33480 === (1)))
{var state_33479__$1 = state_33479;var statearr_33486_33626 = state_33479__$1;(statearr_33486_33626[(2)] = null);
(statearr_33486_33626[(1)] = (2));
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
});})(__33608,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
;return ((function (__33608,switch__15974__auto__,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33490 = [null,null,null,null,null,null,null];(statearr_33490[(0)] = state_machine__15975__auto__);
(statearr_33490[(1)] = (1));
return statearr_33490;
});
var state_machine__15975__auto____1 = (function (state_33479){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33479);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33491){if((e33491 instanceof Object))
{var ex__15978__auto__ = e33491;var statearr_33492_33627 = state_33479;(statearr_33492_33627[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33628 = state_33479;
state_33479 = G__33628;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33479){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__33608,switch__15974__auto__,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_33493 = f__15990__auto__.call(null);(statearr_33493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33620);
return statearr_33493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__33608,c__15989__auto___33620,G__33439_33609,n__13416__auto___33607,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__33629 = (__33608 + (1));
__33608 = G__33629;
continue;
}
} else
{}
break;
}
var c__15989__auto___33630 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___33630,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___33630,jobs,results,process,async){
return (function (state_33515){var state_val_33516 = (state_33515[(1)]);if((state_val_33516 === (9)))
{var inst_33508 = (state_33515[(2)]);var state_33515__$1 = (function (){var statearr_33517 = state_33515;(statearr_33517[(7)] = inst_33508);
return statearr_33517;
})();var statearr_33518_33631 = state_33515__$1;(statearr_33518_33631[(2)] = null);
(statearr_33518_33631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33516 === (8)))
{var inst_33501 = (state_33515[(8)]);var inst_33506 = (state_33515[(2)]);var state_33515__$1 = (function (){var statearr_33519 = state_33515;(statearr_33519[(9)] = inst_33506);
return statearr_33519;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33515__$1,(9),results,inst_33501);
} else
{if((state_val_33516 === (7)))
{var inst_33511 = (state_33515[(2)]);var state_33515__$1 = state_33515;var statearr_33520_33632 = state_33515__$1;(statearr_33520_33632[(2)] = inst_33511);
(statearr_33520_33632[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33516 === (6)))
{var inst_33496 = (state_33515[(10)]);var inst_33501 = (state_33515[(8)]);var inst_33501__$1 = cljs.core.async.chan.call(null,(1));var inst_33502 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33503 = [inst_33496,inst_33501__$1];var inst_33504 = (new cljs.core.PersistentVector(null,2,(5),inst_33502,inst_33503,null));var state_33515__$1 = (function (){var statearr_33521 = state_33515;(statearr_33521[(8)] = inst_33501__$1);
return statearr_33521;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33515__$1,(8),jobs,inst_33504);
} else
{if((state_val_33516 === (5)))
{var inst_33499 = cljs.core.async.close_BANG_.call(null,jobs);var state_33515__$1 = state_33515;var statearr_33522_33633 = state_33515__$1;(statearr_33522_33633[(2)] = inst_33499);
(statearr_33522_33633[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33516 === (4)))
{var inst_33496 = (state_33515[(10)]);var inst_33496__$1 = (state_33515[(2)]);var inst_33497 = (inst_33496__$1 == null);var state_33515__$1 = (function (){var statearr_33523 = state_33515;(statearr_33523[(10)] = inst_33496__$1);
return statearr_33523;
})();if(cljs.core.truth_(inst_33497))
{var statearr_33524_33634 = state_33515__$1;(statearr_33524_33634[(1)] = (5));
} else
{var statearr_33525_33635 = state_33515__$1;(statearr_33525_33635[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33516 === (3)))
{var inst_33513 = (state_33515[(2)]);var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33515__$1,inst_33513);
} else
{if((state_val_33516 === (2)))
{var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33515__$1,(4),from);
} else
{if((state_val_33516 === (1)))
{var state_33515__$1 = state_33515;var statearr_33526_33636 = state_33515__$1;(statearr_33526_33636[(2)] = null);
(statearr_33526_33636[(1)] = (2));
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
});})(c__15989__auto___33630,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___33630,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33530 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33530[(0)] = state_machine__15975__auto__);
(statearr_33530[(1)] = (1));
return statearr_33530;
});
var state_machine__15975__auto____1 = (function (state_33515){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33515);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33531){if((e33531 instanceof Object))
{var ex__15978__auto__ = e33531;var statearr_33532_33637 = state_33515;(statearr_33532_33637[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33531;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33638 = state_33515;
state_33515 = G__33638;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33515){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___33630,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_33533 = f__15990__auto__.call(null);(statearr_33533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33630);
return statearr_33533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___33630,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_33571){var state_val_33572 = (state_33571[(1)]);if((state_val_33572 === (7)))
{var inst_33567 = (state_33571[(2)]);var state_33571__$1 = state_33571;var statearr_33573_33639 = state_33571__$1;(statearr_33573_33639[(2)] = inst_33567);
(statearr_33573_33639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (20)))
{var state_33571__$1 = state_33571;var statearr_33574_33640 = state_33571__$1;(statearr_33574_33640[(2)] = null);
(statearr_33574_33640[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (1)))
{var state_33571__$1 = state_33571;var statearr_33575_33641 = state_33571__$1;(statearr_33575_33641[(2)] = null);
(statearr_33575_33641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (4)))
{var inst_33536 = (state_33571[(7)]);var inst_33536__$1 = (state_33571[(2)]);var inst_33537 = (inst_33536__$1 == null);var state_33571__$1 = (function (){var statearr_33576 = state_33571;(statearr_33576[(7)] = inst_33536__$1);
return statearr_33576;
})();if(cljs.core.truth_(inst_33537))
{var statearr_33577_33642 = state_33571__$1;(statearr_33577_33642[(1)] = (5));
} else
{var statearr_33578_33643 = state_33571__$1;(statearr_33578_33643[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (15)))
{var inst_33549 = (state_33571[(8)]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33571__$1,(18),to,inst_33549);
} else
{if((state_val_33572 === (21)))
{var inst_33562 = (state_33571[(2)]);var state_33571__$1 = state_33571;var statearr_33579_33644 = state_33571__$1;(statearr_33579_33644[(2)] = inst_33562);
(statearr_33579_33644[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (13)))
{var inst_33564 = (state_33571[(2)]);var state_33571__$1 = (function (){var statearr_33580 = state_33571;(statearr_33580[(9)] = inst_33564);
return statearr_33580;
})();var statearr_33581_33645 = state_33571__$1;(statearr_33581_33645[(2)] = null);
(statearr_33581_33645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (6)))
{var inst_33536 = (state_33571[(7)]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33571__$1,(11),inst_33536);
} else
{if((state_val_33572 === (17)))
{var inst_33557 = (state_33571[(2)]);var state_33571__$1 = state_33571;if(cljs.core.truth_(inst_33557))
{var statearr_33582_33646 = state_33571__$1;(statearr_33582_33646[(1)] = (19));
} else
{var statearr_33583_33647 = state_33571__$1;(statearr_33583_33647[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (3)))
{var inst_33569 = (state_33571[(2)]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33571__$1,inst_33569);
} else
{if((state_val_33572 === (12)))
{var inst_33546 = (state_33571[(10)]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33571__$1,(14),inst_33546);
} else
{if((state_val_33572 === (2)))
{var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33571__$1,(4),results);
} else
{if((state_val_33572 === (19)))
{var state_33571__$1 = state_33571;var statearr_33584_33648 = state_33571__$1;(statearr_33584_33648[(2)] = null);
(statearr_33584_33648[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (11)))
{var inst_33546 = (state_33571[(2)]);var state_33571__$1 = (function (){var statearr_33585 = state_33571;(statearr_33585[(10)] = inst_33546);
return statearr_33585;
})();var statearr_33586_33649 = state_33571__$1;(statearr_33586_33649[(2)] = null);
(statearr_33586_33649[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (9)))
{var state_33571__$1 = state_33571;var statearr_33587_33650 = state_33571__$1;(statearr_33587_33650[(2)] = null);
(statearr_33587_33650[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (5)))
{var state_33571__$1 = state_33571;if(cljs.core.truth_(close_QMARK_))
{var statearr_33588_33651 = state_33571__$1;(statearr_33588_33651[(1)] = (8));
} else
{var statearr_33589_33652 = state_33571__$1;(statearr_33589_33652[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (14)))
{var inst_33549 = (state_33571[(8)]);var inst_33551 = (state_33571[(11)]);var inst_33549__$1 = (state_33571[(2)]);var inst_33550 = (inst_33549__$1 == null);var inst_33551__$1 = cljs.core.not.call(null,inst_33550);var state_33571__$1 = (function (){var statearr_33590 = state_33571;(statearr_33590[(8)] = inst_33549__$1);
(statearr_33590[(11)] = inst_33551__$1);
return statearr_33590;
})();if(inst_33551__$1)
{var statearr_33591_33653 = state_33571__$1;(statearr_33591_33653[(1)] = (15));
} else
{var statearr_33592_33654 = state_33571__$1;(statearr_33592_33654[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (16)))
{var inst_33551 = (state_33571[(11)]);var state_33571__$1 = state_33571;var statearr_33593_33655 = state_33571__$1;(statearr_33593_33655[(2)] = inst_33551);
(statearr_33593_33655[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (10)))
{var inst_33543 = (state_33571[(2)]);var state_33571__$1 = state_33571;var statearr_33594_33656 = state_33571__$1;(statearr_33594_33656[(2)] = inst_33543);
(statearr_33594_33656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (18)))
{var inst_33554 = (state_33571[(2)]);var state_33571__$1 = state_33571;var statearr_33595_33657 = state_33571__$1;(statearr_33595_33657[(2)] = inst_33554);
(statearr_33595_33657[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33572 === (8)))
{var inst_33540 = cljs.core.async.close_BANG_.call(null,to);var state_33571__$1 = state_33571;var statearr_33596_33658 = state_33571__$1;(statearr_33596_33658[(2)] = inst_33540);
(statearr_33596_33658[(1)] = (10));
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
var state_machine__15975__auto____0 = (function (){var statearr_33600 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33600[(0)] = state_machine__15975__auto__);
(statearr_33600[(1)] = (1));
return statearr_33600;
});
var state_machine__15975__auto____1 = (function (state_33571){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33571);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33601){if((e33601 instanceof Object))
{var ex__15978__auto__ = e33601;var statearr_33602_33659 = state_33571;(statearr_33602_33659[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33660 = state_33571;
state_33571 = G__33660;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33571){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_33603 = f__15990__auto__.call(null);(statearr_33603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_33603;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___33761 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___33761,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___33761,tc,fc){
return (function (state_33736){var state_val_33737 = (state_33736[(1)]);if((state_val_33737 === (7)))
{var inst_33732 = (state_33736[(2)]);var state_33736__$1 = state_33736;var statearr_33738_33762 = state_33736__$1;(statearr_33738_33762[(2)] = inst_33732);
(statearr_33738_33762[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (1)))
{var state_33736__$1 = state_33736;var statearr_33739_33763 = state_33736__$1;(statearr_33739_33763[(2)] = null);
(statearr_33739_33763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (4)))
{var inst_33713 = (state_33736[(7)]);var inst_33713__$1 = (state_33736[(2)]);var inst_33714 = (inst_33713__$1 == null);var state_33736__$1 = (function (){var statearr_33740 = state_33736;(statearr_33740[(7)] = inst_33713__$1);
return statearr_33740;
})();if(cljs.core.truth_(inst_33714))
{var statearr_33741_33764 = state_33736__$1;(statearr_33741_33764[(1)] = (5));
} else
{var statearr_33742_33765 = state_33736__$1;(statearr_33742_33765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (13)))
{var state_33736__$1 = state_33736;var statearr_33743_33766 = state_33736__$1;(statearr_33743_33766[(2)] = null);
(statearr_33743_33766[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (6)))
{var inst_33713 = (state_33736[(7)]);var inst_33719 = p.call(null,inst_33713);var state_33736__$1 = state_33736;if(cljs.core.truth_(inst_33719))
{var statearr_33744_33767 = state_33736__$1;(statearr_33744_33767[(1)] = (9));
} else
{var statearr_33745_33768 = state_33736__$1;(statearr_33745_33768[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (3)))
{var inst_33734 = (state_33736[(2)]);var state_33736__$1 = state_33736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33736__$1,inst_33734);
} else
{if((state_val_33737 === (12)))
{var state_33736__$1 = state_33736;var statearr_33746_33769 = state_33736__$1;(statearr_33746_33769[(2)] = null);
(statearr_33746_33769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (2)))
{var state_33736__$1 = state_33736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33736__$1,(4),ch);
} else
{if((state_val_33737 === (11)))
{var inst_33713 = (state_33736[(7)]);var inst_33723 = (state_33736[(2)]);var state_33736__$1 = state_33736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33736__$1,(8),inst_33723,inst_33713);
} else
{if((state_val_33737 === (9)))
{var state_33736__$1 = state_33736;var statearr_33747_33770 = state_33736__$1;(statearr_33747_33770[(2)] = tc);
(statearr_33747_33770[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (5)))
{var inst_33716 = cljs.core.async.close_BANG_.call(null,tc);var inst_33717 = cljs.core.async.close_BANG_.call(null,fc);var state_33736__$1 = (function (){var statearr_33748 = state_33736;(statearr_33748[(8)] = inst_33716);
return statearr_33748;
})();var statearr_33749_33771 = state_33736__$1;(statearr_33749_33771[(2)] = inst_33717);
(statearr_33749_33771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (14)))
{var inst_33730 = (state_33736[(2)]);var state_33736__$1 = state_33736;var statearr_33750_33772 = state_33736__$1;(statearr_33750_33772[(2)] = inst_33730);
(statearr_33750_33772[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (10)))
{var state_33736__$1 = state_33736;var statearr_33751_33773 = state_33736__$1;(statearr_33751_33773[(2)] = fc);
(statearr_33751_33773[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33737 === (8)))
{var inst_33725 = (state_33736[(2)]);var state_33736__$1 = state_33736;if(cljs.core.truth_(inst_33725))
{var statearr_33752_33774 = state_33736__$1;(statearr_33752_33774[(1)] = (12));
} else
{var statearr_33753_33775 = state_33736__$1;(statearr_33753_33775[(1)] = (13));
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
});})(c__15989__auto___33761,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___33761,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_33757 = [null,null,null,null,null,null,null,null,null];(statearr_33757[(0)] = state_machine__15975__auto__);
(statearr_33757[(1)] = (1));
return statearr_33757;
});
var state_machine__15975__auto____1 = (function (state_33736){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33736);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33758){if((e33758 instanceof Object))
{var ex__15978__auto__ = e33758;var statearr_33759_33776 = state_33736;(statearr_33759_33776[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33777 = state_33736;
state_33736 = G__33777;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___33761,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_33760 = f__15990__auto__.call(null);(statearr_33760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___33761);
return statearr_33760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___33761,tc,fc))
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
return (function (state_33824){var state_val_33825 = (state_33824[(1)]);if((state_val_33825 === (7)))
{var inst_33820 = (state_33824[(2)]);var state_33824__$1 = state_33824;var statearr_33826_33842 = state_33824__$1;(statearr_33826_33842[(2)] = inst_33820);
(statearr_33826_33842[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33825 === (6)))
{var inst_33813 = (state_33824[(7)]);var inst_33810 = (state_33824[(8)]);var inst_33817 = f.call(null,inst_33810,inst_33813);var inst_33810__$1 = inst_33817;var state_33824__$1 = (function (){var statearr_33827 = state_33824;(statearr_33827[(8)] = inst_33810__$1);
return statearr_33827;
})();var statearr_33828_33843 = state_33824__$1;(statearr_33828_33843[(2)] = null);
(statearr_33828_33843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33825 === (5)))
{var inst_33810 = (state_33824[(8)]);var state_33824__$1 = state_33824;var statearr_33829_33844 = state_33824__$1;(statearr_33829_33844[(2)] = inst_33810);
(statearr_33829_33844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33825 === (4)))
{var inst_33813 = (state_33824[(7)]);var inst_33813__$1 = (state_33824[(2)]);var inst_33814 = (inst_33813__$1 == null);var state_33824__$1 = (function (){var statearr_33830 = state_33824;(statearr_33830[(7)] = inst_33813__$1);
return statearr_33830;
})();if(cljs.core.truth_(inst_33814))
{var statearr_33831_33845 = state_33824__$1;(statearr_33831_33845[(1)] = (5));
} else
{var statearr_33832_33846 = state_33824__$1;(statearr_33832_33846[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33825 === (3)))
{var inst_33822 = (state_33824[(2)]);var state_33824__$1 = state_33824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33824__$1,inst_33822);
} else
{if((state_val_33825 === (2)))
{var state_33824__$1 = state_33824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33824__$1,(4),ch);
} else
{if((state_val_33825 === (1)))
{var inst_33810 = init;var state_33824__$1 = (function (){var statearr_33833 = state_33824;(statearr_33833[(8)] = inst_33810);
return statearr_33833;
})();var statearr_33834_33847 = state_33824__$1;(statearr_33834_33847[(2)] = null);
(statearr_33834_33847[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_33838 = [null,null,null,null,null,null,null,null,null];(statearr_33838[(0)] = state_machine__15975__auto__);
(statearr_33838[(1)] = (1));
return statearr_33838;
});
var state_machine__15975__auto____1 = (function (state_33824){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33824);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33839){if((e33839 instanceof Object))
{var ex__15978__auto__ = e33839;var statearr_33840_33848 = state_33824;(statearr_33840_33848[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33849 = state_33824;
state_33824 = G__33849;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33824){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_33841 = f__15990__auto__.call(null);(statearr_33841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_33841;
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
return (function (state_33923){var state_val_33924 = (state_33923[(1)]);if((state_val_33924 === (7)))
{var inst_33905 = (state_33923[(2)]);var state_33923__$1 = state_33923;var statearr_33925_33948 = state_33923__$1;(statearr_33925_33948[(2)] = inst_33905);
(statearr_33925_33948[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (1)))
{var inst_33899 = cljs.core.seq.call(null,coll);var inst_33900 = inst_33899;var state_33923__$1 = (function (){var statearr_33926 = state_33923;(statearr_33926[(7)] = inst_33900);
return statearr_33926;
})();var statearr_33927_33949 = state_33923__$1;(statearr_33927_33949[(2)] = null);
(statearr_33927_33949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (4)))
{var inst_33900 = (state_33923[(7)]);var inst_33903 = cljs.core.first.call(null,inst_33900);var state_33923__$1 = state_33923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33923__$1,(7),ch,inst_33903);
} else
{if((state_val_33924 === (13)))
{var inst_33917 = (state_33923[(2)]);var state_33923__$1 = state_33923;var statearr_33928_33950 = state_33923__$1;(statearr_33928_33950[(2)] = inst_33917);
(statearr_33928_33950[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (6)))
{var inst_33908 = (state_33923[(2)]);var state_33923__$1 = state_33923;if(cljs.core.truth_(inst_33908))
{var statearr_33929_33951 = state_33923__$1;(statearr_33929_33951[(1)] = (8));
} else
{var statearr_33930_33952 = state_33923__$1;(statearr_33930_33952[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (3)))
{var inst_33921 = (state_33923[(2)]);var state_33923__$1 = state_33923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33923__$1,inst_33921);
} else
{if((state_val_33924 === (12)))
{var state_33923__$1 = state_33923;var statearr_33931_33953 = state_33923__$1;(statearr_33931_33953[(2)] = null);
(statearr_33931_33953[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (2)))
{var inst_33900 = (state_33923[(7)]);var state_33923__$1 = state_33923;if(cljs.core.truth_(inst_33900))
{var statearr_33932_33954 = state_33923__$1;(statearr_33932_33954[(1)] = (4));
} else
{var statearr_33933_33955 = state_33923__$1;(statearr_33933_33955[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (11)))
{var inst_33914 = cljs.core.async.close_BANG_.call(null,ch);var state_33923__$1 = state_33923;var statearr_33934_33956 = state_33923__$1;(statearr_33934_33956[(2)] = inst_33914);
(statearr_33934_33956[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (9)))
{var state_33923__$1 = state_33923;if(cljs.core.truth_(close_QMARK_))
{var statearr_33935_33957 = state_33923__$1;(statearr_33935_33957[(1)] = (11));
} else
{var statearr_33936_33958 = state_33923__$1;(statearr_33936_33958[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (5)))
{var inst_33900 = (state_33923[(7)]);var state_33923__$1 = state_33923;var statearr_33937_33959 = state_33923__$1;(statearr_33937_33959[(2)] = inst_33900);
(statearr_33937_33959[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (10)))
{var inst_33919 = (state_33923[(2)]);var state_33923__$1 = state_33923;var statearr_33938_33960 = state_33923__$1;(statearr_33938_33960[(2)] = inst_33919);
(statearr_33938_33960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33924 === (8)))
{var inst_33900 = (state_33923[(7)]);var inst_33910 = cljs.core.next.call(null,inst_33900);var inst_33900__$1 = inst_33910;var state_33923__$1 = (function (){var statearr_33939 = state_33923;(statearr_33939[(7)] = inst_33900__$1);
return statearr_33939;
})();var statearr_33940_33961 = state_33923__$1;(statearr_33940_33961[(2)] = null);
(statearr_33940_33961[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_33944 = [null,null,null,null,null,null,null,null];(statearr_33944[(0)] = state_machine__15975__auto__);
(statearr_33944[(1)] = (1));
return statearr_33944;
});
var state_machine__15975__auto____1 = (function (state_33923){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_33923);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e33945){if((e33945 instanceof Object))
{var ex__15978__auto__ = e33945;var statearr_33946_33962 = state_33923;(statearr_33946_33962[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33945;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33963 = state_33923;
state_33923 = G__33963;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_33923){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_33923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_33947 = f__15990__auto__.call(null);(statearr_33947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_33947;
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
cljs.core.async.Mux = (function (){var obj33965 = {};return obj33965;
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
cljs.core.async.Mult = (function (){var obj33967 = {};return obj33967;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34189 = (function (cs,ch,mult,meta34190){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34190 = meta34190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34189.cljs$lang$type = true;
cljs.core.async.t34189.cljs$lang$ctorStr = "cljs.core.async/t34189";
cljs.core.async.t34189.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t34189");
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34191){var self__ = this;
var _34191__$1 = this;return self__.meta34190;
});})(cs))
;
cljs.core.async.t34189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34191,meta34190__$1){var self__ = this;
var _34191__$1 = this;return (new cljs.core.async.t34189(self__.cs,self__.ch,self__.mult,meta34190__$1));
});})(cs))
;
cljs.core.async.__GT_t34189 = ((function (cs){
return (function __GT_t34189(cs__$1,ch__$1,mult__$1,meta34190){return (new cljs.core.async.t34189(cs__$1,ch__$1,mult__$1,meta34190));
});})(cs))
;
}
return (new cljs.core.async.t34189(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___34410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___34410,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___34410,cs,m,dchan,dctr,done){
return (function (state_34322){var state_val_34323 = (state_34322[(1)]);if((state_val_34323 === (7)))
{var inst_34318 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34324_34411 = state_34322__$1;(statearr_34324_34411[(2)] = inst_34318);
(statearr_34324_34411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (20)))
{var inst_34223 = (state_34322[(7)]);var inst_34233 = cljs.core.first.call(null,inst_34223);var inst_34234 = cljs.core.nth.call(null,inst_34233,(0),null);var inst_34235 = cljs.core.nth.call(null,inst_34233,(1),null);var state_34322__$1 = (function (){var statearr_34325 = state_34322;(statearr_34325[(8)] = inst_34234);
return statearr_34325;
})();if(cljs.core.truth_(inst_34235))
{var statearr_34326_34412 = state_34322__$1;(statearr_34326_34412[(1)] = (22));
} else
{var statearr_34327_34413 = state_34322__$1;(statearr_34327_34413[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (27)))
{var inst_34194 = (state_34322[(9)]);var inst_34270 = (state_34322[(10)]);var inst_34265 = (state_34322[(11)]);var inst_34263 = (state_34322[(12)]);var inst_34270__$1 = cljs.core._nth.call(null,inst_34263,inst_34265);var inst_34271 = cljs.core.async.put_BANG_.call(null,inst_34270__$1,inst_34194,done);var state_34322__$1 = (function (){var statearr_34328 = state_34322;(statearr_34328[(10)] = inst_34270__$1);
return statearr_34328;
})();if(cljs.core.truth_(inst_34271))
{var statearr_34329_34414 = state_34322__$1;(statearr_34329_34414[(1)] = (30));
} else
{var statearr_34330_34415 = state_34322__$1;(statearr_34330_34415[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (1)))
{var state_34322__$1 = state_34322;var statearr_34331_34416 = state_34322__$1;(statearr_34331_34416[(2)] = null);
(statearr_34331_34416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (24)))
{var inst_34223 = (state_34322[(7)]);var inst_34240 = (state_34322[(2)]);var inst_34241 = cljs.core.next.call(null,inst_34223);var inst_34203 = inst_34241;var inst_34204 = null;var inst_34205 = (0);var inst_34206 = (0);var state_34322__$1 = (function (){var statearr_34332 = state_34322;(statearr_34332[(13)] = inst_34203);
(statearr_34332[(14)] = inst_34240);
(statearr_34332[(15)] = inst_34205);
(statearr_34332[(16)] = inst_34206);
(statearr_34332[(17)] = inst_34204);
return statearr_34332;
})();var statearr_34333_34417 = state_34322__$1;(statearr_34333_34417[(2)] = null);
(statearr_34333_34417[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (39)))
{var state_34322__$1 = state_34322;var statearr_34337_34418 = state_34322__$1;(statearr_34337_34418[(2)] = null);
(statearr_34337_34418[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (4)))
{var inst_34194 = (state_34322[(9)]);var inst_34194__$1 = (state_34322[(2)]);var inst_34195 = (inst_34194__$1 == null);var state_34322__$1 = (function (){var statearr_34338 = state_34322;(statearr_34338[(9)] = inst_34194__$1);
return statearr_34338;
})();if(cljs.core.truth_(inst_34195))
{var statearr_34339_34419 = state_34322__$1;(statearr_34339_34419[(1)] = (5));
} else
{var statearr_34340_34420 = state_34322__$1;(statearr_34340_34420[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (15)))
{var inst_34203 = (state_34322[(13)]);var inst_34205 = (state_34322[(15)]);var inst_34206 = (state_34322[(16)]);var inst_34204 = (state_34322[(17)]);var inst_34219 = (state_34322[(2)]);var inst_34220 = (inst_34206 + (1));var tmp34334 = inst_34203;var tmp34335 = inst_34205;var tmp34336 = inst_34204;var inst_34203__$1 = tmp34334;var inst_34204__$1 = tmp34336;var inst_34205__$1 = tmp34335;var inst_34206__$1 = inst_34220;var state_34322__$1 = (function (){var statearr_34341 = state_34322;(statearr_34341[(13)] = inst_34203__$1);
(statearr_34341[(15)] = inst_34205__$1);
(statearr_34341[(16)] = inst_34206__$1);
(statearr_34341[(17)] = inst_34204__$1);
(statearr_34341[(18)] = inst_34219);
return statearr_34341;
})();var statearr_34342_34421 = state_34322__$1;(statearr_34342_34421[(2)] = null);
(statearr_34342_34421[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (21)))
{var inst_34244 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34346_34422 = state_34322__$1;(statearr_34346_34422[(2)] = inst_34244);
(statearr_34346_34422[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (31)))
{var inst_34270 = (state_34322[(10)]);var inst_34274 = done.call(null,null);var inst_34275 = cljs.core.async.untap_STAR_.call(null,m,inst_34270);var state_34322__$1 = (function (){var statearr_34347 = state_34322;(statearr_34347[(19)] = inst_34274);
return statearr_34347;
})();var statearr_34348_34423 = state_34322__$1;(statearr_34348_34423[(2)] = inst_34275);
(statearr_34348_34423[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (32)))
{var inst_34264 = (state_34322[(20)]);var inst_34265 = (state_34322[(11)]);var inst_34262 = (state_34322[(21)]);var inst_34263 = (state_34322[(12)]);var inst_34277 = (state_34322[(2)]);var inst_34278 = (inst_34265 + (1));var tmp34343 = inst_34264;var tmp34344 = inst_34262;var tmp34345 = inst_34263;var inst_34262__$1 = tmp34344;var inst_34263__$1 = tmp34345;var inst_34264__$1 = tmp34343;var inst_34265__$1 = inst_34278;var state_34322__$1 = (function (){var statearr_34349 = state_34322;(statearr_34349[(20)] = inst_34264__$1);
(statearr_34349[(11)] = inst_34265__$1);
(statearr_34349[(21)] = inst_34262__$1);
(statearr_34349[(22)] = inst_34277);
(statearr_34349[(12)] = inst_34263__$1);
return statearr_34349;
})();var statearr_34350_34424 = state_34322__$1;(statearr_34350_34424[(2)] = null);
(statearr_34350_34424[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (40)))
{var inst_34290 = (state_34322[(23)]);var inst_34294 = done.call(null,null);var inst_34295 = cljs.core.async.untap_STAR_.call(null,m,inst_34290);var state_34322__$1 = (function (){var statearr_34351 = state_34322;(statearr_34351[(24)] = inst_34294);
return statearr_34351;
})();var statearr_34352_34425 = state_34322__$1;(statearr_34352_34425[(2)] = inst_34295);
(statearr_34352_34425[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (33)))
{var inst_34281 = (state_34322[(25)]);var inst_34283 = cljs.core.chunked_seq_QMARK_.call(null,inst_34281);var state_34322__$1 = state_34322;if(inst_34283)
{var statearr_34353_34426 = state_34322__$1;(statearr_34353_34426[(1)] = (36));
} else
{var statearr_34354_34427 = state_34322__$1;(statearr_34354_34427[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (13)))
{var inst_34213 = (state_34322[(26)]);var inst_34216 = cljs.core.async.close_BANG_.call(null,inst_34213);var state_34322__$1 = state_34322;var statearr_34355_34428 = state_34322__$1;(statearr_34355_34428[(2)] = inst_34216);
(statearr_34355_34428[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (22)))
{var inst_34234 = (state_34322[(8)]);var inst_34237 = cljs.core.async.close_BANG_.call(null,inst_34234);var state_34322__$1 = state_34322;var statearr_34356_34429 = state_34322__$1;(statearr_34356_34429[(2)] = inst_34237);
(statearr_34356_34429[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (36)))
{var inst_34281 = (state_34322[(25)]);var inst_34285 = cljs.core.chunk_first.call(null,inst_34281);var inst_34286 = cljs.core.chunk_rest.call(null,inst_34281);var inst_34287 = cljs.core.count.call(null,inst_34285);var inst_34262 = inst_34286;var inst_34263 = inst_34285;var inst_34264 = inst_34287;var inst_34265 = (0);var state_34322__$1 = (function (){var statearr_34357 = state_34322;(statearr_34357[(20)] = inst_34264);
(statearr_34357[(11)] = inst_34265);
(statearr_34357[(21)] = inst_34262);
(statearr_34357[(12)] = inst_34263);
return statearr_34357;
})();var statearr_34358_34430 = state_34322__$1;(statearr_34358_34430[(2)] = null);
(statearr_34358_34430[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (41)))
{var inst_34281 = (state_34322[(25)]);var inst_34297 = (state_34322[(2)]);var inst_34298 = cljs.core.next.call(null,inst_34281);var inst_34262 = inst_34298;var inst_34263 = null;var inst_34264 = (0);var inst_34265 = (0);var state_34322__$1 = (function (){var statearr_34359 = state_34322;(statearr_34359[(27)] = inst_34297);
(statearr_34359[(20)] = inst_34264);
(statearr_34359[(11)] = inst_34265);
(statearr_34359[(21)] = inst_34262);
(statearr_34359[(12)] = inst_34263);
return statearr_34359;
})();var statearr_34360_34431 = state_34322__$1;(statearr_34360_34431[(2)] = null);
(statearr_34360_34431[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (43)))
{var state_34322__$1 = state_34322;var statearr_34361_34432 = state_34322__$1;(statearr_34361_34432[(2)] = null);
(statearr_34361_34432[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (29)))
{var inst_34306 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34362_34433 = state_34322__$1;(statearr_34362_34433[(2)] = inst_34306);
(statearr_34362_34433[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (44)))
{var inst_34315 = (state_34322[(2)]);var state_34322__$1 = (function (){var statearr_34363 = state_34322;(statearr_34363[(28)] = inst_34315);
return statearr_34363;
})();var statearr_34364_34434 = state_34322__$1;(statearr_34364_34434[(2)] = null);
(statearr_34364_34434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (6)))
{var inst_34254 = (state_34322[(29)]);var inst_34253 = cljs.core.deref.call(null,cs);var inst_34254__$1 = cljs.core.keys.call(null,inst_34253);var inst_34255 = cljs.core.count.call(null,inst_34254__$1);var inst_34256 = cljs.core.reset_BANG_.call(null,dctr,inst_34255);var inst_34261 = cljs.core.seq.call(null,inst_34254__$1);var inst_34262 = inst_34261;var inst_34263 = null;var inst_34264 = (0);var inst_34265 = (0);var state_34322__$1 = (function (){var statearr_34365 = state_34322;(statearr_34365[(29)] = inst_34254__$1);
(statearr_34365[(20)] = inst_34264);
(statearr_34365[(30)] = inst_34256);
(statearr_34365[(11)] = inst_34265);
(statearr_34365[(21)] = inst_34262);
(statearr_34365[(12)] = inst_34263);
return statearr_34365;
})();var statearr_34366_34435 = state_34322__$1;(statearr_34366_34435[(2)] = null);
(statearr_34366_34435[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (28)))
{var inst_34262 = (state_34322[(21)]);var inst_34281 = (state_34322[(25)]);var inst_34281__$1 = cljs.core.seq.call(null,inst_34262);var state_34322__$1 = (function (){var statearr_34367 = state_34322;(statearr_34367[(25)] = inst_34281__$1);
return statearr_34367;
})();if(inst_34281__$1)
{var statearr_34368_34436 = state_34322__$1;(statearr_34368_34436[(1)] = (33));
} else
{var statearr_34369_34437 = state_34322__$1;(statearr_34369_34437[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (25)))
{var inst_34264 = (state_34322[(20)]);var inst_34265 = (state_34322[(11)]);var inst_34267 = (inst_34265 < inst_34264);var inst_34268 = inst_34267;var state_34322__$1 = state_34322;if(cljs.core.truth_(inst_34268))
{var statearr_34370_34438 = state_34322__$1;(statearr_34370_34438[(1)] = (27));
} else
{var statearr_34371_34439 = state_34322__$1;(statearr_34371_34439[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (34)))
{var state_34322__$1 = state_34322;var statearr_34372_34440 = state_34322__$1;(statearr_34372_34440[(2)] = null);
(statearr_34372_34440[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (17)))
{var state_34322__$1 = state_34322;var statearr_34373_34441 = state_34322__$1;(statearr_34373_34441[(2)] = null);
(statearr_34373_34441[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (3)))
{var inst_34320 = (state_34322[(2)]);var state_34322__$1 = state_34322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34322__$1,inst_34320);
} else
{if((state_val_34323 === (12)))
{var inst_34249 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34374_34442 = state_34322__$1;(statearr_34374_34442[(2)] = inst_34249);
(statearr_34374_34442[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (2)))
{var state_34322__$1 = state_34322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34322__$1,(4),ch);
} else
{if((state_val_34323 === (23)))
{var state_34322__$1 = state_34322;var statearr_34375_34443 = state_34322__$1;(statearr_34375_34443[(2)] = null);
(statearr_34375_34443[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (35)))
{var inst_34304 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34376_34444 = state_34322__$1;(statearr_34376_34444[(2)] = inst_34304);
(statearr_34376_34444[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (19)))
{var inst_34223 = (state_34322[(7)]);var inst_34227 = cljs.core.chunk_first.call(null,inst_34223);var inst_34228 = cljs.core.chunk_rest.call(null,inst_34223);var inst_34229 = cljs.core.count.call(null,inst_34227);var inst_34203 = inst_34228;var inst_34204 = inst_34227;var inst_34205 = inst_34229;var inst_34206 = (0);var state_34322__$1 = (function (){var statearr_34377 = state_34322;(statearr_34377[(13)] = inst_34203);
(statearr_34377[(15)] = inst_34205);
(statearr_34377[(16)] = inst_34206);
(statearr_34377[(17)] = inst_34204);
return statearr_34377;
})();var statearr_34378_34445 = state_34322__$1;(statearr_34378_34445[(2)] = null);
(statearr_34378_34445[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (11)))
{var inst_34203 = (state_34322[(13)]);var inst_34223 = (state_34322[(7)]);var inst_34223__$1 = cljs.core.seq.call(null,inst_34203);var state_34322__$1 = (function (){var statearr_34379 = state_34322;(statearr_34379[(7)] = inst_34223__$1);
return statearr_34379;
})();if(inst_34223__$1)
{var statearr_34380_34446 = state_34322__$1;(statearr_34380_34446[(1)] = (16));
} else
{var statearr_34381_34447 = state_34322__$1;(statearr_34381_34447[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (9)))
{var inst_34251 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34382_34448 = state_34322__$1;(statearr_34382_34448[(2)] = inst_34251);
(statearr_34382_34448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (5)))
{var inst_34201 = cljs.core.deref.call(null,cs);var inst_34202 = cljs.core.seq.call(null,inst_34201);var inst_34203 = inst_34202;var inst_34204 = null;var inst_34205 = (0);var inst_34206 = (0);var state_34322__$1 = (function (){var statearr_34383 = state_34322;(statearr_34383[(13)] = inst_34203);
(statearr_34383[(15)] = inst_34205);
(statearr_34383[(16)] = inst_34206);
(statearr_34383[(17)] = inst_34204);
return statearr_34383;
})();var statearr_34384_34449 = state_34322__$1;(statearr_34384_34449[(2)] = null);
(statearr_34384_34449[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (14)))
{var state_34322__$1 = state_34322;var statearr_34385_34450 = state_34322__$1;(statearr_34385_34450[(2)] = null);
(statearr_34385_34450[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (45)))
{var inst_34312 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34386_34451 = state_34322__$1;(statearr_34386_34451[(2)] = inst_34312);
(statearr_34386_34451[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (26)))
{var inst_34254 = (state_34322[(29)]);var inst_34308 = (state_34322[(2)]);var inst_34309 = cljs.core.seq.call(null,inst_34254);var state_34322__$1 = (function (){var statearr_34387 = state_34322;(statearr_34387[(31)] = inst_34308);
return statearr_34387;
})();if(inst_34309)
{var statearr_34388_34452 = state_34322__$1;(statearr_34388_34452[(1)] = (42));
} else
{var statearr_34389_34453 = state_34322__$1;(statearr_34389_34453[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (16)))
{var inst_34223 = (state_34322[(7)]);var inst_34225 = cljs.core.chunked_seq_QMARK_.call(null,inst_34223);var state_34322__$1 = state_34322;if(inst_34225)
{var statearr_34390_34454 = state_34322__$1;(statearr_34390_34454[(1)] = (19));
} else
{var statearr_34391_34455 = state_34322__$1;(statearr_34391_34455[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (38)))
{var inst_34301 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34392_34456 = state_34322__$1;(statearr_34392_34456[(2)] = inst_34301);
(statearr_34392_34456[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (30)))
{var state_34322__$1 = state_34322;var statearr_34393_34457 = state_34322__$1;(statearr_34393_34457[(2)] = null);
(statearr_34393_34457[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (10)))
{var inst_34206 = (state_34322[(16)]);var inst_34204 = (state_34322[(17)]);var inst_34212 = cljs.core._nth.call(null,inst_34204,inst_34206);var inst_34213 = cljs.core.nth.call(null,inst_34212,(0),null);var inst_34214 = cljs.core.nth.call(null,inst_34212,(1),null);var state_34322__$1 = (function (){var statearr_34394 = state_34322;(statearr_34394[(26)] = inst_34213);
return statearr_34394;
})();if(cljs.core.truth_(inst_34214))
{var statearr_34395_34458 = state_34322__$1;(statearr_34395_34458[(1)] = (13));
} else
{var statearr_34396_34459 = state_34322__$1;(statearr_34396_34459[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (18)))
{var inst_34247 = (state_34322[(2)]);var state_34322__$1 = state_34322;var statearr_34397_34460 = state_34322__$1;(statearr_34397_34460[(2)] = inst_34247);
(statearr_34397_34460[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (42)))
{var state_34322__$1 = state_34322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34322__$1,(45),dchan);
} else
{if((state_val_34323 === (37)))
{var inst_34194 = (state_34322[(9)]);var inst_34281 = (state_34322[(25)]);var inst_34290 = (state_34322[(23)]);var inst_34290__$1 = cljs.core.first.call(null,inst_34281);var inst_34291 = cljs.core.async.put_BANG_.call(null,inst_34290__$1,inst_34194,done);var state_34322__$1 = (function (){var statearr_34398 = state_34322;(statearr_34398[(23)] = inst_34290__$1);
return statearr_34398;
})();if(cljs.core.truth_(inst_34291))
{var statearr_34399_34461 = state_34322__$1;(statearr_34399_34461[(1)] = (39));
} else
{var statearr_34400_34462 = state_34322__$1;(statearr_34400_34462[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34323 === (8)))
{var inst_34205 = (state_34322[(15)]);var inst_34206 = (state_34322[(16)]);var inst_34208 = (inst_34206 < inst_34205);var inst_34209 = inst_34208;var state_34322__$1 = state_34322;if(cljs.core.truth_(inst_34209))
{var statearr_34401_34463 = state_34322__$1;(statearr_34401_34463[(1)] = (10));
} else
{var statearr_34402_34464 = state_34322__$1;(statearr_34402_34464[(1)] = (11));
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
});})(c__15989__auto___34410,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___34410,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_34406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34406[(0)] = state_machine__15975__auto__);
(statearr_34406[(1)] = (1));
return statearr_34406;
});
var state_machine__15975__auto____1 = (function (state_34322){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_34322);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e34407){if((e34407 instanceof Object))
{var ex__15978__auto__ = e34407;var statearr_34408_34465 = state_34322;(statearr_34408_34465[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34466 = state_34322;
state_34322 = G__34466;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_34322){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_34322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___34410,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_34409 = f__15990__auto__.call(null);(statearr_34409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___34410);
return statearr_34409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___34410,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj34468 = {};return obj34468;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__34469){var map__34474 = p__34469;var map__34474__$1 = ((cljs.core.seq_QMARK_.call(null,map__34474))?cljs.core.apply.call(null,cljs.core.hash_map,map__34474):map__34474);var opts = map__34474__$1;var statearr_34475_34478 = state;(statearr_34475_34478[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__34474,map__34474__$1,opts){
return (function (val){var statearr_34476_34479 = state;(statearr_34476_34479[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34474,map__34474__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_34477_34480 = state;(statearr_34477_34480[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__34469 = null;if (arguments.length > 3) {
  p__34469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__34469);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__34481){
var state = cljs.core.first(arglist__34481);
arglist__34481 = cljs.core.next(arglist__34481);
var cont_block = cljs.core.first(arglist__34481);
arglist__34481 = cljs.core.next(arglist__34481);
var ports = cljs.core.first(arglist__34481);
var p__34469 = cljs.core.rest(arglist__34481);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__34469);
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
;var m = (function (){if(typeof cljs.core.async.t34601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34601 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34602){
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
this.meta34602 = meta34602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34601.cljs$lang$type = true;
cljs.core.async.t34601.cljs$lang$ctorStr = "cljs.core.async/t34601";
cljs.core.async.t34601.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t34601");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34603){var self__ = this;
var _34603__$1 = this;return self__.meta34602;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34603,meta34602__$1){var self__ = this;
var _34603__$1 = this;return (new cljs.core.async.t34601(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34602__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34601 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34601(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34602){return (new cljs.core.async.t34601(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34602));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34601(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___34720 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34673){var state_val_34674 = (state_34673[(1)]);if((state_val_34674 === (7)))
{var inst_34617 = (state_34673[(7)]);var inst_34622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34617);var state_34673__$1 = state_34673;var statearr_34675_34721 = state_34673__$1;(statearr_34675_34721[(2)] = inst_34622);
(statearr_34675_34721[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (20)))
{var inst_34632 = (state_34673[(8)]);var state_34673__$1 = state_34673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34673__$1,(23),out,inst_34632);
} else
{if((state_val_34674 === (1)))
{var inst_34607 = (state_34673[(9)]);var inst_34607__$1 = calc_state.call(null);var inst_34608 = cljs.core.seq_QMARK_.call(null,inst_34607__$1);var state_34673__$1 = (function (){var statearr_34676 = state_34673;(statearr_34676[(9)] = inst_34607__$1);
return statearr_34676;
})();if(inst_34608)
{var statearr_34677_34722 = state_34673__$1;(statearr_34677_34722[(1)] = (2));
} else
{var statearr_34678_34723 = state_34673__$1;(statearr_34678_34723[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (24)))
{var inst_34625 = (state_34673[(10)]);var inst_34617 = inst_34625;var state_34673__$1 = (function (){var statearr_34679 = state_34673;(statearr_34679[(7)] = inst_34617);
return statearr_34679;
})();var statearr_34680_34724 = state_34673__$1;(statearr_34680_34724[(2)] = null);
(statearr_34680_34724[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (4)))
{var inst_34607 = (state_34673[(9)]);var inst_34613 = (state_34673[(2)]);var inst_34614 = cljs.core.get.call(null,inst_34613,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_34615 = cljs.core.get.call(null,inst_34613,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_34616 = cljs.core.get.call(null,inst_34613,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_34617 = inst_34607;var state_34673__$1 = (function (){var statearr_34681 = state_34673;(statearr_34681[(11)] = inst_34616);
(statearr_34681[(7)] = inst_34617);
(statearr_34681[(12)] = inst_34614);
(statearr_34681[(13)] = inst_34615);
return statearr_34681;
})();var statearr_34682_34725 = state_34673__$1;(statearr_34682_34725[(2)] = null);
(statearr_34682_34725[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (15)))
{var state_34673__$1 = state_34673;var statearr_34683_34726 = state_34673__$1;(statearr_34683_34726[(2)] = null);
(statearr_34683_34726[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (21)))
{var inst_34625 = (state_34673[(10)]);var inst_34617 = inst_34625;var state_34673__$1 = (function (){var statearr_34684 = state_34673;(statearr_34684[(7)] = inst_34617);
return statearr_34684;
})();var statearr_34685_34727 = state_34673__$1;(statearr_34685_34727[(2)] = null);
(statearr_34685_34727[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (13)))
{var inst_34669 = (state_34673[(2)]);var state_34673__$1 = state_34673;var statearr_34686_34728 = state_34673__$1;(statearr_34686_34728[(2)] = inst_34669);
(statearr_34686_34728[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (22)))
{var inst_34667 = (state_34673[(2)]);var state_34673__$1 = state_34673;var statearr_34687_34729 = state_34673__$1;(statearr_34687_34729[(2)] = inst_34667);
(statearr_34687_34729[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (6)))
{var inst_34671 = (state_34673[(2)]);var state_34673__$1 = state_34673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34673__$1,inst_34671);
} else
{if((state_val_34674 === (25)))
{var state_34673__$1 = state_34673;var statearr_34688_34730 = state_34673__$1;(statearr_34688_34730[(2)] = null);
(statearr_34688_34730[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (17)))
{var inst_34647 = (state_34673[(14)]);var state_34673__$1 = state_34673;var statearr_34689_34731 = state_34673__$1;(statearr_34689_34731[(2)] = inst_34647);
(statearr_34689_34731[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (3)))
{var inst_34607 = (state_34673[(9)]);var state_34673__$1 = state_34673;var statearr_34690_34732 = state_34673__$1;(statearr_34690_34732[(2)] = inst_34607);
(statearr_34690_34732[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (12)))
{var inst_34647 = (state_34673[(14)]);var inst_34633 = (state_34673[(15)]);var inst_34628 = (state_34673[(16)]);var inst_34647__$1 = inst_34628.call(null,inst_34633);var state_34673__$1 = (function (){var statearr_34691 = state_34673;(statearr_34691[(14)] = inst_34647__$1);
return statearr_34691;
})();if(cljs.core.truth_(inst_34647__$1))
{var statearr_34692_34733 = state_34673__$1;(statearr_34692_34733[(1)] = (17));
} else
{var statearr_34693_34734 = state_34673__$1;(statearr_34693_34734[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (2)))
{var inst_34607 = (state_34673[(9)]);var inst_34610 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34607);var state_34673__$1 = state_34673;var statearr_34694_34735 = state_34673__$1;(statearr_34694_34735[(2)] = inst_34610);
(statearr_34694_34735[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (23)))
{var inst_34658 = (state_34673[(2)]);var state_34673__$1 = state_34673;if(cljs.core.truth_(inst_34658))
{var statearr_34695_34736 = state_34673__$1;(statearr_34695_34736[(1)] = (24));
} else
{var statearr_34696_34737 = state_34673__$1;(statearr_34696_34737[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (19)))
{var inst_34655 = (state_34673[(2)]);var state_34673__$1 = state_34673;if(cljs.core.truth_(inst_34655))
{var statearr_34697_34738 = state_34673__$1;(statearr_34697_34738[(1)] = (20));
} else
{var statearr_34698_34739 = state_34673__$1;(statearr_34698_34739[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (11)))
{var inst_34632 = (state_34673[(8)]);var inst_34638 = (inst_34632 == null);var state_34673__$1 = state_34673;if(cljs.core.truth_(inst_34638))
{var statearr_34699_34740 = state_34673__$1;(statearr_34699_34740[(1)] = (14));
} else
{var statearr_34700_34741 = state_34673__$1;(statearr_34700_34741[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (9)))
{var inst_34625 = (state_34673[(10)]);var inst_34625__$1 = (state_34673[(2)]);var inst_34626 = cljs.core.get.call(null,inst_34625__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_34627 = cljs.core.get.call(null,inst_34625__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_34628 = cljs.core.get.call(null,inst_34625__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_34673__$1 = (function (){var statearr_34701 = state_34673;(statearr_34701[(10)] = inst_34625__$1);
(statearr_34701[(17)] = inst_34627);
(statearr_34701[(16)] = inst_34628);
return statearr_34701;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_34673__$1,(10),inst_34626);
} else
{if((state_val_34674 === (5)))
{var inst_34617 = (state_34673[(7)]);var inst_34620 = cljs.core.seq_QMARK_.call(null,inst_34617);var state_34673__$1 = state_34673;if(inst_34620)
{var statearr_34702_34742 = state_34673__$1;(statearr_34702_34742[(1)] = (7));
} else
{var statearr_34703_34743 = state_34673__$1;(statearr_34703_34743[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (14)))
{var inst_34633 = (state_34673[(15)]);var inst_34640 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34633);var state_34673__$1 = state_34673;var statearr_34704_34744 = state_34673__$1;(statearr_34704_34744[(2)] = inst_34640);
(statearr_34704_34744[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (26)))
{var inst_34663 = (state_34673[(2)]);var state_34673__$1 = state_34673;var statearr_34705_34745 = state_34673__$1;(statearr_34705_34745[(2)] = inst_34663);
(statearr_34705_34745[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (16)))
{var inst_34643 = (state_34673[(2)]);var inst_34644 = calc_state.call(null);var inst_34617 = inst_34644;var state_34673__$1 = (function (){var statearr_34706 = state_34673;(statearr_34706[(7)] = inst_34617);
(statearr_34706[(18)] = inst_34643);
return statearr_34706;
})();var statearr_34707_34746 = state_34673__$1;(statearr_34707_34746[(2)] = null);
(statearr_34707_34746[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (10)))
{var inst_34632 = (state_34673[(8)]);var inst_34633 = (state_34673[(15)]);var inst_34631 = (state_34673[(2)]);var inst_34632__$1 = cljs.core.nth.call(null,inst_34631,(0),null);var inst_34633__$1 = cljs.core.nth.call(null,inst_34631,(1),null);var inst_34634 = (inst_34632__$1 == null);var inst_34635 = cljs.core._EQ_.call(null,inst_34633__$1,change);var inst_34636 = (inst_34634) || (inst_34635);var state_34673__$1 = (function (){var statearr_34708 = state_34673;(statearr_34708[(8)] = inst_34632__$1);
(statearr_34708[(15)] = inst_34633__$1);
return statearr_34708;
})();if(cljs.core.truth_(inst_34636))
{var statearr_34709_34747 = state_34673__$1;(statearr_34709_34747[(1)] = (11));
} else
{var statearr_34710_34748 = state_34673__$1;(statearr_34710_34748[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (18)))
{var inst_34633 = (state_34673[(15)]);var inst_34627 = (state_34673[(17)]);var inst_34628 = (state_34673[(16)]);var inst_34650 = cljs.core.empty_QMARK_.call(null,inst_34628);var inst_34651 = inst_34627.call(null,inst_34633);var inst_34652 = cljs.core.not.call(null,inst_34651);var inst_34653 = (inst_34650) && (inst_34652);var state_34673__$1 = state_34673;var statearr_34711_34749 = state_34673__$1;(statearr_34711_34749[(2)] = inst_34653);
(statearr_34711_34749[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34674 === (8)))
{var inst_34617 = (state_34673[(7)]);var state_34673__$1 = state_34673;var statearr_34712_34750 = state_34673__$1;(statearr_34712_34750[(2)] = inst_34617);
(statearr_34712_34750[(1)] = (9));
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
});})(c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_34716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34716[(0)] = state_machine__15975__auto__);
(statearr_34716[(1)] = (1));
return statearr_34716;
});
var state_machine__15975__auto____1 = (function (state_34673){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_34673);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object))
{var ex__15978__auto__ = e34717;var statearr_34718_34751 = state_34673;(statearr_34718_34751[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34673);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34752 = state_34673;
state_34673 = G__34752;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_34719 = f__15990__auto__.call(null);(statearr_34719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___34720);
return statearr_34719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___34720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj34754 = {};return obj34754;
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
return (function (p1__34755_SHARP_){if(cljs.core.truth_(p1__34755_SHARP_.call(null,topic)))
{return p1__34755_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34755_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34878 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34878 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34879){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34879 = meta34879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34878.cljs$lang$type = true;
cljs.core.async.t34878.cljs$lang$ctorStr = "cljs.core.async/t34878";
cljs.core.async.t34878.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t34878");
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34878.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34880){var self__ = this;
var _34880__$1 = this;return self__.meta34879;
});})(mults,ensure_mult))
;
cljs.core.async.t34878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34880,meta34879__$1){var self__ = this;
var _34880__$1 = this;return (new cljs.core.async.t34878(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34879__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34878 = ((function (mults,ensure_mult){
return (function __GT_t34878(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34879){return (new cljs.core.async.t34878(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34879));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34878(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___35000 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35000,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35000,mults,ensure_mult,p){
return (function (state_34952){var state_val_34953 = (state_34952[(1)]);if((state_val_34953 === (7)))
{var inst_34948 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34954_35001 = state_34952__$1;(statearr_34954_35001[(2)] = inst_34948);
(statearr_34954_35001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (20)))
{var state_34952__$1 = state_34952;var statearr_34955_35002 = state_34952__$1;(statearr_34955_35002[(2)] = null);
(statearr_34955_35002[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (1)))
{var state_34952__$1 = state_34952;var statearr_34956_35003 = state_34952__$1;(statearr_34956_35003[(2)] = null);
(statearr_34956_35003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (24)))
{var inst_34931 = (state_34952[(7)]);var inst_34940 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34931);var state_34952__$1 = state_34952;var statearr_34957_35004 = state_34952__$1;(statearr_34957_35004[(2)] = inst_34940);
(statearr_34957_35004[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (4)))
{var inst_34883 = (state_34952[(8)]);var inst_34883__$1 = (state_34952[(2)]);var inst_34884 = (inst_34883__$1 == null);var state_34952__$1 = (function (){var statearr_34958 = state_34952;(statearr_34958[(8)] = inst_34883__$1);
return statearr_34958;
})();if(cljs.core.truth_(inst_34884))
{var statearr_34959_35005 = state_34952__$1;(statearr_34959_35005[(1)] = (5));
} else
{var statearr_34960_35006 = state_34952__$1;(statearr_34960_35006[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (15)))
{var inst_34925 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34961_35007 = state_34952__$1;(statearr_34961_35007[(2)] = inst_34925);
(statearr_34961_35007[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (21)))
{var inst_34945 = (state_34952[(2)]);var state_34952__$1 = (function (){var statearr_34962 = state_34952;(statearr_34962[(9)] = inst_34945);
return statearr_34962;
})();var statearr_34963_35008 = state_34952__$1;(statearr_34963_35008[(2)] = null);
(statearr_34963_35008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (13)))
{var inst_34907 = (state_34952[(10)]);var inst_34909 = cljs.core.chunked_seq_QMARK_.call(null,inst_34907);var state_34952__$1 = state_34952;if(inst_34909)
{var statearr_34964_35009 = state_34952__$1;(statearr_34964_35009[(1)] = (16));
} else
{var statearr_34965_35010 = state_34952__$1;(statearr_34965_35010[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (22)))
{var inst_34937 = (state_34952[(2)]);var state_34952__$1 = state_34952;if(cljs.core.truth_(inst_34937))
{var statearr_34966_35011 = state_34952__$1;(statearr_34966_35011[(1)] = (23));
} else
{var statearr_34967_35012 = state_34952__$1;(statearr_34967_35012[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (6)))
{var inst_34931 = (state_34952[(7)]);var inst_34883 = (state_34952[(8)]);var inst_34933 = (state_34952[(11)]);var inst_34931__$1 = topic_fn.call(null,inst_34883);var inst_34932 = cljs.core.deref.call(null,mults);var inst_34933__$1 = cljs.core.get.call(null,inst_34932,inst_34931__$1);var state_34952__$1 = (function (){var statearr_34968 = state_34952;(statearr_34968[(7)] = inst_34931__$1);
(statearr_34968[(11)] = inst_34933__$1);
return statearr_34968;
})();if(cljs.core.truth_(inst_34933__$1))
{var statearr_34969_35013 = state_34952__$1;(statearr_34969_35013[(1)] = (19));
} else
{var statearr_34970_35014 = state_34952__$1;(statearr_34970_35014[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (25)))
{var inst_34942 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34971_35015 = state_34952__$1;(statearr_34971_35015[(2)] = inst_34942);
(statearr_34971_35015[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (17)))
{var inst_34907 = (state_34952[(10)]);var inst_34916 = cljs.core.first.call(null,inst_34907);var inst_34917 = cljs.core.async.muxch_STAR_.call(null,inst_34916);var inst_34918 = cljs.core.async.close_BANG_.call(null,inst_34917);var inst_34919 = cljs.core.next.call(null,inst_34907);var inst_34893 = inst_34919;var inst_34894 = null;var inst_34895 = (0);var inst_34896 = (0);var state_34952__$1 = (function (){var statearr_34972 = state_34952;(statearr_34972[(12)] = inst_34895);
(statearr_34972[(13)] = inst_34918);
(statearr_34972[(14)] = inst_34896);
(statearr_34972[(15)] = inst_34893);
(statearr_34972[(16)] = inst_34894);
return statearr_34972;
})();var statearr_34973_35016 = state_34952__$1;(statearr_34973_35016[(2)] = null);
(statearr_34973_35016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (3)))
{var inst_34950 = (state_34952[(2)]);var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34952__$1,inst_34950);
} else
{if((state_val_34953 === (12)))
{var inst_34927 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34974_35017 = state_34952__$1;(statearr_34974_35017[(2)] = inst_34927);
(statearr_34974_35017[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (2)))
{var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34952__$1,(4),ch);
} else
{if((state_val_34953 === (23)))
{var state_34952__$1 = state_34952;var statearr_34975_35018 = state_34952__$1;(statearr_34975_35018[(2)] = null);
(statearr_34975_35018[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (19)))
{var inst_34883 = (state_34952[(8)]);var inst_34933 = (state_34952[(11)]);var inst_34935 = cljs.core.async.muxch_STAR_.call(null,inst_34933);var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34952__$1,(22),inst_34935,inst_34883);
} else
{if((state_val_34953 === (11)))
{var inst_34907 = (state_34952[(10)]);var inst_34893 = (state_34952[(15)]);var inst_34907__$1 = cljs.core.seq.call(null,inst_34893);var state_34952__$1 = (function (){var statearr_34976 = state_34952;(statearr_34976[(10)] = inst_34907__$1);
return statearr_34976;
})();if(inst_34907__$1)
{var statearr_34977_35019 = state_34952__$1;(statearr_34977_35019[(1)] = (13));
} else
{var statearr_34978_35020 = state_34952__$1;(statearr_34978_35020[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (9)))
{var inst_34929 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34979_35021 = state_34952__$1;(statearr_34979_35021[(2)] = inst_34929);
(statearr_34979_35021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (5)))
{var inst_34890 = cljs.core.deref.call(null,mults);var inst_34891 = cljs.core.vals.call(null,inst_34890);var inst_34892 = cljs.core.seq.call(null,inst_34891);var inst_34893 = inst_34892;var inst_34894 = null;var inst_34895 = (0);var inst_34896 = (0);var state_34952__$1 = (function (){var statearr_34980 = state_34952;(statearr_34980[(12)] = inst_34895);
(statearr_34980[(14)] = inst_34896);
(statearr_34980[(15)] = inst_34893);
(statearr_34980[(16)] = inst_34894);
return statearr_34980;
})();var statearr_34981_35022 = state_34952__$1;(statearr_34981_35022[(2)] = null);
(statearr_34981_35022[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (14)))
{var state_34952__$1 = state_34952;var statearr_34985_35023 = state_34952__$1;(statearr_34985_35023[(2)] = null);
(statearr_34985_35023[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (16)))
{var inst_34907 = (state_34952[(10)]);var inst_34911 = cljs.core.chunk_first.call(null,inst_34907);var inst_34912 = cljs.core.chunk_rest.call(null,inst_34907);var inst_34913 = cljs.core.count.call(null,inst_34911);var inst_34893 = inst_34912;var inst_34894 = inst_34911;var inst_34895 = inst_34913;var inst_34896 = (0);var state_34952__$1 = (function (){var statearr_34986 = state_34952;(statearr_34986[(12)] = inst_34895);
(statearr_34986[(14)] = inst_34896);
(statearr_34986[(15)] = inst_34893);
(statearr_34986[(16)] = inst_34894);
return statearr_34986;
})();var statearr_34987_35024 = state_34952__$1;(statearr_34987_35024[(2)] = null);
(statearr_34987_35024[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (10)))
{var inst_34895 = (state_34952[(12)]);var inst_34896 = (state_34952[(14)]);var inst_34893 = (state_34952[(15)]);var inst_34894 = (state_34952[(16)]);var inst_34901 = cljs.core._nth.call(null,inst_34894,inst_34896);var inst_34902 = cljs.core.async.muxch_STAR_.call(null,inst_34901);var inst_34903 = cljs.core.async.close_BANG_.call(null,inst_34902);var inst_34904 = (inst_34896 + (1));var tmp34982 = inst_34895;var tmp34983 = inst_34893;var tmp34984 = inst_34894;var inst_34893__$1 = tmp34983;var inst_34894__$1 = tmp34984;var inst_34895__$1 = tmp34982;var inst_34896__$1 = inst_34904;var state_34952__$1 = (function (){var statearr_34988 = state_34952;(statearr_34988[(12)] = inst_34895__$1);
(statearr_34988[(14)] = inst_34896__$1);
(statearr_34988[(17)] = inst_34903);
(statearr_34988[(15)] = inst_34893__$1);
(statearr_34988[(16)] = inst_34894__$1);
return statearr_34988;
})();var statearr_34989_35025 = state_34952__$1;(statearr_34989_35025[(2)] = null);
(statearr_34989_35025[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (18)))
{var inst_34922 = (state_34952[(2)]);var state_34952__$1 = state_34952;var statearr_34990_35026 = state_34952__$1;(statearr_34990_35026[(2)] = inst_34922);
(statearr_34990_35026[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34953 === (8)))
{var inst_34895 = (state_34952[(12)]);var inst_34896 = (state_34952[(14)]);var inst_34898 = (inst_34896 < inst_34895);var inst_34899 = inst_34898;var state_34952__$1 = state_34952;if(cljs.core.truth_(inst_34899))
{var statearr_34991_35027 = state_34952__$1;(statearr_34991_35027[(1)] = (10));
} else
{var statearr_34992_35028 = state_34952__$1;(statearr_34992_35028[(1)] = (11));
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
});})(c__15989__auto___35000,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___35000,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_34996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34996[(0)] = state_machine__15975__auto__);
(statearr_34996[(1)] = (1));
return statearr_34996;
});
var state_machine__15975__auto____1 = (function (state_34952){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_34952);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e34997){if((e34997 instanceof Object))
{var ex__15978__auto__ = e34997;var statearr_34998_35029 = state_34952;(statearr_34998_35029[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35030 = state_34952;
state_34952 = G__35030;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_34952){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_34952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35000,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_34999 = f__15990__auto__.call(null);(statearr_34999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35000);
return statearr_34999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35000,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___35167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35137){var state_val_35138 = (state_35137[(1)]);if((state_val_35138 === (7)))
{var state_35137__$1 = state_35137;var statearr_35139_35168 = state_35137__$1;(statearr_35139_35168[(2)] = null);
(statearr_35139_35168[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (1)))
{var state_35137__$1 = state_35137;var statearr_35140_35169 = state_35137__$1;(statearr_35140_35169[(2)] = null);
(statearr_35140_35169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (4)))
{var inst_35101 = (state_35137[(7)]);var inst_35103 = (inst_35101 < cnt);var state_35137__$1 = state_35137;if(cljs.core.truth_(inst_35103))
{var statearr_35141_35170 = state_35137__$1;(statearr_35141_35170[(1)] = (6));
} else
{var statearr_35142_35171 = state_35137__$1;(statearr_35142_35171[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (15)))
{var inst_35133 = (state_35137[(2)]);var state_35137__$1 = state_35137;var statearr_35143_35172 = state_35137__$1;(statearr_35143_35172[(2)] = inst_35133);
(statearr_35143_35172[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (13)))
{var inst_35126 = cljs.core.async.close_BANG_.call(null,out);var state_35137__$1 = state_35137;var statearr_35144_35173 = state_35137__$1;(statearr_35144_35173[(2)] = inst_35126);
(statearr_35144_35173[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (6)))
{var state_35137__$1 = state_35137;var statearr_35145_35174 = state_35137__$1;(statearr_35145_35174[(2)] = null);
(statearr_35145_35174[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (3)))
{var inst_35135 = (state_35137[(2)]);var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35137__$1,inst_35135);
} else
{if((state_val_35138 === (12)))
{var inst_35123 = (state_35137[(8)]);var inst_35123__$1 = (state_35137[(2)]);var inst_35124 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35123__$1);var state_35137__$1 = (function (){var statearr_35146 = state_35137;(statearr_35146[(8)] = inst_35123__$1);
return statearr_35146;
})();if(cljs.core.truth_(inst_35124))
{var statearr_35147_35175 = state_35137__$1;(statearr_35147_35175[(1)] = (13));
} else
{var statearr_35148_35176 = state_35137__$1;(statearr_35148_35176[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (2)))
{var inst_35100 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35101 = (0);var state_35137__$1 = (function (){var statearr_35149 = state_35137;(statearr_35149[(7)] = inst_35101);
(statearr_35149[(9)] = inst_35100);
return statearr_35149;
})();var statearr_35150_35177 = state_35137__$1;(statearr_35150_35177[(2)] = null);
(statearr_35150_35177[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (11)))
{var inst_35101 = (state_35137[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35137,(10),Object,null,(9));var inst_35110 = chs__$1.call(null,inst_35101);var inst_35111 = done.call(null,inst_35101);var inst_35112 = cljs.core.async.take_BANG_.call(null,inst_35110,inst_35111);var state_35137__$1 = state_35137;var statearr_35151_35178 = state_35137__$1;(statearr_35151_35178[(2)] = inst_35112);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35137__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (9)))
{var inst_35101 = (state_35137[(7)]);var inst_35114 = (state_35137[(2)]);var inst_35115 = (inst_35101 + (1));var inst_35101__$1 = inst_35115;var state_35137__$1 = (function (){var statearr_35152 = state_35137;(statearr_35152[(7)] = inst_35101__$1);
(statearr_35152[(10)] = inst_35114);
return statearr_35152;
})();var statearr_35153_35179 = state_35137__$1;(statearr_35153_35179[(2)] = null);
(statearr_35153_35179[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (5)))
{var inst_35121 = (state_35137[(2)]);var state_35137__$1 = (function (){var statearr_35154 = state_35137;(statearr_35154[(11)] = inst_35121);
return statearr_35154;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35137__$1,(12),dchan);
} else
{if((state_val_35138 === (14)))
{var inst_35123 = (state_35137[(8)]);var inst_35128 = cljs.core.apply.call(null,f,inst_35123);var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35137__$1,(16),out,inst_35128);
} else
{if((state_val_35138 === (16)))
{var inst_35130 = (state_35137[(2)]);var state_35137__$1 = (function (){var statearr_35155 = state_35137;(statearr_35155[(12)] = inst_35130);
return statearr_35155;
})();var statearr_35156_35180 = state_35137__$1;(statearr_35156_35180[(2)] = null);
(statearr_35156_35180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (10)))
{var inst_35105 = (state_35137[(2)]);var inst_35106 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35137__$1 = (function (){var statearr_35157 = state_35137;(statearr_35157[(13)] = inst_35105);
return statearr_35157;
})();var statearr_35158_35181 = state_35137__$1;(statearr_35158_35181[(2)] = inst_35106);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35137__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35138 === (8)))
{var inst_35119 = (state_35137[(2)]);var state_35137__$1 = state_35137;var statearr_35159_35182 = state_35137__$1;(statearr_35159_35182[(2)] = inst_35119);
(statearr_35159_35182[(1)] = (5));
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
});})(c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_35163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35163[(0)] = state_machine__15975__auto__);
(statearr_35163[(1)] = (1));
return statearr_35163;
});
var state_machine__15975__auto____1 = (function (state_35137){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35137);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35164){if((e35164 instanceof Object))
{var ex__15978__auto__ = e35164;var statearr_35165_35183 = state_35137;(statearr_35165_35183[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35164;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35184 = state_35137;
state_35137 = G__35184;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35137){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_35166 = f__15990__auto__.call(null);(statearr_35166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35167);
return statearr_35166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35167,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___35292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35292,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35292,out){
return (function (state_35268){var state_val_35269 = (state_35268[(1)]);if((state_val_35269 === (7)))
{var inst_35247 = (state_35268[(7)]);var inst_35248 = (state_35268[(8)]);var inst_35247__$1 = (state_35268[(2)]);var inst_35248__$1 = cljs.core.nth.call(null,inst_35247__$1,(0),null);var inst_35249 = cljs.core.nth.call(null,inst_35247__$1,(1),null);var inst_35250 = (inst_35248__$1 == null);var state_35268__$1 = (function (){var statearr_35270 = state_35268;(statearr_35270[(9)] = inst_35249);
(statearr_35270[(7)] = inst_35247__$1);
(statearr_35270[(8)] = inst_35248__$1);
return statearr_35270;
})();if(cljs.core.truth_(inst_35250))
{var statearr_35271_35293 = state_35268__$1;(statearr_35271_35293[(1)] = (8));
} else
{var statearr_35272_35294 = state_35268__$1;(statearr_35272_35294[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (1)))
{var inst_35239 = cljs.core.vec.call(null,chs);var inst_35240 = inst_35239;var state_35268__$1 = (function (){var statearr_35273 = state_35268;(statearr_35273[(10)] = inst_35240);
return statearr_35273;
})();var statearr_35274_35295 = state_35268__$1;(statearr_35274_35295[(2)] = null);
(statearr_35274_35295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (4)))
{var inst_35240 = (state_35268[(10)]);var state_35268__$1 = state_35268;return cljs.core.async.ioc_alts_BANG_.call(null,state_35268__$1,(7),inst_35240);
} else
{if((state_val_35269 === (6)))
{var inst_35264 = (state_35268[(2)]);var state_35268__$1 = state_35268;var statearr_35275_35296 = state_35268__$1;(statearr_35275_35296[(2)] = inst_35264);
(statearr_35275_35296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (3)))
{var inst_35266 = (state_35268[(2)]);var state_35268__$1 = state_35268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35268__$1,inst_35266);
} else
{if((state_val_35269 === (2)))
{var inst_35240 = (state_35268[(10)]);var inst_35242 = cljs.core.count.call(null,inst_35240);var inst_35243 = (inst_35242 > (0));var state_35268__$1 = state_35268;if(cljs.core.truth_(inst_35243))
{var statearr_35277_35297 = state_35268__$1;(statearr_35277_35297[(1)] = (4));
} else
{var statearr_35278_35298 = state_35268__$1;(statearr_35278_35298[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (11)))
{var inst_35240 = (state_35268[(10)]);var inst_35257 = (state_35268[(2)]);var tmp35276 = inst_35240;var inst_35240__$1 = tmp35276;var state_35268__$1 = (function (){var statearr_35279 = state_35268;(statearr_35279[(11)] = inst_35257);
(statearr_35279[(10)] = inst_35240__$1);
return statearr_35279;
})();var statearr_35280_35299 = state_35268__$1;(statearr_35280_35299[(2)] = null);
(statearr_35280_35299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (9)))
{var inst_35248 = (state_35268[(8)]);var state_35268__$1 = state_35268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35268__$1,(11),out,inst_35248);
} else
{if((state_val_35269 === (5)))
{var inst_35262 = cljs.core.async.close_BANG_.call(null,out);var state_35268__$1 = state_35268;var statearr_35281_35300 = state_35268__$1;(statearr_35281_35300[(2)] = inst_35262);
(statearr_35281_35300[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (10)))
{var inst_35260 = (state_35268[(2)]);var state_35268__$1 = state_35268;var statearr_35282_35301 = state_35268__$1;(statearr_35282_35301[(2)] = inst_35260);
(statearr_35282_35301[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35269 === (8)))
{var inst_35249 = (state_35268[(9)]);var inst_35247 = (state_35268[(7)]);var inst_35248 = (state_35268[(8)]);var inst_35240 = (state_35268[(10)]);var inst_35252 = (function (){var c = inst_35249;var v = inst_35248;var vec__35245 = inst_35247;var cs = inst_35240;return ((function (c,v,vec__35245,cs,inst_35249,inst_35247,inst_35248,inst_35240,state_val_35269,c__15989__auto___35292,out){
return (function (p1__35185_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35185_SHARP_);
});
;})(c,v,vec__35245,cs,inst_35249,inst_35247,inst_35248,inst_35240,state_val_35269,c__15989__auto___35292,out))
})();var inst_35253 = cljs.core.filterv.call(null,inst_35252,inst_35240);var inst_35240__$1 = inst_35253;var state_35268__$1 = (function (){var statearr_35283 = state_35268;(statearr_35283[(10)] = inst_35240__$1);
return statearr_35283;
})();var statearr_35284_35302 = state_35268__$1;(statearr_35284_35302[(2)] = null);
(statearr_35284_35302[(1)] = (2));
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
});})(c__15989__auto___35292,out))
;return ((function (switch__15974__auto__,c__15989__auto___35292,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_35288 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35288[(0)] = state_machine__15975__auto__);
(statearr_35288[(1)] = (1));
return statearr_35288;
});
var state_machine__15975__auto____1 = (function (state_35268){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35268);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35289){if((e35289 instanceof Object))
{var ex__15978__auto__ = e35289;var statearr_35290_35303 = state_35268;(statearr_35290_35303[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35289;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35304 = state_35268;
state_35268 = G__35304;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35268){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35292,out))
})();var state__15991__auto__ = (function (){var statearr_35291 = f__15990__auto__.call(null);(statearr_35291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35292);
return statearr_35291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35292,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___35397 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35397,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35397,out){
return (function (state_35374){var state_val_35375 = (state_35374[(1)]);if((state_val_35375 === (7)))
{var inst_35356 = (state_35374[(7)]);var inst_35356__$1 = (state_35374[(2)]);var inst_35357 = (inst_35356__$1 == null);var inst_35358 = cljs.core.not.call(null,inst_35357);var state_35374__$1 = (function (){var statearr_35376 = state_35374;(statearr_35376[(7)] = inst_35356__$1);
return statearr_35376;
})();if(inst_35358)
{var statearr_35377_35398 = state_35374__$1;(statearr_35377_35398[(1)] = (8));
} else
{var statearr_35378_35399 = state_35374__$1;(statearr_35378_35399[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (1)))
{var inst_35351 = (0);var state_35374__$1 = (function (){var statearr_35379 = state_35374;(statearr_35379[(8)] = inst_35351);
return statearr_35379;
})();var statearr_35380_35400 = state_35374__$1;(statearr_35380_35400[(2)] = null);
(statearr_35380_35400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (4)))
{var state_35374__$1 = state_35374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35374__$1,(7),ch);
} else
{if((state_val_35375 === (6)))
{var inst_35369 = (state_35374[(2)]);var state_35374__$1 = state_35374;var statearr_35381_35401 = state_35374__$1;(statearr_35381_35401[(2)] = inst_35369);
(statearr_35381_35401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (3)))
{var inst_35371 = (state_35374[(2)]);var inst_35372 = cljs.core.async.close_BANG_.call(null,out);var state_35374__$1 = (function (){var statearr_35382 = state_35374;(statearr_35382[(9)] = inst_35371);
return statearr_35382;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35374__$1,inst_35372);
} else
{if((state_val_35375 === (2)))
{var inst_35351 = (state_35374[(8)]);var inst_35353 = (inst_35351 < n);var state_35374__$1 = state_35374;if(cljs.core.truth_(inst_35353))
{var statearr_35383_35402 = state_35374__$1;(statearr_35383_35402[(1)] = (4));
} else
{var statearr_35384_35403 = state_35374__$1;(statearr_35384_35403[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (11)))
{var inst_35351 = (state_35374[(8)]);var inst_35361 = (state_35374[(2)]);var inst_35362 = (inst_35351 + (1));var inst_35351__$1 = inst_35362;var state_35374__$1 = (function (){var statearr_35385 = state_35374;(statearr_35385[(8)] = inst_35351__$1);
(statearr_35385[(10)] = inst_35361);
return statearr_35385;
})();var statearr_35386_35404 = state_35374__$1;(statearr_35386_35404[(2)] = null);
(statearr_35386_35404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (9)))
{var state_35374__$1 = state_35374;var statearr_35387_35405 = state_35374__$1;(statearr_35387_35405[(2)] = null);
(statearr_35387_35405[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (5)))
{var state_35374__$1 = state_35374;var statearr_35388_35406 = state_35374__$1;(statearr_35388_35406[(2)] = null);
(statearr_35388_35406[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (10)))
{var inst_35366 = (state_35374[(2)]);var state_35374__$1 = state_35374;var statearr_35389_35407 = state_35374__$1;(statearr_35389_35407[(2)] = inst_35366);
(statearr_35389_35407[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35375 === (8)))
{var inst_35356 = (state_35374[(7)]);var state_35374__$1 = state_35374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35374__$1,(11),out,inst_35356);
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
});})(c__15989__auto___35397,out))
;return ((function (switch__15974__auto__,c__15989__auto___35397,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_35393 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35393[(0)] = state_machine__15975__auto__);
(statearr_35393[(1)] = (1));
return statearr_35393;
});
var state_machine__15975__auto____1 = (function (state_35374){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35374);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35394){if((e35394 instanceof Object))
{var ex__15978__auto__ = e35394;var statearr_35395_35408 = state_35374;(statearr_35395_35408[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35409 = state_35374;
state_35374 = G__35409;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35374){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35397,out))
})();var state__15991__auto__ = (function (){var statearr_35396 = f__15990__auto__.call(null);(statearr_35396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35397);
return statearr_35396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35397,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35417 = (function (ch,f,map_LT_,meta35418){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35418 = meta35418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35417.cljs$lang$type = true;
cljs.core.async.t35417.cljs$lang$ctorStr = "cljs.core.async/t35417";
cljs.core.async.t35417.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t35417");
});
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t35420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35420 = (function (fn1,_,meta35418,ch,f,map_LT_,meta35421){
this.fn1 = fn1;
this._ = _;
this.meta35418 = meta35418;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35421 = meta35421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35420.cljs$lang$type = true;
cljs.core.async.t35420.cljs$lang$ctorStr = "cljs.core.async/t35420";
cljs.core.async.t35420.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t35420");
});})(___$1))
;
cljs.core.async.t35420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t35420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__35410_SHARP_){return f1.call(null,(((p1__35410_SHARP_ == null))?null:self__.f.call(null,p1__35410_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t35420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35422){var self__ = this;
var _35422__$1 = this;return self__.meta35421;
});})(___$1))
;
cljs.core.async.t35420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35422,meta35421__$1){var self__ = this;
var _35422__$1 = this;return (new cljs.core.async.t35420(self__.fn1,self__._,self__.meta35418,self__.ch,self__.f,self__.map_LT_,meta35421__$1));
});})(___$1))
;
cljs.core.async.__GT_t35420 = ((function (___$1){
return (function __GT_t35420(fn1__$1,___$2,meta35418__$1,ch__$2,f__$2,map_LT___$2,meta35421){return (new cljs.core.async.t35420(fn1__$1,___$2,meta35418__$1,ch__$2,f__$2,map_LT___$2,meta35421));
});})(___$1))
;
}
return (new cljs.core.async.t35420(fn1,___$1,self__.meta35418,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t35417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35419){var self__ = this;
var _35419__$1 = this;return self__.meta35418;
});
cljs.core.async.t35417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35419,meta35418__$1){var self__ = this;
var _35419__$1 = this;return (new cljs.core.async.t35417(self__.ch,self__.f,self__.map_LT_,meta35418__$1));
});
cljs.core.async.__GT_t35417 = (function __GT_t35417(ch__$1,f__$1,map_LT___$1,meta35418){return (new cljs.core.async.t35417(ch__$1,f__$1,map_LT___$1,meta35418));
});
}
return (new cljs.core.async.t35417(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35426 = (function (ch,f,map_GT_,meta35427){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35427 = meta35427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35426.cljs$lang$type = true;
cljs.core.async.t35426.cljs$lang$ctorStr = "cljs.core.async/t35426";
cljs.core.async.t35426.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t35426");
});
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35428){var self__ = this;
var _35428__$1 = this;return self__.meta35427;
});
cljs.core.async.t35426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35428,meta35427__$1){var self__ = this;
var _35428__$1 = this;return (new cljs.core.async.t35426(self__.ch,self__.f,self__.map_GT_,meta35427__$1));
});
cljs.core.async.__GT_t35426 = (function __GT_t35426(ch__$1,f__$1,map_GT___$1,meta35427){return (new cljs.core.async.t35426(ch__$1,f__$1,map_GT___$1,meta35427));
});
}
return (new cljs.core.async.t35426(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t35432 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35432 = (function (ch,p,filter_GT_,meta35433){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35433 = meta35433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35432.cljs$lang$type = true;
cljs.core.async.t35432.cljs$lang$ctorStr = "cljs.core.async/t35432";
cljs.core.async.t35432.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t35432");
});
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t35432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35434){var self__ = this;
var _35434__$1 = this;return self__.meta35433;
});
cljs.core.async.t35432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35434,meta35433__$1){var self__ = this;
var _35434__$1 = this;return (new cljs.core.async.t35432(self__.ch,self__.p,self__.filter_GT_,meta35433__$1));
});
cljs.core.async.__GT_t35432 = (function __GT_t35432(ch__$1,p__$1,filter_GT___$1,meta35433){return (new cljs.core.async.t35432(ch__$1,p__$1,filter_GT___$1,meta35433));
});
}
return (new cljs.core.async.t35432(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___35517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35517,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35517,out){
return (function (state_35496){var state_val_35497 = (state_35496[(1)]);if((state_val_35497 === (7)))
{var inst_35492 = (state_35496[(2)]);var state_35496__$1 = state_35496;var statearr_35498_35518 = state_35496__$1;(statearr_35498_35518[(2)] = inst_35492);
(statearr_35498_35518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (1)))
{var state_35496__$1 = state_35496;var statearr_35499_35519 = state_35496__$1;(statearr_35499_35519[(2)] = null);
(statearr_35499_35519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (4)))
{var inst_35478 = (state_35496[(7)]);var inst_35478__$1 = (state_35496[(2)]);var inst_35479 = (inst_35478__$1 == null);var state_35496__$1 = (function (){var statearr_35500 = state_35496;(statearr_35500[(7)] = inst_35478__$1);
return statearr_35500;
})();if(cljs.core.truth_(inst_35479))
{var statearr_35501_35520 = state_35496__$1;(statearr_35501_35520[(1)] = (5));
} else
{var statearr_35502_35521 = state_35496__$1;(statearr_35502_35521[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (6)))
{var inst_35478 = (state_35496[(7)]);var inst_35483 = p.call(null,inst_35478);var state_35496__$1 = state_35496;if(cljs.core.truth_(inst_35483))
{var statearr_35503_35522 = state_35496__$1;(statearr_35503_35522[(1)] = (8));
} else
{var statearr_35504_35523 = state_35496__$1;(statearr_35504_35523[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (3)))
{var inst_35494 = (state_35496[(2)]);var state_35496__$1 = state_35496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35496__$1,inst_35494);
} else
{if((state_val_35497 === (2)))
{var state_35496__$1 = state_35496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35496__$1,(4),ch);
} else
{if((state_val_35497 === (11)))
{var inst_35486 = (state_35496[(2)]);var state_35496__$1 = state_35496;var statearr_35505_35524 = state_35496__$1;(statearr_35505_35524[(2)] = inst_35486);
(statearr_35505_35524[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (9)))
{var state_35496__$1 = state_35496;var statearr_35506_35525 = state_35496__$1;(statearr_35506_35525[(2)] = null);
(statearr_35506_35525[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (5)))
{var inst_35481 = cljs.core.async.close_BANG_.call(null,out);var state_35496__$1 = state_35496;var statearr_35507_35526 = state_35496__$1;(statearr_35507_35526[(2)] = inst_35481);
(statearr_35507_35526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (10)))
{var inst_35489 = (state_35496[(2)]);var state_35496__$1 = (function (){var statearr_35508 = state_35496;(statearr_35508[(8)] = inst_35489);
return statearr_35508;
})();var statearr_35509_35527 = state_35496__$1;(statearr_35509_35527[(2)] = null);
(statearr_35509_35527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35497 === (8)))
{var inst_35478 = (state_35496[(7)]);var state_35496__$1 = state_35496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35496__$1,(11),out,inst_35478);
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
});})(c__15989__auto___35517,out))
;return ((function (switch__15974__auto__,c__15989__auto___35517,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_35513 = [null,null,null,null,null,null,null,null,null];(statearr_35513[(0)] = state_machine__15975__auto__);
(statearr_35513[(1)] = (1));
return statearr_35513;
});
var state_machine__15975__auto____1 = (function (state_35496){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35496);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35514){if((e35514 instanceof Object))
{var ex__15978__auto__ = e35514;var statearr_35515_35528 = state_35496;(statearr_35515_35528[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35529 = state_35496;
state_35496 = G__35529;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35496){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35517,out))
})();var state__15991__auto__ = (function (){var statearr_35516 = f__15990__auto__.call(null);(statearr_35516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35517);
return statearr_35516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35517,out))
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
return (function (state_35695){var state_val_35696 = (state_35695[(1)]);if((state_val_35696 === (7)))
{var inst_35691 = (state_35695[(2)]);var state_35695__$1 = state_35695;var statearr_35697_35738 = state_35695__$1;(statearr_35697_35738[(2)] = inst_35691);
(statearr_35697_35738[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (20)))
{var inst_35661 = (state_35695[(7)]);var inst_35672 = (state_35695[(2)]);var inst_35673 = cljs.core.next.call(null,inst_35661);var inst_35647 = inst_35673;var inst_35648 = null;var inst_35649 = (0);var inst_35650 = (0);var state_35695__$1 = (function (){var statearr_35698 = state_35695;(statearr_35698[(8)] = inst_35650);
(statearr_35698[(9)] = inst_35649);
(statearr_35698[(10)] = inst_35647);
(statearr_35698[(11)] = inst_35672);
(statearr_35698[(12)] = inst_35648);
return statearr_35698;
})();var statearr_35699_35739 = state_35695__$1;(statearr_35699_35739[(2)] = null);
(statearr_35699_35739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (1)))
{var state_35695__$1 = state_35695;var statearr_35700_35740 = state_35695__$1;(statearr_35700_35740[(2)] = null);
(statearr_35700_35740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (4)))
{var inst_35636 = (state_35695[(13)]);var inst_35636__$1 = (state_35695[(2)]);var inst_35637 = (inst_35636__$1 == null);var state_35695__$1 = (function (){var statearr_35701 = state_35695;(statearr_35701[(13)] = inst_35636__$1);
return statearr_35701;
})();if(cljs.core.truth_(inst_35637))
{var statearr_35702_35741 = state_35695__$1;(statearr_35702_35741[(1)] = (5));
} else
{var statearr_35703_35742 = state_35695__$1;(statearr_35703_35742[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (15)))
{var state_35695__$1 = state_35695;var statearr_35707_35743 = state_35695__$1;(statearr_35707_35743[(2)] = null);
(statearr_35707_35743[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (21)))
{var state_35695__$1 = state_35695;var statearr_35708_35744 = state_35695__$1;(statearr_35708_35744[(2)] = null);
(statearr_35708_35744[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (13)))
{var inst_35650 = (state_35695[(8)]);var inst_35649 = (state_35695[(9)]);var inst_35647 = (state_35695[(10)]);var inst_35648 = (state_35695[(12)]);var inst_35657 = (state_35695[(2)]);var inst_35658 = (inst_35650 + (1));var tmp35704 = inst_35649;var tmp35705 = inst_35647;var tmp35706 = inst_35648;var inst_35647__$1 = tmp35705;var inst_35648__$1 = tmp35706;var inst_35649__$1 = tmp35704;var inst_35650__$1 = inst_35658;var state_35695__$1 = (function (){var statearr_35709 = state_35695;(statearr_35709[(8)] = inst_35650__$1);
(statearr_35709[(14)] = inst_35657);
(statearr_35709[(9)] = inst_35649__$1);
(statearr_35709[(10)] = inst_35647__$1);
(statearr_35709[(12)] = inst_35648__$1);
return statearr_35709;
})();var statearr_35710_35745 = state_35695__$1;(statearr_35710_35745[(2)] = null);
(statearr_35710_35745[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (22)))
{var state_35695__$1 = state_35695;var statearr_35711_35746 = state_35695__$1;(statearr_35711_35746[(2)] = null);
(statearr_35711_35746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (6)))
{var inst_35636 = (state_35695[(13)]);var inst_35645 = f.call(null,inst_35636);var inst_35646 = cljs.core.seq.call(null,inst_35645);var inst_35647 = inst_35646;var inst_35648 = null;var inst_35649 = (0);var inst_35650 = (0);var state_35695__$1 = (function (){var statearr_35712 = state_35695;(statearr_35712[(8)] = inst_35650);
(statearr_35712[(9)] = inst_35649);
(statearr_35712[(10)] = inst_35647);
(statearr_35712[(12)] = inst_35648);
return statearr_35712;
})();var statearr_35713_35747 = state_35695__$1;(statearr_35713_35747[(2)] = null);
(statearr_35713_35747[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (17)))
{var inst_35661 = (state_35695[(7)]);var inst_35665 = cljs.core.chunk_first.call(null,inst_35661);var inst_35666 = cljs.core.chunk_rest.call(null,inst_35661);var inst_35667 = cljs.core.count.call(null,inst_35665);var inst_35647 = inst_35666;var inst_35648 = inst_35665;var inst_35649 = inst_35667;var inst_35650 = (0);var state_35695__$1 = (function (){var statearr_35714 = state_35695;(statearr_35714[(8)] = inst_35650);
(statearr_35714[(9)] = inst_35649);
(statearr_35714[(10)] = inst_35647);
(statearr_35714[(12)] = inst_35648);
return statearr_35714;
})();var statearr_35715_35748 = state_35695__$1;(statearr_35715_35748[(2)] = null);
(statearr_35715_35748[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (3)))
{var inst_35693 = (state_35695[(2)]);var state_35695__$1 = state_35695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35695__$1,inst_35693);
} else
{if((state_val_35696 === (12)))
{var inst_35681 = (state_35695[(2)]);var state_35695__$1 = state_35695;var statearr_35716_35749 = state_35695__$1;(statearr_35716_35749[(2)] = inst_35681);
(statearr_35716_35749[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (2)))
{var state_35695__$1 = state_35695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35695__$1,(4),in$);
} else
{if((state_val_35696 === (23)))
{var inst_35689 = (state_35695[(2)]);var state_35695__$1 = state_35695;var statearr_35717_35750 = state_35695__$1;(statearr_35717_35750[(2)] = inst_35689);
(statearr_35717_35750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (19)))
{var inst_35676 = (state_35695[(2)]);var state_35695__$1 = state_35695;var statearr_35718_35751 = state_35695__$1;(statearr_35718_35751[(2)] = inst_35676);
(statearr_35718_35751[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (11)))
{var inst_35647 = (state_35695[(10)]);var inst_35661 = (state_35695[(7)]);var inst_35661__$1 = cljs.core.seq.call(null,inst_35647);var state_35695__$1 = (function (){var statearr_35719 = state_35695;(statearr_35719[(7)] = inst_35661__$1);
return statearr_35719;
})();if(inst_35661__$1)
{var statearr_35720_35752 = state_35695__$1;(statearr_35720_35752[(1)] = (14));
} else
{var statearr_35721_35753 = state_35695__$1;(statearr_35721_35753[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (9)))
{var inst_35683 = (state_35695[(2)]);var inst_35684 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_35695__$1 = (function (){var statearr_35722 = state_35695;(statearr_35722[(15)] = inst_35683);
return statearr_35722;
})();if(cljs.core.truth_(inst_35684))
{var statearr_35723_35754 = state_35695__$1;(statearr_35723_35754[(1)] = (21));
} else
{var statearr_35724_35755 = state_35695__$1;(statearr_35724_35755[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (5)))
{var inst_35639 = cljs.core.async.close_BANG_.call(null,out);var state_35695__$1 = state_35695;var statearr_35725_35756 = state_35695__$1;(statearr_35725_35756[(2)] = inst_35639);
(statearr_35725_35756[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (14)))
{var inst_35661 = (state_35695[(7)]);var inst_35663 = cljs.core.chunked_seq_QMARK_.call(null,inst_35661);var state_35695__$1 = state_35695;if(inst_35663)
{var statearr_35726_35757 = state_35695__$1;(statearr_35726_35757[(1)] = (17));
} else
{var statearr_35727_35758 = state_35695__$1;(statearr_35727_35758[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (16)))
{var inst_35679 = (state_35695[(2)]);var state_35695__$1 = state_35695;var statearr_35728_35759 = state_35695__$1;(statearr_35728_35759[(2)] = inst_35679);
(statearr_35728_35759[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35696 === (10)))
{var inst_35650 = (state_35695[(8)]);var inst_35648 = (state_35695[(12)]);var inst_35655 = cljs.core._nth.call(null,inst_35648,inst_35650);var state_35695__$1 = state_35695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35695__$1,(13),out,inst_35655);
} else
{if((state_val_35696 === (18)))
{var inst_35661 = (state_35695[(7)]);var inst_35670 = cljs.core.first.call(null,inst_35661);var state_35695__$1 = state_35695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35695__$1,(20),out,inst_35670);
} else
{if((state_val_35696 === (8)))
{var inst_35650 = (state_35695[(8)]);var inst_35649 = (state_35695[(9)]);var inst_35652 = (inst_35650 < inst_35649);var inst_35653 = inst_35652;var state_35695__$1 = state_35695;if(cljs.core.truth_(inst_35653))
{var statearr_35729_35760 = state_35695__$1;(statearr_35729_35760[(1)] = (10));
} else
{var statearr_35730_35761 = state_35695__$1;(statearr_35730_35761[(1)] = (11));
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
var state_machine__15975__auto____0 = (function (){var statearr_35734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35734[(0)] = state_machine__15975__auto__);
(statearr_35734[(1)] = (1));
return statearr_35734;
});
var state_machine__15975__auto____1 = (function (state_35695){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35695);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35735){if((e35735 instanceof Object))
{var ex__15978__auto__ = e35735;var statearr_35736_35762 = state_35695;(statearr_35736_35762[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35763 = state_35695;
state_35695 = G__35763;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35695){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_35737 = f__15990__auto__.call(null);(statearr_35737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_35737;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___35860 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___35860,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___35860,out){
return (function (state_35835){var state_val_35836 = (state_35835[(1)]);if((state_val_35836 === (7)))
{var inst_35830 = (state_35835[(2)]);var state_35835__$1 = state_35835;var statearr_35837_35861 = state_35835__$1;(statearr_35837_35861[(2)] = inst_35830);
(statearr_35837_35861[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (1)))
{var inst_35812 = null;var state_35835__$1 = (function (){var statearr_35838 = state_35835;(statearr_35838[(7)] = inst_35812);
return statearr_35838;
})();var statearr_35839_35862 = state_35835__$1;(statearr_35839_35862[(2)] = null);
(statearr_35839_35862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (4)))
{var inst_35815 = (state_35835[(8)]);var inst_35815__$1 = (state_35835[(2)]);var inst_35816 = (inst_35815__$1 == null);var inst_35817 = cljs.core.not.call(null,inst_35816);var state_35835__$1 = (function (){var statearr_35840 = state_35835;(statearr_35840[(8)] = inst_35815__$1);
return statearr_35840;
})();if(inst_35817)
{var statearr_35841_35863 = state_35835__$1;(statearr_35841_35863[(1)] = (5));
} else
{var statearr_35842_35864 = state_35835__$1;(statearr_35842_35864[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (6)))
{var state_35835__$1 = state_35835;var statearr_35843_35865 = state_35835__$1;(statearr_35843_35865[(2)] = null);
(statearr_35843_35865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (3)))
{var inst_35832 = (state_35835[(2)]);var inst_35833 = cljs.core.async.close_BANG_.call(null,out);var state_35835__$1 = (function (){var statearr_35844 = state_35835;(statearr_35844[(9)] = inst_35832);
return statearr_35844;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35835__$1,inst_35833);
} else
{if((state_val_35836 === (2)))
{var state_35835__$1 = state_35835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35835__$1,(4),ch);
} else
{if((state_val_35836 === (11)))
{var inst_35815 = (state_35835[(8)]);var inst_35824 = (state_35835[(2)]);var inst_35812 = inst_35815;var state_35835__$1 = (function (){var statearr_35845 = state_35835;(statearr_35845[(7)] = inst_35812);
(statearr_35845[(10)] = inst_35824);
return statearr_35845;
})();var statearr_35846_35866 = state_35835__$1;(statearr_35846_35866[(2)] = null);
(statearr_35846_35866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (9)))
{var inst_35815 = (state_35835[(8)]);var state_35835__$1 = state_35835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35835__$1,(11),out,inst_35815);
} else
{if((state_val_35836 === (5)))
{var inst_35815 = (state_35835[(8)]);var inst_35812 = (state_35835[(7)]);var inst_35819 = cljs.core._EQ_.call(null,inst_35815,inst_35812);var state_35835__$1 = state_35835;if(inst_35819)
{var statearr_35848_35867 = state_35835__$1;(statearr_35848_35867[(1)] = (8));
} else
{var statearr_35849_35868 = state_35835__$1;(statearr_35849_35868[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (10)))
{var inst_35827 = (state_35835[(2)]);var state_35835__$1 = state_35835;var statearr_35850_35869 = state_35835__$1;(statearr_35850_35869[(2)] = inst_35827);
(statearr_35850_35869[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35836 === (8)))
{var inst_35812 = (state_35835[(7)]);var tmp35847 = inst_35812;var inst_35812__$1 = tmp35847;var state_35835__$1 = (function (){var statearr_35851 = state_35835;(statearr_35851[(7)] = inst_35812__$1);
return statearr_35851;
})();var statearr_35852_35870 = state_35835__$1;(statearr_35852_35870[(2)] = null);
(statearr_35852_35870[(1)] = (2));
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
});})(c__15989__auto___35860,out))
;return ((function (switch__15974__auto__,c__15989__auto___35860,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_35856 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35856[(0)] = state_machine__15975__auto__);
(statearr_35856[(1)] = (1));
return statearr_35856;
});
var state_machine__15975__auto____1 = (function (state_35835){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35835);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e35857){if((e35857 instanceof Object))
{var ex__15978__auto__ = e35857;var statearr_35858_35871 = state_35835;(statearr_35858_35871[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35857;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35872 = state_35835;
state_35835 = G__35872;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35835){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___35860,out))
})();var state__15991__auto__ = (function (){var statearr_35859 = f__15990__auto__.call(null);(statearr_35859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___35860);
return statearr_35859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___35860,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___36007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___36007,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___36007,out){
return (function (state_35977){var state_val_35978 = (state_35977[(1)]);if((state_val_35978 === (7)))
{var inst_35973 = (state_35977[(2)]);var state_35977__$1 = state_35977;var statearr_35979_36008 = state_35977__$1;(statearr_35979_36008[(2)] = inst_35973);
(statearr_35979_36008[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (1)))
{var inst_35940 = (new Array(n));var inst_35941 = inst_35940;var inst_35942 = (0);var state_35977__$1 = (function (){var statearr_35980 = state_35977;(statearr_35980[(7)] = inst_35942);
(statearr_35980[(8)] = inst_35941);
return statearr_35980;
})();var statearr_35981_36009 = state_35977__$1;(statearr_35981_36009[(2)] = null);
(statearr_35981_36009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (4)))
{var inst_35945 = (state_35977[(9)]);var inst_35945__$1 = (state_35977[(2)]);var inst_35946 = (inst_35945__$1 == null);var inst_35947 = cljs.core.not.call(null,inst_35946);var state_35977__$1 = (function (){var statearr_35982 = state_35977;(statearr_35982[(9)] = inst_35945__$1);
return statearr_35982;
})();if(inst_35947)
{var statearr_35983_36010 = state_35977__$1;(statearr_35983_36010[(1)] = (5));
} else
{var statearr_35984_36011 = state_35977__$1;(statearr_35984_36011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (15)))
{var inst_35967 = (state_35977[(2)]);var state_35977__$1 = state_35977;var statearr_35985_36012 = state_35977__$1;(statearr_35985_36012[(2)] = inst_35967);
(statearr_35985_36012[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (13)))
{var state_35977__$1 = state_35977;var statearr_35986_36013 = state_35977__$1;(statearr_35986_36013[(2)] = null);
(statearr_35986_36013[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (6)))
{var inst_35942 = (state_35977[(7)]);var inst_35963 = (inst_35942 > (0));var state_35977__$1 = state_35977;if(cljs.core.truth_(inst_35963))
{var statearr_35987_36014 = state_35977__$1;(statearr_35987_36014[(1)] = (12));
} else
{var statearr_35988_36015 = state_35977__$1;(statearr_35988_36015[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (3)))
{var inst_35975 = (state_35977[(2)]);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35977__$1,inst_35975);
} else
{if((state_val_35978 === (12)))
{var inst_35941 = (state_35977[(8)]);var inst_35965 = cljs.core.vec.call(null,inst_35941);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35977__$1,(15),out,inst_35965);
} else
{if((state_val_35978 === (2)))
{var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35977__$1,(4),ch);
} else
{if((state_val_35978 === (11)))
{var inst_35957 = (state_35977[(2)]);var inst_35958 = (new Array(n));var inst_35941 = inst_35958;var inst_35942 = (0);var state_35977__$1 = (function (){var statearr_35989 = state_35977;(statearr_35989[(7)] = inst_35942);
(statearr_35989[(8)] = inst_35941);
(statearr_35989[(10)] = inst_35957);
return statearr_35989;
})();var statearr_35990_36016 = state_35977__$1;(statearr_35990_36016[(2)] = null);
(statearr_35990_36016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (9)))
{var inst_35941 = (state_35977[(8)]);var inst_35955 = cljs.core.vec.call(null,inst_35941);var state_35977__$1 = state_35977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35977__$1,(11),out,inst_35955);
} else
{if((state_val_35978 === (5)))
{var inst_35942 = (state_35977[(7)]);var inst_35941 = (state_35977[(8)]);var inst_35945 = (state_35977[(9)]);var inst_35950 = (state_35977[(11)]);var inst_35949 = (inst_35941[inst_35942] = inst_35945);var inst_35950__$1 = (inst_35942 + (1));var inst_35951 = (inst_35950__$1 < n);var state_35977__$1 = (function (){var statearr_35991 = state_35977;(statearr_35991[(12)] = inst_35949);
(statearr_35991[(11)] = inst_35950__$1);
return statearr_35991;
})();if(cljs.core.truth_(inst_35951))
{var statearr_35992_36017 = state_35977__$1;(statearr_35992_36017[(1)] = (8));
} else
{var statearr_35993_36018 = state_35977__$1;(statearr_35993_36018[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (14)))
{var inst_35970 = (state_35977[(2)]);var inst_35971 = cljs.core.async.close_BANG_.call(null,out);var state_35977__$1 = (function (){var statearr_35995 = state_35977;(statearr_35995[(13)] = inst_35970);
return statearr_35995;
})();var statearr_35996_36019 = state_35977__$1;(statearr_35996_36019[(2)] = inst_35971);
(statearr_35996_36019[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (10)))
{var inst_35961 = (state_35977[(2)]);var state_35977__$1 = state_35977;var statearr_35997_36020 = state_35977__$1;(statearr_35997_36020[(2)] = inst_35961);
(statearr_35997_36020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35978 === (8)))
{var inst_35941 = (state_35977[(8)]);var inst_35950 = (state_35977[(11)]);var tmp35994 = inst_35941;var inst_35941__$1 = tmp35994;var inst_35942 = inst_35950;var state_35977__$1 = (function (){var statearr_35998 = state_35977;(statearr_35998[(7)] = inst_35942);
(statearr_35998[(8)] = inst_35941__$1);
return statearr_35998;
})();var statearr_35999_36021 = state_35977__$1;(statearr_35999_36021[(2)] = null);
(statearr_35999_36021[(1)] = (2));
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
});})(c__15989__auto___36007,out))
;return ((function (switch__15974__auto__,c__15989__auto___36007,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_36003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36003[(0)] = state_machine__15975__auto__);
(statearr_36003[(1)] = (1));
return statearr_36003;
});
var state_machine__15975__auto____1 = (function (state_35977){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_35977);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e36004){if((e36004 instanceof Object))
{var ex__15978__auto__ = e36004;var statearr_36005_36022 = state_35977;(statearr_36005_36022[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36023 = state_35977;
state_35977 = G__36023;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_35977){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_35977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___36007,out))
})();var state__15991__auto__ = (function (){var statearr_36006 = f__15990__auto__.call(null);(statearr_36006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___36007);
return statearr_36006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___36007,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___36166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___36166,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___36166,out){
return (function (state_36136){var state_val_36137 = (state_36136[(1)]);if((state_val_36137 === (7)))
{var inst_36132 = (state_36136[(2)]);var state_36136__$1 = state_36136;var statearr_36138_36167 = state_36136__$1;(statearr_36138_36167[(2)] = inst_36132);
(statearr_36138_36167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (1)))
{var inst_36095 = [];var inst_36096 = inst_36095;var inst_36097 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_36136__$1 = (function (){var statearr_36139 = state_36136;(statearr_36139[(7)] = inst_36097);
(statearr_36139[(8)] = inst_36096);
return statearr_36139;
})();var statearr_36140_36168 = state_36136__$1;(statearr_36140_36168[(2)] = null);
(statearr_36140_36168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (4)))
{var inst_36100 = (state_36136[(9)]);var inst_36100__$1 = (state_36136[(2)]);var inst_36101 = (inst_36100__$1 == null);var inst_36102 = cljs.core.not.call(null,inst_36101);var state_36136__$1 = (function (){var statearr_36141 = state_36136;(statearr_36141[(9)] = inst_36100__$1);
return statearr_36141;
})();if(inst_36102)
{var statearr_36142_36169 = state_36136__$1;(statearr_36142_36169[(1)] = (5));
} else
{var statearr_36143_36170 = state_36136__$1;(statearr_36143_36170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (15)))
{var inst_36126 = (state_36136[(2)]);var state_36136__$1 = state_36136;var statearr_36144_36171 = state_36136__$1;(statearr_36144_36171[(2)] = inst_36126);
(statearr_36144_36171[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (13)))
{var state_36136__$1 = state_36136;var statearr_36145_36172 = state_36136__$1;(statearr_36145_36172[(2)] = null);
(statearr_36145_36172[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (6)))
{var inst_36096 = (state_36136[(8)]);var inst_36121 = inst_36096.length;var inst_36122 = (inst_36121 > (0));var state_36136__$1 = state_36136;if(cljs.core.truth_(inst_36122))
{var statearr_36146_36173 = state_36136__$1;(statearr_36146_36173[(1)] = (12));
} else
{var statearr_36147_36174 = state_36136__$1;(statearr_36147_36174[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (3)))
{var inst_36134 = (state_36136[(2)]);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36136__$1,inst_36134);
} else
{if((state_val_36137 === (12)))
{var inst_36096 = (state_36136[(8)]);var inst_36124 = cljs.core.vec.call(null,inst_36096);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36136__$1,(15),out,inst_36124);
} else
{if((state_val_36137 === (2)))
{var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36136__$1,(4),ch);
} else
{if((state_val_36137 === (11)))
{var inst_36100 = (state_36136[(9)]);var inst_36104 = (state_36136[(10)]);var inst_36114 = (state_36136[(2)]);var inst_36115 = [];var inst_36116 = inst_36115.push(inst_36100);var inst_36096 = inst_36115;var inst_36097 = inst_36104;var state_36136__$1 = (function (){var statearr_36148 = state_36136;(statearr_36148[(11)] = inst_36114);
(statearr_36148[(7)] = inst_36097);
(statearr_36148[(8)] = inst_36096);
(statearr_36148[(12)] = inst_36116);
return statearr_36148;
})();var statearr_36149_36175 = state_36136__$1;(statearr_36149_36175[(2)] = null);
(statearr_36149_36175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (9)))
{var inst_36096 = (state_36136[(8)]);var inst_36112 = cljs.core.vec.call(null,inst_36096);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36136__$1,(11),out,inst_36112);
} else
{if((state_val_36137 === (5)))
{var inst_36097 = (state_36136[(7)]);var inst_36100 = (state_36136[(9)]);var inst_36104 = (state_36136[(10)]);var inst_36104__$1 = f.call(null,inst_36100);var inst_36105 = cljs.core._EQ_.call(null,inst_36104__$1,inst_36097);var inst_36106 = cljs.core.keyword_identical_QMARK_.call(null,inst_36097,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_36107 = (inst_36105) || (inst_36106);var state_36136__$1 = (function (){var statearr_36150 = state_36136;(statearr_36150[(10)] = inst_36104__$1);
return statearr_36150;
})();if(cljs.core.truth_(inst_36107))
{var statearr_36151_36176 = state_36136__$1;(statearr_36151_36176[(1)] = (8));
} else
{var statearr_36152_36177 = state_36136__$1;(statearr_36152_36177[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (14)))
{var inst_36129 = (state_36136[(2)]);var inst_36130 = cljs.core.async.close_BANG_.call(null,out);var state_36136__$1 = (function (){var statearr_36154 = state_36136;(statearr_36154[(13)] = inst_36129);
return statearr_36154;
})();var statearr_36155_36178 = state_36136__$1;(statearr_36155_36178[(2)] = inst_36130);
(statearr_36155_36178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (10)))
{var inst_36119 = (state_36136[(2)]);var state_36136__$1 = state_36136;var statearr_36156_36179 = state_36136__$1;(statearr_36156_36179[(2)] = inst_36119);
(statearr_36156_36179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36137 === (8)))
{var inst_36100 = (state_36136[(9)]);var inst_36096 = (state_36136[(8)]);var inst_36104 = (state_36136[(10)]);var inst_36109 = inst_36096.push(inst_36100);var tmp36153 = inst_36096;var inst_36096__$1 = tmp36153;var inst_36097 = inst_36104;var state_36136__$1 = (function (){var statearr_36157 = state_36136;(statearr_36157[(14)] = inst_36109);
(statearr_36157[(7)] = inst_36097);
(statearr_36157[(8)] = inst_36096__$1);
return statearr_36157;
})();var statearr_36158_36180 = state_36136__$1;(statearr_36158_36180[(2)] = null);
(statearr_36158_36180[(1)] = (2));
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
});})(c__15989__auto___36166,out))
;return ((function (switch__15974__auto__,c__15989__auto___36166,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_36162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36162[(0)] = state_machine__15975__auto__);
(statearr_36162[(1)] = (1));
return statearr_36162;
});
var state_machine__15975__auto____1 = (function (state_36136){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_36136);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e36163){if((e36163 instanceof Object))
{var ex__15978__auto__ = e36163;var statearr_36164_36181 = state_36136;(statearr_36164_36181[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36182 = state_36136;
state_36136 = G__36182;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_36136){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_36136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___36166,out))
})();var state__15991__auto__ = (function (){var statearr_36165 = f__15990__auto__.call(null);(statearr_36165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___36166);
return statearr_36165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___36166,out))
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