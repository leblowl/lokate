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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24083 = (function (f,fn_handler,meta24084){
this.f = f;
this.fn_handler = fn_handler;
this.meta24084 = meta24084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24083.cljs$lang$type = true;
cljs.core.async.t24083.cljs$lang$ctorStr = "cljs.core.async/t24083";
cljs.core.async.t24083.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24083");
});
cljs.core.async.t24083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24085){var self__ = this;
var _24085__$1 = this;return self__.meta24084;
});
cljs.core.async.t24083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24085,meta24084__$1){var self__ = this;
var _24085__$1 = this;return (new cljs.core.async.t24083(self__.f,self__.fn_handler,meta24084__$1));
});
cljs.core.async.__GT_t24083 = (function __GT_t24083(f__$1,fn_handler__$1,meta24084){return (new cljs.core.async.t24083(f__$1,fn_handler__$1,meta24084));
});
}
return (new cljs.core.async.t24083(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24087 = buff;if(G__24087)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__24087.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24087.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24087);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24087);
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
{var val_24104 = (function (){var G__24101 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24101) : cljs.core.deref.call(null,G__24101));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24102_24105 = val_24104;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24102_24105) : fn1.call(null,G__24102_24105));
} else
{cljs.core.async.impl.dispatch.run(((function (val_24104,ret){
return (function (){var G__24103 = val_24104;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24103) : fn1.call(null,G__24103));
});})(val_24104,ret))
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
{var ret = temp__4124__auto__;var G__24114 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24114) : cljs.core.deref.call(null,G__24114));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24115 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24115) : cljs.core.deref.call(null,G__24115));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24116_24118 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24116_24118) : fn1.call(null,G__24116_24118));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24117 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24117) : fn1.call(null,G__24117));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___24119 = n;var x_24120 = (0);while(true){
if((x_24120 < n__4510__auto___24119))
{(a[x_24120] = (0));
{
var G__24121 = (x_24120 + (1));
x_24120 = G__24121;
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
var G__24122 = (i + (1));
i = G__24122;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24130 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24130) : cljs.core.atom.call(null,G__24130));
})();if(typeof cljs.core.async.t24131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24131 = (function (flag,alt_flag,meta24132){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24132 = meta24132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24131.cljs$lang$type = true;
cljs.core.async.t24131.cljs$lang$ctorStr = "cljs.core.async/t24131";
cljs.core.async.t24131.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24131");
});})(flag))
;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24134 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24134) : cljs.core.deref.call(null,G__24134));
});})(flag))
;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24135_24137 = self__.flag;var G__24136_24138 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24135_24137,G__24136_24138) : cljs.core.reset_BANG_.call(null,G__24135_24137,G__24136_24138));
return true;
});})(flag))
;
cljs.core.async.t24131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24133){var self__ = this;
var _24133__$1 = this;return self__.meta24132;
});})(flag))
;
cljs.core.async.t24131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24133,meta24132__$1){var self__ = this;
var _24133__$1 = this;return (new cljs.core.async.t24131(self__.flag,self__.alt_flag,meta24132__$1));
});})(flag))
;
cljs.core.async.__GT_t24131 = ((function (flag){
return (function __GT_t24131(flag__$1,alt_flag__$1,meta24132){return (new cljs.core.async.t24131(flag__$1,alt_flag__$1,meta24132));
});})(flag))
;
}
return (new cljs.core.async.t24131(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24142 = (function (cb,flag,alt_handler,meta24143){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24143 = meta24143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24142.cljs$lang$type = true;
cljs.core.async.t24142.cljs$lang$ctorStr = "cljs.core.async/t24142";
cljs.core.async.t24142.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24142");
});
cljs.core.async.t24142.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24144){var self__ = this;
var _24144__$1 = this;return self__.meta24143;
});
cljs.core.async.t24142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24144,meta24143__$1){var self__ = this;
var _24144__$1 = this;return (new cljs.core.async.t24142(self__.cb,self__.flag,self__.alt_handler,meta24143__$1));
});
cljs.core.async.__GT_t24142 = (function __GT_t24142(cb__$1,flag__$1,alt_handler__$1,meta24143){return (new cljs.core.async.t24142(cb__$1,flag__$1,alt_handler__$1,meta24143));
});
}
return (new cljs.core.async.t24142(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24152 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24152) : port.call(null,G__24152));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24153 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24153) : port.call(null,G__24153));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24145_SHARP_){var G__24154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24145_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24154) : fret.call(null,G__24154));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24146_SHARP_){var G__24155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24146_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24155) : fret.call(null,G__24155));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24156 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24156) : cljs.core.deref.call(null,G__24156));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24157 = (i + (1));
i = G__24157;
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
var alts_BANG___delegate = function (ports,p__24158){var map__24160 = p__24158;var map__24160__$1 = ((cljs.core.seq_QMARK_(map__24160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24160):map__24160);var opts = map__24160__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24158 = null;if (arguments.length > 1) {
  p__24158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24158);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24161){
var ports = cljs.core.first(arglist__24161);
var p__24158 = cljs.core.rest(arglist__24161);
return alts_BANG___delegate(ports,p__24158);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12292__auto___24259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24259){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24259){
return (function (state_24235){var state_val_24236 = (state_24235[(1)]);if((state_val_24236 === (7)))
{var inst_24231 = (state_24235[(2)]);var state_24235__$1 = state_24235;var statearr_24237_24260 = state_24235__$1;(statearr_24237_24260[(2)] = inst_24231);
(statearr_24237_24260[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (1)))
{var state_24235__$1 = state_24235;var statearr_24238_24261 = state_24235__$1;(statearr_24238_24261[(2)] = null);
(statearr_24238_24261[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (4)))
{var inst_24214 = (state_24235[(7)]);var inst_24214__$1 = (state_24235[(2)]);var inst_24215 = (inst_24214__$1 == null);var state_24235__$1 = (function (){var statearr_24239 = state_24235;(statearr_24239[(7)] = inst_24214__$1);
return statearr_24239;
})();if(cljs.core.truth_(inst_24215))
{var statearr_24240_24262 = state_24235__$1;(statearr_24240_24262[(1)] = (5));
} else
{var statearr_24241_24263 = state_24235__$1;(statearr_24241_24263[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (13)))
{var state_24235__$1 = state_24235;var statearr_24242_24264 = state_24235__$1;(statearr_24242_24264[(2)] = null);
(statearr_24242_24264[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (6)))
{var inst_24214 = (state_24235[(7)]);var state_24235__$1 = state_24235;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24235__$1,(11),to,inst_24214);
} else
{if((state_val_24236 === (3)))
{var inst_24233 = (state_24235[(2)]);var state_24235__$1 = state_24235;return cljs.core.async.impl.ioc_helpers.return_chan(state_24235__$1,inst_24233);
} else
{if((state_val_24236 === (12)))
{var state_24235__$1 = state_24235;var statearr_24243_24265 = state_24235__$1;(statearr_24243_24265[(2)] = null);
(statearr_24243_24265[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (2)))
{var state_24235__$1 = state_24235;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24235__$1,(4),from);
} else
{if((state_val_24236 === (11)))
{var inst_24224 = (state_24235[(2)]);var state_24235__$1 = state_24235;if(cljs.core.truth_(inst_24224))
{var statearr_24244_24266 = state_24235__$1;(statearr_24244_24266[(1)] = (12));
} else
{var statearr_24245_24267 = state_24235__$1;(statearr_24245_24267[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (9)))
{var state_24235__$1 = state_24235;var statearr_24246_24268 = state_24235__$1;(statearr_24246_24268[(2)] = null);
(statearr_24246_24268[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (5)))
{var state_24235__$1 = state_24235;if(cljs.core.truth_(close_QMARK_))
{var statearr_24247_24269 = state_24235__$1;(statearr_24247_24269[(1)] = (8));
} else
{var statearr_24248_24270 = state_24235__$1;(statearr_24248_24270[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (14)))
{var inst_24229 = (state_24235[(2)]);var state_24235__$1 = state_24235;var statearr_24249_24271 = state_24235__$1;(statearr_24249_24271[(2)] = inst_24229);
(statearr_24249_24271[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (10)))
{var inst_24221 = (state_24235[(2)]);var state_24235__$1 = state_24235;var statearr_24250_24272 = state_24235__$1;(statearr_24250_24272[(2)] = inst_24221);
(statearr_24250_24272[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24236 === (8)))
{var inst_24218 = cljs.core.async.close_BANG_(to);var state_24235__$1 = state_24235;var statearr_24251_24273 = state_24235__$1;(statearr_24251_24273[(2)] = inst_24218);
(statearr_24251_24273[(1)] = (10));
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
});})(c__12292__auto___24259))
;return ((function (switch__12277__auto__,c__12292__auto___24259){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24255 = [null,null,null,null,null,null,null,null];(statearr_24255[(0)] = state_machine__12278__auto__);
(statearr_24255[(1)] = (1));
return statearr_24255;
});
var state_machine__12278__auto____1 = (function (state_24235){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24235);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24256){if((e24256 instanceof Object))
{var ex__12281__auto__ = e24256;var statearr_24257_24274 = state_24235;(statearr_24257_24274[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24235);
return cljs.core.constant$keyword$82;
} else
{throw e24256;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24275 = state_24235;
state_24235 = G__24275;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24235){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24259))
})();var state__12294__auto__ = (function (){var statearr_24258 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24259);
return statearr_24258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24259))
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
return (function (p__24461){var vec__24462 = p__24461;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24462,(1),null);var job = vec__24462;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__12292__auto___24646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results){
return (function (state_24467){var state_val_24468 = (state_24467[(1)]);if((state_val_24468 === (2)))
{var inst_24464 = (state_24467[(2)]);var inst_24465 = cljs.core.async.close_BANG_(res);var state_24467__$1 = (function (){var statearr_24469 = state_24467;(statearr_24469[(7)] = inst_24464);
return statearr_24469;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24467__$1,inst_24465);
} else
{if((state_val_24468 === (1)))
{var state_24467__$1 = state_24467;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24467__$1,(2),res,v);
} else
{return null;
}
}
});})(c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results))
;return ((function (switch__12277__auto__,c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24473 = [null,null,null,null,null,null,null,null];(statearr_24473[(0)] = state_machine__12278__auto__);
(statearr_24473[(1)] = (1));
return statearr_24473;
});
var state_machine__12278__auto____1 = (function (state_24467){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24467);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24474){if((e24474 instanceof Object))
{var ex__12281__auto__ = e24474;var statearr_24475_24647 = state_24467;(statearr_24475_24647[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24467);
return cljs.core.constant$keyword$82;
} else
{throw e24474;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24648 = state_24467;
state_24467 = G__24648;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24467){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results))
})();var state__12294__auto__ = (function (){var statearr_24476 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24646);
return statearr_24476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24646,res,vec__24462,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24477){var vec__24478 = p__24477;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24478,(1),null);var job = vec__24478;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__24479_24649 = v;var G__24480_24650 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24479_24649,G__24480_24650) : xf.call(null,G__24479_24649,G__24480_24650));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___24651 = n;var __24652 = (0);while(true){
if((__24652 < n__4510__auto___24651))
{var G__24481_24653 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24481_24653) {
case "async":
var c__12292__auto___24655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24652,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24652,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function (state_24494){var state_val_24495 = (state_24494[(1)]);if((state_val_24495 === (7)))
{var inst_24490 = (state_24494[(2)]);var state_24494__$1 = state_24494;var statearr_24496_24656 = state_24494__$1;(statearr_24496_24656[(2)] = inst_24490);
(statearr_24496_24656[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24495 === (6)))
{var state_24494__$1 = state_24494;var statearr_24497_24657 = state_24494__$1;(statearr_24497_24657[(2)] = null);
(statearr_24497_24657[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24495 === (5)))
{var state_24494__$1 = state_24494;var statearr_24498_24658 = state_24494__$1;(statearr_24498_24658[(2)] = null);
(statearr_24498_24658[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24495 === (4)))
{var inst_24484 = (state_24494[(2)]);var inst_24485 = async(inst_24484);var state_24494__$1 = state_24494;if(cljs.core.truth_(inst_24485))
{var statearr_24499_24659 = state_24494__$1;(statearr_24499_24659[(1)] = (5));
} else
{var statearr_24500_24660 = state_24494__$1;(statearr_24500_24660[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24495 === (3)))
{var inst_24492 = (state_24494[(2)]);var state_24494__$1 = state_24494;return cljs.core.async.impl.ioc_helpers.return_chan(state_24494__$1,inst_24492);
} else
{if((state_val_24495 === (2)))
{var state_24494__$1 = state_24494;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24494__$1,(4),jobs);
} else
{if((state_val_24495 === (1)))
{var state_24494__$1 = state_24494;var statearr_24501_24661 = state_24494__$1;(statearr_24501_24661[(2)] = null);
(statearr_24501_24661[(1)] = (2));
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
});})(__24652,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
;return ((function (__24652,switch__12277__auto__,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24505 = [null,null,null,null,null,null,null];(statearr_24505[(0)] = state_machine__12278__auto__);
(statearr_24505[(1)] = (1));
return statearr_24505;
});
var state_machine__12278__auto____1 = (function (state_24494){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24494);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24506){if((e24506 instanceof Object))
{var ex__12281__auto__ = e24506;var statearr_24507_24662 = state_24494;(statearr_24507_24662[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24494);
return cljs.core.constant$keyword$82;
} else
{throw e24506;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24663 = state_24494;
state_24494 = G__24663;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24494){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24652,switch__12277__auto__,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24508 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24655);
return statearr_24508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24652,c__12292__auto___24655,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
);

break;
case "compute":
var c__12292__auto___24664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__24652,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (__24652,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function (state_24521){var state_val_24522 = (state_24521[(1)]);if((state_val_24522 === (7)))
{var inst_24517 = (state_24521[(2)]);var state_24521__$1 = state_24521;var statearr_24523_24665 = state_24521__$1;(statearr_24523_24665[(2)] = inst_24517);
(statearr_24523_24665[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24522 === (6)))
{var state_24521__$1 = state_24521;var statearr_24524_24666 = state_24521__$1;(statearr_24524_24666[(2)] = null);
(statearr_24524_24666[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24522 === (5)))
{var state_24521__$1 = state_24521;var statearr_24525_24667 = state_24521__$1;(statearr_24525_24667[(2)] = null);
(statearr_24525_24667[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24522 === (4)))
{var inst_24511 = (state_24521[(2)]);var inst_24512 = process(inst_24511);var state_24521__$1 = state_24521;if(cljs.core.truth_(inst_24512))
{var statearr_24526_24668 = state_24521__$1;(statearr_24526_24668[(1)] = (5));
} else
{var statearr_24527_24669 = state_24521__$1;(statearr_24527_24669[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24522 === (3)))
{var inst_24519 = (state_24521[(2)]);var state_24521__$1 = state_24521;return cljs.core.async.impl.ioc_helpers.return_chan(state_24521__$1,inst_24519);
} else
{if((state_val_24522 === (2)))
{var state_24521__$1 = state_24521;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24521__$1,(4),jobs);
} else
{if((state_val_24522 === (1)))
{var state_24521__$1 = state_24521;var statearr_24528_24670 = state_24521__$1;(statearr_24528_24670[(2)] = null);
(statearr_24528_24670[(1)] = (2));
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
});})(__24652,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
;return ((function (__24652,switch__12277__auto__,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24532 = [null,null,null,null,null,null,null];(statearr_24532[(0)] = state_machine__12278__auto__);
(statearr_24532[(1)] = (1));
return statearr_24532;
});
var state_machine__12278__auto____1 = (function (state_24521){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24521);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24533){if((e24533 instanceof Object))
{var ex__12281__auto__ = e24533;var statearr_24534_24671 = state_24521;(statearr_24534_24671[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24521);
return cljs.core.constant$keyword$82;
} else
{throw e24533;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24672 = state_24521;
state_24521 = G__24672;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24521){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(__24652,switch__12277__auto__,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24535 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24664);
return statearr_24535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(__24652,c__12292__auto___24664,G__24481_24653,n__4510__auto___24651,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24673 = (__24652 + (1));
__24652 = G__24673;
continue;
}
} else
{}
break;
}
var c__12292__auto___24674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24674,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24674,jobs,results,process,async){
return (function (state_24557){var state_val_24558 = (state_24557[(1)]);if((state_val_24558 === (9)))
{var inst_24550 = (state_24557[(2)]);var state_24557__$1 = (function (){var statearr_24559 = state_24557;(statearr_24559[(7)] = inst_24550);
return statearr_24559;
})();var statearr_24560_24675 = state_24557__$1;(statearr_24560_24675[(2)] = null);
(statearr_24560_24675[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24558 === (8)))
{var inst_24543 = (state_24557[(8)]);var inst_24548 = (state_24557[(2)]);var state_24557__$1 = (function (){var statearr_24561 = state_24557;(statearr_24561[(9)] = inst_24548);
return statearr_24561;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24557__$1,(9),results,inst_24543);
} else
{if((state_val_24558 === (7)))
{var inst_24553 = (state_24557[(2)]);var state_24557__$1 = state_24557;var statearr_24562_24676 = state_24557__$1;(statearr_24562_24676[(2)] = inst_24553);
(statearr_24562_24676[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24558 === (6)))
{var inst_24538 = (state_24557[(10)]);var inst_24543 = (state_24557[(8)]);var inst_24543__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_24544 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24545 = [inst_24538,inst_24543__$1];var inst_24546 = (new cljs.core.PersistentVector(null,2,(5),inst_24544,inst_24545,null));var state_24557__$1 = (function (){var statearr_24563 = state_24557;(statearr_24563[(8)] = inst_24543__$1);
return statearr_24563;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24557__$1,(8),jobs,inst_24546);
} else
{if((state_val_24558 === (5)))
{var inst_24541 = cljs.core.async.close_BANG_(jobs);var state_24557__$1 = state_24557;var statearr_24564_24677 = state_24557__$1;(statearr_24564_24677[(2)] = inst_24541);
(statearr_24564_24677[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24558 === (4)))
{var inst_24538 = (state_24557[(10)]);var inst_24538__$1 = (state_24557[(2)]);var inst_24539 = (inst_24538__$1 == null);var state_24557__$1 = (function (){var statearr_24565 = state_24557;(statearr_24565[(10)] = inst_24538__$1);
return statearr_24565;
})();if(cljs.core.truth_(inst_24539))
{var statearr_24566_24678 = state_24557__$1;(statearr_24566_24678[(1)] = (5));
} else
{var statearr_24567_24679 = state_24557__$1;(statearr_24567_24679[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24558 === (3)))
{var inst_24555 = (state_24557[(2)]);var state_24557__$1 = state_24557;return cljs.core.async.impl.ioc_helpers.return_chan(state_24557__$1,inst_24555);
} else
{if((state_val_24558 === (2)))
{var state_24557__$1 = state_24557;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24557__$1,(4),from);
} else
{if((state_val_24558 === (1)))
{var state_24557__$1 = state_24557;var statearr_24568_24680 = state_24557__$1;(statearr_24568_24680[(2)] = null);
(statearr_24568_24680[(1)] = (2));
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
});})(c__12292__auto___24674,jobs,results,process,async))
;return ((function (switch__12277__auto__,c__12292__auto___24674,jobs,results,process,async){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24572 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24572[(0)] = state_machine__12278__auto__);
(statearr_24572[(1)] = (1));
return statearr_24572;
});
var state_machine__12278__auto____1 = (function (state_24557){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24557);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24573){if((e24573 instanceof Object))
{var ex__12281__auto__ = e24573;var statearr_24574_24681 = state_24557;(statearr_24574_24681[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24557);
return cljs.core.constant$keyword$82;
} else
{throw e24573;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24682 = state_24557;
state_24557 = G__24682;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24557){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24674,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24575 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24674);
return statearr_24575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24674,jobs,results,process,async))
);
var c__12292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto__,jobs,results,process,async){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto__,jobs,results,process,async){
return (function (state_24613){var state_val_24614 = (state_24613[(1)]);if((state_val_24614 === (7)))
{var inst_24609 = (state_24613[(2)]);var state_24613__$1 = state_24613;var statearr_24615_24683 = state_24613__$1;(statearr_24615_24683[(2)] = inst_24609);
(statearr_24615_24683[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (20)))
{var state_24613__$1 = state_24613;var statearr_24616_24684 = state_24613__$1;(statearr_24616_24684[(2)] = null);
(statearr_24616_24684[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (1)))
{var state_24613__$1 = state_24613;var statearr_24617_24685 = state_24613__$1;(statearr_24617_24685[(2)] = null);
(statearr_24617_24685[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (4)))
{var inst_24578 = (state_24613[(7)]);var inst_24578__$1 = (state_24613[(2)]);var inst_24579 = (inst_24578__$1 == null);var state_24613__$1 = (function (){var statearr_24618 = state_24613;(statearr_24618[(7)] = inst_24578__$1);
return statearr_24618;
})();if(cljs.core.truth_(inst_24579))
{var statearr_24619_24686 = state_24613__$1;(statearr_24619_24686[(1)] = (5));
} else
{var statearr_24620_24687 = state_24613__$1;(statearr_24620_24687[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (15)))
{var inst_24591 = (state_24613[(8)]);var state_24613__$1 = state_24613;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24613__$1,(18),to,inst_24591);
} else
{if((state_val_24614 === (21)))
{var inst_24604 = (state_24613[(2)]);var state_24613__$1 = state_24613;var statearr_24621_24688 = state_24613__$1;(statearr_24621_24688[(2)] = inst_24604);
(statearr_24621_24688[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (13)))
{var inst_24606 = (state_24613[(2)]);var state_24613__$1 = (function (){var statearr_24622 = state_24613;(statearr_24622[(9)] = inst_24606);
return statearr_24622;
})();var statearr_24623_24689 = state_24613__$1;(statearr_24623_24689[(2)] = null);
(statearr_24623_24689[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (6)))
{var inst_24578 = (state_24613[(7)]);var state_24613__$1 = state_24613;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24613__$1,(11),inst_24578);
} else
{if((state_val_24614 === (17)))
{var inst_24599 = (state_24613[(2)]);var state_24613__$1 = state_24613;if(cljs.core.truth_(inst_24599))
{var statearr_24624_24690 = state_24613__$1;(statearr_24624_24690[(1)] = (19));
} else
{var statearr_24625_24691 = state_24613__$1;(statearr_24625_24691[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (3)))
{var inst_24611 = (state_24613[(2)]);var state_24613__$1 = state_24613;return cljs.core.async.impl.ioc_helpers.return_chan(state_24613__$1,inst_24611);
} else
{if((state_val_24614 === (12)))
{var inst_24588 = (state_24613[(10)]);var state_24613__$1 = state_24613;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24613__$1,(14),inst_24588);
} else
{if((state_val_24614 === (2)))
{var state_24613__$1 = state_24613;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24613__$1,(4),results);
} else
{if((state_val_24614 === (19)))
{var state_24613__$1 = state_24613;var statearr_24626_24692 = state_24613__$1;(statearr_24626_24692[(2)] = null);
(statearr_24626_24692[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (11)))
{var inst_24588 = (state_24613[(2)]);var state_24613__$1 = (function (){var statearr_24627 = state_24613;(statearr_24627[(10)] = inst_24588);
return statearr_24627;
})();var statearr_24628_24693 = state_24613__$1;(statearr_24628_24693[(2)] = null);
(statearr_24628_24693[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (9)))
{var state_24613__$1 = state_24613;var statearr_24629_24694 = state_24613__$1;(statearr_24629_24694[(2)] = null);
(statearr_24629_24694[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (5)))
{var state_24613__$1 = state_24613;if(cljs.core.truth_(close_QMARK_))
{var statearr_24630_24695 = state_24613__$1;(statearr_24630_24695[(1)] = (8));
} else
{var statearr_24631_24696 = state_24613__$1;(statearr_24631_24696[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (14)))
{var inst_24591 = (state_24613[(8)]);var inst_24593 = (state_24613[(11)]);var inst_24591__$1 = (state_24613[(2)]);var inst_24592 = (inst_24591__$1 == null);var inst_24593__$1 = cljs.core.not(inst_24592);var state_24613__$1 = (function (){var statearr_24632 = state_24613;(statearr_24632[(8)] = inst_24591__$1);
(statearr_24632[(11)] = inst_24593__$1);
return statearr_24632;
})();if(inst_24593__$1)
{var statearr_24633_24697 = state_24613__$1;(statearr_24633_24697[(1)] = (15));
} else
{var statearr_24634_24698 = state_24613__$1;(statearr_24634_24698[(1)] = (16));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (16)))
{var inst_24593 = (state_24613[(11)]);var state_24613__$1 = state_24613;var statearr_24635_24699 = state_24613__$1;(statearr_24635_24699[(2)] = inst_24593);
(statearr_24635_24699[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (10)))
{var inst_24585 = (state_24613[(2)]);var state_24613__$1 = state_24613;var statearr_24636_24700 = state_24613__$1;(statearr_24636_24700[(2)] = inst_24585);
(statearr_24636_24700[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (18)))
{var inst_24596 = (state_24613[(2)]);var state_24613__$1 = state_24613;var statearr_24637_24701 = state_24613__$1;(statearr_24637_24701[(2)] = inst_24596);
(statearr_24637_24701[(1)] = (17));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24614 === (8)))
{var inst_24582 = cljs.core.async.close_BANG_(to);var state_24613__$1 = state_24613;var statearr_24638_24702 = state_24613__$1;(statearr_24638_24702[(2)] = inst_24582);
(statearr_24638_24702[(1)] = (10));
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
var state_machine__12278__auto____0 = (function (){var statearr_24642 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24642[(0)] = state_machine__12278__auto__);
(statearr_24642[(1)] = (1));
return statearr_24642;
});
var state_machine__12278__auto____1 = (function (state_24613){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24613);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24643){if((e24643 instanceof Object))
{var ex__12281__auto__ = e24643;var statearr_24644_24703 = state_24613;(statearr_24644_24703[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24613);
return cljs.core.constant$keyword$82;
} else
{throw e24643;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24704 = state_24613;
state_24613 = G__24704;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24613){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__,jobs,results,process,async))
})();var state__12294__auto__ = (function (){var statearr_24645 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_24645;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12292__auto___24827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___24827,tc,fc){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___24827,tc,fc){
return (function (state_24801){var state_val_24802 = (state_24801[(1)]);if((state_val_24802 === (7)))
{var inst_24797 = (state_24801[(2)]);var state_24801__$1 = state_24801;var statearr_24803_24828 = state_24801__$1;(statearr_24803_24828[(2)] = inst_24797);
(statearr_24803_24828[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (1)))
{var state_24801__$1 = state_24801;var statearr_24804_24829 = state_24801__$1;(statearr_24804_24829[(2)] = null);
(statearr_24804_24829[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (4)))
{var inst_24778 = (state_24801[(7)]);var inst_24778__$1 = (state_24801[(2)]);var inst_24779 = (inst_24778__$1 == null);var state_24801__$1 = (function (){var statearr_24805 = state_24801;(statearr_24805[(7)] = inst_24778__$1);
return statearr_24805;
})();if(cljs.core.truth_(inst_24779))
{var statearr_24806_24830 = state_24801__$1;(statearr_24806_24830[(1)] = (5));
} else
{var statearr_24807_24831 = state_24801__$1;(statearr_24807_24831[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (13)))
{var state_24801__$1 = state_24801;var statearr_24808_24832 = state_24801__$1;(statearr_24808_24832[(2)] = null);
(statearr_24808_24832[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (6)))
{var inst_24778 = (state_24801[(7)]);var inst_24784 = (function (){var G__24809 = inst_24778;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24809) : p.call(null,G__24809));
})();var state_24801__$1 = state_24801;if(cljs.core.truth_(inst_24784))
{var statearr_24810_24833 = state_24801__$1;(statearr_24810_24833[(1)] = (9));
} else
{var statearr_24811_24834 = state_24801__$1;(statearr_24811_24834[(1)] = (10));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (3)))
{var inst_24799 = (state_24801[(2)]);var state_24801__$1 = state_24801;return cljs.core.async.impl.ioc_helpers.return_chan(state_24801__$1,inst_24799);
} else
{if((state_val_24802 === (12)))
{var state_24801__$1 = state_24801;var statearr_24812_24835 = state_24801__$1;(statearr_24812_24835[(2)] = null);
(statearr_24812_24835[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (2)))
{var state_24801__$1 = state_24801;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24801__$1,(4),ch);
} else
{if((state_val_24802 === (11)))
{var inst_24778 = (state_24801[(7)]);var inst_24788 = (state_24801[(2)]);var state_24801__$1 = state_24801;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24801__$1,(8),inst_24788,inst_24778);
} else
{if((state_val_24802 === (9)))
{var state_24801__$1 = state_24801;var statearr_24813_24836 = state_24801__$1;(statearr_24813_24836[(2)] = tc);
(statearr_24813_24836[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (5)))
{var inst_24781 = cljs.core.async.close_BANG_(tc);var inst_24782 = cljs.core.async.close_BANG_(fc);var state_24801__$1 = (function (){var statearr_24814 = state_24801;(statearr_24814[(8)] = inst_24781);
return statearr_24814;
})();var statearr_24815_24837 = state_24801__$1;(statearr_24815_24837[(2)] = inst_24782);
(statearr_24815_24837[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (14)))
{var inst_24795 = (state_24801[(2)]);var state_24801__$1 = state_24801;var statearr_24816_24838 = state_24801__$1;(statearr_24816_24838[(2)] = inst_24795);
(statearr_24816_24838[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (10)))
{var state_24801__$1 = state_24801;var statearr_24817_24839 = state_24801__$1;(statearr_24817_24839[(2)] = fc);
(statearr_24817_24839[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24802 === (8)))
{var inst_24790 = (state_24801[(2)]);var state_24801__$1 = state_24801;if(cljs.core.truth_(inst_24790))
{var statearr_24818_24840 = state_24801__$1;(statearr_24818_24840[(1)] = (12));
} else
{var statearr_24819_24841 = state_24801__$1;(statearr_24819_24841[(1)] = (13));
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
});})(c__12292__auto___24827,tc,fc))
;return ((function (switch__12277__auto__,c__12292__auto___24827,tc,fc){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_24823 = [null,null,null,null,null,null,null,null,null];(statearr_24823[(0)] = state_machine__12278__auto__);
(statearr_24823[(1)] = (1));
return statearr_24823;
});
var state_machine__12278__auto____1 = (function (state_24801){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24801);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24824){if((e24824 instanceof Object))
{var ex__12281__auto__ = e24824;var statearr_24825_24842 = state_24801;(statearr_24825_24842[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24801);
return cljs.core.constant$keyword$82;
} else
{throw e24824;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24843 = state_24801;
state_24801 = G__24843;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24801){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___24827,tc,fc))
})();var state__12294__auto__ = (function (){var statearr_24826 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_24826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___24827);
return statearr_24826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___24827,tc,fc))
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
return (function (state_24892){var state_val_24893 = (state_24892[(1)]);if((state_val_24893 === (7)))
{var inst_24888 = (state_24892[(2)]);var state_24892__$1 = state_24892;var statearr_24894_24912 = state_24892__$1;(statearr_24894_24912[(2)] = inst_24888);
(statearr_24894_24912[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24893 === (6)))
{var inst_24881 = (state_24892[(7)]);var inst_24878 = (state_24892[(8)]);var inst_24885 = (function (){var G__24895 = inst_24878;var G__24896 = inst_24881;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24895,G__24896) : f.call(null,G__24895,G__24896));
})();var inst_24878__$1 = inst_24885;var state_24892__$1 = (function (){var statearr_24897 = state_24892;(statearr_24897[(8)] = inst_24878__$1);
return statearr_24897;
})();var statearr_24898_24913 = state_24892__$1;(statearr_24898_24913[(2)] = null);
(statearr_24898_24913[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24893 === (5)))
{var inst_24878 = (state_24892[(8)]);var state_24892__$1 = state_24892;var statearr_24899_24914 = state_24892__$1;(statearr_24899_24914[(2)] = inst_24878);
(statearr_24899_24914[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24893 === (4)))
{var inst_24881 = (state_24892[(7)]);var inst_24881__$1 = (state_24892[(2)]);var inst_24882 = (inst_24881__$1 == null);var state_24892__$1 = (function (){var statearr_24900 = state_24892;(statearr_24900[(7)] = inst_24881__$1);
return statearr_24900;
})();if(cljs.core.truth_(inst_24882))
{var statearr_24901_24915 = state_24892__$1;(statearr_24901_24915[(1)] = (5));
} else
{var statearr_24902_24916 = state_24892__$1;(statearr_24902_24916[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24893 === (3)))
{var inst_24890 = (state_24892[(2)]);var state_24892__$1 = state_24892;return cljs.core.async.impl.ioc_helpers.return_chan(state_24892__$1,inst_24890);
} else
{if((state_val_24893 === (2)))
{var state_24892__$1 = state_24892;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24892__$1,(4),ch);
} else
{if((state_val_24893 === (1)))
{var inst_24878 = init;var state_24892__$1 = (function (){var statearr_24903 = state_24892;(statearr_24903[(8)] = inst_24878);
return statearr_24903;
})();var statearr_24904_24917 = state_24892__$1;(statearr_24904_24917[(2)] = null);
(statearr_24904_24917[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_24908 = [null,null,null,null,null,null,null,null,null];(statearr_24908[(0)] = state_machine__12278__auto__);
(statearr_24908[(1)] = (1));
return statearr_24908;
});
var state_machine__12278__auto____1 = (function (state_24892){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24892);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object))
{var ex__12281__auto__ = e24909;var statearr_24910_24918 = state_24892;(statearr_24910_24918[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24892);
return cljs.core.constant$keyword$82;
} else
{throw e24909;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__24919 = state_24892;
state_24892 = G__24919;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24892){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24892);
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
return (function (state_24996){var state_val_24997 = (state_24996[(1)]);if((state_val_24997 === (7)))
{var inst_24978 = (state_24996[(2)]);var state_24996__$1 = state_24996;var statearr_24998_25021 = state_24996__$1;(statearr_24998_25021[(2)] = inst_24978);
(statearr_24998_25021[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (1)))
{var inst_24972 = cljs.core.seq(coll);var inst_24973 = inst_24972;var state_24996__$1 = (function (){var statearr_24999 = state_24996;(statearr_24999[(7)] = inst_24973);
return statearr_24999;
})();var statearr_25000_25022 = state_24996__$1;(statearr_25000_25022[(2)] = null);
(statearr_25000_25022[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (4)))
{var inst_24973 = (state_24996[(7)]);var inst_24976 = cljs.core.first(inst_24973);var state_24996__$1 = state_24996;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24996__$1,(7),ch,inst_24976);
} else
{if((state_val_24997 === (13)))
{var inst_24990 = (state_24996[(2)]);var state_24996__$1 = state_24996;var statearr_25001_25023 = state_24996__$1;(statearr_25001_25023[(2)] = inst_24990);
(statearr_25001_25023[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (6)))
{var inst_24981 = (state_24996[(2)]);var state_24996__$1 = state_24996;if(cljs.core.truth_(inst_24981))
{var statearr_25002_25024 = state_24996__$1;(statearr_25002_25024[(1)] = (8));
} else
{var statearr_25003_25025 = state_24996__$1;(statearr_25003_25025[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (3)))
{var inst_24994 = (state_24996[(2)]);var state_24996__$1 = state_24996;return cljs.core.async.impl.ioc_helpers.return_chan(state_24996__$1,inst_24994);
} else
{if((state_val_24997 === (12)))
{var state_24996__$1 = state_24996;var statearr_25004_25026 = state_24996__$1;(statearr_25004_25026[(2)] = null);
(statearr_25004_25026[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (2)))
{var inst_24973 = (state_24996[(7)]);var state_24996__$1 = state_24996;if(cljs.core.truth_(inst_24973))
{var statearr_25005_25027 = state_24996__$1;(statearr_25005_25027[(1)] = (4));
} else
{var statearr_25006_25028 = state_24996__$1;(statearr_25006_25028[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (11)))
{var inst_24987 = cljs.core.async.close_BANG_(ch);var state_24996__$1 = state_24996;var statearr_25007_25029 = state_24996__$1;(statearr_25007_25029[(2)] = inst_24987);
(statearr_25007_25029[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (9)))
{var state_24996__$1 = state_24996;if(cljs.core.truth_(close_QMARK_))
{var statearr_25008_25030 = state_24996__$1;(statearr_25008_25030[(1)] = (11));
} else
{var statearr_25009_25031 = state_24996__$1;(statearr_25009_25031[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (5)))
{var inst_24973 = (state_24996[(7)]);var state_24996__$1 = state_24996;var statearr_25010_25032 = state_24996__$1;(statearr_25010_25032[(2)] = inst_24973);
(statearr_25010_25032[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (10)))
{var inst_24992 = (state_24996[(2)]);var state_24996__$1 = state_24996;var statearr_25011_25033 = state_24996__$1;(statearr_25011_25033[(2)] = inst_24992);
(statearr_25011_25033[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_24997 === (8)))
{var inst_24973 = (state_24996[(7)]);var inst_24983 = cljs.core.next(inst_24973);var inst_24973__$1 = inst_24983;var state_24996__$1 = (function (){var statearr_25012 = state_24996;(statearr_25012[(7)] = inst_24973__$1);
return statearr_25012;
})();var statearr_25013_25034 = state_24996__$1;(statearr_25013_25034[(2)] = null);
(statearr_25013_25034[(1)] = (2));
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
var state_machine__12278__auto____0 = (function (){var statearr_25017 = [null,null,null,null,null,null,null,null];(statearr_25017[(0)] = state_machine__12278__auto__);
(statearr_25017[(1)] = (1));
return statearr_25017;
});
var state_machine__12278__auto____1 = (function (state_24996){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_24996);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25018){if((e25018 instanceof Object))
{var ex__12281__auto__ = e25018;var statearr_25019_25035 = state_24996;(statearr_25019_25035[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24996);
return cljs.core.constant$keyword$82;
} else
{throw e25018;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25036 = state_24996;
state_24996 = G__25036;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_24996){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_24996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_25020 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_25020;
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
cljs.core.async.Mux = (function (){var obj25038 = {};return obj25038;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25042 = x__4277__auto__;return goog.typeOf(G__25042);
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
cljs.core.async.Mult = (function (){var obj25044 = {};return obj25044;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25048 = x__4277__auto__;return goog.typeOf(G__25048);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25052 = x__4277__auto__;return goog.typeOf(G__25052);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25056 = x__4277__auto__;return goog.typeOf(G__25056);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25286 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25286) : cljs.core.atom.call(null,G__25286));
})();var m = (function (){if(typeof cljs.core.async.t25287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25287 = (function (cs,ch,mult,meta25288){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25288 = meta25288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25287.cljs$lang$type = true;
cljs.core.async.t25287.cljs$lang$ctorStr = "cljs.core.async/t25287";
cljs.core.async.t25287.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25287");
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25287.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25290_25515 = self__.cs;var G__25291_25516 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25290_25515,G__25291_25516) : cljs.core.reset_BANG_.call(null,G__25290_25515,G__25291_25516));
return null;
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25289){var self__ = this;
var _25289__$1 = this;return self__.meta25288;
});})(cs))
;
cljs.core.async.t25287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25289,meta25288__$1){var self__ = this;
var _25289__$1 = this;return (new cljs.core.async.t25287(self__.cs,self__.ch,self__.mult,meta25288__$1));
});})(cs))
;
cljs.core.async.__GT_t25287 = ((function (cs){
return (function __GT_t25287(cs__$1,ch__$1,mult__$1,meta25288){return (new cljs.core.async.t25287(cs__$1,ch__$1,mult__$1,meta25288));
});})(cs))
;
}
return (new cljs.core.async.t25287(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25292 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25292) : cljs.core.atom.call(null,G__25292));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12292__auto___25517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25517,cs,m,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25517,cs,m,dchan,dctr,done){
return (function (state_25423){var state_val_25424 = (state_25423[(1)]);if((state_val_25424 === (7)))
{var inst_25419 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25425_25518 = state_25423__$1;(statearr_25425_25518[(2)] = inst_25419);
(statearr_25425_25518[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (20)))
{var inst_25324 = (state_25423[(7)]);var inst_25334 = cljs.core.first(inst_25324);var inst_25335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25334,(0),null);var inst_25336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25334,(1),null);var state_25423__$1 = (function (){var statearr_25426 = state_25423;(statearr_25426[(8)] = inst_25335);
return statearr_25426;
})();if(cljs.core.truth_(inst_25336))
{var statearr_25427_25519 = state_25423__$1;(statearr_25427_25519[(1)] = (22));
} else
{var statearr_25428_25520 = state_25423__$1;(statearr_25428_25520[(1)] = (23));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (27)))
{var inst_25364 = (state_25423[(9)]);var inst_25371 = (state_25423[(10)]);var inst_25366 = (state_25423[(11)]);var inst_25295 = (state_25423[(12)]);var inst_25371__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25364,inst_25366);var inst_25372 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25371__$1,inst_25295,done);var state_25423__$1 = (function (){var statearr_25429 = state_25423;(statearr_25429[(10)] = inst_25371__$1);
return statearr_25429;
})();if(cljs.core.truth_(inst_25372))
{var statearr_25430_25521 = state_25423__$1;(statearr_25430_25521[(1)] = (30));
} else
{var statearr_25431_25522 = state_25423__$1;(statearr_25431_25522[(1)] = (31));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (1)))
{var state_25423__$1 = state_25423;var statearr_25432_25523 = state_25423__$1;(statearr_25432_25523[(2)] = null);
(statearr_25432_25523[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (24)))
{var inst_25324 = (state_25423[(7)]);var inst_25341 = (state_25423[(2)]);var inst_25342 = cljs.core.next(inst_25324);var inst_25304 = inst_25342;var inst_25305 = null;var inst_25306 = (0);var inst_25307 = (0);var state_25423__$1 = (function (){var statearr_25433 = state_25423;(statearr_25433[(13)] = inst_25307);
(statearr_25433[(14)] = inst_25341);
(statearr_25433[(15)] = inst_25305);
(statearr_25433[(16)] = inst_25304);
(statearr_25433[(17)] = inst_25306);
return statearr_25433;
})();var statearr_25434_25524 = state_25423__$1;(statearr_25434_25524[(2)] = null);
(statearr_25434_25524[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (39)))
{var state_25423__$1 = state_25423;var statearr_25438_25525 = state_25423__$1;(statearr_25438_25525[(2)] = null);
(statearr_25438_25525[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (4)))
{var inst_25295 = (state_25423[(12)]);var inst_25295__$1 = (state_25423[(2)]);var inst_25296 = (inst_25295__$1 == null);var state_25423__$1 = (function (){var statearr_25439 = state_25423;(statearr_25439[(12)] = inst_25295__$1);
return statearr_25439;
})();if(cljs.core.truth_(inst_25296))
{var statearr_25440_25526 = state_25423__$1;(statearr_25440_25526[(1)] = (5));
} else
{var statearr_25441_25527 = state_25423__$1;(statearr_25441_25527[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (15)))
{var inst_25307 = (state_25423[(13)]);var inst_25305 = (state_25423[(15)]);var inst_25304 = (state_25423[(16)]);var inst_25306 = (state_25423[(17)]);var inst_25320 = (state_25423[(2)]);var inst_25321 = (inst_25307 + (1));var tmp25435 = inst_25305;var tmp25436 = inst_25304;var tmp25437 = inst_25306;var inst_25304__$1 = tmp25436;var inst_25305__$1 = tmp25435;var inst_25306__$1 = tmp25437;var inst_25307__$1 = inst_25321;var state_25423__$1 = (function (){var statearr_25442 = state_25423;(statearr_25442[(13)] = inst_25307__$1);
(statearr_25442[(18)] = inst_25320);
(statearr_25442[(15)] = inst_25305__$1);
(statearr_25442[(16)] = inst_25304__$1);
(statearr_25442[(17)] = inst_25306__$1);
return statearr_25442;
})();var statearr_25443_25528 = state_25423__$1;(statearr_25443_25528[(2)] = null);
(statearr_25443_25528[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (21)))
{var inst_25345 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25447_25529 = state_25423__$1;(statearr_25447_25529[(2)] = inst_25345);
(statearr_25447_25529[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (31)))
{var inst_25371 = (state_25423[(10)]);var inst_25375 = done(null);var inst_25376 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25371);var state_25423__$1 = (function (){var statearr_25448 = state_25423;(statearr_25448[(19)] = inst_25375);
return statearr_25448;
})();var statearr_25449_25530 = state_25423__$1;(statearr_25449_25530[(2)] = inst_25376);
(statearr_25449_25530[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (32)))
{var inst_25364 = (state_25423[(9)]);var inst_25363 = (state_25423[(20)]);var inst_25366 = (state_25423[(11)]);var inst_25365 = (state_25423[(21)]);var inst_25378 = (state_25423[(2)]);var inst_25379 = (inst_25366 + (1));var tmp25444 = inst_25364;var tmp25445 = inst_25363;var tmp25446 = inst_25365;var inst_25363__$1 = tmp25445;var inst_25364__$1 = tmp25444;var inst_25365__$1 = tmp25446;var inst_25366__$1 = inst_25379;var state_25423__$1 = (function (){var statearr_25450 = state_25423;(statearr_25450[(22)] = inst_25378);
(statearr_25450[(9)] = inst_25364__$1);
(statearr_25450[(20)] = inst_25363__$1);
(statearr_25450[(11)] = inst_25366__$1);
(statearr_25450[(21)] = inst_25365__$1);
return statearr_25450;
})();var statearr_25451_25531 = state_25423__$1;(statearr_25451_25531[(2)] = null);
(statearr_25451_25531[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (40)))
{var inst_25391 = (state_25423[(23)]);var inst_25395 = done(null);var inst_25396 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25391);var state_25423__$1 = (function (){var statearr_25452 = state_25423;(statearr_25452[(24)] = inst_25395);
return statearr_25452;
})();var statearr_25453_25532 = state_25423__$1;(statearr_25453_25532[(2)] = inst_25396);
(statearr_25453_25532[(1)] = (41));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (33)))
{var inst_25382 = (state_25423[(25)]);var inst_25384 = cljs.core.chunked_seq_QMARK_(inst_25382);var state_25423__$1 = state_25423;if(inst_25384)
{var statearr_25454_25533 = state_25423__$1;(statearr_25454_25533[(1)] = (36));
} else
{var statearr_25455_25534 = state_25423__$1;(statearr_25455_25534[(1)] = (37));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (13)))
{var inst_25314 = (state_25423[(26)]);var inst_25317 = cljs.core.async.close_BANG_(inst_25314);var state_25423__$1 = state_25423;var statearr_25456_25535 = state_25423__$1;(statearr_25456_25535[(2)] = inst_25317);
(statearr_25456_25535[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (22)))
{var inst_25335 = (state_25423[(8)]);var inst_25338 = cljs.core.async.close_BANG_(inst_25335);var state_25423__$1 = state_25423;var statearr_25457_25536 = state_25423__$1;(statearr_25457_25536[(2)] = inst_25338);
(statearr_25457_25536[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (36)))
{var inst_25382 = (state_25423[(25)]);var inst_25386 = cljs.core.chunk_first(inst_25382);var inst_25387 = cljs.core.chunk_rest(inst_25382);var inst_25388 = cljs.core.count(inst_25386);var inst_25363 = inst_25387;var inst_25364 = inst_25386;var inst_25365 = inst_25388;var inst_25366 = (0);var state_25423__$1 = (function (){var statearr_25458 = state_25423;(statearr_25458[(9)] = inst_25364);
(statearr_25458[(20)] = inst_25363);
(statearr_25458[(11)] = inst_25366);
(statearr_25458[(21)] = inst_25365);
return statearr_25458;
})();var statearr_25459_25537 = state_25423__$1;(statearr_25459_25537[(2)] = null);
(statearr_25459_25537[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (41)))
{var inst_25382 = (state_25423[(25)]);var inst_25398 = (state_25423[(2)]);var inst_25399 = cljs.core.next(inst_25382);var inst_25363 = inst_25399;var inst_25364 = null;var inst_25365 = (0);var inst_25366 = (0);var state_25423__$1 = (function (){var statearr_25460 = state_25423;(statearr_25460[(9)] = inst_25364);
(statearr_25460[(20)] = inst_25363);
(statearr_25460[(11)] = inst_25366);
(statearr_25460[(27)] = inst_25398);
(statearr_25460[(21)] = inst_25365);
return statearr_25460;
})();var statearr_25461_25538 = state_25423__$1;(statearr_25461_25538[(2)] = null);
(statearr_25461_25538[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (43)))
{var state_25423__$1 = state_25423;var statearr_25462_25539 = state_25423__$1;(statearr_25462_25539[(2)] = null);
(statearr_25462_25539[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (29)))
{var inst_25407 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25463_25540 = state_25423__$1;(statearr_25463_25540[(2)] = inst_25407);
(statearr_25463_25540[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (44)))
{var inst_25416 = (state_25423[(2)]);var state_25423__$1 = (function (){var statearr_25464 = state_25423;(statearr_25464[(28)] = inst_25416);
return statearr_25464;
})();var statearr_25465_25541 = state_25423__$1;(statearr_25465_25541[(2)] = null);
(statearr_25465_25541[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (6)))
{var inst_25355 = (state_25423[(29)]);var inst_25354 = (function (){var G__25466 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25466) : cljs.core.deref.call(null,G__25466));
})();var inst_25355__$1 = cljs.core.keys(inst_25354);var inst_25356 = cljs.core.count(inst_25355__$1);var inst_25357 = (function (){var G__25467 = dctr;var G__25468 = inst_25356;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25467,G__25468) : cljs.core.reset_BANG_.call(null,G__25467,G__25468));
})();var inst_25362 = cljs.core.seq(inst_25355__$1);var inst_25363 = inst_25362;var inst_25364 = null;var inst_25365 = (0);var inst_25366 = (0);var state_25423__$1 = (function (){var statearr_25469 = state_25423;(statearr_25469[(9)] = inst_25364);
(statearr_25469[(30)] = inst_25357);
(statearr_25469[(20)] = inst_25363);
(statearr_25469[(11)] = inst_25366);
(statearr_25469[(29)] = inst_25355__$1);
(statearr_25469[(21)] = inst_25365);
return statearr_25469;
})();var statearr_25470_25542 = state_25423__$1;(statearr_25470_25542[(2)] = null);
(statearr_25470_25542[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (28)))
{var inst_25363 = (state_25423[(20)]);var inst_25382 = (state_25423[(25)]);var inst_25382__$1 = cljs.core.seq(inst_25363);var state_25423__$1 = (function (){var statearr_25471 = state_25423;(statearr_25471[(25)] = inst_25382__$1);
return statearr_25471;
})();if(inst_25382__$1)
{var statearr_25472_25543 = state_25423__$1;(statearr_25472_25543[(1)] = (33));
} else
{var statearr_25473_25544 = state_25423__$1;(statearr_25473_25544[(1)] = (34));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (25)))
{var inst_25366 = (state_25423[(11)]);var inst_25365 = (state_25423[(21)]);var inst_25368 = (inst_25366 < inst_25365);var inst_25369 = inst_25368;var state_25423__$1 = state_25423;if(cljs.core.truth_(inst_25369))
{var statearr_25474_25545 = state_25423__$1;(statearr_25474_25545[(1)] = (27));
} else
{var statearr_25475_25546 = state_25423__$1;(statearr_25475_25546[(1)] = (28));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (34)))
{var state_25423__$1 = state_25423;var statearr_25476_25547 = state_25423__$1;(statearr_25476_25547[(2)] = null);
(statearr_25476_25547[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (17)))
{var state_25423__$1 = state_25423;var statearr_25477_25548 = state_25423__$1;(statearr_25477_25548[(2)] = null);
(statearr_25477_25548[(1)] = (18));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (3)))
{var inst_25421 = (state_25423[(2)]);var state_25423__$1 = state_25423;return cljs.core.async.impl.ioc_helpers.return_chan(state_25423__$1,inst_25421);
} else
{if((state_val_25424 === (12)))
{var inst_25350 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25478_25549 = state_25423__$1;(statearr_25478_25549[(2)] = inst_25350);
(statearr_25478_25549[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (2)))
{var state_25423__$1 = state_25423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25423__$1,(4),ch);
} else
{if((state_val_25424 === (23)))
{var state_25423__$1 = state_25423;var statearr_25479_25550 = state_25423__$1;(statearr_25479_25550[(2)] = null);
(statearr_25479_25550[(1)] = (24));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (35)))
{var inst_25405 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25480_25551 = state_25423__$1;(statearr_25480_25551[(2)] = inst_25405);
(statearr_25480_25551[(1)] = (29));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (19)))
{var inst_25324 = (state_25423[(7)]);var inst_25328 = cljs.core.chunk_first(inst_25324);var inst_25329 = cljs.core.chunk_rest(inst_25324);var inst_25330 = cljs.core.count(inst_25328);var inst_25304 = inst_25329;var inst_25305 = inst_25328;var inst_25306 = inst_25330;var inst_25307 = (0);var state_25423__$1 = (function (){var statearr_25481 = state_25423;(statearr_25481[(13)] = inst_25307);
(statearr_25481[(15)] = inst_25305);
(statearr_25481[(16)] = inst_25304);
(statearr_25481[(17)] = inst_25306);
return statearr_25481;
})();var statearr_25482_25552 = state_25423__$1;(statearr_25482_25552[(2)] = null);
(statearr_25482_25552[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (11)))
{var inst_25324 = (state_25423[(7)]);var inst_25304 = (state_25423[(16)]);var inst_25324__$1 = cljs.core.seq(inst_25304);var state_25423__$1 = (function (){var statearr_25483 = state_25423;(statearr_25483[(7)] = inst_25324__$1);
return statearr_25483;
})();if(inst_25324__$1)
{var statearr_25484_25553 = state_25423__$1;(statearr_25484_25553[(1)] = (16));
} else
{var statearr_25485_25554 = state_25423__$1;(statearr_25485_25554[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (9)))
{var inst_25352 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25486_25555 = state_25423__$1;(statearr_25486_25555[(2)] = inst_25352);
(statearr_25486_25555[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (5)))
{var inst_25302 = (function (){var G__25487 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25487) : cljs.core.deref.call(null,G__25487));
})();var inst_25303 = cljs.core.seq(inst_25302);var inst_25304 = inst_25303;var inst_25305 = null;var inst_25306 = (0);var inst_25307 = (0);var state_25423__$1 = (function (){var statearr_25488 = state_25423;(statearr_25488[(13)] = inst_25307);
(statearr_25488[(15)] = inst_25305);
(statearr_25488[(16)] = inst_25304);
(statearr_25488[(17)] = inst_25306);
return statearr_25488;
})();var statearr_25489_25556 = state_25423__$1;(statearr_25489_25556[(2)] = null);
(statearr_25489_25556[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (14)))
{var state_25423__$1 = state_25423;var statearr_25490_25557 = state_25423__$1;(statearr_25490_25557[(2)] = null);
(statearr_25490_25557[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (45)))
{var inst_25413 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25491_25558 = state_25423__$1;(statearr_25491_25558[(2)] = inst_25413);
(statearr_25491_25558[(1)] = (44));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (26)))
{var inst_25355 = (state_25423[(29)]);var inst_25409 = (state_25423[(2)]);var inst_25410 = cljs.core.seq(inst_25355);var state_25423__$1 = (function (){var statearr_25492 = state_25423;(statearr_25492[(31)] = inst_25409);
return statearr_25492;
})();if(inst_25410)
{var statearr_25493_25559 = state_25423__$1;(statearr_25493_25559[(1)] = (42));
} else
{var statearr_25494_25560 = state_25423__$1;(statearr_25494_25560[(1)] = (43));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (16)))
{var inst_25324 = (state_25423[(7)]);var inst_25326 = cljs.core.chunked_seq_QMARK_(inst_25324);var state_25423__$1 = state_25423;if(inst_25326)
{var statearr_25495_25561 = state_25423__$1;(statearr_25495_25561[(1)] = (19));
} else
{var statearr_25496_25562 = state_25423__$1;(statearr_25496_25562[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (38)))
{var inst_25402 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25497_25563 = state_25423__$1;(statearr_25497_25563[(2)] = inst_25402);
(statearr_25497_25563[(1)] = (35));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (30)))
{var state_25423__$1 = state_25423;var statearr_25498_25564 = state_25423__$1;(statearr_25498_25564[(2)] = null);
(statearr_25498_25564[(1)] = (32));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (10)))
{var inst_25307 = (state_25423[(13)]);var inst_25305 = (state_25423[(15)]);var inst_25313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25305,inst_25307);var inst_25314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25313,(0),null);var inst_25315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25313,(1),null);var state_25423__$1 = (function (){var statearr_25499 = state_25423;(statearr_25499[(26)] = inst_25314);
return statearr_25499;
})();if(cljs.core.truth_(inst_25315))
{var statearr_25500_25565 = state_25423__$1;(statearr_25500_25565[(1)] = (13));
} else
{var statearr_25501_25566 = state_25423__$1;(statearr_25501_25566[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (18)))
{var inst_25348 = (state_25423[(2)]);var state_25423__$1 = state_25423;var statearr_25502_25567 = state_25423__$1;(statearr_25502_25567[(2)] = inst_25348);
(statearr_25502_25567[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (42)))
{var state_25423__$1 = state_25423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25423__$1,(45),dchan);
} else
{if((state_val_25424 === (37)))
{var inst_25391 = (state_25423[(23)]);var inst_25382 = (state_25423[(25)]);var inst_25295 = (state_25423[(12)]);var inst_25391__$1 = cljs.core.first(inst_25382);var inst_25392 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25391__$1,inst_25295,done);var state_25423__$1 = (function (){var statearr_25503 = state_25423;(statearr_25503[(23)] = inst_25391__$1);
return statearr_25503;
})();if(cljs.core.truth_(inst_25392))
{var statearr_25504_25568 = state_25423__$1;(statearr_25504_25568[(1)] = (39));
} else
{var statearr_25505_25569 = state_25423__$1;(statearr_25505_25569[(1)] = (40));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25424 === (8)))
{var inst_25307 = (state_25423[(13)]);var inst_25306 = (state_25423[(17)]);var inst_25309 = (inst_25307 < inst_25306);var inst_25310 = inst_25309;var state_25423__$1 = state_25423;if(cljs.core.truth_(inst_25310))
{var statearr_25506_25570 = state_25423__$1;(statearr_25506_25570[(1)] = (10));
} else
{var statearr_25507_25571 = state_25423__$1;(statearr_25507_25571[(1)] = (11));
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
});})(c__12292__auto___25517,cs,m,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___25517,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25511[(0)] = state_machine__12278__auto__);
(statearr_25511[(1)] = (1));
return statearr_25511;
});
var state_machine__12278__auto____1 = (function (state_25423){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25423);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25512){if((e25512 instanceof Object))
{var ex__12281__auto__ = e25512;var statearr_25513_25572 = state_25423;(statearr_25513_25572[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25423);
return cljs.core.constant$keyword$82;
} else
{throw e25512;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25573 = state_25423;
state_25423 = G__25573;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25517,cs,m,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_25514 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25517);
return statearr_25514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25517,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25578 = {};return obj25578;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25582 = x__4277__auto__;return goog.typeOf(G__25582);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25586 = x__4277__auto__;return goog.typeOf(G__25586);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25590 = x__4277__auto__;return goog.typeOf(G__25590);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25594 = x__4277__auto__;return goog.typeOf(G__25594);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25598 = x__4277__auto__;return goog.typeOf(G__25598);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25599){var map__25605 = p__25599;var map__25605__$1 = ((cljs.core.seq_QMARK_(map__25605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25605):map__25605);var opts = map__25605__$1;var statearr_25606_25610 = state;(statearr_25606_25610[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25605,map__25605__$1,opts){
return (function (val){var statearr_25607_25611 = state;(statearr_25607_25611[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25605,map__25605__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25608_25612 = state;(statearr_25608_25612[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25609 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25609) : cljs.core.deref.call(null,G__25609));
})());
return cljs.core.constant$keyword$82;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25599 = null;if (arguments.length > 3) {
  p__25599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25599);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25613){
var state = cljs.core.first(arglist__25613);
arglist__25613 = cljs.core.next(arglist__25613);
var cont_block = cljs.core.first(arglist__25613);
arglist__25613 = cljs.core.next(arglist__25613);
var ports = cljs.core.first(arglist__25613);
var p__25599 = cljs.core.rest(arglist__25613);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25599);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25747 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25747) : cljs.core.atom.call(null,G__25747));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);var solo_mode = (function (){var G__25748 = cljs.core.constant$keyword$92;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25748) : cljs.core.atom.call(null,G__25748));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25749 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25749) : attr.call(null,G__25749));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25750 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25750) : cljs.core.deref.call(null,G__25750));
})();var mode = (function (){var G__25751 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25751) : cljs.core.deref.call(null,G__25751));
})();var solos = pick(cljs.core.constant$keyword$93,chs);var pauses = pick(cljs.core.constant$keyword$91,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25752 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25753){
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
this.meta25753 = meta25753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25752.cljs$lang$type = true;
cljs.core.async.t25752.cljs$lang$ctorStr = "cljs.core.async/t25752";
cljs.core.async.t25752.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25752");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25755_25880 = self__.cs;var G__25756_25881 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25755_25880,G__25756_25881) : cljs.core.reset_BANG_.call(null,G__25755_25880,G__25756_25881));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25757 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25757) : self__.solo_modes.call(null,G__25757));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25758_25882 = self__.solo_mode;var G__25759_25883 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25758_25882,G__25759_25883) : cljs.core.reset_BANG_.call(null,G__25758_25882,G__25759_25883));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25754){var self__ = this;
var _25754__$1 = this;return self__.meta25753;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25754,meta25753__$1){var self__ = this;
var _25754__$1 = this;return (new cljs.core.async.t25752(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25753__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25752 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25752(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25753){return (new cljs.core.async.t25752(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25753));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25752(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12292__auto___25884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25831){var state_val_25832 = (state_25831[(1)]);if((state_val_25832 === (7)))
{var inst_25773 = (state_25831[(7)]);var inst_25778 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25773);var state_25831__$1 = state_25831;var statearr_25833_25885 = state_25831__$1;(statearr_25833_25885[(2)] = inst_25778);
(statearr_25833_25885[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (20)))
{var inst_25788 = (state_25831[(8)]);var state_25831__$1 = state_25831;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25831__$1,(23),out,inst_25788);
} else
{if((state_val_25832 === (1)))
{var inst_25763 = (state_25831[(9)]);var inst_25763__$1 = calc_state();var inst_25764 = cljs.core.seq_QMARK_(inst_25763__$1);var state_25831__$1 = (function (){var statearr_25834 = state_25831;(statearr_25834[(9)] = inst_25763__$1);
return statearr_25834;
})();if(inst_25764)
{var statearr_25835_25886 = state_25831__$1;(statearr_25835_25886[(1)] = (2));
} else
{var statearr_25836_25887 = state_25831__$1;(statearr_25836_25887[(1)] = (3));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (24)))
{var inst_25781 = (state_25831[(10)]);var inst_25773 = inst_25781;var state_25831__$1 = (function (){var statearr_25837 = state_25831;(statearr_25837[(7)] = inst_25773);
return statearr_25837;
})();var statearr_25838_25888 = state_25831__$1;(statearr_25838_25888[(2)] = null);
(statearr_25838_25888[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (4)))
{var inst_25763 = (state_25831[(9)]);var inst_25769 = (state_25831[(2)]);var inst_25770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25769,cljs.core.constant$keyword$96);var inst_25771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25769,cljs.core.constant$keyword$95);var inst_25772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25769,cljs.core.constant$keyword$94);var inst_25773 = inst_25763;var state_25831__$1 = (function (){var statearr_25839 = state_25831;(statearr_25839[(11)] = inst_25770);
(statearr_25839[(12)] = inst_25772);
(statearr_25839[(13)] = inst_25771);
(statearr_25839[(7)] = inst_25773);
return statearr_25839;
})();var statearr_25840_25889 = state_25831__$1;(statearr_25840_25889[(2)] = null);
(statearr_25840_25889[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (15)))
{var state_25831__$1 = state_25831;var statearr_25841_25890 = state_25831__$1;(statearr_25841_25890[(2)] = null);
(statearr_25841_25890[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (21)))
{var inst_25781 = (state_25831[(10)]);var inst_25773 = inst_25781;var state_25831__$1 = (function (){var statearr_25842 = state_25831;(statearr_25842[(7)] = inst_25773);
return statearr_25842;
})();var statearr_25843_25891 = state_25831__$1;(statearr_25843_25891[(2)] = null);
(statearr_25843_25891[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (13)))
{var inst_25827 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25844_25892 = state_25831__$1;(statearr_25844_25892[(2)] = inst_25827);
(statearr_25844_25892[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (22)))
{var inst_25825 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25845_25893 = state_25831__$1;(statearr_25845_25893[(2)] = inst_25825);
(statearr_25845_25893[(1)] = (13));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (6)))
{var inst_25829 = (state_25831[(2)]);var state_25831__$1 = state_25831;return cljs.core.async.impl.ioc_helpers.return_chan(state_25831__$1,inst_25829);
} else
{if((state_val_25832 === (25)))
{var state_25831__$1 = state_25831;var statearr_25846_25894 = state_25831__$1;(statearr_25846_25894[(2)] = null);
(statearr_25846_25894[(1)] = (26));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (17)))
{var inst_25804 = (state_25831[(14)]);var state_25831__$1 = state_25831;var statearr_25847_25895 = state_25831__$1;(statearr_25847_25895[(2)] = inst_25804);
(statearr_25847_25895[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (3)))
{var inst_25763 = (state_25831[(9)]);var state_25831__$1 = state_25831;var statearr_25848_25896 = state_25831__$1;(statearr_25848_25896[(2)] = inst_25763);
(statearr_25848_25896[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (12)))
{var inst_25789 = (state_25831[(15)]);var inst_25784 = (state_25831[(16)]);var inst_25804 = (state_25831[(14)]);var inst_25804__$1 = (function (){var G__25849 = inst_25789;return (inst_25784.cljs$core$IFn$_invoke$arity$1 ? inst_25784.cljs$core$IFn$_invoke$arity$1(G__25849) : inst_25784.call(null,G__25849));
})();var state_25831__$1 = (function (){var statearr_25850 = state_25831;(statearr_25850[(14)] = inst_25804__$1);
return statearr_25850;
})();if(cljs.core.truth_(inst_25804__$1))
{var statearr_25851_25897 = state_25831__$1;(statearr_25851_25897[(1)] = (17));
} else
{var statearr_25852_25898 = state_25831__$1;(statearr_25852_25898[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (2)))
{var inst_25763 = (state_25831[(9)]);var inst_25766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25763);var state_25831__$1 = state_25831;var statearr_25853_25899 = state_25831__$1;(statearr_25853_25899[(2)] = inst_25766);
(statearr_25853_25899[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (23)))
{var inst_25816 = (state_25831[(2)]);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25816))
{var statearr_25854_25900 = state_25831__$1;(statearr_25854_25900[(1)] = (24));
} else
{var statearr_25855_25901 = state_25831__$1;(statearr_25855_25901[(1)] = (25));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (19)))
{var inst_25813 = (state_25831[(2)]);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25813))
{var statearr_25856_25902 = state_25831__$1;(statearr_25856_25902[(1)] = (20));
} else
{var statearr_25857_25903 = state_25831__$1;(statearr_25857_25903[(1)] = (21));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (11)))
{var inst_25788 = (state_25831[(8)]);var inst_25794 = (inst_25788 == null);var state_25831__$1 = state_25831;if(cljs.core.truth_(inst_25794))
{var statearr_25858_25904 = state_25831__$1;(statearr_25858_25904[(1)] = (14));
} else
{var statearr_25859_25905 = state_25831__$1;(statearr_25859_25905[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (9)))
{var inst_25781 = (state_25831[(10)]);var inst_25781__$1 = (state_25831[(2)]);var inst_25782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25781__$1,cljs.core.constant$keyword$96);var inst_25783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25781__$1,cljs.core.constant$keyword$95);var inst_25784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25781__$1,cljs.core.constant$keyword$94);var state_25831__$1 = (function (){var statearr_25860 = state_25831;(statearr_25860[(10)] = inst_25781__$1);
(statearr_25860[(17)] = inst_25783);
(statearr_25860[(16)] = inst_25784);
return statearr_25860;
})();return cljs.core.async.ioc_alts_BANG_(state_25831__$1,(10),inst_25782);
} else
{if((state_val_25832 === (5)))
{var inst_25773 = (state_25831[(7)]);var inst_25776 = cljs.core.seq_QMARK_(inst_25773);var state_25831__$1 = state_25831;if(inst_25776)
{var statearr_25861_25906 = state_25831__$1;(statearr_25861_25906[(1)] = (7));
} else
{var statearr_25862_25907 = state_25831__$1;(statearr_25862_25907[(1)] = (8));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (14)))
{var inst_25789 = (state_25831[(15)]);var inst_25796 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25789);var state_25831__$1 = state_25831;var statearr_25863_25908 = state_25831__$1;(statearr_25863_25908[(2)] = inst_25796);
(statearr_25863_25908[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (26)))
{var inst_25821 = (state_25831[(2)]);var state_25831__$1 = state_25831;var statearr_25864_25909 = state_25831__$1;(statearr_25864_25909[(2)] = inst_25821);
(statearr_25864_25909[(1)] = (22));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (16)))
{var inst_25799 = (state_25831[(2)]);var inst_25800 = calc_state();var inst_25773 = inst_25800;var state_25831__$1 = (function (){var statearr_25865 = state_25831;(statearr_25865[(7)] = inst_25773);
(statearr_25865[(18)] = inst_25799);
return statearr_25865;
})();var statearr_25866_25910 = state_25831__$1;(statearr_25866_25910[(2)] = null);
(statearr_25866_25910[(1)] = (5));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (10)))
{var inst_25788 = (state_25831[(8)]);var inst_25789 = (state_25831[(15)]);var inst_25787 = (state_25831[(2)]);var inst_25788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25787,(0),null);var inst_25789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25787,(1),null);var inst_25790 = (inst_25788__$1 == null);var inst_25791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25789__$1,change);var inst_25792 = (inst_25790) || (inst_25791);var state_25831__$1 = (function (){var statearr_25867 = state_25831;(statearr_25867[(8)] = inst_25788__$1);
(statearr_25867[(15)] = inst_25789__$1);
return statearr_25867;
})();if(cljs.core.truth_(inst_25792))
{var statearr_25868_25911 = state_25831__$1;(statearr_25868_25911[(1)] = (11));
} else
{var statearr_25869_25912 = state_25831__$1;(statearr_25869_25912[(1)] = (12));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (18)))
{var inst_25783 = (state_25831[(17)]);var inst_25789 = (state_25831[(15)]);var inst_25784 = (state_25831[(16)]);var inst_25808 = cljs.core.empty_QMARK_(inst_25784);var inst_25809 = (function (){var G__25870 = inst_25789;return (inst_25783.cljs$core$IFn$_invoke$arity$1 ? inst_25783.cljs$core$IFn$_invoke$arity$1(G__25870) : inst_25783.call(null,G__25870));
})();var inst_25810 = cljs.core.not(inst_25809);var inst_25811 = (inst_25808) && (inst_25810);var state_25831__$1 = state_25831;var statearr_25871_25913 = state_25831__$1;(statearr_25871_25913[(2)] = inst_25811);
(statearr_25871_25913[(1)] = (19));
return cljs.core.constant$keyword$82;
} else
{if((state_val_25832 === (8)))
{var inst_25773 = (state_25831[(7)]);var state_25831__$1 = state_25831;var statearr_25872_25914 = state_25831__$1;(statearr_25872_25914[(2)] = inst_25773);
(statearr_25872_25914[(1)] = (9));
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
});})(c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12277__auto__,c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_25876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25876[(0)] = state_machine__12278__auto__);
(statearr_25876[(1)] = (1));
return statearr_25876;
});
var state_machine__12278__auto____1 = (function (state_25831){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_25831);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e25877){if((e25877 instanceof Object))
{var ex__12281__auto__ = e25877;var statearr_25878_25915 = state_25831;(statearr_25878_25915[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25831);
return cljs.core.constant$keyword$82;
} else
{throw e25877;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__25916 = state_25831;
state_25831 = G__25916;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_25831){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_25831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12294__auto__ = (function (){var statearr_25879 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_25879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___25884);
return statearr_25879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___25884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25918 = {};return obj25918;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25922 = x__4277__auto__;return goog.typeOf(G__25922);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25926 = x__4277__auto__;return goog.typeOf(G__25926);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25932 = x__4277__auto__;return goog.typeOf(G__25932);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25934 = x__4277__auto__;return goog.typeOf(G__25934);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__26073 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26073) : cljs.core.atom.call(null,G__26073));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26075 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26075) : cljs.core.deref.call(null,G__26075));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__25935_SHARP_){if(cljs.core.truth_((function (){var G__26076 = topic;return (p1__25935_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25935_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26076) : p1__25935_SHARP_.call(null,G__26076));
})()))
{return p1__25935_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25935_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26077 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26077) : buf_fn.call(null,G__26077));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26078 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26079){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26079 = meta26079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26078.cljs$lang$type = true;
cljs.core.async.t26078.cljs$lang$ctorStr = "cljs.core.async/t26078";
cljs.core.async.t26078.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26078");
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26078.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__26081 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26081) : self__.ensure_mult.call(null,G__26081));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26082 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26082) : cljs.core.deref.call(null,G__26082));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__26083 = self__.mults;var G__26084 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26083,G__26084) : cljs.core.reset_BANG_.call(null,G__26083,G__26084));
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26080){var self__ = this;
var _26080__$1 = this;return self__.meta26079;
});})(mults,ensure_mult))
;
cljs.core.async.t26078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26080,meta26079__$1){var self__ = this;
var _26080__$1 = this;return (new cljs.core.async.t26078(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26079__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26078 = ((function (mults,ensure_mult){
return (function __GT_t26078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26079){return (new cljs.core.async.t26078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26079));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26078(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12292__auto___26207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26207,mults,ensure_mult,p){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26207,mults,ensure_mult,p){
return (function (state_26156){var state_val_26157 = (state_26156[(1)]);if((state_val_26157 === (7)))
{var inst_26152 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26158_26208 = state_26156__$1;(statearr_26158_26208[(2)] = inst_26152);
(statearr_26158_26208[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (20)))
{var state_26156__$1 = state_26156;var statearr_26159_26209 = state_26156__$1;(statearr_26159_26209[(2)] = null);
(statearr_26159_26209[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (1)))
{var state_26156__$1 = state_26156;var statearr_26160_26210 = state_26156__$1;(statearr_26160_26210[(2)] = null);
(statearr_26160_26210[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (24)))
{var inst_26135 = (state_26156[(7)]);var inst_26144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26135);var state_26156__$1 = state_26156;var statearr_26161_26211 = state_26156__$1;(statearr_26161_26211[(2)] = inst_26144);
(statearr_26161_26211[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (4)))
{var inst_26087 = (state_26156[(8)]);var inst_26087__$1 = (state_26156[(2)]);var inst_26088 = (inst_26087__$1 == null);var state_26156__$1 = (function (){var statearr_26162 = state_26156;(statearr_26162[(8)] = inst_26087__$1);
return statearr_26162;
})();if(cljs.core.truth_(inst_26088))
{var statearr_26163_26212 = state_26156__$1;(statearr_26163_26212[(1)] = (5));
} else
{var statearr_26164_26213 = state_26156__$1;(statearr_26164_26213[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (15)))
{var inst_26129 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26165_26214 = state_26156__$1;(statearr_26165_26214[(2)] = inst_26129);
(statearr_26165_26214[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (21)))
{var inst_26149 = (state_26156[(2)]);var state_26156__$1 = (function (){var statearr_26166 = state_26156;(statearr_26166[(9)] = inst_26149);
return statearr_26166;
})();var statearr_26167_26215 = state_26156__$1;(statearr_26167_26215[(2)] = null);
(statearr_26167_26215[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (13)))
{var inst_26111 = (state_26156[(10)]);var inst_26113 = cljs.core.chunked_seq_QMARK_(inst_26111);var state_26156__$1 = state_26156;if(inst_26113)
{var statearr_26168_26216 = state_26156__$1;(statearr_26168_26216[(1)] = (16));
} else
{var statearr_26169_26217 = state_26156__$1;(statearr_26169_26217[(1)] = (17));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (22)))
{var inst_26141 = (state_26156[(2)]);var state_26156__$1 = state_26156;if(cljs.core.truth_(inst_26141))
{var statearr_26170_26218 = state_26156__$1;(statearr_26170_26218[(1)] = (23));
} else
{var statearr_26171_26219 = state_26156__$1;(statearr_26171_26219[(1)] = (24));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (6)))
{var inst_26135 = (state_26156[(7)]);var inst_26137 = (state_26156[(11)]);var inst_26087 = (state_26156[(8)]);var inst_26135__$1 = (function (){var G__26172 = inst_26087;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26172) : topic_fn.call(null,G__26172));
})();var inst_26136 = (function (){var G__26173 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26173) : cljs.core.deref.call(null,G__26173));
})();var inst_26137__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26136,inst_26135__$1);var state_26156__$1 = (function (){var statearr_26174 = state_26156;(statearr_26174[(7)] = inst_26135__$1);
(statearr_26174[(11)] = inst_26137__$1);
return statearr_26174;
})();if(cljs.core.truth_(inst_26137__$1))
{var statearr_26175_26220 = state_26156__$1;(statearr_26175_26220[(1)] = (19));
} else
{var statearr_26176_26221 = state_26156__$1;(statearr_26176_26221[(1)] = (20));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (25)))
{var inst_26146 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26177_26222 = state_26156__$1;(statearr_26177_26222[(2)] = inst_26146);
(statearr_26177_26222[(1)] = (21));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (17)))
{var inst_26111 = (state_26156[(10)]);var inst_26120 = cljs.core.first(inst_26111);var inst_26121 = cljs.core.async.muxch_STAR_(inst_26120);var inst_26122 = cljs.core.async.close_BANG_(inst_26121);var inst_26123 = cljs.core.next(inst_26111);var inst_26097 = inst_26123;var inst_26098 = null;var inst_26099 = (0);var inst_26100 = (0);var state_26156__$1 = (function (){var statearr_26178 = state_26156;(statearr_26178[(12)] = inst_26122);
(statearr_26178[(13)] = inst_26098);
(statearr_26178[(14)] = inst_26097);
(statearr_26178[(15)] = inst_26099);
(statearr_26178[(16)] = inst_26100);
return statearr_26178;
})();var statearr_26179_26223 = state_26156__$1;(statearr_26179_26223[(2)] = null);
(statearr_26179_26223[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (3)))
{var inst_26154 = (state_26156[(2)]);var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.return_chan(state_26156__$1,inst_26154);
} else
{if((state_val_26157 === (12)))
{var inst_26131 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26180_26224 = state_26156__$1;(statearr_26180_26224[(2)] = inst_26131);
(statearr_26180_26224[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (2)))
{var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26156__$1,(4),ch);
} else
{if((state_val_26157 === (23)))
{var state_26156__$1 = state_26156;var statearr_26181_26225 = state_26156__$1;(statearr_26181_26225[(2)] = null);
(statearr_26181_26225[(1)] = (25));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (19)))
{var inst_26137 = (state_26156[(11)]);var inst_26087 = (state_26156[(8)]);var inst_26139 = cljs.core.async.muxch_STAR_(inst_26137);var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26156__$1,(22),inst_26139,inst_26087);
} else
{if((state_val_26157 === (11)))
{var inst_26097 = (state_26156[(14)]);var inst_26111 = (state_26156[(10)]);var inst_26111__$1 = cljs.core.seq(inst_26097);var state_26156__$1 = (function (){var statearr_26182 = state_26156;(statearr_26182[(10)] = inst_26111__$1);
return statearr_26182;
})();if(inst_26111__$1)
{var statearr_26183_26226 = state_26156__$1;(statearr_26183_26226[(1)] = (13));
} else
{var statearr_26184_26227 = state_26156__$1;(statearr_26184_26227[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (9)))
{var inst_26133 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26185_26228 = state_26156__$1;(statearr_26185_26228[(2)] = inst_26133);
(statearr_26185_26228[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (5)))
{var inst_26094 = (function (){var G__26186 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26186) : cljs.core.deref.call(null,G__26186));
})();var inst_26095 = cljs.core.vals(inst_26094);var inst_26096 = cljs.core.seq(inst_26095);var inst_26097 = inst_26096;var inst_26098 = null;var inst_26099 = (0);var inst_26100 = (0);var state_26156__$1 = (function (){var statearr_26187 = state_26156;(statearr_26187[(13)] = inst_26098);
(statearr_26187[(14)] = inst_26097);
(statearr_26187[(15)] = inst_26099);
(statearr_26187[(16)] = inst_26100);
return statearr_26187;
})();var statearr_26188_26229 = state_26156__$1;(statearr_26188_26229[(2)] = null);
(statearr_26188_26229[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (14)))
{var state_26156__$1 = state_26156;var statearr_26192_26230 = state_26156__$1;(statearr_26192_26230[(2)] = null);
(statearr_26192_26230[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (16)))
{var inst_26111 = (state_26156[(10)]);var inst_26115 = cljs.core.chunk_first(inst_26111);var inst_26116 = cljs.core.chunk_rest(inst_26111);var inst_26117 = cljs.core.count(inst_26115);var inst_26097 = inst_26116;var inst_26098 = inst_26115;var inst_26099 = inst_26117;var inst_26100 = (0);var state_26156__$1 = (function (){var statearr_26193 = state_26156;(statearr_26193[(13)] = inst_26098);
(statearr_26193[(14)] = inst_26097);
(statearr_26193[(15)] = inst_26099);
(statearr_26193[(16)] = inst_26100);
return statearr_26193;
})();var statearr_26194_26231 = state_26156__$1;(statearr_26194_26231[(2)] = null);
(statearr_26194_26231[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (10)))
{var inst_26098 = (state_26156[(13)]);var inst_26097 = (state_26156[(14)]);var inst_26099 = (state_26156[(15)]);var inst_26100 = (state_26156[(16)]);var inst_26105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26098,inst_26100);var inst_26106 = cljs.core.async.muxch_STAR_(inst_26105);var inst_26107 = cljs.core.async.close_BANG_(inst_26106);var inst_26108 = (inst_26100 + (1));var tmp26189 = inst_26098;var tmp26190 = inst_26097;var tmp26191 = inst_26099;var inst_26097__$1 = tmp26190;var inst_26098__$1 = tmp26189;var inst_26099__$1 = tmp26191;var inst_26100__$1 = inst_26108;var state_26156__$1 = (function (){var statearr_26195 = state_26156;(statearr_26195[(13)] = inst_26098__$1);
(statearr_26195[(14)] = inst_26097__$1);
(statearr_26195[(15)] = inst_26099__$1);
(statearr_26195[(16)] = inst_26100__$1);
(statearr_26195[(17)] = inst_26107);
return statearr_26195;
})();var statearr_26196_26232 = state_26156__$1;(statearr_26196_26232[(2)] = null);
(statearr_26196_26232[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (18)))
{var inst_26126 = (state_26156[(2)]);var state_26156__$1 = state_26156;var statearr_26197_26233 = state_26156__$1;(statearr_26197_26233[(2)] = inst_26126);
(statearr_26197_26233[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26157 === (8)))
{var inst_26099 = (state_26156[(15)]);var inst_26100 = (state_26156[(16)]);var inst_26102 = (inst_26100 < inst_26099);var inst_26103 = inst_26102;var state_26156__$1 = state_26156;if(cljs.core.truth_(inst_26103))
{var statearr_26198_26234 = state_26156__$1;(statearr_26198_26234[(1)] = (10));
} else
{var statearr_26199_26235 = state_26156__$1;(statearr_26199_26235[(1)] = (11));
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
});})(c__12292__auto___26207,mults,ensure_mult,p))
;return ((function (switch__12277__auto__,c__12292__auto___26207,mults,ensure_mult,p){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26203[(0)] = state_machine__12278__auto__);
(statearr_26203[(1)] = (1));
return statearr_26203;
});
var state_machine__12278__auto____1 = (function (state_26156){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26156);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26204){if((e26204 instanceof Object))
{var ex__12281__auto__ = e26204;var statearr_26205_26236 = state_26156;(statearr_26205_26236[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26156);
return cljs.core.constant$keyword$82;
} else
{throw e26204;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26237 = state_26156;
state_26156 = G__26237;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26207,mults,ensure_mult,p))
})();var state__12294__auto__ = (function (){var statearr_26206 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26207);
return statearr_26206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26207,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26318 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26318) : cljs.core.atom.call(null,G__26318));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12292__auto___26391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26357){var state_val_26358 = (state_26357[(1)]);if((state_val_26358 === (7)))
{var state_26357__$1 = state_26357;var statearr_26359_26392 = state_26357__$1;(statearr_26359_26392[(2)] = null);
(statearr_26359_26392[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (1)))
{var state_26357__$1 = state_26357;var statearr_26360_26393 = state_26357__$1;(statearr_26360_26393[(2)] = null);
(statearr_26360_26393[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (4)))
{var inst_26321 = (state_26357[(7)]);var inst_26323 = (inst_26321 < cnt);var state_26357__$1 = state_26357;if(cljs.core.truth_(inst_26323))
{var statearr_26361_26394 = state_26357__$1;(statearr_26361_26394[(1)] = (6));
} else
{var statearr_26362_26395 = state_26357__$1;(statearr_26362_26395[(1)] = (7));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (15)))
{var inst_26353 = (state_26357[(2)]);var state_26357__$1 = state_26357;var statearr_26363_26396 = state_26357__$1;(statearr_26363_26396[(2)] = inst_26353);
(statearr_26363_26396[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (13)))
{var inst_26346 = cljs.core.async.close_BANG_(out);var state_26357__$1 = state_26357;var statearr_26364_26397 = state_26357__$1;(statearr_26364_26397[(2)] = inst_26346);
(statearr_26364_26397[(1)] = (15));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (6)))
{var state_26357__$1 = state_26357;var statearr_26365_26398 = state_26357__$1;(statearr_26365_26398[(2)] = null);
(statearr_26365_26398[(1)] = (11));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (3)))
{var inst_26355 = (state_26357[(2)]);var state_26357__$1 = state_26357;return cljs.core.async.impl.ioc_helpers.return_chan(state_26357__$1,inst_26355);
} else
{if((state_val_26358 === (12)))
{var inst_26343 = (state_26357[(8)]);var inst_26343__$1 = (state_26357[(2)]);var inst_26344 = cljs.core.some(cljs.core.nil_QMARK_,inst_26343__$1);var state_26357__$1 = (function (){var statearr_26366 = state_26357;(statearr_26366[(8)] = inst_26343__$1);
return statearr_26366;
})();if(cljs.core.truth_(inst_26344))
{var statearr_26367_26399 = state_26357__$1;(statearr_26367_26399[(1)] = (13));
} else
{var statearr_26368_26400 = state_26357__$1;(statearr_26368_26400[(1)] = (14));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (2)))
{var inst_26320 = (function (){var G__26369 = dctr;var G__26370 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26369,G__26370) : cljs.core.reset_BANG_.call(null,G__26369,G__26370));
})();var inst_26321 = (0);var state_26357__$1 = (function (){var statearr_26371 = state_26357;(statearr_26371[(9)] = inst_26320);
(statearr_26371[(7)] = inst_26321);
return statearr_26371;
})();var statearr_26372_26401 = state_26357__$1;(statearr_26372_26401[(2)] = null);
(statearr_26372_26401[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (11)))
{var inst_26321 = (state_26357[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26357,(10),Object,null,(9));var inst_26330 = (function (){var G__26373 = inst_26321;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26373) : chs__$1.call(null,G__26373));
})();var inst_26331 = (function (){var G__26374 = inst_26321;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26374) : done.call(null,G__26374));
})();var inst_26332 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26330,inst_26331);var state_26357__$1 = state_26357;var statearr_26375_26402 = state_26357__$1;(statearr_26375_26402[(2)] = inst_26332);
cljs.core.async.impl.ioc_helpers.process_exception(state_26357__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (9)))
{var inst_26321 = (state_26357[(7)]);var inst_26334 = (state_26357[(2)]);var inst_26335 = (inst_26321 + (1));var inst_26321__$1 = inst_26335;var state_26357__$1 = (function (){var statearr_26376 = state_26357;(statearr_26376[(10)] = inst_26334);
(statearr_26376[(7)] = inst_26321__$1);
return statearr_26376;
})();var statearr_26377_26403 = state_26357__$1;(statearr_26377_26403[(2)] = null);
(statearr_26377_26403[(1)] = (4));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (5)))
{var inst_26341 = (state_26357[(2)]);var state_26357__$1 = (function (){var statearr_26378 = state_26357;(statearr_26378[(11)] = inst_26341);
return statearr_26378;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26357__$1,(12),dchan);
} else
{if((state_val_26358 === (14)))
{var inst_26343 = (state_26357[(8)]);var inst_26348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26343);var state_26357__$1 = state_26357;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26357__$1,(16),out,inst_26348);
} else
{if((state_val_26358 === (16)))
{var inst_26350 = (state_26357[(2)]);var state_26357__$1 = (function (){var statearr_26379 = state_26357;(statearr_26379[(12)] = inst_26350);
return statearr_26379;
})();var statearr_26380_26404 = state_26357__$1;(statearr_26380_26404[(2)] = null);
(statearr_26380_26404[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (10)))
{var inst_26325 = (state_26357[(2)]);var inst_26326 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26357__$1 = (function (){var statearr_26381 = state_26357;(statearr_26381[(13)] = inst_26325);
return statearr_26381;
})();var statearr_26382_26405 = state_26357__$1;(statearr_26382_26405[(2)] = inst_26326);
cljs.core.async.impl.ioc_helpers.process_exception(state_26357__$1);
return cljs.core.constant$keyword$82;
} else
{if((state_val_26358 === (8)))
{var inst_26339 = (state_26357[(2)]);var state_26357__$1 = state_26357;var statearr_26383_26406 = state_26357__$1;(statearr_26383_26406[(2)] = inst_26339);
(statearr_26383_26406[(1)] = (5));
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
});})(c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12277__auto__,c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26387[(0)] = state_machine__12278__auto__);
(statearr_26387[(1)] = (1));
return statearr_26387;
});
var state_machine__12278__auto____1 = (function (state_26357){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26357);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26388){if((e26388 instanceof Object))
{var ex__12281__auto__ = e26388;var statearr_26389_26407 = state_26357;(statearr_26389_26407[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26357);
return cljs.core.constant$keyword$82;
} else
{throw e26388;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26408 = state_26357;
state_26357 = G__26408;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12294__auto__ = (function (){var statearr_26390 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26391);
return statearr_26390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26391,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26518,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26518,out){
return (function (state_26494){var state_val_26495 = (state_26494[(1)]);if((state_val_26495 === (7)))
{var inst_26473 = (state_26494[(7)]);var inst_26474 = (state_26494[(8)]);var inst_26473__$1 = (state_26494[(2)]);var inst_26474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26473__$1,(0),null);var inst_26475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26473__$1,(1),null);var inst_26476 = (inst_26474__$1 == null);var state_26494__$1 = (function (){var statearr_26496 = state_26494;(statearr_26496[(7)] = inst_26473__$1);
(statearr_26496[(9)] = inst_26475);
(statearr_26496[(8)] = inst_26474__$1);
return statearr_26496;
})();if(cljs.core.truth_(inst_26476))
{var statearr_26497_26519 = state_26494__$1;(statearr_26497_26519[(1)] = (8));
} else
{var statearr_26498_26520 = state_26494__$1;(statearr_26498_26520[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (1)))
{var inst_26465 = cljs.core.vec(chs);var inst_26466 = inst_26465;var state_26494__$1 = (function (){var statearr_26499 = state_26494;(statearr_26499[(10)] = inst_26466);
return statearr_26499;
})();var statearr_26500_26521 = state_26494__$1;(statearr_26500_26521[(2)] = null);
(statearr_26500_26521[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (4)))
{var inst_26466 = (state_26494[(10)]);var state_26494__$1 = state_26494;return cljs.core.async.ioc_alts_BANG_(state_26494__$1,(7),inst_26466);
} else
{if((state_val_26495 === (6)))
{var inst_26490 = (state_26494[(2)]);var state_26494__$1 = state_26494;var statearr_26501_26522 = state_26494__$1;(statearr_26501_26522[(2)] = inst_26490);
(statearr_26501_26522[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (3)))
{var inst_26492 = (state_26494[(2)]);var state_26494__$1 = state_26494;return cljs.core.async.impl.ioc_helpers.return_chan(state_26494__$1,inst_26492);
} else
{if((state_val_26495 === (2)))
{var inst_26466 = (state_26494[(10)]);var inst_26468 = cljs.core.count(inst_26466);var inst_26469 = (inst_26468 > (0));var state_26494__$1 = state_26494;if(cljs.core.truth_(inst_26469))
{var statearr_26503_26523 = state_26494__$1;(statearr_26503_26523[(1)] = (4));
} else
{var statearr_26504_26524 = state_26494__$1;(statearr_26504_26524[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (11)))
{var inst_26466 = (state_26494[(10)]);var inst_26483 = (state_26494[(2)]);var tmp26502 = inst_26466;var inst_26466__$1 = tmp26502;var state_26494__$1 = (function (){var statearr_26505 = state_26494;(statearr_26505[(11)] = inst_26483);
(statearr_26505[(10)] = inst_26466__$1);
return statearr_26505;
})();var statearr_26506_26525 = state_26494__$1;(statearr_26506_26525[(2)] = null);
(statearr_26506_26525[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (9)))
{var inst_26474 = (state_26494[(8)]);var state_26494__$1 = state_26494;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26494__$1,(11),out,inst_26474);
} else
{if((state_val_26495 === (5)))
{var inst_26488 = cljs.core.async.close_BANG_(out);var state_26494__$1 = state_26494;var statearr_26507_26526 = state_26494__$1;(statearr_26507_26526[(2)] = inst_26488);
(statearr_26507_26526[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (10)))
{var inst_26486 = (state_26494[(2)]);var state_26494__$1 = state_26494;var statearr_26508_26527 = state_26494__$1;(statearr_26508_26527[(2)] = inst_26486);
(statearr_26508_26527[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26495 === (8)))
{var inst_26473 = (state_26494[(7)]);var inst_26466 = (state_26494[(10)]);var inst_26475 = (state_26494[(9)]);var inst_26474 = (state_26494[(8)]);var inst_26478 = (function (){var c = inst_26475;var v = inst_26474;var vec__26471 = inst_26473;var cs = inst_26466;return ((function (c,v,vec__26471,cs,inst_26473,inst_26466,inst_26475,inst_26474,state_val_26495,c__12292__auto___26518,out){
return (function (p1__26409_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26409_SHARP_);
});
;})(c,v,vec__26471,cs,inst_26473,inst_26466,inst_26475,inst_26474,state_val_26495,c__12292__auto___26518,out))
})();var inst_26479 = cljs.core.filterv(inst_26478,inst_26466);var inst_26466__$1 = inst_26479;var state_26494__$1 = (function (){var statearr_26509 = state_26494;(statearr_26509[(10)] = inst_26466__$1);
return statearr_26509;
})();var statearr_26510_26528 = state_26494__$1;(statearr_26510_26528[(2)] = null);
(statearr_26510_26528[(1)] = (2));
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
});})(c__12292__auto___26518,out))
;return ((function (switch__12277__auto__,c__12292__auto___26518,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26514 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26514[(0)] = state_machine__12278__auto__);
(statearr_26514[(1)] = (1));
return statearr_26514;
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
}catch (e26515){if((e26515 instanceof Object))
{var ex__12281__auto__ = e26515;var statearr_26516_26529 = state_26494;(statearr_26516_26529[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26494);
return cljs.core.constant$keyword$82;
} else
{throw e26515;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26530 = state_26494;
state_26494 = G__26530;
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
;})(switch__12277__auto__,c__12292__auto___26518,out))
})();var state__12294__auto__ = (function (){var statearr_26517 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26518);
return statearr_26517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26518,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26626,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26626,out){
return (function (state_26603){var state_val_26604 = (state_26603[(1)]);if((state_val_26604 === (7)))
{var inst_26585 = (state_26603[(7)]);var inst_26585__$1 = (state_26603[(2)]);var inst_26586 = (inst_26585__$1 == null);var inst_26587 = cljs.core.not(inst_26586);var state_26603__$1 = (function (){var statearr_26605 = state_26603;(statearr_26605[(7)] = inst_26585__$1);
return statearr_26605;
})();if(inst_26587)
{var statearr_26606_26627 = state_26603__$1;(statearr_26606_26627[(1)] = (8));
} else
{var statearr_26607_26628 = state_26603__$1;(statearr_26607_26628[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (1)))
{var inst_26580 = (0);var state_26603__$1 = (function (){var statearr_26608 = state_26603;(statearr_26608[(8)] = inst_26580);
return statearr_26608;
})();var statearr_26609_26629 = state_26603__$1;(statearr_26609_26629[(2)] = null);
(statearr_26609_26629[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (4)))
{var state_26603__$1 = state_26603;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26603__$1,(7),ch);
} else
{if((state_val_26604 === (6)))
{var inst_26598 = (state_26603[(2)]);var state_26603__$1 = state_26603;var statearr_26610_26630 = state_26603__$1;(statearr_26610_26630[(2)] = inst_26598);
(statearr_26610_26630[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (3)))
{var inst_26600 = (state_26603[(2)]);var inst_26601 = cljs.core.async.close_BANG_(out);var state_26603__$1 = (function (){var statearr_26611 = state_26603;(statearr_26611[(9)] = inst_26600);
return statearr_26611;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26603__$1,inst_26601);
} else
{if((state_val_26604 === (2)))
{var inst_26580 = (state_26603[(8)]);var inst_26582 = (inst_26580 < n);var state_26603__$1 = state_26603;if(cljs.core.truth_(inst_26582))
{var statearr_26612_26631 = state_26603__$1;(statearr_26612_26631[(1)] = (4));
} else
{var statearr_26613_26632 = state_26603__$1;(statearr_26613_26632[(1)] = (5));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (11)))
{var inst_26580 = (state_26603[(8)]);var inst_26590 = (state_26603[(2)]);var inst_26591 = (inst_26580 + (1));var inst_26580__$1 = inst_26591;var state_26603__$1 = (function (){var statearr_26614 = state_26603;(statearr_26614[(8)] = inst_26580__$1);
(statearr_26614[(10)] = inst_26590);
return statearr_26614;
})();var statearr_26615_26633 = state_26603__$1;(statearr_26615_26633[(2)] = null);
(statearr_26615_26633[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (9)))
{var state_26603__$1 = state_26603;var statearr_26616_26634 = state_26603__$1;(statearr_26616_26634[(2)] = null);
(statearr_26616_26634[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (5)))
{var state_26603__$1 = state_26603;var statearr_26617_26635 = state_26603__$1;(statearr_26617_26635[(2)] = null);
(statearr_26617_26635[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (10)))
{var inst_26595 = (state_26603[(2)]);var state_26603__$1 = state_26603;var statearr_26618_26636 = state_26603__$1;(statearr_26618_26636[(2)] = inst_26595);
(statearr_26618_26636[(1)] = (6));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26604 === (8)))
{var inst_26585 = (state_26603[(7)]);var state_26603__$1 = state_26603;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26603__$1,(11),out,inst_26585);
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
});})(c__12292__auto___26626,out))
;return ((function (switch__12277__auto__,c__12292__auto___26626,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26622 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26622[(0)] = state_machine__12278__auto__);
(statearr_26622[(1)] = (1));
return statearr_26622;
});
var state_machine__12278__auto____1 = (function (state_26603){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26603);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object))
{var ex__12281__auto__ = e26623;var statearr_26624_26637 = state_26603;(statearr_26624_26637[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26603);
return cljs.core.constant$keyword$82;
} else
{throw e26623;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26638 = state_26603;
state_26603 = G__26638;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26626,out))
})();var state__12294__auto__ = (function (){var statearr_26625 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26626);
return statearr_26625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26626,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26651 = (function (ch,f,map_LT_,meta26652){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26652 = meta26652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26651.cljs$lang$type = true;
cljs.core.async.t26651.cljs$lang$ctorStr = "cljs.core.async/t26651";
cljs.core.async.t26651.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26651");
});
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t26654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26654 = (function (fn1,_,meta26652,ch,f,map_LT_,meta26655){
this.fn1 = fn1;
this._ = _;
this.meta26652 = meta26652;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26655 = meta26655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26654.cljs$lang$type = true;
cljs.core.async.t26654.cljs$lang$ctorStr = "cljs.core.async/t26654";
cljs.core.async.t26654.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26654");
});})(___$1))
;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t26654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26639_SHARP_){var G__26657 = (((p1__26639_SHARP_ == null))?null:(function (){var G__26658 = p1__26639_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26658) : self__.f.call(null,G__26658));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26657) : f1.call(null,G__26657));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26656){var self__ = this;
var _26656__$1 = this;return self__.meta26655;
});})(___$1))
;
cljs.core.async.t26654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26656,meta26655__$1){var self__ = this;
var _26656__$1 = this;return (new cljs.core.async.t26654(self__.fn1,self__._,self__.meta26652,self__.ch,self__.f,self__.map_LT_,meta26655__$1));
});})(___$1))
;
cljs.core.async.__GT_t26654 = ((function (___$1){
return (function __GT_t26654(fn1__$1,___$2,meta26652__$1,ch__$2,f__$2,map_LT___$2,meta26655){return (new cljs.core.async.t26654(fn1__$1,___$2,meta26652__$1,ch__$2,f__$2,map_LT___$2,meta26655));
});})(___$1))
;
}
return (new cljs.core.async.t26654(fn1,___$1,self__.meta26652,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__26659 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26659) : cljs.core.deref.call(null,G__26659));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__26660 = (function (){var G__26661 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26661) : cljs.core.deref.call(null,G__26661));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26660) : self__.f.call(null,G__26660));
})());
} else
{return ret;
}
});
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26653){var self__ = this;
var _26653__$1 = this;return self__.meta26652;
});
cljs.core.async.t26651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26653,meta26652__$1){var self__ = this;
var _26653__$1 = this;return (new cljs.core.async.t26651(self__.ch,self__.f,self__.map_LT_,meta26652__$1));
});
cljs.core.async.__GT_t26651 = (function __GT_t26651(ch__$1,f__$1,map_LT___$1,meta26652){return (new cljs.core.async.t26651(ch__$1,f__$1,map_LT___$1,meta26652));
});
}
return (new cljs.core.async.t26651(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26666 = (function (ch,f,map_GT_,meta26667){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26667 = meta26667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26666.cljs$lang$type = true;
cljs.core.async.t26666.cljs$lang$ctorStr = "cljs.core.async/t26666";
cljs.core.async.t26666.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26666");
});
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26669 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26669) : self__.f.call(null,G__26669));
})(),fn1);
});
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26668){var self__ = this;
var _26668__$1 = this;return self__.meta26667;
});
cljs.core.async.t26666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26668,meta26667__$1){var self__ = this;
var _26668__$1 = this;return (new cljs.core.async.t26666(self__.ch,self__.f,self__.map_GT_,meta26667__$1));
});
cljs.core.async.__GT_t26666 = (function __GT_t26666(ch__$1,f__$1,map_GT___$1,meta26667){return (new cljs.core.async.t26666(ch__$1,f__$1,map_GT___$1,meta26667));
});
}
return (new cljs.core.async.t26666(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26674 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26674 = (function (ch,p,filter_GT_,meta26675){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26675 = meta26675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26674.cljs$lang$type = true;
cljs.core.async.t26674.cljs$lang$ctorStr = "cljs.core.async/t26674";
cljs.core.async.t26674.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26674");
});
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__26677 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26677) : self__.p.call(null,G__26677));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t26674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t26674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26676){var self__ = this;
var _26676__$1 = this;return self__.meta26675;
});
cljs.core.async.t26674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26676,meta26675__$1){var self__ = this;
var _26676__$1 = this;return (new cljs.core.async.t26674(self__.ch,self__.p,self__.filter_GT_,meta26675__$1));
});
cljs.core.async.__GT_t26674 = (function __GT_t26674(ch__$1,p__$1,filter_GT___$1,meta26675){return (new cljs.core.async.t26674(ch__$1,p__$1,filter_GT___$1,meta26675));
});
}
return (new cljs.core.async.t26674(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___26765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___26765,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___26765,out){
return (function (state_26743){var state_val_26744 = (state_26743[(1)]);if((state_val_26744 === (7)))
{var inst_26739 = (state_26743[(2)]);var state_26743__$1 = state_26743;var statearr_26745_26766 = state_26743__$1;(statearr_26745_26766[(2)] = inst_26739);
(statearr_26745_26766[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (1)))
{var state_26743__$1 = state_26743;var statearr_26746_26767 = state_26743__$1;(statearr_26746_26767[(2)] = null);
(statearr_26746_26767[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (4)))
{var inst_26725 = (state_26743[(7)]);var inst_26725__$1 = (state_26743[(2)]);var inst_26726 = (inst_26725__$1 == null);var state_26743__$1 = (function (){var statearr_26747 = state_26743;(statearr_26747[(7)] = inst_26725__$1);
return statearr_26747;
})();if(cljs.core.truth_(inst_26726))
{var statearr_26748_26768 = state_26743__$1;(statearr_26748_26768[(1)] = (5));
} else
{var statearr_26749_26769 = state_26743__$1;(statearr_26749_26769[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (6)))
{var inst_26725 = (state_26743[(7)]);var inst_26730 = (function (){var G__26750 = inst_26725;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26750) : p.call(null,G__26750));
})();var state_26743__$1 = state_26743;if(cljs.core.truth_(inst_26730))
{var statearr_26751_26770 = state_26743__$1;(statearr_26751_26770[(1)] = (8));
} else
{var statearr_26752_26771 = state_26743__$1;(statearr_26752_26771[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (3)))
{var inst_26741 = (state_26743[(2)]);var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.return_chan(state_26743__$1,inst_26741);
} else
{if((state_val_26744 === (2)))
{var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26743__$1,(4),ch);
} else
{if((state_val_26744 === (11)))
{var inst_26733 = (state_26743[(2)]);var state_26743__$1 = state_26743;var statearr_26753_26772 = state_26743__$1;(statearr_26753_26772[(2)] = inst_26733);
(statearr_26753_26772[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (9)))
{var state_26743__$1 = state_26743;var statearr_26754_26773 = state_26743__$1;(statearr_26754_26773[(2)] = null);
(statearr_26754_26773[(1)] = (10));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (5)))
{var inst_26728 = cljs.core.async.close_BANG_(out);var state_26743__$1 = state_26743;var statearr_26755_26774 = state_26743__$1;(statearr_26755_26774[(2)] = inst_26728);
(statearr_26755_26774[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (10)))
{var inst_26736 = (state_26743[(2)]);var state_26743__$1 = (function (){var statearr_26756 = state_26743;(statearr_26756[(8)] = inst_26736);
return statearr_26756;
})();var statearr_26757_26775 = state_26743__$1;(statearr_26757_26775[(2)] = null);
(statearr_26757_26775[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26744 === (8)))
{var inst_26725 = (state_26743[(7)]);var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26743__$1,(11),out,inst_26725);
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
});})(c__12292__auto___26765,out))
;return ((function (switch__12277__auto__,c__12292__auto___26765,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_26761 = [null,null,null,null,null,null,null,null,null];(statearr_26761[(0)] = state_machine__12278__auto__);
(statearr_26761[(1)] = (1));
return statearr_26761;
});
var state_machine__12278__auto____1 = (function (state_26743){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26743);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object))
{var ex__12281__auto__ = e26762;var statearr_26763_26776 = state_26743;(statearr_26763_26776[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26743);
return cljs.core.constant$keyword$82;
} else
{throw e26762;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__26777 = state_26743;
state_26743 = G__26777;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___26765,out))
})();var state__12294__auto__ = (function (){var statearr_26764 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___26765);
return statearr_26764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___26765,out))
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
return (function (state_26947){var state_val_26948 = (state_26947[(1)]);if((state_val_26948 === (7)))
{var inst_26943 = (state_26947[(2)]);var state_26947__$1 = state_26947;var statearr_26949_26991 = state_26947__$1;(statearr_26949_26991[(2)] = inst_26943);
(statearr_26949_26991[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (20)))
{var inst_26913 = (state_26947[(7)]);var inst_26924 = (state_26947[(2)]);var inst_26925 = cljs.core.next(inst_26913);var inst_26899 = inst_26925;var inst_26900 = null;var inst_26901 = (0);var inst_26902 = (0);var state_26947__$1 = (function (){var statearr_26950 = state_26947;(statearr_26950[(8)] = inst_26901);
(statearr_26950[(9)] = inst_26924);
(statearr_26950[(10)] = inst_26902);
(statearr_26950[(11)] = inst_26899);
(statearr_26950[(12)] = inst_26900);
return statearr_26950;
})();var statearr_26951_26992 = state_26947__$1;(statearr_26951_26992[(2)] = null);
(statearr_26951_26992[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (1)))
{var state_26947__$1 = state_26947;var statearr_26952_26993 = state_26947__$1;(statearr_26952_26993[(2)] = null);
(statearr_26952_26993[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (4)))
{var inst_26888 = (state_26947[(13)]);var inst_26888__$1 = (state_26947[(2)]);var inst_26889 = (inst_26888__$1 == null);var state_26947__$1 = (function (){var statearr_26953 = state_26947;(statearr_26953[(13)] = inst_26888__$1);
return statearr_26953;
})();if(cljs.core.truth_(inst_26889))
{var statearr_26954_26994 = state_26947__$1;(statearr_26954_26994[(1)] = (5));
} else
{var statearr_26955_26995 = state_26947__$1;(statearr_26955_26995[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (15)))
{var state_26947__$1 = state_26947;var statearr_26959_26996 = state_26947__$1;(statearr_26959_26996[(2)] = null);
(statearr_26959_26996[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (21)))
{var state_26947__$1 = state_26947;var statearr_26960_26997 = state_26947__$1;(statearr_26960_26997[(2)] = null);
(statearr_26960_26997[(1)] = (23));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (13)))
{var inst_26901 = (state_26947[(8)]);var inst_26902 = (state_26947[(10)]);var inst_26899 = (state_26947[(11)]);var inst_26900 = (state_26947[(12)]);var inst_26909 = (state_26947[(2)]);var inst_26910 = (inst_26902 + (1));var tmp26956 = inst_26901;var tmp26957 = inst_26899;var tmp26958 = inst_26900;var inst_26899__$1 = tmp26957;var inst_26900__$1 = tmp26958;var inst_26901__$1 = tmp26956;var inst_26902__$1 = inst_26910;var state_26947__$1 = (function (){var statearr_26961 = state_26947;(statearr_26961[(8)] = inst_26901__$1);
(statearr_26961[(10)] = inst_26902__$1);
(statearr_26961[(14)] = inst_26909);
(statearr_26961[(11)] = inst_26899__$1);
(statearr_26961[(12)] = inst_26900__$1);
return statearr_26961;
})();var statearr_26962_26998 = state_26947__$1;(statearr_26962_26998[(2)] = null);
(statearr_26962_26998[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (22)))
{var state_26947__$1 = state_26947;var statearr_26963_26999 = state_26947__$1;(statearr_26963_26999[(2)] = null);
(statearr_26963_26999[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (6)))
{var inst_26888 = (state_26947[(13)]);var inst_26897 = (function (){var G__26964 = inst_26888;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26964) : f.call(null,G__26964));
})();var inst_26898 = cljs.core.seq(inst_26897);var inst_26899 = inst_26898;var inst_26900 = null;var inst_26901 = (0);var inst_26902 = (0);var state_26947__$1 = (function (){var statearr_26965 = state_26947;(statearr_26965[(8)] = inst_26901);
(statearr_26965[(10)] = inst_26902);
(statearr_26965[(11)] = inst_26899);
(statearr_26965[(12)] = inst_26900);
return statearr_26965;
})();var statearr_26966_27000 = state_26947__$1;(statearr_26966_27000[(2)] = null);
(statearr_26966_27000[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (17)))
{var inst_26913 = (state_26947[(7)]);var inst_26917 = cljs.core.chunk_first(inst_26913);var inst_26918 = cljs.core.chunk_rest(inst_26913);var inst_26919 = cljs.core.count(inst_26917);var inst_26899 = inst_26918;var inst_26900 = inst_26917;var inst_26901 = inst_26919;var inst_26902 = (0);var state_26947__$1 = (function (){var statearr_26967 = state_26947;(statearr_26967[(8)] = inst_26901);
(statearr_26967[(10)] = inst_26902);
(statearr_26967[(11)] = inst_26899);
(statearr_26967[(12)] = inst_26900);
return statearr_26967;
})();var statearr_26968_27001 = state_26947__$1;(statearr_26968_27001[(2)] = null);
(statearr_26968_27001[(1)] = (8));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (3)))
{var inst_26945 = (state_26947[(2)]);var state_26947__$1 = state_26947;return cljs.core.async.impl.ioc_helpers.return_chan(state_26947__$1,inst_26945);
} else
{if((state_val_26948 === (12)))
{var inst_26933 = (state_26947[(2)]);var state_26947__$1 = state_26947;var statearr_26969_27002 = state_26947__$1;(statearr_26969_27002[(2)] = inst_26933);
(statearr_26969_27002[(1)] = (9));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (2)))
{var state_26947__$1 = state_26947;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26947__$1,(4),in$);
} else
{if((state_val_26948 === (23)))
{var inst_26941 = (state_26947[(2)]);var state_26947__$1 = state_26947;var statearr_26970_27003 = state_26947__$1;(statearr_26970_27003[(2)] = inst_26941);
(statearr_26970_27003[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (19)))
{var inst_26928 = (state_26947[(2)]);var state_26947__$1 = state_26947;var statearr_26971_27004 = state_26947__$1;(statearr_26971_27004[(2)] = inst_26928);
(statearr_26971_27004[(1)] = (16));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (11)))
{var inst_26913 = (state_26947[(7)]);var inst_26899 = (state_26947[(11)]);var inst_26913__$1 = cljs.core.seq(inst_26899);var state_26947__$1 = (function (){var statearr_26972 = state_26947;(statearr_26972[(7)] = inst_26913__$1);
return statearr_26972;
})();if(inst_26913__$1)
{var statearr_26973_27005 = state_26947__$1;(statearr_26973_27005[(1)] = (14));
} else
{var statearr_26974_27006 = state_26947__$1;(statearr_26974_27006[(1)] = (15));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (9)))
{var inst_26935 = (state_26947[(2)]);var inst_26936 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_26947__$1 = (function (){var statearr_26975 = state_26947;(statearr_26975[(15)] = inst_26935);
return statearr_26975;
})();if(cljs.core.truth_(inst_26936))
{var statearr_26976_27007 = state_26947__$1;(statearr_26976_27007[(1)] = (21));
} else
{var statearr_26977_27008 = state_26947__$1;(statearr_26977_27008[(1)] = (22));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (5)))
{var inst_26891 = cljs.core.async.close_BANG_(out);var state_26947__$1 = state_26947;var statearr_26978_27009 = state_26947__$1;(statearr_26978_27009[(2)] = inst_26891);
(statearr_26978_27009[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (14)))
{var inst_26913 = (state_26947[(7)]);var inst_26915 = cljs.core.chunked_seq_QMARK_(inst_26913);var state_26947__$1 = state_26947;if(inst_26915)
{var statearr_26979_27010 = state_26947__$1;(statearr_26979_27010[(1)] = (17));
} else
{var statearr_26980_27011 = state_26947__$1;(statearr_26980_27011[(1)] = (18));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (16)))
{var inst_26931 = (state_26947[(2)]);var state_26947__$1 = state_26947;var statearr_26981_27012 = state_26947__$1;(statearr_26981_27012[(2)] = inst_26931);
(statearr_26981_27012[(1)] = (12));
return cljs.core.constant$keyword$82;
} else
{if((state_val_26948 === (10)))
{var inst_26902 = (state_26947[(10)]);var inst_26900 = (state_26947[(12)]);var inst_26907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26900,inst_26902);var state_26947__$1 = state_26947;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26947__$1,(13),out,inst_26907);
} else
{if((state_val_26948 === (18)))
{var inst_26913 = (state_26947[(7)]);var inst_26922 = cljs.core.first(inst_26913);var state_26947__$1 = state_26947;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26947__$1,(20),out,inst_26922);
} else
{if((state_val_26948 === (8)))
{var inst_26901 = (state_26947[(8)]);var inst_26902 = (state_26947[(10)]);var inst_26904 = (inst_26902 < inst_26901);var inst_26905 = inst_26904;var state_26947__$1 = state_26947;if(cljs.core.truth_(inst_26905))
{var statearr_26982_27013 = state_26947__$1;(statearr_26982_27013[(1)] = (10));
} else
{var statearr_26983_27014 = state_26947__$1;(statearr_26983_27014[(1)] = (11));
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
var state_machine__12278__auto____0 = (function (){var statearr_26987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26987[(0)] = state_machine__12278__auto__);
(statearr_26987[(1)] = (1));
return statearr_26987;
});
var state_machine__12278__auto____1 = (function (state_26947){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_26947);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e26988){if((e26988 instanceof Object))
{var ex__12281__auto__ = e26988;var statearr_26989_27015 = state_26947;(statearr_26989_27015[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26947);
return cljs.core.constant$keyword$82;
} else
{throw e26988;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27016 = state_26947;
state_26947 = G__27016;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_26947){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_26947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto__))
})();var state__12294__auto__ = (function (){var statearr_26990 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_26990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto__);
return statearr_26990;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27121,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27121,out){
return (function (state_27096){var state_val_27097 = (state_27096[(1)]);if((state_val_27097 === (7)))
{var inst_27091 = (state_27096[(2)]);var state_27096__$1 = state_27096;var statearr_27098_27122 = state_27096__$1;(statearr_27098_27122[(2)] = inst_27091);
(statearr_27098_27122[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (1)))
{var inst_27073 = null;var state_27096__$1 = (function (){var statearr_27099 = state_27096;(statearr_27099[(7)] = inst_27073);
return statearr_27099;
})();var statearr_27100_27123 = state_27096__$1;(statearr_27100_27123[(2)] = null);
(statearr_27100_27123[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (4)))
{var inst_27076 = (state_27096[(8)]);var inst_27076__$1 = (state_27096[(2)]);var inst_27077 = (inst_27076__$1 == null);var inst_27078 = cljs.core.not(inst_27077);var state_27096__$1 = (function (){var statearr_27101 = state_27096;(statearr_27101[(8)] = inst_27076__$1);
return statearr_27101;
})();if(inst_27078)
{var statearr_27102_27124 = state_27096__$1;(statearr_27102_27124[(1)] = (5));
} else
{var statearr_27103_27125 = state_27096__$1;(statearr_27103_27125[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (6)))
{var state_27096__$1 = state_27096;var statearr_27104_27126 = state_27096__$1;(statearr_27104_27126[(2)] = null);
(statearr_27104_27126[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (3)))
{var inst_27093 = (state_27096[(2)]);var inst_27094 = cljs.core.async.close_BANG_(out);var state_27096__$1 = (function (){var statearr_27105 = state_27096;(statearr_27105[(9)] = inst_27093);
return statearr_27105;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27096__$1,inst_27094);
} else
{if((state_val_27097 === (2)))
{var state_27096__$1 = state_27096;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27096__$1,(4),ch);
} else
{if((state_val_27097 === (11)))
{var inst_27076 = (state_27096[(8)]);var inst_27085 = (state_27096[(2)]);var inst_27073 = inst_27076;var state_27096__$1 = (function (){var statearr_27106 = state_27096;(statearr_27106[(7)] = inst_27073);
(statearr_27106[(10)] = inst_27085);
return statearr_27106;
})();var statearr_27107_27127 = state_27096__$1;(statearr_27107_27127[(2)] = null);
(statearr_27107_27127[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (9)))
{var inst_27076 = (state_27096[(8)]);var state_27096__$1 = state_27096;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27096__$1,(11),out,inst_27076);
} else
{if((state_val_27097 === (5)))
{var inst_27073 = (state_27096[(7)]);var inst_27076 = (state_27096[(8)]);var inst_27080 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27076,inst_27073);var state_27096__$1 = state_27096;if(inst_27080)
{var statearr_27109_27128 = state_27096__$1;(statearr_27109_27128[(1)] = (8));
} else
{var statearr_27110_27129 = state_27096__$1;(statearr_27110_27129[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (10)))
{var inst_27088 = (state_27096[(2)]);var state_27096__$1 = state_27096;var statearr_27111_27130 = state_27096__$1;(statearr_27111_27130[(2)] = inst_27088);
(statearr_27111_27130[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27097 === (8)))
{var inst_27073 = (state_27096[(7)]);var tmp27108 = inst_27073;var inst_27073__$1 = tmp27108;var state_27096__$1 = (function (){var statearr_27112 = state_27096;(statearr_27112[(7)] = inst_27073__$1);
return statearr_27112;
})();var statearr_27113_27131 = state_27096__$1;(statearr_27113_27131[(2)] = null);
(statearr_27113_27131[(1)] = (2));
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
});})(c__12292__auto___27121,out))
;return ((function (switch__12277__auto__,c__12292__auto___27121,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27117[(0)] = state_machine__12278__auto__);
(statearr_27117[(1)] = (1));
return statearr_27117;
});
var state_machine__12278__auto____1 = (function (state_27096){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27096);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object))
{var ex__12281__auto__ = e27118;var statearr_27119_27132 = state_27096;(statearr_27119_27132[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27096);
return cljs.core.constant$keyword$82;
} else
{throw e27118;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27133 = state_27096;
state_27096 = G__27133;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27121,out))
})();var state__12294__auto__ = (function (){var statearr_27120 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27121);
return statearr_27120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27121,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27271,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27271,out){
return (function (state_27241){var state_val_27242 = (state_27241[(1)]);if((state_val_27242 === (7)))
{var inst_27237 = (state_27241[(2)]);var state_27241__$1 = state_27241;var statearr_27243_27272 = state_27241__$1;(statearr_27243_27272[(2)] = inst_27237);
(statearr_27243_27272[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (1)))
{var inst_27204 = (new Array(n));var inst_27205 = inst_27204;var inst_27206 = (0);var state_27241__$1 = (function (){var statearr_27244 = state_27241;(statearr_27244[(7)] = inst_27206);
(statearr_27244[(8)] = inst_27205);
return statearr_27244;
})();var statearr_27245_27273 = state_27241__$1;(statearr_27245_27273[(2)] = null);
(statearr_27245_27273[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (4)))
{var inst_27209 = (state_27241[(9)]);var inst_27209__$1 = (state_27241[(2)]);var inst_27210 = (inst_27209__$1 == null);var inst_27211 = cljs.core.not(inst_27210);var state_27241__$1 = (function (){var statearr_27246 = state_27241;(statearr_27246[(9)] = inst_27209__$1);
return statearr_27246;
})();if(inst_27211)
{var statearr_27247_27274 = state_27241__$1;(statearr_27247_27274[(1)] = (5));
} else
{var statearr_27248_27275 = state_27241__$1;(statearr_27248_27275[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (15)))
{var inst_27231 = (state_27241[(2)]);var state_27241__$1 = state_27241;var statearr_27249_27276 = state_27241__$1;(statearr_27249_27276[(2)] = inst_27231);
(statearr_27249_27276[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (13)))
{var state_27241__$1 = state_27241;var statearr_27250_27277 = state_27241__$1;(statearr_27250_27277[(2)] = null);
(statearr_27250_27277[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (6)))
{var inst_27206 = (state_27241[(7)]);var inst_27227 = (inst_27206 > (0));var state_27241__$1 = state_27241;if(cljs.core.truth_(inst_27227))
{var statearr_27251_27278 = state_27241__$1;(statearr_27251_27278[(1)] = (12));
} else
{var statearr_27252_27279 = state_27241__$1;(statearr_27252_27279[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (3)))
{var inst_27239 = (state_27241[(2)]);var state_27241__$1 = state_27241;return cljs.core.async.impl.ioc_helpers.return_chan(state_27241__$1,inst_27239);
} else
{if((state_val_27242 === (12)))
{var inst_27205 = (state_27241[(8)]);var inst_27229 = cljs.core.vec(inst_27205);var state_27241__$1 = state_27241;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27241__$1,(15),out,inst_27229);
} else
{if((state_val_27242 === (2)))
{var state_27241__$1 = state_27241;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27241__$1,(4),ch);
} else
{if((state_val_27242 === (11)))
{var inst_27221 = (state_27241[(2)]);var inst_27222 = (new Array(n));var inst_27205 = inst_27222;var inst_27206 = (0);var state_27241__$1 = (function (){var statearr_27253 = state_27241;(statearr_27253[(10)] = inst_27221);
(statearr_27253[(7)] = inst_27206);
(statearr_27253[(8)] = inst_27205);
return statearr_27253;
})();var statearr_27254_27280 = state_27241__$1;(statearr_27254_27280[(2)] = null);
(statearr_27254_27280[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (9)))
{var inst_27205 = (state_27241[(8)]);var inst_27219 = cljs.core.vec(inst_27205);var state_27241__$1 = state_27241;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27241__$1,(11),out,inst_27219);
} else
{if((state_val_27242 === (5)))
{var inst_27209 = (state_27241[(9)]);var inst_27214 = (state_27241[(11)]);var inst_27206 = (state_27241[(7)]);var inst_27205 = (state_27241[(8)]);var inst_27213 = (inst_27205[inst_27206] = inst_27209);var inst_27214__$1 = (inst_27206 + (1));var inst_27215 = (inst_27214__$1 < n);var state_27241__$1 = (function (){var statearr_27255 = state_27241;(statearr_27255[(12)] = inst_27213);
(statearr_27255[(11)] = inst_27214__$1);
return statearr_27255;
})();if(cljs.core.truth_(inst_27215))
{var statearr_27256_27281 = state_27241__$1;(statearr_27256_27281[(1)] = (8));
} else
{var statearr_27257_27282 = state_27241__$1;(statearr_27257_27282[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (14)))
{var inst_27234 = (state_27241[(2)]);var inst_27235 = cljs.core.async.close_BANG_(out);var state_27241__$1 = (function (){var statearr_27259 = state_27241;(statearr_27259[(13)] = inst_27234);
return statearr_27259;
})();var statearr_27260_27283 = state_27241__$1;(statearr_27260_27283[(2)] = inst_27235);
(statearr_27260_27283[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (10)))
{var inst_27225 = (state_27241[(2)]);var state_27241__$1 = state_27241;var statearr_27261_27284 = state_27241__$1;(statearr_27261_27284[(2)] = inst_27225);
(statearr_27261_27284[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27242 === (8)))
{var inst_27214 = (state_27241[(11)]);var inst_27205 = (state_27241[(8)]);var tmp27258 = inst_27205;var inst_27205__$1 = tmp27258;var inst_27206 = inst_27214;var state_27241__$1 = (function (){var statearr_27262 = state_27241;(statearr_27262[(7)] = inst_27206);
(statearr_27262[(8)] = inst_27205__$1);
return statearr_27262;
})();var statearr_27263_27285 = state_27241__$1;(statearr_27263_27285[(2)] = null);
(statearr_27263_27285[(1)] = (2));
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
});})(c__12292__auto___27271,out))
;return ((function (switch__12277__auto__,c__12292__auto___27271,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27267[(0)] = state_machine__12278__auto__);
(statearr_27267[(1)] = (1));
return statearr_27267;
});
var state_machine__12278__auto____1 = (function (state_27241){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27241);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27268){if((e27268 instanceof Object))
{var ex__12281__auto__ = e27268;var statearr_27269_27286 = state_27241;(statearr_27269_27286[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27241);
return cljs.core.constant$keyword$82;
} else
{throw e27268;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27287 = state_27241;
state_27241 = G__27287;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27271,out))
})();var state__12294__auto__ = (function (){var statearr_27270 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27271);
return statearr_27270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27271,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12292__auto___27435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12292__auto___27435,out){
return (function (){var f__12293__auto__ = (function (){var switch__12277__auto__ = ((function (c__12292__auto___27435,out){
return (function (state_27404){var state_val_27405 = (state_27404[(1)]);if((state_val_27405 === (7)))
{var inst_27400 = (state_27404[(2)]);var state_27404__$1 = state_27404;var statearr_27406_27436 = state_27404__$1;(statearr_27406_27436[(2)] = inst_27400);
(statearr_27406_27436[(1)] = (3));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (1)))
{var inst_27363 = [];var inst_27364 = inst_27363;var inst_27365 = cljs.core.constant$keyword$97;var state_27404__$1 = (function (){var statearr_27407 = state_27404;(statearr_27407[(7)] = inst_27365);
(statearr_27407[(8)] = inst_27364);
return statearr_27407;
})();var statearr_27408_27437 = state_27404__$1;(statearr_27408_27437[(2)] = null);
(statearr_27408_27437[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (4)))
{var inst_27368 = (state_27404[(9)]);var inst_27368__$1 = (state_27404[(2)]);var inst_27369 = (inst_27368__$1 == null);var inst_27370 = cljs.core.not(inst_27369);var state_27404__$1 = (function (){var statearr_27409 = state_27404;(statearr_27409[(9)] = inst_27368__$1);
return statearr_27409;
})();if(inst_27370)
{var statearr_27410_27438 = state_27404__$1;(statearr_27410_27438[(1)] = (5));
} else
{var statearr_27411_27439 = state_27404__$1;(statearr_27411_27439[(1)] = (6));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (15)))
{var inst_27394 = (state_27404[(2)]);var state_27404__$1 = state_27404;var statearr_27412_27440 = state_27404__$1;(statearr_27412_27440[(2)] = inst_27394);
(statearr_27412_27440[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (13)))
{var state_27404__$1 = state_27404;var statearr_27413_27441 = state_27404__$1;(statearr_27413_27441[(2)] = null);
(statearr_27413_27441[(1)] = (14));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (6)))
{var inst_27364 = (state_27404[(8)]);var inst_27389 = inst_27364.length;var inst_27390 = (inst_27389 > (0));var state_27404__$1 = state_27404;if(cljs.core.truth_(inst_27390))
{var statearr_27414_27442 = state_27404__$1;(statearr_27414_27442[(1)] = (12));
} else
{var statearr_27415_27443 = state_27404__$1;(statearr_27415_27443[(1)] = (13));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (3)))
{var inst_27402 = (state_27404[(2)]);var state_27404__$1 = state_27404;return cljs.core.async.impl.ioc_helpers.return_chan(state_27404__$1,inst_27402);
} else
{if((state_val_27405 === (12)))
{var inst_27364 = (state_27404[(8)]);var inst_27392 = cljs.core.vec(inst_27364);var state_27404__$1 = state_27404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27404__$1,(15),out,inst_27392);
} else
{if((state_val_27405 === (2)))
{var state_27404__$1 = state_27404;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27404__$1,(4),ch);
} else
{if((state_val_27405 === (11)))
{var inst_27368 = (state_27404[(9)]);var inst_27372 = (state_27404[(10)]);var inst_27382 = (state_27404[(2)]);var inst_27383 = [];var inst_27384 = inst_27383.push(inst_27368);var inst_27364 = inst_27383;var inst_27365 = inst_27372;var state_27404__$1 = (function (){var statearr_27416 = state_27404;(statearr_27416[(11)] = inst_27384);
(statearr_27416[(7)] = inst_27365);
(statearr_27416[(12)] = inst_27382);
(statearr_27416[(8)] = inst_27364);
return statearr_27416;
})();var statearr_27417_27444 = state_27404__$1;(statearr_27417_27444[(2)] = null);
(statearr_27417_27444[(1)] = (2));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (9)))
{var inst_27364 = (state_27404[(8)]);var inst_27380 = cljs.core.vec(inst_27364);var state_27404__$1 = state_27404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27404__$1,(11),out,inst_27380);
} else
{if((state_val_27405 === (5)))
{var inst_27365 = (state_27404[(7)]);var inst_27368 = (state_27404[(9)]);var inst_27372 = (state_27404[(10)]);var inst_27372__$1 = (function (){var G__27418 = inst_27368;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27418) : f.call(null,G__27418));
})();var inst_27373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27372__$1,inst_27365);var inst_27374 = cljs.core.keyword_identical_QMARK_(inst_27365,cljs.core.constant$keyword$97);var inst_27375 = (inst_27373) || (inst_27374);var state_27404__$1 = (function (){var statearr_27419 = state_27404;(statearr_27419[(10)] = inst_27372__$1);
return statearr_27419;
})();if(cljs.core.truth_(inst_27375))
{var statearr_27420_27445 = state_27404__$1;(statearr_27420_27445[(1)] = (8));
} else
{var statearr_27421_27446 = state_27404__$1;(statearr_27421_27446[(1)] = (9));
}
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (14)))
{var inst_27397 = (state_27404[(2)]);var inst_27398 = cljs.core.async.close_BANG_(out);var state_27404__$1 = (function (){var statearr_27423 = state_27404;(statearr_27423[(13)] = inst_27397);
return statearr_27423;
})();var statearr_27424_27447 = state_27404__$1;(statearr_27424_27447[(2)] = inst_27398);
(statearr_27424_27447[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (10)))
{var inst_27387 = (state_27404[(2)]);var state_27404__$1 = state_27404;var statearr_27425_27448 = state_27404__$1;(statearr_27425_27448[(2)] = inst_27387);
(statearr_27425_27448[(1)] = (7));
return cljs.core.constant$keyword$82;
} else
{if((state_val_27405 === (8)))
{var inst_27368 = (state_27404[(9)]);var inst_27364 = (state_27404[(8)]);var inst_27372 = (state_27404[(10)]);var inst_27377 = inst_27364.push(inst_27368);var tmp27422 = inst_27364;var inst_27364__$1 = tmp27422;var inst_27365 = inst_27372;var state_27404__$1 = (function (){var statearr_27426 = state_27404;(statearr_27426[(7)] = inst_27365);
(statearr_27426[(8)] = inst_27364__$1);
(statearr_27426[(14)] = inst_27377);
return statearr_27426;
})();var statearr_27427_27449 = state_27404__$1;(statearr_27427_27449[(2)] = null);
(statearr_27427_27449[(1)] = (2));
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
});})(c__12292__auto___27435,out))
;return ((function (switch__12277__auto__,c__12292__auto___27435,out){
return (function() {
var state_machine__12278__auto__ = null;
var state_machine__12278__auto____0 = (function (){var statearr_27431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27431[(0)] = state_machine__12278__auto__);
(statearr_27431[(1)] = (1));
return statearr_27431;
});
var state_machine__12278__auto____1 = (function (state_27404){while(true){
var ret_value__12279__auto__ = (function (){try{while(true){
var result__12280__auto__ = switch__12277__auto__(state_27404);if(cljs.core.keyword_identical_QMARK_(result__12280__auto__,cljs.core.constant$keyword$82))
{{
continue;
}
} else
{return result__12280__auto__;
}
break;
}
}catch (e27432){if((e27432 instanceof Object))
{var ex__12281__auto__ = e27432;var statearr_27433_27450 = state_27404;(statearr_27433_27450[(5)] = ex__12281__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27404);
return cljs.core.constant$keyword$82;
} else
{throw e27432;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12279__auto__,cljs.core.constant$keyword$82))
{{
var G__27451 = state_27404;
state_27404 = G__27451;
continue;
}
} else
{return ret_value__12279__auto__;
}
break;
}
});
state_machine__12278__auto__ = function(state_27404){
switch(arguments.length){
case 0:
return state_machine__12278__auto____0.call(this);
case 1:
return state_machine__12278__auto____1.call(this,state_27404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12278__auto____0;
state_machine__12278__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12278__auto____1;
return state_machine__12278__auto__;
})()
;})(switch__12277__auto__,c__12292__auto___27435,out))
})();var state__12294__auto__ = (function (){var statearr_27434 = (function (){return (f__12293__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12293__auto__.cljs$core$IFn$_invoke$arity$0() : f__12293__auto__.call(null));
})();(statearr_27434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12292__auto___27435);
return statearr_27434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12294__auto__);
});})(c__12292__auto___27435,out))
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
