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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22182 = (function (f,fn_handler,meta22183){
this.f = f;
this.fn_handler = fn_handler;
this.meta22183 = meta22183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22182.cljs$lang$type = true;
cljs.core.async.t22182.cljs$lang$ctorStr = "cljs.core.async/t22182";
cljs.core.async.t22182.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22182");
});
cljs.core.async.t22182.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22184){var self__ = this;
var _22184__$1 = this;return self__.meta22183;
});
cljs.core.async.t22182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22184,meta22183__$1){var self__ = this;
var _22184__$1 = this;return (new cljs.core.async.t22182(self__.f,self__.fn_handler,meta22183__$1));
});
cljs.core.async.__GT_t22182 = (function __GT_t22182(f__$1,fn_handler__$1,meta22183){return (new cljs.core.async.t22182(f__$1,fn_handler__$1,meta22183));
});
}
return (new cljs.core.async.t22182(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22186 = buff;if(G__22186)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22186.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22186.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22186);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22186);
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
{var val_22203 = (function (){var G__22200 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22200) : cljs.core.deref.call(null,G__22200));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22201_22204 = val_22203;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22201_22204) : fn1.call(null,G__22201_22204));
} else
{cljs.core.async.impl.dispatch.run(((function (val_22203,ret){
return (function (){var G__22202 = val_22203;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22202) : fn1.call(null,G__22202));
});})(val_22203,ret))
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
{var ret = temp__4124__auto__;var G__22213 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22213) : cljs.core.deref.call(null,G__22213));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__22214 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22214) : cljs.core.deref.call(null,G__22214));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22215_22217 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22215_22217) : fn1.call(null,G__22215_22217));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__22216 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22216) : fn1.call(null,G__22216));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___22218 = n;var x_22219 = (0);while(true){
if((x_22219 < n__4510__auto___22218))
{(a[x_22219] = (0));
{
var G__22220 = (x_22219 + (1));
x_22219 = G__22220;
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
var G__22221 = (i + (1));
i = G__22221;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__22229 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22229) : cljs.core.atom.call(null,G__22229));
})();if(typeof cljs.core.async.t22230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22230 = (function (flag,alt_flag,meta22231){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22231 = meta22231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22230.cljs$lang$type = true;
cljs.core.async.t22230.cljs$lang$ctorStr = "cljs.core.async/t22230";
cljs.core.async.t22230.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22230");
});})(flag))
;
cljs.core.async.t22230.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22233 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22233) : cljs.core.deref.call(null,G__22233));
});})(flag))
;
cljs.core.async.t22230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22234_22236 = self__.flag;var G__22235_22237 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22234_22236,G__22235_22237) : cljs.core.reset_BANG_.call(null,G__22234_22236,G__22235_22237));
return true;
});})(flag))
;
cljs.core.async.t22230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22232){var self__ = this;
var _22232__$1 = this;return self__.meta22231;
});})(flag))
;
cljs.core.async.t22230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22232,meta22231__$1){var self__ = this;
var _22232__$1 = this;return (new cljs.core.async.t22230(self__.flag,self__.alt_flag,meta22231__$1));
});})(flag))
;
cljs.core.async.__GT_t22230 = ((function (flag){
return (function __GT_t22230(flag__$1,alt_flag__$1,meta22231){return (new cljs.core.async.t22230(flag__$1,alt_flag__$1,meta22231));
});})(flag))
;
}
return (new cljs.core.async.t22230(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22241 = (function (cb,flag,alt_handler,meta22242){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22242 = meta22242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22241.cljs$lang$type = true;
cljs.core.async.t22241.cljs$lang$ctorStr = "cljs.core.async/t22241";
cljs.core.async.t22241.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22241");
});
cljs.core.async.t22241.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22243){var self__ = this;
var _22243__$1 = this;return self__.meta22242;
});
cljs.core.async.t22241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22243,meta22242__$1){var self__ = this;
var _22243__$1 = this;return (new cljs.core.async.t22241(self__.cb,self__.flag,self__.alt_handler,meta22242__$1));
});
cljs.core.async.__GT_t22241 = (function __GT_t22241(cb__$1,flag__$1,alt_handler__$1,meta22242){return (new cljs.core.async.t22241(cb__$1,flag__$1,alt_handler__$1,meta22242));
});
}
return (new cljs.core.async.t22241(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22251 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22251) : port.call(null,G__22251));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22252 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22252) : port.call(null,G__22252));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22244_SHARP_){var G__22253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22244_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22253) : fret.call(null,G__22253));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22245_SHARP_){var G__22254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22245_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22254) : fret.call(null,G__22254));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22255 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22255) : cljs.core.deref.call(null,G__22255));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22256 = (i + (1));
i = G__22256;
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
var alts_BANG___delegate = function (ports,p__22257){var map__22259 = p__22257;var map__22259__$1 = ((cljs.core.seq_QMARK_(map__22259))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22259):map__22259);var opts = map__22259__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22257 = null;if (arguments.length > 1) {
  p__22257 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22257);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22260){
var ports = cljs.core.first(arglist__22260);
var p__22257 = cljs.core.rest(arglist__22260);
return alts_BANG___delegate(ports,p__22257);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6485__auto___22358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___22358){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___22358){
return (function (state_22334){var state_val_22335 = (state_22334[(1)]);if((state_val_22335 === (7)))
{var inst_22330 = (state_22334[(2)]);var state_22334__$1 = state_22334;var statearr_22336_22359 = state_22334__$1;(statearr_22336_22359[(2)] = inst_22330);
(statearr_22336_22359[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (1)))
{var state_22334__$1 = state_22334;var statearr_22337_22360 = state_22334__$1;(statearr_22337_22360[(2)] = null);
(statearr_22337_22360[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (4)))
{var inst_22313 = (state_22334[(7)]);var inst_22313__$1 = (state_22334[(2)]);var inst_22314 = (inst_22313__$1 == null);var state_22334__$1 = (function (){var statearr_22338 = state_22334;(statearr_22338[(7)] = inst_22313__$1);
return statearr_22338;
})();if(cljs.core.truth_(inst_22314))
{var statearr_22339_22361 = state_22334__$1;(statearr_22339_22361[(1)] = (5));
} else
{var statearr_22340_22362 = state_22334__$1;(statearr_22340_22362[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (13)))
{var state_22334__$1 = state_22334;var statearr_22341_22363 = state_22334__$1;(statearr_22341_22363[(2)] = null);
(statearr_22341_22363[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (6)))
{var inst_22313 = (state_22334[(7)]);var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22334__$1,(11),to,inst_22313);
} else
{if((state_val_22335 === (3)))
{var inst_22332 = (state_22334[(2)]);var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.return_chan(state_22334__$1,inst_22332);
} else
{if((state_val_22335 === (12)))
{var state_22334__$1 = state_22334;var statearr_22342_22364 = state_22334__$1;(statearr_22342_22364[(2)] = null);
(statearr_22342_22364[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (2)))
{var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22334__$1,(4),from);
} else
{if((state_val_22335 === (11)))
{var inst_22323 = (state_22334[(2)]);var state_22334__$1 = state_22334;if(cljs.core.truth_(inst_22323))
{var statearr_22343_22365 = state_22334__$1;(statearr_22343_22365[(1)] = (12));
} else
{var statearr_22344_22366 = state_22334__$1;(statearr_22344_22366[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (9)))
{var state_22334__$1 = state_22334;var statearr_22345_22367 = state_22334__$1;(statearr_22345_22367[(2)] = null);
(statearr_22345_22367[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (5)))
{var state_22334__$1 = state_22334;if(cljs.core.truth_(close_QMARK_))
{var statearr_22346_22368 = state_22334__$1;(statearr_22346_22368[(1)] = (8));
} else
{var statearr_22347_22369 = state_22334__$1;(statearr_22347_22369[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (14)))
{var inst_22328 = (state_22334[(2)]);var state_22334__$1 = state_22334;var statearr_22348_22370 = state_22334__$1;(statearr_22348_22370[(2)] = inst_22328);
(statearr_22348_22370[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (10)))
{var inst_22320 = (state_22334[(2)]);var state_22334__$1 = state_22334;var statearr_22349_22371 = state_22334__$1;(statearr_22349_22371[(2)] = inst_22320);
(statearr_22349_22371[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22335 === (8)))
{var inst_22317 = cljs.core.async.close_BANG_(to);var state_22334__$1 = state_22334;var statearr_22350_22372 = state_22334__$1;(statearr_22350_22372[(2)] = inst_22317);
(statearr_22350_22372[(1)] = (10));
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
});})(c__6485__auto___22358))
;return ((function (switch__6470__auto__,c__6485__auto___22358){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22354 = [null,null,null,null,null,null,null,null];(statearr_22354[(0)] = state_machine__6471__auto__);
(statearr_22354[(1)] = (1));
return statearr_22354;
});
var state_machine__6471__auto____1 = (function (state_22334){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22334);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22355){if((e22355 instanceof Object))
{var ex__6474__auto__ = e22355;var statearr_22356_22373 = state_22334;(statearr_22356_22373[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22334);
return cljs.core.constant$keyword$16;
} else
{throw e22355;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22374 = state_22334;
state_22334 = G__22374;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22334){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___22358))
})();var state__6487__auto__ = (function (){var statearr_22357 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22358);
return statearr_22357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___22358))
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
return (function (p__22560){var vec__22561 = p__22560;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22561,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22561,(1),null);var job = vec__22561;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__6485__auto___22745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results){
return (function (state_22566){var state_val_22567 = (state_22566[(1)]);if((state_val_22567 === (2)))
{var inst_22563 = (state_22566[(2)]);var inst_22564 = cljs.core.async.close_BANG_(res);var state_22566__$1 = (function (){var statearr_22568 = state_22566;(statearr_22568[(7)] = inst_22563);
return statearr_22568;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22566__$1,inst_22564);
} else
{if((state_val_22567 === (1)))
{var state_22566__$1 = state_22566;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22566__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results))
;return ((function (switch__6470__auto__,c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22572 = [null,null,null,null,null,null,null,null];(statearr_22572[(0)] = state_machine__6471__auto__);
(statearr_22572[(1)] = (1));
return statearr_22572;
});
var state_machine__6471__auto____1 = (function (state_22566){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22566);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22573){if((e22573 instanceof Object))
{var ex__6474__auto__ = e22573;var statearr_22574_22746 = state_22566;(statearr_22574_22746[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22566);
return cljs.core.constant$keyword$16;
} else
{throw e22573;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22747 = state_22566;
state_22566 = G__22747;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22566){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results))
})();var state__6487__auto__ = (function (){var statearr_22575 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22745);
return statearr_22575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___22745,res,vec__22561,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22576){var vec__22577 = p__22576;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577,(1),null);var job = vec__22577;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__22578_22748 = v;var G__22579_22749 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22578_22748,G__22579_22749) : xf.call(null,G__22578_22748,G__22579_22749));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___22750 = n;var __22751 = (0);while(true){
if((__22751 < n__4510__auto___22750))
{var G__22580_22752 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22580_22752) {
case "async":
var c__6485__auto___22754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22751,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__22751,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function (state_22593){var state_val_22594 = (state_22593[(1)]);if((state_val_22594 === (7)))
{var inst_22589 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22595_22755 = state_22593__$1;(statearr_22595_22755[(2)] = inst_22589);
(statearr_22595_22755[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22594 === (6)))
{var state_22593__$1 = state_22593;var statearr_22596_22756 = state_22593__$1;(statearr_22596_22756[(2)] = null);
(statearr_22596_22756[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22594 === (5)))
{var state_22593__$1 = state_22593;var statearr_22597_22757 = state_22593__$1;(statearr_22597_22757[(2)] = null);
(statearr_22597_22757[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22594 === (4)))
{var inst_22583 = (state_22593[(2)]);var inst_22584 = async(inst_22583);var state_22593__$1 = state_22593;if(cljs.core.truth_(inst_22584))
{var statearr_22598_22758 = state_22593__$1;(statearr_22598_22758[(1)] = (5));
} else
{var statearr_22599_22759 = state_22593__$1;(statearr_22599_22759[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22594 === (3)))
{var inst_22591 = (state_22593[(2)]);var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.return_chan(state_22593__$1,inst_22591);
} else
{if((state_val_22594 === (2)))
{var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22593__$1,(4),jobs);
} else
{if((state_val_22594 === (1)))
{var state_22593__$1 = state_22593;var statearr_22600_22760 = state_22593__$1;(statearr_22600_22760[(2)] = null);
(statearr_22600_22760[(1)] = (2));
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
});})(__22751,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
;return ((function (__22751,switch__6470__auto__,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22604 = [null,null,null,null,null,null,null];(statearr_22604[(0)] = state_machine__6471__auto__);
(statearr_22604[(1)] = (1));
return statearr_22604;
});
var state_machine__6471__auto____1 = (function (state_22593){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22593);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22605){if((e22605 instanceof Object))
{var ex__6474__auto__ = e22605;var statearr_22606_22761 = state_22593;(statearr_22606_22761[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22593);
return cljs.core.constant$keyword$16;
} else
{throw e22605;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22762 = state_22593;
state_22593 = G__22762;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__22751,switch__6470__auto__,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22607 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22754);
return statearr_22607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(__22751,c__6485__auto___22754,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
);

break;
case "compute":
var c__6485__auto___22763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22751,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__22751,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function (state_22620){var state_val_22621 = (state_22620[(1)]);if((state_val_22621 === (7)))
{var inst_22616 = (state_22620[(2)]);var state_22620__$1 = state_22620;var statearr_22622_22764 = state_22620__$1;(statearr_22622_22764[(2)] = inst_22616);
(statearr_22622_22764[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22621 === (6)))
{var state_22620__$1 = state_22620;var statearr_22623_22765 = state_22620__$1;(statearr_22623_22765[(2)] = null);
(statearr_22623_22765[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22621 === (5)))
{var state_22620__$1 = state_22620;var statearr_22624_22766 = state_22620__$1;(statearr_22624_22766[(2)] = null);
(statearr_22624_22766[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22621 === (4)))
{var inst_22610 = (state_22620[(2)]);var inst_22611 = process(inst_22610);var state_22620__$1 = state_22620;if(cljs.core.truth_(inst_22611))
{var statearr_22625_22767 = state_22620__$1;(statearr_22625_22767[(1)] = (5));
} else
{var statearr_22626_22768 = state_22620__$1;(statearr_22626_22768[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22621 === (3)))
{var inst_22618 = (state_22620[(2)]);var state_22620__$1 = state_22620;return cljs.core.async.impl.ioc_helpers.return_chan(state_22620__$1,inst_22618);
} else
{if((state_val_22621 === (2)))
{var state_22620__$1 = state_22620;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22620__$1,(4),jobs);
} else
{if((state_val_22621 === (1)))
{var state_22620__$1 = state_22620;var statearr_22627_22769 = state_22620__$1;(statearr_22627_22769[(2)] = null);
(statearr_22627_22769[(1)] = (2));
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
});})(__22751,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
;return ((function (__22751,switch__6470__auto__,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22631 = [null,null,null,null,null,null,null];(statearr_22631[(0)] = state_machine__6471__auto__);
(statearr_22631[(1)] = (1));
return statearr_22631;
});
var state_machine__6471__auto____1 = (function (state_22620){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22620);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22632){if((e22632 instanceof Object))
{var ex__6474__auto__ = e22632;var statearr_22633_22770 = state_22620;(statearr_22633_22770[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22620);
return cljs.core.constant$keyword$16;
} else
{throw e22632;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22771 = state_22620;
state_22620 = G__22771;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22620){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__22751,switch__6470__auto__,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22634 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22763);
return statearr_22634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(__22751,c__6485__auto___22763,G__22580_22752,n__4510__auto___22750,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22772 = (__22751 + (1));
__22751 = G__22772;
continue;
}
} else
{}
break;
}
var c__6485__auto___22773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___22773,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___22773,jobs,results,process,async){
return (function (state_22656){var state_val_22657 = (state_22656[(1)]);if((state_val_22657 === (9)))
{var inst_22649 = (state_22656[(2)]);var state_22656__$1 = (function (){var statearr_22658 = state_22656;(statearr_22658[(7)] = inst_22649);
return statearr_22658;
})();var statearr_22659_22774 = state_22656__$1;(statearr_22659_22774[(2)] = null);
(statearr_22659_22774[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22657 === (8)))
{var inst_22642 = (state_22656[(8)]);var inst_22647 = (state_22656[(2)]);var state_22656__$1 = (function (){var statearr_22660 = state_22656;(statearr_22660[(9)] = inst_22647);
return statearr_22660;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22656__$1,(9),results,inst_22642);
} else
{if((state_val_22657 === (7)))
{var inst_22652 = (state_22656[(2)]);var state_22656__$1 = state_22656;var statearr_22661_22775 = state_22656__$1;(statearr_22661_22775[(2)] = inst_22652);
(statearr_22661_22775[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22657 === (6)))
{var inst_22642 = (state_22656[(8)]);var inst_22637 = (state_22656[(10)]);var inst_22642__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_22643 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22644 = [inst_22637,inst_22642__$1];var inst_22645 = (new cljs.core.PersistentVector(null,2,(5),inst_22643,inst_22644,null));var state_22656__$1 = (function (){var statearr_22662 = state_22656;(statearr_22662[(8)] = inst_22642__$1);
return statearr_22662;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22656__$1,(8),jobs,inst_22645);
} else
{if((state_val_22657 === (5)))
{var inst_22640 = cljs.core.async.close_BANG_(jobs);var state_22656__$1 = state_22656;var statearr_22663_22776 = state_22656__$1;(statearr_22663_22776[(2)] = inst_22640);
(statearr_22663_22776[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22657 === (4)))
{var inst_22637 = (state_22656[(10)]);var inst_22637__$1 = (state_22656[(2)]);var inst_22638 = (inst_22637__$1 == null);var state_22656__$1 = (function (){var statearr_22664 = state_22656;(statearr_22664[(10)] = inst_22637__$1);
return statearr_22664;
})();if(cljs.core.truth_(inst_22638))
{var statearr_22665_22777 = state_22656__$1;(statearr_22665_22777[(1)] = (5));
} else
{var statearr_22666_22778 = state_22656__$1;(statearr_22666_22778[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22657 === (3)))
{var inst_22654 = (state_22656[(2)]);var state_22656__$1 = state_22656;return cljs.core.async.impl.ioc_helpers.return_chan(state_22656__$1,inst_22654);
} else
{if((state_val_22657 === (2)))
{var state_22656__$1 = state_22656;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22656__$1,(4),from);
} else
{if((state_val_22657 === (1)))
{var state_22656__$1 = state_22656;var statearr_22667_22779 = state_22656__$1;(statearr_22667_22779[(2)] = null);
(statearr_22667_22779[(1)] = (2));
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
});})(c__6485__auto___22773,jobs,results,process,async))
;return ((function (switch__6470__auto__,c__6485__auto___22773,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22671 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22671[(0)] = state_machine__6471__auto__);
(statearr_22671[(1)] = (1));
return statearr_22671;
});
var state_machine__6471__auto____1 = (function (state_22656){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22656);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22672){if((e22672 instanceof Object))
{var ex__6474__auto__ = e22672;var statearr_22673_22780 = state_22656;(statearr_22673_22780[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22656);
return cljs.core.constant$keyword$16;
} else
{throw e22672;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22781 = state_22656;
state_22656 = G__22781;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22656){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___22773,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22674 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22773);
return statearr_22674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___22773,jobs,results,process,async))
);
var c__6485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto__,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__,jobs,results,process,async){
return (function (state_22712){var state_val_22713 = (state_22712[(1)]);if((state_val_22713 === (7)))
{var inst_22708 = (state_22712[(2)]);var state_22712__$1 = state_22712;var statearr_22714_22782 = state_22712__$1;(statearr_22714_22782[(2)] = inst_22708);
(statearr_22714_22782[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (20)))
{var state_22712__$1 = state_22712;var statearr_22715_22783 = state_22712__$1;(statearr_22715_22783[(2)] = null);
(statearr_22715_22783[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (1)))
{var state_22712__$1 = state_22712;var statearr_22716_22784 = state_22712__$1;(statearr_22716_22784[(2)] = null);
(statearr_22716_22784[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (4)))
{var inst_22677 = (state_22712[(7)]);var inst_22677__$1 = (state_22712[(2)]);var inst_22678 = (inst_22677__$1 == null);var state_22712__$1 = (function (){var statearr_22717 = state_22712;(statearr_22717[(7)] = inst_22677__$1);
return statearr_22717;
})();if(cljs.core.truth_(inst_22678))
{var statearr_22718_22785 = state_22712__$1;(statearr_22718_22785[(1)] = (5));
} else
{var statearr_22719_22786 = state_22712__$1;(statearr_22719_22786[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (15)))
{var inst_22690 = (state_22712[(8)]);var state_22712__$1 = state_22712;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22712__$1,(18),to,inst_22690);
} else
{if((state_val_22713 === (21)))
{var inst_22703 = (state_22712[(2)]);var state_22712__$1 = state_22712;var statearr_22720_22787 = state_22712__$1;(statearr_22720_22787[(2)] = inst_22703);
(statearr_22720_22787[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (13)))
{var inst_22705 = (state_22712[(2)]);var state_22712__$1 = (function (){var statearr_22721 = state_22712;(statearr_22721[(9)] = inst_22705);
return statearr_22721;
})();var statearr_22722_22788 = state_22712__$1;(statearr_22722_22788[(2)] = null);
(statearr_22722_22788[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (6)))
{var inst_22677 = (state_22712[(7)]);var state_22712__$1 = state_22712;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22712__$1,(11),inst_22677);
} else
{if((state_val_22713 === (17)))
{var inst_22698 = (state_22712[(2)]);var state_22712__$1 = state_22712;if(cljs.core.truth_(inst_22698))
{var statearr_22723_22789 = state_22712__$1;(statearr_22723_22789[(1)] = (19));
} else
{var statearr_22724_22790 = state_22712__$1;(statearr_22724_22790[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (3)))
{var inst_22710 = (state_22712[(2)]);var state_22712__$1 = state_22712;return cljs.core.async.impl.ioc_helpers.return_chan(state_22712__$1,inst_22710);
} else
{if((state_val_22713 === (12)))
{var inst_22687 = (state_22712[(10)]);var state_22712__$1 = state_22712;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22712__$1,(14),inst_22687);
} else
{if((state_val_22713 === (2)))
{var state_22712__$1 = state_22712;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22712__$1,(4),results);
} else
{if((state_val_22713 === (19)))
{var state_22712__$1 = state_22712;var statearr_22725_22791 = state_22712__$1;(statearr_22725_22791[(2)] = null);
(statearr_22725_22791[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (11)))
{var inst_22687 = (state_22712[(2)]);var state_22712__$1 = (function (){var statearr_22726 = state_22712;(statearr_22726[(10)] = inst_22687);
return statearr_22726;
})();var statearr_22727_22792 = state_22712__$1;(statearr_22727_22792[(2)] = null);
(statearr_22727_22792[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (9)))
{var state_22712__$1 = state_22712;var statearr_22728_22793 = state_22712__$1;(statearr_22728_22793[(2)] = null);
(statearr_22728_22793[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (5)))
{var state_22712__$1 = state_22712;if(cljs.core.truth_(close_QMARK_))
{var statearr_22729_22794 = state_22712__$1;(statearr_22729_22794[(1)] = (8));
} else
{var statearr_22730_22795 = state_22712__$1;(statearr_22730_22795[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (14)))
{var inst_22692 = (state_22712[(11)]);var inst_22690 = (state_22712[(8)]);var inst_22690__$1 = (state_22712[(2)]);var inst_22691 = (inst_22690__$1 == null);var inst_22692__$1 = cljs.core.not(inst_22691);var state_22712__$1 = (function (){var statearr_22731 = state_22712;(statearr_22731[(11)] = inst_22692__$1);
(statearr_22731[(8)] = inst_22690__$1);
return statearr_22731;
})();if(inst_22692__$1)
{var statearr_22732_22796 = state_22712__$1;(statearr_22732_22796[(1)] = (15));
} else
{var statearr_22733_22797 = state_22712__$1;(statearr_22733_22797[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (16)))
{var inst_22692 = (state_22712[(11)]);var state_22712__$1 = state_22712;var statearr_22734_22798 = state_22712__$1;(statearr_22734_22798[(2)] = inst_22692);
(statearr_22734_22798[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (10)))
{var inst_22684 = (state_22712[(2)]);var state_22712__$1 = state_22712;var statearr_22735_22799 = state_22712__$1;(statearr_22735_22799[(2)] = inst_22684);
(statearr_22735_22799[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (18)))
{var inst_22695 = (state_22712[(2)]);var state_22712__$1 = state_22712;var statearr_22736_22800 = state_22712__$1;(statearr_22736_22800[(2)] = inst_22695);
(statearr_22736_22800[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22713 === (8)))
{var inst_22681 = cljs.core.async.close_BANG_(to);var state_22712__$1 = state_22712;var statearr_22737_22801 = state_22712__$1;(statearr_22737_22801[(2)] = inst_22681);
(statearr_22737_22801[(1)] = (10));
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
var state_machine__6471__auto____0 = (function (){var statearr_22741 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22741[(0)] = state_machine__6471__auto__);
(statearr_22741[(1)] = (1));
return statearr_22741;
});
var state_machine__6471__auto____1 = (function (state_22712){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22712);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22742){if((e22742 instanceof Object))
{var ex__6474__auto__ = e22742;var statearr_22743_22802 = state_22712;(statearr_22743_22802[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22712);
return cljs.core.constant$keyword$16;
} else
{throw e22742;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22803 = state_22712;
state_22712 = G__22803;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22712){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_22744 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_22744;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6485__auto___22926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___22926,tc,fc){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___22926,tc,fc){
return (function (state_22900){var state_val_22901 = (state_22900[(1)]);if((state_val_22901 === (7)))
{var inst_22896 = (state_22900[(2)]);var state_22900__$1 = state_22900;var statearr_22902_22927 = state_22900__$1;(statearr_22902_22927[(2)] = inst_22896);
(statearr_22902_22927[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (1)))
{var state_22900__$1 = state_22900;var statearr_22903_22928 = state_22900__$1;(statearr_22903_22928[(2)] = null);
(statearr_22903_22928[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (4)))
{var inst_22877 = (state_22900[(7)]);var inst_22877__$1 = (state_22900[(2)]);var inst_22878 = (inst_22877__$1 == null);var state_22900__$1 = (function (){var statearr_22904 = state_22900;(statearr_22904[(7)] = inst_22877__$1);
return statearr_22904;
})();if(cljs.core.truth_(inst_22878))
{var statearr_22905_22929 = state_22900__$1;(statearr_22905_22929[(1)] = (5));
} else
{var statearr_22906_22930 = state_22900__$1;(statearr_22906_22930[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (13)))
{var state_22900__$1 = state_22900;var statearr_22907_22931 = state_22900__$1;(statearr_22907_22931[(2)] = null);
(statearr_22907_22931[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (6)))
{var inst_22877 = (state_22900[(7)]);var inst_22883 = (function (){var G__22908 = inst_22877;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22908) : p.call(null,G__22908));
})();var state_22900__$1 = state_22900;if(cljs.core.truth_(inst_22883))
{var statearr_22909_22932 = state_22900__$1;(statearr_22909_22932[(1)] = (9));
} else
{var statearr_22910_22933 = state_22900__$1;(statearr_22910_22933[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (3)))
{var inst_22898 = (state_22900[(2)]);var state_22900__$1 = state_22900;return cljs.core.async.impl.ioc_helpers.return_chan(state_22900__$1,inst_22898);
} else
{if((state_val_22901 === (12)))
{var state_22900__$1 = state_22900;var statearr_22911_22934 = state_22900__$1;(statearr_22911_22934[(2)] = null);
(statearr_22911_22934[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (2)))
{var state_22900__$1 = state_22900;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22900__$1,(4),ch);
} else
{if((state_val_22901 === (11)))
{var inst_22877 = (state_22900[(7)]);var inst_22887 = (state_22900[(2)]);var state_22900__$1 = state_22900;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22900__$1,(8),inst_22887,inst_22877);
} else
{if((state_val_22901 === (9)))
{var state_22900__$1 = state_22900;var statearr_22912_22935 = state_22900__$1;(statearr_22912_22935[(2)] = tc);
(statearr_22912_22935[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (5)))
{var inst_22880 = cljs.core.async.close_BANG_(tc);var inst_22881 = cljs.core.async.close_BANG_(fc);var state_22900__$1 = (function (){var statearr_22913 = state_22900;(statearr_22913[(8)] = inst_22880);
return statearr_22913;
})();var statearr_22914_22936 = state_22900__$1;(statearr_22914_22936[(2)] = inst_22881);
(statearr_22914_22936[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (14)))
{var inst_22894 = (state_22900[(2)]);var state_22900__$1 = state_22900;var statearr_22915_22937 = state_22900__$1;(statearr_22915_22937[(2)] = inst_22894);
(statearr_22915_22937[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (10)))
{var state_22900__$1 = state_22900;var statearr_22916_22938 = state_22900__$1;(statearr_22916_22938[(2)] = fc);
(statearr_22916_22938[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22901 === (8)))
{var inst_22889 = (state_22900[(2)]);var state_22900__$1 = state_22900;if(cljs.core.truth_(inst_22889))
{var statearr_22917_22939 = state_22900__$1;(statearr_22917_22939[(1)] = (12));
} else
{var statearr_22918_22940 = state_22900__$1;(statearr_22918_22940[(1)] = (13));
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
});})(c__6485__auto___22926,tc,fc))
;return ((function (switch__6470__auto__,c__6485__auto___22926,tc,fc){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_22922 = [null,null,null,null,null,null,null,null,null];(statearr_22922[(0)] = state_machine__6471__auto__);
(statearr_22922[(1)] = (1));
return statearr_22922;
});
var state_machine__6471__auto____1 = (function (state_22900){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22900);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e22923){if((e22923 instanceof Object))
{var ex__6474__auto__ = e22923;var statearr_22924_22941 = state_22900;(statearr_22924_22941[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22900);
return cljs.core.constant$keyword$16;
} else
{throw e22923;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__22942 = state_22900;
state_22900 = G__22942;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22900){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___22926,tc,fc))
})();var state__6487__auto__ = (function (){var statearr_22925 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_22925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___22926);
return statearr_22925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___22926,tc,fc))
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
return (function (state_22991){var state_val_22992 = (state_22991[(1)]);if((state_val_22992 === (7)))
{var inst_22987 = (state_22991[(2)]);var state_22991__$1 = state_22991;var statearr_22993_23011 = state_22991__$1;(statearr_22993_23011[(2)] = inst_22987);
(statearr_22993_23011[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22992 === (6)))
{var inst_22980 = (state_22991[(7)]);var inst_22977 = (state_22991[(8)]);var inst_22984 = (function (){var G__22994 = inst_22977;var G__22995 = inst_22980;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22994,G__22995) : f.call(null,G__22994,G__22995));
})();var inst_22977__$1 = inst_22984;var state_22991__$1 = (function (){var statearr_22996 = state_22991;(statearr_22996[(8)] = inst_22977__$1);
return statearr_22996;
})();var statearr_22997_23012 = state_22991__$1;(statearr_22997_23012[(2)] = null);
(statearr_22997_23012[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22992 === (5)))
{var inst_22977 = (state_22991[(8)]);var state_22991__$1 = state_22991;var statearr_22998_23013 = state_22991__$1;(statearr_22998_23013[(2)] = inst_22977);
(statearr_22998_23013[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22992 === (4)))
{var inst_22980 = (state_22991[(7)]);var inst_22980__$1 = (state_22991[(2)]);var inst_22981 = (inst_22980__$1 == null);var state_22991__$1 = (function (){var statearr_22999 = state_22991;(statearr_22999[(7)] = inst_22980__$1);
return statearr_22999;
})();if(cljs.core.truth_(inst_22981))
{var statearr_23000_23014 = state_22991__$1;(statearr_23000_23014[(1)] = (5));
} else
{var statearr_23001_23015 = state_22991__$1;(statearr_23001_23015[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22992 === (3)))
{var inst_22989 = (state_22991[(2)]);var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.return_chan(state_22991__$1,inst_22989);
} else
{if((state_val_22992 === (2)))
{var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22991__$1,(4),ch);
} else
{if((state_val_22992 === (1)))
{var inst_22977 = init;var state_22991__$1 = (function (){var statearr_23002 = state_22991;(statearr_23002[(8)] = inst_22977);
return statearr_23002;
})();var statearr_23003_23016 = state_22991__$1;(statearr_23003_23016[(2)] = null);
(statearr_23003_23016[(1)] = (2));
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
var state_machine__6471__auto____0 = (function (){var statearr_23007 = [null,null,null,null,null,null,null,null,null];(statearr_23007[(0)] = state_machine__6471__auto__);
(statearr_23007[(1)] = (1));
return statearr_23007;
});
var state_machine__6471__auto____1 = (function (state_22991){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_22991);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23008){if((e23008 instanceof Object))
{var ex__6474__auto__ = e23008;var statearr_23009_23017 = state_22991;(statearr_23009_23017[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22991);
return cljs.core.constant$keyword$16;
} else
{throw e23008;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23018 = state_22991;
state_22991 = G__23018;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_22991){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_22991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_23010 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_23010;
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
return (function (state_23095){var state_val_23096 = (state_23095[(1)]);if((state_val_23096 === (7)))
{var inst_23077 = (state_23095[(2)]);var state_23095__$1 = state_23095;var statearr_23097_23120 = state_23095__$1;(statearr_23097_23120[(2)] = inst_23077);
(statearr_23097_23120[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (1)))
{var inst_23071 = cljs.core.seq(coll);var inst_23072 = inst_23071;var state_23095__$1 = (function (){var statearr_23098 = state_23095;(statearr_23098[(7)] = inst_23072);
return statearr_23098;
})();var statearr_23099_23121 = state_23095__$1;(statearr_23099_23121[(2)] = null);
(statearr_23099_23121[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (4)))
{var inst_23072 = (state_23095[(7)]);var inst_23075 = cljs.core.first(inst_23072);var state_23095__$1 = state_23095;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23095__$1,(7),ch,inst_23075);
} else
{if((state_val_23096 === (13)))
{var inst_23089 = (state_23095[(2)]);var state_23095__$1 = state_23095;var statearr_23100_23122 = state_23095__$1;(statearr_23100_23122[(2)] = inst_23089);
(statearr_23100_23122[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (6)))
{var inst_23080 = (state_23095[(2)]);var state_23095__$1 = state_23095;if(cljs.core.truth_(inst_23080))
{var statearr_23101_23123 = state_23095__$1;(statearr_23101_23123[(1)] = (8));
} else
{var statearr_23102_23124 = state_23095__$1;(statearr_23102_23124[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (3)))
{var inst_23093 = (state_23095[(2)]);var state_23095__$1 = state_23095;return cljs.core.async.impl.ioc_helpers.return_chan(state_23095__$1,inst_23093);
} else
{if((state_val_23096 === (12)))
{var state_23095__$1 = state_23095;var statearr_23103_23125 = state_23095__$1;(statearr_23103_23125[(2)] = null);
(statearr_23103_23125[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (2)))
{var inst_23072 = (state_23095[(7)]);var state_23095__$1 = state_23095;if(cljs.core.truth_(inst_23072))
{var statearr_23104_23126 = state_23095__$1;(statearr_23104_23126[(1)] = (4));
} else
{var statearr_23105_23127 = state_23095__$1;(statearr_23105_23127[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (11)))
{var inst_23086 = cljs.core.async.close_BANG_(ch);var state_23095__$1 = state_23095;var statearr_23106_23128 = state_23095__$1;(statearr_23106_23128[(2)] = inst_23086);
(statearr_23106_23128[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (9)))
{var state_23095__$1 = state_23095;if(cljs.core.truth_(close_QMARK_))
{var statearr_23107_23129 = state_23095__$1;(statearr_23107_23129[(1)] = (11));
} else
{var statearr_23108_23130 = state_23095__$1;(statearr_23108_23130[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (5)))
{var inst_23072 = (state_23095[(7)]);var state_23095__$1 = state_23095;var statearr_23109_23131 = state_23095__$1;(statearr_23109_23131[(2)] = inst_23072);
(statearr_23109_23131[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (10)))
{var inst_23091 = (state_23095[(2)]);var state_23095__$1 = state_23095;var statearr_23110_23132 = state_23095__$1;(statearr_23110_23132[(2)] = inst_23091);
(statearr_23110_23132[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23096 === (8)))
{var inst_23072 = (state_23095[(7)]);var inst_23082 = cljs.core.next(inst_23072);var inst_23072__$1 = inst_23082;var state_23095__$1 = (function (){var statearr_23111 = state_23095;(statearr_23111[(7)] = inst_23072__$1);
return statearr_23111;
})();var statearr_23112_23133 = state_23095__$1;(statearr_23112_23133[(2)] = null);
(statearr_23112_23133[(1)] = (2));
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
var state_machine__6471__auto____0 = (function (){var statearr_23116 = [null,null,null,null,null,null,null,null];(statearr_23116[(0)] = state_machine__6471__auto__);
(statearr_23116[(1)] = (1));
return statearr_23116;
});
var state_machine__6471__auto____1 = (function (state_23095){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23095);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23117){if((e23117 instanceof Object))
{var ex__6474__auto__ = e23117;var statearr_23118_23134 = state_23095;(statearr_23118_23134[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23095);
return cljs.core.constant$keyword$16;
} else
{throw e23117;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23135 = state_23095;
state_23095 = G__23135;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23095){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_23119 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_23119;
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
cljs.core.async.Mux = (function (){var obj23137 = {};return obj23137;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23141 = x__4277__auto__;return goog.typeOf(G__23141);
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
cljs.core.async.Mult = (function (){var obj23143 = {};return obj23143;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23147 = x__4277__auto__;return goog.typeOf(G__23147);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23151 = x__4277__auto__;return goog.typeOf(G__23151);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23155 = x__4277__auto__;return goog.typeOf(G__23155);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__23385 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23385) : cljs.core.atom.call(null,G__23385));
})();var m = (function (){if(typeof cljs.core.async.t23386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23386 = (function (cs,ch,mult,meta23387){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23387 = meta23387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23386.cljs$lang$type = true;
cljs.core.async.t23386.cljs$lang$ctorStr = "cljs.core.async/t23386";
cljs.core.async.t23386.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23386");
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23386.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__23389_23614 = self__.cs;var G__23390_23615 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23389_23614,G__23390_23615) : cljs.core.reset_BANG_.call(null,G__23389_23614,G__23390_23615));
return null;
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23388){var self__ = this;
var _23388__$1 = this;return self__.meta23387;
});})(cs))
;
cljs.core.async.t23386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23388,meta23387__$1){var self__ = this;
var _23388__$1 = this;return (new cljs.core.async.t23386(self__.cs,self__.ch,self__.mult,meta23387__$1));
});})(cs))
;
cljs.core.async.__GT_t23386 = ((function (cs){
return (function __GT_t23386(cs__$1,ch__$1,mult__$1,meta23387){return (new cljs.core.async.t23386(cs__$1,ch__$1,mult__$1,meta23387));
});})(cs))
;
}
return (new cljs.core.async.t23386(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23391 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23391) : cljs.core.atom.call(null,G__23391));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6485__auto___23616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23616,cs,m,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23616,cs,m,dchan,dctr,done){
return (function (state_23522){var state_val_23523 = (state_23522[(1)]);if((state_val_23523 === (7)))
{var inst_23518 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23524_23617 = state_23522__$1;(statearr_23524_23617[(2)] = inst_23518);
(statearr_23524_23617[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (20)))
{var inst_23423 = (state_23522[(7)]);var inst_23433 = cljs.core.first(inst_23423);var inst_23434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23433,(0),null);var inst_23435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23433,(1),null);var state_23522__$1 = (function (){var statearr_23525 = state_23522;(statearr_23525[(8)] = inst_23434);
return statearr_23525;
})();if(cljs.core.truth_(inst_23435))
{var statearr_23526_23618 = state_23522__$1;(statearr_23526_23618[(1)] = (22));
} else
{var statearr_23527_23619 = state_23522__$1;(statearr_23527_23619[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (27)))
{var inst_23470 = (state_23522[(9)]);var inst_23394 = (state_23522[(10)]);var inst_23463 = (state_23522[(11)]);var inst_23465 = (state_23522[(12)]);var inst_23470__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23463,inst_23465);var inst_23471 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23470__$1,inst_23394,done);var state_23522__$1 = (function (){var statearr_23528 = state_23522;(statearr_23528[(9)] = inst_23470__$1);
return statearr_23528;
})();if(cljs.core.truth_(inst_23471))
{var statearr_23529_23620 = state_23522__$1;(statearr_23529_23620[(1)] = (30));
} else
{var statearr_23530_23621 = state_23522__$1;(statearr_23530_23621[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (1)))
{var state_23522__$1 = state_23522;var statearr_23531_23622 = state_23522__$1;(statearr_23531_23622[(2)] = null);
(statearr_23531_23622[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (24)))
{var inst_23423 = (state_23522[(7)]);var inst_23440 = (state_23522[(2)]);var inst_23441 = cljs.core.next(inst_23423);var inst_23403 = inst_23441;var inst_23404 = null;var inst_23405 = (0);var inst_23406 = (0);var state_23522__$1 = (function (){var statearr_23532 = state_23522;(statearr_23532[(13)] = inst_23403);
(statearr_23532[(14)] = inst_23406);
(statearr_23532[(15)] = inst_23440);
(statearr_23532[(16)] = inst_23404);
(statearr_23532[(17)] = inst_23405);
return statearr_23532;
})();var statearr_23533_23623 = state_23522__$1;(statearr_23533_23623[(2)] = null);
(statearr_23533_23623[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (39)))
{var state_23522__$1 = state_23522;var statearr_23537_23624 = state_23522__$1;(statearr_23537_23624[(2)] = null);
(statearr_23537_23624[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (4)))
{var inst_23394 = (state_23522[(10)]);var inst_23394__$1 = (state_23522[(2)]);var inst_23395 = (inst_23394__$1 == null);var state_23522__$1 = (function (){var statearr_23538 = state_23522;(statearr_23538[(10)] = inst_23394__$1);
return statearr_23538;
})();if(cljs.core.truth_(inst_23395))
{var statearr_23539_23625 = state_23522__$1;(statearr_23539_23625[(1)] = (5));
} else
{var statearr_23540_23626 = state_23522__$1;(statearr_23540_23626[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (15)))
{var inst_23403 = (state_23522[(13)]);var inst_23406 = (state_23522[(14)]);var inst_23404 = (state_23522[(16)]);var inst_23405 = (state_23522[(17)]);var inst_23419 = (state_23522[(2)]);var inst_23420 = (inst_23406 + (1));var tmp23534 = inst_23403;var tmp23535 = inst_23404;var tmp23536 = inst_23405;var inst_23403__$1 = tmp23534;var inst_23404__$1 = tmp23535;var inst_23405__$1 = tmp23536;var inst_23406__$1 = inst_23420;var state_23522__$1 = (function (){var statearr_23541 = state_23522;(statearr_23541[(18)] = inst_23419);
(statearr_23541[(13)] = inst_23403__$1);
(statearr_23541[(14)] = inst_23406__$1);
(statearr_23541[(16)] = inst_23404__$1);
(statearr_23541[(17)] = inst_23405__$1);
return statearr_23541;
})();var statearr_23542_23627 = state_23522__$1;(statearr_23542_23627[(2)] = null);
(statearr_23542_23627[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (21)))
{var inst_23444 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23546_23628 = state_23522__$1;(statearr_23546_23628[(2)] = inst_23444);
(statearr_23546_23628[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (31)))
{var inst_23470 = (state_23522[(9)]);var inst_23474 = done(null);var inst_23475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23470);var state_23522__$1 = (function (){var statearr_23547 = state_23522;(statearr_23547[(19)] = inst_23474);
return statearr_23547;
})();var statearr_23548_23629 = state_23522__$1;(statearr_23548_23629[(2)] = inst_23475);
(statearr_23548_23629[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (32)))
{var inst_23462 = (state_23522[(20)]);var inst_23464 = (state_23522[(21)]);var inst_23463 = (state_23522[(11)]);var inst_23465 = (state_23522[(12)]);var inst_23477 = (state_23522[(2)]);var inst_23478 = (inst_23465 + (1));var tmp23543 = inst_23462;var tmp23544 = inst_23464;var tmp23545 = inst_23463;var inst_23462__$1 = tmp23543;var inst_23463__$1 = tmp23545;var inst_23464__$1 = tmp23544;var inst_23465__$1 = inst_23478;var state_23522__$1 = (function (){var statearr_23549 = state_23522;(statearr_23549[(22)] = inst_23477);
(statearr_23549[(20)] = inst_23462__$1);
(statearr_23549[(21)] = inst_23464__$1);
(statearr_23549[(11)] = inst_23463__$1);
(statearr_23549[(12)] = inst_23465__$1);
return statearr_23549;
})();var statearr_23550_23630 = state_23522__$1;(statearr_23550_23630[(2)] = null);
(statearr_23550_23630[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (40)))
{var inst_23490 = (state_23522[(23)]);var inst_23494 = done(null);var inst_23495 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23490);var state_23522__$1 = (function (){var statearr_23551 = state_23522;(statearr_23551[(24)] = inst_23494);
return statearr_23551;
})();var statearr_23552_23631 = state_23522__$1;(statearr_23552_23631[(2)] = inst_23495);
(statearr_23552_23631[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (33)))
{var inst_23481 = (state_23522[(25)]);var inst_23483 = cljs.core.chunked_seq_QMARK_(inst_23481);var state_23522__$1 = state_23522;if(inst_23483)
{var statearr_23553_23632 = state_23522__$1;(statearr_23553_23632[(1)] = (36));
} else
{var statearr_23554_23633 = state_23522__$1;(statearr_23554_23633[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (13)))
{var inst_23413 = (state_23522[(26)]);var inst_23416 = cljs.core.async.close_BANG_(inst_23413);var state_23522__$1 = state_23522;var statearr_23555_23634 = state_23522__$1;(statearr_23555_23634[(2)] = inst_23416);
(statearr_23555_23634[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (22)))
{var inst_23434 = (state_23522[(8)]);var inst_23437 = cljs.core.async.close_BANG_(inst_23434);var state_23522__$1 = state_23522;var statearr_23556_23635 = state_23522__$1;(statearr_23556_23635[(2)] = inst_23437);
(statearr_23556_23635[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (36)))
{var inst_23481 = (state_23522[(25)]);var inst_23485 = cljs.core.chunk_first(inst_23481);var inst_23486 = cljs.core.chunk_rest(inst_23481);var inst_23487 = cljs.core.count(inst_23485);var inst_23462 = inst_23486;var inst_23463 = inst_23485;var inst_23464 = inst_23487;var inst_23465 = (0);var state_23522__$1 = (function (){var statearr_23557 = state_23522;(statearr_23557[(20)] = inst_23462);
(statearr_23557[(21)] = inst_23464);
(statearr_23557[(11)] = inst_23463);
(statearr_23557[(12)] = inst_23465);
return statearr_23557;
})();var statearr_23558_23636 = state_23522__$1;(statearr_23558_23636[(2)] = null);
(statearr_23558_23636[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (41)))
{var inst_23481 = (state_23522[(25)]);var inst_23497 = (state_23522[(2)]);var inst_23498 = cljs.core.next(inst_23481);var inst_23462 = inst_23498;var inst_23463 = null;var inst_23464 = (0);var inst_23465 = (0);var state_23522__$1 = (function (){var statearr_23559 = state_23522;(statearr_23559[(27)] = inst_23497);
(statearr_23559[(20)] = inst_23462);
(statearr_23559[(21)] = inst_23464);
(statearr_23559[(11)] = inst_23463);
(statearr_23559[(12)] = inst_23465);
return statearr_23559;
})();var statearr_23560_23637 = state_23522__$1;(statearr_23560_23637[(2)] = null);
(statearr_23560_23637[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (43)))
{var state_23522__$1 = state_23522;var statearr_23561_23638 = state_23522__$1;(statearr_23561_23638[(2)] = null);
(statearr_23561_23638[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (29)))
{var inst_23506 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23562_23639 = state_23522__$1;(statearr_23562_23639[(2)] = inst_23506);
(statearr_23562_23639[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (44)))
{var inst_23515 = (state_23522[(2)]);var state_23522__$1 = (function (){var statearr_23563 = state_23522;(statearr_23563[(28)] = inst_23515);
return statearr_23563;
})();var statearr_23564_23640 = state_23522__$1;(statearr_23564_23640[(2)] = null);
(statearr_23564_23640[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (6)))
{var inst_23454 = (state_23522[(29)]);var inst_23453 = (function (){var G__23565 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23565) : cljs.core.deref.call(null,G__23565));
})();var inst_23454__$1 = cljs.core.keys(inst_23453);var inst_23455 = cljs.core.count(inst_23454__$1);var inst_23456 = (function (){var G__23566 = dctr;var G__23567 = inst_23455;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23566,G__23567) : cljs.core.reset_BANG_.call(null,G__23566,G__23567));
})();var inst_23461 = cljs.core.seq(inst_23454__$1);var inst_23462 = inst_23461;var inst_23463 = null;var inst_23464 = (0);var inst_23465 = (0);var state_23522__$1 = (function (){var statearr_23568 = state_23522;(statearr_23568[(20)] = inst_23462);
(statearr_23568[(29)] = inst_23454__$1);
(statearr_23568[(21)] = inst_23464);
(statearr_23568[(11)] = inst_23463);
(statearr_23568[(30)] = inst_23456);
(statearr_23568[(12)] = inst_23465);
return statearr_23568;
})();var statearr_23569_23641 = state_23522__$1;(statearr_23569_23641[(2)] = null);
(statearr_23569_23641[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (28)))
{var inst_23481 = (state_23522[(25)]);var inst_23462 = (state_23522[(20)]);var inst_23481__$1 = cljs.core.seq(inst_23462);var state_23522__$1 = (function (){var statearr_23570 = state_23522;(statearr_23570[(25)] = inst_23481__$1);
return statearr_23570;
})();if(inst_23481__$1)
{var statearr_23571_23642 = state_23522__$1;(statearr_23571_23642[(1)] = (33));
} else
{var statearr_23572_23643 = state_23522__$1;(statearr_23572_23643[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (25)))
{var inst_23464 = (state_23522[(21)]);var inst_23465 = (state_23522[(12)]);var inst_23467 = (inst_23465 < inst_23464);var inst_23468 = inst_23467;var state_23522__$1 = state_23522;if(cljs.core.truth_(inst_23468))
{var statearr_23573_23644 = state_23522__$1;(statearr_23573_23644[(1)] = (27));
} else
{var statearr_23574_23645 = state_23522__$1;(statearr_23574_23645[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (34)))
{var state_23522__$1 = state_23522;var statearr_23575_23646 = state_23522__$1;(statearr_23575_23646[(2)] = null);
(statearr_23575_23646[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (17)))
{var state_23522__$1 = state_23522;var statearr_23576_23647 = state_23522__$1;(statearr_23576_23647[(2)] = null);
(statearr_23576_23647[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (3)))
{var inst_23520 = (state_23522[(2)]);var state_23522__$1 = state_23522;return cljs.core.async.impl.ioc_helpers.return_chan(state_23522__$1,inst_23520);
} else
{if((state_val_23523 === (12)))
{var inst_23449 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23577_23648 = state_23522__$1;(statearr_23577_23648[(2)] = inst_23449);
(statearr_23577_23648[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (2)))
{var state_23522__$1 = state_23522;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23522__$1,(4),ch);
} else
{if((state_val_23523 === (23)))
{var state_23522__$1 = state_23522;var statearr_23578_23649 = state_23522__$1;(statearr_23578_23649[(2)] = null);
(statearr_23578_23649[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (35)))
{var inst_23504 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23579_23650 = state_23522__$1;(statearr_23579_23650[(2)] = inst_23504);
(statearr_23579_23650[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (19)))
{var inst_23423 = (state_23522[(7)]);var inst_23427 = cljs.core.chunk_first(inst_23423);var inst_23428 = cljs.core.chunk_rest(inst_23423);var inst_23429 = cljs.core.count(inst_23427);var inst_23403 = inst_23428;var inst_23404 = inst_23427;var inst_23405 = inst_23429;var inst_23406 = (0);var state_23522__$1 = (function (){var statearr_23580 = state_23522;(statearr_23580[(13)] = inst_23403);
(statearr_23580[(14)] = inst_23406);
(statearr_23580[(16)] = inst_23404);
(statearr_23580[(17)] = inst_23405);
return statearr_23580;
})();var statearr_23581_23651 = state_23522__$1;(statearr_23581_23651[(2)] = null);
(statearr_23581_23651[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (11)))
{var inst_23423 = (state_23522[(7)]);var inst_23403 = (state_23522[(13)]);var inst_23423__$1 = cljs.core.seq(inst_23403);var state_23522__$1 = (function (){var statearr_23582 = state_23522;(statearr_23582[(7)] = inst_23423__$1);
return statearr_23582;
})();if(inst_23423__$1)
{var statearr_23583_23652 = state_23522__$1;(statearr_23583_23652[(1)] = (16));
} else
{var statearr_23584_23653 = state_23522__$1;(statearr_23584_23653[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (9)))
{var inst_23451 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23585_23654 = state_23522__$1;(statearr_23585_23654[(2)] = inst_23451);
(statearr_23585_23654[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (5)))
{var inst_23401 = (function (){var G__23586 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23586) : cljs.core.deref.call(null,G__23586));
})();var inst_23402 = cljs.core.seq(inst_23401);var inst_23403 = inst_23402;var inst_23404 = null;var inst_23405 = (0);var inst_23406 = (0);var state_23522__$1 = (function (){var statearr_23587 = state_23522;(statearr_23587[(13)] = inst_23403);
(statearr_23587[(14)] = inst_23406);
(statearr_23587[(16)] = inst_23404);
(statearr_23587[(17)] = inst_23405);
return statearr_23587;
})();var statearr_23588_23655 = state_23522__$1;(statearr_23588_23655[(2)] = null);
(statearr_23588_23655[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (14)))
{var state_23522__$1 = state_23522;var statearr_23589_23656 = state_23522__$1;(statearr_23589_23656[(2)] = null);
(statearr_23589_23656[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (45)))
{var inst_23512 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23590_23657 = state_23522__$1;(statearr_23590_23657[(2)] = inst_23512);
(statearr_23590_23657[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (26)))
{var inst_23454 = (state_23522[(29)]);var inst_23508 = (state_23522[(2)]);var inst_23509 = cljs.core.seq(inst_23454);var state_23522__$1 = (function (){var statearr_23591 = state_23522;(statearr_23591[(31)] = inst_23508);
return statearr_23591;
})();if(inst_23509)
{var statearr_23592_23658 = state_23522__$1;(statearr_23592_23658[(1)] = (42));
} else
{var statearr_23593_23659 = state_23522__$1;(statearr_23593_23659[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (16)))
{var inst_23423 = (state_23522[(7)]);var inst_23425 = cljs.core.chunked_seq_QMARK_(inst_23423);var state_23522__$1 = state_23522;if(inst_23425)
{var statearr_23594_23660 = state_23522__$1;(statearr_23594_23660[(1)] = (19));
} else
{var statearr_23595_23661 = state_23522__$1;(statearr_23595_23661[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (38)))
{var inst_23501 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23596_23662 = state_23522__$1;(statearr_23596_23662[(2)] = inst_23501);
(statearr_23596_23662[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (30)))
{var state_23522__$1 = state_23522;var statearr_23597_23663 = state_23522__$1;(statearr_23597_23663[(2)] = null);
(statearr_23597_23663[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (10)))
{var inst_23406 = (state_23522[(14)]);var inst_23404 = (state_23522[(16)]);var inst_23412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23404,inst_23406);var inst_23413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23412,(0),null);var inst_23414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23412,(1),null);var state_23522__$1 = (function (){var statearr_23598 = state_23522;(statearr_23598[(26)] = inst_23413);
return statearr_23598;
})();if(cljs.core.truth_(inst_23414))
{var statearr_23599_23664 = state_23522__$1;(statearr_23599_23664[(1)] = (13));
} else
{var statearr_23600_23665 = state_23522__$1;(statearr_23600_23665[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (18)))
{var inst_23447 = (state_23522[(2)]);var state_23522__$1 = state_23522;var statearr_23601_23666 = state_23522__$1;(statearr_23601_23666[(2)] = inst_23447);
(statearr_23601_23666[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (42)))
{var state_23522__$1 = state_23522;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23522__$1,(45),dchan);
} else
{if((state_val_23523 === (37)))
{var inst_23481 = (state_23522[(25)]);var inst_23490 = (state_23522[(23)]);var inst_23394 = (state_23522[(10)]);var inst_23490__$1 = cljs.core.first(inst_23481);var inst_23491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23490__$1,inst_23394,done);var state_23522__$1 = (function (){var statearr_23602 = state_23522;(statearr_23602[(23)] = inst_23490__$1);
return statearr_23602;
})();if(cljs.core.truth_(inst_23491))
{var statearr_23603_23667 = state_23522__$1;(statearr_23603_23667[(1)] = (39));
} else
{var statearr_23604_23668 = state_23522__$1;(statearr_23604_23668[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23523 === (8)))
{var inst_23406 = (state_23522[(14)]);var inst_23405 = (state_23522[(17)]);var inst_23408 = (inst_23406 < inst_23405);var inst_23409 = inst_23408;var state_23522__$1 = state_23522;if(cljs.core.truth_(inst_23409))
{var statearr_23605_23669 = state_23522__$1;(statearr_23605_23669[(1)] = (10));
} else
{var statearr_23606_23670 = state_23522__$1;(statearr_23606_23670[(1)] = (11));
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
});})(c__6485__auto___23616,cs,m,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___23616,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23610[(0)] = state_machine__6471__auto__);
(statearr_23610[(1)] = (1));
return statearr_23610;
});
var state_machine__6471__auto____1 = (function (state_23522){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23522);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23611){if((e23611 instanceof Object))
{var ex__6474__auto__ = e23611;var statearr_23612_23671 = state_23522;(statearr_23612_23671[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23522);
return cljs.core.constant$keyword$16;
} else
{throw e23611;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__23672 = state_23522;
state_23522 = G__23672;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23522){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23616,cs,m,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_23613 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23616);
return statearr_23613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23616,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23677 = {};return obj23677;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23681 = x__4277__auto__;return goog.typeOf(G__23681);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23685 = x__4277__auto__;return goog.typeOf(G__23685);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23689 = x__4277__auto__;return goog.typeOf(G__23689);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23693 = x__4277__auto__;return goog.typeOf(G__23693);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23697 = x__4277__auto__;return goog.typeOf(G__23697);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23698){var map__23704 = p__23698;var map__23704__$1 = ((cljs.core.seq_QMARK_(map__23704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23704):map__23704);var opts = map__23704__$1;var statearr_23705_23709 = state;(statearr_23705_23709[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23704,map__23704__$1,opts){
return (function (val){var statearr_23706_23710 = state;(statearr_23706_23710[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23704,map__23704__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23707_23711 = state;(statearr_23707_23711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23708 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23708) : cljs.core.deref.call(null,G__23708));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23698 = null;if (arguments.length > 3) {
  p__23698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23698);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23712){
var state = cljs.core.first(arglist__23712);
arglist__23712 = cljs.core.next(arglist__23712);
var cont_block = cljs.core.first(arglist__23712);
arglist__23712 = cljs.core.next(arglist__23712);
var ports = cljs.core.first(arglist__23712);
var p__23698 = cljs.core.rest(arglist__23712);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23698);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__23846 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23846) : cljs.core.atom.call(null,G__23846));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__23847 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23847) : cljs.core.atom.call(null,G__23847));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__23848 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23848) : attr.call(null,G__23848));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__23849 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23849) : cljs.core.deref.call(null,G__23849));
})();var mode = (function (){var G__23850 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23850) : cljs.core.deref.call(null,G__23850));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23851 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23852){
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
this.meta23852 = meta23852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23851.cljs$lang$type = true;
cljs.core.async.t23851.cljs$lang$ctorStr = "cljs.core.async/t23851";
cljs.core.async.t23851.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23851");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__23854_23979 = self__.cs;var G__23855_23980 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23854_23979,G__23855_23980) : cljs.core.reset_BANG_.call(null,G__23854_23979,G__23855_23980));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23856 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23856) : self__.solo_modes.call(null,G__23856));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__23857_23981 = self__.solo_mode;var G__23858_23982 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23857_23981,G__23858_23982) : cljs.core.reset_BANG_.call(null,G__23857_23981,G__23858_23982));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23853){var self__ = this;
var _23853__$1 = this;return self__.meta23852;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23853,meta23852__$1){var self__ = this;
var _23853__$1 = this;return (new cljs.core.async.t23851(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23852__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23851 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23851(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23852){return (new cljs.core.async.t23851(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23852));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23851(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6485__auto___23983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23930){var state_val_23931 = (state_23930[(1)]);if((state_val_23931 === (7)))
{var inst_23872 = (state_23930[(7)]);var inst_23877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23872);var state_23930__$1 = state_23930;var statearr_23932_23984 = state_23930__$1;(statearr_23932_23984[(2)] = inst_23877);
(statearr_23932_23984[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (20)))
{var inst_23887 = (state_23930[(8)]);var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23930__$1,(23),out,inst_23887);
} else
{if((state_val_23931 === (1)))
{var inst_23862 = (state_23930[(9)]);var inst_23862__$1 = calc_state();var inst_23863 = cljs.core.seq_QMARK_(inst_23862__$1);var state_23930__$1 = (function (){var statearr_23933 = state_23930;(statearr_23933[(9)] = inst_23862__$1);
return statearr_23933;
})();if(inst_23863)
{var statearr_23934_23985 = state_23930__$1;(statearr_23934_23985[(1)] = (2));
} else
{var statearr_23935_23986 = state_23930__$1;(statearr_23935_23986[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (24)))
{var inst_23880 = (state_23930[(10)]);var inst_23872 = inst_23880;var state_23930__$1 = (function (){var statearr_23936 = state_23930;(statearr_23936[(7)] = inst_23872);
return statearr_23936;
})();var statearr_23937_23987 = state_23930__$1;(statearr_23937_23987[(2)] = null);
(statearr_23937_23987[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (4)))
{var inst_23862 = (state_23930[(9)]);var inst_23868 = (state_23930[(2)]);var inst_23869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868,cljs.core.constant$keyword$30);var inst_23870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868,cljs.core.constant$keyword$29);var inst_23871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868,cljs.core.constant$keyword$28);var inst_23872 = inst_23862;var state_23930__$1 = (function (){var statearr_23938 = state_23930;(statearr_23938[(11)] = inst_23871);
(statearr_23938[(12)] = inst_23869);
(statearr_23938[(7)] = inst_23872);
(statearr_23938[(13)] = inst_23870);
return statearr_23938;
})();var statearr_23939_23988 = state_23930__$1;(statearr_23939_23988[(2)] = null);
(statearr_23939_23988[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (15)))
{var state_23930__$1 = state_23930;var statearr_23940_23989 = state_23930__$1;(statearr_23940_23989[(2)] = null);
(statearr_23940_23989[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (21)))
{var inst_23880 = (state_23930[(10)]);var inst_23872 = inst_23880;var state_23930__$1 = (function (){var statearr_23941 = state_23930;(statearr_23941[(7)] = inst_23872);
return statearr_23941;
})();var statearr_23942_23990 = state_23930__$1;(statearr_23942_23990[(2)] = null);
(statearr_23942_23990[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (13)))
{var inst_23926 = (state_23930[(2)]);var state_23930__$1 = state_23930;var statearr_23943_23991 = state_23930__$1;(statearr_23943_23991[(2)] = inst_23926);
(statearr_23943_23991[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (22)))
{var inst_23924 = (state_23930[(2)]);var state_23930__$1 = state_23930;var statearr_23944_23992 = state_23930__$1;(statearr_23944_23992[(2)] = inst_23924);
(statearr_23944_23992[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (6)))
{var inst_23928 = (state_23930[(2)]);var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.return_chan(state_23930__$1,inst_23928);
} else
{if((state_val_23931 === (25)))
{var state_23930__$1 = state_23930;var statearr_23945_23993 = state_23930__$1;(statearr_23945_23993[(2)] = null);
(statearr_23945_23993[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (17)))
{var inst_23903 = (state_23930[(14)]);var state_23930__$1 = state_23930;var statearr_23946_23994 = state_23930__$1;(statearr_23946_23994[(2)] = inst_23903);
(statearr_23946_23994[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (3)))
{var inst_23862 = (state_23930[(9)]);var state_23930__$1 = state_23930;var statearr_23947_23995 = state_23930__$1;(statearr_23947_23995[(2)] = inst_23862);
(statearr_23947_23995[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (12)))
{var inst_23903 = (state_23930[(14)]);var inst_23888 = (state_23930[(15)]);var inst_23883 = (state_23930[(16)]);var inst_23903__$1 = (function (){var G__23948 = inst_23888;return (inst_23883.cljs$core$IFn$_invoke$arity$1 ? inst_23883.cljs$core$IFn$_invoke$arity$1(G__23948) : inst_23883.call(null,G__23948));
})();var state_23930__$1 = (function (){var statearr_23949 = state_23930;(statearr_23949[(14)] = inst_23903__$1);
return statearr_23949;
})();if(cljs.core.truth_(inst_23903__$1))
{var statearr_23950_23996 = state_23930__$1;(statearr_23950_23996[(1)] = (17));
} else
{var statearr_23951_23997 = state_23930__$1;(statearr_23951_23997[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (2)))
{var inst_23862 = (state_23930[(9)]);var inst_23865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23862);var state_23930__$1 = state_23930;var statearr_23952_23998 = state_23930__$1;(statearr_23952_23998[(2)] = inst_23865);
(statearr_23952_23998[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (23)))
{var inst_23915 = (state_23930[(2)]);var state_23930__$1 = state_23930;if(cljs.core.truth_(inst_23915))
{var statearr_23953_23999 = state_23930__$1;(statearr_23953_23999[(1)] = (24));
} else
{var statearr_23954_24000 = state_23930__$1;(statearr_23954_24000[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (19)))
{var inst_23912 = (state_23930[(2)]);var state_23930__$1 = state_23930;if(cljs.core.truth_(inst_23912))
{var statearr_23955_24001 = state_23930__$1;(statearr_23955_24001[(1)] = (20));
} else
{var statearr_23956_24002 = state_23930__$1;(statearr_23956_24002[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (11)))
{var inst_23887 = (state_23930[(8)]);var inst_23893 = (inst_23887 == null);var state_23930__$1 = state_23930;if(cljs.core.truth_(inst_23893))
{var statearr_23957_24003 = state_23930__$1;(statearr_23957_24003[(1)] = (14));
} else
{var statearr_23958_24004 = state_23930__$1;(statearr_23958_24004[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (9)))
{var inst_23880 = (state_23930[(10)]);var inst_23880__$1 = (state_23930[(2)]);var inst_23881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23880__$1,cljs.core.constant$keyword$30);var inst_23882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23880__$1,cljs.core.constant$keyword$29);var inst_23883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23880__$1,cljs.core.constant$keyword$28);var state_23930__$1 = (function (){var statearr_23959 = state_23930;(statearr_23959[(10)] = inst_23880__$1);
(statearr_23959[(16)] = inst_23883);
(statearr_23959[(17)] = inst_23882);
return statearr_23959;
})();return cljs.core.async.ioc_alts_BANG_(state_23930__$1,(10),inst_23881);
} else
{if((state_val_23931 === (5)))
{var inst_23872 = (state_23930[(7)]);var inst_23875 = cljs.core.seq_QMARK_(inst_23872);var state_23930__$1 = state_23930;if(inst_23875)
{var statearr_23960_24005 = state_23930__$1;(statearr_23960_24005[(1)] = (7));
} else
{var statearr_23961_24006 = state_23930__$1;(statearr_23961_24006[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (14)))
{var inst_23888 = (state_23930[(15)]);var inst_23895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23888);var state_23930__$1 = state_23930;var statearr_23962_24007 = state_23930__$1;(statearr_23962_24007[(2)] = inst_23895);
(statearr_23962_24007[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (26)))
{var inst_23920 = (state_23930[(2)]);var state_23930__$1 = state_23930;var statearr_23963_24008 = state_23930__$1;(statearr_23963_24008[(2)] = inst_23920);
(statearr_23963_24008[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (16)))
{var inst_23898 = (state_23930[(2)]);var inst_23899 = calc_state();var inst_23872 = inst_23899;var state_23930__$1 = (function (){var statearr_23964 = state_23930;(statearr_23964[(18)] = inst_23898);
(statearr_23964[(7)] = inst_23872);
return statearr_23964;
})();var statearr_23965_24009 = state_23930__$1;(statearr_23965_24009[(2)] = null);
(statearr_23965_24009[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (10)))
{var inst_23887 = (state_23930[(8)]);var inst_23888 = (state_23930[(15)]);var inst_23886 = (state_23930[(2)]);var inst_23887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23886,(0),null);var inst_23888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23886,(1),null);var inst_23889 = (inst_23887__$1 == null);var inst_23890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23888__$1,change);var inst_23891 = (inst_23889) || (inst_23890);var state_23930__$1 = (function (){var statearr_23966 = state_23930;(statearr_23966[(8)] = inst_23887__$1);
(statearr_23966[(15)] = inst_23888__$1);
return statearr_23966;
})();if(cljs.core.truth_(inst_23891))
{var statearr_23967_24010 = state_23930__$1;(statearr_23967_24010[(1)] = (11));
} else
{var statearr_23968_24011 = state_23930__$1;(statearr_23968_24011[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (18)))
{var inst_23888 = (state_23930[(15)]);var inst_23883 = (state_23930[(16)]);var inst_23882 = (state_23930[(17)]);var inst_23907 = cljs.core.empty_QMARK_(inst_23883);var inst_23908 = (function (){var G__23969 = inst_23888;return (inst_23882.cljs$core$IFn$_invoke$arity$1 ? inst_23882.cljs$core$IFn$_invoke$arity$1(G__23969) : inst_23882.call(null,G__23969));
})();var inst_23909 = cljs.core.not(inst_23908);var inst_23910 = (inst_23907) && (inst_23909);var state_23930__$1 = state_23930;var statearr_23970_24012 = state_23930__$1;(statearr_23970_24012[(2)] = inst_23910);
(statearr_23970_24012[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23931 === (8)))
{var inst_23872 = (state_23930[(7)]);var state_23930__$1 = state_23930;var statearr_23971_24013 = state_23930__$1;(statearr_23971_24013[(2)] = inst_23872);
(statearr_23971_24013[(1)] = (9));
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
});})(c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6470__auto__,c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_23975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23975[(0)] = state_machine__6471__auto__);
(statearr_23975[(1)] = (1));
return statearr_23975;
});
var state_machine__6471__auto____1 = (function (state_23930){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_23930);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object))
{var ex__6474__auto__ = e23976;var statearr_23977_24014 = state_23930;(statearr_23977_24014[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23930);
return cljs.core.constant$keyword$16;
} else
{throw e23976;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24015 = state_23930;
state_23930 = G__24015;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6487__auto__ = (function (){var statearr_23978 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_23978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___23983);
return statearr_23978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___23983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24017 = {};return obj24017;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24021 = x__4277__auto__;return goog.typeOf(G__24021);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24025 = x__4277__auto__;return goog.typeOf(G__24025);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24031 = x__4277__auto__;return goog.typeOf(G__24031);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24033 = x__4277__auto__;return goog.typeOf(G__24033);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__24172 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24172) : cljs.core.atom.call(null,G__24172));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24174 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24174) : cljs.core.deref.call(null,G__24174));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__24034_SHARP_){if(cljs.core.truth_((function (){var G__24175 = topic;return (p1__24034_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24034_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24175) : p1__24034_SHARP_.call(null,G__24175));
})()))
{return p1__24034_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24034_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24176 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24176) : buf_fn.call(null,G__24176));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24177 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24178){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24178 = meta24178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24177.cljs$lang$type = true;
cljs.core.async.t24177.cljs$lang$ctorStr = "cljs.core.async/t24177";
cljs.core.async.t24177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24177");
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__24180 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24180) : self__.ensure_mult.call(null,G__24180));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24181 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24181) : cljs.core.deref.call(null,G__24181));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__24182 = self__.mults;var G__24183 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24182,G__24183) : cljs.core.reset_BANG_.call(null,G__24182,G__24183));
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24179){var self__ = this;
var _24179__$1 = this;return self__.meta24178;
});})(mults,ensure_mult))
;
cljs.core.async.t24177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24179,meta24178__$1){var self__ = this;
var _24179__$1 = this;return (new cljs.core.async.t24177(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24178__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24177 = ((function (mults,ensure_mult){
return (function __GT_t24177(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24178){return (new cljs.core.async.t24177(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24178));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24177(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6485__auto___24306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24306,mults,ensure_mult,p){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24306,mults,ensure_mult,p){
return (function (state_24255){var state_val_24256 = (state_24255[(1)]);if((state_val_24256 === (7)))
{var inst_24251 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24257_24307 = state_24255__$1;(statearr_24257_24307[(2)] = inst_24251);
(statearr_24257_24307[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (20)))
{var state_24255__$1 = state_24255;var statearr_24258_24308 = state_24255__$1;(statearr_24258_24308[(2)] = null);
(statearr_24258_24308[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (1)))
{var state_24255__$1 = state_24255;var statearr_24259_24309 = state_24255__$1;(statearr_24259_24309[(2)] = null);
(statearr_24259_24309[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (24)))
{var inst_24234 = (state_24255[(7)]);var inst_24243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24234);var state_24255__$1 = state_24255;var statearr_24260_24310 = state_24255__$1;(statearr_24260_24310[(2)] = inst_24243);
(statearr_24260_24310[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (4)))
{var inst_24186 = (state_24255[(8)]);var inst_24186__$1 = (state_24255[(2)]);var inst_24187 = (inst_24186__$1 == null);var state_24255__$1 = (function (){var statearr_24261 = state_24255;(statearr_24261[(8)] = inst_24186__$1);
return statearr_24261;
})();if(cljs.core.truth_(inst_24187))
{var statearr_24262_24311 = state_24255__$1;(statearr_24262_24311[(1)] = (5));
} else
{var statearr_24263_24312 = state_24255__$1;(statearr_24263_24312[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (15)))
{var inst_24228 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24264_24313 = state_24255__$1;(statearr_24264_24313[(2)] = inst_24228);
(statearr_24264_24313[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (21)))
{var inst_24248 = (state_24255[(2)]);var state_24255__$1 = (function (){var statearr_24265 = state_24255;(statearr_24265[(9)] = inst_24248);
return statearr_24265;
})();var statearr_24266_24314 = state_24255__$1;(statearr_24266_24314[(2)] = null);
(statearr_24266_24314[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (13)))
{var inst_24210 = (state_24255[(10)]);var inst_24212 = cljs.core.chunked_seq_QMARK_(inst_24210);var state_24255__$1 = state_24255;if(inst_24212)
{var statearr_24267_24315 = state_24255__$1;(statearr_24267_24315[(1)] = (16));
} else
{var statearr_24268_24316 = state_24255__$1;(statearr_24268_24316[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (22)))
{var inst_24240 = (state_24255[(2)]);var state_24255__$1 = state_24255;if(cljs.core.truth_(inst_24240))
{var statearr_24269_24317 = state_24255__$1;(statearr_24269_24317[(1)] = (23));
} else
{var statearr_24270_24318 = state_24255__$1;(statearr_24270_24318[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (6)))
{var inst_24236 = (state_24255[(11)]);var inst_24186 = (state_24255[(8)]);var inst_24234 = (state_24255[(7)]);var inst_24234__$1 = (function (){var G__24271 = inst_24186;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24271) : topic_fn.call(null,G__24271));
})();var inst_24235 = (function (){var G__24272 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24272) : cljs.core.deref.call(null,G__24272));
})();var inst_24236__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24235,inst_24234__$1);var state_24255__$1 = (function (){var statearr_24273 = state_24255;(statearr_24273[(11)] = inst_24236__$1);
(statearr_24273[(7)] = inst_24234__$1);
return statearr_24273;
})();if(cljs.core.truth_(inst_24236__$1))
{var statearr_24274_24319 = state_24255__$1;(statearr_24274_24319[(1)] = (19));
} else
{var statearr_24275_24320 = state_24255__$1;(statearr_24275_24320[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (25)))
{var inst_24245 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24276_24321 = state_24255__$1;(statearr_24276_24321[(2)] = inst_24245);
(statearr_24276_24321[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (17)))
{var inst_24210 = (state_24255[(10)]);var inst_24219 = cljs.core.first(inst_24210);var inst_24220 = cljs.core.async.muxch_STAR_(inst_24219);var inst_24221 = cljs.core.async.close_BANG_(inst_24220);var inst_24222 = cljs.core.next(inst_24210);var inst_24196 = inst_24222;var inst_24197 = null;var inst_24198 = (0);var inst_24199 = (0);var state_24255__$1 = (function (){var statearr_24277 = state_24255;(statearr_24277[(12)] = inst_24196);
(statearr_24277[(13)] = inst_24199);
(statearr_24277[(14)] = inst_24198);
(statearr_24277[(15)] = inst_24197);
(statearr_24277[(16)] = inst_24221);
return statearr_24277;
})();var statearr_24278_24322 = state_24255__$1;(statearr_24278_24322[(2)] = null);
(statearr_24278_24322[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (3)))
{var inst_24253 = (state_24255[(2)]);var state_24255__$1 = state_24255;return cljs.core.async.impl.ioc_helpers.return_chan(state_24255__$1,inst_24253);
} else
{if((state_val_24256 === (12)))
{var inst_24230 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24279_24323 = state_24255__$1;(statearr_24279_24323[(2)] = inst_24230);
(statearr_24279_24323[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (2)))
{var state_24255__$1 = state_24255;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24255__$1,(4),ch);
} else
{if((state_val_24256 === (23)))
{var state_24255__$1 = state_24255;var statearr_24280_24324 = state_24255__$1;(statearr_24280_24324[(2)] = null);
(statearr_24280_24324[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (19)))
{var inst_24236 = (state_24255[(11)]);var inst_24186 = (state_24255[(8)]);var inst_24238 = cljs.core.async.muxch_STAR_(inst_24236);var state_24255__$1 = state_24255;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24255__$1,(22),inst_24238,inst_24186);
} else
{if((state_val_24256 === (11)))
{var inst_24196 = (state_24255[(12)]);var inst_24210 = (state_24255[(10)]);var inst_24210__$1 = cljs.core.seq(inst_24196);var state_24255__$1 = (function (){var statearr_24281 = state_24255;(statearr_24281[(10)] = inst_24210__$1);
return statearr_24281;
})();if(inst_24210__$1)
{var statearr_24282_24325 = state_24255__$1;(statearr_24282_24325[(1)] = (13));
} else
{var statearr_24283_24326 = state_24255__$1;(statearr_24283_24326[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (9)))
{var inst_24232 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24284_24327 = state_24255__$1;(statearr_24284_24327[(2)] = inst_24232);
(statearr_24284_24327[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (5)))
{var inst_24193 = (function (){var G__24285 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24285) : cljs.core.deref.call(null,G__24285));
})();var inst_24194 = cljs.core.vals(inst_24193);var inst_24195 = cljs.core.seq(inst_24194);var inst_24196 = inst_24195;var inst_24197 = null;var inst_24198 = (0);var inst_24199 = (0);var state_24255__$1 = (function (){var statearr_24286 = state_24255;(statearr_24286[(12)] = inst_24196);
(statearr_24286[(13)] = inst_24199);
(statearr_24286[(14)] = inst_24198);
(statearr_24286[(15)] = inst_24197);
return statearr_24286;
})();var statearr_24287_24328 = state_24255__$1;(statearr_24287_24328[(2)] = null);
(statearr_24287_24328[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (14)))
{var state_24255__$1 = state_24255;var statearr_24291_24329 = state_24255__$1;(statearr_24291_24329[(2)] = null);
(statearr_24291_24329[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (16)))
{var inst_24210 = (state_24255[(10)]);var inst_24214 = cljs.core.chunk_first(inst_24210);var inst_24215 = cljs.core.chunk_rest(inst_24210);var inst_24216 = cljs.core.count(inst_24214);var inst_24196 = inst_24215;var inst_24197 = inst_24214;var inst_24198 = inst_24216;var inst_24199 = (0);var state_24255__$1 = (function (){var statearr_24292 = state_24255;(statearr_24292[(12)] = inst_24196);
(statearr_24292[(13)] = inst_24199);
(statearr_24292[(14)] = inst_24198);
(statearr_24292[(15)] = inst_24197);
return statearr_24292;
})();var statearr_24293_24330 = state_24255__$1;(statearr_24293_24330[(2)] = null);
(statearr_24293_24330[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (10)))
{var inst_24196 = (state_24255[(12)]);var inst_24199 = (state_24255[(13)]);var inst_24198 = (state_24255[(14)]);var inst_24197 = (state_24255[(15)]);var inst_24204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24197,inst_24199);var inst_24205 = cljs.core.async.muxch_STAR_(inst_24204);var inst_24206 = cljs.core.async.close_BANG_(inst_24205);var inst_24207 = (inst_24199 + (1));var tmp24288 = inst_24196;var tmp24289 = inst_24198;var tmp24290 = inst_24197;var inst_24196__$1 = tmp24288;var inst_24197__$1 = tmp24290;var inst_24198__$1 = tmp24289;var inst_24199__$1 = inst_24207;var state_24255__$1 = (function (){var statearr_24294 = state_24255;(statearr_24294[(17)] = inst_24206);
(statearr_24294[(12)] = inst_24196__$1);
(statearr_24294[(13)] = inst_24199__$1);
(statearr_24294[(14)] = inst_24198__$1);
(statearr_24294[(15)] = inst_24197__$1);
return statearr_24294;
})();var statearr_24295_24331 = state_24255__$1;(statearr_24295_24331[(2)] = null);
(statearr_24295_24331[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (18)))
{var inst_24225 = (state_24255[(2)]);var state_24255__$1 = state_24255;var statearr_24296_24332 = state_24255__$1;(statearr_24296_24332[(2)] = inst_24225);
(statearr_24296_24332[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24256 === (8)))
{var inst_24199 = (state_24255[(13)]);var inst_24198 = (state_24255[(14)]);var inst_24201 = (inst_24199 < inst_24198);var inst_24202 = inst_24201;var state_24255__$1 = state_24255;if(cljs.core.truth_(inst_24202))
{var statearr_24297_24333 = state_24255__$1;(statearr_24297_24333[(1)] = (10));
} else
{var statearr_24298_24334 = state_24255__$1;(statearr_24298_24334[(1)] = (11));
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
});})(c__6485__auto___24306,mults,ensure_mult,p))
;return ((function (switch__6470__auto__,c__6485__auto___24306,mults,ensure_mult,p){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24302[(0)] = state_machine__6471__auto__);
(statearr_24302[(1)] = (1));
return statearr_24302;
});
var state_machine__6471__auto____1 = (function (state_24255){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24255);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24303){if((e24303 instanceof Object))
{var ex__6474__auto__ = e24303;var statearr_24304_24335 = state_24255;(statearr_24304_24335[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24255);
return cljs.core.constant$keyword$16;
} else
{throw e24303;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24336 = state_24255;
state_24255 = G__24336;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24306,mults,ensure_mult,p))
})();var state__6487__auto__ = (function (){var statearr_24305 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24306);
return statearr_24305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24306,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__24417 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24417) : cljs.core.atom.call(null,G__24417));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6485__auto___24490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24456){var state_val_24457 = (state_24456[(1)]);if((state_val_24457 === (7)))
{var state_24456__$1 = state_24456;var statearr_24458_24491 = state_24456__$1;(statearr_24458_24491[(2)] = null);
(statearr_24458_24491[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (1)))
{var state_24456__$1 = state_24456;var statearr_24459_24492 = state_24456__$1;(statearr_24459_24492[(2)] = null);
(statearr_24459_24492[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (4)))
{var inst_24420 = (state_24456[(7)]);var inst_24422 = (inst_24420 < cnt);var state_24456__$1 = state_24456;if(cljs.core.truth_(inst_24422))
{var statearr_24460_24493 = state_24456__$1;(statearr_24460_24493[(1)] = (6));
} else
{var statearr_24461_24494 = state_24456__$1;(statearr_24461_24494[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (15)))
{var inst_24452 = (state_24456[(2)]);var state_24456__$1 = state_24456;var statearr_24462_24495 = state_24456__$1;(statearr_24462_24495[(2)] = inst_24452);
(statearr_24462_24495[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (13)))
{var inst_24445 = cljs.core.async.close_BANG_(out);var state_24456__$1 = state_24456;var statearr_24463_24496 = state_24456__$1;(statearr_24463_24496[(2)] = inst_24445);
(statearr_24463_24496[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (6)))
{var state_24456__$1 = state_24456;var statearr_24464_24497 = state_24456__$1;(statearr_24464_24497[(2)] = null);
(statearr_24464_24497[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (3)))
{var inst_24454 = (state_24456[(2)]);var state_24456__$1 = state_24456;return cljs.core.async.impl.ioc_helpers.return_chan(state_24456__$1,inst_24454);
} else
{if((state_val_24457 === (12)))
{var inst_24442 = (state_24456[(8)]);var inst_24442__$1 = (state_24456[(2)]);var inst_24443 = cljs.core.some(cljs.core.nil_QMARK_,inst_24442__$1);var state_24456__$1 = (function (){var statearr_24465 = state_24456;(statearr_24465[(8)] = inst_24442__$1);
return statearr_24465;
})();if(cljs.core.truth_(inst_24443))
{var statearr_24466_24498 = state_24456__$1;(statearr_24466_24498[(1)] = (13));
} else
{var statearr_24467_24499 = state_24456__$1;(statearr_24467_24499[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (2)))
{var inst_24419 = (function (){var G__24468 = dctr;var G__24469 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24468,G__24469) : cljs.core.reset_BANG_.call(null,G__24468,G__24469));
})();var inst_24420 = (0);var state_24456__$1 = (function (){var statearr_24470 = state_24456;(statearr_24470[(7)] = inst_24420);
(statearr_24470[(9)] = inst_24419);
return statearr_24470;
})();var statearr_24471_24500 = state_24456__$1;(statearr_24471_24500[(2)] = null);
(statearr_24471_24500[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (11)))
{var inst_24420 = (state_24456[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24456,(10),Object,null,(9));var inst_24429 = (function (){var G__24472 = inst_24420;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24472) : chs__$1.call(null,G__24472));
})();var inst_24430 = (function (){var G__24473 = inst_24420;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24473) : done.call(null,G__24473));
})();var inst_24431 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24429,inst_24430);var state_24456__$1 = state_24456;var statearr_24474_24501 = state_24456__$1;(statearr_24474_24501[(2)] = inst_24431);
cljs.core.async.impl.ioc_helpers.process_exception(state_24456__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (9)))
{var inst_24420 = (state_24456[(7)]);var inst_24433 = (state_24456[(2)]);var inst_24434 = (inst_24420 + (1));var inst_24420__$1 = inst_24434;var state_24456__$1 = (function (){var statearr_24475 = state_24456;(statearr_24475[(7)] = inst_24420__$1);
(statearr_24475[(10)] = inst_24433);
return statearr_24475;
})();var statearr_24476_24502 = state_24456__$1;(statearr_24476_24502[(2)] = null);
(statearr_24476_24502[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (5)))
{var inst_24440 = (state_24456[(2)]);var state_24456__$1 = (function (){var statearr_24477 = state_24456;(statearr_24477[(11)] = inst_24440);
return statearr_24477;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24456__$1,(12),dchan);
} else
{if((state_val_24457 === (14)))
{var inst_24442 = (state_24456[(8)]);var inst_24447 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24442);var state_24456__$1 = state_24456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24456__$1,(16),out,inst_24447);
} else
{if((state_val_24457 === (16)))
{var inst_24449 = (state_24456[(2)]);var state_24456__$1 = (function (){var statearr_24478 = state_24456;(statearr_24478[(12)] = inst_24449);
return statearr_24478;
})();var statearr_24479_24503 = state_24456__$1;(statearr_24479_24503[(2)] = null);
(statearr_24479_24503[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (10)))
{var inst_24424 = (state_24456[(2)]);var inst_24425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24456__$1 = (function (){var statearr_24480 = state_24456;(statearr_24480[(13)] = inst_24424);
return statearr_24480;
})();var statearr_24481_24504 = state_24456__$1;(statearr_24481_24504[(2)] = inst_24425);
cljs.core.async.impl.ioc_helpers.process_exception(state_24456__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_24457 === (8)))
{var inst_24438 = (state_24456[(2)]);var state_24456__$1 = state_24456;var statearr_24482_24505 = state_24456__$1;(statearr_24482_24505[(2)] = inst_24438);
(statearr_24482_24505[(1)] = (5));
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
});})(c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24486[(0)] = state_machine__6471__auto__);
(statearr_24486[(1)] = (1));
return statearr_24486;
});
var state_machine__6471__auto____1 = (function (state_24456){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24456);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24487){if((e24487 instanceof Object))
{var ex__6474__auto__ = e24487;var statearr_24488_24506 = state_24456;(statearr_24488_24506[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24456);
return cljs.core.constant$keyword$16;
} else
{throw e24487;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24507 = state_24456;
state_24456 = G__24507;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24456){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_24489 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24490);
return statearr_24489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24490,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___24617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24617,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24617,out){
return (function (state_24593){var state_val_24594 = (state_24593[(1)]);if((state_val_24594 === (7)))
{var inst_24572 = (state_24593[(7)]);var inst_24573 = (state_24593[(8)]);var inst_24572__$1 = (state_24593[(2)]);var inst_24573__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24572__$1,(0),null);var inst_24574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24572__$1,(1),null);var inst_24575 = (inst_24573__$1 == null);var state_24593__$1 = (function (){var statearr_24595 = state_24593;(statearr_24595[(7)] = inst_24572__$1);
(statearr_24595[(9)] = inst_24574);
(statearr_24595[(8)] = inst_24573__$1);
return statearr_24595;
})();if(cljs.core.truth_(inst_24575))
{var statearr_24596_24618 = state_24593__$1;(statearr_24596_24618[(1)] = (8));
} else
{var statearr_24597_24619 = state_24593__$1;(statearr_24597_24619[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (1)))
{var inst_24564 = cljs.core.vec(chs);var inst_24565 = inst_24564;var state_24593__$1 = (function (){var statearr_24598 = state_24593;(statearr_24598[(10)] = inst_24565);
return statearr_24598;
})();var statearr_24599_24620 = state_24593__$1;(statearr_24599_24620[(2)] = null);
(statearr_24599_24620[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (4)))
{var inst_24565 = (state_24593[(10)]);var state_24593__$1 = state_24593;return cljs.core.async.ioc_alts_BANG_(state_24593__$1,(7),inst_24565);
} else
{if((state_val_24594 === (6)))
{var inst_24589 = (state_24593[(2)]);var state_24593__$1 = state_24593;var statearr_24600_24621 = state_24593__$1;(statearr_24600_24621[(2)] = inst_24589);
(statearr_24600_24621[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (3)))
{var inst_24591 = (state_24593[(2)]);var state_24593__$1 = state_24593;return cljs.core.async.impl.ioc_helpers.return_chan(state_24593__$1,inst_24591);
} else
{if((state_val_24594 === (2)))
{var inst_24565 = (state_24593[(10)]);var inst_24567 = cljs.core.count(inst_24565);var inst_24568 = (inst_24567 > (0));var state_24593__$1 = state_24593;if(cljs.core.truth_(inst_24568))
{var statearr_24602_24622 = state_24593__$1;(statearr_24602_24622[(1)] = (4));
} else
{var statearr_24603_24623 = state_24593__$1;(statearr_24603_24623[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (11)))
{var inst_24565 = (state_24593[(10)]);var inst_24582 = (state_24593[(2)]);var tmp24601 = inst_24565;var inst_24565__$1 = tmp24601;var state_24593__$1 = (function (){var statearr_24604 = state_24593;(statearr_24604[(10)] = inst_24565__$1);
(statearr_24604[(11)] = inst_24582);
return statearr_24604;
})();var statearr_24605_24624 = state_24593__$1;(statearr_24605_24624[(2)] = null);
(statearr_24605_24624[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (9)))
{var inst_24573 = (state_24593[(8)]);var state_24593__$1 = state_24593;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24593__$1,(11),out,inst_24573);
} else
{if((state_val_24594 === (5)))
{var inst_24587 = cljs.core.async.close_BANG_(out);var state_24593__$1 = state_24593;var statearr_24606_24625 = state_24593__$1;(statearr_24606_24625[(2)] = inst_24587);
(statearr_24606_24625[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (10)))
{var inst_24585 = (state_24593[(2)]);var state_24593__$1 = state_24593;var statearr_24607_24626 = state_24593__$1;(statearr_24607_24626[(2)] = inst_24585);
(statearr_24607_24626[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24594 === (8)))
{var inst_24572 = (state_24593[(7)]);var inst_24565 = (state_24593[(10)]);var inst_24574 = (state_24593[(9)]);var inst_24573 = (state_24593[(8)]);var inst_24577 = (function (){var c = inst_24574;var v = inst_24573;var vec__24570 = inst_24572;var cs = inst_24565;return ((function (c,v,vec__24570,cs,inst_24572,inst_24565,inst_24574,inst_24573,state_val_24594,c__6485__auto___24617,out){
return (function (p1__24508_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24508_SHARP_);
});
;})(c,v,vec__24570,cs,inst_24572,inst_24565,inst_24574,inst_24573,state_val_24594,c__6485__auto___24617,out))
})();var inst_24578 = cljs.core.filterv(inst_24577,inst_24565);var inst_24565__$1 = inst_24578;var state_24593__$1 = (function (){var statearr_24608 = state_24593;(statearr_24608[(10)] = inst_24565__$1);
return statearr_24608;
})();var statearr_24609_24627 = state_24593__$1;(statearr_24609_24627[(2)] = null);
(statearr_24609_24627[(1)] = (2));
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
});})(c__6485__auto___24617,out))
;return ((function (switch__6470__auto__,c__6485__auto___24617,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24613 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24613[(0)] = state_machine__6471__auto__);
(statearr_24613[(1)] = (1));
return statearr_24613;
});
var state_machine__6471__auto____1 = (function (state_24593){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24593);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24614){if((e24614 instanceof Object))
{var ex__6474__auto__ = e24614;var statearr_24615_24628 = state_24593;(statearr_24615_24628[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24593);
return cljs.core.constant$keyword$16;
} else
{throw e24614;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24629 = state_24593;
state_24593 = G__24629;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24593){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24617,out))
})();var state__6487__auto__ = (function (){var statearr_24616 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24617);
return statearr_24616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24617,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___24725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24725,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24725,out){
return (function (state_24702){var state_val_24703 = (state_24702[(1)]);if((state_val_24703 === (7)))
{var inst_24684 = (state_24702[(7)]);var inst_24684__$1 = (state_24702[(2)]);var inst_24685 = (inst_24684__$1 == null);var inst_24686 = cljs.core.not(inst_24685);var state_24702__$1 = (function (){var statearr_24704 = state_24702;(statearr_24704[(7)] = inst_24684__$1);
return statearr_24704;
})();if(inst_24686)
{var statearr_24705_24726 = state_24702__$1;(statearr_24705_24726[(1)] = (8));
} else
{var statearr_24706_24727 = state_24702__$1;(statearr_24706_24727[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (1)))
{var inst_24679 = (0);var state_24702__$1 = (function (){var statearr_24707 = state_24702;(statearr_24707[(8)] = inst_24679);
return statearr_24707;
})();var statearr_24708_24728 = state_24702__$1;(statearr_24708_24728[(2)] = null);
(statearr_24708_24728[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (4)))
{var state_24702__$1 = state_24702;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24702__$1,(7),ch);
} else
{if((state_val_24703 === (6)))
{var inst_24697 = (state_24702[(2)]);var state_24702__$1 = state_24702;var statearr_24709_24729 = state_24702__$1;(statearr_24709_24729[(2)] = inst_24697);
(statearr_24709_24729[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (3)))
{var inst_24699 = (state_24702[(2)]);var inst_24700 = cljs.core.async.close_BANG_(out);var state_24702__$1 = (function (){var statearr_24710 = state_24702;(statearr_24710[(9)] = inst_24699);
return statearr_24710;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24702__$1,inst_24700);
} else
{if((state_val_24703 === (2)))
{var inst_24679 = (state_24702[(8)]);var inst_24681 = (inst_24679 < n);var state_24702__$1 = state_24702;if(cljs.core.truth_(inst_24681))
{var statearr_24711_24730 = state_24702__$1;(statearr_24711_24730[(1)] = (4));
} else
{var statearr_24712_24731 = state_24702__$1;(statearr_24712_24731[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (11)))
{var inst_24679 = (state_24702[(8)]);var inst_24689 = (state_24702[(2)]);var inst_24690 = (inst_24679 + (1));var inst_24679__$1 = inst_24690;var state_24702__$1 = (function (){var statearr_24713 = state_24702;(statearr_24713[(10)] = inst_24689);
(statearr_24713[(8)] = inst_24679__$1);
return statearr_24713;
})();var statearr_24714_24732 = state_24702__$1;(statearr_24714_24732[(2)] = null);
(statearr_24714_24732[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (9)))
{var state_24702__$1 = state_24702;var statearr_24715_24733 = state_24702__$1;(statearr_24715_24733[(2)] = null);
(statearr_24715_24733[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (5)))
{var state_24702__$1 = state_24702;var statearr_24716_24734 = state_24702__$1;(statearr_24716_24734[(2)] = null);
(statearr_24716_24734[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (10)))
{var inst_24694 = (state_24702[(2)]);var state_24702__$1 = state_24702;var statearr_24717_24735 = state_24702__$1;(statearr_24717_24735[(2)] = inst_24694);
(statearr_24717_24735[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24703 === (8)))
{var inst_24684 = (state_24702[(7)]);var state_24702__$1 = state_24702;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24702__$1,(11),out,inst_24684);
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
});})(c__6485__auto___24725,out))
;return ((function (switch__6470__auto__,c__6485__auto___24725,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24721 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24721[(0)] = state_machine__6471__auto__);
(statearr_24721[(1)] = (1));
return statearr_24721;
});
var state_machine__6471__auto____1 = (function (state_24702){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24702);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24722){if((e24722 instanceof Object))
{var ex__6474__auto__ = e24722;var statearr_24723_24736 = state_24702;(statearr_24723_24736[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24702);
return cljs.core.constant$keyword$16;
} else
{throw e24722;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24737 = state_24702;
state_24702 = G__24737;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24702){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24725,out))
})();var state__6487__auto__ = (function (){var statearr_24724 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24725);
return statearr_24724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24725,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24750 = (function (ch,f,map_LT_,meta24751){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24751 = meta24751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24750.cljs$lang$type = true;
cljs.core.async.t24750.cljs$lang$ctorStr = "cljs.core.async/t24750";
cljs.core.async.t24750.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24750");
});
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24753 = (function (fn1,_,meta24751,ch,f,map_LT_,meta24754){
this.fn1 = fn1;
this._ = _;
this.meta24751 = meta24751;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24754 = meta24754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24753.cljs$lang$type = true;
cljs.core.async.t24753.cljs$lang$ctorStr = "cljs.core.async/t24753";
cljs.core.async.t24753.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24753");
});})(___$1))
;
cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24738_SHARP_){var G__24756 = (((p1__24738_SHARP_ == null))?null:(function (){var G__24757 = p1__24738_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24757) : self__.f.call(null,G__24757));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24756) : f1.call(null,G__24756));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24755){var self__ = this;
var _24755__$1 = this;return self__.meta24754;
});})(___$1))
;
cljs.core.async.t24753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24755,meta24754__$1){var self__ = this;
var _24755__$1 = this;return (new cljs.core.async.t24753(self__.fn1,self__._,self__.meta24751,self__.ch,self__.f,self__.map_LT_,meta24754__$1));
});})(___$1))
;
cljs.core.async.__GT_t24753 = ((function (___$1){
return (function __GT_t24753(fn1__$1,___$2,meta24751__$1,ch__$2,f__$2,map_LT___$2,meta24754){return (new cljs.core.async.t24753(fn1__$1,___$2,meta24751__$1,ch__$2,f__$2,map_LT___$2,meta24754));
});})(___$1))
;
}
return (new cljs.core.async.t24753(fn1,___$1,self__.meta24751,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__24758 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24758) : cljs.core.deref.call(null,G__24758));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24759 = (function (){var G__24760 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24760) : cljs.core.deref.call(null,G__24760));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24759) : self__.f.call(null,G__24759));
})());
} else
{return ret;
}
});
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24750.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24752){var self__ = this;
var _24752__$1 = this;return self__.meta24751;
});
cljs.core.async.t24750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24752,meta24751__$1){var self__ = this;
var _24752__$1 = this;return (new cljs.core.async.t24750(self__.ch,self__.f,self__.map_LT_,meta24751__$1));
});
cljs.core.async.__GT_t24750 = (function __GT_t24750(ch__$1,f__$1,map_LT___$1,meta24751){return (new cljs.core.async.t24750(ch__$1,f__$1,map_LT___$1,meta24751));
});
}
return (new cljs.core.async.t24750(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24765 = (function (ch,f,map_GT_,meta24766){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24766 = meta24766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24765.cljs$lang$type = true;
cljs.core.async.t24765.cljs$lang$ctorStr = "cljs.core.async/t24765";
cljs.core.async.t24765.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24765");
});
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24768 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24768) : self__.f.call(null,G__24768));
})(),fn1);
});
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24767){var self__ = this;
var _24767__$1 = this;return self__.meta24766;
});
cljs.core.async.t24765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24767,meta24766__$1){var self__ = this;
var _24767__$1 = this;return (new cljs.core.async.t24765(self__.ch,self__.f,self__.map_GT_,meta24766__$1));
});
cljs.core.async.__GT_t24765 = (function __GT_t24765(ch__$1,f__$1,map_GT___$1,meta24766){return (new cljs.core.async.t24765(ch__$1,f__$1,map_GT___$1,meta24766));
});
}
return (new cljs.core.async.t24765(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24773 = (function (ch,p,filter_GT_,meta24774){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24774 = meta24774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24773.cljs$lang$type = true;
cljs.core.async.t24773.cljs$lang$ctorStr = "cljs.core.async/t24773";
cljs.core.async.t24773.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24773");
});
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24776 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24776) : self__.p.call(null,G__24776));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24775){var self__ = this;
var _24775__$1 = this;return self__.meta24774;
});
cljs.core.async.t24773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24775,meta24774__$1){var self__ = this;
var _24775__$1 = this;return (new cljs.core.async.t24773(self__.ch,self__.p,self__.filter_GT_,meta24774__$1));
});
cljs.core.async.__GT_t24773 = (function __GT_t24773(ch__$1,p__$1,filter_GT___$1,meta24774){return (new cljs.core.async.t24773(ch__$1,p__$1,filter_GT___$1,meta24774));
});
}
return (new cljs.core.async.t24773(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___24864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___24864,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___24864,out){
return (function (state_24842){var state_val_24843 = (state_24842[(1)]);if((state_val_24843 === (7)))
{var inst_24838 = (state_24842[(2)]);var state_24842__$1 = state_24842;var statearr_24844_24865 = state_24842__$1;(statearr_24844_24865[(2)] = inst_24838);
(statearr_24844_24865[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (1)))
{var state_24842__$1 = state_24842;var statearr_24845_24866 = state_24842__$1;(statearr_24845_24866[(2)] = null);
(statearr_24845_24866[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (4)))
{var inst_24824 = (state_24842[(7)]);var inst_24824__$1 = (state_24842[(2)]);var inst_24825 = (inst_24824__$1 == null);var state_24842__$1 = (function (){var statearr_24846 = state_24842;(statearr_24846[(7)] = inst_24824__$1);
return statearr_24846;
})();if(cljs.core.truth_(inst_24825))
{var statearr_24847_24867 = state_24842__$1;(statearr_24847_24867[(1)] = (5));
} else
{var statearr_24848_24868 = state_24842__$1;(statearr_24848_24868[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (6)))
{var inst_24824 = (state_24842[(7)]);var inst_24829 = (function (){var G__24849 = inst_24824;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24849) : p.call(null,G__24849));
})();var state_24842__$1 = state_24842;if(cljs.core.truth_(inst_24829))
{var statearr_24850_24869 = state_24842__$1;(statearr_24850_24869[(1)] = (8));
} else
{var statearr_24851_24870 = state_24842__$1;(statearr_24851_24870[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (3)))
{var inst_24840 = (state_24842[(2)]);var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.return_chan(state_24842__$1,inst_24840);
} else
{if((state_val_24843 === (2)))
{var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24842__$1,(4),ch);
} else
{if((state_val_24843 === (11)))
{var inst_24832 = (state_24842[(2)]);var state_24842__$1 = state_24842;var statearr_24852_24871 = state_24842__$1;(statearr_24852_24871[(2)] = inst_24832);
(statearr_24852_24871[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (9)))
{var state_24842__$1 = state_24842;var statearr_24853_24872 = state_24842__$1;(statearr_24853_24872[(2)] = null);
(statearr_24853_24872[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (5)))
{var inst_24827 = cljs.core.async.close_BANG_(out);var state_24842__$1 = state_24842;var statearr_24854_24873 = state_24842__$1;(statearr_24854_24873[(2)] = inst_24827);
(statearr_24854_24873[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (10)))
{var inst_24835 = (state_24842[(2)]);var state_24842__$1 = (function (){var statearr_24855 = state_24842;(statearr_24855[(8)] = inst_24835);
return statearr_24855;
})();var statearr_24856_24874 = state_24842__$1;(statearr_24856_24874[(2)] = null);
(statearr_24856_24874[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24843 === (8)))
{var inst_24824 = (state_24842[(7)]);var state_24842__$1 = state_24842;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24842__$1,(11),out,inst_24824);
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
});})(c__6485__auto___24864,out))
;return ((function (switch__6470__auto__,c__6485__auto___24864,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_24860 = [null,null,null,null,null,null,null,null,null];(statearr_24860[(0)] = state_machine__6471__auto__);
(statearr_24860[(1)] = (1));
return statearr_24860;
});
var state_machine__6471__auto____1 = (function (state_24842){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_24842);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object))
{var ex__6474__auto__ = e24861;var statearr_24862_24875 = state_24842;(statearr_24862_24875[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24842);
return cljs.core.constant$keyword$16;
} else
{throw e24861;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__24876 = state_24842;
state_24842 = G__24876;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___24864,out))
})();var state__6487__auto__ = (function (){var statearr_24863 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_24863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___24864);
return statearr_24863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___24864,out))
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
return (function (state_25046){var state_val_25047 = (state_25046[(1)]);if((state_val_25047 === (7)))
{var inst_25042 = (state_25046[(2)]);var state_25046__$1 = state_25046;var statearr_25048_25090 = state_25046__$1;(statearr_25048_25090[(2)] = inst_25042);
(statearr_25048_25090[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (20)))
{var inst_25012 = (state_25046[(7)]);var inst_25023 = (state_25046[(2)]);var inst_25024 = cljs.core.next(inst_25012);var inst_24998 = inst_25024;var inst_24999 = null;var inst_25000 = (0);var inst_25001 = (0);var state_25046__$1 = (function (){var statearr_25049 = state_25046;(statearr_25049[(8)] = inst_25000);
(statearr_25049[(9)] = inst_24999);
(statearr_25049[(10)] = inst_25023);
(statearr_25049[(11)] = inst_25001);
(statearr_25049[(12)] = inst_24998);
return statearr_25049;
})();var statearr_25050_25091 = state_25046__$1;(statearr_25050_25091[(2)] = null);
(statearr_25050_25091[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (1)))
{var state_25046__$1 = state_25046;var statearr_25051_25092 = state_25046__$1;(statearr_25051_25092[(2)] = null);
(statearr_25051_25092[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (4)))
{var inst_24987 = (state_25046[(13)]);var inst_24987__$1 = (state_25046[(2)]);var inst_24988 = (inst_24987__$1 == null);var state_25046__$1 = (function (){var statearr_25052 = state_25046;(statearr_25052[(13)] = inst_24987__$1);
return statearr_25052;
})();if(cljs.core.truth_(inst_24988))
{var statearr_25053_25093 = state_25046__$1;(statearr_25053_25093[(1)] = (5));
} else
{var statearr_25054_25094 = state_25046__$1;(statearr_25054_25094[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (15)))
{var state_25046__$1 = state_25046;var statearr_25058_25095 = state_25046__$1;(statearr_25058_25095[(2)] = null);
(statearr_25058_25095[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (21)))
{var state_25046__$1 = state_25046;var statearr_25059_25096 = state_25046__$1;(statearr_25059_25096[(2)] = null);
(statearr_25059_25096[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (13)))
{var inst_25000 = (state_25046[(8)]);var inst_24999 = (state_25046[(9)]);var inst_25001 = (state_25046[(11)]);var inst_24998 = (state_25046[(12)]);var inst_25008 = (state_25046[(2)]);var inst_25009 = (inst_25001 + (1));var tmp25055 = inst_25000;var tmp25056 = inst_24999;var tmp25057 = inst_24998;var inst_24998__$1 = tmp25057;var inst_24999__$1 = tmp25056;var inst_25000__$1 = tmp25055;var inst_25001__$1 = inst_25009;var state_25046__$1 = (function (){var statearr_25060 = state_25046;(statearr_25060[(8)] = inst_25000__$1);
(statearr_25060[(9)] = inst_24999__$1);
(statearr_25060[(14)] = inst_25008);
(statearr_25060[(11)] = inst_25001__$1);
(statearr_25060[(12)] = inst_24998__$1);
return statearr_25060;
})();var statearr_25061_25097 = state_25046__$1;(statearr_25061_25097[(2)] = null);
(statearr_25061_25097[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (22)))
{var state_25046__$1 = state_25046;var statearr_25062_25098 = state_25046__$1;(statearr_25062_25098[(2)] = null);
(statearr_25062_25098[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (6)))
{var inst_24987 = (state_25046[(13)]);var inst_24996 = (function (){var G__25063 = inst_24987;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25063) : f.call(null,G__25063));
})();var inst_24997 = cljs.core.seq(inst_24996);var inst_24998 = inst_24997;var inst_24999 = null;var inst_25000 = (0);var inst_25001 = (0);var state_25046__$1 = (function (){var statearr_25064 = state_25046;(statearr_25064[(8)] = inst_25000);
(statearr_25064[(9)] = inst_24999);
(statearr_25064[(11)] = inst_25001);
(statearr_25064[(12)] = inst_24998);
return statearr_25064;
})();var statearr_25065_25099 = state_25046__$1;(statearr_25065_25099[(2)] = null);
(statearr_25065_25099[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (17)))
{var inst_25012 = (state_25046[(7)]);var inst_25016 = cljs.core.chunk_first(inst_25012);var inst_25017 = cljs.core.chunk_rest(inst_25012);var inst_25018 = cljs.core.count(inst_25016);var inst_24998 = inst_25017;var inst_24999 = inst_25016;var inst_25000 = inst_25018;var inst_25001 = (0);var state_25046__$1 = (function (){var statearr_25066 = state_25046;(statearr_25066[(8)] = inst_25000);
(statearr_25066[(9)] = inst_24999);
(statearr_25066[(11)] = inst_25001);
(statearr_25066[(12)] = inst_24998);
return statearr_25066;
})();var statearr_25067_25100 = state_25046__$1;(statearr_25067_25100[(2)] = null);
(statearr_25067_25100[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (3)))
{var inst_25044 = (state_25046[(2)]);var state_25046__$1 = state_25046;return cljs.core.async.impl.ioc_helpers.return_chan(state_25046__$1,inst_25044);
} else
{if((state_val_25047 === (12)))
{var inst_25032 = (state_25046[(2)]);var state_25046__$1 = state_25046;var statearr_25068_25101 = state_25046__$1;(statearr_25068_25101[(2)] = inst_25032);
(statearr_25068_25101[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (2)))
{var state_25046__$1 = state_25046;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25046__$1,(4),in$);
} else
{if((state_val_25047 === (23)))
{var inst_25040 = (state_25046[(2)]);var state_25046__$1 = state_25046;var statearr_25069_25102 = state_25046__$1;(statearr_25069_25102[(2)] = inst_25040);
(statearr_25069_25102[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (19)))
{var inst_25027 = (state_25046[(2)]);var state_25046__$1 = state_25046;var statearr_25070_25103 = state_25046__$1;(statearr_25070_25103[(2)] = inst_25027);
(statearr_25070_25103[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (11)))
{var inst_24998 = (state_25046[(12)]);var inst_25012 = (state_25046[(7)]);var inst_25012__$1 = cljs.core.seq(inst_24998);var state_25046__$1 = (function (){var statearr_25071 = state_25046;(statearr_25071[(7)] = inst_25012__$1);
return statearr_25071;
})();if(inst_25012__$1)
{var statearr_25072_25104 = state_25046__$1;(statearr_25072_25104[(1)] = (14));
} else
{var statearr_25073_25105 = state_25046__$1;(statearr_25073_25105[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (9)))
{var inst_25034 = (state_25046[(2)]);var inst_25035 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_25046__$1 = (function (){var statearr_25074 = state_25046;(statearr_25074[(15)] = inst_25034);
return statearr_25074;
})();if(cljs.core.truth_(inst_25035))
{var statearr_25075_25106 = state_25046__$1;(statearr_25075_25106[(1)] = (21));
} else
{var statearr_25076_25107 = state_25046__$1;(statearr_25076_25107[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (5)))
{var inst_24990 = cljs.core.async.close_BANG_(out);var state_25046__$1 = state_25046;var statearr_25077_25108 = state_25046__$1;(statearr_25077_25108[(2)] = inst_24990);
(statearr_25077_25108[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (14)))
{var inst_25012 = (state_25046[(7)]);var inst_25014 = cljs.core.chunked_seq_QMARK_(inst_25012);var state_25046__$1 = state_25046;if(inst_25014)
{var statearr_25078_25109 = state_25046__$1;(statearr_25078_25109[(1)] = (17));
} else
{var statearr_25079_25110 = state_25046__$1;(statearr_25079_25110[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (16)))
{var inst_25030 = (state_25046[(2)]);var state_25046__$1 = state_25046;var statearr_25080_25111 = state_25046__$1;(statearr_25080_25111[(2)] = inst_25030);
(statearr_25080_25111[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25047 === (10)))
{var inst_24999 = (state_25046[(9)]);var inst_25001 = (state_25046[(11)]);var inst_25006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24999,inst_25001);var state_25046__$1 = state_25046;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25046__$1,(13),out,inst_25006);
} else
{if((state_val_25047 === (18)))
{var inst_25012 = (state_25046[(7)]);var inst_25021 = cljs.core.first(inst_25012);var state_25046__$1 = state_25046;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25046__$1,(20),out,inst_25021);
} else
{if((state_val_25047 === (8)))
{var inst_25000 = (state_25046[(8)]);var inst_25001 = (state_25046[(11)]);var inst_25003 = (inst_25001 < inst_25000);var inst_25004 = inst_25003;var state_25046__$1 = state_25046;if(cljs.core.truth_(inst_25004))
{var statearr_25081_25112 = state_25046__$1;(statearr_25081_25112[(1)] = (10));
} else
{var statearr_25082_25113 = state_25046__$1;(statearr_25082_25113[(1)] = (11));
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
var state_machine__6471__auto____0 = (function (){var statearr_25086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25086[(0)] = state_machine__6471__auto__);
(statearr_25086[(1)] = (1));
return statearr_25086;
});
var state_machine__6471__auto____1 = (function (state_25046){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25046);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25087){if((e25087 instanceof Object))
{var ex__6474__auto__ = e25087;var statearr_25088_25114 = state_25046;(statearr_25088_25114[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25046);
return cljs.core.constant$keyword$16;
} else
{throw e25087;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25115 = state_25046;
state_25046 = G__25115;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25046){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_25089 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_25089;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25220,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25220,out){
return (function (state_25195){var state_val_25196 = (state_25195[(1)]);if((state_val_25196 === (7)))
{var inst_25190 = (state_25195[(2)]);var state_25195__$1 = state_25195;var statearr_25197_25221 = state_25195__$1;(statearr_25197_25221[(2)] = inst_25190);
(statearr_25197_25221[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (1)))
{var inst_25172 = null;var state_25195__$1 = (function (){var statearr_25198 = state_25195;(statearr_25198[(7)] = inst_25172);
return statearr_25198;
})();var statearr_25199_25222 = state_25195__$1;(statearr_25199_25222[(2)] = null);
(statearr_25199_25222[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (4)))
{var inst_25175 = (state_25195[(8)]);var inst_25175__$1 = (state_25195[(2)]);var inst_25176 = (inst_25175__$1 == null);var inst_25177 = cljs.core.not(inst_25176);var state_25195__$1 = (function (){var statearr_25200 = state_25195;(statearr_25200[(8)] = inst_25175__$1);
return statearr_25200;
})();if(inst_25177)
{var statearr_25201_25223 = state_25195__$1;(statearr_25201_25223[(1)] = (5));
} else
{var statearr_25202_25224 = state_25195__$1;(statearr_25202_25224[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (6)))
{var state_25195__$1 = state_25195;var statearr_25203_25225 = state_25195__$1;(statearr_25203_25225[(2)] = null);
(statearr_25203_25225[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (3)))
{var inst_25192 = (state_25195[(2)]);var inst_25193 = cljs.core.async.close_BANG_(out);var state_25195__$1 = (function (){var statearr_25204 = state_25195;(statearr_25204[(9)] = inst_25192);
return statearr_25204;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25195__$1,inst_25193);
} else
{if((state_val_25196 === (2)))
{var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25195__$1,(4),ch);
} else
{if((state_val_25196 === (11)))
{var inst_25175 = (state_25195[(8)]);var inst_25184 = (state_25195[(2)]);var inst_25172 = inst_25175;var state_25195__$1 = (function (){var statearr_25205 = state_25195;(statearr_25205[(10)] = inst_25184);
(statearr_25205[(7)] = inst_25172);
return statearr_25205;
})();var statearr_25206_25226 = state_25195__$1;(statearr_25206_25226[(2)] = null);
(statearr_25206_25226[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (9)))
{var inst_25175 = (state_25195[(8)]);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25195__$1,(11),out,inst_25175);
} else
{if((state_val_25196 === (5)))
{var inst_25175 = (state_25195[(8)]);var inst_25172 = (state_25195[(7)]);var inst_25179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25175,inst_25172);var state_25195__$1 = state_25195;if(inst_25179)
{var statearr_25208_25227 = state_25195__$1;(statearr_25208_25227[(1)] = (8));
} else
{var statearr_25209_25228 = state_25195__$1;(statearr_25209_25228[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (10)))
{var inst_25187 = (state_25195[(2)]);var state_25195__$1 = state_25195;var statearr_25210_25229 = state_25195__$1;(statearr_25210_25229[(2)] = inst_25187);
(statearr_25210_25229[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25196 === (8)))
{var inst_25172 = (state_25195[(7)]);var tmp25207 = inst_25172;var inst_25172__$1 = tmp25207;var state_25195__$1 = (function (){var statearr_25211 = state_25195;(statearr_25211[(7)] = inst_25172__$1);
return statearr_25211;
})();var statearr_25212_25230 = state_25195__$1;(statearr_25212_25230[(2)] = null);
(statearr_25212_25230[(1)] = (2));
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
});})(c__6485__auto___25220,out))
;return ((function (switch__6470__auto__,c__6485__auto___25220,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25216[(0)] = state_machine__6471__auto__);
(statearr_25216[(1)] = (1));
return statearr_25216;
});
var state_machine__6471__auto____1 = (function (state_25195){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25195);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object))
{var ex__6474__auto__ = e25217;var statearr_25218_25231 = state_25195;(statearr_25218_25231[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25195);
return cljs.core.constant$keyword$16;
} else
{throw e25217;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25232 = state_25195;
state_25195 = G__25232;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25220,out))
})();var state__6487__auto__ = (function (){var statearr_25219 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25220);
return statearr_25219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25220,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25370,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25370,out){
return (function (state_25340){var state_val_25341 = (state_25340[(1)]);if((state_val_25341 === (7)))
{var inst_25336 = (state_25340[(2)]);var state_25340__$1 = state_25340;var statearr_25342_25371 = state_25340__$1;(statearr_25342_25371[(2)] = inst_25336);
(statearr_25342_25371[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (1)))
{var inst_25303 = (new Array(n));var inst_25304 = inst_25303;var inst_25305 = (0);var state_25340__$1 = (function (){var statearr_25343 = state_25340;(statearr_25343[(7)] = inst_25305);
(statearr_25343[(8)] = inst_25304);
return statearr_25343;
})();var statearr_25344_25372 = state_25340__$1;(statearr_25344_25372[(2)] = null);
(statearr_25344_25372[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (4)))
{var inst_25308 = (state_25340[(9)]);var inst_25308__$1 = (state_25340[(2)]);var inst_25309 = (inst_25308__$1 == null);var inst_25310 = cljs.core.not(inst_25309);var state_25340__$1 = (function (){var statearr_25345 = state_25340;(statearr_25345[(9)] = inst_25308__$1);
return statearr_25345;
})();if(inst_25310)
{var statearr_25346_25373 = state_25340__$1;(statearr_25346_25373[(1)] = (5));
} else
{var statearr_25347_25374 = state_25340__$1;(statearr_25347_25374[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (15)))
{var inst_25330 = (state_25340[(2)]);var state_25340__$1 = state_25340;var statearr_25348_25375 = state_25340__$1;(statearr_25348_25375[(2)] = inst_25330);
(statearr_25348_25375[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (13)))
{var state_25340__$1 = state_25340;var statearr_25349_25376 = state_25340__$1;(statearr_25349_25376[(2)] = null);
(statearr_25349_25376[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (6)))
{var inst_25305 = (state_25340[(7)]);var inst_25326 = (inst_25305 > (0));var state_25340__$1 = state_25340;if(cljs.core.truth_(inst_25326))
{var statearr_25350_25377 = state_25340__$1;(statearr_25350_25377[(1)] = (12));
} else
{var statearr_25351_25378 = state_25340__$1;(statearr_25351_25378[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (3)))
{var inst_25338 = (state_25340[(2)]);var state_25340__$1 = state_25340;return cljs.core.async.impl.ioc_helpers.return_chan(state_25340__$1,inst_25338);
} else
{if((state_val_25341 === (12)))
{var inst_25304 = (state_25340[(8)]);var inst_25328 = cljs.core.vec(inst_25304);var state_25340__$1 = state_25340;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25340__$1,(15),out,inst_25328);
} else
{if((state_val_25341 === (2)))
{var state_25340__$1 = state_25340;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25340__$1,(4),ch);
} else
{if((state_val_25341 === (11)))
{var inst_25320 = (state_25340[(2)]);var inst_25321 = (new Array(n));var inst_25304 = inst_25321;var inst_25305 = (0);var state_25340__$1 = (function (){var statearr_25352 = state_25340;(statearr_25352[(10)] = inst_25320);
(statearr_25352[(7)] = inst_25305);
(statearr_25352[(8)] = inst_25304);
return statearr_25352;
})();var statearr_25353_25379 = state_25340__$1;(statearr_25353_25379[(2)] = null);
(statearr_25353_25379[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (9)))
{var inst_25304 = (state_25340[(8)]);var inst_25318 = cljs.core.vec(inst_25304);var state_25340__$1 = state_25340;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25340__$1,(11),out,inst_25318);
} else
{if((state_val_25341 === (5)))
{var inst_25308 = (state_25340[(9)]);var inst_25305 = (state_25340[(7)]);var inst_25304 = (state_25340[(8)]);var inst_25313 = (state_25340[(11)]);var inst_25312 = (inst_25304[inst_25305] = inst_25308);var inst_25313__$1 = (inst_25305 + (1));var inst_25314 = (inst_25313__$1 < n);var state_25340__$1 = (function (){var statearr_25354 = state_25340;(statearr_25354[(12)] = inst_25312);
(statearr_25354[(11)] = inst_25313__$1);
return statearr_25354;
})();if(cljs.core.truth_(inst_25314))
{var statearr_25355_25380 = state_25340__$1;(statearr_25355_25380[(1)] = (8));
} else
{var statearr_25356_25381 = state_25340__$1;(statearr_25356_25381[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (14)))
{var inst_25333 = (state_25340[(2)]);var inst_25334 = cljs.core.async.close_BANG_(out);var state_25340__$1 = (function (){var statearr_25358 = state_25340;(statearr_25358[(13)] = inst_25333);
return statearr_25358;
})();var statearr_25359_25382 = state_25340__$1;(statearr_25359_25382[(2)] = inst_25334);
(statearr_25359_25382[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (10)))
{var inst_25324 = (state_25340[(2)]);var state_25340__$1 = state_25340;var statearr_25360_25383 = state_25340__$1;(statearr_25360_25383[(2)] = inst_25324);
(statearr_25360_25383[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25341 === (8)))
{var inst_25304 = (state_25340[(8)]);var inst_25313 = (state_25340[(11)]);var tmp25357 = inst_25304;var inst_25304__$1 = tmp25357;var inst_25305 = inst_25313;var state_25340__$1 = (function (){var statearr_25361 = state_25340;(statearr_25361[(7)] = inst_25305);
(statearr_25361[(8)] = inst_25304__$1);
return statearr_25361;
})();var statearr_25362_25384 = state_25340__$1;(statearr_25362_25384[(2)] = null);
(statearr_25362_25384[(1)] = (2));
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
});})(c__6485__auto___25370,out))
;return ((function (switch__6470__auto__,c__6485__auto___25370,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25366[(0)] = state_machine__6471__auto__);
(statearr_25366[(1)] = (1));
return statearr_25366;
});
var state_machine__6471__auto____1 = (function (state_25340){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25340);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25367){if((e25367 instanceof Object))
{var ex__6474__auto__ = e25367;var statearr_25368_25385 = state_25340;(statearr_25368_25385[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25340);
return cljs.core.constant$keyword$16;
} else
{throw e25367;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25386 = state_25340;
state_25340 = G__25386;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25340){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25370,out))
})();var state__6487__auto__ = (function (){var statearr_25369 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25370);
return statearr_25369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25370,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6485__auto___25534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6485__auto___25534,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___25534,out){
return (function (state_25503){var state_val_25504 = (state_25503[(1)]);if((state_val_25504 === (7)))
{var inst_25499 = (state_25503[(2)]);var state_25503__$1 = state_25503;var statearr_25505_25535 = state_25503__$1;(statearr_25505_25535[(2)] = inst_25499);
(statearr_25505_25535[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (1)))
{var inst_25462 = [];var inst_25463 = inst_25462;var inst_25464 = cljs.core.constant$keyword$31;var state_25503__$1 = (function (){var statearr_25506 = state_25503;(statearr_25506[(7)] = inst_25463);
(statearr_25506[(8)] = inst_25464);
return statearr_25506;
})();var statearr_25507_25536 = state_25503__$1;(statearr_25507_25536[(2)] = null);
(statearr_25507_25536[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (4)))
{var inst_25467 = (state_25503[(9)]);var inst_25467__$1 = (state_25503[(2)]);var inst_25468 = (inst_25467__$1 == null);var inst_25469 = cljs.core.not(inst_25468);var state_25503__$1 = (function (){var statearr_25508 = state_25503;(statearr_25508[(9)] = inst_25467__$1);
return statearr_25508;
})();if(inst_25469)
{var statearr_25509_25537 = state_25503__$1;(statearr_25509_25537[(1)] = (5));
} else
{var statearr_25510_25538 = state_25503__$1;(statearr_25510_25538[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (15)))
{var inst_25493 = (state_25503[(2)]);var state_25503__$1 = state_25503;var statearr_25511_25539 = state_25503__$1;(statearr_25511_25539[(2)] = inst_25493);
(statearr_25511_25539[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (13)))
{var state_25503__$1 = state_25503;var statearr_25512_25540 = state_25503__$1;(statearr_25512_25540[(2)] = null);
(statearr_25512_25540[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (6)))
{var inst_25463 = (state_25503[(7)]);var inst_25488 = inst_25463.length;var inst_25489 = (inst_25488 > (0));var state_25503__$1 = state_25503;if(cljs.core.truth_(inst_25489))
{var statearr_25513_25541 = state_25503__$1;(statearr_25513_25541[(1)] = (12));
} else
{var statearr_25514_25542 = state_25503__$1;(statearr_25514_25542[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (3)))
{var inst_25501 = (state_25503[(2)]);var state_25503__$1 = state_25503;return cljs.core.async.impl.ioc_helpers.return_chan(state_25503__$1,inst_25501);
} else
{if((state_val_25504 === (12)))
{var inst_25463 = (state_25503[(7)]);var inst_25491 = cljs.core.vec(inst_25463);var state_25503__$1 = state_25503;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25503__$1,(15),out,inst_25491);
} else
{if((state_val_25504 === (2)))
{var state_25503__$1 = state_25503;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25503__$1,(4),ch);
} else
{if((state_val_25504 === (11)))
{var inst_25471 = (state_25503[(10)]);var inst_25467 = (state_25503[(9)]);var inst_25481 = (state_25503[(2)]);var inst_25482 = [];var inst_25483 = inst_25482.push(inst_25467);var inst_25463 = inst_25482;var inst_25464 = inst_25471;var state_25503__$1 = (function (){var statearr_25515 = state_25503;(statearr_25515[(7)] = inst_25463);
(statearr_25515[(11)] = inst_25483);
(statearr_25515[(8)] = inst_25464);
(statearr_25515[(12)] = inst_25481);
return statearr_25515;
})();var statearr_25516_25543 = state_25503__$1;(statearr_25516_25543[(2)] = null);
(statearr_25516_25543[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (9)))
{var inst_25463 = (state_25503[(7)]);var inst_25479 = cljs.core.vec(inst_25463);var state_25503__$1 = state_25503;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25503__$1,(11),out,inst_25479);
} else
{if((state_val_25504 === (5)))
{var inst_25471 = (state_25503[(10)]);var inst_25467 = (state_25503[(9)]);var inst_25464 = (state_25503[(8)]);var inst_25471__$1 = (function (){var G__25517 = inst_25467;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25517) : f.call(null,G__25517));
})();var inst_25472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25471__$1,inst_25464);var inst_25473 = cljs.core.keyword_identical_QMARK_(inst_25464,cljs.core.constant$keyword$31);var inst_25474 = (inst_25472) || (inst_25473);var state_25503__$1 = (function (){var statearr_25518 = state_25503;(statearr_25518[(10)] = inst_25471__$1);
return statearr_25518;
})();if(cljs.core.truth_(inst_25474))
{var statearr_25519_25544 = state_25503__$1;(statearr_25519_25544[(1)] = (8));
} else
{var statearr_25520_25545 = state_25503__$1;(statearr_25520_25545[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (14)))
{var inst_25496 = (state_25503[(2)]);var inst_25497 = cljs.core.async.close_BANG_(out);var state_25503__$1 = (function (){var statearr_25522 = state_25503;(statearr_25522[(13)] = inst_25496);
return statearr_25522;
})();var statearr_25523_25546 = state_25503__$1;(statearr_25523_25546[(2)] = inst_25497);
(statearr_25523_25546[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (10)))
{var inst_25486 = (state_25503[(2)]);var state_25503__$1 = state_25503;var statearr_25524_25547 = state_25503__$1;(statearr_25524_25547[(2)] = inst_25486);
(statearr_25524_25547[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25504 === (8)))
{var inst_25471 = (state_25503[(10)]);var inst_25463 = (state_25503[(7)]);var inst_25467 = (state_25503[(9)]);var inst_25476 = inst_25463.push(inst_25467);var tmp25521 = inst_25463;var inst_25463__$1 = tmp25521;var inst_25464 = inst_25471;var state_25503__$1 = (function (){var statearr_25525 = state_25503;(statearr_25525[(7)] = inst_25463__$1);
(statearr_25525[(14)] = inst_25476);
(statearr_25525[(8)] = inst_25464);
return statearr_25525;
})();var statearr_25526_25548 = state_25503__$1;(statearr_25526_25548[(2)] = null);
(statearr_25526_25548[(1)] = (2));
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
});})(c__6485__auto___25534,out))
;return ((function (switch__6470__auto__,c__6485__auto___25534,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_25530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25530[(0)] = state_machine__6471__auto__);
(statearr_25530[(1)] = (1));
return statearr_25530;
});
var state_machine__6471__auto____1 = (function (state_25503){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__(state_25503);if(cljs.core.keyword_identical_QMARK_(result__6473__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e25531){if((e25531 instanceof Object))
{var ex__6474__auto__ = e25531;var statearr_25532_25549 = state_25503;(statearr_25532_25549[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25503);
return cljs.core.constant$keyword$16;
} else
{throw e25531;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6472__auto__,cljs.core.constant$keyword$16))
{{
var G__25550 = state_25503;
state_25503 = G__25550;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_25503){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_25503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___25534,out))
})();var state__6487__auto__ = (function (){var statearr_25533 = (function (){return (f__6486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6486__auto__.cljs$core$IFn$_invoke$arity$0() : f__6486__auto__.call(null));
})();(statearr_25533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___25534);
return statearr_25533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6487__auto__);
});})(c__6485__auto___25534,out))
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
