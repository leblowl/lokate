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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24023 = (function (f,fn_handler,meta24024){
this.f = f;
this.fn_handler = fn_handler;
this.meta24024 = meta24024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24023.cljs$lang$type = true;
cljs.core.async.t24023.cljs$lang$ctorStr = "cljs.core.async/t24023";
cljs.core.async.t24023.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24023");
});
cljs.core.async.t24023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24025){var self__ = this;
var _24025__$1 = this;return self__.meta24024;
});
cljs.core.async.t24023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24025,meta24024__$1){var self__ = this;
var _24025__$1 = this;return (new cljs.core.async.t24023(self__.f,self__.fn_handler,meta24024__$1));
});
cljs.core.async.__GT_t24023 = (function __GT_t24023(f__$1,fn_handler__$1,meta24024){return (new cljs.core.async.t24023(f__$1,fn_handler__$1,meta24024));
});
}
return (new cljs.core.async.t24023(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24027 = buff;if(G__24027)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__24027.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24027.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24027);
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
{var val_24044 = (function (){var G__24041 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24041) : cljs.core.deref.call(null,G__24041));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24042_24045 = val_24044;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24042_24045) : fn1.call(null,G__24042_24045));
} else
{cljs.core.async.impl.dispatch.run(((function (val_24044,ret){
return (function (){var G__24043 = val_24044;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24043) : fn1.call(null,G__24043));
});})(val_24044,ret))
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
{var ret = temp__4124__auto__;var G__24054 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24054) : cljs.core.deref.call(null,G__24054));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24055 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24055) : cljs.core.deref.call(null,G__24055));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24056_24058 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24056_24058) : fn1.call(null,G__24056_24058));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24057 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24057) : fn1.call(null,G__24057));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___24059 = n;var x_24060 = (0);while(true){
if((x_24060 < n__4510__auto___24059))
{(a[x_24060] = (0));
{
var G__24061 = (x_24060 + (1));
x_24060 = G__24061;
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
var G__24062 = (i + (1));
i = G__24062;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24070 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24070) : cljs.core.atom.call(null,G__24070));
})();if(typeof cljs.core.async.t24071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24071 = (function (flag,alt_flag,meta24072){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24072 = meta24072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24071.cljs$lang$type = true;
cljs.core.async.t24071.cljs$lang$ctorStr = "cljs.core.async/t24071";
cljs.core.async.t24071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24071");
});})(flag))
;
cljs.core.async.t24071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24074 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24074) : cljs.core.deref.call(null,G__24074));
});})(flag))
;
cljs.core.async.t24071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24075_24077 = self__.flag;var G__24076_24078 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24075_24077,G__24076_24078) : cljs.core.reset_BANG_.call(null,G__24075_24077,G__24076_24078));
return true;
});})(flag))
;
cljs.core.async.t24071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24073){var self__ = this;
var _24073__$1 = this;return self__.meta24072;
});})(flag))
;
cljs.core.async.t24071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24073,meta24072__$1){var self__ = this;
var _24073__$1 = this;return (new cljs.core.async.t24071(self__.flag,self__.alt_flag,meta24072__$1));
});})(flag))
;
cljs.core.async.__GT_t24071 = ((function (flag){
return (function __GT_t24071(flag__$1,alt_flag__$1,meta24072){return (new cljs.core.async.t24071(flag__$1,alt_flag__$1,meta24072));
});})(flag))
;
}
return (new cljs.core.async.t24071(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24082 = (function (cb,flag,alt_handler,meta24083){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24083 = meta24083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24082.cljs$lang$type = true;
cljs.core.async.t24082.cljs$lang$ctorStr = "cljs.core.async/t24082";
cljs.core.async.t24082.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24082");
});
cljs.core.async.t24082.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24084){var self__ = this;
var _24084__$1 = this;return self__.meta24083;
});
cljs.core.async.t24082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24084,meta24083__$1){var self__ = this;
var _24084__$1 = this;return (new cljs.core.async.t24082(self__.cb,self__.flag,self__.alt_handler,meta24083__$1));
});
cljs.core.async.__GT_t24082 = (function __GT_t24082(cb__$1,flag__$1,alt_handler__$1,meta24083){return (new cljs.core.async.t24082(cb__$1,flag__$1,alt_handler__$1,meta24083));
});
}
return (new cljs.core.async.t24082(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24092 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24092) : port.call(null,G__24092));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24093 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24093) : port.call(null,G__24093));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24085_SHARP_){var G__24094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24085_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24094) : fret.call(null,G__24094));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24086_SHARP_){var G__24095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24086_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24095) : fret.call(null,G__24095));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24096 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24096) : cljs.core.deref.call(null,G__24096));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24097 = (i + (1));
i = G__24097;
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
var alts_BANG___delegate = function (ports,p__24098){var map__24100 = p__24098;var map__24100__$1 = ((cljs.core.seq_QMARK_(map__24100))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24100):map__24100);var opts = map__24100__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24098 = null;if (arguments.length > 1) {
  p__24098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24098);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24101){
var ports = cljs.core.first(arglist__24101);
var p__24098 = cljs.core.rest(arglist__24101);
return alts_BANG___delegate(ports,p__24098);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24199){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24199){
return (function (state_24175){var state_val_24176 = (state_24175[(1)]);if((state_val_24176 === (7)))
{var inst_24171 = (state_24175[(2)]);var state_24175__$1 = state_24175;var statearr_24177_24200 = state_24175__$1;(statearr_24177_24200[(2)] = inst_24171);
(statearr_24177_24200[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (1)))
{var state_24175__$1 = state_24175;var statearr_24178_24201 = state_24175__$1;(statearr_24178_24201[(2)] = null);
(statearr_24178_24201[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (4)))
{var inst_24154 = (state_24175[(7)]);var inst_24154__$1 = (state_24175[(2)]);var inst_24155 = (inst_24154__$1 == null);var state_24175__$1 = (function (){var statearr_24179 = state_24175;(statearr_24179[(7)] = inst_24154__$1);
return statearr_24179;
})();if(cljs.core.truth_(inst_24155))
{var statearr_24180_24202 = state_24175__$1;(statearr_24180_24202[(1)] = (5));
} else
{var statearr_24181_24203 = state_24175__$1;(statearr_24181_24203[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (13)))
{var state_24175__$1 = state_24175;var statearr_24182_24204 = state_24175__$1;(statearr_24182_24204[(2)] = null);
(statearr_24182_24204[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (6)))
{var inst_24154 = (state_24175[(7)]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24175__$1,(11),to,inst_24154);
} else
{if((state_val_24176 === (3)))
{var inst_24173 = (state_24175[(2)]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.return_chan(state_24175__$1,inst_24173);
} else
{if((state_val_24176 === (12)))
{var state_24175__$1 = state_24175;var statearr_24183_24205 = state_24175__$1;(statearr_24183_24205[(2)] = null);
(statearr_24183_24205[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (2)))
{var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24175__$1,(4),from);
} else
{if((state_val_24176 === (11)))
{var inst_24164 = (state_24175[(2)]);var state_24175__$1 = state_24175;if(cljs.core.truth_(inst_24164))
{var statearr_24184_24206 = state_24175__$1;(statearr_24184_24206[(1)] = (12));
} else
{var statearr_24185_24207 = state_24175__$1;(statearr_24185_24207[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (9)))
{var state_24175__$1 = state_24175;var statearr_24186_24208 = state_24175__$1;(statearr_24186_24208[(2)] = null);
(statearr_24186_24208[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (5)))
{var state_24175__$1 = state_24175;if(cljs.core.truth_(close_QMARK_))
{var statearr_24187_24209 = state_24175__$1;(statearr_24187_24209[(1)] = (8));
} else
{var statearr_24188_24210 = state_24175__$1;(statearr_24188_24210[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (14)))
{var inst_24169 = (state_24175[(2)]);var state_24175__$1 = state_24175;var statearr_24189_24211 = state_24175__$1;(statearr_24189_24211[(2)] = inst_24169);
(statearr_24189_24211[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (10)))
{var inst_24161 = (state_24175[(2)]);var state_24175__$1 = state_24175;var statearr_24190_24212 = state_24175__$1;(statearr_24190_24212[(2)] = inst_24161);
(statearr_24190_24212[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24176 === (8)))
{var inst_24158 = cljs.core.async.close_BANG_(to);var state_24175__$1 = state_24175;var statearr_24191_24213 = state_24175__$1;(statearr_24191_24213[(2)] = inst_24158);
(statearr_24191_24213[(1)] = (10));
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
});})(c__12292__auto___24199))
;return ((function (switch__12277__auto__,c__12292__auto___24199){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24195 = [null,null,null,null,null,null,null,null];(statearr_24195[(0)] = state_machine__12278__auto__);
(statearr_24195[(1)] = (1));
return statearr_24195;
});
var state_machine__12278__auto____1 = (function (state_24175){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24175);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object))
{var ex__12281__auto__ = e24196;var statearr_24197_24214 = state_24175;(statearr_24197_24214[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24175);
return cljs.core.constant$keyword$82;
} else
{throw e24196;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24215 = state_24175;
state_24175 = G__24215;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24199))
})();var state__12294__auto__ = (function (){var statearr_24198 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24199);
return statearr_24198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24199))
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
return (function (p__24401){var vec__24402 = p__24401;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(1),null);var job = vec__24402;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results){
return (function (state_24407){var state_val_24408 = (state_24407[(1)]);if((state_val_24408 === (2)))
{var inst_24404 = (state_24407[(2)]);var inst_24405 = cljs.core.async.close_BANG_(res);var state_24407__$1 = (function (){var statearr_24409 = state_24407;(statearr_24409[(7)] = inst_24404);
return statearr_24409;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24407__$1,inst_24405);
} else
{if((state_val_24408 === (1)))
{var state_24407__$1 = state_24407;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24407__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24413 = [null,null,null,null,null,null,null,null];(statearr_24413[(0)] = state_machine__12278__auto__);
(statearr_24413[(1)] = (1));
return statearr_24413;
});
var state_machine__12278__auto____1 = (function (state_24407){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24407);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24414){if((e24414 instanceof Object))
{var ex__12281__auto__ = e24414;var statearr_24415_24587 = state_24407;(statearr_24415_24587[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24407);
return cljs.core.constant$keyword$82;
} else
{throw e24414;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24588 = state_24407;
state_24407 = G__24588;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24407){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24416 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24586);
return statearr_24416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24586,res,vec__24402,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24417){var vec__24418 = p__24417;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24418,(1),null);var job = vec__24418;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24419_24589 = v;var G__24420_24590 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24419_24589,G__24420_24590) : xf.call(null,G__24419_24589,G__24420_24590));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24591 = n;var __24592 = (0);while(true){
if((__24592 < n__4510__auto___24591))
{var G__24421_24593 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24421_24593) {
case "async":
var c__12292__auto___24595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24592,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24592,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function (state_24434){var state_val_24435 = (state_24434[(1)]);if((state_val_24435 === (7)))
{var inst_24430 = (state_24434[(2)]);var state_24434__$1 = state_24434;var statearr_24436_24596 = state_24434__$1;(statearr_24436_24596[(2)] = inst_24430);
(statearr_24436_24596[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24435 === (6)))
{var state_24434__$1 = state_24434;var statearr_24437_24597 = state_24434__$1;(statearr_24437_24597[(2)] = null);
(statearr_24437_24597[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24435 === (5)))
{var state_24434__$1 = state_24434;var statearr_24438_24598 = state_24434__$1;(statearr_24438_24598[(2)] = null);
(statearr_24438_24598[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24435 === (4)))
{var inst_24424 = (state_24434[(2)]);var inst_24425 = async(inst_24424);var state_24434__$1 = state_24434;if(cljs.core.truth_(inst_24425))
{var statearr_24439_24599 = state_24434__$1;(statearr_24439_24599[(1)] = (5));
} else
{var statearr_24440_24600 = state_24434__$1;(statearr_24440_24600[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24435 === (3)))
{var inst_24432 = (state_24434[(2)]);var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.return_chan(state_24434__$1,inst_24432);
} else
{if((state_val_24435 === (2)))
{var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24434__$1,(4),jobs);
} else
{if((state_val_24435 === (1)))
{var state_24434__$1 = state_24434;var statearr_24441_24601 = state_24434__$1;(statearr_24441_24601[(2)] = null);
(statearr_24441_24601[(1)] = (2));
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
});})(__24592,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
;return ((function (__24592,switch__12277__auto__,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24445 = [null,null,null,null,null,null,null];(statearr_24445[(0)] = state_machine__12278__auto__);
(statearr_24445[(1)] = (1));
return statearr_24445;
});
var state_machine__12278__auto____1 = (function (state_24434){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24434);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24446){if((e24446 instanceof Object))
{var ex__12281__auto__ = e24446;var statearr_24447_24602 = state_24434;(statearr_24447_24602[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24434);
return cljs.core.constant$keyword$82;
} else
{throw e24446;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24603 = state_24434;
state_24434 = G__24603;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24592,switch__12277__auto__,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24448 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24595);
return statearr_24448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24592,c__12292__auto___24595,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24592,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24592,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function (state_24461){var state_val_24462 = (state_24461[(1)]);if((state_val_24462 === (7)))
{var inst_24457 = (state_24461[(2)]);var state_24461__$1 = state_24461;var statearr_24463_24605 = state_24461__$1;(statearr_24463_24605[(2)] = inst_24457);
(statearr_24463_24605[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (6)))
{var state_24461__$1 = state_24461;var statearr_24464_24606 = state_24461__$1;(statearr_24464_24606[(2)] = null);
(statearr_24464_24606[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (5)))
{var state_24461__$1 = state_24461;var statearr_24465_24607 = state_24461__$1;(statearr_24465_24607[(2)] = null);
(statearr_24465_24607[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (4)))
{var inst_24451 = (state_24461[(2)]);var inst_24452 = process(inst_24451);var state_24461__$1 = state_24461;if(cljs.core.truth_(inst_24452))
{var statearr_24466_24608 = state_24461__$1;(statearr_24466_24608[(1)] = (5));
} else
{var statearr_24467_24609 = state_24461__$1;(statearr_24467_24609[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24462 === (3)))
{var inst_24459 = (state_24461[(2)]);var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.return_chan(state_24461__$1,inst_24459);
} else
{if((state_val_24462 === (2)))
{var state_24461__$1 = state_24461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24461__$1,(4),jobs);
} else
{if((state_val_24462 === (1)))
{var state_24461__$1 = state_24461;var statearr_24468_24610 = state_24461__$1;(statearr_24468_24610[(2)] = null);
(statearr_24468_24610[(1)] = (2));
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
});})(__24592,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
;return ((function (__24592,switch__12277__auto__,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24472 = [null,null,null,null,null,null,null];(statearr_24472[(0)] = state_machine__12278__auto__);
(statearr_24472[(1)] = (1));
return statearr_24472;
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
}catch (e24473){if((e24473 instanceof Object))
{var ex__12281__auto__ = e24473;var statearr_24474_24611 = state_24461;(statearr_24474_24611[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24461);
return cljs.core.constant$keyword$82;
} else
{throw e24473;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24612 = state_24461;
state_24461 = G__24612;
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
;})(__24592,switch__12277__auto__,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24475 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24604);
return statearr_24475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24592,c__12292__auto___24604,G__24421_24593,n__4510__auto___24591,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24613 = (__24592 + (1));
__24592 = G__24613;
continue;
}
} else
{}
break;
}
var c__12292__auto___24614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24614,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24614,jobs,results,process,async){
return (function (state_24497){var state_val_24498 = (state_24497[(1)]);if((state_val_24498 === (9)))
{var inst_24490 = (state_24497[(2)]);var state_24497__$1 = (function (){var statearr_24499 = state_24497;(statearr_24499[(7)] = inst_24490);
return statearr_24499;
})();var statearr_24500_24615 = state_24497__$1;(statearr_24500_24615[(2)] = null);
(statearr_24500_24615[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24498 === (8)))
{var inst_24483 = (state_24497[(8)]);var inst_24488 = (state_24497[(2)]);var state_24497__$1 = (function (){var statearr_24501 = state_24497;(statearr_24501[(9)] = inst_24488);
return statearr_24501;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24497__$1,(9),results,inst_24483);
} else
{if((state_val_24498 === (7)))
{var inst_24493 = (state_24497[(2)]);var state_24497__$1 = state_24497;var statearr_24502_24616 = state_24497__$1;(statearr_24502_24616[(2)] = inst_24493);
(statearr_24502_24616[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24498 === (6)))
{var inst_24483 = (state_24497[(8)]);var inst_24478 = (state_24497[(10)]);var inst_24483__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24484 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24485 = [inst_24478,inst_24483__$1];var inst_24486 = (new cljs.core.PersistentVector(null,2,(5),inst_24484,inst_24485,null));var state_24497__$1 = (function (){var statearr_24503 = state_24497;(statearr_24503[(8)] = inst_24483__$1);
return statearr_24503;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24497__$1,(8),jobs,inst_24486);
} else
{if((state_val_24498 === (5)))
{var inst_24481 = cljs.core.async.close_BANG_(jobs);var state_24497__$1 = state_24497;var statearr_24504_24617 = state_24497__$1;(statearr_24504_24617[(2)] = inst_24481);
(statearr_24504_24617[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24498 === (4)))
{var inst_24478 = (state_24497[(10)]);var inst_24478__$1 = (state_24497[(2)]);var inst_24479 = (inst_24478__$1 == null);var state_24497__$1 = (function (){var statearr_24505 = state_24497;(statearr_24505[(10)] = inst_24478__$1);
return statearr_24505;
})();if(cljs.core.truth_(inst_24479))
{var statearr_24506_24618 = state_24497__$1;(statearr_24506_24618[(1)] = (5));
} else
{var statearr_24507_24619 = state_24497__$1;(statearr_24507_24619[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24498 === (3)))
{var inst_24495 = (state_24497[(2)]);var state_24497__$1 = state_24497;return cljs.core.async.impl.ioc_helpers.return_chan(state_24497__$1,inst_24495);
} else
{if((state_val_24498 === (2)))
{var state_24497__$1 = state_24497;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24497__$1,(4),from);
} else
{if((state_val_24498 === (1)))
{var state_24497__$1 = state_24497;var statearr_24508_24620 = state_24497__$1;(statearr_24508_24620[(2)] = null);
(statearr_24508_24620[(1)] = (2));
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
});})(c__12292__auto___24614,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24614,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24512 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24512[(0)] = state_machine__12278__auto__);
(statearr_24512[(1)] = (1));
return statearr_24512;
});
var state_machine__12278__auto____1 = (function (state_24497){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24497);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24513){if((e24513 instanceof Object))
{var ex__12281__auto__ = e24513;var statearr_24514_24621 = state_24497;(statearr_24514_24621[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24497);
return cljs.core.constant$keyword$82;
} else
{throw e24513;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24622 = state_24497;
state_24497 = G__24622;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24497){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24614,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24515 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24614);
return statearr_24515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24614,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24553){var state_val_24554 = (state_24553[(1)]);if((state_val_24554 === (7)))
{var inst_24549 = (state_24553[(2)]);var state_24553__$1 = state_24553;var statearr_24555_24623 = state_24553__$1;(statearr_24555_24623[(2)] = inst_24549);
(statearr_24555_24623[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (20)))
{var state_24553__$1 = state_24553;var statearr_24556_24624 = state_24553__$1;(statearr_24556_24624[(2)] = null);
(statearr_24556_24624[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (1)))
{var state_24553__$1 = state_24553;var statearr_24557_24625 = state_24553__$1;(statearr_24557_24625[(2)] = null);
(statearr_24557_24625[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (4)))
{var inst_24518 = (state_24553[(7)]);var inst_24518__$1 = (state_24553[(2)]);var inst_24519 = (inst_24518__$1 == null);var state_24553__$1 = (function (){var statearr_24558 = state_24553;(statearr_24558[(7)] = inst_24518__$1);
return statearr_24558;
})();if(cljs.core.truth_(inst_24519))
{var statearr_24559_24626 = state_24553__$1;(statearr_24559_24626[(1)] = (5));
} else
{var statearr_24560_24627 = state_24553__$1;(statearr_24560_24627[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (15)))
{var inst_24531 = (state_24553[(8)]);var state_24553__$1 = state_24553;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24553__$1,(18),to,inst_24531);
} else
{if((state_val_24554 === (21)))
{var inst_24544 = (state_24553[(2)]);var state_24553__$1 = state_24553;var statearr_24561_24628 = state_24553__$1;(statearr_24561_24628[(2)] = inst_24544);
(statearr_24561_24628[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (13)))
{var inst_24546 = (state_24553[(2)]);var state_24553__$1 = (function (){var statearr_24562 = state_24553;(statearr_24562[(9)] = inst_24546);
return statearr_24562;
})();var statearr_24563_24629 = state_24553__$1;(statearr_24563_24629[(2)] = null);
(statearr_24563_24629[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (6)))
{var inst_24518 = (state_24553[(7)]);var state_24553__$1 = state_24553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24553__$1,(11),inst_24518);
} else
{if((state_val_24554 === (17)))
{var inst_24539 = (state_24553[(2)]);var state_24553__$1 = state_24553;if(cljs.core.truth_(inst_24539))
{var statearr_24564_24630 = state_24553__$1;(statearr_24564_24630[(1)] = (19));
} else
{var statearr_24565_24631 = state_24553__$1;(statearr_24565_24631[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (3)))
{var inst_24551 = (state_24553[(2)]);var state_24553__$1 = state_24553;return cljs.core.async.impl.ioc_helpers.return_chan(state_24553__$1,inst_24551);
} else
{if((state_val_24554 === (12)))
{var inst_24528 = (state_24553[(10)]);var state_24553__$1 = state_24553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24553__$1,(14),inst_24528);
} else
{if((state_val_24554 === (2)))
{var state_24553__$1 = state_24553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24553__$1,(4),results);
} else
{if((state_val_24554 === (19)))
{var state_24553__$1 = state_24553;var statearr_24566_24632 = state_24553__$1;(statearr_24566_24632[(2)] = null);
(statearr_24566_24632[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (11)))
{var inst_24528 = (state_24553[(2)]);var state_24553__$1 = (function (){var statearr_24567 = state_24553;(statearr_24567[(10)] = inst_24528);
return statearr_24567;
})();var statearr_24568_24633 = state_24553__$1;(statearr_24568_24633[(2)] = null);
(statearr_24568_24633[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (9)))
{var state_24553__$1 = state_24553;var statearr_24569_24634 = state_24553__$1;(statearr_24569_24634[(2)] = null);
(statearr_24569_24634[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (5)))
{var state_24553__$1 = state_24553;if(cljs.core.truth_(close_QMARK_))
{var statearr_24570_24635 = state_24553__$1;(statearr_24570_24635[(1)] = (8));
} else
{var statearr_24571_24636 = state_24553__$1;(statearr_24571_24636[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (14)))
{var inst_24531 = (state_24553[(8)]);var inst_24533 = (state_24553[(11)]);var inst_24531__$1 = (state_24553[(2)]);var inst_24532 = (inst_24531__$1 == null);var inst_24533__$1 = cljs.core.not(inst_24532);var state_24553__$1 = (function (){var statearr_24572 = state_24553;(statearr_24572[(8)] = inst_24531__$1);
(statearr_24572[(11)] = inst_24533__$1);
return statearr_24572;
})();if(inst_24533__$1)
{var statearr_24573_24637 = state_24553__$1;(statearr_24573_24637[(1)] = (15));
} else
{var statearr_24574_24638 = state_24553__$1;(statearr_24574_24638[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (16)))
{var inst_24533 = (state_24553[(11)]);var state_24553__$1 = state_24553;var statearr_24575_24639 = state_24553__$1;(statearr_24575_24639[(2)] = inst_24533);
(statearr_24575_24639[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (10)))
{var inst_24525 = (state_24553[(2)]);var state_24553__$1 = state_24553;var statearr_24576_24640 = state_24553__$1;(statearr_24576_24640[(2)] = inst_24525);
(statearr_24576_24640[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (18)))
{var inst_24536 = (state_24553[(2)]);var state_24553__$1 = state_24553;var statearr_24577_24641 = state_24553__$1;(statearr_24577_24641[(2)] = inst_24536);
(statearr_24577_24641[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24554 === (8)))
{var inst_24522 = cljs.core.async.close_BANG_(to);var state_24553__$1 = state_24553;var statearr_24578_24642 = state_24553__$1;(statearr_24578_24642[(2)] = inst_24522);
(statearr_24578_24642[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24582 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24582[(0)] = state_machine__12278__auto__);
(statearr_24582[(1)] = (1));
return statearr_24582;
});
var state_machine__12278__auto____1 = (function (state_24553){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24553);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24583){if((e24583 instanceof Object))
{var ex__12281__auto__ = e24583;var statearr_24584_24643 = state_24553;(statearr_24584_24643[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24553);
return cljs.core.constant$keyword$82;
} else
{throw e24583;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24644 = state_24553;
state_24553 = G__24644;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24553){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24585 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24585;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24767,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24767,tc,fc){
return (function (state_24741){var state_val_24742 = (state_24741[(1)]);if((state_val_24742 === (7)))
{var inst_24737 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24743_24768 = state_24741__$1;(statearr_24743_24768[(2)] = inst_24737);
(statearr_24743_24768[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (1)))
{var state_24741__$1 = state_24741;var statearr_24744_24769 = state_24741__$1;(statearr_24744_24769[(2)] = null);
(statearr_24744_24769[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (4)))
{var inst_24718 = (state_24741[(7)]);var inst_24718__$1 = (state_24741[(2)]);var inst_24719 = (inst_24718__$1 == null);var state_24741__$1 = (function (){var statearr_24745 = state_24741;(statearr_24745[(7)] = inst_24718__$1);
return statearr_24745;
})();if(cljs.core.truth_(inst_24719))
{var statearr_24746_24770 = state_24741__$1;(statearr_24746_24770[(1)] = (5));
} else
{var statearr_24747_24771 = state_24741__$1;(statearr_24747_24771[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (13)))
{var state_24741__$1 = state_24741;var statearr_24748_24772 = state_24741__$1;(statearr_24748_24772[(2)] = null);
(statearr_24748_24772[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (6)))
{var inst_24718 = (state_24741[(7)]);var inst_24724 = (function (){var G__24749 = inst_24718;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24749) : p.call(null,G__24749));
})();var state_24741__$1 = state_24741;if(cljs.core.truth_(inst_24724))
{var statearr_24750_24773 = state_24741__$1;(statearr_24750_24773[(1)] = (9));
} else
{var statearr_24751_24774 = state_24741__$1;(statearr_24751_24774[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (3)))
{var inst_24739 = (state_24741[(2)]);var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.return_chan(state_24741__$1,inst_24739);
} else
{if((state_val_24742 === (12)))
{var state_24741__$1 = state_24741;var statearr_24752_24775 = state_24741__$1;(statearr_24752_24775[(2)] = null);
(statearr_24752_24775[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (2)))
{var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24741__$1,(4),ch);
} else
{if((state_val_24742 === (11)))
{var inst_24718 = (state_24741[(7)]);var inst_24728 = (state_24741[(2)]);var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24741__$1,(8),inst_24728,inst_24718);
} else
{if((state_val_24742 === (9)))
{var state_24741__$1 = state_24741;var statearr_24753_24776 = state_24741__$1;(statearr_24753_24776[(2)] = tc);
(statearr_24753_24776[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (5)))
{var inst_24721 = cljs.core.async.close_BANG_(tc);var inst_24722 = cljs.core.async.close_BANG_(fc);var state_24741__$1 = (function (){var statearr_24754 = state_24741;(statearr_24754[(8)] = inst_24721);
return statearr_24754;
})();var statearr_24755_24777 = state_24741__$1;(statearr_24755_24777[(2)] = inst_24722);
(statearr_24755_24777[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (14)))
{var inst_24735 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24756_24778 = state_24741__$1;(statearr_24756_24778[(2)] = inst_24735);
(statearr_24756_24778[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (10)))
{var state_24741__$1 = state_24741;var statearr_24757_24779 = state_24741__$1;(statearr_24757_24779[(2)] = fc);
(statearr_24757_24779[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24742 === (8)))
{var inst_24730 = (state_24741[(2)]);var state_24741__$1 = state_24741;if(cljs.core.truth_(inst_24730))
{var statearr_24758_24780 = state_24741__$1;(statearr_24758_24780[(1)] = (12));
} else
{var statearr_24759_24781 = state_24741__$1;(statearr_24759_24781[(1)] = (13));
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
});})(c__12292__auto___24767,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24767,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24763 = [null,null,null,null,null,null,null,null,null];(statearr_24763[(0)] = state_machine__12278__auto__);
(statearr_24763[(1)] = (1));
return statearr_24763;
});
var state_machine__12278__auto____1 = (function (state_24741){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24741);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24764){if((e24764 instanceof Object))
{var ex__12281__auto__ = e24764;var statearr_24765_24782 = state_24741;(statearr_24765_24782[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24741);
return cljs.core.constant$keyword$82;
} else
{throw e24764;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24783 = state_24741;
state_24741 = G__24783;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24741){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24767,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24766 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24767);
return statearr_24766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24767,tc,fc))
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
return (function (state_24832){var state_val_24833 = (state_24832[(1)]);if((state_val_24833 === (7)))
{var inst_24828 = (state_24832[(2)]);var state_24832__$1 = state_24832;var statearr_24834_24852 = state_24832__$1;(statearr_24834_24852[(2)] = inst_24828);
(statearr_24834_24852[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24833 === (6)))
{var inst_24818 = (state_24832[(7)]);var inst_24821 = (state_24832[(8)]);var inst_24825 = (function (){var G__24835 = inst_24818;var G__24836 = inst_24821;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24835,G__24836) : f.call(null,G__24835,G__24836));
})();var inst_24818__$1 = inst_24825;var state_24832__$1 = (function (){var statearr_24837 = state_24832;(statearr_24837[(7)] = inst_24818__$1);
return statearr_24837;
})();var statearr_24838_24853 = state_24832__$1;(statearr_24838_24853[(2)] = null);
(statearr_24838_24853[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24833 === (5)))
{var inst_24818 = (state_24832[(7)]);var state_24832__$1 = state_24832;var statearr_24839_24854 = state_24832__$1;(statearr_24839_24854[(2)] = inst_24818);
(statearr_24839_24854[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24833 === (4)))
{var inst_24821 = (state_24832[(8)]);var inst_24821__$1 = (state_24832[(2)]);var inst_24822 = (inst_24821__$1 == null);var state_24832__$1 = (function (){var statearr_24840 = state_24832;(statearr_24840[(8)] = inst_24821__$1);
return statearr_24840;
})();if(cljs.core.truth_(inst_24822))
{var statearr_24841_24855 = state_24832__$1;(statearr_24841_24855[(1)] = (5));
} else
{var statearr_24842_24856 = state_24832__$1;(statearr_24842_24856[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24833 === (3)))
{var inst_24830 = (state_24832[(2)]);var state_24832__$1 = state_24832;return cljs.core.async.impl.ioc_helpers.return_chan(state_24832__$1,inst_24830);
} else
{if((state_val_24833 === (2)))
{var state_24832__$1 = state_24832;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24832__$1,(4),ch);
} else
{if((state_val_24833 === (1)))
{var inst_24818 = init;var state_24832__$1 = (function (){var statearr_24843 = state_24832;(statearr_24843[(7)] = inst_24818);
return statearr_24843;
})();var statearr_24844_24857 = state_24832__$1;(statearr_24844_24857[(2)] = null);
(statearr_24844_24857[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24848 = [null,null,null,null,null,null,null,null,null];(statearr_24848[(0)] = state_machine__12278__auto__);
(statearr_24848[(1)] = (1));
return statearr_24848;
});
var state_machine__12278__auto____1 = (function (state_24832){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24832);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24849){if((e24849 instanceof Object))
{var ex__12281__auto__ = e24849;var statearr_24850_24858 = state_24832;(statearr_24850_24858[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24832);
return cljs.core.constant$keyword$82;
} else
{throw e24849;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24859 = state_24832;
state_24832 = G__24859;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24832){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24851 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24851;
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
return (function (state_24936){var state_val_24937 = (state_24936[(1)]);if((state_val_24937 === (7)))
{var inst_24918 = (state_24936[(2)]);var state_24936__$1 = state_24936;var statearr_24938_24961 = state_24936__$1;(statearr_24938_24961[(2)] = inst_24918);
(statearr_24938_24961[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (1)))
{var inst_24912 = cljs.core.seq(coll);var inst_24913 = inst_24912;var state_24936__$1 = (function (){var statearr_24939 = state_24936;(statearr_24939[(7)] = inst_24913);
return statearr_24939;
})();var statearr_24940_24962 = state_24936__$1;(statearr_24940_24962[(2)] = null);
(statearr_24940_24962[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (4)))
{var inst_24913 = (state_24936[(7)]);var inst_24916 = cljs.core.first(inst_24913);var state_24936__$1 = state_24936;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24936__$1,(7),ch,inst_24916);
} else
{if((state_val_24937 === (13)))
{var inst_24930 = (state_24936[(2)]);var state_24936__$1 = state_24936;var statearr_24941_24963 = state_24936__$1;(statearr_24941_24963[(2)] = inst_24930);
(statearr_24941_24963[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (6)))
{var inst_24921 = (state_24936[(2)]);var state_24936__$1 = state_24936;if(cljs.core.truth_(inst_24921))
{var statearr_24942_24964 = state_24936__$1;(statearr_24942_24964[(1)] = (8));
} else
{var statearr_24943_24965 = state_24936__$1;(statearr_24943_24965[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (3)))
{var inst_24934 = (state_24936[(2)]);var state_24936__$1 = state_24936;return cljs.core.async.impl.ioc_helpers.return_chan(state_24936__$1,inst_24934);
} else
{if((state_val_24937 === (12)))
{var state_24936__$1 = state_24936;var statearr_24944_24966 = state_24936__$1;(statearr_24944_24966[(2)] = null);
(statearr_24944_24966[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (2)))
{var inst_24913 = (state_24936[(7)]);var state_24936__$1 = state_24936;if(cljs.core.truth_(inst_24913))
{var statearr_24945_24967 = state_24936__$1;(statearr_24945_24967[(1)] = (4));
} else
{var statearr_24946_24968 = state_24936__$1;(statearr_24946_24968[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (11)))
{var inst_24927 = cljs.core.async.close_BANG_(ch);var state_24936__$1 = state_24936;var statearr_24947_24969 = state_24936__$1;(statearr_24947_24969[(2)] = inst_24927);
(statearr_24947_24969[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (9)))
{var state_24936__$1 = state_24936;if(cljs.core.truth_(close_QMARK_))
{var statearr_24948_24970 = state_24936__$1;(statearr_24948_24970[(1)] = (11));
} else
{var statearr_24949_24971 = state_24936__$1;(statearr_24949_24971[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (5)))
{var inst_24913 = (state_24936[(7)]);var state_24936__$1 = state_24936;var statearr_24950_24972 = state_24936__$1;(statearr_24950_24972[(2)] = inst_24913);
(statearr_24950_24972[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (10)))
{var inst_24932 = (state_24936[(2)]);var state_24936__$1 = state_24936;var statearr_24951_24973 = state_24936__$1;(statearr_24951_24973[(2)] = inst_24932);
(statearr_24951_24973[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24937 === (8)))
{var inst_24913 = (state_24936[(7)]);var inst_24923 = cljs.core.next(inst_24913);var inst_24913__$1 = inst_24923;var state_24936__$1 = (function (){var statearr_24952 = state_24936;(statearr_24952[(7)] = inst_24913__$1);
return statearr_24952;
})();var statearr_24953_24974 = state_24936__$1;(statearr_24953_24974[(2)] = null);
(statearr_24953_24974[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24957 = [null,null,null,null,null,null,null,null];(statearr_24957[(0)] = state_machine__12278__auto__);
(statearr_24957[(1)] = (1));
return statearr_24957;
});
var state_machine__12278__auto____1 = (function (state_24936){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24936);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24958){if((e24958 instanceof Object))
{var ex__12281__auto__ = e24958;var statearr_24959_24975 = state_24936;(statearr_24959_24975[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24936);
return cljs.core.constant$keyword$82;
} else
{throw e24958;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24976 = state_24936;
state_24936 = G__24976;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24936){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24960 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24960;
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
cljs.core.async.Mux = (function (){var obj24978 = {};return obj24978;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24982 = x__4277__auto__;return goog.typeOf(G__24982);
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
cljs.core.async.Mult = (function (){var obj24984 = {};return obj24984;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24988 = x__4277__auto__;return goog.typeOf(G__24988);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24992 = x__4277__auto__;return goog.typeOf(G__24992);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24996 = x__4277__auto__;return goog.typeOf(G__24996);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25226 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25226) : cljs.core.atom.call(null,G__25226));
})();var m = (function (){if(typeof cljs.core.async.t25227 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25227 = (function (cs,ch,mult,meta25228){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25228 = meta25228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25227.cljs$lang$type = true;
cljs.core.async.t25227.cljs$lang$ctorStr = "cljs.core.async/t25227";
cljs.core.async.t25227.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25227");
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25230_25455 = self__.cs;var G__25231_25456 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25230_25455,G__25231_25456) : cljs.core.reset_BANG_.call(null,G__25230_25455,G__25231_25456));
return null;
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25229){var self__ = this;
var _25229__$1 = this;return self__.meta25228;
});})(cs))
;
cljs.core.async.t25227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25229,meta25228__$1){var self__ = this;
var _25229__$1 = this;return (new cljs.core.async.t25227(self__.cs,self__.ch,self__.mult,meta25228__$1));
});})(cs))
;
cljs.core.async.__GT_t25227 = ((function (cs){
return (function __GT_t25227(cs__$1,ch__$1,mult__$1,meta25228){return (new cljs.core.async.t25227(cs__$1,ch__$1,mult__$1,meta25228));
});})(cs))
;
}
return (new cljs.core.async.t25227(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25232 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25232) : cljs.core.atom.call(null,G__25232));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25457,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25457,cs,m,dchan,dctr,done){
return (function (state_25363){var state_val_25364 = (state_25363[(1)]);if((state_val_25364 === (7)))
{var inst_25359 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25365_25458 = state_25363__$1;(statearr_25365_25458[(2)] = inst_25359);
(statearr_25365_25458[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (20)))
{var inst_25264 = (state_25363[(7)]);var inst_25274 = cljs.core.first(inst_25264);var inst_25275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25274,(0),null);var inst_25276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25274,(1),null);var state_25363__$1 = (function (){var statearr_25366 = state_25363;(statearr_25366[(8)] = inst_25275);
return statearr_25366;
})();if(cljs.core.truth_(inst_25276))
{var statearr_25367_25459 = state_25363__$1;(statearr_25367_25459[(1)] = (22));
} else
{var statearr_25368_25460 = state_25363__$1;(statearr_25368_25460[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (27)))
{var inst_25235 = (state_25363[(9)]);var inst_25304 = (state_25363[(10)]);var inst_25306 = (state_25363[(11)]);var inst_25311 = (state_25363[(12)]);var inst_25311__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25304,inst_25306);var inst_25312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25311__$1,inst_25235,done);var state_25363__$1 = (function (){var statearr_25369 = state_25363;(statearr_25369[(12)] = inst_25311__$1);
return statearr_25369;
})();if(cljs.core.truth_(inst_25312))
{var statearr_25370_25461 = state_25363__$1;(statearr_25370_25461[(1)] = (30));
} else
{var statearr_25371_25462 = state_25363__$1;(statearr_25371_25462[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (1)))
{var state_25363__$1 = state_25363;var statearr_25372_25463 = state_25363__$1;(statearr_25372_25463[(2)] = null);
(statearr_25372_25463[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (24)))
{var inst_25264 = (state_25363[(7)]);var inst_25281 = (state_25363[(2)]);var inst_25282 = cljs.core.next(inst_25264);var inst_25244 = inst_25282;var inst_25245 = null;var inst_25246 = (0);var inst_25247 = (0);var state_25363__$1 = (function (){var statearr_25373 = state_25363;(statearr_25373[(13)] = inst_25244);
(statearr_25373[(14)] = inst_25247);
(statearr_25373[(15)] = inst_25281);
(statearr_25373[(16)] = inst_25245);
(statearr_25373[(17)] = inst_25246);
return statearr_25373;
})();var statearr_25374_25464 = state_25363__$1;(statearr_25374_25464[(2)] = null);
(statearr_25374_25464[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (39)))
{var state_25363__$1 = state_25363;var statearr_25378_25465 = state_25363__$1;(statearr_25378_25465[(2)] = null);
(statearr_25378_25465[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (4)))
{var inst_25235 = (state_25363[(9)]);var inst_25235__$1 = (state_25363[(2)]);var inst_25236 = (inst_25235__$1 == null);var state_25363__$1 = (function (){var statearr_25379 = state_25363;(statearr_25379[(9)] = inst_25235__$1);
return statearr_25379;
})();if(cljs.core.truth_(inst_25236))
{var statearr_25380_25466 = state_25363__$1;(statearr_25380_25466[(1)] = (5));
} else
{var statearr_25381_25467 = state_25363__$1;(statearr_25381_25467[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (15)))
{var inst_25244 = (state_25363[(13)]);var inst_25247 = (state_25363[(14)]);var inst_25245 = (state_25363[(16)]);var inst_25246 = (state_25363[(17)]);var inst_25260 = (state_25363[(2)]);var inst_25261 = (inst_25247 + (1));var tmp25375 = inst_25244;var tmp25376 = inst_25245;var tmp25377 = inst_25246;var inst_25244__$1 = tmp25375;var inst_25245__$1 = tmp25376;var inst_25246__$1 = tmp25377;var inst_25247__$1 = inst_25261;var state_25363__$1 = (function (){var statearr_25382 = state_25363;(statearr_25382[(13)] = inst_25244__$1);
(statearr_25382[(14)] = inst_25247__$1);
(statearr_25382[(16)] = inst_25245__$1);
(statearr_25382[(18)] = inst_25260);
(statearr_25382[(17)] = inst_25246__$1);
return statearr_25382;
})();var statearr_25383_25468 = state_25363__$1;(statearr_25383_25468[(2)] = null);
(statearr_25383_25468[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (21)))
{var inst_25285 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25387_25469 = state_25363__$1;(statearr_25387_25469[(2)] = inst_25285);
(statearr_25387_25469[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (31)))
{var inst_25311 = (state_25363[(12)]);var inst_25315 = done(null);var inst_25316 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25311);var state_25363__$1 = (function (){var statearr_25388 = state_25363;(statearr_25388[(19)] = inst_25315);
return statearr_25388;
})();var statearr_25389_25470 = state_25363__$1;(statearr_25389_25470[(2)] = inst_25316);
(statearr_25389_25470[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (32)))
{var inst_25305 = (state_25363[(20)]);var inst_25304 = (state_25363[(10)]);var inst_25306 = (state_25363[(11)]);var inst_25303 = (state_25363[(21)]);var inst_25318 = (state_25363[(2)]);var inst_25319 = (inst_25306 + (1));var tmp25384 = inst_25305;var tmp25385 = inst_25304;var tmp25386 = inst_25303;var inst_25303__$1 = tmp25386;var inst_25304__$1 = tmp25385;var inst_25305__$1 = tmp25384;var inst_25306__$1 = inst_25319;var state_25363__$1 = (function (){var statearr_25390 = state_25363;(statearr_25390[(22)] = inst_25318);
(statearr_25390[(20)] = inst_25305__$1);
(statearr_25390[(10)] = inst_25304__$1);
(statearr_25390[(11)] = inst_25306__$1);
(statearr_25390[(21)] = inst_25303__$1);
return statearr_25390;
})();var statearr_25391_25471 = state_25363__$1;(statearr_25391_25471[(2)] = null);
(statearr_25391_25471[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (40)))
{var inst_25331 = (state_25363[(23)]);var inst_25335 = done(null);var inst_25336 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25331);var state_25363__$1 = (function (){var statearr_25392 = state_25363;(statearr_25392[(24)] = inst_25335);
return statearr_25392;
})();var statearr_25393_25472 = state_25363__$1;(statearr_25393_25472[(2)] = inst_25336);
(statearr_25393_25472[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (33)))
{var inst_25322 = (state_25363[(25)]);var inst_25324 = cljs.core.chunked_seq_QMARK_(inst_25322);var state_25363__$1 = state_25363;if(inst_25324)
{var statearr_25394_25473 = state_25363__$1;(statearr_25394_25473[(1)] = (36));
} else
{var statearr_25395_25474 = state_25363__$1;(statearr_25395_25474[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (13)))
{var inst_25254 = (state_25363[(26)]);var inst_25257 = cljs.core.async.close_BANG_(inst_25254);var state_25363__$1 = state_25363;var statearr_25396_25475 = state_25363__$1;(statearr_25396_25475[(2)] = inst_25257);
(statearr_25396_25475[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (22)))
{var inst_25275 = (state_25363[(8)]);var inst_25278 = cljs.core.async.close_BANG_(inst_25275);var state_25363__$1 = state_25363;var statearr_25397_25476 = state_25363__$1;(statearr_25397_25476[(2)] = inst_25278);
(statearr_25397_25476[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (36)))
{var inst_25322 = (state_25363[(25)]);var inst_25326 = cljs.core.chunk_first(inst_25322);var inst_25327 = cljs.core.chunk_rest(inst_25322);var inst_25328 = cljs.core.count(inst_25326);var inst_25303 = inst_25327;var inst_25304 = inst_25326;var inst_25305 = inst_25328;var inst_25306 = (0);var state_25363__$1 = (function (){var statearr_25398 = state_25363;(statearr_25398[(20)] = inst_25305);
(statearr_25398[(10)] = inst_25304);
(statearr_25398[(11)] = inst_25306);
(statearr_25398[(21)] = inst_25303);
return statearr_25398;
})();var statearr_25399_25477 = state_25363__$1;(statearr_25399_25477[(2)] = null);
(statearr_25399_25477[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (41)))
{var inst_25322 = (state_25363[(25)]);var inst_25338 = (state_25363[(2)]);var inst_25339 = cljs.core.next(inst_25322);var inst_25303 = inst_25339;var inst_25304 = null;var inst_25305 = (0);var inst_25306 = (0);var state_25363__$1 = (function (){var statearr_25400 = state_25363;(statearr_25400[(27)] = inst_25338);
(statearr_25400[(20)] = inst_25305);
(statearr_25400[(10)] = inst_25304);
(statearr_25400[(11)] = inst_25306);
(statearr_25400[(21)] = inst_25303);
return statearr_25400;
})();var statearr_25401_25478 = state_25363__$1;(statearr_25401_25478[(2)] = null);
(statearr_25401_25478[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (43)))
{var state_25363__$1 = state_25363;var statearr_25402_25479 = state_25363__$1;(statearr_25402_25479[(2)] = null);
(statearr_25402_25479[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (29)))
{var inst_25347 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25403_25480 = state_25363__$1;(statearr_25403_25480[(2)] = inst_25347);
(statearr_25403_25480[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (44)))
{var inst_25356 = (state_25363[(2)]);var state_25363__$1 = (function (){var statearr_25404 = state_25363;(statearr_25404[(28)] = inst_25356);
return statearr_25404;
})();var statearr_25405_25481 = state_25363__$1;(statearr_25405_25481[(2)] = null);
(statearr_25405_25481[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (6)))
{var inst_25295 = (state_25363[(29)]);var inst_25294 = (function (){var G__25406 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25406) : cljs.core.deref.call(null,G__25406));
})();var inst_25295__$1 = cljs.core.keys(inst_25294);var inst_25296 = cljs.core.count(inst_25295__$1);var inst_25297 = (function (){var G__25407 = dctr;var G__25408 = inst_25296;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25407,G__25408) : cljs.core.reset_BANG_.call(null,G__25407,G__25408));
})();var inst_25302 = cljs.core.seq(inst_25295__$1);var inst_25303 = inst_25302;var inst_25304 = null;var inst_25305 = (0);var inst_25306 = (0);var state_25363__$1 = (function (){var statearr_25409 = state_25363;(statearr_25409[(30)] = inst_25297);
(statearr_25409[(20)] = inst_25305);
(statearr_25409[(10)] = inst_25304);
(statearr_25409[(11)] = inst_25306);
(statearr_25409[(29)] = inst_25295__$1);
(statearr_25409[(21)] = inst_25303);
return statearr_25409;
})();var statearr_25410_25482 = state_25363__$1;(statearr_25410_25482[(2)] = null);
(statearr_25410_25482[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (28)))
{var inst_25322 = (state_25363[(25)]);var inst_25303 = (state_25363[(21)]);var inst_25322__$1 = cljs.core.seq(inst_25303);var state_25363__$1 = (function (){var statearr_25411 = state_25363;(statearr_25411[(25)] = inst_25322__$1);
return statearr_25411;
})();if(inst_25322__$1)
{var statearr_25412_25483 = state_25363__$1;(statearr_25412_25483[(1)] = (33));
} else
{var statearr_25413_25484 = state_25363__$1;(statearr_25413_25484[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (25)))
{var inst_25305 = (state_25363[(20)]);var inst_25306 = (state_25363[(11)]);var inst_25308 = (inst_25306 < inst_25305);var inst_25309 = inst_25308;var state_25363__$1 = state_25363;if(cljs.core.truth_(inst_25309))
{var statearr_25414_25485 = state_25363__$1;(statearr_25414_25485[(1)] = (27));
} else
{var statearr_25415_25486 = state_25363__$1;(statearr_25415_25486[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (34)))
{var state_25363__$1 = state_25363;var statearr_25416_25487 = state_25363__$1;(statearr_25416_25487[(2)] = null);
(statearr_25416_25487[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (17)))
{var state_25363__$1 = state_25363;var statearr_25417_25488 = state_25363__$1;(statearr_25417_25488[(2)] = null);
(statearr_25417_25488[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (3)))
{var inst_25361 = (state_25363[(2)]);var state_25363__$1 = state_25363;return cljs.core.async.impl.ioc_helpers.return_chan(state_25363__$1,inst_25361);
} else
{if((state_val_25364 === (12)))
{var inst_25290 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25418_25489 = state_25363__$1;(statearr_25418_25489[(2)] = inst_25290);
(statearr_25418_25489[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (2)))
{var state_25363__$1 = state_25363;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25363__$1,(4),ch);
} else
{if((state_val_25364 === (23)))
{var state_25363__$1 = state_25363;var statearr_25419_25490 = state_25363__$1;(statearr_25419_25490[(2)] = null);
(statearr_25419_25490[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (35)))
{var inst_25345 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25420_25491 = state_25363__$1;(statearr_25420_25491[(2)] = inst_25345);
(statearr_25420_25491[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (19)))
{var inst_25264 = (state_25363[(7)]);var inst_25268 = cljs.core.chunk_first(inst_25264);var inst_25269 = cljs.core.chunk_rest(inst_25264);var inst_25270 = cljs.core.count(inst_25268);var inst_25244 = inst_25269;var inst_25245 = inst_25268;var inst_25246 = inst_25270;var inst_25247 = (0);var state_25363__$1 = (function (){var statearr_25421 = state_25363;(statearr_25421[(13)] = inst_25244);
(statearr_25421[(14)] = inst_25247);
(statearr_25421[(16)] = inst_25245);
(statearr_25421[(17)] = inst_25246);
return statearr_25421;
})();var statearr_25422_25492 = state_25363__$1;(statearr_25422_25492[(2)] = null);
(statearr_25422_25492[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (11)))
{var inst_25244 = (state_25363[(13)]);var inst_25264 = (state_25363[(7)]);var inst_25264__$1 = cljs.core.seq(inst_25244);var state_25363__$1 = (function (){var statearr_25423 = state_25363;(statearr_25423[(7)] = inst_25264__$1);
return statearr_25423;
})();if(inst_25264__$1)
{var statearr_25424_25493 = state_25363__$1;(statearr_25424_25493[(1)] = (16));
} else
{var statearr_25425_25494 = state_25363__$1;(statearr_25425_25494[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (9)))
{var inst_25292 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25426_25495 = state_25363__$1;(statearr_25426_25495[(2)] = inst_25292);
(statearr_25426_25495[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (5)))
{var inst_25242 = (function (){var G__25427 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25427) : cljs.core.deref.call(null,G__25427));
})();var inst_25243 = cljs.core.seq(inst_25242);var inst_25244 = inst_25243;var inst_25245 = null;var inst_25246 = (0);var inst_25247 = (0);var state_25363__$1 = (function (){var statearr_25428 = state_25363;(statearr_25428[(13)] = inst_25244);
(statearr_25428[(14)] = inst_25247);
(statearr_25428[(16)] = inst_25245);
(statearr_25428[(17)] = inst_25246);
return statearr_25428;
})();var statearr_25429_25496 = state_25363__$1;(statearr_25429_25496[(2)] = null);
(statearr_25429_25496[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (14)))
{var state_25363__$1 = state_25363;var statearr_25430_25497 = state_25363__$1;(statearr_25430_25497[(2)] = null);
(statearr_25430_25497[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (45)))
{var inst_25353 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25431_25498 = state_25363__$1;(statearr_25431_25498[(2)] = inst_25353);
(statearr_25431_25498[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (26)))
{var inst_25295 = (state_25363[(29)]);var inst_25349 = (state_25363[(2)]);var inst_25350 = cljs.core.seq(inst_25295);var state_25363__$1 = (function (){var statearr_25432 = state_25363;(statearr_25432[(31)] = inst_25349);
return statearr_25432;
})();if(inst_25350)
{var statearr_25433_25499 = state_25363__$1;(statearr_25433_25499[(1)] = (42));
} else
{var statearr_25434_25500 = state_25363__$1;(statearr_25434_25500[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (16)))
{var inst_25264 = (state_25363[(7)]);var inst_25266 = cljs.core.chunked_seq_QMARK_(inst_25264);var state_25363__$1 = state_25363;if(inst_25266)
{var statearr_25435_25501 = state_25363__$1;(statearr_25435_25501[(1)] = (19));
} else
{var statearr_25436_25502 = state_25363__$1;(statearr_25436_25502[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (38)))
{var inst_25342 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25437_25503 = state_25363__$1;(statearr_25437_25503[(2)] = inst_25342);
(statearr_25437_25503[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (30)))
{var state_25363__$1 = state_25363;var statearr_25438_25504 = state_25363__$1;(statearr_25438_25504[(2)] = null);
(statearr_25438_25504[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (10)))
{var inst_25247 = (state_25363[(14)]);var inst_25245 = (state_25363[(16)]);var inst_25253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25245,inst_25247);var inst_25254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25253,(0),null);var inst_25255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25253,(1),null);var state_25363__$1 = (function (){var statearr_25439 = state_25363;(statearr_25439[(26)] = inst_25254);
return statearr_25439;
})();if(cljs.core.truth_(inst_25255))
{var statearr_25440_25505 = state_25363__$1;(statearr_25440_25505[(1)] = (13));
} else
{var statearr_25441_25506 = state_25363__$1;(statearr_25441_25506[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (18)))
{var inst_25288 = (state_25363[(2)]);var state_25363__$1 = state_25363;var statearr_25442_25507 = state_25363__$1;(statearr_25442_25507[(2)] = inst_25288);
(statearr_25442_25507[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (42)))
{var state_25363__$1 = state_25363;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25363__$1,(45),dchan);
} else
{if((state_val_25364 === (37)))
{var inst_25235 = (state_25363[(9)]);var inst_25322 = (state_25363[(25)]);var inst_25331 = (state_25363[(23)]);var inst_25331__$1 = cljs.core.first(inst_25322);var inst_25332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25331__$1,inst_25235,done);var state_25363__$1 = (function (){var statearr_25443 = state_25363;(statearr_25443[(23)] = inst_25331__$1);
return statearr_25443;
})();if(cljs.core.truth_(inst_25332))
{var statearr_25444_25508 = state_25363__$1;(statearr_25444_25508[(1)] = (39));
} else
{var statearr_25445_25509 = state_25363__$1;(statearr_25445_25509[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25364 === (8)))
{var inst_25247 = (state_25363[(14)]);var inst_25246 = (state_25363[(17)]);var inst_25249 = (inst_25247 < inst_25246);var inst_25250 = inst_25249;var state_25363__$1 = state_25363;if(cljs.core.truth_(inst_25250))
{var statearr_25446_25510 = state_25363__$1;(statearr_25446_25510[(1)] = (10));
} else
{var statearr_25447_25511 = state_25363__$1;(statearr_25447_25511[(1)] = (11));
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
});})(c__12292__auto___25457,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25457,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25451[(0)] = state_machine__12278__auto__);
(statearr_25451[(1)] = (1));
return statearr_25451;
});
var state_machine__12278__auto____1 = (function (state_25363){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25363);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object))
{var ex__12281__auto__ = e25452;var statearr_25453_25512 = state_25363;(statearr_25453_25512[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25363);
return cljs.core.constant$keyword$82;
} else
{throw e25452;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25513 = state_25363;
state_25363 = G__25513;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25363){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25457,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25454 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25457);
return statearr_25454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25457,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25518 = {};return obj25518;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25522 = x__4277__auto__;return goog.typeOf(G__25522);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25526 = x__4277__auto__;return goog.typeOf(G__25526);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25530 = x__4277__auto__;return goog.typeOf(G__25530);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25534 = x__4277__auto__;return goog.typeOf(G__25534);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25538 = x__4277__auto__;return goog.typeOf(G__25538);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25539){var map__25545 = p__25539;var map__25545__$1 = ((cljs.core.seq_QMARK_(map__25545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25545):map__25545);var opts = map__25545__$1;var statearr_25546_25550 = state;(statearr_25546_25550[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25545,map__25545__$1,opts){
return (function (val){var statearr_25547_25551 = state;(statearr_25547_25551[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25545,map__25545__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25548_25552 = state;(statearr_25548_25552[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25549 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25549) : cljs.core.deref.call(null,G__25549));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25539 = null;if (arguments.length > 3) {
  p__25539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25539);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25553){
var state = cljs.core.first(arglist__25553);
arglist__25553 = cljs.core.next(arglist__25553);
var cont_block = cljs.core.first(arglist__25553);
arglist__25553 = cljs.core.next(arglist__25553);
var ports = cljs.core.first(arglist__25553);
var p__25539 = cljs.core.rest(arglist__25553);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25539);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25687 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25687) : cljs.core.atom.call(null,G__25687));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25688 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25688) : cljs.core.atom.call(null,G__25688));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25689 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25689) : attr.call(null,G__25689));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25690 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25690) : cljs.core.deref.call(null,G__25690));
})();var mode = (function (){var G__25691 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25691) : cljs.core.deref.call(null,G__25691));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25692 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25693){
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
this.meta25693 = meta25693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25692.cljs$lang$type = true;
cljs.core.async.t25692.cljs$lang$ctorStr = "cljs.core.async/t25692";
cljs.core.async.t25692.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25692");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25695_25820 = self__.cs;var G__25696_25821 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25695_25820,G__25696_25821) : cljs.core.reset_BANG_.call(null,G__25695_25820,G__25696_25821));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25697 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25697) : self__.solo_modes.call(null,G__25697));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25698_25822 = self__.solo_mode;var G__25699_25823 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25698_25822,G__25699_25823) : cljs.core.reset_BANG_.call(null,G__25698_25822,G__25699_25823));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25694){var self__ = this;
var _25694__$1 = this;return self__.meta25693;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25694,meta25693__$1){var self__ = this;
var _25694__$1 = this;return (new cljs.core.async.t25692(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25693__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25692 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25693){return (new cljs.core.async.t25692(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25693));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25692(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25771){var state_val_25772 = (state_25771[(1)]);if((state_val_25772 === (7)))
{var inst_25713 = (state_25771[(7)]);var inst_25718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25713);var state_25771__$1 = state_25771;var statearr_25773_25825 = state_25771__$1;(statearr_25773_25825[(2)] = inst_25718);
(statearr_25773_25825[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (20)))
{var inst_25728 = (state_25771[(8)]);var state_25771__$1 = state_25771;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25771__$1,(23),out,inst_25728);
} else
{if((state_val_25772 === (1)))
{var inst_25703 = (state_25771[(9)]);var inst_25703__$1 = calc_state();var inst_25704 = cljs.core.seq_QMARK_(inst_25703__$1);var state_25771__$1 = (function (){var statearr_25774 = state_25771;(statearr_25774[(9)] = inst_25703__$1);
return statearr_25774;
})();if(inst_25704)
{var statearr_25775_25826 = state_25771__$1;(statearr_25775_25826[(1)] = (2));
} else
{var statearr_25776_25827 = state_25771__$1;(statearr_25776_25827[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (24)))
{var inst_25721 = (state_25771[(10)]);var inst_25713 = inst_25721;var state_25771__$1 = (function (){var statearr_25777 = state_25771;(statearr_25777[(7)] = inst_25713);
return statearr_25777;
})();var statearr_25778_25828 = state_25771__$1;(statearr_25778_25828[(2)] = null);
(statearr_25778_25828[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (4)))
{var inst_25703 = (state_25771[(9)]);var inst_25709 = (state_25771[(2)]);var inst_25710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25709,cljs.core.constant$keyword$96);var inst_25711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25709,cljs.core.constant$keyword$95);var inst_25712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25709,cljs.core.constant$keyword$94);var inst_25713 = inst_25703;var state_25771__$1 = (function (){var statearr_25779 = state_25771;(statearr_25779[(11)] = inst_25711);
(statearr_25779[(7)] = inst_25713);
(statearr_25779[(12)] = inst_25712);
(statearr_25779[(13)] = inst_25710);
return statearr_25779;
})();var statearr_25780_25829 = state_25771__$1;(statearr_25780_25829[(2)] = null);
(statearr_25780_25829[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (15)))
{var state_25771__$1 = state_25771;var statearr_25781_25830 = state_25771__$1;(statearr_25781_25830[(2)] = null);
(statearr_25781_25830[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (21)))
{var inst_25721 = (state_25771[(10)]);var inst_25713 = inst_25721;var state_25771__$1 = (function (){var statearr_25782 = state_25771;(statearr_25782[(7)] = inst_25713);
return statearr_25782;
})();var statearr_25783_25831 = state_25771__$1;(statearr_25783_25831[(2)] = null);
(statearr_25783_25831[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (13)))
{var inst_25767 = (state_25771[(2)]);var state_25771__$1 = state_25771;var statearr_25784_25832 = state_25771__$1;(statearr_25784_25832[(2)] = inst_25767);
(statearr_25784_25832[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (22)))
{var inst_25765 = (state_25771[(2)]);var state_25771__$1 = state_25771;var statearr_25785_25833 = state_25771__$1;(statearr_25785_25833[(2)] = inst_25765);
(statearr_25785_25833[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (6)))
{var inst_25769 = (state_25771[(2)]);var state_25771__$1 = state_25771;return cljs.core.async.impl.ioc_helpers.return_chan(state_25771__$1,inst_25769);
} else
{if((state_val_25772 === (25)))
{var state_25771__$1 = state_25771;var statearr_25786_25834 = state_25771__$1;(statearr_25786_25834[(2)] = null);
(statearr_25786_25834[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (17)))
{var inst_25744 = (state_25771[(14)]);var state_25771__$1 = state_25771;var statearr_25787_25835 = state_25771__$1;(statearr_25787_25835[(2)] = inst_25744);
(statearr_25787_25835[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (3)))
{var inst_25703 = (state_25771[(9)]);var state_25771__$1 = state_25771;var statearr_25788_25836 = state_25771__$1;(statearr_25788_25836[(2)] = inst_25703);
(statearr_25788_25836[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (12)))
{var inst_25744 = (state_25771[(14)]);var inst_25724 = (state_25771[(15)]);var inst_25729 = (state_25771[(16)]);var inst_25744__$1 = (function (){var G__25789 = inst_25729;return (inst_25724.cljs$core$IFn$_invoke$arity$1 ? inst_25724.cljs$core$IFn$_invoke$arity$1(G__25789) : inst_25724.call(null,G__25789));
})();var state_25771__$1 = (function (){var statearr_25790 = state_25771;(statearr_25790[(14)] = inst_25744__$1);
return statearr_25790;
})();if(cljs.core.truth_(inst_25744__$1))
{var statearr_25791_25837 = state_25771__$1;(statearr_25791_25837[(1)] = (17));
} else
{var statearr_25792_25838 = state_25771__$1;(statearr_25792_25838[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (2)))
{var inst_25703 = (state_25771[(9)]);var inst_25706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25703);var state_25771__$1 = state_25771;var statearr_25793_25839 = state_25771__$1;(statearr_25793_25839[(2)] = inst_25706);
(statearr_25793_25839[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (23)))
{var inst_25756 = (state_25771[(2)]);var state_25771__$1 = state_25771;if(cljs.core.truth_(inst_25756))
{var statearr_25794_25840 = state_25771__$1;(statearr_25794_25840[(1)] = (24));
} else
{var statearr_25795_25841 = state_25771__$1;(statearr_25795_25841[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (19)))
{var inst_25753 = (state_25771[(2)]);var state_25771__$1 = state_25771;if(cljs.core.truth_(inst_25753))
{var statearr_25796_25842 = state_25771__$1;(statearr_25796_25842[(1)] = (20));
} else
{var statearr_25797_25843 = state_25771__$1;(statearr_25797_25843[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (11)))
{var inst_25728 = (state_25771[(8)]);var inst_25734 = (inst_25728 == null);var state_25771__$1 = state_25771;if(cljs.core.truth_(inst_25734))
{var statearr_25798_25844 = state_25771__$1;(statearr_25798_25844[(1)] = (14));
} else
{var statearr_25799_25845 = state_25771__$1;(statearr_25799_25845[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (9)))
{var inst_25721 = (state_25771[(10)]);var inst_25721__$1 = (state_25771[(2)]);var inst_25722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25721__$1,cljs.core.constant$keyword$96);var inst_25723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25721__$1,cljs.core.constant$keyword$95);var inst_25724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25721__$1,cljs.core.constant$keyword$94);var state_25771__$1 = (function (){var statearr_25800 = state_25771;(statearr_25800[(15)] = inst_25724);
(statearr_25800[(10)] = inst_25721__$1);
(statearr_25800[(17)] = inst_25723);
return statearr_25800;
})();return cljs.core.async.ioc_alts_BANG_(state_25771__$1,(10),inst_25722);
} else
{if((state_val_25772 === (5)))
{var inst_25713 = (state_25771[(7)]);var inst_25716 = cljs.core.seq_QMARK_(inst_25713);var state_25771__$1 = state_25771;if(inst_25716)
{var statearr_25801_25846 = state_25771__$1;(statearr_25801_25846[(1)] = (7));
} else
{var statearr_25802_25847 = state_25771__$1;(statearr_25802_25847[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (14)))
{var inst_25729 = (state_25771[(16)]);var inst_25736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25729);var state_25771__$1 = state_25771;var statearr_25803_25848 = state_25771__$1;(statearr_25803_25848[(2)] = inst_25736);
(statearr_25803_25848[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (26)))
{var inst_25761 = (state_25771[(2)]);var state_25771__$1 = state_25771;var statearr_25804_25849 = state_25771__$1;(statearr_25804_25849[(2)] = inst_25761);
(statearr_25804_25849[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (16)))
{var inst_25739 = (state_25771[(2)]);var inst_25740 = calc_state();var inst_25713 = inst_25740;var state_25771__$1 = (function (){var statearr_25805 = state_25771;(statearr_25805[(7)] = inst_25713);
(statearr_25805[(18)] = inst_25739);
return statearr_25805;
})();var statearr_25806_25850 = state_25771__$1;(statearr_25806_25850[(2)] = null);
(statearr_25806_25850[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (10)))
{var inst_25728 = (state_25771[(8)]);var inst_25729 = (state_25771[(16)]);var inst_25727 = (state_25771[(2)]);var inst_25728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25727,(0),null);var inst_25729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25727,(1),null);var inst_25730 = (inst_25728__$1 == null);var inst_25731 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25729__$1,change);var inst_25732 = (inst_25730) || (inst_25731);var state_25771__$1 = (function (){var statearr_25807 = state_25771;(statearr_25807[(8)] = inst_25728__$1);
(statearr_25807[(16)] = inst_25729__$1);
return statearr_25807;
})();if(cljs.core.truth_(inst_25732))
{var statearr_25808_25851 = state_25771__$1;(statearr_25808_25851[(1)] = (11));
} else
{var statearr_25809_25852 = state_25771__$1;(statearr_25809_25852[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (18)))
{var inst_25724 = (state_25771[(15)]);var inst_25723 = (state_25771[(17)]);var inst_25729 = (state_25771[(16)]);var inst_25748 = cljs.core.empty_QMARK_(inst_25724);var inst_25749 = (function (){var G__25810 = inst_25729;return (inst_25723.cljs$core$IFn$_invoke$arity$1 ? inst_25723.cljs$core$IFn$_invoke$arity$1(G__25810) : inst_25723.call(null,G__25810));
})();var inst_25750 = cljs.core.not(inst_25749);var inst_25751 = (inst_25748) && (inst_25750);var state_25771__$1 = state_25771;var statearr_25811_25853 = state_25771__$1;(statearr_25811_25853[(2)] = inst_25751);
(statearr_25811_25853[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25772 === (8)))
{var inst_25713 = (state_25771[(7)]);var state_25771__$1 = state_25771;var statearr_25812_25854 = state_25771__$1;(statearr_25812_25854[(2)] = inst_25713);
(statearr_25812_25854[(1)] = (9));
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
});})(c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25816[(0)] = state_machine__12278__auto__);
(statearr_25816[(1)] = (1));
return statearr_25816;
});
var state_machine__12278__auto____1 = (function (state_25771){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25771);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25817){if((e25817 instanceof Object))
{var ex__12281__auto__ = e25817;var statearr_25818_25855 = state_25771;(statearr_25818_25855[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25771);
return cljs.core.constant$keyword$82;
} else
{throw e25817;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25856 = state_25771;
state_25771 = G__25856;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25771){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25819 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25824);
return statearr_25819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25858 = {};return obj25858;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25862 = x__4277__auto__;return goog.typeOf(G__25862);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25866 = x__4277__auto__;return goog.typeOf(G__25866);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25872 = x__4277__auto__;return goog.typeOf(G__25872);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25874 = x__4277__auto__;return goog.typeOf(G__25874);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__26013 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26013) : cljs.core.atom.call(null,G__26013));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26015 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26015) : cljs.core.deref.call(null,G__26015));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25875_SHARP_){if(cljs.core.truth_((function (){var G__26016 = topic;return (p1__25875_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25875_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26016) : p1__25875_SHARP_.call(null,G__26016));
})()))
{return p1__25875_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25875_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26017 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26017) : buf_fn.call(null,G__26017));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26018 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26019){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26019 = meta26019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26018.cljs$lang$type = true;
cljs.core.async.t26018.cljs$lang$ctorStr = "cljs.core.async/t26018";
cljs.core.async.t26018.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26018");
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__26021 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26021) : self__.ensure_mult.call(null,G__26021));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26022 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26022) : cljs.core.deref.call(null,G__26022));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__26023 = self__.mults;var G__26024 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26023,G__26024) : cljs.core.reset_BANG_.call(null,G__26023,G__26024));
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26020){var self__ = this;
var _26020__$1 = this;return self__.meta26019;
});})(mults,ensure_mult))
;
cljs.core.async.t26018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26020,meta26019__$1){var self__ = this;
var _26020__$1 = this;return (new cljs.core.async.t26018(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26019__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26018 = ((function (mults,ensure_mult){
return (function __GT_t26018(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26019){return (new cljs.core.async.t26018(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26019));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26018(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26147,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26147,mults,ensure_mult,p){
return (function (state_26096){var state_val_26097 = (state_26096[(1)]);if((state_val_26097 === (7)))
{var inst_26092 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26098_26148 = state_26096__$1;(statearr_26098_26148[(2)] = inst_26092);
(statearr_26098_26148[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (20)))
{var state_26096__$1 = state_26096;var statearr_26099_26149 = state_26096__$1;(statearr_26099_26149[(2)] = null);
(statearr_26099_26149[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (1)))
{var state_26096__$1 = state_26096;var statearr_26100_26150 = state_26096__$1;(statearr_26100_26150[(2)] = null);
(statearr_26100_26150[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (24)))
{var inst_26075 = (state_26096[(7)]);var inst_26084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26075);var state_26096__$1 = state_26096;var statearr_26101_26151 = state_26096__$1;(statearr_26101_26151[(2)] = inst_26084);
(statearr_26101_26151[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (4)))
{var inst_26027 = (state_26096[(8)]);var inst_26027__$1 = (state_26096[(2)]);var inst_26028 = (inst_26027__$1 == null);var state_26096__$1 = (function (){var statearr_26102 = state_26096;(statearr_26102[(8)] = inst_26027__$1);
return statearr_26102;
})();if(cljs.core.truth_(inst_26028))
{var statearr_26103_26152 = state_26096__$1;(statearr_26103_26152[(1)] = (5));
} else
{var statearr_26104_26153 = state_26096__$1;(statearr_26104_26153[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (15)))
{var inst_26069 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26105_26154 = state_26096__$1;(statearr_26105_26154[(2)] = inst_26069);
(statearr_26105_26154[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (21)))
{var inst_26089 = (state_26096[(2)]);var state_26096__$1 = (function (){var statearr_26106 = state_26096;(statearr_26106[(9)] = inst_26089);
return statearr_26106;
})();var statearr_26107_26155 = state_26096__$1;(statearr_26107_26155[(2)] = null);
(statearr_26107_26155[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (13)))
{var inst_26051 = (state_26096[(10)]);var inst_26053 = cljs.core.chunked_seq_QMARK_(inst_26051);var state_26096__$1 = state_26096;if(inst_26053)
{var statearr_26108_26156 = state_26096__$1;(statearr_26108_26156[(1)] = (16));
} else
{var statearr_26109_26157 = state_26096__$1;(statearr_26109_26157[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (22)))
{var inst_26081 = (state_26096[(2)]);var state_26096__$1 = state_26096;if(cljs.core.truth_(inst_26081))
{var statearr_26110_26158 = state_26096__$1;(statearr_26110_26158[(1)] = (23));
} else
{var statearr_26111_26159 = state_26096__$1;(statearr_26111_26159[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (6)))
{var inst_26077 = (state_26096[(11)]);var inst_26027 = (state_26096[(8)]);var inst_26075 = (state_26096[(7)]);var inst_26075__$1 = (function (){var G__26112 = inst_26027;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26112) : topic_fn.call(null,G__26112));
})();var inst_26076 = (function (){var G__26113 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26113) : cljs.core.deref.call(null,G__26113));
})();var inst_26077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26076,inst_26075__$1);var state_26096__$1 = (function (){var statearr_26114 = state_26096;(statearr_26114[(11)] = inst_26077__$1);
(statearr_26114[(7)] = inst_26075__$1);
return statearr_26114;
})();if(cljs.core.truth_(inst_26077__$1))
{var statearr_26115_26160 = state_26096__$1;(statearr_26115_26160[(1)] = (19));
} else
{var statearr_26116_26161 = state_26096__$1;(statearr_26116_26161[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (25)))
{var inst_26086 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26117_26162 = state_26096__$1;(statearr_26117_26162[(2)] = inst_26086);
(statearr_26117_26162[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (17)))
{var inst_26051 = (state_26096[(10)]);var inst_26060 = cljs.core.first(inst_26051);var inst_26061 = cljs.core.async.muxch_STAR_(inst_26060);var inst_26062 = cljs.core.async.close_BANG_(inst_26061);var inst_26063 = cljs.core.next(inst_26051);var inst_26037 = inst_26063;var inst_26038 = null;var inst_26039 = (0);var inst_26040 = (0);var state_26096__$1 = (function (){var statearr_26118 = state_26096;(statearr_26118[(12)] = inst_26040);
(statearr_26118[(13)] = inst_26038);
(statearr_26118[(14)] = inst_26037);
(statearr_26118[(15)] = inst_26039);
(statearr_26118[(16)] = inst_26062);
return statearr_26118;
})();var statearr_26119_26163 = state_26096__$1;(statearr_26119_26163[(2)] = null);
(statearr_26119_26163[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (3)))
{var inst_26094 = (state_26096[(2)]);var state_26096__$1 = state_26096;return cljs.core.async.impl.ioc_helpers.return_chan(state_26096__$1,inst_26094);
} else
{if((state_val_26097 === (12)))
{var inst_26071 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26120_26164 = state_26096__$1;(statearr_26120_26164[(2)] = inst_26071);
(statearr_26120_26164[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (2)))
{var state_26096__$1 = state_26096;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26096__$1,(4),ch);
} else
{if((state_val_26097 === (23)))
{var state_26096__$1 = state_26096;var statearr_26121_26165 = state_26096__$1;(statearr_26121_26165[(2)] = null);
(statearr_26121_26165[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (19)))
{var inst_26077 = (state_26096[(11)]);var inst_26027 = (state_26096[(8)]);var inst_26079 = cljs.core.async.muxch_STAR_(inst_26077);var state_26096__$1 = state_26096;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26096__$1,(22),inst_26079,inst_26027);
} else
{if((state_val_26097 === (11)))
{var inst_26051 = (state_26096[(10)]);var inst_26037 = (state_26096[(14)]);var inst_26051__$1 = cljs.core.seq(inst_26037);var state_26096__$1 = (function (){var statearr_26122 = state_26096;(statearr_26122[(10)] = inst_26051__$1);
return statearr_26122;
})();if(inst_26051__$1)
{var statearr_26123_26166 = state_26096__$1;(statearr_26123_26166[(1)] = (13));
} else
{var statearr_26124_26167 = state_26096__$1;(statearr_26124_26167[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (9)))
{var inst_26073 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26125_26168 = state_26096__$1;(statearr_26125_26168[(2)] = inst_26073);
(statearr_26125_26168[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (5)))
{var inst_26034 = (function (){var G__26126 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26126) : cljs.core.deref.call(null,G__26126));
})();var inst_26035 = cljs.core.vals(inst_26034);var inst_26036 = cljs.core.seq(inst_26035);var inst_26037 = inst_26036;var inst_26038 = null;var inst_26039 = (0);var inst_26040 = (0);var state_26096__$1 = (function (){var statearr_26127 = state_26096;(statearr_26127[(12)] = inst_26040);
(statearr_26127[(13)] = inst_26038);
(statearr_26127[(14)] = inst_26037);
(statearr_26127[(15)] = inst_26039);
return statearr_26127;
})();var statearr_26128_26169 = state_26096__$1;(statearr_26128_26169[(2)] = null);
(statearr_26128_26169[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (14)))
{var state_26096__$1 = state_26096;var statearr_26132_26170 = state_26096__$1;(statearr_26132_26170[(2)] = null);
(statearr_26132_26170[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (16)))
{var inst_26051 = (state_26096[(10)]);var inst_26055 = cljs.core.chunk_first(inst_26051);var inst_26056 = cljs.core.chunk_rest(inst_26051);var inst_26057 = cljs.core.count(inst_26055);var inst_26037 = inst_26056;var inst_26038 = inst_26055;var inst_26039 = inst_26057;var inst_26040 = (0);var state_26096__$1 = (function (){var statearr_26133 = state_26096;(statearr_26133[(12)] = inst_26040);
(statearr_26133[(13)] = inst_26038);
(statearr_26133[(14)] = inst_26037);
(statearr_26133[(15)] = inst_26039);
return statearr_26133;
})();var statearr_26134_26171 = state_26096__$1;(statearr_26134_26171[(2)] = null);
(statearr_26134_26171[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (10)))
{var inst_26040 = (state_26096[(12)]);var inst_26038 = (state_26096[(13)]);var inst_26037 = (state_26096[(14)]);var inst_26039 = (state_26096[(15)]);var inst_26045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26038,inst_26040);var inst_26046 = cljs.core.async.muxch_STAR_(inst_26045);var inst_26047 = cljs.core.async.close_BANG_(inst_26046);var inst_26048 = (inst_26040 + (1));var tmp26129 = inst_26038;var tmp26130 = inst_26037;var tmp26131 = inst_26039;var inst_26037__$1 = tmp26130;var inst_26038__$1 = tmp26129;var inst_26039__$1 = tmp26131;var inst_26040__$1 = inst_26048;var state_26096__$1 = (function (){var statearr_26135 = state_26096;(statearr_26135[(12)] = inst_26040__$1);
(statearr_26135[(13)] = inst_26038__$1);
(statearr_26135[(14)] = inst_26037__$1);
(statearr_26135[(15)] = inst_26039__$1);
(statearr_26135[(17)] = inst_26047);
return statearr_26135;
})();var statearr_26136_26172 = state_26096__$1;(statearr_26136_26172[(2)] = null);
(statearr_26136_26172[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (18)))
{var inst_26066 = (state_26096[(2)]);var state_26096__$1 = state_26096;var statearr_26137_26173 = state_26096__$1;(statearr_26137_26173[(2)] = inst_26066);
(statearr_26137_26173[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26097 === (8)))
{var inst_26040 = (state_26096[(12)]);var inst_26039 = (state_26096[(15)]);var inst_26042 = (inst_26040 < inst_26039);var inst_26043 = inst_26042;var state_26096__$1 = state_26096;if(cljs.core.truth_(inst_26043))
{var statearr_26138_26174 = state_26096__$1;(statearr_26138_26174[(1)] = (10));
} else
{var statearr_26139_26175 = state_26096__$1;(statearr_26139_26175[(1)] = (11));
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
});})(c__12292__auto___26147,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26147,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26143[(0)] = state_machine__12278__auto__);
(statearr_26143[(1)] = (1));
return statearr_26143;
});
var state_machine__12278__auto____1 = (function (state_26096){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26096);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26144){if((e26144 instanceof Object))
{var ex__12281__auto__ = e26144;var statearr_26145_26176 = state_26096;(statearr_26145_26176[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26096);
return cljs.core.constant$keyword$82;
} else
{throw e26144;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26177 = state_26096;
state_26096 = G__26177;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26096){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26147,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26146 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26147);
return statearr_26146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26147,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26258 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26258) : cljs.core.atom.call(null,G__26258));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26297){var state_val_26298 = (state_26297[(1)]);if((state_val_26298 === (7)))
{var state_26297__$1 = state_26297;var statearr_26299_26332 = state_26297__$1;(statearr_26299_26332[(2)] = null);
(statearr_26299_26332[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (1)))
{var state_26297__$1 = state_26297;var statearr_26300_26333 = state_26297__$1;(statearr_26300_26333[(2)] = null);
(statearr_26300_26333[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (4)))
{var inst_26261 = (state_26297[(7)]);var inst_26263 = (inst_26261 < cnt);var state_26297__$1 = state_26297;if(cljs.core.truth_(inst_26263))
{var statearr_26301_26334 = state_26297__$1;(statearr_26301_26334[(1)] = (6));
} else
{var statearr_26302_26335 = state_26297__$1;(statearr_26302_26335[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (15)))
{var inst_26293 = (state_26297[(2)]);var state_26297__$1 = state_26297;var statearr_26303_26336 = state_26297__$1;(statearr_26303_26336[(2)] = inst_26293);
(statearr_26303_26336[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (13)))
{var inst_26286 = cljs.core.async.close_BANG_(out);var state_26297__$1 = state_26297;var statearr_26304_26337 = state_26297__$1;(statearr_26304_26337[(2)] = inst_26286);
(statearr_26304_26337[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (6)))
{var state_26297__$1 = state_26297;var statearr_26305_26338 = state_26297__$1;(statearr_26305_26338[(2)] = null);
(statearr_26305_26338[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (3)))
{var inst_26295 = (state_26297[(2)]);var state_26297__$1 = state_26297;return cljs.core.async.impl.ioc_helpers.return_chan(state_26297__$1,inst_26295);
} else
{if((state_val_26298 === (12)))
{var inst_26283 = (state_26297[(8)]);var inst_26283__$1 = (state_26297[(2)]);var inst_26284 = cljs.core.some(cljs.core.nil_QMARK_,inst_26283__$1);var state_26297__$1 = (function (){var statearr_26306 = state_26297;(statearr_26306[(8)] = inst_26283__$1);
return statearr_26306;
})();if(cljs.core.truth_(inst_26284))
{var statearr_26307_26339 = state_26297__$1;(statearr_26307_26339[(1)] = (13));
} else
{var statearr_26308_26340 = state_26297__$1;(statearr_26308_26340[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (2)))
{var inst_26260 = (function (){var G__26309 = dctr;var G__26310 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26309,G__26310) : cljs.core.reset_BANG_.call(null,G__26309,G__26310));
})();var inst_26261 = (0);var state_26297__$1 = (function (){var statearr_26311 = state_26297;(statearr_26311[(7)] = inst_26261);
(statearr_26311[(9)] = inst_26260);
return statearr_26311;
})();var statearr_26312_26341 = state_26297__$1;(statearr_26312_26341[(2)] = null);
(statearr_26312_26341[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (11)))
{var inst_26261 = (state_26297[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26297,(10),Object,null,(9));var inst_26270 = (function (){var G__26313 = inst_26261;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26313) : chs__$1.call(null,G__26313));
})();var inst_26271 = (function (){var G__26314 = inst_26261;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26314) : done.call(null,G__26314));
})();var inst_26272 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26270,inst_26271);var state_26297__$1 = state_26297;var statearr_26315_26342 = state_26297__$1;(statearr_26315_26342[(2)] = inst_26272);
cljs.core.async.impl.ioc_helpers.process_exception(state_26297__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (9)))
{var inst_26261 = (state_26297[(7)]);var inst_26274 = (state_26297[(2)]);var inst_26275 = (inst_26261 + (1));var inst_26261__$1 = inst_26275;var state_26297__$1 = (function (){var statearr_26316 = state_26297;(statearr_26316[(7)] = inst_26261__$1);
(statearr_26316[(10)] = inst_26274);
return statearr_26316;
})();var statearr_26317_26343 = state_26297__$1;(statearr_26317_26343[(2)] = null);
(statearr_26317_26343[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (5)))
{var inst_26281 = (state_26297[(2)]);var state_26297__$1 = (function (){var statearr_26318 = state_26297;(statearr_26318[(11)] = inst_26281);
return statearr_26318;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26297__$1,(12),dchan);
} else
{if((state_val_26298 === (14)))
{var inst_26283 = (state_26297[(8)]);var inst_26288 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26283);var state_26297__$1 = state_26297;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26297__$1,(16),out,inst_26288);
} else
{if((state_val_26298 === (16)))
{var inst_26290 = (state_26297[(2)]);var state_26297__$1 = (function (){var statearr_26319 = state_26297;(statearr_26319[(12)] = inst_26290);
return statearr_26319;
})();var statearr_26320_26344 = state_26297__$1;(statearr_26320_26344[(2)] = null);
(statearr_26320_26344[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (10)))
{var inst_26265 = (state_26297[(2)]);var inst_26266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26297__$1 = (function (){var statearr_26321 = state_26297;(statearr_26321[(13)] = inst_26265);
return statearr_26321;
})();var statearr_26322_26345 = state_26297__$1;(statearr_26322_26345[(2)] = inst_26266);
cljs.core.async.impl.ioc_helpers.process_exception(state_26297__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26298 === (8)))
{var inst_26279 = (state_26297[(2)]);var state_26297__$1 = state_26297;var statearr_26323_26346 = state_26297__$1;(statearr_26323_26346[(2)] = inst_26279);
(statearr_26323_26346[(1)] = (5));
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
});})(c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26327[(0)] = state_machine__12278__auto__);
(statearr_26327[(1)] = (1));
return statearr_26327;
});
var state_machine__12278__auto____1 = (function (state_26297){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26297);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26328){if((e26328 instanceof Object))
{var ex__12281__auto__ = e26328;var statearr_26329_26347 = state_26297;(statearr_26329_26347[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26297);
return cljs.core.constant$keyword$82;
} else
{throw e26328;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26348 = state_26297;
state_26297 = G__26348;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26330 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26331);
return statearr_26330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26331,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26458,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26458,out){
return (function (state_26434){var state_val_26435 = (state_26434[(1)]);if((state_val_26435 === (7)))
{var inst_26413 = (state_26434[(7)]);var inst_26414 = (state_26434[(8)]);var inst_26413__$1 = (state_26434[(2)]);var inst_26414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26413__$1,(0),null);var inst_26415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26413__$1,(1),null);var inst_26416 = (inst_26414__$1 == null);var state_26434__$1 = (function (){var statearr_26436 = state_26434;(statearr_26436[(7)] = inst_26413__$1);
(statearr_26436[(8)] = inst_26414__$1);
(statearr_26436[(9)] = inst_26415);
return statearr_26436;
})();if(cljs.core.truth_(inst_26416))
{var statearr_26437_26459 = state_26434__$1;(statearr_26437_26459[(1)] = (8));
} else
{var statearr_26438_26460 = state_26434__$1;(statearr_26438_26460[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (1)))
{var inst_26405 = cljs.core.vec(chs);var inst_26406 = inst_26405;var state_26434__$1 = (function (){var statearr_26439 = state_26434;(statearr_26439[(10)] = inst_26406);
return statearr_26439;
})();var statearr_26440_26461 = state_26434__$1;(statearr_26440_26461[(2)] = null);
(statearr_26440_26461[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (4)))
{var inst_26406 = (state_26434[(10)]);var state_26434__$1 = state_26434;return cljs.core.async.ioc_alts_BANG_(state_26434__$1,(7),inst_26406);
} else
{if((state_val_26435 === (6)))
{var inst_26430 = (state_26434[(2)]);var state_26434__$1 = state_26434;var statearr_26441_26462 = state_26434__$1;(statearr_26441_26462[(2)] = inst_26430);
(statearr_26441_26462[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (3)))
{var inst_26432 = (state_26434[(2)]);var state_26434__$1 = state_26434;return cljs.core.async.impl.ioc_helpers.return_chan(state_26434__$1,inst_26432);
} else
{if((state_val_26435 === (2)))
{var inst_26406 = (state_26434[(10)]);var inst_26408 = cljs.core.count(inst_26406);var inst_26409 = (inst_26408 > (0));var state_26434__$1 = state_26434;if(cljs.core.truth_(inst_26409))
{var statearr_26443_26463 = state_26434__$1;(statearr_26443_26463[(1)] = (4));
} else
{var statearr_26444_26464 = state_26434__$1;(statearr_26444_26464[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (11)))
{var inst_26406 = (state_26434[(10)]);var inst_26423 = (state_26434[(2)]);var tmp26442 = inst_26406;var inst_26406__$1 = tmp26442;var state_26434__$1 = (function (){var statearr_26445 = state_26434;(statearr_26445[(11)] = inst_26423);
(statearr_26445[(10)] = inst_26406__$1);
return statearr_26445;
})();var statearr_26446_26465 = state_26434__$1;(statearr_26446_26465[(2)] = null);
(statearr_26446_26465[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (9)))
{var inst_26414 = (state_26434[(8)]);var state_26434__$1 = state_26434;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26434__$1,(11),out,inst_26414);
} else
{if((state_val_26435 === (5)))
{var inst_26428 = cljs.core.async.close_BANG_(out);var state_26434__$1 = state_26434;var statearr_26447_26466 = state_26434__$1;(statearr_26447_26466[(2)] = inst_26428);
(statearr_26447_26466[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (10)))
{var inst_26426 = (state_26434[(2)]);var state_26434__$1 = state_26434;var statearr_26448_26467 = state_26434__$1;(statearr_26448_26467[(2)] = inst_26426);
(statearr_26448_26467[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26435 === (8)))
{var inst_26406 = (state_26434[(10)]);var inst_26413 = (state_26434[(7)]);var inst_26414 = (state_26434[(8)]);var inst_26415 = (state_26434[(9)]);var inst_26418 = (function (){var c = inst_26415;var v = inst_26414;var vec__26411 = inst_26413;var cs = inst_26406;return ((function (c,v,vec__26411,cs,inst_26406,inst_26413,inst_26414,inst_26415,state_val_26435,c__12292__auto___26458,out){
return (function (p1__26349_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26349_SHARP_);
});
;})(c,v,vec__26411,cs,inst_26406,inst_26413,inst_26414,inst_26415,state_val_26435,c__12292__auto___26458,out))
})();var inst_26419 = cljs.core.filterv(inst_26418,inst_26406);var inst_26406__$1 = inst_26419;var state_26434__$1 = (function (){var statearr_26449 = state_26434;(statearr_26449[(10)] = inst_26406__$1);
return statearr_26449;
})();var statearr_26450_26468 = state_26434__$1;(statearr_26450_26468[(2)] = null);
(statearr_26450_26468[(1)] = (2));
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
});})(c__12292__auto___26458,out))
;return ((function (switch__12277__auto__,c__12292__auto___26458,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26454 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26454[(0)] = state_machine__12278__auto__);
(statearr_26454[(1)] = (1));
return statearr_26454;
});
var state_machine__12278__auto____1 = (function (state_26434){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26434);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object))
{var ex__12281__auto__ = e26455;var statearr_26456_26469 = state_26434;(statearr_26456_26469[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26434);
return cljs.core.constant$keyword$82;
} else
{throw e26455;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26470 = state_26434;
state_26434 = G__26470;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26434){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26458,out))
})();var state__12294__auto__ = (function (){var statearr_26457 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26458);
return statearr_26457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26458,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26566,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26566,out){
return (function (state_26543){var state_val_26544 = (state_26543[(1)]);if((state_val_26544 === (7)))
{var inst_26525 = (state_26543[(7)]);var inst_26525__$1 = (state_26543[(2)]);var inst_26526 = (inst_26525__$1 == null);var inst_26527 = cljs.core.not(inst_26526);var state_26543__$1 = (function (){var statearr_26545 = state_26543;(statearr_26545[(7)] = inst_26525__$1);
return statearr_26545;
})();if(inst_26527)
{var statearr_26546_26567 = state_26543__$1;(statearr_26546_26567[(1)] = (8));
} else
{var statearr_26547_26568 = state_26543__$1;(statearr_26547_26568[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (1)))
{var inst_26520 = (0);var state_26543__$1 = (function (){var statearr_26548 = state_26543;(statearr_26548[(8)] = inst_26520);
return statearr_26548;
})();var statearr_26549_26569 = state_26543__$1;(statearr_26549_26569[(2)] = null);
(statearr_26549_26569[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (4)))
{var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26543__$1,(7),ch);
} else
{if((state_val_26544 === (6)))
{var inst_26538 = (state_26543[(2)]);var state_26543__$1 = state_26543;var statearr_26550_26570 = state_26543__$1;(statearr_26550_26570[(2)] = inst_26538);
(statearr_26550_26570[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (3)))
{var inst_26540 = (state_26543[(2)]);var inst_26541 = cljs.core.async.close_BANG_(out);var state_26543__$1 = (function (){var statearr_26551 = state_26543;(statearr_26551[(9)] = inst_26540);
return statearr_26551;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26543__$1,inst_26541);
} else
{if((state_val_26544 === (2)))
{var inst_26520 = (state_26543[(8)]);var inst_26522 = (inst_26520 < n);var state_26543__$1 = state_26543;if(cljs.core.truth_(inst_26522))
{var statearr_26552_26571 = state_26543__$1;(statearr_26552_26571[(1)] = (4));
} else
{var statearr_26553_26572 = state_26543__$1;(statearr_26553_26572[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (11)))
{var inst_26520 = (state_26543[(8)]);var inst_26530 = (state_26543[(2)]);var inst_26531 = (inst_26520 + (1));var inst_26520__$1 = inst_26531;var state_26543__$1 = (function (){var statearr_26554 = state_26543;(statearr_26554[(10)] = inst_26530);
(statearr_26554[(8)] = inst_26520__$1);
return statearr_26554;
})();var statearr_26555_26573 = state_26543__$1;(statearr_26555_26573[(2)] = null);
(statearr_26555_26573[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (9)))
{var state_26543__$1 = state_26543;var statearr_26556_26574 = state_26543__$1;(statearr_26556_26574[(2)] = null);
(statearr_26556_26574[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (5)))
{var state_26543__$1 = state_26543;var statearr_26557_26575 = state_26543__$1;(statearr_26557_26575[(2)] = null);
(statearr_26557_26575[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (10)))
{var inst_26535 = (state_26543[(2)]);var state_26543__$1 = state_26543;var statearr_26558_26576 = state_26543__$1;(statearr_26558_26576[(2)] = inst_26535);
(statearr_26558_26576[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26544 === (8)))
{var inst_26525 = (state_26543[(7)]);var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26543__$1,(11),out,inst_26525);
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
});})(c__12292__auto___26566,out))
;return ((function (switch__12277__auto__,c__12292__auto___26566,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26562 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26562[(0)] = state_machine__12278__auto__);
(statearr_26562[(1)] = (1));
return statearr_26562;
});
var state_machine__12278__auto____1 = (function (state_26543){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26543);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26563){if((e26563 instanceof Object))
{var ex__12281__auto__ = e26563;var statearr_26564_26577 = state_26543;(statearr_26564_26577[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26543);
return cljs.core.constant$keyword$82;
} else
{throw e26563;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26578 = state_26543;
state_26543 = G__26578;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26543){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26566,out))
})();var state__12294__auto__ = (function (){var statearr_26565 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26566);
return statearr_26565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26566,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26591 = (function (ch,f,map_LT_,meta26592){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26592 = meta26592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26591.cljs$lang$type = true;
cljs.core.async.t26591.cljs$lang$ctorStr = "cljs.core.async/t26591";
cljs.core.async.t26591.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26591");
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26594 = (function (fn1,_,meta26592,ch,f,map_LT_,meta26595){
this.fn1 = fn1;
this._ = _;
this.meta26592 = meta26592;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26595 = meta26595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26594.cljs$lang$type = true;
cljs.core.async.t26594.cljs$lang$ctorStr = "cljs.core.async/t26594";
cljs.core.async.t26594.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26594");
});})(___$1))
;
cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26579_SHARP_){var G__26597 = (((p1__26579_SHARP_ == null))?null:(function (){var G__26598 = p1__26579_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26598) : self__.f.call(null,G__26598));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26597) : f1.call(null,G__26597));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26596){var self__ = this;
var _26596__$1 = this;return self__.meta26595;
});})(___$1))
;
cljs.core.async.t26594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26596,meta26595__$1){var self__ = this;
var _26596__$1 = this;return (new cljs.core.async.t26594(self__.fn1,self__._,self__.meta26592,self__.ch,self__.f,self__.map_LT_,meta26595__$1));
});})(___$1))
;
cljs.core.async.__GT_t26594 = ((function (___$1){
return (function __GT_t26594(fn1__$1,___$2,meta26592__$1,ch__$2,f__$2,map_LT___$2,meta26595){return (new cljs.core.async.t26594(fn1__$1,___$2,meta26592__$1,ch__$2,f__$2,map_LT___$2,meta26595));
});})(___$1))
;
}
return (new cljs.core.async.t26594(fn1,___$1,self__.meta26592,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26599 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26599) : cljs.core.deref.call(null,G__26599));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26600 = (function (){var G__26601 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26601) : cljs.core.deref.call(null,G__26601));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26600) : self__.f.call(null,G__26600));
})());
} else
{return ret;
}
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26593){var self__ = this;
var _26593__$1 = this;return self__.meta26592;
});
cljs.core.async.t26591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26593,meta26592__$1){var self__ = this;
var _26593__$1 = this;return (new cljs.core.async.t26591(self__.ch,self__.f,self__.map_LT_,meta26592__$1));
});
cljs.core.async.__GT_t26591 = (function __GT_t26591(ch__$1,f__$1,map_LT___$1,meta26592){return (new cljs.core.async.t26591(ch__$1,f__$1,map_LT___$1,meta26592));
});
}
return (new cljs.core.async.t26591(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26606 = (function (ch,f,map_GT_,meta26607){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26607 = meta26607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26606.cljs$lang$type = true;
cljs.core.async.t26606.cljs$lang$ctorStr = "cljs.core.async/t26606";
cljs.core.async.t26606.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26606");
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26609 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26609) : self__.f.call(null,G__26609));
})(),fn1);
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26608){var self__ = this;
var _26608__$1 = this;return self__.meta26607;
});
cljs.core.async.t26606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26608,meta26607__$1){var self__ = this;
var _26608__$1 = this;return (new cljs.core.async.t26606(self__.ch,self__.f,self__.map_GT_,meta26607__$1));
});
cljs.core.async.__GT_t26606 = (function __GT_t26606(ch__$1,f__$1,map_GT___$1,meta26607){return (new cljs.core.async.t26606(ch__$1,f__$1,map_GT___$1,meta26607));
});
}
return (new cljs.core.async.t26606(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26614 = (function (ch,p,filter_GT_,meta26615){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26615 = meta26615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26614.cljs$lang$type = true;
cljs.core.async.t26614.cljs$lang$ctorStr = "cljs.core.async/t26614";
cljs.core.async.t26614.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26614");
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26617 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26617) : self__.p.call(null,G__26617));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26616){var self__ = this;
var _26616__$1 = this;return self__.meta26615;
});
cljs.core.async.t26614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26616,meta26615__$1){var self__ = this;
var _26616__$1 = this;return (new cljs.core.async.t26614(self__.ch,self__.p,self__.filter_GT_,meta26615__$1));
});
cljs.core.async.__GT_t26614 = (function __GT_t26614(ch__$1,p__$1,filter_GT___$1,meta26615){return (new cljs.core.async.t26614(ch__$1,p__$1,filter_GT___$1,meta26615));
});
}
return (new cljs.core.async.t26614(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26705,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26705,out){
return (function (state_26683){var state_val_26684 = (state_26683[(1)]);if((state_val_26684 === (7)))
{var inst_26679 = (state_26683[(2)]);var state_26683__$1 = state_26683;var statearr_26685_26706 = state_26683__$1;(statearr_26685_26706[(2)] = inst_26679);
(statearr_26685_26706[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (1)))
{var state_26683__$1 = state_26683;var statearr_26686_26707 = state_26683__$1;(statearr_26686_26707[(2)] = null);
(statearr_26686_26707[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (4)))
{var inst_26665 = (state_26683[(7)]);var inst_26665__$1 = (state_26683[(2)]);var inst_26666 = (inst_26665__$1 == null);var state_26683__$1 = (function (){var statearr_26687 = state_26683;(statearr_26687[(7)] = inst_26665__$1);
return statearr_26687;
})();if(cljs.core.truth_(inst_26666))
{var statearr_26688_26708 = state_26683__$1;(statearr_26688_26708[(1)] = (5));
} else
{var statearr_26689_26709 = state_26683__$1;(statearr_26689_26709[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (6)))
{var inst_26665 = (state_26683[(7)]);var inst_26670 = (function (){var G__26690 = inst_26665;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26690) : p.call(null,G__26690));
})();var state_26683__$1 = state_26683;if(cljs.core.truth_(inst_26670))
{var statearr_26691_26710 = state_26683__$1;(statearr_26691_26710[(1)] = (8));
} else
{var statearr_26692_26711 = state_26683__$1;(statearr_26692_26711[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (3)))
{var inst_26681 = (state_26683[(2)]);var state_26683__$1 = state_26683;return cljs.core.async.impl.ioc_helpers.return_chan(state_26683__$1,inst_26681);
} else
{if((state_val_26684 === (2)))
{var state_26683__$1 = state_26683;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26683__$1,(4),ch);
} else
{if((state_val_26684 === (11)))
{var inst_26673 = (state_26683[(2)]);var state_26683__$1 = state_26683;var statearr_26693_26712 = state_26683__$1;(statearr_26693_26712[(2)] = inst_26673);
(statearr_26693_26712[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (9)))
{var state_26683__$1 = state_26683;var statearr_26694_26713 = state_26683__$1;(statearr_26694_26713[(2)] = null);
(statearr_26694_26713[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (5)))
{var inst_26668 = cljs.core.async.close_BANG_(out);var state_26683__$1 = state_26683;var statearr_26695_26714 = state_26683__$1;(statearr_26695_26714[(2)] = inst_26668);
(statearr_26695_26714[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (10)))
{var inst_26676 = (state_26683[(2)]);var state_26683__$1 = (function (){var statearr_26696 = state_26683;(statearr_26696[(8)] = inst_26676);
return statearr_26696;
})();var statearr_26697_26715 = state_26683__$1;(statearr_26697_26715[(2)] = null);
(statearr_26697_26715[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26684 === (8)))
{var inst_26665 = (state_26683[(7)]);var state_26683__$1 = state_26683;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26683__$1,(11),out,inst_26665);
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
});})(c__12292__auto___26705,out))
;return ((function (switch__12277__auto__,c__12292__auto___26705,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26701 = [null,null,null,null,null,null,null,null,null];(statearr_26701[(0)] = state_machine__12278__auto__);
(statearr_26701[(1)] = (1));
return statearr_26701;
});
var state_machine__12278__auto____1 = (function (state_26683){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26683);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26702){if((e26702 instanceof Object))
{var ex__12281__auto__ = e26702;var statearr_26703_26716 = state_26683;(statearr_26703_26716[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26683);
return cljs.core.constant$keyword$82;
} else
{throw e26702;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26717 = state_26683;
state_26683 = G__26717;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26683){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26705,out))
})();var state__12294__auto__ = (function (){var statearr_26704 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26705);
return statearr_26704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26705,out))
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
return (function (state_26887){var state_val_26888 = (state_26887[(1)]);if((state_val_26888 === (7)))
{var inst_26883 = (state_26887[(2)]);var state_26887__$1 = state_26887;var statearr_26889_26931 = state_26887__$1;(statearr_26889_26931[(2)] = inst_26883);
(statearr_26889_26931[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (20)))
{var inst_26853 = (state_26887[(7)]);var inst_26864 = (state_26887[(2)]);var inst_26865 = cljs.core.next(inst_26853);var inst_26839 = inst_26865;var inst_26840 = null;var inst_26841 = (0);var inst_26842 = (0);var state_26887__$1 = (function (){var statearr_26890 = state_26887;(statearr_26890[(8)] = inst_26842);
(statearr_26890[(9)] = inst_26841);
(statearr_26890[(10)] = inst_26839);
(statearr_26890[(11)] = inst_26840);
(statearr_26890[(12)] = inst_26864);
return statearr_26890;
})();var statearr_26891_26932 = state_26887__$1;(statearr_26891_26932[(2)] = null);
(statearr_26891_26932[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (1)))
{var state_26887__$1 = state_26887;var statearr_26892_26933 = state_26887__$1;(statearr_26892_26933[(2)] = null);
(statearr_26892_26933[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (4)))
{var inst_26828 = (state_26887[(13)]);var inst_26828__$1 = (state_26887[(2)]);var inst_26829 = (inst_26828__$1 == null);var state_26887__$1 = (function (){var statearr_26893 = state_26887;(statearr_26893[(13)] = inst_26828__$1);
return statearr_26893;
})();if(cljs.core.truth_(inst_26829))
{var statearr_26894_26934 = state_26887__$1;(statearr_26894_26934[(1)] = (5));
} else
{var statearr_26895_26935 = state_26887__$1;(statearr_26895_26935[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (15)))
{var state_26887__$1 = state_26887;var statearr_26899_26936 = state_26887__$1;(statearr_26899_26936[(2)] = null);
(statearr_26899_26936[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (21)))
{var state_26887__$1 = state_26887;var statearr_26900_26937 = state_26887__$1;(statearr_26900_26937[(2)] = null);
(statearr_26900_26937[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (13)))
{var inst_26842 = (state_26887[(8)]);var inst_26841 = (state_26887[(9)]);var inst_26839 = (state_26887[(10)]);var inst_26840 = (state_26887[(11)]);var inst_26849 = (state_26887[(2)]);var inst_26850 = (inst_26842 + (1));var tmp26896 = inst_26841;var tmp26897 = inst_26839;var tmp26898 = inst_26840;var inst_26839__$1 = tmp26897;var inst_26840__$1 = tmp26898;var inst_26841__$1 = tmp26896;var inst_26842__$1 = inst_26850;var state_26887__$1 = (function (){var statearr_26901 = state_26887;(statearr_26901[(14)] = inst_26849);
(statearr_26901[(8)] = inst_26842__$1);
(statearr_26901[(9)] = inst_26841__$1);
(statearr_26901[(10)] = inst_26839__$1);
(statearr_26901[(11)] = inst_26840__$1);
return statearr_26901;
})();var statearr_26902_26938 = state_26887__$1;(statearr_26902_26938[(2)] = null);
(statearr_26902_26938[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (22)))
{var state_26887__$1 = state_26887;var statearr_26903_26939 = state_26887__$1;(statearr_26903_26939[(2)] = null);
(statearr_26903_26939[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (6)))
{var inst_26828 = (state_26887[(13)]);var inst_26837 = (function (){var G__26904 = inst_26828;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26904) : f.call(null,G__26904));
})();var inst_26838 = cljs.core.seq(inst_26837);var inst_26839 = inst_26838;var inst_26840 = null;var inst_26841 = (0);var inst_26842 = (0);var state_26887__$1 = (function (){var statearr_26905 = state_26887;(statearr_26905[(8)] = inst_26842);
(statearr_26905[(9)] = inst_26841);
(statearr_26905[(10)] = inst_26839);
(statearr_26905[(11)] = inst_26840);
return statearr_26905;
})();var statearr_26906_26940 = state_26887__$1;(statearr_26906_26940[(2)] = null);
(statearr_26906_26940[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (17)))
{var inst_26853 = (state_26887[(7)]);var inst_26857 = cljs.core.chunk_first(inst_26853);var inst_26858 = cljs.core.chunk_rest(inst_26853);var inst_26859 = cljs.core.count(inst_26857);var inst_26839 = inst_26858;var inst_26840 = inst_26857;var inst_26841 = inst_26859;var inst_26842 = (0);var state_26887__$1 = (function (){var statearr_26907 = state_26887;(statearr_26907[(8)] = inst_26842);
(statearr_26907[(9)] = inst_26841);
(statearr_26907[(10)] = inst_26839);
(statearr_26907[(11)] = inst_26840);
return statearr_26907;
})();var statearr_26908_26941 = state_26887__$1;(statearr_26908_26941[(2)] = null);
(statearr_26908_26941[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (3)))
{var inst_26885 = (state_26887[(2)]);var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.return_chan(state_26887__$1,inst_26885);
} else
{if((state_val_26888 === (12)))
{var inst_26873 = (state_26887[(2)]);var state_26887__$1 = state_26887;var statearr_26909_26942 = state_26887__$1;(statearr_26909_26942[(2)] = inst_26873);
(statearr_26909_26942[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (2)))
{var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26887__$1,(4),in$);
} else
{if((state_val_26888 === (23)))
{var inst_26881 = (state_26887[(2)]);var state_26887__$1 = state_26887;var statearr_26910_26943 = state_26887__$1;(statearr_26910_26943[(2)] = inst_26881);
(statearr_26910_26943[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (19)))
{var inst_26868 = (state_26887[(2)]);var state_26887__$1 = state_26887;var statearr_26911_26944 = state_26887__$1;(statearr_26911_26944[(2)] = inst_26868);
(statearr_26911_26944[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (11)))
{var inst_26853 = (state_26887[(7)]);var inst_26839 = (state_26887[(10)]);var inst_26853__$1 = cljs.core.seq(inst_26839);var state_26887__$1 = (function (){var statearr_26912 = state_26887;(statearr_26912[(7)] = inst_26853__$1);
return statearr_26912;
})();if(inst_26853__$1)
{var statearr_26913_26945 = state_26887__$1;(statearr_26913_26945[(1)] = (14));
} else
{var statearr_26914_26946 = state_26887__$1;(statearr_26914_26946[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (9)))
{var inst_26875 = (state_26887[(2)]);var inst_26876 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26887__$1 = (function (){var statearr_26915 = state_26887;(statearr_26915[(15)] = inst_26875);
return statearr_26915;
})();if(cljs.core.truth_(inst_26876))
{var statearr_26916_26947 = state_26887__$1;(statearr_26916_26947[(1)] = (21));
} else
{var statearr_26917_26948 = state_26887__$1;(statearr_26917_26948[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (5)))
{var inst_26831 = cljs.core.async.close_BANG_(out);var state_26887__$1 = state_26887;var statearr_26918_26949 = state_26887__$1;(statearr_26918_26949[(2)] = inst_26831);
(statearr_26918_26949[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (14)))
{var inst_26853 = (state_26887[(7)]);var inst_26855 = cljs.core.chunked_seq_QMARK_(inst_26853);var state_26887__$1 = state_26887;if(inst_26855)
{var statearr_26919_26950 = state_26887__$1;(statearr_26919_26950[(1)] = (17));
} else
{var statearr_26920_26951 = state_26887__$1;(statearr_26920_26951[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (16)))
{var inst_26871 = (state_26887[(2)]);var state_26887__$1 = state_26887;var statearr_26921_26952 = state_26887__$1;(statearr_26921_26952[(2)] = inst_26871);
(statearr_26921_26952[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26888 === (10)))
{var inst_26842 = (state_26887[(8)]);var inst_26840 = (state_26887[(11)]);var inst_26847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26840,inst_26842);var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26887__$1,(13),out,inst_26847);
} else
{if((state_val_26888 === (18)))
{var inst_26853 = (state_26887[(7)]);var inst_26862 = cljs.core.first(inst_26853);var state_26887__$1 = state_26887;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26887__$1,(20),out,inst_26862);
} else
{if((state_val_26888 === (8)))
{var inst_26842 = (state_26887[(8)]);var inst_26841 = (state_26887[(9)]);var inst_26844 = (inst_26842 < inst_26841);var inst_26845 = inst_26844;var state_26887__$1 = state_26887;if(cljs.core.truth_(inst_26845))
{var statearr_26922_26953 = state_26887__$1;(statearr_26922_26953[(1)] = (10));
} else
{var statearr_26923_26954 = state_26887__$1;(statearr_26923_26954[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26927[(0)] = state_machine__12278__auto__);
(statearr_26927[(1)] = (1));
return statearr_26927;
});
var state_machine__12278__auto____1 = (function (state_26887){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26887);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26928){if((e26928 instanceof Object))
{var ex__12281__auto__ = e26928;var statearr_26929_26955 = state_26887;(statearr_26929_26955[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26887);
return cljs.core.constant$keyword$82;
} else
{throw e26928;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26956 = state_26887;
state_26887 = G__26956;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26887){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26930 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26930;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27061,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27061,out){
return (function (state_27036){var state_val_27037 = (state_27036[(1)]);if((state_val_27037 === (7)))
{var inst_27031 = (state_27036[(2)]);var state_27036__$1 = state_27036;var statearr_27038_27062 = state_27036__$1;(statearr_27038_27062[(2)] = inst_27031);
(statearr_27038_27062[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (1)))
{var inst_27013 = null;var state_27036__$1 = (function (){var statearr_27039 = state_27036;(statearr_27039[(7)] = inst_27013);
return statearr_27039;
})();var statearr_27040_27063 = state_27036__$1;(statearr_27040_27063[(2)] = null);
(statearr_27040_27063[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (4)))
{var inst_27016 = (state_27036[(8)]);var inst_27016__$1 = (state_27036[(2)]);var inst_27017 = (inst_27016__$1 == null);var inst_27018 = cljs.core.not(inst_27017);var state_27036__$1 = (function (){var statearr_27041 = state_27036;(statearr_27041[(8)] = inst_27016__$1);
return statearr_27041;
})();if(inst_27018)
{var statearr_27042_27064 = state_27036__$1;(statearr_27042_27064[(1)] = (5));
} else
{var statearr_27043_27065 = state_27036__$1;(statearr_27043_27065[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (6)))
{var state_27036__$1 = state_27036;var statearr_27044_27066 = state_27036__$1;(statearr_27044_27066[(2)] = null);
(statearr_27044_27066[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (3)))
{var inst_27033 = (state_27036[(2)]);var inst_27034 = cljs.core.async.close_BANG_(out);var state_27036__$1 = (function (){var statearr_27045 = state_27036;(statearr_27045[(9)] = inst_27033);
return statearr_27045;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27036__$1,inst_27034);
} else
{if((state_val_27037 === (2)))
{var state_27036__$1 = state_27036;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27036__$1,(4),ch);
} else
{if((state_val_27037 === (11)))
{var inst_27016 = (state_27036[(8)]);var inst_27025 = (state_27036[(2)]);var inst_27013 = inst_27016;var state_27036__$1 = (function (){var statearr_27046 = state_27036;(statearr_27046[(7)] = inst_27013);
(statearr_27046[(10)] = inst_27025);
return statearr_27046;
})();var statearr_27047_27067 = state_27036__$1;(statearr_27047_27067[(2)] = null);
(statearr_27047_27067[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (9)))
{var inst_27016 = (state_27036[(8)]);var state_27036__$1 = state_27036;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27036__$1,(11),out,inst_27016);
} else
{if((state_val_27037 === (5)))
{var inst_27013 = (state_27036[(7)]);var inst_27016 = (state_27036[(8)]);var inst_27020 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27016,inst_27013);var state_27036__$1 = state_27036;if(inst_27020)
{var statearr_27049_27068 = state_27036__$1;(statearr_27049_27068[(1)] = (8));
} else
{var statearr_27050_27069 = state_27036__$1;(statearr_27050_27069[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (10)))
{var inst_27028 = (state_27036[(2)]);var state_27036__$1 = state_27036;var statearr_27051_27070 = state_27036__$1;(statearr_27051_27070[(2)] = inst_27028);
(statearr_27051_27070[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27037 === (8)))
{var inst_27013 = (state_27036[(7)]);var tmp27048 = inst_27013;var inst_27013__$1 = tmp27048;var state_27036__$1 = (function (){var statearr_27052 = state_27036;(statearr_27052[(7)] = inst_27013__$1);
return statearr_27052;
})();var statearr_27053_27071 = state_27036__$1;(statearr_27053_27071[(2)] = null);
(statearr_27053_27071[(1)] = (2));
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
});})(c__12292__auto___27061,out))
;return ((function (switch__12277__auto__,c__12292__auto___27061,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27057 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27057[(0)] = state_machine__12278__auto__);
(statearr_27057[(1)] = (1));
return statearr_27057;
});
var state_machine__12278__auto____1 = (function (state_27036){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27036);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27058){if((e27058 instanceof Object))
{var ex__12281__auto__ = e27058;var statearr_27059_27072 = state_27036;(statearr_27059_27072[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27036);
return cljs.core.constant$keyword$82;
} else
{throw e27058;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27073 = state_27036;
state_27036 = G__27073;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27036){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27061,out))
})();var state__12294__auto__ = (function (){var statearr_27060 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27061);
return statearr_27060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27061,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27211,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27211,out){
return (function (state_27181){var state_val_27182 = (state_27181[(1)]);if((state_val_27182 === (7)))
{var inst_27177 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27183_27212 = state_27181__$1;(statearr_27183_27212[(2)] = inst_27177);
(statearr_27183_27212[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (1)))
{var inst_27144 = (new Array(n));var inst_27145 = inst_27144;var inst_27146 = (0);var state_27181__$1 = (function (){var statearr_27184 = state_27181;(statearr_27184[(7)] = inst_27146);
(statearr_27184[(8)] = inst_27145);
return statearr_27184;
})();var statearr_27185_27213 = state_27181__$1;(statearr_27185_27213[(2)] = null);
(statearr_27185_27213[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (4)))
{var inst_27149 = (state_27181[(9)]);var inst_27149__$1 = (state_27181[(2)]);var inst_27150 = (inst_27149__$1 == null);var inst_27151 = cljs.core.not(inst_27150);var state_27181__$1 = (function (){var statearr_27186 = state_27181;(statearr_27186[(9)] = inst_27149__$1);
return statearr_27186;
})();if(inst_27151)
{var statearr_27187_27214 = state_27181__$1;(statearr_27187_27214[(1)] = (5));
} else
{var statearr_27188_27215 = state_27181__$1;(statearr_27188_27215[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (15)))
{var inst_27171 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27189_27216 = state_27181__$1;(statearr_27189_27216[(2)] = inst_27171);
(statearr_27189_27216[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (13)))
{var state_27181__$1 = state_27181;var statearr_27190_27217 = state_27181__$1;(statearr_27190_27217[(2)] = null);
(statearr_27190_27217[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (6)))
{var inst_27146 = (state_27181[(7)]);var inst_27167 = (inst_27146 > (0));var state_27181__$1 = state_27181;if(cljs.core.truth_(inst_27167))
{var statearr_27191_27218 = state_27181__$1;(statearr_27191_27218[(1)] = (12));
} else
{var statearr_27192_27219 = state_27181__$1;(statearr_27192_27219[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (3)))
{var inst_27179 = (state_27181[(2)]);var state_27181__$1 = state_27181;return cljs.core.async.impl.ioc_helpers.return_chan(state_27181__$1,inst_27179);
} else
{if((state_val_27182 === (12)))
{var inst_27145 = (state_27181[(8)]);var inst_27169 = cljs.core.vec(inst_27145);var state_27181__$1 = state_27181;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27181__$1,(15),out,inst_27169);
} else
{if((state_val_27182 === (2)))
{var state_27181__$1 = state_27181;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27181__$1,(4),ch);
} else
{if((state_val_27182 === (11)))
{var inst_27161 = (state_27181[(2)]);var inst_27162 = (new Array(n));var inst_27145 = inst_27162;var inst_27146 = (0);var state_27181__$1 = (function (){var statearr_27193 = state_27181;(statearr_27193[(7)] = inst_27146);
(statearr_27193[(8)] = inst_27145);
(statearr_27193[(10)] = inst_27161);
return statearr_27193;
})();var statearr_27194_27220 = state_27181__$1;(statearr_27194_27220[(2)] = null);
(statearr_27194_27220[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (9)))
{var inst_27145 = (state_27181[(8)]);var inst_27159 = cljs.core.vec(inst_27145);var state_27181__$1 = state_27181;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27181__$1,(11),out,inst_27159);
} else
{if((state_val_27182 === (5)))
{var inst_27146 = (state_27181[(7)]);var inst_27149 = (state_27181[(9)]);var inst_27145 = (state_27181[(8)]);var inst_27154 = (state_27181[(11)]);var inst_27153 = (inst_27145[inst_27146] = inst_27149);var inst_27154__$1 = (inst_27146 + (1));var inst_27155 = (inst_27154__$1 < n);var state_27181__$1 = (function (){var statearr_27195 = state_27181;(statearr_27195[(11)] = inst_27154__$1);
(statearr_27195[(12)] = inst_27153);
return statearr_27195;
})();if(cljs.core.truth_(inst_27155))
{var statearr_27196_27221 = state_27181__$1;(statearr_27196_27221[(1)] = (8));
} else
{var statearr_27197_27222 = state_27181__$1;(statearr_27197_27222[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (14)))
{var inst_27174 = (state_27181[(2)]);var inst_27175 = cljs.core.async.close_BANG_(out);var state_27181__$1 = (function (){var statearr_27199 = state_27181;(statearr_27199[(13)] = inst_27174);
return statearr_27199;
})();var statearr_27200_27223 = state_27181__$1;(statearr_27200_27223[(2)] = inst_27175);
(statearr_27200_27223[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (10)))
{var inst_27165 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27201_27224 = state_27181__$1;(statearr_27201_27224[(2)] = inst_27165);
(statearr_27201_27224[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27182 === (8)))
{var inst_27145 = (state_27181[(8)]);var inst_27154 = (state_27181[(11)]);var tmp27198 = inst_27145;var inst_27145__$1 = tmp27198;var inst_27146 = inst_27154;var state_27181__$1 = (function (){var statearr_27202 = state_27181;(statearr_27202[(7)] = inst_27146);
(statearr_27202[(8)] = inst_27145__$1);
return statearr_27202;
})();var statearr_27203_27225 = state_27181__$1;(statearr_27203_27225[(2)] = null);
(statearr_27203_27225[(1)] = (2));
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
});})(c__12292__auto___27211,out))
;return ((function (switch__12277__auto__,c__12292__auto___27211,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27207[(0)] = state_machine__12278__auto__);
(statearr_27207[(1)] = (1));
return statearr_27207;
});
var state_machine__12278__auto____1 = (function (state_27181){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27181);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27208){if((e27208 instanceof Object))
{var ex__12281__auto__ = e27208;var statearr_27209_27226 = state_27181;(statearr_27209_27226[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27181);
return cljs.core.constant$keyword$82;
} else
{throw e27208;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27227 = state_27181;
state_27181 = G__27227;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27181){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27211,out))
})();var state__12294__auto__ = (function (){var statearr_27210 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27211);
return statearr_27210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27211,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27375,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27375,out){
return (function (state_27344){var state_val_27345 = (state_27344[(1)]);if((state_val_27345 === (7)))
{var inst_27340 = (state_27344[(2)]);var state_27344__$1 = state_27344;var statearr_27346_27376 = state_27344__$1;(statearr_27346_27376[(2)] = inst_27340);
(statearr_27346_27376[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (1)))
{var inst_27303 = [];var inst_27304 = inst_27303;var inst_27305 = cljs.core.constant$keyword$97;var state_27344__$1 = (function (){var statearr_27347 = state_27344;(statearr_27347[(7)] = inst_27304);
(statearr_27347[(8)] = inst_27305);
return statearr_27347;
})();var statearr_27348_27377 = state_27344__$1;(statearr_27348_27377[(2)] = null);
(statearr_27348_27377[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (4)))
{var inst_27308 = (state_27344[(9)]);var inst_27308__$1 = (state_27344[(2)]);var inst_27309 = (inst_27308__$1 == null);var inst_27310 = cljs.core.not(inst_27309);var state_27344__$1 = (function (){var statearr_27349 = state_27344;(statearr_27349[(9)] = inst_27308__$1);
return statearr_27349;
})();if(inst_27310)
{var statearr_27350_27378 = state_27344__$1;(statearr_27350_27378[(1)] = (5));
} else
{var statearr_27351_27379 = state_27344__$1;(statearr_27351_27379[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (15)))
{var inst_27334 = (state_27344[(2)]);var state_27344__$1 = state_27344;var statearr_27352_27380 = state_27344__$1;(statearr_27352_27380[(2)] = inst_27334);
(statearr_27352_27380[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (13)))
{var state_27344__$1 = state_27344;var statearr_27353_27381 = state_27344__$1;(statearr_27353_27381[(2)] = null);
(statearr_27353_27381[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (6)))
{var inst_27304 = (state_27344[(7)]);var inst_27329 = inst_27304.length;var inst_27330 = (inst_27329 > (0));var state_27344__$1 = state_27344;if(cljs.core.truth_(inst_27330))
{var statearr_27354_27382 = state_27344__$1;(statearr_27354_27382[(1)] = (12));
} else
{var statearr_27355_27383 = state_27344__$1;(statearr_27355_27383[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (3)))
{var inst_27342 = (state_27344[(2)]);var state_27344__$1 = state_27344;return cljs.core.async.impl.ioc_helpers.return_chan(state_27344__$1,inst_27342);
} else
{if((state_val_27345 === (12)))
{var inst_27304 = (state_27344[(7)]);var inst_27332 = cljs.core.vec(inst_27304);var state_27344__$1 = state_27344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27344__$1,(15),out,inst_27332);
} else
{if((state_val_27345 === (2)))
{var state_27344__$1 = state_27344;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27344__$1,(4),ch);
} else
{if((state_val_27345 === (11)))
{var inst_27308 = (state_27344[(9)]);var inst_27312 = (state_27344[(10)]);var inst_27322 = (state_27344[(2)]);var inst_27323 = [];var inst_27324 = inst_27323.push(inst_27308);var inst_27304 = inst_27323;var inst_27305 = inst_27312;var state_27344__$1 = (function (){var statearr_27356 = state_27344;(statearr_27356[(11)] = inst_27322);
(statearr_27356[(7)] = inst_27304);
(statearr_27356[(12)] = inst_27324);
(statearr_27356[(8)] = inst_27305);
return statearr_27356;
})();var statearr_27357_27384 = state_27344__$1;(statearr_27357_27384[(2)] = null);
(statearr_27357_27384[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (9)))
{var inst_27304 = (state_27344[(7)]);var inst_27320 = cljs.core.vec(inst_27304);var state_27344__$1 = state_27344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27344__$1,(11),out,inst_27320);
} else
{if((state_val_27345 === (5)))
{var inst_27308 = (state_27344[(9)]);var inst_27312 = (state_27344[(10)]);var inst_27305 = (state_27344[(8)]);var inst_27312__$1 = (function (){var G__27358 = inst_27308;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27358) : f.call(null,G__27358));
})();var inst_27313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27312__$1,inst_27305);var inst_27314 = cljs.core.keyword_identical_QMARK_(inst_27305,cljs.core.constant$keyword$97);var inst_27315 = (inst_27313) || (inst_27314);var state_27344__$1 = (function (){var statearr_27359 = state_27344;(statearr_27359[(10)] = inst_27312__$1);
return statearr_27359;
})();if(cljs.core.truth_(inst_27315))
{var statearr_27360_27385 = state_27344__$1;(statearr_27360_27385[(1)] = (8));
} else
{var statearr_27361_27386 = state_27344__$1;(statearr_27361_27386[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (14)))
{var inst_27337 = (state_27344[(2)]);var inst_27338 = cljs.core.async.close_BANG_(out);var state_27344__$1 = (function (){var statearr_27363 = state_27344;(statearr_27363[(13)] = inst_27337);
return statearr_27363;
})();var statearr_27364_27387 = state_27344__$1;(statearr_27364_27387[(2)] = inst_27338);
(statearr_27364_27387[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (10)))
{var inst_27327 = (state_27344[(2)]);var state_27344__$1 = state_27344;var statearr_27365_27388 = state_27344__$1;(statearr_27365_27388[(2)] = inst_27327);
(statearr_27365_27388[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27345 === (8)))
{var inst_27308 = (state_27344[(9)]);var inst_27304 = (state_27344[(7)]);var inst_27312 = (state_27344[(10)]);var inst_27317 = inst_27304.push(inst_27308);var tmp27362 = inst_27304;var inst_27304__$1 = tmp27362;var inst_27305 = inst_27312;var state_27344__$1 = (function (){var statearr_27366 = state_27344;(statearr_27366[(7)] = inst_27304__$1);
(statearr_27366[(14)] = inst_27317);
(statearr_27366[(8)] = inst_27305);
return statearr_27366;
})();var statearr_27367_27389 = state_27344__$1;(statearr_27367_27389[(2)] = null);
(statearr_27367_27389[(1)] = (2));
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
});})(c__12292__auto___27375,out))
;return ((function (switch__12277__auto__,c__12292__auto___27375,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27371[(0)] = state_machine__12278__auto__);
(statearr_27371[(1)] = (1));
return statearr_27371;
});
var state_machine__12278__auto____1 = (function (state_27344){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27344);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27372){if((e27372 instanceof Object))
{var ex__12281__auto__ = e27372;var statearr_27373_27390 = state_27344;(statearr_27373_27390[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27344);
return cljs.core.constant$keyword$82;
} else
{throw e27372;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27391 = state_27344;
state_27344 = G__27391;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27344){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27375,out))
})();var state__12294__auto__ = (function (){var statearr_27374 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27375);
return statearr_27374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27375,out))
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
