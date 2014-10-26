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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23974 = (function (f,fn_handler,meta23975){
this.f = f;
this.fn_handler = fn_handler;
this.meta23975 = meta23975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23974.cljs$lang$type = true;
cljs.core.async.t23974.cljs$lang$ctorStr = "cljs.core.async/t23974";
cljs.core.async.t23974.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23974");
});
cljs.core.async.t23974.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23976){var self__ = this;
var _23976__$1 = this;return self__.meta23975;
});
cljs.core.async.t23974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23976,meta23975__$1){var self__ = this;
var _23976__$1 = this;return (new cljs.core.async.t23974(self__.f,self__.fn_handler,meta23975__$1));
});
cljs.core.async.__GT_t23974 = (function __GT_t23974(f__$1,fn_handler__$1,meta23975){return (new cljs.core.async.t23974(f__$1,fn_handler__$1,meta23975));
});
}
return (new cljs.core.async.t23974(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23978 = buff;if(G__23978)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23978.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23978.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23978);
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
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_23995 = (function (){var G__23992 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23992) : cljs.core.deref.call(null,G__23992));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23993_23996 = val_23995;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23993_23996) : fn1.call(null,G__23993_23996));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23995,ret){
return (function (){var G__23994 = val_23995;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23994) : fn1.call(null,G__23994));
});})(val_23995,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__24005 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24005) : cljs.core.deref.call(null,G__24005));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24006 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24006) : cljs.core.deref.call(null,G__24006));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24007_24009 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24007_24009) : fn1.call(null,G__24007_24009));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24008 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24008) : fn1.call(null,G__24008));
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___24010 = n;var x_24011 = (0);while(true){
if((x_24011 < n__4510__auto___24010))
{(a[x_24011] = (0));
{
var G__24012 = (x_24011 + (1));
x_24011 = G__24012;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24013 = (i + (1));
i = G__24013;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24021 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24021) : cljs.core.atom.call(null,G__24021));
})();if(typeof cljs.core.async.t24022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24022 = (function (flag,alt_flag,meta24023){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24023 = meta24023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24022.cljs$lang$type = true;
cljs.core.async.t24022.cljs$lang$ctorStr = "cljs.core.async/t24022";
cljs.core.async.t24022.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24022");
});})(flag))
;
cljs.core.async.t24022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24025 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24025) : cljs.core.deref.call(null,G__24025));
});})(flag))
;
cljs.core.async.t24022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24026_24028 = self__.flag;var G__24027_24029 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24026_24028,G__24027_24029) : cljs.core.reset_BANG_.call(null,G__24026_24028,G__24027_24029));
return true;
});})(flag))
;
cljs.core.async.t24022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24024){var self__ = this;
var _24024__$1 = this;return self__.meta24023;
});})(flag))
;
cljs.core.async.t24022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24024,meta24023__$1){var self__ = this;
var _24024__$1 = this;return (new cljs.core.async.t24022(self__.flag,self__.alt_flag,meta24023__$1));
});})(flag))
;
cljs.core.async.__GT_t24022 = ((function (flag){
return (function __GT_t24022(flag__$1,alt_flag__$1,meta24023){return (new cljs.core.async.t24022(flag__$1,alt_flag__$1,meta24023));
});})(flag))
;
}
return (new cljs.core.async.t24022(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24033 = (function (cb,flag,alt_handler,meta24034){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24034 = meta24034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24033.cljs$lang$type = true;
cljs.core.async.t24033.cljs$lang$ctorStr = "cljs.core.async/t24033";
cljs.core.async.t24033.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24033");
});
cljs.core.async.t24033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24035){var self__ = this;
var _24035__$1 = this;return self__.meta24034;
});
cljs.core.async.t24033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24035,meta24034__$1){var self__ = this;
var _24035__$1 = this;return (new cljs.core.async.t24033(self__.cb,self__.flag,self__.alt_handler,meta24034__$1));
});
cljs.core.async.__GT_t24033 = (function __GT_t24033(cb__$1,flag__$1,alt_handler__$1,meta24034){return (new cljs.core.async.t24033(cb__$1,flag__$1,alt_handler__$1,meta24034));
});
}
return (new cljs.core.async.t24033(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24043 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24043) : port.call(null,G__24043));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24044 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24044) : port.call(null,G__24044));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24036_SHARP_){var G__24045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24036_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24045) : fret.call(null,G__24045));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24037_SHARP_){var G__24046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24037_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24046) : fret.call(null,G__24046));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24047 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24047) : cljs.core.deref.call(null,G__24047));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24048 = (i + (1));
i = G__24048;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3628__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
var alts_BANG___delegate = function (ports,p__24049){var map__24051 = p__24049;var map__24051__$1 = ((cljs.core.seq_QMARK_(map__24051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24051):map__24051);var opts = map__24051__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24049 = null;if (arguments.length > 1) {
  p__24049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24049);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24052){
var ports = cljs.core.first(arglist__24052);
var p__24049 = cljs.core.rest(arglist__24052);
return alts_BANG___delegate(ports,p__24049);
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
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24150){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24150){
return (function (state_24126){var state_val_24127 = (state_24126[(1)]);if((state_val_24127 === (7)))
{var inst_24122 = (state_24126[(2)]);var state_24126__$1 = state_24126;var statearr_24128_24151 = state_24126__$1;(statearr_24128_24151[(2)] = inst_24122);
(statearr_24128_24151[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (1)))
{var state_24126__$1 = state_24126;var statearr_24129_24152 = state_24126__$1;(statearr_24129_24152[(2)] = null);
(statearr_24129_24152[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (4)))
{var inst_24105 = (state_24126[(7)]);var inst_24105__$1 = (state_24126[(2)]);var inst_24106 = (inst_24105__$1 == null);var state_24126__$1 = (function (){var statearr_24130 = state_24126;(statearr_24130[(7)] = inst_24105__$1);
return statearr_24130;
})();if(cljs.core.truth_(inst_24106))
{var statearr_24131_24153 = state_24126__$1;(statearr_24131_24153[(1)] = (5));
} else
{var statearr_24132_24154 = state_24126__$1;(statearr_24132_24154[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (13)))
{var state_24126__$1 = state_24126;var statearr_24133_24155 = state_24126__$1;(statearr_24133_24155[(2)] = null);
(statearr_24133_24155[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (6)))
{var inst_24105 = (state_24126[(7)]);var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24126__$1,(11),to,inst_24105);
} else
{if((state_val_24127 === (3)))
{var inst_24124 = (state_24126[(2)]);var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.return_chan(state_24126__$1,inst_24124);
} else
{if((state_val_24127 === (12)))
{var state_24126__$1 = state_24126;var statearr_24134_24156 = state_24126__$1;(statearr_24134_24156[(2)] = null);
(statearr_24134_24156[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (2)))
{var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24126__$1,(4),from);
} else
{if((state_val_24127 === (11)))
{var inst_24115 = (state_24126[(2)]);var state_24126__$1 = state_24126;if(cljs.core.truth_(inst_24115))
{var statearr_24135_24157 = state_24126__$1;(statearr_24135_24157[(1)] = (12));
} else
{var statearr_24136_24158 = state_24126__$1;(statearr_24136_24158[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (9)))
{var state_24126__$1 = state_24126;var statearr_24137_24159 = state_24126__$1;(statearr_24137_24159[(2)] = null);
(statearr_24137_24159[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (5)))
{var state_24126__$1 = state_24126;if(cljs.core.truth_(close_QMARK_))
{var statearr_24138_24160 = state_24126__$1;(statearr_24138_24160[(1)] = (8));
} else
{var statearr_24139_24161 = state_24126__$1;(statearr_24139_24161[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (14)))
{var inst_24120 = (state_24126[(2)]);var state_24126__$1 = state_24126;var statearr_24140_24162 = state_24126__$1;(statearr_24140_24162[(2)] = inst_24120);
(statearr_24140_24162[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (10)))
{var inst_24112 = (state_24126[(2)]);var state_24126__$1 = state_24126;var statearr_24141_24163 = state_24126__$1;(statearr_24141_24163[(2)] = inst_24112);
(statearr_24141_24163[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24127 === (8)))
{var inst_24109 = cljs.core.async.close_BANG_(to);var state_24126__$1 = state_24126;var statearr_24142_24164 = state_24126__$1;(statearr_24142_24164[(2)] = inst_24109);
(statearr_24142_24164[(1)] = (10));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___24150))
;return ((function (switch__12277__auto__,c__12292__auto___24150){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24146 = [null,null,null,null,null,null,null,null];(statearr_24146[(0)] = state_machine__12278__auto__);
(statearr_24146[(1)] = (1));
return statearr_24146;
});
var state_machine__12278__auto____1 = (function (state_24126){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24126);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24147){if((e24147 instanceof Object))
{var ex__12281__auto__ = e24147;var statearr_24148_24165 = state_24126;(statearr_24148_24165[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24126);
return cljs.core.constant$keyword$82;
} else
{throw e24147;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24166 = state_24126;
state_24126 = G__24166;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24126){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24150))
})();var state__12294__auto__ = (function (){var statearr_24149 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24150);
return statearr_24149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24150))
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__24352){var vec__24353 = p__24352;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(1),null);var job = vec__24353;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results){
return (function (state_24358){var state_val_24359 = (state_24358[(1)]);if((state_val_24359 === (2)))
{var inst_24355 = (state_24358[(2)]);var inst_24356 = cljs.core.async.close_BANG_(res);var state_24358__$1 = (function (){var statearr_24360 = state_24358;(statearr_24360[(7)] = inst_24355);
return statearr_24360;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24358__$1,inst_24356);
} else
{if((state_val_24359 === (1)))
{var state_24358__$1 = state_24358;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24358__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24364 = [null,null,null,null,null,null,null,null];(statearr_24364[(0)] = state_machine__12278__auto__);
(statearr_24364[(1)] = (1));
return statearr_24364;
});
var state_machine__12278__auto____1 = (function (state_24358){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24358);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24365){if((e24365 instanceof Object))
{var ex__12281__auto__ = e24365;var statearr_24366_24538 = state_24358;(statearr_24366_24538[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24358);
return cljs.core.constant$keyword$82;
} else
{throw e24365;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24539 = state_24358;
state_24358 = G__24539;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24358){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24367 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24537);
return statearr_24367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24537,res,vec__24353,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24368){var vec__24369 = p__24368;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(1),null);var job = vec__24369;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24370_24540 = v;var G__24371_24541 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24370_24540,G__24371_24541) : xf.call(null,G__24370_24540,G__24371_24541));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24542 = n;var __24543 = (0);while(true){
if((__24543 < n__4510__auto___24542))
{var G__24372_24544 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24372_24544) {
case "async":
var c__12292__auto___24546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24543,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24543,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function (state_24385){var state_val_24386 = (state_24385[(1)]);if((state_val_24386 === (7)))
{var inst_24381 = (state_24385[(2)]);var state_24385__$1 = state_24385;var statearr_24387_24547 = state_24385__$1;(statearr_24387_24547[(2)] = inst_24381);
(statearr_24387_24547[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24386 === (6)))
{var state_24385__$1 = state_24385;var statearr_24388_24548 = state_24385__$1;(statearr_24388_24548[(2)] = null);
(statearr_24388_24548[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24386 === (5)))
{var state_24385__$1 = state_24385;var statearr_24389_24549 = state_24385__$1;(statearr_24389_24549[(2)] = null);
(statearr_24389_24549[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24386 === (4)))
{var inst_24375 = (state_24385[(2)]);var inst_24376 = async(inst_24375);var state_24385__$1 = state_24385;if(cljs.core.truth_(inst_24376))
{var statearr_24390_24550 = state_24385__$1;(statearr_24390_24550[(1)] = (5));
} else
{var statearr_24391_24551 = state_24385__$1;(statearr_24391_24551[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24386 === (3)))
{var inst_24383 = (state_24385[(2)]);var state_24385__$1 = state_24385;return cljs.core.async.impl.ioc_helpers.return_chan(state_24385__$1,inst_24383);
} else
{if((state_val_24386 === (2)))
{var state_24385__$1 = state_24385;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24385__$1,(4),jobs);
} else
{if((state_val_24386 === (1)))
{var state_24385__$1 = state_24385;var statearr_24392_24552 = state_24385__$1;(statearr_24392_24552[(2)] = null);
(statearr_24392_24552[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{return null;
}
}
}
}
}
}
}
});})(__24543,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
;return ((function (__24543,switch__12277__auto__,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24396 = [null,null,null,null,null,null,null];(statearr_24396[(0)] = state_machine__12278__auto__);
(statearr_24396[(1)] = (1));
return statearr_24396;
});
var state_machine__12278__auto____1 = (function (state_24385){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24385);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object))
{var ex__12281__auto__ = e24397;var statearr_24398_24553 = state_24385;(statearr_24398_24553[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24385);
return cljs.core.constant$keyword$82;
} else
{throw e24397;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24554 = state_24385;
state_24385 = G__24554;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24385){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24543,switch__12277__auto__,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24399 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24546);
return statearr_24399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24543,c__12292__auto___24546,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24543,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24543,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function (state_24412){var state_val_24413 = (state_24412[(1)]);if((state_val_24413 === (7)))
{var inst_24408 = (state_24412[(2)]);var state_24412__$1 = state_24412;var statearr_24414_24556 = state_24412__$1;(statearr_24414_24556[(2)] = inst_24408);
(statearr_24414_24556[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24413 === (6)))
{var state_24412__$1 = state_24412;var statearr_24415_24557 = state_24412__$1;(statearr_24415_24557[(2)] = null);
(statearr_24415_24557[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24413 === (5)))
{var state_24412__$1 = state_24412;var statearr_24416_24558 = state_24412__$1;(statearr_24416_24558[(2)] = null);
(statearr_24416_24558[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24413 === (4)))
{var inst_24402 = (state_24412[(2)]);var inst_24403 = process(inst_24402);var state_24412__$1 = state_24412;if(cljs.core.truth_(inst_24403))
{var statearr_24417_24559 = state_24412__$1;(statearr_24417_24559[(1)] = (5));
} else
{var statearr_24418_24560 = state_24412__$1;(statearr_24418_24560[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24413 === (3)))
{var inst_24410 = (state_24412[(2)]);var state_24412__$1 = state_24412;return cljs.core.async.impl.ioc_helpers.return_chan(state_24412__$1,inst_24410);
} else
{if((state_val_24413 === (2)))
{var state_24412__$1 = state_24412;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24412__$1,(4),jobs);
} else
{if((state_val_24413 === (1)))
{var state_24412__$1 = state_24412;var statearr_24419_24561 = state_24412__$1;(statearr_24419_24561[(2)] = null);
(statearr_24419_24561[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{return null;
}
}
}
}
}
}
}
});})(__24543,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
;return ((function (__24543,switch__12277__auto__,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24423 = [null,null,null,null,null,null,null];(statearr_24423[(0)] = state_machine__12278__auto__);
(statearr_24423[(1)] = (1));
return statearr_24423;
});
var state_machine__12278__auto____1 = (function (state_24412){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24412);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object))
{var ex__12281__auto__ = e24424;var statearr_24425_24562 = state_24412;(statearr_24425_24562[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24412);
return cljs.core.constant$keyword$82;
} else
{throw e24424;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24563 = state_24412;
state_24412 = G__24563;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24412){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24543,switch__12277__auto__,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24426 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24555);
return statearr_24426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24543,c__12292__auto___24555,G__24372_24544,n__4510__auto___24542,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24564 = (__24543 + (1));
__24543 = G__24564;
continue;
}
} else
{}
break;
}
var c__12292__auto___24565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24565,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24565,jobs,results,process,async){
return (function (state_24448){var state_val_24449 = (state_24448[(1)]);if((state_val_24449 === (9)))
{var inst_24441 = (state_24448[(2)]);var state_24448__$1 = (function (){var statearr_24450 = state_24448;(statearr_24450[(7)] = inst_24441);
return statearr_24450;
})();var statearr_24451_24566 = state_24448__$1;(statearr_24451_24566[(2)] = null);
(statearr_24451_24566[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24449 === (8)))
{var inst_24434 = (state_24448[(8)]);var inst_24439 = (state_24448[(2)]);var state_24448__$1 = (function (){var statearr_24452 = state_24448;(statearr_24452[(9)] = inst_24439);
return statearr_24452;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24448__$1,(9),results,inst_24434);
} else
{if((state_val_24449 === (7)))
{var inst_24444 = (state_24448[(2)]);var state_24448__$1 = state_24448;var statearr_24453_24567 = state_24448__$1;(statearr_24453_24567[(2)] = inst_24444);
(statearr_24453_24567[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24449 === (6)))
{var inst_24429 = (state_24448[(10)]);var inst_24434 = (state_24448[(8)]);var inst_24434__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24435 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24436 = [inst_24429,inst_24434__$1];var inst_24437 = (new cljs.core.PersistentVector(null,2,(5),inst_24435,inst_24436,null));var state_24448__$1 = (function (){var statearr_24454 = state_24448;(statearr_24454[(8)] = inst_24434__$1);
return statearr_24454;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24448__$1,(8),jobs,inst_24437);
} else
{if((state_val_24449 === (5)))
{var inst_24432 = cljs.core.async.close_BANG_(jobs);var state_24448__$1 = state_24448;var statearr_24455_24568 = state_24448__$1;(statearr_24455_24568[(2)] = inst_24432);
(statearr_24455_24568[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24449 === (4)))
{var inst_24429 = (state_24448[(10)]);var inst_24429__$1 = (state_24448[(2)]);var inst_24430 = (inst_24429__$1 == null);var state_24448__$1 = (function (){var statearr_24456 = state_24448;(statearr_24456[(10)] = inst_24429__$1);
return statearr_24456;
})();if(cljs.core.truth_(inst_24430))
{var statearr_24457_24569 = state_24448__$1;(statearr_24457_24569[(1)] = (5));
} else
{var statearr_24458_24570 = state_24448__$1;(statearr_24458_24570[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24449 === (3)))
{var inst_24446 = (state_24448[(2)]);var state_24448__$1 = state_24448;return cljs.core.async.impl.ioc_helpers.return_chan(state_24448__$1,inst_24446);
} else
{if((state_val_24449 === (2)))
{var state_24448__$1 = state_24448;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24448__$1,(4),from);
} else
{if((state_val_24449 === (1)))
{var state_24448__$1 = state_24448;var statearr_24459_24571 = state_24448__$1;(statearr_24459_24571[(2)] = null);
(statearr_24459_24571[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___24565,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24565,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24463 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24463[(0)] = state_machine__12278__auto__);
(statearr_24463[(1)] = (1));
return statearr_24463;
});
var state_machine__12278__auto____1 = (function (state_24448){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24448);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24464){if((e24464 instanceof Object))
{var ex__12281__auto__ = e24464;var statearr_24465_24572 = state_24448;(statearr_24465_24572[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24448);
return cljs.core.constant$keyword$82;
} else
{throw e24464;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24573 = state_24448;
state_24448 = G__24573;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24448){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24565,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24466 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24565);
return statearr_24466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24565,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24504){var state_val_24505 = (state_24504[(1)]);if((state_val_24505 === (7)))
{var inst_24500 = (state_24504[(2)]);var state_24504__$1 = state_24504;var statearr_24506_24574 = state_24504__$1;(statearr_24506_24574[(2)] = inst_24500);
(statearr_24506_24574[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (20)))
{var state_24504__$1 = state_24504;var statearr_24507_24575 = state_24504__$1;(statearr_24507_24575[(2)] = null);
(statearr_24507_24575[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (1)))
{var state_24504__$1 = state_24504;var statearr_24508_24576 = state_24504__$1;(statearr_24508_24576[(2)] = null);
(statearr_24508_24576[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (4)))
{var inst_24469 = (state_24504[(7)]);var inst_24469__$1 = (state_24504[(2)]);var inst_24470 = (inst_24469__$1 == null);var state_24504__$1 = (function (){var statearr_24509 = state_24504;(statearr_24509[(7)] = inst_24469__$1);
return statearr_24509;
})();if(cljs.core.truth_(inst_24470))
{var statearr_24510_24577 = state_24504__$1;(statearr_24510_24577[(1)] = (5));
} else
{var statearr_24511_24578 = state_24504__$1;(statearr_24511_24578[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (15)))
{var inst_24482 = (state_24504[(8)]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24504__$1,(18),to,inst_24482);
} else
{if((state_val_24505 === (21)))
{var inst_24495 = (state_24504[(2)]);var state_24504__$1 = state_24504;var statearr_24512_24579 = state_24504__$1;(statearr_24512_24579[(2)] = inst_24495);
(statearr_24512_24579[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (13)))
{var inst_24497 = (state_24504[(2)]);var state_24504__$1 = (function (){var statearr_24513 = state_24504;(statearr_24513[(9)] = inst_24497);
return statearr_24513;
})();var statearr_24514_24580 = state_24504__$1;(statearr_24514_24580[(2)] = null);
(statearr_24514_24580[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (6)))
{var inst_24469 = (state_24504[(7)]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24504__$1,(11),inst_24469);
} else
{if((state_val_24505 === (17)))
{var inst_24490 = (state_24504[(2)]);var state_24504__$1 = state_24504;if(cljs.core.truth_(inst_24490))
{var statearr_24515_24581 = state_24504__$1;(statearr_24515_24581[(1)] = (19));
} else
{var statearr_24516_24582 = state_24504__$1;(statearr_24516_24582[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (3)))
{var inst_24502 = (state_24504[(2)]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.return_chan(state_24504__$1,inst_24502);
} else
{if((state_val_24505 === (12)))
{var inst_24479 = (state_24504[(10)]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24504__$1,(14),inst_24479);
} else
{if((state_val_24505 === (2)))
{var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24504__$1,(4),results);
} else
{if((state_val_24505 === (19)))
{var state_24504__$1 = state_24504;var statearr_24517_24583 = state_24504__$1;(statearr_24517_24583[(2)] = null);
(statearr_24517_24583[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (11)))
{var inst_24479 = (state_24504[(2)]);var state_24504__$1 = (function (){var statearr_24518 = state_24504;(statearr_24518[(10)] = inst_24479);
return statearr_24518;
})();var statearr_24519_24584 = state_24504__$1;(statearr_24519_24584[(2)] = null);
(statearr_24519_24584[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (9)))
{var state_24504__$1 = state_24504;var statearr_24520_24585 = state_24504__$1;(statearr_24520_24585[(2)] = null);
(statearr_24520_24585[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (5)))
{var state_24504__$1 = state_24504;if(cljs.core.truth_(close_QMARK_))
{var statearr_24521_24586 = state_24504__$1;(statearr_24521_24586[(1)] = (8));
} else
{var statearr_24522_24587 = state_24504__$1;(statearr_24522_24587[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (14)))
{var inst_24484 = (state_24504[(11)]);var inst_24482 = (state_24504[(8)]);var inst_24482__$1 = (state_24504[(2)]);var inst_24483 = (inst_24482__$1 == null);var inst_24484__$1 = cljs.core.not(inst_24483);var state_24504__$1 = (function (){var statearr_24523 = state_24504;(statearr_24523[(11)] = inst_24484__$1);
(statearr_24523[(8)] = inst_24482__$1);
return statearr_24523;
})();if(inst_24484__$1)
{var statearr_24524_24588 = state_24504__$1;(statearr_24524_24588[(1)] = (15));
} else
{var statearr_24525_24589 = state_24504__$1;(statearr_24525_24589[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (16)))
{var inst_24484 = (state_24504[(11)]);var state_24504__$1 = state_24504;var statearr_24526_24590 = state_24504__$1;(statearr_24526_24590[(2)] = inst_24484);
(statearr_24526_24590[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (10)))
{var inst_24476 = (state_24504[(2)]);var state_24504__$1 = state_24504;var statearr_24527_24591 = state_24504__$1;(statearr_24527_24591[(2)] = inst_24476);
(statearr_24527_24591[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (18)))
{var inst_24487 = (state_24504[(2)]);var state_24504__$1 = state_24504;var statearr_24528_24592 = state_24504__$1;(statearr_24528_24592[(2)] = inst_24487);
(statearr_24528_24592[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24505 === (8)))
{var inst_24473 = cljs.core.async.close_BANG_(to);var state_24504__$1 = state_24504;var statearr_24529_24593 = state_24504__$1;(statearr_24529_24593[(2)] = inst_24473);
(statearr_24529_24593[(1)] = (10));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto__,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto__,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24533 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24533[(0)] = state_machine__12278__auto__);
(statearr_24533[(1)] = (1));
return statearr_24533;
});
var state_machine__12278__auto____1 = (function (state_24504){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24504);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24534){if((e24534 instanceof Object))
{var ex__12281__auto__ = e24534;var statearr_24535_24594 = state_24504;(statearr_24535_24594[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24504);
return cljs.core.constant$keyword$82;
} else
{throw e24534;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24595 = state_24504;
state_24504 = G__24595;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24504){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24536 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto__,jobs,results,process,async))
);
return c__12292__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$89);
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
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$90);
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
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24718,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24718,tc,fc){
return (function (state_24692){var state_val_24693 = (state_24692[(1)]);if((state_val_24693 === (7)))
{var inst_24688 = (state_24692[(2)]);var state_24692__$1 = state_24692;var statearr_24694_24719 = state_24692__$1;(statearr_24694_24719[(2)] = inst_24688);
(statearr_24694_24719[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (1)))
{var state_24692__$1 = state_24692;var statearr_24695_24720 = state_24692__$1;(statearr_24695_24720[(2)] = null);
(statearr_24695_24720[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (4)))
{var inst_24669 = (state_24692[(7)]);var inst_24669__$1 = (state_24692[(2)]);var inst_24670 = (inst_24669__$1 == null);var state_24692__$1 = (function (){var statearr_24696 = state_24692;(statearr_24696[(7)] = inst_24669__$1);
return statearr_24696;
})();if(cljs.core.truth_(inst_24670))
{var statearr_24697_24721 = state_24692__$1;(statearr_24697_24721[(1)] = (5));
} else
{var statearr_24698_24722 = state_24692__$1;(statearr_24698_24722[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (13)))
{var state_24692__$1 = state_24692;var statearr_24699_24723 = state_24692__$1;(statearr_24699_24723[(2)] = null);
(statearr_24699_24723[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (6)))
{var inst_24669 = (state_24692[(7)]);var inst_24675 = (function (){var G__24700 = inst_24669;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24700) : p.call(null,G__24700));
})();var state_24692__$1 = state_24692;if(cljs.core.truth_(inst_24675))
{var statearr_24701_24724 = state_24692__$1;(statearr_24701_24724[(1)] = (9));
} else
{var statearr_24702_24725 = state_24692__$1;(statearr_24702_24725[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (3)))
{var inst_24690 = (state_24692[(2)]);var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.return_chan(state_24692__$1,inst_24690);
} else
{if((state_val_24693 === (12)))
{var state_24692__$1 = state_24692;var statearr_24703_24726 = state_24692__$1;(statearr_24703_24726[(2)] = null);
(statearr_24703_24726[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (2)))
{var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24692__$1,(4),ch);
} else
{if((state_val_24693 === (11)))
{var inst_24669 = (state_24692[(7)]);var inst_24679 = (state_24692[(2)]);var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24692__$1,(8),inst_24679,inst_24669);
} else
{if((state_val_24693 === (9)))
{var state_24692__$1 = state_24692;var statearr_24704_24727 = state_24692__$1;(statearr_24704_24727[(2)] = tc);
(statearr_24704_24727[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (5)))
{var inst_24672 = cljs.core.async.close_BANG_(tc);var inst_24673 = cljs.core.async.close_BANG_(fc);var state_24692__$1 = (function (){var statearr_24705 = state_24692;(statearr_24705[(8)] = inst_24672);
return statearr_24705;
})();var statearr_24706_24728 = state_24692__$1;(statearr_24706_24728[(2)] = inst_24673);
(statearr_24706_24728[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (14)))
{var inst_24686 = (state_24692[(2)]);var state_24692__$1 = state_24692;var statearr_24707_24729 = state_24692__$1;(statearr_24707_24729[(2)] = inst_24686);
(statearr_24707_24729[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (10)))
{var state_24692__$1 = state_24692;var statearr_24708_24730 = state_24692__$1;(statearr_24708_24730[(2)] = fc);
(statearr_24708_24730[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24693 === (8)))
{var inst_24681 = (state_24692[(2)]);var state_24692__$1 = state_24692;if(cljs.core.truth_(inst_24681))
{var statearr_24709_24731 = state_24692__$1;(statearr_24709_24731[(1)] = (12));
} else
{var statearr_24710_24732 = state_24692__$1;(statearr_24710_24732[(1)] = (13));
}
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___24718,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24718,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24714 = [null,null,null,null,null,null,null,null,null];(statearr_24714[(0)] = state_machine__12278__auto__);
(statearr_24714[(1)] = (1));
return statearr_24714;
});
var state_machine__12278__auto____1 = (function (state_24692){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24692);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24715){if((e24715 instanceof Object))
{var ex__12281__auto__ = e24715;var statearr_24716_24733 = state_24692;(statearr_24716_24733[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24692);
return cljs.core.constant$keyword$82;
} else
{throw e24715;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24734 = state_24692;
state_24692 = G__24734;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24692){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24718,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24717 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24718);
return statearr_24717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24718,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__){
return (function (state_24783){var state_val_24784 = (state_24783[(1)]);if((state_val_24784 === (7)))
{var inst_24779 = (state_24783[(2)]);var state_24783__$1 = state_24783;var statearr_24785_24803 = state_24783__$1;(statearr_24785_24803[(2)] = inst_24779);
(statearr_24785_24803[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24784 === (6)))
{var inst_24769 = (state_24783[(7)]);var inst_24772 = (state_24783[(8)]);var inst_24776 = (function (){var G__24786 = inst_24769;var G__24787 = inst_24772;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24786,G__24787) : f.call(null,G__24786,G__24787));
})();var inst_24769__$1 = inst_24776;var state_24783__$1 = (function (){var statearr_24788 = state_24783;(statearr_24788[(7)] = inst_24769__$1);
return statearr_24788;
})();var statearr_24789_24804 = state_24783__$1;(statearr_24789_24804[(2)] = null);
(statearr_24789_24804[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24784 === (5)))
{var inst_24769 = (state_24783[(7)]);var state_24783__$1 = state_24783;var statearr_24790_24805 = state_24783__$1;(statearr_24790_24805[(2)] = inst_24769);
(statearr_24790_24805[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24784 === (4)))
{var inst_24772 = (state_24783[(8)]);var inst_24772__$1 = (state_24783[(2)]);var inst_24773 = (inst_24772__$1 == null);var state_24783__$1 = (function (){var statearr_24791 = state_24783;(statearr_24791[(8)] = inst_24772__$1);
return statearr_24791;
})();if(cljs.core.truth_(inst_24773))
{var statearr_24792_24806 = state_24783__$1;(statearr_24792_24806[(1)] = (5));
} else
{var statearr_24793_24807 = state_24783__$1;(statearr_24793_24807[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24784 === (3)))
{var inst_24781 = (state_24783[(2)]);var state_24783__$1 = state_24783;return cljs.core.async.impl.ioc_helpers.return_chan(state_24783__$1,inst_24781);
} else
{if((state_val_24784 === (2)))
{var state_24783__$1 = state_24783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24783__$1,(4),ch);
} else
{if((state_val_24784 === (1)))
{var inst_24769 = init;var state_24783__$1 = (function (){var statearr_24794 = state_24783;(statearr_24794[(7)] = inst_24769);
return statearr_24794;
})();var statearr_24795_24808 = state_24783__$1;(statearr_24795_24808[(2)] = null);
(statearr_24795_24808[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{return null;
}
}
}
}
}
}
}
});})(c__12292__auto__))
;return ((function (switch__12277__auto__,c__12292__auto__){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24799 = [null,null,null,null,null,null,null,null,null];(statearr_24799[(0)] = state_machine__12278__auto__);
(statearr_24799[(1)] = (1));
return statearr_24799;
});
var state_machine__12278__auto____1 = (function (state_24783){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24783);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object))
{var ex__12281__auto__ = e24800;var statearr_24801_24809 = state_24783;(statearr_24801_24809[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24783);
return cljs.core.constant$keyword$82;
} else
{throw e24800;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24810 = state_24783;
state_24783 = G__24810;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24783){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24802 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto__))
);
return c__12292__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__){
return (function (state_24887){var state_val_24888 = (state_24887[(1)]);if((state_val_24888 === (7)))
{var inst_24869 = (state_24887[(2)]);var state_24887__$1 = state_24887;var statearr_24889_24912 = state_24887__$1;(statearr_24889_24912[(2)] = inst_24869);
(statearr_24889_24912[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (1)))
{var inst_24863 = cljs.core.seq(coll);var inst_24864 = inst_24863;var state_24887__$1 = (function (){var statearr_24890 = state_24887;(statearr_24890[(7)] = inst_24864);
return statearr_24890;
})();var statearr_24891_24913 = state_24887__$1;(statearr_24891_24913[(2)] = null);
(statearr_24891_24913[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (4)))
{var inst_24864 = (state_24887[(7)]);var inst_24867 = cljs.core.first(inst_24864);var state_24887__$1 = state_24887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24887__$1,(7),ch,inst_24867);
} else
{if((state_val_24888 === (13)))
{var inst_24881 = (state_24887[(2)]);var state_24887__$1 = state_24887;var statearr_24892_24914 = state_24887__$1;(statearr_24892_24914[(2)] = inst_24881);
(statearr_24892_24914[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (6)))
{var inst_24872 = (state_24887[(2)]);var state_24887__$1 = state_24887;if(cljs.core.truth_(inst_24872))
{var statearr_24893_24915 = state_24887__$1;(statearr_24893_24915[(1)] = (8));
} else
{var statearr_24894_24916 = state_24887__$1;(statearr_24894_24916[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (3)))
{var inst_24885 = (state_24887[(2)]);var state_24887__$1 = state_24887;return cljs.core.async.impl.ioc_helpers.return_chan(state_24887__$1,inst_24885);
} else
{if((state_val_24888 === (12)))
{var state_24887__$1 = state_24887;var statearr_24895_24917 = state_24887__$1;(statearr_24895_24917[(2)] = null);
(statearr_24895_24917[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (2)))
{var inst_24864 = (state_24887[(7)]);var state_24887__$1 = state_24887;if(cljs.core.truth_(inst_24864))
{var statearr_24896_24918 = state_24887__$1;(statearr_24896_24918[(1)] = (4));
} else
{var statearr_24897_24919 = state_24887__$1;(statearr_24897_24919[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (11)))
{var inst_24878 = cljs.core.async.close_BANG_(ch);var state_24887__$1 = state_24887;var statearr_24898_24920 = state_24887__$1;(statearr_24898_24920[(2)] = inst_24878);
(statearr_24898_24920[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (9)))
{var state_24887__$1 = state_24887;if(cljs.core.truth_(close_QMARK_))
{var statearr_24899_24921 = state_24887__$1;(statearr_24899_24921[(1)] = (11));
} else
{var statearr_24900_24922 = state_24887__$1;(statearr_24900_24922[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (5)))
{var inst_24864 = (state_24887[(7)]);var state_24887__$1 = state_24887;var statearr_24901_24923 = state_24887__$1;(statearr_24901_24923[(2)] = inst_24864);
(statearr_24901_24923[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (10)))
{var inst_24883 = (state_24887[(2)]);var state_24887__$1 = state_24887;var statearr_24902_24924 = state_24887__$1;(statearr_24902_24924[(2)] = inst_24883);
(statearr_24902_24924[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24888 === (8)))
{var inst_24864 = (state_24887[(7)]);var inst_24874 = cljs.core.next(inst_24864);var inst_24864__$1 = inst_24874;var state_24887__$1 = (function (){var statearr_24903 = state_24887;(statearr_24903[(7)] = inst_24864__$1);
return statearr_24903;
})();var statearr_24904_24925 = state_24887__$1;(statearr_24904_24925[(2)] = null);
(statearr_24904_24925[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto__))
;return ((function (switch__12277__auto__,c__12292__auto__){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24908 = [null,null,null,null,null,null,null,null];(statearr_24908[(0)] = state_machine__12278__auto__);
(statearr_24908[(1)] = (1));
return statearr_24908;
});
var state_machine__12278__auto____1 = (function (state_24887){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24887);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object))
{var ex__12281__auto__ = e24909;var statearr_24910_24926 = state_24887;(statearr_24910_24926[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24887);
return cljs.core.constant$keyword$82;
} else
{throw e24909;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24927 = state_24887;
state_24887 = G__24927;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24887){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24911 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto__))
);
return c__12292__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24929 = {};return obj24929;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24933 = x__4277__auto__;return goog.typeOf(G__24933);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24935 = {};return obj24935;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24939 = x__4277__auto__;return goog.typeOf(G__24939);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24943 = x__4277__auto__;return goog.typeOf(G__24943);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24947 = x__4277__auto__;return goog.typeOf(G__24947);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25177 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25177) : cljs.core.atom.call(null,G__25177));
})();var m = (function (){if(typeof cljs.core.async.t25178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25178 = (function (cs,ch,mult,meta25179){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25179 = meta25179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25178.cljs$lang$type = true;
cljs.core.async.t25178.cljs$lang$ctorStr = "cljs.core.async/t25178";
cljs.core.async.t25178.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25178");
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25178.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25181_25406 = self__.cs;var G__25182_25407 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25181_25406,G__25182_25407) : cljs.core.reset_BANG_.call(null,G__25181_25406,G__25182_25407));
return null;
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25180){var self__ = this;
var _25180__$1 = this;return self__.meta25179;
});})(cs))
;
cljs.core.async.t25178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25180,meta25179__$1){var self__ = this;
var _25180__$1 = this;return (new cljs.core.async.t25178(self__.cs,self__.ch,self__.mult,meta25179__$1));
});})(cs))
;
cljs.core.async.__GT_t25178 = ((function (cs){
return (function __GT_t25178(cs__$1,ch__$1,mult__$1,meta25179){return (new cljs.core.async.t25178(cs__$1,ch__$1,mult__$1,meta25179));
});})(cs))
;
}
return (new cljs.core.async.t25178(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25183 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25183) : cljs.core.atom.call(null,G__25183));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25408,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25408,cs,m,dchan,dctr,done){
return (function (state_25314){var state_val_25315 = (state_25314[(1)]);if((state_val_25315 === (7)))
{var inst_25310 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25316_25409 = state_25314__$1;(statearr_25316_25409[(2)] = inst_25310);
(statearr_25316_25409[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (20)))
{var inst_25215 = (state_25314[(7)]);var inst_25225 = cljs.core.first(inst_25215);var inst_25226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25225,(0),null);var inst_25227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25225,(1),null);var state_25314__$1 = (function (){var statearr_25317 = state_25314;(statearr_25317[(8)] = inst_25226);
return statearr_25317;
})();if(cljs.core.truth_(inst_25227))
{var statearr_25318_25410 = state_25314__$1;(statearr_25318_25410[(1)] = (22));
} else
{var statearr_25319_25411 = state_25314__$1;(statearr_25319_25411[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (27)))
{var inst_25257 = (state_25314[(9)]);var inst_25186 = (state_25314[(10)]);var inst_25255 = (state_25314[(11)]);var inst_25262 = (state_25314[(12)]);var inst_25262__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25255,inst_25257);var inst_25263 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25262__$1,inst_25186,done);var state_25314__$1 = (function (){var statearr_25320 = state_25314;(statearr_25320[(12)] = inst_25262__$1);
return statearr_25320;
})();if(cljs.core.truth_(inst_25263))
{var statearr_25321_25412 = state_25314__$1;(statearr_25321_25412[(1)] = (30));
} else
{var statearr_25322_25413 = state_25314__$1;(statearr_25322_25413[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (1)))
{var state_25314__$1 = state_25314;var statearr_25323_25414 = state_25314__$1;(statearr_25323_25414[(2)] = null);
(statearr_25323_25414[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (24)))
{var inst_25215 = (state_25314[(7)]);var inst_25232 = (state_25314[(2)]);var inst_25233 = cljs.core.next(inst_25215);var inst_25195 = inst_25233;var inst_25196 = null;var inst_25197 = (0);var inst_25198 = (0);var state_25314__$1 = (function (){var statearr_25324 = state_25314;(statearr_25324[(13)] = inst_25196);
(statearr_25324[(14)] = inst_25232);
(statearr_25324[(15)] = inst_25195);
(statearr_25324[(16)] = inst_25197);
(statearr_25324[(17)] = inst_25198);
return statearr_25324;
})();var statearr_25325_25415 = state_25314__$1;(statearr_25325_25415[(2)] = null);
(statearr_25325_25415[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (39)))
{var state_25314__$1 = state_25314;var statearr_25329_25416 = state_25314__$1;(statearr_25329_25416[(2)] = null);
(statearr_25329_25416[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (4)))
{var inst_25186 = (state_25314[(10)]);var inst_25186__$1 = (state_25314[(2)]);var inst_25187 = (inst_25186__$1 == null);var state_25314__$1 = (function (){var statearr_25330 = state_25314;(statearr_25330[(10)] = inst_25186__$1);
return statearr_25330;
})();if(cljs.core.truth_(inst_25187))
{var statearr_25331_25417 = state_25314__$1;(statearr_25331_25417[(1)] = (5));
} else
{var statearr_25332_25418 = state_25314__$1;(statearr_25332_25418[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (15)))
{var inst_25196 = (state_25314[(13)]);var inst_25195 = (state_25314[(15)]);var inst_25197 = (state_25314[(16)]);var inst_25198 = (state_25314[(17)]);var inst_25211 = (state_25314[(2)]);var inst_25212 = (inst_25198 + (1));var tmp25326 = inst_25196;var tmp25327 = inst_25195;var tmp25328 = inst_25197;var inst_25195__$1 = tmp25327;var inst_25196__$1 = tmp25326;var inst_25197__$1 = tmp25328;var inst_25198__$1 = inst_25212;var state_25314__$1 = (function (){var statearr_25333 = state_25314;(statearr_25333[(13)] = inst_25196__$1);
(statearr_25333[(18)] = inst_25211);
(statearr_25333[(15)] = inst_25195__$1);
(statearr_25333[(16)] = inst_25197__$1);
(statearr_25333[(17)] = inst_25198__$1);
return statearr_25333;
})();var statearr_25334_25419 = state_25314__$1;(statearr_25334_25419[(2)] = null);
(statearr_25334_25419[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (21)))
{var inst_25236 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25338_25420 = state_25314__$1;(statearr_25338_25420[(2)] = inst_25236);
(statearr_25338_25420[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (31)))
{var inst_25262 = (state_25314[(12)]);var inst_25266 = done(null);var inst_25267 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25262);var state_25314__$1 = (function (){var statearr_25339 = state_25314;(statearr_25339[(19)] = inst_25266);
return statearr_25339;
})();var statearr_25340_25421 = state_25314__$1;(statearr_25340_25421[(2)] = inst_25267);
(statearr_25340_25421[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (32)))
{var inst_25257 = (state_25314[(9)]);var inst_25256 = (state_25314[(20)]);var inst_25255 = (state_25314[(11)]);var inst_25254 = (state_25314[(21)]);var inst_25269 = (state_25314[(2)]);var inst_25270 = (inst_25257 + (1));var tmp25335 = inst_25256;var tmp25336 = inst_25255;var tmp25337 = inst_25254;var inst_25254__$1 = tmp25337;var inst_25255__$1 = tmp25336;var inst_25256__$1 = tmp25335;var inst_25257__$1 = inst_25270;var state_25314__$1 = (function (){var statearr_25341 = state_25314;(statearr_25341[(9)] = inst_25257__$1);
(statearr_25341[(20)] = inst_25256__$1);
(statearr_25341[(22)] = inst_25269);
(statearr_25341[(11)] = inst_25255__$1);
(statearr_25341[(21)] = inst_25254__$1);
return statearr_25341;
})();var statearr_25342_25422 = state_25314__$1;(statearr_25342_25422[(2)] = null);
(statearr_25342_25422[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (40)))
{var inst_25282 = (state_25314[(23)]);var inst_25286 = done(null);var inst_25287 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25282);var state_25314__$1 = (function (){var statearr_25343 = state_25314;(statearr_25343[(24)] = inst_25286);
return statearr_25343;
})();var statearr_25344_25423 = state_25314__$1;(statearr_25344_25423[(2)] = inst_25287);
(statearr_25344_25423[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (33)))
{var inst_25273 = (state_25314[(25)]);var inst_25275 = cljs.core.chunked_seq_QMARK_(inst_25273);var state_25314__$1 = state_25314;if(inst_25275)
{var statearr_25345_25424 = state_25314__$1;(statearr_25345_25424[(1)] = (36));
} else
{var statearr_25346_25425 = state_25314__$1;(statearr_25346_25425[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (13)))
{var inst_25205 = (state_25314[(26)]);var inst_25208 = cljs.core.async.close_BANG_(inst_25205);var state_25314__$1 = state_25314;var statearr_25347_25426 = state_25314__$1;(statearr_25347_25426[(2)] = inst_25208);
(statearr_25347_25426[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (22)))
{var inst_25226 = (state_25314[(8)]);var inst_25229 = cljs.core.async.close_BANG_(inst_25226);var state_25314__$1 = state_25314;var statearr_25348_25427 = state_25314__$1;(statearr_25348_25427[(2)] = inst_25229);
(statearr_25348_25427[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (36)))
{var inst_25273 = (state_25314[(25)]);var inst_25277 = cljs.core.chunk_first(inst_25273);var inst_25278 = cljs.core.chunk_rest(inst_25273);var inst_25279 = cljs.core.count(inst_25277);var inst_25254 = inst_25278;var inst_25255 = inst_25277;var inst_25256 = inst_25279;var inst_25257 = (0);var state_25314__$1 = (function (){var statearr_25349 = state_25314;(statearr_25349[(9)] = inst_25257);
(statearr_25349[(20)] = inst_25256);
(statearr_25349[(11)] = inst_25255);
(statearr_25349[(21)] = inst_25254);
return statearr_25349;
})();var statearr_25350_25428 = state_25314__$1;(statearr_25350_25428[(2)] = null);
(statearr_25350_25428[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (41)))
{var inst_25273 = (state_25314[(25)]);var inst_25289 = (state_25314[(2)]);var inst_25290 = cljs.core.next(inst_25273);var inst_25254 = inst_25290;var inst_25255 = null;var inst_25256 = (0);var inst_25257 = (0);var state_25314__$1 = (function (){var statearr_25351 = state_25314;(statearr_25351[(9)] = inst_25257);
(statearr_25351[(20)] = inst_25256);
(statearr_25351[(11)] = inst_25255);
(statearr_25351[(21)] = inst_25254);
(statearr_25351[(27)] = inst_25289);
return statearr_25351;
})();var statearr_25352_25429 = state_25314__$1;(statearr_25352_25429[(2)] = null);
(statearr_25352_25429[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (43)))
{var state_25314__$1 = state_25314;var statearr_25353_25430 = state_25314__$1;(statearr_25353_25430[(2)] = null);
(statearr_25353_25430[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (29)))
{var inst_25298 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25354_25431 = state_25314__$1;(statearr_25354_25431[(2)] = inst_25298);
(statearr_25354_25431[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (44)))
{var inst_25307 = (state_25314[(2)]);var state_25314__$1 = (function (){var statearr_25355 = state_25314;(statearr_25355[(28)] = inst_25307);
return statearr_25355;
})();var statearr_25356_25432 = state_25314__$1;(statearr_25356_25432[(2)] = null);
(statearr_25356_25432[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (6)))
{var inst_25246 = (state_25314[(29)]);var inst_25245 = (function (){var G__25357 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25357) : cljs.core.deref.call(null,G__25357));
})();var inst_25246__$1 = cljs.core.keys(inst_25245);var inst_25247 = cljs.core.count(inst_25246__$1);var inst_25248 = (function (){var G__25358 = dctr;var G__25359 = inst_25247;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25358,G__25359) : cljs.core.reset_BANG_.call(null,G__25358,G__25359));
})();var inst_25253 = cljs.core.seq(inst_25246__$1);var inst_25254 = inst_25253;var inst_25255 = null;var inst_25256 = (0);var inst_25257 = (0);var state_25314__$1 = (function (){var statearr_25360 = state_25314;(statearr_25360[(9)] = inst_25257);
(statearr_25360[(20)] = inst_25256);
(statearr_25360[(11)] = inst_25255);
(statearr_25360[(30)] = inst_25248);
(statearr_25360[(21)] = inst_25254);
(statearr_25360[(29)] = inst_25246__$1);
return statearr_25360;
})();var statearr_25361_25433 = state_25314__$1;(statearr_25361_25433[(2)] = null);
(statearr_25361_25433[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (28)))
{var inst_25254 = (state_25314[(21)]);var inst_25273 = (state_25314[(25)]);var inst_25273__$1 = cljs.core.seq(inst_25254);var state_25314__$1 = (function (){var statearr_25362 = state_25314;(statearr_25362[(25)] = inst_25273__$1);
return statearr_25362;
})();if(inst_25273__$1)
{var statearr_25363_25434 = state_25314__$1;(statearr_25363_25434[(1)] = (33));
} else
{var statearr_25364_25435 = state_25314__$1;(statearr_25364_25435[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (25)))
{var inst_25257 = (state_25314[(9)]);var inst_25256 = (state_25314[(20)]);var inst_25259 = (inst_25257 < inst_25256);var inst_25260 = inst_25259;var state_25314__$1 = state_25314;if(cljs.core.truth_(inst_25260))
{var statearr_25365_25436 = state_25314__$1;(statearr_25365_25436[(1)] = (27));
} else
{var statearr_25366_25437 = state_25314__$1;(statearr_25366_25437[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (34)))
{var state_25314__$1 = state_25314;var statearr_25367_25438 = state_25314__$1;(statearr_25367_25438[(2)] = null);
(statearr_25367_25438[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (17)))
{var state_25314__$1 = state_25314;var statearr_25368_25439 = state_25314__$1;(statearr_25368_25439[(2)] = null);
(statearr_25368_25439[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (3)))
{var inst_25312 = (state_25314[(2)]);var state_25314__$1 = state_25314;return cljs.core.async.impl.ioc_helpers.return_chan(state_25314__$1,inst_25312);
} else
{if((state_val_25315 === (12)))
{var inst_25241 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25369_25440 = state_25314__$1;(statearr_25369_25440[(2)] = inst_25241);
(statearr_25369_25440[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (2)))
{var state_25314__$1 = state_25314;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25314__$1,(4),ch);
} else
{if((state_val_25315 === (23)))
{var state_25314__$1 = state_25314;var statearr_25370_25441 = state_25314__$1;(statearr_25370_25441[(2)] = null);
(statearr_25370_25441[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (35)))
{var inst_25296 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25371_25442 = state_25314__$1;(statearr_25371_25442[(2)] = inst_25296);
(statearr_25371_25442[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (19)))
{var inst_25215 = (state_25314[(7)]);var inst_25219 = cljs.core.chunk_first(inst_25215);var inst_25220 = cljs.core.chunk_rest(inst_25215);var inst_25221 = cljs.core.count(inst_25219);var inst_25195 = inst_25220;var inst_25196 = inst_25219;var inst_25197 = inst_25221;var inst_25198 = (0);var state_25314__$1 = (function (){var statearr_25372 = state_25314;(statearr_25372[(13)] = inst_25196);
(statearr_25372[(15)] = inst_25195);
(statearr_25372[(16)] = inst_25197);
(statearr_25372[(17)] = inst_25198);
return statearr_25372;
})();var statearr_25373_25443 = state_25314__$1;(statearr_25373_25443[(2)] = null);
(statearr_25373_25443[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (11)))
{var inst_25195 = (state_25314[(15)]);var inst_25215 = (state_25314[(7)]);var inst_25215__$1 = cljs.core.seq(inst_25195);var state_25314__$1 = (function (){var statearr_25374 = state_25314;(statearr_25374[(7)] = inst_25215__$1);
return statearr_25374;
})();if(inst_25215__$1)
{var statearr_25375_25444 = state_25314__$1;(statearr_25375_25444[(1)] = (16));
} else
{var statearr_25376_25445 = state_25314__$1;(statearr_25376_25445[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (9)))
{var inst_25243 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25377_25446 = state_25314__$1;(statearr_25377_25446[(2)] = inst_25243);
(statearr_25377_25446[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (5)))
{var inst_25193 = (function (){var G__25378 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25378) : cljs.core.deref.call(null,G__25378));
})();var inst_25194 = cljs.core.seq(inst_25193);var inst_25195 = inst_25194;var inst_25196 = null;var inst_25197 = (0);var inst_25198 = (0);var state_25314__$1 = (function (){var statearr_25379 = state_25314;(statearr_25379[(13)] = inst_25196);
(statearr_25379[(15)] = inst_25195);
(statearr_25379[(16)] = inst_25197);
(statearr_25379[(17)] = inst_25198);
return statearr_25379;
})();var statearr_25380_25447 = state_25314__$1;(statearr_25380_25447[(2)] = null);
(statearr_25380_25447[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (14)))
{var state_25314__$1 = state_25314;var statearr_25381_25448 = state_25314__$1;(statearr_25381_25448[(2)] = null);
(statearr_25381_25448[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (45)))
{var inst_25304 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25382_25449 = state_25314__$1;(statearr_25382_25449[(2)] = inst_25304);
(statearr_25382_25449[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (26)))
{var inst_25246 = (state_25314[(29)]);var inst_25300 = (state_25314[(2)]);var inst_25301 = cljs.core.seq(inst_25246);var state_25314__$1 = (function (){var statearr_25383 = state_25314;(statearr_25383[(31)] = inst_25300);
return statearr_25383;
})();if(inst_25301)
{var statearr_25384_25450 = state_25314__$1;(statearr_25384_25450[(1)] = (42));
} else
{var statearr_25385_25451 = state_25314__$1;(statearr_25385_25451[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (16)))
{var inst_25215 = (state_25314[(7)]);var inst_25217 = cljs.core.chunked_seq_QMARK_(inst_25215);var state_25314__$1 = state_25314;if(inst_25217)
{var statearr_25386_25452 = state_25314__$1;(statearr_25386_25452[(1)] = (19));
} else
{var statearr_25387_25453 = state_25314__$1;(statearr_25387_25453[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (38)))
{var inst_25293 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25388_25454 = state_25314__$1;(statearr_25388_25454[(2)] = inst_25293);
(statearr_25388_25454[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (30)))
{var state_25314__$1 = state_25314;var statearr_25389_25455 = state_25314__$1;(statearr_25389_25455[(2)] = null);
(statearr_25389_25455[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (10)))
{var inst_25196 = (state_25314[(13)]);var inst_25198 = (state_25314[(17)]);var inst_25204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25196,inst_25198);var inst_25205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25204,(0),null);var inst_25206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25204,(1),null);var state_25314__$1 = (function (){var statearr_25390 = state_25314;(statearr_25390[(26)] = inst_25205);
return statearr_25390;
})();if(cljs.core.truth_(inst_25206))
{var statearr_25391_25456 = state_25314__$1;(statearr_25391_25456[(1)] = (13));
} else
{var statearr_25392_25457 = state_25314__$1;(statearr_25392_25457[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (18)))
{var inst_25239 = (state_25314[(2)]);var state_25314__$1 = state_25314;var statearr_25393_25458 = state_25314__$1;(statearr_25393_25458[(2)] = inst_25239);
(statearr_25393_25458[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (42)))
{var state_25314__$1 = state_25314;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25314__$1,(45),dchan);
} else
{if((state_val_25315 === (37)))
{var inst_25186 = (state_25314[(10)]);var inst_25282 = (state_25314[(23)]);var inst_25273 = (state_25314[(25)]);var inst_25282__$1 = cljs.core.first(inst_25273);var inst_25283 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25282__$1,inst_25186,done);var state_25314__$1 = (function (){var statearr_25394 = state_25314;(statearr_25394[(23)] = inst_25282__$1);
return statearr_25394;
})();if(cljs.core.truth_(inst_25283))
{var statearr_25395_25459 = state_25314__$1;(statearr_25395_25459[(1)] = (39));
} else
{var statearr_25396_25460 = state_25314__$1;(statearr_25396_25460[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25315 === (8)))
{var inst_25197 = (state_25314[(16)]);var inst_25198 = (state_25314[(17)]);var inst_25200 = (inst_25198 < inst_25197);var inst_25201 = inst_25200;var state_25314__$1 = state_25314;if(cljs.core.truth_(inst_25201))
{var statearr_25397_25461 = state_25314__$1;(statearr_25397_25461[(1)] = (10));
} else
{var statearr_25398_25462 = state_25314__$1;(statearr_25398_25462[(1)] = (11));
}
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___25408,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25408,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25402[(0)] = state_machine__12278__auto__);
(statearr_25402[(1)] = (1));
return statearr_25402;
});
var state_machine__12278__auto____1 = (function (state_25314){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25314);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25403){if((e25403 instanceof Object))
{var ex__12281__auto__ = e25403;var statearr_25404_25463 = state_25314;(statearr_25404_25463[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25314);
return cljs.core.constant$keyword$82;
} else
{throw e25403;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25464 = state_25314;
state_25314 = G__25464;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25314){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25408,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25405 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25408);
return statearr_25405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25408,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj25469 = {};return obj25469;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25473 = x__4277__auto__;return goog.typeOf(G__25473);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25477 = x__4277__auto__;return goog.typeOf(G__25477);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25481 = x__4277__auto__;return goog.typeOf(G__25481);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25485 = x__4277__auto__;return goog.typeOf(G__25485);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25489 = x__4277__auto__;return goog.typeOf(G__25489);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25490){var map__25496 = p__25490;var map__25496__$1 = ((cljs.core.seq_QMARK_(map__25496))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25496):map__25496);var opts = map__25496__$1;var statearr_25497_25501 = state;(statearr_25497_25501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25496,map__25496__$1,opts){
return (function (val){var statearr_25498_25502 = state;(statearr_25498_25502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25496,map__25496__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25499_25503 = state;(statearr_25499_25503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25500 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25500) : cljs.core.deref.call(null,G__25500));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25490 = null;if (arguments.length > 3) {
  p__25490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25490);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25504){
var state = cljs.core.first(arglist__25504);
arglist__25504 = cljs.core.next(arglist__25504);
var cont_block = cljs.core.first(arglist__25504);
arglist__25504 = cljs.core.next(arglist__25504);
var ports = cljs.core.first(arglist__25504);
var p__25490 = cljs.core.rest(arglist__25504);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25490);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25638 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25638) : cljs.core.atom.call(null,G__25638));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25639 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25639) : cljs.core.atom.call(null,G__25639));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25640 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25640) : attr.call(null,G__25640));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25641 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25641) : cljs.core.deref.call(null,G__25641));
})();var mode = (function (){var G__25642 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25642) : cljs.core.deref.call(null,G__25642));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25643 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25644){
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
this.meta25644 = meta25644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25643.cljs$lang$type = true;
cljs.core.async.t25643.cljs$lang$ctorStr = "cljs.core.async/t25643";
cljs.core.async.t25643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25646_25771 = self__.cs;var G__25647_25772 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25646_25771,G__25647_25772) : cljs.core.reset_BANG_.call(null,G__25646_25771,G__25647_25772));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25648 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25648) : self__.solo_modes.call(null,G__25648));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25649_25773 = self__.solo_mode;var G__25650_25774 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25649_25773,G__25650_25774) : cljs.core.reset_BANG_.call(null,G__25649_25773,G__25650_25774));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25645){var self__ = this;
var _25645__$1 = this;return self__.meta25644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25645,meta25644__$1){var self__ = this;
var _25645__$1 = this;return (new cljs.core.async.t25643(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25644){return (new cljs.core.async.t25643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25643(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25722){var state_val_25723 = (state_25722[(1)]);if((state_val_25723 === (7)))
{var inst_25664 = (state_25722[(7)]);var inst_25669 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25664);var state_25722__$1 = state_25722;var statearr_25724_25776 = state_25722__$1;(statearr_25724_25776[(2)] = inst_25669);
(statearr_25724_25776[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (20)))
{var inst_25679 = (state_25722[(8)]);var state_25722__$1 = state_25722;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25722__$1,(23),out,inst_25679);
} else
{if((state_val_25723 === (1)))
{var inst_25654 = (state_25722[(9)]);var inst_25654__$1 = calc_state();var inst_25655 = cljs.core.seq_QMARK_(inst_25654__$1);var state_25722__$1 = (function (){var statearr_25725 = state_25722;(statearr_25725[(9)] = inst_25654__$1);
return statearr_25725;
})();if(inst_25655)
{var statearr_25726_25777 = state_25722__$1;(statearr_25726_25777[(1)] = (2));
} else
{var statearr_25727_25778 = state_25722__$1;(statearr_25727_25778[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (24)))
{var inst_25672 = (state_25722[(10)]);var inst_25664 = inst_25672;var state_25722__$1 = (function (){var statearr_25728 = state_25722;(statearr_25728[(7)] = inst_25664);
return statearr_25728;
})();var statearr_25729_25779 = state_25722__$1;(statearr_25729_25779[(2)] = null);
(statearr_25729_25779[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (4)))
{var inst_25654 = (state_25722[(9)]);var inst_25660 = (state_25722[(2)]);var inst_25661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25660,cljs.core.constant$keyword$96);var inst_25662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25660,cljs.core.constant$keyword$95);var inst_25663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25660,cljs.core.constant$keyword$94);var inst_25664 = inst_25654;var state_25722__$1 = (function (){var statearr_25730 = state_25722;(statearr_25730[(11)] = inst_25662);
(statearr_25730[(12)] = inst_25663);
(statearr_25730[(7)] = inst_25664);
(statearr_25730[(13)] = inst_25661);
return statearr_25730;
})();var statearr_25731_25780 = state_25722__$1;(statearr_25731_25780[(2)] = null);
(statearr_25731_25780[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (15)))
{var state_25722__$1 = state_25722;var statearr_25732_25781 = state_25722__$1;(statearr_25732_25781[(2)] = null);
(statearr_25732_25781[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (21)))
{var inst_25672 = (state_25722[(10)]);var inst_25664 = inst_25672;var state_25722__$1 = (function (){var statearr_25733 = state_25722;(statearr_25733[(7)] = inst_25664);
return statearr_25733;
})();var statearr_25734_25782 = state_25722__$1;(statearr_25734_25782[(2)] = null);
(statearr_25734_25782[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (13)))
{var inst_25718 = (state_25722[(2)]);var state_25722__$1 = state_25722;var statearr_25735_25783 = state_25722__$1;(statearr_25735_25783[(2)] = inst_25718);
(statearr_25735_25783[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (22)))
{var inst_25716 = (state_25722[(2)]);var state_25722__$1 = state_25722;var statearr_25736_25784 = state_25722__$1;(statearr_25736_25784[(2)] = inst_25716);
(statearr_25736_25784[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (6)))
{var inst_25720 = (state_25722[(2)]);var state_25722__$1 = state_25722;return cljs.core.async.impl.ioc_helpers.return_chan(state_25722__$1,inst_25720);
} else
{if((state_val_25723 === (25)))
{var state_25722__$1 = state_25722;var statearr_25737_25785 = state_25722__$1;(statearr_25737_25785[(2)] = null);
(statearr_25737_25785[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (17)))
{var inst_25695 = (state_25722[(14)]);var state_25722__$1 = state_25722;var statearr_25738_25786 = state_25722__$1;(statearr_25738_25786[(2)] = inst_25695);
(statearr_25738_25786[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (3)))
{var inst_25654 = (state_25722[(9)]);var state_25722__$1 = state_25722;var statearr_25739_25787 = state_25722__$1;(statearr_25739_25787[(2)] = inst_25654);
(statearr_25739_25787[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (12)))
{var inst_25680 = (state_25722[(15)]);var inst_25675 = (state_25722[(16)]);var inst_25695 = (state_25722[(14)]);var inst_25695__$1 = (function (){var G__25740 = inst_25680;return (inst_25675.cljs$core$IFn$_invoke$arity$1 ? inst_25675.cljs$core$IFn$_invoke$arity$1(G__25740) : inst_25675.call(null,G__25740));
})();var state_25722__$1 = (function (){var statearr_25741 = state_25722;(statearr_25741[(14)] = inst_25695__$1);
return statearr_25741;
})();if(cljs.core.truth_(inst_25695__$1))
{var statearr_25742_25788 = state_25722__$1;(statearr_25742_25788[(1)] = (17));
} else
{var statearr_25743_25789 = state_25722__$1;(statearr_25743_25789[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (2)))
{var inst_25654 = (state_25722[(9)]);var inst_25657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25654);var state_25722__$1 = state_25722;var statearr_25744_25790 = state_25722__$1;(statearr_25744_25790[(2)] = inst_25657);
(statearr_25744_25790[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (23)))
{var inst_25707 = (state_25722[(2)]);var state_25722__$1 = state_25722;if(cljs.core.truth_(inst_25707))
{var statearr_25745_25791 = state_25722__$1;(statearr_25745_25791[(1)] = (24));
} else
{var statearr_25746_25792 = state_25722__$1;(statearr_25746_25792[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (19)))
{var inst_25704 = (state_25722[(2)]);var state_25722__$1 = state_25722;if(cljs.core.truth_(inst_25704))
{var statearr_25747_25793 = state_25722__$1;(statearr_25747_25793[(1)] = (20));
} else
{var statearr_25748_25794 = state_25722__$1;(statearr_25748_25794[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (11)))
{var inst_25679 = (state_25722[(8)]);var inst_25685 = (inst_25679 == null);var state_25722__$1 = state_25722;if(cljs.core.truth_(inst_25685))
{var statearr_25749_25795 = state_25722__$1;(statearr_25749_25795[(1)] = (14));
} else
{var statearr_25750_25796 = state_25722__$1;(statearr_25750_25796[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (9)))
{var inst_25672 = (state_25722[(10)]);var inst_25672__$1 = (state_25722[(2)]);var inst_25673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25672__$1,cljs.core.constant$keyword$96);var inst_25674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25672__$1,cljs.core.constant$keyword$95);var inst_25675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25672__$1,cljs.core.constant$keyword$94);var state_25722__$1 = (function (){var statearr_25751 = state_25722;(statearr_25751[(16)] = inst_25675);
(statearr_25751[(17)] = inst_25674);
(statearr_25751[(10)] = inst_25672__$1);
return statearr_25751;
})();return cljs.core.async.ioc_alts_BANG_(state_25722__$1,(10),inst_25673);
} else
{if((state_val_25723 === (5)))
{var inst_25664 = (state_25722[(7)]);var inst_25667 = cljs.core.seq_QMARK_(inst_25664);var state_25722__$1 = state_25722;if(inst_25667)
{var statearr_25752_25797 = state_25722__$1;(statearr_25752_25797[(1)] = (7));
} else
{var statearr_25753_25798 = state_25722__$1;(statearr_25753_25798[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (14)))
{var inst_25680 = (state_25722[(15)]);var inst_25687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25680);var state_25722__$1 = state_25722;var statearr_25754_25799 = state_25722__$1;(statearr_25754_25799[(2)] = inst_25687);
(statearr_25754_25799[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (26)))
{var inst_25712 = (state_25722[(2)]);var state_25722__$1 = state_25722;var statearr_25755_25800 = state_25722__$1;(statearr_25755_25800[(2)] = inst_25712);
(statearr_25755_25800[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (16)))
{var inst_25690 = (state_25722[(2)]);var inst_25691 = calc_state();var inst_25664 = inst_25691;var state_25722__$1 = (function (){var statearr_25756 = state_25722;(statearr_25756[(18)] = inst_25690);
(statearr_25756[(7)] = inst_25664);
return statearr_25756;
})();var statearr_25757_25801 = state_25722__$1;(statearr_25757_25801[(2)] = null);
(statearr_25757_25801[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (10)))
{var inst_25680 = (state_25722[(15)]);var inst_25679 = (state_25722[(8)]);var inst_25678 = (state_25722[(2)]);var inst_25679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25678,(0),null);var inst_25680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25678,(1),null);var inst_25681 = (inst_25679__$1 == null);var inst_25682 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25680__$1,change);var inst_25683 = (inst_25681) || (inst_25682);var state_25722__$1 = (function (){var statearr_25758 = state_25722;(statearr_25758[(15)] = inst_25680__$1);
(statearr_25758[(8)] = inst_25679__$1);
return statearr_25758;
})();if(cljs.core.truth_(inst_25683))
{var statearr_25759_25802 = state_25722__$1;(statearr_25759_25802[(1)] = (11));
} else
{var statearr_25760_25803 = state_25722__$1;(statearr_25760_25803[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (18)))
{var inst_25680 = (state_25722[(15)]);var inst_25675 = (state_25722[(16)]);var inst_25674 = (state_25722[(17)]);var inst_25699 = cljs.core.empty_QMARK_(inst_25675);var inst_25700 = (function (){var G__25761 = inst_25680;return (inst_25674.cljs$core$IFn$_invoke$arity$1 ? inst_25674.cljs$core$IFn$_invoke$arity$1(G__25761) : inst_25674.call(null,G__25761));
})();var inst_25701 = cljs.core.not(inst_25700);var inst_25702 = (inst_25699) && (inst_25701);var state_25722__$1 = state_25722;var statearr_25762_25804 = state_25722__$1;(statearr_25762_25804[(2)] = inst_25702);
(statearr_25762_25804[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25723 === (8)))
{var inst_25664 = (state_25722[(7)]);var state_25722__$1 = state_25722;var statearr_25763_25805 = state_25722__$1;(statearr_25763_25805[(2)] = inst_25664);
(statearr_25763_25805[(1)] = (9));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25767[(0)] = state_machine__12278__auto__);
(statearr_25767[(1)] = (1));
return statearr_25767;
});
var state_machine__12278__auto____1 = (function (state_25722){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25722);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25768){if((e25768 instanceof Object))
{var ex__12281__auto__ = e25768;var statearr_25769_25806 = state_25722;(statearr_25769_25806[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25722);
return cljs.core.constant$keyword$82;
} else
{throw e25768;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25807 = state_25722;
state_25722 = G__25807;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25722){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25770 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25775);
return statearr_25770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj25809 = {};return obj25809;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25813 = x__4277__auto__;return goog.typeOf(G__25813);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25817 = x__4277__auto__;return goog.typeOf(G__25817);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25823 = x__4277__auto__;return goog.typeOf(G__25823);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25825 = x__4277__auto__;return goog.typeOf(G__25825);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25964 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25964) : cljs.core.atom.call(null,G__25964));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25966 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25966) : cljs.core.deref.call(null,G__25966));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25826_SHARP_){if(cljs.core.truth_((function (){var G__25967 = topic;return (p1__25826_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25826_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25967) : p1__25826_SHARP_.call(null,G__25967));
})()))
{return p1__25826_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25826_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25968 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25968) : buf_fn.call(null,G__25968));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25969 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25970){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25970 = meta25970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25969.cljs$lang$type = true;
cljs.core.async.t25969.cljs$lang$ctorStr = "cljs.core.async/t25969";
cljs.core.async.t25969.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25969");
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25969.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25972 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25972) : self__.ensure_mult.call(null,G__25972));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25973 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25973) : cljs.core.deref.call(null,G__25973));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25974 = self__.mults;var G__25975 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25974,G__25975) : cljs.core.reset_BANG_.call(null,G__25974,G__25975));
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25971){var self__ = this;
var _25971__$1 = this;return self__.meta25970;
});})(mults,ensure_mult))
;
cljs.core.async.t25969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25971,meta25970__$1){var self__ = this;
var _25971__$1 = this;return (new cljs.core.async.t25969(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25970__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25969 = ((function (mults,ensure_mult){
return (function __GT_t25969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25970){return (new cljs.core.async.t25969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25970));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25969(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26098,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26098,mults,ensure_mult,p){
return (function (state_26047){var state_val_26048 = (state_26047[(1)]);if((state_val_26048 === (7)))
{var inst_26043 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26049_26099 = state_26047__$1;(statearr_26049_26099[(2)] = inst_26043);
(statearr_26049_26099[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (20)))
{var state_26047__$1 = state_26047;var statearr_26050_26100 = state_26047__$1;(statearr_26050_26100[(2)] = null);
(statearr_26050_26100[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (1)))
{var state_26047__$1 = state_26047;var statearr_26051_26101 = state_26047__$1;(statearr_26051_26101[(2)] = null);
(statearr_26051_26101[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (24)))
{var inst_26026 = (state_26047[(7)]);var inst_26035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26026);var state_26047__$1 = state_26047;var statearr_26052_26102 = state_26047__$1;(statearr_26052_26102[(2)] = inst_26035);
(statearr_26052_26102[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (4)))
{var inst_25978 = (state_26047[(8)]);var inst_25978__$1 = (state_26047[(2)]);var inst_25979 = (inst_25978__$1 == null);var state_26047__$1 = (function (){var statearr_26053 = state_26047;(statearr_26053[(8)] = inst_25978__$1);
return statearr_26053;
})();if(cljs.core.truth_(inst_25979))
{var statearr_26054_26103 = state_26047__$1;(statearr_26054_26103[(1)] = (5));
} else
{var statearr_26055_26104 = state_26047__$1;(statearr_26055_26104[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (15)))
{var inst_26020 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26056_26105 = state_26047__$1;(statearr_26056_26105[(2)] = inst_26020);
(statearr_26056_26105[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (21)))
{var inst_26040 = (state_26047[(2)]);var state_26047__$1 = (function (){var statearr_26057 = state_26047;(statearr_26057[(9)] = inst_26040);
return statearr_26057;
})();var statearr_26058_26106 = state_26047__$1;(statearr_26058_26106[(2)] = null);
(statearr_26058_26106[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (13)))
{var inst_26002 = (state_26047[(10)]);var inst_26004 = cljs.core.chunked_seq_QMARK_(inst_26002);var state_26047__$1 = state_26047;if(inst_26004)
{var statearr_26059_26107 = state_26047__$1;(statearr_26059_26107[(1)] = (16));
} else
{var statearr_26060_26108 = state_26047__$1;(statearr_26060_26108[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (22)))
{var inst_26032 = (state_26047[(2)]);var state_26047__$1 = state_26047;if(cljs.core.truth_(inst_26032))
{var statearr_26061_26109 = state_26047__$1;(statearr_26061_26109[(1)] = (23));
} else
{var statearr_26062_26110 = state_26047__$1;(statearr_26062_26110[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (6)))
{var inst_26026 = (state_26047[(7)]);var inst_25978 = (state_26047[(8)]);var inst_26028 = (state_26047[(11)]);var inst_26026__$1 = (function (){var G__26063 = inst_25978;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26063) : topic_fn.call(null,G__26063));
})();var inst_26027 = (function (){var G__26064 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26064) : cljs.core.deref.call(null,G__26064));
})();var inst_26028__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26027,inst_26026__$1);var state_26047__$1 = (function (){var statearr_26065 = state_26047;(statearr_26065[(7)] = inst_26026__$1);
(statearr_26065[(11)] = inst_26028__$1);
return statearr_26065;
})();if(cljs.core.truth_(inst_26028__$1))
{var statearr_26066_26111 = state_26047__$1;(statearr_26066_26111[(1)] = (19));
} else
{var statearr_26067_26112 = state_26047__$1;(statearr_26067_26112[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (25)))
{var inst_26037 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26068_26113 = state_26047__$1;(statearr_26068_26113[(2)] = inst_26037);
(statearr_26068_26113[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (17)))
{var inst_26002 = (state_26047[(10)]);var inst_26011 = cljs.core.first(inst_26002);var inst_26012 = cljs.core.async.muxch_STAR_(inst_26011);var inst_26013 = cljs.core.async.close_BANG_(inst_26012);var inst_26014 = cljs.core.next(inst_26002);var inst_25988 = inst_26014;var inst_25989 = null;var inst_25990 = (0);var inst_25991 = (0);var state_26047__$1 = (function (){var statearr_26069 = state_26047;(statearr_26069[(12)] = inst_25988);
(statearr_26069[(13)] = inst_26013);
(statearr_26069[(14)] = inst_25991);
(statearr_26069[(15)] = inst_25990);
(statearr_26069[(16)] = inst_25989);
return statearr_26069;
})();var statearr_26070_26114 = state_26047__$1;(statearr_26070_26114[(2)] = null);
(statearr_26070_26114[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (3)))
{var inst_26045 = (state_26047[(2)]);var state_26047__$1 = state_26047;return cljs.core.async.impl.ioc_helpers.return_chan(state_26047__$1,inst_26045);
} else
{if((state_val_26048 === (12)))
{var inst_26022 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26071_26115 = state_26047__$1;(statearr_26071_26115[(2)] = inst_26022);
(statearr_26071_26115[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (2)))
{var state_26047__$1 = state_26047;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26047__$1,(4),ch);
} else
{if((state_val_26048 === (23)))
{var state_26047__$1 = state_26047;var statearr_26072_26116 = state_26047__$1;(statearr_26072_26116[(2)] = null);
(statearr_26072_26116[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (19)))
{var inst_25978 = (state_26047[(8)]);var inst_26028 = (state_26047[(11)]);var inst_26030 = cljs.core.async.muxch_STAR_(inst_26028);var state_26047__$1 = state_26047;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26047__$1,(22),inst_26030,inst_25978);
} else
{if((state_val_26048 === (11)))
{var inst_25988 = (state_26047[(12)]);var inst_26002 = (state_26047[(10)]);var inst_26002__$1 = cljs.core.seq(inst_25988);var state_26047__$1 = (function (){var statearr_26073 = state_26047;(statearr_26073[(10)] = inst_26002__$1);
return statearr_26073;
})();if(inst_26002__$1)
{var statearr_26074_26117 = state_26047__$1;(statearr_26074_26117[(1)] = (13));
} else
{var statearr_26075_26118 = state_26047__$1;(statearr_26075_26118[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (9)))
{var inst_26024 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26076_26119 = state_26047__$1;(statearr_26076_26119[(2)] = inst_26024);
(statearr_26076_26119[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (5)))
{var inst_25985 = (function (){var G__26077 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26077) : cljs.core.deref.call(null,G__26077));
})();var inst_25986 = cljs.core.vals(inst_25985);var inst_25987 = cljs.core.seq(inst_25986);var inst_25988 = inst_25987;var inst_25989 = null;var inst_25990 = (0);var inst_25991 = (0);var state_26047__$1 = (function (){var statearr_26078 = state_26047;(statearr_26078[(12)] = inst_25988);
(statearr_26078[(14)] = inst_25991);
(statearr_26078[(15)] = inst_25990);
(statearr_26078[(16)] = inst_25989);
return statearr_26078;
})();var statearr_26079_26120 = state_26047__$1;(statearr_26079_26120[(2)] = null);
(statearr_26079_26120[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (14)))
{var state_26047__$1 = state_26047;var statearr_26083_26121 = state_26047__$1;(statearr_26083_26121[(2)] = null);
(statearr_26083_26121[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (16)))
{var inst_26002 = (state_26047[(10)]);var inst_26006 = cljs.core.chunk_first(inst_26002);var inst_26007 = cljs.core.chunk_rest(inst_26002);var inst_26008 = cljs.core.count(inst_26006);var inst_25988 = inst_26007;var inst_25989 = inst_26006;var inst_25990 = inst_26008;var inst_25991 = (0);var state_26047__$1 = (function (){var statearr_26084 = state_26047;(statearr_26084[(12)] = inst_25988);
(statearr_26084[(14)] = inst_25991);
(statearr_26084[(15)] = inst_25990);
(statearr_26084[(16)] = inst_25989);
return statearr_26084;
})();var statearr_26085_26122 = state_26047__$1;(statearr_26085_26122[(2)] = null);
(statearr_26085_26122[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (10)))
{var inst_25988 = (state_26047[(12)]);var inst_25991 = (state_26047[(14)]);var inst_25990 = (state_26047[(15)]);var inst_25989 = (state_26047[(16)]);var inst_25996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25989,inst_25991);var inst_25997 = cljs.core.async.muxch_STAR_(inst_25996);var inst_25998 = cljs.core.async.close_BANG_(inst_25997);var inst_25999 = (inst_25991 + (1));var tmp26080 = inst_25988;var tmp26081 = inst_25990;var tmp26082 = inst_25989;var inst_25988__$1 = tmp26080;var inst_25989__$1 = tmp26082;var inst_25990__$1 = tmp26081;var inst_25991__$1 = inst_25999;var state_26047__$1 = (function (){var statearr_26086 = state_26047;(statearr_26086[(12)] = inst_25988__$1);
(statearr_26086[(14)] = inst_25991__$1);
(statearr_26086[(15)] = inst_25990__$1);
(statearr_26086[(16)] = inst_25989__$1);
(statearr_26086[(17)] = inst_25998);
return statearr_26086;
})();var statearr_26087_26123 = state_26047__$1;(statearr_26087_26123[(2)] = null);
(statearr_26087_26123[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (18)))
{var inst_26017 = (state_26047[(2)]);var state_26047__$1 = state_26047;var statearr_26088_26124 = state_26047__$1;(statearr_26088_26124[(2)] = inst_26017);
(statearr_26088_26124[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26048 === (8)))
{var inst_25991 = (state_26047[(14)]);var inst_25990 = (state_26047[(15)]);var inst_25993 = (inst_25991 < inst_25990);var inst_25994 = inst_25993;var state_26047__$1 = state_26047;if(cljs.core.truth_(inst_25994))
{var statearr_26089_26125 = state_26047__$1;(statearr_26089_26125[(1)] = (10));
} else
{var statearr_26090_26126 = state_26047__$1;(statearr_26090_26126[(1)] = (11));
}
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___26098,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26098,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26094[(0)] = state_machine__12278__auto__);
(statearr_26094[(1)] = (1));
return statearr_26094;
});
var state_machine__12278__auto____1 = (function (state_26047){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26047);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26095){if((e26095 instanceof Object))
{var ex__12281__auto__ = e26095;var statearr_26096_26127 = state_26047;(statearr_26096_26127[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26047);
return cljs.core.constant$keyword$82;
} else
{throw e26095;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26128 = state_26047;
state_26047 = G__26128;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26098,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26097 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26098);
return statearr_26097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26098,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26209 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26209) : cljs.core.atom.call(null,G__26209));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26248){var state_val_26249 = (state_26248[(1)]);if((state_val_26249 === (7)))
{var state_26248__$1 = state_26248;var statearr_26250_26283 = state_26248__$1;(statearr_26250_26283[(2)] = null);
(statearr_26250_26283[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (1)))
{var state_26248__$1 = state_26248;var statearr_26251_26284 = state_26248__$1;(statearr_26251_26284[(2)] = null);
(statearr_26251_26284[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (4)))
{var inst_26212 = (state_26248[(7)]);var inst_26214 = (inst_26212 < cnt);var state_26248__$1 = state_26248;if(cljs.core.truth_(inst_26214))
{var statearr_26252_26285 = state_26248__$1;(statearr_26252_26285[(1)] = (6));
} else
{var statearr_26253_26286 = state_26248__$1;(statearr_26253_26286[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (15)))
{var inst_26244 = (state_26248[(2)]);var state_26248__$1 = state_26248;var statearr_26254_26287 = state_26248__$1;(statearr_26254_26287[(2)] = inst_26244);
(statearr_26254_26287[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (13)))
{var inst_26237 = cljs.core.async.close_BANG_(out);var state_26248__$1 = state_26248;var statearr_26255_26288 = state_26248__$1;(statearr_26255_26288[(2)] = inst_26237);
(statearr_26255_26288[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (6)))
{var state_26248__$1 = state_26248;var statearr_26256_26289 = state_26248__$1;(statearr_26256_26289[(2)] = null);
(statearr_26256_26289[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (3)))
{var inst_26246 = (state_26248[(2)]);var state_26248__$1 = state_26248;return cljs.core.async.impl.ioc_helpers.return_chan(state_26248__$1,inst_26246);
} else
{if((state_val_26249 === (12)))
{var inst_26234 = (state_26248[(8)]);var inst_26234__$1 = (state_26248[(2)]);var inst_26235 = cljs.core.some(cljs.core.nil_QMARK_,inst_26234__$1);var state_26248__$1 = (function (){var statearr_26257 = state_26248;(statearr_26257[(8)] = inst_26234__$1);
return statearr_26257;
})();if(cljs.core.truth_(inst_26235))
{var statearr_26258_26290 = state_26248__$1;(statearr_26258_26290[(1)] = (13));
} else
{var statearr_26259_26291 = state_26248__$1;(statearr_26259_26291[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (2)))
{var inst_26211 = (function (){var G__26260 = dctr;var G__26261 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26260,G__26261) : cljs.core.reset_BANG_.call(null,G__26260,G__26261));
})();var inst_26212 = (0);var state_26248__$1 = (function (){var statearr_26262 = state_26248;(statearr_26262[(9)] = inst_26211);
(statearr_26262[(7)] = inst_26212);
return statearr_26262;
})();var statearr_26263_26292 = state_26248__$1;(statearr_26263_26292[(2)] = null);
(statearr_26263_26292[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (11)))
{var inst_26212 = (state_26248[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26248,(10),Object,null,(9));var inst_26221 = (function (){var G__26264 = inst_26212;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26264) : chs__$1.call(null,G__26264));
})();var inst_26222 = (function (){var G__26265 = inst_26212;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26265) : done.call(null,G__26265));
})();var inst_26223 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26221,inst_26222);var state_26248__$1 = state_26248;var statearr_26266_26293 = state_26248__$1;(statearr_26266_26293[(2)] = inst_26223);
cljs.core.async.impl.ioc_helpers.process_exception(state_26248__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (9)))
{var inst_26212 = (state_26248[(7)]);var inst_26225 = (state_26248[(2)]);var inst_26226 = (inst_26212 + (1));var inst_26212__$1 = inst_26226;var state_26248__$1 = (function (){var statearr_26267 = state_26248;(statearr_26267[(7)] = inst_26212__$1);
(statearr_26267[(10)] = inst_26225);
return statearr_26267;
})();var statearr_26268_26294 = state_26248__$1;(statearr_26268_26294[(2)] = null);
(statearr_26268_26294[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (5)))
{var inst_26232 = (state_26248[(2)]);var state_26248__$1 = (function (){var statearr_26269 = state_26248;(statearr_26269[(11)] = inst_26232);
return statearr_26269;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26248__$1,(12),dchan);
} else
{if((state_val_26249 === (14)))
{var inst_26234 = (state_26248[(8)]);var inst_26239 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26234);var state_26248__$1 = state_26248;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26248__$1,(16),out,inst_26239);
} else
{if((state_val_26249 === (16)))
{var inst_26241 = (state_26248[(2)]);var state_26248__$1 = (function (){var statearr_26270 = state_26248;(statearr_26270[(12)] = inst_26241);
return statearr_26270;
})();var statearr_26271_26295 = state_26248__$1;(statearr_26271_26295[(2)] = null);
(statearr_26271_26295[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (10)))
{var inst_26216 = (state_26248[(2)]);var inst_26217 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26248__$1 = (function (){var statearr_26272 = state_26248;(statearr_26272[(13)] = inst_26216);
return statearr_26272;
})();var statearr_26273_26296 = state_26248__$1;(statearr_26273_26296[(2)] = inst_26217);
cljs.core.async.impl.ioc_helpers.process_exception(state_26248__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26249 === (8)))
{var inst_26230 = (state_26248[(2)]);var state_26248__$1 = state_26248;var statearr_26274_26297 = state_26248__$1;(statearr_26274_26297[(2)] = inst_26230);
(statearr_26274_26297[(1)] = (5));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26278[(0)] = state_machine__12278__auto__);
(statearr_26278[(1)] = (1));
return statearr_26278;
});
var state_machine__12278__auto____1 = (function (state_26248){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26248);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26279){if((e26279 instanceof Object))
{var ex__12281__auto__ = e26279;var statearr_26280_26298 = state_26248;(statearr_26280_26298[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26248);
return cljs.core.constant$keyword$82;
} else
{throw e26279;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26299 = state_26248;
state_26248 = G__26299;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26248){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26281 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26282);
return statearr_26281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26282,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26409,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26409,out){
return (function (state_26385){var state_val_26386 = (state_26385[(1)]);if((state_val_26386 === (7)))
{var inst_26364 = (state_26385[(7)]);var inst_26365 = (state_26385[(8)]);var inst_26364__$1 = (state_26385[(2)]);var inst_26365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26364__$1,(0),null);var inst_26366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26364__$1,(1),null);var inst_26367 = (inst_26365__$1 == null);var state_26385__$1 = (function (){var statearr_26387 = state_26385;(statearr_26387[(7)] = inst_26364__$1);
(statearr_26387[(9)] = inst_26366);
(statearr_26387[(8)] = inst_26365__$1);
return statearr_26387;
})();if(cljs.core.truth_(inst_26367))
{var statearr_26388_26410 = state_26385__$1;(statearr_26388_26410[(1)] = (8));
} else
{var statearr_26389_26411 = state_26385__$1;(statearr_26389_26411[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (1)))
{var inst_26356 = cljs.core.vec(chs);var inst_26357 = inst_26356;var state_26385__$1 = (function (){var statearr_26390 = state_26385;(statearr_26390[(10)] = inst_26357);
return statearr_26390;
})();var statearr_26391_26412 = state_26385__$1;(statearr_26391_26412[(2)] = null);
(statearr_26391_26412[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (4)))
{var inst_26357 = (state_26385[(10)]);var state_26385__$1 = state_26385;return cljs.core.async.ioc_alts_BANG_(state_26385__$1,(7),inst_26357);
} else
{if((state_val_26386 === (6)))
{var inst_26381 = (state_26385[(2)]);var state_26385__$1 = state_26385;var statearr_26392_26413 = state_26385__$1;(statearr_26392_26413[(2)] = inst_26381);
(statearr_26392_26413[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (3)))
{var inst_26383 = (state_26385[(2)]);var state_26385__$1 = state_26385;return cljs.core.async.impl.ioc_helpers.return_chan(state_26385__$1,inst_26383);
} else
{if((state_val_26386 === (2)))
{var inst_26357 = (state_26385[(10)]);var inst_26359 = cljs.core.count(inst_26357);var inst_26360 = (inst_26359 > (0));var state_26385__$1 = state_26385;if(cljs.core.truth_(inst_26360))
{var statearr_26394_26414 = state_26385__$1;(statearr_26394_26414[(1)] = (4));
} else
{var statearr_26395_26415 = state_26385__$1;(statearr_26395_26415[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (11)))
{var inst_26357 = (state_26385[(10)]);var inst_26374 = (state_26385[(2)]);var tmp26393 = inst_26357;var inst_26357__$1 = tmp26393;var state_26385__$1 = (function (){var statearr_26396 = state_26385;(statearr_26396[(10)] = inst_26357__$1);
(statearr_26396[(11)] = inst_26374);
return statearr_26396;
})();var statearr_26397_26416 = state_26385__$1;(statearr_26397_26416[(2)] = null);
(statearr_26397_26416[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (9)))
{var inst_26365 = (state_26385[(8)]);var state_26385__$1 = state_26385;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26385__$1,(11),out,inst_26365);
} else
{if((state_val_26386 === (5)))
{var inst_26379 = cljs.core.async.close_BANG_(out);var state_26385__$1 = state_26385;var statearr_26398_26417 = state_26385__$1;(statearr_26398_26417[(2)] = inst_26379);
(statearr_26398_26417[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (10)))
{var inst_26377 = (state_26385[(2)]);var state_26385__$1 = state_26385;var statearr_26399_26418 = state_26385__$1;(statearr_26399_26418[(2)] = inst_26377);
(statearr_26399_26418[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26386 === (8)))
{var inst_26364 = (state_26385[(7)]);var inst_26366 = (state_26385[(9)]);var inst_26357 = (state_26385[(10)]);var inst_26365 = (state_26385[(8)]);var inst_26369 = (function (){var c = inst_26366;var v = inst_26365;var vec__26362 = inst_26364;var cs = inst_26357;return ((function (c,v,vec__26362,cs,inst_26364,inst_26366,inst_26357,inst_26365,state_val_26386,c__12292__auto___26409,out){
return (function (p1__26300_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26300_SHARP_);
});
;})(c,v,vec__26362,cs,inst_26364,inst_26366,inst_26357,inst_26365,state_val_26386,c__12292__auto___26409,out))
})();var inst_26370 = cljs.core.filterv(inst_26369,inst_26357);var inst_26357__$1 = inst_26370;var state_26385__$1 = (function (){var statearr_26400 = state_26385;(statearr_26400[(10)] = inst_26357__$1);
return statearr_26400;
})();var statearr_26401_26419 = state_26385__$1;(statearr_26401_26419[(2)] = null);
(statearr_26401_26419[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___26409,out))
;return ((function (switch__12277__auto__,c__12292__auto___26409,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26405 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26405[(0)] = state_machine__12278__auto__);
(statearr_26405[(1)] = (1));
return statearr_26405;
});
var state_machine__12278__auto____1 = (function (state_26385){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26385);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26406){if((e26406 instanceof Object))
{var ex__12281__auto__ = e26406;var statearr_26407_26420 = state_26385;(statearr_26407_26420[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26385);
return cljs.core.constant$keyword$82;
} else
{throw e26406;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26421 = state_26385;
state_26385 = G__26421;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26385){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26409,out))
})();var state__12294__auto__ = (function (){var statearr_26408 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26409);
return statearr_26408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26409,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26517,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26517,out){
return (function (state_26494){var state_val_26495 = (state_26494[(1)]);if((state_val_26495 === (7)))
{var inst_26476 = (state_26494[(7)]);var inst_26476__$1 = (state_26494[(2)]);var inst_26477 = (inst_26476__$1 == null);var inst_26478 = cljs.core.not(inst_26477);var state_26494__$1 = (function (){var statearr_26496 = state_26494;(statearr_26496[(7)] = inst_26476__$1);
return statearr_26496;
})();if(inst_26478)
{var statearr_26497_26518 = state_26494__$1;(statearr_26497_26518[(1)] = (8));
} else
{var statearr_26498_26519 = state_26494__$1;(statearr_26498_26519[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (1)))
{var inst_26471 = (0);var state_26494__$1 = (function (){var statearr_26499 = state_26494;(statearr_26499[(8)] = inst_26471);
return statearr_26499;
})();var statearr_26500_26520 = state_26494__$1;(statearr_26500_26520[(2)] = null);
(statearr_26500_26520[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (4)))
{var state_26494__$1 = state_26494;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26494__$1,(7),ch);
} else
{if((state_val_26495 === (6)))
{var inst_26489 = (state_26494[(2)]);var state_26494__$1 = state_26494;var statearr_26501_26521 = state_26494__$1;(statearr_26501_26521[(2)] = inst_26489);
(statearr_26501_26521[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (3)))
{var inst_26491 = (state_26494[(2)]);var inst_26492 = cljs.core.async.close_BANG_(out);var state_26494__$1 = (function (){var statearr_26502 = state_26494;(statearr_26502[(9)] = inst_26491);
return statearr_26502;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26494__$1,inst_26492);
} else
{if((state_val_26495 === (2)))
{var inst_26471 = (state_26494[(8)]);var inst_26473 = (inst_26471 < n);var state_26494__$1 = state_26494;if(cljs.core.truth_(inst_26473))
{var statearr_26503_26522 = state_26494__$1;(statearr_26503_26522[(1)] = (4));
} else
{var statearr_26504_26523 = state_26494__$1;(statearr_26504_26523[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (11)))
{var inst_26471 = (state_26494[(8)]);var inst_26481 = (state_26494[(2)]);var inst_26482 = (inst_26471 + (1));var inst_26471__$1 = inst_26482;var state_26494__$1 = (function (){var statearr_26505 = state_26494;(statearr_26505[(10)] = inst_26481);
(statearr_26505[(8)] = inst_26471__$1);
return statearr_26505;
})();var statearr_26506_26524 = state_26494__$1;(statearr_26506_26524[(2)] = null);
(statearr_26506_26524[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (9)))
{var state_26494__$1 = state_26494;var statearr_26507_26525 = state_26494__$1;(statearr_26507_26525[(2)] = null);
(statearr_26507_26525[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (5)))
{var state_26494__$1 = state_26494;var statearr_26508_26526 = state_26494__$1;(statearr_26508_26526[(2)] = null);
(statearr_26508_26526[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (10)))
{var inst_26486 = (state_26494[(2)]);var state_26494__$1 = state_26494;var statearr_26509_26527 = state_26494__$1;(statearr_26509_26527[(2)] = inst_26486);
(statearr_26509_26527[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (8)))
{var inst_26476 = (state_26494[(7)]);var state_26494__$1 = state_26494;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26494__$1,(11),out,inst_26476);
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
});})(c__12292__auto___26517,out))
;return ((function (switch__12277__auto__,c__12292__auto___26517,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26513 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26513[(0)] = state_machine__12278__auto__);
(statearr_26513[(1)] = (1));
return statearr_26513;
});
var state_machine__12278__auto____1 = (function (state_26494){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26494);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object))
{var ex__12281__auto__ = e26514;var statearr_26515_26528 = state_26494;(statearr_26515_26528[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26494);
return cljs.core.constant$keyword$82;
} else
{throw e26514;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26529 = state_26494;
state_26494 = G__26529;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26494){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26517,out))
})();var state__12294__auto__ = (function (){var statearr_26516 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26517);
return statearr_26516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26517,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26542 = (function (ch,f,map_LT_,meta26543){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26543 = meta26543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26542.cljs$lang$type = true;
cljs.core.async.t26542.cljs$lang$ctorStr = "cljs.core.async/t26542";
cljs.core.async.t26542.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26542");
});
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26545 = (function (fn1,_,meta26543,ch,f,map_LT_,meta26546){
this.fn1 = fn1;
this._ = _;
this.meta26543 = meta26543;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26546 = meta26546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26545.cljs$lang$type = true;
cljs.core.async.t26545.cljs$lang$ctorStr = "cljs.core.async/t26545";
cljs.core.async.t26545.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26545");
});})(___$1))
;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26530_SHARP_){var G__26548 = (((p1__26530_SHARP_ == null))?null:(function (){var G__26549 = p1__26530_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26549) : self__.f.call(null,G__26549));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26548) : f1.call(null,G__26548));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26547){var self__ = this;
var _26547__$1 = this;return self__.meta26546;
});})(___$1))
;
cljs.core.async.t26545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26547,meta26546__$1){var self__ = this;
var _26547__$1 = this;return (new cljs.core.async.t26545(self__.fn1,self__._,self__.meta26543,self__.ch,self__.f,self__.map_LT_,meta26546__$1));
});})(___$1))
;
cljs.core.async.__GT_t26545 = ((function (___$1){
return (function __GT_t26545(fn1__$1,___$2,meta26543__$1,ch__$2,f__$2,map_LT___$2,meta26546){return (new cljs.core.async.t26545(fn1__$1,___$2,meta26543__$1,ch__$2,f__$2,map_LT___$2,meta26546));
});})(___$1))
;
}
return (new cljs.core.async.t26545(fn1,___$1,self__.meta26543,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26550 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26550) : cljs.core.deref.call(null,G__26550));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26551 = (function (){var G__26552 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26552) : cljs.core.deref.call(null,G__26552));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26551) : self__.f.call(null,G__26551));
})());
} else
{return ret;
}
});
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26544){var self__ = this;
var _26544__$1 = this;return self__.meta26543;
});
cljs.core.async.t26542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26544,meta26543__$1){var self__ = this;
var _26544__$1 = this;return (new cljs.core.async.t26542(self__.ch,self__.f,self__.map_LT_,meta26543__$1));
});
cljs.core.async.__GT_t26542 = (function __GT_t26542(ch__$1,f__$1,map_LT___$1,meta26543){return (new cljs.core.async.t26542(ch__$1,f__$1,map_LT___$1,meta26543));
});
}
return (new cljs.core.async.t26542(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26557 = (function (ch,f,map_GT_,meta26558){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26558 = meta26558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26557.cljs$lang$type = true;
cljs.core.async.t26557.cljs$lang$ctorStr = "cljs.core.async/t26557";
cljs.core.async.t26557.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26557");
});
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26560 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26560) : self__.f.call(null,G__26560));
})(),fn1);
});
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26559){var self__ = this;
var _26559__$1 = this;return self__.meta26558;
});
cljs.core.async.t26557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26559,meta26558__$1){var self__ = this;
var _26559__$1 = this;return (new cljs.core.async.t26557(self__.ch,self__.f,self__.map_GT_,meta26558__$1));
});
cljs.core.async.__GT_t26557 = (function __GT_t26557(ch__$1,f__$1,map_GT___$1,meta26558){return (new cljs.core.async.t26557(ch__$1,f__$1,map_GT___$1,meta26558));
});
}
return (new cljs.core.async.t26557(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26565 = (function (ch,p,filter_GT_,meta26566){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26566 = meta26566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26565.cljs$lang$type = true;
cljs.core.async.t26565.cljs$lang$ctorStr = "cljs.core.async/t26565";
cljs.core.async.t26565.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26565");
});
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26568 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26568) : self__.p.call(null,G__26568));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26565.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26567){var self__ = this;
var _26567__$1 = this;return self__.meta26566;
});
cljs.core.async.t26565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26567,meta26566__$1){var self__ = this;
var _26567__$1 = this;return (new cljs.core.async.t26565(self__.ch,self__.p,self__.filter_GT_,meta26566__$1));
});
cljs.core.async.__GT_t26565 = (function __GT_t26565(ch__$1,p__$1,filter_GT___$1,meta26566){return (new cljs.core.async.t26565(ch__$1,p__$1,filter_GT___$1,meta26566));
});
}
return (new cljs.core.async.t26565(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26656,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26656,out){
return (function (state_26634){var state_val_26635 = (state_26634[(1)]);if((state_val_26635 === (7)))
{var inst_26630 = (state_26634[(2)]);var state_26634__$1 = state_26634;var statearr_26636_26657 = state_26634__$1;(statearr_26636_26657[(2)] = inst_26630);
(statearr_26636_26657[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (1)))
{var state_26634__$1 = state_26634;var statearr_26637_26658 = state_26634__$1;(statearr_26637_26658[(2)] = null);
(statearr_26637_26658[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (4)))
{var inst_26616 = (state_26634[(7)]);var inst_26616__$1 = (state_26634[(2)]);var inst_26617 = (inst_26616__$1 == null);var state_26634__$1 = (function (){var statearr_26638 = state_26634;(statearr_26638[(7)] = inst_26616__$1);
return statearr_26638;
})();if(cljs.core.truth_(inst_26617))
{var statearr_26639_26659 = state_26634__$1;(statearr_26639_26659[(1)] = (5));
} else
{var statearr_26640_26660 = state_26634__$1;(statearr_26640_26660[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (6)))
{var inst_26616 = (state_26634[(7)]);var inst_26621 = (function (){var G__26641 = inst_26616;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26641) : p.call(null,G__26641));
})();var state_26634__$1 = state_26634;if(cljs.core.truth_(inst_26621))
{var statearr_26642_26661 = state_26634__$1;(statearr_26642_26661[(1)] = (8));
} else
{var statearr_26643_26662 = state_26634__$1;(statearr_26643_26662[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (3)))
{var inst_26632 = (state_26634[(2)]);var state_26634__$1 = state_26634;return cljs.core.async.impl.ioc_helpers.return_chan(state_26634__$1,inst_26632);
} else
{if((state_val_26635 === (2)))
{var state_26634__$1 = state_26634;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26634__$1,(4),ch);
} else
{if((state_val_26635 === (11)))
{var inst_26624 = (state_26634[(2)]);var state_26634__$1 = state_26634;var statearr_26644_26663 = state_26634__$1;(statearr_26644_26663[(2)] = inst_26624);
(statearr_26644_26663[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (9)))
{var state_26634__$1 = state_26634;var statearr_26645_26664 = state_26634__$1;(statearr_26645_26664[(2)] = null);
(statearr_26645_26664[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (5)))
{var inst_26619 = cljs.core.async.close_BANG_(out);var state_26634__$1 = state_26634;var statearr_26646_26665 = state_26634__$1;(statearr_26646_26665[(2)] = inst_26619);
(statearr_26646_26665[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (10)))
{var inst_26627 = (state_26634[(2)]);var state_26634__$1 = (function (){var statearr_26647 = state_26634;(statearr_26647[(8)] = inst_26627);
return statearr_26647;
})();var statearr_26648_26666 = state_26634__$1;(statearr_26648_26666[(2)] = null);
(statearr_26648_26666[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26635 === (8)))
{var inst_26616 = (state_26634[(7)]);var state_26634__$1 = state_26634;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26634__$1,(11),out,inst_26616);
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
});})(c__12292__auto___26656,out))
;return ((function (switch__12277__auto__,c__12292__auto___26656,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26652 = [null,null,null,null,null,null,null,null,null];(statearr_26652[(0)] = state_machine__12278__auto__);
(statearr_26652[(1)] = (1));
return statearr_26652;
});
var state_machine__12278__auto____1 = (function (state_26634){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26634);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26653){if((e26653 instanceof Object))
{var ex__12281__auto__ = e26653;var statearr_26654_26667 = state_26634;(statearr_26654_26667[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26634);
return cljs.core.constant$keyword$82;
} else
{throw e26653;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26668 = state_26634;
state_26634 = G__26668;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26634){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26656,out))
})();var state__12294__auto__ = (function (){var statearr_26655 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26656);
return statearr_26655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26656,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__){
return (function (state_26838){var state_val_26839 = (state_26838[(1)]);if((state_val_26839 === (7)))
{var inst_26834 = (state_26838[(2)]);var state_26838__$1 = state_26838;var statearr_26840_26882 = state_26838__$1;(statearr_26840_26882[(2)] = inst_26834);
(statearr_26840_26882[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (20)))
{var inst_26804 = (state_26838[(7)]);var inst_26815 = (state_26838[(2)]);var inst_26816 = cljs.core.next(inst_26804);var inst_26790 = inst_26816;var inst_26791 = null;var inst_26792 = (0);var inst_26793 = (0);var state_26838__$1 = (function (){var statearr_26841 = state_26838;(statearr_26841[(8)] = inst_26792);
(statearr_26841[(9)] = inst_26815);
(statearr_26841[(10)] = inst_26790);
(statearr_26841[(11)] = inst_26791);
(statearr_26841[(12)] = inst_26793);
return statearr_26841;
})();var statearr_26842_26883 = state_26838__$1;(statearr_26842_26883[(2)] = null);
(statearr_26842_26883[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (1)))
{var state_26838__$1 = state_26838;var statearr_26843_26884 = state_26838__$1;(statearr_26843_26884[(2)] = null);
(statearr_26843_26884[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (4)))
{var inst_26779 = (state_26838[(13)]);var inst_26779__$1 = (state_26838[(2)]);var inst_26780 = (inst_26779__$1 == null);var state_26838__$1 = (function (){var statearr_26844 = state_26838;(statearr_26844[(13)] = inst_26779__$1);
return statearr_26844;
})();if(cljs.core.truth_(inst_26780))
{var statearr_26845_26885 = state_26838__$1;(statearr_26845_26885[(1)] = (5));
} else
{var statearr_26846_26886 = state_26838__$1;(statearr_26846_26886[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (15)))
{var state_26838__$1 = state_26838;var statearr_26850_26887 = state_26838__$1;(statearr_26850_26887[(2)] = null);
(statearr_26850_26887[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (21)))
{var state_26838__$1 = state_26838;var statearr_26851_26888 = state_26838__$1;(statearr_26851_26888[(2)] = null);
(statearr_26851_26888[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (13)))
{var inst_26792 = (state_26838[(8)]);var inst_26790 = (state_26838[(10)]);var inst_26791 = (state_26838[(11)]);var inst_26793 = (state_26838[(12)]);var inst_26800 = (state_26838[(2)]);var inst_26801 = (inst_26793 + (1));var tmp26847 = inst_26792;var tmp26848 = inst_26790;var tmp26849 = inst_26791;var inst_26790__$1 = tmp26848;var inst_26791__$1 = tmp26849;var inst_26792__$1 = tmp26847;var inst_26793__$1 = inst_26801;var state_26838__$1 = (function (){var statearr_26852 = state_26838;(statearr_26852[(14)] = inst_26800);
(statearr_26852[(8)] = inst_26792__$1);
(statearr_26852[(10)] = inst_26790__$1);
(statearr_26852[(11)] = inst_26791__$1);
(statearr_26852[(12)] = inst_26793__$1);
return statearr_26852;
})();var statearr_26853_26889 = state_26838__$1;(statearr_26853_26889[(2)] = null);
(statearr_26853_26889[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (22)))
{var state_26838__$1 = state_26838;var statearr_26854_26890 = state_26838__$1;(statearr_26854_26890[(2)] = null);
(statearr_26854_26890[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (6)))
{var inst_26779 = (state_26838[(13)]);var inst_26788 = (function (){var G__26855 = inst_26779;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26855) : f.call(null,G__26855));
})();var inst_26789 = cljs.core.seq(inst_26788);var inst_26790 = inst_26789;var inst_26791 = null;var inst_26792 = (0);var inst_26793 = (0);var state_26838__$1 = (function (){var statearr_26856 = state_26838;(statearr_26856[(8)] = inst_26792);
(statearr_26856[(10)] = inst_26790);
(statearr_26856[(11)] = inst_26791);
(statearr_26856[(12)] = inst_26793);
return statearr_26856;
})();var statearr_26857_26891 = state_26838__$1;(statearr_26857_26891[(2)] = null);
(statearr_26857_26891[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (17)))
{var inst_26804 = (state_26838[(7)]);var inst_26808 = cljs.core.chunk_first(inst_26804);var inst_26809 = cljs.core.chunk_rest(inst_26804);var inst_26810 = cljs.core.count(inst_26808);var inst_26790 = inst_26809;var inst_26791 = inst_26808;var inst_26792 = inst_26810;var inst_26793 = (0);var state_26838__$1 = (function (){var statearr_26858 = state_26838;(statearr_26858[(8)] = inst_26792);
(statearr_26858[(10)] = inst_26790);
(statearr_26858[(11)] = inst_26791);
(statearr_26858[(12)] = inst_26793);
return statearr_26858;
})();var statearr_26859_26892 = state_26838__$1;(statearr_26859_26892[(2)] = null);
(statearr_26859_26892[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (3)))
{var inst_26836 = (state_26838[(2)]);var state_26838__$1 = state_26838;return cljs.core.async.impl.ioc_helpers.return_chan(state_26838__$1,inst_26836);
} else
{if((state_val_26839 === (12)))
{var inst_26824 = (state_26838[(2)]);var state_26838__$1 = state_26838;var statearr_26860_26893 = state_26838__$1;(statearr_26860_26893[(2)] = inst_26824);
(statearr_26860_26893[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (2)))
{var state_26838__$1 = state_26838;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26838__$1,(4),in$);
} else
{if((state_val_26839 === (23)))
{var inst_26832 = (state_26838[(2)]);var state_26838__$1 = state_26838;var statearr_26861_26894 = state_26838__$1;(statearr_26861_26894[(2)] = inst_26832);
(statearr_26861_26894[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (19)))
{var inst_26819 = (state_26838[(2)]);var state_26838__$1 = state_26838;var statearr_26862_26895 = state_26838__$1;(statearr_26862_26895[(2)] = inst_26819);
(statearr_26862_26895[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (11)))
{var inst_26804 = (state_26838[(7)]);var inst_26790 = (state_26838[(10)]);var inst_26804__$1 = cljs.core.seq(inst_26790);var state_26838__$1 = (function (){var statearr_26863 = state_26838;(statearr_26863[(7)] = inst_26804__$1);
return statearr_26863;
})();if(inst_26804__$1)
{var statearr_26864_26896 = state_26838__$1;(statearr_26864_26896[(1)] = (14));
} else
{var statearr_26865_26897 = state_26838__$1;(statearr_26865_26897[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (9)))
{var inst_26826 = (state_26838[(2)]);var inst_26827 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26838__$1 = (function (){var statearr_26866 = state_26838;(statearr_26866[(15)] = inst_26826);
return statearr_26866;
})();if(cljs.core.truth_(inst_26827))
{var statearr_26867_26898 = state_26838__$1;(statearr_26867_26898[(1)] = (21));
} else
{var statearr_26868_26899 = state_26838__$1;(statearr_26868_26899[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (5)))
{var inst_26782 = cljs.core.async.close_BANG_(out);var state_26838__$1 = state_26838;var statearr_26869_26900 = state_26838__$1;(statearr_26869_26900[(2)] = inst_26782);
(statearr_26869_26900[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (14)))
{var inst_26804 = (state_26838[(7)]);var inst_26806 = cljs.core.chunked_seq_QMARK_(inst_26804);var state_26838__$1 = state_26838;if(inst_26806)
{var statearr_26870_26901 = state_26838__$1;(statearr_26870_26901[(1)] = (17));
} else
{var statearr_26871_26902 = state_26838__$1;(statearr_26871_26902[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (16)))
{var inst_26822 = (state_26838[(2)]);var state_26838__$1 = state_26838;var statearr_26872_26903 = state_26838__$1;(statearr_26872_26903[(2)] = inst_26822);
(statearr_26872_26903[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26839 === (10)))
{var inst_26791 = (state_26838[(11)]);var inst_26793 = (state_26838[(12)]);var inst_26798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26791,inst_26793);var state_26838__$1 = state_26838;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26838__$1,(13),out,inst_26798);
} else
{if((state_val_26839 === (18)))
{var inst_26804 = (state_26838[(7)]);var inst_26813 = cljs.core.first(inst_26804);var state_26838__$1 = state_26838;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26838__$1,(20),out,inst_26813);
} else
{if((state_val_26839 === (8)))
{var inst_26792 = (state_26838[(8)]);var inst_26793 = (state_26838[(12)]);var inst_26795 = (inst_26793 < inst_26792);var inst_26796 = inst_26795;var state_26838__$1 = state_26838;if(cljs.core.truth_(inst_26796))
{var statearr_26873_26904 = state_26838__$1;(statearr_26873_26904[(1)] = (10));
} else
{var statearr_26874_26905 = state_26838__$1;(statearr_26874_26905[(1)] = (11));
}
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto__))
;return ((function (switch__12277__auto__,c__12292__auto__){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26878[(0)] = state_machine__12278__auto__);
(statearr_26878[(1)] = (1));
return statearr_26878;
});
var state_machine__12278__auto____1 = (function (state_26838){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26838);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26879){if((e26879 instanceof Object))
{var ex__12281__auto__ = e26879;var statearr_26880_26906 = state_26838;(statearr_26880_26906[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26838);
return cljs.core.constant$keyword$82;
} else
{throw e26879;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26907 = state_26838;
state_26838 = G__26907;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26881 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto__))
);
return c__12292__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27012,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27012,out){
return (function (state_26987){var state_val_26988 = (state_26987[(1)]);if((state_val_26988 === (7)))
{var inst_26982 = (state_26987[(2)]);var state_26987__$1 = state_26987;var statearr_26989_27013 = state_26987__$1;(statearr_26989_27013[(2)] = inst_26982);
(statearr_26989_27013[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (1)))
{var inst_26964 = null;var state_26987__$1 = (function (){var statearr_26990 = state_26987;(statearr_26990[(7)] = inst_26964);
return statearr_26990;
})();var statearr_26991_27014 = state_26987__$1;(statearr_26991_27014[(2)] = null);
(statearr_26991_27014[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (4)))
{var inst_26967 = (state_26987[(8)]);var inst_26967__$1 = (state_26987[(2)]);var inst_26968 = (inst_26967__$1 == null);var inst_26969 = cljs.core.not(inst_26968);var state_26987__$1 = (function (){var statearr_26992 = state_26987;(statearr_26992[(8)] = inst_26967__$1);
return statearr_26992;
})();if(inst_26969)
{var statearr_26993_27015 = state_26987__$1;(statearr_26993_27015[(1)] = (5));
} else
{var statearr_26994_27016 = state_26987__$1;(statearr_26994_27016[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (6)))
{var state_26987__$1 = state_26987;var statearr_26995_27017 = state_26987__$1;(statearr_26995_27017[(2)] = null);
(statearr_26995_27017[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (3)))
{var inst_26984 = (state_26987[(2)]);var inst_26985 = cljs.core.async.close_BANG_(out);var state_26987__$1 = (function (){var statearr_26996 = state_26987;(statearr_26996[(9)] = inst_26984);
return statearr_26996;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26987__$1,inst_26985);
} else
{if((state_val_26988 === (2)))
{var state_26987__$1 = state_26987;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26987__$1,(4),ch);
} else
{if((state_val_26988 === (11)))
{var inst_26967 = (state_26987[(8)]);var inst_26976 = (state_26987[(2)]);var inst_26964 = inst_26967;var state_26987__$1 = (function (){var statearr_26997 = state_26987;(statearr_26997[(10)] = inst_26976);
(statearr_26997[(7)] = inst_26964);
return statearr_26997;
})();var statearr_26998_27018 = state_26987__$1;(statearr_26998_27018[(2)] = null);
(statearr_26998_27018[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (9)))
{var inst_26967 = (state_26987[(8)]);var state_26987__$1 = state_26987;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26987__$1,(11),out,inst_26967);
} else
{if((state_val_26988 === (5)))
{var inst_26964 = (state_26987[(7)]);var inst_26967 = (state_26987[(8)]);var inst_26971 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26967,inst_26964);var state_26987__$1 = state_26987;if(inst_26971)
{var statearr_27000_27019 = state_26987__$1;(statearr_27000_27019[(1)] = (8));
} else
{var statearr_27001_27020 = state_26987__$1;(statearr_27001_27020[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (10)))
{var inst_26979 = (state_26987[(2)]);var state_26987__$1 = state_26987;var statearr_27002_27021 = state_26987__$1;(statearr_27002_27021[(2)] = inst_26979);
(statearr_27002_27021[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26988 === (8)))
{var inst_26964 = (state_26987[(7)]);var tmp26999 = inst_26964;var inst_26964__$1 = tmp26999;var state_26987__$1 = (function (){var statearr_27003 = state_26987;(statearr_27003[(7)] = inst_26964__$1);
return statearr_27003;
})();var statearr_27004_27022 = state_26987__$1;(statearr_27004_27022[(2)] = null);
(statearr_27004_27022[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___27012,out))
;return ((function (switch__12277__auto__,c__12292__auto___27012,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27008 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27008[(0)] = state_machine__12278__auto__);
(statearr_27008[(1)] = (1));
return statearr_27008;
});
var state_machine__12278__auto____1 = (function (state_26987){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26987);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27009){if((e27009 instanceof Object))
{var ex__12281__auto__ = e27009;var statearr_27010_27023 = state_26987;(statearr_27010_27023[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26987);
return cljs.core.constant$keyword$82;
} else
{throw e27009;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27024 = state_26987;
state_26987 = G__27024;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26987){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27012,out))
})();var state__12294__auto__ = (function (){var statearr_27011 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27012);
return statearr_27011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27012,out))
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
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27162,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27162,out){
return (function (state_27132){var state_val_27133 = (state_27132[(1)]);if((state_val_27133 === (7)))
{var inst_27128 = (state_27132[(2)]);var state_27132__$1 = state_27132;var statearr_27134_27163 = state_27132__$1;(statearr_27134_27163[(2)] = inst_27128);
(statearr_27134_27163[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (1)))
{var inst_27095 = (new Array(n));var inst_27096 = inst_27095;var inst_27097 = (0);var state_27132__$1 = (function (){var statearr_27135 = state_27132;(statearr_27135[(7)] = inst_27096);
(statearr_27135[(8)] = inst_27097);
return statearr_27135;
})();var statearr_27136_27164 = state_27132__$1;(statearr_27136_27164[(2)] = null);
(statearr_27136_27164[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (4)))
{var inst_27100 = (state_27132[(9)]);var inst_27100__$1 = (state_27132[(2)]);var inst_27101 = (inst_27100__$1 == null);var inst_27102 = cljs.core.not(inst_27101);var state_27132__$1 = (function (){var statearr_27137 = state_27132;(statearr_27137[(9)] = inst_27100__$1);
return statearr_27137;
})();if(inst_27102)
{var statearr_27138_27165 = state_27132__$1;(statearr_27138_27165[(1)] = (5));
} else
{var statearr_27139_27166 = state_27132__$1;(statearr_27139_27166[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (15)))
{var inst_27122 = (state_27132[(2)]);var state_27132__$1 = state_27132;var statearr_27140_27167 = state_27132__$1;(statearr_27140_27167[(2)] = inst_27122);
(statearr_27140_27167[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (13)))
{var state_27132__$1 = state_27132;var statearr_27141_27168 = state_27132__$1;(statearr_27141_27168[(2)] = null);
(statearr_27141_27168[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (6)))
{var inst_27097 = (state_27132[(8)]);var inst_27118 = (inst_27097 > (0));var state_27132__$1 = state_27132;if(cljs.core.truth_(inst_27118))
{var statearr_27142_27169 = state_27132__$1;(statearr_27142_27169[(1)] = (12));
} else
{var statearr_27143_27170 = state_27132__$1;(statearr_27143_27170[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (3)))
{var inst_27130 = (state_27132[(2)]);var state_27132__$1 = state_27132;return cljs.core.async.impl.ioc_helpers.return_chan(state_27132__$1,inst_27130);
} else
{if((state_val_27133 === (12)))
{var inst_27096 = (state_27132[(7)]);var inst_27120 = cljs.core.vec(inst_27096);var state_27132__$1 = state_27132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27132__$1,(15),out,inst_27120);
} else
{if((state_val_27133 === (2)))
{var state_27132__$1 = state_27132;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27132__$1,(4),ch);
} else
{if((state_val_27133 === (11)))
{var inst_27112 = (state_27132[(2)]);var inst_27113 = (new Array(n));var inst_27096 = inst_27113;var inst_27097 = (0);var state_27132__$1 = (function (){var statearr_27144 = state_27132;(statearr_27144[(10)] = inst_27112);
(statearr_27144[(7)] = inst_27096);
(statearr_27144[(8)] = inst_27097);
return statearr_27144;
})();var statearr_27145_27171 = state_27132__$1;(statearr_27145_27171[(2)] = null);
(statearr_27145_27171[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (9)))
{var inst_27096 = (state_27132[(7)]);var inst_27110 = cljs.core.vec(inst_27096);var state_27132__$1 = state_27132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27132__$1,(11),out,inst_27110);
} else
{if((state_val_27133 === (5)))
{var inst_27105 = (state_27132[(11)]);var inst_27096 = (state_27132[(7)]);var inst_27097 = (state_27132[(8)]);var inst_27100 = (state_27132[(9)]);var inst_27104 = (inst_27096[inst_27097] = inst_27100);var inst_27105__$1 = (inst_27097 + (1));var inst_27106 = (inst_27105__$1 < n);var state_27132__$1 = (function (){var statearr_27146 = state_27132;(statearr_27146[(11)] = inst_27105__$1);
(statearr_27146[(12)] = inst_27104);
return statearr_27146;
})();if(cljs.core.truth_(inst_27106))
{var statearr_27147_27172 = state_27132__$1;(statearr_27147_27172[(1)] = (8));
} else
{var statearr_27148_27173 = state_27132__$1;(statearr_27148_27173[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (14)))
{var inst_27125 = (state_27132[(2)]);var inst_27126 = cljs.core.async.close_BANG_(out);var state_27132__$1 = (function (){var statearr_27150 = state_27132;(statearr_27150[(13)] = inst_27125);
return statearr_27150;
})();var statearr_27151_27174 = state_27132__$1;(statearr_27151_27174[(2)] = inst_27126);
(statearr_27151_27174[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (10)))
{var inst_27116 = (state_27132[(2)]);var state_27132__$1 = state_27132;var statearr_27152_27175 = state_27132__$1;(statearr_27152_27175[(2)] = inst_27116);
(statearr_27152_27175[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27133 === (8)))
{var inst_27105 = (state_27132[(11)]);var inst_27096 = (state_27132[(7)]);var tmp27149 = inst_27096;var inst_27096__$1 = tmp27149;var inst_27097 = inst_27105;var state_27132__$1 = (function (){var statearr_27153 = state_27132;(statearr_27153[(7)] = inst_27096__$1);
(statearr_27153[(8)] = inst_27097);
return statearr_27153;
})();var statearr_27154_27176 = state_27132__$1;(statearr_27154_27176[(2)] = null);
(statearr_27154_27176[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___27162,out))
;return ((function (switch__12277__auto__,c__12292__auto___27162,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27158[(0)] = state_machine__12278__auto__);
(statearr_27158[(1)] = (1));
return statearr_27158;
});
var state_machine__12278__auto____1 = (function (state_27132){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27132);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27159){if((e27159 instanceof Object))
{var ex__12281__auto__ = e27159;var statearr_27160_27177 = state_27132;(statearr_27160_27177[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27132);
return cljs.core.constant$keyword$82;
} else
{throw e27159;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27178 = state_27132;
state_27132 = G__27178;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27132){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27162,out))
})();var state__12294__auto__ = (function (){var statearr_27161 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27162);
return statearr_27161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27162,out))
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
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27326,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27326,out){
return (function (state_27295){var state_val_27296 = (state_27295[(1)]);if((state_val_27296 === (7)))
{var inst_27291 = (state_27295[(2)]);var state_27295__$1 = state_27295;var statearr_27297_27327 = state_27295__$1;(statearr_27297_27327[(2)] = inst_27291);
(statearr_27297_27327[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (1)))
{var inst_27254 = [];var inst_27255 = inst_27254;var inst_27256 = cljs.core.constant$keyword$97;var state_27295__$1 = (function (){var statearr_27298 = state_27295;(statearr_27298[(7)] = inst_27255);
(statearr_27298[(8)] = inst_27256);
return statearr_27298;
})();var statearr_27299_27328 = state_27295__$1;(statearr_27299_27328[(2)] = null);
(statearr_27299_27328[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (4)))
{var inst_27259 = (state_27295[(9)]);var inst_27259__$1 = (state_27295[(2)]);var inst_27260 = (inst_27259__$1 == null);var inst_27261 = cljs.core.not(inst_27260);var state_27295__$1 = (function (){var statearr_27300 = state_27295;(statearr_27300[(9)] = inst_27259__$1);
return statearr_27300;
})();if(inst_27261)
{var statearr_27301_27329 = state_27295__$1;(statearr_27301_27329[(1)] = (5));
} else
{var statearr_27302_27330 = state_27295__$1;(statearr_27302_27330[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (15)))
{var inst_27285 = (state_27295[(2)]);var state_27295__$1 = state_27295;var statearr_27303_27331 = state_27295__$1;(statearr_27303_27331[(2)] = inst_27285);
(statearr_27303_27331[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (13)))
{var state_27295__$1 = state_27295;var statearr_27304_27332 = state_27295__$1;(statearr_27304_27332[(2)] = null);
(statearr_27304_27332[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (6)))
{var inst_27255 = (state_27295[(7)]);var inst_27280 = inst_27255.length;var inst_27281 = (inst_27280 > (0));var state_27295__$1 = state_27295;if(cljs.core.truth_(inst_27281))
{var statearr_27305_27333 = state_27295__$1;(statearr_27305_27333[(1)] = (12));
} else
{var statearr_27306_27334 = state_27295__$1;(statearr_27306_27334[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (3)))
{var inst_27293 = (state_27295[(2)]);var state_27295__$1 = state_27295;return cljs.core.async.impl.ioc_helpers.return_chan(state_27295__$1,inst_27293);
} else
{if((state_val_27296 === (12)))
{var inst_27255 = (state_27295[(7)]);var inst_27283 = cljs.core.vec(inst_27255);var state_27295__$1 = state_27295;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27295__$1,(15),out,inst_27283);
} else
{if((state_val_27296 === (2)))
{var state_27295__$1 = state_27295;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27295__$1,(4),ch);
} else
{if((state_val_27296 === (11)))
{var inst_27259 = (state_27295[(9)]);var inst_27263 = (state_27295[(10)]);var inst_27273 = (state_27295[(2)]);var inst_27274 = [];var inst_27275 = inst_27274.push(inst_27259);var inst_27255 = inst_27274;var inst_27256 = inst_27263;var state_27295__$1 = (function (){var statearr_27307 = state_27295;(statearr_27307[(7)] = inst_27255);
(statearr_27307[(11)] = inst_27275);
(statearr_27307[(12)] = inst_27273);
(statearr_27307[(8)] = inst_27256);
return statearr_27307;
})();var statearr_27308_27335 = state_27295__$1;(statearr_27308_27335[(2)] = null);
(statearr_27308_27335[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (9)))
{var inst_27255 = (state_27295[(7)]);var inst_27271 = cljs.core.vec(inst_27255);var state_27295__$1 = state_27295;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27295__$1,(11),out,inst_27271);
} else
{if((state_val_27296 === (5)))
{var inst_27259 = (state_27295[(9)]);var inst_27263 = (state_27295[(10)]);var inst_27256 = (state_27295[(8)]);var inst_27263__$1 = (function (){var G__27309 = inst_27259;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27309) : f.call(null,G__27309));
})();var inst_27264 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27263__$1,inst_27256);var inst_27265 = cljs.core.keyword_identical_QMARK_(inst_27256,cljs.core.constant$keyword$97);var inst_27266 = (inst_27264) || (inst_27265);var state_27295__$1 = (function (){var statearr_27310 = state_27295;(statearr_27310[(10)] = inst_27263__$1);
return statearr_27310;
})();if(cljs.core.truth_(inst_27266))
{var statearr_27311_27336 = state_27295__$1;(statearr_27311_27336[(1)] = (8));
} else
{var statearr_27312_27337 = state_27295__$1;(statearr_27312_27337[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (14)))
{var inst_27288 = (state_27295[(2)]);var inst_27289 = cljs.core.async.close_BANG_(out);var state_27295__$1 = (function (){var statearr_27314 = state_27295;(statearr_27314[(13)] = inst_27288);
return statearr_27314;
})();var statearr_27315_27338 = state_27295__$1;(statearr_27315_27338[(2)] = inst_27289);
(statearr_27315_27338[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (10)))
{var inst_27278 = (state_27295[(2)]);var state_27295__$1 = state_27295;var statearr_27316_27339 = state_27295__$1;(statearr_27316_27339[(2)] = inst_27278);
(statearr_27316_27339[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27296 === (8)))
{var inst_27255 = (state_27295[(7)]);var inst_27259 = (state_27295[(9)]);var inst_27263 = (state_27295[(10)]);var inst_27268 = inst_27255.push(inst_27259);var tmp27313 = inst_27255;var inst_27255__$1 = tmp27313;var inst_27256 = inst_27263;var state_27295__$1 = (function (){var statearr_27317 = state_27295;(statearr_27317[(7)] = inst_27255__$1);
(statearr_27317[(14)] = inst_27268);
(statearr_27317[(8)] = inst_27256);
return statearr_27317;
})();var statearr_27318_27340 = state_27295__$1;(statearr_27318_27340[(2)] = null);
(statearr_27318_27340[(1)] = (2));
return cljs.core.constant$keyword$82;
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
});})(c__12292__auto___27326,out))
;return ((function (switch__12277__auto__,c__12292__auto___27326,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27322[(0)] = state_machine__12278__auto__);
(statearr_27322[(1)] = (1));
return statearr_27322;
});
var state_machine__12278__auto____1 = (function (state_27295){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27295);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object))
{var ex__12281__auto__ = e27323;var statearr_27324_27341 = state_27295;(statearr_27324_27341[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27295);
return cljs.core.constant$keyword$82;
} else
{throw e27323;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27342 = state_27295;
state_27295 = G__27342;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27295){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27326,out))
})();var state__12294__auto__ = (function (){var statearr_27325 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27326);
return statearr_27325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27326,out))
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
