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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19393 = (function (f,fn_handler,meta19394){
this.f = f;
this.fn_handler = fn_handler;
this.meta19394 = meta19394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19393.cljs$lang$type = true;
cljs.core.async.t19393.cljs$lang$ctorStr = "cljs.core.async/t19393";
cljs.core.async.t19393.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t19393");
});
cljs.core.async.t19393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19395){var self__ = this;
var _19395__$1 = this;return self__.meta19394;
});
cljs.core.async.t19393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19395,meta19394__$1){var self__ = this;
var _19395__$1 = this;return (new cljs.core.async.t19393(self__.f,self__.fn_handler,meta19394__$1));
});
cljs.core.async.__GT_t19393 = (function __GT_t19393(f__$1,fn_handler__$1,meta19394){return (new cljs.core.async.t19393(f__$1,fn_handler__$1,meta19394));
});
}
return (new cljs.core.async.t19393(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19397 = buff;if(G__19397)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__19397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19397);
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
{var val_19398 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19398);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19398,ret){
return (function (){return fn1.call(null,val_19398);
});})(val_19398,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___19399 = n;var x_19400 = (0);while(true){
if((x_19400 < n__13416__auto___19399))
{(a[x_19400] = (0));
{
var G__19401 = (x_19400 + (1));
x_19400 = G__19401;
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
var G__19402 = (i + (1));
i = G__19402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19406 = (function (flag,alt_flag,meta19407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19407 = meta19407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19406.cljs$lang$type = true;
cljs.core.async.t19406.cljs$lang$ctorStr = "cljs.core.async/t19406";
cljs.core.async.t19406.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t19406");
});})(flag))
;
cljs.core.async.t19406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19408){var self__ = this;
var _19408__$1 = this;return self__.meta19407;
});})(flag))
;
cljs.core.async.t19406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19408,meta19407__$1){var self__ = this;
var _19408__$1 = this;return (new cljs.core.async.t19406(self__.flag,self__.alt_flag,meta19407__$1));
});})(flag))
;
cljs.core.async.__GT_t19406 = ((function (flag){
return (function __GT_t19406(flag__$1,alt_flag__$1,meta19407){return (new cljs.core.async.t19406(flag__$1,alt_flag__$1,meta19407));
});})(flag))
;
}
return (new cljs.core.async.t19406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19412 = (function (cb,flag,alt_handler,meta19413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19413 = meta19413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19412.cljs$lang$type = true;
cljs.core.async.t19412.cljs$lang$ctorStr = "cljs.core.async/t19412";
cljs.core.async.t19412.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t19412");
});
cljs.core.async.t19412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19414){var self__ = this;
var _19414__$1 = this;return self__.meta19413;
});
cljs.core.async.t19412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19414,meta19413__$1){var self__ = this;
var _19414__$1 = this;return (new cljs.core.async.t19412(self__.cb,self__.flag,self__.alt_handler,meta19413__$1));
});
cljs.core.async.__GT_t19412 = (function __GT_t19412(cb__$1,flag__$1,alt_handler__$1,meta19413){return (new cljs.core.async.t19412(cb__$1,flag__$1,alt_handler__$1,meta19413));
});
}
return (new cljs.core.async.t19412(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19415_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19416_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19416_SHARP_,port], null));
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
var G__19417 = (i + (1));
i = G__19417;
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
var alts_BANG___delegate = function (ports,p__19418){var map__19420 = p__19418;var map__19420__$1 = ((cljs.core.seq_QMARK_.call(null,map__19420))?cljs.core.apply.call(null,cljs.core.hash_map,map__19420):map__19420);var opts = map__19420__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19418 = null;if (arguments.length > 1) {
  p__19418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19418);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19421){
var ports = cljs.core.first(arglist__19421);
var p__19418 = cljs.core.rest(arglist__19421);
return alts_BANG___delegate(ports,p__19418);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___19516 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___19516){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___19516){
return (function (state_19492){var state_val_19493 = (state_19492[(1)]);if((state_val_19493 === (7)))
{var inst_19488 = (state_19492[(2)]);var state_19492__$1 = state_19492;var statearr_19494_19517 = state_19492__$1;(statearr_19494_19517[(2)] = inst_19488);
(statearr_19494_19517[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (1)))
{var state_19492__$1 = state_19492;var statearr_19495_19518 = state_19492__$1;(statearr_19495_19518[(2)] = null);
(statearr_19495_19518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (4)))
{var inst_19471 = (state_19492[(7)]);var inst_19471__$1 = (state_19492[(2)]);var inst_19472 = (inst_19471__$1 == null);var state_19492__$1 = (function (){var statearr_19496 = state_19492;(statearr_19496[(7)] = inst_19471__$1);
return statearr_19496;
})();if(cljs.core.truth_(inst_19472))
{var statearr_19497_19519 = state_19492__$1;(statearr_19497_19519[(1)] = (5));
} else
{var statearr_19498_19520 = state_19492__$1;(statearr_19498_19520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (13)))
{var state_19492__$1 = state_19492;var statearr_19499_19521 = state_19492__$1;(statearr_19499_19521[(2)] = null);
(statearr_19499_19521[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (6)))
{var inst_19471 = (state_19492[(7)]);var state_19492__$1 = state_19492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19492__$1,(11),to,inst_19471);
} else
{if((state_val_19493 === (3)))
{var inst_19490 = (state_19492[(2)]);var state_19492__$1 = state_19492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19492__$1,inst_19490);
} else
{if((state_val_19493 === (12)))
{var state_19492__$1 = state_19492;var statearr_19500_19522 = state_19492__$1;(statearr_19500_19522[(2)] = null);
(statearr_19500_19522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (2)))
{var state_19492__$1 = state_19492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19492__$1,(4),from);
} else
{if((state_val_19493 === (11)))
{var inst_19481 = (state_19492[(2)]);var state_19492__$1 = state_19492;if(cljs.core.truth_(inst_19481))
{var statearr_19501_19523 = state_19492__$1;(statearr_19501_19523[(1)] = (12));
} else
{var statearr_19502_19524 = state_19492__$1;(statearr_19502_19524[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (9)))
{var state_19492__$1 = state_19492;var statearr_19503_19525 = state_19492__$1;(statearr_19503_19525[(2)] = null);
(statearr_19503_19525[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (5)))
{var state_19492__$1 = state_19492;if(cljs.core.truth_(close_QMARK_))
{var statearr_19504_19526 = state_19492__$1;(statearr_19504_19526[(1)] = (8));
} else
{var statearr_19505_19527 = state_19492__$1;(statearr_19505_19527[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (14)))
{var inst_19486 = (state_19492[(2)]);var state_19492__$1 = state_19492;var statearr_19506_19528 = state_19492__$1;(statearr_19506_19528[(2)] = inst_19486);
(statearr_19506_19528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (10)))
{var inst_19478 = (state_19492[(2)]);var state_19492__$1 = state_19492;var statearr_19507_19529 = state_19492__$1;(statearr_19507_19529[(2)] = inst_19478);
(statearr_19507_19529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19493 === (8)))
{var inst_19475 = cljs.core.async.close_BANG_.call(null,to);var state_19492__$1 = state_19492;var statearr_19508_19530 = state_19492__$1;(statearr_19508_19530[(2)] = inst_19475);
(statearr_19508_19530[(1)] = (10));
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
});})(c__15989__auto___19516))
;return ((function (switch__15974__auto__,c__15989__auto___19516){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_19512 = [null,null,null,null,null,null,null,null];(statearr_19512[(0)] = state_machine__15975__auto__);
(statearr_19512[(1)] = (1));
return statearr_19512;
});
var state_machine__15975__auto____1 = (function (state_19492){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19492);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19513){if((e19513 instanceof Object))
{var ex__15978__auto__ = e19513;var statearr_19514_19531 = state_19492;(statearr_19514_19531[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19513;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19532 = state_19492;
state_19492 = G__19532;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19492){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___19516))
})();var state__15991__auto__ = (function (){var statearr_19515 = f__15990__auto__.call(null);(statearr_19515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___19516);
return statearr_19515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___19516))
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
return (function (p__19716){var vec__19717 = p__19716;var v = cljs.core.nth.call(null,vec__19717,(0),null);var p = cljs.core.nth.call(null,vec__19717,(1),null);var job = vec__19717;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___19899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results){
return (function (state_19722){var state_val_19723 = (state_19722[(1)]);if((state_val_19723 === (2)))
{var inst_19719 = (state_19722[(2)]);var inst_19720 = cljs.core.async.close_BANG_.call(null,res);var state_19722__$1 = (function (){var statearr_19724 = state_19722;(statearr_19724[(7)] = inst_19719);
return statearr_19724;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19722__$1,inst_19720);
} else
{if((state_val_19723 === (1)))
{var state_19722__$1 = state_19722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19722__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_19728 = [null,null,null,null,null,null,null,null];(statearr_19728[(0)] = state_machine__15975__auto__);
(statearr_19728[(1)] = (1));
return statearr_19728;
});
var state_machine__15975__auto____1 = (function (state_19722){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19722);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19729){if((e19729 instanceof Object))
{var ex__15978__auto__ = e19729;var statearr_19730_19900 = state_19722;(statearr_19730_19900[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19901 = state_19722;
state_19722 = G__19901;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19722){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_19731 = f__15990__auto__.call(null);(statearr_19731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___19899);
return statearr_19731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___19899,res,vec__19717,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19732){var vec__19733 = p__19732;var v = cljs.core.nth.call(null,vec__19733,(0),null);var p = cljs.core.nth.call(null,vec__19733,(1),null);var job = vec__19733;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___19902 = n;var __19903 = (0);while(true){
if((__19903 < n__13416__auto___19902))
{var G__19734_19904 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19734_19904) {
case "async":
var c__15989__auto___19906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19903,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__19903,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function (state_19747){var state_val_19748 = (state_19747[(1)]);if((state_val_19748 === (7)))
{var inst_19743 = (state_19747[(2)]);var state_19747__$1 = state_19747;var statearr_19749_19907 = state_19747__$1;(statearr_19749_19907[(2)] = inst_19743);
(statearr_19749_19907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19748 === (6)))
{var state_19747__$1 = state_19747;var statearr_19750_19908 = state_19747__$1;(statearr_19750_19908[(2)] = null);
(statearr_19750_19908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19748 === (5)))
{var state_19747__$1 = state_19747;var statearr_19751_19909 = state_19747__$1;(statearr_19751_19909[(2)] = null);
(statearr_19751_19909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19748 === (4)))
{var inst_19737 = (state_19747[(2)]);var inst_19738 = async.call(null,inst_19737);var state_19747__$1 = state_19747;if(cljs.core.truth_(inst_19738))
{var statearr_19752_19910 = state_19747__$1;(statearr_19752_19910[(1)] = (5));
} else
{var statearr_19753_19911 = state_19747__$1;(statearr_19753_19911[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19748 === (3)))
{var inst_19745 = (state_19747[(2)]);var state_19747__$1 = state_19747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19747__$1,inst_19745);
} else
{if((state_val_19748 === (2)))
{var state_19747__$1 = state_19747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19747__$1,(4),jobs);
} else
{if((state_val_19748 === (1)))
{var state_19747__$1 = state_19747;var statearr_19754_19912 = state_19747__$1;(statearr_19754_19912[(2)] = null);
(statearr_19754_19912[(1)] = (2));
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
});})(__19903,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
;return ((function (__19903,switch__15974__auto__,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_19758 = [null,null,null,null,null,null,null];(statearr_19758[(0)] = state_machine__15975__auto__);
(statearr_19758[(1)] = (1));
return statearr_19758;
});
var state_machine__15975__auto____1 = (function (state_19747){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19747);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19759){if((e19759 instanceof Object))
{var ex__15978__auto__ = e19759;var statearr_19760_19913 = state_19747;(statearr_19760_19913[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19914 = state_19747;
state_19747 = G__19914;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19747){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__19903,switch__15974__auto__,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_19761 = f__15990__auto__.call(null);(statearr_19761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___19906);
return statearr_19761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__19903,c__15989__auto___19906,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___19915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19903,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__19903,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function (state_19774){var state_val_19775 = (state_19774[(1)]);if((state_val_19775 === (7)))
{var inst_19770 = (state_19774[(2)]);var state_19774__$1 = state_19774;var statearr_19776_19916 = state_19774__$1;(statearr_19776_19916[(2)] = inst_19770);
(statearr_19776_19916[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19775 === (6)))
{var state_19774__$1 = state_19774;var statearr_19777_19917 = state_19774__$1;(statearr_19777_19917[(2)] = null);
(statearr_19777_19917[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19775 === (5)))
{var state_19774__$1 = state_19774;var statearr_19778_19918 = state_19774__$1;(statearr_19778_19918[(2)] = null);
(statearr_19778_19918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19775 === (4)))
{var inst_19764 = (state_19774[(2)]);var inst_19765 = process.call(null,inst_19764);var state_19774__$1 = state_19774;if(cljs.core.truth_(inst_19765))
{var statearr_19779_19919 = state_19774__$1;(statearr_19779_19919[(1)] = (5));
} else
{var statearr_19780_19920 = state_19774__$1;(statearr_19780_19920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19775 === (3)))
{var inst_19772 = (state_19774[(2)]);var state_19774__$1 = state_19774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19774__$1,inst_19772);
} else
{if((state_val_19775 === (2)))
{var state_19774__$1 = state_19774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19774__$1,(4),jobs);
} else
{if((state_val_19775 === (1)))
{var state_19774__$1 = state_19774;var statearr_19781_19921 = state_19774__$1;(statearr_19781_19921[(2)] = null);
(statearr_19781_19921[(1)] = (2));
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
});})(__19903,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
;return ((function (__19903,switch__15974__auto__,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_19785 = [null,null,null,null,null,null,null];(statearr_19785[(0)] = state_machine__15975__auto__);
(statearr_19785[(1)] = (1));
return statearr_19785;
});
var state_machine__15975__auto____1 = (function (state_19774){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19774);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19786){if((e19786 instanceof Object))
{var ex__15978__auto__ = e19786;var statearr_19787_19922 = state_19774;(statearr_19787_19922[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19923 = state_19774;
state_19774 = G__19923;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19774){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__19903,switch__15974__auto__,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_19788 = f__15990__auto__.call(null);(statearr_19788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___19915);
return statearr_19788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__19903,c__15989__auto___19915,G__19734_19904,n__13416__auto___19902,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19924 = (__19903 + (1));
__19903 = G__19924;
continue;
}
} else
{}
break;
}
var c__15989__auto___19925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___19925,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___19925,jobs,results,process,async){
return (function (state_19810){var state_val_19811 = (state_19810[(1)]);if((state_val_19811 === (9)))
{var inst_19803 = (state_19810[(2)]);var state_19810__$1 = (function (){var statearr_19812 = state_19810;(statearr_19812[(7)] = inst_19803);
return statearr_19812;
})();var statearr_19813_19926 = state_19810__$1;(statearr_19813_19926[(2)] = null);
(statearr_19813_19926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19811 === (8)))
{var inst_19796 = (state_19810[(8)]);var inst_19801 = (state_19810[(2)]);var state_19810__$1 = (function (){var statearr_19814 = state_19810;(statearr_19814[(9)] = inst_19801);
return statearr_19814;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(9),results,inst_19796);
} else
{if((state_val_19811 === (7)))
{var inst_19806 = (state_19810[(2)]);var state_19810__$1 = state_19810;var statearr_19815_19927 = state_19810__$1;(statearr_19815_19927[(2)] = inst_19806);
(statearr_19815_19927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19811 === (6)))
{var inst_19796 = (state_19810[(8)]);var inst_19791 = (state_19810[(10)]);var inst_19796__$1 = cljs.core.async.chan.call(null,(1));var inst_19797 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19798 = [inst_19791,inst_19796__$1];var inst_19799 = (new cljs.core.PersistentVector(null,2,(5),inst_19797,inst_19798,null));var state_19810__$1 = (function (){var statearr_19816 = state_19810;(statearr_19816[(8)] = inst_19796__$1);
return statearr_19816;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(8),jobs,inst_19799);
} else
{if((state_val_19811 === (5)))
{var inst_19794 = cljs.core.async.close_BANG_.call(null,jobs);var state_19810__$1 = state_19810;var statearr_19817_19928 = state_19810__$1;(statearr_19817_19928[(2)] = inst_19794);
(statearr_19817_19928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19811 === (4)))
{var inst_19791 = (state_19810[(10)]);var inst_19791__$1 = (state_19810[(2)]);var inst_19792 = (inst_19791__$1 == null);var state_19810__$1 = (function (){var statearr_19818 = state_19810;(statearr_19818[(10)] = inst_19791__$1);
return statearr_19818;
})();if(cljs.core.truth_(inst_19792))
{var statearr_19819_19929 = state_19810__$1;(statearr_19819_19929[(1)] = (5));
} else
{var statearr_19820_19930 = state_19810__$1;(statearr_19820_19930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19811 === (3)))
{var inst_19808 = (state_19810[(2)]);var state_19810__$1 = state_19810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19810__$1,inst_19808);
} else
{if((state_val_19811 === (2)))
{var state_19810__$1 = state_19810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(4),from);
} else
{if((state_val_19811 === (1)))
{var state_19810__$1 = state_19810;var statearr_19821_19931 = state_19810__$1;(statearr_19821_19931[(2)] = null);
(statearr_19821_19931[(1)] = (2));
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
});})(c__15989__auto___19925,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___19925,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_19825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19825[(0)] = state_machine__15975__auto__);
(statearr_19825[(1)] = (1));
return statearr_19825;
});
var state_machine__15975__auto____1 = (function (state_19810){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19810);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19826){if((e19826 instanceof Object))
{var ex__15978__auto__ = e19826;var statearr_19827_19932 = state_19810;(statearr_19827_19932[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19933 = state_19810;
state_19810 = G__19933;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19810){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___19925,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_19828 = f__15990__auto__.call(null);(statearr_19828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___19925);
return statearr_19828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___19925,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_19866){var state_val_19867 = (state_19866[(1)]);if((state_val_19867 === (7)))
{var inst_19862 = (state_19866[(2)]);var state_19866__$1 = state_19866;var statearr_19868_19934 = state_19866__$1;(statearr_19868_19934[(2)] = inst_19862);
(statearr_19868_19934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (20)))
{var state_19866__$1 = state_19866;var statearr_19869_19935 = state_19866__$1;(statearr_19869_19935[(2)] = null);
(statearr_19869_19935[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (1)))
{var state_19866__$1 = state_19866;var statearr_19870_19936 = state_19866__$1;(statearr_19870_19936[(2)] = null);
(statearr_19870_19936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (4)))
{var inst_19831 = (state_19866[(7)]);var inst_19831__$1 = (state_19866[(2)]);var inst_19832 = (inst_19831__$1 == null);var state_19866__$1 = (function (){var statearr_19871 = state_19866;(statearr_19871[(7)] = inst_19831__$1);
return statearr_19871;
})();if(cljs.core.truth_(inst_19832))
{var statearr_19872_19937 = state_19866__$1;(statearr_19872_19937[(1)] = (5));
} else
{var statearr_19873_19938 = state_19866__$1;(statearr_19873_19938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (15)))
{var inst_19844 = (state_19866[(8)]);var state_19866__$1 = state_19866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19866__$1,(18),to,inst_19844);
} else
{if((state_val_19867 === (21)))
{var inst_19857 = (state_19866[(2)]);var state_19866__$1 = state_19866;var statearr_19874_19939 = state_19866__$1;(statearr_19874_19939[(2)] = inst_19857);
(statearr_19874_19939[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (13)))
{var inst_19859 = (state_19866[(2)]);var state_19866__$1 = (function (){var statearr_19875 = state_19866;(statearr_19875[(9)] = inst_19859);
return statearr_19875;
})();var statearr_19876_19940 = state_19866__$1;(statearr_19876_19940[(2)] = null);
(statearr_19876_19940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (6)))
{var inst_19831 = (state_19866[(7)]);var state_19866__$1 = state_19866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19866__$1,(11),inst_19831);
} else
{if((state_val_19867 === (17)))
{var inst_19852 = (state_19866[(2)]);var state_19866__$1 = state_19866;if(cljs.core.truth_(inst_19852))
{var statearr_19877_19941 = state_19866__$1;(statearr_19877_19941[(1)] = (19));
} else
{var statearr_19878_19942 = state_19866__$1;(statearr_19878_19942[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (3)))
{var inst_19864 = (state_19866[(2)]);var state_19866__$1 = state_19866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19866__$1,inst_19864);
} else
{if((state_val_19867 === (12)))
{var inst_19841 = (state_19866[(10)]);var state_19866__$1 = state_19866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19866__$1,(14),inst_19841);
} else
{if((state_val_19867 === (2)))
{var state_19866__$1 = state_19866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19866__$1,(4),results);
} else
{if((state_val_19867 === (19)))
{var state_19866__$1 = state_19866;var statearr_19879_19943 = state_19866__$1;(statearr_19879_19943[(2)] = null);
(statearr_19879_19943[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (11)))
{var inst_19841 = (state_19866[(2)]);var state_19866__$1 = (function (){var statearr_19880 = state_19866;(statearr_19880[(10)] = inst_19841);
return statearr_19880;
})();var statearr_19881_19944 = state_19866__$1;(statearr_19881_19944[(2)] = null);
(statearr_19881_19944[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (9)))
{var state_19866__$1 = state_19866;var statearr_19882_19945 = state_19866__$1;(statearr_19882_19945[(2)] = null);
(statearr_19882_19945[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (5)))
{var state_19866__$1 = state_19866;if(cljs.core.truth_(close_QMARK_))
{var statearr_19883_19946 = state_19866__$1;(statearr_19883_19946[(1)] = (8));
} else
{var statearr_19884_19947 = state_19866__$1;(statearr_19884_19947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (14)))
{var inst_19844 = (state_19866[(8)]);var inst_19846 = (state_19866[(11)]);var inst_19844__$1 = (state_19866[(2)]);var inst_19845 = (inst_19844__$1 == null);var inst_19846__$1 = cljs.core.not.call(null,inst_19845);var state_19866__$1 = (function (){var statearr_19885 = state_19866;(statearr_19885[(8)] = inst_19844__$1);
(statearr_19885[(11)] = inst_19846__$1);
return statearr_19885;
})();if(inst_19846__$1)
{var statearr_19886_19948 = state_19866__$1;(statearr_19886_19948[(1)] = (15));
} else
{var statearr_19887_19949 = state_19866__$1;(statearr_19887_19949[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (16)))
{var inst_19846 = (state_19866[(11)]);var state_19866__$1 = state_19866;var statearr_19888_19950 = state_19866__$1;(statearr_19888_19950[(2)] = inst_19846);
(statearr_19888_19950[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (10)))
{var inst_19838 = (state_19866[(2)]);var state_19866__$1 = state_19866;var statearr_19889_19951 = state_19866__$1;(statearr_19889_19951[(2)] = inst_19838);
(statearr_19889_19951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (18)))
{var inst_19849 = (state_19866[(2)]);var state_19866__$1 = state_19866;var statearr_19890_19952 = state_19866__$1;(statearr_19890_19952[(2)] = inst_19849);
(statearr_19890_19952[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19867 === (8)))
{var inst_19835 = cljs.core.async.close_BANG_.call(null,to);var state_19866__$1 = state_19866;var statearr_19891_19953 = state_19866__$1;(statearr_19891_19953[(2)] = inst_19835);
(statearr_19891_19953[(1)] = (10));
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
var state_machine__15975__auto____0 = (function (){var statearr_19895 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19895[(0)] = state_machine__15975__auto__);
(statearr_19895[(1)] = (1));
return statearr_19895;
});
var state_machine__15975__auto____1 = (function (state_19866){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_19866);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e19896){if((e19896 instanceof Object))
{var ex__15978__auto__ = e19896;var statearr_19897_19954 = state_19866;(statearr_19897_19954[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19955 = state_19866;
state_19866 = G__19955;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_19866){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_19866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_19898 = f__15990__auto__.call(null);(statearr_19898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_19898;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___20056 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___20056,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___20056,tc,fc){
return (function (state_20031){var state_val_20032 = (state_20031[(1)]);if((state_val_20032 === (7)))
{var inst_20027 = (state_20031[(2)]);var state_20031__$1 = state_20031;var statearr_20033_20057 = state_20031__$1;(statearr_20033_20057[(2)] = inst_20027);
(statearr_20033_20057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (1)))
{var state_20031__$1 = state_20031;var statearr_20034_20058 = state_20031__$1;(statearr_20034_20058[(2)] = null);
(statearr_20034_20058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (4)))
{var inst_20008 = (state_20031[(7)]);var inst_20008__$1 = (state_20031[(2)]);var inst_20009 = (inst_20008__$1 == null);var state_20031__$1 = (function (){var statearr_20035 = state_20031;(statearr_20035[(7)] = inst_20008__$1);
return statearr_20035;
})();if(cljs.core.truth_(inst_20009))
{var statearr_20036_20059 = state_20031__$1;(statearr_20036_20059[(1)] = (5));
} else
{var statearr_20037_20060 = state_20031__$1;(statearr_20037_20060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (13)))
{var state_20031__$1 = state_20031;var statearr_20038_20061 = state_20031__$1;(statearr_20038_20061[(2)] = null);
(statearr_20038_20061[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (6)))
{var inst_20008 = (state_20031[(7)]);var inst_20014 = p.call(null,inst_20008);var state_20031__$1 = state_20031;if(cljs.core.truth_(inst_20014))
{var statearr_20039_20062 = state_20031__$1;(statearr_20039_20062[(1)] = (9));
} else
{var statearr_20040_20063 = state_20031__$1;(statearr_20040_20063[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (3)))
{var inst_20029 = (state_20031[(2)]);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20031__$1,inst_20029);
} else
{if((state_val_20032 === (12)))
{var state_20031__$1 = state_20031;var statearr_20041_20064 = state_20031__$1;(statearr_20041_20064[(2)] = null);
(statearr_20041_20064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (2)))
{var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20031__$1,(4),ch);
} else
{if((state_val_20032 === (11)))
{var inst_20008 = (state_20031[(7)]);var inst_20018 = (state_20031[(2)]);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20031__$1,(8),inst_20018,inst_20008);
} else
{if((state_val_20032 === (9)))
{var state_20031__$1 = state_20031;var statearr_20042_20065 = state_20031__$1;(statearr_20042_20065[(2)] = tc);
(statearr_20042_20065[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (5)))
{var inst_20011 = cljs.core.async.close_BANG_.call(null,tc);var inst_20012 = cljs.core.async.close_BANG_.call(null,fc);var state_20031__$1 = (function (){var statearr_20043 = state_20031;(statearr_20043[(8)] = inst_20011);
return statearr_20043;
})();var statearr_20044_20066 = state_20031__$1;(statearr_20044_20066[(2)] = inst_20012);
(statearr_20044_20066[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (14)))
{var inst_20025 = (state_20031[(2)]);var state_20031__$1 = state_20031;var statearr_20045_20067 = state_20031__$1;(statearr_20045_20067[(2)] = inst_20025);
(statearr_20045_20067[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (10)))
{var state_20031__$1 = state_20031;var statearr_20046_20068 = state_20031__$1;(statearr_20046_20068[(2)] = fc);
(statearr_20046_20068[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (8)))
{var inst_20020 = (state_20031[(2)]);var state_20031__$1 = state_20031;if(cljs.core.truth_(inst_20020))
{var statearr_20047_20069 = state_20031__$1;(statearr_20047_20069[(1)] = (12));
} else
{var statearr_20048_20070 = state_20031__$1;(statearr_20048_20070[(1)] = (13));
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
});})(c__15989__auto___20056,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___20056,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_20052 = [null,null,null,null,null,null,null,null,null];(statearr_20052[(0)] = state_machine__15975__auto__);
(statearr_20052[(1)] = (1));
return statearr_20052;
});
var state_machine__15975__auto____1 = (function (state_20031){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_20031);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e20053){if((e20053 instanceof Object))
{var ex__15978__auto__ = e20053;var statearr_20054_20071 = state_20031;(statearr_20054_20071[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20072 = state_20031;
state_20031 = G__20072;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_20031){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_20031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___20056,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_20055 = f__15990__auto__.call(null);(statearr_20055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___20056);
return statearr_20055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___20056,tc,fc))
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
return (function (state_20119){var state_val_20120 = (state_20119[(1)]);if((state_val_20120 === (7)))
{var inst_20115 = (state_20119[(2)]);var state_20119__$1 = state_20119;var statearr_20121_20137 = state_20119__$1;(statearr_20121_20137[(2)] = inst_20115);
(statearr_20121_20137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20120 === (6)))
{var inst_20108 = (state_20119[(7)]);var inst_20105 = (state_20119[(8)]);var inst_20112 = f.call(null,inst_20105,inst_20108);var inst_20105__$1 = inst_20112;var state_20119__$1 = (function (){var statearr_20122 = state_20119;(statearr_20122[(8)] = inst_20105__$1);
return statearr_20122;
})();var statearr_20123_20138 = state_20119__$1;(statearr_20123_20138[(2)] = null);
(statearr_20123_20138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20120 === (5)))
{var inst_20105 = (state_20119[(8)]);var state_20119__$1 = state_20119;var statearr_20124_20139 = state_20119__$1;(statearr_20124_20139[(2)] = inst_20105);
(statearr_20124_20139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20120 === (4)))
{var inst_20108 = (state_20119[(7)]);var inst_20108__$1 = (state_20119[(2)]);var inst_20109 = (inst_20108__$1 == null);var state_20119__$1 = (function (){var statearr_20125 = state_20119;(statearr_20125[(7)] = inst_20108__$1);
return statearr_20125;
})();if(cljs.core.truth_(inst_20109))
{var statearr_20126_20140 = state_20119__$1;(statearr_20126_20140[(1)] = (5));
} else
{var statearr_20127_20141 = state_20119__$1;(statearr_20127_20141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20120 === (3)))
{var inst_20117 = (state_20119[(2)]);var state_20119__$1 = state_20119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20119__$1,inst_20117);
} else
{if((state_val_20120 === (2)))
{var state_20119__$1 = state_20119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20119__$1,(4),ch);
} else
{if((state_val_20120 === (1)))
{var inst_20105 = init;var state_20119__$1 = (function (){var statearr_20128 = state_20119;(statearr_20128[(8)] = inst_20105);
return statearr_20128;
})();var statearr_20129_20142 = state_20119__$1;(statearr_20129_20142[(2)] = null);
(statearr_20129_20142[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_20133 = [null,null,null,null,null,null,null,null,null];(statearr_20133[(0)] = state_machine__15975__auto__);
(statearr_20133[(1)] = (1));
return statearr_20133;
});
var state_machine__15975__auto____1 = (function (state_20119){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_20119);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e20134){if((e20134 instanceof Object))
{var ex__15978__auto__ = e20134;var statearr_20135_20143 = state_20119;(statearr_20135_20143[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20144 = state_20119;
state_20119 = G__20144;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_20119){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_20119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_20136 = f__15990__auto__.call(null);(statearr_20136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_20136;
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
return (function (state_20218){var state_val_20219 = (state_20218[(1)]);if((state_val_20219 === (7)))
{var inst_20200 = (state_20218[(2)]);var state_20218__$1 = state_20218;var statearr_20220_20243 = state_20218__$1;(statearr_20220_20243[(2)] = inst_20200);
(statearr_20220_20243[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (1)))
{var inst_20194 = cljs.core.seq.call(null,coll);var inst_20195 = inst_20194;var state_20218__$1 = (function (){var statearr_20221 = state_20218;(statearr_20221[(7)] = inst_20195);
return statearr_20221;
})();var statearr_20222_20244 = state_20218__$1;(statearr_20222_20244[(2)] = null);
(statearr_20222_20244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (4)))
{var inst_20195 = (state_20218[(7)]);var inst_20198 = cljs.core.first.call(null,inst_20195);var state_20218__$1 = state_20218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20218__$1,(7),ch,inst_20198);
} else
{if((state_val_20219 === (13)))
{var inst_20212 = (state_20218[(2)]);var state_20218__$1 = state_20218;var statearr_20223_20245 = state_20218__$1;(statearr_20223_20245[(2)] = inst_20212);
(statearr_20223_20245[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (6)))
{var inst_20203 = (state_20218[(2)]);var state_20218__$1 = state_20218;if(cljs.core.truth_(inst_20203))
{var statearr_20224_20246 = state_20218__$1;(statearr_20224_20246[(1)] = (8));
} else
{var statearr_20225_20247 = state_20218__$1;(statearr_20225_20247[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (3)))
{var inst_20216 = (state_20218[(2)]);var state_20218__$1 = state_20218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20218__$1,inst_20216);
} else
{if((state_val_20219 === (12)))
{var state_20218__$1 = state_20218;var statearr_20226_20248 = state_20218__$1;(statearr_20226_20248[(2)] = null);
(statearr_20226_20248[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (2)))
{var inst_20195 = (state_20218[(7)]);var state_20218__$1 = state_20218;if(cljs.core.truth_(inst_20195))
{var statearr_20227_20249 = state_20218__$1;(statearr_20227_20249[(1)] = (4));
} else
{var statearr_20228_20250 = state_20218__$1;(statearr_20228_20250[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (11)))
{var inst_20209 = cljs.core.async.close_BANG_.call(null,ch);var state_20218__$1 = state_20218;var statearr_20229_20251 = state_20218__$1;(statearr_20229_20251[(2)] = inst_20209);
(statearr_20229_20251[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (9)))
{var state_20218__$1 = state_20218;if(cljs.core.truth_(close_QMARK_))
{var statearr_20230_20252 = state_20218__$1;(statearr_20230_20252[(1)] = (11));
} else
{var statearr_20231_20253 = state_20218__$1;(statearr_20231_20253[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (5)))
{var inst_20195 = (state_20218[(7)]);var state_20218__$1 = state_20218;var statearr_20232_20254 = state_20218__$1;(statearr_20232_20254[(2)] = inst_20195);
(statearr_20232_20254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (10)))
{var inst_20214 = (state_20218[(2)]);var state_20218__$1 = state_20218;var statearr_20233_20255 = state_20218__$1;(statearr_20233_20255[(2)] = inst_20214);
(statearr_20233_20255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20219 === (8)))
{var inst_20195 = (state_20218[(7)]);var inst_20205 = cljs.core.next.call(null,inst_20195);var inst_20195__$1 = inst_20205;var state_20218__$1 = (function (){var statearr_20234 = state_20218;(statearr_20234[(7)] = inst_20195__$1);
return statearr_20234;
})();var statearr_20235_20256 = state_20218__$1;(statearr_20235_20256[(2)] = null);
(statearr_20235_20256[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_20239 = [null,null,null,null,null,null,null,null];(statearr_20239[(0)] = state_machine__15975__auto__);
(statearr_20239[(1)] = (1));
return statearr_20239;
});
var state_machine__15975__auto____1 = (function (state_20218){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_20218);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e20240){if((e20240 instanceof Object))
{var ex__15978__auto__ = e20240;var statearr_20241_20257 = state_20218;(statearr_20241_20257[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20258 = state_20218;
state_20218 = G__20258;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_20218){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_20218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_20242 = f__15990__auto__.call(null);(statearr_20242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_20242;
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
cljs.core.async.Mux = (function (){var obj20260 = {};return obj20260;
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
cljs.core.async.Mult = (function (){var obj20262 = {};return obj20262;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20484 = (function (cs,ch,mult,meta20485){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20485 = meta20485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20484.cljs$lang$type = true;
cljs.core.async.t20484.cljs$lang$ctorStr = "cljs.core.async/t20484";
cljs.core.async.t20484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t20484");
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20486){var self__ = this;
var _20486__$1 = this;return self__.meta20485;
});})(cs))
;
cljs.core.async.t20484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20486,meta20485__$1){var self__ = this;
var _20486__$1 = this;return (new cljs.core.async.t20484(self__.cs,self__.ch,self__.mult,meta20485__$1));
});})(cs))
;
cljs.core.async.__GT_t20484 = ((function (cs){
return (function __GT_t20484(cs__$1,ch__$1,mult__$1,meta20485){return (new cljs.core.async.t20484(cs__$1,ch__$1,mult__$1,meta20485));
});})(cs))
;
}
return (new cljs.core.async.t20484(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___20705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___20705,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___20705,cs,m,dchan,dctr,done){
return (function (state_20617){var state_val_20618 = (state_20617[(1)]);if((state_val_20618 === (7)))
{var inst_20613 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20619_20706 = state_20617__$1;(statearr_20619_20706[(2)] = inst_20613);
(statearr_20619_20706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (20)))
{var inst_20518 = (state_20617[(7)]);var inst_20528 = cljs.core.first.call(null,inst_20518);var inst_20529 = cljs.core.nth.call(null,inst_20528,(0),null);var inst_20530 = cljs.core.nth.call(null,inst_20528,(1),null);var state_20617__$1 = (function (){var statearr_20620 = state_20617;(statearr_20620[(8)] = inst_20529);
return statearr_20620;
})();if(cljs.core.truth_(inst_20530))
{var statearr_20621_20707 = state_20617__$1;(statearr_20621_20707[(1)] = (22));
} else
{var statearr_20622_20708 = state_20617__$1;(statearr_20622_20708[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (27)))
{var inst_20565 = (state_20617[(9)]);var inst_20560 = (state_20617[(10)]);var inst_20558 = (state_20617[(11)]);var inst_20489 = (state_20617[(12)]);var inst_20565__$1 = cljs.core._nth.call(null,inst_20558,inst_20560);var inst_20566 = cljs.core.async.put_BANG_.call(null,inst_20565__$1,inst_20489,done);var state_20617__$1 = (function (){var statearr_20623 = state_20617;(statearr_20623[(9)] = inst_20565__$1);
return statearr_20623;
})();if(cljs.core.truth_(inst_20566))
{var statearr_20624_20709 = state_20617__$1;(statearr_20624_20709[(1)] = (30));
} else
{var statearr_20625_20710 = state_20617__$1;(statearr_20625_20710[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (1)))
{var state_20617__$1 = state_20617;var statearr_20626_20711 = state_20617__$1;(statearr_20626_20711[(2)] = null);
(statearr_20626_20711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (24)))
{var inst_20518 = (state_20617[(7)]);var inst_20535 = (state_20617[(2)]);var inst_20536 = cljs.core.next.call(null,inst_20518);var inst_20498 = inst_20536;var inst_20499 = null;var inst_20500 = (0);var inst_20501 = (0);var state_20617__$1 = (function (){var statearr_20627 = state_20617;(statearr_20627[(13)] = inst_20499);
(statearr_20627[(14)] = inst_20500);
(statearr_20627[(15)] = inst_20501);
(statearr_20627[(16)] = inst_20498);
(statearr_20627[(17)] = inst_20535);
return statearr_20627;
})();var statearr_20628_20712 = state_20617__$1;(statearr_20628_20712[(2)] = null);
(statearr_20628_20712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (39)))
{var state_20617__$1 = state_20617;var statearr_20632_20713 = state_20617__$1;(statearr_20632_20713[(2)] = null);
(statearr_20632_20713[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (4)))
{var inst_20489 = (state_20617[(12)]);var inst_20489__$1 = (state_20617[(2)]);var inst_20490 = (inst_20489__$1 == null);var state_20617__$1 = (function (){var statearr_20633 = state_20617;(statearr_20633[(12)] = inst_20489__$1);
return statearr_20633;
})();if(cljs.core.truth_(inst_20490))
{var statearr_20634_20714 = state_20617__$1;(statearr_20634_20714[(1)] = (5));
} else
{var statearr_20635_20715 = state_20617__$1;(statearr_20635_20715[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (15)))
{var inst_20499 = (state_20617[(13)]);var inst_20500 = (state_20617[(14)]);var inst_20501 = (state_20617[(15)]);var inst_20498 = (state_20617[(16)]);var inst_20514 = (state_20617[(2)]);var inst_20515 = (inst_20501 + (1));var tmp20629 = inst_20499;var tmp20630 = inst_20500;var tmp20631 = inst_20498;var inst_20498__$1 = tmp20631;var inst_20499__$1 = tmp20629;var inst_20500__$1 = tmp20630;var inst_20501__$1 = inst_20515;var state_20617__$1 = (function (){var statearr_20636 = state_20617;(statearr_20636[(13)] = inst_20499__$1);
(statearr_20636[(18)] = inst_20514);
(statearr_20636[(14)] = inst_20500__$1);
(statearr_20636[(15)] = inst_20501__$1);
(statearr_20636[(16)] = inst_20498__$1);
return statearr_20636;
})();var statearr_20637_20716 = state_20617__$1;(statearr_20637_20716[(2)] = null);
(statearr_20637_20716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (21)))
{var inst_20539 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20641_20717 = state_20617__$1;(statearr_20641_20717[(2)] = inst_20539);
(statearr_20641_20717[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (31)))
{var inst_20565 = (state_20617[(9)]);var inst_20569 = done.call(null,null);var inst_20570 = cljs.core.async.untap_STAR_.call(null,m,inst_20565);var state_20617__$1 = (function (){var statearr_20642 = state_20617;(statearr_20642[(19)] = inst_20569);
return statearr_20642;
})();var statearr_20643_20718 = state_20617__$1;(statearr_20643_20718[(2)] = inst_20570);
(statearr_20643_20718[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (32)))
{var inst_20560 = (state_20617[(10)]);var inst_20558 = (state_20617[(11)]);var inst_20559 = (state_20617[(20)]);var inst_20557 = (state_20617[(21)]);var inst_20572 = (state_20617[(2)]);var inst_20573 = (inst_20560 + (1));var tmp20638 = inst_20558;var tmp20639 = inst_20559;var tmp20640 = inst_20557;var inst_20557__$1 = tmp20640;var inst_20558__$1 = tmp20638;var inst_20559__$1 = tmp20639;var inst_20560__$1 = inst_20573;var state_20617__$1 = (function (){var statearr_20644 = state_20617;(statearr_20644[(10)] = inst_20560__$1);
(statearr_20644[(22)] = inst_20572);
(statearr_20644[(11)] = inst_20558__$1);
(statearr_20644[(20)] = inst_20559__$1);
(statearr_20644[(21)] = inst_20557__$1);
return statearr_20644;
})();var statearr_20645_20719 = state_20617__$1;(statearr_20645_20719[(2)] = null);
(statearr_20645_20719[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (40)))
{var inst_20585 = (state_20617[(23)]);var inst_20589 = done.call(null,null);var inst_20590 = cljs.core.async.untap_STAR_.call(null,m,inst_20585);var state_20617__$1 = (function (){var statearr_20646 = state_20617;(statearr_20646[(24)] = inst_20589);
return statearr_20646;
})();var statearr_20647_20720 = state_20617__$1;(statearr_20647_20720[(2)] = inst_20590);
(statearr_20647_20720[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (33)))
{var inst_20576 = (state_20617[(25)]);var inst_20578 = cljs.core.chunked_seq_QMARK_.call(null,inst_20576);var state_20617__$1 = state_20617;if(inst_20578)
{var statearr_20648_20721 = state_20617__$1;(statearr_20648_20721[(1)] = (36));
} else
{var statearr_20649_20722 = state_20617__$1;(statearr_20649_20722[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (13)))
{var inst_20508 = (state_20617[(26)]);var inst_20511 = cljs.core.async.close_BANG_.call(null,inst_20508);var state_20617__$1 = state_20617;var statearr_20650_20723 = state_20617__$1;(statearr_20650_20723[(2)] = inst_20511);
(statearr_20650_20723[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (22)))
{var inst_20529 = (state_20617[(8)]);var inst_20532 = cljs.core.async.close_BANG_.call(null,inst_20529);var state_20617__$1 = state_20617;var statearr_20651_20724 = state_20617__$1;(statearr_20651_20724[(2)] = inst_20532);
(statearr_20651_20724[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (36)))
{var inst_20576 = (state_20617[(25)]);var inst_20580 = cljs.core.chunk_first.call(null,inst_20576);var inst_20581 = cljs.core.chunk_rest.call(null,inst_20576);var inst_20582 = cljs.core.count.call(null,inst_20580);var inst_20557 = inst_20581;var inst_20558 = inst_20580;var inst_20559 = inst_20582;var inst_20560 = (0);var state_20617__$1 = (function (){var statearr_20652 = state_20617;(statearr_20652[(10)] = inst_20560);
(statearr_20652[(11)] = inst_20558);
(statearr_20652[(20)] = inst_20559);
(statearr_20652[(21)] = inst_20557);
return statearr_20652;
})();var statearr_20653_20725 = state_20617__$1;(statearr_20653_20725[(2)] = null);
(statearr_20653_20725[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (41)))
{var inst_20576 = (state_20617[(25)]);var inst_20592 = (state_20617[(2)]);var inst_20593 = cljs.core.next.call(null,inst_20576);var inst_20557 = inst_20593;var inst_20558 = null;var inst_20559 = (0);var inst_20560 = (0);var state_20617__$1 = (function (){var statearr_20654 = state_20617;(statearr_20654[(27)] = inst_20592);
(statearr_20654[(10)] = inst_20560);
(statearr_20654[(11)] = inst_20558);
(statearr_20654[(20)] = inst_20559);
(statearr_20654[(21)] = inst_20557);
return statearr_20654;
})();var statearr_20655_20726 = state_20617__$1;(statearr_20655_20726[(2)] = null);
(statearr_20655_20726[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (43)))
{var state_20617__$1 = state_20617;var statearr_20656_20727 = state_20617__$1;(statearr_20656_20727[(2)] = null);
(statearr_20656_20727[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (29)))
{var inst_20601 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20657_20728 = state_20617__$1;(statearr_20657_20728[(2)] = inst_20601);
(statearr_20657_20728[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (44)))
{var inst_20610 = (state_20617[(2)]);var state_20617__$1 = (function (){var statearr_20658 = state_20617;(statearr_20658[(28)] = inst_20610);
return statearr_20658;
})();var statearr_20659_20729 = state_20617__$1;(statearr_20659_20729[(2)] = null);
(statearr_20659_20729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (6)))
{var inst_20549 = (state_20617[(29)]);var inst_20548 = cljs.core.deref.call(null,cs);var inst_20549__$1 = cljs.core.keys.call(null,inst_20548);var inst_20550 = cljs.core.count.call(null,inst_20549__$1);var inst_20551 = cljs.core.reset_BANG_.call(null,dctr,inst_20550);var inst_20556 = cljs.core.seq.call(null,inst_20549__$1);var inst_20557 = inst_20556;var inst_20558 = null;var inst_20559 = (0);var inst_20560 = (0);var state_20617__$1 = (function (){var statearr_20660 = state_20617;(statearr_20660[(10)] = inst_20560);
(statearr_20660[(11)] = inst_20558);
(statearr_20660[(20)] = inst_20559);
(statearr_20660[(30)] = inst_20551);
(statearr_20660[(21)] = inst_20557);
(statearr_20660[(29)] = inst_20549__$1);
return statearr_20660;
})();var statearr_20661_20730 = state_20617__$1;(statearr_20661_20730[(2)] = null);
(statearr_20661_20730[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (28)))
{var inst_20557 = (state_20617[(21)]);var inst_20576 = (state_20617[(25)]);var inst_20576__$1 = cljs.core.seq.call(null,inst_20557);var state_20617__$1 = (function (){var statearr_20662 = state_20617;(statearr_20662[(25)] = inst_20576__$1);
return statearr_20662;
})();if(inst_20576__$1)
{var statearr_20663_20731 = state_20617__$1;(statearr_20663_20731[(1)] = (33));
} else
{var statearr_20664_20732 = state_20617__$1;(statearr_20664_20732[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (25)))
{var inst_20560 = (state_20617[(10)]);var inst_20559 = (state_20617[(20)]);var inst_20562 = (inst_20560 < inst_20559);var inst_20563 = inst_20562;var state_20617__$1 = state_20617;if(cljs.core.truth_(inst_20563))
{var statearr_20665_20733 = state_20617__$1;(statearr_20665_20733[(1)] = (27));
} else
{var statearr_20666_20734 = state_20617__$1;(statearr_20666_20734[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (34)))
{var state_20617__$1 = state_20617;var statearr_20667_20735 = state_20617__$1;(statearr_20667_20735[(2)] = null);
(statearr_20667_20735[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (17)))
{var state_20617__$1 = state_20617;var statearr_20668_20736 = state_20617__$1;(statearr_20668_20736[(2)] = null);
(statearr_20668_20736[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (3)))
{var inst_20615 = (state_20617[(2)]);var state_20617__$1 = state_20617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20617__$1,inst_20615);
} else
{if((state_val_20618 === (12)))
{var inst_20544 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20669_20737 = state_20617__$1;(statearr_20669_20737[(2)] = inst_20544);
(statearr_20669_20737[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (2)))
{var state_20617__$1 = state_20617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20617__$1,(4),ch);
} else
{if((state_val_20618 === (23)))
{var state_20617__$1 = state_20617;var statearr_20670_20738 = state_20617__$1;(statearr_20670_20738[(2)] = null);
(statearr_20670_20738[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (35)))
{var inst_20599 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20671_20739 = state_20617__$1;(statearr_20671_20739[(2)] = inst_20599);
(statearr_20671_20739[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (19)))
{var inst_20518 = (state_20617[(7)]);var inst_20522 = cljs.core.chunk_first.call(null,inst_20518);var inst_20523 = cljs.core.chunk_rest.call(null,inst_20518);var inst_20524 = cljs.core.count.call(null,inst_20522);var inst_20498 = inst_20523;var inst_20499 = inst_20522;var inst_20500 = inst_20524;var inst_20501 = (0);var state_20617__$1 = (function (){var statearr_20672 = state_20617;(statearr_20672[(13)] = inst_20499);
(statearr_20672[(14)] = inst_20500);
(statearr_20672[(15)] = inst_20501);
(statearr_20672[(16)] = inst_20498);
return statearr_20672;
})();var statearr_20673_20740 = state_20617__$1;(statearr_20673_20740[(2)] = null);
(statearr_20673_20740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (11)))
{var inst_20518 = (state_20617[(7)]);var inst_20498 = (state_20617[(16)]);var inst_20518__$1 = cljs.core.seq.call(null,inst_20498);var state_20617__$1 = (function (){var statearr_20674 = state_20617;(statearr_20674[(7)] = inst_20518__$1);
return statearr_20674;
})();if(inst_20518__$1)
{var statearr_20675_20741 = state_20617__$1;(statearr_20675_20741[(1)] = (16));
} else
{var statearr_20676_20742 = state_20617__$1;(statearr_20676_20742[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (9)))
{var inst_20546 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20677_20743 = state_20617__$1;(statearr_20677_20743[(2)] = inst_20546);
(statearr_20677_20743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (5)))
{var inst_20496 = cljs.core.deref.call(null,cs);var inst_20497 = cljs.core.seq.call(null,inst_20496);var inst_20498 = inst_20497;var inst_20499 = null;var inst_20500 = (0);var inst_20501 = (0);var state_20617__$1 = (function (){var statearr_20678 = state_20617;(statearr_20678[(13)] = inst_20499);
(statearr_20678[(14)] = inst_20500);
(statearr_20678[(15)] = inst_20501);
(statearr_20678[(16)] = inst_20498);
return statearr_20678;
})();var statearr_20679_20744 = state_20617__$1;(statearr_20679_20744[(2)] = null);
(statearr_20679_20744[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (14)))
{var state_20617__$1 = state_20617;var statearr_20680_20745 = state_20617__$1;(statearr_20680_20745[(2)] = null);
(statearr_20680_20745[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (45)))
{var inst_20607 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20681_20746 = state_20617__$1;(statearr_20681_20746[(2)] = inst_20607);
(statearr_20681_20746[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (26)))
{var inst_20549 = (state_20617[(29)]);var inst_20603 = (state_20617[(2)]);var inst_20604 = cljs.core.seq.call(null,inst_20549);var state_20617__$1 = (function (){var statearr_20682 = state_20617;(statearr_20682[(31)] = inst_20603);
return statearr_20682;
})();if(inst_20604)
{var statearr_20683_20747 = state_20617__$1;(statearr_20683_20747[(1)] = (42));
} else
{var statearr_20684_20748 = state_20617__$1;(statearr_20684_20748[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (16)))
{var inst_20518 = (state_20617[(7)]);var inst_20520 = cljs.core.chunked_seq_QMARK_.call(null,inst_20518);var state_20617__$1 = state_20617;if(inst_20520)
{var statearr_20685_20749 = state_20617__$1;(statearr_20685_20749[(1)] = (19));
} else
{var statearr_20686_20750 = state_20617__$1;(statearr_20686_20750[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (38)))
{var inst_20596 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20687_20751 = state_20617__$1;(statearr_20687_20751[(2)] = inst_20596);
(statearr_20687_20751[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (30)))
{var state_20617__$1 = state_20617;var statearr_20688_20752 = state_20617__$1;(statearr_20688_20752[(2)] = null);
(statearr_20688_20752[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (10)))
{var inst_20499 = (state_20617[(13)]);var inst_20501 = (state_20617[(15)]);var inst_20507 = cljs.core._nth.call(null,inst_20499,inst_20501);var inst_20508 = cljs.core.nth.call(null,inst_20507,(0),null);var inst_20509 = cljs.core.nth.call(null,inst_20507,(1),null);var state_20617__$1 = (function (){var statearr_20689 = state_20617;(statearr_20689[(26)] = inst_20508);
return statearr_20689;
})();if(cljs.core.truth_(inst_20509))
{var statearr_20690_20753 = state_20617__$1;(statearr_20690_20753[(1)] = (13));
} else
{var statearr_20691_20754 = state_20617__$1;(statearr_20691_20754[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (18)))
{var inst_20542 = (state_20617[(2)]);var state_20617__$1 = state_20617;var statearr_20692_20755 = state_20617__$1;(statearr_20692_20755[(2)] = inst_20542);
(statearr_20692_20755[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (42)))
{var state_20617__$1 = state_20617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20617__$1,(45),dchan);
} else
{if((state_val_20618 === (37)))
{var inst_20585 = (state_20617[(23)]);var inst_20489 = (state_20617[(12)]);var inst_20576 = (state_20617[(25)]);var inst_20585__$1 = cljs.core.first.call(null,inst_20576);var inst_20586 = cljs.core.async.put_BANG_.call(null,inst_20585__$1,inst_20489,done);var state_20617__$1 = (function (){var statearr_20693 = state_20617;(statearr_20693[(23)] = inst_20585__$1);
return statearr_20693;
})();if(cljs.core.truth_(inst_20586))
{var statearr_20694_20756 = state_20617__$1;(statearr_20694_20756[(1)] = (39));
} else
{var statearr_20695_20757 = state_20617__$1;(statearr_20695_20757[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20618 === (8)))
{var inst_20500 = (state_20617[(14)]);var inst_20501 = (state_20617[(15)]);var inst_20503 = (inst_20501 < inst_20500);var inst_20504 = inst_20503;var state_20617__$1 = state_20617;if(cljs.core.truth_(inst_20504))
{var statearr_20696_20758 = state_20617__$1;(statearr_20696_20758[(1)] = (10));
} else
{var statearr_20697_20759 = state_20617__$1;(statearr_20697_20759[(1)] = (11));
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
});})(c__15989__auto___20705,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___20705,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_20701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20701[(0)] = state_machine__15975__auto__);
(statearr_20701[(1)] = (1));
return statearr_20701;
});
var state_machine__15975__auto____1 = (function (state_20617){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_20617);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e20702){if((e20702 instanceof Object))
{var ex__15978__auto__ = e20702;var statearr_20703_20760 = state_20617;(statearr_20703_20760[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20761 = state_20617;
state_20617 = G__20761;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_20617){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_20617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___20705,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_20704 = f__15990__auto__.call(null);(statearr_20704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___20705);
return statearr_20704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___20705,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20763 = {};return obj20763;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20764){var map__20769 = p__20764;var map__20769__$1 = ((cljs.core.seq_QMARK_.call(null,map__20769))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);var opts = map__20769__$1;var statearr_20770_20773 = state;(statearr_20770_20773[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20769,map__20769__$1,opts){
return (function (val){var statearr_20771_20774 = state;(statearr_20771_20774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20769,map__20769__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20772_20775 = state;(statearr_20772_20775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20764 = null;if (arguments.length > 3) {
  p__20764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20764);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20776){
var state = cljs.core.first(arglist__20776);
arglist__20776 = cljs.core.next(arglist__20776);
var cont_block = cljs.core.first(arglist__20776);
arglist__20776 = cljs.core.next(arglist__20776);
var ports = cljs.core.first(arglist__20776);
var p__20764 = cljs.core.rest(arglist__20776);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20764);
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
;var m = (function (){if(typeof cljs.core.async.t20896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20896 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20897){
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
this.meta20897 = meta20897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20896.cljs$lang$type = true;
cljs.core.async.t20896.cljs$lang$ctorStr = "cljs.core.async/t20896";
cljs.core.async.t20896.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t20896");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20898){var self__ = this;
var _20898__$1 = this;return self__.meta20897;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20898,meta20897__$1){var self__ = this;
var _20898__$1 = this;return (new cljs.core.async.t20896(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20897__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20896 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20897){return (new cljs.core.async.t20896(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20897));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20896(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___21015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20968){var state_val_20969 = (state_20968[(1)]);if((state_val_20969 === (7)))
{var inst_20912 = (state_20968[(7)]);var inst_20917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20912);var state_20968__$1 = state_20968;var statearr_20970_21016 = state_20968__$1;(statearr_20970_21016[(2)] = inst_20917);
(statearr_20970_21016[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (20)))
{var inst_20927 = (state_20968[(8)]);var state_20968__$1 = state_20968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20968__$1,(23),out,inst_20927);
} else
{if((state_val_20969 === (1)))
{var inst_20902 = (state_20968[(9)]);var inst_20902__$1 = calc_state.call(null);var inst_20903 = cljs.core.seq_QMARK_.call(null,inst_20902__$1);var state_20968__$1 = (function (){var statearr_20971 = state_20968;(statearr_20971[(9)] = inst_20902__$1);
return statearr_20971;
})();if(inst_20903)
{var statearr_20972_21017 = state_20968__$1;(statearr_20972_21017[(1)] = (2));
} else
{var statearr_20973_21018 = state_20968__$1;(statearr_20973_21018[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (24)))
{var inst_20920 = (state_20968[(10)]);var inst_20912 = inst_20920;var state_20968__$1 = (function (){var statearr_20974 = state_20968;(statearr_20974[(7)] = inst_20912);
return statearr_20974;
})();var statearr_20975_21019 = state_20968__$1;(statearr_20975_21019[(2)] = null);
(statearr_20975_21019[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (4)))
{var inst_20902 = (state_20968[(9)]);var inst_20908 = (state_20968[(2)]);var inst_20909 = cljs.core.get.call(null,inst_20908,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20910 = cljs.core.get.call(null,inst_20908,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20911 = cljs.core.get.call(null,inst_20908,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20912 = inst_20902;var state_20968__$1 = (function (){var statearr_20976 = state_20968;(statearr_20976[(11)] = inst_20910);
(statearr_20976[(12)] = inst_20911);
(statearr_20976[(13)] = inst_20909);
(statearr_20976[(7)] = inst_20912);
return statearr_20976;
})();var statearr_20977_21020 = state_20968__$1;(statearr_20977_21020[(2)] = null);
(statearr_20977_21020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (15)))
{var state_20968__$1 = state_20968;var statearr_20978_21021 = state_20968__$1;(statearr_20978_21021[(2)] = null);
(statearr_20978_21021[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (21)))
{var inst_20920 = (state_20968[(10)]);var inst_20912 = inst_20920;var state_20968__$1 = (function (){var statearr_20979 = state_20968;(statearr_20979[(7)] = inst_20912);
return statearr_20979;
})();var statearr_20980_21022 = state_20968__$1;(statearr_20980_21022[(2)] = null);
(statearr_20980_21022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (13)))
{var inst_20964 = (state_20968[(2)]);var state_20968__$1 = state_20968;var statearr_20981_21023 = state_20968__$1;(statearr_20981_21023[(2)] = inst_20964);
(statearr_20981_21023[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (22)))
{var inst_20962 = (state_20968[(2)]);var state_20968__$1 = state_20968;var statearr_20982_21024 = state_20968__$1;(statearr_20982_21024[(2)] = inst_20962);
(statearr_20982_21024[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (6)))
{var inst_20966 = (state_20968[(2)]);var state_20968__$1 = state_20968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20968__$1,inst_20966);
} else
{if((state_val_20969 === (25)))
{var state_20968__$1 = state_20968;var statearr_20983_21025 = state_20968__$1;(statearr_20983_21025[(2)] = null);
(statearr_20983_21025[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (17)))
{var inst_20942 = (state_20968[(14)]);var state_20968__$1 = state_20968;var statearr_20984_21026 = state_20968__$1;(statearr_20984_21026[(2)] = inst_20942);
(statearr_20984_21026[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (3)))
{var inst_20902 = (state_20968[(9)]);var state_20968__$1 = state_20968;var statearr_20985_21027 = state_20968__$1;(statearr_20985_21027[(2)] = inst_20902);
(statearr_20985_21027[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (12)))
{var inst_20923 = (state_20968[(15)]);var inst_20942 = (state_20968[(14)]);var inst_20928 = (state_20968[(16)]);var inst_20942__$1 = inst_20923.call(null,inst_20928);var state_20968__$1 = (function (){var statearr_20986 = state_20968;(statearr_20986[(14)] = inst_20942__$1);
return statearr_20986;
})();if(cljs.core.truth_(inst_20942__$1))
{var statearr_20987_21028 = state_20968__$1;(statearr_20987_21028[(1)] = (17));
} else
{var statearr_20988_21029 = state_20968__$1;(statearr_20988_21029[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (2)))
{var inst_20902 = (state_20968[(9)]);var inst_20905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20902);var state_20968__$1 = state_20968;var statearr_20989_21030 = state_20968__$1;(statearr_20989_21030[(2)] = inst_20905);
(statearr_20989_21030[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (23)))
{var inst_20953 = (state_20968[(2)]);var state_20968__$1 = state_20968;if(cljs.core.truth_(inst_20953))
{var statearr_20990_21031 = state_20968__$1;(statearr_20990_21031[(1)] = (24));
} else
{var statearr_20991_21032 = state_20968__$1;(statearr_20991_21032[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (19)))
{var inst_20950 = (state_20968[(2)]);var state_20968__$1 = state_20968;if(cljs.core.truth_(inst_20950))
{var statearr_20992_21033 = state_20968__$1;(statearr_20992_21033[(1)] = (20));
} else
{var statearr_20993_21034 = state_20968__$1;(statearr_20993_21034[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (11)))
{var inst_20927 = (state_20968[(8)]);var inst_20933 = (inst_20927 == null);var state_20968__$1 = state_20968;if(cljs.core.truth_(inst_20933))
{var statearr_20994_21035 = state_20968__$1;(statearr_20994_21035[(1)] = (14));
} else
{var statearr_20995_21036 = state_20968__$1;(statearr_20995_21036[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (9)))
{var inst_20920 = (state_20968[(10)]);var inst_20920__$1 = (state_20968[(2)]);var inst_20921 = cljs.core.get.call(null,inst_20920__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20922 = cljs.core.get.call(null,inst_20920__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20923 = cljs.core.get.call(null,inst_20920__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20968__$1 = (function (){var statearr_20996 = state_20968;(statearr_20996[(15)] = inst_20923);
(statearr_20996[(10)] = inst_20920__$1);
(statearr_20996[(17)] = inst_20922);
return statearr_20996;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20968__$1,(10),inst_20921);
} else
{if((state_val_20969 === (5)))
{var inst_20912 = (state_20968[(7)]);var inst_20915 = cljs.core.seq_QMARK_.call(null,inst_20912);var state_20968__$1 = state_20968;if(inst_20915)
{var statearr_20997_21037 = state_20968__$1;(statearr_20997_21037[(1)] = (7));
} else
{var statearr_20998_21038 = state_20968__$1;(statearr_20998_21038[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (14)))
{var inst_20928 = (state_20968[(16)]);var inst_20935 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20928);var state_20968__$1 = state_20968;var statearr_20999_21039 = state_20968__$1;(statearr_20999_21039[(2)] = inst_20935);
(statearr_20999_21039[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (26)))
{var inst_20958 = (state_20968[(2)]);var state_20968__$1 = state_20968;var statearr_21000_21040 = state_20968__$1;(statearr_21000_21040[(2)] = inst_20958);
(statearr_21000_21040[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (16)))
{var inst_20938 = (state_20968[(2)]);var inst_20939 = calc_state.call(null);var inst_20912 = inst_20939;var state_20968__$1 = (function (){var statearr_21001 = state_20968;(statearr_21001[(7)] = inst_20912);
(statearr_21001[(18)] = inst_20938);
return statearr_21001;
})();var statearr_21002_21041 = state_20968__$1;(statearr_21002_21041[(2)] = null);
(statearr_21002_21041[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (10)))
{var inst_20927 = (state_20968[(8)]);var inst_20928 = (state_20968[(16)]);var inst_20926 = (state_20968[(2)]);var inst_20927__$1 = cljs.core.nth.call(null,inst_20926,(0),null);var inst_20928__$1 = cljs.core.nth.call(null,inst_20926,(1),null);var inst_20929 = (inst_20927__$1 == null);var inst_20930 = cljs.core._EQ_.call(null,inst_20928__$1,change);var inst_20931 = (inst_20929) || (inst_20930);var state_20968__$1 = (function (){var statearr_21003 = state_20968;(statearr_21003[(8)] = inst_20927__$1);
(statearr_21003[(16)] = inst_20928__$1);
return statearr_21003;
})();if(cljs.core.truth_(inst_20931))
{var statearr_21004_21042 = state_20968__$1;(statearr_21004_21042[(1)] = (11));
} else
{var statearr_21005_21043 = state_20968__$1;(statearr_21005_21043[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (18)))
{var inst_20923 = (state_20968[(15)]);var inst_20922 = (state_20968[(17)]);var inst_20928 = (state_20968[(16)]);var inst_20945 = cljs.core.empty_QMARK_.call(null,inst_20923);var inst_20946 = inst_20922.call(null,inst_20928);var inst_20947 = cljs.core.not.call(null,inst_20946);var inst_20948 = (inst_20945) && (inst_20947);var state_20968__$1 = state_20968;var statearr_21006_21044 = state_20968__$1;(statearr_21006_21044[(2)] = inst_20948);
(statearr_21006_21044[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20969 === (8)))
{var inst_20912 = (state_20968[(7)]);var state_20968__$1 = state_20968;var statearr_21007_21045 = state_20968__$1;(statearr_21007_21045[(2)] = inst_20912);
(statearr_21007_21045[(1)] = (9));
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
});})(c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21011[(0)] = state_machine__15975__auto__);
(statearr_21011[(1)] = (1));
return statearr_21011;
});
var state_machine__15975__auto____1 = (function (state_20968){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_20968);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21012){if((e21012 instanceof Object))
{var ex__15978__auto__ = e21012;var statearr_21013_21046 = state_20968;(statearr_21013_21046[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21047 = state_20968;
state_20968 = G__21047;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_20968){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_20968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_21014 = f__15990__auto__.call(null);(statearr_21014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21015);
return statearr_21014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21015,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj21049 = {};return obj21049;
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
return (function (p1__21050_SHARP_){if(cljs.core.truth_(p1__21050_SHARP_.call(null,topic)))
{return p1__21050_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21173 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21174){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21174 = meta21174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21173.cljs$lang$type = true;
cljs.core.async.t21173.cljs$lang$ctorStr = "cljs.core.async/t21173";
cljs.core.async.t21173.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21173");
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21175){var self__ = this;
var _21175__$1 = this;return self__.meta21174;
});})(mults,ensure_mult))
;
cljs.core.async.t21173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21175,meta21174__$1){var self__ = this;
var _21175__$1 = this;return (new cljs.core.async.t21173(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21174__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21173 = ((function (mults,ensure_mult){
return (function __GT_t21173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21174){return (new cljs.core.async.t21173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21174));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21173(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___21295 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21295,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21295,mults,ensure_mult,p){
return (function (state_21247){var state_val_21248 = (state_21247[(1)]);if((state_val_21248 === (7)))
{var inst_21243 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21249_21296 = state_21247__$1;(statearr_21249_21296[(2)] = inst_21243);
(statearr_21249_21296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (20)))
{var state_21247__$1 = state_21247;var statearr_21250_21297 = state_21247__$1;(statearr_21250_21297[(2)] = null);
(statearr_21250_21297[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (1)))
{var state_21247__$1 = state_21247;var statearr_21251_21298 = state_21247__$1;(statearr_21251_21298[(2)] = null);
(statearr_21251_21298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (24)))
{var inst_21226 = (state_21247[(7)]);var inst_21235 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21226);var state_21247__$1 = state_21247;var statearr_21252_21299 = state_21247__$1;(statearr_21252_21299[(2)] = inst_21235);
(statearr_21252_21299[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (4)))
{var inst_21178 = (state_21247[(8)]);var inst_21178__$1 = (state_21247[(2)]);var inst_21179 = (inst_21178__$1 == null);var state_21247__$1 = (function (){var statearr_21253 = state_21247;(statearr_21253[(8)] = inst_21178__$1);
return statearr_21253;
})();if(cljs.core.truth_(inst_21179))
{var statearr_21254_21300 = state_21247__$1;(statearr_21254_21300[(1)] = (5));
} else
{var statearr_21255_21301 = state_21247__$1;(statearr_21255_21301[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (15)))
{var inst_21220 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21256_21302 = state_21247__$1;(statearr_21256_21302[(2)] = inst_21220);
(statearr_21256_21302[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (21)))
{var inst_21240 = (state_21247[(2)]);var state_21247__$1 = (function (){var statearr_21257 = state_21247;(statearr_21257[(9)] = inst_21240);
return statearr_21257;
})();var statearr_21258_21303 = state_21247__$1;(statearr_21258_21303[(2)] = null);
(statearr_21258_21303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (13)))
{var inst_21202 = (state_21247[(10)]);var inst_21204 = cljs.core.chunked_seq_QMARK_.call(null,inst_21202);var state_21247__$1 = state_21247;if(inst_21204)
{var statearr_21259_21304 = state_21247__$1;(statearr_21259_21304[(1)] = (16));
} else
{var statearr_21260_21305 = state_21247__$1;(statearr_21260_21305[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (22)))
{var inst_21232 = (state_21247[(2)]);var state_21247__$1 = state_21247;if(cljs.core.truth_(inst_21232))
{var statearr_21261_21306 = state_21247__$1;(statearr_21261_21306[(1)] = (23));
} else
{var statearr_21262_21307 = state_21247__$1;(statearr_21262_21307[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (6)))
{var inst_21178 = (state_21247[(8)]);var inst_21228 = (state_21247[(11)]);var inst_21226 = (state_21247[(7)]);var inst_21226__$1 = topic_fn.call(null,inst_21178);var inst_21227 = cljs.core.deref.call(null,mults);var inst_21228__$1 = cljs.core.get.call(null,inst_21227,inst_21226__$1);var state_21247__$1 = (function (){var statearr_21263 = state_21247;(statearr_21263[(11)] = inst_21228__$1);
(statearr_21263[(7)] = inst_21226__$1);
return statearr_21263;
})();if(cljs.core.truth_(inst_21228__$1))
{var statearr_21264_21308 = state_21247__$1;(statearr_21264_21308[(1)] = (19));
} else
{var statearr_21265_21309 = state_21247__$1;(statearr_21265_21309[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (25)))
{var inst_21237 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21266_21310 = state_21247__$1;(statearr_21266_21310[(2)] = inst_21237);
(statearr_21266_21310[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (17)))
{var inst_21202 = (state_21247[(10)]);var inst_21211 = cljs.core.first.call(null,inst_21202);var inst_21212 = cljs.core.async.muxch_STAR_.call(null,inst_21211);var inst_21213 = cljs.core.async.close_BANG_.call(null,inst_21212);var inst_21214 = cljs.core.next.call(null,inst_21202);var inst_21188 = inst_21214;var inst_21189 = null;var inst_21190 = (0);var inst_21191 = (0);var state_21247__$1 = (function (){var statearr_21267 = state_21247;(statearr_21267[(12)] = inst_21213);
(statearr_21267[(13)] = inst_21190);
(statearr_21267[(14)] = inst_21191);
(statearr_21267[(15)] = inst_21188);
(statearr_21267[(16)] = inst_21189);
return statearr_21267;
})();var statearr_21268_21311 = state_21247__$1;(statearr_21268_21311[(2)] = null);
(statearr_21268_21311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (3)))
{var inst_21245 = (state_21247[(2)]);var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21247__$1,inst_21245);
} else
{if((state_val_21248 === (12)))
{var inst_21222 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21269_21312 = state_21247__$1;(statearr_21269_21312[(2)] = inst_21222);
(statearr_21269_21312[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (2)))
{var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,(4),ch);
} else
{if((state_val_21248 === (23)))
{var state_21247__$1 = state_21247;var statearr_21270_21313 = state_21247__$1;(statearr_21270_21313[(2)] = null);
(statearr_21270_21313[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (19)))
{var inst_21178 = (state_21247[(8)]);var inst_21228 = (state_21247[(11)]);var inst_21230 = cljs.core.async.muxch_STAR_.call(null,inst_21228);var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21247__$1,(22),inst_21230,inst_21178);
} else
{if((state_val_21248 === (11)))
{var inst_21202 = (state_21247[(10)]);var inst_21188 = (state_21247[(15)]);var inst_21202__$1 = cljs.core.seq.call(null,inst_21188);var state_21247__$1 = (function (){var statearr_21271 = state_21247;(statearr_21271[(10)] = inst_21202__$1);
return statearr_21271;
})();if(inst_21202__$1)
{var statearr_21272_21314 = state_21247__$1;(statearr_21272_21314[(1)] = (13));
} else
{var statearr_21273_21315 = state_21247__$1;(statearr_21273_21315[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (9)))
{var inst_21224 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21274_21316 = state_21247__$1;(statearr_21274_21316[(2)] = inst_21224);
(statearr_21274_21316[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (5)))
{var inst_21185 = cljs.core.deref.call(null,mults);var inst_21186 = cljs.core.vals.call(null,inst_21185);var inst_21187 = cljs.core.seq.call(null,inst_21186);var inst_21188 = inst_21187;var inst_21189 = null;var inst_21190 = (0);var inst_21191 = (0);var state_21247__$1 = (function (){var statearr_21275 = state_21247;(statearr_21275[(13)] = inst_21190);
(statearr_21275[(14)] = inst_21191);
(statearr_21275[(15)] = inst_21188);
(statearr_21275[(16)] = inst_21189);
return statearr_21275;
})();var statearr_21276_21317 = state_21247__$1;(statearr_21276_21317[(2)] = null);
(statearr_21276_21317[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (14)))
{var state_21247__$1 = state_21247;var statearr_21280_21318 = state_21247__$1;(statearr_21280_21318[(2)] = null);
(statearr_21280_21318[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (16)))
{var inst_21202 = (state_21247[(10)]);var inst_21206 = cljs.core.chunk_first.call(null,inst_21202);var inst_21207 = cljs.core.chunk_rest.call(null,inst_21202);var inst_21208 = cljs.core.count.call(null,inst_21206);var inst_21188 = inst_21207;var inst_21189 = inst_21206;var inst_21190 = inst_21208;var inst_21191 = (0);var state_21247__$1 = (function (){var statearr_21281 = state_21247;(statearr_21281[(13)] = inst_21190);
(statearr_21281[(14)] = inst_21191);
(statearr_21281[(15)] = inst_21188);
(statearr_21281[(16)] = inst_21189);
return statearr_21281;
})();var statearr_21282_21319 = state_21247__$1;(statearr_21282_21319[(2)] = null);
(statearr_21282_21319[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (10)))
{var inst_21190 = (state_21247[(13)]);var inst_21191 = (state_21247[(14)]);var inst_21188 = (state_21247[(15)]);var inst_21189 = (state_21247[(16)]);var inst_21196 = cljs.core._nth.call(null,inst_21189,inst_21191);var inst_21197 = cljs.core.async.muxch_STAR_.call(null,inst_21196);var inst_21198 = cljs.core.async.close_BANG_.call(null,inst_21197);var inst_21199 = (inst_21191 + (1));var tmp21277 = inst_21190;var tmp21278 = inst_21188;var tmp21279 = inst_21189;var inst_21188__$1 = tmp21278;var inst_21189__$1 = tmp21279;var inst_21190__$1 = tmp21277;var inst_21191__$1 = inst_21199;var state_21247__$1 = (function (){var statearr_21283 = state_21247;(statearr_21283[(13)] = inst_21190__$1);
(statearr_21283[(17)] = inst_21198);
(statearr_21283[(14)] = inst_21191__$1);
(statearr_21283[(15)] = inst_21188__$1);
(statearr_21283[(16)] = inst_21189__$1);
return statearr_21283;
})();var statearr_21284_21320 = state_21247__$1;(statearr_21284_21320[(2)] = null);
(statearr_21284_21320[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (18)))
{var inst_21217 = (state_21247[(2)]);var state_21247__$1 = state_21247;var statearr_21285_21321 = state_21247__$1;(statearr_21285_21321[(2)] = inst_21217);
(statearr_21285_21321[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21248 === (8)))
{var inst_21190 = (state_21247[(13)]);var inst_21191 = (state_21247[(14)]);var inst_21193 = (inst_21191 < inst_21190);var inst_21194 = inst_21193;var state_21247__$1 = state_21247;if(cljs.core.truth_(inst_21194))
{var statearr_21286_21322 = state_21247__$1;(statearr_21286_21322[(1)] = (10));
} else
{var statearr_21287_21323 = state_21247__$1;(statearr_21287_21323[(1)] = (11));
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
});})(c__15989__auto___21295,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___21295,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21291[(0)] = state_machine__15975__auto__);
(statearr_21291[(1)] = (1));
return statearr_21291;
});
var state_machine__15975__auto____1 = (function (state_21247){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21247);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21292){if((e21292 instanceof Object))
{var ex__15978__auto__ = e21292;var statearr_21293_21324 = state_21247;(statearr_21293_21324[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21292;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21325 = state_21247;
state_21247 = G__21325;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21247){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21295,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_21294 = f__15990__auto__.call(null);(statearr_21294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21295);
return statearr_21294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21295,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___21462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21432){var state_val_21433 = (state_21432[(1)]);if((state_val_21433 === (7)))
{var state_21432__$1 = state_21432;var statearr_21434_21463 = state_21432__$1;(statearr_21434_21463[(2)] = null);
(statearr_21434_21463[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (1)))
{var state_21432__$1 = state_21432;var statearr_21435_21464 = state_21432__$1;(statearr_21435_21464[(2)] = null);
(statearr_21435_21464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (4)))
{var inst_21396 = (state_21432[(7)]);var inst_21398 = (inst_21396 < cnt);var state_21432__$1 = state_21432;if(cljs.core.truth_(inst_21398))
{var statearr_21436_21465 = state_21432__$1;(statearr_21436_21465[(1)] = (6));
} else
{var statearr_21437_21466 = state_21432__$1;(statearr_21437_21466[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (15)))
{var inst_21428 = (state_21432[(2)]);var state_21432__$1 = state_21432;var statearr_21438_21467 = state_21432__$1;(statearr_21438_21467[(2)] = inst_21428);
(statearr_21438_21467[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (13)))
{var inst_21421 = cljs.core.async.close_BANG_.call(null,out);var state_21432__$1 = state_21432;var statearr_21439_21468 = state_21432__$1;(statearr_21439_21468[(2)] = inst_21421);
(statearr_21439_21468[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (6)))
{var state_21432__$1 = state_21432;var statearr_21440_21469 = state_21432__$1;(statearr_21440_21469[(2)] = null);
(statearr_21440_21469[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (3)))
{var inst_21430 = (state_21432[(2)]);var state_21432__$1 = state_21432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21432__$1,inst_21430);
} else
{if((state_val_21433 === (12)))
{var inst_21418 = (state_21432[(8)]);var inst_21418__$1 = (state_21432[(2)]);var inst_21419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21418__$1);var state_21432__$1 = (function (){var statearr_21441 = state_21432;(statearr_21441[(8)] = inst_21418__$1);
return statearr_21441;
})();if(cljs.core.truth_(inst_21419))
{var statearr_21442_21470 = state_21432__$1;(statearr_21442_21470[(1)] = (13));
} else
{var statearr_21443_21471 = state_21432__$1;(statearr_21443_21471[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (2)))
{var inst_21395 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21396 = (0);var state_21432__$1 = (function (){var statearr_21444 = state_21432;(statearr_21444[(9)] = inst_21395);
(statearr_21444[(7)] = inst_21396);
return statearr_21444;
})();var statearr_21445_21472 = state_21432__$1;(statearr_21445_21472[(2)] = null);
(statearr_21445_21472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (11)))
{var inst_21396 = (state_21432[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21432,(10),Object,null,(9));var inst_21405 = chs__$1.call(null,inst_21396);var inst_21406 = done.call(null,inst_21396);var inst_21407 = cljs.core.async.take_BANG_.call(null,inst_21405,inst_21406);var state_21432__$1 = state_21432;var statearr_21446_21473 = state_21432__$1;(statearr_21446_21473[(2)] = inst_21407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (9)))
{var inst_21396 = (state_21432[(7)]);var inst_21409 = (state_21432[(2)]);var inst_21410 = (inst_21396 + (1));var inst_21396__$1 = inst_21410;var state_21432__$1 = (function (){var statearr_21447 = state_21432;(statearr_21447[(10)] = inst_21409);
(statearr_21447[(7)] = inst_21396__$1);
return statearr_21447;
})();var statearr_21448_21474 = state_21432__$1;(statearr_21448_21474[(2)] = null);
(statearr_21448_21474[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (5)))
{var inst_21416 = (state_21432[(2)]);var state_21432__$1 = (function (){var statearr_21449 = state_21432;(statearr_21449[(11)] = inst_21416);
return statearr_21449;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21432__$1,(12),dchan);
} else
{if((state_val_21433 === (14)))
{var inst_21418 = (state_21432[(8)]);var inst_21423 = cljs.core.apply.call(null,f,inst_21418);var state_21432__$1 = state_21432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21432__$1,(16),out,inst_21423);
} else
{if((state_val_21433 === (16)))
{var inst_21425 = (state_21432[(2)]);var state_21432__$1 = (function (){var statearr_21450 = state_21432;(statearr_21450[(12)] = inst_21425);
return statearr_21450;
})();var statearr_21451_21475 = state_21432__$1;(statearr_21451_21475[(2)] = null);
(statearr_21451_21475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (10)))
{var inst_21400 = (state_21432[(2)]);var inst_21401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21432__$1 = (function (){var statearr_21452 = state_21432;(statearr_21452[(13)] = inst_21400);
return statearr_21452;
})();var statearr_21453_21476 = state_21432__$1;(statearr_21453_21476[(2)] = inst_21401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21433 === (8)))
{var inst_21414 = (state_21432[(2)]);var state_21432__$1 = state_21432;var statearr_21454_21477 = state_21432__$1;(statearr_21454_21477[(2)] = inst_21414);
(statearr_21454_21477[(1)] = (5));
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
});})(c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21458[(0)] = state_machine__15975__auto__);
(statearr_21458[(1)] = (1));
return statearr_21458;
});
var state_machine__15975__auto____1 = (function (state_21432){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21432);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21459){if((e21459 instanceof Object))
{var ex__15978__auto__ = e21459;var statearr_21460_21478 = state_21432;(statearr_21460_21478[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21479 = state_21432;
state_21432 = G__21479;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21432){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_21461 = f__15990__auto__.call(null);(statearr_21461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21462);
return statearr_21461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21462,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___21587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21587,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21587,out){
return (function (state_21563){var state_val_21564 = (state_21563[(1)]);if((state_val_21564 === (7)))
{var inst_21542 = (state_21563[(7)]);var inst_21543 = (state_21563[(8)]);var inst_21542__$1 = (state_21563[(2)]);var inst_21543__$1 = cljs.core.nth.call(null,inst_21542__$1,(0),null);var inst_21544 = cljs.core.nth.call(null,inst_21542__$1,(1),null);var inst_21545 = (inst_21543__$1 == null);var state_21563__$1 = (function (){var statearr_21565 = state_21563;(statearr_21565[(7)] = inst_21542__$1);
(statearr_21565[(8)] = inst_21543__$1);
(statearr_21565[(9)] = inst_21544);
return statearr_21565;
})();if(cljs.core.truth_(inst_21545))
{var statearr_21566_21588 = state_21563__$1;(statearr_21566_21588[(1)] = (8));
} else
{var statearr_21567_21589 = state_21563__$1;(statearr_21567_21589[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (1)))
{var inst_21534 = cljs.core.vec.call(null,chs);var inst_21535 = inst_21534;var state_21563__$1 = (function (){var statearr_21568 = state_21563;(statearr_21568[(10)] = inst_21535);
return statearr_21568;
})();var statearr_21569_21590 = state_21563__$1;(statearr_21569_21590[(2)] = null);
(statearr_21569_21590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (4)))
{var inst_21535 = (state_21563[(10)]);var state_21563__$1 = state_21563;return cljs.core.async.ioc_alts_BANG_.call(null,state_21563__$1,(7),inst_21535);
} else
{if((state_val_21564 === (6)))
{var inst_21559 = (state_21563[(2)]);var state_21563__$1 = state_21563;var statearr_21570_21591 = state_21563__$1;(statearr_21570_21591[(2)] = inst_21559);
(statearr_21570_21591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (3)))
{var inst_21561 = (state_21563[(2)]);var state_21563__$1 = state_21563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21563__$1,inst_21561);
} else
{if((state_val_21564 === (2)))
{var inst_21535 = (state_21563[(10)]);var inst_21537 = cljs.core.count.call(null,inst_21535);var inst_21538 = (inst_21537 > (0));var state_21563__$1 = state_21563;if(cljs.core.truth_(inst_21538))
{var statearr_21572_21592 = state_21563__$1;(statearr_21572_21592[(1)] = (4));
} else
{var statearr_21573_21593 = state_21563__$1;(statearr_21573_21593[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (11)))
{var inst_21535 = (state_21563[(10)]);var inst_21552 = (state_21563[(2)]);var tmp21571 = inst_21535;var inst_21535__$1 = tmp21571;var state_21563__$1 = (function (){var statearr_21574 = state_21563;(statearr_21574[(10)] = inst_21535__$1);
(statearr_21574[(11)] = inst_21552);
return statearr_21574;
})();var statearr_21575_21594 = state_21563__$1;(statearr_21575_21594[(2)] = null);
(statearr_21575_21594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (9)))
{var inst_21543 = (state_21563[(8)]);var state_21563__$1 = state_21563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21563__$1,(11),out,inst_21543);
} else
{if((state_val_21564 === (5)))
{var inst_21557 = cljs.core.async.close_BANG_.call(null,out);var state_21563__$1 = state_21563;var statearr_21576_21595 = state_21563__$1;(statearr_21576_21595[(2)] = inst_21557);
(statearr_21576_21595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (10)))
{var inst_21555 = (state_21563[(2)]);var state_21563__$1 = state_21563;var statearr_21577_21596 = state_21563__$1;(statearr_21577_21596[(2)] = inst_21555);
(statearr_21577_21596[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21564 === (8)))
{var inst_21542 = (state_21563[(7)]);var inst_21543 = (state_21563[(8)]);var inst_21535 = (state_21563[(10)]);var inst_21544 = (state_21563[(9)]);var inst_21547 = (function (){var c = inst_21544;var v = inst_21543;var vec__21540 = inst_21542;var cs = inst_21535;return ((function (c,v,vec__21540,cs,inst_21542,inst_21543,inst_21535,inst_21544,state_val_21564,c__15989__auto___21587,out){
return (function (p1__21480_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21480_SHARP_);
});
;})(c,v,vec__21540,cs,inst_21542,inst_21543,inst_21535,inst_21544,state_val_21564,c__15989__auto___21587,out))
})();var inst_21548 = cljs.core.filterv.call(null,inst_21547,inst_21535);var inst_21535__$1 = inst_21548;var state_21563__$1 = (function (){var statearr_21578 = state_21563;(statearr_21578[(10)] = inst_21535__$1);
return statearr_21578;
})();var statearr_21579_21597 = state_21563__$1;(statearr_21579_21597[(2)] = null);
(statearr_21579_21597[(1)] = (2));
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
});})(c__15989__auto___21587,out))
;return ((function (switch__15974__auto__,c__15989__auto___21587,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21583 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21583[(0)] = state_machine__15975__auto__);
(statearr_21583[(1)] = (1));
return statearr_21583;
});
var state_machine__15975__auto____1 = (function (state_21563){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21563);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21584){if((e21584 instanceof Object))
{var ex__15978__auto__ = e21584;var statearr_21585_21598 = state_21563;(statearr_21585_21598[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21599 = state_21563;
state_21563 = G__21599;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21563){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21587,out))
})();var state__15991__auto__ = (function (){var statearr_21586 = f__15990__auto__.call(null);(statearr_21586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21587);
return statearr_21586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21587,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___21692 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21692,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21692,out){
return (function (state_21669){var state_val_21670 = (state_21669[(1)]);if((state_val_21670 === (7)))
{var inst_21651 = (state_21669[(7)]);var inst_21651__$1 = (state_21669[(2)]);var inst_21652 = (inst_21651__$1 == null);var inst_21653 = cljs.core.not.call(null,inst_21652);var state_21669__$1 = (function (){var statearr_21671 = state_21669;(statearr_21671[(7)] = inst_21651__$1);
return statearr_21671;
})();if(inst_21653)
{var statearr_21672_21693 = state_21669__$1;(statearr_21672_21693[(1)] = (8));
} else
{var statearr_21673_21694 = state_21669__$1;(statearr_21673_21694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (1)))
{var inst_21646 = (0);var state_21669__$1 = (function (){var statearr_21674 = state_21669;(statearr_21674[(8)] = inst_21646);
return statearr_21674;
})();var statearr_21675_21695 = state_21669__$1;(statearr_21675_21695[(2)] = null);
(statearr_21675_21695[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (4)))
{var state_21669__$1 = state_21669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21669__$1,(7),ch);
} else
{if((state_val_21670 === (6)))
{var inst_21664 = (state_21669[(2)]);var state_21669__$1 = state_21669;var statearr_21676_21696 = state_21669__$1;(statearr_21676_21696[(2)] = inst_21664);
(statearr_21676_21696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (3)))
{var inst_21666 = (state_21669[(2)]);var inst_21667 = cljs.core.async.close_BANG_.call(null,out);var state_21669__$1 = (function (){var statearr_21677 = state_21669;(statearr_21677[(9)] = inst_21666);
return statearr_21677;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21669__$1,inst_21667);
} else
{if((state_val_21670 === (2)))
{var inst_21646 = (state_21669[(8)]);var inst_21648 = (inst_21646 < n);var state_21669__$1 = state_21669;if(cljs.core.truth_(inst_21648))
{var statearr_21678_21697 = state_21669__$1;(statearr_21678_21697[(1)] = (4));
} else
{var statearr_21679_21698 = state_21669__$1;(statearr_21679_21698[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (11)))
{var inst_21646 = (state_21669[(8)]);var inst_21656 = (state_21669[(2)]);var inst_21657 = (inst_21646 + (1));var inst_21646__$1 = inst_21657;var state_21669__$1 = (function (){var statearr_21680 = state_21669;(statearr_21680[(10)] = inst_21656);
(statearr_21680[(8)] = inst_21646__$1);
return statearr_21680;
})();var statearr_21681_21699 = state_21669__$1;(statearr_21681_21699[(2)] = null);
(statearr_21681_21699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (9)))
{var state_21669__$1 = state_21669;var statearr_21682_21700 = state_21669__$1;(statearr_21682_21700[(2)] = null);
(statearr_21682_21700[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (5)))
{var state_21669__$1 = state_21669;var statearr_21683_21701 = state_21669__$1;(statearr_21683_21701[(2)] = null);
(statearr_21683_21701[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (10)))
{var inst_21661 = (state_21669[(2)]);var state_21669__$1 = state_21669;var statearr_21684_21702 = state_21669__$1;(statearr_21684_21702[(2)] = inst_21661);
(statearr_21684_21702[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21670 === (8)))
{var inst_21651 = (state_21669[(7)]);var state_21669__$1 = state_21669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21669__$1,(11),out,inst_21651);
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
});})(c__15989__auto___21692,out))
;return ((function (switch__15974__auto__,c__15989__auto___21692,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21688[(0)] = state_machine__15975__auto__);
(statearr_21688[(1)] = (1));
return statearr_21688;
});
var state_machine__15975__auto____1 = (function (state_21669){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21669);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21689){if((e21689 instanceof Object))
{var ex__15978__auto__ = e21689;var statearr_21690_21703 = state_21669;(statearr_21690_21703[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21669);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21704 = state_21669;
state_21669 = G__21704;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21669){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21692,out))
})();var state__15991__auto__ = (function (){var statearr_21691 = f__15990__auto__.call(null);(statearr_21691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21692);
return statearr_21691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21692,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21712 = (function (ch,f,map_LT_,meta21713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21713 = meta21713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21712.cljs$lang$type = true;
cljs.core.async.t21712.cljs$lang$ctorStr = "cljs.core.async/t21712";
cljs.core.async.t21712.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21712");
});
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21715 = (function (fn1,_,meta21713,ch,f,map_LT_,meta21716){
this.fn1 = fn1;
this._ = _;
this.meta21713 = meta21713;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21716 = meta21716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21715.cljs$lang$type = true;
cljs.core.async.t21715.cljs$lang$ctorStr = "cljs.core.async/t21715";
cljs.core.async.t21715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21715");
});})(___$1))
;
cljs.core.async.t21715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21705_SHARP_){return f1.call(null,(((p1__21705_SHARP_ == null))?null:self__.f.call(null,p1__21705_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21717){var self__ = this;
var _21717__$1 = this;return self__.meta21716;
});})(___$1))
;
cljs.core.async.t21715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21717,meta21716__$1){var self__ = this;
var _21717__$1 = this;return (new cljs.core.async.t21715(self__.fn1,self__._,self__.meta21713,self__.ch,self__.f,self__.map_LT_,meta21716__$1));
});})(___$1))
;
cljs.core.async.__GT_t21715 = ((function (___$1){
return (function __GT_t21715(fn1__$1,___$2,meta21713__$1,ch__$2,f__$2,map_LT___$2,meta21716){return (new cljs.core.async.t21715(fn1__$1,___$2,meta21713__$1,ch__$2,f__$2,map_LT___$2,meta21716));
});})(___$1))
;
}
return (new cljs.core.async.t21715(fn1,___$1,self__.meta21713,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21714){var self__ = this;
var _21714__$1 = this;return self__.meta21713;
});
cljs.core.async.t21712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21714,meta21713__$1){var self__ = this;
var _21714__$1 = this;return (new cljs.core.async.t21712(self__.ch,self__.f,self__.map_LT_,meta21713__$1));
});
cljs.core.async.__GT_t21712 = (function __GT_t21712(ch__$1,f__$1,map_LT___$1,meta21713){return (new cljs.core.async.t21712(ch__$1,f__$1,map_LT___$1,meta21713));
});
}
return (new cljs.core.async.t21712(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21721 = (function (ch,f,map_GT_,meta21722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21722 = meta21722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21721.cljs$lang$type = true;
cljs.core.async.t21721.cljs$lang$ctorStr = "cljs.core.async/t21721";
cljs.core.async.t21721.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21721");
});
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21723){var self__ = this;
var _21723__$1 = this;return self__.meta21722;
});
cljs.core.async.t21721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21723,meta21722__$1){var self__ = this;
var _21723__$1 = this;return (new cljs.core.async.t21721(self__.ch,self__.f,self__.map_GT_,meta21722__$1));
});
cljs.core.async.__GT_t21721 = (function __GT_t21721(ch__$1,f__$1,map_GT___$1,meta21722){return (new cljs.core.async.t21721(ch__$1,f__$1,map_GT___$1,meta21722));
});
}
return (new cljs.core.async.t21721(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21727 = (function (ch,p,filter_GT_,meta21728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21728 = meta21728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21727.cljs$lang$type = true;
cljs.core.async.t21727.cljs$lang$ctorStr = "cljs.core.async/t21727";
cljs.core.async.t21727.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21727");
});
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21729){var self__ = this;
var _21729__$1 = this;return self__.meta21728;
});
cljs.core.async.t21727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21729,meta21728__$1){var self__ = this;
var _21729__$1 = this;return (new cljs.core.async.t21727(self__.ch,self__.p,self__.filter_GT_,meta21728__$1));
});
cljs.core.async.__GT_t21727 = (function __GT_t21727(ch__$1,p__$1,filter_GT___$1,meta21728){return (new cljs.core.async.t21727(ch__$1,p__$1,filter_GT___$1,meta21728));
});
}
return (new cljs.core.async.t21727(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___21812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21812,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21812,out){
return (function (state_21791){var state_val_21792 = (state_21791[(1)]);if((state_val_21792 === (7)))
{var inst_21787 = (state_21791[(2)]);var state_21791__$1 = state_21791;var statearr_21793_21813 = state_21791__$1;(statearr_21793_21813[(2)] = inst_21787);
(statearr_21793_21813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (1)))
{var state_21791__$1 = state_21791;var statearr_21794_21814 = state_21791__$1;(statearr_21794_21814[(2)] = null);
(statearr_21794_21814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (4)))
{var inst_21773 = (state_21791[(7)]);var inst_21773__$1 = (state_21791[(2)]);var inst_21774 = (inst_21773__$1 == null);var state_21791__$1 = (function (){var statearr_21795 = state_21791;(statearr_21795[(7)] = inst_21773__$1);
return statearr_21795;
})();if(cljs.core.truth_(inst_21774))
{var statearr_21796_21815 = state_21791__$1;(statearr_21796_21815[(1)] = (5));
} else
{var statearr_21797_21816 = state_21791__$1;(statearr_21797_21816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (6)))
{var inst_21773 = (state_21791[(7)]);var inst_21778 = p.call(null,inst_21773);var state_21791__$1 = state_21791;if(cljs.core.truth_(inst_21778))
{var statearr_21798_21817 = state_21791__$1;(statearr_21798_21817[(1)] = (8));
} else
{var statearr_21799_21818 = state_21791__$1;(statearr_21799_21818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (3)))
{var inst_21789 = (state_21791[(2)]);var state_21791__$1 = state_21791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21791__$1,inst_21789);
} else
{if((state_val_21792 === (2)))
{var state_21791__$1 = state_21791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21791__$1,(4),ch);
} else
{if((state_val_21792 === (11)))
{var inst_21781 = (state_21791[(2)]);var state_21791__$1 = state_21791;var statearr_21800_21819 = state_21791__$1;(statearr_21800_21819[(2)] = inst_21781);
(statearr_21800_21819[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (9)))
{var state_21791__$1 = state_21791;var statearr_21801_21820 = state_21791__$1;(statearr_21801_21820[(2)] = null);
(statearr_21801_21820[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (5)))
{var inst_21776 = cljs.core.async.close_BANG_.call(null,out);var state_21791__$1 = state_21791;var statearr_21802_21821 = state_21791__$1;(statearr_21802_21821[(2)] = inst_21776);
(statearr_21802_21821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (10)))
{var inst_21784 = (state_21791[(2)]);var state_21791__$1 = (function (){var statearr_21803 = state_21791;(statearr_21803[(8)] = inst_21784);
return statearr_21803;
})();var statearr_21804_21822 = state_21791__$1;(statearr_21804_21822[(2)] = null);
(statearr_21804_21822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21792 === (8)))
{var inst_21773 = (state_21791[(7)]);var state_21791__$1 = state_21791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21791__$1,(11),out,inst_21773);
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
});})(c__15989__auto___21812,out))
;return ((function (switch__15974__auto__,c__15989__auto___21812,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21808 = [null,null,null,null,null,null,null,null,null];(statearr_21808[(0)] = state_machine__15975__auto__);
(statearr_21808[(1)] = (1));
return statearr_21808;
});
var state_machine__15975__auto____1 = (function (state_21791){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21791);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21809){if((e21809 instanceof Object))
{var ex__15978__auto__ = e21809;var statearr_21810_21823 = state_21791;(statearr_21810_21823[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21824 = state_21791;
state_21791 = G__21824;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21791){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21812,out))
})();var state__15991__auto__ = (function (){var statearr_21811 = f__15990__auto__.call(null);(statearr_21811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21812);
return statearr_21811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21812,out))
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
return (function (state_21990){var state_val_21991 = (state_21990[(1)]);if((state_val_21991 === (7)))
{var inst_21986 = (state_21990[(2)]);var state_21990__$1 = state_21990;var statearr_21992_22033 = state_21990__$1;(statearr_21992_22033[(2)] = inst_21986);
(statearr_21992_22033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (20)))
{var inst_21956 = (state_21990[(7)]);var inst_21967 = (state_21990[(2)]);var inst_21968 = cljs.core.next.call(null,inst_21956);var inst_21942 = inst_21968;var inst_21943 = null;var inst_21944 = (0);var inst_21945 = (0);var state_21990__$1 = (function (){var statearr_21993 = state_21990;(statearr_21993[(8)] = inst_21945);
(statearr_21993[(9)] = inst_21943);
(statearr_21993[(10)] = inst_21944);
(statearr_21993[(11)] = inst_21942);
(statearr_21993[(12)] = inst_21967);
return statearr_21993;
})();var statearr_21994_22034 = state_21990__$1;(statearr_21994_22034[(2)] = null);
(statearr_21994_22034[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (1)))
{var state_21990__$1 = state_21990;var statearr_21995_22035 = state_21990__$1;(statearr_21995_22035[(2)] = null);
(statearr_21995_22035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (4)))
{var inst_21931 = (state_21990[(13)]);var inst_21931__$1 = (state_21990[(2)]);var inst_21932 = (inst_21931__$1 == null);var state_21990__$1 = (function (){var statearr_21996 = state_21990;(statearr_21996[(13)] = inst_21931__$1);
return statearr_21996;
})();if(cljs.core.truth_(inst_21932))
{var statearr_21997_22036 = state_21990__$1;(statearr_21997_22036[(1)] = (5));
} else
{var statearr_21998_22037 = state_21990__$1;(statearr_21998_22037[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (15)))
{var state_21990__$1 = state_21990;var statearr_22002_22038 = state_21990__$1;(statearr_22002_22038[(2)] = null);
(statearr_22002_22038[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (21)))
{var state_21990__$1 = state_21990;var statearr_22003_22039 = state_21990__$1;(statearr_22003_22039[(2)] = null);
(statearr_22003_22039[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (13)))
{var inst_21945 = (state_21990[(8)]);var inst_21943 = (state_21990[(9)]);var inst_21944 = (state_21990[(10)]);var inst_21942 = (state_21990[(11)]);var inst_21952 = (state_21990[(2)]);var inst_21953 = (inst_21945 + (1));var tmp21999 = inst_21943;var tmp22000 = inst_21944;var tmp22001 = inst_21942;var inst_21942__$1 = tmp22001;var inst_21943__$1 = tmp21999;var inst_21944__$1 = tmp22000;var inst_21945__$1 = inst_21953;var state_21990__$1 = (function (){var statearr_22004 = state_21990;(statearr_22004[(8)] = inst_21945__$1);
(statearr_22004[(14)] = inst_21952);
(statearr_22004[(9)] = inst_21943__$1);
(statearr_22004[(10)] = inst_21944__$1);
(statearr_22004[(11)] = inst_21942__$1);
return statearr_22004;
})();var statearr_22005_22040 = state_21990__$1;(statearr_22005_22040[(2)] = null);
(statearr_22005_22040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (22)))
{var state_21990__$1 = state_21990;var statearr_22006_22041 = state_21990__$1;(statearr_22006_22041[(2)] = null);
(statearr_22006_22041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (6)))
{var inst_21931 = (state_21990[(13)]);var inst_21940 = f.call(null,inst_21931);var inst_21941 = cljs.core.seq.call(null,inst_21940);var inst_21942 = inst_21941;var inst_21943 = null;var inst_21944 = (0);var inst_21945 = (0);var state_21990__$1 = (function (){var statearr_22007 = state_21990;(statearr_22007[(8)] = inst_21945);
(statearr_22007[(9)] = inst_21943);
(statearr_22007[(10)] = inst_21944);
(statearr_22007[(11)] = inst_21942);
return statearr_22007;
})();var statearr_22008_22042 = state_21990__$1;(statearr_22008_22042[(2)] = null);
(statearr_22008_22042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (17)))
{var inst_21956 = (state_21990[(7)]);var inst_21960 = cljs.core.chunk_first.call(null,inst_21956);var inst_21961 = cljs.core.chunk_rest.call(null,inst_21956);var inst_21962 = cljs.core.count.call(null,inst_21960);var inst_21942 = inst_21961;var inst_21943 = inst_21960;var inst_21944 = inst_21962;var inst_21945 = (0);var state_21990__$1 = (function (){var statearr_22009 = state_21990;(statearr_22009[(8)] = inst_21945);
(statearr_22009[(9)] = inst_21943);
(statearr_22009[(10)] = inst_21944);
(statearr_22009[(11)] = inst_21942);
return statearr_22009;
})();var statearr_22010_22043 = state_21990__$1;(statearr_22010_22043[(2)] = null);
(statearr_22010_22043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (3)))
{var inst_21988 = (state_21990[(2)]);var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21990__$1,inst_21988);
} else
{if((state_val_21991 === (12)))
{var inst_21976 = (state_21990[(2)]);var state_21990__$1 = state_21990;var statearr_22011_22044 = state_21990__$1;(statearr_22011_22044[(2)] = inst_21976);
(statearr_22011_22044[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (2)))
{var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21990__$1,(4),in$);
} else
{if((state_val_21991 === (23)))
{var inst_21984 = (state_21990[(2)]);var state_21990__$1 = state_21990;var statearr_22012_22045 = state_21990__$1;(statearr_22012_22045[(2)] = inst_21984);
(statearr_22012_22045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (19)))
{var inst_21971 = (state_21990[(2)]);var state_21990__$1 = state_21990;var statearr_22013_22046 = state_21990__$1;(statearr_22013_22046[(2)] = inst_21971);
(statearr_22013_22046[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (11)))
{var inst_21942 = (state_21990[(11)]);var inst_21956 = (state_21990[(7)]);var inst_21956__$1 = cljs.core.seq.call(null,inst_21942);var state_21990__$1 = (function (){var statearr_22014 = state_21990;(statearr_22014[(7)] = inst_21956__$1);
return statearr_22014;
})();if(inst_21956__$1)
{var statearr_22015_22047 = state_21990__$1;(statearr_22015_22047[(1)] = (14));
} else
{var statearr_22016_22048 = state_21990__$1;(statearr_22016_22048[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (9)))
{var inst_21978 = (state_21990[(2)]);var inst_21979 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21990__$1 = (function (){var statearr_22017 = state_21990;(statearr_22017[(15)] = inst_21978);
return statearr_22017;
})();if(cljs.core.truth_(inst_21979))
{var statearr_22018_22049 = state_21990__$1;(statearr_22018_22049[(1)] = (21));
} else
{var statearr_22019_22050 = state_21990__$1;(statearr_22019_22050[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (5)))
{var inst_21934 = cljs.core.async.close_BANG_.call(null,out);var state_21990__$1 = state_21990;var statearr_22020_22051 = state_21990__$1;(statearr_22020_22051[(2)] = inst_21934);
(statearr_22020_22051[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (14)))
{var inst_21956 = (state_21990[(7)]);var inst_21958 = cljs.core.chunked_seq_QMARK_.call(null,inst_21956);var state_21990__$1 = state_21990;if(inst_21958)
{var statearr_22021_22052 = state_21990__$1;(statearr_22021_22052[(1)] = (17));
} else
{var statearr_22022_22053 = state_21990__$1;(statearr_22022_22053[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (16)))
{var inst_21974 = (state_21990[(2)]);var state_21990__$1 = state_21990;var statearr_22023_22054 = state_21990__$1;(statearr_22023_22054[(2)] = inst_21974);
(statearr_22023_22054[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21991 === (10)))
{var inst_21945 = (state_21990[(8)]);var inst_21943 = (state_21990[(9)]);var inst_21950 = cljs.core._nth.call(null,inst_21943,inst_21945);var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21990__$1,(13),out,inst_21950);
} else
{if((state_val_21991 === (18)))
{var inst_21956 = (state_21990[(7)]);var inst_21965 = cljs.core.first.call(null,inst_21956);var state_21990__$1 = state_21990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21990__$1,(20),out,inst_21965);
} else
{if((state_val_21991 === (8)))
{var inst_21945 = (state_21990[(8)]);var inst_21944 = (state_21990[(10)]);var inst_21947 = (inst_21945 < inst_21944);var inst_21948 = inst_21947;var state_21990__$1 = state_21990;if(cljs.core.truth_(inst_21948))
{var statearr_22024_22055 = state_21990__$1;(statearr_22024_22055[(1)] = (10));
} else
{var statearr_22025_22056 = state_21990__$1;(statearr_22025_22056[(1)] = (11));
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
var state_machine__15975__auto____0 = (function (){var statearr_22029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22029[(0)] = state_machine__15975__auto__);
(statearr_22029[(1)] = (1));
return statearr_22029;
});
var state_machine__15975__auto____1 = (function (state_21990){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21990);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22030){if((e22030 instanceof Object))
{var ex__15978__auto__ = e22030;var statearr_22031_22057 = state_21990;(statearr_22031_22057[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22030;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22058 = state_21990;
state_21990 = G__22058;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21990){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_22032 = f__15990__auto__.call(null);(statearr_22032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22032;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___22155 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22155,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22155,out){
return (function (state_22130){var state_val_22131 = (state_22130[(1)]);if((state_val_22131 === (7)))
{var inst_22125 = (state_22130[(2)]);var state_22130__$1 = state_22130;var statearr_22132_22156 = state_22130__$1;(statearr_22132_22156[(2)] = inst_22125);
(statearr_22132_22156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (1)))
{var inst_22107 = null;var state_22130__$1 = (function (){var statearr_22133 = state_22130;(statearr_22133[(7)] = inst_22107);
return statearr_22133;
})();var statearr_22134_22157 = state_22130__$1;(statearr_22134_22157[(2)] = null);
(statearr_22134_22157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (4)))
{var inst_22110 = (state_22130[(8)]);var inst_22110__$1 = (state_22130[(2)]);var inst_22111 = (inst_22110__$1 == null);var inst_22112 = cljs.core.not.call(null,inst_22111);var state_22130__$1 = (function (){var statearr_22135 = state_22130;(statearr_22135[(8)] = inst_22110__$1);
return statearr_22135;
})();if(inst_22112)
{var statearr_22136_22158 = state_22130__$1;(statearr_22136_22158[(1)] = (5));
} else
{var statearr_22137_22159 = state_22130__$1;(statearr_22137_22159[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (6)))
{var state_22130__$1 = state_22130;var statearr_22138_22160 = state_22130__$1;(statearr_22138_22160[(2)] = null);
(statearr_22138_22160[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (3)))
{var inst_22127 = (state_22130[(2)]);var inst_22128 = cljs.core.async.close_BANG_.call(null,out);var state_22130__$1 = (function (){var statearr_22139 = state_22130;(statearr_22139[(9)] = inst_22127);
return statearr_22139;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22130__$1,inst_22128);
} else
{if((state_val_22131 === (2)))
{var state_22130__$1 = state_22130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22130__$1,(4),ch);
} else
{if((state_val_22131 === (11)))
{var inst_22110 = (state_22130[(8)]);var inst_22119 = (state_22130[(2)]);var inst_22107 = inst_22110;var state_22130__$1 = (function (){var statearr_22140 = state_22130;(statearr_22140[(10)] = inst_22119);
(statearr_22140[(7)] = inst_22107);
return statearr_22140;
})();var statearr_22141_22161 = state_22130__$1;(statearr_22141_22161[(2)] = null);
(statearr_22141_22161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (9)))
{var inst_22110 = (state_22130[(8)]);var state_22130__$1 = state_22130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22130__$1,(11),out,inst_22110);
} else
{if((state_val_22131 === (5)))
{var inst_22107 = (state_22130[(7)]);var inst_22110 = (state_22130[(8)]);var inst_22114 = cljs.core._EQ_.call(null,inst_22110,inst_22107);var state_22130__$1 = state_22130;if(inst_22114)
{var statearr_22143_22162 = state_22130__$1;(statearr_22143_22162[(1)] = (8));
} else
{var statearr_22144_22163 = state_22130__$1;(statearr_22144_22163[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (10)))
{var inst_22122 = (state_22130[(2)]);var state_22130__$1 = state_22130;var statearr_22145_22164 = state_22130__$1;(statearr_22145_22164[(2)] = inst_22122);
(statearr_22145_22164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22131 === (8)))
{var inst_22107 = (state_22130[(7)]);var tmp22142 = inst_22107;var inst_22107__$1 = tmp22142;var state_22130__$1 = (function (){var statearr_22146 = state_22130;(statearr_22146[(7)] = inst_22107__$1);
return statearr_22146;
})();var statearr_22147_22165 = state_22130__$1;(statearr_22147_22165[(2)] = null);
(statearr_22147_22165[(1)] = (2));
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
});})(c__15989__auto___22155,out))
;return ((function (switch__15974__auto__,c__15989__auto___22155,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22151 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22151[(0)] = state_machine__15975__auto__);
(statearr_22151[(1)] = (1));
return statearr_22151;
});
var state_machine__15975__auto____1 = (function (state_22130){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22130);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22152){if((e22152 instanceof Object))
{var ex__15978__auto__ = e22152;var statearr_22153_22166 = state_22130;(statearr_22153_22166[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22130);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22167 = state_22130;
state_22130 = G__22167;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22130){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22155,out))
})();var state__15991__auto__ = (function (){var statearr_22154 = f__15990__auto__.call(null);(statearr_22154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22155);
return statearr_22154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22155,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___22302 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22302,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22302,out){
return (function (state_22272){var state_val_22273 = (state_22272[(1)]);if((state_val_22273 === (7)))
{var inst_22268 = (state_22272[(2)]);var state_22272__$1 = state_22272;var statearr_22274_22303 = state_22272__$1;(statearr_22274_22303[(2)] = inst_22268);
(statearr_22274_22303[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (1)))
{var inst_22235 = (new Array(n));var inst_22236 = inst_22235;var inst_22237 = (0);var state_22272__$1 = (function (){var statearr_22275 = state_22272;(statearr_22275[(7)] = inst_22237);
(statearr_22275[(8)] = inst_22236);
return statearr_22275;
})();var statearr_22276_22304 = state_22272__$1;(statearr_22276_22304[(2)] = null);
(statearr_22276_22304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (4)))
{var inst_22240 = (state_22272[(9)]);var inst_22240__$1 = (state_22272[(2)]);var inst_22241 = (inst_22240__$1 == null);var inst_22242 = cljs.core.not.call(null,inst_22241);var state_22272__$1 = (function (){var statearr_22277 = state_22272;(statearr_22277[(9)] = inst_22240__$1);
return statearr_22277;
})();if(inst_22242)
{var statearr_22278_22305 = state_22272__$1;(statearr_22278_22305[(1)] = (5));
} else
{var statearr_22279_22306 = state_22272__$1;(statearr_22279_22306[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (15)))
{var inst_22262 = (state_22272[(2)]);var state_22272__$1 = state_22272;var statearr_22280_22307 = state_22272__$1;(statearr_22280_22307[(2)] = inst_22262);
(statearr_22280_22307[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (13)))
{var state_22272__$1 = state_22272;var statearr_22281_22308 = state_22272__$1;(statearr_22281_22308[(2)] = null);
(statearr_22281_22308[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (6)))
{var inst_22237 = (state_22272[(7)]);var inst_22258 = (inst_22237 > (0));var state_22272__$1 = state_22272;if(cljs.core.truth_(inst_22258))
{var statearr_22282_22309 = state_22272__$1;(statearr_22282_22309[(1)] = (12));
} else
{var statearr_22283_22310 = state_22272__$1;(statearr_22283_22310[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (3)))
{var inst_22270 = (state_22272[(2)]);var state_22272__$1 = state_22272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22272__$1,inst_22270);
} else
{if((state_val_22273 === (12)))
{var inst_22236 = (state_22272[(8)]);var inst_22260 = cljs.core.vec.call(null,inst_22236);var state_22272__$1 = state_22272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22272__$1,(15),out,inst_22260);
} else
{if((state_val_22273 === (2)))
{var state_22272__$1 = state_22272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22272__$1,(4),ch);
} else
{if((state_val_22273 === (11)))
{var inst_22252 = (state_22272[(2)]);var inst_22253 = (new Array(n));var inst_22236 = inst_22253;var inst_22237 = (0);var state_22272__$1 = (function (){var statearr_22284 = state_22272;(statearr_22284[(10)] = inst_22252);
(statearr_22284[(7)] = inst_22237);
(statearr_22284[(8)] = inst_22236);
return statearr_22284;
})();var statearr_22285_22311 = state_22272__$1;(statearr_22285_22311[(2)] = null);
(statearr_22285_22311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (9)))
{var inst_22236 = (state_22272[(8)]);var inst_22250 = cljs.core.vec.call(null,inst_22236);var state_22272__$1 = state_22272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22272__$1,(11),out,inst_22250);
} else
{if((state_val_22273 === (5)))
{var inst_22245 = (state_22272[(11)]);var inst_22237 = (state_22272[(7)]);var inst_22236 = (state_22272[(8)]);var inst_22240 = (state_22272[(9)]);var inst_22244 = (inst_22236[inst_22237] = inst_22240);var inst_22245__$1 = (inst_22237 + (1));var inst_22246 = (inst_22245__$1 < n);var state_22272__$1 = (function (){var statearr_22286 = state_22272;(statearr_22286[(11)] = inst_22245__$1);
(statearr_22286[(12)] = inst_22244);
return statearr_22286;
})();if(cljs.core.truth_(inst_22246))
{var statearr_22287_22312 = state_22272__$1;(statearr_22287_22312[(1)] = (8));
} else
{var statearr_22288_22313 = state_22272__$1;(statearr_22288_22313[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (14)))
{var inst_22265 = (state_22272[(2)]);var inst_22266 = cljs.core.async.close_BANG_.call(null,out);var state_22272__$1 = (function (){var statearr_22290 = state_22272;(statearr_22290[(13)] = inst_22265);
return statearr_22290;
})();var statearr_22291_22314 = state_22272__$1;(statearr_22291_22314[(2)] = inst_22266);
(statearr_22291_22314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (10)))
{var inst_22256 = (state_22272[(2)]);var state_22272__$1 = state_22272;var statearr_22292_22315 = state_22272__$1;(statearr_22292_22315[(2)] = inst_22256);
(statearr_22292_22315[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22273 === (8)))
{var inst_22245 = (state_22272[(11)]);var inst_22236 = (state_22272[(8)]);var tmp22289 = inst_22236;var inst_22236__$1 = tmp22289;var inst_22237 = inst_22245;var state_22272__$1 = (function (){var statearr_22293 = state_22272;(statearr_22293[(7)] = inst_22237);
(statearr_22293[(8)] = inst_22236__$1);
return statearr_22293;
})();var statearr_22294_22316 = state_22272__$1;(statearr_22294_22316[(2)] = null);
(statearr_22294_22316[(1)] = (2));
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
});})(c__15989__auto___22302,out))
;return ((function (switch__15974__auto__,c__15989__auto___22302,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22298[(0)] = state_machine__15975__auto__);
(statearr_22298[(1)] = (1));
return statearr_22298;
});
var state_machine__15975__auto____1 = (function (state_22272){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22272);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22299){if((e22299 instanceof Object))
{var ex__15978__auto__ = e22299;var statearr_22300_22317 = state_22272;(statearr_22300_22317[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22318 = state_22272;
state_22272 = G__22318;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22272){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22302,out))
})();var state__15991__auto__ = (function (){var statearr_22301 = f__15990__auto__.call(null);(statearr_22301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22302);
return statearr_22301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22302,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___22461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22461,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22461,out){
return (function (state_22431){var state_val_22432 = (state_22431[(1)]);if((state_val_22432 === (7)))
{var inst_22427 = (state_22431[(2)]);var state_22431__$1 = state_22431;var statearr_22433_22462 = state_22431__$1;(statearr_22433_22462[(2)] = inst_22427);
(statearr_22433_22462[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (1)))
{var inst_22390 = [];var inst_22391 = inst_22390;var inst_22392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_22431__$1 = (function (){var statearr_22434 = state_22431;(statearr_22434[(7)] = inst_22392);
(statearr_22434[(8)] = inst_22391);
return statearr_22434;
})();var statearr_22435_22463 = state_22431__$1;(statearr_22435_22463[(2)] = null);
(statearr_22435_22463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (4)))
{var inst_22395 = (state_22431[(9)]);var inst_22395__$1 = (state_22431[(2)]);var inst_22396 = (inst_22395__$1 == null);var inst_22397 = cljs.core.not.call(null,inst_22396);var state_22431__$1 = (function (){var statearr_22436 = state_22431;(statearr_22436[(9)] = inst_22395__$1);
return statearr_22436;
})();if(inst_22397)
{var statearr_22437_22464 = state_22431__$1;(statearr_22437_22464[(1)] = (5));
} else
{var statearr_22438_22465 = state_22431__$1;(statearr_22438_22465[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (15)))
{var inst_22421 = (state_22431[(2)]);var state_22431__$1 = state_22431;var statearr_22439_22466 = state_22431__$1;(statearr_22439_22466[(2)] = inst_22421);
(statearr_22439_22466[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (13)))
{var state_22431__$1 = state_22431;var statearr_22440_22467 = state_22431__$1;(statearr_22440_22467[(2)] = null);
(statearr_22440_22467[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (6)))
{var inst_22391 = (state_22431[(8)]);var inst_22416 = inst_22391.length;var inst_22417 = (inst_22416 > (0));var state_22431__$1 = state_22431;if(cljs.core.truth_(inst_22417))
{var statearr_22441_22468 = state_22431__$1;(statearr_22441_22468[(1)] = (12));
} else
{var statearr_22442_22469 = state_22431__$1;(statearr_22442_22469[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (3)))
{var inst_22429 = (state_22431[(2)]);var state_22431__$1 = state_22431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22431__$1,inst_22429);
} else
{if((state_val_22432 === (12)))
{var inst_22391 = (state_22431[(8)]);var inst_22419 = cljs.core.vec.call(null,inst_22391);var state_22431__$1 = state_22431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(15),out,inst_22419);
} else
{if((state_val_22432 === (2)))
{var state_22431__$1 = state_22431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22431__$1,(4),ch);
} else
{if((state_val_22432 === (11)))
{var inst_22399 = (state_22431[(10)]);var inst_22395 = (state_22431[(9)]);var inst_22409 = (state_22431[(2)]);var inst_22410 = [];var inst_22411 = inst_22410.push(inst_22395);var inst_22391 = inst_22410;var inst_22392 = inst_22399;var state_22431__$1 = (function (){var statearr_22443 = state_22431;(statearr_22443[(7)] = inst_22392);
(statearr_22443[(11)] = inst_22411);
(statearr_22443[(8)] = inst_22391);
(statearr_22443[(12)] = inst_22409);
return statearr_22443;
})();var statearr_22444_22470 = state_22431__$1;(statearr_22444_22470[(2)] = null);
(statearr_22444_22470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (9)))
{var inst_22391 = (state_22431[(8)]);var inst_22407 = cljs.core.vec.call(null,inst_22391);var state_22431__$1 = state_22431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(11),out,inst_22407);
} else
{if((state_val_22432 === (5)))
{var inst_22392 = (state_22431[(7)]);var inst_22399 = (state_22431[(10)]);var inst_22395 = (state_22431[(9)]);var inst_22399__$1 = f.call(null,inst_22395);var inst_22400 = cljs.core._EQ_.call(null,inst_22399__$1,inst_22392);var inst_22401 = cljs.core.keyword_identical_QMARK_.call(null,inst_22392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_22402 = (inst_22400) || (inst_22401);var state_22431__$1 = (function (){var statearr_22445 = state_22431;(statearr_22445[(10)] = inst_22399__$1);
return statearr_22445;
})();if(cljs.core.truth_(inst_22402))
{var statearr_22446_22471 = state_22431__$1;(statearr_22446_22471[(1)] = (8));
} else
{var statearr_22447_22472 = state_22431__$1;(statearr_22447_22472[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (14)))
{var inst_22424 = (state_22431[(2)]);var inst_22425 = cljs.core.async.close_BANG_.call(null,out);var state_22431__$1 = (function (){var statearr_22449 = state_22431;(statearr_22449[(13)] = inst_22424);
return statearr_22449;
})();var statearr_22450_22473 = state_22431__$1;(statearr_22450_22473[(2)] = inst_22425);
(statearr_22450_22473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (10)))
{var inst_22414 = (state_22431[(2)]);var state_22431__$1 = state_22431;var statearr_22451_22474 = state_22431__$1;(statearr_22451_22474[(2)] = inst_22414);
(statearr_22451_22474[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22432 === (8)))
{var inst_22391 = (state_22431[(8)]);var inst_22399 = (state_22431[(10)]);var inst_22395 = (state_22431[(9)]);var inst_22404 = inst_22391.push(inst_22395);var tmp22448 = inst_22391;var inst_22391__$1 = tmp22448;var inst_22392 = inst_22399;var state_22431__$1 = (function (){var statearr_22452 = state_22431;(statearr_22452[(7)] = inst_22392);
(statearr_22452[(8)] = inst_22391__$1);
(statearr_22452[(14)] = inst_22404);
return statearr_22452;
})();var statearr_22453_22475 = state_22431__$1;(statearr_22453_22475[(2)] = null);
(statearr_22453_22475[(1)] = (2));
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
});})(c__15989__auto___22461,out))
;return ((function (switch__15974__auto__,c__15989__auto___22461,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22457[(0)] = state_machine__15975__auto__);
(statearr_22457[(1)] = (1));
return statearr_22457;
});
var state_machine__15975__auto____1 = (function (state_22431){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22431);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22458){if((e22458 instanceof Object))
{var ex__15978__auto__ = e22458;var statearr_22459_22476 = state_22431;(statearr_22459_22476[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22431);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22477 = state_22431;
state_22431 = G__22477;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22431){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22461,out))
})();var state__15991__auto__ = (function (){var statearr_22460 = f__15990__auto__.call(null);(statearr_22460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22461);
return statearr_22460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22461,out))
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