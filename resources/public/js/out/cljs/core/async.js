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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24040 = (function (f,fn_handler,meta24041){
this.f = f;
this.fn_handler = fn_handler;
this.meta24041 = meta24041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24040.cljs$lang$type = true;
cljs.core.async.t24040.cljs$lang$ctorStr = "cljs.core.async/t24040";
cljs.core.async.t24040.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24040");
});
cljs.core.async.t24040.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24042){var self__ = this;
var _24042__$1 = this;return self__.meta24041;
});
cljs.core.async.t24040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24042,meta24041__$1){var self__ = this;
var _24042__$1 = this;return (new cljs.core.async.t24040(self__.f,self__.fn_handler,meta24041__$1));
});
cljs.core.async.__GT_t24040 = (function __GT_t24040(f__$1,fn_handler__$1,meta24041){return (new cljs.core.async.t24040(f__$1,fn_handler__$1,meta24041));
});
}
return (new cljs.core.async.t24040(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24044 = buff;if(G__24044)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__24044.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24044.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24044);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24044);
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
{var val_24061 = (function (){var G__24058 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24058) : cljs.core.deref.call(null,G__24058));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24059_24062 = val_24061;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24059_24062) : fn1.call(null,G__24059_24062));
} else
{cljs.core.async.impl.dispatch.run(((function (val_24061,ret){
return (function (){var G__24060 = val_24061;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24060) : fn1.call(null,G__24060));
});})(val_24061,ret))
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
{var ret = temp__4124__auto__;var G__24071 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24071) : cljs.core.deref.call(null,G__24071));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24072 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24072) : cljs.core.deref.call(null,G__24072));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24073_24075 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24073_24075) : fn1.call(null,G__24073_24075));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24074 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24074) : fn1.call(null,G__24074));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___24076 = n;var x_24077 = (0);while(true){
if((x_24077 < n__4510__auto___24076))
{(a[x_24077] = (0));
{
var G__24078 = (x_24077 + (1));
x_24077 = G__24078;
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
var G__24079 = (i + (1));
i = G__24079;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24087 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24087) : cljs.core.atom.call(null,G__24087));
})();if(typeof cljs.core.async.t24088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24088 = (function (flag,alt_flag,meta24089){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24089 = meta24089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24088.cljs$lang$type = true;
cljs.core.async.t24088.cljs$lang$ctorStr = "cljs.core.async/t24088";
cljs.core.async.t24088.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24088");
});})(flag))
;
cljs.core.async.t24088.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24091 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24091) : cljs.core.deref.call(null,G__24091));
});})(flag))
;
cljs.core.async.t24088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24092_24094 = self__.flag;var G__24093_24095 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24092_24094,G__24093_24095) : cljs.core.reset_BANG_.call(null,G__24092_24094,G__24093_24095));
return true;
});})(flag))
;
cljs.core.async.t24088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24090){var self__ = this;
var _24090__$1 = this;return self__.meta24089;
});})(flag))
;
cljs.core.async.t24088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24090,meta24089__$1){var self__ = this;
var _24090__$1 = this;return (new cljs.core.async.t24088(self__.flag,self__.alt_flag,meta24089__$1));
});})(flag))
;
cljs.core.async.__GT_t24088 = ((function (flag){
return (function __GT_t24088(flag__$1,alt_flag__$1,meta24089){return (new cljs.core.async.t24088(flag__$1,alt_flag__$1,meta24089));
});})(flag))
;
}
return (new cljs.core.async.t24088(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24099 = (function (cb,flag,alt_handler,meta24100){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24100 = meta24100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24099.cljs$lang$type = true;
cljs.core.async.t24099.cljs$lang$ctorStr = "cljs.core.async/t24099";
cljs.core.async.t24099.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24099");
});
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24101){var self__ = this;
var _24101__$1 = this;return self__.meta24100;
});
cljs.core.async.t24099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24101,meta24100__$1){var self__ = this;
var _24101__$1 = this;return (new cljs.core.async.t24099(self__.cb,self__.flag,self__.alt_handler,meta24100__$1));
});
cljs.core.async.__GT_t24099 = (function __GT_t24099(cb__$1,flag__$1,alt_handler__$1,meta24100){return (new cljs.core.async.t24099(cb__$1,flag__$1,alt_handler__$1,meta24100));
});
}
return (new cljs.core.async.t24099(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24109 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24109) : port.call(null,G__24109));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24110 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24110) : port.call(null,G__24110));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24102_SHARP_){var G__24111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24102_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24111) : fret.call(null,G__24111));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24103_SHARP_){var G__24112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24103_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24112) : fret.call(null,G__24112));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24113 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24113) : cljs.core.deref.call(null,G__24113));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24114 = (i + (1));
i = G__24114;
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
var alts_BANG___delegate = function (ports,p__24115){var map__24117 = p__24115;var map__24117__$1 = ((cljs.core.seq_QMARK_(map__24117))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24117):map__24117);var opts = map__24117__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24115 = null;if (arguments.length > 1) {
  p__24115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24115);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24118){
var ports = cljs.core.first(arglist__24118);
var p__24115 = cljs.core.rest(arglist__24118);
return alts_BANG___delegate(ports,p__24115);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24216){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24216){
return (function (state_24192){var state_val_24193 = (state_24192[(1)]);if((state_val_24193 === (7)))
{var inst_24188 = (state_24192[(2)]);var state_24192__$1 = state_24192;var statearr_24194_24217 = state_24192__$1;(statearr_24194_24217[(2)] = inst_24188);
(statearr_24194_24217[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (1)))
{var state_24192__$1 = state_24192;var statearr_24195_24218 = state_24192__$1;(statearr_24195_24218[(2)] = null);
(statearr_24195_24218[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (4)))
{var inst_24171 = (state_24192[(7)]);var inst_24171__$1 = (state_24192[(2)]);var inst_24172 = (inst_24171__$1 == null);var state_24192__$1 = (function (){var statearr_24196 = state_24192;(statearr_24196[(7)] = inst_24171__$1);
return statearr_24196;
})();if(cljs.core.truth_(inst_24172))
{var statearr_24197_24219 = state_24192__$1;(statearr_24197_24219[(1)] = (5));
} else
{var statearr_24198_24220 = state_24192__$1;(statearr_24198_24220[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (13)))
{var state_24192__$1 = state_24192;var statearr_24199_24221 = state_24192__$1;(statearr_24199_24221[(2)] = null);
(statearr_24199_24221[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (6)))
{var inst_24171 = (state_24192[(7)]);var state_24192__$1 = state_24192;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24192__$1,(11),to,inst_24171);
} else
{if((state_val_24193 === (3)))
{var inst_24190 = (state_24192[(2)]);var state_24192__$1 = state_24192;return cljs.core.async.impl.ioc_helpers.return_chan(state_24192__$1,inst_24190);
} else
{if((state_val_24193 === (12)))
{var state_24192__$1 = state_24192;var statearr_24200_24222 = state_24192__$1;(statearr_24200_24222[(2)] = null);
(statearr_24200_24222[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (2)))
{var state_24192__$1 = state_24192;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24192__$1,(4),from);
} else
{if((state_val_24193 === (11)))
{var inst_24181 = (state_24192[(2)]);var state_24192__$1 = state_24192;if(cljs.core.truth_(inst_24181))
{var statearr_24201_24223 = state_24192__$1;(statearr_24201_24223[(1)] = (12));
} else
{var statearr_24202_24224 = state_24192__$1;(statearr_24202_24224[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (9)))
{var state_24192__$1 = state_24192;var statearr_24203_24225 = state_24192__$1;(statearr_24203_24225[(2)] = null);
(statearr_24203_24225[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (5)))
{var state_24192__$1 = state_24192;if(cljs.core.truth_(close_QMARK_))
{var statearr_24204_24226 = state_24192__$1;(statearr_24204_24226[(1)] = (8));
} else
{var statearr_24205_24227 = state_24192__$1;(statearr_24205_24227[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (14)))
{var inst_24186 = (state_24192[(2)]);var state_24192__$1 = state_24192;var statearr_24206_24228 = state_24192__$1;(statearr_24206_24228[(2)] = inst_24186);
(statearr_24206_24228[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (10)))
{var inst_24178 = (state_24192[(2)]);var state_24192__$1 = state_24192;var statearr_24207_24229 = state_24192__$1;(statearr_24207_24229[(2)] = inst_24178);
(statearr_24207_24229[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24193 === (8)))
{var inst_24175 = cljs.core.async.close_BANG_(to);var state_24192__$1 = state_24192;var statearr_24208_24230 = state_24192__$1;(statearr_24208_24230[(2)] = inst_24175);
(statearr_24208_24230[(1)] = (10));
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
});})(c__12292__auto___24216))
;return ((function (switch__12277__auto__,c__12292__auto___24216){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24212 = [null,null,null,null,null,null,null,null];(statearr_24212[(0)] = state_machine__12278__auto__);
(statearr_24212[(1)] = (1));
return statearr_24212;
});
var state_machine__12278__auto____1 = (function (state_24192){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24192);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24213){if((e24213 instanceof Object))
{var ex__12281__auto__ = e24213;var statearr_24214_24231 = state_24192;(statearr_24214_24231[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24192);
return cljs.core.constant$keyword$82;
} else
{throw e24213;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24232 = state_24192;
state_24192 = G__24232;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24192){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24216))
})();var state__12294__auto__ = (function (){var statearr_24215 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24216);
return statearr_24215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24216))
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
return (function (p__24418){var vec__24419 = p__24418;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24419,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24419,(1),null);var job = vec__24419;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results){
return (function (state_24424){var state_val_24425 = (state_24424[(1)]);if((state_val_24425 === (2)))
{var inst_24421 = (state_24424[(2)]);var inst_24422 = cljs.core.async.close_BANG_(res);var state_24424__$1 = (function (){var statearr_24426 = state_24424;(statearr_24426[(7)] = inst_24421);
return statearr_24426;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24424__$1,inst_24422);
} else
{if((state_val_24425 === (1)))
{var state_24424__$1 = state_24424;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24424__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24430 = [null,null,null,null,null,null,null,null];(statearr_24430[(0)] = state_machine__12278__auto__);
(statearr_24430[(1)] = (1));
return statearr_24430;
});
var state_machine__12278__auto____1 = (function (state_24424){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24424);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object))
{var ex__12281__auto__ = e24431;var statearr_24432_24604 = state_24424;(statearr_24432_24604[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24424);
return cljs.core.constant$keyword$82;
} else
{throw e24431;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24605 = state_24424;
state_24424 = G__24605;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24433 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24603);
return statearr_24433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24603,res,vec__24419,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24434){var vec__24435 = p__24434;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24435,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24435,(1),null);var job = vec__24435;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24436_24606 = v;var G__24437_24607 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24436_24606,G__24437_24607) : xf.call(null,G__24436_24606,G__24437_24607));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24608 = n;var __24609 = (0);while(true){
if((__24609 < n__4510__auto___24608))
{var G__24438_24610 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24438_24610) {
case "async":
var c__12292__auto___24612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24609,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24609,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function (state_24451){var state_val_24452 = (state_24451[(1)]);if((state_val_24452 === (7)))
{var inst_24447 = (state_24451[(2)]);var state_24451__$1 = state_24451;var statearr_24453_24613 = state_24451__$1;(statearr_24453_24613[(2)] = inst_24447);
(statearr_24453_24613[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24452 === (6)))
{var state_24451__$1 = state_24451;var statearr_24454_24614 = state_24451__$1;(statearr_24454_24614[(2)] = null);
(statearr_24454_24614[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24452 === (5)))
{var state_24451__$1 = state_24451;var statearr_24455_24615 = state_24451__$1;(statearr_24455_24615[(2)] = null);
(statearr_24455_24615[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24452 === (4)))
{var inst_24441 = (state_24451[(2)]);var inst_24442 = async(inst_24441);var state_24451__$1 = state_24451;if(cljs.core.truth_(inst_24442))
{var statearr_24456_24616 = state_24451__$1;(statearr_24456_24616[(1)] = (5));
} else
{var statearr_24457_24617 = state_24451__$1;(statearr_24457_24617[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24452 === (3)))
{var inst_24449 = (state_24451[(2)]);var state_24451__$1 = state_24451;return cljs.core.async.impl.ioc_helpers.return_chan(state_24451__$1,inst_24449);
} else
{if((state_val_24452 === (2)))
{var state_24451__$1 = state_24451;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24451__$1,(4),jobs);
} else
{if((state_val_24452 === (1)))
{var state_24451__$1 = state_24451;var statearr_24458_24618 = state_24451__$1;(statearr_24458_24618[(2)] = null);
(statearr_24458_24618[(1)] = (2));
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
});})(__24609,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
;return ((function (__24609,switch__12277__auto__,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24462 = [null,null,null,null,null,null,null];(statearr_24462[(0)] = state_machine__12278__auto__);
(statearr_24462[(1)] = (1));
return statearr_24462;
});
var state_machine__12278__auto____1 = (function (state_24451){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24451);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24463){if((e24463 instanceof Object))
{var ex__12281__auto__ = e24463;var statearr_24464_24619 = state_24451;(statearr_24464_24619[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24451);
return cljs.core.constant$keyword$82;
} else
{throw e24463;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24620 = state_24451;
state_24451 = G__24620;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24451){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24609,switch__12277__auto__,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24465 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24612);
return statearr_24465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24609,c__12292__auto___24612,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24609,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24609,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function (state_24478){var state_val_24479 = (state_24478[(1)]);if((state_val_24479 === (7)))
{var inst_24474 = (state_24478[(2)]);var state_24478__$1 = state_24478;var statearr_24480_24622 = state_24478__$1;(statearr_24480_24622[(2)] = inst_24474);
(statearr_24480_24622[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24479 === (6)))
{var state_24478__$1 = state_24478;var statearr_24481_24623 = state_24478__$1;(statearr_24481_24623[(2)] = null);
(statearr_24481_24623[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24479 === (5)))
{var state_24478__$1 = state_24478;var statearr_24482_24624 = state_24478__$1;(statearr_24482_24624[(2)] = null);
(statearr_24482_24624[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24479 === (4)))
{var inst_24468 = (state_24478[(2)]);var inst_24469 = process(inst_24468);var state_24478__$1 = state_24478;if(cljs.core.truth_(inst_24469))
{var statearr_24483_24625 = state_24478__$1;(statearr_24483_24625[(1)] = (5));
} else
{var statearr_24484_24626 = state_24478__$1;(statearr_24484_24626[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24479 === (3)))
{var inst_24476 = (state_24478[(2)]);var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.return_chan(state_24478__$1,inst_24476);
} else
{if((state_val_24479 === (2)))
{var state_24478__$1 = state_24478;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24478__$1,(4),jobs);
} else
{if((state_val_24479 === (1)))
{var state_24478__$1 = state_24478;var statearr_24485_24627 = state_24478__$1;(statearr_24485_24627[(2)] = null);
(statearr_24485_24627[(1)] = (2));
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
});})(__24609,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
;return ((function (__24609,switch__12277__auto__,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24489 = [null,null,null,null,null,null,null];(statearr_24489[(0)] = state_machine__12278__auto__);
(statearr_24489[(1)] = (1));
return statearr_24489;
});
var state_machine__12278__auto____1 = (function (state_24478){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24478);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24490){if((e24490 instanceof Object))
{var ex__12281__auto__ = e24490;var statearr_24491_24628 = state_24478;(statearr_24491_24628[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24478);
return cljs.core.constant$keyword$82;
} else
{throw e24490;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24629 = state_24478;
state_24478 = G__24629;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24478){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24609,switch__12277__auto__,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24492 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24621);
return statearr_24492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24609,c__12292__auto___24621,G__24438_24610,n__4510__auto___24608,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24630 = (__24609 + (1));
__24609 = G__24630;
continue;
}
} else
{}
break;
}
var c__12292__auto___24631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24631,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24631,jobs,results,process,async){
return (function (state_24514){var state_val_24515 = (state_24514[(1)]);if((state_val_24515 === (9)))
{var inst_24507 = (state_24514[(2)]);var state_24514__$1 = (function (){var statearr_24516 = state_24514;(statearr_24516[(7)] = inst_24507);
return statearr_24516;
})();var statearr_24517_24632 = state_24514__$1;(statearr_24517_24632[(2)] = null);
(statearr_24517_24632[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24515 === (8)))
{var inst_24500 = (state_24514[(8)]);var inst_24505 = (state_24514[(2)]);var state_24514__$1 = (function (){var statearr_24518 = state_24514;(statearr_24518[(9)] = inst_24505);
return statearr_24518;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24514__$1,(9),results,inst_24500);
} else
{if((state_val_24515 === (7)))
{var inst_24510 = (state_24514[(2)]);var state_24514__$1 = state_24514;var statearr_24519_24633 = state_24514__$1;(statearr_24519_24633[(2)] = inst_24510);
(statearr_24519_24633[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24515 === (6)))
{var inst_24495 = (state_24514[(10)]);var inst_24500 = (state_24514[(8)]);var inst_24500__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24501 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24502 = [inst_24495,inst_24500__$1];var inst_24503 = (new cljs.core.PersistentVector(null,2,(5),inst_24501,inst_24502,null));var state_24514__$1 = (function (){var statearr_24520 = state_24514;(statearr_24520[(8)] = inst_24500__$1);
return statearr_24520;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24514__$1,(8),jobs,inst_24503);
} else
{if((state_val_24515 === (5)))
{var inst_24498 = cljs.core.async.close_BANG_(jobs);var state_24514__$1 = state_24514;var statearr_24521_24634 = state_24514__$1;(statearr_24521_24634[(2)] = inst_24498);
(statearr_24521_24634[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24515 === (4)))
{var inst_24495 = (state_24514[(10)]);var inst_24495__$1 = (state_24514[(2)]);var inst_24496 = (inst_24495__$1 == null);var state_24514__$1 = (function (){var statearr_24522 = state_24514;(statearr_24522[(10)] = inst_24495__$1);
return statearr_24522;
})();if(cljs.core.truth_(inst_24496))
{var statearr_24523_24635 = state_24514__$1;(statearr_24523_24635[(1)] = (5));
} else
{var statearr_24524_24636 = state_24514__$1;(statearr_24524_24636[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24515 === (3)))
{var inst_24512 = (state_24514[(2)]);var state_24514__$1 = state_24514;return cljs.core.async.impl.ioc_helpers.return_chan(state_24514__$1,inst_24512);
} else
{if((state_val_24515 === (2)))
{var state_24514__$1 = state_24514;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24514__$1,(4),from);
} else
{if((state_val_24515 === (1)))
{var state_24514__$1 = state_24514;var statearr_24525_24637 = state_24514__$1;(statearr_24525_24637[(2)] = null);
(statearr_24525_24637[(1)] = (2));
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
});})(c__12292__auto___24631,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24631,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24529 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24529[(0)] = state_machine__12278__auto__);
(statearr_24529[(1)] = (1));
return statearr_24529;
});
var state_machine__12278__auto____1 = (function (state_24514){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24514);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24530){if((e24530 instanceof Object))
{var ex__12281__auto__ = e24530;var statearr_24531_24638 = state_24514;(statearr_24531_24638[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24514);
return cljs.core.constant$keyword$82;
} else
{throw e24530;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24639 = state_24514;
state_24514 = G__24639;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24631,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24532 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24631);
return statearr_24532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24631,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24570){var state_val_24571 = (state_24570[(1)]);if((state_val_24571 === (7)))
{var inst_24566 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24572_24640 = state_24570__$1;(statearr_24572_24640[(2)] = inst_24566);
(statearr_24572_24640[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (20)))
{var state_24570__$1 = state_24570;var statearr_24573_24641 = state_24570__$1;(statearr_24573_24641[(2)] = null);
(statearr_24573_24641[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (1)))
{var state_24570__$1 = state_24570;var statearr_24574_24642 = state_24570__$1;(statearr_24574_24642[(2)] = null);
(statearr_24574_24642[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (4)))
{var inst_24535 = (state_24570[(7)]);var inst_24535__$1 = (state_24570[(2)]);var inst_24536 = (inst_24535__$1 == null);var state_24570__$1 = (function (){var statearr_24575 = state_24570;(statearr_24575[(7)] = inst_24535__$1);
return statearr_24575;
})();if(cljs.core.truth_(inst_24536))
{var statearr_24576_24643 = state_24570__$1;(statearr_24576_24643[(1)] = (5));
} else
{var statearr_24577_24644 = state_24570__$1;(statearr_24577_24644[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (15)))
{var inst_24548 = (state_24570[(8)]);var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24570__$1,(18),to,inst_24548);
} else
{if((state_val_24571 === (21)))
{var inst_24561 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24578_24645 = state_24570__$1;(statearr_24578_24645[(2)] = inst_24561);
(statearr_24578_24645[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (13)))
{var inst_24563 = (state_24570[(2)]);var state_24570__$1 = (function (){var statearr_24579 = state_24570;(statearr_24579[(9)] = inst_24563);
return statearr_24579;
})();var statearr_24580_24646 = state_24570__$1;(statearr_24580_24646[(2)] = null);
(statearr_24580_24646[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (6)))
{var inst_24535 = (state_24570[(7)]);var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24570__$1,(11),inst_24535);
} else
{if((state_val_24571 === (17)))
{var inst_24556 = (state_24570[(2)]);var state_24570__$1 = state_24570;if(cljs.core.truth_(inst_24556))
{var statearr_24581_24647 = state_24570__$1;(statearr_24581_24647[(1)] = (19));
} else
{var statearr_24582_24648 = state_24570__$1;(statearr_24582_24648[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (3)))
{var inst_24568 = (state_24570[(2)]);var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.return_chan(state_24570__$1,inst_24568);
} else
{if((state_val_24571 === (12)))
{var inst_24545 = (state_24570[(10)]);var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24570__$1,(14),inst_24545);
} else
{if((state_val_24571 === (2)))
{var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24570__$1,(4),results);
} else
{if((state_val_24571 === (19)))
{var state_24570__$1 = state_24570;var statearr_24583_24649 = state_24570__$1;(statearr_24583_24649[(2)] = null);
(statearr_24583_24649[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (11)))
{var inst_24545 = (state_24570[(2)]);var state_24570__$1 = (function (){var statearr_24584 = state_24570;(statearr_24584[(10)] = inst_24545);
return statearr_24584;
})();var statearr_24585_24650 = state_24570__$1;(statearr_24585_24650[(2)] = null);
(statearr_24585_24650[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (9)))
{var state_24570__$1 = state_24570;var statearr_24586_24651 = state_24570__$1;(statearr_24586_24651[(2)] = null);
(statearr_24586_24651[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (5)))
{var state_24570__$1 = state_24570;if(cljs.core.truth_(close_QMARK_))
{var statearr_24587_24652 = state_24570__$1;(statearr_24587_24652[(1)] = (8));
} else
{var statearr_24588_24653 = state_24570__$1;(statearr_24588_24653[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (14)))
{var inst_24550 = (state_24570[(11)]);var inst_24548 = (state_24570[(8)]);var inst_24548__$1 = (state_24570[(2)]);var inst_24549 = (inst_24548__$1 == null);var inst_24550__$1 = cljs.core.not(inst_24549);var state_24570__$1 = (function (){var statearr_24589 = state_24570;(statearr_24589[(11)] = inst_24550__$1);
(statearr_24589[(8)] = inst_24548__$1);
return statearr_24589;
})();if(inst_24550__$1)
{var statearr_24590_24654 = state_24570__$1;(statearr_24590_24654[(1)] = (15));
} else
{var statearr_24591_24655 = state_24570__$1;(statearr_24591_24655[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (16)))
{var inst_24550 = (state_24570[(11)]);var state_24570__$1 = state_24570;var statearr_24592_24656 = state_24570__$1;(statearr_24592_24656[(2)] = inst_24550);
(statearr_24592_24656[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (10)))
{var inst_24542 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24593_24657 = state_24570__$1;(statearr_24593_24657[(2)] = inst_24542);
(statearr_24593_24657[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (18)))
{var inst_24553 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24594_24658 = state_24570__$1;(statearr_24594_24658[(2)] = inst_24553);
(statearr_24594_24658[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24571 === (8)))
{var inst_24539 = cljs.core.async.close_BANG_(to);var state_24570__$1 = state_24570;var statearr_24595_24659 = state_24570__$1;(statearr_24595_24659[(2)] = inst_24539);
(statearr_24595_24659[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24599 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24599[(0)] = state_machine__12278__auto__);
(statearr_24599[(1)] = (1));
return statearr_24599;
});
var state_machine__12278__auto____1 = (function (state_24570){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24570);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24600){if((e24600 instanceof Object))
{var ex__12281__auto__ = e24600;var statearr_24601_24660 = state_24570;(statearr_24601_24660[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24570);
return cljs.core.constant$keyword$82;
} else
{throw e24600;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24661 = state_24570;
state_24570 = G__24661;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24602 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24602;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24784,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24784,tc,fc){
return (function (state_24758){var state_val_24759 = (state_24758[(1)]);if((state_val_24759 === (7)))
{var inst_24754 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24760_24785 = state_24758__$1;(statearr_24760_24785[(2)] = inst_24754);
(statearr_24760_24785[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (1)))
{var state_24758__$1 = state_24758;var statearr_24761_24786 = state_24758__$1;(statearr_24761_24786[(2)] = null);
(statearr_24761_24786[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (4)))
{var inst_24735 = (state_24758[(7)]);var inst_24735__$1 = (state_24758[(2)]);var inst_24736 = (inst_24735__$1 == null);var state_24758__$1 = (function (){var statearr_24762 = state_24758;(statearr_24762[(7)] = inst_24735__$1);
return statearr_24762;
})();if(cljs.core.truth_(inst_24736))
{var statearr_24763_24787 = state_24758__$1;(statearr_24763_24787[(1)] = (5));
} else
{var statearr_24764_24788 = state_24758__$1;(statearr_24764_24788[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (13)))
{var state_24758__$1 = state_24758;var statearr_24765_24789 = state_24758__$1;(statearr_24765_24789[(2)] = null);
(statearr_24765_24789[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (6)))
{var inst_24735 = (state_24758[(7)]);var inst_24741 = (function (){var G__24766 = inst_24735;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24766) : p.call(null,G__24766));
})();var state_24758__$1 = state_24758;if(cljs.core.truth_(inst_24741))
{var statearr_24767_24790 = state_24758__$1;(statearr_24767_24790[(1)] = (9));
} else
{var statearr_24768_24791 = state_24758__$1;(statearr_24768_24791[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (3)))
{var inst_24756 = (state_24758[(2)]);var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.return_chan(state_24758__$1,inst_24756);
} else
{if((state_val_24759 === (12)))
{var state_24758__$1 = state_24758;var statearr_24769_24792 = state_24758__$1;(statearr_24769_24792[(2)] = null);
(statearr_24769_24792[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (2)))
{var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24758__$1,(4),ch);
} else
{if((state_val_24759 === (11)))
{var inst_24735 = (state_24758[(7)]);var inst_24745 = (state_24758[(2)]);var state_24758__$1 = state_24758;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24758__$1,(8),inst_24745,inst_24735);
} else
{if((state_val_24759 === (9)))
{var state_24758__$1 = state_24758;var statearr_24770_24793 = state_24758__$1;(statearr_24770_24793[(2)] = tc);
(statearr_24770_24793[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (5)))
{var inst_24738 = cljs.core.async.close_BANG_(tc);var inst_24739 = cljs.core.async.close_BANG_(fc);var state_24758__$1 = (function (){var statearr_24771 = state_24758;(statearr_24771[(8)] = inst_24738);
return statearr_24771;
})();var statearr_24772_24794 = state_24758__$1;(statearr_24772_24794[(2)] = inst_24739);
(statearr_24772_24794[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (14)))
{var inst_24752 = (state_24758[(2)]);var state_24758__$1 = state_24758;var statearr_24773_24795 = state_24758__$1;(statearr_24773_24795[(2)] = inst_24752);
(statearr_24773_24795[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (10)))
{var state_24758__$1 = state_24758;var statearr_24774_24796 = state_24758__$1;(statearr_24774_24796[(2)] = fc);
(statearr_24774_24796[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24759 === (8)))
{var inst_24747 = (state_24758[(2)]);var state_24758__$1 = state_24758;if(cljs.core.truth_(inst_24747))
{var statearr_24775_24797 = state_24758__$1;(statearr_24775_24797[(1)] = (12));
} else
{var statearr_24776_24798 = state_24758__$1;(statearr_24776_24798[(1)] = (13));
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
});})(c__12292__auto___24784,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24784,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24780 = [null,null,null,null,null,null,null,null,null];(statearr_24780[(0)] = state_machine__12278__auto__);
(statearr_24780[(1)] = (1));
return statearr_24780;
});
var state_machine__12278__auto____1 = (function (state_24758){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24758);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24781){if((e24781 instanceof Object))
{var ex__12281__auto__ = e24781;var statearr_24782_24799 = state_24758;(statearr_24782_24799[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24758);
return cljs.core.constant$keyword$82;
} else
{throw e24781;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24800 = state_24758;
state_24758 = G__24800;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24758){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24784,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24783 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24784);
return statearr_24783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24784,tc,fc))
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
return (function (state_24849){var state_val_24850 = (state_24849[(1)]);if((state_val_24850 === (7)))
{var inst_24845 = (state_24849[(2)]);var state_24849__$1 = state_24849;var statearr_24851_24869 = state_24849__$1;(statearr_24851_24869[(2)] = inst_24845);
(statearr_24851_24869[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24850 === (6)))
{var inst_24835 = (state_24849[(7)]);var inst_24838 = (state_24849[(8)]);var inst_24842 = (function (){var G__24852 = inst_24835;var G__24853 = inst_24838;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24852,G__24853) : f.call(null,G__24852,G__24853));
})();var inst_24835__$1 = inst_24842;var state_24849__$1 = (function (){var statearr_24854 = state_24849;(statearr_24854[(7)] = inst_24835__$1);
return statearr_24854;
})();var statearr_24855_24870 = state_24849__$1;(statearr_24855_24870[(2)] = null);
(statearr_24855_24870[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24850 === (5)))
{var inst_24835 = (state_24849[(7)]);var state_24849__$1 = state_24849;var statearr_24856_24871 = state_24849__$1;(statearr_24856_24871[(2)] = inst_24835);
(statearr_24856_24871[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24850 === (4)))
{var inst_24838 = (state_24849[(8)]);var inst_24838__$1 = (state_24849[(2)]);var inst_24839 = (inst_24838__$1 == null);var state_24849__$1 = (function (){var statearr_24857 = state_24849;(statearr_24857[(8)] = inst_24838__$1);
return statearr_24857;
})();if(cljs.core.truth_(inst_24839))
{var statearr_24858_24872 = state_24849__$1;(statearr_24858_24872[(1)] = (5));
} else
{var statearr_24859_24873 = state_24849__$1;(statearr_24859_24873[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24850 === (3)))
{var inst_24847 = (state_24849[(2)]);var state_24849__$1 = state_24849;return cljs.core.async.impl.ioc_helpers.return_chan(state_24849__$1,inst_24847);
} else
{if((state_val_24850 === (2)))
{var state_24849__$1 = state_24849;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24849__$1,(4),ch);
} else
{if((state_val_24850 === (1)))
{var inst_24835 = init;var state_24849__$1 = (function (){var statearr_24860 = state_24849;(statearr_24860[(7)] = inst_24835);
return statearr_24860;
})();var statearr_24861_24874 = state_24849__$1;(statearr_24861_24874[(2)] = null);
(statearr_24861_24874[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24865 = [null,null,null,null,null,null,null,null,null];(statearr_24865[(0)] = state_machine__12278__auto__);
(statearr_24865[(1)] = (1));
return statearr_24865;
});
var state_machine__12278__auto____1 = (function (state_24849){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24849);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object))
{var ex__12281__auto__ = e24866;var statearr_24867_24875 = state_24849;(statearr_24867_24875[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24849);
return cljs.core.constant$keyword$82;
} else
{throw e24866;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24876 = state_24849;
state_24849 = G__24876;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24849);
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
return (function (state_24953){var state_val_24954 = (state_24953[(1)]);if((state_val_24954 === (7)))
{var inst_24935 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24955_24978 = state_24953__$1;(statearr_24955_24978[(2)] = inst_24935);
(statearr_24955_24978[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (1)))
{var inst_24929 = cljs.core.seq(coll);var inst_24930 = inst_24929;var state_24953__$1 = (function (){var statearr_24956 = state_24953;(statearr_24956[(7)] = inst_24930);
return statearr_24956;
})();var statearr_24957_24979 = state_24953__$1;(statearr_24957_24979[(2)] = null);
(statearr_24957_24979[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (4)))
{var inst_24930 = (state_24953[(7)]);var inst_24933 = cljs.core.first(inst_24930);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24953__$1,(7),ch,inst_24933);
} else
{if((state_val_24954 === (13)))
{var inst_24947 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24958_24980 = state_24953__$1;(statearr_24958_24980[(2)] = inst_24947);
(statearr_24958_24980[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (6)))
{var inst_24938 = (state_24953[(2)]);var state_24953__$1 = state_24953;if(cljs.core.truth_(inst_24938))
{var statearr_24959_24981 = state_24953__$1;(statearr_24959_24981[(1)] = (8));
} else
{var statearr_24960_24982 = state_24953__$1;(statearr_24960_24982[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (3)))
{var inst_24951 = (state_24953[(2)]);var state_24953__$1 = state_24953;return cljs.core.async.impl.ioc_helpers.return_chan(state_24953__$1,inst_24951);
} else
{if((state_val_24954 === (12)))
{var state_24953__$1 = state_24953;var statearr_24961_24983 = state_24953__$1;(statearr_24961_24983[(2)] = null);
(statearr_24961_24983[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (2)))
{var inst_24930 = (state_24953[(7)]);var state_24953__$1 = state_24953;if(cljs.core.truth_(inst_24930))
{var statearr_24962_24984 = state_24953__$1;(statearr_24962_24984[(1)] = (4));
} else
{var statearr_24963_24985 = state_24953__$1;(statearr_24963_24985[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (11)))
{var inst_24944 = cljs.core.async.close_BANG_(ch);var state_24953__$1 = state_24953;var statearr_24964_24986 = state_24953__$1;(statearr_24964_24986[(2)] = inst_24944);
(statearr_24964_24986[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (9)))
{var state_24953__$1 = state_24953;if(cljs.core.truth_(close_QMARK_))
{var statearr_24965_24987 = state_24953__$1;(statearr_24965_24987[(1)] = (11));
} else
{var statearr_24966_24988 = state_24953__$1;(statearr_24966_24988[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (5)))
{var inst_24930 = (state_24953[(7)]);var state_24953__$1 = state_24953;var statearr_24967_24989 = state_24953__$1;(statearr_24967_24989[(2)] = inst_24930);
(statearr_24967_24989[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (10)))
{var inst_24949 = (state_24953[(2)]);var state_24953__$1 = state_24953;var statearr_24968_24990 = state_24953__$1;(statearr_24968_24990[(2)] = inst_24949);
(statearr_24968_24990[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24954 === (8)))
{var inst_24930 = (state_24953[(7)]);var inst_24940 = cljs.core.next(inst_24930);var inst_24930__$1 = inst_24940;var state_24953__$1 = (function (){var statearr_24969 = state_24953;(statearr_24969[(7)] = inst_24930__$1);
return statearr_24969;
})();var statearr_24970_24991 = state_24953__$1;(statearr_24970_24991[(2)] = null);
(statearr_24970_24991[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24974 = [null,null,null,null,null,null,null,null];(statearr_24974[(0)] = state_machine__12278__auto__);
(statearr_24974[(1)] = (1));
return statearr_24974;
});
var state_machine__12278__auto____1 = (function (state_24953){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24953);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object))
{var ex__12281__auto__ = e24975;var statearr_24976_24992 = state_24953;(statearr_24976_24992[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24953);
return cljs.core.constant$keyword$82;
} else
{throw e24975;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24993 = state_24953;
state_24953 = G__24993;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24977 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24977;
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
cljs.core.async.Mux = (function (){var obj24995 = {};return obj24995;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24999 = x__4277__auto__;return goog.typeOf(G__24999);
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
cljs.core.async.Mult = (function (){var obj25001 = {};return obj25001;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25005 = x__4277__auto__;return goog.typeOf(G__25005);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25009 = x__4277__auto__;return goog.typeOf(G__25009);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25013 = x__4277__auto__;return goog.typeOf(G__25013);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25243 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25243) : cljs.core.atom.call(null,G__25243));
})();var m = (function (){if(typeof cljs.core.async.t25244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25244 = (function (cs,ch,mult,meta25245){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25245 = meta25245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25244.cljs$lang$type = true;
cljs.core.async.t25244.cljs$lang$ctorStr = "cljs.core.async/t25244";
cljs.core.async.t25244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25244");
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25247_25472 = self__.cs;var G__25248_25473 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25247_25472,G__25248_25473) : cljs.core.reset_BANG_.call(null,G__25247_25472,G__25248_25473));
return null;
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25246){var self__ = this;
var _25246__$1 = this;return self__.meta25245;
});})(cs))
;
cljs.core.async.t25244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25246,meta25245__$1){var self__ = this;
var _25246__$1 = this;return (new cljs.core.async.t25244(self__.cs,self__.ch,self__.mult,meta25245__$1));
});})(cs))
;
cljs.core.async.__GT_t25244 = ((function (cs){
return (function __GT_t25244(cs__$1,ch__$1,mult__$1,meta25245){return (new cljs.core.async.t25244(cs__$1,ch__$1,mult__$1,meta25245));
});})(cs))
;
}
return (new cljs.core.async.t25244(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25249 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25249) : cljs.core.atom.call(null,G__25249));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25474,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25474,cs,m,dchan,dctr,done){
return (function (state_25380){var state_val_25381 = (state_25380[(1)]);if((state_val_25381 === (7)))
{var inst_25376 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25382_25475 = state_25380__$1;(statearr_25382_25475[(2)] = inst_25376);
(statearr_25382_25475[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (20)))
{var inst_25281 = (state_25380[(7)]);var inst_25291 = cljs.core.first(inst_25281);var inst_25292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25291,(0),null);var inst_25293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25291,(1),null);var state_25380__$1 = (function (){var statearr_25383 = state_25380;(statearr_25383[(8)] = inst_25292);
return statearr_25383;
})();if(cljs.core.truth_(inst_25293))
{var statearr_25384_25476 = state_25380__$1;(statearr_25384_25476[(1)] = (22));
} else
{var statearr_25385_25477 = state_25380__$1;(statearr_25385_25477[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (27)))
{var inst_25252 = (state_25380[(9)]);var inst_25321 = (state_25380[(10)]);var inst_25323 = (state_25380[(11)]);var inst_25328 = (state_25380[(12)]);var inst_25328__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25321,inst_25323);var inst_25329 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25328__$1,inst_25252,done);var state_25380__$1 = (function (){var statearr_25386 = state_25380;(statearr_25386[(12)] = inst_25328__$1);
return statearr_25386;
})();if(cljs.core.truth_(inst_25329))
{var statearr_25387_25478 = state_25380__$1;(statearr_25387_25478[(1)] = (30));
} else
{var statearr_25388_25479 = state_25380__$1;(statearr_25388_25479[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (1)))
{var state_25380__$1 = state_25380;var statearr_25389_25480 = state_25380__$1;(statearr_25389_25480[(2)] = null);
(statearr_25389_25480[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (24)))
{var inst_25281 = (state_25380[(7)]);var inst_25298 = (state_25380[(2)]);var inst_25299 = cljs.core.next(inst_25281);var inst_25261 = inst_25299;var inst_25262 = null;var inst_25263 = (0);var inst_25264 = (0);var state_25380__$1 = (function (){var statearr_25390 = state_25380;(statearr_25390[(13)] = inst_25264);
(statearr_25390[(14)] = inst_25261);
(statearr_25390[(15)] = inst_25298);
(statearr_25390[(16)] = inst_25263);
(statearr_25390[(17)] = inst_25262);
return statearr_25390;
})();var statearr_25391_25481 = state_25380__$1;(statearr_25391_25481[(2)] = null);
(statearr_25391_25481[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (39)))
{var state_25380__$1 = state_25380;var statearr_25395_25482 = state_25380__$1;(statearr_25395_25482[(2)] = null);
(statearr_25395_25482[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (4)))
{var inst_25252 = (state_25380[(9)]);var inst_25252__$1 = (state_25380[(2)]);var inst_25253 = (inst_25252__$1 == null);var state_25380__$1 = (function (){var statearr_25396 = state_25380;(statearr_25396[(9)] = inst_25252__$1);
return statearr_25396;
})();if(cljs.core.truth_(inst_25253))
{var statearr_25397_25483 = state_25380__$1;(statearr_25397_25483[(1)] = (5));
} else
{var statearr_25398_25484 = state_25380__$1;(statearr_25398_25484[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (15)))
{var inst_25264 = (state_25380[(13)]);var inst_25261 = (state_25380[(14)]);var inst_25263 = (state_25380[(16)]);var inst_25262 = (state_25380[(17)]);var inst_25277 = (state_25380[(2)]);var inst_25278 = (inst_25264 + (1));var tmp25392 = inst_25261;var tmp25393 = inst_25263;var tmp25394 = inst_25262;var inst_25261__$1 = tmp25392;var inst_25262__$1 = tmp25394;var inst_25263__$1 = tmp25393;var inst_25264__$1 = inst_25278;var state_25380__$1 = (function (){var statearr_25399 = state_25380;(statearr_25399[(13)] = inst_25264__$1);
(statearr_25399[(14)] = inst_25261__$1);
(statearr_25399[(16)] = inst_25263__$1);
(statearr_25399[(17)] = inst_25262__$1);
(statearr_25399[(18)] = inst_25277);
return statearr_25399;
})();var statearr_25400_25485 = state_25380__$1;(statearr_25400_25485[(2)] = null);
(statearr_25400_25485[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (21)))
{var inst_25302 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25404_25486 = state_25380__$1;(statearr_25404_25486[(2)] = inst_25302);
(statearr_25404_25486[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (31)))
{var inst_25328 = (state_25380[(12)]);var inst_25332 = done(null);var inst_25333 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25328);var state_25380__$1 = (function (){var statearr_25405 = state_25380;(statearr_25405[(19)] = inst_25332);
return statearr_25405;
})();var statearr_25406_25487 = state_25380__$1;(statearr_25406_25487[(2)] = inst_25333);
(statearr_25406_25487[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (32)))
{var inst_25320 = (state_25380[(20)]);var inst_25322 = (state_25380[(21)]);var inst_25321 = (state_25380[(10)]);var inst_25323 = (state_25380[(11)]);var inst_25335 = (state_25380[(2)]);var inst_25336 = (inst_25323 + (1));var tmp25401 = inst_25320;var tmp25402 = inst_25322;var tmp25403 = inst_25321;var inst_25320__$1 = tmp25401;var inst_25321__$1 = tmp25403;var inst_25322__$1 = tmp25402;var inst_25323__$1 = inst_25336;var state_25380__$1 = (function (){var statearr_25407 = state_25380;(statearr_25407[(20)] = inst_25320__$1);
(statearr_25407[(21)] = inst_25322__$1);
(statearr_25407[(22)] = inst_25335);
(statearr_25407[(10)] = inst_25321__$1);
(statearr_25407[(11)] = inst_25323__$1);
return statearr_25407;
})();var statearr_25408_25488 = state_25380__$1;(statearr_25408_25488[(2)] = null);
(statearr_25408_25488[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (40)))
{var inst_25348 = (state_25380[(23)]);var inst_25352 = done(null);var inst_25353 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25348);var state_25380__$1 = (function (){var statearr_25409 = state_25380;(statearr_25409[(24)] = inst_25352);
return statearr_25409;
})();var statearr_25410_25489 = state_25380__$1;(statearr_25410_25489[(2)] = inst_25353);
(statearr_25410_25489[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (33)))
{var inst_25339 = (state_25380[(25)]);var inst_25341 = cljs.core.chunked_seq_QMARK_(inst_25339);var state_25380__$1 = state_25380;if(inst_25341)
{var statearr_25411_25490 = state_25380__$1;(statearr_25411_25490[(1)] = (36));
} else
{var statearr_25412_25491 = state_25380__$1;(statearr_25412_25491[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (13)))
{var inst_25271 = (state_25380[(26)]);var inst_25274 = cljs.core.async.close_BANG_(inst_25271);var state_25380__$1 = state_25380;var statearr_25413_25492 = state_25380__$1;(statearr_25413_25492[(2)] = inst_25274);
(statearr_25413_25492[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (22)))
{var inst_25292 = (state_25380[(8)]);var inst_25295 = cljs.core.async.close_BANG_(inst_25292);var state_25380__$1 = state_25380;var statearr_25414_25493 = state_25380__$1;(statearr_25414_25493[(2)] = inst_25295);
(statearr_25414_25493[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (36)))
{var inst_25339 = (state_25380[(25)]);var inst_25343 = cljs.core.chunk_first(inst_25339);var inst_25344 = cljs.core.chunk_rest(inst_25339);var inst_25345 = cljs.core.count(inst_25343);var inst_25320 = inst_25344;var inst_25321 = inst_25343;var inst_25322 = inst_25345;var inst_25323 = (0);var state_25380__$1 = (function (){var statearr_25415 = state_25380;(statearr_25415[(20)] = inst_25320);
(statearr_25415[(21)] = inst_25322);
(statearr_25415[(10)] = inst_25321);
(statearr_25415[(11)] = inst_25323);
return statearr_25415;
})();var statearr_25416_25494 = state_25380__$1;(statearr_25416_25494[(2)] = null);
(statearr_25416_25494[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (41)))
{var inst_25339 = (state_25380[(25)]);var inst_25355 = (state_25380[(2)]);var inst_25356 = cljs.core.next(inst_25339);var inst_25320 = inst_25356;var inst_25321 = null;var inst_25322 = (0);var inst_25323 = (0);var state_25380__$1 = (function (){var statearr_25417 = state_25380;(statearr_25417[(20)] = inst_25320);
(statearr_25417[(21)] = inst_25322);
(statearr_25417[(27)] = inst_25355);
(statearr_25417[(10)] = inst_25321);
(statearr_25417[(11)] = inst_25323);
return statearr_25417;
})();var statearr_25418_25495 = state_25380__$1;(statearr_25418_25495[(2)] = null);
(statearr_25418_25495[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (43)))
{var state_25380__$1 = state_25380;var statearr_25419_25496 = state_25380__$1;(statearr_25419_25496[(2)] = null);
(statearr_25419_25496[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (29)))
{var inst_25364 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25420_25497 = state_25380__$1;(statearr_25420_25497[(2)] = inst_25364);
(statearr_25420_25497[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (44)))
{var inst_25373 = (state_25380[(2)]);var state_25380__$1 = (function (){var statearr_25421 = state_25380;(statearr_25421[(28)] = inst_25373);
return statearr_25421;
})();var statearr_25422_25498 = state_25380__$1;(statearr_25422_25498[(2)] = null);
(statearr_25422_25498[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (6)))
{var inst_25312 = (state_25380[(29)]);var inst_25311 = (function (){var G__25423 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25423) : cljs.core.deref.call(null,G__25423));
})();var inst_25312__$1 = cljs.core.keys(inst_25311);var inst_25313 = cljs.core.count(inst_25312__$1);var inst_25314 = (function (){var G__25424 = dctr;var G__25425 = inst_25313;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25424,G__25425) : cljs.core.reset_BANG_.call(null,G__25424,G__25425));
})();var inst_25319 = cljs.core.seq(inst_25312__$1);var inst_25320 = inst_25319;var inst_25321 = null;var inst_25322 = (0);var inst_25323 = (0);var state_25380__$1 = (function (){var statearr_25426 = state_25380;(statearr_25426[(20)] = inst_25320);
(statearr_25426[(21)] = inst_25322);
(statearr_25426[(30)] = inst_25314);
(statearr_25426[(29)] = inst_25312__$1);
(statearr_25426[(10)] = inst_25321);
(statearr_25426[(11)] = inst_25323);
return statearr_25426;
})();var statearr_25427_25499 = state_25380__$1;(statearr_25427_25499[(2)] = null);
(statearr_25427_25499[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (28)))
{var inst_25320 = (state_25380[(20)]);var inst_25339 = (state_25380[(25)]);var inst_25339__$1 = cljs.core.seq(inst_25320);var state_25380__$1 = (function (){var statearr_25428 = state_25380;(statearr_25428[(25)] = inst_25339__$1);
return statearr_25428;
})();if(inst_25339__$1)
{var statearr_25429_25500 = state_25380__$1;(statearr_25429_25500[(1)] = (33));
} else
{var statearr_25430_25501 = state_25380__$1;(statearr_25430_25501[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (25)))
{var inst_25322 = (state_25380[(21)]);var inst_25323 = (state_25380[(11)]);var inst_25325 = (inst_25323 < inst_25322);var inst_25326 = inst_25325;var state_25380__$1 = state_25380;if(cljs.core.truth_(inst_25326))
{var statearr_25431_25502 = state_25380__$1;(statearr_25431_25502[(1)] = (27));
} else
{var statearr_25432_25503 = state_25380__$1;(statearr_25432_25503[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (34)))
{var state_25380__$1 = state_25380;var statearr_25433_25504 = state_25380__$1;(statearr_25433_25504[(2)] = null);
(statearr_25433_25504[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (17)))
{var state_25380__$1 = state_25380;var statearr_25434_25505 = state_25380__$1;(statearr_25434_25505[(2)] = null);
(statearr_25434_25505[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (3)))
{var inst_25378 = (state_25380[(2)]);var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.return_chan(state_25380__$1,inst_25378);
} else
{if((state_val_25381 === (12)))
{var inst_25307 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25435_25506 = state_25380__$1;(statearr_25435_25506[(2)] = inst_25307);
(statearr_25435_25506[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (2)))
{var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25380__$1,(4),ch);
} else
{if((state_val_25381 === (23)))
{var state_25380__$1 = state_25380;var statearr_25436_25507 = state_25380__$1;(statearr_25436_25507[(2)] = null);
(statearr_25436_25507[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (35)))
{var inst_25362 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25437_25508 = state_25380__$1;(statearr_25437_25508[(2)] = inst_25362);
(statearr_25437_25508[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (19)))
{var inst_25281 = (state_25380[(7)]);var inst_25285 = cljs.core.chunk_first(inst_25281);var inst_25286 = cljs.core.chunk_rest(inst_25281);var inst_25287 = cljs.core.count(inst_25285);var inst_25261 = inst_25286;var inst_25262 = inst_25285;var inst_25263 = inst_25287;var inst_25264 = (0);var state_25380__$1 = (function (){var statearr_25438 = state_25380;(statearr_25438[(13)] = inst_25264);
(statearr_25438[(14)] = inst_25261);
(statearr_25438[(16)] = inst_25263);
(statearr_25438[(17)] = inst_25262);
return statearr_25438;
})();var statearr_25439_25509 = state_25380__$1;(statearr_25439_25509[(2)] = null);
(statearr_25439_25509[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (11)))
{var inst_25261 = (state_25380[(14)]);var inst_25281 = (state_25380[(7)]);var inst_25281__$1 = cljs.core.seq(inst_25261);var state_25380__$1 = (function (){var statearr_25440 = state_25380;(statearr_25440[(7)] = inst_25281__$1);
return statearr_25440;
})();if(inst_25281__$1)
{var statearr_25441_25510 = state_25380__$1;(statearr_25441_25510[(1)] = (16));
} else
{var statearr_25442_25511 = state_25380__$1;(statearr_25442_25511[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (9)))
{var inst_25309 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25443_25512 = state_25380__$1;(statearr_25443_25512[(2)] = inst_25309);
(statearr_25443_25512[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (5)))
{var inst_25259 = (function (){var G__25444 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25444) : cljs.core.deref.call(null,G__25444));
})();var inst_25260 = cljs.core.seq(inst_25259);var inst_25261 = inst_25260;var inst_25262 = null;var inst_25263 = (0);var inst_25264 = (0);var state_25380__$1 = (function (){var statearr_25445 = state_25380;(statearr_25445[(13)] = inst_25264);
(statearr_25445[(14)] = inst_25261);
(statearr_25445[(16)] = inst_25263);
(statearr_25445[(17)] = inst_25262);
return statearr_25445;
})();var statearr_25446_25513 = state_25380__$1;(statearr_25446_25513[(2)] = null);
(statearr_25446_25513[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (14)))
{var state_25380__$1 = state_25380;var statearr_25447_25514 = state_25380__$1;(statearr_25447_25514[(2)] = null);
(statearr_25447_25514[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (45)))
{var inst_25370 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25448_25515 = state_25380__$1;(statearr_25448_25515[(2)] = inst_25370);
(statearr_25448_25515[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (26)))
{var inst_25312 = (state_25380[(29)]);var inst_25366 = (state_25380[(2)]);var inst_25367 = cljs.core.seq(inst_25312);var state_25380__$1 = (function (){var statearr_25449 = state_25380;(statearr_25449[(31)] = inst_25366);
return statearr_25449;
})();if(inst_25367)
{var statearr_25450_25516 = state_25380__$1;(statearr_25450_25516[(1)] = (42));
} else
{var statearr_25451_25517 = state_25380__$1;(statearr_25451_25517[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (16)))
{var inst_25281 = (state_25380[(7)]);var inst_25283 = cljs.core.chunked_seq_QMARK_(inst_25281);var state_25380__$1 = state_25380;if(inst_25283)
{var statearr_25452_25518 = state_25380__$1;(statearr_25452_25518[(1)] = (19));
} else
{var statearr_25453_25519 = state_25380__$1;(statearr_25453_25519[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (38)))
{var inst_25359 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25454_25520 = state_25380__$1;(statearr_25454_25520[(2)] = inst_25359);
(statearr_25454_25520[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (30)))
{var state_25380__$1 = state_25380;var statearr_25455_25521 = state_25380__$1;(statearr_25455_25521[(2)] = null);
(statearr_25455_25521[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (10)))
{var inst_25264 = (state_25380[(13)]);var inst_25262 = (state_25380[(17)]);var inst_25270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25262,inst_25264);var inst_25271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25270,(0),null);var inst_25272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25270,(1),null);var state_25380__$1 = (function (){var statearr_25456 = state_25380;(statearr_25456[(26)] = inst_25271);
return statearr_25456;
})();if(cljs.core.truth_(inst_25272))
{var statearr_25457_25522 = state_25380__$1;(statearr_25457_25522[(1)] = (13));
} else
{var statearr_25458_25523 = state_25380__$1;(statearr_25458_25523[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (18)))
{var inst_25305 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25459_25524 = state_25380__$1;(statearr_25459_25524[(2)] = inst_25305);
(statearr_25459_25524[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (42)))
{var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25380__$1,(45),dchan);
} else
{if((state_val_25381 === (37)))
{var inst_25339 = (state_25380[(25)]);var inst_25348 = (state_25380[(23)]);var inst_25252 = (state_25380[(9)]);var inst_25348__$1 = cljs.core.first(inst_25339);var inst_25349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25348__$1,inst_25252,done);var state_25380__$1 = (function (){var statearr_25460 = state_25380;(statearr_25460[(23)] = inst_25348__$1);
return statearr_25460;
})();if(cljs.core.truth_(inst_25349))
{var statearr_25461_25525 = state_25380__$1;(statearr_25461_25525[(1)] = (39));
} else
{var statearr_25462_25526 = state_25380__$1;(statearr_25462_25526[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25381 === (8)))
{var inst_25264 = (state_25380[(13)]);var inst_25263 = (state_25380[(16)]);var inst_25266 = (inst_25264 < inst_25263);var inst_25267 = inst_25266;var state_25380__$1 = state_25380;if(cljs.core.truth_(inst_25267))
{var statearr_25463_25527 = state_25380__$1;(statearr_25463_25527[(1)] = (10));
} else
{var statearr_25464_25528 = state_25380__$1;(statearr_25464_25528[(1)] = (11));
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
});})(c__12292__auto___25474,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25474,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25468[(0)] = state_machine__12278__auto__);
(statearr_25468[(1)] = (1));
return statearr_25468;
});
var state_machine__12278__auto____1 = (function (state_25380){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25380);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25469){if((e25469 instanceof Object))
{var ex__12281__auto__ = e25469;var statearr_25470_25529 = state_25380;(statearr_25470_25529[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25380);
return cljs.core.constant$keyword$82;
} else
{throw e25469;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25530 = state_25380;
state_25380 = G__25530;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25380){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25474,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25471 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25474);
return statearr_25471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25474,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25535 = {};return obj25535;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25539 = x__4277__auto__;return goog.typeOf(G__25539);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25543 = x__4277__auto__;return goog.typeOf(G__25543);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25547 = x__4277__auto__;return goog.typeOf(G__25547);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25551 = x__4277__auto__;return goog.typeOf(G__25551);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25555 = x__4277__auto__;return goog.typeOf(G__25555);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25556){var map__25562 = p__25556;var map__25562__$1 = ((cljs.core.seq_QMARK_(map__25562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25562):map__25562);var opts = map__25562__$1;var statearr_25563_25567 = state;(statearr_25563_25567[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25562,map__25562__$1,opts){
return (function (val){var statearr_25564_25568 = state;(statearr_25564_25568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25562,map__25562__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25565_25569 = state;(statearr_25565_25569[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25566 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25566) : cljs.core.deref.call(null,G__25566));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25556 = null;if (arguments.length > 3) {
  p__25556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25556);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25570){
var state = cljs.core.first(arglist__25570);
arglist__25570 = cljs.core.next(arglist__25570);
var cont_block = cljs.core.first(arglist__25570);
arglist__25570 = cljs.core.next(arglist__25570);
var ports = cljs.core.first(arglist__25570);
var p__25556 = cljs.core.rest(arglist__25570);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25556);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25704 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25704) : cljs.core.atom.call(null,G__25704));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25705 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25705) : cljs.core.atom.call(null,G__25705));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25706 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25706) : attr.call(null,G__25706));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25707 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25707) : cljs.core.deref.call(null,G__25707));
})();var mode = (function (){var G__25708 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25708) : cljs.core.deref.call(null,G__25708));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25709 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25710){
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
this.meta25710 = meta25710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25709.cljs$lang$type = true;
cljs.core.async.t25709.cljs$lang$ctorStr = "cljs.core.async/t25709";
cljs.core.async.t25709.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25709");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25712_25837 = self__.cs;var G__25713_25838 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25712_25837,G__25713_25838) : cljs.core.reset_BANG_.call(null,G__25712_25837,G__25713_25838));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25714 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25714) : self__.solo_modes.call(null,G__25714));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25715_25839 = self__.solo_mode;var G__25716_25840 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25715_25839,G__25716_25840) : cljs.core.reset_BANG_.call(null,G__25715_25839,G__25716_25840));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25711){var self__ = this;
var _25711__$1 = this;return self__.meta25710;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25711,meta25710__$1){var self__ = this;
var _25711__$1 = this;return (new cljs.core.async.t25709(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25710__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25709 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25709(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25710){return (new cljs.core.async.t25709(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25710));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25709(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25788){var state_val_25789 = (state_25788[(1)]);if((state_val_25789 === (7)))
{var inst_25730 = (state_25788[(7)]);var inst_25735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25730);var state_25788__$1 = state_25788;var statearr_25790_25842 = state_25788__$1;(statearr_25790_25842[(2)] = inst_25735);
(statearr_25790_25842[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (20)))
{var inst_25745 = (state_25788[(8)]);var state_25788__$1 = state_25788;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25788__$1,(23),out,inst_25745);
} else
{if((state_val_25789 === (1)))
{var inst_25720 = (state_25788[(9)]);var inst_25720__$1 = calc_state();var inst_25721 = cljs.core.seq_QMARK_(inst_25720__$1);var state_25788__$1 = (function (){var statearr_25791 = state_25788;(statearr_25791[(9)] = inst_25720__$1);
return statearr_25791;
})();if(inst_25721)
{var statearr_25792_25843 = state_25788__$1;(statearr_25792_25843[(1)] = (2));
} else
{var statearr_25793_25844 = state_25788__$1;(statearr_25793_25844[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (24)))
{var inst_25738 = (state_25788[(10)]);var inst_25730 = inst_25738;var state_25788__$1 = (function (){var statearr_25794 = state_25788;(statearr_25794[(7)] = inst_25730);
return statearr_25794;
})();var statearr_25795_25845 = state_25788__$1;(statearr_25795_25845[(2)] = null);
(statearr_25795_25845[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (4)))
{var inst_25720 = (state_25788[(9)]);var inst_25726 = (state_25788[(2)]);var inst_25727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25726,cljs.core.constant$keyword$96);var inst_25728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25726,cljs.core.constant$keyword$95);var inst_25729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25726,cljs.core.constant$keyword$94);var inst_25730 = inst_25720;var state_25788__$1 = (function (){var statearr_25796 = state_25788;(statearr_25796[(11)] = inst_25728);
(statearr_25796[(12)] = inst_25727);
(statearr_25796[(7)] = inst_25730);
(statearr_25796[(13)] = inst_25729);
return statearr_25796;
})();var statearr_25797_25846 = state_25788__$1;(statearr_25797_25846[(2)] = null);
(statearr_25797_25846[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (15)))
{var state_25788__$1 = state_25788;var statearr_25798_25847 = state_25788__$1;(statearr_25798_25847[(2)] = null);
(statearr_25798_25847[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (21)))
{var inst_25738 = (state_25788[(10)]);var inst_25730 = inst_25738;var state_25788__$1 = (function (){var statearr_25799 = state_25788;(statearr_25799[(7)] = inst_25730);
return statearr_25799;
})();var statearr_25800_25848 = state_25788__$1;(statearr_25800_25848[(2)] = null);
(statearr_25800_25848[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (13)))
{var inst_25784 = (state_25788[(2)]);var state_25788__$1 = state_25788;var statearr_25801_25849 = state_25788__$1;(statearr_25801_25849[(2)] = inst_25784);
(statearr_25801_25849[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (22)))
{var inst_25782 = (state_25788[(2)]);var state_25788__$1 = state_25788;var statearr_25802_25850 = state_25788__$1;(statearr_25802_25850[(2)] = inst_25782);
(statearr_25802_25850[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (6)))
{var inst_25786 = (state_25788[(2)]);var state_25788__$1 = state_25788;return cljs.core.async.impl.ioc_helpers.return_chan(state_25788__$1,inst_25786);
} else
{if((state_val_25789 === (25)))
{var state_25788__$1 = state_25788;var statearr_25803_25851 = state_25788__$1;(statearr_25803_25851[(2)] = null);
(statearr_25803_25851[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (17)))
{var inst_25761 = (state_25788[(14)]);var state_25788__$1 = state_25788;var statearr_25804_25852 = state_25788__$1;(statearr_25804_25852[(2)] = inst_25761);
(statearr_25804_25852[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (3)))
{var inst_25720 = (state_25788[(9)]);var state_25788__$1 = state_25788;var statearr_25805_25853 = state_25788__$1;(statearr_25805_25853[(2)] = inst_25720);
(statearr_25805_25853[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (12)))
{var inst_25761 = (state_25788[(14)]);var inst_25741 = (state_25788[(15)]);var inst_25746 = (state_25788[(16)]);var inst_25761__$1 = (function (){var G__25806 = inst_25746;return (inst_25741.cljs$core$IFn$_invoke$arity$1 ? inst_25741.cljs$core$IFn$_invoke$arity$1(G__25806) : inst_25741.call(null,G__25806));
})();var state_25788__$1 = (function (){var statearr_25807 = state_25788;(statearr_25807[(14)] = inst_25761__$1);
return statearr_25807;
})();if(cljs.core.truth_(inst_25761__$1))
{var statearr_25808_25854 = state_25788__$1;(statearr_25808_25854[(1)] = (17));
} else
{var statearr_25809_25855 = state_25788__$1;(statearr_25809_25855[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (2)))
{var inst_25720 = (state_25788[(9)]);var inst_25723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25720);var state_25788__$1 = state_25788;var statearr_25810_25856 = state_25788__$1;(statearr_25810_25856[(2)] = inst_25723);
(statearr_25810_25856[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (23)))
{var inst_25773 = (state_25788[(2)]);var state_25788__$1 = state_25788;if(cljs.core.truth_(inst_25773))
{var statearr_25811_25857 = state_25788__$1;(statearr_25811_25857[(1)] = (24));
} else
{var statearr_25812_25858 = state_25788__$1;(statearr_25812_25858[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (19)))
{var inst_25770 = (state_25788[(2)]);var state_25788__$1 = state_25788;if(cljs.core.truth_(inst_25770))
{var statearr_25813_25859 = state_25788__$1;(statearr_25813_25859[(1)] = (20));
} else
{var statearr_25814_25860 = state_25788__$1;(statearr_25814_25860[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (11)))
{var inst_25745 = (state_25788[(8)]);var inst_25751 = (inst_25745 == null);var state_25788__$1 = state_25788;if(cljs.core.truth_(inst_25751))
{var statearr_25815_25861 = state_25788__$1;(statearr_25815_25861[(1)] = (14));
} else
{var statearr_25816_25862 = state_25788__$1;(statearr_25816_25862[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (9)))
{var inst_25738 = (state_25788[(10)]);var inst_25738__$1 = (state_25788[(2)]);var inst_25739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25738__$1,cljs.core.constant$keyword$96);var inst_25740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25738__$1,cljs.core.constant$keyword$95);var inst_25741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25738__$1,cljs.core.constant$keyword$94);var state_25788__$1 = (function (){var statearr_25817 = state_25788;(statearr_25817[(17)] = inst_25740);
(statearr_25817[(15)] = inst_25741);
(statearr_25817[(10)] = inst_25738__$1);
return statearr_25817;
})();return cljs.core.async.ioc_alts_BANG_(state_25788__$1,(10),inst_25739);
} else
{if((state_val_25789 === (5)))
{var inst_25730 = (state_25788[(7)]);var inst_25733 = cljs.core.seq_QMARK_(inst_25730);var state_25788__$1 = state_25788;if(inst_25733)
{var statearr_25818_25863 = state_25788__$1;(statearr_25818_25863[(1)] = (7));
} else
{var statearr_25819_25864 = state_25788__$1;(statearr_25819_25864[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (14)))
{var inst_25746 = (state_25788[(16)]);var inst_25753 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25746);var state_25788__$1 = state_25788;var statearr_25820_25865 = state_25788__$1;(statearr_25820_25865[(2)] = inst_25753);
(statearr_25820_25865[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (26)))
{var inst_25778 = (state_25788[(2)]);var state_25788__$1 = state_25788;var statearr_25821_25866 = state_25788__$1;(statearr_25821_25866[(2)] = inst_25778);
(statearr_25821_25866[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (16)))
{var inst_25756 = (state_25788[(2)]);var inst_25757 = calc_state();var inst_25730 = inst_25757;var state_25788__$1 = (function (){var statearr_25822 = state_25788;(statearr_25822[(18)] = inst_25756);
(statearr_25822[(7)] = inst_25730);
return statearr_25822;
})();var statearr_25823_25867 = state_25788__$1;(statearr_25823_25867[(2)] = null);
(statearr_25823_25867[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (10)))
{var inst_25745 = (state_25788[(8)]);var inst_25746 = (state_25788[(16)]);var inst_25744 = (state_25788[(2)]);var inst_25745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25744,(0),null);var inst_25746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25744,(1),null);var inst_25747 = (inst_25745__$1 == null);var inst_25748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25746__$1,change);var inst_25749 = (inst_25747) || (inst_25748);var state_25788__$1 = (function (){var statearr_25824 = state_25788;(statearr_25824[(8)] = inst_25745__$1);
(statearr_25824[(16)] = inst_25746__$1);
return statearr_25824;
})();if(cljs.core.truth_(inst_25749))
{var statearr_25825_25868 = state_25788__$1;(statearr_25825_25868[(1)] = (11));
} else
{var statearr_25826_25869 = state_25788__$1;(statearr_25826_25869[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (18)))
{var inst_25740 = (state_25788[(17)]);var inst_25741 = (state_25788[(15)]);var inst_25746 = (state_25788[(16)]);var inst_25765 = cljs.core.empty_QMARK_(inst_25741);var inst_25766 = (function (){var G__25827 = inst_25746;return (inst_25740.cljs$core$IFn$_invoke$arity$1 ? inst_25740.cljs$core$IFn$_invoke$arity$1(G__25827) : inst_25740.call(null,G__25827));
})();var inst_25767 = cljs.core.not(inst_25766);var inst_25768 = (inst_25765) && (inst_25767);var state_25788__$1 = state_25788;var statearr_25828_25870 = state_25788__$1;(statearr_25828_25870[(2)] = inst_25768);
(statearr_25828_25870[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25789 === (8)))
{var inst_25730 = (state_25788[(7)]);var state_25788__$1 = state_25788;var statearr_25829_25871 = state_25788__$1;(statearr_25829_25871[(2)] = inst_25730);
(statearr_25829_25871[(1)] = (9));
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
});})(c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25833[(0)] = state_machine__12278__auto__);
(statearr_25833[(1)] = (1));
return statearr_25833;
});
var state_machine__12278__auto____1 = (function (state_25788){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25788);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25834){if((e25834 instanceof Object))
{var ex__12281__auto__ = e25834;var statearr_25835_25872 = state_25788;(statearr_25835_25872[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25788);
return cljs.core.constant$keyword$82;
} else
{throw e25834;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25873 = state_25788;
state_25788 = G__25873;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25788){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25836 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25841);
return statearr_25836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25875 = {};return obj25875;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25879 = x__4277__auto__;return goog.typeOf(G__25879);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25883 = x__4277__auto__;return goog.typeOf(G__25883);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25889 = x__4277__auto__;return goog.typeOf(G__25889);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25891 = x__4277__auto__;return goog.typeOf(G__25891);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__26030 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26030) : cljs.core.atom.call(null,G__26030));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26032 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26032) : cljs.core.deref.call(null,G__26032));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25892_SHARP_){if(cljs.core.truth_((function (){var G__26033 = topic;return (p1__25892_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25892_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26033) : p1__25892_SHARP_.call(null,G__26033));
})()))
{return p1__25892_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25892_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26034 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26034) : buf_fn.call(null,G__26034));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26035 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26036){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26036 = meta26036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26035.cljs$lang$type = true;
cljs.core.async.t26035.cljs$lang$ctorStr = "cljs.core.async/t26035";
cljs.core.async.t26035.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26035");
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__26038 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26038) : self__.ensure_mult.call(null,G__26038));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26039 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26039) : cljs.core.deref.call(null,G__26039));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__26040 = self__.mults;var G__26041 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26040,G__26041) : cljs.core.reset_BANG_.call(null,G__26040,G__26041));
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26037){var self__ = this;
var _26037__$1 = this;return self__.meta26036;
});})(mults,ensure_mult))
;
cljs.core.async.t26035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26037,meta26036__$1){var self__ = this;
var _26037__$1 = this;return (new cljs.core.async.t26035(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26036__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26035 = ((function (mults,ensure_mult){
return (function __GT_t26035(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26036){return (new cljs.core.async.t26035(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26036));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26035(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26164,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26164,mults,ensure_mult,p){
return (function (state_26113){var state_val_26114 = (state_26113[(1)]);if((state_val_26114 === (7)))
{var inst_26109 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26115_26165 = state_26113__$1;(statearr_26115_26165[(2)] = inst_26109);
(statearr_26115_26165[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (20)))
{var state_26113__$1 = state_26113;var statearr_26116_26166 = state_26113__$1;(statearr_26116_26166[(2)] = null);
(statearr_26116_26166[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (1)))
{var state_26113__$1 = state_26113;var statearr_26117_26167 = state_26113__$1;(statearr_26117_26167[(2)] = null);
(statearr_26117_26167[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (24)))
{var inst_26092 = (state_26113[(7)]);var inst_26101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26092);var state_26113__$1 = state_26113;var statearr_26118_26168 = state_26113__$1;(statearr_26118_26168[(2)] = inst_26101);
(statearr_26118_26168[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (4)))
{var inst_26044 = (state_26113[(8)]);var inst_26044__$1 = (state_26113[(2)]);var inst_26045 = (inst_26044__$1 == null);var state_26113__$1 = (function (){var statearr_26119 = state_26113;(statearr_26119[(8)] = inst_26044__$1);
return statearr_26119;
})();if(cljs.core.truth_(inst_26045))
{var statearr_26120_26169 = state_26113__$1;(statearr_26120_26169[(1)] = (5));
} else
{var statearr_26121_26170 = state_26113__$1;(statearr_26121_26170[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (15)))
{var inst_26086 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26122_26171 = state_26113__$1;(statearr_26122_26171[(2)] = inst_26086);
(statearr_26122_26171[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (21)))
{var inst_26106 = (state_26113[(2)]);var state_26113__$1 = (function (){var statearr_26123 = state_26113;(statearr_26123[(9)] = inst_26106);
return statearr_26123;
})();var statearr_26124_26172 = state_26113__$1;(statearr_26124_26172[(2)] = null);
(statearr_26124_26172[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (13)))
{var inst_26068 = (state_26113[(10)]);var inst_26070 = cljs.core.chunked_seq_QMARK_(inst_26068);var state_26113__$1 = state_26113;if(inst_26070)
{var statearr_26125_26173 = state_26113__$1;(statearr_26125_26173[(1)] = (16));
} else
{var statearr_26126_26174 = state_26113__$1;(statearr_26126_26174[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (22)))
{var inst_26098 = (state_26113[(2)]);var state_26113__$1 = state_26113;if(cljs.core.truth_(inst_26098))
{var statearr_26127_26175 = state_26113__$1;(statearr_26127_26175[(1)] = (23));
} else
{var statearr_26128_26176 = state_26113__$1;(statearr_26128_26176[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (6)))
{var inst_26044 = (state_26113[(8)]);var inst_26094 = (state_26113[(11)]);var inst_26092 = (state_26113[(7)]);var inst_26092__$1 = (function (){var G__26129 = inst_26044;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26129) : topic_fn.call(null,G__26129));
})();var inst_26093 = (function (){var G__26130 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26130) : cljs.core.deref.call(null,G__26130));
})();var inst_26094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26093,inst_26092__$1);var state_26113__$1 = (function (){var statearr_26131 = state_26113;(statearr_26131[(11)] = inst_26094__$1);
(statearr_26131[(7)] = inst_26092__$1);
return statearr_26131;
})();if(cljs.core.truth_(inst_26094__$1))
{var statearr_26132_26177 = state_26113__$1;(statearr_26132_26177[(1)] = (19));
} else
{var statearr_26133_26178 = state_26113__$1;(statearr_26133_26178[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (25)))
{var inst_26103 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26134_26179 = state_26113__$1;(statearr_26134_26179[(2)] = inst_26103);
(statearr_26134_26179[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (17)))
{var inst_26068 = (state_26113[(10)]);var inst_26077 = cljs.core.first(inst_26068);var inst_26078 = cljs.core.async.muxch_STAR_(inst_26077);var inst_26079 = cljs.core.async.close_BANG_(inst_26078);var inst_26080 = cljs.core.next(inst_26068);var inst_26054 = inst_26080;var inst_26055 = null;var inst_26056 = (0);var inst_26057 = (0);var state_26113__$1 = (function (){var statearr_26135 = state_26113;(statearr_26135[(12)] = inst_26054);
(statearr_26135[(13)] = inst_26056);
(statearr_26135[(14)] = inst_26057);
(statearr_26135[(15)] = inst_26079);
(statearr_26135[(16)] = inst_26055);
return statearr_26135;
})();var statearr_26136_26180 = state_26113__$1;(statearr_26136_26180[(2)] = null);
(statearr_26136_26180[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (3)))
{var inst_26111 = (state_26113[(2)]);var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.return_chan(state_26113__$1,inst_26111);
} else
{if((state_val_26114 === (12)))
{var inst_26088 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26137_26181 = state_26113__$1;(statearr_26137_26181[(2)] = inst_26088);
(statearr_26137_26181[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (2)))
{var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26113__$1,(4),ch);
} else
{if((state_val_26114 === (23)))
{var state_26113__$1 = state_26113;var statearr_26138_26182 = state_26113__$1;(statearr_26138_26182[(2)] = null);
(statearr_26138_26182[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (19)))
{var inst_26044 = (state_26113[(8)]);var inst_26094 = (state_26113[(11)]);var inst_26096 = cljs.core.async.muxch_STAR_(inst_26094);var state_26113__$1 = state_26113;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26113__$1,(22),inst_26096,inst_26044);
} else
{if((state_val_26114 === (11)))
{var inst_26054 = (state_26113[(12)]);var inst_26068 = (state_26113[(10)]);var inst_26068__$1 = cljs.core.seq(inst_26054);var state_26113__$1 = (function (){var statearr_26139 = state_26113;(statearr_26139[(10)] = inst_26068__$1);
return statearr_26139;
})();if(inst_26068__$1)
{var statearr_26140_26183 = state_26113__$1;(statearr_26140_26183[(1)] = (13));
} else
{var statearr_26141_26184 = state_26113__$1;(statearr_26141_26184[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (9)))
{var inst_26090 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26142_26185 = state_26113__$1;(statearr_26142_26185[(2)] = inst_26090);
(statearr_26142_26185[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (5)))
{var inst_26051 = (function (){var G__26143 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26143) : cljs.core.deref.call(null,G__26143));
})();var inst_26052 = cljs.core.vals(inst_26051);var inst_26053 = cljs.core.seq(inst_26052);var inst_26054 = inst_26053;var inst_26055 = null;var inst_26056 = (0);var inst_26057 = (0);var state_26113__$1 = (function (){var statearr_26144 = state_26113;(statearr_26144[(12)] = inst_26054);
(statearr_26144[(13)] = inst_26056);
(statearr_26144[(14)] = inst_26057);
(statearr_26144[(16)] = inst_26055);
return statearr_26144;
})();var statearr_26145_26186 = state_26113__$1;(statearr_26145_26186[(2)] = null);
(statearr_26145_26186[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (14)))
{var state_26113__$1 = state_26113;var statearr_26149_26187 = state_26113__$1;(statearr_26149_26187[(2)] = null);
(statearr_26149_26187[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (16)))
{var inst_26068 = (state_26113[(10)]);var inst_26072 = cljs.core.chunk_first(inst_26068);var inst_26073 = cljs.core.chunk_rest(inst_26068);var inst_26074 = cljs.core.count(inst_26072);var inst_26054 = inst_26073;var inst_26055 = inst_26072;var inst_26056 = inst_26074;var inst_26057 = (0);var state_26113__$1 = (function (){var statearr_26150 = state_26113;(statearr_26150[(12)] = inst_26054);
(statearr_26150[(13)] = inst_26056);
(statearr_26150[(14)] = inst_26057);
(statearr_26150[(16)] = inst_26055);
return statearr_26150;
})();var statearr_26151_26188 = state_26113__$1;(statearr_26151_26188[(2)] = null);
(statearr_26151_26188[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (10)))
{var inst_26054 = (state_26113[(12)]);var inst_26056 = (state_26113[(13)]);var inst_26057 = (state_26113[(14)]);var inst_26055 = (state_26113[(16)]);var inst_26062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26055,inst_26057);var inst_26063 = cljs.core.async.muxch_STAR_(inst_26062);var inst_26064 = cljs.core.async.close_BANG_(inst_26063);var inst_26065 = (inst_26057 + (1));var tmp26146 = inst_26054;var tmp26147 = inst_26056;var tmp26148 = inst_26055;var inst_26054__$1 = tmp26146;var inst_26055__$1 = tmp26148;var inst_26056__$1 = tmp26147;var inst_26057__$1 = inst_26065;var state_26113__$1 = (function (){var statearr_26152 = state_26113;(statearr_26152[(12)] = inst_26054__$1);
(statearr_26152[(13)] = inst_26056__$1);
(statearr_26152[(14)] = inst_26057__$1);
(statearr_26152[(16)] = inst_26055__$1);
(statearr_26152[(17)] = inst_26064);
return statearr_26152;
})();var statearr_26153_26189 = state_26113__$1;(statearr_26153_26189[(2)] = null);
(statearr_26153_26189[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (18)))
{var inst_26083 = (state_26113[(2)]);var state_26113__$1 = state_26113;var statearr_26154_26190 = state_26113__$1;(statearr_26154_26190[(2)] = inst_26083);
(statearr_26154_26190[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26114 === (8)))
{var inst_26056 = (state_26113[(13)]);var inst_26057 = (state_26113[(14)]);var inst_26059 = (inst_26057 < inst_26056);var inst_26060 = inst_26059;var state_26113__$1 = state_26113;if(cljs.core.truth_(inst_26060))
{var statearr_26155_26191 = state_26113__$1;(statearr_26155_26191[(1)] = (10));
} else
{var statearr_26156_26192 = state_26113__$1;(statearr_26156_26192[(1)] = (11));
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
});})(c__12292__auto___26164,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26164,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26160[(0)] = state_machine__12278__auto__);
(statearr_26160[(1)] = (1));
return statearr_26160;
});
var state_machine__12278__auto____1 = (function (state_26113){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26113);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26161){if((e26161 instanceof Object))
{var ex__12281__auto__ = e26161;var statearr_26162_26193 = state_26113;(statearr_26162_26193[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26113);
return cljs.core.constant$keyword$82;
} else
{throw e26161;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26194 = state_26113;
state_26113 = G__26194;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26113){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26164,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26163 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26164);
return statearr_26163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26164,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26275 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26275) : cljs.core.atom.call(null,G__26275));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26314){var state_val_26315 = (state_26314[(1)]);if((state_val_26315 === (7)))
{var state_26314__$1 = state_26314;var statearr_26316_26349 = state_26314__$1;(statearr_26316_26349[(2)] = null);
(statearr_26316_26349[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (1)))
{var state_26314__$1 = state_26314;var statearr_26317_26350 = state_26314__$1;(statearr_26317_26350[(2)] = null);
(statearr_26317_26350[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (4)))
{var inst_26278 = (state_26314[(7)]);var inst_26280 = (inst_26278 < cnt);var state_26314__$1 = state_26314;if(cljs.core.truth_(inst_26280))
{var statearr_26318_26351 = state_26314__$1;(statearr_26318_26351[(1)] = (6));
} else
{var statearr_26319_26352 = state_26314__$1;(statearr_26319_26352[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (15)))
{var inst_26310 = (state_26314[(2)]);var state_26314__$1 = state_26314;var statearr_26320_26353 = state_26314__$1;(statearr_26320_26353[(2)] = inst_26310);
(statearr_26320_26353[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (13)))
{var inst_26303 = cljs.core.async.close_BANG_(out);var state_26314__$1 = state_26314;var statearr_26321_26354 = state_26314__$1;(statearr_26321_26354[(2)] = inst_26303);
(statearr_26321_26354[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (6)))
{var state_26314__$1 = state_26314;var statearr_26322_26355 = state_26314__$1;(statearr_26322_26355[(2)] = null);
(statearr_26322_26355[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (3)))
{var inst_26312 = (state_26314[(2)]);var state_26314__$1 = state_26314;return cljs.core.async.impl.ioc_helpers.return_chan(state_26314__$1,inst_26312);
} else
{if((state_val_26315 === (12)))
{var inst_26300 = (state_26314[(8)]);var inst_26300__$1 = (state_26314[(2)]);var inst_26301 = cljs.core.some(cljs.core.nil_QMARK_,inst_26300__$1);var state_26314__$1 = (function (){var statearr_26323 = state_26314;(statearr_26323[(8)] = inst_26300__$1);
return statearr_26323;
})();if(cljs.core.truth_(inst_26301))
{var statearr_26324_26356 = state_26314__$1;(statearr_26324_26356[(1)] = (13));
} else
{var statearr_26325_26357 = state_26314__$1;(statearr_26325_26357[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (2)))
{var inst_26277 = (function (){var G__26326 = dctr;var G__26327 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26326,G__26327) : cljs.core.reset_BANG_.call(null,G__26326,G__26327));
})();var inst_26278 = (0);var state_26314__$1 = (function (){var statearr_26328 = state_26314;(statearr_26328[(7)] = inst_26278);
(statearr_26328[(9)] = inst_26277);
return statearr_26328;
})();var statearr_26329_26358 = state_26314__$1;(statearr_26329_26358[(2)] = null);
(statearr_26329_26358[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (11)))
{var inst_26278 = (state_26314[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26314,(10),Object,null,(9));var inst_26287 = (function (){var G__26330 = inst_26278;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26330) : chs__$1.call(null,G__26330));
})();var inst_26288 = (function (){var G__26331 = inst_26278;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26331) : done.call(null,G__26331));
})();var inst_26289 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26287,inst_26288);var state_26314__$1 = state_26314;var statearr_26332_26359 = state_26314__$1;(statearr_26332_26359[(2)] = inst_26289);
cljs.core.async.impl.ioc_helpers.process_exception(state_26314__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (9)))
{var inst_26278 = (state_26314[(7)]);var inst_26291 = (state_26314[(2)]);var inst_26292 = (inst_26278 + (1));var inst_26278__$1 = inst_26292;var state_26314__$1 = (function (){var statearr_26333 = state_26314;(statearr_26333[(10)] = inst_26291);
(statearr_26333[(7)] = inst_26278__$1);
return statearr_26333;
})();var statearr_26334_26360 = state_26314__$1;(statearr_26334_26360[(2)] = null);
(statearr_26334_26360[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (5)))
{var inst_26298 = (state_26314[(2)]);var state_26314__$1 = (function (){var statearr_26335 = state_26314;(statearr_26335[(11)] = inst_26298);
return statearr_26335;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26314__$1,(12),dchan);
} else
{if((state_val_26315 === (14)))
{var inst_26300 = (state_26314[(8)]);var inst_26305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26300);var state_26314__$1 = state_26314;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26314__$1,(16),out,inst_26305);
} else
{if((state_val_26315 === (16)))
{var inst_26307 = (state_26314[(2)]);var state_26314__$1 = (function (){var statearr_26336 = state_26314;(statearr_26336[(12)] = inst_26307);
return statearr_26336;
})();var statearr_26337_26361 = state_26314__$1;(statearr_26337_26361[(2)] = null);
(statearr_26337_26361[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (10)))
{var inst_26282 = (state_26314[(2)]);var inst_26283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26314__$1 = (function (){var statearr_26338 = state_26314;(statearr_26338[(13)] = inst_26282);
return statearr_26338;
})();var statearr_26339_26362 = state_26314__$1;(statearr_26339_26362[(2)] = inst_26283);
cljs.core.async.impl.ioc_helpers.process_exception(state_26314__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26315 === (8)))
{var inst_26296 = (state_26314[(2)]);var state_26314__$1 = state_26314;var statearr_26340_26363 = state_26314__$1;(statearr_26340_26363[(2)] = inst_26296);
(statearr_26340_26363[(1)] = (5));
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
});})(c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26344[(0)] = state_machine__12278__auto__);
(statearr_26344[(1)] = (1));
return statearr_26344;
});
var state_machine__12278__auto____1 = (function (state_26314){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26314);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26345){if((e26345 instanceof Object))
{var ex__12281__auto__ = e26345;var statearr_26346_26364 = state_26314;(statearr_26346_26364[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26314);
return cljs.core.constant$keyword$82;
} else
{throw e26345;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26365 = state_26314;
state_26314 = G__26365;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26347 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26348);
return statearr_26347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26348,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26475,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26475,out){
return (function (state_26451){var state_val_26452 = (state_26451[(1)]);if((state_val_26452 === (7)))
{var inst_26430 = (state_26451[(7)]);var inst_26431 = (state_26451[(8)]);var inst_26430__$1 = (state_26451[(2)]);var inst_26431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26430__$1,(0),null);var inst_26432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26430__$1,(1),null);var inst_26433 = (inst_26431__$1 == null);var state_26451__$1 = (function (){var statearr_26453 = state_26451;(statearr_26453[(7)] = inst_26430__$1);
(statearr_26453[(9)] = inst_26432);
(statearr_26453[(8)] = inst_26431__$1);
return statearr_26453;
})();if(cljs.core.truth_(inst_26433))
{var statearr_26454_26476 = state_26451__$1;(statearr_26454_26476[(1)] = (8));
} else
{var statearr_26455_26477 = state_26451__$1;(statearr_26455_26477[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (1)))
{var inst_26422 = cljs.core.vec(chs);var inst_26423 = inst_26422;var state_26451__$1 = (function (){var statearr_26456 = state_26451;(statearr_26456[(10)] = inst_26423);
return statearr_26456;
})();var statearr_26457_26478 = state_26451__$1;(statearr_26457_26478[(2)] = null);
(statearr_26457_26478[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (4)))
{var inst_26423 = (state_26451[(10)]);var state_26451__$1 = state_26451;return cljs.core.async.ioc_alts_BANG_(state_26451__$1,(7),inst_26423);
} else
{if((state_val_26452 === (6)))
{var inst_26447 = (state_26451[(2)]);var state_26451__$1 = state_26451;var statearr_26458_26479 = state_26451__$1;(statearr_26458_26479[(2)] = inst_26447);
(statearr_26458_26479[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (3)))
{var inst_26449 = (state_26451[(2)]);var state_26451__$1 = state_26451;return cljs.core.async.impl.ioc_helpers.return_chan(state_26451__$1,inst_26449);
} else
{if((state_val_26452 === (2)))
{var inst_26423 = (state_26451[(10)]);var inst_26425 = cljs.core.count(inst_26423);var inst_26426 = (inst_26425 > (0));var state_26451__$1 = state_26451;if(cljs.core.truth_(inst_26426))
{var statearr_26460_26480 = state_26451__$1;(statearr_26460_26480[(1)] = (4));
} else
{var statearr_26461_26481 = state_26451__$1;(statearr_26461_26481[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (11)))
{var inst_26423 = (state_26451[(10)]);var inst_26440 = (state_26451[(2)]);var tmp26459 = inst_26423;var inst_26423__$1 = tmp26459;var state_26451__$1 = (function (){var statearr_26462 = state_26451;(statearr_26462[(11)] = inst_26440);
(statearr_26462[(10)] = inst_26423__$1);
return statearr_26462;
})();var statearr_26463_26482 = state_26451__$1;(statearr_26463_26482[(2)] = null);
(statearr_26463_26482[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (9)))
{var inst_26431 = (state_26451[(8)]);var state_26451__$1 = state_26451;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26451__$1,(11),out,inst_26431);
} else
{if((state_val_26452 === (5)))
{var inst_26445 = cljs.core.async.close_BANG_(out);var state_26451__$1 = state_26451;var statearr_26464_26483 = state_26451__$1;(statearr_26464_26483[(2)] = inst_26445);
(statearr_26464_26483[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (10)))
{var inst_26443 = (state_26451[(2)]);var state_26451__$1 = state_26451;var statearr_26465_26484 = state_26451__$1;(statearr_26465_26484[(2)] = inst_26443);
(statearr_26465_26484[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26452 === (8)))
{var inst_26423 = (state_26451[(10)]);var inst_26430 = (state_26451[(7)]);var inst_26432 = (state_26451[(9)]);var inst_26431 = (state_26451[(8)]);var inst_26435 = (function (){var c = inst_26432;var v = inst_26431;var vec__26428 = inst_26430;var cs = inst_26423;return ((function (c,v,vec__26428,cs,inst_26423,inst_26430,inst_26432,inst_26431,state_val_26452,c__12292__auto___26475,out){
return (function (p1__26366_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26366_SHARP_);
});
;})(c,v,vec__26428,cs,inst_26423,inst_26430,inst_26432,inst_26431,state_val_26452,c__12292__auto___26475,out))
})();var inst_26436 = cljs.core.filterv(inst_26435,inst_26423);var inst_26423__$1 = inst_26436;var state_26451__$1 = (function (){var statearr_26466 = state_26451;(statearr_26466[(10)] = inst_26423__$1);
return statearr_26466;
})();var statearr_26467_26485 = state_26451__$1;(statearr_26467_26485[(2)] = null);
(statearr_26467_26485[(1)] = (2));
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
});})(c__12292__auto___26475,out))
;return ((function (switch__12277__auto__,c__12292__auto___26475,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26471 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26471[(0)] = state_machine__12278__auto__);
(statearr_26471[(1)] = (1));
return statearr_26471;
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
}catch (e26472){if((e26472 instanceof Object))
{var ex__12281__auto__ = e26472;var statearr_26473_26486 = state_26451;(statearr_26473_26486[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26451);
return cljs.core.constant$keyword$82;
} else
{throw e26472;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26487 = state_26451;
state_26451 = G__26487;
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
;})(switch__12277__auto__,c__12292__auto___26475,out))
})();var state__12294__auto__ = (function (){var statearr_26474 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26475);
return statearr_26474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26475,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26583,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26583,out){
return (function (state_26560){var state_val_26561 = (state_26560[(1)]);if((state_val_26561 === (7)))
{var inst_26542 = (state_26560[(7)]);var inst_26542__$1 = (state_26560[(2)]);var inst_26543 = (inst_26542__$1 == null);var inst_26544 = cljs.core.not(inst_26543);var state_26560__$1 = (function (){var statearr_26562 = state_26560;(statearr_26562[(7)] = inst_26542__$1);
return statearr_26562;
})();if(inst_26544)
{var statearr_26563_26584 = state_26560__$1;(statearr_26563_26584[(1)] = (8));
} else
{var statearr_26564_26585 = state_26560__$1;(statearr_26564_26585[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (1)))
{var inst_26537 = (0);var state_26560__$1 = (function (){var statearr_26565 = state_26560;(statearr_26565[(8)] = inst_26537);
return statearr_26565;
})();var statearr_26566_26586 = state_26560__$1;(statearr_26566_26586[(2)] = null);
(statearr_26566_26586[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (4)))
{var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26560__$1,(7),ch);
} else
{if((state_val_26561 === (6)))
{var inst_26555 = (state_26560[(2)]);var state_26560__$1 = state_26560;var statearr_26567_26587 = state_26560__$1;(statearr_26567_26587[(2)] = inst_26555);
(statearr_26567_26587[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (3)))
{var inst_26557 = (state_26560[(2)]);var inst_26558 = cljs.core.async.close_BANG_(out);var state_26560__$1 = (function (){var statearr_26568 = state_26560;(statearr_26568[(9)] = inst_26557);
return statearr_26568;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26560__$1,inst_26558);
} else
{if((state_val_26561 === (2)))
{var inst_26537 = (state_26560[(8)]);var inst_26539 = (inst_26537 < n);var state_26560__$1 = state_26560;if(cljs.core.truth_(inst_26539))
{var statearr_26569_26588 = state_26560__$1;(statearr_26569_26588[(1)] = (4));
} else
{var statearr_26570_26589 = state_26560__$1;(statearr_26570_26589[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (11)))
{var inst_26537 = (state_26560[(8)]);var inst_26547 = (state_26560[(2)]);var inst_26548 = (inst_26537 + (1));var inst_26537__$1 = inst_26548;var state_26560__$1 = (function (){var statearr_26571 = state_26560;(statearr_26571[(8)] = inst_26537__$1);
(statearr_26571[(10)] = inst_26547);
return statearr_26571;
})();var statearr_26572_26590 = state_26560__$1;(statearr_26572_26590[(2)] = null);
(statearr_26572_26590[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (9)))
{var state_26560__$1 = state_26560;var statearr_26573_26591 = state_26560__$1;(statearr_26573_26591[(2)] = null);
(statearr_26573_26591[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (5)))
{var state_26560__$1 = state_26560;var statearr_26574_26592 = state_26560__$1;(statearr_26574_26592[(2)] = null);
(statearr_26574_26592[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (10)))
{var inst_26552 = (state_26560[(2)]);var state_26560__$1 = state_26560;var statearr_26575_26593 = state_26560__$1;(statearr_26575_26593[(2)] = inst_26552);
(statearr_26575_26593[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26561 === (8)))
{var inst_26542 = (state_26560[(7)]);var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26560__$1,(11),out,inst_26542);
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
});})(c__12292__auto___26583,out))
;return ((function (switch__12277__auto__,c__12292__auto___26583,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26579 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26579[(0)] = state_machine__12278__auto__);
(statearr_26579[(1)] = (1));
return statearr_26579;
});
var state_machine__12278__auto____1 = (function (state_26560){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26560);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26580){if((e26580 instanceof Object))
{var ex__12281__auto__ = e26580;var statearr_26581_26594 = state_26560;(statearr_26581_26594[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26560);
return cljs.core.constant$keyword$82;
} else
{throw e26580;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26595 = state_26560;
state_26560 = G__26595;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26560){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26583,out))
})();var state__12294__auto__ = (function (){var statearr_26582 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26583);
return statearr_26582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26583,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26608 = (function (ch,f,map_LT_,meta26609){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26609 = meta26609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26608.cljs$lang$type = true;
cljs.core.async.t26608.cljs$lang$ctorStr = "cljs.core.async/t26608";
cljs.core.async.t26608.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26608");
});
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26611 = (function (fn1,_,meta26609,ch,f,map_LT_,meta26612){
this.fn1 = fn1;
this._ = _;
this.meta26609 = meta26609;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26612 = meta26612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26611.cljs$lang$type = true;
cljs.core.async.t26611.cljs$lang$ctorStr = "cljs.core.async/t26611";
cljs.core.async.t26611.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26611");
});})(___$1))
;
cljs.core.async.t26611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26596_SHARP_){var G__26614 = (((p1__26596_SHARP_ == null))?null:(function (){var G__26615 = p1__26596_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26615) : self__.f.call(null,G__26615));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26614) : f1.call(null,G__26614));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26613){var self__ = this;
var _26613__$1 = this;return self__.meta26612;
});})(___$1))
;
cljs.core.async.t26611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26613,meta26612__$1){var self__ = this;
var _26613__$1 = this;return (new cljs.core.async.t26611(self__.fn1,self__._,self__.meta26609,self__.ch,self__.f,self__.map_LT_,meta26612__$1));
});})(___$1))
;
cljs.core.async.__GT_t26611 = ((function (___$1){
return (function __GT_t26611(fn1__$1,___$2,meta26609__$1,ch__$2,f__$2,map_LT___$2,meta26612){return (new cljs.core.async.t26611(fn1__$1,___$2,meta26609__$1,ch__$2,f__$2,map_LT___$2,meta26612));
});})(___$1))
;
}
return (new cljs.core.async.t26611(fn1,___$1,self__.meta26609,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26616 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26616) : cljs.core.deref.call(null,G__26616));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26617 = (function (){var G__26618 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26618) : cljs.core.deref.call(null,G__26618));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26617) : self__.f.call(null,G__26617));
})());
} else
{return ret;
}
});
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26608.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26610){var self__ = this;
var _26610__$1 = this;return self__.meta26609;
});
cljs.core.async.t26608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26610,meta26609__$1){var self__ = this;
var _26610__$1 = this;return (new cljs.core.async.t26608(self__.ch,self__.f,self__.map_LT_,meta26609__$1));
});
cljs.core.async.__GT_t26608 = (function __GT_t26608(ch__$1,f__$1,map_LT___$1,meta26609){return (new cljs.core.async.t26608(ch__$1,f__$1,map_LT___$1,meta26609));
});
}
return (new cljs.core.async.t26608(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26623 = (function (ch,f,map_GT_,meta26624){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26624 = meta26624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26623.cljs$lang$type = true;
cljs.core.async.t26623.cljs$lang$ctorStr = "cljs.core.async/t26623";
cljs.core.async.t26623.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26623");
});
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26626 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26626) : self__.f.call(null,G__26626));
})(),fn1);
});
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26625){var self__ = this;
var _26625__$1 = this;return self__.meta26624;
});
cljs.core.async.t26623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26625,meta26624__$1){var self__ = this;
var _26625__$1 = this;return (new cljs.core.async.t26623(self__.ch,self__.f,self__.map_GT_,meta26624__$1));
});
cljs.core.async.__GT_t26623 = (function __GT_t26623(ch__$1,f__$1,map_GT___$1,meta26624){return (new cljs.core.async.t26623(ch__$1,f__$1,map_GT___$1,meta26624));
});
}
return (new cljs.core.async.t26623(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26631 = (function (ch,p,filter_GT_,meta26632){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26632 = meta26632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26631.cljs$lang$type = true;
cljs.core.async.t26631.cljs$lang$ctorStr = "cljs.core.async/t26631";
cljs.core.async.t26631.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26631");
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26634 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26634) : self__.p.call(null,G__26634));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26633){var self__ = this;
var _26633__$1 = this;return self__.meta26632;
});
cljs.core.async.t26631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26633,meta26632__$1){var self__ = this;
var _26633__$1 = this;return (new cljs.core.async.t26631(self__.ch,self__.p,self__.filter_GT_,meta26632__$1));
});
cljs.core.async.__GT_t26631 = (function __GT_t26631(ch__$1,p__$1,filter_GT___$1,meta26632){return (new cljs.core.async.t26631(ch__$1,p__$1,filter_GT___$1,meta26632));
});
}
return (new cljs.core.async.t26631(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26722,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26722,out){
return (function (state_26700){var state_val_26701 = (state_26700[(1)]);if((state_val_26701 === (7)))
{var inst_26696 = (state_26700[(2)]);var state_26700__$1 = state_26700;var statearr_26702_26723 = state_26700__$1;(statearr_26702_26723[(2)] = inst_26696);
(statearr_26702_26723[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (1)))
{var state_26700__$1 = state_26700;var statearr_26703_26724 = state_26700__$1;(statearr_26703_26724[(2)] = null);
(statearr_26703_26724[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (4)))
{var inst_26682 = (state_26700[(7)]);var inst_26682__$1 = (state_26700[(2)]);var inst_26683 = (inst_26682__$1 == null);var state_26700__$1 = (function (){var statearr_26704 = state_26700;(statearr_26704[(7)] = inst_26682__$1);
return statearr_26704;
})();if(cljs.core.truth_(inst_26683))
{var statearr_26705_26725 = state_26700__$1;(statearr_26705_26725[(1)] = (5));
} else
{var statearr_26706_26726 = state_26700__$1;(statearr_26706_26726[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (6)))
{var inst_26682 = (state_26700[(7)]);var inst_26687 = (function (){var G__26707 = inst_26682;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26707) : p.call(null,G__26707));
})();var state_26700__$1 = state_26700;if(cljs.core.truth_(inst_26687))
{var statearr_26708_26727 = state_26700__$1;(statearr_26708_26727[(1)] = (8));
} else
{var statearr_26709_26728 = state_26700__$1;(statearr_26709_26728[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (3)))
{var inst_26698 = (state_26700[(2)]);var state_26700__$1 = state_26700;return cljs.core.async.impl.ioc_helpers.return_chan(state_26700__$1,inst_26698);
} else
{if((state_val_26701 === (2)))
{var state_26700__$1 = state_26700;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26700__$1,(4),ch);
} else
{if((state_val_26701 === (11)))
{var inst_26690 = (state_26700[(2)]);var state_26700__$1 = state_26700;var statearr_26710_26729 = state_26700__$1;(statearr_26710_26729[(2)] = inst_26690);
(statearr_26710_26729[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (9)))
{var state_26700__$1 = state_26700;var statearr_26711_26730 = state_26700__$1;(statearr_26711_26730[(2)] = null);
(statearr_26711_26730[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (5)))
{var inst_26685 = cljs.core.async.close_BANG_(out);var state_26700__$1 = state_26700;var statearr_26712_26731 = state_26700__$1;(statearr_26712_26731[(2)] = inst_26685);
(statearr_26712_26731[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (10)))
{var inst_26693 = (state_26700[(2)]);var state_26700__$1 = (function (){var statearr_26713 = state_26700;(statearr_26713[(8)] = inst_26693);
return statearr_26713;
})();var statearr_26714_26732 = state_26700__$1;(statearr_26714_26732[(2)] = null);
(statearr_26714_26732[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26701 === (8)))
{var inst_26682 = (state_26700[(7)]);var state_26700__$1 = state_26700;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26700__$1,(11),out,inst_26682);
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
});})(c__12292__auto___26722,out))
;return ((function (switch__12277__auto__,c__12292__auto___26722,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26718 = [null,null,null,null,null,null,null,null,null];(statearr_26718[(0)] = state_machine__12278__auto__);
(statearr_26718[(1)] = (1));
return statearr_26718;
});
var state_machine__12278__auto____1 = (function (state_26700){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26700);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object))
{var ex__12281__auto__ = e26719;var statearr_26720_26733 = state_26700;(statearr_26720_26733[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26700);
return cljs.core.constant$keyword$82;
} else
{throw e26719;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26734 = state_26700;
state_26700 = G__26734;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26722,out))
})();var state__12294__auto__ = (function (){var statearr_26721 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26722);
return statearr_26721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26722,out))
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
return (function (state_26904){var state_val_26905 = (state_26904[(1)]);if((state_val_26905 === (7)))
{var inst_26900 = (state_26904[(2)]);var state_26904__$1 = state_26904;var statearr_26906_26948 = state_26904__$1;(statearr_26906_26948[(2)] = inst_26900);
(statearr_26906_26948[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (20)))
{var inst_26870 = (state_26904[(7)]);var inst_26881 = (state_26904[(2)]);var inst_26882 = cljs.core.next(inst_26870);var inst_26856 = inst_26882;var inst_26857 = null;var inst_26858 = (0);var inst_26859 = (0);var state_26904__$1 = (function (){var statearr_26907 = state_26904;(statearr_26907[(8)] = inst_26859);
(statearr_26907[(9)] = inst_26858);
(statearr_26907[(10)] = inst_26856);
(statearr_26907[(11)] = inst_26881);
(statearr_26907[(12)] = inst_26857);
return statearr_26907;
})();var statearr_26908_26949 = state_26904__$1;(statearr_26908_26949[(2)] = null);
(statearr_26908_26949[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (1)))
{var state_26904__$1 = state_26904;var statearr_26909_26950 = state_26904__$1;(statearr_26909_26950[(2)] = null);
(statearr_26909_26950[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (4)))
{var inst_26845 = (state_26904[(13)]);var inst_26845__$1 = (state_26904[(2)]);var inst_26846 = (inst_26845__$1 == null);var state_26904__$1 = (function (){var statearr_26910 = state_26904;(statearr_26910[(13)] = inst_26845__$1);
return statearr_26910;
})();if(cljs.core.truth_(inst_26846))
{var statearr_26911_26951 = state_26904__$1;(statearr_26911_26951[(1)] = (5));
} else
{var statearr_26912_26952 = state_26904__$1;(statearr_26912_26952[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (15)))
{var state_26904__$1 = state_26904;var statearr_26916_26953 = state_26904__$1;(statearr_26916_26953[(2)] = null);
(statearr_26916_26953[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (21)))
{var state_26904__$1 = state_26904;var statearr_26917_26954 = state_26904__$1;(statearr_26917_26954[(2)] = null);
(statearr_26917_26954[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (13)))
{var inst_26859 = (state_26904[(8)]);var inst_26858 = (state_26904[(9)]);var inst_26856 = (state_26904[(10)]);var inst_26857 = (state_26904[(12)]);var inst_26866 = (state_26904[(2)]);var inst_26867 = (inst_26859 + (1));var tmp26913 = inst_26858;var tmp26914 = inst_26856;var tmp26915 = inst_26857;var inst_26856__$1 = tmp26914;var inst_26857__$1 = tmp26915;var inst_26858__$1 = tmp26913;var inst_26859__$1 = inst_26867;var state_26904__$1 = (function (){var statearr_26918 = state_26904;(statearr_26918[(8)] = inst_26859__$1);
(statearr_26918[(9)] = inst_26858__$1);
(statearr_26918[(10)] = inst_26856__$1);
(statearr_26918[(14)] = inst_26866);
(statearr_26918[(12)] = inst_26857__$1);
return statearr_26918;
})();var statearr_26919_26955 = state_26904__$1;(statearr_26919_26955[(2)] = null);
(statearr_26919_26955[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (22)))
{var state_26904__$1 = state_26904;var statearr_26920_26956 = state_26904__$1;(statearr_26920_26956[(2)] = null);
(statearr_26920_26956[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (6)))
{var inst_26845 = (state_26904[(13)]);var inst_26854 = (function (){var G__26921 = inst_26845;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26921) : f.call(null,G__26921));
})();var inst_26855 = cljs.core.seq(inst_26854);var inst_26856 = inst_26855;var inst_26857 = null;var inst_26858 = (0);var inst_26859 = (0);var state_26904__$1 = (function (){var statearr_26922 = state_26904;(statearr_26922[(8)] = inst_26859);
(statearr_26922[(9)] = inst_26858);
(statearr_26922[(10)] = inst_26856);
(statearr_26922[(12)] = inst_26857);
return statearr_26922;
})();var statearr_26923_26957 = state_26904__$1;(statearr_26923_26957[(2)] = null);
(statearr_26923_26957[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (17)))
{var inst_26870 = (state_26904[(7)]);var inst_26874 = cljs.core.chunk_first(inst_26870);var inst_26875 = cljs.core.chunk_rest(inst_26870);var inst_26876 = cljs.core.count(inst_26874);var inst_26856 = inst_26875;var inst_26857 = inst_26874;var inst_26858 = inst_26876;var inst_26859 = (0);var state_26904__$1 = (function (){var statearr_26924 = state_26904;(statearr_26924[(8)] = inst_26859);
(statearr_26924[(9)] = inst_26858);
(statearr_26924[(10)] = inst_26856);
(statearr_26924[(12)] = inst_26857);
return statearr_26924;
})();var statearr_26925_26958 = state_26904__$1;(statearr_26925_26958[(2)] = null);
(statearr_26925_26958[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (3)))
{var inst_26902 = (state_26904[(2)]);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.return_chan(state_26904__$1,inst_26902);
} else
{if((state_val_26905 === (12)))
{var inst_26890 = (state_26904[(2)]);var state_26904__$1 = state_26904;var statearr_26926_26959 = state_26904__$1;(statearr_26926_26959[(2)] = inst_26890);
(statearr_26926_26959[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (2)))
{var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26904__$1,(4),in$);
} else
{if((state_val_26905 === (23)))
{var inst_26898 = (state_26904[(2)]);var state_26904__$1 = state_26904;var statearr_26927_26960 = state_26904__$1;(statearr_26927_26960[(2)] = inst_26898);
(statearr_26927_26960[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (19)))
{var inst_26885 = (state_26904[(2)]);var state_26904__$1 = state_26904;var statearr_26928_26961 = state_26904__$1;(statearr_26928_26961[(2)] = inst_26885);
(statearr_26928_26961[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (11)))
{var inst_26856 = (state_26904[(10)]);var inst_26870 = (state_26904[(7)]);var inst_26870__$1 = cljs.core.seq(inst_26856);var state_26904__$1 = (function (){var statearr_26929 = state_26904;(statearr_26929[(7)] = inst_26870__$1);
return statearr_26929;
})();if(inst_26870__$1)
{var statearr_26930_26962 = state_26904__$1;(statearr_26930_26962[(1)] = (14));
} else
{var statearr_26931_26963 = state_26904__$1;(statearr_26931_26963[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (9)))
{var inst_26892 = (state_26904[(2)]);var inst_26893 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26904__$1 = (function (){var statearr_26932 = state_26904;(statearr_26932[(15)] = inst_26892);
return statearr_26932;
})();if(cljs.core.truth_(inst_26893))
{var statearr_26933_26964 = state_26904__$1;(statearr_26933_26964[(1)] = (21));
} else
{var statearr_26934_26965 = state_26904__$1;(statearr_26934_26965[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (5)))
{var inst_26848 = cljs.core.async.close_BANG_(out);var state_26904__$1 = state_26904;var statearr_26935_26966 = state_26904__$1;(statearr_26935_26966[(2)] = inst_26848);
(statearr_26935_26966[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (14)))
{var inst_26870 = (state_26904[(7)]);var inst_26872 = cljs.core.chunked_seq_QMARK_(inst_26870);var state_26904__$1 = state_26904;if(inst_26872)
{var statearr_26936_26967 = state_26904__$1;(statearr_26936_26967[(1)] = (17));
} else
{var statearr_26937_26968 = state_26904__$1;(statearr_26937_26968[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (16)))
{var inst_26888 = (state_26904[(2)]);var state_26904__$1 = state_26904;var statearr_26938_26969 = state_26904__$1;(statearr_26938_26969[(2)] = inst_26888);
(statearr_26938_26969[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26905 === (10)))
{var inst_26859 = (state_26904[(8)]);var inst_26857 = (state_26904[(12)]);var inst_26864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26857,inst_26859);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26904__$1,(13),out,inst_26864);
} else
{if((state_val_26905 === (18)))
{var inst_26870 = (state_26904[(7)]);var inst_26879 = cljs.core.first(inst_26870);var state_26904__$1 = state_26904;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26904__$1,(20),out,inst_26879);
} else
{if((state_val_26905 === (8)))
{var inst_26859 = (state_26904[(8)]);var inst_26858 = (state_26904[(9)]);var inst_26861 = (inst_26859 < inst_26858);var inst_26862 = inst_26861;var state_26904__$1 = state_26904;if(cljs.core.truth_(inst_26862))
{var statearr_26939_26970 = state_26904__$1;(statearr_26939_26970[(1)] = (10));
} else
{var statearr_26940_26971 = state_26904__$1;(statearr_26940_26971[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26944[(0)] = state_machine__12278__auto__);
(statearr_26944[(1)] = (1));
return statearr_26944;
});
var state_machine__12278__auto____1 = (function (state_26904){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26904);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object))
{var ex__12281__auto__ = e26945;var statearr_26946_26972 = state_26904;(statearr_26946_26972[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26904);
return cljs.core.constant$keyword$82;
} else
{throw e26945;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26973 = state_26904;
state_26904 = G__26973;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26904){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26947 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26947;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27078,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27078,out){
return (function (state_27053){var state_val_27054 = (state_27053[(1)]);if((state_val_27054 === (7)))
{var inst_27048 = (state_27053[(2)]);var state_27053__$1 = state_27053;var statearr_27055_27079 = state_27053__$1;(statearr_27055_27079[(2)] = inst_27048);
(statearr_27055_27079[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (1)))
{var inst_27030 = null;var state_27053__$1 = (function (){var statearr_27056 = state_27053;(statearr_27056[(7)] = inst_27030);
return statearr_27056;
})();var statearr_27057_27080 = state_27053__$1;(statearr_27057_27080[(2)] = null);
(statearr_27057_27080[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (4)))
{var inst_27033 = (state_27053[(8)]);var inst_27033__$1 = (state_27053[(2)]);var inst_27034 = (inst_27033__$1 == null);var inst_27035 = cljs.core.not(inst_27034);var state_27053__$1 = (function (){var statearr_27058 = state_27053;(statearr_27058[(8)] = inst_27033__$1);
return statearr_27058;
})();if(inst_27035)
{var statearr_27059_27081 = state_27053__$1;(statearr_27059_27081[(1)] = (5));
} else
{var statearr_27060_27082 = state_27053__$1;(statearr_27060_27082[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (6)))
{var state_27053__$1 = state_27053;var statearr_27061_27083 = state_27053__$1;(statearr_27061_27083[(2)] = null);
(statearr_27061_27083[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (3)))
{var inst_27050 = (state_27053[(2)]);var inst_27051 = cljs.core.async.close_BANG_(out);var state_27053__$1 = (function (){var statearr_27062 = state_27053;(statearr_27062[(9)] = inst_27050);
return statearr_27062;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27053__$1,inst_27051);
} else
{if((state_val_27054 === (2)))
{var state_27053__$1 = state_27053;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27053__$1,(4),ch);
} else
{if((state_val_27054 === (11)))
{var inst_27033 = (state_27053[(8)]);var inst_27042 = (state_27053[(2)]);var inst_27030 = inst_27033;var state_27053__$1 = (function (){var statearr_27063 = state_27053;(statearr_27063[(7)] = inst_27030);
(statearr_27063[(10)] = inst_27042);
return statearr_27063;
})();var statearr_27064_27084 = state_27053__$1;(statearr_27064_27084[(2)] = null);
(statearr_27064_27084[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (9)))
{var inst_27033 = (state_27053[(8)]);var state_27053__$1 = state_27053;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27053__$1,(11),out,inst_27033);
} else
{if((state_val_27054 === (5)))
{var inst_27030 = (state_27053[(7)]);var inst_27033 = (state_27053[(8)]);var inst_27037 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27033,inst_27030);var state_27053__$1 = state_27053;if(inst_27037)
{var statearr_27066_27085 = state_27053__$1;(statearr_27066_27085[(1)] = (8));
} else
{var statearr_27067_27086 = state_27053__$1;(statearr_27067_27086[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (10)))
{var inst_27045 = (state_27053[(2)]);var state_27053__$1 = state_27053;var statearr_27068_27087 = state_27053__$1;(statearr_27068_27087[(2)] = inst_27045);
(statearr_27068_27087[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27054 === (8)))
{var inst_27030 = (state_27053[(7)]);var tmp27065 = inst_27030;var inst_27030__$1 = tmp27065;var state_27053__$1 = (function (){var statearr_27069 = state_27053;(statearr_27069[(7)] = inst_27030__$1);
return statearr_27069;
})();var statearr_27070_27088 = state_27053__$1;(statearr_27070_27088[(2)] = null);
(statearr_27070_27088[(1)] = (2));
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
});})(c__12292__auto___27078,out))
;return ((function (switch__12277__auto__,c__12292__auto___27078,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27074 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27074[(0)] = state_machine__12278__auto__);
(statearr_27074[(1)] = (1));
return statearr_27074;
});
var state_machine__12278__auto____1 = (function (state_27053){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27053);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object))
{var ex__12281__auto__ = e27075;var statearr_27076_27089 = state_27053;(statearr_27076_27089[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27053);
return cljs.core.constant$keyword$82;
} else
{throw e27075;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27090 = state_27053;
state_27053 = G__27090;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27053){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27078,out))
})();var state__12294__auto__ = (function (){var statearr_27077 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27078);
return statearr_27077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27078,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27228,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27228,out){
return (function (state_27198){var state_val_27199 = (state_27198[(1)]);if((state_val_27199 === (7)))
{var inst_27194 = (state_27198[(2)]);var state_27198__$1 = state_27198;var statearr_27200_27229 = state_27198__$1;(statearr_27200_27229[(2)] = inst_27194);
(statearr_27200_27229[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (1)))
{var inst_27161 = (new Array(n));var inst_27162 = inst_27161;var inst_27163 = (0);var state_27198__$1 = (function (){var statearr_27201 = state_27198;(statearr_27201[(7)] = inst_27162);
(statearr_27201[(8)] = inst_27163);
return statearr_27201;
})();var statearr_27202_27230 = state_27198__$1;(statearr_27202_27230[(2)] = null);
(statearr_27202_27230[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (4)))
{var inst_27166 = (state_27198[(9)]);var inst_27166__$1 = (state_27198[(2)]);var inst_27167 = (inst_27166__$1 == null);var inst_27168 = cljs.core.not(inst_27167);var state_27198__$1 = (function (){var statearr_27203 = state_27198;(statearr_27203[(9)] = inst_27166__$1);
return statearr_27203;
})();if(inst_27168)
{var statearr_27204_27231 = state_27198__$1;(statearr_27204_27231[(1)] = (5));
} else
{var statearr_27205_27232 = state_27198__$1;(statearr_27205_27232[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (15)))
{var inst_27188 = (state_27198[(2)]);var state_27198__$1 = state_27198;var statearr_27206_27233 = state_27198__$1;(statearr_27206_27233[(2)] = inst_27188);
(statearr_27206_27233[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (13)))
{var state_27198__$1 = state_27198;var statearr_27207_27234 = state_27198__$1;(statearr_27207_27234[(2)] = null);
(statearr_27207_27234[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (6)))
{var inst_27163 = (state_27198[(8)]);var inst_27184 = (inst_27163 > (0));var state_27198__$1 = state_27198;if(cljs.core.truth_(inst_27184))
{var statearr_27208_27235 = state_27198__$1;(statearr_27208_27235[(1)] = (12));
} else
{var statearr_27209_27236 = state_27198__$1;(statearr_27209_27236[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (3)))
{var inst_27196 = (state_27198[(2)]);var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.return_chan(state_27198__$1,inst_27196);
} else
{if((state_val_27199 === (12)))
{var inst_27162 = (state_27198[(7)]);var inst_27186 = cljs.core.vec(inst_27162);var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27198__$1,(15),out,inst_27186);
} else
{if((state_val_27199 === (2)))
{var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27198__$1,(4),ch);
} else
{if((state_val_27199 === (11)))
{var inst_27178 = (state_27198[(2)]);var inst_27179 = (new Array(n));var inst_27162 = inst_27179;var inst_27163 = (0);var state_27198__$1 = (function (){var statearr_27210 = state_27198;(statearr_27210[(10)] = inst_27178);
(statearr_27210[(7)] = inst_27162);
(statearr_27210[(8)] = inst_27163);
return statearr_27210;
})();var statearr_27211_27237 = state_27198__$1;(statearr_27211_27237[(2)] = null);
(statearr_27211_27237[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (9)))
{var inst_27162 = (state_27198[(7)]);var inst_27176 = cljs.core.vec(inst_27162);var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27198__$1,(11),out,inst_27176);
} else
{if((state_val_27199 === (5)))
{var inst_27162 = (state_27198[(7)]);var inst_27163 = (state_27198[(8)]);var inst_27171 = (state_27198[(11)]);var inst_27166 = (state_27198[(9)]);var inst_27170 = (inst_27162[inst_27163] = inst_27166);var inst_27171__$1 = (inst_27163 + (1));var inst_27172 = (inst_27171__$1 < n);var state_27198__$1 = (function (){var statearr_27212 = state_27198;(statearr_27212[(11)] = inst_27171__$1);
(statearr_27212[(12)] = inst_27170);
return statearr_27212;
})();if(cljs.core.truth_(inst_27172))
{var statearr_27213_27238 = state_27198__$1;(statearr_27213_27238[(1)] = (8));
} else
{var statearr_27214_27239 = state_27198__$1;(statearr_27214_27239[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (14)))
{var inst_27191 = (state_27198[(2)]);var inst_27192 = cljs.core.async.close_BANG_(out);var state_27198__$1 = (function (){var statearr_27216 = state_27198;(statearr_27216[(13)] = inst_27191);
return statearr_27216;
})();var statearr_27217_27240 = state_27198__$1;(statearr_27217_27240[(2)] = inst_27192);
(statearr_27217_27240[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (10)))
{var inst_27182 = (state_27198[(2)]);var state_27198__$1 = state_27198;var statearr_27218_27241 = state_27198__$1;(statearr_27218_27241[(2)] = inst_27182);
(statearr_27218_27241[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27199 === (8)))
{var inst_27162 = (state_27198[(7)]);var inst_27171 = (state_27198[(11)]);var tmp27215 = inst_27162;var inst_27162__$1 = tmp27215;var inst_27163 = inst_27171;var state_27198__$1 = (function (){var statearr_27219 = state_27198;(statearr_27219[(7)] = inst_27162__$1);
(statearr_27219[(8)] = inst_27163);
return statearr_27219;
})();var statearr_27220_27242 = state_27198__$1;(statearr_27220_27242[(2)] = null);
(statearr_27220_27242[(1)] = (2));
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
});})(c__12292__auto___27228,out))
;return ((function (switch__12277__auto__,c__12292__auto___27228,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27224[(0)] = state_machine__12278__auto__);
(statearr_27224[(1)] = (1));
return statearr_27224;
});
var state_machine__12278__auto____1 = (function (state_27198){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27198);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27225){if((e27225 instanceof Object))
{var ex__12281__auto__ = e27225;var statearr_27226_27243 = state_27198;(statearr_27226_27243[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27198);
return cljs.core.constant$keyword$82;
} else
{throw e27225;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27244 = state_27198;
state_27198 = G__27244;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27198){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27228,out))
})();var state__12294__auto__ = (function (){var statearr_27227 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27228);
return statearr_27227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27228,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27392,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27392,out){
return (function (state_27361){var state_val_27362 = (state_27361[(1)]);if((state_val_27362 === (7)))
{var inst_27357 = (state_27361[(2)]);var state_27361__$1 = state_27361;var statearr_27363_27393 = state_27361__$1;(statearr_27363_27393[(2)] = inst_27357);
(statearr_27363_27393[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (1)))
{var inst_27320 = [];var inst_27321 = inst_27320;var inst_27322 = cljs.core.constant$keyword$97;var state_27361__$1 = (function (){var statearr_27364 = state_27361;(statearr_27364[(7)] = inst_27322);
(statearr_27364[(8)] = inst_27321);
return statearr_27364;
})();var statearr_27365_27394 = state_27361__$1;(statearr_27365_27394[(2)] = null);
(statearr_27365_27394[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (4)))
{var inst_27325 = (state_27361[(9)]);var inst_27325__$1 = (state_27361[(2)]);var inst_27326 = (inst_27325__$1 == null);var inst_27327 = cljs.core.not(inst_27326);var state_27361__$1 = (function (){var statearr_27366 = state_27361;(statearr_27366[(9)] = inst_27325__$1);
return statearr_27366;
})();if(inst_27327)
{var statearr_27367_27395 = state_27361__$1;(statearr_27367_27395[(1)] = (5));
} else
{var statearr_27368_27396 = state_27361__$1;(statearr_27368_27396[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (15)))
{var inst_27351 = (state_27361[(2)]);var state_27361__$1 = state_27361;var statearr_27369_27397 = state_27361__$1;(statearr_27369_27397[(2)] = inst_27351);
(statearr_27369_27397[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (13)))
{var state_27361__$1 = state_27361;var statearr_27370_27398 = state_27361__$1;(statearr_27370_27398[(2)] = null);
(statearr_27370_27398[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (6)))
{var inst_27321 = (state_27361[(8)]);var inst_27346 = inst_27321.length;var inst_27347 = (inst_27346 > (0));var state_27361__$1 = state_27361;if(cljs.core.truth_(inst_27347))
{var statearr_27371_27399 = state_27361__$1;(statearr_27371_27399[(1)] = (12));
} else
{var statearr_27372_27400 = state_27361__$1;(statearr_27372_27400[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (3)))
{var inst_27359 = (state_27361[(2)]);var state_27361__$1 = state_27361;return cljs.core.async.impl.ioc_helpers.return_chan(state_27361__$1,inst_27359);
} else
{if((state_val_27362 === (12)))
{var inst_27321 = (state_27361[(8)]);var inst_27349 = cljs.core.vec(inst_27321);var state_27361__$1 = state_27361;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27361__$1,(15),out,inst_27349);
} else
{if((state_val_27362 === (2)))
{var state_27361__$1 = state_27361;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27361__$1,(4),ch);
} else
{if((state_val_27362 === (11)))
{var inst_27325 = (state_27361[(9)]);var inst_27329 = (state_27361[(10)]);var inst_27339 = (state_27361[(2)]);var inst_27340 = [];var inst_27341 = inst_27340.push(inst_27325);var inst_27321 = inst_27340;var inst_27322 = inst_27329;var state_27361__$1 = (function (){var statearr_27373 = state_27361;(statearr_27373[(11)] = inst_27341);
(statearr_27373[(7)] = inst_27322);
(statearr_27373[(8)] = inst_27321);
(statearr_27373[(12)] = inst_27339);
return statearr_27373;
})();var statearr_27374_27401 = state_27361__$1;(statearr_27374_27401[(2)] = null);
(statearr_27374_27401[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (9)))
{var inst_27321 = (state_27361[(8)]);var inst_27337 = cljs.core.vec(inst_27321);var state_27361__$1 = state_27361;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27361__$1,(11),out,inst_27337);
} else
{if((state_val_27362 === (5)))
{var inst_27325 = (state_27361[(9)]);var inst_27322 = (state_27361[(7)]);var inst_27329 = (state_27361[(10)]);var inst_27329__$1 = (function (){var G__27375 = inst_27325;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27375) : f.call(null,G__27375));
})();var inst_27330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27329__$1,inst_27322);var inst_27331 = cljs.core.keyword_identical_QMARK_(inst_27322,cljs.core.constant$keyword$97);var inst_27332 = (inst_27330) || (inst_27331);var state_27361__$1 = (function (){var statearr_27376 = state_27361;(statearr_27376[(10)] = inst_27329__$1);
return statearr_27376;
})();if(cljs.core.truth_(inst_27332))
{var statearr_27377_27402 = state_27361__$1;(statearr_27377_27402[(1)] = (8));
} else
{var statearr_27378_27403 = state_27361__$1;(statearr_27378_27403[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (14)))
{var inst_27354 = (state_27361[(2)]);var inst_27355 = cljs.core.async.close_BANG_(out);var state_27361__$1 = (function (){var statearr_27380 = state_27361;(statearr_27380[(13)] = inst_27354);
return statearr_27380;
})();var statearr_27381_27404 = state_27361__$1;(statearr_27381_27404[(2)] = inst_27355);
(statearr_27381_27404[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (10)))
{var inst_27344 = (state_27361[(2)]);var state_27361__$1 = state_27361;var statearr_27382_27405 = state_27361__$1;(statearr_27382_27405[(2)] = inst_27344);
(statearr_27382_27405[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27362 === (8)))
{var inst_27325 = (state_27361[(9)]);var inst_27329 = (state_27361[(10)]);var inst_27321 = (state_27361[(8)]);var inst_27334 = inst_27321.push(inst_27325);var tmp27379 = inst_27321;var inst_27321__$1 = tmp27379;var inst_27322 = inst_27329;var state_27361__$1 = (function (){var statearr_27383 = state_27361;(statearr_27383[(7)] = inst_27322);
(statearr_27383[(14)] = inst_27334);
(statearr_27383[(8)] = inst_27321__$1);
return statearr_27383;
})();var statearr_27384_27406 = state_27361__$1;(statearr_27384_27406[(2)] = null);
(statearr_27384_27406[(1)] = (2));
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
});})(c__12292__auto___27392,out))
;return ((function (switch__12277__auto__,c__12292__auto___27392,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27388[(0)] = state_machine__12278__auto__);
(statearr_27388[(1)] = (1));
return statearr_27388;
});
var state_machine__12278__auto____1 = (function (state_27361){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27361);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27389){if((e27389 instanceof Object))
{var ex__12281__auto__ = e27389;var statearr_27390_27407 = state_27361;(statearr_27390_27407[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27361);
return cljs.core.constant$keyword$82;
} else
{throw e27389;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27408 = state_27361;
state_27361 = G__27408;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27361){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27392,out))
})();var state__12294__auto__ = (function (){var statearr_27391 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27392);
return statearr_27391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27392,out))
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
