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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23927 = (function (f,fn_handler,meta23928){
this.f = f;
this.fn_handler = fn_handler;
this.meta23928 = meta23928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23927.cljs$lang$type = true;
cljs.core.async.t23927.cljs$lang$ctorStr = "cljs.core.async/t23927";
cljs.core.async.t23927.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23927");
});
cljs.core.async.t23927.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23929){var self__ = this;
var _23929__$1 = this;return self__.meta23928;
});
cljs.core.async.t23927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23929,meta23928__$1){var self__ = this;
var _23929__$1 = this;return (new cljs.core.async.t23927(self__.f,self__.fn_handler,meta23928__$1));
});
cljs.core.async.__GT_t23927 = (function __GT_t23927(f__$1,fn_handler__$1,meta23928){return (new cljs.core.async.t23927(f__$1,fn_handler__$1,meta23928));
});
}
return (new cljs.core.async.t23927(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23931 = buff;if(G__23931)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23931.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23931.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23931);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23931);
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
{var val_23948 = (function (){var G__23945 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23945) : cljs.core.deref.call(null,G__23945));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23946_23949 = val_23948;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23946_23949) : fn1.call(null,G__23946_23949));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23948,ret){
return (function (){var G__23947 = val_23948;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23947) : fn1.call(null,G__23947));
});})(val_23948,ret))
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
{var ret = temp__4124__auto__;var G__23958 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23958) : cljs.core.deref.call(null,G__23958));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__23959 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23959) : cljs.core.deref.call(null,G__23959));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23960_23962 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23960_23962) : fn1.call(null,G__23960_23962));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__23961 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23961) : fn1.call(null,G__23961));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___23963 = n;var x_23964 = (0);while(true){
if((x_23964 < n__4510__auto___23963))
{(a[x_23964] = (0));
{
var G__23965 = (x_23964 + (1));
x_23964 = G__23965;
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
var G__23966 = (i + (1));
i = G__23966;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__23974 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23974) : cljs.core.atom.call(null,G__23974));
})();if(typeof cljs.core.async.t23975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23975 = (function (flag,alt_flag,meta23976){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23976 = meta23976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23975.cljs$lang$type = true;
cljs.core.async.t23975.cljs$lang$ctorStr = "cljs.core.async/t23975";
cljs.core.async.t23975.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23975");
});})(flag))
;
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23978 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23978) : cljs.core.deref.call(null,G__23978));
});})(flag))
;
cljs.core.async.t23975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23979_23981 = self__.flag;var G__23980_23982 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23979_23981,G__23980_23982) : cljs.core.reset_BANG_.call(null,G__23979_23981,G__23980_23982));
return true;
});})(flag))
;
cljs.core.async.t23975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23977){var self__ = this;
var _23977__$1 = this;return self__.meta23976;
});})(flag))
;
cljs.core.async.t23975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23977,meta23976__$1){var self__ = this;
var _23977__$1 = this;return (new cljs.core.async.t23975(self__.flag,self__.alt_flag,meta23976__$1));
});})(flag))
;
cljs.core.async.__GT_t23975 = ((function (flag){
return (function __GT_t23975(flag__$1,alt_flag__$1,meta23976){return (new cljs.core.async.t23975(flag__$1,alt_flag__$1,meta23976));
});})(flag))
;
}
return (new cljs.core.async.t23975(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23986 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23986 = (function (cb,flag,alt_handler,meta23987){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23987 = meta23987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23986.cljs$lang$type = true;
cljs.core.async.t23986.cljs$lang$ctorStr = "cljs.core.async/t23986";
cljs.core.async.t23986.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23986");
});
cljs.core.async.t23986.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23988){var self__ = this;
var _23988__$1 = this;return self__.meta23987;
});
cljs.core.async.t23986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23988,meta23987__$1){var self__ = this;
var _23988__$1 = this;return (new cljs.core.async.t23986(self__.cb,self__.flag,self__.alt_handler,meta23987__$1));
});
cljs.core.async.__GT_t23986 = (function __GT_t23986(cb__$1,flag__$1,alt_handler__$1,meta23987){return (new cljs.core.async.t23986(cb__$1,flag__$1,alt_handler__$1,meta23987));
});
}
return (new cljs.core.async.t23986(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23996 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23996) : port.call(null,G__23996));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23997 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23997) : port.call(null,G__23997));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23989_SHARP_){var G__23998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23989_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23998) : fret.call(null,G__23998));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23990_SHARP_){var G__23999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23990_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23999) : fret.call(null,G__23999));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24000 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24000) : cljs.core.deref.call(null,G__24000));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24001 = (i + (1));
i = G__24001;
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
var alts_BANG___delegate = function (ports,p__24002){var map__24004 = p__24002;var map__24004__$1 = ((cljs.core.seq_QMARK_(map__24004))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24004):map__24004);var opts = map__24004__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24002 = null;if (arguments.length > 1) {
  p__24002 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24002);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24005){
var ports = cljs.core.first(arglist__24005);
var p__24002 = cljs.core.rest(arglist__24005);
return alts_BANG___delegate(ports,p__24002);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24103){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24103){
return (function (state_24079){var state_val_24080 = (state_24079[(1)]);if((state_val_24080 === (7)))
{var inst_24075 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24081_24104 = state_24079__$1;(statearr_24081_24104[(2)] = inst_24075);
(statearr_24081_24104[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (1)))
{var state_24079__$1 = state_24079;var statearr_24082_24105 = state_24079__$1;(statearr_24082_24105[(2)] = null);
(statearr_24082_24105[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (4)))
{var inst_24058 = (state_24079[(7)]);var inst_24058__$1 = (state_24079[(2)]);var inst_24059 = (inst_24058__$1 == null);var state_24079__$1 = (function (){var statearr_24083 = state_24079;(statearr_24083[(7)] = inst_24058__$1);
return statearr_24083;
})();if(cljs.core.truth_(inst_24059))
{var statearr_24084_24106 = state_24079__$1;(statearr_24084_24106[(1)] = (5));
} else
{var statearr_24085_24107 = state_24079__$1;(statearr_24085_24107[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (13)))
{var state_24079__$1 = state_24079;var statearr_24086_24108 = state_24079__$1;(statearr_24086_24108[(2)] = null);
(statearr_24086_24108[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (6)))
{var inst_24058 = (state_24079[(7)]);var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24079__$1,(11),to,inst_24058);
} else
{if((state_val_24080 === (3)))
{var inst_24077 = (state_24079[(2)]);var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.return_chan(state_24079__$1,inst_24077);
} else
{if((state_val_24080 === (12)))
{var state_24079__$1 = state_24079;var statearr_24087_24109 = state_24079__$1;(statearr_24087_24109[(2)] = null);
(statearr_24087_24109[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (2)))
{var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24079__$1,(4),from);
} else
{if((state_val_24080 === (11)))
{var inst_24068 = (state_24079[(2)]);var state_24079__$1 = state_24079;if(cljs.core.truth_(inst_24068))
{var statearr_24088_24110 = state_24079__$1;(statearr_24088_24110[(1)] = (12));
} else
{var statearr_24089_24111 = state_24079__$1;(statearr_24089_24111[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (9)))
{var state_24079__$1 = state_24079;var statearr_24090_24112 = state_24079__$1;(statearr_24090_24112[(2)] = null);
(statearr_24090_24112[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (5)))
{var state_24079__$1 = state_24079;if(cljs.core.truth_(close_QMARK_))
{var statearr_24091_24113 = state_24079__$1;(statearr_24091_24113[(1)] = (8));
} else
{var statearr_24092_24114 = state_24079__$1;(statearr_24092_24114[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (14)))
{var inst_24073 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24093_24115 = state_24079__$1;(statearr_24093_24115[(2)] = inst_24073);
(statearr_24093_24115[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (10)))
{var inst_24065 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24094_24116 = state_24079__$1;(statearr_24094_24116[(2)] = inst_24065);
(statearr_24094_24116[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24080 === (8)))
{var inst_24062 = cljs.core.async.close_BANG_(to);var state_24079__$1 = state_24079;var statearr_24095_24117 = state_24079__$1;(statearr_24095_24117[(2)] = inst_24062);
(statearr_24095_24117[(1)] = (10));
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
});})(c__12292__auto___24103))
;return ((function (switch__12277__auto__,c__12292__auto___24103){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24099 = [null,null,null,null,null,null,null,null];(statearr_24099[(0)] = state_machine__12278__auto__);
(statearr_24099[(1)] = (1));
return statearr_24099;
});
var state_machine__12278__auto____1 = (function (state_24079){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24079);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24100){if((e24100 instanceof Object))
{var ex__12281__auto__ = e24100;var statearr_24101_24118 = state_24079;(statearr_24101_24118[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24079);
return cljs.core.constant$keyword$82;
} else
{throw e24100;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24119 = state_24079;
state_24079 = G__24119;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24079){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24103))
})();var state__12294__auto__ = (function (){var statearr_24102 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24103);
return statearr_24102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24103))
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
return (function (p__24305){var vec__24306 = p__24305;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306,(1),null);var job = vec__24306;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results){
return (function (state_24311){var state_val_24312 = (state_24311[(1)]);if((state_val_24312 === (2)))
{var inst_24308 = (state_24311[(2)]);var inst_24309 = cljs.core.async.close_BANG_(res);var state_24311__$1 = (function (){var statearr_24313 = state_24311;(statearr_24313[(7)] = inst_24308);
return statearr_24313;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24311__$1,inst_24309);
} else
{if((state_val_24312 === (1)))
{var state_24311__$1 = state_24311;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24311__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24317 = [null,null,null,null,null,null,null,null];(statearr_24317[(0)] = state_machine__12278__auto__);
(statearr_24317[(1)] = (1));
return statearr_24317;
});
var state_machine__12278__auto____1 = (function (state_24311){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24311);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24318){if((e24318 instanceof Object))
{var ex__12281__auto__ = e24318;var statearr_24319_24491 = state_24311;(statearr_24319_24491[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24311);
return cljs.core.constant$keyword$82;
} else
{throw e24318;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24492 = state_24311;
state_24311 = G__24492;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24311){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24320 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24490);
return statearr_24320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24490,res,vec__24306,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24321){var vec__24322 = p__24321;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24322,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24322,(1),null);var job = vec__24322;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24323_24493 = v;var G__24324_24494 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24323_24493,G__24324_24494) : xf.call(null,G__24323_24493,G__24324_24494));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24495 = n;var __24496 = (0);while(true){
if((__24496 < n__4510__auto___24495))
{var G__24325_24497 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24325_24497) {
case "async":
var c__12292__auto___24499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24496,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24496,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function (state_24338){var state_val_24339 = (state_24338[(1)]);if((state_val_24339 === (7)))
{var inst_24334 = (state_24338[(2)]);var state_24338__$1 = state_24338;var statearr_24340_24500 = state_24338__$1;(statearr_24340_24500[(2)] = inst_24334);
(statearr_24340_24500[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24339 === (6)))
{var state_24338__$1 = state_24338;var statearr_24341_24501 = state_24338__$1;(statearr_24341_24501[(2)] = null);
(statearr_24341_24501[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24339 === (5)))
{var state_24338__$1 = state_24338;var statearr_24342_24502 = state_24338__$1;(statearr_24342_24502[(2)] = null);
(statearr_24342_24502[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24339 === (4)))
{var inst_24328 = (state_24338[(2)]);var inst_24329 = async(inst_24328);var state_24338__$1 = state_24338;if(cljs.core.truth_(inst_24329))
{var statearr_24343_24503 = state_24338__$1;(statearr_24343_24503[(1)] = (5));
} else
{var statearr_24344_24504 = state_24338__$1;(statearr_24344_24504[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24339 === (3)))
{var inst_24336 = (state_24338[(2)]);var state_24338__$1 = state_24338;return cljs.core.async.impl.ioc_helpers.return_chan(state_24338__$1,inst_24336);
} else
{if((state_val_24339 === (2)))
{var state_24338__$1 = state_24338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24338__$1,(4),jobs);
} else
{if((state_val_24339 === (1)))
{var state_24338__$1 = state_24338;var statearr_24345_24505 = state_24338__$1;(statearr_24345_24505[(2)] = null);
(statearr_24345_24505[(1)] = (2));
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
});})(__24496,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
;return ((function (__24496,switch__12277__auto__,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24349 = [null,null,null,null,null,null,null];(statearr_24349[(0)] = state_machine__12278__auto__);
(statearr_24349[(1)] = (1));
return statearr_24349;
});
var state_machine__12278__auto____1 = (function (state_24338){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24338);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24350){if((e24350 instanceof Object))
{var ex__12281__auto__ = e24350;var statearr_24351_24506 = state_24338;(statearr_24351_24506[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24338);
return cljs.core.constant$keyword$82;
} else
{throw e24350;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24507 = state_24338;
state_24338 = G__24507;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24338){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24496,switch__12277__auto__,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24352 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24499);
return statearr_24352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24496,c__12292__auto___24499,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24496,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24496,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function (state_24365){var state_val_24366 = (state_24365[(1)]);if((state_val_24366 === (7)))
{var inst_24361 = (state_24365[(2)]);var state_24365__$1 = state_24365;var statearr_24367_24509 = state_24365__$1;(statearr_24367_24509[(2)] = inst_24361);
(statearr_24367_24509[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24366 === (6)))
{var state_24365__$1 = state_24365;var statearr_24368_24510 = state_24365__$1;(statearr_24368_24510[(2)] = null);
(statearr_24368_24510[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24366 === (5)))
{var state_24365__$1 = state_24365;var statearr_24369_24511 = state_24365__$1;(statearr_24369_24511[(2)] = null);
(statearr_24369_24511[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24366 === (4)))
{var inst_24355 = (state_24365[(2)]);var inst_24356 = process(inst_24355);var state_24365__$1 = state_24365;if(cljs.core.truth_(inst_24356))
{var statearr_24370_24512 = state_24365__$1;(statearr_24370_24512[(1)] = (5));
} else
{var statearr_24371_24513 = state_24365__$1;(statearr_24371_24513[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24366 === (3)))
{var inst_24363 = (state_24365[(2)]);var state_24365__$1 = state_24365;return cljs.core.async.impl.ioc_helpers.return_chan(state_24365__$1,inst_24363);
} else
{if((state_val_24366 === (2)))
{var state_24365__$1 = state_24365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24365__$1,(4),jobs);
} else
{if((state_val_24366 === (1)))
{var state_24365__$1 = state_24365;var statearr_24372_24514 = state_24365__$1;(statearr_24372_24514[(2)] = null);
(statearr_24372_24514[(1)] = (2));
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
});})(__24496,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
;return ((function (__24496,switch__12277__auto__,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24376 = [null,null,null,null,null,null,null];(statearr_24376[(0)] = state_machine__12278__auto__);
(statearr_24376[(1)] = (1));
return statearr_24376;
});
var state_machine__12278__auto____1 = (function (state_24365){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24365);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24377){if((e24377 instanceof Object))
{var ex__12281__auto__ = e24377;var statearr_24378_24515 = state_24365;(statearr_24378_24515[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24365);
return cljs.core.constant$keyword$82;
} else
{throw e24377;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24516 = state_24365;
state_24365 = G__24516;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24365){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24496,switch__12277__auto__,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24379 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24508);
return statearr_24379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24496,c__12292__auto___24508,G__24325_24497,n__4510__auto___24495,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24517 = (__24496 + (1));
__24496 = G__24517;
continue;
}
} else
{}
break;
}
var c__12292__auto___24518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24518,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24518,jobs,results,process,async){
return (function (state_24401){var state_val_24402 = (state_24401[(1)]);if((state_val_24402 === (9)))
{var inst_24394 = (state_24401[(2)]);var state_24401__$1 = (function (){var statearr_24403 = state_24401;(statearr_24403[(7)] = inst_24394);
return statearr_24403;
})();var statearr_24404_24519 = state_24401__$1;(statearr_24404_24519[(2)] = null);
(statearr_24404_24519[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24402 === (8)))
{var inst_24387 = (state_24401[(8)]);var inst_24392 = (state_24401[(2)]);var state_24401__$1 = (function (){var statearr_24405 = state_24401;(statearr_24405[(9)] = inst_24392);
return statearr_24405;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24401__$1,(9),results,inst_24387);
} else
{if((state_val_24402 === (7)))
{var inst_24397 = (state_24401[(2)]);var state_24401__$1 = state_24401;var statearr_24406_24520 = state_24401__$1;(statearr_24406_24520[(2)] = inst_24397);
(statearr_24406_24520[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24402 === (6)))
{var inst_24382 = (state_24401[(10)]);var inst_24387 = (state_24401[(8)]);var inst_24387__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24388 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24389 = [inst_24382,inst_24387__$1];var inst_24390 = (new cljs.core.PersistentVector(null,2,(5),inst_24388,inst_24389,null));var state_24401__$1 = (function (){var statearr_24407 = state_24401;(statearr_24407[(8)] = inst_24387__$1);
return statearr_24407;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24401__$1,(8),jobs,inst_24390);
} else
{if((state_val_24402 === (5)))
{var inst_24385 = cljs.core.async.close_BANG_(jobs);var state_24401__$1 = state_24401;var statearr_24408_24521 = state_24401__$1;(statearr_24408_24521[(2)] = inst_24385);
(statearr_24408_24521[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24402 === (4)))
{var inst_24382 = (state_24401[(10)]);var inst_24382__$1 = (state_24401[(2)]);var inst_24383 = (inst_24382__$1 == null);var state_24401__$1 = (function (){var statearr_24409 = state_24401;(statearr_24409[(10)] = inst_24382__$1);
return statearr_24409;
})();if(cljs.core.truth_(inst_24383))
{var statearr_24410_24522 = state_24401__$1;(statearr_24410_24522[(1)] = (5));
} else
{var statearr_24411_24523 = state_24401__$1;(statearr_24411_24523[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24402 === (3)))
{var inst_24399 = (state_24401[(2)]);var state_24401__$1 = state_24401;return cljs.core.async.impl.ioc_helpers.return_chan(state_24401__$1,inst_24399);
} else
{if((state_val_24402 === (2)))
{var state_24401__$1 = state_24401;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24401__$1,(4),from);
} else
{if((state_val_24402 === (1)))
{var state_24401__$1 = state_24401;var statearr_24412_24524 = state_24401__$1;(statearr_24412_24524[(2)] = null);
(statearr_24412_24524[(1)] = (2));
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
});})(c__12292__auto___24518,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24518,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24416 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24416[(0)] = state_machine__12278__auto__);
(statearr_24416[(1)] = (1));
return statearr_24416;
});
var state_machine__12278__auto____1 = (function (state_24401){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24401);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24417){if((e24417 instanceof Object))
{var ex__12281__auto__ = e24417;var statearr_24418_24525 = state_24401;(statearr_24418_24525[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24401);
return cljs.core.constant$keyword$82;
} else
{throw e24417;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24526 = state_24401;
state_24401 = G__24526;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24401){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24518,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24419 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24518);
return statearr_24419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24518,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24457){var state_val_24458 = (state_24457[(1)]);if((state_val_24458 === (7)))
{var inst_24453 = (state_24457[(2)]);var state_24457__$1 = state_24457;var statearr_24459_24527 = state_24457__$1;(statearr_24459_24527[(2)] = inst_24453);
(statearr_24459_24527[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (20)))
{var state_24457__$1 = state_24457;var statearr_24460_24528 = state_24457__$1;(statearr_24460_24528[(2)] = null);
(statearr_24460_24528[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (1)))
{var state_24457__$1 = state_24457;var statearr_24461_24529 = state_24457__$1;(statearr_24461_24529[(2)] = null);
(statearr_24461_24529[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (4)))
{var inst_24422 = (state_24457[(7)]);var inst_24422__$1 = (state_24457[(2)]);var inst_24423 = (inst_24422__$1 == null);var state_24457__$1 = (function (){var statearr_24462 = state_24457;(statearr_24462[(7)] = inst_24422__$1);
return statearr_24462;
})();if(cljs.core.truth_(inst_24423))
{var statearr_24463_24530 = state_24457__$1;(statearr_24463_24530[(1)] = (5));
} else
{var statearr_24464_24531 = state_24457__$1;(statearr_24464_24531[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (15)))
{var inst_24435 = (state_24457[(8)]);var state_24457__$1 = state_24457;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24457__$1,(18),to,inst_24435);
} else
{if((state_val_24458 === (21)))
{var inst_24448 = (state_24457[(2)]);var state_24457__$1 = state_24457;var statearr_24465_24532 = state_24457__$1;(statearr_24465_24532[(2)] = inst_24448);
(statearr_24465_24532[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (13)))
{var inst_24450 = (state_24457[(2)]);var state_24457__$1 = (function (){var statearr_24466 = state_24457;(statearr_24466[(9)] = inst_24450);
return statearr_24466;
})();var statearr_24467_24533 = state_24457__$1;(statearr_24467_24533[(2)] = null);
(statearr_24467_24533[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (6)))
{var inst_24422 = (state_24457[(7)]);var state_24457__$1 = state_24457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24457__$1,(11),inst_24422);
} else
{if((state_val_24458 === (17)))
{var inst_24443 = (state_24457[(2)]);var state_24457__$1 = state_24457;if(cljs.core.truth_(inst_24443))
{var statearr_24468_24534 = state_24457__$1;(statearr_24468_24534[(1)] = (19));
} else
{var statearr_24469_24535 = state_24457__$1;(statearr_24469_24535[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (3)))
{var inst_24455 = (state_24457[(2)]);var state_24457__$1 = state_24457;return cljs.core.async.impl.ioc_helpers.return_chan(state_24457__$1,inst_24455);
} else
{if((state_val_24458 === (12)))
{var inst_24432 = (state_24457[(10)]);var state_24457__$1 = state_24457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24457__$1,(14),inst_24432);
} else
{if((state_val_24458 === (2)))
{var state_24457__$1 = state_24457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24457__$1,(4),results);
} else
{if((state_val_24458 === (19)))
{var state_24457__$1 = state_24457;var statearr_24470_24536 = state_24457__$1;(statearr_24470_24536[(2)] = null);
(statearr_24470_24536[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (11)))
{var inst_24432 = (state_24457[(2)]);var state_24457__$1 = (function (){var statearr_24471 = state_24457;(statearr_24471[(10)] = inst_24432);
return statearr_24471;
})();var statearr_24472_24537 = state_24457__$1;(statearr_24472_24537[(2)] = null);
(statearr_24472_24537[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (9)))
{var state_24457__$1 = state_24457;var statearr_24473_24538 = state_24457__$1;(statearr_24473_24538[(2)] = null);
(statearr_24473_24538[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (5)))
{var state_24457__$1 = state_24457;if(cljs.core.truth_(close_QMARK_))
{var statearr_24474_24539 = state_24457__$1;(statearr_24474_24539[(1)] = (8));
} else
{var statearr_24475_24540 = state_24457__$1;(statearr_24475_24540[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (14)))
{var inst_24437 = (state_24457[(11)]);var inst_24435 = (state_24457[(8)]);var inst_24435__$1 = (state_24457[(2)]);var inst_24436 = (inst_24435__$1 == null);var inst_24437__$1 = cljs.core.not(inst_24436);var state_24457__$1 = (function (){var statearr_24476 = state_24457;(statearr_24476[(11)] = inst_24437__$1);
(statearr_24476[(8)] = inst_24435__$1);
return statearr_24476;
})();if(inst_24437__$1)
{var statearr_24477_24541 = state_24457__$1;(statearr_24477_24541[(1)] = (15));
} else
{var statearr_24478_24542 = state_24457__$1;(statearr_24478_24542[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (16)))
{var inst_24437 = (state_24457[(11)]);var state_24457__$1 = state_24457;var statearr_24479_24543 = state_24457__$1;(statearr_24479_24543[(2)] = inst_24437);
(statearr_24479_24543[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (10)))
{var inst_24429 = (state_24457[(2)]);var state_24457__$1 = state_24457;var statearr_24480_24544 = state_24457__$1;(statearr_24480_24544[(2)] = inst_24429);
(statearr_24480_24544[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (18)))
{var inst_24440 = (state_24457[(2)]);var state_24457__$1 = state_24457;var statearr_24481_24545 = state_24457__$1;(statearr_24481_24545[(2)] = inst_24440);
(statearr_24481_24545[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24458 === (8)))
{var inst_24426 = cljs.core.async.close_BANG_(to);var state_24457__$1 = state_24457;var statearr_24482_24546 = state_24457__$1;(statearr_24482_24546[(2)] = inst_24426);
(statearr_24482_24546[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24486 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24486[(0)] = state_machine__12278__auto__);
(statearr_24486[(1)] = (1));
return statearr_24486;
});
var state_machine__12278__auto____1 = (function (state_24457){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24457);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24487){if((e24487 instanceof Object))
{var ex__12281__auto__ = e24487;var statearr_24488_24547 = state_24457;(statearr_24488_24547[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24457);
return cljs.core.constant$keyword$82;
} else
{throw e24487;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24548 = state_24457;
state_24457 = G__24548;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24457){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24489 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24489;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24671,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24671,tc,fc){
return (function (state_24645){var state_val_24646 = (state_24645[(1)]);if((state_val_24646 === (7)))
{var inst_24641 = (state_24645[(2)]);var state_24645__$1 = state_24645;var statearr_24647_24672 = state_24645__$1;(statearr_24647_24672[(2)] = inst_24641);
(statearr_24647_24672[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (1)))
{var state_24645__$1 = state_24645;var statearr_24648_24673 = state_24645__$1;(statearr_24648_24673[(2)] = null);
(statearr_24648_24673[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (4)))
{var inst_24622 = (state_24645[(7)]);var inst_24622__$1 = (state_24645[(2)]);var inst_24623 = (inst_24622__$1 == null);var state_24645__$1 = (function (){var statearr_24649 = state_24645;(statearr_24649[(7)] = inst_24622__$1);
return statearr_24649;
})();if(cljs.core.truth_(inst_24623))
{var statearr_24650_24674 = state_24645__$1;(statearr_24650_24674[(1)] = (5));
} else
{var statearr_24651_24675 = state_24645__$1;(statearr_24651_24675[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (13)))
{var state_24645__$1 = state_24645;var statearr_24652_24676 = state_24645__$1;(statearr_24652_24676[(2)] = null);
(statearr_24652_24676[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (6)))
{var inst_24622 = (state_24645[(7)]);var inst_24628 = (function (){var G__24653 = inst_24622;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24653) : p.call(null,G__24653));
})();var state_24645__$1 = state_24645;if(cljs.core.truth_(inst_24628))
{var statearr_24654_24677 = state_24645__$1;(statearr_24654_24677[(1)] = (9));
} else
{var statearr_24655_24678 = state_24645__$1;(statearr_24655_24678[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (3)))
{var inst_24643 = (state_24645[(2)]);var state_24645__$1 = state_24645;return cljs.core.async.impl.ioc_helpers.return_chan(state_24645__$1,inst_24643);
} else
{if((state_val_24646 === (12)))
{var state_24645__$1 = state_24645;var statearr_24656_24679 = state_24645__$1;(statearr_24656_24679[(2)] = null);
(statearr_24656_24679[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (2)))
{var state_24645__$1 = state_24645;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24645__$1,(4),ch);
} else
{if((state_val_24646 === (11)))
{var inst_24622 = (state_24645[(7)]);var inst_24632 = (state_24645[(2)]);var state_24645__$1 = state_24645;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24645__$1,(8),inst_24632,inst_24622);
} else
{if((state_val_24646 === (9)))
{var state_24645__$1 = state_24645;var statearr_24657_24680 = state_24645__$1;(statearr_24657_24680[(2)] = tc);
(statearr_24657_24680[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (5)))
{var inst_24625 = cljs.core.async.close_BANG_(tc);var inst_24626 = cljs.core.async.close_BANG_(fc);var state_24645__$1 = (function (){var statearr_24658 = state_24645;(statearr_24658[(8)] = inst_24625);
return statearr_24658;
})();var statearr_24659_24681 = state_24645__$1;(statearr_24659_24681[(2)] = inst_24626);
(statearr_24659_24681[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (14)))
{var inst_24639 = (state_24645[(2)]);var state_24645__$1 = state_24645;var statearr_24660_24682 = state_24645__$1;(statearr_24660_24682[(2)] = inst_24639);
(statearr_24660_24682[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (10)))
{var state_24645__$1 = state_24645;var statearr_24661_24683 = state_24645__$1;(statearr_24661_24683[(2)] = fc);
(statearr_24661_24683[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24646 === (8)))
{var inst_24634 = (state_24645[(2)]);var state_24645__$1 = state_24645;if(cljs.core.truth_(inst_24634))
{var statearr_24662_24684 = state_24645__$1;(statearr_24662_24684[(1)] = (12));
} else
{var statearr_24663_24685 = state_24645__$1;(statearr_24663_24685[(1)] = (13));
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
});})(c__12292__auto___24671,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24671,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24667 = [null,null,null,null,null,null,null,null,null];(statearr_24667[(0)] = state_machine__12278__auto__);
(statearr_24667[(1)] = (1));
return statearr_24667;
});
var state_machine__12278__auto____1 = (function (state_24645){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24645);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24668){if((e24668 instanceof Object))
{var ex__12281__auto__ = e24668;var statearr_24669_24686 = state_24645;(statearr_24669_24686[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24645);
return cljs.core.constant$keyword$82;
} else
{throw e24668;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24687 = state_24645;
state_24645 = G__24687;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24645){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24671,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24670 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24671);
return statearr_24670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24671,tc,fc))
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
return (function (state_24736){var state_val_24737 = (state_24736[(1)]);if((state_val_24737 === (7)))
{var inst_24732 = (state_24736[(2)]);var state_24736__$1 = state_24736;var statearr_24738_24756 = state_24736__$1;(statearr_24738_24756[(2)] = inst_24732);
(statearr_24738_24756[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24737 === (6)))
{var inst_24722 = (state_24736[(7)]);var inst_24725 = (state_24736[(8)]);var inst_24729 = (function (){var G__24739 = inst_24722;var G__24740 = inst_24725;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24739,G__24740) : f.call(null,G__24739,G__24740));
})();var inst_24722__$1 = inst_24729;var state_24736__$1 = (function (){var statearr_24741 = state_24736;(statearr_24741[(7)] = inst_24722__$1);
return statearr_24741;
})();var statearr_24742_24757 = state_24736__$1;(statearr_24742_24757[(2)] = null);
(statearr_24742_24757[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24737 === (5)))
{var inst_24722 = (state_24736[(7)]);var state_24736__$1 = state_24736;var statearr_24743_24758 = state_24736__$1;(statearr_24743_24758[(2)] = inst_24722);
(statearr_24743_24758[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24737 === (4)))
{var inst_24725 = (state_24736[(8)]);var inst_24725__$1 = (state_24736[(2)]);var inst_24726 = (inst_24725__$1 == null);var state_24736__$1 = (function (){var statearr_24744 = state_24736;(statearr_24744[(8)] = inst_24725__$1);
return statearr_24744;
})();if(cljs.core.truth_(inst_24726))
{var statearr_24745_24759 = state_24736__$1;(statearr_24745_24759[(1)] = (5));
} else
{var statearr_24746_24760 = state_24736__$1;(statearr_24746_24760[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24737 === (3)))
{var inst_24734 = (state_24736[(2)]);var state_24736__$1 = state_24736;return cljs.core.async.impl.ioc_helpers.return_chan(state_24736__$1,inst_24734);
} else
{if((state_val_24737 === (2)))
{var state_24736__$1 = state_24736;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24736__$1,(4),ch);
} else
{if((state_val_24737 === (1)))
{var inst_24722 = init;var state_24736__$1 = (function (){var statearr_24747 = state_24736;(statearr_24747[(7)] = inst_24722);
return statearr_24747;
})();var statearr_24748_24761 = state_24736__$1;(statearr_24748_24761[(2)] = null);
(statearr_24748_24761[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24752 = [null,null,null,null,null,null,null,null,null];(statearr_24752[(0)] = state_machine__12278__auto__);
(statearr_24752[(1)] = (1));
return statearr_24752;
});
var state_machine__12278__auto____1 = (function (state_24736){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24736);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object))
{var ex__12281__auto__ = e24753;var statearr_24754_24762 = state_24736;(statearr_24754_24762[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24736);
return cljs.core.constant$keyword$82;
} else
{throw e24753;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24763 = state_24736;
state_24736 = G__24763;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24755 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24755;
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
return (function (state_24840){var state_val_24841 = (state_24840[(1)]);if((state_val_24841 === (7)))
{var inst_24822 = (state_24840[(2)]);var state_24840__$1 = state_24840;var statearr_24842_24865 = state_24840__$1;(statearr_24842_24865[(2)] = inst_24822);
(statearr_24842_24865[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (1)))
{var inst_24816 = cljs.core.seq(coll);var inst_24817 = inst_24816;var state_24840__$1 = (function (){var statearr_24843 = state_24840;(statearr_24843[(7)] = inst_24817);
return statearr_24843;
})();var statearr_24844_24866 = state_24840__$1;(statearr_24844_24866[(2)] = null);
(statearr_24844_24866[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (4)))
{var inst_24817 = (state_24840[(7)]);var inst_24820 = cljs.core.first(inst_24817);var state_24840__$1 = state_24840;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24840__$1,(7),ch,inst_24820);
} else
{if((state_val_24841 === (13)))
{var inst_24834 = (state_24840[(2)]);var state_24840__$1 = state_24840;var statearr_24845_24867 = state_24840__$1;(statearr_24845_24867[(2)] = inst_24834);
(statearr_24845_24867[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (6)))
{var inst_24825 = (state_24840[(2)]);var state_24840__$1 = state_24840;if(cljs.core.truth_(inst_24825))
{var statearr_24846_24868 = state_24840__$1;(statearr_24846_24868[(1)] = (8));
} else
{var statearr_24847_24869 = state_24840__$1;(statearr_24847_24869[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (3)))
{var inst_24838 = (state_24840[(2)]);var state_24840__$1 = state_24840;return cljs.core.async.impl.ioc_helpers.return_chan(state_24840__$1,inst_24838);
} else
{if((state_val_24841 === (12)))
{var state_24840__$1 = state_24840;var statearr_24848_24870 = state_24840__$1;(statearr_24848_24870[(2)] = null);
(statearr_24848_24870[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (2)))
{var inst_24817 = (state_24840[(7)]);var state_24840__$1 = state_24840;if(cljs.core.truth_(inst_24817))
{var statearr_24849_24871 = state_24840__$1;(statearr_24849_24871[(1)] = (4));
} else
{var statearr_24850_24872 = state_24840__$1;(statearr_24850_24872[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (11)))
{var inst_24831 = cljs.core.async.close_BANG_(ch);var state_24840__$1 = state_24840;var statearr_24851_24873 = state_24840__$1;(statearr_24851_24873[(2)] = inst_24831);
(statearr_24851_24873[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (9)))
{var state_24840__$1 = state_24840;if(cljs.core.truth_(close_QMARK_))
{var statearr_24852_24874 = state_24840__$1;(statearr_24852_24874[(1)] = (11));
} else
{var statearr_24853_24875 = state_24840__$1;(statearr_24853_24875[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (5)))
{var inst_24817 = (state_24840[(7)]);var state_24840__$1 = state_24840;var statearr_24854_24876 = state_24840__$1;(statearr_24854_24876[(2)] = inst_24817);
(statearr_24854_24876[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (10)))
{var inst_24836 = (state_24840[(2)]);var state_24840__$1 = state_24840;var statearr_24855_24877 = state_24840__$1;(statearr_24855_24877[(2)] = inst_24836);
(statearr_24855_24877[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24841 === (8)))
{var inst_24817 = (state_24840[(7)]);var inst_24827 = cljs.core.next(inst_24817);var inst_24817__$1 = inst_24827;var state_24840__$1 = (function (){var statearr_24856 = state_24840;(statearr_24856[(7)] = inst_24817__$1);
return statearr_24856;
})();var statearr_24857_24878 = state_24840__$1;(statearr_24857_24878[(2)] = null);
(statearr_24857_24878[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24861 = [null,null,null,null,null,null,null,null];(statearr_24861[(0)] = state_machine__12278__auto__);
(statearr_24861[(1)] = (1));
return statearr_24861;
});
var state_machine__12278__auto____1 = (function (state_24840){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24840);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24862){if((e24862 instanceof Object))
{var ex__12281__auto__ = e24862;var statearr_24863_24879 = state_24840;(statearr_24863_24879[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24840);
return cljs.core.constant$keyword$82;
} else
{throw e24862;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24880 = state_24840;
state_24840 = G__24880;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24840){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24864 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24864;
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
cljs.core.async.Mux = (function (){var obj24882 = {};return obj24882;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24886 = x__4277__auto__;return goog.typeOf(G__24886);
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
cljs.core.async.Mult = (function (){var obj24888 = {};return obj24888;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24892 = x__4277__auto__;return goog.typeOf(G__24892);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24896 = x__4277__auto__;return goog.typeOf(G__24896);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24900 = x__4277__auto__;return goog.typeOf(G__24900);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25130 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25130) : cljs.core.atom.call(null,G__25130));
})();var m = (function (){if(typeof cljs.core.async.t25131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25131 = (function (cs,ch,mult,meta25132){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25132 = meta25132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25131.cljs$lang$type = true;
cljs.core.async.t25131.cljs$lang$ctorStr = "cljs.core.async/t25131";
cljs.core.async.t25131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25131");
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25134_25359 = self__.cs;var G__25135_25360 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25134_25359,G__25135_25360) : cljs.core.reset_BANG_.call(null,G__25134_25359,G__25135_25360));
return null;
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25133){var self__ = this;
var _25133__$1 = this;return self__.meta25132;
});})(cs))
;
cljs.core.async.t25131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25133,meta25132__$1){var self__ = this;
var _25133__$1 = this;return (new cljs.core.async.t25131(self__.cs,self__.ch,self__.mult,meta25132__$1));
});})(cs))
;
cljs.core.async.__GT_t25131 = ((function (cs){
return (function __GT_t25131(cs__$1,ch__$1,mult__$1,meta25132){return (new cljs.core.async.t25131(cs__$1,ch__$1,mult__$1,meta25132));
});})(cs))
;
}
return (new cljs.core.async.t25131(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25136 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25136) : cljs.core.atom.call(null,G__25136));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25361,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25361,cs,m,dchan,dctr,done){
return (function (state_25267){var state_val_25268 = (state_25267[(1)]);if((state_val_25268 === (7)))
{var inst_25263 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25269_25362 = state_25267__$1;(statearr_25269_25362[(2)] = inst_25263);
(statearr_25269_25362[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (20)))
{var inst_25168 = (state_25267[(7)]);var inst_25178 = cljs.core.first(inst_25168);var inst_25179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25178,(0),null);var inst_25180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25178,(1),null);var state_25267__$1 = (function (){var statearr_25270 = state_25267;(statearr_25270[(8)] = inst_25179);
return statearr_25270;
})();if(cljs.core.truth_(inst_25180))
{var statearr_25271_25363 = state_25267__$1;(statearr_25271_25363[(1)] = (22));
} else
{var statearr_25272_25364 = state_25267__$1;(statearr_25272_25364[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (27)))
{var inst_25210 = (state_25267[(9)]);var inst_25139 = (state_25267[(10)]);var inst_25215 = (state_25267[(11)]);var inst_25208 = (state_25267[(12)]);var inst_25215__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25208,inst_25210);var inst_25216 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25215__$1,inst_25139,done);var state_25267__$1 = (function (){var statearr_25273 = state_25267;(statearr_25273[(11)] = inst_25215__$1);
return statearr_25273;
})();if(cljs.core.truth_(inst_25216))
{var statearr_25274_25365 = state_25267__$1;(statearr_25274_25365[(1)] = (30));
} else
{var statearr_25275_25366 = state_25267__$1;(statearr_25275_25366[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (1)))
{var state_25267__$1 = state_25267;var statearr_25276_25367 = state_25267__$1;(statearr_25276_25367[(2)] = null);
(statearr_25276_25367[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (24)))
{var inst_25168 = (state_25267[(7)]);var inst_25185 = (state_25267[(2)]);var inst_25186 = cljs.core.next(inst_25168);var inst_25148 = inst_25186;var inst_25149 = null;var inst_25150 = (0);var inst_25151 = (0);var state_25267__$1 = (function (){var statearr_25277 = state_25267;(statearr_25277[(13)] = inst_25148);
(statearr_25277[(14)] = inst_25185);
(statearr_25277[(15)] = inst_25149);
(statearr_25277[(16)] = inst_25150);
(statearr_25277[(17)] = inst_25151);
return statearr_25277;
})();var statearr_25278_25368 = state_25267__$1;(statearr_25278_25368[(2)] = null);
(statearr_25278_25368[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (39)))
{var state_25267__$1 = state_25267;var statearr_25282_25369 = state_25267__$1;(statearr_25282_25369[(2)] = null);
(statearr_25282_25369[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (4)))
{var inst_25139 = (state_25267[(10)]);var inst_25139__$1 = (state_25267[(2)]);var inst_25140 = (inst_25139__$1 == null);var state_25267__$1 = (function (){var statearr_25283 = state_25267;(statearr_25283[(10)] = inst_25139__$1);
return statearr_25283;
})();if(cljs.core.truth_(inst_25140))
{var statearr_25284_25370 = state_25267__$1;(statearr_25284_25370[(1)] = (5));
} else
{var statearr_25285_25371 = state_25267__$1;(statearr_25285_25371[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (15)))
{var inst_25148 = (state_25267[(13)]);var inst_25149 = (state_25267[(15)]);var inst_25150 = (state_25267[(16)]);var inst_25151 = (state_25267[(17)]);var inst_25164 = (state_25267[(2)]);var inst_25165 = (inst_25151 + (1));var tmp25279 = inst_25148;var tmp25280 = inst_25149;var tmp25281 = inst_25150;var inst_25148__$1 = tmp25279;var inst_25149__$1 = tmp25280;var inst_25150__$1 = tmp25281;var inst_25151__$1 = inst_25165;var state_25267__$1 = (function (){var statearr_25286 = state_25267;(statearr_25286[(18)] = inst_25164);
(statearr_25286[(13)] = inst_25148__$1);
(statearr_25286[(15)] = inst_25149__$1);
(statearr_25286[(16)] = inst_25150__$1);
(statearr_25286[(17)] = inst_25151__$1);
return statearr_25286;
})();var statearr_25287_25372 = state_25267__$1;(statearr_25287_25372[(2)] = null);
(statearr_25287_25372[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (21)))
{var inst_25189 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25291_25373 = state_25267__$1;(statearr_25291_25373[(2)] = inst_25189);
(statearr_25291_25373[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (31)))
{var inst_25215 = (state_25267[(11)]);var inst_25219 = done(null);var inst_25220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25215);var state_25267__$1 = (function (){var statearr_25292 = state_25267;(statearr_25292[(19)] = inst_25219);
return statearr_25292;
})();var statearr_25293_25374 = state_25267__$1;(statearr_25293_25374[(2)] = inst_25220);
(statearr_25293_25374[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (32)))
{var inst_25210 = (state_25267[(9)]);var inst_25207 = (state_25267[(20)]);var inst_25209 = (state_25267[(21)]);var inst_25208 = (state_25267[(12)]);var inst_25222 = (state_25267[(2)]);var inst_25223 = (inst_25210 + (1));var tmp25288 = inst_25207;var tmp25289 = inst_25209;var tmp25290 = inst_25208;var inst_25207__$1 = tmp25288;var inst_25208__$1 = tmp25290;var inst_25209__$1 = tmp25289;var inst_25210__$1 = inst_25223;var state_25267__$1 = (function (){var statearr_25294 = state_25267;(statearr_25294[(9)] = inst_25210__$1);
(statearr_25294[(20)] = inst_25207__$1);
(statearr_25294[(21)] = inst_25209__$1);
(statearr_25294[(22)] = inst_25222);
(statearr_25294[(12)] = inst_25208__$1);
return statearr_25294;
})();var statearr_25295_25375 = state_25267__$1;(statearr_25295_25375[(2)] = null);
(statearr_25295_25375[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (40)))
{var inst_25235 = (state_25267[(23)]);var inst_25239 = done(null);var inst_25240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25235);var state_25267__$1 = (function (){var statearr_25296 = state_25267;(statearr_25296[(24)] = inst_25239);
return statearr_25296;
})();var statearr_25297_25376 = state_25267__$1;(statearr_25297_25376[(2)] = inst_25240);
(statearr_25297_25376[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (33)))
{var inst_25226 = (state_25267[(25)]);var inst_25228 = cljs.core.chunked_seq_QMARK_(inst_25226);var state_25267__$1 = state_25267;if(inst_25228)
{var statearr_25298_25377 = state_25267__$1;(statearr_25298_25377[(1)] = (36));
} else
{var statearr_25299_25378 = state_25267__$1;(statearr_25299_25378[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (13)))
{var inst_25158 = (state_25267[(26)]);var inst_25161 = cljs.core.async.close_BANG_(inst_25158);var state_25267__$1 = state_25267;var statearr_25300_25379 = state_25267__$1;(statearr_25300_25379[(2)] = inst_25161);
(statearr_25300_25379[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (22)))
{var inst_25179 = (state_25267[(8)]);var inst_25182 = cljs.core.async.close_BANG_(inst_25179);var state_25267__$1 = state_25267;var statearr_25301_25380 = state_25267__$1;(statearr_25301_25380[(2)] = inst_25182);
(statearr_25301_25380[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (36)))
{var inst_25226 = (state_25267[(25)]);var inst_25230 = cljs.core.chunk_first(inst_25226);var inst_25231 = cljs.core.chunk_rest(inst_25226);var inst_25232 = cljs.core.count(inst_25230);var inst_25207 = inst_25231;var inst_25208 = inst_25230;var inst_25209 = inst_25232;var inst_25210 = (0);var state_25267__$1 = (function (){var statearr_25302 = state_25267;(statearr_25302[(9)] = inst_25210);
(statearr_25302[(20)] = inst_25207);
(statearr_25302[(21)] = inst_25209);
(statearr_25302[(12)] = inst_25208);
return statearr_25302;
})();var statearr_25303_25381 = state_25267__$1;(statearr_25303_25381[(2)] = null);
(statearr_25303_25381[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (41)))
{var inst_25226 = (state_25267[(25)]);var inst_25242 = (state_25267[(2)]);var inst_25243 = cljs.core.next(inst_25226);var inst_25207 = inst_25243;var inst_25208 = null;var inst_25209 = (0);var inst_25210 = (0);var state_25267__$1 = (function (){var statearr_25304 = state_25267;(statearr_25304[(27)] = inst_25242);
(statearr_25304[(9)] = inst_25210);
(statearr_25304[(20)] = inst_25207);
(statearr_25304[(21)] = inst_25209);
(statearr_25304[(12)] = inst_25208);
return statearr_25304;
})();var statearr_25305_25382 = state_25267__$1;(statearr_25305_25382[(2)] = null);
(statearr_25305_25382[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (43)))
{var state_25267__$1 = state_25267;var statearr_25306_25383 = state_25267__$1;(statearr_25306_25383[(2)] = null);
(statearr_25306_25383[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (29)))
{var inst_25251 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25307_25384 = state_25267__$1;(statearr_25307_25384[(2)] = inst_25251);
(statearr_25307_25384[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (44)))
{var inst_25260 = (state_25267[(2)]);var state_25267__$1 = (function (){var statearr_25308 = state_25267;(statearr_25308[(28)] = inst_25260);
return statearr_25308;
})();var statearr_25309_25385 = state_25267__$1;(statearr_25309_25385[(2)] = null);
(statearr_25309_25385[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (6)))
{var inst_25199 = (state_25267[(29)]);var inst_25198 = (function (){var G__25310 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25310) : cljs.core.deref.call(null,G__25310));
})();var inst_25199__$1 = cljs.core.keys(inst_25198);var inst_25200 = cljs.core.count(inst_25199__$1);var inst_25201 = (function (){var G__25311 = dctr;var G__25312 = inst_25200;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25311,G__25312) : cljs.core.reset_BANG_.call(null,G__25311,G__25312));
})();var inst_25206 = cljs.core.seq(inst_25199__$1);var inst_25207 = inst_25206;var inst_25208 = null;var inst_25209 = (0);var inst_25210 = (0);var state_25267__$1 = (function (){var statearr_25313 = state_25267;(statearr_25313[(9)] = inst_25210);
(statearr_25313[(20)] = inst_25207);
(statearr_25313[(29)] = inst_25199__$1);
(statearr_25313[(30)] = inst_25201);
(statearr_25313[(21)] = inst_25209);
(statearr_25313[(12)] = inst_25208);
return statearr_25313;
})();var statearr_25314_25386 = state_25267__$1;(statearr_25314_25386[(2)] = null);
(statearr_25314_25386[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (28)))
{var inst_25207 = (state_25267[(20)]);var inst_25226 = (state_25267[(25)]);var inst_25226__$1 = cljs.core.seq(inst_25207);var state_25267__$1 = (function (){var statearr_25315 = state_25267;(statearr_25315[(25)] = inst_25226__$1);
return statearr_25315;
})();if(inst_25226__$1)
{var statearr_25316_25387 = state_25267__$1;(statearr_25316_25387[(1)] = (33));
} else
{var statearr_25317_25388 = state_25267__$1;(statearr_25317_25388[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (25)))
{var inst_25210 = (state_25267[(9)]);var inst_25209 = (state_25267[(21)]);var inst_25212 = (inst_25210 < inst_25209);var inst_25213 = inst_25212;var state_25267__$1 = state_25267;if(cljs.core.truth_(inst_25213))
{var statearr_25318_25389 = state_25267__$1;(statearr_25318_25389[(1)] = (27));
} else
{var statearr_25319_25390 = state_25267__$1;(statearr_25319_25390[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (34)))
{var state_25267__$1 = state_25267;var statearr_25320_25391 = state_25267__$1;(statearr_25320_25391[(2)] = null);
(statearr_25320_25391[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (17)))
{var state_25267__$1 = state_25267;var statearr_25321_25392 = state_25267__$1;(statearr_25321_25392[(2)] = null);
(statearr_25321_25392[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (3)))
{var inst_25265 = (state_25267[(2)]);var state_25267__$1 = state_25267;return cljs.core.async.impl.ioc_helpers.return_chan(state_25267__$1,inst_25265);
} else
{if((state_val_25268 === (12)))
{var inst_25194 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25322_25393 = state_25267__$1;(statearr_25322_25393[(2)] = inst_25194);
(statearr_25322_25393[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (2)))
{var state_25267__$1 = state_25267;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25267__$1,(4),ch);
} else
{if((state_val_25268 === (23)))
{var state_25267__$1 = state_25267;var statearr_25323_25394 = state_25267__$1;(statearr_25323_25394[(2)] = null);
(statearr_25323_25394[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (35)))
{var inst_25249 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25324_25395 = state_25267__$1;(statearr_25324_25395[(2)] = inst_25249);
(statearr_25324_25395[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (19)))
{var inst_25168 = (state_25267[(7)]);var inst_25172 = cljs.core.chunk_first(inst_25168);var inst_25173 = cljs.core.chunk_rest(inst_25168);var inst_25174 = cljs.core.count(inst_25172);var inst_25148 = inst_25173;var inst_25149 = inst_25172;var inst_25150 = inst_25174;var inst_25151 = (0);var state_25267__$1 = (function (){var statearr_25325 = state_25267;(statearr_25325[(13)] = inst_25148);
(statearr_25325[(15)] = inst_25149);
(statearr_25325[(16)] = inst_25150);
(statearr_25325[(17)] = inst_25151);
return statearr_25325;
})();var statearr_25326_25396 = state_25267__$1;(statearr_25326_25396[(2)] = null);
(statearr_25326_25396[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (11)))
{var inst_25168 = (state_25267[(7)]);var inst_25148 = (state_25267[(13)]);var inst_25168__$1 = cljs.core.seq(inst_25148);var state_25267__$1 = (function (){var statearr_25327 = state_25267;(statearr_25327[(7)] = inst_25168__$1);
return statearr_25327;
})();if(inst_25168__$1)
{var statearr_25328_25397 = state_25267__$1;(statearr_25328_25397[(1)] = (16));
} else
{var statearr_25329_25398 = state_25267__$1;(statearr_25329_25398[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (9)))
{var inst_25196 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25330_25399 = state_25267__$1;(statearr_25330_25399[(2)] = inst_25196);
(statearr_25330_25399[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (5)))
{var inst_25146 = (function (){var G__25331 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25331) : cljs.core.deref.call(null,G__25331));
})();var inst_25147 = cljs.core.seq(inst_25146);var inst_25148 = inst_25147;var inst_25149 = null;var inst_25150 = (0);var inst_25151 = (0);var state_25267__$1 = (function (){var statearr_25332 = state_25267;(statearr_25332[(13)] = inst_25148);
(statearr_25332[(15)] = inst_25149);
(statearr_25332[(16)] = inst_25150);
(statearr_25332[(17)] = inst_25151);
return statearr_25332;
})();var statearr_25333_25400 = state_25267__$1;(statearr_25333_25400[(2)] = null);
(statearr_25333_25400[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (14)))
{var state_25267__$1 = state_25267;var statearr_25334_25401 = state_25267__$1;(statearr_25334_25401[(2)] = null);
(statearr_25334_25401[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (45)))
{var inst_25257 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25335_25402 = state_25267__$1;(statearr_25335_25402[(2)] = inst_25257);
(statearr_25335_25402[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (26)))
{var inst_25199 = (state_25267[(29)]);var inst_25253 = (state_25267[(2)]);var inst_25254 = cljs.core.seq(inst_25199);var state_25267__$1 = (function (){var statearr_25336 = state_25267;(statearr_25336[(31)] = inst_25253);
return statearr_25336;
})();if(inst_25254)
{var statearr_25337_25403 = state_25267__$1;(statearr_25337_25403[(1)] = (42));
} else
{var statearr_25338_25404 = state_25267__$1;(statearr_25338_25404[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (16)))
{var inst_25168 = (state_25267[(7)]);var inst_25170 = cljs.core.chunked_seq_QMARK_(inst_25168);var state_25267__$1 = state_25267;if(inst_25170)
{var statearr_25339_25405 = state_25267__$1;(statearr_25339_25405[(1)] = (19));
} else
{var statearr_25340_25406 = state_25267__$1;(statearr_25340_25406[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (38)))
{var inst_25246 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25341_25407 = state_25267__$1;(statearr_25341_25407[(2)] = inst_25246);
(statearr_25341_25407[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (30)))
{var state_25267__$1 = state_25267;var statearr_25342_25408 = state_25267__$1;(statearr_25342_25408[(2)] = null);
(statearr_25342_25408[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (10)))
{var inst_25149 = (state_25267[(15)]);var inst_25151 = (state_25267[(17)]);var inst_25157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25149,inst_25151);var inst_25158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25157,(0),null);var inst_25159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25157,(1),null);var state_25267__$1 = (function (){var statearr_25343 = state_25267;(statearr_25343[(26)] = inst_25158);
return statearr_25343;
})();if(cljs.core.truth_(inst_25159))
{var statearr_25344_25409 = state_25267__$1;(statearr_25344_25409[(1)] = (13));
} else
{var statearr_25345_25410 = state_25267__$1;(statearr_25345_25410[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (18)))
{var inst_25192 = (state_25267[(2)]);var state_25267__$1 = state_25267;var statearr_25346_25411 = state_25267__$1;(statearr_25346_25411[(2)] = inst_25192);
(statearr_25346_25411[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (42)))
{var state_25267__$1 = state_25267;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25267__$1,(45),dchan);
} else
{if((state_val_25268 === (37)))
{var inst_25235 = (state_25267[(23)]);var inst_25139 = (state_25267[(10)]);var inst_25226 = (state_25267[(25)]);var inst_25235__$1 = cljs.core.first(inst_25226);var inst_25236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25235__$1,inst_25139,done);var state_25267__$1 = (function (){var statearr_25347 = state_25267;(statearr_25347[(23)] = inst_25235__$1);
return statearr_25347;
})();if(cljs.core.truth_(inst_25236))
{var statearr_25348_25412 = state_25267__$1;(statearr_25348_25412[(1)] = (39));
} else
{var statearr_25349_25413 = state_25267__$1;(statearr_25349_25413[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25268 === (8)))
{var inst_25150 = (state_25267[(16)]);var inst_25151 = (state_25267[(17)]);var inst_25153 = (inst_25151 < inst_25150);var inst_25154 = inst_25153;var state_25267__$1 = state_25267;if(cljs.core.truth_(inst_25154))
{var statearr_25350_25414 = state_25267__$1;(statearr_25350_25414[(1)] = (10));
} else
{var statearr_25351_25415 = state_25267__$1;(statearr_25351_25415[(1)] = (11));
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
});})(c__12292__auto___25361,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25361,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25355[(0)] = state_machine__12278__auto__);
(statearr_25355[(1)] = (1));
return statearr_25355;
});
var state_machine__12278__auto____1 = (function (state_25267){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25267);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25356){if((e25356 instanceof Object))
{var ex__12281__auto__ = e25356;var statearr_25357_25416 = state_25267;(statearr_25357_25416[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25267);
return cljs.core.constant$keyword$82;
} else
{throw e25356;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25417 = state_25267;
state_25267 = G__25417;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25267){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25361,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25358 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25361);
return statearr_25358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25361,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25422 = {};return obj25422;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25426 = x__4277__auto__;return goog.typeOf(G__25426);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25430 = x__4277__auto__;return goog.typeOf(G__25430);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25434 = x__4277__auto__;return goog.typeOf(G__25434);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25438 = x__4277__auto__;return goog.typeOf(G__25438);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25442 = x__4277__auto__;return goog.typeOf(G__25442);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25443){var map__25449 = p__25443;var map__25449__$1 = ((cljs.core.seq_QMARK_(map__25449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25449):map__25449);var opts = map__25449__$1;var statearr_25450_25454 = state;(statearr_25450_25454[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25449,map__25449__$1,opts){
return (function (val){var statearr_25451_25455 = state;(statearr_25451_25455[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25449,map__25449__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25452_25456 = state;(statearr_25452_25456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25453 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25453) : cljs.core.deref.call(null,G__25453));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25443 = null;if (arguments.length > 3) {
  p__25443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25443);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25457){
var state = cljs.core.first(arglist__25457);
arglist__25457 = cljs.core.next(arglist__25457);
var cont_block = cljs.core.first(arglist__25457);
arglist__25457 = cljs.core.next(arglist__25457);
var ports = cljs.core.first(arglist__25457);
var p__25443 = cljs.core.rest(arglist__25457);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25443);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25591 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25591) : cljs.core.atom.call(null,G__25591));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25592 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25592) : cljs.core.atom.call(null,G__25592));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25593 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25593) : attr.call(null,G__25593));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25594 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25594) : cljs.core.deref.call(null,G__25594));
})();var mode = (function (){var G__25595 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25595) : cljs.core.deref.call(null,G__25595));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25596 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25597){
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
this.meta25597 = meta25597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25596.cljs$lang$type = true;
cljs.core.async.t25596.cljs$lang$ctorStr = "cljs.core.async/t25596";
cljs.core.async.t25596.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25596");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25599_25724 = self__.cs;var G__25600_25725 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25599_25724,G__25600_25725) : cljs.core.reset_BANG_.call(null,G__25599_25724,G__25600_25725));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25601 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25601) : self__.solo_modes.call(null,G__25601));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25602_25726 = self__.solo_mode;var G__25603_25727 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25602_25726,G__25603_25727) : cljs.core.reset_BANG_.call(null,G__25602_25726,G__25603_25727));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25598){var self__ = this;
var _25598__$1 = this;return self__.meta25597;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25598,meta25597__$1){var self__ = this;
var _25598__$1 = this;return (new cljs.core.async.t25596(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25597__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25596 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25597){return (new cljs.core.async.t25596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25597));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25596(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25675){var state_val_25676 = (state_25675[(1)]);if((state_val_25676 === (7)))
{var inst_25617 = (state_25675[(7)]);var inst_25622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25617);var state_25675__$1 = state_25675;var statearr_25677_25729 = state_25675__$1;(statearr_25677_25729[(2)] = inst_25622);
(statearr_25677_25729[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (20)))
{var inst_25632 = (state_25675[(8)]);var state_25675__$1 = state_25675;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25675__$1,(23),out,inst_25632);
} else
{if((state_val_25676 === (1)))
{var inst_25607 = (state_25675[(9)]);var inst_25607__$1 = calc_state();var inst_25608 = cljs.core.seq_QMARK_(inst_25607__$1);var state_25675__$1 = (function (){var statearr_25678 = state_25675;(statearr_25678[(9)] = inst_25607__$1);
return statearr_25678;
})();if(inst_25608)
{var statearr_25679_25730 = state_25675__$1;(statearr_25679_25730[(1)] = (2));
} else
{var statearr_25680_25731 = state_25675__$1;(statearr_25680_25731[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (24)))
{var inst_25625 = (state_25675[(10)]);var inst_25617 = inst_25625;var state_25675__$1 = (function (){var statearr_25681 = state_25675;(statearr_25681[(7)] = inst_25617);
return statearr_25681;
})();var statearr_25682_25732 = state_25675__$1;(statearr_25682_25732[(2)] = null);
(statearr_25682_25732[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (4)))
{var inst_25607 = (state_25675[(9)]);var inst_25613 = (state_25675[(2)]);var inst_25614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,cljs.core.constant$keyword$96);var inst_25615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,cljs.core.constant$keyword$95);var inst_25616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25613,cljs.core.constant$keyword$94);var inst_25617 = inst_25607;var state_25675__$1 = (function (){var statearr_25683 = state_25675;(statearr_25683[(11)] = inst_25616);
(statearr_25683[(12)] = inst_25615);
(statearr_25683[(13)] = inst_25614);
(statearr_25683[(7)] = inst_25617);
return statearr_25683;
})();var statearr_25684_25733 = state_25675__$1;(statearr_25684_25733[(2)] = null);
(statearr_25684_25733[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (15)))
{var state_25675__$1 = state_25675;var statearr_25685_25734 = state_25675__$1;(statearr_25685_25734[(2)] = null);
(statearr_25685_25734[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (21)))
{var inst_25625 = (state_25675[(10)]);var inst_25617 = inst_25625;var state_25675__$1 = (function (){var statearr_25686 = state_25675;(statearr_25686[(7)] = inst_25617);
return statearr_25686;
})();var statearr_25687_25735 = state_25675__$1;(statearr_25687_25735[(2)] = null);
(statearr_25687_25735[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (13)))
{var inst_25671 = (state_25675[(2)]);var state_25675__$1 = state_25675;var statearr_25688_25736 = state_25675__$1;(statearr_25688_25736[(2)] = inst_25671);
(statearr_25688_25736[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (22)))
{var inst_25669 = (state_25675[(2)]);var state_25675__$1 = state_25675;var statearr_25689_25737 = state_25675__$1;(statearr_25689_25737[(2)] = inst_25669);
(statearr_25689_25737[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (6)))
{var inst_25673 = (state_25675[(2)]);var state_25675__$1 = state_25675;return cljs.core.async.impl.ioc_helpers.return_chan(state_25675__$1,inst_25673);
} else
{if((state_val_25676 === (25)))
{var state_25675__$1 = state_25675;var statearr_25690_25738 = state_25675__$1;(statearr_25690_25738[(2)] = null);
(statearr_25690_25738[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (17)))
{var inst_25648 = (state_25675[(14)]);var state_25675__$1 = state_25675;var statearr_25691_25739 = state_25675__$1;(statearr_25691_25739[(2)] = inst_25648);
(statearr_25691_25739[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (3)))
{var inst_25607 = (state_25675[(9)]);var state_25675__$1 = state_25675;var statearr_25692_25740 = state_25675__$1;(statearr_25692_25740[(2)] = inst_25607);
(statearr_25692_25740[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (12)))
{var inst_25628 = (state_25675[(15)]);var inst_25648 = (state_25675[(14)]);var inst_25633 = (state_25675[(16)]);var inst_25648__$1 = (function (){var G__25693 = inst_25633;return (inst_25628.cljs$core$IFn$_invoke$arity$1 ? inst_25628.cljs$core$IFn$_invoke$arity$1(G__25693) : inst_25628.call(null,G__25693));
})();var state_25675__$1 = (function (){var statearr_25694 = state_25675;(statearr_25694[(14)] = inst_25648__$1);
return statearr_25694;
})();if(cljs.core.truth_(inst_25648__$1))
{var statearr_25695_25741 = state_25675__$1;(statearr_25695_25741[(1)] = (17));
} else
{var statearr_25696_25742 = state_25675__$1;(statearr_25696_25742[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (2)))
{var inst_25607 = (state_25675[(9)]);var inst_25610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25607);var state_25675__$1 = state_25675;var statearr_25697_25743 = state_25675__$1;(statearr_25697_25743[(2)] = inst_25610);
(statearr_25697_25743[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (23)))
{var inst_25660 = (state_25675[(2)]);var state_25675__$1 = state_25675;if(cljs.core.truth_(inst_25660))
{var statearr_25698_25744 = state_25675__$1;(statearr_25698_25744[(1)] = (24));
} else
{var statearr_25699_25745 = state_25675__$1;(statearr_25699_25745[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (19)))
{var inst_25657 = (state_25675[(2)]);var state_25675__$1 = state_25675;if(cljs.core.truth_(inst_25657))
{var statearr_25700_25746 = state_25675__$1;(statearr_25700_25746[(1)] = (20));
} else
{var statearr_25701_25747 = state_25675__$1;(statearr_25701_25747[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (11)))
{var inst_25632 = (state_25675[(8)]);var inst_25638 = (inst_25632 == null);var state_25675__$1 = state_25675;if(cljs.core.truth_(inst_25638))
{var statearr_25702_25748 = state_25675__$1;(statearr_25702_25748[(1)] = (14));
} else
{var statearr_25703_25749 = state_25675__$1;(statearr_25703_25749[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (9)))
{var inst_25625 = (state_25675[(10)]);var inst_25625__$1 = (state_25675[(2)]);var inst_25626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25625__$1,cljs.core.constant$keyword$96);var inst_25627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25625__$1,cljs.core.constant$keyword$95);var inst_25628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25625__$1,cljs.core.constant$keyword$94);var state_25675__$1 = (function (){var statearr_25704 = state_25675;(statearr_25704[(15)] = inst_25628);
(statearr_25704[(17)] = inst_25627);
(statearr_25704[(10)] = inst_25625__$1);
return statearr_25704;
})();return cljs.core.async.ioc_alts_BANG_(state_25675__$1,(10),inst_25626);
} else
{if((state_val_25676 === (5)))
{var inst_25617 = (state_25675[(7)]);var inst_25620 = cljs.core.seq_QMARK_(inst_25617);var state_25675__$1 = state_25675;if(inst_25620)
{var statearr_25705_25750 = state_25675__$1;(statearr_25705_25750[(1)] = (7));
} else
{var statearr_25706_25751 = state_25675__$1;(statearr_25706_25751[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (14)))
{var inst_25633 = (state_25675[(16)]);var inst_25640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25633);var state_25675__$1 = state_25675;var statearr_25707_25752 = state_25675__$1;(statearr_25707_25752[(2)] = inst_25640);
(statearr_25707_25752[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (26)))
{var inst_25665 = (state_25675[(2)]);var state_25675__$1 = state_25675;var statearr_25708_25753 = state_25675__$1;(statearr_25708_25753[(2)] = inst_25665);
(statearr_25708_25753[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (16)))
{var inst_25643 = (state_25675[(2)]);var inst_25644 = calc_state();var inst_25617 = inst_25644;var state_25675__$1 = (function (){var statearr_25709 = state_25675;(statearr_25709[(18)] = inst_25643);
(statearr_25709[(7)] = inst_25617);
return statearr_25709;
})();var statearr_25710_25754 = state_25675__$1;(statearr_25710_25754[(2)] = null);
(statearr_25710_25754[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (10)))
{var inst_25633 = (state_25675[(16)]);var inst_25632 = (state_25675[(8)]);var inst_25631 = (state_25675[(2)]);var inst_25632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25631,(0),null);var inst_25633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25631,(1),null);var inst_25634 = (inst_25632__$1 == null);var inst_25635 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25633__$1,change);var inst_25636 = (inst_25634) || (inst_25635);var state_25675__$1 = (function (){var statearr_25711 = state_25675;(statearr_25711[(16)] = inst_25633__$1);
(statearr_25711[(8)] = inst_25632__$1);
return statearr_25711;
})();if(cljs.core.truth_(inst_25636))
{var statearr_25712_25755 = state_25675__$1;(statearr_25712_25755[(1)] = (11));
} else
{var statearr_25713_25756 = state_25675__$1;(statearr_25713_25756[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (18)))
{var inst_25628 = (state_25675[(15)]);var inst_25633 = (state_25675[(16)]);var inst_25627 = (state_25675[(17)]);var inst_25652 = cljs.core.empty_QMARK_(inst_25628);var inst_25653 = (function (){var G__25714 = inst_25633;return (inst_25627.cljs$core$IFn$_invoke$arity$1 ? inst_25627.cljs$core$IFn$_invoke$arity$1(G__25714) : inst_25627.call(null,G__25714));
})();var inst_25654 = cljs.core.not(inst_25653);var inst_25655 = (inst_25652) && (inst_25654);var state_25675__$1 = state_25675;var statearr_25715_25757 = state_25675__$1;(statearr_25715_25757[(2)] = inst_25655);
(statearr_25715_25757[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25676 === (8)))
{var inst_25617 = (state_25675[(7)]);var state_25675__$1 = state_25675;var statearr_25716_25758 = state_25675__$1;(statearr_25716_25758[(2)] = inst_25617);
(statearr_25716_25758[(1)] = (9));
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
});})(c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25720[(0)] = state_machine__12278__auto__);
(statearr_25720[(1)] = (1));
return statearr_25720;
});
var state_machine__12278__auto____1 = (function (state_25675){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25675);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25721){if((e25721 instanceof Object))
{var ex__12281__auto__ = e25721;var statearr_25722_25759 = state_25675;(statearr_25722_25759[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25675);
return cljs.core.constant$keyword$82;
} else
{throw e25721;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25760 = state_25675;
state_25675 = G__25760;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25675){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25723 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25728);
return statearr_25723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25762 = {};return obj25762;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25766 = x__4277__auto__;return goog.typeOf(G__25766);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25770 = x__4277__auto__;return goog.typeOf(G__25770);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25776 = x__4277__auto__;return goog.typeOf(G__25776);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25778 = x__4277__auto__;return goog.typeOf(G__25778);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25917 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25917) : cljs.core.atom.call(null,G__25917));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25919 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25919) : cljs.core.deref.call(null,G__25919));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25779_SHARP_){if(cljs.core.truth_((function (){var G__25920 = topic;return (p1__25779_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25779_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25920) : p1__25779_SHARP_.call(null,G__25920));
})()))
{return p1__25779_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25779_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25921 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25921) : buf_fn.call(null,G__25921));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25922 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25923){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25923 = meta25923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25922.cljs$lang$type = true;
cljs.core.async.t25922.cljs$lang$ctorStr = "cljs.core.async/t25922";
cljs.core.async.t25922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25922");
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25925 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25925) : self__.ensure_mult.call(null,G__25925));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25926 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25926) : cljs.core.deref.call(null,G__25926));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25927 = self__.mults;var G__25928 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25927,G__25928) : cljs.core.reset_BANG_.call(null,G__25927,G__25928));
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25924){var self__ = this;
var _25924__$1 = this;return self__.meta25923;
});})(mults,ensure_mult))
;
cljs.core.async.t25922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25924,meta25923__$1){var self__ = this;
var _25924__$1 = this;return (new cljs.core.async.t25922(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25923__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25922 = ((function (mults,ensure_mult){
return (function __GT_t25922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25923){return (new cljs.core.async.t25922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25923));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25922(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26051,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26051,mults,ensure_mult,p){
return (function (state_26000){var state_val_26001 = (state_26000[(1)]);if((state_val_26001 === (7)))
{var inst_25996 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26002_26052 = state_26000__$1;(statearr_26002_26052[(2)] = inst_25996);
(statearr_26002_26052[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (20)))
{var state_26000__$1 = state_26000;var statearr_26003_26053 = state_26000__$1;(statearr_26003_26053[(2)] = null);
(statearr_26003_26053[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (1)))
{var state_26000__$1 = state_26000;var statearr_26004_26054 = state_26000__$1;(statearr_26004_26054[(2)] = null);
(statearr_26004_26054[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (24)))
{var inst_25979 = (state_26000[(7)]);var inst_25988 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25979);var state_26000__$1 = state_26000;var statearr_26005_26055 = state_26000__$1;(statearr_26005_26055[(2)] = inst_25988);
(statearr_26005_26055[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (4)))
{var inst_25931 = (state_26000[(8)]);var inst_25931__$1 = (state_26000[(2)]);var inst_25932 = (inst_25931__$1 == null);var state_26000__$1 = (function (){var statearr_26006 = state_26000;(statearr_26006[(8)] = inst_25931__$1);
return statearr_26006;
})();if(cljs.core.truth_(inst_25932))
{var statearr_26007_26056 = state_26000__$1;(statearr_26007_26056[(1)] = (5));
} else
{var statearr_26008_26057 = state_26000__$1;(statearr_26008_26057[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (15)))
{var inst_25973 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26009_26058 = state_26000__$1;(statearr_26009_26058[(2)] = inst_25973);
(statearr_26009_26058[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (21)))
{var inst_25993 = (state_26000[(2)]);var state_26000__$1 = (function (){var statearr_26010 = state_26000;(statearr_26010[(9)] = inst_25993);
return statearr_26010;
})();var statearr_26011_26059 = state_26000__$1;(statearr_26011_26059[(2)] = null);
(statearr_26011_26059[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (13)))
{var inst_25955 = (state_26000[(10)]);var inst_25957 = cljs.core.chunked_seq_QMARK_(inst_25955);var state_26000__$1 = state_26000;if(inst_25957)
{var statearr_26012_26060 = state_26000__$1;(statearr_26012_26060[(1)] = (16));
} else
{var statearr_26013_26061 = state_26000__$1;(statearr_26013_26061[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (22)))
{var inst_25985 = (state_26000[(2)]);var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25985))
{var statearr_26014_26062 = state_26000__$1;(statearr_26014_26062[(1)] = (23));
} else
{var statearr_26015_26063 = state_26000__$1;(statearr_26015_26063[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (6)))
{var inst_25979 = (state_26000[(7)]);var inst_25931 = (state_26000[(8)]);var inst_25981 = (state_26000[(11)]);var inst_25979__$1 = (function (){var G__26016 = inst_25931;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26016) : topic_fn.call(null,G__26016));
})();var inst_25980 = (function (){var G__26017 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26017) : cljs.core.deref.call(null,G__26017));
})();var inst_25981__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25980,inst_25979__$1);var state_26000__$1 = (function (){var statearr_26018 = state_26000;(statearr_26018[(7)] = inst_25979__$1);
(statearr_26018[(11)] = inst_25981__$1);
return statearr_26018;
})();if(cljs.core.truth_(inst_25981__$1))
{var statearr_26019_26064 = state_26000__$1;(statearr_26019_26064[(1)] = (19));
} else
{var statearr_26020_26065 = state_26000__$1;(statearr_26020_26065[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (25)))
{var inst_25990 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26021_26066 = state_26000__$1;(statearr_26021_26066[(2)] = inst_25990);
(statearr_26021_26066[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (17)))
{var inst_25955 = (state_26000[(10)]);var inst_25964 = cljs.core.first(inst_25955);var inst_25965 = cljs.core.async.muxch_STAR_(inst_25964);var inst_25966 = cljs.core.async.close_BANG_(inst_25965);var inst_25967 = cljs.core.next(inst_25955);var inst_25941 = inst_25967;var inst_25942 = null;var inst_25943 = (0);var inst_25944 = (0);var state_26000__$1 = (function (){var statearr_26022 = state_26000;(statearr_26022[(12)] = inst_25941);
(statearr_26022[(13)] = inst_25943);
(statearr_26022[(14)] = inst_25942);
(statearr_26022[(15)] = inst_25966);
(statearr_26022[(16)] = inst_25944);
return statearr_26022;
})();var statearr_26023_26067 = state_26000__$1;(statearr_26023_26067[(2)] = null);
(statearr_26023_26067[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (3)))
{var inst_25998 = (state_26000[(2)]);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.return_chan(state_26000__$1,inst_25998);
} else
{if((state_val_26001 === (12)))
{var inst_25975 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26024_26068 = state_26000__$1;(statearr_26024_26068[(2)] = inst_25975);
(statearr_26024_26068[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (2)))
{var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26000__$1,(4),ch);
} else
{if((state_val_26001 === (23)))
{var state_26000__$1 = state_26000;var statearr_26025_26069 = state_26000__$1;(statearr_26025_26069[(2)] = null);
(statearr_26025_26069[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (19)))
{var inst_25931 = (state_26000[(8)]);var inst_25981 = (state_26000[(11)]);var inst_25983 = cljs.core.async.muxch_STAR_(inst_25981);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26000__$1,(22),inst_25983,inst_25931);
} else
{if((state_val_26001 === (11)))
{var inst_25941 = (state_26000[(12)]);var inst_25955 = (state_26000[(10)]);var inst_25955__$1 = cljs.core.seq(inst_25941);var state_26000__$1 = (function (){var statearr_26026 = state_26000;(statearr_26026[(10)] = inst_25955__$1);
return statearr_26026;
})();if(inst_25955__$1)
{var statearr_26027_26070 = state_26000__$1;(statearr_26027_26070[(1)] = (13));
} else
{var statearr_26028_26071 = state_26000__$1;(statearr_26028_26071[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (9)))
{var inst_25977 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26029_26072 = state_26000__$1;(statearr_26029_26072[(2)] = inst_25977);
(statearr_26029_26072[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (5)))
{var inst_25938 = (function (){var G__26030 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26030) : cljs.core.deref.call(null,G__26030));
})();var inst_25939 = cljs.core.vals(inst_25938);var inst_25940 = cljs.core.seq(inst_25939);var inst_25941 = inst_25940;var inst_25942 = null;var inst_25943 = (0);var inst_25944 = (0);var state_26000__$1 = (function (){var statearr_26031 = state_26000;(statearr_26031[(12)] = inst_25941);
(statearr_26031[(13)] = inst_25943);
(statearr_26031[(14)] = inst_25942);
(statearr_26031[(16)] = inst_25944);
return statearr_26031;
})();var statearr_26032_26073 = state_26000__$1;(statearr_26032_26073[(2)] = null);
(statearr_26032_26073[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (14)))
{var state_26000__$1 = state_26000;var statearr_26036_26074 = state_26000__$1;(statearr_26036_26074[(2)] = null);
(statearr_26036_26074[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (16)))
{var inst_25955 = (state_26000[(10)]);var inst_25959 = cljs.core.chunk_first(inst_25955);var inst_25960 = cljs.core.chunk_rest(inst_25955);var inst_25961 = cljs.core.count(inst_25959);var inst_25941 = inst_25960;var inst_25942 = inst_25959;var inst_25943 = inst_25961;var inst_25944 = (0);var state_26000__$1 = (function (){var statearr_26037 = state_26000;(statearr_26037[(12)] = inst_25941);
(statearr_26037[(13)] = inst_25943);
(statearr_26037[(14)] = inst_25942);
(statearr_26037[(16)] = inst_25944);
return statearr_26037;
})();var statearr_26038_26075 = state_26000__$1;(statearr_26038_26075[(2)] = null);
(statearr_26038_26075[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (10)))
{var inst_25941 = (state_26000[(12)]);var inst_25943 = (state_26000[(13)]);var inst_25942 = (state_26000[(14)]);var inst_25944 = (state_26000[(16)]);var inst_25949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25942,inst_25944);var inst_25950 = cljs.core.async.muxch_STAR_(inst_25949);var inst_25951 = cljs.core.async.close_BANG_(inst_25950);var inst_25952 = (inst_25944 + (1));var tmp26033 = inst_25941;var tmp26034 = inst_25943;var tmp26035 = inst_25942;var inst_25941__$1 = tmp26033;var inst_25942__$1 = tmp26035;var inst_25943__$1 = tmp26034;var inst_25944__$1 = inst_25952;var state_26000__$1 = (function (){var statearr_26039 = state_26000;(statearr_26039[(12)] = inst_25941__$1);
(statearr_26039[(13)] = inst_25943__$1);
(statearr_26039[(14)] = inst_25942__$1);
(statearr_26039[(16)] = inst_25944__$1);
(statearr_26039[(17)] = inst_25951);
return statearr_26039;
})();var statearr_26040_26076 = state_26000__$1;(statearr_26040_26076[(2)] = null);
(statearr_26040_26076[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (18)))
{var inst_25970 = (state_26000[(2)]);var state_26000__$1 = state_26000;var statearr_26041_26077 = state_26000__$1;(statearr_26041_26077[(2)] = inst_25970);
(statearr_26041_26077[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26001 === (8)))
{var inst_25943 = (state_26000[(13)]);var inst_25944 = (state_26000[(16)]);var inst_25946 = (inst_25944 < inst_25943);var inst_25947 = inst_25946;var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25947))
{var statearr_26042_26078 = state_26000__$1;(statearr_26042_26078[(1)] = (10));
} else
{var statearr_26043_26079 = state_26000__$1;(statearr_26043_26079[(1)] = (11));
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
});})(c__12292__auto___26051,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26051,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26047[(0)] = state_machine__12278__auto__);
(statearr_26047[(1)] = (1));
return statearr_26047;
});
var state_machine__12278__auto____1 = (function (state_26000){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26000);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26048){if((e26048 instanceof Object))
{var ex__12281__auto__ = e26048;var statearr_26049_26080 = state_26000;(statearr_26049_26080[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26000);
return cljs.core.constant$keyword$82;
} else
{throw e26048;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26081 = state_26000;
state_26000 = G__26081;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26051,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26050 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26051);
return statearr_26050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26051,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26162 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26162) : cljs.core.atom.call(null,G__26162));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26201){var state_val_26202 = (state_26201[(1)]);if((state_val_26202 === (7)))
{var state_26201__$1 = state_26201;var statearr_26203_26236 = state_26201__$1;(statearr_26203_26236[(2)] = null);
(statearr_26203_26236[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (1)))
{var state_26201__$1 = state_26201;var statearr_26204_26237 = state_26201__$1;(statearr_26204_26237[(2)] = null);
(statearr_26204_26237[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (4)))
{var inst_26165 = (state_26201[(7)]);var inst_26167 = (inst_26165 < cnt);var state_26201__$1 = state_26201;if(cljs.core.truth_(inst_26167))
{var statearr_26205_26238 = state_26201__$1;(statearr_26205_26238[(1)] = (6));
} else
{var statearr_26206_26239 = state_26201__$1;(statearr_26206_26239[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (15)))
{var inst_26197 = (state_26201[(2)]);var state_26201__$1 = state_26201;var statearr_26207_26240 = state_26201__$1;(statearr_26207_26240[(2)] = inst_26197);
(statearr_26207_26240[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (13)))
{var inst_26190 = cljs.core.async.close_BANG_(out);var state_26201__$1 = state_26201;var statearr_26208_26241 = state_26201__$1;(statearr_26208_26241[(2)] = inst_26190);
(statearr_26208_26241[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (6)))
{var state_26201__$1 = state_26201;var statearr_26209_26242 = state_26201__$1;(statearr_26209_26242[(2)] = null);
(statearr_26209_26242[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (3)))
{var inst_26199 = (state_26201[(2)]);var state_26201__$1 = state_26201;return cljs.core.async.impl.ioc_helpers.return_chan(state_26201__$1,inst_26199);
} else
{if((state_val_26202 === (12)))
{var inst_26187 = (state_26201[(8)]);var inst_26187__$1 = (state_26201[(2)]);var inst_26188 = cljs.core.some(cljs.core.nil_QMARK_,inst_26187__$1);var state_26201__$1 = (function (){var statearr_26210 = state_26201;(statearr_26210[(8)] = inst_26187__$1);
return statearr_26210;
})();if(cljs.core.truth_(inst_26188))
{var statearr_26211_26243 = state_26201__$1;(statearr_26211_26243[(1)] = (13));
} else
{var statearr_26212_26244 = state_26201__$1;(statearr_26212_26244[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (2)))
{var inst_26164 = (function (){var G__26213 = dctr;var G__26214 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26213,G__26214) : cljs.core.reset_BANG_.call(null,G__26213,G__26214));
})();var inst_26165 = (0);var state_26201__$1 = (function (){var statearr_26215 = state_26201;(statearr_26215[(9)] = inst_26164);
(statearr_26215[(7)] = inst_26165);
return statearr_26215;
})();var statearr_26216_26245 = state_26201__$1;(statearr_26216_26245[(2)] = null);
(statearr_26216_26245[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (11)))
{var inst_26165 = (state_26201[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26201,(10),Object,null,(9));var inst_26174 = (function (){var G__26217 = inst_26165;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26217) : chs__$1.call(null,G__26217));
})();var inst_26175 = (function (){var G__26218 = inst_26165;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26218) : done.call(null,G__26218));
})();var inst_26176 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26174,inst_26175);var state_26201__$1 = state_26201;var statearr_26219_26246 = state_26201__$1;(statearr_26219_26246[(2)] = inst_26176);
cljs.core.async.impl.ioc_helpers.process_exception(state_26201__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (9)))
{var inst_26165 = (state_26201[(7)]);var inst_26178 = (state_26201[(2)]);var inst_26179 = (inst_26165 + (1));var inst_26165__$1 = inst_26179;var state_26201__$1 = (function (){var statearr_26220 = state_26201;(statearr_26220[(10)] = inst_26178);
(statearr_26220[(7)] = inst_26165__$1);
return statearr_26220;
})();var statearr_26221_26247 = state_26201__$1;(statearr_26221_26247[(2)] = null);
(statearr_26221_26247[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (5)))
{var inst_26185 = (state_26201[(2)]);var state_26201__$1 = (function (){var statearr_26222 = state_26201;(statearr_26222[(11)] = inst_26185);
return statearr_26222;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26201__$1,(12),dchan);
} else
{if((state_val_26202 === (14)))
{var inst_26187 = (state_26201[(8)]);var inst_26192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26187);var state_26201__$1 = state_26201;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26201__$1,(16),out,inst_26192);
} else
{if((state_val_26202 === (16)))
{var inst_26194 = (state_26201[(2)]);var state_26201__$1 = (function (){var statearr_26223 = state_26201;(statearr_26223[(12)] = inst_26194);
return statearr_26223;
})();var statearr_26224_26248 = state_26201__$1;(statearr_26224_26248[(2)] = null);
(statearr_26224_26248[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (10)))
{var inst_26169 = (state_26201[(2)]);var inst_26170 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26201__$1 = (function (){var statearr_26225 = state_26201;(statearr_26225[(13)] = inst_26169);
return statearr_26225;
})();var statearr_26226_26249 = state_26201__$1;(statearr_26226_26249[(2)] = inst_26170);
cljs.core.async.impl.ioc_helpers.process_exception(state_26201__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26202 === (8)))
{var inst_26183 = (state_26201[(2)]);var state_26201__$1 = state_26201;var statearr_26227_26250 = state_26201__$1;(statearr_26227_26250[(2)] = inst_26183);
(statearr_26227_26250[(1)] = (5));
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
});})(c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26231[(0)] = state_machine__12278__auto__);
(statearr_26231[(1)] = (1));
return statearr_26231;
});
var state_machine__12278__auto____1 = (function (state_26201){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26201);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26232){if((e26232 instanceof Object))
{var ex__12281__auto__ = e26232;var statearr_26233_26251 = state_26201;(statearr_26233_26251[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26201);
return cljs.core.constant$keyword$82;
} else
{throw e26232;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26252 = state_26201;
state_26201 = G__26252;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26201){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26234 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26235);
return statearr_26234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26235,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26362,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26362,out){
return (function (state_26338){var state_val_26339 = (state_26338[(1)]);if((state_val_26339 === (7)))
{var inst_26318 = (state_26338[(7)]);var inst_26317 = (state_26338[(8)]);var inst_26317__$1 = (state_26338[(2)]);var inst_26318__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26317__$1,(0),null);var inst_26319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26317__$1,(1),null);var inst_26320 = (inst_26318__$1 == null);var state_26338__$1 = (function (){var statearr_26340 = state_26338;(statearr_26340[(7)] = inst_26318__$1);
(statearr_26340[(9)] = inst_26319);
(statearr_26340[(8)] = inst_26317__$1);
return statearr_26340;
})();if(cljs.core.truth_(inst_26320))
{var statearr_26341_26363 = state_26338__$1;(statearr_26341_26363[(1)] = (8));
} else
{var statearr_26342_26364 = state_26338__$1;(statearr_26342_26364[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (1)))
{var inst_26309 = cljs.core.vec(chs);var inst_26310 = inst_26309;var state_26338__$1 = (function (){var statearr_26343 = state_26338;(statearr_26343[(10)] = inst_26310);
return statearr_26343;
})();var statearr_26344_26365 = state_26338__$1;(statearr_26344_26365[(2)] = null);
(statearr_26344_26365[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (4)))
{var inst_26310 = (state_26338[(10)]);var state_26338__$1 = state_26338;return cljs.core.async.ioc_alts_BANG_(state_26338__$1,(7),inst_26310);
} else
{if((state_val_26339 === (6)))
{var inst_26334 = (state_26338[(2)]);var state_26338__$1 = state_26338;var statearr_26345_26366 = state_26338__$1;(statearr_26345_26366[(2)] = inst_26334);
(statearr_26345_26366[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (3)))
{var inst_26336 = (state_26338[(2)]);var state_26338__$1 = state_26338;return cljs.core.async.impl.ioc_helpers.return_chan(state_26338__$1,inst_26336);
} else
{if((state_val_26339 === (2)))
{var inst_26310 = (state_26338[(10)]);var inst_26312 = cljs.core.count(inst_26310);var inst_26313 = (inst_26312 > (0));var state_26338__$1 = state_26338;if(cljs.core.truth_(inst_26313))
{var statearr_26347_26367 = state_26338__$1;(statearr_26347_26367[(1)] = (4));
} else
{var statearr_26348_26368 = state_26338__$1;(statearr_26348_26368[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (11)))
{var inst_26310 = (state_26338[(10)]);var inst_26327 = (state_26338[(2)]);var tmp26346 = inst_26310;var inst_26310__$1 = tmp26346;var state_26338__$1 = (function (){var statearr_26349 = state_26338;(statearr_26349[(10)] = inst_26310__$1);
(statearr_26349[(11)] = inst_26327);
return statearr_26349;
})();var statearr_26350_26369 = state_26338__$1;(statearr_26350_26369[(2)] = null);
(statearr_26350_26369[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (9)))
{var inst_26318 = (state_26338[(7)]);var state_26338__$1 = state_26338;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26338__$1,(11),out,inst_26318);
} else
{if((state_val_26339 === (5)))
{var inst_26332 = cljs.core.async.close_BANG_(out);var state_26338__$1 = state_26338;var statearr_26351_26370 = state_26338__$1;(statearr_26351_26370[(2)] = inst_26332);
(statearr_26351_26370[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (10)))
{var inst_26330 = (state_26338[(2)]);var state_26338__$1 = state_26338;var statearr_26352_26371 = state_26338__$1;(statearr_26352_26371[(2)] = inst_26330);
(statearr_26352_26371[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26339 === (8)))
{var inst_26310 = (state_26338[(10)]);var inst_26318 = (state_26338[(7)]);var inst_26319 = (state_26338[(9)]);var inst_26317 = (state_26338[(8)]);var inst_26322 = (function (){var c = inst_26319;var v = inst_26318;var vec__26315 = inst_26317;var cs = inst_26310;return ((function (c,v,vec__26315,cs,inst_26310,inst_26318,inst_26319,inst_26317,state_val_26339,c__12292__auto___26362,out){
return (function (p1__26253_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26253_SHARP_);
});
;})(c,v,vec__26315,cs,inst_26310,inst_26318,inst_26319,inst_26317,state_val_26339,c__12292__auto___26362,out))
})();var inst_26323 = cljs.core.filterv(inst_26322,inst_26310);var inst_26310__$1 = inst_26323;var state_26338__$1 = (function (){var statearr_26353 = state_26338;(statearr_26353[(10)] = inst_26310__$1);
return statearr_26353;
})();var statearr_26354_26372 = state_26338__$1;(statearr_26354_26372[(2)] = null);
(statearr_26354_26372[(1)] = (2));
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
});})(c__12292__auto___26362,out))
;return ((function (switch__12277__auto__,c__12292__auto___26362,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26358 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26358[(0)] = state_machine__12278__auto__);
(statearr_26358[(1)] = (1));
return statearr_26358;
});
var state_machine__12278__auto____1 = (function (state_26338){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26338);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26359){if((e26359 instanceof Object))
{var ex__12281__auto__ = e26359;var statearr_26360_26373 = state_26338;(statearr_26360_26373[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26338);
return cljs.core.constant$keyword$82;
} else
{throw e26359;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26374 = state_26338;
state_26338 = G__26374;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26362,out))
})();var state__12294__auto__ = (function (){var statearr_26361 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26362);
return statearr_26361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26362,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26470,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26470,out){
return (function (state_26447){var state_val_26448 = (state_26447[(1)]);if((state_val_26448 === (7)))
{var inst_26429 = (state_26447[(7)]);var inst_26429__$1 = (state_26447[(2)]);var inst_26430 = (inst_26429__$1 == null);var inst_26431 = cljs.core.not(inst_26430);var state_26447__$1 = (function (){var statearr_26449 = state_26447;(statearr_26449[(7)] = inst_26429__$1);
return statearr_26449;
})();if(inst_26431)
{var statearr_26450_26471 = state_26447__$1;(statearr_26450_26471[(1)] = (8));
} else
{var statearr_26451_26472 = state_26447__$1;(statearr_26451_26472[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (1)))
{var inst_26424 = (0);var state_26447__$1 = (function (){var statearr_26452 = state_26447;(statearr_26452[(8)] = inst_26424);
return statearr_26452;
})();var statearr_26453_26473 = state_26447__$1;(statearr_26453_26473[(2)] = null);
(statearr_26453_26473[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (4)))
{var state_26447__$1 = state_26447;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26447__$1,(7),ch);
} else
{if((state_val_26448 === (6)))
{var inst_26442 = (state_26447[(2)]);var state_26447__$1 = state_26447;var statearr_26454_26474 = state_26447__$1;(statearr_26454_26474[(2)] = inst_26442);
(statearr_26454_26474[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (3)))
{var inst_26444 = (state_26447[(2)]);var inst_26445 = cljs.core.async.close_BANG_(out);var state_26447__$1 = (function (){var statearr_26455 = state_26447;(statearr_26455[(9)] = inst_26444);
return statearr_26455;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26447__$1,inst_26445);
} else
{if((state_val_26448 === (2)))
{var inst_26424 = (state_26447[(8)]);var inst_26426 = (inst_26424 < n);var state_26447__$1 = state_26447;if(cljs.core.truth_(inst_26426))
{var statearr_26456_26475 = state_26447__$1;(statearr_26456_26475[(1)] = (4));
} else
{var statearr_26457_26476 = state_26447__$1;(statearr_26457_26476[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (11)))
{var inst_26424 = (state_26447[(8)]);var inst_26434 = (state_26447[(2)]);var inst_26435 = (inst_26424 + (1));var inst_26424__$1 = inst_26435;var state_26447__$1 = (function (){var statearr_26458 = state_26447;(statearr_26458[(8)] = inst_26424__$1);
(statearr_26458[(10)] = inst_26434);
return statearr_26458;
})();var statearr_26459_26477 = state_26447__$1;(statearr_26459_26477[(2)] = null);
(statearr_26459_26477[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (9)))
{var state_26447__$1 = state_26447;var statearr_26460_26478 = state_26447__$1;(statearr_26460_26478[(2)] = null);
(statearr_26460_26478[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (5)))
{var state_26447__$1 = state_26447;var statearr_26461_26479 = state_26447__$1;(statearr_26461_26479[(2)] = null);
(statearr_26461_26479[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (10)))
{var inst_26439 = (state_26447[(2)]);var state_26447__$1 = state_26447;var statearr_26462_26480 = state_26447__$1;(statearr_26462_26480[(2)] = inst_26439);
(statearr_26462_26480[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26448 === (8)))
{var inst_26429 = (state_26447[(7)]);var state_26447__$1 = state_26447;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26447__$1,(11),out,inst_26429);
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
});})(c__12292__auto___26470,out))
;return ((function (switch__12277__auto__,c__12292__auto___26470,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26466 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26466[(0)] = state_machine__12278__auto__);
(statearr_26466[(1)] = (1));
return statearr_26466;
});
var state_machine__12278__auto____1 = (function (state_26447){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26447);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26467){if((e26467 instanceof Object))
{var ex__12281__auto__ = e26467;var statearr_26468_26481 = state_26447;(statearr_26468_26481[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26447);
return cljs.core.constant$keyword$82;
} else
{throw e26467;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26482 = state_26447;
state_26447 = G__26482;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26470,out))
})();var state__12294__auto__ = (function (){var statearr_26469 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26470);
return statearr_26469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26470,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26495 = (function (ch,f,map_LT_,meta26496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26496 = meta26496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26495.cljs$lang$type = true;
cljs.core.async.t26495.cljs$lang$ctorStr = "cljs.core.async/t26495";
cljs.core.async.t26495.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26495");
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26498 = (function (fn1,_,meta26496,ch,f,map_LT_,meta26499){
this.fn1 = fn1;
this._ = _;
this.meta26496 = meta26496;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26499 = meta26499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26498.cljs$lang$type = true;
cljs.core.async.t26498.cljs$lang$ctorStr = "cljs.core.async/t26498";
cljs.core.async.t26498.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26498");
});})(___$1))
;
cljs.core.async.t26498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26483_SHARP_){var G__26501 = (((p1__26483_SHARP_ == null))?null:(function (){var G__26502 = p1__26483_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26502) : self__.f.call(null,G__26502));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26501) : f1.call(null,G__26501));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26500){var self__ = this;
var _26500__$1 = this;return self__.meta26499;
});})(___$1))
;
cljs.core.async.t26498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26500,meta26499__$1){var self__ = this;
var _26500__$1 = this;return (new cljs.core.async.t26498(self__.fn1,self__._,self__.meta26496,self__.ch,self__.f,self__.map_LT_,meta26499__$1));
});})(___$1))
;
cljs.core.async.__GT_t26498 = ((function (___$1){
return (function __GT_t26498(fn1__$1,___$2,meta26496__$1,ch__$2,f__$2,map_LT___$2,meta26499){return (new cljs.core.async.t26498(fn1__$1,___$2,meta26496__$1,ch__$2,f__$2,map_LT___$2,meta26499));
});})(___$1))
;
}
return (new cljs.core.async.t26498(fn1,___$1,self__.meta26496,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26503 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26503) : cljs.core.deref.call(null,G__26503));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26504 = (function (){var G__26505 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26505) : cljs.core.deref.call(null,G__26505));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26504) : self__.f.call(null,G__26504));
})());
} else
{return ret;
}
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26497){var self__ = this;
var _26497__$1 = this;return self__.meta26496;
});
cljs.core.async.t26495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26497,meta26496__$1){var self__ = this;
var _26497__$1 = this;return (new cljs.core.async.t26495(self__.ch,self__.f,self__.map_LT_,meta26496__$1));
});
cljs.core.async.__GT_t26495 = (function __GT_t26495(ch__$1,f__$1,map_LT___$1,meta26496){return (new cljs.core.async.t26495(ch__$1,f__$1,map_LT___$1,meta26496));
});
}
return (new cljs.core.async.t26495(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26510 = (function (ch,f,map_GT_,meta26511){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26511 = meta26511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26510.cljs$lang$type = true;
cljs.core.async.t26510.cljs$lang$ctorStr = "cljs.core.async/t26510";
cljs.core.async.t26510.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26510");
});
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26513 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26513) : self__.f.call(null,G__26513));
})(),fn1);
});
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26512){var self__ = this;
var _26512__$1 = this;return self__.meta26511;
});
cljs.core.async.t26510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26512,meta26511__$1){var self__ = this;
var _26512__$1 = this;return (new cljs.core.async.t26510(self__.ch,self__.f,self__.map_GT_,meta26511__$1));
});
cljs.core.async.__GT_t26510 = (function __GT_t26510(ch__$1,f__$1,map_GT___$1,meta26511){return (new cljs.core.async.t26510(ch__$1,f__$1,map_GT___$1,meta26511));
});
}
return (new cljs.core.async.t26510(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26518 = (function (ch,p,filter_GT_,meta26519){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26519 = meta26519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26518.cljs$lang$type = true;
cljs.core.async.t26518.cljs$lang$ctorStr = "cljs.core.async/t26518";
cljs.core.async.t26518.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26518");
});
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26521 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26521) : self__.p.call(null,G__26521));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26520){var self__ = this;
var _26520__$1 = this;return self__.meta26519;
});
cljs.core.async.t26518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26520,meta26519__$1){var self__ = this;
var _26520__$1 = this;return (new cljs.core.async.t26518(self__.ch,self__.p,self__.filter_GT_,meta26519__$1));
});
cljs.core.async.__GT_t26518 = (function __GT_t26518(ch__$1,p__$1,filter_GT___$1,meta26519){return (new cljs.core.async.t26518(ch__$1,p__$1,filter_GT___$1,meta26519));
});
}
return (new cljs.core.async.t26518(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26609,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26609,out){
return (function (state_26587){var state_val_26588 = (state_26587[(1)]);if((state_val_26588 === (7)))
{var inst_26583 = (state_26587[(2)]);var state_26587__$1 = state_26587;var statearr_26589_26610 = state_26587__$1;(statearr_26589_26610[(2)] = inst_26583);
(statearr_26589_26610[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (1)))
{var state_26587__$1 = state_26587;var statearr_26590_26611 = state_26587__$1;(statearr_26590_26611[(2)] = null);
(statearr_26590_26611[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (4)))
{var inst_26569 = (state_26587[(7)]);var inst_26569__$1 = (state_26587[(2)]);var inst_26570 = (inst_26569__$1 == null);var state_26587__$1 = (function (){var statearr_26591 = state_26587;(statearr_26591[(7)] = inst_26569__$1);
return statearr_26591;
})();if(cljs.core.truth_(inst_26570))
{var statearr_26592_26612 = state_26587__$1;(statearr_26592_26612[(1)] = (5));
} else
{var statearr_26593_26613 = state_26587__$1;(statearr_26593_26613[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (6)))
{var inst_26569 = (state_26587[(7)]);var inst_26574 = (function (){var G__26594 = inst_26569;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26594) : p.call(null,G__26594));
})();var state_26587__$1 = state_26587;if(cljs.core.truth_(inst_26574))
{var statearr_26595_26614 = state_26587__$1;(statearr_26595_26614[(1)] = (8));
} else
{var statearr_26596_26615 = state_26587__$1;(statearr_26596_26615[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (3)))
{var inst_26585 = (state_26587[(2)]);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.return_chan(state_26587__$1,inst_26585);
} else
{if((state_val_26588 === (2)))
{var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26587__$1,(4),ch);
} else
{if((state_val_26588 === (11)))
{var inst_26577 = (state_26587[(2)]);var state_26587__$1 = state_26587;var statearr_26597_26616 = state_26587__$1;(statearr_26597_26616[(2)] = inst_26577);
(statearr_26597_26616[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (9)))
{var state_26587__$1 = state_26587;var statearr_26598_26617 = state_26587__$1;(statearr_26598_26617[(2)] = null);
(statearr_26598_26617[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (5)))
{var inst_26572 = cljs.core.async.close_BANG_(out);var state_26587__$1 = state_26587;var statearr_26599_26618 = state_26587__$1;(statearr_26599_26618[(2)] = inst_26572);
(statearr_26599_26618[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (10)))
{var inst_26580 = (state_26587[(2)]);var state_26587__$1 = (function (){var statearr_26600 = state_26587;(statearr_26600[(8)] = inst_26580);
return statearr_26600;
})();var statearr_26601_26619 = state_26587__$1;(statearr_26601_26619[(2)] = null);
(statearr_26601_26619[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26588 === (8)))
{var inst_26569 = (state_26587[(7)]);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26587__$1,(11),out,inst_26569);
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
});})(c__12292__auto___26609,out))
;return ((function (switch__12277__auto__,c__12292__auto___26609,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26605 = [null,null,null,null,null,null,null,null,null];(statearr_26605[(0)] = state_machine__12278__auto__);
(statearr_26605[(1)] = (1));
return statearr_26605;
});
var state_machine__12278__auto____1 = (function (state_26587){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26587);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26606){if((e26606 instanceof Object))
{var ex__12281__auto__ = e26606;var statearr_26607_26620 = state_26587;(statearr_26607_26620[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26587);
return cljs.core.constant$keyword$82;
} else
{throw e26606;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26621 = state_26587;
state_26587 = G__26621;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26609,out))
})();var state__12294__auto__ = (function (){var statearr_26608 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26609);
return statearr_26608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26609,out))
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
return (function (state_26791){var state_val_26792 = (state_26791[(1)]);if((state_val_26792 === (7)))
{var inst_26787 = (state_26791[(2)]);var state_26791__$1 = state_26791;var statearr_26793_26835 = state_26791__$1;(statearr_26793_26835[(2)] = inst_26787);
(statearr_26793_26835[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (20)))
{var inst_26757 = (state_26791[(7)]);var inst_26768 = (state_26791[(2)]);var inst_26769 = cljs.core.next(inst_26757);var inst_26743 = inst_26769;var inst_26744 = null;var inst_26745 = (0);var inst_26746 = (0);var state_26791__$1 = (function (){var statearr_26794 = state_26791;(statearr_26794[(8)] = inst_26745);
(statearr_26794[(9)] = inst_26743);
(statearr_26794[(10)] = inst_26768);
(statearr_26794[(11)] = inst_26744);
(statearr_26794[(12)] = inst_26746);
return statearr_26794;
})();var statearr_26795_26836 = state_26791__$1;(statearr_26795_26836[(2)] = null);
(statearr_26795_26836[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (1)))
{var state_26791__$1 = state_26791;var statearr_26796_26837 = state_26791__$1;(statearr_26796_26837[(2)] = null);
(statearr_26796_26837[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (4)))
{var inst_26732 = (state_26791[(13)]);var inst_26732__$1 = (state_26791[(2)]);var inst_26733 = (inst_26732__$1 == null);var state_26791__$1 = (function (){var statearr_26797 = state_26791;(statearr_26797[(13)] = inst_26732__$1);
return statearr_26797;
})();if(cljs.core.truth_(inst_26733))
{var statearr_26798_26838 = state_26791__$1;(statearr_26798_26838[(1)] = (5));
} else
{var statearr_26799_26839 = state_26791__$1;(statearr_26799_26839[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (15)))
{var state_26791__$1 = state_26791;var statearr_26803_26840 = state_26791__$1;(statearr_26803_26840[(2)] = null);
(statearr_26803_26840[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (21)))
{var state_26791__$1 = state_26791;var statearr_26804_26841 = state_26791__$1;(statearr_26804_26841[(2)] = null);
(statearr_26804_26841[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (13)))
{var inst_26745 = (state_26791[(8)]);var inst_26743 = (state_26791[(9)]);var inst_26744 = (state_26791[(11)]);var inst_26746 = (state_26791[(12)]);var inst_26753 = (state_26791[(2)]);var inst_26754 = (inst_26746 + (1));var tmp26800 = inst_26745;var tmp26801 = inst_26743;var tmp26802 = inst_26744;var inst_26743__$1 = tmp26801;var inst_26744__$1 = tmp26802;var inst_26745__$1 = tmp26800;var inst_26746__$1 = inst_26754;var state_26791__$1 = (function (){var statearr_26805 = state_26791;(statearr_26805[(8)] = inst_26745__$1);
(statearr_26805[(9)] = inst_26743__$1);
(statearr_26805[(11)] = inst_26744__$1);
(statearr_26805[(12)] = inst_26746__$1);
(statearr_26805[(14)] = inst_26753);
return statearr_26805;
})();var statearr_26806_26842 = state_26791__$1;(statearr_26806_26842[(2)] = null);
(statearr_26806_26842[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (22)))
{var state_26791__$1 = state_26791;var statearr_26807_26843 = state_26791__$1;(statearr_26807_26843[(2)] = null);
(statearr_26807_26843[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (6)))
{var inst_26732 = (state_26791[(13)]);var inst_26741 = (function (){var G__26808 = inst_26732;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26808) : f.call(null,G__26808));
})();var inst_26742 = cljs.core.seq(inst_26741);var inst_26743 = inst_26742;var inst_26744 = null;var inst_26745 = (0);var inst_26746 = (0);var state_26791__$1 = (function (){var statearr_26809 = state_26791;(statearr_26809[(8)] = inst_26745);
(statearr_26809[(9)] = inst_26743);
(statearr_26809[(11)] = inst_26744);
(statearr_26809[(12)] = inst_26746);
return statearr_26809;
})();var statearr_26810_26844 = state_26791__$1;(statearr_26810_26844[(2)] = null);
(statearr_26810_26844[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (17)))
{var inst_26757 = (state_26791[(7)]);var inst_26761 = cljs.core.chunk_first(inst_26757);var inst_26762 = cljs.core.chunk_rest(inst_26757);var inst_26763 = cljs.core.count(inst_26761);var inst_26743 = inst_26762;var inst_26744 = inst_26761;var inst_26745 = inst_26763;var inst_26746 = (0);var state_26791__$1 = (function (){var statearr_26811 = state_26791;(statearr_26811[(8)] = inst_26745);
(statearr_26811[(9)] = inst_26743);
(statearr_26811[(11)] = inst_26744);
(statearr_26811[(12)] = inst_26746);
return statearr_26811;
})();var statearr_26812_26845 = state_26791__$1;(statearr_26812_26845[(2)] = null);
(statearr_26812_26845[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (3)))
{var inst_26789 = (state_26791[(2)]);var state_26791__$1 = state_26791;return cljs.core.async.impl.ioc_helpers.return_chan(state_26791__$1,inst_26789);
} else
{if((state_val_26792 === (12)))
{var inst_26777 = (state_26791[(2)]);var state_26791__$1 = state_26791;var statearr_26813_26846 = state_26791__$1;(statearr_26813_26846[(2)] = inst_26777);
(statearr_26813_26846[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (2)))
{var state_26791__$1 = state_26791;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26791__$1,(4),in$);
} else
{if((state_val_26792 === (23)))
{var inst_26785 = (state_26791[(2)]);var state_26791__$1 = state_26791;var statearr_26814_26847 = state_26791__$1;(statearr_26814_26847[(2)] = inst_26785);
(statearr_26814_26847[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (19)))
{var inst_26772 = (state_26791[(2)]);var state_26791__$1 = state_26791;var statearr_26815_26848 = state_26791__$1;(statearr_26815_26848[(2)] = inst_26772);
(statearr_26815_26848[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (11)))
{var inst_26743 = (state_26791[(9)]);var inst_26757 = (state_26791[(7)]);var inst_26757__$1 = cljs.core.seq(inst_26743);var state_26791__$1 = (function (){var statearr_26816 = state_26791;(statearr_26816[(7)] = inst_26757__$1);
return statearr_26816;
})();if(inst_26757__$1)
{var statearr_26817_26849 = state_26791__$1;(statearr_26817_26849[(1)] = (14));
} else
{var statearr_26818_26850 = state_26791__$1;(statearr_26818_26850[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (9)))
{var inst_26779 = (state_26791[(2)]);var inst_26780 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26791__$1 = (function (){var statearr_26819 = state_26791;(statearr_26819[(15)] = inst_26779);
return statearr_26819;
})();if(cljs.core.truth_(inst_26780))
{var statearr_26820_26851 = state_26791__$1;(statearr_26820_26851[(1)] = (21));
} else
{var statearr_26821_26852 = state_26791__$1;(statearr_26821_26852[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (5)))
{var inst_26735 = cljs.core.async.close_BANG_(out);var state_26791__$1 = state_26791;var statearr_26822_26853 = state_26791__$1;(statearr_26822_26853[(2)] = inst_26735);
(statearr_26822_26853[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (14)))
{var inst_26757 = (state_26791[(7)]);var inst_26759 = cljs.core.chunked_seq_QMARK_(inst_26757);var state_26791__$1 = state_26791;if(inst_26759)
{var statearr_26823_26854 = state_26791__$1;(statearr_26823_26854[(1)] = (17));
} else
{var statearr_26824_26855 = state_26791__$1;(statearr_26824_26855[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (16)))
{var inst_26775 = (state_26791[(2)]);var state_26791__$1 = state_26791;var statearr_26825_26856 = state_26791__$1;(statearr_26825_26856[(2)] = inst_26775);
(statearr_26825_26856[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26792 === (10)))
{var inst_26744 = (state_26791[(11)]);var inst_26746 = (state_26791[(12)]);var inst_26751 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26744,inst_26746);var state_26791__$1 = state_26791;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26791__$1,(13),out,inst_26751);
} else
{if((state_val_26792 === (18)))
{var inst_26757 = (state_26791[(7)]);var inst_26766 = cljs.core.first(inst_26757);var state_26791__$1 = state_26791;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26791__$1,(20),out,inst_26766);
} else
{if((state_val_26792 === (8)))
{var inst_26745 = (state_26791[(8)]);var inst_26746 = (state_26791[(12)]);var inst_26748 = (inst_26746 < inst_26745);var inst_26749 = inst_26748;var state_26791__$1 = state_26791;if(cljs.core.truth_(inst_26749))
{var statearr_26826_26857 = state_26791__$1;(statearr_26826_26857[(1)] = (10));
} else
{var statearr_26827_26858 = state_26791__$1;(statearr_26827_26858[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26831[(0)] = state_machine__12278__auto__);
(statearr_26831[(1)] = (1));
return statearr_26831;
});
var state_machine__12278__auto____1 = (function (state_26791){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26791);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26832){if((e26832 instanceof Object))
{var ex__12281__auto__ = e26832;var statearr_26833_26859 = state_26791;(statearr_26833_26859[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26791);
return cljs.core.constant$keyword$82;
} else
{throw e26832;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26860 = state_26791;
state_26791 = G__26860;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26791){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26834 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26834;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26965,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26965,out){
return (function (state_26940){var state_val_26941 = (state_26940[(1)]);if((state_val_26941 === (7)))
{var inst_26935 = (state_26940[(2)]);var state_26940__$1 = state_26940;var statearr_26942_26966 = state_26940__$1;(statearr_26942_26966[(2)] = inst_26935);
(statearr_26942_26966[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (1)))
{var inst_26917 = null;var state_26940__$1 = (function (){var statearr_26943 = state_26940;(statearr_26943[(7)] = inst_26917);
return statearr_26943;
})();var statearr_26944_26967 = state_26940__$1;(statearr_26944_26967[(2)] = null);
(statearr_26944_26967[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (4)))
{var inst_26920 = (state_26940[(8)]);var inst_26920__$1 = (state_26940[(2)]);var inst_26921 = (inst_26920__$1 == null);var inst_26922 = cljs.core.not(inst_26921);var state_26940__$1 = (function (){var statearr_26945 = state_26940;(statearr_26945[(8)] = inst_26920__$1);
return statearr_26945;
})();if(inst_26922)
{var statearr_26946_26968 = state_26940__$1;(statearr_26946_26968[(1)] = (5));
} else
{var statearr_26947_26969 = state_26940__$1;(statearr_26947_26969[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (6)))
{var state_26940__$1 = state_26940;var statearr_26948_26970 = state_26940__$1;(statearr_26948_26970[(2)] = null);
(statearr_26948_26970[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (3)))
{var inst_26937 = (state_26940[(2)]);var inst_26938 = cljs.core.async.close_BANG_(out);var state_26940__$1 = (function (){var statearr_26949 = state_26940;(statearr_26949[(9)] = inst_26937);
return statearr_26949;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26940__$1,inst_26938);
} else
{if((state_val_26941 === (2)))
{var state_26940__$1 = state_26940;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26940__$1,(4),ch);
} else
{if((state_val_26941 === (11)))
{var inst_26920 = (state_26940[(8)]);var inst_26929 = (state_26940[(2)]);var inst_26917 = inst_26920;var state_26940__$1 = (function (){var statearr_26950 = state_26940;(statearr_26950[(7)] = inst_26917);
(statearr_26950[(10)] = inst_26929);
return statearr_26950;
})();var statearr_26951_26971 = state_26940__$1;(statearr_26951_26971[(2)] = null);
(statearr_26951_26971[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (9)))
{var inst_26920 = (state_26940[(8)]);var state_26940__$1 = state_26940;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26940__$1,(11),out,inst_26920);
} else
{if((state_val_26941 === (5)))
{var inst_26920 = (state_26940[(8)]);var inst_26917 = (state_26940[(7)]);var inst_26924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26920,inst_26917);var state_26940__$1 = state_26940;if(inst_26924)
{var statearr_26953_26972 = state_26940__$1;(statearr_26953_26972[(1)] = (8));
} else
{var statearr_26954_26973 = state_26940__$1;(statearr_26954_26973[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (10)))
{var inst_26932 = (state_26940[(2)]);var state_26940__$1 = state_26940;var statearr_26955_26974 = state_26940__$1;(statearr_26955_26974[(2)] = inst_26932);
(statearr_26955_26974[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26941 === (8)))
{var inst_26917 = (state_26940[(7)]);var tmp26952 = inst_26917;var inst_26917__$1 = tmp26952;var state_26940__$1 = (function (){var statearr_26956 = state_26940;(statearr_26956[(7)] = inst_26917__$1);
return statearr_26956;
})();var statearr_26957_26975 = state_26940__$1;(statearr_26957_26975[(2)] = null);
(statearr_26957_26975[(1)] = (2));
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
});})(c__12292__auto___26965,out))
;return ((function (switch__12277__auto__,c__12292__auto___26965,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26961 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26961[(0)] = state_machine__12278__auto__);
(statearr_26961[(1)] = (1));
return statearr_26961;
});
var state_machine__12278__auto____1 = (function (state_26940){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26940);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object))
{var ex__12281__auto__ = e26962;var statearr_26963_26976 = state_26940;(statearr_26963_26976[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26940);
return cljs.core.constant$keyword$82;
} else
{throw e26962;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26977 = state_26940;
state_26940 = G__26977;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26965,out))
})();var state__12294__auto__ = (function (){var statearr_26964 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26965);
return statearr_26964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26965,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27115,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27115,out){
return (function (state_27085){var state_val_27086 = (state_27085[(1)]);if((state_val_27086 === (7)))
{var inst_27081 = (state_27085[(2)]);var state_27085__$1 = state_27085;var statearr_27087_27116 = state_27085__$1;(statearr_27087_27116[(2)] = inst_27081);
(statearr_27087_27116[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (1)))
{var inst_27048 = (new Array(n));var inst_27049 = inst_27048;var inst_27050 = (0);var state_27085__$1 = (function (){var statearr_27088 = state_27085;(statearr_27088[(7)] = inst_27050);
(statearr_27088[(8)] = inst_27049);
return statearr_27088;
})();var statearr_27089_27117 = state_27085__$1;(statearr_27089_27117[(2)] = null);
(statearr_27089_27117[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (4)))
{var inst_27053 = (state_27085[(9)]);var inst_27053__$1 = (state_27085[(2)]);var inst_27054 = (inst_27053__$1 == null);var inst_27055 = cljs.core.not(inst_27054);var state_27085__$1 = (function (){var statearr_27090 = state_27085;(statearr_27090[(9)] = inst_27053__$1);
return statearr_27090;
})();if(inst_27055)
{var statearr_27091_27118 = state_27085__$1;(statearr_27091_27118[(1)] = (5));
} else
{var statearr_27092_27119 = state_27085__$1;(statearr_27092_27119[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (15)))
{var inst_27075 = (state_27085[(2)]);var state_27085__$1 = state_27085;var statearr_27093_27120 = state_27085__$1;(statearr_27093_27120[(2)] = inst_27075);
(statearr_27093_27120[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (13)))
{var state_27085__$1 = state_27085;var statearr_27094_27121 = state_27085__$1;(statearr_27094_27121[(2)] = null);
(statearr_27094_27121[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (6)))
{var inst_27050 = (state_27085[(7)]);var inst_27071 = (inst_27050 > (0));var state_27085__$1 = state_27085;if(cljs.core.truth_(inst_27071))
{var statearr_27095_27122 = state_27085__$1;(statearr_27095_27122[(1)] = (12));
} else
{var statearr_27096_27123 = state_27085__$1;(statearr_27096_27123[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (3)))
{var inst_27083 = (state_27085[(2)]);var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.return_chan(state_27085__$1,inst_27083);
} else
{if((state_val_27086 === (12)))
{var inst_27049 = (state_27085[(8)]);var inst_27073 = cljs.core.vec(inst_27049);var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27085__$1,(15),out,inst_27073);
} else
{if((state_val_27086 === (2)))
{var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27085__$1,(4),ch);
} else
{if((state_val_27086 === (11)))
{var inst_27065 = (state_27085[(2)]);var inst_27066 = (new Array(n));var inst_27049 = inst_27066;var inst_27050 = (0);var state_27085__$1 = (function (){var statearr_27097 = state_27085;(statearr_27097[(7)] = inst_27050);
(statearr_27097[(10)] = inst_27065);
(statearr_27097[(8)] = inst_27049);
return statearr_27097;
})();var statearr_27098_27124 = state_27085__$1;(statearr_27098_27124[(2)] = null);
(statearr_27098_27124[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (9)))
{var inst_27049 = (state_27085[(8)]);var inst_27063 = cljs.core.vec(inst_27049);var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27085__$1,(11),out,inst_27063);
} else
{if((state_val_27086 === (5)))
{var inst_27058 = (state_27085[(11)]);var inst_27050 = (state_27085[(7)]);var inst_27053 = (state_27085[(9)]);var inst_27049 = (state_27085[(8)]);var inst_27057 = (inst_27049[inst_27050] = inst_27053);var inst_27058__$1 = (inst_27050 + (1));var inst_27059 = (inst_27058__$1 < n);var state_27085__$1 = (function (){var statearr_27099 = state_27085;(statearr_27099[(11)] = inst_27058__$1);
(statearr_27099[(12)] = inst_27057);
return statearr_27099;
})();if(cljs.core.truth_(inst_27059))
{var statearr_27100_27125 = state_27085__$1;(statearr_27100_27125[(1)] = (8));
} else
{var statearr_27101_27126 = state_27085__$1;(statearr_27101_27126[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (14)))
{var inst_27078 = (state_27085[(2)]);var inst_27079 = cljs.core.async.close_BANG_(out);var state_27085__$1 = (function (){var statearr_27103 = state_27085;(statearr_27103[(13)] = inst_27078);
return statearr_27103;
})();var statearr_27104_27127 = state_27085__$1;(statearr_27104_27127[(2)] = inst_27079);
(statearr_27104_27127[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (10)))
{var inst_27069 = (state_27085[(2)]);var state_27085__$1 = state_27085;var statearr_27105_27128 = state_27085__$1;(statearr_27105_27128[(2)] = inst_27069);
(statearr_27105_27128[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27086 === (8)))
{var inst_27058 = (state_27085[(11)]);var inst_27049 = (state_27085[(8)]);var tmp27102 = inst_27049;var inst_27049__$1 = tmp27102;var inst_27050 = inst_27058;var state_27085__$1 = (function (){var statearr_27106 = state_27085;(statearr_27106[(7)] = inst_27050);
(statearr_27106[(8)] = inst_27049__$1);
return statearr_27106;
})();var statearr_27107_27129 = state_27085__$1;(statearr_27107_27129[(2)] = null);
(statearr_27107_27129[(1)] = (2));
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
});})(c__12292__auto___27115,out))
;return ((function (switch__12277__auto__,c__12292__auto___27115,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27111[(0)] = state_machine__12278__auto__);
(statearr_27111[(1)] = (1));
return statearr_27111;
});
var state_machine__12278__auto____1 = (function (state_27085){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27085);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27112){if((e27112 instanceof Object))
{var ex__12281__auto__ = e27112;var statearr_27113_27130 = state_27085;(statearr_27113_27130[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27085);
return cljs.core.constant$keyword$82;
} else
{throw e27112;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27131 = state_27085;
state_27085 = G__27131;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27115,out))
})();var state__12294__auto__ = (function (){var statearr_27114 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27115);
return statearr_27114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27115,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27279,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27279,out){
return (function (state_27248){var state_val_27249 = (state_27248[(1)]);if((state_val_27249 === (7)))
{var inst_27244 = (state_27248[(2)]);var state_27248__$1 = state_27248;var statearr_27250_27280 = state_27248__$1;(statearr_27250_27280[(2)] = inst_27244);
(statearr_27250_27280[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (1)))
{var inst_27207 = [];var inst_27208 = inst_27207;var inst_27209 = cljs.core.constant$keyword$97;var state_27248__$1 = (function (){var statearr_27251 = state_27248;(statearr_27251[(7)] = inst_27209);
(statearr_27251[(8)] = inst_27208);
return statearr_27251;
})();var statearr_27252_27281 = state_27248__$1;(statearr_27252_27281[(2)] = null);
(statearr_27252_27281[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (4)))
{var inst_27212 = (state_27248[(9)]);var inst_27212__$1 = (state_27248[(2)]);var inst_27213 = (inst_27212__$1 == null);var inst_27214 = cljs.core.not(inst_27213);var state_27248__$1 = (function (){var statearr_27253 = state_27248;(statearr_27253[(9)] = inst_27212__$1);
return statearr_27253;
})();if(inst_27214)
{var statearr_27254_27282 = state_27248__$1;(statearr_27254_27282[(1)] = (5));
} else
{var statearr_27255_27283 = state_27248__$1;(statearr_27255_27283[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (15)))
{var inst_27238 = (state_27248[(2)]);var state_27248__$1 = state_27248;var statearr_27256_27284 = state_27248__$1;(statearr_27256_27284[(2)] = inst_27238);
(statearr_27256_27284[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (13)))
{var state_27248__$1 = state_27248;var statearr_27257_27285 = state_27248__$1;(statearr_27257_27285[(2)] = null);
(statearr_27257_27285[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (6)))
{var inst_27208 = (state_27248[(8)]);var inst_27233 = inst_27208.length;var inst_27234 = (inst_27233 > (0));var state_27248__$1 = state_27248;if(cljs.core.truth_(inst_27234))
{var statearr_27258_27286 = state_27248__$1;(statearr_27258_27286[(1)] = (12));
} else
{var statearr_27259_27287 = state_27248__$1;(statearr_27259_27287[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (3)))
{var inst_27246 = (state_27248[(2)]);var state_27248__$1 = state_27248;return cljs.core.async.impl.ioc_helpers.return_chan(state_27248__$1,inst_27246);
} else
{if((state_val_27249 === (12)))
{var inst_27208 = (state_27248[(8)]);var inst_27236 = cljs.core.vec(inst_27208);var state_27248__$1 = state_27248;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27248__$1,(15),out,inst_27236);
} else
{if((state_val_27249 === (2)))
{var state_27248__$1 = state_27248;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27248__$1,(4),ch);
} else
{if((state_val_27249 === (11)))
{var inst_27212 = (state_27248[(9)]);var inst_27216 = (state_27248[(10)]);var inst_27226 = (state_27248[(2)]);var inst_27227 = [];var inst_27228 = inst_27227.push(inst_27212);var inst_27208 = inst_27227;var inst_27209 = inst_27216;var state_27248__$1 = (function (){var statearr_27260 = state_27248;(statearr_27260[(7)] = inst_27209);
(statearr_27260[(11)] = inst_27226);
(statearr_27260[(12)] = inst_27228);
(statearr_27260[(8)] = inst_27208);
return statearr_27260;
})();var statearr_27261_27288 = state_27248__$1;(statearr_27261_27288[(2)] = null);
(statearr_27261_27288[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (9)))
{var inst_27208 = (state_27248[(8)]);var inst_27224 = cljs.core.vec(inst_27208);var state_27248__$1 = state_27248;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27248__$1,(11),out,inst_27224);
} else
{if((state_val_27249 === (5)))
{var inst_27209 = (state_27248[(7)]);var inst_27212 = (state_27248[(9)]);var inst_27216 = (state_27248[(10)]);var inst_27216__$1 = (function (){var G__27262 = inst_27212;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27262) : f.call(null,G__27262));
})();var inst_27217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27216__$1,inst_27209);var inst_27218 = cljs.core.keyword_identical_QMARK_(inst_27209,cljs.core.constant$keyword$97);var inst_27219 = (inst_27217) || (inst_27218);var state_27248__$1 = (function (){var statearr_27263 = state_27248;(statearr_27263[(10)] = inst_27216__$1);
return statearr_27263;
})();if(cljs.core.truth_(inst_27219))
{var statearr_27264_27289 = state_27248__$1;(statearr_27264_27289[(1)] = (8));
} else
{var statearr_27265_27290 = state_27248__$1;(statearr_27265_27290[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (14)))
{var inst_27241 = (state_27248[(2)]);var inst_27242 = cljs.core.async.close_BANG_(out);var state_27248__$1 = (function (){var statearr_27267 = state_27248;(statearr_27267[(13)] = inst_27241);
return statearr_27267;
})();var statearr_27268_27291 = state_27248__$1;(statearr_27268_27291[(2)] = inst_27242);
(statearr_27268_27291[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (10)))
{var inst_27231 = (state_27248[(2)]);var state_27248__$1 = state_27248;var statearr_27269_27292 = state_27248__$1;(statearr_27269_27292[(2)] = inst_27231);
(statearr_27269_27292[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27249 === (8)))
{var inst_27212 = (state_27248[(9)]);var inst_27216 = (state_27248[(10)]);var inst_27208 = (state_27248[(8)]);var inst_27221 = inst_27208.push(inst_27212);var tmp27266 = inst_27208;var inst_27208__$1 = tmp27266;var inst_27209 = inst_27216;var state_27248__$1 = (function (){var statearr_27270 = state_27248;(statearr_27270[(14)] = inst_27221);
(statearr_27270[(7)] = inst_27209);
(statearr_27270[(8)] = inst_27208__$1);
return statearr_27270;
})();var statearr_27271_27293 = state_27248__$1;(statearr_27271_27293[(2)] = null);
(statearr_27271_27293[(1)] = (2));
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
});})(c__12292__auto___27279,out))
;return ((function (switch__12277__auto__,c__12292__auto___27279,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27275[(0)] = state_machine__12278__auto__);
(statearr_27275[(1)] = (1));
return statearr_27275;
});
var state_machine__12278__auto____1 = (function (state_27248){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27248);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object))
{var ex__12281__auto__ = e27276;var statearr_27277_27294 = state_27248;(statearr_27277_27294[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27248);
return cljs.core.constant$keyword$82;
} else
{throw e27276;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27295 = state_27248;
state_27248 = G__27295;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27248){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27279,out))
})();var state__12294__auto__ = (function (){var statearr_27278 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27279);
return statearr_27278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27279,out))
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
