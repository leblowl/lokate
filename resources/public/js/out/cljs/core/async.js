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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23970 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23970 = (function (f,fn_handler,meta23971){
this.f = f;
this.fn_handler = fn_handler;
this.meta23971 = meta23971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23970.cljs$lang$type = true;
cljs.core.async.t23970.cljs$lang$ctorStr = "cljs.core.async/t23970";
cljs.core.async.t23970.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23970");
});
cljs.core.async.t23970.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23972){var self__ = this;
var _23972__$1 = this;return self__.meta23971;
});
cljs.core.async.t23970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23972,meta23971__$1){var self__ = this;
var _23972__$1 = this;return (new cljs.core.async.t23970(self__.f,self__.fn_handler,meta23971__$1));
});
cljs.core.async.__GT_t23970 = (function __GT_t23970(f__$1,fn_handler__$1,meta23971){return (new cljs.core.async.t23970(f__$1,fn_handler__$1,meta23971));
});
}
return (new cljs.core.async.t23970(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23974 = buff;if(G__23974)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23974.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23974.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23974);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23974);
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
{var val_23991 = (function (){var G__23988 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23988) : cljs.core.deref.call(null,G__23988));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23989_23992 = val_23991;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23989_23992) : fn1.call(null,G__23989_23992));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23991,ret){
return (function (){var G__23990 = val_23991;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23990) : fn1.call(null,G__23990));
});})(val_23991,ret))
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
{var ret = temp__4124__auto__;var G__24001 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24001) : cljs.core.deref.call(null,G__24001));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24002 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24002) : cljs.core.deref.call(null,G__24002));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24003_24005 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24003_24005) : fn1.call(null,G__24003_24005));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24004 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24004) : fn1.call(null,G__24004));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___24006 = n;var x_24007 = (0);while(true){
if((x_24007 < n__4510__auto___24006))
{(a[x_24007] = (0));
{
var G__24008 = (x_24007 + (1));
x_24007 = G__24008;
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
var G__24009 = (i + (1));
i = G__24009;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24017 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24017) : cljs.core.atom.call(null,G__24017));
})();if(typeof cljs.core.async.t24018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24018 = (function (flag,alt_flag,meta24019){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24019 = meta24019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24018.cljs$lang$type = true;
cljs.core.async.t24018.cljs$lang$ctorStr = "cljs.core.async/t24018";
cljs.core.async.t24018.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24018");
});})(flag))
;
cljs.core.async.t24018.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24021 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24021) : cljs.core.deref.call(null,G__24021));
});})(flag))
;
cljs.core.async.t24018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24022_24024 = self__.flag;var G__24023_24025 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24022_24024,G__24023_24025) : cljs.core.reset_BANG_.call(null,G__24022_24024,G__24023_24025));
return true;
});})(flag))
;
cljs.core.async.t24018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24020){var self__ = this;
var _24020__$1 = this;return self__.meta24019;
});})(flag))
;
cljs.core.async.t24018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24020,meta24019__$1){var self__ = this;
var _24020__$1 = this;return (new cljs.core.async.t24018(self__.flag,self__.alt_flag,meta24019__$1));
});})(flag))
;
cljs.core.async.__GT_t24018 = ((function (flag){
return (function __GT_t24018(flag__$1,alt_flag__$1,meta24019){return (new cljs.core.async.t24018(flag__$1,alt_flag__$1,meta24019));
});})(flag))
;
}
return (new cljs.core.async.t24018(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24029 = (function (cb,flag,alt_handler,meta24030){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24030 = meta24030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24029.cljs$lang$type = true;
cljs.core.async.t24029.cljs$lang$ctorStr = "cljs.core.async/t24029";
cljs.core.async.t24029.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24029");
});
cljs.core.async.t24029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24031){var self__ = this;
var _24031__$1 = this;return self__.meta24030;
});
cljs.core.async.t24029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24031,meta24030__$1){var self__ = this;
var _24031__$1 = this;return (new cljs.core.async.t24029(self__.cb,self__.flag,self__.alt_handler,meta24030__$1));
});
cljs.core.async.__GT_t24029 = (function __GT_t24029(cb__$1,flag__$1,alt_handler__$1,meta24030){return (new cljs.core.async.t24029(cb__$1,flag__$1,alt_handler__$1,meta24030));
});
}
return (new cljs.core.async.t24029(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24039 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24039) : port.call(null,G__24039));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24040 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24040) : port.call(null,G__24040));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24032_SHARP_){var G__24041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24032_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24041) : fret.call(null,G__24041));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24033_SHARP_){var G__24042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24033_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24042) : fret.call(null,G__24042));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24043 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24043) : cljs.core.deref.call(null,G__24043));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24044 = (i + (1));
i = G__24044;
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
var alts_BANG___delegate = function (ports,p__24045){var map__24047 = p__24045;var map__24047__$1 = ((cljs.core.seq_QMARK_(map__24047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24047):map__24047);var opts = map__24047__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24045 = null;if (arguments.length > 1) {
  p__24045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24045);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24048){
var ports = cljs.core.first(arglist__24048);
var p__24045 = cljs.core.rest(arglist__24048);
return alts_BANG___delegate(ports,p__24045);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24146){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24146){
return (function (state_24122){var state_val_24123 = (state_24122[(1)]);if((state_val_24123 === (7)))
{var inst_24118 = (state_24122[(2)]);var state_24122__$1 = state_24122;var statearr_24124_24147 = state_24122__$1;(statearr_24124_24147[(2)] = inst_24118);
(statearr_24124_24147[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (1)))
{var state_24122__$1 = state_24122;var statearr_24125_24148 = state_24122__$1;(statearr_24125_24148[(2)] = null);
(statearr_24125_24148[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (4)))
{var inst_24101 = (state_24122[(7)]);var inst_24101__$1 = (state_24122[(2)]);var inst_24102 = (inst_24101__$1 == null);var state_24122__$1 = (function (){var statearr_24126 = state_24122;(statearr_24126[(7)] = inst_24101__$1);
return statearr_24126;
})();if(cljs.core.truth_(inst_24102))
{var statearr_24127_24149 = state_24122__$1;(statearr_24127_24149[(1)] = (5));
} else
{var statearr_24128_24150 = state_24122__$1;(statearr_24128_24150[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (13)))
{var state_24122__$1 = state_24122;var statearr_24129_24151 = state_24122__$1;(statearr_24129_24151[(2)] = null);
(statearr_24129_24151[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (6)))
{var inst_24101 = (state_24122[(7)]);var state_24122__$1 = state_24122;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24122__$1,(11),to,inst_24101);
} else
{if((state_val_24123 === (3)))
{var inst_24120 = (state_24122[(2)]);var state_24122__$1 = state_24122;return cljs.core.async.impl.ioc_helpers.return_chan(state_24122__$1,inst_24120);
} else
{if((state_val_24123 === (12)))
{var state_24122__$1 = state_24122;var statearr_24130_24152 = state_24122__$1;(statearr_24130_24152[(2)] = null);
(statearr_24130_24152[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (2)))
{var state_24122__$1 = state_24122;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24122__$1,(4),from);
} else
{if((state_val_24123 === (11)))
{var inst_24111 = (state_24122[(2)]);var state_24122__$1 = state_24122;if(cljs.core.truth_(inst_24111))
{var statearr_24131_24153 = state_24122__$1;(statearr_24131_24153[(1)] = (12));
} else
{var statearr_24132_24154 = state_24122__$1;(statearr_24132_24154[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (9)))
{var state_24122__$1 = state_24122;var statearr_24133_24155 = state_24122__$1;(statearr_24133_24155[(2)] = null);
(statearr_24133_24155[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (5)))
{var state_24122__$1 = state_24122;if(cljs.core.truth_(close_QMARK_))
{var statearr_24134_24156 = state_24122__$1;(statearr_24134_24156[(1)] = (8));
} else
{var statearr_24135_24157 = state_24122__$1;(statearr_24135_24157[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (14)))
{var inst_24116 = (state_24122[(2)]);var state_24122__$1 = state_24122;var statearr_24136_24158 = state_24122__$1;(statearr_24136_24158[(2)] = inst_24116);
(statearr_24136_24158[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (10)))
{var inst_24108 = (state_24122[(2)]);var state_24122__$1 = state_24122;var statearr_24137_24159 = state_24122__$1;(statearr_24137_24159[(2)] = inst_24108);
(statearr_24137_24159[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24123 === (8)))
{var inst_24105 = cljs.core.async.close_BANG_(to);var state_24122__$1 = state_24122;var statearr_24138_24160 = state_24122__$1;(statearr_24138_24160[(2)] = inst_24105);
(statearr_24138_24160[(1)] = (10));
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
});})(c__12292__auto___24146))
;return ((function (switch__12277__auto__,c__12292__auto___24146){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24142 = [null,null,null,null,null,null,null,null];(statearr_24142[(0)] = state_machine__12278__auto__);
(statearr_24142[(1)] = (1));
return statearr_24142;
});
var state_machine__12278__auto____1 = (function (state_24122){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24122);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object))
{var ex__12281__auto__ = e24143;var statearr_24144_24161 = state_24122;(statearr_24144_24161[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24122);
return cljs.core.constant$keyword$82;
} else
{throw e24143;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24162 = state_24122;
state_24122 = G__24162;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24146))
})();var state__12294__auto__ = (function (){var statearr_24145 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24146);
return statearr_24145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24146))
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
return (function (p__24348){var vec__24349 = p__24348;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24349,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24349,(1),null);var job = vec__24349;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results){
return (function (state_24354){var state_val_24355 = (state_24354[(1)]);if((state_val_24355 === (2)))
{var inst_24351 = (state_24354[(2)]);var inst_24352 = cljs.core.async.close_BANG_(res);var state_24354__$1 = (function (){var statearr_24356 = state_24354;(statearr_24356[(7)] = inst_24351);
return statearr_24356;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24354__$1,inst_24352);
} else
{if((state_val_24355 === (1)))
{var state_24354__$1 = state_24354;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24354__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24360 = [null,null,null,null,null,null,null,null];(statearr_24360[(0)] = state_machine__12278__auto__);
(statearr_24360[(1)] = (1));
return statearr_24360;
});
var state_machine__12278__auto____1 = (function (state_24354){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24354);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24361){if((e24361 instanceof Object))
{var ex__12281__auto__ = e24361;var statearr_24362_24534 = state_24354;(statearr_24362_24534[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24354);
return cljs.core.constant$keyword$82;
} else
{throw e24361;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24535 = state_24354;
state_24354 = G__24535;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24354){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24363 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24533);
return statearr_24363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24533,res,vec__24349,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24364){var vec__24365 = p__24364;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24365,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24365,(1),null);var job = vec__24365;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24366_24536 = v;var G__24367_24537 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24366_24536,G__24367_24537) : xf.call(null,G__24366_24536,G__24367_24537));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24538 = n;var __24539 = (0);while(true){
if((__24539 < n__4510__auto___24538))
{var G__24368_24540 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24368_24540) {
case "async":
var c__12292__auto___24542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24539,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24539,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function (state_24381){var state_val_24382 = (state_24381[(1)]);if((state_val_24382 === (7)))
{var inst_24377 = (state_24381[(2)]);var state_24381__$1 = state_24381;var statearr_24383_24543 = state_24381__$1;(statearr_24383_24543[(2)] = inst_24377);
(statearr_24383_24543[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24382 === (6)))
{var state_24381__$1 = state_24381;var statearr_24384_24544 = state_24381__$1;(statearr_24384_24544[(2)] = null);
(statearr_24384_24544[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24382 === (5)))
{var state_24381__$1 = state_24381;var statearr_24385_24545 = state_24381__$1;(statearr_24385_24545[(2)] = null);
(statearr_24385_24545[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24382 === (4)))
{var inst_24371 = (state_24381[(2)]);var inst_24372 = async(inst_24371);var state_24381__$1 = state_24381;if(cljs.core.truth_(inst_24372))
{var statearr_24386_24546 = state_24381__$1;(statearr_24386_24546[(1)] = (5));
} else
{var statearr_24387_24547 = state_24381__$1;(statearr_24387_24547[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24382 === (3)))
{var inst_24379 = (state_24381[(2)]);var state_24381__$1 = state_24381;return cljs.core.async.impl.ioc_helpers.return_chan(state_24381__$1,inst_24379);
} else
{if((state_val_24382 === (2)))
{var state_24381__$1 = state_24381;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24381__$1,(4),jobs);
} else
{if((state_val_24382 === (1)))
{var state_24381__$1 = state_24381;var statearr_24388_24548 = state_24381__$1;(statearr_24388_24548[(2)] = null);
(statearr_24388_24548[(1)] = (2));
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
});})(__24539,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
;return ((function (__24539,switch__12277__auto__,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24392 = [null,null,null,null,null,null,null];(statearr_24392[(0)] = state_machine__12278__auto__);
(statearr_24392[(1)] = (1));
return statearr_24392;
});
var state_machine__12278__auto____1 = (function (state_24381){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24381);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24393){if((e24393 instanceof Object))
{var ex__12281__auto__ = e24393;var statearr_24394_24549 = state_24381;(statearr_24394_24549[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24381);
return cljs.core.constant$keyword$82;
} else
{throw e24393;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24550 = state_24381;
state_24381 = G__24550;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24539,switch__12277__auto__,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24395 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24542);
return statearr_24395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24539,c__12292__auto___24542,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24539,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24539,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function (state_24408){var state_val_24409 = (state_24408[(1)]);if((state_val_24409 === (7)))
{var inst_24404 = (state_24408[(2)]);var state_24408__$1 = state_24408;var statearr_24410_24552 = state_24408__$1;(statearr_24410_24552[(2)] = inst_24404);
(statearr_24410_24552[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24409 === (6)))
{var state_24408__$1 = state_24408;var statearr_24411_24553 = state_24408__$1;(statearr_24411_24553[(2)] = null);
(statearr_24411_24553[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24409 === (5)))
{var state_24408__$1 = state_24408;var statearr_24412_24554 = state_24408__$1;(statearr_24412_24554[(2)] = null);
(statearr_24412_24554[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24409 === (4)))
{var inst_24398 = (state_24408[(2)]);var inst_24399 = process(inst_24398);var state_24408__$1 = state_24408;if(cljs.core.truth_(inst_24399))
{var statearr_24413_24555 = state_24408__$1;(statearr_24413_24555[(1)] = (5));
} else
{var statearr_24414_24556 = state_24408__$1;(statearr_24414_24556[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24409 === (3)))
{var inst_24406 = (state_24408[(2)]);var state_24408__$1 = state_24408;return cljs.core.async.impl.ioc_helpers.return_chan(state_24408__$1,inst_24406);
} else
{if((state_val_24409 === (2)))
{var state_24408__$1 = state_24408;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24408__$1,(4),jobs);
} else
{if((state_val_24409 === (1)))
{var state_24408__$1 = state_24408;var statearr_24415_24557 = state_24408__$1;(statearr_24415_24557[(2)] = null);
(statearr_24415_24557[(1)] = (2));
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
});})(__24539,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
;return ((function (__24539,switch__12277__auto__,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24419 = [null,null,null,null,null,null,null];(statearr_24419[(0)] = state_machine__12278__auto__);
(statearr_24419[(1)] = (1));
return statearr_24419;
});
var state_machine__12278__auto____1 = (function (state_24408){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24408);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24420){if((e24420 instanceof Object))
{var ex__12281__auto__ = e24420;var statearr_24421_24558 = state_24408;(statearr_24421_24558[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24408);
return cljs.core.constant$keyword$82;
} else
{throw e24420;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24559 = state_24408;
state_24408 = G__24559;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24408){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24539,switch__12277__auto__,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24422 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24551);
return statearr_24422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24539,c__12292__auto___24551,G__24368_24540,n__4510__auto___24538,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24560 = (__24539 + (1));
__24539 = G__24560;
continue;
}
} else
{}
break;
}
var c__12292__auto___24561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24561,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24561,jobs,results,process,async){
return (function (state_24444){var state_val_24445 = (state_24444[(1)]);if((state_val_24445 === (9)))
{var inst_24437 = (state_24444[(2)]);var state_24444__$1 = (function (){var statearr_24446 = state_24444;(statearr_24446[(7)] = inst_24437);
return statearr_24446;
})();var statearr_24447_24562 = state_24444__$1;(statearr_24447_24562[(2)] = null);
(statearr_24447_24562[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24445 === (8)))
{var inst_24430 = (state_24444[(8)]);var inst_24435 = (state_24444[(2)]);var state_24444__$1 = (function (){var statearr_24448 = state_24444;(statearr_24448[(9)] = inst_24435);
return statearr_24448;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24444__$1,(9),results,inst_24430);
} else
{if((state_val_24445 === (7)))
{var inst_24440 = (state_24444[(2)]);var state_24444__$1 = state_24444;var statearr_24449_24563 = state_24444__$1;(statearr_24449_24563[(2)] = inst_24440);
(statearr_24449_24563[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24445 === (6)))
{var inst_24425 = (state_24444[(10)]);var inst_24430 = (state_24444[(8)]);var inst_24430__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24431 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24432 = [inst_24425,inst_24430__$1];var inst_24433 = (new cljs.core.PersistentVector(null,2,(5),inst_24431,inst_24432,null));var state_24444__$1 = (function (){var statearr_24450 = state_24444;(statearr_24450[(8)] = inst_24430__$1);
return statearr_24450;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24444__$1,(8),jobs,inst_24433);
} else
{if((state_val_24445 === (5)))
{var inst_24428 = cljs.core.async.close_BANG_(jobs);var state_24444__$1 = state_24444;var statearr_24451_24564 = state_24444__$1;(statearr_24451_24564[(2)] = inst_24428);
(statearr_24451_24564[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24445 === (4)))
{var inst_24425 = (state_24444[(10)]);var inst_24425__$1 = (state_24444[(2)]);var inst_24426 = (inst_24425__$1 == null);var state_24444__$1 = (function (){var statearr_24452 = state_24444;(statearr_24452[(10)] = inst_24425__$1);
return statearr_24452;
})();if(cljs.core.truth_(inst_24426))
{var statearr_24453_24565 = state_24444__$1;(statearr_24453_24565[(1)] = (5));
} else
{var statearr_24454_24566 = state_24444__$1;(statearr_24454_24566[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24445 === (3)))
{var inst_24442 = (state_24444[(2)]);var state_24444__$1 = state_24444;return cljs.core.async.impl.ioc_helpers.return_chan(state_24444__$1,inst_24442);
} else
{if((state_val_24445 === (2)))
{var state_24444__$1 = state_24444;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24444__$1,(4),from);
} else
{if((state_val_24445 === (1)))
{var state_24444__$1 = state_24444;var statearr_24455_24567 = state_24444__$1;(statearr_24455_24567[(2)] = null);
(statearr_24455_24567[(1)] = (2));
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
});})(c__12292__auto___24561,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24561,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24459 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24459[(0)] = state_machine__12278__auto__);
(statearr_24459[(1)] = (1));
return statearr_24459;
});
var state_machine__12278__auto____1 = (function (state_24444){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24444);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24460){if((e24460 instanceof Object))
{var ex__12281__auto__ = e24460;var statearr_24461_24568 = state_24444;(statearr_24461_24568[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24444);
return cljs.core.constant$keyword$82;
} else
{throw e24460;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24569 = state_24444;
state_24444 = G__24569;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24444){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24561,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24462 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24561);
return statearr_24462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24561,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24500){var state_val_24501 = (state_24500[(1)]);if((state_val_24501 === (7)))
{var inst_24496 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24502_24570 = state_24500__$1;(statearr_24502_24570[(2)] = inst_24496);
(statearr_24502_24570[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (20)))
{var state_24500__$1 = state_24500;var statearr_24503_24571 = state_24500__$1;(statearr_24503_24571[(2)] = null);
(statearr_24503_24571[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (1)))
{var state_24500__$1 = state_24500;var statearr_24504_24572 = state_24500__$1;(statearr_24504_24572[(2)] = null);
(statearr_24504_24572[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (4)))
{var inst_24465 = (state_24500[(7)]);var inst_24465__$1 = (state_24500[(2)]);var inst_24466 = (inst_24465__$1 == null);var state_24500__$1 = (function (){var statearr_24505 = state_24500;(statearr_24505[(7)] = inst_24465__$1);
return statearr_24505;
})();if(cljs.core.truth_(inst_24466))
{var statearr_24506_24573 = state_24500__$1;(statearr_24506_24573[(1)] = (5));
} else
{var statearr_24507_24574 = state_24500__$1;(statearr_24507_24574[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (15)))
{var inst_24478 = (state_24500[(8)]);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24500__$1,(18),to,inst_24478);
} else
{if((state_val_24501 === (21)))
{var inst_24491 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24508_24575 = state_24500__$1;(statearr_24508_24575[(2)] = inst_24491);
(statearr_24508_24575[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (13)))
{var inst_24493 = (state_24500[(2)]);var state_24500__$1 = (function (){var statearr_24509 = state_24500;(statearr_24509[(9)] = inst_24493);
return statearr_24509;
})();var statearr_24510_24576 = state_24500__$1;(statearr_24510_24576[(2)] = null);
(statearr_24510_24576[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (6)))
{var inst_24465 = (state_24500[(7)]);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24500__$1,(11),inst_24465);
} else
{if((state_val_24501 === (17)))
{var inst_24486 = (state_24500[(2)]);var state_24500__$1 = state_24500;if(cljs.core.truth_(inst_24486))
{var statearr_24511_24577 = state_24500__$1;(statearr_24511_24577[(1)] = (19));
} else
{var statearr_24512_24578 = state_24500__$1;(statearr_24512_24578[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (3)))
{var inst_24498 = (state_24500[(2)]);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.return_chan(state_24500__$1,inst_24498);
} else
{if((state_val_24501 === (12)))
{var inst_24475 = (state_24500[(10)]);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24500__$1,(14),inst_24475);
} else
{if((state_val_24501 === (2)))
{var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24500__$1,(4),results);
} else
{if((state_val_24501 === (19)))
{var state_24500__$1 = state_24500;var statearr_24513_24579 = state_24500__$1;(statearr_24513_24579[(2)] = null);
(statearr_24513_24579[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (11)))
{var inst_24475 = (state_24500[(2)]);var state_24500__$1 = (function (){var statearr_24514 = state_24500;(statearr_24514[(10)] = inst_24475);
return statearr_24514;
})();var statearr_24515_24580 = state_24500__$1;(statearr_24515_24580[(2)] = null);
(statearr_24515_24580[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (9)))
{var state_24500__$1 = state_24500;var statearr_24516_24581 = state_24500__$1;(statearr_24516_24581[(2)] = null);
(statearr_24516_24581[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (5)))
{var state_24500__$1 = state_24500;if(cljs.core.truth_(close_QMARK_))
{var statearr_24517_24582 = state_24500__$1;(statearr_24517_24582[(1)] = (8));
} else
{var statearr_24518_24583 = state_24500__$1;(statearr_24518_24583[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (14)))
{var inst_24480 = (state_24500[(11)]);var inst_24478 = (state_24500[(8)]);var inst_24478__$1 = (state_24500[(2)]);var inst_24479 = (inst_24478__$1 == null);var inst_24480__$1 = cljs.core.not(inst_24479);var state_24500__$1 = (function (){var statearr_24519 = state_24500;(statearr_24519[(11)] = inst_24480__$1);
(statearr_24519[(8)] = inst_24478__$1);
return statearr_24519;
})();if(inst_24480__$1)
{var statearr_24520_24584 = state_24500__$1;(statearr_24520_24584[(1)] = (15));
} else
{var statearr_24521_24585 = state_24500__$1;(statearr_24521_24585[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (16)))
{var inst_24480 = (state_24500[(11)]);var state_24500__$1 = state_24500;var statearr_24522_24586 = state_24500__$1;(statearr_24522_24586[(2)] = inst_24480);
(statearr_24522_24586[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (10)))
{var inst_24472 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24523_24587 = state_24500__$1;(statearr_24523_24587[(2)] = inst_24472);
(statearr_24523_24587[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (18)))
{var inst_24483 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24524_24588 = state_24500__$1;(statearr_24524_24588[(2)] = inst_24483);
(statearr_24524_24588[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24501 === (8)))
{var inst_24469 = cljs.core.async.close_BANG_(to);var state_24500__$1 = state_24500;var statearr_24525_24589 = state_24500__$1;(statearr_24525_24589[(2)] = inst_24469);
(statearr_24525_24589[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24529 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24529[(0)] = state_machine__12278__auto__);
(statearr_24529[(1)] = (1));
return statearr_24529;
});
var state_machine__12278__auto____1 = (function (state_24500){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24500);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24530){if((e24530 instanceof Object))
{var ex__12281__auto__ = e24530;var statearr_24531_24590 = state_24500;(statearr_24531_24590[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24500);
return cljs.core.constant$keyword$82;
} else
{throw e24530;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24591 = state_24500;
state_24500 = G__24591;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24500){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24532 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24532;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24714,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24714,tc,fc){
return (function (state_24688){var state_val_24689 = (state_24688[(1)]);if((state_val_24689 === (7)))
{var inst_24684 = (state_24688[(2)]);var state_24688__$1 = state_24688;var statearr_24690_24715 = state_24688__$1;(statearr_24690_24715[(2)] = inst_24684);
(statearr_24690_24715[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (1)))
{var state_24688__$1 = state_24688;var statearr_24691_24716 = state_24688__$1;(statearr_24691_24716[(2)] = null);
(statearr_24691_24716[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (4)))
{var inst_24665 = (state_24688[(7)]);var inst_24665__$1 = (state_24688[(2)]);var inst_24666 = (inst_24665__$1 == null);var state_24688__$1 = (function (){var statearr_24692 = state_24688;(statearr_24692[(7)] = inst_24665__$1);
return statearr_24692;
})();if(cljs.core.truth_(inst_24666))
{var statearr_24693_24717 = state_24688__$1;(statearr_24693_24717[(1)] = (5));
} else
{var statearr_24694_24718 = state_24688__$1;(statearr_24694_24718[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (13)))
{var state_24688__$1 = state_24688;var statearr_24695_24719 = state_24688__$1;(statearr_24695_24719[(2)] = null);
(statearr_24695_24719[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (6)))
{var inst_24665 = (state_24688[(7)]);var inst_24671 = (function (){var G__24696 = inst_24665;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24696) : p.call(null,G__24696));
})();var state_24688__$1 = state_24688;if(cljs.core.truth_(inst_24671))
{var statearr_24697_24720 = state_24688__$1;(statearr_24697_24720[(1)] = (9));
} else
{var statearr_24698_24721 = state_24688__$1;(statearr_24698_24721[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (3)))
{var inst_24686 = (state_24688[(2)]);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.return_chan(state_24688__$1,inst_24686);
} else
{if((state_val_24689 === (12)))
{var state_24688__$1 = state_24688;var statearr_24699_24722 = state_24688__$1;(statearr_24699_24722[(2)] = null);
(statearr_24699_24722[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (2)))
{var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24688__$1,(4),ch);
} else
{if((state_val_24689 === (11)))
{var inst_24665 = (state_24688[(7)]);var inst_24675 = (state_24688[(2)]);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24688__$1,(8),inst_24675,inst_24665);
} else
{if((state_val_24689 === (9)))
{var state_24688__$1 = state_24688;var statearr_24700_24723 = state_24688__$1;(statearr_24700_24723[(2)] = tc);
(statearr_24700_24723[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (5)))
{var inst_24668 = cljs.core.async.close_BANG_(tc);var inst_24669 = cljs.core.async.close_BANG_(fc);var state_24688__$1 = (function (){var statearr_24701 = state_24688;(statearr_24701[(8)] = inst_24668);
return statearr_24701;
})();var statearr_24702_24724 = state_24688__$1;(statearr_24702_24724[(2)] = inst_24669);
(statearr_24702_24724[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (14)))
{var inst_24682 = (state_24688[(2)]);var state_24688__$1 = state_24688;var statearr_24703_24725 = state_24688__$1;(statearr_24703_24725[(2)] = inst_24682);
(statearr_24703_24725[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (10)))
{var state_24688__$1 = state_24688;var statearr_24704_24726 = state_24688__$1;(statearr_24704_24726[(2)] = fc);
(statearr_24704_24726[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24689 === (8)))
{var inst_24677 = (state_24688[(2)]);var state_24688__$1 = state_24688;if(cljs.core.truth_(inst_24677))
{var statearr_24705_24727 = state_24688__$1;(statearr_24705_24727[(1)] = (12));
} else
{var statearr_24706_24728 = state_24688__$1;(statearr_24706_24728[(1)] = (13));
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
});})(c__12292__auto___24714,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24714,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24710 = [null,null,null,null,null,null,null,null,null];(statearr_24710[(0)] = state_machine__12278__auto__);
(statearr_24710[(1)] = (1));
return statearr_24710;
});
var state_machine__12278__auto____1 = (function (state_24688){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24688);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24711){if((e24711 instanceof Object))
{var ex__12281__auto__ = e24711;var statearr_24712_24729 = state_24688;(statearr_24712_24729[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24688);
return cljs.core.constant$keyword$82;
} else
{throw e24711;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24730 = state_24688;
state_24688 = G__24730;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24688){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24714,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24713 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24714);
return statearr_24713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24714,tc,fc))
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
return (function (state_24779){var state_val_24780 = (state_24779[(1)]);if((state_val_24780 === (7)))
{var inst_24775 = (state_24779[(2)]);var state_24779__$1 = state_24779;var statearr_24781_24799 = state_24779__$1;(statearr_24781_24799[(2)] = inst_24775);
(statearr_24781_24799[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24780 === (6)))
{var inst_24768 = (state_24779[(7)]);var inst_24765 = (state_24779[(8)]);var inst_24772 = (function (){var G__24782 = inst_24765;var G__24783 = inst_24768;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24782,G__24783) : f.call(null,G__24782,G__24783));
})();var inst_24765__$1 = inst_24772;var state_24779__$1 = (function (){var statearr_24784 = state_24779;(statearr_24784[(8)] = inst_24765__$1);
return statearr_24784;
})();var statearr_24785_24800 = state_24779__$1;(statearr_24785_24800[(2)] = null);
(statearr_24785_24800[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24780 === (5)))
{var inst_24765 = (state_24779[(8)]);var state_24779__$1 = state_24779;var statearr_24786_24801 = state_24779__$1;(statearr_24786_24801[(2)] = inst_24765);
(statearr_24786_24801[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24780 === (4)))
{var inst_24768 = (state_24779[(7)]);var inst_24768__$1 = (state_24779[(2)]);var inst_24769 = (inst_24768__$1 == null);var state_24779__$1 = (function (){var statearr_24787 = state_24779;(statearr_24787[(7)] = inst_24768__$1);
return statearr_24787;
})();if(cljs.core.truth_(inst_24769))
{var statearr_24788_24802 = state_24779__$1;(statearr_24788_24802[(1)] = (5));
} else
{var statearr_24789_24803 = state_24779__$1;(statearr_24789_24803[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24780 === (3)))
{var inst_24777 = (state_24779[(2)]);var state_24779__$1 = state_24779;return cljs.core.async.impl.ioc_helpers.return_chan(state_24779__$1,inst_24777);
} else
{if((state_val_24780 === (2)))
{var state_24779__$1 = state_24779;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24779__$1,(4),ch);
} else
{if((state_val_24780 === (1)))
{var inst_24765 = init;var state_24779__$1 = (function (){var statearr_24790 = state_24779;(statearr_24790[(8)] = inst_24765);
return statearr_24790;
})();var statearr_24791_24804 = state_24779__$1;(statearr_24791_24804[(2)] = null);
(statearr_24791_24804[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24795 = [null,null,null,null,null,null,null,null,null];(statearr_24795[(0)] = state_machine__12278__auto__);
(statearr_24795[(1)] = (1));
return statearr_24795;
});
var state_machine__12278__auto____1 = (function (state_24779){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24779);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24796){if((e24796 instanceof Object))
{var ex__12281__auto__ = e24796;var statearr_24797_24805 = state_24779;(statearr_24797_24805[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24779);
return cljs.core.constant$keyword$82;
} else
{throw e24796;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24806 = state_24779;
state_24779 = G__24806;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24779){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24798 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24798;
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
return (function (state_24883){var state_val_24884 = (state_24883[(1)]);if((state_val_24884 === (7)))
{var inst_24865 = (state_24883[(2)]);var state_24883__$1 = state_24883;var statearr_24885_24908 = state_24883__$1;(statearr_24885_24908[(2)] = inst_24865);
(statearr_24885_24908[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (1)))
{var inst_24859 = cljs.core.seq(coll);var inst_24860 = inst_24859;var state_24883__$1 = (function (){var statearr_24886 = state_24883;(statearr_24886[(7)] = inst_24860);
return statearr_24886;
})();var statearr_24887_24909 = state_24883__$1;(statearr_24887_24909[(2)] = null);
(statearr_24887_24909[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (4)))
{var inst_24860 = (state_24883[(7)]);var inst_24863 = cljs.core.first(inst_24860);var state_24883__$1 = state_24883;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24883__$1,(7),ch,inst_24863);
} else
{if((state_val_24884 === (13)))
{var inst_24877 = (state_24883[(2)]);var state_24883__$1 = state_24883;var statearr_24888_24910 = state_24883__$1;(statearr_24888_24910[(2)] = inst_24877);
(statearr_24888_24910[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (6)))
{var inst_24868 = (state_24883[(2)]);var state_24883__$1 = state_24883;if(cljs.core.truth_(inst_24868))
{var statearr_24889_24911 = state_24883__$1;(statearr_24889_24911[(1)] = (8));
} else
{var statearr_24890_24912 = state_24883__$1;(statearr_24890_24912[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (3)))
{var inst_24881 = (state_24883[(2)]);var state_24883__$1 = state_24883;return cljs.core.async.impl.ioc_helpers.return_chan(state_24883__$1,inst_24881);
} else
{if((state_val_24884 === (12)))
{var state_24883__$1 = state_24883;var statearr_24891_24913 = state_24883__$1;(statearr_24891_24913[(2)] = null);
(statearr_24891_24913[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (2)))
{var inst_24860 = (state_24883[(7)]);var state_24883__$1 = state_24883;if(cljs.core.truth_(inst_24860))
{var statearr_24892_24914 = state_24883__$1;(statearr_24892_24914[(1)] = (4));
} else
{var statearr_24893_24915 = state_24883__$1;(statearr_24893_24915[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (11)))
{var inst_24874 = cljs.core.async.close_BANG_(ch);var state_24883__$1 = state_24883;var statearr_24894_24916 = state_24883__$1;(statearr_24894_24916[(2)] = inst_24874);
(statearr_24894_24916[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (9)))
{var state_24883__$1 = state_24883;if(cljs.core.truth_(close_QMARK_))
{var statearr_24895_24917 = state_24883__$1;(statearr_24895_24917[(1)] = (11));
} else
{var statearr_24896_24918 = state_24883__$1;(statearr_24896_24918[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (5)))
{var inst_24860 = (state_24883[(7)]);var state_24883__$1 = state_24883;var statearr_24897_24919 = state_24883__$1;(statearr_24897_24919[(2)] = inst_24860);
(statearr_24897_24919[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (10)))
{var inst_24879 = (state_24883[(2)]);var state_24883__$1 = state_24883;var statearr_24898_24920 = state_24883__$1;(statearr_24898_24920[(2)] = inst_24879);
(statearr_24898_24920[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24884 === (8)))
{var inst_24860 = (state_24883[(7)]);var inst_24870 = cljs.core.next(inst_24860);var inst_24860__$1 = inst_24870;var state_24883__$1 = (function (){var statearr_24899 = state_24883;(statearr_24899[(7)] = inst_24860__$1);
return statearr_24899;
})();var statearr_24900_24921 = state_24883__$1;(statearr_24900_24921[(2)] = null);
(statearr_24900_24921[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24904 = [null,null,null,null,null,null,null,null];(statearr_24904[(0)] = state_machine__12278__auto__);
(statearr_24904[(1)] = (1));
return statearr_24904;
});
var state_machine__12278__auto____1 = (function (state_24883){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24883);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object))
{var ex__12281__auto__ = e24905;var statearr_24906_24922 = state_24883;(statearr_24906_24922[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24883);
return cljs.core.constant$keyword$82;
} else
{throw e24905;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24923 = state_24883;
state_24883 = G__24923;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24883){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_24907 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24907;
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
cljs.core.async.Mux = (function (){var obj24925 = {};return obj24925;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24929 = x__4277__auto__;return goog.typeOf(G__24929);
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
cljs.core.async.Mult = (function (){var obj24931 = {};return obj24931;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24935 = x__4277__auto__;return goog.typeOf(G__24935);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24939 = x__4277__auto__;return goog.typeOf(G__24939);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24943 = x__4277__auto__;return goog.typeOf(G__24943);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25173 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25173) : cljs.core.atom.call(null,G__25173));
})();var m = (function (){if(typeof cljs.core.async.t25174 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25174 = (function (cs,ch,mult,meta25175){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25175 = meta25175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25174.cljs$lang$type = true;
cljs.core.async.t25174.cljs$lang$ctorStr = "cljs.core.async/t25174";
cljs.core.async.t25174.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25174");
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25174.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25177_25402 = self__.cs;var G__25178_25403 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25177_25402,G__25178_25403) : cljs.core.reset_BANG_.call(null,G__25177_25402,G__25178_25403));
return null;
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25176){var self__ = this;
var _25176__$1 = this;return self__.meta25175;
});})(cs))
;
cljs.core.async.t25174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25176,meta25175__$1){var self__ = this;
var _25176__$1 = this;return (new cljs.core.async.t25174(self__.cs,self__.ch,self__.mult,meta25175__$1));
});})(cs))
;
cljs.core.async.__GT_t25174 = ((function (cs){
return (function __GT_t25174(cs__$1,ch__$1,mult__$1,meta25175){return (new cljs.core.async.t25174(cs__$1,ch__$1,mult__$1,meta25175));
});})(cs))
;
}
return (new cljs.core.async.t25174(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25179 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25179) : cljs.core.atom.call(null,G__25179));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25404,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25404,cs,m,dchan,dctr,done){
return (function (state_25310){var state_val_25311 = (state_25310[(1)]);if((state_val_25311 === (7)))
{var inst_25306 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25312_25405 = state_25310__$1;(statearr_25312_25405[(2)] = inst_25306);
(statearr_25312_25405[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (20)))
{var inst_25211 = (state_25310[(7)]);var inst_25221 = cljs.core.first(inst_25211);var inst_25222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25221,(0),null);var inst_25223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25221,(1),null);var state_25310__$1 = (function (){var statearr_25313 = state_25310;(statearr_25313[(8)] = inst_25222);
return statearr_25313;
})();if(cljs.core.truth_(inst_25223))
{var statearr_25314_25406 = state_25310__$1;(statearr_25314_25406[(1)] = (22));
} else
{var statearr_25315_25407 = state_25310__$1;(statearr_25315_25407[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (27)))
{var inst_25258 = (state_25310[(9)]);var inst_25182 = (state_25310[(10)]);var inst_25251 = (state_25310[(11)]);var inst_25253 = (state_25310[(12)]);var inst_25258__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25251,inst_25253);var inst_25259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25258__$1,inst_25182,done);var state_25310__$1 = (function (){var statearr_25316 = state_25310;(statearr_25316[(9)] = inst_25258__$1);
return statearr_25316;
})();if(cljs.core.truth_(inst_25259))
{var statearr_25317_25408 = state_25310__$1;(statearr_25317_25408[(1)] = (30));
} else
{var statearr_25318_25409 = state_25310__$1;(statearr_25318_25409[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (1)))
{var state_25310__$1 = state_25310;var statearr_25319_25410 = state_25310__$1;(statearr_25319_25410[(2)] = null);
(statearr_25319_25410[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (24)))
{var inst_25211 = (state_25310[(7)]);var inst_25228 = (state_25310[(2)]);var inst_25229 = cljs.core.next(inst_25211);var inst_25191 = inst_25229;var inst_25192 = null;var inst_25193 = (0);var inst_25194 = (0);var state_25310__$1 = (function (){var statearr_25320 = state_25310;(statearr_25320[(13)] = inst_25228);
(statearr_25320[(14)] = inst_25192);
(statearr_25320[(15)] = inst_25194);
(statearr_25320[(16)] = inst_25191);
(statearr_25320[(17)] = inst_25193);
return statearr_25320;
})();var statearr_25321_25411 = state_25310__$1;(statearr_25321_25411[(2)] = null);
(statearr_25321_25411[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (39)))
{var state_25310__$1 = state_25310;var statearr_25325_25412 = state_25310__$1;(statearr_25325_25412[(2)] = null);
(statearr_25325_25412[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (4)))
{var inst_25182 = (state_25310[(10)]);var inst_25182__$1 = (state_25310[(2)]);var inst_25183 = (inst_25182__$1 == null);var state_25310__$1 = (function (){var statearr_25326 = state_25310;(statearr_25326[(10)] = inst_25182__$1);
return statearr_25326;
})();if(cljs.core.truth_(inst_25183))
{var statearr_25327_25413 = state_25310__$1;(statearr_25327_25413[(1)] = (5));
} else
{var statearr_25328_25414 = state_25310__$1;(statearr_25328_25414[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (15)))
{var inst_25192 = (state_25310[(14)]);var inst_25194 = (state_25310[(15)]);var inst_25191 = (state_25310[(16)]);var inst_25193 = (state_25310[(17)]);var inst_25207 = (state_25310[(2)]);var inst_25208 = (inst_25194 + (1));var tmp25322 = inst_25192;var tmp25323 = inst_25191;var tmp25324 = inst_25193;var inst_25191__$1 = tmp25323;var inst_25192__$1 = tmp25322;var inst_25193__$1 = tmp25324;var inst_25194__$1 = inst_25208;var state_25310__$1 = (function (){var statearr_25329 = state_25310;(statearr_25329[(18)] = inst_25207);
(statearr_25329[(14)] = inst_25192__$1);
(statearr_25329[(15)] = inst_25194__$1);
(statearr_25329[(16)] = inst_25191__$1);
(statearr_25329[(17)] = inst_25193__$1);
return statearr_25329;
})();var statearr_25330_25415 = state_25310__$1;(statearr_25330_25415[(2)] = null);
(statearr_25330_25415[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (21)))
{var inst_25232 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25334_25416 = state_25310__$1;(statearr_25334_25416[(2)] = inst_25232);
(statearr_25334_25416[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (31)))
{var inst_25258 = (state_25310[(9)]);var inst_25262 = done(null);var inst_25263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25258);var state_25310__$1 = (function (){var statearr_25335 = state_25310;(statearr_25335[(19)] = inst_25262);
return statearr_25335;
})();var statearr_25336_25417 = state_25310__$1;(statearr_25336_25417[(2)] = inst_25263);
(statearr_25336_25417[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (32)))
{var inst_25250 = (state_25310[(20)]);var inst_25252 = (state_25310[(21)]);var inst_25251 = (state_25310[(11)]);var inst_25253 = (state_25310[(12)]);var inst_25265 = (state_25310[(2)]);var inst_25266 = (inst_25253 + (1));var tmp25331 = inst_25250;var tmp25332 = inst_25252;var tmp25333 = inst_25251;var inst_25250__$1 = tmp25331;var inst_25251__$1 = tmp25333;var inst_25252__$1 = tmp25332;var inst_25253__$1 = inst_25266;var state_25310__$1 = (function (){var statearr_25337 = state_25310;(statearr_25337[(20)] = inst_25250__$1);
(statearr_25337[(22)] = inst_25265);
(statearr_25337[(21)] = inst_25252__$1);
(statearr_25337[(11)] = inst_25251__$1);
(statearr_25337[(12)] = inst_25253__$1);
return statearr_25337;
})();var statearr_25338_25418 = state_25310__$1;(statearr_25338_25418[(2)] = null);
(statearr_25338_25418[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (40)))
{var inst_25278 = (state_25310[(23)]);var inst_25282 = done(null);var inst_25283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25278);var state_25310__$1 = (function (){var statearr_25339 = state_25310;(statearr_25339[(24)] = inst_25282);
return statearr_25339;
})();var statearr_25340_25419 = state_25310__$1;(statearr_25340_25419[(2)] = inst_25283);
(statearr_25340_25419[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (33)))
{var inst_25269 = (state_25310[(25)]);var inst_25271 = cljs.core.chunked_seq_QMARK_(inst_25269);var state_25310__$1 = state_25310;if(inst_25271)
{var statearr_25341_25420 = state_25310__$1;(statearr_25341_25420[(1)] = (36));
} else
{var statearr_25342_25421 = state_25310__$1;(statearr_25342_25421[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (13)))
{var inst_25201 = (state_25310[(26)]);var inst_25204 = cljs.core.async.close_BANG_(inst_25201);var state_25310__$1 = state_25310;var statearr_25343_25422 = state_25310__$1;(statearr_25343_25422[(2)] = inst_25204);
(statearr_25343_25422[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (22)))
{var inst_25222 = (state_25310[(8)]);var inst_25225 = cljs.core.async.close_BANG_(inst_25222);var state_25310__$1 = state_25310;var statearr_25344_25423 = state_25310__$1;(statearr_25344_25423[(2)] = inst_25225);
(statearr_25344_25423[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (36)))
{var inst_25269 = (state_25310[(25)]);var inst_25273 = cljs.core.chunk_first(inst_25269);var inst_25274 = cljs.core.chunk_rest(inst_25269);var inst_25275 = cljs.core.count(inst_25273);var inst_25250 = inst_25274;var inst_25251 = inst_25273;var inst_25252 = inst_25275;var inst_25253 = (0);var state_25310__$1 = (function (){var statearr_25345 = state_25310;(statearr_25345[(20)] = inst_25250);
(statearr_25345[(21)] = inst_25252);
(statearr_25345[(11)] = inst_25251);
(statearr_25345[(12)] = inst_25253);
return statearr_25345;
})();var statearr_25346_25424 = state_25310__$1;(statearr_25346_25424[(2)] = null);
(statearr_25346_25424[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (41)))
{var inst_25269 = (state_25310[(25)]);var inst_25285 = (state_25310[(2)]);var inst_25286 = cljs.core.next(inst_25269);var inst_25250 = inst_25286;var inst_25251 = null;var inst_25252 = (0);var inst_25253 = (0);var state_25310__$1 = (function (){var statearr_25347 = state_25310;(statearr_25347[(20)] = inst_25250);
(statearr_25347[(27)] = inst_25285);
(statearr_25347[(21)] = inst_25252);
(statearr_25347[(11)] = inst_25251);
(statearr_25347[(12)] = inst_25253);
return statearr_25347;
})();var statearr_25348_25425 = state_25310__$1;(statearr_25348_25425[(2)] = null);
(statearr_25348_25425[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (43)))
{var state_25310__$1 = state_25310;var statearr_25349_25426 = state_25310__$1;(statearr_25349_25426[(2)] = null);
(statearr_25349_25426[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (29)))
{var inst_25294 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25350_25427 = state_25310__$1;(statearr_25350_25427[(2)] = inst_25294);
(statearr_25350_25427[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (44)))
{var inst_25303 = (state_25310[(2)]);var state_25310__$1 = (function (){var statearr_25351 = state_25310;(statearr_25351[(28)] = inst_25303);
return statearr_25351;
})();var statearr_25352_25428 = state_25310__$1;(statearr_25352_25428[(2)] = null);
(statearr_25352_25428[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (6)))
{var inst_25242 = (state_25310[(29)]);var inst_25241 = (function (){var G__25353 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25353) : cljs.core.deref.call(null,G__25353));
})();var inst_25242__$1 = cljs.core.keys(inst_25241);var inst_25243 = cljs.core.count(inst_25242__$1);var inst_25244 = (function (){var G__25354 = dctr;var G__25355 = inst_25243;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25354,G__25355) : cljs.core.reset_BANG_.call(null,G__25354,G__25355));
})();var inst_25249 = cljs.core.seq(inst_25242__$1);var inst_25250 = inst_25249;var inst_25251 = null;var inst_25252 = (0);var inst_25253 = (0);var state_25310__$1 = (function (){var statearr_25356 = state_25310;(statearr_25356[(29)] = inst_25242__$1);
(statearr_25356[(30)] = inst_25244);
(statearr_25356[(20)] = inst_25250);
(statearr_25356[(21)] = inst_25252);
(statearr_25356[(11)] = inst_25251);
(statearr_25356[(12)] = inst_25253);
return statearr_25356;
})();var statearr_25357_25429 = state_25310__$1;(statearr_25357_25429[(2)] = null);
(statearr_25357_25429[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (28)))
{var inst_25269 = (state_25310[(25)]);var inst_25250 = (state_25310[(20)]);var inst_25269__$1 = cljs.core.seq(inst_25250);var state_25310__$1 = (function (){var statearr_25358 = state_25310;(statearr_25358[(25)] = inst_25269__$1);
return statearr_25358;
})();if(inst_25269__$1)
{var statearr_25359_25430 = state_25310__$1;(statearr_25359_25430[(1)] = (33));
} else
{var statearr_25360_25431 = state_25310__$1;(statearr_25360_25431[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (25)))
{var inst_25252 = (state_25310[(21)]);var inst_25253 = (state_25310[(12)]);var inst_25255 = (inst_25253 < inst_25252);var inst_25256 = inst_25255;var state_25310__$1 = state_25310;if(cljs.core.truth_(inst_25256))
{var statearr_25361_25432 = state_25310__$1;(statearr_25361_25432[(1)] = (27));
} else
{var statearr_25362_25433 = state_25310__$1;(statearr_25362_25433[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (34)))
{var state_25310__$1 = state_25310;var statearr_25363_25434 = state_25310__$1;(statearr_25363_25434[(2)] = null);
(statearr_25363_25434[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (17)))
{var state_25310__$1 = state_25310;var statearr_25364_25435 = state_25310__$1;(statearr_25364_25435[(2)] = null);
(statearr_25364_25435[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (3)))
{var inst_25308 = (state_25310[(2)]);var state_25310__$1 = state_25310;return cljs.core.async.impl.ioc_helpers.return_chan(state_25310__$1,inst_25308);
} else
{if((state_val_25311 === (12)))
{var inst_25237 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25365_25436 = state_25310__$1;(statearr_25365_25436[(2)] = inst_25237);
(statearr_25365_25436[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (2)))
{var state_25310__$1 = state_25310;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25310__$1,(4),ch);
} else
{if((state_val_25311 === (23)))
{var state_25310__$1 = state_25310;var statearr_25366_25437 = state_25310__$1;(statearr_25366_25437[(2)] = null);
(statearr_25366_25437[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (35)))
{var inst_25292 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25367_25438 = state_25310__$1;(statearr_25367_25438[(2)] = inst_25292);
(statearr_25367_25438[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (19)))
{var inst_25211 = (state_25310[(7)]);var inst_25215 = cljs.core.chunk_first(inst_25211);var inst_25216 = cljs.core.chunk_rest(inst_25211);var inst_25217 = cljs.core.count(inst_25215);var inst_25191 = inst_25216;var inst_25192 = inst_25215;var inst_25193 = inst_25217;var inst_25194 = (0);var state_25310__$1 = (function (){var statearr_25368 = state_25310;(statearr_25368[(14)] = inst_25192);
(statearr_25368[(15)] = inst_25194);
(statearr_25368[(16)] = inst_25191);
(statearr_25368[(17)] = inst_25193);
return statearr_25368;
})();var statearr_25369_25439 = state_25310__$1;(statearr_25369_25439[(2)] = null);
(statearr_25369_25439[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (11)))
{var inst_25191 = (state_25310[(16)]);var inst_25211 = (state_25310[(7)]);var inst_25211__$1 = cljs.core.seq(inst_25191);var state_25310__$1 = (function (){var statearr_25370 = state_25310;(statearr_25370[(7)] = inst_25211__$1);
return statearr_25370;
})();if(inst_25211__$1)
{var statearr_25371_25440 = state_25310__$1;(statearr_25371_25440[(1)] = (16));
} else
{var statearr_25372_25441 = state_25310__$1;(statearr_25372_25441[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (9)))
{var inst_25239 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25373_25442 = state_25310__$1;(statearr_25373_25442[(2)] = inst_25239);
(statearr_25373_25442[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (5)))
{var inst_25189 = (function (){var G__25374 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25374) : cljs.core.deref.call(null,G__25374));
})();var inst_25190 = cljs.core.seq(inst_25189);var inst_25191 = inst_25190;var inst_25192 = null;var inst_25193 = (0);var inst_25194 = (0);var state_25310__$1 = (function (){var statearr_25375 = state_25310;(statearr_25375[(14)] = inst_25192);
(statearr_25375[(15)] = inst_25194);
(statearr_25375[(16)] = inst_25191);
(statearr_25375[(17)] = inst_25193);
return statearr_25375;
})();var statearr_25376_25443 = state_25310__$1;(statearr_25376_25443[(2)] = null);
(statearr_25376_25443[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (14)))
{var state_25310__$1 = state_25310;var statearr_25377_25444 = state_25310__$1;(statearr_25377_25444[(2)] = null);
(statearr_25377_25444[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (45)))
{var inst_25300 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25378_25445 = state_25310__$1;(statearr_25378_25445[(2)] = inst_25300);
(statearr_25378_25445[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (26)))
{var inst_25242 = (state_25310[(29)]);var inst_25296 = (state_25310[(2)]);var inst_25297 = cljs.core.seq(inst_25242);var state_25310__$1 = (function (){var statearr_25379 = state_25310;(statearr_25379[(31)] = inst_25296);
return statearr_25379;
})();if(inst_25297)
{var statearr_25380_25446 = state_25310__$1;(statearr_25380_25446[(1)] = (42));
} else
{var statearr_25381_25447 = state_25310__$1;(statearr_25381_25447[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (16)))
{var inst_25211 = (state_25310[(7)]);var inst_25213 = cljs.core.chunked_seq_QMARK_(inst_25211);var state_25310__$1 = state_25310;if(inst_25213)
{var statearr_25382_25448 = state_25310__$1;(statearr_25382_25448[(1)] = (19));
} else
{var statearr_25383_25449 = state_25310__$1;(statearr_25383_25449[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (38)))
{var inst_25289 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25384_25450 = state_25310__$1;(statearr_25384_25450[(2)] = inst_25289);
(statearr_25384_25450[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (30)))
{var state_25310__$1 = state_25310;var statearr_25385_25451 = state_25310__$1;(statearr_25385_25451[(2)] = null);
(statearr_25385_25451[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (10)))
{var inst_25192 = (state_25310[(14)]);var inst_25194 = (state_25310[(15)]);var inst_25200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25192,inst_25194);var inst_25201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25200,(0),null);var inst_25202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25200,(1),null);var state_25310__$1 = (function (){var statearr_25386 = state_25310;(statearr_25386[(26)] = inst_25201);
return statearr_25386;
})();if(cljs.core.truth_(inst_25202))
{var statearr_25387_25452 = state_25310__$1;(statearr_25387_25452[(1)] = (13));
} else
{var statearr_25388_25453 = state_25310__$1;(statearr_25388_25453[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (18)))
{var inst_25235 = (state_25310[(2)]);var state_25310__$1 = state_25310;var statearr_25389_25454 = state_25310__$1;(statearr_25389_25454[(2)] = inst_25235);
(statearr_25389_25454[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (42)))
{var state_25310__$1 = state_25310;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25310__$1,(45),dchan);
} else
{if((state_val_25311 === (37)))
{var inst_25269 = (state_25310[(25)]);var inst_25182 = (state_25310[(10)]);var inst_25278 = (state_25310[(23)]);var inst_25278__$1 = cljs.core.first(inst_25269);var inst_25279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25278__$1,inst_25182,done);var state_25310__$1 = (function (){var statearr_25390 = state_25310;(statearr_25390[(23)] = inst_25278__$1);
return statearr_25390;
})();if(cljs.core.truth_(inst_25279))
{var statearr_25391_25455 = state_25310__$1;(statearr_25391_25455[(1)] = (39));
} else
{var statearr_25392_25456 = state_25310__$1;(statearr_25392_25456[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25311 === (8)))
{var inst_25194 = (state_25310[(15)]);var inst_25193 = (state_25310[(17)]);var inst_25196 = (inst_25194 < inst_25193);var inst_25197 = inst_25196;var state_25310__$1 = state_25310;if(cljs.core.truth_(inst_25197))
{var statearr_25393_25457 = state_25310__$1;(statearr_25393_25457[(1)] = (10));
} else
{var statearr_25394_25458 = state_25310__$1;(statearr_25394_25458[(1)] = (11));
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
});})(c__12292__auto___25404,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25404,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25398[(0)] = state_machine__12278__auto__);
(statearr_25398[(1)] = (1));
return statearr_25398;
});
var state_machine__12278__auto____1 = (function (state_25310){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25310);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object))
{var ex__12281__auto__ = e25399;var statearr_25400_25459 = state_25310;(statearr_25400_25459[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25310);
return cljs.core.constant$keyword$82;
} else
{throw e25399;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25460 = state_25310;
state_25310 = G__25460;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25310){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25404,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25401 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25404);
return statearr_25401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25404,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25465 = {};return obj25465;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25469 = x__4277__auto__;return goog.typeOf(G__25469);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25473 = x__4277__auto__;return goog.typeOf(G__25473);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25477 = x__4277__auto__;return goog.typeOf(G__25477);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25481 = x__4277__auto__;return goog.typeOf(G__25481);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25485 = x__4277__auto__;return goog.typeOf(G__25485);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25486){var map__25492 = p__25486;var map__25492__$1 = ((cljs.core.seq_QMARK_(map__25492))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25492):map__25492);var opts = map__25492__$1;var statearr_25493_25497 = state;(statearr_25493_25497[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25492,map__25492__$1,opts){
return (function (val){var statearr_25494_25498 = state;(statearr_25494_25498[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25492,map__25492__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25495_25499 = state;(statearr_25495_25499[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25496 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25496) : cljs.core.deref.call(null,G__25496));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25486 = null;if (arguments.length > 3) {
  p__25486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25486);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25500){
var state = cljs.core.first(arglist__25500);
arglist__25500 = cljs.core.next(arglist__25500);
var cont_block = cljs.core.first(arglist__25500);
arglist__25500 = cljs.core.next(arglist__25500);
var ports = cljs.core.first(arglist__25500);
var p__25486 = cljs.core.rest(arglist__25500);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25486);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25634 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25634) : cljs.core.atom.call(null,G__25634));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25635 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25635) : cljs.core.atom.call(null,G__25635));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25636 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25636) : attr.call(null,G__25636));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25637 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25637) : cljs.core.deref.call(null,G__25637));
})();var mode = (function (){var G__25638 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25638) : cljs.core.deref.call(null,G__25638));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25639 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25640){
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
this.meta25640 = meta25640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25639.cljs$lang$type = true;
cljs.core.async.t25639.cljs$lang$ctorStr = "cljs.core.async/t25639";
cljs.core.async.t25639.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25639");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25642_25767 = self__.cs;var G__25643_25768 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25642_25767,G__25643_25768) : cljs.core.reset_BANG_.call(null,G__25642_25767,G__25643_25768));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25644 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25644) : self__.solo_modes.call(null,G__25644));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25645_25769 = self__.solo_mode;var G__25646_25770 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25645_25769,G__25646_25770) : cljs.core.reset_BANG_.call(null,G__25645_25769,G__25646_25770));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25641){var self__ = this;
var _25641__$1 = this;return self__.meta25640;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25641,meta25640__$1){var self__ = this;
var _25641__$1 = this;return (new cljs.core.async.t25639(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25640__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25639 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25640){return (new cljs.core.async.t25639(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25640));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25639(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25718){var state_val_25719 = (state_25718[(1)]);if((state_val_25719 === (7)))
{var inst_25660 = (state_25718[(7)]);var inst_25665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25660);var state_25718__$1 = state_25718;var statearr_25720_25772 = state_25718__$1;(statearr_25720_25772[(2)] = inst_25665);
(statearr_25720_25772[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (20)))
{var inst_25675 = (state_25718[(8)]);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25718__$1,(23),out,inst_25675);
} else
{if((state_val_25719 === (1)))
{var inst_25650 = (state_25718[(9)]);var inst_25650__$1 = calc_state();var inst_25651 = cljs.core.seq_QMARK_(inst_25650__$1);var state_25718__$1 = (function (){var statearr_25721 = state_25718;(statearr_25721[(9)] = inst_25650__$1);
return statearr_25721;
})();if(inst_25651)
{var statearr_25722_25773 = state_25718__$1;(statearr_25722_25773[(1)] = (2));
} else
{var statearr_25723_25774 = state_25718__$1;(statearr_25723_25774[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (24)))
{var inst_25668 = (state_25718[(10)]);var inst_25660 = inst_25668;var state_25718__$1 = (function (){var statearr_25724 = state_25718;(statearr_25724[(7)] = inst_25660);
return statearr_25724;
})();var statearr_25725_25775 = state_25718__$1;(statearr_25725_25775[(2)] = null);
(statearr_25725_25775[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (4)))
{var inst_25650 = (state_25718[(9)]);var inst_25656 = (state_25718[(2)]);var inst_25657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25656,cljs.core.constant$keyword$96);var inst_25658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25656,cljs.core.constant$keyword$95);var inst_25659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25656,cljs.core.constant$keyword$94);var inst_25660 = inst_25650;var state_25718__$1 = (function (){var statearr_25726 = state_25718;(statearr_25726[(11)] = inst_25658);
(statearr_25726[(7)] = inst_25660);
(statearr_25726[(12)] = inst_25657);
(statearr_25726[(13)] = inst_25659);
return statearr_25726;
})();var statearr_25727_25776 = state_25718__$1;(statearr_25727_25776[(2)] = null);
(statearr_25727_25776[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (15)))
{var state_25718__$1 = state_25718;var statearr_25728_25777 = state_25718__$1;(statearr_25728_25777[(2)] = null);
(statearr_25728_25777[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (21)))
{var inst_25668 = (state_25718[(10)]);var inst_25660 = inst_25668;var state_25718__$1 = (function (){var statearr_25729 = state_25718;(statearr_25729[(7)] = inst_25660);
return statearr_25729;
})();var statearr_25730_25778 = state_25718__$1;(statearr_25730_25778[(2)] = null);
(statearr_25730_25778[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (13)))
{var inst_25714 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25731_25779 = state_25718__$1;(statearr_25731_25779[(2)] = inst_25714);
(statearr_25731_25779[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (22)))
{var inst_25712 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25732_25780 = state_25718__$1;(statearr_25732_25780[(2)] = inst_25712);
(statearr_25732_25780[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (6)))
{var inst_25716 = (state_25718[(2)]);var state_25718__$1 = state_25718;return cljs.core.async.impl.ioc_helpers.return_chan(state_25718__$1,inst_25716);
} else
{if((state_val_25719 === (25)))
{var state_25718__$1 = state_25718;var statearr_25733_25781 = state_25718__$1;(statearr_25733_25781[(2)] = null);
(statearr_25733_25781[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (17)))
{var inst_25691 = (state_25718[(14)]);var state_25718__$1 = state_25718;var statearr_25734_25782 = state_25718__$1;(statearr_25734_25782[(2)] = inst_25691);
(statearr_25734_25782[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (3)))
{var inst_25650 = (state_25718[(9)]);var state_25718__$1 = state_25718;var statearr_25735_25783 = state_25718__$1;(statearr_25735_25783[(2)] = inst_25650);
(statearr_25735_25783[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (12)))
{var inst_25691 = (state_25718[(14)]);var inst_25676 = (state_25718[(15)]);var inst_25671 = (state_25718[(16)]);var inst_25691__$1 = (function (){var G__25736 = inst_25676;return (inst_25671.cljs$core$IFn$_invoke$arity$1 ? inst_25671.cljs$core$IFn$_invoke$arity$1(G__25736) : inst_25671.call(null,G__25736));
})();var state_25718__$1 = (function (){var statearr_25737 = state_25718;(statearr_25737[(14)] = inst_25691__$1);
return statearr_25737;
})();if(cljs.core.truth_(inst_25691__$1))
{var statearr_25738_25784 = state_25718__$1;(statearr_25738_25784[(1)] = (17));
} else
{var statearr_25739_25785 = state_25718__$1;(statearr_25739_25785[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (2)))
{var inst_25650 = (state_25718[(9)]);var inst_25653 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25650);var state_25718__$1 = state_25718;var statearr_25740_25786 = state_25718__$1;(statearr_25740_25786[(2)] = inst_25653);
(statearr_25740_25786[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (23)))
{var inst_25703 = (state_25718[(2)]);var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25703))
{var statearr_25741_25787 = state_25718__$1;(statearr_25741_25787[(1)] = (24));
} else
{var statearr_25742_25788 = state_25718__$1;(statearr_25742_25788[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (19)))
{var inst_25700 = (state_25718[(2)]);var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25700))
{var statearr_25743_25789 = state_25718__$1;(statearr_25743_25789[(1)] = (20));
} else
{var statearr_25744_25790 = state_25718__$1;(statearr_25744_25790[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (11)))
{var inst_25675 = (state_25718[(8)]);var inst_25681 = (inst_25675 == null);var state_25718__$1 = state_25718;if(cljs.core.truth_(inst_25681))
{var statearr_25745_25791 = state_25718__$1;(statearr_25745_25791[(1)] = (14));
} else
{var statearr_25746_25792 = state_25718__$1;(statearr_25746_25792[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (9)))
{var inst_25668 = (state_25718[(10)]);var inst_25668__$1 = (state_25718[(2)]);var inst_25669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25668__$1,cljs.core.constant$keyword$96);var inst_25670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25668__$1,cljs.core.constant$keyword$95);var inst_25671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25668__$1,cljs.core.constant$keyword$94);var state_25718__$1 = (function (){var statearr_25747 = state_25718;(statearr_25747[(10)] = inst_25668__$1);
(statearr_25747[(16)] = inst_25671);
(statearr_25747[(17)] = inst_25670);
return statearr_25747;
})();return cljs.core.async.ioc_alts_BANG_(state_25718__$1,(10),inst_25669);
} else
{if((state_val_25719 === (5)))
{var inst_25660 = (state_25718[(7)]);var inst_25663 = cljs.core.seq_QMARK_(inst_25660);var state_25718__$1 = state_25718;if(inst_25663)
{var statearr_25748_25793 = state_25718__$1;(statearr_25748_25793[(1)] = (7));
} else
{var statearr_25749_25794 = state_25718__$1;(statearr_25749_25794[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (14)))
{var inst_25676 = (state_25718[(15)]);var inst_25683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25676);var state_25718__$1 = state_25718;var statearr_25750_25795 = state_25718__$1;(statearr_25750_25795[(2)] = inst_25683);
(statearr_25750_25795[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (26)))
{var inst_25708 = (state_25718[(2)]);var state_25718__$1 = state_25718;var statearr_25751_25796 = state_25718__$1;(statearr_25751_25796[(2)] = inst_25708);
(statearr_25751_25796[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (16)))
{var inst_25686 = (state_25718[(2)]);var inst_25687 = calc_state();var inst_25660 = inst_25687;var state_25718__$1 = (function (){var statearr_25752 = state_25718;(statearr_25752[(18)] = inst_25686);
(statearr_25752[(7)] = inst_25660);
return statearr_25752;
})();var statearr_25753_25797 = state_25718__$1;(statearr_25753_25797[(2)] = null);
(statearr_25753_25797[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (10)))
{var inst_25675 = (state_25718[(8)]);var inst_25676 = (state_25718[(15)]);var inst_25674 = (state_25718[(2)]);var inst_25675__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25674,(0),null);var inst_25676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25674,(1),null);var inst_25677 = (inst_25675__$1 == null);var inst_25678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25676__$1,change);var inst_25679 = (inst_25677) || (inst_25678);var state_25718__$1 = (function (){var statearr_25754 = state_25718;(statearr_25754[(8)] = inst_25675__$1);
(statearr_25754[(15)] = inst_25676__$1);
return statearr_25754;
})();if(cljs.core.truth_(inst_25679))
{var statearr_25755_25798 = state_25718__$1;(statearr_25755_25798[(1)] = (11));
} else
{var statearr_25756_25799 = state_25718__$1;(statearr_25756_25799[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (18)))
{var inst_25676 = (state_25718[(15)]);var inst_25671 = (state_25718[(16)]);var inst_25670 = (state_25718[(17)]);var inst_25695 = cljs.core.empty_QMARK_(inst_25671);var inst_25696 = (function (){var G__25757 = inst_25676;return (inst_25670.cljs$core$IFn$_invoke$arity$1 ? inst_25670.cljs$core$IFn$_invoke$arity$1(G__25757) : inst_25670.call(null,G__25757));
})();var inst_25697 = cljs.core.not(inst_25696);var inst_25698 = (inst_25695) && (inst_25697);var state_25718__$1 = state_25718;var statearr_25758_25800 = state_25718__$1;(statearr_25758_25800[(2)] = inst_25698);
(statearr_25758_25800[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25719 === (8)))
{var inst_25660 = (state_25718[(7)]);var state_25718__$1 = state_25718;var statearr_25759_25801 = state_25718__$1;(statearr_25759_25801[(2)] = inst_25660);
(statearr_25759_25801[(1)] = (9));
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
});})(c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25763[(0)] = state_machine__12278__auto__);
(statearr_25763[(1)] = (1));
return statearr_25763;
});
var state_machine__12278__auto____1 = (function (state_25718){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25718);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25764){if((e25764 instanceof Object))
{var ex__12281__auto__ = e25764;var statearr_25765_25802 = state_25718;(statearr_25765_25802[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25718);
return cljs.core.constant$keyword$82;
} else
{throw e25764;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25803 = state_25718;
state_25718 = G__25803;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25718){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25766 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25771);
return statearr_25766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25771,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25805 = {};return obj25805;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25809 = x__4277__auto__;return goog.typeOf(G__25809);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25813 = x__4277__auto__;return goog.typeOf(G__25813);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25819 = x__4277__auto__;return goog.typeOf(G__25819);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25821 = x__4277__auto__;return goog.typeOf(G__25821);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25960 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25960) : cljs.core.atom.call(null,G__25960));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25962 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25962) : cljs.core.deref.call(null,G__25962));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25822_SHARP_){if(cljs.core.truth_((function (){var G__25963 = topic;return (p1__25822_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25822_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25963) : p1__25822_SHARP_.call(null,G__25963));
})()))
{return p1__25822_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25822_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25964 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25964) : buf_fn.call(null,G__25964));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25965 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25966){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25966 = meta25966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25965.cljs$lang$type = true;
cljs.core.async.t25965.cljs$lang$ctorStr = "cljs.core.async/t25965";
cljs.core.async.t25965.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25965");
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25965.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25968 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25968) : self__.ensure_mult.call(null,G__25968));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25969 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25969) : cljs.core.deref.call(null,G__25969));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25970 = self__.mults;var G__25971 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25970,G__25971) : cljs.core.reset_BANG_.call(null,G__25970,G__25971));
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25967){var self__ = this;
var _25967__$1 = this;return self__.meta25966;
});})(mults,ensure_mult))
;
cljs.core.async.t25965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25967,meta25966__$1){var self__ = this;
var _25967__$1 = this;return (new cljs.core.async.t25965(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25966__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25965 = ((function (mults,ensure_mult){
return (function __GT_t25965(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25966){return (new cljs.core.async.t25965(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25966));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25965(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26094,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26094,mults,ensure_mult,p){
return (function (state_26043){var state_val_26044 = (state_26043[(1)]);if((state_val_26044 === (7)))
{var inst_26039 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26045_26095 = state_26043__$1;(statearr_26045_26095[(2)] = inst_26039);
(statearr_26045_26095[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (20)))
{var state_26043__$1 = state_26043;var statearr_26046_26096 = state_26043__$1;(statearr_26046_26096[(2)] = null);
(statearr_26046_26096[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (1)))
{var state_26043__$1 = state_26043;var statearr_26047_26097 = state_26043__$1;(statearr_26047_26097[(2)] = null);
(statearr_26047_26097[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (24)))
{var inst_26022 = (state_26043[(7)]);var inst_26031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26022);var state_26043__$1 = state_26043;var statearr_26048_26098 = state_26043__$1;(statearr_26048_26098[(2)] = inst_26031);
(statearr_26048_26098[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (4)))
{var inst_25974 = (state_26043[(8)]);var inst_25974__$1 = (state_26043[(2)]);var inst_25975 = (inst_25974__$1 == null);var state_26043__$1 = (function (){var statearr_26049 = state_26043;(statearr_26049[(8)] = inst_25974__$1);
return statearr_26049;
})();if(cljs.core.truth_(inst_25975))
{var statearr_26050_26099 = state_26043__$1;(statearr_26050_26099[(1)] = (5));
} else
{var statearr_26051_26100 = state_26043__$1;(statearr_26051_26100[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (15)))
{var inst_26016 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26052_26101 = state_26043__$1;(statearr_26052_26101[(2)] = inst_26016);
(statearr_26052_26101[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (21)))
{var inst_26036 = (state_26043[(2)]);var state_26043__$1 = (function (){var statearr_26053 = state_26043;(statearr_26053[(9)] = inst_26036);
return statearr_26053;
})();var statearr_26054_26102 = state_26043__$1;(statearr_26054_26102[(2)] = null);
(statearr_26054_26102[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (13)))
{var inst_25998 = (state_26043[(10)]);var inst_26000 = cljs.core.chunked_seq_QMARK_(inst_25998);var state_26043__$1 = state_26043;if(inst_26000)
{var statearr_26055_26103 = state_26043__$1;(statearr_26055_26103[(1)] = (16));
} else
{var statearr_26056_26104 = state_26043__$1;(statearr_26056_26104[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (22)))
{var inst_26028 = (state_26043[(2)]);var state_26043__$1 = state_26043;if(cljs.core.truth_(inst_26028))
{var statearr_26057_26105 = state_26043__$1;(statearr_26057_26105[(1)] = (23));
} else
{var statearr_26058_26106 = state_26043__$1;(statearr_26058_26106[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (6)))
{var inst_25974 = (state_26043[(8)]);var inst_26022 = (state_26043[(7)]);var inst_26024 = (state_26043[(11)]);var inst_26022__$1 = (function (){var G__26059 = inst_25974;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26059) : topic_fn.call(null,G__26059));
})();var inst_26023 = (function (){var G__26060 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26060) : cljs.core.deref.call(null,G__26060));
})();var inst_26024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26023,inst_26022__$1);var state_26043__$1 = (function (){var statearr_26061 = state_26043;(statearr_26061[(7)] = inst_26022__$1);
(statearr_26061[(11)] = inst_26024__$1);
return statearr_26061;
})();if(cljs.core.truth_(inst_26024__$1))
{var statearr_26062_26107 = state_26043__$1;(statearr_26062_26107[(1)] = (19));
} else
{var statearr_26063_26108 = state_26043__$1;(statearr_26063_26108[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (25)))
{var inst_26033 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26064_26109 = state_26043__$1;(statearr_26064_26109[(2)] = inst_26033);
(statearr_26064_26109[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (17)))
{var inst_25998 = (state_26043[(10)]);var inst_26007 = cljs.core.first(inst_25998);var inst_26008 = cljs.core.async.muxch_STAR_(inst_26007);var inst_26009 = cljs.core.async.close_BANG_(inst_26008);var inst_26010 = cljs.core.next(inst_25998);var inst_25984 = inst_26010;var inst_25985 = null;var inst_25986 = (0);var inst_25987 = (0);var state_26043__$1 = (function (){var statearr_26065 = state_26043;(statearr_26065[(12)] = inst_25984);
(statearr_26065[(13)] = inst_25985);
(statearr_26065[(14)] = inst_25986);
(statearr_26065[(15)] = inst_25987);
(statearr_26065[(16)] = inst_26009);
return statearr_26065;
})();var statearr_26066_26110 = state_26043__$1;(statearr_26066_26110[(2)] = null);
(statearr_26066_26110[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (3)))
{var inst_26041 = (state_26043[(2)]);var state_26043__$1 = state_26043;return cljs.core.async.impl.ioc_helpers.return_chan(state_26043__$1,inst_26041);
} else
{if((state_val_26044 === (12)))
{var inst_26018 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26067_26111 = state_26043__$1;(statearr_26067_26111[(2)] = inst_26018);
(statearr_26067_26111[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (2)))
{var state_26043__$1 = state_26043;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26043__$1,(4),ch);
} else
{if((state_val_26044 === (23)))
{var state_26043__$1 = state_26043;var statearr_26068_26112 = state_26043__$1;(statearr_26068_26112[(2)] = null);
(statearr_26068_26112[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (19)))
{var inst_25974 = (state_26043[(8)]);var inst_26024 = (state_26043[(11)]);var inst_26026 = cljs.core.async.muxch_STAR_(inst_26024);var state_26043__$1 = state_26043;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26043__$1,(22),inst_26026,inst_25974);
} else
{if((state_val_26044 === (11)))
{var inst_25984 = (state_26043[(12)]);var inst_25998 = (state_26043[(10)]);var inst_25998__$1 = cljs.core.seq(inst_25984);var state_26043__$1 = (function (){var statearr_26069 = state_26043;(statearr_26069[(10)] = inst_25998__$1);
return statearr_26069;
})();if(inst_25998__$1)
{var statearr_26070_26113 = state_26043__$1;(statearr_26070_26113[(1)] = (13));
} else
{var statearr_26071_26114 = state_26043__$1;(statearr_26071_26114[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (9)))
{var inst_26020 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26072_26115 = state_26043__$1;(statearr_26072_26115[(2)] = inst_26020);
(statearr_26072_26115[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (5)))
{var inst_25981 = (function (){var G__26073 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26073) : cljs.core.deref.call(null,G__26073));
})();var inst_25982 = cljs.core.vals(inst_25981);var inst_25983 = cljs.core.seq(inst_25982);var inst_25984 = inst_25983;var inst_25985 = null;var inst_25986 = (0);var inst_25987 = (0);var state_26043__$1 = (function (){var statearr_26074 = state_26043;(statearr_26074[(12)] = inst_25984);
(statearr_26074[(13)] = inst_25985);
(statearr_26074[(14)] = inst_25986);
(statearr_26074[(15)] = inst_25987);
return statearr_26074;
})();var statearr_26075_26116 = state_26043__$1;(statearr_26075_26116[(2)] = null);
(statearr_26075_26116[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (14)))
{var state_26043__$1 = state_26043;var statearr_26079_26117 = state_26043__$1;(statearr_26079_26117[(2)] = null);
(statearr_26079_26117[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (16)))
{var inst_25998 = (state_26043[(10)]);var inst_26002 = cljs.core.chunk_first(inst_25998);var inst_26003 = cljs.core.chunk_rest(inst_25998);var inst_26004 = cljs.core.count(inst_26002);var inst_25984 = inst_26003;var inst_25985 = inst_26002;var inst_25986 = inst_26004;var inst_25987 = (0);var state_26043__$1 = (function (){var statearr_26080 = state_26043;(statearr_26080[(12)] = inst_25984);
(statearr_26080[(13)] = inst_25985);
(statearr_26080[(14)] = inst_25986);
(statearr_26080[(15)] = inst_25987);
return statearr_26080;
})();var statearr_26081_26118 = state_26043__$1;(statearr_26081_26118[(2)] = null);
(statearr_26081_26118[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (10)))
{var inst_25984 = (state_26043[(12)]);var inst_25985 = (state_26043[(13)]);var inst_25986 = (state_26043[(14)]);var inst_25987 = (state_26043[(15)]);var inst_25992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25985,inst_25987);var inst_25993 = cljs.core.async.muxch_STAR_(inst_25992);var inst_25994 = cljs.core.async.close_BANG_(inst_25993);var inst_25995 = (inst_25987 + (1));var tmp26076 = inst_25984;var tmp26077 = inst_25985;var tmp26078 = inst_25986;var inst_25984__$1 = tmp26076;var inst_25985__$1 = tmp26077;var inst_25986__$1 = tmp26078;var inst_25987__$1 = inst_25995;var state_26043__$1 = (function (){var statearr_26082 = state_26043;(statearr_26082[(12)] = inst_25984__$1);
(statearr_26082[(13)] = inst_25985__$1);
(statearr_26082[(17)] = inst_25994);
(statearr_26082[(14)] = inst_25986__$1);
(statearr_26082[(15)] = inst_25987__$1);
return statearr_26082;
})();var statearr_26083_26119 = state_26043__$1;(statearr_26083_26119[(2)] = null);
(statearr_26083_26119[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (18)))
{var inst_26013 = (state_26043[(2)]);var state_26043__$1 = state_26043;var statearr_26084_26120 = state_26043__$1;(statearr_26084_26120[(2)] = inst_26013);
(statearr_26084_26120[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26044 === (8)))
{var inst_25986 = (state_26043[(14)]);var inst_25987 = (state_26043[(15)]);var inst_25989 = (inst_25987 < inst_25986);var inst_25990 = inst_25989;var state_26043__$1 = state_26043;if(cljs.core.truth_(inst_25990))
{var statearr_26085_26121 = state_26043__$1;(statearr_26085_26121[(1)] = (10));
} else
{var statearr_26086_26122 = state_26043__$1;(statearr_26086_26122[(1)] = (11));
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
});})(c__12292__auto___26094,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26094,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26090[(0)] = state_machine__12278__auto__);
(statearr_26090[(1)] = (1));
return statearr_26090;
});
var state_machine__12278__auto____1 = (function (state_26043){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26043);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object))
{var ex__12281__auto__ = e26091;var statearr_26092_26123 = state_26043;(statearr_26092_26123[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26043);
return cljs.core.constant$keyword$82;
} else
{throw e26091;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26124 = state_26043;
state_26043 = G__26124;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26094,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26093 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26094);
return statearr_26093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26094,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26205 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26205) : cljs.core.atom.call(null,G__26205));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26244){var state_val_26245 = (state_26244[(1)]);if((state_val_26245 === (7)))
{var state_26244__$1 = state_26244;var statearr_26246_26279 = state_26244__$1;(statearr_26246_26279[(2)] = null);
(statearr_26246_26279[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (1)))
{var state_26244__$1 = state_26244;var statearr_26247_26280 = state_26244__$1;(statearr_26247_26280[(2)] = null);
(statearr_26247_26280[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (4)))
{var inst_26208 = (state_26244[(7)]);var inst_26210 = (inst_26208 < cnt);var state_26244__$1 = state_26244;if(cljs.core.truth_(inst_26210))
{var statearr_26248_26281 = state_26244__$1;(statearr_26248_26281[(1)] = (6));
} else
{var statearr_26249_26282 = state_26244__$1;(statearr_26249_26282[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (15)))
{var inst_26240 = (state_26244[(2)]);var state_26244__$1 = state_26244;var statearr_26250_26283 = state_26244__$1;(statearr_26250_26283[(2)] = inst_26240);
(statearr_26250_26283[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (13)))
{var inst_26233 = cljs.core.async.close_BANG_(out);var state_26244__$1 = state_26244;var statearr_26251_26284 = state_26244__$1;(statearr_26251_26284[(2)] = inst_26233);
(statearr_26251_26284[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (6)))
{var state_26244__$1 = state_26244;var statearr_26252_26285 = state_26244__$1;(statearr_26252_26285[(2)] = null);
(statearr_26252_26285[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (3)))
{var inst_26242 = (state_26244[(2)]);var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.return_chan(state_26244__$1,inst_26242);
} else
{if((state_val_26245 === (12)))
{var inst_26230 = (state_26244[(8)]);var inst_26230__$1 = (state_26244[(2)]);var inst_26231 = cljs.core.some(cljs.core.nil_QMARK_,inst_26230__$1);var state_26244__$1 = (function (){var statearr_26253 = state_26244;(statearr_26253[(8)] = inst_26230__$1);
return statearr_26253;
})();if(cljs.core.truth_(inst_26231))
{var statearr_26254_26286 = state_26244__$1;(statearr_26254_26286[(1)] = (13));
} else
{var statearr_26255_26287 = state_26244__$1;(statearr_26255_26287[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (2)))
{var inst_26207 = (function (){var G__26256 = dctr;var G__26257 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26256,G__26257) : cljs.core.reset_BANG_.call(null,G__26256,G__26257));
})();var inst_26208 = (0);var state_26244__$1 = (function (){var statearr_26258 = state_26244;(statearr_26258[(9)] = inst_26207);
(statearr_26258[(7)] = inst_26208);
return statearr_26258;
})();var statearr_26259_26288 = state_26244__$1;(statearr_26259_26288[(2)] = null);
(statearr_26259_26288[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (11)))
{var inst_26208 = (state_26244[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26244,(10),Object,null,(9));var inst_26217 = (function (){var G__26260 = inst_26208;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26260) : chs__$1.call(null,G__26260));
})();var inst_26218 = (function (){var G__26261 = inst_26208;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26261) : done.call(null,G__26261));
})();var inst_26219 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26217,inst_26218);var state_26244__$1 = state_26244;var statearr_26262_26289 = state_26244__$1;(statearr_26262_26289[(2)] = inst_26219);
cljs.core.async.impl.ioc_helpers.process_exception(state_26244__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (9)))
{var inst_26208 = (state_26244[(7)]);var inst_26221 = (state_26244[(2)]);var inst_26222 = (inst_26208 + (1));var inst_26208__$1 = inst_26222;var state_26244__$1 = (function (){var statearr_26263 = state_26244;(statearr_26263[(7)] = inst_26208__$1);
(statearr_26263[(10)] = inst_26221);
return statearr_26263;
})();var statearr_26264_26290 = state_26244__$1;(statearr_26264_26290[(2)] = null);
(statearr_26264_26290[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (5)))
{var inst_26228 = (state_26244[(2)]);var state_26244__$1 = (function (){var statearr_26265 = state_26244;(statearr_26265[(11)] = inst_26228);
return statearr_26265;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26244__$1,(12),dchan);
} else
{if((state_val_26245 === (14)))
{var inst_26230 = (state_26244[(8)]);var inst_26235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26230);var state_26244__$1 = state_26244;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26244__$1,(16),out,inst_26235);
} else
{if((state_val_26245 === (16)))
{var inst_26237 = (state_26244[(2)]);var state_26244__$1 = (function (){var statearr_26266 = state_26244;(statearr_26266[(12)] = inst_26237);
return statearr_26266;
})();var statearr_26267_26291 = state_26244__$1;(statearr_26267_26291[(2)] = null);
(statearr_26267_26291[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (10)))
{var inst_26212 = (state_26244[(2)]);var inst_26213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26244__$1 = (function (){var statearr_26268 = state_26244;(statearr_26268[(13)] = inst_26212);
return statearr_26268;
})();var statearr_26269_26292 = state_26244__$1;(statearr_26269_26292[(2)] = inst_26213);
cljs.core.async.impl.ioc_helpers.process_exception(state_26244__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26245 === (8)))
{var inst_26226 = (state_26244[(2)]);var state_26244__$1 = state_26244;var statearr_26270_26293 = state_26244__$1;(statearr_26270_26293[(2)] = inst_26226);
(statearr_26270_26293[(1)] = (5));
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
});})(c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26274[(0)] = state_machine__12278__auto__);
(statearr_26274[(1)] = (1));
return statearr_26274;
});
var state_machine__12278__auto____1 = (function (state_26244){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26244);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26275){if((e26275 instanceof Object))
{var ex__12281__auto__ = e26275;var statearr_26276_26294 = state_26244;(statearr_26276_26294[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26244);
return cljs.core.constant$keyword$82;
} else
{throw e26275;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26295 = state_26244;
state_26244 = G__26295;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26244){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26277 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26278);
return statearr_26277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26278,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26405,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26405,out){
return (function (state_26381){var state_val_26382 = (state_26381[(1)]);if((state_val_26382 === (7)))
{var inst_26360 = (state_26381[(7)]);var inst_26361 = (state_26381[(8)]);var inst_26360__$1 = (state_26381[(2)]);var inst_26361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26360__$1,(0),null);var inst_26362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26360__$1,(1),null);var inst_26363 = (inst_26361__$1 == null);var state_26381__$1 = (function (){var statearr_26383 = state_26381;(statearr_26383[(9)] = inst_26362);
(statearr_26383[(7)] = inst_26360__$1);
(statearr_26383[(8)] = inst_26361__$1);
return statearr_26383;
})();if(cljs.core.truth_(inst_26363))
{var statearr_26384_26406 = state_26381__$1;(statearr_26384_26406[(1)] = (8));
} else
{var statearr_26385_26407 = state_26381__$1;(statearr_26385_26407[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (1)))
{var inst_26352 = cljs.core.vec(chs);var inst_26353 = inst_26352;var state_26381__$1 = (function (){var statearr_26386 = state_26381;(statearr_26386[(10)] = inst_26353);
return statearr_26386;
})();var statearr_26387_26408 = state_26381__$1;(statearr_26387_26408[(2)] = null);
(statearr_26387_26408[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (4)))
{var inst_26353 = (state_26381[(10)]);var state_26381__$1 = state_26381;return cljs.core.async.ioc_alts_BANG_(state_26381__$1,(7),inst_26353);
} else
{if((state_val_26382 === (6)))
{var inst_26377 = (state_26381[(2)]);var state_26381__$1 = state_26381;var statearr_26388_26409 = state_26381__$1;(statearr_26388_26409[(2)] = inst_26377);
(statearr_26388_26409[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (3)))
{var inst_26379 = (state_26381[(2)]);var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.return_chan(state_26381__$1,inst_26379);
} else
{if((state_val_26382 === (2)))
{var inst_26353 = (state_26381[(10)]);var inst_26355 = cljs.core.count(inst_26353);var inst_26356 = (inst_26355 > (0));var state_26381__$1 = state_26381;if(cljs.core.truth_(inst_26356))
{var statearr_26390_26410 = state_26381__$1;(statearr_26390_26410[(1)] = (4));
} else
{var statearr_26391_26411 = state_26381__$1;(statearr_26391_26411[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (11)))
{var inst_26353 = (state_26381[(10)]);var inst_26370 = (state_26381[(2)]);var tmp26389 = inst_26353;var inst_26353__$1 = tmp26389;var state_26381__$1 = (function (){var statearr_26392 = state_26381;(statearr_26392[(10)] = inst_26353__$1);
(statearr_26392[(11)] = inst_26370);
return statearr_26392;
})();var statearr_26393_26412 = state_26381__$1;(statearr_26393_26412[(2)] = null);
(statearr_26393_26412[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (9)))
{var inst_26361 = (state_26381[(8)]);var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26381__$1,(11),out,inst_26361);
} else
{if((state_val_26382 === (5)))
{var inst_26375 = cljs.core.async.close_BANG_(out);var state_26381__$1 = state_26381;var statearr_26394_26413 = state_26381__$1;(statearr_26394_26413[(2)] = inst_26375);
(statearr_26394_26413[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (10)))
{var inst_26373 = (state_26381[(2)]);var state_26381__$1 = state_26381;var statearr_26395_26414 = state_26381__$1;(statearr_26395_26414[(2)] = inst_26373);
(statearr_26395_26414[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26382 === (8)))
{var inst_26353 = (state_26381[(10)]);var inst_26362 = (state_26381[(9)]);var inst_26360 = (state_26381[(7)]);var inst_26361 = (state_26381[(8)]);var inst_26365 = (function (){var c = inst_26362;var v = inst_26361;var vec__26358 = inst_26360;var cs = inst_26353;return ((function (c,v,vec__26358,cs,inst_26353,inst_26362,inst_26360,inst_26361,state_val_26382,c__12292__auto___26405,out){
return (function (p1__26296_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26296_SHARP_);
});
;})(c,v,vec__26358,cs,inst_26353,inst_26362,inst_26360,inst_26361,state_val_26382,c__12292__auto___26405,out))
})();var inst_26366 = cljs.core.filterv(inst_26365,inst_26353);var inst_26353__$1 = inst_26366;var state_26381__$1 = (function (){var statearr_26396 = state_26381;(statearr_26396[(10)] = inst_26353__$1);
return statearr_26396;
})();var statearr_26397_26415 = state_26381__$1;(statearr_26397_26415[(2)] = null);
(statearr_26397_26415[(1)] = (2));
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
});})(c__12292__auto___26405,out))
;return ((function (switch__12277__auto__,c__12292__auto___26405,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26401 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26401[(0)] = state_machine__12278__auto__);
(statearr_26401[(1)] = (1));
return statearr_26401;
});
var state_machine__12278__auto____1 = (function (state_26381){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26381);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26402){if((e26402 instanceof Object))
{var ex__12281__auto__ = e26402;var statearr_26403_26416 = state_26381;(statearr_26403_26416[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26381);
return cljs.core.constant$keyword$82;
} else
{throw e26402;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26417 = state_26381;
state_26381 = G__26417;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26381){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26405,out))
})();var state__12294__auto__ = (function (){var statearr_26404 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26405);
return statearr_26404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26405,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26513,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26513,out){
return (function (state_26490){var state_val_26491 = (state_26490[(1)]);if((state_val_26491 === (7)))
{var inst_26472 = (state_26490[(7)]);var inst_26472__$1 = (state_26490[(2)]);var inst_26473 = (inst_26472__$1 == null);var inst_26474 = cljs.core.not(inst_26473);var state_26490__$1 = (function (){var statearr_26492 = state_26490;(statearr_26492[(7)] = inst_26472__$1);
return statearr_26492;
})();if(inst_26474)
{var statearr_26493_26514 = state_26490__$1;(statearr_26493_26514[(1)] = (8));
} else
{var statearr_26494_26515 = state_26490__$1;(statearr_26494_26515[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (1)))
{var inst_26467 = (0);var state_26490__$1 = (function (){var statearr_26495 = state_26490;(statearr_26495[(8)] = inst_26467);
return statearr_26495;
})();var statearr_26496_26516 = state_26490__$1;(statearr_26496_26516[(2)] = null);
(statearr_26496_26516[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (4)))
{var state_26490__$1 = state_26490;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26490__$1,(7),ch);
} else
{if((state_val_26491 === (6)))
{var inst_26485 = (state_26490[(2)]);var state_26490__$1 = state_26490;var statearr_26497_26517 = state_26490__$1;(statearr_26497_26517[(2)] = inst_26485);
(statearr_26497_26517[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (3)))
{var inst_26487 = (state_26490[(2)]);var inst_26488 = cljs.core.async.close_BANG_(out);var state_26490__$1 = (function (){var statearr_26498 = state_26490;(statearr_26498[(9)] = inst_26487);
return statearr_26498;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26490__$1,inst_26488);
} else
{if((state_val_26491 === (2)))
{var inst_26467 = (state_26490[(8)]);var inst_26469 = (inst_26467 < n);var state_26490__$1 = state_26490;if(cljs.core.truth_(inst_26469))
{var statearr_26499_26518 = state_26490__$1;(statearr_26499_26518[(1)] = (4));
} else
{var statearr_26500_26519 = state_26490__$1;(statearr_26500_26519[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (11)))
{var inst_26467 = (state_26490[(8)]);var inst_26477 = (state_26490[(2)]);var inst_26478 = (inst_26467 + (1));var inst_26467__$1 = inst_26478;var state_26490__$1 = (function (){var statearr_26501 = state_26490;(statearr_26501[(10)] = inst_26477);
(statearr_26501[(8)] = inst_26467__$1);
return statearr_26501;
})();var statearr_26502_26520 = state_26490__$1;(statearr_26502_26520[(2)] = null);
(statearr_26502_26520[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (9)))
{var state_26490__$1 = state_26490;var statearr_26503_26521 = state_26490__$1;(statearr_26503_26521[(2)] = null);
(statearr_26503_26521[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (5)))
{var state_26490__$1 = state_26490;var statearr_26504_26522 = state_26490__$1;(statearr_26504_26522[(2)] = null);
(statearr_26504_26522[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (10)))
{var inst_26482 = (state_26490[(2)]);var state_26490__$1 = state_26490;var statearr_26505_26523 = state_26490__$1;(statearr_26505_26523[(2)] = inst_26482);
(statearr_26505_26523[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26491 === (8)))
{var inst_26472 = (state_26490[(7)]);var state_26490__$1 = state_26490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26490__$1,(11),out,inst_26472);
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
});})(c__12292__auto___26513,out))
;return ((function (switch__12277__auto__,c__12292__auto___26513,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26509 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26509[(0)] = state_machine__12278__auto__);
(statearr_26509[(1)] = (1));
return statearr_26509;
});
var state_machine__12278__auto____1 = (function (state_26490){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26490);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object))
{var ex__12281__auto__ = e26510;var statearr_26511_26524 = state_26490;(statearr_26511_26524[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26490);
return cljs.core.constant$keyword$82;
} else
{throw e26510;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26525 = state_26490;
state_26490 = G__26525;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26513,out))
})();var state__12294__auto__ = (function (){var statearr_26512 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26513);
return statearr_26512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26513,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26538 = (function (ch,f,map_LT_,meta26539){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26539 = meta26539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26538.cljs$lang$type = true;
cljs.core.async.t26538.cljs$lang$ctorStr = "cljs.core.async/t26538";
cljs.core.async.t26538.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26538");
});
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26541 = (function (fn1,_,meta26539,ch,f,map_LT_,meta26542){
this.fn1 = fn1;
this._ = _;
this.meta26539 = meta26539;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26542 = meta26542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26541.cljs$lang$type = true;
cljs.core.async.t26541.cljs$lang$ctorStr = "cljs.core.async/t26541";
cljs.core.async.t26541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26541");
});})(___$1))
;
cljs.core.async.t26541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26526_SHARP_){var G__26544 = (((p1__26526_SHARP_ == null))?null:(function (){var G__26545 = p1__26526_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26545) : self__.f.call(null,G__26545));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26544) : f1.call(null,G__26544));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26543){var self__ = this;
var _26543__$1 = this;return self__.meta26542;
});})(___$1))
;
cljs.core.async.t26541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26543,meta26542__$1){var self__ = this;
var _26543__$1 = this;return (new cljs.core.async.t26541(self__.fn1,self__._,self__.meta26539,self__.ch,self__.f,self__.map_LT_,meta26542__$1));
});})(___$1))
;
cljs.core.async.__GT_t26541 = ((function (___$1){
return (function __GT_t26541(fn1__$1,___$2,meta26539__$1,ch__$2,f__$2,map_LT___$2,meta26542){return (new cljs.core.async.t26541(fn1__$1,___$2,meta26539__$1,ch__$2,f__$2,map_LT___$2,meta26542));
});})(___$1))
;
}
return (new cljs.core.async.t26541(fn1,___$1,self__.meta26539,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26546 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26546) : cljs.core.deref.call(null,G__26546));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26547 = (function (){var G__26548 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26548) : cljs.core.deref.call(null,G__26548));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26547) : self__.f.call(null,G__26547));
})());
} else
{return ret;
}
});
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26540){var self__ = this;
var _26540__$1 = this;return self__.meta26539;
});
cljs.core.async.t26538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26540,meta26539__$1){var self__ = this;
var _26540__$1 = this;return (new cljs.core.async.t26538(self__.ch,self__.f,self__.map_LT_,meta26539__$1));
});
cljs.core.async.__GT_t26538 = (function __GT_t26538(ch__$1,f__$1,map_LT___$1,meta26539){return (new cljs.core.async.t26538(ch__$1,f__$1,map_LT___$1,meta26539));
});
}
return (new cljs.core.async.t26538(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26553 = (function (ch,f,map_GT_,meta26554){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26554 = meta26554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26553.cljs$lang$type = true;
cljs.core.async.t26553.cljs$lang$ctorStr = "cljs.core.async/t26553";
cljs.core.async.t26553.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26553");
});
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26556 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26556) : self__.f.call(null,G__26556));
})(),fn1);
});
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26555){var self__ = this;
var _26555__$1 = this;return self__.meta26554;
});
cljs.core.async.t26553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26555,meta26554__$1){var self__ = this;
var _26555__$1 = this;return (new cljs.core.async.t26553(self__.ch,self__.f,self__.map_GT_,meta26554__$1));
});
cljs.core.async.__GT_t26553 = (function __GT_t26553(ch__$1,f__$1,map_GT___$1,meta26554){return (new cljs.core.async.t26553(ch__$1,f__$1,map_GT___$1,meta26554));
});
}
return (new cljs.core.async.t26553(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26561 = (function (ch,p,filter_GT_,meta26562){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26562 = meta26562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26561.cljs$lang$type = true;
cljs.core.async.t26561.cljs$lang$ctorStr = "cljs.core.async/t26561";
cljs.core.async.t26561.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26561");
});
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26564 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26564) : self__.p.call(null,G__26564));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26563){var self__ = this;
var _26563__$1 = this;return self__.meta26562;
});
cljs.core.async.t26561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26563,meta26562__$1){var self__ = this;
var _26563__$1 = this;return (new cljs.core.async.t26561(self__.ch,self__.p,self__.filter_GT_,meta26562__$1));
});
cljs.core.async.__GT_t26561 = (function __GT_t26561(ch__$1,p__$1,filter_GT___$1,meta26562){return (new cljs.core.async.t26561(ch__$1,p__$1,filter_GT___$1,meta26562));
});
}
return (new cljs.core.async.t26561(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26652,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26652,out){
return (function (state_26630){var state_val_26631 = (state_26630[(1)]);if((state_val_26631 === (7)))
{var inst_26626 = (state_26630[(2)]);var state_26630__$1 = state_26630;var statearr_26632_26653 = state_26630__$1;(statearr_26632_26653[(2)] = inst_26626);
(statearr_26632_26653[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (1)))
{var state_26630__$1 = state_26630;var statearr_26633_26654 = state_26630__$1;(statearr_26633_26654[(2)] = null);
(statearr_26633_26654[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (4)))
{var inst_26612 = (state_26630[(7)]);var inst_26612__$1 = (state_26630[(2)]);var inst_26613 = (inst_26612__$1 == null);var state_26630__$1 = (function (){var statearr_26634 = state_26630;(statearr_26634[(7)] = inst_26612__$1);
return statearr_26634;
})();if(cljs.core.truth_(inst_26613))
{var statearr_26635_26655 = state_26630__$1;(statearr_26635_26655[(1)] = (5));
} else
{var statearr_26636_26656 = state_26630__$1;(statearr_26636_26656[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (6)))
{var inst_26612 = (state_26630[(7)]);var inst_26617 = (function (){var G__26637 = inst_26612;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26637) : p.call(null,G__26637));
})();var state_26630__$1 = state_26630;if(cljs.core.truth_(inst_26617))
{var statearr_26638_26657 = state_26630__$1;(statearr_26638_26657[(1)] = (8));
} else
{var statearr_26639_26658 = state_26630__$1;(statearr_26639_26658[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (3)))
{var inst_26628 = (state_26630[(2)]);var state_26630__$1 = state_26630;return cljs.core.async.impl.ioc_helpers.return_chan(state_26630__$1,inst_26628);
} else
{if((state_val_26631 === (2)))
{var state_26630__$1 = state_26630;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26630__$1,(4),ch);
} else
{if((state_val_26631 === (11)))
{var inst_26620 = (state_26630[(2)]);var state_26630__$1 = state_26630;var statearr_26640_26659 = state_26630__$1;(statearr_26640_26659[(2)] = inst_26620);
(statearr_26640_26659[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (9)))
{var state_26630__$1 = state_26630;var statearr_26641_26660 = state_26630__$1;(statearr_26641_26660[(2)] = null);
(statearr_26641_26660[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (5)))
{var inst_26615 = cljs.core.async.close_BANG_(out);var state_26630__$1 = state_26630;var statearr_26642_26661 = state_26630__$1;(statearr_26642_26661[(2)] = inst_26615);
(statearr_26642_26661[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (10)))
{var inst_26623 = (state_26630[(2)]);var state_26630__$1 = (function (){var statearr_26643 = state_26630;(statearr_26643[(8)] = inst_26623);
return statearr_26643;
})();var statearr_26644_26662 = state_26630__$1;(statearr_26644_26662[(2)] = null);
(statearr_26644_26662[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26631 === (8)))
{var inst_26612 = (state_26630[(7)]);var state_26630__$1 = state_26630;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26630__$1,(11),out,inst_26612);
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
});})(c__12292__auto___26652,out))
;return ((function (switch__12277__auto__,c__12292__auto___26652,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26648 = [null,null,null,null,null,null,null,null,null];(statearr_26648[(0)] = state_machine__12278__auto__);
(statearr_26648[(1)] = (1));
return statearr_26648;
});
var state_machine__12278__auto____1 = (function (state_26630){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26630);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26649){if((e26649 instanceof Object))
{var ex__12281__auto__ = e26649;var statearr_26650_26663 = state_26630;(statearr_26650_26663[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26630);
return cljs.core.constant$keyword$82;
} else
{throw e26649;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26664 = state_26630;
state_26630 = G__26664;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26652,out))
})();var state__12294__auto__ = (function (){var statearr_26651 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26652);
return statearr_26651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26652,out))
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
return (function (state_26834){var state_val_26835 = (state_26834[(1)]);if((state_val_26835 === (7)))
{var inst_26830 = (state_26834[(2)]);var state_26834__$1 = state_26834;var statearr_26836_26878 = state_26834__$1;(statearr_26836_26878[(2)] = inst_26830);
(statearr_26836_26878[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (20)))
{var inst_26800 = (state_26834[(7)]);var inst_26811 = (state_26834[(2)]);var inst_26812 = cljs.core.next(inst_26800);var inst_26786 = inst_26812;var inst_26787 = null;var inst_26788 = (0);var inst_26789 = (0);var state_26834__$1 = (function (){var statearr_26837 = state_26834;(statearr_26837[(8)] = inst_26789);
(statearr_26837[(9)] = inst_26787);
(statearr_26837[(10)] = inst_26786);
(statearr_26837[(11)] = inst_26788);
(statearr_26837[(12)] = inst_26811);
return statearr_26837;
})();var statearr_26838_26879 = state_26834__$1;(statearr_26838_26879[(2)] = null);
(statearr_26838_26879[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (1)))
{var state_26834__$1 = state_26834;var statearr_26839_26880 = state_26834__$1;(statearr_26839_26880[(2)] = null);
(statearr_26839_26880[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (4)))
{var inst_26775 = (state_26834[(13)]);var inst_26775__$1 = (state_26834[(2)]);var inst_26776 = (inst_26775__$1 == null);var state_26834__$1 = (function (){var statearr_26840 = state_26834;(statearr_26840[(13)] = inst_26775__$1);
return statearr_26840;
})();if(cljs.core.truth_(inst_26776))
{var statearr_26841_26881 = state_26834__$1;(statearr_26841_26881[(1)] = (5));
} else
{var statearr_26842_26882 = state_26834__$1;(statearr_26842_26882[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (15)))
{var state_26834__$1 = state_26834;var statearr_26846_26883 = state_26834__$1;(statearr_26846_26883[(2)] = null);
(statearr_26846_26883[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (21)))
{var state_26834__$1 = state_26834;var statearr_26847_26884 = state_26834__$1;(statearr_26847_26884[(2)] = null);
(statearr_26847_26884[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (13)))
{var inst_26789 = (state_26834[(8)]);var inst_26787 = (state_26834[(9)]);var inst_26786 = (state_26834[(10)]);var inst_26788 = (state_26834[(11)]);var inst_26796 = (state_26834[(2)]);var inst_26797 = (inst_26789 + (1));var tmp26843 = inst_26787;var tmp26844 = inst_26786;var tmp26845 = inst_26788;var inst_26786__$1 = tmp26844;var inst_26787__$1 = tmp26843;var inst_26788__$1 = tmp26845;var inst_26789__$1 = inst_26797;var state_26834__$1 = (function (){var statearr_26848 = state_26834;(statearr_26848[(8)] = inst_26789__$1);
(statearr_26848[(9)] = inst_26787__$1);
(statearr_26848[(14)] = inst_26796);
(statearr_26848[(10)] = inst_26786__$1);
(statearr_26848[(11)] = inst_26788__$1);
return statearr_26848;
})();var statearr_26849_26885 = state_26834__$1;(statearr_26849_26885[(2)] = null);
(statearr_26849_26885[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (22)))
{var state_26834__$1 = state_26834;var statearr_26850_26886 = state_26834__$1;(statearr_26850_26886[(2)] = null);
(statearr_26850_26886[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (6)))
{var inst_26775 = (state_26834[(13)]);var inst_26784 = (function (){var G__26851 = inst_26775;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26851) : f.call(null,G__26851));
})();var inst_26785 = cljs.core.seq(inst_26784);var inst_26786 = inst_26785;var inst_26787 = null;var inst_26788 = (0);var inst_26789 = (0);var state_26834__$1 = (function (){var statearr_26852 = state_26834;(statearr_26852[(8)] = inst_26789);
(statearr_26852[(9)] = inst_26787);
(statearr_26852[(10)] = inst_26786);
(statearr_26852[(11)] = inst_26788);
return statearr_26852;
})();var statearr_26853_26887 = state_26834__$1;(statearr_26853_26887[(2)] = null);
(statearr_26853_26887[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (17)))
{var inst_26800 = (state_26834[(7)]);var inst_26804 = cljs.core.chunk_first(inst_26800);var inst_26805 = cljs.core.chunk_rest(inst_26800);var inst_26806 = cljs.core.count(inst_26804);var inst_26786 = inst_26805;var inst_26787 = inst_26804;var inst_26788 = inst_26806;var inst_26789 = (0);var state_26834__$1 = (function (){var statearr_26854 = state_26834;(statearr_26854[(8)] = inst_26789);
(statearr_26854[(9)] = inst_26787);
(statearr_26854[(10)] = inst_26786);
(statearr_26854[(11)] = inst_26788);
return statearr_26854;
})();var statearr_26855_26888 = state_26834__$1;(statearr_26855_26888[(2)] = null);
(statearr_26855_26888[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (3)))
{var inst_26832 = (state_26834[(2)]);var state_26834__$1 = state_26834;return cljs.core.async.impl.ioc_helpers.return_chan(state_26834__$1,inst_26832);
} else
{if((state_val_26835 === (12)))
{var inst_26820 = (state_26834[(2)]);var state_26834__$1 = state_26834;var statearr_26856_26889 = state_26834__$1;(statearr_26856_26889[(2)] = inst_26820);
(statearr_26856_26889[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (2)))
{var state_26834__$1 = state_26834;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26834__$1,(4),in$);
} else
{if((state_val_26835 === (23)))
{var inst_26828 = (state_26834[(2)]);var state_26834__$1 = state_26834;var statearr_26857_26890 = state_26834__$1;(statearr_26857_26890[(2)] = inst_26828);
(statearr_26857_26890[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (19)))
{var inst_26815 = (state_26834[(2)]);var state_26834__$1 = state_26834;var statearr_26858_26891 = state_26834__$1;(statearr_26858_26891[(2)] = inst_26815);
(statearr_26858_26891[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (11)))
{var inst_26800 = (state_26834[(7)]);var inst_26786 = (state_26834[(10)]);var inst_26800__$1 = cljs.core.seq(inst_26786);var state_26834__$1 = (function (){var statearr_26859 = state_26834;(statearr_26859[(7)] = inst_26800__$1);
return statearr_26859;
})();if(inst_26800__$1)
{var statearr_26860_26892 = state_26834__$1;(statearr_26860_26892[(1)] = (14));
} else
{var statearr_26861_26893 = state_26834__$1;(statearr_26861_26893[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (9)))
{var inst_26822 = (state_26834[(2)]);var inst_26823 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26834__$1 = (function (){var statearr_26862 = state_26834;(statearr_26862[(15)] = inst_26822);
return statearr_26862;
})();if(cljs.core.truth_(inst_26823))
{var statearr_26863_26894 = state_26834__$1;(statearr_26863_26894[(1)] = (21));
} else
{var statearr_26864_26895 = state_26834__$1;(statearr_26864_26895[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (5)))
{var inst_26778 = cljs.core.async.close_BANG_(out);var state_26834__$1 = state_26834;var statearr_26865_26896 = state_26834__$1;(statearr_26865_26896[(2)] = inst_26778);
(statearr_26865_26896[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (14)))
{var inst_26800 = (state_26834[(7)]);var inst_26802 = cljs.core.chunked_seq_QMARK_(inst_26800);var state_26834__$1 = state_26834;if(inst_26802)
{var statearr_26866_26897 = state_26834__$1;(statearr_26866_26897[(1)] = (17));
} else
{var statearr_26867_26898 = state_26834__$1;(statearr_26867_26898[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (16)))
{var inst_26818 = (state_26834[(2)]);var state_26834__$1 = state_26834;var statearr_26868_26899 = state_26834__$1;(statearr_26868_26899[(2)] = inst_26818);
(statearr_26868_26899[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26835 === (10)))
{var inst_26789 = (state_26834[(8)]);var inst_26787 = (state_26834[(9)]);var inst_26794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26787,inst_26789);var state_26834__$1 = state_26834;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26834__$1,(13),out,inst_26794);
} else
{if((state_val_26835 === (18)))
{var inst_26800 = (state_26834[(7)]);var inst_26809 = cljs.core.first(inst_26800);var state_26834__$1 = state_26834;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26834__$1,(20),out,inst_26809);
} else
{if((state_val_26835 === (8)))
{var inst_26789 = (state_26834[(8)]);var inst_26788 = (state_26834[(11)]);var inst_26791 = (inst_26789 < inst_26788);var inst_26792 = inst_26791;var state_26834__$1 = state_26834;if(cljs.core.truth_(inst_26792))
{var statearr_26869_26900 = state_26834__$1;(statearr_26869_26900[(1)] = (10));
} else
{var statearr_26870_26901 = state_26834__$1;(statearr_26870_26901[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26874[(0)] = state_machine__12278__auto__);
(statearr_26874[(1)] = (1));
return statearr_26874;
});
var state_machine__12278__auto____1 = (function (state_26834){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26834);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26875){if((e26875 instanceof Object))
{var ex__12281__auto__ = e26875;var statearr_26876_26902 = state_26834;(statearr_26876_26902[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26834);
return cljs.core.constant$keyword$82;
} else
{throw e26875;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26903 = state_26834;
state_26834 = G__26903;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26877 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26877;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27008,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27008,out){
return (function (state_26983){var state_val_26984 = (state_26983[(1)]);if((state_val_26984 === (7)))
{var inst_26978 = (state_26983[(2)]);var state_26983__$1 = state_26983;var statearr_26985_27009 = state_26983__$1;(statearr_26985_27009[(2)] = inst_26978);
(statearr_26985_27009[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (1)))
{var inst_26960 = null;var state_26983__$1 = (function (){var statearr_26986 = state_26983;(statearr_26986[(7)] = inst_26960);
return statearr_26986;
})();var statearr_26987_27010 = state_26983__$1;(statearr_26987_27010[(2)] = null);
(statearr_26987_27010[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (4)))
{var inst_26963 = (state_26983[(8)]);var inst_26963__$1 = (state_26983[(2)]);var inst_26964 = (inst_26963__$1 == null);var inst_26965 = cljs.core.not(inst_26964);var state_26983__$1 = (function (){var statearr_26988 = state_26983;(statearr_26988[(8)] = inst_26963__$1);
return statearr_26988;
})();if(inst_26965)
{var statearr_26989_27011 = state_26983__$1;(statearr_26989_27011[(1)] = (5));
} else
{var statearr_26990_27012 = state_26983__$1;(statearr_26990_27012[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (6)))
{var state_26983__$1 = state_26983;var statearr_26991_27013 = state_26983__$1;(statearr_26991_27013[(2)] = null);
(statearr_26991_27013[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (3)))
{var inst_26980 = (state_26983[(2)]);var inst_26981 = cljs.core.async.close_BANG_(out);var state_26983__$1 = (function (){var statearr_26992 = state_26983;(statearr_26992[(9)] = inst_26980);
return statearr_26992;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26983__$1,inst_26981);
} else
{if((state_val_26984 === (2)))
{var state_26983__$1 = state_26983;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26983__$1,(4),ch);
} else
{if((state_val_26984 === (11)))
{var inst_26963 = (state_26983[(8)]);var inst_26972 = (state_26983[(2)]);var inst_26960 = inst_26963;var state_26983__$1 = (function (){var statearr_26993 = state_26983;(statearr_26993[(7)] = inst_26960);
(statearr_26993[(10)] = inst_26972);
return statearr_26993;
})();var statearr_26994_27014 = state_26983__$1;(statearr_26994_27014[(2)] = null);
(statearr_26994_27014[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (9)))
{var inst_26963 = (state_26983[(8)]);var state_26983__$1 = state_26983;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26983__$1,(11),out,inst_26963);
} else
{if((state_val_26984 === (5)))
{var inst_26960 = (state_26983[(7)]);var inst_26963 = (state_26983[(8)]);var inst_26967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26963,inst_26960);var state_26983__$1 = state_26983;if(inst_26967)
{var statearr_26996_27015 = state_26983__$1;(statearr_26996_27015[(1)] = (8));
} else
{var statearr_26997_27016 = state_26983__$1;(statearr_26997_27016[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (10)))
{var inst_26975 = (state_26983[(2)]);var state_26983__$1 = state_26983;var statearr_26998_27017 = state_26983__$1;(statearr_26998_27017[(2)] = inst_26975);
(statearr_26998_27017[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26984 === (8)))
{var inst_26960 = (state_26983[(7)]);var tmp26995 = inst_26960;var inst_26960__$1 = tmp26995;var state_26983__$1 = (function (){var statearr_26999 = state_26983;(statearr_26999[(7)] = inst_26960__$1);
return statearr_26999;
})();var statearr_27000_27018 = state_26983__$1;(statearr_27000_27018[(2)] = null);
(statearr_27000_27018[(1)] = (2));
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
});})(c__12292__auto___27008,out))
;return ((function (switch__12277__auto__,c__12292__auto___27008,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27004 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27004[(0)] = state_machine__12278__auto__);
(statearr_27004[(1)] = (1));
return statearr_27004;
});
var state_machine__12278__auto____1 = (function (state_26983){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26983);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object))
{var ex__12281__auto__ = e27005;var statearr_27006_27019 = state_26983;(statearr_27006_27019[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26983);
return cljs.core.constant$keyword$82;
} else
{throw e27005;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27020 = state_26983;
state_26983 = G__27020;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26983){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27008,out))
})();var state__12294__auto__ = (function (){var statearr_27007 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27008);
return statearr_27007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27008,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27158,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27158,out){
return (function (state_27128){var state_val_27129 = (state_27128[(1)]);if((state_val_27129 === (7)))
{var inst_27124 = (state_27128[(2)]);var state_27128__$1 = state_27128;var statearr_27130_27159 = state_27128__$1;(statearr_27130_27159[(2)] = inst_27124);
(statearr_27130_27159[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (1)))
{var inst_27091 = (new Array(n));var inst_27092 = inst_27091;var inst_27093 = (0);var state_27128__$1 = (function (){var statearr_27131 = state_27128;(statearr_27131[(7)] = inst_27092);
(statearr_27131[(8)] = inst_27093);
return statearr_27131;
})();var statearr_27132_27160 = state_27128__$1;(statearr_27132_27160[(2)] = null);
(statearr_27132_27160[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (4)))
{var inst_27096 = (state_27128[(9)]);var inst_27096__$1 = (state_27128[(2)]);var inst_27097 = (inst_27096__$1 == null);var inst_27098 = cljs.core.not(inst_27097);var state_27128__$1 = (function (){var statearr_27133 = state_27128;(statearr_27133[(9)] = inst_27096__$1);
return statearr_27133;
})();if(inst_27098)
{var statearr_27134_27161 = state_27128__$1;(statearr_27134_27161[(1)] = (5));
} else
{var statearr_27135_27162 = state_27128__$1;(statearr_27135_27162[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (15)))
{var inst_27118 = (state_27128[(2)]);var state_27128__$1 = state_27128;var statearr_27136_27163 = state_27128__$1;(statearr_27136_27163[(2)] = inst_27118);
(statearr_27136_27163[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (13)))
{var state_27128__$1 = state_27128;var statearr_27137_27164 = state_27128__$1;(statearr_27137_27164[(2)] = null);
(statearr_27137_27164[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (6)))
{var inst_27093 = (state_27128[(8)]);var inst_27114 = (inst_27093 > (0));var state_27128__$1 = state_27128;if(cljs.core.truth_(inst_27114))
{var statearr_27138_27165 = state_27128__$1;(statearr_27138_27165[(1)] = (12));
} else
{var statearr_27139_27166 = state_27128__$1;(statearr_27139_27166[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (3)))
{var inst_27126 = (state_27128[(2)]);var state_27128__$1 = state_27128;return cljs.core.async.impl.ioc_helpers.return_chan(state_27128__$1,inst_27126);
} else
{if((state_val_27129 === (12)))
{var inst_27092 = (state_27128[(7)]);var inst_27116 = cljs.core.vec(inst_27092);var state_27128__$1 = state_27128;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27128__$1,(15),out,inst_27116);
} else
{if((state_val_27129 === (2)))
{var state_27128__$1 = state_27128;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27128__$1,(4),ch);
} else
{if((state_val_27129 === (11)))
{var inst_27108 = (state_27128[(2)]);var inst_27109 = (new Array(n));var inst_27092 = inst_27109;var inst_27093 = (0);var state_27128__$1 = (function (){var statearr_27140 = state_27128;(statearr_27140[(10)] = inst_27108);
(statearr_27140[(7)] = inst_27092);
(statearr_27140[(8)] = inst_27093);
return statearr_27140;
})();var statearr_27141_27167 = state_27128__$1;(statearr_27141_27167[(2)] = null);
(statearr_27141_27167[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (9)))
{var inst_27092 = (state_27128[(7)]);var inst_27106 = cljs.core.vec(inst_27092);var state_27128__$1 = state_27128;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27128__$1,(11),out,inst_27106);
} else
{if((state_val_27129 === (5)))
{var inst_27092 = (state_27128[(7)]);var inst_27096 = (state_27128[(9)]);var inst_27093 = (state_27128[(8)]);var inst_27101 = (state_27128[(11)]);var inst_27100 = (inst_27092[inst_27093] = inst_27096);var inst_27101__$1 = (inst_27093 + (1));var inst_27102 = (inst_27101__$1 < n);var state_27128__$1 = (function (){var statearr_27142 = state_27128;(statearr_27142[(12)] = inst_27100);
(statearr_27142[(11)] = inst_27101__$1);
return statearr_27142;
})();if(cljs.core.truth_(inst_27102))
{var statearr_27143_27168 = state_27128__$1;(statearr_27143_27168[(1)] = (8));
} else
{var statearr_27144_27169 = state_27128__$1;(statearr_27144_27169[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (14)))
{var inst_27121 = (state_27128[(2)]);var inst_27122 = cljs.core.async.close_BANG_(out);var state_27128__$1 = (function (){var statearr_27146 = state_27128;(statearr_27146[(13)] = inst_27121);
return statearr_27146;
})();var statearr_27147_27170 = state_27128__$1;(statearr_27147_27170[(2)] = inst_27122);
(statearr_27147_27170[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (10)))
{var inst_27112 = (state_27128[(2)]);var state_27128__$1 = state_27128;var statearr_27148_27171 = state_27128__$1;(statearr_27148_27171[(2)] = inst_27112);
(statearr_27148_27171[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27129 === (8)))
{var inst_27092 = (state_27128[(7)]);var inst_27101 = (state_27128[(11)]);var tmp27145 = inst_27092;var inst_27092__$1 = tmp27145;var inst_27093 = inst_27101;var state_27128__$1 = (function (){var statearr_27149 = state_27128;(statearr_27149[(7)] = inst_27092__$1);
(statearr_27149[(8)] = inst_27093);
return statearr_27149;
})();var statearr_27150_27172 = state_27128__$1;(statearr_27150_27172[(2)] = null);
(statearr_27150_27172[(1)] = (2));
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
});})(c__12292__auto___27158,out))
;return ((function (switch__12277__auto__,c__12292__auto___27158,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27154[(0)] = state_machine__12278__auto__);
(statearr_27154[(1)] = (1));
return statearr_27154;
});
var state_machine__12278__auto____1 = (function (state_27128){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27128);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27155){if((e27155 instanceof Object))
{var ex__12281__auto__ = e27155;var statearr_27156_27173 = state_27128;(statearr_27156_27173[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27128);
return cljs.core.constant$keyword$82;
} else
{throw e27155;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27174 = state_27128;
state_27128 = G__27174;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27128){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27158,out))
})();var state__12294__auto__ = (function (){var statearr_27157 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27158);
return statearr_27157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27158,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27322,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27322,out){
return (function (state_27291){var state_val_27292 = (state_27291[(1)]);if((state_val_27292 === (7)))
{var inst_27287 = (state_27291[(2)]);var state_27291__$1 = state_27291;var statearr_27293_27323 = state_27291__$1;(statearr_27293_27323[(2)] = inst_27287);
(statearr_27293_27323[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (1)))
{var inst_27250 = [];var inst_27251 = inst_27250;var inst_27252 = cljs.core.constant$keyword$97;var state_27291__$1 = (function (){var statearr_27294 = state_27291;(statearr_27294[(7)] = inst_27252);
(statearr_27294[(8)] = inst_27251);
return statearr_27294;
})();var statearr_27295_27324 = state_27291__$1;(statearr_27295_27324[(2)] = null);
(statearr_27295_27324[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (4)))
{var inst_27255 = (state_27291[(9)]);var inst_27255__$1 = (state_27291[(2)]);var inst_27256 = (inst_27255__$1 == null);var inst_27257 = cljs.core.not(inst_27256);var state_27291__$1 = (function (){var statearr_27296 = state_27291;(statearr_27296[(9)] = inst_27255__$1);
return statearr_27296;
})();if(inst_27257)
{var statearr_27297_27325 = state_27291__$1;(statearr_27297_27325[(1)] = (5));
} else
{var statearr_27298_27326 = state_27291__$1;(statearr_27298_27326[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (15)))
{var inst_27281 = (state_27291[(2)]);var state_27291__$1 = state_27291;var statearr_27299_27327 = state_27291__$1;(statearr_27299_27327[(2)] = inst_27281);
(statearr_27299_27327[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (13)))
{var state_27291__$1 = state_27291;var statearr_27300_27328 = state_27291__$1;(statearr_27300_27328[(2)] = null);
(statearr_27300_27328[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (6)))
{var inst_27251 = (state_27291[(8)]);var inst_27276 = inst_27251.length;var inst_27277 = (inst_27276 > (0));var state_27291__$1 = state_27291;if(cljs.core.truth_(inst_27277))
{var statearr_27301_27329 = state_27291__$1;(statearr_27301_27329[(1)] = (12));
} else
{var statearr_27302_27330 = state_27291__$1;(statearr_27302_27330[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (3)))
{var inst_27289 = (state_27291[(2)]);var state_27291__$1 = state_27291;return cljs.core.async.impl.ioc_helpers.return_chan(state_27291__$1,inst_27289);
} else
{if((state_val_27292 === (12)))
{var inst_27251 = (state_27291[(8)]);var inst_27279 = cljs.core.vec(inst_27251);var state_27291__$1 = state_27291;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27291__$1,(15),out,inst_27279);
} else
{if((state_val_27292 === (2)))
{var state_27291__$1 = state_27291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27291__$1,(4),ch);
} else
{if((state_val_27292 === (11)))
{var inst_27255 = (state_27291[(9)]);var inst_27259 = (state_27291[(10)]);var inst_27269 = (state_27291[(2)]);var inst_27270 = [];var inst_27271 = inst_27270.push(inst_27255);var inst_27251 = inst_27270;var inst_27252 = inst_27259;var state_27291__$1 = (function (){var statearr_27303 = state_27291;(statearr_27303[(7)] = inst_27252);
(statearr_27303[(11)] = inst_27269);
(statearr_27303[(12)] = inst_27271);
(statearr_27303[(8)] = inst_27251);
return statearr_27303;
})();var statearr_27304_27331 = state_27291__$1;(statearr_27304_27331[(2)] = null);
(statearr_27304_27331[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (9)))
{var inst_27251 = (state_27291[(8)]);var inst_27267 = cljs.core.vec(inst_27251);var state_27291__$1 = state_27291;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27291__$1,(11),out,inst_27267);
} else
{if((state_val_27292 === (5)))
{var inst_27255 = (state_27291[(9)]);var inst_27259 = (state_27291[(10)]);var inst_27252 = (state_27291[(7)]);var inst_27259__$1 = (function (){var G__27305 = inst_27255;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27305) : f.call(null,G__27305));
})();var inst_27260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27259__$1,inst_27252);var inst_27261 = cljs.core.keyword_identical_QMARK_(inst_27252,cljs.core.constant$keyword$97);var inst_27262 = (inst_27260) || (inst_27261);var state_27291__$1 = (function (){var statearr_27306 = state_27291;(statearr_27306[(10)] = inst_27259__$1);
return statearr_27306;
})();if(cljs.core.truth_(inst_27262))
{var statearr_27307_27332 = state_27291__$1;(statearr_27307_27332[(1)] = (8));
} else
{var statearr_27308_27333 = state_27291__$1;(statearr_27308_27333[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (14)))
{var inst_27284 = (state_27291[(2)]);var inst_27285 = cljs.core.async.close_BANG_(out);var state_27291__$1 = (function (){var statearr_27310 = state_27291;(statearr_27310[(13)] = inst_27284);
return statearr_27310;
})();var statearr_27311_27334 = state_27291__$1;(statearr_27311_27334[(2)] = inst_27285);
(statearr_27311_27334[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (10)))
{var inst_27274 = (state_27291[(2)]);var state_27291__$1 = state_27291;var statearr_27312_27335 = state_27291__$1;(statearr_27312_27335[(2)] = inst_27274);
(statearr_27312_27335[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27292 === (8)))
{var inst_27255 = (state_27291[(9)]);var inst_27259 = (state_27291[(10)]);var inst_27251 = (state_27291[(8)]);var inst_27264 = inst_27251.push(inst_27255);var tmp27309 = inst_27251;var inst_27251__$1 = tmp27309;var inst_27252 = inst_27259;var state_27291__$1 = (function (){var statearr_27313 = state_27291;(statearr_27313[(14)] = inst_27264);
(statearr_27313[(7)] = inst_27252);
(statearr_27313[(8)] = inst_27251__$1);
return statearr_27313;
})();var statearr_27314_27336 = state_27291__$1;(statearr_27314_27336[(2)] = null);
(statearr_27314_27336[(1)] = (2));
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
});})(c__12292__auto___27322,out))
;return ((function (switch__12277__auto__,c__12292__auto___27322,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27318[(0)] = state_machine__12278__auto__);
(statearr_27318[(1)] = (1));
return statearr_27318;
});
var state_machine__12278__auto____1 = (function (state_27291){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27291);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27319){if((e27319 instanceof Object))
{var ex__12281__auto__ = e27319;var statearr_27320_27337 = state_27291;(statearr_27320_27337[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27291);
return cljs.core.constant$keyword$82;
} else
{throw e27319;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27338 = state_27291;
state_27291 = G__27338;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27291){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27322,out))
})();var state__12294__auto__ = (function (){var statearr_27321 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27322);
return statearr_27321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27322,out))
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
