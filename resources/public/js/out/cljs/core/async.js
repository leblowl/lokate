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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22471 = (function (f,fn_handler,meta22472){
this.f = f;
this.fn_handler = fn_handler;
this.meta22472 = meta22472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22471.cljs$lang$type = true;
cljs.core.async.t22471.cljs$lang$ctorStr = "cljs.core.async/t22471";
cljs.core.async.t22471.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22471");
});
cljs.core.async.t22471.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22473){var self__ = this;
var _22473__$1 = this;return self__.meta22472;
});
cljs.core.async.t22471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22473,meta22472__$1){var self__ = this;
var _22473__$1 = this;return (new cljs.core.async.t22471(self__.f,self__.fn_handler,meta22472__$1));
});
cljs.core.async.__GT_t22471 = (function __GT_t22471(f__$1,fn_handler__$1,meta22472){return (new cljs.core.async.t22471(f__$1,fn_handler__$1,meta22472));
});
}
return (new cljs.core.async.t22471(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22475 = buff;if(G__22475)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22475.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22475.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22475);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22475);
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
{var val_22492 = (function (){var G__22489 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22489) : cljs.core.deref.call(null,G__22489));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22490_22493 = val_22492;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22490_22493) : fn1.call(null,G__22490_22493));
} else
{cljs.core.async.impl.dispatch.run(((function (val_22492,ret){
return (function (){var G__22491 = val_22492;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22491) : fn1.call(null,G__22491));
});})(val_22492,ret))
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
{var ret = temp__4124__auto__;var G__22502 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22502) : cljs.core.deref.call(null,G__22502));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__22503 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22503) : cljs.core.deref.call(null,G__22503));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22504_22506 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22504_22506) : fn1.call(null,G__22504_22506));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__22505 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22505) : fn1.call(null,G__22505));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___22507 = n;var x_22508 = (0);while(true){
if((x_22508 < n__4510__auto___22507))
{(a[x_22508] = (0));
{
var G__22509 = (x_22508 + (1));
x_22508 = G__22509;
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
var G__22510 = (i + (1));
i = G__22510;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__22518 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22518) : cljs.core.atom.call(null,G__22518));
})();if(typeof cljs.core.async.t22519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22519 = (function (flag,alt_flag,meta22520){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22520 = meta22520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22519.cljs$lang$type = true;
cljs.core.async.t22519.cljs$lang$ctorStr = "cljs.core.async/t22519";
cljs.core.async.t22519.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22519");
});})(flag))
;
cljs.core.async.t22519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22522 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22522) : cljs.core.deref.call(null,G__22522));
});})(flag))
;
cljs.core.async.t22519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22523_22525 = self__.flag;var G__22524_22526 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22523_22525,G__22524_22526) : cljs.core.reset_BANG_.call(null,G__22523_22525,G__22524_22526));
return true;
});})(flag))
;
cljs.core.async.t22519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22521){var self__ = this;
var _22521__$1 = this;return self__.meta22520;
});})(flag))
;
cljs.core.async.t22519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22521,meta22520__$1){var self__ = this;
var _22521__$1 = this;return (new cljs.core.async.t22519(self__.flag,self__.alt_flag,meta22520__$1));
});})(flag))
;
cljs.core.async.__GT_t22519 = ((function (flag){
return (function __GT_t22519(flag__$1,alt_flag__$1,meta22520){return (new cljs.core.async.t22519(flag__$1,alt_flag__$1,meta22520));
});})(flag))
;
}
return (new cljs.core.async.t22519(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22530 = (function (cb,flag,alt_handler,meta22531){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22531 = meta22531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22530.cljs$lang$type = true;
cljs.core.async.t22530.cljs$lang$ctorStr = "cljs.core.async/t22530";
cljs.core.async.t22530.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22530");
});
cljs.core.async.t22530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22532){var self__ = this;
var _22532__$1 = this;return self__.meta22531;
});
cljs.core.async.t22530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22532,meta22531__$1){var self__ = this;
var _22532__$1 = this;return (new cljs.core.async.t22530(self__.cb,self__.flag,self__.alt_handler,meta22531__$1));
});
cljs.core.async.__GT_t22530 = (function __GT_t22530(cb__$1,flag__$1,alt_handler__$1,meta22531){return (new cljs.core.async.t22530(cb__$1,flag__$1,alt_handler__$1,meta22531));
});
}
return (new cljs.core.async.t22530(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22540 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22540) : port.call(null,G__22540));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22541 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22541) : port.call(null,G__22541));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22533_SHARP_){var G__22542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22533_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22542) : fret.call(null,G__22542));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22534_SHARP_){var G__22543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22534_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22543) : fret.call(null,G__22543));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22544 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22544) : cljs.core.deref.call(null,G__22544));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22545 = (i + (1));
i = G__22545;
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
var alts_BANG___delegate = function (ports,p__22546){var map__22548 = p__22546;var map__22548__$1 = ((cljs.core.seq_QMARK_(map__22548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22548):map__22548);var opts = map__22548__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22546 = null;if (arguments.length > 1) {
  p__22546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22546);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22549){
var ports = cljs.core.first(arglist__22549);
var p__22546 = cljs.core.rest(arglist__22549);
return alts_BANG___delegate(ports,p__22546);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6485__auto___22647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___22647){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___22647){
return (function (state_22623){var state_val_22624 = (state_22623[(1)]);if((state_val_22624 === (7)))
{var inst_22619 = (state_22623[(2)]);var state_22623__$1 = state_22623;var statearr_22625_22648 = state_22623__$1;(statearr_22625_22648[(2)] = inst_22619);
(statearr_22625_22648[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (1)))
{var state_22623__$1 = state_22623;var statearr_22626_22649 = state_22623__$1;(statearr_22626_22649[(2)] = null);
(statearr_22626_22649[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (4)))
{var inst_22602 = (state_22623[(7)]);var inst_22602__$1 = (state_22623[(2)]);var inst_22603 = (inst_22602__$1 == null);var state_22623__$1 = (function (){var statearr_22627 = state_22623;(statearr_22627[(7)] = inst_22602__$1);
return statearr_22627;
})();if(cljs.core.truth_(inst_22603))
{var statearr_22628_22650 = state_22623__$1;(statearr_22628_22650[(1)] = (5));
} else
{var statearr_22629_22651 = state_22623__$1;(statearr_22629_22651[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (13)))
{var state_22623__$1 = state_22623;var statearr_22630_22652 = state_22623__$1;(statearr_22630_22652[(2)] = null);
(statearr_22630_22652[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (6)))
{var inst_22602 = (state_22623[(7)]);var state_22623__$1 = state_22623;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22623__$1,(11),to,inst_22602);
} else
{if((state_val_22624 === (3)))
{var inst_22621 = (state_22623[(2)]);var state_22623__$1 = state_22623;return cljs.core.async.impl.ioc_helpers.return_chan(state_22623__$1,inst_22621);
} else
{if((state_val_22624 === (12)))
{var state_22623__$1 = state_22623;var statearr_22631_22653 = state_22623__$1;(statearr_22631_22653[(2)] = null);
(statearr_22631_22653[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (2)))
{var state_22623__$1 = state_22623;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22623__$1,(4),from);
} else
{if((state_val_22624 === (11)))
{var inst_22612 = (state_22623[(2)]);var state_22623__$1 = state_22623;if(cljs.core.truth_(inst_22612))
{var statearr_22632_22654 = state_22623__$1;(statearr_22632_22654[(1)] = (12));
} else
{var statearr_22633_22655 = state_22623__$1;(statearr_22633_22655[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (9)))
{var state_22623__$1 = state_22623;var statearr_22634_22656 = state_22623__$1;(statearr_22634_22656[(2)] = null);
(statearr_22634_22656[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (5)))
{var state_22623__$1 = state_22623;if(cljs.core.truth_(close_QMARK_))
{var statearr_22635_22657 = state_22623__$1;(statearr_22635_22657[(1)] = (8));
} else
{var statearr_22636_22658 = state_22623__$1;(statearr_22636_22658[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (14)))
{var inst_22617 = (state_22623[(2)]);var state_22623__$1 = state_22623;var statearr_22637_22659 = state_22623__$1;(statearr_22637_22659[(2)] = inst_22617);
(statearr_22637_22659[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (10)))
{var inst_22609 = (state_22623[(2)]);var state_22623__$1 = state_22623;var statearr_22638_22660 = state_22623__$1;(statearr_22638_22660[(2)] = inst_22609);
(statearr_22638_22660[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22624 === (8)))
{var inst_22606 = cljs.core.async.close_BANG_(to);var state_22623__$1 = state_22623;var statearr_22639_22661 = state_22623__$1;(statearr_22639_22661[(2)] = inst_22606);
(statearr_22639_22661[(1)] = (10));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___22647))
;return ((function (switch__6470__auto__,c__6485__auto___22647){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22643 = [null,null,null,null,null,null,null,null];(statearr_22643[(0)] = state_machine__6471__auto__);
(statearr_22643[(1)] = (1));
return statearr_22643;
});
var state_machine__6471__auto____1 = (function (state_22623){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22623);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22644){if((e22644 instanceof Object))
{var ex__6474__auto__ = e22644;var statearr_22645_22662 = state_22623;(statearr_22645_22662[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22623);
return cljs.core.constant$keyword$16;
} else
{throw e22644;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22663 = state_22623;
state_22623 = G__22663;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22623){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___22647))
})();var state__6487__auto__ = (function (){var statearr_22646 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22647);
return statearr_22646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___22647))
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
return (function (p__22849){var vec__22850 = p__22849;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850,(1),null);var job = vec__22850;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__6485__auto___23034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results){
return (function (state_22855){var state_val_22856 = (state_22855[(1)]);if((state_val_22856 === (2)))
{var inst_22852 = (state_22855[(2)]);var inst_22853 = cljs.core.async.close_BANG_(res);var state_22855__$1 = (function (){var statearr_22857 = state_22855;(statearr_22857[(7)] = inst_22852);
return statearr_22857;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22855__$1,inst_22853);
} else
{if((state_val_22856 === (1)))
{var state_22855__$1 = state_22855;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22855__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results))
;return ((function (switch__6470__auto__,c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22861 = [null,null,null,null,null,null,null,null];(statearr_22861[(0)] = state_machine__6471__auto__);
(statearr_22861[(1)] = (1));
return statearr_22861;
});
var state_machine__6471__auto____1 = (function (state_22855){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22855);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22862){if((e22862 instanceof Object))
{var ex__6474__auto__ = e22862;var statearr_22863_23035 = state_22855;(statearr_22863_23035[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22855);
return cljs.core.constant$keyword$16;
} else
{throw e22862;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23036 = state_22855;
state_22855 = G__23036;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22855){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results))
})();var state__6487__auto__ = (function (){var statearr_22864 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23034);
return statearr_22864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23034,res,vec__22850,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22865){var vec__22866 = p__22865;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,(1),null);var job = vec__22866;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__22867_23037 = v;var G__22868_23038 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22867_23037,G__22868_23038) : xf.call(null,G__22867_23037,G__22868_23038));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___23039 = n;var __23040 = (0);while(true){
if((__23040 < n__4510__auto___23039))
{var G__22869_23041 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22869_23041) {
case "async":
var c__6485__auto___23043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__23040,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__23040,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function (state_22882){var state_val_22883 = (state_22882[(1)]);if((state_val_22883 === (7)))
{var inst_22878 = (state_22882[(2)]);var state_22882__$1 = state_22882;var statearr_22884_23044 = state_22882__$1;(statearr_22884_23044[(2)] = inst_22878);
(statearr_22884_23044[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22883 === (6)))
{var state_22882__$1 = state_22882;var statearr_22885_23045 = state_22882__$1;(statearr_22885_23045[(2)] = null);
(statearr_22885_23045[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22883 === (5)))
{var state_22882__$1 = state_22882;var statearr_22886_23046 = state_22882__$1;(statearr_22886_23046[(2)] = null);
(statearr_22886_23046[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22883 === (4)))
{var inst_22872 = (state_22882[(2)]);var inst_22873 = async(inst_22872);var state_22882__$1 = state_22882;if(cljs.core.truth_(inst_22873))
{var statearr_22887_23047 = state_22882__$1;(statearr_22887_23047[(1)] = (5));
} else
{var statearr_22888_23048 = state_22882__$1;(statearr_22888_23048[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22883 === (3)))
{var inst_22880 = (state_22882[(2)]);var state_22882__$1 = state_22882;return cljs.core.async.impl.ioc_helpers.return_chan(state_22882__$1,inst_22880);
} else
{if((state_val_22883 === (2)))
{var state_22882__$1 = state_22882;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22882__$1,(4),jobs);
} else
{if((state_val_22883 === (1)))
{var state_22882__$1 = state_22882;var statearr_22889_23049 = state_22882__$1;(statearr_22889_23049[(2)] = null);
(statearr_22889_23049[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__23040,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
;return ((function (__23040,switch__6470__auto__,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22893 = [null,null,null,null,null,null,null];(statearr_22893[(0)] = state_machine__6471__auto__);
(statearr_22893[(1)] = (1));
return statearr_22893;
});
var state_machine__6471__auto____1 = (function (state_22882){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22882);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object))
{var ex__6474__auto__ = e22894;var statearr_22895_23050 = state_22882;(statearr_22895_23050[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22882);
return cljs.core.constant$keyword$16;
} else
{throw e22894;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23051 = state_22882;
state_22882 = G__23051;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22882){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__23040,switch__6470__auto__,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22896 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23043);
return statearr_22896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(__23040,c__6485__auto___23043,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
);

break;
case "compute":
var c__6485__auto___23052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__23040,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__23040,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function (state_22909){var state_val_22910 = (state_22909[(1)]);if((state_val_22910 === (7)))
{var inst_22905 = (state_22909[(2)]);var state_22909__$1 = state_22909;var statearr_22911_23053 = state_22909__$1;(statearr_22911_23053[(2)] = inst_22905);
(statearr_22911_23053[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22910 === (6)))
{var state_22909__$1 = state_22909;var statearr_22912_23054 = state_22909__$1;(statearr_22912_23054[(2)] = null);
(statearr_22912_23054[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22910 === (5)))
{var state_22909__$1 = state_22909;var statearr_22913_23055 = state_22909__$1;(statearr_22913_23055[(2)] = null);
(statearr_22913_23055[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22910 === (4)))
{var inst_22899 = (state_22909[(2)]);var inst_22900 = process(inst_22899);var state_22909__$1 = state_22909;if(cljs.core.truth_(inst_22900))
{var statearr_22914_23056 = state_22909__$1;(statearr_22914_23056[(1)] = (5));
} else
{var statearr_22915_23057 = state_22909__$1;(statearr_22915_23057[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22910 === (3)))
{var inst_22907 = (state_22909[(2)]);var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.return_chan(state_22909__$1,inst_22907);
} else
{if((state_val_22910 === (2)))
{var state_22909__$1 = state_22909;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22909__$1,(4),jobs);
} else
{if((state_val_22910 === (1)))
{var state_22909__$1 = state_22909;var statearr_22916_23058 = state_22909__$1;(statearr_22916_23058[(2)] = null);
(statearr_22916_23058[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__23040,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
;return ((function (__23040,switch__6470__auto__,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22920 = [null,null,null,null,null,null,null];(statearr_22920[(0)] = state_machine__6471__auto__);
(statearr_22920[(1)] = (1));
return statearr_22920;
});
var state_machine__6471__auto____1 = (function (state_22909){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22909);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22921){if((e22921 instanceof Object))
{var ex__6474__auto__ = e22921;var statearr_22922_23059 = state_22909;(statearr_22922_23059[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22909);
return cljs.core.constant$keyword$16;
} else
{throw e22921;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23060 = state_22909;
state_22909 = G__23060;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22909){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__23040,switch__6470__auto__,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22923 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23052);
return statearr_22923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(__23040,c__6485__auto___23052,G__22869_23041,n__4510__auto___23039,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23061 = (__23040 + (1));
__23040 = G__23061;
continue;
}
} else
{}
break;
}
var c__6485__auto___23062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23062,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23062,jobs,results,process,async){
return (function (state_22945){var state_val_22946 = (state_22945[(1)]);if((state_val_22946 === (9)))
{var inst_22938 = (state_22945[(2)]);var state_22945__$1 = (function (){var statearr_22947 = state_22945;(statearr_22947[(7)] = inst_22938);
return statearr_22947;
})();var statearr_22948_23063 = state_22945__$1;(statearr_22948_23063[(2)] = null);
(statearr_22948_23063[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22946 === (8)))
{var inst_22931 = (state_22945[(8)]);var inst_22936 = (state_22945[(2)]);var state_22945__$1 = (function (){var statearr_22949 = state_22945;(statearr_22949[(9)] = inst_22936);
return statearr_22949;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22945__$1,(9),results,inst_22931);
} else
{if((state_val_22946 === (7)))
{var inst_22941 = (state_22945[(2)]);var state_22945__$1 = state_22945;var statearr_22950_23064 = state_22945__$1;(statearr_22950_23064[(2)] = inst_22941);
(statearr_22950_23064[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22946 === (6)))
{var inst_22931 = (state_22945[(8)]);var inst_22926 = (state_22945[(10)]);var inst_22931__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_22932 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22933 = [inst_22926,inst_22931__$1];var inst_22934 = (new cljs.core.PersistentVector(null,2,(5),inst_22932,inst_22933,null));var state_22945__$1 = (function (){var statearr_22951 = state_22945;(statearr_22951[(8)] = inst_22931__$1);
return statearr_22951;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22945__$1,(8),jobs,inst_22934);
} else
{if((state_val_22946 === (5)))
{var inst_22929 = cljs.core.async.close_BANG_(jobs);var state_22945__$1 = state_22945;var statearr_22952_23065 = state_22945__$1;(statearr_22952_23065[(2)] = inst_22929);
(statearr_22952_23065[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22946 === (4)))
{var inst_22926 = (state_22945[(10)]);var inst_22926__$1 = (state_22945[(2)]);var inst_22927 = (inst_22926__$1 == null);var state_22945__$1 = (function (){var statearr_22953 = state_22945;(statearr_22953[(10)] = inst_22926__$1);
return statearr_22953;
})();if(cljs.core.truth_(inst_22927))
{var statearr_22954_23066 = state_22945__$1;(statearr_22954_23066[(1)] = (5));
} else
{var statearr_22955_23067 = state_22945__$1;(statearr_22955_23067[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22946 === (3)))
{var inst_22943 = (state_22945[(2)]);var state_22945__$1 = state_22945;return cljs.core.async.impl.ioc_helpers.return_chan(state_22945__$1,inst_22943);
} else
{if((state_val_22946 === (2)))
{var state_22945__$1 = state_22945;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22945__$1,(4),from);
} else
{if((state_val_22946 === (1)))
{var state_22945__$1 = state_22945;var statearr_22956_23068 = state_22945__$1;(statearr_22956_23068[(2)] = null);
(statearr_22956_23068[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___23062,jobs,results,process,async))
;return ((function (switch__6470__auto__,c__6485__auto___23062,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22960 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22960[(0)] = state_machine__6471__auto__);
(statearr_22960[(1)] = (1));
return statearr_22960;
});
var state_machine__6471__auto____1 = (function (state_22945){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22945);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object))
{var ex__6474__auto__ = e22961;var statearr_22962_23069 = state_22945;(statearr_22962_23069[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22945);
return cljs.core.constant$keyword$16;
} else
{throw e22961;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23070 = state_22945;
state_22945 = G__23070;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22945){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23062,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22963 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23062);
return statearr_22963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23062,jobs,results,process,async))
);
var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__,jobs,results,process,async){
return (function (state_23001){var state_val_23002 = (state_23001[(1)]);if((state_val_23002 === (7)))
{var inst_22997 = (state_23001[(2)]);var state_23001__$1 = state_23001;var statearr_23003_23071 = state_23001__$1;(statearr_23003_23071[(2)] = inst_22997);
(statearr_23003_23071[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (20)))
{var state_23001__$1 = state_23001;var statearr_23004_23072 = state_23001__$1;(statearr_23004_23072[(2)] = null);
(statearr_23004_23072[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (1)))
{var state_23001__$1 = state_23001;var statearr_23005_23073 = state_23001__$1;(statearr_23005_23073[(2)] = null);
(statearr_23005_23073[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (4)))
{var inst_22966 = (state_23001[(7)]);var inst_22966__$1 = (state_23001[(2)]);var inst_22967 = (inst_22966__$1 == null);var state_23001__$1 = (function (){var statearr_23006 = state_23001;(statearr_23006[(7)] = inst_22966__$1);
return statearr_23006;
})();if(cljs.core.truth_(inst_22967))
{var statearr_23007_23074 = state_23001__$1;(statearr_23007_23074[(1)] = (5));
} else
{var statearr_23008_23075 = state_23001__$1;(statearr_23008_23075[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (15)))
{var inst_22979 = (state_23001[(8)]);var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23001__$1,(18),to,inst_22979);
} else
{if((state_val_23002 === (21)))
{var inst_22992 = (state_23001[(2)]);var state_23001__$1 = state_23001;var statearr_23009_23076 = state_23001__$1;(statearr_23009_23076[(2)] = inst_22992);
(statearr_23009_23076[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (13)))
{var inst_22994 = (state_23001[(2)]);var state_23001__$1 = (function (){var statearr_23010 = state_23001;(statearr_23010[(9)] = inst_22994);
return statearr_23010;
})();var statearr_23011_23077 = state_23001__$1;(statearr_23011_23077[(2)] = null);
(statearr_23011_23077[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (6)))
{var inst_22966 = (state_23001[(7)]);var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23001__$1,(11),inst_22966);
} else
{if((state_val_23002 === (17)))
{var inst_22987 = (state_23001[(2)]);var state_23001__$1 = state_23001;if(cljs.core.truth_(inst_22987))
{var statearr_23012_23078 = state_23001__$1;(statearr_23012_23078[(1)] = (19));
} else
{var statearr_23013_23079 = state_23001__$1;(statearr_23013_23079[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (3)))
{var inst_22999 = (state_23001[(2)]);var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.return_chan(state_23001__$1,inst_22999);
} else
{if((state_val_23002 === (12)))
{var inst_22976 = (state_23001[(10)]);var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23001__$1,(14),inst_22976);
} else
{if((state_val_23002 === (2)))
{var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23001__$1,(4),results);
} else
{if((state_val_23002 === (19)))
{var state_23001__$1 = state_23001;var statearr_23014_23080 = state_23001__$1;(statearr_23014_23080[(2)] = null);
(statearr_23014_23080[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (11)))
{var inst_22976 = (state_23001[(2)]);var state_23001__$1 = (function (){var statearr_23015 = state_23001;(statearr_23015[(10)] = inst_22976);
return statearr_23015;
})();var statearr_23016_23081 = state_23001__$1;(statearr_23016_23081[(2)] = null);
(statearr_23016_23081[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (9)))
{var state_23001__$1 = state_23001;var statearr_23017_23082 = state_23001__$1;(statearr_23017_23082[(2)] = null);
(statearr_23017_23082[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (5)))
{var state_23001__$1 = state_23001;if(cljs.core.truth_(close_QMARK_))
{var statearr_23018_23083 = state_23001__$1;(statearr_23018_23083[(1)] = (8));
} else
{var statearr_23019_23084 = state_23001__$1;(statearr_23019_23084[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (14)))
{var inst_22981 = (state_23001[(11)]);var inst_22979 = (state_23001[(8)]);var inst_22979__$1 = (state_23001[(2)]);var inst_22980 = (inst_22979__$1 == null);var inst_22981__$1 = cljs.core.not(inst_22980);var state_23001__$1 = (function (){var statearr_23020 = state_23001;(statearr_23020[(11)] = inst_22981__$1);
(statearr_23020[(8)] = inst_22979__$1);
return statearr_23020;
})();if(inst_22981__$1)
{var statearr_23021_23085 = state_23001__$1;(statearr_23021_23085[(1)] = (15));
} else
{var statearr_23022_23086 = state_23001__$1;(statearr_23022_23086[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (16)))
{var inst_22981 = (state_23001[(11)]);var state_23001__$1 = state_23001;var statearr_23023_23087 = state_23001__$1;(statearr_23023_23087[(2)] = inst_22981);
(statearr_23023_23087[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (10)))
{var inst_22973 = (state_23001[(2)]);var state_23001__$1 = state_23001;var statearr_23024_23088 = state_23001__$1;(statearr_23024_23088[(2)] = inst_22973);
(statearr_23024_23088[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (18)))
{var inst_22984 = (state_23001[(2)]);var state_23001__$1 = state_23001;var statearr_23025_23089 = state_23001__$1;(statearr_23025_23089[(2)] = inst_22984);
(statearr_23025_23089[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23002 === (8)))
{var inst_22970 = cljs.core.async.close_BANG_(to);var state_23001__$1 = state_23001;var statearr_23026_23090 = state_23001__$1;(statearr_23026_23090[(2)] = inst_22970);
(statearr_23026_23090[(1)] = (10));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto__,jobs,results,process,async))
;return ((function (switch__6470__auto__,c__6485__auto__,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23030 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23030[(0)] = state_machine__6471__auto__);
(statearr_23030[(1)] = (1));
return statearr_23030;
});
var state_machine__6471__auto____1 = (function (state_23001){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23001);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object))
{var ex__6474__auto__ = e23031;var statearr_23032_23091 = state_23001;(statearr_23032_23091[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001);
return cljs.core.constant$keyword$16;
} else
{throw e23031;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23092 = state_23001;
state_23001 = G__23092;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23001){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_23033 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_23033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto__,jobs,results,process,async))
);
return c__6485__auto__;
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
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$23);
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
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$24);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6485__auto___23215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23215,tc,fc){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23215,tc,fc){
return (function (state_23189){var state_val_23190 = (state_23189[(1)]);if((state_val_23190 === (7)))
{var inst_23185 = (state_23189[(2)]);var state_23189__$1 = state_23189;var statearr_23191_23216 = state_23189__$1;(statearr_23191_23216[(2)] = inst_23185);
(statearr_23191_23216[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (1)))
{var state_23189__$1 = state_23189;var statearr_23192_23217 = state_23189__$1;(statearr_23192_23217[(2)] = null);
(statearr_23192_23217[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (4)))
{var inst_23166 = (state_23189[(7)]);var inst_23166__$1 = (state_23189[(2)]);var inst_23167 = (inst_23166__$1 == null);var state_23189__$1 = (function (){var statearr_23193 = state_23189;(statearr_23193[(7)] = inst_23166__$1);
return statearr_23193;
})();if(cljs.core.truth_(inst_23167))
{var statearr_23194_23218 = state_23189__$1;(statearr_23194_23218[(1)] = (5));
} else
{var statearr_23195_23219 = state_23189__$1;(statearr_23195_23219[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (13)))
{var state_23189__$1 = state_23189;var statearr_23196_23220 = state_23189__$1;(statearr_23196_23220[(2)] = null);
(statearr_23196_23220[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (6)))
{var inst_23166 = (state_23189[(7)]);var inst_23172 = (function (){var G__23197 = inst_23166;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23197) : p.call(null,G__23197));
})();var state_23189__$1 = state_23189;if(cljs.core.truth_(inst_23172))
{var statearr_23198_23221 = state_23189__$1;(statearr_23198_23221[(1)] = (9));
} else
{var statearr_23199_23222 = state_23189__$1;(statearr_23199_23222[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (3)))
{var inst_23187 = (state_23189[(2)]);var state_23189__$1 = state_23189;return cljs.core.async.impl.ioc_helpers.return_chan(state_23189__$1,inst_23187);
} else
{if((state_val_23190 === (12)))
{var state_23189__$1 = state_23189;var statearr_23200_23223 = state_23189__$1;(statearr_23200_23223[(2)] = null);
(statearr_23200_23223[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (2)))
{var state_23189__$1 = state_23189;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23189__$1,(4),ch);
} else
{if((state_val_23190 === (11)))
{var inst_23166 = (state_23189[(7)]);var inst_23176 = (state_23189[(2)]);var state_23189__$1 = state_23189;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23189__$1,(8),inst_23176,inst_23166);
} else
{if((state_val_23190 === (9)))
{var state_23189__$1 = state_23189;var statearr_23201_23224 = state_23189__$1;(statearr_23201_23224[(2)] = tc);
(statearr_23201_23224[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (5)))
{var inst_23169 = cljs.core.async.close_BANG_(tc);var inst_23170 = cljs.core.async.close_BANG_(fc);var state_23189__$1 = (function (){var statearr_23202 = state_23189;(statearr_23202[(8)] = inst_23169);
return statearr_23202;
})();var statearr_23203_23225 = state_23189__$1;(statearr_23203_23225[(2)] = inst_23170);
(statearr_23203_23225[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (14)))
{var inst_23183 = (state_23189[(2)]);var state_23189__$1 = state_23189;var statearr_23204_23226 = state_23189__$1;(statearr_23204_23226[(2)] = inst_23183);
(statearr_23204_23226[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (10)))
{var state_23189__$1 = state_23189;var statearr_23205_23227 = state_23189__$1;(statearr_23205_23227[(2)] = fc);
(statearr_23205_23227[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23190 === (8)))
{var inst_23178 = (state_23189[(2)]);var state_23189__$1 = state_23189;if(cljs.core.truth_(inst_23178))
{var statearr_23206_23228 = state_23189__$1;(statearr_23206_23228[(1)] = (12));
} else
{var statearr_23207_23229 = state_23189__$1;(statearr_23207_23229[(1)] = (13));
}
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___23215,tc,fc))
;return ((function (switch__6470__auto__,c__6485__auto___23215,tc,fc){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23211 = [null,null,null,null,null,null,null,null,null];(statearr_23211[(0)] = state_machine__6471__auto__);
(statearr_23211[(1)] = (1));
return statearr_23211;
});
var state_machine__6471__auto____1 = (function (state_23189){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23189);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23212){if((e23212 instanceof Object))
{var ex__6474__auto__ = e23212;var statearr_23213_23230 = state_23189;(statearr_23213_23230[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23189);
return cljs.core.constant$keyword$16;
} else
{throw e23212;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23231 = state_23189;
state_23189 = G__23231;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23189){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23215,tc,fc))
})();var state__6487__auto__ = (function (){var statearr_23214 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23215);
return statearr_23214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23215,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_23280){var state_val_23281 = (state_23280[(1)]);if((state_val_23281 === (7)))
{var inst_23276 = (state_23280[(2)]);var state_23280__$1 = state_23280;var statearr_23282_23300 = state_23280__$1;(statearr_23282_23300[(2)] = inst_23276);
(statearr_23282_23300[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23281 === (6)))
{var inst_23269 = (state_23280[(7)]);var inst_23266 = (state_23280[(8)]);var inst_23273 = (function (){var G__23283 = inst_23266;var G__23284 = inst_23269;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23283,G__23284) : f.call(null,G__23283,G__23284));
})();var inst_23266__$1 = inst_23273;var state_23280__$1 = (function (){var statearr_23285 = state_23280;(statearr_23285[(8)] = inst_23266__$1);
return statearr_23285;
})();var statearr_23286_23301 = state_23280__$1;(statearr_23286_23301[(2)] = null);
(statearr_23286_23301[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23281 === (5)))
{var inst_23266 = (state_23280[(8)]);var state_23280__$1 = state_23280;var statearr_23287_23302 = state_23280__$1;(statearr_23287_23302[(2)] = inst_23266);
(statearr_23287_23302[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23281 === (4)))
{var inst_23269 = (state_23280[(7)]);var inst_23269__$1 = (state_23280[(2)]);var inst_23270 = (inst_23269__$1 == null);var state_23280__$1 = (function (){var statearr_23288 = state_23280;(statearr_23288[(7)] = inst_23269__$1);
return statearr_23288;
})();if(cljs.core.truth_(inst_23270))
{var statearr_23289_23303 = state_23280__$1;(statearr_23289_23303[(1)] = (5));
} else
{var statearr_23290_23304 = state_23280__$1;(statearr_23290_23304[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23281 === (3)))
{var inst_23278 = (state_23280[(2)]);var state_23280__$1 = state_23280;return cljs.core.async.impl.ioc_helpers.return_chan(state_23280__$1,inst_23278);
} else
{if((state_val_23281 === (2)))
{var state_23280__$1 = state_23280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23280__$1,(4),ch);
} else
{if((state_val_23281 === (1)))
{var inst_23266 = init;var state_23280__$1 = (function (){var statearr_23291 = state_23280;(statearr_23291[(8)] = inst_23266);
return statearr_23291;
})();var statearr_23292_23305 = state_23280__$1;(statearr_23292_23305[(2)] = null);
(statearr_23292_23305[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6485__auto__))
;return ((function (switch__6470__auto__,c__6485__auto__){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23296 = [null,null,null,null,null,null,null,null,null];(statearr_23296[(0)] = state_machine__6471__auto__);
(statearr_23296[(1)] = (1));
return statearr_23296;
});
var state_machine__6471__auto____1 = (function (state_23280){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23280);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23297){if((e23297 instanceof Object))
{var ex__6474__auto__ = e23297;var statearr_23298_23306 = state_23280;(statearr_23298_23306[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23280);
return cljs.core.constant$keyword$16;
} else
{throw e23297;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23307 = state_23280;
state_23280 = G__23307;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23280){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_23299 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_23299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto__))
);
return c__6485__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_23384){var state_val_23385 = (state_23384[(1)]);if((state_val_23385 === (7)))
{var inst_23366 = (state_23384[(2)]);var state_23384__$1 = state_23384;var statearr_23386_23409 = state_23384__$1;(statearr_23386_23409[(2)] = inst_23366);
(statearr_23386_23409[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (1)))
{var inst_23360 = cljs.core.seq(coll);var inst_23361 = inst_23360;var state_23384__$1 = (function (){var statearr_23387 = state_23384;(statearr_23387[(7)] = inst_23361);
return statearr_23387;
})();var statearr_23388_23410 = state_23384__$1;(statearr_23388_23410[(2)] = null);
(statearr_23388_23410[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (4)))
{var inst_23361 = (state_23384[(7)]);var inst_23364 = cljs.core.first(inst_23361);var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23384__$1,(7),ch,inst_23364);
} else
{if((state_val_23385 === (13)))
{var inst_23378 = (state_23384[(2)]);var state_23384__$1 = state_23384;var statearr_23389_23411 = state_23384__$1;(statearr_23389_23411[(2)] = inst_23378);
(statearr_23389_23411[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (6)))
{var inst_23369 = (state_23384[(2)]);var state_23384__$1 = state_23384;if(cljs.core.truth_(inst_23369))
{var statearr_23390_23412 = state_23384__$1;(statearr_23390_23412[(1)] = (8));
} else
{var statearr_23391_23413 = state_23384__$1;(statearr_23391_23413[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (3)))
{var inst_23382 = (state_23384[(2)]);var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.return_chan(state_23384__$1,inst_23382);
} else
{if((state_val_23385 === (12)))
{var state_23384__$1 = state_23384;var statearr_23392_23414 = state_23384__$1;(statearr_23392_23414[(2)] = null);
(statearr_23392_23414[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (2)))
{var inst_23361 = (state_23384[(7)]);var state_23384__$1 = state_23384;if(cljs.core.truth_(inst_23361))
{var statearr_23393_23415 = state_23384__$1;(statearr_23393_23415[(1)] = (4));
} else
{var statearr_23394_23416 = state_23384__$1;(statearr_23394_23416[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (11)))
{var inst_23375 = cljs.core.async.close_BANG_(ch);var state_23384__$1 = state_23384;var statearr_23395_23417 = state_23384__$1;(statearr_23395_23417[(2)] = inst_23375);
(statearr_23395_23417[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (9)))
{var state_23384__$1 = state_23384;if(cljs.core.truth_(close_QMARK_))
{var statearr_23396_23418 = state_23384__$1;(statearr_23396_23418[(1)] = (11));
} else
{var statearr_23397_23419 = state_23384__$1;(statearr_23397_23419[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (5)))
{var inst_23361 = (state_23384[(7)]);var state_23384__$1 = state_23384;var statearr_23398_23420 = state_23384__$1;(statearr_23398_23420[(2)] = inst_23361);
(statearr_23398_23420[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (10)))
{var inst_23380 = (state_23384[(2)]);var state_23384__$1 = state_23384;var statearr_23399_23421 = state_23384__$1;(statearr_23399_23421[(2)] = inst_23380);
(statearr_23399_23421[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23385 === (8)))
{var inst_23361 = (state_23384[(7)]);var inst_23371 = cljs.core.next(inst_23361);var inst_23361__$1 = inst_23371;var state_23384__$1 = (function (){var statearr_23400 = state_23384;(statearr_23400[(7)] = inst_23361__$1);
return statearr_23400;
})();var statearr_23401_23422 = state_23384__$1;(statearr_23401_23422[(2)] = null);
(statearr_23401_23422[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto__))
;return ((function (switch__6470__auto__,c__6485__auto__){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23405 = [null,null,null,null,null,null,null,null];(statearr_23405[(0)] = state_machine__6471__auto__);
(statearr_23405[(1)] = (1));
return statearr_23405;
});
var state_machine__6471__auto____1 = (function (state_23384){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23384);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23406){if((e23406 instanceof Object))
{var ex__6474__auto__ = e23406;var statearr_23407_23423 = state_23384;(statearr_23407_23423[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23384);
return cljs.core.constant$keyword$16;
} else
{throw e23406;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23424 = state_23384;
state_23384 = G__23424;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23384){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_23408 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_23408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto__))
);
return c__6485__auto__;
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
cljs.core.async.Mux = (function (){var obj23426 = {};return obj23426;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23430 = x__4277__auto__;return goog.typeOf(G__23430);
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
cljs.core.async.Mult = (function (){var obj23432 = {};return obj23432;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23436 = x__4277__auto__;return goog.typeOf(G__23436);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23440 = x__4277__auto__;return goog.typeOf(G__23440);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23444 = x__4277__auto__;return goog.typeOf(G__23444);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__23674 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23674) : cljs.core.atom.call(null,G__23674));
})();var m = (function (){if(typeof cljs.core.async.t23675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23675 = (function (cs,ch,mult,meta23676){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23676 = meta23676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23675.cljs$lang$type = true;
cljs.core.async.t23675.cljs$lang$ctorStr = "cljs.core.async/t23675";
cljs.core.async.t23675.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23675");
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__23678_23903 = self__.cs;var G__23679_23904 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23678_23903,G__23679_23904) : cljs.core.reset_BANG_.call(null,G__23678_23903,G__23679_23904));
return null;
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23677){var self__ = this;
var _23677__$1 = this;return self__.meta23676;
});})(cs))
;
cljs.core.async.t23675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23677,meta23676__$1){var self__ = this;
var _23677__$1 = this;return (new cljs.core.async.t23675(self__.cs,self__.ch,self__.mult,meta23676__$1));
});})(cs))
;
cljs.core.async.__GT_t23675 = ((function (cs){
return (function __GT_t23675(cs__$1,ch__$1,mult__$1,meta23676){return (new cljs.core.async.t23675(cs__$1,ch__$1,mult__$1,meta23676));
});})(cs))
;
}
return (new cljs.core.async.t23675(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23680 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23680) : cljs.core.atom.call(null,G__23680));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6485__auto___23905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23905,cs,m,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23905,cs,m,dchan,dctr,done){
return (function (state_23811){var state_val_23812 = (state_23811[(1)]);if((state_val_23812 === (7)))
{var inst_23807 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23813_23906 = state_23811__$1;(statearr_23813_23906[(2)] = inst_23807);
(statearr_23813_23906[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (20)))
{var inst_23712 = (state_23811[(7)]);var inst_23722 = cljs.core.first(inst_23712);var inst_23723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23722,(0),null);var inst_23724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23722,(1),null);var state_23811__$1 = (function (){var statearr_23814 = state_23811;(statearr_23814[(8)] = inst_23723);
return statearr_23814;
})();if(cljs.core.truth_(inst_23724))
{var statearr_23815_23907 = state_23811__$1;(statearr_23815_23907[(1)] = (22));
} else
{var statearr_23816_23908 = state_23811__$1;(statearr_23816_23908[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (27)))
{var inst_23754 = (state_23811[(9)]);var inst_23752 = (state_23811[(10)]);var inst_23759 = (state_23811[(11)]);var inst_23683 = (state_23811[(12)]);var inst_23759__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23752,inst_23754);var inst_23760 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23759__$1,inst_23683,done);var state_23811__$1 = (function (){var statearr_23817 = state_23811;(statearr_23817[(11)] = inst_23759__$1);
return statearr_23817;
})();if(cljs.core.truth_(inst_23760))
{var statearr_23818_23909 = state_23811__$1;(statearr_23818_23909[(1)] = (30));
} else
{var statearr_23819_23910 = state_23811__$1;(statearr_23819_23910[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (1)))
{var state_23811__$1 = state_23811;var statearr_23820_23911 = state_23811__$1;(statearr_23820_23911[(2)] = null);
(statearr_23820_23911[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (24)))
{var inst_23712 = (state_23811[(7)]);var inst_23729 = (state_23811[(2)]);var inst_23730 = cljs.core.next(inst_23712);var inst_23692 = inst_23730;var inst_23693 = null;var inst_23694 = (0);var inst_23695 = (0);var state_23811__$1 = (function (){var statearr_23821 = state_23811;(statearr_23821[(13)] = inst_23729);
(statearr_23821[(14)] = inst_23695);
(statearr_23821[(15)] = inst_23693);
(statearr_23821[(16)] = inst_23694);
(statearr_23821[(17)] = inst_23692);
return statearr_23821;
})();var statearr_23822_23912 = state_23811__$1;(statearr_23822_23912[(2)] = null);
(statearr_23822_23912[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (39)))
{var state_23811__$1 = state_23811;var statearr_23826_23913 = state_23811__$1;(statearr_23826_23913[(2)] = null);
(statearr_23826_23913[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (4)))
{var inst_23683 = (state_23811[(12)]);var inst_23683__$1 = (state_23811[(2)]);var inst_23684 = (inst_23683__$1 == null);var state_23811__$1 = (function (){var statearr_23827 = state_23811;(statearr_23827[(12)] = inst_23683__$1);
return statearr_23827;
})();if(cljs.core.truth_(inst_23684))
{var statearr_23828_23914 = state_23811__$1;(statearr_23828_23914[(1)] = (5));
} else
{var statearr_23829_23915 = state_23811__$1;(statearr_23829_23915[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (15)))
{var inst_23695 = (state_23811[(14)]);var inst_23693 = (state_23811[(15)]);var inst_23694 = (state_23811[(16)]);var inst_23692 = (state_23811[(17)]);var inst_23708 = (state_23811[(2)]);var inst_23709 = (inst_23695 + (1));var tmp23823 = inst_23693;var tmp23824 = inst_23694;var tmp23825 = inst_23692;var inst_23692__$1 = tmp23825;var inst_23693__$1 = tmp23823;var inst_23694__$1 = tmp23824;var inst_23695__$1 = inst_23709;var state_23811__$1 = (function (){var statearr_23830 = state_23811;(statearr_23830[(18)] = inst_23708);
(statearr_23830[(14)] = inst_23695__$1);
(statearr_23830[(15)] = inst_23693__$1);
(statearr_23830[(16)] = inst_23694__$1);
(statearr_23830[(17)] = inst_23692__$1);
return statearr_23830;
})();var statearr_23831_23916 = state_23811__$1;(statearr_23831_23916[(2)] = null);
(statearr_23831_23916[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (21)))
{var inst_23733 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23835_23917 = state_23811__$1;(statearr_23835_23917[(2)] = inst_23733);
(statearr_23835_23917[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (31)))
{var inst_23759 = (state_23811[(11)]);var inst_23763 = done(null);var inst_23764 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23759);var state_23811__$1 = (function (){var statearr_23836 = state_23811;(statearr_23836[(19)] = inst_23763);
return statearr_23836;
})();var statearr_23837_23918 = state_23811__$1;(statearr_23837_23918[(2)] = inst_23764);
(statearr_23837_23918[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (32)))
{var inst_23754 = (state_23811[(9)]);var inst_23753 = (state_23811[(20)]);var inst_23751 = (state_23811[(21)]);var inst_23752 = (state_23811[(10)]);var inst_23766 = (state_23811[(2)]);var inst_23767 = (inst_23754 + (1));var tmp23832 = inst_23753;var tmp23833 = inst_23751;var tmp23834 = inst_23752;var inst_23751__$1 = tmp23833;var inst_23752__$1 = tmp23834;var inst_23753__$1 = tmp23832;var inst_23754__$1 = inst_23767;var state_23811__$1 = (function (){var statearr_23838 = state_23811;(statearr_23838[(22)] = inst_23766);
(statearr_23838[(9)] = inst_23754__$1);
(statearr_23838[(20)] = inst_23753__$1);
(statearr_23838[(21)] = inst_23751__$1);
(statearr_23838[(10)] = inst_23752__$1);
return statearr_23838;
})();var statearr_23839_23919 = state_23811__$1;(statearr_23839_23919[(2)] = null);
(statearr_23839_23919[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (40)))
{var inst_23779 = (state_23811[(23)]);var inst_23783 = done(null);var inst_23784 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23779);var state_23811__$1 = (function (){var statearr_23840 = state_23811;(statearr_23840[(24)] = inst_23783);
return statearr_23840;
})();var statearr_23841_23920 = state_23811__$1;(statearr_23841_23920[(2)] = inst_23784);
(statearr_23841_23920[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (33)))
{var inst_23770 = (state_23811[(25)]);var inst_23772 = cljs.core.chunked_seq_QMARK_(inst_23770);var state_23811__$1 = state_23811;if(inst_23772)
{var statearr_23842_23921 = state_23811__$1;(statearr_23842_23921[(1)] = (36));
} else
{var statearr_23843_23922 = state_23811__$1;(statearr_23843_23922[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (13)))
{var inst_23702 = (state_23811[(26)]);var inst_23705 = cljs.core.async.close_BANG_(inst_23702);var state_23811__$1 = state_23811;var statearr_23844_23923 = state_23811__$1;(statearr_23844_23923[(2)] = inst_23705);
(statearr_23844_23923[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (22)))
{var inst_23723 = (state_23811[(8)]);var inst_23726 = cljs.core.async.close_BANG_(inst_23723);var state_23811__$1 = state_23811;var statearr_23845_23924 = state_23811__$1;(statearr_23845_23924[(2)] = inst_23726);
(statearr_23845_23924[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (36)))
{var inst_23770 = (state_23811[(25)]);var inst_23774 = cljs.core.chunk_first(inst_23770);var inst_23775 = cljs.core.chunk_rest(inst_23770);var inst_23776 = cljs.core.count(inst_23774);var inst_23751 = inst_23775;var inst_23752 = inst_23774;var inst_23753 = inst_23776;var inst_23754 = (0);var state_23811__$1 = (function (){var statearr_23846 = state_23811;(statearr_23846[(9)] = inst_23754);
(statearr_23846[(20)] = inst_23753);
(statearr_23846[(21)] = inst_23751);
(statearr_23846[(10)] = inst_23752);
return statearr_23846;
})();var statearr_23847_23925 = state_23811__$1;(statearr_23847_23925[(2)] = null);
(statearr_23847_23925[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (41)))
{var inst_23770 = (state_23811[(25)]);var inst_23786 = (state_23811[(2)]);var inst_23787 = cljs.core.next(inst_23770);var inst_23751 = inst_23787;var inst_23752 = null;var inst_23753 = (0);var inst_23754 = (0);var state_23811__$1 = (function (){var statearr_23848 = state_23811;(statearr_23848[(9)] = inst_23754);
(statearr_23848[(27)] = inst_23786);
(statearr_23848[(20)] = inst_23753);
(statearr_23848[(21)] = inst_23751);
(statearr_23848[(10)] = inst_23752);
return statearr_23848;
})();var statearr_23849_23926 = state_23811__$1;(statearr_23849_23926[(2)] = null);
(statearr_23849_23926[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (43)))
{var state_23811__$1 = state_23811;var statearr_23850_23927 = state_23811__$1;(statearr_23850_23927[(2)] = null);
(statearr_23850_23927[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (29)))
{var inst_23795 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23851_23928 = state_23811__$1;(statearr_23851_23928[(2)] = inst_23795);
(statearr_23851_23928[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (44)))
{var inst_23804 = (state_23811[(2)]);var state_23811__$1 = (function (){var statearr_23852 = state_23811;(statearr_23852[(28)] = inst_23804);
return statearr_23852;
})();var statearr_23853_23929 = state_23811__$1;(statearr_23853_23929[(2)] = null);
(statearr_23853_23929[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (6)))
{var inst_23743 = (state_23811[(29)]);var inst_23742 = (function (){var G__23854 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23854) : cljs.core.deref.call(null,G__23854));
})();var inst_23743__$1 = cljs.core.keys(inst_23742);var inst_23744 = cljs.core.count(inst_23743__$1);var inst_23745 = (function (){var G__23855 = dctr;var G__23856 = inst_23744;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23855,G__23856) : cljs.core.reset_BANG_.call(null,G__23855,G__23856));
})();var inst_23750 = cljs.core.seq(inst_23743__$1);var inst_23751 = inst_23750;var inst_23752 = null;var inst_23753 = (0);var inst_23754 = (0);var state_23811__$1 = (function (){var statearr_23857 = state_23811;(statearr_23857[(9)] = inst_23754);
(statearr_23857[(20)] = inst_23753);
(statearr_23857[(21)] = inst_23751);
(statearr_23857[(10)] = inst_23752);
(statearr_23857[(30)] = inst_23745);
(statearr_23857[(29)] = inst_23743__$1);
return statearr_23857;
})();var statearr_23858_23930 = state_23811__$1;(statearr_23858_23930[(2)] = null);
(statearr_23858_23930[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (28)))
{var inst_23751 = (state_23811[(21)]);var inst_23770 = (state_23811[(25)]);var inst_23770__$1 = cljs.core.seq(inst_23751);var state_23811__$1 = (function (){var statearr_23859 = state_23811;(statearr_23859[(25)] = inst_23770__$1);
return statearr_23859;
})();if(inst_23770__$1)
{var statearr_23860_23931 = state_23811__$1;(statearr_23860_23931[(1)] = (33));
} else
{var statearr_23861_23932 = state_23811__$1;(statearr_23861_23932[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (25)))
{var inst_23754 = (state_23811[(9)]);var inst_23753 = (state_23811[(20)]);var inst_23756 = (inst_23754 < inst_23753);var inst_23757 = inst_23756;var state_23811__$1 = state_23811;if(cljs.core.truth_(inst_23757))
{var statearr_23862_23933 = state_23811__$1;(statearr_23862_23933[(1)] = (27));
} else
{var statearr_23863_23934 = state_23811__$1;(statearr_23863_23934[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (34)))
{var state_23811__$1 = state_23811;var statearr_23864_23935 = state_23811__$1;(statearr_23864_23935[(2)] = null);
(statearr_23864_23935[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (17)))
{var state_23811__$1 = state_23811;var statearr_23865_23936 = state_23811__$1;(statearr_23865_23936[(2)] = null);
(statearr_23865_23936[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (3)))
{var inst_23809 = (state_23811[(2)]);var state_23811__$1 = state_23811;return cljs.core.async.impl.ioc_helpers.return_chan(state_23811__$1,inst_23809);
} else
{if((state_val_23812 === (12)))
{var inst_23738 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23866_23937 = state_23811__$1;(statearr_23866_23937[(2)] = inst_23738);
(statearr_23866_23937[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (2)))
{var state_23811__$1 = state_23811;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23811__$1,(4),ch);
} else
{if((state_val_23812 === (23)))
{var state_23811__$1 = state_23811;var statearr_23867_23938 = state_23811__$1;(statearr_23867_23938[(2)] = null);
(statearr_23867_23938[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (35)))
{var inst_23793 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23868_23939 = state_23811__$1;(statearr_23868_23939[(2)] = inst_23793);
(statearr_23868_23939[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (19)))
{var inst_23712 = (state_23811[(7)]);var inst_23716 = cljs.core.chunk_first(inst_23712);var inst_23717 = cljs.core.chunk_rest(inst_23712);var inst_23718 = cljs.core.count(inst_23716);var inst_23692 = inst_23717;var inst_23693 = inst_23716;var inst_23694 = inst_23718;var inst_23695 = (0);var state_23811__$1 = (function (){var statearr_23869 = state_23811;(statearr_23869[(14)] = inst_23695);
(statearr_23869[(15)] = inst_23693);
(statearr_23869[(16)] = inst_23694);
(statearr_23869[(17)] = inst_23692);
return statearr_23869;
})();var statearr_23870_23940 = state_23811__$1;(statearr_23870_23940[(2)] = null);
(statearr_23870_23940[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (11)))
{var inst_23712 = (state_23811[(7)]);var inst_23692 = (state_23811[(17)]);var inst_23712__$1 = cljs.core.seq(inst_23692);var state_23811__$1 = (function (){var statearr_23871 = state_23811;(statearr_23871[(7)] = inst_23712__$1);
return statearr_23871;
})();if(inst_23712__$1)
{var statearr_23872_23941 = state_23811__$1;(statearr_23872_23941[(1)] = (16));
} else
{var statearr_23873_23942 = state_23811__$1;(statearr_23873_23942[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (9)))
{var inst_23740 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23874_23943 = state_23811__$1;(statearr_23874_23943[(2)] = inst_23740);
(statearr_23874_23943[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (5)))
{var inst_23690 = (function (){var G__23875 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23875) : cljs.core.deref.call(null,G__23875));
})();var inst_23691 = cljs.core.seq(inst_23690);var inst_23692 = inst_23691;var inst_23693 = null;var inst_23694 = (0);var inst_23695 = (0);var state_23811__$1 = (function (){var statearr_23876 = state_23811;(statearr_23876[(14)] = inst_23695);
(statearr_23876[(15)] = inst_23693);
(statearr_23876[(16)] = inst_23694);
(statearr_23876[(17)] = inst_23692);
return statearr_23876;
})();var statearr_23877_23944 = state_23811__$1;(statearr_23877_23944[(2)] = null);
(statearr_23877_23944[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (14)))
{var state_23811__$1 = state_23811;var statearr_23878_23945 = state_23811__$1;(statearr_23878_23945[(2)] = null);
(statearr_23878_23945[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (45)))
{var inst_23801 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23879_23946 = state_23811__$1;(statearr_23879_23946[(2)] = inst_23801);
(statearr_23879_23946[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (26)))
{var inst_23743 = (state_23811[(29)]);var inst_23797 = (state_23811[(2)]);var inst_23798 = cljs.core.seq(inst_23743);var state_23811__$1 = (function (){var statearr_23880 = state_23811;(statearr_23880[(31)] = inst_23797);
return statearr_23880;
})();if(inst_23798)
{var statearr_23881_23947 = state_23811__$1;(statearr_23881_23947[(1)] = (42));
} else
{var statearr_23882_23948 = state_23811__$1;(statearr_23882_23948[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (16)))
{var inst_23712 = (state_23811[(7)]);var inst_23714 = cljs.core.chunked_seq_QMARK_(inst_23712);var state_23811__$1 = state_23811;if(inst_23714)
{var statearr_23883_23949 = state_23811__$1;(statearr_23883_23949[(1)] = (19));
} else
{var statearr_23884_23950 = state_23811__$1;(statearr_23884_23950[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (38)))
{var inst_23790 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23885_23951 = state_23811__$1;(statearr_23885_23951[(2)] = inst_23790);
(statearr_23885_23951[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (30)))
{var state_23811__$1 = state_23811;var statearr_23886_23952 = state_23811__$1;(statearr_23886_23952[(2)] = null);
(statearr_23886_23952[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (10)))
{var inst_23695 = (state_23811[(14)]);var inst_23693 = (state_23811[(15)]);var inst_23701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23693,inst_23695);var inst_23702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23701,(0),null);var inst_23703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23701,(1),null);var state_23811__$1 = (function (){var statearr_23887 = state_23811;(statearr_23887[(26)] = inst_23702);
return statearr_23887;
})();if(cljs.core.truth_(inst_23703))
{var statearr_23888_23953 = state_23811__$1;(statearr_23888_23953[(1)] = (13));
} else
{var statearr_23889_23954 = state_23811__$1;(statearr_23889_23954[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (18)))
{var inst_23736 = (state_23811[(2)]);var state_23811__$1 = state_23811;var statearr_23890_23955 = state_23811__$1;(statearr_23890_23955[(2)] = inst_23736);
(statearr_23890_23955[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (42)))
{var state_23811__$1 = state_23811;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23811__$1,(45),dchan);
} else
{if((state_val_23812 === (37)))
{var inst_23779 = (state_23811[(23)]);var inst_23770 = (state_23811[(25)]);var inst_23683 = (state_23811[(12)]);var inst_23779__$1 = cljs.core.first(inst_23770);var inst_23780 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23779__$1,inst_23683,done);var state_23811__$1 = (function (){var statearr_23891 = state_23811;(statearr_23891[(23)] = inst_23779__$1);
return statearr_23891;
})();if(cljs.core.truth_(inst_23780))
{var statearr_23892_23956 = state_23811__$1;(statearr_23892_23956[(1)] = (39));
} else
{var statearr_23893_23957 = state_23811__$1;(statearr_23893_23957[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23812 === (8)))
{var inst_23695 = (state_23811[(14)]);var inst_23694 = (state_23811[(16)]);var inst_23697 = (inst_23695 < inst_23694);var inst_23698 = inst_23697;var state_23811__$1 = state_23811;if(cljs.core.truth_(inst_23698))
{var statearr_23894_23958 = state_23811__$1;(statearr_23894_23958[(1)] = (10));
} else
{var statearr_23895_23959 = state_23811__$1;(statearr_23895_23959[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___23905,cs,m,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___23905,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23899[(0)] = state_machine__6471__auto__);
(statearr_23899[(1)] = (1));
return statearr_23899;
});
var state_machine__6471__auto____1 = (function (state_23811){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23811);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23900){if((e23900 instanceof Object))
{var ex__6474__auto__ = e23900;var statearr_23901_23960 = state_23811;(statearr_23901_23960[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23811);
return cljs.core.constant$keyword$16;
} else
{throw e23900;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23961 = state_23811;
state_23811 = G__23961;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23811){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23905,cs,m,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_23902 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23905);
return statearr_23902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23905,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23966 = {};return obj23966;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23970 = x__4277__auto__;return goog.typeOf(G__23970);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23974 = x__4277__auto__;return goog.typeOf(G__23974);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23978 = x__4277__auto__;return goog.typeOf(G__23978);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23982 = x__4277__auto__;return goog.typeOf(G__23982);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23986 = x__4277__auto__;return goog.typeOf(G__23986);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23987){var map__23993 = p__23987;var map__23993__$1 = ((cljs.core.seq_QMARK_(map__23993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23993):map__23993);var opts = map__23993__$1;var statearr_23994_23998 = state;(statearr_23994_23998[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23993,map__23993__$1,opts){
return (function (val){var statearr_23995_23999 = state;(statearr_23995_23999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23993,map__23993__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23996_24000 = state;(statearr_23996_24000[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23997 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23997) : cljs.core.deref.call(null,G__23997));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23987 = null;if (arguments.length > 3) {
  p__23987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23987);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24001){
var state = cljs.core.first(arglist__24001);
arglist__24001 = cljs.core.next(arglist__24001);
var cont_block = cljs.core.first(arglist__24001);
arglist__24001 = cljs.core.next(arglist__24001);
var ports = cljs.core.first(arglist__24001);
var p__23987 = cljs.core.rest(arglist__24001);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23987);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__24135 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24135) : cljs.core.atom.call(null,G__24135));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__24136 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24136) : cljs.core.atom.call(null,G__24136));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__24137 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24137) : attr.call(null,G__24137));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__24138 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24138) : cljs.core.deref.call(null,G__24138));
})();var mode = (function (){var G__24139 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24139) : cljs.core.deref.call(null,G__24139));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24140 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24141){
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
this.meta24141 = meta24141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24140.cljs$lang$type = true;
cljs.core.async.t24140.cljs$lang$ctorStr = "cljs.core.async/t24140";
cljs.core.async.t24140.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24140");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__24143_24268 = self__.cs;var G__24144_24269 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24143_24268,G__24144_24269) : cljs.core.reset_BANG_.call(null,G__24143_24268,G__24144_24269));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24145 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24145) : self__.solo_modes.call(null,G__24145));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__24146_24270 = self__.solo_mode;var G__24147_24271 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24146_24270,G__24147_24271) : cljs.core.reset_BANG_.call(null,G__24146_24270,G__24147_24271));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24142){var self__ = this;
var _24142__$1 = this;return self__.meta24141;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24142,meta24141__$1){var self__ = this;
var _24142__$1 = this;return (new cljs.core.async.t24140(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24141__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24140 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24140(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24141){return (new cljs.core.async.t24140(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24141));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24140(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6485__auto___24272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24219){var state_val_24220 = (state_24219[(1)]);if((state_val_24220 === (7)))
{var inst_24161 = (state_24219[(7)]);var inst_24166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24161);var state_24219__$1 = state_24219;var statearr_24221_24273 = state_24219__$1;(statearr_24221_24273[(2)] = inst_24166);
(statearr_24221_24273[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (20)))
{var inst_24176 = (state_24219[(8)]);var state_24219__$1 = state_24219;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24219__$1,(23),out,inst_24176);
} else
{if((state_val_24220 === (1)))
{var inst_24151 = (state_24219[(9)]);var inst_24151__$1 = calc_state();var inst_24152 = cljs.core.seq_QMARK_(inst_24151__$1);var state_24219__$1 = (function (){var statearr_24222 = state_24219;(statearr_24222[(9)] = inst_24151__$1);
return statearr_24222;
})();if(inst_24152)
{var statearr_24223_24274 = state_24219__$1;(statearr_24223_24274[(1)] = (2));
} else
{var statearr_24224_24275 = state_24219__$1;(statearr_24224_24275[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (24)))
{var inst_24169 = (state_24219[(10)]);var inst_24161 = inst_24169;var state_24219__$1 = (function (){var statearr_24225 = state_24219;(statearr_24225[(7)] = inst_24161);
return statearr_24225;
})();var statearr_24226_24276 = state_24219__$1;(statearr_24226_24276[(2)] = null);
(statearr_24226_24276[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (4)))
{var inst_24151 = (state_24219[(9)]);var inst_24157 = (state_24219[(2)]);var inst_24158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24157,cljs.core.constant$keyword$30);var inst_24159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24157,cljs.core.constant$keyword$29);var inst_24160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24157,cljs.core.constant$keyword$28);var inst_24161 = inst_24151;var state_24219__$1 = (function (){var statearr_24227 = state_24219;(statearr_24227[(11)] = inst_24159);
(statearr_24227[(7)] = inst_24161);
(statearr_24227[(12)] = inst_24158);
(statearr_24227[(13)] = inst_24160);
return statearr_24227;
})();var statearr_24228_24277 = state_24219__$1;(statearr_24228_24277[(2)] = null);
(statearr_24228_24277[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (15)))
{var state_24219__$1 = state_24219;var statearr_24229_24278 = state_24219__$1;(statearr_24229_24278[(2)] = null);
(statearr_24229_24278[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (21)))
{var inst_24169 = (state_24219[(10)]);var inst_24161 = inst_24169;var state_24219__$1 = (function (){var statearr_24230 = state_24219;(statearr_24230[(7)] = inst_24161);
return statearr_24230;
})();var statearr_24231_24279 = state_24219__$1;(statearr_24231_24279[(2)] = null);
(statearr_24231_24279[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (13)))
{var inst_24215 = (state_24219[(2)]);var state_24219__$1 = state_24219;var statearr_24232_24280 = state_24219__$1;(statearr_24232_24280[(2)] = inst_24215);
(statearr_24232_24280[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (22)))
{var inst_24213 = (state_24219[(2)]);var state_24219__$1 = state_24219;var statearr_24233_24281 = state_24219__$1;(statearr_24233_24281[(2)] = inst_24213);
(statearr_24233_24281[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (6)))
{var inst_24217 = (state_24219[(2)]);var state_24219__$1 = state_24219;return cljs.core.async.impl.ioc_helpers.return_chan(state_24219__$1,inst_24217);
} else
{if((state_val_24220 === (25)))
{var state_24219__$1 = state_24219;var statearr_24234_24282 = state_24219__$1;(statearr_24234_24282[(2)] = null);
(statearr_24234_24282[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (17)))
{var inst_24192 = (state_24219[(14)]);var state_24219__$1 = state_24219;var statearr_24235_24283 = state_24219__$1;(statearr_24235_24283[(2)] = inst_24192);
(statearr_24235_24283[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (3)))
{var inst_24151 = (state_24219[(9)]);var state_24219__$1 = state_24219;var statearr_24236_24284 = state_24219__$1;(statearr_24236_24284[(2)] = inst_24151);
(statearr_24236_24284[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (12)))
{var inst_24177 = (state_24219[(15)]);var inst_24192 = (state_24219[(14)]);var inst_24172 = (state_24219[(16)]);var inst_24192__$1 = (function (){var G__24237 = inst_24177;return (inst_24172.cljs$core$IFn$_invoke$arity$1 ? inst_24172.cljs$core$IFn$_invoke$arity$1(G__24237) : inst_24172.call(null,G__24237));
})();var state_24219__$1 = (function (){var statearr_24238 = state_24219;(statearr_24238[(14)] = inst_24192__$1);
return statearr_24238;
})();if(cljs.core.truth_(inst_24192__$1))
{var statearr_24239_24285 = state_24219__$1;(statearr_24239_24285[(1)] = (17));
} else
{var statearr_24240_24286 = state_24219__$1;(statearr_24240_24286[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (2)))
{var inst_24151 = (state_24219[(9)]);var inst_24154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24151);var state_24219__$1 = state_24219;var statearr_24241_24287 = state_24219__$1;(statearr_24241_24287[(2)] = inst_24154);
(statearr_24241_24287[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (23)))
{var inst_24204 = (state_24219[(2)]);var state_24219__$1 = state_24219;if(cljs.core.truth_(inst_24204))
{var statearr_24242_24288 = state_24219__$1;(statearr_24242_24288[(1)] = (24));
} else
{var statearr_24243_24289 = state_24219__$1;(statearr_24243_24289[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (19)))
{var inst_24201 = (state_24219[(2)]);var state_24219__$1 = state_24219;if(cljs.core.truth_(inst_24201))
{var statearr_24244_24290 = state_24219__$1;(statearr_24244_24290[(1)] = (20));
} else
{var statearr_24245_24291 = state_24219__$1;(statearr_24245_24291[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (11)))
{var inst_24176 = (state_24219[(8)]);var inst_24182 = (inst_24176 == null);var state_24219__$1 = state_24219;if(cljs.core.truth_(inst_24182))
{var statearr_24246_24292 = state_24219__$1;(statearr_24246_24292[(1)] = (14));
} else
{var statearr_24247_24293 = state_24219__$1;(statearr_24247_24293[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (9)))
{var inst_24169 = (state_24219[(10)]);var inst_24169__$1 = (state_24219[(2)]);var inst_24170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24169__$1,cljs.core.constant$keyword$30);var inst_24171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24169__$1,cljs.core.constant$keyword$29);var inst_24172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24169__$1,cljs.core.constant$keyword$28);var state_24219__$1 = (function (){var statearr_24248 = state_24219;(statearr_24248[(17)] = inst_24171);
(statearr_24248[(10)] = inst_24169__$1);
(statearr_24248[(16)] = inst_24172);
return statearr_24248;
})();return cljs.core.async.ioc_alts_BANG_(state_24219__$1,(10),inst_24170);
} else
{if((state_val_24220 === (5)))
{var inst_24161 = (state_24219[(7)]);var inst_24164 = cljs.core.seq_QMARK_(inst_24161);var state_24219__$1 = state_24219;if(inst_24164)
{var statearr_24249_24294 = state_24219__$1;(statearr_24249_24294[(1)] = (7));
} else
{var statearr_24250_24295 = state_24219__$1;(statearr_24250_24295[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (14)))
{var inst_24177 = (state_24219[(15)]);var inst_24184 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24177);var state_24219__$1 = state_24219;var statearr_24251_24296 = state_24219__$1;(statearr_24251_24296[(2)] = inst_24184);
(statearr_24251_24296[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (26)))
{var inst_24209 = (state_24219[(2)]);var state_24219__$1 = state_24219;var statearr_24252_24297 = state_24219__$1;(statearr_24252_24297[(2)] = inst_24209);
(statearr_24252_24297[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (16)))
{var inst_24187 = (state_24219[(2)]);var inst_24188 = calc_state();var inst_24161 = inst_24188;var state_24219__$1 = (function (){var statearr_24253 = state_24219;(statearr_24253[(7)] = inst_24161);
(statearr_24253[(18)] = inst_24187);
return statearr_24253;
})();var statearr_24254_24298 = state_24219__$1;(statearr_24254_24298[(2)] = null);
(statearr_24254_24298[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (10)))
{var inst_24177 = (state_24219[(15)]);var inst_24176 = (state_24219[(8)]);var inst_24175 = (state_24219[(2)]);var inst_24176__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24175,(0),null);var inst_24177__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24175,(1),null);var inst_24178 = (inst_24176__$1 == null);var inst_24179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24177__$1,change);var inst_24180 = (inst_24178) || (inst_24179);var state_24219__$1 = (function (){var statearr_24255 = state_24219;(statearr_24255[(15)] = inst_24177__$1);
(statearr_24255[(8)] = inst_24176__$1);
return statearr_24255;
})();if(cljs.core.truth_(inst_24180))
{var statearr_24256_24299 = state_24219__$1;(statearr_24256_24299[(1)] = (11));
} else
{var statearr_24257_24300 = state_24219__$1;(statearr_24257_24300[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (18)))
{var inst_24177 = (state_24219[(15)]);var inst_24171 = (state_24219[(17)]);var inst_24172 = (state_24219[(16)]);var inst_24196 = cljs.core.empty_QMARK_(inst_24172);var inst_24197 = (function (){var G__24258 = inst_24177;return (inst_24171.cljs$core$IFn$_invoke$arity$1 ? inst_24171.cljs$core$IFn$_invoke$arity$1(G__24258) : inst_24171.call(null,G__24258));
})();var inst_24198 = cljs.core.not(inst_24197);var inst_24199 = (inst_24196) && (inst_24198);var state_24219__$1 = state_24219;var statearr_24259_24301 = state_24219__$1;(statearr_24259_24301[(2)] = inst_24199);
(statearr_24259_24301[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24220 === (8)))
{var inst_24161 = (state_24219[(7)]);var state_24219__$1 = state_24219;var statearr_24260_24302 = state_24219__$1;(statearr_24260_24302[(2)] = inst_24161);
(statearr_24260_24302[(1)] = (9));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6470__auto__,c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24264[(0)] = state_machine__6471__auto__);
(statearr_24264[(1)] = (1));
return statearr_24264;
});
var state_machine__6471__auto____1 = (function (state_24219){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24219);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24265){if((e24265 instanceof Object))
{var ex__6474__auto__ = e24265;var statearr_24266_24303 = state_24219;(statearr_24266_24303[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24219);
return cljs.core.constant$keyword$16;
} else
{throw e24265;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24304 = state_24219;
state_24219 = G__24304;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24219){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6487__auto__ = (function (){var statearr_24267 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24272);
return statearr_24267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24272,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24306 = {};return obj24306;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24310 = x__4277__auto__;return goog.typeOf(G__24310);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24314 = x__4277__auto__;return goog.typeOf(G__24314);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24320 = x__4277__auto__;return goog.typeOf(G__24320);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24322 = x__4277__auto__;return goog.typeOf(G__24322);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__24461 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24461) : cljs.core.atom.call(null,G__24461));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24463 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24463) : cljs.core.deref.call(null,G__24463));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__24323_SHARP_){if(cljs.core.truth_((function (){var G__24464 = topic;return (p1__24323_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24323_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24464) : p1__24323_SHARP_.call(null,G__24464));
})()))
{return p1__24323_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24323_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24465 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24465) : buf_fn.call(null,G__24465));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24466 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24467){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24467 = meta24467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24466.cljs$lang$type = true;
cljs.core.async.t24466.cljs$lang$ctorStr = "cljs.core.async/t24466";
cljs.core.async.t24466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24466");
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__24469 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24469) : self__.ensure_mult.call(null,G__24469));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24470 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24470) : cljs.core.deref.call(null,G__24470));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__24471 = self__.mults;var G__24472 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24471,G__24472) : cljs.core.reset_BANG_.call(null,G__24471,G__24472));
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24468){var self__ = this;
var _24468__$1 = this;return self__.meta24467;
});})(mults,ensure_mult))
;
cljs.core.async.t24466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24468,meta24467__$1){var self__ = this;
var _24468__$1 = this;return (new cljs.core.async.t24466(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24467__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24466 = ((function (mults,ensure_mult){
return (function __GT_t24466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24467){return (new cljs.core.async.t24466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24467));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24466(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6485__auto___24595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24595,mults,ensure_mult,p){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24595,mults,ensure_mult,p){
return (function (state_24544){var state_val_24545 = (state_24544[(1)]);if((state_val_24545 === (7)))
{var inst_24540 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24546_24596 = state_24544__$1;(statearr_24546_24596[(2)] = inst_24540);
(statearr_24546_24596[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (20)))
{var state_24544__$1 = state_24544;var statearr_24547_24597 = state_24544__$1;(statearr_24547_24597[(2)] = null);
(statearr_24547_24597[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (1)))
{var state_24544__$1 = state_24544;var statearr_24548_24598 = state_24544__$1;(statearr_24548_24598[(2)] = null);
(statearr_24548_24598[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (24)))
{var inst_24523 = (state_24544[(7)]);var inst_24532 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24523);var state_24544__$1 = state_24544;var statearr_24549_24599 = state_24544__$1;(statearr_24549_24599[(2)] = inst_24532);
(statearr_24549_24599[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (4)))
{var inst_24475 = (state_24544[(8)]);var inst_24475__$1 = (state_24544[(2)]);var inst_24476 = (inst_24475__$1 == null);var state_24544__$1 = (function (){var statearr_24550 = state_24544;(statearr_24550[(8)] = inst_24475__$1);
return statearr_24550;
})();if(cljs.core.truth_(inst_24476))
{var statearr_24551_24600 = state_24544__$1;(statearr_24551_24600[(1)] = (5));
} else
{var statearr_24552_24601 = state_24544__$1;(statearr_24552_24601[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (15)))
{var inst_24517 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24553_24602 = state_24544__$1;(statearr_24553_24602[(2)] = inst_24517);
(statearr_24553_24602[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (21)))
{var inst_24537 = (state_24544[(2)]);var state_24544__$1 = (function (){var statearr_24554 = state_24544;(statearr_24554[(9)] = inst_24537);
return statearr_24554;
})();var statearr_24555_24603 = state_24544__$1;(statearr_24555_24603[(2)] = null);
(statearr_24555_24603[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (13)))
{var inst_24499 = (state_24544[(10)]);var inst_24501 = cljs.core.chunked_seq_QMARK_(inst_24499);var state_24544__$1 = state_24544;if(inst_24501)
{var statearr_24556_24604 = state_24544__$1;(statearr_24556_24604[(1)] = (16));
} else
{var statearr_24557_24605 = state_24544__$1;(statearr_24557_24605[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (22)))
{var inst_24529 = (state_24544[(2)]);var state_24544__$1 = state_24544;if(cljs.core.truth_(inst_24529))
{var statearr_24558_24606 = state_24544__$1;(statearr_24558_24606[(1)] = (23));
} else
{var statearr_24559_24607 = state_24544__$1;(statearr_24559_24607[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (6)))
{var inst_24475 = (state_24544[(8)]);var inst_24523 = (state_24544[(7)]);var inst_24525 = (state_24544[(11)]);var inst_24523__$1 = (function (){var G__24560 = inst_24475;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24560) : topic_fn.call(null,G__24560));
})();var inst_24524 = (function (){var G__24561 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24561) : cljs.core.deref.call(null,G__24561));
})();var inst_24525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24524,inst_24523__$1);var state_24544__$1 = (function (){var statearr_24562 = state_24544;(statearr_24562[(7)] = inst_24523__$1);
(statearr_24562[(11)] = inst_24525__$1);
return statearr_24562;
})();if(cljs.core.truth_(inst_24525__$1))
{var statearr_24563_24608 = state_24544__$1;(statearr_24563_24608[(1)] = (19));
} else
{var statearr_24564_24609 = state_24544__$1;(statearr_24564_24609[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (25)))
{var inst_24534 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24565_24610 = state_24544__$1;(statearr_24565_24610[(2)] = inst_24534);
(statearr_24565_24610[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (17)))
{var inst_24499 = (state_24544[(10)]);var inst_24508 = cljs.core.first(inst_24499);var inst_24509 = cljs.core.async.muxch_STAR_(inst_24508);var inst_24510 = cljs.core.async.close_BANG_(inst_24509);var inst_24511 = cljs.core.next(inst_24499);var inst_24485 = inst_24511;var inst_24486 = null;var inst_24487 = (0);var inst_24488 = (0);var state_24544__$1 = (function (){var statearr_24566 = state_24544;(statearr_24566[(12)] = inst_24486);
(statearr_24566[(13)] = inst_24510);
(statearr_24566[(14)] = inst_24487);
(statearr_24566[(15)] = inst_24485);
(statearr_24566[(16)] = inst_24488);
return statearr_24566;
})();var statearr_24567_24611 = state_24544__$1;(statearr_24567_24611[(2)] = null);
(statearr_24567_24611[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (3)))
{var inst_24542 = (state_24544[(2)]);var state_24544__$1 = state_24544;return cljs.core.async.impl.ioc_helpers.return_chan(state_24544__$1,inst_24542);
} else
{if((state_val_24545 === (12)))
{var inst_24519 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24568_24612 = state_24544__$1;(statearr_24568_24612[(2)] = inst_24519);
(statearr_24568_24612[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (2)))
{var state_24544__$1 = state_24544;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24544__$1,(4),ch);
} else
{if((state_val_24545 === (23)))
{var state_24544__$1 = state_24544;var statearr_24569_24613 = state_24544__$1;(statearr_24569_24613[(2)] = null);
(statearr_24569_24613[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (19)))
{var inst_24475 = (state_24544[(8)]);var inst_24525 = (state_24544[(11)]);var inst_24527 = cljs.core.async.muxch_STAR_(inst_24525);var state_24544__$1 = state_24544;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24544__$1,(22),inst_24527,inst_24475);
} else
{if((state_val_24545 === (11)))
{var inst_24485 = (state_24544[(15)]);var inst_24499 = (state_24544[(10)]);var inst_24499__$1 = cljs.core.seq(inst_24485);var state_24544__$1 = (function (){var statearr_24570 = state_24544;(statearr_24570[(10)] = inst_24499__$1);
return statearr_24570;
})();if(inst_24499__$1)
{var statearr_24571_24614 = state_24544__$1;(statearr_24571_24614[(1)] = (13));
} else
{var statearr_24572_24615 = state_24544__$1;(statearr_24572_24615[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (9)))
{var inst_24521 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24573_24616 = state_24544__$1;(statearr_24573_24616[(2)] = inst_24521);
(statearr_24573_24616[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (5)))
{var inst_24482 = (function (){var G__24574 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24574) : cljs.core.deref.call(null,G__24574));
})();var inst_24483 = cljs.core.vals(inst_24482);var inst_24484 = cljs.core.seq(inst_24483);var inst_24485 = inst_24484;var inst_24486 = null;var inst_24487 = (0);var inst_24488 = (0);var state_24544__$1 = (function (){var statearr_24575 = state_24544;(statearr_24575[(12)] = inst_24486);
(statearr_24575[(14)] = inst_24487);
(statearr_24575[(15)] = inst_24485);
(statearr_24575[(16)] = inst_24488);
return statearr_24575;
})();var statearr_24576_24617 = state_24544__$1;(statearr_24576_24617[(2)] = null);
(statearr_24576_24617[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (14)))
{var state_24544__$1 = state_24544;var statearr_24580_24618 = state_24544__$1;(statearr_24580_24618[(2)] = null);
(statearr_24580_24618[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (16)))
{var inst_24499 = (state_24544[(10)]);var inst_24503 = cljs.core.chunk_first(inst_24499);var inst_24504 = cljs.core.chunk_rest(inst_24499);var inst_24505 = cljs.core.count(inst_24503);var inst_24485 = inst_24504;var inst_24486 = inst_24503;var inst_24487 = inst_24505;var inst_24488 = (0);var state_24544__$1 = (function (){var statearr_24581 = state_24544;(statearr_24581[(12)] = inst_24486);
(statearr_24581[(14)] = inst_24487);
(statearr_24581[(15)] = inst_24485);
(statearr_24581[(16)] = inst_24488);
return statearr_24581;
})();var statearr_24582_24619 = state_24544__$1;(statearr_24582_24619[(2)] = null);
(statearr_24582_24619[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (10)))
{var inst_24486 = (state_24544[(12)]);var inst_24487 = (state_24544[(14)]);var inst_24485 = (state_24544[(15)]);var inst_24488 = (state_24544[(16)]);var inst_24493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24486,inst_24488);var inst_24494 = cljs.core.async.muxch_STAR_(inst_24493);var inst_24495 = cljs.core.async.close_BANG_(inst_24494);var inst_24496 = (inst_24488 + (1));var tmp24577 = inst_24486;var tmp24578 = inst_24487;var tmp24579 = inst_24485;var inst_24485__$1 = tmp24579;var inst_24486__$1 = tmp24577;var inst_24487__$1 = tmp24578;var inst_24488__$1 = inst_24496;var state_24544__$1 = (function (){var statearr_24583 = state_24544;(statearr_24583[(17)] = inst_24495);
(statearr_24583[(12)] = inst_24486__$1);
(statearr_24583[(14)] = inst_24487__$1);
(statearr_24583[(15)] = inst_24485__$1);
(statearr_24583[(16)] = inst_24488__$1);
return statearr_24583;
})();var statearr_24584_24620 = state_24544__$1;(statearr_24584_24620[(2)] = null);
(statearr_24584_24620[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (18)))
{var inst_24514 = (state_24544[(2)]);var state_24544__$1 = state_24544;var statearr_24585_24621 = state_24544__$1;(statearr_24585_24621[(2)] = inst_24514);
(statearr_24585_24621[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24545 === (8)))
{var inst_24487 = (state_24544[(14)]);var inst_24488 = (state_24544[(16)]);var inst_24490 = (inst_24488 < inst_24487);var inst_24491 = inst_24490;var state_24544__$1 = state_24544;if(cljs.core.truth_(inst_24491))
{var statearr_24586_24622 = state_24544__$1;(statearr_24586_24622[(1)] = (10));
} else
{var statearr_24587_24623 = state_24544__$1;(statearr_24587_24623[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___24595,mults,ensure_mult,p))
;return ((function (switch__6470__auto__,c__6485__auto___24595,mults,ensure_mult,p){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24591[(0)] = state_machine__6471__auto__);
(statearr_24591[(1)] = (1));
return statearr_24591;
});
var state_machine__6471__auto____1 = (function (state_24544){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24544);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24592){if((e24592 instanceof Object))
{var ex__6474__auto__ = e24592;var statearr_24593_24624 = state_24544;(statearr_24593_24624[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24544);
return cljs.core.constant$keyword$16;
} else
{throw e24592;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24625 = state_24544;
state_24544 = G__24625;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24544){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24595,mults,ensure_mult,p))
})();var state__6487__auto__ = (function (){var statearr_24594 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24595);
return statearr_24594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24595,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__24706 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24706) : cljs.core.atom.call(null,G__24706));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6485__auto___24779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24745){var state_val_24746 = (state_24745[(1)]);if((state_val_24746 === (7)))
{var state_24745__$1 = state_24745;var statearr_24747_24780 = state_24745__$1;(statearr_24747_24780[(2)] = null);
(statearr_24747_24780[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (1)))
{var state_24745__$1 = state_24745;var statearr_24748_24781 = state_24745__$1;(statearr_24748_24781[(2)] = null);
(statearr_24748_24781[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (4)))
{var inst_24709 = (state_24745[(7)]);var inst_24711 = (inst_24709 < cnt);var state_24745__$1 = state_24745;if(cljs.core.truth_(inst_24711))
{var statearr_24749_24782 = state_24745__$1;(statearr_24749_24782[(1)] = (6));
} else
{var statearr_24750_24783 = state_24745__$1;(statearr_24750_24783[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (15)))
{var inst_24741 = (state_24745[(2)]);var state_24745__$1 = state_24745;var statearr_24751_24784 = state_24745__$1;(statearr_24751_24784[(2)] = inst_24741);
(statearr_24751_24784[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (13)))
{var inst_24734 = cljs.core.async.close_BANG_(out);var state_24745__$1 = state_24745;var statearr_24752_24785 = state_24745__$1;(statearr_24752_24785[(2)] = inst_24734);
(statearr_24752_24785[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (6)))
{var state_24745__$1 = state_24745;var statearr_24753_24786 = state_24745__$1;(statearr_24753_24786[(2)] = null);
(statearr_24753_24786[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (3)))
{var inst_24743 = (state_24745[(2)]);var state_24745__$1 = state_24745;return cljs.core.async.impl.ioc_helpers.return_chan(state_24745__$1,inst_24743);
} else
{if((state_val_24746 === (12)))
{var inst_24731 = (state_24745[(8)]);var inst_24731__$1 = (state_24745[(2)]);var inst_24732 = cljs.core.some(cljs.core.nil_QMARK_,inst_24731__$1);var state_24745__$1 = (function (){var statearr_24754 = state_24745;(statearr_24754[(8)] = inst_24731__$1);
return statearr_24754;
})();if(cljs.core.truth_(inst_24732))
{var statearr_24755_24787 = state_24745__$1;(statearr_24755_24787[(1)] = (13));
} else
{var statearr_24756_24788 = state_24745__$1;(statearr_24756_24788[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (2)))
{var inst_24708 = (function (){var G__24757 = dctr;var G__24758 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24757,G__24758) : cljs.core.reset_BANG_.call(null,G__24757,G__24758));
})();var inst_24709 = (0);var state_24745__$1 = (function (){var statearr_24759 = state_24745;(statearr_24759[(9)] = inst_24708);
(statearr_24759[(7)] = inst_24709);
return statearr_24759;
})();var statearr_24760_24789 = state_24745__$1;(statearr_24760_24789[(2)] = null);
(statearr_24760_24789[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (11)))
{var inst_24709 = (state_24745[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24745,(10),Object,null,(9));var inst_24718 = (function (){var G__24761 = inst_24709;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24761) : chs__$1.call(null,G__24761));
})();var inst_24719 = (function (){var G__24762 = inst_24709;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24762) : done.call(null,G__24762));
})();var inst_24720 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24718,inst_24719);var state_24745__$1 = state_24745;var statearr_24763_24790 = state_24745__$1;(statearr_24763_24790[(2)] = inst_24720);
cljs.core.async.impl.ioc_helpers.process_exception(state_24745__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (9)))
{var inst_24709 = (state_24745[(7)]);var inst_24722 = (state_24745[(2)]);var inst_24723 = (inst_24709 + (1));var inst_24709__$1 = inst_24723;var state_24745__$1 = (function (){var statearr_24764 = state_24745;(statearr_24764[(10)] = inst_24722);
(statearr_24764[(7)] = inst_24709__$1);
return statearr_24764;
})();var statearr_24765_24791 = state_24745__$1;(statearr_24765_24791[(2)] = null);
(statearr_24765_24791[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (5)))
{var inst_24729 = (state_24745[(2)]);var state_24745__$1 = (function (){var statearr_24766 = state_24745;(statearr_24766[(11)] = inst_24729);
return statearr_24766;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24745__$1,(12),dchan);
} else
{if((state_val_24746 === (14)))
{var inst_24731 = (state_24745[(8)]);var inst_24736 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24731);var state_24745__$1 = state_24745;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24745__$1,(16),out,inst_24736);
} else
{if((state_val_24746 === (16)))
{var inst_24738 = (state_24745[(2)]);var state_24745__$1 = (function (){var statearr_24767 = state_24745;(statearr_24767[(12)] = inst_24738);
return statearr_24767;
})();var statearr_24768_24792 = state_24745__$1;(statearr_24768_24792[(2)] = null);
(statearr_24768_24792[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (10)))
{var inst_24713 = (state_24745[(2)]);var inst_24714 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24745__$1 = (function (){var statearr_24769 = state_24745;(statearr_24769[(13)] = inst_24713);
return statearr_24769;
})();var statearr_24770_24793 = state_24745__$1;(statearr_24770_24793[(2)] = inst_24714);
cljs.core.async.impl.ioc_helpers.process_exception(state_24745__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24746 === (8)))
{var inst_24727 = (state_24745[(2)]);var state_24745__$1 = state_24745;var statearr_24771_24794 = state_24745__$1;(statearr_24771_24794[(2)] = inst_24727);
(statearr_24771_24794[(1)] = (5));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24775[(0)] = state_machine__6471__auto__);
(statearr_24775[(1)] = (1));
return statearr_24775;
});
var state_machine__6471__auto____1 = (function (state_24745){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24745);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24776){if((e24776 instanceof Object))
{var ex__6474__auto__ = e24776;var statearr_24777_24795 = state_24745;(statearr_24777_24795[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24745);
return cljs.core.constant$keyword$16;
} else
{throw e24776;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24796 = state_24745;
state_24745 = G__24796;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24745){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_24778 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24779);
return statearr_24778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24779,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___24906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24906,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24906,out){
return (function (state_24882){var state_val_24883 = (state_24882[(1)]);if((state_val_24883 === (7)))
{var inst_24861 = (state_24882[(7)]);var inst_24862 = (state_24882[(8)]);var inst_24861__$1 = (state_24882[(2)]);var inst_24862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24861__$1,(0),null);var inst_24863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24861__$1,(1),null);var inst_24864 = (inst_24862__$1 == null);var state_24882__$1 = (function (){var statearr_24884 = state_24882;(statearr_24884[(9)] = inst_24863);
(statearr_24884[(7)] = inst_24861__$1);
(statearr_24884[(8)] = inst_24862__$1);
return statearr_24884;
})();if(cljs.core.truth_(inst_24864))
{var statearr_24885_24907 = state_24882__$1;(statearr_24885_24907[(1)] = (8));
} else
{var statearr_24886_24908 = state_24882__$1;(statearr_24886_24908[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (1)))
{var inst_24853 = cljs.core.vec(chs);var inst_24854 = inst_24853;var state_24882__$1 = (function (){var statearr_24887 = state_24882;(statearr_24887[(10)] = inst_24854);
return statearr_24887;
})();var statearr_24888_24909 = state_24882__$1;(statearr_24888_24909[(2)] = null);
(statearr_24888_24909[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (4)))
{var inst_24854 = (state_24882[(10)]);var state_24882__$1 = state_24882;return cljs.core.async.ioc_alts_BANG_(state_24882__$1,(7),inst_24854);
} else
{if((state_val_24883 === (6)))
{var inst_24878 = (state_24882[(2)]);var state_24882__$1 = state_24882;var statearr_24889_24910 = state_24882__$1;(statearr_24889_24910[(2)] = inst_24878);
(statearr_24889_24910[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (3)))
{var inst_24880 = (state_24882[(2)]);var state_24882__$1 = state_24882;return cljs.core.async.impl.ioc_helpers.return_chan(state_24882__$1,inst_24880);
} else
{if((state_val_24883 === (2)))
{var inst_24854 = (state_24882[(10)]);var inst_24856 = cljs.core.count(inst_24854);var inst_24857 = (inst_24856 > (0));var state_24882__$1 = state_24882;if(cljs.core.truth_(inst_24857))
{var statearr_24891_24911 = state_24882__$1;(statearr_24891_24911[(1)] = (4));
} else
{var statearr_24892_24912 = state_24882__$1;(statearr_24892_24912[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (11)))
{var inst_24854 = (state_24882[(10)]);var inst_24871 = (state_24882[(2)]);var tmp24890 = inst_24854;var inst_24854__$1 = tmp24890;var state_24882__$1 = (function (){var statearr_24893 = state_24882;(statearr_24893[(10)] = inst_24854__$1);
(statearr_24893[(11)] = inst_24871);
return statearr_24893;
})();var statearr_24894_24913 = state_24882__$1;(statearr_24894_24913[(2)] = null);
(statearr_24894_24913[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (9)))
{var inst_24862 = (state_24882[(8)]);var state_24882__$1 = state_24882;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24882__$1,(11),out,inst_24862);
} else
{if((state_val_24883 === (5)))
{var inst_24876 = cljs.core.async.close_BANG_(out);var state_24882__$1 = state_24882;var statearr_24895_24914 = state_24882__$1;(statearr_24895_24914[(2)] = inst_24876);
(statearr_24895_24914[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (10)))
{var inst_24874 = (state_24882[(2)]);var state_24882__$1 = state_24882;var statearr_24896_24915 = state_24882__$1;(statearr_24896_24915[(2)] = inst_24874);
(statearr_24896_24915[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24883 === (8)))
{var inst_24854 = (state_24882[(10)]);var inst_24863 = (state_24882[(9)]);var inst_24861 = (state_24882[(7)]);var inst_24862 = (state_24882[(8)]);var inst_24866 = (function (){var c = inst_24863;var v = inst_24862;var vec__24859 = inst_24861;var cs = inst_24854;return ((function (c,v,vec__24859,cs,inst_24854,inst_24863,inst_24861,inst_24862,state_val_24883,c__6485__auto___24906,out){
return (function (p1__24797_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24797_SHARP_);
});
;})(c,v,vec__24859,cs,inst_24854,inst_24863,inst_24861,inst_24862,state_val_24883,c__6485__auto___24906,out))
})();var inst_24867 = cljs.core.filterv(inst_24866,inst_24854);var inst_24854__$1 = inst_24867;var state_24882__$1 = (function (){var statearr_24897 = state_24882;(statearr_24897[(10)] = inst_24854__$1);
return statearr_24897;
})();var statearr_24898_24916 = state_24882__$1;(statearr_24898_24916[(2)] = null);
(statearr_24898_24916[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___24906,out))
;return ((function (switch__6470__auto__,c__6485__auto___24906,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24902 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24902[(0)] = state_machine__6471__auto__);
(statearr_24902[(1)] = (1));
return statearr_24902;
});
var state_machine__6471__auto____1 = (function (state_24882){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24882);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24903){if((e24903 instanceof Object))
{var ex__6474__auto__ = e24903;var statearr_24904_24917 = state_24882;(statearr_24904_24917[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24882);
return cljs.core.constant$keyword$16;
} else
{throw e24903;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24918 = state_24882;
state_24882 = G__24918;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24882){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24906,out))
})();var state__6487__auto__ = (function (){var statearr_24905 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24906);
return statearr_24905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24906,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25014,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25014,out){
return (function (state_24991){var state_val_24992 = (state_24991[(1)]);if((state_val_24992 === (7)))
{var inst_24973 = (state_24991[(7)]);var inst_24973__$1 = (state_24991[(2)]);var inst_24974 = (inst_24973__$1 == null);var inst_24975 = cljs.core.not(inst_24974);var state_24991__$1 = (function (){var statearr_24993 = state_24991;(statearr_24993[(7)] = inst_24973__$1);
return statearr_24993;
})();if(inst_24975)
{var statearr_24994_25015 = state_24991__$1;(statearr_24994_25015[(1)] = (8));
} else
{var statearr_24995_25016 = state_24991__$1;(statearr_24995_25016[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (1)))
{var inst_24968 = (0);var state_24991__$1 = (function (){var statearr_24996 = state_24991;(statearr_24996[(8)] = inst_24968);
return statearr_24996;
})();var statearr_24997_25017 = state_24991__$1;(statearr_24997_25017[(2)] = null);
(statearr_24997_25017[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (4)))
{var state_24991__$1 = state_24991;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24991__$1,(7),ch);
} else
{if((state_val_24992 === (6)))
{var inst_24986 = (state_24991[(2)]);var state_24991__$1 = state_24991;var statearr_24998_25018 = state_24991__$1;(statearr_24998_25018[(2)] = inst_24986);
(statearr_24998_25018[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (3)))
{var inst_24988 = (state_24991[(2)]);var inst_24989 = cljs.core.async.close_BANG_(out);var state_24991__$1 = (function (){var statearr_24999 = state_24991;(statearr_24999[(9)] = inst_24988);
return statearr_24999;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24991__$1,inst_24989);
} else
{if((state_val_24992 === (2)))
{var inst_24968 = (state_24991[(8)]);var inst_24970 = (inst_24968 < n);var state_24991__$1 = state_24991;if(cljs.core.truth_(inst_24970))
{var statearr_25000_25019 = state_24991__$1;(statearr_25000_25019[(1)] = (4));
} else
{var statearr_25001_25020 = state_24991__$1;(statearr_25001_25020[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (11)))
{var inst_24968 = (state_24991[(8)]);var inst_24978 = (state_24991[(2)]);var inst_24979 = (inst_24968 + (1));var inst_24968__$1 = inst_24979;var state_24991__$1 = (function (){var statearr_25002 = state_24991;(statearr_25002[(8)] = inst_24968__$1);
(statearr_25002[(10)] = inst_24978);
return statearr_25002;
})();var statearr_25003_25021 = state_24991__$1;(statearr_25003_25021[(2)] = null);
(statearr_25003_25021[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (9)))
{var state_24991__$1 = state_24991;var statearr_25004_25022 = state_24991__$1;(statearr_25004_25022[(2)] = null);
(statearr_25004_25022[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (5)))
{var state_24991__$1 = state_24991;var statearr_25005_25023 = state_24991__$1;(statearr_25005_25023[(2)] = null);
(statearr_25005_25023[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (10)))
{var inst_24983 = (state_24991[(2)]);var state_24991__$1 = state_24991;var statearr_25006_25024 = state_24991__$1;(statearr_25006_25024[(2)] = inst_24983);
(statearr_25006_25024[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24992 === (8)))
{var inst_24973 = (state_24991[(7)]);var state_24991__$1 = state_24991;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24991__$1,(11),out,inst_24973);
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
});})(c__6485__auto___25014,out))
;return ((function (switch__6470__auto__,c__6485__auto___25014,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25010 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25010[(0)] = state_machine__6471__auto__);
(statearr_25010[(1)] = (1));
return statearr_25010;
});
var state_machine__6471__auto____1 = (function (state_24991){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24991);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25011){if((e25011 instanceof Object))
{var ex__6474__auto__ = e25011;var statearr_25012_25025 = state_24991;(statearr_25012_25025[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24991);
return cljs.core.constant$keyword$16;
} else
{throw e25011;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25026 = state_24991;
state_24991 = G__25026;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24991){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25014,out))
})();var state__6487__auto__ = (function (){var statearr_25013 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25014);
return statearr_25013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25014,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25039 = (function (ch,f,map_LT_,meta25040){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25040 = meta25040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25039.cljs$lang$type = true;
cljs.core.async.t25039.cljs$lang$ctorStr = "cljs.core.async/t25039";
cljs.core.async.t25039.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25039");
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t25042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25042 = (function (fn1,_,meta25040,ch,f,map_LT_,meta25043){
this.fn1 = fn1;
this._ = _;
this.meta25040 = meta25040;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25043 = meta25043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25042.cljs$lang$type = true;
cljs.core.async.t25042.cljs$lang$ctorStr = "cljs.core.async/t25042";
cljs.core.async.t25042.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25042");
});})(___$1))
;
cljs.core.async.t25042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t25042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25027_SHARP_){var G__25045 = (((p1__25027_SHARP_ == null))?null:(function (){var G__25046 = p1__25027_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25046) : self__.f.call(null,G__25046));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25045) : f1.call(null,G__25045));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25044){var self__ = this;
var _25044__$1 = this;return self__.meta25043;
});})(___$1))
;
cljs.core.async.t25042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25044,meta25043__$1){var self__ = this;
var _25044__$1 = this;return (new cljs.core.async.t25042(self__.fn1,self__._,self__.meta25040,self__.ch,self__.f,self__.map_LT_,meta25043__$1));
});})(___$1))
;
cljs.core.async.__GT_t25042 = ((function (___$1){
return (function __GT_t25042(fn1__$1,___$2,meta25040__$1,ch__$2,f__$2,map_LT___$2,meta25043){return (new cljs.core.async.t25042(fn1__$1,___$2,meta25040__$1,ch__$2,f__$2,map_LT___$2,meta25043));
});})(___$1))
;
}
return (new cljs.core.async.t25042(fn1,___$1,self__.meta25040,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__25047 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25047) : cljs.core.deref.call(null,G__25047));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__25048 = (function (){var G__25049 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25049) : cljs.core.deref.call(null,G__25049));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25048) : self__.f.call(null,G__25048));
})());
} else
{return ret;
}
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t25039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25041){var self__ = this;
var _25041__$1 = this;return self__.meta25040;
});
cljs.core.async.t25039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25041,meta25040__$1){var self__ = this;
var _25041__$1 = this;return (new cljs.core.async.t25039(self__.ch,self__.f,self__.map_LT_,meta25040__$1));
});
cljs.core.async.__GT_t25039 = (function __GT_t25039(ch__$1,f__$1,map_LT___$1,meta25040){return (new cljs.core.async.t25039(ch__$1,f__$1,map_LT___$1,meta25040));
});
}
return (new cljs.core.async.t25039(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25054 = (function (ch,f,map_GT_,meta25055){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25055 = meta25055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25054.cljs$lang$type = true;
cljs.core.async.t25054.cljs$lang$ctorStr = "cljs.core.async/t25054";
cljs.core.async.t25054.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25054");
});
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25057 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25057) : self__.f.call(null,G__25057));
})(),fn1);
});
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t25054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25056){var self__ = this;
var _25056__$1 = this;return self__.meta25055;
});
cljs.core.async.t25054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25056,meta25055__$1){var self__ = this;
var _25056__$1 = this;return (new cljs.core.async.t25054(self__.ch,self__.f,self__.map_GT_,meta25055__$1));
});
cljs.core.async.__GT_t25054 = (function __GT_t25054(ch__$1,f__$1,map_GT___$1,meta25055){return (new cljs.core.async.t25054(ch__$1,f__$1,map_GT___$1,meta25055));
});
}
return (new cljs.core.async.t25054(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25062 = (function (ch,p,filter_GT_,meta25063){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25063 = meta25063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25062.cljs$lang$type = true;
cljs.core.async.t25062.cljs$lang$ctorStr = "cljs.core.async/t25062";
cljs.core.async.t25062.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25062");
});
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25065 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25065) : self__.p.call(null,G__25065));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t25062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t25062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25064){var self__ = this;
var _25064__$1 = this;return self__.meta25063;
});
cljs.core.async.t25062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25064,meta25063__$1){var self__ = this;
var _25064__$1 = this;return (new cljs.core.async.t25062(self__.ch,self__.p,self__.filter_GT_,meta25063__$1));
});
cljs.core.async.__GT_t25062 = (function __GT_t25062(ch__$1,p__$1,filter_GT___$1,meta25063){return (new cljs.core.async.t25062(ch__$1,p__$1,filter_GT___$1,meta25063));
});
}
return (new cljs.core.async.t25062(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25153,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25153,out){
return (function (state_25131){var state_val_25132 = (state_25131[(1)]);if((state_val_25132 === (7)))
{var inst_25127 = (state_25131[(2)]);var state_25131__$1 = state_25131;var statearr_25133_25154 = state_25131__$1;(statearr_25133_25154[(2)] = inst_25127);
(statearr_25133_25154[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (1)))
{var state_25131__$1 = state_25131;var statearr_25134_25155 = state_25131__$1;(statearr_25134_25155[(2)] = null);
(statearr_25134_25155[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (4)))
{var inst_25113 = (state_25131[(7)]);var inst_25113__$1 = (state_25131[(2)]);var inst_25114 = (inst_25113__$1 == null);var state_25131__$1 = (function (){var statearr_25135 = state_25131;(statearr_25135[(7)] = inst_25113__$1);
return statearr_25135;
})();if(cljs.core.truth_(inst_25114))
{var statearr_25136_25156 = state_25131__$1;(statearr_25136_25156[(1)] = (5));
} else
{var statearr_25137_25157 = state_25131__$1;(statearr_25137_25157[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (6)))
{var inst_25113 = (state_25131[(7)]);var inst_25118 = (function (){var G__25138 = inst_25113;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25138) : p.call(null,G__25138));
})();var state_25131__$1 = state_25131;if(cljs.core.truth_(inst_25118))
{var statearr_25139_25158 = state_25131__$1;(statearr_25139_25158[(1)] = (8));
} else
{var statearr_25140_25159 = state_25131__$1;(statearr_25140_25159[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (3)))
{var inst_25129 = (state_25131[(2)]);var state_25131__$1 = state_25131;return cljs.core.async.impl.ioc_helpers.return_chan(state_25131__$1,inst_25129);
} else
{if((state_val_25132 === (2)))
{var state_25131__$1 = state_25131;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25131__$1,(4),ch);
} else
{if((state_val_25132 === (11)))
{var inst_25121 = (state_25131[(2)]);var state_25131__$1 = state_25131;var statearr_25141_25160 = state_25131__$1;(statearr_25141_25160[(2)] = inst_25121);
(statearr_25141_25160[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (9)))
{var state_25131__$1 = state_25131;var statearr_25142_25161 = state_25131__$1;(statearr_25142_25161[(2)] = null);
(statearr_25142_25161[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (5)))
{var inst_25116 = cljs.core.async.close_BANG_(out);var state_25131__$1 = state_25131;var statearr_25143_25162 = state_25131__$1;(statearr_25143_25162[(2)] = inst_25116);
(statearr_25143_25162[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (10)))
{var inst_25124 = (state_25131[(2)]);var state_25131__$1 = (function (){var statearr_25144 = state_25131;(statearr_25144[(8)] = inst_25124);
return statearr_25144;
})();var statearr_25145_25163 = state_25131__$1;(statearr_25145_25163[(2)] = null);
(statearr_25145_25163[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25132 === (8)))
{var inst_25113 = (state_25131[(7)]);var state_25131__$1 = state_25131;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25131__$1,(11),out,inst_25113);
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
});})(c__6485__auto___25153,out))
;return ((function (switch__6470__auto__,c__6485__auto___25153,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25149 = [null,null,null,null,null,null,null,null,null];(statearr_25149[(0)] = state_machine__6471__auto__);
(statearr_25149[(1)] = (1));
return statearr_25149;
});
var state_machine__6471__auto____1 = (function (state_25131){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25131);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25150){if((e25150 instanceof Object))
{var ex__6474__auto__ = e25150;var statearr_25151_25164 = state_25131;(statearr_25151_25164[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25131);
return cljs.core.constant$keyword$16;
} else
{throw e25150;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25165 = state_25131;
state_25131 = G__25165;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25131){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25153,out))
})();var state__6487__auto__ = (function (){var statearr_25152 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25153);
return statearr_25152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25153,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_25335){var state_val_25336 = (state_25335[(1)]);if((state_val_25336 === (7)))
{var inst_25331 = (state_25335[(2)]);var state_25335__$1 = state_25335;var statearr_25337_25379 = state_25335__$1;(statearr_25337_25379[(2)] = inst_25331);
(statearr_25337_25379[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (20)))
{var inst_25301 = (state_25335[(7)]);var inst_25312 = (state_25335[(2)]);var inst_25313 = cljs.core.next(inst_25301);var inst_25287 = inst_25313;var inst_25288 = null;var inst_25289 = (0);var inst_25290 = (0);var state_25335__$1 = (function (){var statearr_25338 = state_25335;(statearr_25338[(8)] = inst_25290);
(statearr_25338[(9)] = inst_25288);
(statearr_25338[(10)] = inst_25289);
(statearr_25338[(11)] = inst_25312);
(statearr_25338[(12)] = inst_25287);
return statearr_25338;
})();var statearr_25339_25380 = state_25335__$1;(statearr_25339_25380[(2)] = null);
(statearr_25339_25380[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (1)))
{var state_25335__$1 = state_25335;var statearr_25340_25381 = state_25335__$1;(statearr_25340_25381[(2)] = null);
(statearr_25340_25381[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (4)))
{var inst_25276 = (state_25335[(13)]);var inst_25276__$1 = (state_25335[(2)]);var inst_25277 = (inst_25276__$1 == null);var state_25335__$1 = (function (){var statearr_25341 = state_25335;(statearr_25341[(13)] = inst_25276__$1);
return statearr_25341;
})();if(cljs.core.truth_(inst_25277))
{var statearr_25342_25382 = state_25335__$1;(statearr_25342_25382[(1)] = (5));
} else
{var statearr_25343_25383 = state_25335__$1;(statearr_25343_25383[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (15)))
{var state_25335__$1 = state_25335;var statearr_25347_25384 = state_25335__$1;(statearr_25347_25384[(2)] = null);
(statearr_25347_25384[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (21)))
{var state_25335__$1 = state_25335;var statearr_25348_25385 = state_25335__$1;(statearr_25348_25385[(2)] = null);
(statearr_25348_25385[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (13)))
{var inst_25290 = (state_25335[(8)]);var inst_25288 = (state_25335[(9)]);var inst_25289 = (state_25335[(10)]);var inst_25287 = (state_25335[(12)]);var inst_25297 = (state_25335[(2)]);var inst_25298 = (inst_25290 + (1));var tmp25344 = inst_25288;var tmp25345 = inst_25289;var tmp25346 = inst_25287;var inst_25287__$1 = tmp25346;var inst_25288__$1 = tmp25344;var inst_25289__$1 = tmp25345;var inst_25290__$1 = inst_25298;var state_25335__$1 = (function (){var statearr_25349 = state_25335;(statearr_25349[(14)] = inst_25297);
(statearr_25349[(8)] = inst_25290__$1);
(statearr_25349[(9)] = inst_25288__$1);
(statearr_25349[(10)] = inst_25289__$1);
(statearr_25349[(12)] = inst_25287__$1);
return statearr_25349;
})();var statearr_25350_25386 = state_25335__$1;(statearr_25350_25386[(2)] = null);
(statearr_25350_25386[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (22)))
{var state_25335__$1 = state_25335;var statearr_25351_25387 = state_25335__$1;(statearr_25351_25387[(2)] = null);
(statearr_25351_25387[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (6)))
{var inst_25276 = (state_25335[(13)]);var inst_25285 = (function (){var G__25352 = inst_25276;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25352) : f.call(null,G__25352));
})();var inst_25286 = cljs.core.seq(inst_25285);var inst_25287 = inst_25286;var inst_25288 = null;var inst_25289 = (0);var inst_25290 = (0);var state_25335__$1 = (function (){var statearr_25353 = state_25335;(statearr_25353[(8)] = inst_25290);
(statearr_25353[(9)] = inst_25288);
(statearr_25353[(10)] = inst_25289);
(statearr_25353[(12)] = inst_25287);
return statearr_25353;
})();var statearr_25354_25388 = state_25335__$1;(statearr_25354_25388[(2)] = null);
(statearr_25354_25388[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (17)))
{var inst_25301 = (state_25335[(7)]);var inst_25305 = cljs.core.chunk_first(inst_25301);var inst_25306 = cljs.core.chunk_rest(inst_25301);var inst_25307 = cljs.core.count(inst_25305);var inst_25287 = inst_25306;var inst_25288 = inst_25305;var inst_25289 = inst_25307;var inst_25290 = (0);var state_25335__$1 = (function (){var statearr_25355 = state_25335;(statearr_25355[(8)] = inst_25290);
(statearr_25355[(9)] = inst_25288);
(statearr_25355[(10)] = inst_25289);
(statearr_25355[(12)] = inst_25287);
return statearr_25355;
})();var statearr_25356_25389 = state_25335__$1;(statearr_25356_25389[(2)] = null);
(statearr_25356_25389[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (3)))
{var inst_25333 = (state_25335[(2)]);var state_25335__$1 = state_25335;return cljs.core.async.impl.ioc_helpers.return_chan(state_25335__$1,inst_25333);
} else
{if((state_val_25336 === (12)))
{var inst_25321 = (state_25335[(2)]);var state_25335__$1 = state_25335;var statearr_25357_25390 = state_25335__$1;(statearr_25357_25390[(2)] = inst_25321);
(statearr_25357_25390[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (2)))
{var state_25335__$1 = state_25335;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25335__$1,(4),in$);
} else
{if((state_val_25336 === (23)))
{var inst_25329 = (state_25335[(2)]);var state_25335__$1 = state_25335;var statearr_25358_25391 = state_25335__$1;(statearr_25358_25391[(2)] = inst_25329);
(statearr_25358_25391[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (19)))
{var inst_25316 = (state_25335[(2)]);var state_25335__$1 = state_25335;var statearr_25359_25392 = state_25335__$1;(statearr_25359_25392[(2)] = inst_25316);
(statearr_25359_25392[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (11)))
{var inst_25301 = (state_25335[(7)]);var inst_25287 = (state_25335[(12)]);var inst_25301__$1 = cljs.core.seq(inst_25287);var state_25335__$1 = (function (){var statearr_25360 = state_25335;(statearr_25360[(7)] = inst_25301__$1);
return statearr_25360;
})();if(inst_25301__$1)
{var statearr_25361_25393 = state_25335__$1;(statearr_25361_25393[(1)] = (14));
} else
{var statearr_25362_25394 = state_25335__$1;(statearr_25362_25394[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (9)))
{var inst_25323 = (state_25335[(2)]);var inst_25324 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_25335__$1 = (function (){var statearr_25363 = state_25335;(statearr_25363[(15)] = inst_25323);
return statearr_25363;
})();if(cljs.core.truth_(inst_25324))
{var statearr_25364_25395 = state_25335__$1;(statearr_25364_25395[(1)] = (21));
} else
{var statearr_25365_25396 = state_25335__$1;(statearr_25365_25396[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (5)))
{var inst_25279 = cljs.core.async.close_BANG_(out);var state_25335__$1 = state_25335;var statearr_25366_25397 = state_25335__$1;(statearr_25366_25397[(2)] = inst_25279);
(statearr_25366_25397[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (14)))
{var inst_25301 = (state_25335[(7)]);var inst_25303 = cljs.core.chunked_seq_QMARK_(inst_25301);var state_25335__$1 = state_25335;if(inst_25303)
{var statearr_25367_25398 = state_25335__$1;(statearr_25367_25398[(1)] = (17));
} else
{var statearr_25368_25399 = state_25335__$1;(statearr_25368_25399[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (16)))
{var inst_25319 = (state_25335[(2)]);var state_25335__$1 = state_25335;var statearr_25369_25400 = state_25335__$1;(statearr_25369_25400[(2)] = inst_25319);
(statearr_25369_25400[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25336 === (10)))
{var inst_25290 = (state_25335[(8)]);var inst_25288 = (state_25335[(9)]);var inst_25295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25288,inst_25290);var state_25335__$1 = state_25335;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25335__$1,(13),out,inst_25295);
} else
{if((state_val_25336 === (18)))
{var inst_25301 = (state_25335[(7)]);var inst_25310 = cljs.core.first(inst_25301);var state_25335__$1 = state_25335;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25335__$1,(20),out,inst_25310);
} else
{if((state_val_25336 === (8)))
{var inst_25290 = (state_25335[(8)]);var inst_25289 = (state_25335[(10)]);var inst_25292 = (inst_25290 < inst_25289);var inst_25293 = inst_25292;var state_25335__$1 = state_25335;if(cljs.core.truth_(inst_25293))
{var statearr_25370_25401 = state_25335__$1;(statearr_25370_25401[(1)] = (10));
} else
{var statearr_25371_25402 = state_25335__$1;(statearr_25371_25402[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto__))
;return ((function (switch__6470__auto__,c__6485__auto__){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25375[(0)] = state_machine__6471__auto__);
(statearr_25375[(1)] = (1));
return statearr_25375;
});
var state_machine__6471__auto____1 = (function (state_25335){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25335);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object))
{var ex__6474__auto__ = e25376;var statearr_25377_25403 = state_25335;(statearr_25377_25403[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25335);
return cljs.core.constant$keyword$16;
} else
{throw e25376;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25404 = state_25335;
state_25335 = G__25404;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25335){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_25378 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_25378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto__))
);
return c__6485__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25509,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25509,out){
return (function (state_25484){var state_val_25485 = (state_25484[(1)]);if((state_val_25485 === (7)))
{var inst_25479 = (state_25484[(2)]);var state_25484__$1 = state_25484;var statearr_25486_25510 = state_25484__$1;(statearr_25486_25510[(2)] = inst_25479);
(statearr_25486_25510[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (1)))
{var inst_25461 = null;var state_25484__$1 = (function (){var statearr_25487 = state_25484;(statearr_25487[(7)] = inst_25461);
return statearr_25487;
})();var statearr_25488_25511 = state_25484__$1;(statearr_25488_25511[(2)] = null);
(statearr_25488_25511[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (4)))
{var inst_25464 = (state_25484[(8)]);var inst_25464__$1 = (state_25484[(2)]);var inst_25465 = (inst_25464__$1 == null);var inst_25466 = cljs.core.not(inst_25465);var state_25484__$1 = (function (){var statearr_25489 = state_25484;(statearr_25489[(8)] = inst_25464__$1);
return statearr_25489;
})();if(inst_25466)
{var statearr_25490_25512 = state_25484__$1;(statearr_25490_25512[(1)] = (5));
} else
{var statearr_25491_25513 = state_25484__$1;(statearr_25491_25513[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (6)))
{var state_25484__$1 = state_25484;var statearr_25492_25514 = state_25484__$1;(statearr_25492_25514[(2)] = null);
(statearr_25492_25514[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (3)))
{var inst_25481 = (state_25484[(2)]);var inst_25482 = cljs.core.async.close_BANG_(out);var state_25484__$1 = (function (){var statearr_25493 = state_25484;(statearr_25493[(9)] = inst_25481);
return statearr_25493;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25484__$1,inst_25482);
} else
{if((state_val_25485 === (2)))
{var state_25484__$1 = state_25484;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25484__$1,(4),ch);
} else
{if((state_val_25485 === (11)))
{var inst_25464 = (state_25484[(8)]);var inst_25473 = (state_25484[(2)]);var inst_25461 = inst_25464;var state_25484__$1 = (function (){var statearr_25494 = state_25484;(statearr_25494[(7)] = inst_25461);
(statearr_25494[(10)] = inst_25473);
return statearr_25494;
})();var statearr_25495_25515 = state_25484__$1;(statearr_25495_25515[(2)] = null);
(statearr_25495_25515[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (9)))
{var inst_25464 = (state_25484[(8)]);var state_25484__$1 = state_25484;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25484__$1,(11),out,inst_25464);
} else
{if((state_val_25485 === (5)))
{var inst_25461 = (state_25484[(7)]);var inst_25464 = (state_25484[(8)]);var inst_25468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25464,inst_25461);var state_25484__$1 = state_25484;if(inst_25468)
{var statearr_25497_25516 = state_25484__$1;(statearr_25497_25516[(1)] = (8));
} else
{var statearr_25498_25517 = state_25484__$1;(statearr_25498_25517[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (10)))
{var inst_25476 = (state_25484[(2)]);var state_25484__$1 = state_25484;var statearr_25499_25518 = state_25484__$1;(statearr_25499_25518[(2)] = inst_25476);
(statearr_25499_25518[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25485 === (8)))
{var inst_25461 = (state_25484[(7)]);var tmp25496 = inst_25461;var inst_25461__$1 = tmp25496;var state_25484__$1 = (function (){var statearr_25500 = state_25484;(statearr_25500[(7)] = inst_25461__$1);
return statearr_25500;
})();var statearr_25501_25519 = state_25484__$1;(statearr_25501_25519[(2)] = null);
(statearr_25501_25519[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___25509,out))
;return ((function (switch__6470__auto__,c__6485__auto___25509,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25505 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25505[(0)] = state_machine__6471__auto__);
(statearr_25505[(1)] = (1));
return statearr_25505;
});
var state_machine__6471__auto____1 = (function (state_25484){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25484);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25506){if((e25506 instanceof Object))
{var ex__6474__auto__ = e25506;var statearr_25507_25520 = state_25484;(statearr_25507_25520[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25484);
return cljs.core.constant$keyword$16;
} else
{throw e25506;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25521 = state_25484;
state_25484 = G__25521;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25484){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25509,out))
})();var state__6487__auto__ = (function (){var statearr_25508 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25509);
return statearr_25508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25509,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25659,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25659,out){
return (function (state_25629){var state_val_25630 = (state_25629[(1)]);if((state_val_25630 === (7)))
{var inst_25625 = (state_25629[(2)]);var state_25629__$1 = state_25629;var statearr_25631_25660 = state_25629__$1;(statearr_25631_25660[(2)] = inst_25625);
(statearr_25631_25660[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (1)))
{var inst_25592 = (new Array(n));var inst_25593 = inst_25592;var inst_25594 = (0);var state_25629__$1 = (function (){var statearr_25632 = state_25629;(statearr_25632[(7)] = inst_25593);
(statearr_25632[(8)] = inst_25594);
return statearr_25632;
})();var statearr_25633_25661 = state_25629__$1;(statearr_25633_25661[(2)] = null);
(statearr_25633_25661[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (4)))
{var inst_25597 = (state_25629[(9)]);var inst_25597__$1 = (state_25629[(2)]);var inst_25598 = (inst_25597__$1 == null);var inst_25599 = cljs.core.not(inst_25598);var state_25629__$1 = (function (){var statearr_25634 = state_25629;(statearr_25634[(9)] = inst_25597__$1);
return statearr_25634;
})();if(inst_25599)
{var statearr_25635_25662 = state_25629__$1;(statearr_25635_25662[(1)] = (5));
} else
{var statearr_25636_25663 = state_25629__$1;(statearr_25636_25663[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (15)))
{var inst_25619 = (state_25629[(2)]);var state_25629__$1 = state_25629;var statearr_25637_25664 = state_25629__$1;(statearr_25637_25664[(2)] = inst_25619);
(statearr_25637_25664[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (13)))
{var state_25629__$1 = state_25629;var statearr_25638_25665 = state_25629__$1;(statearr_25638_25665[(2)] = null);
(statearr_25638_25665[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (6)))
{var inst_25594 = (state_25629[(8)]);var inst_25615 = (inst_25594 > (0));var state_25629__$1 = state_25629;if(cljs.core.truth_(inst_25615))
{var statearr_25639_25666 = state_25629__$1;(statearr_25639_25666[(1)] = (12));
} else
{var statearr_25640_25667 = state_25629__$1;(statearr_25640_25667[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (3)))
{var inst_25627 = (state_25629[(2)]);var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.return_chan(state_25629__$1,inst_25627);
} else
{if((state_val_25630 === (12)))
{var inst_25593 = (state_25629[(7)]);var inst_25617 = cljs.core.vec(inst_25593);var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25629__$1,(15),out,inst_25617);
} else
{if((state_val_25630 === (2)))
{var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25629__$1,(4),ch);
} else
{if((state_val_25630 === (11)))
{var inst_25609 = (state_25629[(2)]);var inst_25610 = (new Array(n));var inst_25593 = inst_25610;var inst_25594 = (0);var state_25629__$1 = (function (){var statearr_25641 = state_25629;(statearr_25641[(10)] = inst_25609);
(statearr_25641[(7)] = inst_25593);
(statearr_25641[(8)] = inst_25594);
return statearr_25641;
})();var statearr_25642_25668 = state_25629__$1;(statearr_25642_25668[(2)] = null);
(statearr_25642_25668[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (9)))
{var inst_25593 = (state_25629[(7)]);var inst_25607 = cljs.core.vec(inst_25593);var state_25629__$1 = state_25629;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25629__$1,(11),out,inst_25607);
} else
{if((state_val_25630 === (5)))
{var inst_25602 = (state_25629[(11)]);var inst_25593 = (state_25629[(7)]);var inst_25597 = (state_25629[(9)]);var inst_25594 = (state_25629[(8)]);var inst_25601 = (inst_25593[inst_25594] = inst_25597);var inst_25602__$1 = (inst_25594 + (1));var inst_25603 = (inst_25602__$1 < n);var state_25629__$1 = (function (){var statearr_25643 = state_25629;(statearr_25643[(11)] = inst_25602__$1);
(statearr_25643[(12)] = inst_25601);
return statearr_25643;
})();if(cljs.core.truth_(inst_25603))
{var statearr_25644_25669 = state_25629__$1;(statearr_25644_25669[(1)] = (8));
} else
{var statearr_25645_25670 = state_25629__$1;(statearr_25645_25670[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (14)))
{var inst_25622 = (state_25629[(2)]);var inst_25623 = cljs.core.async.close_BANG_(out);var state_25629__$1 = (function (){var statearr_25647 = state_25629;(statearr_25647[(13)] = inst_25622);
return statearr_25647;
})();var statearr_25648_25671 = state_25629__$1;(statearr_25648_25671[(2)] = inst_25623);
(statearr_25648_25671[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (10)))
{var inst_25613 = (state_25629[(2)]);var state_25629__$1 = state_25629;var statearr_25649_25672 = state_25629__$1;(statearr_25649_25672[(2)] = inst_25613);
(statearr_25649_25672[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25630 === (8)))
{var inst_25602 = (state_25629[(11)]);var inst_25593 = (state_25629[(7)]);var tmp25646 = inst_25593;var inst_25593__$1 = tmp25646;var inst_25594 = inst_25602;var state_25629__$1 = (function (){var statearr_25650 = state_25629;(statearr_25650[(7)] = inst_25593__$1);
(statearr_25650[(8)] = inst_25594);
return statearr_25650;
})();var statearr_25651_25673 = state_25629__$1;(statearr_25651_25673[(2)] = null);
(statearr_25651_25673[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___25659,out))
;return ((function (switch__6470__auto__,c__6485__auto___25659,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25655[(0)] = state_machine__6471__auto__);
(statearr_25655[(1)] = (1));
return statearr_25655;
});
var state_machine__6471__auto____1 = (function (state_25629){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25629);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25656){if((e25656 instanceof Object))
{var ex__6474__auto__ = e25656;var statearr_25657_25674 = state_25629;(statearr_25657_25674[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25629);
return cljs.core.constant$keyword$16;
} else
{throw e25656;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25675 = state_25629;
state_25629 = G__25675;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25629){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25659,out))
})();var state__6487__auto__ = (function (){var statearr_25658 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25659);
return statearr_25658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25659,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25823,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25823,out){
return (function (state_25792){var state_val_25793 = (state_25792[(1)]);if((state_val_25793 === (7)))
{var inst_25788 = (state_25792[(2)]);var state_25792__$1 = state_25792;var statearr_25794_25824 = state_25792__$1;(statearr_25794_25824[(2)] = inst_25788);
(statearr_25794_25824[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (1)))
{var inst_25751 = [];var inst_25752 = inst_25751;var inst_25753 = cljs.core.constant$keyword$31;var state_25792__$1 = (function (){var statearr_25795 = state_25792;(statearr_25795[(7)] = inst_25753);
(statearr_25795[(8)] = inst_25752);
return statearr_25795;
})();var statearr_25796_25825 = state_25792__$1;(statearr_25796_25825[(2)] = null);
(statearr_25796_25825[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (4)))
{var inst_25756 = (state_25792[(9)]);var inst_25756__$1 = (state_25792[(2)]);var inst_25757 = (inst_25756__$1 == null);var inst_25758 = cljs.core.not(inst_25757);var state_25792__$1 = (function (){var statearr_25797 = state_25792;(statearr_25797[(9)] = inst_25756__$1);
return statearr_25797;
})();if(inst_25758)
{var statearr_25798_25826 = state_25792__$1;(statearr_25798_25826[(1)] = (5));
} else
{var statearr_25799_25827 = state_25792__$1;(statearr_25799_25827[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (15)))
{var inst_25782 = (state_25792[(2)]);var state_25792__$1 = state_25792;var statearr_25800_25828 = state_25792__$1;(statearr_25800_25828[(2)] = inst_25782);
(statearr_25800_25828[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (13)))
{var state_25792__$1 = state_25792;var statearr_25801_25829 = state_25792__$1;(statearr_25801_25829[(2)] = null);
(statearr_25801_25829[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (6)))
{var inst_25752 = (state_25792[(8)]);var inst_25777 = inst_25752.length;var inst_25778 = (inst_25777 > (0));var state_25792__$1 = state_25792;if(cljs.core.truth_(inst_25778))
{var statearr_25802_25830 = state_25792__$1;(statearr_25802_25830[(1)] = (12));
} else
{var statearr_25803_25831 = state_25792__$1;(statearr_25803_25831[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (3)))
{var inst_25790 = (state_25792[(2)]);var state_25792__$1 = state_25792;return cljs.core.async.impl.ioc_helpers.return_chan(state_25792__$1,inst_25790);
} else
{if((state_val_25793 === (12)))
{var inst_25752 = (state_25792[(8)]);var inst_25780 = cljs.core.vec(inst_25752);var state_25792__$1 = state_25792;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25792__$1,(15),out,inst_25780);
} else
{if((state_val_25793 === (2)))
{var state_25792__$1 = state_25792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25792__$1,(4),ch);
} else
{if((state_val_25793 === (11)))
{var inst_25756 = (state_25792[(9)]);var inst_25760 = (state_25792[(10)]);var inst_25770 = (state_25792[(2)]);var inst_25771 = [];var inst_25772 = inst_25771.push(inst_25756);var inst_25752 = inst_25771;var inst_25753 = inst_25760;var state_25792__$1 = (function (){var statearr_25804 = state_25792;(statearr_25804[(11)] = inst_25770);
(statearr_25804[(12)] = inst_25772);
(statearr_25804[(7)] = inst_25753);
(statearr_25804[(8)] = inst_25752);
return statearr_25804;
})();var statearr_25805_25832 = state_25792__$1;(statearr_25805_25832[(2)] = null);
(statearr_25805_25832[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (9)))
{var inst_25752 = (state_25792[(8)]);var inst_25768 = cljs.core.vec(inst_25752);var state_25792__$1 = state_25792;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25792__$1,(11),out,inst_25768);
} else
{if((state_val_25793 === (5)))
{var inst_25756 = (state_25792[(9)]);var inst_25753 = (state_25792[(7)]);var inst_25760 = (state_25792[(10)]);var inst_25760__$1 = (function (){var G__25806 = inst_25756;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25806) : f.call(null,G__25806));
})();var inst_25761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25760__$1,inst_25753);var inst_25762 = cljs.core.keyword_identical_QMARK_(inst_25753,cljs.core.constant$keyword$31);var inst_25763 = (inst_25761) || (inst_25762);var state_25792__$1 = (function (){var statearr_25807 = state_25792;(statearr_25807[(10)] = inst_25760__$1);
return statearr_25807;
})();if(cljs.core.truth_(inst_25763))
{var statearr_25808_25833 = state_25792__$1;(statearr_25808_25833[(1)] = (8));
} else
{var statearr_25809_25834 = state_25792__$1;(statearr_25809_25834[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (14)))
{var inst_25785 = (state_25792[(2)]);var inst_25786 = cljs.core.async.close_BANG_(out);var state_25792__$1 = (function (){var statearr_25811 = state_25792;(statearr_25811[(13)] = inst_25785);
return statearr_25811;
})();var statearr_25812_25835 = state_25792__$1;(statearr_25812_25835[(2)] = inst_25786);
(statearr_25812_25835[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (10)))
{var inst_25775 = (state_25792[(2)]);var state_25792__$1 = state_25792;var statearr_25813_25836 = state_25792__$1;(statearr_25813_25836[(2)] = inst_25775);
(statearr_25813_25836[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25793 === (8)))
{var inst_25756 = (state_25792[(9)]);var inst_25752 = (state_25792[(8)]);var inst_25760 = (state_25792[(10)]);var inst_25765 = inst_25752.push(inst_25756);var tmp25810 = inst_25752;var inst_25752__$1 = tmp25810;var inst_25753 = inst_25760;var state_25792__$1 = (function (){var statearr_25814 = state_25792;(statearr_25814[(7)] = inst_25753);
(statearr_25814[(8)] = inst_25752__$1);
(statearr_25814[(14)] = inst_25765);
return statearr_25814;
})();var statearr_25815_25837 = state_25792__$1;(statearr_25815_25837[(2)] = null);
(statearr_25815_25837[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6485__auto___25823,out))
;return ((function (switch__6470__auto__,c__6485__auto___25823,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25819[(0)] = state_machine__6471__auto__);
(statearr_25819[(1)] = (1));
return statearr_25819;
});
var state_machine__6471__auto____1 = (function (state_25792){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25792);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object))
{var ex__6474__auto__ = e25820;var statearr_25821_25838 = state_25792;(statearr_25821_25838[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25792);
return cljs.core.constant$keyword$16;
} else
{throw e25820;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25839 = state_25792;
state_25792 = G__25839;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25792){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25823,out))
})();var state__6487__auto__ = (function (){var statearr_25822 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25823);
return statearr_25822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25823,out))
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
