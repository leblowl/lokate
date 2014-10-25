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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23931 = (function (f,fn_handler,meta23932){
this.f = f;
this.fn_handler = fn_handler;
this.meta23932 = meta23932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23931.cljs$lang$type = true;
cljs.core.async.t23931.cljs$lang$ctorStr = "cljs.core.async/t23931";
cljs.core.async.t23931.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23931");
});
cljs.core.async.t23931.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23933){var self__ = this;
var _23933__$1 = this;return self__.meta23932;
});
cljs.core.async.t23931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23933,meta23932__$1){var self__ = this;
var _23933__$1 = this;return (new cljs.core.async.t23931(self__.f,self__.fn_handler,meta23932__$1));
});
cljs.core.async.__GT_t23931 = (function __GT_t23931(f__$1,fn_handler__$1,meta23932){return (new cljs.core.async.t23931(f__$1,fn_handler__$1,meta23932));
});
}
return (new cljs.core.async.t23931(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23935 = buff;if(G__23935)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23935.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23935.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23935);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23935);
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
{var val_23952 = (function (){var G__23949 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23949) : cljs.core.deref.call(null,G__23949));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23950_23953 = val_23952;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23950_23953) : fn1.call(null,G__23950_23953));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23952,ret){
return (function (){var G__23951 = val_23952;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23951) : fn1.call(null,G__23951));
});})(val_23952,ret))
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
{var ret = temp__4124__auto__;var G__23962 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23962) : cljs.core.deref.call(null,G__23962));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__23963 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23963) : cljs.core.deref.call(null,G__23963));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23964_23966 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23964_23966) : fn1.call(null,G__23964_23966));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__23965 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23965) : fn1.call(null,G__23965));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___23967 = n;var x_23968 = (0);while(true){
if((x_23968 < n__4510__auto___23967))
{(a[x_23968] = (0));
{
var G__23969 = (x_23968 + (1));
x_23968 = G__23969;
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
var G__23970 = (i + (1));
i = G__23970;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__23978 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23978) : cljs.core.atom.call(null,G__23978));
})();if(typeof cljs.core.async.t23979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23979 = (function (flag,alt_flag,meta23980){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23980 = meta23980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23979.cljs$lang$type = true;
cljs.core.async.t23979.cljs$lang$ctorStr = "cljs.core.async/t23979";
cljs.core.async.t23979.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23979");
});})(flag))
;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23982 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23982) : cljs.core.deref.call(null,G__23982));
});})(flag))
;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23983_23985 = self__.flag;var G__23984_23986 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23983_23985,G__23984_23986) : cljs.core.reset_BANG_.call(null,G__23983_23985,G__23984_23986));
return true;
});})(flag))
;
cljs.core.async.t23979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23981){var self__ = this;
var _23981__$1 = this;return self__.meta23980;
});})(flag))
;
cljs.core.async.t23979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23981,meta23980__$1){var self__ = this;
var _23981__$1 = this;return (new cljs.core.async.t23979(self__.flag,self__.alt_flag,meta23980__$1));
});})(flag))
;
cljs.core.async.__GT_t23979 = ((function (flag){
return (function __GT_t23979(flag__$1,alt_flag__$1,meta23980){return (new cljs.core.async.t23979(flag__$1,alt_flag__$1,meta23980));
});})(flag))
;
}
return (new cljs.core.async.t23979(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23990 = (function (cb,flag,alt_handler,meta23991){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23991 = meta23991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23990.cljs$lang$type = true;
cljs.core.async.t23990.cljs$lang$ctorStr = "cljs.core.async/t23990";
cljs.core.async.t23990.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23990");
});
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23992){var self__ = this;
var _23992__$1 = this;return self__.meta23991;
});
cljs.core.async.t23990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23992,meta23991__$1){var self__ = this;
var _23992__$1 = this;return (new cljs.core.async.t23990(self__.cb,self__.flag,self__.alt_handler,meta23991__$1));
});
cljs.core.async.__GT_t23990 = (function __GT_t23990(cb__$1,flag__$1,alt_handler__$1,meta23991){return (new cljs.core.async.t23990(cb__$1,flag__$1,alt_handler__$1,meta23991));
});
}
return (new cljs.core.async.t23990(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24000 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24000) : port.call(null,G__24000));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24001 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24001) : port.call(null,G__24001));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23993_SHARP_){var G__24002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23993_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24002) : fret.call(null,G__24002));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23994_SHARP_){var G__24003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23994_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24003) : fret.call(null,G__24003));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24004 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24004) : cljs.core.deref.call(null,G__24004));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24005 = (i + (1));
i = G__24005;
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
var alts_BANG___delegate = function (ports,p__24006){var map__24008 = p__24006;var map__24008__$1 = ((cljs.core.seq_QMARK_(map__24008))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24008):map__24008);var opts = map__24008__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24006 = null;if (arguments.length > 1) {
  p__24006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24006);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24009){
var ports = cljs.core.first(arglist__24009);
var p__24006 = cljs.core.rest(arglist__24009);
return alts_BANG___delegate(ports,p__24006);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24107){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24107){
return (function (state_24083){var state_val_24084 = (state_24083[(1)]);if((state_val_24084 === (7)))
{var inst_24079 = (state_24083[(2)]);var state_24083__$1 = state_24083;var statearr_24085_24108 = state_24083__$1;(statearr_24085_24108[(2)] = inst_24079);
(statearr_24085_24108[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (1)))
{var state_24083__$1 = state_24083;var statearr_24086_24109 = state_24083__$1;(statearr_24086_24109[(2)] = null);
(statearr_24086_24109[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (4)))
{var inst_24062 = (state_24083[(7)]);var inst_24062__$1 = (state_24083[(2)]);var inst_24063 = (inst_24062__$1 == null);var state_24083__$1 = (function (){var statearr_24087 = state_24083;(statearr_24087[(7)] = inst_24062__$1);
return statearr_24087;
})();if(cljs.core.truth_(inst_24063))
{var statearr_24088_24110 = state_24083__$1;(statearr_24088_24110[(1)] = (5));
} else
{var statearr_24089_24111 = state_24083__$1;(statearr_24089_24111[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (13)))
{var state_24083__$1 = state_24083;var statearr_24090_24112 = state_24083__$1;(statearr_24090_24112[(2)] = null);
(statearr_24090_24112[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (6)))
{var inst_24062 = (state_24083[(7)]);var state_24083__$1 = state_24083;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24083__$1,(11),to,inst_24062);
} else
{if((state_val_24084 === (3)))
{var inst_24081 = (state_24083[(2)]);var state_24083__$1 = state_24083;return cljs.core.async.impl.ioc_helpers.return_chan(state_24083__$1,inst_24081);
} else
{if((state_val_24084 === (12)))
{var state_24083__$1 = state_24083;var statearr_24091_24113 = state_24083__$1;(statearr_24091_24113[(2)] = null);
(statearr_24091_24113[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (2)))
{var state_24083__$1 = state_24083;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24083__$1,(4),from);
} else
{if((state_val_24084 === (11)))
{var inst_24072 = (state_24083[(2)]);var state_24083__$1 = state_24083;if(cljs.core.truth_(inst_24072))
{var statearr_24092_24114 = state_24083__$1;(statearr_24092_24114[(1)] = (12));
} else
{var statearr_24093_24115 = state_24083__$1;(statearr_24093_24115[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (9)))
{var state_24083__$1 = state_24083;var statearr_24094_24116 = state_24083__$1;(statearr_24094_24116[(2)] = null);
(statearr_24094_24116[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (5)))
{var state_24083__$1 = state_24083;if(cljs.core.truth_(close_QMARK_))
{var statearr_24095_24117 = state_24083__$1;(statearr_24095_24117[(1)] = (8));
} else
{var statearr_24096_24118 = state_24083__$1;(statearr_24096_24118[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (14)))
{var inst_24077 = (state_24083[(2)]);var state_24083__$1 = state_24083;var statearr_24097_24119 = state_24083__$1;(statearr_24097_24119[(2)] = inst_24077);
(statearr_24097_24119[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (10)))
{var inst_24069 = (state_24083[(2)]);var state_24083__$1 = state_24083;var statearr_24098_24120 = state_24083__$1;(statearr_24098_24120[(2)] = inst_24069);
(statearr_24098_24120[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24084 === (8)))
{var inst_24066 = cljs.core.async.close_BANG_(to);var state_24083__$1 = state_24083;var statearr_24099_24121 = state_24083__$1;(statearr_24099_24121[(2)] = inst_24066);
(statearr_24099_24121[(1)] = (10));
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
});})(c__12292__auto___24107))
;return ((function (switch__12277__auto__,c__12292__auto___24107){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24103 = [null,null,null,null,null,null,null,null];(statearr_24103[(0)] = state_machine__12278__auto__);
(statearr_24103[(1)] = (1));
return statearr_24103;
});
var state_machine__12278__auto____1 = (function (state_24083){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24083);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24104){if((e24104 instanceof Object))
{var ex__12281__auto__ = e24104;var statearr_24105_24122 = state_24083;(statearr_24105_24122[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24083);
return cljs.core.constant$keyword$82;
} else
{throw e24104;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24123 = state_24083;
state_24083 = G__24123;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24083){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24107))
})();var state__12294__auto__ = (function (){var statearr_24106 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24107);
return statearr_24106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24107))
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
return (function (p__24309){var vec__24310 = p__24309;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310,(1),null);var job = vec__24310;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results){
return (function (state_24315){var state_val_24316 = (state_24315[(1)]);if((state_val_24316 === (2)))
{var inst_24312 = (state_24315[(2)]);var inst_24313 = cljs.core.async.close_BANG_(res);var state_24315__$1 = (function (){var statearr_24317 = state_24315;(statearr_24317[(7)] = inst_24312);
return statearr_24317;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24315__$1,inst_24313);
} else
{if((state_val_24316 === (1)))
{var state_24315__$1 = state_24315;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24315__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24321 = [null,null,null,null,null,null,null,null];(statearr_24321[(0)] = state_machine__12278__auto__);
(statearr_24321[(1)] = (1));
return statearr_24321;
});
var state_machine__12278__auto____1 = (function (state_24315){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24315);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24322){if((e24322 instanceof Object))
{var ex__12281__auto__ = e24322;var statearr_24323_24495 = state_24315;(statearr_24323_24495[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24315);
return cljs.core.constant$keyword$82;
} else
{throw e24322;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24496 = state_24315;
state_24315 = G__24496;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24315){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24324 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24494);
return statearr_24324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24494,res,vec__24310,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24325){var vec__24326 = p__24325;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24326,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24326,(1),null);var job = vec__24326;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24327_24497 = v;var G__24328_24498 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24327_24497,G__24328_24498) : xf.call(null,G__24327_24497,G__24328_24498));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24499 = n;var __24500 = (0);while(true){
if((__24500 < n__4510__auto___24499))
{var G__24329_24501 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24329_24501) {
case "async":
var c__12292__auto___24503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24500,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24500,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function (state_24342){var state_val_24343 = (state_24342[(1)]);if((state_val_24343 === (7)))
{var inst_24338 = (state_24342[(2)]);var state_24342__$1 = state_24342;var statearr_24344_24504 = state_24342__$1;(statearr_24344_24504[(2)] = inst_24338);
(statearr_24344_24504[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24343 === (6)))
{var state_24342__$1 = state_24342;var statearr_24345_24505 = state_24342__$1;(statearr_24345_24505[(2)] = null);
(statearr_24345_24505[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24343 === (5)))
{var state_24342__$1 = state_24342;var statearr_24346_24506 = state_24342__$1;(statearr_24346_24506[(2)] = null);
(statearr_24346_24506[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24343 === (4)))
{var inst_24332 = (state_24342[(2)]);var inst_24333 = async(inst_24332);var state_24342__$1 = state_24342;if(cljs.core.truth_(inst_24333))
{var statearr_24347_24507 = state_24342__$1;(statearr_24347_24507[(1)] = (5));
} else
{var statearr_24348_24508 = state_24342__$1;(statearr_24348_24508[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24343 === (3)))
{var inst_24340 = (state_24342[(2)]);var state_24342__$1 = state_24342;return cljs.core.async.impl.ioc_helpers.return_chan(state_24342__$1,inst_24340);
} else
{if((state_val_24343 === (2)))
{var state_24342__$1 = state_24342;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24342__$1,(4),jobs);
} else
{if((state_val_24343 === (1)))
{var state_24342__$1 = state_24342;var statearr_24349_24509 = state_24342__$1;(statearr_24349_24509[(2)] = null);
(statearr_24349_24509[(1)] = (2));
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
});})(__24500,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
;return ((function (__24500,switch__12277__auto__,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24353 = [null,null,null,null,null,null,null];(statearr_24353[(0)] = state_machine__12278__auto__);
(statearr_24353[(1)] = (1));
return statearr_24353;
});
var state_machine__12278__auto____1 = (function (state_24342){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24342);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24354){if((e24354 instanceof Object))
{var ex__12281__auto__ = e24354;var statearr_24355_24510 = state_24342;(statearr_24355_24510[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24342);
return cljs.core.constant$keyword$82;
} else
{throw e24354;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24511 = state_24342;
state_24342 = G__24511;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24500,switch__12277__auto__,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24356 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24503);
return statearr_24356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24500,c__12292__auto___24503,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24500,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24500,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function (state_24369){var state_val_24370 = (state_24369[(1)]);if((state_val_24370 === (7)))
{var inst_24365 = (state_24369[(2)]);var state_24369__$1 = state_24369;var statearr_24371_24513 = state_24369__$1;(statearr_24371_24513[(2)] = inst_24365);
(statearr_24371_24513[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24370 === (6)))
{var state_24369__$1 = state_24369;var statearr_24372_24514 = state_24369__$1;(statearr_24372_24514[(2)] = null);
(statearr_24372_24514[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24370 === (5)))
{var state_24369__$1 = state_24369;var statearr_24373_24515 = state_24369__$1;(statearr_24373_24515[(2)] = null);
(statearr_24373_24515[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24370 === (4)))
{var inst_24359 = (state_24369[(2)]);var inst_24360 = process(inst_24359);var state_24369__$1 = state_24369;if(cljs.core.truth_(inst_24360))
{var statearr_24374_24516 = state_24369__$1;(statearr_24374_24516[(1)] = (5));
} else
{var statearr_24375_24517 = state_24369__$1;(statearr_24375_24517[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24370 === (3)))
{var inst_24367 = (state_24369[(2)]);var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.return_chan(state_24369__$1,inst_24367);
} else
{if((state_val_24370 === (2)))
{var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24369__$1,(4),jobs);
} else
{if((state_val_24370 === (1)))
{var state_24369__$1 = state_24369;var statearr_24376_24518 = state_24369__$1;(statearr_24376_24518[(2)] = null);
(statearr_24376_24518[(1)] = (2));
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
});})(__24500,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
;return ((function (__24500,switch__12277__auto__,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24380 = [null,null,null,null,null,null,null];(statearr_24380[(0)] = state_machine__12278__auto__);
(statearr_24380[(1)] = (1));
return statearr_24380;
});
var state_machine__12278__auto____1 = (function (state_24369){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24369);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24381){if((e24381 instanceof Object))
{var ex__12281__auto__ = e24381;var statearr_24382_24519 = state_24369;(statearr_24382_24519[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24369);
return cljs.core.constant$keyword$82;
} else
{throw e24381;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24520 = state_24369;
state_24369 = G__24520;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24369){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24500,switch__12277__auto__,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24383 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24512);
return statearr_24383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24500,c__12292__auto___24512,G__24329_24501,n__4510__auto___24499,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24521 = (__24500 + (1));
__24500 = G__24521;
continue;
}
} else
{}
break;
}
var c__12292__auto___24522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24522,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24522,jobs,results,process,async){
return (function (state_24405){var state_val_24406 = (state_24405[(1)]);if((state_val_24406 === (9)))
{var inst_24398 = (state_24405[(2)]);var state_24405__$1 = (function (){var statearr_24407 = state_24405;(statearr_24407[(7)] = inst_24398);
return statearr_24407;
})();var statearr_24408_24523 = state_24405__$1;(statearr_24408_24523[(2)] = null);
(statearr_24408_24523[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24406 === (8)))
{var inst_24391 = (state_24405[(8)]);var inst_24396 = (state_24405[(2)]);var state_24405__$1 = (function (){var statearr_24409 = state_24405;(statearr_24409[(9)] = inst_24396);
return statearr_24409;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24405__$1,(9),results,inst_24391);
} else
{if((state_val_24406 === (7)))
{var inst_24401 = (state_24405[(2)]);var state_24405__$1 = state_24405;var statearr_24410_24524 = state_24405__$1;(statearr_24410_24524[(2)] = inst_24401);
(statearr_24410_24524[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24406 === (6)))
{var inst_24386 = (state_24405[(10)]);var inst_24391 = (state_24405[(8)]);var inst_24391__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24392 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24393 = [inst_24386,inst_24391__$1];var inst_24394 = (new cljs.core.PersistentVector(null,2,(5),inst_24392,inst_24393,null));var state_24405__$1 = (function (){var statearr_24411 = state_24405;(statearr_24411[(8)] = inst_24391__$1);
return statearr_24411;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24405__$1,(8),jobs,inst_24394);
} else
{if((state_val_24406 === (5)))
{var inst_24389 = cljs.core.async.close_BANG_(jobs);var state_24405__$1 = state_24405;var statearr_24412_24525 = state_24405__$1;(statearr_24412_24525[(2)] = inst_24389);
(statearr_24412_24525[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24406 === (4)))
{var inst_24386 = (state_24405[(10)]);var inst_24386__$1 = (state_24405[(2)]);var inst_24387 = (inst_24386__$1 == null);var state_24405__$1 = (function (){var statearr_24413 = state_24405;(statearr_24413[(10)] = inst_24386__$1);
return statearr_24413;
})();if(cljs.core.truth_(inst_24387))
{var statearr_24414_24526 = state_24405__$1;(statearr_24414_24526[(1)] = (5));
} else
{var statearr_24415_24527 = state_24405__$1;(statearr_24415_24527[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24406 === (3)))
{var inst_24403 = (state_24405[(2)]);var state_24405__$1 = state_24405;return cljs.core.async.impl.ioc_helpers.return_chan(state_24405__$1,inst_24403);
} else
{if((state_val_24406 === (2)))
{var state_24405__$1 = state_24405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24405__$1,(4),from);
} else
{if((state_val_24406 === (1)))
{var state_24405__$1 = state_24405;var statearr_24416_24528 = state_24405__$1;(statearr_24416_24528[(2)] = null);
(statearr_24416_24528[(1)] = (2));
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
});})(c__12292__auto___24522,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24522,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24420 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24420[(0)] = state_machine__12278__auto__);
(statearr_24420[(1)] = (1));
return statearr_24420;
});
var state_machine__12278__auto____1 = (function (state_24405){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24405);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24421){if((e24421 instanceof Object))
{var ex__12281__auto__ = e24421;var statearr_24422_24529 = state_24405;(statearr_24422_24529[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24405);
return cljs.core.constant$keyword$82;
} else
{throw e24421;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24530 = state_24405;
state_24405 = G__24530;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24405){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24522,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24423 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24522);
return statearr_24423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24522,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24461){var state_val_24462 = (state_24461[(1)]);if((state_val_24462 === (7)))
{var inst_24457 = (state_24461[(2)]);var state_24461__$1 = state_24461;var statearr_24463_24531 = state_24461__$1;(statearr_24463_24531[(2)] = inst_24457);
(statearr_24463_24531[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (20)))
{var state_24461__$1 = state_24461;var statearr_24464_24532 = state_24461__$1;(statearr_24464_24532[(2)] = null);
(statearr_24464_24532[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (1)))
{var state_24461__$1 = state_24461;var statearr_24465_24533 = state_24461__$1;(statearr_24465_24533[(2)] = null);
(statearr_24465_24533[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (4)))
{var inst_24426 = (state_24461[(7)]);var inst_24426__$1 = (state_24461[(2)]);var inst_24427 = (inst_24426__$1 == null);var state_24461__$1 = (function (){var statearr_24466 = state_24461;(statearr_24466[(7)] = inst_24426__$1);
return statearr_24466;
})();if(cljs.core.truth_(inst_24427))
{var statearr_24467_24534 = state_24461__$1;(statearr_24467_24534[(1)] = (5));
} else
{var statearr_24468_24535 = state_24461__$1;(statearr_24468_24535[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (15)))
{var inst_24439 = (state_24461[(8)]);var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24461__$1,(18),to,inst_24439);
} else
{if((state_val_24462 === (21)))
{var inst_24452 = (state_24461[(2)]);var state_24461__$1 = state_24461;var statearr_24469_24536 = state_24461__$1;(statearr_24469_24536[(2)] = inst_24452);
(statearr_24469_24536[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (13)))
{var inst_24454 = (state_24461[(2)]);var state_24461__$1 = (function (){var statearr_24470 = state_24461;(statearr_24470[(9)] = inst_24454);
return statearr_24470;
})();var statearr_24471_24537 = state_24461__$1;(statearr_24471_24537[(2)] = null);
(statearr_24471_24537[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (6)))
{var inst_24426 = (state_24461[(7)]);var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24461__$1,(11),inst_24426);
} else
{if((state_val_24462 === (17)))
{var inst_24447 = (state_24461[(2)]);var state_24461__$1 = state_24461;if(cljs.core.truth_(inst_24447))
{var statearr_24472_24538 = state_24461__$1;(statearr_24472_24538[(1)] = (19));
} else
{var statearr_24473_24539 = state_24461__$1;(statearr_24473_24539[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (3)))
{var inst_24459 = (state_24461[(2)]);var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.return_chan(state_24461__$1,inst_24459);
} else
{if((state_val_24462 === (12)))
{var inst_24436 = (state_24461[(10)]);var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24461__$1,(14),inst_24436);
} else
{if((state_val_24462 === (2)))
{var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24461__$1,(4),results);
} else
{if((state_val_24462 === (19)))
{var state_24461__$1 = state_24461;var statearr_24474_24540 = state_24461__$1;(statearr_24474_24540[(2)] = null);
(statearr_24474_24540[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (11)))
{var inst_24436 = (state_24461[(2)]);var state_24461__$1 = (function (){var statearr_24475 = state_24461;(statearr_24475[(10)] = inst_24436);
return statearr_24475;
})();var statearr_24476_24541 = state_24461__$1;(statearr_24476_24541[(2)] = null);
(statearr_24476_24541[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (9)))
{var state_24461__$1 = state_24461;var statearr_24477_24542 = state_24461__$1;(statearr_24477_24542[(2)] = null);
(statearr_24477_24542[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (5)))
{var state_24461__$1 = state_24461;if(cljs.core.truth_(close_QMARK_))
{var statearr_24478_24543 = state_24461__$1;(statearr_24478_24543[(1)] = (8));
} else
{var statearr_24479_24544 = state_24461__$1;(statearr_24479_24544[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (14)))
{var inst_24441 = (state_24461[(11)]);var inst_24439 = (state_24461[(8)]);var inst_24439__$1 = (state_24461[(2)]);var inst_24440 = (inst_24439__$1 == null);var inst_24441__$1 = cljs.core.not(inst_24440);var state_24461__$1 = (function (){var statearr_24480 = state_24461;(statearr_24480[(11)] = inst_24441__$1);
(statearr_24480[(8)] = inst_24439__$1);
return statearr_24480;
})();if(inst_24441__$1)
{var statearr_24481_24545 = state_24461__$1;(statearr_24481_24545[(1)] = (15));
} else
{var statearr_24482_24546 = state_24461__$1;(statearr_24482_24546[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (16)))
{var inst_24441 = (state_24461[(11)]);var state_24461__$1 = state_24461;var statearr_24483_24547 = state_24461__$1;(statearr_24483_24547[(2)] = inst_24441);
(statearr_24483_24547[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (10)))
{var inst_24433 = (state_24461[(2)]);var state_24461__$1 = state_24461;var statearr_24484_24548 = state_24461__$1;(statearr_24484_24548[(2)] = inst_24433);
(statearr_24484_24548[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (18)))
{var inst_24444 = (state_24461[(2)]);var state_24461__$1 = state_24461;var statearr_24485_24549 = state_24461__$1;(statearr_24485_24549[(2)] = inst_24444);
(statearr_24485_24549[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (8)))
{var inst_24430 = cljs.core.async.close_BANG_(to);var state_24461__$1 = state_24461;var statearr_24486_24550 = state_24461__$1;(statearr_24486_24550[(2)] = inst_24430);
(statearr_24486_24550[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24490 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24490[(0)] = state_machine__12278__auto__);
(statearr_24490[(1)] = (1));
return statearr_24490;
});
var state_machine__12278__auto____1 = (function (state_24461){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24461);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24491){if((e24491 instanceof Object))
{var ex__12281__auto__ = e24491;var statearr_24492_24551 = state_24461;(statearr_24492_24551[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24461);
return cljs.core.constant$keyword$82;
} else
{throw e24491;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24552 = state_24461;
state_24461 = G__24552;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24461){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24493 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24493;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24675,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24675,tc,fc){
return (function (state_24649){var state_val_24650 = (state_24649[(1)]);if((state_val_24650 === (7)))
{var inst_24645 = (state_24649[(2)]);var state_24649__$1 = state_24649;var statearr_24651_24676 = state_24649__$1;(statearr_24651_24676[(2)] = inst_24645);
(statearr_24651_24676[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (1)))
{var state_24649__$1 = state_24649;var statearr_24652_24677 = state_24649__$1;(statearr_24652_24677[(2)] = null);
(statearr_24652_24677[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (4)))
{var inst_24626 = (state_24649[(7)]);var inst_24626__$1 = (state_24649[(2)]);var inst_24627 = (inst_24626__$1 == null);var state_24649__$1 = (function (){var statearr_24653 = state_24649;(statearr_24653[(7)] = inst_24626__$1);
return statearr_24653;
})();if(cljs.core.truth_(inst_24627))
{var statearr_24654_24678 = state_24649__$1;(statearr_24654_24678[(1)] = (5));
} else
{var statearr_24655_24679 = state_24649__$1;(statearr_24655_24679[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (13)))
{var state_24649__$1 = state_24649;var statearr_24656_24680 = state_24649__$1;(statearr_24656_24680[(2)] = null);
(statearr_24656_24680[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (6)))
{var inst_24626 = (state_24649[(7)]);var inst_24632 = (function (){var G__24657 = inst_24626;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24657) : p.call(null,G__24657));
})();var state_24649__$1 = state_24649;if(cljs.core.truth_(inst_24632))
{var statearr_24658_24681 = state_24649__$1;(statearr_24658_24681[(1)] = (9));
} else
{var statearr_24659_24682 = state_24649__$1;(statearr_24659_24682[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (3)))
{var inst_24647 = (state_24649[(2)]);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.return_chan(state_24649__$1,inst_24647);
} else
{if((state_val_24650 === (12)))
{var state_24649__$1 = state_24649;var statearr_24660_24683 = state_24649__$1;(statearr_24660_24683[(2)] = null);
(statearr_24660_24683[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (2)))
{var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24649__$1,(4),ch);
} else
{if((state_val_24650 === (11)))
{var inst_24626 = (state_24649[(7)]);var inst_24636 = (state_24649[(2)]);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24649__$1,(8),inst_24636,inst_24626);
} else
{if((state_val_24650 === (9)))
{var state_24649__$1 = state_24649;var statearr_24661_24684 = state_24649__$1;(statearr_24661_24684[(2)] = tc);
(statearr_24661_24684[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (5)))
{var inst_24629 = cljs.core.async.close_BANG_(tc);var inst_24630 = cljs.core.async.close_BANG_(fc);var state_24649__$1 = (function (){var statearr_24662 = state_24649;(statearr_24662[(8)] = inst_24629);
return statearr_24662;
})();var statearr_24663_24685 = state_24649__$1;(statearr_24663_24685[(2)] = inst_24630);
(statearr_24663_24685[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (14)))
{var inst_24643 = (state_24649[(2)]);var state_24649__$1 = state_24649;var statearr_24664_24686 = state_24649__$1;(statearr_24664_24686[(2)] = inst_24643);
(statearr_24664_24686[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (10)))
{var state_24649__$1 = state_24649;var statearr_24665_24687 = state_24649__$1;(statearr_24665_24687[(2)] = fc);
(statearr_24665_24687[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24650 === (8)))
{var inst_24638 = (state_24649[(2)]);var state_24649__$1 = state_24649;if(cljs.core.truth_(inst_24638))
{var statearr_24666_24688 = state_24649__$1;(statearr_24666_24688[(1)] = (12));
} else
{var statearr_24667_24689 = state_24649__$1;(statearr_24667_24689[(1)] = (13));
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
});})(c__12292__auto___24675,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24675,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24671 = [null,null,null,null,null,null,null,null,null];(statearr_24671[(0)] = state_machine__12278__auto__);
(statearr_24671[(1)] = (1));
return statearr_24671;
});
var state_machine__12278__auto____1 = (function (state_24649){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24649);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24672){if((e24672 instanceof Object))
{var ex__12281__auto__ = e24672;var statearr_24673_24690 = state_24649;(statearr_24673_24690[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24649);
return cljs.core.constant$keyword$82;
} else
{throw e24672;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24691 = state_24649;
state_24649 = G__24691;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24649){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24675,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24674 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24675);
return statearr_24674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24675,tc,fc))
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
return (function (state_24740){var state_val_24741 = (state_24740[(1)]);if((state_val_24741 === (7)))
{var inst_24736 = (state_24740[(2)]);var state_24740__$1 = state_24740;var statearr_24742_24760 = state_24740__$1;(statearr_24742_24760[(2)] = inst_24736);
(statearr_24742_24760[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24741 === (6)))
{var inst_24726 = (state_24740[(7)]);var inst_24729 = (state_24740[(8)]);var inst_24733 = (function (){var G__24743 = inst_24726;var G__24744 = inst_24729;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24743,G__24744) : f.call(null,G__24743,G__24744));
})();var inst_24726__$1 = inst_24733;var state_24740__$1 = (function (){var statearr_24745 = state_24740;(statearr_24745[(7)] = inst_24726__$1);
return statearr_24745;
})();var statearr_24746_24761 = state_24740__$1;(statearr_24746_24761[(2)] = null);
(statearr_24746_24761[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24741 === (5)))
{var inst_24726 = (state_24740[(7)]);var state_24740__$1 = state_24740;var statearr_24747_24762 = state_24740__$1;(statearr_24747_24762[(2)] = inst_24726);
(statearr_24747_24762[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24741 === (4)))
{var inst_24729 = (state_24740[(8)]);var inst_24729__$1 = (state_24740[(2)]);var inst_24730 = (inst_24729__$1 == null);var state_24740__$1 = (function (){var statearr_24748 = state_24740;(statearr_24748[(8)] = inst_24729__$1);
return statearr_24748;
})();if(cljs.core.truth_(inst_24730))
{var statearr_24749_24763 = state_24740__$1;(statearr_24749_24763[(1)] = (5));
} else
{var statearr_24750_24764 = state_24740__$1;(statearr_24750_24764[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24741 === (3)))
{var inst_24738 = (state_24740[(2)]);var state_24740__$1 = state_24740;return cljs.core.async.impl.ioc_helpers.return_chan(state_24740__$1,inst_24738);
} else
{if((state_val_24741 === (2)))
{var state_24740__$1 = state_24740;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(4),ch);
} else
{if((state_val_24741 === (1)))
{var inst_24726 = init;var state_24740__$1 = (function (){var statearr_24751 = state_24740;(statearr_24751[(7)] = inst_24726);
return statearr_24751;
})();var statearr_24752_24765 = state_24740__$1;(statearr_24752_24765[(2)] = null);
(statearr_24752_24765[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24756 = [null,null,null,null,null,null,null,null,null];(statearr_24756[(0)] = state_machine__12278__auto__);
(statearr_24756[(1)] = (1));
return statearr_24756;
});
var state_machine__12278__auto____1 = (function (state_24740){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24740);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24757){if((e24757 instanceof Object))
{var ex__12281__auto__ = e24757;var statearr_24758_24766 = state_24740;(statearr_24758_24766[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24740);
return cljs.core.constant$keyword$82;
} else
{throw e24757;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24767 = state_24740;
state_24740 = G__24767;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24759 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24759;
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
return (function (state_24844){var state_val_24845 = (state_24844[(1)]);if((state_val_24845 === (7)))
{var inst_24826 = (state_24844[(2)]);var state_24844__$1 = state_24844;var statearr_24846_24869 = state_24844__$1;(statearr_24846_24869[(2)] = inst_24826);
(statearr_24846_24869[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (1)))
{var inst_24820 = cljs.core.seq(coll);var inst_24821 = inst_24820;var state_24844__$1 = (function (){var statearr_24847 = state_24844;(statearr_24847[(7)] = inst_24821);
return statearr_24847;
})();var statearr_24848_24870 = state_24844__$1;(statearr_24848_24870[(2)] = null);
(statearr_24848_24870[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (4)))
{var inst_24821 = (state_24844[(7)]);var inst_24824 = cljs.core.first(inst_24821);var state_24844__$1 = state_24844;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24844__$1,(7),ch,inst_24824);
} else
{if((state_val_24845 === (13)))
{var inst_24838 = (state_24844[(2)]);var state_24844__$1 = state_24844;var statearr_24849_24871 = state_24844__$1;(statearr_24849_24871[(2)] = inst_24838);
(statearr_24849_24871[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (6)))
{var inst_24829 = (state_24844[(2)]);var state_24844__$1 = state_24844;if(cljs.core.truth_(inst_24829))
{var statearr_24850_24872 = state_24844__$1;(statearr_24850_24872[(1)] = (8));
} else
{var statearr_24851_24873 = state_24844__$1;(statearr_24851_24873[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (3)))
{var inst_24842 = (state_24844[(2)]);var state_24844__$1 = state_24844;return cljs.core.async.impl.ioc_helpers.return_chan(state_24844__$1,inst_24842);
} else
{if((state_val_24845 === (12)))
{var state_24844__$1 = state_24844;var statearr_24852_24874 = state_24844__$1;(statearr_24852_24874[(2)] = null);
(statearr_24852_24874[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (2)))
{var inst_24821 = (state_24844[(7)]);var state_24844__$1 = state_24844;if(cljs.core.truth_(inst_24821))
{var statearr_24853_24875 = state_24844__$1;(statearr_24853_24875[(1)] = (4));
} else
{var statearr_24854_24876 = state_24844__$1;(statearr_24854_24876[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (11)))
{var inst_24835 = cljs.core.async.close_BANG_(ch);var state_24844__$1 = state_24844;var statearr_24855_24877 = state_24844__$1;(statearr_24855_24877[(2)] = inst_24835);
(statearr_24855_24877[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (9)))
{var state_24844__$1 = state_24844;if(cljs.core.truth_(close_QMARK_))
{var statearr_24856_24878 = state_24844__$1;(statearr_24856_24878[(1)] = (11));
} else
{var statearr_24857_24879 = state_24844__$1;(statearr_24857_24879[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (5)))
{var inst_24821 = (state_24844[(7)]);var state_24844__$1 = state_24844;var statearr_24858_24880 = state_24844__$1;(statearr_24858_24880[(2)] = inst_24821);
(statearr_24858_24880[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (10)))
{var inst_24840 = (state_24844[(2)]);var state_24844__$1 = state_24844;var statearr_24859_24881 = state_24844__$1;(statearr_24859_24881[(2)] = inst_24840);
(statearr_24859_24881[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24845 === (8)))
{var inst_24821 = (state_24844[(7)]);var inst_24831 = cljs.core.next(inst_24821);var inst_24821__$1 = inst_24831;var state_24844__$1 = (function (){var statearr_24860 = state_24844;(statearr_24860[(7)] = inst_24821__$1);
return statearr_24860;
})();var statearr_24861_24882 = state_24844__$1;(statearr_24861_24882[(2)] = null);
(statearr_24861_24882[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24865 = [null,null,null,null,null,null,null,null];(statearr_24865[(0)] = state_machine__12278__auto__);
(statearr_24865[(1)] = (1));
return statearr_24865;
});
var state_machine__12278__auto____1 = (function (state_24844){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24844);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object))
{var ex__12281__auto__ = e24866;var statearr_24867_24883 = state_24844;(statearr_24867_24883[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24844);
return cljs.core.constant$keyword$82;
} else
{throw e24866;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24884 = state_24844;
state_24844 = G__24884;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24844){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24868 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24868;
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
cljs.core.async.Mux = (function (){var obj24886 = {};return obj24886;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24890 = x__4277__auto__;return goog.typeOf(G__24890);
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
cljs.core.async.Mult = (function (){var obj24892 = {};return obj24892;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24896 = x__4277__auto__;return goog.typeOf(G__24896);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24900 = x__4277__auto__;return goog.typeOf(G__24900);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24904 = x__4277__auto__;return goog.typeOf(G__24904);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25134 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25134) : cljs.core.atom.call(null,G__25134));
})();var m = (function (){if(typeof cljs.core.async.t25135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25135 = (function (cs,ch,mult,meta25136){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25136 = meta25136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25135.cljs$lang$type = true;
cljs.core.async.t25135.cljs$lang$ctorStr = "cljs.core.async/t25135";
cljs.core.async.t25135.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25135");
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25135.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25138_25363 = self__.cs;var G__25139_25364 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25138_25363,G__25139_25364) : cljs.core.reset_BANG_.call(null,G__25138_25363,G__25139_25364));
return null;
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25137){var self__ = this;
var _25137__$1 = this;return self__.meta25136;
});})(cs))
;
cljs.core.async.t25135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25137,meta25136__$1){var self__ = this;
var _25137__$1 = this;return (new cljs.core.async.t25135(self__.cs,self__.ch,self__.mult,meta25136__$1));
});})(cs))
;
cljs.core.async.__GT_t25135 = ((function (cs){
return (function __GT_t25135(cs__$1,ch__$1,mult__$1,meta25136){return (new cljs.core.async.t25135(cs__$1,ch__$1,mult__$1,meta25136));
});})(cs))
;
}
return (new cljs.core.async.t25135(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25140 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25140) : cljs.core.atom.call(null,G__25140));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25365,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25365,cs,m,dchan,dctr,done){
return (function (state_25271){var state_val_25272 = (state_25271[(1)]);if((state_val_25272 === (7)))
{var inst_25267 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25273_25366 = state_25271__$1;(statearr_25273_25366[(2)] = inst_25267);
(statearr_25273_25366[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (20)))
{var inst_25172 = (state_25271[(7)]);var inst_25182 = cljs.core.first(inst_25172);var inst_25183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25182,(0),null);var inst_25184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25182,(1),null);var state_25271__$1 = (function (){var statearr_25274 = state_25271;(statearr_25274[(8)] = inst_25183);
return statearr_25274;
})();if(cljs.core.truth_(inst_25184))
{var statearr_25275_25367 = state_25271__$1;(statearr_25275_25367[(1)] = (22));
} else
{var statearr_25276_25368 = state_25271__$1;(statearr_25276_25368[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (27)))
{var inst_25214 = (state_25271[(9)]);var inst_25219 = (state_25271[(10)]);var inst_25143 = (state_25271[(11)]);var inst_25212 = (state_25271[(12)]);var inst_25219__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25212,inst_25214);var inst_25220 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25219__$1,inst_25143,done);var state_25271__$1 = (function (){var statearr_25277 = state_25271;(statearr_25277[(10)] = inst_25219__$1);
return statearr_25277;
})();if(cljs.core.truth_(inst_25220))
{var statearr_25278_25369 = state_25271__$1;(statearr_25278_25369[(1)] = (30));
} else
{var statearr_25279_25370 = state_25271__$1;(statearr_25279_25370[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (1)))
{var state_25271__$1 = state_25271;var statearr_25280_25371 = state_25271__$1;(statearr_25280_25371[(2)] = null);
(statearr_25280_25371[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (24)))
{var inst_25172 = (state_25271[(7)]);var inst_25189 = (state_25271[(2)]);var inst_25190 = cljs.core.next(inst_25172);var inst_25152 = inst_25190;var inst_25153 = null;var inst_25154 = (0);var inst_25155 = (0);var state_25271__$1 = (function (){var statearr_25281 = state_25271;(statearr_25281[(13)] = inst_25155);
(statearr_25281[(14)] = inst_25153);
(statearr_25281[(15)] = inst_25152);
(statearr_25281[(16)] = inst_25189);
(statearr_25281[(17)] = inst_25154);
return statearr_25281;
})();var statearr_25282_25372 = state_25271__$1;(statearr_25282_25372[(2)] = null);
(statearr_25282_25372[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (39)))
{var state_25271__$1 = state_25271;var statearr_25286_25373 = state_25271__$1;(statearr_25286_25373[(2)] = null);
(statearr_25286_25373[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (4)))
{var inst_25143 = (state_25271[(11)]);var inst_25143__$1 = (state_25271[(2)]);var inst_25144 = (inst_25143__$1 == null);var state_25271__$1 = (function (){var statearr_25287 = state_25271;(statearr_25287[(11)] = inst_25143__$1);
return statearr_25287;
})();if(cljs.core.truth_(inst_25144))
{var statearr_25288_25374 = state_25271__$1;(statearr_25288_25374[(1)] = (5));
} else
{var statearr_25289_25375 = state_25271__$1;(statearr_25289_25375[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (15)))
{var inst_25155 = (state_25271[(13)]);var inst_25153 = (state_25271[(14)]);var inst_25152 = (state_25271[(15)]);var inst_25154 = (state_25271[(17)]);var inst_25168 = (state_25271[(2)]);var inst_25169 = (inst_25155 + (1));var tmp25283 = inst_25153;var tmp25284 = inst_25152;var tmp25285 = inst_25154;var inst_25152__$1 = tmp25284;var inst_25153__$1 = tmp25283;var inst_25154__$1 = tmp25285;var inst_25155__$1 = inst_25169;var state_25271__$1 = (function (){var statearr_25290 = state_25271;(statearr_25290[(13)] = inst_25155__$1);
(statearr_25290[(14)] = inst_25153__$1);
(statearr_25290[(18)] = inst_25168);
(statearr_25290[(15)] = inst_25152__$1);
(statearr_25290[(17)] = inst_25154__$1);
return statearr_25290;
})();var statearr_25291_25376 = state_25271__$1;(statearr_25291_25376[(2)] = null);
(statearr_25291_25376[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (21)))
{var inst_25193 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25295_25377 = state_25271__$1;(statearr_25295_25377[(2)] = inst_25193);
(statearr_25295_25377[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (31)))
{var inst_25219 = (state_25271[(10)]);var inst_25223 = done(null);var inst_25224 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25219);var state_25271__$1 = (function (){var statearr_25296 = state_25271;(statearr_25296[(19)] = inst_25223);
return statearr_25296;
})();var statearr_25297_25378 = state_25271__$1;(statearr_25297_25378[(2)] = inst_25224);
(statearr_25297_25378[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (32)))
{var inst_25214 = (state_25271[(9)]);var inst_25211 = (state_25271[(20)]);var inst_25213 = (state_25271[(21)]);var inst_25212 = (state_25271[(12)]);var inst_25226 = (state_25271[(2)]);var inst_25227 = (inst_25214 + (1));var tmp25292 = inst_25211;var tmp25293 = inst_25213;var tmp25294 = inst_25212;var inst_25211__$1 = tmp25292;var inst_25212__$1 = tmp25294;var inst_25213__$1 = tmp25293;var inst_25214__$1 = inst_25227;var state_25271__$1 = (function (){var statearr_25298 = state_25271;(statearr_25298[(9)] = inst_25214__$1);
(statearr_25298[(20)] = inst_25211__$1);
(statearr_25298[(22)] = inst_25226);
(statearr_25298[(21)] = inst_25213__$1);
(statearr_25298[(12)] = inst_25212__$1);
return statearr_25298;
})();var statearr_25299_25379 = state_25271__$1;(statearr_25299_25379[(2)] = null);
(statearr_25299_25379[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (40)))
{var inst_25239 = (state_25271[(23)]);var inst_25243 = done(null);var inst_25244 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25239);var state_25271__$1 = (function (){var statearr_25300 = state_25271;(statearr_25300[(24)] = inst_25243);
return statearr_25300;
})();var statearr_25301_25380 = state_25271__$1;(statearr_25301_25380[(2)] = inst_25244);
(statearr_25301_25380[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (33)))
{var inst_25230 = (state_25271[(25)]);var inst_25232 = cljs.core.chunked_seq_QMARK_(inst_25230);var state_25271__$1 = state_25271;if(inst_25232)
{var statearr_25302_25381 = state_25271__$1;(statearr_25302_25381[(1)] = (36));
} else
{var statearr_25303_25382 = state_25271__$1;(statearr_25303_25382[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (13)))
{var inst_25162 = (state_25271[(26)]);var inst_25165 = cljs.core.async.close_BANG_(inst_25162);var state_25271__$1 = state_25271;var statearr_25304_25383 = state_25271__$1;(statearr_25304_25383[(2)] = inst_25165);
(statearr_25304_25383[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (22)))
{var inst_25183 = (state_25271[(8)]);var inst_25186 = cljs.core.async.close_BANG_(inst_25183);var state_25271__$1 = state_25271;var statearr_25305_25384 = state_25271__$1;(statearr_25305_25384[(2)] = inst_25186);
(statearr_25305_25384[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (36)))
{var inst_25230 = (state_25271[(25)]);var inst_25234 = cljs.core.chunk_first(inst_25230);var inst_25235 = cljs.core.chunk_rest(inst_25230);var inst_25236 = cljs.core.count(inst_25234);var inst_25211 = inst_25235;var inst_25212 = inst_25234;var inst_25213 = inst_25236;var inst_25214 = (0);var state_25271__$1 = (function (){var statearr_25306 = state_25271;(statearr_25306[(9)] = inst_25214);
(statearr_25306[(20)] = inst_25211);
(statearr_25306[(21)] = inst_25213);
(statearr_25306[(12)] = inst_25212);
return statearr_25306;
})();var statearr_25307_25385 = state_25271__$1;(statearr_25307_25385[(2)] = null);
(statearr_25307_25385[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (41)))
{var inst_25230 = (state_25271[(25)]);var inst_25246 = (state_25271[(2)]);var inst_25247 = cljs.core.next(inst_25230);var inst_25211 = inst_25247;var inst_25212 = null;var inst_25213 = (0);var inst_25214 = (0);var state_25271__$1 = (function (){var statearr_25308 = state_25271;(statearr_25308[(9)] = inst_25214);
(statearr_25308[(20)] = inst_25211);
(statearr_25308[(21)] = inst_25213);
(statearr_25308[(27)] = inst_25246);
(statearr_25308[(12)] = inst_25212);
return statearr_25308;
})();var statearr_25309_25386 = state_25271__$1;(statearr_25309_25386[(2)] = null);
(statearr_25309_25386[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (43)))
{var state_25271__$1 = state_25271;var statearr_25310_25387 = state_25271__$1;(statearr_25310_25387[(2)] = null);
(statearr_25310_25387[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (29)))
{var inst_25255 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25311_25388 = state_25271__$1;(statearr_25311_25388[(2)] = inst_25255);
(statearr_25311_25388[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (44)))
{var inst_25264 = (state_25271[(2)]);var state_25271__$1 = (function (){var statearr_25312 = state_25271;(statearr_25312[(28)] = inst_25264);
return statearr_25312;
})();var statearr_25313_25389 = state_25271__$1;(statearr_25313_25389[(2)] = null);
(statearr_25313_25389[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (6)))
{var inst_25203 = (state_25271[(29)]);var inst_25202 = (function (){var G__25314 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25314) : cljs.core.deref.call(null,G__25314));
})();var inst_25203__$1 = cljs.core.keys(inst_25202);var inst_25204 = cljs.core.count(inst_25203__$1);var inst_25205 = (function (){var G__25315 = dctr;var G__25316 = inst_25204;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25315,G__25316) : cljs.core.reset_BANG_.call(null,G__25315,G__25316));
})();var inst_25210 = cljs.core.seq(inst_25203__$1);var inst_25211 = inst_25210;var inst_25212 = null;var inst_25213 = (0);var inst_25214 = (0);var state_25271__$1 = (function (){var statearr_25317 = state_25271;(statearr_25317[(29)] = inst_25203__$1);
(statearr_25317[(9)] = inst_25214);
(statearr_25317[(20)] = inst_25211);
(statearr_25317[(21)] = inst_25213);
(statearr_25317[(30)] = inst_25205);
(statearr_25317[(12)] = inst_25212);
return statearr_25317;
})();var statearr_25318_25390 = state_25271__$1;(statearr_25318_25390[(2)] = null);
(statearr_25318_25390[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (28)))
{var inst_25211 = (state_25271[(20)]);var inst_25230 = (state_25271[(25)]);var inst_25230__$1 = cljs.core.seq(inst_25211);var state_25271__$1 = (function (){var statearr_25319 = state_25271;(statearr_25319[(25)] = inst_25230__$1);
return statearr_25319;
})();if(inst_25230__$1)
{var statearr_25320_25391 = state_25271__$1;(statearr_25320_25391[(1)] = (33));
} else
{var statearr_25321_25392 = state_25271__$1;(statearr_25321_25392[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (25)))
{var inst_25214 = (state_25271[(9)]);var inst_25213 = (state_25271[(21)]);var inst_25216 = (inst_25214 < inst_25213);var inst_25217 = inst_25216;var state_25271__$1 = state_25271;if(cljs.core.truth_(inst_25217))
{var statearr_25322_25393 = state_25271__$1;(statearr_25322_25393[(1)] = (27));
} else
{var statearr_25323_25394 = state_25271__$1;(statearr_25323_25394[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (34)))
{var state_25271__$1 = state_25271;var statearr_25324_25395 = state_25271__$1;(statearr_25324_25395[(2)] = null);
(statearr_25324_25395[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (17)))
{var state_25271__$1 = state_25271;var statearr_25325_25396 = state_25271__$1;(statearr_25325_25396[(2)] = null);
(statearr_25325_25396[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (3)))
{var inst_25269 = (state_25271[(2)]);var state_25271__$1 = state_25271;return cljs.core.async.impl.ioc_helpers.return_chan(state_25271__$1,inst_25269);
} else
{if((state_val_25272 === (12)))
{var inst_25198 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25326_25397 = state_25271__$1;(statearr_25326_25397[(2)] = inst_25198);
(statearr_25326_25397[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (2)))
{var state_25271__$1 = state_25271;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25271__$1,(4),ch);
} else
{if((state_val_25272 === (23)))
{var state_25271__$1 = state_25271;var statearr_25327_25398 = state_25271__$1;(statearr_25327_25398[(2)] = null);
(statearr_25327_25398[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (35)))
{var inst_25253 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25328_25399 = state_25271__$1;(statearr_25328_25399[(2)] = inst_25253);
(statearr_25328_25399[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (19)))
{var inst_25172 = (state_25271[(7)]);var inst_25176 = cljs.core.chunk_first(inst_25172);var inst_25177 = cljs.core.chunk_rest(inst_25172);var inst_25178 = cljs.core.count(inst_25176);var inst_25152 = inst_25177;var inst_25153 = inst_25176;var inst_25154 = inst_25178;var inst_25155 = (0);var state_25271__$1 = (function (){var statearr_25329 = state_25271;(statearr_25329[(13)] = inst_25155);
(statearr_25329[(14)] = inst_25153);
(statearr_25329[(15)] = inst_25152);
(statearr_25329[(17)] = inst_25154);
return statearr_25329;
})();var statearr_25330_25400 = state_25271__$1;(statearr_25330_25400[(2)] = null);
(statearr_25330_25400[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (11)))
{var inst_25152 = (state_25271[(15)]);var inst_25172 = (state_25271[(7)]);var inst_25172__$1 = cljs.core.seq(inst_25152);var state_25271__$1 = (function (){var statearr_25331 = state_25271;(statearr_25331[(7)] = inst_25172__$1);
return statearr_25331;
})();if(inst_25172__$1)
{var statearr_25332_25401 = state_25271__$1;(statearr_25332_25401[(1)] = (16));
} else
{var statearr_25333_25402 = state_25271__$1;(statearr_25333_25402[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (9)))
{var inst_25200 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25334_25403 = state_25271__$1;(statearr_25334_25403[(2)] = inst_25200);
(statearr_25334_25403[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (5)))
{var inst_25150 = (function (){var G__25335 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25335) : cljs.core.deref.call(null,G__25335));
})();var inst_25151 = cljs.core.seq(inst_25150);var inst_25152 = inst_25151;var inst_25153 = null;var inst_25154 = (0);var inst_25155 = (0);var state_25271__$1 = (function (){var statearr_25336 = state_25271;(statearr_25336[(13)] = inst_25155);
(statearr_25336[(14)] = inst_25153);
(statearr_25336[(15)] = inst_25152);
(statearr_25336[(17)] = inst_25154);
return statearr_25336;
})();var statearr_25337_25404 = state_25271__$1;(statearr_25337_25404[(2)] = null);
(statearr_25337_25404[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (14)))
{var state_25271__$1 = state_25271;var statearr_25338_25405 = state_25271__$1;(statearr_25338_25405[(2)] = null);
(statearr_25338_25405[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (45)))
{var inst_25261 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25339_25406 = state_25271__$1;(statearr_25339_25406[(2)] = inst_25261);
(statearr_25339_25406[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (26)))
{var inst_25203 = (state_25271[(29)]);var inst_25257 = (state_25271[(2)]);var inst_25258 = cljs.core.seq(inst_25203);var state_25271__$1 = (function (){var statearr_25340 = state_25271;(statearr_25340[(31)] = inst_25257);
return statearr_25340;
})();if(inst_25258)
{var statearr_25341_25407 = state_25271__$1;(statearr_25341_25407[(1)] = (42));
} else
{var statearr_25342_25408 = state_25271__$1;(statearr_25342_25408[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (16)))
{var inst_25172 = (state_25271[(7)]);var inst_25174 = cljs.core.chunked_seq_QMARK_(inst_25172);var state_25271__$1 = state_25271;if(inst_25174)
{var statearr_25343_25409 = state_25271__$1;(statearr_25343_25409[(1)] = (19));
} else
{var statearr_25344_25410 = state_25271__$1;(statearr_25344_25410[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (38)))
{var inst_25250 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25345_25411 = state_25271__$1;(statearr_25345_25411[(2)] = inst_25250);
(statearr_25345_25411[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (30)))
{var state_25271__$1 = state_25271;var statearr_25346_25412 = state_25271__$1;(statearr_25346_25412[(2)] = null);
(statearr_25346_25412[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (10)))
{var inst_25155 = (state_25271[(13)]);var inst_25153 = (state_25271[(14)]);var inst_25161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25153,inst_25155);var inst_25162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25161,(0),null);var inst_25163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25161,(1),null);var state_25271__$1 = (function (){var statearr_25347 = state_25271;(statearr_25347[(26)] = inst_25162);
return statearr_25347;
})();if(cljs.core.truth_(inst_25163))
{var statearr_25348_25413 = state_25271__$1;(statearr_25348_25413[(1)] = (13));
} else
{var statearr_25349_25414 = state_25271__$1;(statearr_25349_25414[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (18)))
{var inst_25196 = (state_25271[(2)]);var state_25271__$1 = state_25271;var statearr_25350_25415 = state_25271__$1;(statearr_25350_25415[(2)] = inst_25196);
(statearr_25350_25415[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (42)))
{var state_25271__$1 = state_25271;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25271__$1,(45),dchan);
} else
{if((state_val_25272 === (37)))
{var inst_25143 = (state_25271[(11)]);var inst_25230 = (state_25271[(25)]);var inst_25239 = (state_25271[(23)]);var inst_25239__$1 = cljs.core.first(inst_25230);var inst_25240 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25239__$1,inst_25143,done);var state_25271__$1 = (function (){var statearr_25351 = state_25271;(statearr_25351[(23)] = inst_25239__$1);
return statearr_25351;
})();if(cljs.core.truth_(inst_25240))
{var statearr_25352_25416 = state_25271__$1;(statearr_25352_25416[(1)] = (39));
} else
{var statearr_25353_25417 = state_25271__$1;(statearr_25353_25417[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25272 === (8)))
{var inst_25155 = (state_25271[(13)]);var inst_25154 = (state_25271[(17)]);var inst_25157 = (inst_25155 < inst_25154);var inst_25158 = inst_25157;var state_25271__$1 = state_25271;if(cljs.core.truth_(inst_25158))
{var statearr_25354_25418 = state_25271__$1;(statearr_25354_25418[(1)] = (10));
} else
{var statearr_25355_25419 = state_25271__$1;(statearr_25355_25419[(1)] = (11));
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
});})(c__12292__auto___25365,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25365,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25359[(0)] = state_machine__12278__auto__);
(statearr_25359[(1)] = (1));
return statearr_25359;
});
var state_machine__12278__auto____1 = (function (state_25271){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25271);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25360){if((e25360 instanceof Object))
{var ex__12281__auto__ = e25360;var statearr_25361_25420 = state_25271;(statearr_25361_25420[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25271);
return cljs.core.constant$keyword$82;
} else
{throw e25360;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25421 = state_25271;
state_25271 = G__25421;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25271){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25365,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25362 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25365);
return statearr_25362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25365,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25426 = {};return obj25426;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25430 = x__4277__auto__;return goog.typeOf(G__25430);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25434 = x__4277__auto__;return goog.typeOf(G__25434);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25438 = x__4277__auto__;return goog.typeOf(G__25438);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25442 = x__4277__auto__;return goog.typeOf(G__25442);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25446 = x__4277__auto__;return goog.typeOf(G__25446);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25447){var map__25453 = p__25447;var map__25453__$1 = ((cljs.core.seq_QMARK_(map__25453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25453):map__25453);var opts = map__25453__$1;var statearr_25454_25458 = state;(statearr_25454_25458[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25453,map__25453__$1,opts){
return (function (val){var statearr_25455_25459 = state;(statearr_25455_25459[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25453,map__25453__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25456_25460 = state;(statearr_25456_25460[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25457 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25457) : cljs.core.deref.call(null,G__25457));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25447 = null;if (arguments.length > 3) {
  p__25447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25447);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25461){
var state = cljs.core.first(arglist__25461);
arglist__25461 = cljs.core.next(arglist__25461);
var cont_block = cljs.core.first(arglist__25461);
arglist__25461 = cljs.core.next(arglist__25461);
var ports = cljs.core.first(arglist__25461);
var p__25447 = cljs.core.rest(arglist__25461);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25447);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25595 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25595) : cljs.core.atom.call(null,G__25595));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25596 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25596) : cljs.core.atom.call(null,G__25596));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25597 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25597) : attr.call(null,G__25597));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25598 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25598) : cljs.core.deref.call(null,G__25598));
})();var mode = (function (){var G__25599 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25599) : cljs.core.deref.call(null,G__25599));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25600 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25601){
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
this.meta25601 = meta25601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25600.cljs$lang$type = true;
cljs.core.async.t25600.cljs$lang$ctorStr = "cljs.core.async/t25600";
cljs.core.async.t25600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25603_25728 = self__.cs;var G__25604_25729 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25603_25728,G__25604_25729) : cljs.core.reset_BANG_.call(null,G__25603_25728,G__25604_25729));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25605 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25605) : self__.solo_modes.call(null,G__25605));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25606_25730 = self__.solo_mode;var G__25607_25731 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25606_25730,G__25607_25731) : cljs.core.reset_BANG_.call(null,G__25606_25730,G__25607_25731));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25602){var self__ = this;
var _25602__$1 = this;return self__.meta25601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25602,meta25601__$1){var self__ = this;
var _25602__$1 = this;return (new cljs.core.async.t25600(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25601){return (new cljs.core.async.t25600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25600(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25679){var state_val_25680 = (state_25679[(1)]);if((state_val_25680 === (7)))
{var inst_25621 = (state_25679[(7)]);var inst_25626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25621);var state_25679__$1 = state_25679;var statearr_25681_25733 = state_25679__$1;(statearr_25681_25733[(2)] = inst_25626);
(statearr_25681_25733[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (20)))
{var inst_25636 = (state_25679[(8)]);var state_25679__$1 = state_25679;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25679__$1,(23),out,inst_25636);
} else
{if((state_val_25680 === (1)))
{var inst_25611 = (state_25679[(9)]);var inst_25611__$1 = calc_state();var inst_25612 = cljs.core.seq_QMARK_(inst_25611__$1);var state_25679__$1 = (function (){var statearr_25682 = state_25679;(statearr_25682[(9)] = inst_25611__$1);
return statearr_25682;
})();if(inst_25612)
{var statearr_25683_25734 = state_25679__$1;(statearr_25683_25734[(1)] = (2));
} else
{var statearr_25684_25735 = state_25679__$1;(statearr_25684_25735[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (24)))
{var inst_25629 = (state_25679[(10)]);var inst_25621 = inst_25629;var state_25679__$1 = (function (){var statearr_25685 = state_25679;(statearr_25685[(7)] = inst_25621);
return statearr_25685;
})();var statearr_25686_25736 = state_25679__$1;(statearr_25686_25736[(2)] = null);
(statearr_25686_25736[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (4)))
{var inst_25611 = (state_25679[(9)]);var inst_25617 = (state_25679[(2)]);var inst_25618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.constant$keyword$96);var inst_25619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.constant$keyword$95);var inst_25620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25617,cljs.core.constant$keyword$94);var inst_25621 = inst_25611;var state_25679__$1 = (function (){var statearr_25687 = state_25679;(statearr_25687[(11)] = inst_25619);
(statearr_25687[(12)] = inst_25618);
(statearr_25687[(13)] = inst_25620);
(statearr_25687[(7)] = inst_25621);
return statearr_25687;
})();var statearr_25688_25737 = state_25679__$1;(statearr_25688_25737[(2)] = null);
(statearr_25688_25737[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (15)))
{var state_25679__$1 = state_25679;var statearr_25689_25738 = state_25679__$1;(statearr_25689_25738[(2)] = null);
(statearr_25689_25738[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (21)))
{var inst_25629 = (state_25679[(10)]);var inst_25621 = inst_25629;var state_25679__$1 = (function (){var statearr_25690 = state_25679;(statearr_25690[(7)] = inst_25621);
return statearr_25690;
})();var statearr_25691_25739 = state_25679__$1;(statearr_25691_25739[(2)] = null);
(statearr_25691_25739[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (13)))
{var inst_25675 = (state_25679[(2)]);var state_25679__$1 = state_25679;var statearr_25692_25740 = state_25679__$1;(statearr_25692_25740[(2)] = inst_25675);
(statearr_25692_25740[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (22)))
{var inst_25673 = (state_25679[(2)]);var state_25679__$1 = state_25679;var statearr_25693_25741 = state_25679__$1;(statearr_25693_25741[(2)] = inst_25673);
(statearr_25693_25741[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (6)))
{var inst_25677 = (state_25679[(2)]);var state_25679__$1 = state_25679;return cljs.core.async.impl.ioc_helpers.return_chan(state_25679__$1,inst_25677);
} else
{if((state_val_25680 === (25)))
{var state_25679__$1 = state_25679;var statearr_25694_25742 = state_25679__$1;(statearr_25694_25742[(2)] = null);
(statearr_25694_25742[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (17)))
{var inst_25652 = (state_25679[(14)]);var state_25679__$1 = state_25679;var statearr_25695_25743 = state_25679__$1;(statearr_25695_25743[(2)] = inst_25652);
(statearr_25695_25743[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (3)))
{var inst_25611 = (state_25679[(9)]);var state_25679__$1 = state_25679;var statearr_25696_25744 = state_25679__$1;(statearr_25696_25744[(2)] = inst_25611);
(statearr_25696_25744[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (12)))
{var inst_25637 = (state_25679[(15)]);var inst_25652 = (state_25679[(14)]);var inst_25632 = (state_25679[(16)]);var inst_25652__$1 = (function (){var G__25697 = inst_25637;return (inst_25632.cljs$core$IFn$_invoke$arity$1 ? inst_25632.cljs$core$IFn$_invoke$arity$1(G__25697) : inst_25632.call(null,G__25697));
})();var state_25679__$1 = (function (){var statearr_25698 = state_25679;(statearr_25698[(14)] = inst_25652__$1);
return statearr_25698;
})();if(cljs.core.truth_(inst_25652__$1))
{var statearr_25699_25745 = state_25679__$1;(statearr_25699_25745[(1)] = (17));
} else
{var statearr_25700_25746 = state_25679__$1;(statearr_25700_25746[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (2)))
{var inst_25611 = (state_25679[(9)]);var inst_25614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25611);var state_25679__$1 = state_25679;var statearr_25701_25747 = state_25679__$1;(statearr_25701_25747[(2)] = inst_25614);
(statearr_25701_25747[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (23)))
{var inst_25664 = (state_25679[(2)]);var state_25679__$1 = state_25679;if(cljs.core.truth_(inst_25664))
{var statearr_25702_25748 = state_25679__$1;(statearr_25702_25748[(1)] = (24));
} else
{var statearr_25703_25749 = state_25679__$1;(statearr_25703_25749[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (19)))
{var inst_25661 = (state_25679[(2)]);var state_25679__$1 = state_25679;if(cljs.core.truth_(inst_25661))
{var statearr_25704_25750 = state_25679__$1;(statearr_25704_25750[(1)] = (20));
} else
{var statearr_25705_25751 = state_25679__$1;(statearr_25705_25751[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (11)))
{var inst_25636 = (state_25679[(8)]);var inst_25642 = (inst_25636 == null);var state_25679__$1 = state_25679;if(cljs.core.truth_(inst_25642))
{var statearr_25706_25752 = state_25679__$1;(statearr_25706_25752[(1)] = (14));
} else
{var statearr_25707_25753 = state_25679__$1;(statearr_25707_25753[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (9)))
{var inst_25629 = (state_25679[(10)]);var inst_25629__$1 = (state_25679[(2)]);var inst_25630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25629__$1,cljs.core.constant$keyword$96);var inst_25631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25629__$1,cljs.core.constant$keyword$95);var inst_25632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25629__$1,cljs.core.constant$keyword$94);var state_25679__$1 = (function (){var statearr_25708 = state_25679;(statearr_25708[(17)] = inst_25631);
(statearr_25708[(10)] = inst_25629__$1);
(statearr_25708[(16)] = inst_25632);
return statearr_25708;
})();return cljs.core.async.ioc_alts_BANG_(state_25679__$1,(10),inst_25630);
} else
{if((state_val_25680 === (5)))
{var inst_25621 = (state_25679[(7)]);var inst_25624 = cljs.core.seq_QMARK_(inst_25621);var state_25679__$1 = state_25679;if(inst_25624)
{var statearr_25709_25754 = state_25679__$1;(statearr_25709_25754[(1)] = (7));
} else
{var statearr_25710_25755 = state_25679__$1;(statearr_25710_25755[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (14)))
{var inst_25637 = (state_25679[(15)]);var inst_25644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25637);var state_25679__$1 = state_25679;var statearr_25711_25756 = state_25679__$1;(statearr_25711_25756[(2)] = inst_25644);
(statearr_25711_25756[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (26)))
{var inst_25669 = (state_25679[(2)]);var state_25679__$1 = state_25679;var statearr_25712_25757 = state_25679__$1;(statearr_25712_25757[(2)] = inst_25669);
(statearr_25712_25757[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (16)))
{var inst_25647 = (state_25679[(2)]);var inst_25648 = calc_state();var inst_25621 = inst_25648;var state_25679__$1 = (function (){var statearr_25713 = state_25679;(statearr_25713[(18)] = inst_25647);
(statearr_25713[(7)] = inst_25621);
return statearr_25713;
})();var statearr_25714_25758 = state_25679__$1;(statearr_25714_25758[(2)] = null);
(statearr_25714_25758[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (10)))
{var inst_25637 = (state_25679[(15)]);var inst_25636 = (state_25679[(8)]);var inst_25635 = (state_25679[(2)]);var inst_25636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25635,(0),null);var inst_25637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25635,(1),null);var inst_25638 = (inst_25636__$1 == null);var inst_25639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25637__$1,change);var inst_25640 = (inst_25638) || (inst_25639);var state_25679__$1 = (function (){var statearr_25715 = state_25679;(statearr_25715[(15)] = inst_25637__$1);
(statearr_25715[(8)] = inst_25636__$1);
return statearr_25715;
})();if(cljs.core.truth_(inst_25640))
{var statearr_25716_25759 = state_25679__$1;(statearr_25716_25759[(1)] = (11));
} else
{var statearr_25717_25760 = state_25679__$1;(statearr_25717_25760[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (18)))
{var inst_25631 = (state_25679[(17)]);var inst_25637 = (state_25679[(15)]);var inst_25632 = (state_25679[(16)]);var inst_25656 = cljs.core.empty_QMARK_(inst_25632);var inst_25657 = (function (){var G__25718 = inst_25637;return (inst_25631.cljs$core$IFn$_invoke$arity$1 ? inst_25631.cljs$core$IFn$_invoke$arity$1(G__25718) : inst_25631.call(null,G__25718));
})();var inst_25658 = cljs.core.not(inst_25657);var inst_25659 = (inst_25656) && (inst_25658);var state_25679__$1 = state_25679;var statearr_25719_25761 = state_25679__$1;(statearr_25719_25761[(2)] = inst_25659);
(statearr_25719_25761[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25680 === (8)))
{var inst_25621 = (state_25679[(7)]);var state_25679__$1 = state_25679;var statearr_25720_25762 = state_25679__$1;(statearr_25720_25762[(2)] = inst_25621);
(statearr_25720_25762[(1)] = (9));
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
});})(c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25724[(0)] = state_machine__12278__auto__);
(statearr_25724[(1)] = (1));
return statearr_25724;
});
var state_machine__12278__auto____1 = (function (state_25679){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25679);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25725){if((e25725 instanceof Object))
{var ex__12281__auto__ = e25725;var statearr_25726_25763 = state_25679;(statearr_25726_25763[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25679);
return cljs.core.constant$keyword$82;
} else
{throw e25725;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25764 = state_25679;
state_25679 = G__25764;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25679){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25727 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25732);
return statearr_25727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25766 = {};return obj25766;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25770 = x__4277__auto__;return goog.typeOf(G__25770);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25774 = x__4277__auto__;return goog.typeOf(G__25774);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25780 = x__4277__auto__;return goog.typeOf(G__25780);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25782 = x__4277__auto__;return goog.typeOf(G__25782);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25921 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25921) : cljs.core.atom.call(null,G__25921));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25923 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25923) : cljs.core.deref.call(null,G__25923));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25783_SHARP_){if(cljs.core.truth_((function (){var G__25924 = topic;return (p1__25783_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25783_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25924) : p1__25783_SHARP_.call(null,G__25924));
})()))
{return p1__25783_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25783_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25925 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25925) : buf_fn.call(null,G__25925));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25926 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25927){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25927 = meta25927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25926.cljs$lang$type = true;
cljs.core.async.t25926.cljs$lang$ctorStr = "cljs.core.async/t25926";
cljs.core.async.t25926.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25926");
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25926.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25929 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25929) : self__.ensure_mult.call(null,G__25929));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25930 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25930) : cljs.core.deref.call(null,G__25930));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25931 = self__.mults;var G__25932 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25931,G__25932) : cljs.core.reset_BANG_.call(null,G__25931,G__25932));
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25928){var self__ = this;
var _25928__$1 = this;return self__.meta25927;
});})(mults,ensure_mult))
;
cljs.core.async.t25926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25928,meta25927__$1){var self__ = this;
var _25928__$1 = this;return (new cljs.core.async.t25926(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25927__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25926 = ((function (mults,ensure_mult){
return (function __GT_t25926(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25927){return (new cljs.core.async.t25926(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25927));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25926(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26055,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26055,mults,ensure_mult,p){
return (function (state_26004){var state_val_26005 = (state_26004[(1)]);if((state_val_26005 === (7)))
{var inst_26000 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26006_26056 = state_26004__$1;(statearr_26006_26056[(2)] = inst_26000);
(statearr_26006_26056[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (20)))
{var state_26004__$1 = state_26004;var statearr_26007_26057 = state_26004__$1;(statearr_26007_26057[(2)] = null);
(statearr_26007_26057[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (1)))
{var state_26004__$1 = state_26004;var statearr_26008_26058 = state_26004__$1;(statearr_26008_26058[(2)] = null);
(statearr_26008_26058[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (24)))
{var inst_25983 = (state_26004[(7)]);var inst_25992 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25983);var state_26004__$1 = state_26004;var statearr_26009_26059 = state_26004__$1;(statearr_26009_26059[(2)] = inst_25992);
(statearr_26009_26059[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (4)))
{var inst_25935 = (state_26004[(8)]);var inst_25935__$1 = (state_26004[(2)]);var inst_25936 = (inst_25935__$1 == null);var state_26004__$1 = (function (){var statearr_26010 = state_26004;(statearr_26010[(8)] = inst_25935__$1);
return statearr_26010;
})();if(cljs.core.truth_(inst_25936))
{var statearr_26011_26060 = state_26004__$1;(statearr_26011_26060[(1)] = (5));
} else
{var statearr_26012_26061 = state_26004__$1;(statearr_26012_26061[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (15)))
{var inst_25977 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26013_26062 = state_26004__$1;(statearr_26013_26062[(2)] = inst_25977);
(statearr_26013_26062[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (21)))
{var inst_25997 = (state_26004[(2)]);var state_26004__$1 = (function (){var statearr_26014 = state_26004;(statearr_26014[(9)] = inst_25997);
return statearr_26014;
})();var statearr_26015_26063 = state_26004__$1;(statearr_26015_26063[(2)] = null);
(statearr_26015_26063[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (13)))
{var inst_25959 = (state_26004[(10)]);var inst_25961 = cljs.core.chunked_seq_QMARK_(inst_25959);var state_26004__$1 = state_26004;if(inst_25961)
{var statearr_26016_26064 = state_26004__$1;(statearr_26016_26064[(1)] = (16));
} else
{var statearr_26017_26065 = state_26004__$1;(statearr_26017_26065[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (22)))
{var inst_25989 = (state_26004[(2)]);var state_26004__$1 = state_26004;if(cljs.core.truth_(inst_25989))
{var statearr_26018_26066 = state_26004__$1;(statearr_26018_26066[(1)] = (23));
} else
{var statearr_26019_26067 = state_26004__$1;(statearr_26019_26067[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (6)))
{var inst_25983 = (state_26004[(7)]);var inst_25985 = (state_26004[(11)]);var inst_25935 = (state_26004[(8)]);var inst_25983__$1 = (function (){var G__26020 = inst_25935;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26020) : topic_fn.call(null,G__26020));
})();var inst_25984 = (function (){var G__26021 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26021) : cljs.core.deref.call(null,G__26021));
})();var inst_25985__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25984,inst_25983__$1);var state_26004__$1 = (function (){var statearr_26022 = state_26004;(statearr_26022[(7)] = inst_25983__$1);
(statearr_26022[(11)] = inst_25985__$1);
return statearr_26022;
})();if(cljs.core.truth_(inst_25985__$1))
{var statearr_26023_26068 = state_26004__$1;(statearr_26023_26068[(1)] = (19));
} else
{var statearr_26024_26069 = state_26004__$1;(statearr_26024_26069[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (25)))
{var inst_25994 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26025_26070 = state_26004__$1;(statearr_26025_26070[(2)] = inst_25994);
(statearr_26025_26070[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (17)))
{var inst_25959 = (state_26004[(10)]);var inst_25968 = cljs.core.first(inst_25959);var inst_25969 = cljs.core.async.muxch_STAR_(inst_25968);var inst_25970 = cljs.core.async.close_BANG_(inst_25969);var inst_25971 = cljs.core.next(inst_25959);var inst_25945 = inst_25971;var inst_25946 = null;var inst_25947 = (0);var inst_25948 = (0);var state_26004__$1 = (function (){var statearr_26026 = state_26004;(statearr_26026[(12)] = inst_25947);
(statearr_26026[(13)] = inst_25946);
(statearr_26026[(14)] = inst_25970);
(statearr_26026[(15)] = inst_25948);
(statearr_26026[(16)] = inst_25945);
return statearr_26026;
})();var statearr_26027_26071 = state_26004__$1;(statearr_26027_26071[(2)] = null);
(statearr_26027_26071[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (3)))
{var inst_26002 = (state_26004[(2)]);var state_26004__$1 = state_26004;return cljs.core.async.impl.ioc_helpers.return_chan(state_26004__$1,inst_26002);
} else
{if((state_val_26005 === (12)))
{var inst_25979 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26028_26072 = state_26004__$1;(statearr_26028_26072[(2)] = inst_25979);
(statearr_26028_26072[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (2)))
{var state_26004__$1 = state_26004;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26004__$1,(4),ch);
} else
{if((state_val_26005 === (23)))
{var state_26004__$1 = state_26004;var statearr_26029_26073 = state_26004__$1;(statearr_26029_26073[(2)] = null);
(statearr_26029_26073[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (19)))
{var inst_25985 = (state_26004[(11)]);var inst_25935 = (state_26004[(8)]);var inst_25987 = cljs.core.async.muxch_STAR_(inst_25985);var state_26004__$1 = state_26004;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26004__$1,(22),inst_25987,inst_25935);
} else
{if((state_val_26005 === (11)))
{var inst_25959 = (state_26004[(10)]);var inst_25945 = (state_26004[(16)]);var inst_25959__$1 = cljs.core.seq(inst_25945);var state_26004__$1 = (function (){var statearr_26030 = state_26004;(statearr_26030[(10)] = inst_25959__$1);
return statearr_26030;
})();if(inst_25959__$1)
{var statearr_26031_26074 = state_26004__$1;(statearr_26031_26074[(1)] = (13));
} else
{var statearr_26032_26075 = state_26004__$1;(statearr_26032_26075[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (9)))
{var inst_25981 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26033_26076 = state_26004__$1;(statearr_26033_26076[(2)] = inst_25981);
(statearr_26033_26076[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (5)))
{var inst_25942 = (function (){var G__26034 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26034) : cljs.core.deref.call(null,G__26034));
})();var inst_25943 = cljs.core.vals(inst_25942);var inst_25944 = cljs.core.seq(inst_25943);var inst_25945 = inst_25944;var inst_25946 = null;var inst_25947 = (0);var inst_25948 = (0);var state_26004__$1 = (function (){var statearr_26035 = state_26004;(statearr_26035[(12)] = inst_25947);
(statearr_26035[(13)] = inst_25946);
(statearr_26035[(15)] = inst_25948);
(statearr_26035[(16)] = inst_25945);
return statearr_26035;
})();var statearr_26036_26077 = state_26004__$1;(statearr_26036_26077[(2)] = null);
(statearr_26036_26077[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (14)))
{var state_26004__$1 = state_26004;var statearr_26040_26078 = state_26004__$1;(statearr_26040_26078[(2)] = null);
(statearr_26040_26078[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (16)))
{var inst_25959 = (state_26004[(10)]);var inst_25963 = cljs.core.chunk_first(inst_25959);var inst_25964 = cljs.core.chunk_rest(inst_25959);var inst_25965 = cljs.core.count(inst_25963);var inst_25945 = inst_25964;var inst_25946 = inst_25963;var inst_25947 = inst_25965;var inst_25948 = (0);var state_26004__$1 = (function (){var statearr_26041 = state_26004;(statearr_26041[(12)] = inst_25947);
(statearr_26041[(13)] = inst_25946);
(statearr_26041[(15)] = inst_25948);
(statearr_26041[(16)] = inst_25945);
return statearr_26041;
})();var statearr_26042_26079 = state_26004__$1;(statearr_26042_26079[(2)] = null);
(statearr_26042_26079[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (10)))
{var inst_25947 = (state_26004[(12)]);var inst_25946 = (state_26004[(13)]);var inst_25948 = (state_26004[(15)]);var inst_25945 = (state_26004[(16)]);var inst_25953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25946,inst_25948);var inst_25954 = cljs.core.async.muxch_STAR_(inst_25953);var inst_25955 = cljs.core.async.close_BANG_(inst_25954);var inst_25956 = (inst_25948 + (1));var tmp26037 = inst_25947;var tmp26038 = inst_25946;var tmp26039 = inst_25945;var inst_25945__$1 = tmp26039;var inst_25946__$1 = tmp26038;var inst_25947__$1 = tmp26037;var inst_25948__$1 = inst_25956;var state_26004__$1 = (function (){var statearr_26043 = state_26004;(statearr_26043[(12)] = inst_25947__$1);
(statearr_26043[(13)] = inst_25946__$1);
(statearr_26043[(15)] = inst_25948__$1);
(statearr_26043[(16)] = inst_25945__$1);
(statearr_26043[(17)] = inst_25955);
return statearr_26043;
})();var statearr_26044_26080 = state_26004__$1;(statearr_26044_26080[(2)] = null);
(statearr_26044_26080[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (18)))
{var inst_25974 = (state_26004[(2)]);var state_26004__$1 = state_26004;var statearr_26045_26081 = state_26004__$1;(statearr_26045_26081[(2)] = inst_25974);
(statearr_26045_26081[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26005 === (8)))
{var inst_25947 = (state_26004[(12)]);var inst_25948 = (state_26004[(15)]);var inst_25950 = (inst_25948 < inst_25947);var inst_25951 = inst_25950;var state_26004__$1 = state_26004;if(cljs.core.truth_(inst_25951))
{var statearr_26046_26082 = state_26004__$1;(statearr_26046_26082[(1)] = (10));
} else
{var statearr_26047_26083 = state_26004__$1;(statearr_26047_26083[(1)] = (11));
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
});})(c__12292__auto___26055,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26055,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26051[(0)] = state_machine__12278__auto__);
(statearr_26051[(1)] = (1));
return statearr_26051;
});
var state_machine__12278__auto____1 = (function (state_26004){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26004);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26052){if((e26052 instanceof Object))
{var ex__12281__auto__ = e26052;var statearr_26053_26084 = state_26004;(statearr_26053_26084[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26004);
return cljs.core.constant$keyword$82;
} else
{throw e26052;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26085 = state_26004;
state_26004 = G__26085;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26055,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26054 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26055);
return statearr_26054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26055,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26166 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26166) : cljs.core.atom.call(null,G__26166));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26205){var state_val_26206 = (state_26205[(1)]);if((state_val_26206 === (7)))
{var state_26205__$1 = state_26205;var statearr_26207_26240 = state_26205__$1;(statearr_26207_26240[(2)] = null);
(statearr_26207_26240[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (1)))
{var state_26205__$1 = state_26205;var statearr_26208_26241 = state_26205__$1;(statearr_26208_26241[(2)] = null);
(statearr_26208_26241[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (4)))
{var inst_26169 = (state_26205[(7)]);var inst_26171 = (inst_26169 < cnt);var state_26205__$1 = state_26205;if(cljs.core.truth_(inst_26171))
{var statearr_26209_26242 = state_26205__$1;(statearr_26209_26242[(1)] = (6));
} else
{var statearr_26210_26243 = state_26205__$1;(statearr_26210_26243[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (15)))
{var inst_26201 = (state_26205[(2)]);var state_26205__$1 = state_26205;var statearr_26211_26244 = state_26205__$1;(statearr_26211_26244[(2)] = inst_26201);
(statearr_26211_26244[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (13)))
{var inst_26194 = cljs.core.async.close_BANG_(out);var state_26205__$1 = state_26205;var statearr_26212_26245 = state_26205__$1;(statearr_26212_26245[(2)] = inst_26194);
(statearr_26212_26245[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (6)))
{var state_26205__$1 = state_26205;var statearr_26213_26246 = state_26205__$1;(statearr_26213_26246[(2)] = null);
(statearr_26213_26246[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (3)))
{var inst_26203 = (state_26205[(2)]);var state_26205__$1 = state_26205;return cljs.core.async.impl.ioc_helpers.return_chan(state_26205__$1,inst_26203);
} else
{if((state_val_26206 === (12)))
{var inst_26191 = (state_26205[(8)]);var inst_26191__$1 = (state_26205[(2)]);var inst_26192 = cljs.core.some(cljs.core.nil_QMARK_,inst_26191__$1);var state_26205__$1 = (function (){var statearr_26214 = state_26205;(statearr_26214[(8)] = inst_26191__$1);
return statearr_26214;
})();if(cljs.core.truth_(inst_26192))
{var statearr_26215_26247 = state_26205__$1;(statearr_26215_26247[(1)] = (13));
} else
{var statearr_26216_26248 = state_26205__$1;(statearr_26216_26248[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (2)))
{var inst_26168 = (function (){var G__26217 = dctr;var G__26218 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26217,G__26218) : cljs.core.reset_BANG_.call(null,G__26217,G__26218));
})();var inst_26169 = (0);var state_26205__$1 = (function (){var statearr_26219 = state_26205;(statearr_26219[(9)] = inst_26168);
(statearr_26219[(7)] = inst_26169);
return statearr_26219;
})();var statearr_26220_26249 = state_26205__$1;(statearr_26220_26249[(2)] = null);
(statearr_26220_26249[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (11)))
{var inst_26169 = (state_26205[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26205,(10),Object,null,(9));var inst_26178 = (function (){var G__26221 = inst_26169;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26221) : chs__$1.call(null,G__26221));
})();var inst_26179 = (function (){var G__26222 = inst_26169;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26222) : done.call(null,G__26222));
})();var inst_26180 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26178,inst_26179);var state_26205__$1 = state_26205;var statearr_26223_26250 = state_26205__$1;(statearr_26223_26250[(2)] = inst_26180);
cljs.core.async.impl.ioc_helpers.process_exception(state_26205__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (9)))
{var inst_26169 = (state_26205[(7)]);var inst_26182 = (state_26205[(2)]);var inst_26183 = (inst_26169 + (1));var inst_26169__$1 = inst_26183;var state_26205__$1 = (function (){var statearr_26224 = state_26205;(statearr_26224[(7)] = inst_26169__$1);
(statearr_26224[(10)] = inst_26182);
return statearr_26224;
})();var statearr_26225_26251 = state_26205__$1;(statearr_26225_26251[(2)] = null);
(statearr_26225_26251[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (5)))
{var inst_26189 = (state_26205[(2)]);var state_26205__$1 = (function (){var statearr_26226 = state_26205;(statearr_26226[(11)] = inst_26189);
return statearr_26226;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26205__$1,(12),dchan);
} else
{if((state_val_26206 === (14)))
{var inst_26191 = (state_26205[(8)]);var inst_26196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26191);var state_26205__$1 = state_26205;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26205__$1,(16),out,inst_26196);
} else
{if((state_val_26206 === (16)))
{var inst_26198 = (state_26205[(2)]);var state_26205__$1 = (function (){var statearr_26227 = state_26205;(statearr_26227[(12)] = inst_26198);
return statearr_26227;
})();var statearr_26228_26252 = state_26205__$1;(statearr_26228_26252[(2)] = null);
(statearr_26228_26252[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (10)))
{var inst_26173 = (state_26205[(2)]);var inst_26174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26205__$1 = (function (){var statearr_26229 = state_26205;(statearr_26229[(13)] = inst_26173);
return statearr_26229;
})();var statearr_26230_26253 = state_26205__$1;(statearr_26230_26253[(2)] = inst_26174);
cljs.core.async.impl.ioc_helpers.process_exception(state_26205__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26206 === (8)))
{var inst_26187 = (state_26205[(2)]);var state_26205__$1 = state_26205;var statearr_26231_26254 = state_26205__$1;(statearr_26231_26254[(2)] = inst_26187);
(statearr_26231_26254[(1)] = (5));
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
});})(c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26235[(0)] = state_machine__12278__auto__);
(statearr_26235[(1)] = (1));
return statearr_26235;
});
var state_machine__12278__auto____1 = (function (state_26205){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26205);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26236){if((e26236 instanceof Object))
{var ex__12281__auto__ = e26236;var statearr_26237_26255 = state_26205;(statearr_26237_26255[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26205);
return cljs.core.constant$keyword$82;
} else
{throw e26236;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26256 = state_26205;
state_26205 = G__26256;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26238 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26239);
return statearr_26238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26239,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26366,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26366,out){
return (function (state_26342){var state_val_26343 = (state_26342[(1)]);if((state_val_26343 === (7)))
{var inst_26322 = (state_26342[(7)]);var inst_26321 = (state_26342[(8)]);var inst_26321__$1 = (state_26342[(2)]);var inst_26322__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26321__$1,(0),null);var inst_26323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26321__$1,(1),null);var inst_26324 = (inst_26322__$1 == null);var state_26342__$1 = (function (){var statearr_26344 = state_26342;(statearr_26344[(9)] = inst_26323);
(statearr_26344[(7)] = inst_26322__$1);
(statearr_26344[(8)] = inst_26321__$1);
return statearr_26344;
})();if(cljs.core.truth_(inst_26324))
{var statearr_26345_26367 = state_26342__$1;(statearr_26345_26367[(1)] = (8));
} else
{var statearr_26346_26368 = state_26342__$1;(statearr_26346_26368[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (1)))
{var inst_26313 = cljs.core.vec(chs);var inst_26314 = inst_26313;var state_26342__$1 = (function (){var statearr_26347 = state_26342;(statearr_26347[(10)] = inst_26314);
return statearr_26347;
})();var statearr_26348_26369 = state_26342__$1;(statearr_26348_26369[(2)] = null);
(statearr_26348_26369[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (4)))
{var inst_26314 = (state_26342[(10)]);var state_26342__$1 = state_26342;return cljs.core.async.ioc_alts_BANG_(state_26342__$1,(7),inst_26314);
} else
{if((state_val_26343 === (6)))
{var inst_26338 = (state_26342[(2)]);var state_26342__$1 = state_26342;var statearr_26349_26370 = state_26342__$1;(statearr_26349_26370[(2)] = inst_26338);
(statearr_26349_26370[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (3)))
{var inst_26340 = (state_26342[(2)]);var state_26342__$1 = state_26342;return cljs.core.async.impl.ioc_helpers.return_chan(state_26342__$1,inst_26340);
} else
{if((state_val_26343 === (2)))
{var inst_26314 = (state_26342[(10)]);var inst_26316 = cljs.core.count(inst_26314);var inst_26317 = (inst_26316 > (0));var state_26342__$1 = state_26342;if(cljs.core.truth_(inst_26317))
{var statearr_26351_26371 = state_26342__$1;(statearr_26351_26371[(1)] = (4));
} else
{var statearr_26352_26372 = state_26342__$1;(statearr_26352_26372[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (11)))
{var inst_26314 = (state_26342[(10)]);var inst_26331 = (state_26342[(2)]);var tmp26350 = inst_26314;var inst_26314__$1 = tmp26350;var state_26342__$1 = (function (){var statearr_26353 = state_26342;(statearr_26353[(10)] = inst_26314__$1);
(statearr_26353[(11)] = inst_26331);
return statearr_26353;
})();var statearr_26354_26373 = state_26342__$1;(statearr_26354_26373[(2)] = null);
(statearr_26354_26373[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (9)))
{var inst_26322 = (state_26342[(7)]);var state_26342__$1 = state_26342;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26342__$1,(11),out,inst_26322);
} else
{if((state_val_26343 === (5)))
{var inst_26336 = cljs.core.async.close_BANG_(out);var state_26342__$1 = state_26342;var statearr_26355_26374 = state_26342__$1;(statearr_26355_26374[(2)] = inst_26336);
(statearr_26355_26374[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (10)))
{var inst_26334 = (state_26342[(2)]);var state_26342__$1 = state_26342;var statearr_26356_26375 = state_26342__$1;(statearr_26356_26375[(2)] = inst_26334);
(statearr_26356_26375[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26343 === (8)))
{var inst_26314 = (state_26342[(10)]);var inst_26323 = (state_26342[(9)]);var inst_26322 = (state_26342[(7)]);var inst_26321 = (state_26342[(8)]);var inst_26326 = (function (){var c = inst_26323;var v = inst_26322;var vec__26319 = inst_26321;var cs = inst_26314;return ((function (c,v,vec__26319,cs,inst_26314,inst_26323,inst_26322,inst_26321,state_val_26343,c__12292__auto___26366,out){
return (function (p1__26257_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26257_SHARP_);
});
;})(c,v,vec__26319,cs,inst_26314,inst_26323,inst_26322,inst_26321,state_val_26343,c__12292__auto___26366,out))
})();var inst_26327 = cljs.core.filterv(inst_26326,inst_26314);var inst_26314__$1 = inst_26327;var state_26342__$1 = (function (){var statearr_26357 = state_26342;(statearr_26357[(10)] = inst_26314__$1);
return statearr_26357;
})();var statearr_26358_26376 = state_26342__$1;(statearr_26358_26376[(2)] = null);
(statearr_26358_26376[(1)] = (2));
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
});})(c__12292__auto___26366,out))
;return ((function (switch__12277__auto__,c__12292__auto___26366,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26362 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26362[(0)] = state_machine__12278__auto__);
(statearr_26362[(1)] = (1));
return statearr_26362;
});
var state_machine__12278__auto____1 = (function (state_26342){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26342);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26363){if((e26363 instanceof Object))
{var ex__12281__auto__ = e26363;var statearr_26364_26377 = state_26342;(statearr_26364_26377[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26342);
return cljs.core.constant$keyword$82;
} else
{throw e26363;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26378 = state_26342;
state_26342 = G__26378;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26342){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26366,out))
})();var state__12294__auto__ = (function (){var statearr_26365 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26366);
return statearr_26365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26366,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26474,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26474,out){
return (function (state_26451){var state_val_26452 = (state_26451[(1)]);if((state_val_26452 === (7)))
{var inst_26433 = (state_26451[(7)]);var inst_26433__$1 = (state_26451[(2)]);var inst_26434 = (inst_26433__$1 == null);var inst_26435 = cljs.core.not(inst_26434);var state_26451__$1 = (function (){var statearr_26453 = state_26451;(statearr_26453[(7)] = inst_26433__$1);
return statearr_26453;
})();if(inst_26435)
{var statearr_26454_26475 = state_26451__$1;(statearr_26454_26475[(1)] = (8));
} else
{var statearr_26455_26476 = state_26451__$1;(statearr_26455_26476[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (1)))
{var inst_26428 = (0);var state_26451__$1 = (function (){var statearr_26456 = state_26451;(statearr_26456[(8)] = inst_26428);
return statearr_26456;
})();var statearr_26457_26477 = state_26451__$1;(statearr_26457_26477[(2)] = null);
(statearr_26457_26477[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (4)))
{var state_26451__$1 = state_26451;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26451__$1,(7),ch);
} else
{if((state_val_26452 === (6)))
{var inst_26446 = (state_26451[(2)]);var state_26451__$1 = state_26451;var statearr_26458_26478 = state_26451__$1;(statearr_26458_26478[(2)] = inst_26446);
(statearr_26458_26478[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (3)))
{var inst_26448 = (state_26451[(2)]);var inst_26449 = cljs.core.async.close_BANG_(out);var state_26451__$1 = (function (){var statearr_26459 = state_26451;(statearr_26459[(9)] = inst_26448);
return statearr_26459;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26451__$1,inst_26449);
} else
{if((state_val_26452 === (2)))
{var inst_26428 = (state_26451[(8)]);var inst_26430 = (inst_26428 < n);var state_26451__$1 = state_26451;if(cljs.core.truth_(inst_26430))
{var statearr_26460_26479 = state_26451__$1;(statearr_26460_26479[(1)] = (4));
} else
{var statearr_26461_26480 = state_26451__$1;(statearr_26461_26480[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (11)))
{var inst_26428 = (state_26451[(8)]);var inst_26438 = (state_26451[(2)]);var inst_26439 = (inst_26428 + (1));var inst_26428__$1 = inst_26439;var state_26451__$1 = (function (){var statearr_26462 = state_26451;(statearr_26462[(10)] = inst_26438);
(statearr_26462[(8)] = inst_26428__$1);
return statearr_26462;
})();var statearr_26463_26481 = state_26451__$1;(statearr_26463_26481[(2)] = null);
(statearr_26463_26481[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (9)))
{var state_26451__$1 = state_26451;var statearr_26464_26482 = state_26451__$1;(statearr_26464_26482[(2)] = null);
(statearr_26464_26482[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (5)))
{var state_26451__$1 = state_26451;var statearr_26465_26483 = state_26451__$1;(statearr_26465_26483[(2)] = null);
(statearr_26465_26483[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (10)))
{var inst_26443 = (state_26451[(2)]);var state_26451__$1 = state_26451;var statearr_26466_26484 = state_26451__$1;(statearr_26466_26484[(2)] = inst_26443);
(statearr_26466_26484[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (8)))
{var inst_26433 = (state_26451[(7)]);var state_26451__$1 = state_26451;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26451__$1,(11),out,inst_26433);
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
});})(c__12292__auto___26474,out))
;return ((function (switch__12277__auto__,c__12292__auto___26474,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26470 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26470[(0)] = state_machine__12278__auto__);
(statearr_26470[(1)] = (1));
return statearr_26470;
});
var state_machine__12278__auto____1 = (function (state_26451){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26451);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26471){if((e26471 instanceof Object))
{var ex__12281__auto__ = e26471;var statearr_26472_26485 = state_26451;(statearr_26472_26485[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26451);
return cljs.core.constant$keyword$82;
} else
{throw e26471;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26486 = state_26451;
state_26451 = G__26486;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26451){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26474,out))
})();var state__12294__auto__ = (function (){var statearr_26473 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26474);
return statearr_26473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26474,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26499 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26499 = (function (ch,f,map_LT_,meta26500){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26500 = meta26500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26499.cljs$lang$type = true;
cljs.core.async.t26499.cljs$lang$ctorStr = "cljs.core.async/t26499";
cljs.core.async.t26499.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26499");
});
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26502 = (function (fn1,_,meta26500,ch,f,map_LT_,meta26503){
this.fn1 = fn1;
this._ = _;
this.meta26500 = meta26500;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26503 = meta26503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26502.cljs$lang$type = true;
cljs.core.async.t26502.cljs$lang$ctorStr = "cljs.core.async/t26502";
cljs.core.async.t26502.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26502");
});})(___$1))
;
cljs.core.async.t26502.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26487_SHARP_){var G__26505 = (((p1__26487_SHARP_ == null))?null:(function (){var G__26506 = p1__26487_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26506) : self__.f.call(null,G__26506));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26505) : f1.call(null,G__26505));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26504){var self__ = this;
var _26504__$1 = this;return self__.meta26503;
});})(___$1))
;
cljs.core.async.t26502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26504,meta26503__$1){var self__ = this;
var _26504__$1 = this;return (new cljs.core.async.t26502(self__.fn1,self__._,self__.meta26500,self__.ch,self__.f,self__.map_LT_,meta26503__$1));
});})(___$1))
;
cljs.core.async.__GT_t26502 = ((function (___$1){
return (function __GT_t26502(fn1__$1,___$2,meta26500__$1,ch__$2,f__$2,map_LT___$2,meta26503){return (new cljs.core.async.t26502(fn1__$1,___$2,meta26500__$1,ch__$2,f__$2,map_LT___$2,meta26503));
});})(___$1))
;
}
return (new cljs.core.async.t26502(fn1,___$1,self__.meta26500,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26507 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26507) : cljs.core.deref.call(null,G__26507));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26508 = (function (){var G__26509 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26509) : cljs.core.deref.call(null,G__26509));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26508) : self__.f.call(null,G__26508));
})());
} else
{return ret;
}
});
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26501){var self__ = this;
var _26501__$1 = this;return self__.meta26500;
});
cljs.core.async.t26499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26501,meta26500__$1){var self__ = this;
var _26501__$1 = this;return (new cljs.core.async.t26499(self__.ch,self__.f,self__.map_LT_,meta26500__$1));
});
cljs.core.async.__GT_t26499 = (function __GT_t26499(ch__$1,f__$1,map_LT___$1,meta26500){return (new cljs.core.async.t26499(ch__$1,f__$1,map_LT___$1,meta26500));
});
}
return (new cljs.core.async.t26499(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26514 = (function (ch,f,map_GT_,meta26515){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26515 = meta26515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26514.cljs$lang$type = true;
cljs.core.async.t26514.cljs$lang$ctorStr = "cljs.core.async/t26514";
cljs.core.async.t26514.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26514");
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26517 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26517) : self__.f.call(null,G__26517));
})(),fn1);
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26516){var self__ = this;
var _26516__$1 = this;return self__.meta26515;
});
cljs.core.async.t26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26516,meta26515__$1){var self__ = this;
var _26516__$1 = this;return (new cljs.core.async.t26514(self__.ch,self__.f,self__.map_GT_,meta26515__$1));
});
cljs.core.async.__GT_t26514 = (function __GT_t26514(ch__$1,f__$1,map_GT___$1,meta26515){return (new cljs.core.async.t26514(ch__$1,f__$1,map_GT___$1,meta26515));
});
}
return (new cljs.core.async.t26514(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26522 = (function (ch,p,filter_GT_,meta26523){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26523 = meta26523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26522.cljs$lang$type = true;
cljs.core.async.t26522.cljs$lang$ctorStr = "cljs.core.async/t26522";
cljs.core.async.t26522.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26522");
});
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26525 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26525) : self__.p.call(null,G__26525));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26524){var self__ = this;
var _26524__$1 = this;return self__.meta26523;
});
cljs.core.async.t26522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26524,meta26523__$1){var self__ = this;
var _26524__$1 = this;return (new cljs.core.async.t26522(self__.ch,self__.p,self__.filter_GT_,meta26523__$1));
});
cljs.core.async.__GT_t26522 = (function __GT_t26522(ch__$1,p__$1,filter_GT___$1,meta26523){return (new cljs.core.async.t26522(ch__$1,p__$1,filter_GT___$1,meta26523));
});
}
return (new cljs.core.async.t26522(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26613,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26613,out){
return (function (state_26591){var state_val_26592 = (state_26591[(1)]);if((state_val_26592 === (7)))
{var inst_26587 = (state_26591[(2)]);var state_26591__$1 = state_26591;var statearr_26593_26614 = state_26591__$1;(statearr_26593_26614[(2)] = inst_26587);
(statearr_26593_26614[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (1)))
{var state_26591__$1 = state_26591;var statearr_26594_26615 = state_26591__$1;(statearr_26594_26615[(2)] = null);
(statearr_26594_26615[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (4)))
{var inst_26573 = (state_26591[(7)]);var inst_26573__$1 = (state_26591[(2)]);var inst_26574 = (inst_26573__$1 == null);var state_26591__$1 = (function (){var statearr_26595 = state_26591;(statearr_26595[(7)] = inst_26573__$1);
return statearr_26595;
})();if(cljs.core.truth_(inst_26574))
{var statearr_26596_26616 = state_26591__$1;(statearr_26596_26616[(1)] = (5));
} else
{var statearr_26597_26617 = state_26591__$1;(statearr_26597_26617[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (6)))
{var inst_26573 = (state_26591[(7)]);var inst_26578 = (function (){var G__26598 = inst_26573;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26598) : p.call(null,G__26598));
})();var state_26591__$1 = state_26591;if(cljs.core.truth_(inst_26578))
{var statearr_26599_26618 = state_26591__$1;(statearr_26599_26618[(1)] = (8));
} else
{var statearr_26600_26619 = state_26591__$1;(statearr_26600_26619[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (3)))
{var inst_26589 = (state_26591[(2)]);var state_26591__$1 = state_26591;return cljs.core.async.impl.ioc_helpers.return_chan(state_26591__$1,inst_26589);
} else
{if((state_val_26592 === (2)))
{var state_26591__$1 = state_26591;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26591__$1,(4),ch);
} else
{if((state_val_26592 === (11)))
{var inst_26581 = (state_26591[(2)]);var state_26591__$1 = state_26591;var statearr_26601_26620 = state_26591__$1;(statearr_26601_26620[(2)] = inst_26581);
(statearr_26601_26620[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (9)))
{var state_26591__$1 = state_26591;var statearr_26602_26621 = state_26591__$1;(statearr_26602_26621[(2)] = null);
(statearr_26602_26621[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (5)))
{var inst_26576 = cljs.core.async.close_BANG_(out);var state_26591__$1 = state_26591;var statearr_26603_26622 = state_26591__$1;(statearr_26603_26622[(2)] = inst_26576);
(statearr_26603_26622[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (10)))
{var inst_26584 = (state_26591[(2)]);var state_26591__$1 = (function (){var statearr_26604 = state_26591;(statearr_26604[(8)] = inst_26584);
return statearr_26604;
})();var statearr_26605_26623 = state_26591__$1;(statearr_26605_26623[(2)] = null);
(statearr_26605_26623[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26592 === (8)))
{var inst_26573 = (state_26591[(7)]);var state_26591__$1 = state_26591;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26591__$1,(11),out,inst_26573);
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
});})(c__12292__auto___26613,out))
;return ((function (switch__12277__auto__,c__12292__auto___26613,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26609 = [null,null,null,null,null,null,null,null,null];(statearr_26609[(0)] = state_machine__12278__auto__);
(statearr_26609[(1)] = (1));
return statearr_26609;
});
var state_machine__12278__auto____1 = (function (state_26591){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26591);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26610){if((e26610 instanceof Object))
{var ex__12281__auto__ = e26610;var statearr_26611_26624 = state_26591;(statearr_26611_26624[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26591);
return cljs.core.constant$keyword$82;
} else
{throw e26610;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26625 = state_26591;
state_26591 = G__26625;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26591){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26613,out))
})();var state__12294__auto__ = (function (){var statearr_26612 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26613);
return statearr_26612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26613,out))
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
return (function (state_26795){var state_val_26796 = (state_26795[(1)]);if((state_val_26796 === (7)))
{var inst_26791 = (state_26795[(2)]);var state_26795__$1 = state_26795;var statearr_26797_26839 = state_26795__$1;(statearr_26797_26839[(2)] = inst_26791);
(statearr_26797_26839[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (20)))
{var inst_26761 = (state_26795[(7)]);var inst_26772 = (state_26795[(2)]);var inst_26773 = cljs.core.next(inst_26761);var inst_26747 = inst_26773;var inst_26748 = null;var inst_26749 = (0);var inst_26750 = (0);var state_26795__$1 = (function (){var statearr_26798 = state_26795;(statearr_26798[(8)] = inst_26750);
(statearr_26798[(9)] = inst_26772);
(statearr_26798[(10)] = inst_26748);
(statearr_26798[(11)] = inst_26747);
(statearr_26798[(12)] = inst_26749);
return statearr_26798;
})();var statearr_26799_26840 = state_26795__$1;(statearr_26799_26840[(2)] = null);
(statearr_26799_26840[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (1)))
{var state_26795__$1 = state_26795;var statearr_26800_26841 = state_26795__$1;(statearr_26800_26841[(2)] = null);
(statearr_26800_26841[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (4)))
{var inst_26736 = (state_26795[(13)]);var inst_26736__$1 = (state_26795[(2)]);var inst_26737 = (inst_26736__$1 == null);var state_26795__$1 = (function (){var statearr_26801 = state_26795;(statearr_26801[(13)] = inst_26736__$1);
return statearr_26801;
})();if(cljs.core.truth_(inst_26737))
{var statearr_26802_26842 = state_26795__$1;(statearr_26802_26842[(1)] = (5));
} else
{var statearr_26803_26843 = state_26795__$1;(statearr_26803_26843[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (15)))
{var state_26795__$1 = state_26795;var statearr_26807_26844 = state_26795__$1;(statearr_26807_26844[(2)] = null);
(statearr_26807_26844[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (21)))
{var state_26795__$1 = state_26795;var statearr_26808_26845 = state_26795__$1;(statearr_26808_26845[(2)] = null);
(statearr_26808_26845[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (13)))
{var inst_26750 = (state_26795[(8)]);var inst_26748 = (state_26795[(10)]);var inst_26747 = (state_26795[(11)]);var inst_26749 = (state_26795[(12)]);var inst_26757 = (state_26795[(2)]);var inst_26758 = (inst_26750 + (1));var tmp26804 = inst_26748;var tmp26805 = inst_26747;var tmp26806 = inst_26749;var inst_26747__$1 = tmp26805;var inst_26748__$1 = tmp26804;var inst_26749__$1 = tmp26806;var inst_26750__$1 = inst_26758;var state_26795__$1 = (function (){var statearr_26809 = state_26795;(statearr_26809[(8)] = inst_26750__$1);
(statearr_26809[(10)] = inst_26748__$1);
(statearr_26809[(11)] = inst_26747__$1);
(statearr_26809[(12)] = inst_26749__$1);
(statearr_26809[(14)] = inst_26757);
return statearr_26809;
})();var statearr_26810_26846 = state_26795__$1;(statearr_26810_26846[(2)] = null);
(statearr_26810_26846[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (22)))
{var state_26795__$1 = state_26795;var statearr_26811_26847 = state_26795__$1;(statearr_26811_26847[(2)] = null);
(statearr_26811_26847[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (6)))
{var inst_26736 = (state_26795[(13)]);var inst_26745 = (function (){var G__26812 = inst_26736;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26812) : f.call(null,G__26812));
})();var inst_26746 = cljs.core.seq(inst_26745);var inst_26747 = inst_26746;var inst_26748 = null;var inst_26749 = (0);var inst_26750 = (0);var state_26795__$1 = (function (){var statearr_26813 = state_26795;(statearr_26813[(8)] = inst_26750);
(statearr_26813[(10)] = inst_26748);
(statearr_26813[(11)] = inst_26747);
(statearr_26813[(12)] = inst_26749);
return statearr_26813;
})();var statearr_26814_26848 = state_26795__$1;(statearr_26814_26848[(2)] = null);
(statearr_26814_26848[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (17)))
{var inst_26761 = (state_26795[(7)]);var inst_26765 = cljs.core.chunk_first(inst_26761);var inst_26766 = cljs.core.chunk_rest(inst_26761);var inst_26767 = cljs.core.count(inst_26765);var inst_26747 = inst_26766;var inst_26748 = inst_26765;var inst_26749 = inst_26767;var inst_26750 = (0);var state_26795__$1 = (function (){var statearr_26815 = state_26795;(statearr_26815[(8)] = inst_26750);
(statearr_26815[(10)] = inst_26748);
(statearr_26815[(11)] = inst_26747);
(statearr_26815[(12)] = inst_26749);
return statearr_26815;
})();var statearr_26816_26849 = state_26795__$1;(statearr_26816_26849[(2)] = null);
(statearr_26816_26849[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (3)))
{var inst_26793 = (state_26795[(2)]);var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.return_chan(state_26795__$1,inst_26793);
} else
{if((state_val_26796 === (12)))
{var inst_26781 = (state_26795[(2)]);var state_26795__$1 = state_26795;var statearr_26817_26850 = state_26795__$1;(statearr_26817_26850[(2)] = inst_26781);
(statearr_26817_26850[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (2)))
{var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26795__$1,(4),in$);
} else
{if((state_val_26796 === (23)))
{var inst_26789 = (state_26795[(2)]);var state_26795__$1 = state_26795;var statearr_26818_26851 = state_26795__$1;(statearr_26818_26851[(2)] = inst_26789);
(statearr_26818_26851[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (19)))
{var inst_26776 = (state_26795[(2)]);var state_26795__$1 = state_26795;var statearr_26819_26852 = state_26795__$1;(statearr_26819_26852[(2)] = inst_26776);
(statearr_26819_26852[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (11)))
{var inst_26761 = (state_26795[(7)]);var inst_26747 = (state_26795[(11)]);var inst_26761__$1 = cljs.core.seq(inst_26747);var state_26795__$1 = (function (){var statearr_26820 = state_26795;(statearr_26820[(7)] = inst_26761__$1);
return statearr_26820;
})();if(inst_26761__$1)
{var statearr_26821_26853 = state_26795__$1;(statearr_26821_26853[(1)] = (14));
} else
{var statearr_26822_26854 = state_26795__$1;(statearr_26822_26854[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (9)))
{var inst_26783 = (state_26795[(2)]);var inst_26784 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26795__$1 = (function (){var statearr_26823 = state_26795;(statearr_26823[(15)] = inst_26783);
return statearr_26823;
})();if(cljs.core.truth_(inst_26784))
{var statearr_26824_26855 = state_26795__$1;(statearr_26824_26855[(1)] = (21));
} else
{var statearr_26825_26856 = state_26795__$1;(statearr_26825_26856[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (5)))
{var inst_26739 = cljs.core.async.close_BANG_(out);var state_26795__$1 = state_26795;var statearr_26826_26857 = state_26795__$1;(statearr_26826_26857[(2)] = inst_26739);
(statearr_26826_26857[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (14)))
{var inst_26761 = (state_26795[(7)]);var inst_26763 = cljs.core.chunked_seq_QMARK_(inst_26761);var state_26795__$1 = state_26795;if(inst_26763)
{var statearr_26827_26858 = state_26795__$1;(statearr_26827_26858[(1)] = (17));
} else
{var statearr_26828_26859 = state_26795__$1;(statearr_26828_26859[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (16)))
{var inst_26779 = (state_26795[(2)]);var state_26795__$1 = state_26795;var statearr_26829_26860 = state_26795__$1;(statearr_26829_26860[(2)] = inst_26779);
(statearr_26829_26860[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26796 === (10)))
{var inst_26750 = (state_26795[(8)]);var inst_26748 = (state_26795[(10)]);var inst_26755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26748,inst_26750);var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26795__$1,(13),out,inst_26755);
} else
{if((state_val_26796 === (18)))
{var inst_26761 = (state_26795[(7)]);var inst_26770 = cljs.core.first(inst_26761);var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26795__$1,(20),out,inst_26770);
} else
{if((state_val_26796 === (8)))
{var inst_26750 = (state_26795[(8)]);var inst_26749 = (state_26795[(12)]);var inst_26752 = (inst_26750 < inst_26749);var inst_26753 = inst_26752;var state_26795__$1 = state_26795;if(cljs.core.truth_(inst_26753))
{var statearr_26830_26861 = state_26795__$1;(statearr_26830_26861[(1)] = (10));
} else
{var statearr_26831_26862 = state_26795__$1;(statearr_26831_26862[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26835[(0)] = state_machine__12278__auto__);
(statearr_26835[(1)] = (1));
return statearr_26835;
});
var state_machine__12278__auto____1 = (function (state_26795){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26795);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object))
{var ex__12281__auto__ = e26836;var statearr_26837_26863 = state_26795;(statearr_26837_26863[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26795);
return cljs.core.constant$keyword$82;
} else
{throw e26836;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26864 = state_26795;
state_26795 = G__26864;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26795){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26838 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26838;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26969,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26969,out){
return (function (state_26944){var state_val_26945 = (state_26944[(1)]);if((state_val_26945 === (7)))
{var inst_26939 = (state_26944[(2)]);var state_26944__$1 = state_26944;var statearr_26946_26970 = state_26944__$1;(statearr_26946_26970[(2)] = inst_26939);
(statearr_26946_26970[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (1)))
{var inst_26921 = null;var state_26944__$1 = (function (){var statearr_26947 = state_26944;(statearr_26947[(7)] = inst_26921);
return statearr_26947;
})();var statearr_26948_26971 = state_26944__$1;(statearr_26948_26971[(2)] = null);
(statearr_26948_26971[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (4)))
{var inst_26924 = (state_26944[(8)]);var inst_26924__$1 = (state_26944[(2)]);var inst_26925 = (inst_26924__$1 == null);var inst_26926 = cljs.core.not(inst_26925);var state_26944__$1 = (function (){var statearr_26949 = state_26944;(statearr_26949[(8)] = inst_26924__$1);
return statearr_26949;
})();if(inst_26926)
{var statearr_26950_26972 = state_26944__$1;(statearr_26950_26972[(1)] = (5));
} else
{var statearr_26951_26973 = state_26944__$1;(statearr_26951_26973[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (6)))
{var state_26944__$1 = state_26944;var statearr_26952_26974 = state_26944__$1;(statearr_26952_26974[(2)] = null);
(statearr_26952_26974[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (3)))
{var inst_26941 = (state_26944[(2)]);var inst_26942 = cljs.core.async.close_BANG_(out);var state_26944__$1 = (function (){var statearr_26953 = state_26944;(statearr_26953[(9)] = inst_26941);
return statearr_26953;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26944__$1,inst_26942);
} else
{if((state_val_26945 === (2)))
{var state_26944__$1 = state_26944;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26944__$1,(4),ch);
} else
{if((state_val_26945 === (11)))
{var inst_26924 = (state_26944[(8)]);var inst_26933 = (state_26944[(2)]);var inst_26921 = inst_26924;var state_26944__$1 = (function (){var statearr_26954 = state_26944;(statearr_26954[(10)] = inst_26933);
(statearr_26954[(7)] = inst_26921);
return statearr_26954;
})();var statearr_26955_26975 = state_26944__$1;(statearr_26955_26975[(2)] = null);
(statearr_26955_26975[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (9)))
{var inst_26924 = (state_26944[(8)]);var state_26944__$1 = state_26944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26944__$1,(11),out,inst_26924);
} else
{if((state_val_26945 === (5)))
{var inst_26924 = (state_26944[(8)]);var inst_26921 = (state_26944[(7)]);var inst_26928 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26924,inst_26921);var state_26944__$1 = state_26944;if(inst_26928)
{var statearr_26957_26976 = state_26944__$1;(statearr_26957_26976[(1)] = (8));
} else
{var statearr_26958_26977 = state_26944__$1;(statearr_26958_26977[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (10)))
{var inst_26936 = (state_26944[(2)]);var state_26944__$1 = state_26944;var statearr_26959_26978 = state_26944__$1;(statearr_26959_26978[(2)] = inst_26936);
(statearr_26959_26978[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26945 === (8)))
{var inst_26921 = (state_26944[(7)]);var tmp26956 = inst_26921;var inst_26921__$1 = tmp26956;var state_26944__$1 = (function (){var statearr_26960 = state_26944;(statearr_26960[(7)] = inst_26921__$1);
return statearr_26960;
})();var statearr_26961_26979 = state_26944__$1;(statearr_26961_26979[(2)] = null);
(statearr_26961_26979[(1)] = (2));
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
});})(c__12292__auto___26969,out))
;return ((function (switch__12277__auto__,c__12292__auto___26969,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26965 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26965[(0)] = state_machine__12278__auto__);
(statearr_26965[(1)] = (1));
return statearr_26965;
});
var state_machine__12278__auto____1 = (function (state_26944){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26944);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26966){if((e26966 instanceof Object))
{var ex__12281__auto__ = e26966;var statearr_26967_26980 = state_26944;(statearr_26967_26980[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26944);
return cljs.core.constant$keyword$82;
} else
{throw e26966;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26981 = state_26944;
state_26944 = G__26981;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26944){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26969,out))
})();var state__12294__auto__ = (function (){var statearr_26968 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26969);
return statearr_26968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26969,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27119,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27119,out){
return (function (state_27089){var state_val_27090 = (state_27089[(1)]);if((state_val_27090 === (7)))
{var inst_27085 = (state_27089[(2)]);var state_27089__$1 = state_27089;var statearr_27091_27120 = state_27089__$1;(statearr_27091_27120[(2)] = inst_27085);
(statearr_27091_27120[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (1)))
{var inst_27052 = (new Array(n));var inst_27053 = inst_27052;var inst_27054 = (0);var state_27089__$1 = (function (){var statearr_27092 = state_27089;(statearr_27092[(7)] = inst_27053);
(statearr_27092[(8)] = inst_27054);
return statearr_27092;
})();var statearr_27093_27121 = state_27089__$1;(statearr_27093_27121[(2)] = null);
(statearr_27093_27121[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (4)))
{var inst_27057 = (state_27089[(9)]);var inst_27057__$1 = (state_27089[(2)]);var inst_27058 = (inst_27057__$1 == null);var inst_27059 = cljs.core.not(inst_27058);var state_27089__$1 = (function (){var statearr_27094 = state_27089;(statearr_27094[(9)] = inst_27057__$1);
return statearr_27094;
})();if(inst_27059)
{var statearr_27095_27122 = state_27089__$1;(statearr_27095_27122[(1)] = (5));
} else
{var statearr_27096_27123 = state_27089__$1;(statearr_27096_27123[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (15)))
{var inst_27079 = (state_27089[(2)]);var state_27089__$1 = state_27089;var statearr_27097_27124 = state_27089__$1;(statearr_27097_27124[(2)] = inst_27079);
(statearr_27097_27124[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (13)))
{var state_27089__$1 = state_27089;var statearr_27098_27125 = state_27089__$1;(statearr_27098_27125[(2)] = null);
(statearr_27098_27125[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (6)))
{var inst_27054 = (state_27089[(8)]);var inst_27075 = (inst_27054 > (0));var state_27089__$1 = state_27089;if(cljs.core.truth_(inst_27075))
{var statearr_27099_27126 = state_27089__$1;(statearr_27099_27126[(1)] = (12));
} else
{var statearr_27100_27127 = state_27089__$1;(statearr_27100_27127[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (3)))
{var inst_27087 = (state_27089[(2)]);var state_27089__$1 = state_27089;return cljs.core.async.impl.ioc_helpers.return_chan(state_27089__$1,inst_27087);
} else
{if((state_val_27090 === (12)))
{var inst_27053 = (state_27089[(7)]);var inst_27077 = cljs.core.vec(inst_27053);var state_27089__$1 = state_27089;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27089__$1,(15),out,inst_27077);
} else
{if((state_val_27090 === (2)))
{var state_27089__$1 = state_27089;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27089__$1,(4),ch);
} else
{if((state_val_27090 === (11)))
{var inst_27069 = (state_27089[(2)]);var inst_27070 = (new Array(n));var inst_27053 = inst_27070;var inst_27054 = (0);var state_27089__$1 = (function (){var statearr_27101 = state_27089;(statearr_27101[(7)] = inst_27053);
(statearr_27101[(10)] = inst_27069);
(statearr_27101[(8)] = inst_27054);
return statearr_27101;
})();var statearr_27102_27128 = state_27089__$1;(statearr_27102_27128[(2)] = null);
(statearr_27102_27128[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (9)))
{var inst_27053 = (state_27089[(7)]);var inst_27067 = cljs.core.vec(inst_27053);var state_27089__$1 = state_27089;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27089__$1,(11),out,inst_27067);
} else
{if((state_val_27090 === (5)))
{var inst_27062 = (state_27089[(11)]);var inst_27053 = (state_27089[(7)]);var inst_27057 = (state_27089[(9)]);var inst_27054 = (state_27089[(8)]);var inst_27061 = (inst_27053[inst_27054] = inst_27057);var inst_27062__$1 = (inst_27054 + (1));var inst_27063 = (inst_27062__$1 < n);var state_27089__$1 = (function (){var statearr_27103 = state_27089;(statearr_27103[(11)] = inst_27062__$1);
(statearr_27103[(12)] = inst_27061);
return statearr_27103;
})();if(cljs.core.truth_(inst_27063))
{var statearr_27104_27129 = state_27089__$1;(statearr_27104_27129[(1)] = (8));
} else
{var statearr_27105_27130 = state_27089__$1;(statearr_27105_27130[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (14)))
{var inst_27082 = (state_27089[(2)]);var inst_27083 = cljs.core.async.close_BANG_(out);var state_27089__$1 = (function (){var statearr_27107 = state_27089;(statearr_27107[(13)] = inst_27082);
return statearr_27107;
})();var statearr_27108_27131 = state_27089__$1;(statearr_27108_27131[(2)] = inst_27083);
(statearr_27108_27131[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (10)))
{var inst_27073 = (state_27089[(2)]);var state_27089__$1 = state_27089;var statearr_27109_27132 = state_27089__$1;(statearr_27109_27132[(2)] = inst_27073);
(statearr_27109_27132[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27090 === (8)))
{var inst_27062 = (state_27089[(11)]);var inst_27053 = (state_27089[(7)]);var tmp27106 = inst_27053;var inst_27053__$1 = tmp27106;var inst_27054 = inst_27062;var state_27089__$1 = (function (){var statearr_27110 = state_27089;(statearr_27110[(7)] = inst_27053__$1);
(statearr_27110[(8)] = inst_27054);
return statearr_27110;
})();var statearr_27111_27133 = state_27089__$1;(statearr_27111_27133[(2)] = null);
(statearr_27111_27133[(1)] = (2));
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
});})(c__12292__auto___27119,out))
;return ((function (switch__12277__auto__,c__12292__auto___27119,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27115[(0)] = state_machine__12278__auto__);
(statearr_27115[(1)] = (1));
return statearr_27115;
});
var state_machine__12278__auto____1 = (function (state_27089){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27089);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27116){if((e27116 instanceof Object))
{var ex__12281__auto__ = e27116;var statearr_27117_27134 = state_27089;(statearr_27117_27134[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27089);
return cljs.core.constant$keyword$82;
} else
{throw e27116;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27135 = state_27089;
state_27089 = G__27135;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27119,out))
})();var state__12294__auto__ = (function (){var statearr_27118 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27119);
return statearr_27118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27119,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27283,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27283,out){
return (function (state_27252){var state_val_27253 = (state_27252[(1)]);if((state_val_27253 === (7)))
{var inst_27248 = (state_27252[(2)]);var state_27252__$1 = state_27252;var statearr_27254_27284 = state_27252__$1;(statearr_27254_27284[(2)] = inst_27248);
(statearr_27254_27284[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (1)))
{var inst_27211 = [];var inst_27212 = inst_27211;var inst_27213 = cljs.core.constant$keyword$97;var state_27252__$1 = (function (){var statearr_27255 = state_27252;(statearr_27255[(7)] = inst_27213);
(statearr_27255[(8)] = inst_27212);
return statearr_27255;
})();var statearr_27256_27285 = state_27252__$1;(statearr_27256_27285[(2)] = null);
(statearr_27256_27285[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (4)))
{var inst_27216 = (state_27252[(9)]);var inst_27216__$1 = (state_27252[(2)]);var inst_27217 = (inst_27216__$1 == null);var inst_27218 = cljs.core.not(inst_27217);var state_27252__$1 = (function (){var statearr_27257 = state_27252;(statearr_27257[(9)] = inst_27216__$1);
return statearr_27257;
})();if(inst_27218)
{var statearr_27258_27286 = state_27252__$1;(statearr_27258_27286[(1)] = (5));
} else
{var statearr_27259_27287 = state_27252__$1;(statearr_27259_27287[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (15)))
{var inst_27242 = (state_27252[(2)]);var state_27252__$1 = state_27252;var statearr_27260_27288 = state_27252__$1;(statearr_27260_27288[(2)] = inst_27242);
(statearr_27260_27288[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (13)))
{var state_27252__$1 = state_27252;var statearr_27261_27289 = state_27252__$1;(statearr_27261_27289[(2)] = null);
(statearr_27261_27289[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (6)))
{var inst_27212 = (state_27252[(8)]);var inst_27237 = inst_27212.length;var inst_27238 = (inst_27237 > (0));var state_27252__$1 = state_27252;if(cljs.core.truth_(inst_27238))
{var statearr_27262_27290 = state_27252__$1;(statearr_27262_27290[(1)] = (12));
} else
{var statearr_27263_27291 = state_27252__$1;(statearr_27263_27291[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (3)))
{var inst_27250 = (state_27252[(2)]);var state_27252__$1 = state_27252;return cljs.core.async.impl.ioc_helpers.return_chan(state_27252__$1,inst_27250);
} else
{if((state_val_27253 === (12)))
{var inst_27212 = (state_27252[(8)]);var inst_27240 = cljs.core.vec(inst_27212);var state_27252__$1 = state_27252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27252__$1,(15),out,inst_27240);
} else
{if((state_val_27253 === (2)))
{var state_27252__$1 = state_27252;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27252__$1,(4),ch);
} else
{if((state_val_27253 === (11)))
{var inst_27220 = (state_27252[(10)]);var inst_27216 = (state_27252[(9)]);var inst_27230 = (state_27252[(2)]);var inst_27231 = [];var inst_27232 = inst_27231.push(inst_27216);var inst_27212 = inst_27231;var inst_27213 = inst_27220;var state_27252__$1 = (function (){var statearr_27264 = state_27252;(statearr_27264[(7)] = inst_27213);
(statearr_27264[(8)] = inst_27212);
(statearr_27264[(11)] = inst_27232);
(statearr_27264[(12)] = inst_27230);
return statearr_27264;
})();var statearr_27265_27292 = state_27252__$1;(statearr_27265_27292[(2)] = null);
(statearr_27265_27292[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (9)))
{var inst_27212 = (state_27252[(8)]);var inst_27228 = cljs.core.vec(inst_27212);var state_27252__$1 = state_27252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27252__$1,(11),out,inst_27228);
} else
{if((state_val_27253 === (5)))
{var inst_27213 = (state_27252[(7)]);var inst_27220 = (state_27252[(10)]);var inst_27216 = (state_27252[(9)]);var inst_27220__$1 = (function (){var G__27266 = inst_27216;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27266) : f.call(null,G__27266));
})();var inst_27221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27220__$1,inst_27213);var inst_27222 = cljs.core.keyword_identical_QMARK_(inst_27213,cljs.core.constant$keyword$97);var inst_27223 = (inst_27221) || (inst_27222);var state_27252__$1 = (function (){var statearr_27267 = state_27252;(statearr_27267[(10)] = inst_27220__$1);
return statearr_27267;
})();if(cljs.core.truth_(inst_27223))
{var statearr_27268_27293 = state_27252__$1;(statearr_27268_27293[(1)] = (8));
} else
{var statearr_27269_27294 = state_27252__$1;(statearr_27269_27294[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (14)))
{var inst_27245 = (state_27252[(2)]);var inst_27246 = cljs.core.async.close_BANG_(out);var state_27252__$1 = (function (){var statearr_27271 = state_27252;(statearr_27271[(13)] = inst_27245);
return statearr_27271;
})();var statearr_27272_27295 = state_27252__$1;(statearr_27272_27295[(2)] = inst_27246);
(statearr_27272_27295[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (10)))
{var inst_27235 = (state_27252[(2)]);var state_27252__$1 = state_27252;var statearr_27273_27296 = state_27252__$1;(statearr_27273_27296[(2)] = inst_27235);
(statearr_27273_27296[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27253 === (8)))
{var inst_27220 = (state_27252[(10)]);var inst_27212 = (state_27252[(8)]);var inst_27216 = (state_27252[(9)]);var inst_27225 = inst_27212.push(inst_27216);var tmp27270 = inst_27212;var inst_27212__$1 = tmp27270;var inst_27213 = inst_27220;var state_27252__$1 = (function (){var statearr_27274 = state_27252;(statearr_27274[(7)] = inst_27213);
(statearr_27274[(8)] = inst_27212__$1);
(statearr_27274[(14)] = inst_27225);
return statearr_27274;
})();var statearr_27275_27297 = state_27252__$1;(statearr_27275_27297[(2)] = null);
(statearr_27275_27297[(1)] = (2));
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
});})(c__12292__auto___27283,out))
;return ((function (switch__12277__auto__,c__12292__auto___27283,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27279[(0)] = state_machine__12278__auto__);
(statearr_27279[(1)] = (1));
return statearr_27279;
});
var state_machine__12278__auto____1 = (function (state_27252){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27252);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27280){if((e27280 instanceof Object))
{var ex__12281__auto__ = e27280;var statearr_27281_27298 = state_27252;(statearr_27281_27298[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27252);
return cljs.core.constant$keyword$82;
} else
{throw e27280;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27299 = state_27252;
state_27252 = G__27299;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27252){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27283,out))
})();var state__12294__auto__ = (function (){var statearr_27282 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27283);
return statearr_27282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27283,out))
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
