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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23904 = (function (f,fn_handler,meta23905){
this.f = f;
this.fn_handler = fn_handler;
this.meta23905 = meta23905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23904.cljs$lang$type = true;
cljs.core.async.t23904.cljs$lang$ctorStr = "cljs.core.async/t23904";
cljs.core.async.t23904.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23904");
});
cljs.core.async.t23904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23906){var self__ = this;
var _23906__$1 = this;return self__.meta23905;
});
cljs.core.async.t23904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23906,meta23905__$1){var self__ = this;
var _23906__$1 = this;return (new cljs.core.async.t23904(self__.f,self__.fn_handler,meta23905__$1));
});
cljs.core.async.__GT_t23904 = (function __GT_t23904(f__$1,fn_handler__$1,meta23905){return (new cljs.core.async.t23904(f__$1,fn_handler__$1,meta23905));
});
}
return (new cljs.core.async.t23904(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23908 = buff;if(G__23908)
{var bit__13211__auto__ = null;if(cljs.core.truth_((function (){var or__12547__auto__ = bit__13211__auto__;if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{return G__23908.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23908.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23908);
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
{var val_23909 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23909);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23909,ret){
return (function (){return fn1.call(null,val_23909);
});})(val_23909,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13417__auto___23910 = n;var x_23911 = (0);while(true){
if((x_23911 < n__13417__auto___23910))
{(a[x_23911] = (0));
{
var G__23912 = (x_23911 + (1));
x_23911 = G__23912;
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
var G__23913 = (i + (1));
i = G__23913;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23917 = (function (flag,alt_flag,meta23918){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23918 = meta23918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23917.cljs$lang$type = true;
cljs.core.async.t23917.cljs$lang$ctorStr = "cljs.core.async/t23917";
cljs.core.async.t23917.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23917");
});})(flag))
;
cljs.core.async.t23917.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23919){var self__ = this;
var _23919__$1 = this;return self__.meta23918;
});})(flag))
;
cljs.core.async.t23917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23919,meta23918__$1){var self__ = this;
var _23919__$1 = this;return (new cljs.core.async.t23917(self__.flag,self__.alt_flag,meta23918__$1));
});})(flag))
;
cljs.core.async.__GT_t23917 = ((function (flag){
return (function __GT_t23917(flag__$1,alt_flag__$1,meta23918){return (new cljs.core.async.t23917(flag__$1,alt_flag__$1,meta23918));
});})(flag))
;
}
return (new cljs.core.async.t23917(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23923 = (function (cb,flag,alt_handler,meta23924){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23924 = meta23924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23923.cljs$lang$type = true;
cljs.core.async.t23923.cljs$lang$ctorStr = "cljs.core.async/t23923";
cljs.core.async.t23923.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23923");
});
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23925){var self__ = this;
var _23925__$1 = this;return self__.meta23924;
});
cljs.core.async.t23923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23925,meta23924__$1){var self__ = this;
var _23925__$1 = this;return (new cljs.core.async.t23923(self__.cb,self__.flag,self__.alt_handler,meta23924__$1));
});
cljs.core.async.__GT_t23923 = (function __GT_t23923(cb__$1,flag__$1,alt_handler__$1,meta23924){return (new cljs.core.async.t23923(cb__$1,flag__$1,alt_handler__$1,meta23924));
});
}
return (new cljs.core.async.t23923(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23926_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23926_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23927_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23927_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12547__auto__ = wport;if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23928 = (i + (1));
i = G__23928;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12547__auto__ = ret;if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__12535__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12535__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12535__auto__;
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
var alts_BANG___delegate = function (ports,p__23929){var map__23931 = p__23929;var map__23931__$1 = ((cljs.core.seq_QMARK_.call(null,map__23931))?cljs.core.apply.call(null,cljs.core.hash_map,map__23931):map__23931);var opts = map__23931__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23929 = null;if (arguments.length > 1) {
  p__23929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23929);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23932){
var ports = cljs.core.first(arglist__23932);
var p__23929 = cljs.core.rest(arglist__23932);
return alts_BANG___delegate(ports,p__23929);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15766__auto___24027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___24027){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___24027){
return (function (state_24003){var state_val_24004 = (state_24003[(1)]);if((state_val_24004 === (7)))
{var inst_23999 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24005_24028 = state_24003__$1;(statearr_24005_24028[(2)] = inst_23999);
(statearr_24005_24028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (1)))
{var state_24003__$1 = state_24003;var statearr_24006_24029 = state_24003__$1;(statearr_24006_24029[(2)] = null);
(statearr_24006_24029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (4)))
{var inst_23982 = (state_24003[(7)]);var inst_23982__$1 = (state_24003[(2)]);var inst_23983 = (inst_23982__$1 == null);var state_24003__$1 = (function (){var statearr_24007 = state_24003;(statearr_24007[(7)] = inst_23982__$1);
return statearr_24007;
})();if(cljs.core.truth_(inst_23983))
{var statearr_24008_24030 = state_24003__$1;(statearr_24008_24030[(1)] = (5));
} else
{var statearr_24009_24031 = state_24003__$1;(statearr_24009_24031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (13)))
{var state_24003__$1 = state_24003;var statearr_24010_24032 = state_24003__$1;(statearr_24010_24032[(2)] = null);
(statearr_24010_24032[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (6)))
{var inst_23982 = (state_24003[(7)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24003__$1,(11),to,inst_23982);
} else
{if((state_val_24004 === (3)))
{var inst_24001 = (state_24003[(2)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else
{if((state_val_24004 === (12)))
{var state_24003__$1 = state_24003;var statearr_24011_24033 = state_24003__$1;(statearr_24011_24033[(2)] = null);
(statearr_24011_24033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (2)))
{var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(4),from);
} else
{if((state_val_24004 === (11)))
{var inst_23992 = (state_24003[(2)]);var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23992))
{var statearr_24012_24034 = state_24003__$1;(statearr_24012_24034[(1)] = (12));
} else
{var statearr_24013_24035 = state_24003__$1;(statearr_24013_24035[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (9)))
{var state_24003__$1 = state_24003;var statearr_24014_24036 = state_24003__$1;(statearr_24014_24036[(2)] = null);
(statearr_24014_24036[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (5)))
{var state_24003__$1 = state_24003;if(cljs.core.truth_(close_QMARK_))
{var statearr_24015_24037 = state_24003__$1;(statearr_24015_24037[(1)] = (8));
} else
{var statearr_24016_24038 = state_24003__$1;(statearr_24016_24038[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (14)))
{var inst_23997 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24017_24039 = state_24003__$1;(statearr_24017_24039[(2)] = inst_23997);
(statearr_24017_24039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (10)))
{var inst_23989 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24018_24040 = state_24003__$1;(statearr_24018_24040[(2)] = inst_23989);
(statearr_24018_24040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (8)))
{var inst_23986 = cljs.core.async.close_BANG_.call(null,to);var state_24003__$1 = state_24003;var statearr_24019_24041 = state_24003__$1;(statearr_24019_24041[(2)] = inst_23986);
(statearr_24019_24041[(1)] = (10));
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
});})(c__15766__auto___24027))
;return ((function (switch__15710__auto__,c__15766__auto___24027){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24023 = [null,null,null,null,null,null,null,null];(statearr_24023[(0)] = state_machine__15711__auto__);
(statearr_24023[(1)] = (1));
return statearr_24023;
});
var state_machine__15711__auto____1 = (function (state_24003){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24003);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object))
{var ex__15714__auto__ = e24024;var statearr_24025_24042 = state_24003;(statearr_24025_24042[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24043 = state_24003;
state_24003 = G__24043;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___24027))
})();var state__15768__auto__ = (function (){var statearr_24026 = f__15767__auto__.call(null);(statearr_24026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24027);
return statearr_24026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___24027))
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
return (function (p__24227){var vec__24228 = p__24227;var v = cljs.core.nth.call(null,vec__24228,(0),null);var p = cljs.core.nth.call(null,vec__24228,(1),null);var job = vec__24228;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15766__auto___24410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results){
return (function (state_24233){var state_val_24234 = (state_24233[(1)]);if((state_val_24234 === (2)))
{var inst_24230 = (state_24233[(2)]);var inst_24231 = cljs.core.async.close_BANG_.call(null,res);var state_24233__$1 = (function (){var statearr_24235 = state_24233;(statearr_24235[(7)] = inst_24230);
return statearr_24235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24233__$1,inst_24231);
} else
{if((state_val_24234 === (1)))
{var state_24233__$1 = state_24233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24233__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results))
;return ((function (switch__15710__auto__,c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24239 = [null,null,null,null,null,null,null,null];(statearr_24239[(0)] = state_machine__15711__auto__);
(statearr_24239[(1)] = (1));
return statearr_24239;
});
var state_machine__15711__auto____1 = (function (state_24233){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24233);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object))
{var ex__15714__auto__ = e24240;var statearr_24241_24411 = state_24233;(statearr_24241_24411[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24412 = state_24233;
state_24233 = G__24412;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24233){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results))
})();var state__15768__auto__ = (function (){var statearr_24242 = f__15767__auto__.call(null);(statearr_24242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24410);
return statearr_24242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___24410,res,vec__24228,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__24243){var vec__24244 = p__24243;var v = cljs.core.nth.call(null,vec__24244,(0),null);var p = cljs.core.nth.call(null,vec__24244,(1),null);var job = vec__24244;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13417__auto___24413 = n;var __24414 = (0);while(true){
if((__24414 < n__13417__auto___24413))
{var G__24245_24415 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__24245_24415) {
case "async":
var c__15766__auto___24417 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24414,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (__24414,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function (state_24258){var state_val_24259 = (state_24258[(1)]);if((state_val_24259 === (7)))
{var inst_24254 = (state_24258[(2)]);var state_24258__$1 = state_24258;var statearr_24260_24418 = state_24258__$1;(statearr_24260_24418[(2)] = inst_24254);
(statearr_24260_24418[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24259 === (6)))
{var state_24258__$1 = state_24258;var statearr_24261_24419 = state_24258__$1;(statearr_24261_24419[(2)] = null);
(statearr_24261_24419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24259 === (5)))
{var state_24258__$1 = state_24258;var statearr_24262_24420 = state_24258__$1;(statearr_24262_24420[(2)] = null);
(statearr_24262_24420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24259 === (4)))
{var inst_24248 = (state_24258[(2)]);var inst_24249 = async.call(null,inst_24248);var state_24258__$1 = state_24258;if(cljs.core.truth_(inst_24249))
{var statearr_24263_24421 = state_24258__$1;(statearr_24263_24421[(1)] = (5));
} else
{var statearr_24264_24422 = state_24258__$1;(statearr_24264_24422[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24259 === (3)))
{var inst_24256 = (state_24258[(2)]);var state_24258__$1 = state_24258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24258__$1,inst_24256);
} else
{if((state_val_24259 === (2)))
{var state_24258__$1 = state_24258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24258__$1,(4),jobs);
} else
{if((state_val_24259 === (1)))
{var state_24258__$1 = state_24258;var statearr_24265_24423 = state_24258__$1;(statearr_24265_24423[(2)] = null);
(statearr_24265_24423[(1)] = (2));
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
});})(__24414,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
;return ((function (__24414,switch__15710__auto__,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24269 = [null,null,null,null,null,null,null];(statearr_24269[(0)] = state_machine__15711__auto__);
(statearr_24269[(1)] = (1));
return statearr_24269;
});
var state_machine__15711__auto____1 = (function (state_24258){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24258);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object))
{var ex__15714__auto__ = e24270;var statearr_24271_24424 = state_24258;(statearr_24271_24424[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24425 = state_24258;
state_24258 = G__24425;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24258){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(__24414,switch__15710__auto__,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
})();var state__15768__auto__ = (function (){var statearr_24272 = f__15767__auto__.call(null);(statearr_24272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24417);
return statearr_24272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(__24414,c__15766__auto___24417,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
);

break;
case "compute":
var c__15766__auto___24426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24414,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (__24414,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function (state_24285){var state_val_24286 = (state_24285[(1)]);if((state_val_24286 === (7)))
{var inst_24281 = (state_24285[(2)]);var state_24285__$1 = state_24285;var statearr_24287_24427 = state_24285__$1;(statearr_24287_24427[(2)] = inst_24281);
(statearr_24287_24427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24286 === (6)))
{var state_24285__$1 = state_24285;var statearr_24288_24428 = state_24285__$1;(statearr_24288_24428[(2)] = null);
(statearr_24288_24428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24286 === (5)))
{var state_24285__$1 = state_24285;var statearr_24289_24429 = state_24285__$1;(statearr_24289_24429[(2)] = null);
(statearr_24289_24429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24286 === (4)))
{var inst_24275 = (state_24285[(2)]);var inst_24276 = process.call(null,inst_24275);var state_24285__$1 = state_24285;if(cljs.core.truth_(inst_24276))
{var statearr_24290_24430 = state_24285__$1;(statearr_24290_24430[(1)] = (5));
} else
{var statearr_24291_24431 = state_24285__$1;(statearr_24291_24431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24286 === (3)))
{var inst_24283 = (state_24285[(2)]);var state_24285__$1 = state_24285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24285__$1,inst_24283);
} else
{if((state_val_24286 === (2)))
{var state_24285__$1 = state_24285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(4),jobs);
} else
{if((state_val_24286 === (1)))
{var state_24285__$1 = state_24285;var statearr_24292_24432 = state_24285__$1;(statearr_24292_24432[(2)] = null);
(statearr_24292_24432[(1)] = (2));
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
});})(__24414,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
;return ((function (__24414,switch__15710__auto__,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24296 = [null,null,null,null,null,null,null];(statearr_24296[(0)] = state_machine__15711__auto__);
(statearr_24296[(1)] = (1));
return statearr_24296;
});
var state_machine__15711__auto____1 = (function (state_24285){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24285);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24297){if((e24297 instanceof Object))
{var ex__15714__auto__ = e24297;var statearr_24298_24433 = state_24285;(statearr_24298_24433[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24434 = state_24285;
state_24285 = G__24434;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24285){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(__24414,switch__15710__auto__,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
})();var state__15768__auto__ = (function (){var statearr_24299 = f__15767__auto__.call(null);(statearr_24299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24426);
return statearr_24299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(__24414,c__15766__auto___24426,G__24245_24415,n__13417__auto___24413,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24435 = (__24414 + (1));
__24414 = G__24435;
continue;
}
} else
{}
break;
}
var c__15766__auto___24436 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___24436,jobs,results,process,async){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___24436,jobs,results,process,async){
return (function (state_24321){var state_val_24322 = (state_24321[(1)]);if((state_val_24322 === (9)))
{var inst_24314 = (state_24321[(2)]);var state_24321__$1 = (function (){var statearr_24323 = state_24321;(statearr_24323[(7)] = inst_24314);
return statearr_24323;
})();var statearr_24324_24437 = state_24321__$1;(statearr_24324_24437[(2)] = null);
(statearr_24324_24437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24322 === (8)))
{var inst_24307 = (state_24321[(8)]);var inst_24312 = (state_24321[(2)]);var state_24321__$1 = (function (){var statearr_24325 = state_24321;(statearr_24325[(9)] = inst_24312);
return statearr_24325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24321__$1,(9),results,inst_24307);
} else
{if((state_val_24322 === (7)))
{var inst_24317 = (state_24321[(2)]);var state_24321__$1 = state_24321;var statearr_24326_24438 = state_24321__$1;(statearr_24326_24438[(2)] = inst_24317);
(statearr_24326_24438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24322 === (6)))
{var inst_24307 = (state_24321[(8)]);var inst_24302 = (state_24321[(10)]);var inst_24307__$1 = cljs.core.async.chan.call(null,(1));var inst_24308 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24309 = [inst_24302,inst_24307__$1];var inst_24310 = (new cljs.core.PersistentVector(null,2,(5),inst_24308,inst_24309,null));var state_24321__$1 = (function (){var statearr_24327 = state_24321;(statearr_24327[(8)] = inst_24307__$1);
return statearr_24327;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24321__$1,(8),jobs,inst_24310);
} else
{if((state_val_24322 === (5)))
{var inst_24305 = cljs.core.async.close_BANG_.call(null,jobs);var state_24321__$1 = state_24321;var statearr_24328_24439 = state_24321__$1;(statearr_24328_24439[(2)] = inst_24305);
(statearr_24328_24439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24322 === (4)))
{var inst_24302 = (state_24321[(10)]);var inst_24302__$1 = (state_24321[(2)]);var inst_24303 = (inst_24302__$1 == null);var state_24321__$1 = (function (){var statearr_24329 = state_24321;(statearr_24329[(10)] = inst_24302__$1);
return statearr_24329;
})();if(cljs.core.truth_(inst_24303))
{var statearr_24330_24440 = state_24321__$1;(statearr_24330_24440[(1)] = (5));
} else
{var statearr_24331_24441 = state_24321__$1;(statearr_24331_24441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24322 === (3)))
{var inst_24319 = (state_24321[(2)]);var state_24321__$1 = state_24321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24321__$1,inst_24319);
} else
{if((state_val_24322 === (2)))
{var state_24321__$1 = state_24321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24321__$1,(4),from);
} else
{if((state_val_24322 === (1)))
{var state_24321__$1 = state_24321;var statearr_24332_24442 = state_24321__$1;(statearr_24332_24442[(2)] = null);
(statearr_24332_24442[(1)] = (2));
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
});})(c__15766__auto___24436,jobs,results,process,async))
;return ((function (switch__15710__auto__,c__15766__auto___24436,jobs,results,process,async){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24336 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24336[(0)] = state_machine__15711__auto__);
(statearr_24336[(1)] = (1));
return statearr_24336;
});
var state_machine__15711__auto____1 = (function (state_24321){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24321);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24337){if((e24337 instanceof Object))
{var ex__15714__auto__ = e24337;var statearr_24338_24443 = state_24321;(statearr_24338_24443[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24337;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24444 = state_24321;
state_24321 = G__24444;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24321){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___24436,jobs,results,process,async))
})();var state__15768__auto__ = (function (){var statearr_24339 = f__15767__auto__.call(null);(statearr_24339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24436);
return statearr_24339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___24436,jobs,results,process,async))
);
var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__,jobs,results,process,async){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__,jobs,results,process,async){
return (function (state_24377){var state_val_24378 = (state_24377[(1)]);if((state_val_24378 === (7)))
{var inst_24373 = (state_24377[(2)]);var state_24377__$1 = state_24377;var statearr_24379_24445 = state_24377__$1;(statearr_24379_24445[(2)] = inst_24373);
(statearr_24379_24445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (20)))
{var state_24377__$1 = state_24377;var statearr_24380_24446 = state_24377__$1;(statearr_24380_24446[(2)] = null);
(statearr_24380_24446[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (1)))
{var state_24377__$1 = state_24377;var statearr_24381_24447 = state_24377__$1;(statearr_24381_24447[(2)] = null);
(statearr_24381_24447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (4)))
{var inst_24342 = (state_24377[(7)]);var inst_24342__$1 = (state_24377[(2)]);var inst_24343 = (inst_24342__$1 == null);var state_24377__$1 = (function (){var statearr_24382 = state_24377;(statearr_24382[(7)] = inst_24342__$1);
return statearr_24382;
})();if(cljs.core.truth_(inst_24343))
{var statearr_24383_24448 = state_24377__$1;(statearr_24383_24448[(1)] = (5));
} else
{var statearr_24384_24449 = state_24377__$1;(statearr_24384_24449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (15)))
{var inst_24355 = (state_24377[(8)]);var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24377__$1,(18),to,inst_24355);
} else
{if((state_val_24378 === (21)))
{var inst_24368 = (state_24377[(2)]);var state_24377__$1 = state_24377;var statearr_24385_24450 = state_24377__$1;(statearr_24385_24450[(2)] = inst_24368);
(statearr_24385_24450[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (13)))
{var inst_24370 = (state_24377[(2)]);var state_24377__$1 = (function (){var statearr_24386 = state_24377;(statearr_24386[(9)] = inst_24370);
return statearr_24386;
})();var statearr_24387_24451 = state_24377__$1;(statearr_24387_24451[(2)] = null);
(statearr_24387_24451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (6)))
{var inst_24342 = (state_24377[(7)]);var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(11),inst_24342);
} else
{if((state_val_24378 === (17)))
{var inst_24363 = (state_24377[(2)]);var state_24377__$1 = state_24377;if(cljs.core.truth_(inst_24363))
{var statearr_24388_24452 = state_24377__$1;(statearr_24388_24452[(1)] = (19));
} else
{var statearr_24389_24453 = state_24377__$1;(statearr_24389_24453[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (3)))
{var inst_24375 = (state_24377[(2)]);var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24377__$1,inst_24375);
} else
{if((state_val_24378 === (12)))
{var inst_24352 = (state_24377[(10)]);var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(14),inst_24352);
} else
{if((state_val_24378 === (2)))
{var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(4),results);
} else
{if((state_val_24378 === (19)))
{var state_24377__$1 = state_24377;var statearr_24390_24454 = state_24377__$1;(statearr_24390_24454[(2)] = null);
(statearr_24390_24454[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (11)))
{var inst_24352 = (state_24377[(2)]);var state_24377__$1 = (function (){var statearr_24391 = state_24377;(statearr_24391[(10)] = inst_24352);
return statearr_24391;
})();var statearr_24392_24455 = state_24377__$1;(statearr_24392_24455[(2)] = null);
(statearr_24392_24455[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (9)))
{var state_24377__$1 = state_24377;var statearr_24393_24456 = state_24377__$1;(statearr_24393_24456[(2)] = null);
(statearr_24393_24456[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (5)))
{var state_24377__$1 = state_24377;if(cljs.core.truth_(close_QMARK_))
{var statearr_24394_24457 = state_24377__$1;(statearr_24394_24457[(1)] = (8));
} else
{var statearr_24395_24458 = state_24377__$1;(statearr_24395_24458[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (14)))
{var inst_24357 = (state_24377[(11)]);var inst_24355 = (state_24377[(8)]);var inst_24355__$1 = (state_24377[(2)]);var inst_24356 = (inst_24355__$1 == null);var inst_24357__$1 = cljs.core.not.call(null,inst_24356);var state_24377__$1 = (function (){var statearr_24396 = state_24377;(statearr_24396[(11)] = inst_24357__$1);
(statearr_24396[(8)] = inst_24355__$1);
return statearr_24396;
})();if(inst_24357__$1)
{var statearr_24397_24459 = state_24377__$1;(statearr_24397_24459[(1)] = (15));
} else
{var statearr_24398_24460 = state_24377__$1;(statearr_24398_24460[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (16)))
{var inst_24357 = (state_24377[(11)]);var state_24377__$1 = state_24377;var statearr_24399_24461 = state_24377__$1;(statearr_24399_24461[(2)] = inst_24357);
(statearr_24399_24461[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (10)))
{var inst_24349 = (state_24377[(2)]);var state_24377__$1 = state_24377;var statearr_24400_24462 = state_24377__$1;(statearr_24400_24462[(2)] = inst_24349);
(statearr_24400_24462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (18)))
{var inst_24360 = (state_24377[(2)]);var state_24377__$1 = state_24377;var statearr_24401_24463 = state_24377__$1;(statearr_24401_24463[(2)] = inst_24360);
(statearr_24401_24463[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24378 === (8)))
{var inst_24346 = cljs.core.async.close_BANG_.call(null,to);var state_24377__$1 = state_24377;var statearr_24402_24464 = state_24377__$1;(statearr_24402_24464[(2)] = inst_24346);
(statearr_24402_24464[(1)] = (10));
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
});})(c__15766__auto__,jobs,results,process,async))
;return ((function (switch__15710__auto__,c__15766__auto__,jobs,results,process,async){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24406[(0)] = state_machine__15711__auto__);
(statearr_24406[(1)] = (1));
return statearr_24406;
});
var state_machine__15711__auto____1 = (function (state_24377){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24377);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24407){if((e24407 instanceof Object))
{var ex__15714__auto__ = e24407;var statearr_24408_24465 = state_24377;(statearr_24408_24465[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24466 = state_24377;
state_24377 = G__24466;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__,jobs,results,process,async))
})();var state__15768__auto__ = (function (){var statearr_24409 = f__15767__auto__.call(null);(statearr_24409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_24409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__,jobs,results,process,async))
);
return c__15766__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15766__auto___24567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___24567,tc,fc){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___24567,tc,fc){
return (function (state_24542){var state_val_24543 = (state_24542[(1)]);if((state_val_24543 === (7)))
{var inst_24538 = (state_24542[(2)]);var state_24542__$1 = state_24542;var statearr_24544_24568 = state_24542__$1;(statearr_24544_24568[(2)] = inst_24538);
(statearr_24544_24568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (1)))
{var state_24542__$1 = state_24542;var statearr_24545_24569 = state_24542__$1;(statearr_24545_24569[(2)] = null);
(statearr_24545_24569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (4)))
{var inst_24519 = (state_24542[(7)]);var inst_24519__$1 = (state_24542[(2)]);var inst_24520 = (inst_24519__$1 == null);var state_24542__$1 = (function (){var statearr_24546 = state_24542;(statearr_24546[(7)] = inst_24519__$1);
return statearr_24546;
})();if(cljs.core.truth_(inst_24520))
{var statearr_24547_24570 = state_24542__$1;(statearr_24547_24570[(1)] = (5));
} else
{var statearr_24548_24571 = state_24542__$1;(statearr_24548_24571[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (13)))
{var state_24542__$1 = state_24542;var statearr_24549_24572 = state_24542__$1;(statearr_24549_24572[(2)] = null);
(statearr_24549_24572[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (6)))
{var inst_24519 = (state_24542[(7)]);var inst_24525 = p.call(null,inst_24519);var state_24542__$1 = state_24542;if(cljs.core.truth_(inst_24525))
{var statearr_24550_24573 = state_24542__$1;(statearr_24550_24573[(1)] = (9));
} else
{var statearr_24551_24574 = state_24542__$1;(statearr_24551_24574[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (3)))
{var inst_24540 = (state_24542[(2)]);var state_24542__$1 = state_24542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24542__$1,inst_24540);
} else
{if((state_val_24543 === (12)))
{var state_24542__$1 = state_24542;var statearr_24552_24575 = state_24542__$1;(statearr_24552_24575[(2)] = null);
(statearr_24552_24575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (2)))
{var state_24542__$1 = state_24542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24542__$1,(4),ch);
} else
{if((state_val_24543 === (11)))
{var inst_24519 = (state_24542[(7)]);var inst_24529 = (state_24542[(2)]);var state_24542__$1 = state_24542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24542__$1,(8),inst_24529,inst_24519);
} else
{if((state_val_24543 === (9)))
{var state_24542__$1 = state_24542;var statearr_24553_24576 = state_24542__$1;(statearr_24553_24576[(2)] = tc);
(statearr_24553_24576[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (5)))
{var inst_24522 = cljs.core.async.close_BANG_.call(null,tc);var inst_24523 = cljs.core.async.close_BANG_.call(null,fc);var state_24542__$1 = (function (){var statearr_24554 = state_24542;(statearr_24554[(8)] = inst_24522);
return statearr_24554;
})();var statearr_24555_24577 = state_24542__$1;(statearr_24555_24577[(2)] = inst_24523);
(statearr_24555_24577[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (14)))
{var inst_24536 = (state_24542[(2)]);var state_24542__$1 = state_24542;var statearr_24556_24578 = state_24542__$1;(statearr_24556_24578[(2)] = inst_24536);
(statearr_24556_24578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (10)))
{var state_24542__$1 = state_24542;var statearr_24557_24579 = state_24542__$1;(statearr_24557_24579[(2)] = fc);
(statearr_24557_24579[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24543 === (8)))
{var inst_24531 = (state_24542[(2)]);var state_24542__$1 = state_24542;if(cljs.core.truth_(inst_24531))
{var statearr_24558_24580 = state_24542__$1;(statearr_24558_24580[(1)] = (12));
} else
{var statearr_24559_24581 = state_24542__$1;(statearr_24559_24581[(1)] = (13));
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
});})(c__15766__auto___24567,tc,fc))
;return ((function (switch__15710__auto__,c__15766__auto___24567,tc,fc){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24563 = [null,null,null,null,null,null,null,null,null];(statearr_24563[(0)] = state_machine__15711__auto__);
(statearr_24563[(1)] = (1));
return statearr_24563;
});
var state_machine__15711__auto____1 = (function (state_24542){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24542);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24564){if((e24564 instanceof Object))
{var ex__15714__auto__ = e24564;var statearr_24565_24582 = state_24542;(statearr_24565_24582[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24583 = state_24542;
state_24542 = G__24583;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24542){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___24567,tc,fc))
})();var state__15768__auto__ = (function (){var statearr_24566 = f__15767__auto__.call(null);(statearr_24566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___24567);
return statearr_24566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___24567,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__){
return (function (state_24630){var state_val_24631 = (state_24630[(1)]);if((state_val_24631 === (7)))
{var inst_24626 = (state_24630[(2)]);var state_24630__$1 = state_24630;var statearr_24632_24648 = state_24630__$1;(statearr_24632_24648[(2)] = inst_24626);
(statearr_24632_24648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24631 === (6)))
{var inst_24619 = (state_24630[(7)]);var inst_24616 = (state_24630[(8)]);var inst_24623 = f.call(null,inst_24616,inst_24619);var inst_24616__$1 = inst_24623;var state_24630__$1 = (function (){var statearr_24633 = state_24630;(statearr_24633[(8)] = inst_24616__$1);
return statearr_24633;
})();var statearr_24634_24649 = state_24630__$1;(statearr_24634_24649[(2)] = null);
(statearr_24634_24649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24631 === (5)))
{var inst_24616 = (state_24630[(8)]);var state_24630__$1 = state_24630;var statearr_24635_24650 = state_24630__$1;(statearr_24635_24650[(2)] = inst_24616);
(statearr_24635_24650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24631 === (4)))
{var inst_24619 = (state_24630[(7)]);var inst_24619__$1 = (state_24630[(2)]);var inst_24620 = (inst_24619__$1 == null);var state_24630__$1 = (function (){var statearr_24636 = state_24630;(statearr_24636[(7)] = inst_24619__$1);
return statearr_24636;
})();if(cljs.core.truth_(inst_24620))
{var statearr_24637_24651 = state_24630__$1;(statearr_24637_24651[(1)] = (5));
} else
{var statearr_24638_24652 = state_24630__$1;(statearr_24638_24652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24631 === (3)))
{var inst_24628 = (state_24630[(2)]);var state_24630__$1 = state_24630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24630__$1,inst_24628);
} else
{if((state_val_24631 === (2)))
{var state_24630__$1 = state_24630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24630__$1,(4),ch);
} else
{if((state_val_24631 === (1)))
{var inst_24616 = init;var state_24630__$1 = (function (){var statearr_24639 = state_24630;(statearr_24639[(8)] = inst_24616);
return statearr_24639;
})();var statearr_24640_24653 = state_24630__$1;(statearr_24640_24653[(2)] = null);
(statearr_24640_24653[(1)] = (2));
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
});})(c__15766__auto__))
;return ((function (switch__15710__auto__,c__15766__auto__){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24644 = [null,null,null,null,null,null,null,null,null];(statearr_24644[(0)] = state_machine__15711__auto__);
(statearr_24644[(1)] = (1));
return statearr_24644;
});
var state_machine__15711__auto____1 = (function (state_24630){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24630);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24645){if((e24645 instanceof Object))
{var ex__15714__auto__ = e24645;var statearr_24646_24654 = state_24630;(statearr_24646_24654[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24655 = state_24630;
state_24630 = G__24655;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24630){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__))
})();var state__15768__auto__ = (function (){var statearr_24647 = f__15767__auto__.call(null);(statearr_24647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_24647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__))
);
return c__15766__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__){
return (function (state_24729){var state_val_24730 = (state_24729[(1)]);if((state_val_24730 === (7)))
{var inst_24711 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24731_24754 = state_24729__$1;(statearr_24731_24754[(2)] = inst_24711);
(statearr_24731_24754[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (1)))
{var inst_24705 = cljs.core.seq.call(null,coll);var inst_24706 = inst_24705;var state_24729__$1 = (function (){var statearr_24732 = state_24729;(statearr_24732[(7)] = inst_24706);
return statearr_24732;
})();var statearr_24733_24755 = state_24729__$1;(statearr_24733_24755[(2)] = null);
(statearr_24733_24755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (4)))
{var inst_24706 = (state_24729[(7)]);var inst_24709 = cljs.core.first.call(null,inst_24706);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24729__$1,(7),ch,inst_24709);
} else
{if((state_val_24730 === (13)))
{var inst_24723 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24734_24756 = state_24729__$1;(statearr_24734_24756[(2)] = inst_24723);
(statearr_24734_24756[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (6)))
{var inst_24714 = (state_24729[(2)]);var state_24729__$1 = state_24729;if(cljs.core.truth_(inst_24714))
{var statearr_24735_24757 = state_24729__$1;(statearr_24735_24757[(1)] = (8));
} else
{var statearr_24736_24758 = state_24729__$1;(statearr_24736_24758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (3)))
{var inst_24727 = (state_24729[(2)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24729__$1,inst_24727);
} else
{if((state_val_24730 === (12)))
{var state_24729__$1 = state_24729;var statearr_24737_24759 = state_24729__$1;(statearr_24737_24759[(2)] = null);
(statearr_24737_24759[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (2)))
{var inst_24706 = (state_24729[(7)]);var state_24729__$1 = state_24729;if(cljs.core.truth_(inst_24706))
{var statearr_24738_24760 = state_24729__$1;(statearr_24738_24760[(1)] = (4));
} else
{var statearr_24739_24761 = state_24729__$1;(statearr_24739_24761[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (11)))
{var inst_24720 = cljs.core.async.close_BANG_.call(null,ch);var state_24729__$1 = state_24729;var statearr_24740_24762 = state_24729__$1;(statearr_24740_24762[(2)] = inst_24720);
(statearr_24740_24762[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (9)))
{var state_24729__$1 = state_24729;if(cljs.core.truth_(close_QMARK_))
{var statearr_24741_24763 = state_24729__$1;(statearr_24741_24763[(1)] = (11));
} else
{var statearr_24742_24764 = state_24729__$1;(statearr_24742_24764[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (5)))
{var inst_24706 = (state_24729[(7)]);var state_24729__$1 = state_24729;var statearr_24743_24765 = state_24729__$1;(statearr_24743_24765[(2)] = inst_24706);
(statearr_24743_24765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (10)))
{var inst_24725 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24744_24766 = state_24729__$1;(statearr_24744_24766[(2)] = inst_24725);
(statearr_24744_24766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (8)))
{var inst_24706 = (state_24729[(7)]);var inst_24716 = cljs.core.next.call(null,inst_24706);var inst_24706__$1 = inst_24716;var state_24729__$1 = (function (){var statearr_24745 = state_24729;(statearr_24745[(7)] = inst_24706__$1);
return statearr_24745;
})();var statearr_24746_24767 = state_24729__$1;(statearr_24746_24767[(2)] = null);
(statearr_24746_24767[(1)] = (2));
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
});})(c__15766__auto__))
;return ((function (switch__15710__auto__,c__15766__auto__){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_24750 = [null,null,null,null,null,null,null,null];(statearr_24750[(0)] = state_machine__15711__auto__);
(statearr_24750[(1)] = (1));
return statearr_24750;
});
var state_machine__15711__auto____1 = (function (state_24729){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_24729);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e24751){if((e24751 instanceof Object))
{var ex__15714__auto__ = e24751;var statearr_24752_24768 = state_24729;(statearr_24752_24768[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24769 = state_24729;
state_24729 = G__24769;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_24729){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_24729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__))
})();var state__15768__auto__ = (function (){var statearr_24753 = f__15767__auto__.call(null);(statearr_24753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_24753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__))
);
return c__15766__auto__;
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
cljs.core.async.Mux = (function (){var obj24771 = {};return obj24771;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12535__auto__ = _;if(and__12535__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12535__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13184__auto__ = (((_ == null))?null:_);return (function (){var or__12547__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24773 = {};return obj24773;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24995 = (function (cs,ch,mult,meta24996){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24996 = meta24996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24995.cljs$lang$type = true;
cljs.core.async.t24995.cljs$lang$ctorStr = "cljs.core.async/t24995";
cljs.core.async.t24995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t24995");
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24997){var self__ = this;
var _24997__$1 = this;return self__.meta24996;
});})(cs))
;
cljs.core.async.t24995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24997,meta24996__$1){var self__ = this;
var _24997__$1 = this;return (new cljs.core.async.t24995(self__.cs,self__.ch,self__.mult,meta24996__$1));
});})(cs))
;
cljs.core.async.__GT_t24995 = ((function (cs){
return (function __GT_t24995(cs__$1,ch__$1,mult__$1,meta24996){return (new cljs.core.async.t24995(cs__$1,ch__$1,mult__$1,meta24996));
});})(cs))
;
}
return (new cljs.core.async.t24995(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15766__auto___25216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___25216,cs,m,dchan,dctr,done){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___25216,cs,m,dchan,dctr,done){
return (function (state_25128){var state_val_25129 = (state_25128[(1)]);if((state_val_25129 === (7)))
{var inst_25124 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25130_25217 = state_25128__$1;(statearr_25130_25217[(2)] = inst_25124);
(statearr_25130_25217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (20)))
{var inst_25029 = (state_25128[(7)]);var inst_25039 = cljs.core.first.call(null,inst_25029);var inst_25040 = cljs.core.nth.call(null,inst_25039,(0),null);var inst_25041 = cljs.core.nth.call(null,inst_25039,(1),null);var state_25128__$1 = (function (){var statearr_25131 = state_25128;(statearr_25131[(8)] = inst_25040);
return statearr_25131;
})();if(cljs.core.truth_(inst_25041))
{var statearr_25132_25218 = state_25128__$1;(statearr_25132_25218[(1)] = (22));
} else
{var statearr_25133_25219 = state_25128__$1;(statearr_25133_25219[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (27)))
{var inst_25000 = (state_25128[(9)]);var inst_25071 = (state_25128[(10)]);var inst_25069 = (state_25128[(11)]);var inst_25076 = (state_25128[(12)]);var inst_25076__$1 = cljs.core._nth.call(null,inst_25069,inst_25071);var inst_25077 = cljs.core.async.put_BANG_.call(null,inst_25076__$1,inst_25000,done);var state_25128__$1 = (function (){var statearr_25134 = state_25128;(statearr_25134[(12)] = inst_25076__$1);
return statearr_25134;
})();if(cljs.core.truth_(inst_25077))
{var statearr_25135_25220 = state_25128__$1;(statearr_25135_25220[(1)] = (30));
} else
{var statearr_25136_25221 = state_25128__$1;(statearr_25136_25221[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (1)))
{var state_25128__$1 = state_25128;var statearr_25137_25222 = state_25128__$1;(statearr_25137_25222[(2)] = null);
(statearr_25137_25222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (24)))
{var inst_25029 = (state_25128[(7)]);var inst_25046 = (state_25128[(2)]);var inst_25047 = cljs.core.next.call(null,inst_25029);var inst_25009 = inst_25047;var inst_25010 = null;var inst_25011 = (0);var inst_25012 = (0);var state_25128__$1 = (function (){var statearr_25138 = state_25128;(statearr_25138[(13)] = inst_25009);
(statearr_25138[(14)] = inst_25010);
(statearr_25138[(15)] = inst_25046);
(statearr_25138[(16)] = inst_25011);
(statearr_25138[(17)] = inst_25012);
return statearr_25138;
})();var statearr_25139_25223 = state_25128__$1;(statearr_25139_25223[(2)] = null);
(statearr_25139_25223[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (39)))
{var state_25128__$1 = state_25128;var statearr_25143_25224 = state_25128__$1;(statearr_25143_25224[(2)] = null);
(statearr_25143_25224[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (4)))
{var inst_25000 = (state_25128[(9)]);var inst_25000__$1 = (state_25128[(2)]);var inst_25001 = (inst_25000__$1 == null);var state_25128__$1 = (function (){var statearr_25144 = state_25128;(statearr_25144[(9)] = inst_25000__$1);
return statearr_25144;
})();if(cljs.core.truth_(inst_25001))
{var statearr_25145_25225 = state_25128__$1;(statearr_25145_25225[(1)] = (5));
} else
{var statearr_25146_25226 = state_25128__$1;(statearr_25146_25226[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (15)))
{var inst_25009 = (state_25128[(13)]);var inst_25010 = (state_25128[(14)]);var inst_25011 = (state_25128[(16)]);var inst_25012 = (state_25128[(17)]);var inst_25025 = (state_25128[(2)]);var inst_25026 = (inst_25012 + (1));var tmp25140 = inst_25009;var tmp25141 = inst_25010;var tmp25142 = inst_25011;var inst_25009__$1 = tmp25140;var inst_25010__$1 = tmp25141;var inst_25011__$1 = tmp25142;var inst_25012__$1 = inst_25026;var state_25128__$1 = (function (){var statearr_25147 = state_25128;(statearr_25147[(18)] = inst_25025);
(statearr_25147[(13)] = inst_25009__$1);
(statearr_25147[(14)] = inst_25010__$1);
(statearr_25147[(16)] = inst_25011__$1);
(statearr_25147[(17)] = inst_25012__$1);
return statearr_25147;
})();var statearr_25148_25227 = state_25128__$1;(statearr_25148_25227[(2)] = null);
(statearr_25148_25227[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (21)))
{var inst_25050 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25152_25228 = state_25128__$1;(statearr_25152_25228[(2)] = inst_25050);
(statearr_25152_25228[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (31)))
{var inst_25076 = (state_25128[(12)]);var inst_25080 = done.call(null,null);var inst_25081 = cljs.core.async.untap_STAR_.call(null,m,inst_25076);var state_25128__$1 = (function (){var statearr_25153 = state_25128;(statearr_25153[(19)] = inst_25080);
return statearr_25153;
})();var statearr_25154_25229 = state_25128__$1;(statearr_25154_25229[(2)] = inst_25081);
(statearr_25154_25229[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (32)))
{var inst_25071 = (state_25128[(10)]);var inst_25069 = (state_25128[(11)]);var inst_25068 = (state_25128[(20)]);var inst_25070 = (state_25128[(21)]);var inst_25083 = (state_25128[(2)]);var inst_25084 = (inst_25071 + (1));var tmp25149 = inst_25069;var tmp25150 = inst_25068;var tmp25151 = inst_25070;var inst_25068__$1 = tmp25150;var inst_25069__$1 = tmp25149;var inst_25070__$1 = tmp25151;var inst_25071__$1 = inst_25084;var state_25128__$1 = (function (){var statearr_25155 = state_25128;(statearr_25155[(10)] = inst_25071__$1);
(statearr_25155[(11)] = inst_25069__$1);
(statearr_25155[(22)] = inst_25083);
(statearr_25155[(20)] = inst_25068__$1);
(statearr_25155[(21)] = inst_25070__$1);
return statearr_25155;
})();var statearr_25156_25230 = state_25128__$1;(statearr_25156_25230[(2)] = null);
(statearr_25156_25230[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (40)))
{var inst_25096 = (state_25128[(23)]);var inst_25100 = done.call(null,null);var inst_25101 = cljs.core.async.untap_STAR_.call(null,m,inst_25096);var state_25128__$1 = (function (){var statearr_25157 = state_25128;(statearr_25157[(24)] = inst_25100);
return statearr_25157;
})();var statearr_25158_25231 = state_25128__$1;(statearr_25158_25231[(2)] = inst_25101);
(statearr_25158_25231[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (33)))
{var inst_25087 = (state_25128[(25)]);var inst_25089 = cljs.core.chunked_seq_QMARK_.call(null,inst_25087);var state_25128__$1 = state_25128;if(inst_25089)
{var statearr_25159_25232 = state_25128__$1;(statearr_25159_25232[(1)] = (36));
} else
{var statearr_25160_25233 = state_25128__$1;(statearr_25160_25233[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (13)))
{var inst_25019 = (state_25128[(26)]);var inst_25022 = cljs.core.async.close_BANG_.call(null,inst_25019);var state_25128__$1 = state_25128;var statearr_25161_25234 = state_25128__$1;(statearr_25161_25234[(2)] = inst_25022);
(statearr_25161_25234[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (22)))
{var inst_25040 = (state_25128[(8)]);var inst_25043 = cljs.core.async.close_BANG_.call(null,inst_25040);var state_25128__$1 = state_25128;var statearr_25162_25235 = state_25128__$1;(statearr_25162_25235[(2)] = inst_25043);
(statearr_25162_25235[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (36)))
{var inst_25087 = (state_25128[(25)]);var inst_25091 = cljs.core.chunk_first.call(null,inst_25087);var inst_25092 = cljs.core.chunk_rest.call(null,inst_25087);var inst_25093 = cljs.core.count.call(null,inst_25091);var inst_25068 = inst_25092;var inst_25069 = inst_25091;var inst_25070 = inst_25093;var inst_25071 = (0);var state_25128__$1 = (function (){var statearr_25163 = state_25128;(statearr_25163[(10)] = inst_25071);
(statearr_25163[(11)] = inst_25069);
(statearr_25163[(20)] = inst_25068);
(statearr_25163[(21)] = inst_25070);
return statearr_25163;
})();var statearr_25164_25236 = state_25128__$1;(statearr_25164_25236[(2)] = null);
(statearr_25164_25236[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (41)))
{var inst_25087 = (state_25128[(25)]);var inst_25103 = (state_25128[(2)]);var inst_25104 = cljs.core.next.call(null,inst_25087);var inst_25068 = inst_25104;var inst_25069 = null;var inst_25070 = (0);var inst_25071 = (0);var state_25128__$1 = (function (){var statearr_25165 = state_25128;(statearr_25165[(10)] = inst_25071);
(statearr_25165[(11)] = inst_25069);
(statearr_25165[(20)] = inst_25068);
(statearr_25165[(27)] = inst_25103);
(statearr_25165[(21)] = inst_25070);
return statearr_25165;
})();var statearr_25166_25237 = state_25128__$1;(statearr_25166_25237[(2)] = null);
(statearr_25166_25237[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (43)))
{var state_25128__$1 = state_25128;var statearr_25167_25238 = state_25128__$1;(statearr_25167_25238[(2)] = null);
(statearr_25167_25238[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (29)))
{var inst_25112 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25168_25239 = state_25128__$1;(statearr_25168_25239[(2)] = inst_25112);
(statearr_25168_25239[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (44)))
{var inst_25121 = (state_25128[(2)]);var state_25128__$1 = (function (){var statearr_25169 = state_25128;(statearr_25169[(28)] = inst_25121);
return statearr_25169;
})();var statearr_25170_25240 = state_25128__$1;(statearr_25170_25240[(2)] = null);
(statearr_25170_25240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (6)))
{var inst_25060 = (state_25128[(29)]);var inst_25059 = cljs.core.deref.call(null,cs);var inst_25060__$1 = cljs.core.keys.call(null,inst_25059);var inst_25061 = cljs.core.count.call(null,inst_25060__$1);var inst_25062 = cljs.core.reset_BANG_.call(null,dctr,inst_25061);var inst_25067 = cljs.core.seq.call(null,inst_25060__$1);var inst_25068 = inst_25067;var inst_25069 = null;var inst_25070 = (0);var inst_25071 = (0);var state_25128__$1 = (function (){var statearr_25171 = state_25128;(statearr_25171[(10)] = inst_25071);
(statearr_25171[(11)] = inst_25069);
(statearr_25171[(20)] = inst_25068);
(statearr_25171[(29)] = inst_25060__$1);
(statearr_25171[(30)] = inst_25062);
(statearr_25171[(21)] = inst_25070);
return statearr_25171;
})();var statearr_25172_25241 = state_25128__$1;(statearr_25172_25241[(2)] = null);
(statearr_25172_25241[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (28)))
{var inst_25087 = (state_25128[(25)]);var inst_25068 = (state_25128[(20)]);var inst_25087__$1 = cljs.core.seq.call(null,inst_25068);var state_25128__$1 = (function (){var statearr_25173 = state_25128;(statearr_25173[(25)] = inst_25087__$1);
return statearr_25173;
})();if(inst_25087__$1)
{var statearr_25174_25242 = state_25128__$1;(statearr_25174_25242[(1)] = (33));
} else
{var statearr_25175_25243 = state_25128__$1;(statearr_25175_25243[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (25)))
{var inst_25071 = (state_25128[(10)]);var inst_25070 = (state_25128[(21)]);var inst_25073 = (inst_25071 < inst_25070);var inst_25074 = inst_25073;var state_25128__$1 = state_25128;if(cljs.core.truth_(inst_25074))
{var statearr_25176_25244 = state_25128__$1;(statearr_25176_25244[(1)] = (27));
} else
{var statearr_25177_25245 = state_25128__$1;(statearr_25177_25245[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (34)))
{var state_25128__$1 = state_25128;var statearr_25178_25246 = state_25128__$1;(statearr_25178_25246[(2)] = null);
(statearr_25178_25246[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (17)))
{var state_25128__$1 = state_25128;var statearr_25179_25247 = state_25128__$1;(statearr_25179_25247[(2)] = null);
(statearr_25179_25247[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (3)))
{var inst_25126 = (state_25128[(2)]);var state_25128__$1 = state_25128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25128__$1,inst_25126);
} else
{if((state_val_25129 === (12)))
{var inst_25055 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25180_25248 = state_25128__$1;(statearr_25180_25248[(2)] = inst_25055);
(statearr_25180_25248[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (2)))
{var state_25128__$1 = state_25128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25128__$1,(4),ch);
} else
{if((state_val_25129 === (23)))
{var state_25128__$1 = state_25128;var statearr_25181_25249 = state_25128__$1;(statearr_25181_25249[(2)] = null);
(statearr_25181_25249[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (35)))
{var inst_25110 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25182_25250 = state_25128__$1;(statearr_25182_25250[(2)] = inst_25110);
(statearr_25182_25250[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (19)))
{var inst_25029 = (state_25128[(7)]);var inst_25033 = cljs.core.chunk_first.call(null,inst_25029);var inst_25034 = cljs.core.chunk_rest.call(null,inst_25029);var inst_25035 = cljs.core.count.call(null,inst_25033);var inst_25009 = inst_25034;var inst_25010 = inst_25033;var inst_25011 = inst_25035;var inst_25012 = (0);var state_25128__$1 = (function (){var statearr_25183 = state_25128;(statearr_25183[(13)] = inst_25009);
(statearr_25183[(14)] = inst_25010);
(statearr_25183[(16)] = inst_25011);
(statearr_25183[(17)] = inst_25012);
return statearr_25183;
})();var statearr_25184_25251 = state_25128__$1;(statearr_25184_25251[(2)] = null);
(statearr_25184_25251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (11)))
{var inst_25029 = (state_25128[(7)]);var inst_25009 = (state_25128[(13)]);var inst_25029__$1 = cljs.core.seq.call(null,inst_25009);var state_25128__$1 = (function (){var statearr_25185 = state_25128;(statearr_25185[(7)] = inst_25029__$1);
return statearr_25185;
})();if(inst_25029__$1)
{var statearr_25186_25252 = state_25128__$1;(statearr_25186_25252[(1)] = (16));
} else
{var statearr_25187_25253 = state_25128__$1;(statearr_25187_25253[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (9)))
{var inst_25057 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25188_25254 = state_25128__$1;(statearr_25188_25254[(2)] = inst_25057);
(statearr_25188_25254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (5)))
{var inst_25007 = cljs.core.deref.call(null,cs);var inst_25008 = cljs.core.seq.call(null,inst_25007);var inst_25009 = inst_25008;var inst_25010 = null;var inst_25011 = (0);var inst_25012 = (0);var state_25128__$1 = (function (){var statearr_25189 = state_25128;(statearr_25189[(13)] = inst_25009);
(statearr_25189[(14)] = inst_25010);
(statearr_25189[(16)] = inst_25011);
(statearr_25189[(17)] = inst_25012);
return statearr_25189;
})();var statearr_25190_25255 = state_25128__$1;(statearr_25190_25255[(2)] = null);
(statearr_25190_25255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (14)))
{var state_25128__$1 = state_25128;var statearr_25191_25256 = state_25128__$1;(statearr_25191_25256[(2)] = null);
(statearr_25191_25256[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (45)))
{var inst_25118 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25192_25257 = state_25128__$1;(statearr_25192_25257[(2)] = inst_25118);
(statearr_25192_25257[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (26)))
{var inst_25060 = (state_25128[(29)]);var inst_25114 = (state_25128[(2)]);var inst_25115 = cljs.core.seq.call(null,inst_25060);var state_25128__$1 = (function (){var statearr_25193 = state_25128;(statearr_25193[(31)] = inst_25114);
return statearr_25193;
})();if(inst_25115)
{var statearr_25194_25258 = state_25128__$1;(statearr_25194_25258[(1)] = (42));
} else
{var statearr_25195_25259 = state_25128__$1;(statearr_25195_25259[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (16)))
{var inst_25029 = (state_25128[(7)]);var inst_25031 = cljs.core.chunked_seq_QMARK_.call(null,inst_25029);var state_25128__$1 = state_25128;if(inst_25031)
{var statearr_25196_25260 = state_25128__$1;(statearr_25196_25260[(1)] = (19));
} else
{var statearr_25197_25261 = state_25128__$1;(statearr_25197_25261[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (38)))
{var inst_25107 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25198_25262 = state_25128__$1;(statearr_25198_25262[(2)] = inst_25107);
(statearr_25198_25262[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (30)))
{var state_25128__$1 = state_25128;var statearr_25199_25263 = state_25128__$1;(statearr_25199_25263[(2)] = null);
(statearr_25199_25263[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (10)))
{var inst_25010 = (state_25128[(14)]);var inst_25012 = (state_25128[(17)]);var inst_25018 = cljs.core._nth.call(null,inst_25010,inst_25012);var inst_25019 = cljs.core.nth.call(null,inst_25018,(0),null);var inst_25020 = cljs.core.nth.call(null,inst_25018,(1),null);var state_25128__$1 = (function (){var statearr_25200 = state_25128;(statearr_25200[(26)] = inst_25019);
return statearr_25200;
})();if(cljs.core.truth_(inst_25020))
{var statearr_25201_25264 = state_25128__$1;(statearr_25201_25264[(1)] = (13));
} else
{var statearr_25202_25265 = state_25128__$1;(statearr_25202_25265[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (18)))
{var inst_25053 = (state_25128[(2)]);var state_25128__$1 = state_25128;var statearr_25203_25266 = state_25128__$1;(statearr_25203_25266[(2)] = inst_25053);
(statearr_25203_25266[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (42)))
{var state_25128__$1 = state_25128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25128__$1,(45),dchan);
} else
{if((state_val_25129 === (37)))
{var inst_25000 = (state_25128[(9)]);var inst_25087 = (state_25128[(25)]);var inst_25096 = (state_25128[(23)]);var inst_25096__$1 = cljs.core.first.call(null,inst_25087);var inst_25097 = cljs.core.async.put_BANG_.call(null,inst_25096__$1,inst_25000,done);var state_25128__$1 = (function (){var statearr_25204 = state_25128;(statearr_25204[(23)] = inst_25096__$1);
return statearr_25204;
})();if(cljs.core.truth_(inst_25097))
{var statearr_25205_25267 = state_25128__$1;(statearr_25205_25267[(1)] = (39));
} else
{var statearr_25206_25268 = state_25128__$1;(statearr_25206_25268[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25129 === (8)))
{var inst_25011 = (state_25128[(16)]);var inst_25012 = (state_25128[(17)]);var inst_25014 = (inst_25012 < inst_25011);var inst_25015 = inst_25014;var state_25128__$1 = state_25128;if(cljs.core.truth_(inst_25015))
{var statearr_25207_25269 = state_25128__$1;(statearr_25207_25269[(1)] = (10));
} else
{var statearr_25208_25270 = state_25128__$1;(statearr_25208_25270[(1)] = (11));
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
});})(c__15766__auto___25216,cs,m,dchan,dctr,done))
;return ((function (switch__15710__auto__,c__15766__auto___25216,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_25212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25212[(0)] = state_machine__15711__auto__);
(statearr_25212[(1)] = (1));
return statearr_25212;
});
var state_machine__15711__auto____1 = (function (state_25128){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_25128);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e25213){if((e25213 instanceof Object))
{var ex__15714__auto__ = e25213;var statearr_25214_25271 = state_25128;(statearr_25214_25271[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25272 = state_25128;
state_25128 = G__25272;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_25128){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_25128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___25216,cs,m,dchan,dctr,done))
})();var state__15768__auto__ = (function (){var statearr_25215 = f__15767__auto__.call(null);(statearr_25215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___25216);
return statearr_25215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___25216,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25274 = {};return obj25274;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12535__auto__ = m;if(and__12535__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12547__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25275){var map__25280 = p__25275;var map__25280__$1 = ((cljs.core.seq_QMARK_.call(null,map__25280))?cljs.core.apply.call(null,cljs.core.hash_map,map__25280):map__25280);var opts = map__25280__$1;var statearr_25281_25284 = state;(statearr_25281_25284[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25280,map__25280__$1,opts){
return (function (val){var statearr_25282_25285 = state;(statearr_25282_25285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25280,map__25280__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_25283_25286 = state;(statearr_25283_25286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25275 = null;if (arguments.length > 3) {
  p__25275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25275);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25287){
var state = cljs.core.first(arglist__25287);
arglist__25287 = cljs.core.next(arglist__25287);
var cont_block = cljs.core.first(arglist__25287);
arglist__25287 = cljs.core.next(arglist__25287);
var ports = cljs.core.first(arglist__25287);
var p__25275 = cljs.core.rest(arglist__25287);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25275);
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
;var m = (function (){if(typeof cljs.core.async.t25407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25407 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25408){
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
this.meta25408 = meta25408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25407.cljs$lang$type = true;
cljs.core.async.t25407.cljs$lang$ctorStr = "cljs.core.async/t25407";
cljs.core.async.t25407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t25407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25409){var self__ = this;
var _25409__$1 = this;return self__.meta25408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25409,meta25408__$1){var self__ = this;
var _25409__$1 = this;return (new cljs.core.async.t25407(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25408){return (new cljs.core.async.t25407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25407(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15766__auto___25526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25479){var state_val_25480 = (state_25479[(1)]);if((state_val_25480 === (7)))
{var inst_25423 = (state_25479[(7)]);var inst_25428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25423);var state_25479__$1 = state_25479;var statearr_25481_25527 = state_25479__$1;(statearr_25481_25527[(2)] = inst_25428);
(statearr_25481_25527[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (20)))
{var inst_25438 = (state_25479[(8)]);var state_25479__$1 = state_25479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25479__$1,(23),out,inst_25438);
} else
{if((state_val_25480 === (1)))
{var inst_25413 = (state_25479[(9)]);var inst_25413__$1 = calc_state.call(null);var inst_25414 = cljs.core.seq_QMARK_.call(null,inst_25413__$1);var state_25479__$1 = (function (){var statearr_25482 = state_25479;(statearr_25482[(9)] = inst_25413__$1);
return statearr_25482;
})();if(inst_25414)
{var statearr_25483_25528 = state_25479__$1;(statearr_25483_25528[(1)] = (2));
} else
{var statearr_25484_25529 = state_25479__$1;(statearr_25484_25529[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (24)))
{var inst_25431 = (state_25479[(10)]);var inst_25423 = inst_25431;var state_25479__$1 = (function (){var statearr_25485 = state_25479;(statearr_25485[(7)] = inst_25423);
return statearr_25485;
})();var statearr_25486_25530 = state_25479__$1;(statearr_25486_25530[(2)] = null);
(statearr_25486_25530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (4)))
{var inst_25413 = (state_25479[(9)]);var inst_25419 = (state_25479[(2)]);var inst_25420 = cljs.core.get.call(null,inst_25419,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25421 = cljs.core.get.call(null,inst_25419,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25422 = cljs.core.get.call(null,inst_25419,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25423 = inst_25413;var state_25479__$1 = (function (){var statearr_25487 = state_25479;(statearr_25487[(7)] = inst_25423);
(statearr_25487[(11)] = inst_25422);
(statearr_25487[(12)] = inst_25421);
(statearr_25487[(13)] = inst_25420);
return statearr_25487;
})();var statearr_25488_25531 = state_25479__$1;(statearr_25488_25531[(2)] = null);
(statearr_25488_25531[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (15)))
{var state_25479__$1 = state_25479;var statearr_25489_25532 = state_25479__$1;(statearr_25489_25532[(2)] = null);
(statearr_25489_25532[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (21)))
{var inst_25431 = (state_25479[(10)]);var inst_25423 = inst_25431;var state_25479__$1 = (function (){var statearr_25490 = state_25479;(statearr_25490[(7)] = inst_25423);
return statearr_25490;
})();var statearr_25491_25533 = state_25479__$1;(statearr_25491_25533[(2)] = null);
(statearr_25491_25533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (13)))
{var inst_25475 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25492_25534 = state_25479__$1;(statearr_25492_25534[(2)] = inst_25475);
(statearr_25492_25534[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (22)))
{var inst_25473 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25493_25535 = state_25479__$1;(statearr_25493_25535[(2)] = inst_25473);
(statearr_25493_25535[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (6)))
{var inst_25477 = (state_25479[(2)]);var state_25479__$1 = state_25479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else
{if((state_val_25480 === (25)))
{var state_25479__$1 = state_25479;var statearr_25494_25536 = state_25479__$1;(statearr_25494_25536[(2)] = null);
(statearr_25494_25536[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (17)))
{var inst_25453 = (state_25479[(14)]);var state_25479__$1 = state_25479;var statearr_25495_25537 = state_25479__$1;(statearr_25495_25537[(2)] = inst_25453);
(statearr_25495_25537[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (3)))
{var inst_25413 = (state_25479[(9)]);var state_25479__$1 = state_25479;var statearr_25496_25538 = state_25479__$1;(statearr_25496_25538[(2)] = inst_25413);
(statearr_25496_25538[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (12)))
{var inst_25434 = (state_25479[(15)]);var inst_25453 = (state_25479[(14)]);var inst_25439 = (state_25479[(16)]);var inst_25453__$1 = inst_25434.call(null,inst_25439);var state_25479__$1 = (function (){var statearr_25497 = state_25479;(statearr_25497[(14)] = inst_25453__$1);
return statearr_25497;
})();if(cljs.core.truth_(inst_25453__$1))
{var statearr_25498_25539 = state_25479__$1;(statearr_25498_25539[(1)] = (17));
} else
{var statearr_25499_25540 = state_25479__$1;(statearr_25499_25540[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (2)))
{var inst_25413 = (state_25479[(9)]);var inst_25416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25413);var state_25479__$1 = state_25479;var statearr_25500_25541 = state_25479__$1;(statearr_25500_25541[(2)] = inst_25416);
(statearr_25500_25541[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (23)))
{var inst_25464 = (state_25479[(2)]);var state_25479__$1 = state_25479;if(cljs.core.truth_(inst_25464))
{var statearr_25501_25542 = state_25479__$1;(statearr_25501_25542[(1)] = (24));
} else
{var statearr_25502_25543 = state_25479__$1;(statearr_25502_25543[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (19)))
{var inst_25461 = (state_25479[(2)]);var state_25479__$1 = state_25479;if(cljs.core.truth_(inst_25461))
{var statearr_25503_25544 = state_25479__$1;(statearr_25503_25544[(1)] = (20));
} else
{var statearr_25504_25545 = state_25479__$1;(statearr_25504_25545[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (11)))
{var inst_25438 = (state_25479[(8)]);var inst_25444 = (inst_25438 == null);var state_25479__$1 = state_25479;if(cljs.core.truth_(inst_25444))
{var statearr_25505_25546 = state_25479__$1;(statearr_25505_25546[(1)] = (14));
} else
{var statearr_25506_25547 = state_25479__$1;(statearr_25506_25547[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (9)))
{var inst_25431 = (state_25479[(10)]);var inst_25431__$1 = (state_25479[(2)]);var inst_25432 = cljs.core.get.call(null,inst_25431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25433 = cljs.core.get.call(null,inst_25431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25434 = cljs.core.get.call(null,inst_25431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25479__$1 = (function (){var statearr_25507 = state_25479;(statearr_25507[(17)] = inst_25433);
(statearr_25507[(10)] = inst_25431__$1);
(statearr_25507[(15)] = inst_25434);
return statearr_25507;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25479__$1,(10),inst_25432);
} else
{if((state_val_25480 === (5)))
{var inst_25423 = (state_25479[(7)]);var inst_25426 = cljs.core.seq_QMARK_.call(null,inst_25423);var state_25479__$1 = state_25479;if(inst_25426)
{var statearr_25508_25548 = state_25479__$1;(statearr_25508_25548[(1)] = (7));
} else
{var statearr_25509_25549 = state_25479__$1;(statearr_25509_25549[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (14)))
{var inst_25439 = (state_25479[(16)]);var inst_25446 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25439);var state_25479__$1 = state_25479;var statearr_25510_25550 = state_25479__$1;(statearr_25510_25550[(2)] = inst_25446);
(statearr_25510_25550[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (26)))
{var inst_25469 = (state_25479[(2)]);var state_25479__$1 = state_25479;var statearr_25511_25551 = state_25479__$1;(statearr_25511_25551[(2)] = inst_25469);
(statearr_25511_25551[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (16)))
{var inst_25449 = (state_25479[(2)]);var inst_25450 = calc_state.call(null);var inst_25423 = inst_25450;var state_25479__$1 = (function (){var statearr_25512 = state_25479;(statearr_25512[(7)] = inst_25423);
(statearr_25512[(18)] = inst_25449);
return statearr_25512;
})();var statearr_25513_25552 = state_25479__$1;(statearr_25513_25552[(2)] = null);
(statearr_25513_25552[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (10)))
{var inst_25438 = (state_25479[(8)]);var inst_25439 = (state_25479[(16)]);var inst_25437 = (state_25479[(2)]);var inst_25438__$1 = cljs.core.nth.call(null,inst_25437,(0),null);var inst_25439__$1 = cljs.core.nth.call(null,inst_25437,(1),null);var inst_25440 = (inst_25438__$1 == null);var inst_25441 = cljs.core._EQ_.call(null,inst_25439__$1,change);var inst_25442 = (inst_25440) || (inst_25441);var state_25479__$1 = (function (){var statearr_25514 = state_25479;(statearr_25514[(8)] = inst_25438__$1);
(statearr_25514[(16)] = inst_25439__$1);
return statearr_25514;
})();if(cljs.core.truth_(inst_25442))
{var statearr_25515_25553 = state_25479__$1;(statearr_25515_25553[(1)] = (11));
} else
{var statearr_25516_25554 = state_25479__$1;(statearr_25516_25554[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (18)))
{var inst_25433 = (state_25479[(17)]);var inst_25434 = (state_25479[(15)]);var inst_25439 = (state_25479[(16)]);var inst_25456 = cljs.core.empty_QMARK_.call(null,inst_25434);var inst_25457 = inst_25433.call(null,inst_25439);var inst_25458 = cljs.core.not.call(null,inst_25457);var inst_25459 = (inst_25456) && (inst_25458);var state_25479__$1 = state_25479;var statearr_25517_25555 = state_25479__$1;(statearr_25517_25555[(2)] = inst_25459);
(statearr_25517_25555[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25480 === (8)))
{var inst_25423 = (state_25479[(7)]);var state_25479__$1 = state_25479;var statearr_25518_25556 = state_25479__$1;(statearr_25518_25556[(2)] = inst_25423);
(statearr_25518_25556[(1)] = (9));
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
});})(c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15710__auto__,c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_25522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25522[(0)] = state_machine__15711__auto__);
(statearr_25522[(1)] = (1));
return statearr_25522;
});
var state_machine__15711__auto____1 = (function (state_25479){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_25479);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e25523){if((e25523 instanceof Object))
{var ex__15714__auto__ = e25523;var statearr_25524_25557 = state_25479;(statearr_25524_25557[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25558 = state_25479;
state_25479 = G__25558;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15768__auto__ = (function (){var statearr_25525 = f__15767__auto__.call(null);(statearr_25525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___25526);
return statearr_25525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___25526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25560 = {};return obj25560;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12535__auto__ = p;if(and__12535__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12535__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12547__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12535__auto__ = p;if(and__12535__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12535__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12547__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12535__auto__ = p;if(and__12535__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12535__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12547__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12535__auto__ = p;if(and__12535__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12535__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12547__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12547__auto__)
{return or__12547__auto__;
} else
{var or__12547__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12547__auto____$1)
{return or__12547__auto____$1;
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
return (function (topic){var or__12547__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12547__auto__))
{return or__12547__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12547__auto__,mults){
return (function (p1__25561_SHARP_){if(cljs.core.truth_(p1__25561_SHARP_.call(null,topic)))
{return p1__25561_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12547__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25685 = meta25685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25684.cljs$lang$type = true;
cljs.core.async.t25684.cljs$lang$ctorStr = "cljs.core.async/t25684";
cljs.core.async.t25684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t25684");
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25686){var self__ = this;
var _25686__$1 = this;return self__.meta25685;
});})(mults,ensure_mult))
;
cljs.core.async.t25684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25686,meta25685__$1){var self__ = this;
var _25686__$1 = this;return (new cljs.core.async.t25684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25684 = ((function (mults,ensure_mult){
return (function __GT_t25684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25685){return (new cljs.core.async.t25684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15766__auto___25806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___25806,mults,ensure_mult,p){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___25806,mults,ensure_mult,p){
return (function (state_25758){var state_val_25759 = (state_25758[(1)]);if((state_val_25759 === (7)))
{var inst_25754 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25760_25807 = state_25758__$1;(statearr_25760_25807[(2)] = inst_25754);
(statearr_25760_25807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (20)))
{var state_25758__$1 = state_25758;var statearr_25761_25808 = state_25758__$1;(statearr_25761_25808[(2)] = null);
(statearr_25761_25808[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (1)))
{var state_25758__$1 = state_25758;var statearr_25762_25809 = state_25758__$1;(statearr_25762_25809[(2)] = null);
(statearr_25762_25809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (24)))
{var inst_25737 = (state_25758[(7)]);var inst_25746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25737);var state_25758__$1 = state_25758;var statearr_25763_25810 = state_25758__$1;(statearr_25763_25810[(2)] = inst_25746);
(statearr_25763_25810[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (4)))
{var inst_25689 = (state_25758[(8)]);var inst_25689__$1 = (state_25758[(2)]);var inst_25690 = (inst_25689__$1 == null);var state_25758__$1 = (function (){var statearr_25764 = state_25758;(statearr_25764[(8)] = inst_25689__$1);
return statearr_25764;
})();if(cljs.core.truth_(inst_25690))
{var statearr_25765_25811 = state_25758__$1;(statearr_25765_25811[(1)] = (5));
} else
{var statearr_25766_25812 = state_25758__$1;(statearr_25766_25812[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (15)))
{var inst_25731 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25767_25813 = state_25758__$1;(statearr_25767_25813[(2)] = inst_25731);
(statearr_25767_25813[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (21)))
{var inst_25751 = (state_25758[(2)]);var state_25758__$1 = (function (){var statearr_25768 = state_25758;(statearr_25768[(9)] = inst_25751);
return statearr_25768;
})();var statearr_25769_25814 = state_25758__$1;(statearr_25769_25814[(2)] = null);
(statearr_25769_25814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (13)))
{var inst_25713 = (state_25758[(10)]);var inst_25715 = cljs.core.chunked_seq_QMARK_.call(null,inst_25713);var state_25758__$1 = state_25758;if(inst_25715)
{var statearr_25770_25815 = state_25758__$1;(statearr_25770_25815[(1)] = (16));
} else
{var statearr_25771_25816 = state_25758__$1;(statearr_25771_25816[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (22)))
{var inst_25743 = (state_25758[(2)]);var state_25758__$1 = state_25758;if(cljs.core.truth_(inst_25743))
{var statearr_25772_25817 = state_25758__$1;(statearr_25772_25817[(1)] = (23));
} else
{var statearr_25773_25818 = state_25758__$1;(statearr_25773_25818[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (6)))
{var inst_25689 = (state_25758[(8)]);var inst_25737 = (state_25758[(7)]);var inst_25739 = (state_25758[(11)]);var inst_25737__$1 = topic_fn.call(null,inst_25689);var inst_25738 = cljs.core.deref.call(null,mults);var inst_25739__$1 = cljs.core.get.call(null,inst_25738,inst_25737__$1);var state_25758__$1 = (function (){var statearr_25774 = state_25758;(statearr_25774[(7)] = inst_25737__$1);
(statearr_25774[(11)] = inst_25739__$1);
return statearr_25774;
})();if(cljs.core.truth_(inst_25739__$1))
{var statearr_25775_25819 = state_25758__$1;(statearr_25775_25819[(1)] = (19));
} else
{var statearr_25776_25820 = state_25758__$1;(statearr_25776_25820[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (25)))
{var inst_25748 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25777_25821 = state_25758__$1;(statearr_25777_25821[(2)] = inst_25748);
(statearr_25777_25821[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (17)))
{var inst_25713 = (state_25758[(10)]);var inst_25722 = cljs.core.first.call(null,inst_25713);var inst_25723 = cljs.core.async.muxch_STAR_.call(null,inst_25722);var inst_25724 = cljs.core.async.close_BANG_.call(null,inst_25723);var inst_25725 = cljs.core.next.call(null,inst_25713);var inst_25699 = inst_25725;var inst_25700 = null;var inst_25701 = (0);var inst_25702 = (0);var state_25758__$1 = (function (){var statearr_25778 = state_25758;(statearr_25778[(12)] = inst_25701);
(statearr_25778[(13)] = inst_25724);
(statearr_25778[(14)] = inst_25702);
(statearr_25778[(15)] = inst_25699);
(statearr_25778[(16)] = inst_25700);
return statearr_25778;
})();var statearr_25779_25822 = state_25758__$1;(statearr_25779_25822[(2)] = null);
(statearr_25779_25822[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (3)))
{var inst_25756 = (state_25758[(2)]);var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25758__$1,inst_25756);
} else
{if((state_val_25759 === (12)))
{var inst_25733 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25780_25823 = state_25758__$1;(statearr_25780_25823[(2)] = inst_25733);
(statearr_25780_25823[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (2)))
{var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25758__$1,(4),ch);
} else
{if((state_val_25759 === (23)))
{var state_25758__$1 = state_25758;var statearr_25781_25824 = state_25758__$1;(statearr_25781_25824[(2)] = null);
(statearr_25781_25824[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (19)))
{var inst_25689 = (state_25758[(8)]);var inst_25739 = (state_25758[(11)]);var inst_25741 = cljs.core.async.muxch_STAR_.call(null,inst_25739);var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25758__$1,(22),inst_25741,inst_25689);
} else
{if((state_val_25759 === (11)))
{var inst_25713 = (state_25758[(10)]);var inst_25699 = (state_25758[(15)]);var inst_25713__$1 = cljs.core.seq.call(null,inst_25699);var state_25758__$1 = (function (){var statearr_25782 = state_25758;(statearr_25782[(10)] = inst_25713__$1);
return statearr_25782;
})();if(inst_25713__$1)
{var statearr_25783_25825 = state_25758__$1;(statearr_25783_25825[(1)] = (13));
} else
{var statearr_25784_25826 = state_25758__$1;(statearr_25784_25826[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (9)))
{var inst_25735 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25785_25827 = state_25758__$1;(statearr_25785_25827[(2)] = inst_25735);
(statearr_25785_25827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (5)))
{var inst_25696 = cljs.core.deref.call(null,mults);var inst_25697 = cljs.core.vals.call(null,inst_25696);var inst_25698 = cljs.core.seq.call(null,inst_25697);var inst_25699 = inst_25698;var inst_25700 = null;var inst_25701 = (0);var inst_25702 = (0);var state_25758__$1 = (function (){var statearr_25786 = state_25758;(statearr_25786[(12)] = inst_25701);
(statearr_25786[(14)] = inst_25702);
(statearr_25786[(15)] = inst_25699);
(statearr_25786[(16)] = inst_25700);
return statearr_25786;
})();var statearr_25787_25828 = state_25758__$1;(statearr_25787_25828[(2)] = null);
(statearr_25787_25828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (14)))
{var state_25758__$1 = state_25758;var statearr_25791_25829 = state_25758__$1;(statearr_25791_25829[(2)] = null);
(statearr_25791_25829[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (16)))
{var inst_25713 = (state_25758[(10)]);var inst_25717 = cljs.core.chunk_first.call(null,inst_25713);var inst_25718 = cljs.core.chunk_rest.call(null,inst_25713);var inst_25719 = cljs.core.count.call(null,inst_25717);var inst_25699 = inst_25718;var inst_25700 = inst_25717;var inst_25701 = inst_25719;var inst_25702 = (0);var state_25758__$1 = (function (){var statearr_25792 = state_25758;(statearr_25792[(12)] = inst_25701);
(statearr_25792[(14)] = inst_25702);
(statearr_25792[(15)] = inst_25699);
(statearr_25792[(16)] = inst_25700);
return statearr_25792;
})();var statearr_25793_25830 = state_25758__$1;(statearr_25793_25830[(2)] = null);
(statearr_25793_25830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (10)))
{var inst_25701 = (state_25758[(12)]);var inst_25702 = (state_25758[(14)]);var inst_25699 = (state_25758[(15)]);var inst_25700 = (state_25758[(16)]);var inst_25707 = cljs.core._nth.call(null,inst_25700,inst_25702);var inst_25708 = cljs.core.async.muxch_STAR_.call(null,inst_25707);var inst_25709 = cljs.core.async.close_BANG_.call(null,inst_25708);var inst_25710 = (inst_25702 + (1));var tmp25788 = inst_25701;var tmp25789 = inst_25699;var tmp25790 = inst_25700;var inst_25699__$1 = tmp25789;var inst_25700__$1 = tmp25790;var inst_25701__$1 = tmp25788;var inst_25702__$1 = inst_25710;var state_25758__$1 = (function (){var statearr_25794 = state_25758;(statearr_25794[(12)] = inst_25701__$1);
(statearr_25794[(17)] = inst_25709);
(statearr_25794[(14)] = inst_25702__$1);
(statearr_25794[(15)] = inst_25699__$1);
(statearr_25794[(16)] = inst_25700__$1);
return statearr_25794;
})();var statearr_25795_25831 = state_25758__$1;(statearr_25795_25831[(2)] = null);
(statearr_25795_25831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (18)))
{var inst_25728 = (state_25758[(2)]);var state_25758__$1 = state_25758;var statearr_25796_25832 = state_25758__$1;(statearr_25796_25832[(2)] = inst_25728);
(statearr_25796_25832[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25759 === (8)))
{var inst_25701 = (state_25758[(12)]);var inst_25702 = (state_25758[(14)]);var inst_25704 = (inst_25702 < inst_25701);var inst_25705 = inst_25704;var state_25758__$1 = state_25758;if(cljs.core.truth_(inst_25705))
{var statearr_25797_25833 = state_25758__$1;(statearr_25797_25833[(1)] = (10));
} else
{var statearr_25798_25834 = state_25758__$1;(statearr_25798_25834[(1)] = (11));
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
});})(c__15766__auto___25806,mults,ensure_mult,p))
;return ((function (switch__15710__auto__,c__15766__auto___25806,mults,ensure_mult,p){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_25802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25802[(0)] = state_machine__15711__auto__);
(statearr_25802[(1)] = (1));
return statearr_25802;
});
var state_machine__15711__auto____1 = (function (state_25758){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_25758);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e25803){if((e25803 instanceof Object))
{var ex__15714__auto__ = e25803;var statearr_25804_25835 = state_25758;(statearr_25804_25835[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25836 = state_25758;
state_25758 = G__25836;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_25758){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_25758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___25806,mults,ensure_mult,p))
})();var state__15768__auto__ = (function (){var statearr_25805 = f__15767__auto__.call(null);(statearr_25805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___25806);
return statearr_25805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___25806,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15766__auto___25973 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25943){var state_val_25944 = (state_25943[(1)]);if((state_val_25944 === (7)))
{var state_25943__$1 = state_25943;var statearr_25945_25974 = state_25943__$1;(statearr_25945_25974[(2)] = null);
(statearr_25945_25974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (1)))
{var state_25943__$1 = state_25943;var statearr_25946_25975 = state_25943__$1;(statearr_25946_25975[(2)] = null);
(statearr_25946_25975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (4)))
{var inst_25907 = (state_25943[(7)]);var inst_25909 = (inst_25907 < cnt);var state_25943__$1 = state_25943;if(cljs.core.truth_(inst_25909))
{var statearr_25947_25976 = state_25943__$1;(statearr_25947_25976[(1)] = (6));
} else
{var statearr_25948_25977 = state_25943__$1;(statearr_25948_25977[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (15)))
{var inst_25939 = (state_25943[(2)]);var state_25943__$1 = state_25943;var statearr_25949_25978 = state_25943__$1;(statearr_25949_25978[(2)] = inst_25939);
(statearr_25949_25978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (13)))
{var inst_25932 = cljs.core.async.close_BANG_.call(null,out);var state_25943__$1 = state_25943;var statearr_25950_25979 = state_25943__$1;(statearr_25950_25979[(2)] = inst_25932);
(statearr_25950_25979[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (6)))
{var state_25943__$1 = state_25943;var statearr_25951_25980 = state_25943__$1;(statearr_25951_25980[(2)] = null);
(statearr_25951_25980[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (3)))
{var inst_25941 = (state_25943[(2)]);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25943__$1,inst_25941);
} else
{if((state_val_25944 === (12)))
{var inst_25929 = (state_25943[(8)]);var inst_25929__$1 = (state_25943[(2)]);var inst_25930 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25929__$1);var state_25943__$1 = (function (){var statearr_25952 = state_25943;(statearr_25952[(8)] = inst_25929__$1);
return statearr_25952;
})();if(cljs.core.truth_(inst_25930))
{var statearr_25953_25981 = state_25943__$1;(statearr_25953_25981[(1)] = (13));
} else
{var statearr_25954_25982 = state_25943__$1;(statearr_25954_25982[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (2)))
{var inst_25906 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25907 = (0);var state_25943__$1 = (function (){var statearr_25955 = state_25943;(statearr_25955[(9)] = inst_25906);
(statearr_25955[(7)] = inst_25907);
return statearr_25955;
})();var statearr_25956_25983 = state_25943__$1;(statearr_25956_25983[(2)] = null);
(statearr_25956_25983[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (11)))
{var inst_25907 = (state_25943[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25943,(10),Object,null,(9));var inst_25916 = chs__$1.call(null,inst_25907);var inst_25917 = done.call(null,inst_25907);var inst_25918 = cljs.core.async.take_BANG_.call(null,inst_25916,inst_25917);var state_25943__$1 = state_25943;var statearr_25957_25984 = state_25943__$1;(statearr_25957_25984[(2)] = inst_25918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (9)))
{var inst_25907 = (state_25943[(7)]);var inst_25920 = (state_25943[(2)]);var inst_25921 = (inst_25907 + (1));var inst_25907__$1 = inst_25921;var state_25943__$1 = (function (){var statearr_25958 = state_25943;(statearr_25958[(10)] = inst_25920);
(statearr_25958[(7)] = inst_25907__$1);
return statearr_25958;
})();var statearr_25959_25985 = state_25943__$1;(statearr_25959_25985[(2)] = null);
(statearr_25959_25985[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (5)))
{var inst_25927 = (state_25943[(2)]);var state_25943__$1 = (function (){var statearr_25960 = state_25943;(statearr_25960[(11)] = inst_25927);
return statearr_25960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25943__$1,(12),dchan);
} else
{if((state_val_25944 === (14)))
{var inst_25929 = (state_25943[(8)]);var inst_25934 = cljs.core.apply.call(null,f,inst_25929);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25943__$1,(16),out,inst_25934);
} else
{if((state_val_25944 === (16)))
{var inst_25936 = (state_25943[(2)]);var state_25943__$1 = (function (){var statearr_25961 = state_25943;(statearr_25961[(12)] = inst_25936);
return statearr_25961;
})();var statearr_25962_25986 = state_25943__$1;(statearr_25962_25986[(2)] = null);
(statearr_25962_25986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (10)))
{var inst_25911 = (state_25943[(2)]);var inst_25912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25943__$1 = (function (){var statearr_25963 = state_25943;(statearr_25963[(13)] = inst_25911);
return statearr_25963;
})();var statearr_25964_25987 = state_25943__$1;(statearr_25964_25987[(2)] = inst_25912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25944 === (8)))
{var inst_25925 = (state_25943[(2)]);var state_25943__$1 = state_25943;var statearr_25965_25988 = state_25943__$1;(statearr_25965_25988[(2)] = inst_25925);
(statearr_25965_25988[(1)] = (5));
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
});})(c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15710__auto__,c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_25969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25969[(0)] = state_machine__15711__auto__);
(statearr_25969[(1)] = (1));
return statearr_25969;
});
var state_machine__15711__auto____1 = (function (state_25943){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_25943);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e25970){if((e25970 instanceof Object))
{var ex__15714__auto__ = e25970;var statearr_25971_25989 = state_25943;(statearr_25971_25989[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25970;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25990 = state_25943;
state_25943 = G__25990;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_25943){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_25943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15768__auto__ = (function (){var statearr_25972 = f__15767__auto__.call(null);(statearr_25972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___25973);
return statearr_25972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___25973,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26098,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26098,out){
return (function (state_26074){var state_val_26075 = (state_26074[(1)]);if((state_val_26075 === (7)))
{var inst_26054 = (state_26074[(7)]);var inst_26053 = (state_26074[(8)]);var inst_26053__$1 = (state_26074[(2)]);var inst_26054__$1 = cljs.core.nth.call(null,inst_26053__$1,(0),null);var inst_26055 = cljs.core.nth.call(null,inst_26053__$1,(1),null);var inst_26056 = (inst_26054__$1 == null);var state_26074__$1 = (function (){var statearr_26076 = state_26074;(statearr_26076[(7)] = inst_26054__$1);
(statearr_26076[(8)] = inst_26053__$1);
(statearr_26076[(9)] = inst_26055);
return statearr_26076;
})();if(cljs.core.truth_(inst_26056))
{var statearr_26077_26099 = state_26074__$1;(statearr_26077_26099[(1)] = (8));
} else
{var statearr_26078_26100 = state_26074__$1;(statearr_26078_26100[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (1)))
{var inst_26045 = cljs.core.vec.call(null,chs);var inst_26046 = inst_26045;var state_26074__$1 = (function (){var statearr_26079 = state_26074;(statearr_26079[(10)] = inst_26046);
return statearr_26079;
})();var statearr_26080_26101 = state_26074__$1;(statearr_26080_26101[(2)] = null);
(statearr_26080_26101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (4)))
{var inst_26046 = (state_26074[(10)]);var state_26074__$1 = state_26074;return cljs.core.async.ioc_alts_BANG_.call(null,state_26074__$1,(7),inst_26046);
} else
{if((state_val_26075 === (6)))
{var inst_26070 = (state_26074[(2)]);var state_26074__$1 = state_26074;var statearr_26081_26102 = state_26074__$1;(statearr_26081_26102[(2)] = inst_26070);
(statearr_26081_26102[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (3)))
{var inst_26072 = (state_26074[(2)]);var state_26074__$1 = state_26074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26074__$1,inst_26072);
} else
{if((state_val_26075 === (2)))
{var inst_26046 = (state_26074[(10)]);var inst_26048 = cljs.core.count.call(null,inst_26046);var inst_26049 = (inst_26048 > (0));var state_26074__$1 = state_26074;if(cljs.core.truth_(inst_26049))
{var statearr_26083_26103 = state_26074__$1;(statearr_26083_26103[(1)] = (4));
} else
{var statearr_26084_26104 = state_26074__$1;(statearr_26084_26104[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (11)))
{var inst_26046 = (state_26074[(10)]);var inst_26063 = (state_26074[(2)]);var tmp26082 = inst_26046;var inst_26046__$1 = tmp26082;var state_26074__$1 = (function (){var statearr_26085 = state_26074;(statearr_26085[(10)] = inst_26046__$1);
(statearr_26085[(11)] = inst_26063);
return statearr_26085;
})();var statearr_26086_26105 = state_26074__$1;(statearr_26086_26105[(2)] = null);
(statearr_26086_26105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (9)))
{var inst_26054 = (state_26074[(7)]);var state_26074__$1 = state_26074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26074__$1,(11),out,inst_26054);
} else
{if((state_val_26075 === (5)))
{var inst_26068 = cljs.core.async.close_BANG_.call(null,out);var state_26074__$1 = state_26074;var statearr_26087_26106 = state_26074__$1;(statearr_26087_26106[(2)] = inst_26068);
(statearr_26087_26106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (10)))
{var inst_26066 = (state_26074[(2)]);var state_26074__$1 = state_26074;var statearr_26088_26107 = state_26074__$1;(statearr_26088_26107[(2)] = inst_26066);
(statearr_26088_26107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26075 === (8)))
{var inst_26054 = (state_26074[(7)]);var inst_26053 = (state_26074[(8)]);var inst_26046 = (state_26074[(10)]);var inst_26055 = (state_26074[(9)]);var inst_26058 = (function (){var c = inst_26055;var v = inst_26054;var vec__26051 = inst_26053;var cs = inst_26046;return ((function (c,v,vec__26051,cs,inst_26054,inst_26053,inst_26046,inst_26055,state_val_26075,c__15766__auto___26098,out){
return (function (p1__25991_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25991_SHARP_);
});
;})(c,v,vec__26051,cs,inst_26054,inst_26053,inst_26046,inst_26055,state_val_26075,c__15766__auto___26098,out))
})();var inst_26059 = cljs.core.filterv.call(null,inst_26058,inst_26046);var inst_26046__$1 = inst_26059;var state_26074__$1 = (function (){var statearr_26089 = state_26074;(statearr_26089[(10)] = inst_26046__$1);
return statearr_26089;
})();var statearr_26090_26108 = state_26074__$1;(statearr_26090_26108[(2)] = null);
(statearr_26090_26108[(1)] = (2));
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
});})(c__15766__auto___26098,out))
;return ((function (switch__15710__auto__,c__15766__auto___26098,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26094 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26094[(0)] = state_machine__15711__auto__);
(statearr_26094[(1)] = (1));
return statearr_26094;
});
var state_machine__15711__auto____1 = (function (state_26074){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26074);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26095){if((e26095 instanceof Object))
{var ex__15714__auto__ = e26095;var statearr_26096_26109 = state_26074;(statearr_26096_26109[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26110 = state_26074;
state_26074 = G__26110;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26074){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26098,out))
})();var state__15768__auto__ = (function (){var statearr_26097 = f__15767__auto__.call(null);(statearr_26097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26098);
return statearr_26097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26098,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26203 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26203,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26203,out){
return (function (state_26180){var state_val_26181 = (state_26180[(1)]);if((state_val_26181 === (7)))
{var inst_26162 = (state_26180[(7)]);var inst_26162__$1 = (state_26180[(2)]);var inst_26163 = (inst_26162__$1 == null);var inst_26164 = cljs.core.not.call(null,inst_26163);var state_26180__$1 = (function (){var statearr_26182 = state_26180;(statearr_26182[(7)] = inst_26162__$1);
return statearr_26182;
})();if(inst_26164)
{var statearr_26183_26204 = state_26180__$1;(statearr_26183_26204[(1)] = (8));
} else
{var statearr_26184_26205 = state_26180__$1;(statearr_26184_26205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (1)))
{var inst_26157 = (0);var state_26180__$1 = (function (){var statearr_26185 = state_26180;(statearr_26185[(8)] = inst_26157);
return statearr_26185;
})();var statearr_26186_26206 = state_26180__$1;(statearr_26186_26206[(2)] = null);
(statearr_26186_26206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (4)))
{var state_26180__$1 = state_26180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26180__$1,(7),ch);
} else
{if((state_val_26181 === (6)))
{var inst_26175 = (state_26180[(2)]);var state_26180__$1 = state_26180;var statearr_26187_26207 = state_26180__$1;(statearr_26187_26207[(2)] = inst_26175);
(statearr_26187_26207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (3)))
{var inst_26177 = (state_26180[(2)]);var inst_26178 = cljs.core.async.close_BANG_.call(null,out);var state_26180__$1 = (function (){var statearr_26188 = state_26180;(statearr_26188[(9)] = inst_26177);
return statearr_26188;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26180__$1,inst_26178);
} else
{if((state_val_26181 === (2)))
{var inst_26157 = (state_26180[(8)]);var inst_26159 = (inst_26157 < n);var state_26180__$1 = state_26180;if(cljs.core.truth_(inst_26159))
{var statearr_26189_26208 = state_26180__$1;(statearr_26189_26208[(1)] = (4));
} else
{var statearr_26190_26209 = state_26180__$1;(statearr_26190_26209[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (11)))
{var inst_26157 = (state_26180[(8)]);var inst_26167 = (state_26180[(2)]);var inst_26168 = (inst_26157 + (1));var inst_26157__$1 = inst_26168;var state_26180__$1 = (function (){var statearr_26191 = state_26180;(statearr_26191[(8)] = inst_26157__$1);
(statearr_26191[(10)] = inst_26167);
return statearr_26191;
})();var statearr_26192_26210 = state_26180__$1;(statearr_26192_26210[(2)] = null);
(statearr_26192_26210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (9)))
{var state_26180__$1 = state_26180;var statearr_26193_26211 = state_26180__$1;(statearr_26193_26211[(2)] = null);
(statearr_26193_26211[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (5)))
{var state_26180__$1 = state_26180;var statearr_26194_26212 = state_26180__$1;(statearr_26194_26212[(2)] = null);
(statearr_26194_26212[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (10)))
{var inst_26172 = (state_26180[(2)]);var state_26180__$1 = state_26180;var statearr_26195_26213 = state_26180__$1;(statearr_26195_26213[(2)] = inst_26172);
(statearr_26195_26213[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26181 === (8)))
{var inst_26162 = (state_26180[(7)]);var state_26180__$1 = state_26180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26180__$1,(11),out,inst_26162);
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
});})(c__15766__auto___26203,out))
;return ((function (switch__15710__auto__,c__15766__auto___26203,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26199 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26199[(0)] = state_machine__15711__auto__);
(statearr_26199[(1)] = (1));
return statearr_26199;
});
var state_machine__15711__auto____1 = (function (state_26180){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26180);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26200){if((e26200 instanceof Object))
{var ex__15714__auto__ = e26200;var statearr_26201_26214 = state_26180;(statearr_26201_26214[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26200;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26215 = state_26180;
state_26180 = G__26215;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26180){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26203,out))
})();var state__15768__auto__ = (function (){var statearr_26202 = f__15767__auto__.call(null);(statearr_26202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26203);
return statearr_26202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26203,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26223 = (function (ch,f,map_LT_,meta26224){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26224 = meta26224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26223.cljs$lang$type = true;
cljs.core.async.t26223.cljs$lang$ctorStr = "cljs.core.async/t26223";
cljs.core.async.t26223.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t26223");
});
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26226 = (function (fn1,_,meta26224,ch,f,map_LT_,meta26227){
this.fn1 = fn1;
this._ = _;
this.meta26224 = meta26224;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26227 = meta26227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26226.cljs$lang$type = true;
cljs.core.async.t26226.cljs$lang$ctorStr = "cljs.core.async/t26226";
cljs.core.async.t26226.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t26226");
});})(___$1))
;
cljs.core.async.t26226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t26226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__26216_SHARP_){return f1.call(null,(((p1__26216_SHARP_ == null))?null:self__.f.call(null,p1__26216_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t26226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26228){var self__ = this;
var _26228__$1 = this;return self__.meta26227;
});})(___$1))
;
cljs.core.async.t26226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26228,meta26227__$1){var self__ = this;
var _26228__$1 = this;return (new cljs.core.async.t26226(self__.fn1,self__._,self__.meta26224,self__.ch,self__.f,self__.map_LT_,meta26227__$1));
});})(___$1))
;
cljs.core.async.__GT_t26226 = ((function (___$1){
return (function __GT_t26226(fn1__$1,___$2,meta26224__$1,ch__$2,f__$2,map_LT___$2,meta26227){return (new cljs.core.async.t26226(fn1__$1,___$2,meta26224__$1,ch__$2,f__$2,map_LT___$2,meta26227));
});})(___$1))
;
}
return (new cljs.core.async.t26226(fn1,___$1,self__.meta26224,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12535__auto__ = ret;if(cljs.core.truth_(and__12535__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12535__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26225){var self__ = this;
var _26225__$1 = this;return self__.meta26224;
});
cljs.core.async.t26223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26225,meta26224__$1){var self__ = this;
var _26225__$1 = this;return (new cljs.core.async.t26223(self__.ch,self__.f,self__.map_LT_,meta26224__$1));
});
cljs.core.async.__GT_t26223 = (function __GT_t26223(ch__$1,f__$1,map_LT___$1,meta26224){return (new cljs.core.async.t26223(ch__$1,f__$1,map_LT___$1,meta26224));
});
}
return (new cljs.core.async.t26223(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26232 = (function (ch,f,map_GT_,meta26233){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26233 = meta26233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26232.cljs$lang$type = true;
cljs.core.async.t26232.cljs$lang$ctorStr = "cljs.core.async/t26232";
cljs.core.async.t26232.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t26232");
});
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26234){var self__ = this;
var _26234__$1 = this;return self__.meta26233;
});
cljs.core.async.t26232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26234,meta26233__$1){var self__ = this;
var _26234__$1 = this;return (new cljs.core.async.t26232(self__.ch,self__.f,self__.map_GT_,meta26233__$1));
});
cljs.core.async.__GT_t26232 = (function __GT_t26232(ch__$1,f__$1,map_GT___$1,meta26233){return (new cljs.core.async.t26232(ch__$1,f__$1,map_GT___$1,meta26233));
});
}
return (new cljs.core.async.t26232(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26238 = (function (ch,p,filter_GT_,meta26239){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26239 = meta26239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26238.cljs$lang$type = true;
cljs.core.async.t26238.cljs$lang$ctorStr = "cljs.core.async/t26238";
cljs.core.async.t26238.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t26238");
});
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t26238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26240){var self__ = this;
var _26240__$1 = this;return self__.meta26239;
});
cljs.core.async.t26238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26240,meta26239__$1){var self__ = this;
var _26240__$1 = this;return (new cljs.core.async.t26238(self__.ch,self__.p,self__.filter_GT_,meta26239__$1));
});
cljs.core.async.__GT_t26238 = (function __GT_t26238(ch__$1,p__$1,filter_GT___$1,meta26239){return (new cljs.core.async.t26238(ch__$1,p__$1,filter_GT___$1,meta26239));
});
}
return (new cljs.core.async.t26238(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26323,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26323,out){
return (function (state_26302){var state_val_26303 = (state_26302[(1)]);if((state_val_26303 === (7)))
{var inst_26298 = (state_26302[(2)]);var state_26302__$1 = state_26302;var statearr_26304_26324 = state_26302__$1;(statearr_26304_26324[(2)] = inst_26298);
(statearr_26304_26324[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (1)))
{var state_26302__$1 = state_26302;var statearr_26305_26325 = state_26302__$1;(statearr_26305_26325[(2)] = null);
(statearr_26305_26325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (4)))
{var inst_26284 = (state_26302[(7)]);var inst_26284__$1 = (state_26302[(2)]);var inst_26285 = (inst_26284__$1 == null);var state_26302__$1 = (function (){var statearr_26306 = state_26302;(statearr_26306[(7)] = inst_26284__$1);
return statearr_26306;
})();if(cljs.core.truth_(inst_26285))
{var statearr_26307_26326 = state_26302__$1;(statearr_26307_26326[(1)] = (5));
} else
{var statearr_26308_26327 = state_26302__$1;(statearr_26308_26327[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (6)))
{var inst_26284 = (state_26302[(7)]);var inst_26289 = p.call(null,inst_26284);var state_26302__$1 = state_26302;if(cljs.core.truth_(inst_26289))
{var statearr_26309_26328 = state_26302__$1;(statearr_26309_26328[(1)] = (8));
} else
{var statearr_26310_26329 = state_26302__$1;(statearr_26310_26329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (3)))
{var inst_26300 = (state_26302[(2)]);var state_26302__$1 = state_26302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26302__$1,inst_26300);
} else
{if((state_val_26303 === (2)))
{var state_26302__$1 = state_26302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26302__$1,(4),ch);
} else
{if((state_val_26303 === (11)))
{var inst_26292 = (state_26302[(2)]);var state_26302__$1 = state_26302;var statearr_26311_26330 = state_26302__$1;(statearr_26311_26330[(2)] = inst_26292);
(statearr_26311_26330[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (9)))
{var state_26302__$1 = state_26302;var statearr_26312_26331 = state_26302__$1;(statearr_26312_26331[(2)] = null);
(statearr_26312_26331[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (5)))
{var inst_26287 = cljs.core.async.close_BANG_.call(null,out);var state_26302__$1 = state_26302;var statearr_26313_26332 = state_26302__$1;(statearr_26313_26332[(2)] = inst_26287);
(statearr_26313_26332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (10)))
{var inst_26295 = (state_26302[(2)]);var state_26302__$1 = (function (){var statearr_26314 = state_26302;(statearr_26314[(8)] = inst_26295);
return statearr_26314;
})();var statearr_26315_26333 = state_26302__$1;(statearr_26315_26333[(2)] = null);
(statearr_26315_26333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26303 === (8)))
{var inst_26284 = (state_26302[(7)]);var state_26302__$1 = state_26302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26302__$1,(11),out,inst_26284);
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
});})(c__15766__auto___26323,out))
;return ((function (switch__15710__auto__,c__15766__auto___26323,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26319 = [null,null,null,null,null,null,null,null,null];(statearr_26319[(0)] = state_machine__15711__auto__);
(statearr_26319[(1)] = (1));
return statearr_26319;
});
var state_machine__15711__auto____1 = (function (state_26302){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26302);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26320){if((e26320 instanceof Object))
{var ex__15714__auto__ = e26320;var statearr_26321_26334 = state_26302;(statearr_26321_26334[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26335 = state_26302;
state_26302 = G__26335;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26302){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26323,out))
})();var state__15768__auto__ = (function (){var statearr_26322 = f__15767__auto__.call(null);(statearr_26322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26323);
return statearr_26322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26323,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15766__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto__){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto__){
return (function (state_26501){var state_val_26502 = (state_26501[(1)]);if((state_val_26502 === (7)))
{var inst_26497 = (state_26501[(2)]);var state_26501__$1 = state_26501;var statearr_26503_26544 = state_26501__$1;(statearr_26503_26544[(2)] = inst_26497);
(statearr_26503_26544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (20)))
{var inst_26467 = (state_26501[(7)]);var inst_26478 = (state_26501[(2)]);var inst_26479 = cljs.core.next.call(null,inst_26467);var inst_26453 = inst_26479;var inst_26454 = null;var inst_26455 = (0);var inst_26456 = (0);var state_26501__$1 = (function (){var statearr_26504 = state_26501;(statearr_26504[(8)] = inst_26454);
(statearr_26504[(9)] = inst_26478);
(statearr_26504[(10)] = inst_26453);
(statearr_26504[(11)] = inst_26456);
(statearr_26504[(12)] = inst_26455);
return statearr_26504;
})();var statearr_26505_26545 = state_26501__$1;(statearr_26505_26545[(2)] = null);
(statearr_26505_26545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (1)))
{var state_26501__$1 = state_26501;var statearr_26506_26546 = state_26501__$1;(statearr_26506_26546[(2)] = null);
(statearr_26506_26546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (4)))
{var inst_26442 = (state_26501[(13)]);var inst_26442__$1 = (state_26501[(2)]);var inst_26443 = (inst_26442__$1 == null);var state_26501__$1 = (function (){var statearr_26507 = state_26501;(statearr_26507[(13)] = inst_26442__$1);
return statearr_26507;
})();if(cljs.core.truth_(inst_26443))
{var statearr_26508_26547 = state_26501__$1;(statearr_26508_26547[(1)] = (5));
} else
{var statearr_26509_26548 = state_26501__$1;(statearr_26509_26548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (15)))
{var state_26501__$1 = state_26501;var statearr_26513_26549 = state_26501__$1;(statearr_26513_26549[(2)] = null);
(statearr_26513_26549[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (21)))
{var state_26501__$1 = state_26501;var statearr_26514_26550 = state_26501__$1;(statearr_26514_26550[(2)] = null);
(statearr_26514_26550[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (13)))
{var inst_26454 = (state_26501[(8)]);var inst_26453 = (state_26501[(10)]);var inst_26456 = (state_26501[(11)]);var inst_26455 = (state_26501[(12)]);var inst_26463 = (state_26501[(2)]);var inst_26464 = (inst_26456 + (1));var tmp26510 = inst_26454;var tmp26511 = inst_26453;var tmp26512 = inst_26455;var inst_26453__$1 = tmp26511;var inst_26454__$1 = tmp26510;var inst_26455__$1 = tmp26512;var inst_26456__$1 = inst_26464;var state_26501__$1 = (function (){var statearr_26515 = state_26501;(statearr_26515[(8)] = inst_26454__$1);
(statearr_26515[(14)] = inst_26463);
(statearr_26515[(10)] = inst_26453__$1);
(statearr_26515[(11)] = inst_26456__$1);
(statearr_26515[(12)] = inst_26455__$1);
return statearr_26515;
})();var statearr_26516_26551 = state_26501__$1;(statearr_26516_26551[(2)] = null);
(statearr_26516_26551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (22)))
{var state_26501__$1 = state_26501;var statearr_26517_26552 = state_26501__$1;(statearr_26517_26552[(2)] = null);
(statearr_26517_26552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (6)))
{var inst_26442 = (state_26501[(13)]);var inst_26451 = f.call(null,inst_26442);var inst_26452 = cljs.core.seq.call(null,inst_26451);var inst_26453 = inst_26452;var inst_26454 = null;var inst_26455 = (0);var inst_26456 = (0);var state_26501__$1 = (function (){var statearr_26518 = state_26501;(statearr_26518[(8)] = inst_26454);
(statearr_26518[(10)] = inst_26453);
(statearr_26518[(11)] = inst_26456);
(statearr_26518[(12)] = inst_26455);
return statearr_26518;
})();var statearr_26519_26553 = state_26501__$1;(statearr_26519_26553[(2)] = null);
(statearr_26519_26553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (17)))
{var inst_26467 = (state_26501[(7)]);var inst_26471 = cljs.core.chunk_first.call(null,inst_26467);var inst_26472 = cljs.core.chunk_rest.call(null,inst_26467);var inst_26473 = cljs.core.count.call(null,inst_26471);var inst_26453 = inst_26472;var inst_26454 = inst_26471;var inst_26455 = inst_26473;var inst_26456 = (0);var state_26501__$1 = (function (){var statearr_26520 = state_26501;(statearr_26520[(8)] = inst_26454);
(statearr_26520[(10)] = inst_26453);
(statearr_26520[(11)] = inst_26456);
(statearr_26520[(12)] = inst_26455);
return statearr_26520;
})();var statearr_26521_26554 = state_26501__$1;(statearr_26521_26554[(2)] = null);
(statearr_26521_26554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (3)))
{var inst_26499 = (state_26501[(2)]);var state_26501__$1 = state_26501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else
{if((state_val_26502 === (12)))
{var inst_26487 = (state_26501[(2)]);var state_26501__$1 = state_26501;var statearr_26522_26555 = state_26501__$1;(statearr_26522_26555[(2)] = inst_26487);
(statearr_26522_26555[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (2)))
{var state_26501__$1 = state_26501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(4),in$);
} else
{if((state_val_26502 === (23)))
{var inst_26495 = (state_26501[(2)]);var state_26501__$1 = state_26501;var statearr_26523_26556 = state_26501__$1;(statearr_26523_26556[(2)] = inst_26495);
(statearr_26523_26556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (19)))
{var inst_26482 = (state_26501[(2)]);var state_26501__$1 = state_26501;var statearr_26524_26557 = state_26501__$1;(statearr_26524_26557[(2)] = inst_26482);
(statearr_26524_26557[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (11)))
{var inst_26453 = (state_26501[(10)]);var inst_26467 = (state_26501[(7)]);var inst_26467__$1 = cljs.core.seq.call(null,inst_26453);var state_26501__$1 = (function (){var statearr_26525 = state_26501;(statearr_26525[(7)] = inst_26467__$1);
return statearr_26525;
})();if(inst_26467__$1)
{var statearr_26526_26558 = state_26501__$1;(statearr_26526_26558[(1)] = (14));
} else
{var statearr_26527_26559 = state_26501__$1;(statearr_26527_26559[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (9)))
{var inst_26489 = (state_26501[(2)]);var inst_26490 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26501__$1 = (function (){var statearr_26528 = state_26501;(statearr_26528[(15)] = inst_26489);
return statearr_26528;
})();if(cljs.core.truth_(inst_26490))
{var statearr_26529_26560 = state_26501__$1;(statearr_26529_26560[(1)] = (21));
} else
{var statearr_26530_26561 = state_26501__$1;(statearr_26530_26561[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (5)))
{var inst_26445 = cljs.core.async.close_BANG_.call(null,out);var state_26501__$1 = state_26501;var statearr_26531_26562 = state_26501__$1;(statearr_26531_26562[(2)] = inst_26445);
(statearr_26531_26562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (14)))
{var inst_26467 = (state_26501[(7)]);var inst_26469 = cljs.core.chunked_seq_QMARK_.call(null,inst_26467);var state_26501__$1 = state_26501;if(inst_26469)
{var statearr_26532_26563 = state_26501__$1;(statearr_26532_26563[(1)] = (17));
} else
{var statearr_26533_26564 = state_26501__$1;(statearr_26533_26564[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (16)))
{var inst_26485 = (state_26501[(2)]);var state_26501__$1 = state_26501;var statearr_26534_26565 = state_26501__$1;(statearr_26534_26565[(2)] = inst_26485);
(statearr_26534_26565[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26502 === (10)))
{var inst_26454 = (state_26501[(8)]);var inst_26456 = (state_26501[(11)]);var inst_26461 = cljs.core._nth.call(null,inst_26454,inst_26456);var state_26501__$1 = state_26501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26501__$1,(13),out,inst_26461);
} else
{if((state_val_26502 === (18)))
{var inst_26467 = (state_26501[(7)]);var inst_26476 = cljs.core.first.call(null,inst_26467);var state_26501__$1 = state_26501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26501__$1,(20),out,inst_26476);
} else
{if((state_val_26502 === (8)))
{var inst_26456 = (state_26501[(11)]);var inst_26455 = (state_26501[(12)]);var inst_26458 = (inst_26456 < inst_26455);var inst_26459 = inst_26458;var state_26501__$1 = state_26501;if(cljs.core.truth_(inst_26459))
{var statearr_26535_26566 = state_26501__$1;(statearr_26535_26566[(1)] = (10));
} else
{var statearr_26536_26567 = state_26501__$1;(statearr_26536_26567[(1)] = (11));
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
});})(c__15766__auto__))
;return ((function (switch__15710__auto__,c__15766__auto__){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26540[(0)] = state_machine__15711__auto__);
(statearr_26540[(1)] = (1));
return statearr_26540;
});
var state_machine__15711__auto____1 = (function (state_26501){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26501);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26541){if((e26541 instanceof Object))
{var ex__15714__auto__ = e26541;var statearr_26542_26568 = state_26501;(statearr_26542_26568[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26569 = state_26501;
state_26501 = G__26569;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto__))
})();var state__15768__auto__ = (function (){var statearr_26543 = f__15767__auto__.call(null);(statearr_26543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto__);
return statearr_26543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto__))
);
return c__15766__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26666,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26666,out){
return (function (state_26641){var state_val_26642 = (state_26641[(1)]);if((state_val_26642 === (7)))
{var inst_26636 = (state_26641[(2)]);var state_26641__$1 = state_26641;var statearr_26643_26667 = state_26641__$1;(statearr_26643_26667[(2)] = inst_26636);
(statearr_26643_26667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (1)))
{var inst_26618 = null;var state_26641__$1 = (function (){var statearr_26644 = state_26641;(statearr_26644[(7)] = inst_26618);
return statearr_26644;
})();var statearr_26645_26668 = state_26641__$1;(statearr_26645_26668[(2)] = null);
(statearr_26645_26668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (4)))
{var inst_26621 = (state_26641[(8)]);var inst_26621__$1 = (state_26641[(2)]);var inst_26622 = (inst_26621__$1 == null);var inst_26623 = cljs.core.not.call(null,inst_26622);var state_26641__$1 = (function (){var statearr_26646 = state_26641;(statearr_26646[(8)] = inst_26621__$1);
return statearr_26646;
})();if(inst_26623)
{var statearr_26647_26669 = state_26641__$1;(statearr_26647_26669[(1)] = (5));
} else
{var statearr_26648_26670 = state_26641__$1;(statearr_26648_26670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (6)))
{var state_26641__$1 = state_26641;var statearr_26649_26671 = state_26641__$1;(statearr_26649_26671[(2)] = null);
(statearr_26649_26671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (3)))
{var inst_26638 = (state_26641[(2)]);var inst_26639 = cljs.core.async.close_BANG_.call(null,out);var state_26641__$1 = (function (){var statearr_26650 = state_26641;(statearr_26650[(9)] = inst_26638);
return statearr_26650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26641__$1,inst_26639);
} else
{if((state_val_26642 === (2)))
{var state_26641__$1 = state_26641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26641__$1,(4),ch);
} else
{if((state_val_26642 === (11)))
{var inst_26621 = (state_26641[(8)]);var inst_26630 = (state_26641[(2)]);var inst_26618 = inst_26621;var state_26641__$1 = (function (){var statearr_26651 = state_26641;(statearr_26651[(10)] = inst_26630);
(statearr_26651[(7)] = inst_26618);
return statearr_26651;
})();var statearr_26652_26672 = state_26641__$1;(statearr_26652_26672[(2)] = null);
(statearr_26652_26672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (9)))
{var inst_26621 = (state_26641[(8)]);var state_26641__$1 = state_26641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26641__$1,(11),out,inst_26621);
} else
{if((state_val_26642 === (5)))
{var inst_26618 = (state_26641[(7)]);var inst_26621 = (state_26641[(8)]);var inst_26625 = cljs.core._EQ_.call(null,inst_26621,inst_26618);var state_26641__$1 = state_26641;if(inst_26625)
{var statearr_26654_26673 = state_26641__$1;(statearr_26654_26673[(1)] = (8));
} else
{var statearr_26655_26674 = state_26641__$1;(statearr_26655_26674[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (10)))
{var inst_26633 = (state_26641[(2)]);var state_26641__$1 = state_26641;var statearr_26656_26675 = state_26641__$1;(statearr_26656_26675[(2)] = inst_26633);
(statearr_26656_26675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26642 === (8)))
{var inst_26618 = (state_26641[(7)]);var tmp26653 = inst_26618;var inst_26618__$1 = tmp26653;var state_26641__$1 = (function (){var statearr_26657 = state_26641;(statearr_26657[(7)] = inst_26618__$1);
return statearr_26657;
})();var statearr_26658_26676 = state_26641__$1;(statearr_26658_26676[(2)] = null);
(statearr_26658_26676[(1)] = (2));
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
});})(c__15766__auto___26666,out))
;return ((function (switch__15710__auto__,c__15766__auto___26666,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26662 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26662[(0)] = state_machine__15711__auto__);
(statearr_26662[(1)] = (1));
return statearr_26662;
});
var state_machine__15711__auto____1 = (function (state_26641){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26641);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26663){if((e26663 instanceof Object))
{var ex__15714__auto__ = e26663;var statearr_26664_26677 = state_26641;(statearr_26664_26677[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26678 = state_26641;
state_26641 = G__26678;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26641){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26666,out))
})();var state__15768__auto__ = (function (){var statearr_26665 = f__15767__auto__.call(null);(statearr_26665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26666);
return statearr_26665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26666,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26813 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26813,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26813,out){
return (function (state_26783){var state_val_26784 = (state_26783[(1)]);if((state_val_26784 === (7)))
{var inst_26779 = (state_26783[(2)]);var state_26783__$1 = state_26783;var statearr_26785_26814 = state_26783__$1;(statearr_26785_26814[(2)] = inst_26779);
(statearr_26785_26814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (1)))
{var inst_26746 = (new Array(n));var inst_26747 = inst_26746;var inst_26748 = (0);var state_26783__$1 = (function (){var statearr_26786 = state_26783;(statearr_26786[(7)] = inst_26748);
(statearr_26786[(8)] = inst_26747);
return statearr_26786;
})();var statearr_26787_26815 = state_26783__$1;(statearr_26787_26815[(2)] = null);
(statearr_26787_26815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (4)))
{var inst_26751 = (state_26783[(9)]);var inst_26751__$1 = (state_26783[(2)]);var inst_26752 = (inst_26751__$1 == null);var inst_26753 = cljs.core.not.call(null,inst_26752);var state_26783__$1 = (function (){var statearr_26788 = state_26783;(statearr_26788[(9)] = inst_26751__$1);
return statearr_26788;
})();if(inst_26753)
{var statearr_26789_26816 = state_26783__$1;(statearr_26789_26816[(1)] = (5));
} else
{var statearr_26790_26817 = state_26783__$1;(statearr_26790_26817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (15)))
{var inst_26773 = (state_26783[(2)]);var state_26783__$1 = state_26783;var statearr_26791_26818 = state_26783__$1;(statearr_26791_26818[(2)] = inst_26773);
(statearr_26791_26818[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (13)))
{var state_26783__$1 = state_26783;var statearr_26792_26819 = state_26783__$1;(statearr_26792_26819[(2)] = null);
(statearr_26792_26819[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (6)))
{var inst_26748 = (state_26783[(7)]);var inst_26769 = (inst_26748 > (0));var state_26783__$1 = state_26783;if(cljs.core.truth_(inst_26769))
{var statearr_26793_26820 = state_26783__$1;(statearr_26793_26820[(1)] = (12));
} else
{var statearr_26794_26821 = state_26783__$1;(statearr_26794_26821[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (3)))
{var inst_26781 = (state_26783[(2)]);var state_26783__$1 = state_26783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26783__$1,inst_26781);
} else
{if((state_val_26784 === (12)))
{var inst_26747 = (state_26783[(8)]);var inst_26771 = cljs.core.vec.call(null,inst_26747);var state_26783__$1 = state_26783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26783__$1,(15),out,inst_26771);
} else
{if((state_val_26784 === (2)))
{var state_26783__$1 = state_26783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26783__$1,(4),ch);
} else
{if((state_val_26784 === (11)))
{var inst_26763 = (state_26783[(2)]);var inst_26764 = (new Array(n));var inst_26747 = inst_26764;var inst_26748 = (0);var state_26783__$1 = (function (){var statearr_26795 = state_26783;(statearr_26795[(10)] = inst_26763);
(statearr_26795[(7)] = inst_26748);
(statearr_26795[(8)] = inst_26747);
return statearr_26795;
})();var statearr_26796_26822 = state_26783__$1;(statearr_26796_26822[(2)] = null);
(statearr_26796_26822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (9)))
{var inst_26747 = (state_26783[(8)]);var inst_26761 = cljs.core.vec.call(null,inst_26747);var state_26783__$1 = state_26783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26783__$1,(11),out,inst_26761);
} else
{if((state_val_26784 === (5)))
{var inst_26751 = (state_26783[(9)]);var inst_26748 = (state_26783[(7)]);var inst_26747 = (state_26783[(8)]);var inst_26756 = (state_26783[(11)]);var inst_26755 = (inst_26747[inst_26748] = inst_26751);var inst_26756__$1 = (inst_26748 + (1));var inst_26757 = (inst_26756__$1 < n);var state_26783__$1 = (function (){var statearr_26797 = state_26783;(statearr_26797[(12)] = inst_26755);
(statearr_26797[(11)] = inst_26756__$1);
return statearr_26797;
})();if(cljs.core.truth_(inst_26757))
{var statearr_26798_26823 = state_26783__$1;(statearr_26798_26823[(1)] = (8));
} else
{var statearr_26799_26824 = state_26783__$1;(statearr_26799_26824[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (14)))
{var inst_26776 = (state_26783[(2)]);var inst_26777 = cljs.core.async.close_BANG_.call(null,out);var state_26783__$1 = (function (){var statearr_26801 = state_26783;(statearr_26801[(13)] = inst_26776);
return statearr_26801;
})();var statearr_26802_26825 = state_26783__$1;(statearr_26802_26825[(2)] = inst_26777);
(statearr_26802_26825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (10)))
{var inst_26767 = (state_26783[(2)]);var state_26783__$1 = state_26783;var statearr_26803_26826 = state_26783__$1;(statearr_26803_26826[(2)] = inst_26767);
(statearr_26803_26826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26784 === (8)))
{var inst_26747 = (state_26783[(8)]);var inst_26756 = (state_26783[(11)]);var tmp26800 = inst_26747;var inst_26747__$1 = tmp26800;var inst_26748 = inst_26756;var state_26783__$1 = (function (){var statearr_26804 = state_26783;(statearr_26804[(7)] = inst_26748);
(statearr_26804[(8)] = inst_26747__$1);
return statearr_26804;
})();var statearr_26805_26827 = state_26783__$1;(statearr_26805_26827[(2)] = null);
(statearr_26805_26827[(1)] = (2));
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
});})(c__15766__auto___26813,out))
;return ((function (switch__15710__auto__,c__15766__auto___26813,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26809[(0)] = state_machine__15711__auto__);
(statearr_26809[(1)] = (1));
return statearr_26809;
});
var state_machine__15711__auto____1 = (function (state_26783){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26783);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26810){if((e26810 instanceof Object))
{var ex__15714__auto__ = e26810;var statearr_26811_26828 = state_26783;(statearr_26811_26828[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26810;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26829 = state_26783;
state_26783 = G__26829;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26783){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26813,out))
})();var state__15768__auto__ = (function (){var statearr_26812 = f__15767__auto__.call(null);(statearr_26812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26813);
return statearr_26812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26813,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15766__auto___26972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15766__auto___26972,out){
return (function (){var f__15767__auto__ = (function (){var switch__15710__auto__ = ((function (c__15766__auto___26972,out){
return (function (state_26942){var state_val_26943 = (state_26942[(1)]);if((state_val_26943 === (7)))
{var inst_26938 = (state_26942[(2)]);var state_26942__$1 = state_26942;var statearr_26944_26973 = state_26942__$1;(statearr_26944_26973[(2)] = inst_26938);
(statearr_26944_26973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (1)))
{var inst_26901 = [];var inst_26902 = inst_26901;var inst_26903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26942__$1 = (function (){var statearr_26945 = state_26942;(statearr_26945[(7)] = inst_26903);
(statearr_26945[(8)] = inst_26902);
return statearr_26945;
})();var statearr_26946_26974 = state_26942__$1;(statearr_26946_26974[(2)] = null);
(statearr_26946_26974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (4)))
{var inst_26906 = (state_26942[(9)]);var inst_26906__$1 = (state_26942[(2)]);var inst_26907 = (inst_26906__$1 == null);var inst_26908 = cljs.core.not.call(null,inst_26907);var state_26942__$1 = (function (){var statearr_26947 = state_26942;(statearr_26947[(9)] = inst_26906__$1);
return statearr_26947;
})();if(inst_26908)
{var statearr_26948_26975 = state_26942__$1;(statearr_26948_26975[(1)] = (5));
} else
{var statearr_26949_26976 = state_26942__$1;(statearr_26949_26976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (15)))
{var inst_26932 = (state_26942[(2)]);var state_26942__$1 = state_26942;var statearr_26950_26977 = state_26942__$1;(statearr_26950_26977[(2)] = inst_26932);
(statearr_26950_26977[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (13)))
{var state_26942__$1 = state_26942;var statearr_26951_26978 = state_26942__$1;(statearr_26951_26978[(2)] = null);
(statearr_26951_26978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (6)))
{var inst_26902 = (state_26942[(8)]);var inst_26927 = inst_26902.length;var inst_26928 = (inst_26927 > (0));var state_26942__$1 = state_26942;if(cljs.core.truth_(inst_26928))
{var statearr_26952_26979 = state_26942__$1;(statearr_26952_26979[(1)] = (12));
} else
{var statearr_26953_26980 = state_26942__$1;(statearr_26953_26980[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (3)))
{var inst_26940 = (state_26942[(2)]);var state_26942__$1 = state_26942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26942__$1,inst_26940);
} else
{if((state_val_26943 === (12)))
{var inst_26902 = (state_26942[(8)]);var inst_26930 = cljs.core.vec.call(null,inst_26902);var state_26942__$1 = state_26942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(15),out,inst_26930);
} else
{if((state_val_26943 === (2)))
{var state_26942__$1 = state_26942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26942__$1,(4),ch);
} else
{if((state_val_26943 === (11)))
{var inst_26910 = (state_26942[(10)]);var inst_26906 = (state_26942[(9)]);var inst_26920 = (state_26942[(2)]);var inst_26921 = [];var inst_26922 = inst_26921.push(inst_26906);var inst_26902 = inst_26921;var inst_26903 = inst_26910;var state_26942__$1 = (function (){var statearr_26954 = state_26942;(statearr_26954[(11)] = inst_26920);
(statearr_26954[(7)] = inst_26903);
(statearr_26954[(8)] = inst_26902);
(statearr_26954[(12)] = inst_26922);
return statearr_26954;
})();var statearr_26955_26981 = state_26942__$1;(statearr_26955_26981[(2)] = null);
(statearr_26955_26981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (9)))
{var inst_26902 = (state_26942[(8)]);var inst_26918 = cljs.core.vec.call(null,inst_26902);var state_26942__$1 = state_26942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26942__$1,(11),out,inst_26918);
} else
{if((state_val_26943 === (5)))
{var inst_26910 = (state_26942[(10)]);var inst_26903 = (state_26942[(7)]);var inst_26906 = (state_26942[(9)]);var inst_26910__$1 = f.call(null,inst_26906);var inst_26911 = cljs.core._EQ_.call(null,inst_26910__$1,inst_26903);var inst_26912 = cljs.core.keyword_identical_QMARK_.call(null,inst_26903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26913 = (inst_26911) || (inst_26912);var state_26942__$1 = (function (){var statearr_26956 = state_26942;(statearr_26956[(10)] = inst_26910__$1);
return statearr_26956;
})();if(cljs.core.truth_(inst_26913))
{var statearr_26957_26982 = state_26942__$1;(statearr_26957_26982[(1)] = (8));
} else
{var statearr_26958_26983 = state_26942__$1;(statearr_26958_26983[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (14)))
{var inst_26935 = (state_26942[(2)]);var inst_26936 = cljs.core.async.close_BANG_.call(null,out);var state_26942__$1 = (function (){var statearr_26960 = state_26942;(statearr_26960[(13)] = inst_26935);
return statearr_26960;
})();var statearr_26961_26984 = state_26942__$1;(statearr_26961_26984[(2)] = inst_26936);
(statearr_26961_26984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (10)))
{var inst_26925 = (state_26942[(2)]);var state_26942__$1 = state_26942;var statearr_26962_26985 = state_26942__$1;(statearr_26962_26985[(2)] = inst_26925);
(statearr_26962_26985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26943 === (8)))
{var inst_26910 = (state_26942[(10)]);var inst_26902 = (state_26942[(8)]);var inst_26906 = (state_26942[(9)]);var inst_26915 = inst_26902.push(inst_26906);var tmp26959 = inst_26902;var inst_26902__$1 = tmp26959;var inst_26903 = inst_26910;var state_26942__$1 = (function (){var statearr_26963 = state_26942;(statearr_26963[(7)] = inst_26903);
(statearr_26963[(8)] = inst_26902__$1);
(statearr_26963[(14)] = inst_26915);
return statearr_26963;
})();var statearr_26964_26986 = state_26942__$1;(statearr_26964_26986[(2)] = null);
(statearr_26964_26986[(1)] = (2));
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
});})(c__15766__auto___26972,out))
;return ((function (switch__15710__auto__,c__15766__auto___26972,out){
return (function() {
var state_machine__15711__auto__ = null;
var state_machine__15711__auto____0 = (function (){var statearr_26968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26968[(0)] = state_machine__15711__auto__);
(statearr_26968[(1)] = (1));
return statearr_26968;
});
var state_machine__15711__auto____1 = (function (state_26942){while(true){
var ret_value__15712__auto__ = (function (){try{while(true){
var result__15713__auto__ = switch__15710__auto__.call(null,state_26942);if(cljs.core.keyword_identical_QMARK_.call(null,result__15713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15713__auto__;
}
break;
}
}catch (e26969){if((e26969 instanceof Object))
{var ex__15714__auto__ = e26969;var statearr_26970_26987 = state_26942;(statearr_26970_26987[(5)] = ex__15714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26988 = state_26942;
state_26942 = G__26988;
continue;
}
} else
{return ret_value__15712__auto__;
}
break;
}
});
state_machine__15711__auto__ = function(state_26942){
switch(arguments.length){
case 0:
return state_machine__15711__auto____0.call(this);
case 1:
return state_machine__15711__auto____1.call(this,state_26942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15711__auto____0;
state_machine__15711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15711__auto____1;
return state_machine__15711__auto__;
})()
;})(switch__15710__auto__,c__15766__auto___26972,out))
})();var state__15768__auto__ = (function (){var statearr_26971 = f__15767__auto__.call(null);(statearr_26971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15766__auto___26972);
return statearr_26971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15768__auto__);
});})(c__15766__auto___26972,out))
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