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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23923 = (function (f,fn_handler,meta23924){
this.f = f;
this.fn_handler = fn_handler;
this.meta23924 = meta23924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23923.cljs$lang$type = true;
cljs.core.async.t23923.cljs$lang$ctorStr = "cljs.core.async/t23923";
cljs.core.async.t23923.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23923");
});
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23925){var self__ = this;
var _23925__$1 = this;return self__.meta23924;
});
cljs.core.async.t23923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23925,meta23924__$1){var self__ = this;
var _23925__$1 = this;return (new cljs.core.async.t23923(self__.f,self__.fn_handler,meta23924__$1));
});
cljs.core.async.__GT_t23923 = (function __GT_t23923(f__$1,fn_handler__$1,meta23924){return (new cljs.core.async.t23923(f__$1,fn_handler__$1,meta23924));
});
}
return (new cljs.core.async.t23923(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23927 = buff;if(G__23927)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23927.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23927.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23927);
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
{var val_23944 = (function (){var G__23941 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23941) : cljs.core.deref.call(null,G__23941));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23942_23945 = val_23944;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23942_23945) : fn1.call(null,G__23942_23945));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23944,ret){
return (function (){var G__23943 = val_23944;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23943) : fn1.call(null,G__23943));
});})(val_23944,ret))
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
{var ret = temp__4124__auto__;var G__23954 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23954) : cljs.core.deref.call(null,G__23954));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__23955 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23955) : cljs.core.deref.call(null,G__23955));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23956_23958 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23956_23958) : fn1.call(null,G__23956_23958));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__23957 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23957) : fn1.call(null,G__23957));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___23959 = n;var x_23960 = (0);while(true){
if((x_23960 < n__4510__auto___23959))
{(a[x_23960] = (0));
{
var G__23961 = (x_23960 + (1));
x_23960 = G__23961;
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
var G__23962 = (i + (1));
i = G__23962;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__23970 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23970) : cljs.core.atom.call(null,G__23970));
})();if(typeof cljs.core.async.t23971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23971 = (function (flag,alt_flag,meta23972){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23972 = meta23972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23971.cljs$lang$type = true;
cljs.core.async.t23971.cljs$lang$ctorStr = "cljs.core.async/t23971";
cljs.core.async.t23971.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23971");
});})(flag))
;
cljs.core.async.t23971.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23974 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23974) : cljs.core.deref.call(null,G__23974));
});})(flag))
;
cljs.core.async.t23971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23975_23977 = self__.flag;var G__23976_23978 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23975_23977,G__23976_23978) : cljs.core.reset_BANG_.call(null,G__23975_23977,G__23976_23978));
return true;
});})(flag))
;
cljs.core.async.t23971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23973){var self__ = this;
var _23973__$1 = this;return self__.meta23972;
});})(flag))
;
cljs.core.async.t23971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23973,meta23972__$1){var self__ = this;
var _23973__$1 = this;return (new cljs.core.async.t23971(self__.flag,self__.alt_flag,meta23972__$1));
});})(flag))
;
cljs.core.async.__GT_t23971 = ((function (flag){
return (function __GT_t23971(flag__$1,alt_flag__$1,meta23972){return (new cljs.core.async.t23971(flag__$1,alt_flag__$1,meta23972));
});})(flag))
;
}
return (new cljs.core.async.t23971(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23982 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23982 = (function (cb,flag,alt_handler,meta23983){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23983 = meta23983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23982.cljs$lang$type = true;
cljs.core.async.t23982.cljs$lang$ctorStr = "cljs.core.async/t23982";
cljs.core.async.t23982.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23982");
});
cljs.core.async.t23982.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23984){var self__ = this;
var _23984__$1 = this;return self__.meta23983;
});
cljs.core.async.t23982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23984,meta23983__$1){var self__ = this;
var _23984__$1 = this;return (new cljs.core.async.t23982(self__.cb,self__.flag,self__.alt_handler,meta23983__$1));
});
cljs.core.async.__GT_t23982 = (function __GT_t23982(cb__$1,flag__$1,alt_handler__$1,meta23983){return (new cljs.core.async.t23982(cb__$1,flag__$1,alt_handler__$1,meta23983));
});
}
return (new cljs.core.async.t23982(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23992 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23992) : port.call(null,G__23992));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23993 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23993) : port.call(null,G__23993));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23985_SHARP_){var G__23994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23985_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23994) : fret.call(null,G__23994));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23986_SHARP_){var G__23995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23986_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23995) : fret.call(null,G__23995));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23996 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23996) : cljs.core.deref.call(null,G__23996));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23997 = (i + (1));
i = G__23997;
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
var alts_BANG___delegate = function (ports,p__23998){var map__24000 = p__23998;var map__24000__$1 = ((cljs.core.seq_QMARK_(map__24000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24000):map__24000);var opts = map__24000__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23998 = null;if (arguments.length > 1) {
  p__23998 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23998);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24001){
var ports = cljs.core.first(arglist__24001);
var p__23998 = cljs.core.rest(arglist__24001);
return alts_BANG___delegate(ports,p__23998);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24099){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24099){
return (function (state_24075){var state_val_24076 = (state_24075[(1)]);if((state_val_24076 === (7)))
{var inst_24071 = (state_24075[(2)]);var state_24075__$1 = state_24075;var statearr_24077_24100 = state_24075__$1;(statearr_24077_24100[(2)] = inst_24071);
(statearr_24077_24100[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (1)))
{var state_24075__$1 = state_24075;var statearr_24078_24101 = state_24075__$1;(statearr_24078_24101[(2)] = null);
(statearr_24078_24101[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (4)))
{var inst_24054 = (state_24075[(7)]);var inst_24054__$1 = (state_24075[(2)]);var inst_24055 = (inst_24054__$1 == null);var state_24075__$1 = (function (){var statearr_24079 = state_24075;(statearr_24079[(7)] = inst_24054__$1);
return statearr_24079;
})();if(cljs.core.truth_(inst_24055))
{var statearr_24080_24102 = state_24075__$1;(statearr_24080_24102[(1)] = (5));
} else
{var statearr_24081_24103 = state_24075__$1;(statearr_24081_24103[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (13)))
{var state_24075__$1 = state_24075;var statearr_24082_24104 = state_24075__$1;(statearr_24082_24104[(2)] = null);
(statearr_24082_24104[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (6)))
{var inst_24054 = (state_24075[(7)]);var state_24075__$1 = state_24075;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24075__$1,(11),to,inst_24054);
} else
{if((state_val_24076 === (3)))
{var inst_24073 = (state_24075[(2)]);var state_24075__$1 = state_24075;return cljs.core.async.impl.ioc_helpers.return_chan(state_24075__$1,inst_24073);
} else
{if((state_val_24076 === (12)))
{var state_24075__$1 = state_24075;var statearr_24083_24105 = state_24075__$1;(statearr_24083_24105[(2)] = null);
(statearr_24083_24105[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (2)))
{var state_24075__$1 = state_24075;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24075__$1,(4),from);
} else
{if((state_val_24076 === (11)))
{var inst_24064 = (state_24075[(2)]);var state_24075__$1 = state_24075;if(cljs.core.truth_(inst_24064))
{var statearr_24084_24106 = state_24075__$1;(statearr_24084_24106[(1)] = (12));
} else
{var statearr_24085_24107 = state_24075__$1;(statearr_24085_24107[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (9)))
{var state_24075__$1 = state_24075;var statearr_24086_24108 = state_24075__$1;(statearr_24086_24108[(2)] = null);
(statearr_24086_24108[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (5)))
{var state_24075__$1 = state_24075;if(cljs.core.truth_(close_QMARK_))
{var statearr_24087_24109 = state_24075__$1;(statearr_24087_24109[(1)] = (8));
} else
{var statearr_24088_24110 = state_24075__$1;(statearr_24088_24110[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (14)))
{var inst_24069 = (state_24075[(2)]);var state_24075__$1 = state_24075;var statearr_24089_24111 = state_24075__$1;(statearr_24089_24111[(2)] = inst_24069);
(statearr_24089_24111[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (10)))
{var inst_24061 = (state_24075[(2)]);var state_24075__$1 = state_24075;var statearr_24090_24112 = state_24075__$1;(statearr_24090_24112[(2)] = inst_24061);
(statearr_24090_24112[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24076 === (8)))
{var inst_24058 = cljs.core.async.close_BANG_(to);var state_24075__$1 = state_24075;var statearr_24091_24113 = state_24075__$1;(statearr_24091_24113[(2)] = inst_24058);
(statearr_24091_24113[(1)] = (10));
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
});})(c__12292__auto___24099))
;return ((function (switch__12277__auto__,c__12292__auto___24099){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24095 = [null,null,null,null,null,null,null,null];(statearr_24095[(0)] = state_machine__12278__auto__);
(statearr_24095[(1)] = (1));
return statearr_24095;
});
var state_machine__12278__auto____1 = (function (state_24075){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24075);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object))
{var ex__12281__auto__ = e24096;var statearr_24097_24114 = state_24075;(statearr_24097_24114[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24075);
return cljs.core.constant$keyword$82;
} else
{throw e24096;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24115 = state_24075;
state_24075 = G__24115;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24075){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24099))
})();var state__12294__auto__ = (function (){var statearr_24098 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24099);
return statearr_24098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24099))
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
return (function (p__24301){var vec__24302 = p__24301;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24302,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24302,(1),null);var job = vec__24302;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results){
return (function (state_24307){var state_val_24308 = (state_24307[(1)]);if((state_val_24308 === (2)))
{var inst_24304 = (state_24307[(2)]);var inst_24305 = cljs.core.async.close_BANG_(res);var state_24307__$1 = (function (){var statearr_24309 = state_24307;(statearr_24309[(7)] = inst_24304);
return statearr_24309;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24307__$1,inst_24305);
} else
{if((state_val_24308 === (1)))
{var state_24307__$1 = state_24307;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24307__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24313 = [null,null,null,null,null,null,null,null];(statearr_24313[(0)] = state_machine__12278__auto__);
(statearr_24313[(1)] = (1));
return statearr_24313;
});
var state_machine__12278__auto____1 = (function (state_24307){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24307);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24314){if((e24314 instanceof Object))
{var ex__12281__auto__ = e24314;var statearr_24315_24487 = state_24307;(statearr_24315_24487[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24307);
return cljs.core.constant$keyword$82;
} else
{throw e24314;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24488 = state_24307;
state_24307 = G__24488;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24307){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24316 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24486);
return statearr_24316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24486,res,vec__24302,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24317){var vec__24318 = p__24317;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24318,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24318,(1),null);var job = vec__24318;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24319_24489 = v;var G__24320_24490 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24319_24489,G__24320_24490) : xf.call(null,G__24319_24489,G__24320_24490));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24491 = n;var __24492 = (0);while(true){
if((__24492 < n__4510__auto___24491))
{var G__24321_24493 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24321_24493) {
case "async":
var c__12292__auto___24495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24492,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24492,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function (state_24334){var state_val_24335 = (state_24334[(1)]);if((state_val_24335 === (7)))
{var inst_24330 = (state_24334[(2)]);var state_24334__$1 = state_24334;var statearr_24336_24496 = state_24334__$1;(statearr_24336_24496[(2)] = inst_24330);
(statearr_24336_24496[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24335 === (6)))
{var state_24334__$1 = state_24334;var statearr_24337_24497 = state_24334__$1;(statearr_24337_24497[(2)] = null);
(statearr_24337_24497[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24335 === (5)))
{var state_24334__$1 = state_24334;var statearr_24338_24498 = state_24334__$1;(statearr_24338_24498[(2)] = null);
(statearr_24338_24498[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24335 === (4)))
{var inst_24324 = (state_24334[(2)]);var inst_24325 = async(inst_24324);var state_24334__$1 = state_24334;if(cljs.core.truth_(inst_24325))
{var statearr_24339_24499 = state_24334__$1;(statearr_24339_24499[(1)] = (5));
} else
{var statearr_24340_24500 = state_24334__$1;(statearr_24340_24500[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24335 === (3)))
{var inst_24332 = (state_24334[(2)]);var state_24334__$1 = state_24334;return cljs.core.async.impl.ioc_helpers.return_chan(state_24334__$1,inst_24332);
} else
{if((state_val_24335 === (2)))
{var state_24334__$1 = state_24334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24334__$1,(4),jobs);
} else
{if((state_val_24335 === (1)))
{var state_24334__$1 = state_24334;var statearr_24341_24501 = state_24334__$1;(statearr_24341_24501[(2)] = null);
(statearr_24341_24501[(1)] = (2));
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
});})(__24492,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
;return ((function (__24492,switch__12277__auto__,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24345 = [null,null,null,null,null,null,null];(statearr_24345[(0)] = state_machine__12278__auto__);
(statearr_24345[(1)] = (1));
return statearr_24345;
});
var state_machine__12278__auto____1 = (function (state_24334){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24334);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object))
{var ex__12281__auto__ = e24346;var statearr_24347_24502 = state_24334;(statearr_24347_24502[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24334);
return cljs.core.constant$keyword$82;
} else
{throw e24346;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24503 = state_24334;
state_24334 = G__24503;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24334){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24492,switch__12277__auto__,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24348 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24495);
return statearr_24348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24492,c__12292__auto___24495,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24492,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24492,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function (state_24361){var state_val_24362 = (state_24361[(1)]);if((state_val_24362 === (7)))
{var inst_24357 = (state_24361[(2)]);var state_24361__$1 = state_24361;var statearr_24363_24505 = state_24361__$1;(statearr_24363_24505[(2)] = inst_24357);
(statearr_24363_24505[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24362 === (6)))
{var state_24361__$1 = state_24361;var statearr_24364_24506 = state_24361__$1;(statearr_24364_24506[(2)] = null);
(statearr_24364_24506[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24362 === (5)))
{var state_24361__$1 = state_24361;var statearr_24365_24507 = state_24361__$1;(statearr_24365_24507[(2)] = null);
(statearr_24365_24507[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24362 === (4)))
{var inst_24351 = (state_24361[(2)]);var inst_24352 = process(inst_24351);var state_24361__$1 = state_24361;if(cljs.core.truth_(inst_24352))
{var statearr_24366_24508 = state_24361__$1;(statearr_24366_24508[(1)] = (5));
} else
{var statearr_24367_24509 = state_24361__$1;(statearr_24367_24509[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24362 === (3)))
{var inst_24359 = (state_24361[(2)]);var state_24361__$1 = state_24361;return cljs.core.async.impl.ioc_helpers.return_chan(state_24361__$1,inst_24359);
} else
{if((state_val_24362 === (2)))
{var state_24361__$1 = state_24361;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24361__$1,(4),jobs);
} else
{if((state_val_24362 === (1)))
{var state_24361__$1 = state_24361;var statearr_24368_24510 = state_24361__$1;(statearr_24368_24510[(2)] = null);
(statearr_24368_24510[(1)] = (2));
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
});})(__24492,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
;return ((function (__24492,switch__12277__auto__,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24372 = [null,null,null,null,null,null,null];(statearr_24372[(0)] = state_machine__12278__auto__);
(statearr_24372[(1)] = (1));
return statearr_24372;
});
var state_machine__12278__auto____1 = (function (state_24361){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24361);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24373){if((e24373 instanceof Object))
{var ex__12281__auto__ = e24373;var statearr_24374_24511 = state_24361;(statearr_24374_24511[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24361);
return cljs.core.constant$keyword$82;
} else
{throw e24373;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24512 = state_24361;
state_24361 = G__24512;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24361){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24492,switch__12277__auto__,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24375 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24504);
return statearr_24375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24492,c__12292__auto___24504,G__24321_24493,n__4510__auto___24491,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24513 = (__24492 + (1));
__24492 = G__24513;
continue;
}
} else
{}
break;
}
var c__12292__auto___24514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24514,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24514,jobs,results,process,async){
return (function (state_24397){var state_val_24398 = (state_24397[(1)]);if((state_val_24398 === (9)))
{var inst_24390 = (state_24397[(2)]);var state_24397__$1 = (function (){var statearr_24399 = state_24397;(statearr_24399[(7)] = inst_24390);
return statearr_24399;
})();var statearr_24400_24515 = state_24397__$1;(statearr_24400_24515[(2)] = null);
(statearr_24400_24515[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24398 === (8)))
{var inst_24383 = (state_24397[(8)]);var inst_24388 = (state_24397[(2)]);var state_24397__$1 = (function (){var statearr_24401 = state_24397;(statearr_24401[(9)] = inst_24388);
return statearr_24401;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24397__$1,(9),results,inst_24383);
} else
{if((state_val_24398 === (7)))
{var inst_24393 = (state_24397[(2)]);var state_24397__$1 = state_24397;var statearr_24402_24516 = state_24397__$1;(statearr_24402_24516[(2)] = inst_24393);
(statearr_24402_24516[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24398 === (6)))
{var inst_24383 = (state_24397[(8)]);var inst_24378 = (state_24397[(10)]);var inst_24383__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24384 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24385 = [inst_24378,inst_24383__$1];var inst_24386 = (new cljs.core.PersistentVector(null,2,(5),inst_24384,inst_24385,null));var state_24397__$1 = (function (){var statearr_24403 = state_24397;(statearr_24403[(8)] = inst_24383__$1);
return statearr_24403;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24397__$1,(8),jobs,inst_24386);
} else
{if((state_val_24398 === (5)))
{var inst_24381 = cljs.core.async.close_BANG_(jobs);var state_24397__$1 = state_24397;var statearr_24404_24517 = state_24397__$1;(statearr_24404_24517[(2)] = inst_24381);
(statearr_24404_24517[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24398 === (4)))
{var inst_24378 = (state_24397[(10)]);var inst_24378__$1 = (state_24397[(2)]);var inst_24379 = (inst_24378__$1 == null);var state_24397__$1 = (function (){var statearr_24405 = state_24397;(statearr_24405[(10)] = inst_24378__$1);
return statearr_24405;
})();if(cljs.core.truth_(inst_24379))
{var statearr_24406_24518 = state_24397__$1;(statearr_24406_24518[(1)] = (5));
} else
{var statearr_24407_24519 = state_24397__$1;(statearr_24407_24519[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24398 === (3)))
{var inst_24395 = (state_24397[(2)]);var state_24397__$1 = state_24397;return cljs.core.async.impl.ioc_helpers.return_chan(state_24397__$1,inst_24395);
} else
{if((state_val_24398 === (2)))
{var state_24397__$1 = state_24397;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24397__$1,(4),from);
} else
{if((state_val_24398 === (1)))
{var state_24397__$1 = state_24397;var statearr_24408_24520 = state_24397__$1;(statearr_24408_24520[(2)] = null);
(statearr_24408_24520[(1)] = (2));
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
});})(c__12292__auto___24514,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24514,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24412 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24412[(0)] = state_machine__12278__auto__);
(statearr_24412[(1)] = (1));
return statearr_24412;
});
var state_machine__12278__auto____1 = (function (state_24397){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24397);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24413){if((e24413 instanceof Object))
{var ex__12281__auto__ = e24413;var statearr_24414_24521 = state_24397;(statearr_24414_24521[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24397);
return cljs.core.constant$keyword$82;
} else
{throw e24413;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24522 = state_24397;
state_24397 = G__24522;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24397){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24514,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24415 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24514);
return statearr_24415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24514,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24453){var state_val_24454 = (state_24453[(1)]);if((state_val_24454 === (7)))
{var inst_24449 = (state_24453[(2)]);var state_24453__$1 = state_24453;var statearr_24455_24523 = state_24453__$1;(statearr_24455_24523[(2)] = inst_24449);
(statearr_24455_24523[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (20)))
{var state_24453__$1 = state_24453;var statearr_24456_24524 = state_24453__$1;(statearr_24456_24524[(2)] = null);
(statearr_24456_24524[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (1)))
{var state_24453__$1 = state_24453;var statearr_24457_24525 = state_24453__$1;(statearr_24457_24525[(2)] = null);
(statearr_24457_24525[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (4)))
{var inst_24418 = (state_24453[(7)]);var inst_24418__$1 = (state_24453[(2)]);var inst_24419 = (inst_24418__$1 == null);var state_24453__$1 = (function (){var statearr_24458 = state_24453;(statearr_24458[(7)] = inst_24418__$1);
return statearr_24458;
})();if(cljs.core.truth_(inst_24419))
{var statearr_24459_24526 = state_24453__$1;(statearr_24459_24526[(1)] = (5));
} else
{var statearr_24460_24527 = state_24453__$1;(statearr_24460_24527[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (15)))
{var inst_24431 = (state_24453[(8)]);var state_24453__$1 = state_24453;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24453__$1,(18),to,inst_24431);
} else
{if((state_val_24454 === (21)))
{var inst_24444 = (state_24453[(2)]);var state_24453__$1 = state_24453;var statearr_24461_24528 = state_24453__$1;(statearr_24461_24528[(2)] = inst_24444);
(statearr_24461_24528[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (13)))
{var inst_24446 = (state_24453[(2)]);var state_24453__$1 = (function (){var statearr_24462 = state_24453;(statearr_24462[(9)] = inst_24446);
return statearr_24462;
})();var statearr_24463_24529 = state_24453__$1;(statearr_24463_24529[(2)] = null);
(statearr_24463_24529[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (6)))
{var inst_24418 = (state_24453[(7)]);var state_24453__$1 = state_24453;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24453__$1,(11),inst_24418);
} else
{if((state_val_24454 === (17)))
{var inst_24439 = (state_24453[(2)]);var state_24453__$1 = state_24453;if(cljs.core.truth_(inst_24439))
{var statearr_24464_24530 = state_24453__$1;(statearr_24464_24530[(1)] = (19));
} else
{var statearr_24465_24531 = state_24453__$1;(statearr_24465_24531[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (3)))
{var inst_24451 = (state_24453[(2)]);var state_24453__$1 = state_24453;return cljs.core.async.impl.ioc_helpers.return_chan(state_24453__$1,inst_24451);
} else
{if((state_val_24454 === (12)))
{var inst_24428 = (state_24453[(10)]);var state_24453__$1 = state_24453;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24453__$1,(14),inst_24428);
} else
{if((state_val_24454 === (2)))
{var state_24453__$1 = state_24453;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24453__$1,(4),results);
} else
{if((state_val_24454 === (19)))
{var state_24453__$1 = state_24453;var statearr_24466_24532 = state_24453__$1;(statearr_24466_24532[(2)] = null);
(statearr_24466_24532[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (11)))
{var inst_24428 = (state_24453[(2)]);var state_24453__$1 = (function (){var statearr_24467 = state_24453;(statearr_24467[(10)] = inst_24428);
return statearr_24467;
})();var statearr_24468_24533 = state_24453__$1;(statearr_24468_24533[(2)] = null);
(statearr_24468_24533[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (9)))
{var state_24453__$1 = state_24453;var statearr_24469_24534 = state_24453__$1;(statearr_24469_24534[(2)] = null);
(statearr_24469_24534[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (5)))
{var state_24453__$1 = state_24453;if(cljs.core.truth_(close_QMARK_))
{var statearr_24470_24535 = state_24453__$1;(statearr_24470_24535[(1)] = (8));
} else
{var statearr_24471_24536 = state_24453__$1;(statearr_24471_24536[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (14)))
{var inst_24431 = (state_24453[(8)]);var inst_24433 = (state_24453[(11)]);var inst_24431__$1 = (state_24453[(2)]);var inst_24432 = (inst_24431__$1 == null);var inst_24433__$1 = cljs.core.not(inst_24432);var state_24453__$1 = (function (){var statearr_24472 = state_24453;(statearr_24472[(8)] = inst_24431__$1);
(statearr_24472[(11)] = inst_24433__$1);
return statearr_24472;
})();if(inst_24433__$1)
{var statearr_24473_24537 = state_24453__$1;(statearr_24473_24537[(1)] = (15));
} else
{var statearr_24474_24538 = state_24453__$1;(statearr_24474_24538[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (16)))
{var inst_24433 = (state_24453[(11)]);var state_24453__$1 = state_24453;var statearr_24475_24539 = state_24453__$1;(statearr_24475_24539[(2)] = inst_24433);
(statearr_24475_24539[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (10)))
{var inst_24425 = (state_24453[(2)]);var state_24453__$1 = state_24453;var statearr_24476_24540 = state_24453__$1;(statearr_24476_24540[(2)] = inst_24425);
(statearr_24476_24540[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (18)))
{var inst_24436 = (state_24453[(2)]);var state_24453__$1 = state_24453;var statearr_24477_24541 = state_24453__$1;(statearr_24477_24541[(2)] = inst_24436);
(statearr_24477_24541[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24454 === (8)))
{var inst_24422 = cljs.core.async.close_BANG_(to);var state_24453__$1 = state_24453;var statearr_24478_24542 = state_24453__$1;(statearr_24478_24542[(2)] = inst_24422);
(statearr_24478_24542[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24482 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24482[(0)] = state_machine__12278__auto__);
(statearr_24482[(1)] = (1));
return statearr_24482;
});
var state_machine__12278__auto____1 = (function (state_24453){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24453);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24483){if((e24483 instanceof Object))
{var ex__12281__auto__ = e24483;var statearr_24484_24543 = state_24453;(statearr_24484_24543[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24453);
return cljs.core.constant$keyword$82;
} else
{throw e24483;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24544 = state_24453;
state_24453 = G__24544;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24453){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24485 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24485;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24667,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24667,tc,fc){
return (function (state_24641){var state_val_24642 = (state_24641[(1)]);if((state_val_24642 === (7)))
{var inst_24637 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24643_24668 = state_24641__$1;(statearr_24643_24668[(2)] = inst_24637);
(statearr_24643_24668[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (1)))
{var state_24641__$1 = state_24641;var statearr_24644_24669 = state_24641__$1;(statearr_24644_24669[(2)] = null);
(statearr_24644_24669[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (4)))
{var inst_24618 = (state_24641[(7)]);var inst_24618__$1 = (state_24641[(2)]);var inst_24619 = (inst_24618__$1 == null);var state_24641__$1 = (function (){var statearr_24645 = state_24641;(statearr_24645[(7)] = inst_24618__$1);
return statearr_24645;
})();if(cljs.core.truth_(inst_24619))
{var statearr_24646_24670 = state_24641__$1;(statearr_24646_24670[(1)] = (5));
} else
{var statearr_24647_24671 = state_24641__$1;(statearr_24647_24671[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (13)))
{var state_24641__$1 = state_24641;var statearr_24648_24672 = state_24641__$1;(statearr_24648_24672[(2)] = null);
(statearr_24648_24672[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (6)))
{var inst_24618 = (state_24641[(7)]);var inst_24624 = (function (){var G__24649 = inst_24618;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24649) : p.call(null,G__24649));
})();var state_24641__$1 = state_24641;if(cljs.core.truth_(inst_24624))
{var statearr_24650_24673 = state_24641__$1;(statearr_24650_24673[(1)] = (9));
} else
{var statearr_24651_24674 = state_24641__$1;(statearr_24651_24674[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (3)))
{var inst_24639 = (state_24641[(2)]);var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.return_chan(state_24641__$1,inst_24639);
} else
{if((state_val_24642 === (12)))
{var state_24641__$1 = state_24641;var statearr_24652_24675 = state_24641__$1;(statearr_24652_24675[(2)] = null);
(statearr_24652_24675[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (2)))
{var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24641__$1,(4),ch);
} else
{if((state_val_24642 === (11)))
{var inst_24618 = (state_24641[(7)]);var inst_24628 = (state_24641[(2)]);var state_24641__$1 = state_24641;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24641__$1,(8),inst_24628,inst_24618);
} else
{if((state_val_24642 === (9)))
{var state_24641__$1 = state_24641;var statearr_24653_24676 = state_24641__$1;(statearr_24653_24676[(2)] = tc);
(statearr_24653_24676[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (5)))
{var inst_24621 = cljs.core.async.close_BANG_(tc);var inst_24622 = cljs.core.async.close_BANG_(fc);var state_24641__$1 = (function (){var statearr_24654 = state_24641;(statearr_24654[(8)] = inst_24621);
return statearr_24654;
})();var statearr_24655_24677 = state_24641__$1;(statearr_24655_24677[(2)] = inst_24622);
(statearr_24655_24677[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (14)))
{var inst_24635 = (state_24641[(2)]);var state_24641__$1 = state_24641;var statearr_24656_24678 = state_24641__$1;(statearr_24656_24678[(2)] = inst_24635);
(statearr_24656_24678[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (10)))
{var state_24641__$1 = state_24641;var statearr_24657_24679 = state_24641__$1;(statearr_24657_24679[(2)] = fc);
(statearr_24657_24679[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24642 === (8)))
{var inst_24630 = (state_24641[(2)]);var state_24641__$1 = state_24641;if(cljs.core.truth_(inst_24630))
{var statearr_24658_24680 = state_24641__$1;(statearr_24658_24680[(1)] = (12));
} else
{var statearr_24659_24681 = state_24641__$1;(statearr_24659_24681[(1)] = (13));
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
});})(c__12292__auto___24667,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24667,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24663 = [null,null,null,null,null,null,null,null,null];(statearr_24663[(0)] = state_machine__12278__auto__);
(statearr_24663[(1)] = (1));
return statearr_24663;
});
var state_machine__12278__auto____1 = (function (state_24641){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24641);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24664){if((e24664 instanceof Object))
{var ex__12281__auto__ = e24664;var statearr_24665_24682 = state_24641;(statearr_24665_24682[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24641);
return cljs.core.constant$keyword$82;
} else
{throw e24664;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24683 = state_24641;
state_24641 = G__24683;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24641){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24667,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24666 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24667);
return statearr_24666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24667,tc,fc))
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
return (function (state_24732){var state_val_24733 = (state_24732[(1)]);if((state_val_24733 === (7)))
{var inst_24728 = (state_24732[(2)]);var state_24732__$1 = state_24732;var statearr_24734_24752 = state_24732__$1;(statearr_24734_24752[(2)] = inst_24728);
(statearr_24734_24752[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24733 === (6)))
{var inst_24718 = (state_24732[(7)]);var inst_24721 = (state_24732[(8)]);var inst_24725 = (function (){var G__24735 = inst_24718;var G__24736 = inst_24721;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24735,G__24736) : f.call(null,G__24735,G__24736));
})();var inst_24718__$1 = inst_24725;var state_24732__$1 = (function (){var statearr_24737 = state_24732;(statearr_24737[(7)] = inst_24718__$1);
return statearr_24737;
})();var statearr_24738_24753 = state_24732__$1;(statearr_24738_24753[(2)] = null);
(statearr_24738_24753[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24733 === (5)))
{var inst_24718 = (state_24732[(7)]);var state_24732__$1 = state_24732;var statearr_24739_24754 = state_24732__$1;(statearr_24739_24754[(2)] = inst_24718);
(statearr_24739_24754[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24733 === (4)))
{var inst_24721 = (state_24732[(8)]);var inst_24721__$1 = (state_24732[(2)]);var inst_24722 = (inst_24721__$1 == null);var state_24732__$1 = (function (){var statearr_24740 = state_24732;(statearr_24740[(8)] = inst_24721__$1);
return statearr_24740;
})();if(cljs.core.truth_(inst_24722))
{var statearr_24741_24755 = state_24732__$1;(statearr_24741_24755[(1)] = (5));
} else
{var statearr_24742_24756 = state_24732__$1;(statearr_24742_24756[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24733 === (3)))
{var inst_24730 = (state_24732[(2)]);var state_24732__$1 = state_24732;return cljs.core.async.impl.ioc_helpers.return_chan(state_24732__$1,inst_24730);
} else
{if((state_val_24733 === (2)))
{var state_24732__$1 = state_24732;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24732__$1,(4),ch);
} else
{if((state_val_24733 === (1)))
{var inst_24718 = init;var state_24732__$1 = (function (){var statearr_24743 = state_24732;(statearr_24743[(7)] = inst_24718);
return statearr_24743;
})();var statearr_24744_24757 = state_24732__$1;(statearr_24744_24757[(2)] = null);
(statearr_24744_24757[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24748 = [null,null,null,null,null,null,null,null,null];(statearr_24748[(0)] = state_machine__12278__auto__);
(statearr_24748[(1)] = (1));
return statearr_24748;
});
var state_machine__12278__auto____1 = (function (state_24732){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24732);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24749){if((e24749 instanceof Object))
{var ex__12281__auto__ = e24749;var statearr_24750_24758 = state_24732;(statearr_24750_24758[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24732);
return cljs.core.constant$keyword$82;
} else
{throw e24749;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24759 = state_24732;
state_24732 = G__24759;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24751 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24751;
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
return (function (state_24836){var state_val_24837 = (state_24836[(1)]);if((state_val_24837 === (7)))
{var inst_24818 = (state_24836[(2)]);var state_24836__$1 = state_24836;var statearr_24838_24861 = state_24836__$1;(statearr_24838_24861[(2)] = inst_24818);
(statearr_24838_24861[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (1)))
{var inst_24812 = cljs.core.seq(coll);var inst_24813 = inst_24812;var state_24836__$1 = (function (){var statearr_24839 = state_24836;(statearr_24839[(7)] = inst_24813);
return statearr_24839;
})();var statearr_24840_24862 = state_24836__$1;(statearr_24840_24862[(2)] = null);
(statearr_24840_24862[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (4)))
{var inst_24813 = (state_24836[(7)]);var inst_24816 = cljs.core.first(inst_24813);var state_24836__$1 = state_24836;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24836__$1,(7),ch,inst_24816);
} else
{if((state_val_24837 === (13)))
{var inst_24830 = (state_24836[(2)]);var state_24836__$1 = state_24836;var statearr_24841_24863 = state_24836__$1;(statearr_24841_24863[(2)] = inst_24830);
(statearr_24841_24863[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (6)))
{var inst_24821 = (state_24836[(2)]);var state_24836__$1 = state_24836;if(cljs.core.truth_(inst_24821))
{var statearr_24842_24864 = state_24836__$1;(statearr_24842_24864[(1)] = (8));
} else
{var statearr_24843_24865 = state_24836__$1;(statearr_24843_24865[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (3)))
{var inst_24834 = (state_24836[(2)]);var state_24836__$1 = state_24836;return cljs.core.async.impl.ioc_helpers.return_chan(state_24836__$1,inst_24834);
} else
{if((state_val_24837 === (12)))
{var state_24836__$1 = state_24836;var statearr_24844_24866 = state_24836__$1;(statearr_24844_24866[(2)] = null);
(statearr_24844_24866[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (2)))
{var inst_24813 = (state_24836[(7)]);var state_24836__$1 = state_24836;if(cljs.core.truth_(inst_24813))
{var statearr_24845_24867 = state_24836__$1;(statearr_24845_24867[(1)] = (4));
} else
{var statearr_24846_24868 = state_24836__$1;(statearr_24846_24868[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (11)))
{var inst_24827 = cljs.core.async.close_BANG_(ch);var state_24836__$1 = state_24836;var statearr_24847_24869 = state_24836__$1;(statearr_24847_24869[(2)] = inst_24827);
(statearr_24847_24869[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (9)))
{var state_24836__$1 = state_24836;if(cljs.core.truth_(close_QMARK_))
{var statearr_24848_24870 = state_24836__$1;(statearr_24848_24870[(1)] = (11));
} else
{var statearr_24849_24871 = state_24836__$1;(statearr_24849_24871[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (5)))
{var inst_24813 = (state_24836[(7)]);var state_24836__$1 = state_24836;var statearr_24850_24872 = state_24836__$1;(statearr_24850_24872[(2)] = inst_24813);
(statearr_24850_24872[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (10)))
{var inst_24832 = (state_24836[(2)]);var state_24836__$1 = state_24836;var statearr_24851_24873 = state_24836__$1;(statearr_24851_24873[(2)] = inst_24832);
(statearr_24851_24873[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24837 === (8)))
{var inst_24813 = (state_24836[(7)]);var inst_24823 = cljs.core.next(inst_24813);var inst_24813__$1 = inst_24823;var state_24836__$1 = (function (){var statearr_24852 = state_24836;(statearr_24852[(7)] = inst_24813__$1);
return statearr_24852;
})();var statearr_24853_24874 = state_24836__$1;(statearr_24853_24874[(2)] = null);
(statearr_24853_24874[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24857 = [null,null,null,null,null,null,null,null];(statearr_24857[(0)] = state_machine__12278__auto__);
(statearr_24857[(1)] = (1));
return statearr_24857;
});
var state_machine__12278__auto____1 = (function (state_24836){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24836);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object))
{var ex__12281__auto__ = e24858;var statearr_24859_24875 = state_24836;(statearr_24859_24875[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24836);
return cljs.core.constant$keyword$82;
} else
{throw e24858;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24876 = state_24836;
state_24836 = G__24876;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24836){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24860 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24860;
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
cljs.core.async.Mux = (function (){var obj24878 = {};return obj24878;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24882 = x__4277__auto__;return goog.typeOf(G__24882);
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
cljs.core.async.Mult = (function (){var obj24884 = {};return obj24884;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24888 = x__4277__auto__;return goog.typeOf(G__24888);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24892 = x__4277__auto__;return goog.typeOf(G__24892);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24896 = x__4277__auto__;return goog.typeOf(G__24896);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25126 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25126) : cljs.core.atom.call(null,G__25126));
})();var m = (function (){if(typeof cljs.core.async.t25127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25127 = (function (cs,ch,mult,meta25128){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25128 = meta25128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25127.cljs$lang$type = true;
cljs.core.async.t25127.cljs$lang$ctorStr = "cljs.core.async/t25127";
cljs.core.async.t25127.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25127");
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25127.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25130_25355 = self__.cs;var G__25131_25356 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25130_25355,G__25131_25356) : cljs.core.reset_BANG_.call(null,G__25130_25355,G__25131_25356));
return null;
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25129){var self__ = this;
var _25129__$1 = this;return self__.meta25128;
});})(cs))
;
cljs.core.async.t25127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25129,meta25128__$1){var self__ = this;
var _25129__$1 = this;return (new cljs.core.async.t25127(self__.cs,self__.ch,self__.mult,meta25128__$1));
});})(cs))
;
cljs.core.async.__GT_t25127 = ((function (cs){
return (function __GT_t25127(cs__$1,ch__$1,mult__$1,meta25128){return (new cljs.core.async.t25127(cs__$1,ch__$1,mult__$1,meta25128));
});})(cs))
;
}
return (new cljs.core.async.t25127(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25132 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25132) : cljs.core.atom.call(null,G__25132));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25357,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25357,cs,m,dchan,dctr,done){
return (function (state_25263){var state_val_25264 = (state_25263[(1)]);if((state_val_25264 === (7)))
{var inst_25259 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25265_25358 = state_25263__$1;(statearr_25265_25358[(2)] = inst_25259);
(statearr_25265_25358[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (20)))
{var inst_25164 = (state_25263[(7)]);var inst_25174 = cljs.core.first(inst_25164);var inst_25175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25174,(0),null);var inst_25176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25174,(1),null);var state_25263__$1 = (function (){var statearr_25266 = state_25263;(statearr_25266[(8)] = inst_25175);
return statearr_25266;
})();if(cljs.core.truth_(inst_25176))
{var statearr_25267_25359 = state_25263__$1;(statearr_25267_25359[(1)] = (22));
} else
{var statearr_25268_25360 = state_25263__$1;(statearr_25268_25360[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (27)))
{var inst_25135 = (state_25263[(9)]);var inst_25204 = (state_25263[(10)]);var inst_25211 = (state_25263[(11)]);var inst_25206 = (state_25263[(12)]);var inst_25211__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25204,inst_25206);var inst_25212 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25211__$1,inst_25135,done);var state_25263__$1 = (function (){var statearr_25269 = state_25263;(statearr_25269[(11)] = inst_25211__$1);
return statearr_25269;
})();if(cljs.core.truth_(inst_25212))
{var statearr_25270_25361 = state_25263__$1;(statearr_25270_25361[(1)] = (30));
} else
{var statearr_25271_25362 = state_25263__$1;(statearr_25271_25362[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (1)))
{var state_25263__$1 = state_25263;var statearr_25272_25363 = state_25263__$1;(statearr_25272_25363[(2)] = null);
(statearr_25272_25363[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (24)))
{var inst_25164 = (state_25263[(7)]);var inst_25181 = (state_25263[(2)]);var inst_25182 = cljs.core.next(inst_25164);var inst_25144 = inst_25182;var inst_25145 = null;var inst_25146 = (0);var inst_25147 = (0);var state_25263__$1 = (function (){var statearr_25273 = state_25263;(statearr_25273[(13)] = inst_25181);
(statearr_25273[(14)] = inst_25147);
(statearr_25273[(15)] = inst_25146);
(statearr_25273[(16)] = inst_25145);
(statearr_25273[(17)] = inst_25144);
return statearr_25273;
})();var statearr_25274_25364 = state_25263__$1;(statearr_25274_25364[(2)] = null);
(statearr_25274_25364[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (39)))
{var state_25263__$1 = state_25263;var statearr_25278_25365 = state_25263__$1;(statearr_25278_25365[(2)] = null);
(statearr_25278_25365[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (4)))
{var inst_25135 = (state_25263[(9)]);var inst_25135__$1 = (state_25263[(2)]);var inst_25136 = (inst_25135__$1 == null);var state_25263__$1 = (function (){var statearr_25279 = state_25263;(statearr_25279[(9)] = inst_25135__$1);
return statearr_25279;
})();if(cljs.core.truth_(inst_25136))
{var statearr_25280_25366 = state_25263__$1;(statearr_25280_25366[(1)] = (5));
} else
{var statearr_25281_25367 = state_25263__$1;(statearr_25281_25367[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (15)))
{var inst_25147 = (state_25263[(14)]);var inst_25146 = (state_25263[(15)]);var inst_25145 = (state_25263[(16)]);var inst_25144 = (state_25263[(17)]);var inst_25160 = (state_25263[(2)]);var inst_25161 = (inst_25147 + (1));var tmp25275 = inst_25146;var tmp25276 = inst_25145;var tmp25277 = inst_25144;var inst_25144__$1 = tmp25277;var inst_25145__$1 = tmp25276;var inst_25146__$1 = tmp25275;var inst_25147__$1 = inst_25161;var state_25263__$1 = (function (){var statearr_25282 = state_25263;(statearr_25282[(18)] = inst_25160);
(statearr_25282[(14)] = inst_25147__$1);
(statearr_25282[(15)] = inst_25146__$1);
(statearr_25282[(16)] = inst_25145__$1);
(statearr_25282[(17)] = inst_25144__$1);
return statearr_25282;
})();var statearr_25283_25368 = state_25263__$1;(statearr_25283_25368[(2)] = null);
(statearr_25283_25368[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (21)))
{var inst_25185 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25287_25369 = state_25263__$1;(statearr_25287_25369[(2)] = inst_25185);
(statearr_25287_25369[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (31)))
{var inst_25211 = (state_25263[(11)]);var inst_25215 = done(null);var inst_25216 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25211);var state_25263__$1 = (function (){var statearr_25288 = state_25263;(statearr_25288[(19)] = inst_25215);
return statearr_25288;
})();var statearr_25289_25370 = state_25263__$1;(statearr_25289_25370[(2)] = inst_25216);
(statearr_25289_25370[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (32)))
{var inst_25203 = (state_25263[(20)]);var inst_25204 = (state_25263[(10)]);var inst_25205 = (state_25263[(21)]);var inst_25206 = (state_25263[(12)]);var inst_25218 = (state_25263[(2)]);var inst_25219 = (inst_25206 + (1));var tmp25284 = inst_25203;var tmp25285 = inst_25204;var tmp25286 = inst_25205;var inst_25203__$1 = tmp25284;var inst_25204__$1 = tmp25285;var inst_25205__$1 = tmp25286;var inst_25206__$1 = inst_25219;var state_25263__$1 = (function (){var statearr_25290 = state_25263;(statearr_25290[(20)] = inst_25203__$1);
(statearr_25290[(10)] = inst_25204__$1);
(statearr_25290[(22)] = inst_25218);
(statearr_25290[(21)] = inst_25205__$1);
(statearr_25290[(12)] = inst_25206__$1);
return statearr_25290;
})();var statearr_25291_25371 = state_25263__$1;(statearr_25291_25371[(2)] = null);
(statearr_25291_25371[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (40)))
{var inst_25231 = (state_25263[(23)]);var inst_25235 = done(null);var inst_25236 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25231);var state_25263__$1 = (function (){var statearr_25292 = state_25263;(statearr_25292[(24)] = inst_25235);
return statearr_25292;
})();var statearr_25293_25372 = state_25263__$1;(statearr_25293_25372[(2)] = inst_25236);
(statearr_25293_25372[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (33)))
{var inst_25222 = (state_25263[(25)]);var inst_25224 = cljs.core.chunked_seq_QMARK_(inst_25222);var state_25263__$1 = state_25263;if(inst_25224)
{var statearr_25294_25373 = state_25263__$1;(statearr_25294_25373[(1)] = (36));
} else
{var statearr_25295_25374 = state_25263__$1;(statearr_25295_25374[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (13)))
{var inst_25154 = (state_25263[(26)]);var inst_25157 = cljs.core.async.close_BANG_(inst_25154);var state_25263__$1 = state_25263;var statearr_25296_25375 = state_25263__$1;(statearr_25296_25375[(2)] = inst_25157);
(statearr_25296_25375[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (22)))
{var inst_25175 = (state_25263[(8)]);var inst_25178 = cljs.core.async.close_BANG_(inst_25175);var state_25263__$1 = state_25263;var statearr_25297_25376 = state_25263__$1;(statearr_25297_25376[(2)] = inst_25178);
(statearr_25297_25376[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (36)))
{var inst_25222 = (state_25263[(25)]);var inst_25226 = cljs.core.chunk_first(inst_25222);var inst_25227 = cljs.core.chunk_rest(inst_25222);var inst_25228 = cljs.core.count(inst_25226);var inst_25203 = inst_25227;var inst_25204 = inst_25226;var inst_25205 = inst_25228;var inst_25206 = (0);var state_25263__$1 = (function (){var statearr_25298 = state_25263;(statearr_25298[(20)] = inst_25203);
(statearr_25298[(10)] = inst_25204);
(statearr_25298[(21)] = inst_25205);
(statearr_25298[(12)] = inst_25206);
return statearr_25298;
})();var statearr_25299_25377 = state_25263__$1;(statearr_25299_25377[(2)] = null);
(statearr_25299_25377[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (41)))
{var inst_25222 = (state_25263[(25)]);var inst_25238 = (state_25263[(2)]);var inst_25239 = cljs.core.next(inst_25222);var inst_25203 = inst_25239;var inst_25204 = null;var inst_25205 = (0);var inst_25206 = (0);var state_25263__$1 = (function (){var statearr_25300 = state_25263;(statearr_25300[(27)] = inst_25238);
(statearr_25300[(20)] = inst_25203);
(statearr_25300[(10)] = inst_25204);
(statearr_25300[(21)] = inst_25205);
(statearr_25300[(12)] = inst_25206);
return statearr_25300;
})();var statearr_25301_25378 = state_25263__$1;(statearr_25301_25378[(2)] = null);
(statearr_25301_25378[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (43)))
{var state_25263__$1 = state_25263;var statearr_25302_25379 = state_25263__$1;(statearr_25302_25379[(2)] = null);
(statearr_25302_25379[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (29)))
{var inst_25247 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25303_25380 = state_25263__$1;(statearr_25303_25380[(2)] = inst_25247);
(statearr_25303_25380[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (44)))
{var inst_25256 = (state_25263[(2)]);var state_25263__$1 = (function (){var statearr_25304 = state_25263;(statearr_25304[(28)] = inst_25256);
return statearr_25304;
})();var statearr_25305_25381 = state_25263__$1;(statearr_25305_25381[(2)] = null);
(statearr_25305_25381[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (6)))
{var inst_25195 = (state_25263[(29)]);var inst_25194 = (function (){var G__25306 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25306) : cljs.core.deref.call(null,G__25306));
})();var inst_25195__$1 = cljs.core.keys(inst_25194);var inst_25196 = cljs.core.count(inst_25195__$1);var inst_25197 = (function (){var G__25307 = dctr;var G__25308 = inst_25196;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25307,G__25308) : cljs.core.reset_BANG_.call(null,G__25307,G__25308));
})();var inst_25202 = cljs.core.seq(inst_25195__$1);var inst_25203 = inst_25202;var inst_25204 = null;var inst_25205 = (0);var inst_25206 = (0);var state_25263__$1 = (function (){var statearr_25309 = state_25263;(statearr_25309[(20)] = inst_25203);
(statearr_25309[(10)] = inst_25204);
(statearr_25309[(29)] = inst_25195__$1);
(statearr_25309[(30)] = inst_25197);
(statearr_25309[(21)] = inst_25205);
(statearr_25309[(12)] = inst_25206);
return statearr_25309;
})();var statearr_25310_25382 = state_25263__$1;(statearr_25310_25382[(2)] = null);
(statearr_25310_25382[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (28)))
{var inst_25203 = (state_25263[(20)]);var inst_25222 = (state_25263[(25)]);var inst_25222__$1 = cljs.core.seq(inst_25203);var state_25263__$1 = (function (){var statearr_25311 = state_25263;(statearr_25311[(25)] = inst_25222__$1);
return statearr_25311;
})();if(inst_25222__$1)
{var statearr_25312_25383 = state_25263__$1;(statearr_25312_25383[(1)] = (33));
} else
{var statearr_25313_25384 = state_25263__$1;(statearr_25313_25384[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (25)))
{var inst_25205 = (state_25263[(21)]);var inst_25206 = (state_25263[(12)]);var inst_25208 = (inst_25206 < inst_25205);var inst_25209 = inst_25208;var state_25263__$1 = state_25263;if(cljs.core.truth_(inst_25209))
{var statearr_25314_25385 = state_25263__$1;(statearr_25314_25385[(1)] = (27));
} else
{var statearr_25315_25386 = state_25263__$1;(statearr_25315_25386[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (34)))
{var state_25263__$1 = state_25263;var statearr_25316_25387 = state_25263__$1;(statearr_25316_25387[(2)] = null);
(statearr_25316_25387[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (17)))
{var state_25263__$1 = state_25263;var statearr_25317_25388 = state_25263__$1;(statearr_25317_25388[(2)] = null);
(statearr_25317_25388[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (3)))
{var inst_25261 = (state_25263[(2)]);var state_25263__$1 = state_25263;return cljs.core.async.impl.ioc_helpers.return_chan(state_25263__$1,inst_25261);
} else
{if((state_val_25264 === (12)))
{var inst_25190 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25318_25389 = state_25263__$1;(statearr_25318_25389[(2)] = inst_25190);
(statearr_25318_25389[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (2)))
{var state_25263__$1 = state_25263;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25263__$1,(4),ch);
} else
{if((state_val_25264 === (23)))
{var state_25263__$1 = state_25263;var statearr_25319_25390 = state_25263__$1;(statearr_25319_25390[(2)] = null);
(statearr_25319_25390[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (35)))
{var inst_25245 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25320_25391 = state_25263__$1;(statearr_25320_25391[(2)] = inst_25245);
(statearr_25320_25391[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (19)))
{var inst_25164 = (state_25263[(7)]);var inst_25168 = cljs.core.chunk_first(inst_25164);var inst_25169 = cljs.core.chunk_rest(inst_25164);var inst_25170 = cljs.core.count(inst_25168);var inst_25144 = inst_25169;var inst_25145 = inst_25168;var inst_25146 = inst_25170;var inst_25147 = (0);var state_25263__$1 = (function (){var statearr_25321 = state_25263;(statearr_25321[(14)] = inst_25147);
(statearr_25321[(15)] = inst_25146);
(statearr_25321[(16)] = inst_25145);
(statearr_25321[(17)] = inst_25144);
return statearr_25321;
})();var statearr_25322_25392 = state_25263__$1;(statearr_25322_25392[(2)] = null);
(statearr_25322_25392[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (11)))
{var inst_25164 = (state_25263[(7)]);var inst_25144 = (state_25263[(17)]);var inst_25164__$1 = cljs.core.seq(inst_25144);var state_25263__$1 = (function (){var statearr_25323 = state_25263;(statearr_25323[(7)] = inst_25164__$1);
return statearr_25323;
})();if(inst_25164__$1)
{var statearr_25324_25393 = state_25263__$1;(statearr_25324_25393[(1)] = (16));
} else
{var statearr_25325_25394 = state_25263__$1;(statearr_25325_25394[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (9)))
{var inst_25192 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25326_25395 = state_25263__$1;(statearr_25326_25395[(2)] = inst_25192);
(statearr_25326_25395[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (5)))
{var inst_25142 = (function (){var G__25327 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25327) : cljs.core.deref.call(null,G__25327));
})();var inst_25143 = cljs.core.seq(inst_25142);var inst_25144 = inst_25143;var inst_25145 = null;var inst_25146 = (0);var inst_25147 = (0);var state_25263__$1 = (function (){var statearr_25328 = state_25263;(statearr_25328[(14)] = inst_25147);
(statearr_25328[(15)] = inst_25146);
(statearr_25328[(16)] = inst_25145);
(statearr_25328[(17)] = inst_25144);
return statearr_25328;
})();var statearr_25329_25396 = state_25263__$1;(statearr_25329_25396[(2)] = null);
(statearr_25329_25396[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (14)))
{var state_25263__$1 = state_25263;var statearr_25330_25397 = state_25263__$1;(statearr_25330_25397[(2)] = null);
(statearr_25330_25397[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (45)))
{var inst_25253 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25331_25398 = state_25263__$1;(statearr_25331_25398[(2)] = inst_25253);
(statearr_25331_25398[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (26)))
{var inst_25195 = (state_25263[(29)]);var inst_25249 = (state_25263[(2)]);var inst_25250 = cljs.core.seq(inst_25195);var state_25263__$1 = (function (){var statearr_25332 = state_25263;(statearr_25332[(31)] = inst_25249);
return statearr_25332;
})();if(inst_25250)
{var statearr_25333_25399 = state_25263__$1;(statearr_25333_25399[(1)] = (42));
} else
{var statearr_25334_25400 = state_25263__$1;(statearr_25334_25400[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (16)))
{var inst_25164 = (state_25263[(7)]);var inst_25166 = cljs.core.chunked_seq_QMARK_(inst_25164);var state_25263__$1 = state_25263;if(inst_25166)
{var statearr_25335_25401 = state_25263__$1;(statearr_25335_25401[(1)] = (19));
} else
{var statearr_25336_25402 = state_25263__$1;(statearr_25336_25402[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (38)))
{var inst_25242 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25337_25403 = state_25263__$1;(statearr_25337_25403[(2)] = inst_25242);
(statearr_25337_25403[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (30)))
{var state_25263__$1 = state_25263;var statearr_25338_25404 = state_25263__$1;(statearr_25338_25404[(2)] = null);
(statearr_25338_25404[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (10)))
{var inst_25147 = (state_25263[(14)]);var inst_25145 = (state_25263[(16)]);var inst_25153 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25145,inst_25147);var inst_25154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25153,(0),null);var inst_25155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25153,(1),null);var state_25263__$1 = (function (){var statearr_25339 = state_25263;(statearr_25339[(26)] = inst_25154);
return statearr_25339;
})();if(cljs.core.truth_(inst_25155))
{var statearr_25340_25405 = state_25263__$1;(statearr_25340_25405[(1)] = (13));
} else
{var statearr_25341_25406 = state_25263__$1;(statearr_25341_25406[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (18)))
{var inst_25188 = (state_25263[(2)]);var state_25263__$1 = state_25263;var statearr_25342_25407 = state_25263__$1;(statearr_25342_25407[(2)] = inst_25188);
(statearr_25342_25407[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (42)))
{var state_25263__$1 = state_25263;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25263__$1,(45),dchan);
} else
{if((state_val_25264 === (37)))
{var inst_25135 = (state_25263[(9)]);var inst_25231 = (state_25263[(23)]);var inst_25222 = (state_25263[(25)]);var inst_25231__$1 = cljs.core.first(inst_25222);var inst_25232 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25231__$1,inst_25135,done);var state_25263__$1 = (function (){var statearr_25343 = state_25263;(statearr_25343[(23)] = inst_25231__$1);
return statearr_25343;
})();if(cljs.core.truth_(inst_25232))
{var statearr_25344_25408 = state_25263__$1;(statearr_25344_25408[(1)] = (39));
} else
{var statearr_25345_25409 = state_25263__$1;(statearr_25345_25409[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25264 === (8)))
{var inst_25147 = (state_25263[(14)]);var inst_25146 = (state_25263[(15)]);var inst_25149 = (inst_25147 < inst_25146);var inst_25150 = inst_25149;var state_25263__$1 = state_25263;if(cljs.core.truth_(inst_25150))
{var statearr_25346_25410 = state_25263__$1;(statearr_25346_25410[(1)] = (10));
} else
{var statearr_25347_25411 = state_25263__$1;(statearr_25347_25411[(1)] = (11));
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
});})(c__12292__auto___25357,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25357,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25351[(0)] = state_machine__12278__auto__);
(statearr_25351[(1)] = (1));
return statearr_25351;
});
var state_machine__12278__auto____1 = (function (state_25263){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25263);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25352){if((e25352 instanceof Object))
{var ex__12281__auto__ = e25352;var statearr_25353_25412 = state_25263;(statearr_25353_25412[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25263);
return cljs.core.constant$keyword$82;
} else
{throw e25352;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25413 = state_25263;
state_25263 = G__25413;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25263){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25357,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25354 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25357);
return statearr_25354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25357,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25418 = {};return obj25418;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25422 = x__4277__auto__;return goog.typeOf(G__25422);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25426 = x__4277__auto__;return goog.typeOf(G__25426);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25430 = x__4277__auto__;return goog.typeOf(G__25430);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25434 = x__4277__auto__;return goog.typeOf(G__25434);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25438 = x__4277__auto__;return goog.typeOf(G__25438);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25439){var map__25445 = p__25439;var map__25445__$1 = ((cljs.core.seq_QMARK_(map__25445))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25445):map__25445);var opts = map__25445__$1;var statearr_25446_25450 = state;(statearr_25446_25450[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25445,map__25445__$1,opts){
return (function (val){var statearr_25447_25451 = state;(statearr_25447_25451[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25445,map__25445__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25448_25452 = state;(statearr_25448_25452[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25449 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25449) : cljs.core.deref.call(null,G__25449));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25439 = null;if (arguments.length > 3) {
  p__25439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25439);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25453){
var state = cljs.core.first(arglist__25453);
arglist__25453 = cljs.core.next(arglist__25453);
var cont_block = cljs.core.first(arglist__25453);
arglist__25453 = cljs.core.next(arglist__25453);
var ports = cljs.core.first(arglist__25453);
var p__25439 = cljs.core.rest(arglist__25453);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25439);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25587 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25587) : cljs.core.atom.call(null,G__25587));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25588 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25588) : cljs.core.atom.call(null,G__25588));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25589 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25589) : attr.call(null,G__25589));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25590 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25590) : cljs.core.deref.call(null,G__25590));
})();var mode = (function (){var G__25591 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25591) : cljs.core.deref.call(null,G__25591));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25592 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25593){
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
this.meta25593 = meta25593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25592.cljs$lang$type = true;
cljs.core.async.t25592.cljs$lang$ctorStr = "cljs.core.async/t25592";
cljs.core.async.t25592.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25592");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25595_25720 = self__.cs;var G__25596_25721 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25595_25720,G__25596_25721) : cljs.core.reset_BANG_.call(null,G__25595_25720,G__25596_25721));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25597 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25597) : self__.solo_modes.call(null,G__25597));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25598_25722 = self__.solo_mode;var G__25599_25723 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25598_25722,G__25599_25723) : cljs.core.reset_BANG_.call(null,G__25598_25722,G__25599_25723));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25594){var self__ = this;
var _25594__$1 = this;return self__.meta25593;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25594,meta25593__$1){var self__ = this;
var _25594__$1 = this;return (new cljs.core.async.t25592(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25593__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25592 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25592(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25593){return (new cljs.core.async.t25592(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25593));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25592(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25671){var state_val_25672 = (state_25671[(1)]);if((state_val_25672 === (7)))
{var inst_25613 = (state_25671[(7)]);var inst_25618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25613);var state_25671__$1 = state_25671;var statearr_25673_25725 = state_25671__$1;(statearr_25673_25725[(2)] = inst_25618);
(statearr_25673_25725[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (20)))
{var inst_25628 = (state_25671[(8)]);var state_25671__$1 = state_25671;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25671__$1,(23),out,inst_25628);
} else
{if((state_val_25672 === (1)))
{var inst_25603 = (state_25671[(9)]);var inst_25603__$1 = calc_state();var inst_25604 = cljs.core.seq_QMARK_(inst_25603__$1);var state_25671__$1 = (function (){var statearr_25674 = state_25671;(statearr_25674[(9)] = inst_25603__$1);
return statearr_25674;
})();if(inst_25604)
{var statearr_25675_25726 = state_25671__$1;(statearr_25675_25726[(1)] = (2));
} else
{var statearr_25676_25727 = state_25671__$1;(statearr_25676_25727[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (24)))
{var inst_25621 = (state_25671[(10)]);var inst_25613 = inst_25621;var state_25671__$1 = (function (){var statearr_25677 = state_25671;(statearr_25677[(7)] = inst_25613);
return statearr_25677;
})();var statearr_25678_25728 = state_25671__$1;(statearr_25678_25728[(2)] = null);
(statearr_25678_25728[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (4)))
{var inst_25603 = (state_25671[(9)]);var inst_25609 = (state_25671[(2)]);var inst_25610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25609,cljs.core.constant$keyword$96);var inst_25611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25609,cljs.core.constant$keyword$95);var inst_25612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25609,cljs.core.constant$keyword$94);var inst_25613 = inst_25603;var state_25671__$1 = (function (){var statearr_25679 = state_25671;(statearr_25679[(11)] = inst_25612);
(statearr_25679[(7)] = inst_25613);
(statearr_25679[(12)] = inst_25611);
(statearr_25679[(13)] = inst_25610);
return statearr_25679;
})();var statearr_25680_25729 = state_25671__$1;(statearr_25680_25729[(2)] = null);
(statearr_25680_25729[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (15)))
{var state_25671__$1 = state_25671;var statearr_25681_25730 = state_25671__$1;(statearr_25681_25730[(2)] = null);
(statearr_25681_25730[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (21)))
{var inst_25621 = (state_25671[(10)]);var inst_25613 = inst_25621;var state_25671__$1 = (function (){var statearr_25682 = state_25671;(statearr_25682[(7)] = inst_25613);
return statearr_25682;
})();var statearr_25683_25731 = state_25671__$1;(statearr_25683_25731[(2)] = null);
(statearr_25683_25731[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (13)))
{var inst_25667 = (state_25671[(2)]);var state_25671__$1 = state_25671;var statearr_25684_25732 = state_25671__$1;(statearr_25684_25732[(2)] = inst_25667);
(statearr_25684_25732[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (22)))
{var inst_25665 = (state_25671[(2)]);var state_25671__$1 = state_25671;var statearr_25685_25733 = state_25671__$1;(statearr_25685_25733[(2)] = inst_25665);
(statearr_25685_25733[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (6)))
{var inst_25669 = (state_25671[(2)]);var state_25671__$1 = state_25671;return cljs.core.async.impl.ioc_helpers.return_chan(state_25671__$1,inst_25669);
} else
{if((state_val_25672 === (25)))
{var state_25671__$1 = state_25671;var statearr_25686_25734 = state_25671__$1;(statearr_25686_25734[(2)] = null);
(statearr_25686_25734[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (17)))
{var inst_25644 = (state_25671[(14)]);var state_25671__$1 = state_25671;var statearr_25687_25735 = state_25671__$1;(statearr_25687_25735[(2)] = inst_25644);
(statearr_25687_25735[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (3)))
{var inst_25603 = (state_25671[(9)]);var state_25671__$1 = state_25671;var statearr_25688_25736 = state_25671__$1;(statearr_25688_25736[(2)] = inst_25603);
(statearr_25688_25736[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (12)))
{var inst_25644 = (state_25671[(14)]);var inst_25624 = (state_25671[(15)]);var inst_25629 = (state_25671[(16)]);var inst_25644__$1 = (function (){var G__25689 = inst_25629;return (inst_25624.cljs$core$IFn$_invoke$arity$1 ? inst_25624.cljs$core$IFn$_invoke$arity$1(G__25689) : inst_25624.call(null,G__25689));
})();var state_25671__$1 = (function (){var statearr_25690 = state_25671;(statearr_25690[(14)] = inst_25644__$1);
return statearr_25690;
})();if(cljs.core.truth_(inst_25644__$1))
{var statearr_25691_25737 = state_25671__$1;(statearr_25691_25737[(1)] = (17));
} else
{var statearr_25692_25738 = state_25671__$1;(statearr_25692_25738[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (2)))
{var inst_25603 = (state_25671[(9)]);var inst_25606 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25603);var state_25671__$1 = state_25671;var statearr_25693_25739 = state_25671__$1;(statearr_25693_25739[(2)] = inst_25606);
(statearr_25693_25739[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (23)))
{var inst_25656 = (state_25671[(2)]);var state_25671__$1 = state_25671;if(cljs.core.truth_(inst_25656))
{var statearr_25694_25740 = state_25671__$1;(statearr_25694_25740[(1)] = (24));
} else
{var statearr_25695_25741 = state_25671__$1;(statearr_25695_25741[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (19)))
{var inst_25653 = (state_25671[(2)]);var state_25671__$1 = state_25671;if(cljs.core.truth_(inst_25653))
{var statearr_25696_25742 = state_25671__$1;(statearr_25696_25742[(1)] = (20));
} else
{var statearr_25697_25743 = state_25671__$1;(statearr_25697_25743[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (11)))
{var inst_25628 = (state_25671[(8)]);var inst_25634 = (inst_25628 == null);var state_25671__$1 = state_25671;if(cljs.core.truth_(inst_25634))
{var statearr_25698_25744 = state_25671__$1;(statearr_25698_25744[(1)] = (14));
} else
{var statearr_25699_25745 = state_25671__$1;(statearr_25699_25745[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (9)))
{var inst_25621 = (state_25671[(10)]);var inst_25621__$1 = (state_25671[(2)]);var inst_25622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25621__$1,cljs.core.constant$keyword$96);var inst_25623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25621__$1,cljs.core.constant$keyword$95);var inst_25624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25621__$1,cljs.core.constant$keyword$94);var state_25671__$1 = (function (){var statearr_25700 = state_25671;(statearr_25700[(15)] = inst_25624);
(statearr_25700[(17)] = inst_25623);
(statearr_25700[(10)] = inst_25621__$1);
return statearr_25700;
})();return cljs.core.async.ioc_alts_BANG_(state_25671__$1,(10),inst_25622);
} else
{if((state_val_25672 === (5)))
{var inst_25613 = (state_25671[(7)]);var inst_25616 = cljs.core.seq_QMARK_(inst_25613);var state_25671__$1 = state_25671;if(inst_25616)
{var statearr_25701_25746 = state_25671__$1;(statearr_25701_25746[(1)] = (7));
} else
{var statearr_25702_25747 = state_25671__$1;(statearr_25702_25747[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (14)))
{var inst_25629 = (state_25671[(16)]);var inst_25636 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25629);var state_25671__$1 = state_25671;var statearr_25703_25748 = state_25671__$1;(statearr_25703_25748[(2)] = inst_25636);
(statearr_25703_25748[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (26)))
{var inst_25661 = (state_25671[(2)]);var state_25671__$1 = state_25671;var statearr_25704_25749 = state_25671__$1;(statearr_25704_25749[(2)] = inst_25661);
(statearr_25704_25749[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (16)))
{var inst_25639 = (state_25671[(2)]);var inst_25640 = calc_state();var inst_25613 = inst_25640;var state_25671__$1 = (function (){var statearr_25705 = state_25671;(statearr_25705[(7)] = inst_25613);
(statearr_25705[(18)] = inst_25639);
return statearr_25705;
})();var statearr_25706_25750 = state_25671__$1;(statearr_25706_25750[(2)] = null);
(statearr_25706_25750[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (10)))
{var inst_25628 = (state_25671[(8)]);var inst_25629 = (state_25671[(16)]);var inst_25627 = (state_25671[(2)]);var inst_25628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25627,(0),null);var inst_25629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25627,(1),null);var inst_25630 = (inst_25628__$1 == null);var inst_25631 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25629__$1,change);var inst_25632 = (inst_25630) || (inst_25631);var state_25671__$1 = (function (){var statearr_25707 = state_25671;(statearr_25707[(8)] = inst_25628__$1);
(statearr_25707[(16)] = inst_25629__$1);
return statearr_25707;
})();if(cljs.core.truth_(inst_25632))
{var statearr_25708_25751 = state_25671__$1;(statearr_25708_25751[(1)] = (11));
} else
{var statearr_25709_25752 = state_25671__$1;(statearr_25709_25752[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (18)))
{var inst_25624 = (state_25671[(15)]);var inst_25629 = (state_25671[(16)]);var inst_25623 = (state_25671[(17)]);var inst_25648 = cljs.core.empty_QMARK_(inst_25624);var inst_25649 = (function (){var G__25710 = inst_25629;return (inst_25623.cljs$core$IFn$_invoke$arity$1 ? inst_25623.cljs$core$IFn$_invoke$arity$1(G__25710) : inst_25623.call(null,G__25710));
})();var inst_25650 = cljs.core.not(inst_25649);var inst_25651 = (inst_25648) && (inst_25650);var state_25671__$1 = state_25671;var statearr_25711_25753 = state_25671__$1;(statearr_25711_25753[(2)] = inst_25651);
(statearr_25711_25753[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25672 === (8)))
{var inst_25613 = (state_25671[(7)]);var state_25671__$1 = state_25671;var statearr_25712_25754 = state_25671__$1;(statearr_25712_25754[(2)] = inst_25613);
(statearr_25712_25754[(1)] = (9));
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
});})(c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25716[(0)] = state_machine__12278__auto__);
(statearr_25716[(1)] = (1));
return statearr_25716;
});
var state_machine__12278__auto____1 = (function (state_25671){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25671);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object))
{var ex__12281__auto__ = e25717;var statearr_25718_25755 = state_25671;(statearr_25718_25755[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25671);
return cljs.core.constant$keyword$82;
} else
{throw e25717;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25756 = state_25671;
state_25671 = G__25756;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25671){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25719 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25724);
return statearr_25719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25758 = {};return obj25758;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25762 = x__4277__auto__;return goog.typeOf(G__25762);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25766 = x__4277__auto__;return goog.typeOf(G__25766);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25772 = x__4277__auto__;return goog.typeOf(G__25772);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25774 = x__4277__auto__;return goog.typeOf(G__25774);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25913 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25913) : cljs.core.atom.call(null,G__25913));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25915 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25915) : cljs.core.deref.call(null,G__25915));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25775_SHARP_){if(cljs.core.truth_((function (){var G__25916 = topic;return (p1__25775_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25775_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25916) : p1__25775_SHARP_.call(null,G__25916));
})()))
{return p1__25775_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25775_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25917 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25917) : buf_fn.call(null,G__25917));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25918 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25919){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25919 = meta25919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25918.cljs$lang$type = true;
cljs.core.async.t25918.cljs$lang$ctorStr = "cljs.core.async/t25918";
cljs.core.async.t25918.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25918");
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25918.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25921 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25921) : self__.ensure_mult.call(null,G__25921));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25922 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25922) : cljs.core.deref.call(null,G__25922));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25923 = self__.mults;var G__25924 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25923,G__25924) : cljs.core.reset_BANG_.call(null,G__25923,G__25924));
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25920){var self__ = this;
var _25920__$1 = this;return self__.meta25919;
});})(mults,ensure_mult))
;
cljs.core.async.t25918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25920,meta25919__$1){var self__ = this;
var _25920__$1 = this;return (new cljs.core.async.t25918(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25919__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25918 = ((function (mults,ensure_mult){
return (function __GT_t25918(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25919){return (new cljs.core.async.t25918(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25919));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25918(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26047,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26047,mults,ensure_mult,p){
return (function (state_25996){var state_val_25997 = (state_25996[(1)]);if((state_val_25997 === (7)))
{var inst_25992 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_25998_26048 = state_25996__$1;(statearr_25998_26048[(2)] = inst_25992);
(statearr_25998_26048[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (20)))
{var state_25996__$1 = state_25996;var statearr_25999_26049 = state_25996__$1;(statearr_25999_26049[(2)] = null);
(statearr_25999_26049[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (1)))
{var state_25996__$1 = state_25996;var statearr_26000_26050 = state_25996__$1;(statearr_26000_26050[(2)] = null);
(statearr_26000_26050[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (24)))
{var inst_25975 = (state_25996[(7)]);var inst_25984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25975);var state_25996__$1 = state_25996;var statearr_26001_26051 = state_25996__$1;(statearr_26001_26051[(2)] = inst_25984);
(statearr_26001_26051[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (4)))
{var inst_25927 = (state_25996[(8)]);var inst_25927__$1 = (state_25996[(2)]);var inst_25928 = (inst_25927__$1 == null);var state_25996__$1 = (function (){var statearr_26002 = state_25996;(statearr_26002[(8)] = inst_25927__$1);
return statearr_26002;
})();if(cljs.core.truth_(inst_25928))
{var statearr_26003_26052 = state_25996__$1;(statearr_26003_26052[(1)] = (5));
} else
{var statearr_26004_26053 = state_25996__$1;(statearr_26004_26053[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (15)))
{var inst_25969 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_26005_26054 = state_25996__$1;(statearr_26005_26054[(2)] = inst_25969);
(statearr_26005_26054[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (21)))
{var inst_25989 = (state_25996[(2)]);var state_25996__$1 = (function (){var statearr_26006 = state_25996;(statearr_26006[(9)] = inst_25989);
return statearr_26006;
})();var statearr_26007_26055 = state_25996__$1;(statearr_26007_26055[(2)] = null);
(statearr_26007_26055[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (13)))
{var inst_25951 = (state_25996[(10)]);var inst_25953 = cljs.core.chunked_seq_QMARK_(inst_25951);var state_25996__$1 = state_25996;if(inst_25953)
{var statearr_26008_26056 = state_25996__$1;(statearr_26008_26056[(1)] = (16));
} else
{var statearr_26009_26057 = state_25996__$1;(statearr_26009_26057[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (22)))
{var inst_25981 = (state_25996[(2)]);var state_25996__$1 = state_25996;if(cljs.core.truth_(inst_25981))
{var statearr_26010_26058 = state_25996__$1;(statearr_26010_26058[(1)] = (23));
} else
{var statearr_26011_26059 = state_25996__$1;(statearr_26011_26059[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (6)))
{var inst_25927 = (state_25996[(8)]);var inst_25977 = (state_25996[(11)]);var inst_25975 = (state_25996[(7)]);var inst_25975__$1 = (function (){var G__26012 = inst_25927;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26012) : topic_fn.call(null,G__26012));
})();var inst_25976 = (function (){var G__26013 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26013) : cljs.core.deref.call(null,G__26013));
})();var inst_25977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25976,inst_25975__$1);var state_25996__$1 = (function (){var statearr_26014 = state_25996;(statearr_26014[(11)] = inst_25977__$1);
(statearr_26014[(7)] = inst_25975__$1);
return statearr_26014;
})();if(cljs.core.truth_(inst_25977__$1))
{var statearr_26015_26060 = state_25996__$1;(statearr_26015_26060[(1)] = (19));
} else
{var statearr_26016_26061 = state_25996__$1;(statearr_26016_26061[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (25)))
{var inst_25986 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_26017_26062 = state_25996__$1;(statearr_26017_26062[(2)] = inst_25986);
(statearr_26017_26062[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (17)))
{var inst_25951 = (state_25996[(10)]);var inst_25960 = cljs.core.first(inst_25951);var inst_25961 = cljs.core.async.muxch_STAR_(inst_25960);var inst_25962 = cljs.core.async.close_BANG_(inst_25961);var inst_25963 = cljs.core.next(inst_25951);var inst_25937 = inst_25963;var inst_25938 = null;var inst_25939 = (0);var inst_25940 = (0);var state_25996__$1 = (function (){var statearr_26018 = state_25996;(statearr_26018[(12)] = inst_25937);
(statearr_26018[(13)] = inst_25938);
(statearr_26018[(14)] = inst_25962);
(statearr_26018[(15)] = inst_25940);
(statearr_26018[(16)] = inst_25939);
return statearr_26018;
})();var statearr_26019_26063 = state_25996__$1;(statearr_26019_26063[(2)] = null);
(statearr_26019_26063[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (3)))
{var inst_25994 = (state_25996[(2)]);var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.return_chan(state_25996__$1,inst_25994);
} else
{if((state_val_25997 === (12)))
{var inst_25971 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_26020_26064 = state_25996__$1;(statearr_26020_26064[(2)] = inst_25971);
(statearr_26020_26064[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (2)))
{var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25996__$1,(4),ch);
} else
{if((state_val_25997 === (23)))
{var state_25996__$1 = state_25996;var statearr_26021_26065 = state_25996__$1;(statearr_26021_26065[(2)] = null);
(statearr_26021_26065[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (19)))
{var inst_25927 = (state_25996[(8)]);var inst_25977 = (state_25996[(11)]);var inst_25979 = cljs.core.async.muxch_STAR_(inst_25977);var state_25996__$1 = state_25996;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25996__$1,(22),inst_25979,inst_25927);
} else
{if((state_val_25997 === (11)))
{var inst_25937 = (state_25996[(12)]);var inst_25951 = (state_25996[(10)]);var inst_25951__$1 = cljs.core.seq(inst_25937);var state_25996__$1 = (function (){var statearr_26022 = state_25996;(statearr_26022[(10)] = inst_25951__$1);
return statearr_26022;
})();if(inst_25951__$1)
{var statearr_26023_26066 = state_25996__$1;(statearr_26023_26066[(1)] = (13));
} else
{var statearr_26024_26067 = state_25996__$1;(statearr_26024_26067[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (9)))
{var inst_25973 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_26025_26068 = state_25996__$1;(statearr_26025_26068[(2)] = inst_25973);
(statearr_26025_26068[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (5)))
{var inst_25934 = (function (){var G__26026 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26026) : cljs.core.deref.call(null,G__26026));
})();var inst_25935 = cljs.core.vals(inst_25934);var inst_25936 = cljs.core.seq(inst_25935);var inst_25937 = inst_25936;var inst_25938 = null;var inst_25939 = (0);var inst_25940 = (0);var state_25996__$1 = (function (){var statearr_26027 = state_25996;(statearr_26027[(12)] = inst_25937);
(statearr_26027[(13)] = inst_25938);
(statearr_26027[(15)] = inst_25940);
(statearr_26027[(16)] = inst_25939);
return statearr_26027;
})();var statearr_26028_26069 = state_25996__$1;(statearr_26028_26069[(2)] = null);
(statearr_26028_26069[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (14)))
{var state_25996__$1 = state_25996;var statearr_26032_26070 = state_25996__$1;(statearr_26032_26070[(2)] = null);
(statearr_26032_26070[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (16)))
{var inst_25951 = (state_25996[(10)]);var inst_25955 = cljs.core.chunk_first(inst_25951);var inst_25956 = cljs.core.chunk_rest(inst_25951);var inst_25957 = cljs.core.count(inst_25955);var inst_25937 = inst_25956;var inst_25938 = inst_25955;var inst_25939 = inst_25957;var inst_25940 = (0);var state_25996__$1 = (function (){var statearr_26033 = state_25996;(statearr_26033[(12)] = inst_25937);
(statearr_26033[(13)] = inst_25938);
(statearr_26033[(15)] = inst_25940);
(statearr_26033[(16)] = inst_25939);
return statearr_26033;
})();var statearr_26034_26071 = state_25996__$1;(statearr_26034_26071[(2)] = null);
(statearr_26034_26071[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (10)))
{var inst_25937 = (state_25996[(12)]);var inst_25938 = (state_25996[(13)]);var inst_25940 = (state_25996[(15)]);var inst_25939 = (state_25996[(16)]);var inst_25945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25938,inst_25940);var inst_25946 = cljs.core.async.muxch_STAR_(inst_25945);var inst_25947 = cljs.core.async.close_BANG_(inst_25946);var inst_25948 = (inst_25940 + (1));var tmp26029 = inst_25937;var tmp26030 = inst_25938;var tmp26031 = inst_25939;var inst_25937__$1 = tmp26029;var inst_25938__$1 = tmp26030;var inst_25939__$1 = tmp26031;var inst_25940__$1 = inst_25948;var state_25996__$1 = (function (){var statearr_26035 = state_25996;(statearr_26035[(17)] = inst_25947);
(statearr_26035[(12)] = inst_25937__$1);
(statearr_26035[(13)] = inst_25938__$1);
(statearr_26035[(15)] = inst_25940__$1);
(statearr_26035[(16)] = inst_25939__$1);
return statearr_26035;
})();var statearr_26036_26072 = state_25996__$1;(statearr_26036_26072[(2)] = null);
(statearr_26036_26072[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (18)))
{var inst_25966 = (state_25996[(2)]);var state_25996__$1 = state_25996;var statearr_26037_26073 = state_25996__$1;(statearr_26037_26073[(2)] = inst_25966);
(statearr_26037_26073[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25997 === (8)))
{var inst_25940 = (state_25996[(15)]);var inst_25939 = (state_25996[(16)]);var inst_25942 = (inst_25940 < inst_25939);var inst_25943 = inst_25942;var state_25996__$1 = state_25996;if(cljs.core.truth_(inst_25943))
{var statearr_26038_26074 = state_25996__$1;(statearr_26038_26074[(1)] = (10));
} else
{var statearr_26039_26075 = state_25996__$1;(statearr_26039_26075[(1)] = (11));
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
});})(c__12292__auto___26047,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26047,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26043[(0)] = state_machine__12278__auto__);
(statearr_26043[(1)] = (1));
return statearr_26043;
});
var state_machine__12278__auto____1 = (function (state_25996){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25996);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object))
{var ex__12281__auto__ = e26044;var statearr_26045_26076 = state_25996;(statearr_26045_26076[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25996);
return cljs.core.constant$keyword$82;
} else
{throw e26044;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26077 = state_25996;
state_25996 = G__26077;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25996){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26047,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26046 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26047);
return statearr_26046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26047,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26158 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26158) : cljs.core.atom.call(null,G__26158));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26197){var state_val_26198 = (state_26197[(1)]);if((state_val_26198 === (7)))
{var state_26197__$1 = state_26197;var statearr_26199_26232 = state_26197__$1;(statearr_26199_26232[(2)] = null);
(statearr_26199_26232[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (1)))
{var state_26197__$1 = state_26197;var statearr_26200_26233 = state_26197__$1;(statearr_26200_26233[(2)] = null);
(statearr_26200_26233[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (4)))
{var inst_26161 = (state_26197[(7)]);var inst_26163 = (inst_26161 < cnt);var state_26197__$1 = state_26197;if(cljs.core.truth_(inst_26163))
{var statearr_26201_26234 = state_26197__$1;(statearr_26201_26234[(1)] = (6));
} else
{var statearr_26202_26235 = state_26197__$1;(statearr_26202_26235[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (15)))
{var inst_26193 = (state_26197[(2)]);var state_26197__$1 = state_26197;var statearr_26203_26236 = state_26197__$1;(statearr_26203_26236[(2)] = inst_26193);
(statearr_26203_26236[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (13)))
{var inst_26186 = cljs.core.async.close_BANG_(out);var state_26197__$1 = state_26197;var statearr_26204_26237 = state_26197__$1;(statearr_26204_26237[(2)] = inst_26186);
(statearr_26204_26237[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (6)))
{var state_26197__$1 = state_26197;var statearr_26205_26238 = state_26197__$1;(statearr_26205_26238[(2)] = null);
(statearr_26205_26238[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (3)))
{var inst_26195 = (state_26197[(2)]);var state_26197__$1 = state_26197;return cljs.core.async.impl.ioc_helpers.return_chan(state_26197__$1,inst_26195);
} else
{if((state_val_26198 === (12)))
{var inst_26183 = (state_26197[(8)]);var inst_26183__$1 = (state_26197[(2)]);var inst_26184 = cljs.core.some(cljs.core.nil_QMARK_,inst_26183__$1);var state_26197__$1 = (function (){var statearr_26206 = state_26197;(statearr_26206[(8)] = inst_26183__$1);
return statearr_26206;
})();if(cljs.core.truth_(inst_26184))
{var statearr_26207_26239 = state_26197__$1;(statearr_26207_26239[(1)] = (13));
} else
{var statearr_26208_26240 = state_26197__$1;(statearr_26208_26240[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (2)))
{var inst_26160 = (function (){var G__26209 = dctr;var G__26210 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26209,G__26210) : cljs.core.reset_BANG_.call(null,G__26209,G__26210));
})();var inst_26161 = (0);var state_26197__$1 = (function (){var statearr_26211 = state_26197;(statearr_26211[(7)] = inst_26161);
(statearr_26211[(9)] = inst_26160);
return statearr_26211;
})();var statearr_26212_26241 = state_26197__$1;(statearr_26212_26241[(2)] = null);
(statearr_26212_26241[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (11)))
{var inst_26161 = (state_26197[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26197,(10),Object,null,(9));var inst_26170 = (function (){var G__26213 = inst_26161;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26213) : chs__$1.call(null,G__26213));
})();var inst_26171 = (function (){var G__26214 = inst_26161;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26214) : done.call(null,G__26214));
})();var inst_26172 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26170,inst_26171);var state_26197__$1 = state_26197;var statearr_26215_26242 = state_26197__$1;(statearr_26215_26242[(2)] = inst_26172);
cljs.core.async.impl.ioc_helpers.process_exception(state_26197__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (9)))
{var inst_26161 = (state_26197[(7)]);var inst_26174 = (state_26197[(2)]);var inst_26175 = (inst_26161 + (1));var inst_26161__$1 = inst_26175;var state_26197__$1 = (function (){var statearr_26216 = state_26197;(statearr_26216[(7)] = inst_26161__$1);
(statearr_26216[(10)] = inst_26174);
return statearr_26216;
})();var statearr_26217_26243 = state_26197__$1;(statearr_26217_26243[(2)] = null);
(statearr_26217_26243[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (5)))
{var inst_26181 = (state_26197[(2)]);var state_26197__$1 = (function (){var statearr_26218 = state_26197;(statearr_26218[(11)] = inst_26181);
return statearr_26218;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26197__$1,(12),dchan);
} else
{if((state_val_26198 === (14)))
{var inst_26183 = (state_26197[(8)]);var inst_26188 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26183);var state_26197__$1 = state_26197;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26197__$1,(16),out,inst_26188);
} else
{if((state_val_26198 === (16)))
{var inst_26190 = (state_26197[(2)]);var state_26197__$1 = (function (){var statearr_26219 = state_26197;(statearr_26219[(12)] = inst_26190);
return statearr_26219;
})();var statearr_26220_26244 = state_26197__$1;(statearr_26220_26244[(2)] = null);
(statearr_26220_26244[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (10)))
{var inst_26165 = (state_26197[(2)]);var inst_26166 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26197__$1 = (function (){var statearr_26221 = state_26197;(statearr_26221[(13)] = inst_26165);
return statearr_26221;
})();var statearr_26222_26245 = state_26197__$1;(statearr_26222_26245[(2)] = inst_26166);
cljs.core.async.impl.ioc_helpers.process_exception(state_26197__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26198 === (8)))
{var inst_26179 = (state_26197[(2)]);var state_26197__$1 = state_26197;var statearr_26223_26246 = state_26197__$1;(statearr_26223_26246[(2)] = inst_26179);
(statearr_26223_26246[(1)] = (5));
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
});})(c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26227[(0)] = state_machine__12278__auto__);
(statearr_26227[(1)] = (1));
return statearr_26227;
});
var state_machine__12278__auto____1 = (function (state_26197){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26197);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object))
{var ex__12281__auto__ = e26228;var statearr_26229_26247 = state_26197;(statearr_26229_26247[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26197);
return cljs.core.constant$keyword$82;
} else
{throw e26228;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26248 = state_26197;
state_26197 = G__26248;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26197){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26230 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26231);
return statearr_26230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26231,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26358,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26358,out){
return (function (state_26334){var state_val_26335 = (state_26334[(1)]);if((state_val_26335 === (7)))
{var inst_26314 = (state_26334[(7)]);var inst_26313 = (state_26334[(8)]);var inst_26313__$1 = (state_26334[(2)]);var inst_26314__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26313__$1,(0),null);var inst_26315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26313__$1,(1),null);var inst_26316 = (inst_26314__$1 == null);var state_26334__$1 = (function (){var statearr_26336 = state_26334;(statearr_26336[(7)] = inst_26314__$1);
(statearr_26336[(9)] = inst_26315);
(statearr_26336[(8)] = inst_26313__$1);
return statearr_26336;
})();if(cljs.core.truth_(inst_26316))
{var statearr_26337_26359 = state_26334__$1;(statearr_26337_26359[(1)] = (8));
} else
{var statearr_26338_26360 = state_26334__$1;(statearr_26338_26360[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (1)))
{var inst_26305 = cljs.core.vec(chs);var inst_26306 = inst_26305;var state_26334__$1 = (function (){var statearr_26339 = state_26334;(statearr_26339[(10)] = inst_26306);
return statearr_26339;
})();var statearr_26340_26361 = state_26334__$1;(statearr_26340_26361[(2)] = null);
(statearr_26340_26361[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (4)))
{var inst_26306 = (state_26334[(10)]);var state_26334__$1 = state_26334;return cljs.core.async.ioc_alts_BANG_(state_26334__$1,(7),inst_26306);
} else
{if((state_val_26335 === (6)))
{var inst_26330 = (state_26334[(2)]);var state_26334__$1 = state_26334;var statearr_26341_26362 = state_26334__$1;(statearr_26341_26362[(2)] = inst_26330);
(statearr_26341_26362[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (3)))
{var inst_26332 = (state_26334[(2)]);var state_26334__$1 = state_26334;return cljs.core.async.impl.ioc_helpers.return_chan(state_26334__$1,inst_26332);
} else
{if((state_val_26335 === (2)))
{var inst_26306 = (state_26334[(10)]);var inst_26308 = cljs.core.count(inst_26306);var inst_26309 = (inst_26308 > (0));var state_26334__$1 = state_26334;if(cljs.core.truth_(inst_26309))
{var statearr_26343_26363 = state_26334__$1;(statearr_26343_26363[(1)] = (4));
} else
{var statearr_26344_26364 = state_26334__$1;(statearr_26344_26364[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (11)))
{var inst_26306 = (state_26334[(10)]);var inst_26323 = (state_26334[(2)]);var tmp26342 = inst_26306;var inst_26306__$1 = tmp26342;var state_26334__$1 = (function (){var statearr_26345 = state_26334;(statearr_26345[(10)] = inst_26306__$1);
(statearr_26345[(11)] = inst_26323);
return statearr_26345;
})();var statearr_26346_26365 = state_26334__$1;(statearr_26346_26365[(2)] = null);
(statearr_26346_26365[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (9)))
{var inst_26314 = (state_26334[(7)]);var state_26334__$1 = state_26334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26334__$1,(11),out,inst_26314);
} else
{if((state_val_26335 === (5)))
{var inst_26328 = cljs.core.async.close_BANG_(out);var state_26334__$1 = state_26334;var statearr_26347_26366 = state_26334__$1;(statearr_26347_26366[(2)] = inst_26328);
(statearr_26347_26366[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (10)))
{var inst_26326 = (state_26334[(2)]);var state_26334__$1 = state_26334;var statearr_26348_26367 = state_26334__$1;(statearr_26348_26367[(2)] = inst_26326);
(statearr_26348_26367[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26335 === (8)))
{var inst_26314 = (state_26334[(7)]);var inst_26306 = (state_26334[(10)]);var inst_26315 = (state_26334[(9)]);var inst_26313 = (state_26334[(8)]);var inst_26318 = (function (){var c = inst_26315;var v = inst_26314;var vec__26311 = inst_26313;var cs = inst_26306;return ((function (c,v,vec__26311,cs,inst_26314,inst_26306,inst_26315,inst_26313,state_val_26335,c__12292__auto___26358,out){
return (function (p1__26249_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26249_SHARP_);
});
;})(c,v,vec__26311,cs,inst_26314,inst_26306,inst_26315,inst_26313,state_val_26335,c__12292__auto___26358,out))
})();var inst_26319 = cljs.core.filterv(inst_26318,inst_26306);var inst_26306__$1 = inst_26319;var state_26334__$1 = (function (){var statearr_26349 = state_26334;(statearr_26349[(10)] = inst_26306__$1);
return statearr_26349;
})();var statearr_26350_26368 = state_26334__$1;(statearr_26350_26368[(2)] = null);
(statearr_26350_26368[(1)] = (2));
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
});})(c__12292__auto___26358,out))
;return ((function (switch__12277__auto__,c__12292__auto___26358,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26354[(0)] = state_machine__12278__auto__);
(statearr_26354[(1)] = (1));
return statearr_26354;
});
var state_machine__12278__auto____1 = (function (state_26334){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26334);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26355){if((e26355 instanceof Object))
{var ex__12281__auto__ = e26355;var statearr_26356_26369 = state_26334;(statearr_26356_26369[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26334);
return cljs.core.constant$keyword$82;
} else
{throw e26355;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26370 = state_26334;
state_26334 = G__26370;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26334){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26358,out))
})();var state__12294__auto__ = (function (){var statearr_26357 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26358);
return statearr_26357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26358,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26466,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26466,out){
return (function (state_26443){var state_val_26444 = (state_26443[(1)]);if((state_val_26444 === (7)))
{var inst_26425 = (state_26443[(7)]);var inst_26425__$1 = (state_26443[(2)]);var inst_26426 = (inst_26425__$1 == null);var inst_26427 = cljs.core.not(inst_26426);var state_26443__$1 = (function (){var statearr_26445 = state_26443;(statearr_26445[(7)] = inst_26425__$1);
return statearr_26445;
})();if(inst_26427)
{var statearr_26446_26467 = state_26443__$1;(statearr_26446_26467[(1)] = (8));
} else
{var statearr_26447_26468 = state_26443__$1;(statearr_26447_26468[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (1)))
{var inst_26420 = (0);var state_26443__$1 = (function (){var statearr_26448 = state_26443;(statearr_26448[(8)] = inst_26420);
return statearr_26448;
})();var statearr_26449_26469 = state_26443__$1;(statearr_26449_26469[(2)] = null);
(statearr_26449_26469[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (4)))
{var state_26443__$1 = state_26443;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26443__$1,(7),ch);
} else
{if((state_val_26444 === (6)))
{var inst_26438 = (state_26443[(2)]);var state_26443__$1 = state_26443;var statearr_26450_26470 = state_26443__$1;(statearr_26450_26470[(2)] = inst_26438);
(statearr_26450_26470[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (3)))
{var inst_26440 = (state_26443[(2)]);var inst_26441 = cljs.core.async.close_BANG_(out);var state_26443__$1 = (function (){var statearr_26451 = state_26443;(statearr_26451[(9)] = inst_26440);
return statearr_26451;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26443__$1,inst_26441);
} else
{if((state_val_26444 === (2)))
{var inst_26420 = (state_26443[(8)]);var inst_26422 = (inst_26420 < n);var state_26443__$1 = state_26443;if(cljs.core.truth_(inst_26422))
{var statearr_26452_26471 = state_26443__$1;(statearr_26452_26471[(1)] = (4));
} else
{var statearr_26453_26472 = state_26443__$1;(statearr_26453_26472[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (11)))
{var inst_26420 = (state_26443[(8)]);var inst_26430 = (state_26443[(2)]);var inst_26431 = (inst_26420 + (1));var inst_26420__$1 = inst_26431;var state_26443__$1 = (function (){var statearr_26454 = state_26443;(statearr_26454[(10)] = inst_26430);
(statearr_26454[(8)] = inst_26420__$1);
return statearr_26454;
})();var statearr_26455_26473 = state_26443__$1;(statearr_26455_26473[(2)] = null);
(statearr_26455_26473[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (9)))
{var state_26443__$1 = state_26443;var statearr_26456_26474 = state_26443__$1;(statearr_26456_26474[(2)] = null);
(statearr_26456_26474[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (5)))
{var state_26443__$1 = state_26443;var statearr_26457_26475 = state_26443__$1;(statearr_26457_26475[(2)] = null);
(statearr_26457_26475[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (10)))
{var inst_26435 = (state_26443[(2)]);var state_26443__$1 = state_26443;var statearr_26458_26476 = state_26443__$1;(statearr_26458_26476[(2)] = inst_26435);
(statearr_26458_26476[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26444 === (8)))
{var inst_26425 = (state_26443[(7)]);var state_26443__$1 = state_26443;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26443__$1,(11),out,inst_26425);
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
});})(c__12292__auto___26466,out))
;return ((function (switch__12277__auto__,c__12292__auto___26466,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26462 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26462[(0)] = state_machine__12278__auto__);
(statearr_26462[(1)] = (1));
return statearr_26462;
});
var state_machine__12278__auto____1 = (function (state_26443){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26443);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26463){if((e26463 instanceof Object))
{var ex__12281__auto__ = e26463;var statearr_26464_26477 = state_26443;(statearr_26464_26477[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26443);
return cljs.core.constant$keyword$82;
} else
{throw e26463;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26478 = state_26443;
state_26443 = G__26478;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26443){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26466,out))
})();var state__12294__auto__ = (function (){var statearr_26465 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26466);
return statearr_26465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26466,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26491 = (function (ch,f,map_LT_,meta26492){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26492 = meta26492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26491.cljs$lang$type = true;
cljs.core.async.t26491.cljs$lang$ctorStr = "cljs.core.async/t26491";
cljs.core.async.t26491.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26491");
});
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26494 = (function (fn1,_,meta26492,ch,f,map_LT_,meta26495){
this.fn1 = fn1;
this._ = _;
this.meta26492 = meta26492;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26495 = meta26495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26494.cljs$lang$type = true;
cljs.core.async.t26494.cljs$lang$ctorStr = "cljs.core.async/t26494";
cljs.core.async.t26494.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26494");
});})(___$1))
;
cljs.core.async.t26494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26479_SHARP_){var G__26497 = (((p1__26479_SHARP_ == null))?null:(function (){var G__26498 = p1__26479_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26498) : self__.f.call(null,G__26498));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26497) : f1.call(null,G__26497));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26496){var self__ = this;
var _26496__$1 = this;return self__.meta26495;
});})(___$1))
;
cljs.core.async.t26494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26496,meta26495__$1){var self__ = this;
var _26496__$1 = this;return (new cljs.core.async.t26494(self__.fn1,self__._,self__.meta26492,self__.ch,self__.f,self__.map_LT_,meta26495__$1));
});})(___$1))
;
cljs.core.async.__GT_t26494 = ((function (___$1){
return (function __GT_t26494(fn1__$1,___$2,meta26492__$1,ch__$2,f__$2,map_LT___$2,meta26495){return (new cljs.core.async.t26494(fn1__$1,___$2,meta26492__$1,ch__$2,f__$2,map_LT___$2,meta26495));
});})(___$1))
;
}
return (new cljs.core.async.t26494(fn1,___$1,self__.meta26492,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26499 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26499) : cljs.core.deref.call(null,G__26499));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26500 = (function (){var G__26501 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26501) : cljs.core.deref.call(null,G__26501));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26500) : self__.f.call(null,G__26500));
})());
} else
{return ret;
}
});
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26493){var self__ = this;
var _26493__$1 = this;return self__.meta26492;
});
cljs.core.async.t26491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26493,meta26492__$1){var self__ = this;
var _26493__$1 = this;return (new cljs.core.async.t26491(self__.ch,self__.f,self__.map_LT_,meta26492__$1));
});
cljs.core.async.__GT_t26491 = (function __GT_t26491(ch__$1,f__$1,map_LT___$1,meta26492){return (new cljs.core.async.t26491(ch__$1,f__$1,map_LT___$1,meta26492));
});
}
return (new cljs.core.async.t26491(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26506 = (function (ch,f,map_GT_,meta26507){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26507 = meta26507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26506.cljs$lang$type = true;
cljs.core.async.t26506.cljs$lang$ctorStr = "cljs.core.async/t26506";
cljs.core.async.t26506.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26506");
});
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26509 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26509) : self__.f.call(null,G__26509));
})(),fn1);
});
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26506.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26508){var self__ = this;
var _26508__$1 = this;return self__.meta26507;
});
cljs.core.async.t26506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26508,meta26507__$1){var self__ = this;
var _26508__$1 = this;return (new cljs.core.async.t26506(self__.ch,self__.f,self__.map_GT_,meta26507__$1));
});
cljs.core.async.__GT_t26506 = (function __GT_t26506(ch__$1,f__$1,map_GT___$1,meta26507){return (new cljs.core.async.t26506(ch__$1,f__$1,map_GT___$1,meta26507));
});
}
return (new cljs.core.async.t26506(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26514 = (function (ch,p,filter_GT_,meta26515){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
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
var ___$1 = this;if(cljs.core.truth_((function (){var G__26517 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26517) : self__.p.call(null,G__26517));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26516){var self__ = this;
var _26516__$1 = this;return self__.meta26515;
});
cljs.core.async.t26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26516,meta26515__$1){var self__ = this;
var _26516__$1 = this;return (new cljs.core.async.t26514(self__.ch,self__.p,self__.filter_GT_,meta26515__$1));
});
cljs.core.async.__GT_t26514 = (function __GT_t26514(ch__$1,p__$1,filter_GT___$1,meta26515){return (new cljs.core.async.t26514(ch__$1,p__$1,filter_GT___$1,meta26515));
});
}
return (new cljs.core.async.t26514(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26605,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26605,out){
return (function (state_26583){var state_val_26584 = (state_26583[(1)]);if((state_val_26584 === (7)))
{var inst_26579 = (state_26583[(2)]);var state_26583__$1 = state_26583;var statearr_26585_26606 = state_26583__$1;(statearr_26585_26606[(2)] = inst_26579);
(statearr_26585_26606[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (1)))
{var state_26583__$1 = state_26583;var statearr_26586_26607 = state_26583__$1;(statearr_26586_26607[(2)] = null);
(statearr_26586_26607[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (4)))
{var inst_26565 = (state_26583[(7)]);var inst_26565__$1 = (state_26583[(2)]);var inst_26566 = (inst_26565__$1 == null);var state_26583__$1 = (function (){var statearr_26587 = state_26583;(statearr_26587[(7)] = inst_26565__$1);
return statearr_26587;
})();if(cljs.core.truth_(inst_26566))
{var statearr_26588_26608 = state_26583__$1;(statearr_26588_26608[(1)] = (5));
} else
{var statearr_26589_26609 = state_26583__$1;(statearr_26589_26609[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (6)))
{var inst_26565 = (state_26583[(7)]);var inst_26570 = (function (){var G__26590 = inst_26565;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26590) : p.call(null,G__26590));
})();var state_26583__$1 = state_26583;if(cljs.core.truth_(inst_26570))
{var statearr_26591_26610 = state_26583__$1;(statearr_26591_26610[(1)] = (8));
} else
{var statearr_26592_26611 = state_26583__$1;(statearr_26592_26611[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (3)))
{var inst_26581 = (state_26583[(2)]);var state_26583__$1 = state_26583;return cljs.core.async.impl.ioc_helpers.return_chan(state_26583__$1,inst_26581);
} else
{if((state_val_26584 === (2)))
{var state_26583__$1 = state_26583;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26583__$1,(4),ch);
} else
{if((state_val_26584 === (11)))
{var inst_26573 = (state_26583[(2)]);var state_26583__$1 = state_26583;var statearr_26593_26612 = state_26583__$1;(statearr_26593_26612[(2)] = inst_26573);
(statearr_26593_26612[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (9)))
{var state_26583__$1 = state_26583;var statearr_26594_26613 = state_26583__$1;(statearr_26594_26613[(2)] = null);
(statearr_26594_26613[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (5)))
{var inst_26568 = cljs.core.async.close_BANG_(out);var state_26583__$1 = state_26583;var statearr_26595_26614 = state_26583__$1;(statearr_26595_26614[(2)] = inst_26568);
(statearr_26595_26614[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (10)))
{var inst_26576 = (state_26583[(2)]);var state_26583__$1 = (function (){var statearr_26596 = state_26583;(statearr_26596[(8)] = inst_26576);
return statearr_26596;
})();var statearr_26597_26615 = state_26583__$1;(statearr_26597_26615[(2)] = null);
(statearr_26597_26615[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26584 === (8)))
{var inst_26565 = (state_26583[(7)]);var state_26583__$1 = state_26583;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26583__$1,(11),out,inst_26565);
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
});})(c__12292__auto___26605,out))
;return ((function (switch__12277__auto__,c__12292__auto___26605,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26601 = [null,null,null,null,null,null,null,null,null];(statearr_26601[(0)] = state_machine__12278__auto__);
(statearr_26601[(1)] = (1));
return statearr_26601;
});
var state_machine__12278__auto____1 = (function (state_26583){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26583);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26602){if((e26602 instanceof Object))
{var ex__12281__auto__ = e26602;var statearr_26603_26616 = state_26583;(statearr_26603_26616[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26583);
return cljs.core.constant$keyword$82;
} else
{throw e26602;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26617 = state_26583;
state_26583 = G__26617;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26583){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26605,out))
})();var state__12294__auto__ = (function (){var statearr_26604 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26605);
return statearr_26604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26605,out))
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
return (function (state_26787){var state_val_26788 = (state_26787[(1)]);if((state_val_26788 === (7)))
{var inst_26783 = (state_26787[(2)]);var state_26787__$1 = state_26787;var statearr_26789_26831 = state_26787__$1;(statearr_26789_26831[(2)] = inst_26783);
(statearr_26789_26831[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (20)))
{var inst_26753 = (state_26787[(7)]);var inst_26764 = (state_26787[(2)]);var inst_26765 = cljs.core.next(inst_26753);var inst_26739 = inst_26765;var inst_26740 = null;var inst_26741 = (0);var inst_26742 = (0);var state_26787__$1 = (function (){var statearr_26790 = state_26787;(statearr_26790[(8)] = inst_26741);
(statearr_26790[(9)] = inst_26740);
(statearr_26790[(10)] = inst_26742);
(statearr_26790[(11)] = inst_26739);
(statearr_26790[(12)] = inst_26764);
return statearr_26790;
})();var statearr_26791_26832 = state_26787__$1;(statearr_26791_26832[(2)] = null);
(statearr_26791_26832[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (1)))
{var state_26787__$1 = state_26787;var statearr_26792_26833 = state_26787__$1;(statearr_26792_26833[(2)] = null);
(statearr_26792_26833[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (4)))
{var inst_26728 = (state_26787[(13)]);var inst_26728__$1 = (state_26787[(2)]);var inst_26729 = (inst_26728__$1 == null);var state_26787__$1 = (function (){var statearr_26793 = state_26787;(statearr_26793[(13)] = inst_26728__$1);
return statearr_26793;
})();if(cljs.core.truth_(inst_26729))
{var statearr_26794_26834 = state_26787__$1;(statearr_26794_26834[(1)] = (5));
} else
{var statearr_26795_26835 = state_26787__$1;(statearr_26795_26835[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (15)))
{var state_26787__$1 = state_26787;var statearr_26799_26836 = state_26787__$1;(statearr_26799_26836[(2)] = null);
(statearr_26799_26836[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (21)))
{var state_26787__$1 = state_26787;var statearr_26800_26837 = state_26787__$1;(statearr_26800_26837[(2)] = null);
(statearr_26800_26837[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (13)))
{var inst_26741 = (state_26787[(8)]);var inst_26740 = (state_26787[(9)]);var inst_26742 = (state_26787[(10)]);var inst_26739 = (state_26787[(11)]);var inst_26749 = (state_26787[(2)]);var inst_26750 = (inst_26742 + (1));var tmp26796 = inst_26741;var tmp26797 = inst_26740;var tmp26798 = inst_26739;var inst_26739__$1 = tmp26798;var inst_26740__$1 = tmp26797;var inst_26741__$1 = tmp26796;var inst_26742__$1 = inst_26750;var state_26787__$1 = (function (){var statearr_26801 = state_26787;(statearr_26801[(8)] = inst_26741__$1);
(statearr_26801[(9)] = inst_26740__$1);
(statearr_26801[(10)] = inst_26742__$1);
(statearr_26801[(11)] = inst_26739__$1);
(statearr_26801[(14)] = inst_26749);
return statearr_26801;
})();var statearr_26802_26838 = state_26787__$1;(statearr_26802_26838[(2)] = null);
(statearr_26802_26838[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (22)))
{var state_26787__$1 = state_26787;var statearr_26803_26839 = state_26787__$1;(statearr_26803_26839[(2)] = null);
(statearr_26803_26839[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (6)))
{var inst_26728 = (state_26787[(13)]);var inst_26737 = (function (){var G__26804 = inst_26728;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26804) : f.call(null,G__26804));
})();var inst_26738 = cljs.core.seq(inst_26737);var inst_26739 = inst_26738;var inst_26740 = null;var inst_26741 = (0);var inst_26742 = (0);var state_26787__$1 = (function (){var statearr_26805 = state_26787;(statearr_26805[(8)] = inst_26741);
(statearr_26805[(9)] = inst_26740);
(statearr_26805[(10)] = inst_26742);
(statearr_26805[(11)] = inst_26739);
return statearr_26805;
})();var statearr_26806_26840 = state_26787__$1;(statearr_26806_26840[(2)] = null);
(statearr_26806_26840[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (17)))
{var inst_26753 = (state_26787[(7)]);var inst_26757 = cljs.core.chunk_first(inst_26753);var inst_26758 = cljs.core.chunk_rest(inst_26753);var inst_26759 = cljs.core.count(inst_26757);var inst_26739 = inst_26758;var inst_26740 = inst_26757;var inst_26741 = inst_26759;var inst_26742 = (0);var state_26787__$1 = (function (){var statearr_26807 = state_26787;(statearr_26807[(8)] = inst_26741);
(statearr_26807[(9)] = inst_26740);
(statearr_26807[(10)] = inst_26742);
(statearr_26807[(11)] = inst_26739);
return statearr_26807;
})();var statearr_26808_26841 = state_26787__$1;(statearr_26808_26841[(2)] = null);
(statearr_26808_26841[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (3)))
{var inst_26785 = (state_26787[(2)]);var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.return_chan(state_26787__$1,inst_26785);
} else
{if((state_val_26788 === (12)))
{var inst_26773 = (state_26787[(2)]);var state_26787__$1 = state_26787;var statearr_26809_26842 = state_26787__$1;(statearr_26809_26842[(2)] = inst_26773);
(statearr_26809_26842[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (2)))
{var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26787__$1,(4),in$);
} else
{if((state_val_26788 === (23)))
{var inst_26781 = (state_26787[(2)]);var state_26787__$1 = state_26787;var statearr_26810_26843 = state_26787__$1;(statearr_26810_26843[(2)] = inst_26781);
(statearr_26810_26843[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (19)))
{var inst_26768 = (state_26787[(2)]);var state_26787__$1 = state_26787;var statearr_26811_26844 = state_26787__$1;(statearr_26811_26844[(2)] = inst_26768);
(statearr_26811_26844[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (11)))
{var inst_26739 = (state_26787[(11)]);var inst_26753 = (state_26787[(7)]);var inst_26753__$1 = cljs.core.seq(inst_26739);var state_26787__$1 = (function (){var statearr_26812 = state_26787;(statearr_26812[(7)] = inst_26753__$1);
return statearr_26812;
})();if(inst_26753__$1)
{var statearr_26813_26845 = state_26787__$1;(statearr_26813_26845[(1)] = (14));
} else
{var statearr_26814_26846 = state_26787__$1;(statearr_26814_26846[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (9)))
{var inst_26775 = (state_26787[(2)]);var inst_26776 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26787__$1 = (function (){var statearr_26815 = state_26787;(statearr_26815[(15)] = inst_26775);
return statearr_26815;
})();if(cljs.core.truth_(inst_26776))
{var statearr_26816_26847 = state_26787__$1;(statearr_26816_26847[(1)] = (21));
} else
{var statearr_26817_26848 = state_26787__$1;(statearr_26817_26848[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (5)))
{var inst_26731 = cljs.core.async.close_BANG_(out);var state_26787__$1 = state_26787;var statearr_26818_26849 = state_26787__$1;(statearr_26818_26849[(2)] = inst_26731);
(statearr_26818_26849[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (14)))
{var inst_26753 = (state_26787[(7)]);var inst_26755 = cljs.core.chunked_seq_QMARK_(inst_26753);var state_26787__$1 = state_26787;if(inst_26755)
{var statearr_26819_26850 = state_26787__$1;(statearr_26819_26850[(1)] = (17));
} else
{var statearr_26820_26851 = state_26787__$1;(statearr_26820_26851[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (16)))
{var inst_26771 = (state_26787[(2)]);var state_26787__$1 = state_26787;var statearr_26821_26852 = state_26787__$1;(statearr_26821_26852[(2)] = inst_26771);
(statearr_26821_26852[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26788 === (10)))
{var inst_26740 = (state_26787[(9)]);var inst_26742 = (state_26787[(10)]);var inst_26747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26740,inst_26742);var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26787__$1,(13),out,inst_26747);
} else
{if((state_val_26788 === (18)))
{var inst_26753 = (state_26787[(7)]);var inst_26762 = cljs.core.first(inst_26753);var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26787__$1,(20),out,inst_26762);
} else
{if((state_val_26788 === (8)))
{var inst_26741 = (state_26787[(8)]);var inst_26742 = (state_26787[(10)]);var inst_26744 = (inst_26742 < inst_26741);var inst_26745 = inst_26744;var state_26787__$1 = state_26787;if(cljs.core.truth_(inst_26745))
{var statearr_26822_26853 = state_26787__$1;(statearr_26822_26853[(1)] = (10));
} else
{var statearr_26823_26854 = state_26787__$1;(statearr_26823_26854[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26827[(0)] = state_machine__12278__auto__);
(statearr_26827[(1)] = (1));
return statearr_26827;
});
var state_machine__12278__auto____1 = (function (state_26787){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26787);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26828){if((e26828 instanceof Object))
{var ex__12281__auto__ = e26828;var statearr_26829_26855 = state_26787;(statearr_26829_26855[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26787);
return cljs.core.constant$keyword$82;
} else
{throw e26828;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26856 = state_26787;
state_26787 = G__26856;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26830 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26830;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26961,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26961,out){
return (function (state_26936){var state_val_26937 = (state_26936[(1)]);if((state_val_26937 === (7)))
{var inst_26931 = (state_26936[(2)]);var state_26936__$1 = state_26936;var statearr_26938_26962 = state_26936__$1;(statearr_26938_26962[(2)] = inst_26931);
(statearr_26938_26962[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (1)))
{var inst_26913 = null;var state_26936__$1 = (function (){var statearr_26939 = state_26936;(statearr_26939[(7)] = inst_26913);
return statearr_26939;
})();var statearr_26940_26963 = state_26936__$1;(statearr_26940_26963[(2)] = null);
(statearr_26940_26963[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (4)))
{var inst_26916 = (state_26936[(8)]);var inst_26916__$1 = (state_26936[(2)]);var inst_26917 = (inst_26916__$1 == null);var inst_26918 = cljs.core.not(inst_26917);var state_26936__$1 = (function (){var statearr_26941 = state_26936;(statearr_26941[(8)] = inst_26916__$1);
return statearr_26941;
})();if(inst_26918)
{var statearr_26942_26964 = state_26936__$1;(statearr_26942_26964[(1)] = (5));
} else
{var statearr_26943_26965 = state_26936__$1;(statearr_26943_26965[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (6)))
{var state_26936__$1 = state_26936;var statearr_26944_26966 = state_26936__$1;(statearr_26944_26966[(2)] = null);
(statearr_26944_26966[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (3)))
{var inst_26933 = (state_26936[(2)]);var inst_26934 = cljs.core.async.close_BANG_(out);var state_26936__$1 = (function (){var statearr_26945 = state_26936;(statearr_26945[(9)] = inst_26933);
return statearr_26945;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26936__$1,inst_26934);
} else
{if((state_val_26937 === (2)))
{var state_26936__$1 = state_26936;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26936__$1,(4),ch);
} else
{if((state_val_26937 === (11)))
{var inst_26916 = (state_26936[(8)]);var inst_26925 = (state_26936[(2)]);var inst_26913 = inst_26916;var state_26936__$1 = (function (){var statearr_26946 = state_26936;(statearr_26946[(10)] = inst_26925);
(statearr_26946[(7)] = inst_26913);
return statearr_26946;
})();var statearr_26947_26967 = state_26936__$1;(statearr_26947_26967[(2)] = null);
(statearr_26947_26967[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (9)))
{var inst_26916 = (state_26936[(8)]);var state_26936__$1 = state_26936;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26936__$1,(11),out,inst_26916);
} else
{if((state_val_26937 === (5)))
{var inst_26916 = (state_26936[(8)]);var inst_26913 = (state_26936[(7)]);var inst_26920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26916,inst_26913);var state_26936__$1 = state_26936;if(inst_26920)
{var statearr_26949_26968 = state_26936__$1;(statearr_26949_26968[(1)] = (8));
} else
{var statearr_26950_26969 = state_26936__$1;(statearr_26950_26969[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (10)))
{var inst_26928 = (state_26936[(2)]);var state_26936__$1 = state_26936;var statearr_26951_26970 = state_26936__$1;(statearr_26951_26970[(2)] = inst_26928);
(statearr_26951_26970[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26937 === (8)))
{var inst_26913 = (state_26936[(7)]);var tmp26948 = inst_26913;var inst_26913__$1 = tmp26948;var state_26936__$1 = (function (){var statearr_26952 = state_26936;(statearr_26952[(7)] = inst_26913__$1);
return statearr_26952;
})();var statearr_26953_26971 = state_26936__$1;(statearr_26953_26971[(2)] = null);
(statearr_26953_26971[(1)] = (2));
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
});})(c__12292__auto___26961,out))
;return ((function (switch__12277__auto__,c__12292__auto___26961,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26957 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26957[(0)] = state_machine__12278__auto__);
(statearr_26957[(1)] = (1));
return statearr_26957;
});
var state_machine__12278__auto____1 = (function (state_26936){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26936);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object))
{var ex__12281__auto__ = e26958;var statearr_26959_26972 = state_26936;(statearr_26959_26972[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26936);
return cljs.core.constant$keyword$82;
} else
{throw e26958;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26973 = state_26936;
state_26936 = G__26973;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26961,out))
})();var state__12294__auto__ = (function (){var statearr_26960 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26961);
return statearr_26960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26961,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27111,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27111,out){
return (function (state_27081){var state_val_27082 = (state_27081[(1)]);if((state_val_27082 === (7)))
{var inst_27077 = (state_27081[(2)]);var state_27081__$1 = state_27081;var statearr_27083_27112 = state_27081__$1;(statearr_27083_27112[(2)] = inst_27077);
(statearr_27083_27112[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (1)))
{var inst_27044 = (new Array(n));var inst_27045 = inst_27044;var inst_27046 = (0);var state_27081__$1 = (function (){var statearr_27084 = state_27081;(statearr_27084[(7)] = inst_27046);
(statearr_27084[(8)] = inst_27045);
return statearr_27084;
})();var statearr_27085_27113 = state_27081__$1;(statearr_27085_27113[(2)] = null);
(statearr_27085_27113[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (4)))
{var inst_27049 = (state_27081[(9)]);var inst_27049__$1 = (state_27081[(2)]);var inst_27050 = (inst_27049__$1 == null);var inst_27051 = cljs.core.not(inst_27050);var state_27081__$1 = (function (){var statearr_27086 = state_27081;(statearr_27086[(9)] = inst_27049__$1);
return statearr_27086;
})();if(inst_27051)
{var statearr_27087_27114 = state_27081__$1;(statearr_27087_27114[(1)] = (5));
} else
{var statearr_27088_27115 = state_27081__$1;(statearr_27088_27115[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (15)))
{var inst_27071 = (state_27081[(2)]);var state_27081__$1 = state_27081;var statearr_27089_27116 = state_27081__$1;(statearr_27089_27116[(2)] = inst_27071);
(statearr_27089_27116[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (13)))
{var state_27081__$1 = state_27081;var statearr_27090_27117 = state_27081__$1;(statearr_27090_27117[(2)] = null);
(statearr_27090_27117[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (6)))
{var inst_27046 = (state_27081[(7)]);var inst_27067 = (inst_27046 > (0));var state_27081__$1 = state_27081;if(cljs.core.truth_(inst_27067))
{var statearr_27091_27118 = state_27081__$1;(statearr_27091_27118[(1)] = (12));
} else
{var statearr_27092_27119 = state_27081__$1;(statearr_27092_27119[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (3)))
{var inst_27079 = (state_27081[(2)]);var state_27081__$1 = state_27081;return cljs.core.async.impl.ioc_helpers.return_chan(state_27081__$1,inst_27079);
} else
{if((state_val_27082 === (12)))
{var inst_27045 = (state_27081[(8)]);var inst_27069 = cljs.core.vec(inst_27045);var state_27081__$1 = state_27081;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27081__$1,(15),out,inst_27069);
} else
{if((state_val_27082 === (2)))
{var state_27081__$1 = state_27081;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27081__$1,(4),ch);
} else
{if((state_val_27082 === (11)))
{var inst_27061 = (state_27081[(2)]);var inst_27062 = (new Array(n));var inst_27045 = inst_27062;var inst_27046 = (0);var state_27081__$1 = (function (){var statearr_27093 = state_27081;(statearr_27093[(10)] = inst_27061);
(statearr_27093[(7)] = inst_27046);
(statearr_27093[(8)] = inst_27045);
return statearr_27093;
})();var statearr_27094_27120 = state_27081__$1;(statearr_27094_27120[(2)] = null);
(statearr_27094_27120[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (9)))
{var inst_27045 = (state_27081[(8)]);var inst_27059 = cljs.core.vec(inst_27045);var state_27081__$1 = state_27081;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27081__$1,(11),out,inst_27059);
} else
{if((state_val_27082 === (5)))
{var inst_27046 = (state_27081[(7)]);var inst_27054 = (state_27081[(11)]);var inst_27045 = (state_27081[(8)]);var inst_27049 = (state_27081[(9)]);var inst_27053 = (inst_27045[inst_27046] = inst_27049);var inst_27054__$1 = (inst_27046 + (1));var inst_27055 = (inst_27054__$1 < n);var state_27081__$1 = (function (){var statearr_27095 = state_27081;(statearr_27095[(12)] = inst_27053);
(statearr_27095[(11)] = inst_27054__$1);
return statearr_27095;
})();if(cljs.core.truth_(inst_27055))
{var statearr_27096_27121 = state_27081__$1;(statearr_27096_27121[(1)] = (8));
} else
{var statearr_27097_27122 = state_27081__$1;(statearr_27097_27122[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (14)))
{var inst_27074 = (state_27081[(2)]);var inst_27075 = cljs.core.async.close_BANG_(out);var state_27081__$1 = (function (){var statearr_27099 = state_27081;(statearr_27099[(13)] = inst_27074);
return statearr_27099;
})();var statearr_27100_27123 = state_27081__$1;(statearr_27100_27123[(2)] = inst_27075);
(statearr_27100_27123[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (10)))
{var inst_27065 = (state_27081[(2)]);var state_27081__$1 = state_27081;var statearr_27101_27124 = state_27081__$1;(statearr_27101_27124[(2)] = inst_27065);
(statearr_27101_27124[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27082 === (8)))
{var inst_27054 = (state_27081[(11)]);var inst_27045 = (state_27081[(8)]);var tmp27098 = inst_27045;var inst_27045__$1 = tmp27098;var inst_27046 = inst_27054;var state_27081__$1 = (function (){var statearr_27102 = state_27081;(statearr_27102[(7)] = inst_27046);
(statearr_27102[(8)] = inst_27045__$1);
return statearr_27102;
})();var statearr_27103_27125 = state_27081__$1;(statearr_27103_27125[(2)] = null);
(statearr_27103_27125[(1)] = (2));
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
});})(c__12292__auto___27111,out))
;return ((function (switch__12277__auto__,c__12292__auto___27111,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27107[(0)] = state_machine__12278__auto__);
(statearr_27107[(1)] = (1));
return statearr_27107;
});
var state_machine__12278__auto____1 = (function (state_27081){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27081);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object))
{var ex__12281__auto__ = e27108;var statearr_27109_27126 = state_27081;(statearr_27109_27126[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27081);
return cljs.core.constant$keyword$82;
} else
{throw e27108;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27127 = state_27081;
state_27081 = G__27127;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27081){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27111,out))
})();var state__12294__auto__ = (function (){var statearr_27110 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27111);
return statearr_27110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27111,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27275,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27275,out){
return (function (state_27244){var state_val_27245 = (state_27244[(1)]);if((state_val_27245 === (7)))
{var inst_27240 = (state_27244[(2)]);var state_27244__$1 = state_27244;var statearr_27246_27276 = state_27244__$1;(statearr_27246_27276[(2)] = inst_27240);
(statearr_27246_27276[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (1)))
{var inst_27203 = [];var inst_27204 = inst_27203;var inst_27205 = cljs.core.constant$keyword$97;var state_27244__$1 = (function (){var statearr_27247 = state_27244;(statearr_27247[(7)] = inst_27204);
(statearr_27247[(8)] = inst_27205);
return statearr_27247;
})();var statearr_27248_27277 = state_27244__$1;(statearr_27248_27277[(2)] = null);
(statearr_27248_27277[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (4)))
{var inst_27208 = (state_27244[(9)]);var inst_27208__$1 = (state_27244[(2)]);var inst_27209 = (inst_27208__$1 == null);var inst_27210 = cljs.core.not(inst_27209);var state_27244__$1 = (function (){var statearr_27249 = state_27244;(statearr_27249[(9)] = inst_27208__$1);
return statearr_27249;
})();if(inst_27210)
{var statearr_27250_27278 = state_27244__$1;(statearr_27250_27278[(1)] = (5));
} else
{var statearr_27251_27279 = state_27244__$1;(statearr_27251_27279[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (15)))
{var inst_27234 = (state_27244[(2)]);var state_27244__$1 = state_27244;var statearr_27252_27280 = state_27244__$1;(statearr_27252_27280[(2)] = inst_27234);
(statearr_27252_27280[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (13)))
{var state_27244__$1 = state_27244;var statearr_27253_27281 = state_27244__$1;(statearr_27253_27281[(2)] = null);
(statearr_27253_27281[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (6)))
{var inst_27204 = (state_27244[(7)]);var inst_27229 = inst_27204.length;var inst_27230 = (inst_27229 > (0));var state_27244__$1 = state_27244;if(cljs.core.truth_(inst_27230))
{var statearr_27254_27282 = state_27244__$1;(statearr_27254_27282[(1)] = (12));
} else
{var statearr_27255_27283 = state_27244__$1;(statearr_27255_27283[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (3)))
{var inst_27242 = (state_27244[(2)]);var state_27244__$1 = state_27244;return cljs.core.async.impl.ioc_helpers.return_chan(state_27244__$1,inst_27242);
} else
{if((state_val_27245 === (12)))
{var inst_27204 = (state_27244[(7)]);var inst_27232 = cljs.core.vec(inst_27204);var state_27244__$1 = state_27244;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27244__$1,(15),out,inst_27232);
} else
{if((state_val_27245 === (2)))
{var state_27244__$1 = state_27244;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27244__$1,(4),ch);
} else
{if((state_val_27245 === (11)))
{var inst_27212 = (state_27244[(10)]);var inst_27208 = (state_27244[(9)]);var inst_27222 = (state_27244[(2)]);var inst_27223 = [];var inst_27224 = inst_27223.push(inst_27208);var inst_27204 = inst_27223;var inst_27205 = inst_27212;var state_27244__$1 = (function (){var statearr_27256 = state_27244;(statearr_27256[(11)] = inst_27224);
(statearr_27256[(12)] = inst_27222);
(statearr_27256[(7)] = inst_27204);
(statearr_27256[(8)] = inst_27205);
return statearr_27256;
})();var statearr_27257_27284 = state_27244__$1;(statearr_27257_27284[(2)] = null);
(statearr_27257_27284[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (9)))
{var inst_27204 = (state_27244[(7)]);var inst_27220 = cljs.core.vec(inst_27204);var state_27244__$1 = state_27244;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27244__$1,(11),out,inst_27220);
} else
{if((state_val_27245 === (5)))
{var inst_27212 = (state_27244[(10)]);var inst_27208 = (state_27244[(9)]);var inst_27205 = (state_27244[(8)]);var inst_27212__$1 = (function (){var G__27258 = inst_27208;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27258) : f.call(null,G__27258));
})();var inst_27213 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27212__$1,inst_27205);var inst_27214 = cljs.core.keyword_identical_QMARK_(inst_27205,cljs.core.constant$keyword$97);var inst_27215 = (inst_27213) || (inst_27214);var state_27244__$1 = (function (){var statearr_27259 = state_27244;(statearr_27259[(10)] = inst_27212__$1);
return statearr_27259;
})();if(cljs.core.truth_(inst_27215))
{var statearr_27260_27285 = state_27244__$1;(statearr_27260_27285[(1)] = (8));
} else
{var statearr_27261_27286 = state_27244__$1;(statearr_27261_27286[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (14)))
{var inst_27237 = (state_27244[(2)]);var inst_27238 = cljs.core.async.close_BANG_(out);var state_27244__$1 = (function (){var statearr_27263 = state_27244;(statearr_27263[(13)] = inst_27237);
return statearr_27263;
})();var statearr_27264_27287 = state_27244__$1;(statearr_27264_27287[(2)] = inst_27238);
(statearr_27264_27287[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (10)))
{var inst_27227 = (state_27244[(2)]);var state_27244__$1 = state_27244;var statearr_27265_27288 = state_27244__$1;(statearr_27265_27288[(2)] = inst_27227);
(statearr_27265_27288[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27245 === (8)))
{var inst_27212 = (state_27244[(10)]);var inst_27208 = (state_27244[(9)]);var inst_27204 = (state_27244[(7)]);var inst_27217 = inst_27204.push(inst_27208);var tmp27262 = inst_27204;var inst_27204__$1 = tmp27262;var inst_27205 = inst_27212;var state_27244__$1 = (function (){var statearr_27266 = state_27244;(statearr_27266[(14)] = inst_27217);
(statearr_27266[(7)] = inst_27204__$1);
(statearr_27266[(8)] = inst_27205);
return statearr_27266;
})();var statearr_27267_27289 = state_27244__$1;(statearr_27267_27289[(2)] = null);
(statearr_27267_27289[(1)] = (2));
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
});})(c__12292__auto___27275,out))
;return ((function (switch__12277__auto__,c__12292__auto___27275,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27271[(0)] = state_machine__12278__auto__);
(statearr_27271[(1)] = (1));
return statearr_27271;
});
var state_machine__12278__auto____1 = (function (state_27244){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27244);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27272){if((e27272 instanceof Object))
{var ex__12281__auto__ = e27272;var statearr_27273_27290 = state_27244;(statearr_27273_27290[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27244);
return cljs.core.constant$keyword$82;
} else
{throw e27272;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27291 = state_27244;
state_27244 = G__27291;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27244){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27275,out))
})();var state__12294__auto__ = (function (){var statearr_27274 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27275);
return statearr_27274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27275,out))
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
