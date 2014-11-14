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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12058 = (function (f,fn_handler,meta12059){
this.f = f;
this.fn_handler = fn_handler;
this.meta12059 = meta12059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12058.cljs$lang$type = true;
cljs.core.async.t12058.cljs$lang$ctorStr = "cljs.core.async/t12058";
cljs.core.async.t12058.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12058");
});
cljs.core.async.t12058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12060){var self__ = this;
var _12060__$1 = this;return self__.meta12059;
});
cljs.core.async.t12058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12060,meta12059__$1){var self__ = this;
var _12060__$1 = this;return (new cljs.core.async.t12058(self__.f,self__.fn_handler,meta12059__$1));
});
cljs.core.async.__GT_t12058 = (function __GT_t12058(f__$1,fn_handler__$1,meta12059){return (new cljs.core.async.t12058(f__$1,fn_handler__$1,meta12059));
});
}
return (new cljs.core.async.t12058(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12062 = buff;if(G__12062)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12062.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12062.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12062);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12062);
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
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12063 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12063);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12063,ret){
return (function (){return fn1.call(null,val_12063);
});})(val_12063,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12064 = n;var x_12065 = (0);while(true){
if((x_12065 < n__4510__auto___12064))
{(a[x_12065] = (0));
{
var G__12066 = (x_12065 + (1));
x_12065 = G__12066;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12067 = (i + (1));
i = G__12067;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12071 = (function (flag,alt_flag,meta12072){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12072 = meta12072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12071.cljs$lang$type = true;
cljs.core.async.t12071.cljs$lang$ctorStr = "cljs.core.async/t12071";
cljs.core.async.t12071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12071");
});})(flag))
;
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12073){var self__ = this;
var _12073__$1 = this;return self__.meta12072;
});})(flag))
;
cljs.core.async.t12071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12073,meta12072__$1){var self__ = this;
var _12073__$1 = this;return (new cljs.core.async.t12071(self__.flag,self__.alt_flag,meta12072__$1));
});})(flag))
;
cljs.core.async.__GT_t12071 = ((function (flag){
return (function __GT_t12071(flag__$1,alt_flag__$1,meta12072){return (new cljs.core.async.t12071(flag__$1,alt_flag__$1,meta12072));
});})(flag))
;
}
return (new cljs.core.async.t12071(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12077 = (function (cb,flag,alt_handler,meta12078){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12078 = meta12078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12077.cljs$lang$type = true;
cljs.core.async.t12077.cljs$lang$ctorStr = "cljs.core.async/t12077";
cljs.core.async.t12077.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12077");
});
cljs.core.async.t12077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12079){var self__ = this;
var _12079__$1 = this;return self__.meta12078;
});
cljs.core.async.t12077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12079,meta12078__$1){var self__ = this;
var _12079__$1 = this;return (new cljs.core.async.t12077(self__.cb,self__.flag,self__.alt_handler,meta12078__$1));
});
cljs.core.async.__GT_t12077 = (function __GT_t12077(cb__$1,flag__$1,alt_handler__$1,meta12078){return (new cljs.core.async.t12077(cb__$1,flag__$1,alt_handler__$1,meta12078));
});
}
return (new cljs.core.async.t12077(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12080_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12080_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12081_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12081_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12082 = (i + (1));
i = G__12082;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__12083){var map__12085 = p__12083;var map__12085__$1 = ((cljs.core.seq_QMARK_.call(null,map__12085))?cljs.core.apply.call(null,cljs.core.hash_map,map__12085):map__12085);var opts = map__12085__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12083 = null;if (arguments.length > 1) {
  p__12083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12083);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12086){
var ports = cljs.core.first(arglist__12086);
var p__12083 = cljs.core.rest(arglist__12086);
return alts_BANG___delegate(ports,p__12083);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6485__auto___12181 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___12181){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___12181){
return (function (state_12157){var state_val_12158 = (state_12157[(1)]);if((state_val_12158 === (7)))
{var inst_12153 = (state_12157[(2)]);var state_12157__$1 = state_12157;var statearr_12159_12182 = state_12157__$1;(statearr_12159_12182[(2)] = inst_12153);
(statearr_12159_12182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (1)))
{var state_12157__$1 = state_12157;var statearr_12160_12183 = state_12157__$1;(statearr_12160_12183[(2)] = null);
(statearr_12160_12183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (4)))
{var inst_12136 = (state_12157[(7)]);var inst_12136__$1 = (state_12157[(2)]);var inst_12137 = (inst_12136__$1 == null);var state_12157__$1 = (function (){var statearr_12161 = state_12157;(statearr_12161[(7)] = inst_12136__$1);
return statearr_12161;
})();if(cljs.core.truth_(inst_12137))
{var statearr_12162_12184 = state_12157__$1;(statearr_12162_12184[(1)] = (5));
} else
{var statearr_12163_12185 = state_12157__$1;(statearr_12163_12185[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (13)))
{var state_12157__$1 = state_12157;var statearr_12164_12186 = state_12157__$1;(statearr_12164_12186[(2)] = null);
(statearr_12164_12186[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (6)))
{var inst_12136 = (state_12157[(7)]);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12157__$1,(11),to,inst_12136);
} else
{if((state_val_12158 === (3)))
{var inst_12155 = (state_12157[(2)]);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12157__$1,inst_12155);
} else
{if((state_val_12158 === (12)))
{var state_12157__$1 = state_12157;var statearr_12165_12187 = state_12157__$1;(statearr_12165_12187[(2)] = null);
(statearr_12165_12187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (2)))
{var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12157__$1,(4),from);
} else
{if((state_val_12158 === (11)))
{var inst_12146 = (state_12157[(2)]);var state_12157__$1 = state_12157;if(cljs.core.truth_(inst_12146))
{var statearr_12166_12188 = state_12157__$1;(statearr_12166_12188[(1)] = (12));
} else
{var statearr_12167_12189 = state_12157__$1;(statearr_12167_12189[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (9)))
{var state_12157__$1 = state_12157;var statearr_12168_12190 = state_12157__$1;(statearr_12168_12190[(2)] = null);
(statearr_12168_12190[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (5)))
{var state_12157__$1 = state_12157;if(cljs.core.truth_(close_QMARK_))
{var statearr_12169_12191 = state_12157__$1;(statearr_12169_12191[(1)] = (8));
} else
{var statearr_12170_12192 = state_12157__$1;(statearr_12170_12192[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (14)))
{var inst_12151 = (state_12157[(2)]);var state_12157__$1 = state_12157;var statearr_12171_12193 = state_12157__$1;(statearr_12171_12193[(2)] = inst_12151);
(statearr_12171_12193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (10)))
{var inst_12143 = (state_12157[(2)]);var state_12157__$1 = state_12157;var statearr_12172_12194 = state_12157__$1;(statearr_12172_12194[(2)] = inst_12143);
(statearr_12172_12194[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12158 === (8)))
{var inst_12140 = cljs.core.async.close_BANG_.call(null,to);var state_12157__$1 = state_12157;var statearr_12173_12195 = state_12157__$1;(statearr_12173_12195[(2)] = inst_12140);
(statearr_12173_12195[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___12181))
;return ((function (switch__6470__auto__,c__6485__auto___12181){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12177 = [null,null,null,null,null,null,null,null];(statearr_12177[(0)] = state_machine__6471__auto__);
(statearr_12177[(1)] = (1));
return statearr_12177;
});
var state_machine__6471__auto____1 = (function (state_12157){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12178){if((e12178 instanceof Object))
{var ex__6474__auto__ = e12178;var statearr_12179_12196 = state_12157;(statearr_12179_12196[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12178;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12197 = state_12157;
state_12157 = G__12197;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___12181))
})();var state__6487__auto__ = (function (){var statearr_12180 = f__6486__auto__.call(null);(statearr_12180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12181);
return statearr_12180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___12181))
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12381){var vec__12382 = p__12381;var v = cljs.core.nth.call(null,vec__12382,(0),null);var p = cljs.core.nth.call(null,vec__12382,(1),null);var job = vec__12382;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6485__auto___12564 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results){
return (function (state_12387){var state_val_12388 = (state_12387[(1)]);if((state_val_12388 === (2)))
{var inst_12384 = (state_12387[(2)]);var inst_12385 = cljs.core.async.close_BANG_.call(null,res);var state_12387__$1 = (function (){var statearr_12389 = state_12387;(statearr_12389[(7)] = inst_12384);
return statearr_12389;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12387__$1,inst_12385);
} else
{if((state_val_12388 === (1)))
{var state_12387__$1 = state_12387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12387__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results))
;return ((function (switch__6470__auto__,c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12393 = [null,null,null,null,null,null,null,null];(statearr_12393[(0)] = state_machine__6471__auto__);
(statearr_12393[(1)] = (1));
return statearr_12393;
});
var state_machine__6471__auto____1 = (function (state_12387){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12394){if((e12394 instanceof Object))
{var ex__6474__auto__ = e12394;var statearr_12395_12565 = state_12387;(statearr_12395_12565[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12566 = state_12387;
state_12387 = G__12566;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12387){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results))
})();var state__6487__auto__ = (function (){var statearr_12396 = f__6486__auto__.call(null);(statearr_12396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12564);
return statearr_12396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___12564,res,vec__12382,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12397){var vec__12398 = p__12397;var v = cljs.core.nth.call(null,vec__12398,(0),null);var p = cljs.core.nth.call(null,vec__12398,(1),null);var job = vec__12398;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12567 = n;var __12568 = (0);while(true){
if((__12568 < n__4510__auto___12567))
{var G__12399_12569 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12399_12569) {
case "async":
var c__6485__auto___12571 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12568,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__12568,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function (state_12412){var state_val_12413 = (state_12412[(1)]);if((state_val_12413 === (7)))
{var inst_12408 = (state_12412[(2)]);var state_12412__$1 = state_12412;var statearr_12414_12572 = state_12412__$1;(statearr_12414_12572[(2)] = inst_12408);
(statearr_12414_12572[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12413 === (6)))
{var state_12412__$1 = state_12412;var statearr_12415_12573 = state_12412__$1;(statearr_12415_12573[(2)] = null);
(statearr_12415_12573[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12413 === (5)))
{var state_12412__$1 = state_12412;var statearr_12416_12574 = state_12412__$1;(statearr_12416_12574[(2)] = null);
(statearr_12416_12574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12413 === (4)))
{var inst_12402 = (state_12412[(2)]);var inst_12403 = async.call(null,inst_12402);var state_12412__$1 = state_12412;if(cljs.core.truth_(inst_12403))
{var statearr_12417_12575 = state_12412__$1;(statearr_12417_12575[(1)] = (5));
} else
{var statearr_12418_12576 = state_12412__$1;(statearr_12418_12576[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12413 === (3)))
{var inst_12410 = (state_12412[(2)]);var state_12412__$1 = state_12412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12412__$1,inst_12410);
} else
{if((state_val_12413 === (2)))
{var state_12412__$1 = state_12412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12412__$1,(4),jobs);
} else
{if((state_val_12413 === (1)))
{var state_12412__$1 = state_12412;var statearr_12419_12577 = state_12412__$1;(statearr_12419_12577[(2)] = null);
(statearr_12419_12577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12568,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
;return ((function (__12568,switch__6470__auto__,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12423 = [null,null,null,null,null,null,null];(statearr_12423[(0)] = state_machine__6471__auto__);
(statearr_12423[(1)] = (1));
return statearr_12423;
});
var state_machine__6471__auto____1 = (function (state_12412){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12412);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12424){if((e12424 instanceof Object))
{var ex__6474__auto__ = e12424;var statearr_12425_12578 = state_12412;(statearr_12425_12578[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12579 = state_12412;
state_12412 = G__12579;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__12568,switch__6470__auto__,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_12426 = f__6486__auto__.call(null);(statearr_12426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12571);
return statearr_12426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(__12568,c__6485__auto___12571,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
);

break;
case "compute":
var c__6485__auto___12580 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12568,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (__12568,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function (state_12439){var state_val_12440 = (state_12439[(1)]);if((state_val_12440 === (7)))
{var inst_12435 = (state_12439[(2)]);var state_12439__$1 = state_12439;var statearr_12441_12581 = state_12439__$1;(statearr_12441_12581[(2)] = inst_12435);
(statearr_12441_12581[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (6)))
{var state_12439__$1 = state_12439;var statearr_12442_12582 = state_12439__$1;(statearr_12442_12582[(2)] = null);
(statearr_12442_12582[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (5)))
{var state_12439__$1 = state_12439;var statearr_12443_12583 = state_12439__$1;(statearr_12443_12583[(2)] = null);
(statearr_12443_12583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (4)))
{var inst_12429 = (state_12439[(2)]);var inst_12430 = process.call(null,inst_12429);var state_12439__$1 = state_12439;if(cljs.core.truth_(inst_12430))
{var statearr_12444_12584 = state_12439__$1;(statearr_12444_12584[(1)] = (5));
} else
{var statearr_12445_12585 = state_12439__$1;(statearr_12445_12585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (3)))
{var inst_12437 = (state_12439[(2)]);var state_12439__$1 = state_12439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12439__$1,inst_12437);
} else
{if((state_val_12440 === (2)))
{var state_12439__$1 = state_12439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12439__$1,(4),jobs);
} else
{if((state_val_12440 === (1)))
{var state_12439__$1 = state_12439;var statearr_12446_12586 = state_12439__$1;(statearr_12446_12586[(2)] = null);
(statearr_12446_12586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12568,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
;return ((function (__12568,switch__6470__auto__,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12450 = [null,null,null,null,null,null,null];(statearr_12450[(0)] = state_machine__6471__auto__);
(statearr_12450[(1)] = (1));
return statearr_12450;
});
var state_machine__6471__auto____1 = (function (state_12439){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12439);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12451){if((e12451 instanceof Object))
{var ex__6474__auto__ = e12451;var statearr_12452_12587 = state_12439;(statearr_12452_12587[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12451;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12588 = state_12439;
state_12439 = G__12588;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12439){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(__12568,switch__6470__auto__,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_12453 = f__6486__auto__.call(null);(statearr_12453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12580);
return statearr_12453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(__12568,c__6485__auto___12580,G__12399_12569,n__4510__auto___12567,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12589 = (__12568 + (1));
__12568 = G__12589;
continue;
}
} else
{}
break;
}
var c__6485__auto___12590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___12590,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___12590,jobs,results,process,async){
return (function (state_12475){var state_val_12476 = (state_12475[(1)]);if((state_val_12476 === (9)))
{var inst_12468 = (state_12475[(2)]);var state_12475__$1 = (function (){var statearr_12477 = state_12475;(statearr_12477[(7)] = inst_12468);
return statearr_12477;
})();var statearr_12478_12591 = state_12475__$1;(statearr_12478_12591[(2)] = null);
(statearr_12478_12591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12476 === (8)))
{var inst_12461 = (state_12475[(8)]);var inst_12466 = (state_12475[(2)]);var state_12475__$1 = (function (){var statearr_12479 = state_12475;(statearr_12479[(9)] = inst_12466);
return statearr_12479;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12475__$1,(9),results,inst_12461);
} else
{if((state_val_12476 === (7)))
{var inst_12471 = (state_12475[(2)]);var state_12475__$1 = state_12475;var statearr_12480_12592 = state_12475__$1;(statearr_12480_12592[(2)] = inst_12471);
(statearr_12480_12592[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12476 === (6)))
{var inst_12461 = (state_12475[(8)]);var inst_12456 = (state_12475[(10)]);var inst_12461__$1 = cljs.core.async.chan.call(null,(1));var inst_12462 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12463 = [inst_12456,inst_12461__$1];var inst_12464 = (new cljs.core.PersistentVector(null,2,(5),inst_12462,inst_12463,null));var state_12475__$1 = (function (){var statearr_12481 = state_12475;(statearr_12481[(8)] = inst_12461__$1);
return statearr_12481;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12475__$1,(8),jobs,inst_12464);
} else
{if((state_val_12476 === (5)))
{var inst_12459 = cljs.core.async.close_BANG_.call(null,jobs);var state_12475__$1 = state_12475;var statearr_12482_12593 = state_12475__$1;(statearr_12482_12593[(2)] = inst_12459);
(statearr_12482_12593[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12476 === (4)))
{var inst_12456 = (state_12475[(10)]);var inst_12456__$1 = (state_12475[(2)]);var inst_12457 = (inst_12456__$1 == null);var state_12475__$1 = (function (){var statearr_12483 = state_12475;(statearr_12483[(10)] = inst_12456__$1);
return statearr_12483;
})();if(cljs.core.truth_(inst_12457))
{var statearr_12484_12594 = state_12475__$1;(statearr_12484_12594[(1)] = (5));
} else
{var statearr_12485_12595 = state_12475__$1;(statearr_12485_12595[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12476 === (3)))
{var inst_12473 = (state_12475[(2)]);var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12475__$1,inst_12473);
} else
{if((state_val_12476 === (2)))
{var state_12475__$1 = state_12475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12475__$1,(4),from);
} else
{if((state_val_12476 === (1)))
{var state_12475__$1 = state_12475;var statearr_12486_12596 = state_12475__$1;(statearr_12486_12596[(2)] = null);
(statearr_12486_12596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___12590,jobs,results,process,async))
;return ((function (switch__6470__auto__,c__6485__auto___12590,jobs,results,process,async){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12490 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12490[(0)] = state_machine__6471__auto__);
(statearr_12490[(1)] = (1));
return statearr_12490;
});
var state_machine__6471__auto____1 = (function (state_12475){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12475);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12491){if((e12491 instanceof Object))
{var ex__6474__auto__ = e12491;var statearr_12492_12597 = state_12475;(statearr_12492_12597[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12598 = state_12475;
state_12475 = G__12598;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12475){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___12590,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_12493 = f__6486__auto__.call(null);(statearr_12493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12590);
return statearr_12493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___12590,jobs,results,process,async))
);
var c__6485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto__,jobs,results,process,async){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__,jobs,results,process,async){
return (function (state_12531){var state_val_12532 = (state_12531[(1)]);if((state_val_12532 === (7)))
{var inst_12527 = (state_12531[(2)]);var state_12531__$1 = state_12531;var statearr_12533_12599 = state_12531__$1;(statearr_12533_12599[(2)] = inst_12527);
(statearr_12533_12599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (20)))
{var state_12531__$1 = state_12531;var statearr_12534_12600 = state_12531__$1;(statearr_12534_12600[(2)] = null);
(statearr_12534_12600[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (1)))
{var state_12531__$1 = state_12531;var statearr_12535_12601 = state_12531__$1;(statearr_12535_12601[(2)] = null);
(statearr_12535_12601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (4)))
{var inst_12496 = (state_12531[(7)]);var inst_12496__$1 = (state_12531[(2)]);var inst_12497 = (inst_12496__$1 == null);var state_12531__$1 = (function (){var statearr_12536 = state_12531;(statearr_12536[(7)] = inst_12496__$1);
return statearr_12536;
})();if(cljs.core.truth_(inst_12497))
{var statearr_12537_12602 = state_12531__$1;(statearr_12537_12602[(1)] = (5));
} else
{var statearr_12538_12603 = state_12531__$1;(statearr_12538_12603[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (15)))
{var inst_12509 = (state_12531[(8)]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12531__$1,(18),to,inst_12509);
} else
{if((state_val_12532 === (21)))
{var inst_12522 = (state_12531[(2)]);var state_12531__$1 = state_12531;var statearr_12539_12604 = state_12531__$1;(statearr_12539_12604[(2)] = inst_12522);
(statearr_12539_12604[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (13)))
{var inst_12524 = (state_12531[(2)]);var state_12531__$1 = (function (){var statearr_12540 = state_12531;(statearr_12540[(9)] = inst_12524);
return statearr_12540;
})();var statearr_12541_12605 = state_12531__$1;(statearr_12541_12605[(2)] = null);
(statearr_12541_12605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (6)))
{var inst_12496 = (state_12531[(7)]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12531__$1,(11),inst_12496);
} else
{if((state_val_12532 === (17)))
{var inst_12517 = (state_12531[(2)]);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12517))
{var statearr_12542_12606 = state_12531__$1;(statearr_12542_12606[(1)] = (19));
} else
{var statearr_12543_12607 = state_12531__$1;(statearr_12543_12607[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (3)))
{var inst_12529 = (state_12531[(2)]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12531__$1,inst_12529);
} else
{if((state_val_12532 === (12)))
{var inst_12506 = (state_12531[(10)]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12531__$1,(14),inst_12506);
} else
{if((state_val_12532 === (2)))
{var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12531__$1,(4),results);
} else
{if((state_val_12532 === (19)))
{var state_12531__$1 = state_12531;var statearr_12544_12608 = state_12531__$1;(statearr_12544_12608[(2)] = null);
(statearr_12544_12608[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (11)))
{var inst_12506 = (state_12531[(2)]);var state_12531__$1 = (function (){var statearr_12545 = state_12531;(statearr_12545[(10)] = inst_12506);
return statearr_12545;
})();var statearr_12546_12609 = state_12531__$1;(statearr_12546_12609[(2)] = null);
(statearr_12546_12609[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (9)))
{var state_12531__$1 = state_12531;var statearr_12547_12610 = state_12531__$1;(statearr_12547_12610[(2)] = null);
(statearr_12547_12610[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (5)))
{var state_12531__$1 = state_12531;if(cljs.core.truth_(close_QMARK_))
{var statearr_12548_12611 = state_12531__$1;(statearr_12548_12611[(1)] = (8));
} else
{var statearr_12549_12612 = state_12531__$1;(statearr_12549_12612[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (14)))
{var inst_12511 = (state_12531[(11)]);var inst_12509 = (state_12531[(8)]);var inst_12509__$1 = (state_12531[(2)]);var inst_12510 = (inst_12509__$1 == null);var inst_12511__$1 = cljs.core.not.call(null,inst_12510);var state_12531__$1 = (function (){var statearr_12550 = state_12531;(statearr_12550[(11)] = inst_12511__$1);
(statearr_12550[(8)] = inst_12509__$1);
return statearr_12550;
})();if(inst_12511__$1)
{var statearr_12551_12613 = state_12531__$1;(statearr_12551_12613[(1)] = (15));
} else
{var statearr_12552_12614 = state_12531__$1;(statearr_12552_12614[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (16)))
{var inst_12511 = (state_12531[(11)]);var state_12531__$1 = state_12531;var statearr_12553_12615 = state_12531__$1;(statearr_12553_12615[(2)] = inst_12511);
(statearr_12553_12615[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (10)))
{var inst_12503 = (state_12531[(2)]);var state_12531__$1 = state_12531;var statearr_12554_12616 = state_12531__$1;(statearr_12554_12616[(2)] = inst_12503);
(statearr_12554_12616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (18)))
{var inst_12514 = (state_12531[(2)]);var state_12531__$1 = state_12531;var statearr_12555_12617 = state_12531__$1;(statearr_12555_12617[(2)] = inst_12514);
(statearr_12555_12617[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12532 === (8)))
{var inst_12500 = cljs.core.async.close_BANG_.call(null,to);var state_12531__$1 = state_12531;var statearr_12556_12618 = state_12531__$1;(statearr_12556_12618[(2)] = inst_12500);
(statearr_12556_12618[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__6471__auto____0 = (function (){var statearr_12560 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12560[(0)] = state_machine__6471__auto__);
(statearr_12560[(1)] = (1));
return statearr_12560;
});
var state_machine__6471__auto____1 = (function (state_12531){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12561){if((e12561 instanceof Object))
{var ex__6474__auto__ = e12561;var statearr_12562_12619 = state_12531;(statearr_12562_12619[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12561;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12620 = state_12531;
state_12531 = G__12620;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12531){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__,jobs,results,process,async))
})();var state__6487__auto__ = (function (){var statearr_12563 = f__6486__auto__.call(null);(statearr_12563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_12563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
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
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6485__auto___12721 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___12721,tc,fc){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___12721,tc,fc){
return (function (state_12696){var state_val_12697 = (state_12696[(1)]);if((state_val_12697 === (7)))
{var inst_12692 = (state_12696[(2)]);var state_12696__$1 = state_12696;var statearr_12698_12722 = state_12696__$1;(statearr_12698_12722[(2)] = inst_12692);
(statearr_12698_12722[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (1)))
{var state_12696__$1 = state_12696;var statearr_12699_12723 = state_12696__$1;(statearr_12699_12723[(2)] = null);
(statearr_12699_12723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (4)))
{var inst_12673 = (state_12696[(7)]);var inst_12673__$1 = (state_12696[(2)]);var inst_12674 = (inst_12673__$1 == null);var state_12696__$1 = (function (){var statearr_12700 = state_12696;(statearr_12700[(7)] = inst_12673__$1);
return statearr_12700;
})();if(cljs.core.truth_(inst_12674))
{var statearr_12701_12724 = state_12696__$1;(statearr_12701_12724[(1)] = (5));
} else
{var statearr_12702_12725 = state_12696__$1;(statearr_12702_12725[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (13)))
{var state_12696__$1 = state_12696;var statearr_12703_12726 = state_12696__$1;(statearr_12703_12726[(2)] = null);
(statearr_12703_12726[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (6)))
{var inst_12673 = (state_12696[(7)]);var inst_12679 = p.call(null,inst_12673);var state_12696__$1 = state_12696;if(cljs.core.truth_(inst_12679))
{var statearr_12704_12727 = state_12696__$1;(statearr_12704_12727[(1)] = (9));
} else
{var statearr_12705_12728 = state_12696__$1;(statearr_12705_12728[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (3)))
{var inst_12694 = (state_12696[(2)]);var state_12696__$1 = state_12696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12696__$1,inst_12694);
} else
{if((state_val_12697 === (12)))
{var state_12696__$1 = state_12696;var statearr_12706_12729 = state_12696__$1;(statearr_12706_12729[(2)] = null);
(statearr_12706_12729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (2)))
{var state_12696__$1 = state_12696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12696__$1,(4),ch);
} else
{if((state_val_12697 === (11)))
{var inst_12673 = (state_12696[(7)]);var inst_12683 = (state_12696[(2)]);var state_12696__$1 = state_12696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12696__$1,(8),inst_12683,inst_12673);
} else
{if((state_val_12697 === (9)))
{var state_12696__$1 = state_12696;var statearr_12707_12730 = state_12696__$1;(statearr_12707_12730[(2)] = tc);
(statearr_12707_12730[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (5)))
{var inst_12676 = cljs.core.async.close_BANG_.call(null,tc);var inst_12677 = cljs.core.async.close_BANG_.call(null,fc);var state_12696__$1 = (function (){var statearr_12708 = state_12696;(statearr_12708[(8)] = inst_12676);
return statearr_12708;
})();var statearr_12709_12731 = state_12696__$1;(statearr_12709_12731[(2)] = inst_12677);
(statearr_12709_12731[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (14)))
{var inst_12690 = (state_12696[(2)]);var state_12696__$1 = state_12696;var statearr_12710_12732 = state_12696__$1;(statearr_12710_12732[(2)] = inst_12690);
(statearr_12710_12732[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (10)))
{var state_12696__$1 = state_12696;var statearr_12711_12733 = state_12696__$1;(statearr_12711_12733[(2)] = fc);
(statearr_12711_12733[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12697 === (8)))
{var inst_12685 = (state_12696[(2)]);var state_12696__$1 = state_12696;if(cljs.core.truth_(inst_12685))
{var statearr_12712_12734 = state_12696__$1;(statearr_12712_12734[(1)] = (12));
} else
{var statearr_12713_12735 = state_12696__$1;(statearr_12713_12735[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___12721,tc,fc))
;return ((function (switch__6470__auto__,c__6485__auto___12721,tc,fc){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_12717 = [null,null,null,null,null,null,null,null,null];(statearr_12717[(0)] = state_machine__6471__auto__);
(statearr_12717[(1)] = (1));
return statearr_12717;
});
var state_machine__6471__auto____1 = (function (state_12696){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12718){if((e12718 instanceof Object))
{var ex__6474__auto__ = e12718;var statearr_12719_12736 = state_12696;(statearr_12719_12736[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12718;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12737 = state_12696;
state_12696 = G__12737;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12696){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___12721,tc,fc))
})();var state__6487__auto__ = (function (){var statearr_12720 = f__6486__auto__.call(null);(statearr_12720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___12721);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___12721,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_12784){var state_val_12785 = (state_12784[(1)]);if((state_val_12785 === (7)))
{var inst_12780 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12786_12802 = state_12784__$1;(statearr_12786_12802[(2)] = inst_12780);
(statearr_12786_12802[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (6)))
{var inst_12770 = (state_12784[(7)]);var inst_12773 = (state_12784[(8)]);var inst_12777 = f.call(null,inst_12770,inst_12773);var inst_12770__$1 = inst_12777;var state_12784__$1 = (function (){var statearr_12787 = state_12784;(statearr_12787[(7)] = inst_12770__$1);
return statearr_12787;
})();var statearr_12788_12803 = state_12784__$1;(statearr_12788_12803[(2)] = null);
(statearr_12788_12803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (5)))
{var inst_12770 = (state_12784[(7)]);var state_12784__$1 = state_12784;var statearr_12789_12804 = state_12784__$1;(statearr_12789_12804[(2)] = inst_12770);
(statearr_12789_12804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (4)))
{var inst_12773 = (state_12784[(8)]);var inst_12773__$1 = (state_12784[(2)]);var inst_12774 = (inst_12773__$1 == null);var state_12784__$1 = (function (){var statearr_12790 = state_12784;(statearr_12790[(8)] = inst_12773__$1);
return statearr_12790;
})();if(cljs.core.truth_(inst_12774))
{var statearr_12791_12805 = state_12784__$1;(statearr_12791_12805[(1)] = (5));
} else
{var statearr_12792_12806 = state_12784__$1;(statearr_12792_12806[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (3)))
{var inst_12782 = (state_12784[(2)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === (2)))
{var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(4),ch);
} else
{if((state_val_12785 === (1)))
{var inst_12770 = init;var state_12784__$1 = (function (){var statearr_12793 = state_12784;(statearr_12793[(7)] = inst_12770);
return statearr_12793;
})();var statearr_12794_12807 = state_12784__$1;(statearr_12794_12807[(2)] = null);
(statearr_12794_12807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__6471__auto____0 = (function (){var statearr_12798 = [null,null,null,null,null,null,null,null,null];(statearr_12798[(0)] = state_machine__6471__auto__);
(statearr_12798[(1)] = (1));
return statearr_12798;
});
var state_machine__6471__auto____1 = (function (state_12784){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12799){if((e12799 instanceof Object))
{var ex__6474__auto__ = e12799;var statearr_12800_12808 = state_12784;(statearr_12800_12808[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12799;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12809 = state_12784;
state_12784 = G__12809;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_12801 = f__6486__auto__.call(null);(statearr_12801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_12801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_12883){var state_val_12884 = (state_12883[(1)]);if((state_val_12884 === (7)))
{var inst_12865 = (state_12883[(2)]);var state_12883__$1 = state_12883;var statearr_12885_12908 = state_12883__$1;(statearr_12885_12908[(2)] = inst_12865);
(statearr_12885_12908[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (1)))
{var inst_12859 = cljs.core.seq.call(null,coll);var inst_12860 = inst_12859;var state_12883__$1 = (function (){var statearr_12886 = state_12883;(statearr_12886[(7)] = inst_12860);
return statearr_12886;
})();var statearr_12887_12909 = state_12883__$1;(statearr_12887_12909[(2)] = null);
(statearr_12887_12909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (4)))
{var inst_12860 = (state_12883[(7)]);var inst_12863 = cljs.core.first.call(null,inst_12860);var state_12883__$1 = state_12883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12883__$1,(7),ch,inst_12863);
} else
{if((state_val_12884 === (13)))
{var inst_12877 = (state_12883[(2)]);var state_12883__$1 = state_12883;var statearr_12888_12910 = state_12883__$1;(statearr_12888_12910[(2)] = inst_12877);
(statearr_12888_12910[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (6)))
{var inst_12868 = (state_12883[(2)]);var state_12883__$1 = state_12883;if(cljs.core.truth_(inst_12868))
{var statearr_12889_12911 = state_12883__$1;(statearr_12889_12911[(1)] = (8));
} else
{var statearr_12890_12912 = state_12883__$1;(statearr_12890_12912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (3)))
{var inst_12881 = (state_12883[(2)]);var state_12883__$1 = state_12883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12883__$1,inst_12881);
} else
{if((state_val_12884 === (12)))
{var state_12883__$1 = state_12883;var statearr_12891_12913 = state_12883__$1;(statearr_12891_12913[(2)] = null);
(statearr_12891_12913[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (2)))
{var inst_12860 = (state_12883[(7)]);var state_12883__$1 = state_12883;if(cljs.core.truth_(inst_12860))
{var statearr_12892_12914 = state_12883__$1;(statearr_12892_12914[(1)] = (4));
} else
{var statearr_12893_12915 = state_12883__$1;(statearr_12893_12915[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (11)))
{var inst_12874 = cljs.core.async.close_BANG_.call(null,ch);var state_12883__$1 = state_12883;var statearr_12894_12916 = state_12883__$1;(statearr_12894_12916[(2)] = inst_12874);
(statearr_12894_12916[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (9)))
{var state_12883__$1 = state_12883;if(cljs.core.truth_(close_QMARK_))
{var statearr_12895_12917 = state_12883__$1;(statearr_12895_12917[(1)] = (11));
} else
{var statearr_12896_12918 = state_12883__$1;(statearr_12896_12918[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (5)))
{var inst_12860 = (state_12883[(7)]);var state_12883__$1 = state_12883;var statearr_12897_12919 = state_12883__$1;(statearr_12897_12919[(2)] = inst_12860);
(statearr_12897_12919[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (10)))
{var inst_12879 = (state_12883[(2)]);var state_12883__$1 = state_12883;var statearr_12898_12920 = state_12883__$1;(statearr_12898_12920[(2)] = inst_12879);
(statearr_12898_12920[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12884 === (8)))
{var inst_12860 = (state_12883[(7)]);var inst_12870 = cljs.core.next.call(null,inst_12860);var inst_12860__$1 = inst_12870;var state_12883__$1 = (function (){var statearr_12899 = state_12883;(statearr_12899[(7)] = inst_12860__$1);
return statearr_12899;
})();var statearr_12900_12921 = state_12883__$1;(statearr_12900_12921[(2)] = null);
(statearr_12900_12921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__6471__auto____0 = (function (){var statearr_12904 = [null,null,null,null,null,null,null,null];(statearr_12904[(0)] = state_machine__6471__auto__);
(statearr_12904[(1)] = (1));
return statearr_12904;
});
var state_machine__6471__auto____1 = (function (state_12883){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_12883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e12905){if((e12905 instanceof Object))
{var ex__6474__auto__ = e12905;var statearr_12906_12922 = state_12883;(statearr_12906_12922[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12905;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12923 = state_12883;
state_12883 = G__12923;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_12883){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_12883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_12907 = f__6486__auto__.call(null);(statearr_12907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_12907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12925 = {};return obj12925;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12927 = {};return obj12927;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13149 = (function (cs,ch,mult,meta13150){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13150 = meta13150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13149.cljs$lang$type = true;
cljs.core.async.t13149.cljs$lang$ctorStr = "cljs.core.async/t13149";
cljs.core.async.t13149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13149");
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13151){var self__ = this;
var _13151__$1 = this;return self__.meta13150;
});})(cs))
;
cljs.core.async.t13149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13151,meta13150__$1){var self__ = this;
var _13151__$1 = this;return (new cljs.core.async.t13149(self__.cs,self__.ch,self__.mult,meta13150__$1));
});})(cs))
;
cljs.core.async.__GT_t13149 = ((function (cs){
return (function __GT_t13149(cs__$1,ch__$1,mult__$1,meta13150){return (new cljs.core.async.t13149(cs__$1,ch__$1,mult__$1,meta13150));
});})(cs))
;
}
return (new cljs.core.async.t13149(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6485__auto___13370 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___13370,cs,m,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___13370,cs,m,dchan,dctr,done){
return (function (state_13282){var state_val_13283 = (state_13282[(1)]);if((state_val_13283 === (7)))
{var inst_13278 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13284_13371 = state_13282__$1;(statearr_13284_13371[(2)] = inst_13278);
(statearr_13284_13371[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (20)))
{var inst_13183 = (state_13282[(7)]);var inst_13193 = cljs.core.first.call(null,inst_13183);var inst_13194 = cljs.core.nth.call(null,inst_13193,(0),null);var inst_13195 = cljs.core.nth.call(null,inst_13193,(1),null);var state_13282__$1 = (function (){var statearr_13285 = state_13282;(statearr_13285[(8)] = inst_13194);
return statearr_13285;
})();if(cljs.core.truth_(inst_13195))
{var statearr_13286_13372 = state_13282__$1;(statearr_13286_13372[(1)] = (22));
} else
{var statearr_13287_13373 = state_13282__$1;(statearr_13287_13373[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (27)))
{var inst_13225 = (state_13282[(9)]);var inst_13223 = (state_13282[(10)]);var inst_13230 = (state_13282[(11)]);var inst_13154 = (state_13282[(12)]);var inst_13230__$1 = cljs.core._nth.call(null,inst_13223,inst_13225);var inst_13231 = cljs.core.async.put_BANG_.call(null,inst_13230__$1,inst_13154,done);var state_13282__$1 = (function (){var statearr_13288 = state_13282;(statearr_13288[(11)] = inst_13230__$1);
return statearr_13288;
})();if(cljs.core.truth_(inst_13231))
{var statearr_13289_13374 = state_13282__$1;(statearr_13289_13374[(1)] = (30));
} else
{var statearr_13290_13375 = state_13282__$1;(statearr_13290_13375[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (1)))
{var state_13282__$1 = state_13282;var statearr_13291_13376 = state_13282__$1;(statearr_13291_13376[(2)] = null);
(statearr_13291_13376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (24)))
{var inst_13183 = (state_13282[(7)]);var inst_13200 = (state_13282[(2)]);var inst_13201 = cljs.core.next.call(null,inst_13183);var inst_13163 = inst_13201;var inst_13164 = null;var inst_13165 = (0);var inst_13166 = (0);var state_13282__$1 = (function (){var statearr_13292 = state_13282;(statearr_13292[(13)] = inst_13166);
(statearr_13292[(14)] = inst_13165);
(statearr_13292[(15)] = inst_13163);
(statearr_13292[(16)] = inst_13164);
(statearr_13292[(17)] = inst_13200);
return statearr_13292;
})();var statearr_13293_13377 = state_13282__$1;(statearr_13293_13377[(2)] = null);
(statearr_13293_13377[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (39)))
{var state_13282__$1 = state_13282;var statearr_13297_13378 = state_13282__$1;(statearr_13297_13378[(2)] = null);
(statearr_13297_13378[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (4)))
{var inst_13154 = (state_13282[(12)]);var inst_13154__$1 = (state_13282[(2)]);var inst_13155 = (inst_13154__$1 == null);var state_13282__$1 = (function (){var statearr_13298 = state_13282;(statearr_13298[(12)] = inst_13154__$1);
return statearr_13298;
})();if(cljs.core.truth_(inst_13155))
{var statearr_13299_13379 = state_13282__$1;(statearr_13299_13379[(1)] = (5));
} else
{var statearr_13300_13380 = state_13282__$1;(statearr_13300_13380[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (15)))
{var inst_13166 = (state_13282[(13)]);var inst_13165 = (state_13282[(14)]);var inst_13163 = (state_13282[(15)]);var inst_13164 = (state_13282[(16)]);var inst_13179 = (state_13282[(2)]);var inst_13180 = (inst_13166 + (1));var tmp13294 = inst_13165;var tmp13295 = inst_13163;var tmp13296 = inst_13164;var inst_13163__$1 = tmp13295;var inst_13164__$1 = tmp13296;var inst_13165__$1 = tmp13294;var inst_13166__$1 = inst_13180;var state_13282__$1 = (function (){var statearr_13301 = state_13282;(statearr_13301[(13)] = inst_13166__$1);
(statearr_13301[(14)] = inst_13165__$1);
(statearr_13301[(18)] = inst_13179);
(statearr_13301[(15)] = inst_13163__$1);
(statearr_13301[(16)] = inst_13164__$1);
return statearr_13301;
})();var statearr_13302_13381 = state_13282__$1;(statearr_13302_13381[(2)] = null);
(statearr_13302_13381[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (21)))
{var inst_13204 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13306_13382 = state_13282__$1;(statearr_13306_13382[(2)] = inst_13204);
(statearr_13306_13382[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (31)))
{var inst_13230 = (state_13282[(11)]);var inst_13234 = done.call(null,null);var inst_13235 = cljs.core.async.untap_STAR_.call(null,m,inst_13230);var state_13282__$1 = (function (){var statearr_13307 = state_13282;(statearr_13307[(19)] = inst_13234);
return statearr_13307;
})();var statearr_13308_13383 = state_13282__$1;(statearr_13308_13383[(2)] = inst_13235);
(statearr_13308_13383[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (32)))
{var inst_13225 = (state_13282[(9)]);var inst_13223 = (state_13282[(10)]);var inst_13222 = (state_13282[(20)]);var inst_13224 = (state_13282[(21)]);var inst_13237 = (state_13282[(2)]);var inst_13238 = (inst_13225 + (1));var tmp13303 = inst_13223;var tmp13304 = inst_13222;var tmp13305 = inst_13224;var inst_13222__$1 = tmp13304;var inst_13223__$1 = tmp13303;var inst_13224__$1 = tmp13305;var inst_13225__$1 = inst_13238;var state_13282__$1 = (function (){var statearr_13309 = state_13282;(statearr_13309[(9)] = inst_13225__$1);
(statearr_13309[(22)] = inst_13237);
(statearr_13309[(10)] = inst_13223__$1);
(statearr_13309[(20)] = inst_13222__$1);
(statearr_13309[(21)] = inst_13224__$1);
return statearr_13309;
})();var statearr_13310_13384 = state_13282__$1;(statearr_13310_13384[(2)] = null);
(statearr_13310_13384[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (40)))
{var inst_13250 = (state_13282[(23)]);var inst_13254 = done.call(null,null);var inst_13255 = cljs.core.async.untap_STAR_.call(null,m,inst_13250);var state_13282__$1 = (function (){var statearr_13311 = state_13282;(statearr_13311[(24)] = inst_13254);
return statearr_13311;
})();var statearr_13312_13385 = state_13282__$1;(statearr_13312_13385[(2)] = inst_13255);
(statearr_13312_13385[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (33)))
{var inst_13241 = (state_13282[(25)]);var inst_13243 = cljs.core.chunked_seq_QMARK_.call(null,inst_13241);var state_13282__$1 = state_13282;if(inst_13243)
{var statearr_13313_13386 = state_13282__$1;(statearr_13313_13386[(1)] = (36));
} else
{var statearr_13314_13387 = state_13282__$1;(statearr_13314_13387[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (13)))
{var inst_13173 = (state_13282[(26)]);var inst_13176 = cljs.core.async.close_BANG_.call(null,inst_13173);var state_13282__$1 = state_13282;var statearr_13315_13388 = state_13282__$1;(statearr_13315_13388[(2)] = inst_13176);
(statearr_13315_13388[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (22)))
{var inst_13194 = (state_13282[(8)]);var inst_13197 = cljs.core.async.close_BANG_.call(null,inst_13194);var state_13282__$1 = state_13282;var statearr_13316_13389 = state_13282__$1;(statearr_13316_13389[(2)] = inst_13197);
(statearr_13316_13389[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (36)))
{var inst_13241 = (state_13282[(25)]);var inst_13245 = cljs.core.chunk_first.call(null,inst_13241);var inst_13246 = cljs.core.chunk_rest.call(null,inst_13241);var inst_13247 = cljs.core.count.call(null,inst_13245);var inst_13222 = inst_13246;var inst_13223 = inst_13245;var inst_13224 = inst_13247;var inst_13225 = (0);var state_13282__$1 = (function (){var statearr_13317 = state_13282;(statearr_13317[(9)] = inst_13225);
(statearr_13317[(10)] = inst_13223);
(statearr_13317[(20)] = inst_13222);
(statearr_13317[(21)] = inst_13224);
return statearr_13317;
})();var statearr_13318_13390 = state_13282__$1;(statearr_13318_13390[(2)] = null);
(statearr_13318_13390[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (41)))
{var inst_13241 = (state_13282[(25)]);var inst_13257 = (state_13282[(2)]);var inst_13258 = cljs.core.next.call(null,inst_13241);var inst_13222 = inst_13258;var inst_13223 = null;var inst_13224 = (0);var inst_13225 = (0);var state_13282__$1 = (function (){var statearr_13319 = state_13282;(statearr_13319[(27)] = inst_13257);
(statearr_13319[(9)] = inst_13225);
(statearr_13319[(10)] = inst_13223);
(statearr_13319[(20)] = inst_13222);
(statearr_13319[(21)] = inst_13224);
return statearr_13319;
})();var statearr_13320_13391 = state_13282__$1;(statearr_13320_13391[(2)] = null);
(statearr_13320_13391[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (43)))
{var state_13282__$1 = state_13282;var statearr_13321_13392 = state_13282__$1;(statearr_13321_13392[(2)] = null);
(statearr_13321_13392[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (29)))
{var inst_13266 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13322_13393 = state_13282__$1;(statearr_13322_13393[(2)] = inst_13266);
(statearr_13322_13393[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (44)))
{var inst_13275 = (state_13282[(2)]);var state_13282__$1 = (function (){var statearr_13323 = state_13282;(statearr_13323[(28)] = inst_13275);
return statearr_13323;
})();var statearr_13324_13394 = state_13282__$1;(statearr_13324_13394[(2)] = null);
(statearr_13324_13394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (6)))
{var inst_13214 = (state_13282[(29)]);var inst_13213 = cljs.core.deref.call(null,cs);var inst_13214__$1 = cljs.core.keys.call(null,inst_13213);var inst_13215 = cljs.core.count.call(null,inst_13214__$1);var inst_13216 = cljs.core.reset_BANG_.call(null,dctr,inst_13215);var inst_13221 = cljs.core.seq.call(null,inst_13214__$1);var inst_13222 = inst_13221;var inst_13223 = null;var inst_13224 = (0);var inst_13225 = (0);var state_13282__$1 = (function (){var statearr_13325 = state_13282;(statearr_13325[(30)] = inst_13216);
(statearr_13325[(9)] = inst_13225);
(statearr_13325[(10)] = inst_13223);
(statearr_13325[(20)] = inst_13222);
(statearr_13325[(21)] = inst_13224);
(statearr_13325[(29)] = inst_13214__$1);
return statearr_13325;
})();var statearr_13326_13395 = state_13282__$1;(statearr_13326_13395[(2)] = null);
(statearr_13326_13395[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (28)))
{var inst_13241 = (state_13282[(25)]);var inst_13222 = (state_13282[(20)]);var inst_13241__$1 = cljs.core.seq.call(null,inst_13222);var state_13282__$1 = (function (){var statearr_13327 = state_13282;(statearr_13327[(25)] = inst_13241__$1);
return statearr_13327;
})();if(inst_13241__$1)
{var statearr_13328_13396 = state_13282__$1;(statearr_13328_13396[(1)] = (33));
} else
{var statearr_13329_13397 = state_13282__$1;(statearr_13329_13397[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (25)))
{var inst_13225 = (state_13282[(9)]);var inst_13224 = (state_13282[(21)]);var inst_13227 = (inst_13225 < inst_13224);var inst_13228 = inst_13227;var state_13282__$1 = state_13282;if(cljs.core.truth_(inst_13228))
{var statearr_13330_13398 = state_13282__$1;(statearr_13330_13398[(1)] = (27));
} else
{var statearr_13331_13399 = state_13282__$1;(statearr_13331_13399[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (34)))
{var state_13282__$1 = state_13282;var statearr_13332_13400 = state_13282__$1;(statearr_13332_13400[(2)] = null);
(statearr_13332_13400[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (17)))
{var state_13282__$1 = state_13282;var statearr_13333_13401 = state_13282__$1;(statearr_13333_13401[(2)] = null);
(statearr_13333_13401[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (3)))
{var inst_13280 = (state_13282[(2)]);var state_13282__$1 = state_13282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13282__$1,inst_13280);
} else
{if((state_val_13283 === (12)))
{var inst_13209 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13334_13402 = state_13282__$1;(statearr_13334_13402[(2)] = inst_13209);
(statearr_13334_13402[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (2)))
{var state_13282__$1 = state_13282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13282__$1,(4),ch);
} else
{if((state_val_13283 === (23)))
{var state_13282__$1 = state_13282;var statearr_13335_13403 = state_13282__$1;(statearr_13335_13403[(2)] = null);
(statearr_13335_13403[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (35)))
{var inst_13264 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13336_13404 = state_13282__$1;(statearr_13336_13404[(2)] = inst_13264);
(statearr_13336_13404[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (19)))
{var inst_13183 = (state_13282[(7)]);var inst_13187 = cljs.core.chunk_first.call(null,inst_13183);var inst_13188 = cljs.core.chunk_rest.call(null,inst_13183);var inst_13189 = cljs.core.count.call(null,inst_13187);var inst_13163 = inst_13188;var inst_13164 = inst_13187;var inst_13165 = inst_13189;var inst_13166 = (0);var state_13282__$1 = (function (){var statearr_13337 = state_13282;(statearr_13337[(13)] = inst_13166);
(statearr_13337[(14)] = inst_13165);
(statearr_13337[(15)] = inst_13163);
(statearr_13337[(16)] = inst_13164);
return statearr_13337;
})();var statearr_13338_13405 = state_13282__$1;(statearr_13338_13405[(2)] = null);
(statearr_13338_13405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (11)))
{var inst_13163 = (state_13282[(15)]);var inst_13183 = (state_13282[(7)]);var inst_13183__$1 = cljs.core.seq.call(null,inst_13163);var state_13282__$1 = (function (){var statearr_13339 = state_13282;(statearr_13339[(7)] = inst_13183__$1);
return statearr_13339;
})();if(inst_13183__$1)
{var statearr_13340_13406 = state_13282__$1;(statearr_13340_13406[(1)] = (16));
} else
{var statearr_13341_13407 = state_13282__$1;(statearr_13341_13407[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (9)))
{var inst_13211 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13342_13408 = state_13282__$1;(statearr_13342_13408[(2)] = inst_13211);
(statearr_13342_13408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (5)))
{var inst_13161 = cljs.core.deref.call(null,cs);var inst_13162 = cljs.core.seq.call(null,inst_13161);var inst_13163 = inst_13162;var inst_13164 = null;var inst_13165 = (0);var inst_13166 = (0);var state_13282__$1 = (function (){var statearr_13343 = state_13282;(statearr_13343[(13)] = inst_13166);
(statearr_13343[(14)] = inst_13165);
(statearr_13343[(15)] = inst_13163);
(statearr_13343[(16)] = inst_13164);
return statearr_13343;
})();var statearr_13344_13409 = state_13282__$1;(statearr_13344_13409[(2)] = null);
(statearr_13344_13409[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (14)))
{var state_13282__$1 = state_13282;var statearr_13345_13410 = state_13282__$1;(statearr_13345_13410[(2)] = null);
(statearr_13345_13410[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (45)))
{var inst_13272 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13346_13411 = state_13282__$1;(statearr_13346_13411[(2)] = inst_13272);
(statearr_13346_13411[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (26)))
{var inst_13214 = (state_13282[(29)]);var inst_13268 = (state_13282[(2)]);var inst_13269 = cljs.core.seq.call(null,inst_13214);var state_13282__$1 = (function (){var statearr_13347 = state_13282;(statearr_13347[(31)] = inst_13268);
return statearr_13347;
})();if(inst_13269)
{var statearr_13348_13412 = state_13282__$1;(statearr_13348_13412[(1)] = (42));
} else
{var statearr_13349_13413 = state_13282__$1;(statearr_13349_13413[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (16)))
{var inst_13183 = (state_13282[(7)]);var inst_13185 = cljs.core.chunked_seq_QMARK_.call(null,inst_13183);var state_13282__$1 = state_13282;if(inst_13185)
{var statearr_13350_13414 = state_13282__$1;(statearr_13350_13414[(1)] = (19));
} else
{var statearr_13351_13415 = state_13282__$1;(statearr_13351_13415[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (38)))
{var inst_13261 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13352_13416 = state_13282__$1;(statearr_13352_13416[(2)] = inst_13261);
(statearr_13352_13416[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (30)))
{var state_13282__$1 = state_13282;var statearr_13353_13417 = state_13282__$1;(statearr_13353_13417[(2)] = null);
(statearr_13353_13417[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (10)))
{var inst_13166 = (state_13282[(13)]);var inst_13164 = (state_13282[(16)]);var inst_13172 = cljs.core._nth.call(null,inst_13164,inst_13166);var inst_13173 = cljs.core.nth.call(null,inst_13172,(0),null);var inst_13174 = cljs.core.nth.call(null,inst_13172,(1),null);var state_13282__$1 = (function (){var statearr_13354 = state_13282;(statearr_13354[(26)] = inst_13173);
return statearr_13354;
})();if(cljs.core.truth_(inst_13174))
{var statearr_13355_13418 = state_13282__$1;(statearr_13355_13418[(1)] = (13));
} else
{var statearr_13356_13419 = state_13282__$1;(statearr_13356_13419[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (18)))
{var inst_13207 = (state_13282[(2)]);var state_13282__$1 = state_13282;var statearr_13357_13420 = state_13282__$1;(statearr_13357_13420[(2)] = inst_13207);
(statearr_13357_13420[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (42)))
{var state_13282__$1 = state_13282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13282__$1,(45),dchan);
} else
{if((state_val_13283 === (37)))
{var inst_13241 = (state_13282[(25)]);var inst_13250 = (state_13282[(23)]);var inst_13154 = (state_13282[(12)]);var inst_13250__$1 = cljs.core.first.call(null,inst_13241);var inst_13251 = cljs.core.async.put_BANG_.call(null,inst_13250__$1,inst_13154,done);var state_13282__$1 = (function (){var statearr_13358 = state_13282;(statearr_13358[(23)] = inst_13250__$1);
return statearr_13358;
})();if(cljs.core.truth_(inst_13251))
{var statearr_13359_13421 = state_13282__$1;(statearr_13359_13421[(1)] = (39));
} else
{var statearr_13360_13422 = state_13282__$1;(statearr_13360_13422[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13283 === (8)))
{var inst_13166 = (state_13282[(13)]);var inst_13165 = (state_13282[(14)]);var inst_13168 = (inst_13166 < inst_13165);var inst_13169 = inst_13168;var state_13282__$1 = state_13282;if(cljs.core.truth_(inst_13169))
{var statearr_13361_13423 = state_13282__$1;(statearr_13361_13423[(1)] = (10));
} else
{var statearr_13362_13424 = state_13282__$1;(statearr_13362_13424[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___13370,cs,m,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___13370,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_13366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13366[(0)] = state_machine__6471__auto__);
(statearr_13366[(1)] = (1));
return statearr_13366;
});
var state_machine__6471__auto____1 = (function (state_13282){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_13282);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object))
{var ex__6474__auto__ = e13367;var statearr_13368_13425 = state_13282;(statearr_13368_13425[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13282);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13367;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13426 = state_13282;
state_13282 = G__13426;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_13282){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_13282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___13370,cs,m,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_13369 = f__6486__auto__.call(null);(statearr_13369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___13370);
return statearr_13369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___13370,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13428 = {};return obj13428;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13429){var map__13434 = p__13429;var map__13434__$1 = ((cljs.core.seq_QMARK_.call(null,map__13434))?cljs.core.apply.call(null,cljs.core.hash_map,map__13434):map__13434);var opts = map__13434__$1;var statearr_13435_13438 = state;(statearr_13435_13438[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13434,map__13434__$1,opts){
return (function (val){var statearr_13436_13439 = state;(statearr_13436_13439[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13434,map__13434__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13437_13440 = state;(statearr_13437_13440[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13429 = null;if (arguments.length > 3) {
  p__13429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13429);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13441){
var state = cljs.core.first(arglist__13441);
arglist__13441 = cljs.core.next(arglist__13441);
var cont_block = cljs.core.first(arglist__13441);
arglist__13441 = cljs.core.next(arglist__13441);
var ports = cljs.core.first(arglist__13441);
var p__13429 = cljs.core.rest(arglist__13441);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13429);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13561 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13562){
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
this.meta13562 = meta13562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13561.cljs$lang$type = true;
cljs.core.async.t13561.cljs$lang$ctorStr = "cljs.core.async/t13561";
cljs.core.async.t13561.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13561");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13563){var self__ = this;
var _13563__$1 = this;return self__.meta13562;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13563,meta13562__$1){var self__ = this;
var _13563__$1 = this;return (new cljs.core.async.t13561(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13562__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13561 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13561(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13562){return (new cljs.core.async.t13561(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13562));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13561(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6485__auto___13680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13633){var state_val_13634 = (state_13633[(1)]);if((state_val_13634 === (7)))
{var inst_13577 = (state_13633[(7)]);var inst_13582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13577);var state_13633__$1 = state_13633;var statearr_13635_13681 = state_13633__$1;(statearr_13635_13681[(2)] = inst_13582);
(statearr_13635_13681[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (20)))
{var inst_13592 = (state_13633[(8)]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13633__$1,(23),out,inst_13592);
} else
{if((state_val_13634 === (1)))
{var inst_13567 = (state_13633[(9)]);var inst_13567__$1 = calc_state.call(null);var inst_13568 = cljs.core.seq_QMARK_.call(null,inst_13567__$1);var state_13633__$1 = (function (){var statearr_13636 = state_13633;(statearr_13636[(9)] = inst_13567__$1);
return statearr_13636;
})();if(inst_13568)
{var statearr_13637_13682 = state_13633__$1;(statearr_13637_13682[(1)] = (2));
} else
{var statearr_13638_13683 = state_13633__$1;(statearr_13638_13683[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (24)))
{var inst_13585 = (state_13633[(10)]);var inst_13577 = inst_13585;var state_13633__$1 = (function (){var statearr_13639 = state_13633;(statearr_13639[(7)] = inst_13577);
return statearr_13639;
})();var statearr_13640_13684 = state_13633__$1;(statearr_13640_13684[(2)] = null);
(statearr_13640_13684[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (4)))
{var inst_13567 = (state_13633[(9)]);var inst_13573 = (state_13633[(2)]);var inst_13574 = cljs.core.get.call(null,inst_13573,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13575 = cljs.core.get.call(null,inst_13573,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13576 = cljs.core.get.call(null,inst_13573,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13577 = inst_13567;var state_13633__$1 = (function (){var statearr_13641 = state_13633;(statearr_13641[(7)] = inst_13577);
(statearr_13641[(11)] = inst_13576);
(statearr_13641[(12)] = inst_13575);
(statearr_13641[(13)] = inst_13574);
return statearr_13641;
})();var statearr_13642_13685 = state_13633__$1;(statearr_13642_13685[(2)] = null);
(statearr_13642_13685[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (15)))
{var state_13633__$1 = state_13633;var statearr_13643_13686 = state_13633__$1;(statearr_13643_13686[(2)] = null);
(statearr_13643_13686[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (21)))
{var inst_13585 = (state_13633[(10)]);var inst_13577 = inst_13585;var state_13633__$1 = (function (){var statearr_13644 = state_13633;(statearr_13644[(7)] = inst_13577);
return statearr_13644;
})();var statearr_13645_13687 = state_13633__$1;(statearr_13645_13687[(2)] = null);
(statearr_13645_13687[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (13)))
{var inst_13629 = (state_13633[(2)]);var state_13633__$1 = state_13633;var statearr_13646_13688 = state_13633__$1;(statearr_13646_13688[(2)] = inst_13629);
(statearr_13646_13688[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (22)))
{var inst_13627 = (state_13633[(2)]);var state_13633__$1 = state_13633;var statearr_13647_13689 = state_13633__$1;(statearr_13647_13689[(2)] = inst_13627);
(statearr_13647_13689[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (6)))
{var inst_13631 = (state_13633[(2)]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13633__$1,inst_13631);
} else
{if((state_val_13634 === (25)))
{var state_13633__$1 = state_13633;var statearr_13648_13690 = state_13633__$1;(statearr_13648_13690[(2)] = null);
(statearr_13648_13690[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (17)))
{var inst_13607 = (state_13633[(14)]);var state_13633__$1 = state_13633;var statearr_13649_13691 = state_13633__$1;(statearr_13649_13691[(2)] = inst_13607);
(statearr_13649_13691[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (3)))
{var inst_13567 = (state_13633[(9)]);var state_13633__$1 = state_13633;var statearr_13650_13692 = state_13633__$1;(statearr_13650_13692[(2)] = inst_13567);
(statearr_13650_13692[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (12)))
{var inst_13593 = (state_13633[(15)]);var inst_13607 = (state_13633[(14)]);var inst_13588 = (state_13633[(16)]);var inst_13607__$1 = inst_13588.call(null,inst_13593);var state_13633__$1 = (function (){var statearr_13651 = state_13633;(statearr_13651[(14)] = inst_13607__$1);
return statearr_13651;
})();if(cljs.core.truth_(inst_13607__$1))
{var statearr_13652_13693 = state_13633__$1;(statearr_13652_13693[(1)] = (17));
} else
{var statearr_13653_13694 = state_13633__$1;(statearr_13653_13694[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (2)))
{var inst_13567 = (state_13633[(9)]);var inst_13570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13567);var state_13633__$1 = state_13633;var statearr_13654_13695 = state_13633__$1;(statearr_13654_13695[(2)] = inst_13570);
(statearr_13654_13695[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (23)))
{var inst_13618 = (state_13633[(2)]);var state_13633__$1 = state_13633;if(cljs.core.truth_(inst_13618))
{var statearr_13655_13696 = state_13633__$1;(statearr_13655_13696[(1)] = (24));
} else
{var statearr_13656_13697 = state_13633__$1;(statearr_13656_13697[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (19)))
{var inst_13615 = (state_13633[(2)]);var state_13633__$1 = state_13633;if(cljs.core.truth_(inst_13615))
{var statearr_13657_13698 = state_13633__$1;(statearr_13657_13698[(1)] = (20));
} else
{var statearr_13658_13699 = state_13633__$1;(statearr_13658_13699[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (11)))
{var inst_13592 = (state_13633[(8)]);var inst_13598 = (inst_13592 == null);var state_13633__$1 = state_13633;if(cljs.core.truth_(inst_13598))
{var statearr_13659_13700 = state_13633__$1;(statearr_13659_13700[(1)] = (14));
} else
{var statearr_13660_13701 = state_13633__$1;(statearr_13660_13701[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (9)))
{var inst_13585 = (state_13633[(10)]);var inst_13585__$1 = (state_13633[(2)]);var inst_13586 = cljs.core.get.call(null,inst_13585__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13587 = cljs.core.get.call(null,inst_13585__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13588 = cljs.core.get.call(null,inst_13585__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13633__$1 = (function (){var statearr_13661 = state_13633;(statearr_13661[(10)] = inst_13585__$1);
(statearr_13661[(16)] = inst_13588);
(statearr_13661[(17)] = inst_13587);
return statearr_13661;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13633__$1,(10),inst_13586);
} else
{if((state_val_13634 === (5)))
{var inst_13577 = (state_13633[(7)]);var inst_13580 = cljs.core.seq_QMARK_.call(null,inst_13577);var state_13633__$1 = state_13633;if(inst_13580)
{var statearr_13662_13702 = state_13633__$1;(statearr_13662_13702[(1)] = (7));
} else
{var statearr_13663_13703 = state_13633__$1;(statearr_13663_13703[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (14)))
{var inst_13593 = (state_13633[(15)]);var inst_13600 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13593);var state_13633__$1 = state_13633;var statearr_13664_13704 = state_13633__$1;(statearr_13664_13704[(2)] = inst_13600);
(statearr_13664_13704[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (26)))
{var inst_13623 = (state_13633[(2)]);var state_13633__$1 = state_13633;var statearr_13665_13705 = state_13633__$1;(statearr_13665_13705[(2)] = inst_13623);
(statearr_13665_13705[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (16)))
{var inst_13603 = (state_13633[(2)]);var inst_13604 = calc_state.call(null);var inst_13577 = inst_13604;var state_13633__$1 = (function (){var statearr_13666 = state_13633;(statearr_13666[(7)] = inst_13577);
(statearr_13666[(18)] = inst_13603);
return statearr_13666;
})();var statearr_13667_13706 = state_13633__$1;(statearr_13667_13706[(2)] = null);
(statearr_13667_13706[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (10)))
{var inst_13593 = (state_13633[(15)]);var inst_13592 = (state_13633[(8)]);var inst_13591 = (state_13633[(2)]);var inst_13592__$1 = cljs.core.nth.call(null,inst_13591,(0),null);var inst_13593__$1 = cljs.core.nth.call(null,inst_13591,(1),null);var inst_13594 = (inst_13592__$1 == null);var inst_13595 = cljs.core._EQ_.call(null,inst_13593__$1,change);var inst_13596 = (inst_13594) || (inst_13595);var state_13633__$1 = (function (){var statearr_13668 = state_13633;(statearr_13668[(15)] = inst_13593__$1);
(statearr_13668[(8)] = inst_13592__$1);
return statearr_13668;
})();if(cljs.core.truth_(inst_13596))
{var statearr_13669_13707 = state_13633__$1;(statearr_13669_13707[(1)] = (11));
} else
{var statearr_13670_13708 = state_13633__$1;(statearr_13670_13708[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (18)))
{var inst_13593 = (state_13633[(15)]);var inst_13588 = (state_13633[(16)]);var inst_13587 = (state_13633[(17)]);var inst_13610 = cljs.core.empty_QMARK_.call(null,inst_13588);var inst_13611 = inst_13587.call(null,inst_13593);var inst_13612 = cljs.core.not.call(null,inst_13611);var inst_13613 = (inst_13610) && (inst_13612);var state_13633__$1 = state_13633;var statearr_13671_13709 = state_13633__$1;(statearr_13671_13709[(2)] = inst_13613);
(statearr_13671_13709[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (8)))
{var inst_13577 = (state_13633[(7)]);var state_13633__$1 = state_13633;var statearr_13672_13710 = state_13633__$1;(statearr_13672_13710[(2)] = inst_13577);
(statearr_13672_13710[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6470__auto__,c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_13676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13676[(0)] = state_machine__6471__auto__);
(statearr_13676[(1)] = (1));
return statearr_13676;
});
var state_machine__6471__auto____1 = (function (state_13633){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_13633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e13677){if((e13677 instanceof Object))
{var ex__6474__auto__ = e13677;var statearr_13678_13711 = state_13633;(statearr_13678_13711[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13712 = state_13633;
state_13633 = G__13712;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_13633){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_13633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6487__auto__ = (function (){var statearr_13679 = f__6486__auto__.call(null);(statearr_13679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___13680);
return statearr_13679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13714 = {};return obj13714;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13715_SHARP_){if(cljs.core.truth_(p1__13715_SHARP_.call(null,topic)))
{return p1__13715_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13715_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13838 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13839){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13839 = meta13839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13838.cljs$lang$type = true;
cljs.core.async.t13838.cljs$lang$ctorStr = "cljs.core.async/t13838";
cljs.core.async.t13838.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13838");
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13838.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13840){var self__ = this;
var _13840__$1 = this;return self__.meta13839;
});})(mults,ensure_mult))
;
cljs.core.async.t13838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13840,meta13839__$1){var self__ = this;
var _13840__$1 = this;return (new cljs.core.async.t13838(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13839__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13838 = ((function (mults,ensure_mult){
return (function __GT_t13838(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13839){return (new cljs.core.async.t13838(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13839));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13838(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6485__auto___13960 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___13960,mults,ensure_mult,p){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___13960,mults,ensure_mult,p){
return (function (state_13912){var state_val_13913 = (state_13912[(1)]);if((state_val_13913 === (7)))
{var inst_13908 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13914_13961 = state_13912__$1;(statearr_13914_13961[(2)] = inst_13908);
(statearr_13914_13961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (20)))
{var state_13912__$1 = state_13912;var statearr_13915_13962 = state_13912__$1;(statearr_13915_13962[(2)] = null);
(statearr_13915_13962[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (1)))
{var state_13912__$1 = state_13912;var statearr_13916_13963 = state_13912__$1;(statearr_13916_13963[(2)] = null);
(statearr_13916_13963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (24)))
{var inst_13891 = (state_13912[(7)]);var inst_13900 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13891);var state_13912__$1 = state_13912;var statearr_13917_13964 = state_13912__$1;(statearr_13917_13964[(2)] = inst_13900);
(statearr_13917_13964[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (4)))
{var inst_13843 = (state_13912[(8)]);var inst_13843__$1 = (state_13912[(2)]);var inst_13844 = (inst_13843__$1 == null);var state_13912__$1 = (function (){var statearr_13918 = state_13912;(statearr_13918[(8)] = inst_13843__$1);
return statearr_13918;
})();if(cljs.core.truth_(inst_13844))
{var statearr_13919_13965 = state_13912__$1;(statearr_13919_13965[(1)] = (5));
} else
{var statearr_13920_13966 = state_13912__$1;(statearr_13920_13966[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (15)))
{var inst_13885 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13921_13967 = state_13912__$1;(statearr_13921_13967[(2)] = inst_13885);
(statearr_13921_13967[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (21)))
{var inst_13905 = (state_13912[(2)]);var state_13912__$1 = (function (){var statearr_13922 = state_13912;(statearr_13922[(9)] = inst_13905);
return statearr_13922;
})();var statearr_13923_13968 = state_13912__$1;(statearr_13923_13968[(2)] = null);
(statearr_13923_13968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (13)))
{var inst_13867 = (state_13912[(10)]);var inst_13869 = cljs.core.chunked_seq_QMARK_.call(null,inst_13867);var state_13912__$1 = state_13912;if(inst_13869)
{var statearr_13924_13969 = state_13912__$1;(statearr_13924_13969[(1)] = (16));
} else
{var statearr_13925_13970 = state_13912__$1;(statearr_13925_13970[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (22)))
{var inst_13897 = (state_13912[(2)]);var state_13912__$1 = state_13912;if(cljs.core.truth_(inst_13897))
{var statearr_13926_13971 = state_13912__$1;(statearr_13926_13971[(1)] = (23));
} else
{var statearr_13927_13972 = state_13912__$1;(statearr_13927_13972[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (6)))
{var inst_13891 = (state_13912[(7)]);var inst_13893 = (state_13912[(11)]);var inst_13843 = (state_13912[(8)]);var inst_13891__$1 = topic_fn.call(null,inst_13843);var inst_13892 = cljs.core.deref.call(null,mults);var inst_13893__$1 = cljs.core.get.call(null,inst_13892,inst_13891__$1);var state_13912__$1 = (function (){var statearr_13928 = state_13912;(statearr_13928[(7)] = inst_13891__$1);
(statearr_13928[(11)] = inst_13893__$1);
return statearr_13928;
})();if(cljs.core.truth_(inst_13893__$1))
{var statearr_13929_13973 = state_13912__$1;(statearr_13929_13973[(1)] = (19));
} else
{var statearr_13930_13974 = state_13912__$1;(statearr_13930_13974[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (25)))
{var inst_13902 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13931_13975 = state_13912__$1;(statearr_13931_13975[(2)] = inst_13902);
(statearr_13931_13975[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (17)))
{var inst_13867 = (state_13912[(10)]);var inst_13876 = cljs.core.first.call(null,inst_13867);var inst_13877 = cljs.core.async.muxch_STAR_.call(null,inst_13876);var inst_13878 = cljs.core.async.close_BANG_.call(null,inst_13877);var inst_13879 = cljs.core.next.call(null,inst_13867);var inst_13853 = inst_13879;var inst_13854 = null;var inst_13855 = (0);var inst_13856 = (0);var state_13912__$1 = (function (){var statearr_13932 = state_13912;(statearr_13932[(12)] = inst_13853);
(statearr_13932[(13)] = inst_13855);
(statearr_13932[(14)] = inst_13856);
(statearr_13932[(15)] = inst_13878);
(statearr_13932[(16)] = inst_13854);
return statearr_13932;
})();var statearr_13933_13976 = state_13912__$1;(statearr_13933_13976[(2)] = null);
(statearr_13933_13976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (3)))
{var inst_13910 = (state_13912[(2)]);var state_13912__$1 = state_13912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13912__$1,inst_13910);
} else
{if((state_val_13913 === (12)))
{var inst_13887 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13934_13977 = state_13912__$1;(statearr_13934_13977[(2)] = inst_13887);
(statearr_13934_13977[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (2)))
{var state_13912__$1 = state_13912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13912__$1,(4),ch);
} else
{if((state_val_13913 === (23)))
{var state_13912__$1 = state_13912;var statearr_13935_13978 = state_13912__$1;(statearr_13935_13978[(2)] = null);
(statearr_13935_13978[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (19)))
{var inst_13893 = (state_13912[(11)]);var inst_13843 = (state_13912[(8)]);var inst_13895 = cljs.core.async.muxch_STAR_.call(null,inst_13893);var state_13912__$1 = state_13912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13912__$1,(22),inst_13895,inst_13843);
} else
{if((state_val_13913 === (11)))
{var inst_13853 = (state_13912[(12)]);var inst_13867 = (state_13912[(10)]);var inst_13867__$1 = cljs.core.seq.call(null,inst_13853);var state_13912__$1 = (function (){var statearr_13936 = state_13912;(statearr_13936[(10)] = inst_13867__$1);
return statearr_13936;
})();if(inst_13867__$1)
{var statearr_13937_13979 = state_13912__$1;(statearr_13937_13979[(1)] = (13));
} else
{var statearr_13938_13980 = state_13912__$1;(statearr_13938_13980[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (9)))
{var inst_13889 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13939_13981 = state_13912__$1;(statearr_13939_13981[(2)] = inst_13889);
(statearr_13939_13981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (5)))
{var inst_13850 = cljs.core.deref.call(null,mults);var inst_13851 = cljs.core.vals.call(null,inst_13850);var inst_13852 = cljs.core.seq.call(null,inst_13851);var inst_13853 = inst_13852;var inst_13854 = null;var inst_13855 = (0);var inst_13856 = (0);var state_13912__$1 = (function (){var statearr_13940 = state_13912;(statearr_13940[(12)] = inst_13853);
(statearr_13940[(13)] = inst_13855);
(statearr_13940[(14)] = inst_13856);
(statearr_13940[(16)] = inst_13854);
return statearr_13940;
})();var statearr_13941_13982 = state_13912__$1;(statearr_13941_13982[(2)] = null);
(statearr_13941_13982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (14)))
{var state_13912__$1 = state_13912;var statearr_13945_13983 = state_13912__$1;(statearr_13945_13983[(2)] = null);
(statearr_13945_13983[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (16)))
{var inst_13867 = (state_13912[(10)]);var inst_13871 = cljs.core.chunk_first.call(null,inst_13867);var inst_13872 = cljs.core.chunk_rest.call(null,inst_13867);var inst_13873 = cljs.core.count.call(null,inst_13871);var inst_13853 = inst_13872;var inst_13854 = inst_13871;var inst_13855 = inst_13873;var inst_13856 = (0);var state_13912__$1 = (function (){var statearr_13946 = state_13912;(statearr_13946[(12)] = inst_13853);
(statearr_13946[(13)] = inst_13855);
(statearr_13946[(14)] = inst_13856);
(statearr_13946[(16)] = inst_13854);
return statearr_13946;
})();var statearr_13947_13984 = state_13912__$1;(statearr_13947_13984[(2)] = null);
(statearr_13947_13984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (10)))
{var inst_13853 = (state_13912[(12)]);var inst_13855 = (state_13912[(13)]);var inst_13856 = (state_13912[(14)]);var inst_13854 = (state_13912[(16)]);var inst_13861 = cljs.core._nth.call(null,inst_13854,inst_13856);var inst_13862 = cljs.core.async.muxch_STAR_.call(null,inst_13861);var inst_13863 = cljs.core.async.close_BANG_.call(null,inst_13862);var inst_13864 = (inst_13856 + (1));var tmp13942 = inst_13853;var tmp13943 = inst_13855;var tmp13944 = inst_13854;var inst_13853__$1 = tmp13942;var inst_13854__$1 = tmp13944;var inst_13855__$1 = tmp13943;var inst_13856__$1 = inst_13864;var state_13912__$1 = (function (){var statearr_13948 = state_13912;(statearr_13948[(12)] = inst_13853__$1);
(statearr_13948[(13)] = inst_13855__$1);
(statearr_13948[(17)] = inst_13863);
(statearr_13948[(14)] = inst_13856__$1);
(statearr_13948[(16)] = inst_13854__$1);
return statearr_13948;
})();var statearr_13949_13985 = state_13912__$1;(statearr_13949_13985[(2)] = null);
(statearr_13949_13985[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (18)))
{var inst_13882 = (state_13912[(2)]);var state_13912__$1 = state_13912;var statearr_13950_13986 = state_13912__$1;(statearr_13950_13986[(2)] = inst_13882);
(statearr_13950_13986[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13913 === (8)))
{var inst_13855 = (state_13912[(13)]);var inst_13856 = (state_13912[(14)]);var inst_13858 = (inst_13856 < inst_13855);var inst_13859 = inst_13858;var state_13912__$1 = state_13912;if(cljs.core.truth_(inst_13859))
{var statearr_13951_13987 = state_13912__$1;(statearr_13951_13987[(1)] = (10));
} else
{var statearr_13952_13988 = state_13912__$1;(statearr_13952_13988[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___13960,mults,ensure_mult,p))
;return ((function (switch__6470__auto__,c__6485__auto___13960,mults,ensure_mult,p){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_13956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13956[(0)] = state_machine__6471__auto__);
(statearr_13956[(1)] = (1));
return statearr_13956;
});
var state_machine__6471__auto____1 = (function (state_13912){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_13912);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e13957){if((e13957 instanceof Object))
{var ex__6474__auto__ = e13957;var statearr_13958_13989 = state_13912;(statearr_13958_13989[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13957;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13990 = state_13912;
state_13912 = G__13990;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_13912){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_13912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___13960,mults,ensure_mult,p))
})();var state__6487__auto__ = (function (){var statearr_13959 = f__6486__auto__.call(null);(statearr_13959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___13960);
return statearr_13959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___13960,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6485__auto___14127 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14097){var state_val_14098 = (state_14097[(1)]);if((state_val_14098 === (7)))
{var state_14097__$1 = state_14097;var statearr_14099_14128 = state_14097__$1;(statearr_14099_14128[(2)] = null);
(statearr_14099_14128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (1)))
{var state_14097__$1 = state_14097;var statearr_14100_14129 = state_14097__$1;(statearr_14100_14129[(2)] = null);
(statearr_14100_14129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (4)))
{var inst_14061 = (state_14097[(7)]);var inst_14063 = (inst_14061 < cnt);var state_14097__$1 = state_14097;if(cljs.core.truth_(inst_14063))
{var statearr_14101_14130 = state_14097__$1;(statearr_14101_14130[(1)] = (6));
} else
{var statearr_14102_14131 = state_14097__$1;(statearr_14102_14131[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (15)))
{var inst_14093 = (state_14097[(2)]);var state_14097__$1 = state_14097;var statearr_14103_14132 = state_14097__$1;(statearr_14103_14132[(2)] = inst_14093);
(statearr_14103_14132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (13)))
{var inst_14086 = cljs.core.async.close_BANG_.call(null,out);var state_14097__$1 = state_14097;var statearr_14104_14133 = state_14097__$1;(statearr_14104_14133[(2)] = inst_14086);
(statearr_14104_14133[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (6)))
{var state_14097__$1 = state_14097;var statearr_14105_14134 = state_14097__$1;(statearr_14105_14134[(2)] = null);
(statearr_14105_14134[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (3)))
{var inst_14095 = (state_14097[(2)]);var state_14097__$1 = state_14097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14097__$1,inst_14095);
} else
{if((state_val_14098 === (12)))
{var inst_14083 = (state_14097[(8)]);var inst_14083__$1 = (state_14097[(2)]);var inst_14084 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14083__$1);var state_14097__$1 = (function (){var statearr_14106 = state_14097;(statearr_14106[(8)] = inst_14083__$1);
return statearr_14106;
})();if(cljs.core.truth_(inst_14084))
{var statearr_14107_14135 = state_14097__$1;(statearr_14107_14135[(1)] = (13));
} else
{var statearr_14108_14136 = state_14097__$1;(statearr_14108_14136[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (2)))
{var inst_14060 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14061 = (0);var state_14097__$1 = (function (){var statearr_14109 = state_14097;(statearr_14109[(7)] = inst_14061);
(statearr_14109[(9)] = inst_14060);
return statearr_14109;
})();var statearr_14110_14137 = state_14097__$1;(statearr_14110_14137[(2)] = null);
(statearr_14110_14137[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (11)))
{var inst_14061 = (state_14097[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14097,(10),Object,null,(9));var inst_14070 = chs__$1.call(null,inst_14061);var inst_14071 = done.call(null,inst_14061);var inst_14072 = cljs.core.async.take_BANG_.call(null,inst_14070,inst_14071);var state_14097__$1 = state_14097;var statearr_14111_14138 = state_14097__$1;(statearr_14111_14138[(2)] = inst_14072);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14097__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (9)))
{var inst_14061 = (state_14097[(7)]);var inst_14074 = (state_14097[(2)]);var inst_14075 = (inst_14061 + (1));var inst_14061__$1 = inst_14075;var state_14097__$1 = (function (){var statearr_14112 = state_14097;(statearr_14112[(7)] = inst_14061__$1);
(statearr_14112[(10)] = inst_14074);
return statearr_14112;
})();var statearr_14113_14139 = state_14097__$1;(statearr_14113_14139[(2)] = null);
(statearr_14113_14139[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (5)))
{var inst_14081 = (state_14097[(2)]);var state_14097__$1 = (function (){var statearr_14114 = state_14097;(statearr_14114[(11)] = inst_14081);
return statearr_14114;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14097__$1,(12),dchan);
} else
{if((state_val_14098 === (14)))
{var inst_14083 = (state_14097[(8)]);var inst_14088 = cljs.core.apply.call(null,f,inst_14083);var state_14097__$1 = state_14097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14097__$1,(16),out,inst_14088);
} else
{if((state_val_14098 === (16)))
{var inst_14090 = (state_14097[(2)]);var state_14097__$1 = (function (){var statearr_14115 = state_14097;(statearr_14115[(12)] = inst_14090);
return statearr_14115;
})();var statearr_14116_14140 = state_14097__$1;(statearr_14116_14140[(2)] = null);
(statearr_14116_14140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (10)))
{var inst_14065 = (state_14097[(2)]);var inst_14066 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14097__$1 = (function (){var statearr_14117 = state_14097;(statearr_14117[(13)] = inst_14065);
return statearr_14117;
})();var statearr_14118_14141 = state_14097__$1;(statearr_14118_14141[(2)] = inst_14066);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14097__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14098 === (8)))
{var inst_14079 = (state_14097[(2)]);var state_14097__$1 = state_14097;var statearr_14119_14142 = state_14097__$1;(statearr_14119_14142[(2)] = inst_14079);
(statearr_14119_14142[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6470__auto__,c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14123[(0)] = state_machine__6471__auto__);
(statearr_14123[(1)] = (1));
return statearr_14123;
});
var state_machine__6471__auto____1 = (function (state_14097){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14097);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14124){if((e14124 instanceof Object))
{var ex__6474__auto__ = e14124;var statearr_14125_14143 = state_14097;(statearr_14125_14143[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14124;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14144 = state_14097;
state_14097 = G__14144;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14097){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6487__auto__ = (function (){var statearr_14126 = f__6486__auto__.call(null);(statearr_14126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14127);
return statearr_14126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14127,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___14252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14252,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14252,out){
return (function (state_14228){var state_val_14229 = (state_14228[(1)]);if((state_val_14229 === (7)))
{var inst_14208 = (state_14228[(7)]);var inst_14207 = (state_14228[(8)]);var inst_14207__$1 = (state_14228[(2)]);var inst_14208__$1 = cljs.core.nth.call(null,inst_14207__$1,(0),null);var inst_14209 = cljs.core.nth.call(null,inst_14207__$1,(1),null);var inst_14210 = (inst_14208__$1 == null);var state_14228__$1 = (function (){var statearr_14230 = state_14228;(statearr_14230[(7)] = inst_14208__$1);
(statearr_14230[(8)] = inst_14207__$1);
(statearr_14230[(9)] = inst_14209);
return statearr_14230;
})();if(cljs.core.truth_(inst_14210))
{var statearr_14231_14253 = state_14228__$1;(statearr_14231_14253[(1)] = (8));
} else
{var statearr_14232_14254 = state_14228__$1;(statearr_14232_14254[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (1)))
{var inst_14199 = cljs.core.vec.call(null,chs);var inst_14200 = inst_14199;var state_14228__$1 = (function (){var statearr_14233 = state_14228;(statearr_14233[(10)] = inst_14200);
return statearr_14233;
})();var statearr_14234_14255 = state_14228__$1;(statearr_14234_14255[(2)] = null);
(statearr_14234_14255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (4)))
{var inst_14200 = (state_14228[(10)]);var state_14228__$1 = state_14228;return cljs.core.async.ioc_alts_BANG_.call(null,state_14228__$1,(7),inst_14200);
} else
{if((state_val_14229 === (6)))
{var inst_14224 = (state_14228[(2)]);var state_14228__$1 = state_14228;var statearr_14235_14256 = state_14228__$1;(statearr_14235_14256[(2)] = inst_14224);
(statearr_14235_14256[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (3)))
{var inst_14226 = (state_14228[(2)]);var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14228__$1,inst_14226);
} else
{if((state_val_14229 === (2)))
{var inst_14200 = (state_14228[(10)]);var inst_14202 = cljs.core.count.call(null,inst_14200);var inst_14203 = (inst_14202 > (0));var state_14228__$1 = state_14228;if(cljs.core.truth_(inst_14203))
{var statearr_14237_14257 = state_14228__$1;(statearr_14237_14257[(1)] = (4));
} else
{var statearr_14238_14258 = state_14228__$1;(statearr_14238_14258[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (11)))
{var inst_14200 = (state_14228[(10)]);var inst_14217 = (state_14228[(2)]);var tmp14236 = inst_14200;var inst_14200__$1 = tmp14236;var state_14228__$1 = (function (){var statearr_14239 = state_14228;(statearr_14239[(11)] = inst_14217);
(statearr_14239[(10)] = inst_14200__$1);
return statearr_14239;
})();var statearr_14240_14259 = state_14228__$1;(statearr_14240_14259[(2)] = null);
(statearr_14240_14259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (9)))
{var inst_14208 = (state_14228[(7)]);var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,(11),out,inst_14208);
} else
{if((state_val_14229 === (5)))
{var inst_14222 = cljs.core.async.close_BANG_.call(null,out);var state_14228__$1 = state_14228;var statearr_14241_14260 = state_14228__$1;(statearr_14241_14260[(2)] = inst_14222);
(statearr_14241_14260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (10)))
{var inst_14220 = (state_14228[(2)]);var state_14228__$1 = state_14228;var statearr_14242_14261 = state_14228__$1;(statearr_14242_14261[(2)] = inst_14220);
(statearr_14242_14261[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14229 === (8)))
{var inst_14208 = (state_14228[(7)]);var inst_14207 = (state_14228[(8)]);var inst_14209 = (state_14228[(9)]);var inst_14200 = (state_14228[(10)]);var inst_14212 = (function (){var c = inst_14209;var v = inst_14208;var vec__14205 = inst_14207;var cs = inst_14200;return ((function (c,v,vec__14205,cs,inst_14208,inst_14207,inst_14209,inst_14200,state_val_14229,c__6485__auto___14252,out){
return (function (p1__14145_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14145_SHARP_);
});
;})(c,v,vec__14205,cs,inst_14208,inst_14207,inst_14209,inst_14200,state_val_14229,c__6485__auto___14252,out))
})();var inst_14213 = cljs.core.filterv.call(null,inst_14212,inst_14200);var inst_14200__$1 = inst_14213;var state_14228__$1 = (function (){var statearr_14243 = state_14228;(statearr_14243[(10)] = inst_14200__$1);
return statearr_14243;
})();var statearr_14244_14262 = state_14228__$1;(statearr_14244_14262[(2)] = null);
(statearr_14244_14262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___14252,out))
;return ((function (switch__6470__auto__,c__6485__auto___14252,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14248 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14248[(0)] = state_machine__6471__auto__);
(statearr_14248[(1)] = (1));
return statearr_14248;
});
var state_machine__6471__auto____1 = (function (state_14228){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14249){if((e14249 instanceof Object))
{var ex__6474__auto__ = e14249;var statearr_14250_14263 = state_14228;(statearr_14250_14263[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14264 = state_14228;
state_14228 = G__14264;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14228){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14252,out))
})();var state__6487__auto__ = (function (){var statearr_14251 = f__6486__auto__.call(null);(statearr_14251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14252);
return statearr_14251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14252,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___14357 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14357,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14357,out){
return (function (state_14334){var state_val_14335 = (state_14334[(1)]);if((state_val_14335 === (7)))
{var inst_14316 = (state_14334[(7)]);var inst_14316__$1 = (state_14334[(2)]);var inst_14317 = (inst_14316__$1 == null);var inst_14318 = cljs.core.not.call(null,inst_14317);var state_14334__$1 = (function (){var statearr_14336 = state_14334;(statearr_14336[(7)] = inst_14316__$1);
return statearr_14336;
})();if(inst_14318)
{var statearr_14337_14358 = state_14334__$1;(statearr_14337_14358[(1)] = (8));
} else
{var statearr_14338_14359 = state_14334__$1;(statearr_14338_14359[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (1)))
{var inst_14311 = (0);var state_14334__$1 = (function (){var statearr_14339 = state_14334;(statearr_14339[(8)] = inst_14311);
return statearr_14339;
})();var statearr_14340_14360 = state_14334__$1;(statearr_14340_14360[(2)] = null);
(statearr_14340_14360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (4)))
{var state_14334__$1 = state_14334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14334__$1,(7),ch);
} else
{if((state_val_14335 === (6)))
{var inst_14329 = (state_14334[(2)]);var state_14334__$1 = state_14334;var statearr_14341_14361 = state_14334__$1;(statearr_14341_14361[(2)] = inst_14329);
(statearr_14341_14361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (3)))
{var inst_14331 = (state_14334[(2)]);var inst_14332 = cljs.core.async.close_BANG_.call(null,out);var state_14334__$1 = (function (){var statearr_14342 = state_14334;(statearr_14342[(9)] = inst_14331);
return statearr_14342;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14334__$1,inst_14332);
} else
{if((state_val_14335 === (2)))
{var inst_14311 = (state_14334[(8)]);var inst_14313 = (inst_14311 < n);var state_14334__$1 = state_14334;if(cljs.core.truth_(inst_14313))
{var statearr_14343_14362 = state_14334__$1;(statearr_14343_14362[(1)] = (4));
} else
{var statearr_14344_14363 = state_14334__$1;(statearr_14344_14363[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (11)))
{var inst_14311 = (state_14334[(8)]);var inst_14321 = (state_14334[(2)]);var inst_14322 = (inst_14311 + (1));var inst_14311__$1 = inst_14322;var state_14334__$1 = (function (){var statearr_14345 = state_14334;(statearr_14345[(8)] = inst_14311__$1);
(statearr_14345[(10)] = inst_14321);
return statearr_14345;
})();var statearr_14346_14364 = state_14334__$1;(statearr_14346_14364[(2)] = null);
(statearr_14346_14364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (9)))
{var state_14334__$1 = state_14334;var statearr_14347_14365 = state_14334__$1;(statearr_14347_14365[(2)] = null);
(statearr_14347_14365[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (5)))
{var state_14334__$1 = state_14334;var statearr_14348_14366 = state_14334__$1;(statearr_14348_14366[(2)] = null);
(statearr_14348_14366[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (10)))
{var inst_14326 = (state_14334[(2)]);var state_14334__$1 = state_14334;var statearr_14349_14367 = state_14334__$1;(statearr_14349_14367[(2)] = inst_14326);
(statearr_14349_14367[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14335 === (8)))
{var inst_14316 = (state_14334[(7)]);var state_14334__$1 = state_14334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14334__$1,(11),out,inst_14316);
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
});})(c__6485__auto___14357,out))
;return ((function (switch__6470__auto__,c__6485__auto___14357,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14353 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14353[(0)] = state_machine__6471__auto__);
(statearr_14353[(1)] = (1));
return statearr_14353;
});
var state_machine__6471__auto____1 = (function (state_14334){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14354){if((e14354 instanceof Object))
{var ex__6474__auto__ = e14354;var statearr_14355_14368 = state_14334;(statearr_14355_14368[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14369 = state_14334;
state_14334 = G__14369;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14334){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14357,out))
})();var state__6487__auto__ = (function (){var statearr_14356 = f__6486__auto__.call(null);(statearr_14356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14357);
return statearr_14356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14357,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14377 = (function (ch,f,map_LT_,meta14378){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14378 = meta14378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14377.cljs$lang$type = true;
cljs.core.async.t14377.cljs$lang$ctorStr = "cljs.core.async/t14377";
cljs.core.async.t14377.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14377");
});
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14380 = (function (fn1,_,meta14378,ch,f,map_LT_,meta14381){
this.fn1 = fn1;
this._ = _;
this.meta14378 = meta14378;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14381 = meta14381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14380.cljs$lang$type = true;
cljs.core.async.t14380.cljs$lang$ctorStr = "cljs.core.async/t14380";
cljs.core.async.t14380.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14380");
});})(___$1))
;
cljs.core.async.t14380.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14370_SHARP_){return f1.call(null,(((p1__14370_SHARP_ == null))?null:self__.f.call(null,p1__14370_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14382){var self__ = this;
var _14382__$1 = this;return self__.meta14381;
});})(___$1))
;
cljs.core.async.t14380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14382,meta14381__$1){var self__ = this;
var _14382__$1 = this;return (new cljs.core.async.t14380(self__.fn1,self__._,self__.meta14378,self__.ch,self__.f,self__.map_LT_,meta14381__$1));
});})(___$1))
;
cljs.core.async.__GT_t14380 = ((function (___$1){
return (function __GT_t14380(fn1__$1,___$2,meta14378__$1,ch__$2,f__$2,map_LT___$2,meta14381){return (new cljs.core.async.t14380(fn1__$1,___$2,meta14378__$1,ch__$2,f__$2,map_LT___$2,meta14381));
});})(___$1))
;
}
return (new cljs.core.async.t14380(fn1,___$1,self__.meta14378,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14379){var self__ = this;
var _14379__$1 = this;return self__.meta14378;
});
cljs.core.async.t14377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14379,meta14378__$1){var self__ = this;
var _14379__$1 = this;return (new cljs.core.async.t14377(self__.ch,self__.f,self__.map_LT_,meta14378__$1));
});
cljs.core.async.__GT_t14377 = (function __GT_t14377(ch__$1,f__$1,map_LT___$1,meta14378){return (new cljs.core.async.t14377(ch__$1,f__$1,map_LT___$1,meta14378));
});
}
return (new cljs.core.async.t14377(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14386 = (function (ch,f,map_GT_,meta14387){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14387 = meta14387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14386.cljs$lang$type = true;
cljs.core.async.t14386.cljs$lang$ctorStr = "cljs.core.async/t14386";
cljs.core.async.t14386.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14386");
});
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14388){var self__ = this;
var _14388__$1 = this;return self__.meta14387;
});
cljs.core.async.t14386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14388,meta14387__$1){var self__ = this;
var _14388__$1 = this;return (new cljs.core.async.t14386(self__.ch,self__.f,self__.map_GT_,meta14387__$1));
});
cljs.core.async.__GT_t14386 = (function __GT_t14386(ch__$1,f__$1,map_GT___$1,meta14387){return (new cljs.core.async.t14386(ch__$1,f__$1,map_GT___$1,meta14387));
});
}
return (new cljs.core.async.t14386(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14392 = (function (ch,p,filter_GT_,meta14393){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14393 = meta14393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14392.cljs$lang$type = true;
cljs.core.async.t14392.cljs$lang$ctorStr = "cljs.core.async/t14392";
cljs.core.async.t14392.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14392");
});
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14394){var self__ = this;
var _14394__$1 = this;return self__.meta14393;
});
cljs.core.async.t14392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14394,meta14393__$1){var self__ = this;
var _14394__$1 = this;return (new cljs.core.async.t14392(self__.ch,self__.p,self__.filter_GT_,meta14393__$1));
});
cljs.core.async.__GT_t14392 = (function __GT_t14392(ch__$1,p__$1,filter_GT___$1,meta14393){return (new cljs.core.async.t14392(ch__$1,p__$1,filter_GT___$1,meta14393));
});
}
return (new cljs.core.async.t14392(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___14477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14477,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14477,out){
return (function (state_14456){var state_val_14457 = (state_14456[(1)]);if((state_val_14457 === (7)))
{var inst_14452 = (state_14456[(2)]);var state_14456__$1 = state_14456;var statearr_14458_14478 = state_14456__$1;(statearr_14458_14478[(2)] = inst_14452);
(statearr_14458_14478[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (1)))
{var state_14456__$1 = state_14456;var statearr_14459_14479 = state_14456__$1;(statearr_14459_14479[(2)] = null);
(statearr_14459_14479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (4)))
{var inst_14438 = (state_14456[(7)]);var inst_14438__$1 = (state_14456[(2)]);var inst_14439 = (inst_14438__$1 == null);var state_14456__$1 = (function (){var statearr_14460 = state_14456;(statearr_14460[(7)] = inst_14438__$1);
return statearr_14460;
})();if(cljs.core.truth_(inst_14439))
{var statearr_14461_14480 = state_14456__$1;(statearr_14461_14480[(1)] = (5));
} else
{var statearr_14462_14481 = state_14456__$1;(statearr_14462_14481[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (6)))
{var inst_14438 = (state_14456[(7)]);var inst_14443 = p.call(null,inst_14438);var state_14456__$1 = state_14456;if(cljs.core.truth_(inst_14443))
{var statearr_14463_14482 = state_14456__$1;(statearr_14463_14482[(1)] = (8));
} else
{var statearr_14464_14483 = state_14456__$1;(statearr_14464_14483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (3)))
{var inst_14454 = (state_14456[(2)]);var state_14456__$1 = state_14456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14456__$1,inst_14454);
} else
{if((state_val_14457 === (2)))
{var state_14456__$1 = state_14456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14456__$1,(4),ch);
} else
{if((state_val_14457 === (11)))
{var inst_14446 = (state_14456[(2)]);var state_14456__$1 = state_14456;var statearr_14465_14484 = state_14456__$1;(statearr_14465_14484[(2)] = inst_14446);
(statearr_14465_14484[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (9)))
{var state_14456__$1 = state_14456;var statearr_14466_14485 = state_14456__$1;(statearr_14466_14485[(2)] = null);
(statearr_14466_14485[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (5)))
{var inst_14441 = cljs.core.async.close_BANG_.call(null,out);var state_14456__$1 = state_14456;var statearr_14467_14486 = state_14456__$1;(statearr_14467_14486[(2)] = inst_14441);
(statearr_14467_14486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (10)))
{var inst_14449 = (state_14456[(2)]);var state_14456__$1 = (function (){var statearr_14468 = state_14456;(statearr_14468[(8)] = inst_14449);
return statearr_14468;
})();var statearr_14469_14487 = state_14456__$1;(statearr_14469_14487[(2)] = null);
(statearr_14469_14487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (8)))
{var inst_14438 = (state_14456[(7)]);var state_14456__$1 = state_14456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14456__$1,(11),out,inst_14438);
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
});})(c__6485__auto___14477,out))
;return ((function (switch__6470__auto__,c__6485__auto___14477,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14473 = [null,null,null,null,null,null,null,null,null];(statearr_14473[(0)] = state_machine__6471__auto__);
(statearr_14473[(1)] = (1));
return statearr_14473;
});
var state_machine__6471__auto____1 = (function (state_14456){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14456);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14474){if((e14474 instanceof Object))
{var ex__6474__auto__ = e14474;var statearr_14475_14488 = state_14456;(statearr_14475_14488[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14474;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14489 = state_14456;
state_14456 = G__14489;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14477,out))
})();var state__6487__auto__ = (function (){var statearr_14476 = f__6486__auto__.call(null);(statearr_14476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14477);
return statearr_14476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14477,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto__){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__){
return (function (state_14655){var state_val_14656 = (state_14655[(1)]);if((state_val_14656 === (7)))
{var inst_14651 = (state_14655[(2)]);var state_14655__$1 = state_14655;var statearr_14657_14698 = state_14655__$1;(statearr_14657_14698[(2)] = inst_14651);
(statearr_14657_14698[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (20)))
{var inst_14621 = (state_14655[(7)]);var inst_14632 = (state_14655[(2)]);var inst_14633 = cljs.core.next.call(null,inst_14621);var inst_14607 = inst_14633;var inst_14608 = null;var inst_14609 = (0);var inst_14610 = (0);var state_14655__$1 = (function (){var statearr_14658 = state_14655;(statearr_14658[(8)] = inst_14607);
(statearr_14658[(9)] = inst_14632);
(statearr_14658[(10)] = inst_14610);
(statearr_14658[(11)] = inst_14608);
(statearr_14658[(12)] = inst_14609);
return statearr_14658;
})();var statearr_14659_14699 = state_14655__$1;(statearr_14659_14699[(2)] = null);
(statearr_14659_14699[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (1)))
{var state_14655__$1 = state_14655;var statearr_14660_14700 = state_14655__$1;(statearr_14660_14700[(2)] = null);
(statearr_14660_14700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (4)))
{var inst_14596 = (state_14655[(13)]);var inst_14596__$1 = (state_14655[(2)]);var inst_14597 = (inst_14596__$1 == null);var state_14655__$1 = (function (){var statearr_14661 = state_14655;(statearr_14661[(13)] = inst_14596__$1);
return statearr_14661;
})();if(cljs.core.truth_(inst_14597))
{var statearr_14662_14701 = state_14655__$1;(statearr_14662_14701[(1)] = (5));
} else
{var statearr_14663_14702 = state_14655__$1;(statearr_14663_14702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (15)))
{var state_14655__$1 = state_14655;var statearr_14667_14703 = state_14655__$1;(statearr_14667_14703[(2)] = null);
(statearr_14667_14703[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (21)))
{var state_14655__$1 = state_14655;var statearr_14668_14704 = state_14655__$1;(statearr_14668_14704[(2)] = null);
(statearr_14668_14704[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (13)))
{var inst_14607 = (state_14655[(8)]);var inst_14610 = (state_14655[(10)]);var inst_14608 = (state_14655[(11)]);var inst_14609 = (state_14655[(12)]);var inst_14617 = (state_14655[(2)]);var inst_14618 = (inst_14610 + (1));var tmp14664 = inst_14607;var tmp14665 = inst_14608;var tmp14666 = inst_14609;var inst_14607__$1 = tmp14664;var inst_14608__$1 = tmp14665;var inst_14609__$1 = tmp14666;var inst_14610__$1 = inst_14618;var state_14655__$1 = (function (){var statearr_14669 = state_14655;(statearr_14669[(8)] = inst_14607__$1);
(statearr_14669[(14)] = inst_14617);
(statearr_14669[(10)] = inst_14610__$1);
(statearr_14669[(11)] = inst_14608__$1);
(statearr_14669[(12)] = inst_14609__$1);
return statearr_14669;
})();var statearr_14670_14705 = state_14655__$1;(statearr_14670_14705[(2)] = null);
(statearr_14670_14705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (22)))
{var state_14655__$1 = state_14655;var statearr_14671_14706 = state_14655__$1;(statearr_14671_14706[(2)] = null);
(statearr_14671_14706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (6)))
{var inst_14596 = (state_14655[(13)]);var inst_14605 = f.call(null,inst_14596);var inst_14606 = cljs.core.seq.call(null,inst_14605);var inst_14607 = inst_14606;var inst_14608 = null;var inst_14609 = (0);var inst_14610 = (0);var state_14655__$1 = (function (){var statearr_14672 = state_14655;(statearr_14672[(8)] = inst_14607);
(statearr_14672[(10)] = inst_14610);
(statearr_14672[(11)] = inst_14608);
(statearr_14672[(12)] = inst_14609);
return statearr_14672;
})();var statearr_14673_14707 = state_14655__$1;(statearr_14673_14707[(2)] = null);
(statearr_14673_14707[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (17)))
{var inst_14621 = (state_14655[(7)]);var inst_14625 = cljs.core.chunk_first.call(null,inst_14621);var inst_14626 = cljs.core.chunk_rest.call(null,inst_14621);var inst_14627 = cljs.core.count.call(null,inst_14625);var inst_14607 = inst_14626;var inst_14608 = inst_14625;var inst_14609 = inst_14627;var inst_14610 = (0);var state_14655__$1 = (function (){var statearr_14674 = state_14655;(statearr_14674[(8)] = inst_14607);
(statearr_14674[(10)] = inst_14610);
(statearr_14674[(11)] = inst_14608);
(statearr_14674[(12)] = inst_14609);
return statearr_14674;
})();var statearr_14675_14708 = state_14655__$1;(statearr_14675_14708[(2)] = null);
(statearr_14675_14708[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (3)))
{var inst_14653 = (state_14655[(2)]);var state_14655__$1 = state_14655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14655__$1,inst_14653);
} else
{if((state_val_14656 === (12)))
{var inst_14641 = (state_14655[(2)]);var state_14655__$1 = state_14655;var statearr_14676_14709 = state_14655__$1;(statearr_14676_14709[(2)] = inst_14641);
(statearr_14676_14709[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (2)))
{var state_14655__$1 = state_14655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14655__$1,(4),in$);
} else
{if((state_val_14656 === (23)))
{var inst_14649 = (state_14655[(2)]);var state_14655__$1 = state_14655;var statearr_14677_14710 = state_14655__$1;(statearr_14677_14710[(2)] = inst_14649);
(statearr_14677_14710[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (19)))
{var inst_14636 = (state_14655[(2)]);var state_14655__$1 = state_14655;var statearr_14678_14711 = state_14655__$1;(statearr_14678_14711[(2)] = inst_14636);
(statearr_14678_14711[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (11)))
{var inst_14607 = (state_14655[(8)]);var inst_14621 = (state_14655[(7)]);var inst_14621__$1 = cljs.core.seq.call(null,inst_14607);var state_14655__$1 = (function (){var statearr_14679 = state_14655;(statearr_14679[(7)] = inst_14621__$1);
return statearr_14679;
})();if(inst_14621__$1)
{var statearr_14680_14712 = state_14655__$1;(statearr_14680_14712[(1)] = (14));
} else
{var statearr_14681_14713 = state_14655__$1;(statearr_14681_14713[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (9)))
{var inst_14643 = (state_14655[(2)]);var inst_14644 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14655__$1 = (function (){var statearr_14682 = state_14655;(statearr_14682[(15)] = inst_14643);
return statearr_14682;
})();if(cljs.core.truth_(inst_14644))
{var statearr_14683_14714 = state_14655__$1;(statearr_14683_14714[(1)] = (21));
} else
{var statearr_14684_14715 = state_14655__$1;(statearr_14684_14715[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (5)))
{var inst_14599 = cljs.core.async.close_BANG_.call(null,out);var state_14655__$1 = state_14655;var statearr_14685_14716 = state_14655__$1;(statearr_14685_14716[(2)] = inst_14599);
(statearr_14685_14716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (14)))
{var inst_14621 = (state_14655[(7)]);var inst_14623 = cljs.core.chunked_seq_QMARK_.call(null,inst_14621);var state_14655__$1 = state_14655;if(inst_14623)
{var statearr_14686_14717 = state_14655__$1;(statearr_14686_14717[(1)] = (17));
} else
{var statearr_14687_14718 = state_14655__$1;(statearr_14687_14718[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (16)))
{var inst_14639 = (state_14655[(2)]);var state_14655__$1 = state_14655;var statearr_14688_14719 = state_14655__$1;(statearr_14688_14719[(2)] = inst_14639);
(statearr_14688_14719[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14656 === (10)))
{var inst_14610 = (state_14655[(10)]);var inst_14608 = (state_14655[(11)]);var inst_14615 = cljs.core._nth.call(null,inst_14608,inst_14610);var state_14655__$1 = state_14655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14655__$1,(13),out,inst_14615);
} else
{if((state_val_14656 === (18)))
{var inst_14621 = (state_14655[(7)]);var inst_14630 = cljs.core.first.call(null,inst_14621);var state_14655__$1 = state_14655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14655__$1,(20),out,inst_14630);
} else
{if((state_val_14656 === (8)))
{var inst_14610 = (state_14655[(10)]);var inst_14609 = (state_14655[(12)]);var inst_14612 = (inst_14610 < inst_14609);var inst_14613 = inst_14612;var state_14655__$1 = state_14655;if(cljs.core.truth_(inst_14613))
{var statearr_14689_14720 = state_14655__$1;(statearr_14689_14720[(1)] = (10));
} else
{var statearr_14690_14721 = state_14655__$1;(statearr_14690_14721[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__6471__auto____0 = (function (){var statearr_14694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14694[(0)] = state_machine__6471__auto__);
(statearr_14694[(1)] = (1));
return statearr_14694;
});
var state_machine__6471__auto____1 = (function (state_14655){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14655);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object))
{var ex__6474__auto__ = e14695;var statearr_14696_14722 = state_14655;(statearr_14696_14722[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14655);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14723 = state_14655;
state_14655 = G__14723;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14655){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__))
})();var state__6487__auto__ = (function (){var statearr_14697 = f__6486__auto__.call(null);(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_14697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto__))
);
return c__6485__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___14820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14820,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14820,out){
return (function (state_14795){var state_val_14796 = (state_14795[(1)]);if((state_val_14796 === (7)))
{var inst_14790 = (state_14795[(2)]);var state_14795__$1 = state_14795;var statearr_14797_14821 = state_14795__$1;(statearr_14797_14821[(2)] = inst_14790);
(statearr_14797_14821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (1)))
{var inst_14772 = null;var state_14795__$1 = (function (){var statearr_14798 = state_14795;(statearr_14798[(7)] = inst_14772);
return statearr_14798;
})();var statearr_14799_14822 = state_14795__$1;(statearr_14799_14822[(2)] = null);
(statearr_14799_14822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (4)))
{var inst_14775 = (state_14795[(8)]);var inst_14775__$1 = (state_14795[(2)]);var inst_14776 = (inst_14775__$1 == null);var inst_14777 = cljs.core.not.call(null,inst_14776);var state_14795__$1 = (function (){var statearr_14800 = state_14795;(statearr_14800[(8)] = inst_14775__$1);
return statearr_14800;
})();if(inst_14777)
{var statearr_14801_14823 = state_14795__$1;(statearr_14801_14823[(1)] = (5));
} else
{var statearr_14802_14824 = state_14795__$1;(statearr_14802_14824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (6)))
{var state_14795__$1 = state_14795;var statearr_14803_14825 = state_14795__$1;(statearr_14803_14825[(2)] = null);
(statearr_14803_14825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (3)))
{var inst_14792 = (state_14795[(2)]);var inst_14793 = cljs.core.async.close_BANG_.call(null,out);var state_14795__$1 = (function (){var statearr_14804 = state_14795;(statearr_14804[(9)] = inst_14792);
return statearr_14804;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14795__$1,inst_14793);
} else
{if((state_val_14796 === (2)))
{var state_14795__$1 = state_14795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14795__$1,(4),ch);
} else
{if((state_val_14796 === (11)))
{var inst_14775 = (state_14795[(8)]);var inst_14784 = (state_14795[(2)]);var inst_14772 = inst_14775;var state_14795__$1 = (function (){var statearr_14805 = state_14795;(statearr_14805[(7)] = inst_14772);
(statearr_14805[(10)] = inst_14784);
return statearr_14805;
})();var statearr_14806_14826 = state_14795__$1;(statearr_14806_14826[(2)] = null);
(statearr_14806_14826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (9)))
{var inst_14775 = (state_14795[(8)]);var state_14795__$1 = state_14795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14795__$1,(11),out,inst_14775);
} else
{if((state_val_14796 === (5)))
{var inst_14772 = (state_14795[(7)]);var inst_14775 = (state_14795[(8)]);var inst_14779 = cljs.core._EQ_.call(null,inst_14775,inst_14772);var state_14795__$1 = state_14795;if(inst_14779)
{var statearr_14808_14827 = state_14795__$1;(statearr_14808_14827[(1)] = (8));
} else
{var statearr_14809_14828 = state_14795__$1;(statearr_14809_14828[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (10)))
{var inst_14787 = (state_14795[(2)]);var state_14795__$1 = state_14795;var statearr_14810_14829 = state_14795__$1;(statearr_14810_14829[(2)] = inst_14787);
(statearr_14810_14829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14796 === (8)))
{var inst_14772 = (state_14795[(7)]);var tmp14807 = inst_14772;var inst_14772__$1 = tmp14807;var state_14795__$1 = (function (){var statearr_14811 = state_14795;(statearr_14811[(7)] = inst_14772__$1);
return statearr_14811;
})();var statearr_14812_14830 = state_14795__$1;(statearr_14812_14830[(2)] = null);
(statearr_14812_14830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___14820,out))
;return ((function (switch__6470__auto__,c__6485__auto___14820,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14816 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14816[(0)] = state_machine__6471__auto__);
(statearr_14816[(1)] = (1));
return statearr_14816;
});
var state_machine__6471__auto____1 = (function (state_14795){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14795);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14817){if((e14817 instanceof Object))
{var ex__6474__auto__ = e14817;var statearr_14818_14831 = state_14795;(statearr_14818_14831[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14832 = state_14795;
state_14795 = G__14832;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14795){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14820,out))
})();var state__6487__auto__ = (function (){var statearr_14819 = f__6486__auto__.call(null);(statearr_14819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14820);
return statearr_14819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14820,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___14967 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___14967,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___14967,out){
return (function (state_14937){var state_val_14938 = (state_14937[(1)]);if((state_val_14938 === (7)))
{var inst_14933 = (state_14937[(2)]);var state_14937__$1 = state_14937;var statearr_14939_14968 = state_14937__$1;(statearr_14939_14968[(2)] = inst_14933);
(statearr_14939_14968[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (1)))
{var inst_14900 = (new Array(n));var inst_14901 = inst_14900;var inst_14902 = (0);var state_14937__$1 = (function (){var statearr_14940 = state_14937;(statearr_14940[(7)] = inst_14901);
(statearr_14940[(8)] = inst_14902);
return statearr_14940;
})();var statearr_14941_14969 = state_14937__$1;(statearr_14941_14969[(2)] = null);
(statearr_14941_14969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (4)))
{var inst_14905 = (state_14937[(9)]);var inst_14905__$1 = (state_14937[(2)]);var inst_14906 = (inst_14905__$1 == null);var inst_14907 = cljs.core.not.call(null,inst_14906);var state_14937__$1 = (function (){var statearr_14942 = state_14937;(statearr_14942[(9)] = inst_14905__$1);
return statearr_14942;
})();if(inst_14907)
{var statearr_14943_14970 = state_14937__$1;(statearr_14943_14970[(1)] = (5));
} else
{var statearr_14944_14971 = state_14937__$1;(statearr_14944_14971[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (15)))
{var inst_14927 = (state_14937[(2)]);var state_14937__$1 = state_14937;var statearr_14945_14972 = state_14937__$1;(statearr_14945_14972[(2)] = inst_14927);
(statearr_14945_14972[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (13)))
{var state_14937__$1 = state_14937;var statearr_14946_14973 = state_14937__$1;(statearr_14946_14973[(2)] = null);
(statearr_14946_14973[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (6)))
{var inst_14902 = (state_14937[(8)]);var inst_14923 = (inst_14902 > (0));var state_14937__$1 = state_14937;if(cljs.core.truth_(inst_14923))
{var statearr_14947_14974 = state_14937__$1;(statearr_14947_14974[(1)] = (12));
} else
{var statearr_14948_14975 = state_14937__$1;(statearr_14948_14975[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (3)))
{var inst_14935 = (state_14937[(2)]);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14937__$1,inst_14935);
} else
{if((state_val_14938 === (12)))
{var inst_14901 = (state_14937[(7)]);var inst_14925 = cljs.core.vec.call(null,inst_14901);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14937__$1,(15),out,inst_14925);
} else
{if((state_val_14938 === (2)))
{var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14937__$1,(4),ch);
} else
{if((state_val_14938 === (11)))
{var inst_14917 = (state_14937[(2)]);var inst_14918 = (new Array(n));var inst_14901 = inst_14918;var inst_14902 = (0);var state_14937__$1 = (function (){var statearr_14949 = state_14937;(statearr_14949[(10)] = inst_14917);
(statearr_14949[(7)] = inst_14901);
(statearr_14949[(8)] = inst_14902);
return statearr_14949;
})();var statearr_14950_14976 = state_14937__$1;(statearr_14950_14976[(2)] = null);
(statearr_14950_14976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (9)))
{var inst_14901 = (state_14937[(7)]);var inst_14915 = cljs.core.vec.call(null,inst_14901);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14937__$1,(11),out,inst_14915);
} else
{if((state_val_14938 === (5)))
{var inst_14901 = (state_14937[(7)]);var inst_14905 = (state_14937[(9)]);var inst_14902 = (state_14937[(8)]);var inst_14910 = (state_14937[(11)]);var inst_14909 = (inst_14901[inst_14902] = inst_14905);var inst_14910__$1 = (inst_14902 + (1));var inst_14911 = (inst_14910__$1 < n);var state_14937__$1 = (function (){var statearr_14951 = state_14937;(statearr_14951[(11)] = inst_14910__$1);
(statearr_14951[(12)] = inst_14909);
return statearr_14951;
})();if(cljs.core.truth_(inst_14911))
{var statearr_14952_14977 = state_14937__$1;(statearr_14952_14977[(1)] = (8));
} else
{var statearr_14953_14978 = state_14937__$1;(statearr_14953_14978[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (14)))
{var inst_14930 = (state_14937[(2)]);var inst_14931 = cljs.core.async.close_BANG_.call(null,out);var state_14937__$1 = (function (){var statearr_14955 = state_14937;(statearr_14955[(13)] = inst_14930);
return statearr_14955;
})();var statearr_14956_14979 = state_14937__$1;(statearr_14956_14979[(2)] = inst_14931);
(statearr_14956_14979[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (10)))
{var inst_14921 = (state_14937[(2)]);var state_14937__$1 = state_14937;var statearr_14957_14980 = state_14937__$1;(statearr_14957_14980[(2)] = inst_14921);
(statearr_14957_14980[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14938 === (8)))
{var inst_14901 = (state_14937[(7)]);var inst_14910 = (state_14937[(11)]);var tmp14954 = inst_14901;var inst_14901__$1 = tmp14954;var inst_14902 = inst_14910;var state_14937__$1 = (function (){var statearr_14958 = state_14937;(statearr_14958[(7)] = inst_14901__$1);
(statearr_14958[(8)] = inst_14902);
return statearr_14958;
})();var statearr_14959_14981 = state_14937__$1;(statearr_14959_14981[(2)] = null);
(statearr_14959_14981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___14967,out))
;return ((function (switch__6470__auto__,c__6485__auto___14967,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_14963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14963[(0)] = state_machine__6471__auto__);
(statearr_14963[(1)] = (1));
return statearr_14963;
});
var state_machine__6471__auto____1 = (function (state_14937){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_14937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e14964){if((e14964 instanceof Object))
{var ex__6474__auto__ = e14964;var statearr_14965_14982 = state_14937;(statearr_14965_14982[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14983 = state_14937;
state_14937 = G__14983;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_14937){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_14937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___14967,out))
})();var state__6487__auto__ = (function (){var statearr_14966 = f__6486__auto__.call(null);(statearr_14966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___14967);
return statearr_14966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___14967,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6485__auto___15126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto___15126,out){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto___15126,out){
return (function (state_15096){var state_val_15097 = (state_15096[(1)]);if((state_val_15097 === (7)))
{var inst_15092 = (state_15096[(2)]);var state_15096__$1 = state_15096;var statearr_15098_15127 = state_15096__$1;(statearr_15098_15127[(2)] = inst_15092);
(statearr_15098_15127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (1)))
{var inst_15055 = [];var inst_15056 = inst_15055;var inst_15057 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15096__$1 = (function (){var statearr_15099 = state_15096;(statearr_15099[(7)] = inst_15057);
(statearr_15099[(8)] = inst_15056);
return statearr_15099;
})();var statearr_15100_15128 = state_15096__$1;(statearr_15100_15128[(2)] = null);
(statearr_15100_15128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (4)))
{var inst_15060 = (state_15096[(9)]);var inst_15060__$1 = (state_15096[(2)]);var inst_15061 = (inst_15060__$1 == null);var inst_15062 = cljs.core.not.call(null,inst_15061);var state_15096__$1 = (function (){var statearr_15101 = state_15096;(statearr_15101[(9)] = inst_15060__$1);
return statearr_15101;
})();if(inst_15062)
{var statearr_15102_15129 = state_15096__$1;(statearr_15102_15129[(1)] = (5));
} else
{var statearr_15103_15130 = state_15096__$1;(statearr_15103_15130[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (15)))
{var inst_15086 = (state_15096[(2)]);var state_15096__$1 = state_15096;var statearr_15104_15131 = state_15096__$1;(statearr_15104_15131[(2)] = inst_15086);
(statearr_15104_15131[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (13)))
{var state_15096__$1 = state_15096;var statearr_15105_15132 = state_15096__$1;(statearr_15105_15132[(2)] = null);
(statearr_15105_15132[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (6)))
{var inst_15056 = (state_15096[(8)]);var inst_15081 = inst_15056.length;var inst_15082 = (inst_15081 > (0));var state_15096__$1 = state_15096;if(cljs.core.truth_(inst_15082))
{var statearr_15106_15133 = state_15096__$1;(statearr_15106_15133[(1)] = (12));
} else
{var statearr_15107_15134 = state_15096__$1;(statearr_15107_15134[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (3)))
{var inst_15094 = (state_15096[(2)]);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15096__$1,inst_15094);
} else
{if((state_val_15097 === (12)))
{var inst_15056 = (state_15096[(8)]);var inst_15084 = cljs.core.vec.call(null,inst_15056);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15096__$1,(15),out,inst_15084);
} else
{if((state_val_15097 === (2)))
{var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15096__$1,(4),ch);
} else
{if((state_val_15097 === (11)))
{var inst_15060 = (state_15096[(9)]);var inst_15064 = (state_15096[(10)]);var inst_15074 = (state_15096[(2)]);var inst_15075 = [];var inst_15076 = inst_15075.push(inst_15060);var inst_15056 = inst_15075;var inst_15057 = inst_15064;var state_15096__$1 = (function (){var statearr_15108 = state_15096;(statearr_15108[(7)] = inst_15057);
(statearr_15108[(11)] = inst_15076);
(statearr_15108[(12)] = inst_15074);
(statearr_15108[(8)] = inst_15056);
return statearr_15108;
})();var statearr_15109_15135 = state_15096__$1;(statearr_15109_15135[(2)] = null);
(statearr_15109_15135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (9)))
{var inst_15056 = (state_15096[(8)]);var inst_15072 = cljs.core.vec.call(null,inst_15056);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15096__$1,(11),out,inst_15072);
} else
{if((state_val_15097 === (5)))
{var inst_15060 = (state_15096[(9)]);var inst_15064 = (state_15096[(10)]);var inst_15057 = (state_15096[(7)]);var inst_15064__$1 = f.call(null,inst_15060);var inst_15065 = cljs.core._EQ_.call(null,inst_15064__$1,inst_15057);var inst_15066 = cljs.core.keyword_identical_QMARK_.call(null,inst_15057,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15067 = (inst_15065) || (inst_15066);var state_15096__$1 = (function (){var statearr_15110 = state_15096;(statearr_15110[(10)] = inst_15064__$1);
return statearr_15110;
})();if(cljs.core.truth_(inst_15067))
{var statearr_15111_15136 = state_15096__$1;(statearr_15111_15136[(1)] = (8));
} else
{var statearr_15112_15137 = state_15096__$1;(statearr_15112_15137[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (14)))
{var inst_15089 = (state_15096[(2)]);var inst_15090 = cljs.core.async.close_BANG_.call(null,out);var state_15096__$1 = (function (){var statearr_15114 = state_15096;(statearr_15114[(13)] = inst_15089);
return statearr_15114;
})();var statearr_15115_15138 = state_15096__$1;(statearr_15115_15138[(2)] = inst_15090);
(statearr_15115_15138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (10)))
{var inst_15079 = (state_15096[(2)]);var state_15096__$1 = state_15096;var statearr_15116_15139 = state_15096__$1;(statearr_15116_15139[(2)] = inst_15079);
(statearr_15116_15139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15097 === (8)))
{var inst_15060 = (state_15096[(9)]);var inst_15064 = (state_15096[(10)]);var inst_15056 = (state_15096[(8)]);var inst_15069 = inst_15056.push(inst_15060);var tmp15113 = inst_15056;var inst_15056__$1 = tmp15113;var inst_15057 = inst_15064;var state_15096__$1 = (function (){var statearr_15117 = state_15096;(statearr_15117[(14)] = inst_15069);
(statearr_15117[(7)] = inst_15057);
(statearr_15117[(8)] = inst_15056__$1);
return statearr_15117;
})();var statearr_15118_15140 = state_15096__$1;(statearr_15118_15140[(2)] = null);
(statearr_15118_15140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6485__auto___15126,out))
;return ((function (switch__6470__auto__,c__6485__auto___15126,out){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_15122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15122[(0)] = state_machine__6471__auto__);
(statearr_15122[(1)] = (1));
return statearr_15122;
});
var state_machine__6471__auto____1 = (function (state_15096){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_15096);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e15123){if((e15123 instanceof Object))
{var ex__6474__auto__ = e15123;var statearr_15124_15141 = state_15096;(statearr_15124_15141[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15123;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15142 = state_15096;
state_15096 = G__15142;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_15096){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_15096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto___15126,out))
})();var state__6487__auto__ = (function (){var statearr_15125 = f__6486__auto__.call(null);(statearr_15125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto___15126);
return statearr_15125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto___15126,out))
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

//# sourceMappingURL=async.js.map