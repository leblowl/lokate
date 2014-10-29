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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21060 = (function (f,fn_handler,meta21061){
this.f = f;
this.fn_handler = fn_handler;
this.meta21061 = meta21061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21060.cljs$lang$type = true;
cljs.core.async.t21060.cljs$lang$ctorStr = "cljs.core.async/t21060";
cljs.core.async.t21060.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21060");
});
cljs.core.async.t21060.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21062){var self__ = this;
var _21062__$1 = this;return self__.meta21061;
});
cljs.core.async.t21060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21062,meta21061__$1){var self__ = this;
var _21062__$1 = this;return (new cljs.core.async.t21060(self__.f,self__.fn_handler,meta21061__$1));
});
cljs.core.async.__GT_t21060 = (function __GT_t21060(f__$1,fn_handler__$1,meta21061){return (new cljs.core.async.t21060(f__$1,fn_handler__$1,meta21061));
});
}
return (new cljs.core.async.t21060(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21064 = buff;if(G__21064)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__21064.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21064.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21064);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21064);
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
{var val_21065 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21065);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21065,ret){
return (function (){return fn1.call(null,val_21065);
});})(val_21065,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___21066 = n;var x_21067 = (0);while(true){
if((x_21067 < n__13416__auto___21066))
{(a[x_21067] = (0));
{
var G__21068 = (x_21067 + (1));
x_21067 = G__21068;
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
var G__21069 = (i + (1));
i = G__21069;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21073 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21073 = (function (flag,alt_flag,meta21074){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21074 = meta21074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21073.cljs$lang$type = true;
cljs.core.async.t21073.cljs$lang$ctorStr = "cljs.core.async/t21073";
cljs.core.async.t21073.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21073");
});})(flag))
;
cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21075){var self__ = this;
var _21075__$1 = this;return self__.meta21074;
});})(flag))
;
cljs.core.async.t21073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21075,meta21074__$1){var self__ = this;
var _21075__$1 = this;return (new cljs.core.async.t21073(self__.flag,self__.alt_flag,meta21074__$1));
});})(flag))
;
cljs.core.async.__GT_t21073 = ((function (flag){
return (function __GT_t21073(flag__$1,alt_flag__$1,meta21074){return (new cljs.core.async.t21073(flag__$1,alt_flag__$1,meta21074));
});})(flag))
;
}
return (new cljs.core.async.t21073(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21079 = (function (cb,flag,alt_handler,meta21080){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21080 = meta21080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21079.cljs$lang$type = true;
cljs.core.async.t21079.cljs$lang$ctorStr = "cljs.core.async/t21079";
cljs.core.async.t21079.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21079");
});
cljs.core.async.t21079.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21081){var self__ = this;
var _21081__$1 = this;return self__.meta21080;
});
cljs.core.async.t21079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21081,meta21080__$1){var self__ = this;
var _21081__$1 = this;return (new cljs.core.async.t21079(self__.cb,self__.flag,self__.alt_handler,meta21080__$1));
});
cljs.core.async.__GT_t21079 = (function __GT_t21079(cb__$1,flag__$1,alt_handler__$1,meta21080){return (new cljs.core.async.t21079(cb__$1,flag__$1,alt_handler__$1,meta21080));
});
}
return (new cljs.core.async.t21079(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21082_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21082_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21083_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12546__auto__ = wport;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21084 = (i + (1));
i = G__21084;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12546__auto__ = ret;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__12534__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12534__auto__;
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
var alts_BANG___delegate = function (ports,p__21085){var map__21087 = p__21085;var map__21087__$1 = ((cljs.core.seq_QMARK_.call(null,map__21087))?cljs.core.apply.call(null,cljs.core.hash_map,map__21087):map__21087);var opts = map__21087__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21085 = null;if (arguments.length > 1) {
  p__21085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21085);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21088){
var ports = cljs.core.first(arglist__21088);
var p__21085 = cljs.core.rest(arglist__21088);
return alts_BANG___delegate(ports,p__21085);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15087__auto___21183 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21183){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21183){
return (function (state_21159){var state_val_21160 = (state_21159[(1)]);if((state_val_21160 === (7)))
{var inst_21155 = (state_21159[(2)]);var state_21159__$1 = state_21159;var statearr_21161_21184 = state_21159__$1;(statearr_21161_21184[(2)] = inst_21155);
(statearr_21161_21184[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (1)))
{var state_21159__$1 = state_21159;var statearr_21162_21185 = state_21159__$1;(statearr_21162_21185[(2)] = null);
(statearr_21162_21185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (4)))
{var inst_21138 = (state_21159[(7)]);var inst_21138__$1 = (state_21159[(2)]);var inst_21139 = (inst_21138__$1 == null);var state_21159__$1 = (function (){var statearr_21163 = state_21159;(statearr_21163[(7)] = inst_21138__$1);
return statearr_21163;
})();if(cljs.core.truth_(inst_21139))
{var statearr_21164_21186 = state_21159__$1;(statearr_21164_21186[(1)] = (5));
} else
{var statearr_21165_21187 = state_21159__$1;(statearr_21165_21187[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (13)))
{var state_21159__$1 = state_21159;var statearr_21166_21188 = state_21159__$1;(statearr_21166_21188[(2)] = null);
(statearr_21166_21188[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (6)))
{var inst_21138 = (state_21159[(7)]);var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21159__$1,(11),to,inst_21138);
} else
{if((state_val_21160 === (3)))
{var inst_21157 = (state_21159[(2)]);var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21159__$1,inst_21157);
} else
{if((state_val_21160 === (12)))
{var state_21159__$1 = state_21159;var statearr_21167_21189 = state_21159__$1;(statearr_21167_21189[(2)] = null);
(statearr_21167_21189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (2)))
{var state_21159__$1 = state_21159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21159__$1,(4),from);
} else
{if((state_val_21160 === (11)))
{var inst_21148 = (state_21159[(2)]);var state_21159__$1 = state_21159;if(cljs.core.truth_(inst_21148))
{var statearr_21168_21190 = state_21159__$1;(statearr_21168_21190[(1)] = (12));
} else
{var statearr_21169_21191 = state_21159__$1;(statearr_21169_21191[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (9)))
{var state_21159__$1 = state_21159;var statearr_21170_21192 = state_21159__$1;(statearr_21170_21192[(2)] = null);
(statearr_21170_21192[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (5)))
{var state_21159__$1 = state_21159;if(cljs.core.truth_(close_QMARK_))
{var statearr_21171_21193 = state_21159__$1;(statearr_21171_21193[(1)] = (8));
} else
{var statearr_21172_21194 = state_21159__$1;(statearr_21172_21194[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (14)))
{var inst_21153 = (state_21159[(2)]);var state_21159__$1 = state_21159;var statearr_21173_21195 = state_21159__$1;(statearr_21173_21195[(2)] = inst_21153);
(statearr_21173_21195[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (10)))
{var inst_21145 = (state_21159[(2)]);var state_21159__$1 = state_21159;var statearr_21174_21196 = state_21159__$1;(statearr_21174_21196[(2)] = inst_21145);
(statearr_21174_21196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21160 === (8)))
{var inst_21142 = cljs.core.async.close_BANG_.call(null,to);var state_21159__$1 = state_21159;var statearr_21175_21197 = state_21159__$1;(statearr_21175_21197[(2)] = inst_21142);
(statearr_21175_21197[(1)] = (10));
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
});})(c__15087__auto___21183))
;return ((function (switch__15072__auto__,c__15087__auto___21183){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21179 = [null,null,null,null,null,null,null,null];(statearr_21179[(0)] = state_machine__15073__auto__);
(statearr_21179[(1)] = (1));
return statearr_21179;
});
var state_machine__15073__auto____1 = (function (state_21159){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21159);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21180){if((e21180 instanceof Object))
{var ex__15076__auto__ = e21180;var statearr_21181_21198 = state_21159;(statearr_21181_21198[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21180;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21199 = state_21159;
state_21159 = G__21199;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21159){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21183))
})();var state__15089__auto__ = (function (){var statearr_21182 = f__15088__auto__.call(null);(statearr_21182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21183);
return statearr_21182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21183))
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
return (function (p__21383){var vec__21384 = p__21383;var v = cljs.core.nth.call(null,vec__21384,(0),null);var p = cljs.core.nth.call(null,vec__21384,(1),null);var job = vec__21384;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15087__auto___21566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results){
return (function (state_21389){var state_val_21390 = (state_21389[(1)]);if((state_val_21390 === (2)))
{var inst_21386 = (state_21389[(2)]);var inst_21387 = cljs.core.async.close_BANG_.call(null,res);var state_21389__$1 = (function (){var statearr_21391 = state_21389;(statearr_21391[(7)] = inst_21386);
return statearr_21391;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21389__$1,inst_21387);
} else
{if((state_val_21390 === (1)))
{var state_21389__$1 = state_21389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21389__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results))
;return ((function (switch__15072__auto__,c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21395 = [null,null,null,null,null,null,null,null];(statearr_21395[(0)] = state_machine__15073__auto__);
(statearr_21395[(1)] = (1));
return statearr_21395;
});
var state_machine__15073__auto____1 = (function (state_21389){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21389);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21396){if((e21396 instanceof Object))
{var ex__15076__auto__ = e21396;var statearr_21397_21567 = state_21389;(statearr_21397_21567[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21568 = state_21389;
state_21389 = G__21568;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21389){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results))
})();var state__15089__auto__ = (function (){var statearr_21398 = f__15088__auto__.call(null);(statearr_21398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21566);
return statearr_21398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21566,res,vec__21384,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21399){var vec__21400 = p__21399;var v = cljs.core.nth.call(null,vec__21400,(0),null);var p = cljs.core.nth.call(null,vec__21400,(1),null);var job = vec__21400;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___21569 = n;var __21570 = (0);while(true){
if((__21570 < n__13416__auto___21569))
{var G__21401_21571 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21401_21571) {
case "async":
var c__15087__auto___21573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21570,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (__21570,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function (state_21414){var state_val_21415 = (state_21414[(1)]);if((state_val_21415 === (7)))
{var inst_21410 = (state_21414[(2)]);var state_21414__$1 = state_21414;var statearr_21416_21574 = state_21414__$1;(statearr_21416_21574[(2)] = inst_21410);
(statearr_21416_21574[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21415 === (6)))
{var state_21414__$1 = state_21414;var statearr_21417_21575 = state_21414__$1;(statearr_21417_21575[(2)] = null);
(statearr_21417_21575[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21415 === (5)))
{var state_21414__$1 = state_21414;var statearr_21418_21576 = state_21414__$1;(statearr_21418_21576[(2)] = null);
(statearr_21418_21576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21415 === (4)))
{var inst_21404 = (state_21414[(2)]);var inst_21405 = async.call(null,inst_21404);var state_21414__$1 = state_21414;if(cljs.core.truth_(inst_21405))
{var statearr_21419_21577 = state_21414__$1;(statearr_21419_21577[(1)] = (5));
} else
{var statearr_21420_21578 = state_21414__$1;(statearr_21420_21578[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21415 === (3)))
{var inst_21412 = (state_21414[(2)]);var state_21414__$1 = state_21414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21414__$1,inst_21412);
} else
{if((state_val_21415 === (2)))
{var state_21414__$1 = state_21414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21414__$1,(4),jobs);
} else
{if((state_val_21415 === (1)))
{var state_21414__$1 = state_21414;var statearr_21421_21579 = state_21414__$1;(statearr_21421_21579[(2)] = null);
(statearr_21421_21579[(1)] = (2));
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
});})(__21570,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
;return ((function (__21570,switch__15072__auto__,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21425 = [null,null,null,null,null,null,null];(statearr_21425[(0)] = state_machine__15073__auto__);
(statearr_21425[(1)] = (1));
return statearr_21425;
});
var state_machine__15073__auto____1 = (function (state_21414){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21414);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21426){if((e21426 instanceof Object))
{var ex__15076__auto__ = e21426;var statearr_21427_21580 = state_21414;(statearr_21427_21580[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21581 = state_21414;
state_21414 = G__21581;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21414){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(__21570,switch__15072__auto__,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21428 = f__15088__auto__.call(null);(statearr_21428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21573);
return statearr_21428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(__21570,c__15087__auto___21573,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
);

break;
case "compute":
var c__15087__auto___21582 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21570,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (__21570,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function (state_21441){var state_val_21442 = (state_21441[(1)]);if((state_val_21442 === (7)))
{var inst_21437 = (state_21441[(2)]);var state_21441__$1 = state_21441;var statearr_21443_21583 = state_21441__$1;(statearr_21443_21583[(2)] = inst_21437);
(statearr_21443_21583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (6)))
{var state_21441__$1 = state_21441;var statearr_21444_21584 = state_21441__$1;(statearr_21444_21584[(2)] = null);
(statearr_21444_21584[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (5)))
{var state_21441__$1 = state_21441;var statearr_21445_21585 = state_21441__$1;(statearr_21445_21585[(2)] = null);
(statearr_21445_21585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (4)))
{var inst_21431 = (state_21441[(2)]);var inst_21432 = process.call(null,inst_21431);var state_21441__$1 = state_21441;if(cljs.core.truth_(inst_21432))
{var statearr_21446_21586 = state_21441__$1;(statearr_21446_21586[(1)] = (5));
} else
{var statearr_21447_21587 = state_21441__$1;(statearr_21447_21587[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (3)))
{var inst_21439 = (state_21441[(2)]);var state_21441__$1 = state_21441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21441__$1,inst_21439);
} else
{if((state_val_21442 === (2)))
{var state_21441__$1 = state_21441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21441__$1,(4),jobs);
} else
{if((state_val_21442 === (1)))
{var state_21441__$1 = state_21441;var statearr_21448_21588 = state_21441__$1;(statearr_21448_21588[(2)] = null);
(statearr_21448_21588[(1)] = (2));
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
});})(__21570,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
;return ((function (__21570,switch__15072__auto__,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21452 = [null,null,null,null,null,null,null];(statearr_21452[(0)] = state_machine__15073__auto__);
(statearr_21452[(1)] = (1));
return statearr_21452;
});
var state_machine__15073__auto____1 = (function (state_21441){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21441);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21453){if((e21453 instanceof Object))
{var ex__15076__auto__ = e21453;var statearr_21454_21589 = state_21441;(statearr_21454_21589[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21453;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21590 = state_21441;
state_21441 = G__21590;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21441){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(__21570,switch__15072__auto__,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21455 = f__15088__auto__.call(null);(statearr_21455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21582);
return statearr_21455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(__21570,c__15087__auto___21582,G__21401_21571,n__13416__auto___21569,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21591 = (__21570 + (1));
__21570 = G__21591;
continue;
}
} else
{}
break;
}
var c__15087__auto___21592 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21592,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21592,jobs,results,process,async){
return (function (state_21477){var state_val_21478 = (state_21477[(1)]);if((state_val_21478 === (9)))
{var inst_21470 = (state_21477[(2)]);var state_21477__$1 = (function (){var statearr_21479 = state_21477;(statearr_21479[(7)] = inst_21470);
return statearr_21479;
})();var statearr_21480_21593 = state_21477__$1;(statearr_21480_21593[(2)] = null);
(statearr_21480_21593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21478 === (8)))
{var inst_21463 = (state_21477[(8)]);var inst_21468 = (state_21477[(2)]);var state_21477__$1 = (function (){var statearr_21481 = state_21477;(statearr_21481[(9)] = inst_21468);
return statearr_21481;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21477__$1,(9),results,inst_21463);
} else
{if((state_val_21478 === (7)))
{var inst_21473 = (state_21477[(2)]);var state_21477__$1 = state_21477;var statearr_21482_21594 = state_21477__$1;(statearr_21482_21594[(2)] = inst_21473);
(statearr_21482_21594[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21478 === (6)))
{var inst_21458 = (state_21477[(10)]);var inst_21463 = (state_21477[(8)]);var inst_21463__$1 = cljs.core.async.chan.call(null,(1));var inst_21464 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21465 = [inst_21458,inst_21463__$1];var inst_21466 = (new cljs.core.PersistentVector(null,2,(5),inst_21464,inst_21465,null));var state_21477__$1 = (function (){var statearr_21483 = state_21477;(statearr_21483[(8)] = inst_21463__$1);
return statearr_21483;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21477__$1,(8),jobs,inst_21466);
} else
{if((state_val_21478 === (5)))
{var inst_21461 = cljs.core.async.close_BANG_.call(null,jobs);var state_21477__$1 = state_21477;var statearr_21484_21595 = state_21477__$1;(statearr_21484_21595[(2)] = inst_21461);
(statearr_21484_21595[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21478 === (4)))
{var inst_21458 = (state_21477[(10)]);var inst_21458__$1 = (state_21477[(2)]);var inst_21459 = (inst_21458__$1 == null);var state_21477__$1 = (function (){var statearr_21485 = state_21477;(statearr_21485[(10)] = inst_21458__$1);
return statearr_21485;
})();if(cljs.core.truth_(inst_21459))
{var statearr_21486_21596 = state_21477__$1;(statearr_21486_21596[(1)] = (5));
} else
{var statearr_21487_21597 = state_21477__$1;(statearr_21487_21597[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21478 === (3)))
{var inst_21475 = (state_21477[(2)]);var state_21477__$1 = state_21477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21477__$1,inst_21475);
} else
{if((state_val_21478 === (2)))
{var state_21477__$1 = state_21477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21477__$1,(4),from);
} else
{if((state_val_21478 === (1)))
{var state_21477__$1 = state_21477;var statearr_21488_21598 = state_21477__$1;(statearr_21488_21598[(2)] = null);
(statearr_21488_21598[(1)] = (2));
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
});})(c__15087__auto___21592,jobs,results,process,async))
;return ((function (switch__15072__auto__,c__15087__auto___21592,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21492 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21492[(0)] = state_machine__15073__auto__);
(statearr_21492[(1)] = (1));
return statearr_21492;
});
var state_machine__15073__auto____1 = (function (state_21477){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21477);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21493){if((e21493 instanceof Object))
{var ex__15076__auto__ = e21493;var statearr_21494_21599 = state_21477;(statearr_21494_21599[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21600 = state_21477;
state_21477 = G__21600;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21477){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21592,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21495 = f__15088__auto__.call(null);(statearr_21495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21592);
return statearr_21495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21592,jobs,results,process,async))
);
var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,jobs,results,process,async){
return (function (state_21533){var state_val_21534 = (state_21533[(1)]);if((state_val_21534 === (7)))
{var inst_21529 = (state_21533[(2)]);var state_21533__$1 = state_21533;var statearr_21535_21601 = state_21533__$1;(statearr_21535_21601[(2)] = inst_21529);
(statearr_21535_21601[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (20)))
{var state_21533__$1 = state_21533;var statearr_21536_21602 = state_21533__$1;(statearr_21536_21602[(2)] = null);
(statearr_21536_21602[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (1)))
{var state_21533__$1 = state_21533;var statearr_21537_21603 = state_21533__$1;(statearr_21537_21603[(2)] = null);
(statearr_21537_21603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (4)))
{var inst_21498 = (state_21533[(7)]);var inst_21498__$1 = (state_21533[(2)]);var inst_21499 = (inst_21498__$1 == null);var state_21533__$1 = (function (){var statearr_21538 = state_21533;(statearr_21538[(7)] = inst_21498__$1);
return statearr_21538;
})();if(cljs.core.truth_(inst_21499))
{var statearr_21539_21604 = state_21533__$1;(statearr_21539_21604[(1)] = (5));
} else
{var statearr_21540_21605 = state_21533__$1;(statearr_21540_21605[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (15)))
{var inst_21511 = (state_21533[(8)]);var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21533__$1,(18),to,inst_21511);
} else
{if((state_val_21534 === (21)))
{var inst_21524 = (state_21533[(2)]);var state_21533__$1 = state_21533;var statearr_21541_21606 = state_21533__$1;(statearr_21541_21606[(2)] = inst_21524);
(statearr_21541_21606[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (13)))
{var inst_21526 = (state_21533[(2)]);var state_21533__$1 = (function (){var statearr_21542 = state_21533;(statearr_21542[(9)] = inst_21526);
return statearr_21542;
})();var statearr_21543_21607 = state_21533__$1;(statearr_21543_21607[(2)] = null);
(statearr_21543_21607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (6)))
{var inst_21498 = (state_21533[(7)]);var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21533__$1,(11),inst_21498);
} else
{if((state_val_21534 === (17)))
{var inst_21519 = (state_21533[(2)]);var state_21533__$1 = state_21533;if(cljs.core.truth_(inst_21519))
{var statearr_21544_21608 = state_21533__$1;(statearr_21544_21608[(1)] = (19));
} else
{var statearr_21545_21609 = state_21533__$1;(statearr_21545_21609[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (3)))
{var inst_21531 = (state_21533[(2)]);var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21533__$1,inst_21531);
} else
{if((state_val_21534 === (12)))
{var inst_21508 = (state_21533[(10)]);var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21533__$1,(14),inst_21508);
} else
{if((state_val_21534 === (2)))
{var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21533__$1,(4),results);
} else
{if((state_val_21534 === (19)))
{var state_21533__$1 = state_21533;var statearr_21546_21610 = state_21533__$1;(statearr_21546_21610[(2)] = null);
(statearr_21546_21610[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (11)))
{var inst_21508 = (state_21533[(2)]);var state_21533__$1 = (function (){var statearr_21547 = state_21533;(statearr_21547[(10)] = inst_21508);
return statearr_21547;
})();var statearr_21548_21611 = state_21533__$1;(statearr_21548_21611[(2)] = null);
(statearr_21548_21611[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (9)))
{var state_21533__$1 = state_21533;var statearr_21549_21612 = state_21533__$1;(statearr_21549_21612[(2)] = null);
(statearr_21549_21612[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (5)))
{var state_21533__$1 = state_21533;if(cljs.core.truth_(close_QMARK_))
{var statearr_21550_21613 = state_21533__$1;(statearr_21550_21613[(1)] = (8));
} else
{var statearr_21551_21614 = state_21533__$1;(statearr_21551_21614[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (14)))
{var inst_21513 = (state_21533[(11)]);var inst_21511 = (state_21533[(8)]);var inst_21511__$1 = (state_21533[(2)]);var inst_21512 = (inst_21511__$1 == null);var inst_21513__$1 = cljs.core.not.call(null,inst_21512);var state_21533__$1 = (function (){var statearr_21552 = state_21533;(statearr_21552[(11)] = inst_21513__$1);
(statearr_21552[(8)] = inst_21511__$1);
return statearr_21552;
})();if(inst_21513__$1)
{var statearr_21553_21615 = state_21533__$1;(statearr_21553_21615[(1)] = (15));
} else
{var statearr_21554_21616 = state_21533__$1;(statearr_21554_21616[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (16)))
{var inst_21513 = (state_21533[(11)]);var state_21533__$1 = state_21533;var statearr_21555_21617 = state_21533__$1;(statearr_21555_21617[(2)] = inst_21513);
(statearr_21555_21617[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (10)))
{var inst_21505 = (state_21533[(2)]);var state_21533__$1 = state_21533;var statearr_21556_21618 = state_21533__$1;(statearr_21556_21618[(2)] = inst_21505);
(statearr_21556_21618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (18)))
{var inst_21516 = (state_21533[(2)]);var state_21533__$1 = state_21533;var statearr_21557_21619 = state_21533__$1;(statearr_21557_21619[(2)] = inst_21516);
(statearr_21557_21619[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21534 === (8)))
{var inst_21502 = cljs.core.async.close_BANG_.call(null,to);var state_21533__$1 = state_21533;var statearr_21558_21620 = state_21533__$1;(statearr_21558_21620[(2)] = inst_21502);
(statearr_21558_21620[(1)] = (10));
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
});})(c__15087__auto__,jobs,results,process,async))
;return ((function (switch__15072__auto__,c__15087__auto__,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21562 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21562[(0)] = state_machine__15073__auto__);
(statearr_21562[(1)] = (1));
return statearr_21562;
});
var state_machine__15073__auto____1 = (function (state_21533){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21533);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21563){if((e21563 instanceof Object))
{var ex__15076__auto__ = e21563;var statearr_21564_21621 = state_21533;(statearr_21564_21621[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21533);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21622 = state_21533;
state_21533 = G__21622;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21533){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21565 = f__15088__auto__.call(null);(statearr_21565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__,jobs,results,process,async))
);
return c__15087__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15087__auto___21723 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21723,tc,fc){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21723,tc,fc){
return (function (state_21698){var state_val_21699 = (state_21698[(1)]);if((state_val_21699 === (7)))
{var inst_21694 = (state_21698[(2)]);var state_21698__$1 = state_21698;var statearr_21700_21724 = state_21698__$1;(statearr_21700_21724[(2)] = inst_21694);
(statearr_21700_21724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (1)))
{var state_21698__$1 = state_21698;var statearr_21701_21725 = state_21698__$1;(statearr_21701_21725[(2)] = null);
(statearr_21701_21725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (4)))
{var inst_21675 = (state_21698[(7)]);var inst_21675__$1 = (state_21698[(2)]);var inst_21676 = (inst_21675__$1 == null);var state_21698__$1 = (function (){var statearr_21702 = state_21698;(statearr_21702[(7)] = inst_21675__$1);
return statearr_21702;
})();if(cljs.core.truth_(inst_21676))
{var statearr_21703_21726 = state_21698__$1;(statearr_21703_21726[(1)] = (5));
} else
{var statearr_21704_21727 = state_21698__$1;(statearr_21704_21727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (13)))
{var state_21698__$1 = state_21698;var statearr_21705_21728 = state_21698__$1;(statearr_21705_21728[(2)] = null);
(statearr_21705_21728[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (6)))
{var inst_21675 = (state_21698[(7)]);var inst_21681 = p.call(null,inst_21675);var state_21698__$1 = state_21698;if(cljs.core.truth_(inst_21681))
{var statearr_21706_21729 = state_21698__$1;(statearr_21706_21729[(1)] = (9));
} else
{var statearr_21707_21730 = state_21698__$1;(statearr_21707_21730[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (3)))
{var inst_21696 = (state_21698[(2)]);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21698__$1,inst_21696);
} else
{if((state_val_21699 === (12)))
{var state_21698__$1 = state_21698;var statearr_21708_21731 = state_21698__$1;(statearr_21708_21731[(2)] = null);
(statearr_21708_21731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (2)))
{var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21698__$1,(4),ch);
} else
{if((state_val_21699 === (11)))
{var inst_21675 = (state_21698[(7)]);var inst_21685 = (state_21698[(2)]);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21698__$1,(8),inst_21685,inst_21675);
} else
{if((state_val_21699 === (9)))
{var state_21698__$1 = state_21698;var statearr_21709_21732 = state_21698__$1;(statearr_21709_21732[(2)] = tc);
(statearr_21709_21732[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (5)))
{var inst_21678 = cljs.core.async.close_BANG_.call(null,tc);var inst_21679 = cljs.core.async.close_BANG_.call(null,fc);var state_21698__$1 = (function (){var statearr_21710 = state_21698;(statearr_21710[(8)] = inst_21678);
return statearr_21710;
})();var statearr_21711_21733 = state_21698__$1;(statearr_21711_21733[(2)] = inst_21679);
(statearr_21711_21733[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (14)))
{var inst_21692 = (state_21698[(2)]);var state_21698__$1 = state_21698;var statearr_21712_21734 = state_21698__$1;(statearr_21712_21734[(2)] = inst_21692);
(statearr_21712_21734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (10)))
{var state_21698__$1 = state_21698;var statearr_21713_21735 = state_21698__$1;(statearr_21713_21735[(2)] = fc);
(statearr_21713_21735[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (8)))
{var inst_21687 = (state_21698[(2)]);var state_21698__$1 = state_21698;if(cljs.core.truth_(inst_21687))
{var statearr_21714_21736 = state_21698__$1;(statearr_21714_21736[(1)] = (12));
} else
{var statearr_21715_21737 = state_21698__$1;(statearr_21715_21737[(1)] = (13));
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
});})(c__15087__auto___21723,tc,fc))
;return ((function (switch__15072__auto__,c__15087__auto___21723,tc,fc){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21719 = [null,null,null,null,null,null,null,null,null];(statearr_21719[(0)] = state_machine__15073__auto__);
(statearr_21719[(1)] = (1));
return statearr_21719;
});
var state_machine__15073__auto____1 = (function (state_21698){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21698);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21720){if((e21720 instanceof Object))
{var ex__15076__auto__ = e21720;var statearr_21721_21738 = state_21698;(statearr_21721_21738[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21739 = state_21698;
state_21698 = G__21739;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21698){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21723,tc,fc))
})();var state__15089__auto__ = (function (){var statearr_21722 = f__15088__auto__.call(null);(statearr_21722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21723);
return statearr_21722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21723,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__){
return (function (state_21786){var state_val_21787 = (state_21786[(1)]);if((state_val_21787 === (7)))
{var inst_21782 = (state_21786[(2)]);var state_21786__$1 = state_21786;var statearr_21788_21804 = state_21786__$1;(statearr_21788_21804[(2)] = inst_21782);
(statearr_21788_21804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21787 === (6)))
{var inst_21775 = (state_21786[(7)]);var inst_21772 = (state_21786[(8)]);var inst_21779 = f.call(null,inst_21772,inst_21775);var inst_21772__$1 = inst_21779;var state_21786__$1 = (function (){var statearr_21789 = state_21786;(statearr_21789[(8)] = inst_21772__$1);
return statearr_21789;
})();var statearr_21790_21805 = state_21786__$1;(statearr_21790_21805[(2)] = null);
(statearr_21790_21805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21787 === (5)))
{var inst_21772 = (state_21786[(8)]);var state_21786__$1 = state_21786;var statearr_21791_21806 = state_21786__$1;(statearr_21791_21806[(2)] = inst_21772);
(statearr_21791_21806[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21787 === (4)))
{var inst_21775 = (state_21786[(7)]);var inst_21775__$1 = (state_21786[(2)]);var inst_21776 = (inst_21775__$1 == null);var state_21786__$1 = (function (){var statearr_21792 = state_21786;(statearr_21792[(7)] = inst_21775__$1);
return statearr_21792;
})();if(cljs.core.truth_(inst_21776))
{var statearr_21793_21807 = state_21786__$1;(statearr_21793_21807[(1)] = (5));
} else
{var statearr_21794_21808 = state_21786__$1;(statearr_21794_21808[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21787 === (3)))
{var inst_21784 = (state_21786[(2)]);var state_21786__$1 = state_21786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21786__$1,inst_21784);
} else
{if((state_val_21787 === (2)))
{var state_21786__$1 = state_21786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21786__$1,(4),ch);
} else
{if((state_val_21787 === (1)))
{var inst_21772 = init;var state_21786__$1 = (function (){var statearr_21795 = state_21786;(statearr_21795[(8)] = inst_21772);
return statearr_21795;
})();var statearr_21796_21809 = state_21786__$1;(statearr_21796_21809[(2)] = null);
(statearr_21796_21809[(1)] = (2));
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
});})(c__15087__auto__))
;return ((function (switch__15072__auto__,c__15087__auto__){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21800 = [null,null,null,null,null,null,null,null,null];(statearr_21800[(0)] = state_machine__15073__auto__);
(statearr_21800[(1)] = (1));
return statearr_21800;
});
var state_machine__15073__auto____1 = (function (state_21786){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21786);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21801){if((e21801 instanceof Object))
{var ex__15076__auto__ = e21801;var statearr_21802_21810 = state_21786;(statearr_21802_21810[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21801;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21811 = state_21786;
state_21786 = G__21811;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21786){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_21803 = f__15088__auto__.call(null);(statearr_21803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__))
);
return c__15087__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__){
return (function (state_21885){var state_val_21886 = (state_21885[(1)]);if((state_val_21886 === (7)))
{var inst_21867 = (state_21885[(2)]);var state_21885__$1 = state_21885;var statearr_21887_21910 = state_21885__$1;(statearr_21887_21910[(2)] = inst_21867);
(statearr_21887_21910[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (1)))
{var inst_21861 = cljs.core.seq.call(null,coll);var inst_21862 = inst_21861;var state_21885__$1 = (function (){var statearr_21888 = state_21885;(statearr_21888[(7)] = inst_21862);
return statearr_21888;
})();var statearr_21889_21911 = state_21885__$1;(statearr_21889_21911[(2)] = null);
(statearr_21889_21911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (4)))
{var inst_21862 = (state_21885[(7)]);var inst_21865 = cljs.core.first.call(null,inst_21862);var state_21885__$1 = state_21885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21885__$1,(7),ch,inst_21865);
} else
{if((state_val_21886 === (13)))
{var inst_21879 = (state_21885[(2)]);var state_21885__$1 = state_21885;var statearr_21890_21912 = state_21885__$1;(statearr_21890_21912[(2)] = inst_21879);
(statearr_21890_21912[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (6)))
{var inst_21870 = (state_21885[(2)]);var state_21885__$1 = state_21885;if(cljs.core.truth_(inst_21870))
{var statearr_21891_21913 = state_21885__$1;(statearr_21891_21913[(1)] = (8));
} else
{var statearr_21892_21914 = state_21885__$1;(statearr_21892_21914[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (3)))
{var inst_21883 = (state_21885[(2)]);var state_21885__$1 = state_21885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21885__$1,inst_21883);
} else
{if((state_val_21886 === (12)))
{var state_21885__$1 = state_21885;var statearr_21893_21915 = state_21885__$1;(statearr_21893_21915[(2)] = null);
(statearr_21893_21915[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (2)))
{var inst_21862 = (state_21885[(7)]);var state_21885__$1 = state_21885;if(cljs.core.truth_(inst_21862))
{var statearr_21894_21916 = state_21885__$1;(statearr_21894_21916[(1)] = (4));
} else
{var statearr_21895_21917 = state_21885__$1;(statearr_21895_21917[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (11)))
{var inst_21876 = cljs.core.async.close_BANG_.call(null,ch);var state_21885__$1 = state_21885;var statearr_21896_21918 = state_21885__$1;(statearr_21896_21918[(2)] = inst_21876);
(statearr_21896_21918[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (9)))
{var state_21885__$1 = state_21885;if(cljs.core.truth_(close_QMARK_))
{var statearr_21897_21919 = state_21885__$1;(statearr_21897_21919[(1)] = (11));
} else
{var statearr_21898_21920 = state_21885__$1;(statearr_21898_21920[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (5)))
{var inst_21862 = (state_21885[(7)]);var state_21885__$1 = state_21885;var statearr_21899_21921 = state_21885__$1;(statearr_21899_21921[(2)] = inst_21862);
(statearr_21899_21921[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (10)))
{var inst_21881 = (state_21885[(2)]);var state_21885__$1 = state_21885;var statearr_21900_21922 = state_21885__$1;(statearr_21900_21922[(2)] = inst_21881);
(statearr_21900_21922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21886 === (8)))
{var inst_21862 = (state_21885[(7)]);var inst_21872 = cljs.core.next.call(null,inst_21862);var inst_21862__$1 = inst_21872;var state_21885__$1 = (function (){var statearr_21901 = state_21885;(statearr_21901[(7)] = inst_21862__$1);
return statearr_21901;
})();var statearr_21902_21923 = state_21885__$1;(statearr_21902_21923[(2)] = null);
(statearr_21902_21923[(1)] = (2));
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
});})(c__15087__auto__))
;return ((function (switch__15072__auto__,c__15087__auto__){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21906 = [null,null,null,null,null,null,null,null];(statearr_21906[(0)] = state_machine__15073__auto__);
(statearr_21906[(1)] = (1));
return statearr_21906;
});
var state_machine__15073__auto____1 = (function (state_21885){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21885);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21907){if((e21907 instanceof Object))
{var ex__15076__auto__ = e21907;var statearr_21908_21924 = state_21885;(statearr_21908_21924[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21925 = state_21885;
state_21885 = G__21925;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21885){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_21909 = f__15088__auto__.call(null);(statearr_21909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__))
);
return c__15087__auto__;
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
cljs.core.async.Mux = (function (){var obj21927 = {};return obj21927;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12534__auto__ = _;if(and__12534__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13183__auto__ = (((_ == null))?null:_);return (function (){var or__12546__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21929 = {};return obj21929;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22151 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22151 = (function (cs,ch,mult,meta22152){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22152 = meta22152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22151.cljs$lang$type = true;
cljs.core.async.t22151.cljs$lang$ctorStr = "cljs.core.async/t22151";
cljs.core.async.t22151.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22151");
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22151.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22153){var self__ = this;
var _22153__$1 = this;return self__.meta22152;
});})(cs))
;
cljs.core.async.t22151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22153,meta22152__$1){var self__ = this;
var _22153__$1 = this;return (new cljs.core.async.t22151(self__.cs,self__.ch,self__.mult,meta22152__$1));
});})(cs))
;
cljs.core.async.__GT_t22151 = ((function (cs){
return (function __GT_t22151(cs__$1,ch__$1,mult__$1,meta22152){return (new cljs.core.async.t22151(cs__$1,ch__$1,mult__$1,meta22152));
});})(cs))
;
}
return (new cljs.core.async.t22151(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15087__auto___22372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22372,cs,m,dchan,dctr,done){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22372,cs,m,dchan,dctr,done){
return (function (state_22284){var state_val_22285 = (state_22284[(1)]);if((state_val_22285 === (7)))
{var inst_22280 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22286_22373 = state_22284__$1;(statearr_22286_22373[(2)] = inst_22280);
(statearr_22286_22373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (20)))
{var inst_22185 = (state_22284[(7)]);var inst_22195 = cljs.core.first.call(null,inst_22185);var inst_22196 = cljs.core.nth.call(null,inst_22195,(0),null);var inst_22197 = cljs.core.nth.call(null,inst_22195,(1),null);var state_22284__$1 = (function (){var statearr_22287 = state_22284;(statearr_22287[(8)] = inst_22196);
return statearr_22287;
})();if(cljs.core.truth_(inst_22197))
{var statearr_22288_22374 = state_22284__$1;(statearr_22288_22374[(1)] = (22));
} else
{var statearr_22289_22375 = state_22284__$1;(statearr_22289_22375[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (27)))
{var inst_22156 = (state_22284[(9)]);var inst_22227 = (state_22284[(10)]);var inst_22232 = (state_22284[(11)]);var inst_22225 = (state_22284[(12)]);var inst_22232__$1 = cljs.core._nth.call(null,inst_22225,inst_22227);var inst_22233 = cljs.core.async.put_BANG_.call(null,inst_22232__$1,inst_22156,done);var state_22284__$1 = (function (){var statearr_22290 = state_22284;(statearr_22290[(11)] = inst_22232__$1);
return statearr_22290;
})();if(cljs.core.truth_(inst_22233))
{var statearr_22291_22376 = state_22284__$1;(statearr_22291_22376[(1)] = (30));
} else
{var statearr_22292_22377 = state_22284__$1;(statearr_22292_22377[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (1)))
{var state_22284__$1 = state_22284;var statearr_22293_22378 = state_22284__$1;(statearr_22293_22378[(2)] = null);
(statearr_22293_22378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (24)))
{var inst_22185 = (state_22284[(7)]);var inst_22202 = (state_22284[(2)]);var inst_22203 = cljs.core.next.call(null,inst_22185);var inst_22165 = inst_22203;var inst_22166 = null;var inst_22167 = (0);var inst_22168 = (0);var state_22284__$1 = (function (){var statearr_22294 = state_22284;(statearr_22294[(13)] = inst_22167);
(statearr_22294[(14)] = inst_22202);
(statearr_22294[(15)] = inst_22168);
(statearr_22294[(16)] = inst_22166);
(statearr_22294[(17)] = inst_22165);
return statearr_22294;
})();var statearr_22295_22379 = state_22284__$1;(statearr_22295_22379[(2)] = null);
(statearr_22295_22379[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (39)))
{var state_22284__$1 = state_22284;var statearr_22299_22380 = state_22284__$1;(statearr_22299_22380[(2)] = null);
(statearr_22299_22380[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (4)))
{var inst_22156 = (state_22284[(9)]);var inst_22156__$1 = (state_22284[(2)]);var inst_22157 = (inst_22156__$1 == null);var state_22284__$1 = (function (){var statearr_22300 = state_22284;(statearr_22300[(9)] = inst_22156__$1);
return statearr_22300;
})();if(cljs.core.truth_(inst_22157))
{var statearr_22301_22381 = state_22284__$1;(statearr_22301_22381[(1)] = (5));
} else
{var statearr_22302_22382 = state_22284__$1;(statearr_22302_22382[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (15)))
{var inst_22167 = (state_22284[(13)]);var inst_22168 = (state_22284[(15)]);var inst_22166 = (state_22284[(16)]);var inst_22165 = (state_22284[(17)]);var inst_22181 = (state_22284[(2)]);var inst_22182 = (inst_22168 + (1));var tmp22296 = inst_22167;var tmp22297 = inst_22166;var tmp22298 = inst_22165;var inst_22165__$1 = tmp22298;var inst_22166__$1 = tmp22297;var inst_22167__$1 = tmp22296;var inst_22168__$1 = inst_22182;var state_22284__$1 = (function (){var statearr_22303 = state_22284;(statearr_22303[(13)] = inst_22167__$1);
(statearr_22303[(18)] = inst_22181);
(statearr_22303[(15)] = inst_22168__$1);
(statearr_22303[(16)] = inst_22166__$1);
(statearr_22303[(17)] = inst_22165__$1);
return statearr_22303;
})();var statearr_22304_22383 = state_22284__$1;(statearr_22304_22383[(2)] = null);
(statearr_22304_22383[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (21)))
{var inst_22206 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22308_22384 = state_22284__$1;(statearr_22308_22384[(2)] = inst_22206);
(statearr_22308_22384[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (31)))
{var inst_22232 = (state_22284[(11)]);var inst_22236 = done.call(null,null);var inst_22237 = cljs.core.async.untap_STAR_.call(null,m,inst_22232);var state_22284__$1 = (function (){var statearr_22309 = state_22284;(statearr_22309[(19)] = inst_22236);
return statearr_22309;
})();var statearr_22310_22385 = state_22284__$1;(statearr_22310_22385[(2)] = inst_22237);
(statearr_22310_22385[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (32)))
{var inst_22227 = (state_22284[(10)]);var inst_22225 = (state_22284[(12)]);var inst_22226 = (state_22284[(20)]);var inst_22224 = (state_22284[(21)]);var inst_22239 = (state_22284[(2)]);var inst_22240 = (inst_22227 + (1));var tmp22305 = inst_22225;var tmp22306 = inst_22226;var tmp22307 = inst_22224;var inst_22224__$1 = tmp22307;var inst_22225__$1 = tmp22305;var inst_22226__$1 = tmp22306;var inst_22227__$1 = inst_22240;var state_22284__$1 = (function (){var statearr_22311 = state_22284;(statearr_22311[(22)] = inst_22239);
(statearr_22311[(10)] = inst_22227__$1);
(statearr_22311[(12)] = inst_22225__$1);
(statearr_22311[(20)] = inst_22226__$1);
(statearr_22311[(21)] = inst_22224__$1);
return statearr_22311;
})();var statearr_22312_22386 = state_22284__$1;(statearr_22312_22386[(2)] = null);
(statearr_22312_22386[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (40)))
{var inst_22252 = (state_22284[(23)]);var inst_22256 = done.call(null,null);var inst_22257 = cljs.core.async.untap_STAR_.call(null,m,inst_22252);var state_22284__$1 = (function (){var statearr_22313 = state_22284;(statearr_22313[(24)] = inst_22256);
return statearr_22313;
})();var statearr_22314_22387 = state_22284__$1;(statearr_22314_22387[(2)] = inst_22257);
(statearr_22314_22387[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (33)))
{var inst_22243 = (state_22284[(25)]);var inst_22245 = cljs.core.chunked_seq_QMARK_.call(null,inst_22243);var state_22284__$1 = state_22284;if(inst_22245)
{var statearr_22315_22388 = state_22284__$1;(statearr_22315_22388[(1)] = (36));
} else
{var statearr_22316_22389 = state_22284__$1;(statearr_22316_22389[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (13)))
{var inst_22175 = (state_22284[(26)]);var inst_22178 = cljs.core.async.close_BANG_.call(null,inst_22175);var state_22284__$1 = state_22284;var statearr_22317_22390 = state_22284__$1;(statearr_22317_22390[(2)] = inst_22178);
(statearr_22317_22390[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (22)))
{var inst_22196 = (state_22284[(8)]);var inst_22199 = cljs.core.async.close_BANG_.call(null,inst_22196);var state_22284__$1 = state_22284;var statearr_22318_22391 = state_22284__$1;(statearr_22318_22391[(2)] = inst_22199);
(statearr_22318_22391[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (36)))
{var inst_22243 = (state_22284[(25)]);var inst_22247 = cljs.core.chunk_first.call(null,inst_22243);var inst_22248 = cljs.core.chunk_rest.call(null,inst_22243);var inst_22249 = cljs.core.count.call(null,inst_22247);var inst_22224 = inst_22248;var inst_22225 = inst_22247;var inst_22226 = inst_22249;var inst_22227 = (0);var state_22284__$1 = (function (){var statearr_22319 = state_22284;(statearr_22319[(10)] = inst_22227);
(statearr_22319[(12)] = inst_22225);
(statearr_22319[(20)] = inst_22226);
(statearr_22319[(21)] = inst_22224);
return statearr_22319;
})();var statearr_22320_22392 = state_22284__$1;(statearr_22320_22392[(2)] = null);
(statearr_22320_22392[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (41)))
{var inst_22243 = (state_22284[(25)]);var inst_22259 = (state_22284[(2)]);var inst_22260 = cljs.core.next.call(null,inst_22243);var inst_22224 = inst_22260;var inst_22225 = null;var inst_22226 = (0);var inst_22227 = (0);var state_22284__$1 = (function (){var statearr_22321 = state_22284;(statearr_22321[(10)] = inst_22227);
(statearr_22321[(27)] = inst_22259);
(statearr_22321[(12)] = inst_22225);
(statearr_22321[(20)] = inst_22226);
(statearr_22321[(21)] = inst_22224);
return statearr_22321;
})();var statearr_22322_22393 = state_22284__$1;(statearr_22322_22393[(2)] = null);
(statearr_22322_22393[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (43)))
{var state_22284__$1 = state_22284;var statearr_22323_22394 = state_22284__$1;(statearr_22323_22394[(2)] = null);
(statearr_22323_22394[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (29)))
{var inst_22268 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22324_22395 = state_22284__$1;(statearr_22324_22395[(2)] = inst_22268);
(statearr_22324_22395[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (44)))
{var inst_22277 = (state_22284[(2)]);var state_22284__$1 = (function (){var statearr_22325 = state_22284;(statearr_22325[(28)] = inst_22277);
return statearr_22325;
})();var statearr_22326_22396 = state_22284__$1;(statearr_22326_22396[(2)] = null);
(statearr_22326_22396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (6)))
{var inst_22216 = (state_22284[(29)]);var inst_22215 = cljs.core.deref.call(null,cs);var inst_22216__$1 = cljs.core.keys.call(null,inst_22215);var inst_22217 = cljs.core.count.call(null,inst_22216__$1);var inst_22218 = cljs.core.reset_BANG_.call(null,dctr,inst_22217);var inst_22223 = cljs.core.seq.call(null,inst_22216__$1);var inst_22224 = inst_22223;var inst_22225 = null;var inst_22226 = (0);var inst_22227 = (0);var state_22284__$1 = (function (){var statearr_22327 = state_22284;(statearr_22327[(10)] = inst_22227);
(statearr_22327[(12)] = inst_22225);
(statearr_22327[(29)] = inst_22216__$1);
(statearr_22327[(20)] = inst_22226);
(statearr_22327[(30)] = inst_22218);
(statearr_22327[(21)] = inst_22224);
return statearr_22327;
})();var statearr_22328_22397 = state_22284__$1;(statearr_22328_22397[(2)] = null);
(statearr_22328_22397[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (28)))
{var inst_22243 = (state_22284[(25)]);var inst_22224 = (state_22284[(21)]);var inst_22243__$1 = cljs.core.seq.call(null,inst_22224);var state_22284__$1 = (function (){var statearr_22329 = state_22284;(statearr_22329[(25)] = inst_22243__$1);
return statearr_22329;
})();if(inst_22243__$1)
{var statearr_22330_22398 = state_22284__$1;(statearr_22330_22398[(1)] = (33));
} else
{var statearr_22331_22399 = state_22284__$1;(statearr_22331_22399[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (25)))
{var inst_22227 = (state_22284[(10)]);var inst_22226 = (state_22284[(20)]);var inst_22229 = (inst_22227 < inst_22226);var inst_22230 = inst_22229;var state_22284__$1 = state_22284;if(cljs.core.truth_(inst_22230))
{var statearr_22332_22400 = state_22284__$1;(statearr_22332_22400[(1)] = (27));
} else
{var statearr_22333_22401 = state_22284__$1;(statearr_22333_22401[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (34)))
{var state_22284__$1 = state_22284;var statearr_22334_22402 = state_22284__$1;(statearr_22334_22402[(2)] = null);
(statearr_22334_22402[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (17)))
{var state_22284__$1 = state_22284;var statearr_22335_22403 = state_22284__$1;(statearr_22335_22403[(2)] = null);
(statearr_22335_22403[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (3)))
{var inst_22282 = (state_22284[(2)]);var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else
{if((state_val_22285 === (12)))
{var inst_22211 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22336_22404 = state_22284__$1;(statearr_22336_22404[(2)] = inst_22211);
(statearr_22336_22404[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (2)))
{var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,(4),ch);
} else
{if((state_val_22285 === (23)))
{var state_22284__$1 = state_22284;var statearr_22337_22405 = state_22284__$1;(statearr_22337_22405[(2)] = null);
(statearr_22337_22405[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (35)))
{var inst_22266 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22338_22406 = state_22284__$1;(statearr_22338_22406[(2)] = inst_22266);
(statearr_22338_22406[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (19)))
{var inst_22185 = (state_22284[(7)]);var inst_22189 = cljs.core.chunk_first.call(null,inst_22185);var inst_22190 = cljs.core.chunk_rest.call(null,inst_22185);var inst_22191 = cljs.core.count.call(null,inst_22189);var inst_22165 = inst_22190;var inst_22166 = inst_22189;var inst_22167 = inst_22191;var inst_22168 = (0);var state_22284__$1 = (function (){var statearr_22339 = state_22284;(statearr_22339[(13)] = inst_22167);
(statearr_22339[(15)] = inst_22168);
(statearr_22339[(16)] = inst_22166);
(statearr_22339[(17)] = inst_22165);
return statearr_22339;
})();var statearr_22340_22407 = state_22284__$1;(statearr_22340_22407[(2)] = null);
(statearr_22340_22407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (11)))
{var inst_22185 = (state_22284[(7)]);var inst_22165 = (state_22284[(17)]);var inst_22185__$1 = cljs.core.seq.call(null,inst_22165);var state_22284__$1 = (function (){var statearr_22341 = state_22284;(statearr_22341[(7)] = inst_22185__$1);
return statearr_22341;
})();if(inst_22185__$1)
{var statearr_22342_22408 = state_22284__$1;(statearr_22342_22408[(1)] = (16));
} else
{var statearr_22343_22409 = state_22284__$1;(statearr_22343_22409[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (9)))
{var inst_22213 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22344_22410 = state_22284__$1;(statearr_22344_22410[(2)] = inst_22213);
(statearr_22344_22410[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (5)))
{var inst_22163 = cljs.core.deref.call(null,cs);var inst_22164 = cljs.core.seq.call(null,inst_22163);var inst_22165 = inst_22164;var inst_22166 = null;var inst_22167 = (0);var inst_22168 = (0);var state_22284__$1 = (function (){var statearr_22345 = state_22284;(statearr_22345[(13)] = inst_22167);
(statearr_22345[(15)] = inst_22168);
(statearr_22345[(16)] = inst_22166);
(statearr_22345[(17)] = inst_22165);
return statearr_22345;
})();var statearr_22346_22411 = state_22284__$1;(statearr_22346_22411[(2)] = null);
(statearr_22346_22411[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (14)))
{var state_22284__$1 = state_22284;var statearr_22347_22412 = state_22284__$1;(statearr_22347_22412[(2)] = null);
(statearr_22347_22412[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (45)))
{var inst_22274 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22348_22413 = state_22284__$1;(statearr_22348_22413[(2)] = inst_22274);
(statearr_22348_22413[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (26)))
{var inst_22216 = (state_22284[(29)]);var inst_22270 = (state_22284[(2)]);var inst_22271 = cljs.core.seq.call(null,inst_22216);var state_22284__$1 = (function (){var statearr_22349 = state_22284;(statearr_22349[(31)] = inst_22270);
return statearr_22349;
})();if(inst_22271)
{var statearr_22350_22414 = state_22284__$1;(statearr_22350_22414[(1)] = (42));
} else
{var statearr_22351_22415 = state_22284__$1;(statearr_22351_22415[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (16)))
{var inst_22185 = (state_22284[(7)]);var inst_22187 = cljs.core.chunked_seq_QMARK_.call(null,inst_22185);var state_22284__$1 = state_22284;if(inst_22187)
{var statearr_22352_22416 = state_22284__$1;(statearr_22352_22416[(1)] = (19));
} else
{var statearr_22353_22417 = state_22284__$1;(statearr_22353_22417[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (38)))
{var inst_22263 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22354_22418 = state_22284__$1;(statearr_22354_22418[(2)] = inst_22263);
(statearr_22354_22418[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (30)))
{var state_22284__$1 = state_22284;var statearr_22355_22419 = state_22284__$1;(statearr_22355_22419[(2)] = null);
(statearr_22355_22419[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (10)))
{var inst_22168 = (state_22284[(15)]);var inst_22166 = (state_22284[(16)]);var inst_22174 = cljs.core._nth.call(null,inst_22166,inst_22168);var inst_22175 = cljs.core.nth.call(null,inst_22174,(0),null);var inst_22176 = cljs.core.nth.call(null,inst_22174,(1),null);var state_22284__$1 = (function (){var statearr_22356 = state_22284;(statearr_22356[(26)] = inst_22175);
return statearr_22356;
})();if(cljs.core.truth_(inst_22176))
{var statearr_22357_22420 = state_22284__$1;(statearr_22357_22420[(1)] = (13));
} else
{var statearr_22358_22421 = state_22284__$1;(statearr_22358_22421[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (18)))
{var inst_22209 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22359_22422 = state_22284__$1;(statearr_22359_22422[(2)] = inst_22209);
(statearr_22359_22422[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (42)))
{var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,(45),dchan);
} else
{if((state_val_22285 === (37)))
{var inst_22156 = (state_22284[(9)]);var inst_22252 = (state_22284[(23)]);var inst_22243 = (state_22284[(25)]);var inst_22252__$1 = cljs.core.first.call(null,inst_22243);var inst_22253 = cljs.core.async.put_BANG_.call(null,inst_22252__$1,inst_22156,done);var state_22284__$1 = (function (){var statearr_22360 = state_22284;(statearr_22360[(23)] = inst_22252__$1);
return statearr_22360;
})();if(cljs.core.truth_(inst_22253))
{var statearr_22361_22423 = state_22284__$1;(statearr_22361_22423[(1)] = (39));
} else
{var statearr_22362_22424 = state_22284__$1;(statearr_22362_22424[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (8)))
{var inst_22167 = (state_22284[(13)]);var inst_22168 = (state_22284[(15)]);var inst_22170 = (inst_22168 < inst_22167);var inst_22171 = inst_22170;var state_22284__$1 = state_22284;if(cljs.core.truth_(inst_22171))
{var statearr_22363_22425 = state_22284__$1;(statearr_22363_22425[(1)] = (10));
} else
{var statearr_22364_22426 = state_22284__$1;(statearr_22364_22426[(1)] = (11));
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
});})(c__15087__auto___22372,cs,m,dchan,dctr,done))
;return ((function (switch__15072__auto__,c__15087__auto___22372,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22368[(0)] = state_machine__15073__auto__);
(statearr_22368[(1)] = (1));
return statearr_22368;
});
var state_machine__15073__auto____1 = (function (state_22284){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22284);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22369){if((e22369 instanceof Object))
{var ex__15076__auto__ = e22369;var statearr_22370_22427 = state_22284;(statearr_22370_22427[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22428 = state_22284;
state_22284 = G__22428;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22372,cs,m,dchan,dctr,done))
})();var state__15089__auto__ = (function (){var statearr_22371 = f__15088__auto__.call(null);(statearr_22371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22372);
return statearr_22371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22372,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj22430 = {};return obj22430;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__13183__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22431){var map__22436 = p__22431;var map__22436__$1 = ((cljs.core.seq_QMARK_.call(null,map__22436))?cljs.core.apply.call(null,cljs.core.hash_map,map__22436):map__22436);var opts = map__22436__$1;var statearr_22437_22440 = state;(statearr_22437_22440[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22436,map__22436__$1,opts){
return (function (val){var statearr_22438_22441 = state;(statearr_22438_22441[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22436,map__22436__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_22439_22442 = state;(statearr_22439_22442[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22431 = null;if (arguments.length > 3) {
  p__22431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22431);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22443){
var state = cljs.core.first(arglist__22443);
arglist__22443 = cljs.core.next(arglist__22443);
var cont_block = cljs.core.first(arglist__22443);
arglist__22443 = cljs.core.next(arglist__22443);
var ports = cljs.core.first(arglist__22443);
var p__22431 = cljs.core.rest(arglist__22443);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22431);
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
;var m = (function (){if(typeof cljs.core.async.t22563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22563 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22564){
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
this.meta22564 = meta22564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22563.cljs$lang$type = true;
cljs.core.async.t22563.cljs$lang$ctorStr = "cljs.core.async/t22563";
cljs.core.async.t22563.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22563");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22565){var self__ = this;
var _22565__$1 = this;return self__.meta22564;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22565,meta22564__$1){var self__ = this;
var _22565__$1 = this;return (new cljs.core.async.t22563(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22564__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22563 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22564){return (new cljs.core.async.t22563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22564));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22563(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15087__auto___22682 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22635){var state_val_22636 = (state_22635[(1)]);if((state_val_22636 === (7)))
{var inst_22579 = (state_22635[(7)]);var inst_22584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22579);var state_22635__$1 = state_22635;var statearr_22637_22683 = state_22635__$1;(statearr_22637_22683[(2)] = inst_22584);
(statearr_22637_22683[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (20)))
{var inst_22594 = (state_22635[(8)]);var state_22635__$1 = state_22635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22635__$1,(23),out,inst_22594);
} else
{if((state_val_22636 === (1)))
{var inst_22569 = (state_22635[(9)]);var inst_22569__$1 = calc_state.call(null);var inst_22570 = cljs.core.seq_QMARK_.call(null,inst_22569__$1);var state_22635__$1 = (function (){var statearr_22638 = state_22635;(statearr_22638[(9)] = inst_22569__$1);
return statearr_22638;
})();if(inst_22570)
{var statearr_22639_22684 = state_22635__$1;(statearr_22639_22684[(1)] = (2));
} else
{var statearr_22640_22685 = state_22635__$1;(statearr_22640_22685[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (24)))
{var inst_22587 = (state_22635[(10)]);var inst_22579 = inst_22587;var state_22635__$1 = (function (){var statearr_22641 = state_22635;(statearr_22641[(7)] = inst_22579);
return statearr_22641;
})();var statearr_22642_22686 = state_22635__$1;(statearr_22642_22686[(2)] = null);
(statearr_22642_22686[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (4)))
{var inst_22569 = (state_22635[(9)]);var inst_22575 = (state_22635[(2)]);var inst_22576 = cljs.core.get.call(null,inst_22575,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22577 = cljs.core.get.call(null,inst_22575,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22578 = cljs.core.get.call(null,inst_22575,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22579 = inst_22569;var state_22635__$1 = (function (){var statearr_22643 = state_22635;(statearr_22643[(11)] = inst_22577);
(statearr_22643[(12)] = inst_22578);
(statearr_22643[(13)] = inst_22576);
(statearr_22643[(7)] = inst_22579);
return statearr_22643;
})();var statearr_22644_22687 = state_22635__$1;(statearr_22644_22687[(2)] = null);
(statearr_22644_22687[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (15)))
{var state_22635__$1 = state_22635;var statearr_22645_22688 = state_22635__$1;(statearr_22645_22688[(2)] = null);
(statearr_22645_22688[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (21)))
{var inst_22587 = (state_22635[(10)]);var inst_22579 = inst_22587;var state_22635__$1 = (function (){var statearr_22646 = state_22635;(statearr_22646[(7)] = inst_22579);
return statearr_22646;
})();var statearr_22647_22689 = state_22635__$1;(statearr_22647_22689[(2)] = null);
(statearr_22647_22689[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (13)))
{var inst_22631 = (state_22635[(2)]);var state_22635__$1 = state_22635;var statearr_22648_22690 = state_22635__$1;(statearr_22648_22690[(2)] = inst_22631);
(statearr_22648_22690[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (22)))
{var inst_22629 = (state_22635[(2)]);var state_22635__$1 = state_22635;var statearr_22649_22691 = state_22635__$1;(statearr_22649_22691[(2)] = inst_22629);
(statearr_22649_22691[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (6)))
{var inst_22633 = (state_22635[(2)]);var state_22635__$1 = state_22635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22635__$1,inst_22633);
} else
{if((state_val_22636 === (25)))
{var state_22635__$1 = state_22635;var statearr_22650_22692 = state_22635__$1;(statearr_22650_22692[(2)] = null);
(statearr_22650_22692[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (17)))
{var inst_22609 = (state_22635[(14)]);var state_22635__$1 = state_22635;var statearr_22651_22693 = state_22635__$1;(statearr_22651_22693[(2)] = inst_22609);
(statearr_22651_22693[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (3)))
{var inst_22569 = (state_22635[(9)]);var state_22635__$1 = state_22635;var statearr_22652_22694 = state_22635__$1;(statearr_22652_22694[(2)] = inst_22569);
(statearr_22652_22694[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (12)))
{var inst_22590 = (state_22635[(15)]);var inst_22609 = (state_22635[(14)]);var inst_22595 = (state_22635[(16)]);var inst_22609__$1 = inst_22590.call(null,inst_22595);var state_22635__$1 = (function (){var statearr_22653 = state_22635;(statearr_22653[(14)] = inst_22609__$1);
return statearr_22653;
})();if(cljs.core.truth_(inst_22609__$1))
{var statearr_22654_22695 = state_22635__$1;(statearr_22654_22695[(1)] = (17));
} else
{var statearr_22655_22696 = state_22635__$1;(statearr_22655_22696[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (2)))
{var inst_22569 = (state_22635[(9)]);var inst_22572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22569);var state_22635__$1 = state_22635;var statearr_22656_22697 = state_22635__$1;(statearr_22656_22697[(2)] = inst_22572);
(statearr_22656_22697[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (23)))
{var inst_22620 = (state_22635[(2)]);var state_22635__$1 = state_22635;if(cljs.core.truth_(inst_22620))
{var statearr_22657_22698 = state_22635__$1;(statearr_22657_22698[(1)] = (24));
} else
{var statearr_22658_22699 = state_22635__$1;(statearr_22658_22699[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (19)))
{var inst_22617 = (state_22635[(2)]);var state_22635__$1 = state_22635;if(cljs.core.truth_(inst_22617))
{var statearr_22659_22700 = state_22635__$1;(statearr_22659_22700[(1)] = (20));
} else
{var statearr_22660_22701 = state_22635__$1;(statearr_22660_22701[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (11)))
{var inst_22594 = (state_22635[(8)]);var inst_22600 = (inst_22594 == null);var state_22635__$1 = state_22635;if(cljs.core.truth_(inst_22600))
{var statearr_22661_22702 = state_22635__$1;(statearr_22661_22702[(1)] = (14));
} else
{var statearr_22662_22703 = state_22635__$1;(statearr_22662_22703[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (9)))
{var inst_22587 = (state_22635[(10)]);var inst_22587__$1 = (state_22635[(2)]);var inst_22588 = cljs.core.get.call(null,inst_22587__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22589 = cljs.core.get.call(null,inst_22587__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22590 = cljs.core.get.call(null,inst_22587__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22635__$1 = (function (){var statearr_22663 = state_22635;(statearr_22663[(15)] = inst_22590);
(statearr_22663[(10)] = inst_22587__$1);
(statearr_22663[(17)] = inst_22589);
return statearr_22663;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_22635__$1,(10),inst_22588);
} else
{if((state_val_22636 === (5)))
{var inst_22579 = (state_22635[(7)]);var inst_22582 = cljs.core.seq_QMARK_.call(null,inst_22579);var state_22635__$1 = state_22635;if(inst_22582)
{var statearr_22664_22704 = state_22635__$1;(statearr_22664_22704[(1)] = (7));
} else
{var statearr_22665_22705 = state_22635__$1;(statearr_22665_22705[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (14)))
{var inst_22595 = (state_22635[(16)]);var inst_22602 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22595);var state_22635__$1 = state_22635;var statearr_22666_22706 = state_22635__$1;(statearr_22666_22706[(2)] = inst_22602);
(statearr_22666_22706[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (26)))
{var inst_22625 = (state_22635[(2)]);var state_22635__$1 = state_22635;var statearr_22667_22707 = state_22635__$1;(statearr_22667_22707[(2)] = inst_22625);
(statearr_22667_22707[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (16)))
{var inst_22605 = (state_22635[(2)]);var inst_22606 = calc_state.call(null);var inst_22579 = inst_22606;var state_22635__$1 = (function (){var statearr_22668 = state_22635;(statearr_22668[(7)] = inst_22579);
(statearr_22668[(18)] = inst_22605);
return statearr_22668;
})();var statearr_22669_22708 = state_22635__$1;(statearr_22669_22708[(2)] = null);
(statearr_22669_22708[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (10)))
{var inst_22595 = (state_22635[(16)]);var inst_22594 = (state_22635[(8)]);var inst_22593 = (state_22635[(2)]);var inst_22594__$1 = cljs.core.nth.call(null,inst_22593,(0),null);var inst_22595__$1 = cljs.core.nth.call(null,inst_22593,(1),null);var inst_22596 = (inst_22594__$1 == null);var inst_22597 = cljs.core._EQ_.call(null,inst_22595__$1,change);var inst_22598 = (inst_22596) || (inst_22597);var state_22635__$1 = (function (){var statearr_22670 = state_22635;(statearr_22670[(16)] = inst_22595__$1);
(statearr_22670[(8)] = inst_22594__$1);
return statearr_22670;
})();if(cljs.core.truth_(inst_22598))
{var statearr_22671_22709 = state_22635__$1;(statearr_22671_22709[(1)] = (11));
} else
{var statearr_22672_22710 = state_22635__$1;(statearr_22672_22710[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (18)))
{var inst_22590 = (state_22635[(15)]);var inst_22595 = (state_22635[(16)]);var inst_22589 = (state_22635[(17)]);var inst_22612 = cljs.core.empty_QMARK_.call(null,inst_22590);var inst_22613 = inst_22589.call(null,inst_22595);var inst_22614 = cljs.core.not.call(null,inst_22613);var inst_22615 = (inst_22612) && (inst_22614);var state_22635__$1 = state_22635;var statearr_22673_22711 = state_22635__$1;(statearr_22673_22711[(2)] = inst_22615);
(statearr_22673_22711[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22636 === (8)))
{var inst_22579 = (state_22635[(7)]);var state_22635__$1 = state_22635;var statearr_22674_22712 = state_22635__$1;(statearr_22674_22712[(2)] = inst_22579);
(statearr_22674_22712[(1)] = (9));
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
});})(c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15072__auto__,c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22678[(0)] = state_machine__15073__auto__);
(statearr_22678[(1)] = (1));
return statearr_22678;
});
var state_machine__15073__auto____1 = (function (state_22635){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22635);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22679){if((e22679 instanceof Object))
{var ex__15076__auto__ = e22679;var statearr_22680_22713 = state_22635;(statearr_22680_22713[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22714 = state_22635;
state_22635 = G__22714;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22635){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15089__auto__ = (function (){var statearr_22681 = f__15088__auto__.call(null);(statearr_22681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22682);
return statearr_22681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj22716 = {};return obj22716;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__13183__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13183__auto__)]);if(or__12546__auto__)
{return or__12546__auto__;
} else
{var or__12546__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12546__auto____$1)
{return or__12546__auto____$1;
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
return (function (topic){var or__12546__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12546__auto__,mults){
return (function (p1__22717_SHARP_){if(cljs.core.truth_(p1__22717_SHARP_.call(null,topic)))
{return p1__22717_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22717_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22840 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22841){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22841 = meta22841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22840.cljs$lang$type = true;
cljs.core.async.t22840.cljs$lang$ctorStr = "cljs.core.async/t22840";
cljs.core.async.t22840.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22840");
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22842){var self__ = this;
var _22842__$1 = this;return self__.meta22841;
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22842,meta22841__$1){var self__ = this;
var _22842__$1 = this;return (new cljs.core.async.t22840(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22841__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22840 = ((function (mults,ensure_mult){
return (function __GT_t22840(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22841){return (new cljs.core.async.t22840(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22841));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22840(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15087__auto___22962 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22962,mults,ensure_mult,p){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22962,mults,ensure_mult,p){
return (function (state_22914){var state_val_22915 = (state_22914[(1)]);if((state_val_22915 === (7)))
{var inst_22910 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22916_22963 = state_22914__$1;(statearr_22916_22963[(2)] = inst_22910);
(statearr_22916_22963[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (20)))
{var state_22914__$1 = state_22914;var statearr_22917_22964 = state_22914__$1;(statearr_22917_22964[(2)] = null);
(statearr_22917_22964[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (1)))
{var state_22914__$1 = state_22914;var statearr_22918_22965 = state_22914__$1;(statearr_22918_22965[(2)] = null);
(statearr_22918_22965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (24)))
{var inst_22893 = (state_22914[(7)]);var inst_22902 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22893);var state_22914__$1 = state_22914;var statearr_22919_22966 = state_22914__$1;(statearr_22919_22966[(2)] = inst_22902);
(statearr_22919_22966[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (4)))
{var inst_22845 = (state_22914[(8)]);var inst_22845__$1 = (state_22914[(2)]);var inst_22846 = (inst_22845__$1 == null);var state_22914__$1 = (function (){var statearr_22920 = state_22914;(statearr_22920[(8)] = inst_22845__$1);
return statearr_22920;
})();if(cljs.core.truth_(inst_22846))
{var statearr_22921_22967 = state_22914__$1;(statearr_22921_22967[(1)] = (5));
} else
{var statearr_22922_22968 = state_22914__$1;(statearr_22922_22968[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (15)))
{var inst_22887 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22923_22969 = state_22914__$1;(statearr_22923_22969[(2)] = inst_22887);
(statearr_22923_22969[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (21)))
{var inst_22907 = (state_22914[(2)]);var state_22914__$1 = (function (){var statearr_22924 = state_22914;(statearr_22924[(9)] = inst_22907);
return statearr_22924;
})();var statearr_22925_22970 = state_22914__$1;(statearr_22925_22970[(2)] = null);
(statearr_22925_22970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (13)))
{var inst_22869 = (state_22914[(10)]);var inst_22871 = cljs.core.chunked_seq_QMARK_.call(null,inst_22869);var state_22914__$1 = state_22914;if(inst_22871)
{var statearr_22926_22971 = state_22914__$1;(statearr_22926_22971[(1)] = (16));
} else
{var statearr_22927_22972 = state_22914__$1;(statearr_22927_22972[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (22)))
{var inst_22899 = (state_22914[(2)]);var state_22914__$1 = state_22914;if(cljs.core.truth_(inst_22899))
{var statearr_22928_22973 = state_22914__$1;(statearr_22928_22973[(1)] = (23));
} else
{var statearr_22929_22974 = state_22914__$1;(statearr_22929_22974[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (6)))
{var inst_22893 = (state_22914[(7)]);var inst_22845 = (state_22914[(8)]);var inst_22895 = (state_22914[(11)]);var inst_22893__$1 = topic_fn.call(null,inst_22845);var inst_22894 = cljs.core.deref.call(null,mults);var inst_22895__$1 = cljs.core.get.call(null,inst_22894,inst_22893__$1);var state_22914__$1 = (function (){var statearr_22930 = state_22914;(statearr_22930[(7)] = inst_22893__$1);
(statearr_22930[(11)] = inst_22895__$1);
return statearr_22930;
})();if(cljs.core.truth_(inst_22895__$1))
{var statearr_22931_22975 = state_22914__$1;(statearr_22931_22975[(1)] = (19));
} else
{var statearr_22932_22976 = state_22914__$1;(statearr_22932_22976[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (25)))
{var inst_22904 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22933_22977 = state_22914__$1;(statearr_22933_22977[(2)] = inst_22904);
(statearr_22933_22977[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (17)))
{var inst_22869 = (state_22914[(10)]);var inst_22878 = cljs.core.first.call(null,inst_22869);var inst_22879 = cljs.core.async.muxch_STAR_.call(null,inst_22878);var inst_22880 = cljs.core.async.close_BANG_.call(null,inst_22879);var inst_22881 = cljs.core.next.call(null,inst_22869);var inst_22855 = inst_22881;var inst_22856 = null;var inst_22857 = (0);var inst_22858 = (0);var state_22914__$1 = (function (){var statearr_22934 = state_22914;(statearr_22934[(12)] = inst_22856);
(statearr_22934[(13)] = inst_22880);
(statearr_22934[(14)] = inst_22858);
(statearr_22934[(15)] = inst_22857);
(statearr_22934[(16)] = inst_22855);
return statearr_22934;
})();var statearr_22935_22978 = state_22914__$1;(statearr_22935_22978[(2)] = null);
(statearr_22935_22978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (3)))
{var inst_22912 = (state_22914[(2)]);var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22914__$1,inst_22912);
} else
{if((state_val_22915 === (12)))
{var inst_22889 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22936_22979 = state_22914__$1;(statearr_22936_22979[(2)] = inst_22889);
(statearr_22936_22979[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (2)))
{var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22914__$1,(4),ch);
} else
{if((state_val_22915 === (23)))
{var state_22914__$1 = state_22914;var statearr_22937_22980 = state_22914__$1;(statearr_22937_22980[(2)] = null);
(statearr_22937_22980[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (19)))
{var inst_22845 = (state_22914[(8)]);var inst_22895 = (state_22914[(11)]);var inst_22897 = cljs.core.async.muxch_STAR_.call(null,inst_22895);var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22914__$1,(22),inst_22897,inst_22845);
} else
{if((state_val_22915 === (11)))
{var inst_22869 = (state_22914[(10)]);var inst_22855 = (state_22914[(16)]);var inst_22869__$1 = cljs.core.seq.call(null,inst_22855);var state_22914__$1 = (function (){var statearr_22938 = state_22914;(statearr_22938[(10)] = inst_22869__$1);
return statearr_22938;
})();if(inst_22869__$1)
{var statearr_22939_22981 = state_22914__$1;(statearr_22939_22981[(1)] = (13));
} else
{var statearr_22940_22982 = state_22914__$1;(statearr_22940_22982[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (9)))
{var inst_22891 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22941_22983 = state_22914__$1;(statearr_22941_22983[(2)] = inst_22891);
(statearr_22941_22983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (5)))
{var inst_22852 = cljs.core.deref.call(null,mults);var inst_22853 = cljs.core.vals.call(null,inst_22852);var inst_22854 = cljs.core.seq.call(null,inst_22853);var inst_22855 = inst_22854;var inst_22856 = null;var inst_22857 = (0);var inst_22858 = (0);var state_22914__$1 = (function (){var statearr_22942 = state_22914;(statearr_22942[(12)] = inst_22856);
(statearr_22942[(14)] = inst_22858);
(statearr_22942[(15)] = inst_22857);
(statearr_22942[(16)] = inst_22855);
return statearr_22942;
})();var statearr_22943_22984 = state_22914__$1;(statearr_22943_22984[(2)] = null);
(statearr_22943_22984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (14)))
{var state_22914__$1 = state_22914;var statearr_22947_22985 = state_22914__$1;(statearr_22947_22985[(2)] = null);
(statearr_22947_22985[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (16)))
{var inst_22869 = (state_22914[(10)]);var inst_22873 = cljs.core.chunk_first.call(null,inst_22869);var inst_22874 = cljs.core.chunk_rest.call(null,inst_22869);var inst_22875 = cljs.core.count.call(null,inst_22873);var inst_22855 = inst_22874;var inst_22856 = inst_22873;var inst_22857 = inst_22875;var inst_22858 = (0);var state_22914__$1 = (function (){var statearr_22948 = state_22914;(statearr_22948[(12)] = inst_22856);
(statearr_22948[(14)] = inst_22858);
(statearr_22948[(15)] = inst_22857);
(statearr_22948[(16)] = inst_22855);
return statearr_22948;
})();var statearr_22949_22986 = state_22914__$1;(statearr_22949_22986[(2)] = null);
(statearr_22949_22986[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (10)))
{var inst_22856 = (state_22914[(12)]);var inst_22858 = (state_22914[(14)]);var inst_22857 = (state_22914[(15)]);var inst_22855 = (state_22914[(16)]);var inst_22863 = cljs.core._nth.call(null,inst_22856,inst_22858);var inst_22864 = cljs.core.async.muxch_STAR_.call(null,inst_22863);var inst_22865 = cljs.core.async.close_BANG_.call(null,inst_22864);var inst_22866 = (inst_22858 + (1));var tmp22944 = inst_22856;var tmp22945 = inst_22857;var tmp22946 = inst_22855;var inst_22855__$1 = tmp22946;var inst_22856__$1 = tmp22944;var inst_22857__$1 = tmp22945;var inst_22858__$1 = inst_22866;var state_22914__$1 = (function (){var statearr_22950 = state_22914;(statearr_22950[(17)] = inst_22865);
(statearr_22950[(12)] = inst_22856__$1);
(statearr_22950[(14)] = inst_22858__$1);
(statearr_22950[(15)] = inst_22857__$1);
(statearr_22950[(16)] = inst_22855__$1);
return statearr_22950;
})();var statearr_22951_22987 = state_22914__$1;(statearr_22951_22987[(2)] = null);
(statearr_22951_22987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (18)))
{var inst_22884 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22952_22988 = state_22914__$1;(statearr_22952_22988[(2)] = inst_22884);
(statearr_22952_22988[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (8)))
{var inst_22858 = (state_22914[(14)]);var inst_22857 = (state_22914[(15)]);var inst_22860 = (inst_22858 < inst_22857);var inst_22861 = inst_22860;var state_22914__$1 = state_22914;if(cljs.core.truth_(inst_22861))
{var statearr_22953_22989 = state_22914__$1;(statearr_22953_22989[(1)] = (10));
} else
{var statearr_22954_22990 = state_22914__$1;(statearr_22954_22990[(1)] = (11));
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
});})(c__15087__auto___22962,mults,ensure_mult,p))
;return ((function (switch__15072__auto__,c__15087__auto___22962,mults,ensure_mult,p){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22958[(0)] = state_machine__15073__auto__);
(statearr_22958[(1)] = (1));
return statearr_22958;
});
var state_machine__15073__auto____1 = (function (state_22914){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22914);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22959){if((e22959 instanceof Object))
{var ex__15076__auto__ = e22959;var statearr_22960_22991 = state_22914;(statearr_22960_22991[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22914);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22992 = state_22914;
state_22914 = G__22992;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22962,mults,ensure_mult,p))
})();var state__15089__auto__ = (function (){var statearr_22961 = f__15088__auto__.call(null);(statearr_22961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22962);
return statearr_22961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22962,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15087__auto___23129 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23099){var state_val_23100 = (state_23099[(1)]);if((state_val_23100 === (7)))
{var state_23099__$1 = state_23099;var statearr_23101_23130 = state_23099__$1;(statearr_23101_23130[(2)] = null);
(statearr_23101_23130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (1)))
{var state_23099__$1 = state_23099;var statearr_23102_23131 = state_23099__$1;(statearr_23102_23131[(2)] = null);
(statearr_23102_23131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (4)))
{var inst_23063 = (state_23099[(7)]);var inst_23065 = (inst_23063 < cnt);var state_23099__$1 = state_23099;if(cljs.core.truth_(inst_23065))
{var statearr_23103_23132 = state_23099__$1;(statearr_23103_23132[(1)] = (6));
} else
{var statearr_23104_23133 = state_23099__$1;(statearr_23104_23133[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (15)))
{var inst_23095 = (state_23099[(2)]);var state_23099__$1 = state_23099;var statearr_23105_23134 = state_23099__$1;(statearr_23105_23134[(2)] = inst_23095);
(statearr_23105_23134[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (13)))
{var inst_23088 = cljs.core.async.close_BANG_.call(null,out);var state_23099__$1 = state_23099;var statearr_23106_23135 = state_23099__$1;(statearr_23106_23135[(2)] = inst_23088);
(statearr_23106_23135[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (6)))
{var state_23099__$1 = state_23099;var statearr_23107_23136 = state_23099__$1;(statearr_23107_23136[(2)] = null);
(statearr_23107_23136[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (3)))
{var inst_23097 = (state_23099[(2)]);var state_23099__$1 = state_23099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23099__$1,inst_23097);
} else
{if((state_val_23100 === (12)))
{var inst_23085 = (state_23099[(8)]);var inst_23085__$1 = (state_23099[(2)]);var inst_23086 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23085__$1);var state_23099__$1 = (function (){var statearr_23108 = state_23099;(statearr_23108[(8)] = inst_23085__$1);
return statearr_23108;
})();if(cljs.core.truth_(inst_23086))
{var statearr_23109_23137 = state_23099__$1;(statearr_23109_23137[(1)] = (13));
} else
{var statearr_23110_23138 = state_23099__$1;(statearr_23110_23138[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (2)))
{var inst_23062 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23063 = (0);var state_23099__$1 = (function (){var statearr_23111 = state_23099;(statearr_23111[(7)] = inst_23063);
(statearr_23111[(9)] = inst_23062);
return statearr_23111;
})();var statearr_23112_23139 = state_23099__$1;(statearr_23112_23139[(2)] = null);
(statearr_23112_23139[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (11)))
{var inst_23063 = (state_23099[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23099,(10),Object,null,(9));var inst_23072 = chs__$1.call(null,inst_23063);var inst_23073 = done.call(null,inst_23063);var inst_23074 = cljs.core.async.take_BANG_.call(null,inst_23072,inst_23073);var state_23099__$1 = state_23099;var statearr_23113_23140 = state_23099__$1;(statearr_23113_23140[(2)] = inst_23074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (9)))
{var inst_23063 = (state_23099[(7)]);var inst_23076 = (state_23099[(2)]);var inst_23077 = (inst_23063 + (1));var inst_23063__$1 = inst_23077;var state_23099__$1 = (function (){var statearr_23114 = state_23099;(statearr_23114[(7)] = inst_23063__$1);
(statearr_23114[(10)] = inst_23076);
return statearr_23114;
})();var statearr_23115_23141 = state_23099__$1;(statearr_23115_23141[(2)] = null);
(statearr_23115_23141[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (5)))
{var inst_23083 = (state_23099[(2)]);var state_23099__$1 = (function (){var statearr_23116 = state_23099;(statearr_23116[(11)] = inst_23083);
return statearr_23116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23099__$1,(12),dchan);
} else
{if((state_val_23100 === (14)))
{var inst_23085 = (state_23099[(8)]);var inst_23090 = cljs.core.apply.call(null,f,inst_23085);var state_23099__$1 = state_23099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23099__$1,(16),out,inst_23090);
} else
{if((state_val_23100 === (16)))
{var inst_23092 = (state_23099[(2)]);var state_23099__$1 = (function (){var statearr_23117 = state_23099;(statearr_23117[(12)] = inst_23092);
return statearr_23117;
})();var statearr_23118_23142 = state_23099__$1;(statearr_23118_23142[(2)] = null);
(statearr_23118_23142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (10)))
{var inst_23067 = (state_23099[(2)]);var inst_23068 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23099__$1 = (function (){var statearr_23119 = state_23099;(statearr_23119[(13)] = inst_23067);
return statearr_23119;
})();var statearr_23120_23143 = state_23099__$1;(statearr_23120_23143[(2)] = inst_23068);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23100 === (8)))
{var inst_23081 = (state_23099[(2)]);var state_23099__$1 = state_23099;var statearr_23121_23144 = state_23099__$1;(statearr_23121_23144[(2)] = inst_23081);
(statearr_23121_23144[(1)] = (5));
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
});})(c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15072__auto__,c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23125[(0)] = state_machine__15073__auto__);
(statearr_23125[(1)] = (1));
return statearr_23125;
});
var state_machine__15073__auto____1 = (function (state_23099){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23099);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23126){if((e23126 instanceof Object))
{var ex__15076__auto__ = e23126;var statearr_23127_23145 = state_23099;(statearr_23127_23145[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23126;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23146 = state_23099;
state_23099 = G__23146;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23099){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15089__auto__ = (function (){var statearr_23128 = f__15088__auto__.call(null);(statearr_23128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23129);
return statearr_23128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23129,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23254,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23254,out){
return (function (state_23230){var state_val_23231 = (state_23230[(1)]);if((state_val_23231 === (7)))
{var inst_23210 = (state_23230[(7)]);var inst_23209 = (state_23230[(8)]);var inst_23209__$1 = (state_23230[(2)]);var inst_23210__$1 = cljs.core.nth.call(null,inst_23209__$1,(0),null);var inst_23211 = cljs.core.nth.call(null,inst_23209__$1,(1),null);var inst_23212 = (inst_23210__$1 == null);var state_23230__$1 = (function (){var statearr_23232 = state_23230;(statearr_23232[(7)] = inst_23210__$1);
(statearr_23232[(9)] = inst_23211);
(statearr_23232[(8)] = inst_23209__$1);
return statearr_23232;
})();if(cljs.core.truth_(inst_23212))
{var statearr_23233_23255 = state_23230__$1;(statearr_23233_23255[(1)] = (8));
} else
{var statearr_23234_23256 = state_23230__$1;(statearr_23234_23256[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (1)))
{var inst_23201 = cljs.core.vec.call(null,chs);var inst_23202 = inst_23201;var state_23230__$1 = (function (){var statearr_23235 = state_23230;(statearr_23235[(10)] = inst_23202);
return statearr_23235;
})();var statearr_23236_23257 = state_23230__$1;(statearr_23236_23257[(2)] = null);
(statearr_23236_23257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (4)))
{var inst_23202 = (state_23230[(10)]);var state_23230__$1 = state_23230;return cljs.core.async.ioc_alts_BANG_.call(null,state_23230__$1,(7),inst_23202);
} else
{if((state_val_23231 === (6)))
{var inst_23226 = (state_23230[(2)]);var state_23230__$1 = state_23230;var statearr_23237_23258 = state_23230__$1;(statearr_23237_23258[(2)] = inst_23226);
(statearr_23237_23258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (3)))
{var inst_23228 = (state_23230[(2)]);var state_23230__$1 = state_23230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23230__$1,inst_23228);
} else
{if((state_val_23231 === (2)))
{var inst_23202 = (state_23230[(10)]);var inst_23204 = cljs.core.count.call(null,inst_23202);var inst_23205 = (inst_23204 > (0));var state_23230__$1 = state_23230;if(cljs.core.truth_(inst_23205))
{var statearr_23239_23259 = state_23230__$1;(statearr_23239_23259[(1)] = (4));
} else
{var statearr_23240_23260 = state_23230__$1;(statearr_23240_23260[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (11)))
{var inst_23202 = (state_23230[(10)]);var inst_23219 = (state_23230[(2)]);var tmp23238 = inst_23202;var inst_23202__$1 = tmp23238;var state_23230__$1 = (function (){var statearr_23241 = state_23230;(statearr_23241[(10)] = inst_23202__$1);
(statearr_23241[(11)] = inst_23219);
return statearr_23241;
})();var statearr_23242_23261 = state_23230__$1;(statearr_23242_23261[(2)] = null);
(statearr_23242_23261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (9)))
{var inst_23210 = (state_23230[(7)]);var state_23230__$1 = state_23230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23230__$1,(11),out,inst_23210);
} else
{if((state_val_23231 === (5)))
{var inst_23224 = cljs.core.async.close_BANG_.call(null,out);var state_23230__$1 = state_23230;var statearr_23243_23262 = state_23230__$1;(statearr_23243_23262[(2)] = inst_23224);
(statearr_23243_23262[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (10)))
{var inst_23222 = (state_23230[(2)]);var state_23230__$1 = state_23230;var statearr_23244_23263 = state_23230__$1;(statearr_23244_23263[(2)] = inst_23222);
(statearr_23244_23263[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23231 === (8)))
{var inst_23202 = (state_23230[(10)]);var inst_23210 = (state_23230[(7)]);var inst_23211 = (state_23230[(9)]);var inst_23209 = (state_23230[(8)]);var inst_23214 = (function (){var c = inst_23211;var v = inst_23210;var vec__23207 = inst_23209;var cs = inst_23202;return ((function (c,v,vec__23207,cs,inst_23202,inst_23210,inst_23211,inst_23209,state_val_23231,c__15087__auto___23254,out){
return (function (p1__23147_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23147_SHARP_);
});
;})(c,v,vec__23207,cs,inst_23202,inst_23210,inst_23211,inst_23209,state_val_23231,c__15087__auto___23254,out))
})();var inst_23215 = cljs.core.filterv.call(null,inst_23214,inst_23202);var inst_23202__$1 = inst_23215;var state_23230__$1 = (function (){var statearr_23245 = state_23230;(statearr_23245[(10)] = inst_23202__$1);
return statearr_23245;
})();var statearr_23246_23264 = state_23230__$1;(statearr_23246_23264[(2)] = null);
(statearr_23246_23264[(1)] = (2));
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
});})(c__15087__auto___23254,out))
;return ((function (switch__15072__auto__,c__15087__auto___23254,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23250 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23250[(0)] = state_machine__15073__auto__);
(statearr_23250[(1)] = (1));
return statearr_23250;
});
var state_machine__15073__auto____1 = (function (state_23230){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23230);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23251){if((e23251 instanceof Object))
{var ex__15076__auto__ = e23251;var statearr_23252_23265 = state_23230;(statearr_23252_23265[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23230);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23266 = state_23230;
state_23230 = G__23266;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23230){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23254,out))
})();var state__15089__auto__ = (function (){var statearr_23253 = f__15088__auto__.call(null);(statearr_23253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23254);
return statearr_23253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23254,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23359 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23359,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23359,out){
return (function (state_23336){var state_val_23337 = (state_23336[(1)]);if((state_val_23337 === (7)))
{var inst_23318 = (state_23336[(7)]);var inst_23318__$1 = (state_23336[(2)]);var inst_23319 = (inst_23318__$1 == null);var inst_23320 = cljs.core.not.call(null,inst_23319);var state_23336__$1 = (function (){var statearr_23338 = state_23336;(statearr_23338[(7)] = inst_23318__$1);
return statearr_23338;
})();if(inst_23320)
{var statearr_23339_23360 = state_23336__$1;(statearr_23339_23360[(1)] = (8));
} else
{var statearr_23340_23361 = state_23336__$1;(statearr_23340_23361[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (1)))
{var inst_23313 = (0);var state_23336__$1 = (function (){var statearr_23341 = state_23336;(statearr_23341[(8)] = inst_23313);
return statearr_23341;
})();var statearr_23342_23362 = state_23336__$1;(statearr_23342_23362[(2)] = null);
(statearr_23342_23362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (4)))
{var state_23336__$1 = state_23336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23336__$1,(7),ch);
} else
{if((state_val_23337 === (6)))
{var inst_23331 = (state_23336[(2)]);var state_23336__$1 = state_23336;var statearr_23343_23363 = state_23336__$1;(statearr_23343_23363[(2)] = inst_23331);
(statearr_23343_23363[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (3)))
{var inst_23333 = (state_23336[(2)]);var inst_23334 = cljs.core.async.close_BANG_.call(null,out);var state_23336__$1 = (function (){var statearr_23344 = state_23336;(statearr_23344[(9)] = inst_23333);
return statearr_23344;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23336__$1,inst_23334);
} else
{if((state_val_23337 === (2)))
{var inst_23313 = (state_23336[(8)]);var inst_23315 = (inst_23313 < n);var state_23336__$1 = state_23336;if(cljs.core.truth_(inst_23315))
{var statearr_23345_23364 = state_23336__$1;(statearr_23345_23364[(1)] = (4));
} else
{var statearr_23346_23365 = state_23336__$1;(statearr_23346_23365[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (11)))
{var inst_23313 = (state_23336[(8)]);var inst_23323 = (state_23336[(2)]);var inst_23324 = (inst_23313 + (1));var inst_23313__$1 = inst_23324;var state_23336__$1 = (function (){var statearr_23347 = state_23336;(statearr_23347[(8)] = inst_23313__$1);
(statearr_23347[(10)] = inst_23323);
return statearr_23347;
})();var statearr_23348_23366 = state_23336__$1;(statearr_23348_23366[(2)] = null);
(statearr_23348_23366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (9)))
{var state_23336__$1 = state_23336;var statearr_23349_23367 = state_23336__$1;(statearr_23349_23367[(2)] = null);
(statearr_23349_23367[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (5)))
{var state_23336__$1 = state_23336;var statearr_23350_23368 = state_23336__$1;(statearr_23350_23368[(2)] = null);
(statearr_23350_23368[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (10)))
{var inst_23328 = (state_23336[(2)]);var state_23336__$1 = state_23336;var statearr_23351_23369 = state_23336__$1;(statearr_23351_23369[(2)] = inst_23328);
(statearr_23351_23369[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23337 === (8)))
{var inst_23318 = (state_23336[(7)]);var state_23336__$1 = state_23336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23336__$1,(11),out,inst_23318);
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
});})(c__15087__auto___23359,out))
;return ((function (switch__15072__auto__,c__15087__auto___23359,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23355 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23355[(0)] = state_machine__15073__auto__);
(statearr_23355[(1)] = (1));
return statearr_23355;
});
var state_machine__15073__auto____1 = (function (state_23336){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23336);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23356){if((e23356 instanceof Object))
{var ex__15076__auto__ = e23356;var statearr_23357_23370 = state_23336;(statearr_23357_23370[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23371 = state_23336;
state_23336 = G__23371;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23336){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23359,out))
})();var state__15089__auto__ = (function (){var statearr_23358 = f__15088__auto__.call(null);(statearr_23358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23359);
return statearr_23358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23359,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23379 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23379 = (function (ch,f,map_LT_,meta23380){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23380 = meta23380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23379.cljs$lang$type = true;
cljs.core.async.t23379.cljs$lang$ctorStr = "cljs.core.async/t23379";
cljs.core.async.t23379.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23379");
});
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23382 = (function (fn1,_,meta23380,ch,f,map_LT_,meta23383){
this.fn1 = fn1;
this._ = _;
this.meta23380 = meta23380;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23383 = meta23383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23382.cljs$lang$type = true;
cljs.core.async.t23382.cljs$lang$ctorStr = "cljs.core.async/t23382";
cljs.core.async.t23382.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23382");
});})(___$1))
;
cljs.core.async.t23382.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23372_SHARP_){return f1.call(null,(((p1__23372_SHARP_ == null))?null:self__.f.call(null,p1__23372_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23384){var self__ = this;
var _23384__$1 = this;return self__.meta23383;
});})(___$1))
;
cljs.core.async.t23382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23384,meta23383__$1){var self__ = this;
var _23384__$1 = this;return (new cljs.core.async.t23382(self__.fn1,self__._,self__.meta23380,self__.ch,self__.f,self__.map_LT_,meta23383__$1));
});})(___$1))
;
cljs.core.async.__GT_t23382 = ((function (___$1){
return (function __GT_t23382(fn1__$1,___$2,meta23380__$1,ch__$2,f__$2,map_LT___$2,meta23383){return (new cljs.core.async.t23382(fn1__$1,___$2,meta23380__$1,ch__$2,f__$2,map_LT___$2,meta23383));
});})(___$1))
;
}
return (new cljs.core.async.t23382(fn1,___$1,self__.meta23380,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12534__auto__ = ret;if(cljs.core.truth_(and__12534__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12534__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23381){var self__ = this;
var _23381__$1 = this;return self__.meta23380;
});
cljs.core.async.t23379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23381,meta23380__$1){var self__ = this;
var _23381__$1 = this;return (new cljs.core.async.t23379(self__.ch,self__.f,self__.map_LT_,meta23380__$1));
});
cljs.core.async.__GT_t23379 = (function __GT_t23379(ch__$1,f__$1,map_LT___$1,meta23380){return (new cljs.core.async.t23379(ch__$1,f__$1,map_LT___$1,meta23380));
});
}
return (new cljs.core.async.t23379(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23388 = (function (ch,f,map_GT_,meta23389){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23389 = meta23389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23388.cljs$lang$type = true;
cljs.core.async.t23388.cljs$lang$ctorStr = "cljs.core.async/t23388";
cljs.core.async.t23388.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23388");
});
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23390){var self__ = this;
var _23390__$1 = this;return self__.meta23389;
});
cljs.core.async.t23388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23390,meta23389__$1){var self__ = this;
var _23390__$1 = this;return (new cljs.core.async.t23388(self__.ch,self__.f,self__.map_GT_,meta23389__$1));
});
cljs.core.async.__GT_t23388 = (function __GT_t23388(ch__$1,f__$1,map_GT___$1,meta23389){return (new cljs.core.async.t23388(ch__$1,f__$1,map_GT___$1,meta23389));
});
}
return (new cljs.core.async.t23388(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23394 = (function (ch,p,filter_GT_,meta23395){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23395 = meta23395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23394.cljs$lang$type = true;
cljs.core.async.t23394.cljs$lang$ctorStr = "cljs.core.async/t23394";
cljs.core.async.t23394.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23394");
});
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23396){var self__ = this;
var _23396__$1 = this;return self__.meta23395;
});
cljs.core.async.t23394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23396,meta23395__$1){var self__ = this;
var _23396__$1 = this;return (new cljs.core.async.t23394(self__.ch,self__.p,self__.filter_GT_,meta23395__$1));
});
cljs.core.async.__GT_t23394 = (function __GT_t23394(ch__$1,p__$1,filter_GT___$1,meta23395){return (new cljs.core.async.t23394(ch__$1,p__$1,filter_GT___$1,meta23395));
});
}
return (new cljs.core.async.t23394(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23479 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23479,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23479,out){
return (function (state_23458){var state_val_23459 = (state_23458[(1)]);if((state_val_23459 === (7)))
{var inst_23454 = (state_23458[(2)]);var state_23458__$1 = state_23458;var statearr_23460_23480 = state_23458__$1;(statearr_23460_23480[(2)] = inst_23454);
(statearr_23460_23480[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (1)))
{var state_23458__$1 = state_23458;var statearr_23461_23481 = state_23458__$1;(statearr_23461_23481[(2)] = null);
(statearr_23461_23481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (4)))
{var inst_23440 = (state_23458[(7)]);var inst_23440__$1 = (state_23458[(2)]);var inst_23441 = (inst_23440__$1 == null);var state_23458__$1 = (function (){var statearr_23462 = state_23458;(statearr_23462[(7)] = inst_23440__$1);
return statearr_23462;
})();if(cljs.core.truth_(inst_23441))
{var statearr_23463_23482 = state_23458__$1;(statearr_23463_23482[(1)] = (5));
} else
{var statearr_23464_23483 = state_23458__$1;(statearr_23464_23483[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (6)))
{var inst_23440 = (state_23458[(7)]);var inst_23445 = p.call(null,inst_23440);var state_23458__$1 = state_23458;if(cljs.core.truth_(inst_23445))
{var statearr_23465_23484 = state_23458__$1;(statearr_23465_23484[(1)] = (8));
} else
{var statearr_23466_23485 = state_23458__$1;(statearr_23466_23485[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (3)))
{var inst_23456 = (state_23458[(2)]);var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23458__$1,inst_23456);
} else
{if((state_val_23459 === (2)))
{var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23458__$1,(4),ch);
} else
{if((state_val_23459 === (11)))
{var inst_23448 = (state_23458[(2)]);var state_23458__$1 = state_23458;var statearr_23467_23486 = state_23458__$1;(statearr_23467_23486[(2)] = inst_23448);
(statearr_23467_23486[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (9)))
{var state_23458__$1 = state_23458;var statearr_23468_23487 = state_23458__$1;(statearr_23468_23487[(2)] = null);
(statearr_23468_23487[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (5)))
{var inst_23443 = cljs.core.async.close_BANG_.call(null,out);var state_23458__$1 = state_23458;var statearr_23469_23488 = state_23458__$1;(statearr_23469_23488[(2)] = inst_23443);
(statearr_23469_23488[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (10)))
{var inst_23451 = (state_23458[(2)]);var state_23458__$1 = (function (){var statearr_23470 = state_23458;(statearr_23470[(8)] = inst_23451);
return statearr_23470;
})();var statearr_23471_23489 = state_23458__$1;(statearr_23471_23489[(2)] = null);
(statearr_23471_23489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23459 === (8)))
{var inst_23440 = (state_23458[(7)]);var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23458__$1,(11),out,inst_23440);
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
});})(c__15087__auto___23479,out))
;return ((function (switch__15072__auto__,c__15087__auto___23479,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23475 = [null,null,null,null,null,null,null,null,null];(statearr_23475[(0)] = state_machine__15073__auto__);
(statearr_23475[(1)] = (1));
return statearr_23475;
});
var state_machine__15073__auto____1 = (function (state_23458){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23458);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23476){if((e23476 instanceof Object))
{var ex__15076__auto__ = e23476;var statearr_23477_23490 = state_23458;(statearr_23477_23490[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23458);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23476;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23491 = state_23458;
state_23458 = G__23491;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23458){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23479,out))
})();var state__15089__auto__ = (function (){var statearr_23478 = f__15088__auto__.call(null);(statearr_23478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23479);
return statearr_23478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23479,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__){
return (function (state_23657){var state_val_23658 = (state_23657[(1)]);if((state_val_23658 === (7)))
{var inst_23653 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23659_23700 = state_23657__$1;(statearr_23659_23700[(2)] = inst_23653);
(statearr_23659_23700[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (20)))
{var inst_23623 = (state_23657[(7)]);var inst_23634 = (state_23657[(2)]);var inst_23635 = cljs.core.next.call(null,inst_23623);var inst_23609 = inst_23635;var inst_23610 = null;var inst_23611 = (0);var inst_23612 = (0);var state_23657__$1 = (function (){var statearr_23660 = state_23657;(statearr_23660[(8)] = inst_23609);
(statearr_23660[(9)] = inst_23634);
(statearr_23660[(10)] = inst_23610);
(statearr_23660[(11)] = inst_23612);
(statearr_23660[(12)] = inst_23611);
return statearr_23660;
})();var statearr_23661_23701 = state_23657__$1;(statearr_23661_23701[(2)] = null);
(statearr_23661_23701[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (1)))
{var state_23657__$1 = state_23657;var statearr_23662_23702 = state_23657__$1;(statearr_23662_23702[(2)] = null);
(statearr_23662_23702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (4)))
{var inst_23598 = (state_23657[(13)]);var inst_23598__$1 = (state_23657[(2)]);var inst_23599 = (inst_23598__$1 == null);var state_23657__$1 = (function (){var statearr_23663 = state_23657;(statearr_23663[(13)] = inst_23598__$1);
return statearr_23663;
})();if(cljs.core.truth_(inst_23599))
{var statearr_23664_23703 = state_23657__$1;(statearr_23664_23703[(1)] = (5));
} else
{var statearr_23665_23704 = state_23657__$1;(statearr_23665_23704[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (15)))
{var state_23657__$1 = state_23657;var statearr_23669_23705 = state_23657__$1;(statearr_23669_23705[(2)] = null);
(statearr_23669_23705[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (21)))
{var state_23657__$1 = state_23657;var statearr_23670_23706 = state_23657__$1;(statearr_23670_23706[(2)] = null);
(statearr_23670_23706[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (13)))
{var inst_23609 = (state_23657[(8)]);var inst_23610 = (state_23657[(10)]);var inst_23612 = (state_23657[(11)]);var inst_23611 = (state_23657[(12)]);var inst_23619 = (state_23657[(2)]);var inst_23620 = (inst_23612 + (1));var tmp23666 = inst_23609;var tmp23667 = inst_23610;var tmp23668 = inst_23611;var inst_23609__$1 = tmp23666;var inst_23610__$1 = tmp23667;var inst_23611__$1 = tmp23668;var inst_23612__$1 = inst_23620;var state_23657__$1 = (function (){var statearr_23671 = state_23657;(statearr_23671[(8)] = inst_23609__$1);
(statearr_23671[(14)] = inst_23619);
(statearr_23671[(10)] = inst_23610__$1);
(statearr_23671[(11)] = inst_23612__$1);
(statearr_23671[(12)] = inst_23611__$1);
return statearr_23671;
})();var statearr_23672_23707 = state_23657__$1;(statearr_23672_23707[(2)] = null);
(statearr_23672_23707[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (22)))
{var state_23657__$1 = state_23657;var statearr_23673_23708 = state_23657__$1;(statearr_23673_23708[(2)] = null);
(statearr_23673_23708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (6)))
{var inst_23598 = (state_23657[(13)]);var inst_23607 = f.call(null,inst_23598);var inst_23608 = cljs.core.seq.call(null,inst_23607);var inst_23609 = inst_23608;var inst_23610 = null;var inst_23611 = (0);var inst_23612 = (0);var state_23657__$1 = (function (){var statearr_23674 = state_23657;(statearr_23674[(8)] = inst_23609);
(statearr_23674[(10)] = inst_23610);
(statearr_23674[(11)] = inst_23612);
(statearr_23674[(12)] = inst_23611);
return statearr_23674;
})();var statearr_23675_23709 = state_23657__$1;(statearr_23675_23709[(2)] = null);
(statearr_23675_23709[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (17)))
{var inst_23623 = (state_23657[(7)]);var inst_23627 = cljs.core.chunk_first.call(null,inst_23623);var inst_23628 = cljs.core.chunk_rest.call(null,inst_23623);var inst_23629 = cljs.core.count.call(null,inst_23627);var inst_23609 = inst_23628;var inst_23610 = inst_23627;var inst_23611 = inst_23629;var inst_23612 = (0);var state_23657__$1 = (function (){var statearr_23676 = state_23657;(statearr_23676[(8)] = inst_23609);
(statearr_23676[(10)] = inst_23610);
(statearr_23676[(11)] = inst_23612);
(statearr_23676[(12)] = inst_23611);
return statearr_23676;
})();var statearr_23677_23710 = state_23657__$1;(statearr_23677_23710[(2)] = null);
(statearr_23677_23710[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (3)))
{var inst_23655 = (state_23657[(2)]);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23657__$1,inst_23655);
} else
{if((state_val_23658 === (12)))
{var inst_23643 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23678_23711 = state_23657__$1;(statearr_23678_23711[(2)] = inst_23643);
(statearr_23678_23711[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (2)))
{var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23657__$1,(4),in$);
} else
{if((state_val_23658 === (23)))
{var inst_23651 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23679_23712 = state_23657__$1;(statearr_23679_23712[(2)] = inst_23651);
(statearr_23679_23712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (19)))
{var inst_23638 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23680_23713 = state_23657__$1;(statearr_23680_23713[(2)] = inst_23638);
(statearr_23680_23713[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (11)))
{var inst_23609 = (state_23657[(8)]);var inst_23623 = (state_23657[(7)]);var inst_23623__$1 = cljs.core.seq.call(null,inst_23609);var state_23657__$1 = (function (){var statearr_23681 = state_23657;(statearr_23681[(7)] = inst_23623__$1);
return statearr_23681;
})();if(inst_23623__$1)
{var statearr_23682_23714 = state_23657__$1;(statearr_23682_23714[(1)] = (14));
} else
{var statearr_23683_23715 = state_23657__$1;(statearr_23683_23715[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (9)))
{var inst_23645 = (state_23657[(2)]);var inst_23646 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23657__$1 = (function (){var statearr_23684 = state_23657;(statearr_23684[(15)] = inst_23645);
return statearr_23684;
})();if(cljs.core.truth_(inst_23646))
{var statearr_23685_23716 = state_23657__$1;(statearr_23685_23716[(1)] = (21));
} else
{var statearr_23686_23717 = state_23657__$1;(statearr_23686_23717[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (5)))
{var inst_23601 = cljs.core.async.close_BANG_.call(null,out);var state_23657__$1 = state_23657;var statearr_23687_23718 = state_23657__$1;(statearr_23687_23718[(2)] = inst_23601);
(statearr_23687_23718[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (14)))
{var inst_23623 = (state_23657[(7)]);var inst_23625 = cljs.core.chunked_seq_QMARK_.call(null,inst_23623);var state_23657__$1 = state_23657;if(inst_23625)
{var statearr_23688_23719 = state_23657__$1;(statearr_23688_23719[(1)] = (17));
} else
{var statearr_23689_23720 = state_23657__$1;(statearr_23689_23720[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (16)))
{var inst_23641 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23690_23721 = state_23657__$1;(statearr_23690_23721[(2)] = inst_23641);
(statearr_23690_23721[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (10)))
{var inst_23610 = (state_23657[(10)]);var inst_23612 = (state_23657[(11)]);var inst_23617 = cljs.core._nth.call(null,inst_23610,inst_23612);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23657__$1,(13),out,inst_23617);
} else
{if((state_val_23658 === (18)))
{var inst_23623 = (state_23657[(7)]);var inst_23632 = cljs.core.first.call(null,inst_23623);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23657__$1,(20),out,inst_23632);
} else
{if((state_val_23658 === (8)))
{var inst_23612 = (state_23657[(11)]);var inst_23611 = (state_23657[(12)]);var inst_23614 = (inst_23612 < inst_23611);var inst_23615 = inst_23614;var state_23657__$1 = state_23657;if(cljs.core.truth_(inst_23615))
{var statearr_23691_23722 = state_23657__$1;(statearr_23691_23722[(1)] = (10));
} else
{var statearr_23692_23723 = state_23657__$1;(statearr_23692_23723[(1)] = (11));
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
});})(c__15087__auto__))
;return ((function (switch__15072__auto__,c__15087__auto__){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23696[(0)] = state_machine__15073__auto__);
(statearr_23696[(1)] = (1));
return statearr_23696;
});
var state_machine__15073__auto____1 = (function (state_23657){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23657);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23697){if((e23697 instanceof Object))
{var ex__15076__auto__ = e23697;var statearr_23698_23724 = state_23657;(statearr_23698_23724[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23725 = state_23657;
state_23657 = G__23725;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23657){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_23699 = f__15088__auto__.call(null);(statearr_23699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_23699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto__))
);
return c__15087__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23822,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23822,out){
return (function (state_23797){var state_val_23798 = (state_23797[(1)]);if((state_val_23798 === (7)))
{var inst_23792 = (state_23797[(2)]);var state_23797__$1 = state_23797;var statearr_23799_23823 = state_23797__$1;(statearr_23799_23823[(2)] = inst_23792);
(statearr_23799_23823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (1)))
{var inst_23774 = null;var state_23797__$1 = (function (){var statearr_23800 = state_23797;(statearr_23800[(7)] = inst_23774);
return statearr_23800;
})();var statearr_23801_23824 = state_23797__$1;(statearr_23801_23824[(2)] = null);
(statearr_23801_23824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (4)))
{var inst_23777 = (state_23797[(8)]);var inst_23777__$1 = (state_23797[(2)]);var inst_23778 = (inst_23777__$1 == null);var inst_23779 = cljs.core.not.call(null,inst_23778);var state_23797__$1 = (function (){var statearr_23802 = state_23797;(statearr_23802[(8)] = inst_23777__$1);
return statearr_23802;
})();if(inst_23779)
{var statearr_23803_23825 = state_23797__$1;(statearr_23803_23825[(1)] = (5));
} else
{var statearr_23804_23826 = state_23797__$1;(statearr_23804_23826[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (6)))
{var state_23797__$1 = state_23797;var statearr_23805_23827 = state_23797__$1;(statearr_23805_23827[(2)] = null);
(statearr_23805_23827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (3)))
{var inst_23794 = (state_23797[(2)]);var inst_23795 = cljs.core.async.close_BANG_.call(null,out);var state_23797__$1 = (function (){var statearr_23806 = state_23797;(statearr_23806[(9)] = inst_23794);
return statearr_23806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23797__$1,inst_23795);
} else
{if((state_val_23798 === (2)))
{var state_23797__$1 = state_23797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23797__$1,(4),ch);
} else
{if((state_val_23798 === (11)))
{var inst_23777 = (state_23797[(8)]);var inst_23786 = (state_23797[(2)]);var inst_23774 = inst_23777;var state_23797__$1 = (function (){var statearr_23807 = state_23797;(statearr_23807[(10)] = inst_23786);
(statearr_23807[(7)] = inst_23774);
return statearr_23807;
})();var statearr_23808_23828 = state_23797__$1;(statearr_23808_23828[(2)] = null);
(statearr_23808_23828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (9)))
{var inst_23777 = (state_23797[(8)]);var state_23797__$1 = state_23797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23797__$1,(11),out,inst_23777);
} else
{if((state_val_23798 === (5)))
{var inst_23777 = (state_23797[(8)]);var inst_23774 = (state_23797[(7)]);var inst_23781 = cljs.core._EQ_.call(null,inst_23777,inst_23774);var state_23797__$1 = state_23797;if(inst_23781)
{var statearr_23810_23829 = state_23797__$1;(statearr_23810_23829[(1)] = (8));
} else
{var statearr_23811_23830 = state_23797__$1;(statearr_23811_23830[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (10)))
{var inst_23789 = (state_23797[(2)]);var state_23797__$1 = state_23797;var statearr_23812_23831 = state_23797__$1;(statearr_23812_23831[(2)] = inst_23789);
(statearr_23812_23831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23798 === (8)))
{var inst_23774 = (state_23797[(7)]);var tmp23809 = inst_23774;var inst_23774__$1 = tmp23809;var state_23797__$1 = (function (){var statearr_23813 = state_23797;(statearr_23813[(7)] = inst_23774__$1);
return statearr_23813;
})();var statearr_23814_23832 = state_23797__$1;(statearr_23814_23832[(2)] = null);
(statearr_23814_23832[(1)] = (2));
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
});})(c__15087__auto___23822,out))
;return ((function (switch__15072__auto__,c__15087__auto___23822,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23818 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23818[(0)] = state_machine__15073__auto__);
(statearr_23818[(1)] = (1));
return statearr_23818;
});
var state_machine__15073__auto____1 = (function (state_23797){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23797);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23819){if((e23819 instanceof Object))
{var ex__15076__auto__ = e23819;var statearr_23820_23833 = state_23797;(statearr_23820_23833[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23834 = state_23797;
state_23797 = G__23834;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23797){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23822,out))
})();var state__15089__auto__ = (function (){var statearr_23821 = f__15088__auto__.call(null);(statearr_23821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23822);
return statearr_23821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23822,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23969 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23969,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23969,out){
return (function (state_23939){var state_val_23940 = (state_23939[(1)]);if((state_val_23940 === (7)))
{var inst_23935 = (state_23939[(2)]);var state_23939__$1 = state_23939;var statearr_23941_23970 = state_23939__$1;(statearr_23941_23970[(2)] = inst_23935);
(statearr_23941_23970[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (1)))
{var inst_23902 = (new Array(n));var inst_23903 = inst_23902;var inst_23904 = (0);var state_23939__$1 = (function (){var statearr_23942 = state_23939;(statearr_23942[(7)] = inst_23904);
(statearr_23942[(8)] = inst_23903);
return statearr_23942;
})();var statearr_23943_23971 = state_23939__$1;(statearr_23943_23971[(2)] = null);
(statearr_23943_23971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (4)))
{var inst_23907 = (state_23939[(9)]);var inst_23907__$1 = (state_23939[(2)]);var inst_23908 = (inst_23907__$1 == null);var inst_23909 = cljs.core.not.call(null,inst_23908);var state_23939__$1 = (function (){var statearr_23944 = state_23939;(statearr_23944[(9)] = inst_23907__$1);
return statearr_23944;
})();if(inst_23909)
{var statearr_23945_23972 = state_23939__$1;(statearr_23945_23972[(1)] = (5));
} else
{var statearr_23946_23973 = state_23939__$1;(statearr_23946_23973[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (15)))
{var inst_23929 = (state_23939[(2)]);var state_23939__$1 = state_23939;var statearr_23947_23974 = state_23939__$1;(statearr_23947_23974[(2)] = inst_23929);
(statearr_23947_23974[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (13)))
{var state_23939__$1 = state_23939;var statearr_23948_23975 = state_23939__$1;(statearr_23948_23975[(2)] = null);
(statearr_23948_23975[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (6)))
{var inst_23904 = (state_23939[(7)]);var inst_23925 = (inst_23904 > (0));var state_23939__$1 = state_23939;if(cljs.core.truth_(inst_23925))
{var statearr_23949_23976 = state_23939__$1;(statearr_23949_23976[(1)] = (12));
} else
{var statearr_23950_23977 = state_23939__$1;(statearr_23950_23977[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (3)))
{var inst_23937 = (state_23939[(2)]);var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else
{if((state_val_23940 === (12)))
{var inst_23903 = (state_23939[(8)]);var inst_23927 = cljs.core.vec.call(null,inst_23903);var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23939__$1,(15),out,inst_23927);
} else
{if((state_val_23940 === (2)))
{var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(4),ch);
} else
{if((state_val_23940 === (11)))
{var inst_23919 = (state_23939[(2)]);var inst_23920 = (new Array(n));var inst_23903 = inst_23920;var inst_23904 = (0);var state_23939__$1 = (function (){var statearr_23951 = state_23939;(statearr_23951[(7)] = inst_23904);
(statearr_23951[(8)] = inst_23903);
(statearr_23951[(10)] = inst_23919);
return statearr_23951;
})();var statearr_23952_23978 = state_23939__$1;(statearr_23952_23978[(2)] = null);
(statearr_23952_23978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (9)))
{var inst_23903 = (state_23939[(8)]);var inst_23917 = cljs.core.vec.call(null,inst_23903);var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23939__$1,(11),out,inst_23917);
} else
{if((state_val_23940 === (5)))
{var inst_23904 = (state_23939[(7)]);var inst_23903 = (state_23939[(8)]);var inst_23907 = (state_23939[(9)]);var inst_23912 = (state_23939[(11)]);var inst_23911 = (inst_23903[inst_23904] = inst_23907);var inst_23912__$1 = (inst_23904 + (1));var inst_23913 = (inst_23912__$1 < n);var state_23939__$1 = (function (){var statearr_23953 = state_23939;(statearr_23953[(11)] = inst_23912__$1);
(statearr_23953[(12)] = inst_23911);
return statearr_23953;
})();if(cljs.core.truth_(inst_23913))
{var statearr_23954_23979 = state_23939__$1;(statearr_23954_23979[(1)] = (8));
} else
{var statearr_23955_23980 = state_23939__$1;(statearr_23955_23980[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (14)))
{var inst_23932 = (state_23939[(2)]);var inst_23933 = cljs.core.async.close_BANG_.call(null,out);var state_23939__$1 = (function (){var statearr_23957 = state_23939;(statearr_23957[(13)] = inst_23932);
return statearr_23957;
})();var statearr_23958_23981 = state_23939__$1;(statearr_23958_23981[(2)] = inst_23933);
(statearr_23958_23981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (10)))
{var inst_23923 = (state_23939[(2)]);var state_23939__$1 = state_23939;var statearr_23959_23982 = state_23939__$1;(statearr_23959_23982[(2)] = inst_23923);
(statearr_23959_23982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (8)))
{var inst_23903 = (state_23939[(8)]);var inst_23912 = (state_23939[(11)]);var tmp23956 = inst_23903;var inst_23903__$1 = tmp23956;var inst_23904 = inst_23912;var state_23939__$1 = (function (){var statearr_23960 = state_23939;(statearr_23960[(7)] = inst_23904);
(statearr_23960[(8)] = inst_23903__$1);
return statearr_23960;
})();var statearr_23961_23983 = state_23939__$1;(statearr_23961_23983[(2)] = null);
(statearr_23961_23983[(1)] = (2));
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
});})(c__15087__auto___23969,out))
;return ((function (switch__15072__auto__,c__15087__auto___23969,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23965[(0)] = state_machine__15073__auto__);
(statearr_23965[(1)] = (1));
return statearr_23965;
});
var state_machine__15073__auto____1 = (function (state_23939){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23939);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23966){if((e23966 instanceof Object))
{var ex__15076__auto__ = e23966;var statearr_23967_23984 = state_23939;(statearr_23967_23984[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23966;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23985 = state_23939;
state_23939 = G__23985;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23969,out))
})();var state__15089__auto__ = (function (){var statearr_23968 = f__15088__auto__.call(null);(statearr_23968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23969);
return statearr_23968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23969,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___24128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___24128,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___24128,out){
return (function (state_24098){var state_val_24099 = (state_24098[(1)]);if((state_val_24099 === (7)))
{var inst_24094 = (state_24098[(2)]);var state_24098__$1 = state_24098;var statearr_24100_24129 = state_24098__$1;(statearr_24100_24129[(2)] = inst_24094);
(statearr_24100_24129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (1)))
{var inst_24057 = [];var inst_24058 = inst_24057;var inst_24059 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_24098__$1 = (function (){var statearr_24101 = state_24098;(statearr_24101[(7)] = inst_24058);
(statearr_24101[(8)] = inst_24059);
return statearr_24101;
})();var statearr_24102_24130 = state_24098__$1;(statearr_24102_24130[(2)] = null);
(statearr_24102_24130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (4)))
{var inst_24062 = (state_24098[(9)]);var inst_24062__$1 = (state_24098[(2)]);var inst_24063 = (inst_24062__$1 == null);var inst_24064 = cljs.core.not.call(null,inst_24063);var state_24098__$1 = (function (){var statearr_24103 = state_24098;(statearr_24103[(9)] = inst_24062__$1);
return statearr_24103;
})();if(inst_24064)
{var statearr_24104_24131 = state_24098__$1;(statearr_24104_24131[(1)] = (5));
} else
{var statearr_24105_24132 = state_24098__$1;(statearr_24105_24132[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (15)))
{var inst_24088 = (state_24098[(2)]);var state_24098__$1 = state_24098;var statearr_24106_24133 = state_24098__$1;(statearr_24106_24133[(2)] = inst_24088);
(statearr_24106_24133[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (13)))
{var state_24098__$1 = state_24098;var statearr_24107_24134 = state_24098__$1;(statearr_24107_24134[(2)] = null);
(statearr_24107_24134[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (6)))
{var inst_24058 = (state_24098[(7)]);var inst_24083 = inst_24058.length;var inst_24084 = (inst_24083 > (0));var state_24098__$1 = state_24098;if(cljs.core.truth_(inst_24084))
{var statearr_24108_24135 = state_24098__$1;(statearr_24108_24135[(1)] = (12));
} else
{var statearr_24109_24136 = state_24098__$1;(statearr_24109_24136[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (3)))
{var inst_24096 = (state_24098[(2)]);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24098__$1,inst_24096);
} else
{if((state_val_24099 === (12)))
{var inst_24058 = (state_24098[(7)]);var inst_24086 = cljs.core.vec.call(null,inst_24058);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24098__$1,(15),out,inst_24086);
} else
{if((state_val_24099 === (2)))
{var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24098__$1,(4),ch);
} else
{if((state_val_24099 === (11)))
{var inst_24062 = (state_24098[(9)]);var inst_24066 = (state_24098[(10)]);var inst_24076 = (state_24098[(2)]);var inst_24077 = [];var inst_24078 = inst_24077.push(inst_24062);var inst_24058 = inst_24077;var inst_24059 = inst_24066;var state_24098__$1 = (function (){var statearr_24110 = state_24098;(statearr_24110[(7)] = inst_24058);
(statearr_24110[(11)] = inst_24078);
(statearr_24110[(12)] = inst_24076);
(statearr_24110[(8)] = inst_24059);
return statearr_24110;
})();var statearr_24111_24137 = state_24098__$1;(statearr_24111_24137[(2)] = null);
(statearr_24111_24137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (9)))
{var inst_24058 = (state_24098[(7)]);var inst_24074 = cljs.core.vec.call(null,inst_24058);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24098__$1,(11),out,inst_24074);
} else
{if((state_val_24099 === (5)))
{var inst_24059 = (state_24098[(8)]);var inst_24062 = (state_24098[(9)]);var inst_24066 = (state_24098[(10)]);var inst_24066__$1 = f.call(null,inst_24062);var inst_24067 = cljs.core._EQ_.call(null,inst_24066__$1,inst_24059);var inst_24068 = cljs.core.keyword_identical_QMARK_.call(null,inst_24059,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_24069 = (inst_24067) || (inst_24068);var state_24098__$1 = (function (){var statearr_24112 = state_24098;(statearr_24112[(10)] = inst_24066__$1);
return statearr_24112;
})();if(cljs.core.truth_(inst_24069))
{var statearr_24113_24138 = state_24098__$1;(statearr_24113_24138[(1)] = (8));
} else
{var statearr_24114_24139 = state_24098__$1;(statearr_24114_24139[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (14)))
{var inst_24091 = (state_24098[(2)]);var inst_24092 = cljs.core.async.close_BANG_.call(null,out);var state_24098__$1 = (function (){var statearr_24116 = state_24098;(statearr_24116[(13)] = inst_24091);
return statearr_24116;
})();var statearr_24117_24140 = state_24098__$1;(statearr_24117_24140[(2)] = inst_24092);
(statearr_24117_24140[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (10)))
{var inst_24081 = (state_24098[(2)]);var state_24098__$1 = state_24098;var statearr_24118_24141 = state_24098__$1;(statearr_24118_24141[(2)] = inst_24081);
(statearr_24118_24141[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (8)))
{var inst_24058 = (state_24098[(7)]);var inst_24062 = (state_24098[(9)]);var inst_24066 = (state_24098[(10)]);var inst_24071 = inst_24058.push(inst_24062);var tmp24115 = inst_24058;var inst_24058__$1 = tmp24115;var inst_24059 = inst_24066;var state_24098__$1 = (function (){var statearr_24119 = state_24098;(statearr_24119[(7)] = inst_24058__$1);
(statearr_24119[(14)] = inst_24071);
(statearr_24119[(8)] = inst_24059);
return statearr_24119;
})();var statearr_24120_24142 = state_24098__$1;(statearr_24120_24142[(2)] = null);
(statearr_24120_24142[(1)] = (2));
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
});})(c__15087__auto___24128,out))
;return ((function (switch__15072__auto__,c__15087__auto___24128,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_24124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24124[(0)] = state_machine__15073__auto__);
(statearr_24124[(1)] = (1));
return statearr_24124;
});
var state_machine__15073__auto____1 = (function (state_24098){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_24098);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e24125){if((e24125 instanceof Object))
{var ex__15076__auto__ = e24125;var statearr_24126_24143 = state_24098;(statearr_24126_24143[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24098);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24144 = state_24098;
state_24098 = G__24144;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_24098){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_24098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___24128,out))
})();var state__15089__auto__ = (function (){var statearr_24127 = f__15088__auto__.call(null);(statearr_24127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___24128);
return statearr_24127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___24128,out))
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